---
id: ex-two-sheeted-model-of-the-square-root-surface
kind: example
title: "The square-root surface is a two-sheeted covering of the punctured plane"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-surface-of-an-nth-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

For $n=2$, the square-root surface is biholomorphic to $\mathbb C^\times$, and
under that identification the projection is

$$w\longmapsto w^2.$$

So each nonzero base point has exactly the two lifts $w$ and $-w$.

## Facts & Assumptions

**Given:** The $n$th-root surface theorem with $n=2$.

[L1] The $n$th-root surface is biholomorphic to $\mathbb C^\times$, and the
projection becomes $w \mapsto w^n$
([[thm-riemann-surface-of-an-nth-root]]).

## Verification

**Proof technique:** direct.

1.1 Specializing [L1] to $n=2$ makes the square-root surface biholomorphic to $\mathbb C^\times$ with projection $w \mapsto w^2$. [L1]

2.1 If $z\in\mathbb C^\times$ and $w^2=z$, then also $(-w)^2=z$, and these are the only lifts because $u^2=z$ implies $(u/w)^2=1$, hence $u/w=\pm1$. So the surface has exactly two sheets over each nonzero base point. [step 1.1, algebra] ∎
