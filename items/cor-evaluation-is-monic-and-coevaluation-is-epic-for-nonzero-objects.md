---
id: cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects
kind: corollary
title: "Evaluation is epic and coevaluation monic for nonzero objects"
status: draft
origin: pipeline
deps: [thm-the-unit-object-of-a-tensor-category-is-simple]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Corollary 4.3.9"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Corrections to Tensor Categories, Chapter 4"
      url: "https://math.mit.edu/~etingof/tensbookcor.pdf"
---

## Statement

If $X\ne0$ in a tensor category and $X^\vee$ is a left dual, then
$\operatorname{ev}_X:X^\vee\otimes X\to\mathbf1$ is epic and
$\operatorname{coev}_X:\mathbf1\to X\otimes X^\vee$ is monic.

## Facts & Assumptions

**Given:** A nonzero object $X$ of a tensor category and a left dual $X^\vee$.

[F1] The unit is simple ([[thm-the-unit-object-of-a-tensor-category-is-simple]]).

## Proof

**Proof technique:** direct.

1.1 The zig-zag identity shows that evaluation is nonzero: otherwise its composite giving $1_X$ would vanish. Its image is therefore a nonzero subobject of the simple object $\mathbf1$, hence all of $\mathbf1$ by [F1]. Thus evaluation is epic. [F1, given]

2.1 The other zig-zag identity shows directly that coevaluation is nonzero: if it vanished, its composite giving $1_X$ would vanish. Since its source $\mathbf1$ is simple by [F1], its kernel is either $0$ or $\mathbf1$; the nonzero map excludes the latter. Thus coevaluation is monic. [F1, given] ∎
