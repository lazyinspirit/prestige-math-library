---
id: fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold
kind: false-statement
title: "FALSE: uniform approximation is the right global notion on every noncompact manifold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-positive-continuous-error-function-for-strong-approximation,
       thm-whitney-approximation-for-euclidean-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., The Whitney Approximation Theorems"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** on every noncompact manifold, one global uniform error bound is
the right notion of smooth approximation.

## Facts & Assumptions

**Given:** The continuous function $F(x)=|x|$ on $\mathbb R$ and the positive
continuous error function $\varepsilon(x)=e^{-|x|}$.

[F1] A positive continuous error function may vary from point to point
([[def-positive-continuous-error-function-for-strong-approximation]]).

[L1] Euclidean Whitney approximation is formulated with such pointwise positive
error functions ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

## Refutation
**Proof technique:** direct.

1.1 The function $\varepsilon(x)=e^{-|x|}$ tends to $0$ as $|x|\to\infty$, so the requirement $$|G(x)-F(x)|<\varepsilon(x)$$ demands finer and finer control at infinity. No single constant $\eta>0$ can encode that condition, because for large $|x|$ one has $\varepsilon(x)<\eta$. [F1, given, algebra]

2.1 The correct global theorem [L1] is therefore phrased with variable positive error functions rather than one uniform tolerance. That is exactly what allows the approximation scale to shrink along different ends of a noncompact source. [L1, step 1.1]

3.1 Hence the claim that one global uniform bound is always the right notion is false. [step 2.1] ∎
