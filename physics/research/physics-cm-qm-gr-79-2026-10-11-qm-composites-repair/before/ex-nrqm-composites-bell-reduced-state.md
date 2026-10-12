---
id: ex-nrqm-composites-bell-reduced-state
kind: example
domain: mathematics
title: "Bell reduced state"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, thm-nrqm-composites-finite-partial-trace-and-schmidt, lem-nrqm-composites-rank-one-operator-calculus]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-nrqm-composites-finite-partial-trace-and-schmidt: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §§1-3"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.1 pp. 105-115"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Let $V=W=\mathbb C^2$ with the standard inner product and orthonormal basis $e_+=\binom{1}{0}$, $e_-=\binom{0}{1}$ ([[lem-nrqm-composites-hilbert-tensor-construction]]), and let

$$\Psi:=\frac{1}{\sqrt2}\bigl(e_+\otimes e_--e_-\otimes e_+\bigr)\in V\otimes W .$$

Then:

(a) $\|\Psi\|=1$, and the coefficient matrix of $\Psi$ in the bases $(e_+,e_-)$ is $C=\frac{1}{\sqrt2}\begin{pmatrix}0&1\\-1&0\end{pmatrix}$;

(b) the partial traces satisfy $\operatorname{Tr}_WT_{\Psi,\Psi}=CC^*=\tfrac12 I_V$ and $\operatorname{Tr}_VT_{\Psi,\Psi}=C^*C=\tfrac12 I_W$, so both reduced states are the maximally mixed matrix $\tfrac12 I$;

(c) the reduced density $\rho=\tfrac12 I$ has eigenvalues $\tfrac12,\tfrac12$ and purity $\operatorname{tr}\rho^2=\tfrac12$, while the pure state has $\operatorname{tr}(T_{\Psi,\Psi}^2)=1$; the Schmidt coefficients of $\Psi$ are $s_1=s_2=\tfrac{1}{\sqrt2}$, and $\Psi$ is not a product vector.
## Facts & Assumptions

**Given:** $V=W=\mathbb C^2$ with the standard inner product; the orthonormal basis $(e_+,e_-)$; the vector $\Psi$ above; the operators $T_{u,v}x=\langle x,v\rangle u$ on the finite-dimensional spaces.

[A1] On $V\otimes W$ the pairing is $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle_V\langle v,v'\rangle_W$; the four elementary tensors $e_\pm\otimes e_\pm$ form an orthonormal basis, each $\Psi\in V\otimes W$ has a unique expansion $\sum_{ij}c_{ij}e_i\otimes e_j$ with $\|\Psi\|^2=\sum_{ij}|c_{ij}|^2$, and the basis-free conventions (linearity in the first argument, conjugate symmetry) are those of [[lem-nrqm-composites-hilbert-tensor-construction]].

[A2] For endomorphisms $R$ of $V\otimes W$ there is a unique $\operatorname{Tr}_WR$ in $\operatorname{End}(V)$ with $\operatorname{tr}((\operatorname{Tr}_WR)A)=\operatorname{tr}(R(A\otimes I_W))$ for all $A$; it is linear and positive, $\operatorname{Tr}_WT_{\Psi,\Psi}=CC^*$ where $C:W\to V$ is the coefficient map determined by $\Psi=\sum_jCf_j\otimes f_j$, and $\operatorname{Tr}_V$ is defined symmetrically; the Schmidt decomposition $\Psi=\sum_{r=1}^ks_rv_r\otimes u_r$ has orthonormal families and positive $s_1\ge\cdots\ge s_k$ equal to the positive singular values of $C$, with $\|\Psi\|^2=\sum_rs_r^2$, and for $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_WT_{\Psi,\Psi}$ satisfies $\operatorname{tr}\rho^2=\sum_rs_r^4$, which equals $1$ exactly when $k=1$ ([[thm-nrqm-composites-finite-partial-trace-and-schmidt]](a),(b),(c)).

[A3] $T_{u,v}$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, and $\operatorname{tr}$ is linear ([[lem-nrqm-composites-rank-one-operator-calculus]]).

[A4] In an orthonormal basis of a finite-dimensional inner product space the matrix of $T_{u,v}$ is the column-times-row matrix $uv^*$, so $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$; $T_{x,z}T_{w,y}=\langle w,z\rangle T_{x,y}$ for rank-one operators.

## Verification

1.1 [Coefficient matrix and norm] By [A1], $\Psi=\frac{1}{\sqrt2}e_+\otimes e_--\frac{1}{\sqrt2}e_-\otimes e_+$ is the expansion with $c_{+-}=\frac{1}{\sqrt2}$, $c_{-+}=-\frac{1}{\sqrt2}$ and the other coefficients $0$, so the coefficient map $C:W\to V$ is the matrix $C=\frac{1}{\sqrt2}\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ in the bases $(e_+,e_-)$ (columns indexed by $W$), and $\|\Psi\|^2=|c_{+-}|^2+|c_{-+}|^2=1$. [A1, algebra]

2.1 [Partial traces] Computing $CC^*=\frac12\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}0&-1\\1&0\end{pmatrix}=\frac12 I_V$ and $C^*C=\frac12 I_W$, [A2] gives $\operatorname{Tr}_WT_{\Psi,\Psi}=CC^*=\frac12 I_V$ and, by symmetry, $\operatorname{Tr}_VT_{\Psi,\Psi}=C^*C=\frac12 I_W$; both are positive with trace $1$, as they must be for the reduction of a unit vector. [step 1.1, A2, algebra]

3.1 [Purity and Schmidt coefficients] The matrix $\frac12 I_V$ has the single eigenvalue $\frac12$ with multiplicity $2$ (in any basis its matrix is diagonal with entries $\frac12$), so $\operatorname{tr}\rho^2=2\cdot(\frac12)^2=\frac12$ for $\rho=\operatorname{Tr}_WT_{\Psi,\Psi}$; the positive singular values of $C$ are the square roots of the eigenvalues of $C^*C=\frac12 I_W$, namely $s_1=s_2=\frac{1}{\sqrt2}$, so the Schmidt decomposition of $\Psi$ has $k=2$ terms and $\sum_rs_r^2=1$, in agreement with the norm formula of [A2]; since $k=2>1$, $\Psi$ is not a product vector. Finally $T_{\Psi,\Psi}^2=T_{\Psi,\Psi}$ because $T_{\Psi,\Psi}T_{\Psi,\Psi}=\langle\Psi,\Psi\rangle T_{\Psi,\Psi}$ by [A4] and $\|\Psi\|=1$, so $\operatorname{tr}(T_{\Psi,\Psi}^2)=\operatorname{tr}(T_{\Psi,\Psi})=\langle\Psi,\Psi\rangle=1$ by [A3]: the pure state has purity $1$ while each reduced state has purity $\frac12$. [step 1.1, step 2.1, A2, A3, A4, algebra] ∎
