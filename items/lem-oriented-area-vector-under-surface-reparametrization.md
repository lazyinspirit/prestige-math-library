---
id: lem-oriented-area-vector-under-surface-reparametrization
kind: lemma
title: 'The oriented area vector transforms by the parameter Jacobian determinant'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-surface-reparametrization-and-orientation, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-surface-area-density-is-cross-product-norm]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Statement

If $\psi=\varphi\circ h$, then $\psi_s\times\psi_t=(\det Dh)(\varphi_u\times\varphi_v)\circ h$.

If $\psi=\varphi\circ h$, then $J_\psi=(J_\varphi\circ h)|\det Dh|$.

## Facts & Assumptions

**Given:** A regular reparametrization $\psi=\varphi\circ h$, with $h=(h_1,h_2)$.

[L1] The chain rule and the coordinate interpretation of total derivatives give $\psi_s=(h_1)_s(\varphi_u\circ h)+(h_2)_s(\varphi_v\circ h)$ and the analogous formula for $\psi_t$ ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-surface-reparametrization-and-orientation]]).

[L2] The cross product is bilinear and alternating ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]), and area density is the cross-product norm ([[thm-surface-area-density-is-cross-product-norm]]).

## Proof

**Proof technique:** direct.

1.1 Substitute the two formulas from [L1] into $\psi_s\times\psi_t$. By [L2], the equal-vector terms vanish and the remaining terms combine to $((h_1)_s(h_2)_t-(h_2)_s(h_1)_t)(\varphi_u\times\varphi_v)\circ h$. [given, L1, L2, algebra]

2.1 The scalar coefficient in step 1.1 is $\det Dh$, proving the signed area-vector formula. [step 1.1, algebra]

3.1 Taking Euclidean norms, using $\|cw\|_2=|c|\|w\|_2$, and applying [L2] gives $J_\psi=(J_\varphi\circ h)|\det Dh|$. [step 2.1, L2, algebra]

4.1 The first identity retains the determinant sign, while only the norm identity replaces it by an absolute value, as asserted. [step 2.1, step 3.1] ∎
