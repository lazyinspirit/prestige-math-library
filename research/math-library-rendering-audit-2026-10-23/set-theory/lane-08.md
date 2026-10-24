# Set Theory visual audit — lane 08

## Scope and coverage

Reviewed all 127 assigned items and all 209 receipt-listed revision-2 PNG tiles. Every tile was opened individually with original resolution preserved. Titles and complete rendered ItemBodies were checked against the frozen source snapshots and matching local HTML. All 127 snapshot hashes, all 127 HTML hashes, and all 209 tile hashes matched their assignment or receipt. The per-item section, page, source, HTML, screenshot, and tile-view coverage is recorded in [lane-08.json](lane-08.json).

The inspection covered local previews only. No live website, network, production content, application file, or publication status was accessed or changed. All 127 receipts report zero TikZ diagrams; no missing diagram was indicated by the audited content.

## Finding

- **Confirmed literal math markup in title:** `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable`. The frontmatter title at line 4 of `items/lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable.md` renders `Aut(U_Q^<)` as plain text with literal underscore and caret characters. Evidence: [tile 1](screenshots/lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable--01.png). Format the automorphism-group notation as inline math, for example `$\operatorname{Aut}(U_{\mathbb{Q}}^{<})$`.

The other 126 assigned items were clean for confirmed visible rendering defects. No source, application, or production tooling was changed.
