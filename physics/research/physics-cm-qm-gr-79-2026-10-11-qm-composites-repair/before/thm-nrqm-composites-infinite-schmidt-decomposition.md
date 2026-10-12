---
id: thm-nrqm-composites-infinite-schmidt-decomposition
kind: theorem
domain: mathematics
title: "Infinite Schmidt decomposition and the pure product criterion"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-spectral-theorem-for-compact-self-adjoint-operators, def-compact-linear-operator, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-bessel-inequality-for-an-arbitrary-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §1.4 pp. 45-47 and Ch. 3 (compact operators and spectral decomposition)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §§1-3"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let $H,K$ be nonzero complex Hilbert spaces ([[def-hilbert-space]]) with $H\widehat\otimes K$ their completed tensor product ([[lem-nrqm-composites-hilbert-tensor-construction]]). Then for every $\Psi\in H\widehat\otimes K$ there are an at most countable index set $J$, orthonormal families $(v_r)_{r\in J}\subseteq H$ and $(u_r)_{r\in J}\subseteq K$, and numbers $s_r>0$ with

$$\Psi=\sum_{r\in J}s_r\,v_r\otimes u_r\qquad\text{(norm convergence in }H\widehat\otimes K),$$

and $\|\Psi\|^2=\sum_rs_r^2$. The $s_r$ are the positive square roots of the nonzero eigenvalues of $CC^*$, where $C:K\to H$ is the coefficient operator determined by $\Psi$; if $J$ is infinite then $s_r\to0$. For $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_KT_{\Psi,\Psi}$ has $\operatorname{tr}\rho^2=\sum_rs_r^4$, and $\operatorname{tr}\rho^2=1$ holds exactly when exactly one $s_r$ is nonzero, i.e. exactly when $\Psi$ is a product vector. Mixed-state separability is a different, explicitly defined property and is not decided here.

## Facts & Assumptions

**Given:** $\Psi\in H\widehat\otimes K$; an orthonormal basis $(f_j)_{j\ge1}$ of $K$ supplied as data; the expansions $\Psi=\sum_jh_j\otimes f_j$ with $h_j\in H$.

[F1] For the orthonormal family $(f_j)$ every $\Psi$ has a unique expansion $\Psi=\sum_jh_j\otimes f_j$ with $\sum_j\|h_j\|^2=\|\Psi\|^2$ (finite-subset net convergence), and $\langle h\otimes f_j,h'\otimes f_{j'}\rangle=\langle h,h'\rangle\delta_{jj'}$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]).

[F2] The coefficient map $C:\ell^2\to H$, $C(z)=\sum_jz_jh_j$, is bounded with $\|C\|\le(\sum_j\|h_j\|^2)^{1/2}$ and compact: its truncations have rank at most $N$ and operator-norm error at most $(\sum_{j>N}\|h_j\|^2)^{1/2}$ ([[def-compact-linear-operator]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F3] For the compact positive operator $CC^*$ the spectral theorem supplies orthonormal eigenvectors $v_r$ for the positive eigenvalues $s_r^2$, accumulating only at $0$; the direct sum of the corresponding eigenspaces is $(\ker CC^*)^\perp=\overline{\operatorname{ran}CC^*}$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F4] $\operatorname{Tr}_KT_{\Psi,\Psi}=CC^*$-type contractions and the identity $\operatorname{Tr}_KT_{\Psi,\Psi}=CC^*$ hold in the completed tensor product: for the reduced state of a pure vector the operator is the contraction of the coefficient map; for $\|\Psi\|=1$ the reduced operator is a density operator with trace $1$ ([[lem-nrqm-composites-separable-partial-trace]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

## Proof

1.1 [The coefficient operator] Expand $\Psi=\sum_jh_j\otimes f_j$ as in [F1] and define $C(z):=\sum_jz_jh_j$ for finitely supported $z$; by Cauchy-Schwarz $\|Cz\|^2\le(\sum_j|z_j|^2)(\sum_j\|h_j\|^2)$, so $C$ extends to a bounded operator with the stated norm and, by the truncation estimate of [F2], is compact. [given, F1, F2, algebra]

2.1 [Spectral decomposition of the coefficient operator] By [F3] the compact positive operator $CC^*$ has orthonormal eigenvectors $v_r$ for its positive eigenvalues $s_r^2>0$, the eigenvalues accumulate only at $0$, and $\sum_rs_r^2=\operatorname{tr}CC^*=\sum_{r'}\|C^*f_{r'}\|^2=\sum_j\|h_j\|^2=\|\Psi\|^2$; the second equality is the trace computation in the orthonormal basis $(f_j)$ of $K$, for which $C^*f_j=h_j$: indeed $\operatorname{tr}CC^*=\sum_j\langle CC^*f_j,f_j\rangle=\sum_j\|C^*f_j\|^2$. [step 1.1, F1, F3, algebra]

2.2 [The reduced state is $CC^*$] For $x,y\in H$, $\operatorname{tr}\bigl(T_{\Psi,\Psi}(T_{x,y}\otimes I_K)\bigr)=\bigl\langle\Psi,(T_{y,x}\otimes I_K)\Psi\bigr\rangle=\sum_j\langle x,h_j\rangle\langle h_j,y\rangle=\langle CC^*x,y\rangle$: the first equality uses the rank-one identity $T_{w,z}B=T_{w,B^*z}$ with $T_{x,y}^*=T_{y,x}$ and the trace formula $\operatorname{tr}(T_{w,z})=\langle w,z\rangle$, the second expands $\Psi$ and uses $(T_{y,x}\otimes I_K)(h_j\otimes f_j)=\langle h_j,x\rangle y\otimes f_j$ together with conjugate-linearity of the pairing in the second slot, and the third uses $C^*x=\sum_j\langle x,h_j\rangle f_j$ and $Cf_j=h_j$. Since $T_{x,y}$ ranges over all rank-one operators on $H$, the pairing identity of [[lem-nrqm-composites-separable-partial-trace]] and its uniqueness clause give $\operatorname{Tr}_KT_{\Psi,\Psi}=CC^*$; by [[lem-nrqm-composites-density-and-scalar-spectral-probability]] and $\|\Psi\|=1$ this is a density operator. [given, step 1.1, F1, F4, algebra]

3.1 [Reconstruction] For each $r$ with $s_r>0$ define $u_r:=s_r^{-1}C^*v_r\in K$. Then $\langle u_r,u_{r'}\rangle=s_r^{-1}s_{r'}^{-1}\langle v_r,CC^*v_{r'}\rangle=s_r^{-1}s_{r'}^{-1}s_{r'}^2\delta_{rr'}=\delta_{rr'}$, so $(u_r)$ is orthonormal. Moreover $C^*v_r=s_ru_r$ means $\sum_j\langle v_r,h_j\rangle f_j=s_ru_r$, i.e. $\langle v_r,h_j\rangle=s_r\langle f_j,u_r\rangle$. Hence for the expansion coefficients, $\sum_r s_r\langle f_j,u_r\rangle v_r=\sum_r\langle v_r,h_j\rangle v_r=h_j$, because the $v_r$ form a complete orthonormal system for $(\ker CC^*)^\perp$ [F3] and $h_j\perp\ker CC^*$ for every $j$ (if $C^*g=0$ then $\langle h_j,g\rangle=\langle C^*f_j,g\rangle=0$). Therefore $\sum_rs_rv_r\otimes u_r=\sum_jh_j\otimes f_j=\Psi$ in the tensor norm. [step 2.1, F1, F3, algebra]

4.1 [Purity and product criterion] By step 2.2 the reduced state is $\rho=CC^*$, whose positive eigenvalues are exactly the $s_r^2$ with multiplicity by step 2.1; hence for $\|\Psi\|=1$, $\operatorname{tr}\rho^2=\sum_rs_r^4\le(\sum_rs_r^2)^2=1$ with equality exactly when at most one $s_r$ is positive. If $C$ has rank one then $C^*$ has rank one, so all $h_j=C^*f_j$ are proportional to a single vector $v$, i.e. $\Psi=\sum_j\langle f_j,u\rangle v\otimes f_j=v\otimes u$ for $u=\sum_j\langle f_j,u\rangle f_j\in K$; conversely a product vector $v\otimes u$ has $Cz=\langle z,u\rangle v$ of rank at most one. This is the stated criterion. [step 2.1, step 2.2, F3, algebra] ∎
