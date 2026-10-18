---
id: cex-xxz-unit-circle-generator-not-self-adjoint
kind: counterexample
title: "The XXZ local generator is not always self-adjoint in the standard spin basis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-xxz-open-chain-temperley-lieb-representation
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.1, equation (2.3), PDF p. 4: the unit-circle local matrix convention."
---

## Statement

For the convention of [[def-xxz-open-chain-temperley-lieb-representation]], the blanket claim that $U(q)$ is self-adjoint for every unit-circle $q$ is false. At $q=e^{i\pi/4}$, $U(q)^*\ne U(q)$ in the standard ordered spin basis.

## Facts & Assumptions

**Given:** $q=e^{i\pi/4}$ and the displayed local matrix in [[def-xxz-open-chain-temperley-lieb-representation]].

[F1] The mixed-spin diagonal entries of $U(q)$ are $q^{-1}$ and $q$, and its two off-diagonal entries are $-1$. ([[def-xxz-open-chain-temperley-lieb-representation]])

## Proof

**Given:** $q=e^{i\pi/4}$.

1.1 Here $q^{-1}=(1-i)/\sqrt2$ and $q=(1+i)/\sqrt2$. The conjugate transpose of the mixed-spin block $\begin{pmatrix}q^{-1}&-1\\-1&q\end{pmatrix}$ is $\begin{pmatrix}q&-1\\-1&q^{-1}\end{pmatrix}$, which differs from it because $q\ne q^{-1}$. [F1, given, algebra]

2.1 Since the other two basis vectors are annihilated by $U(q)$, the unequal mixed-spin blocks show $U(q)^*\ne U(q)$. This single valid unit-circle parameter refutes universal self-adjointness in the declared basis convention. [F1, step 1.1, algebra] ∎
