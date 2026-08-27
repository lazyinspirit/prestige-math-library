---
id: def-normal-monomorphism-and-conormal-epimorphism
kind: definition
title: "Normal monomorphisms and conormal epimorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monomorphism-and-epimorphism, def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Definition 2.2"
      url: "https://arxiv.org/pdf/1901.08591"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Definition

Let $m:A\to B$ be a monomorphism and let $e:A\to B$ be an epimorphism
([[def-monomorphism-and-epimorphism]]) in a category with zero morphisms and the
relevant kernels or cokernels
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

The monomorphism $m$ is **normal** when it is a kernel of some morphism out of
$B$. Dually, the epimorphism $e$ is **conormal** when it is a cokernel of some
morphism into $A$.

So a normal monomorphism is not merely left-cancellable: it is the inclusion of
the part of the codomain killed by a specified morphism. A conormal epimorphism
is the dual quotient map.
