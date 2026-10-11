---
id: thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character
kind: theorem
title: "Non-degeneracy of the local intersection forms detects Soergel's conjecture one step higher"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-local-intersection-form-for-a-soergel-summand, lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, thm-the-type-a-soergel-hom-formula, thm-kazhdan-lusztig-basis-multiplication-formula, lem-the-type-a-standard-character-is-multiplicative]
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
      locator: "Section 1.2.2, the paragraph 'By Soergel's hom formula ... (see [S4, Lemma 7.1(2)])' and display (1.3)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Lemma 7.1, in particular the equivalence (1)<=>(2) and its proof, and Bemerkung 6.15"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3, first paragraph (the reduction of Soergel's conjecture to the non-degeneracy of the forms on Hom_B(B_z, B_y \\otimes B_s))"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** Elements $x,s$ with $xs>x$, the assumption $\mathrm{S}(y)$ for every $y<xs$, the module $M=B_x^RB_s^R$, the KL multiplication formula $\underline H_x\underline H_s=\underline H_{xs}+\sum_{y<xs}\mu_y\underline H_y$ with integer coefficients $\mu_y$, and for every $y<xs$ the finite-dimensional real space $E_y=\operatorname{Hom}^0(B_y^R,M)$ with its local intersection form $(-,-)^{x,s}_y$ ([[def-local-intersection-form-for-a-soergel-summand]], [[thm-kazhdan-lusztig-basis-multiplication-formula]]).

[F1] Under $\mathrm{S}(y)$ for all $y<xs$, the comparison lemma gives the decomposition $M=B_{xs}\oplus\bigoplus_{y<xs}B_y^{R,a_y}$ with nonnegative integers $a_y$ and no grading shifts, with the top summand $B_{xs}$ occurring exactly once; moreover $\operatorname{ch}(B_z)=\underline H_z$ and $h_\nabla(B_z)=d(h_\Delta(B_z))=\underline H_z$ for every $z<xs$, while the characters of $B_xB_s$ are computed multiplicatively as $h_\Delta(M)=h_\nabla(M)=\underline H_x\underline H_s$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]], [[lem-the-type-a-standard-character-is-multiplicative]]).

[F2] The graded rank of $\operatorname{Hom}(B_y^R,M)$ is $\langle h_\Delta(B_y^R),h_\nabla(M)\rangle$ for the standard pairing with $\langle H_u,H_v\rangle=\delta_{uv}$ on the normalized standard basis, and the trace-form values on the Kazhdan-Lusztig basis are $(\underline H_u,\underline H_v)\in v\mathbb Z[v]$ for $u\ne v$ and $\in1+v\mathbb Z[v]$ for $u=v$; the Kazhdan-Lusztig coefficients satisfy $p_{u,w}\in v\mathbb Z[v]$ for $u<w$ ([[thm-the-type-a-soergel-hom-formula]], [[lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis]]).

[F3] The local intersection form on $E_y$ is symmetric and bilinear, and it is non-degenerate if and only if the degree-zero composition pairing $E_y\times\operatorname{Hom}^0(M,B_y^R)\to\operatorname{End}^0(B_y^R)=\mathbb R$ is a perfect pairing; the adjoint identification between the two Hom spaces preserves the rank ([[def-local-intersection-form-for-a-soergel-summand]]).

[F4] Non-degeneracy of a symmetric bilinear form on a finite-dimensional real space is equivalent to the absence of a radical, i.e. to the form having maximal rank $\dim E_y$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]], [[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

## Statement

Fix $x,s$ with $xs>x$ and assume $\mathrm{S}(y)$ for every $y<xs$. Put $M=B_x^RB_s^R$ and write the Kazhdan-Lusztig multiplication formula $\underline H_x\underline H_s=\underline H_{xs}+\sum_{y<xs}\mu_y\underline H_y$ with integer constants $\mu_y$. For each $y<xs$ let $E_y=\operatorname{Hom}^0(B_y^R,M)$ carry the local intersection form of [[def-local-intersection-form-for-a-soergel-summand]]. Then:

(1) $\dim_{\mathbb R}E_y=\mu_y$, while the full graded Hom module has graded rank $\langle\underline H_y,\underline H_x\underline H_s\rangle$, generally not $\mu_y$;

(2) the following are equivalent: $\mathrm{S}(xs)$; non-degeneracy of every local intersection form on $E_y$, $y<xs$; perfection of every degree-zero composition pairing $E_y\times\operatorname{Hom}^0(M,B_y^R)\to\operatorname{End}^0(B_y^R)=\mathbb R$; and equality of the actual multiplicity $a_y$ of $B_y^R$ in $M$ with $\mu_y$ for every $y<xs$.

The unconditional top summand is $B_{xs}$ with multiplicity one, and under $\mathrm{S}(<xs)$ all remaining summands are unshifted $B_y^R$. No positivity of Kazhdan-Lusztig polynomials or conjecture at $xs$ is assumed.

## Proof

**Proof technique:** direct; constant-term Hom formula, character comparison and the multiplicity pairing.

1.1 **The dimension of $E_y$.** By [F1] and [F2] the graded rank of $\operatorname{Hom}(B_y^R,M)$ equals $\langle h_\Delta(B_y^R),h_\nabla(M)\rangle=\langle\underline H_y,\underline H_x\underline H_s\rangle$. Expanding $\underline H_x\underline H_s=\underline H_{xs}+\sum_{z<xs}\mu_z\underline H_z$ in the Kazhdan-Lusztig basis and using the trace values of [F2], this rank equals $\sum_z\mu_z(\underline H_y,\underline H_z)$ up to the top term, whose contribution is $\delta_{y,xs}=0$ because $y<xs$; each $(\underline H_y,\underline H_z)$ lies in $v\mathbb Z[v]$ for $z\ne y$ and in $1+v\mathbb Z[v]$ for $z=y$. Hence the constant term of the graded rank is $\mu_y$, and since the graded rank lies in $\mathbb Z[v]$ with nonnegative $v$-powers, the degree-zero dimension is exactly the constant term: $\dim_{\mathbb R}E_y=\mu_y$. This is the first assertion of (1); the full graded rank is the polynomial displayed and has higher-degree terms in general, so it is not in general equal to the integer $\mu_y$. [given, F1, F2]

2.1 **The top summand and the composition pairing.** By [F1], $M=B_{xs}\oplus\bigoplus_{y<xs}B_y^{R,a_y}$ with the top summand of multiplicity one. For $y<xs$, consider a composite $B_y^R\to M\to B_y^R$ factoring through a summand other than a copy of $B_y^R$; it cannot be a nonzero scalar multiple of the identity, because rescaling such a composite would exhibit a retraction splitting $B_y^R$ off that other summand, contradicting the uniqueness of the indecomposable label. Hence only the $a_y$ copies of $B_y^R$ contribute to the scalar-coordinate pairing, and the pairing matrix is the standard evaluation pairing of rank $a_y$; by the adjoint identification of [F3] the local intersection form has the same rank. [step 1.1, F1, F3]

3.1 **Non-degeneracy and the multiplicity equalities.** By step 2.1 the local form on $E_y$ is non-degenerate if and only if its rank equals $\dim E_y$, i.e. $a_y=\mu_y$; by [F4] this is equivalent to non-degeneracy in the sense of trivial radical. Therefore non-degeneracy of every local form for all $y<xs$ is equivalent to the system of equalities $a_y=\mu_y$ for all $y<xs$, and the same rank comparison identifies this with perfection of the composition pairings. [step 2.1, F3, F4]

4.1 **The character equivalence and conclusion.** By additivity of the character and $\operatorname{ch}(B_z)=\underline H_z$ for $z<xs$, the character of $B_{xs}$ is $\operatorname{ch}(M)-\sum_{y<xs}a_y\underline H_y=\underline H_{xs}+\sum_{y<xs}(\mu_y-a_y)\underline H_y$. Since the Kazhdan-Lusztig basis is a basis of the Hecke algebra, $\operatorname{ch}(B_{xs})=\underline H_{xs}$, i.e. $\mathrm{S}(xs)$, holds if and only if $\mu_y=a_y$ for every $y<xs$. Combining with step 3.1 gives the equivalence of all four conditions in (2). [step 1.1, step 3.1, F1] ∎

## Remarks

- The constant-term computation is the only place where the actual Hom dimension enters; the full graded rank is deliberately kept as a polynomial, since it is generally not the integer $\mu_y$.
- The equivalence proved here is Soergel's omnibus lemma in the form needed for the simultaneous induction; no positivity of Kazhdan-Lusztig polynomials is used, and the argument is finite and choice-free.
