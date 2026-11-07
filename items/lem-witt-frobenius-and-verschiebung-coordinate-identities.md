---
dependency_level: 3
id: lem-witt-frobenius-and-verschiebung-coordinate-identities
kind: lemma
title: Coordinate Frobenius and Verschiebung identities for Witt vectors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
- lem-witt-ghost-congruence-criterion
- lem-integral-p-typical-witt-coordinate-operations
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, sections 2–5; p-typical coordinate
      specialization
    url: https://arxiv.org/abs/1409.7445
---

## Statement

For the universal $p$-typical Witt operations there is a natural ring endomorphism $F$ with integral coordinate polynomials characterized formally by $w_n(FX)=w_{n+1}(X)$. The shift $V(a_0,a_1,\ldots)=(0,a_0,a_1,\ldots)$ is additive and $FV=p$ (multiplication by the integer $p$). Its Frobenius coordinates satisfy $F_n(X)\equiv X_n^p\pmod p$. Consequently on a characteristic-$p$ ring $R$,
$$F(a_0,a_1,\ldots)=(a_0^p,a_1^p,\ldots),\qquad FV=VF=p.$$
The first-coordinate projection is a ring homomorphism. All statements are choice-free.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[lem-witt-ghost-congruence-criterion]]

[[lem-integral-p-typical-witt-coordinate-operations]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-witt-ghost-congruence-criterion]] supplies its stated interface.

[F3] [[lem-integral-p-typical-witt-coordinate-operations]] supplies its stated interface.

## Proof

1.1 In the universal integer polynomial ring of [F3], the sequence $b_n=w_{n+1}(X)$ satisfies $b_n-\phi(b_{n-1})\in p^{n+1}B$, by the necessity calculation in [F2]. In particular it satisfies the criterion modulo $p^n$, which gives integral $F_n$ involving coordinates through $n+1$. Equality on ghosts proves its ring laws by the polynomial-identity argument of [F3]. The first-coordinate assertion follows from $w_0=X_0$. [given, F2, F3, algebra]

2.1 Directly $w_0(VX)=0$ and $w_n(VX)=p w_{n-1}(X)$ for $n\ge1$. These identities show additivity of $V$ and $w_n(FVX)=p w_n(X)$ for all $n$. Universally injective ghosts then give $FV=p$, and the identities specialize to all rings. [given, F3, step 1.1, algebra]

3.1 Compare $w_n(FX)$ with $w_n(X_0^p,X_1^p,\ldots)$: their difference is $p^{n+1}X_{n+1}$. For $n=0$ this gives $F_0-X_0^p=pX_1$. Inductively if $F_i-X_i^p$ is divisible by $p$ for $i<n$, [F2]'s power congruence makes $p^i(F_i^{p^{n-i}}-X_i^{p^{n-i+1}})$ divisible by $p^{n+1}$. Cancelling $p^n$ in the remaining term proves $F_n-X_n^p\in pB$. In characteristic $p$, therefore, $F$ is coordinatewise Frobenius, which commutes with the coordinate shift $V$. Together with step 2.1 this gives $VF=FV=p$. [given, F2, step 1.1, step 2.1, algebra] ∎
