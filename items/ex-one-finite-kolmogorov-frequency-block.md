---
id: "ex-one-finite-kolmogorov-frequency-block"
kind: "example"
title: "One finite kolmogorov frequency block"
deps: ["def-kolmogorov-analytic-partial-sum-maximal-function"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: FR-4K finite indexing convention
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
generation:
  role: example
---

## Example

For $P=1+e_1$ and $Q=e_5P$, the support of Q is $\{5,6\}$, $A_4Q=0$, $A_5Q=e_5$, $A_6Q=Q$, and $|Q|=|P|$.

## Facts & Assumptions

[F1] Analytic sums and the finite coefficient convention are fixed [[def-kolmogorov-analytic-partial-sum-maximal-function]].

## Verification

**Given:** $P(x)=1+e^{2\pi ix}$ and $Q(x)=e^{10\pi ix}P(x)$.

1.1 Multiplication gives $Q(x)=e^{10\pi ix}+e^{12\pi ix}=e_5(x)+e_6(x)$. Both coefficients are one and all others zero by the character-integral calculation in F1, so its support is exactly $\{5,6\}$. The cutoff through four is the empty supported sum, through five is $e_5$, and through six is $e_5+e_6=Q$. [F1]

2.1 Since $|e_5(x)|=1$, $|Q(x)|=|1+e^{2\pi ix}|$. Factoring gives $1+e^{2\pi ix}=2e^{\pi ix}\cos(\pi x)$, hence both magnitudes are $2|\cos(\pi x)|$. At x=0 they equal two, and at x=1/2 they vanish. This concrete shift changes the frequencies while preserving every pointwise magnitude. [F1, step 1.1] ∎
