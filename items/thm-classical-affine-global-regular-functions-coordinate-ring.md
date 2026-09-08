---
id: "thm-classical-affine-global-regular-functions-coordinate-ring"
kind: "theorem"
title: "Global regular functions on a classical affine variety are its coordinate ring"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-principal-open-coordinate-ring-localization", "def-classical-regular-function-on-open-set", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.11 final paragraph, p. 62"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For every affine algebraic set $X$, the canonical map $k[X]\to\mathcal O_X(X)$ is an isomorphism. This includes varieties and the empty set.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and an affine algebraic set $X$.

[F1] For any $f$, $A_f\cong\mathcal O_X(D(f))$ ([[thm-classical-principal-open-coordinate-ring-localization]]).

## Proof

**Proof technique:** direct.

1.1 Apply F1 to $f=1$. Then $D(1)=X$, so the displayed isomorphism is $A_1\cong\mathcal O_X(X)$. The maps $A\to A_1$, $a\mapsto a/1$, and $A_1\to A$, $a/1^r\mapsto a$, are mutually inverse algebra maps. [F1, given, algebra]

2.1 The composite sends $a$ to its function on $X$, which is exactly the canonical map in the statement. If $X$ is empty both algebras are the zero ring by the empty case of F1. [F1, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.11 final paragraph, p. 62. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
