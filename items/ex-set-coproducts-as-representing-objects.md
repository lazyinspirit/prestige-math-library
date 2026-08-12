---
id: ex-set-coproducts-as-representing-objects
kind: example
title: 'A tagged disjoint union represents $X\mapsto\mathbf{Set}(A,X)\times\mathbf{Set}(B,X)$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-presheaf-representable-functor-and-representation,
       prop-sets-and-functions-form-category-set, def-cartesian-product,
       def-union-of-a-set-and-binary-union, def-ordered-pair,
       lem-unions-and-intersections-of-small-families,
       thm-the-characterising-property-of-ordered-pairs,
       def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Example 5.1.14"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Example

For sets $A$ and $B$, put

$$A\sqcup B=(A\times\{0\})\cup(B\times\{1\})$$

and define $i_A(a)=(a,0)$ and $i_B(b)=(b,1)$. The covariant functor

$$G(X)=\mathbf{Set}(A,X)\times\mathbf{Set}(B,X)$$

is represented by $A\sqcup B$. The representing isomorphism sends
$q:A\sqcup B\to X$ to $(q\circ i_A,q\circ i_B)$.

## Facts & Assumptions

**Given:** Sets $A,B$, the category $\mathbf{Set}$, and an arbitrary set $X$.

[F1] A covariant set-valued functor is represented by $R$ when it is naturally isomorphic to $\mathbf{Set}(R,-)$ ([[def-presheaf-representable-functor-and-representation]]).

[F2] Sets and functions form a category with ordinary composition ([[prop-sets-and-functions-form-category-set]]).

[F3] Cartesian products contain exactly the ordered pairs with entries in the two factors, and membership in a binary union is membership in at least one of its two members ([[def-cartesian-product]], [[def-union-of-a-set-and-binary-union]], [[lem-unions-and-intersections-of-small-families]]).

[F4] Ordered pairs satisfy $(a,s)=(b,t)$ if and only if $a=b$ and $s=t$; the natural numbers $0=\varnothing$ and $1=\{0\}$ are distinct, so the two tagged parts are disjoint ([[def-ordered-pair]], [[thm-the-characterising-property-of-ordered-pairs]], [[def-natural-numbers]]).

## Verification

**Proof technique:** constructive.

1.1 Define $\Phi_X(q)=(q\circ i_A,q\circ i_B)$ for $q:A\sqcup B\to X$. [F2, construct]

1.2 For $(g,h)\in G(X)$ define $[g,h]:A\sqcup B\to X$ by $[g,h](a,0)=g(a)$ and $[g,h](b,1)=h(b)$. Every element has one of these forms by [F3], and the forms cannot overlap by [F4], so this is a function. [F3, F4, construct]

2.1 Restricting $[g,h]$ along $i_A$ and $i_B$ gives $g$ and $h$, so $\Phi_X([g,h])=(g,h)$. [step 1.1, step 1.2]

2.2 Every $z\in A\sqcup B$ is in exactly one tagged part; there $[q\circ i_A,q\circ i_B](z)=q(z)$. Thus $[\Phi_X(q)]=q$. [step 1.1, step 1.2, F3, F4]

2.3 If $k:X\to Y$, then $\Phi_Y(k\circ q)=(k\circ q\circ i_A,k\circ q\circ i_B)$, obtained by applying $G(k)$ to $\Phi_X(q)$. Hence $\Phi$ is natural. [step 1.1, F2]

3.1 Steps 2.1--3.1 give a natural isomorphism $\mathbf{Set}(A\sqcup B,-)\cong G$, so [F1] proves the claim, including $A=\varnothing$ or $B=\varnothing$. [step 2.1, step 2.2, step 2.3, F1, discharge-construct] ∎
