---
id: alg-qa-33-qma-parallel-majority-amplification
kind: algorithm
title: QMA parallel repetition with a midpoint threshold
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-33-witness-verifier-interface
  - def-qa-33-qma-promise-class
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.3, weak error reduction, PDF pp. 21–23
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF pp. 116–117
---

## Definition

**Inputs:** A length-$n$ verifier from [[def-qa-33-witness-verifier-interface]], its classical basis input $|x\rangle$ with $|x|=n$, an $r$-block witness register, rational thresholds $0\le s<c\le1$, and an integer $r\ge1$. Each verifier has input register $X_n$, witness register $W_n$, zero-initialized workspace $A_n$, terminally measured tuple $O_n$, and total predicate $\operatorname{Acc}_n(x,z)$. The admissible parameters are those of the verifier's promise-class contract, with $r$ polynomially bounded when polynomial resources are claimed.

**Procedure:** Partition the witness into $r$ blocks $W^{(1)},\ldots,W^{(r)}$. Use the given input register as $X^{(1)}$, allocate $r-1$ fresh zero-initialized $n$-bit registers $X^{(2)},\ldots,X^{(r)}$, and for every bit position $i$ and $j=2,\ldots,r$, apply a CNOT from $X^{(1)}_i$ to $X^{(j)}_i$. Since $x$ is a computational-basis string, this copies $|x\rangle$ exactly and leaves every input register in $|x\rangle$. Give each verifier copy its own fresh zero-initialized workspace and distinct output wires, then run its finite circuit on $(X^{(j)},W^{(j)},A^{(j)})$. At termination measure each copy's tuple $O^{(j)}$ and evaluate $\operatorname{Acc}_n(x,z_j)$ on that outcome. Let $S$ be the number of copies whose predicate accepts. Output $1$ exactly when

$$S\ge\left\lceil\frac{r(c+s)}2\right\rceil.$$

The rational midpoint and integer threshold are computed exactly from the binary encodings of $c,s,r$. The input-copy registers, verifier ancillas and output registers are separate across copies; no copy uses a shared quantum input register after the CNOT fanout. The acceptance predicate is evaluated separately on each copy's terminal outcome. Completeness and soundness for arbitrary joint witnesses, including witnesses entangled across the $r$ blocks, are established in the separate entangled-witness amplification theorem.
