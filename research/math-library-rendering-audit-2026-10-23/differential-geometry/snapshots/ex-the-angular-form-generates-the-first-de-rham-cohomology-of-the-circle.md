---
id: "ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle"
kind: "example"
title: "The angular form generates the first de rham cohomology of the circle"
deps: ["thm-de-rham-cohomology-of-spheres", "prop-explicit-de-rham-mayer-vietoris-connecting-class", "cor-a-nonzero-period-obstructs-exactness-and-bounding"]
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
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Under countable choice, $\alpha=(x\,dy-y\,dx)/(2\pi)|_{S^1}$ has period one and its class generates $H^1_{\mathrm{dR}}(S^1)$.

## Facts & Assumptions

**Given:** Assume countable choice. The counterclockwise oriented unit circle and the displayed one-form.

[F1] [[thm-de-rham-cohomology-of-spheres]]: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

[F3] [[cor-a-nonzero-period-obstructs-exactness-and-bounding]]: Let $S\hookrightarrow M$ be an oriented compact boundaryless embedded $k$-submanifold, $k\geq1$, and let $\omega$ be a closed smooth $k$-form on $M$. If $\int_S\omega\neq0$, then $\omega$ is not exact on $M$, and $S$ cannot be the induced oriented boundary of a compact embedded $(k+1)$-submanifold of $M$.

## Verification

**Proof technique:** direct.

1.1 The form is smooth and closed because two-forms on a one-manifold vanish. For $\gamma(t)=(\cos t,\sin t)$, $0\le t\le2\pi$, substitution gives $\gamma^*\alpha=dt/(2\pi)$, hence $\int_{S^1}\alpha=1$. [given, algebra]

2.1 The circle is compact, oriented, boundaryless and embedded, and the form is closed, so its nonzero period obstructs exactness. Since the sphere theorem gives $\dim H^1(S^1)=1$, this nonzero class is a basis. [F1, F3, step 1.1] ∎

## Source locator

Lee, angular form (17.1), p.441, and Theorem 17.21, pp.450–451; the period is calculated explicitly.
