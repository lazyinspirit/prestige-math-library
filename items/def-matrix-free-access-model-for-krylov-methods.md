---
id: def-matrix-free-access-model-for-krylov-methods
kind: definition
title: "The matrix-free access model for Krylov methods"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrix-product-and-identity-matrix]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Definition

In the **matrix-free access model** for a Krylov method, the algorithm does not
need the entries of $A$ as stored data. It only needs:

1. the ability to apply $A$ to chosen vectors $v\mapsto Av$;
2. vector additions and scalar multiples;
3. inner products and norms, when the method orthogonalizes or measures a
   residual.

Thus Arnoldi and GMRES may be implemented from an operator routine for
$v\mapsto Av$ without explicitly assembling the full matrix.
