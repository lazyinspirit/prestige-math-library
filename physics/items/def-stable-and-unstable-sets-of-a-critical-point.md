---
id: def-stable-and-unstable-sets-of-a-critical-point
kind: definition
title: "Stable and unstable sets of a critical point"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-downward-gradient-like-vector-field, def-local-and-global-flow]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Definition 13.2"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Definition

Let $X$ be a complete downward gradient-like field for $f$, let $\Phi$ be its
global descending flow, and let $p\in\operatorname{Crit}(f)$. Define

$$ W^s(p):=\{x\in M:\Phi_t(x)\to p\text{ as }t\to\infty\},\qquad W^u(p):=\{x\in M:\Phi_t(x)\to p\text{ as }t\to-\infty\}. $$

These definitions use the descending flow of $X$. Thus “unstable” means the
backward-limit set, as required by the Morse-index convention.
