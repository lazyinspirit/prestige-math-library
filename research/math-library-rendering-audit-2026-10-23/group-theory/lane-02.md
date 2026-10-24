# Group Theory visual audit — lane 02

## Scope and coverage

Visually reviewed all 98 assigned frozen item titles and complete rendered ItemBody content, opening all 112 screenshot tiles individually at original resolution. The ledger records the exact expected and observed SHA256 for every source, snapshot body, HTML file, and screenshot tile. 98/98 source hashes, 98/98 snapshot body comparisons, 98/98 HTML hashes, and 112/112 tile hashes match.

## Confirmed rendering findings

- **raw ASCII mathematical formula in definition body:** `def-generalized-fitting-subgroup`, [source line 26](../../../items/def-generalized-fitting-subgroup.md#L26); For finite G, F*(G)=F(G)E(G). See [screenshot tile](screenshots/def-generalized-fitting-subgroup--01.png).
- **raw ASCII mathematical formulas in item body:** `ex-hirsch-length-and-growth-degree-need-not-agree`, [source line 27](../../../items/ex-hirsch-length-and-growth-degree-need-not-agree.md#L27); H, h(H)=3 and D(H)=4 are plain text; h=6 and D=10 also plain text. See [screenshot tile](screenshots/ex-hirsch-length-and-growth-degree-need-not-agree--01.png).
- **raw caret notation in item title:** `thm-cartan-matrix-is-d-transpose-d`, [source line 4](../../../items/thm-cartan-matrix-is-d-transpose-d.md#L4); The Cartan matrix is D^T D; the caret is shown literally in the title. See [screenshot tile](screenshots/thm-cartan-matrix-is-d-transpose-d--01.png).
- **raw caret notation in item title:** `rem-nonabelian-extension-obstruction-in-h-three`, [source line 4](../../../items/rem-nonabelian-extension-obstruction-in-h-three.md#L4); Nonabelian extension obstruction in H^3; the caret is shown literally in the title. See [screenshot tile](screenshots/rem-nonabelian-extension-obstruction-in-h-three--01.png).
- **raw underscore notation in item title:** `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate`, [source line 4](../../../items/ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate.md#L4); S_3 and A_3 appear with literal underscores in the title. See [screenshot tile](screenshots/ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate--01.png).
- **raw subscript notation in item title:** `fs-zp-is-cyclic-as-an-abstract-group`, [source line 4](../../../items/fs-zp-is-cyclic-as-an-abstract-group.md#L4); Zp appears without a subscript in the title. See [screenshot tile](screenshots/fs-zp-is-cyclic-as-an-abstract-group--01.png).

The uppercase technique banners are expected. No Scratch sections or reference-title leaks were seen. Wikilink title lines are intentional. No unexpected clipping was confirmed from the standalone original-resolution tiles; the few long captures continue on numbered tiles.

## Diagram review

No TikZ diagrams were present in this lane. The existing commutative diagram in `def-morphism-of-group-extensions` was checked: row maps run (1	o N_i	o E_i	o Q_i	o1), vertical maps point downward, and the kernel and quotient squares commute with the stated labels. No map, sign, or index error was found.

One optional, source-supported candidate is a quotient graph sketch for `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree`, lines 42–44: show the line translated by 3 and the quotient cycle ([0]-[1]-[2]-[0]). The existing prose already establishes the counterexample, so the diagram is optional.

No source items, publication statuses, or publication outputs were changed. Only the lane-02 report files were written.
