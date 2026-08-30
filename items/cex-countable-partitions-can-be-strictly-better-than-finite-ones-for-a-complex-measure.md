---
id: cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure
kind: counterexample
title: "Finite partitions need not attain complex total variation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

For every complex measure, some finite measurable partition attains the
total-variation supremum.

## Facts & Assumptions

**Given:** The complex measure $\nu(E)=\int_E e^{ix}\,d\lambda$ on $[0,2\pi]$.

[L1] For this measure, $|\nu|([0,2\pi])=2\pi$. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[A1] If $A\subseteq[0,2\pi]$ has positive Lebesgue measure, then $\left|\int_A e^{ix}\,d\lambda\right|<\lambda(A)$, because equality in the triangle inequality would force $e^{ix}$ to have constant argument almost everywhere on $A$.

[A2] For every $\varepsilon>0$ there is a countable partition of $[0,2\pi]$ into intervals $(I_n)$ so short that $\sum_n \left|\int_{I_n} e^{ix}\,d\lambda\right|>2\pi-\varepsilon$.

## Counterexample

**Proof technique:** direct.

1.1 Let $E_1,\dots,E_m$ be a finite measurable partition of $[0,2\pi]$. Every [L1, A1] piece of positive measure satisfies the strict inequality from [A1], and the null pieces contribute $0$. Therefore $$\sum_{j=1}^m |\nu(E_j)|<\sum_{j=1}^m \lambda(E_j)=2\pi.$$ So no finite partition attains the total variation value $2\pi$. [L1, A1]

2.1 By [A2], countable partitions can produce sums arbitrarily close to $2\pi$. [L1, A2, step 1.1]
Combining this with step 1.1 and [L1] shows that the total-variation value $2\pi$ is not attained by any finite partition. ∎
