---
id: thm-qsm-dt-pinching-entropy
kind: theorem
title: Pinching raises finite entropy
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-qsm-dt-channel-definition
  - def-qsm-relative-entropy-domain
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-choi-kraus
  - thm-qsm-finite-entropy-composition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
  thm-qsm-finite-entropy-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 4, §4.1.1, Proposition 4.6
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.4.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2.2, Theorem 5.23
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
---

## Statement

Let $H$ be a complex Hilbert space of finite dimension $d\geq1$, and let $P_0,\ldots,P_{r-1}$ be pairwise orthogonal projections, meaning $P_j=P_j^*=P_j^2$ and $P_jP_k=0$ for $j\ne k$, with $r\geq1$ and $\sum_{j=0}^{r-1}P_j=I$. Define the pinching map $\Delta:M_d(\mathbb C)\to M_d(\mathbb C)$ by $\Delta(X)=\sum_{j=0}^{r-1}P_jXP_j$. For every positive semidefinite trace-one matrix $\rho$, $\Delta$ is a finite channel and

$$S(\Delta(\rho))\geq S(\rho),$$

where $S(\rho)=-k_B\sum_\lambda\lambda\log\lambda$, the sum is over eigenvalues with multiplicity, $0\log0=0$, the logarithm is natural, and $k_B>0$ has units joule per kelvin. The theorem concerns only this finite pinching operation; it does not say that every channel increases entropy.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space, the stated orthogonal projections, $k_B>0$, and a positive semidefinite trace-one matrix $\rho$.

[A1] The finite entropy supplier used below carries the full Axiom of Choice through its current trace-cross-log dependency closure ([[def-axiom-of-choice]]). The phase-average and spectral calculations in this item use only finite sums; no stronger choice principle is introduced.

[F1] [[def-qsm-dt-channel-definition]]: a finite channel is completely positive and trace-preserving.

[F2] [[thm-qsm-dt-choi-kraus]]: a map with Kraus operators $P_j$ is completely positive, and it is trace-preserving when $\sum_jP_j^*P_j=I$.

[F3] [[def-qsm-relative-entropy-domain]]: for a positive trace-one matrix with eigenvalues $\lambda$, $S(\rho)=-k_B\sum_\lambda\lambda\log\lambda$, with zero terms interpreted as $0$.

[F4] [[thm-qsm-finite-entropy-composition]]: entropy is concave under finite mixtures of finite-dimensional density matrices, including rank-deficient inputs. The current draft has a hash-current Step 1 ready record after owner resolution, but has not received independent proof acceptance; this deduction is conditional on that exact finite-mixing clause and its stated Axiom of Choice.

[F5] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have orthonormal spectral decompositions, and unitary conjugation preserves their eigenvalues.

## Proof

1.1 The map $\Delta$ has Kraus matrices $P_j$, and $\sum_jP_j^*P_j=\sum_jP_j=I$. Therefore [F2] gives complete positivity and trace preservation, which is the channel property in [F1]. [given, F1, F2, algebra]

1.2 Let $\omega=e^{2\pi i/r}$ and $V=\sum_{j=0}^{r-1}\omega^jP_j$. Orthogonality gives $VV^*=V^*V=\sum_jP_j=I$, so $V$ is unitary. For every $X$, $$ \frac1r\sum_{k=0}^{r-1}V^kXV^{-k} =\sum_{j,\ell=0}^{r-1}\left(\frac1r\sum_{k=0}^{r-1}\omega^{k(j-\ell)}\right)P_jXP_\ell =\sum_jP_jXP_j =\Delta(X), $$
because the finite geometric sum is $1$ when $j=\ell$ and $0$ otherwise. The formula also holds when $r=1$. [given, algebra]

2.1 Each $V^k\rho V^{-k}$ has the same eigenvalues as $\rho$, by [F5], hence the same entropy by [F3]. Applying the finite-mixture concavity [F4] with equal weights $1/r$ and using step 1.2 gives $S(\Delta(\rho))\geq r^{-1}\sum_kS(V^k\rho V^{-k})=S(\rho)$, conditional on [A1] and the stated draft supplier interface. [given, A1, F3, F4, F5, step 1.2, algebra] ∎
