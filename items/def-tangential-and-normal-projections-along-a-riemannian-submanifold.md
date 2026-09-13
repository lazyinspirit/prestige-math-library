---
id: def-tangential-and-normal-projections-along-a-riemannian-submanifold
kind: definition
title: Tangential and normal projections along a Riemannian submanifold
status: draft
origin: pipeline
deps: ["def-normal-and-conormal-bundles-of-an-embedded-submanifold", "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle", "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, definition of the orthogonal normal bundle and normal projection, printed pages 23–25
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Section 14.1, normal bundle, orthogonal decomposition, and projection maps, printed page 101
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M^n\subseteq\overline M^m$ be an embedded
submanifold of a Riemannian manifold $(\overline M,\overline g)$, and equip
$M$ with the induced metric. Inside the restricted ambient tangent bundle set

$$\nu M:=(TM)^\perp=\coprod_{p\in M}\{\xi\in T_p\overline M:\overline g_p(\xi,u)=0\text{ for every }u\in T_pM\}.$$

This is a smooth vector subbundle by
[[prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]], and the
ambient metric identifies it with the quotient normal bundle of
[[def-normal-and-conormal-bundles-of-an-embedded-submanifold]] by
[[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]].
The latter supplier assumes $\mathrm{AC}_\omega$ in order to construct the
smooth restricted ambient tangent bundle; that is the exact choice use
inherited here. The fibrewise orthogonal decompositions assemble as

$$T\overline M|_M=TM\oplus\nu M.$$

For a smooth vector field $V$ **along $M$**, meaning a smooth section of
$T\overline M|_M$, define its **tangential component** and **normal
component** by the unique decomposition

$$V=V^\top+V^\perp,\qquad V^\top\in\Gamma(TM),\qquad V^\perp\in\Gamma(\nu M).$$

Equivalently, $V^\top=\pi^\top V$ and $V^\perp=\pi^\perp V$, where
$\pi^\top$ and $\pi^\perp$ are the two orthogonal bundle projections. They
are smooth: in a local smooth orthonormal frame
$(e_1,\ldots,e_n,e_{n+1},\ldots,e_m)$ adapted so that the first $n$ vectors
span $TM$, one has

$$\pi^\top(V)=\sum_{i=1}^n\overline g(V,e_i)e_i,\qquad \pi^\perp(V)=\sum_{\alpha=n+1}^m\overline g(V,e_\alpha)e_\alpha,$$

whose coefficient functions are smooth. Empty sums cover zero-dimensional
tangent or normal fibres, including the codimension-zero case. These are
canonical metric projections and require no choice of a global frame.
