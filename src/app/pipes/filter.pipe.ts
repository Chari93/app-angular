import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform{
  transform(values: string[], arg: string): string[] {
    if(!arg) return values;
    let result: string[] =[];
    for (let value of values){
      if(value.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase()) > -1) result = [...result, value];
    }
    return result;
  }
}