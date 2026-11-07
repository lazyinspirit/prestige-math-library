---
id: thm-picard-zero-represented-by-jacobian
kind: theorem
title: The Degree-Zero Picard Sheaf of a Curve Is an Abelian Variety
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-algebraic-curve-over-field
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-jacobian-of-smooth-proper-curve
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-projective-embedding-every-smooth-proper-curve
  - cor-degree-descends-picard-curve
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - thm-full-riemann-roch-divisor
  - thm-hilbert-scheme-represents-projective-flat-families
  - thm-effective-divisor-symmetric-power-projective
  - lem-arith-hilbert-divisor-charts-and-picard-diagonal
  - def-fppf-sheaf-and-sheafification
  - lem-fppf-sheafification-exists
  - lem-nonempty-smooth-scheme-finite-separable-point
  - thm-properness-descent-fpqc
  - thm-cohomological-dimension-noetherian-scheme
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-smooth-morphism-formally-smooth-finite-presentation
  - thm-global-functions-proper-integral-variety
  - def-smooth-morphism-schemes
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation
  - thm-gluing-affine-schemes
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-abelian-variety-is-projective
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-fp-sheaf-stage
  - lem-nonaffine-finite-field-descent-scheme-with-affine-orbits
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-ample-powers-very-ample-proper-base
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - thm-line-bundle-rational-section-cartier-divisor
  - cor-negative-degree-no-sections-rr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§1–4, printed pp. 85–103
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $C$ be a smooth, proper, geometrically connected curve over a field $k$, and let $g=\dim_k H^1(C,\mathcal O_C)$. The full relative Picard fppf sheaf $\operatorname{Pic}_{C/k}$ is represented by a separated group scheme locally of finite type over $k$, and its fixed-degree subfunctors $\operatorname{Pic}^d_{C/k}$ are open and closed. The degree-zero component is a smooth, proper, geometrically connected group scheme of dimension $g$; hence it is an abelian variety and is the Jacobian $J_C$. If $P\in C(k)$, rigidification along $P$ identifies $\operatorname{Pic}^0_{C/k}$ with the functor of degree-zero line bundles trivialized along $P$, and the identity of $J_C$ corresponds to a universal normalized line bundle $\mathcal M_P$ on $C\times J_C$, trivialized on $P\times J_C$. This representability is a statement about the fppf sheaf, not merely about its $k$-valued line-bundle classes.

## Statement references

[Milne, Picard functor and Jacobian construction, Ch. III §§1–4](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Picard schemes and Jacobians of curves, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a smooth proper geometrically connected curve $C/k$, its relative Picard fppf sheaf, and $g=\dim_k H^1(C,\mathcal O_C)$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] The Axiom of Dependent Choice allows a sequence to be recursively chosen along a serial relation; the present proof uses it only through the Hilbert-chart Picard representation supplier. [[def-dependent-choice]]

[F1] A smooth proper geometrically connected curve is projective and geometrically integral: after algebraic closure, smoothness makes its local rings regular domains, so distinct irreducible components cannot meet, and connectedness leaves one component. Its genus is $g=\dim_kH^1(C,\mathcal O_C)$. [[cor-projective-embedding-every-smooth-proper-curve]] [[def-genus-euler-characteristic-curve]] [[def-smooth-morphism-schemes]] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[F2] Positive effective-divisor Hilbert charts have represented smooth proper
surjective linear-system fibres over their image subfunctors; the Picard
diagonal is represented and is separated once a representative is obtained.
The linear-equivalence relation on a chart has a nonempty saturated open
with a scheme quotient. These facts do not by themselves give a covering
by scheme quotients. [[def-picard-fppf-sheaf-of-smooth-proper-curve]]
[[lem-arith-hilbert-divisor-charts-and-picard-diagonal]]
[[thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation]]

[F3] The universal finite projective cohomology complex for a line bundle on
$C_T$ computes every geometric-fibre cohomology group. Its alternating ranks
are locally constant. Riemann–Roch identifies its Euler characteristic with
$\deg L_t+1-g$; thus degree is locally constant, unchanged by base pullbacks,
and compatible with extension of the residue field. The degree components
are the subfunctors defined by these fibre degrees.
[[lem-proper-flat-fp-cohomology-perfect-complex]]
[[thm-full-riemann-roch-divisor]]
[[def-degree-components-of-relative-picard-sheaf-for-curve]]

[F4] For $d\ge0$, the scheme $C^{(d)}$ represents effective relative Cartier divisors of degree $d$, is projective, and is geometrically connected. [[thm-effective-divisor-symmetric-power-projective]]

[F5] Riemann–Roch gives $h^0(C_{\bar k},L)=d+1-g$ for a line bundle of degree $d>2g-2$, since the complementary canonical degree is negative and has no nonzero section. [[thm-full-riemann-roch-divisor]] [[def-degree-divisor-proper-curve]]
[[thm-line-bundle-rational-section-cartier-divisor]]
[[cor-negative-degree-no-sections-rr]]

[F6] A nonempty smooth finite-type curve over $k$ has a closed point with finite separable residue field. [[lem-nonempty-smooth-scheme-finite-separable-point]]

[F7] Properness descends along a faithfully flat, quasi-compact base change. In particular it descends along the finite faithfully flat field extension supplied by [F6]. [[thm-properness-descent-fpqc]]

[F8] A separated Noetherian scheme of dimension one has $H^2(C,\mathcal O_C)=0$ under the Axiom of Choice, and finite affine covers with affine intersections compute quasi-coherent cohomology by their Čech complexes. [[thm-cohomological-dimension-noetherian-scheme]] [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[F9] A morphism locally of finite presentation is smooth if it has the infinitesimal lifting property for square-zero extensions. [[thm-smooth-morphism-formally-smooth-finite-presentation]]

[F10] For a proper geometrically integral curve, global functions on $C_T$ are exactly pullbacks of global functions on $T$; hence a line-bundle isomorphism that is trivialized along $P\times T$ is unique. [[thm-global-functions-proper-integral-variety]]

[F11] Affine schemes glue along compatible open overlaps. A nonempty
finite-type scheme over an algebraically closed field has a rational closed
point, and a closed subset of such a scheme is empty if it has no closed
point. [[thm-gluing-affine-schemes]]
[[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

[F12] Finite-presentation schemes, their morphisms and equalities, and
finitely presented sheaves, their morphisms and equalities descend to finite
stages of a filtered union of fields. Invertibility is retained by descending
a line bundle and its inverse with the evaluation isomorphisms.
[[lem-filtered-colimit-fp-scheme-stage]]
[[lem-filtered-colimit-fp-sheaf-stage]]

[F13] Every abelian variety is projective, by the ample-line-bundle
construction for smooth connected groups, without using Picard
representability. High ample powers on a proper scheme are very ample and
coherent cohomology vanishes in positive degrees for sufficiently high
ample twists. [[thm-abelian-variety-is-projective]]
[[thm-ample-powers-very-ample-proper-base]]
[[lem-projective-coherent-cohomology-finite-and-vanishing]]

[F14] A separated finite-type scheme with finite-field-extension descent
data descends effectively if every finite descent orbit lies in an affine
open. The theorem allows inseparable extensions and the full nonreduced
tensor-product descent datum. Compatible scheme morphisms and finitely
presented modules descend faithfully flat locally.
[[lem-nonaffine-finite-field-descent-scheme-with-affine-orbits]]
[[lem-nonaffine-fppf-descent-of-scheme-morphisms]]
[[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** construct the full sheaf over the algebraic closure by
a generic quotient and translates, prove its components projective, and
descend each component with its complete all-test universal property.

**Given:** The curve and AC/DC as in the Statement. Write $\mathcal P$ for
its fppf Picard sheaf and $\Omega$ for an algebraic closure of $k$.

1.1 First, whenever a base field $F$ has a point $P\in C(F)$, normalization $L\mapsto L\otimes p_T^*(P_T^*L)^{-1}$ identifies line-bundle classes modulo base pullbacks with $P$-rigidified line bundles. An automorphism of a line bundle is a global unit on $C_T$, hence a base unit by [F10]; it is the identity if it respects the rigidification. An fppf-local representative of a sheaf class therefore has uniquely compatible rigidified isomorphisms on overlaps. Their cocycle holds by uniqueness, so effective module descent [F14] produces a rigidified line bundle over $C_T$. This proves the identification with $\mathcal P_F$ on every $F$-scheme, including nonreduced and non-Noetherian tests. Without a point, this identification with actual line bundles is not asserted. [F2, F10, F14, given, construct]

2.1 For an affine test $T$ with a line bundle $L$ on $C_T$, apply the finite complex in [F3] locally on $T$. For each geometric fibre its Euler characteristic is the alternating sum of the locally free ranks of the complex, and Riemann–Roch gives $\deg L_t=\chi(L_t)-(1-g)$. Thus the fibre degree is locally constant. This descends along fppf-local representatives, since tensoring by a base line bundle has degree zero on fibres. Consequently every test pulls the degree-$d$ condition back to an open-and-closed subset, so $\mathcal P^d\subset\mathcal P$ is an open-and-closed subfunctor. There is no use here of a degree homomorphism on a single curve as a substitute for constancy in families. [F3, F5, step 1.1, algebra]

3.1 Work over $\Omega$, and fix $P\in C(\Omega)$ and a very ample $H$, using [F1, F11]. By [F2], a positive finite-type divisor chart $D^+$ has represented linear-system fibres and a flat finite-type equivalence relation. Its saturated nonempty open $W$ has a scheme quotient $Y$. Its image $V\subset\mathcal P_\Omega$ is an open subfunctor, as follows. For a test $T\to\mathcal P_\Omega$, use step 1.1 to represent its class by $L$. Restrict to the open $T^+$ where its Hilbert polynomial and the finitely many positive-regularity conditions defining $D^+$ hold; openness and arbitrary-base compatibility follow from the finite complexes and regularity in [F2]. Over $T^+$ the divisor fibre is $\mathbf P((p_*L)^\vee)$, smooth proper and surjective. The inverse image of $W$ in this fibre is open. Saturation makes its two inverse images under the kernel pair equal; since the projection is faithfully flat and open, this open descends to an open $T_V\subset T^+$. By the quotient universal property, $Y\times_{\mathcal P}T$ represents exactly $T_V$. Thus $V=Y$ as fppf sheaves and $V\to\mathcal P_\Omega$ is a represented open immersion on all tests, not only an inclusion of point sets. [F1, F2, F11, step 1.1, step 2.1, construct]

4.1 Choose $v\in V(\Omega)$ by [F11]. The translates $x-v+V$ for $x\in\mathcal P(\Omega)$ contain every $\Omega$-valued class. They cover on arbitrary tests as well: pull their union back to every positive finite-type divisor chart, for every relevant polynomial and twist. This is an open subset containing all closed points, because their residue fields are $\Omega$; its closed complement is empty by [F11]. Those divisor charts, with the twist by $H$ reversed, cover the sheaf fppf-locally on any test: locally a sufficiently positive twist of its representing line bundle has nonzero locally free sections, and the projective-space bundle of sections is a surjective fppf cover supplying a divisor. Hence the translates cover the entire sheaf. Their intersections are represented open subschemes of each piece; their functor identifications satisfy the cocycle condition. Refining by affine opens and applying [F11] glues them to a scheme $G$ representing $\mathcal P_\Omega$ on all tests. The group operations are morphisms by the representing property. It is locally of finite type and separated by [F2], and each $G^d$ is open and closed by step 2.1. Evaluation at the identity map of the representative, followed by step 1.1, gives a universal $P$-rigidified bundle on $C_\Omega\times G$. [F2, F11, step 1.1, step 2.1, step 3.1, construct]

5.1 We prove smoothness using arbitrary affine square-zero tests. Let $A'\twoheadrightarrow A$ be a surjection of $\Omega$-algebras with square-zero kernel $I$, and let a morphism $\operatorname{Spec}A\to G$ be represented by its normalized line bundle. On a finite affine cover of $C$ and affine refinements trivializing this bundle on $C_A$, the exact sequence of units for $C_A\subset C_{A'}$ has kernel $1+I\mathcal O_{C_{A'}}=I\otimes_\Omega\mathcal O_C$ additively. Local trivializations lift, and failure of their lifted transition units to satisfy the triple cocycle is a Čech $2$-cocycle in this kernel. A finite affine cover computes its cohomology; tensoring its complex over the field $\Omega$ with $I$ is exact, so $H^2(C,I\otimes_\Omega\mathcal O_C) =I\otimes_\Omega H^2(C,\mathcal O_C)=0$ by [F8]. Adjust the transition units by a $1$-cochain to obtain a line bundle lift, then normalize along $P$. Its degree is unchanged on the nilpotent thickening. Thus the lifting criterion [F9] applies to every affine square-zero test, not just local Artin rings, and $G$ is smooth. For $A'=\Omega[\epsilon]$ and $A=\Omega$, the same units sequence identifies the tangent space at the trivial bundle with $H^1(C_\Omega,\mathcal O_C)$: global base units lift and rigidification removes them. Its dimension is $g$. Translations identify tangent spaces, so every component has dimension $g$. [F8, F9, F10, step 1.1, step 4.1, algebra]

6.1 Put $e=2g+1$. Every geometric degree-$e$ line bundle has a nonzero section by [F5]. Therefore the divisor-class morphism $C_\Omega^{(e)}\to G^e$ is surjective, including after every field extension: a fibre over a geometric class contains a nonzero section. It is proper because its source is projective and its target separated; the graph is closed and projection from the proper source product is proper. The image is quasi-compact, so $G^e$ is finite type. It is universally closed over $\Omega$: after any base change, a closed subset of the target has the same base image as its closed inverse image in the proper surjective source. Thus $G^e$ is proper. Its source is geometrically connected by [F4], so $G^e$ is geometrically connected. Tensoring by $\mathcal O_C(-eP)$ identifies it with $G^0$. Hence $G^0$ is smooth, proper and geometrically connected of dimension $g$. Its geometric local rings are regular domains; distinct irreducible components of a smooth finite-type scheme cannot meet, so connectedness makes it geometrically integral. Thus it is an abelian variety by definition. By [F13] it is projective; that theorem's smooth-group ample construction does not use the Picard representability being proved here. Translation by $\mathcal O_C(dP)$ then makes every $G^d$ smooth, geometrically connected and projective. This also covers $g=0$. [F2, F4, F5, F13, step 5.1, construct]

7.1 Fix any integer $d$. The projective finite-presentation scheme $G^d$, a projective embedding, and its normalized universal line bundle are finite data. By [F12], descend these to a finite extension $K/k$ in $\Omega$, enlarging it to contain the point $P$. Descend also the inverse bundle, normalization and their equations, so the descended bundle is invertible and $P$-rigidified. One may descend the finitely many homogeneous equations of the projective embedding itself; thus the descended scheme $B_d/K$ is projective, not merely a finite-presentation model with unverified properness. Its bundle defines a natural map $B_d\to\mathcal P^d_K$ on all tests. Its geometric degree is $d$ because this is true after $\Omega/K$, and step 2.1 detects degree fibrewise. Neither $K/k$ nor later finite extensions are assumed separable. [F3, F12, F13, step 1.1, step 4.1, step 6.1, construct]

8.1 This map is an isomorphism of sheaves on every $K$-scheme. To check surjectivity, take an affine test $T=\operatorname{Spec}R$ and, by step 1.1, its normalized degree-$d$ bundle. Over $T_\Omega$ it has a unique classifying map to $(B_d)_\Omega=G^d$ and a unique normalized bundle isomorphism. Write $R\otimes_K\Omega$ as the filtered colimit of $R\otimes_KK'$ over finite $K'/K$ in $\Omega$. The two finite-presentation descent clauses [F12], applied also to the line bundle inverse, descend this map and isomorphism to some $T_{K'}$. Uniqueness holds already over any $K$-test: two classifying maps or normalized bundle isomorphisms agree if they agree after the faithfully flat field extension $\Omega/K$. Apply this uniqueness to the two pullbacks on $T_{K'}\times_TT_{K'}$, with its entire possibly nonreduced tensor algebra. After tensoring that test with $\Omega$ over $K$, both are maps over $\Omega$ classifying the same normalized bundle; the all-test property of $G^d$ makes them equal. Faithful flatness detects their equality before that extension. Thus the map and isomorphism descend by [F14] along the finite fppf cover $T_{K'}\to T$. Affine tests glue by uniqueness. This proves surjectivity and injectivity on arbitrary tests, including nilpotents, rather than merely a bijection of field-valued points. [F10, F12, F14, step 1.1, step 4.1, step 7.1, algebra]

9.1 Since $B_d$ represents the same base-changed sheaf, it carries canonical descent isomorphisms over $K\otimes_kK$: both pullbacks represent $\mathcal P^d_{K\otimes_kK}$. Their full cocycle over the triple tensor algebra follows by uniqueness of representatives. This includes the nonreduced overlap in the inseparable case. The underlying $k$-scheme of $B_d$ is projective: $B_d$ is projective over $K$ and the finite map $\operatorname{Spec}K\to\operatorname{Spec}k$ is projective (equivalently compose finite projective embeddings). Every finite descent orbit is contained in an affine open. Indeed choose closed specializations of its finitely many points. For a sufficiently high power of a very ample bundle, the exact sequence of their finite union and the positive-twist vanishing in [F13] makes evaluation onto their residue fibres surjective. Choose a nonzero value at each of the finitely many points and lift these values to a section. Its nonvanishing locus is affine under the corresponding projective embedding and contains all those specializations, hence all original orbit points. The exact orbit hypothesis in [F14] is therefore verified, so $B_d$ descends effectively to a separated finite-type $k$-scheme $J^d$ representing $\mathcal P^d$; the representing isomorphism descends as a sheaf isomorphism. We descend the schemes and sheaf morphisms here, not a universal line bundle: normalizations at the possibly different conjugates of $P$ need not descend a bundle to $k$. [F12, F13, F14, step 7.1, step 8.1, construct]

10.1 Set $J=\coprod_{d\in\mathbb Z}J^d$. For every test scheme, its degree function is locally constant by step 2.1, so the open-and-closed inverse images of the integers partition that test. Step 9.1 on each piece therefore identifies maps to this coproduct with $\mathcal P$ on every test. The group operations are morphisms by this representing property. Each component is separated finite type, and the disjoint union is separated and locally of finite type. Its base change to $\Omega$ is the scheme $G$. In particular $J^0$ is geometrically connected and has dimension $g$. Smoothness can be checked after a faithfully flat field extension: the finite-presentation Jacobian charts for the geometric smooth model descend locally by finite-presentation equations and their unit-minor identities, or equivalently the geometric regularity and flatness criterion in [F9] applies over the field. Properness of $J^0$ follows from [F7] after the finite extension $K/k$ used for its projective model. Thus $J^0$ is smooth, proper and geometrically connected of dimension $g$, hence an abelian variety, and by the Jacobian definition it is $J_C$. [F3, F7, F9, F12, F14, step 5.1, step 6.1, step 9.1, construct]

11.1 If a point $P\in C(k)$ is supplied over the original field, step 1.1 identifies $\mathcal P^0$ with the functor of $P$-rigidified degree-zero line bundles over every test. Apply that identification to $\operatorname{id}_{J^0}$ to obtain the normalized universal bundle $\mathcal M_P$ on $C\times J^0$. Its restriction to $P\times J^0$ is trivial by its rigidification, and the zero class is the trivial normalized bundle. This proves precisely the last assertion of the Statement; without $C(k)$ a universal bundle has not been asserted or used in descent to $k$. [F10, F14, step 1.1, step 10.1, construct] ∎

## Axiom use

AC and DC are the original Statement hypotheses. They are consumed by the
Hilbert-chart/cohomology, gluing, finite-presentation descent and effective
field-descent suppliers recorded above. All geometric degrees and all
characteristics are retained. Finite extension descent uses its actual
fpqc tensor-algebra cocycle; no separability or rational-point hypothesis
is silently imposed on the original field.
