---
id: "def-riemannian-speed-and-length"
kind: "definition"
title: "Riemannian speed and length"
deps: ["def-piecewise-c-one-curve-on-a-manifold", "def-pointwise-norm-and-angle-from-a-riemannian-metric"]
justified_by: ["lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
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
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
status: published
origin: "pipeline"
---

## Definition

The **Riemannian speed** on a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}$. Its **length** is $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$.

The curve convention is [[def-piecewise-c-one-curve-on-a-manifold]] and the norm is [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established by [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]].

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
