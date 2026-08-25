---
id: thm-the-classical-stokes-theorem-for-a-c2-surface-patch
kind: theorem
title: "The classical Stokes theorem for a $C^2$ patch over a finite elementary Green region"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-induced-boundary-chain-of-a-c2-surface-patch, lem-a-vector-line-integral-pulls-back-to-the-parameter-region, lem-the-stokes-integrand-identity-on-a-c2-patch, thm-greens-theorem-for-finite-unions-of-elementary-regions, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-positive-orientation-for-elementary-region-boundaries, def-divergence-and-curl-of-a-c1-vector-field, def-type-i-type-ii-and-elementary-green-regions, def-admissible-regular-parametrized-surface-patch, def-euclidean-inner-product, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.4.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), Theorem 6.19"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $(D,\varphi)$ be a $C^2$ patch over a finite elementary Green region ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]), with positive boundary chain $\partial D=(\sigma_1,\ldots,\sigma_m)$ and induced boundary chain $\varphi(\partial D)$, and let $F$ be a $C^1$ vector field on an open set $U\subseteq\mathbb R^3$ containing $\varphi[D]$. Then the circulation around the induced boundary chain equals the flux of the curl in the induced orientation:

$$\oint_{\varphi(\partial D)}F\cdot d\mathbf r=\int_D\bigl\langle(\operatorname{curl}F)\circ\varphi,\ \varphi_u\times\varphi_v\bigr\rangle.$$

The right-hand side is the flux of $\operatorname{curl}F$ through the patch in the orientation induced by $\varphi$, in the sense of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]].

## Facts & Assumptions

**Given:** The $C^2$ patch $(D,\varphi)$ over a finite elementary Green region with its supplied decomposition and positive boundary chain, and the $C^1$ field $F$ on the open $U\supseteq\varphi[D]$.

[F1] A $C^2$ patch over a finite elementary Green region is a regular patch whose parameter region carries a supplied elementary decomposition and whose parametrization is $C^2$ on an open neighbourhood of that region; the induced boundary chain is the list of arcs obtained by composing the positive boundary chain of the parameter region with the parametrization, and the circulation around it is the finite sum of the vector line integrals along those arcs; the pulled-back functions are $P^{*}=\langle F\circ\varphi,\varphi_u\rangle$ and $Q^{*}=\langle F\circ\varphi,\varphi_v\rangle$ ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]).

[F2] For a finite elementary Green region the boundary integral over the positive boundary chain is the finite sum $\int_{\partial D}G\cdot d\mathbf r=\sum_{k}\int_{\sigma_k}G\cdot d\mathbf r$, and likewise $\int_{\partial D}P\,du+Q\,dv$ for the field $(P,Q)$ ([[def-positive-orientation-for-elementary-region-boundaries]], [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F3] A finite elementary Green region is a nonempty finite union of elementary Green regions with pairwise disjoint interiors and the stated shared-arc conditions, supplied as data ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F4] For a regular patch $(D,\varphi)$ and a continuous field $G$, the flux in the orientation induced by $\varphi$ is $\int_D(G\circ\varphi)\cdot(\varphi_u\times\varphi_v)$, with the inner product of [[def-euclidean-inner-product]] ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] A regular patch's parametrization is defined and $C^1$ on an open neighbourhood of its compact Jordan parameter region ([[def-admissible-regular-parametrized-surface-patch]]), and a map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]); the curl of a $C^1$ field is that of [[def-divergence-and-curl-of-a-c1-vector-field]].

[L1] Let $O\subseteq\mathbb R^2$ be open, $\varphi:O\to\mathbb R^3$ be $C^1$, $\sigma$ a piecewise-$C^1$ path in $O$, and $F$ continuous on a set containing the image of its trace. Then $\int_{\varphi\circ\sigma}F\cdot d\mathbf r=\int_\sigma(P^{*},Q^{*})\cdot d\mathbf r$ ([[lem-a-vector-line-integral-pulls-back-to-the-parameter-region]]).

[L2] Let $O\subseteq\mathbb R^2$ be open, $\varphi:O\to\mathbb R^3$ be $C^2$ with $\varphi[O]\subseteq U$ and $F:U\to\mathbb R^3$ be $C^1$. Then $P^{*},Q^{*}$ are $C^1$ on $O$ and $\partial_uQ^{*}-\partial_vP^{*}=\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$ ([[lem-the-stokes-integrand-identity-on-a-c2-patch]]).

[L3] Let $D=D_1\cup\cdots\cup D_N$ be a finite elementary Green region with its supplied decomposition, oriented positively, and let $P,Q$ be $C^1$ on an open neighbourhood of $D$. Then $\int_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)\,dA$ ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F5] there is an open $O_0\supseteq D$ on which $\varphi$ is defined and $C^2$. The set $\varphi^{-1}[U]\cap O_0$ is open, since $\varphi$ is continuous and $U$ is open, and it contains $D$ because $\varphi[D]\subseteq U$; call it $O$. Then $O$ is an open neighbourhood of $D$ with $\varphi$ of class $C^2$ on $O$ and $\varphi[O]\subseteq U$. [given, F1, F5]

2.1 By [L2] applied on $O$, the pulled-back functions $P^{*}$ and $Q^{*}$ of [F1] are $C^1$ on $O$, an open neighbourhood of $D$, and satisfy $\partial_uQ^{*}-\partial_vP^{*}=\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$ there. [step 1.1, F1, L2]

3.1 The region $D$ is a finite elementary Green region with its supplied decomposition by [F1] and [F3], and $P^{*},Q^{*}$ are $C^1$ on the open neighbourhood $O$ of $D$ by step 2.1. So [L3] applies with the parameter names $u,v$ in place of $x,y$ and gives $$\int_{\partial D}P^{*}\,du+Q^{*}\,dv=\iint_D\bigl(\partial_uQ^{*}-\partial_vP^{*}\bigr)\,dA.$$ [step 2.1, F1, F3, L3]

4.1 By [F2] the left-hand side of step 3.1 is $\sum_{k=1}^m\int_{\sigma_k}(P^{*},Q^{*})\cdot d\mathbf r$. Each $\sigma_k$ is a piecewise-$C^1$ path with trace in $\partial D\subseteq D\subseteq O$, and $F$ is continuous on $U\supseteq\varphi[O]$, so [L1] rewrites each summand as $\int_{\varphi\circ\sigma_k}F\cdot d\mathbf r$; summing and using [F1] identifies the left-hand side with $\oint_{\varphi(\partial D)}F\cdot d\mathbf r$. [step 1.1, step 3.1, F1, F2, L1]

5.1 By step 2.1 the right-hand side of step 3.1 is $\int_D\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$, which by [F4] and [F5] is the flux of the $C^1$ field $\operatorname{curl}F$ through $(D,\varphi)$ in the orientation induced by $\varphi$. With step 4.1 this is the asserted identity. [step 2.1, step 3.1, step 4.1, F4, F5] ∎

## Remarks

- **The identity needs no regularity of the patch; the flux reading does.** Steps 3.1 and 4.1 use only that $\varphi$ is $C^2$ near $D$ and that $D$ carries an elementary decomposition. What the regularity of the patch supplies is the right to call $\int_D\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$ a flux in an orientation, which is [F4]; at parameter points where the oriented area vector vanishes there is no orientation to speak of and the equality still holds.

- **What the surface is allowed to be.** Nothing requires the patch image to be a graph over a coordinate plane, and nothing requires it to be embedded: the companion examples page checks the theorem on a lateral cylinder, which is a graph over no coordinate plane. What is required is that the parameter region be a finite elementary Green region, a hypothesis about the parameter plane and not about the image.

- **The two sides depend on the parametrization in the same way.** Replacing $\varphi$ by a reparametrization that reverses orientation negates the oriented area vector and reverses the positive boundary chain's image, so both sides change sign together; nothing here asserts independence of the presentation, which is why the theorem is stated for a patch with its parametrization rather than for a surface.
