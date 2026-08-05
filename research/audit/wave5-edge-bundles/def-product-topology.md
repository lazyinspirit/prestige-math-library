# Citation-precision audit — everything that cites `def-product-topology`

## The target, as it actually stands on disk

`items/def-product-topology.md` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

#### Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## The 23 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- ([[def-product-topology]]) and passing to a subspace
- [A2] For a binary product the basic product-open sets are exactly the boxes $P \times Q$ with $P$ and $Q$ open, and the boxes $P_0 \times Q_0$ with $P_0$, $Q_0$ basic in the factors also form a basis: given $(x,y) \in P \times Q$, basic $P_0 \ni x$ inside $P$ and $Q_0 \ni y$ inside $Q$ give $(x,y) \in P_0 \times Q_0 \subseteq P \times Q$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- the domain carrying the product topology ([[def-product-topology]]) of the
- entries ([[def-product-topology]]), so $e$ is defined on all of

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- ([[def-product-topology]]). Unwinding that definition, an element of $Y^{X}$ is a
- purely the product topology of [[def-product-topology]].
- ([[def-product-topology]]). It is not used here: the topology of pointwise
- ([[def-product-topology]]). For $Y$ empty and $X$ nonempty, $Y^{X}$ is empty.

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- topology ([[def-product-topology]]);
- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L1] A basis characterises its open sets locally, and the products of basic open sets form a basis for the product topology ([[thm-basis-criterion]], [[def-product-topology]]).

### `fs-second-countability-is-arbitrarily-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming choice and countable choice, refuted: arbitrary products of second countable spaces are second countable

- [L1] The two-point discrete space is second countable, and the product topology on the family of those factors is the Cantor cube $2^I$ ([[def-standard-topologies]], [[def-product-topology]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [F1] The half-open intervals $[a,b)$, $a<b$, satisfy the basis criterion, and products of their members form a basis for the product topology ([[def-interval]], [[thm-basis-criterion]], [[def-product-topology]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L4] The subbasic sets of the compact-open topology are $S(K,V) = \{\, f : f[K] \subseteq V \,\}$ for compact $K$ and open $V$, and those of the topology of pointwise convergence on $Y^{X}$ are $\pi_x^{-1}[V] = \{\, f : f(x) \in V \,\}$; finite intersections of subbasic sets form a basis in both cases, and a topology generated by a family is contained in every topology containing that family ([[def-compact-open-topology]], [[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L1] For $x \in X$ and $V \in \mathcal{T}_Y$ the set $\pi_x^{-1}[V] = \{\, g \in Y^{X} : g(x) \in V \,\}$ is open in $Y^{X}$, and the sets $\{\, g \in Y^{X} : g(x_j) \in V_j \text{ for every } j < n \,\}$, for $n \in \mathbb{N}$, points $x_0, \dots, x_{n-1} \in X$ and open $V_0, \dots, V_{n-1} \subseteq Y$, form a basis for the topology of pointwise convergence ([[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[thm-basis-criterion]]).
- - **The corresponding statement for the box topology is false.** A basic box constrains a member of $Y^{X}$ at *every* index at once, so a sequence converging in the box topology must converge in a much stronger sense; the failure of the characteristic property of the box topology is recorded on the page that builds it ([[def-product-topology]]).

### `lem-finite-powers-of-countable-sets-are-countable` (published-backward, page the-topology-of-euclidean-space)

Title: Every finite power of an at most countable set is at most countable

- [L2] The product indexed by $0$ is a one-point set ([[def-product-topology]]).

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- [F1] A condition on finitely many coordinates defines a basic open cylinder ([[def-product-topology]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- product topology ([[def-product-topology]]). Let $K \subseteq X$ be a compact
- [L1] For a two-element index set the basic product-open sets are exactly the boxes: the sets $U \times W$ with $U$ open in $X$ and $W$ open in $Z$ form a basis for the product topology on $X \times Z$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- the set of functions has exactly one element ([[def-product-topology]]) and all

### `thm-cantor-cubes-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every Cantor cube $2^I$ satisfies ccc

- [F1] A basic cylinder specifies values in only finitely many coordinates, and these cylinders form a basis for the product topology ([[def-product-topology]], [[def-standard-topologies]]).

### `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact

- [L4] Basic product neighbourhoods restrict only finitely many coordinates ([[def-product-topology]]).

### `thm-countable-products-of-first-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of first countable spaces is first countable

- [F1] Basic neighbourhoods in the product topology restrict only finitely many coordinates ([[def-product-topology]], [[def-first-countable-top]]).

### `thm-countable-products-of-second-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of second countable spaces is second countable

- [F1] Finite-support boxes whose nontrivial coordinates are basis members form a basis for the product topology ([[def-product-topology]], [[def-second-countable-space]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- ([[def-product-topology]]).
- [L2] For a two-element index set the basic product-open sets are the boxes: $O \times U$ with $O$ open in $C(X,Y)$ and $U$ open in $X$ is open in $C(X,Y) \times X$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- ([[def-product-topology]]). For $z \in Z$ define $F(z) : X \to Y$ by
- [L1] A map $h$ into a product is continuous exactly when each of its components is, the components being the composites with the projections; the projections are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L2] Coordinate projections and the map into a product are continuous as stated by the product universal property ([[thm-product-universal-property]], [[def-product-topology]]).

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L3] The product topology has a basis of finite-coordinate boxes, which for the finite index set $n$ are products of open subsets of $\mathbb R$ ([[def-product-topology]]).

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- product topology ([[def-product-topology]]). Define, for
- [L3] A map into a product is continuous exactly when both its components are, and the projections of a product are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).
- [L5] Two functions with the same domain are equal exactly when they take the same value at every point of it; an element of $X \times Z$ is determined by its two coordinates ([[def-product-topology]], [[def-injection-surjection-bijection]]).
