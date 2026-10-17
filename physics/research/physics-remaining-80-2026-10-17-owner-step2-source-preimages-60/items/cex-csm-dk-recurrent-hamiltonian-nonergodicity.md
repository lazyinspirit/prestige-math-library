---
id: cex-csm-dk-recurrent-hamiltonian-nonergodicity
kind: counterexample
title: Two oscillators are recurrent but nonergodic on their total shell
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-ergodic-and-mixing-notions
  - def-csm-dk-hamiltonian-flow-measure
  - thm-csm-dk-invariant-hamiltonian-and-shell-measures
  - thm-csm-dk-finite-measure-recurrence
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-ergodic-and-mixing-notions: mathematical-premise
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  thm-csm-dk-invariant-hamiltonian-and-shell-measures: mathematical-premise
  thm-csm-dk-finite-measure-recurrence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2.3
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §§3.2–3.3
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.03:_Irreversibility_and_Poincare_Recurrence
---

## Statement refuted

Every Hamiltonian time map on every compact regular finite-measure energy
shell is ergodic for its normalized shell measure.

## Facts & Assumptions

**Given:** Assume full AC for the regular-shell measure supplier. Choose
$m_1,m_2,\omega_1,\omega_2>0$ and a total energy $E>0$.

[A1] Full AC is the exact assumption in
[[thm-csm-dk-invariant-hamiltonian-and-shell-measures]] for its
regular-shell clause ([[def-axiom-of-choice]]).

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: on
$M=\mathbb R^4$ use
$\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$ and the Hamiltonian flow convention
$\iota_{X_H}\omega=dH$.

[F2] [[thm-csm-dk-invariant-hamiltonian-and-shell-measures]]: under full AC,
the stated regular compact positive-energy shell has a finite positive
invariant probability measure.

[F3] [[thm-csm-dk-finite-measure-recurrence]]: every fixed sampled map
preserving a finite shell measure has almost-everywhere recurrence on each
measurable subset.

[F4] [[def-csm-dk-ergodic-and-mixing-notions]]: ergodicity requires every
invariant measurable set to have probability zero or one.

## Counterexample

**Given:** [A1], the parameters above, and [F1]–[F3].

1.1 Define
$H(q,p)=\sum_{i=1}^2(p_i^2/(2m_i)+m_i\omega_i^2q_i^2/2)$ on $\mathbb R^4$.
The Hamilton equations are
$\dot q_i=p_i/m_i$ and $\dot p_i=-m_i\omega_i^2q_i$, whose explicit
oscillatory solutions exist for every real time. For $J=(0,\infty)$,
$\nabla H$ vanishes only at the origin and hence nowhere on $H^{-1}(J)$.
For every compact $K\subset J$, $H^{-1}(K)$ is closed and bounded because
$H$ is a positive-definite quadratic form, hence compact in $\mathbb R^4$.
The level $\Sigma_E=H^{-1}(\{E\})$ is therefore a nonempty compact regular
shell with the exact hypotheses of [F2]. [A1, F1, F2, given, algebra]

2.1 Let
$E_1(q_1,p_1)=p_1^2/(2m_1)+m_1\omega_1^2q_1^2/2$ and put
$S=\{z\in\Sigma_E:E_1(z)<E/2\}$. The equations in step 1.1 conserve $E_1$
because
$\frac{d}{dt}E_1=(p_1/m_1)(-m_1\omega_1^2q_1)
+(m_1\omega_1^2q_1)(p_1/m_1)=0$. Hence every time map satisfies
$\Phi_\Delta^{-1}S=S$. The set $S$ is a nonempty relatively open subset of
$\Sigma_E$; for instance points with $(q_1,p_1)=(0,0)$ lie in it. Its
complement contains a nonempty relatively open subset with $E_1>E/2$.
The regular-shell graph density $|\nabla H|^{-1}dA$ is positive on every
graph chart, so both open subsets have positive shell measure. Since the
whole shell measure is finite and positive by [F2], the normalized
probability of $S$ lies strictly between zero and one. [F1, F2, step 1.1,
algebra]

3.1 The invariant measurable set $S$ has intermediate probability, so [F4]
rules out ergodicity of $\Phi_\Delta$ for every
$\Delta>0$. By [F2], the normalized shell law is a finite invariant
probability; apply [F3] to that same law and sampled map to obtain
almost-everywhere recurrence. This is a recurrent Hamiltonian system that
is not ergodic, refuting the statement. [A1, F2, F3, F4, step 2.1] ∎

## Remarks

The two oscillator energies are conserved separately. Compactness and
Liouville preservation therefore do not imply that a time map explores its
entire energy shell.
