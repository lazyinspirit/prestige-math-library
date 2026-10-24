---
id: ex-set-products-as-representing-objects
kind: example
title: 'A Cartesian product represents $X\mapsto\mathbf{Set}(X,A)\times\mathbf{Set}(X,B)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       prop-sets-and-functions-form-category-set, def-cartesian-product,
       def-function, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point,
       thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Justin Campbell, Harvard Math 55b tutorial notes, Example 1.1 and Definition 2.1"
      url: "https://people.math.harvard.edu/~campbell/tutnotes1.pdf"
pipeline_run: null
---

## Example

For sets $A$ and $B$, the presheaf

$$F(X)=\mathbf{Set}(X,A)\times\mathbf{Set}(X,B)$$

is represented by $A\times B$. The representing natural isomorphism sends a
function $f:X\to A\times B$ to its coordinate functions
$(\pi_A\circ f,\pi_B\circ f)$.

## Facts & Assumptions

**Given:** Sets $A,B$, the category $\mathbf{Set}$, and an arbitrary set $X$.

[F1] A presheaf is represented by $R$ when it is naturally isomorphic to $\mathbf{Set}(-,R)$ ([[def-presheaf-representable-functor-and-representation]]).

[F2] Sets and functions form a locally small category whose composition and identities are ordinary function composition and identity functions ([[prop-sets-and-functions-form-category-set]]).

[F3] The Cartesian product is $A\times B=\{(a,b):a\in A,\ b\in B\}$, and $(a,b)=(a',b')$ holds exactly when $a=a'$ and $b=b'$ ([[def-cartesian-product]], [[thm-the-characterising-property-of-ordered-pairs]]). Hence $\pi_A(a,b)=a$ and $\pi_B(a,b)=b$ are well-defined functions.

[F4] A function assigns each element of its domain exactly one element of its codomain, and two functions with the same domain and codomain are equal exactly when their values agree everywhere ([[def-function]], [[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

## Verification

**Proof technique:** constructive.

1.1 Define $\Phi_X(f)=(\pi_A\circ f,\pi_B\circ f)$ for $f:X\to A\times B$. [F2, F3, construct]

1.2 For functions $g:X\to A$ and $h:X\to B$, define $\Psi_X(g,h):X\to A\times B$ by $\Psi_X(g,h)(x)=(g(x),h(x))$. [F3, F4, construct]

2.1 For every $(g,h)$, the two projections of $\Psi_X(g,h)$ are $g$ and $h$, so $\Phi_X\Psi_X(g,h)=(g,h)$. [step 1.1, step 1.2, F3, F4]

2.2 For every $f$ and $x\in X$, $\Psi_X\Phi_X(f)(x)=(\pi_A(f(x)),\pi_B(f(x)))=f(x)$; hence $\Psi_X\Phi_X(f)=f$. [step 1.1, step 1.2, F3, F4]

2.3 If $k:Y\to X$, then $\Phi_Y(f\circ k)=((\pi_A\circ f)\circ k,(\pi_B\circ f)\circ k)$, which is the restriction of $\Phi_X(f)$ along $k$ in both factors. Thus $\Phi$ is natural in $X$. [step 1.1, F2]

3.1 Steps 2.1 and 2.2 make every $\Phi_X$ bijective, and step 2.3 makes the family natural; by [F1], $A\times B$ represents $F$. [step 2.1, step 2.2, step 2.3, F1, discharge-construct] ∎
