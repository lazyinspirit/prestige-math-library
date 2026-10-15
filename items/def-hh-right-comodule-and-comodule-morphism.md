---
id: def-hh-right-comodule-and-comodule-morphism
kind: definition
title: "Right comodules, comodule maps, and subcomodules"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, def-linear-map]
justified_by: [lem-hh-comodule-kernels-quotients-and-coefficient-identities]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§3.3, Definition 3.21 and Definition 3.25, printed pp.36–38"
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, printed pp.2–3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Use the convention of [[def-hh-scalar-and-tensor-conventions]]: $k$ is a field and every tensor product is over $k$, with parentheses in iterated tensors suppressed only through [[lem-hh-tensor-coherence-on-elementary-tensors]].

Let $C$ be a coalgebra over $k$ with comultiplication $\Delta:C\to C\otimes C$ and counit $\varepsilon:C\to k$ as in [[def-hh-coalgebra-and-coalgebra-map]]. A **right $C$-comodule** is a $k$-vector space $M$ with a $k$-linear map, called its coaction,
$$ \rho_M:M\longrightarrow M\otimes C, $$
such that
$$ (\rho_M\otimes\operatorname{id}_C)\rho_M=(\operatorname{id}_M\otimes\Delta)\rho_M, \qquad (\operatorname{id}_M\otimes\varepsilon)\rho_M=\operatorname{id}_M. $$
In the second equality the target $M\otimes k$ is identified with $M$ by the unit isomorphism in the tensor conventions. The direction is part of the convention: a right comodule has its coalgebra factor on the right.

If $(M,\rho_M)$ and $(N,\rho_N)$ are right $C$-comodules, a **right-comodule map** is a linear map $f:M\to N$ satisfying
$$ \rho_N f=(f\otimes\operatorname{id}_C)\rho_M. $$

A **subcomodule** of $M$ means an injective right-comodule map $i:N\to M$, considered up to isomorphism over $M$. We identify $N$ with its image as a subspace only when the induced coaction on that image has been constructed. This definition does not silently assume that tensoring an arbitrary vector-space inclusion preserves injectivity.

## Remarks

The draft supplier [[def-hh-coalgebra-and-coalgebra-map]] is present in batch 1. It specifies the coalgebra equations using the same associator and unit maps fixed above.
