# Step 7 adjudication — group **f**, run `frontier-39-analysis-30`

You are the group Alpha for batches **10**, **21**, **22**: 3 A/B pair(s), 6 page(s), 91 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-39-analysis-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `lax-milgram-and-weak-elliptic-solutions` | A | pde | 458.029 | `rellich-kondrachov-and-sobolev-compactness`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 10 | `lax-milgram-and-weak-elliptic-solutions-examples` | B | pde | 458.03 | `lax-milgram-and-weak-elliptic-solutions` |
| 21 | `weyl-character-and-multiplicity-formulas` | A | lie-theory | 510.013 | `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `the-bgg-resolution`, `projectives-standard-filtrations-and-bgg-reciprocity` |
| 21 | `weyl-character-and-multiplicity-formulas-examples` | B | lie-theory | 510.014 | `weyl-character-and-multiplicity-formulas` |
| 22 | `tensor-product-multiplicities-and-littlewood-richardson` | A | lie-theory | 799.1 | `weyl-character-and-multiplicity-formulas`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `symmetric-functions-hall-inner-product-and-schur-bases`, `the-branching-rule-and-the-young-graph` |
| 22 | `tensor-product-multiplicities-and-littlewood-richardson-examples` | B | lie-theory | 799.2 | `tensor-product-multiplicities-and-littlewood-richardson` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lax-milgram-and-weak-elliptic-solutions` — Lax Milgram and Weak Elliptic Solutions (28 item(s))

- `def-bounded-coercive-and-symmetric-sesquilinear-forms` · definition — Bounded, coercive and symmetric sesquilinear forms
- `lem-form-to-bounded-operator-by-hilbert-riesz` · lemma — A bounded form is represented by a unique bounded operator
- `lem-coercive-form-operator-is-bounded-below` · lemma — A coercive form operator is bounded below
- `lem-bounded-below-operator-has-closed-range` · lemma — A bounded-below operator has closed range
- `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive` · lemma — The adjoint of a coercive form is coercive with the same constants
- `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense` · lemma — Coercivity of the adjoint makes the form-operator range dense
- `lem-coercivity-makes-a-small-form-step-a-contraction` · lemma — Coercivity makes a small form step a strict contraction
- `thm-lax-milgram` · theorem — The Lax--Milgram theorem
- `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha` · corollary — The Lax--Milgram solution operator has norm at most $1/\alpha$
- `cor-symmetric-lax-milgram-is-energy-minimisation` · corollary — Symmetric Lax--Milgram is energy minimisation
- `rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle` · remark — Nonsymmetric Lax--Milgram is not a scalar minimisation principle
- `def-h-minus-one-as-the-dual-of-h-one-zero` · definition — The negative Sobolev space $H^{-1}(\Omega)$
- `lem-ltwo-and-divergence-data-embed-in-h-minus-one` · lemma — $L^2$ forcing and divergence data embed in $H^{-1}$ with a quantitative bound
- `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` · theorem — Every $H^{-1}$ functional is an $L^2$ function plus a divergence
- `def-uniformly-elliptic-divergence-form-operator` · definition — Uniformly elliptic divergence-form operators and their sesquilinear forms
- `def-weak-dirichlet-solution-for-a-divergence-form-operator` · definition — Weak Dirichlet solutions for a divergence-form operator
- `lem-elliptic-form-is-well-defined-and-bounded` · lemma — The elliptic form is well defined and bounded on $H^1$
- `lem-coercivity-of-the-principal-dirichlet-form` · lemma — Coercivity of the principal Dirichlet form
- `lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound` · lemma — Testing a coercive weak solution with itself gives the energy bound
- `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` · theorem — Existence and uniqueness for the weak Dirichlet Poisson problem
- `thm-lax-milgram-solvability-for-coercive-divergence-form-equations` · theorem — Lax--Milgram solvability for coercive divergence-form equations
- `lem-w-one-two-is-a-hilbert-space` · lemma — The Sobolev space $H^1$ is a Hilbert space
- `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` · theorem — Weak Neumann solvability on the mean-zero subspace
- `cor-positive-reaction-restores-coercivity-without-dirichlet-poincare` · corollary — A positive reaction term restores coercivity without Poincar\'e
- `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` · corollary — The inhomogeneous weak Dirichlet problem by a trace lifting
- `lem-classical-solutions-satisfy-the-weak-formulation` · lemma — Classical solutions satisfy the weak formulation
- `cor-weak-solution-depends-continuously-on-data` · corollary — Weak solutions depend continuously on the data
- `lem-sharp-dirichlet-poincare-inequality-on-an-interval` · lemma — The sharp Dirichlet Poincare inequality on an interval

### `lax-milgram-and-weak-elliptic-solutions-examples` — Lax Milgram and Weak Elliptic Solutions — Examples (11 item(s))

- `ex-weak-dirichlet-poisson-problem-on-an-interval` · example — The weak Dirichlet Poisson problem on an interval
- `ex-ltwo-forcing-defines-an-h-minus-one-functional` · example — $L^2$ forcing defines an $H^{-1}$ functional
- `ex-nonsymmetric-coercive-elliptic-form` · example — A nonsymmetric coercive elliptic form
- `cex-bounded-form-without-coercivity-need-not-be-solvable` · counterexample — A bounded form without coercivity need not be solvable
- `cex-coercive-form-need-not-be-symmetric` · counterexample — A coercive form need not be symmetric
- `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting` · counterexample — Arbitrary $L^2$ boundary data need not have an $H^1$ lifting
- `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one` · counterexample — The Neumann Poisson problem is not coercive on all of $H^1$
- `ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity` · example — Complex sesquilinear coercivity differs from bilinear positivity
- `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound` · example — A one-dimensional form attains the $1/\alpha$ Lax--Milgram bound
- `ex-neumann-kernel-dimension-equals-the-number-of-connected-components` · example — The Neumann kernel is spanned by the componentwise constants
- `cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity` · counterexample — A large adverse zero-order term destroys Dirichlet coercivity

### `weyl-character-and-multiplicity-formulas` — Weyl Character and Multiplicity Formulas (21 item(s))

- `def-completed-formal-character-ring-for-downward-cones` · definition — The completed formal character ring
- `def-formal-character-of-a-finite-dimensional-weight-module` · definition — The formal character of a finite-dimensional weight module
- `prop-formal-characters-are-additive-and-multiplicative` · proposition — Formal characters are additive and multiplicative
- `def-weyl-alternation-operator` · definition — The Weyl alternation operator
- `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` · proposition — Characters of finite-dimensional modules are Weyl-invariant
- `lem-weyl-length-parity-is-multiplicative` · lemma — The sign of the Weyl length is multiplicative
- `lem-rho-minus-w-rho-is-a-sum-of-positive-roots` · lemma — The difference of the Weyl vector from its reflections is a sum of positive roots
- `lem-weyl-alternants-are-skew-invariant` · lemma — Weyl alternants are skew-invariant
- `lem-geometric-series-invertibility-in-the-completed-character-ring` · lemma — Geometric series are invertible in the completed character ring
- `thm-weyl-denominator-identity` · theorem — The Weyl denominator identity
- `lem-bgg-euler-character-gives-the-weyl-numerator` · lemma — The BGG Euler identity gives the Weyl numerator
- `thm-weyl-character-formula` · theorem — The Weyl character formula
- `def-kostant-partition-function` · definition — The Kostant partition function
- `thm-kostant-weight-multiplicity-formula` · theorem — Kostant's weight multiplicity formula
- `lem-casimir-comparison-on-a-weight-vector` · lemma — The Casimir comparison on a weight space
- `lem-positive-root-strings-sum-the-freudenthal-correction` · lemma — Positive root strings sum the Freudenthal correction
- `thm-freudenthal-weight-multiplicity-recursion` · theorem — Freudenthal's weight multiplicity recursion
- `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` · lemma — The shifted norm of a weight is maximal only at the top weight
- `cor-freudenthal-recursion-terminates-from-the-highest-weight` · corollary — Freudenthal recursion terminates from the highest weight
- `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one` · lemma — Regularized evaluation of the Weyl character quotient at one
- `thm-weyl-dimension-formula` · theorem — The Weyl dimension formula

### `weyl-character-and-multiplicity-formulas-examples` — Weyl Character and Multiplicity Formulas — Examples (6 item(s))

- `ex-weyl-character-and-dimension-formulas-for-sl2` · example — Weyl character and dimension formulas for sl2
- `ex-a2-weyl-denominator-expansion` · example — The A2 Weyl denominator expansion
- `ex-kostant-multiplicity-in-the-sl3-adjoint-module` · example — Kostant multiplicity in the sl3 adjoint module
- `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` · example — Freudenthal recursion for the sl3 adjoint zero weight
- `cex-omitting-the-rho-shift-breaks-kostants-formula` · counterexample — Omitting the rho shift breaks Kostant's formula
- `ex-weyl-dimension-formula-for-a-fundamental-sl3-module` · example — The Weyl dimension formula for a fundamental sl3 module

### `tensor-product-multiplicities-and-littlewood-richardson` — Tensor Product Multiplicities and Littlewood Richardson (19 item(s))

- `def-tensor-product-multiplicity-for-highest-weight-modules` · definition — Tensor-product multiplicities for finite-dimensional simple modules
- `prop-tensor-product-multiplicities-are-character-structure-constants` · proposition — Tensor-product multiplicities are character structure constants
- `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` · lemma — Weyl alternation extracts a dominant highest-weight coefficient
- `thm-steinberg-tensor-product-multiplicity-formula` · theorem — Steinberg's tensor-product multiplicity formula
- `cor-racah-speiser-tensor-product-algorithm` · corollary — The Racah--Speiser tensor-product algorithm
- `def-minuscule-weight` · definition — Minuscule weights
- `lem-minuscule-weights-are-the-weyl-orbit` · lemma — Minuscule weights have exactly the Weyl orbit as their weights
- `cor-minuscule-tensor-product-rule` · corollary — Tensor product with a minuscule representation
- `def-polynomial-glr-highest-weights-as-partitions` · definition — Polynomial representations of GL_r and their highest weights
- `def-schur-module-and-schur-polynomial-character` · definition — Schur modules and their characters
- `prop-semistandard-tableaux-expand-schur-characters` · proposition — Semistandard tableaux expand Schur characters
- `def-littlewood-richardson-tableau-and-coefficient` · definition — Littlewood--Richardson tableaux and coefficients
- `lem-bender-knuth-involutions-on-semistandard-tableaux` · lemma — Bender--Knuth involutions permute the weights of semistandard tableaux
- `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` · lemma — The admissible-tableau count equals the Littlewood--Richardson coefficient
- `thm-littlewood-richardson-tensor-product-rule` · theorem — The Littlewood--Richardson tensor-product rule
- `cor-horizontal-pieri-rule` · corollary — The horizontal Pieri rule
- `cor-vertical-pieri-rule` · corollary — The vertical Pieri rule
- `prop-determinant-twists-translate-glr-highest-weights` · proposition — Determinant twists translate GL_r highest weights
- `prop-littlewood-richardson-coefficients-stabilize-with-rank` · proposition — Littlewood--Richardson coefficients stabilise with rank

### `tensor-product-multiplicities-and-littlewood-richardson-examples` — Tensor Product Multiplicities and Littlewood Richardson — Examples (6 item(s))

- `ex-clebsch-gordan-decomposition-for-sl2` · example — The Clebsch--Gordan tensor decomposition for sl2
- `ex-three-tensor-three-for-sl3` · example — Three times three for sl3
- `ex-littlewood-richardson-product-s21-times-s1` · example — The product s(2,1)s(1) by Pieri
- `ex-a-littlewood-richardson-coefficient-greater-than-one` · example — A Littlewood--Richardson coefficient greater than one
- `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` · counterexample — A semistandard tableau with non-lattice reading word is not a Littlewood--Richardson tableau
- `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` · counterexample — A partition with too many rows vanishes at fixed rank

## Your seams

Your pages depend on another group's:

- `lax-milgram-and-weak-elliptic-solutions` requires `rellich-kondrachov-and-sobolev-compactness` (group c, batch 9)

Another group's pages depend on yours:

- `fredholm-elliptic-problems-and-the-elliptic-spectrum` (group a) requires your `lax-milgram-and-weak-elliptic-solutions`
- `schauder-and-lp-elliptic-estimates` (group h) requires your `lax-milgram-and-weak-elliptic-solutions`
- `borel-weil-and-borel-weil-bott` (group h) requires your `weyl-character-and-multiplicity-formulas`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-39-analysis-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-39-analysis-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
