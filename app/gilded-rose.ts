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
        // this is for AGED_BRIE and BACKSTAGE_PASS
        this.items[i].increaseQuality();
        if (this.items[i].name == BACKSTAGE_PASS) {
          // case for BACKSTAGE_PASS
          if (this.items[i].sellIn < 11) {
            this.items[i].increaseQuality();
          }
          if (this.items[i].sellIn < 6) {
            this.items[i].increaseQuality();
          }
        }
      }
      if (this.items[i].name != SULFURAS) {
        // decrease sellIn for all except SULFURAS
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
            //for BACKSTAGE_PASS SULFURAS and default
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

/**
 * overall BACKSTAGE_PASS condistion 

if (this.items[i].sellIn < 0)) {
  this.items[i].quality =
  this.items[i].quality - this.items[i].quality;
  or 
  item.quality = 0;
return ;
}

Line number 50 

item.increaseQuality();

line number 54 

if (this.items[i].sellIn < 11) {
  this.items[i].increaseQuality();
}
if (this.items[i].sellIn < 6) {
  this.items[i].increaseQuality();
}

*/

/**
 * Overall AGED_BRIE condition
 *
 * from line number 51 -> his.items[i].increaseQuality();
 *
 * from line # 66 & 80 -> if (this.items[i].sellIn < 0) his.items[i].increaseQuality();
 *
 */

/**
 *
 * SULFURAS
 *
 * No update ?
 *
 */

/**
 * Default condition
 * Line # 45 - this.items[i].decreseQuality();
 * Line # 71 - if (this.items[i].sellIn < 0) {this.items[i].decreseQuality();}
 */

/**
 *
 * after switch statment - decreaseSellIn
 */
