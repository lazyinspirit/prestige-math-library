---
id: lem-intersection-affine-opens-covered-principal-opens
kind: lemma
title: "Intersections of affine opens admit principal affine covers"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-open-subscheme, lem-spectrum-localization-open-immersion]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 6.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Statement

If $U,V$ are affine open subschemes of a scheme $X$, then $U\cap V$ is covered
by open subschemes which are principal opens in $U$ and are also principal
opens in affine open charts of $V$.

## Facts & Assumptions

**Given:** Affine open subschemes $U,V\subseteq X$.

## Proof

**Proof technique:** direct.

1.1 For $x\in U\cap V$, regard $U\cap V$ as an open neighbourhood of $x$ in the affine scheme $U$. Distinguished opens form a basis there, so choose $f$ with $x\in D_U(f)\subseteq U\cap V$. [given, choose]

2.1 The same construction in an affine neighbourhood in $V$ refines $D_U(f)$ around each of its points by a distinguished open in that chart. These refinements cover $U\cap V$, and each is principal in the indicated affine charts. [step 1.1, construct] ∎
