---
id: prop-emg-fx-finite-coisotropic-pairing
kind: proposition
title: "Finite constrained mode quotient"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
proof_strategy: direct
deps:
  - def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces
  - prop-symplectic-reduction-of-a-coisotropic-vector-subspace
dependency_roles:
  def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces: mathematical-premise
  prop-symplectic-reduction-of-a-coisotropic-vector-subspace: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Eckhard Meinrenken, Symplectic Geometry, Lecture Notes, University of Toronto"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
      locator: "Complete lecture-note PDF retrieved; §2.4, Proposition 2.20, pp. 11–12: quotienting a subspace by the kernel of the restricted symplectic form."
---

## Statement

Let $V$ be a finite-dimensional real vector space with a nondegenerate alternating bilinear form $\omega:V\times V\to\mathbb R$. For a linear subspace $W\subseteq V$, define $W^\omega:=\{v\in V:\omega(v,w)=0\text{ for every }w\in W\}$, and assume $W^\omega\subseteq W$ (so $W$ is coisotropic). Then the quotient vector space $W/W^\omega$, whose elements are cosets $[u]:=u+W^\omega$, carries the well-defined symplectic form $\overline\omega([u],[v])=\omega(u,v)$. This proposition concerns only finite-dimensional constrained mode models; it does not assert that an infinite-dimensional Einstein–Maxwell solution space has a smooth symplectic quotient.

## Statement references

[[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]]

[[prop-symplectic-reduction-of-a-coisotropic-vector-subspace]]

## Facts & Assumptions

**Given:** A finite-dimensional real symplectic vector space $(V,\omega)$ and a linear subspace $W\subseteq V$ with $W^\omega\subseteq W$.

[F1] [[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]]: coisotropic means $W^\omega\subseteq W$, where $W^\omega=\{v\in V:\omega(v,w)=0\text{ for every }w\in W\}$.

[F2] [[prop-symplectic-reduction-of-a-coisotropic-vector-subspace]]: for a symplectic vector space and coisotropic subspace $W$, $W/W^\omega$ has the well-defined nondegenerate alternating form $\overline\omega([u],[v])=\omega(u,v)$.

## Proof

1.1 The hypothesis $W^\omega\subseteq W$ is exactly the coisotropic condition in [F1]. Thus the quotient and descended form in [F2] apply to this $(V,\omega,W)$. [given, F1, F2]

2.1 By [F2], changing either representative by an element of $W^\omega$ leaves $\omega(u,v)$ unchanged, and a class in the radical has representative in $W^\omega$, so the descended form is well-defined and nondegenerate. It is alternating by the alternation of $\omega$. Since $W$ is a subspace of finite-dimensional $V$, $W/W^\omega$ is finite-dimensional, so it is a finite-dimensional symplectic vector space. No infinite-dimensional quotient regularity is used. [given, F2, step 1.1] ∎

## Remarks

For $W=V$ the quotient is $V$ itself; for a Lagrangian constraint subspace $W=W^\omega$ the quotient is the zero symplectic vector space. These are finite-dimensional boundary cases of the stated result, not evidence for an infinite-dimensional solution-space reduction.
