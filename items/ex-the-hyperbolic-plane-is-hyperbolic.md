---
id: ex-the-hyperbolic-plane-is-hyperbolic
kind: example
title: "The hyperbolic plane is hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory lecture notes (2022), Example 4.3.2, Section 6.1 p. 153, and Example 6.2.3 (citing Löh, Geometric Group Theory: An Introduction, Theorem A.3.27)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Example

The hyperbolic plane $\mathbb H^2$ is a hyperbolic geodesic metric space.

## Facts & Assumptions

**Given:** The standard geodesic metric on $\mathbb H^2$.

[F1] Löh's cited lecture notes state in Example 4.3.2 that $\mathbb H^2$ is geodesic and state on p. 153 that all geodesic triangles in $\mathbb H^2$ are uniformly slim, citing Theorem A.3.27 of Löh's *Geometric Group Theory: An Introduction*. Thus some single $\delta\geq0$ works for every geodesic triangle in $\mathbb H^2$.

[L1] A geodesic metric space is hyperbolic exactly when all geodesic triangles are $\delta$-slim for some $\delta \ge 0$ ([[def-delta-slim-geodesic-triangle-and-hyperbolic-space]]).

## Verification

**Proof technique:** direct.

1.1 By the external geometric result [F1], $\mathbb H^2$ is geodesic and all its geodesic triangles are $\delta$-slim for a single $\delta\geq0$. [F1]

2.1 Therefore [L1] shows that $\mathbb H^2$ is hyperbolic. [L1, step 1.1] ∎
