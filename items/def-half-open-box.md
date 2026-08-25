---
id: def-half-open-box
kind: definition
title: "Half-open boxes in $\\mathbb{R}^n$ and their volume"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, def-interval, lem-metrics-on-rn]
justified_by: []
aliases: []
landmark: true
short: "half-open box"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Fix $n \in \mathbb{N}$ with $n \ge 1$ and let $\mathbb{R}^n$ be the set of
functions $n \to \mathbb{R}$, writing $x_i := x(i)$ for $i < n$
([[lem-metrics-on-rn]]). A **parameter** is a function $n \to
\overline{\mathbb{R}}$, where $\overline{\mathbb{R}} = \mathbb{R} \cup
\{-\infty, +\infty\}$ carries the total order of [[def-extended-reals]]. For a
pair $(a,b)$ of parameters set

$$B(a,b) \;:=\; \{\, x \in \mathbb{R}^n \;:\; a_i < x_i \le b_i \ \text{ for every } i < n \,\},$$

both comparisons taken in $\overline{\mathbb{R}}$. A **half-open box** is a set
of this form. For a single $u \in \overline{\mathbb{R}}$ write $\mathbf{u}$ for
the constant parameter with value $u$, and abbreviate
$(u,v]^n := B(\mathbf{u}, \mathbf{v})$; thus $\mathbb{R}^n = (-\infty,+\infty]^n$
and $(0,1]^n$ is the **unit cube**. At $n = 1$, and for real $a_0 < b_0$, the box
$B(a,b)$ is the half-open interval $(a_0,b_0]$ of [[def-interval]].

**A box is nonempty exactly when $a_i < b_i$ for every $i < n$.** If some
$a_i \ge b_i$ then no real $x_i$ satisfies both $a_i < x_i$ and $x_i \le b_i$, by
transitivity of the order, so $B(a,b) = \varnothing$. Conversely suppose
$a_i < b_i$ for every $i$. Then in each coordinate some real $t$ satisfies
$a_i < t \le b_i$: if $b_i \in \mathbb{R}$ take $t := b_i$, which is $> a_i$; if
$b_i = +\infty$ then $a_i \ne +\infty$, so take $t := a_i + 1$ when $a_i$ is real
and $t := 0$ when $a_i = -\infty$. Assembling one such $t$ in each coordinate
gives a point of $B(a,b)$; the assembly is a definition by cases on finitely many
coordinates and selects nothing.

**The parameters of a nonempty box are determined by the set.** Let
$B := B(a,b) \ne \varnothing$, fix $i < n$ and put
$S_i := \{\, x_i : x \in B \,\}$. Then $S_i = \{\, t \in \mathbb{R} : a_i < t \le b_i \,\}$:
the inclusion $\subseteq$ is the defining condition, and for $\supseteq$ take any
$y \in B$ and replace its $i$-th coordinate by $t$, which leaves every other
defining inequality untouched. Now $b_i = +\infty$ exactly when $S_i$ has no
upper bound in $\mathbb{R}$, and otherwise $b_i$ is the greatest element of
$S_i$; likewise $a_i = -\infty$ exactly when $S_i$ has no lower bound in
$\mathbb{R}$, and otherwise $a_i$ is the greatest lower bound of $S_i$ in
$\mathbb{R}$. So $B$ determines $a_i$ and $b_i$ for every $i$, and hence
determines $(a,b)$.

**Volume.** For a half-open box $B$ define $\operatorname{vol}(B) \in
[0,+\infty] \subseteq \overline{\mathbb{R}}$ by

- $\operatorname{vol}(\varnothing) := 0$;
- if $B \ne \varnothing$, with its unique parameter pair $(a,b)$, then
  $\operatorname{vol}(B) := +\infty$ when $a_i = -\infty$ or $b_i = +\infty$ for
  some $i < n$, and
  $$\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$$
  when every $a_i$ and every $b_i$ is real.

The product is the finite product of [[def-finite-sum]]. In the last clause every
factor $b_i - a_i$ is a strictly positive real, since $a_i < b_i$ in
$\mathbb{R}$, so the product is a strictly positive real ([[lem-finite-sum-laws]],
claim 6) and in particular no factor is $0$ and no product of the form
$0 \cdot (\pm\infty)$ is ever formed. That is what the case split buys: a box
with a degenerate side is **empty**, not a box of volume $0$ with an infinite
side. So $\operatorname{vol}$ is a total function on the half-open boxes with
values in $[0,+\infty]$, and $\operatorname{vol}(\mathbb{R}^n) = +\infty$,
$\operatorname{vol}\big((0,1]^n\big) = 1$.

**Agreement with the published rectangle volume.** For real parameters with
$a_i < b_i$ for every $i < n$, the closed rectangle $[a,b]$ of
[[def-multidimensional-rectangle-and-volume]] has
$\operatorname{vol}[a,b] = \prod_{j<n}(b_j-a_j)$, which is the value assigned
above to $B(a,b)$. The two notions of volume therefore agree wherever both are
written, and no second notion of volume is introduced.

## Remarks

- **Why the upper face and not the lower one.** The published
  [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]] already fixes
  this library's half-open box as $\prod_{i<n}(a_i,b_i]$, in its Statement. The
  choice is a convention, but having two conventions for one phrase is not, so
  the published one is kept.

- **Why the parameters are allowed to be infinite.** With real parameters only,
  every finite union of half-open boxes is a bounded set, so $\mathbb{R}^n$ would
  not be one and the family would be closed under difference but not under
  complement. Admitting $-\infty$ and $+\infty$ as parameters makes
  $\mathbb{R}^n = (-\infty,+\infty]^n$ a box, and it is what makes
  [[prop-elementary-sets-form-an-algebra]] an algebra rather than a ring.

- **Half-open, and not closed, for a second reason.** Two closed rectangles that
  share a face are not disjoint, so a decomposition of a rectangle into closed
  pieces is disjoint only up to boundaries. Half-open boxes tile exactly: the
  cells of a coordinate grid are pairwise disjoint with union the whole box
  ([[lem-box-volume-is-additive-over-grid-subdivisions]]), and no boundary
  bookkeeping is needed anywhere below.
