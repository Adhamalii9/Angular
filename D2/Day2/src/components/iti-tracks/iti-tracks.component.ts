import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Track {
  name: string;
  places: string[];
}

@Component({
  selector: 'app-iti-tracks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iti-tracks.component.html',
  styleUrl: './iti-tracks.component.css'
})
export class ITITracksComponent {
  tracks: Track[] = [
    { name: 'DOTNET', places: ['MNF', 'Banha'] },
    { name: 'JAVA', places: [] },
    { name: 'PHP', places: ['Cairo', 'Alex'] }
  ];

  selectedTrack?: Track;

  onSelectTrack(event: any) {
    const trackName = event.target.value;
    this.selectedTrack = this.tracks.find(track => track.name === trackName);
  }
}
