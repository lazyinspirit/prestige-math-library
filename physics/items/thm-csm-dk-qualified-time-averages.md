---
id: thm-csm-dk-qualified-time-averages
kind: theorem
title: Conditional sampled and continuous-time averages
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - def-measure-preserving-transformation-and-system
  - def-ergodic-measure-preserving-system
  - thm-birkhoff-ergodic-probability-case-for-strong-laws
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-dominated-convergence
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - def-countable-choice
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  def-measure-preserving-transformation-and-system: mathematical-premise
  def-ergodic-measure-preserving-system: mathematical-premise
  thm-birkhoff-ergodic-probability-case-for-strong-laws: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  def-countable-choice: mathematical-premise
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
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2.3
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.4
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.04:_Remarks_on_Ergodic_Theory
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 6.2.1 and its complete proof"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Let $(M,\omega,H,\Phi,m_0)$ be a Hamiltonian phase datum and let $R$ be a
complete invariant Borel domain carrying a Borel probability $\mu$ such that
$\mu(\Phi_s^{-1}B)=\mu(B)$ for every $s\in\mathbb R$ and every Borel
$B\subseteq R$. Fix a sampling interval $\Delta>0$ and define the time map
$T=\Phi_\Delta|_R$. Assume this particular map is ergodic for $\mu$, meaning
that every Borel $E\subseteq R$ with $T^{-1}E=E$ has $\mu(E)\in\{0,1\}$.
For every real $f\in L^1(\mu)$, the sampled averages
$$\frac1N\sum_{j=0}^{N-1}f(T^jz)$$
converge $\mu$-almost surely and in $L^1(\mu)$ to $\int_R f\,d\mu$.
If $f$ is additionally bounded and Borel, then the continuous-time averages
$$\frac1{\tau}\int_0^\tau f(\Phi_s z)\,ds$$
converge $\mu$-almost surely and in $L^1(\mu)$ to the same mean as
$\tau\to\infty$. No ergodicity of every time map or generic Hamiltonian flow
is asserted.

## Facts & Assumptions

**Given:** A complete invariant domain, a probability $\mu$ invariant under the Hamiltonian flow, $\Delta>0$, ergodicity of $T=\Phi_\Delta$, and the integrability or boundedness condition on $f$ in the relevant clause.

[A1] $\mathrm{AC}_\omega$ is carried for the completed-product Fubini supplier ([[def-countable-choice]]).

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: $\Phi_t$ is a smooth local Hamiltonian flow with the usual flow composition law wherever defined.

[F2] [[def-measure-preserving-transformation-and-system]] and [[def-ergodic-measure-preserving-system]]: the selected map $T$ preserves $\mu$ and is ergodic relative to $\mu$; the cited convention tests strictly invariant sets, $T^{-1}E=E$.

[F3] [[thm-birkhoff-ergodic-probability-case-for-strong-laws]]: for a real $L^1$ observable and an ergodic probability-preserving map, its sampled averages converge almost surely and in $L^1$ to the space mean. The actual supplier statement permits noninvertible maps.

[F4] [[thm-tonelli-and-fubini-for-completed-product-measures]]: for the completed product of time Lebesgue measure and $\mu$, the bounded jointly measurable integrand may be integrated in either order.

[F5] [[thm-dominated-convergence]]: a uniformly bounded sequence on the probability space that converges almost everywhere also converges in $L^1$.

[F6] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: flow invariance of $\mu$ preserves the integral of an integrable observable under each $\Phi_s$.

## Proof

**Given:** [A1], [F1]–[F6], and the hypotheses in the statement.

1.1 The map $T=\Phi_\Delta|_R$ is a measurable self-map preserving $\mu$, and it is ergodic by hypothesis. Apply [F3] to the real observable $f\in L^1(\mu)$. This proves the sampled almost-sure and $L^1$ convergence to $\int_R f\,d\mu$. [A1, F1, F2, F3, given]

1.2 Now assume $f$ is bounded and Borel. Joint measurability of the flow makes $(s,z)\mapsto f(\Phi_s z)$ measurable. Define $g(z)=\Delta^{-1}\int_0^\Delta f(\Phi_s z)\,ds$. By [F4], $g$ is measurable; $|g|\le\|f\|_\infty$; and by [F6] and Fubini, $\int_Rg\,d\mu=\Delta^{-1}\int_0^\Delta\int_R f(\Phi_sz)\,d\mu(z)\,ds =\int_Rf\,d\mu$. [A1, F4, F6, given]

2.1 The discrete average of $g$ is exactly $N^{-1}\sum_{j<N}g(\Phi_{j\Delta}z) =(N\Delta)^{-1}\int_0^{N\Delta}f(\Phi_s z)\,ds$, by the flow composition law and the partition of the time interval into $N$ blocks of length $\Delta$. Applying the almost-sure part of [F3] to bounded $g$ gives convergence of these block averages to $\int_Rf\,d\mu$. Since they are bounded by $\|f\|_\infty$, [F5] also gives $L^1$ convergence along $\tau=N\Delta$. [F1, F3, F5, step 1.2]

3.1 For arbitrary $\tau=N\Delta+r$ with $0\le r<\Delta$, let
$I_s(z)=\int_0^s f(\Phi_u z)\,du$. Then
$|I_\tau-I_{N\Delta}|\le r\|f\|_\infty$ and
$|I_{N\Delta}|\le N\Delta\|f\|_\infty$. Hence
$$\left|\frac{I_\tau}{\tau}-\frac{I_{N\Delta}}{N\Delta}\right| \le\frac{2\Delta\|f\|_\infty}{\tau}.$$
This deterministic bound tends to zero uniformly in $z$, so the
almost-sure and $L^1$ limits in step 2.1 hold for all real $\tau\to\infty$.
[step 2.1, algebra] ∎

## Remarks

The hypothesis is about the chosen sampled map $\Phi_\Delta$. A continuous flow may be ergodic while a resonant sampled time map is not, so the theorem does not replace the explicit ergodicity assumption.
