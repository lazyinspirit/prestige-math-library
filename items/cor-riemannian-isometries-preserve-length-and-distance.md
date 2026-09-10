---
id: "cor-riemannian-isometries-preserve-length-and-distance"
kind: "corollary"
title: "Riemannian isometries preserve length and distance"
deps: ["def-riemannian-isometry-and-local-isometry", "prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance", "def-riemannian-speed-and-length"]
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

## Statement

Riemannian isometries preserve curve lengths and distances on connected components.

## Facts & Assumptions

**Given:** An isometry $F:(M,g)\to(N,h)$.

[F1] [[def-riemannian-isometry-and-local-isometry]]: An **isometry** $F:(M,g)\to(N,h)$ is a diffeomorphism with $F^*h=g$. A **local isometry** is a smooth local diffeomorphism with $F^*h=g$. An **isometric immersion** is a smooth immersion satisfying that same pullback identity. Use def-pullback-riemannian-metric and def-diffeomorphism-and-local-diffeomorphism-of-manifolds. Positivity forces injective differential by prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions. In equal dimensions on boundaryless manifolds, the inverse function theorem as applied in the next proposition makes a metric-preserving smooth map a local isometry. At a boundary the definition retains the local-diffeomorphism requirement. An isometric immersion need not have equal source and target dimensions.

[F2] [[prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance]]: Let $M,N$ be connected Riemannian manifolds. If smooth $F:M\to N$ satisfies $|dF_pv|_h\le c|v|_g$ for a finite $c\ge0$ and all $p,v$, then $d_h(Fp,Fq)\le c\,d_g(p,q)$.

[F3] [[def-riemannian-speed-and-length]]: The **Riemannian speed** on a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}$. Its **length** is $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$. The curve convention is def-piecewise-c-one-curve-on-a-manifold and the norm is def-pointwise-norm-and-angle-from-a-riemannian-metric. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established next.

## Proof

**Proof technique:** direct.

1.1 For each velocity $v$, $|dFv|_h^2=h(dFv,dFv)=g(v,v)$, hence the speeds of $\gamma$ and $F\gamma$ agree. Integrating piecewise gives $L_h(F\gamma)=L_g(\gamma)$. [F1, F3, given]

2.1 A diffeomorphism carries connected components bijectively to components: a component’s image is connected, and applying the inverse to any larger connected set proves maximality. On each such pair the differential bounds for $F$ and $F^{-1}$ have $c=1$. The Lipschitz result gives both $d_h(Fp,Fq)\le d_g(p,q)$ and $d_g(p,q)\le d_h(Fp,Fq)$, proving equality. [F1, F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
