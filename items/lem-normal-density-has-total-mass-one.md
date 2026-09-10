---
id: lem-normal-density-has-total-mass-one
kind: lemma
title: The standard normal density has total mass one
deps: ["thm-gaussian-integral", "thm-substitution", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-exponential-definition-equivalence", "thm-derivative-of-exponential", "cor-continuous-functions-are-borel-measurable", "thm-of-square-roots", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-axiom-of-choice", "def-countable-choice"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. The function $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ is positive and Borel measurable on $\mathbb R$, with Lebesgue integral one.

## Facts & Assumptions

[F1] [[thm-exponential-definition-equivalence]]: The following descriptions give the same function $\mathbb R\to(0,\infty)$: the power series $\sum x^n/n!$; the product limit $\lim_n(1+x/n)^n$; the normalized solution of $y'=y,\ y(0)=1$; the normalized continuous multiplicative function; and the compact-uniform limit of the Picard iterates.

[F2] [[thm-derivative-of-exponential]]: The real exponential function is $C^\infty$, and for every $m\in\mathbb N$,
$$\exp^{(m)}=\exp.$$
In particular $(\exp)'=\exp$.

[F3] [[cor-continuous-functions-are-borel-measurable]]: Assume the Axiom of Countable Choice. Let $n,m\ge1$. Every continuous map
$f : \mathbb{R}^n \to \mathbb{R}^m$ is Borel measurable in
the sense of def-borel-and-lebesgue-measurable-function-on-rn.

[F4] [[thm-of-square-roots]]: Let $F$ be a complete ordered field (def-complete-ordered-field). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

[F5] [[thm-substitution]]: Let $c < d$ be reals and let $\varphi : [c,d] \to \mathbb{R}$ be differentiable
at every point of $[c,d]$ as a function on $[c,d]$ (def-derivative), with
$\varphi'$ integrable on $[c,d]$ (def-darboux-integral). Let
$J \subseteq \mathbb{R}$ be order-convex with at least two elements
(def-interval) with $\varphi[\,[c,d]\,] \subseteq J$, and let $f : J \to
\mathbb{R}$ be continuous on $J$ (def-continuity-real).

Then $(f\circ\varphi)\,\varphi'$ is integrable on $[c,d]$ and

$$\int_{\varphi(c)}^{\varphi(d)} f \;=\; \int_c^d (f\circ\varphi)\,\varphi' ,$$

the left-hand integral being the oriented one of def-oriented-integral.

**Neither injectivity nor monotonicity of $\varphi$ is assumed**, and that is
exactly why the left-hand side is written with oriented limits: $\varphi(d)$ may
lie below $\varphi(c)$, and $\varphi$ may return to the same value many times.
The proof runs through a primitive of $f$ and the chain rule, and no inverse
function is ever formed.

**Continuity of $f$ is a hypothesis and cannot be weakened to integrability.**
With $f$ merely integrable the composite $f \circ \varphi$ need not be
integrable at all, so the right-hand side need not exist; that is
the false statement that weakens it on the companion page.

[F6] [[thm-continuous-implies-integrable]]: Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
(def-continuity-real). Then $f$ is bounded (def-bounded-set) and Riemann
integrable on $[a,b]$ (def-darboux-integral).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/N$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

[F7] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: Assume the Axiom of Countable Choice. Let $a<b$ and let $f:[a,b]\to\mathbb R$ be
bounded and Riemann integrable. Then $f$ is Lebesgue measurable on $[a,b]$ and
is integrable there, and its Lebesgue integral equals its Riemann integral:
$$\int_{[a,b]} f\,d\lambda_1=\int_a^b f(x)\,dx.$$

This is the point at which the completeness of Lebesgue measure is used
essentially: the proof obtains a Borel function equal to $f$ almost everywhere,
and measurability of $f$ itself is then a completeness statement.

[F8] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

[F9] [[thm-gaussian-integral]]: $$\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi.$$

[F10] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: Let $f,g:X\to[0,+\infty]$ be measurable and let $c\ge0$.

1. If $f\le g$, then $\int f\,d\mu\le\int g\,d\mu$.
2. $\int cf\,d\mu=c\int f\,d\mu$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 F1 gives positivity of the exponential, and F2 gives continuity. Thus $\phi$ is positive and continuous. AC restricts to a choice function on every countable nonempty family, giving CC; F3 therefore applies to $\phi$. F4 makes its positive denominator well defined. [F1, F2, F3, F4]

2.1 For integer $n\ge1$, F5 with $\varphi(x)=x/\sqrt2$ and continuous f(t)=exp(-t^2) gives $\int_{-n}^n e^{-x^2/2}\,dx=\sqrt2\int_{-n/\sqrt2}^{n/\sqrt2}e^{-t^2}\,dt$. The derivative is the constant 1/sqrt2, hence integrable. Both integrands are continuous on the compact intervals, so F6 gives bounded Riemann integrability. F7 identifies the left side with its Lebesgue integral, under the CC in step 1.1. [F5, F6, F7, step 1.1]

3.1 The nonnegative functions $e^{-x^2/2}\mathbf1_{[-n,n]}$ increase to $e^{-x^2/2}$. By F8, its Lebesgue integral is the limit of the compact integrals in step 2.1. F9 identifies the right-hand improper limit as $\sqrt2\sqrt\pi=\sqrt{2\pi}$; the equality follows because both sides are positive with square 2pi, by square-root uniqueness. F10 now divides by sqrt(2pi) to give integral $\phi$=1. [F8, F9, F10, step 2.1] ∎
