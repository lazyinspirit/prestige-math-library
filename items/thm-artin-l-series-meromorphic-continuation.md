---
id: thm-artin-l-series-meromorphic-continuation
kind: theorem
title: Meromorphic Continuation of Artin L-Series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-artin-l-series-for-a-linear-character
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-brauer-induction
  - lem-artin-induction-euler-factor-and-brauer-product-identity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §2.2, printed pp. 5–6; Artin L-functions are defined by their meromorphic continuation from the Euler product.
verification: {}
---

## Statement

Let $L/K$ be a finite Galois extension of number fields with group $G$, let $V$ be a finite-dimensional complex representation of $G$, and let $S$ be a finite set containing every infinite and ramified place of $K$. For each finite place $v\notin S$, choose a place above it, let $I_v$ be its inertia subgroup, let $\operatorname{Frob}_v$ be arithmetic Frobenius acting on $V^{I_v}$, and let $Nv$ be the residue-field cardinality. The Euler product
$$L_S(s,V)=\prod_{v\notin S}\det\!\left(1-(Nv)^{-s}\operatorname{Frob}_v\mid V^{I_v}\right)^{-1},\qquad \operatorname{Re}(s)>1,$$
has a meromorphic continuation to all $s\in\mathbb C$.

## Theorem references

[Johnston and Nickel, §2.2](https://arxiv.org/pdf/2010.03186)

## Proof status

The finite local induction, direct-sum and Brauer Euler-product identities are now supplied by [[lem-artin-induction-euler-factor-and-brauer-product-identity]], using the already published Brauer induction theorem. The existing Artin–Hecke identity at its explicit Given ray-class field and Artin correspondence is complete and is not reopened here. The primitive Hecke continuation theorem also has a complete local proof, but its public scope assumes AC and Countable Choice, whereas this parent is unconditional. The actual abelian Artin-to-ray-class correspondence for arbitrary finite extensions and the one-dimensional continuation route at this unconditional scope remain to be supplied. Neither those extra hypotheses nor the desired analytic conclusion is added as a new Given. No full continuation proof or downstream readiness is claimed.

The word “finite” in the public $S$ hypothesis restores the actual Johnston–Nickel §2.2 condition, confirmed in the cached source. The original omission did not license meromorphic continuation after arbitrary infinite Euler-factor deletions. The finite induction identity itself remains valid for any omitted-prime set in $\operatorname{Re}s>1$.
