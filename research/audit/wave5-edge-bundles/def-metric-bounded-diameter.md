# Citation-precision audit — everything that cites `def-metric-bounded-diameter`

## The target, as it actually stands on disk

`items/def-metric-bounded-diameter.md` — definition — Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L4] The empty set is open, so the whole space is closed; a metric subset is bounded exactly when it lies in some ball about some centre ([[def-topological-space]], [[def-metric-bounded-diameter]]).

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L3] A family $\mathcal{F}$ is pointwise bounded when for each $t$ the set $\{\, f(t) : f \in \mathcal{F} \,\}$ lies in some ball of the target, and equicontinuous at $a$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(t)-f(a)| < \varepsilon$ for every $f \in \mathcal{F}$ and every $t$ with $|t-a| < \delta$ ([[def-equicontinuity]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-continuity]]).

### `cor-euclidean-closed-balls-and-spheres-are-compact` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, every Euclidean closed ball and every Euclidean sphere of positive radius is compact

- [L4] Euclidean open sets are the metric-open sets, and metric boundedness means containment in a ball ([[def-metric-topology]], [[def-metric-bounded-diameter]]).

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- $Y$ ([[def-metric-bounded-diameter]]).

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- $\varphi_A(x) := d(x,A)$ ([[def-metric-bounded-diameter]]) belongs to
- [L2] A family $\mathcal{F}$ is uniformly equicontinuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(x')| < \varepsilon$ for every $f \in \mathcal{F}$ and all $x,x'$ with $d(x,x') < \delta$; and $\mathcal{F}$ is pointwise bounded when each set $\{\, f(x) : f \in \mathcal{F} \,\}$ is bounded ([[def-equicontinuity]], [[def-metric-uniform-continuity]], [[def-metric-bounded-diameter]]).
- [L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).
- [L4] A subset $S \subseteq \mathbb{R}$ is bounded exactly when it lies in some ball of $\mathbb{R}$, so an unbounded set of reals lies in no ball ([[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]]).

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- ([[def-metric-bounded-diameter]]). Then, as the general metric theorem
- [A1] $d(x,A) = \inf\{\, |x-a| : a \in A \,\}$ exists for nonempty $A$, is a lower bound of that set, and is $\le |x-a|$ for every $a \in A$; and any real that is a lower bound of the set is $\le d(x,A)$ ([[def-metric-bounded-diameter]], [[def-infimum]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L5] $[-m,m]$ is a compact subset of $\mathbb{R}$ for every natural $m \ge 1$, and every compact subset of $\mathbb{R}$ lies in some $[-m,m]$; the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the compact-open topology on $C(\mathbb{R},\mathbb{R})$ ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L5] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

### `lem-pseudocompact-euclidean-subset-is-bounded` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is bounded

- [L3] A subset of a metric space is bounded when it is empty or lies in some open ball ([[def-metric-bounded-diameter]]); a bounded set of reals has an upper bound ([[def-bounded-set]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).
- - **The cases $K = \varnothing$ and $V = Y$ are disposed of first for a reason.** In both, $S(K,V)$ is the whole space and the distance $d(f[K], Y \setminus V)$ is not defined — in the first because there is no point of $K$ to measure from, in the second because $Y \setminus V$ is empty and this library defines the distance to a set only for a nonempty set ([[def-metric-bounded-diameter]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
- [L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).
- - **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).
