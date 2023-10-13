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
      // Looks like we need increaseQuality, decreaseQuality, decreaseSellIn methods
      // This can be convert into a switch statement

      if (
        this.items[i].name != AGED_BRIE &&
        this.items[i].name != BACKSTAGE_PASS
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != SULFURAS) {
            // Could be default ? because AGED_BRIE BACKSTAGE_PASS and SULFURAS condition are negative ? (decrease quality)
            this.items[i].decreseQuality();
          }
        }
      } else {
        this.items[i].increaseQuality();
        if (this.items[i].name == BACKSTAGE_PASS) {
          if (this.items[i].sellIn < 11) {
            this.items[i].increaseQuality();
          }
          if (this.items[i].sellIn < 6) {
            this.items[i].increaseQuality();
          }
        }
      }
      if (this.items[i].name != SULFURAS) {
        this.items[i].decreaseSellIn();
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != AGED_BRIE) {
          if (this.items[i].name != BACKSTAGE_PASS) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != SULFURAS) {
                this.items[i].decreseQuality();
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          this.items[i].increaseQuality();
        }
      }
    }

    return this.items;
  }
}
