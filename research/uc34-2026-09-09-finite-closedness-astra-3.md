# Finite-dimensional closedness repair

Date: 2026-09-09. One-item owner-authorized local repair; no judge or shared-file changes.

## cor-finite-dimensional-subspaces-are-closed

Disposition: locally repaired in ZF, preserving real/complex scope, a supplied finite ordered basis, zero dimension, and arbitrary (possibly incomplete) ambient normed space.

- Target: `items/cor-finite-dimensional-subspaces-are-closed.md`.
- Before SHA-256: `565333d53d2a30b539d3cf114f5c80944db8342fd9cc0dbe0f3904e57a7b75b7`.
- After SHA-256: `fb405afca17df8c373daed15ad7e806779647a66583819fe67b148597ebf9b47`.
- Old judge/audited stamps replaced by an explicitly scoped, delegated `locally-repaired` record. No independent certification is claimed.

### Defect and repair

The old proof invoked `lem-complete-subspace-is-closed`, whose actual proof invokes `thm-complete-subspace-iff-closed` claim 1, manufacturing an adherence sequence via the explicitly countable-choice-qualified direction of `thm-metric-sequential-closure`. That is not a ZF proof of the corollary. The offending dependency and invocation are removed; none of these general supplier files was edited.

The zero-dimensional case is now proved directly: the empty basis spans `{0}`, and every nonzero ambient point has a ball of radius half its norm avoiding `{0}`.

For positive dimension, realify the supplied complex basis if necessary by interleaving each vector and its multiple by i. Grouping real relations into complex ones verifies real independence and splitting coefficients proves spanning. The earlier finite-dimensional Banach corollary applies to this displayed real basis, without a basis-existence choice.

Fix a rational enumeration and natural pairing bijection. Define surjections onto finite rational tuples uniformly by `E_0(s)=()` and `E_(j+1)(p(s,t))=(E_j(s),q(t))`, with finite stage-tagged recursion. The resulting finite-sum map enumerates the rational span of the basis. This does not choose an enumeration for each member of a countable family. Coefficientwise least rational indices and the explicit finite norm bound prove density.

For a fixed adherent point x and each k, adherence followed by that density proves existence of an enumerated rational combination within `1/(k+1)` of x. The least such index defines the approximating sequence outright. It is Cauchy in the subspace, whose already verified completeness gives a limit y in the subspace. The triangle inequality forces x=y. Thus every adherent point belongs to the subspace, proving closedness without general sequence-manufacturing closure or complete-implies-closed.

### Actual suppliers and order

Full direct contracts and their used proof clauses were read. The substantive finite-dimensional completeness supplier was checked through its actual fixed-basis norm-equivalence and coordinate-completeness proof paths during the preceding Hamel research; details are in `research/uc34-2026-09-09-hamel-zf-research-astra-3.md`. Its norm-equivalence path uses Euclidean Heine–Borel's deterministic bisection and open-cover EVT; its coordinate limit path assembles unique real limits. The general complete-subspace-closed theorem is not on this used path.

All 11 final direct dependencies are published and earlier than the target at order 288.051, item 4:

| Supplier | Canonical order |
|---|---|
| `cor-finite-dimensional-normed-spaces-are-banach` | 288.051, item 3 |
| `def-normed-subspace` | 288.047 |
| `def-linear-basis` | 74 |
| `thm-rationals-countable` | 18 |
| `thm-n-cross-n-countable` | 18 |
| `lem-q-and-irrationals-dense-r` | 131; rational-density clause only |
| `thm-recursion` | 6 |
| `thm-well-ordering-principle` | 6 |
| `cor-archimedean-reciprocal` | 9 |
| `rem-real-and-complex-normed-space-convention` | 288.047; published scalar convention, not Recorded |
| `thm-complex-numbers-are-the-real-coordinate-plane` | 54 |

Order-6 membership was checked against the exact actual published page inventory because its legacy canonical row has empty items. No Hamel theorem (later on this page), Recorded result, or later weak-choice theorem is used.

### Full source and checks

Daniel Daners, *Introduction to Functional Analysis*, Semester 1, 2017, [full University of Sydney PDF](https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf): Theorem 10.1 and its complete proof, printed pp. 33–34, and Corollary 10.2 with proof, p. 34. Full text recovered directly to `/tmp/uc34-finite-daners.pdf`; both pages read after browser extraction omitted a page-break sentence. The source proves completeness by the bounded coordinate inverse and states the closedness consequence. It accepts AC globally earlier in the notes, so the ZF assertion here is established by the explicit local least-index construction, not inferred from the source's silence about choice. The source's last inverse bound on p. 33 prints c rather than the previously established inverse constant; the published completeness supplier correctly uses boundedness, and this typo is not imported.

- Item precheck: PASS, 1 checked, 0 failing; no numbering repair needed.
- Renderer/YAML/real KaTeX check: PASS, no skipped math checks.
- Exact direct publication/order check: 11 dependencies, 0 errors.
- Body wikilinks: all declared in those 11 dependencies.
- Scoped `git diff --check`: PASS.

Parent handoff: synchronize this item's canonical dependencies and reconcile its repair. The general complete-subspace statement/choice propagation debt remains separate and untouched. No blanket consumer defect classification is made here.
