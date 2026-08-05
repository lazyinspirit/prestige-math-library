# Citation-precision audit — everything that cites `thm-metric-closure-characterisation`

## The target, as it actually stands on disk

`items/thm-metric-closure-characterisation.md` — theorem — The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## The 4 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L2] For nonempty $S \subseteq X$, $\overline{S} = \{\, x \in X : d(x,S) = 0 \,\}$ ([[thm-metric-closure-characterisation]], claim 1).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).
- [L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).
