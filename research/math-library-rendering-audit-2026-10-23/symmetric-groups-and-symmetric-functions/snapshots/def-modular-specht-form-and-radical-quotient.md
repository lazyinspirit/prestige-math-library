---
id: def-modular-specht-form-and-radical-quotient
kind: definition
title: Modular Specht form and radical quotient
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-splitting-p-modular-system-for-a-finite-group
  - def-module-radical-socle-head-and-loewy-series
  - thm-rank-nullity
  - cor-matrix-rank-equals-the-rank-of-its-linear-map
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §11.2 definition of D^lambda and §11.6 p-rank formula, printed pp. 39-40"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Stacey Law, notes by Leonard Tomczak, Representation Theory of Symmetric Groups, §2.2 James submodule theorem and Gram-rank identity for S^lambda/(S^lambda\\cap(S^lambda)^perp), printed pp. 13-14"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Definition

Fix a prime $p$, an integer $n\ge0$, and a **splitting $p$-modular system**
$(K,\mathcal O,k)$ for $S_n$, so that $K$ and $k$ are splitting fields for
$S_n$ and its subgroups
([[def-splitting-p-modular-system-for-a-finite-group]]). Write

$$M^\lambda_k:=k\otimes_{\mathbb Z}M^\lambda_{\mathbb Z},\qquad S^\lambda_k:=k\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}\subseteq M^\lambda_k$$

for the base change of the integral tabloid module and Specht lattice; the
inclusion is the injective polytabloid-span inclusion of
[[def-integral-specht-lattice-and-base-change]], and $S^\lambda_k$ has the
images of the standard polytabloids as $k$-basis. Let
$\beta_k:M^\lambda_k\times M^\lambda_k\to k$ be the reduced integral tabloid
form, the unique $k$-bilinear form with orthonormal tabloid basis
([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]); it is
symmetric, nondegenerate, and $S_n$-invariant.

For a $k$-subspace $V\subseteq M^\lambda_k$ put

$$V^{\perp}:=\{\,x\in M^\lambda_k:\beta_k(x,v)=0\text{ for all }v\in V\,\}.$$

The **form radical** of $S^\lambda_k$ is

$$R^\lambda:=S^\lambda_k\cap (S^\lambda_k)^{\perp},$$

and the **modular Specht quotient** (or James quotient) is

$$D^\lambda:=S^\lambda_k/R^\lambda .$$

The quotient is a $k[S_n]$-module and may be zero. Its dimension is the
$p$-rank of the integral Gram matrix: if $G_\lambda$ is the Gram matrix of
$\beta$ in the standard-polytabloid basis and $\overline{G_\lambda}$ its
reduction modulo $p$, i.e. the matrix of $\beta_k$ in the standard basis of
$S^\lambda_k$, then

$$\dim_kD^\lambda=\operatorname{rank}_k\overline{G_\lambda} =\operatorname{rank}_k(G_\lambda\bmod p).$$

Everything is defined by scalar extension: $S^\lambda_k$ and $\beta_k$ are
determined by $\lambda$ and $k$, and no choice of lifts of elements of
$S^\lambda_k$ enters. $R^\lambda$ is a **form radical**, and is an
$S_n$-submodule; the identification of $R^\lambda$ with the module radical
$\operatorname{rad}(S^\lambda_k)=J(k[S_n])S^\lambda_k$
([[def-module-radical-socle-head-and-loewy-series]]) is a later consequence,
asserted only when $D^\lambda\ne0$. In particular no simplicity of
$D^\lambda$ is claimed here.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, a partition $\lambda\vdash n$, a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$, and the definitions above.

[F1] A splitting $p$-modular system for $S_n$ has $k$ of characteristic $p$ and both $K$ and $k$ splitting fields for every subgroup of $S_n$ ([[def-splitting-p-modular-system-for-a-finite-group]]).

[F2] For every commutative ring $R$ the natural map $R\otimes_{\mathbb Z} S^\lambda_{\mathbb Z}\to M^\lambda_R$ is injective onto the polytabloid span, with the images of the standard polytabloids as a basis; all elements are $R$-linear combinations of standard polytabloids ([[def-integral-specht-lattice-and-base-change]]).

[F3] The reduced form $\beta_k$ has orthonormal tabloid basis, is symmetric, nondegenerate, $S_n$-invariant, and its Gram matrix in the standard basis of $S^\lambda_k$ is the entrywise reduction of $G_\lambda$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F4] The module radical of a finite-dimensional left $A$-module is $\operatorname{rad}(M)=J(A)M$ ([[def-module-radical-socle-head-and-loewy-series]]).

[F5] Rank-nullity for a linear map with finite-dimensional domain gives $\dim V=\operatorname{rank}T+\dim\ker T$ ([[thm-rank-nullity]]).

[F6] The rank of a matrix equals the rank of the linear map it defines ([[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 The field $k$ is the residue field of the splitting $p$-modular system fixed above, hence has characteristic $p$ and is a splitting field for $S_n$ and all its subgroups by [F1]. Thus $M^\lambda_k$ is a finite-dimensional $k$-vector space with the tabloids as basis, and $S^\lambda_k$ is the $k$-span of the polytabloids with the standard polytabloids as basis by [F2]. The form $\beta_k$ of [F3] is nondegenerate and $S_n$-invariant. [given, F1, F2, F3]

1.2 If $U\subseteq M^\lambda_k$ is an $S_n$-submodule, then $U^{\perp}$ is an $S_n$-submodule: for $x\in U^{\perp}$, $u\in U$ and $\sigma\in S_n$, invariance gives $\beta_k(\sigma x,u)=\beta_k(x,\sigma^{-1}u)=0$ because $\sigma^{-1}u\in U$, so $\sigma x\in U^{\perp}$. [given, F3, algebra]

2.1 Since $S^\lambda_k$ is an $S_n$-submodule by [F2] and [F3], step 1.2 shows that $(S^\lambda_k)^{\perp}$ is an $S_n$-submodule, hence so is $R^\lambda=S^\lambda_k\cap(S^\lambda_k)^{\perp}$; the quotient $D^\lambda=S^\lambda_k/R^\lambda$ is therefore a $k[S_n]$-module, and $D^\lambda=0$ holds exactly when $S^\lambda_k\subseteq(S^\lambda_k)^{\perp}$. [given, F2, step 1.1, step 1.2]

2.2 Let $\varphi:S^\lambda_k\to(S^\lambda_k)^{*}$ be $\varphi(v)=\beta_k(v,\cdot)|_{S^\lambda_k}$. Its kernel is exactly $R^\lambda$, and in the standard basis of $S^\lambda_k$ paired with its dual basis the matrix of $\varphi$ is $\overline{G_\lambda}$, so by [F6] the rank of $\varphi$ equals $\operatorname{rank}_k\overline{G_\lambda}$. Rank-nullity [F5] gives $\dim_kS^\lambda_k=\operatorname{rank}_k\overline{G_\lambda}+\dim_kR^\lambda$, hence $\dim_kD^\lambda=\operatorname{rank}_k\overline{G_\lambda}$. [given, F3, F5, F6, step 1.1]

3.1 The construction involves no choices of lifts: $M^\lambda_k$, $S^\lambda_k$ and $\beta_k$ are obtained from the integral objects by scalar extension, and by [F2] every element of $S^\lambda_k$ is a $k$-combination of the standard polytabloids, so the descriptions of $R^\lambda$, $D^\lambda$ and $\dim_kD^\lambda$ depend only on $\lambda$, $p$ and $k$. [given, F2, F3, step 2.1, step 2.2]

4.1 By step 2.1 the form radical is an $S_n$-submodule and $D^\lambda$ is defined for every $\lambda$, possibly zero; by step 2.2 its dimension is the rank of the reduced Gram matrix. The identification $R^\lambda=\operatorname{rad}(S^\lambda_k)$ with the radical of [F4] is asserted only later, for the nonzero case; nothing in this definition presupposes it. [given, F4, step 2.1, step 2.2] ∎
