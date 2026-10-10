---
id: cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost
kind: counterexample
title: "Counterexample: a spatial rotation is a proper orthochronous Lorentz map that is not a boost"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 9
deps: [def-lorentz-map-and-lorentz-group, def-lorentz-boost,
       def-spatial-rotation-of-an-inertial-frame,
       lem-boost-is-proper-orthochronous-with-inverse,
       lem-boost-rotation-factorization,
       def-inertial-frame-and-inertial-chart,
       thm-laplace-cofactor-expansion,
       def-matrix-minors-cofactors-and-adjugate]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-boost-rotation-factorization: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-laplace-cofactor-expansion: mathematical-premise
  def-matrix-minors-cofactors-and-adjugate: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement refuted

The statement "every proper orthochronous Lorentz map is a passive boost
$B(\boldsymbol\beta)$ for some $\boldsymbol\beta$ with
$|\boldsymbol\beta|<1$" is false.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and the linear maps defined below by their action on the frame basis.

[L1] A linear Lorentz map is a linear $L:V\to V$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$; it is proper when $\det L=+1$ and orthochronous when $L(C^+)=C^+$ ([[def-lorentz-map-and-lorentz-group]]).

[L2] A spatial rotation of the frame is a linear $R:V\to V$ with $R(e_0)=e_0$, $R(S)\subseteq S$, $\delta(Rw,Rz)=\delta(w,z)$ on the spatial three-space $S$, and $\det(R|_S)=+1$ in $(e_1,e_2,e_3)$ ([[def-spatial-rotation-of-an-inertial-frame]]).

[L3] The extension $\widehat R=\operatorname{diag}(1,R)$ of a determinant-one $\delta$-isometry $R:S\to S$ is a proper orthochronous Lorentz map ([[lem-boost-rotation-factorization]]).

[L4] For every $|\boldsymbol\beta|<1$ the passive boost satisfies $B(\boldsymbol\beta)e_0=\gamma(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)$ and $B(\mathbf 0)=\operatorname{id}_V$; the map $\boldsymbol\beta\mapsto B(\boldsymbol\beta)e_0$ is injective ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L5] The determinant of a square matrix is computed by Laplace cofactor expansion, $\det(A)=\sum_k a_{kj}C_{kj}(A)$ along the column $j$ ([[thm-laplace-cofactor-expansion]], [[def-matrix-minors-cofactors-and-adjugate]]); in particular $\det\begin{pmatrix}a&b\\ c&d\end{pmatrix}=ad-bc$ by expanding along the first column, since the $(0,0)$-cofactor is $d$ and the $(1,0)$-cofactor is $-b$.



## Counterexample

1.1 Define $\widehat R:V\to V$ by $\widehat Re_0=e_0$, $\widehat Re_1=e_2$, $\widehat Re_2=-e_1$, $\widehat Re_3=e_3$. In the ordered basis $(e_0,e_1,e_2,e_3)$ its matrix is $\begin{pmatrix}1&0&0&0\\ 0&0&-1&0\\ 0&1&0&0\\ 0&0&0&1\end{pmatrix}$, and its restriction to $S=\operatorname{span}(e_1,e_2,e_3)$ has the matrix $A=\begin{pmatrix}0&-1&0\\ 1&0&0\\ 0&0&1\end{pmatrix}$ in $(e_1,e_2,e_3)$. The columns of $A$ are orthonormal in the standard inner product on $\mathbb R^3$ (they are $(0,1,0)$, $(-1,0,0)$, $(0,0,1)$), so $A^{T}A=I_3$ and $A$ preserves the form $\delta$ on $S$; and Laplace expansion along the third column gives $\det A=1\cdot\det\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}=1\cdot(0\cdot0-(-1)\cdot1)=1$ by [L5]. Hence $\widehat R(e_0)=e_0$, $\widehat R(S)=S$, $\delta(\widehat Rw,\widehat Rz)=\delta(w,z)$ for all $w,z\in S$, and $\det(\widehat R|_S)=+1$: all four defining conditions of [L2] hold, so $\widehat R$ is a spatial rotation of the frame. [L2, L5, algebra]

2.1 By step 1.1 and [L3], the extension $\widehat R=\operatorname{diag}(1,\widehat R|_S)$ is a proper orthochronous Lorentz map. In particular $\widehat R$ is a member of $SO^+(V,\eta)$ in the sense of [L1], and it is not the identity because $\widehat Re_1=e_2\neq e_1$. [L1, L3, step 1.1]

3.1 Suppose, for contradiction, that $\widehat R=B(\boldsymbol\beta)$ for some $\boldsymbol\beta$ with $|\boldsymbol\beta|<1$. Applying both sides to $e_0$ and using [L4] gives $\gamma(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)=e_0$; comparing the $e_0$ coordinates gives $\gamma=1$ and then comparing the spatial coordinates gives $\gamma\beta_i=0$ for $i=1,2,3$, hence $\boldsymbol\beta=\mathbf 0$ and $B(\boldsymbol\beta)=B(\mathbf 0)=\operatorname{id}_V$ by [L4]. But $\widehat Re_1=e_2\neq e_1=\operatorname{id}_V(e_1)$, a contradiction. Hence $\widehat R$ is a proper orthochronous Lorentz map that is not a passive boost, and the refuted statement is false. [L4, step 1.1, step 2.1, algebra]

4.1 Consequently the set of passive boosts is a proper subset of $SO^+(V,\eta)$: the strict inclusion is witnessed by $\widehat R$. The factorization theorem $L=B(-\boldsymbol\beta)\widehat R_\beta$ of [[lem-boost-rotation-factorization]] therefore cannot drop its rotation factor in general: for $L=\widehat R$ the theorem produces the factorization $\widehat R=B(\mathbf 0)\widehat R$ with rotation factor $\widehat R|_S\neq\operatorname{id}_S$, and by clause (v) of that theorem $L$ is a passive boost if and only if that factor is the identity. [L3, step 2.1, algebra] ∎
