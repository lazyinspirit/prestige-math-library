---
id: "def-pointwise-norm-and-angle-from-a-riemannian-metric"
kind: "definition"
title: "Pointwise norm and angle from a riemannian metric"
deps: ["def-riemannian-metric-and-riemannian-manifold", "thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces"]
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

The **pointwise norm** is $|v|_g=\sqrt{g(v,v)}$. For nonzero $v,w$ in the same tangent space, the **angle** is the unique $\theta\in[0,\pi]$ with $\cos\theta=g(v,w)/(|v|_g|w|_g)$.

Positive definiteness in [[def-riemannian-metric-and-riemannian-manifold]] makes both denominators positive. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] places the quotient in $[-1,1]$, on which the inverse of cosine restricted to $[0,\pi]$ is defined. Angles $0$ and $\pi$ are included. The norm of zero is zero; no angle is assigned when either vector is zero.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
