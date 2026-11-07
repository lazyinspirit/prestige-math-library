---
id: lem-pointed-henselian-integer-models-and-finite-projective-line-descent
kind: lemma
title: Pointed henselian integer models and finite cover descent
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- thm-etale-locally-standard-etale
- thm-jacobian-criterion-smooth-morphism
- thm-etale-equivalent-flat-unramified-fp
- thm-etale-formally-etale-finite-presentation
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- def-henselian-pair-and-henselian-local-ring
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0A04
    url: https://stacks.math.columbia.edu/tag/0A04
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let $(A,\mathfrak m,k)$ be a henselian local ring. The ring $A$ is the filtered colimit of the ordinary henselizations of its pointed local submodels $B_{\mathfrak m\cap B}$, where $B$ ranges over its finite-type $\mathbf Z$-subalgebras; their residue fields have filtered colimit $k$. If $Y\to\mathbf P^1_A$ is finite and finitely presented, $M$ is a finite abelian group, and $P_0\to Y_k$ is an étale $M$-torsor, then $Y$, $P_0$, their actions and torsor inverse descend to one such henselian model and its residue field.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] The following existing interface is used at its literal public scope: [[thm-etale-locally-standard-etale]].

[F3] The Jacobian criterion supplies smoothness of the explicit factorization chart, and an unramified smooth morphism of finite presentation is étale. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-equivalent-flat-unramified-fp]]

[F4] The following existing interface is used at its literal public scope: [[thm-etale-formally-etale-finite-presentation]].

[F5] The following existing interface is used at its literal public scope: [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]].

[F6] The following existing interface is used at its literal public scope: [[def-henselian-pair-and-henselian-local-ring]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Index the finitely generated Z-subalgebras B_i⊂A by inclusion. This is a filtered set: adjoining the union of two finite generating lists gives a third such subalgebra. Put p_i=m∩B_i and R_i=(B_i)_(p_i). All elements inverted in R_i are units in A, so R_i embeds in A. The maps R_i→R_j are local. Their filtered union is A, since each a∈A belongs to one B_i. Their residue fields k_i=Frac(B_i/p_i) embed in k and have union k. Their maximal ideals have union m. These are statements about the given local ring, not choices of unrelated primes. [F1, F6, given, construct, algebra]

2.1 For any one local R_i construct its henselization H_i from all affine finitely presented étale R_i-algebras C equipped with an isomorphism C/p_iC≅k_i. Tensor products give common successors. Parallel maps are equalized on the equalizer open, which contains that whole closed fibre. Because the maps are affine étale, that equalizer is also closed, hence is a clopen principal localization; equivalently a finite unit equation chooses a principal open containing the closed fibre inside it. Thus these objects form a filtered system, and H_i is its colimit. It satisfies H_i/p_iH_i=k_i. [F1, F4, F6, step 1.1, given, construct, algebra]

3.1 The pair (H_i,p_iH_i) is henselian. Every element 1+a with a∈p_iH_i is made a unit by a principal localization at a finite stage that leaves the closed fibre unchanged; hence p_iH_i lies in its Jacobson radical by the unit criterion. For a prescribed monic coprime residue factorization, its finite coefficients descend to one stage. The universal monic factor-coefficient chart localized at its resultant is étale: its square Jacobian is the Sylvester multiplication map (δg,δh)↦hδg+gδh with determinant the resultant, so [F3] applies. The specified residue factorization is a section of that chart over k_i. Its image in that closed fibre is open and closed; invert a lift of its defining idempotent to discard the other fibre components. This gives another object of the system, and its universal factors lift the factorization in H_i. Uniqueness follows from the usual coprime-factor/idempotent argument. The quotient being a field and the radical condition imply H_i is local with maximal ideal p_iH_i. [F1, F3, F6, step 2.1, given, construct, algebra]

4.1 Every local map R_i→D to a henselian local ring, with its specified residue extension k_i→κ(D), extends uniquely to a local map H_i→D. For each defining étale object C, its specified k_i-point becomes a rational closed point over D; the standard étale chart and the henselian simple-root property [F2, F6] supply its unique D-section, hence a map C→D. The uniqueness makes the maps compatible without choosing an indexed family of lifts. Their colimit gives the required map. Conversely any extension has those same restrictions. This proves the universal property needed here from the actual finite chart construction; no Noetherianity or completion property is asserted. In particular there are compatible maps H_i→A and H_i→H_j for j≥i. [F1, F2, F6, step 3.1, given, construct, algebra]

5.1 Let H=colim_i H_i. The local transition maps give H a local ring structure, with residue colim k_i=k. It is henselian: a monic polynomial and prescribed residue factorization involve finitely many coefficients and equations, and thus occur at one stage H_i after increasing i; their coprimality is witnessed by a finite Bezout equation in the residue field and also descends. The factorization lifts there and hence in H. The maps from the R_i induce a local map α:A=colim R_i→H, while the compatible maps of step4.1 give β:H→A. One has βα=id_A. For each H_i both αβ and the canonical map H_i→H extend the same local R_i-map to the henselian local ring H, so step4.1 makes them equal. Therefore αβ=id_H as well. This proves A≅colim_i H_i, with the indicated residue-field colimit. It is the needed pointed filtered-colimit identity, not a claim about completions. [F1, F6, step 4.1, given, construct, algebra]

6.1 Descend the given finite finitely presented Y→P1_A. Cover P1 by its two standard affine charts, with rings A[t] and A[u], and intersection A[t,t^(-1)] with u=t^(-1). The inverse images of these charts in Y are affine, given by finite finitely presented algebras C_t and C_u. Each has a finite algebra presentation and finitely many monic equations for a finite set of algebra generators, proving module-finiteness. More explicitly a polynomial algebra modulo those monic equations is finite free on bounded monomials; its map to C_t or C_u has finitely generated ideal kernel because the original algebra presentation has finitely many relations. That kernel is generated as a module by the finitely many algebra relations times the bounded monomials. Thus the finite algebra has a finite module presentation too. [F1, step 5.1, given, construct, algebra]

7.1 The gluing over the two-chart overlap is an algebra isomorphism between the localizations of C_t and C_u. Write the images of their finitely many algebra generators using finite Laurent polynomials and choose such expressions for the inverse map. The algebra relations, multiplication, identities and inverse compositions give finitely many coefficient equations over A. All presentation coefficients and these finite data occur in one B_i; any equation true in A is true after passage to a sufficiently large stage (here the B_i are actual subalgebras, so equality is already literal). The descended monic equations still prove finiteness. Glue the two descended affine schemes along this inverse algebra pair to get Y_i finite and finitely presented over P1_(B_i), whose base change is Y. Localize and then base change to H_i to obtain Y_(H_i). No general properness-descends-in-limits assertion was needed: finite-over-projective already guarantees the proper scheme required for A6. [F1, F5, step 6.1, given, construct, algebra]

8.1 The closed fibres of this system have limit Y_k: after one stage the scheme Y is pulled back from the fixed finite presentation over B_i, and k=colim k_j. We now descend the particular finite étale M-torsor P0 on Y_k. Use the two affine chart inverse images of step6.1 and, if necessary, finite principal refinements on them. On each chart the finite étale algebra is finite projective, represented by a finite idempotent matrix; its multiplication and unit are finite matrices satisfying the algebra identities. A finite étale algebra has invertible trace pairing, and this is recorded by a finite inverse matrix on finitely many principal trivializing opens. Their finitely many covering unit equations are also retained. All these coefficients belong to one k_j. [F1, F5, step 6.1, step 7.1, given, construct, algebra]

9.1 The finitely many overlap isomorphisms of these algebras and their inverses are again finite matrices. Their compatibility and cocycle equations, together with all the M-action maps, descend after enlarging j. The torsor condition is an isomorphism P0×M≅P0×_(Y_k)P0; record its finite algebra map and its inverse, not just its generic fibre. Those equations also descend. The descended algebras remain finite projective with perfect trace and thus finite étale: after any field base change a nilpotent element annihilates the trace pairing, since its product with every element is nilpotent and its multiplication operator has trace zero. Perfectness therefore makes the finite-dimensional algebra reduced, hence a product of fields. Each field factor is separable, since an inseparable factor has degenerate field trace. Thus its geometric fibres are reduced zero-dimensional field products. The finite projective presentations give flatness and finite presentation, so the actual geometric definition of étale applies. Their finite descent maps glue to an actual M-torsor P_(0,j) over (Y_j)_(k_j). Its base change to k, including its group action, is the original P0. [F1, F5, step 8.1, given, construct, algebra]

10.1 Combining steps7.1–9.1 and passing to H_j gives exactly the pointed model in the Statement. Its residue is k_j, the chosen torsor is on its whole closed fibre, and the local map H_j→A recovers the original Y and P0 by the displayed finite equations. The group M remains the same finite constant group; no coefficient twisting or change of the original H1 class has occurred. [F1, F5, step 7.1, step 8.1, step 9.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
