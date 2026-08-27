---
id: cex-weak-boundary-inequality-does-not-suffice-for-rouche
kind: counterexample
title: "The weak inequality |f-g| <= |g| does not suffice in Rouche"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-rouche-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Rouché's theorem remains valid when the strict boundary
inequality $|f-g|<|g|$ is weakened to $|f-g|\le|g|$.

## Facts & Assumptions

**Given:** The unit circle, $g(z)=z$, and $f(z)=z+1$.

[L1] The classical theorem requires the strict inequality
([[thm-rouche-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 On $|z|=1$ one has $$|f(z)-g(z)|=|1|=1=|z|=|g(z)|,$$ so the weak inequality holds everywhere on the boundary. [given, algebra]

2.1 But $f$ vanishes at $z=-1$, which lies on the boundary itself. So the interior zero-count conclusion is no longer even well posed. This is exactly why [L1] is stated with a strict inequality. [step 1.1, L1] ∎
