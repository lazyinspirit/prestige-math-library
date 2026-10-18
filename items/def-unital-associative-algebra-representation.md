---
id: def-unital-associative-algebra-representation
kind: definition
title: Representations of unital associative algebras
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-left-and-right-modules
  - def-vector-space
  - def-vector-space-of-linear-maps
  - prop-linear-maps-form-a-vector-space
  - def-endomorphism-ring-of-a-module
  - prop-endomorphisms-form-a-ring
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, §1.1, printed p. 5"
      url: "https://arxiv.org/pdf/0901.0827"
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations, §3.2, printed pp. 29–30"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
---

## Definition

Let $k$ be a field, let $A$ be a unital associative $k$-algebra
([[def-algebra-over-a-commutative-ring]]), and let $V$ be a $k$-vector space.
Write $\operatorname{End}_k(V)=\mathcal L_k(V,V)$ for the $k$-linear endomorphisms
of $V$ ([[def-vector-space-of-linear-maps]]); its multiplication is composition
and its identity is $\operatorname{id}_V$
([[def-endomorphism-ring-of-a-module]], [[prop-endomorphisms-form-a-ring]]).
An **(unital) representation of $A$ on $V$** is a $k$-linear map
$$\rho:A\longrightarrow\operatorname{End}_k(V)$$
such that $\rho(1_A)=\operatorname{id}_V$ and
$$\rho(ab)=\rho(a)\circ\rho(b)\qquad(a,b\in A).$$
The associated action is $a\cdot v:=\rho(a)(v)$. The zero vector space is
allowed; in that case $\operatorname{id}_V=0$.

## Remarks

This definition specifies an action of $A$ on one vector space. It does not by
itself specify an action on $V\otimes_k W$. For the module interpretation and
the extra coproduct data used for bialgebra modules, see
[[thm-associative-algebra-representations-are-unital-modules]] and
[[def-hh-module-category-and-tensor-action]].
