# Citation-precision audit — everything that cites `def-interval`

## The target, as it actually stands on disk

`items/def-interval.md` — definition — Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

#### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## The 24 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (cross-batch, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (cross-batch, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the spikes $f_k$ displayed above and the family $\mathcal{F} = \{\, f_k : k \in \mathbb{N} \,\}$.

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (cross-batch, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the ramps $r_k$ and the indicator $\chi$ displayed above.

### `def-completely-regular-and-tychonoff-spaces` (cross-batch, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- $\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],

### `def-g-delta-and-f-sigma-in-a-topological-space` (cross-batch, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,

### `def-polygonal-path-and-polygonal-connectedness` (cross-batch, page the-topology-of-euclidean-space)

Title: Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

- Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

### `def-zero-sets-and-cozero-sets` (cross-batch, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
- $\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],

### `ex-cardinal-functions-of-the-lower-limit-line` (cross-batch, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (cross-batch, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- - **$A = [0,1]$** ([[def-interval]]). Here
- [L4] $[0,1] = \{\, t : 0 \le t \le 1 \,\}$ and $(u,v) = \{\, t : u < t < v \,\}$; a two-element set of reals has a minimum ([[def-interval]], [[def-max-min]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (cross-batch, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

### `ex-dini-on-the-unit-interval` (cross-batch, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- **Given:** $I = [0,1]$ with $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the reals $a_k = 1/\iota(k+2)$, the functions $s_k$ displayed above, and the identity $\mathrm{id}_I$ of $I$.

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (cross-batch, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[def-interval]], [[def-canonical-natural]]). Then:

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (cross-batch, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

### `ex-the-exponential-law-worked-on-the-line` (cross-batch, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- **Given:** $\mathbb{R}$ with $d(s,t) = |s-t|$; the product $\mathbb{R} \times \mathbb{R}$ with the product topology; the map $f(x,z) = xz$ and its transpose $F$; and for a natural $m \ge 1$ the interval $[-m,m] = \{\, t : -\iota(m) \le t \le \iota(m) \,\}$ ([[def-interval]], [[def-canonical-natural]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (cross-batch, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-lindelofness-is-productive` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (cross-batch, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.

### `fs-separability-is-hereditary` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [F1] The half-open intervals $[a,b)$, $a<b$, satisfy the basis criterion, and products of their members form a basis for the product topology ([[def-interval]], [[thm-basis-criterion]], [[def-product-topology]]).

### `fs-separable-spaces-are-second-countable` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-the-compact-open-topology-is-always-metrizable` (cross-batch, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L9] $(-1,1) = \{\, t \in \mathbb{R} : -1 < t < 1 \,\}$ is open in $\mathbb{R}$ and contains $0$ but not $2$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

### `fs-the-evaluation-map-is-always-continuous` (cross-batch, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- **Given:** The rationals $\mathbb{Q}$ inside $\mathbb{R}$ with the metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $\mathbb{R}$ with the same metric, the constant function $z : \mathbb{Q} \to \mathbb{R}$ with value $0$, and the open interval $V := (-1,1)$ ([[def-interval]]).
- [L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (cross-batch, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- the bounded open intervals of $\mathbb{R}$ ([[def-interval]]) together with those
- [A1] $(a,b) = \{\, t \in \mathbb{R} : a < t < b \,\}$, and for $a < b$ the midpoint satisfies $a < (a+b)/2 < b$, so $(a,b) \ne \varnothing$ ([[def-interval]]).

### `thm-completely-regular-implies-regular` (cross-batch, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).
- [L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (cross-batch, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).
