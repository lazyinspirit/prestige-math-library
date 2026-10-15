---
id: ex-td-response-chart-failure
kind: example
title: A smooth chart with no isothermal pressure inverse
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Constructed local concave entropy chart at fixed composition, used only to show failure of a response-coordinate inverse; it is not a measured material equation of state or a complete bulk-family model.
deps:
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-td-response-functions
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.10.5
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.10:_Applications_of_Thermodynamics
dependency_level: 7
---

## Example

Fix the amount of substance and stipulate the local entropy representative

$$S(U,V)=C\ln(U/U_*)+aV+S_0$$

on the open domain $U>0$, $V>0$, where $C>0$ has units $\mathrm{J\,K^{-1}}$, $U_*>0$ has units joules, $a>0$ has units $\mathrm{J\,K^{-1}\,m^{-3}}$, and $S_0$ has units $\mathrm{J\,K^{-1}}$. This chart is finite, C2, concave, and has $S_U>0$. It illustrates that a smooth positive-temperature chart need not admit pressure as a local coordinate at fixed temperature.

The displayed entropy is $S^{\rm SI}$ in physical SI coordinates. For this constructed local model, choose the positive-amount open neighborhood stated here (or any positive neighborhood of the fixed amount, extending this entropy independently of amount) and let $O_c$ be the numerical preimage of that product patch under $\Phi_c(\hat U,\hat V,\hat n)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$. Declare $O_c$ as the model's local state-domain patch and set $S_c=S^{\rm SI}\circ\Phi_c$. The derivatives below are those of $S^{\rm SI}=S_c\circ\Phi_c^{-1}$ on $\Phi_c(O_c)$, exactly as in [[def-td-temperature-pressure-chemical-potential]]. This supplies the numerical-to-SI chart identification for the formal witness, with no assertion of a measured material or a global constitutive extension.

## Facts & Assumptions

**Given:** The stipulated entropy chart and positive constants in the Example. The chart is a constructed model calculation; it reports no measurement.

[F1] [[def-td-si-quantities]]: $U$ is in joules, $V$ in cubic metres, $S$ in $\mathrm{J\,K^{-1}}$, $T$ in kelvins, and $p$ in pascals.

[F2] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: The logarithm is defined on positive arguments and $d(\ln x)/dx=1/x$ for $x>0$.

[F3] [[def-td-temperature-pressure-chemical-potential]]: $T=1/S_U$ and $p=T S_V$ on the stipulated positive-temperature chart.

[F4] [[def-td-response-functions]]: $\kappa_T$ is defined only where the required $(T,p,n)\leftrightarrow(U,V,n)$ local inverse chart exists.

## Verification

1.1 By [F2], $S_U=C/U$ and $S_V=a$. Hence [F3] gives $T=U/C>0$ and $p=aU/C=aT$. The Hessian of $S$ in $(U,V)$ is diagonal with entries $-C/U^2$ and $0$, so it is negative semidefinite on the open domain. [given, F1, F2, F3, algebra]

2.1 At fixed $T$, the equation $p=aT$ is independent of $V$. Therefore the map $(T,V)\mapsto(T,p)$ is not injective on any open neighborhood, so the inverse required by [F4] does not exist and $\kappa_T$ is not defined by that chart. This does not contradict a theorem whose hypotheses require a valid response inverse. [given, F4, step 1.1, algebra] ∎
