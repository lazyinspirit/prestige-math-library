---
id: def-symmetrization-and-alternation-operators
kind: definition
title: "Symmetrization and alternation operators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-permutation-action-on-covariant-tensors,
       thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $T:V^k\to\mathbb R$ be covariant of degree $k$. Its **symmetrization** and
**alternation** are

$$ \operatorname{Sym}(T):=\frac1{k!}\sum_{\sigma\in S_k}\sigma\cdot T,\qquad \operatorname{Alt}(T):=\frac1{k!}\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)\,\sigma\cdot T. $$
