# Step 3a reader report — batch 12

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Reader: `reader-12`

## Opened inventory

Assigned pages:

- `type-a-affine-hecke-algebras-and-bernstein-pbw` — `library/hopf-hecke-algebras/type-a-affine-hecke-algebras-and-bernstein-pbw.md`.
- `type-a-affine-hecke-algebras-and-bernstein-pbw-examples` — `library/hopf-hecke-algebras/type-a-affine-hecke-algebras-and-bernstein-pbw-examples.md`.

All eleven assigned items were opened: `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization`, `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences`, `def-hh-type-a-rational-skew-group-algebra`, `def-hh-type-a-affine-bernstein-presentation`, `lem-hh-demazure-lusztig-operators-satisfy-affine-relations`, `thm-hh-affine-type-a-bernstein-pbw`, `thm-hh-affine-type-a-center`, `ex-hh-type-a-negative-laurent-divided-difference`, `ex-hh-type-a-rank-two-bernstein-relation`, `ex-hh-type-a-polynomial-module-action`, and `ex-hh-type-a-symmetric-central-elements`.

The batch manifest and proof contracts were opened. Direct published item dependencies opened for the assigned proofs were `lem-hh-hecke-anti-involution-bar-and-normalization`, `lem-hh-universal-presentations-and-base-change`, `lem-hh-finite-polynomial-and-localization-constructions`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `thm-hh-matsumoto-reduced-word-theorem`, `lem-hh-free-associative-ring-and-relations-descent`, `lem-int-cancellation`, `lem-nat-embeds-int`, `def-zero-divisor-and-integral-domain`, and `thm-hh-generic-coxeter-hecke-standard-basis`. The generic Hecke basis argument's support items `def-hh-universal-coxeter-hecke-parameters-and-presentation`, `lem-hh-reduced-word-independence-and-length-multiplication`, and `lem-hh-commuting-left-right-hecke-length-operators` were also opened.

The four page prerequisites were opened: `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, and `polynomial-rings-and-roots`.

For the Coxeter length-operator route, `def-hh-coxeter-matrix-word-group-and-length`, `def-hh-geometric-coxeter-representation-and-roots`, `lem-hh-dihedral-root-recurrence-and-root-sign`, and `thm-hh-coxeter-exchange-deletion-and-faithfulness` were also opened.

The cited primary-source passages checked were Alexander A. Kirillov, Jr., *Lectures on the affine Hecke algebras and Macdonald conjectures*, arXiv:math/9501219v1, title page and Lecture 3, PDF pp. 19–20 (`https://arxiv.org/pdf/math/9501219`); I. G. Macdonald, *Affine Hecke algebras and orthogonal polynomials*, §§4.3 and 4.5 (`https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf`); Opdam–Solleveld, *Homological algebra for affine Hecke algebras*, Theorem 1.3(a),(c), PDF p. 11 (`https://www.math.ru.nl/~solleveld/tempered.pdf`); Lusztig, *Lectures on Hecke Algebras with Unequal Parameters*, Proposition 3.3, PDF pp. 8–9 (`https://arxiv.org/pdf/math/0108172`); and Björner–Brenti, *Combinatorics of Coxeter Groups*, §6.1, printed p. 174 (`https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf`). Kirillov's title page identifies him as the author. Theorem 3.11 states the affine basis but explicitly defers its independence proof; the assigned local PBW proof supplies that argument. The cited sections support the Bernstein relation, polynomial representation, center and basis statements.

## Review and edits

The assigned proof chain is mathematically consistent. The Laurent divided difference handles every integer exponent difference, including negative exponents; the skew-group multiplication and Demazure–Lusztig braid calculation are locally verified; the PBW proof establishes both spanning and independence over the universal domain before transporting the free basis by base change; and the center statement is restricted to `R0`, with no specialization claim. Each of the four examples computes the stated result. The page summaries accurately distinguish the algebraic affine presentation from the p-adic convolution and degenerate affine constructions.

Edits made:

- Corrected the cited author for arXiv `math/9501219` from Ivan Cherednik to Alexander A. Kirillov, Jr. The PDF title page names Kirillov as author. This citation appears in the six assigned A-page items `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences`, `def-hh-type-a-rational-skew-group-algebra`, `def-hh-type-a-affine-bernstein-presentation`, `lem-hh-demazure-lusztig-operators-satisfy-affine-relations`, `thm-hh-affine-type-a-bernstein-pbw`, and `thm-hh-affine-type-a-center`. The URL and verified locators were retained.
- In `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization`, corrected the scalar-extension generator from `T_i ⊗ 1` to `1 ⊗ T_i` in `R_v ⊗_{R0} H_{n,Q}^{fin}`. The inverse assignment was corrected in the same step. The proof-contract derivation for step 1.2 now records `1 ⊗ T_i ↦ vU_i`.
- None of the seven changed items carried a `verification.judge` record, so there was no stale judge record to remove. No page prose or published content was edited.

The changed items were each reflowed; all seven were reported unchanged. Each one-file precheck passed. Strict proof-contract validation checked all 11 assigned items with zero errors and warnings. Final proof-layout validation on all seven changed item paths reported 7 items, 36 steps, and zero defects.

## Unedited finding

- Published dependency `lem-hh-commuting-left-right-hecke-length-operators`, proof steps 1.4 and 2.1 (lines 67–71): the proof calls the four listed cases plus two remaining cases exhaustive without spelling out why the mixed-sign `±2` outcomes cannot occur. Its fact [F1] gives the required length-change-by-one property. Applying that property on both sides of `sxt` leaves only `ell(sxt)=ell(x)` in either mixed-sign case. This is an immediate, nonfatal proof-step omission; the supplier is published and outside this reader's edit scope. The assigned finite-basis lemma reaches it through `thm-hh-generic-coxeter-hecke-standard-basis`.

## Page verdicts and blocker

- `type-a-affine-hecke-algebras-and-bernstein-pbw`: **pass**. The summary matches the item statements and the universal-ring scope of the center result.
- `type-a-affine-hecke-algebras-and-bernstein-pbw-examples`: **pass**. The examples are correct, and the distinctions from the p-adic and degenerate constructions are accurate.

No fatal blocker remains in batch 12. The nonfatal published-dependency finding is routed separately in `research/hopf-hecke-unfinished-15-2026-10-15-reader-findings-12.json`.

## Coverage note

No task-specific rendered evidence bundle was present in the run-local state or the batch-12 research files. I used the current manifest, proof contracts, assigned carriers, direct suppliers, the immediate Coxeter exchange/dihedral inputs, and cited source passages. I did not audit the full transitive closure of every published dependency. I first opened `thm-hh-generic-coxeter-hecke-standard-basis` before opening its two length-operator and reduced-word support items, then checked those support arguments before finalizing the dependency review; no item was reopened. That branch did not follow the requested physical read order.
