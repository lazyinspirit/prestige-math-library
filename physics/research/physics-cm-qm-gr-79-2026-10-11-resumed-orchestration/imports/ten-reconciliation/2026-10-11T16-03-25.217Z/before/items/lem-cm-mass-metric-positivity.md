---
id: lem-cm-mass-metric-positivity
kind: lemma
title: "The mass metric is symmetric, positive semidefinite, and positive definite exactly when the configuration differential is injective"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-constrained-configuration-and-mass-metric, def-inner-product-space, def-euclidean-inner-product, def-definiteness-inertia-and-signature-data-over-the-reals, def-immersion-submersion-and-constant-rank-map]
dependency_roles:
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-immersion-submersion-and-constant-rank-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.1 and Section 3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 3.9 (inertia of rigid motions)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, let $Q$ be a smooth manifold, let $X:Q\to\mathbb R^{3N}$ be smooth, let $m_1,\dots,m_N>0$ and let $G_q$ be the mass metric of [[def-cm-constrained-configuration-and-mass-metric]].

1. For every $q\in Q$ the map $G_q$ is a symmetric bilinear form on $T_qQ$.
2. $G_q(u,u)=\sum_{i=1}^N m_i\|dX_q(u)_i\|_2^2\ge 0$ for every $u\in T_qQ$, so $G_q$ is positive semidefinite.
3. $G_q$ is positive definite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]) if and only if $dX_q$ is injective. In particular, if $X$ is an immersion ([[def-immersion-submersion-and-constant-rank-map]]) then $G_q$ is positive definite for every $q$.
4. If $b_1,\dots,b_n$ is an ordered basis of $T_qQ$ and $A$ is the matrix whose $j$-th column is the coordinate vector of $dX_q(b_j)$ in the standard basis of $\mathbb R^{3N}$, then the matrix of the bilinear form $G_q$ in this basis is $A^{\mathsf T}MA$, with $M$ the mass matrix.

## Facts & Assumptions

**Given:** The data $(Q,X,m_1,\dots,m_N)$ of [[def-cm-constrained-configuration-and-mass-metric]], a point $q\in Q$, and an ordered basis $b_1,\dots,b_n$ of $T_qQ$ for clause 4.

[L1] The mass metric is $G_q(u,v)=\langle dX_q(u),MdX_q(v)\rangle_{3N}$, the differential is linear, and $M(x_1,\dots,x_N)=(m_1x_1,\dots,m_Nx_N)$ with $m_i>0$ ([[def-cm-constrained-configuration-and-mass-metric]]).

[L2] The Euclidean inner product satisfies $\langle x,x\rangle=\|x\|_2^2\ge0$, with equality only for $x=0$, and is bilinear ([[def-inner-product-space]], [[def-euclidean-inner-product]]).

[L3] Positive definiteness of a symmetric bilinear form means $B(u,u)>0$ for every $u\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

## Proof

**Proof technique:** direct.

1.1 Bilinearity of $G_q$ follows from linearity of $dX_q$ and of $M$ together with bilinearity of the inner product [L1, L2]: for reals $\alpha,\beta$ and $u,u',v\in T_qQ$, $G_q(\alpha u+\beta u',v)=\alpha G_q(u,v)+\beta G_q(u',v)$ and similarly in the second argument. Symmetry follows from symmetry of $M$: since $M$ acts by $x\mapsto(m_1x_1,\dots,m_Nx_N)$, $\langle a,Mb\rangle_{3N}=\sum_im_i\langle a_i,b_i\rangle_2=\langle Ma,b\rangle_{3N}$, so $G_q(u,v)=G_q(v,u)$. This proves clause 1. [L1, L2, algebra]

1.2 For $u\in T_qQ$ write $dX_q(u)=(w_1,\dots,w_N)$ with $w_i\in\mathbb R^3$; then [L1] and [L2] give $G_q(u,u)=\langle dX_q(u),MdX_q(u)\rangle_{3N}=\sum_{i=1}^Nm_i\langle w_i,w_i\rangle_2=\sum_{i=1}^Nm_i\|w_i\|_2^2\ge0$. This proves clause 2. [L1, L2, algebra]

2.1 Suppose $dX_q$ is injective and $u\ne0$; then $dX_q(u)\ne0$, so some $w_i\ne0$, so $\|w_i\|_2^2>0$ by [L2], and since $m_i>0$ the sum in step 1.2 is strictly positive. Hence $G_q(u,u)>0$ for every $u\ne0$. Conversely, if $dX_q$ is not injective, choose $u\ne0$ with $dX_q(u)=0$; then every $w_i=0$, the sum in step 1.2 vanishes, and $G_q$ is not positive definite by [L3]. This proves clause 3 for the injectivity criterion; if $X$ is an immersion, $dX_q$ is injective at every $q$ by definition, so $G_q$ is positive definite. [step 1.2, L3, algebra]

3.1 In the basis $b_1,\dots,b_n$ the matrix of $G_q$ has entries $G_q(b_j,b_k)=\langle dX_q(b_j),MdX_q(b_k)\rangle_{3N}$. If $A$ is the matrix whose $j$-th column is the coordinate vector of $dX_q(b_j)$, then $M(dX_q(b_k))$ has coordinate vector $MAe_k$, and the inner product of coordinate vectors is the Euclidean product, so $G_q(b_j,b_k)=(A^{\mathsf T}MA)_{jk}$. This proves clause 4. [step 1.1, L1, L2, algebra] ∎
