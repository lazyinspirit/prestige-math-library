---
id: thm-james-submodule-theorem-over-an-arbitrary-field
kind: theorem
title: James submodule theorem over every field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - lem-field-antisymmetrizer-image-and-dominance
  - def-module-radical-socle-head-and-loewy-series
  - def-integral-specht-lattice-and-base-change
  - lem-polytabloid-covariance-and-column-sign
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
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Theorems 4.8-4.9 and §11.5, printed pp. 15-16 and 40-41"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Stacey Law, notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Theorem 2.5, Corollary 2.6 and Theorem 2.7, printed pp. 12-13"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $F$ be a field, $n\ge0$, and $\lambda\vdash n$. Let
$$M^\lambda_F=F\otimes_{\mathbb Z}M^\lambda_{\mathbb Z},\qquad S^\lambda_F\subseteq M^\lambda_F,\qquad e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\{\gamma t\}$$
be the field-valued tabloid module, the span of the field-valued polytabloids
inside it, and the field-valued polytabloid of a $\lambda$-tableau $t$, with
the $S_n$-invariant symmetric bilinear form $\beta_F$ whose tabloid basis is
orthonormal ([[def-integral-specht-lattice-and-base-change]],
[[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]). For a subspace
$V\subseteq M^\lambda_F$ put
$$V^\perp=\{x\in M^\lambda_F:\beta_F(x,v)=0\text{ for all }v\in V\},$$
and put
$$R^\lambda_F:=S^\lambda_F\cap(S^\lambda_F)^\perp,\qquad D^\lambda_F:=S^\lambda_F/R^\lambda_F,$$
the field-level form radical and quotient of
[[def-modular-specht-form-and-radical-quotient]]. The **dual** of a
finite-dimensional $F[S_n]$-module $D$ is $D^*=\operatorname{Hom}_F(D,F)$
with $(\sigma\cdot f)(v):=f(\sigma^{-1}v)$; $D$ is **self-dual** when
$D\cong D^*$.

**James submodule theorem.** For every $F[S_n]$-submodule
$U\le M^\lambda_F$, either $S^\lambda_F\le U$ or
$U\le(S^\lambda_F)^\perp$.

**Consequences.** $D^\lambda_F$ is zero or absolutely irreducible, and in
either case it is self-dual; here **absolutely irreducible** means that
$E\otimes_FD^\lambda_F$ is an irreducible $E[S_n]$-module for every field
extension $E/F$. If $D^\lambda_F\ne0$, then $R^\lambda_F$ is the unique
maximal submodule of $S^\lambda_F$, equals the module radical
$\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple head of
$S^\lambda_F$. No step uses positivity, averaging or division by a group
order, and the statements include characteristic two and $n=0$.

## Facts & Assumptions

**Given:** A field $F$, an integer $n\ge0$, a partition $\lambda\vdash n$, and the definitions above.

[F1] For every commutative ring $R$ the natural map $R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}\to M^\lambda_R$ is injective onto the polytabloid span $S^\lambda_R$, with the images of the standard polytabloids as a basis; each $e_t$ has tabloid coefficients in $\{0,1,-1\}$ and coefficient $1$ at $\{t\}$, so $e_t\ne0$ ([[def-integral-specht-lattice-and-base-change]]).

[F2] $\beta_R$ is the unique $R$-bilinear form on $M^\lambda_R$ with orthonormal tabloid basis; it is symmetric, nondegenerate and $S_n$-invariant, every $\kappa_t$ is self-adjoint for it, and its matrix in the standard basis of $S^\lambda_R$ is the scalar extension of the integer Gram matrix $G_\lambda=(\beta(e_{s_i},e_{s_j}))$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F3] For every field $E$ one has $\kappa_tM^\lambda_E=Ee_t$ with $e_t\ne0$ ([[lem-field-antisymmetrizer-image-and-dominance]]).

[F4] $e_{\sigma\cdot t}=\sigma\cdot e_t$ for every $\sigma\in S_n$; every $\lambda$-tableau is $\sigma\cdot t$ for some $\sigma$, so $S^\lambda_F=F[S_n]e_t$ for every $\lambda$-tableau $t$ ([[lem-polytabloid-covariance-and-column-sign]]).

[F5] For a splitting field $k$ the form radical $R^\lambda=S^\lambda_k\cap(S^\lambda_k)^\perp$ and the quotient $D^\lambda=S^\lambda_k/R^\lambda$, possibly zero, are the objects of [[def-modular-specht-form-and-radical-quotient]]; the same formulas define $R^\lambda_F$ and $D^\lambda_F$ over an arbitrary field $F$.

[F6] For a finite-dimensional algebra $A$ and a finite-dimensional left $A$-module $M$, the module radical satisfies $\operatorname{rad}(M)=J(A)M$ and equals the intersection of the maximal submodules of $M$, and the head is $\operatorname{hd}(M)=M/\operatorname{rad}(M)$ ([[def-module-radical-socle-head-and-loewy-series]]).

[F7] Rank-nullity holds for linear maps between finite-dimensional vector spaces, and the rank of a matrix equals the rank of the linear map it defines ([[thm-rank-nullity]], [[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $U\le M^\lambda_F$ be an $F[S_n]$-submodule. If $\kappa_tU\ne0$ for some $\lambda$-tableau $t$, then $\kappa_tU$ is a nonzero subspace of $\kappa_tM^\lambda_F=Fe_t$ by [F3], hence $\kappa_tU=Fe_t$ and $e_t=\kappa_tu\in U$ for some $u\in U$; since $S^\lambda_F=F[S_n]e_t$ by [F4] and $U$ is a submodule, $S^\lambda_F\le U$. If instead $\kappa_tU=0$ for every $\lambda$-tableau $t$, then for every $u\in U$ and every $t$, using $\kappa_t\{t\}=e_t$ and the self-adjointness of $\kappa_t$ from [F2], $$\beta_F(u,e_t)=\beta_F(u,\kappa_t\{t\})=\beta_F(\kappa_tu,\{t\})=0,$$ so $u$ is orthogonal to every polytabloid and $U\le(S^\lambda_F)^\perp$. In either case one of the two alternatives of the James submodule theorem holds. [given, F1, F2, F3, F4, algebra]

1.2 Over the arbitrary field $F$ put $R^\lambda_F:=S^\lambda_F\cap(S^\lambda_F)^\perp$ and $D^\lambda_F:=S^\lambda_F/R^\lambda_F$, the same formulas as in the modular definition [F5]. Let $\varphi:S^\lambda_F\to(S^\lambda_F)^*$ be $\varphi(v)=\beta_F(v,\cdot)|_{S^\lambda_F}$. Its kernel is $S^\lambda_F\cap(S^\lambda_F)^\perp=R^\lambda_F$, because $\beta_F(v,s)=0$ for all $s\in S^\lambda_F$ says exactly that $v\in(S^\lambda_F)^\perp$ when $v\in S^\lambda_F$; in the standard basis of $S^\lambda_F$ paired with its dual basis the matrix of $\varphi$ is the Gram matrix $G_F$ of $\beta_F$, by [F2] and [F1]. Hence by [F7] the rank of $\varphi$ equals $\operatorname{rank}_FG_F$ and rank-nullity gives $$\dim_FS^\lambda_F=\operatorname{rank}_FG_F+\dim_FR^\lambda_F,\qquad \dim_FD^\lambda_F=\operatorname{rank}_FG_F .$$ In particular $D^\lambda_F=0$ exactly when every entry of the Gram matrix vanishes in $F$. [given, F1, F2, F5, F7, algebra]

1.3 Let $E/F$ be a field extension. By [F1] applied over the commutative rings $F$ and $E$, the identifications $M^\lambda_E\cong E\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$ and $M^\lambda_F\cong F\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$ give $E\otimes_FM^\lambda_F\cong M^\lambda_E$, and likewise $E\otimes_FS^\lambda_F\cong S^\lambda_E$ with standard bases matched; by [F2] the form $\beta_E$ is the scalar extension of $\beta_F$. For $r\in R^\lambda_F$ and $s\in S^\lambda_F$ one has $\beta_F(r,s)=0$, hence $\beta_E(1\otimes r,1\otimes s)=1\otimes\beta_F(r,s)=0$, and since $E\otimes_FR^\lambda_F\subseteq E\otimes_FS^\lambda_F=S^\lambda_E$ this gives $E\otimes_FR^\lambda_F\subseteq(S^\lambda_E)^\perp\cap S^\lambda_E=R^\lambda_E$. Therefore the natural map $$E\otimes_FD^\lambda_F=E\otimes_F\bigl(S^\lambda_F/R^\lambda_F\bigr)\longrightarrow S^\lambda_E/\bigl(E\otimes_FR^\lambda_F\bigr)\longrightarrow D^\lambda_E$$ is a surjection of finite-dimensional $E$-vector spaces. [given, F1, F2, algebra]

2.1 Let $N\le S^\lambda_F$ be an $F[S_n]$-submodule. Applying step 1.1 to $N$ viewed as a submodule of $M^\lambda_F$ gives $S^\lambda_F\le N$ or $N\le(S^\lambda_F)^\perp$, and in the second case $N\le(S^\lambda_F)^\perp\cap S^\lambda_F=R^\lambda_F$. Hence every proper submodule of $S^\lambda_F$ is contained in $R^\lambda_F$. Moreover $R^\lambda_F$ is itself an $F[S_n]$-submodule: if $x\in(S^\lambda_F)^\perp$, $v\in S^\lambda_F$ and $\sigma\in S_n$, then invariance in [F2] gives $\beta_F(\sigma x,v)=\beta_F(x,\sigma^{-1}v)=0$ because $\sigma^{-1}v\in S^\lambda_F$, so $(S^\lambda_F)^\perp$ is a submodule, and $R^\lambda_F$ is the intersection of two submodules. [given, F2, step 1.1, algebra]

2.2 By step 1.2 applied over $F$ and over $E$, $\dim_FD^\lambda_F=\operatorname{rank}_FG_F$ and $\dim_ED^\lambda_E=\operatorname{rank}_EG_E$. The rank of the integer matrix $G_\lambda$ over a field is the largest $m$ for which some $m\times m$ minor has nonzero image in that field; a minor is an integer, its image vanishes over $F$ if and only if it vanishes over $E$, and $F$ and $E$ have the same characteristic, so $\operatorname{rank}_FG_F=\operatorname{rank}_EG_E$. Since $\dim_E(E\otimes_FD^\lambda_F)=\dim_FD^\lambda_F$, the surjection of step 1.3 is an isomorphism $$D^\lambda_E\cong E\otimes_FD^\lambda_F .$$ [given, step 1.2, step 1.3, algebra]

2.3 Define $\overline\beta:D^\lambda_F\times D^\lambda_F\to F$ by $\overline\beta(x+R^\lambda_F,y+R^\lambda_F)=\beta_F(x,y)$. This is well defined: replacing $x$ by $x+r$ and $y$ by $y+s$ with $r,s\in R^\lambda_F\subseteq(S^\lambda_F)^\perp$ changes the value by $\beta_F(r,y)+\beta_F(x,s)+\beta_F(r,s)=0$. The form $\overline\beta$ is symmetric and $S_n$-invariant, inherited from $\beta_F$ by [F2], and it is nondegenerate: if $\overline\beta(x+R^\lambda_F,y+R^\lambda_F)=0$ for all $y\in S^\lambda_F$, then $x\in(S^\lambda_F)^\perp\cap S^\lambda_F=R^\lambda_F$. Hence the $F$-linear map $\overline\varphi:D^\lambda_F\to(D^\lambda_F)^*$, $\overline\varphi(\xi)=\overline\beta(\xi,\cdot)$, is injective; since $\dim_FD^\lambda_F=\dim_F(D^\lambda_F)^*$ by step 1.2, it is an isomorphism of vector spaces, and for $\sigma\in S_n$ and $\eta\in D^\lambda_F$, $$\overline\varphi(\sigma\xi)(\eta)=\overline\beta(\sigma\xi,\eta)=\overline\beta(\xi,\sigma^{-1}\eta)=\bigl(\sigma\cdot\overline\varphi(\xi)\bigr)(\eta),$$ so $\overline\varphi$ is $F[S_n]$-linear and $D^\lambda_F\cong(D^\lambda_F)^*$; this includes the case $D^\lambda_F=0$, where both sides are zero. [given, F2, step 1.2, algebra]

3.1 Suppose $D^\lambda_F\ne0$, so $R^\lambda_F\ne S^\lambda_F$. By step 2.1 every proper submodule of $S^\lambda_F$ lies in $R^\lambda_F$, while $R^\lambda_F$ is itself a proper submodule by assumption; hence $R^\lambda_F$ contains every proper submodule and is therefore the unique maximal submodule of $S^\lambda_F$. By [F6] the module radical equals the intersection of the maximal submodules, so $\operatorname{rad}(S^\lambda_F)=R^\lambda_F$; in particular $D^\lambda_F=S^\lambda_F/\operatorname{rad}(S^\lambda_F)$ is the head of $S^\lambda_F$. If $W\le D^\lambda_F$ is a submodule and $N\le S^\lambda_F$ is its preimage, then $R^\lambda_F\le N$ and either $N=S^\lambda_F$, giving $W=D^\lambda_F$, or $N$ is proper, in which case $N\le R^\lambda_F$ by step 2.1 and hence $N=R^\lambda_F$, giving $W=0$; thus $D^\lambda_F$ is simple. [given, F6, step 2.1, algebra]

4.1 Let $E/F$ be a field extension and suppose $D^\lambda_F\ne0$. By step 2.2, $D^\lambda_E\cong E\otimes_FD^\lambda_F$ is nonzero. The arguments of steps 1.1, 2.1 and 3.1 apply verbatim with $F$ replaced by the field $E$: [F3] holds over every field, [F2] holds over every commutative ring, and the alternative of step 1.1 and its consequence step 2.1 use only those facts, so $R^\lambda_E$ is the unique maximal submodule of $S^\lambda_E$ and $D^\lambda_E$ is simple. As $E/F$ was arbitrary, $D^\lambda_F$ is absolutely irreducible. [given, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 Step 1.1 is the James submodule theorem. If $D^\lambda_F=0$ then the consequences are vacuous, and $D^\lambda_F=0\cong(D^\lambda_F)^*$ is self-dual; if $D^\lambda_F\ne0$, then step 3.1 gives the unique maximal submodule, the identification $R^\lambda_F=\operatorname{rad}(S^\lambda_F)$ and the simple head, step 2.3 gives self-duality, and step 4.1 gives absolute irreducibility. For $n=0$ and $\lambda=\varnothing$ there is one tabloid and one polytabloid with $\beta_F(e,e)=1$ and $C_t=\{1\}$, so $R^\lambda_F=0$, $D^\lambda_F\cong F$ is the trivial module, simple and absolutely irreducible, and all assertions hold; the argument above never divides by a group order or uses positivity. [given, step 1.1, step 2.3, step 3.1, step 4.1] ∎
