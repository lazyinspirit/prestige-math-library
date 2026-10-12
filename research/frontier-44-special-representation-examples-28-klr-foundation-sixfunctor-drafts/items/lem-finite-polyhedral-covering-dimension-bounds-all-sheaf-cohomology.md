---
id: lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology
kind: lemma
title: A polyhedral dimension bound for every field sheaf
status: draft
origin: pipeline
deps:
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- lem-finite-star-refinement-for-compact-hausdorff-spaces
- thm-refinement-map-independent-on-cohomology
- def-cech-cochain-complex-open-cover
- def-global-cech-cohomology-directed-limit
- thm-cech-to-sheaf-cohomology-comparison
- lem-acyclic-rows-and-columns-of-cech-double-complex
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC. On a compact metric space, refinement-limit finite-cover Čech cohomology agrees naturally with injective sheaf cohomology. If $P$ is a finite compact polyhedron of dimension $d$, then $H^q(P,F)=0$ for every $k$-sheaf $F$ and $q>d$. For every open $U\subset P$ and every $k$-sheaf $E$ on $U$, $H^q_c(U,E)=0$ for $q>d$. These bounds concern all sheaves, not merely cellular or constructible sheaves.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-c-soft-field-sheaves-are-compact-support-acyclic]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-finite-star-refinement-for-compact-hausdorff-spaces]] is used with its stated hypotheses.

[F3] The exact supplier [[thm-refinement-map-independent-on-cohomology]] is used with its stated hypotheses.

[F4] The exact supplier [[def-cech-cochain-complex-open-cover]] is used with its stated hypotheses.

[F5] The exact supplier [[def-global-cech-cohomology-directed-limit]] is used with its stated hypotheses.

[F6] The exact supplier [[thm-cech-to-sheaf-cohomology-comparison]] is used with its stated hypotheses.

[F7] The exact supplier [[lem-acyclic-rows-and-columns-of-cech-double-complex]] is used with its stated hypotheses.

[F8] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

## Proof

1.1 **Given:** a compact metric X and any k-sheaf F. Let Čech cohomology mean the directed refinement limit of finite-cover Čech groups, with the usual chain-homotopic refinement maps. This is not the fixed-cover comparison theorem alone. [given, construct, algebra]

1.2 To lift an n-cochain through an epimorphism G→H after refinement, first take a compact shrinking V_i with closure(V_i)⊂U_i of its finite parent cover. For each tuple J of distinct parent indices the cochain's section on U_J has a local lift cover. For x put I_x={i:x∈closure(V_i)}. Choose W_x avoiding every closure(V_i) with i∉I_x, and contained in one lift domain for each tuple J⊂I_x. There are finitely many such requirements and x lies in every relevant U_J, so W_x exists. Take a finite star-refinement of {W_x} and refine it by {V_i}. If a tuple of refined members intersects, its union lies in one W_x; every parent label belongs to I_x, because a member meets W_x but W_x avoids the other parent closures. Its intersection therefore lies in a chosen lift domain. This gives a lift of every component of the refined cochain. The same refinement argument applies to equality of lifted cochains. [given, construct, algebra]

1.3 For a cocycle in H, lift it as above to a cochain g in G; dg is a cocycle in F. Its class is independent of the lifts since their difference is an F-cochain, and independent of refinement by common refinement and the alternating prism homotopy between label maps. This defines the connecting homomorphism. Exactness is the usual elementary cochain calculation: a class with zero image is, after refinement, the image of a cocycle in the kernel; a zero connecting class permits subtracting an F-cochain to make its chosen lift a cocycle. Degree zero is sheaf gluing. Thus refinement-limit Čech groups form a δ-functor. They vanish on injectives: an injective is flasque, and the augmented finite-cover Čech complex of a flasque sheaf is exact, proved by induction on the number of opens using the restriction surjection on their union/intersection (equivalently the standard two-cover cone). Embedding F in an injective therefore effaces all positive groups. Both this δ-functor and injective derived cohomology are effaceable and agree in degree zero. Dimension shifting along F→I→Q recursively supplies the unique natural comparison isomorphism in every degree. This proves global Čech-derived comparison here without assuming any acyclic cover of F. [given, construct, algebra]

2.1 If X is the realization of a finite simplicial complex of dimension d, arbitrarily fine barycentric subdivisions exist: each simplex's mesh decreases by at most d/(d+1) at each subdivision, by its barycentre formula. A Lebesgue number for a given finite cover ensures the open vertex stars of a sufficiently fine subdivision refine it. Every nonempty intersection of these stars has at most d+1 distinct vertices, because such vertices belong to one simplex. Hence the normalized Čech complex is zero in degrees>d. These covers are cofinal. The preceding comparison gives H^q(X,F)=0 for all q>d and every sheaf F, with no constructibility assumption. The same bound applies to compactly supported cohomology on every open U in a finite compact polyhedron P, not only a semialgebraic open: j!F on P is an ordinary sheaf, and RΓ_c(U,F)=RΓ(P,j!F), as follows by applying the c-soft resolution and B2 extension-zero acyclicity. If a fibre is P minus a closed subcomplex, every open in the fibre is also open in P. Thus the dimension bound applies to all fibre-opens required in B4. The last equality is a proved resolution identity, not an unproved definition swap. [given, construct, algebra] ∎

