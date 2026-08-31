---
id: ex-currying-for-sets-of-three-variables
kind: example
title: "Currying for sets of three variables"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-currying-and-uncurrying-are-mutually-inverse]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
generation:
  role: example
---

## Example

Let $A=B=C=\{0,1\}$ and $D=\{0,1,2,3\}$. Define

$$f:A\times B\times C\to D,\qquad f(a,b,c)=a+b+c,$$

where the sum is taken in the integers.

## Facts & Assumptions

**Given:** The concrete map $f(a,b,c)=a+b+c$ on $\{0,1\}^3$.

[L1] Currying and uncurrying are mutually inverse, and repeated currying is associative up to reassociation ([[thm-currying-and-uncurrying-are-mutually-inverse]]).

## Verification

**Proof technique:** direct.

1.1 Currying in the $C$-variable sends $(a,b)$ to the function $c\mapsto a+b+c$. Currying again in the $B$-variable sends $a$ to the function $b\mapsto(c\mapsto a+b+c)$. [given, algebra]

2.1 Uncurrying the result reverses those two assignments: from $a$ recover the map $b\mapsto(c\mapsto a+b+c)$, then evaluate at $(b,c)$ to recover $a+b+c=f(a,b,c)$. [step 1.1, algebra]

3.1 So the twice-curried and twice-uncurried maps return the original $f$, exactly as [[thm-currying-and-uncurrying-are-mutually-inverse]] predicts. [step 2.1, L1] ∎
