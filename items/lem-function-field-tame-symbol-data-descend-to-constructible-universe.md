---
id: lem-function-field-tame-symbol-data-descend-to-constructible-universe
kind: lemma
title: Function-field tame-symbol data descend to the constructible universe
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-global-field
  - thm-constructible-inner-model-semantic-and-formal-schema
  - prop-constructible-levels-transitivity-ordinals-and-rank
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-curves-function-fields-equivalence
  - cor-projective-embedding-every-smooth-proper-curve
  - thm-cartier-weil-divisors-curves-agree
  - lem-finite-local-artin-actions-and-tame-symbols-in-zf
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Stefan Geschke, Models of Set Theory
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
      locator: Sections5.3–5.5 through the supplied local constructible-inner-model schema; the function-field finite-presentation and tame-data descent is supplied here
---

## Statement

Work in ZF. Let $F$ be a global function field with exact finite constant field $k$ of characteristic $p$, let $p\nmid n$ and $|\mu_n(F)|=n$, and let $a,b\in F^\times$. These data admit an isomorphic finite presentation in the constructible universe $\mathcal L$ with the same field elements, roots of unity and exact constant field. Its internal closed places correspond bijectively to the ambient closed places, with the same normalized valuations on $F$, finite residue fields and residue maps on their valuation rings. Consequently the finite tame Artin values $H_{v,n}(a,b)$ from the supplied ZF finite-action construction are identical internally and externally. An internally proved finite-support identity $\prod_vH_{v,n}(a,b)=1$ therefore gives the same finite-support identity in the ambient universe. No equality of the internal and ambient complete fields or of their full separable closures is asserted.

## Facts & Assumptions

**Given:** Exactly the function field and prime-to-$p$ data in the Statement, with no choice axiom.

[F1] A global function field is finitely generated of transcendence degree one over its relatively algebraically closed finite constant field; it is algebraic over a rational subfield $k(t)$. This definition has no choice premise. [[def-global-field]]

[F2] ZF proves each fixed ZFC axiom relativized to the constructible universe. That universe is transitive and contains all ordinals. Bounded arithmetic formulas on common integer codes are absolute. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[prop-constructible-levels-transitivity-ordinals-and-rank]] [[thm-delta-zero-absoluteness-for-transitive-sets]]

[F3] Under AC, a function field with exact perfect constant field has a smooth proper geometrically integral curve model, with a field isomorphism, and that curve has a projective embedding. These AC suppliers are used only inside the constructible universe. [[thm-curves-function-fields-equivalence]] [[cor-projective-embedding-every-smooth-proper-curve]]

[F4] Under AC/DC, a smooth proper integral curve has DVR local rings at closed points. This clause is used internally; the actual countable local rings and their DVR property are then transferred by their finite arithmetic presentations. [[thm-cartier-weil-divisors-curves-agree]]

[F5] In ZF the finite local Artin evaluations on prime-to-$p$ roots are uniquely determined by $r=v(a)$, $s=v(b)$, the finite residue field cardinality $q_v$ and the residue of $(-1)^{rs}a^s/b^r$, raised to $(q_v-1)/n$. They agree with the finite restrictions of any supplied canonical local Artin map. [[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

## Proof

1.1 Choose one transcendental $t$ and a finite generating tuple for $F/k$. Each generator is algebraic over $k(t)$, so their adjoining tower has finite degree: successive polynomial powers span each stage, and multiplying these finitely many spanning lists gives a finite spanning list for $F/k(t)$. Delete dependent members finitely to obtain a basis. Code $k$ by a finite field table, and the basis multiplication and each chosen generator by rational-function coordinates over $k(t)$. This is finite natural-number data; the rational-function field and the whole finite-basis field then have countable element codes shared by $\mathcal L$ and the ambient universe. Field operations and inversion, the condition that an element is algebraic over the finite $k$, and $z^n=1$ are arithmetic on those same codes. Thus they have the same truth values by [F2]. In particular the exact constant field, $a,b$, and the complete finite list $\mu_n(F)$ are unchanged. These are finitely many initial selections, not a choice function on infinitely many fields. [F1, F2, given, construct, algebra]

1.2 Inside $\mathcal L$, use [F3] to obtain a smooth proper geometrically integral curve $C/k$ for this coded field and a projective embedding. Choose its finite homogeneous equations and finitely many rational functions giving the images of the field's finite generators under the model isomorphism. These choices are made internally where AC holds. All these equations, charts, transition fractions and generator images are finite polynomials or rational functions over the same finite $k$, so are also ambient data. They define a projective scheme and the same isomorphism of its function field with the coded $F$ externally. The algebraic assertion here is a finite presentation assertion: each generator relation and each expression for the inverse generators holds in the same fraction rings. No transport of a curve across a different coefficient field is involved. [F2, F3, step 1.1, construct, algebra]

2.1 Each affine coordinate ring $A=k[X_1,\ldots,X_d]/I$ of that projective scheme is the same countable coded ring internally and externally. Every ideal is finitely generated in ZF. For completeness the needed Hilbert-basis argument can be made on codes: a monomial ideal has finitely many minimal exponent vectors in $\mathbb N^d$. Here is the needed sequence argument: an infinite sequence of natural numbers has an infinite nondecreasing subsequence, by taking the least value repeated infinitely often if there is one, and otherwise recursively taking the least later index with larger value (the tails are then unbounded). For a sequence in $\mathbb N^d$, apply this argument to one coordinate and induct on the remaining finite number of coordinates. It yields two distinct indices in increasing order whose vectors are componentwise ordered. If the set of minimal exponent vectors were infinite, enumerating its least unused integer codes would contradict this conclusion. All subsequence recursions use specified least indices, so require no countable choice. For a polynomial ideal choose one polynomial for each of the finitely many minimal leading monomials and divide by them. Polynomial division strictly decreases the fixed well-ordered monomial order; a nonzero remainder in the ideal would have a leading monomial divisible by one of those chosen monomials, a contradiction. This yields finitely many generators. Their finite coefficient lists belong to $\mathcal L$, and membership in the generated ideal is an arithmetic existence assertion for finitely many polynomial multipliers. Thus every ambient ideal belongs to $\mathcal L$, and every internal ideal is the same ideal externally. Primality, maximality, localization and dimension chains are consequently the same. This gives the same affine schemes and the same gluing on their finite chart cover. [F2, step 1.1, step 1.2, construct, algebra]

2.2 Closed points have finite residue fields in both universes. Indeed a maximal ideal in a finitely generated algebra over a finite field has residue field a finite algebraic extension: the usual field-generator argument shows that if a transcendental generator remained, the field could not be finite as an algebra over the polynomial subring (the inverses of irreducible polynomials give the contradiction after clearing the finitely many denominators). The remaining generators are algebraic and finitely many, so give a finite extension. The maximal ideals and their quotients are the same by step 2.1, so these are literally the same finite fields. At a closed point the local ring is the same set of fractions internally and externally. Internally it is a DVR by [F4]. One of its uniformizers is a fraction code, hence belongs to the common local ring. The assertion that every nonzero fraction is its integer power times a unit is arithmetic on these same fraction codes and the integers. Therefore this local ring is a DVR externally with the same valuation, residue field and reduction. The generic function field is the same as well. [F2, F4, step 1.2, step 2.1, construct, algebra]

2.3 The completion used here exists in ZF directly. For a closed-point DVR $R$, form $\widehat R=\varprojlim_m R/\pi^mR$ as the set of compatible finite-ring sequences. The order of a nonzero sequence is the first nonzero coefficient level; multiplication adds these orders and the order-zero elements are units, using the recursively unique inverse at each level. The compatible constant residues show that its residue field is that of $R$; every element is a uniformizer power times a unit. Thus it is a DVR and its fraction field is complete: a Cauchy sequence has an eventually constant value at each finite level, and these uniquely determined values form its limit. Representatives in the dense countable $R$ may be specified by their least codes, so no simultaneous choice is used to compare this with the usual valued-field completion. This construction works internally and externally with the same finite quotients, although their sets of compatible infinite sequences may differ. [F2, step 2.2, construct, algebra]

3.1 These closed points give all ambient closed places of $F$. To see this without invoking the AC curve correspondence externally, take the generic projective coordinates $z_0,\ldots,z_N\in F$ of the model in step 1.2. For a closed-place valuation $v$, choose a nonzero coordinate having least valuation among the finitely many coordinates. All its ratios are then integral in the valuation ring and at least one is a unit. They define a center on the projective scheme, since its homogeneous equations vanish on these ratios. The center is not generic, since the generic local ring is $F$ and containing it would make the valuation trivial. A nongeneric point of this dimension-one integral scheme is closed by step 2.1, and has finite residue field by step 2.2. The center's DVR $R$ from step 2.2 lies in the given valuation ring with its maximal ideal contracted to the maximal ideal of $R$. If $\pi$ is a uniformizer of $R$, then $v(\pi)>0$, and writing every $f\in F^\times$ as $\pi^j u$ for $u\in R^\times$ shows that $v(f)=jv(\pi)$. Thus its valuation ring is exactly $R$ and its normalized valuation is $\operatorname{ord}_R$. Conversely every closed-point DVR has the required finite residue field and defines a closed place. This proves the bijection, including its valuation and residue identifications. Internally the same finite presentation and argument apply. [F2, step 1.2, step 2.1, step 2.2, given, construct, algebra]

3.2 For each such place, the roots $\mu_n(F)$ reduce injectively, and by [F5] the local finite Artin value is the unique one in that same finite root set with residue
$$\left(\overline{(-1)^{v(a)v(b)}a^{v(b)}/b^{v(a)}}\right)^{(|\kappa(v)|-1)/n}.$$
Every ingredient is identical by steps 1.1, 2.2 and 3.1. The completions can have different sets of infinite sequences in the two universes, but this finite value cannot differ. If the internal theorem gives a finite exceptional set, its points are the same points externally, all other factors are1 in both universes, and the product over that finite set is the same multiplication in $\mu_n(F)$. This proves the asserted finite-support transfer. Only finite tame data have been transported, not arbitrary local Artin maps or infinite products. [F5, step 1.1, step 2.2, step 2.3, step 3.1, algebra] ∎
