---
id: lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension
kind: lemma
title: Finite cell local system cohomology is finite and commutes with field extension
status: draft
origin: session
deps: [def-local-system-of-r-modules-and-its-pullback, thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Davis and Kirk, Lecture notes in algebraic topology, Chapter 5
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
---

## Statement

Assume AC. Let $(X,A)$ be a finite CW pair of dimension $d$, let $k$ be a field and let $L$ be a $k$-vector-space local system with finite-dimensional fibers. Then $H^q(X,A;L)$ is finite-dimensional, vanishes for $q<0$ and $q>d$, and for every field extension $k\subseteq k'$ the natural map is an isomorphism:
$$H^q(X,A;L)\otimes_k k'\cong H^q(X,A;L\otimes_k k').$$
The assertion holds separately on every component, including the empty pair.

## Facts & Assumptions

**Given:** AC, a finite CW pair $(X,A)$, a field $k$, a finite-rank local system $L$, and a field extension $k\subseteq k'$.

[F1] Local systems and transport are fundamental-groupoid functors ([[def-local-system-of-r-modules-and-its-pullback]]).

[F2] Under AC, skeletal cellular cochains compute relative local-coefficient singular cohomology naturally; their degree-$q$ term is the product of the fibers at the relative $q$-cells, with the transport-weighted incidence differential ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[A1] AC is inherited exactly from [F2] ([[def-axiom-of-choice]]); only finitely many cells occur here.

## Proof

1.1 By [F2], the cohomology in the statement is that of $C^*_{\rm cell}(X,A;L)$. There are finitely many relative $q$-cells, so each term is a finite product of finite-dimensional fibers. It is zero for $q<0$ and $q>d$. Its kernels, images and their quotients are therefore finite-dimensional, and its cohomology vanishes outside $[0,d]$. [F1, F2, A1, algebra]

2.1 The cellular differential is a finite sum of integer incidence coefficients times transport maps. Tensoring the coefficient fibers and transport maps with $k'$ gives exactly the differential for $L\otimes_k k'$. Finite products commute with tensor, so this identifies $C^*_{\rm cell}(X,A;L)\otimes_k k'$ with the cellular complex of the extended local system. [F1, F2, step 1.1, algebra]

3.1 Tensoring vector spaces with a field extension preserves exact sequences: a short exact sequence of $k$-vector spaces splits by extending a basis, so its tensor sequence splits and remains exact. Apply this to the kernel-image sequences of the finite-dimensional complex from step 1.1. It identifies cohomology of the tensored complex with cohomology tensored by $k'$. Naturality of [F2] and step 2.1 identify this isomorphism with the stated coefficient map. Empty components contribute zero and the argument is a finite componentwise sum. [F2, A1, step 1.1, step 2.1, algebra] ∎

## Scope note

The comparison here is for ordinary and relative singular cohomology of a local system. This does not prove that all analytic sheaf cohomology is cellular, does not identify compact support on an arbitrary open complement with this relative model when the local system fails to extend across the boundary, and does not bound the cohomological dimension for arbitrary sheaves.
