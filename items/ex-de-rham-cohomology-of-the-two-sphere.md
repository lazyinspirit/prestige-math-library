---
id: "ex-de-rham-cohomology-of-the-two-sphere"
kind: "example"
title: "De rham cohomology of the two sphere"
deps: ["thm-de-rham-cohomology-of-spheres"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Under countable choice, the sphere $S^2$ has $H^0=H^2=\mathbb R$ and $H^1=0$, with all other groups zero.

## Facts & Assumptions

**Given:** Assume countable choice. The unit sphere in $\mathbb R^3$.

[F1] [[thm-de-rham-cohomology-of-spheres]]: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

## Verification

**Proof technique:** direct.

1.1 Apply F1 with $n=2$. It gives $H^0(S^2)=H^2(S^2)=\mathbb R$ and $H^1(S^2)=0$, with all remaining degrees zero. [F1, given]

2.1 The same theorem with $n=2$ gives the constant-function group in degree zero and the zero group in degree one. A product of two degree-two classes has degree four and is zero, so the ring is $\mathbb R[u]/(u^2)$ with $|u|=2$. [F1, step 1.1] ∎

## Source locator

Lee, Theorem 17.21, pp.450–451; the degree groups and products are computed for dimension two.
