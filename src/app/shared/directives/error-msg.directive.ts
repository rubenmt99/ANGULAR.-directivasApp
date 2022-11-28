import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {


  private _color: string ='red';
  private _mensaje: string= 'este campo es requerido';


  htmlElement: ElementRef<HTMLElement>;

  //solo se ejecuta cuando cambia el color
  @Input() set color(valor: string){
      this._color = valor;
      this.setColor();
    }
  

  @Input() set mensaje(valor: string){
    this._mensaje = valor;
    this.setMensaje();
  }

  //modificar el style.css
  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef) { 
    this.htmlElement = el;
  }

  //Lo necesitamos para ejecutar la directiva al pulsar el boton
  //Si no solo se ejecutaria al principio con el onInit y no funcionaria
  ngOnChanges(changes: SimpleChanges): void {

    /* if(changes['mensaje']){
      const mensaje = changes['mensaje']?.currentValue;
      this.htmlElement.nativeElement.innerHTML = mensaje;
    }
    
    if(changes['color']){
      const color= changes['color']?.currentValue;
      this.htmlElement.nativeElement.style.color= color;
    } */

  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
