# Step 5 adjudication — group **z**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 2, 31, 63: 3 A/B pair(s), 6 page(s), 95 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/non-ml-math-remaining-81-2026-10-18-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/non-ml-math-remaining-81-2026-10-18-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **63**: `research/non-ml-math-remaining-81-2026-10-18-batch-63-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 2 | `monotone-functions-and-discontinuities` | A | real-analysis | 232 | `continuity-ivt-evt-and-uniform-continuity`, `cantor-set-baire-and-measure-zero`, `vector-spaces-and-subspaces`, `linear-independence-bases-and-dimension` |
| 2 | `monotone-functions-and-discontinuities-examples` | B | real-analysis | 233 | `monotone-functions-and-discontinuities`, `absolute-convergence-and-rearrangement` |
| 31 | `topological-quantum-algorithms-and-braid-compilation` | A | quantum-algorithms | 2554 | `topological-braid-gates-encodings-and-universality`, `toric-code-anyons-logical-operators-and-protection`, `adiabatic-computation-and-circuit-equivalence`, `computational-problems-promises-and-cost-models`, `lcu-oblivious-amplitude-amplification-and-taylor-simulation` |
| 31 | `topological-quantum-algorithms-and-braid-compilation-examples` | B | quantum-algorithms | 2555 | `topological-quantum-algorithms-and-braid-compilation` |
| 63 | `temperley-lieb-towers-and-physics-models` | A | quantum-algebra-and-representation-theory | 2940 | `temperley-lieb-jones-wenzl-traces-and-quotients`, `direct-integral-decomposition-and-type-i-groups` |
| 63 | `temperley-lieb-towers-and-physics-models-examples` | B | quantum-algebra-and-representation-theory | 2941 | `temperley-lieb-towers-and-physics-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `monotone-functions-and-discontinuities` — Monotone Functions, Discontinuities, and Continuity Sets (32 item(s))

- `def-monotone-function` · definition — Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\mathbb{R}$, with the dictionary to monotone sequences
- `def-classification-of-discontinuities` · definition — Discontinuity of $f$ at a point of its domain, and its classification: removable discontinuity, jump discontinuity and essential discontinuity, equivalently Rudin's discontinuities of the first and of the second kind
- `def-oscillation` · definition — The oscillation $\omega_f(S) = \sup\{\,|f(x) - f(y)| : x, y \in S\,\}$ of $f$ on a set and the oscillation $\omega_f(c) = \inf_{\delta > 0} \omega_f(A \cap N_\delta(c))$ at a point, both taken in the extended reals
- `def-dirichlet-and-thomae-functions` · definition — The Dirichlet function $1_{\mathbb{Q}}$, and Thomae's function $t$ with $t(x) = 1/q$ at a rational $x = p/q$ in lowest terms with $q \ge 1$ and $t(x) = 0$ at every irrational $x$
- `def-intermediate-value-property` · definition — The intermediate value property (Darboux property) of a function on an interval: the image of every subinterval is order-convex
- `def-semicontinuity` · definition — Upper and lower semicontinuity of $f : A \to \mathbb{R}$ at a point of $A$ and on $A$
- `lem-baire-category-in-a-closed-interval` · lemma — Baire category inside a closed bounded interval: if $[a,b]$ with $a < b$ is covered by a sequence of closed sets, then one of them contains a nondegenerate closed subinterval of $[a,b]$; no choice principle is used
- `def-baire-class-one` · definition — Pointwise convergence of a sequence of real functions, and the Baire class one functions as the pointwise limits of sequences of continuous functions
- `def-additive-function` · definition — Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\mathbb{R} \to \mathbb{R}$
- `lem-hamel-basis-exists` · lemma — Assuming the Axiom of Choice, $\mathbb{R}$ has a Hamel basis over $\mathbb{Q}$: there is $B \subseteq \mathbb{R}$ such that every real is a finite $\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\mathbb{Q}$-linear coefficient map
- `thm-monotone-one-sided-limits-exist` · theorem — One-sided limits of a monotone function always exist: for $f$ nondecreasing on an interval $I$ and $c \in I$, $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I,\ x < c\}$ whenever $I$ has points below $c$, $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I,\ x > c\}$ whenever it has points above $c$, and these satisfy $\lim_{x \to c^{-}} f(x) \le f(c) \le \lim_{x \to c^{+}} f(x)$
- `thm-continuous-injection-on-an-interval-is-strictly-monotone` · theorem — A continuous injective function on an interval is strictly monotone
- `cor-cantor-function-is-continuous` · corollary — The Cantor function is continuous on $[0,1]$
- `thm-continuity-iff-oscillation-zero` · theorem — $f : A \to \mathbb{R}$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$
- `lem-oscillation-superlevel-sets-are-closed` · lemma — For every real $\varepsilon > 0$ the set $\{\,x \in A : \omega_f(x) \ge \varepsilon\,\}$ is the intersection with $A$ of a closed subset of $\mathbb{R}$; in particular it is closed in $\mathbb{R}$ when $A = \mathbb{R}$
- `fs-intermediate-value-property-implies-continuity` · false-statement — FALSE: a function with the intermediate value property on an interval is continuous
- `thm-semicontinuity-level-set-characterisation` · theorem — $f$ is upper semicontinuous on $A$ if and only if $\{x \in A : f(x) < \alpha\}$ is relatively open in $A$ for every real $\alpha$, lower semicontinuous if and only if $\{x \in A : f(x) > \alpha\}$ is, and continuous if and only if it is both
- `lem-additive-is-q-linear` · lemma — An additive $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\,f(1)$ at every rational $q$
- `thm-monotone-discontinuities-are-jumps` · theorem — A monotone function on an interval has no discontinuity of the second kind: at every point both relevant one-sided limits exist, and an interior point $c$ is a discontinuity exactly when $\lim_{x \to c^{-}} f(x) < \lim_{x \to c^{+}} f(x)$
- `thm-continuous-inverse` · theorem — Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \to I$ is continuous and strictly monotone in the same sense as $f$
- `rem-cantor-function-increases-only-on-a-null-set` · remark — The Cantor function is continuous and nondecreasing, climbs from $0$ to $1$, and is constant on every interval removed in the construction of the Cantor set, so all of its increase happens on a set of measure zero
- `thm-discontinuity-set-is-f-sigma` · theorem — For $f : A \to \mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\sigma$ subset of $\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\delta$ subset; for $A = \mathbb{R}$ the two sets are $F_\sigma$ and $G_\delta$ outright
- `thm-dirichlet-and-thomae-continuity-sets` · theorem — The Dirichlet function is continuous at no point of $\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$
- `thm-semicontinuous-evt` · theorem — Semicontinuous extreme value theorem: an upper semicontinuous function on a nonempty compact $K \subseteq \mathbb{R}$ is bounded above and attains a maximum, and a lower semicontinuous one is bounded below and attains a minimum
- `lem-additive-bounded-above-on-an-interval-is-linear` · lemma — If an additive $f : \mathbb{R} \to \mathbb{R}$ is bounded above on some nondegenerate interval, then $f(x) = f(1)\,x$ for every real $x$
- `thm-froda` · theorem — Froda's theorem: the set of discontinuities of a monotone function on an interval is at most countable, the injection into $\mathbb{N}$ being built from one fixed enumeration of the rationals by least index, so no choice principle is used
- `thm-continuity-set-realisation` · theorem — Every $G_\delta$ subset of $\mathbb{R}$ is the set of continuity points of some $f : \mathbb{R} \to \mathbb{R}$, so the $G_\delta$ sets are exactly the continuity sets
- `cor-no-function-is-continuous-exactly-on-q` · corollary — No function $\mathbb{R} \to \mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$
- `thm-baire-one-continuity-points` · theorem — Baire's theorem: a Baire class one function on a closed bounded interval $[a,b]$ is continuous at the points of a dense subset of $[a,b]$ that is the trace of a $G_\delta$ set, so its set of discontinuities is meager
- `thm-cauchy-functional-equation-regularity` · theorem — Six regularity conditions each force an additive $f : \mathbb{R} \to \mathbb{R}$ to be $x \mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\mathbb{R}^{2}$
- `thm-monotone-with-prescribed-discontinuity-set` · theorem — Converse to Froda: for every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ whose set of discontinuities is exactly $E$, every one of them a jump
- `fs-additive-implies-linear` · false-statement — FALSE: every additive $f : \mathbb{R} \to \mathbb{R}$ is of the form $x \mapsto cx$ for a single real $c$

### `monotone-functions-and-discontinuities-examples` — Monotone Functions, Discontinuities, and Continuity Sets: Examples and Counterexamples (11 item(s))

- `ex-locally-unbounded-finite-everywhere` · example — The function equal to $q$ at a rational $p/q$ in lowest terms and to $0$ at every irrational is finite at every point and unbounded on every nondegenerate interval
- `ex-cantor-function-maps-a-null-set-onto-the-unit-interval` · example — The Cantor set has measure zero, yet the Cantor function maps it onto all of $[0,1]$: a null set can have image an interval of length $1$
- `ex-thomae-values-and-oscillation-computed` · example — Thomae's function computed: $t(1/2) = 1/2$, $t(2/3) = 1/3$, $t(m) = 1$ at every integer $m$, $t(x) = 0$ at every irrational, and $\omega_t(c) = t(c)$ at every real $c$
- `ex-continuous-inverse-gives-the-nth-root` · example — The $n$-th root as a continuous inverse: for a natural $n \ge 1$ the map $x \mapsto x^{n}$ is continuous and strictly increasing on $[0,\infty)$ with image $[0,\infty)$, so its inverse $x \mapsto x^{1/n}$ is continuous and strictly increasing
- `cex-upper-semicontinuous-need-not-attain-its-infimum` · counterexample — An upper semicontinuous function on $[0,1]$ that is bounded below and attains no minimum, so the semicontinuous extreme value theorem is genuinely one-sided
- `cex-continuous-injection-on-a-non-interval-need-not-be-monotone` · counterexample — A continuous injection on $[0,1] \cup [2,3]$ that is not monotone, so the interval hypothesis cannot be dropped from the strict-monotonicity theorem
- `ex-indicator-of-q-is-baire-class-two-not-one` · example — The Dirichlet function is the pointwise limit of a sequence of Baire class one functions and is itself not Baire class one, so the Baire hierarchy on $[0,1]$ is already strict at the first level
- `ex-monotone-function-discontinuous-exactly-at-the-rationals` · example — A bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ whose set of discontinuities is exactly $\mathbb{Q}$, obtained from the prescribed-jump construction applied to one fixed enumeration of the rationals
- `ex-froda-is-sharp` · example — Froda's countable bound is attained: a bounded nondecreasing function on $\mathbb{R}$ discontinuous exactly at the points $1 - 1/(k+1)$ for $k \in \mathbb{N}$, an infinite discontinuity set inside a bounded interval
- `ex-hamel-basis-additive-function` · example — An additive $f : \mathbb{R} \to \mathbb{R}$ that is not $x \mapsto cx$: the coefficient of one fixed Hamel basis vector. It is unbounded above and below on every nondegenerate interval, its graph is dense in $\mathbb{R}^{2}$, and every nonempty level set is dense in $\mathbb{R}$
- `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous` · example — A bounded function on $\mathbb{R}$ with no local maximum and no local minimum at any point, upper semicontinuous at no point and lower semicontinuous at no point: compose the Hamel coefficient with a strictly increasing injection of $\mathbb{R}$ into $(0,1)$

### `topological-quantum-algorithms-and-braid-compilation` — Topological Quantum Algorithms and Braid Compilation (24 item(s))

- `def-qa-37-certified-matrix-input` · definition — Certified fixed-dimensional special-unitary input
- `lem-qa-37-product-error` · lemma — Operator error adds under finite unitary products
- `thm-qa-37-output-distribution-error` · theorem — Operator error bounds measured output variation
- `def-qa-37-anyon-task-and-promise` · definition — Finite anyon task and promise interface
- `def-qa-37-fusion-input-encoding` · definition — Fusion-tree task input encoding
- `def-qa-37-resource-cost-model` · definition — Anyon compiler resource ledger
- `def-qa-37-fusion-measurement` · definition — Fusion-channel measurement access
- `def-qa-37-n-triple-fusion-code` · definition — Arbitrary-n triple-anyon fixed-charge code
- `def-qa-37-phase-reference-cost` · definition — Braid phase reference and correction ledger
- `lem-qa-37-local-braid-acts-trivially-on-spectators` · lemma — A triple braid acts identically on fusion spectators
- `thm-qa-37-fusion-branch-validity` · theorem — Fusion measurement branches are normalized exactly when nonzero
- `alg-qa-37-exhaustive-b6-block-pair-compiler` · algorithm — Exhaustive certified Fibonacci B6 block-pair search
- `def-qa-37-finite-adiabatic-braid-input` · definition — Finite adiabatic braid compilation input
- `lem-qa-37-fixed-sector-global-phase` · lemma — Standalone and controlled phase accounting for a fixed-sector braid
- `thm-qa-37-exhaustive-b6-compiler-terminates` · theorem — Certified B6 block-pair search terminates
- `thm-qa-37-jrs-leakage-bound` · theorem — Finite JRS leakage amplitude and probability
- `lem-qa-37-fibonacci-su2-lifts-are-dense` · lemma — The generated normalized Fibonacci lifts are dense in SU(2)
- `lem-qa-37-total-error-budget` · lemma — Finite braid compilation and adiabatic error budget
- `thm-qa-37-approx-encoded-two-qubit-gate` · theorem — One B6 braid approximates an encoded two-qubit gate
- `def-qa-37-fibonacci-braid-gate-set` · definition — Fixed SU(2) Fibonacci braid gate alphabet
- `def-qa-37-physical-locality-boundary` · definition — Physical realization boundary for braid compilation
- `alg-qa-37-su2-solovay-kitaev-compiler` · algorithm — SU(2) Fibonacci Solovay–Kitaev compiler
- `thm-qa-37-su2-compiler-error-length` · theorem — Fibonacci SU(2) compiler error, length, and bit cost
- `thm-qa-37-arbitrary-n-encoded-circuit` · theorem — Arbitrary-size triple-encoded projective braid approximation

### `topological-quantum-algorithms-and-braid-compilation-examples` — Topological Quantum Algorithms and Braid Compilation — Examples (4 item(s))

- `ex-qa-37-fusion-measurement-branches` · example — Fibonacci fusion measurement branches and zero outcomes
- `cex-qa-37-projective-is-not-controlled` · counterexample — A discarded global phase changes a controlled computation
- `ex-qa-37-approximate-b6-target` · example — Identity target in the two B6 charge blocks
- `ex-qa-37-fibonacci-budget` · example — Fibonacci SK level and symbolic gate budget

### `temperley-lieb-towers-and-physics-models` — Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces (18 item(s))

- `def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower` · definition — Type-A path spaces and their matrix-unit tower
- `thm-temperley-lieb-type-a-path-space-tower-branching` · theorem — The A_(ell-1) path-space tower branches by adjacent vertices
- `def-xxz-open-chain-temperley-lieb-representation` · definition — Open XXZ spin-half generators and Hamiltonian convention
- `def-potts-open-chain-clock-shift-representation` · definition — Open Potts clock-shift Temperley–Lieb generators
- `def-temperley-lieb-diagram-tower-and-right-closure` · definition — Finite diagram tower inclusion and normalized right closure
- `lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb` · lemma — The open XXZ local 4-by-4 matrix satisfies the Temperley–Lieb relations
- `thm-xxz-open-chain-hamiltonian-and-boundary-field` · theorem — The XXZ generator Hamiltonian has the declared Pauli expansion and endpoint field
- `lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb` · lemma — The Q = 2, 3, 4 open Potts matrices satisfy Temperley–Lieb
- `lem-temperley-lieb-diagram-tower-conditional-expectation-identities` · lemma — Right closure is a trace-preserving diagram-tower expectation
- `lem-temperley-lieb-right-closure-preserves-trace-radical` · lemma — Normalized right closure preserves the diagram trace radical
- `thm-temperley-lieb-root-quotient-tower-interface` · theorem — The positive-root Jones quotient is the type-A path tower with positive right closure
- `lem-tracial-standard-form-and-normal-functional-vectors` · lemma — Tracial standard form, normal functional vectors, and expectation
- `lem-finite-factor-projection-comparison-and-normalized-trace` · lemma — Projection comparison and unique normalized traces in finite factors
- `lem-tracial-hilbert-module-dimension-and-finite-corners` · lemma — Ordinary Hilbert-module dimension and finite projection models
- `def-extremal-finite-index-ii1-subfactor-data` · definition — Finite-index extremal II1 subfactor data
- `lem-finite-index-bounded-vector-pull-down` · lemma — Finite Jones index gives bounded vector pull-down
- `lem-finite-right-n-module-frame-from-projection-model` · lemma — Ordinary finite Jones index supplies a bounded finite Parseval frame
- `thm-finite-index-ii1-basic-construction-jones-tower` · theorem — Ordinary finite-index II1 inclusions give the full Jones tower and Temperley–Lieb relations

### `temperley-lieb-towers-and-physics-models-examples` — Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces: Examples and Counterexamples (6 item(s))

- `cex-xxz-unit-circle-generator-not-self-adjoint` · counterexample — The XXZ local generator is not always self-adjoint in the standard spin basis
- `rem-temperley-lieb-scaling-limit-and-boundary-status` · remark — Scaling limits and non-open boundary models remain source-qualified
- `ex-matrix-amplification-basic-construction` · example — A matrix amplification gives an explicit finite-index II1 inclusion
- `ex-xxz-q-one-three-site-open-chain` · example — The q = 1 three-site open XXZ chain has loop value 2
- `ex-potts-q-two-three-four-open-chain` · example — The Q = 2, 3, 4 Potts chains use three distinct q normalizations
- `ex-temperley-lieb-rank-three-right-closure` · example — Right closure on the five rank-three diagrams

## Your seams

Your pages depend on another group's:

- `topological-quantum-algorithms-and-braid-compilation` requires `topological-braid-gates-encodings-and-universality` (group aa, batch 29)
- `topological-quantum-algorithms-and-braid-compilation` requires `toric-code-anyons-logical-operators-and-protection` (group aa, batch 30)
- `temperley-lieb-towers-and-physics-models` requires `temperley-lieb-jones-wenzl-traces-and-quotients` (group y, batch 62)

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
