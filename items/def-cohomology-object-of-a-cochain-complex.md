---
id: def-cohomology-object-of-a-cochain-complex
kind: definition
title: "Cohomology object of a cochain complex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cochain-complex-in-an-abelian-category,
       lem-the-boundary-subobject-factors-through-the-cycle-subobject,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra, Definition 2.7.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Definition

Let $C^\bullet$ be a cochain complex. Its **$n$th cocycle subobject** is
$$Z^n(C):=\ker(d^n)\hookrightarrow C^n,$$
and its **$n$th coboundary subobject** is
$$B^n(C):=\operatorname{im}(d^{n-1})\hookrightarrow C^n.$$

Reading $C^\bullet$ as a chain complex by the reindexing convention of
[[def-cochain-complex-in-an-abelian-category]], the morphism
$d^n d^{n-1}=0$ is exactly the chain-complex relation in degree $-n$. Hence
[[lem-the-boundary-subobject-factors-through-the-cycle-subobject]] supplies a
canonical monomorphism $B^n(C)\to Z^n(C)$.

The **$n$th cohomology object** is its cokernel:
$$H^n(C):=\operatorname{coker}(B^n(C)\to Z^n(C)).$$

Equivalently, $H^n(C)=Z^n(C)/B^n(C)$.
