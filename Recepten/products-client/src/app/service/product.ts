export class Product {

   constructor (public name: string, public kcal: number, public ing: string, public tijd: number) {}

   toForm(): string {
      return `name=${this.name}&kcal=${this.kcal}&ing=${this.ing}&tijd=${this.tijd}`;
   }
}
