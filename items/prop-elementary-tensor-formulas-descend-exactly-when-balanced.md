---
id: prop-elementary-tensor-formulas-descend-exactly-when-balanced
kind: proposition
title: "A formula on elementary tensors defines a homomorphism exactly when its underlying pairing is balanced"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-universal-property-of-module-tensor-products, def-tensor-product-of-modules-by-generators-and-relations, thm-int-comm-ring]
aliases: []
landmark: true
short: "Descent criterion for tensor formulas"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

Let $A$ be an abelian group and let $q:M\times N\to A$ be a function. A prescription

$$Q(m\otimes n):=q(m,n)$$

extends to a group homomorphism $Q:M\otimes_RN\to A$ if and only if $q$ is balanced. When it exists, the extension is unique.

The balance condition cannot be replaced by a check on tensor symbols alone. In $\mathbb Z\otimes_{\mathbb Z}\mathbb Z$, the prescription $q(m,n)=m$ is not balanced and does not descend: the relation $2\otimes1=1\otimes2$ would force its value to be both $2$ and $1$.

## Facts & Assumptions

**Given:** A function $q:M\times N\to A$ into an abelian group.

[L1] Composition with the elementary-tensor map is a bijection from group homomorphisms $M\otimes_RN\to A$ to balanced maps $M\times N\to A$ ([[thm-universal-property-of-module-tensor-products]]).

[L2] In the tensor product, $(mr)\otimes n=m\otimes(rn)$ and the elementary-tensor map is additive in each variable ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[L3] The integers form a commutative unital ring ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $q$ is balanced, [L1] supplies a unique group homomorphism $Q$ satisfying $Q(m\otimes n)=q(m,n)$. [given, L1]

1.2 Conversely, if such a homomorphism $Q$ exists, composing it with the elementary-tensor map gives $q$; [L2] and additivity of $Q$ show that $q$ is additive in each variable and satisfies $q(mr,n)=q(m,rn)$, so $q$ is balanced. [given, L2, algebra]

1.3 For $R=M=N=\mathbb Z$, which is permitted by [L3], balance gives $2\otimes1=1\otimes2$ by [L2]. The function $q(m,n)=m$ assigns $2$ to $(2,1)$ and $1$ to $(1,2)$, so it is not balanced and no homomorphism can have the proposed elementary-tensor values. [L2, L3, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence and uniqueness, while step 1.3 verifies the asserted failure. [step 1.1, step 1.2, step 1.3] ∎
