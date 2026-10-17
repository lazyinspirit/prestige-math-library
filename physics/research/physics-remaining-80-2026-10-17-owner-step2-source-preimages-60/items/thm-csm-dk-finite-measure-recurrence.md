---
id: thm-csm-dk-finite-measure-recurrence
kind: theorem
title: Hamiltonian recurrence under the exact finite-measure hypothesis
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - thm-poincare-recurrence-for-finite-measure-preserving-systems
  - def-measure-preserving-transformation-and-system
  - def-countable-choice
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  thm-poincare-recurrence-for-finite-measure-preserving-systems: mathematical-premise
  def-measure-preserving-transformation-and-system: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2.3
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.3
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.03:_Irreversibility_and_Poincare_Recurrence
---

## Statement

Let $(M,\omega,H,\Phi,m_0)$ be a Hamiltonian phase datum, let $R\subseteq M$
be a complete invariant Borel domain, and fix $\Delta>0$. Put
$T=\Phi_\Delta|_R$. Let $\mu$ be any finite Borel measure on $R$ invariant
under $T$. Then for every Borel $E\subseteq R$,
$\mu$-almost every $z\in E$ satisfies
$T^kz\in E$ for infinitely many integers $k\ge1$. The result is
almost-everywhere recurrence for this fixed sampled map; it is not a
pointwise statement about every initial state. The hypothesis also allows
finite invariant measures singular with respect to ambient Liouville volume.

## Facts & Assumptions

**Given:** A complete invariant Borel domain $R$, a time step $\Delta>0$,
and a finite Borel measure $\mu$ on $R$ invariant under $T=\Phi_\Delta|_R$.

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: $\Phi_t$ is the actual local
Hamiltonian flow, and completeness and invariance on $R$ mean it is defined
there for all real $t$ and maps $R$ onto itself.

[F2] [[def-measure-preserving-transformation-and-system]]: invariance is
$\mu(T^{-1}B)=\mu(B)$ for every Borel $B\subseteq R$.

[F3] [[thm-poincare-recurrence-for-finite-measure-preserving-systems]]:
for a measure-preserving self-map of a finite measure space, almost every
point of each measurable set returns to it infinitely many positive iterates.

## Proof

**Given:** The phase datum, $R$, $\Delta$, and [F1]–[F3].

1.1 By [F1], the flow is defined on every point of $R$ at time $\Delta$ and
maps $R$ onto itself, so $T$ is a measurable self-map. By [F2] and the
hypothesis, $T$ preserves the finite measure $\mu$. [F1, F2, given]

2.1 Apply [F3] to $(R,\mathcal B(R),\mu,T)$ and the arbitrary Borel set
$E$. Its conclusion is exactly that $\mu$-almost every point of $E$ returns
to $E$ infinitely many positive integer iterates. [F3, step 1.1] ∎

## Remarks

The theorem does not assume or prove finite total Liouville volume for $M$.
An infinite-volume phase space can still have a finite invariant probability
or a finite invariant restriction, but that is a separate hypothesis.
