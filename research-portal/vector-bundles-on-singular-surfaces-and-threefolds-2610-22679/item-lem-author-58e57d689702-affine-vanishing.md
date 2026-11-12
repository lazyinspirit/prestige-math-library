---
title: Affine Artin bound and its consequence after localization
status: published
research_item: lem-author-58e57d689702-affine-vanishing
dependency_level: 16
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine)
- [lem-author-58e57d689702-evaluation-equivalence](item-lem-author-58e57d689702-evaluation-equivalence)
- [lem-author-58e57d689702-coefficient-trivialization](item-lem-author-58e57d689702-coefficient-trivialization)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex)
- [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. Let $k$ be an algebraically closed field, $p$ a prime invertible in $k$, and $X$ an affine finite-type $k$-scheme. Then $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, hence for $a\geq4$ when $\dim X\leq3$. If in addition $\dim X\leq3$, let $F$ be the prime field of $k$, put $B=R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$ on the supplied qcqs prime-field cdh site, and let $L^{o,F}_{\mathrm{cdh}}$ denote ordinary source sheafification. Then $(L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X)$ has $H^5=0$. Both assertions include singular and nonreduced schemes.

## Facts & Assumptions

[A1] Choice and the stated bounds are inherited through the finite-coefficient locality, ordinary slice localization and derived-evaluation suppliers used below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The algebraically closed field $k$, the invertible prime $p$, the affine finite-type $k$-scheme $X$, and the Choice, universe and site-size conventions in the statement. For the localized-complex conclusion also assume $\dim X\leq3$.

**Goal:** Prove the affine cohomological bound and the dimension-bounded localized $H^5$ vanishing.

[F1] [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine) gives the affine Artin bound for $\mu_p^{\otimes3}$ under exactly the stated field, prime and finite-type hypotheses, without smoothness or reducedness.

[F2] [lem-author-58e57d689702-coefficient-trivialization](item-lem-author-58e57d689702-coefficient-trivialization) gives the primitive-root coefficient equivalence on the slice over $X$ and its compatibility with ordinary localization units.

[F3] [lem-author-58e57d689702-evaluation-equivalence](item-lem-author-58e57d689702-evaluation-equivalence) identifies $(L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X)$ with $B(X)$ when $X$ is finite type over $k$ and $\dim X\leq3$.

[F4] The base field is algebraically closed in the sense of [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). The affine scheme and its structure morphism use [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). For an affine presentation $X=\operatorname{Spec}A$, finite type means that $A$ is a finitely generated $k$-algebra as in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras), and for nonempty $X$ its dimension is the Krull dimension of $A$ in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring). The empty-scheme vanishing is included in [F1]. Under [A1], [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) make the affine scheme $X$ quasi-compact and quasi-separated. Thus it lies in the domain of the coefficient-trivialization and evaluation-equivalence suppliers [F2]–[F3], with its underlying prime-field structure and representative convention from [F5].

[F5] [def-derived-sections-on-sites](item-def-derived-sections-on-sites) defines derived evaluation and its cohomology, using the small étale site and constant coefficient sheaf specified by [def-etale-tate-coefficients](item-def-etale-tate-coefficients). That coefficient definition also constructs the weight-three Tate twist. [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) specifies the entire qcqs prime-field cdh site, its Nisnevich and finitely presented abstract blowup generators, its universe bounds, and evaluation on representatives.

[F6] [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex) defines the kernel truncation $\tau^{\leq3}$ and its natural map; [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology) supplies functoriality and preservation of quasi-isomorphisms, so this truncation is defined objectwise on derived presheaves. The Statement of [F2]'s supplier specifies $L^{o,F}_{\mathrm{cdh}}$ as ordinary covering-family/Čech localization, equivalently localization at all integer shifts of linearized covering-sieve inclusions, with its universal unit. This is the ordinary reflector used in [F3], with the stated Choice and size bounds.

## Proof

1.1 By [F4] under [A1], $X$ is in the qcqs domain of [F2]. Choose a primitive $p$th root in $k$. The coefficient equivalence of [F2], evaluated at $X$, identifies $R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$ with $R\Gamma_{\mathrm{et}}(X,\mu_p^{\otimes3})$. Apply [F1] with twist $3$: its hypotheses hold for the stated affine finite-type $X/k$ and invertible $p$. Taking cohomology yields $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, in particular for $a\geq4$ if $\dim X\leq3$. [given, F1, F2, F4, A1, choose]

2.1 Under the additional hypothesis $\dim X\leq3$, apply the actual evaluation equivalence [F3] for the ordinary source reflector. It gives $H^5((L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X))\cong H^5_{\mathrm{et}}(X,\mathbb Z/p)=0$ by step 1.1, since $5>\dim X$. This proves the localized consequence at $X$; it does not assert a global equivalence between $B$ and its unlocalized truncation on the unbounded qcqs site. [given, F3, A1, step 1.1] ∎
