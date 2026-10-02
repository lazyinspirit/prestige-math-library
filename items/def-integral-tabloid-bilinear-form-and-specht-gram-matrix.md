---
id: def-integral-tabloid-bilinear-form-and-specht-gram-matrix
kind: definition
title: Integral tabloid form and Specht Gram matrix
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-invariant-inner-product-on-a-tabloid-module
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-free-module-on-a-set-and-standard-basis
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacey Law, notes by Leonard Tomczak, Representation Theory of Symmetric Groups, §2.2 Lemma 2.3 (invariant symmetric bilinear tabloid form) and the Gram-matrix discussion, printed pp. 11-14"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Chapter 9, Definition 9.1 and Remark 9.2, printed pp. 31-32 (the bilinear version of the tabloid form)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $n\ge0$ and $\lambda\vdash n$, and keep the integral tabloid module
$M^\lambda_{\mathbb Z}$ and the integral Specht lattice
$S^\lambda_{\mathbb Z}$ with its standard basis
([[def-integral-specht-lattice-and-base-change]]). The **integral tabloid
form** is the $\mathbb Z$-bilinear form

$$\beta:M^\lambda_{\mathbb Z}\times M^\lambda_{\mathbb Z}\longrightarrow\mathbb Z, \qquad \beta\Bigl(\sum_Ta_TT,\ \sum_Ub_UU\Bigr):=\sum_{T\in\Omega_\lambda}a_Tb_T,$$

the unique $\mathbb Z$-bilinear form for which the tabloid basis is
orthonormal: $\beta(T,U)=\delta_{TU}$ for all $\lambda$-tabloids $T,U$. It is
**symmetric** because $\delta_{TU}=\delta_{UT}$, and **nondegenerate** because
$\beta(x,U)=0$ for all $U$ forces every tabloid coefficient of $x$ to vanish.

Let $s_1,\dots,s_d$ be the standard $\lambda$-tableaux and
$e_{s_1},\dots,e_{s_d}$ the corresponding standard polytabloids, a
$\mathbb Z$-basis of $S^\lambda_{\mathbb Z}$. The **integral Specht Gram
matrix** is

$$G_\lambda:=\bigl(\beta(e_{s_i},e_{s_j})\bigr)_{1\le i,j\le d}\in M_d(\mathbb Z),$$

the matrix of the restriction $\beta|_{S^\lambda_{\mathbb Z}}$ in the standard
basis; its entries are integers because each $e_{s}$ has tabloid
coefficients in $\{0,1,-1\}$. For a commutative ring $R$ let
$\beta_R:M^\lambda_R\times M^\lambda_R\to R$ be the $R$-bilinear form with
$\beta_R(T,U)=\delta_{TU}$ on the tabloid basis of $M^\lambda_R$. Under the
canonical identification $M^\lambda_R\cong R\otimes_{\mathbb Z}
M^\lambda_{\mathbb Z}$ the form $\beta_R$ is the scalar extension of $\beta$,
$\beta_R(1\otimes x,1\otimes y)=1\otimes\beta(x,y)$, and the Gram matrix of
$\beta_R$ in the standard basis $1\otimes e_{s_i}$ of $S^\lambda_R$ is the
scalar extension of $G_\lambda$ to $R$.

Two warnings are built into the definition. First, $\beta$ is a **symmetric
bilinear** form, not the complex Hermitian form of
[[def-invariant-inner-product-on-a-tabloid-module]]: the latter is
conjugate-linear in its first variable and positive definite, and neither its
conjugation nor its positivity has a meaning over a general commutative ring.
Positivity of $\beta$ is asserted only after embedding in $\mathbb R$ or
$\mathbb C$: for real coefficients $\beta(x,x)=\sum_Ta_T^2\ge0$ with equality
only for $x=0$. Second, the reduction of $G_\lambda$ modulo a prime is
governed by the divisibility theory of its entries, and cannot be decided from
the positive-definiteness of the Hermitian form.

The form satisfies $\beta(\sigma x,\sigma y)=\beta(x,y)$ for all
$\sigma\in S_n$, so every $\kappa_t$ is self-adjoint for $\beta$:
$\beta(\kappa_tx,y)=\beta(x,\kappa_ty)$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a partition $\lambda\vdash n$, and the
definitions above.

[F1] $M^\lambda_{\mathbb Z}$ is free with the tabloids as $\mathbb Z$-basis, so
every element has a unique finite integer coordinate expression; for every
commutative ring $R$ there is a natural identification
$M^\lambda_R\cong R\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$
([[def-integral-specht-lattice-and-base-change]]).

[F2] The standard polytabloids form a $\mathbb Z$-basis of
$S^\lambda_{\mathbb Z}$
([[def-integral-specht-lattice-and-base-change]]).

[F3] The tabloids form a basis of the permutation module $M^\lambda$ and each
$\sigma\in S_n$ permutes the tabloids bijectively
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$ and
$e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\{\gamma\cdot t\}$, so all
tabloid coefficients of $e_t$ lie in $\{0,1,-1\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F5] The published Hermitian form on the complex tabloid module is
conjugate-linear in its first variable, positive definite, invariant under the
unitary action, and every $\kappa_t$ is self-adjoint for it
([[def-invariant-inner-product-on-a-tabloid-module]]).

## Proof

**Proof technique:** direct.

1.1 The prescription $\beta(T,U)=\delta_{TU}$ on the tabloid basis extends uniquely to a $\mathbb Z$-bilinear map by [F1], and the formula $\beta(\sum_Ta_TT,\sum_Ub_UU)=\sum_Ta_Tb_T$ is finite because only finitely many coefficients are nonzero. If $\beta(x,U)=0$ for every tabloid $U$, then taking $U$ to be a tabloid occurring in $x$ gives $a_U=0$, so all coefficients vanish and $x=0$; the form is nondegenerate. [given, F1, algebra]

1.2 For $\sigma\in S_n$, [F3] says that $T\mapsto\sigma T$ is a bijection of the tabloid set, so $\beta(\sigma T,\sigma U)=\delta_{\sigma T,\sigma U}=\delta_{TU}=\beta(T,U)$ on basis vectors, and bilinearity extends the identity to all $x,y$. [given, F3, algebra]

1.3 Every entry $\beta(e_s,e_t)$ is a finite sum $\sum_Tc_s(T)c_t(T)$ of products of tabloid coefficients, each of which lies in $\{0,1,-1\}$ by [F4]; hence $\beta(e_s,e_t)\in\mathbb Z$ and, using the standard basis [F2], $G_\lambda$ is a matrix over $\mathbb Z$. Since $\beta$ is symmetric, so is $G_\lambda$. [given, F2, F4, algebra]

2.1 Applying step 1.2 to each term of $\kappa_t$ gives $\beta(\kappa_tx,y)=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\beta(\gamma x,y)=\sum_{\gamma}\operatorname{sgn}(\gamma)\beta(x,\gamma^{-1}y)$; reindexing $\gamma\mapsto\gamma^{-1}$ and using $\operatorname{sgn}(\gamma^{-1})=\operatorname{sgn}(\gamma)$ this is $\beta(x,\kappa_ty)$, so $\kappa_t$ is self-adjoint for $\beta$. [given, F4, step 1.2, algebra]

2.2 Let $R$ be a commutative ring. Under the identification of [F1], the $R$-bilinear form $\beta_R$ with orthonormal tabloid basis sends $1\otimes x,1\otimes y$ to $\beta(x,y)$ times $1_R$, by expanding $x$ and $y$ in the tabloid basis; hence $\beta_R$ is the scalar extension of $\beta$, and the matrix of $\beta_R$ in the standard basis $1\otimes e_{s_i}$ is the scalar extension of $G_\lambda$. [given, F1, F2, step 1.3, algebra]

3.1 Over the real field, $x=\sum_Ta_TT$ with $a_T\in\mathbb R$ satisfies $\beta(x,x)=\sum_Ta_T^2\ge0$, with equality only when all $a_T=0$, i.e. $x=0$; this is the positivity that holds on real vectors and it is the same quantity as the Hermitian form of [F5] on real coefficients, while the conjugate-linearity of [F5] and the positivity have no counterpart over a general commutative ring, and in particular cannot be reduced modulo a prime. The self-adjointness of step 2.1 and the integrality and scalar extension of steps 1.3 and 2.2 complete the asserted definition. [given, F4, F5, step 1.3, step 2.1, step 2.2] ∎
