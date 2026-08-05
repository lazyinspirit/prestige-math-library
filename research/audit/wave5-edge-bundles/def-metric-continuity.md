# Citation-precision audit — everything that cites `def-metric-continuity`

## The target, as it actually stands on disk

`items/def-metric-continuity.md` — definition — Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form

#### Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

## The 14 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L3] A map $x \mapsto cx$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and $|cx| = |c||x|$ ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-continuous-map-top]], [[def-abs-value]], [[def-metrizable-space]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L3] A family $\mathcal{F}$ is pointwise bounded when for each $t$ the set $\{\, f(t) : f \in \mathcal{F} \,\}$ lies in some ball of the target, and equicontinuous at $a$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(t)-f(a)| < \varepsilon$ for every $f \in \mathcal{F}$ and every $t$ with $|t-a| < \delta$ ([[def-equicontinuity]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-continuity]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-isometry-and-metric-embedding]], [[def-metrizable-space]]).
- [L6] $h : I \to \mathbb{R}$ is continuous at $a$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(t)-h(a)| < \varepsilon$ whenever $t \in I$ and $|t-a| < \delta$ ([[def-metric-continuity]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- ([[def-metric-continuity]]); equicontinuity at $a$ demands one $\delta$ serving
- ([[def-metric-continuity]], [[def-metric-uniform-continuity]]).

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- and of $g$ at $a$ ([[def-metric-continuity]], [[def-metrizable-space]]) supplies

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L5] A Lipschitz map is uniformly continuous and hence continuous ([[thm-metric-regularity-hierarchy]], claims 2 and 3, [[def-metric-continuity]], [[def-metrizable-space]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and a restriction to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-metrizable-space]], [[def-metric-space]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L3] $\varepsilon$-$\delta$ continuity of a map of metric spaces, and its agreement with continuity of the corresponding map of topological spaces ([[def-metric-continuity]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-space]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence uniformly continuous, hence continuous; and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-abs-value]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L9] $(-1,1) = \{\, t \in \mathbb{R} : -1 < t < 1 \,\}$ is open in $\mathbb{R}$ and contains $0$ but not $2$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L6] A continuous real-valued function on a nonempty compact metric space attains a least and a greatest value, and the restriction of a continuous map to a metric subspace is continuous ([[thm-extreme-value-metric]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[lem-real-line-is-a-metric-space]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- ([[def-metric-continuity]], $\mathbb{R}$ carrying its usual metric,
- [L4] Continuity of $h : X \to \mathbb{R}$ at $a$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|h(x) - h(a)| < \eta$ whenever $d(x,a) < \delta$ ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).
