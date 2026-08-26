---
id: lem-determinant-trick-for-nakayama
kind: lemma
title: "Determinant trick for Nakayama"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generated-cyclic-finitely-generated-and-free-modules, def-product-of-an-ideal-and-a-module, thm-adjugate-identity-over-a-commutative-ring]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 10.12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.19: Nakayama's Lemma"
      url: "https://stacks.math.columbia.edu/tag/0AMD"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then there exists $a \in I$ such that
$$
(1-a)M=0.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \trianglelefteq R$, and a finitely generated left $R$-module $M$ with $IM=M$.

[L1] A finitely generated module has a finite generating set ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[L2] The submodule $IM$ consists of finite sums of products $im$ with $i \in I$ and $m \in M$ ([[def-product-of-an-ideal-and-a-module]]).

[L3] For a positive-size square matrix $A$ over a commutative ring, $A\operatorname{adj}(A)=\det(A)I$ ([[thm-adjugate-identity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then $a=0 \in I$ satisfies $(1-a)M=0$. So assume $M \neq 0$ and choose generators $m_1,\dots,m_n$ with $n \ge 1$ by [L1]. [L1, given, choose]

2.1 Since $IM=M$, each generator has the form $m_i=\sum_j a_{ij}m_j$ with $a_{ij}\in I$. Writing $A=(a_{ij})$ and $m=(m_1,\dots,m_n)^T$, this is $(I_n-A)m=0$. [L2, step 1.1, algebra]

3.1 Multiply the relation of step 2.1 by $\operatorname{adj}(I_n-A)$. By [L3], this gives $\det(I_n-A)m=0$, so $\det(I_n-A)$ annihilates every generator and hence all of $M$. [L3, step 2.1, algebra]

3.2 Expanding $\det(I_n-A)$, the identity permutation contributes $1$, and every other term contains at least one entry of $A$, hence lies in $I$. Therefore $\det(I_n-A)=1-a$ for some $a \in I$. [step 2.1, algebra]

4.1 Step 3.1 and step 3.2 give $(1-a)M=0$ for some $a \in I$. [step 3.1, step 3.2] ∎
