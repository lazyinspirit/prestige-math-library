---
id: lem-finite-coordinate-cylinders-form-a-pi-system
kind: lemma
title: "Finite-coordinate cylinders form a $\\pi$-system"
status: draft
origin: pipeline
deps: [def-coordinate-maps-and-cylinder-sigma-algebra, def-pi-system]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Lemma 2.6"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

The finite-coordinate cylinders in $E=\prod_{i\in I}E_i$ form a pi-system.

## Facts & Assumptions

**Given:** Two finite-coordinate cylinders $\pi_F^{-1}(A)$ and $\pi_G^{-1}(B)$.

[F1] Their supports $F,G$ are finite, and their bases are measurable in the respective finite product sigma-algebras.

## Proof

1.1 Put $H=F\cup G$ and let $p_F,p_G$ be the coordinate projections from $\prod_{H}E_i$. Then $C:=p_F^{-1}(A)\cap p_G^{-1}(B)$ is measurable in $\bigotimes_H\mathcal E_i$. [F1]

2.1 Directly from restriction of coordinates, $\pi_F^{-1}(A)\cap\pi_G^{-1}(B)=\pi_H^{-1}(C)$, a finite-coordinate cylinder. The family is nonempty because it contains $E$, so it is a pi-system. [step 1.1] ∎
