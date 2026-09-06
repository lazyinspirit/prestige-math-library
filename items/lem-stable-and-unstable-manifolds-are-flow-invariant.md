---
id: lem-stable-and-unstable-manifolds-are-flow-invariant
kind: lemma
title: "Stable and unstable manifolds are flow invariant"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.2"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

For every $s\in\mathbb R$ and critical point $p$ of a complete descending
flow $\Phi$,

$$ \Phi_s(W^s(p))=W^s(p),\qquad \Phi_s(W^u(p))=W^u(p). $$

## Facts & Assumptions

**Given:** A complete descending flow $\Phi$, a critical point $p$, and $s\in\mathbb R$.

[F1] Stable and unstable sets are the forward and backward convergence sets ([[def-stable-and-unstable-sets-of-a-critical-point]]).

[F2] The flow satisfies $\Phi_t(\Phi_s(x))=\Phi_{t+s}(x)$ and has inverse $\Phi_{-s}$ ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in W^s(p)$, then [F2] gives $\Phi_t(\Phi_s(x))=\Phi_{t+s}(x)\to p$ as $t\to\infty$, so $\Phi_s(x)\in W^s(p)$ by [F1]. The same calculation with $t\to-\infty$ proves inclusion for $W^u(p)$. [F1, F2, given]

2.1 Applying step 1.1 with $-s$ and using the inverse in [F2] proves the reverse inclusions. [F2, step 1.1]

3.1 Therefore both stable and unstable sets are invariant under every fixed flow time. [step 1.1, step 2.1] ∎
