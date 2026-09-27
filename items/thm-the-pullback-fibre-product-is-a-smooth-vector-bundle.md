---
id: thm-the-pullback-fibre-product-is-a-smooth-vector-bundle
kind: theorem
title: "The pullback fibre product is a smooth vector bundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-vector-bundle-as-a-fibre-product, def-vector-bundle-chart-and-transition-function, def-restriction-of-a-vector-bundle, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, prop-second-countability-is-hereditary, lem-t0-t1-and-hausdorff-are-hereditary, def-smooth-fibre-bundle-and-local-trivialization]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (thm-the-pullback-fibre-product-is-a-smooth-vector-bundle). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

If $\pi:E\to M$ is a smooth rank-$r$ vector bundle and $f:N\to M$ is smooth,
then the fibre product $f^*E$ is a smooth rank-$r$ vector bundle over $N$.

## Facts & Assumptions

**Given:** A smooth rank-$r$ vector bundle $\pi:E\to M$ and a smooth map $f:N\to M$.

[L1] A vector bundle chart on $E$ over $U\subseteq M$ is a diffeomorphism $E|_U\cong U\times\mathbb R^r$ with transition functions of the form $(p,v)\mapsto(p,g_{\beta\alpha}(p)v)$ ([[def-vector-bundle-chart-and-transition-function]]).

[L2] The restriction $E|_U$ is the same total space over the smaller open base ([[def-restriction-of-a-vector-bundle]]).

[L3] Products of smooth manifolds have the product topology and smooth structure ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]). Hausdorffness and second countability pass to subspaces ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]]).

[L4] A smooth fibre bundle has a smooth manifold total space, a smooth surjective projection, and smooth local trivializations ([[def-smooth-fibre-bundle-and-local-trivialization]]).

## Proof

**Proof technique:** direct.

1.1 Give $f^*E=\{(q,e)\in N\times E:f(q)=\pi(e)\}$ the subspace topology from the product manifold $N\times E$ of [L3]. It is Hausdorff and second countable by [L3]. For a bundle chart $\Phi_\alpha:E|_{U_\alpha}\to U_\alpha\times\mathbb R^r$, put $V_\alpha=f^{-1}(U_\alpha)$, an open subset of $N$. The pullback over $V_\alpha$ is open in $f^*E$ because it is the intersection with $V_\alpha\times E$. [L1, L2, L3, given, construct]

2.1 For $(q,e)$ over $V_\alpha$, define $\widetilde\Phi_\alpha(q,e)=(q,v)$ when $\Phi_\alpha(e)=(f(q),v)$. Its inverse is explicitly $(q,v)\mapsto(q,\Phi_\alpha^{-1}(f(q),v))$. The forward map is continuous as the restriction of the product of the identity on $N$ with $\operatorname{pr}_2\circ\Phi_\alpha$; the inverse is continuous because $q\mapsto f(q)$ and $\Phi_\alpha^{-1}$ are continuous. Thus $\widetilde\Phi_\alpha$ is a homeomorphism onto the open product manifold $V_\alpha\times\mathbb R^r$. These homeomorphisms cover $f^*E$. [L1, L2, L3, step 1.1]

3.1 On overlaps, $\widetilde\Phi_\beta\circ\widetilde\Phi_\alpha^{-1}(q,v)=(q,g_{\beta\alpha}(f(q))v)$. This is smooth because $g_{\beta\alpha}$ and $f$ are smooth, and it is linear in each fibre coordinate. Combine the homeomorphisms of step 2.1 with product charts on $V_\alpha\times\mathbb R^r$; their smooth overlap maps give a smooth atlas on the already Hausdorff second-countable space $f^*E$. In these charts the projection $(q,e)\mapsto q$ is the first projection, hence smooth and surjective, and each fibre is linearly identified with $E_{f(q)}\cong\mathbb R^r$. Consequently [L4] gives a smooth rank-$r$ vector bundle over $N$. Empty bases and rank zero obey the same construction. [L1, L3, L4, step 1.1, step 2.1] ∎
