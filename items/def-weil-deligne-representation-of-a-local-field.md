---
id: def-weil-deligne-representation-of-a-local-field
kind: definition
title: "Frobenius-semisimple Weil–Deligne representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-weil-group-of-a-local-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-vector-space
  - def-linear-map
  - def-nilpotent-endomorphism
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §3.1"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §5.5"
      url: "https://masaooi.github.io/LLC.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with residue cardinality $q$, Weil group $W_K$, inertia subgroup $I_K$, and geometric Frobenius coset $\Phi_K$ from the preceding definition. Set $|w|_K=q^m$ if the image of $w$ in $W_K/I_K$ is the $m$-th power of arithmetic Frobenius; in particular $|\Phi_K|_K=q^{-1}$. Let $C$ be a field of characteristic zero with the discrete topology. A **Weil–Deligne representation over $C$** is a triple $(r,V,N)$ consisting of a finite-dimensional $C$-vector space $V$, a homomorphism $r:W_K\to\mathrm{GL}_{C}(V)$ that is continuous when $C$ has the discrete topology and has finite image on $I_K$, and a nilpotent $C$-linear map $N:V\to V$ satisfying
$$r(w)Nr(w)^{-1}=|w|_K N\qquad(w\in W_K),$$
where nilpotent means $N^m=0$ for some integer $m\ge1$.
It is **Frobenius-semisimple** if, after extending scalars to an algebraic closure of $C$, $r(\Phi)$ is diagonalizable for one lift $\Phi\in W_K$ of the geometric Frobenius coset.

## Definition references

[[def-weil-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-vector-space]]

[[def-linear-map]]

[[def-nilpotent-endomorphism]]

[[def-axiom-of-choice]]

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §3.1](https://arxiv.org/pdf/math/0011210)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §5.5](https://masaooi.github.io/LLC.pdf)
