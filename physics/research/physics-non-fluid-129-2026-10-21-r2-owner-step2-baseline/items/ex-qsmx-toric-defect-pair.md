---
id: ex-qsmx-toric-defect-pair
kind: example
title: Open strings create endpoint defects
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsmx-toric-cellular-hamiltonian
  - thm-qsmx-toric-ground-space
  - thm-qsmx-toric-strings-and-local-tests
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
  thm-qsmx-toric-ground-space: mathematical-premise
  thm-qsmx-toric-strings-and-local-tests: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: Finite-dimensional example in the exact unperturbed toric-code Hamiltonian; no empirical or perturbative claim.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: §2, equation (5), PDF pp. 5–6; open primal and dual strings create endpoint excitations.
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.7, PDF pp. 20–21; a single $Z$ or $X$ edge creates a pair of charges or fluxons with the stated gap cost.
---

## Example

On a finite connected toric-code cellulation, let $\gamma$ be a primal path that visits no vertex twice and has distinct endpoint vertices $v_1,v_2$, and let $\gamma^*$ be a dual path that visits no face twice and has distinct endpoint faces $f_1,f_2$. Acting on any ground vector, the $Z$ string along $\gamma$ flips exactly the endpoint eigenvalues $A_{v_1},A_{v_2}$ and raises the energy by $J_{v_1}+J_{v_2}$. The $X$ string along $\gamma^*$ flips exactly $B_{f_1},B_{f_2}$ and raises the energy by $K_{f_1}+K_{f_2}$.

## Example references

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §2](https://arxiv.org/pdf/quant-ph/9707021)

[John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §9.7](https://www.preskill.caltech.edu/ph219/topological.pdf)

## Facts & Assumptions

**Given:** The Hamiltonian and strings of [[def-qsmx-toric-cellular-hamiltonian]], a ground vector from [[thm-qsmx-toric-ground-space]], and the common ground projection of [[thm-qsmx-toric-strings-and-local-tests]].

[A1] The Axiom of Choice ([[def-axiom-of-choice]]) as inherited through the ground-space theorem; no additional choice is used.

[F1] [[def-qsmx-toric-cellular-hamiltonian]]: a primal open string is the product of $Z$ on its path edges; a dual open string is the product of $X$ on its crossed edges; vertex and face penalties are $J_v(I-A_v)/2$ and $K_f(I-B_f)/2$.

[F2] [[thm-qsmx-toric-ground-space]]: every ground vector has all $A_v,B_f$ eigenvalues $+1$.

[F3] [[thm-qsmx-toric-strings-and-local-tests]]: the exact unperturbed toric-code stabilizer conventions and Pauli crossing rule.

## Verification
1.1 For the primal path chain $b$, the boundary $\partial_1b$ is $v_1+v_2$: each internal vertex is incident to two path edges, while each endpoint is incident to one. Thus $Z(b)$ anticommutes with $A_v$ exactly at $v_1,v_2$ and commutes with every $B_f$, since all its factors are $Z$. Acting on a ground vector therefore changes just those two vertex eigenvalues from $+1$ to $-1$. [given, A1, F1, F2, algebra]

1.2 The closed-string theorem [F3] concerns pairs of closed paths; the present dual path is open, so its endpoint defects are determined directly by its dual boundary. Every internal dual vertex (a primal face) has even path incidence and the two endpoint faces have odd incidence. Its $X$ string therefore anticommutes with exactly $B_{f_1},B_{f_2}$ and commutes with every $A_v$. It creates precisely those two face defects. [A1, F1, F2, F3, construct]

2.1 At each endpoint the corresponding penalty changes from zero to $J_{v_i}$; every other Hamiltonian term is unchanged. The total energy increase is $J_{v_1}+J_{v_2}$. [F1, step 1.1, algebra]

3.1 The two changed face penalties contribute $K_{f_1}$ and $K_{f_2}$, and all other terms are unchanged, so the energy increase is $K_{f_1}+K_{f_2}$. [F1, step 1.2, algebra] ∎

## Remarks

The diagram shows one three-edge primal path on a square-torus patch. Red endpoint markers denote the two flipped vertex constraints; blue edges denote the $Z$ string. It illustrates the parity calculation and is not used in the proof.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[gray!55] (0,0) grid (4,2);
  \draw[blue,very thick] (0,1) -- (3,1);
  \fill[red] (0,1) circle (2.5pt);
  \fill[red] (3,1) circle (2.5pt);
  \fill[black] (1,1) circle (1.5pt);
  \fill[black] (2,1) circle (1.5pt);
  \node[red,above] at (0,1.1) {$v_1$};
  \node[red,above] at (3,1.1) {$v_2$};
  \node[blue,below] at (1.5,0.9) {$Z_\gamma$};
\end{tikzpicture}
```
