---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-qa-30-qaoa-circuit-and-objective.json
  precheck: pass
id: def-qa-30-qaoa-circuit-and-objective
kind: definition
title: "QAOA circuit and expected combinatorial objective"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
  - def-qc-controlled-phase-rotation
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-projective-measurement-outcome-law
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
    - title: "Edward Farhi, Jeffrey Goldstone, and Sam Gutmann, A Quantum Approximate Optimization Algorithm (arXiv:1411.4028v1)"
      url: "https://arxiv.org/pdf/1411.4028"

---

## Definition

Let $G=(V,E)$ be a finite simple undirected graph, $p\ge1$, and $\gamma_1,\ldots,\gamma_p,\beta_1,\ldots,\beta_p\in\mathbb R$. On $|V|$ qubits define
$$C_G=\sum_{(u,v)\in E}\frac{I-Z_uZ_v}{2},\qquad B_G=\sum_{v\in V}X_v.$$
Prepare $|+\rangle^{\otimes |V|}$ and apply, in the declared right-to-left product convention,
$$U_{G,p}(\gamma,\beta)=\prod_{j=p}^{1}e^{-i\beta_jB_G}e^{-i\gamma_jC_G}.$$
The output state is $|\psi_{G,p}(\gamma,\beta)\rangle=U_{G,p}|+\rangle^{\otimes|V|}$ and the objective is $\langle\psi|C_G|\psi\rangle_D$. Measuring every qubit in the computational basis returns a random bitstring, hence a cut. Each cost and mixer exponential, graph-input access, parameter encoding, state preparation, measurement, repetition, and classical optimizer cost must be supplied and charged; this definition is not a guarantee of a maximum cut or approximation ratio.

## Facts & Assumptions

**Given:** Computational-basis bitstrings $x\in\{0,1\}^{|V|}$ and the Pauli $Z$ eigenvalue convention.

[F1] [[def-qc-pauli-matrices]]: $Z|b\rangle=(-1)^b|b\rangle$ for $b\in\{0,1\}$.

[F2] [[thm-qc-projective-measurement-outcome-law]]: the finite computational-basis measurement probabilities sum to one and determine the outcome law.

## Verification

**Proof technique:** direct.

1.1 On $|x\rangle$, the edge term $(I-Z_uZ_v)/2$ has eigenvalue $(1-(-1)^{x_u+x_v})/2$, which is $1$ exactly when $x_u\ne x_v$ and $0$ otherwise. Thus $C_G|x\rangle$ has eigenvalue equal to the cut size of $x$. [given, F1, algebra]

2.1 The finite projective measurement law assigns probabilities $q_x\ge0$ summing to one, so the expectation of the measured cut size is $\sum_xq_x C_G(x)=\langle\psi|C_G|\psi\rangle_D$ by the diagonal spectral expansion. Each output is therefore a feasible cut with the stated score observable. [given, F2, step 1.1, algebra] ∎

## Remarks

The schematic uses one bundled wire for the entire $n=|V|$ qubit register; time runs left to right. The dashed block is applied successively for $j=1,\ldots,p$, so each cost operation precedes its corresponding mixer. All unitary boxes act on the full register, not on a single qubit.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
\draw[thick] (0,0) -- (1.7,0);
\node[anchor=east] at (0,0) {$|+\rangle^{\otimes n}$};
\node[draw,minimum width=2.2cm,minimum height=1cm] (C) at (2.8,0) {$e^{-i\gamma_j C_G}$};
\draw[thick,->] (C.east) -- (4.5,0);
\node[draw,minimum width=2.2cm,minimum height=1cm] (B) at (5.6,0) {$e^{-i\beta_j B_G}$};
\draw[dashed] (1.4,-0.85) rectangle (7,0.85);
\node at (4.2,1.2) {repeat in order: $j=1,\ldots,p$};
\draw[thick,->] (B.east) -- (8.4,0);
\node at (7.55,0.5) {$|\psi\rangle$};
\node[draw,minimum width=1.8cm,minimum height=1cm,align=center] (M) at (9.3,0) {measure\\basis $Z$};
\draw[double,->] (M.east) -- (11.2,0);
\node[anchor=west] at (11.2,0) {$x$};
\node at (4.2,-1.2) {$n$-qubit register};
\end{tikzpicture}
```

Here $|\psi\rangle=|\psi_{G,p}(\gamma,\beta)\rangle$. Measurement produces $x\in\{0,1\}^n$, whose score $C_G(x)$ is the number of edges with unequal endpoint bits. By Verification steps 1.1–2.1, $\mathbb E[C_G(x)]=\langle\psi|C_G|\psi\rangle_D$; no maximum-cut guarantee is implied. The verification above is independent of the schematic.
