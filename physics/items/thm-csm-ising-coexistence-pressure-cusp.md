---
id: thm-csm-ising-coexistence-pressure-cusp
kind: theorem
title: "Coexistence implies an Ising pressure cusp"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps: ["thm-csm-ising-low-temperature-coexistence", "thm-csm-lattice-dlr-variational-pressure", "thm-csm-lattice-van-hove-pressure", "def-csm-finite-range-lattice-interaction", "def-countable-choice"]
justified_by: []
dependency_roles: {"thm-csm-ising-low-temperature-coexistence": "mathematical-premise", "thm-csm-lattice-dlr-variational-pressure": "mathematical-premise", "thm-csm-lattice-van-hove-pressure": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume Countable Choice and fix $\beta>0$ and $J>0$ with $\beta J\geq2$. For $B_n=[-n,n]^2\cap\mathbb Z^2$, define the free-boundary field-dependent energy and partition function by
$$H_{B_n}^{(h),\mathrm{free}}(s)=-J\sum_{\substack{x\in B_n,\ k\in\{1,2\}:\\x+e_k\in B_n}}s_xs_{x+e_k}-h\sum_{x\in B_n}s_x,\qquad Z_n(h)=\sum_{s\in\{-1,+1\}^{B_n}}e^{-\beta H_{B_n}^{(h),\mathrm{free}}(s)}.$$
The bounded finite-range pressure theorem gives the finite limit $p(h):=\lim_{n\to\infty}|B_n|^{-1}\log Z_n(h)$ for each $h\in\mathbb R$. Here $h$ is the field energy per spin, while $h_{\rm Sh}(\mu)$ below denotes Shannon entropy per site. The dimensionless pressure $p(h)$ is not differentiable at $h=0$. More precisely, if the stationary DLR states at zero field have magnetizations at least $m_*>0$ and at most $-m_*$, then every positive-field secant slope from zero is at least $\beta m_*$ and every negative-field secant slope is at most $-\beta m_*$. This proves a sufficient coexistence cusp; it does not identify the critical coupling.

## Facts & Assumptions

**Given:** The finite-range two-dimensional Ising model, $\beta J\geq2$, and Countable Choice.

[A1] Countable Choice is retained for the DLR and stationary-state construction ([[def-countable-choice]]).

[F1] At $\beta J\geq2$ there are stationary DLR states with one-site magnetizations at least $m_*>0$ and at most $-m_*$ ([[thm-csm-ising-low-temperature-coexistence]]).

[F2] For each fixed field $h$, every stationary law satisfies $h_{\rm Sh}(\mu)-\beta u_h(\mu)\leq p(h)$; a DLR law attains equality. Here $h_{\rm Sh}(\mu)$ denotes the entropy density $h(\mu)$ of [[thm-csm-lattice-dlr-variational-pressure]], and $u_h$ is its mean energy density with the field contribution included.

## Proof
1.1 Under Countable Choice [A1], let $\mu_+$ and $\mu_-$ be the states in [F1], and let $m=\mu_+(s_0)\geq m_*>0$. At zero field, [F2] gives $p(0)=h_{\rm Sh}(\mu_+)-\beta u_0(\mu_+)$. [A1, F1, F2]

2.1 For $h>0$, the energy per site of the same stationary law is $u_h(\mu_+)=u_0(\mu_+)-h\,m$. Applying the variational inequality [F2] to $\mu_+$ yields $p(h)\geq p(0)+\beta h m\geq p(0)+\beta h m_*$. [F2, step 1.1, algebra]

3.1 For $\mu_-$ with magnetization at most $-m_*$, the same inequality gives $p(h)\geq p(0)+\beta h\,\mu_-(s_0)$. If $h<0$, divide by $h$ to get $(p(h)-p(0))/h\leq-\beta m_*$. For $h>0$, step 2.1 gives the slope at least $\beta m_*$. The one-sided secant slopes are separated, so no derivative at zero exists. [F1, F2, step 2.1, algebra] ∎ 
