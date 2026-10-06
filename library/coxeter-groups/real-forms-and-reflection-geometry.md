---
page: real-forms-and-reflection-geometry
title: "Real Forms and Reflection Geometry"
status: draft
items: []
examples: []
---

Reflections require a form and a nonisotropic normal, not an unstated Euclidean structure. Begin with finite-dimensional real vector spaces and distinguish positive-definite, indefinite and degenerate forms before assigning any chamber interpretation.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-real-coxeter-form-and-reflection.** Fix finite S. On V=R^S set B(e_s,e_s)=1 and B(e_s,e_t)=-cos(pi/m_st) for finite m_st, and -1 for infinity. For B(a,a)≠0 define r_a(v)=v-2B(v,a)a/B(a,a). Define radical and form-preserving map; no positive definiteness or invertibility of B is presumed.

Definition justification: `lem-cg-reflection-form-invariance-and-rank-two-orders`.

**lem-cg-reflection-form-invariance-and-rank-two-orders.** Expand the formula to prove r_a²=1 and B(r_av,r_aw)=B(v,w), with fixed hyperplane ker B(-,a). On span(e_s,e_t), diagonalize the finite rotation with angles 2pi/m using supplied real trigonometry; handle m=2 separately. At infinity display nonzero N with (r_sr_t)^k=1+kN on this span; characteristic zero implies infinite order.

**def-cg-canonical-reflection-homomorphism.** Define rho:W→GL(V) by the generator matrices only after relator verification; group-presentation universal property proves existence and uniqueness. Define roots Φ={rho(w)e_s}, reflections T={wsw^-1}, positive cone V_+ and negative cone -V_+. Positivity and faithfulness remain conclusions of the next page.

Definition justification: `lem-cg-reflection-representation-descends-and-root-norms`.

**lem-cg-reflection-representation-descends-and-root-norms.** For every relation (st)^m use the rank-two formula on its plane and on the common fixed codimension-two space; alternatively compute the full matrix sum to cover degenerate ambient B without assuming a direct sum. Check all generators, descend uniquely and prove every root has B-norm one. Conjugation sends r_a to r_(rho(w)a).

**def-cg-dual-chambers-and-reflection-hyperplanes.** Use V* with action (w f)(v)=f(rho(w^-1)v). Define closed C={f:f(e_s)≥0}, open C° by strict inequalities, faces C_I by vanishing exactly on I, and root hyperplanes f(a)=0. The dual action is required even when B is degenerate.

Definition justification: `lem-cg-dual-action-and-chamber-faces-exist`.

**lem-cg-dual-action-and-chamber-faces-exist.** Verify action composition and linearity, construct every C_I by prescribed basis coordinates, and prove C° is nonempty. On two dual coordinates calculate the dihedral chamber tiling and separating-root inequalities for every finite m and the infinite case. This exact rank-two input precedes all higher-rank chamber conclusions.

## Prerequisites and reading

Required earlier pages: [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[dual-spaces-bilinear-forms-and-inertia]], [[sine-cosine-and-the-definition-of-pi]], [[group-homomorphisms-and-the-isomorphism-theorems]]. The companion [[real-forms-and-reflection-geometry-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
