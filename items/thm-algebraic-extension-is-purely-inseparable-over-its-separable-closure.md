---
id: thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
kind: theorem
title: "An algebraic extension is purely inseparable over its separable closure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-closure-in-an-algebraic-extension, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, def-purely-inseparable-extension, thm-perfect-field-characterizations, def-perfect-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be algebraic and let $K_s$ be the separable closure of $F$ in $K$.
Then $K/K_s$ is purely inseparable.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$, its separable closure $K_s$, and an element $\alpha\in K$.

[L1] The field $K_s$ consists exactly of the elements of $K$ separable over $F$ ([[def-separable-closure-in-an-algebraic-extension]]).

[L2] In characteristic $p$, the minimal polynomial of $\alpha$ has a unique form $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L3] Pure inseparability is the elementwise $p$-power condition, with only the trivial case in characteristic zero ([[def-purely-inseparable-extension]]).

[L4] Every field of characteristic zero is perfect ([[thm-perfect-field-characterizations]]).

[L5] In a perfect field, every nonconstant irreducible polynomial is separable ([[def-perfect-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\operatorname{char}F=p>0$ and write the minimal polynomial of $\alpha$ as $g(x^{p^e})$ using [L2]. Then $g(\alpha^{p^e})=0$, and the minimal polynomial over $F$ of $\alpha^{p^e}$ divides the separable polynomial $g$, so $\alpha^{p^e}$ is separable over $F$ and belongs to $K_s$ by [L1]. [L1, L2, algebra]

2.1 Thus every element of $K$ has a suitable $p$-power in $K_s$, so [L3] makes $K/K_s$ purely inseparable. [step 1.1, L3]

3.1 In characteristic zero [L4] and [L5] make every irreducible polynomial separable, so $K_s=K$ by [L1]; the extension $K/K_s$ is trivial and purely inseparable by [L3]. [L1, L3, L4, L5] ∎
