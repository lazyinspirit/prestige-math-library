# Citation-precision audit — everything that cites `thm-continuity-characterisations-top`

## The target, as it actually stands on disk

`items/thm-continuity-characterisations-top.md` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

#### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## The 10 citing use(s), quoted verbatim from the citing items

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- ([[thm-continuity-characterisations-top]], clause (c)).
- ([[thm-continuity-characterisations-top]], clause (b)). Clearly
- ([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `prop-continuous-image-density-and-lindelof-degree` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, a continuous surjection does not increase density or Lindelöf degree

- [L1] A continuous map has open preimages of open sets ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L2] $f^{-1}[W]$ is open in $X$ for every open $W$ in the target ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

### `thm-continuity-characterised-by-nets` (published-backward, page nets-and-filters)

Title: A map of topological spaces is continuous at a point if and only if it preserves every net converging to that point

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L1] A map $h$ into $Y$ is continuous exactly when for every point $p$ of its domain and every open $V \subseteq Y$ with $h(p) \in V$ there is an open $U$ of the domain with $p \in U$ and $h[U] \subseteq V$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).
- [L7] $f \in C(X,Y)$ is continuous, so $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L3] A constant map into a topological space is continuous, the preimage of an open set being the whole domain or the empty set, both open ([[thm-continuity-characterisations-top]], clause (b), [[def-topological-space]]).
- [L4] The identity map of a topological space is continuous, being its own preimage assignment ([[thm-continuity-characterisations-top]], clause (b)).
- [L5] Continuity may be checked on a subbasis: $h$ is continuous exactly when $h^{-1}[S]$ is open for every member $S$ of a subbasis of the target ([[thm-continuity-characterisations-top]], clause (d), [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).
- [L9] $f$ is continuous, so $f^{-1}[V]$ is open in $X \times Z$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b)).

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- [L4] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1); and continuity is preimages of open sets being open ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L1] $h : X \to Y$ is continuous at $a$ exactly when for every open $V \subseteq Y$ with $h(a) \in V$ there is an open $U \subseteq X$ with $a \in U$ and $h[U] \subseteq V$; and $h$ is continuous exactly when it is continuous at every point ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-neighbourhood-top]]).
