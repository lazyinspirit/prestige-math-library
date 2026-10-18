---
id: ex-temperley-lieb-zero-loop-parity-ranks-three-four
kind: example
title: "At zero loop value, rank three and rank four have opposite semisimplicity"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - lem-temperley-lieb-link-state-gram-determinant
  - lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Corollary 4.8 and Proposition 4.9, PDF pp. 20–21: the q²=−1 exceptional regime."
---

## Example

Take $q=i$, so $\delta=0$ and $q^2$ has order two. Then $\mathrm{TL}_3(\mathbb C,0)$ is semisimple, whereas $\mathrm{TL}_4(\mathbb C,0)$ is not.

## Facts & Assumptions

**Given:** The quantum integers at $q=i$ and the link-state Gram determinants.

[F1] For $q=i$, $[2k]_q=0$ and $[2k+1]_q=(-1)^k$; the determinants and semisimplicity test are given by [[lem-temperley-lieb-link-state-gram-determinant]] and [[lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c]].

## Verification

**Given:** $q=i$, $\ell=2$, and ranks $n=3,4$.

1.1 For $n=3$, the allowed arc counts are $p=0,1$. The empty product gives $\det G_{3,0}=1$, while the determinant formula gives $\det G_{3,1}=[3]_q/[1]_q=-1$. Both link-state forms are nondegenerate, so [[lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c]] implies $\mathrm{TL}_3(\mathbb C,0)$ is semisimple. [F1, given, algebra]

2.1 For $n=4$, choose $p=1$. Then $\det G_{4,1}=[4]_q/[1]_q=0$, so one cell form is degenerate. The reverse implication of [[lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c]] gives that $\mathrm{TL}_4(\mathbb C,0)$ is not semisimple. [F1, given, step 1.1, algebra] ∎
