---
id: thm-coproduct-property-of-tensor-products-of-commutative-algebras
kind: theorem
title: "Universal mapping property of the tensor product of commutative algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-product-of-algebras-over-a-commutative-ring, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: false
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

Let $A,B,C$ be commutative $R$-algebras. For every pair of $R$-algebra homomorphisms $f:A\to C$ and $g:B\to C$, there is a unique $R$-algebra homomorphism

$$h:A\otimes_RB\longrightarrow C$$

such that $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$. It is given by

$$h(a\otimes b)=f(a)g(b).$$

Thus $A\otimes_RB$, with its two canonical maps, is the coproduct of $A$ and $B$ among commutative $R$-algebras.

## Facts & Assumptions

**Given:** Commutative $R$-algebras $A,B,C$ and $R$-algebra maps $f:A\to C$, $g:B\to C$.

[L1] The tensor product algebra has multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and identity $1\otimes1$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[L2] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L3] An elementary-tensor formula descends exactly when the corresponding pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 The canonical maps $j_A(a)=a\otimes1$ and $j_B(b)=1\otimes b$ are $R$-algebra homomorphisms: [L1] gives their multiplication and identity laws, and $j_A(ra)=rj_A(a)$ and $j_B(rb)=rj_B(b)$ show compatibility with the structure maps. [given, L1, algebra]

1.2 The pairing $(a,b)\mapsto f(a)g(b)$ is $R$-bilinear: additivity is distributivity in $C$, and $f(ra)g(b)=r f(a)g(b)=f(a)r g(b)=f(a)g(rb)$ because $C$ is commutative and both maps respect $R$. [given, algebra]

2.1 By [L2] and [L3], step 1.2 induces a unique $R$-linear map $h:A\otimes_RB\to C$ satisfying $h(a\otimes b)=f(a)g(b)$. [step 1.2, L2, L3]

3.1 On pure tensors, [L1] gives $h((a\otimes b)(a'\otimes b'))=f(aa')g(bb')=f(a)g(b)f(a')g(b')$, where commutativity of $C$ permits the middle factors to switch; hence $h$ is multiplicative. [step 2.1, L1, algebra]

3.2 One has $h(1\otimes1)=1_C$, $h(a\otimes1)=f(a)$, and $h(1\otimes b)=g(b)$, so $h$ is an $R$-algebra homomorphism with the required restrictions. [step 2.1, algebra]

4.1 If $h'$ has the same restrictions, then $a\otimes b=(a\otimes1)(1\otimes b)$ by [L1], so $h'(a\otimes b)=f(a)g(b)=h(a\otimes b)$. The underlying group homomorphisms consequently induce the same balanced pairing, and uniqueness in [L2] gives $h'=h$. [step 3.2, L1, L2]

5.1 Step 1.1 supplies the two coproduct maps, and steps 2.1 through 4.1 prove the asserted universal mapping property. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎
