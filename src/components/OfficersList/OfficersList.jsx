import OfficersProfile from "../OfficersProfile/OfficersProfile";

export default function OfficersList({items}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <OfficersProfile officer={item} />
        </li>
      ))}
    </ul>
  );
}
