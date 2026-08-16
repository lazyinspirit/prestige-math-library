---
id: cor-degree-factors-into-separable-and-inseparable-degrees
kind: corollary
title: "$[K:F]=[K:F]_s[K:F]_i$, and in positive characteristic the inseparable degree is a power of $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inseparable-degree, thm-separable-degree-is-the-degree-of-the-separable-closure, thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure, cor-finite-purely-inseparable-extensions-have-prime-power-degree, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

For every finite extension $K/F$,

$$[K:F]=[K:F]_s[K:F]_i.$$

If $\operatorname{char}F=p>0$, then $[K:F]_i$ is a power of $p$. In
characteristic zero it is one.

## Facts & Assumptions

**Given:** A finite extension $K/F$ with relative separable closure $K_s$.

[L1] Inseparable degree is the quotient $[K:F]/[K:F]_s$ ([[def-inseparable-degree]]).

[L2] One has $[K:F]_s=[K_s:F]$ ([[thm-separable-degree-is-the-degree-of-the-separable-closure]]).

[L3] The extension $K/K_s$ is purely inseparable ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

[L4] A finite purely inseparable extension in characteristic $p$ has $p$-power degree ([[cor-finite-purely-inseparable-extensions-have-prime-power-degree]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 The displayed factorization is the defining equality in [L1] after multiplying by $[K:F]_s$. [L1, algebra]

2.1 By [L5] and [L2], $[K:F]=[K:K_s][K_s:F]=[K:K_s][K:F]_s$, so comparison with step 1.1 gives $[K:F]_i=[K:K_s]$. [L2, L5, algebra]

3.1 In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one. [step 2.1, L3, L4] ∎
