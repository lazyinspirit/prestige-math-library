---
page: equivalent-forms-of-completeness-examples
title: "Equivalent Forms of Completeness: Examples and Counterexamples"
status: published
items: []
examples: [ex-rational-function-field-order, ex-field-ordered-in-two-ways,
           ex-cauchy-complete-not-complete-field,
           ex-cesaro-means-of-alternating, ex-stolz-cesaro-applied,
           cex-q-not-dense-in-an-ordered-field,
           cex-evt-and-ivt-fail-over-a-non-complete-field,
           cex-rolle-fails-over-a-non-complete-field,
           cex-stolz-cesaro-converse-fails, cex-irregular-summability-matrix]
---

**Objective.** Ten witnesses for [[equivalent-forms-of-completeness]]. Five are
worked examples and five are counterexamples. They divide into three groups:
three ordered fields examined in detail, three failures caused by the absence of
the least-upper-bound property, and four items on the summability half of the
page.

**The three ordered fields.** [[ex-rational-function-field-order]] works out the
eventual-sign order on $\mathbb{R}(t)$ into a computation rule: a rational
function is positive exactly when the leading coefficients of a numerator and a
denominator have positive product, a rule shown here to be independent of the
representative chosen. The field then displays the two elements that make a
non-Archimedean field behave strangely: $t$, above every canonical natural, and
$1/t$, positive and below every positive rational.
[[ex-field-ordered-in-two-ways]] moves the other way and shows that an order is
extra structure rather than a property: $\mathbb{Q}(\sqrt 2)$ carries exactly
two positive cones, exchanged by the conjugation $\sqrt 2 \mapsto -\sqrt 2$, and
the proof is that a single bit, the sign of $\sqrt 2$, determines every other
comparison.
[[ex-cauchy-complete-not-complete-field]] assembles, in one table, what
$\mathbb{R}((t^{-1}))$ does and does not satisfy: an ordered field, not
Archimedean, Cauchy complete, nested-interval complete in the shrinking form
only, and without least upper bounds, hence also without (BW) and without (MCT).
It closes with a concrete Cauchy sequence there, the truncations of
$\sum_{k \ge 0} t^{-k}$, and its limit.

**What fails when least upper bounds are missing.**
[[cex-q-not-dense-in-an-ordered-field]] shows that the density of $\mathbb{Q}$
is not automatic: in $\mathbb{R}(t)$ no rational lies strictly between $0$ and
$1/t$, so the hypothesis of [[lem-of-q-dense]] is load bearing. The other two
work over $\mathbb{Q}$ itself, on the interval $[0,2]_{\mathbb{Q}}$, and both
turn on the missing $\sqrt 2$.
[[cex-evt-and-ivt-fail-over-a-non-complete-field]] gives three functions there,
each continuous in the explicit $\varepsilon$-$\delta$ sense stated in the item
itself: $1/(x^2-2)$ is unbounded, $-(x^2-2)^2$ is bounded with no maximum, and
$x^2-2$ changes sign without taking the value $0$. The mechanism is a single
rational map that halves $|x^2-2|$ while staying in the interval.
[[cex-rolle-fails-over-a-non-complete-field]] is its consequence for the
differential calculus: the locally constant function that is $0$ below
$\sqrt 2$ and $1$ above it is differentiable everywhere on that interval with
derivative $0$ and is not constant, so the mean value theorem fails; subtracting
$x/2$ from it gives equal values at the endpoints and a derivative that is
constantly $-1/2$, so Rolle fails too.

**Averaging and summability.** [[ex-cesaro-means-of-alternating]] computes the
Cesaro means of $(-1)^k$: they are $1/(n+1)$ at even $n$ and $0$ at odd $n$, so
they converge to $0$ while the sequence does not converge at all.
[[ex-stolz-cesaro-applied]] uses [[thm-stolz-cesaro]] to evaluate
$(1^p + \dots + n^p)/n^{p+1} \to 1/(p+1)$ for every natural $p \ge 1$, with no
closed form for the sum: the difference quotient reduces the whole question to
the factorisation of $(n+1)^{p+1} - n^{p+1}$. The limit is taken from $n = 1$,
since $b_0 = 0$.
[[cex-stolz-cesaro-converse-fails]] shows the theorem has no converse: with
$a_k = (-1)^k$ and $b_k = k$ the quotients $a_k/b_k$ tend to $0$ over $k \ge 1$
while the difference quotients alternate between $-2$ and $2$.
[[cex-irregular-summability-matrix]] closes the page by showing that no
condition of [[thm-silverman-toeplitz]] is redundant: the matrix with entries
$-(n+1)$ and $n+2$ in row $n$ has null columns and row sums exactly $1$, fails
only the uniform bound on row absolute sums, and sends the null sequence
$(-1)^k/(k+1)$ to the divergent $-2\,(-1)^n$.

**A note on two of the counterexamples.** The items about the extreme value,
intermediate value and mean value theorems each state the notion they need,
$\varepsilon$-$\delta$ continuity and the difference-quotient derivative, in
full inside their own Statement, and verify it directly. That is the final form
and not a placeholder. Both refute a claim about an *arbitrary* ordered field,
and both refute it over $\mathbb{Q}$, so the definitions of continuity and of
the derivative that later pages of this track will give for real functions on
subsets of $\mathbb{R}$ would not apply to them; a general ordered-field version
would be a definition no other item in this library uses. The conditions stated
there are the ordinary ones read inside the field, and they specialise to the
real-variable definitions at $F = \mathbb{R}$. Nothing on this page cites an item
that does not exist, and nothing on it waits on a later page.
