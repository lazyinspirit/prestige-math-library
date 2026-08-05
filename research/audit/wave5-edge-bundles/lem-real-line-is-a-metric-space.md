# Citation-precision audit — everything that cites `lem-real-line-is-a-metric-space`

## The target, as it actually stands on disk

`items/lem-real-line-is-a-metric-space.md` — lemma — The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded

#### Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## The 23 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- **Given:** $\mathbb{R}$ with the usual metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]), the maps $g_k(x) = x/\iota(k+1)$, the constant function $\mathbf{0}$, and the truncated metric $\bar d = \min\{d,1\}$ with the uniform metric $\bar\rho$ on $\mathbb{R}^{\mathbb{R}}$ ([[lem-uniform-metric-on-a-function-space]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the spikes $f_k$ displayed above and the family $\mathcal{F} = \{\, f_k : k \in \mathbb{N} \,\}$.

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L2] The usual topology on $\mathbb R$ is Hausdorff, so distinct real numbers have disjoint open neighbourhoods ([[lem-real-line-is-a-metric-space]], [[def-hausdorff-space]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the ramps $r_k$ and the indicator $\chi$ displayed above.

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
- [[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- ([[lem-real-line-is-a-metric-space]]). Indeed for $x, x' \in X$,

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
- $\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- its usual metric ([[lem-real-line-is-a-metric-space]]). Put
- [L1] $f$ is Lipschitz with constant $1$ when $|f(x) - f(x')| \le d(x,x')$ for all $x, x' \in X$ ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).
- [L4] A subset $S \subseteq \mathbb{R}$ is bounded exactly when it lies in some ball of $\mathbb{R}$, so an unbounded set of reals lies in no ball ([[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]]).

### `ex-cardinal-functions-of-the-real-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Under choice, for the usual real line, $w=d=\\chi=L=c=\\aleph_0$ under the raw convention

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]),
- [L5] Every open set is a $G_\delta$, by the constant sequence; $(0,1)$ is open and is not closed, since $0$ lies in every open interval around it and not in $(0,1)$ ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[lem-real-line-is-a-metric-space]], [[def-topological-space]], [[def-metric-space]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]) and

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- **Given:** $I = [0,1]$ with $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the reals $a_k = 1/\iota(k+2)$, the functions $s_k$ displayed above, and the identity $\mathrm{id}_I$ of $I$.

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[lem-real-line-is-a-metric-space]]) and let $C(\mathbb{R},\mathbb{R})$ carry

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- usual metric ([[lem-real-line-is-a-metric-space]]), and let

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- **Given:** The set $\mathbb{R}$ with the discrete metric $\rho(u,v) := 1$ for $u \ne v$ and $\rho(u,u) := 0$; the space $X := (\mathbb{R},\rho)$ with its metric topology; the target $Y := \mathbb{R}$ with the usual metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]); and the constant function $\mathbf{0} : \mathbb{R} \to \mathbb{R}$ with value $0$.
- [L9] $(-1,1) = \{\, t \in \mathbb{R} : -1 < t < 1 \,\}$ is open in $\mathbb{R}$ and contains $0$ but not $2$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- **Given:** The rationals $\mathbb{Q}$ inside $\mathbb{R}$ with the metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $\mathbb{R}$ with the same metric, the constant function $z : \mathbb{Q} \to \mathbb{R}$ with value $0$, and the open interval $V := (-1,1)$ ([[def-interval]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).
- [L2] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $x \in U$ has $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claim 3, [[def-metrizable-space]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L6] A continuous real-valued function on a nonempty compact metric space attains a least and a greatest value, and the restriction of a continuous map to a metric subspace is continuous ([[thm-extreme-value-metric]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[lem-real-line-is-a-metric-space]]).

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [[lem-real-line-is-a-metric-space]]), and suppose
- [L4] Continuity of $h : X \to \mathbb{R}$ at $a$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|h(x) - h(a)| < \eta$ whenever $d(x,a) < \delta$ ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).
