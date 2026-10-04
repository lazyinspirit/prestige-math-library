---
id: lem-boundary-stable-tangent-splits-off-a-trivial-line
kind: lemma
title: The boundary stable tangent bundle splits off a trivial line
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary
  - prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane
  - def-inward-outward-and-boundary-tangent-vectors
  - thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles
  - prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism
  - def-smooth-map-between-manifolds-with-boundary
  - def-countable-choice
  - def-pullback-vector-bundle-and-pullback-section
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Proof of Theorem 4.9, tangent restriction splitting by an outward normal, printed p.52; section 17, outward-normal-first orientation and Collar Theorem 17.1, printed p.200"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, $\\tau W|_{\\partial W}\\cong\\tau\\partial W\\oplus\\varepsilon^1$, printed p.246"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used exactly through
the global inward vector field of
[[thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary]].
Let $W$ be a smooth manifold with boundary $M=\partial W$
([[def-smooth-map-between-manifolds-with-boundary]]), let
$i:M\to W$ be the inclusion, which is a closed embedding of a smooth
$n$-manifold ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]),
and let $X$ be a smooth vector field on a neighbourhood of $M$ in $W$ that is
inward at every point of $M$
([[def-inward-outward-and-boundary-tangent-vectors]]).

Then the map
$$\Phi:TM\oplus\varepsilon^1\longrightarrow TW|_M,\qquad \Phi(v,t)=di(v)+t\,X|_M,$$
is an isomorphism of smooth real vector bundles over $M$
([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]],
[[def-pullback-vector-bundle-and-pullback-section]]). Consequently
$TW|_M\cong TM\oplus\varepsilon^1$ and the normal line $TW|_M/TM$ is trivial.
Since $\mathrm{AC}_\omega$ supplies such an $X$ for every smooth manifold with
boundary, the splitting holds for every smooth manifold with boundary. In
particular the stabilization of $TM$ by one trivial line is identified with the
restriction $TW|_M$; this is the identification used by the characteristic
number propositions of this page.

## Facts & Assumptions

**Given:** A smooth manifold $W$ with boundary $M=\partial W$, the inclusion $i:M\to W$, a neighbourhood of $M$ carrying a smooth vector field $X$ inward along $M$, and the map $\Phi:TM\oplus\varepsilon^1\to TW|_M$, $\Phi(v,t)=di(v)+tX$. Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[F1] A vector at $p\in\partial W$ is inward when its last coordinate in a boundary chart is positive, outward when negative, and boundary-tangent when zero; the alternatives are chart independent ([[def-inward-outward-and-boundary-tangent-vectors]]).

[F2] For $p\in M$ the differential $di_p$ identifies $T_pM$ with the boundary-tangent hyperplane of $T_pW$ ([[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]).

[F3] Here $TW|_M$ denotes the pullback $i^*TW$, not restriction to an open subset ([[def-pullback-vector-bundle-and-pullback-section]]). In a boundary chart, the tangent-bundle trivialization restricts to its face and the bundle transitions are the ambient tangent transitions restricted to that face; they are smooth, so this gives a smooth bundle over $M$ ([[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]]). The inclusion differential and restricted section are smooth in these charts. With the Whitney sum and trivial line bundle, $\Phi$ is therefore a smooth fibrewise-linear bundle map ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F4] A smooth vector bundle map over a diffeomorphism whose fibre maps are bijective is a vector bundle isomorphism ([[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]]).

[F5] Assuming $\mathrm{AC}_\omega$, every smooth manifold with boundary admits a smooth vector field on a neighbourhood of its boundary that is inward at every boundary point ([[thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary]]).

## Proof

1.1 ($\Phi$ is a smooth bundle map.) The differential $di:TM\to i^*TW$ is a smooth bundle map and $X|_M$ is a smooth section by [F3], and the trivial line bundle is smooth; forming sums and scalar multiples fibrewise, $\Phi(v,t)=di(v)+tX|_M$ is a smooth map of total spaces whose restriction to each fibre is linear and whose base map is the identity. [F3]

1.2 (Fibrewise bijectivity.) Fix $p\in M$. By [F2], $di_p$ is injective with image the boundary-tangent hyperplane $H_p\subseteq T_pW$, a linear subspace of dimension $n=\dim M$. By [F1], $X(p)$ is inward at $p$, so its last boundary-chart coordinate is positive and $X(p)\neq0$; in particular $X(p)\notin H_p$, since elements of $H_p$ have last coordinate zero. Hence $H_p\cap\mathbb R X(p)=\{0\}$, and $\dim H_p+1=n+1=\dim T_pW$ gives $T_pW=H_p\oplus\mathbb R X(p)$. Therefore $\Phi_p:H_p\oplus\mathbb R\to T_pW$, $(v,t)\mapsto v+tX(p)$, is a linear isomorphism. [F1, F2]

2.1 ($\Phi$ is a bundle isomorphism.) The base map of $\Phi$ is the identity, a diffeomorphism, and by step 1.2 every fibre map $\Phi_p$ is bijective; step 1.1 makes $\Phi$ a smooth bundle map. By [F4], $\Phi$ is an isomorphism of smooth vector bundles. Hence $TW|_M\cong TM\oplus\varepsilon^1$. Moreover $\Phi$ carries the subbundle $0\oplus\varepsilon^1$ isomorphically onto a line subbundle complementary to $di(TM)$; composing with the quotient projection identifies $\varepsilon^1$ with $TW|_M/di(TM)$, so the normal line $TW|_M/TM$ is trivial and is spanned by $X|_M$. [F4, step 1.1, step 1.2]

3.1 (Every manifold with boundary; assembly.) Let $N$ be an arbitrary smooth manifold with boundary. By [F5] there is, under $\mathrm{AC}_\omega$, a smooth vector field on a neighbourhood of $\partial N$ inward at every boundary point, and steps 1.1–2.1 apply to it; hence $T(\partial N)\oplus\varepsilon^1\cong TN|_{\partial N}$ for every smooth manifold with boundary $N$. Applied to $N=W$ this is the asserted splitting, and it identifies the stabilization of $TM$ by one trivial line with $TW|_M$. The argument used $\mathrm{AC}_\omega$ only in the selection of the inward field in [F5]; no other choice is made. [F5, step 2.1] ∎
