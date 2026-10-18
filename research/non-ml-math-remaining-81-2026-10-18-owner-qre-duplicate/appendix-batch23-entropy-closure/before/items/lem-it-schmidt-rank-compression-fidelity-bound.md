---
id: lem-it-schmidt-rank-compression-fidelity-bound
kind: lemma
title: Compression dimension bounds entanglement fidelity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-quantum-source-and-compression-code
  - thm-qc-kraus-choi-equivalence
  - thm-qc-trace-preserving-kraus-normalization
  - thm-qc-schmidt-decomposition
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 5.44 proof"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 18 §18.2.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\rho^{\otimes n}$ have decreasing eigenvalues $\lambda_1^{(n)}\ge\lambda_2^{(n)}\ge\cdots\ge0$, padded by zeros, and let an $(n,M)$ compression code have intermediate dimension $M$ as in [[def-it-quantum-source-and-compression-code]]. Then

$$F_e^{(n)}\le\sum_{j=1}^{M}\lambda_j^{(n)}.$$

## Facts & Assumptions

**Given:** A finite-dimensional density operator $\rho$, a purification of $\rho^{\otimes n}$, and encoder and decoder channels factoring through a code space of dimension $M$.

[F1] [[def-it-quantum-source-and-compression-code]]: the squared entanglement fidelity is the overlap of the purified source with the recovered joint state, and the encoder and decoder are quantum channels.

[F2] [[thm-qc-kraus-choi-equivalence]]: every finite-dimensional completely positive map has a finite Kraus representation.

[F3] [[thm-qc-trace-preserving-kraus-normalization]]: a trace-preserving Kraus family satisfies $\sum_jK_j^*K_j=I$.

[F4] [[thm-qc-schmidt-decomposition]]: a finite bipartite vector has an orthonormal Schmidt decomposition, whose squared coefficients are the eigenvalues of either reduced state.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional Hermitian operator has an orthonormal eigenbasis.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle v,w\rangle|^2\le\|v\|^2\|w\|^2$.

## Proof

1.1 Choose Kraus families $(E_a)$ and $(D_b)$ for the encoder and decoder from [F2]. The composite channel has Kraus operators $K_{ba}=D_bE_a$, each of rank at most $M$ because it factors through the $M$-dimensional code space. By [F3],
$$\sum_{a,b}K_{ba}^*K_{ba}=\sum_a E_a^*\left(\sum_bD_b^*D_b\right)E_a=\sum_aE_a^*E_a=I.$$
[F1, F2, F3, algebra, construct]

2.1 Write a Schmidt decomposition of the chosen purification as $|\phi\rangle=\sum_j\sqrt{\lambda_j}|r_j\rangle|a_j\rangle$ by [F4]. For each $K=K_{ba}$ let $|\eta_K\rangle=(I_R\otimes K)|\phi\rangle$, and let $P_K$ be the projection onto its reference-side Schmidt support (zero if $\eta_K=0$). Then $\operatorname{rank}P_K\le M$, $(P_K\otimes I)|\eta_K\rangle=|\eta_K\rangle$, and Cauchy–Schwarz gives
$$|\langle\phi|\eta_K\rangle|^2\le\langle\phi|(P_K\otimes I)|\phi\rangle\,\|\eta_K\|^2=\operatorname{tr}(P_K\rho_R)\|\eta_K\|^2.$$
[F4, F5, F6, step 1.1, algebra]

3.1 Put $q_j=\langle r_j,P_Kr_j\rangle$. Then $0\le q_j\le1$, and the finite orthonormal basis $(r_j)$ gives $\sum_jq_j=\operatorname{tr}(P_K)=\operatorname{rank}P_K\le M$. If $M$ is at least the dimension of $R$, $\operatorname{tr}(P_K\rho_R)\le1=\sum_{j\le M}\lambda_j^{(n)}$. Otherwise, ordering the eigenvalues gives
$$\operatorname{tr}(P_K\rho_R)=\sum_j\lambda_j^{(n)}q_j\le\sum_{j\le M}\lambda_j^{(n)}q_j+\lambda_M^{(n)}\left(M-\sum_{j\le M}q_j\right)\le\sum_{j\le M}\lambda_j^{(n)}.$$
Thus the reference overlap in step 2.1 is bounded by $\left(\sum_{j\le M}\lambda_j^{(n)}\right)\|\eta_K\|^2$. [F4, F5, step 2.1, algebra, cases]

4.1 Expanding the recovered state in the composite Kraus family from step 1.1 gives $F_e^{(n)}=\sum_{a,b}|\langle\phi|\eta_{K_{ba}}\rangle|^2$. By step 3.1 this is at most $\left(\sum_{j\le M}\lambda_j^{(n)}\right)\sum_{a,b}\|\eta_{K_{ba}}\|^2$. The last sum is the trace of the output of the trace-preserving composite channel on $|\phi\rangle\langle\phi|$, hence equals $1$ by [F1], [F3], and step 1.1. This proves the bound. [F1, F3, step 1.1, step 3.1, algebra] ∎
