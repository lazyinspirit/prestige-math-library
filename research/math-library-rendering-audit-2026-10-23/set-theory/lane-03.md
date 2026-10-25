# Set Theory visual audit — lane 03

## Scope and coverage

Audited all 128 assigned items on their listed pages using the frozen source snapshots and matching local `ItemBody` HTML. Viewed all 209 assigned screenshot tiles individually at original resolution. The ledger records 125 clean items and 3 items with confirmed findings.

Source snapshots matched current assigned sources for all items; source and matching HTML hashes also matched the assignment. Per-item sections and screenshot paths, per-tile SHA256 and dimensions, and view attestations are in [lane-03.json](lane-03.json).

## Confirmed findings

- **The title shows the cardinal subscript as the literal text "aleph_1". The Statement typesets the corresponding notation as $\mathrm{MA}(\aleph_1)$.** `thm-ma-products-of-ccc-spaces-are-ccc`, frontmatter title, line(s) 4. Evidence: [thm-ma-products-of-ccc-spaces-are-ccc--01.png](screenshots/thm-ma-products-of-ccc-spaces-are-ccc--01.png). Suggested repair: Typeset the title notation, for example "$\mathrm{MA}(\aleph_1)$, arbitrary products of ccc spaces are ccc".
- **Mathematical symbols in the complete Statement and two proof steps are written as unformatted ASCII names and operators ("kappa", "lambda>=kappa", "P_kappa(lambda)", and "kappa-complete"). Other formulas in the same item are typeset, so notation changes form within the same claim and proof.** `thm-lc-strong-compactness-fine-measures-and-logic`, Statement and Proof, line(s) 27, 41, 43. Evidence: [thm-lc-strong-compactness-fine-measures-and-logic--01.png](screenshots/thm-lc-strong-compactness-fine-measures-and-logic--01.png), [thm-lc-strong-compactness-fine-measures-and-logic--02.png](screenshots/thm-lc-strong-compactness-fine-measures-and-logic--02.png). Suggested repair: Typeset the mathematical symbols consistently, for example $\kappa$, $\lambda\ge\kappa$, $\mathcal P_\kappa(\lambda)$, and "\kappa-complete" as $\kappa$-complete.
- **The Proof technique label is visually uppercased by the renderer, turning the inline TeX control sequence into the literal-looking "$\OMEGA_1$" in the rendered label. The same notation in the Statement body renders correctly.** `thm-feferman-levy-omega-one-is-ground-aleph-omega`, Proof technique, line(s) 48. Evidence: [thm-feferman-levy-omega-one-is-ground-aleph-omega--01.png](screenshots/thm-feferman-levy-omega-one-is-ground-aleph-omega--01.png). Suggested repair: Use plain text such as "leastness of omega-one" in the Proof technique metadata, or prevent the label’s uppercase styling from transforming math.

## Optional diagram candidate

- **Stone duality natural maps:** line 26 in `thm-stone-duality-by-inverse-image` gives both contravariant assignments and their natural isomorphisms. A commutative correspondence diagram could show `h:B→C` inducing `h*:Ult(C)→Ult(B)` by inverse image, and `f:X→Y` inducing `f*:Clop(Y)→Clop(X)`, with `ε_B` and `η_X` as the natural comparison maps. The equations already explain the maps, so this is optional.

No source, application, or publication files were changed.
