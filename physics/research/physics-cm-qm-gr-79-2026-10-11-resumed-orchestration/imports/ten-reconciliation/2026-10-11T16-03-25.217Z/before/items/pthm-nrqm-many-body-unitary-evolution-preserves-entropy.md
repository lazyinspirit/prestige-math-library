---
id: pthm-nrqm-many-body-unitary-evolution-preserves-entropy
aliases: [nrqm-many-body-unitary-evolution-preserves-entropy]
kind: physics-theorem
domain: physics
title: "Unitary evolution preserves entropy and cannot produce the canonical preparation from a different one"
status: draft
origin: pipeline
dependency_level: 12
deps: [def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-observables-framework-observable-and-outcome-law, post-nrqm-many-body-canonical-equilibrium-ensemble, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum, thm-complex-spectral-theorem-for-normal-endomorphisms, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, def-natural-logarithm, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional conservation statement of the declared finite-sector model: under the unitary flow of the model's self-adjoint energy operator, every declared sector preparation keeps its entropy, the adopted canonical preparation is stationary, and a preparation different from it is never mapped to it at any time, so the model's unitary dynamics alone does not produce the canonical preparation. The theorem is about the exact closed-system model and asserts nothing about open systems, about equilibration of individual readouts, about time averages, or about any laboratory sample."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.3-6.4 printed pages 122-131 (PDF pages 130-139): unitary evolution of the density operator, rho(t) = U rho U*, and the Gibbs distribution as the equilibrium density operator"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.1.1 printed page 12: the Liouville equation, its stationary solutions commuting with H, and the remark that the von Neumann entropy is conserved under the Liouville dynamics"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the autonomous-dynamics postulate P4
([[post-nrqm-framework-autonomous-dynamics]]) in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]], the state postulate P1
and the observable postulate P2
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]) in the readings of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] and
[[def-nrqm-many-body-framework-entropy-and-free-energy]], and adopt the
canonical equilibrium-ensemble postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] for the canonical
preparation $\rho_\beta$; assume the Axiom of Countable Choice and the Axiom
of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Work in the
finite-sector class of the entropy definition: the declared model has
finite-dimensional sector space $\mathfrak H_N^\sigma$, self-adjoint energy
operator $H_N^\sigma$ with flow
$U(t)=\exp(-itH_N^\sigma/\hbar)$, and every declared sector preparation
evolves as $\rho(t)=U(t)\rho(0)U(t)^*$ under P4 clause (iii). Then:

(a) *entropy is conserved*: for every declared sector preparation $\rho(0)$
of the model and every $t\in\mathbb R$,
$$s(\rho(t))=s(\rho(0));$$

(b) *the canonical preparation is stationary*:
$U(t)\rho_\beta U(t)^*=\rho_\beta$ for every $t$, and every thermal mean
$\operatorname{tr}(\rho_\beta A)$ of an assigned observable is time
independent;

(c) *no unitary production of the canonical preparation*: if
$\rho(0)\ne\rho_\beta$ then $\rho(t)\ne\rho_\beta$ for every $t\in\mathbb R$;
equivalently, no evolution of this isolated model maps a non-canonical
declared preparation to the canonical one at any time;

(d) *scope*: clauses (a)-(c) concern the model's exact unitary flow in the
finite-sector class and the adopted canonical preparation. They assert
nothing about open systems or environment coupling, about the time behaviour
of individual readouts or their time averages, about an approach of any
readout to a thermal value in a limit, about environments or measurement
models, and about any laboratory sample; in particular clause (c) is not a
claim that no physical system ever approaches thermal equilibrium, but the
statement that the model's P4 dynamics alone does not do so.

## Facts & Assumptions

**Given:** the declared finite-sector model with self-adjoint $H_N^\sigma$, flow $U(t)$, canonical preparation $\rho_\beta$ of the ensemble postulate, and a declared sector preparation $\rho(0)$ with $\rho(t)=U(t)\rho(0)U(t)^*$.

[F1] **Unitary flow and density evolution.** $U(t)=\exp(-itH_N^\sigma/\hbar)$ is a strongly continuous unitary group with $U(t)^*=U(t)^{-1}$ and $U(t+s)=U(t)U(s)$, and $\rho(t)=U(t)\rho(0)U(t)^*$ is a density operator for every $t$ ([[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (b), (c), [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[F2] **Spectral decomposition and entropy.** Every density operator $\rho$ on the finite-dimensional $\mathfrak H_N^\sigma$ has an orthonormal eigenbasis $(u_i)$ with eigenvalues $w_i\ge0$, and $s(\rho)=-\sum_{i:w_i>0}w_i\log w_i$ depends only on the eigenvalue multiset ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[lem-nrqm-composites-rank-one-operator-calculus]], [[def-nrqm-many-body-framework-entropy-and-free-energy]] clause (b), [[def-natural-logarithm]]).

[F3] **Canonical preparation.** $\rho_\beta=Z_N^{-1}e^{-\beta H_N^\sigma}$ with $Z_N=\sum_je^{-\beta E_j}$ is diagonal in an orthonormal eigenbasis $(v_j)$ of $H_N^\sigma$ with strictly positive weights $q_j=Z_N^{-1}e^{-\beta E_j}$, and it is a declared sector preparation ([[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clause (a), [[post-nrqm-many-body-canonical-equilibrium-ensemble]] clause (b)).

## Proof

**Proof technique:** direct; compare eigenvalue multisets under unitary conjugation and use that $\rho_\beta$ is a spectral function of the generator.

**Given:** the data of the statement and [F1]-[F3].

1.1 [Entropy conservation] Let $\rho(0)=\sum_iw_iT_{u_i,u_i}$ be the spectral decomposition of [F2]. By [F1], $U(t)$ is unitary, so $(U(t)u_i)$ is an orthonormal basis and $\rho(t)=\sum_iw_iT_{U(t)u_i,U(t)u_i}$: the eigenvalues of $\rho(t)$ are the same $w_i$ with the same multiplicities. By [F2] the entropy depends only on that multiset, so $s(\rho(t))=s(\rho(0))$ for every $t$. This proves (a). [F1, F2, algebra]

1.2 [Stationarity of the canonical preparation] By [F3] $\rho_\beta$ is diagonal in the eigenbasis $(v_j)$ of $H_N^\sigma$; the same basis diagonalizes $U(t)$ with eigenvalues $e^{-itE_j/\hbar}$, so $U(t)T_{v_j,v_j}U(t)^*=T_{v_j,v_j}$ for every $j$ and hence $U(t)\rho_\beta U(t)^*=\rho_\beta$. Every thermal mean $\operatorname{tr}(\rho_\beta A)$ is therefore time independent by [F1]. This proves (b). [F1, F3, algebra]

2.1 [No unitary production of the canonical preparation] Suppose $\rho(t)=\rho_\beta$ for some $t$. Applying the unitary $U(t)^*$ on both sides and using $U(t)^*=U(t)^{-1}$ from [F1], $\rho(0)=U(t)^*\rho_\beta U(t)=\rho_\beta$ by step 1.2 applied to $-t$. Hence $\rho(0)\ne\rho_\beta$ implies $\rho(t)\ne\rho_\beta$ for every $t$, which is (c). [F1, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 1.1-2.1 prove (a)-(c). The argument used only the unitary flow, the eigenvalue multiset of a preparation and the spectral form of $\rho_\beta$; no environment, measurement model, readout equilibration or laboratory sample entered, which is (d). [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Entropy versus readout equilibration.** Clause (a) constrains the entropy of the full sector preparation; it does not prevent the outcome law of a chosen readout from approaching a stationary average under the flow. Clause (c) is the sharp statement about the preparation itself.
- **Open systems.** The theorem does not apply to a reduced description obtained by tracing out an environment; such a description requires its own model assumption, as P4 clause (v) records.
