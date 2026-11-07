---
id: thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy
kind: theorem
title: Connected CW H-spaces with finite integral homology have finite homotopy
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-h-space-fundamental-group-simple-and-finite-type
- thm-simply-connected-integral-finite-homology-implies-finite-homotopy
- thm-dold-kan-equivalence-for-simplicial-modules
- thm-homological-serre-spectral-sequence
- lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
- thm-universal-cover-existence
---

## Statement

Let $(X,e)$ be a path-connected based CW complex with supplied characteristic maps and a based multiplication whose two unit maps are based homotopic to the identity. If $H_i(X;\mathbb Z)$ is finitely generated for every $i\ge0$, then $\pi_i(X,e)$ is finitely generated for every $i\ge1$. The proof uses no axiom of choice.

## Statement references

[[lem-h-space-fundamental-group-simple-and-finite-type]]

[[thm-simply-connected-integral-finite-homology-implies-finite-homotopy]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[thm-homological-serre-spectral-sequence]]

[[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[[thm-universal-cover-existence]]

## Facts & Assumptions

**Given:** The CW H-space and finite-homology hypotheses in the Statement.

[F1] The fundamental group is abelian and equals first homology. [[lem-h-space-fundamental-group-simple-and-finite-type]]

[F2] The homotopy groups of a simply connected CW complex with finitely generated integral homology are finitely generated. [[thm-simply-connected-integral-finite-homology-implies-finite-homotopy]]

[F3] The explicit Dold–Kan equivalence realizes nonnegative chain truncations and identifies their homotopy groups. [[thm-dold-kan-equivalence-for-simplicial-modules]]

[F4] The homological Serre sequence has the local coefficients and finite total-degree convergence filtration stated there. [[thm-homological-serre-spectral-sequence]]

[F5] A weak homotopy equivalence induces integral homology isomorphisms without choice. [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[F6] Every connected locally path-connected semilocally simply connected space has a path-class universal cover. [[thm-universal-cover-existence]]

## Proof

**Proof technique:** Canonical one-type, lifted deck transformations and homological Serre induction.

1.1 Let X be a connected based CW H-space with pointed unit homotopies and H_i(X;Z) finitely generated for all i. The H-space simple-group helper makes A=π₁X abelian and identifies it with H₁X, so A is finitely generated. Build the canonical 1-type target without choosing paths to the points of X: let C be normalized reduced free-abelian singular chains and T its good truncation in degree 1. The based singular complex maps naturally into Γ(T), while A[1]→T is a homology equivalence because H₁X=A. Dold–Kan and weak equivalence of realization give a natural zigzag of 1-types Γ(A[1])→Γ(T)←Sing X. The map f:|Sing X|→|Γ(T)| is an isomorphism on π₁; its homotopy fiber F is simply connected and has the same π_i as X for i≥2. Its mapping-path projection is a Serre fibration over the CW target. This is all constructed from actual functions and one mapping-path space, without selecting one representative for each point. [F1, F3, construct, algebra]

2.1 For the needed Serre coefficient system, write B=|Γ(T)| and Y=|Sing X|, and let p:UB→B be the canonical path-class universal cover. This is defined by based paths modulo fixed-endpoint homotopy, with the usual evenly-covered-neighborhood topology; B is a connected CW space. Pull it back along f to U=Y×_B UB. The covering U→Y is connected and simply connected: path lifting identifies its fiber with π₁(B), its monodromy is the isomorphism f_*:π₁(Y)→π₁(B), and the kernel of that isomorphism is zero. Thus U is the actual universal CW cover of Y. The mapping-path fiber F consists of (y,β) with β a path from f(y) to the basepoint; map it continuously over Y to U by (y,β)↦(y,[reverse β]). Continuity follows directly from the path-class cover topology: for an evenly covered contractible neighborhood of the endpoint, sufficiently small endpoint deformations have the same lifted sheet. On fibers this map is the canonical quotient ΩB→π₁(B), which induces a bijection on components and has no higher homotopy groups because B is a 1-type. The two homotopy long exact sequences for F→Y and U→Y therefore show that F→U is a weak equivalence. Apply choice-free weak homology invariance; no Whitehead theorem or selected family of paths is used. [F3, F5, F6, construct, algebra, step 1.1]

3.1 The explicit reduced-free-abelian map f is natural for pointed maps. Multiplication on Y is the realization of the singular multiplication followed by the canonical finite-product comparison, and its unit homotopies are inherited from X. A based multiplication on U lifts the multiplication of Y: the product U×U is simply connected, so the ordinary path-class lifting construction applies. For any deck element a, choose one path in the connected universal cover from its basepoint to the lift a of the basepoint. Translation by a is homotopic to translation by the identity along that path. Lifting the given left-unit homotopy shows translation by a is homotopic to the deck transformation a; hence every deck transformation induces the identity on homology. This proves the fibration's local coefficient system is trivial. The argument uses one chosen path for one specified deck element, not a choice of paths over all deck elements. The resulting trivial deck action transports through the displayed weak equivalence of fibers. The path-class cover uses all based paths modulo endpoint-fixed homotopy. Its local sheets consist of paths extended inside an evenly covered neighborhood; lifting the specified unit homotopy starting at the given lift is unique on each path class, so no family of representatives is selected. [F6, construct, algebra, step 2.1]

4.1 The bar resolution of the finite product A=Z^r⊕⊕Z/d gives a free ZA-resolution whose chain groups have finite rank in each degree: tensor the two-term Z resolutions and the periodic cyclic resolutions. Thus for any finitely generated Z-module M with trivial A action, H_p(A;M) is finitely generated for every fixed p. Equivalently, the finite-skeleton chain model for Γ(A[1]) gives the same conclusion. The decomposition is one finite choice for this one A. Retain the local coefficient construction of step 3.1. [F3, construct, algebra, step 3.1]

5.1 Inductively suppose H_j(F;Z) finitely generated for j<q; q=0 starts with H₀(F)=Z. In the homological Serre spectral sequence E²_{p,j}=H_p(A;H_j(F;Z)), all terms with j<q are finitely generated. At (0,q), there are no outgoing differentials, and an incoming d_r has source a subquotient of E²_{r,q-r+1}, whose second index is <q. For r>q+1 the source is zero. The stable term E∞_{0,q} is a subgroup of H_q(X;Z), hence finitely generated, and the finitely many incoming images are finitely generated. Thus H_q(F;Z) is finitely generated. For each fixed q this uses finitely many source groups and a finite filtration. The conclusion for each q is a universal assertion, not a simultaneous choice of finite generators. [F4, algebra, construct, step 3.1, step 4.1]

6.1 The fiber F may be replaced by the CW universal cover using the weak equivalence above. The already installed choice-free simply-connected finite-homology theorem then gives finitely generated π_i(F)=π_i(X) for every i≥2. Together with π₁=A, this yields finite homotopy in every degree. The universal cover has a CW structure whose cells are all lifts of supplied characteristic maps; using the entire set of lifts requires no selection. The lifted unit homotopy and the weak fiber map are maps over the same base, so the induced isomorphism of local coefficient systems is natural. Thus the finite homotopy conclusion holds without a CW approximation or a choice of representatives. [F1, F2, F5, construct, discharge-construct, step 2.1, step 5.1] ∎

