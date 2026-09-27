---
id: cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
kind: corollary
title: "Every smooth vector field on a compact manifold is complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-compactly-supported-vector-fields-are-complete, def-smooth-section-local-section-and-support, def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

Every smooth vector field on a compact manifold is complete.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$ and a smooth vector field $X$ on $M$.

[L1] A compactly supported smooth vector field is complete ([[thm-compactly-supported-vector-fields-are-complete]]).

[L2] The support of a section is a closed subset of the base manifold ([[def-smooth-section-local-section-and-support]]).

[L3] Closed subsets of compact spaces are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the support of $X$ is a closed subset of $M$. Since $M$ is compact, [L3] shows that $\operatorname{supp}(X)$ is compact. [L2, L3, given]

2.1 Thus $X$ is compactly supported, so [L1] implies that $X$ is complete. [L1, step 1.1] ∎
