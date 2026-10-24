---
id: cor-right-adjoints-preserve-monomorphisms-and-left-adjoints-preserve-epimorphisms
kind: corollary
title: 'Right adjoints preserve monomorphisms and left adjoints preserve epimorphisms'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-adjoints-preserve-limits, cor-left-adjoints-preserve-colimits, def-monomorphism-and-epimorphism]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Exercise 4.6.vi'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Every right adjoint preserves monomorphisms, and every left adjoint preserves epimorphisms.

## Facts & Assumptions

**Given:** A morphism $f:x\to y$ and an adjunction whose right or left adjoint is applied to it.

[F1] A morphism $f$ is monic when $fg=fh$ implies $g=h$ for every parallel pair, and epic when $gf=hf$ implies $g=h$ for every parallel pair ([[def-monomorphism-and-epimorphism]]).

[L1] Right adjoints preserve every existing limit ([[thm-right-adjoints-preserve-limits]]).

[L2] Left adjoints preserve every existing colimit ([[cor-left-adjoints-preserve-colimits]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is monic, the commutative square with vertex $x$, both maps into the two copies of $x$ equal to $1_x$, and both maps from those copies to $y$ equal to $f$, is a pullback: a pair $g,h:z\to x$ with $fg=fh$ has the unique mediating map $g=h$. [F1]

1.2 Conversely, if that self-square is a pullback and $fg=fh$, then both $g$ and $h$ are mediating maps for the same cone, so pullback uniqueness gives $g=h$; hence $f$ is monic. [F1]

2.1 A right adjoint preserves the pullback in step 1.1 by [L1], and step 1.2 then says that the image of $f$ is monic. [step 1.1, step 1.2, L1]

3.1 Passing to opposite categories turns epimorphisms into monomorphisms and a left adjoint into a right adjoint; equivalently, apply [L2] to the dual pushout characterization. Thus left adjoints preserve epimorphisms. [step 2.1, L2] ∎
