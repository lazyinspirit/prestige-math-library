---
id: cex-qft-qed-torus-charge
kind: counterexample
title: Periodic smooth Gauss excludes nonzero net charge
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-countable-choice
  - lem-qft-qed-coulomb-constraint
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qft-qed-coulomb-constraint: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; Gauss constraint and Coulomb potential.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §55
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Gauss-law constraint and periodic-mode discussion.
---

## Statement refuted

Assume Countable Choice, $L,\epsilon_0>0$, and the periodic Coulomb-gauge Gauss equation of [[lem-qft-qed-coulomb-constraint]]. For every smooth periodic charge density $\rho$ on $T_L^3$, there exists a smooth periodic potential $\phi$ satisfying $-\Delta\phi=\rho/\epsilon_0$.

## Construction

Assume Countable Choice and the periodic Gauss constraint of [[lem-qft-qed-coulomb-constraint]]. On $T_L^3$, take the nonzero constant smooth charge density $\rho(\mathbf x)=\rho_0$ with $\rho_0\ne0$. There is no smooth periodic potential satisfying $-\Delta\phi=\rho_0/\epsilon_0$. More generally, every smooth periodic solution of Gauss's equation in Coulomb gauge requires zero total charge. A boundary, puncture, or compensating background changes the hypotheses and is outside this counterexample.

## Facts & Assumptions

**Given:** Countable Choice; $L,\epsilon_0>0$; a smooth periodic potential; and the Coulomb-gauge Gauss equation.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] In Coulomb gauge the periodic Gauss constraint is $-\Delta\phi=\rho/\epsilon_0$. [[lem-qft-qed-coulomb-constraint]]

## Counterexample

**Given:** [A1], [F1], $\rho_0\ne0$, and periodic boundary conditions.

1.1 Integrating [F1] over $[0,L]^3$ gives
$$\int_{[0,L]^3}-\Delta\phi\,d^3x =-\sum_{j=1}^3\int_0^{L}\!\int_{[0,L]^2}\partial_j^2\phi\,d^2x_{\widehat j}\,dx_j=0,$$
because for each $j$ the integral in $x_j$ is the difference of the periodic values of $\partial_j\phi$ at $L$ and $0$. [F1, given, algebra]

2.1 The right side of the same integrated equation is
$$\epsilon_0^{-1}\int_{[0,L]^3}\rho_0\,d^3x=\epsilon_0^{-1}\rho_0L^3\ne0,$$
contradicting step 1.1. Thus no smooth periodic solution exists for this nonzero total charge; the same integration proves neutrality is necessary for any periodic solution. [A1, F1, step 1.1, given] ∎
