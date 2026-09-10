---
id: "def-riemannian-hodge-star"
kind: "definition"
title: "Riemannian hodge star"
deps: ["prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles", "prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form"]
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
justified_by: ["thm-hodge-star-is-a-smooth-bundle-isomorphism"]
status: "draft"
origin: "pipeline"
---

## Definition

On an oriented Riemannian $n$-manifold, for $0\le k\le n$ the **Hodge star** is the fibrewise map $*:\bigwedge^kT^*M\to\bigwedge^{n-k}T^*M$ characterized by $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ for every pair of $k$-covectors.

The pairing is the determinant-normalized one of [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]], and the positive unit volume form is [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]]. This is the ordinary, orientation-dependent star, with no orientation-line twist. Existence, uniqueness and smoothness are proved in [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]. For $n=k=0$, it multiplies by the chosen orientation sign.

## Source locator

Lee, Chapter 16, Problem 16-18(c–e), pp.437–438; the local construction is proved in the following theorem.
