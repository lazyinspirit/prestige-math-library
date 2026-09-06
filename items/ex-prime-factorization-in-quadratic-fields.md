---
id: ex-prime-factorization-in-quadratic-fields
kind: example
title: "Prime factorisation in quadratic fields"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
deps: [thm-fundamental-identity-for-primes-in-number-fields, def-split-inert-ramified-and-unramified-prime]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Example 3.44"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Example

In $\mathbb Z[i]$, the ideal $(5)=(2+i)(2-i)$ splits, $(3)$ is inert, and
$(2)=(1+i)^2$ ramifies, where each parenthesized expression denotes a
principal ideal.

## Verification

**Given:** $\mathcal O_{\mathbb Q(i)}=\mathbb Z[i]$.

1.1 In $R=\mathbb Z[i]$, $(2+i)(2-i)=5$ as elements, hence $(5)=(2+i)(2-i)$ as ideals. The quotient by $(2+i)$ is $\mathbb F_5$ via $i\mapsto-2$, and the quotient by $(2-i)$ is $\mathbb F_5$ via $i\mapsto2$: in either quotient eliminate $i$, leaving the relation $5=0$. Thus both factors are prime of residue degree one. They are distinct, since $2+i$ maps to $4\ne0$ in the second quotient. [given, algebra]

1.2 The quotient $R/(3)$ is $\mathbb F_3[X]/(X^2+1)$, a field of nine elements since $X^2+1$ has no root in $\mathbb F_3$. Thus $(3)$ is itself prime with residue degree two. [given, algebra]

2.1 Finally $(1+i)^2=2i$ as elements, and $i$ is a unit, so $(2)=(1+i)^2$ as ideals. The quotient $R/(1+i)$ is $\mathbb F_2$ by substituting $i=-1$, so $(1+i)$ is prime with residue degree one. These explicit ideal products and residue fields give respectively $(e,f)=(1,1),(1,1)$; $(1,2)$; and $(2,1)$. They satisfy the degree-two fundamental identity and the definitions of split, inert, and ramified. [step 1.1, step 1.2, algebra] ∎
