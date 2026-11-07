---
id: lem-number-field-brauer-localization-is-injective
kind: lemma
title: "Brauer localization for a number field is injective"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-finite-density-and-central-simple-base-change
  - lem-central-division-algebra-separable-maximal-subfield
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - lem-early-number-field-idele-norm-index-and-h1
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - thm-shapiro-lemma-for-group-cohomology
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-finite-galois-extension-characterizations
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-number-field-brauer-classes-have-finite-local-support
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the global place interfaces and simultaneous local cochain trivializers. It implies the CC/DC hypotheses of the idele-class H1 supplier. No global reciprocity or Brauer-Hasse-Noether exactness is assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VII, Theorem 6.1, localization injectivity from first idele-class cohomology; the restricted-product cochain assembly is explicit here."
verification: {}
---

## Statement

Assume the Axiom of Choice, and use normalized cochains for finite-group
cohomology. For a number field $K$, localization is injective:
$$\operatorname{Br}_{\mathrm{alg}}(K)\longrightarrow\prod_v\operatorname{Br}_{\mathrm{alg}}(K_v).$$
Here $v$ runs over all finite and archimedean places and the Brauer groups
are algebraic similarity groups. Equivalently, a finite-dimensional central
simple $K$-algebra split at every completion is split over $K$. By finite
local support, localization also gives an injection into
$\bigoplus_v\operatorname{Br}_{\mathrm{alg}}(K_v)$.

## Statement references

[J. S. Milne, *Class Field Theory*, Chapter VII, Theorem 6.1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, the number field and its place completions in the Statement, and normalized finite-group cochains.

[F1] Every central simple algebra has a division representative and a finite Galois splitting field. The finite relative Brauer comparison is an isomorphism, with obstruction $o_E=-b_E$, zero exactly for a matrix algebra and compatible with local scalar extension. [[lem-finite-density-and-central-simple-base-change]] [[lem-central-division-algebra-separable-maximal-subfield]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F2] Under AC, CC and DC, for each finite Galois number-field extension $E/K$ with group $G$, $H^1(G,C_E)=0$. This statement is proved from the norm inequalities and finite subgroup reductions, without global Brauer reciprocity. [[lem-early-number-field-idele-norm-index-and-h1]]

[F3] Ideles are the restricted product of local multiplicative groups, with units at all but finitely many finite places, and $C_E=\mathbb A_E^\times/E^\times$. Thus $1\to E^\times\to\mathbb A_E^\times\to C_E\to1$ is an exact sequence of abelian $G$-modules. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F4] Under AC, Shapiro gives $H^r(G,\operatorname{Coind}_H^GM)\cong H^r(H,M)$. Its adjunction map is restriction followed by evaluation at the identity coset. [[thm-shapiro-lemma-for-group-cohomology]]

[F5] Relative completion tensor decomposition identifies $E\otimes_KK_v$ with $\prod_{w\mid v}E_w$ at finite and archimedean places. Finite-place completions are complete discrete valuation fields with finite residue fields. A finite Galois extension is a splitting field of a separable polynomial and has fixed field its base. [[lem-number-field-completion-tensor-and-norm-in-zf]] [[thm-finite-galois-extension-characterizations]]

[F6] Under AC, any global-field element is integral away from finitely many places. Applying this to a nonzero element and its inverse makes it a unit outside a finite set. [[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[F7] In a finite unramified extension of finite-residue local fields, unit cohomology vanishes in every positive degree. [[lem-unramified-local-unit-norms-and-cohomology]]

[F8] Number-field algebraic Brauer classes have finite local support, with all archimedean places included in a finite exceptional set. [[thm-number-field-brauer-classes-have-finite-local-support]]

[F9] A finite separable extension is simple; simple residue roots lift over complete fields; finite unramified extensions are classified by residue fields; finite local degrees are $ef$, with the unique extending absolute value. [[thm-primitive-element-theorem-for-finite-separable-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[A1] AC implies CC and DC and permits a simultaneous choice of local cochain trivializers indexed by the set of places. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** finite local Shapiro cochains, restricted-product assembly, and first idele-class cohomology.

**Given:** The data above and a Brauer class $\alpha$ whose localization is zero at every place.

1.1 Choose a finite Galois splitting field $E/K$ for a representative of $\alpha$ by [F1], put $G=\operatorname{Gal}(E/K)$, and represent its obstruction by a normalized cocycle $c:G^2\to E^\times$. Its diagonal image is an idele cocycle $z$ by [F3]. By [F9], write $E=K(\theta)$ with monic separable minimal polynomial $f$ and choose a finite polynomial Bezout identity $af+bf'=1$. By [F6], exclude finitely many places where the coefficients of $f,a,b$ are not integral, and exclude the restrictions of the finitely many places where any value of $c$ or its inverse is not integral. Add all archimedean places, a finite set by [F8], obtaining a finite $S$. This uses no later global finite-ramification theorem. [F1, F3, F6, F8, F9, given, choose, construct]

2.1 At a finite $v\notin S$, put $F=K_v$. The integral Bezout identity makes $\bar f$ squarefree. For each irreducible factor $\bar f_i$ of degree $d_i$, choose by [F9] an unramified $U_i/F$ with residue $k_v[T]/(\bar f_i)$ and degree $d_i$. Hensel lifts the indicated simple residue root of $\bar f$ to $\alpha_i\in\mathcal O_{U_i}$ with $f(\alpha_i)=0$. Its first $d_i$ powers are independent over $F$: scale any relation to integral coefficients with one unit, then reduce to independent residue powers. Thus $F(\alpha_i)=U_i$. Its minimal polynomial $h_i$ has degree $d_i$, integral coefficients and reduction $\bar f_i$, because its unramified Galois conjugates are integral and reduce to all the distinct residue conjugates. The distinct $h_i$ divide $f$ and their degrees sum to its degree, hence $f=\prod_i h_i$. By [F5], $E\otimes_KF=F[T]/(f)=\prod_{w\mid v}E_w$, so every $E_w$ is isomorphic to some unramified $U_i$. The unique extending value in [F9] preserves that property. The components of $z$ are unit-valued there by the definition of $S$. This supplies the exact local unramifiedness needed below without a global finite-ramification theorem. [F5, F9, step 1.1, construct, algebra]


2.2 For any place $v$, let $J_v=\prod_{w\mid v}E_w^\times$. The finite group $G$ acts transitively on these factors. Indeed invariants in $E\otimes_KK_v$ are $K_v$, by expanding in a $K$-basis and imposing the finitely many linear equations $g(x)=x$; if there were two factor orbits, the sum of the idempotents of either orbit would be a nontrivial invariant idempotent in the field $K_v$. Fix one $w$ and let $H=G_w$. Restriction identifies $H$ with $\operatorname{Gal}(E_w/K_v)$: a local automorphism permutes the roots of a separable global splitting polynomial and hence preserves the embedded $E$, while an element stabilizing $w$ extends by continuity. The fields $E$ and $K_v$ generate the local tensor factor, so these maps are inverse. This argument includes $\mathbb C/\mathbb R$ and the trivial archimedean extension. [F5, step 1.1, choose, algebra]

3.1 There is a $G$-module identification $J_v\cong\operatorname{Coind}_H^GE_w^\times$. Explicitly, for a tuple $x$, set $f_x(g)=g(x_{g^{-1}w})\in E_w^\times$. Then $f_x(hg)=h f_x(g)$ and $f_{sx}(g)=f_x(gs)$, precisely the coinduction relations; the finite orbit recovers $x$ from $f_x$. At a finite place the same formula identifies $U_v=\prod_{w\mid v}\mathcal O_{E_w}^\times$ with the coinduced local unit module. Under [F4], the image of $[z_v]\in H^2(G,J_v)$ is restriction to $H$ followed by projection to $w$, namely the local obstruction of $\alpha_v$ by [F1]. It is zero since $\alpha_v=0$. Therefore $z_v$ has a normalized $J_v$-valued one-cochain trivializer. For $v\notin S$, [F7] and the unit version of [F4] give such a trivializer valued in $U_v$. [A1, F1, F4, F7, step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 By [A1], choose these one-cochains $b_v$ simultaneously over all places, with unit values when $v\notin S$. For each $g\in G$, the tuple of all $b_v(g)$ lies in $I_E$ because it is unit-valued outside the fixed finite set $S$. These tuples define a normalized idele-valued cochain $b:G\to I_E$. The cochain differential and the group action are componentwise, so $db=z$. Thus the image of $[c]$ in $H^2(G,I_E)$ is zero. This argument does not interchange cohomology with an infinite product without justification: the required preimages were selected explicitly under AC and satisfy a common restricted-product bound. [A1, F3, step 3.1, construct, algebra]

5.1 Project $b$ to a cochain $\bar b:G\to C_E$. Since $db=z$ is diagonal, $d\bar b=1$, so $\bar b$ is a one-cocycle. By [F2,A1], there is $a\in C_E$ with $\bar b(g)=g(a)/a$. Lift this single class to an idele $t$ by [F3] and replace $b(g)$ by $b(g)/(g(t)/t)$. Its projection is now one, so its values belong to the diagonal $E^\times$, and its differential remains $c$, since a degree-zero coboundary has trivial next differential. Hence $c$ is already an $E^\times$-valued coboundary. Injectivity of the finite comparison [F1] gives $\alpha=0$. This is the needed degree-two exactness argument directly on cochains, with no unproved global class-formation theorem. [A1, F1, F2, F3, step 4.1, choose, algebra]

6.1 Every class in the kernel is zero by step 5.1, proving localization injective into the product. The zero class and a scalar matrix algebra are included. By [F8] localization takes values in the direct sum, so the same map into that direct sum is also injective. No sum-of-invariants or zero-sum realization assertion has been used. [F8, step 5.1, algebra] ∎
