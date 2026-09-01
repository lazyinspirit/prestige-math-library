---
id: cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values
kind: counterexample
title: "A smooth approximation without relative control destroys prescribed values"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-relative-whitney-approximation-for-euclidean-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement refuted

An arbitrarily close smooth approximation automatically preserves values on a
closed set where the original map was already fixed.

## Facts & Assumptions

**Given:** The zero map $f:\mathbb R\to\mathbb R$ and the closed set $A:=\{0\}$.

[L1] Relative Whitney approximation is the theorem that guarantees preservation
near the closed set ([[thm-relative-whitney-approximation-for-euclidean-valued-maps]]).

## Counterexample
**Proof technique:** direct.

1.1 For every $\epsilon>0$, the smooth function $$g_\epsilon(x):=\epsilon e^{-x^2}$$ satisfies $\sup_x|g_\epsilon(x)-f(x)|\le\epsilon$. So $g_\epsilon$ is an arbitrarily close smooth approximation to $f$. [given, algebra]

2.1 But $g_\epsilon(0)=\epsilon\ne0=f(0)$, so this approximation does not preserve the prescribed value on $A$. Thus closeness alone is weaker than the relative conclusion in [L1]. [L1, step 1.1] ∎
