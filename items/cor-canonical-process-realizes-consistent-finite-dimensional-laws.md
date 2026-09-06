---
id: cor-canonical-process-realizes-consistent-finite-dimensional-laws
kind: corollary
title: "The canonical coordinate process realizes consistent finite-dimensional laws"
status: draft
origin: pipeline
deps: [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, def-coordinate-maps-and-cylinder-sigma-algebra, def-stochastic-process-and-finite-dimensional-distributions]
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
    - title: "Biskup, MATH 275D notes, Theorem 2.4"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

Under the extension measure of [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]], $X_i(x)=x_i$ is a process whose finite-dimensional distributions are the prescribed $(\mu_F)$.

## Facts & Assumptions

**Given:** The extension measure $\mu$ on the cylinder space and its coordinate maps.

[F1] The extension has marginal $\mu_F$ under every finite-coordinate projection. ([[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]])

## Proof

1.1 Each coordinate map is measurable because inverse images of its measurable sets are one-coordinate cylinders. Thus $(X_i)$ is a process. [F1]

2.1 For finite $F$, $(X_i)_{i\in F}=\pi_F$, so its pushforward law is $\mu_F$ by [F1]. This is precisely the finite-dimensional-law convention. [F1] ∎
