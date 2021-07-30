import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DataService } from './data.service';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  public title = 'Angular12PrimeNg';
  public items: MenuItem[] = [];
  public notes: Note[] | undefined;
  public selectedNote: Note | undefined;
  public newNote: Note | undefined;
  public authorId: number = 1;

  constructor(private dataService: DataService, private messageService: MessageService) { }

  public ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      }
    ];

    this.dataService.getNotes(1).subscribe(data => {
      this.notes = data
    });
  }

  public viewNote(note: Note) {
    console.log('View note:', note);
    this.selectedNote = note;
  }

  public getSelectedClass(note: Note): string {
    if (!this.selectedNote) return '';
    return this.selectedNote.id === note.id ? 'selected' : 'noneSelected';
  }

  public addNote(): void {
    console.log('addNote');
    this.newNote = {
      id: 0,
      title: '',
      note: '',
      author: 'Huy Nguyễn',
      authorId: this.authorId
    };
  }

  public cancelAddNote(): void {
    this.newNote = undefined;
    this.messageService.add({ severity: 'info', summary: 'Thông báo', detail: 'Đã hủy thông tin note!' });
  }

  public saveNote(): void {
    console.log('saveNote', this.newNote);
    if (!this.newNote) return;
    this.showConfirm();
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.messageService.clear('c');

    this.dataService.postNotes(this.newNote).subscribe(result => {
      console.log('result', result);
      this.notes?.push(result);
      this.newNote = undefined;
    });

  }

  onReject() {
    this.messageService.clear('c');
  }

}
