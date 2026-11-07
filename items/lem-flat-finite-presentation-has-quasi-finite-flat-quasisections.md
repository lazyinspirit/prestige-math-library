---
id: lem-flat-finite-presentation-has-quasi-finite-flat-quasisections
kind: lemma
title: Flat finitely presented maps admit quasi-finite flat quasisections
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-etale-fppf-topology-comparison-and-cohomology-models
- lem-quasi-finite-morphism-finite-after-etale-localization
- cor-noether-normalisation-module-finiteness
- lem-determinant-trick-for-nakayama
- thm-flat-quotients-preserve-short-exact-tensor-sequences
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

For a flat locally finitely presented map f:X→S and a specified s in its image, there are Z→X over S and a point of Z above s such that Z→S is flat, locally finitely presented and locally quasi-finite. After affine localization near s the construction is affine and finitely presented.

## Statement references

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

[[lem-quasi-finite-morphism-finite-after-etale-localization]]

[[cor-noether-normalisation-module-finiteness]]

[[lem-determinant-trick-for-nakayama]]

[[thm-flat-quotients-preserve-short-exact-tensor-sequences]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[def-etale-fppf-topology-comparison-and-cohomology-models]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-quasi-finite-morphism-finite-after-etale-localization]] at the hypotheses stated there.

[F3] Unqualified finite polynomial-subring normalization, only section5.0 isolated-point bridge. [[cor-noether-normalisation-module-finiteness]]

[F4] Finite annihilator trick and idempotent ideals. [[lem-determinant-trick-for-nakayama]]

[F5] Use the exact public interface of [[thm-flat-quotients-preserve-short-exact-tensor-sequences]] at the hypotheses stated there.

## Proof

**Proof technique:** direct.

1.1 Let (R,m)→(S,n) be a local ring map, with the usual explicit unit property outside the specified maximal ideals. Let M be a finitely presented S-module which is flat over R. If M/mM is free of finite rank r over S/mS, then M is free of rank r over S. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Choose lifts of the given finite fibre basis. They define f:S^r→M. Its cokernel C is finite and C/mC=0 by tensor right exactness. The determinant trick (`lem-determinant-trick-for-nakayama`) gives (1-a)C=0 for some a∈mS⊂n. The explicit unit property makes 1-a invertible, so C=0. Write K=ker(f). This K is finitely generated: for completeness take a finite presentation S^b→S^a→M→0, lift its a generators to S^r, and lift the images of the r standard generators back to S^a. The finite relations of the first presentation, together with the r differences between a generator and its lifted round trip, generate K. This is the elementary comparison-of-presentations argument and uses only finitely many choices. [F1, F2, F3, F4, F5, step 1.1, given, construct, algebra]

3.1 Apply `thm-flat-quotients-preserve-short-exact-tensor-sequences` over R to 0→K→S^r→M→0 and the R-module R/m. Its hypothesis is flatness of M, not flatness of K or S. Thus K/mK injects into (S/mS)^r, and its image is the kernel of the fibre basis isomorphism. Consequently K/mK=0. The determinant trick applied to finite K again gives K=0. Hence f is an isomorphism. The case r=0 is included. [F1, F2, F3, F4, F5, step 2.1, given, construct, algebra]

4.1 **Spreading the basis near a specified prime.** Suppose instead that S is a ring over R, q is a specified prime, and the preceding argument applies to M_q. Lift its finitely many basis elements to M after one localization outside q. The cokernel of the resulting map S^r→M is finite and vanishes at q, so one further element outside q kills all its chosen generators. After that localization the map is surjective; because M is finitely presented its kernel is finite by the same presentation comparison. Its localization at q is zero, so one further element outside q kills its finitely many generators. The map is then an isomorphism on a principal neighborhood. No general openness-of-flatness theorem is used. [F1, F2, F3, F4, F5, step 3.1, given, construct, algebra]

5.1 **Auxiliary finite algebra fact.** A finite algebra B over S which is finitely presented as an S-algebra is finitely presented as an S-module. Indeed take finite algebra generators, each satisfying a monic equation (obtainable by the finite determinant trick on a module generating set). The algebra T defined by these individual monic equations is finite free over S, with its explicit bounded monomial basis. A finite algebra presentation of B says that B=T/J with J generated by finitely many elements as a T-ideal. Multiplying these generators by the finite monomial basis gives finite S-generators for J; thus T→B has finite kernel and B is finitely presented as an S-module. [F1, F2, F3, F4, F5, step 4.1, given, construct, algebra]

6.1 **Finite projective fibre case.** A finite direct summand P of a finite free module over a local ring L is free: choose a basis of P/nP (finite-dimensional linear algebra), lift it, use the determinant trick to obtain L^r→P surjective, split by projectivity, and apply the same determinant trick to its finite direct-summand kernel, whose reduction is zero. Accordingly the main result also applies when the fibre is finite projective, after localizing at the specified fibre point. [F1, F2, F3, F4, F5, step 5.1, given, construct, algebra]

7.1 Take affine neighborhoods Spec B⊂X and Spec A⊂S at a chosen point over s, with B flat and finitely presented over A. Let p represent s, set R=A_p, k=κ(p), and C=B⊗A k. Then C is a nonzero finite-type k-algebra. Apply the actual unqualified published `cor-noether-normalisation-module-finiteness` to obtain a polynomial subring P=k[t1,…,td]⊂C over which C is finite. [F1, F2, F3, F4, F5, step 6.1, given, construct, algebra]

8.1 Over the fraction field of P the finite module C has a finite basis. Lift that finite basis to C, clearing its finitely many denominators. Generic linear independence makes P^r→C injective (P is a domain). Its finite cokernel vanishes after tensoring with Frac(P), so one nonzero h∈P kills its finitely many generators after localization. Thus C_h is finite free of positive rank over P_h. Positivity follows from the injection P→C. This is a finite-basis argument, not an appeal to generic flatness. [F1, F2, F3, F4, F5, step 7.1, given, construct, algebra]

9.1 There is a closed point m of Spec(P_h) with residue field finite over k, constructively as follows. For any nonzero finite-type k-algebra D, normalize it finitely over Q=k[z1,…,ze]. The quotient D/(z1,…,ze)D is nonzero: otherwise the determinant trick on the finite Q-module D gives (1-a)D=0 with a∈(z1,…,ze); applying this to 1 and using Q⊂D would give 1=a in Q, a contradiction. That quotient is finite-dimensional over k. Among its proper ideals choose one of maximal vector-space dimension; the finite integer bound makes this a finite maximum, and its quotient is a field, since a larger proper ideal is impossible. This produces a finite residue field without any arbitrary maximal-ideal principle. Apply the construction to D=P_h. The restricted prime of P is maximal as well, since its image in a finite extension of k is a finite-dimensional domain and hence a field. Because C_h is nonzero free over P_h, its fibre over m is a nonzero finite-dimensional algebra; the same finite-dimensional argument supplies a point q of C over m with finite residue field. [F1, F2, F3, F4, F5, step 8.1, given, construct, algebra]

10.1 Lift the finitely many t_i and coefficients of h from C to B⊗A R. After localizing the source at the lifted h obtain an R-morphism X0→Y=Spec(R[t1,…,td]_h), locally of finite presentation. At q it is quasi-finite: its fibre over m is the finite k(m)-algebra supplied in step3. Apply the finite-localization lemma to obtain elementary étale U→Y and open V⊂X0×Y U finite over U, with specified u,v and the residue-field properties above. Shrink U affine around u. Since finite morphisms are preserved by this shrinking, V is affine. [F1, F2, F3, F4, F5, step 9.1, given, construct, algebra]

11.1 On the closed k-fibre, X0,k×Y_k U_k is finite free over U_k by step2. Its open subscheme V_k is also finite over U_k by step4. The open immersion V_k→X0,k×U_k is finite: on affine coordinate rings a finite U_k-module is also finite as a module over the intervening U_k-algebra, using the same generators. A finite open immersion is closed, hence clopen. One elementary verification of closedness is that its image is the support of its finite algebra module; at a given prime this support is V(ann M), by finite generation and the determinant trick. Consequently its algebra is a direct summand of the finite free algebra of X0,k×U_k. Its module is finite projective over U_k, and is free after localizing at u, by the finite-projective clause of the preceding explicit calculation. [F1, F2, F3, F4, F5, step 10.1, given, construct, algebra]

12.1 Put S0=O(U)_u and M=O(V)⊗O(U) S0. The module M is finitely presented over S0: V→U is finite and locally finitely presented, and the explicit auxiliary finite-algebra proof in the preceding explicit calculation applies. It is R-flat. Indeed X0 is R-flat, X0×Y U→X0 is étale and therefore flat, and the finite-localization lemma constructs V by explicit principal localizations, which preserve algebraic flatness; the further localization at u does as well. Thus no pointwise-to-global flatness criterion is needed here. Its closed fibre is free over S0/m_R S0 by step5. Apply the finite-fibre-basis lifting proof to obtain M free over S0. Spread the finite basis, its finite cokernel, and finite kernel as explicitly proved there. Thus after one principal shrinking of U around u, V→U is finite free of positive rank. The positive rank follows from the existing v above u. No relative Cohen–Macaulay openness, general openness of flatness, or Noetherian approximation is used. [F1, F2, F3, F4, F5, step 11.1, given, construct, algebra]

13.1 Let L=k(m), and write a_i for the images of t_i in L. The sequence of subfields L_i=k[a1,…,ai] is a finite tower: each finite-dimensional k-subalgebra of a field is a field. Take the monic minimal polynomial of a_i over L_(i−1); express its finitely many coefficients as polynomials in the preceding a_j. These give triangular monic polynomials f_i(t1,…,ti) with k[t]/(f1,…,fd)=L. Lift their finitely many k-coefficients to R, obtaining monic triangular F_i. Then T=Spec R[t]/(F1,…,Fd) is finite free over R by the explicit bounded monomial basis, and its closed fibre is Spec L. Restrict T to the open where h is invertible; this restriction is flat and quasi-finite of finite presentation over R and retains the closed fibre because h(m)≠0. [F1, F2, F3, F4, F5, step 12.1, given, construct, algebra]

14.1 Form U_T=U×Y T and Z=V×U U_T. Then Z→U_T is finite free, U_T→T is étale, and T→Spec R is an open restriction of a finite free map. Their composite is flat, quasi-finite, and finitely presented. It maps to X by construction. The pair of specified points u and the closed point of T both has residue field L over m, so gives an L-point of U_T; v gives a point of Z above it. Thus Z has a point above the specified closed point of Spec R. [F1, F2, F3, F4, F5, step 13.1, given, construct, algebra]

15.1 This is actual finite presentation data over A_p, and can be spread to A_a for one a∉p without invoking descent of flatness from a limit. More explicitly, retain the finite-localization lemma’s explicit TWO monic-factorization/resultant presentations of U and their principal localizations; their flatness, finite presentation, and geometric zero-dimensional regularity are proved uniformly over every base ring by the the finite-localization lemma algebraic construction, so no arbitrary étale standardization is required. Write its finite free algebra using a finite basis and its finitely many structure constants, including unit and multiplication relations, and write its map to X using the finite presentation of B. Write the triangular F_i and the finite localizations. All coefficients are fractions in A_p. Clear their finitely many denominators, and clear the finitely many identities in these presentations and their inverse maps by one further element outside p. The resulting Z over A_a is still, by its explicit presentations, a composite of finite free, the explicit factorization/resultant étale charts, and open restrictions of finite free maps. Therefore its flatness and quasi-finiteness hold directly, without a general spreading theorem. The specified fibre and its point are unchanged. Composing its map to Spec A_a with the open immersion into S proves the assertion. [F1, F2, F3, F4, F5, step 14.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
