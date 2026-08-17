---
id: thm-finite-extension-is-separable-iff-separable-degree-is-full
kind: theorem
title: "A finite extension is separable if and only if $[K:F]_s=[K:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-element-theorem-for-finite-separable-extensions, thm-multiplicativity-of-separable-degree, cor-separable-degree-is-at-most-extension-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, thm-tower-law-for-finite-field-extensions, def-separable-elements-and-separable-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

A finite extension $K/F$ is separable if and only if
$[K:F]_s=[K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L2] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L3] Separable degree is at most ordinary degree for every finite extension ([[cor-separable-degree-is-at-most-extension-degree]]).

[L4] For a simple extension, separable degree is the number of distinct roots of the minimal polynomial ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] An extension is separable when every element has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 If $K/F$ is separable, [L1] gives $K=F(\alpha)$. The polynomial $m_\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$. [L1, L4, L6]

1.2 Conversely, assume $[K:F]_s=[K:F]$ and fix $\alpha\in K$. Put $a=[F(\alpha):F]_s$, $b=[F(\alpha):F]$, $c=[K:F(\alpha)]_s$, and $d=[K:F(\alpha)]$. Then [L2] and [L5] give $ac=bd$, while [L3] gives $a\le b$ and $c\le d$. [L2, L3, L5]

2.1 The inequalities give $ac\le bc\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\alpha$ therefore has as many distinct roots as its degree and is separable. [step 1.2, L4, algebra]

3.1 Since $\alpha$ was arbitrary, every element of $K$ is separable over $F$, so [L6] makes $K/F$ separable. This proves the reverse implication. [step 2.1, L6]

4.1 Steps 1.1 and 3.1 establish the biconditional. [step 1.1, step 3.1] ∎
