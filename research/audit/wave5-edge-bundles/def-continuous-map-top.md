# Citation-precision audit — everything that cites `def-continuous-map-top`

## The target, as it actually stands on disk

`items/def-continuous-map-top.md` — definition — Continuity of a map of topological spaces at a point and globally

#### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## The 27 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L3] A map $x \mapsto cx$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and $|cx| = |c||x|$ ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-continuous-map-top]], [[def-abs-value]], [[def-metrizable-space]]).

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L3] A continuous map pulls back open sets to open sets, and compactness means that every open cover has a finite subcover ([[def-continuous-map-top]], [[def-compact-space]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[def-continuous-map-top]]). For a compact subset $K \subseteq X$

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- $f : X \to [0,1]$ ([[def-continuous-map-top]]) with

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- target ([[def-continuous-map-top]]), and $C(X,Y)$ carries several topologies on

### `def-pseudocompact-space` (published-backward, page the-topology-of-euclidean-space)

Title: Pseudocompact space: every continuous real-valued function has bounded image

- A topological space $X$ is **pseudocompact** when every continuous map $f:X\to\mathbb{R}$ ([[def-continuous-map-top]]) has bounded image: there are reals $\ell,u$ with $\ell\le f(x)\le u$ for every $x\in X$ ([[def-bounded-set]]).

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- $C(X,Y)$ be the set of continuous maps $X \to Y$ ([[def-continuous-map-top]]).

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- ([[def-continuous-map-top]]). The **topology of pointwise convergence on

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- convergence on $C(X,Y)$** ([[def-continuous-map-top]]) is the subspace topology

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- ([[def-continuous-map-top]]) put

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L6] $(\mathbb{R}, d)$ is complete ([[thm-euclidean-space-complete]], claim 1), and for a nonempty topological domain and a complete metric target $C(X,Y)$ is complete in the uniform metric ([[thm-function-space-is-complete-for-a-complete-target]], claim 2, [[thm-uniform-limit-theorem]], [[def-topology-of-uniform-convergence]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-space]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L6] $(X,d)$ is locally compact when every point has a compact set containing a ball around it ([[def-locally-compact-metric-space]]); and evaluation is then continuous ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]], [[def-evaluation-map]], [[def-continuous-map-top]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L3] $\varepsilon$-$\delta$ continuity of a map of metric spaces, and its agreement with continuity of the corresponding map of topological spaces ([[def-metric-continuity]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-space]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L2] A map out of a space in which every subset is open is continuous, every preimage being open ([[def-continuous-map-top]], [[def-standard-topologies]], [[def-topological-space]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `prop-continuous-image-density-and-lindelof-degree` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, a continuous surjection does not increase density or Lindelöf degree

- [L1] A continuous map has open preimages of open sets ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- ([[def-continuous-map-top]]). Then the compact-open topology

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L2] $f^{-1}[W]$ is open in $X$ for every open $W$ in the target ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

### `thm-continuity-characterised-by-nets` (published-backward, page nets-and-filters)

Title: A map of topological spaces is continuous at a point if and only if it preserves every net converging to that point

- [A1] $f$ is continuous at $p$ exactly when every neighbourhood $V$ of $f(p)$ has $f^{-1}[V]$ as a neighbourhood of $p$ ([[def-continuous-map-top]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L1] A map $h$ into $Y$ is continuous exactly when for every point $p$ of its domain and every open $V \subseteq Y$ with $h(p) \in V$ there is an open $U$ of the domain with $p \in U$ and $h[U] \subseteq V$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).
- [L7] $f \in C(X,Y)$ is continuous, so $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L9] $f$ is continuous, so $f^{-1}[V]$ is open in $X \times Z$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b)).

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- [L4] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1); and continuity is preimages of open sets being open ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- Then $f$ is continuous ([[def-continuous-map-top]]).
- [L1] $h : X \to Y$ is continuous at $a$ exactly when for every open $V \subseteq Y$ with $h(a) \in V$ there is an open $U \subseteq X$ with $a \in U$ and $h[U] \subseteq V$; and $h$ is continuous exactly when it is continuous at every point ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-neighbourhood-top]]).
