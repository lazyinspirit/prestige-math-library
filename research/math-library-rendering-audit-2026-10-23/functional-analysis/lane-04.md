# Functional Analysis rendering audit — lane 04

Reviewed all 94 assigned items and all 164 listed screenshot tiles individually at original resolution.
Every current item source matches its assignment hash; frozen snapshots are byte-identical to those sources. Every current HTML file and PNG matches its assignment or screenshot-manifest hash. The full per-item and per-tile SHA-256 coverage is in `lane-04.json`.

Confirmed rendering findings: 7 item instances, all caused by raw TeX in linked reference titles. One uncertain exact-sequence schematic candidate is recorded separately; it is not a confirmed defect.

## Confirmed findings

### def-hilbert-exterior-power-and-induced-operator

- Source: `items/def-hilbert-exterior-power-and-induced-operator.md`, lines 103.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[def-space-of-bounded-linear-operators]] and [[thm-bounded-operator-space-is-banach]]`.
- Screenshot: `screenshots/def-hilbert-exterior-power-and-induced-operator--01.png`.
- Symptom: The linked titles expose literal TeX such as \mathcal B(X,Y) instead of typeset mathematics.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### def-transpose-of-a-bounded-operator

- Source: `items/def-transpose-of-a-bounded-operator.md`, lines 25.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[lem-composition-operator-norm-inequality]]`.
- Screenshot: `screenshots/def-transpose-of-a-bounded-operator--01.png`.
- Symptom: The linked title exposes literal \le markup in the rendered sentence.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### lem-quotient-seminorm-is-representative-independent

- Source: `items/lem-quotient-seminorm-is-representative-independent.md`, lines 38, 44.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[def-quotient-seminorm]]`.
- Screenshot: `screenshots/lem-quotient-seminorm-is-representative-independent--01.png`.
- Symptom: The linked title prints raw TeX commands and untypeset subscript syntax, including \inf and \operatorname{dist}.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### thm-bounded-borel-pvm-integral

- Source: `items/thm-bounded-borel-pvm-integral.md`, lines 51.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[thm-bounded-operator-space-is-banach]]`.
- Screenshot: `screenshots/thm-bounded-borel-pvm-integral--01.png`.
- Symptom: The linked title exposes literal \mathcal B(X,Y) markup.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### thm-continuous-functional-calculus-for-bounded-self-adjoint-operators

- Source: `items/thm-continuous-functional-calculus-for-bounded-self-adjoint-operators.md`, lines 39.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[thm-bounded-operator-space-is-banach]]`.
- Screenshot: `screenshots/thm-continuous-functional-calculus-for-bounded-self-adjoint-operators--01.png`.
- Symptom: The linked title exposes literal \mathcal B(X,Y) markup.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### thm-fredholm-index-is-additive

- Source: `items/thm-fredholm-index-is-additive.md`, lines 38.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[def-quotient-vector-space-coset-notation]]`.
- Screenshot: `screenshots/thm-fredholm-index-is-additive--01.png`.
- Symptom: The linked title exposes literal \to markup in the quotient-map formula.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

### thm-hilbert-spaces-are-reflexive-by-riesz-representation

- Source: `items/thm-hilbert-spaces-are-reflexive-by-riesz-representation.md`, lines 47.
- Kind: Linked reference title prints raw TeX.
- Source excerpt: `[[thm-bounded-operator-space-is-banach]]`.
- Screenshot: `screenshots/thm-hilbert-spaces-are-reflexive-by-riesz-representation--01.png`.
- Symptom: The linked title exposes literal \mathcal B(X,Y) markup.
- The linked claim identity remains clear; the title math is a rendering issue. Repair the linked item title formatting while retaining the target identity.

## Uncertain diagram candidate

- Item: `thm-fredholm-index-is-additive`, source lines 48, 50, 52, 54, 56, 58.
- Kind: Finite exact-sequence schematic; candidate only, not a confirmed defect.
- The source defines the sequence `0 → V1 → V2 → V3 → V4 → V5 → V6 → 0`, where the terms are `ker T`, `ker(UT)`, `ker U`, `coker T`, `coker(UT)`, and `coker U`; it defines arrows α, β, γ, δ, ε and proves exactness at each term. The screenshot tiles `thm-fredholm-index-is-additive--01.png` and `--02.png` show the map definitions, exactness checks, and alternating-dimension cancellation.
- A schematic could put those six spaces in order, label each arrow with its defined map, mark exactness, and show the alternating dimension sum that yields index additivity. Preserve the quotient-coset domains on δ and ε. The proof already states and verifies all of this, so the schematic is optional and should be checked against the source if pursued.

## Existing diagram checks

No assigned item contains a TikZ/tikzcd block, commutative diagram, or other explicit diagram. There were no existing diagram maps, signs, orientations, or indices to validate.

No standalone clipping was confirmed. Tile crops align with manifest y/height ranges and continuation tiles cover the remaining content. Item-body formulas render through KaTeX; ordinary raw caret/underscore characters appear inside math delimiters. The uppercase technique banners are expected CSS output, and wikilinks intentionally appear as block lines. No Scratch section appeared in this lane.

The audit used local snapshots, rendered HTML, screenshot manifests, and screenshot tiles only. No live website, build, native checks, tests, item edits, or publication status changes were involved.
