---
id: cor-codimension-one-frobenius-criterion
kind: corollary
title: "The codimension-one Frobenius criterion"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pfaffian-frobenius-criterion, thm-frobenius-local-coordinate-theorem]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $\theta^1,\ldots,\theta^{n-k}$ locally frame $\mathcal D^\circ$, then $\mathcal D$ is involutive if and only if $$d\theta^a=\sum_b\eta^a_b\wedge\theta^b$$ locally for every $a$; equivalently, its annihilator ideal is differential. ([[thm-pfaffian-frobenius-criterion]]).

[F2] A smooth distribution is integrable if and only if it is involutive ([[thm-frobenius-local-coordinate-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Extend the nowhere-zero $\alpha$ to a local coframe. The Pfaffian condition is $d\alpha=\eta\wedge\alpha$. [F1, given]

2.1 In that coframe, $\alpha\wedge d\alpha=0$ is equivalent to the absence of every component of $d\alpha$ not containing $\alpha$, hence to $d\alpha\in(\alpha)$. Apply [F1] and then [F2] in both directions. [F1, F2, step 1.1] ∎
