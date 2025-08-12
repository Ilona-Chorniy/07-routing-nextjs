import SidebarNotes from './@sidebar/default';
import css from './LayoutNotes.module.css';

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div className={css.container}>
        <div className={css.sidebar}>
        <SidebarNotes />
        </div>
        <main className={css.notesWrapper}>
        {children}
        </main>
    </div>
  );
}
