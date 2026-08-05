# Citation-precision audit — everything that cites `lem-distance-to-set-is-lipschitz`

## The target, as it actually stands on disk

`items/lem-distance-to-set-is-lipschitz.md` — lemma — $|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## The 5 citing use(s), quoted verbatim from the citing items

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L1] In a metric space every nonempty closed set $A$ satisfies $A = Z(d(\cdot,A))$ and $A = \bigcap_n \{x : d(x,A) < 1/(n+1)\}$, and $d(\cdot,A)$ is continuous ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], claims 1 and 2, [[lem-distance-to-set-is-lipschitz]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).
- - **The bump function is built from a distance and needs no maximum or truncation.** Taking $g(s) = (2/\eta)\,d(s,A)$ with $A$ the set of rationals at distance at least $\eta$ from $q$ makes $g$ Lipschitz by [[lem-distance-to-set-is-lipschitz]] alone, vanish on $A$ and hence on $K$, and take a value at least $2$ at $q$. Nothing about its exact shape matters.

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).
