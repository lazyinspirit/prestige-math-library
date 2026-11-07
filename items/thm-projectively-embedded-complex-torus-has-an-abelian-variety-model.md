---
id: thm-projectively-embedded-complex-torus-has-an-abelian-variety-model
kind: theorem
title: A holomorphically projectively embedded complex torus has an abelian variety model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-vector-space-lattice-and-torus
- lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set
- thm-integral-closure-finite-finite-type-domain-over-field
- thm-integrality-commutes-with-localisation
- thm-integral-closure-is-integrally-closed
- thm-gluing-affine-schemes
- lem-av7-finite-morphism-projective-over-projective-base
- cor-locally-bounded-meromorphic-poles-are-removable
- thm-identity-theorem-in-several-complex-variables
- lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs
- cor-segre-veronese-embedding
- lem-quasi-finite-morphism-fibre-characterization
- cor-quasi-finite-locus-open-finite-type-algebra
- thm-proper-quasi-finite-is-finite
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-finite-birational-to-normal-is-isomorphism
- thm-nonempty-regular-locus-reduced-variety-perfect-field
- thm-regular-locus-is-open-variety
- thm-regular-equals-smooth-over-perfect-field
- thm-regular-local-rings-are-normal
- thm-ag-standard-smooth-base-change-composition
- thm-ag-standard-smooth-geometric-regularity
- thm-holomorphic-inverse-function-theorem-several-variables
- cor-strong-nullstellensatz-two-inclusions
- def-abelian-variety-over-a-field
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, version0.10 (2020)
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: Chapter II section6, Proposition6.1 and its Chow/full-faithfulness footnote, printed46–47. Its algebraization invocation is reconstructed below using the locally proved restricted projective-closure result.
  - title: J.-P. Demailly, Complex Analytic and Differential Geometry (2012)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: Chapter II Theorem8.10, printed121, and Chapter VII Theorem14.1/Corollary14.5, printed359–361; bibliographic context for the projective/algebraic torus bridge, without importing those theorems.
---

## Statement

Assume the Axiom of Choice. Let $T=V/\Lambda$ be a complex torus and suppose it has a holomorphic embedding $i:T\hookrightarrow\mathbb P^N(\mathbb C)$. Then there exist a complex abelian variety $A$ and a biholomorphic group isomorphism $T\xrightarrow{\sim}A^{\mathrm{an}}$. The abelian variety with this identification is unique up to the unique algebraic group isomorphism respecting it. The one-point torus is included.

## Facts & Assumptions

**Given:** AC, the complex torus and its supplied holomorphic projective embedding.

[A1] AC is explicit and implies the inherited DC and Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A complex torus is a complex vector space modulo a full lattice, and is a compact connected complex manifold with holomorphic translations. The reduced Zariski closure of any compact connected holomorphically embedded projective manifold is integral, has the same dimension, and has exactly its underlying complex points ([[def-complex-vector-space-lattice-and-torus]], [[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]]).

[F2] Integral closure of a finite-type domain in its fraction field is finite, commutes with localization, and is integrally closed. Compatible affine schemes glue. A finite morphism over a projective scheme has projective source ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[thm-integrality-commutes-with-localisation]], [[thm-integral-closure-is-integrally-closed]], [[thm-gluing-affine-schemes]], [[lem-av7-finite-morphism-projective-over-projective-base]]).

[F3] A locally bounded meromorphic quotient on a complex manifold extends holomorphically across its denominator zero set. The holomorphic identity theorem holds in local charts. Every point of an irreducible positive-dimensional complex variety is approached by a normalized holomorphic curve arc from any nonempty Zariski open ([[cor-locally-bounded-meromorphic-poles-are-removable]], [[thm-identity-theorem-in-several-complex-variables]], [[lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs]]).

[F4] Products of projective spaces embed by Segre. The quasi-finite locus is open and quasi-finiteness is tested by zero-dimensional finite geometric fibres; a proper quasi-finite morphism is finite. Finite separable field extensions are simple, and a finite birational morphism onto a normal variety is an isomorphism ([[cor-segre-veronese-embedding]], [[lem-quasi-finite-morphism-fibre-characterization]], [[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]], [[lem-finite-birational-to-normal-is-isomorphism]]).

[F5] A reduced variety in characteristic zero has a nonempty open regular locus; regularity is smoothness over the perfect field, and regular local rings are normal. Smoothness is preserved by base change and composition, so products of smooth varieties are smooth. A holomorphic map with invertible differential has a local holomorphic inverse. Complex points detect equality of morphisms from a reduced finite-type complex scheme to a separated scheme ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-locus-is-open-variety]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-regular-local-rings-are-normal]], [[thm-ag-standard-smooth-base-change-composition]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-holomorphic-inverse-function-theorem-several-variables]], [[cor-strong-nullstellensatz-two-inclusions]]).

[F6] A smooth proper geometrically connected algebraic group is an abelian variety in the present conventions; holomorphic group homomorphisms between complex abelian varieties are uniquely algebraic ([[def-abelian-variety-over-a-field]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

## Proof

1.1 Assume $g=\dim T\ge1$. Let $Z$ be the reduced Zariski closure of $i(T)$. By [F1], it is an integral projective variety of dimension $g$ and $Z(\mathbb C)=i(T)$. Normalize it: on each affine chart with domain $R$, use its finite integral closure in $\mathbb C(Z)$ from [F2]. Localization compatibility glues these affine normalizations to a finite birational morphism $\nu:Y\to Z$, with $Y$ normal and integral. It is projective by [F2]. On the nonempty regular open of $Z$ this is an isomorphism: its local domains are integrally closed and the extension lies in their same fraction field. [A1, F1, F2, F5, given, construct, algebra]

1.2 Record the finite-graph argument used below. Suppose an integral projective graph closure $G\subset Y_1\times Y_2$ projects bijectively on complex points to the normal integral projective $Y_1$. Every closed source point then has a zero-dimensional finite fibre, so [F4]'s open quasi-finite locus contains all closed points, and therefore the entire source. Properness and [F4] make the projection finite. It is birational in characteristic zero. In detail, its finite function-field extension is separable. Choose a primitive element by [F4] and shrink a nonempty affine target chart: after clearing finitely many denominators, the finite source algebra is $R[u]$ with the monic minimal polynomial of $u$ of degree $d$, and inverting its nonzero discriminant makes every closed fibre have $d$ distinct roots. Such a chart has a complex point. Bijectivity forces $d=1$. Thus the projection is finite birational, and [F4] makes it an isomorphism. This argument uses normality only of $Y_1$, not of $G$. [F4, F5, given, construct, algebra]

2.1 The map $i$ lifts holomorphically to $Y$. To prove this without an analytic-normalization import, take an affine chart $\operatorname{Spec}R$ of $Z$ and finite algebra generators $b_j$ of its integral closure. Each $b_j$ is a rational function on $Z$, so pulls back meromorphically to $i^{-1}(\operatorname{Spec}R)$, by writing it as a quotient of regular coordinate functions. Its denominator is not identically zero on any analytic open: that would make the corresponding algebraic rational function vanish identically on the connected embedded manifold by the holomorphic identity theorem, contradicting its Zariski density. A monic integral equation for $b_j$ has holomorphic pulled-back coefficients, locally bounded on the manifold. The elementary polynomial root bound $|b_j|\le1+\max|a_l|$ therefore makes this meromorphic quotient locally bounded off its denominator set. By [F3] it extends holomorphically. The extended generators satisfy their algebraic relations by equality on the dense rational domain, giving a holomorphic lift $\phi$ into that affine normalization. Such lifts agree on overlaps by the same dense-domain identities, so they glue with $\nu\phi=i$. [F2, F3, step 1.1, construct, algebra]

3.1 Choose a projective embedding $j:Y\hookrightarrow\mathbb P^M$. The map $j\phi$ is a holomorphic embedding. It is injective because $\nu\phi=i$ is. It is an immersion: near any point, the regular coordinate functions of $\nu$ are polynomial quotients in affine ambient coordinates of $Y$, with nonzero denominators, and thus extend holomorphically to an ambient neighbourhood. Differentiating $\nu\phi=i$ makes the differential of $j\phi$ injective; selecting an invertible coordinate minor and using [F5] gives the local holomorphic graph property. Compactness then makes the injective immersion an embedding. Its image is all of $Y(\mathbb C)$. Indeed it is compact and hence closed, and contains $\nu^{-1}(Z_{\rm reg})(\mathbb C)$ where the normalization is an isomorphism. This is a nonempty Zariski open of integral $Y$, and [F3]'s curve arcs put every other point in its analytic closure. Hence $\phi$ bijects $T$ onto $Y(\mathbb C)$, with the asserted holomorphic embedding into projective space. No algebraic smoothness has yet been inferred for $Y$. [F3, F5, step 1.1, step 2.1, choose, algebra]



4.1 For any $a\in T$, the map $x\mapsto(\phi(x),\phi(x+a))$ is a holomorphic projective embedding of the compact manifold $T$, by step 3.1 and Segre in [F4]. By [F1], its reduced algebraic closure $G_a$ has exactly this graph as its complex points and has dimension $g$. It lies in $Y\times Y$. Step 1.2 applied to its first projection gives an isomorphism $G_a\cong Y$. Its second projection consequently defines an algebraic automorphism of $Y$ inducing translation by $a$; the graph for $-a$ supplies the inverse. Choose one regular complex point $y_0$ of $Y$ using [F5]. These algebraic translations act transitively on $Y(\mathbb C)$, so every complex point is regular. The nonregular locus is closed by [F5] and has no complex point, so it is empty. Therefore $Y$ is smooth over $\mathbb C$. This derives algebraic smoothness from actual algebraic translations, rather than from equality of point sets. [F1, F4, F5, step 3.1, step 1.2, choose, construct, algebra]

5.1 The graph of $T\times T\to T$, $(x,y)\mapsto x+y$, is a holomorphic projective embedding of the compact complex manifold $T\times T$ into $Y^3$, via $\phi$ and Segre. Again [F1] identifies its reduced algebraic closure with precisely that graph on complex points. The first two projections map it bijectively to $Y\times Y$. This target is smooth and hence normal by step 4.1 and [F5], so step 1.2 makes the projection an isomorphism. Its third projection gives an algebraic multiplication on $Y$. The same graph argument for $x\mapsto-x$ gives algebraic inversion on $Y$, and $\phi(0)$ gives its identity point. [F1, F4, F5, step 3.1, step 1.2, step 4.1, construct, algebra]

6.1 Associativity, commutativity, inverse and identity hold on complex points because the transported operation is exactly that of $T$. The schemes $Y$, $Y^2$ and $Y^3$ are smooth and reduced, so [F5] makes these identities algebraic. The resulting group variety is smooth, projective and geometrically connected, hence is an abelian variety $A$ by [F6]. Its analytification has the induced manifold structure from its projective embedding, so step 3.1 identifies $\phi:T\to A^{\rm an}$ biholomorphically and as a group isomorphism. If two models have this property, their identity comparison through $T$ is a holomorphic group isomorphism; [F6] makes it and its inverse uniquely algebraic. For the one-point torus take $\operatorname{Spec}\mathbb C$ with its trivial group law. This proves the entire Statement. [F5, F6, step 3.1, step 5.1, algebra] ∎

## Source-reading boundary

Milne CM Proposition6.1 and its full printed46–47 sketch, and Demailly II Theorem8.10 printed121 and VII Theorem14.1/Corollary14.5 printed359–361, were actually consulted. Neither Chow, analytic normalization, Kodaira embedding nor the Riemann criterion is imported. The restricted projective-closure supplier is locally proved; bounded meromorphic lifting, finite graph projection and translation-derived smoothness explicitly supply the remaining algebraic bridge.
