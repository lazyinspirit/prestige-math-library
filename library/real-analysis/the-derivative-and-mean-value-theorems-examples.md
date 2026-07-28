---
page: the-derivative-and-mean-value-theorems-examples
title: "The Derivative and the Mean Value Theorems: Examples and Counterexamples"
status: draft
items: []
examples: [ex-derivatives-of-polynomials-computed,
           cex-absolute-value-is-not-differentiable-at-zero,
           ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative,
           ex-chain-rule-computed,
           ex-derivative-of-the-nth-root-by-the-inverse-rule,
           cex-mean-value-theorem-fails-without-continuity-at-the-endpoints,
           cex-fermat-fails-at-an-endpoint,
           ex-mean-value-theorem-bounds-the-square-root-increment,
           cex-differentiable-with-unbounded-derivative-is-not-lipschitz,
           cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]
---

**Objective.** This is the worked companion to the page on the derivative and
the mean value theorems, linked under Prerequisites above. It introduces no new
definition and proves no new general theorem: every item here is either a
computation carried out in full or a witness that a hypothesis on that page
cannot be dropped.

**The rules, computed.** [[ex-derivatives-of-polynomials-computed]] differentiates
$\iota(3)x^{4} - \iota(5)x + \iota(2)$ and then the rational function
$(x^{2}+1)/(x-1)$, the second on $\mathbb{R} \setminus \{1\}$ and not on
$\mathbb{R}$, since the quotient rule of [[thm-algebra-of-derivatives]] states
its conclusion on the set where the denominator does not vanish and supplies the
fact that that set still has the point as a limit point.
[[ex-chain-rule-computed]] differentiates $(x^{2}+1)^{5}$ and the doubly nested
$\bigl((\iota(3)x-1)^{2}+2\bigr)^{3}$, and writes the Carathéodory factor of a
fifth power out in closed form: it is the polynomial
$\sum_{k<5} b^{k}y^{\,4-k}$ supplied by
[[lem-power-difference-factorisation]], whose continuity is a reading of
[[thm-algebra-of-continuous-functions]] rather than an appeal to the derivative.

**The root, and the inverse rule.**
[[ex-derivative-of-the-nth-root-by-the-inverse-rule]] applies
[[thm-derivative-of-an-inverse]] to $x \mapsto x^{n}$ on $(0,\infty)$ and gets
$\bigl(u^{1/n}\bigr)' = \frac{1}{\iota(n)}u^{1/n-1}$, in particular
$(\sqrt{u})' = 1/(\iota(2)\sqrt{u})$. The domain is $(0,\infty)$ and not
$[0,\infty)$, and the reason depends on $n$: for $n \ge 2$ the exponent
$1/n - 1$ is a **negative** rational, where [[def-rational-power]] leaves
$0^{r}$ undefined, and the root genuinely fails to be differentiable at $0$
there; at $n = 1$ the exponent is $0$ and neither obstruction arises, so the
restriction is only a convenience of the uniform statement. The exponent
arithmetic stays inside $\mathbb{Q}$ throughout, this library having no real
exponents.

**Where differentiability fails, and where it must.**
[[cex-absolute-value-is-not-differentiable-at-zero]] shows that the converse of
[[cor-differentiable-implies-continuous]] is false: the difference quotient of
$|x|$ at $0$ is $1$ on the right and $-1$ on the left, so by
[[thm-two-sided-limit-iff-both-one-sided]] it has no two-sided limit. Both
one-sided limits exist; they simply disagree.
[[ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]] takes the
witness of [[fs-vanishing-derivative-forbids-strict-increase]] and draws a
second consequence from it: since $x \mapsto x^{3}$ is continuous, injective and
has vanishing derivative at $0$, claim 2 of [[thm-derivative-of-an-inverse]]
says its inverse is not differentiable at $0$.

**Three hypotheses, three witnesses.**
[[cex-fermat-fails-at-an-endpoint]] removes interiority from
[[thm-fermat-interior-extremum]]: the identity on $[0,1]$ attains its greatest
and least values at the two endpoints, neither of which is interior, and its
derivative is $1$ at both.
[[cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]] works out
the witness for [[fs-mean-value-theorem-needs-no-continuity-at-the-endpoints]]
in full: it computes the left limit at the bad endpoint, shows the discontinuity
is the mildest kind, and shows that moving that single value back turns a
function with no admissible $c$ into one for which every $c$ is admissible.
[[cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]] takes
$f(x) = x^{3}$ and $g(x) = x^{2}$ on $[-1,1]$, where $g(-1) = g(1)$ makes the
quotient form of Cauchy's theorem meaningless while the product form of
[[thm-cauchy-mean-value]] holds, with $c = 0$ its only admissible point.

**One function, two intervals, opposite answers.**
[[ex-mean-value-theorem-bounds-the-square-root-increment]] applies
[[cor-bounded-derivative-implies-lipschitz]] on $[1,\infty)$, where
$|s'| \le 1/\iota(2)$, and gets
$|\sqrt{x}-\sqrt{y}| \le \tfrac{1}{\iota(2)}|x-y|$ together with uniform
continuity. [[cex-differentiable-with-unbounded-derivative-is-not-lipschitz]]
applies nothing on $(0,1]$, where the same derivative is bounded above by no
real, and refutes the Lipschitz conclusion directly with the pair
$x = t^{2}$, $y = \iota(4)t^{2}$, whose roots differ by $t$ while the points
differ by $\iota(3)t^{2}$. The function is the same; the interval decides. That
is why the boundedness hypothesis in the corollary is a hypothesis.
