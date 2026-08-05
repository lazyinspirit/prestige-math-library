# Citation-precision audit — everything that cites `def-metric-ball`

## The target, as it actually stands on disk

`items/def-metric-ball.md` — definition — Open ball, closed ball and sphere in a metric space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## The 31 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-open-bounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The open unit ball in $\\mathbb{R}^n$ is bounded and not compact

- [L3] The open ball $B_2(0,1)$ consists of the points of Euclidean distance less than $1$ from $0$, and metric balls form neighbourhoods in the metric topology ([[def-metric-ball]], [[def-metric-topology]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L3] A family $\mathcal{F}$ is pointwise bounded when for each $t$ the set $\{\, f(t) : f \in \mathcal{F} \,\}$ lies in some ball of the target, and equicontinuous at $a$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(t)-f(a)| < \varepsilon$ for every $f \in \mathcal{F}$ and every $t$ with $|t-a| < \delta$ ([[def-equicontinuity]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-continuity]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L6] $h : I \to \mathbb{R}$ is continuous at $a$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(t)-h(a)| < \varepsilon$ whenever $t \in I$ and $|t-a| < \delta$ ([[def-metric-continuity]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

### `cor-components-of-open-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected

- [L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, the segment is continuous, and every path-connected space is connected ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).

### `cor-rn-is-polygonally-connected-and-locally-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected

- [L2] Euclidean balls are open and every open neighbourhood contains a Euclidean ball about its point ([[def-metric-ball]], [[def-metric-topology]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[def-metric-ball]]), and $S(K,V)$ is the set defined above. The two are never

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-euclidean-spheres-and-closed-balls` (published-backward, page the-topology-of-euclidean-space)

Title: Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$

- These are respectively the **Euclidean closed ball** and **Euclidean sphere** with centre $c$ and radius $r$. They carry the subspace topology inherited from $\mathbb{R}^n$ ([[def-subspace-topology-top]]). Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely the closed ball and sphere $\bar B(c,r)$ and $S(c,r)$ of the metric-space definition ([[def-metric-ball]]).

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- [[def-metric-ball]] and compact subsets as in [[def-metric-compactness]].

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- $B_{\bar\rho}(f,\varepsilon)$ ([[def-metric-ball]]), and $Y^{X}$ with this

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

### `ex-open-euclidean-ball-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The straight segment between two points of an open Euclidean ball stays in the ball

- So the segment from $x$ to $y$ stays in the ball. By [[lem-euclidean-polygonal-paths-are-continuous]] it is a polygonal path, and $B_2(c,r)$ is polygonally connected in the sense of [[def-polygonal-path-and-polygonal-connectedness]]. The norm and ball conventions are those of [[def-norm-and-normed-space]] and [[def-metric-ball]].

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).
- [L2] A subset of $\mathbb{R}$ is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metrizable-space]], [[def-metric-ball]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L3] $\varepsilon$-$\delta$ continuity of a map of metric spaces, and its agreement with continuity of the corresponding map of topological spaces ([[def-metric-continuity]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-space]]).

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

- [L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- 1. $\bar B(x,r)$ is a compact subset of $X$ ([[def-metric-ball]],
- **Given:** A locally compact metric space $(X,d)$ and a point $x \in X$; balls $B(x,r)$ and $\bar B(x,r)$ as in [[def-metric-ball]].
- [L5] $B(x,s) \subseteq \bar B(x,s)$, and $0 < s \le t$ gives $B(x,s) \subseteq B(x,t)$ and $\bar B(x,s) \subseteq \bar B(x,t)$; moreover $\bar B(x,s) \subseteq B(x,t)$ whenever $0 < s < t$, since $d(x,y) \le s < t$ ([[def-metric-ball]]).

### `lem-polygonally-reachable-set-is-clopen` (published-backward, page the-topology-of-euclidean-space)

Title: The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$

- [L1] Every point of an open set in a metric topology has an open metric ball contained in that set ([[def-metric-topology]], [[def-metric-ball]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L4] $g_k \to g$ in a metric space means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with the distance from $g_k$ to $g$ below $\varepsilon$ for every $k \ge K$; and the test with a **real** $\varepsilon > 0$ is equivalent, since below every positive real lies a positive rational ([[def-metric-convergence]], [[lem-rat-embeds-dense]], [[def-metric-ball]]).

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- $S(x,r)$ of [[def-metric-ball]]; no sphere is written on this page.

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).
- [L9] The minimum of a two-element set of reals exists and is one of the two elements; balls are open and $y \in B(y,s)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

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

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L4] $x_k \to p$ in a metric space means: for every real $\varepsilon > 0$ there is $K$ with the distance from $x_k$ to $p$ below $\varepsilon$ for every $k \ge K$ ([[def-metric-convergence]], [[def-metric-ball]], [[lem-rat-embeds-dense]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L4] $x \in B(x,r)$ for every $r > 0$, and $y \in B(x,r)$ means $d(x,y) < r$ ([[def-metric-ball]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).
