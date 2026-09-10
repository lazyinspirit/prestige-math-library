---
id: "ex-de-rham-cohomology-of-punctured-three-space"
kind: "example"
title: "De rham cohomology of punctured three space"
deps: ["cor-de-rham-cohomology-of-punctured-euclidean-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Under countable choice, $\mathbb R^3\setminus\{0\}$ has de Rham cohomology $\mathbb R$ in degrees zero and two only.

## Facts & Assumptions

**Given:** Assume countable choice. The punctured three-dimensional Euclidean space.

[F1] [[cor-de-rham-cohomology-of-punctured-euclidean-space]]: Under countable choice, $\mathbb R^n\setminus\{0\}$ has cohomology $\mathbb R$ in degrees $0,n-1$ only for $n\ge2$. For $n=1$ it has $\mathbb R^2$ in degree zero only, and for $n=0$ all groups vanish.

## Verification

**Proof technique:** direct.

1.1 The radial map $r(x)=x/|x|$ retracts onto $S^2$. The homotopy $F(x,t)=((1-t)+t/|x|)x$ has norm $(1-t)|x|+t>0$; it begins at $x$, ends at $r(x)$ and fixes points of $S^2$. [given, algebra]

2.1 This is the $n=3$ instance of the punctured-space theorem, so its only nonzero groups are $H^0=H^2=\mathbb R$. Products of positive-degree classes vanish because their degree is at least four. [F1, step 1.1] ∎

## Source locator

Lee, Corollary 17.23, p.451; the radial maps and the degree-two generator are displayed in the verification.
