---
id: thm-pfaffian-frobenius-criterion
kind: theorem
title: "The Pfaffian Frobenius criterion"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-differential-ideal-in-the-algebra-of-forms, lem-annihilator-ideal-of-a-distribution-is-frame-independent, def-involutive-distribution, prop-involutivity-can-be-checked-on-a-local-frame]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

If $\theta^1,\ldots,\theta^{n-k}$ locally frame $\mathcal D^\circ$, then $\mathcal D$ is involutive if and only if $$d\theta^a=\sum_b\eta^a_b\wedge\theta^b$$ locally for every $a$; equivalently, its annihilator ideal is differential.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that A differential ideal is a graded wedge ideal $I\subseteq\Omega^*(M)$ satisfying $dI\subseteq I$. ([[def-differential-ideal-in-the-algebra-of-forms]]).

## Proof

**Proof technique:** direct.

1.1 For tangent fields $X,Y$ in $\mathcal D$, $d\theta^a(X,Y)=-\theta^a([X,Y])$; thus involutivity forces each $d\theta^a$ to vanish on $\mathcal D$ and so to have the displayed coframe decomposition. [F1, given]

2.1 Conversely that decomposition vanishes on pairs from $\mathcal D$, so every $\theta^a([X,Y])=0$ and $[X,Y]\in\mathcal D$; the frame-independent ideal statement is the same condition. [step 1.1] ∎

