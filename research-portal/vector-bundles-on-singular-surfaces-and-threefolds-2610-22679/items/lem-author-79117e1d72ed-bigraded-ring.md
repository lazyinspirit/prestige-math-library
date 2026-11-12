---
id: lem-author-79117e1d72ed-bigraded-ring
kind: lemma
title: Natural unital bigraded motivic ring with negative zero extension
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - def-multiplicative-filtered-spectrum
  - thm-author-79117e1d72ed-em-multiplication-c1
  - def-stable-spectra-interface
  - lem-eilenberg-maclane-shift-index
  - thm-adjudicate-ff468282ce0d-spectral-pairing-sign
  - def-article-conventions
  - math:thm-prime-subfield-classification
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  thm-author-79117e1d72ed-em-multiplication-c1: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  thm-adjudicate-ff468282ce0d-spectral-pairing-sign: mathematical-premise
  def-article-conventions: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the stable spectra interface. Let $k$ be any field. On qcqs $k$-schemes set $C_b(X)=\mathbb Z(b)_{\rm mot}(X)$ for $b\geq0$, and explicitly set $C_b(X)=0$ for $b<0$. Define $H^{a,b}(X)=H^a(C_b(X))$ for every pair of integers. The direct sum $H^{*,*}(X)$ is naturally an associative unital ring, with products of bidegrees $(a,b)+(c,d)=(a+c,b+d)$, unit in $(0,0)$, and $xy=(-1)^{ac}yx$. Pullbacks are contravariantly functorial unital ring homomorphisms. This extends the supplied groups without modifying their nonnegative weights. Here the direct sum consists of families with finitely many nonzero bidegree components, with componentwise addition; multiplication extends the homogeneous products by finite distributive sums. The products are those of the supplied EM graded algebra, rather than a new product on the same groups.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and use the fixed size conventions of [[def-stable-spectra-interface]]. These retain the foundational hypotheses of the spectral, multiplicative and index suppliers used in both proof steps; no simultaneous choice of representatives is required.

[F1] [[thm-author-79117e1d72ed-em-multiplication-c1]] supplies the actual natural commutative graded algebra in spectra. Denote its pieces by $G_b(X)=H(C_b(X)[2b])$: $H$ denotes the associated Eilenberg–Mac Lane spectrum and the brackets inside $H$ are cochain shifts. This is the supplier's underlying spectrum of the shifted complex, with coherent unit $\mathbb S\to G_0$ and products $\mu_{b,d}:G_b\wedge G_d\to G_{b+d}$. Negative pieces vanish. [[def-multiplicative-filtered-spectrum]] specifies the graded Day products and their coherences, with ordinary interchange of the weight indices.

[F2] [[def-motivic-cohomology]] fixes the complexes, their cohomology and pullbacks. [[lem-eilenberg-maclane-shift-index]], with the conventions of [[def-stable-spectra-interface]], gives $\pi_i(H(C_b[2b]))\cong H^{2b-i}(C_b)$ naturally for cochain maps, for all integer indices and unbounded complexes. We use this shifted-complex formula directly; no equivalence between $H(C_b[2b])$ and $(HC_b)[2b]$ is inferred merely from their homotopy groups. The realized graded algebra and its pullbacks are supplied by [F1].

[F3] [[thm-adjudicate-ff468282ce0d-spectral-pairing-sign]] supplies natural bilinear homotopy pairings by smashing representatives, their associativity and unit compatibility, and the sphere-interchange sign $(-1)^{uv}$ for all integer degrees, including negative degrees.

[F4] [[def-article-conventions]] supplies the category of qcqs field-schemes and the contravariant functor convention, with the arbitrary-field scope specified here. [[math:thm-prime-subfield-classification]] identifies the prime subfield $F\subset k$ with $\mathbb Q$ or $\mathbb F_p$. Composing the structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$ leaves the underlying scheme, its qcqs conditions and its morphisms unchanged. The complexes and maps in [F2] are restrictions of the prime-field functors, as specified there and in [F1].

## Proof
**Given:** The stated Choice and size assumptions, any field $k$, a qcqs $k$-scheme $X$, and all integer bidegrees.

**Goal:** Construct the actual ring and prove its laws and functoriality, including the zero negative-weight pieces.

1.1 Under [A1], regard $X$ as a qcqs scheme over its prime subfield by [F4], so the multiplication of [F1] applies. By [F2], identify $H^{a,b}(X)\cong\pi_{2b-a}G_b(X)$ naturally. For nonnegative $b,d$, smash homotopy representatives using [F3] and compose with $\mu_{b,d}$ of [F1]. The output has degree $2b-a+2d-c=2(b+d)-(a+c)$ in $G_{b+d}$, hence lies in $H^{a+c,b+d}(X)$ by [F2]. Independence of representatives and bilinearity follow from [F3]. The comparison respects derived morphisms: it is natural on cochain maps, and a quasi-isomorphism induces isomorphisms on cohomology and hence all realized homotopy groups by [F2], so it induces a spectral equivalence by the criterion of [A1]'s stable interface. Thus the comparison descends through the quasi-isomorphisms inverted in the derived complexes of [F2]; the algebra maps themselves remain the supplied maps of [F1]. If either weight is negative its group is zero and define its product to be the zero map. The unit of [F1] represents $1_X\in\pi_0G_0(X)\cong H^{0,0}(X)$. [A1, F1, F2, F3, F4, construct]

2.1 Associativity and the unit identities follow from [F1] and the pairing compatibilities of [F3]. For homogeneous $x,y$ of bidegrees $(a,b),(c,d)$, the graded-algebra symmetry of [F1] and the sphere sign of [F3] give $xy=(-1)^{(2b-a)(2d-c)}yx=(-1)^{ac}yx$. A negative-weight factor is zero, so these identities also hold in those cases. Extending by finite distributive sums is well-defined: finite sets of nonzero input components give finitely many contributing pairs, each output component is a finite sum, and the homogeneous laws prove associativity, both unit laws and the asserted homogeneous commutativity law on the direct sum. Componentwise addition is an abelian-group operation, and bilinearity gives both distributive laws. Every scheme morphism induces a map of the unital graded algebras in [F1]; by naturality in [F2] and [F3] its cohomology pullback preserves products and unit and respects identities and composition. On negative pieces these are the unique maps of zero groups. Restriction along the prime-field forgetful functor in [F4] preserves this construction and functoriality. This proves all assertions without changing the nonnegative-weight groups. [A1, F1, F2, F3, F4, step 1.1] ∎
