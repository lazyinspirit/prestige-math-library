---
id: lem-peyre-local-picard-l-factor-well-defined
kind: lemma
title: "The local Picard L-factor is independent of Frobenius representative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-inverse-limit-topology-for-finite-discrete-groups
  - def-geometric-picard-rank
  - def-peyre-admissibility-conditions
  - def-absolute-galois-group-of-a-global-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-arithmetic-frobenius-coset
  - thm-unramified-frobenius-element-exists-uniquely
  - def-determinant-of-a-square-matrix
  - cor-determinant-is-invariant-under-similarity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §4.5"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: the beta factor uses the geometric Picard Galois module; the local L-factor convention is retained from Peyre §4.5."
verification: {}
---

## Statement

Let $K$ be a number field, let $X/K$ satisfy the Peyre almost-Fano admissibility conditions, and put $M:=\operatorname{Pic}(X_{\overline K})$ and $V:=M\otimes_{\mathbb Z}\mathbb Q$. Assume the natural action of the absolute Galois group $G_K$ on the finite-rank free abelian group $M$ is continuous for the discrete topology, meaning that every element has an open stabilizer. Its kernel $U$ is open and normal, and $G:=G_K/U$ is a finite quotient through which the action factors. Let $v$ be a finite place whose inertia subgroup acts trivially in $G$, and let $\operatorname{Fr}_v$ be the arithmetic Frobenius conjugacy class in $G$. For $s\in\mathbb C$ define
$$
L_v(s,M):=\det\!\left(1-(Nv)^{-s}\operatorname{Fr}_v\mid V\right)^{-1},
$$
where $Nv$ is the residue-field cardinality; on the zero-dimensional space use the convention $\det(1-z\operatorname{Fr}_v)=1$. This rational function of $(Nv)^{-s}$ is independent of the representative chosen from $\operatorname{Fr}_v$, wherever the determinant is nonzero.

## Statement references

[[def-geometric-picard-rank]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-arithmetic-frobenius-coset]]

[[thm-unramified-frobenius-element-exists-uniquely]]

## Facts & Assumptions

**Given:** The continuous action of the profinite group $G_K$ on the finite-rank lattice $M$, a finite place with trivial inertia image, and two representatives $F,F'$ of the same arithmetic Frobenius conjugacy class on $V$.

[F1] For a discrete continuous $G_K$-action, each lattice element has an open stabilizer. ([[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]])

[F2] The absolute Galois group is an inverse limit of finite Galois groups with the inverse-limit topology; finite-coordinate kernels form an identity-neighborhood basis. ([[def-absolute-galois-group-of-a-global-field]], [[def-inverse-limit-topology-for-finite-discrete-groups]])

[F3] At an unramified finite Galois quotient the arithmetic Frobenius class is the class induced by the residue-field power map; a representative is a Frobenius element in a decomposition group. ([[def-arithmetic-frobenius-coset]], [[thm-unramified-frobenius-element-exists-uniquely]])

[F4] Similar matrices over a commutative ring have the same determinant. ([[cor-determinant-is-invariant-under-similarity]])

## Proof

1.1 Fix a finite basis of $M$. The intersection of its stabilizers is exactly the action kernel $U$; it is open by [F1] and normal by definition. By [F2], $U$ contains the kernel $N$ of a projection to finitely many finite Galois coordinates. Thus $G_K/N$ is finite, and its quotient $G_K/U$ is finite. The action factors through that quotient. [given, F1, F2, construct]

2.1 By [F3], the unramified quotient has the arithmetic Frobenius conjugacy class. By definition of that class, $F'=gFg^{-1}$ for some $g\in\operatorname{GL}(V)$. For $z=(Nv)^{-s}$, $1-zF'=g(1-zF)g^{-1}$, so [F4] gives $\det(1-zF')=\det(1-zF)$. [given, F3, F4, algebra]

2.2 Wherever this common determinant is nonzero, taking reciprocals gives the same local factor for $F$ and $F'$. The equality is a polynomial identity in $z$, so the rational functions agree identically. The empty-determinant convention also gives equality when $V=0$. [given, step 2.1, algebra] ∎
