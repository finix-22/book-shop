import scrapy


class AmazonSpider(scrapy.Spider):
    name = 'amazon'
    start_urls = [
        'https://www.amazon.com/s?k=kindle+ebooks',
    ]

    def parse(self, response):
        books = response.css('div.s-card-container.s-overflow-hidden.aok-relative.puis-expand-height.puis-include-content-margin.puis.s-latency-cf-section.s-card-border')
        for book in books:
            title = book.css('span.a-size-base-plus.a-color-base.a-text-normal::text').get()
            img = book.css('img.s-image::attr(src)').get()
            author = book.css('a.a-size-base.a-link-normal.s-underline-text.s-underline-link-text.s-link-style::text').get(default=None)
            author1 = book.css('div.a-row.a-size-base.a-color-secondary::text').get(default=None)
            author2 = book.css('span::text').get(default=None)
            price_main = book.css('span.a-price-whole::text').get()
            price_cents = book.css('span.a-price-fraction::text').get()
            rating = book.css('span.a-size-base::text').get()
            sales = book.css('span.a-size-base.s-underline-text::text').get()
            
            print(f"\ntitle: {title}\nimg: {img}\nauthor: {author}\nauthor1: {author1}\nauthor2: {author2}\nprice_main: {price_main}\nprice_cents: {price_cents}\nrating: {rating}\nsales: {sales}\n")