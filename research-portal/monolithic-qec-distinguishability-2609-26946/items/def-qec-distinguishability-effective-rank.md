---
id: def-qec-distinguishability-effective-rank
kind: definition
domain: mathematics
title: Effective Kraus rank and branch weight
status: published
origin: session
deps:
  - def-qec-distinguishability-kraus-rank
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
formulation_deps:
  - def-qec-distinguishability-kraus-rank
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
argument_deps:
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
dependency_roles:
  def-qec-distinguishability-kraus-rank: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-spectral-threshold-protocol: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 4, first paragraph and Fig. 2 caption
      statement: The article counts canonical Kraus operators whose weights exceed
        10^-8 and calls this number the effective Kraus rank; the weight divided
        by the input dimension is the branch probability for a maximally mixed
        input.
      hypotheses: The article's finite-dimensional channel and canonical
        Kraus-operator setting.
      reading_limits: Article-origin attribution from the supplied extracted text of
        PDF page 4. This citation is not used as proof of the mathematical
        prerequisites or as a numerical replication of Fig. 2.
dependency_level: 3
---

## Definition

Let $H$ and $K$ be finite-dimensional complex inner-product spaces with $d=\dim H>0$, and let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, meaning a completely positive, trace-preserving linear map. Here $\mathcal L(H)$ is the space of linear endomorphisms of $H$. Fix an ordered orthonormal basis $(e_i)$ of $H$ and form the input-first, unnormalized Choi matrix $J=\sum_{i,j}|e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$.

Choose an orthonormal eigenvector $v_k$ for each positive eigenvalue $\lambda_k$ of $J$, repeated with multiplicity. The associated canonical Kraus operator $E_k:H\to K$ is defined by $\sum_i e_i\otimes E_ke_i=\sqrt{\lambda_k}v_k$. Its **weight** is $w_k=\operatorname{Tr}(E_k^\dagger E_k)$. The article's **effective Kraus rank** is $r_{\mathrm{eff}}=\#\{k:w_k>10^{-8}\}$, with a strict inequality. The **exact Kraus rank** is the minimum number of operators in any finite Kraus representation of the channel; equivalently, it counts all positive weights, including those at or below the threshold.

The branch associated with $E_k$ is the map $X\mapsto E_kXE_k^\dagger$. For the maximally mixed input $I_H/d$, its probability in this canonical instrument is $w_k/d$. This is a property of the specified mathematical instrument; a canonical decomposition alone does not identify a unique physical measurement record.

## Definition references

[[def-qec-distinguishability-kraus-rank]]

[[lem-qec-prereq-canonical-choi-weights]]

[[def-qec-prereq-spectral-threshold-protocol]]

## Facts & Assumptions

[F1] In the stated finite-dimensional channel setting, the canonical operators form a Kraus representation, $w_k=\lambda_k$, and the exact Kraus rank is the number of positive eigenvalues of $J$, counted with multiplicity. [[lem-qec-prereq-canonical-choi-weights]]

[F2] The canonical branch maps form an instrument, and the probability of branch $k$ on $I_H/d$ is $w_k/d$. [[lem-qec-prereq-canonical-choi-weights]]

[F3] A threshold count depends on the chosen Choi normalization and excludes weights equal to the threshold when the comparison is strict. [[def-qec-prereq-spectral-threshold-protocol]]

## Justification

By [F1], the canonical weights are precisely the positive eigenvalues of the unnormalized Choi matrix, counted with multiplicity. Consequently the count is finite and independent of the choice of orthonormal basis within a repeated-eigenvalue eigenspace, although the individual operators may change. The threshold count cannot exceed exact rank; it is smaller precisely when a positive weight is at most $10^{-8}$. By [F2], the stated branch probability follows for the specified instrument. By [F3], using $J/d$ instead would divide the weights and the equivalent threshold by $d$; the numerical threshold in this definition applies to $J$ itself. [[lem-qec-prereq-canonical-choi-weights]] [[def-qec-prereq-spectral-threshold-protocol]]
