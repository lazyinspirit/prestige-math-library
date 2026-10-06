---
page: finite-reflection-length-and-orthogonal-moved-spaces
title: "Finite Reflection Length and Orthogonal Moved Spaces"
status: draft
items: []
examples: []
---

Reflection length counts arbitrary conjugate reflections and differs from simple length. Orthogonal moved spaces provide its geometric rank and, under a fixed upper bound, determine the absolute order.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-reflection-length-absolute-order-and-moved-space.** For finite W and T define ℓ_T(w) as least k with w=t1...tk; existence follows from S⊆T and well-ordering. Define u≤_T v by ℓ_T(v)=ℓ_T(u)+ℓ_T(u^-1v), M(A)=im(A-1), F(A)=ker(A-1) for orthogonal A.

Definition justification: `thm-cg-carter-reflection-length-and-absolute-order`.

**lem-cg-orthogonal-wall-form-and-subspace-restriction.** Prove M(A)=F(A)^⊥. On M(A) let χ_A(u,v)=B((A-1)^-1u,v), using the inverse on F(A)^⊥; derive χ_A+χ_A^T=-B. For U⊆M(A) define H_U by B(H_Uu,v)=χ_A(u,v); its symmetric part -1/2 implies invertibility. Set A_U=1+H_U^-1 on U and identity U⊥, verify orthogonality from H_U+H_U*=-1, and prove its unique moved space U and reflection-prefix relation by rank additivity. Supply orthogonal rank-length equality by successive one-dimensional restrictions. A_U need not lie in W.

**lem-cg-reflection-factorizations-and-independent-normals.** For w∈W choose x∈F(w) outside the finitely many root hyperplanes not containing F(w), proving a finite union of proper linear subspaces cannot cover F(w); when F(w)=0 use x=0. Its nontrivial chamber stabilizer is a parabolic and hence contains a conjugate simple reflection r whose normal lies in M(w). The Wall restriction identity proves dim M(rw)=dim M(w)-1. Induct within W to factor w into dim M(w) root reflections. Telescoping any reflection product gives the reverse rank inequality, closing Carter equality without an imported unproved shortening theorem.

**thm-cg-carter-reflection-length-and-absolute-order.** Deduce ℓ_T(w)=dim M(w) from the shortening argument and rank lower bound. Prove absolute order partial-order and rank properties. Under α,β≤_T δ, show M(α)⊆M(β) iff α≤_Tβ and equality implies α=β, using restriction of χ_δ; the common-upper-bound hypothesis is indispensable.

## Prerequisites and reading

Required earlier pages: [[finite-reflection-arrangements-and-spherical-coxeter-complexes]]. The companion [[finite-reflection-length-and-orthogonal-moved-spaces-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
