---
id: thm-invariance-of-complex-line-integrals-under-increasing-reparametrization
kind: theorem
title: "Complex and absolute line integrals are invariant under increasing continuous reparametrization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-change-of-variable, thm-arc-length-is-invariant-under-monotone-reparametrization, thm-line-integrals-under-oriented-reparametrization]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $\phi:[c,d]\to[a,b]$ be a strictly increasing continuous bijection, let $\gamma:[a,b]\to\mathbb C$ be rectifiable, and let $f$ be continuous on the trace of $\gamma$. Then
$$\int_{\gamma\circ\phi}f\,dz=\int_\gamma f\,dz,\qquad \int_{\gamma\circ\phi}|f|\,|dz|=\int_\gamma|f|\,|dz|.$$
For singleton source and target intervals the same identities hold by the zero-integral convention.

## Facts & Assumptions

**Given:** A rectifiable contour, a continuous integrand, and a reparametrization $\phi$ as in the Statement.

[L1] Under a strictly increasing continuous bijection between nondegenerate compact intervals, the real Riemann–Stieltjes change-of-variable formula holds ([[thm-riemann-stieltjes-change-of-variable]]).

[L2] Arc length is invariant under continuous surjective monotone reparametrization, including the stated singleton cases ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

[L3] Published piecewise-$C^1$ line integrals are invariant under orientation-preserving reparametrization and change sign under orientation reversal ([[thm-line-integrals-under-oriented-reparametrization]]).

[L4] The complex integral is the combination of four component Riemann–Stieltjes integrals, and the absolute integral is the Riemann–Stieltjes integral against arc length ([[def-complex-line-integral-over-a-rectifiable-path]], [[def-absolute-line-integral-over-a-rectifiable-path]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that both intervals are nondegenerate. Apply [L1] to each of the four component integrals in [L4]; their recombination is unchanged. [assume-case nondegenerate, L1, L4]

1.2 If both intervals are singletons, both complex and absolute integrals are $0$ by definition. [assume-case singleton, algebra]

2.1 For the absolute integral in [L4], [L2] identifies the reparametrized arc-length integrator, and [L1] gives the same Stieltjes integral. [step 1.1, L1, L2, L4]

3.1 The cases exhaust the Statement and prove both identities. On piecewise-$C^1$ contours this is exactly the increasing half of [L3]; decreasing reparametrization is excluded and instead changes the complex integral's sign. [step 1.1, step 2.1, step 1.2, L3, cases-exhaustive] ∎
