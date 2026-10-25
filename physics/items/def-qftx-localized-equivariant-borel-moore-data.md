---
id: def-qftx-localized-equivariant-borel-moore-data
kind: definition
title: Localized torus-equivariant Borel–Moore classes
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
  - thm-constructible-six-functors-proper-base-change-and-verdier-duality
  - lem-qftx-rational-torus-classifying-space-cohomology
  - def-axiom-of-choice
dependency_roles:
  def-equivariant-borel-moore-homology-and-correspondence-convolution: mathematical-premise
  thm-constructible-six-functors-proper-base-change-and-verdier-duality: mathematical-premise
  lem-qftx-rational-torus-classifying-space-cohomology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Sections 2–4; Theorem 1 and the smooth fixed-locus formula, Theorem 2.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore homology, and Section 12, equivariant cohomology and the Borel construction.
landmark: false
---

## Definition

Assume the Axiom of Choice. Let $r\geq 0$, let $T=(\mathbb C^\times)^r$ act algebraically on a separated finite-type complex variety $X$, and suppose $X$ has a finite cover by $T$-invariant affine open subvarieties. Use rational coefficients. Let $K=(S^1)^r$ be the maximal compact subgroup of $T$, and use the product right Milnor model $E_K=(E_{S^1})^r$, $B_K=E_K/K=(\mathbb{CP}^{\infty})^r$. The inclusion $K\subset T$ gives the same topological Borel construction up to homotopy. For each algebraic character $\chi:T\to\mathbb C^\times$, let $L_\chi=E_K\times_K\mathbb C_{\chi|_K}\to B_K$, with right equivalence $(e,z)\cdot t=(e\cdot t,\chi(t)^{-1}z)$, and put $u_\chi=c_1(L_\chi)$. For the coordinate characters $\chi_i$ and $u_i=u_{\chi_i}$, the coefficient ring is $R_T=H^*(B_K;\mathbb Q)=\mathbb Q[u_1,\ldots,u_r]$, with $|u_i|=2$ and $u_\chi=\sum_i n_i u_i$ for $\chi(t_1,\ldots,t_r)=\prod_i t_i^{n_i}$. Let $S_T$ be the multiplicative set consisting of $1$ and finite products of $u_\chi$ for nontrivial $\chi$.

Let $H^{\mathrm{BM},T}_j(X;\mathbb Q)=\operatorname{Hom}_{D^b_{T,c}(X;\mathbb Q)}(\mathbb Q_X,\omega_X^T[-j])$, where $\omega_X^T$ is the normalized equivariant dualizing object whose restriction is the ordinary dualizing object $\omega_X$, without a quotient-stack dimension shift. Equivalently, this is the stable value in degree $j$ of $H^{\mathrm{BM}}_{j+2rm}(X_m;\mathbb Q)$, where $U_m=(\mathbb C^{m+1}\setminus\{0\})^r$ has the free right scalar $T$-action, $X_m=(U_m\times X)/T$ uses $(e,x)\cdot t=(e\cdot t,t^{-1}\cdot x)$, and the supplied bounded-Hom comparison is taken in its stable range. Put $H_*^{\mathrm{BM},T}(X;\mathbb Q)=\bigoplus_{j\in\mathbb Z}H_j^{\mathrm{BM},T}(X;\mathbb Q)$. Pullback from $B_K$ and cap product make this total group an $R_T$-module: a homogeneous $a\in R_T^q$ sends $H_j$ to $H_{j-q}$, so coefficients have homological degree $-q$. For an $R_T$-module $M$, $S_T^{-1}M$ consists of fractions $m/s$ with $m\in M$, $s\in S_T$, and $m/s=m'/s'$ exactly when some $t\in S_T$ satisfies $t(s'm-sm')=0$; addition and scalar multiplication are the induced fraction operations. Localize the total graded module and define
$$
\mathcal H_j^T(X):=\left(S_T^{-1}H_*^{\mathrm{BM},T}(X;\mathbb Q)\right)_j.
$$
For homogeneous $\beta\in H_k^{\mathrm{BM},T}(X;\mathbb Q)$ and $s\in S_T$ of cohomological degree $q$, the fraction $\beta/s$ has homological degree $k+q$. The notation $S_T^{-1}H_j^{\mathrm{BM},T}(X;\mathbb Q)$ will mean $\mathcal H_j^T(X)$, never localization of the individual group $H_j$. Likewise localized equivariant cohomology means localization of $\bigoplus_q H_T^q(X;\mathbb Q)$ with $\deg(\alpha/s)=\deg\alpha-\deg s$. Cap product extends by $(\alpha/s)\cap(\beta/t)=(\alpha\cap\beta)/(st)$. At a point, $H_j^{\mathrm{BM},T}(\mathrm{pt};\mathbb Q)=H^{-j}(B_K;\mathbb Q)$, so $\mathcal H_j^T(\mathrm{pt})=(S_T^{-1}R_T)^{-j}$. Proper equivariant maps induce degree-preserving pushforwards, invariant open inclusions induce Borel–Moore restrictions, and a smooth pure $d$-dimensional complex variety has its complex-oriented fundamental class $[X]_T$ in degree $2d$. For $r=0$, $R_T=\mathbb Q$ and $S_T=\{1\}$.

## Definition references

[Equivariant Borel–Moore homology and normalized dualizing object] [Ginzburg, Section 1, Borel–Moore homology](https://arxiv.org/pdf/math/9802004)

[Algebraic torus localization and smooth fixed-locus denominator] [Edidin–Graham, Theorems 1–2](https://arxiv.org/pdf/alg-geom/9508001)

## Facts & Assumptions

**Given:** AC, the product algebraic torus $T$, its maximal compact subgroup $K$, the specified invariant affine cover, and rational coefficients.

[A1] Assume the Axiom of Choice as in the equivariant Stiefel approximation and Thom constructions. [[def-axiom-of-choice]]

[F1] For a product $G$ of complex general linear groups, equivariant Borel–Moore homology is $\operatorname{Hom}(k_X,\omega_X^G[-j])$; its normalized dualizing object restricts to the ordinary one, and the groups agree in the stable range with dimension-shifted Borel approximations. The case $G=T=(\mathrm{GL}_1)^r$ applies. [[def-equivariant-borel-moore-homology-and-correspondence-convolution]]

[F2] Proper equivariant pushforwards, restrictions to invariant opens, the support localization triangle, and coherent base change are available in the bounded constructible category. [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]

[F3] The product torus classifying space has rational cohomology $\mathbb Q[u_1,\ldots,u_r]$; every character has an integer weight vector and its associated line has first Chern class $\sum_i n_i u_i$. [[lem-qftx-rational-torus-classifying-space-cohomology]]

## Proof

**Given:** The data in the Definition.

1.1 Since $T=(\mathrm{GL}_1)^r$, [F1] supplies the normalized equivariant Borel–Moore groups and the stable scalar-frame construction. For $U_m=(\mathbb C^{m+1}\setminus\{0\})^r$, the quotient is $B_m=(\mathbb{CP}^m)^r$ and $\dim_{\mathbb C}U_m-\dim_{\mathbb C}T=rm$, giving the stated degree shift. AC is inherited from [F1] and is the only choice assumption added here. [A1, F1, given, algebra]

1.2 The polar decomposition $T\cong K\times(\mathbb R_{>0})^r$ makes $K\hookrightarrow T$ a homotopy equivalence. Choose one contractible free $T$-space $E$; it is also free for $K$, and $E/K\to E/T$ has contractible fiber $T/K$. The Borel fibrations $(E\times X)/K\to E/K$ and $(E\times X)/T\to E/T$ have common fiber $X$, with identity map on that fiber. Their homotopy exact sequences therefore make $(E\times X)/K\to(E\times X)/T$ a weak equivalence. Model independence of the universal free contractible space identifies this with the product right Milnor model and the algebraic-torus approximation in [F1]. [F1, given, construct]

2.1 By [F3], each nontrivial character has $u_\chi=\sum_i n_i u_i\neq0$ in the polynomial domain $R_T$. Therefore finite products of such classes remain nonzero, and concatenating two finite products shows that $S_T$ contains $1$, is multiplicatively closed, and excludes $0$. The localization by fractions is consequently defined. [F3, step 1.2, algebra]

3.1 The operations in the Definition are the proper pushforward, open restriction, and support maps of [F2]; the cap action is the action of Borel cohomology through $E_K\times_KX\to B_K$. For smooth pure complex dimension $d$, the normalized dualizing object restricts to $\mathbb Q_X[2d]$, so the complex orientation gives $[X]_T$ degree $2d$. These constructions respect the stable comparison of [F1]. For homogeneous $a\in R_T^q$, cap product lowers homological degree by $q$. In the fraction relation, all denominators are homogeneous; if two homogeneous fractions have different degrees, multiply to a common denominator and compare homogeneous components. Equality then forces each fraction to be zero. Splitting a numerator into its finitely many homogeneous components therefore gives the stated direct grading of the localization, with $\deg(\beta/s)=\deg\beta+\deg s$. The cap fraction formula is well-defined because cap product is balanced over the even-degree coefficient ring: a multiplier annihilating either numerator relation also annihilates the corresponding cap relation. Proper pushforward and open restriction commute with coefficient cap products, so they extend to the localized total modules and preserve their homogeneous pieces. [F1, F2, step 1.2] ∎
