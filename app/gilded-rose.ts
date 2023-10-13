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
          this.ageBrieCase(this.items[i]);
          break;

        case BACKSTAGE_PASS:
          this.backstagePassCase(this.items[i]);
          break;

        case SULFURAS:
          this.sulfurasCase(this.items[i]);
          break;
        default:
          this.defaultCase(this.items[i]);
          break;
      }
      this.items[i].decreaseSellIn();
    }

    return this.items;
  }

  private ageBrieCase(item: Item) {
    item.increaseQuality();
    if (item.sellIn < 0) {
      item.increaseQuality();
    }
  }

  private backstagePassCase(item: Item) {
    item.increaseQuality();
    if (item.sellIn < 11) {
      item.increaseQuality();
    }
    if (item.sellIn < 6) {
      item.increaseQuality();
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private sulfurasCase(item: Item) {
    // No update
  }

  private defaultCase(item: Item) {
    item.decreseQuality();
    if (item.sellIn < 0) {
      item.decreseQuality();
    }
  }
}
