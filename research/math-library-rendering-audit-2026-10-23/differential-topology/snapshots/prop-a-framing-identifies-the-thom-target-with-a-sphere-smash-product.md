---
id: prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product
kind: proposition
title: "A framing identifies the Thom target with a sphere smash product"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-framing-of-a-normal-bundle
  - def-countable-choice
  - prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product
  - def-disk-bundle-sphere-bundle-and-thom-space
  - lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism
  - def-smash-product-of-based-spaces
  - prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms
  - def-compactly-generated-based-space-and-well-pointed-object
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 23, section 5, printed pp.194-196, disk-sphere Thom models and the suspension formula"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "equation (2.34) and Theorem 2.35, printed pp.21-22"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, proof of Theorem C, printed pp.46-48"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]] is inherited through the
normal-bundle structure). Let $X$ be a closed smooth manifold and let
$(N,\varphi)$ be a closed framed codimension-$k$ submanifold of $X$,
$k\ge0$, with normal bundle $\nu=\nu(N\subseteq X)$
([[def-framing-of-a-normal-bundle]]).

Then $\varphi$ induces a based homeomorphism
$$\Phi_\varphi:\operatorname{Th}(\nu)\longrightarrow N_+\wedge S^k,$$
natural in the framed data, and the composite of any based map
$c:X_+\to\operatorname{Th}(\nu)$ with the based projection
$N_+\wedge S^k\to S^0\wedge S^k=S^k$ is a based map $X_+\to S^k$. The
homeomorphism is independent of the metric used to form
$\operatorname{Th}(\nu)$ up to the canonical radial homeomorphisms of
[[lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism]].
For $k=0$, $\operatorname{Th}(\nu)=N_+\cong N_+\wedge S^0$ and the sphere-valued target is $S^0$. For $N=\varnothing$, the Thom space and $N_+\wedge S^k$ are one-point spaces, and the composite $X_+\to S^k$ is constant at the basepoint.

## Facts & Assumptions

**Given:** A closed framed codimension-$k$ submanifold $(N,\varphi)$ of the closed smooth manifold $X$, its quotient normal bundle $\nu=TX|_N/TN$, and a metric $h$ on $\nu$ when a Thom space is formed.

[F1] A framing is a smooth bundle isomorphism $\varphi:\nu\to N\times\mathbb R^k$ over $\mathrm{id}_N$; rank zero and $N=\varnothing$ are included and the framing is then unique ([[def-framing-of-a-normal-bundle]]).

[F2] With the product metric and supplied trivialization, $\operatorname{Th}(B\times\mathbb R^r)\cong B_+\wedge S^r$ naturally in $B$, including the rank-zero and empty-base cases ([[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]]).

[F3] The Thom space $\operatorname{Th}_h(E)=D_h(E)/S_h(E)$ is formed from the metric disk and sphere bundles, with $X/\varnothing=X_+$ convention and the nonbasepoint stratum the open disk bundle ([[def-disk-bundle-sphere-bundle-and-thom-space]]).

[F4] Different metrics on $E$ are compared by a canonical based homeomorphism, and these comparisons compose exactly ([[lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism]]).

[F5] For based CGWH spaces the smash product is the kified quotient of the product by the wedge, it is associative, symmetric and unital up to canonical based homeomorphisms $S^0\wedge Z\cong Z$, and these homeomorphisms satisfy the usual coherence identities ([[def-smash-product-of-based-spaces]], [[prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms]], [[def-compactly-generated-based-space-and-well-pointed-object]]).

## Proof

1.1 (The framing carries one Thom model to the other.) Fix a metric $h$ on $\nu$ and let $\varphi_*h$ be the metric on $N\times\mathbb R^k$ obtained by transporting $h$ across the bundle isomorphism $\varphi$. Since $\varphi$ is a fibrewise linear homeomorphism over $\mathrm{id}_N$, it maps $D_h(\nu)$ onto $D_{\varphi_*h}(N\times\mathbb R^k)$ and $S_h(\nu)$ onto $S_{\varphi_*h}(N\times\mathbb R^k)$; passing to the quotients it induces a homeomorphism $\operatorname{Th}_h(\nu)\to\operatorname{Th}_{\varphi_*h}(N\times\mathbb R^k)$ carrying basepoint to basepoint. This map is based and functorial: for $N=\varnothing$ it is the unique map of one-point spaces, while for $k=0$ it is the identity on $N_+$. [F1, F3, construct]

2.1 (The trivial model and metric independence.) By [F2] applied to the trivial bundle $N\times\mathbb R^k$ there is a canonical based homeomorphism $\operatorname{Th}_{\mathrm{prod}}(N\times\mathbb R^k)\cong N_+\wedge S^k$ for the product metric, natural in $N$. Composing with step 1.1 and the exact metric comparison $r:\operatorname{Th}_{\varphi_*h}\cong\operatorname{Th}_{\mathrm{prod}}$ from [F4] gives a based homeomorphism $\Phi_\varphi:\operatorname{Th}_h(\nu)\to N_+\wedge S^k$. If $h,h'$ are two metrics on $\nu$, the two composites differ by the canonical radial homeomorphism $r'\circ r^{-1}$ of [F4], which is exactly the asserted independence: the construction is natural in the framing, because a bundle isomorphism intertwines the transported metrics and hence the two routes through the framing isomorphism and metric comparison. For $k=0$, $N\times\mathbb R^0=N$ and [F2] gives $\operatorname{Th}(N)=N_+\cong N_+\wedge S^0$; for $N=\varnothing$, all four spaces are the one-point based space and all maps are the identity. [F2, F4, step 1.1]

3.1 (The sphere-valued collapse.) Let $p:N_+\wedge S^k\to S^0\wedge S^k$ be the smash of the based collapse $N_+\to S^0$ (which sends $N$ to the nonbasepoint) with $\mathrm{id}_{S^k}$, followed by the canonical unitality homeomorphism $S^0\wedge S^k\cong S^k$ of [F5]; the composite $p$ is a based map. For any based $c:X_+\to\operatorname{Th}(\nu)$, the composite $p\circ\Phi_\varphi\circ c:X_+\to S^k$ is based because each factor is based, and it is independent of which unitality homeomorphism is used by the coherence clause of [F5]. [F5, step 1.1, step 2.1]

4.1 (Conclusion.) Steps 1.1-3.1 construct the based homeomorphism $\Phi_\varphi$, prove its naturality in the framed data, its metric independence up to the canonical radial homeomorphism, and the based sphere-valued composite with any based map out of $X_+$. The degenerate cases $k=0$ and $N=\varnothing$ were treated in steps 1.1-2.1. Nothing beyond the inherited $\mathrm{AC}_\omega$ is used: all maps are the canonical ones induced by $\varphi$ and the supplied metrics. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
