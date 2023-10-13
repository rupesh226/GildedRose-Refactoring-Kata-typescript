const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

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
  constructor(public items: Array<Item> = []) {}

  updateQuality(): Array<Item> {
    for (let i = 0; i < this.items.length; i++) {
      this.updateQualityByItems(this.items[i]);
    }

    return this.items;
  }

  private updateQualityByItems(item: Item) {
    switch (item.name) {
      case AGED_BRIE:
        this.ageBrieCase(item);
        break;

      case BACKSTAGE_PASS:
        this.backstagePassCase(item);
        break;

      case SULFURAS:
        this.sulfurasCase(item);
        break;
      default:
        this.defaultCase(item);
        break;
    }
    item.decreaseSellIn();
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
