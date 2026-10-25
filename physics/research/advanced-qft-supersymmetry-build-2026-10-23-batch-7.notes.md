# Batch 7 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Pair: `qftx-equivariant-cohomology` / `qftx-equivariant-cohomology-examples`  
Batch dependency level: 0; the recorded in-run batch graph lists no prerequisite batch.

## Plan and scope

The complete design section and `research/plan-spec.json` agree on page IDs,
category, library, title, B-page companion and required page
`moment-maps-and-symplectic-reduction`. Their empty item arrays are scaffolding
placeholders; the design and proposed inventory include the Cartan definition.
No substantive plan/design conflict remains.

The pair covers a standard compact product torus, its Borel construction, the
real Cartan complex, the local proof that `d_T^2=0` on invariant forms, and two
worked calculations. It does not assert a general Borel–Cartan comparison,
localization, equivariant Chow, quotient-stack Borel–Moore homology, or rational
coefficient results. The A page keeps its required moment-map page edge. The
current published page develops Hamiltonian actions and the library
negative-exponential fundamental-field convention; no symplectic or Hamiltonian
hypothesis is needed for the general smooth-action definition written here.

## Prerequisite audit and local order

The exact supplier statements and proofs were inspected. The transitive
prerequisite audit covers the Milnor join model and its free/contractible
result, the integral `CP^infinity` ring proof, the two universal-coefficient
inputs, the finite-free Künneth theorem, Cartan's magic formula, and the action,
form and contraction definitions used by the square-zero proof. The complete local exponential input was inspected, including the uniqueness proof for one-parameter subgroups. All 43 distinct
external mathematical item carriers in the final pair match their SHA-256 pins
in `research/math-imports.json`.

`loadStep1Record` and `step1Decision` report missing run-local readiness rows
for the published root mathematical imports because those items are not owned
by this run's manifests or plan. Their actual current interfaces and proofs
were inspected, and their carrier hashes match. Those missing out-of-run rows
are not treated as prerequisite gaps.

The design's phrase “compact torus” leaves several inputs implicit. The A page
therefore starts with `def-standard-product-torus-as-a-compact-lie-group`
(level 0), which defines the quotient charts and period-one tangent basis, proves the
compact connected abelian Lie-group structure, finite CW structure,
identity homotopy extension property, and well-pointedness, and proves that
the period-one tangent vector exponentiates to the coordinate circle. It
derives the countable-choice premise from AC. Next is `lem-torus-classifying-space-cohomology`
(level 1), which proves the real polynomial coefficient ring for the selected
product Milnor model, including the coefficient-change ring map and `r=0`.
`def-torus-equivariant-cohomology-cartan-model` is level 2. Both B-page examples
are level 3. No local dependency cycle or missing local carrier remains.

## Authored item checkpoints

- `def-standard-product-torus-as-a-compact-lie-group`: defines the quotient
  smooth charts and period-one basis for `(R/Z)^r`; proves the Lie-group,
  finite CW, identity-cofibration and well-pointed claims. The local smooth
  chart and group-operation arguments are explicit.
- `lem-torus-classifying-space-cohomology`: for the fixed product presentation
  and AC, proves `H^*(BT; R) = R[u_1,...,u_r]`, with degree-two generators
  identified with the dual period-one basis. It checks the quotient topology,
  real-coefficient UCT, finite-free homology, coefficient-change
  multiplicativity, finite Künneth iteration and `r=0`.
- `def-torus-equivariant-cohomology-cartan-model`: defines Borel cohomology
  and the invariant real Cartan complex with the negative-exponential field
  convention and algebraic polynomial/form product. It verifies the diagonal
  action, fixed-subalgebra product, degree and derivation properties,
  basis-independence, `d_T^2=0`, empty manifold, zero rank and trivial action.
  It makes no general Borel–Cartan isomorphism claim.
- `ex-qftx-equivariant-cohomology-of-a-point`: computes both models as
  `R[u]` with the selected degree-two normalization.
- `ex-qftx-equivariant-cohomology-of-a-free-circle-action`: for left
  translation on `R/Z`, proves the Borel quotient is homeomorphic to `ET` and
  computes the invariant Cartan complex with `X_e = -partial_x` and
  `d_T(P eta) = -uP`; both cohomologies are `R` in degree zero only.

## Sources read and harvest dispositions

All four PDF URLs below are full-text documents. Their full retrievals are
fetch-verified, and their exact relevant passages were inspected. Coverage
records every harvested result and disposition.

- Allen Hatcher, *Algebraic Topology*,
  `https://pi.math.cornell.edu/~hatcher/ATch3.pdf`, chapter 3, §3.2,
  Theorem 3.19 and proof, printed pp. 221–222. Its projective-space ring
  result is included in `lem-torus-classifying-space-cohomology`; the real
  coefficient and torus product steps are proved locally. Fetch verified.
- Allen Hatcher, *Algebraic Topology*,
  `https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`, chapter 0,
  “Cell Complexes” and “Operations on Spaces,” printed pp. 5–8. The circle
  cell structure and finite product-cell construction are included in
  `def-standard-product-torus-as-a-compact-lie-group`; the standard smooth
  charts are proved locally. Fetch verified.
- Qiuyu Ren, *Equivariant de Rham Theory*,
  `https://math.berkeley.edu/~qiuyu/papers/Equivariant_de_Rham_Theory.pdf`,
  §2.1 Definition 2.3, §4.3 Cartan model and Example 4.10, and §4.4
  Proposition 4.12. These passages are included in the Borel/Cartan definition
  and point example. The Weil–Cartan identification is out of scope because
  the authored item defines its Cartan complex and proves the local differential
  identity directly. Fetch verified.
- Jonas Menzi and Finn Michler, *A Brief Introduction to Equivariant
  Cohomology*,
  `https://people.math.ethz.ch/~acannas/Teaching/Moment_Map_2026/Papers/09_Introduction_to_Equivariant_Cohomology.pdf`,
  §§2.1–2.2, Definitions 2.1, 2.3, 2.11, Proposition–Definition 2.15,
  Lemma 2.14, Examples 2.4 and 2.22, and §3 Theorem 3.1 with proof. The
  definitions, local square calculation and point examples are included.
  Theorem 2.23 is out of scope because its general comparison proof is omitted
  and no general comparison is asserted here. Theorem 3.1 is out of scope
  because its proof leaves the odd-degree case as “similar”; the concrete
  translation example is proved independently. Fetch verified.

There were no retrieval failures or dropped sources. The A-page coverage has
17 harvested results; the coverage checklist passes with zero errors/warnings,
and `source-fetch-check` verifies 4/4 PDFs.

## Scoped checks and readiness

The batch manifest, YAML-only A/B pages, proof contracts, coverage and
cross-batch dependency array match the current item frontmatter. The cross-batch
record has 58 verified edges (57 external item edges and the required page
edge); the pair-local dependency checker finds no missing or duplicate edge.
The strict proof-contract check passes all five items with 62 exact
fact-source citations and 26 proof-step mappings. Focused `depcheck` reports
zero errors/warnings across the five items and their 1,789-item/322-page
prerequisite closure. `content-policy` checks five items with zero
errors/warnings. `rendercheck` checks five items and both pages with zero
errors/warnings. `proof-layout` checks all five changed items, 26 steps, zero
defects. The local item-level calculation returns levels 0, 1, 2, 3, 3.
All five current Step 1 records are `ready` and hash-current.

The run-wide `item-dependency-levels` command still reports empty scaffold
inventories on 78 pages outside this assignment and 12 existing level-label
mismatches. The mismatched items are
`def-abbv-equivariant-integration-conventions`,
`lem-abbv-equivariant-thom-gysin-identities`,
`lem-abbv-fixed-component-euler-invertibility`,
`thm-atiyah-bott-berline-vergne-integration-formula`,
`ex-abbv-projective-line-standard-circle-action`,
`ex-abbv-positive-dimensional-fixed-components`,
`def-aqft-scheme-and-wilson-coefficients`,
`thm-aqft-truncated-coupled-rge-wellposedness`,
`ex-aqft-coupled-rge-linear-mixing`,
`def-qftx-euclidean-yang-mills-sector`,
`ex-qftx-euclidean-trivial-vacuum-sector`, and
`ex-qftx-bpst-instanton-formal-sector-weight`. None is an item in this batch.

`batch-dependency-levels.mjs check` reports the shared receipt as stale after
this batch's manifest changed. The current plan still places batch 7 at level 0
with no in-run batch supplier; the shared dependency-level receipt was left for
the owner to refresh. The scoped batch-7 item graph and all assigned item levels
are current. These run-wide findings do not identify a missing prerequisite
for this pair.
