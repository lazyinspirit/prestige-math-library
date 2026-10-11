# Step 5 adjudication — group **f**, run `frontier-44-special-representation-examples-28-six-step`

You are the group Alpha for batches 4, 5, 29: 3 A/B pair(s), 6 page(s), 67 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/frontier-44-special-representation-examples-28-six-step-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/frontier-44-special-representation-examples-28-six-step-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/frontier-44-special-representation-examples-28-six-step-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/frontier-44-special-representation-examples-28-six-step-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `ordinals-and-transfinite-recursion` | A | foundations | 348 | `linear-independence-bases-and-dimension` |
| 4 | `ordinals-and-transfinite-recursion-examples` | B | foundations | 349 | `ordinals-and-transfinite-recursion` |
| 5 | `divided-powers-integral-forms-and-quantum-highest-weights` | A | special-topics-in-representation-theory | 1526 | `quantized-enveloping-algebras-and-quantum-serre-relations`, `integrable-highest-weight-kac-moody-modules` |
| 5 | `divided-powers-integral-forms-and-quantum-highest-weights-examples` | B | special-topics-in-representation-theory | 1527 | `divided-powers-integral-forms-and-quantum-highest-weights` |
| 29 | `lefschetz-splitting-in-bounded-triangulated-categories` | A | homological-algebra | 1799 | `abelian-categories`, `derived-categories`, `triangularisation-and-jordan-canonical-form`, `triangulated-categories` |
| 29 | `lefschetz-splitting-in-bounded-triangulated-categories-examples` | B | homological-algebra | 1806 | `lefschetz-splitting-in-bounded-triangulated-categories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ordinals-and-transfinite-recursion` — Ordinals, Cardinals, and Transfinite Recursion (22 item(s))

- `def-well-order` · definition — Well-order and well-ordered set
- `def-order-isomorphism` · definition — Order embedding and order isomorphism
- `def-initial-segment` · definition — Initial segment of a well-order
- `thm-transfinite-induction` · theorem — Transfinite induction
- `thm-transfinite-recursion` · theorem — Transfinite recursion
- `lem-well-order-rigid` · lemma — Rigidity of well-orders
- `lem-well-order-comparability` · lemma — Comparability of well-orders
- `def-ordinal` · definition — Ordinal (von Neumann)
- `lem-ordinal-basics` · lemma — Basic closure properties of ordinals
- `lem-ordinal-trichotomy` · lemma — Trichotomy and well-ordering of the ordinals
- `thm-burali-forti` · theorem — Burali-Forti: there is no set of all ordinals
- `thm-mostowski-collapse` · theorem — Every well-order has a unique order type
- `def-limit-ordinal` · definition — Successor and limit ordinals
- `lem-omega-least-limit-ordinal` · lemma — $\omega$ is the least limit ordinal
- `thm-hartogs` · theorem — Hartogs: an ordinal that does not inject into a given set
- `thm-well-ordering-theorem` · theorem — The well-ordering theorem
- `thm-well-ordering-implies-ac` · theorem — The well-ordering theorem implies the Axiom of Choice
- `cor-ac-iff-well-ordering` · corollary — Choice, Zorn and well-ordering are equivalent
- `def-cardinal` · definition — Cardinal (initial ordinal) and cardinality
- `fs-ordinals-form-a-set` · false-statement — FALSE: the ordinals form a set
- `fs-transfinite-induction-needs-choice` · false-statement — FALSE: transfinite induction and recursion need the Axiom of Choice
- `rem-choice-ledger` · remark — The proved choice ledger: hypotheses, equivalences, and upper bounds

### `ordinals-and-transfinite-recursion-examples` — Ordinals, Cardinals, and Transfinite Recursion: Examples and Counterexamples (12 item(s))

- `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega` · example — The finite von Neumann ordinals, and $\omega$ as the least limit ordinal
- `cex-a-set-of-ordinals-that-is-not-transitive` · counterexample — A set of ordinals that is not an ordinal: $\{0,1,\omega\}$
- `ex-lexicographic-orders-on-products-of-naturals` · example — Lexicographic orders: $\{0,1\}\times\mathbb{N}$ and $\mathbb{N}\times\mathbb{N}$
- `ex-the-one-point-extension-of-a-well-order` · example — The one-point extension of a well-order, and $\omega$ with a new top element
- `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order` · counterexample — The lexicographic order on $\mathbb{Z}\times\mathbb{Z}$ is not a well-order
- `ex-an-explicit-well-ordering-of-the-integers` · example — An explicit well-ordering of the integers: $0\prec1\prec-1\prec2\prec-2\prec\cdots$
- `cex-the-shift-is-a-nonidentity-order-automorphism` · counterexample — The shift $x\mapsto x+1$ is a nonidentity order automorphism of $(\mathbb{Z},<)$
- `ex-the-mostowski-collapse-of-a-finite-chain` · example — The Mostowski collapse of a finite chain computes its order type
- `cex-the-collapsing-recursion-has-no-solution-on-the-integers` · counterexample — The collapsing recursion has no solution on $(\mathbb{Z},<)$
- `ex-the-hartogs-number-of-a-finite-set` · example — The Hartogs number of an $n$-element set is $n^{+}$
- `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal` · example — The Hartogs number of $\omega$ is a limit ordinal above $\omega$
- `cex-transfinite-induction-fails-when-the-minimum-is-exempted` · counterexample — Transfinite induction fails if the least element is exempted from the hypothesis

### `divided-powers-integral-forms-and-quantum-highest-weights` — Divided Powers, Integral Forms, and Quantum Highest Weights (22 item(s))

- `def-kashiwara-skew-derivations-on-the-negative-quantum-half` · definition — Kashiwara's skew derivations $e_i'$ and $e_i''$ on the negative half
- `def-lusztig-divided-power-integral-form` · definition — The Lusztig divided-power integral form $U_A$
- `def-quantum-weight-module-and-integrability` · definition — Quantum weight modules, weights in $P$, and integrability
- `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` · definition — The contravariant form on an integrable highest weight module
- `def-quantum-verma-module-and-simple-highest-weight-quotient` · definition — Quantum Verma modules $M(\lambda)$, highest weight vectors, and the simple highest weight quotient $L(\lambda)$
- `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` · definition — The Lusztig-Kashiwara bilinear form on the negative half: the recursion
- `lem-divided-power-and-toral-quantum-binomial-reordering-identities` · lemma — Divided-power multiplication, toral binomials and the $E_i^{(a)}F_i^{(b)}$ reordering identity
- `lem-divided-power-half-has-integral-skew-string-coefficients` · lemma — Integral skew-string coefficients on the divided-power negative half
- `lem-finite-support-regularization-of-quantum-label-weight-modules` · lemma — Finite-support regularization of quantum label-weight modules
- `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` · lemma — The bar involution and the contravariant anti-involution preserve $U_A$
- `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` · lemma — Cartan projection constructs the Verma contravariant form and identifies its radical
- `lem-quantum-highest-weight-serre-quotient-is-integrable` · lemma — The dominant quantum Serre quotient is nonzero and integrable
- `lem-the-negative-half-is-separated-by-iterated-skew-derivations` · lemma — Separation of the negative half by iterated skew derivations
- `lem-unmodified-integral-torus-has-a-quantum-binomial-basis` · lemma — The unmodified integral torus has a quantum-binomial basis
- `lem-local-q-one-deformation-proves-integrable-highest-weight-universality` · lemma — Local q=1 deformation proves integrable highest weight universality
- `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` · lemma — Rational-local quantum halves and torus specialize at q=1
- `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` · theorem — The negative-half bilinear form is symmetric, nondegenerate and integral
- `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` · lemma — The q=1 toral specialization identifies the classical Cartan generators
- `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` · theorem — The integrable quantum highest weight module exists and is unique
- `prop-integrable-quantum-highest-weight-modules-are-semisimple` · proposition — Integrable bounded-above quantum modules with finite-dimensional weight spaces are direct sums of simple highest weight modules
- `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` · proposition — Specialization at q=1 recovers the classical enveloping relations
- `lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties` · lemma — The type-A Kazhdan–Lusztig basis has elementary triangular bar properties

### `divided-powers-integral-forms-and-quantum-highest-weights-examples` — Divided Powers, Integral Forms, and Quantum Highest Weights — Examples (4 item(s))

- `ex-divided-powers-and-lusztig-form-in-quantized-sl-two` · example — Divided powers and the Lusztig form in quantized sl2
- `ex-quantum-verma-and-simple-modules-for-sl-two` · example — Quantum Verma and simple modules for sl2
- `ex-specializing-a-quantum-highest-weight-lattice-at-q-one` · example — Specializing a quantum highest weight lattice at q=1
- `cex-direct-q-one-substitution-in-quantum-denominators` · counterexample — Direct q=1 substitution in quantum denominators

### `lefschetz-splitting-in-bounded-triangulated-categories` — Lefschetz Splitting In Bounded Triangulated Categories (6 item(s))

- `def-truncation-functors-and-cohomology-of-a-t-structure` · definition — Truncation functors, t-cohomology, amplitude and bounded t-structures
- `lem-truncation-triangles-are-essentially-unique-and-functorial` · lemma — Truncation triangles are essentially unique and give adjoint truncation functors
- `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude` · lemma — t-cohomology is functorial, additive, shift-compatible and detects amplitude
- `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` · lemma — Hard Lefschetz splits a bounded t-structure complex
- `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition` · lemma — Graded hard Lefschetz has a canonical primitive decomposition
- `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual` · lemma — The nilpotent Lefschetz filtration is canonical and self-dual

### `lefschetz-splitting-in-bounded-triangulated-categories-examples` — Lefschetz Splitting In Bounded Triangulated Categories Examples (1 item(s))

- `ex-hard-lefschetz-splitting-for-a-three-degree-complex` · example — Hard Lefschetz splitting for a three-degree complex

## Your seams

Another group's pages depend on yours:

- `geometric-fixed-parts-and-gauss-manin-semisimplicity` (group b) requires your `lefschetz-splitting-in-bounded-triangulated-categories`
- `projective-perverse-hard-lefschetz-and-decomposition` (group d) requires your `lefschetz-splitting-in-bounded-triangulated-categories`
- `kashiwara-operators-and-crystal-lattices` (group i) requires your `divided-powers-integral-forms-and-quantum-highest-weights`
- `balanced-triples-and-global-crystal-bases` (group i) requires your `divided-powers-integral-forms-and-quantum-highest-weights`
- `klr-algebras-induction-and-quantum-serre-categorification` (group p) requires your `divided-powers-integral-forms-and-quantum-highest-weights`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-44-special-representation-examples-28-six-step-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `frontier-44-special-representation-examples-28-six-step`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
