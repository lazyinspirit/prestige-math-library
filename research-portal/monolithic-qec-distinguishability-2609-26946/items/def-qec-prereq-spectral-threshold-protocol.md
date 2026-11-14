---
id: def-qec-prereq-spectral-threshold-protocol
kind: definition
domain: mathematics
title: Exact versus thresholded Kraus rank protocol
status: draft
origin: session
deps:
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-liouville-choi-reshuffle
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-qc-completely-positive-map
  - math:def-qc-kraus-representation
dependency_roles:
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-liouville-choi-reshuffle: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
  math:def-qc-kraus-representation: mathematical-premise
formulation_deps:
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-liouville-choi-reshuffle
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-qc-completely-positive-map
  - math:def-qc-kraus-representation
argument_deps:
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-liouville-choi-reshuffle
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-qc-completely-positive-map
  - math:def-qc-kraus-representation
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 2
---

## Definition

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, with $d=\dim H>0$, and let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a completely positive, trace-preserving linear map. Fix an ordered orthonormal input basis and form its input-first unnormalized Choi matrix $J=\sum_{i,j}|e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Alternatively use the trace-one normalization $J/d$. In either convention let $\lambda_1,\ldots,\lambda_n$ be all eigenvalues of the selected matrix, repeated according to multiplicity, where $n=d\dim K$.

The **exact Kraus rank** is the number of $\lambda_k>0$. For a specified threshold $\epsilon>0$ in the units of the selected normalization, the **threshold count** is $\#\{k:\lambda_k>\epsilon\}$; equality with the threshold is excluded. These are distinct quantities: a threshold count alone does not establish the exact rank. Switching from $J$ to $J/d$ divides every eigenvalue and any equivalent threshold by $d$.

For a numerical report, record the normalization, $\epsilon$, the computed real eigenvalue estimates $\widehat\lambda_k$, the strict comparison used, and the handling of negative estimates. If a certified bound $\delta\geq0$ is available after ordering both lists nonincreasingly, it means $|\widehat\lambda_k-\lambda_k|\leq\delta$ for every $k$; otherwise report the error bound as unknown. The raw numerical count is $\#\{k:\widehat\lambda_k>\epsilon\}$. With a certified bound, report also the lower count $\#\{k:\widehat\lambda_k-\delta>\epsilon\}$ and upper count $\#\{k:\widehat\lambda_k+\delta>\epsilon\}$. They bound the exact threshold count; if they agree, they certify it. A computed negative estimate is not by itself evidence that the exact Choi matrix has a negative eigenvalue. Do not silently clip it: record any clipping separately and apply the stated error guarantee to the values actually used for certification.

## Definition references

[[lem-qec-prereq-canonical-choi-weights]]

[[def-qec-prereq-liouville-choi-reshuffle]]

[[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[math:def-qc-completely-positive-map]]

[[math:def-qc-kraus-representation]]

## Justification

The Choi convention is the input-first convention used in the reshuffling interface. The canonical Choi result gives positivity and identifies the number of positive eigenvalues, counted with multiplicity, with the minimum number of Kraus operators. The finite-dimensional spectral theorem gives a real eigenvalue list for the Hermitian Choi matrix. Trace preservation gives $\operatorname{Tr}J=\sum_i\operatorname{Tr}\mathcal N(|e_i\rangle\langle e_i|)=d$, so $J/d$ has trace one; scalar multiplication divides its eigenvalues by $d$. Thus both normalizations and their threshold conversion are well defined. [[def-qec-prereq-liouville-choi-reshuffle]] [[lem-qec-prereq-canonical-choi-weights]] [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]] [[math:def-qc-completely-positive-map]] [[math:def-qc-kraus-representation]]

For each ordered index the supplied error bound places $\lambda_k$ between $\widehat\lambda_k-\delta$ and $\widehat\lambda_k+\delta$. Hence every index counted by the lower count has $\lambda_k>\epsilon$, and every index with $\lambda_k>\epsilon$ appears in the upper count. Equal bounds therefore determine the threshold count. Since eigenvalues in $(0,\epsilon]$ contribute to exact rank but not to the threshold count, the latter alone need not determine the former. The error bound is an input to this conditional conclusion, not a claim that a numerical method has provided one. [[lem-qec-prereq-canonical-choi-weights]]
