---
id: thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions
kind: theorem
title: Nonzero modular Specht quotient criterion
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - lem-specht-gram-gcd-detects-p-regularity
  - thm-james-submodule-theorem-over-an-arbitrary-field
  - def-p-regular-and-p-restricted-partitions
  - def-splitting-p-modular-system-for-a-finite-group
  - def-module-radical-socle-head-and-loewy-series
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
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
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Theorem 11.1, Definition 11.2 and Theorem 11.6, printed pp. 39-40"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, Propositions 2.8-2.9 and Theorem 2.5, printed pp. 23-25"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $p$ be a prime, let $n\ge0$ and $\lambda\vdash n$, and let $F$ be a
field of characteristic $p$. Let $\beta_F$ be the reduced integral tabloid
form on $M^\lambda_F=F\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$, with
orthonormal tabloid basis, and let
$$S^\lambda_F\subseteq M^\lambda_F,\qquad R^\lambda_F:=S^\lambda_F\cap(S^\lambda_F)^{\perp},\qquad D^\lambda_F:=S^\lambda_F/R^\lambda_F,$$
where $V^{\perp}=\{x\in M^\lambda_F:\beta_F(x,v)=0\text{ for all }v\in V\}$
([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]],
[[thm-james-submodule-theorem-over-an-arbitrary-field]]). Let $G_\lambda$ be
the Gram matrix of the integral tabloid form in the standard-polytabloid
basis of the integral Specht lattice $S^\lambda_{\mathbb Z}$, and let
$g_\lambda$ be the positive greatest common divisor of its entries
([[def-integral-specht-lattice-and-base-change]],
[[lem-specht-gram-gcd-detects-p-regularity]]). Write $G_\lambda\bmod p$ for
the entrywise image of $G_\lambda$ in $F$, a matrix with entries in $F$.
Then:

1. **Vanishing criterion.**
   $$D^\lambda_F=0\iff p\mid G_{ij}\text{ for all }i,j \iff p\mid g_\lambda\iff\lambda\text{ is not }p\text{-regular},$$
   and equivalently $D^\lambda_F\ne0$ if and only if $z_j(\lambda)<p$ for
   every $j\ge1$, where $z_j(\lambda)$ is the number of parts of $\lambda$
   equal to $j$.
2. **Dimension.** $\dim_FD^\lambda_F=\operatorname{rank}_F(G_\lambda\bmod p)$;
   this dimension is determined by $\lambda$ and $p$ alone, and it is
   positive exactly when $\lambda$ is $p$-regular.
3. **Structure when nonzero.** If $\lambda$ is $p$-regular, then
   $D^\lambda_F\ne0$ is the simple, self-dual and absolutely irreducible
   head of $S^\lambda_F$, and $R^\lambda_F$ is the unique maximal submodule
   of $S^\lambda_F$, equal to the module radical
   $\operatorname{rad}(S^\lambda_F)$.

For the $k$ of a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$,
$D^\lambda_k$ is the modular Specht quotient $D^\lambda$ of
[[def-modular-specht-form-and-radical-quotient]], so the criterion above
decides for which $\lambda$ that quotient vanishes. No simplicity of
$S^\lambda_F$ itself is asserted.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, a partition $\lambda\vdash n$, a field $F$ of characteristic $p$, and the objects above.

[F1] For every commutative ring $R$ the base change $M^\lambda_R=R\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$ has the $\lambda$-tabloids as $R$-basis, and $S^\lambda_R=R\otimes_{\mathbb Z} S^\lambda_{\mathbb Z}\subseteq M^\lambda_R$ is the span of the polytabloids $$e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\{\gamma t\},$$ with the standard polytabloids as $R$-basis; each $e_t$ has tabloid coefficients in $\{0,1,-1\}$ and coefficient $1$ at $\{t\}$, so $e_t\ne0$ ([[def-integral-specht-lattice-and-base-change]], [[def-young-subgroup-tabloid-and-permutation-module]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] $\beta_R$ is the unique $R$-bilinear form on $M^\lambda_R$ for which the tabloids form an orthonormal basis; it is symmetric, nondegenerate and $S_n$-invariant, every $\kappa_t$ is self-adjoint for it, and its matrix in the standard basis of $S^\lambda_R$ is the scalar extension of the integer Gram matrix $G_\lambda=(\beta(e_{s_i},e_{s_j}))$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F3] For the $k$ of a splitting $p$-modular system $(K,\mathcal O,k)$ one has $R^\lambda=S^\lambda_k\cap(S^\lambda_k)^{\perp}$ and $D^\lambda=S^\lambda_k/R^\lambda$, and $\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$ ([[def-modular-specht-form-and-radical-quotient]], [[def-splitting-p-modular-system-for-a-finite-group]]).

[F4] $g_\lambda$, the positive gcd of all integral pairings $\beta(e_s,e_t)$ of polytabloids, is also the gcd of the entries of $G_\lambda$, and for every prime $p$ one has $p\nmid g_\lambda$ if and only if $\lambda$ is $p$-regular ([[lem-specht-gram-gcd-detects-p-regularity]]).

[F5] **James submodule theorem over every field.** For every $F[S_n]$-submodule $U\le M^\lambda_F$, either $S^\lambda_F\le U$ or $U\le(S^\lambda_F)^{\perp}$. Consequently $D^\lambda_F$ is zero, or absolutely irreducible and self-dual; and if $D^\lambda_F\ne0$, then $R^\lambda_F$ is the unique maximal submodule of $S^\lambda_F$, equals the module radical $\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple head of $S^\lambda_F$ ([[thm-james-submodule-theorem-over-an-arbitrary-field]], [[def-module-radical-socle-head-and-loewy-series]]).

[F6] $\lambda$ is $p$-regular if and only if $z_j(\lambda)<p$ for every $j\ge1$ ([[def-p-regular-and-p-restricted-partitions]]).

[F7] Rank-nullity holds for linear maps between finite-dimensional vector spaces, and the rank of a matrix equals the rank of the linear map it defines ([[thm-rank-nullity]], [[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 The map $\varphi:S^\lambda_F\to(S^\lambda_F)^*$, $\varphi(v)=\beta_F(v,\cdot)|_{S^\lambda_F}$, is $F$-linear, and its kernel is exactly $R^\lambda_F$: an element $v\in S^\lambda_F$ lies in the kernel if and only if $\beta_F(v,s)=0$ for all $s\in S^\lambda_F$, that is, if and only if $v\in(S^\lambda_F)^{\perp}$. If $(e_{s_1},\dots,e_{s_m})$ is the standard basis of $S^\lambda_F$ and $(e_{s_1}^*,\dots,e_{s_m}^*)$ is its dual basis of $(S^\lambda_F)^*$, then the matrix of $\varphi$ in these bases is $\bigl(\varphi(e_{s_i})(e_{s_j})\bigr)_{i,j} =\bigl(\beta_F(e_{s_i},e_{s_j})\bigr)_{i,j}$, which is the entrywise image in $F$ of the integer matrix $G_\lambda$ by [F2]. Hence $\operatorname{rank}\varphi=\operatorname{rank}_F(G_\lambda\bmod p)$ by [F7], and rank-nullity of $\varphi$ gives $$\dim_FD^\lambda_F=\dim_FS^\lambda_F-\dim_FR^\lambda_F =\operatorname{rank}_F(G_\lambda\bmod p).$$ [given, F1, F2, F7]

1.2 A prime $p$ divides the gcd $g_\lambda$ of the entries $G_{ij}$ of $G_\lambda$ if and only if $p$ divides every entry $G_{ij}$; by [F4] this gcd is the same as the gcd of all integral pairings $\beta(e_s,e_t)$ of polytabloids. In particular, over $F$, the condition $p\mid g_\lambda$ is equivalent to the matrix $G_\lambda\bmod p$ being the zero matrix. [given, F4, algebra]

1.3 By [F4] and [F6], $p\mid g_\lambda$ if and only if $\lambda$ is not $p$-regular, that is, if and only if $z_j(\lambda)\ge p$ for some $j\ge1$. [given, F4, F6]

2.1 By step 1.1, $D^\lambda_F=0$ if and only if $\operatorname{rank}_F(G_\lambda\bmod p)=0$, which happens exactly when $G_\lambda\bmod p$ is the zero matrix; by step 1.2 this is equivalent to $p\mid g_\lambda$, and hence to $p$ dividing every entry of $G_\lambda$. [given, step 1.1, step 1.2, algebra]

3.1 Combining steps 2.1 and 1.3 gives the equivalences of assertion 1: $D^\lambda_F=0$ exactly when $p$ divides every entry of $G_\lambda$, exactly when $p\mid g_\lambda$, exactly when $\lambda$ is not $p$-regular, and equivalently $D^\lambda_F\ne0$ exactly when $\lambda$ is $p$-regular. If $\lambda$ is $p$-regular, then $D^\lambda_F\ne0$ by this equivalence, and [F5] applies in its nonzero case: $D^\lambda_F$ is self-dual and absolutely irreducible, $R^\lambda_F$ is the unique maximal submodule of $S^\lambda_F$ and equals $\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple head of $S^\lambda_F$. This is assertion 3. [given, F5, step 2.1, step 1.3]

4.1 For assertion 2, step 1.1 gives $\dim_FD^\lambda_F=\operatorname{rank}_F(G_\lambda\bmod p)$ for every field $F$ of characteristic $p$; by step 3.1 this dimension is positive exactly when $\lambda$ is $p$-regular. The rank of the integer matrix $G_\lambda$ over $F$ is the largest $r$ for which some $r\times r$ minor of $G_\lambda$ has nonzero image in $F$; a minor is an integer and its image in $F$ is nonzero exactly when $p$ does not divide it, so this integer $r$ depends only on $\lambda$ and $p$ and not on the particular field $F$ of characteristic $p$. This common value is the $p$-rank of the Gram matrix. For the $k$ of a splitting $p$-modular system, [F3] exhibits the same value as $\dim_kD^\lambda$, so the statement over a general field specializes to the modular Specht quotient of the definition. [given, F3, step 1.1, step 3.1, algebra]

5.1 Assertions 1 and 2 are steps 3.1 and 4.1, and the structural part of assertion 3 is the second half of step 3.1; the structure statement is invoked only in the nonzero case, to which [F5] applies, and no simplicity of $S^\lambda_F$ is claimed. For $n=0$ and $\lambda=\varnothing$ there is exactly one tabloid and one polytabloid $e_t$ with $C_t=\{1\}$ and $\beta_F(e_t,e_t)=1$, so $G_\varnothing=(1)$, $g_\varnothing=1$, $R^\varnothing_F=0$ and $D^\varnothing_F\cong F$ has dimension $1=\operatorname{rank}_F(G_\varnothing\bmod p)$; the empty partition is $p$-regular for every prime $p$ by [F6], so it is covered by the nonzero case and the criterion holds. No step divides by $p$ or by a group order, and no positivity or averaging is used, so characteristic $2$ is included without special treatment. [given, F1, F2, F5, F6, step 3.1, step 4.1] ∎
