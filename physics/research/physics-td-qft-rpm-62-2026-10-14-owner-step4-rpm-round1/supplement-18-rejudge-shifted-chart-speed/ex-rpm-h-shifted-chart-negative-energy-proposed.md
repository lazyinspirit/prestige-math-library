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

It is flat under $X^0=x^0, X^1=x^1+2x^0, X^2=x^2, X^3=x^3$, with time orientation $T=\partial/\partial X^0=\partial_0-2\partial_1$. Explicitly, a nonzero causal vector $v$ is future-directed when $g(v,T)<0$, so increasing $X^0$ is future. The chart remains temporal with future unit normal $n=T$. For a massive state $m>0$ with spatial momentum $p=(p_1,0,0)$, $p_1>mc/\sqrt3$, the future shell has

$$H=c\left(\sqrt{m^2c^2+p_1^2}-2p_1\right)<0,$$

but the normal-observer energy $E_n=c\sqrt{m^2c^2+p_1^2}>0$. The coordinate speed magnitude exceeds $c$, while the local normal-observer speed remains below $c$.

## Facts & Assumptions

**Given:** The flat metric, time orientation and chart coefficients above, $m>0$, $c>0$, and a spatial momentum satisfying $p_1>mc/\sqrt3$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-temporal-chart-data]]: lapse-shift data define a temporal chart and normal field.

[F2] [[thm-rpm-h-temporal-shell-reduction]]: future-root chart Hamiltonian is $H=c(N\kappa-\beta^ip_i)$.

[F3] [[def-rpm-h-background-and-model-quantities]]: normal-observer energy is $E_n=-c\,p(n)$, defined from the supplied future unit observer.

## Verification

1.1 Use the inherited smooth bundle structure under [A1] and the temporal-chart data [F1]. The coordinate transformation is invertible with determinant one and pulls back the Minkowski line element $-(dX^0)^2+(dX^1)^2+(dX^2)^2+(dX^3)^2$ to $g$, proving flatness. The lapse is positive and $h=\delta$ is positive definite, and its unit normal $n=\partial_0-2\partial_1=T$ is future by the chosen orientation, so the chart satisfies [F1]; $\partial_0$ is spacelike since $g(\partial_0,\partial_0)=-1+4=3>0$, while $dx^0$ is temporal. [given, A1, F1, algebra]

1.2 Here $\kappa=\sqrt{m^2c^2+p_1^2}$, so [F2] gives $H=c(\kappa-2p_1)$. The inequality $p_1>mc/\sqrt3$ implies $m^2c^2<3p_1^2$, hence $\kappa^2=m^2c^2+p_1^2<4p_1^2$, so $\kappa<2p_1$ and $H<0$. [given, F2, algebra]

2.1 Here $n=\partial_0-2\partial_1$, so $p(n)=p_0-2p_1=-\kappa$ on the future root; [F3] gives $E_n=-cp(n)=c\kappa>0$. Along a local reduced solution $\gamma(t)=(ct,q(t))$, define $V:=c^{-1}d\gamma/dt$. Differentiating the Hamiltonian in [F2] gives $\dot q^1/c=p_1/\kappa-2$ and $\dot q^2=\dot q^3=0$ at the stated momentum, hence $V=n+(p_1/\kappa)\partial_1$. The displayed metric gives $g(n,n)=-1$, $g(n,\partial_1)=0$ and $g(\partial_1,\partial_1)=1$. Define the dimensionless normal-frame spatial velocity by $w:=V/(-g(V,n))-n\in n^\perp$; here $-g(V,n)=1$, so $w=(p_1/\kappa)\partial_1$ and $|w|_h=p_1/\kappa<1$. The normal-observer time increment is $d\tau_n=-g(n,d\gamma)/c=dt$, while the rest-space displacement is $d\gamma+g(n,d\gamma)n=cw\,dt$. Thus the local normal-observer speed, defined as rest-space displacement per this observer-time increment, is $c|w|_h=cp_1/\kappa<c$. Meanwhile $|\dot q^1|=c(2-p_1/\kappa)>c$. This proves the asserted contrast of coordinate and normal-observer speeds. [F1, F2, F3, step 1.2, algebra] ∎
