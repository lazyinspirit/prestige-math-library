# Step 7 adjudication — group **h**, run `frontier-38-owner-30`

You are the group Alpha for batches **3**, **4**, **30**: 3 A/B pair(s), 6 page(s), 82 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-38-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `the-heat-kernel-and-the-cauchy-problem` | A | pde | 458.011 | `poisson-problems-and-interior-harmonic-estimates` |
| 3 | `the-heat-kernel-and-the-cauchy-problem-examples` | B | pde | 458.012 | `the-heat-kernel-and-the-cauchy-problem`, `weak-convergence-tightness-and-representation` |
| 4 | `sobolev-traces-and-zero-boundary-values` | A | pde | 458.023 | `smooth-approximation-and-sobolev-extension` |
| 4 | `sobolev-traces-and-zero-boundary-values-examples` | B | pde | 458.024 | `sobolev-traces-and-zero-boundary-values`, `poisson-problems-and-interior-harmonic-estimates` |
| 30 | `etale-covers-and-the-etale-fundamental-group` | A | algebraic-geometry | 911 | `affine-schemes-and-the-structure-sheaf`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `flat-smooth-and-etale-morphisms` |
| 30 | `etale-covers-and-the-etale-fundamental-group-examples` | B | algebraic-geometry | 912 | `etale-covers-and-the-etale-fundamental-group` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-heat-kernel-and-the-cauchy-problem` — The Heat Kernel and the Cauchy Problem (20 item(s))

- `def-heat-equation-heat-operator-and-cauchy-problem` · definition — The heat operator, the heat equation, and the Cauchy problem
- `def-heat-kernel` · definition — The heat kernel on $\mathbb R^n$ and its causal extension
- `lem-heat-kernel-normalisation-scaling-and-derivatives` · lemma — Normalisation, parabolic scaling, heat equation and derivative bounds for the heat kernel
- `lem-first-and-second-moments-of-the-heat-kernel` · lemma — First and second Gaussian heat-kernel moments
- `lem-gaussian-kernels-form-an-approximate-identity` · lemma — Gaussian kernels form an approximate identity
- `lem-heat-kernel-semigroup-identity` · lemma — The heat kernel semigroup identity $\Gamma_t*\Gamma_s=\Gamma_{t+s}$
- `thm-heat-kernel-is-the-causal-fundamental-solution` · theorem — The causal heat kernel is the fundamental solution of the heat operator
- `def-heat-evolution-of-initial-data` · definition — The heat evolution $H_t$ of initial data
- `lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time` · lemma — Spatial and time derivatives pass through heat convolution for positive time
- `thm-heat-cauchy-solution-for-bounded-continuous-data` · theorem — The heat Cauchy problem for bounded uniformly continuous data
- `thm-heat-cauchy-solution-for-lp-data` · theorem — The heat Cauchy problem for $L^p$ data
- `thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class` · theorem — Uniqueness of strongly continuous mild heat solutions
- `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` · lemma — Heat generator at zero on compactly supported smooth data
- `cor-heat-flow-preserves-mass-and-positivity` · corollary — Mass conservation and positivity of the heat flow
- `cor-heat-flow-is-order-preserving-and-lp-contractive` · corollary — Monotonicity and $L^p$ contractivity of the heat flow
- `thm-lp-to-lq-heat-kernel-estimate` · theorem — $L^p$ to $L^q$ smoothing estimate for the heat flow
- `thm-spatial-derivative-estimates-for-heat-flow` · theorem — Spatial derivative estimates for the heat flow
- `thm-positive-time-spatial-analyticity-of-heat-kernel-solutions` · theorem — Spatial analyticity of heat flow at positive time
- `cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class` · corollary — Infinite propagation speed for nonnegative heat data
- `rem-heat-kernel-conventions-and-diffusivity` · remark — Diffusivity, rescaling, and the heat kernel compared with the Poisson kernels

### `the-heat-kernel-and-the-cauchy-problem-examples` — The Heat Kernel and the Cauchy Problem — Examples (8 item(s))

- `ex-gaussian-data-remain-gaussian-under-heat-flow` · example — Gaussian data remain Gaussian under the heat flow
- `ex-heat-flow-of-an-indicator-function` · example — The heat flow of an interval indicator is a difference of Gaussian tails
- `ex-self-similar-heat-kernel-solution` · example — The heat kernel is the self-similar solution with conserved mass
- `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm` · counterexample — The heat flow need not converge in supremum norm
- `cex-heat-equation-does-not-have-finite-propagation` · counterexample — The heat equation has no finite propagation speed
- `ex-fourier-transform-of-the-heat-kernel` · example — The Fourier transform of the heat kernel
- `ex-heat-evolution-of-affine-and-quadratic-polynomials` · example — Heat evolution of affine and quadratic polynomials
- `ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling` · example — The heat smoothing time exponent is forced by scaling

### `sobolev-traces-and-zero-boundary-values` — Sobolev Traces and Zero Boundary Values (21 item(s))

- `lem-one-dimensional-sobolev-endpoint-estimate` · lemma — The one-dimensional endpoint estimate on a bounded interval
- `thm-trace-estimate-on-the-half-space` · theorem — The half-space trace estimate and the half-space trace operator
- `thm-lp-trace-operator-on-a-bounded-c-one-domain` · theorem — The $L^p$ trace operator on a bounded $C^1$ domain
- `lem-sobolev-trace-agrees-with-continuous-boundary-values` · lemma — The trace agrees with classical restriction for continuous Sobolev functions
- `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts` · lemma — The trace commutes with smooth cutoffs and is chart local
- `thm-sobolev-gauss-green-formula-on-c-one-domains` · theorem — The Gauss-Green integration-by-parts formula with Sobolev traces
- `thm-kernel-of-the-trace-is-w-one-p-zero` · theorem — The kernel of the trace is the closure of the test functions
- `def-fractional-slobodeckij-space-on-euclidean-space` · definition — The Gagliardo--Slobodeckij space on Euclidean space
- `lem-slobodeckij-seminorm-is-well-defined` · lemma — Well-definedness of the Slobodeckij seminorm and norm
- `lem-coordinate-direction-form-of-the-slobodeckij-seminorm` · lemma — The coordinate-direction form of the Slobodeckij seminorm
- `lem-one-dimensional-hardy-inequality-on-the-half-line` · lemma — The Hardy inequality for the averaging operator on the half-line
- `lem-mean-zero-kernel-scale-estimate` · lemma — A scale integral estimate for mean-zero kernels
- `lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces` · lemma — Compactly supported smooth functions are dense in Slobodeckij spaces
- `def-fractional-sobolev-space-on-a-compact-c-one-boundary` · definition — The fractional Sobolev space on a compact $C^1$ boundary
- `lem-fractional-boundary-norm-is-independent-of-atlas` · lemma — Chart independence of the fractional boundary norm
- `lem-half-space-trace-has-the-fractional-slobodeckij-bound` · lemma — The half-space trace lies in the fractional Slobodeckij space
- `thm-half-space-lift-by-normal-mollification` · theorem — A bounded right inverse of the half-space trace by normal mollification
- `thm-sharp-trace-theorem-for-w-one-p` · theorem — The sharp trace theorem: boundedness and range in the fractional space
- `thm-bounded-right-inverse-for-the-sobolev-trace` · theorem — A bounded right inverse of the trace, supported in a prescribed collar
- `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` · corollary — Inhomogeneous Dirichlet data reduce to zero trace
- `rem-endpoint-and-rough-domain-trace-limitations` · remark — Endpoint and rough-domain limitations of the trace theorems

### `sobolev-traces-and-zero-boundary-values-examples` — Sobolev Traces and Zero Boundary Values — Examples (7 item(s))

- `ex-trace-of-an-ac-sobolev-function-on-an-interval` · example — The trace of a one-dimensional Sobolev function is the pair of endpoint values
- `ex-trace-of-an-affine-function-on-a-ball` · example — The trace of an affine function on a ball is its classical restriction
- `cex-boundary-point-values-are-not-defined-by-an-lp-class` · counterexample — Boundary point values are not a function of the interior $L^p$ class
- `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range` · counterexample — A jump boundary datum is outside the trace range for $p\ge2$
- `ex-zero-trace-versus-zero-extension` · example — Zero trace, zero boundary values and zero extension agree on an interval
- `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control` · counterexample — The trace estimate fails on an outward cusp above the critical sharpness
- `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` · example — A Poisson-type extension and its local and global Sobolev traces

### `etale-covers-and-the-etale-fundamental-group` — Etale Covers and the Etale Fundamental Group (24 item(s))

- `lem-finite-etale-algebra-module-presentation-and-rank` · lemma — Finite étale algebras have finite locally free underlying modules
- `lem-faithfully-flat-effective-descent-of-modules-and-algebras` · lemma — Faithfully flat descent of modules and algebras is effective
- `thm-effective-fpqc-descent-of-finite-etale-covers` · theorem — Finite étale covers descend effectively along fpqc covers
- `def-etale-fundamental-group-and-fibre-functor` · definition — Geometric fibre functor and étale fundamental group
- `lem-finite-etale-galois-refinements-and-quotients` · lemma — Finite étale covers admit connected Galois trivializations and subgroup quotients
- `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets` · theorem — Finite étale covers are equivalent to finite continuous étale fundamental group sets
- `lem-finite-etale-separability-and-hochschild-contraction` · lemma — The diagonal of a finite étale algebra contracts its positive Hochschild cochains
- `thm-finite-etale-algebras-invariant-under-nilpotent-thickening` · theorem — Finite étale algebras lift uniquely through nilpotent thickenings
- `lem-complete-local-finite-etale-algebra-lifting` · lemma — Finite étale algebras over a complete local ring are determined by reduction
- `lem-punctured-hartogs-and-flat-base-change-for-finite-projectives` · lemma — Depth two gives Hartogs extension on a punctured affine spectrum
- `lem-formal-full-faithfulness-on-regular-punctured-spectrum` · lemma — Vector-bundle maps on a regular punctured spectrum are recovered from parameter thickenings
- `lem-discriminant-detects-etaleness-of-finite-free-algebra` · lemma — The trace discriminant detects étaleness of a finite free algebra
- `thm-purity-for-finite-covers-of-regular-local-rings` · theorem — Finite étale covers extend across the closed point of a regular local ring
- `thm-purity-of-branch-locus-for-finite-normal-covers` · theorem — A finite normal generically étale cover of a regular scheme is étale if unramified in codimension one
- `lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting` · lemma — Projective Čech finiteness and Serre vanishing for the étale lifting construction
- `thm-projective-flat-dvr-finite-etale-cover-lifting` · theorem — Finite étale covers of a projective flat family over a complete DVR lift uniquely
- `lem-projective-modification-of-proper-integral-dvr-scheme` · lemma — A proper integral scheme over a DVR has a projective modification which is unchanged in codimension one
- `thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence` · theorem — Finite étale covers of a smooth proper family over a complete DVR are determined by the closed fibre
- `lem-smooth-proper-complete-dvr-geometric-generic-connectedness` · lemma — A connected special étale cover stays connected on the geometric generic fibre
- `lem-etale-specialization-trait-through-a-specialization` · lemma — A specialization is represented by a complete DVR trait
- `lem-etale-specialization-proper-geometric-finite-etale-invariance` · lemma — Algebraically closed field extension preserves covers of a smooth proper scheme
- `lem-etale-specialization-geometric-basepoint-interface` · lemma — Trait specialization as a cover functor with geometric basepoint paths
- `lem-tame-dvr-inertia-and-abhyankar-ramification-killing` · lemma — A root of the uniformizer kills the prime-to-residue-characteristic ramification required in specialization
- `thm-specialization-of-etale-pi1-under-geometric-hypotheses` · theorem — Smooth proper specialization of the étale fundamental group

### `etale-covers-and-the-etale-fundamental-group-examples` — Etale Covers and the Etale Fundamental Group — Examples (2 item(s))

- `ex-etale-covers-of-gm` · example — Kummer covers of the multiplicative group
- `cex-fundamental-group-depends-on-base-field` · counterexample — The étale fundamental group changes when the base field changes

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
`research/frontier-38-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-38-owner-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
