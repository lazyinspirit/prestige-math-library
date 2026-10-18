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
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 5.44 proof"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 18 §18.2.1"
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

[F4] [[thm-qc-schmidt-decomposition]]: a finite bipartite vector has an expansion $\sum_js_j|r_j\rangle|a_j\rangle$ with $s_j>0$, both factor families orthonormal, and squared norm $\sum_js_j^2$.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional Hermitian operator has an orthonormal eigenbasis.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle v,w\rangle|^2\le\|v\|^2\|w\|^2$.

[F7] [[def-qc-partial-trace]]: partial trace contracts the repeated factor index in an orthonormal product basis. The trace-pairing identity and basis independence are given by [[thm-qc-partial-trace-characterization-and-basis-independence]].

## Proof



1.1 Choose Kraus families $(E_a)$ and $(D_b)$ for the encoder and decoder from [F2]. The composite channel has Kraus operators $K_{ba}=D_bE_a$, each of rank at most $M$ because it factors through the $M$-dimensional code space. By [F3], $$\sum_{a,b}K_{ba}^*K_{ba}=\sum_a E_a^*\left(\sum_bD_b^*D_b\right)E_a=\sum_aE_a^*E_a=I.$$ [F1, F2, F3, algebra, construct]

1.2 By [F4], write $|\phi\rangle=\sum_{j=1}^r s_j|r_j\rangle|a_j\rangle$, ordering the $s_j$ decreasingly. Expanding $|\phi\rangle\langle\phi|$ and contracting either orthonormal factor family by [F7] gives $$\rho_R:=\operatorname{Tr}_{A^{\otimes n}}(|\phi\rangle\langle\phi|)=\sum_{j=1}^r s_j^2|r_j\rangle\langle r_j|,\qquad \rho^{\otimes n}=\sum_{j=1}^r s_j^2|a_j\rangle\langle a_j|.$$ Indeed each cross term with indices $j,k$ contracts with coefficient $\langle a_k|a_j\rangle=\delta_{jk}$, or $\langle r_k|r_j\rangle=\delta_{jk}$, respectively. Thus both reduced operators have exactly the positive eigenvalues $s_j^2$, with any remaining eigenvalues zero. Complete $(r_j)_{j=1}^r$ by an orthonormal basis of $\ker\rho_R$, available from [F5] applied to the zero operator there. On this full reference basis, $\rho_R$ has eigenvalues $\lambda_j^{(n)}$, with the Statement's zero padding; in particular $\sum_j\lambda_j^{(n)}=\sum_{j=1}^rs_j^2=1$. [F1, F4, F5, F7, algebra, construct]

2.1 For each $K=K_{ba}$ let $|\eta_K\rangle=(I_R\otimes K)|\phi\rangle$, and let $P_K$ be the projection onto its reference-side Schmidt support (zero if $\eta_K=0$). Since $|\eta_K\rangle\in H_R\otimes\operatorname{ran}K$, apply [F4] on these two factors: there are at most $\dim\operatorname{ran}K\le M$ orthonormal second-factor vectors. Thus $\operatorname{rank}P_K\le M$ and $(P_K\otimes I)|\eta_K\rangle=|\eta_K\rangle$. Cauchy–Schwarz and the trace-pairing identity in [F7] give $$|\langle\phi|\eta_K\rangle|^2\le\langle\phi|(P_K\otimes I)|\phi\rangle\,\|\eta_K\|^2=\operatorname{tr}(\rho_RP_K)\|\eta_K\|^2.$$ [F4, F6, F7, step 1.1, step 1.2, algebra]

3.1 Put $q_j=\langle r_j,P_Kr_j\rangle$. Then $0\le q_j\le1$, and the full reference basis from step 1.2 gives $\sum_jq_j=\operatorname{tr}(P_K)=\operatorname{rank}P_K\le M$. If $M\ge\dim H_R$, then $\operatorname{tr}(\rho_RP_K)\le1=\sum_{j\le M}\lambda_j^{(n)}$, since the source has at most $\dim H_R$ positive eigenvalues. Otherwise, ordering the eigenvalues gives $$\operatorname{tr}(\rho_RP_K)=\sum_j\lambda_j^{(n)}q_j\le\sum_{j\le M}\lambda_j^{(n)}q_j+\lambda_M^{(n)}\left(M-\sum_{j\le M}q_j\right)\le\sum_{j\le M}\lambda_j^{(n)}.$$ Thus the overlap in step 2.1 is bounded by $\left(\sum_{j\le M}\lambda_j^{(n)}\right)\|\eta_K\|^2$. [F5, step 1.2, step 2.1, algebra, cases]

4.1 Expanding the recovered state in the composite Kraus family from step 1.1 gives $F_e^{(n)}=\sum_{a,b}|\langle\phi|\eta_{K_{ba}}\rangle|^2$. By step 3.1 this is at most $\left(\sum_{j\le M}\lambda_j^{(n)}\right)\sum_{a,b}\|\eta_{K_{ba}}\|^2$. Step 1.1 gives $\sum_{a,b}\|\eta_{K_{ba}}\|^2=\langle\phi|I_R\otimes(\sum_{a,b}K_{ba}^*K_{ba})|\phi\rangle=\|\phi\|^2=1$, proving the bound. [F1, F3, step 1.1, step 3.1, algebra] ∎

