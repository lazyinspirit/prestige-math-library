---
id: ex-third-derivative-test-on-a-cubic-phase
kind: example
title: "The Third-Derivative Test on a Cubic Phase"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-discrete-exponential-sum
  - def-exponential-character-e
  - thm-vdc-third-derivative-test
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - def-first-second-third-derivative-test-hypotheses
  - def-rational-power
  - lem-rational-power-well-defined
  - lem-rational-power-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Third-derivative estimate III and its proof, printed pp. 2-3"
---

## Example

For every real $\beta>0$ and integers $A<B$, put $N=B-A+1$ and
$e(t)=\exp(2\pi i t)$. There is an absolute constant $K>0$, independent
of $\beta,A,B$, such that
$
\left|\sum_{n=A}^{B}e(\beta n^3)\right|
\le K\bigl(N\beta^{1/6}+N^{1/2}\beta^{-1/6}\bigr).
$

## Example references

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

## Facts & Assumptions

**Given:** $\beta>0$, integers $A<B$, and $N=B-A+1$. Verify the stated
cubic-phase estimate.

[F1] [[def-discrete-exponential-sum]] and
[[def-exponential-character-e]]:
$S(f;A,B)=\sum_{n=A}^{B}e(f(n))$ and $e(t)=\exp(2\pi i t)$.

[F2] [[thm-vdc-third-derivative-test]]:
if $c\mu\le f'''\le C\mu$ on the integer interval, then its sum is at most
a constant depending only on $c,C$ times
$N\mu^{1/6}+N^{1/2}\mu^{-1/6}$.

[F3] [[lem-derivative-of-a-power]] and
[[thm-algebra-of-derivatives]]:
$x^0=1$ has derivative $0$, $x$ has derivative $1$, $x^2$ has derivative
$2x$, and $x^3$ has derivative $3x^2$; scalar multiples differentiate by
the same scalar factor.

[F4] [[cor-differentiable-implies-continuous]]:
a function differentiable at a point is continuous there.

[F5] [[def-first-second-third-derivative-test-hypotheses]]:
the constants in the bound notation depend only on the displayed comparison
constants.

[F6] [[def-rational-power]], [[lem-rational-power-well-defined]], and
[[lem-rational-power-laws]]:
positive rational powers are well-defined, and $(ab)^r=a^rb^r$,
$a^{-r}=1/a^r$ for positive bases.

## Proof

1.1 Define $f(x)=\beta x^3$ for real $x$. Repeated use of [F3] gives $f'(x)=3\beta x^2$, $f''(x)=6\beta x$, and $f'''(x)=6\beta$ at every real $x$. These derivatives extend continuously to $[A,B]$: they are differentiable on $\mathbb R$ by the same power rule, so [F4] gives continuity there. Thus $f\in C^3([A,B])$, and $f'''=6\beta>0$ throughout the interval. [given, F3, F4]

2.1 In [F2] take $\mu=6\beta$ and $c=C=1$. The definition of the discrete sum [F1] identifies $S(f;A,B)$ with the sum in the statement, so there is an absolute $K_0>0$ such that $ \left|\sum_{n=A}^{B}e(\beta n^3)\right| \le K_0\bigl(N(6\beta)^{1/6}+N^{1/2}(6\beta)^{-1/6}\bigr). $ By [F5], $K_0$ is independent of $\beta,A,B$. By [F6], $(6\beta)^{1/6}=6^{1/6}\beta^{1/6}$ and $(6\beta)^{-1/6}=6^{-1/6}\beta^{-1/6}$, so the claim holds with $K=6^{1/6}K_0$. [given, F1, F2, F5, F6, step 1.1, algebra] ∎
