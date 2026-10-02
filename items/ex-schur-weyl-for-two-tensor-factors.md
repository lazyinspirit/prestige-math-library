---
id: ex-schur-weyl-for-two-tensor-factors
kind: example
title: "Schur-Weyl for two tensor factors"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-schur-weyl-decomposition-with-length-cutoff, def-commuting-symmetric-and-linear-actions-on-tensor-power, thm-tensor-product-basis-from-bases, def-linear-basis, def-partition-young-diagram-and-conjugate-partition, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, lem-polytabloid-covariance-and-column-sign, cor-sign-from-disjoint-cycle-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4, Sections 4.18-4.21, PDF pp. 18-21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Hsueh-Yung Lin, Modern Algebra I, Section 27, printed pp. 71-74"
      url: "https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $V$ be a finite-dimensional complex vector space of dimension
$d=\dim_{\mathbb C}V\ge0$, let $E=V\otimes_{\mathbb C}V$ carry the left place
action of $S_2=\{\mathrm{id},\tau\}$ with $\tau=(12)$ acting by
$\tau(v\otimes w)=w\otimes v$
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]), and put
$$\operatorname{Sym}^2V:=\{x\in E:\tau x=x\},\qquad \Lambda^2V:=\{x\in E:\tau x=-x\}.$$
Then:

1. **(Eigenspace decomposition.)** $E=\operatorname{Sym}^2V\oplus\Lambda^2V$
   is a decomposition into $S_2$-submodules, with
   $\dim_{\mathbb C}\operatorname{Sym}^2V=\frac{d(d+1)}2$ and
   $\dim_{\mathbb C}\Lambda^2V=\frac{d(d-1)}2$.
2. **(Schur-Weyl identification.)** Writing
   $M_\lambda=\operatorname{Hom}_{S_2}(S^\lambda,E)$ for $\lambda\vdash2$,
   the Schur-Weyl decomposition of $E$ for $n=2$ is
   $$E\cong S^{(2)}\otimes M_{(2)}\oplus S^{(1,1)}\otimes M_{(1,1)},$$
   the second summand being omitted when $d\le1$, and the two summands are
   exactly the symmetric and alternating squares:
   $$\operatorname{Sym}^2V=S^{(2)}\otimes M_{(2)},\qquad \Lambda^2V=S^{(1,1)}\otimes M_{(1,1)}.$$
   The Specht shapes $(2)$ and $(1,1)$ are the trivial and the sign
   representation of $S_2$, respectively, as computed in the proof below.
3. **(Vanishing.)** $\Lambda^2V=0$ if and only if $d<2$, in agreement with
   the length cutoff $\ell((1,1))=2$; and
   $\dim_{\mathbb C}M_{(2)}=\frac{d(d+1)}2$ for $d\ge1$, while
   $\dim_{\mathbb C}M_{(1,1)}=\frac{d(d-1)}2$ for $d\ge2$ and $M_{(1,1)}=0$
   otherwise.

## Facts & Assumptions

**Given:** a finite-dimensional complex vector space $V$ of dimension $d$, a basis $e_1,\dots,e_d$ of $V$ (empty when $d=0$), the module $E=V\otimes V$ with its left $S_2$-action, and the spaces $\operatorname{Sym}^2V,\Lambda^2V\subseteq E$ of the Statement.

[F1] The place action of $S_2$ on $E$ is a linear left action, and $g\mapsto g^{\otimes2}$ is the diagonal $\operatorname{GL}(V)$-action, commuting with it; for $n=2$ the transposition acts as $\tau(v\otimes w)=w\otimes v$ ([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]).

[F2] The elementary tensors $e_i\otimes e_j$, $1\le i,j\le d$, form a basis of $E$, so $\dim_{\mathbb C}E=d^2$ and they are linearly independent ([[thm-tensor-product-basis-from-bases]], [[def-linear-basis]]).

[F3] For a partition $\lambda\vdash2$ the tabloids of shape $\lambda$ form a basis of $M^\lambda$ with $\sigma\cdot\{t\}=\{\sigma\cdot t\}$, the polytabloid $e_t=\kappa_t\cdot\{t\}$ with $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$ lies in $S^\lambda$, and $S^\lambda$ is generated as an $S_2$-module by any one polytabloid. For $\lambda=(2)$ there is exactly one tabloid and the column stabilizer of its tableau is trivial; for $\lambda=(1,1)$ there are two tabloids $\{u\}$ and $\tau\{u\}$ with $\tau=(12)$, and the column stabilizer of the tableau $u$ with rows $\{1\},\{2\}$ is $C_u=\{\mathrm{id},\tau\}$, with $\operatorname{sgn}(\tau)=-1$ ([[def-young-subgroup-tabloid-and-permutation-module]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[lem-polytabloid-covariance-and-column-sign]], [[cor-sign-from-disjoint-cycle-structure]]).

[F4] For $n=2$ and $\lambda\vdash2$ put $M_\lambda=\operatorname{Hom}_{S_2}(S^\lambda,E)$; the Schur-Weyl theorem gives an isomorphism of $(S_2\times\operatorname{GL}(V))$-modules $$E\cong\bigoplus_{\lambda\vdash2,\ \ell(\lambda)\le d}S^\lambda\otimes M_\lambda,$$ where $S_2$ acts on $S^\lambda$ and trivially on $M_\lambda$, each $M_\lambda$ with $\ell(\lambda)\le d$ is nonzero and irreducible, and $M_\lambda=0$ when $\ell(\lambda)>d$; the partitions of $2$ are $(2)$ with $\ell=1$ and $(1,1)$ with $\ell=2$ ([[thm-schur-weyl-decomposition-with-length-cutoff]], [[def-partition-young-diagram-and-conjugate-partition]]).

No form of the Axiom of Choice is used; the basis of $V$ and the two-element group $S_2$ are finite and explicit.

## Proof

**Proof technique:** direct.

1.1 Put $p_+:=\frac{1+\tau}2$ and $p_-:=\frac{1-\tau}2$ in $\mathbb C[S_2]$. Using $\tau^2=\mathrm{id}$ one computes $p_++p_-=\mathrm{id}$, $p_+^2=p_+$, $p_-^2=p_-$ and $p_+p_-=p_-p_+=0$; hence $E=p_+E\oplus p_-E$, and $p_+E$ is the fixed space $\operatorname{Sym}^2V$ while $p_-E$ is the anti-fixed space $\Lambda^2V$. [given, F1, algebra]

2.1 The two rank-$2$ Specht modules are the expected one-dimensional modules. For $\lambda=(2)$ every $(2)$-tableau has the same tabloid $\{t\}=\{1,2\}$ and trivial column stabilizer, so $e_s=\{t\}$ for every such tableau and $S^{(2)}=\mathbb C\{t\}$ with $\tau\cdot\{t\}=\{\tau\cdot t\}=\{t\}$: the action is trivial. For $\lambda=(1,1)$ the two tabloids $\{u\}$ and $\tau\cdot\{u\}$ are distinct basis vectors of $M^{(1,1)}$; with $C_u=\{\mathrm{id},\tau\}$ one has $\kappa_u=\mathrm{id}-\tau$, so $e_u=\{u\}-\tau\cdot\{u\}\ne0$, and $\tau\cdot e_u=\tau\cdot\{u\}-\{u\}=-e_u$; by [F3] any one polytabloid generates $S^{(1,1)}$, so $S^{(1,1)}=\mathbb C e_u$ is the sign representation, of dimension one. In particular $S^{(2)}$ is trivial and $S^{(1,1)}$ is the sign representation, as claimed in the Statement. [F3, step 1.1, algebra]

2.2 The two spaces are spanned by explicit tensors: set $s_{ii}:=e_i\otimes e_i$ and $s_{ij}:=e_i\otimes e_j+e_j\otimes e_i$ for $i<j$, and set $a_{ij}:=e_i\otimes e_j-e_j\otimes e_i$ for $i<j$. If $x=\sum_{i,j}c_{ij}e_i\otimes e_j$ is fixed by $\tau$, then $c_{ij}=c_{ji}$, so $x=\sum_i c_{ii}s_{ii}+\sum_{i<j}c_{ij}s_{ij}$. If $x$ is anti-fixed, then $c_{ij}=-c_{ji}$ and $2c_{ii}=0$; over $\mathbb C$ this gives $c_{ii}=0$, so $x=\sum_{i<j}c_{ij}a_{ij}$. Conversely each $s_{ij}$ is fixed and each $a_{ij}$ is anti-fixed. Their respective coefficients on the tensor basis [F2] show that both displayed families are linearly independent: for the symmetric family use the coefficient of $e_i\otimes e_i$ for $s_{ii}$ and of $e_i\otimes e_j$ for $s_{ij}$ with $i<j$; for the alternating family use the coefficient of $e_i\otimes e_j$ for each $i<j$. Hence $\dim\operatorname{Sym}^2V=\binom{d+1}{2}=\frac{d(d+1)}2$ and $\dim\Lambda^2V=\binom d2=\frac{d(d-1)}2$, and step 1.1 gives the direct sum $E=\operatorname{Sym}^2V\oplus\Lambda^2V$. [given, F2, step 1.1, algebra]

2.3 Both summands are $S_2$-submodules: $S_2=\{\mathrm{id},\tau\}$, and each of $\operatorname{Sym}^2V$ and $\Lambda^2V$ is stable under $\tau$ by its definition, hence under every element of $S_2$. [given, F1, step 1.1]

3.1 By [F4] and the list of partitions of $2$ there is an $(S_2\times\operatorname{GL}(V))$-isomorphism $E\cong S^{(2)}\otimes M_{(2)}\oplus S^{(1,1)}\otimes M_{(1,1)}$ when $d\ge2$, and $E\cong S^{(2)}\otimes M_{(2)}$ when $d\le1$ (for $d=0$ the sum is empty and $E=0$). By step 2.1 the transposition acts as $+1$ on $S^{(2)}$ and as $-1$ on $S^{(1,1)}$; since $S_2$ acts trivially on the multiplicity spaces, $\tau$ acts as $+1$ on $S^{(2)}\otimes M_{(2)}$ and as $-1$ on $S^{(1,1)}\otimes M_{(1,1)}$. [F4, step 2.1, algebra]

4.1 Consequently $S^{(2)}\otimes M_{(2)}\subseteq\operatorname{Sym}^2V$ and $S^{(1,1)}\otimes M_{(1,1)}\subseteq\Lambda^2V$; since by step 1.1 the whole of $E$ is the direct sum of its $\tau$-fixed and $\tau$-anti-fixed parts, these inclusions are equalities: the $\tau$-fixed part of $E$ is exactly the $(2)$-summand and the $\tau$-anti-fixed part is exactly the $(1,1)$-summand. In particular, when $d\le1$ the $(1,1)$-summand is absent, so the whole of $E$ is $\tau$-fixed and $\Lambda^2V=0$; when $d\ge2$ both summands are nonzero. [F4, step 1.1, step 3.1, algebra]

5.1 Reading off dimensions in the equality $\operatorname{Sym}^2V=S^{(2)}\otimes M_{(2)}$ of step 4.1 and using $\dim_{\mathbb C}S^{(2)}=1$ from step 2.1 gives $\dim_{\mathbb C}M_{(2)}=\frac{d(d+1)}2$ for $d\ge1$ (and $M_{(2)}=0$ for $d=0$, when $E=0$); similarly $\dim_{\mathbb C}M_{(1,1)}=\frac{d(d-1)}2$ for $d\ge2$, while $M_{(1,1)}=0$ for $d\le1$; this is exactly the length cutoff $\ell((1,1))=2>d$ for $d\le1$. Since $\frac{d(d-1)}2>0$ precisely when $d\ge2$, the alternating square vanishes if and only if $d<2$, and the two extreme cases are $d=0$ (both spaces zero, empty Schur-Weyl sum) and $d=1$ ($E=\operatorname{Sym}^2V$ one-dimensional, $\Lambda^2V=0$). The two idempotents of step 1.1 use that $2$ is invertible in $\mathbb C$, so the calculation is specific to characteristic zero; all arguments use the fixed basis and the explicit two-element group, and no choice principle is invoked. This proves the Statement. [F2, F4, step 2.1, step 2.2, step 4.1, given] ∎

## Remarks

- **Familiar dimensions.** The formulas $\dim\operatorname{Sym}^2V=\frac{d(d+1)}2$ and $\dim\Lambda^2V=\frac{d(d-1)}2$ add up to $d^2=\dim E$, and they exhibit the two classical Schur functors of bidegree $(2)$ on $V$ as the two multiplicity spaces.

- **Where the cutoff bites.** $\ell((1,1))=2$, so the sign factor survives exactly when $d\ge2$: for $d=0,1$ the permutation action of $S_2$ on $E$ is trivial, consistent with the sign factor's absence, and for $d\ge2$ the two summands are the $\pm1$-eigenspaces of the transposition.
