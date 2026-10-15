---
id: pthm-rpm-h-coordinate-versus-observer-energy
kind: theorem
title: "Coordinate Hamiltonian and normal-observer energy differ by shift"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-temporal-chart-data, thm-rpm-h-temporal-shell-reduction, pthm-sr-momentum-and-four-force, post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action]
dependency_roles:
  post-rpm-h-massless-shell-action: physical-assumption
  post-rpm-h-free-test-particle-action: physical-assumption
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: mathematical-premise
  def-rpm-h-temporal-chart-data: mathematical-premise
  thm-rpm-h-temporal-shell-reduction: mathematical-premise
  pthm-sr-momentum-and-four-force: flat-specialization-check
sources:
  references:
    - title: "David Tong, General Relativity, complete lecture notes, §1.2.6"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 26–28, metric and normal-observer decomposition."
    - title: "David Tong, Classical Dynamics, complete Cambridge lecture notes, §4.3"
      url: "https://www.damtp.cam.ac.uk/user/dt281/dynamics/clas.pdf"
      locator: "Printed pp. 93–95, Hamiltonian energy and explicit time dependence."
physical_scope: "Conditional energy identities in a supplied temporal chart; SR is used only as a flat consistency specialization, not as a curved premise."
---

## Statement

Under the hypotheses of [[thm-rpm-h-temporal-shell-reduction]], the future unit normal $n=N^{-1}(\partial_0-\beta^i\partial_i)$ measures positive particle energy

$$E_n=-c\,p(n)=c\kappa,$$

while the chart's reduced Hamiltonian is $H=c(N\kappa-\beta^ip_i)$. The normal-frame spatial velocity is $w^i=(\dot q^i/c+\beta^i)/N=h^{ij}p_j/\kappa$, with $h_{ij}w^iw^j<1$ for $m>0$ and $=1$ for a nonzero massless state. If β$^2:=h_{ij}\beta^i\beta^j<N^2$, then $H>0$. If β$^2>N^2$, $H$ can be negative even though $E_n>0$. Along a Hamiltonian solution, $dH/dt=\partial_tH$; only explicit time independence implies its conservation.

## Facts & Assumptions

**Given:** A lapse-shift temporal chart, positive $N,h$, a future shell state, and a solution of its reduced equations.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-background-and-model-quantities]]: $p$ is a covector and an observer is a future unit timelike vector.

[F2] [[def-rpm-h-temporal-chart-data]]: $n=N^{-1}(\partial_0-\beta^i\partial_i)$, $g(n,n)=-1$, and $h$ is positive definite.

[F3] [[thm-rpm-h-temporal-shell-reduction]]: κ, shell root and $H=c(N\kappa-\beta^ip_i)$ as displayed.

[F4] [[pthm-sr-momentum-and-four-force]]: in the flat specialization, energy is the time component paired with the inertial observer; this supplier is not assumed on curved backgrounds.

## Proof

1.1 Evaluate the covector on the normal: $p(n)=N^{-1}(p_0-\beta^ip_i)=-\kappa$ by [F3]. Thus $E_n=-cp(n)=c\kappa>0$, while multiplying the shell root by $-c$ gives the chart Hamiltonian stated in [F3]. [given, A1, F1, F2, F3, algebra]

1.2 Differentiate $H=c(N\kappa-\beta^ip_i)$ with respect to $p_i$, keeping $t,q$ fixed. Since $\partial\kappa/\partial p_i=h^{ij}p_j/\kappa$, Hamilton's equation gives $\dot q^i/c=Nh^{ij}p_j/\kappa-\beta^i$, so $w^i=h^{ij}p_j/\kappa$. Its squared $h$-norm is $h^{ij}p_ip_j/(m^2c^2+h^{ij}p_ip_j)$, strictly below one for $m>0$ and equal to one for $m=0$ with nonzero spatial momentum. [given, F2, F3, algebra]

2.1 Cauchy–Schwarz in the positive definite metric $h$ gives β$^ip_i\le |\beta|_h|p|_{h^{-1}}$, and κ$\ge |p|_{h^{-1}}$. If β$^2<N^2$, then β$_h<N$ and $N\kappa-|\beta|_h|p|_{h^{-1}}>0$ unless $p=0$; for $p=0,m>0$, $N\kappa=Nmc>0$ as well. Hence $H>0$. If β$^2>N^2$, choose locally $p_i$ proportional to the metric dual of β and sufficiently large: then the shift term grows with coefficient β$_h$ while the positive term grows with coefficient $N<|\beta|_h$, making $H<0$ while step 1.1 keeps $E_n>0$. [given, F2, F3, step 1.1, Cauchy–Schwarz]

2.2 Along a solution, $dH/dt=H_t+H_{q^i}\dot q^i+H_{p_i}\dot p_i=H_t+H_{q^i}H_{p_i}-H_{p_i}H_{q^i}=H_t$. Thus conservation follows when $H_t=0$; no such condition is assumed for a general time-dependent chart. [F3, step 1.2, Hamilton equations, algebra]

3.1 In a flat inertial chart with $N=1,\beta=0,h=\delta$, one has $H=c\kappa=E_n$, agreeing with [F4]; this is the only use of the SR supplier. [F4, step 1.1] ∎
