---
id: lem-qc-local-operator-support-is-permutation-invariant
kind: lemma
title: Operator support weight is invariant under wire permutation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-qc-local-operator-support-and-weight, def-qc-tensor-map, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, thm-qc-wire-permutation-is-unitary]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1, 36.3, and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let the source register have ordered factors $\mathcal H_0,\ldots,\mathcal H_{n-1}$, and let the target register have factors in the QC02 order $\mathcal H_{\sigma(0)},\ldots,\mathcal H_{\sigma(n-1)}$. Let $\Pi_\sigma$ be the corresponding wire bijection and set $E':=\Pi_\sigma E\Pi_\sigma^{-1}$. An original factor labeled $i$ is in target position $\sigma^{-1}(i)$. Thus $E$ is supported in $S$ exactly when $E'$ is supported in $\sigma^{-1}(S)$; consequently $\operatorname{wt}(E')=\operatorname{wt}(E)$.

## Facts & Assumptions

**Given:** The source and target ordered tensor registers in the Statement, a permutation $\sigma$, its wire bijection $\Pi_\sigma$, and $E\in\operatorname{End}(\mathcal H_P)$.

[L1] [[def-qc-local-operator-support-and-weight]]: Support means conjugating by $\Pi_S$ and its inverse gives a local operator tensored with identity on the complementary factors; weight is the minimum support size.

[F1] [[def-qc-tensor-register-and-permutation]]: A wire permutation sends a product-basis tensor to the tensor with the same factor labels in the declared output order and is extended linearly.

[F2] [[thm-qc-wire-permutation-is-unitary]]: Every finite wire permutation is a bijective linear isometry, with inverse the wire permutation for the inverse ordering.

[F3] [[def-qc-tensor-map]]: A tensor map is the unique linear extension of its factorwise action on elementary tensors.

[F4] [[lem-qc-tensor-product-basis-and-dimension]]: Elementary product tensors form a basis and span each finite ordered tensor register.

## Proof


1.1 Put $S_\sigma:=\sigma^{-1}(S)$, the target positions occupied by source factors from $S$. Let $\alpha_S$ reorder those source factors into their target order, and let $\alpha_{S^c}$ reorder the complementary factors likewise; these are wire bijections by [F2]. On each elementary tensor, both $\Pi_{S_\sigma}^{\rm target}\Pi_\sigma$ and $(\alpha_S\otimes\alpha_{S^c})\Pi_S^{\rm source}$ place each factor vector in the same target order. Elementary tensors span by [F4], and the maps agree on them by [F1], so $\Pi_{S_\sigma}^{\rm target}\Pi_\sigma=(\alpha_S\otimes\alpha_{S^c})\Pi_S^{\rm source}$. [F1, F2, F3, F4, given]

2.1 If $E$ is supported in $S$, [L1] gives $A_S$ with $\Pi_S^{\rm source}E(\Pi_S^{\rm source})^{-1}=A_S\otimes I$. Conjugating by step 1.1 gives $\Pi_{S_\sigma}^{\rm target}E'(\Pi_{S_\sigma}^{\rm target})^{-1}=(\alpha_S\otimes\alpha_{S^c})(A_S\otimes I)(\alpha_S\otimes\alpha_{S^c})^{-1}$. On $y\otimes z$ the right side is $\alpha_S A_S\alpha_S^{-1}y\otimes z$, hence equals $(\alpha_S A_S\alpha_S^{-1})\otimes I$ by [F3]; thus $E'$ is supported in $S_\sigma$. [L1, F2, F3, step 1.1]

3.1 Apply the same implication to $E'$ and the inverse wire permutation. It gives the converse: if $E'$ is supported in $S_\sigma$, then $E$ is supported in $S$. Thus $S\mapsto\sigma^{-1}(S)$ bijects the support sets of $E$ and $E'$, preserving cardinality; their minimum support sizes agree. [F2, L1, step 1.1, step 2.1, algebra] ∎

## Remarks

The QC02 bodies were inspected. This proof uses their declared factor-order action and bijective inverse; it does not identify differently ordered registers without a map.
