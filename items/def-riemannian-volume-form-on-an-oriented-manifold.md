---
id: "def-riemannian-volume-form-on-an-oriented-manifold"
kind: "definition"
title: "Riemannian volume form on an oriented manifold"
deps: ["lem-the-riemannian-volume-density-is-coordinate-independent", "def-oriented-smooth-manifold-and-oriented-chart"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
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
status: "draft"
origin: "pipeline"
---

## Definition

On an oriented Riemannian $n$-manifold, the **Riemannian volume form** is $\operatorname{vol}_g=\sqrt{\det G_x}\,dx^1\wedge\cdots\wedge dx^n$ in positively oriented charts for $n\ge1$. For $n=0$ it is the supplied orientation sign $\varepsilon(p)\in\{1,-1\}$ at each point.

[[def-oriented-smooth-manifold-and-oriented-chart]] supplies the orientation. On positive-chart overlaps the Jacobian determinant is positive, so the density calculation in [[lem-the-riemannian-volume-density-is-coordinate-independent]] is also the top-form transformation law. Thus the formula glues, and $|\operatorname{vol}_g|=\mu_g$. Reversing orientation negates the form but leaves the density unchanged, also in dimension zero.

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.
