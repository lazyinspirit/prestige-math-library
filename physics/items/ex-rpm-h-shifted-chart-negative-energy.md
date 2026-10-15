---
id: ex-rpm-h-shifted-chart-negative-energy
kind: example
title: "Flat shifted chart with negative coordinate Hamiltonian"
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
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

2.1 Here $n=\partial_0-2\partial_1$, so the shell covector has $p(n)=p_0-2p_1=-\kappa$; [F3] gives $E_n=c\kappa>0$. Put $r:=p_1/\kappa$; $m>0$ gives $0<r<1$. Differentiating the Hamiltonian of [F2] gives $\dot q^1=c(r-2)$, $\dot q^2=\dot q^3=0$ and $\dot p_i=0$. Thus, for any $q_0\in\mathbb R^3$, $x(t)=(ct,q_0+ct(r-2,0,0))$, $t\in\mathbb R$ in seconds, is the smooth lifted Hamiltonian trajectory. Its tangent is $V:=dx/dt=c(n+r\partial_1)$, with $g(V,n)=-c$ and $g(V,V)=-c^2(1-r^2)<0$, so it is future timelike. Define its dimensionless spatial velocity relative to $n$ by $w:=V/[-g(V,n)]-n\in n^\perp$, and its physical spatial velocity by $v_n:=cw$. Indeed, the observer time increment is $dt_n=-g(V,n)dt/c$, and the projected displacement is $(V+g(V,n)n)dt=v_n\,dt_n$. Here $w=r\partial_1$, so $|v_n|_h=c\sqrt{h_{ij}w^iw^j}=cr<c$. Meanwhile $|\dot q|_\delta=c(2-r)>c$. These are respectively the normal-observer speed and the coordinate speed magnitude in this chart. [given, F1, F2, F3, step 1.2, algebra] ∎
