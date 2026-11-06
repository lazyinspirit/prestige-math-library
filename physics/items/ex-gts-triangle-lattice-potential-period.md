---
id: ex-gts-triangle-lattice-potential-period
kind: example
title: Constant-term period of the triangle lattice potential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-intrinsic-mirror-algebra-and-classical-period
dependency_roles:
  def-gts-intrinsic-mirror-algebra-and-classical-period: mathematical-premise
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

In $R=\mathbb Q[x^{\pm1},y^{\pm1}]$, take $W=x+y+x^{-1}y^{-1}$. With $\operatorname{CT}$ the coefficient of $x^0y^0$, its formal classical period is
$$\pi_W(s)=\sum_{k\ge0}\operatorname{CT}(W^k)s^k=\sum_{d\ge0}\frac{(3d)!}{(d!)^3}s^{3d}.$$
This computation is only a Laurent constant-term identity. It makes no Gromov-Witten or mirror-equality claim, and the unmarked value $s=1$ is not asserted to converge.

## Facts & Assumptions

**Given:** The Laurent polynomial ring over $\mathbb Q$, the potential $W$, and the formal variable $s$.

[F1] [[def-gts-intrinsic-mirror-algebra-and-classical-period]]: for a Laurent algebra with basis $x^a y^b$ and unit $1$, the trace coefficient is the Laurent constant-term operator, so $\pi_W(s)=\sum_{k\ge0}\operatorname{CT}(W^k)s^k$.

[A1] The three summands of $W$ are $x$, $y$, and $x^{-1}y^{-1}$, each occurring with coefficient $1$.

## Proof

1.1 A term in the expansion of $W^k$ is determined by nonnegative integers $a,b,c$ counting the choices of $x$, $y$, and $x^{-1}y^{-1}$, with $a+b+c=k$. That term is $x^{a-c}y^{b-c}$. [A1, algebra]

2.1 The term contributes to $\operatorname{CT}(W^k)$ exactly when $a-c=0$ and $b-c=0$, hence exactly when $a=b=c=d$. This forces $k=3d$; if $3\nmid k$, the constant term is zero. [A1, step 1.1, algebra]

3.1 For $k=3d$, the multinomial theorem gives $(3d)!/(d!)^3$ ordered choices with $d$ copies of each summand, and each choice contributes the constant monomial with coefficient $1$. Thus $\operatorname{CT}(W^{3d})=(3d)!/(d!)^3$, including $d=0$; substituting these coefficients into [F1] gives the displayed period. [F1, A1, step 2.1, algebra] ∎

## Remarks

The first nonconstant terms are $6s^3+90s^6+1680s^9$. They are finite coefficient checks of the formula; no geometric interpretation is being asserted here.
