---
id: prop-normal-and-conormal-bundles-are-smooth-vector-bundles
kind: proposition
title: "Assuming countable choice, normal and conormal bundles are smooth vector bundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-vector-subbundle, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure, prop-cotangent-pullback-is-contravariantly-functorial, def-embedded-submanifold-and-slice-chart]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Assume $\mathrm{AC}_\omega$. If $S\subseteq M$ is an embedded submanifold, then the normal bundle
$\nu(S)=TM|_S/TS$ and the conormal bundle $N^*S\subseteq T^*M|_S$ are smooth
vector bundles over $S$.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and an embedded submanifold $S\subseteq M$.

[L0] Assuming $\mathrm{AC}_\omega$, the induced tangent and cotangent bundle charts form smooth atlases on $TM$ and $T^*M$ ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

[L1] Around each point of $S$ there is a slice chart in which $S$ is given by
$y_1=\cdots=y_c=0$ ([[def-embedded-submanifold-and-slice-chart]]).

[L2] A quotient by a smooth vector subbundle is a smooth vector bundle
([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]]).

## Proof

**Proof technique:** direct.

1.1 In a slice chart $(x_1,\dots,x_k,y_1,\dots,y_c)$ with $S=\{y=0\}$, the induced charts of [L0] make $TM|_S$ a smooth vector bundle with local frame $\partial_{x_1},\dots,\partial_{x_k},\partial_{y_1},\dots,\partial_{y_c}$, while $TS$ is spanned by the $\partial_{x_i}$. Hence $TS$ is a smooth subbundle and the classes of $\partial_{y_j}$ give a local frame of the quotient $TM|_S/TS$. By [L2], the normal bundle is smooth. [L0, L1, L2, given]

2.1 In the same slice chart, the induced cotangent charts of [L0] give the local coframe $dx_1,\dots,dx_k,dy_1,\dots,dy_c$, and the covectors annihilating $TS$ are exactly the span of $dy_1,\dots,dy_c$. These local frames vary smoothly, so the conormal bundle is a smooth subbundle of $T^*M|_S$, hence a smooth vector bundle over $S$. [L0, L1, step 1.1, algebra] ∎
