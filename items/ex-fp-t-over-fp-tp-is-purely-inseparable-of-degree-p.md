---
id: ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p
kind: example
title: "$\\mathbb F_p(t)/\\mathbb F_p(t^p)$ is purely inseparable of degree $p$ and separable degree one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-purely-inseparable-extension-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

For a prime $p$, the extension
$\mathbb F_p(t)/\mathbb F_p(t^p)$ is purely inseparable, has ordinary degree
$p$, and has separable degree one.

## Facts & Assumptions

**Given:** A prime $p$, the field $K=\mathbb F_p(t)$, and its subfield $F=\mathbb F_p(t^p)$.

[L1] A rational function field is the fraction field of its polynomial ring ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorization domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] If a constant is not a $p$th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] A simple extension has the power basis and degree of its minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] A finite purely inseparable extension has separable degree one ([[thm-purely-inseparable-extension-characterizations]]).

## Verification

**Proof technique:** direct.

1.1 Put $u=t^p$, so $F=\mathbb F_p(u)$. If $u=(r(u)/s(u))^p$ for nonzero coprime $r,s\in\mathbb F_p[u]$, then unique factorization gives $1+p\,v_u(s)=p\,v_u(r)$, which is impossible modulo $p$. Thus $u$ is not a $p$th power in $F$. [L1, L2, algebra]

2.1 The element $t$ is a root of $x^p-u$, which is irreducible by [L3]. Hence [L4] gives $K=F(t)$ and $[K:F]=p$. [step 1.1, L3, L4]

3.1 For every $z=r(t)/s(t)\in K$, characteristic $p$ gives $z^p=r(t)^p/s(t)^p\in\mathbb F_p(t^p)=F$. Thus $K/F$ is purely inseparable, and [L5] gives $[K:F]_s=1$. [L5, algebra] ∎
