---
id: lem-artin-fixed-field-lower-degree-bound
kind: lemma
title: "Artin's fixed-field lower bound $[K:K^G]\\ge |G|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fixed-field-of-an-automorphism-group, thm-dedekind-linear-independence-of-characters]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.4"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\ge |G|$.

## Facts & Assumptions

**Given:** A field $K$, a finite group $G=\{\sigma_1,\ldots,\sigma_m\}$ of automorphisms of $K$, and its fixed field $K^G$ ([[def-fixed-field-of-an-automorphism-group]]).

[L1] Every finite family of distinct group homomorphisms $G\to K^\times$ is linearly independent over $K$ as a family of functions ([[thm-dedekind-linear-independence-of-characters]]).

## Proof

**Proof technique:** direct.

1.1 Restricted to $K^\times$, the distinct automorphisms $\sigma_1,\ldots,\sigma_m$ are distinct characters $K^\times\to K^\times$, so [L1] makes them linearly independent as functions. Hence their evaluation vectors span $K^m$: otherwise a nonzero linear functional on their span would give a nontrivial $K$-linear relation among the $\sigma_i$. Choose nonzero $x_1,\ldots,x_m\in K$ such that the evaluation matrix $A=(\sigma_i(x_j))_{i,j}$ is invertible. For $m=1$, one may take $x_1=1$. [L1, choose]

2.1 Suppose $c_1,\ldots,c_m\in K^G$ satisfy $\sum_jc_jx_j=0$. Applying each $\sigma_i$ and using $\sigma_i(c_j)=c_j$ gives $A(c_1,\ldots,c_m)^{\mathsf T}=0$, so invertibility of $A$ forces every $c_j=0$. Thus $x_1,\ldots,x_m$ are linearly independent over $K^G$. [step 1.1, L1, algebra]

3.1 A $K^G$-linearly independent family of $m=|G|$ elements of $K$ gives $[K:K^G]\ge m=|G|$. [step 2.1] ∎
