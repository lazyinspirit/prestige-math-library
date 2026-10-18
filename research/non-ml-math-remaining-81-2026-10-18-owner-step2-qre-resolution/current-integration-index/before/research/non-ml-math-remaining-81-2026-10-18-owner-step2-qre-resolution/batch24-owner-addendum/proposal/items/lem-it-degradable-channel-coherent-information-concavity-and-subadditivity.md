---
id: lem-it-degradable-channel-coherent-information-concavity-and-subadditivity
kind: lemma
title: Coherent-information concavity and subadditivity for degradable channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-degradable-channel
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-quantum-channel-private-information
  - def-it-classical-quantum-state-and-holevo-information
  - def-it-finite-quantum-information-measures
  - lem-it-private-information-is-coherent-information-difference
  - lem-it-quantum-and-private-information-product-additivity
  - thm-it-finite-quantum-mutual-information-data-processing
  - thm-it-quantum-entropy-identities
  - thm-qc-channels-compose-and-tensor
  - lem-it-quantum-coherent-information-complement-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-qc-schmidt-decomposition
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all ensembles and spectral decompositions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Exercise 8.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §§13.5 and 24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\mathcal N_i:A_i\to B_i$ for $i=1,2$ be finite-dimensional degradable channels with complements $\mathcal N_i^c=\mathcal D_i\circ\mathcal N_i$. Then $\rho\mapsto I_c(\rho,\mathcal N_i)$ is concave and nonnegative. For every joint input state $\rho_{A_1A_2}$,

$$I_c(\rho_{A_1A_2},\mathcal N_1\otimes\mathcal N_2)\le I_c(\rho_{A_1},\mathcal N_1)+I_c(\rho_{A_2},\mathcal N_2).$$

Consequently the supremum coherent information of $\mathcal N_1\otimes\mathcal N_2$ is the sum of the two single-channel suprema.

## Facts & Assumptions

**Given:** The finite-dimensional degradable channels and joint input state in the Statement.

[F1] [[def-it-degradable-channel]]: $\mathcal N_i^c=\mathcal D_i\circ\mathcal N_i$ for a finite-dimensional channel $\mathcal D_i$.

[F2] [[lem-it-private-information-is-coherent-information-difference]]: $I_p(\mathcal E,\mathcal N)=I_c(\bar\rho,\mathcal N)-\sum_xp_xI_c(\rho_x,\mathcal N)$.

[F3] [[thm-it-quantum-entropy-identities]]: for a finite classical-quantum state, its mutual information equals its Holevo information.

[F4] [[thm-it-finite-quantum-mutual-information-data-processing]]: local channels on either register cannot increase finite quantum mutual information.

[F5] [[lem-it-quantum-coherent-information-complement-identity]]: $I_c(\rho,\mathcal N)=S(\mathcal N(\rho))-S(\mathcal N^c(\rho))$.

[F6] [[def-it-finite-quantum-information-measures]]: quantum mutual information is defined by $I(X:Y)=S(X)+S(Y)-S(XY)$.

[F7] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every finite-dimensional density operator is a finite mixture of pure eigenstates.

[F8] [[lem-it-quantum-and-private-information-product-additivity]]: coherent information is additive on product input states for product channels.

[F9] [[thm-qc-schmidt-decomposition]]: the receiver and environment marginals of the pure Stinespring output of a pure input have the same positive eigenvalues.

[F10] [[thm-natural-logarithm-laws]]: $\ln(xy)=\ln x+\ln y$ for positive $x,y$; it supports the cq entropy identity stated in [F3].

## Proof

1.1 Fix a finite input ensemble $\mathcal E=\{p_x,\rho_x\}$ with average $\bar\rho$. By [F2] and [F3], $I_p(\mathcal E,\mathcal N_i)=I(X;B_i)-I(X;E_i)$, where $B_i$ and $E_i$ denote the receiver and complementary output registers for the ensemble. The finite cq entropy calculation uses the block eigenvalues $p_x\lambda_{xj}$ and the logarithm product law [F10]. Since $E_i$ is obtained from $B_i$ by $\mathcal D_i$ in [F1], [F4] gives $I(X;E_i)\le I(X;B_i)$. Thus $I_p(\mathcal E,\mathcal N_i)\ge0$. [F1, F2, F3, F4, F10, given, algebra]

1.2 For a joint state $\rho_{A_1A_2}$, write $\rho_i$ for its marginals, $\omega_{B_1B_2}=(\mathcal N_1\otimes\mathcal N_2)(\rho)$, and $\eta_{E_1E_2}=(\mathcal N_1^c\otimes\mathcal N_2^c)(\rho)$. Expanding the entropies in [F5] and using [F2], [F6] gives $I_c(\rho,\mathcal N_1\otimes\mathcal N_2)-I_c(\rho_1,\mathcal N_1)-I_c(\rho_2,\mathcal N_2)=-I(B_1:B_2)_\omega+I(E_1:E_2)_\eta$. The tensor product $\mathcal D_1\otimes\mathcal D_2$ maps $\omega$ to $\eta$, so [F4] gives $I(E_1:E_2)_\eta\le I(B_1:B_2)_\omega$. The right side is therefore nonpositive, proving the claimed inequality. [F1, F2, F4, F5, F6, algebra]

2.1 Rewrite the inequality $I_p(\mathcal E,\mathcal N_i)\ge0$ using [F2]. For every finite ensemble with average $\bar\rho$, this yields $I_c(\bar\rho,\mathcal N_i)\ge\sum_xp_xI_c(\rho_x,\mathcal N_i)$, which is exactly concavity of coherent information on the finite-dimensional state space. [F2, step 1.1, algebra]

3.1 Let $\rho=\sum_j\lambda_j|u_j\rangle\langle u_j|$ be a spectral decomposition from [F7]. For each pure $|u_j\rangle$, an isometric Stinespring dilation produces a pure receiver-environment vector, so the two marginal entropies agree by [F9] and [F5] gives $I_c(|u_j\rangle\langle u_j|,\mathcal N_i)=0$. Concavity from step 2.1 therefore implies $I_c(\rho,\mathcal N_i)\ge\sum_j\lambda_j\cdot0=0$. [F5, F7, F9, step 2.1, algebra, construct]

4.1 The inequality in step 1.2 gives the upper bound on the optimized coherent information. Product inputs give equality by [F8]; choosing inputs within arbitrary $\delta>0$ of each finite supremum and letting $\delta\downarrow0$ proves additivity of the supremum. [F8, step 1.2, algebra, choose] ∎



The proof uses the finite entropy-identity and strong-subadditivity interfaces listed above. Their source status does not alter the stated mathematical hypotheses.
