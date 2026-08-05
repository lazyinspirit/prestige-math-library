# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `def-equivalent-metrics`

## The target, as it actually stands on disk

`items/def-equivalent-metrics.md` — definition — Topologically, uniformly and Lipschitz equivalent metrics on a set

#### Definition

Let $X$ be a set and let $d$ and $d'$ both be metrics on $X$
([[def-metric-space]]). Note that the underlying set is the same; nothing below
compares metrics on different sets.

- $d$ and $d'$ are **topologically equivalent** if they have the same metric
  topology ([[def-metric-topology]]):
  $$\mathcal{T}_d = \mathcal{T}_{d'} .$$
- $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$
  there are reals $\delta > 0$ and $\delta' > 0$ such that, for all
  $x, y \in X$,
  $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon .$$
- $d$ and $d'$ are **Lipschitz equivalent** if there are reals
  $\alpha, \beta > 0$ with
  $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X .$$

**What the middle condition says in words.** It is the statement that both
identity maps $\mathrm{id} : (X,d) \to (X,d')$ and
$\mathrm{id} : (X,d') \to (X,d)$ are *uniformly* continuous: the same $\delta$
works at every pair of points, not merely at each point separately as in
[[def-metric-continuity]]. Uniform continuity has no definition of its own at
this point in the reading order, so the condition is written out in full above;
a later page defines it, and until then this write-out is what earlier pages
quote.

**Each of the three is an equivalence relation on the metrics on $X$.**
Reflexivity is immediate ($\delta = \varepsilon$, and $\alpha = \beta = 1$);
symmetry is built into the statements, the uniform one being symmetric by
construction and the Lipschitz one because
$\alpha d \le d' \le \beta d$ gives $\beta^{-1} d' \le d \le \alpha^{-1} d'$;
and transitivity follows by composing the $\delta$s and multiplying the
constants.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- ([[def-equivalent-metrics]]). Read *uniformly convergent* as an abbreviation for

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]);
- [L5] Uniform equivalence of two metrics on one set, and the implication uniform $\Rightarrow$ topological ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]], claim 2).


---

# Citation-precision audit — everything that cites `def-complete-metric-space`

## The target, as it actually stands on disk

`items/def-complete-metric-space.md` — definition — Complete metric space: every Cauchy sequence converges in the space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
([[def-cauchy-in-metric]]) converges to a point of $X$
([[def-metric-convergence]]).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of [[fs-completeness-is-a-topological-property]] and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[def-complete-metric-space]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- ([[def-complete-metric-space]]) and let $\bar\rho$ be the uniform metric on
- [L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).
- - **Completeness is a property of the metric, not of the topology** ([[def-complete-metric-space]]), and the metric here is $\bar\rho$, built from the truncation $\bar d = \min\{d,1\}$. A different metric inducing the same topology on $Y$ need not make $Y$ complete, and then nothing above applies; the hypothesis is that $(Y,d)$ itself is complete.


---

# Citation-precision audit — everything that cites `def-metric-uniform-continuity`

## The target, as it actually stands on disk

`items/def-metric-uniform-continuity.md` — definition — Uniform continuity of a map of metric spaces: one $\\delta$ serving every point

#### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function.

$f$ is **uniformly continuous** if for every real $\varepsilon > 0$ there is a
real $\delta > 0$ such that

$$d_X(x,x') < \delta \;\Longrightarrow\; d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for all } x, x' \in X .$$

**The whole content is in the quantifier order.** Continuity at a point $a$
allows $\delta$ to depend on $\varepsilon$ *and on $a$*
([[def-metric-continuity]]); uniform continuity demands one $\delta$ that works
for every pair of points at once. Written with the quantifiers in order,
continuity on $X$ is
$\forall \varepsilon\, \forall a\, \exists \delta\, \forall x$ and uniform
continuity is $\forall \varepsilon\, \exists \delta\, \forall a\, \forall x$;
moving $\exists \delta$ to the left is the entire difference, and it is a
strictly stronger condition.

**Uniform continuity is a property of the triple $(d_X, d_Y, f)$.** Both metrics
are named, and neither may be replaced by a merely topologically equivalent one
without changing the notion.

**This definition was promised earlier and is now discharged.**
[[def-metric-continuity]] records that uniform continuity is not defined there,
and [[def-equivalent-metrics]] writes the condition out in full for the identity
maps of two metrics on one set rather than naming it. With the definition above,
*uniform equivalence* of $d$ and $d'$ says exactly that
$\mathrm{id} : (X,d) \to (X,d')$ and $\mathrm{id} : (X,d') \to (X,d)$ are both
uniformly continuous, which is how that condition is read from here on.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- ([[def-metric-uniform-continuity]]); uniform equicontinuity demands one $\delta$
- ([[def-metric-continuity]], [[def-metric-uniform-continuity]]).

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L2] A family $\mathcal{F}$ is uniformly equicontinuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(x')| < \varepsilon$ for every $f \in \mathcal{F}$ and all $x,x'$ with $d(x,x') < \delta$; and $\mathcal{F}$ is pointwise bounded when each set $\{\, f(x) : f \in \mathcal{F} \,\}$ is bounded ([[def-equicontinuity]], [[def-metric-uniform-continuity]], [[def-metric-bounded-diameter]]).


---

# Citation-precision audit — everything that cites `def-monotone-sequence`

## The target, as it actually stands on disk

`items/def-monotone-sequence.md` — definition — Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

#### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-dini-on-the-unit-interval` (cross-batch, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L6] Dini's theorem: on a compact metric space a sequence of continuous real functions with $g_k \le g_{k+1}$ pointwise, converging pointwise to a continuous $g$, converges to $g$ uniformly ([[thm-dini]], [[def-monotone-sequence]], [[thm-monotone-convergence]]).

### `thm-dini` (cross-batch, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- ([[def-monotone-sequence]]). Suppose further that $f_k(x) \to f(x)$ for every
- [L1] A sequence of reals with $x_k \le x_{k+1}$ for every $k$ is nondecreasing, that is $x_j \le x_m$ whenever $j \le m$ ([[def-monotone-sequence]]).
