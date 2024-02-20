import {NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';
import footer_styles from '../styles/footer/footer.css';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  return (
    <footer
      className="footer"
      style={{
        background: 'linear-gradient(transparent 3%,rgb(205,205,205),black 100%)',
      }}
    >


        {/* BRAND NAME */}
        <div className='text-center mt-40'>
          <p className="text-4xl footer_font text-white">Fashionwallah</p>
        </div>
      
      {/* FEATURES AND OFFER SECTION */}
        <FooterFeatures feature_and_offer={STORE_OFFERS_AND_FEATURES}/>

      <div className="flex flex-row justify-between px-48">
        {/* CONTACT SECTION */}
        <Contact_Section />

        {/* SECTION 2 LINKS */}
        {menu && shop?.primaryDomain?.url && (
          <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
        )}
      </div>
      <div className="mb-20"></div>
    </footer>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav className="footer-menu" role="navigation">
      <div className="flex flex-col text-gray-200">
        {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
          if (!item.url) return null;
          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primar5yDomainUrl)
              ? new URL(item.url).pathname
              : item.url;
          const isExternal = !url.startsWith('/');
          return (
            <div className="my-3">
              {isExternal ? (
                <a
                  href={url}
                  key={item.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                </a>
              ) : (
                <NavLink
                  end
                  key={item.id}
                  prefetch="intent"
                  style={activeLinkStyle}
                  to={url}
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

const FooterFeatures = ({feature_and_offer})=>{
  return <div className="flex flex-row justify-center items-center my-10">
            { 
              feature_and_offer.map((item,index)=>(
                  <div className="flex flex-col justify-center items-center mx-5 text-4xl">
                    <div>
                      {item.emoji}
                    </div>
                    <div className="text-center text-white text-2xl">
                      {item.feature}
                    </div>
                  </div>
              ))
            }
         </div>
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

const STORE_OFFERS_AND_FEATURES = [
  {
    "emoji": "🎉",
    "feature": "Exciting discounts on all products"
  },
  {
    "emoji": "⚡",
    "feature": "Fast and reliable shipping services"
  },
  {
    "emoji": "🌟",
    "feature": "Exclusive deals for loyal customers"
  },
  {
    "emoji": "🎁",
    "feature": "Special gifts with every purchase"
  }
];



// CONTACT ELEMENT

const Contact_Section = ()=>{
  return <div className="flex flex-col justify-center items-left">
  <div className="text-white text-4xl my-3 footer_font">Hey there 👋🏼</div>
  <div className="text-gray-200 my-3 footer_font">
    Stay in touch for good vibes & no spam.
  </div>
  <div>
    <div className="mb-4 border border-rounded rounded-md focus:border-white p-3">
      <label className="block text-gray-300 text-sm mb-2" htmlFor="Email">
        E-mail
      </label>
      <div className="flex flex-row">
        <input
          className="appearance-none
                    w-full py-2
                    text-gray-700
                    leading-tight
                    bg-transparent
                    focus:text-white
                    border-0
                    footer_font"
          style={{minWidth:'10vw'}}
          id="Email"
          type="text"
        />
        <button className="rounded-full text-white bg-none mx-3">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
        </button>
      </div>
    </div>
  </div>
</div>
}

// IMPORTING CSS

export function links() {
  return [{rel: 'stylesheet', href: footer_styles}];
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
