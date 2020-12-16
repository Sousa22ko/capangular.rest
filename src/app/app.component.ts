import { Component, OnInit } from '@angular/core';
import { Airport } from './Model/Airport';
import { FlightData } from './Model/Flights';
import { AirportService } from './Service/airport/airport-service.service';
import { FlightService } from './Service/flight/flight-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flightAPI';

  aeroportos!: Airport[];

  voos!: FlightData[];
  // error = {
  //   aeroporto: "",
  //   opcao: "",
  //   status: ""
  // }

  opcoesSelecionado = "";
  statusSelecionado = "";

  opcoes = [
    { nome: "Destino", value: "arr_iata" },
    { nome: "Saída", value: "dep_iata" }
  ];

  opcoes2 = [
    { nome: "Agendado", value: "scheduled" },
    { nome: "Ativo", value: "active" },
    { nome: "Pousado", value: "landed" },
    { nome: "Cancelado", value: "cancelled" },
    { nome: "Acidentado", value: "incident" },
    { nome: "Divergido", value: "diverted" }
  ];

  iata_selecionado: string = ""

  constructor(private fService: FlightService, private aService: AirportService) { }

  ngOnInit() {
    this.aService.findAllByCountryName("Brazil").subscribe(res => {
      this.aeroportos = res.data.sort((a, b) => {
        if (a.airport_name < b.airport_name) { return -1; }
        if (a.airport_name > b.airport_name) { return 1; }
        return 0;
      });
    });
  }

  consultarVoos() {
    if (this.opcoesSelecionado && this.statusSelecionado && this.iata_selecionado) {
      this.fService.findFlightsByArrival(this.iata_selecionado, this.opcoesSelecionado, this.statusSelecionado)
      .subscribe(res => {
        this.voos = res.data;
      });
    }
  }


}
