---
id: thm-tensor-product-of-algebras-over-a-commutative-ring
kind: theorem
title: "The tensor product of $R$-algebras has multiplication $(a\\otimes b)(a'\\otimes b')=aa'\\otimes bb'$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebra-over-a-commutative-ring, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-commutative-ring-module-structure-on-a-tensor-product, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: true
short: "Tensor product of algebras"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $A,B$ be $R$-algebras. The $R$-module $A\otimes_RB$ has a unique $R$-algebra structure satisfying

$$(a\otimes b)(a'\otimes b')=aa'\otimes bb'$$

and

$$1_{A\otimes_RB}=1_A\otimes1_B,\qquad r\longmapsto r(1_A\otimes1_B).$$

If $A$ and $B$ are commutative, then $A\otimes_RB$ is commutative.

## Facts & Assumptions

**Given:** A commutative ring $R$ and central unital $R$-algebras $A,B$.

[L1] In an $R$-algebra, the structure map is central and multiplication is $R$-bilinear ([[def-algebra-over-a-commutative-ring]]).

[L2] Finite tensor products represent multilinear maps ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[L3] The tensor product is an $R$-module with $r(a\otimes b)=(ra)\otimes b=a\otimes(rb)$ ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

[L4] An elementary-tensor formula descends exactly when its underlying pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 The map $(a,b,a',b')\mapsto aa'\otimes bb'$ is $R$-multilinear: centrality in [L1] lets a scalar move among the four variables without changing the value. [given, L1, L3, algebra]

2.1 By [L2], step 1.1 induces an $R$-bilinear multiplication $(A\otimes_RB)\times(A\otimes_RB)\to A\otimes_RB$ with the displayed pure-tensor formula; [L4] ensures that the formula has descended before any ring laws are used. [step 1.1, L2, L4]

3.1 Both sides of associativity are trilinear in the three tensor arguments and agree on pure tensors by associativity in $A$ and $B$; uniqueness in [L2] makes them equal everywhere. Both distributive laws hold because the multiplication from step 2.1 is bilinear. [step 2.1, L2, algebra]

3.2 Left and right multiplication by $1_A\otimes1_B$ are linear maps that agree with the identity on every pure tensor, so uniqueness in the two-factor case of [L2] makes them the identity maps. [step 2.1, L2, algebra]

3.3 If $A$ and $B$ are commutative, then $(a\otimes b)(a'\otimes b')=aa'\otimes bb'=a'a\otimes b'b=(a'\otimes b')(a\otimes b)$. The two bilinear multiplication maps therefore induce the same four-variable multilinear map, so [L2] gives commutativity for arbitrary tensors. [step 2.1, L2, algebra]

4.1 The map $R\to A\otimes_RB$, $r\mapsto r(1_A\otimes1_B)$, is a unital ring homomorphism and its image is central, checked on pure tensors using [L1] and [L3]. Thus the resulting ring is an $R$-algebra. [step 2.1, step 3.2, L1, L3, algebra]

5.1 Uniqueness in [L2] forces the multiplication from its displayed pure-tensor formula, while the identity and structure map are then forced by the displayed elements. Steps 2.1 through 4.1 prove existence and all asserted properties. [L2, step 2.1, step 3.1, step 3.2, step 4.1, step 3.3] ∎
