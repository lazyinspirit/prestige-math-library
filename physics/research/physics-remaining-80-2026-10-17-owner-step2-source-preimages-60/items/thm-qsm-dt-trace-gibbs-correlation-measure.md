---
id: thm-qsm-dt-trace-gibbs-correlation-measure
kind: theorem
title: Trace-Gibbs bounded correlation measure and balance
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-qsm-trace-gibbs-variational
  - lem-qsm-dt-trace-gibbs-correlation-series
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
  lem-qsm-dt-trace-gibbs-correlation-series: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 573–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be separable, $K=K^*$ densely defined and bounded below with energy unit J, and let $e^{-sK}$ be trace class for every $s$ in an open interval $I\subset(0,\infty)$ measured in J$^{-1}$. Fix $\beta\in I$, $Z_\beta=\operatorname{Tr}(e^{-\beta K})$, $\sigma_\beta=Z_\beta^{-1}e^{-\beta K}$, and $U(t)=e^{-itK/\hbar}$ for $\hbar>0$ in J s and $t$ in s. For bounded $A,B$, let $C_{AB}$ and $S_{AB}$ be the correlation function and finite spectral measure defined in [[lem-qsm-dt-trace-gibbs-correlation-series]]. Write $S_{BA}(-\cdot)$ for the pushforward under $\omega\mapsto-\omega$. Then for every bounded Borel test function $f$ with compact support,
$$\int f(\omega)\,S_{BA}(-d\omega)=\int f(\omega)e^{-\beta\hbar\omega}\,S_{AB}(d\omega).$$
The weighted measure on the right extends to a finite complex measure: the reindexed coefficient family is absolutely summable and has the same total-variation bound as $S_{BA}$. For Hermitian $A=B$, $S_{AA}$ is a positive finite measure. This is a discrete-spectrum equilibrium correlation identity; it asserts no temporal decay, continuum limit, or ordinary zero-frequency transport coefficient.

## Facts & Assumptions

**Given:** The Axiom of Choice, the self-adjoint trace-Gibbs hypotheses, the bounded observables, and the correlation measure from the Statement.

[A1] [[def-axiom-of-choice]]: full Choice is the exact assumption of the unbounded spectral theorem and trace-Gibbs supplier.

[F1] [[thm-qsm-trace-gibbs-variational]]: the stated open-interval trace-class hypothesis yields $0<Z_\beta<\infty$, a faithful normal Gibbs density, and a complete discrete energy basis.

[F2] [[lem-qsm-dt-trace-gibbs-correlation-series]]: the bounded correlation has an absolutely summable atomic spectral measure with coefficients $r_iA_{ij}B_{ji}$ at $\omega_{ji}=(E_j-E_i)/\hbar$.

## Proof


**Proof technique:** reindex the absolutely convergent spectral measure.

**Given:** [A1], [F1]–[F2] and bounded Borel $f$ with compact support.

1.1 Under the unbounded spectral convention [A1], apply [F2]: $$\int f(\omega)S_{BA}(-d\omega)=2\pi\sum_{i,j}r_iB_{ij}A_{ji}f(-\omega_{ji}).$$ The coefficient family is absolutely summable after multiplication by $\|f\|_\infty$, so interchanging indices $i$ and $j$ is permitted. [given, A1, F1, F2, algebra]


2.1 Reindexing the sum in step 1.1 gives $2\pi\sum_{i,j}r_jA_{ij}B_{ji}f(\omega_{ji})$. Since $r_j/r_i=e^{-\beta(E_j-E_i)}=e^{-\beta\hbar\omega_{ji}}$, this is exactly $\int f(\omega)e^{-\beta\hbar\omega}S_{AB}(d\omega)$. The absolute sum of the reindexed coefficients equals that defining $S_{BA}$ and is finite by [F2]; compact support also makes the test-function weight bounded. Thus the weighted measure is finite and equals the reflected measure. [given, F1, F2, step 1.1, algebra]


3.1 If $A=B=A^*$, then $B_{ji}=\overline{A_{ij}}$, so each atom coefficient $r_i|A_{ij}|^2$ of $S_{AA}$ is nonnegative. The measure is finite by [F2], proving positivity. [F1, F2, algebra] ∎