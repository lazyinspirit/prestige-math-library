---
id: lem-good-reduction-stable-under-base-change
kind: lemma
title: "Good reduction is stable under base change of the base"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-good-reduction-and-abelian-scheme-model
  - lem-abelian-scheme-base-change-and-products
  - def-base-change-morphism-schemes
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-proper-fp-stage
  - thm-smooth-locus-open
  - thm-proper-morphism-closed-image
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-global-functions-proper-integral-variety
  - def-abelian-scheme
  - thm-ring-of-integers-free-of-rank-degree
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-clearing-denominators-for-an-algebraic-number
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.3 and Chapter 7 (base change of good reduction; spreading over number fields)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $S$ be a Dedekind scheme with function field $K$, let $A_K$ be an abelian variety with good reduction over $S$ witnessed by an abelian scheme $A\to S$, and let $S'\to S$ be a dominant morphism of Dedekind schemes with function field $K'$ (for instance the normalization of $S$ in a finite extension $K'/K$, or the localisation of $S$ at a point). Then $A_{S'}\to S'$ is an abelian scheme and $A_{K'}=A_{S'}\times_{S'}\operatorname{Spec}K'$ has good reduction over $S'$; the model is the base change of the model $A$. In particular good reduction is preserved by finite extensions of the function field and by localisation of the base. Nothing is asserted about the converse: descent along ramified base change can fail, as recorded on the companion examples page.

In addition, every abelian variety over a number field $K$ has good reduction at all but finitely many finite places.

## Facts & Assumptions

**Given:** AC and DC, a Dedekind scheme $S$ with function field $K$, an abelian scheme $A\to S$, a dominant morphism $S'\to S$ of Dedekind schemes, and, for the second clause, an abelian variety over a number field $K$.

[F1] Abelian schemes are stable under base change: $A_{S'}\to S'$ is an abelian scheme of the same relative dimension, with generic fibre $A_{K'}$ ([[lem-abelian-scheme-base-change-and-products]], [[def-base-change-morphism-schemes]], [[def-good-reduction-and-abelian-scheme-model]]).

[F2] Objects and morphisms of finite presentation descend along filtered colimits, and properness descends along such stages ([[lem-filtered-colimit-fp-scheme-stage]], [[lem-filtered-colimit-proper-fp-stage]]); the ring of integers is a free $\mathbb Z$-module of rank the degree and a Dedekind domain, and algebraic numbers have bounded denominators ([[thm-ring-of-integers-free-of-rank-degree]], [[cor-ring-of-integers-is-a-dedekind-domain]], [[thm-clearing-denominators-for-an-algebraic-number]]).

[F3] The smooth locus is open, and the perfect complex of cohomology of a proper flat finitely presented sheaf is compatible with base change; a proper geometrically integral fibre has global functions equal to its base field ([[thm-smooth-locus-open]], [[thm-proper-morphism-closed-image]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-global-functions-proper-integral-variety]]).

## Proof

**Proof technique:** direct for base change; spreading with finitely many denominator conditions for the number-field clause.

1.1 By [F1] the base change $A_{S'}=A\times_SS'\to S'$ is an abelian scheme and its generic fibre is $A_{K'}$; hence $A_{K'}$ has good reduction over $S'$ with model $A_{S'}$, and since $S'\to S$ is dominant the function field extension is defined. This proves the base-change stability statements, and no converse assertion is made. [F1, given, algebra]

2.1 For the number-field clause write $K$ as the filtered colimit of the rings $\mathcal O_K[1/d]$, $d\ne0$; by [F2] the finitely presented abelian variety $A_K$ descends to a proper finitely presented model over some $\mathcal O_K[1/d]$, and multiplication, unit, inverse and their finitely many identities descend at a common later stage. The smooth locus of the descended model is open, and its closed nonsmooth locus has closed image under the proper structure morphism and misses the generic point, so inverting one further integer removes it. Smoothness over the Dedekind base then gives flatness of the structure sheaf, and the removed closed set is finite. [F2, F3, step 1.1, construct]

3.1 Choose the universal finite projective cohomology complex of the structure sheaf over a stage by [F3]. Over $K$ its differentials split, so the complex is the direct sum of its finite-dimensional cohomology and contractible pairs; all bases, inverse matrices and chain identities involve finitely many denominators and spread after inverting one further integer. The degree-zero remaining module has rank one because $H^0(A_K,\mathcal O)=K$ by [F3]. Therefore every geometric fibre has degree-zero cohomology of dimension one by universal cohomology comparison and is connected: a disconnected proper fibre would produce independent nontrivial clopen idempotents. Smoothness gives relative dimension $g$ after discarding any components absent generically, whose closed proper images miss the generic point. [F2, F3, step 2.1, algebra]

4.1 The resulting smooth proper finitely presented group scheme with geometrically connected fibres is an abelian scheme by [[def-abelian-scheme]]; the places removed form a finite set of closed points of $\operatorname{Spec}\mathcal O_K$, and localizing at every remaining place proves that $A_K$ has good reduction there. This supplies the number-field spreading clause directly rather than using base-change stability as a substitute for spreading. [F1, F2, step 3.1, algebra] ∎ 
