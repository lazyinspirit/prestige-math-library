---
id: lem-fractional-integral-kernel-power-integral
kind: lemma
title: Integral of the fractional power kernel
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-real-beta-integral
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - def-real-gamma-function-by-the-euler-integral
  - thm-substitution-for-improper-integrals
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The substitution is one-dimensional and uses only improper-integral limits.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: William F. Trench, Introduction to Real Analysis, Theorem 3.4.13
      url: https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf
    - title: University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2
      url: https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf
---

## Statement

For $\beta>0$ and $t>0$,
$$\int_0^t(t-s)^{\beta-1}\,ds=\frac{t^\beta}{\beta}.$$
When $0<\beta<1$ the integral is improper at $s=t$; for $\beta\ge1$ it
is an ordinary integral. It converges in both cases because
$B(\beta,1)$ is defined for positive arguments.

## Facts & Assumptions

**Given:** $\beta>0$ and $t>0$.

[F1] [[def-real-beta-integral]]:
$B(p,q)=\int_0^1x^{p-1}(1-x)^{q-1}\,dx$ for $p,q>0$.

[F2] [[thm-real-beta-gamma-identity]]:
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ for $p,q>0$.

[F3] [[thm-real-gamma-functional-equation]]:
$\Gamma(x+1)=x\Gamma(x)$ for $x>0$.

[F4] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(1)=1$.

[F5] [[thm-substitution-for-improper-integrals]]: a monotone differentiable
change of variable preserves an improper integral when the transformed
integral converges.

## Proof

1.1 In the improper integral, set $x=(t-s)/t$. On every compact truncation this is a differentiable decreasing substitution with $ds=-t\,dx$, so [F5] and passage to the endpoint limits give $$\int_0^t(t-s)^{\beta-1}\,ds =t^\beta\int_0^1x^{\beta-1}\,dx=t^\beta B(\beta,1),$$ where the last equality is [F1] because $(1-x)^0=1$ on $(0,1)$. [given, F1, F5, construct]

2.1 By [F2] and [F4], $B(\beta,1)=\Gamma(\beta)/\Gamma(\beta+1)$. Applying [F3] gives $B(\beta,1)=1/\beta$. Substitution into step 1.1 proves the formula and convergence of the stated improper integral. [step 1.1, F2, F3, F4, algebra] ∎