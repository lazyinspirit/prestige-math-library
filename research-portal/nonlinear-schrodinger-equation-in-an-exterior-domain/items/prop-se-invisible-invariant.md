---
id: prop-se-invisible-invariant
kind: proposition
domain: mathematics
title: Locally constant invisible spaces are Laplacian invariant
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-invisible-space
  - def-se-control-cutoffs
  - prop-se-invisible-finite-dimensional
  - prop-se-scale-flow
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:cor-finite-dimensional-subspaces-are-closed
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-invisible-space: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  prop-se-invisible-finite-dimensional: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  math:cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 14
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping in the generalized-ray sense. Choose $R>0$ with $\Theta\subset B_R(0)$ and fix a real-valued $\varphi\in C^\infty(\mathbb R^n;[0,1])$ such that $\varphi(x)=0$ for $|x|\le R$, $\varphi(x)>0$ for $|x|>R$, and $\varphi(x)=1$ for $|x|\ge R+1$. Let $T_0>0$ and $\sigma\in[-2,2)$. Let $H_D^\sigma(\Omega)$ be the Dirichlet spectral scale, $W(t)=e^{it\Delta_D}$ its evolution, and $N_T^\sigma$ the space of initial data whose observation $\varphi W(t)v$ vanishes in $H_D^\sigma(\Omega)$ for every $t\in[0,T]$, using this fixed $\varphi$.

There exist $T_0/2\le a<b\le T_0$ such that $N_T^\sigma$ is the same finite-dimensional space $N$ for every $T\in[a,b]$. For every $h\in[0,b-a]$, $W(h)N\subseteq N$. Identifying $N$ with its image in $H_D^{\sigma-2}(\Omega)$ under the canonical injective scale embedding, one has $\Delta_DN\subseteq N$, where $\Delta_D:H_D^\sigma\to H_D^{\sigma-2}$ is the bounded scale extension.

## Statement references

[[def-se-nontrapping]]

[[def-se-control-cutoffs]]

[[def-se-dirichlet-scale]]

[[prop-se-scale-flow]]

[[def-se-invisible-space]]

## Facts & Assumptions

[F1] For the fixed $R$ and $\varphi$ in the statement, choose an auxiliary real cutoff $\psi\in C_c^\infty(\mathbb R^n;[0,1])$ equal to one on $B_{R+2}(0)$ and supported in $B_{R+3}(0)$, as supplied by [[def-se-control-cutoffs]]. The pair $\varphi,\psi$ satisfies the cutoff hypotheses of [[prop-se-invisible-finite-dimensional]]. Thus under Choice and (H), every $N_T^\sigma$ formed with this fixed $\varphi$ is finite-dimensional for $T>0$ and $\sigma\in[-2,2)$. For $T'\ge T$, the definition gives $N_{T'}^\sigma\subseteq N_T^\sigma$. [[def-se-invisible-space]]

[F2] The scale is the completed spectral scale of $I-\Delta_D$. Its canonical embedding $H_D^\sigma\to H_D^{\sigma-2}$ is continuous and injective, and both levels are complex Hilbert spaces. [[def-se-dirichlet-scale]] [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]]

[F3] The operators $W(t)$ form a group on $H_D^\sigma$. For every $v\in H_D^\sigma$, $t\mapsto W(t)v$ is continuously differentiable in $H_D^{\sigma-2}$ with derivative $i\Delta_DW(t)v$; $\Delta_D$ is the bounded scale extension specified in the statement. [[prop-se-scale-flow]]

[F4] A finite-dimensional complex linear subspace of a complex normed space is closed for the ambient norm. [[math:cor-finite-dimensional-subspaces-are-closed]]

[F5] The geometry and non-trapping convention in (H) are those of [[def-se-geometry]] and [[def-se-nontrapping]]. Full Choice is retained as an assumption of the scale and finite-dimensionality suppliers. [[math:def-axiom-of-choice]]

## Proof

[F1] For the fixed $R$ and $\varphi$ in the statement, choose an auxiliary real cutoff $\psi\in C_c^\infty(\mathbb R^n;[0,1])$ equal to one on $B_{R+2}(0)$ and supported in $B_{R+3}(0)$, as supplied by [[def-se-control-cutoffs]]. The pair $\varphi,\psi$ satisfies the cutoff hypotheses of [[prop-se-invisible-finite-dimensional]]. Thus under Choice and (H), every $N_T^\sigma$ formed with this fixed $\varphi$ is finite-dimensional for $T>0$ and $\sigma\in[-2,2)$. For $T'\ge T$, the definition gives $N_{T'}^\sigma\subseteq N_T^\sigma$. [[def-se-invisible-space]]

[F2] The scale is the completed spectral scale of $I-\Delta_D$. Its canonical embedding $H_D^\sigma\to H_D^{\sigma-2}$ is continuous and injective, and both levels are complex Hilbert spaces. [[def-se-dirichlet-scale]] [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]]

[F3] The operators $W(t)$ form a group on $H_D^\sigma$. For every $v\in H_D^\sigma$, $t\mapsto W(t)v$ is continuously differentiable in $H_D^{\sigma-2}$ with derivative $i\Delta_DW(t)v$; $\Delta_D$ is the bounded scale extension specified in the statement. [[prop-se-scale-flow]]

[F4] A finite-dimensional complex linear subspace of a complex normed space is closed for the ambient norm. [[math:cor-finite-dimensional-subspaces-are-closed]]

[F5] The geometry and non-trapping convention in (H) are those of [[def-se-geometry]] and [[def-se-nontrapping]]. Full Choice is retained as an assumption of the scale and finite-dimensionality suppliers. [[math:def-axiom-of-choice]]



**Given:** Choice, (H), the fixed $R$ and $\varphi$, $T_0>0$ and $\sigma\in[-2,2)$ as in the statement.

**Goal:** Find a constant interval for the invisible spaces and prove the stated flow and Laplacian invariance.

1.1 Each dimension $d(T)=\dim N_T^\sigma$ is a nonnegative integer. The nonempty set of these integers for $T\in[T_0/2,T_0)$ has a least element; choose $a$ in that interval attaining it and choose $b$ with $a<b<T_0$. For every $T\in[a,b]$, nesting gives $N_T^\sigma\subseteq N_a^\sigma$ and hence $d(T)\le d(a)$, while minimality gives $d(T)\ge d(a)$. A subspace of a finite-dimensional space with the same dimension is the whole space. Thus all these spaces equal $N:=N_a^\sigma$, which is finite-dimensional. [F1, given]

2.1 Let $v\in N$ and $0\le h\le b-a$. Since $v\in N_b^\sigma$, its observation vanishes at every time in $[0,b]$. For $t\in[0,a]$, the group law gives $\varphi W(t)W(h)v=\varphi W(t+h)v=0$, because $t+h\in[0,b]$. Therefore $W(h)v\in N_a^\sigma=N$. [F1, F3, step 1.1]

3.1 Regard $N$ as a complex linear subspace of $H_D^{\sigma-2}$ through the injective embedding. Its finite basis remains a basis of its image, so it is closed in that lower-scale norm. For $0<h\le b-a$, both $W(h)v$ and $v$ belong to $N$, and hence so does $(W(h)v-v)/h$. Differentiability at zero in $H_D^{\sigma-2}$ makes these quotients converge to $i\Delta_Dv$. Closedness gives $i\Delta_Dv\in N$. [F2, F3, F4, step 1.1, step 2.1]

4.1 Since $N$ is a complex linear space, multiplication by $-i$ shows $\Delta_Dv\in N$. As $v$ was arbitrary, $\Delta_DN\subseteq N$ in the stated lower-scale identification. This and steps 1.1 and 2.1 prove the conclusion. [step 3.1] ∎

## Source notes

The original article is cited for attribution of the constant-dimension and invariance argument in the proof of Lemma 3.4 on PDF page 11. The argument above uses the stated mathematical suppliers; the article's conclusion is not used as its own premise.
