---
title: External affine étale vanishing at invertible primes
status: published
research_item: thm-author-c5b0693f4fc3-top-torsion-artin-affine
dependency_level: 11
sources:
  references:
    - title: Elden Elmanto, Zero cycles on singular varieties, Oberwolfach Report
        36/2025
      url: https://ems.press/content/serial-article-files/52244
      locator: Theorem 4 proof, printed p. 1995/PDF p. 47; affine application, printed
        p. 1996/PDF p. 48; reference [1] to SGA 4, tome 3, XIV, Corollaire 3.2.
      statement: For affine finite-type schemes over an algebraically closed field and
        an invertible prime p, the report applies Artin vanishing to constant
        F_p coefficients above the dimension. It does not explicitly state the
        general torsion-sheaf or Tate-twist theorem.
      hypotheses: Algebraically closed base field; affine finite-type scheme; prime p
        invertible in the field. Only this constant-coefficient application is
        attributed to the report.
      reading_limits: Read the Theorem 4 statement and invertible-prime proof
        paragraph, the affine application, and reference [1] at these locations.
        No original SGA 4 proof reading or reconstruction is claimed.
    - title: J. S. Milne, Lectures on Étale Cohomology, version 2.21 (22 March 2013)
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
      locator: Section 15 opening definition, separably closed field example and
        Theorem 15.1, printed p. 105/PDF p. 105; Section 16 opening Tate-twist
        conventions, printed p. 108/PDF p. 108.
      statement: Étale cohomological dimension bounds cohomology of all abelian
        torsion sheaves; separably closed fields have dimension zero. Affine
        varieties over algebraically closed fields satisfy cd(X) <= dim(X).
        Invertible-integer Tate twists are locally constant.
      hypotheses: "For Theorem 15.1: affine variety over an algebraically closed
        field. For twists: positive integer n invertible on the scheme. The
        scheme generality below is imported separately from Stacks, not
        attributed to the variety formulation."
      reading_limits: Read these statements and conventions, not their prerequisite
        proofs. Also checked the nilpotent-invariance paragraph on p. 22 as
        background; no reduction argument is imported from that paragraph here.
    - title: The Stacks Project, Étale Cohomology, cohomological dimension
      url: https://stacks.math.columbia.edu/tag/0F0P
      locator: Definition 59.95.1 (tag 0F0Q); Proposition 59.95.6 (tag 0F0V),
        statement and opening proof hypotheses.
      statement: For a field K and an affine finite-type K-scheme X, cd(X) <= dim(X) +
        cd(K); cd measures vanishing for every abelian torsion sheaf on the
        small étale site. Thus over an algebraically closed field such sheaves
        have no cohomology above dim(X).
      hypotheses: K is a field and X is an affine scheme of finite type over K;
        coefficients are abelian torsion sheaves. No smoothness, reducedness or
        irreducibility hypothesis. Apply with algebraically closed K and the
        sheaf mu_ell tensor j.
      reading_limits: Read the complete definition and proposition statement and the
        opening proof paragraph identifying arbitrary abelian torsion
        coefficients. The induction and its cited prerequisites were not
        independently reconstructed.
external_input: true
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [` Elden Elmanto, Zero cycles on singular varieties, Oberwolfach Report 36/2025 · Theorem 4 proof, printed p. 1995/PDF p. 47; affine application, printed p. 1996/PDF p. 48; reference [1] to SGA 4, tome 3, XIV, Corollaire 3.2. `](https://ems.press/content/serial-article-files/52244)
- [` J. S. Milne, Lectures on Étale Cohomology, version 2.21 (22 March 2013) · Section 15 opening definition, separably closed field example and Theorem 15.1, printed p. 105/PDF p. 105; Section 16 opening Tate-twist conventions, printed p. 108/PDF p. 108. `](https://www.jmilne.org/math/CourseNotes/LEC.pdf)
- [` The Stacks Project, Étale Cohomology, cohomological dimension · Definition 59.95.1 (tag 0F0Q); Proposition 59.95.6 (tag 0F0V), statement and opening proof hypotheses. `](https://stacks.math.columbia.edu/tag/0F0P)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds used for derived global sections. Let $k$ be an algebraically closed field and let $X=\operatorname{Spec}A$ be an affine $k$-scheme of finite type and dimension $d$. Let $\ell\geq1$ be an integer invertible in $k$, and let $j\geq0$ be an integer. Then
$$H^i_{\acute et}(X,\mu_\ell^{\otimes j})=0\qquad(i>d).$$
No smoothness, reducedness or irreducibility hypothesis is required. The empty scheme has zero cohomology in every degree.

Here finite type means that $A$ is a finitely generated commutative $k$-algebra; for nonempty $X$, $d$ is the Krull dimension of $A$. The small étale site has étale $X$-schemes as objects and jointly surjective étale families as covers, with the fixed size bounds. The sheaf $\mu_\ell$ is the sheaf of $\ell$th roots of unity; its $j$th tensor power is taken over the constant sheaf $\mathbb Z/\ell$, with $\mu_\ell^{\otimes0}=\mathbb Z/\ell$. The group $H^i_{\acute et}(X,F)$ means $H^i(R\Gamma_{\acute et}(X,F))$, with $F$ in degree zero and $R\Gamma$ the derived evaluation on this small site.

## Statement references
[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-etale-tate-coefficients](item-def-etale-tate-coefficients)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

## External input
The vanishing is imported from the affine cohomological-dimension bound for schemes in [Stacks, Proposition 59.95.6](https://stacks.math.columbia.edu/tag/0F0P): $\operatorname{cd}(X)\leq\dim X+\operatorname{cd}(k)$. Here cohomological dimension bounds every abelian torsion sheaf on the small étale site, and an algebraically closed field has $\operatorname{cd}(k)=0$, as recorded in [Milne, Section 15](https://www.jmilne.org/math/CourseNotes/LEC.pdf). The scheme formulation includes singular and nonreduced schemes directly. This substantial bound is not proved locally.

The coefficient construction in [def-etale-tate-coefficients](item-def-etale-tate-coefficients) gives a sheaf annihilated by $\ell$, including the zeroth twist. These twists are locally constant (that is, constant after an étale covering), as stated in Milne's opening conventions in Section 16, p. 108; thus they are torsion local systems among the allowed coefficients. The derived sections and their Choice and size conventions are those of [def-derived-sections-on-sites](item-def-derived-sections-on-sites).

[Elmanto's report, Theorem 4 proof and affine application](https://ems.press/content/serial-article-files/52244), applies Artin vanishing to constant $\mathbb F_p$ coefficients and cites SGA 4 XIV, Corollary 3.2. This corroborates the prime constant-coefficient application; the general twist statement above is supplied by the scheme bound and the coefficient interface, not attributed verbatim to that report. Milne's Theorem 15.1 supplies the corresponding affine-variety bound. The cited statements are imported with the reading limits recorded above; no reconstruction of SGA 4 is claimed.
