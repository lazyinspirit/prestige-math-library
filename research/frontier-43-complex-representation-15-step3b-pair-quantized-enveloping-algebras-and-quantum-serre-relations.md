# Step 3b report: quantized enveloping algebras and quantum Serre relations

Run: `frontier-43-complex-representation-15`  
Pair: `quantized-enveloping-algebras-and-quantum-serre-relations` / `quantized-enveloping-algebras-and-quantum-serre-relations-examples`  
Owner: `alpha-high`

## Scope and entry obligations

Owned IDs, in the required dependency-level and page order:

| Level | ID | Page | Status |
|---:|---|---|---|
| 0 | `def-bialgebra-counit-and-antipode` | A | Authored; local checks passed |
| 0 | `def-symmetrizable-cartan-datum-for-a-quantum-group` | A | Authored; local checks passed |
| 0 | `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix` | A | Authored; local checks passed |
| 0 | `def-lie-bialgebra-and-root-graded-manin-triple` | A | Round 1 locally repaired; central certification pending |
| 1 | `def-quantum-integers-factorials-and-divided-powers-at-q-i` | A | Authored; local checks passed |
| 1 | `lem-an-antipode-is-unique` | A | Authored; local checks passed |
| 1 | `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` | A | Authored; scoped checks passed |
| 1 | `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` | A | Round 1 locally repaired; central certification pending |
| 2 | `lem-quantum-pascal-recurrence-and-gaussian-integrality` | A | Authored; local checks passed |
| 2 | `def-drinfeld-jimbo-quantized-enveloping-algebra` | A | Authored; local checks passed |
| 2 | `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` | A | Round 1 locally repaired; central certification pending |
| 3 | `lem-q-binomial-expansion-for-q-commuting-elements` | A | Authored; local checks passed |
| 3 | `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions` | A | Authored; scoped checks passed |
| 3 | `def-positive-negative-and-toral-quantum-subalgebras` | A | Authored; scoped checks and strict contract passed; item decision pending |
| 3 | `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum` | A | Round 1 locally repaired; central certification pending |
| 4 | `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals` | A | Authored; scoped checks passed |
| 4 | `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` | A | Round 1 locally repaired; central certification pending |
| 5 | `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra` | A | Authored; scoped checks and strict contract passed |
| 5 | `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` | A | Round 1 locally repaired; central certification pending |
| 5 | `cex-unsymmetrized-q-parameters-break-the-cartan-normalization` | B | Round 1 locally repaired; central certification pending |
| 5 | `ex-quantum-serre-calculation-in-type-a-two` | B | Authored; scoped checks and strict contract passed; item decision pending |
| 5 | `ex-the-double-edge-quantum-serre-relation-for-affine-a-one` | B | Authored; scoped checks and strict contract passed; item decision pending |
| 6 | `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` | A | Round 1 locally repaired; central certification pending |
| 7 | `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double` | A | Round 1 locally repaired; central certification pending |
| 8 | `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` | A | Round 1 locally repaired; central certification pending |
| 9 | `thm-quantized-sl-two-string-formulas` | A | Round 1 locally repaired; central certification pending |
| 10 | `ex-quantized-sl-two-relations-coproduct-and-antipode` | B | Round 1 locally repaired; central certification pending |

*Entry-time snapshot only. All 27 assigned items (including the two
auditor-created A-page additions) are now authored; the current statuses,
decisions and check results are in **Session addendum 2** and the **Handoff**
at the end of this report.*

At entry, all 25 owned items remain to be audited, authored, contracted, checked,
and recorded. Exact suppliers, item statements, source locators, readiness gaps,
and item decisions are pending sequential review. No direct in-run prerequisite
pairs were named in the dispatch. Any unfinished supplier discovered during the
ordered pass will be recorded here with the exact consuming step and left
escalated until its proof use is reconciled.

## Ordered checkpoints

Checkpoint each item here immediately after authoring/checking it. Record its
claim and conventions, supplier IDs, sources and exact locators, argument route,
decision and confidence evidence, checks actually run, unresolved obligations,
and the next item.

### `def-bialgebra-counit-and-antipode` — dependency level 0

- **Claim/conventions:** Defines a bialgebra over a commutative ring by an
  algebra structure, algebra maps `Δ` and `ε`, coassociativity and both counit
  equations. Defines a Hopf algebra by both convolution-inverse equations for
  the antipode; fixes the order of factors and does not assume invertibility,
  involutivity, or multiplicativity of `S`.
- **Suppliers:** `def-algebra-over-a-commutative-ring` supplies central unital
  `R`-algebras; `thm-tensor-product-of-algebras-over-a-commutative-ring`
  supplies the target algebra structure on `A ⊗_R A`. Both current statements
  were read and match the uses. No Choice is used.
- **Sources checked:** Etingof–Semenyakin, *A Brief Introduction to Quantum
  Groups*, §2.1, Definition 2.1 and preceding paragraphs, printed pp. 3–4;
  Berkeley Lectures, Ch. 3 §3.2.3, printed pp. 27–28, and Ch. 13 §13.1.1,
  printed p. 297. The cited definition and equations match the authored claim.
- **Source-record repair:** The old CMSA URL has conflicting current retrievals:
  web indexing returns the correct 43-page notes, but direct download returns
  the same 595,075-byte object and SHA-256 prefix recorded by Step 3a as the
  unrelated Etingof *Representations of Lie Groups*. The item now points to
  versioned arXiv `2106.05252v3`. The prior Berkeley locator Ch. 10 §10.1.1 is
  actually the Lie-bialgebra definition; the item now cites the matching Hopf
  definition in Ch. 13 §13.1.1. Batch coverage and manifest registration still
  need updating.
- **Decision:** Mathematical content is complete for a definition; Step 3 item
  certification remains pending batch contracts and gates. Current local
  evidence: `precheck.mts` reports `not-applicable` (0 proofs, 0 failures) and
  scoped `rendercheck` reports 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this item in the batch manifest and corrected
  its source-coverage records while preserving sibling rows. The Etingof
  coverage source now points to arXiv v3; fetched PDF: 568,929 bytes,
  SHA-256 prefix `a106a2a908277850`, 43 pages. Corrected the matching Berkeley
  coverage locator from Ch. 10 §10.1.1 (Lie bialgebras) to Ch. 13 §13.1.1
  (Hopf axioms), alongside Ch. 3 §3.2.3 for bialgebras.
- **Open work:** Finish the remaining items and pair page; run all required
  batch gates before recording the item decision.
- **Next:** `def-symmetrizable-cartan-datum-for-a-quantum-group` (level 0).

### `def-symmetrizable-cartan-datum-for-a-quantum-group` — dependency level 0

- **Claim/conventions:** Fixes a symmetrizable GCM and a chosen positive integer
  symmetrizer, free weight/coweight lattices with an integer pairing, independent
  coroots, independent roots generating `Q`, and the row convention
  `⟨α_j,h_i⟩=a_ij`. The pairing need not be perfect, the coroots need not span,
  singular `A` is allowed, `q` is indeterminate over `Q`, and no fundamental
  weights are assumed.
- **Suppliers:** `def-generalized-cartan-matrix`,
  `def-symmetrizable-generalized-cartan-matrix`,
  `def-realization-of-a-generalized-cartan-matrix`,
  `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`,
  `def-kac-moody-root-lattice-height-and-positive-cone`, and
  `def-free-abelian-group`. All six current statements were read. The published
  integer-symmetrizer route applies; the root-lattice convention and the
  minimal-realization row convention agree. No Choice is used.
- **Sources checked:** Berkeley Lectures, Ch. 10 §10.4.2.2, printed p. 245,
  and Example 10.4.2.6, p. 246; Jeong–Kang–Kashiwara, §1, printed pp. 3–4,
  Definition 1.1 and adjacent lattice conventions. JKK writes
  `α_i(h_j)=a_ji`, equivalent to the item's transposed-index convention. Its
  later nondegenerate-form and fundamental-weight assumptions are excluded.
- **Decision:** Complete as a definition; Step 3 item certification remains
  pending the batch contracts and gates. Scoped precheck reports
  `not-applicable` (0 proofs, 0 failures); scoped rendercheck reports 1 file,
  0 errors and 0 warnings.
- **Registration:** Updated only this manifest item and its Berkeley/JKK
  coverage entries, preserving sibling rows. `dependency_level` remains 0,
  matching the six dependencies and the manifest.
- **Open work:** Finish remaining items and page; run batch gates before
  recording the item decision.
- **Next:** `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix`
  (level 0).

### `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix` — dependency level 0

- **Claim/conventions:** Proves that every real symmetric matrix of rank `r`
  has a nonsingular `r`-size principal block, with the empty matrix convention
  making the rank-zero case explicit. For `B=DA` with positive diagonal `D`,
  proves `det(B_J)=(∏_{i∈J}d_i)det(A_J)`; hence the same `J` works for `A`.
  Corank one gives size `n−1`. Symmetry is essential; the nonsymmetric
  rank-one counterexample is recorded after the proof.
- **Supplier audit:** Read all five original dependencies. The proof route
  additionally needs the existing published Schur-complement identity,
  determinant/nonzero-invertibility equivalence, matrix-rank definition and
  nonzero-minor rank test, determinant multiplicativity/diagonal formula, and
  transpose rules. Added only direct edges to those published suppliers;
  dependency level remains 0. No new item was needed and no Choice is used.
- **Source check:** Berkeley Lectures, Ch. 10 §10.4.2.6, printed p. 246,
  explicitly assumes the positive-semidefinite corank-one case for its
  Gabber–Kac block description. Enriquez §1.1, printed p. 22, assumes an
  `r`-size principal block is nondegenerate and uses the `n−r` extra Cartan
  coordinates in §2.1, printed p. 31. The proof now establishes the general
  symmetric-matrix result locally; the source-specific note is restricted to
  its stated positive-semidefinite case.
- **Scaffold repair:** Replaced the false unsymmetric “every rank-r matrix”
  claim with the symmetric theorem and its proof. The original generality for
  symmetrizable corank-one matrices follows from the theorem without the
  source’s affine positivity assumption. Added the rank-zero convention and
  the missing published direct-supplier edges.
- **Decision:** Mathematical proof is complete; current Step 3 certification
  waits for strict contracts and batch gates. After a first precheck flagged
  phase-step numbering, adopted its canonical numbering and reran it: 1 proof,
  0 failures. Scoped rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this manifest row and the matching Berkeley
  coverage locator, preserving sibling rows; metadata and manifest both retain
  `dependency_level: 0`.
- **Open work:** Finish remaining items and pair page; build exact proof
  contracts and run all batch gates before recording the item decision.
- **Next:** `def-quantum-integers-factorials-and-divided-powers-at-q-i`
  (level 1).

### `def-quantum-integers-factorials-and-divided-powers-at-q-i` — dependency level 1

- **Claim/conventions:** Defines `[m]_i`, `[m]_i!`, Gaussian binomials,
  divided powers in a unital `Q(q)`-algebra, zero/out-of-range conventions,
  and the shifts `[m]_i=q_i^{-(m−1)}[m]_{q_i²}` and
  `binom(m,r)_i=q_i^{-r(m−r)}binom(m,r)_{q_i²}`. `q_i²` uses the published
  asymmetric one-parameter convention, with its binomial written as the
  two-part q-multinomial.
- **Suppliers:** `def-symmetrizable-cartan-datum-for-a-quantum-group` and
  `def-q-integer-q-factorial-and-q-multinomial`; both current statements were
  read. The former supplies `q_i=q^{d_i}` with positive integral `d_i`; the
  latter supplies the asymmetric factorial quotient. Denominator nonvanishing
  follows from `q` indeterminate. No Choice is used.
- **Sources checked:** Jeong–Kang–Kashiwara §1, printed p. 5, displays (1.1)
  and (1.5); Enriquez §1.1, printed p. 22, display (1). These match the
  symmetric convention and divided powers; the published asymmetric shift is
  derived locally.
- **Decision:** Computational definitions and identities are complete;
  Step 3 certification remains pending batch contracts and gates. The first
  precheck proposed dependency-layer numbering; adopted `1.1`, `2.1`, `3.1`
  and the corresponding step reference, then reran precheck: 1 proof, 0
  failures. Scoped rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this manifest item and its JKK/Enriquez
  coverage entries. `dependency_level: 1` agrees with the level-0 Cartan datum
  supplier and published q-integer supplier.
- **Open work:** Finish remaining items and pair page; create strict contracts
  and run the full batch gates before recording the item decision.
- **Next:** `lem-an-antipode-is-unique` (level 1).

### `lem-an-antipode-is-unique` — dependency level 1

- **Claim/conventions:** Proves uniqueness by the associative convolution
  product on `Hom_R(A,A)`, whose unit is `η∘ε`; also proves `S(1_A)=1_A`.
  No antimultiplicativity claim is made.
- **Supplier:** `def-bialgebra-counit-and-antipode` (level 0), current statement
  read and used for coassociativity, associativity, both counit equations,
  unitality and both antipode equations. No Choice is used.
- **Sources checked:** Etingof–Semenyakin, arXiv v3, §2.2.1 Proposition
  2.2(iv), printed p. 4; Berkeley Lectures, Ch. 12 Remark 12.1.2.3, printed
  p. 274. The item reference now points to arXiv v3 because the CMSA direct
  download returned the unrelated file; both source locators are corrected.
- **Decision:** Complete local proof; Step 3 certification remains pending
  strict contracts and batch gates. Scoped precheck: 1 proof, 0 failures.
  Scoped rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this manifest row with the corrected arXiv
  URL and p. 4 locator; source coverage already records the corrected source
  and page. `dependency_level: 1` matches its level-0 definition supplier.
- **Open work:** Finish remaining items and pair page, then run the batch gates
  before the item decision.
- **Next:** `lem-quantum-pascal-recurrence-and-gaussian-integrality`
  (level 2).

### `lem-quantum-pascal-recurrence-and-gaussian-integrality` — dependency level 2

- **Claim/conventions:** Proves both symmetric q-Pascal recurrences, Gaussian
  symmetry, the Gauss product and alternating identities, and the sharper
  membership `C_{m,r}∈q_i^{-r(m−r)}Z[q_i²]⊂Z[q_i^{±1}]`. The proof explicitly
  handles `N=0`, `r=0,m`, and out-of-range `r`.
- **Suppliers:** `def-quantum-integers-factorials-and-divided-powers-at-q-i`
  supplies the symmetric factorial quotient and parameter normalization;
  `def-polynomial-ring-over-a-commutative-ring` and
  `def-the-laurent-polynomial-ring` supply the polynomial/Laurent notation.
  The q_i evaluation is injective because q is indeterminate and `d_i>0`.
- **Sources checked:** JKK §1 display (1.1), printed p. 5, fixes the quotient
  convention. Enriquez §2.1 Lemma 2.3, printed p. 32, uses q-binomial
  identities and refers to an induction proof in its cited source; this item
  proves the recurrences and integrality locally.
- **Decision:** Complete local proof; Step 3 certification waits for batch
  contracts and gates. Scoped precheck: 1 proof, 0 failures. Scoped
  rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this item row and its JKK/Enriquez coverage
  entries, preserving sibling rows. Additional edges target published ring
  definitions; the item remains at `dependency_level: 2`.
- **Open work:** Finish remaining items and pair page; derive its strict
  contract and clear batch gates before recording the item decision.
- **Next:** `lem-q-binomial-expansion-for-q-commuting-elements` (level 3).

### `lem-q-binomial-expansion-for-q-commuting-elements` — dependency level 3

- **Claim/conventions:** Proves the finite Gaussian expansion for `yx=txy`,
  its `q_i²` specialization, and the `t^{-1}` coefficient shift. The exponent
  is `t^{N−r}` for the recurrence matching right multiplication by `x+y`.
- **Suppliers:** `lem-quantum-pascal-recurrence-and-gaussian-integrality`,
  `def-q-integer-q-factorial-and-q-multinomial`, and
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`. The generic
  recurrence follows by injective specialization from the symmetric recurrence
  and the verified conversion `B_{q_i²}=q_i^{r(N−r)}C_i`.
- **Scaffold repair:** Reconciled a conflicting conversion sentence in the
  seed strategy: the correct relation is
  `B_{N,r}(q_i²)=q_i^{r(N−r)}C_{N,r}`. Removed its forward link to the later
  coproduct consumer from the statement; the consumer will use this proved
  supplier in its own ordered checkpoint.
- **Sources checked:** Berkeley Lectures, Ch. 13 §13.1.3, printed pp. 307–309,
  including the quantum Serre coefficients and the quasiprimitivity lemma's
  stated reliance on q-binomial identities; JKK §1 display (1.1), printed
  p. 5, for the `q_i` Gaussian convention. The expansion and recurrence proof
  are local.
- **Decision:** Complete local proof; Step 3 certification waits for batch
  contracts and gates. Scoped precheck: 1 proof, 0 failures. Scoped
  rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this manifest item and its Berkeley/JKK
  coverage entries, preserving sibling rows. `dependency_level: 3` is
  unchanged.
- **Open work:** Finish remaining items and pair page, then clear strict batch
  contracts and gates before recording the item decision.
- **Dependency-order update:** `def-drinfeld-jimbo-quantized-enveloping-algebra` was subsequently lowered to level 2 and completed below. The q-binomial item remains complete at level 3 and is not used to justify this definition.

### `def-drinfeld-jimbo-quantized-enveloping-algebra` — dependency level 2

- **Claim/conventions:** Defines the full Drinfeld–Jimbo algebra over `Q(q)`
  with toral symbols `K_h`, the toral action, `E_iF_j` commutators, both
  quantum Serre sums, the root-lattice grading, and the quotient universal
  property. `K_i^{-1}` is represented by `K_{-d_i h_i}`. No nonvanishing or
  independence of generators is claimed.
- **Suppliers:** The current symmetrizable Cartan datum, q-integer/divided-power
  definition, root-lattice definition, tensor algebra and its universal
  property, two-sided ideal generation, quotient ring, and quotient universal
  property were read and used. The original q-binomial-expansion edge is
  unnecessary for defining these quotient relations and has been removed.
- **Dependency-order correction:** Removing that unused edge recomputes the
  level from 4 to 2. The A-manifest now orders q-Pascal (level 2), this
  definition (level 2), q-binomial expansion (level 3), then the level-4
  coideal item. The q-binomial item was already complete from the original
  schedule, but this definition does not cite or rely on it. Report this
  pre-splice dependency/level mismatch for Step 4.
- **Sources checked:** Jeong–Kang–Kashiwara, §1 Definition 1.2 and displays
  (1.4)–(1.5), printed p. 5; Berkeley Lectures, Ch. 13 Definition 13.1.3.12,
  printed p. 309. The generator conventions and both Serre sums match.
- **Decision:** Complete as a definition; Step 3 certification remains
  pending strict contracts and batch gates. Scoped precheck: 1 proof, 0
  failures. Scoped rendercheck: 1 file, 0 errors, 0 warnings.
- **Registration:** Updated only this manifest row, removed the unused
  q-binomial edge, added the root-lattice supplier, lowered
  `dependency_level` to 2, and moved the row before the level-3 item.
- **Open work:** Finish the remaining items and page; derive strict contracts
  and clear the gates before recording the item decision.
- **Next:** `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` (level 4). The level-3 q-binomial item is already complete.

### Dependency-order recalculation before `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`

- The original coideal scaffold depended on
  `lem-q-binomial-expansion-for-q-commuting-elements`, although its classical
  PBW-filtration proof does not use that quantum identity. Removed that edge
  and replaced the finite-dimensional complex PBW inputs by the general PBW
  theorem together with explicit AC suppliers; added the current
  `def-bialgebra-counit-and-antipode` as the direct convention supplier for
  coproduct and counit.
- The recomputed `dependency_level` is 1, not 4. The q-Pascal, Drinfeld–Jimbo,
  and q-binomial items were already completed in the original scheduled pass;
  none is used to justify the coideal lemma. Future work follows the
  recomputed levels, and no later item is used in its proof.
- The pair plan's unaugmented statement and unrestricted largest-ideal clause
  are invalid as written. The local item adds `J ⊆ ker ε` and concludes
  uniqueness only among ideals satisfying both conditions. Record this shared
  plan/prose amendment for Step 4; preserve the kernel application, which is
  augmentation preserving.

### `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` — dependency level 1

- **Claim/conventions:** Over a characteristic-zero field and under AC, if a
  two-sided ideal `J` of `U(l)` is a coideal for the standard coproduct and is
  contained in the augmentation kernel, then `j=J∩l` is a Lie ideal and
  `J=U(l)j=jU(l)`. It is uniquely determined by `j` among ideals satisfying
  those same conditions. The zero Lie algebra is included.
- **Scaffold defects:** `J=U(l)` satisfies the printed coproduct containment
  but violates the generated-ideal conclusion when `l≠0`; `l=kx`, `J=0`,
  `K=(x²)⊂k[x]` refutes the unrestricted largest-ideal clause. Both repairs
  are included in the item and the false conclusions are not retained.
- **Suppliers:** Uses `def-bialgebra-counit-and-antipode` for structure-map
  conventions; `rem-hopf-algebra-structure-on-the-enveloping-algebra` for the
  primitive coproduct and augmentation; the general enveloping algebra,
  filtration and PBW theorem; and the AC, basis-extension, well-ordering,
  characteristic and symmetric-algebra universal-property suppliers named in
  the item. AC is used to choose and order a basis of arbitrary `l` and to
  split the induced filtration of `J`; no finite-dimensional PBW supplier is
  treated as general.
- **Source checked:** Enriquez, §2.1, Proposition 2.1 and Lemma 2.4, printed
  pp. 32–33, complete proof read. The printed lemma omits `ε(J)=0`; its base
  case `J_1 ⊆ F_0 j` fails for `J=U(l)`. The later application in the paper is
  a kernel of a counit-preserving Hopf map, so the augmented condition holds
  there. The item repairs the local statement and does not treat the citation
  as proof. The PBW filtration and primitive coproduct conventions were also
  checked against Etingof, MIT 18.745, §§12.2–12.3 and 13.1, printed
  pp. 70–75.
- **Decision/checks:** Complete local proof; Step 3 certification, strict
  contract, final proof-layout, and batch gates remain pending. The first
  precheck found wrapped steps and proposed canonical layer numbering; adopted
  the one-paragraph-per-line form, explicit induction base/IH/discharge tags,
  and numbering `1.1`–`5.1`, then reran: 1 proof, 0 failures. The first
  rendercheck found a multiline display equation; collapsed it to one source
  line and reran: 1 file, 0 errors, 0 warnings. Final item decision remains
  pending.
- **Registration:** The batch item row now has the 17 actual suppliers and
  `dependency_level: 1`; coverage records the source omission and local
  correction. Sibling rows are preserved.
- **Next:** `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` after rechecking its actual current dependencies and order.

### Newly discovered prerequisites for `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`

- Re-read the Step 3a scope finding: the library has no definitions of Lie
  bialgebra or Manin triple. The assigned statement uses both and claims a
  Manin triple of `(g,b+,b−)`, which is not a triple: the Borels intersect in
  `h` and their dimensions do not complement `g`. Repaired the claim in the
  direction required by the standard double: `d=g⊕h`, with the Borel copies
  embedded by `h+x+ ↦ (h+x+,h)` and `h+x− ↦ (h+x−,−h)`.
- Added two authored A-page prerequisites: the definition
  `def-lie-bialgebra-and-root-graded-manin-triple` is level 0, and
  `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` is level 1. The
  definition gives the Lie-bialgebra, restricted graded-dual, and locally
  finite root-graded Manin-triple terms; the theorem proves the transpose
  construction by co-Jacobi and mixed-Jacobi calculations. Their scoped checks
  pass; these new IDs are absent from the immutable pre-splice inventory and
  will receive engine certifications after dispatch.
- Re-read the actual direct suppliers. The original edge to
  `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`
  is unused by this lemma's proof route, so it was removed; AC is not inherited
  here. The new proof uses the two definitions above, the current nonsingular
  principal-minor supplier for the extended Cartan coordinates, the Kac–Moody
  triangular and Serre presentations, finite root spaces, the invariant-form
  theorem, and the countably presented PBW and symmetrization suppliers.
- Removing the unused coideal edge and adding the level-0 definition and
  level-1 duality theorem recomputes the lemma from level 5 to level 2; it
  remains after the level-1 coideal lemma by the assigned item order.
- **Source evidence:** Berkeley §10.1.1.1, printed p. 228, states the
  co-Jacobi and cocycle axioms; §10.4.1.4–10.4.1.8, pp. 243–244, describes
  the double and invariant pairing; §10.4.2.1–10.4.2.2, pp. 244–245, gives
  the Borel example and Kac–Moody setup; Exercise 10(c), p. 252, identifies
  `D(b+)` with `g⊕h`. Enriquez §1.1, p. 22, supplies the rank-block and
  complementary-Cartan setup; §2.1, pp. 35–36, gives the graded-dual
  Borel argument in its shuffle-kernel application. The local proof will
  establish its own invariant-pairing and Manin-double uses.
- Record these supporting additions and the corrected double in shared
  plan/page prose for Step 4; do not edit the shared design here.

### `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` — dependency level 2

- **Claim/conventions:** The invariant form gives perfect opposite-root-space
  pairings. PBW symmetrization transports the permutation-averaged pairing on
  symmetric powers to a perfect, root-degreewise vector-space pairing of
  `U(n+)` and `U(n−)`, hence the restricted graded-dual isomorphism. For the
  Borel bialgebras, the actual root-graded Manin triple is `d=g⊕h`; its Borel
  embeddings are `h+x+ ↦ (h+x+,h)` and `h+x− ↦ (h+x−,−h)`. Its cross pairing
  doubles the Cartan form and retains the invariant pairing on opposite root
  spaces. The Borel cobrackets vanish on `h`.
- **Scaffold repairs:** Removed the unused direct edge to the coideal lemma,
  so this proof does not inherit that lemma's AC premise. Replaced the
  undefined/false claim that `(g,b+,b−)` is a Manin triple (the Borels
  intersect in `h`) by the root-graded double `g⊕h`. Replaced the invalid
  primitive-coproduct Hopf-pairing strategy. In type `A2`, `e12=[e1,e2]`
  pairs nontrivially with `f12=[f2,f1]`, but Hopf adjunction against primitive
  `f12` would force both `e1e2` and `e2e1` to pair zero. The proof instead
  uses the explicit PBW-symmetrized vector-space pairing.
- **Suppliers:** The 17 direct edges supply the Kac–Moody realization and
  grading, triangular and separate Serre presentations, finite root spaces,
  invariant form, rank-sized Cartan block, countable PBW basis and PBW
  symmetrization, and the new Lie-bialgebra/Manin-triple definitions and
  finite-piece duality theorem. The bracket-word enumeration supplies the
  ordered basis without AC.
- **Sources checked:** Berkeley §10.1.1.1 p. 228 (Lie-bialgebra axioms),
  §10.4.1.4–10.4.1.8 pp. 243–244 (double and invariant pairing),
  §10.4.2.1–2 pp. 244–245 (Borel/Kac–Moody setup), and Exercise 10(c)
  p. 252 (`D(b+)≅g⊕h`); Enriquez §1.1 p. 22 (rank block and complementary
  Cartan coordinates), §2.1 pp. 35–36 (graded-dual Borel argument); Kleshchev
  Lemma 2.2.1 and Theorem 2.2.3 pp. 28–32 (invariant form and opposite-root
  pairing). The exact direct supplier statements were read.
- **Decision/checks:** Complete local proof. The first precheck found wrapped
  steps and a dependency-layer ordering repair; after putting every proof step
  in one source paragraph and adopting the canonical `1.1`–`1.7`, `2.1`,
  `3.1` numbering, scoped precheck passes (1 proof, 0 failures). Scoped
  rendercheck passes (1 file, 0 errors, 0 warnings). Strict contract, final
  proof-layout, item decision, and batch gates remain pending.
- **Registration:** Recomputed the item from level 5 to level 2 after the
  root-graded Manin-triple theorem's own dependency level was corrected to 1;
  removed the unused coideal edge, retained the exact PBW and root-graded
  bialgebra suppliers, and refreshed source coverage while preserving sibling
  rows.
- **Next:** `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`; recheck its actual dependencies and level before authoring.

### `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions` — dependency level 3

- **Claim/conventions:** The three maps are defined on the free algebra over
  `Q(q)`: `ω` is linear over `Q(q)`, while `ψ` and the anti-map `τ` act on
  coefficients by `q↦q⁻¹`; `τ` reverses words. They preserve every defining
  relation and descend to involutions with the stated algebra/anti-algebra
  types and Serre signs.
- **Scaffold repair:** The source strategy said `ω` fixes
  `E_iF_j−F_jE_i`; its actual image is `−R_{ji}`. It also gave the wrong
  exponent in the `ψ` image of the `K_hE_i` relation; the correct image is the
  defining relation at `−h`, with `q^{-⟨α_i,h⟩}`. All four relation families
  are checked in the item, including the swapped mixed relation and
  semilinear Gaussian invariance.
- **Suppliers:** `def-drinfeld-jimbo-quantized-enveloping-algebra` supplies
  the exact free generators, four relation families, and quotient;
  `def-quantum-integers-factorials-and-divided-powers-at-q-i` supplies the
  symmetry and `q_i↦q_i⁻¹` invariance of the Gaussian coefficients;
  `thm-universal-property-of-the-tensor-algebra` extends the maps to `T`.
- **Sources checked:** Berkeley Ch. 13 §13.1.3, printed pp. 307–310, for the
  defining presentation and Serre ideal; JKK §1 Definition 1.2 and display
  (1.4), printed pp. 5–6, for the generator/relation and Gaussian conventions.
  The source does not supply these involution calculations; they are proved
  locally.
- **Decision/checks:** Complete local proof. The first precheck requested
  canonical dependency-layer numbering; adopted steps `1.1`–`1.5` and final
  discharge `2.1`, then reran: 1 proof, 0 failures. Scoped rendercheck: 1
  file, 0 errors, 0 warnings. Strict contract, final proof-layout, item
  decision, and batch gates remain pending.
- **Registration:** Removed the unused dependencies implied by the original
  level-5 label; the actual direct suppliers are Drinfeld–Jimbo (level 2),
  the q-integer definition (level 1), and the published tensor-algebra
  universal property, so `dependency_level` is 3. Sibling rows are preserved.
- **Next:** `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`; recompute its level from current actual dependencies before authoring.

## Checkpoint — lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals

- **Current claim/conventions:** At dependency level 4, the prescribed coproduct makes the positive and negative Serre elements quasiprimitive in the corresponding toral-action quotients; their generated ideals are coideals there. Mapping these formulas into U_q(g) ⊗ U_q(g) proves the Serre-family part of coproduct descent. The original strategy's assertion about Serre-only ideals in the completely free algebra is false: in type A₂, set all K_h to 1 and pass to the free E_i,E_j algebra modulo both degree-3 Serre relations. Under the resulting map, the coefficient of E_iE_j ⊗ E_i in the primitive-coproduct image of Serre^+_{ij} is 2 − (q_i+q_i^{-1}) ≠ 0; both tensor factors have degree below the Serre relations, so this term survives. The prescribed free-algebra coideal inclusion therefore fails. Repair: quotient by toral and toral-action relations before making the q-commutation calculation.
- **Proof/dependencies:** Positive formula was independently expanded into the two choices E_j ⊗ K_j^{-1} and 1 ⊗ E_j. For fixed mixed words, factorial cancellation regroups the coefficients into Σ(-1)^r C_{N,r}q_i^{r(N−1)}, zero by the q-Pascal supplier; the N=0 terms give the two Serre tensors. The negative formula follows from the locally verified algebra map K_h ↦ K_{−h}, E_i ↦ −F_i, checked against flip-coproduct on generators. Actual direct dependencies: DJ presentation; symmetrizable Cartan datum; q-integers/factorials; tensor-algebra and quotient/ideal universal properties; q-Pascal; q-binomial expansion; tensor-product multiplication. No Choice.
- **Sources checked:** Berkeley Ch. 13 §13.1.3, printed pp. 307–309 (especially Remark 13.1.3.7, Lemma 13.1.3.9, Corollary 13.1.3.10); the source states positive quasiprimitivity, cites Jantzen for a tedious q-binomial computation, and does not print that proof or the explicit grouplike factors. Its coproduct uses E_i ⊗ K_i; the proof here follows JKK §1, Definition 1.2 and display (1.6), printed pp. 5–6, which uses E_i ⊗ K_i^{-1} but asserts Hopf structure without proof. The full q-binomial cancellation is supplied locally.
- **Registration/checks:** Manifest row and item metadata now agree on level 4 and the actual dependencies. Coverage points to the exact source passages and convention caveat. The item-specific contract passes strict-contract with 0 errors/warnings. Scoped precheck: 1 proof, 0 failures; scoped rendercheck: 1 file, 0 errors/warnings. Content-policy, final proof-layout, item decision, and batch gates remain pending.
- **Next:** The Hopf theorem is audited and authored at recomputed level 5. The next assigned level-5 B item is cex-unsymmetrized-q-parameters-break-the-cartan-normalization.

## Checkpoint — thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra

- **Current claim/conventions:** Recomputed level 5. The free presentation carries the displayed coproduct, counit and antipode formulas; the full defining ideal has coproduct image in the sum of its tensor-factor ideals, counit zero and antipode-stable, and the descended maps make U_q(g) a Hopf algebra with unique antipode and the stated S² generator formulas.
- **Proof/dependencies:** The proof checks all toral, mixed and Serre generators. It proves ker(π⊗π)=I_DJ⊗T+T⊗I_DJ by two applications of tensor right exactness and the flip, then uses that kernel to lift relation preservation in U⊗U to the free-ideal coideal inclusion; no basis complement or Choice is used. The antipode equations on generators are extended to words by the explicit convolution induction in step 5.2. Direct dependencies now include the bialgebra definition, q-integer conventions, symmetrizer identity, the preceding Serre coproduct lemma, antipode uniqueness, tensor-algebra/quotient properties, tensor right exactness and flip. The original q-binomial-expansion and Chevalley-involution edges were unused and removed. No AC.
- **Scaffold corrections:** The seeded explanation that the convolution maps are algebra/anti-algebra maps is false; m(S⊗id)Δ is not generally multiplicative. Step 5.2 replaces that gap. The batch-6 Step-1 correction list also asserted S(Serre^-_{ij})=−K_i^{-m}K_j^{-1}Serre^-_{ij}; direct crossings give the scalar −q_i^{2m}q_j². For type A₂ this is −q^6, not −1. The negative Serre generator still maps into the same ideal, so the Hopf claim is unchanged.
- **Sources checked:** JKK §1, Definition 1.2, displays (1.4) and (1.6), printed pp. 5–6, for presentation and exact convention; JKK asserts Hopf structure but does not prove preservation. Berkeley Ch. 13 §13.1.3, Lemma 13.1.3.9, Corollary 13.1.3.10 and Definition 13.1.3.12, printed pp. 308–309, states positive Serre quasiprimitivity/Hopf ideal in a different coproduct convention. All convention-sensitive checks here are local.
- **Checks/registration:** Item file and manifest agree on statement, direct suppliers and dependency level 5. Scoped precheck: 1 proof, 0 failures; scoped rendercheck: 1 file, 0 errors/warnings; item strict-contract: 0 errors, 0 warnings. Batch content policy, final proof-layout, item decision and gates remain pending. The run-wide dependency-level command reports no batch-6 level mismatch after this recalculation, while unrelated sibling-batch mismatches remain.
- **Next:** Audit and author the level-5 B counterexample cex-unsymmetrized-q-parameters-break-the-cartan-normalization, then the type-A₂ and affine double-edge examples in the dispatch order before level 6.

## Published concerns and cross-batch updates

## Checkpoint — cex-unsymmetrized-q-parameters-break-the-cartan-normalization

- **Assigned target:** The original B statement says arbitrary nonzero node
  parameters make the Drinfeld–Jimbo coproduct descend through the full
  presentation for every generalized Cartan matrix. The proposed B₂ witness
  uses $A=\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$ and $q_1=q_2=q$.
- **Verified local result and conventions:** In the positive toral-action
  Borel with $K_1E_1K_1^{-1}=q^2E_1$, $K_1E_2K_1^{-1}=q^{-1}E_2$,
  $K_2E_1K_2^{-1}=q^{-2}E_1$, and $K_2E_2K_2^{-1}=q^2E_2$, the $(2,1)$
  component of $\Delta(E_1^2E_2-[2]_qE_1E_2E_1+E_2E_1^2)$ has coefficients
  $q^{-2}(1-q)(1+q^2)$ on $E_1E_2\otimes E_1K_1^{-1}K_2^{-1}$ and
  $-q^{-1}(1-q)(1+q^2)$ on $E_2E_1\otimes E_1K_1^{-1}K_2^{-1}$. A crossed
  word algebra proves the degree-two left words remain independent modulo
  the degree-three Serre ideal. Thus the Borel Serre ideal is not a coideal.
- **Suppliers/dependencies:** Direct suppliers are
  `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`
  (Borel convention and normalized case),
  `def-drinfeld-jimbo-quantized-enveloping-algebra` (the full quotient whose
  extension is assigned),
  `def-symmetrizable-cartan-datum-for-a-quantum-group` (B₂ symmetrizer), and
  `def-quantum-integers-factorials-and-divided-powers-at-q-i` ($[2]_q$).
  Removed the unused Chevalley-involution edge. The recomputed level is 5.
- **Sources:** Enriquez §1.1 p. 22 gives the symmetrizer condition. Berkeley
  §13.1.3, Lemma 13.1.3.9, p. 308, gives the positive toral-action Borel and
  normalized Serre coideal assertion; the exact convention is cross-checked
  against JKK §1, Definition 1.2 and display (1.6), pp. 5–6. The B₂ mixed
  coefficients and crossed-algebra independence are proved locally.
- **Open obligation / decision:** The local Borel witness does not prove that
  its bidegree component survives the mixed $E_iF_j$ relations in the full
  Drinfeld–Jimbo quotient. To complete the original assigned claim, prove
  nonvanishing in the full tensor square or construct a representation of
  that quotient detecting the component. The later triangular-decomposition
  item is not an available supplier. `step3-decisions.mjs record-item` now
  records `escalate` with the four examined direct dependencies and this exact
  obligation. The current pair also has a refreshed sufficient scope receipt
  covering the two added A-page prerequisites; no owner decision was written.
- **Checks/registration:** Manifest and item metadata use the four actual
  suppliers and level 5; sibling manifest and coverage rows are preserved.
  Explicit-path precheck: 1 proof, 0 failures; rendercheck: 1 file, 0 errors
  and warnings; strict item contract: 0 errors, 0 warnings. The run-wide
  dependency-level check showed no batch-6 mismatch, with unrelated sibling
  batch errors. Final batched proof-layout and full batch gates remain pending.
- **Next:** `ex-quantum-serre-calculation-in-type-a-two`, the next assigned
  item at level 5.

## Checkpoint — ex-quantum-serre-calculation-in-type-a-two

- **Claim/conventions:** For $A_2$ with $d_1=d_2=1$, the positive and negative
  Serre polynomials have the stated quasiprimitive coproducts with factors
  $K_1^{-2}K_2^{-1}$ and $K_1^2K_2$. The polynomial positive Serre word at
  $q=1$ is $[e_1,[e_1,e_2]]=0$. The item limits this last specialization to
  the polynomial expression, since the entire $\mathbb Q(q)$-algebra need not
  specialize at $q=1$.
- **Proof/dependencies:** The positive expansion uses the $N=2$ q-binomial
  formula and a left/right choice enumeration of all six mixed bidegree
  tensor words. Their coefficient groups are
  $1+q^{-2}-[2]_qq^{-1}$, $q^2-[2]_qq+1$, $-[2]_q+q+q^{-1}$,
  $q^{-1}+q-[2]_q$, $1-[2]_qq+q^2$, and
  $-[2]_qq^{-1}+q^{-2}+1$; all vanish for $[2]_q=q+q^{-1}$. The negative
  formula is the A2 instance of the preceding toral-action Borel lemma. The
  q=1 bracket vanishes by the classical Cartan–Serre presentation. Direct
  suppliers are the coproduct/Serre lemma, Drinfeld–Jimbo definition,
  symmetrizable datum, q-integer definition, q-binomial lemma, tensor-product
  multiplication theorem, and published classical Serre-presentation
  theorem. Level remains 5; the Hopf theorem was not made a direct edge because
  the local coproduct calculation is carried by the earlier Borel lemma.
- **Sources:** Berkeley §13.1.3, Lemma 13.1.3.9, p. 308, states positive
  quasiprimitivity and points to Jantzen for the q-binomial calculation;
  JKK §1, displays (1.4) and (1.6), pp. 5–6, fixes the Serre and coproduct
  conventions; Enriquez §1.1 p. 22 gives the symmetric Gaussian convention.
  Kleshchev's official University of Oregon PDF, Part I §1.1.1 display (1.6),
  printed p. 4, states the classical Serre relation for $\mathfrak{sl}_n$; the
  $n=3$ instance is the A2 relation used here. That 91-page PDF was fetched at
  473538 bytes (SHA-256 prefix `a3f4356b0e3fa0cb`), and its exact page text was
  checked.
- **Decision/checks:** Explicit-path precheck: 1 proof, 0 failures;
  rendercheck: 1 file, 0 errors/warnings; strict contract: 0 errors/warnings.
  The run-wide dependency-level check reports no batch-6 mismatch and unrelated
  sibling-batch mismatches. Item decision and final proof-layout are pending
  the stable batch pass.
- **Next:** `ex-the-double-edge-quantum-serre-relation-for-affine-a-one`; read
  its current exact suppliers before authoring.

## Checkpoint — ex-the-double-edge-quantum-serre-relation-for-affine-a-one

- **Claim/conventions:** For the affine double-edge matrix
  $A=\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$ with $d_1=d_2=1$, the positive
  and negative $m=3$ Serre words have grouplike coproduct factors
  $K_1^{-3}K_2^{-1}$ and $K_1^3K_2$. At $q=1$ the polynomial Serre word is
  $\operatorname{ad}(e_1)^3e_2=0$; the item does not claim specialization of
  the whole $\mathbb Q(q)$-algebra.
- **Scaffold repairs/proof:** The seeded “16 configurations” omitted choices:
  the four length-four Serre monomials have 64 raw left/right choices, grouped
  here into twelve mixed tensor words (four in each bidegree $(3,1)$, $(2,2)$,
  and $(1,3)$). The seed also incorrectly wrote
  $K_1E_2=K_2E_1=q^{-2}E_1K_2$; the correct crossings are
  $K_1E_2=q^{-2}E_2K_1$ and $K_2E_1=q^{-2}E_1K_2$. With
  $[3]_q=q^2+1+q^{-2}$, every displayed mixed coefficient is zero; the final
  $(1,3)$ coefficient is the $N=3$ alternating Gaussian identity. The
  negative formula is the exact specialization of the previous Borel
  coproduct/Serre lemma.
- **Suppliers/dependencies:** Direct suppliers are the coproduct/Serre lemma,
  Drinfeld–Jimbo definition, symmetrizable datum, q-integer definition,
  q-binomial lemma, quantum-Pascal/Gaussian-identity lemma, tensor-product
  multiplication theorem, and published classical Serre-presentation
  theorem. The recomputed level remains 5.
- **Sources:** Berkeley §13.1.3, Lemma 13.1.3.9, p. 308, states positive
  quasiprimitivity and points to Jantzen for the q-binomial computation;
  JKK §1, displays (1.4) and (1.6), pp. 5–6, supplies the Serre/coproduct
  convention; Enriquez §1.1 p. 22 supplies the symmetric Gaussian convention.
  Kleshchev's University of Oregon notes give the affine matrix in Example
  1.5.4, printed p. 25, and the classical Serre relation in §1.1.1, p. 4.
  The official 91-page PDF was fetched and stamped at 473538 bytes, SHA-256
  prefix `a3f4356b0e3fa0cb`.
- **Checks/decision:** Explicit-path precheck: 1 proof, 0 failures;
  rendercheck: 1 file, 0 errors/warnings; strict contract: 0 errors/warnings.
  The run-wide dependency-level check shows no batch-6 mismatch, with unrelated
  sibling-batch errors. Item decision and final proof-layout await the stable
  batch pass.
- **Next:** `def-positive-negative-and-toral-quantum-subalgebras` at level 6;
  inspect its current exact suppliers before editing.

## Checkpoint — def-positive-negative-and-toral-quantum-subalgebras

- **Claim/conventions:** The positive and negative subalgebras inherit the
  nonnegative and nonpositive root-lattice gradings; the toral subalgebra lies
  in degree zero, the toral conjugation weight formula holds on each
  homogeneous component, and the toral subalgebra is an image of the group
  algebra of $P^{\vee}$. The item explicitly makes no independence or
  injectivity claim.
- **Dependency repair/recomputed order:** The original Hopf-theorem edge was
  unused: the definition is proved entirely from the associative
  Drinfeld–Jimbo presentation, its root grading and toral relations. It was
  removed. The group-algebra quotient assertion now cites the published ring
  first-isomorphism theorem, and the symmetrizable datum supplies the pairing.
  Direct suppliers are the Drinfeld–Jimbo definition, the symmetrizable datum,
  and `thm-first-isomorphism-theorem-rings`; the item recomputes from level 6
  to level 3. The same dependency audit moved the formal shuffle Borel to
  level 4 and recomputed later downstream levels; all corresponding manifest
  labels and extant item metadata were updated. These pre-splice plan-level
  differences will be reported for Step 4.
- **Proof route:** Finite E-word and F-word sums group into the root grading;
  the toral group algebra map $X_h\mapsto K_h$ is onto and its kernel gives
  $U_q^0$ by the first isomorphism theorem; conjugation on a word multiplies
  the generator weights, yielding $q^{\beta(h)}$. The product spans follow
  from the generated-subalgebra definitions. No Choice.
- **Sources:** JKK §1, printed p. 6, after display (1.6), defines the three
  generated subalgebras; the item does not import the source's following
  triangular-decomposition claim. Berkeley Ch. 13 §13.1.3, pp. 307–309,
  supplies the root grading and toral conventions. The group-algebra quotient
  argument is local and uses the published ring first-isomorphism theorem.
- **Checks/decision:** Explicit-path precheck: 1 proof, 0 failures;
  rendercheck: 1 file, 0 errors/warnings; strict item contract: 0
  errors/warnings. The dependency-level check reports no batch-6 mismatch and
  unrelated sibling-batch errors. The current item decision remains pending
  the stable batch pass.
- **Next:** `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`
  now computes to level 4; inspect its exact current suppliers before writing.

### `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum` — dependency level 3

- **Claim/conventions:** Defines the coefficientwise formal shuffle Borel for
  a finite symmetrizable datum over `R=C[[ℏ]]`, with `q=e^ℏ` and
  `q_i=e^{d_iℏ}`. It fixes a rank-`r` nonsingular principal block and uses
  `n` coroot symbols plus `n-r` supplementary symbols. The Cartan coefficient
  algebra is `A_C=lim R[C]/ℏ^N R[C] ≅ C[C][[ℏ]]`; no algebraic-freeness claim
  is made for the crossed products. The Hopf maps use the stated `ℏ`-adically
  completed tensor product. The Serre quotient-to-shuffle map is conditional
  on vanishing of the Serre sums and asserts no injectivity.
- **Step 3a recheck and scaffold repair:** The exponential is defined inside
  the commutative Cartan coefficient algebra; each `ℏ^m` coefficient is a
  finite Cartan polynomial, and the formal exponential supplier applies to
  `ℏZ` there. The old “connected-graded” antipode shortcut was replaced by
  independent left and right convolution recursions on (word length, Cartan
  degree); no Batch 8 edge is used. The erroneous `1+n+(n-r)` count is
  corrected to `n+(n-r)=2n-r`. The scaffold's assertion that the completed
  Cartan crossed products are algebraically free over `R` was removed: the
  coefficient ring reduces mod `ℏ` to the countably based polynomial ring
  `C[C]`, while a countably generated free `R`-module is not `ℏ`-adically
  complete (the partial sums `Σ_{j≤N}ℏ^j e_j` have no finite-support limit).
  This restores the source's completed module structure without changing the
  promised Borel subject or adding an item.
- **Direct suppliers checked:** `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-realization-of-a-generalized-cartan-matrix`,
  `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix`,
  `def-formal-power-series-and-coefficient-extraction`,
  `def-polynomial-ring-on-a-family-of-indeterminates`,
  `def-formal-exponential-logarithm-and-powers`,
  `def-tensor-algebra-of-a-vector-space`,
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `lem-quantum-pascal-recurrence-and-gaussian-integrality`,
  `thm-tensor-product-of-algebras-over-a-commutative-ring`,
  `def-bialgebra-counit-and-antipode`, `def-generated-and-principal-ideals`,
  `def-quotient-ring`, and `thm-quotient-ring-universal-property`. Their
  relevant definitions and passages were read in full. There is no unfinished
  assigned supplier or unlisted in-run dependency.
- **Sources checked:** Enriquez, *PBW and Duality Theorems for Quantum Groups
  and Quantum Current Algebras*, §2.1, printed pp. 30–32 (especially p. 31
  for the shuffle coproduct and the stated Hopf structure). The source asserts
  the Hopf property; it does not give the full associativity, counit or
  antipode verification used here, so steps 1.1–4.1 supply those arguments
  locally. Berkeley Lectures, Ch. 13 §§13.1.2.5–13.1.2.6, printed pp. 303–304,
  uses an explicit factor `1/2` in the formal `H_i` Borel convention; this is
  recorded as a convention distinction, while the item follows Enriquez's
  shuffle convention.
- **Proof route:** Steps 1.1–1.4 prove the shuffle/Ore structures and Cartan
  count. Steps 1.5–2.3 verify the formal exponentials, shuffle multiplicativity,
  crossed relations, coassociativity and counit. Step 3.1 constructs both
  convolution inverses; step 4.1 proves anti-multiplicativity by uniqueness
  and restricts the Hopf structure to the generated Borel. Step 5.1 proves
  the conditional quotient map. No later Serre-vanishing or embedding result
  is used. No axiom of choice is used; the only selected `J` is one subset of
  a finite set supplied by the principal-minor lemma.
- **Registration/checks:** Added the existing polynomial-family definition
  as a direct supplier; manifest and item metadata give computed
  `dependency_level: 3`. Updated the source-coverage destinations for the
  Enriquez coproduct and the Berkeley convention note. Explicit-path
  precheck: 1 checked, 0 failures. Explicit-path rendercheck: 1 file,
  0 errors/warnings. Strict contract for this item: 0 errors/warnings,
  including all eight boundary dispositions. The item decision remains
  pending the batch-wide content, dependency and plan gates; the dependency
  audit's one-level downstream reflow is now reflected in the page manifest
  and table. The run-wide check still reports unrelated sibling-batch levels.
- **Next:** `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`
  (level 4), followed by `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra`
  (level 4).

### `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` — dependency level 4

- **Claim/conventions:** Keeps both scaffold claims: the positive quantum
  Serre sums vanish in `⟨V⟩`, and the negative Serre ideal of the free braided
  tensor algebra lies in the radical of the explicitly displayed wordwise
  pairing with all of `Sh(V)`. The item records that the second claim cannot
  hold for this pairing; the item decision is escalated.
- **Direct suppliers checked:**
  `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`,
  `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `lem-q-binomial-expansion-for-q-commuting-elements`, and
  `lem-quantum-pascal-recurrence-and-gaussian-integrality`. Their current
  statements and the formal shuffle definitions were read. All compute to
  level at most 3; this item remains level 4. No unfinished supplier is used.
- **Source audit:** Enriquez §2.1, printed p. 32, Lemma 2.3 proof, asserts the
  shuffle Serre relation and cites Rosso, Lemma 14, for the q-binomial proof.
  The item supplies the finite coefficient calculation directly. JKK §1,
  printed p. 5, display (1.1), fixes the symmetric Gaussian convention.
  Enriquez §2.2, printed p. 37, formula (28) and the following paragraphs,
  gives the same wordwise pairing and claims that the negative Serre ideal is
  in its radical.
- **Proof route / defect evidence:** Steps 1.1–2.1 expand a fixed word
  coefficient in the three-block shuffle. After the Gaussian factorials
  cancel, the coefficient factors into two finite q-binomial product sums;
  one contains `1−q_i^0` at every endpoint, proving part (i) for every
  `N=1−a_ij≥1`. Step 3.1 tests the part (ii) pairing itself. For any `i≠j`,
  set `N=1−a_ij` and pair the word with `N` copies of `v_i` followed by
  `v_j` against the negative Serre generator. Only its `s=0` term matches,
  and the value is `ℏ^{−(N+1)}d_i^{−N}d_j^{−1}≠0`. Thus the stated generator
  is not in the stated radical. The source's p. 37 pairing formula, its
  radical assertion, and its nondegenerate natural word-component pairing
  cannot all be true together. Confidence in this counterexample: high.
- **Repair/escalation:** Preserve the assigned ID and promised claim pending
  owner direction. The required decision is whether to replace the pairing or
  its domain with the intended degenerate pairing, or withdraw/replace the
  radical clause. The current item does not present part (ii) as proved.
- **Checks/decision:** Explicit-path precheck: 1 checked, 0 failures;
  explicit-path rendercheck: 1 file, 0 errors/warnings; strict item contract:
  0 errors/warnings with all eight boundary dispositions. The item decision
  is recorded as `escalate` with confidence 1 and all five examined direct
  dependencies in
  `research/frontier-43-complex-representation-15-step3b-review-lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra.json`.
  The batch content and plan gates remain for the ordered close.
- **Next:** `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra` at level 5,
  then the formal embedding theorem at level 5. The latter consumes only the
  positive shuffle clause, at step 1.1; its use of the false radical clause is
  explicitly excluded and the decision remains escalated on the supplier.

The cited Enriquez Proposition 2.1/Lemma 2.4, printed pp. 32–33, states the
coideal-generation result without `ε(J)=0`; the case `J=U(l)` is a direct
counterexample to that printed scope. Confidence: high. Its subsequent
application to the kernel of a counit-preserving Hopf map does satisfy the
missing condition. The assigned item now states and proves the augmented
version, and coverage records that qualification. No published library item
was edited. Preserve other pairs' rows in shared manifests, coverage,
contracts, and dependency records.

### `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` — dependency level 5

- **Claim/conventions:** Proves that the formal positive quantum Serre half
  embeds as the shuffle subalgebra, has finite-rank free root components,
  reduces to the classical positive half, and retains the classical ranks at
  generic $q'$. The statement now explicitly assumes AC because the proof uses
  the AC-dependent coideal lemma. “Finite-dimensional over $R$” was corrected
  to “finite-rank free over $R$.” It defines $U_{q'}\mathfrak n^+$ over
  $\mathbb C(q')$ with $q_i'=q'^{d_i}$.
- **Direct suppliers checked:**
  `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`,
  `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra`,
  `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`,
  `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`,
  `def-generalized-cartan-matrix`, `thm-serre-presentation-of-a-kac-moody-algebra`,
  `def-axiom-of-choice`, `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-formal-power-series-and-coefficient-extraction`,
  `def-formal-exponential-logarithm-and-powers`,
  `thm-formal-power-series-unit-criterion`, `lem-formal-order-laws`,
  `def-principal-ideal-domain`, `cor-torsion-splits-from-the-free-part-over-a-pid`,
  `thm-invariant-factor-decomposition-over-a-pid`,
  `cor-submodules-of-finite-free-pid-modules-are-free`,
  `def-determinant-of-a-square-matrix`,
  `cor-square-matrix-invertible-iff-determinant-is-a-unit`, `thm-rank-nullity`,
  `thm-right-exactness-of-tensor-products`, `def-field-of-fractions`,
  `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
  `thm-universal-property-of-the-field-of-fractions`,
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `lem-quantum-pascal-recurrence-and-gaussian-integrality`,
  `def-universal-enveloping-algebra`,
  `thm-universal-property-of-the-universal-enveloping-algebra`, and
  `rem-hopf-algebra-structure-on-the-enveloping-algebra`. The current statements
  and the inputs used in the proof were checked. The computed level is 5.
- **Source arguments checked:** Enriquez, §1.1, printed pp. 22–23, Theorem 1.1
  and Corollaries 1.1–1.2; §2.1, printed pp. 32–37, Lemmas 2.2–2.11 and
  Proposition 2.1; Appendix A, Lemma A1, printed p. 62. The full reduced
  Hopf/co-Poisson and graded-dual arguments were read. The item does not assume
  the source’s quantum map is Hopf: it proves Hopf compatibility only for the
  reduced classical map on primitive generators. K. Conrad, *Modules over a
  PID*, §2, Theorem 2.2 and its rank-zero/induction proof, PDF pp. 2–3, was
  checked for the finite-free shuffle target argument. Coverage includes these
  locators.
- **Proof route:** Step 1.1 uses only positive Serre shuffle vanishing to define
  the conditional algebra map and reduce it to the classical Borel. Step 2.1
  checks the reduced map is Hopf on primitive generators. Step 3.1 applies the
  AC-dependent coideal lemma; step 3.2 verifies the first-order cobracket
  against the opposite-Borel Lie bialgebra. Step 4.1 uses the injective graded
  dual, whose image contains the Cartan and all negative simple generators,
  to prove the classical map has zero kernel. Steps 6.1–7.1 use the PID module
  decomposition and the finite-free shuffle target to eliminate torsion.
  Step 8.1 proves $q'\mapsto e^\hbar$ is an embedding and compares the finite
  presentation matrices by their minors to get the generic ranks. Degree zero
  and zero-rank components are handled explicitly; the theorem is not an iff.
- **Choice:** AC appears in the statement and direct dependencies. Its exact use
  is step 3.1, applying
  `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`,
  whose proof uses basis extension, well-ordering, and filtration complements.
  The other root-degree and matrix calculations are finite.
- **Flagged supplier / open obligation:**
  `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` remains
  escalated because its part (ii) radical assertion is false for the displayed
  wordwise pairing. This theorem uses only part (i), exactly at step 1.1, and
  that positive shuffle identity is locally proved. The radical clause is not
  used. This item is recorded as `escalate` with confidence 1 and all 28 direct
  dependencies in
  `research/frontier-43-complex-representation-15-step3b-review-thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free.json`;
  keep it escalated until the owner resolves the supplier.
- **Checks/registration:** Explicit-path precheck passed (1 checked, 0
  failures); explicit-path rendercheck passed (1 file, 0 errors/warnings); its
  strict item contract passed (0 errors/warnings, all eight boundary cases
  dispositioned). The source coverage row was updated. The pair scope was
  refreshed as `sufficient`, with AC and the Step 4 plan correction recorded.
  The run-wide dependency-level check found no batch-6 mismatch, while 31
  unrelated sibling mismatches remain. The content-policy check currently
  reports five not-yet-authored assigned items: the generic PBW/pairing theorem,
  crossed-double lemma, triangular-decomposition theorem, quantized-sl2 string
  theorem, and its B example. The run-driver status recomputed from disk is
  still `running`, shows stage 3b-author at 1/15, and lists the QG pair artifact
  missing; the blocker is the exclusive-cohort JSON parse error at line 877
  (`Expected double-quoted property name`). No autopilot state was changed.
- **Step 4 mismatch:** The scaffold strategy treated $p_\hbar$ as a quantum Hopf
  map, which the Borel supplier does not establish. The repaired proof only
  asserts Hopf compatibility after classical reduction. The new AC hypothesis
  and the explicit finite-matrix generic transfer also amend the plan/prose;
  report these for Step 4. No shared plan was edited.
- **Order note:** The recomputed table places this A item before the level-5 B
  items. Those B examples had already been checkpointed earlier in the turn,
  before this theorem was completed, but none uses this theorem as a supplier.
  They remain unchanged; the ordered remaining work proceeds at level 6.
- **Next:** `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` at level 6. Propagate AC to its statement and direct dependencies, and audit its scaffold’s planned reliance on the separately escalated radical clause before authoring.

## Rechecked Step 3a source-record finding

Step 3a found that the recorded CMSA URL for Etingof–Semenyakin now serves an unrelated 162-page PDF. The pair coverage source row and the already authored counit and antipode-uniqueness item sources now point to arXiv:2106.05252v3 with the checked §2.1–§2.2 locators. The current coproduct/Serre item cites Berkeley and JKK and was unaffected. The seeded Hopf theorem also carried the stale CMSA URL for an optional rank-one example; I removed that unused reference from its manifest row because its actual Hopf claim is already supported by Berkeley and JKK. Before authoring, recheck and correct the remaining stale source metadata for thm-quantized-sl-two-string-formulas and ex-quantized-sl-two-relations-coproduct-and-antipode. The correction is limited to source records; it does not alter those statements or their proofs.

## Session addendum — item 16 repaired, item 6 authored (levels 4 and 6)

This addendum records the second authoring pass over the same pair. It supersedes
the "Pending" next-action lines of the checkpoints above wherever they
conflict; the earlier checkpoints remain the evidence record for the items they
describe.

### `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` (level 4) — repaired

- **Defect repaired.** The scaffold/statement's part (ii) asserted
  $\langle\mathrm{Sh}(V),J_-\rangle=0$. That literal reading is false and is
  refuted by the witness already found in the first pass: the tensor word
  $[v_i|\cdots|v_i|v_j]$ ($N=1-a_{ij}$ copies of $v_i$) pairs with only the
  $p=0$ term of the Serre generator, giving
  $\hbar^{-(N+1)}d_i^{-N}d_j^{-1}\ne0$. Part (ii) is now the statement the
  source's own descent of the pairing uses: $J_-$ annihilates the shuffle half,
  $\langle\langle V\rangle,J_-\rangle=0$, equivalently the wordwise pairing
  descends to $\langle V\rangle\times(T(V^*)/J_-)$; the item's closing note
  records the counterexample to the literal $\mathrm{Sh}(V)$-version. The
  source locator and coverage row now state this qualification.
- **New proof content.** Steps 1.2–4.1: (a) the wordwise pairing is diagonal in
  the tensor-word bases and satisfies the cut-coproduct adjunction rule
  $\langle x,yy'\rangle=\sum_k\langle x_{\le k},y\rangle\langle x_{>k},y'\rangle$;
  (b) $[x_1]*\cdots*[x_m]=\sum_{\sigma\in S_m}q^{-\sum_{a<b,\sigma(a)>\sigma(b)}w(a,b)}[x_{\sigma(1)}|\cdots|x_{\sigma(m)}]$
  for one-letter words, by induction from the block formula; (c) the Serre
  pairing reduces to the permutation matrix
  $M(t,p)=\sum_{\sigma:\sigma(t+1)=p+1}q^{-W(\sigma)}$, and $\sigma\mapsto\sigma^{-1}$
  is a weight-preserving bijection giving $M(t,p)=M(p,t)$ (the letter at
  position $\sigma(x)$ of the transposed sequence is the letter at position $x$
  of the original one, because $\sigma$ carries the $j$-position onto the
  $j$-position); (d) part (i) gives the vanishing of the alternating column
  sums $\sum_t(-1)^tC_{N,t}M(t,p)=0$, and the symmetry turns these into the row
  sums, so every shuffle product pairs to zero with the Serre element; (e) the
  annihilator $\langle V\rangle^\perp$ is a two-sided ideal, so
  $J_-\subseteq\langle V\rangle^\perp$. All computations are finite; no Choice.
- **Checks actually run (current content).** `precheck.mts` (adopted the
  canonical dependency-layer numbering 1.1–4.1): `1 checked, 0 failing`;
  `rendercheck.mjs`: 1 file, 0 errors/warnings; `proof-layout.mjs` (batched with
  item 6): 2 items, 15 steps, 0 defects; strict proof contract for this item:
  0 errors (one `shotgun-bracket` advisory) — the batch contract entry was
  rewritten for the new steps and quotes.
- **Decision status.** The previous `escalate` receipt is now stale relative to
  the repaired content and the engine's `step3-decisions` refuses a non-owner
  re-record on it ("owner must resolve the item decision"). The repair is
  complete and documented here; the owner or engine must issue the refreshed
  decision.

### `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` (level 6) — authored; decision `repaired`

- **Statement as authored.** Part (i): for every $\alpha\in Q_+$,
  $\operatorname{rank}_R U_\hbar\mathfrak n^+[\alpha]=\dim_{\mathbb C}U\mathfrak n^+[\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^+[\alpha]$
  and the same numbers equal the three negative-half numbers at $-\alpha$;
  each $U_\hbar\mathfrak n^\pm[\pm\alpha]$ is finite free, and homogeneous lifts
  of a classical basis form an $R$-basis. Part (ii): the wordwise pairing
  descends to $U_\hbar\mathfrak n^+\times U_\hbar\mathfrak n^-$, satisfies the
  two adjunction rules (the second on representatives in $T(V^*)$), and is
  nondegenerate; the rescaled $\hbar^{1-d_i}$-normalized pairing is
  nondegenerate; equivalently the $\mathbb C(q')$-pairing is nondegenerate and
  the generic halves are graded dual. AC is carried from
  `thm-the-formal-quantum-serre-half-embeds...` and its final use is item (i).
- **Scaffold amendments (for Step 4).** (a) The scaffold's clause "a family of
  lifts of a classical homogeneous basis is a $\mathbb C(q')$-basis" is
  replaced by the provable $R$-basis lift statement; the source's
  rational-function monomial construction would need the classical PBW
  monomial basis, which is not available in this dependency order. (b) The
  "braided Hopf pairing" clause is stated via the two adjunction rules with
  their realized coproducts; the braided-coproduct descent to $U_\hbar\mathfrak n^-$
  is *not* claimed, because the coideality check fails for non-simply-laced
  data in the scalar-braiding model. (c) `thm-tensor-product-basis-from-bases`
  was dropped from `deps` (unused) and `def-axiom-of-choice` added; the
  manifest row was synced.
- **Proof route.** Steps 1.1–1.3 read the ranks off the embedding theorem,
  prove the lift-basis lemma by the $\hbar$-adic reduction argument, and
  descend the wordwise pairing with zero left annihilator. Steps 2.1–2.2 prove
  the adjunction rules: the second by identifying the shuffle coefficients of
  $x*x'$ with the coefficients of the braided coproduct $\Delta(w)$ — both are
  sums over the same letter assignments with weights
  $q^{-\langle\epsilon_i,\epsilon_j\rangle}$, and the form is symmetric.
  Step 2.2 concludes nondegeneracy from the zero left annihilator and equality
  of finite dimensions over $\mathbb C((\hbar))$. Steps 3.1–4.1 give the
  unit rescaling to $\langle e_i,f_{i'}\rangle=\hbar^{1-d_i}\delta_{ii'}$ and
  the $q'=e^\hbar$ transfer (the substitution is injective on $\mathbb C(q')$
  by the $(q'-1)$-factor argument; a field embedding preserves annihilators
  after base change).
- **Checks actually run.** `precheck.mts`: `1 checked, 0 failing` (canonical
  numbering 1.1–3.1, 4.1); `rendercheck.mjs`: 1 file, 0 errors/warnings;
  `proof-layout.mjs`: 0 defects; strict proof contract: 0 errors, 0 warnings;
  `content-policy.mjs research/...-batch-6.pages.json`: 27 scoped items,
  4 errors, all four the not-yet-authored level 7–10 items.
- **Decision record.** `research/...-step3b-review-thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing.json`
  (`repaired`, confidence 1, the six examined dependencies).
- **Word pairing interface now available downstream.** For item 7 the following
  are proved and citable: the descended pairing; both adjunction rules on
  representatives; nondegeneracy; graded duality; the normalization
  $\langle e_i,f_{i'}\rangle=\hbar^{1-d_i}\delta_{ii'}$; and the rank equalities.

### `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` (level 5) — supplier reconciled

- The item is unchanged. Its only use of the repaired supplier is part (i), at
  its step 1.1; part (i) survives the repair verbatim. Its strict contract
  re-check now passes with 0 errors, so the reason for its escalation receipt
  no longer holds. Like the item 16 receipt, the recorded `escalate` receipt is
  owner-held and cannot be re-recorded by this author; the owner or engine must
  refresh it. No other consumer of item 16 in this pair uses part (ii).

### Checks run over the whole pair (current content)

- `precheck.mts` over the 23 A-page item paths: 20 checked, 0 failing (the
  three definitions are format not-applicable).
- `rendercheck.mjs` over 26 existing item files (all but the four unauthored):
  `OK — 26 file(s)`, no math/YAML defects.
- `proof-layout.mjs` on the two changed item paths: 2 items, 15 steps,
  0 defects.
- `item-dependency-levels.mjs check --run frontier-43-complex-representation-15`:
  no mismatch for this pair (the sole reported mismatch is the sibling pair
  `ex-extremal-length-of-rectangle-and-annulus`, level 4 vs computed 5).
- `content-policy.mjs` on the batch manifest: only the four missing-item
  errors.
- `depcheck.mjs` (repo-wide, `--quiet`): for this pair only
  `[link-unresolved]` on `def-positive-negative-and-toral-quantum-subalgebras`'
  same-page link to the unauthored
  `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`, which
  resolves when that item is authored. The one `cited-not-in-deps` finding this
  pair had produced (the closing note of item 16 linking the later item 19) was
  removed by unlinking the note; the remaining depcheck findings are
  pre-existing and outside this pair.
- `fwdcheck.mjs` reports the same link as `[link-unplanned]` (the target is in
  the batch manifest but not yet in the pre-splice `plan-spec` item list);
  `extcheck.mjs` is clean for the pair.
- `validate-plan.mjs research/plan-spec.json --run ...`: for this pair only the undeclared-prerequisite
  finding listed in the Step 4 amendments; the other listed `undeclared-prereq` rows belong to sibling
  pairs.

### Step 4 plan/prose amendments to carry forward

1. `lem-quantum-pascal-recurrence-and-gaussian-integrality` depends on the
   published `def-the-laurent-polynomial-ring`, whose home page is
   `the-burau-representations` (plan order 1502, earlier than this pair), so the
   A page's `requires` closure must add `the-burau-representations` (or the
   supplier must be rehomed). This is the one `undeclared-prereq` finding for
   the pair.
2. Statement/domain amendments for item 16 (annihilation of the shuffle half
   instead of the radical of the full word pairing) and item 6 (rank + $R$-basis
   lift instead of the rational-function monomial clause; adjunction rules on
   representatives), plus the added `def-axiom-of-choice` dependency of item 6.
3. Earlier-session amendments already recorded above: the added A-page
   prerequisites `def-lie-bialgebra-and-root-graded-manin-triple` and
   `thm-root-graded-manin-triple-gives-dual-lie-bialgebras`; the recomputed
   dependency levels; the coideal lemma's added hypotheses; and the
   `p_\hbar`-is-not-a-quantum-Hopf-map correction.

### Open obligations at handoff

*Superseded by Session addendum 2 below: all four items listed here are now
authored, and the current open obligations are stated there.*

- **Unauthored assigned items (blocking the pair and every batch gate):**
  `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double`
  (level 7), `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`
  (level 8), `thm-quantized-sl-two-string-formulas` (level 9) and
  `ex-quantized-sl-two-relations-coproduct-and-antipode` (level 10). Their
  scaffolds, interfaces and supplier lists are in the batch manifest; the level
  6 pairing interface they need is now proved (see above).
- **Owner-held escalation receipts:** item 16 and item 19 (their reason is
  discharged by the repair documented above; the receipts are stale and the
  tool reserves re-recording to the owner), and
  `cex-unsymmetrized-q-parameters-break-the-cartan-normalization` (its
  full-quotient witness needs the triangular-decomposition or a representation
  detecting the component, i.e. later suppliers; keep escalated).
- **Proof-contract entries** exist for 11 of the 27 items (the nine from the
  first pass plus items 16 and 6); the remaining 12 existing items need contract
  entries before the strict batch gate can pass.
- **Batch content, dependency, plan and contract gates** remain open; no
  autopilot state was changed.

### Published concerns

No published library item is affected by any change in this pass; every edit
was to draft in-run items, the batch manifest/coverage records for this pair,
and the pair's contract file. The two source-record repairs (Etingof–Semenyakin
URL, Berkeley locator) were recorded in the first pass and remain in force.

### Route notes for the four unauthored items (resume here after compaction)

*Historical route record; all four items were subsequently authored at the
recomputed levels 4, 7, 8 and 6 (Session addendum 2).*

- **`lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double`
  (level 7).** Read the scaffold row in `...-batch-6.pages.json` and the step-1
  record `...-step1-<id>.json`. The interface it consumes is now proved in item
  6: the descended nondegenerate pairing with both adjunction rules, graded
  duality and the normalization. The remaining work is (1) define the product
  on $D=U_q^-\otimes U_q^0\otimes U_q^+$ — the free-product presentation modulo
  the toral relations (b) and the cross-relations (c) is associative by
  construction, and its consistency with the Drinfeld double formula must be
  checked on homogeneous pure tensors using the finite-dimensional graded
  components and the two adjunction rules; (2) prove the universal property of
  `def-drinfeld-jimbo-quantized-enveloping-algebra` gives $\psi:U_q(\mathfrak g)\to D$
  (the Serre relations hold inside the two factors), while $\phi:D\to U_q(\mathfrak g)$
  exists because (b) and (c) are defining relations of $U_q(\mathfrak g)$;
  (3) $\phi\circ\psi=\mathrm{id}$ and $\psi\circ\phi=\mathrm{id}$ follow because
  both sides are algebra maps agreeing on generators. The delicate step to
  weigh is the associativity check; if the free-product presentation is used,
  the remaining burden is the injectivity of the two factor maps, which is where
  the pairing and the rank equalities of item 6 must enter. Do not claim the
  double is a Hopf algebra.
- **`thm-triangular-decomposition-of-a-quantized-enveloping-algebra` (level 8).**
  Once item 7 gives mutually inverse $\psi,\phi$, its statement follows: the
  multiplication map is the composition of the tensor identification with
  $\phi$; (ii) uses the injectivity of the factor inclusions and the
  identification of $U_q^0$ with the group algebra; (iii) is the graded
  dimension count read off item 6. The scaffold's broken macro
  ($\beta_++\eta_-$) and its "equality when $\beta=0$" clause must be restated
  as in the manifest strategy note (the graded dimension identity for every
  $\beta$).
- **`thm-quantized-sl-two-string-formulas` (level 9).** Rank-one subalgebra via
  the triangular decomposition (choose the PBW ordering with $i$ first), the
  $T_b$-induction for the divided-power commutation formula (the scaffold
  strategy is complete and needs checking at $b=1,2$ and the $[m]_i\neq0$
  usage), and the cyclic module quotient construction of $L_i(N)$; the
  nonvanishing of $[1]_i,\dots,[N]_i$ follows from $q$ transcendental.
- **`ex-quantized-sl-two-relations-coproduct-and-antipode` (level 10).** Direct
  computations in $U_q(\mathfrak{sl}_2)$; the tensor-basis supplier
  `thm-tensor-product-basis-from-bases` is needed here (it was dropped from
  item 6 as unused and remains available), and the source records for this item
  and the previous one must be re-pointed to arXiv:2106.05252v3 as recorded in
  the first pass.

## Session addendum 2 — items 7–10 authored; item 6 re-audited; contract list completed

This addendum records the third authoring pass over the pair and supersedes the
final `## Handoff` section of the previous addendum, the entry table's
"Pending" rows, and its "Open obligations at handoff" list. The earlier
checkpoints and addenda remain the evidence record for the items they describe.
All 27 assigned items are now authored on disk; the four items below were
authored at the recomputed dependency levels 4, 7, 8 and 6.

### `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double` — level 4 (scaffolded at 7) — decision `repaired`

- **Claim/conventions.** For a finite symmetrizable Cartan datum, put
  $W=U_q^-\oplus U_q^0\oplus U_q^+$, let $T(W)$ be its tensor algebra and $J$
  the two-sided ideal generated by the factor-multiplication relations
  $u\otimes v-uv$, the unit relations, the toral relations
  $K_hE_i-q^{\langle\alpha_i,h\rangle}E_iK_h$ and
  $K_hF_i-q^{-\langle\alpha_i,h\rangle}F_iK_h$, and the mixed relations
  $E_iF_j-F_jE_i-\delta_{ij}(K_i-K_i^{-1})/(q_i-q_i^{-1})$; set
  $D:=T(W)/J$. The lemma proves (a) the universal property of $D$ for triples
  of unital algebra maps satisfying conditions (b)/(c), (b) the toral
  cross-relations in $D$ including $\iota_0(K_h)^{-1}=\iota_0(K_{-h})$, (c)
  mutually inverse algebra maps $\psi:U_q(\mathfrak g)\to D$ and
  $\phi:D\to U_q(\mathfrak g)$ with
  $\phi(\iota_-(x_-)\iota_0(x_0)\iota_+(x_+))=x_-x_0x_+$, hence
  $D\cong U_q(\mathfrak g)$ and injectivity of the three factor maps, and (d)
  surjectivity of the product map $U_q^-\otimes U_q^0\otimes U_q^+\to D$. No
  Hopf structure, no tensor-product freeness and no Drinfeld-double pairing
  formula is claimed.
- **Suppliers (current statements read).** The eight direct edges of the
  manifest row: `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-drinfeld-jimbo-quantized-enveloping-algebra`,
  `def-positive-negative-and-toral-quantum-subalgebras`,
  `def-tensor-algebra-of-a-vector-space`,
  `thm-universal-property-of-the-tensor-algebra`,
  `def-generated-and-principal-ideals`, `def-quotient-ring`,
  `thm-quotient-ring-universal-property`.
- **Sources checked.** Enriquez §2.3, printed pp. 38–41 (the double
  $U_\hbar\mathfrak g=U_\hbar\mathfrak b^+\otimes U_\hbar\mathfrak n^-$ with
  the displayed cross-relations and both factor inclusions as algebra maps);
  Berkeley Ch. 13 §13.1.3, Definition 13.1.3.12 with the preceding discussion,
  printed p. 309 (the same quotient of the double by the central diagonal
  Cartan).
- **Proof route.** 1.1 $D$ is associative unital and the $\iota_\bullet$ are
  unital algebra maps; 1.2 the universal property; 1.3 $\phi$ exists because
  every generator of $J$ maps to zero in $U_q(\mathfrak g)$; 1.4 $\psi$ exists
  because every defining relation of $I_{\mathrm{DJ}}$ holds among the images
  of the generators (the two toral families, the two toral-action families,
  the mixed family and the two Serre families, the last holding inside
  $U_q^\pm$); 2.1 $\phi\circ\psi=\mathrm{id}$; 2.2 the toral cross-relations
  by monomial induction; 3.1 $\psi\circ\phi=\mathrm{id}$ and the injectivity
  clause; 4.1 the spanning statement by a terminating rewriting induction on
  the number of $E$-before-$F$ pairs. Only finite words and universal
  properties are used; no Choice.
- **Deferred, not claimed.** Injectivity of the product map in (d), i.e.
  tensor-product freeness of the presentation, and the description of the
  general cross product $\iota_+(x)\iota_-(y)$ by the Drinfeld-double pairing
  formula; both are the open inputs of item 8.
- **Decision/checks.** `record-item` decision `repaired`, confidence 1,
  examined dependencies = the eight edges above; receipt
  `research/frontier-43-complex-representation-15-step3b-review-lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double.json`,
  sha256 prefix `d5190c98b6ef90dc`, recorded 2026-10-07T19:33:19.967Z.

### `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` — level 7 (scaffolded at 8) — decision `escalate`

- **Claim/conventions.** With $\widetilde U=T(W)/\widetilde I$ the
  Serre-free presentation (toral, mixed and factor relations only),
  $\widetilde U^{\pm},\widetilde U^{0}$ its generated subalgebras and
  $m:U_q^-\otimes U_q^0\otimes U_q^+\to U_q(\mathfrak g)$ the multiplication
  map, the theorem proves, conditionally on (A1) and (A2) below: (i) $m$ is an
  isomorphism of $\mathbb Q(q)$-vector spaces; (ii)
  $U_q^\pm\cong\widetilde U^\pm/I^\pm$ with $I^\pm$ the ideal of the separate
  Serre relations, and $U_q^0\cong\mathbb Q(q)[P^{\vee}]$, so the $K_h$ are
  linearly independent; (iii) the graded-component isomorphisms
  $\bigoplus_{\beta_++\beta_-=\beta}U_q^-[-\beta_-]\otimes U_q^0\otimes U_q^+[\beta_+]\to U_q(\mathfrak g)[\beta]$,
  the equality of $\operatorname{rank}U_q^+[\alpha]$ with the classical PBW
  rank, and the free $U_q^0$-module ranks for $\beta\ne0$.
- **Open obligation (exact).** (A1) the Serre-free triangular decomposition
  and (A2) the Serre ideal identity
  $\langle\mathrm{Serre}\rangle=I^-\widetilde U^0\widetilde U^+ +\widetilde U^-\widetilde U^0I^+$
  are assumed, not proved. The exact missing suppliers, in dependency order,
  are `lem-triangular-decomposition-of-the-serre-free-quantum-enveloping-algebra`
  (rewriting/diamond argument for the three reduction rules with the only
  overlaps KKE, KKF and KEF) and
  `lem-serre-elements-are-annihilated-by-the-opposite-half-in-the-serre-free-presentation`
  ($[F_k,\mathrm{Serre}^+_{ij}]=[E_k,\mathrm{Serre}^-_{ij}]=0$ in
  $\widetilde U$, a finite q-binomial computation implying (A2)); both must be
  authored and placed before this item, and the use at proof steps 1.2 and 2.1
  reconciled.
- **Suppliers checked / route.** The seven direct edges of the manifest row
  (items 7 and 6, the Drinfeld–Jimbo definition, the positive/negative/toral
  subalgebras, the Cartan datum, the tensor algebra and its universal
  property). Steps: 1.1 kernels of the induced subalgebra maps; 1.2 the
  intersection computation via [A2] and [A1]; 2.1 the commuting square
  identifies the two kernels with the multiplication map; 3.1 the graded
  statement and ranks via item 6. No Choice.
- **Sources checked.** Berkeley Ch. 13 §13.1.3, Lemma 13.1.3.21 and
  Theorem 13.1.3.22 with the ideal identity (13.1.3.23), printed pp. 309–310;
  Enriquez §2.1–2.3, printed pp. 30–41 (shuffle realization, reduction
  $U_\hbar\mathfrak n^+/\hbar U_\hbar\mathfrak n^+\cong U\mathfrak n^+$ and the
  double presentation).
- **Decision.** `escalate`, confidence 1, the seven examined dependencies;
  receipt sha256 prefix `ec23238b1d7caa0f`, recorded 2026-10-07T19:33:20.802Z.
  Keep escalated until the two suppliers are authored and steps 1.2/2.1 are
  reconciled.

### `thm-quantized-sl-two-string-formulas` — level 8 (scaffolded at 9) — decision `escalate`

- **Claim/conventions.** For a fixed index $i$, $q_i=q^{d_i}$ and
  $x^{(m)}=x^m/[m]_i!$: (i) the rank-one subalgebra
  $A_i=\langle E_i,F_i,K_i^{\pm1}\rangle$ is isomorphic to the Drinfeld–Jimbo
  algebra of the $1\times1$ Cartan matrix $(2)$ with symmetrizer $(d_i)$, the
  images of the monomials $F_i^aK_i^mE_i^b$ being linearly independent as PBW
  monomials; (ii) the weight-conjugation rules for the divided powers and the
  exact commutation formula
  $E_iF_i^{(b)}=F_i^{(b)}E_i+\frac{F_i^{(b-1)}}{q_i^{b}-q_i^{-b}}\sum_{s=0}^{b-1}(q_i^{-2s}K_i-q_i^{2s}K_i^{-1})$
  together with its finite iteration; (iii) existence and uniqueness of the
  simple $(N+1)$-dimensional cyclic modules $L_i(N)$ with the displayed string
  action $K_iv_t=q_i^{N-2t}v_t$, $F_iv_t=[t+1]_iv_{t+1}$,
  $E_iv_t=[N-t+1]_iv_{t-1}$.
- **Local proof content.** Steps 1.1–1.3 prove the conjugation rules and the
  commutation formula by a two-term induction, divide by $[b]_i!$ and iterate;
  steps 1.4 and 2.1 construct $\widetilde M(N)$, $L_i(N)$ and verify the
  action formulas (the $E_i$-identity by the geometric-sum computation);
  step 3.1 proves simplicity and the uniqueness statement.
- **Flagged supplier / consuming steps.** The linear independence in (i) and
  the nonvanishing and simplicity in (iii) use [F4] = the triangular
  decomposition of `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`,
  whose decision is escalated. The exact consuming steps are 4.1 (part (i),
  linear independence of the PBW monomials) and 2.1 (nonvanishing of
  $v_0,\dots,v_N$ and the independence of their images). All other claims are
  proved locally.
- **Sources checked.** Berkeley Ch. 12 §12.2.1–12.2.3, printed pp. 275–281
  (rank-one relations, strings and finite-dimensional modules) and Ch. 13
  §13.1.4, printed p. 310 (divided powers); Jeong–Kang–Kashiwara §1, display
  (1.5), printed p. 5.
- **Decision.** `escalate`, the four examined dependencies; receipt sha256
  prefix `4a6f3bc940d79a12`, recorded 2026-10-07T19:33:21.632Z. Keep
  escalated until item 8 is completed and steps 2.1/4.1 are reconciled.

### `ex-quantized-sl-two-relations-coproduct-and-antipode` — level 6 (scaffolded at 10) — decision `repaired`

- **Claim/conventions.** In the rank-one Drinfeld–Jimbo algebra
  $U_q(\mathfrak{sl}_2)$: (i) the coproduct, counit and antipode on the
  generators, with $\Delta(E)=E\otimes K^{-1}+1\otimes E$,
  $\Delta(F)=F\otimes1+K\otimes F$, $S(E)=-EK$, $S(F)=-K^{-1}F$; (ii) the
  $q$-binomial expansion
  $\Delta(E^n)=\sum_{r=0}^{n}q^{r(n-r)}\binom{n}{r}_qE^{r}\otimes K^{-r}E^{n-r}$
  and both antipode identities on $E$ (and the mirrored computations for $F$
  and $K^{\pm1}$); (iii) $S^{2}(E)=q^{-2}E$, $S^{2}(F)=q^{2}F$, so the
  antipode is not an involution; (iv) non-cocommutativity,
  $\Delta(E)\ne\tau\Delta(E)$.
- **Proof route (all local).** 1.1 instantiates the Hopf formulas; 1.2 expands
  $\Delta(E)^{n}$ with the $q$-binomial lemma for $yx=q^{2}xy$; 1.3 builds the
  oscillator model on $M=\mathbb Q(q)[X^{\pm1}]$ with
  $\widehat E(f)=Xf$, $(\widehat Kf)(X)=f(q^{2}X)$ and
  $\widehat F(X^{n})=\lambda_nX^{n-1}$,
  $\lambda_n=\alpha q^{2n}+\beta q^{-2n}$,
  $\alpha=1/[(q-q^{-1})(1-q^{2})]$,
  $\beta=-1/[(q-q^{-1})(1-q^{-2})]$, checking all three rank-one relation
  families by evaluation on the monomial basis; 2.1–2.2 verify the antipode
  equations and compute $S^{2}$; 3.1 proves $E\ne0$, $K\ne1$ and
  $E\notin\operatorname{span}\{1,K^{-1}\}$ by evaluating the model on $X^{0}$
  and $X^{1}$; 4.1 separates $\Delta(E)-\tau\Delta(E)\ne0$ with the
  coefficient functional $\lambda(g)=[X^{1}](\rho(g)(X^{0}))$. No Choice; the
  nonvanishing statements therefore do **not** depend on the escalated
  triangular decomposition.
- **Sources checked.** Berkeley Ch. 12 §12.1–12.2, printed pp. 274–281
  (relations, coproduct, antipode, $S^{2}\ne\mathrm{id}$) and Ch. 13 §13.1.3,
  printed pp. 308–309 (higher-rank conventions); Etingof–Semenyakin,
  arXiv:2106.05252v3, §2.2.2 Example 2.3(iv), printed p. 5 and §3.5
  Exercise (12), printed pp. 17–20 (the first-pass source-record repair is
  applied).
- **Decision.** `repaired`, confidence 1, the seven examined dependencies;
  receipt sha256 prefix `7b01d897c66319a5`, recorded 2026-10-07T19:33:24.033Z.

### Level and registration bookkeeping (this pass)

- The four items were recomputed from their actual direct suppliers to levels
  **4, 7, 8 and 6** and recorded consistently in item metadata and manifest
  rows; item 8's deps gained `def-tensor-algebra-of-a-vector-space` and
  `thm-universal-property-of-the-tensor-algebra`; sibling manifest and
  coverage rows were preserved.
- The B page's manifest order was set to the dispatch order by level
  (cex level 5, type-$A_2$ example level 5, affine double-edge example level 5,
  $U_q(\mathfrak{sl}_2)$ example level 6); its `examples:` frontmatter and
  prose list the same four items.
- `item-dependency-levels.mjs check --run frontier-43-complex-representation-15`
  reports no mismatch in this pair (six sibling-batch mismatches remain
  elsewhere in the run).

### `thm-generic-quantum-serre-halves-...` (item 6) — decision refreshed after re-audit

- The item's earlier `repaired` receipt (2026-10-07T19:02:05Z) predated the
  item-16 repair (19:03:57Z) and the final manifest sync, so its
  transitive-input hash was stale and the final-phase check reported
  "current item audit required".
- **Re-audit result.** Item 6's uses of item 16 remain supported by the
  repaired supplier: [F1] and [F3] cite it for $U_\hbar\mathfrak n^-=T(V^*)/J_-$,
  the descended wordwise pairing and its diagonal tensor-word form (supplier
  Statement (ii) and its step 1.2) and the cut-coproduct adjunction rule
  (supplier step 1.2, with the well-definedness of the descent closed at its
  step 4.1); [F2] and steps 1.1–4.1 quote
  `thm-the-formal-quantum-serre-half-embeds-...` unchanged. The earlier
  repairs (rank equality plus $R$-basis-lift clause; second adjunction rule on
  representatives of $T(V^*)$) stand as authored; no content change was made.
- **Fresh receipt.** `repaired`, confidence 1, the six examined direct
  dependencies, sha256 prefix `af7e0861044de405`, recorded
  2026-10-07T19:39:29.248Z.
- **Audit note for Steps 5–8.** Item 6's [F3] cites the cut-coproduct
  adjunction rule, which the supplier proves at its step 1.2 rather than
  listing in its Statement; the rule is completely proved there and no other
  consumer in the pair needs it re-stated.

### Contract-file repair — the eight incomplete `iff` boundary slots

- `proof-contract.mjs --strict` initially reported **32 errors**: eight
  entries carried `{"case": null}` placeholders for the `iff-forward` and
  `iff-reverse` boundary cases (`boundary-case` and `boundary-missing`).
  This was a real defect of the contract file created by the previous pass's
  wholesale regeneration, not a mathematical change.
- Fixed with item-specific dispositions only: `not_applicable` with a specific
  reason for the six non-biconditional entries
  (`lem-coproduct-preserves-...`, `thm-the-drinfeld-jimbo-formulas-...`,
  `cex-unsymmetrized-...`, `ex-quantum-serre-calculation-...`,
  `ex-the-double-edge-...`, `def-positive-negative-and-toral-...`), and
  `checked` for the two genuine "equivalently" clauses — item 16
  (annihilation $\Leftrightarrow$ descent, closed in its step 4.1) and item 6
  (formal $\Leftrightarrow$ generic nondegeneracy via the base-change
  identification of its step 4.1 and the pairing of step 2.2).
- After the repair: `0 error(s), 2 warning(s)`, 27/27 items checked
  (the two non-fatal `shotgun-bracket` advisories are on items 16 and the
  coideal lemma); `boundary-audit` exits 0 with no template reuse and no
  contradicted dispositions.

### Checks actually run (current content, this pass)

- `node tools/tsx-run.mjs tools/precheck.mts` on the 27 explicit pair item
  paths: `24 checked, 0 failing` (the three step-free definitions
  `def-bialgebra-counit-and-antipode`,
  `def-symmetrizable-cartan-datum-for-a-quantum-group` and
  `def-lie-bialgebra-and-root-graded-manin-triple` are format
  `not-applicable`).
- `node tools/rendercheck.mjs` on the same 27 items plus the two pair pages:
  `OK — 29 file(s)`, no wikilink-in-math, delimiter, display-block, KaTeX or
  frontmatter defects.
- `node tools/proof-layout.mjs` in one batched command on the six item paths
  changed by this pair's authoring passes (the four items above plus items 16
  and 6): `6 items, 41 steps, 0 defects`.
- `node tools/proof-contract.mjs ... --strict`: `0 error(s), 2 warning(s)`,
  `27/27 item(s) checked` (after the iff-slot repair above).
- `node tools/boundary-audit.mjs ...`: exit 0, 216 rows, no template reuse,
  no contradicted dispositions. `node tools/citation-fidelity.mjs ...`: no
  missing quotes, no widening candidates.
- `node tools/content-policy.mjs research/...-batch-6.pages.json`: `27 scoped
  item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/...-batch-6.coverage.json`:
  `1 page(s), 70 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/finite-smoke.mjs ... --items ...`: `0 error(s), 0 check(s)`,
  0/27 items carrying obligations.
- `node tools/risk-report.mjs ... --items ...`: `0 error(s)`, 27 items routed
  (advisory labels only, no findings).
- `node tools/depcheck.mjs --items-file ...`: OK; 2 advisories
  `[cited-not-in-deps]` for the prose pointers to item 8 in
  `def-positive-negative-and-toral-quantum-subalgebras` and
  `lem-the-generic-borel-half-...` (adding the edge would create a cycle, so
  the pointers remain unlisted). `fwdcheck` and `extcheck` on the same scope:
  OK; `extcheck` reports 27 items, 0 recorded-not-proved.
- `node tools/validate-plan.mjs research/plan-spec.json --run ...`: for this
  pair only the `undeclared-prereq the-burau-representations` rows (A and B
  pages) plus `redundant-prereq` warnings; see Step 4 amendments.
- `node tools/step3-decisions.mjs check --run ... --phase final`: pair state
  below; no autopilot state was modified by this pass.

### Item-decision state of the pair (final-phase check, filtered)

- **Closed: 20 of 27.** All items except the seven listed next; the scope
  receipt `sufficient` (sha256 prefix `7add97f67437597e`,
  2026-10-07T19:32:55.840Z) is current for the pair.
- **Open, owner-held receipts whose documented repair/reconciliation is
  complete** (only the owner or engine can refresh them):
  `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra`
  (item 16; repaired content, stale `escalate` receipt) and
  `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free`
  (item 19; its only supplier use, part (i) at step 1.1, survives the repair).
- **Open, awaiting engine certification of auditor-created additions:**
  `def-lie-bialgebra-and-root-graded-manin-triple` and
  `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` (both absent from
  the immutable pre-author inventory; the engine certifies them after
  dispatch).
- **Open, genuine escalated obligations:**
  `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` (A1/A2),
  `thm-quantized-sl-two-string-formulas` (consumes it at steps 2.1/4.1) and
  `cex-unsymmetrized-q-parameters-break-the-cartan-normalization` (the
  full-quotient witness beyond the Borel computation).

### Native handoff obligations (superseded by Codex round 1)

1. Author, before item 8,
   `lem-triangular-decomposition-of-the-serre-free-quantum-enveloping-algebra`
   and `lem-serre-elements-are-annihilated-by-the-opposite-half-in-the-serre-free-presentation`,
   then reconcile item 8's steps 1.2/2.1, item 9's steps 2.1/4.1 and the cex
   full-quotient witness; keep all three escalations owner-held until then.
2. Owner/engine refresh of the stale receipts of items 16 and 19.
3. Engine certification of the two auditor-created additions.
4. Step 4 splice items below.

### Native handoff plan/prose amendments (historical; superseded below)

1. `the-burau-representations` must enter the A page's `requires` closure (or
   `def-the-laurent-polynomial-ring` must be rehomed): this is the only
   `undeclared-prereq` finding for the pair, reported for both pages. The five
   `redundant-prereq` warnings on the A page are advisory.
2. Statement/domain amendments already recorded in the previous addendum:
   item 16 (annihilation of the shuffle half instead of the radical of the
   full word pairing), item 6 (rank plus $R$-basis-lift clause instead of the
   rational-function monomial clause; adjunction rules on representatives;
   added `def-axiom-of-choice` dependency), plus the amendment that the newly
   authored item 7 deliberately does not claim tensor-product freeness or the
   pairing description, and item 8 is stated conditionally on (A1)/(A2) with
   the two suggested supplier IDs.
3. Earlier amendments already recorded: the two added A-page prerequisites
   `def-lie-bialgebra-and-root-graded-manin-triple` and
   `thm-root-graded-manin-triple-gives-dual-lie-bialgebras`; the recomputed
   dependency levels; the coideal lemma's added hypotheses; the
   `p_\hbar`-is-not-a-quantum-Hopf-map correction; and the B-page reorder.

## Handoff

- **Completed IDs.** All 27 assigned items are authored on disk: the 25
  dispatch items plus the 2 auditor-created A-page additions, spanning the
  A page's 23 items and the B page's 4 items. Every item is registered in the
  batch-6 manifest and coverage records; the page files list all items; all 27
  proof-bearing items have strict contract entries.
- **Checks actually run** (current content): precheck 24 checked/0 failing;
  rendercheck 29 files OK; proof-layout 6 items/41 steps/0 defects;
  strict proof contract 0 errors/2 warnings 27/27; boundary-audit exit 0;
  citation-fidelity clean; content-policy 27 items 0/0; coverage-checklist
  0/0; finite-smoke 0 obligations; risk-report 0 errors; dependency-level
  check no pair mismatch; depcheck/fwdcheck/extcheck clean on scope;
  validate-plan with the one Step 4 prereq finding; final-phase decision
  check: 20 closed / 7 open as listed.
- **Added suppliers.** `def-lie-bialgebra-and-root-graded-manin-triple`,
  `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` (both added in the
  first pass as missing prerequisites; certified by the engine). No new
  published item and no published-content edit in this pass.
- **Published concerns.** None new; the two first-pass source-record repairs
  (Etingof–Semenyakin URL, Berkeley locator) remain in force and are recorded
  in the coverage file.
- **Open obligations.** Exactly the four items of "Open obligations (current)"
  above; the three mathematical escalations stay owner-held and none is marked
  complete.


## Codex focused repair round 1 — current handoff

The local mathematical obligations are completed in the twelve carriers listed in [the round-1 report](frontier-43-complex-representation-15-quantum-normalization-round1.md). This supersedes the native handoff's conditional triangular decomposition, missing Serre-free suppliers, incomplete full-B2 witness and representative-only pairing limitations. The existing crossed-double item supplies the complete rewriting/confluence and mixed-Serre/ideal arguments; no new lemma IDs were added. Both Hopf/PBW richness and arbitrary symmetrizable scope are retained. Correct total degree is positive minus negative degree, with additional degree-zero summands.

Batch-6 manifest, exact contracts, source coverage and both pages are synchronized. The A requires edge to `the-burau-representations` is backward; B reaches it through A. Cross-batch inputs remain empty. The twelve changed-path checks pass (proof-layout 76 steps/0 defects, precheck 11 proofs/0 failures, render14/0); strict contracts, content, manifest, coverage, citation and focused graph checks pass as recorded in the report. Actual consumer closure has no outside-batch or published subject.

Final root-owned work: native-origin handling for the two Manin additions, refresh of stale owner/engine decisions, dependency-ordered recertification of the stable Step-3 frontier, and the central gate. No owner decision, runtime, canonical ledger or global plan was edited. Before carriers and raw hashes are preserved under the report's evidence directory; no origin reclassification or historical timestamp was fabricated. Round 2 remains reserved for a new concrete review/gate finding.

## Native refresh (request `efb43766-a653-4245-a0bb-8fe6caa8803f`) — current handoff

Request accepted 2026-10-07T20:37:55.683Z; this pass ran on the drained pair.
Scope: the two corrected origin-sensitive suppliers
`def-lie-bialgebra-and-root-graded-manin-triple` (level 0) and
`thm-root-graded-manin-triple-gives-dual-lie-bialgebras` (level 1) examined in
supplier-before-consumer order, their actual current proof inputs, the direct
consumer's uses, and the required pair artifacts (this report, both pages, the
batch-6 manifest, contracts and coverage). Every reviewed claim and proof is
preserved; the only content edits are the verified evidence corrections in
§4. This section is the current handoff and supersedes the round-1 handoff's
"current handoff" statement where they differ.

### 1. `def-lie-bialgebra-and-root-graded-manin-triple` (level 0) — examined

- **Claim/conventions (current carrier).** Lie bialgebra over a char-0 field
  with co-Jacobi `Alt(δ⊗id)δ=0` and the 1-cocycle rule
  `δ([x,y])=[x,δ(y)]−[y,δ(x)]`; the bracket action
  `[x,u∧v]=[x,u]∧v+u∧[x,v]`; same-side local finiteness, degreewise perfect
  pairings, the restricted graded dual, the determinant pairing on exterior
  powers, the two transposition equations for dual Lie bialgebras, and the
  root-graded Manin triple with the round-1 correction that the
  finite-degree-decomposition condition is imposed within `d_+` and `d_-`
  **separately** while the full double need not have finite decompositions.
  All of this is exactly what the transpose theorem consumes; the round-1
  correction is present and consistent with the theorem's use of fixed
  finite-dimensional pieces.
- **Actual current inputs (4 direct dependencies, all published).** Read the
  current statements of `def-field`, `def-lie-algebra-over-a-field`,
  `def-ring-characteristic` and `def-exterior-algebra-of-a-vector-space`.
  Each use is exact: `def-field`/`def-ring-characteristic` for "field of
  characteristic 0", `def-lie-algebra-over-a-field` for the Lie bracket and
  its Jacobi identity, `def-exterior-algebra-of-a-vector-space` for `Λ²` and
  the wedge product. The item is a definition: scoped precheck is
  `not-applicable` (0 proofs, 0 failures); no Choice is used or needed.
- **Source verification (independent, on the current local PDF).** Berkeley
  Lectures, re-hashed at 2,118,866 bytes, SHA-256 `ffeb74a5…e6264ef`
  (matches `…-quantum-normalization-sources/metadata.json`). Definition
  10.1.1.1 is on printed p. 228 (PDF p. 241); it states co-Jacobi as
  `Alt(δ⊗id)∘δ=0` and compatibility as
  `δ([x,y])=[x,δ(y)]+[δ(x),y]`, which is the item's displayed rule
  (`[δ(x),y]=−[y,δ(x)]`), and it extends the bracket to wedges by exactly the
  item's rule. The table of contents places §10.4.1 at printed p. 242, and
  printed pp. 244–245 carry §10.4.2.1–10.4.2.2 (Borel example and
  Kac–Moody setup); Exercise 10(a)–(c) is printed on p. 251 (p. 252 is
  blank). Two recorded locators were off by one page and are corrected in
  §4.

### 2. `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` (level 1) — examined

- **Statement.** Transposes of the opposite brackets of a locally finite
  root-graded Manin triple give well-defined cobrackets making the two halves
  dual Lie bialgebras. The phrase "locally finite" is now bound in the
  definition by §4(a).
- **Independent verification of the argument on the current carrier.**
  - *1.1 (well-definedness).* For homogeneous `x∈d_+`, only pairs of degrees
    in `d_-` summing to `−deg x` can contribute; that is finitely many pairs
    by the same-side condition (not by any condition on the whole double),
    and each contributing pair lies in finite-dimensional pieces, so the
    functional `y∧z↦B(x,[y,z])` is a finite linear functional on
    `Λ²d_-`. The induced pairing on each fixed exterior degree is a direct
    sum of tensor products of the perfect cross pairings, hence perfect, so
    it defines a unique finite element `δ_+(x)∈Λ²d_+`; the same holds for
    `δ_-`, and both are linear.
  - *1.2 (mixed brackets).* Recomputed with dual bases `B(e_i,f^a)=δ_i^a`,
    `[e_i,e_j]=Σ_k c^k_{ij}e_k`, `[f^a,f^b]=Σ_m d^{ab}_m f^m`: invariance
    gives `B([e_i,f^a],f^k)=B(e_i,[f^a,f^k])=d_i^{ak}` and
    `B([e_i,f^a],e_k)=B(f^a,[e_k,e_i])=−c^a_{ik}`; isotropy
    (`B(d_+,d_+)=B(d_-,d_-)=0`) makes pairing against `{e_k}∪{f^k}` read off
    the two components separately, so
    `[e_i,f^a]=Σ_k(d_i^{ak}e_k−c^a_{ik}f^k)` is forced and, by the grading,
    finite. The source's proof of Lemma/Definition 10.4.1.4 (printed p. 242
    to 243) uses exactly this determination; the item's version is the
    root-graded restatement.
  - *2.1 (co-Jacobi).* Independent verification: under the degreewise perfect
    identification `d_-≅(d_+)^{gr′}`, `δ_+` is the transpose of the bracket
    of the Lie algebra `d_-`, i.e. the Chevalley–Eilenberg differential of
    `d_-` up to sign; `d²=0` for that differential is precisely Jacobi in
    `d_-`, so `Alt(δ_+⊗id)δ_+=0`. Pairing the co-Jacobi 3-tensor against
    `y∧z∧w∈Λ³d_-` produces a cyclic Jacobi combination in `d_-`, which
    vanishes; perfectness of the exterior pairing gives the element identity.
    The symmetric argument covers `δ_-`.
  - *3.1 (1-cocycle).* Recomputed the full coefficient identity. From 1.2,
    `([e_i,f^a])_-=−Σ_k c^a_{ik}f^k`, and the pairing of `Λ²d_+` with
    `Λ²d_-` sees only those opposite components, so
    `⟨[e_i,δ_+(e_j)],f^a∧f^b⟩=Σ_k(c^a_{ik}d_j^{kb}+c^b_{ik}d_j^{ak})`;
    subtracting the `i↔j` term gives the right-hand side of the displayed
    identity. Jacobi in `d` for `(e_i,e_j,f^a)` paired with `f^b` expands,
    using the formula of 1.2, to exactly
    `Σ_k(c^a_{ik}d_j^{kb}+c^b_{ik}d_j^{ak}−c^a_{jk}d_i^{kb}−c^b_{jk}d_i^{ak})`,
    while the left-hand side is
    `⟨δ_+([e_i,e_j]),f^a∧f^b⟩=Σ_k c^k_{ij}d_k^{ab}`; the two agree, so
    `δ_+([e_i,e_j])=[e_i,δ_+(e_j)]−[e_j,δ_+(e_i)]`. Swapping the two halves
    (Jacobi for `(e_i,f^a,f^b)`) gives the `δ_-` cocycle. Extending from
    homogeneous bases and the stated transpose identities completes the two
    dual Lie bialgebra structures, so the statement "well defined and dual
    Lie bialgebras" is fully supported.
- **Actual current inputs (5 direct dependencies).** Read the current
  statements of the four level-0 items above plus the definition itself;
  the uses at [F1]/[F2] and steps 1.1–3.1 match those statements exactly. No
  Choice; all bases used in 1.2 are finite dual bases of supplied perfect
  pairings.
- **Source verification.** Same Berkeley PDF hash as in §1. Printed p. 242
  states Lemma/Definition 10.4.1.4 (existence and uniqueness of the double's
  bracket from the two subalgebras and the invariant form; the unique Lie
  bialgebra structure with `(g,δ)` and `(g*,−δ*)` as sub-bialgebras), and
  printed pp. 243–244 continue its proof and 10.4.1.6–10.4.1.8. The recorded
  range `printed pp. 243–244` omitted the page that states the result; §4(b)
  records the correction to `printed pp. 242–244`. The item's proof does not
  assume the source's double-specific setting: the transposition argument is
  valid for any locally finite root-graded Manin triple, and its extra
  generality is proved locally.

### 3. Consumer reconciliation, supplier-first (current carriers)

- The single direct consumer is
  `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`
  (level 2): [F6] cites the theorem, and step 3.1 applies it to the Manin
  triple built in step 1.7. Recomputed the interface: with
  `B_d((x,a),(y,b))=½((x|y)−(a|b))`, `ι_+(h+x_+)=(h+x_+,h)` and
  `ι_-(h+x_-)=(h+x_-,−h)`, the images are complementary isotropic
  subalgebras and the cross pairing is `(h|h')+½(x_+|x_-)`, degreewise
  perfect; `[f_i,h]=α_i(h)f_i` (the sign from `[h,f_i]=−α_i(h)f_i`), so
  `B_d(e_i,[f_i,h])=α_i(h)/(2d_i)`, while
  `⟨e_i∧h_i,f_i∧h⟩=(1/(2d_i))(α_i(h)/d_i)=α_i(h)/(2d_i²)` using
  `(h_i|h)=α_i(h)/d_i`. Transposition therefore gives
  `δ^+(e_i)=d_i e_i∧h_i`, matching the item's claim, and the cobrackets
  vanish on `h`. This is exactly the normalization of the first-order skew
  part of the formal shuffle coproduct used downstream:
  `Δ(v_i)=1⊗v_i+v_i⊗G_i` with `G_i=exp(ℏd_iH_i)` gives
  `δ([v_i])=d_i[v_i]∧H_i` (the embedding theorem, step 3.2), and the source's
  own "up to some signs and factors of 2" caveat (printed p. 245) is what the
  ½-rescaled form fixes. The consumer's only use of the theorem is at step
  3.1 (and [F6]); no use depends on more than the theorem's statement.
- The same consumer's step 1.7 establishes the Manin-triple hypotheses
  (subalgebras, isotropy, complementarity, degreewise perfect cross pairing,
  same-side finiteness) on the current definition. No other item in `items/`
  references the two suppliers (`grep` over all item bodies), so the
  outside-batch and published consumer closure is empty; the round-1
  consumer record is confirmed on current content.

### 4. Corrections actually made (all verified against the current PDF)

- (a) `items/def-lie-bialgebra-and-root-graded-manin-triple.md`: locator
  `§10.4.1.4–10.4.1.8, printed pp. 243–244` → `printed pp. 242–244` (10.4.1.4
  is stated on p. 242), and `Exercise 10(c), printed p. 252` → `printed
  p. 251` (Exercise 10(a)–(c) is on p. 251; p. 252 is blank). In the same
  item, the requirement sentence now names the property the theorem assumes:
  `Require finite degree decompositions within each of d_+ and d_- separately,
  as above; a triple satisfying this requirement is called **locally
  finite**.` No mathematical content changed.
- (b) `items/thm-root-graded-manin-triple-gives-dual-lie-bialgebras.md`:
  locator `printed pp. 243–244` → `printed pp. 242–244`.
- (c) `items/lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras.md`:
  the same two locator corrections (`printed pp. 242–244`, `printed p. 251`).
- (d) Synchronization of shared carriers, preserving all sibling rows:
  the three matching `locator` strings in
  `research/frontier-43-complex-representation-15-batch-6.pages.json` (and the
  definition's `statement` mirror, which still equals the item's `##
  Definition` text verbatim); the one matching coverage row in
  `research/frontier-43-complex-representation-15-batch-6.coverage.json`; and
  the two citation quotes in
  `research/frontier-43-complex-representation-15-batch-6.proof-contracts.json`
  (the theorem's F1/F2 quotes of the definition), which now match the item
  text byte-for-byte. No proof step, dependency, level, provenance field,
  page list or prose claim was altered.
- **Raw-hash record (raw file SHA-256, whole file bytes).** Pre-refresh
  content comes from the round-1 exit state: `def-…manin-triple`
  `360955d66b3693dd32d86183fd51f088ab080cc4facdffe8e17fe3fd5d1350c8`,
  `thm-…dual-lie-bialgebras`
  `20024701d0f118b3e06d46827a00a4dc1617dc579ba8d61a7b931fceae29a611`
  (the round-1 record's `7417462a…` is the same bytes with the final newline
  dropped — a trailing-newline bookkeeping artifact in that capture, reported
  here rather than rewritten), `lem-opposite-…`
  `870a953250472e525de8d2225463140d500df5c6dd6f6981086e3d196f5516e5`.
  Current content: `6db63bb3a77ec999787fb0f3bae63ece470c26845fd9861a808fb0b39bac9e9c`,
  `85591c917ded692e1884f39e75e99c6969e7617ab225fea4279498fa02878829`,
  `7ced5d4e1a3c5d9a77b65e3d0930d43de60e4b0819ff3371b664fed165b1f92d`.
  The substitutions above are the complete deltas, so the pre-refresh bytes
  are reconstructible. Current shared carriers: batch-6 manifest
  `8f5ef5ece4f1bb802e00f83dbfce2aa45e6b729c3418adbcc8d8e662857864b6`,
  coverage `9ff930ca751345423a53b2ea5f4088e19f1e128aca82b4ec0dd8076697e8bf0c`,
  contracts `649fc9ef1d30e9260c538a314f111661d3065ae3f6539c16ea259ad9f150aa0a`.
- **Native creation history preserved.** Both Manin carriers retain
  `origin: pipeline` and `pipeline_run: frontier-43-complex-representation-15`
  with their original metadata; no timestamp, mtime or authorship record was
  fabricated, and no file was touched solely to change a timestamp.

### 5. Checks run on the current content (after the corrections)

| Check | Actual result |
|---|---|
| `proof-layout.mjs` on the three changed item paths (batched) | 3 items, 13 steps, 0 defects |
| `precheck.mts` on the 27 pair items | 24 checked, 0 failing (3 definitions format-n/a) |
| `rendercheck.mjs` on 27 items + 2 pages | OK — 29 files, 0 errors/warnings |
| `proof-contract.mjs --strict` (batch-6) | 0 errors, 1 warning (pre-existing coideal `shotgun-bracket`), 27/27 |
| `citation-fidelity.mjs` (batch-6) | 201 citations, no missing quotes, no widening candidates |
| `boundary-audit.mjs` (batch-6) | no contradicted dispositions |
| `content-policy.mjs` (batch-6 manifest) | 27 scoped items, 0 errors, 0 warnings |
| `coverage-checklist.mjs` (batch-6 coverage) | 1 page, 70 harvested results, 0 errors |
| `manifest-deps.mjs` / `audit-manifest.mjs` | 27 items, 0 errors / 0 defects, 208 relationships |
| `depcheck` / `fwdcheck` / `extcheck`, pair item scope | 0 errors (one pre-existing non-load-bearing `cited-not-in-deps` prose pointer in the subalgebra definition) |
| `item-dependency-levels.mjs check --run …` | 382 items, maximum level 27, no mismatch |
| `validate-plan.mjs research/plan-spec.json --run …` | pair pages list correctly, 23+4 items, only advisory `redundant-prereq` rows |

### 6. Decision and origin state after the refresh (owner-held)

- Before this pass, the twelve owner `repaired` receipts from
  2026-10-07T20:16–20:17Z covered the round-1 carriers and the pair showed 15
  stale non-owner receipts. The source corrections above change the bytes of three
  carriers, so exactly these owner receipts are now stale and require an
  owner refresh on the corrected content:
  `def-lie-bialgebra-and-root-graded-manin-triple`,
  `thm-root-graded-manin-triple-gives-dual-lie-bialgebras`,
  `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`.
  Their transitive dependents thereby revert to the owner-held "changed inputs
  require a current owner decision" state in the dependency-ordered
  recertification pass:
  `thm-the-formal-quantum-serre-half-embeds-…`,
  `thm-generic-quantum-serre-halves-…`, `thm-triangular-decomposition-…`,
  `thm-quantized-sl-two-string-formulas` (plus the already-open items). This
  refresh does not itself certify mathematical acceptance and recorded no
  item decision; the native refresh for the two Manin additions, the
  dependency-ordered Step-3 recertification and the central gate remain the
  root-owned pass identified in the round-1 handoff. This dispatch's
  author-result is the covering native result for engine certification of
  the two additions.
- The two Manin additions keep their immutable-origin status (absent from
  `…-step3-auditor-baseline.json` in both `items` and
  `existing_item_files`); no history was invented for them.

### 7. Observations and open obligations

- One non-blocking observation for Steps 5–8: the definition uses "symmetric
  invariant bilinear form" without a wikilink to a bilinear-form definition
  (`def-bilinear-symmetric-skew-and-alternating-forms` exists). This matches
  sibling library practice for the same phrase (e.g.
  `def-casimir-operator-relative-to-an-invariant-form`) and is recorded, not
  edited.
- Nothing else was found: the two named suppliers, their current inputs, the
  direct consumer use and every required pair artifact are consistent and
  pass the scoped checks on the current bytes. No outside-batch or published
  subject is affected; batch 6 belongs exclusively to this pair and no
  sibling pair carrier was edited.
