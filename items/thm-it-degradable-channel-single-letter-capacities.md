---
id: thm-it-degradable-channel-single-letter-capacities
kind: theorem
title: Single-letter quantum and private capacities of degradable channels
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-it-degradable-channel
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-private-information
  - lem-it-degradable-channel-coherent-information-concavity-and-subadditivity
  - lem-it-maximum-coherent-information-attained
  - thm-it-quantum-channel-capacity-regularized-coherent-information
  - thm-it-quantum-channel-capacity-regularized-private-information
  - thm-qc-channels-compose-and-tensor
  - lem-it-private-information-is-coherent-information-difference
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 8"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, Theorem 13.5.2 and §24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "Devetak and Shor, The capacity of a quantum channel for simultaneous transmission of classical and quantum information, §4"
      url: "https://arxiv.org/pdf/quant-ph/0311131"
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional degradable channel with a fixed complement $\mathcal N^c$. Then

$$Q(\mathcal N)=P(\mathcal N)=\max_{\rho\in\mathcal D(A)}I_c(\rho,\mathcal N),$$

and both regularizations in the quantum and private capacity formulas collapse to this one-use maximum.

## Facts & Assumptions

**Given:** The finite-dimensional degradable channel and chosen complement in the Statement.

[F1] [[def-it-degradable-channel]]: a degrading channel $\mathcal D:B\to E$ satisfies $\mathcal N^c=\mathcal D\circ\mathcal N$.

[F2] [[lem-it-degradable-channel-coherent-information-concavity-and-subadditivity]]: for a degradable channel, coherent information is concave and nonnegative; for product degradable channels it is subadditive on joint inputs and its optimized value is additive.

[F3] [[lem-it-maximum-coherent-information-attained]]: the finite-dimensional coherent information maximum is attained.

[F4] [[thm-it-quantum-channel-capacity-regularized-coherent-information]] and [[thm-it-quantum-channel-capacity-regularized-private-information]]: the general capacities equal their regularized coherent-information and private-information sequences, respectively.

[F5] [[lem-it-private-information-is-coherent-information-difference]]: for an ensemble $\{p_x,\rho_x\}$, $I_p=I_c(\bar\rho,\mathcal N)-\sum_xp_xI_c(\rho_x,\mathcal N)$.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: each density operator is a finite convex combination of rank-one eigenprojections.

## Proof

1.1 The tensor power of a degradable channel is degradable: the product degrading map $\mathcal D^{\otimes n}$ is a channel by [[thm-qc-channels-compose-and-tensor]], and it maps $(\mathcal N^{\otimes n})(\rho)$ to $(\mathcal N^c)^{\otimes n}(\rho)$. Therefore [F2] gives $\sup_\rho I_c(\rho,\mathcal N^{\otimes n})=n\max_\rho I_c(\rho,\mathcal N)$. Substituting in the regularized quantum formula [F4] yields $Q(\mathcal N)=\max_\rho I_c(\rho,\mathcal N)$. [F1, F2, F3, F4, given, algebra]

2.1 For any $n$-use input ensemble $\{p_x,\rho_x\}$, its tensor-power channel is degradable by step 1.1. By [F5], its private information is the coherent information of the average minus the average branch coherent information. Each branch term is nonnegative by [F2], so this private information is at most $I_c(\bar\rho,\mathcal N^{\otimes n})\le n\max_\rho I_c(\rho,\mathcal N)$. Hence the $n$-use private-information supremum has the same upper bound. [F2, F5, step 1.1, algebra]

3.1 Choose a maximizing state $\rho_*$ using [F3], and decompose it spectrally as $\rho_* =\sum_jp_j|u_j\rangle\langle u_j|$ using [F6]. For a pure input $|u_j\rangle\langle u_j|$, choose a one-dimensional purification reference; the joint output-reference state has the same nonzero eigenvalues as $\mathcal N(|u_j\rangle\langle u_j|)$, so the defining formula in [[def-it-quantum-channel-complement-and-coherent-information]] gives $I_c(|u_j\rangle\langle u_j|,\mathcal N)=0$. Therefore the pure-state ensemble has private information $I_c(\rho_*,\mathcal N)$ by [F5]. Thus $p_1\ge\max_\rho I_c(\rho,\mathcal N)$; step 2.1 with $n=1$ gives the reverse inequality, and step 2.1 for all $n$ gives $p_n/n\le\max_\rho I_c(\rho,\mathcal N)$. The regularized formula [F4] therefore yields $P(\mathcal N)=\max_\rho I_c(\rho,\mathcal N)$. [F2, F3, F4, F5, F6, step 2.1, algebra, construct]

4.1 The identities in steps 1.1 and 3.1 prove the stated equality and remove both regularizations. [step 1.1, step 3.1, algebra] ∎
