---
id: ex-qsmx-toric-defect-pair
kind: example
title: Open strings create endpoint defects
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-toric-cellular-hamiltonian
dependency_roles:
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
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

**Given:** The finite Hamiltonian and open-string conventions of [[def-qsmx-toric-cellular-hamiltonian]], together with the path hypotheses in the statement.

[F1] [[def-qsmx-toric-cellular-hamiltonian]]: $C_2=\mathbb F_2^F\xrightarrow{\partial_2}C_1=\mathbb F_2^E\xrightarrow{\partial_1}C_0=\mathbb F_2^V$ with $\partial_1\partial_2=0$; use the coordinate pairing $\langle r,s\rangle=\sum_{e\in E}r_es_e$ in $\mathbb F_2$, and the dual graph's mod-two incidence map is $\partial_2^T:\mathbb F_2^E\to\mathbb F_2^F$; the commuting self-adjoint involutions are $A_v=X(\partial_1^Tv)$ and $B_f=Z(\partial_2f)$; the finite edge Hilbert space is $(\mathbb C^2)^{\otimes E}$; and $H_K$ is the sum of the positive penalties $J_v(I-A_v)/2$ and $K_f(I-B_f)/2$.

## Verification
1.1 The operators $A_v,B_f$ are commuting self-adjoint involutions by [F1], so $\Pi=\prod_{v\in V}(I+A_v)/2\prod_{f\in F}(I+B_f)/2$ is the orthogonal projection onto their common $+1$ eigenspace. Expand this finite product. Each term is a tensor-product Pauli $X(a)Z(b)$ with coefficient $+1$: factors of the same type multiply without phases, and every vertex operator commutes with every face operator. For the ordinary matrix trace on $\mathcal H_K$, the trace of a tensor product is the product of the factor traces. A nonidentity Pauli therefore has trace zero because at least one edge factor is $X$, $Z$, or $XZ$, each of which has trace zero; an identity term has trace $2^{|E|}$. The empty subset contributes one identity term and no term contributes negative trace, so $\operatorname{Tr}\Pi\ge 2^{|E|-|V|-|F|}>0$. Thus $\Pi\ne0$. Since each penalty is an orthogonal projection and the couplings are positive, for every $\psi$ the quadratic form is $\langle\psi,H_K\psi\rangle=\sum_{v\in V}J_v\left\|\frac{I-A_v}{2}\psi\right\|^2+\sum_{f\in F}K_f\left\|\frac{I-B_f}{2}\psi\right\|^2$. This is zero exactly when every penalty annihilates $\psi$, equivalently when every stabilizer has eigenvalue $+1$. Hence $\ker H_K$ is the common $+1$ eigenspace and is nonzero, so it contains a ground vector of energy zero. [given, F1, algebra]

2.1 Let $b\in\mathbb F_2^E$ be the edge chain of the primal path $\gamma$. Because the path visits no vertex twice and has distinct endpoints, each internal vertex has even path incidence and the endpoints have odd incidence, so $\partial_1b=v_1+v_2$. For each vertex $v$, $Z(b)A_v=(-1)^{\langle b,\partial_1^Tv\rangle}A_vZ(b)=(-1)^{(\partial_1b)_v}A_vZ(b)$; $Z(b)$ commutes with every $B_f$. Hence applying $Z(b)$ to any ground vector flips exactly $A_{v_1}$ and $A_{v_2}$ from $+1$ to $-1$ and leaves every other stabilizer eigenvalue unchanged. [given, F1, step 1.1, algebra]

2.2 Regard the dual path $\gamma^*$ as a path in the dual graph whose vertices are faces, and let $a\in\mathbb F_2^E$ indicate the primal edges crossed by its dual edges. By the definition of the dual incidence map as $\partial_2^T$, the no-repeated-face hypothesis and distinct endpoint faces give $\partial_2^Ta=f_1+f_2$. For each face $f$, $X(a)B_f=(-1)^{\langle a,\partial_2f\rangle}B_fX(a)=(-1)^{(\partial_2^Ta)_f}B_fX(a)$; $X(a)$ commutes with every $A_v$. Hence applying $X(a)$ to any ground vector flips exactly $B_{f_1}$ and $B_{f_2}$ and leaves every other stabilizer eigenvalue unchanged. [given, F1, step 1.1, algebra]

3.1 By step 2.1, the vector $Z(b)\psi$ has eigenvalue $-1$ precisely for the two vertex stabilizers at $v_1,v_2$ and eigenvalue $+1$ for every other stabilizer, when $\psi$ is a ground vector. Thus the only nonzero terms in $H_K Z(b)\psi$ are the penalties $J_{v_i}(I-A_{v_i})/2$, each acting as multiplication by $J_{v_i}$; its $H_K$-eigenvalue, and hence its energy increase from the ground eigenvalue zero, is $J_{v_1}+J_{v_2}$. [F1, step 2.1, algebra]

4.1 By step 2.2, the vector $X(a)\psi$ has eigenvalue $-1$ precisely for $B_{f_1},B_{f_2}$ and eigenvalue $+1$ for every other stabilizer, when $\psi$ is a ground vector. Therefore only the two penalties $K_{f_i}(I-B_{f_i})/2$ contribute, and its $H_K$-eigenvalue, hence energy increase from zero, is $K_{f_1}+K_{f_2}$. [F1, step 2.2, algebra] ∎

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
