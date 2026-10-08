---
id: thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis
kind: theorem
title: Existence and uniqueness of the Kazhdan–Lusztig basis
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-r-polynomial-recursion-and-degree-bounds, lem-the-hecke-bar-involution-is-well-defined, def-normalized-type-a-hecke-algebra-and-its-bar-involution, thm-standard-basis-of-the-generic-type-a-hecke-algebra, lem-reversal-anti-involution-commutes-with-hecke-bar, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — Theorem 5.2, Proposition 5.4 and §5.6 (printed pp. 27–30): bar-invariant triangular basis, coefficient degree/parity and inverse-index symmetry; the complete argument was read. The split-parameter convention is translated to this page by inverting Lusztig's parameter."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§5.1–5.6, printed pp. 27–30; Theorem 5.2 and its full construction and uniqueness proof, Proposition 5.4, and §5.6 were read in full."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the Hecke normalization and characterization of the Kazhdan–Lusztig basis."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; the complete section and displayed formulas were read."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$, the normalized Hecke algebra $H_v(n)$, its bar involution, and the Laurent coefficients $r_{x,y}$ of the bar images in the standard basis.

[F1] The standard elements $H_y$ form an $A=\mathbb Z[v^{\pm1}]$-basis of $H_v(n)$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] The bar is a semilinear algebra involution with $\overline v=v^{-1}$ ([[lem-the-hecke-bar-involution-is-well-defined]]).

[F3] The coefficients satisfy $r_{x,y}=0$ unless $x\le y$, $r_{y,y}=1$, and both matrix identities $R\bar R=\bar R R=I$; for $x\le y$, their degree bounds, parity, and top coefficient are as stated in the R-coefficient theorem ([[thm-r-polynomial-recursion-and-degree-bounds]]).

[F4] The $A$-linear anti-automorphism $\flat$ commutes with bar and sends $H_y$ to $H_{y^{-1}}$ ([[lem-reversal-anti-involution-commutes-with-hecke-bar]]).

[F5] Bruhat order on $S_n$ is a finite graded order, strict inequalities raise length, and inversion preserves the order ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Statement

For each $w\in S_n$ there is a unique element $\underline H_w\in H_v(n)$ with (i) $\overline{\underline H_w}=\underline H_w$ and (ii) $\underline H_w\in H_w+\sum_{y<w}v\mathbb Z[v]\,H_y$ (the sum over the lower Bruhat ideal of $w$). The elements $\{\underline H_w\}_{w\in S_n}$ form an $A$-basis of $H_v(n)$, and writing $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ one has $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, $p_{y,w}\in v\mathbb Z[v]$ for $y<w$, the bar-duality $p_{x,w}=\sum_{y}r_{x,y}\,\overline{p_{y,w}}$ (matrix form $P=R\bar P$), and the symmetry $p_{y^{-1},w^{-1}}=p_{y,w}$. Moreover for $y<w$, with $d=\ell(w)-\ell(y)$: $p_{y,w}=v^{d}+\text{terms of strictly smaller degree}$ and $p_{y,w}\in v^{d}\,\mathbb Z[v^{-2}]$; in particular every $\underline H_w$ has integer nonnegative coefficients in the standard basis with $p_{y,w}$ of fixed parity $d\bmod 2$.

## Proof

**Proof technique:** construct the triangular bar-fixed element by descending induction in the finite Bruhat order, then use its uniqueness and coefficient comparison.

1.1 **Construct the coefficients.** Fix $w$ and descend on $d=\ell(w)-\ell(x)$ over the finite lower Bruhat ideal $\{x:x\le w\}$, starting with $p_{w,w}=1$. Suppose $x<w$ and $p_{y,w}$ has been constructed for every $x<y\le w$, satisfying $p_{y,w}=\sum_{y\le z\le w}r_{y,z}\overline{p_{z,w}}$. Put $a_x:=\sum_{x<y\le w}r_{x,y}\overline{p_{y,w}}$. Then
$$\begin{aligned}\overline{a_x}&=\sum_{x<y\le w}\overline{r_{x,y}}p_{y,w}=\sum_{x<y\le z\le w}\overline{r_{x,y}}r_{y,z}\overline{p_{z,w}}\\&=-\sum_{x<z\le w}r_{x,z}\overline{p_{z,w}}=-a_x.\end{aligned}$$
The second equality uses the induction equations; for $x<z$, the identity $\bar R R=I$ makes the sum over $x\le y\le z$ zero, and its omitted diagonal term is $\overline{r_{x,x}}r_{x,z}=r_{x,z}$. Write $a_x=\sum_{m\in\mathbb Z}\gamma_m v^m$. Anti-invariance gives $\gamma_{-m}=-\gamma_m$ and $\gamma_0=0$. Define $p_{x,w}:=\sum_{m>0}\gamma_m v^m$. Then $p_{x,w}\in v\mathbb Z[v]$ and $p_{x,w}-\overline{p_{x,w}}=a_x$. The induction is finite and uses no choice principle. [F2, F3, F5, algebra]

2.1 **Bar invariance and the coefficient equations.** Set $\underline H_w:=\sum_{y\le w}p_{y,w}H_y$. The coefficient of $H_x$ in $\overline{\underline H_w}$ is $\sum_{x\le y\le w}r_{x,y}\overline{p_{y,w}}$. For $x=w$ this is $1$; for $x<w$ it is $\overline{p_{x,w}}+a_x=p_{x,w}$ by step 1.1. If $x\not\le w$, no $y\le w$ can satisfy $x\le y$, so support from [F3] gives coefficient zero. Thus $\overline{\underline H_w}=\underline H_w$ and $p_{x,w}=\sum_{x\le y\le w}r_{x,y}\overline{p_{y,w}}$, which is the bar-duality formula. [F1, F2, F3, F5, step 1.1, algebra]

3.1 **Uniqueness.** If two bar-invariant elements satisfy the triangular condition, their difference is a bar-fixed sum $h=\sum_{y<w}c_yH_y$ with each $c_y\in v\mathbb Z[v]$. If $h\ne0$, choose a Bruhat-maximal $x$ in its finite support. The coefficient of $H_x$ in $\overline h$ is $\overline{c_x}$: no supported $y>x$ contributes, and support of $r_{x,y}$ requires $x\le y$. Since $h=\overline h$, $c_x=\overline{c_x}$; but $v\mathbb Z[v]$ and $v^{-1}\mathbb Z[v^{-1}]$ intersect only in $0$, a contradiction. Thus the element is unique. The construction also gives $p_{w,w}=1$ and $p_{y,w}=0$ unless $y\le w$. [F1, F2, F3, step 2.1, algebra]

3.2 **Basis.** The transition from $(H_w)$ to $(\underline H_w)$ is unitriangular on the finite Bruhat poset: each $\underline H_w=H_w+\sum_{y<w}p_{y,w}H_y$. A finite unitriangular matrix over $A$ is invertible, so $(\underline H_w)_{w\in S_n}$ is an $A$-basis. [F1, F5, step 2.1, algebra]

3.3 **Degree, leading term, and parity.** Induct on $d=\ell(w)-\ell(x)$, with $p_{w,w}=1$. For $x<w$, the equation in step 1.1 has $a_x=\sum_{x<y\le w}r_{x,y}\overline{p_{y,w}}$. By [F3] and induction, every term has exponents congruent to $d$ modulo $2$. The term $y=w$ is $r_{x,w}$, whose highest term is $v^d$ with coefficient $1$. For each $y<w$, put $d_1=\ell(y)-\ell(x)$ and $d_2=\ell(w)-\ell(y)\ge1$, so $d_1+d_2=d$; the highest degree of $r_{x,y}\overline{p_{y,w}}$ is at most $d_1-1\le d-2$, since $p_{y,w}\in v\mathbb Z[v]$. Therefore $a_x$ has highest term $v^d$ with coefficient $1$ and only exponents of parity $d$. As $p_{x,w}$ is its positive-degree part by step 1.1, it follows that $p_{x,w}=v^d+$ terms of strictly smaller degree and $p_{x,w}\in v^d\mathbb Z[v^{-2}]$. This proves the degree and parity clauses. [F3, step 1.1, step 2.1, algebra]

4.1 **Inverse-index symmetry.** By [F4], $\flat(\underline H_w)$ is bar-fixed. By [F5], inversion preserves Bruhat order, so this element has the form $H_{w^{-1}}+\sum_{y<w}p_{y,w}H_{y^{-1}}$ with lower terms in $v\mathbb Z[v]$. Uniqueness from step 3.1 gives $\flat(\underline H_w)=\underline H_{w^{-1}}$. Comparing coefficients yields $p_{y^{-1},w^{-1}}=p_{y,w}$. [F4, F5, step 3.1, algebra] ∎

## Remarks

**Open scope obligation.** The final statement clause asserting coefficientwise nonnegativity is not proved above. Step3a flags it as outside the KL-1 design; the construction and cited basis-existence argument do not imply it. This item remains escalated pending the owner's scope direction or an authorized positivity supplier, and is not accepted.
