---
id: lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate
kind: lemma
title: "Invariant forms on an indecomposable Soergel bimodule are unique up to scalar, non-degenerate, and agree with the restricted Bott-Samelson form"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]
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
---

## Facts & Assumptions

**Given:** The real type-A Soergel category with indecomposables $B_x^R$, the invariant intersection form constructed on Bott-Samelson bimodules and its restriction to summands, and a strictly dominant $\rho$ with operator $L_0=\rho\cdot(-)$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F1] An invariant form on a bimodule $B$ is the same as a degree-zero bimodule map $B\to DB$; it is non-degenerate exactly when this map is an isomorphism, and for finite right-free $B$ this is equivalent to non-degeneracy of the reduced form ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], clauses (2) and (5)).

[F2] Under $\mathrm{S}(x)$, the comparison lemma gives $\operatorname{End}^0(B_x^R)=\mathbb R$, self-duality $B_x^R\cong D\,B_x^R$, and the graded character $\operatorname{ch}(B_x^R)=\underline H_x$, so that $\operatorname{Hom}^0(B_x^R,D\,B_x^R)=\operatorname{Hom}^0(B_x^R,B_x^R)=\mathbb R$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F3] For a reduced expression $\underline x$ of $x$, the intersection form on $\mathrm{BS}(\underline x)$ is non-degenerate, and its Lefschetz form on the one-dimensional bottom space $\mathrm{BS}(\underline x)^{-\ell(x)}$ is positive definite: $\langle\rho^{\ell(x)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle>0$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], clause (4) and its Remark).

[F4] The dictionary of hypotheses $\mathrm{HR}(x)$ and $\mathrm{HRbar}(x)$ uses the positively normalized intrinsic form on the one hand and the restricted reduced-word intersection forms on the other; HR is definiteness of the primitive Lefschetz forms with the standard sign ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

[F5] A real symmetric nonsingular form on a finite-dimensional real space has an orthogonal basis of definite sign blocks ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

## Statement

Assume $\mathrm{S}(x)$, i.e. $\operatorname{ch}(B_x^R)=\underline H_x$. Then:

1. the space of invariant forms on $B_x^R$ is one dimensional over $\mathbb R$, and every non-zero invariant form is non-degenerate;
2. if $B_x^R$ is embedded as a direct summand of a Bott-Samelson bimodule $\mathrm{BS}(\underline x)$ for a reduced expression of $x$, the restriction of the intersection form is a positive multiple of the intersection form on $B_x^R$;
3. consequently $\mathrm{HR}(x)$ holds for the intrinsic intersection form if and only if $\mathrm{HRbar}(x)$ holds for every (equivalently: some) embedding, and the two normalizations differ by a positive scalar, so no sign changes;
4. if $B=\bigoplus_zB_z^{R,m_z}$ with $\mathrm{S}(z)$ for all $z$, then non-degenerate symmetric invariant forms on $B$ are direct sums of the forms on the isotypic components tensored with nonsingular real symmetric multiplicity-space pairings, and an orthogonal decomposition into isotypic components can always be chosen.

## Proof
**Proof technique:** direct, using the Hom formula, the bottom-degree positivity of the Bott-Samelson form, and orthogonal decomposition of multiplicity spaces.

1.1 **Invariant forms and degree-zero Hom.** By [F1] an invariant form on $B_x^R$ is the same as a degree-zero bimodule map $B_x^R\to D\,B_x^R$, so the space of invariant forms is $\operatorname{Hom}^0(B_x^R,D\,B_x^R)$; it is an $\mathbb R$-module under left multiplication on the output. Under $\mathrm{S}(x)$ we have $D\,B_x^R\cong B_x^R$ and $\operatorname{End}^0(B_x^R)=\mathbb R$ by [F2], so this space is one-dimensional over $\mathbb R$. [given, F1, F2]

1.2 **Orthogonality of isotypic components.** Let $B=\bigoplus_zB_z^{R,m_z}$ with $\mathrm{S}(z)$ for all $z$ and let $\langle-,-\rangle_B$ be a symmetric invariant form, non-degenerate or not. For $z\ne y$, $\operatorname{Hom}^0(B_z^R,D\,B_y^R)=0$ because the two sides are non-isomorphic indecomposables with local endomorphism algebras [F2]; hence the form pairs the $B_z$-isotypic component $V_z\otimes B_z^R$ (with $V_z$ the real multiplicity space) orthogonally to the $B_y$-isotypic component for $y\ne z$. [given, F1, F2]

2.1 **Existence of a non-degenerate form and uniqueness.** The restriction of the intersection form of a Bott-Samelson bimodule to $B_x^R$ is invariant and non-degenerate by [F3] and [F1], so the one-dimensional space of step 1.1 contains a non-degenerate form. Every other invariant form is a scalar multiple of it by dimension, and a nonzero scalar multiple of an isomorphism is again an isomorphism, hence non-degenerate; this proves (1). [step 1.1, F1, F3]

2.2 **Multiplicity pairings (4).** On the isotypic component $V_z\otimes B_z^R$, every invariant form is of the shape $\langle v\otimes b,v'\otimes b'\rangle=Q_z(v,v')\langle b,b'\rangle_z$ for a unique symmetric bilinear form $Q_z$ on the finite-dimensional real space $V_z$: invariance in $b$ and in $v$ forces the factorisation, using that the normalized form on $B_z^R$ is the unique invariant form up to scalar by (1). The full form on $B$ is the orthogonal direct sum of the forms $Q_z\otimes\langle-,-\rangle_z$, and it is non-degenerate exactly when every $Q_z$ is nonsingular. By [F5] each nonsingular symmetric $Q_z$ admits an orthogonal decomposition into one-dimensional definite blocks $Q_z=\bigoplus_\alpha q_{z,\alpha}$, giving a splitting of the isotypic component into orthogonal indecomposable copies $B_z^R$ with restricted forms the scalar multiples $q_{z,\alpha}\langle-,-\rangle_z$; this proves the existence of the orthogonal isotypic decomposition and completes (4). [step 1.2, F1, F5]

3.1 **Positivity of the comparison scalar.** Let $\underline x$ be a reduced expression and $B_x^R\subseteq\!\!\bigoplus\mathrm{BS}(\underline x)$ an embedding as a direct summand; write $\langle-,-\rangle_{\mathrm{BS}}$ for the restricted form and $\langle-,-\rangle_x$ for the normalized intrinsic form. By (1) both are non-zero invariant forms on $B_x^R$, so $\langle-,-\rangle_{\mathrm{BS}}=c\,\langle-,-\rangle_x$ for a unique non-zero real scalar $c$. The bottom space $\overline{B_x^R}^{-\ell(x)}$ is one-dimensional: by the $\nabla$-character of $B_x$ its lowest degree occurs with multiplicity one [F2, F3], and any embedding induces an isomorphism of this line onto the bottom line of the Bott-Samelson module. The normalized intrinsic form has $\langle\rho^{\ell(x)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle_x=1$ by its normalization, while $\langle\rho^{\ell(x)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle_{\mathrm{BS}}>0$ by [F3]; hence $c>0$. This proves (2). [step 1.1, step 2.1, F3, F4]

4.1 **HR comparison (3).** The two forms differ by the positive scalar $c$ of step 3.1, so for every degree the associated Lefschetz forms differ by the same positive scalar $c$; definiteness and its sign are therefore the same for both, and the primitive subspaces coincide because they are kernels of the same operator $L_0$. Hence $\mathrm{HR}(x)$ for the intrinsic form holds if and only if $\mathrm{HR}(x)$ holds for the restricted form of any fixed embedding, which is the equivalence with $\mathrm{HRbar}(x)$ in the sense of [F4]; positivity of $c$ ensures the standard signs are not altered. [step 3.1, F4]

5.1 **Conclusion.** Steps 1.1-2.1 prove (1), steps 3.1-4.1 prove (2) and (3), and steps 1.2 and 2.2 prove (4). The argument uses the Hom formula and the positivity of the bottom Lefschetz form, and does not assume any positivity of Kazhdan-Lusztig polynomials; no choice principle is used. [step 2.1, step 4.1, step 2.2] ∎

## Remarks

- The statement of (1) is deliberately about the degree-zero Hom space only: the full graded endomorphism module of $B_x^R$ has graded rank $\sum_up_{u,x}^2$, generally not $1$, so no rank-one assertion about it is made.
- The scalar in (2) is not merely nonzero but positive, which is exactly what permits the transfer of the Hodge-Riemann signs; the positivity is proved from the bottom-degree computation rather than assumed.
