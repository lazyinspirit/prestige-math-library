---
id: thm-qsm-finite-gibbs-circuit-marginal-error
kind: theorem
title: Finite Gibbs circuit marginal and trace-distance error
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-finite-gibbs-purification
  - alg-qsm-finite-gibbs-state-preparation
  - thm-qa-30-sdp-gibbs-state-error-cost
  - lem-qsm-matrix-state-calculus
  - def-qc-trace-distance
  - thm-qc-trace-norm-spectral-formula
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
dependency_roles:
  def-qsm-finite-gibbs-purification: mathematical-premise
  alg-qsm-finite-gibbs-state-preparation: mathematical-premise
  thm-qa-30-sdp-gibbs-state-error-cost: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qc-trace-distance: mathematical-premise
  thm-qc-trace-norm-spectral-formula: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qc-partial-trace-positive-and-trace-preserving: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Joran van Apeldoorn, András Gilyén, Sander Gribling, and Ronald de Wolf, Quantum SDP-Solvers, arXiv:1705.01843v4
      url: https://arxiv.org/pdf/1705.01843v4
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, arXiv:1806.01838
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Assume the finite access and successful shift conditions of [[alg-qsm-finite-gibbs-state-preparation]]. Let $|\Psi_\beta\rangle$ be the normalized canonical purification of [[def-qsm-finite-gibbs-purification]], and suppose the successful normalized output $|\widetilde\Psi_\beta\rangle$ has vector distance at most $\varepsilon_{\rm out}$ from $|\Psi_\beta\rangle$, up to a global phase, as supplied by [[thm-qa-30-sdp-gibbs-state-error-cost]]. Then
$
D\!\left(\operatorname{Tr}_R|\widetilde\Psi_\beta\rangle\langle\widetilde\Psi_\beta|,\rho_\beta\right)\leq\varepsilon_{\rm out},
$
where $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$. The assertion is conditional on the algorithmic success events and says nothing about physical thermalization or finite measurement frequencies.

## Facts & Assumptions

**Given:** The finite registers and density operators above, the successful vector-error guarantee, the finite partial trace, and the root trace-distance convention.

[F1] [[def-qsm-finite-gibbs-purification]]: the ideal vector is normalized and its system partial trace is $\rho_\beta$.

[F2] [[alg-qsm-finite-gibbs-state-preparation]]: the normalized output is returned only on its stated successful branch, with the declared access and shift conditions.

[F3] [[thm-qa-30-sdp-gibbs-state-error-cost]]: under its finite algorithmic error hypothesis, the normalized branch vector is within the declared vector error up to phase.

[F4] [[def-qc-trace-distance]]: for finite density operators, $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

[F5] [[thm-qc-trace-norm-spectral-formula]]: for a finite matrix $X$, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$.

[F6] [[def-qc-partial-trace]] and [[thm-qc-partial-trace-characterization-and-basis-independence]]: $\operatorname{Tr}_R$ is characterized by its trace pairing.

[F7] [[thm-qc-partial-trace-positive-and-trace-preserving]]: partial trace maps positive matrices to positive matrices and preserves their trace.

[F8] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have positive square roots and the finite trace is cyclic.

## Proof

1.1 Multiply $|\widetilde\Psi_\beta\rangle$ by a phase so $s=\langle\Psi_\beta,\widetilde\Psi_\beta\rangle$ is real and $0\leq s\leq1$. If $s=1$, their rank-one projections agree. Otherwise write $\widetilde\Psi_\beta=s\Psi_\beta+\sqrt{1-s^2}\,w$, with $w\perp\Psi_\beta$ and $\|w\|=1$. On the span of $\Psi_\beta,w$, the difference of their rank-one projections has matrix $\begin{pmatrix}1-s^2&-s\sqrt{1-s^2}\\-s\sqrt{1-s^2}&-(1-s^2)\end{pmatrix}$, whose eigenvalues are $\pm\sqrt{1-s^2}$; it vanishes on the orthogonal complement. By [F4] and [F5], the pure-state trace distance is $\sqrt{1-s^2}$. Since $\|\Psi_\beta-\widetilde\Psi_\beta\|^2=2(1-s)$ and $1-s^2\leq2(1-s)$, this distance is at most the vector distance. [given, F4, F5, F8, algebra]

1.2 Let $X$ be any finite Hermitian trace-zero matrix and write its positive and negative parts $X=X_+-X_-$. Their traces agree and equal $\|X\|_1/2$. For every effect $0\leq E\leq I$, cyclicity and square roots from [F8] give $0\leq\operatorname{Tr}(EX_\pm)=\operatorname{Tr}(X_\pm^{1/2}EX_\pm^{1/2})\leq\operatorname{Tr}X_\pm$, hence $|\operatorname{Tr}(EX)|\leq\|X\|_1/2$. Put $Y=\operatorname{Tr}_R X$. By setting $A=I$ in [F6], $\operatorname{Tr}Y=\operatorname{Tr}X=0$. Its positive spectral projection $E_Y$ is an effect and satisfies $\operatorname{Tr}(E_Y Y)=\|Y\|_1/2$ by [F5]. Again by [F6], $\operatorname{Tr}(E_Y Y)=\operatorname{Tr}((E_Y\otimes I_R)X)$; diagonalizing $E_Y$ shows $E_Y\otimes I_R$ is an effect. Applying the preceding bound to this effect yields $\|Y\|_1\leq\|X\|_1$. [given, F5, F6, F8, algebra]

2.1 Apply step 1.1 to the normalized output on the successful branch [F2] and ideal vector from [F3]. Their pure-state trace distance is at most $\varepsilon_{\rm out}$. Set $X=|\widetilde\Psi_\beta\rangle\langle\widetilde\Psi_\beta|-|\Psi_\beta\rangle\langle\Psi_\beta|$, which is Hermitian with trace zero. Step 1.2 contracts its trace norm under $\operatorname{Tr}_R$. By [F1], the ideal system marginal is $\rho_\beta$; [F7] ensures both marginals are density operators, so [F4] applies and gives the claimed bound. The conclusion remains conditional on the successful branch and shift event. [given, step 1.1, step 1.2, F1, F2, F3, F4, F7] ∎
