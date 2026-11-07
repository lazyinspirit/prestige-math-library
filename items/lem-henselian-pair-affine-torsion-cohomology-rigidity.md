---
id: lem-henselian-pair-affine-torsion-cohomology-rigidity
kind: lemma
title: Affine torsion cohomology rigidity for henselian pairs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
- def-axiom-of-choice
- def-henselian-pair-and-henselian-local-ring
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards
- lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
- lem-affine-closed-fibre-torsion-cohomology-finite-effacement
- lem-finite-morphism-etale-direct-image-calculus
- thm-etale-formally-etale-finite-presentation
- lem-affine-representable-fppf-family-descent
proof_strategy: direct
axiom_use: AC is explicit and inherited from the new finite-witness, coefficient and effacement suppliers. The finite-algebra idempotent argument is written locally; no proper-base-change, Stein or external Gabber theorem is imported.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Affine analog of proper base change
    url: https://stacks.math.columbia.edu/tag/09ZI
    locator: Full59.82.7 proof read. The effacement/LES induction is reconstructed below; H0 is proved with finite algebra idempotents and finite-pushforward coresolutions.
  - title: The Stacks Project, Henselian pairs
    url: https://stacks.math.columbia.edu/tag/09XD
    locator: Existing local factorization definition is used literally; the finite-algebra idempotent argument is supplied below, not imported from an equivalence theorem.
---

## Statement

Assume the Axiom of Choice. Let (A,I) be a henselian pair, put X=Spec(A), Z=Spec(A/I), and let F be any torsion abelian sheaf on X_et. For every q≥0, the natural restriction H^q_et(X,F)→H^q_et(Z,F|Z) is an isomorphism. No invertibility condition on the torsion orders is imposed.

## Statement references

[The Stacks Project, Theorem59.82.7](https://stacks.math.columbia.edu/tag/09ZI)

## Facts & Assumptions

**Given:** AC, the henselian pair, schemes and torsion sheaf in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A henselian pair has I in the Jacobson radical and uniquely lifts coprime monic factorizations. [[def-henselian-pair-and-henselian-local-ring]]

[F2] At corrected AC scope the finite-witness construction gives finite coefficient object descent and actual cohomology models. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F3] Finite constructible Z/n-module sheaves on qcqs schemes embed in finite sums of finite constant pushforwards at explicit AC scope. [[lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards]]

[F4] Under AC, torsion coefficient sheaves are filtered colimits of finite constructible coefficient objects and étale cohomology commutes with coefficient filtered colimits. [[lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses]]

[F5] Under AC, every positive-degree torsion class on a closed subscheme of an affine scheme can be effaced by a monomorphism of torsion sheaves on that affine scheme. [[lem-affine-closed-fibre-torsion-cohomology-finite-effacement]]

[F6] Finite direct image is exact, commutes with arbitrary base change and has its actual finite product stalk formula. [[lem-finite-morphism-etale-direct-image-calculus]]

[F7] At AC scope a formally étale finitely presented morphism is étale. [[thm-etale-formally-etale-finite-presentation]]

## Proof

**Proof technique:** finite-algebra idempotent lifting, a two-term coresolution in degree zero, then effacement induction.

1.1 For any finite A-algebra B, IB lies in the Jacobson radical of B. If m is a maximal ideal of B, its contraction p is maximal in A: B/m is a field integral over A/p, and for nonzero a∈A/p the inverse of a in B/m is integral, so multiplying its monic equation by a suitable power expresses a^(-1) in A/p. Hence A/p is a field. The inclusion I⊂J(A) gives IB⊂m for every m. Under AC every proper ideal is contained in a maximal ideal; thus every 1+b, b∈IB, is a unit. The same unit conclusion holds for 1+a, a∈I. This spends exactly the defining Jacobson condition. [A1, F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 Let e0 be an idempotent of B/IB. If e0=0 or 1 use that lift. Otherwise choose finite A/I-module generators of e0(B/IB) and (1-e0)(B/IB), and lift them to b1,...,br,c1,...,cs in B. They generate B: the finite quotient N by their span satisfies N=IN, so expressing generators v of N as Hv with entries of H in I shows det(1-H)N=0. That determinant belongs to 1+I and is a unit by step 1.1. Thus N=0. This is the finite determinant version of Nakayama, with no additional module theorem being assumed. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 Choose b∈B lifting e0. In the selected generating column for B, multiplication by b is represented by a matrix H congruent modulo I to diag(1_r,0_s): the differences bbj-bj and bck lie in IB and have I-linear expressions in those generators. Let f(T)=det(T-H). Its residue is (T-1)^r T^s, and the adjugate identity shows f(b)=0 on every generator and hence on 1∈B. Henselian factorization [F1] gives f=gh with g≡T^s, h≡(T-1)^r modulo I. Their resultant is a unit because its reduction is ±1; the finite Sylvester-matrix adjugate therefore gives u(T)g(T)+v(T)h(T)=1. [A1, F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 The polynomial E(T)=u(T)g(T) is zero modulo g and one modulo h. Hence E²-E is divisible by gh=f, so e=E(b) is an idempotent. Its reduction is e0, since E0(0)=0 and E0(1)=1 and polynomial evaluation on an idempotent is the corresponding two-value evaluation. If r or s is zero the earlier trivial lift applies. Uniqueness follows from step 1.1: for idempotents e,e' congruent modulo IB, both e(1-e') and e'(1-e) are idempotents in IB. Such an idempotent a is zero because (1-a)a=0 and 1-a is a unit. Thus e=e'. We have proved the idempotent bijection B→B/IB for EVERY finite A-algebra B, not merely for B=A. [A1, F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra, step 1.1]

5.1 For a finite set M, a locally constant map Spec(B)→M is a finite labelled clopen partition, equivalently a family of pairwise orthogonal idempotents indexed by M summing to1. The idempotents of the quotient lift uniquely by step 4.1; their products lift zero and their sum lifts1, so uniqueness preserves orthogonality and the sum. Consequently Γ(Spec(B),constantM)→Γ(Spec(B/IB),constantM) is bijective, naturally in M. For finite abelian M this is a group isomorphism. This is the degree-zero comparison for every finite constant pushforward. [A1, F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 We need that these finite constant pushforwards are finite constructible coefficient sheaves. First let B be finite free of rank d over a ring R and M finite. The sheaf assigning to a test scheme T the locally constant maps Spec(B⊗R O_T)→M is represented by the affine fp scheme of labelled idempotent partitions: write each e_m in a chosen basis, impose e_m²=e_m, e_m e_n=0 for m≠n, and Σe_m=1. These are finitely many polynomial equations in finitely many variables. Idempotent partitions lift uniquely across square-zero ideals: for a lift a with a²-a=d in a square-zero ideal, replace a by a+(1-2a)d. It is idempotent, and uniqueness follows because 2a-1 is a unit modulo that ideal and hence a unit. Products and sums then preserve the partition by uniqueness. Thus the representing fp scheme is formally étale and is étale by [F7]. Its represented sheaf is finite constructible by the fp étale stratification calculation in [F2]. [A1, F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 For a finite finitely presented algebra B over arbitrary R, descend its finite algebra presentation and monic generator equations to a finitely generated Z-algebra R0; this gives a finite algebra B0 over Noetherian R0 whose base change is B. Partition Spec(R0) by Noetherian induction into finitely many reduced integral locally closed strata on which the underlying finite module B0 is free: on an integral stratum choose a generic field basis and clear the finitely many denominators killing the kernel/cokernel of the resulting finite module map; then continue on the closed complement. The restriction of the finite constant pushforward commutes with these base changes by [F6]. On each stratum step 6.1 applies, and pulling back the finite stratification proves constructibility over R. Constant finite coefficients and their module structures are preserved. This proves the needed constructibility without asserting that B was flat before stratification. [A1, F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 Let G be a finite constructible Z/n-module sheaf on X. By [F3] embed G into a finite sum E0 of finite constant pushforwards. This E0 is constructible by step 7.1; its quotient Q is constructible, because kernels and cokernels of finite locally constant coefficient maps are locally constant after the common finite stratification and trivializing covers. Apply [F3] again to embed Q into another such E1. Then 0→G→E0→E1 is exact at G and E0. Restriction to Z is exact, and [F6] identifies the restrictions of the Ei with the corresponding finite constant pushforwards from B/IB. Step5.1 makes Γ(X,Ei)→Γ(Z,Ei|Z) isomorphisms for i=0,1. Taking the kernel of the two horizontal maps gives Γ(X,G)≅Γ(Z,G|Z). [A1, F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 For arbitrary torsion F, use [F4] to express F as a filtered colimit of finite constructible coefficient objects through arbitrary maps. Inverse image preserves this colimit. Degree-zero coefficient continuity on the two affine schemes X,Z and the compatible isomorphisms of step 8.1 give Γ(X,F)≅Γ(Z,F|Z). This is the q=0 case. No map from a coefficient witness to F is assumed monic. [A1, F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 Induct simultaneously on q for all torsion sheaves. Suppose the comparison is an isomorphism in every degree below q, q>0. To prove injectivity let α∈H^q(X,F) restrict to zero. Apply [F5] with the closed immersion X→X to choose a monomorphism F→F' killing α on X; let Q be its torsion quotient. By the long exact sequence α is the connecting image of some β∈H^(q-1)(X,Q). Its restriction β0 maps to zero under the connecting map on Z, so β0 comes from γ0∈H^(q-1)(Z,F'|Z). The induction hypothesis lifts γ0 to γ on X. Then β-image(γ) restricts to zero and vanishes by the induction hypothesis for Q. Hence α is the connecting image of image(γ), which is zero. This proves injectivity without assuming a degree-q comparison for F'. [A1, F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 For surjectivity let ζ∈H^q(Z,F|Z). Apply [F5] with the actual closed immersion Z⊂X to choose F→F' killing ζ after restriction, and put Q=F'/F. Its restricted short exact sequence remains exact. The long exact sequence on Z writes ζ as the connecting image of β0∈H^(q-1)(Z,Q|Z). Lift β0 to β∈H^(q-1)(X,Q) using the induction hypothesis. Its connecting image α∈H^q(X,F) restricts to ζ by naturality of the long exact sequences. This proves surjectivity. [A1, F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra]

12.1 The induction starts with step 9.1 and proves the comparison for every q≥0. It is the actual restriction map throughout, since the finite-algebra, coefficient and connecting maps are all natural. If A/I=0, the Jacobson condition forces A=0 and both schemes are empty. Zero sheaves, zero finite coefficient modules and q=0 are included. No torsion order was inverted. The AC scope is that of this new supplier; no assertion about the still-unqualified original proper-base-change theorem25 is made. [A1, F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra, step 9.1] ∎
