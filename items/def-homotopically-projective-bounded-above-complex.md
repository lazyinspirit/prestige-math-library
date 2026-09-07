---
id: "def-homotopically-projective-bounded-above-complex"
kind: "definition"
title: "Homotopically projective bounded above complex"
deps: ["def-hom-complex-of-chain-complexes", "thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex", "def-bounded-bounded-below-and-bounded-above-complex"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://arxiv.org/pdf/1206.6632v1"
      title: "6.5.1 and 13.1 (K-injective definition); cochain convention"
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

For cochain complexes put $\underline{\operatorname{Hom}}^r(P,A)=\prod_n\operatorname{Hom}_{\mathcal A}(P^n,A^{n+r})$, with $(du)^n=d_Au^n-(-1)^ru^{n+1}d_P$. This is the reindexing of [[def-hom-complex-of-chain-complexes]]. A complex $P$ is **homotopically projective**, or **K-projective**, if $\operatorname{Hom}_K(P,A[r])=0$ for every acyclic complex $A$ and every integer $r$. Equivalently $\underline{\operatorname{Hom}}(P,A)$ is acyclic: the degree-zero Hom/homotopy identification of [[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]], applied after shifting $A$, identifies these groups with its cohomology (a boundary differs only by the invertible sign $(-1)^r$).

The bounded-above case additionally requires $P^n=0$ for all sufficiently large $n$, as in [[def-bounded-bounded-below-and-bounded-above-complex]]. Boundedness is not part of the general K-projective predicate. Nor is termwise projectivity: a contractible complex has zero Hom from it in $K$ and is K-projective irrespective of its terms.
