# Step 3a reader report — batch 10

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `10` only (`fd-mf03` and its examples companion)

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-mf03.md`
- `library/fluid-dynamics-mathematics/fd-mf03-examples.md`

Assigned items, read in dependency order:

- `items/lem-fd-isotropic-linear-classification.md`
- `items/def-fd-simple-fluid-state.md`
- `items/lem-fd-helmholtz-chart.md`
- `items/lem-fd-response-acoustic-algebra.md`
- `items/lem-fd-gibbs-entropy-residual.md`
- `items/lem-fd-newtonian-admissibility.md`
- `items/ex-fdmath-negative-bulk-residual.md`

Page and item prerequisite context opened to check the assigned arguments:

- Pages: `library/fluid-dynamics-mathematics/fd-mf02.md` and
  `library/thermodynamics-mathematics/td-math-nonsmooth-equilibrium.md`.
- Published mathematical items: `items/thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.md`,
  `items/cor-mean-value-theorem.md`, `items/thm-intermediate-value.md`,
  `items/thm-chain-rule-for-total-derivatives.md`,
  `items/def-countable-choice.md`, and
  `items/thm-euclidean-inverse-function-theorem.md`.
- Batch-8 current-run supplier chain for the Gibbs identity:
  `items/lem-fd-local-balance-equivalence.md`,
  `items/lem-fd-transport-and-density.md`,
  `items/lem-fd-cauchy-contact.md`, and `items/def-fd-smooth-motion.md`.
- Mathematical suppliers used by the transport/contact proofs:
  `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md`,
  `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`,
  `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`,
  `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`,
  `items/cor-determinant-is-a-polynomial-in-the-matrix-entries.md`,
  `items/def-matrices-over-a-commutative-ring.md`, `items/def-natural-numbers.md`,
  `items/thm-change-of-variables-for-compact-jordan-sets.md`,
  `items/thm-injective-c-one-images-of-compact-jordan-sets-are-jordan.md`,
  `items/thm-continuous-functions-on-compact-jordan-sets-are-integrable.md`,
  `items/def-riemann-integral-over-a-jordan-set.md`,
  `items/lem-jordan-set-integral-well-defined.md`,
  `items/thm-multidimensional-integral-properties.md`,
  `items/thm-mean-value-inequality-for-total-derivatives.md`, and
  `items/cor-zero-total-derivative-on-a-convex-open-set-is-constant.md`.

Run evidence consulted: `research/fluid-dynamics-all-47-2026-10-23-beta-10.task.md`,
`research/fluid-dynamics-all-47-2026-10-23-batch-10.pages.json`,
`research/fluid-dynamics-all-47-2026-10-23-batch-10.proof-contracts.json`,
`research/fluid-dynamics-all-47-2026-10-23-batch-10.cross-batch-dependencies.json`,
`research/fluid-dynamics-all-47-2026-10-23-batch-10.notes.md`,
`research/fluid-dynamics-all-47-2026-10-23-batch-10.coverage.json`, and the relevant
entries of `research/math-imports.json`. The seven contract rows' cited suppliers,
derivation claims, step inputs, and finite checks were compared with the live items.

The cited source targets were opened at the listed locators: Kelly, *Solid
Mechanics Part III*, Appendix 4.A, pp. 406–411 ([PDF](https://pkel015.connect.amazon.auckland.ac.nz/SolidMechanicsBooks/Part_IV/Chapter_1_Hyperelasticity/PDF/Elasticity_08_Appendix_Isotropic_Functions.pdf));
Wilmanski, *Continuum Thermodynamics*, §4.2, pp. 46–50
([PDF](https://www.mech-wilmanski.de/graz2007.pdf)); and Abeyaratne,
*Continuum Mechanics*, Volume II, Chapter 5 §§5.1–5.2, Chapter 12 §12.1 and
Problem 12.4, and Chapter 12 §12.2 Problem 12.8
([PDF](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)). These sources
support the surrounding continuum-mechanics context; the assigned mathematical
claims are proved locally. Problem 12.8 is an outline, not a complete proof,
and the local coefficient/example arguments do not rely on it as a proof.

## Review results

- `lem-fd-isotropic-linear-classification` — pass. The Rayleigh-quotient
  eigenvector argument and finite orthogonal decomposition establish an
  orthonormal eigenbasis; the half-turn and proper-rotation arguments yield
  the stated form, and the final evaluations establish uniqueness and the
  converse. The Heine–Borel/extreme-value supplier states the exact compact
  extremum fact used.
- `def-fd-simple-fluid-state` — pass. The state domain, regularity, partial
  derivative convention, response restrictions, and SI interpretation are
  explicit; no material behavior is asserted.
- `lem-fd-helmholtz-chart` — pass. The MVT/IVT argument gives a unique local
  inverse, and the displayed Lipschitz estimate supplies continuity and the
  first-order expansion used for its `C^1` derivatives. In step 1.1, the
  local bound on `e_sv` follows directly from its continuity at the fixed
  state; no unlisted compact-extreme-value result is needed. The partial
  Legendre identities follow from the stated chain rule and the chart
  derivatives.
- `lem-fd-response-acoustic-algebra` — pass. The pressure-response derivative,
  pointwise first variation, wave equation, and both signs of the displayed
  modes check algebraically. The item limits its conclusion to the linearized
  mathematical system and does not claim finite-amplitude stability or
  empirical behavior.
- `lem-fd-gibbs-entropy-residual` — pass conditional on its explicitly stated
  balance hypotheses. Its statement carries the local-balance interface,
  regularity, contact, material-boundary, time, and `ACω`
  conditions. The time translation handles a general open interval, the
  pressure-work terms cancel with the stated stress split, and the product
  rule gives the displayed entropy residual. Its Helmholtz-chart clause is
  read in the preceding positive-temperature field regime.
- `lem-fd-newtonian-admissibility` — pass. The trace-free decomposition and
  symmetric-part contraction give the exact quadratic form. Independent test
  strains and gradients prove each necessary coefficient condition; the
  sufficiency direction is termwise. The interpretation as an entropy
  residual remains conditional and does not derive a constitutive law.
- `ex-fdmath-negative-bulk-residual` — pass. The selected rate matrix,
  conductivity matrix, and temperature gradient give `D_0 = 0`, positive
  semidefinite `sym K`, and `Q = ζ θ²/T < 0` under the stated assumptions.

The proof-contract derivations and cited source sections match the current
carriers. All seven assigned items are mathematical-domain items, all statement
links are in the required following references sections, and no assigned item
contains a TikZ/tikzcd diagram. The batch-8 Cauchy-contact supplier has a
tetrahedral TikZ schematic; its labeled vertices/faces and outward normal are
consistent with the proof, which establishes the projected-area relation
independently of the drawing.

## Uneditable finding

The published imported item `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`
has a definition/interface defect. Its Statement and Facts & Assumptions use
`ACω`, but the item does not define the principle or cite `def-countable-choice`,
and its `deps` omit that definition. The imported item is pinned in
`research/math-imports.json` and is outside this batch's write scope. The
assigned consumer `lem-fd-gibbs-entropy-residual` reaches it through
`lem-fd-local-balance-equivalence`. The consumer itself defines `ACω` and lists
`def-countable-choice`, so this does not invalidate its conditional use; the
published supplier should bind and state the exact assumption.

## Page verdicts

- `fd-mf03` — pass. The draft mathematics page has the six manifest items in
  the same order, matching `library`, `requires`, and `page_layout` metadata.
  Its Markdown body is empty.
- `fd-mf03-examples` — pass. The draft examples companion has no theorem-item
  placements, lists the assigned example exactly once, matches the manifest
  relation and metadata, and has an empty body.

The two prerequisite pages were opened as context. The current draft `fd-mf02`
frontmatter contains the batch-8 local-balance suppliers; the published
`td-math-nonsmooth-equilibrium` page remains outside this batch and was not
edited.

## Edits and blocker

No assigned source was edited; no in-flight defect required a local repair.
Accordingly, no item proof contract or judge record was changed, and no
post-edit reflow, precheck, or proof-layout command was applicable. There is no
operational blocker. The published supplier finding remains for owner
disposition.

## Coverage limitation

All seven assigned item carriers and both assigned page carriers were read, as
were the statements/proofs needed through the current batch-8 balance, transport,
and contact chain. The imported divergence theorem's own exact statement/proof
carrier and import pin were checked, but its entire transitive proof-dependency
closure was not independently re-audited. The cited textbooks were inspected at
the relevant sections/locators, not read cover to cover. No claim is made that
unopened material outside these closures was reviewed.
