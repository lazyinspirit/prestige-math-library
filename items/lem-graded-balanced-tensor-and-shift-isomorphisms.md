---
id: lem-graded-balanced-tensor-and-shift-isomorphisms
kind: lemma
title: Graded associativity, units, and internal-shift tensor isomorphisms
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-graded-balanced-tensor-product-and-homogeneous-hom, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, thm-universal-property-of-module-tensor-products, thm-bimodule-actions-induced-on-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2b, author pp. 8-9"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Stacks Project, Algebra, §10.56, tag 00JL"
      url: "https://stacks.math.columbia.edu/tag/00JL"
    - title: "Stacks Project, Algebra, §10.12, tag 00CV"
      url: "https://stacks.math.columbia.edu/tag/00CV"
verification:
  precheck: pass
---

## Statement

Let $R,S$ be graded $k$-algebras and let $B,C$ be graded $k$-algebras; let $M$ be a
graded $(B,R)$-bimodule, $N$ a graded $(R,S)$-bimodule and $P$ a graded
$(S,C)$-bimodule.

1. The balanced associator
$$\alpha_{M,N,P}:(M\otimes_RN)\otimes_SP\longrightarrow M\otimes_R(N\otimes_SP),\qquad \alpha_{M,N,P}((m\otimes n)\otimes p)=m\otimes(n\otimes p),$$
is an isomorphism of graded abelian groups, natural in $M,N,P$ and compatible
with the outer actions that make both sides graded
$(B,C)$-bimodules.

2. For every graded left $R$-module $N$ and graded right $R$-module $M$ the
tensor-unit maps $\lambda_N:R\otimes_RN\to N$, $r\otimes n\mapsto rn$, and
$\rho_M:M\otimes_RR\to M$, $m\otimes r\mapsto mr$, are degree-zero isomorphisms,
compatible with outer actions.

3. For all $r,s\in\mathbb Z$, the identity on elementary tensors induces a
degree-zero isomorphism
$$M\{r\}\otimes_RN\{s\}\;\cong\;(M\otimes_RN)\{r+s\},$$
natural in $M$ and $N$ and compatible with outer actions.

## Facts & Assumptions

**Given:** Graded $k$-algebras $B,C,R,S$; a graded $(B,R)$-bimodule $M$, a graded $(R,S)$-bimodule $N$ and a graded $(S,C)$-bimodule $P$; integers $r,s$.

[L1] Graded modules, degree-zero maps, graded submodules and internal shifts are defined in [[def-graded-ring-module-bimodule-and-internal-shift]].

[L2] The balanced tensor product is graded by total internal degree on homogeneous elementary tensors, and outer actions make it a graded module ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L3] The balanced associator is a canonical isomorphism, respects compatible outer actions and is natural ([[thm-associativity-of-balanced-tensor-products]]).

[L4] The tensor-unit maps $\lambda_N$ and $\rho_M$ are group isomorphisms with inverses $n\mapsto1_R\otimes n$ and $m\mapsto m\otimes1_R$, and they respect outer module structures ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L5] A balanced pairing induces a unique homomorphism out of the tensor product ([[thm-universal-property-of-module-tensor-products]]), and the outer actions are the unique ones with $(m\otimes n)s=m\otimes(ns)$ and $s(m\otimes n)=(sm)\otimes n$ ([[thm-bimodule-actions-induced-on-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let $X,Y$ be graded abelian groups and $f:X\to Y$ a bijective degree-zero homomorphism. Then $f$ is an isomorphism of graded abelian groups, i.e. $f^{-1}$ is degree-zero: for $y\in Y_d$ write $y=f(x)$ with $x=\sum_ex_e$ the finite homogeneous decomposition, so $y=\sum_ef(x_e)$ with $f(x_e)\in Y_e$; uniqueness of the homogeneous decomposition in $Y$ gives $f(x_d)=y$ and $f(x_e)=0$ for $e\ne d$, hence $x=x_d\in X_d$. [L1, algebra]

2.1 For homogeneous $m\in M_i$, $n\in N_j$, $p\in P_l$ the tensor $(m\otimes n)\otimes p$ has degree $(i+j)+l$ and $m\otimes(n\otimes p)$ has degree $i+(j+l)$, the same integer, so $\alpha_{M,N,P}$ carries the homogeneous part of degree $d$ into degree $d$ on elementary tensors and, being additive, on all of $(M\otimes_RN)\otimes_SP$. It is a bijective group homomorphism by [L3], so step 1.1 makes it a degree-zero isomorphism; its naturality and compatibility with outer actions are those of the published associator. [step 1.1, L2, L3]

2.2 For homogeneous $r\in R_i$ and $n\in N_j$ one has $\lambda_N(r\otimes n)=rn\in N_{i+j}$, so $\lambda_N$ is degree-zero, and it is bijective by [L4]; step 1.1 makes it a degree-zero isomorphism, and its compatibility with outer actions is the published one. The same computation with $\rho_M(m\otimes r)=mr\in M_{i+j}$ for $m\in M_i$ treats $\rho_M$. [step 1.1, L2, L4]

2.3 The pairing $M\{r\}\times N\{s\}\to(M\otimes_RN)\{r+s\}$, $(x,y)\mapsto x\otimes y$, is balanced with respect to $R$: the underlying $R$-actions of $M\{r\}$ and $N\{s\}$ are those of $M$ and $N$, so $(xa)\otimes y$ and $x\otimes(ay)$ are equal in $M\otimes_RN$; it is additive in each variable. By [L5] it induces a group homomorphism $\varphi$ with $\varphi(x\otimes y)=x\otimes y$. For $x\in(M\{r\})_i=M_{i-r}$ and $y\in(N\{s\})_j=N_{j-s}$ the element $x\otimes y$ lies in $(M\otimes_RN)_{i+j-r-s}=((M\otimes_RN)\{r+s\})_{i+j}$, so $\varphi$ is degree-zero, and the same construction in the reverse direction gives $\psi$ with $\psi(x\otimes y)=x\otimes y$; the two composites fix all elementary tensors and hence are identities. By step 1.1, $\varphi$ is a degree-zero isomorphism. [step 1.1, L2, L5, algebra]

3.1 The outer actions on both sides of $\varphi$ are the unique actions with the elementary-tensor formulas of [L5], and the shifts change no action, so $\varphi$ is compatible with the outer actions; it is natural because it is induced from the universal property of the pairing of underlying modules. [step 2.3, L2, L5]

4.1 Collecting steps 2.1, 2.2, 2.3 and 3.1: the associator, the two unit maps and the shift comparison are degree-zero isomorphisms of graded modules, with the naturality and outer-action compatibility stated. [step 2.1, step 2.2, step 2.3, step 3.1]

5.1 Therefore the ordinary balanced associator and unit maps are degree-zero graded isomorphisms, and the identity on elementary tensors induces the natural degree-zero isomorphism $M\{r\}\otimes_RN\{s\}\cong(M\otimes_RN)\{r+s\}$ compatible with outer actions. [step 4.1] ∎
