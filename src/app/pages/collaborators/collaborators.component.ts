import { Component, OnInit } from '@angular/core';

import { Scion } from '../Models/Scions/scion.model';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {

  private Scion: Scion = new Scion();

  DataElement: Scion[] = [
    {
      Avatar: 'https://media.discordapp.net/attachments/802587090847531028/884191546168197231/Lappland.png?width=676&height=676',
      Name: 'Anri Bloomheart',
      Age: 21,
      Role: 'Líder',
      Job: 'Summoner',
      LVL: 2
    },
    {
      Avatar: 'https://cdn.discordapp.com/attachments/802587090847531028/884192519053795368/Texas.png',
      Name: 'Charlotte Malier Evylin',
      Age: 20,
      Role: 'Capitã',
      Job: 'Chemist',
      LVL: 2
    },
    {
      Avatar: 'https://cdn.discordapp.com/attachments/802587090847531028/884188430374928464/92c4f0f37e6fb3086c5d176dd5c2bed5.jpg',
      Name: 'Laya',
      Age: 18,
      Role: 'Membra',
      Job: 'White Mage',
      LVL: 2
    },
    {
      Avatar: 'https://static.zerochan.net/Usagiyama.Rumi.full.2393653.jpg',
      Name: 'Ninna',
      Age: 51,
      Role: 'Membra',
      Job: 'Samurai',
      LVL: 2
    },
    {
      Avatar: 'https://cdn.discordapp.com/attachments/802587090847531028/884188428898553876/6121dd32fdd4b0070081cb96.jpg',
      Name: 'Sethe',
      Age: 20,
      Role: 'Capitão',
      Job: 'Gambler',
      LVL: 2
    },
    {
      Avatar: 'https://cdn.discordapp.com/attachments/802587090847531028/884191322540474448/338469.png',
      Name: 'Yohanna',
      Age: 10011001,
      Role: 'Membra',
      Job: 'Gunbreaker',
      LVL: 2
    }

  ]
  
  displayedColumns = ['Avatar', 'Nome', 'Idade', 'Cargo', 'Classe', 'Level'];

  dataSource = this.DataElement;

  constructor( ) { }

  ngOnInit(): void {
  }

}
