---
id: thm-qsm-dt-pinching-entropy
kind: theorem
title: Pinching raises finite entropy
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-qsm-dt-channel-definition
  - def-qsm-relative-entropy-domain
  - def-complex-exponential
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-choi-kraus
  - thm-qsm-finite-entropy-composition
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
  thm-qsm-finite-entropy-composition: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
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

Let $H$ be a complex Hilbert space of finite dimension $d\geq1$. Fix an ordered orthonormal basis $(e_a)_{a=1}^d$ of $H$ and the unitary coordinate map $U:H\to\mathbb C^d$ given by $U(\sum_a z_ae_a)=(z_1,\ldots,z_d)$. Represent each endomorphism $A:H\to H$ by $UAU^*\in M_d(\mathbb C)$, using the same symbol for the operator and its matrix in these fixed coordinates. Let $P_0,\ldots,P_{r-1}$ be pairwise orthogonal projections, meaning $P_j=P_j^*=P_j^2$ and $P_jP_k=0$ for $j\ne k$, with $r\geq1$ and $\sum_{j=0}^{r-1}P_j=I$. Define the pinching map $\Delta:M_d(\mathbb C)\to M_d(\mathbb C)$ by $\Delta(X)=\sum_{j=0}^{r-1}P_jXP_j$. For every positive semidefinite trace-one matrix $\rho\in M_d(\mathbb C)$, $\Delta$ is a finite channel and

$$S(\Delta(\rho))\geq S(\rho),$$

where $S(\rho)=-k_B\sum_\lambda\lambda\log\lambda$, the sum is over eigenvalues with multiplicity, $0\log0=0$, the logarithm is natural, and $k_B>0$ has units joule per kelvin. The theorem concerns only this finite pinching operation; it does not say that every channel increases entropy.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space with the fixed orthonormal coordinates in the Statement, the stated orthogonal projections, $k_B>0$, and a positive semidefinite trace-one matrix $\rho\in M_d(\mathbb C)$.

[A1] The finite entropy supplier used below carries the full Axiom of Choice through its current trace-cross-log dependency closure ([[def-axiom-of-choice]]). The phase-average and spectral calculations in this item use only finite sums; no stronger choice principle is introduced.

[F1] [[def-qsm-dt-channel-definition]]: a finite channel is completely positive and trace-preserving.

[F2] [[thm-qsm-dt-choi-kraus]]: a map with Kraus operators $P_j$ is completely positive, and it is trace-preserving when $\sum_jP_j^*P_j=I$.

[F3] [[def-qsm-relative-entropy-domain]]: for a positive trace-one matrix with eigenvalues $\lambda$, $S(\rho)=-k_B\sum_\lambda\lambda\log\lambda$, with zero terms interpreted as $0$.

[F4] [[thm-qsm-finite-entropy-composition]]: entropy is concave under finite mixtures of finite-dimensional density matrices, including rank-deficient inputs. The current draft has a hash-current Step 1 ready record after owner resolution, but has not received independent proof acceptance; this deduction is conditional on that exact finite-mixing clause and its stated Axiom of Choice.

[F5] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have orthonormal spectral decompositions, and unitary conjugation preserves their eigenvalues.

[F6] [[def-complex-exponential]]: for $z\in\mathbb C$, $\exp z$ is defined by its convergent complex power series and $\exp0=1$.

[F7] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$ for all $z,w\in\mathbb C$.

[F8] [[thm-kernel-and-fibres-of-complex-exponential]]: $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$.

## Proof

1.1 The map $\Delta$ has Kraus matrices $P_j$, and $\sum_jP_j^*P_j=\sum_jP_j=I$. Therefore [F2] gives complete positivity and trace preservation, which is the channel property in [F1]. [given, F1, F2, algebra]

1.2 Let $\omega=\exp(2\pi i/r)$ and $V=\sum_{j=0}^{r-1}\omega^jP_j$. By [F7], $\omega^n=\exp(2\pi i n/r)$ for positive integers $n$; for negative $n$, addition and $\exp0=1$ give the corresponding reciprocal identity. The kernel fact [F8] then gives $\omega^r=1$ and $\omega^n\ne1$ for every integer $n$ with $0<|n|<r$. Orthogonality gives $VV^*=V^*V=\sum_jP_j=I$, so $V$ is unitary. For $X\in M_d(\mathbb C)$, $$ \frac1r\sum_{k=0}^{r-1}V^kXV^{-k} =\sum_{j,\ell=0}^{r-1}\left(\frac1r\sum_{k=0}^{r-1}\omega^{k(j-\ell)}\right)P_jXP_\ell =\sum_jP_jXP_j =\Delta(X), $$ Indeed the inner sum is $1$ when $j=\ell$; otherwise $q=\omega^{j-\ell}$ satisfies $q^r=1$ and $q\ne1$, so $\sum_{k=0}^{r-1}q^k=(q^r-1)/(q-1)=0$. When $r=1$, there are no off-diagonal terms and the same identity holds. [given, F6, F7, F8, algebra]

2.1 Each $V^k\rho V^{-k}$ has the same eigenvalues as $\rho$, by [F5], hence the same entropy by [F3]. Applying the finite-mixture concavity [F4] with equal weights $1/r$ and using step 1.2 gives $S(\Delta(\rho))\geq r^{-1}\sum_kS(V^k\rho V^{-k})=S(\rho)$, conditional on [A1] and the stated draft supplier interface. [given, A1, F3, F4, F5, step 1.2, algebra] ∎
