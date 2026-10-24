# Group Theory visual audit — lane 06

## Scope and coverage

Reviewed all 97 assigned frozen titles and full item bodies. The source, frozen snapshot, and captured HTML matched their assignment hashes for every item; source and snapshot bytes were identical. Individually opened all 124 assigned screenshot tiles through the image viewer at original resolution. Every tile hash matched its capture receipt. The JSON ledger records exact paths and SHA256 values for every item and tile, sections checked, receipt diagnostics, and item-level findings: [lane-06.json](lane-06.json).

## Confirmed rendering findings

- **Confirmed:** `def-exterior-square-of-an-abelian-group`, source/snapshot line 26 — The bare formula `∧²A=(A⊗_Z A)/⟨a⊗a:a∈A⟩` displays as ordinary text instead of typeset math. See [screenshot](screenshots/def-exterior-square-of-an-abelian-group--01.png). Delimit the formula with supported math syntax.
- **Confirmed:** `cor-zero-h-two-class-is-equivalent-to-splitting`, title line 4 — `H^2` displays with a literal caret in the title. See [screenshot](screenshots/cor-zero-h-two-class-is-equivalent-to-splitting--01.png). Typeset it in the title or use plain text.
- **Confirmed:** `ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero`, title line 4 — `H^1(C_2,C_3)` displays with literal carets and underscores in the title; its body formula is typeset correctly. See [screenshot](screenshots/ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero--01.png). Typeset the title notation or use plain text.
- **Confirmed:** `ex-free-presentation-five-term-sequence-for-a-cyclic-group`, source/snapshot line 29 — `H_2(C_m;\mathbb Z)=0` is outside math delimiters, so the underscore and TeX command appear literally. See [screenshot](screenshots/ex-free-presentation-five-term-sequence-for-a-cyclic-group--01.png). Delimit the expression.

## Diagram review

No existing TikZ diagrams occur in the assigned items, so there were no existing diagram maps, orientations, indices, or signs to validate. Receipts report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures.

One optional diagram candidate is supported by `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms`, source lines 37–39 and 61–65: an invariant bi-infinite axis with the action of `g` translating by `ell(g)`, plus an off-axis vertex `x` and projection `y` illustrating `d(x,gx)=2d(x,A_g)+ell(g)`. A labeled TikZ schematic could clarify the axis direction, projection, and concatenated geodesic used in the uniqueness argument. This is a pedagogical candidate, not a mathematical defect or a proof requirement. The source-rendered panels [01](screenshots/thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms--01.png) and [02](screenshots/thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms--02.png) contain no diagram.

## Other observations and limits

The observed `TECHNIQUE` banners are expected uppercase CSS styling. Wikilinks render as separate block lines by design; I did not count those line breaks or their surrounding punctuation as defects. I confirmed no actual clipping from an original standalone tile. No HTTP/live website check, build, tests, item edit, or publication action was performed.
