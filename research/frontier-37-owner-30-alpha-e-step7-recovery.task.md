# Step 7 adjudication — group **e**, run `frontier-37-owner-30`

You are the group Alpha for batches **9**, **10**, **29**: 3 A/B pair(s), 6 page(s), 81 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `poisson-problems-and-interior-harmonic-estimates` | A | pde | 458.009 | `fundamental-solutions-newtonian-potentials-and-green-functions`, `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, `harmonic-functions-and-the-poisson-integral` |
| 9 | `poisson-problems-and-interior-harmonic-estimates-examples` | B | pde | 458.01 | `poisson-problems-and-interior-harmonic-estimates`, `tempered-distributions-and-the-fourier-transform` |
| 10 | `smooth-approximation-and-sobolev-extension` | A | pde | 458.021 | `weak-derivatives-and-sobolev-spaces`, `euclidean-surface-measure-divergence-and-green-identities` |
| 10 | `smooth-approximation-and-sobolev-extension-examples` | B | pde | 458.022 | `smooth-approximation-and-sobolev-extension` |
| 29 | `hormander-estimates-and-the-levi-problem` | A | complex-analysis | 865 | `domains-of-holomorphy-and-pseudoconvexity`, `complex-lp-spaces-and-test-function-conventions`, `hilbert-space-geometry-and-riesz-representation`, `weak-and-weak-star-topologies`, `reflexivity-and-eberlein-smulian`, `unbounded-self-adjoint-operators-and-stones-theorem`, `weak-derivatives-and-sobolev-spaces`, `smooth-approximation-and-sobolev-extension`, `the-dbar-complex-and-integral-solutions` |
| 29 | `hormander-estimates-and-the-levi-problem-examples` | B | complex-analysis | 866 | `hormander-estimates-and-the-levi-problem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `poisson-problems-and-interior-harmonic-estimates` — Poisson Problems and Interior Harmonic Estimates (21 item(s))

- `lem-kelvin-inversion-and-the-laplace-operator` · lemma — Kelvin inversion transforms harmonic functions
- `thm-green-function-for-a-ball-in-rn` · theorem — Dirichlet Green function of a Euclidean ball
- `thm-poisson-kernel-for-a-ball-in-rn` · theorem — Poisson kernel of a Euclidean ball
- `lem-ball-poisson-kernel-is-positive-and-normalised` · lemma — The ball Poisson kernel is positive and has unit mass
- `lem-poisson-kernel-boundary-cap-and-complement-estimate` · lemma — Cap and complement estimate for the ball Poisson integral
- `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral` · theorem — Continuous Dirichlet problem on a ball
- `cor-uniform-boundary-convergence-of-ball-poisson-integrals` · corollary — Ball Poisson integrals converge uniformly along radial boundary approaches
- `lem-reflection-green-function-for-the-half-space` · lemma — Reflected Green kernel for the upper half-space
- `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` · theorem — Poisson kernel and bounded Dirichlet problem on a half-space
- `thm-interior-derivative-estimates-for-harmonic-functions` · theorem — Interior L-one derivative estimates for harmonic functions
- `cor-harmonic-cauchy-estimates-in-supremum-norm` · corollary — Scale-invariant supremum Cauchy estimates for harmonic functions
- `lem-interior-oscillation-controls-harmonic-gradient` · lemma — Interior oscillation controls the harmonic gradient
- `cor-entire-harmonic-function-of-sublinear-growth-is-constant` · corollary — Entire harmonic functions of sublinear growth are constant
- `thm-locally-uniform-harmonic-convergence-is-c-infinity-local` · theorem — Locally uniform convergence of harmonic functions is smooth on compact subsets
- `thm-harmonic-functions-are-real-analytic` · theorem — Harmonic functions are real analytic in every dimension
- `cor-unique-continuation-for-harmonic-functions` · corollary — Unique continuation from an open set for harmonic functions
- `def-local-holder-and-c-two-alpha-norms-on-euclidean-balls` · definition — Local Hölder and scaled C-two-alpha norms on balls
- `thm-interior-estimate-for-poisson-equation-with-holder-data` · theorem — Interior C-two-alpha estimate for Poisson's equation
- `cor-interior-laplacian-gradient-estimate` · corollary — Interior gradient bound for Poisson solutions
- `rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated` · remark — Dimension split and the separate Poisson-disc theory
- `lem-euclidean-balls-are-bounded-c-one-domains` · lemma — Euclidean balls are bounded C-one domains with radial outward normal

### `poisson-problems-and-interior-harmonic-estimates-examples` — Poisson Problems and Interior Harmonic Estimates — Examples (9 item(s))

- `ex-poisson-extension-of-a-coordinate-function-on-a-ball` · example — Poisson extension fixes coordinate functions
- `ex-poisson-kernel-concentrates-at-a-boundary-point` · example — Quantitative concentration of the ball Poisson kernel
- `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump` · counterexample — The disc Poisson integral can miss the assigned value at a jump
- `ex-half-space-poisson-extension-of-a-plane-wave` · example — Half-space Poisson extension of a plane wave
- `cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control` · counterexample — Zero half-space trace does not ensure uniqueness without growth control
- `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control` · counterexample — Exterior Dirichlet uniqueness needs a far-field condition
- `cex-interior-estimates-cannot-use-distance-zero-to-the-boundary` · counterexample — Boundary-scale derivative blowup despite bounded ball data
- `ex-harmonic-taylor-series-on-a-ball` · example — A finite harmonic Taylor series and its Cauchy bound
- `cex-smooth-does-not-imply-real-analytic-for-general-pde` · counterexample — A smooth nonanalytic solution of a first-order PDE

### `smooth-approximation-and-sobolev-extension` — Smooth Approximation and Sobolev Extension (16 item(s))

- `lem-mollification-commutes-with-weak-derivatives-in-the-interior` · lemma — Interior mollification commutes with weak derivatives
- `thm-local-smooth-approximation-in-wkp` · theorem — Local smooth approximation in integer-order Sobolev spaces
- `thm-meyers-serrin-density-on-an-arbitrary-open-set` · theorem — Meyers–Serrin density on an arbitrary open set
- `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn` · corollary — Compactly supported smooth functions are dense in W^{k,p}(R^n)
- `rem-meyers-serrin-does-not-assert-density-for-p-infinity` · remark — Meyers–Serrin excludes the W^{k,∞} norm endpoint
- `def-wkp-zero-as-a-sobolev-closure` · definition — Zero-boundary Sobolev space as a norm closure
- `lem-zero-extension-from-w-one-p-zero` · lemma — Zero extension of W_0^{1,p} has no boundary derivative
- `lem-compact-support-zero-extension-in-wkp` · lemma — Compactly supported Sobolev functions extend by zero in every integer order
- `def-sobolev-extension-domain-and-extension-operator` · definition — Sobolev extension domains and operators
- `thm-wkp-extension-from-a-half-space` · theorem — Integer-order Sobolev extension from a half-space
- `def-bounded-c-k-domain-and-boundary-charts` · definition — Bounded C^k domains and flattened boundary charts
- `lem-c-k-boundary-flattening-preserves-wkp-locally` · lemma — C^k boundary flattening preserves local W^{k,p}
- `thm-extension-theorem-for-bounded-smooth-domains` · theorem — Bounded C^k domains admit integer-order Sobolev extension
- `thm-smooth-up-to-the-boundary-density-on-smooth-domains` · theorem — Ambient smooth restrictions are dense on bounded C^k domains
- `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` · corollary — Whole-space inequalities transfer through a Sobolev extension
- `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses` · remark — Boundary regularity required by the constructed extension

### `smooth-approximation-and-sobolev-extension-examples` — Smooth Approximation and Sobolev Extension — Examples (7 item(s))

- `ex-mollification-of-the-absolute-value` · example — Mollifying the absolute-value corner
- `ex-zero-extension-of-a-compactly-supported-sobolev-function` · example — Compactly supported Sobolev functions extend by zero without a jump
- `cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump` · counterexample — A nonzero boundary value creates a zero-extension jump
- `cex-c-infinity-up-to-boundary-density-is-domain-sensitive` · counterexample — Ambient-smooth density fails on a slit disc
- `cex-not-every-open-set-is-a-w-one-p-extension-domain` · counterexample — An inward cusp blocks W^{1,3/2} extension
- `ex-reflection-extension-on-the-half-line` · example — Even reflection on the half-line
- `cex-mollification-after-zero-extension-does-not-preserve-boundary-values` · counterexample — Mollifying a zero extension leaks across the boundary

### `hormander-estimates-and-the-levi-problem` — Hörmander Estimates and the Levi Problem (22 item(s))

- `lem-smooth-regularization-of-psh-exhaustion` · lemma — Smooth strict plurisubharmonic regularization of a psh exhaustion
- `def-meromorphic-function-in-several-complex-variables` · definition — Meromorphic functions on an open set in complex Euclidean space
- `def-weighted-l2-spaces-dbar-forms` · definition — Weighted L² spaces and maximal ∂̄ operators
- `lem-maximal-distributional-dbar-operator-is-closed` · lemma — The maximal distributional ∂̄ operator is closed and densely defined
- `thm-basic-bochner-kodaira-morrey-estimate-cn` · theorem — Basic Bochner–Kodaira–Morrey estimate on ℂⁿ
- `lem-hilbert-complex-solver-from-coercive-estimate` · lemma — A coercive Hilbert-complex estimate solves the closed equation
- `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` · lemma — Weighted Morrey–Kohn estimate with a pseudoconvex boundary term
- `lem-hormander-solver-on-smooth-pseudoconvex-domain` · lemma — Weighted ∂̄ solvability on a smoothly bounded pseudoconvex domain
- `thm-pseudoconvex-domain-smooth-psh-exhaustion` · theorem — Smooth strictly plurisubharmonic exhaustion of a pseudoconvex domain
- `thm-hormander-l2-dbar-existence` · theorem — Hörmander weighted L² existence theorem for ∂̄
- `cor-dolbeault-vanishing-pseudoconvex-domain` · corollary — Positive-degree Dolbeault vanishing on pseudoconvex domains
- `lem-local-boundary-separator-for-strongly-pseudoconvex-domain` · lemma — A strictly pseudoconvex boundary point has a local holomorphic separator
- `lem-positive-smooth-collar-for-a-strictly-psh-negative-set` · lemma — Positive smooth collars for strictly plurisubharmonic negative sets
- `lem-global-smooth-strictly-psh-defining-function` · lemma — Smooth global defining functions for strongly pseudoconvex boundaries
- `lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity` · lemma — A smooth psh exhaustion gives Hartogs pseudoconvexity on bounded domains
- `lem-boundary-peak-function-by-dbar-correction` · lemma — A strongly pseudoconvex boundary point admits a holomorphic peak function
- `lem-oka-weil-on-domain-of-holomorphy` · lemma — Oka–Weil approximation on a domain of holomorphy (host-domain lemma)
- `thm-levi-problem` · theorem — Levi problem: pseudoconvexity and domains of holomorphy
- `thm-behnke-stein-increasing-union` · theorem — Behnke–Stein: increasing unions of pseudoconvex domains
- `thm-oka-weil-approximation-pseudoconvex-domain` · theorem — Oka–Weil approximation on a pseudoconvex domain
- `lem-locally-finite-smooth-partition-of-unity-on-domain` · lemma — Locally finite smooth partitions of unity on domains
- `cor-first-cousin-problem-pseudoconvex-domain` · corollary — First Cousin problem on a pseudoconvex domain

### `hormander-estimates-and-the-levi-problem-examples` — Hörmander Estimates and the Levi Problem: Examples and Counterexamples (6 item(s))

- `ex-hormander-estimate-with-gaussian-weight` · example — Hörmander estimate with a Gaussian weight
- `ex-levi-form-of-the-unit-ball` · example — Levi form of the unit ball
- `ex-explicit-dbar-solution-with-l2-estimate` · example — An explicit ∂̄ solution with an L² estimate
- `ex-strictly-psh-exhaustion-of-a-convex-domain` · example — A strictly psh exhaustion of the unit ball
- `ex-pseudoconvexity-of-a-hartogs-domain` · example — Pseudoconvexity of a Hartogs domain
- `ex-first-cousin-gluing-on-a-pseudoconvex-domain` · example — First Cousin gluing on a pseudoconvex domain

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
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-37-owner-30`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
