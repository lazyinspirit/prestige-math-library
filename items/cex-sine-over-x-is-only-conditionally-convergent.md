---
id: cex-sine-over-x-is-only-conditionally-convergent
kind: counterexample
title: "The sine integral converges conditionally but not absolutely"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-dirichlet-test-for-improper-integrals,
       thm-absolute-divergence-from-uniform-tail-mass]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if
$\int_0^\infty \frac{\sin x}{x}\,dx$
converges, then
$\int_0^\infty \left|\frac{\sin x}{x}\right|\,dx$
must also converge.

## Facts & Assumptions

**Given:** The function $f(x)=\sin x/x$ on $(0,\infty)$.

[L1] Dirichlet's test makes $\int_1^\infty \sin x/x\,dx$ converge ([[thm-dirichlet-test-for-improper-integrals]]).

[L2] A uniform positive amount of absolute mass on infinitely many disjoint tails forces divergence of the absolute integral ([[thm-absolute-divergence-from-uniform-tail-mass]]).

## Counterexample

**Proof technique:** direct.

1.1 By, the oscillatory integral of $\sin x/x$ converges on $[1,\infty)$, [L1] so the half-line sine integral is conditionally convergent. [L1]

1.2 On each interval [L2, algebra] $I_k=[k\pi+\pi/6,\ k\pi+5\pi/6]$ one has $|\sin x|\ge1/2$, while $x\le(k+1)\pi$. Therefore $\int_{I_k}\left|\frac{\sin x}{x}\right|\,dx \ge\frac12\cdot\frac{2\pi/3}{(k+1)\pi} =\frac{1}{3(k+1)}.$ The lower bounds have divergent harmonic sum, so implies $\int_1^\infty |\sin x|/x\,dx=\infty$. [L2]

2.1 Thus $\sin x/x$ gives a convergent improper integral whose absolute-value integral diverges. [step 1.1, step 1.2] ∎
