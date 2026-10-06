---
id: rem-ftc-absolutely-continuous
kind: remark
title: "The sharp fundamental theorem of calculus (absolute continuity)"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-absolutely-continuous-function, rem-lebesgue-monotone-differentiation]
justified_by: []
forward_refs: []
aliases: [rem-ftc-sharp]
landmark: true
short: "F is AC iff F' exists a.e., lies in L^1, and integrates back to F on every subinterval"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus, Lebesgue integral form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Absolute continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_continuity"
    - title: "C. Heil, Absolute continuity and the Banach-Zaretsky theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

Let $F : [a,b] \to \mathbb{R}$. The following are equivalent.

1. $F$ is absolutely continuous on $[a,b]$.
2. $F$ is differentiable almost everywhere on $[a,b]$, $F' \in L^{1}[a,b]$, and

$$F(x) = F(a) + \int_a^x F' \, d\lambda \qquad \text{for every } x \in [a,b].$$

3. There exists $g \in L^{1}[a,b]$ with $F(x) = F(a) + \int_a^x g \, d\lambda$
   for every $x \in [a,b]$; and then $g = F'$ almost everywhere.

In particular, for $F \in AC[a,b]$ the Newton-Leibniz formula
$F(b) - F(a) = \int_a^b F' \, d\lambda$ holds, and $AC[a,b]$ is exactly the
class of functions for which it holds in this sense.

**The identity must be required at every $x$, not only at $x = b$.** The endpoint
identity alone does not characterise absolute continuity. Let $c$ be the Cantor
function and set $F(x) = c(2x)$ on $[0, 1/2]$ and $F(x) = c(2 - 2x)$ on
$[1/2, 1]$. Then $F$ is continuous, $F' = 0$ almost everywhere, $F' \in L^1$, and

$$\int_0^1 F' \, d\lambda = 0 = F(1) - F(0),$$

yet $F$ is not absolutely continuous, since it is not constant while carrying all
its variation on a null set. The identity fails at $x = 1/2$, where the left side
is $1$ and the right side is $0$.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The implication from 3 to 1 is absolute continuity of
the indefinite Lebesgue integral, which follows from the dominated convergence
theorem ([[rem-dominated-convergence-theorem]]). The implication from 3 to
$g = F'$ almost everywhere is the Lebesgue differentiation theorem
([[rem-lebesgue-differentiation-theorem]]). The hard direction, from 1 to 2, uses
that $F \in AC$ is of bounded variation, hence differentiable almost everywhere
by [[rem-lebesgue-monotone-differentiation]], that $F' \in L^{1}$ with
$\int_a^x F' \le F(x) - F(a)$ for increasing $F$, and then a Vitali covering
argument to upgrade the inequality to equality using the $\delta$ from absolute
continuity. Every step is measure-theoretic.

**Which page it serves.** This is the natural endpoint of the fundamental
theorems of calculus page, and the reason that page's results are called the
working FTC rather than the FTC. That page proves: if $f$ is Riemann integrable
on $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then
$\int_a^b f = F(b) - F(a)$; and if $f$ is continuous then $x \mapsto \int_a^x f$
is an antiderivative. Both statements carry hypotheses that the theorem above
deletes. The library states the sharp version here so that no reader concludes
the working FTC is the last word, and so that the counterexamples on that page
(a derivative that is not Riemann integrable, the Cantor function, Volterra's
function) have a stated theorem to be counterexamples to.

**What this page's other items add.** [[rem-banach-zarecki]] characterises the
same class without mentioning an integral at all, and
[[rem-henstock-kurzweil-vs-lebesgue]] records the integral for which the
Newton-Leibniz formula holds for every everywhere-differentiable $F$, with no
integrability hypothesis on $F'$ whatsoever.
