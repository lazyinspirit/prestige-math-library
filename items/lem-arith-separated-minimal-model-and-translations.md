---
id: lem-arith-separated-minimal-model-and-translations
kind: lemma
title: "Separated minimal union and translations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-invariant-volume-and-finite-minimal-models
  - lem-arith-projective-weak-model-and-rational-mapping
  - lem-schematic-closure-and-dense-agreement
  - def-s-dense-open-and-s-rational-map
  - cor-morphisms-equal-on-dense-open-reduced-source
  - thm-gluing-ringed-and-locally-ringed-spaces
  - def-scheme
  - def-separated-morphism-schemes
  - def-diagonal-morphism-scheme
  - lem-closed-immersion-local-on-target
  - lem-scheme-zariski-main-factorization-quasi-finite
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - def-smooth-morphism-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.3/4 (separated minimal union and translations)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, let $R^{\mathrm{sh}}$ be a strict henselization, and let $A/K$ be an abelian variety. Then there exists a smooth separated finite-type faithfully flat $R$-model $X$ of $A$, formed by gluing finitely many minimal representatives of $A$ along $A$. Moreover, for $R\prime=\mathcal O_{Z,\eta}$ with $Z$ smooth of finite type over $R$ and $\eta$ a generic point of its special fibre, every translation of $A_{K\prime}$ by a point of $A(K\prime)$, where $K\prime=\operatorname{Frac}R\prime$, extends to an $R\prime$-birational self-map of $X_{R\prime}$ which is an open immersion on its $R\prime$-dense domain of definition. This assertion supplies a rational map; it does not assert extension over the omitted points.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$, residue field $k$, a strict henselization $R^{\mathrm{sh}}$, and an abelian variety $A/K$.

[F1] Invariant top forms on smooth models define an order; the normalized-form comparison proves that a birational rational map whose generic isomorphism preserves the chosen invariant form cannot decrease order, and equality makes it an open immersion on its domain. Smooth models over the regular DVR are regular, hence normal. There are finitely many minimal equivalence classes, and their representatives remain minimal after the indicated smooth-DVR base changes, after splitting special-fibre components ([[lem-arith-invariant-volume-and-finite-minimal-models]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-regular-local-rings-are-normal]]).

[F2] A finite weak Neron model collection receives every generic rational map from a smooth DVR model with irreducible special fibre; its weak property and the minimal representatives are compatible with the generic smooth-DVR base changes used here ([[lem-arith-projective-weak-model-and-rational-mapping]], [[lem-arith-invariant-volume-and-finite-minimal-models]]). Since the special fibres of its smooth finite-type members are regular with finitely many disjoint irreducible components, replacing each member by the finitely many opens consisting of its generic fibre together with one special component preserves the weak property ([[def-smooth-morphism-schemes]]).

[F3] The schematic closure of the generic diagonal is flat over a DVR, and a morphism to a separated target is determined by its restriction to a schematically dense open of a reduced source ([[lem-schematic-closure-and-dense-agreement]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

[F4] Compatible identifications along a common open glue schemes; separatedness is equivalent to the diagonal being a closed immersion, and closed immersions are local on the target ([[thm-gluing-ringed-and-locally-ringed-spaces]], [[def-scheme]], [[def-separated-morphism-schemes]], [[def-diagonal-morphism-scheme]], [[lem-closed-immersion-local-on-target]]).

[F5] A separated quasi-finite morphism factors locally as an open immersion followed by a finite morphism; a finite birational algebra over a normal domain is the domain itself ([[lem-scheme-zariski-main-factorization-quasi-finite]], [[thm-regular-local-rings-are-normal]]).

## Proof

**Proof technique:** follow the separated-minimal-model construction and translation argument of BLR 4.3/4, using invariant-volume comparison for the generic translations.

1.1 Choose finitely many representatives $X_1,\dots,X_m$ of all minimal equivalence classes using [F1]. For $i\ne j$, let $\Gamma_{ij}$ be the schematic closure of the generic diagonal $A\hookrightarrow X_i\times_RX_j$. It is integral and flat over $R$ by [F3]. Suppose its special-fibre support has dense image in $(X_i)_k$. The ambient product is regular of dimension $2g+1$, and the generic diagonal has codimension $g$ there; its closure therefore has dimension $g+1$. A component of $(\Gamma_{ij})_k$ has dimension at most $g$, since it is a height-one component cut out by the nonzero divisor $\pi$. A component dominating the $g$-dimensional $(X_i)_k$ is consequently generically finite over it. At its generic point $q$, the projection $p_i:\Gamma_{ij}\to X_i$ is quasi-finite. It is separated and birational, because its generic-fibre map is the identity. On an affine neighbourhood of $\xi=p_i(q)$, [F5] factors it as an open immersion into a finite scheme. The reduced closure of the birational generic component in that finite scheme is finite birational over the normal coordinate ring of $X_i$ and lies in its fraction field, so normality makes it equal to that coordinate ring. Thus $p_i$ is an isomorphism near $q$ and $\xi$. The other projection then gives an $R$-birational map between $X_i$ and $X_j$; their minimality and [F1] imply they are equivalent, contrary to their representing distinct classes. The same argument applies to the projection to $X_j$. Therefore both special-fibre projection images are nowhere dense. Remove their closures from the special fibres, for all finitely many pairs, and write $X_i^\circ$ for the resulting open models. The generic diagonal is now closed in each $X_i^\circ\times_RX_j^\circ$ for $i\ne j$. [F1, F3, F5, given, algebra]

2.1 Glue the $X_i^\circ$ along their common open generic fibre $A$ by the identity. The identity and cocycle conditions hold because every overlap is the same $A$. The resulting scheme $X$ is smooth and of finite type over $R$, since these properties hold on its open cover by the $X_i^\circ$. Its diagonal is a closed immersion: on $X_i^\circ\times_RX_i^\circ$ this follows from separatedness of $X_i^\circ$, and on $X_i^\circ\times_RX_j^\circ$ for $i\ne j$ its image is the closed generic diagonal established in step 1.1; closedness is local on the target by [F4]. Every special fibre remains nonempty after removing nowhere-dense closed subsets, so $X\to\operatorname{Spec}R$ is surjective; it is flat because it is smooth. Thus $X$ is a smooth separated finite-type faithfully flat $R$-model of $A$. [F3, F4, given, step 1.1, construct]

3.1 First take $R'=R$. Let $C$ be an irreducible component of the special fibre of $X$, and let $U_C=A\cup C$, an open model with irreducible special fibre. By [F1] it is minimal. Split the finite weak model collection in [F2] into open models with irreducible special fibre; this preserves its weak property. For $a\in A(K)$, apply [F2] to $t_a:A\to A$ to obtain an $R$-rational map $f:U_C\dashrightarrow Y$ into one such member, with generic fibre $t_a$. Let $\omega$ be the invariant top form on $A$. On the domain of $f$, the pullback of the normalized generator $\pi^{-\operatorname{ord}(Y)}\omega$ is $\pi^{\operatorname{ord}(U_C)-\operatorname{ord}(Y)}$ times the normalized generator on $U_C$, because $t_a^*\omega=\omega$. Regularity of this pullback gives $\operatorname{ord}(U_C)\ge\operatorname{ord}(Y)$. Minimality of $U_C$ gives the reverse inequality, so the orders are equal. The pullback of the normalized top form is then a unit, so the relative differential determinant is a unit and $f$ is etale on its domain. It is separated and birational, hence quasi-finite; [F5] and normality of $Y$ show it is an open immersion there. In particular $Y$ is minimal and belongs to one of the finitely many classes represented in step 1.1. Composing with the representative's identity birational map gives an open-immersion extension of $t_a$ into $X$ on that domain. Doing this for each $C$ gives compatible rational maps because their generic restrictions are all $t_a$; they glue to an $R$-rational self-map of $X$. On its domain the glued map still pulls back the normalized invariant top form to a unit, so it is etale; it is birational, and [F5] makes it an open immersion. The same construction for $t_{-a}$ gives the inverse birational map, since the composites agree with the identity on $A$ and [F3] gives dense-open agreement. [F1, F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 For a generic smooth-DVR extension $R'=\mathcal O_{Z,\eta}$, where $Z$ is smooth and of finite type over $R$ and $\eta$ is a generic point of its special fibre, base change the construction to $R'$. The weak model property and the representatives' minimality persist by [F1, F2], after splitting the special fibres into their irreducible components. The argument of step 3.1 therefore applies to each component of $X_{R'}$ and every $a\in A(K')$, where $K'=\operatorname{Frac}(R')$, giving the claimed $R'$-birational open immersion. [F1, F2, step 3.1, algebra] ∎
