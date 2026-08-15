---
id: ex-q-sqrt-two-sqrt-three-and-a-primitive-generator
kind: example
title: "$\\mathbb Q(\\sqrt2,\\sqrt3)$ has degree four and equals $\\mathbb Q(\\sqrt2+\\sqrt3)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tower-law-for-finite-field-extensions, lem-product-basis-for-a-tower-of-finite-extensions, def-field-extension-generated-subfields-and-simple-extension, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Example

The biquadratic field satisfies

$$[\mathbb Q(\sqrt2,\sqrt3):\mathbb Q]=4,$$

has basis $(1,\sqrt2,\sqrt3,\sqrt6)$, and is simple:

$$\mathbb Q(\sqrt2,\sqrt3)=\mathbb Q(\sqrt2+\sqrt3).$$

## Facts & Assumptions

**Given:** The positive roots $u=\sqrt2$, $v=\sqrt3$, and $a=u+v$.

[L1] Degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L2] Products of bases form a basis in a tower ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L3] The field $F(a)$ is the smallest subfield containing $F$ and $a$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L4] Positive square roots exist uniquely in $\mathbb R$ ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $t^2-2$ is irreducible over $\mathbb Q$. Also $v\notin\mathbb Q(u)$: if $v=r+su$ with rationals $r,s$, squaring and using uniqueness of the coordinates $(1,u)$ gives $2rs=0$ and $r^2+2s^2=3$; either case would make $3$ or $3/2$ a rational square, contradicted by comparing the parity of prime exponents in numerator and denominator. [given, L4, algebra]

1.2 Since $(u+v)(v-u)=v^2-u^2=1$, one has $a^{-1}=v-u$. Therefore $v=(a+a^{-1})/2$ and $u=(a-a^{-1})/2$ both lie in $\mathbb Q(a)$. [given, algebra]

2.1 Hence both steps in $\mathbb Q\subset\mathbb Q(u)\subset\mathbb Q(u,v)$ have degree $2$. By [L1] the total degree is $4$, and [L2] gives the product basis $(1,u,v,uv)$. [step 1.1, L1, L2]

3.1 Thus $\mathbb Q(u,v)\subseteq\mathbb Q(a)$, while the reverse inclusion follows from $a=u+v$ and [L3]. The fields are equal. [step 1.2, L3] ∎
