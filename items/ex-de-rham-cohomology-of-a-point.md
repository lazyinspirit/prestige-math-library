---
id: "ex-de-rham-cohomology-of-a-point"
kind: "example"
title: "De rham cohomology of a point"
deps: ["prop-zero-and-out-of-range-de-rham-cohomology", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions"]
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

The de Rham ring of a point is $\mathbb R$ in degree zero only.

## Facts & Assumptions

**Given:** $M=\{p\}$ with its zero-dimensional smooth structure.

[F1] [[prop-zero-and-out-of-range-de-rham-cohomology]]: $H^k_{\mathrm{dR}}(M)=0$ if $k<0$ or $k>\dim M$. If $M=\varnothing$, its cohomology vanishes in every degree.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

## Verification

**Proof technique:** direct.

1.1 A smooth function is uniquely its value at $p$, so $\Omega^0(M)=\mathbb R$. There are no nonzero cotangent vectors, hence no positive-degree forms, and $d=0$. [F1, given]

2.1 The degree-zero quotient has no boundaries, and evaluation at $p$ sends $[a][b]$ to $ab$ and $[1]$ to $1$. Thus it is the algebra $\mathbb R$; every other group is zero. [F2, step 1.1] ∎

## Source locator

Lee, p.441, the cycle quotient, and Proposition 17.6, p.443, degree zero; the point has no positive-degree forms.
