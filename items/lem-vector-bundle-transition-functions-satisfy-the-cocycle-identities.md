---
id: lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities
kind: lemma
title: "Vector bundle transition functions satisfy the cocycle identities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-bundle-chart-and-transition-function]
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

For vector bundle charts on a rank-$r$ bundle, the transition functions satisfy

$$g_{\alpha\alpha}(p)=I_r, \qquad g_{\gamma\alpha}(p)=g_{\gamma\beta}(p)g_{\beta\alpha}(p)$$

on every overlap where the expressions are defined.

## Facts & Assumptions

**Given:** Three vector bundle charts $(U_\alpha,\Phi_\alpha)$,
$(U_\beta,\Phi_\beta)$, and $(U_\gamma,\Phi_\gamma)$ on one rank-$r$ bundle.

[L1] In a vector bundle chart overlap,
$\Phi_\beta\circ\Phi_\alpha^{-1}(p,v)=(p,g_{\beta\alpha}(p)v)$ with
$g_{\beta\alpha}(p)\in GL(r,\mathbb R)$
([[def-vector-bundle-chart-and-transition-function]]).

## Proof

**Proof technique:** direct.

1.1 On $U_\alpha$, the map $\Phi_\alpha\circ\Phi_\alpha^{-1}$ is the identity, so [L1] gives $(p,g_{\alpha\alpha}(p)v)=(p,v)$ for every $v\in\mathbb R^r$. Hence $g_{\alpha\alpha}(p)=I_r$. [L1, given]

2.1 On a triple overlap, $\Phi_\gamma\circ\Phi_\alpha^{-1}=(\Phi_\gamma\circ\Phi_\beta^{-1})\circ(\Phi_\beta\circ\Phi_\alpha^{-1})$. Applying [L1] to $(p,v)$ gives $(p,g_{\gamma\alpha}(p)v)=(p,g_{\gamma\beta}(p)g_{\beta\alpha}(p)v)$ for every $v$, so $g_{\gamma\alpha}(p)=g_{\gamma\beta}(p)g_{\beta\alpha}(p)$. [L1, step 1.1, algebra] ∎