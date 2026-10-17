---
id: ex-emgmath-ml-b01
kind: example
title: Advected nonconstant charge ratio without Maxwell closure
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - thm-emg-charged-dust-projection
  - def-emg-matter-formal-systems
dependency_roles:
  thm-emg-charged-dust-projection: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equations (1.104)–(1.106), PDF pp. 34–35 (printed pp. 28–29)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Dust current and stress tensor definitions in a rest frame; this example directly checks a smooth Minkowski specialization."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "A distinct coupled charged-dust system; the present example deliberately omits its Einstein–Maxwell closure and fixed charge ratio."
verification:
  precheck: pending
---

## Example

Let $M=\mathbb R^4$ with length coordinates $(x^0,x^1,x^2,x^3)$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, future time-orientation $N=\partial_0$, and $x^0=ct$. In SI bookkeeping, assign $[\rho_0]=\mathrm{kg\,m^{-3}}$, $[L]=\mathrm m$, and $[\alpha_*]=\mathrm{C\,kg^{-1}}$. Choose $\rho_0>0$, $L>0$, and $\alpha_*\ne0$. Set

$$U=c\,\partial_0,\qquad \rho=\rho_0,\qquad \alpha(x)=\alpha_*\left(1+(x^1/L)^2\right),\qquad \sigma=\rho_0\alpha,\qquad F=0.$$

The fields are smooth and the ratio $\alpha=\sigma/\rho$ is nonconstant in space. This is a mathematical example of the matter balance and transport equations; the sourced Maxwell equation is not imposed.

## Facts & Assumptions

**Given:** The stated Minkowski coordinates and fields; $\rho_0,L>0$ and $\alpha_*\ne0$.

[F1] [[def-emg-matter-formal-systems]]: $g(U,U)=-c^2$, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and the sourced Maxwell equation would be $\nabla_aF^{ab}=-\mu_0j^b$ with $\mu_0>0$.

[F2] [[thm-emg-charged-dust-projection]]: on a positive-density domain, dust exchange is equivalent to continuity and the Lorentz-force equation; under continuity, $\nabla_aj^a=0$ is equivalent to $U^a\nabla_a\alpha=0$.

## Verification

1.1 The constant Minkowski connection gives $g(U,U)=-c^2$, $\nabla_a(\rho U^a)=\partial_0(\rho_0c)=0$, and $U^a\partial_a\alpha=c\partial_0\alpha=0$. Since $\rho_0>0$, [F2] yields charge-current conservation $\nabla_a(\sigma U^a)=0$. [given, F1, F2, algebra]

2.1 The acceleration of $U$ is zero, and $F^b{}_cU^c=0$ because $F=0$. Thus the force equation and mass continuity in [F2] hold, so the matter-exchange equation holds. But $\alpha(0)=\alpha_*$ and $\alpha(L)=2\alpha_*$, which differ because $\alpha_*\ne0$; hence $\alpha$ is not spatially constant. [given, F2, step 1.1, algebra]

3.1 The factor $1+(x^1/L)^2$ is at least $1$, so $j=\rho_0\alpha U$ is nonzero everywhere. For $F=0$, the sourced Maxwell equation would read $0=-\mu_0j^b$, which fails. Hence matter balance and charge transport alone do not supply Maxwell closure. [given, F1, algebra] ∎
## Remarks

The example is not a coupled Einstein–Maxwell solution and makes no claim about physical existence. It shows exactly why constant $\sigma/\rho$ is not a consequence of the dust exchange identity.
