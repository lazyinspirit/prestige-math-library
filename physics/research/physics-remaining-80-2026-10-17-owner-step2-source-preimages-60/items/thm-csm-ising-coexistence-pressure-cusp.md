---
id: thm-csm-ising-coexistence-pressure-cusp
kind: theorem
title: "Coexistence implies an Ising pressure cusp"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps: ["thm-csm-ising-low-temperature-coexistence", "thm-csm-lattice-dlr-variational-pressure", "def-countable-choice"]
justified_by: []
dependency_roles: {"thm-csm-ising-low-temperature-coexistence": "mathematical-premise", "thm-csm-lattice-dlr-variational-pressure": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

Assume Countable Choice. For the two-dimensional nearest-neighbor ferromagnetic Ising model with $J>0$, $h=0$, and $\beta J\geq2$, the dimensionless pressure per site $p(h)$ as a function of field $h$ is not differentiable at $h=0$. More precisely, if the stationary DLR states at zero field have magnetizations at least $m_*>0$ and at most $-m_*$, then every positive-field secant slope from zero is at least $\beta m_*$ and every negative-field secant slope is at most $-\beta m_*$. This proves a sufficient coexistence cusp; it does not identify the critical coupling.

## Facts & Assumptions

**Given:** The finite-range two-dimensional Ising model, $\beta J\geq2$, and Countable Choice.

[A1] Countable Choice is retained for the DLR and stationary-state construction ([[def-countable-choice]]).

[F1] At $\beta J\geq2$ there are stationary DLR states with one-site magnetizations at least $m_*>0$ and at most $-m_*$ ([[thm-csm-ising-low-temperature-coexistence]]).

[F2] Every stationary probability obeys the lattice pressure variational inequality; a DLR state at zero field attains equality ([[thm-csm-lattice-dlr-variational-pressure]]).

## Proof
1.1 Under Countable Choice [A1], let $\mu_+$ and $\mu_-$ be the states in [F1], and let $m=\mu_+(s_0)\geq m_*>0$. At zero field, [F2] gives $p(0)=h(\mu_+)-\beta u_0(\mu_+)$. [A1, F1, F2]

2.1 At field $h$, the energy per site of the same stationary law is $u_h(\mu_+)=u_0(\mu_+)-h\,m$. Applying the variational inequality [F2] to $\mu_+$ yields $p(h)\geq p(0)+\beta h m\geq p(0)+\beta h m_*$. [F2, step 1.1, algebra]

3.1 For $\mu_-$ with magnetization at most $-m_*$, the same inequality gives $p(h)\geq p(0)+\beta h\,\mu_-(s_0)$. If $h<0$, divide by $h$ to get $(p(h)-p(0))/h\leq-\beta m_*$. For $h>0$, step 2.1 gives the slope at least $\beta m_*$. The one-sided secant slopes are separated, so no derivative at zero exists. [F1, F2, step 2.1, algebra] ∎ 