---
id: ex-rpm-h-shifted-chart-negative-energy
kind: example
title: "Flat shifted chart with negative coordinate Hamiltonian"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-temporal-chart-data, thm-rpm-h-temporal-shell-reduction]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-temporal-chart-data: mathematical-premise
  thm-rpm-h-temporal-shell-reduction: mathematical-premise
  pthm-rpm-h-coordinate-versus-observer-energy: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, complete lecture notes, §1.2.6"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 26–28, lapse-shift chart geometry."
    - title: "David Tong, Classical Dynamics, complete Cambridge lecture notes, §4.3"
      url: "https://www.damtp.cam.ac.uk/user/dt281/dynamics/clas.pdf"
      locator: "Printed pp. 93–95, coordinate Hamiltonian and energy."
physical_scope: "Exact flat-metric coordinate example; no measurement or curved-background claim."
---

## Example

On ℝ$^4$, set $N=1$, $h_{ij}=\delta_{ij}$, and β$=(2,0,0)$. The metric is

$$g=-(dx^0)^2+(dx^1+2dx^0)^2+(dx^2)^2+(dx^3)^2.$$

It is flat under $X^0=x^0, X^1=x^1+2x^0, X^2=x^2, X^3=x^3$, while the chart remains temporal. For a massive state $m>0$ with spatial momentum $p=(p_1,0,0)$, $p_1>mc/\sqrt3$, the future shell has

$$H=c\left(\sqrt{m^2c^2+p_1^2}-2p_1\right)<0,$$

but the normal-observer energy $E_n=c\sqrt{m^2c^2+p_1^2}>0$. The coordinate speed magnitude exceeds $c$, while the local normal-observer speed remains below $c$.

## Facts & Assumptions

**Given:** The flat metric and chart coefficients above, $m>0$, $c>0$, and a spatial momentum satisfying $p_1>mc/\sqrt3$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-temporal-chart-data]]: lapse-shift data define a temporal chart and normal field.

[F2] [[thm-rpm-h-temporal-shell-reduction]]: future-root chart Hamiltonian is $H=c(N\kappa-\beta^ip_i)$.

[F3] [[pthm-rpm-h-coordinate-versus-observer-energy]]: $E_n=c\kappa>0$, and normal velocity is $w^i=h^{ij}p_j/\kappa$.

## Proof

1.1 The coordinate transformation is invertible with determinant one and pulls back the Minkowski line element $-(dX^0)^2+(dX^1)^2+(dX^2)^2+(dX^3)^2$ to $g$, proving flatness. The lapse is positive and $h=\delta$ is positive definite, so the chart satisfies [F1]; ∂$_0$ is spacelike since $g(\partial_0,\partial_0)=-1+4=3>0$, while $dx^0$ is temporal. [given, A1, F1, coordinate algebra]

1.2 Here κ$=\sqrt{m^2c^2+p_1^2}$, so [F2] gives $H=c(\kappa-2p_1)$. The inequality $p_1>mc/\sqrt3$ implies $m^2c^2<3p_1^2$, hence κ$^2=m^2c^2+p_1^2<4p_1^2$, so κ$<2p_1$ and $H<0$. [given, F2, algebra]

2.1 By [F3], $E_n=c\kappa>0$ and |w|$_h=p_1/\kappa<1$, since $m>0$. The coordinate equation from [F2] gives ẋq$^1/c=p_1/\kappa-2$; because κ$^2<4p_1^2$, $p_1/\kappa>1/2$, so $2-p_1/\kappa>1$. Thus coordinate speed has magnitude greater than $c$ while local observer speed is less than $c$. [F2, F3, step 1.2, algebra] ∎
