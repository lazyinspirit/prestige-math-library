# Citation-precision audit — everything that cites `thm-metric-regularity-hierarchy`

## The target, as it actually stands on disk

`items/thm-metric-regularity-hierarchy.md` — theorem — Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent

#### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L3] A map $x \mapsto cx$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and $|cx| = |c||x|$ ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-continuous-map-top]], [[def-abs-value]], [[def-metrizable-space]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-isometry-and-metric-embedding]], [[def-metrizable-space]]).

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L5] A Lipschitz map is uniformly continuous and hence continuous ([[thm-metric-regularity-hierarchy]], claims 2 and 3, [[def-metric-continuity]], [[def-metrizable-space]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and a restriction to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-metrizable-space]], [[def-metric-space]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L4] A map Lipschitz with some constant is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], claims 2 and 3).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence uniformly continuous, hence continuous; and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-abs-value]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).
