---
id: def-symmetric-and-alternating-covariant-tensor-subbundles
kind: definition
title: "Symmetric and alternating covariant tensor subbundles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-r-s-tensor-bundle,
       def-symmetrization-and-alternation-operators]
justified_by: [thm-symmetric-and-alternating-images-are-smooth-subbundles]
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

Let $M$ be a smooth manifold. For $k\ge 0$, let $T^0_kM$ be the covariant tensor bundle. Its **symmetric
subbundle** and **alternating subbundle** are the fibrewise subsets

$$ \operatorname{Sym}^k(T^*M):=\coprod_{p\in M}\operatorname{Sym}^k(T_p^*M),\qquad \bigwedge^kT^*M:=\coprod_{p\in M}\operatorname{Alt}^k(T_pM), $$

where the right-hand sides use the fibrewise symmetrization and alternation
operators.
