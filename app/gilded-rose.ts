const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  increaseQuality() {
    if (this.quality < 50) this.quality++;
  }
  decreseQuality() {
    if (this.quality > 0) this.quality--;
  }
  decreaseSellIn() {
    this.sellIn--;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // This can be convert into a switch statement

      switch (this.items[i].name) {
        case AGED_BRIE:
          this.items[i].increaseQuality();
          if (this.items[i].sellIn < 0) {
            this.items[i].increaseQuality();
          }
          break;

        case BACKSTAGE_PASS:
          this.items[i].increaseQuality();
          if (this.items[i].sellIn < 11) {
            this.items[i].increaseQuality();
          }
          if (this.items[i].sellIn < 6) {
            this.items[i].increaseQuality();
          }
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = 0;
          }
          break;

        case SULFURAS:
          // No update
          break;
        default:
          this.items[i].decreseQuality();
          if (this.items[i].sellIn < 0) {
            this.items[i].decreseQuality();
          }
          break;
      }
      this.items[i].decreaseSellIn();
    }

    return this.items;
  }
}
