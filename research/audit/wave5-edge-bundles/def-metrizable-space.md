# Citation-precision audit — everything that cites `def-metrizable-space`

## The target, as it actually stands on disk

`items/def-metrizable-space.md` — definition — Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not

#### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## The 41 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L3] A map $x \mapsto cx$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and $|cx| = |c||x|$ ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-continuous-map-top]], [[def-abs-value]], [[def-metrizable-space]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $f_k(0) = 0$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$, so $a_k \in I$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[def-metrizable-space]], [[def-metric-space]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-isometry-and-metric-embedding]], [[def-metrizable-space]]).
- [L6] $h : I \to \mathbb{R}$ is continuous at $a$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(t)-h(a)| < \varepsilon$ whenever $t \in I$ and $|t-a| < \delta$ ([[def-metric-continuity]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Y, \mathcal{T}_Y)$ be

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Y,\mathcal{T}_Y)$ be a

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- $(X, \mathcal{T}_d)$ is a topological space ([[def-metrizable-space]]). A set
- ([[def-metrizable-space]]), and *the metric topology is the topology*: the
- [[def-metrizable-space]] records the agreement of the metric and topological

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- its metric topology ([[def-metric-topology]], [[def-metrizable-space]]), and let
- and of $g$ at $a$ ([[def-metric-continuity]], [[def-metrizable-space]]) supplies

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- topology is a metrizable space ([[def-metrizable-space]]).
- ([[def-isometry-and-metric-embedding]], [[def-metrizable-space]]). So the two

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- [[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L5] A Lipschitz map is uniformly continuous and hence continuous ([[thm-metric-regularity-hierarchy]], claims 2 and 3, [[def-metric-continuity]], [[def-metrizable-space]]).

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]),

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L6] $(\mathbb{R}, d)$ is complete ([[thm-euclidean-space-complete]], claim 1), and for a nonempty topological domain and a complete metric target $C(X,Y)$ is complete in the uniform metric ([[thm-function-space-is-complete-for-a-complete-target]], claim 2, [[thm-uniform-limit-theorem]], [[def-topology-of-uniform-convergence]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-space]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and a restriction to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-metrizable-space]], [[def-metric-space]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L2] A subset of $\mathbb{R}$ is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metrizable-space]], [[def-metric-ball]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- ([[def-metrizable-space]]).
- [L6] A metrizable space is Hausdorff, so a space that is not Hausdorff is not metrizable ([[def-metrizable-space]]).
- - **The discrete space is metrizable and the indiscrete one is not.** [[def-metrizable-space]] records the second, the failure of the Hausdorff condition being an obstruction to metrizability; the first is not needed here, since every axiom was verified directly rather than quoted from the metric theorems of the main page.

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).
- [L3] $\varepsilon$-$\delta$ continuity of a map of metric spaces, and its agreement with continuity of the corresponding map of topological spaces ([[def-metric-continuity]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-space]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L6] A subset of a metric space is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- ([[def-metrizable-space]]).
- [L1] A subset of a metric space is open exactly when each of its points has a ball around it inside the set; balls are as in [[def-metric-ball]] ([[def-metric-topology]], [[def-metrizable-space]]).
- [L5] A metrizable space is first countable ([[def-metrizable-space]], [[def-first-countable-top]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- - **What a countability hypothesis would change is not settled here.** Whether adding first countability to the hypothesis rescues the claim is a question this library does not address, and nothing above asserts an answer. What *is* recorded is the metrizable case, where limits are unique and the space is Hausdorff for reasons independent of each other ([[def-sequence-convergence-top]], [[def-metrizable-space]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).
- [L2] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $x \in U$ has $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claim 3, [[def-metrizable-space]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- ([[def-metric-topology]], [[def-metrizable-space]]), let $(Z, \mathcal{T}_Z)$ be

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- it is made through [[def-metrizable-space]]: the metric topology *is* the
- ([[def-metrizable-space]]), and where it is not metric nothing here needs it. And

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- function outright ([[def-metrizable-space]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L9] The minimum of a two-element set of reals exists and is one of the two elements; balls are open and $y \in B(y,s)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L3] $\mathcal{T}_{\mathrm{u}}$ is the metric topology on $C(X,Y)$ of the restriction of $\bar\rho$, whose balls are the traces $B_{\bar\rho}(g,\delta) \cap C(X,Y)$; balls are open and $g \in B_{\bar\rho}(g,\delta)$ ([[def-topology-of-uniform-convergence]], [[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]]).

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

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

- Consequently every metrizable space ([[def-metrizable-space]]) is **completely
- - **The corresponding statement for $\mathbb{R}$ needs no new proof.** $\mathbb{R}$ with its usual topology is metrizable by the usual metric ([[def-metrizable-space]]), so it is completely normal, and so is every $\mathbb{R}^n$ and every subspace of a metrizable space.

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- 4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
- [L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).
- [L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).
- - **What this does *not* prove.** It says nothing about which non-metrizable spaces are perfectly normal, and it gives no metrization theorem in the other direction: exhibiting a metric is the only way a space is shown metrizable here ([[def-metrizable-space]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-the-separation-implication-chain` (published-backward, page separation-axioms)

Title: The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them

- [L8] Every metrizable space is Tychonoff and perfectly normal, and hence satisfies every axiom named in clause 6 ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], [[def-metrizable-space]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).
