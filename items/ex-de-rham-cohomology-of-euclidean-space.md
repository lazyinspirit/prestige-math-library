---
id: "ex-de-rham-cohomology-of-euclidean-space"
kind: "example"
title: "De rham cohomology of euclidean space"
deps: ["thm-poincare-lemma-for-differential-forms-on-star-shaped-domains", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions"]
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
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For every $n\ge0$, $H^\bullet_{\mathrm{dR}}(\mathbb R^n)=\mathbb R$ in degree zero only.

## Facts & Assumptions

**Given:** Euclidean space with centre $0$.

[F1] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

## Verification

**Proof technique:** direct.

1.1 For any closed $k$-form with $k\ge1$, the radial primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})dt$, and $d\eta=\omega$. Thus every positive-degree class is zero. [F1, given]

2.1 Euclidean space is nonempty and connected, so its degree-zero classes are constant functions with their ordinary multiplication. Negative degrees are zero by the complex convention. When $n=0$, the only form space is the constants on a point, giving the same ring. [F2, step 1.1] ∎

## Source locator

Lee, Theorem 17.14, p.447, Poincaré lemma, and Proposition 17.6, p.443, degree zero.
