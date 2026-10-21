---
id: def-s4-dplr-parameterization
kind: definition
title: DPLR structured state-space parameterization
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-linear-state-space-model]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §§2.1, 2.3, 3.2, Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Definition

An $N$-state single-input, single-output complex linear state-space model has $B,C\in\mathbb C^N$, state equation $x'(t)=Ax(t)+Bu(t)$, and output $y(t)=C^*x(t)$; its direct term is set to zero in the S4 convolution convention. Here $X^*$ denotes conjugate transpose; a square complex matrix $H$ is normal when $H^*H=HH^*$; and a square matrix $V$ is unitary when $V^*V=VV^*=I$. A matrix is in diagonal-plus-low-rank (DPLR) form of rank $r$ if
$$
A=\Lambda-PQ^*,
$$
where $\Lambda\in\mathbb C^{N\times N}$ is diagonal and $P,Q\in\mathbb C^{N\times r}$. It is in normal-plus-low-rank (NPLR) form of rank $r$ if
$$
A=V\Lambda V^*-PQ^*,
$$
where $V\in\mathbb C^{N\times N}$ is unitary, $\Lambda$ is diagonal, and $P,Q\in\mathbb C^{N\times r}$. The unitary state change $\widetilde x=V^*x$ converts this NPLR representation to DPLR form and changes $B,C$ to $V^*B,V^*C$, respectively.

For a step size $\Delta>0$ such that $I-\Delta A/2$ is invertible, the bilinear recurrent matrices are
$$ \overline A=(I-\Delta A/2)^{-1}(I+\Delta A/2),\qquad \overline B=(I-\Delta A/2)^{-1}\Delta B,\qquad \overline C=C. $$
With initial state $x_{-1}=0$, the discrete recurrence is $x_t=\overline A x_{t-1}+\overline B u_t$, $y_t=\overline C^*x_t$. Its length-$L$ impulse kernel is the vector $K_L=(\overline C^*\overline A^j\overline B)_{j=0}^{L-1}$. For a nonzero direct term $D$, the output has the additional separate skip term $Du_t$.

For a filter evaluation of transform length $M\ge L$, the output vector for the length-$M$ truncated generating function is $\widetilde C_M=(I-\overline A^M)^*C$. A filter procedure may receive $\widetilde C_M$ as given data; an operation count for evaluating the filter from this transformed vector does not include the separate work of forming it from $C$.

## Definition references

[[def-linear-state-space-model]]

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §§2.1, 2.3, 3.2, Appendix C.3](https://arxiv.org/pdf/2111.00396)
