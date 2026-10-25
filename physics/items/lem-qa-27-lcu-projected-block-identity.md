---
id: lem-qa-27-lcu-projected-block-identity
kind: lemma
title: "Projected block identity for a supplied LCU circuit"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; this is a finite block-matrix multiplication."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 28 §28.3, linear combinations of unitaries."
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Lemma 52, block-encoding by a linear combination, PDF pp.45–47."
---

## Statement

Let $A_j:\mathbb C^n\to\mathbb C^n$ have exact $(\alpha_j,a_j,0)$ block encodings $U_j$, let $\beta_j\ne0$, and put $\Lambda=\sum_j|\beta_j|\alpha_j>0$. Set $a=\max_j a_j$ and extend each component to the common ordered ancilla/system register by $\widetilde U_j=I_{2^{a-a_j}}\otimes U_j$, with unused ancillas preceding its original ancillas. Let $P$ be a supplied unitary with $P|0\rangle=\sum_j\sqrt{|\beta_j|\alpha_j/\Lambda}|j\rangle$, and let the separately supplied unitary SELECT act as $\widetilde U_j$ with phase $\beta_j/|\beta_j|$ on index $j$. With $W=P^\dagger\mathrm{SELECT}P$, the all-zero coefficient and component-ancilla block of $W$ is
$$\sum_j\frac{\beta_j}{\Lambda}A_j.$$
This is a conditional matrix identity. It does not construct SELECT from an XOR-valued function oracle or assign a cost to any supplied operation.

## Facts & Assumptions

**Given:** Finite square matrices $A_j$, their exact block encodings, nonzero coefficients $\beta_j$, and the supplied unitaries $P$ and SELECT.

[A1] $P|0\rangle=\sum_j\sqrt{|\beta_j|\alpha_j/\Lambda}|j\rangle$, SELECT applies $(\beta_j/|\beta_j|)\widetilde U_j$ on index $j$, and $W=P^\dagger\mathrm{SELECT}P$.

[F1] [[def-qa-22-block-encoding]]: for an exact $(\alpha_j,a_j,0)$ block encoding, the all-zero ancilla compression of $U_j$ is $A_j/\alpha_j$.

[F2] [[def-qa-22-block-encoding-access-model]]: access to SELECT and its component circuits is separately supplied and costed.

[F3] [[def-qc-dirac-notation-conversion]]: the ket $|x\rangle$ denotes vector $x$, and the bra $\langle x|$ denotes the functional $z\mapsto\langle z,x\rangle_{\rm root}$.

## Proof

1.1 Put $w_j=|\beta_j|\alpha_j/\Lambda$ and $\zeta_j=\beta_j/|\beta_j|$. The weights are nonnegative and sum to one by the definition of $\Lambda$. By [A1], the initial coefficient register is $\sum_j\sqrt{w_j}|j\rangle$, and SELECT applies $\zeta_j\widetilde U_j$ in the orthogonal index-$j$ subspace, so $\langle0|P^\dagger\mathrm{SELECT}P|0\rangle=\sum_jw_j\zeta_j\widetilde U_j$ on the component and data registers. This is an identity on already supplied operations; [F2] keeps SELECT construction and component costs separate. [given, A1, F2, F3, algebra]

2.1 Project the common $a$-ancilla register onto its all-zero input and output. The identity extension contributes one on the unused zero ancillas, so by [F1] each extended component still compresses to $A_j/\alpha_j$. Hence the resulting data block is $\sum_jw_j\zeta_j A_j/\alpha_j=\sum_j(|\beta_j|\alpha_j/\Lambda)(\beta_j/|\beta_j|)(A_j/\alpha_j)=\sum_j\beta_jA_j/\Lambda$. The coefficient and component registers were both projected onto their specified zero states, so this is exactly the claimed all-zero block. [A1, F1, F2, F3, step 1.1, algebra] ∎
