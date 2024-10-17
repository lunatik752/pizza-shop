import {Container, Filters, Title, TopBar} from '@/components/shared';


export default function Home() {
    return (
        <>
            <Container className={'mt-10'}>
                <Title text='Все пиццы' size='lg' className={'font-extrabold'}/>
            </Container>
            <TopBar/>
            <Container className={'mt-10 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    <div className={'flex items-center justify-between'}>
                        <Filters/>
                    </div>
                    <div className={'flex-1'}>
                        <div className={'flex items-center justify-between'}>
                            <Title text='Список товаров' size='sm' className={'font-extrabold'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
