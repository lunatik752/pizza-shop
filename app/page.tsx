import {Container, Filters, ProductCard, ProductsGroupList, Title, TopBar} from '@/components/shared';


export default function Home() {
    return (
        <>
            <Container className={'mt-10'}>
                <Title text='Все пиццы' size='lg' className={'font-extrabold'}/>
            </Container>
            <TopBar/>
            <Container className={'mt-10 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    <div className={'w-[250px]'}>
                        <Filters/>
                    </div>
                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            <ProductsGroupList title={'Пиццы'} categoryId={1} items={[
                                {
                                    id: 1,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: 'Чизбургер-пицца',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
