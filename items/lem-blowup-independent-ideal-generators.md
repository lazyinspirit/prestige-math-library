---
id: lem-blowup-independent-ideal-generators
kind: lemma
title: "The blowup is independent of chosen ideal generators"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-rees-algebra-ideal-sheaf
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-blowup-local-on-base-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Present both chart covers as the canonical basic opens of the single relative Proj and glue the identity on overlaps"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.2 before 19.2.1, p. 382, and Exercise 19.2.D"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1 and Lemma 31.33.4, section 31.33"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://math.mit.edu/~higgs/18.725_2015.pdf"
      locator: "Lecture 9, Proposition 13 and its proof, PDF pp. 24-25"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice, inherited from the relative Proj construction used
to define the blowup ([[def-axiom-of-choice]]). Let $X$ be a scheme and let
$\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$
([[def-quasi-coherent-ideal-sheaf]]). For two finite families of local
generators of $\mathcal I$ on an open cover of $X$, the corresponding
collections of standard affine charts and overlap identifications of the
blowup $\operatorname{Bl}_{\mathcal I}X$ of
[[def-blowup-scheme-along-ideal]] glue to canonically isomorphic $X$-schemes;
on a common chart the canonical isomorphism is the identity on the common
affine blowup algebra. In particular $\operatorname{Bl}_{\mathcal I}X$, as a
relative Proj, does not depend on any chosen finite generating set, and the
affine blowup presentations $A[\mathcal I/a]$ for $a\in\mathcal I$ are
canonically identified with the standard charts.

## Facts & Assumptions

**Given:** A scheme $X$ with a quasi-coherent ideal sheaf $\mathcal I$ of
finite type, its Rees algebra sheaf
$\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$
([[def-rees-algebra-ideal-sheaf]]), the blowup
$\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$
([[def-blowup-scheme-along-ideal]]), and for an affine open
$U=\operatorname{Spec}A\subseteq X$ with $I=\Gamma(U,\mathcal I)$ and $a\in I$
the affine blowup algebra $A[I/a]=(R(I))_{(a)}$, the degree-zero part of the
localisation of $R(I)$ at the degree-one element $at$
([[lem-affine-blowup-algebra-properties]]).

[F1] [[def-blowup-scheme-along-ideal]]: The blowup is the relative Proj
$\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$
of the Rees algebra sheaf, with structural morphism to $X$; the Rees algebra
and its graded pieces are intrinsic to $\mathcal I$, with no auxiliary
generating data.

[F2] [[lem-affine-blowup-algebra-properties]]: For $a\in I$ the affine blowup
algebra $A[I/a]$ has $IA[I/a]=aA[I/a]$ with $a$ a nonzerodivisor, equals
$A_a$ after inverting $a$, and is independent of the generating set and of the
representative used for the homogeneous localisation, up to canonical
$A$-algebra isomorphism.

[F3] [[thm-affine-blowup-standard-charts]]: For $I=(f_0,\dots,f_r)$ the
standard opens $U_i=D_+(f_it)=\operatorname{Spec}A[I/f_i]$ cover
$\operatorname{Bl}_I\operatorname{Spec}A$; their overlaps are
$U_i\cap U_j=D(u_{ij})$ for $u_{ij}=(f_jt)/(f_it)$ in $B_i=A[I/f_i]$, with
canonical identifications $(B_i)_{u_{ij}}=(B_j)_{u_{ji}}$, $u_{ij}\mapsto
u_{ji}^{-1}$, satisfying the identity and cocycle conditions and preserving the
structure maps to $\operatorname{Spec}A$. Different finite generating families
give compatible chart covers of the same canonical blowup.

[F4] [[lem-blowup-local-on-base-scheme]]: For an open subscheme
$j\colon U\hookrightarrow X$ there is a canonical isomorphism
$\operatorname{Bl}_{\mathcal I|_U}U\to\operatorname{Bl}_{\mathcal I}X\times_XU$,
compatible with inclusions of opens.

## Proof

1.1 The Rees algebra $R(I)=\bigoplus_{n\ge0}I^nt^n$ and the affine blowup algebra $A[I/a]=(R(I))_{(a)}$ for $a\in I$ depend only on $I$ and $a$: by [F2] the affine blowup algebra is independent of the chosen generating set and of the representative of the homogeneous localisation, up to canonical isomorphism. [F2]

1.2 Let $U=\operatorname{Spec}A$ be an affine open and let $f_0,\dots,f_r$ generate $I=\Gamma(U,\mathcal I)$. By [F3] the standard opens $U_i=D_+(f_it)=\operatorname{Spec}A[I/f_i]$ cover $\operatorname{Bl}_I U$, with overlaps $U_i\cap U_j=D(u_{ij})$ and the canonical identifications $(B_i)_{u_{ij}}=(B_j)_{u_{ji}}$ of chart rings given by the ratios of the degree-one elements $f_it,f_jt$ of $R(I)$. [F3]

2.1 Now let $g_0,\dots,g_s$ be a second finite family generating the same ideal $I$. Both families present open covers of the single scheme $\operatorname{Proj}_U R(I)=\operatorname{Bl}_I U$ by [F1]: a standard chart $D_+(ht)$ is the basic open of the degree-one element $ht\in R(I)_1$, so the charts of the two families are open subschemes of the same relative Proj, and every overlap $D_+(f_it)\cap D_+(g_jt)$ is the basic open of the degree-zero ratio of the two degree-one elements inside this Proj, identified with the corresponding localised chart ring as in [F3]. [F1, F3, step 1.2]

2.2 If a chart occurs in both families, that is $f_i=g_j=h$ for some $h\in I$, the two chart rings are both the affine blowup algebra $A[I/h]$ of [F2], and the identification is the identity of this common algebra, well defined independently of the family by step 1.1. [F2, step 1.1]

3.1 The chartwise identifications of steps 2.1 and 2.2 are the restrictions of the identity of the single scheme $\operatorname{Bl}_I U=\operatorname{Proj}_U R(I)$ to the members and pairwise overlaps of the two covers, so they satisfy the identity and cocycle conditions automatically, and glue to an isomorphism of presentations of $\operatorname{Bl}_I U$; over an affine cover of $X$ these isomorphisms are compatible on overlaps by [F4], so they glue to a canonical isomorphism of $X$-schemes between the presentations of $\operatorname{Bl}_{\mathcal I}X$ built from the two generating families. In particular $\operatorname{Bl}_{\mathcal I}X$ does not depend on a chosen finite generating set, and the affine blowup presentations $A[I/a]$, $a\in I$, are precisely the standard charts $D_+(at)$ of the canonical blowup. [F1, F4, step 2.1, step 2.2] ∎

## Remarks

- No bijection between the two chart families is produced, and none is needed:
  the two covers are compared inside the same relative Proj through their
  pairwise overlaps, as in [F3].
- The statement is used in practice to read off the standard charts
  $A[I/a]$ for any convenient $a\in I$ without changing the blowup; the
  fractional rescaling invariance of [[def-blowup-fractional-ideal]] is a
  different statement, comparing blowups of different ideals.
