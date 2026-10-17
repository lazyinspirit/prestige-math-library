---
id: thm-csm-liouville-entropy-transport
kind: theorem
title: "Liouville transport and fine-grained entropy invariance"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-phase-space-reference
  - def-csm-statistical-state-observable
  - def-countable-choice
  - thm-liouville-volume-preservation
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  def-csm-phase-space-reference: mathematical-premise
  def-csm-statistical-state-observable: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.2.1"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $D\subseteq\Gamma_N$ be an open invariant domain for a $C^2$ Hamiltonian
$H$, and let its actual Hamiltonian flow $\Phi_t:D\to D$ be defined as a
$C^1$ diffeomorphism for each time $t$ considered, with
$\Phi_{-t}=\Phi_t^{-1}$. Let $m_N=c_N\Lambda_N$ be the Liouville
reference measure of [[def-csm-phase-space-reference]]. If $P_0=\rho_0m_N$
is a probability state, define its transported density by
$$\rho_t(z)=\rho_0(\Phi_{-t}z).$$
Then $\rho_t$ is normalized and, for every measurable $f$ for which the
integrals exist,
$$\int_D f(z)\rho_t(z)\,dm_N(z)=\int_D f(\Phi_tz)\rho_0(z)\,dm_N(z).$$
If additionally $\int_D|\rho_0\log\rho_0|\,dm_N<\infty$, with
$0\log0:=0$, then the fine-grained reference-relative entropy
$$S(\rho):=-k\int_D\rho\log\rho\,dm_N\quad(k>0)$$
is constant under this transport. This is an identity for the transported
density; it asserts no relaxation, equilibration or entropy increase.

## Facts & Assumptions

**Given:** The invariant domain, actual diffeomorphic Hamiltonian flow, normalized initial density and the stated entropy integrability.

[A1] $H\in C^2(D,\mathbb R)$ and for each considered $t$, the actual flow $\Phi_t$ is a $C^1$ diffeomorphism of $D$ onto itself with inverse $\Phi_{-t}$.

[A2] $\rho_0\ge0$, $\int_D\rho_0dm_N=1$, and $\int_D|\rho_0\log\rho_0|dm_N<\infty$ for the entropy assertion.

[F1] The phase reference has Liouville volume density ([[def-csm-phase-space-reference]]).

[F2] In a canonical chart, $X_H=(H_p,-H_q)$ is $C^1$. For its $C^1$ flow, differentiating the flow integral equation in the initial point gives $\dot J_t=DX_H(\Phi_tz)J_t$ with $J_0=I$. Differentiating the determinant gives $\frac{d}{dt}\det J_t=(\operatorname{div}X_H)(\Phi_tz)\det J_t=0$: the continuous mixed second partials of $H$ agree. Thus each canonical local flow has Jacobian one at the stated $C^2$ regularity. The smooth case is also [[thm-liouville-volume-preservation]].

[F3] A measure-preserving map preserves integrals of nonnegative measurable and integrable functions ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F4] The nonnegative change-of-variables theorem holds with Countable Choice ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-countable-choice]]).

[F5] Densities, expectations and integrability are interpreted relative to the declared measure ([[def-csm-statistical-state-observable]]).

## Proof

**Given:** [A1]–[A2] and the Liouville and measure-transport interfaces [F1]–[F5].

1.1 By [F1]–[F2], canonical local flow maps have Jacobian one and preserve the constant coordinate reference density. Composition retains this property along each flow segment. Apply [F4] to obtain preservation of measure on each source/target canonical chart pair. A countable atlas partitions $D$ into countably many disjoint Borel chart pieces; summing their measure identities proves global $m_N$-preservation. Apply [F3] to the nonnegative function $\rho_0$ and the inverse flow to obtain $$\int_D\rho_t\,dm_N=\int_D\rho_0(\Phi_{-t}z)\,dm_N(z) =\int_D\rho_0(z)\,dm_N(z)=1.$$ Thus $\rho_t$ is a probability density. [A1, A2, F1, F2, F3, F4]

2.1 For nonnegative measurable $f$, apply [F3] to $f\rho_t$ under $\Phi_t$; then $\rho_t(\Phi_tz)=\rho_0(z)$, giving the displayed transport identity. For integrable signed $f$, apply the same argument separately to its positive and negative parts, whose integrals are finite by the stated existence condition. [A1, F3, F4, step 1.1, algebra]

3.1 The same measure-preserving substitution applied to the nonnegative function $\rho_0\log^+\rho_0$ and to $\rho_0\log^-\rho_0$ separately shows that both parts of $\rho_t\log\rho_t$ have the same integrals as those of $\rho_0\log\rho_0$. They are finite in sum by [A2], and therefore $$\int_D\rho_t\log\rho_t\,dm_N=\int_D\rho_0\log\rho_0\,dm_N.$$ Multiplication by $-k$ proves $S(\rho_t)=S(\rho_0)$. [A2, F3, F5, step 1.1] ∎

