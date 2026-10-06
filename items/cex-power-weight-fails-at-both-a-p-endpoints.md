---
id: cex-power-weight-fails-at-both-a-p-endpoints
kind: counterexample
title: A power weight fails at both A_p endpoints
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [ex-power-weight-a-p-range, def-muckenhoupt-a-p-and-a-one-weights, def-weight-and-weighted-lp-space, thm-polar-coordinates-formula-for-lebesgue-measure, thm-logarithm-derivative-and-integral, thm-comparison-test-for-improper-integrals, thm-real-power-continuity-and-derivatives, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Example 7.1.7 and the preceding doubling discussion, printed pp. 505-507"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Example 4.17, printed p. 75"
verification:
  precheck: pass
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Fix $1<p<\infty$. The claims that the power weight $|x|^\alpha$ is in $A_p$
also at the endpoints of its admissible interval are false:

1. at the upper endpoint $\alpha=n(p-1)$ the function $|x|^\alpha$ is a weight
   but not an $A_p$ weight;
2. at the lower endpoint $\alpha=-n$ the function $|x|^\alpha$ is not even
   locally integrable, so it is not a weight.

Hence the admissible interval $-n<\alpha<n(p-1)$ is open at both ends and
cannot be enlarged.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $1<p<\infty$, the power function $|x|^\alpha$ and a radius $R>0$.

[F1] For $\alpha>-n$ the function $|x|^\alpha$ is a weight, and the $A_p$ characteristic is the supremum of $\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ over cubes ([[ex-power-weight-a-p-range]], [[def-muckenhoupt-a-p-and-a-one-weights]], [[def-weight-and-weighted-lp-space]]).

[F2] Polar coordinates give $\int_{B(0,R)}|x|^a\,dx=|\mathbb S^{n-1}|R^{n+a}/(n+a)$ for $a>-n$ and $+\infty$ for $a\le-n$, and $\int_0^Rr^{-1}dr=+\infty$ for every $R>0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-real-power-continuity-and-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-comparison-test-for-improper-integrals]]).

## Counterexample

**Proof technique:** direct.

1.1 At the upper endpoint: for $\alpha=n(p-1)$ one has $-\alpha/(p-1)=-n$, so polar coordinates give $\int_{B(0,R)}|x|^{-\alpha/(p-1)}dx=\int_{B(0,R)}|x|^{-n}dx=|\mathbb S^{n-1}|\int_0^Rr^{-1}dr=+\infty$ for every $R>0$ by the logarithmic divergence of $\int_0^1r^{-1}dr$. The second factor of the defining product $\langle|x|^\alpha\rangle_Q\langle|x|^{-\alpha/(p-1)}\rangle_Q^{p-1}$ is therefore $+\infty$ on the cube $Q=Q(0,R)$ containing $B(0,R)$, so the defining supremum is $+\infty$ and $|x|^{n(p-1)}$ is not in $A_p$, while it is locally integrable and hence a weight. [F1, F2, given, algebra]

1.2 At the lower endpoint: for $\alpha=-n$ polar coordinates give $\int_{B(0,R)}|x|^{-n}dx=|\mathbb S^{n-1}|\int_0^Rr^{-1}dr=+\infty$, so $|x|^{-n}\notin L^1_{\mathrm{loc}}(\mathbb R^n)$ and no $A_p$ membership is defined; this is the same logarithmic divergence of the radial integral $\int_0^Rr^{-1}dr$. [F2, given, algebra]

2.1 Steps 1.1 and 1.2 show the failure at both endpoints, so the range $-n<\alpha<n(p-1)$ determined in [[ex-power-weight-a-p-range]] is exactly the open admissible interval and cannot be enlarged. [step 1.1, step 1.2, given] ∎
