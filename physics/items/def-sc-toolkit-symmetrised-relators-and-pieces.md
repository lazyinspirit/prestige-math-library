---
id: def-sc-toolkit-symmetrised-relators-and-pieces
kind: definition
title: "Sc toolkit symmetrised relators and pieces"
status: published
origin: pipeline
deps: [def-group-presentation, def-cyclically-reduced-word]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.5 Definition 3.5.2 (comparison of conventions)"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Lipschutz (1964), \u00a72, printed pp.37\u201338: cancellation condition with the identical-word exception"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Definition

Let $X^{\pm1}$ be an alphabet with formal inverses. Length $|u|$ means literal letter length. Fix a set $R$ of nonempty cyclically reduced words, closed under inverses and cyclic rotations, with duplicate words removed. The group is $G=\langle X\mid R\rangle$ in [[def-group-presentation]], and cyclic reduction has the convention of [[def-cyclically-reduced-word]]. Neither $X$ nor $R$ must be finite.

A **piece** is a nonempty word $p$ that is an initial segment of two distinct words $r,s\in R$. The condition $C'(1/6)$ says $|p|<|r|/6$ for each such initial segment of each $r$. Rotating relators gives the identical bound for an overlap based anywhere on a relator. Equal rotations, including equal rotations of a proper power, are one word and do not create a piece.

Symmetrising a collection does not change its normal closure: if $r=uv$, then $vu=u^{-1}ru$ in the free group, and inverses of elements of a normal subgroup remain in it. Thus every added word belongs to the old normal closure; the original words are retained, giving the reverse inclusion. The empty set $R$ is permitted and satisfies the condition vacuously.

## Remarks

Touikan §3.5 uses occurrences and an irredundancy assumption. Here distinct full words control pieces, including for proper powers; the local proofs use precisely this convention.
