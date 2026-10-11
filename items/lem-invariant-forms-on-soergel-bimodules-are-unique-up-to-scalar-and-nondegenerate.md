---
id: lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate
kind: lemma
title: "Invariant forms on an indecomposable Soergel bimodule are unique up to scalar, non-degenerate, and agree with the restricted Bott-Samelson form"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons, thm-the-type-a-soergel-hom-formula, lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Lemma 3.7, Lemma 3.10, Lemma 3.11 and display (1.1); Section 3.6 and Lemma 3.10"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Bemerkung 6.15 and Lemma 7.1 (the detecting role of the forms)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.3, Lemme 2.5 and Lemme 2.6"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Facts & Assumptions

**Given:** The real type-A Soergel category with indecomposables $B_x^R$, the invariant intersection form constructed on Bott-Samelson bimodules and its restriction to summands, and a strictly dominant $\rho$ with operator $L_0=\rho\cdot(-)$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F1] An invariant form on a bimodule $B$ is the same as a degree-zero bimodule map $B\to DB$; it is non-degenerate exactly when this map is an isomorphism, and for finite right-free $B$ this is equivalent to non-degeneracy of the reduced form ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], clauses (2) and (5)).

[F2] Under $\mathrm{S}(x)$, the comparison lemma gives $\operatorname{End}^0(B_x^R)=\mathbb R$, self-duality $B_x^R\cong D\,B_x^R$, and the graded character $\operatorname{ch}(B_x^R)=\underline H_x$, so that $\operatorname{Hom}^0(B_x^R,D\,B_x^R)=\operatorname{Hom}^0(B_x^R,B_x^R)=\mathbb R$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F3] The reduced-word factorization is $\rho=\sum_i\gamma_i\chi_i\varphi_i$, with every $\gamma_i>0$ and $\chi_i$ inserting $c_{s_i}$ ([[lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons]]). A normalized summand $B_z(d)$ has its reduced degree span at most $2\ell(z)$, independently of its shift; the normalized extremal degrees are one-dimensional ([[lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds]]).

[F4] The dictionary of hypotheses $\mathrm{HR}(x)$ and $\mathrm{HRbar}(x)$ uses the positively normalized intrinsic form on the one hand and the restricted reduced-word intersection forms on the other; HR is definiteness of the primitive Lefschetz forms with the standard sign ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

[F5] A real symmetric nonsingular form on a finite-dimensional real space has an orthogonal basis of definite sign blocks ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

## Statement

Assume $\mathrm{S}(x)$, i.e. $\operatorname{ch}(B_x^R)=\underline H_x$. Then:

1. the space of invariant forms on $B_x^R$ is one dimensional over $\mathbb R$, and every non-zero invariant form is non-degenerate;
2. if $B_x^R$ is embedded as a direct summand of a Bott-Samelson bimodule $\mathrm{BS}(\underline x)$ for a reduced expression of $x$, the restriction of the intersection form is a positive multiple of the intersection form on $B_x^R$;
3. consequently $\mathrm{HR}(x)$ holds for the intrinsic intersection form if and only if $\mathrm{HRbar}(x)$ holds for every (equivalently: some) embedding, and the two normalizations differ by a positive scalar, so no sign changes;
4. if $B=\bigoplus_zB_z^{R,m_z}$ with $\mathrm{S}(z)$ for all $z$, then non-degenerate symmetric invariant forms on $B$ are direct sums of the forms on the isotypic components tensored with nonsingular real symmetric multiplicity-space pairings, and an orthogonal decomposition into isotypic components can always be chosen.

## Proof

1.1 First prove the missing reduced-word bottom positivity. For a reduced word of length $m$, the bottom line is its $1$-tensor and the top line its all-$c_s$ tensor. Induct on $m$, with value $1$ for the empty word. The factorization in [F3] gives $\rho c_{\mathrm{bot}}=\sum_i\gamma_i\chi_i(c_{\mathrm{bot}})$ after reduction. If the deleted word is reduced, applying $\rho^{m-1}$ and induction gives a positive multiple $N_i c_{\mathrm{top}}$. If it is not reduced, every indecomposable in its finite decomposition has label of length less than $m-1$, by the subexpression support and classification. On every shift of such a summand, $\rho^{m-1}$ vanishes by the degree span in [F3], so this deletion contributes zero. At least the last deletion is reduced. Thus $\rho^m c_{\mathrm{bot}}=(\sum_{i\text{ reduced deletion}}\gamma_iN_i)c_{\mathrm{top}}$ with positive coefficient. The trace of $c_{\mathrm{top}}$ is one, proving the positive bottom Lefschetz value without assuming hard Lefschetz. [F1, F2, F3, algebra]

2.1 Under $S(x)$ the unshifted duality and degree-zero endomorphism computation of [F2] give a one-dimensional space $\operatorname{Hom}^0(B_x,DB_x)$ which contains an isomorphism. Every nonzero map in this space is consequently an isomorphism, proving (1) directly. For an arbitrary embedding into a reduced word, the normalized bottom line of $B_x$ maps isomorphically to the word's bottom line by the degree bounds. Step 1.1 therefore makes the restricted invariant symmetric form nonzero; by this one-dimensional argument it is perfect. Normalize one such form to bottom value one. Every embedding's restriction is then a positive scalar multiple, proving (2) without inferring perfection merely from an ambient perfect form. [F1, F2, F3, step 1.1]

3.1 Positive scalar multiples have the same primitive spaces, because the operator is unchanged, and their Lefschetz forms have the same definiteness signs. Hence the intrinsic standard-sign HR condition under $S(x)$ is equivalent to the restricted-form condition for every embedding, and already to that for any one embedding. This proves (3), with the conditional intrinsic form and unconditional embedded-form convention of [F4]. [F4, step 2.1]

3.2 For labels $y\ne z$ with $S(y),S(z)$, the actual graded Hom formula and the standard KL trace pairing give $\operatorname{Hom}^0(B_y,DB_z)=0$: its free Hom rank lies in $v\mathbb Z[v]$, and the polynomial ring has no negative degrees. This is a degree-zero Hom calculation, rather than an inference from the locality of their endomorphism rings. Thus every invariant form on $\bigoplus_zB_z^{m_z}$ pairs different isotypic components orthogonally. On one component, each matrix entry is a scalar multiple of the fixed perfect normalized $B_z$ form by (1), giving exactly a multiplicity-space matrix $Q_z$. Symmetry of the full form is symmetry of $Q_z$, and perfection is nonsingularity of every $Q_z$. Orthogonal diagonalization of each finite real symmetric matrix, or the elimination proof of [F5], supplies the claimed orthogonal copies and proves (4). No assertion that different multiplicity matrices are scalar multiples is made. [F1, F2, F5, step 2.1, algebra]

4.1 Step 2.1 proves uniqueness, perfection and positive comparison, step 3.1 the HR equivalence, and step 3.2 the complete isotypic multiplicity description. The bottom calculation was proved first in step 1.1 from normalized degree bounds and positive factorization, and no character theorem for the next label or Hodge conclusion was assumed. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
