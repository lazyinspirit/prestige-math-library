# Citation-precision audit — everything that cites `def-metric-topology`

## The target, as it actually stands on disk

`items/def-metric-topology.md` — definition — The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## The 34 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-open-bounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The open unit ball in $\\mathbb{R}^n$ is bounded and not compact

- [L3] The open ball $B_2(0,1)$ consists of the points of Euclidean distance less than $1$ from $0$, and metric balls form neighbourhoods in the metric topology ([[def-metric-ball]], [[def-metric-topology]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L6] $h : I \to \mathbb{R}$ is continuous at $a$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(t)-h(a)| < \varepsilon$ whenever $t \in I$ and $|t-a| < \delta$ ([[def-metric-continuity]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

### `cor-euclidean-closed-balls-and-spheres-are-compact` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, every Euclidean closed ball and every Euclidean sphere of positive radius is compact

- [L4] Euclidean open sets are the metric-open sets, and metric boundedness means containment in a ball ([[def-metric-topology]], [[def-metric-bounded-diameter]]).

### `cor-rn-is-polygonally-connected-and-locally-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected

- [L2] Euclidean balls are open and every open neighbourhood contains a Euclidean ball about its point ([[def-metric-ball]], [[def-metric-topology]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Y, \mathcal{T}_Y)$ be

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Y,\mathcal{T}_Y)$ be a

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- Give $X$ its metric topology $\mathcal{T}_d$ ([[def-metric-topology]]), so that
- $x \in U \subseteq K$, and by [[def-metric-topology]] that holds exactly when some
- [[def-metric-topology]] uses the word *neighbourhood* for an open set

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- its metric topology ([[def-metric-topology]], [[def-metrizable-space]]), and let

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- ([[def-metric-topology]]) of the uniform metric

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L2] A subset of $\mathbb{R}$ is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metrizable-space]], [[def-metric-ball]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L7] $I$ is a compact subset of $\mathbb{R}$ and the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the topology of compact convergence ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-topology-of-compact-convergence]], fact (U4), [[def-metric-ball]], [[def-metric-topology]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L6] A subset of a metric space is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L1] A subset of a metric space is open exactly when each of its points has a ball around it inside the set; balls are as in [[def-metric-ball]] ([[def-metric-topology]], [[def-metrizable-space]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L2] A union of two closed subsets of a metric space is closed, its complement being an intersection of two open sets; iterating covers any finite list, and $\varnothing$ is closed ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).
- [L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- [L1] $\bar B(x,r)$ is closed in $(X,d)$ for every real $r > 0$, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).
- [L6] A set $N$ is a neighbourhood of $x$ exactly when there is a real $s > 0$ with $B(x,s) \subseteq N$, the balls around $x$ being a neighbourhood base there ([[def-neighbourhood-top]], [[def-metric-topology]]).

### `lem-polygonally-reachable-set-is-clopen` (published-backward, page the-topology-of-euclidean-space)

Title: The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$

- [L1] Every point of an open set in a metric topology has an open metric ball contained in that set ([[def-metric-topology]], [[def-metric-ball]]).

### `lem-pseudocompact-euclidean-subset-is-closed` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is closed

- [L2] Euclidean open sets are the sets that contain a Euclidean ball about each of their points ([[def-metric-topology]], [[lem-metrics-on-rn]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Z, \mathcal{T}_Z)$ be

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L3] $\mathcal{T}_{\mathrm{u}}$ is the metric topology on $C(X,Y)$ of the restriction of $\bar\rho$, whose balls are the traces $B_{\bar\rho}(g,\delta) \cap C(X,Y)$; balls are open and $g \in B_{\bar\rho}(g,\delta)$ ([[def-topology-of-uniform-convergence]], [[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]]).
- [L6] A subset $V \subseteq Y$ is open exactly when each of its points has a ball around it inside $V$ ([[def-metric-topology]], [[def-metric-ball]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L5] A subset of a metric space is open exactly when each of its points has a ball around it inside the subset ([[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L5] A subset $W \subseteq X$ is open exactly when each of its points has a ball around it inside $W$; balls are open; $B(x,r) \subseteq \bar B(x,r)$; and $\bar B(x,r) \subseteq B(x,s)$ whenever $0 < r < s$ ([[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- ([[def-metric-topology]], [[def-metrizable-space]]), let $Z$ and $Y$ be

### `thm-metric-countability-equivalences` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf

- **Given:** A metric inducing the topology of $X$ ([[def-metrizable-space]], [[def-metric-topology]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- ([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
- [L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- ([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
- [L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).
- [L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).
