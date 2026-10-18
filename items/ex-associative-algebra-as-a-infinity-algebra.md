---
id: ex-associative-algebra-as-a-infinity-algebra
kind: example
title: "A field as an associative algebra and an A∞-algebra"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-field
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §9.2.5"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Example

Let $k$ be a field, concentrated in degree zero. Set $A^0=k$ and $A^j=0$ for
$j\ne0$. Define $m_1=0$, let $m_2$ be field multiplication, and set $m_n=0$
for $n\ge3$. These maps make $A$ an uncurved cohomological A∞-algebra.

## Facts & Assumptions

**Given:** A field $k$ and the A∞ identities from
[[def-a-infinity-algebra]].

[F1] [[def-a-infinity-algebra]]: $m_n$ has degree $2-n$ and the Stasheff sum
vanishes in every arity $n\ge1$.

[F2] [[def-field]]: field multiplication is associative and has an identity.

## Verification

1.1 The zero map $m_1$ is homogeneous of degree $+1$, field multiplication $m_2$ has degree zero on $A^0$, and every zero map $m_n$ for $n\ge3$ is homogeneous of degree $2-n$. Thus the degrees match [F1]. [given, F1, F2, algebra]

1.2 For $n=3$, the only possibly nonzero terms are $m_2(m_2\otimes1)-m_2(1\otimes m_2)$. They agree by associativity in [F2], so their difference is zero. [F1, F2, algebra]

2.1 For $n=1$ every Stasheff summand contains $m_1$, so the sum is zero. For $n=2$, the only potentially nonzero outer operation is $m_1m_2$, but $m_1=0$; all summands containing an inner $m_1$ also vanish. [F1, step 1.1, algebra]

2.2 For $n\ge4$, a nonzero summand would require both inner and outer operations to have arity two, which forces $n=s+(r+1+t)-1\le3$. Therefore all terms vanish in these arities as well. [F1, step 1.1, algebra]

3.1 The defining identity holds in every arity by steps 2.1, 1.2 and 2.2, so the stated operations form an A∞-algebra. [F1, step 2.1, step 1.2, step 2.2] ∎

