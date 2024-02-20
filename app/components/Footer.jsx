import {NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  // console.log(shop);
  return (
    <footer className="footer">
      {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )}
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
          <div className='flex flex-col'>
            <div>
              Hello world
            </div>
            <div>
              Hello world
            </div>
            <div>
              Hello world
            </div>
            <div>
              Hello world
            </div>
            <div>
              Hello world
            </div>
            {/* {FALLBACK_FOOTER_MENU.items.map((item) => {
              if (!item.url) 
                return null;
              return <div className='my-16'>{create_tag(item,process_url(item.url,publicStoreDomain,primaryDomainUrl))}</div>
            })} */}
          </div>
        
    </nav>
  );
}

const process_url = (url,publicStoreDomain,primaryDomainUrl)=>{
  
  return url.includes('myshopify.com') ||
  url.includes(publicStoreDomain) ||
  url.includes(primaryDomainUrl)
    ? new URL(url).pathname
    : url;

}

const create_tag = (item,url)=>{
  const isExternal = !url.startsWith('/');
  return isExternal ? (
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
  );
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
