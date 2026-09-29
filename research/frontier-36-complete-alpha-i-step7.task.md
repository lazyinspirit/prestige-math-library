# Step 7 adjudication — group **i**, run `frontier-36-complete`

You are the group Alpha for batches **17**, **18**, **25**: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 17 | `specht-modules-and-the-irreducibles-of-the-symmetric-group` | A | representation-theory | 510.047 | `young-diagrams-tableaux-and-permutation-modules`, `maschkes-theorem-and-complete-reducibility`, `characters-and-the-orthogonality-relations`, `hilbert-space-geometry-and-riesz-representation`, `permutation-statistics-inversions-and-eulerian-numbers` |
| 17 | `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples` | B | representation-theory | 510.048 | `specht-modules-and-the-irreducibles-of-the-symmetric-group` |
| 18 | `unitary-representations-positive-type-and-gns` | A | representation-theory | 510.069 | `the-modular-function-and-l1-group-algebras`, `spectral-measures-and-borel-functional-calculus`, `uniform-spaces` |
| 18 | `unitary-representations-positive-type-and-gns-examples` | B | representation-theory | 510.07 | `unitary-representations-positive-type-and-gns` |
| 25 | `symmetric-functions-hall-inner-product-and-schur-bases` | A | representation-theory | 799 | `symmetric-polynomials`, `young-diagrams-tableaux-and-permutation-modules` |
| 25 | `symmetric-functions-hall-inner-product-and-schur-bases-examples` | B | representation-theory | 800 | `symmetric-functions-hall-inner-product-and-schur-bases` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `specht-modules-and-the-irreducibles-of-the-symmetric-group` — Specht Modules and the Irreducibles of the Symmetric Group (17 item(s))

- `def-column-antisymmetrizer-polytabloid-and-specht-module` · definition — Column antisymmetrizers, polytabloids, and Specht modules
- `lem-polytabloid-covariance-and-column-sign` · lemma — Polytabloid covariance and the column sign rule
- `def-invariant-inner-product-on-a-tabloid-module` · definition — Invariant Hermitian product on a tabloid module
- `lem-column-collision-causes-antisymmetrizer-cancellation` · lemma — Column collision cancels antisymmetrization
- `lem-column-antisymmetrizer-detects-dominance` · lemma — Nonzero antisymmetrizer image detects dominance
- `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional` · lemma — The antisymmetrizer image in its own tabloid module is one-dimensional
- `thm-james-submodule-theorem-in-characteristic-zero` · theorem — James's submodule theorem over the complex numbers
- `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero` · lemma — Complex Specht modules have nondegenerate Hermitian self-pairing
- `thm-complex-specht-modules-are-irreducible` · theorem — Complex Specht modules are irreducible
- `thm-specht-to-permutation-homomorphism-dominance` · theorem — Homomorphisms from Specht to Young permutation modules obey dominance
- `cor-distinct-specht-modules-are-inequivalent` · corollary — Distinct complex Specht modules are inequivalent
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` · theorem — Specht modules classify the complex irreducibles of S_n
- `def-tabloid-and-column-orders-for-specht-straightening` · definition — Tabloid and column orders for Specht straightening
- `lem-leading-tabloid-coefficient-of-a-standard-polytabloid` · lemma — Leading tabloid of a column-standard polytabloid
- `lem-adjacent-column-garnir-relation` · lemma — Adjacent-column Garnir relation over C
- `lem-garnir-straightening-of-polytabloids` · lemma — Garnir straightening spans the complex Specht module
- `thm-standard-polytabloid-basis` · theorem — Standard polytabloids form a basis of a complex Specht module

### `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples` — Specht Modules and the Irreducibles of the Symmetric Group — Examples (4 item(s))

- `ex-polytabloids-for-shape-two-one` · example — Polytabloids of shape (2,1)
- `ex-trivial-and-sign-specht-modules` · example — The row and column Specht modules
- `ex-specht-modules-of-s3` · example — All three Specht modules of S_3
- `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis` · counterexample — A reducible Specht module in characteristic two

### `unitary-representations-positive-type-and-gns` — Unitary Representations Positive Type and Gns (17 item(s))

- `def-strongly-continuous-unitary-representation` · definition — Strongly continuous unitary representation, invariance and intertwiners
- `lem-continuity-criteria-for-unitary-representations` · lemma — Continuity criteria for unitary representations
- `def-cyclic-vector-and-cyclic-unitary-representation` · definition — Cyclic vector and cyclic unitary representation
- `thm-schurs-lemma-for-unitary-representations` · theorem — Schur lemma for complex unitary representations
- `def-matrix-coefficient-of-a-unitary-representation` · definition — Matrix coefficient of a unitary representation
- `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous` · lemma — Bounds and two-sided uniform continuity of unitary coefficients
- `def-continuous-function-of-positive-type` · definition — Continuous positive-type function and normalized positive-type cone
- `lem-diagonal-unitary-coefficients-have-positive-type` · lemma — Diagonal unitary coefficients have positive type
- `lem-positive-type-functions-define-a-pre-hilbert-form` · lemma — Positive-type functions define the GNS pre-Hilbert form
- `lem-the-gns-null-space-is-translation-invariant` · lemma — The GNS null space is invariant under left translation
- `lem-the-gns-translation-action-is-unitary-and-strongly-continuous` · lemma — The GNS translation action is unitary and strongly continuous
- `thm-gns-construction-for-topological-groups` · theorem — GNS construction for a continuous positive-type function
- `thm-uniqueness-of-the-cyclic-gns-representation` · theorem — Uniqueness of the pointed cyclic GNS representation
- `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations` · corollary — Normalized positive type and pointed cyclic unitary representations
- `lem-dominated-positive-type-functions-give-positive-commutant-contractions` · lemma — Dominated positive type and positive commutant contractions
- `lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function` · lemma — Nonscalar commutant contractions and convex decompositions
- `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations` · theorem — Extreme normalized positive type is equivalent to irreducible GNS

### `unitary-representations-positive-type-and-gns-examples` — Unitary Representations Positive Type and Gns — Examples (4 item(s))

- `ex-positive-type-functions-on-a-discrete-group` · example — Positive type on a discrete group: the identity mass, characters, and the regular GNS model
- `ex-gns-representation-of-a-one-dimensional-character` · example — GNS representation of a continuous unitary character
- `ex-positive-type-gaussian-on-the-real-line` · example — The positive-type Gaussian on the real line and its cyclic model
- `cex-a-bounded-continuous-function-need-not-have-positive-type` · counterexample — A bounded continuous normalized function that is not of positive type

### `symmetric-functions-hall-inner-product-and-schur-bases` — Symmetric Functions, the Hall Inner Product, and Schur Bases (16 item(s))

- `def-stable-graded-ring-of-symmetric-functions` · definition — The stable graded ring of symmetric functions
- `def-skew-diagram-and-semistandard-skew-tableau` · definition — Skew diagrams and semistandard skew tableaux
- `thm-monomial-symmetric-functions-form-the-integral-stable-basis` · theorem — The monomial symmetric functions form the integral stable basis
- `def-stable-schur-function-by-bialternants` · definition — Stable Schur functions from bialternants
- `def-bidegree-completed-symmetric-function-tensor-product` · definition — Bidegree completion of two symmetric-function rings
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring` · theorem — Elementary and complete families freely generate the stable ring
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities` · theorem — Jacobi–Trudi and dual Jacobi–Trudi identities
- `prop-power-sums-form-a-rational-not-integral-stable-basis` · proposition — Power sums form a rational but not integral stable basis
- `def-hall-inner-product-on-symmetric-functions` · definition — The Hall inner product on symmetric functions
- `prop-omega-conjugates-schur-functions` · proposition — The omega involution conjugates Schur functions
- `thm-cauchy-kernel-has-power-complete-and-schur-expansions` · theorem — Power-sum, complete, and Schur expansions of the Cauchy kernel
- `cor-power-sums-are-orthogonal-for-the-hall-inner-product` · corollary — Power sums are orthogonal for the Hall form
- `thm-schur-functions-form-an-orthonormal-integral-basis` · theorem — Schur functions form an orthonormal integral basis
- `def-skew-schur-function-by-hall-adjointness` · definition — Skew Schur functions by Hall adjointness
- `thm-skew-jacobi-trudi-and-tableau-expansion` · theorem — Skew Jacobi–Trudi and tableau expansion
- `lem-kostka-change-of-basis-is-dominance-unitriangular` · lemma — The Kostka change of basis is dominance-unitriangular

### `symmetric-functions-hall-inner-product-and-schur-bases-examples` — Symmetric Functions, the Hall Inner Product, and Schur Bases — Examples (5 item(s))

- `cex-power-sums-do-not-form-an-integral-basis` · counterexample — Power sums fail to span integrally in degree two
- `ex-degree-three-stable-symmetric-function-bases` · example — The five standard symmetric-function bases in degree three
- `ex-cauchy-kernel-through-total-degree-three` · example — Cauchy kernel through bidegree three
- `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables` · counterexample — A nonzero stable Schur function can vanish in too few variables
- `ex-a-disconnected-skew-schur-function-factors` · example — A disconnected skew Schur function factors

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-36-complete`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.
