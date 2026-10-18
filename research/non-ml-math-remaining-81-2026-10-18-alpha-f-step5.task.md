# Step 5 adjudication — group **f**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 37, 39, 76: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/non-ml-math-remaining-81-2026-10-18-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/non-ml-math-remaining-81-2026-10-18-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/non-ml-math-remaining-81-2026-10-18-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 37 | `spin-geometry-dirac-and-index-theory` | A | differential-geometry | 2888 | `pin-spin-and-clifford-module-representations`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `compact-laplace-type-operators-and-hodge-representatives`, `chern-weil-theory-and-characteristic-forms`, `thom-spectra-and-unoriented-bordism-detection` |
| 37 | `spin-geometry-dirac-and-index-theory-examples` | B | differential-geometry | 2889 | `spin-geometry-dirac-and-index-theory`, `characteristic-numbers-and-cobordism-obstructions`, `pontryagin-duality-for-locally-compact-abelian-groups` |
| 39 | `regular-weyl-representations-and-stone-von-neumann` | A | representation-theory | 2892 | `heisenberg-and-algebraic-weyl-algebras`, `unitary-representations-positive-type-and-gns`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `primitive-dirichlet-l-functions-and-functional-equations`, `mackeys-imprimitivity-theorem` |
| 39 | `regular-weyl-representations-and-stone-von-neumann-examples` | B | representation-theory | 2893 | `regular-weyl-representations-and-stone-von-neumann` |
| 76 | `unitary-poincare-representations-and-little-groups` | A | representation-theory | 2966 | `gauge-groups-and-representation-theory-interfaces`, `mackeys-imprimitivity-theorem`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 76 | `unitary-poincare-representations-and-little-groups-examples` | B | representation-theory | 2967 | `unitary-poincare-representations-and-little-groups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `spin-geometry-dirac-and-index-theory` — Clifford Bundles, Dirac Operators, and Index Interfaces (18 item(s))

- `def-ahat-and-relative-chern-character-forms` · definition — The A-hat form and relative Chern character
- `lem-good-cover-nerve-computes-singular-cohomology` · lemma — A geodesically convex cover has the homotopy type of its nerve
- `def-graded-hermitian-clifford-module-and-geometric-dirac` · definition — Graded Hermitian Clifford modules and geometric Dirac operators
- `lem-geometric-dirac-operator-is-well-defined` · lemma — The geometric Dirac operator is globally well defined and formally symmetric
- `lem-lichnerowicz-formula-for-geometric-dirac-operators` · lemma — Lichnerowicz formula for a geometric Dirac operator
- `lem-dirac-maximal-domain-is-h1` · lemma — The maximal distributional domain of a geometric Dirac operator is H1
- `lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel` · lemma — A chiral geometric Dirac operator is Fredholm
- `lem-dirac-heat-trace-and-mckeen-singer-index` · lemma — The Dirac heat trace is smooth and its supertrace equals the index
- `lem-dirac-heat-parametrix-has-graph-norm-remainder` · lemma — The geometric Dirac heat parametrix has a graph-norm remainder
- `def-spin-lift-of-oriented-orthonormal-frame-bundle` · definition — Spin lifts of oriented orthonormal frame bundles
- `def-even-dimensional-spinor-bundle-chirality-and-spin-connection` · definition — Even-dimensional spinor bundles, chirality, and the spin connection
- `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor` · lemma — Spin structures exist exactly when w2 vanishes and then form an H1 torsor
- `lem-spinor-and-clifford-associated-bundles-are-well-defined` · lemma — Spinor and geometric Clifford bundles and connections are well defined
- `lem-getzler-radial-gauge-oscillator-leading-term` · lemma — Radial gauge yields the Getzler oscillator as the leading operator
- `prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero` · proposition — Positive scalar curvature annihilates untwisted spinor harmonic sections
- `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character` · lemma — The Mehler coefficient has A-hat times the relative Chern character
- `thm-geometric-clifford-module-dirac-index-formula` · theorem — Atiyah–Singer index formula for a closed even-dimensional geometric Clifford module
- `cor-spin-dirac-index-formula-with-arbitrary-twist` · corollary — The twisted Spin Dirac index is the integral of A-hat times ch(E)

### `spin-geometry-dirac-and-index-theory-examples` — Clifford Bundles, Dirac Operators, and Index Interfaces: Examples and Counterexamples (5 item(s))

- `cex-dirac-on-euclidean-space-is-not-fredholm` · counterexample — The Euclidean Dirac operator has nonclosed range at zero
- `ex-complex-projective-plane-has-nonspin-tangent-bundle` · example — The complex projective plane has nonzero w2 and no Spin structure
- `ex-flat-even-torus-spin-dirac-has-index-zero` · example — Fourier modes give index zero for the periodic flat even torus
- `ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel` · example — The round two-sphere has zero untwisted Spin Dirac kernel
- `ex-twisted-sphere-dirac-index-and-curvature-term` · example — A line twist on the two-sphere has nonzero index and curvature term

### `regular-weyl-representations-and-stone-von-neumann` — Exponentiated Weyl Relations and Regular Representations (9 item(s))

- `def-heisenberg-group-of-a-symplectic-vector-space` · definition — The Heisenberg group of a finite-dimensional symplectic vector space
- `def-incomplete-tensor-product-with-reference-vector` · definition — Incomplete tensor product of one-mode Hilbert spaces with a reference vector
- `def-universal-weyl-c-star-algebra` · definition — The universal Weyl C*-algebra
- `def-regular-weyl-system-on-a-symplectic-vector-space` · definition — Regular Weyl systems and irreducibility
- `lem-heisenberg-group-lagrangian-splitting-and-dual-orbit` · lemma — Heisenberg group polarization and the fixed-central-character orbit
- `lem-universal-weyl-c-star-algebra-is-well-defined` · lemma — The universal Weyl norm is finite and has the C*-completion property
- `lem-schrodinger-weyl-system-is-regular-and-irreducible` · lemma — The Schrödinger Weyl system is regular and irreducible
- `lem-one-mode-gaussian-weyl-average-is-rank-one` · lemma — The Gaussian Weyl average is a rank-one projection
- `thm-stone-von-neumann-for-finite-dimensional-weyl-systems` · theorem — Stone–von Neumann uniqueness for finite-dimensional regular Weyl systems

### `regular-weyl-representations-and-stone-von-neumann-examples` — Regular Weyl Representations and Uniqueness: Examples and Counterexamples (4 item(s))

- `cex-universal-weyl-c-star-algebra-has-nonregular-representations` · counterexample — The universal Weyl C*-algebra has nonregular representations
- `ex-zero-central-character-has-many-regular-characters` · example — At zero central parameter, distinct regular characters are inequivalent
- `ex-one-mode-schrodinger-weyl-relations` · example — The one-mode Schrödinger formulas and their phase
- `cex-infinite-mode-regular-weyl-representations-are-inequivalent` · counterexample — Infinitely many modes admit inequivalent irreducible regular Weyl representations

### `unitary-poincare-representations-and-little-groups` — Unitary Poincaré Representations and Little Groups (7 item(s))

- `def-connected-poincare-cover-and-positive-energy` · definition — Connected Poincaré covers and positive translation energy
- `lem-mackey-induction-classification-for-regular-euclidean-duals` · lemma — Mackey induction classifies regular Euclidean dual actions
- `lem-lorentz-stabilizers-and-connected-cover-preimages` · lemma — Global Lorentz stabilizers and their connected-cover preimages
- `lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces` · lemma — Lorentz momentum orbits are regular homogeneous Borel spaces
- `lem-null-little-group-unitary-duals-for-all-dimensions` · lemma — Null little-group unitary duals, including low dimensions
- `lem-central-kernel-descent-for-poincare-inductions` · lemma — Central kernel characters control descent of Poincaré inductions
- `thm-positive-energy-wigner-mackey-classification-for-connected-covers` · theorem — Positive-energy Wigner–Mackey classification for connected covers

### `unitary-poincare-representations-and-little-groups-examples` — Unitary Poincaré Representations and Little Groups: Examples (7 item(s))

- `ex-d4-massive-spin-and-so3-descent` · example — D=4 massive spin one-half and spin one descent
- `ex-d4-helicity-and-continuous-spin-central-parities` · example — D=4 helicity and both continuous-spin central parities
- `ex-d4-nonzero-null-translations-are-continuous-spin` · example — A D=4 continuous-spin little representation has nonzero translations
- `ex-d3-irrational-massive-spin-fails-finite-cover-descent` · example — An irrational D=3 massive spin descends to no finite cover
- `ex-d3-null-signs-and-central-phases` · example — D=3 null translations have two signs and independent central phases
- `ex-d2-future-null-rays-are-inequivalent` · example — The two D=2 future null rays give inequivalent representations
- `ex-d2-zero-orbit-has-nontrivial-lorentz-character` · example — A nontrivial D=2 Lorentz character lies over zero momentum

## Your seams

Your pages depend on another group's:

- `spin-geometry-dirac-and-index-theory` requires `pin-spin-and-clifford-module-representations` (group v, batch 36)
- `regular-weyl-representations-and-stone-von-neumann` requires `heisenberg-and-algebraic-weyl-algebras` (group a, batch 38)
- `unitary-poincare-representations-and-little-groups` requires `gauge-groups-and-representation-theory-interfaces` (group b, batch 75)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
