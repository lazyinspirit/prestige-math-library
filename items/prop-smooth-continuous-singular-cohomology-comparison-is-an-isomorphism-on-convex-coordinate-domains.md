---
id: "prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-domains"
kind: "proposition"
title: "Smooth continuous singular cohomology comparison is an isomorphism on convex coordinate domains"
deps: ["cor-singular-cohomology-is-homotopy-invariant", "prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps", "prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains", "def-restriction-from-continuous-to-smooth-singular-cochains"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 20; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $W$ be a coordinate domain diffeomorphic to a nonempty convex open subset of $\mathbb R^n$. Then restriction $H^k(\rho_W):H^k_{\mathrm{sing}}(W;\mathbb R)\to H_\infty^k(W;\mathbb R)$ is an isomorphism. Both sides are $\mathbb R$ for $k=0$ and zero otherwise. The same assertion holds for a convex relatively open half-space domain, using the strict target-valued smooth-simplex convention. Empty domains have zero groups and the unique comparison isomorphism.

## Facts & Assumptions

**Given:** The convex coordinate image $B$ and its diffeomorphism with $W$.

[F1] Ordinary real cohomology is homotopy invariant ([[cor-singular-cohomology-is-homotopy-invariant]]).

[F2] Smooth maps induce smooth-chain and cochain functors ([[prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps]]).

[F3] Flattened smooth homotopies give strict smooth prisms with the original endpoint chain maps ([[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]]).

[F4] Restriction is natural for smooth maps and is the identity complex map on a point ([[def-restriction-from-continuous-to-smooth-singular-cochains]]).

## Proof

1.1 If $B$ is nonempty fix one $b\in B$ and let $H(x,t)=(1-t)x+tb$. Convexity makes this a homotopy in $B$ from identity to the constant map. It is smooth, also in half-space coordinates. Transporting through the coordinate diffeomorphism gives a smooth contraction of $W$ to its chosen point. This uses a single point, not a choice indexed by all domains. [given, F2]

2.1 By [F3], flattening time gives a smooth-chain prism $P$ from the identity to the constant-map chain operator. Dual precomposition $K^k\varphi=\varphi P_{k-1}$ gives the cochain homotopy equation $c^*-1=\delta K+K\delta$, with $K^0=0$. Thus on smooth cohomology the maps induced by the point inclusion $e:\{*\}\to W$ and projection $p:W\to\{*\}$ are inverse, since $pe=1$ and $ep$ is the contracted constant map. [F2, F3, step 1.1, algebra]

3.1 On ordinary cohomology the same $e,p$ induce inverse maps by [F1]. The squares in [F4] commute with these point maps, and restriction on the point complex is the identity. Therefore $H(\rho_W)$ is an isomorphism. On a point the unnormalized cochain differential is zero in even degree and identity in odd degree, so its cohomology is $\mathbb R$ only in degree zero. This gives the asserted groups for $W$. [F1, F4, step 1.1, step 2.1]

4.1 If $B$ is empty all complexes and maps are zero. When $n=0$ the nonempty convex domain is one point and the same identity applies. Constant and degenerate simplices are retained throughout; step 2.1 uses the full signed prism, not a normalized quotient. In half-space charts raw time could leave the target beyond an endpoint, which is exactly why step 2.1 uses the flattened target-valued prism. Negative degrees vanish, and no AC is used. [F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
