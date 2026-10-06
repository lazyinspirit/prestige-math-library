---
id: thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism
kind: theorem
title: "The diagrammatic character is the split $K_0$ Hecke isomorphism"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts, def-split-grothendieck-rings-of-type-a-soergel-categories, def-type-a-hecke-algebra-in-soergel-normalization, lem-type-a-hecke-standard-basis-for-soergel-comparison, lem-type-a-character-recursion-under-simple-soergel-tensoring, thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §6.5, Definition 6.23 with (6.3)–(6.4), Corollaries 6.26–6.27, PDF pp. 65–68"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Sur la catégorie des bimodules de Soergel, §§3–5"
      url: "https://arxiv.org/pdf/0707.3603"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge2$, let $D$ be the type-A diagrammatic Soergel category over
$k=\mathbb Q$ and $\operatorname{Kar}(D)$ its Karoubi envelope
([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]), with
the indecomposables $D_w$ of
[[thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts]].
For an object $B$ of $\operatorname{Kar}(D)$ put
$$\mathrm{ch}(B):=\sum_{w\in S_n}\operatorname{grk} \operatorname{Hom}_{\operatorname{Kar}(D_{\ge w})}(B,D_w)\,\widetilde T_w\;\in\;H_{S_n},$$
where $\operatorname{grk}$ is the graded rank of a free graded $R$-module,
$D_{\ge w}$ is the quotient by the ideal of morphisms factoring through
Bruhat cells $y\not\ge w$ (so maps into a reduced-word object for $w$ are
taken modulo lower terms), and $H_{\underline w}=H_{i_1}\cdots H_{i_r}$ is the product of the normalized
generators along a reduced word $\underline w$ for $w$ (the underlined symbol is
reserved for reduced-word products, while the standard basis elements are the
$\widetilde T_w=v^{\ell(w)}T_w$)
([[lem-type-a-hecke-standard-basis-for-soergel-comparison]],
[[def-type-a-hecke-algebra-in-soergel-normalization]]). Then $\mathrm{ch}$
descends to the split Grothendieck ring
$K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ of
[[def-split-grothendieck-rings-of-type-a-soergel-categories]], it is a
homomorphism of $\mathbb Z[v,v^{-1}]$-algebras
$$\mathrm{ch}:K_0^{\mathrm{split}}(\operatorname{Kar}(D))\longrightarrow H_{S_n},$$
it satisfies $\mathrm{ch}([D_i])=H_i=v(T_i+1)$ for every simple reflection and
$\mathrm{ch}(v X)=v\,\mathrm{ch}(X)$, and it is an isomorphism: the classes
$[D_w]$ are a $\mathbb Z[v,v^{-1}]$-basis of
$K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ and their images
$\mathrm{ch}(D_w)=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$ are triangular with unit diagonal in the standard basis $\{\widetilde T_w\}$ of
[[lem-type-a-hecke-standard-basis-for-soergel-comparison]]. For $n\le1$ both
sides are $\mathbb Z[v,v^{-1}]$ and $\mathrm{ch}$ is the identity.

## Facts & Assumptions
**Given:** The diagrammatic category $D$ over $k=\mathbb Q$ with its presentation, the Karoubi envelope $\operatorname{Kar}(D)$, the split Grothendieck ring of [[def-split-grothendieck-rings-of-type-a-soergel-categories]], and the Hecke algebra $H_n$ of [[def-type-a-hecke-algebra-in-soergel-normalization]].

[F1] $K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ is the free abelian group on the objects of a chosen small skeleton modulo the relations $[X]=[X']+[X'']$ for $X\cong X'\oplus X''$, with product $[X][Y]=[X\otimes Y]$, unit $[\mathbf 1]$ and $v[X]=[X(1)]=[X\{-1\}]$, making it a $\mathbb Z[v,v^{-1}]$-algebra; for an object of the skeleton the class depends only on its isomorphism class ([[def-split-grothendieck-rings-of-type-a-soergel-categories]]).

[F2] $\operatorname{Kar}(D)$ is Krull–Schmidt, and the objects $D_w$ for $w\in S_n$ are the indecomposables up to isomorphism and shift; every object is a finite direct sum of shifts $D_w(d)$, the pair $(w,d)$ being determined by the isomorphism class and the summands being unique up to isomorphism and order ([[thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts]]).

[F3] Imported from Elias–Williamson, equation (6.3), Definition 6.23,
Theorem 6.25 and Corollary 6.26: for an expression $\underline x$ and a reduced
word $\underline w$ for $w$, the free module
$\operatorname{Hom}_{D_{\ge w}}(B_{\underline x},B_{\underline w})$ has a
light-leaf basis indexed by subexpressions of $\underline x$ expressing $w$,
and its graded ranks give
$$H_{\underline x}=\sum_w\operatorname{grk}\operatorname{Hom}_{D_{\ge w}}(B_{\underline x},B_{\underline w})\,\widetilde T_w.$$
Here $H_{\underline x}=H_{x_1}\cdots H_{x_r}$, while $\widetilde T_w$ is
the standard basis element. The distinguished indecomposable $D_w$ is the
unique summand of $B_{\underline w}$ surviving at $w$; other summands have
strictly lower support. The classes $[D_w]$ form an $A$-basis and
$\mathrm{ch}(D_w)=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$.
Over $k=\mathbb Q$, graded direct summands of free Hom modules are free,
and the character on the Karoubi envelope is an $A$-module map. Equation
(6.4) proves multiplicativity on Bott–Samelson classes, these classes span
$K_0^{\mathrm{split}}(\operatorname{Kar}(D))$, and Corollary 6.26 concludes
that $\mathrm{ch}$ is an $A$-algebra isomorphism with
$\mathrm{ch}(B_s)=H_s$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).

[F4] Light leaves are homogeneous of degree equal to the defect $d(e)=\#U_0-\#D_0$ of the subexpression. Their images give the bases of the top-layer quotient Hom modules in [F3]; pasted *double* leaves give bases of the full Hom spaces between Bott–Samelson objects ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]], [[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]]).

[F5] $H_n$ is the $A$-algebra with $A=\mathbb Z[v,v^{-1}]$ presented by the $T_i$ with the quadratic, braid and commutation relations, $H_i=v(T_i+1)$ and $T_i=v^{-1}H_i-1$; the family $\{H_{\underline w}\}$, $H_{\underline w}$ the product of the $H_i$ along a reduced word $\underline w$ for $w$ (one reduced word chosen per element), is an $A$-basis of $H_n$ with $H_{\underline w}=\widetilde T_w+\sum_{\ell(u)<\ell(w)}a_u\widetilde T_u$ ([[def-type-a-hecke-algebra-in-soergel-normalization]], [[lem-type-a-hecke-standard-basis-for-soergel-comparison]]).

## Proof


1.1 The two presentations of the split group agree: [F1] presents $K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ on a small skeleton modulo the relations coming from direct-sum decompositions, and by [F2] each such relation compares two decompositions of one object into indecomposables $D_w(d)$, whose multisets agree; hence the class map identifies this group, together with its shift and its product, with the split group $[\operatorname{Kar}(D)]$ of [F3] on which the character is defined, and the classes $[D_w]$ for $w\in S_n$ form a $\mathbb Z[v,v^{-1}]$-basis while the classes $[B_{\underline x}]$ for words span. [F1, F2, F3]. [F1, F2, F3]

1.2 Subexpression multiplicities: since the module $\operatorname{Hom}_{D_{\ge w}}(B_{\underline x},B_{\underline w})$ has the light-leaf basis $\{\mathrm{LL}_{\underline x,e}\}$ with $\deg \mathrm{LL}_{\underline x,e}=d(e)$ by [F3] and [F4], its graded rank is $\sum_{e}v^{d(e)}$ over the subexpressions $e$ of $\underline x$ expressing $w$; this is the double-leaves subexpression form of the character, and it shows in particular that each coefficient of $\mathrm{ch}(B_{\underline x})$ is a Laurent polynomial with non-negative integer coefficients. [F3, F4]. [F3, F4]

1.3 Triangularity: by [F2], $D_w$ is the distinguished indecomposable *direct summand* of a reduced-word object $B_{\underline w}$. It need not be the whole object: the rank-two decomposition gives $B_{sts}\cong D_{sts}\oplus B_s$. The imported statement [F3] gives $\mathrm{ch}(D_w)=\widetilde T_w+\sum_{y<w}g_{y,w}\widetilde T_y$. Thus the matrix of $\{\mathrm{ch}(D_w)\}_w$ is triangular with unit diagonal over $\{\widetilde T_w\}$, hence invertible over $A$. Equivalently its diagonal over $\{T_w\}$ is the unit $v^{\ell(w)}$; this is not a unit *diagonal* over that unnormalized basis. [F2, F3, F5]. [F2, F3, F5]

2.1 The character is additive and compatible with the shift: by [F3] $\mathrm{ch}$ is additive in the argument because graded rank is additive on direct sums, and $\mathrm{ch}(v[B])=\mathrm{ch}(B(1))=v\,\mathrm{ch}(B)$; by [F1] these are exactly the relations $[X]=[X']+[X'']$ and $v[X]=[X(1)]$ of the library's presentation, so $\mathrm{ch}$ descends to a well-defined homomorphism of $\mathbb Z[v,v^{-1}]$-modules on $K_0^{\mathrm{split}}(\operatorname{Kar}(D))$. [F1, F3, step 1.1]. [F3, F1, step 1.1]

3.1 The generators: for a simple reflection $s$ the imported identity $\mathrm{ch}(B_s)=H_s=v(T_s+1)=H_i$ of [F3] and the identification of classes of step 1.1 give $\mathrm{ch}([D_i])=H_i$; in particular the image of $\mathrm{ch}$ contains the algebra generators $H_i$ of $H_n$ by [F5]. [F3, F5, step 2.1]. [F3, F5, step 2.1]

3.2 Multiplicativity: by [F1] the product on $K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ is $\mathbb Z[v,v^{-1}]$-bilinear and by step 2.1 the character is $\mathbb Z[v,v^{-1}]$-linear; the classes $[B_{\underline x}]$ of Bott–Samelson objects span by step 1.1, and for words $\underline x,\underline y$ the imported identity of [F3] gives $\mathrm{ch}([B_{\underline x}][B_{\underline y}]) =\mathrm{ch}(B_{\underline x}B_{\underline y}) =\mathrm{ch}(B_{\underline x})\mathrm{ch}(B_{\underline y})$; expanding arbitrary elements in the spanning classes therefore gives $\mathrm{ch}(XY)=\mathrm{ch}(X)\mathrm{ch}(Y)$ for all $X,Y\in K_0^{\mathrm{split}}(\operatorname{Kar}(D))$. [F1, F3, step 1.1, step 2.1]. [F1, F3, step 1.1, step 2.1]

4.1 Conclusion: the classes $[D_w]$ are a $\mathbb Z[v,v^{-1}]$-basis of $K_0^{\mathrm{split}}(\operatorname{Kar}(D))$ by step 1.1 and their images under $\mathrm{ch}$ are a basis of $H_n$ by step 1.3, so $\mathrm{ch}$ is an isomorphism of $\mathbb Z[v,v^{-1}]$-modules; by step 3.2 it is a homomorphism of algebras and hence an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras, with $\mathrm{ch}([D_i])=H_i$ by step 3.1 and the triangular basis $\{\mathrm{ch}(D_w)\}$ as displayed. For $n\le1$ there are no colours; the word category has the empty word, and its additive graded Karoubi closure has finite sums and shifts of the unit. Its split Grothendieck ring and the Hecke algebra are both $A$, and the character sends the unit to $1$. [F2, F3, F5, step 1.1, step 3.1, step 3.2, step 1.3]. [F2, F3, F5, step 1.1, step 3.1, step 3.2, step 1.3] ∎


## Remark

**(a) What is imported and what is checked here.** The mathematical content of the character isomorphism is Elias–Williamson's Corollary 6.26, recorded verbatim as imported result 7 of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]. The work of this item is the comparison of the two presentations of the split group, the identification of the coefficients with double-leaf subexpression multiplicities in the library's degree conventions, and the transport of triangularity to the library's normalized standard basis $\{\widetilde T_w\}$; nothing beyond the imported statements and the two local Hecke items is used.

**(b) The bimodule counterpart.** The corresponding statement on the bimodule side, that the standard $\Delta$- and $\nabla$-multiplicity characters are multiplicative, is proved later on this page from the split-$K_0$ isomorphism of the bimodule category; the simple tensoring recursion $h_\Delta(B_i\otimes_R-)=H_i\,h_\Delta$ of [[lem-type-a-character-recursion-under-simple-soergel-tensoring]] is the local input there.

**(c) Choice.** No choice principle is used: the skeletons of [F1] are fixed sets of concrete objects, graded ranks are computed from the light-leaf bases supplied by the sources, and the triangularity argument is finite dimensional in each degree.
