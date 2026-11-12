---
title: External input for simplicial Bloch cycle groups
status: published
research_item: thm-author-89250b1d710c-bloch-simplicial-cycle-input
dependency_level: 1
sources:
  references:
    - title: Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on
        Motivic Cohomology
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf
      locator: Lecture 1 convention, printed p. 3 (PDF p. 15); cosimplicial simplex
        immediately before Definition 2.14, printed p. 16 (PDF p. 28);
        Definition 17.1, printed p. 135 (PDF p. 147); Definition 17A.1,
        Definition 17A.3 and Example 17A.4, printed pp. 143–144 (PDF pp.
        155–156).
      statement: The algebraic simplices form a cosimplicial scheme. For
        equidimensional separated schemes over a field, admissible codimension-r
        cycles form a simplicial abelian group under intersection pullbacks; the
        smooth finite-type restriction uses the local Tor intersection
        convention in Appendix 17A.
      hypotheses: A field k; a separated equidimensional smooth finite-type k-scheme
        X; integers r,n >= 0; integral codimension-r cycles meeting every
        nonempty coordinate face properly. Empty intersections are permitted. No
        perfectness or characteristic-zero hypothesis is used.
      reading_limits: Read the separatedness convention, the simplex paragraph before
        Definition 2.14, Definition 17.1, and Definitions 17A.1, 17A.3 and
        Example 17A.4 in the 228-page primary PDF, using the cached PDF
        extraction and the author-hosted PDF. The general intersection
        construction and compatibility of multiplicities are imported, not
        reproved. The cited Bloch, Fulton, Serre and Weibel texts were not
        independently read. The all-order-map coordinate formula below is an
        explicit unpacking of the standard cosimplicial simplex, not a verbatim
        formula quoted from these passages.
external_input: true
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)
- [math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)
- [math:thm-quotient-ring-universal-property](https://alphabetamath.cc/item/thm-quotient-ring-universal-property)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [` Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology · Lecture 1 convention, printed p. 3 (PDF p. 15); cosimplicial simplex immediately before Definition 2.14, printed p. 16 (PDF p. 28); Definition 17.1, printed p. 135 (PDF p. 147); Definition 17A.1, Definition 17A.3 and Example 17A.4, printed pp. 143–144 (PDF pp. 155–156). `](https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf)


## Statement

Let $k$ be a field and $X$ a separated equidimensional smooth scheme of finite type over $k$. Equidimensional means that all irreducible components have the same dimension. Dimensions are chain dimensions of the underlying spaces; for an integral closed subscheme $V$ of a nonempty pure-dimensional finite-type scheme $Y$, codimension means $\dim Y-\dim V$.

For $n\geq0$, put $A_n=k[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$ and $\Delta^n=\operatorname{Spec}A_n$. Products are over $\operatorname{Spec}k$. For a proper subset $I\subsetneq\{0,\ldots,n\}$, the coordinate face $F_I\subseteq\Delta^n$ is the closed subscheme defined by $t_i=0$ for $i\in I$, identified with $\Delta^{n-|I|}$ by the remaining coordinates in increasing order. Imposing all coordinates gives the empty scheme.

For an order-preserving map $\theta:[m]\to[n]$, where $[a]=\{0<\cdots<a\}$, the cosimplicial map $\Delta(\theta):\Delta^m\to\Delta^n$ is induced by the $k$-algebra homomorphism
$$A_n\longrightarrow A_m,\qquad t_j\longmapsto\sum_{\{a:\theta(a)=j\}}u_a,$$
where $u_0,\ldots,u_m$ are the coordinates of $A_m$ and an empty sum is zero. Thus the coface $\delta_i^n:\Delta^{n-1}\to\Delta^n$ inserts zero in position $i$, while the codegeneracy $\sigma_i^n:\Delta^{n+1}\to\Delta^n$ adds the adjacent coordinates in positions $i,i+1$. These substitutions preserve the sum-one relation.

For $r,n\geq0$, let $z^r(X,n)$ be the free abelian group on integral closed subschemes $W\subseteq X\times_k\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: every irreducible component of $W\cap(X\times_k F_I)$ has codimension $r$ in $X\times_k F_I$; an empty intersection is allowed. These are groups of finite cycles, before quotienting by rational equivalence. They form a simplicial abelian group, with face maps $d_i^n=(1_X\times\delta_i^n)^*$ given by intersection pullback with the local Tor multiplicities of the cited Appendix 17A, and degeneracy maps $s_i^n=(1_X\times\sigma_i^n)^*$ given by flat pullback. In particular, for $n\geq2$ and $0\leq i<j\leq n$,
$$d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$$
as equalities of cycles. For $X=\varnothing$ all these groups and maps are zero.

## Statement references

[lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)

[math:thm-quotient-ring-universal-property](https://alphabetamath.cc/item/thm-quotient-ring-universal-property)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

## External input

The simplicial cycle construction, including admissibility of its structure maps and the cycle-level identities, is imported from Mazza–Voevodsky–Weibel, Definition 17.1, in the smooth separated equidimensional finite-type case. The simplex is specified just before Definition 2.14; the inline coordinate formula makes both cofaces and codegeneracies explicit. The coordinate-face geometry is supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry), and the polynomial and quotient universal properties together with the affine scheme–ring correspondence supply the meaning of the displayed coordinate homomorphisms.

The intersection operation, including the meaning, well-definedness and compatibility of its local Tor multiplicities, is imported from Definition 17A.1, Definition 17A.3 and Example 17A.4. Example 17A.4 also identifies the flat pullback convention. These are precise parts of the external input; no local proof of general intersection theory or of the simplicial cycle theorem is claimed. The source's separatedness convention is on printed p. 3. See [the cited primary text](https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf); the source record gives exact locators, hypotheses and reading limits.
