---
id: thm-khovanov-seidel-homs-compute-bigraded-arc-intersections
kind: theorem
title: "Homs compute bigraded arc intersections"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis
  - thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action
  - def-graded-khovanov-seidel-module-category-and-projectives
  - def-basic-arcs-admissible-curves-and-normal-form
  - def-axiom-of-choice
  - lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators
  - def-khovanov-seidel-complex-of-a-braid-word
  - def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
  - lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers
  - lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex
  - def-khovanov-seidel-complex-of-an-admissible-bigraded-curve
  - lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves
proof_strategy: direct
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 4c, Proposition 4.9 and Theorem 1.1"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Proposition 4.9, Lemmas 4.10-4.12 and Theorem 1.1, printed pp. 44-47"
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the representative-independence and isotopy invariance
of intersection numbers ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]])
and used to interpret $\sigma\in B_{m+1}$ as a boundary-fixed
mapping class acting on bigraded curves
([[def-basic-arcs-admissible-curves-and-normal-form]], with its Artin completeness and smooth comparison);
the graded Hom and Poincaré-polynomial computation is finite. For all
$\sigma,\tau\in B_{m+1}$, all $s_1,s_2\in\mathbb Z$ and all $0\le k,j\le m$ the
abelian group
$$\operatorname{Hom}_{C_m}\bigl(R_\tau P_k,\,R_\sigma P_j[s_1]\{-s_2\}\bigr)$$
is free, and its Poincaré polynomial satisfies
$$\sum_{s_1,s_2}\operatorname{rk}\operatorname{Hom}_{C_m}\bigl(R_\tau P_k,R_\sigma P_j[s_1]\{-s_2\}\bigr)q_1^{s_1}q_2^{s_2} =I^{\mathrm{bigr}}\bigl(\widetilde f_\tau(\widetilde b_k),\widetilde f_\sigma(\widetilde b_j)\bigr),$$
where $\widetilde f_\sigma$ is the preferred lift of the boundary-fixed mapping
class representing $\sigma$ under the isomorphism $B_{m+1}\cong G$, acting on
the normalized bigradings of the basic arcs. In particular, specializing
$q_1=q_2=1$ gives
$$I^{\mathrm{bigr}}(\ldots)\big|_{q_1=q_2=1}=2\,I(\cdot,\cdot),$$
so the ranks at $q_1=q_2=1$ recover twice the ordinary geometric intersection
numbers of the source's curves.

## Facts & Assumptions
**Given:** AC, the braid group action on bigraded curves by preferred lifts, the complexes $R_\sigma$ acting on $C_m$, the normalized bigradings of the basic arcs, and the complex $L(\widetilde c)$ of an admissible bigraded curve.

[L1] $R_\sigma P_j\cong L(\sigma\widetilde b_j)$ for normalized bigradings of the basic arcs, and $R_\sigma$ is an equivalence of $C_m$ with inverse $R_{\sigma^{-1}}$ ([[lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators]], [[thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action]]).

[L2] $L(\widetilde c)$ is a bounded complex of finite graded projectives and its homotopy type depends only on the isotopy class of $\widetilde c$; the deck action acts by shifts $L(\chi(r_1,r_2)\widetilde c)\cong L(\widetilde c)[-r_1]\{r_2\}$ ([[lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves]], [[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]]).

[L3] For chain complexes over an abelian category the homotopy classes of chain maps are the degree-zero homology of the Hom complex: $\operatorname{Hom}_{K}(C,D)\cong H_0(\underline{\operatorname{Hom}}(C,D))$, and the bigraded Hom groups of $C_m$ are the degree-zero homology of the bigraded Hom complex ([[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]]).

[L4] Under AC, $I^{\mathrm{bigr}}$ is invariant under the preferred lifts: $I^{\mathrm{bigr}}(\widetilde f(\widetilde c_0),\widetilde f(\widetilde c_1))=I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$, and it is a sum of the contributions of the $k$-strings, with the table of [[lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers]] ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]).

[L5] The graded maps $P_k=A_me_k\to P_j=A_me_j$ are right multiplication by paths in $e_kA_me_j$. The finite path basis gives zero when $|k-j|>1$, one arrow for adjacent vertices, the vertex and degree-one return for $k=j>0$, and only the vertex for $k=j=0$. Thus adjacent and internally shifted self Homs must not be discarded ([[def-graded-khovanov-seidel-module-category-and-projectives]], [[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[L6] Bigradings of non-closed curves exist and are unique up to the deck action, and $\widetilde b_j$ is a basic arc ([[lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action]], [[def-basic-arcs-admissible-curves-and-normal-form]]).



[F1] **Literature input.** KS Lemma 4.10 proves the string decomposition of shifted Homs: the only surviving projectives have $|x_0-k|\le1$, and the differential components joining different $k$-strings induce zero on $\operatorname{Hom}(P_k,-)$. Lemmas 4.11–4.12 prove that each string Hom group is free, with the base Poincaré tables equal to the complete bigraded contribution tables, and the parameters multiply them by $q_1^{r_1}q_2^{r_2}(q_1^{-1}q_2)^u$ for the integer-indexed families. Their proof first removes deck shifts and integer twists and only then computes the base diagrams. For type VI(0,0), one has $L(\widetilde b_k)=P_k$; its self-Hom has the vertex in bidegree $(0,0)$ and the return in bidegree $(0,1)$, both with homological shift zero. Thus its polynomial is $1+q_2$, agreeing directly with the source tables and the self-intersection computation of [L4]. This is a stated literature input; we do not infer free homology merely from free chains (KS full proof, printed pp. 45–47).

## Proof

**Proof technique:** source-supported direct reduction.

1.1 *Reduction to the first untwisted arc.* Apply the inverse equivalence $R_{\tau^{-1}}$ to both arguments of each shifted Hom. The weak action identifies the second image with $R_{\tau^{-1}\sigma}P_j$. Apply the corresponding inverse preferred lift to both geometric arcs; [L4] gives the same reduction of their intersection polynomial. It therefore suffices to compare $\operatorname{Hom}(P_k,L(\widetilde c)[s_1]\{-s_2\})$ and $I^{\mathrm{bigr}}(\widetilde b_k,\widetilde c)$, with $\widetilde c=\widetilde f_{\tau^{-1}\sigma}\widetilde b_j$ by [L1], a bigraded basic-arc image. [L1, L4, L6]

1.2 *The correct string decomposition.* Compute these groups as homology of the Hom complex by [L3]. The corner basis [L5] kills summands farther than one vertex from $k$, while retaining adjacent arrows and the self return. For different $k$-strings the remaining connecting differential acts by a length-three product or a forbidden return at the exterior vertex, hence is zero, as the source string-splitting calculation in [F1] proves. Thus for every pair of shifts the Hom group is the finite direct sum of the string Hom groups. [L2, L3, L5, F1]

1.3 *Base diagrams, integer twists and freeness.* The source local theorem [F1] computes the BASE diagrams, then extends by deck shifts and integer half twists. For example its $\mathrm I_0$ Hom complex reduces to $0\to\mathbb Z\{1\}\xrightarrow{0}\mathbb Z\to0$, giving $q_1+q_2$ and free groups. The four exceptional zero-contribution types have acyclic Hom complexes; the other base types give the full table of [L4], with type VI checked directly in [F1]. The source's parameter reduction multiplies the table by the stated monomial, without claiming an arbitrary winding string has at most three terms. Crucially [F1] asserts freeness of the actual string HOMOLOGY groups; that property is not inferred from the chain groups alone. [L2, L3, L4, F1]

2.1 *The polynomial and all shifts.* Summing the string polynomials of step 1.3 gives $I^{\mathrm{bigr}}(\widetilde b_k,\widetilde c)$ by [L4], while step 1.2 identifies each coefficient with the rank of the corresponding shifted Hom group. A finite direct sum of the free string Hom groups is free. Step 1.1 now returns the original $\sigma,\tau$ and both geometric images, proving the claimed full Poincaré formula and freeness for every shift. [step 1.1, step 1.2, step 1.3, L4, F1]

3.1 *Specialization and conclusion.* Property (B1) of [L4] evaluates the polynomial at $q_1=q_2=1$ as twice the ordinary intersection number. The equivalence reduction, correctly retained corner Homs, exact source string theorem and coefficient-wise freeness prove all claimed conclusions. AC is inherited through the braid/mapping-class dictionary and the supplied representative-independence and isotopy invariance of intersection numbers; the finite string groups add no choice requirement. [step 2.1, L4] ∎
