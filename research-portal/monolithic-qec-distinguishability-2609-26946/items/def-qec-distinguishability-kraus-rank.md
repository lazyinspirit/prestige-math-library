---
id: def-qec-distinguishability-kraus-rank
kind: definition
domain: mathematics
title: Kraus rank and Choi representation
status: published
origin: session
deps:
  - math:def-hilbert-schmidt-operator
  - math:def-trace-of-an-endomorphism
  - math:def-qc-quantum-channel
  - math:def-qc-kraus-representation
  - math:def-qc-choi-matrix
  - lem-qec-prereq-canonical-choi-weights
formulation_deps:
  - math:def-hilbert-schmidt-operator
  - math:def-trace-of-an-endomorphism
  - math:def-qc-quantum-channel
  - math:def-qc-kraus-representation
  - math:def-qc-choi-matrix
  - lem-qec-prereq-canonical-choi-weights
argument_deps:
  - math:def-hilbert-schmidt-operator
  - math:def-trace-of-an-endomorphism
  - math:def-qc-kraus-representation
  - lem-qec-prereq-canonical-choi-weights
dependency_roles:
  math:def-hilbert-schmidt-operator: mathematical-premise
  math:def-trace-of-an-endomorphism: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:def-qc-kraus-representation: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, second paragraph; p. 4, first paragraph
      statement: The article defines Kraus rank as the minimum number of Kraus
        operators in a channel representation and uses canonical Kraus operators
        with weights given by their squared Hilbert–Schmidt norms.
      hypotheses: The article's finite-dimensional channel setting.
      reading_limits: Article-origin attribution from the supplied extracted text;
        this citation is not used to justify the definition or the
        decomposition.
dependency_level: 2
---

## Definition

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, with $d=\dim H>0$, and fix an ordered orthonormal basis $(e_i)_{i=1}^d$ of $H$. Write $\mathcal L(H)$ for the linear endomorphisms of $H$. A quantum channel $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ is a complex-linear, completely positive, trace-preserving map: complete positivity means that $\operatorname{id}_{\mathcal L(E)}\otimes\mathcal N$ takes positive operators to positive operators for every finite-dimensional complex inner-product space $E$, and trace preservation means $\operatorname{Tr}\mathcal N(X)=\operatorname{Tr}X$ for every $X$.

A finite Kraus representation of $\mathcal N$ is a finite family of linear maps $A_a:H\to K$ such that $\mathcal N(X)=\sum_a A_a X A_a^\dagger$ for every $X\in\mathcal L(H)$, where $A_a^\dagger$ is the adjoint. The **Kraus rank** is the minimum number of operators in such a representation; zero operators are allowed but cannot reduce this minimum.

The input-first, unnormalized **Choi matrix** relative to the chosen basis is $J=\sum_{i,j=1}^d |e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Given an orthonormal family of eigenvectors $v_k$ for all positive eigenvalues $\lambda_k$ of $J$, repeated according to multiplicity, define the associated **canonical Kraus operators** $K_k:H\to K$ by $\sum_i e_i\otimes K_k e_i=\sqrt{\lambda_k}v_k$. For a linear map $T:H\to K$, its finite-dimensional **Hilbert–Schmidt norm** is $\|T\|_{\mathrm{HS}}=(\sum_{i=1}^d\|Te_i\|^2)^{1/2}$; this value is independent of the orthonormal input basis. Their **weights** are $w_k=\operatorname{Tr}(K_k^\dagger K_k)$, the squares of their Hilbert–Schmidt norms.

## Definition references

[[math:def-qc-quantum-channel]]

[[math:def-qc-kraus-representation]]

[[math:def-qc-choi-matrix]]

[[lem-qec-prereq-canonical-choi-weights]]

[[math:def-hilbert-schmidt-operator]]

[[math:def-trace-of-an-endomorphism]]

## Justification

**Given:** The finite-dimensional spaces, ordered orthonormal input basis, channel and canonical operators in the Definition.

1.1 For every linear map $T:H\to K$, the finite-basis specialization of the Hilbert–Schmidt definition is $\|T\|_{\mathrm{HS}}^2=\sum_i\|Te_i\|^2$. The trace of $T^\dagger T$ is the sum of its diagonal coefficients in this orthonormal basis, and the adjoint identity gives each coefficient as $\|Te_i\|^2$. Hence $\operatorname{Tr}(T^\dagger T)=\sum_i\|Te_i\|^2=\|T\|_{\mathrm{HS}}^2$. Computing in any other orthonormal input basis gives the same basis-independent trace, so the sum and its nonnegative square root are independent of that basis. [[math:def-hilbert-schmidt-operator]] [[math:def-trace-of-an-endomorphism]] [[math:def-qc-kraus-representation]] [given, algebra]

2.1 The canonical Choi lemma applies to precisely the spaces, channel and Choi convention in the Definition. It supplies the constructed finite Kraus representation and states directly that its size $r=\operatorname{rank}J$ is the minimum among all finite Kraus representation sizes. Thus the minimum used to define Kraus rank exists. The lemma also gives $\operatorname{Tr}(K_k^\dagger K_l)=\lambda_k\delta_{kl}$, so step 1.1 yields $w_k=\lambda_k=\|K_k\|_{\mathrm{HS}}^2$. The construction and weights are well defined after choosing the eigenvectors. As the lemma explains, a repeated eigenvalue permits an orthonormal eigenbasis change, so individual canonical operators need not be unique; the positive eigenvalues with multiplicities, and hence the weights, remain unchanged. [[lem-qec-prereq-canonical-choi-weights]] [given, step 1.1] ∎
