---
id: lem-it-quantum-coherent-information-complement-identity
kind: lemma
title: Coherent information equals output entropy minus environment entropy
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - thm-qc-finite-stinespring-dilation
  - def-it-von-neumann-entropy
  - def-qc-ensemble-and-purification
  - thm-qc-purification-existence-and-unitary-equivalence
  - thm-qc-schmidt-decomposition
  - def-qc-partial-trace
  - def-qc-first-factor-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-qc-wire-permutation-is-unitary
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces, bases, and spectral families are finite-dimensional."
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
    - title: "John Watrous, The Theory of Quantum Information, Proposition 8.17 and §8.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §13.5"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional channel, let $V:A\to B\otimes E$ be a finite Stinespring isometry, let $\mathcal N^c(X)=\operatorname{Tr}_B(VXV^*)$, and let $\rho$ be a density operator on $A$. Then

$$I_c(\rho,\mathcal N)=S(\mathcal N(\rho))-S(\mathcal N^c(\rho)).$$

The right-hand side is independent of the chosen Stinespring dilation, since it equals the purification-defined quantity in [[def-it-quantum-channel-complement-and-coherent-information]].

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $A,B,E$, a channel $\mathcal N:A\to B$, a Stinespring isometry $V:A\to B\otimes E$ for $\mathcal N$, and a density operator $\rho$ on $A$.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]]: for a purification $|\psi\rangle\in A\otimes R$, $I_c(\rho,\mathcal N)=S(\omega_B)-S(\omega_{BR})$, with $\omega_{BR}=(\mathcal N\otimes\operatorname{id}_R)(|\psi\rangle\langle\psi|)$; the chosen complement is $\mathcal N^c(X)=\operatorname{Tr}_B(VXV^*)$.

[F2] [[def-qc-ensemble-and-purification]] and [[thm-qc-purification-existence-and-unitary-equivalence]]: a purification is a unit vector $|\psi\rangle\in A\otimes R$ with $\operatorname{Tr}_R|\psi\rangle\langle\psi|=\rho$, and such a finite purification exists.

[F3] [[thm-qc-schmidt-decomposition]]: a finite pure bipartite vector has a Schmidt decomposition, so its two reduced density operators have the same positive eigenvalues with multiplicities.

[F4] [[thm-qc-finite-stinespring-dilation]]: $\mathcal N(X)=\operatorname{Tr}_E(VXV^*)$ for every input operator $X$.

[F5] [[def-it-von-neumann-entropy]]: $S(\tau)=-\sum_{\lambda_j>0}\lambda_j\ln\lambda_j$ for the eigenvalues of a finite-dimensional density operator; zero eigenvalues contribute zero.

[F6] [[def-qc-partial-trace]], [[def-qc-first-factor-partial-trace]], [[def-qc-tensor-register-and-permutation]], and [[thm-qc-wire-permutation-is-unitary]]: ordered partial traces sum equal traced-factor indices; the factors of $B\otimes E\otimes R$ can be reordered by a unitary wire permutation.

## Proof

1.1 Choose a finite purification $|\psi\rangle\in A\otimes R$ of $\rho$ using [F2], and put $|\Omega\rangle=(V\otimes I_R)|\psi\rangle\in B\otimes E\otimes R$. Since $V$ is an isometry, $|\Omega\rangle$ is a unit vector. Reorder to $B\otimes R\otimes E$ using [F6]; tracing $E$ gives $\omega_{BR}$ because [F4] says $\operatorname{Tr}_E(VXV^*)=\mathcal N(X)$. Tracing $B$ and $R$ gives $\operatorname{Tr}_B(V\rho V^*)=\mathcal N^c(\rho)$: in the ordered product basis, the two finite partial-trace sums contract the $R$ index to $\operatorname{Tr}_R|\psi\rangle\langle\psi|=\rho$ and then contract the $B$ index. [given, F1, F2, F4, F6, construct]

2.1 Regard the reordered $|\Omega\rangle$ as a bipartite vector across $(B\otimes R)|E$. By [F3], the positive eigenvalues of its $BR$ and $E$ marginals coincide. The entropy formula [F5] therefore gives $S(\omega_{BR})=S(\mathcal N^c(\rho))$. Substitute this identity into [F1] to obtain the displayed formula. As the left side of the formula is independent of both the purification and the chosen complement, the right side has the same value for every finite dilation. [F1, F3, F5, step 1.1, algebra] ∎

## Remarks

The equality is a consequence of the purity of the joint reference-output-environment state. It does not require a minimal Stinespring environment.
