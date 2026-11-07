---
id: lem-countable-conjugacy-orbit-projective-diagram-descends-to-algebraic-numbers
kind: lemma
title: "A projective diagram with countably many conjugates descends to algebraic numbers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-chevalley-constructible-image-varieties
  - lem-constructible-boolean-operations
  - lem-constructible-dense-contains-open
  - cor-strong-nullstellensatz-two-inclusions
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-smooth-locus-open
  - thm-projective-morphism-proper
  - thm-proper-morphism-closed-image
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry, version6.10 (2024)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Proposition9.6 and Theorem9.7, printed201, full proofs read; local finite-description descent argument below is additional."
    - title: "J. S. Milne, Complex Multiplication, version0.10 (2020)"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Proposition7.9 and Corollary7.10, printed54–55, full proofs read; they establish the CM descent application by a different specialization/isogeny argument."
verification: {}
---

## Statement

Assume AC. Put $k=\overline{\mathbb Q}\subset\mathbb C$. Let $X$ be a smooth projective complex variety. Equip it with finitely many specified complex points and finitely many specified algebraic morphisms $X^{a_j}\to X^{b_j}$, where the exponents are nonnegative integers and $X^0=\operatorname{Spec}\mathbb C$. Call these data a diagram, with isomorphisms induced by one isomorphism of $X$ that preserves all the specified points and morphisms. If the isomorphism classes of its conjugates under $\operatorname{Aut}(\mathbb C/k)$ form a countable set, the entire diagram is isomorphic to one defined over $k$. In particular it has a model over a number field. No descent to its field of moduli, or uniqueness of a model, is asserted.

## Facts & Assumptions

**Given:** AC, the smooth projective variety, the finite diagram, and the stated countability of its conjugate isomorphism classes.

[A1] AC is assumed, including its use in choosing bases and extending field embeddings. [[def-axiom-of-choice]]

[F1] Constructible sets are closed under Boolean operations, and their images under morphisms of classical varieties over an algebraically closed field are constructible. A dense constructible subset of a nonempty irreducible variety contains a nonempty open subset. [[thm-chevalley-constructible-image-varieties]] [[lem-constructible-boolean-operations]] [[lem-constructible-dense-contains-open]]

[F2] The strong Nullstellensatz identifies the ideal of the zero set with the radical of the ideal over an algebraically closed field. Polynomial algebras over a Noetherian ring are Noetherian. [[cor-strong-nullstellensatz-two-inclusions]] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F3] The smooth locus of a morphism locally of finite presentation is open. Projective morphisms are proper, and proper morphisms have closed images. [[thm-smooth-locus-open]] [[thm-projective-morphism-proper]] [[thm-proper-morphism-closed-image]]

## Proof

1.1 Fix a projective embedding of $X$. Its homogeneous ideal has finitely many generators by [F2]. Choose finite affine charts for each specified morphism: on principal opens in the standard affine charts of its source, its coordinates in a target chart are fractions of polynomials with nonvanishing denominators. Quasicompactness gives finitely many such patches. There are finitely many coefficients in these equations, fractions, specified points, and the certificates that the patches cover and agree. They lie in a finitely generated field $K/k$ inside $\mathbb C$. Clear their denominators in a finitely generated integral $k$-algebra $R\subset K$ with fraction field $K$. To justify the certificates explicitly, a finite principal cover of an affine chart is the identity $1\in(f_1,\ldots,f_r)$, and an identity between fractions is a polynomial identity modulo the finitely generated chart ideal after multiplication by denominators; these identities involve finitely many further coefficients. Include those coefficients and invert the finitely many nonzero denominators. These data give a projective family over $S=\operatorname{Spec}R$, with the entire diagram and its original fibre at the injective point $s_0:R\hookrightarrow\mathbb C$. The generic fibre is smooth, as follows from the Jacobian description of smoothness after the faithfully flat field extension to $\mathbb C$. By [F3] the nonsmooth locus is closed in the projective family and has closed image missing the generic point of $S$. Remove that image. Thus all fibres are smooth, and the diagram is defined throughout a nonempty affine base open. If $X$ is empty the empty diagram is already defined over $k$; henceforth take $X$ nonempty. [A1, F2, F3, given, construct]

2.1 We record why the integral base $S$ stays integral under extension of $k$. For a domain $B$ over the algebraically closed field $k$, suppose nonzero $u,v\in B\otimes_k L$ had $uv=0$. Express $u=\sum_i\alpha_i b_i$ and $v=\sum_j\beta_j c_j$ using finite $k$-linearly independent lists in $B$. Express all products $b_ic_j$ in one finite $k$-basis of their span. The equation $uv=0$ becomes finitely many polynomial equations over $k$ in the coefficients. Include $t\alpha_{i_0}\beta_{j_0}=1$ for nonzero selected coefficients. A solution over $L$ means this ideal is proper; [F2] gives a solution over $k$. Linear independence then gives two nonzero elements of $B$ with zero product, a contradiction. Thus $B\otimes_k L$ is a domain. In particular $S_{\mathbb C}$ is irreducible. The set $S(k)$ is Zariski dense even in $S_{\mathbb C}$: if a regular function with complex coefficients vanishes at every $k$-point, expand its finitely many coefficients in a $k$-linearly independent list. Each resulting $k$-regular function vanishes at all $k$-points and is zero by [F2]. Every nonempty open of $S_{\mathbb C}$ therefore contains a $k$-point. [F2, step 1.1, algebra]

2.2 Fix any one smooth complex diagram $D$ of this format. The locus of $s\in S(\mathbb C)$ whose fibre is isomorphic to $D$ is a countable union of constructible subsets of $S_{\mathbb C}$. Here are actual parameters for that assertion. For each finite choice of numbers of affine patches and bounds on the degrees, use coefficient variables for principal patch functions and for numerator/denominator polynomials describing a proposed map and its inverse on standard affine charts. Require that the patches cover, that denominators do not vanish there, that the images satisfy the target equations, that the formulas agree on overlaps, and that both composites are the identity. Require also that the map carries the finitely many points and intertwines every specified morphism on each source power. These requirements are finite formulas made from polynomial equalities and inequalities, existential quantifiers for coefficients, and universal quantifiers for points in finitely many affine charts. For example patch coverage is that no point of the chart satisfies its defining equations together with the vanishing of all patch functions. An existential quantifier is a projection of a constructible set and is allowed by [F1]; a universal quantifier is the complement of an existentially quantified complement. Induction through the finite formula therefore gives a constructible parameter locus. The accepted formulas glue actual morphisms, and the inverse identities make them isomorphisms. Conversely, every algebraic isomorphism and its inverse have such finite principal-open rational descriptions, so some bounds capture them. Pointwise identities imply scheme identities because the smooth fibres and their powers are reduced, by [F2]. There are only countably many finite patch numbers, chart indices and degree bounds. Their union is precisely the required isomorphism locus. No representing Isom scheme is used. [F1, F2, step 1.1, construct, algebra]

2.3 The algebra $R$ is countable. Its injective complex points are the complement of the countable union $\bigcup_{0\ne r\in R}V(r)$. Each such point gives an embedding $K\hookrightarrow\mathbb C$ over $k$ and therefore is the image of $s_0$ under an automorphism of $\mathbb C/k$. For completeness extend the isomorphism between the two embedded copies of $K$ to their algebraic closures by the maximal partial-embedding argument: a root of a minimal polynomial extends any unfinished algebraic embedding, and maximality then gives an isomorphism of the algebraic closures. Put $\kappa=\operatorname{trdeg}(\mathbb C/k)$; it is infinite because an algebraic extension of a field generated over countable $k$ by finitely many elements is countable. Both copies of $K$ have the same finite transcendence degree $d$ over $k$. The tower formula for transcendence bases gives $\kappa=d+\operatorname{trdeg}(\mathbb C/\overline K)$ for either embedded algebraic closure; hence both remaining basis cardinalities are $\kappa$. A bijection between those bases extends the isomorphism of the rational fields, and the same algebraic-closure argument extends it to $\mathbb C$. Thus every injective fibre is one of the countably many conjugate diagram classes in the Given data. [A1, step 1.1, algebra, choose]

3.1 The complex points of $S_{\mathbb C}$ cannot be a countable union of proper closed subsets. Indeed collect their finitely many coefficients, together with $k$, in a countable subfield $K_0\subset\mathbb C$. Their equations define proper closed sets over $K_0$. By step 2.1 the base extended to $K_0$ is integral. Its function field is a finitely generated extension of $K_0$. It embeds into $\mathbb C$ over $K_0$: choose finitely many algebraically independent complex numbers for a transcendence basis and extend through its finite algebraic remainder by adjoining roots. There are enough independent complex numbers because an algebraic extension of a countable finitely generated field is countable, whereas $\mathbb C$ is uncountable; the same argument successively supplies every member of a finite basis. This embedding gives a point avoiding every one of the proper closed sets, since its map on the integral coordinate ring is injective. The same proof covers zero-dimensional $S$, which then is a point and has no nonempty proper closed subset. [A1, F2, step 2.1, algebra, choose]

4.1 By step 2.2 the isomorphism loci of those countably many classes form a countable collection of constructible pieces covering all injective points. If every piece had proper closure, adding the proper closed sets $V(r)$ from step 2.3 would cover $S(\mathbb C)$ by countably many proper closed sets, contrary to step 3.1. Some piece is therefore dense and contains a nonempty open $U$ by [F1]. Its class is that of $\tau D_0$ for an automorphism $\tau\in\operatorname{Aut}(\mathbb C/k)$ and the original diagram $D_0$. Applying $\tau^{-1}$ gives a nonempty open whose every fibre is isomorphic to $D_0$, because the family is defined over $k$. Step 2.1 supplies a $k$-point in that open. Its fibre with its specified diagram is a model of $D_0$ over $k$. [F1, step 2.1, step 2.2, step 3.1, step 2.3, algebra, choose]

5.1 Finally its finitely many defining equations, finite chart descriptions of the specified maps, point coordinates, and the finite certificates of coverage and agreement use finitely many elements of $k$. They generate a finite extension of $\mathbb Q$, since they are algebraic numbers. The same finite-presentation argument in step 1.1 descends the entire diagram to that number field. Smoothness is detected by its faithfully flat algebraic-closure extension, or directly by the same finite Jacobian witnesses. This proves the claims without asserting effective descent to the field of moduli or a unique model. [F2, F3, step 1.1, step 4.1, construct, algebra] ∎

## Source-reading boundary

The full cached proofs of Milne AG Proposition9.6 and Theorem9.7, printed201, and Milne CM Proposition7.9 and Corollary7.10, printed54–55, were read. The former give constructibility; the latter give the CM descent goal by specialization followed by an isogeny quotient. The countable rational-chart encoding, uncountability argument and finite-diagram descent above are proved locally, rather than imported from either source. No whole-book reading or Hilbert/Isom representability theorem is claimed.
