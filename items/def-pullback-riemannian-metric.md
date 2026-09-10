---
id: "def-pullback-riemannian-metric"
kind: "definition"
title: "Pullback of a riemannian metric as a tensor"
deps: ["def-riemannian-metric-and-riemannian-manifold", "def-pullback-of-a-covariant-tensor-field"]
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
status: "draft"
origin: "pipeline"
---

## Definition

For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$, its **pullback tensor** is $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$.

This is [[def-pullback-of-a-covariant-tensor-field]] for the tensor in [[def-riemannian-metric-and-riemannian-manifold]]. It is always symmetric and positive semidefinite; the name does not assert positive definiteness. Smoothness and the precise immersion criterion are established next.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
