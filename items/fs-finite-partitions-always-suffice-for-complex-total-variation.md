---
id: fs-finite-partitions-always-suffice-for-complex-total-variation
kind: false-statement
title: "FALSE: finite partitions always suffice for complex total variation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** For every complex measure, some finite measurable partition of
each measurable set attains the total variation.

## Facts & Assumptions

**Given:** The complex measure $\nu(E)=\int_E e^{ix}\,d\lambda$ on
$[0,2\pi]$.

[L1] For this measure, $|\nu|([0,2\pi])=2\pi$. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[A1] If $A\subseteq[0,2\pi]$ has positive measure, then
$\left|\int_A e^{ix}\,d\lambda\right|<\lambda(A)$.

## Refutation

**Proof technique:** direct.

1.1 Let $E_1,\dots,E_m$ be any finite measurable partition of $[0,2\pi]$. [L1, A1]
Applying [A1] on each positive-measure piece and summing gives
$$\sum_{j=1}^m |\nu(E_j)|<\sum_{j=1}^m \lambda(E_j)=2\pi.$$
2.1 By [L1], the total variation of the whole interval is exactly $2\pi$, so [L1, step 1.1] ∎
step 1.1 shows that no finite partition attains it. Therefore the claim is
false.