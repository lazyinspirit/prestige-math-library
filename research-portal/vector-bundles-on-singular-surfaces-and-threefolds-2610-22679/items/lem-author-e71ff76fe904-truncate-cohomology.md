---
id: lem-author-e71ff76fe904-truncate-cohomology
kind: lemma
title: Cofiber range gives natural truncation and cohomology comparison
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-e71ff76fe904-prime-field-coefficients
  - def-motivic-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-e71ff76fe904-comparison-composite: mathematical-premise
  lem-author-e71ff76fe904-prime-field-coefficients: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:thm-the-derived-category-inherits-a-triangulated-structure: mathematical-premise
  math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Let $k$ be a field. Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. For every qcqs $k$-scheme $X$, $j\geq0$ and $n\geq1$ invertible in $k$, the actual comparison map gives a natural equivalence
$$\tau^{\leq j}(\mathbb Z(j)_{\mathrm{mot}}(X)/n)\xrightarrow{\sim}\tau^{\leq j}R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$$
and natural isomorphisms $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z/n)\to H^a_{\mathrm{et}}(X,\mu_n^{\otimes j})$ for all $a\leq j$. Here $/n$ is the objectwise derived quotient, $\tau^{\leq j}$ is canonical cohomological truncation in $D(\mathbb Z)$, and $H^a_{\mathrm{et}}(X,\mu_n^{\otimes j})$ means $H^a(R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j}))$.

## Facts & Assumptions
**Given:** The field, qcqs scheme, nonnegative weight, invertible positive integer, Choice and size hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[A1] The Axiom of Choice and fixed size bounds are inherited when applying the prime-field helper in steps 1.1 and 2.1, specifically its K-injective derived-evaluation identification. [[math:def-axiom-of-choice]]

[F1] [[lem-author-e71ff76fe904-comparison-composite]] supplies the actual source comparison and its objectwise cofiber bound.

[F2] [[lem-author-e71ff76fe904-prime-field-coefficients]] identifies the underlying prime-field object and the intrinsic étale target under [A1]; [[def-motivic-cohomology]] fixes its motivic source and finite coefficients.

[F3] Fields, schemes over $\operatorname{Spec}k$ and their morphisms, and the two qcqs conditions are those of [[math:def-field]], [[math:def-scheme-over-base]] and [[math:def-quasi-compact-and-quasi-separated-scheme]]. No algebraic closedness or finite-type assumption is imposed here.

[F4] [[math:def-derived-category-of-an-abelian-category]] fixes the cochain, shift, cone and size conventions for $D(\mathbb Z)$, the localization $Q$ of the homotopy category of complexes of abelian groups at quasi-isomorphisms. Every morphism has a roof $Q(v)Q(s)^{-1}$ with $s$ a quasi-isomorphism.

[F5] [[math:thm-the-derived-category-inherits-a-triangulated-structure]] supplies the long exact cohomology sequence for every distinguished triangle in this derived category, including the triangle of the actual cofiber in [F1].

[F6] [[math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]] supplies canonical truncation as a functor on the derived category, with natural identifications $H^a(\tau^{\leq j}A)=H^a(A)$ for $a\leq j$ and zero for $a>j$.

## Proof
1.1 Use the field and scheme conventions of [F3]. Apply the source comparison of [F1] at the underlying prime-field object given by [F2], under [A1]. Precomposition evaluates the same actual map $f:A\to B$ and its same cofiber $C$, with $H^a(C)=0$ for $a\leq j$. In the derived category fixed in [F4], its cofiber triangle is distinguished. By [F5] the segment $H^{a-1}(C)\to H^a(A)\xrightarrow{H^a(f)}H^a(B)\to H^a(C)$ is exact. For $a\leq j$ the two outer groups vanish, so $H^a(f)$ is injective and surjective, hence an isomorphism. [A1, F1, F2, F3, F4, F5]

2.1 By [F6], $\tau^{\leq j}f$ induces isomorphisms in degrees at most $j$ by step 1.1 and between zero groups in all larger degrees. To verify invertibility for this derived morphism, represent it by a roof $Q(v)Q(s)^{-1}$ as in [F4]. Each $H^a(s)$ is an isomorphism, so the equality $H^a(\tau^{\leq j}f)=H^a(v)H^a(s)^{-1}$ makes every $H^a(v)$ an isomorphism. Thus $v$ is a quasi-isomorphism, and both $Q(v)$ and $Q(s)$ are invertible by the defining localization. The coefficient and derived-evaluation identifications of [F2], under [A1], identify its terms with the displayed ones. Applying cohomology and the motivic definition in [F2] gives the stated degree-$a$ isomorphisms. The actual comparison is natural by [F1] and [F2]; applying the truncation and cohomology functors gives natural transformations with invertible components, whose inverses are natural as well. [A1, F1, F2, F4, F6, step 1.1] ∎
