---
id: cex-csm-dk-coarse-entropy-returns
kind: counterexample
title: Coarse Shannon entropy rises and falls in a reversible rotor
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - thm-csm-dk-liouville-and-fine-entropy
  - def-countable-choice
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  thm-csm-dk-liouville-and-fine-entropy: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.3
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.03:_Irreversibility_and_Poincare_Recurrence
---

## Statement refuted

For every reversible Hamiltonian flow, every finite measurable partition,
and every initial density, the partition Shannon entropy is nondecreasing
in time.

## Facts & Assumptions

**Given:** Let $\theta\in\mathbb R/\mathbb Z$ be a position on the circle, $I\in\mathbb R$ an action coordinate, and choose $\nu>0$, $I_0>0$, and $a_0>0$.

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: on $T^*S^1$ the canonical symplectic form is $d\theta\wedge dI$; a complete invariant Borel domain carries the induced reference measure $m_0=|d\theta\wedge dI|/a_0$.

[A1] Adopt countable choice ([[def-countable-choice]]) for the reference
measure and the transport supplier [F2]; no regular-shell premise is used.

[A2] A flow on a symplectic manifold is **reversible** here if there is
a smooth involution $\mathcal J$ (so $\mathcal J^2=\operatorname{id}$)
with $\mathcal J^*\omega=-\omega$ and
$\mathcal J\circ\Phi_t\circ\mathcal J=\Phi_{-t}$ for every real $t$.

[F2] [[thm-csm-dk-liouville-and-fine-entropy]]: on an open complete invariant domain, a finite-valued normalized Borel $L^1(m_0)$ density is transported by $\rho_t=\rho_0\circ\Phi_{-t}$ and preserves the fine $-k\int\rho\log\rho\,dm_0$ whenever the absolute entropy integral is finite.

## Counterexample

**Given:** [A1], the convention [A2], [F1]–[F2], and the positive parameters above.

1.1 Use the Hamiltonian $H(\theta,I)=\nu I$, with $\theta$ dimensionless, $I$ in J s, and $\nu$ in s$^{-1}$, so $H$ is in J. The convention in [F1] gives $\dot\theta=\nu$ and $\dot I=0$. Thus $\Phi_t(\theta,I)=(\theta+\nu t\ {\rm mod}\ 1,I)$ is complete. The smooth involution $\mathcal J(\theta,I)=(-\theta\ {\rm mod}\ 1,I)$ satisfies $\mathcal J^*(d\theta\wedge dI)=-d\theta\wedge dI$ and $\mathcal J\Phi_t\mathcal J(\theta,I)=(\theta-\nu t\ {\rm mod}\ 1,I)=\Phi_{-t}(\theta,I)$, proving reversibility in [A2]. Use the open invariant domain $R=S^1\times(I_0,I_0+a_0)\subset T^*S^1$; it is preserved by $\mathcal J$, complete under the flow, and its reference measure has total mass $a_0^{-1}\int_0^1d\theta\int_{I_0}^{I_0+a_0}dI=1$. Define on this open domain the density $\rho_0=4\,\mathbf1_{[0,1/4)\times(I_0,I_0+a_0)}$ relative to $m_0|_R$. Its integral is $4\cdot(1/4)\cdot(a_0/a_0)=1$; excluding the two action endpoints changes no reference-measure mass. [A2, F1, given, construct, algebra]

2.1 Partition the open domain into $C_1=[0,1/2)\times(I_0,I_0+a_0)$ and $C_2=[1/2,1)\times(I_0,I_0+a_0)$. The transported density has angular support $[\nu t,\nu t+1/4)$ modulo one. At $t=0$ its cell probabilities are $(1,0)$. At $t=3/(8\nu)$ its support is $[3/8,5/8)$, so each cell receives angular length $1/8$ and the probabilities are $(1/2,1/2)$. At $t=1/(2\nu)$ its support is $[1/2,3/4)$, so the probabilities are $(0,1)$. [F1, step 1.1, algebra]

3.1 For any fixed $k>0$, the coarse Shannon entropy $S_C(t)=-k\sum_{j=1}^2p_j(t)\log p_j(t)$, with $0\log0=0$, takes the values $0$, $k\log2$, and $0$ at those three times. It therefore decreases between $3/(8\nu)$ and $1/(2\nu)$, contradicting the proposed monotonicity. Here $k$ is a mathematical scale; choosing $k=k_B$ gives the usual entropy units J/K without changing the calculation. [step 2.1, algebra]

4.1 The initial density satisfies $\int_R|\rho_0\log\rho_0|\,dm_0=4\log4\cdot m_0(\operatorname{supp}\rho_0) =\log4<\infty$. By [F2] its fine reference-measure entropy remains constant, even though the displayed coarse partition entropy changes. [A1, F2, step 1.1, algebra] ∎

## Remarks

The angular coordinate is periodic; no global real-valued angle function is assumed. The calculation concerns an explicit mathematical coarse partition, not an observed entropy trace or a universal thermodynamic law.
