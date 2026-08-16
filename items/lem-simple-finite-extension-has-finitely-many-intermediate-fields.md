---
id: lem-simple-finite-extension-has-finitely-many-intermediate-fields
kind: lemma
title: "A simple finite extension has only finitely many intermediate fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $E/F$ is a finite simple extension, then there are only finitely many
intermediate fields $F\subseteq M\subseteq E$.

## Facts & Assumptions

**Given:** A finite simple extension $E=F(\alpha)$.

[L1] The notation $F(\alpha)$ denotes the smallest subfield containing $F$ and $\alpha$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] An algebraic element has a unique monic irreducible minimal polynomial over its base field ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L3] A polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L4] Degrees multiply in a finite tower of field extensions ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be the minimal polynomial of $\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$. [L1, L2]

2.1 The polynomial $g_M$ divides $f$ in $M[x]$ and therefore in $E[x]$. It is irreducible over $M_0$, since a factorisation over $M_0$ would be one over $M$, so it is also the minimal polynomial of $\alpha$ over $M_0$. [step 1.1, L2]

3.1 Thus $[E:M_0]=\deg g_M=[E:M]$; the tower law [L4] in $M_0\subseteq M\subseteq E$ gives $[M:M_0]=1$, so $M=M_0$. Hence the coefficients of $g_M$ determine $M$. [step 2.1, L4]

4.1 By unique factorisation [L3], the fixed polynomial $f$ has only finitely many monic divisors in $E[x]$. The injective assignment $M\mapsto g_M$ therefore proves that there are only finitely many intermediate fields. [step 3.1, L3] ∎
