---
id: "def-de-rham-cochain-complex"
kind: "definition"
title: "De rham cochain complex"
deps: ["def-smooth-differential-k-form", "thm-the-exterior-derivative-squares-to-zero", "def-cochain-complex-in-an-abelian-category"]
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

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary. Its real **de Rham cochain complex** is $(\Omega^\bullet(M),d)$, where $\Omega^k(M)$ is the space of smooth $k$-forms for $0\le k\le\dim M$ and is $0$ otherwise; $d$ has degree $+1$.

These are the sections in [[def-smooth-differential-k-form]]. The identity $d^{k+1}d^k=0$ in [[thm-the-exterior-derivative-squares-to-zero]] makes this an instance of [[def-cochain-complex-in-an-abelian-category]]. On the empty manifold each section space is the zero vector space. Whenever a product with $[0,1]$ is used, forms mean smooth forms up to the endpoints, locally extendible across them.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
