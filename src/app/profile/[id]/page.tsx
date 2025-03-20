export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen text-black bg-gray-50 py-8">
            <h1 className="text-2xl font-bold">Profile Page  <span className="text-gray-500 bg-yellow-500">{params.id}</span></h1>
           
        </div>
    );
}
