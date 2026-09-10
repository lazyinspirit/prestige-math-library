---
id: "ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere"
kind: "example"
title: "The standard volume form generates top cohomology of a sphere"
deps: ["thm-de-rham-cohomology-of-spheres", "cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact"]
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

Under countable choice, for $n\ge1$ the form $\omega=\sum_{i=1}^{n+1}(-1)^{i-1}x_i\,dx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_{n+1}|_{S^n}$ generates $H^n(S^n)$.

## Facts & Assumptions

**Given:** Assume countable choice. The outward orientation on the unit sphere.

[F1] [[thm-de-rham-cohomology-of-spheres]]: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

[F2] [[cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact]]: Let $M^n$ be compact, oriented, and boundaryless, $n\geq1$. A smooth top form $\omega$ with $\int_M\omega\neq0$ is not exact. In particular every positive smooth top form on a nonempty such $M$ is not exact.

## Verification

**Proof technique:** direct.

1.1 For tangent vectors $v_1,\ldots,v_n$, expansion along the first column gives $\omega_x(v_1,\ldots,v_n)=\det(x,v_1,\ldots,v_n)$. The outward orientation is precisely the convention that this determinant is positive on positive tangent bases. Since $x$ is a nonzero normal to the tangent space, the determinant is nonzero on every tangent basis; thus $\omega$ is smooth, positive and nowhere zero. [given, algebra]

2.1 The sphere is nonempty, compact, oriented and boundaryless, so the positive-top-form clause of the integral obstruction theorem makes $\omega$ nonexact. It is closed by top degree. The sphere computation gives a one-dimensional $H^n$, and its nonzero class therefore generates it. [F1, F2, step 1.1] ∎

## Source locator

Lee, Theorem 17.21, pp.450–451, and Proposition 16.28, p.422, positivity of volume integration; the proof verifies nonexactness by the stated Stokes supplier.
