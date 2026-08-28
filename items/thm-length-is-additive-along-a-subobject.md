---
id: thm-length-is-additive-along-a-subobject
kind: theorem
title: "Length is additive along a subobject"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-object-of-finite-length, thm-jordan-holder-theorem-in-an-abelian-category, thm-second-isomorphism-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Let $B\le A$ be a subobject in an abelian category. If any two of the objects
$A$, $B$, and $A/B$ have finite length, then so does the third, and whenever
all three do one has

$$\ell(A)=\ell(B)+\ell(A/B).$$

## Facts & Assumptions

**Given:** A subobject $B\le A$.

[L1] Finite length means admitting a composition series, and length is the
common number of factors in such a series
([[def-object-of-finite-length]]).

[L2] Jordan-Hölder makes the factor count independent of the chosen
composition series ([[thm-jordan-holder-theorem-in-an-abelian-category]]).

[L3] The second isomorphism theorem identifies the factors that arise from
pulling a chain across a quotient or intersecting with a subobject
([[thm-second-isomorphism-theorem-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume $B$ and $A/B$ have finite length. Choose composition series $$0=B_0<\cdots<B_r=B,\qquad 0=C_0<\cdots<C_s=A/B.$$ Let $q:A\to A/B$ be the quotient map and put $D_j:=q^{-1}(C_j)$. Then $$B=D_0< D_1<\cdots< D_s=A,$$ and [L3] identifies each quotient $D_j/D_{j-1}$ with $C_j/C_{j-1}$. So $$0=B_0<\cdots<B_r=D_0< D_1<\cdots< D_s=A$$ is a composition series of $A$. Therefore $A$ has finite length and $\ell(A)=r+s=\ell(B)+\ell(A/B)$. [L1, L3, choose, construct]
1.2 Assume now that $A$ has finite length, with composition series $$0=A_0< A_1<\cdots< A_n=A.$$ Intersecting with $B$ gives an increasing chain $$0=A_0\wedge B\le A_1\wedge B\le\cdots\le A_n\wedge B=B,$$ and quotienting by $B$ gives an increasing chain in $A/B$. By [L3], each successive factor in either chain is a subquotient of a simple factor $A_i/A_{i-1}$, hence is either $0$ or simple. Deleting repeated adjacent terms therefore yields composition series of $B$ and of $A/B$. [L1, L3, construct]
2.1 Step 1.1 proves the extension direction and the displayed additive formula. Step 1.2 proves that finite length passes to subobjects and quotients. The number in the formula is independent of the chosen composition series by [L2]. [L2, step 1.1, step 1.2] ∎
