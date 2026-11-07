---
id: lem-relative-frobenius-and-verschiebung-of-an-elliptic-family
kind: lemma
title: Relative Frobenius and Verschiebung of an elliptic family
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-multiplication-by-n-on-abelian-scheme
- thm-etale-locally-standard-etale
- thm-smooth-local-standard-form
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter III, Frobenius and Verschiebung; the relative construction is given below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is assumed by the named multiplication and étale-chart inputs.
---

## Statement

Assume AC. Let S be a locally Noetherian scheme of characteristic p>0, and let E/S be an elliptic curve. The relative Frobenius `F:E→E^(p)` is a finite flat surjective group homomorphism of degree p. There is a unique finite flat homomorphism `V:E^(p)→E` of degree p with `VF=[p]`; it also satisfies `FV=[p]` on E^(p). Their kernels are finite flat of rank p. For every integer N invertible on S and coprime to p, both F and V induce isomorphisms on N-torsion. This statement constructs the Frobenius and Verschiebung isogenies; it does not classify all rank-p subgroup schemes or identify a Hecke correspondence.

## Facts & Assumptions

**Given:** AC, a locally Noetherian characteristic-p base S, and an elliptic curve E/S.

[F1] Multiplication by p on an elliptic scheme is finite flat of degree p²; when N is invertible, N-torsion is finite étale of rank N². [[lem-multiplication-by-n-on-abelian-scheme]]

[F2] Smooth relative curves have local étale coordinates, and étale maps are locally standard étale under AC. [[thm-smooth-local-standard-form]] [[thm-etale-locally-standard-etale]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** relative Frobenius in smooth coordinates and formal-group descent.

1.1 The relative Frobenius F is a homomorphism by functoriality of p-th powers. Smoothness of E/S gives étale local coordinates in one variable. For an étale map U→A¹_S, its relative Frobenius square is Cartesian: the relative Frobenius of an étale algebra is an isomorphism, as follows from unique lifting through nilpotent thickenings on standard étale charts [F2]. Hence locally F is obtained from `A[T^p]⊂A[T]`, finite free of rank p with basis `1,T,…,T^(p−1)`. Thus F is finite flat of degree p; it is surjective because it is a universal homeomorphism on underlying spaces. Its kernel is finite flat of rank p by base change along the identity section. [F2, F3, given, construct, algebra]

2.1 Work locally on S and complete E along its identity; smoothness identifies the formal curve with `Spf A[[T]]`. An invariant differential has the form `u(T)dT` with u a unit. Multiplication by p acts on invariant differentials as multiplication by p, hence pulls this form back to zero in characteristic p. If the formal multiplication law is `P(T)=[p]^*T`, then `u(P(T))P'(T)=0`; therefore `P'(T)=0` and `P(T)` is a power series in T^p with zero constant term. In the same local parameter, the kernel of F has completed coordinate algebra `A[[T]]/(T^p)`. Thus P vanishes on ker F, so `[p]` kills ker F as a subgroup scheme, not merely on geometric points. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 The finite flat surjection F is an fppf homomorphism, and its equivalence relation is translation by its kernel. Since `[p]` kills that kernel, faithfully flat descent factors `[p]` uniquely through F as a homomorphism `V:E^(p)→E`. From `VF=[p]` and commutation of F with multiplication, `FVF=[p]F`; the surjectivity of F gives `FV=[p]` on E^(p). By [F1] the composite VF is finite flat of degree p². The map V is proper and quasi-finite, hence finite, and its flatness descends from the flat composite through the faithfully flat F; its degree is p²/p=p. Its kernel is finite flat of rank p. [F1, F3, step 1.1, step 2.1, given, construct, algebra]

4.1 For N invertible on S, E[N] is finite étale by [F1]. Relative Frobenius of a finite étale scheme is an isomorphism by the same étale-coordinate argument of step 1.1, so F identifies E[N] with E^(p)[N]. On N-torsion, `VF=[p]` is multiplication by p, which is an isomorphism because gcd(p,N)=1. Thus V is an isomorphism on N-torsion as well. [F1, F2, F3, step 1.1, step 3.1, given, algebra] ∎

## Source and authoring record

This constructs only the characteristic-p Frobenius and Verschiebung isogenies. It does not establish a flat compactified Hecke correspondence, classify all cyclic p-subgroups, or prove an Eichler–Shimura congruence.
