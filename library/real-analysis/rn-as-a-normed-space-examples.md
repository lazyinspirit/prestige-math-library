---
page: rn-as-a-normed-space-examples
title: "R^n as a Normed Space; Vector-Valued Functions: Examples and Counterexamples"
status: published
items: []
examples: [cex-mean-value-equality-fails-for-a-vector-valued-function,
           cex-the-mean-value-inequality-is-attained,
           ex-p-norm-comparison-constants-on-r2,
           cex-the-one-norm-comes-from-no-inner-product,
           cex-separately-continuous-not-jointly-continuous,
           ex-componentwise-convergence-and-a-vector-valued-integral-computed,
           ex-steinitz-confinement-worked-in-the-plane,
           ex-gamma-and-its-complement-computed-for-a-plane-series,
           fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space,
           fs-all-norms-on-any-real-vector-space-are-equivalent,
           fs-heine-borel-holds-in-every-normed-space,
           fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension]
---

**A note on the notation $\iota$, which appears throughout this page.** A natural
number here is a von Neumann natural, that is a set, so it is not an element of
$\mathbb{R}$ and cannot be divided into $1$. The canonical natural
$\iota(n) = n\cdot 1_{\mathbb{R}}$ is the real number that $n$ names
([[def-canonical-natural]], [[lem-of-naturals-positive]]), so $1/\iota(k+1)$ is
what an informal text writes as $1/(k+1)$.

**Objective.** Witnesses for
[[rn-as-a-normed-space|the page on $\mathbb{R}^n$ as a normed space]]. Some
compute; the rest show that a hypothesis dropped from a theorem there makes it
false. Two questions run through the page: what the mean value theorem becomes
for a curve, and how much of the one-dimensional rearrangement theory survives.

**The mean value theorem for a curve.**
[[cex-mean-value-equality-fails-for-a-vector-valued-function]] takes
$f(t) = (t^{2},t^{3})$ on $[0,1]$: the displacement is $(1,1)$ and the derivative
is $(2t,3t^{2})$, so the first coordinate forces $\xi = 1/\iota(2)$ and the
second then fails. The equality form of [[cor-mean-value-theorem]] therefore has
no analogue for $m \ge 2$, and [[thm-mean-value-inequality]] is the correct
statement. **The classical witness $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$ is
not used**, the trigonometric functions being introduced later in the reading
order than this page; the substitution is recorded inside the item so that a
reader who knows the classical example is told why it is absent.
[[cex-the-mean-value-inequality-is-attained]] is the positive companion:
$f(t) = (t,0)$ on $[0,1]$ has $\lVert f'\rVert_2 \equiv 1$ and
$\lVert f(1)-f(0)\rVert_2 = 1$, so the inequality is an equality and its constant
cannot be improved. Taken together the two items show that the failure of the
equality **form** is not a failure of the bound.

**Norms on the plane.** [[ex-p-norm-comparison-constants-on-r2]] computes the
comparison chain of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] on
$\mathbb{R}^{2}$ and exhibits a vector attaining each of its four constants:
$e_0$ for the two inner inequalities and $(1,1)$ for the constants $\iota(2)$ and
$\sqrt{\iota(2)}$. [[thm-all-norms-on-rn-are-equivalent]] supplies constants but
no attaining vectors, so sharpness is what this computation adds; the strict
inclusions $B_1 \subset B_2 \subset B_\infty$ of the unit balls are checked as
well. [[cex-the-one-norm-comes-from-no-inner-product]] separates
$\lVert\cdot\rVert_1$ from $\lVert\cdot\rVert_2$ in a way equivalence of norms
cannot see: at $x = e_0$, $y = e_1$ the parallelogram law of
[[thm-cauchy-schwarz-and-the-euclidean-norm]] would read $\iota(8) = \iota(4)$,
so no symmetric bilinear form induces $\lVert\cdot\rVert_1$. The general converse,
that a norm satisfying the parallelogram law comes from an inner product, is
**not** proved here.

**Continuity of a function of two variables.**
[[cex-separately-continuous-not-jointly-continuous]] is the first function on
$\mathbb{R}^{2}$ whose continuity this library studies:
$g(p) = p_0p_1/(p_0^{2}+p_1^{2})$ with $g(0) = 0$.
Each partial function is a rational function with nonvanishing denominator, or
else constantly $0$, hence continuous; but along the diagonal the value is
constantly $1/\iota(2)$, so the sequence $\bigl(1/\iota(k+1),1/\iota(k+1)\bigr)$
tends to the origin while its values do not tend to $g(0)$. Separate continuity
is therefore strictly weaker than continuity in the sense of
[[def-vector-valued-functions-limits-and-continuity]]. The item claims nothing
about $g$ away from the origin.

**Computing with vector-valued objects.**
[[ex-componentwise-convergence-and-a-vector-valued-integral-computed]] verifies a
limit in $\mathbb{R}^{3}$ from the componentwise criterion and computes
$\int_0^1 (1,t,t^{2}) = \bigl(1, 1/\iota(2), 1/\iota(3)\bigr)$ from
[[cor-primitives-of-a-continuous-function]]. It then checks
[[thm-norm-inequality-for-the-vector-valued-integral]] numerically on that curve:
the left-hand side is $\iota(7)/\iota(6)$ and the right-hand side is at least
$\iota(53)/\iota(45)$, so the inequality is **strict** here. The exact value of
$\int_0^1\sqrt{1+t^{2}+t^{4}}$ is not computed and is not needed; a crude
polynomial lower bound separates the two sides.

**Steinitz's construction made concrete.**
[[ex-steinitz-confinement-worked-in-the-plane]] takes the six unit vectors
$\pm e_0$, $\pm e_1$, $\pm(1,1)/\sqrt{\iota(2)}$ in $\mathbb{R}^{2}$, which sum to
$0$. One ordering keeps every partial sum inside the ball of radius $\iota(2)$,
with largest norm $\sqrt{\iota(3)}$; another ordering has a partial sum of norm
squared $\iota(3)+\iota(2)\sqrt{\iota(2)}$, which exceeds $\iota(4)$, so the
bound of [[thm-steinitz-polygonal-confinement]] really is saying something. The
item then traces one step of the descending construction, exhibiting a feasible
coefficient vector with the least possible number of fractional coordinates and
checking the support bound $\#\operatorname{supp} \le k-1$ that the proof turns
on.

**Rearranging a series of vectors.**
[[ex-gamma-and-its-complement-computed-for-a-plane-series]] computes $\Gamma$ and
$\Gamma^{\perp}$ from their definitions for
$x_k = \bigl(\varepsilon_k/\iota(k+1),\ 0\bigr)$: the series converges, does not
converge absolutely, and $\Gamma$ is the line of multiples of $e_1$ while
$\Gamma^{\perp}$ is the line of multiples of $e_0$. For **this** series the
containment of [[thm-rearrangement-sums-lie-in-an-affine-subspace]] is an
equality, by [[thm-riemann-series-theorem]] applied to the first coordinate — and
the item says explicitly that this decides nothing in general, the series being
degenerate: it lies inside a line, so its rearrangement theory is the
one-dimensional theory in disguise.

[[fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space]]
is the item that stops a reader generalising
[[thm-riemann-series-theorem]] by analogy. The same series converges without
converging absolutely, and every rearrangement of it has second coordinate $0$,
so $(0,1)$ is not a rearrangement sum. **The refutation uses the containment half
and nothing more**, and it is elementary and complete;
[[thm-rearrangement-sums-lie-in-an-affine-subspace]] explains it structurally,
$\Gamma^{\perp}$ being a proper subspace of $\mathbb{R}^{2}$.

**Two hypotheses that cannot be dropped from the finite-dimensional theorems.**
[[fs-all-norms-on-any-real-vector-space-are-equivalent]] builds, from published
material only, the space $V$ of finitely supported real sequences with the norms
$N_1$ and $N_\infty$; the vectors $e_0+\dots+e_{m-1}$ have $N_1 = \iota(m)$ and
$N_\infty = 1$, so no constant works, by [[thm-of-archimedean]]. The hypothesis
that fails is finite-dimensionality, and the item proves that $V$ has no finite
basis. [[fs-heine-borel-holds-in-every-normed-space]] uses the same space with
$N_\infty$: the closed unit ball is closed and bounded and is not compact,
because the $e_k$ are pairwise at distance $1$. The published
[[fs-closed-and-bounded-implies-compact-in-every-metric-space]] already refutes
the metric-space version; what this item adds is that a linear structure and a
norm do not repair it.

**One conflation worth naming.**
[[fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension]]
takes the hypothesis of [[cor-bolzano-weierstrass-in-rn]] and the conclusion of
[[thm-componentwise-convergence-and-completeness]] clause 1 and joins them into a
false claim. The witness is the smallest possible: the alternating sequence read
in $\mathbb{R}^{1}$. What boundedness gives is a convergent **subsequence**, and
nothing more.

**Index discipline on this page.** Coordinates are indexed from $0$, so the
standard basis of $\mathbb{R}^{2}$ is $e_0, e_1$; sequences are indexed from $0$,
and every reciprocal is written over $\iota(k+1)$ because $\iota(0) = 0$.
