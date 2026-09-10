---
id: "ex-de-rham-cohomology-of-a-finite-discrete-manifold"
kind: "example"
title: "De rham cohomology of a finite discrete manifold"
deps: ["cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions"]
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

An $m$-point discrete manifold has de Rham ring $\mathbb R^m$ in degree zero with componentwise multiplication and no other nonzero degrees, including $m=0$.

## Facts & Assumptions

**Given:** $M=\{1,\ldots,m\}$, $m\ge0$.

[F1] [[cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum]]: For a finite disjoint union $M=\coprod_{j=1}^mM_j$, restrictions give $H^k_{\mathrm{dR}}(M)\cong\bigoplus_{j=1}^mH^k_{\mathrm{dR}}(M_j)$.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

## Verification

**Proof technique:** direct.

1.1 A function is a tuple $(a_1,\ldots,a_m)$; every function is locally constant, and each tangent space is zero, so $df=0$ and all positive-degree form spaces vanish. The quotient has $B^0=0$. [F2, given]

2.1 Restriction to the finite disjoint points is the direct-sum identification. For tuples $a,b$, $(ab)_j=a_jb_j$, so multiplication is coordinatewise. For $m=0$ this is the zero algebra and for $m=1$ it is $\mathbb R$. [F1, step 1.1] ∎

## Source locator

Lee, Proposition 17.6, p.443, and Proposition 17.5, pp.442–443, disjoint unions; here the union is finite.
