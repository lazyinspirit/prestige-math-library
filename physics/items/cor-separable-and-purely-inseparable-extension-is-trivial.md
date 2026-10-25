---
id: cor-separable-and-purely-inseparable-extension-is-trivial
kind: corollary
title: "An extension that is both separable and purely inseparable is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-elements-and-separable-extensions, thm-purely-inseparable-extension-characterizations, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
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

If an algebraic extension $K/F$ is both separable and purely inseparable, then
$K=F$.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$ that is separable and purely inseparable, and an element $\alpha\in K$.

[L1] Separability makes the minimal polynomial of every element separable ([[def-separable-elements-and-separable-extensions]]).

[L2] Pure inseparability makes every element have exactly one distinct conjugate over the base ([[thm-purely-inseparable-extension-characterizations]]).

[L3] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Let $m_\alpha$ be the minimal polynomial from [L3]. It is separable by [L1], so all of its roots are distinct, but [L2] says it has only one distinct root. Hence $\deg m_\alpha=1$. [L1, L2, L3]

2.1 A degree-one minimal polynomial puts $\alpha$ in $F$. Since $\alpha\in K$ was arbitrary, $K=F$. [step 1.1, algebra] ∎
