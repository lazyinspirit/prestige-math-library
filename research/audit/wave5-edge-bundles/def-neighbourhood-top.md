# Citation-precision audit — everything that cites `def-neighbourhood-top`

## The target, as it actually stands on disk

`items/def-neighbourhood-top.md` — definition — Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

## The 23 citing use(s), quoted verbatim from the citing items

### `def-filter-convergence-and-cluster-point` (published-backward, page nets-and-filters)

Title: Convergence and cluster points of a filter on a topological space

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- [[def-neighbourhood-top]] exactly when some open $U$ satisfies
- [[def-neighbourhood-top]]'s, and it is what makes "compact neighbourhood" a

### `def-net-convergence-and-cluster-point` (published-backward, page nets-and-filters)

Title: Convergence and cluster points of a net in a topological space

- - $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).

### `def-normal-and-t4-spaces` (published-backward, page separation-axioms)

Title: Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

- "disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- ([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open

### `def-t0-and-t1-spaces` (published-backward, page separation-axioms)

Title: $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

- ([[def-neighbourhood-top]]), both conditions may be read with "open
- [[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- a neighbourhood base at $f$** ([[def-neighbourhood-top]]). Indeed a neighbourhood

### `def-urysohn-space` (published-backward, page separation-axioms)

Title: Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

- Equivalently, by [[def-neighbourhood-top]], distinct points have disjoint closed

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- For $x\in X$, the **local character** $\chi(x,X)$ is the least cardinality of a neighbourhood base at $x$ ([[def-neighbourhood-top]]). The **character** is the raw cardinal supremum

### `ex-neighbourhood-indexed-net-converging-to-a-closure-point` (published-backward, page nets-and-filters-examples)

Title: A neighbourhood-indexed net in $A$ converges to each point of $\\overline{A}$

- [L2] Finite intersections of neighbourhoods of $p$ are neighbourhoods ([[def-neighbourhood-top]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[def-neighbourhood-top]]);

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L6] A neighbourhood base at a point is a family of neighbourhoods of it every neighbourhood of which contains a member; an open set containing the point is a neighbourhood of it; and the neighbourhood filter is nonempty ([[def-neighbourhood-top]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- $x$ ([[def-neighbourhood-top]]) consisting of compact sets: every
- [L6] A set $N$ is a neighbourhood of $x$ exactly when there is a real $s > 0$ with $B(x,s) \subseteq N$, the balls around $x$ being a neighbourhood base there ([[def-neighbourhood-top]], [[def-metric-topology]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L2] A set $N$ is a neighbourhood of a point $p$ exactly when there is an open $U$ with $p \in U \subseteq N$; in particular an open set containing $p$ is a neighbourhood of $p$ ([[def-neighbourhood-top]]).
- [L4] If $\mathcal{B}$ is a basis for a topology and $N$ is a neighbourhood of $g$, then there is $B \in \mathcal{B}$ with $g \in B \subseteq N$ ([[def-neighbourhood-top]], [[def-topology-basis-subbasis]]).

### `lem-countable-local-bases-can-be-open-and-decreasing` (published-backward, page countability-axioms-and-cardinal-functions)

Title: A countable local base can be chosen open and decreasing

- [L1] Each neighbourhood of $x$ contains an open neighbourhood of $x$ ([[def-neighbourhood-top]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [L4] The basic sets containing a point form a neighbourhood base at that point, consisting of open sets ([[def-neighbourhood-top]]).

### `lem-regularity-via-closed-neighbourhoods` (published-backward, page separation-axioms)

Title: A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$

- [[def-neighbourhood-top]], so that a neighbourhood need not be open. The
- [L1] $N$ is a neighbourhood of $x$ exactly when some open $W$ satisfies $x \in W \subseteq N$; a set is open exactly when it is a neighbourhood of each of its points ([[def-neighbourhood-top]]).
- - **Clause (c) is what makes a clopen basis decisive.** If a space has a basis of clopen sets then the basic sets containing a point are closed neighbourhoods of it and form a neighbourhood base ([[def-neighbourhood-top]]), so (c) holds and the space is regular with no further work. That is exactly the route by which the ordinal spaces later on this page are shown to be regular.

### `thm-closure-characterised-by-nets` (published-backward, page nets-and-filters)

Title: A point lies in the closure of a set if and only if a net in the set converges to it

- [L2] Finite intersections of neighbourhoods of $p$ are neighbourhoods of $p$ ([[def-neighbourhood-top]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L8] A subset of a topological space is open exactly when it is a neighbourhood of each of its points, that is when each of its points lies in an open set inside it ([[def-neighbourhood-top]], consequence 4).

### `thm-hausdorff-iff-net-limits-are-unique` (published-backward, page nets-and-filters)

Title: A topological space is Hausdorff if and only if every net has at most one limit

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-net-cluster-point-iff-convergent-subnet` (published-backward, page nets-and-filters)

Title: A point is a cluster point of a net if and only if some subnet converges to it

- [A2] Intersections of finitely many neighbourhoods of $p$ are neighbourhoods of $p$ ([[def-neighbourhood-top]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- [L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L1] $h : X \to Y$ is continuous at $a$ exactly when for every open $V \subseteq Y$ with $h(a) \in V$ there is an open $U \subseteq X$ with $a \in U$ and $h[U] \subseteq V$; and $h$ is continuous exactly when it is continuous at every point ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-neighbourhood-top]]).
