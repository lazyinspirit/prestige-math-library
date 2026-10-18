---
id: lem-na-mps-environment-isometry-and-effective-hamiltonian
kind: lemma
title: "Canonical MPS environments are isometric and the effective Hamiltonian is Hermitian"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - def-tensor-train-cores-bond-ranks-and-canonical-gauges
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§4.2, 4.4, 6.2–6.3"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §§2.4.3, 2.7"
      url: "https://arxiv.org/pdf/2606.24803"
dependency_level: 3
---

## Statement

Let a finite open-boundary TT have order $d\ge2$ and be in the following mixed gauge about a one-site or two-site center window $J=[k,k+w-1]$, where $w\in\{1,2\}$: every core strictly left of $J$ is left-isometric and every core strictly right of $J$ is right-isometric. The center coefficient array has shape $r_{k-1}\times n_k\times\cdots\times n_{k+w-1}\times r_{k+w-1}$, with boundary ranks interpreted as one, and $x$ is its vectorization in the fixed lexicographic order. Hold every core outside $J$ fixed. Contracting the fixed prefix and suffix defines a linear embedding $E$ from center coefficients to the full tensor space. Then $E^*E=I$, so $\|Ex\|_F=\|x\|_2$. For every finite Hermitian Hamiltonian input $H$, the effective matrix
$$H_{\mathrm{eff}}:=E^*HE$$
is Hermitian and satisfies
$$\langle Ex,HEx\rangle_F=x^*H_{\mathrm{eff}}x.$$

## Facts & Assumptions

**Given:** A finite open-boundary TT, a one-site or two-site center in mixed canonical gauge, and a self-adjoint finite Hamiltonian.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: a finite Hermitian Hamiltonian input has matrix $H^*=H$ in the standard lexicographic basis.

[F2] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius inner product conjugates the first entry and sums over all coefficient indices.

[F3] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: left core matricizations satisfy $L^*L=I$ and right core matricizations satisfy $RR^*=I$.

## Proof



1.1 Let $L_j$ be the prefix interface through site $j$, with rows indexed by $(i_1,\ldots,i_j)$ and columns by $\alpha_j$. Put $L_0=[1]$. For $j<k$, its recurrence is $L_j=(L_{j-1}\otimes I_{n_j})G_j^{(L)}$, where $G_j^{(L)}$ is the left matricization from [F3]. If $L_{j-1}^*L_{j-1}=I$, then $(L_{j-1}\otimes I)^*(L_{j-1}\otimes I)=I\otimes I$ and hence $L_j^*L_j=G_j^{(L)*}G_j^{(L)}=I$ by [F3]. Induction gives $L_{k-1}^*L_{k-1}=I$. For the suffix, put $R_{d+1}=[1]$ and contract from right to left: for $j>k+w-1$, $R_j=G_j^{(R)}(I_{n_j}\otimes R_{j+1})$, with rows indexed by $\alpha_{j-1}$ and columns by $(i_j,\ldots,i_d)$. Since $R_{j+1}R_{j+1}^*=I$ implies $(I\otimes R_{j+1})(I\otimes R_{j+1})^*=I\otimes I$, the right-isometry in [F3] gives $R_jR_j^*=G_j^{(R)}G_j^{(R)*}=I$. Induction yields $R_{k+w}R_{k+w}^*=I$. [given, F3, induction, algebra]

2.1 By [F1], the full array entries are the finite contractions of the fixed cores with the center coefficients. Expand $\langle Ex,Ey\rangle_F$ using the conjugate-first finite sum in [F2], and first sum over the physical prefix and suffix indices. Those sums replace the interface factors by $L^*L=I$ and $RR^*=I$ from step 1.1. The remaining finite sum is exactly $\langle x,y\rangle_F$. Hence $E^*E=I$ and $\|Ex\|_F=\|x\|_2$. [F1, F2, step 1.1, algebra]

3.1 By [F1], $H^*=H$. Therefore $H_{\mathrm{eff}}^*=(E^*HE)^*=E^*H^*E=E^*HE=H_{\mathrm{eff}}$. Associativity of finite matrix multiplication gives $\langle Ex,HEx\rangle_F=x^*E^*HEx=x^*H_{\mathrm{eff}}x$, as claimed. [F1, algebra] ∎
