---
id: thm-graded-bimodule-tensor-hom-adjunction
kind: theorem
title: Associative and graded bimodule tensor–Hom adjunction
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-balanced-tensor-product-and-homogeneous-hom, thm-universal-property-of-module-tensor-products, thm-bimodule-actions-induced-on-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, Algebra, §10.12, tag 00CV"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (2009), §2.2, printed pp. 6-7"
      url: "https://arxiv.org/pdf/0909.4844"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $A$ and $B$ be graded $k$-algebras, let $M$ be a graded $(B,A)$-bimodule, $X$
a graded left $A$-module and $Y$ a graded left $B$-module. Then currying

$$\Theta:\operatorname{Hom}_{B,0}(M\otimes_AX,Y)\longrightarrow \operatorname{Hom}_{A,0}\bigl(X,\operatorname{HOM}_B(M,Y)\bigr),\qquad \Theta(F)(x)(m):=F(m\otimes x),$$

is a natural bijection in $X$ and $Y$, where
$\operatorname{HOM}_B(M,Y)$ is the graded left $A$-module of finite sums of
homogeneous $B$-linear maps with the associative action
$(a\cdot f)(m)=f(ma)$. Its inverse sends $f$ to the map $m\otimes x\mapsto
f(x)(m)$ on elementary tensors.

Separately, the same formulas give a natural bijection
$\operatorname{Hom}_B^{\mathrm{ungr}}(M\otimes_AX,Y)\cong
\operatorname{Hom}_A^{\mathrm{ungr}}(X,\operatorname{Hom}_B^{\mathrm{ungr}}(M,Y))$
between ungraded module maps. Here $\operatorname{HOM}_B(M,Y)$ is the direct sum
of its homogeneous parts and can be properly contained in
$\operatorname{Hom}_B^{\mathrm{ungr}}(M,Y)$, so the graded statement cannot be
replaced by one with all ungraded maps on the right.

## Facts & Assumptions

**Given:** Graded $k$-algebras $A,B$, a graded $(B,A)$-bimodule $M$, a graded left $A$-module $X$ and a graded left $B$-module $Y$.

[L1] $\operatorname{HOM}_B(M,Y)=\bigoplus_d\operatorname{Hom}_{B,d}(M,Y)$ consists of the finite sums of homogeneous $B$-linear maps, carries the graded left $A$-module structure $(a\cdot f)(m)=f(ma)$, and $M\otimes_AX$ is a graded left $B$-module with the grading by total degree and action $b(m\otimes x)=(bm)\otimes x$; the inclusion $\operatorname{HOM}_B(M,Y)\subseteq\operatorname{Hom}_B^{\mathrm{ungr}}(M,Y)$ can be proper ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L2] The outer actions on a balanced tensor product are the unique ones with $(m\otimes n)s=m\otimes(ns)$ and $s(m\otimes n)=(sm)\otimes n$ ([[thm-bimodule-actions-induced-on-tensor-products]]).

[L3] A balanced pairing into an abelian group induces a unique additive map out of the tensor product, and elementary tensors generate the tensor product ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let $F:M\otimes_AX\to Y$ be a degree-zero $B$-linear map and define $f:=\Theta(F)$ by $f(x)(m):=F(m\otimes x)$. For fixed $x$ the map $f(x)$ is additive and $B$-linear, because $F$ is additive and $F\bigl(b(m\otimes x)\bigr)=(bm)\otimes x$ is mapped to $bF(m\otimes x)$ by [L1]; it is homogeneous of degree $j$ when $x\in X_j$, since $m\in M_i$ makes $m\otimes x$ of degree $i+j$ and $F$ degree-zero, so $f(x)\in\operatorname{Hom}_{B,j}(M,Y)\subseteq\operatorname{HOM}_B(M,Y)$, and a general $x$ has finitely many nonzero components. Moreover $f$ is $A$-linear and degree-zero: $f(ax)(m)=F(m\otimes ax)=F(ma\otimes x)=f(x)(ma)=(a\cdot f(x))(m)$ for $a\in A$, so $f(ax)=a\cdot f(x)$, and $f(X_j)\subseteq\operatorname{Hom}_{B,j}(M,Y)$ shows that $f$ preserves degrees. Hence $\Theta(F)\in\operatorname{Hom}_{A,0}(X,\operatorname{HOM}_B(M,Y))$. [L1, L2, L3]

2.1 Conversely, let $f:X\to\operatorname{HOM}_B(M,Y)$ be a degree-zero $A$-linear map and define $F(m\otimes x):=f(x)(m)$ on elementary tensors. The pairing $(m,x)\mapsto f(x)(m)$ is additive in each variable and balanced: for $a\in A$ the $A$-linearity of $f$ and the action of [L1] give $f(ax)(m)=(a\cdot f(x))(m)=f(x)(ma)$, so the two images of $(ma,x)$ and $(m,ax)$ agree. By [L3] there is a unique additive map $F:M\otimes_AX\to Y$ with that value on elementary tensors; it is $B$-linear because each $f(x)$ is, and degree-zero because $f(x)$ is homogeneous of degree $j$ for $x$ homogeneous of degree $j$, so $m\in M_i$ gives $F(m\otimes x)\in Y_{i+j}$. Hence $F\in\operatorname{Hom}_{B,0}(M\otimes_AX,Y)$. [step 1.1, L1, L3]

3.1 The two constructions are inverse. For $F$ as in step 1.1, the map $\Psi(\Theta(F))$ sends $m\otimes x$ to $\Theta(F)(x)(m)=F(m\otimes x)$, so it agrees with $F$ on elementary tensors and hence, by [L3], everywhere. For $f$ as in step 2.1, $\Theta(\Psi(f))(x)(m)=\Psi(f)(m\otimes x)=f(x)(m)$ for all $x,m$, so $\Theta(\Psi(f))=f$. Thus $\Theta$ is a bijection with inverse $\Psi$. [step 1.1, step 2.1, L3]

4.1 The bijection is natural in $X$ and $Y$: for degree-zero $A$-linear $g:X'\to X$ and degree-zero $B$-linear $h:Y\to Y'$, and $F\in\operatorname{Hom}_{B,0}(M\otimes_AX,Y)$, both $hF(1\otimes g)$ and the map induced by $h$ and $g$ on the right-hand side are $B$-linear and $A$-linear and both send a pair $(x',m)$ to $h\bigl(F(m\otimes g(x'))\bigr)$, since $(1\otimes g)(m\otimes x')=m\otimes g(x')$; because these values agree for all $x'$ and $m$, the two curried maps are equal. [step 1.1, step 3.1, L1]

4.2 Dropping every degree condition, the formulas of steps 1.1 to 3.1 define mutually inverse bijections between $\operatorname{Hom}_B^{\mathrm{ungr}}(M\otimes_AX,Y)$ and $\operatorname{Hom}_A^{\mathrm{ungr}}\bigl(X,\operatorname{Hom}_B^{\mathrm{ungr}}(M,Y)\bigr)$: well-definedness, $B$-linearity and $A$-linearity were the only properties used, and they do not require homogeneous elements. Consequently $\operatorname{Hom}_{A,0}(X,\operatorname{HOM}_B(M,Y))$ is exactly the set of ungraded $A$-linear maps whose values are finite sums of homogeneous maps and that preserve degrees, and by [L1] this set can be strictly smaller than $\operatorname{Hom}_A^{\mathrm{ungr}}(X,\operatorname{Hom}_B^{\mathrm{ungr}}(M,Y))$. [step 1.1, step 2.1, step 3.1, L1]

5.1 Steps 3.1 and 4.1 give the natural bijection $\Theta$ with the displayed formulas and the associative left action $(a\cdot f)(m)=f(ma)$, and step 4.2 gives the separate ungraded bijection while recording that $\operatorname{HOM}_B(M,Y)$ need not contain all ungraded $B$-linear maps. ∎ [step 3.1, step 4.1, step 4.2]
