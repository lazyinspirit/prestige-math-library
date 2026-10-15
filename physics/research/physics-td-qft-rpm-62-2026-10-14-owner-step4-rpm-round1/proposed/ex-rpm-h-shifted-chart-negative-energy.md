---
id: ex-rpm-h-shifted-chart-negative-energy
kind: example
title: "Flat shifted chart with negative coordinate Hamiltonian"
status: draft
origin: pipeline
domain: physics
library: physics
empirical_premises: []
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-temporal-chart-data, thm-rpm-h-temporal-shell-reduction, def-rpm-h-background-and-model-quantities]
dependency_roles:
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-rpm-h-temporal-chart-data: mathematical-premise
  thm-rpm-h-temporal-shell-reduction: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, complete lecture notes (arXiv:gr-qc/0703035)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Complete 220-page notes; §§3.3.1–3.3.3, printed pp. 41–44, and §§4.2.2–4.2.3, pp. 56–58; full relevant sections inspected."
physical_scope: "Conditional flat-metric coordinate example using the adopted normal-observer energy convention and the stated future massive shell; no measurement, empirical inference or curved-background claim."
---

## Example

On $\mathbb R^4$, set $N=1$, $h_{ij}=\delta_{ij}$, and $\beta=(2,0,0)$. The metric is

$$g=-(dx^0)^2+(dx^1+2dx^0)^2+(dx^2)^2+(dx^3)^2.$$

Choose the time orientation for which increasing inertial $X^0$ is future; thus $n=\partial_0-2\partial_1=\partial_{X^0}$ is future unit timelike. It is flat under $X^0=x^0, X^1=x^1+2x^0, X^2=x^2, X^3=x^3$, while the chart remains temporal. For a massive state $m>0$ with spatial momentum $p=(p_1,0,0)$, $p_1>mc/\sqrt3$, the future shell has

$$H=c\left(\sqrt{m^2c^2+p_1^2}-2p_1\right)<0,$$

but the normal-observer energy $E_n=c\sqrt{m^2c^2+p_1^2}>0$. The coordinate speed magnitude exceeds $c$, while the local normal-observer speed remains below $c$.

## Facts & Assumptions

**Given:** The flat metric and chart coefficients above, $m>0$, $c>0$, and a spatial momentum satisfying $p_1>mc/\sqrt3$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-temporal-chart-data]]: lapse-shift data define a temporal chart and normal field.

[F2] [[thm-rpm-h-temporal-shell-reduction]]: future-root chart Hamiltonian is $H=c(N\kappa-\beta^ip_i)$.

[F3] [[def-rpm-h-background-and-model-quantities]]: normal-observer energy is $E_n=-c\,p(n)$, defined from the supplied future unit observer.

## Verification

1.1 Use the inherited smooth bundle structure under [A1] and the temporal-chart data [F1]. The coordinate transformation is invertible with determinant one and pulls back the Minkowski line element $-(dX^0)^2+(dX^1)^2+(dX^2)^2+(dX^3)^2$ to $g$, proving flatness. The lapse is positive and $h=\delta$ is positive definite, so the chart satisfies [F1]; $\partial_0$ is spacelike since $g(\partial_0,\partial_0)=-1+4=3>0$, while $dx^0$ is temporal. [given, A1, F1, algebra]

1.2 Here $\kappa=\sqrt{m^2c^2+p_1^2}$, so [F2] gives $H=c(\kappa-2p_1)$. The inequality $p_1>mc/\sqrt3$ implies $m^2c^2<3p_1^2$, hence $\kappa^2=m^2c^2+p_1^2<4p_1^2$, so $\kappa<2p_1$ and $H<0$. [given, F2, algebra]

2.1 Here $n=\partial_0-2\partial_1$, so $p(n)=p_0-2p_1=-\kappa$ on the future root; [F3] gives $E_n=-cp(n)=c\kappa>0$. The shell velocity formula gives $|w|_h=p_1/\kappa<1$, since $m>0$. The coordinate equation from [F2] gives $\dot q^1/c=p_1/\kappa-2$; because $\kappa^2<4p_1^2$, $p_1/\kappa>1/2$, so $2-p_1/\kappa>1$. Thus coordinate speed has magnitude greater than $c$ while local observer speed is less than $c$. [F2, F3, step 1.2, algebra] ∎
