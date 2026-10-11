---
id: lem-cyclotomic-hecke-algebra-basis-and-dimension
kind: lemma
title: "Basis and dimension of the cyclotomic Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       lem-cyclotomic-hecke-bounded-ordered-monomials-span,
       thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras,
       lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (AMS University Lecture Series 15, 1999), 79 pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapters 1–5, printed pp. 1–65: generic Hecke algebra, cellular and Murphy bases, Jucys–Murphy elements, decomposition matrices; the manuscript treats the finite type-A Hecke algebra (level one), not the affine/cyclotomic or KLR side."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3 (cyclotomic Hecke algebras and degenerate specialization); Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1 (e-idempotent subrings)."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Theorem 2.11, p. 14 of the article: the basis $\\{T_wX_1^{a_1}\\cdots X_d^{a_d}\\}$ of the level-$\\ell$ cyclotomic Hecke algebra, attributed to [9] (Ariki–Koike) and [125, Theorem 7.5.6]."
---

## Statement

With the conventions of
[[def-affine-and-cyclotomic-type-a-hecke-algebras]], the images of the ordered
monomials
$$x_1^{m_1}\cdots x_d^{m_d}w\quad(0\le m_r<\ell,\ w\in S_d)$$
in the degenerate case, respectively
$$X_1^{m_1}\cdots X_d^{m_d}T_w\quad(0\le m_r<\ell,\ w\in S_d)$$
in the nondegenerate case, form an $F$-basis of $H^\Lambda_d$. In particular
$\dim_FH^\Lambda_d=\ell^dd!$ and $H^\Lambda_d$ is finite dimensional. For
$d=0$ the singleton empty word gives $H^\Lambda_0=F$ and dimension one
independently of $\ell$. If $\ell=0$ and $d>0$, the relation $1=0$ gives the
zero algebra and the empty basis; no ambiguous $0^0$ convention is used.

## Facts & Assumptions

**Given:** The cyclotomic Hecke algebra $H^\Lambda_d$ and its bounded ordered monomials ([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]), the sector isomorphism ([[thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras]]), and the total dimension of the specialized KLR algebra ([[lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension]]).

[F1] The bounded ordered monomials span $H^\Lambda_d$: every element is a combination of $X^aT_w$ (respectively $x^aw$) with $0\le a_r<\ell$ and $w\in S_d$, and there are exactly $\ell^dd!$ such words for $d>0$, $\ell>0$ ([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]).

[F2] For every content $\alpha$, the sector isomorphism $H^\Lambda_\alpha\cong R^\Lambda_\alpha$ holds, so $H^\Lambda_d\cong\bigoplus_\alpha R^\Lambda_\alpha$ over the finitely many height-$d$ contents ([[thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras]]).

[F3] The specialized KLR algebra satisfies $B_d=\bigoplus_{\operatorname{ht}\beta=d}R^\Lambda(\beta)$ has $\dim_FB_d=\ell^dd!$ for $d>0$, and $B_0=F$ ([[lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F3]; first assume $d>0$ and

$\ell>0$.

1.1 Exactly $\ell^dd!$ spanning words. By [F1] the bounded ordered monomials span $H^\Lambda_d$, and the number of tuples $(m_1,\dots,m_d,w)$ with $0\le m_r<\ell$ and $w\in S_d$ is $\ell^dd!$. The spanning lemma is stated before, and independent of, the spectral/projector construction, and never imposes the first polynomial independently on every dot. [F1, algebra]

1.2 The dimension. By the sector isomorphism [F2] the algebra $H^\Lambda_d$ is the direct sum of the finite family of sector algebras $H^\Lambda_\alpha$ (one for each content $\alpha$ of height $d$), and each $H^\Lambda_\alpha$ is isomorphic to the corresponding summand $R^\Lambda_\alpha$ of the specialized KLR algebra. Summing dimensions, $\dim_FH^\Lambda_d=\sum_{\operatorname{ht}\alpha=d}\dim_FH^\Lambda_\alpha =\sum_{\operatorname{ht}\alpha=d}\dim_FR^\Lambda_\alpha =\dim_FB_d=\ell^dd!,$ the last equality being the total dimension statement of [[lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension]]; grouping the root components $R^\Lambda(\beta)$ by their content $\alpha$ is legitimate because the idempotents of distinct contents are orthogonal. This is an integer identity, not an equality reduced modulo the characteristic. [F2, F3, algebra]

2.1 Basis and boundary cases. A spanning family of $\ell^dd!$ vectors in the $\ell^dd!$-dimensional space $H^\Lambda_d$ is a basis, so the bounded ordered monomials form an $F$-basis and $\dim_FH^\Lambda_d=\ell^dd!$. For $d=0$ the singleton empty word gives $H^\Lambda_0=F$ independently of $\ell$; for $\ell=0$ and $d>0$ the imposed relation is $1=0$, the algebra is zero and the empty family is its basis. No ambiguous $0^0$ convention is used. The late theorem does not feed the CRT or the early BK construction, and no Frobenius theorem or global highest-weight isometry is used. [step 1.1, step 1.2] ∎

## Remarks

The proof transfers the independent KLR dimension across the primitive-free sector isomorphism and then uses the bounded spanning family: a spanning family of exactly the dimension is a basis. The level-one case was already proved independently by the explicit JM inverse, and this lemma does not re-derive it.
