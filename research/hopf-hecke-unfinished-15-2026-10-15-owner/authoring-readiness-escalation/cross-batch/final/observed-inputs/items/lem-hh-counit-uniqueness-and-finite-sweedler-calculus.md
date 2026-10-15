---
id: lem-hh-counit-uniqueness-and-finite-sweedler-calculus
kind: lemma
title: "Counit uniqueness and finite Sweedler calculus"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, prop-functoriality-of-module-tensor-products, lem-hh-tensor-coherence-on-elementary-tensors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Definition 3.3 (Sweedler notation), printed p. 13."
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, §1.4, Sweedler Notation, printed pp. 8–9."
---

## Statement

For a fixed comultiplication $\Delta:C\to C\otimes C$, there is at most one counit. Also, Sweedler notation records a finite tensor sum, not a list of canonical summands: every contraction written from that notation must be the value of a well-defined linear map on the tensor.

## Facts & Assumptions

**Given:** A vector space $C$ over a field $k$, a comultiplication $\Delta:C\to C\otimes C$, and two maps $\varepsilon,\eta:C\to k$ satisfying both counit equations for $\Delta$.

[F1] A counit satisfies $\lambda_C(\varepsilon\otimes\mathrm{id})\Delta=\mathrm{id}_C=\rho_C(\mathrm{id}\otimes\varepsilon)\Delta$, with the tensor unit isomorphisms understood ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] Every tensor is a finite sum of elementary tensors, and tensor products are defined by their multilinear universal property ([[def-hh-scalar-and-tensor-conventions]]).

[F3] Linear maps induce a well-defined tensor map, with $(f\otimes g)(a\otimes b)=f(a)\otimes g(b)$ ([[prop-functoriality-of-module-tensor-products]]).

[F4] The associator identifies the two parenthesizations of an iterated tensor; the associator, symmetry, and unit isomorphisms are natural ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

## Proof

1.1 For $c\in C$, write one finite expression $\Delta(c)=\sum_i a_i\otimes b_i$. The scalar $\sum_i\varepsilon(a_i)\eta(b_i)$ is the value on $\Delta(c)$ of the linear contraction $\mu_k\circ(\varepsilon\otimes\eta)$, where $\mu_k:k\otimes k\to k$ is scalar multiplication; it is therefore independent of the chosen expression by [F2] and [F3]. Applying $\eta$ to the left counit equation for $\varepsilon$ shows this scalar is $\eta(c)$, while applying $\varepsilon$ to the right counit equation for $\eta$ shows it is $\varepsilon(c)$. Hence $\varepsilon(c)=\eta(c)$ for every $c$. [given, F1, F2, F3, algebra]

2.1 For any linear maps $f:C\to X$ and $g:C\to Y$, the expression $\sum_i f(a_i)\otimes g(b_i)$ equals $(f\otimes g)\Delta(c)$ by [F3]. Thus changing the finite tensor expression for $\Delta(c)$ cannot change this contraction. Iterated Sweedler notation has the same meaning for the corresponding iterated comultiplication; the associator and coassociativity identify its parenthesizations and maps by [F4]. [given, F2, F3, F4, algebra] ∎

