---
id: thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves
kind: theorem
title: Siegel finiteness for integral points on hyperbolic curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-s-integral-points-on-an-affine-curve
  - thm-genus-zero-point-implies-projective-line
  - thm-mordell-faltings-finiteness-for-genus-at-least-two-curves
  - lem-finite-etale-cover-spreads-out-over-s-integers
  - lem-s-integral-points-lift-through-finite-etale-covers
  - lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite
  - lem-number-field-completions-as-local-polynomial-factors
  - lem-pointed-genus-one-curve-has-genus-two-etale-cover
  - lem-double-cover-from-square-root-line-bundle-over-number-field
  - lem-three-punctured-projective-line-has-a-genus-one-etale-cover
  - thm-existence-of-algebraic-closures
  - thm-algebraic-embedding-extension
  - prop-degree-bound-for-composita
justified_by: []
proof_strategy: direct
axiom_use: "AC is the stated hypothesis and supplies DC/Countable Choice where the geometric and local suppliers require them. The Mordell–Faltings supplier remains an explicit unresolved conditional interface."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §5, Theorem 5.1 and proof, printed pp. 198–200
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Siegel's theorem for arbitrary finite sets of finite places, proved by covers and Mordell–Faltings
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorem 5.1 and proof, printed pp. 146–149
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Fixed-field cover construction with genus-one input and bounded-degree lifts
    - title: Jan-Hendrik Evertse, Diophantine Equations, Chapter 5 §5.3
      url: https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf
      locator: Effective unit and Thue equations are treated separately from general Siegel finiteness
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of $\mathcal O_K$, and let $X/K$ be a smooth proper geometrically connected curve of genus $g$. Let $\Delta\subset X$ be a nonempty finite reduced closed subscheme, put $Y=X\setminus\Delta$, and write $r=\#\Delta(\overline K)$ for the number of distinct geometric points of $\Delta$, where $\overline K$ is an algebraic closure of $K$. Fix a flat affine finite-type model $\mathcal Y=\operatorname{Spec}A$ over $\mathcal O_{K,S}$ whose generic fibre is identified with $Y$. If $g\ge1$ or $r\ge3$, then the set
$$Y(\mathcal O_{K,S};\mathcal Y)=\operatorname{Hom}_{\mathcal O_{K,S}}\!\left(\operatorname{Spec}\mathcal O_{K,S},\mathcal Y\right)$$
of sections of this fixed model is finite.

## Statement references

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §5, Theorem 5.1 and proof](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Milne, *Abelian Varieties*, Chapter IV §5, Theorem 5.1 and proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Evertse, *Diophantine Equations*, Chapter 5 §5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

[[def-s-integral-points-on-an-affine-curve]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a finite set $S$ of finite primes; a smooth proper geometrically connected curve $X/K$ of genus $g$; a nonempty finite reduced boundary $\Delta$ with $r=\#\Delta(\overline K)$; and a fixed flat affine finite-type model $\mathcal Y$ of $Y=X\setminus\Delta$ over $\mathcal O_{K,S}$.

[A1] AC implies Dependent Choice and Countable Choice, which are used by the cited Jacobian, local-field, and Mordell–Faltings suppliers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The set in the Statement is the set of sections of the fixed model. Base change to the generic point injects it into $Y(K)\subseteq X(K)$. Because $\mathcal Y=\operatorname{Spec}A$ is affine and $K\hookrightarrow K'$ is injective for every field extension $K'/K$, the scalar-extension map $Y(K)\to Y(K')$ is also injective: equality of the extended maps $A\to K'$ forces equality of their values in $K$. [[def-s-integral-points-on-an-affine-curve]]

[F6] A number field is a finite extension of $\mathbb Q$; for a finite set $S$ of nonzero prime ideals of $\mathcal O_K$, $\mathcal O_{K,S}$ consists of the elements integral at every finite prime outside $S$. [[def-number-field]] [[def-s-integers-and-s-units-of-a-number-field]]

[F7] A curve is a separated finite-type geometrically integral scheme of dimension one; smoothness and properness are additional properties. The genus of a smooth proper geometrically integral curve is $\dim_K H^1(X,\mathcal O_X)$. [[def-algebraic-curve-over-field]] [[def-genus-euler-characteristic-curve]]

[L1] The actual draft supplier [[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]] states: “Assume the Axiom of Choice. Let $K$ be a number field, and let $C/K$ be a smooth proper geometrically connected curve of genus $g\ge2$. Then the set $C(K)$ of $K$-rational points of $C$ is finite.” Its current carrier records a local proof body for good reduction outside a finite set under AC and DC, with DC supplied by AC. Its proof status remains escalated: the Shafarevich supplier [L2] retains unresolved abelian-variety finiteness, relative-Jacobian, finite-polarization-class, and rational-Torelli inputs; the Parshin construction [L3] retains unresolved Dedekind-base relative-Picard, extended Abel–Jacobi, and generic line-bundle extension inputs. This records the supplier's current proof status, not proof acceptance; its finiteness conclusion remains a conditional interface.

[F2] A finite étale cover of the generic fibre extends to a finite étale cover of the chosen affine model after enlarging $S$ by finitely many primes. [[lem-finite-etale-cover-spreads-out-over-s-integers]]

[L2] The actual genus-one cover helper [[lem-pointed-genus-one-curve-has-genus-two-etale-cover]] constructs a fixed degree-eight genus-two cover after a finite extension. Its square-root cover step is now supplied by the explicit field-level lemma [[lem-double-cover-from-square-root-line-bundle-over-number-field]], proved on this A page. Its field-geometric argument uses the independently accepted field Picard provider and the unchanged pointed Abel–Jacobi Definition, with AC supplying DC.

[F3] The projective line minus three distinct points has a fixed degree-three finite étale cover whose smooth proper completion has genus one. [[lem-three-punctured-projective-line-has-a-genus-one-etale-cover]]

[L3] For a fixed finite étale cover of degree $n$ over an $\mathcal O_{K,S}$-model, each section lifts to a point over an extension of degree at most $n$ unramified outside $S$; as the section varies, only finitely many extension classes occur. The current Batch 138 helper [[lem-s-integral-points-lift-through-finite-etale-covers]] supplies the degree, integral lift and completion/unramified argument locally; its finite-class clause uses the exact arithmetic input [L4].

[L4] For fixed $K$, finite $S$, and degree bound $n$, there are only finitely many $K$-isomorphism classes of degree at most $n$ unramified outside $S$. The current Batch 138 helper [[lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite]] is GLn-owned and now has a short reduction to the written complete120 global discriminant theorem, bypassing separate local classification/compactness. Its exact arithmetic interface has separate independent review and root acceptance; this packet uses that acceptance without a duplicate arithmetic review.

[F4] A genus-zero smooth proper curve with a rational point is isomorphic to the projective line. [[thm-genus-zero-point-implies-projective-line]]

[F5] A finite extension of number fields has only finitely many primes above each finite prime of the base field. [[lem-number-field-completions-as-local-polynomial-factors]]

[F8] Under AC, algebraic closures exist and embeddings extend across algebraic extensions, so each finite field representative embeds over its base in a fixed algebraic closure. A compositum of two finite subextensions is finite, hence so is a compositum of finitely many. ([[thm-existence-of-algebraic-closures]], [[thm-algebraic-embedding-extension]], [[prop-degree-bound-for-composita]])

## Proof

**Proof technique:** reduce the low-genus cases to a fixed genus-two cover, spread that cover over a finite localization, lift integral sections to a finite list of bounded-degree fields, then apply the Mordell–Faltings interface.

1.1 Every section in the Statement gives a point of $Y(K)\subseteq X(K)$ by restriction to the generic point. If $g\ge2$, [L1] says that $X(K)$ is finite, so its subset $Y(\mathcal O_{K,S};\mathcal Y)$ is finite, conditional on [L1] being proof-closed. [A1, F1, F7, L1, given]

1.2 Suppose $g=1$. By [L2], after a finite extension $K_0/K$ fixed from $(X,\Delta)$ there is a smooth proper genus-two curve $C_0/K_0$ and a finite cover $C_0\to X_{K_0}$ of degree $8$ that is étale over $Y_{K_0}$. This choice depends only on the curve and its boundary, not on a section. [F7, L2, given]

1.3 Suppose $g=0$ and $r\ge3$. Choose three distinct geometric points of $\Delta$ and a finite extension $K_1/K$ over which they are rational. One is a rational point on $X_{K_1}$, so [F4] identifies $X_{K_1}$ with $\mathbb P^1_{K_1}$. To send the ordered triple to $0,1,\infty$, represent the first and third points by linearly independent vectors $v_0,v_\infty$ in $K_1^2$ and write a representative of the second as $av_0+bv_\infty$; distinctness gives $a,b\ne0$. For a vector $s v_0+t v_\infty$, use target coordinates $[a t:b s]$. This invertible anti-diagonal map sends the ordered triple to $[0:1],[1:1],[1:0]$, respectively. Apply [F3] to obtain a degree-three cover $C_1\to X_{K_1}$ whose smooth proper source has genus one and which is étale away from the chosen triple. Let $\Delta_1$ be the reduced inverse image of the full boundary $\Delta_{K_1}$; it is finite and nonempty because the cover is finite surjective. Apply [L2] to $(C_1,\Delta_1)$. After a further finite extension $K_0/K_1$, this gives a smooth proper genus-two curve $C_0/K_0$ and a composite cover $C_0\to X_{K_0}$ of degree $24$, étale over $Y_{K_0}$. All choices depend only on $(X,\Delta)$. [F3, F4, F7, L2, given, choose, construct]

2.1 In either low-genus case, we have a fixed finite extension $K_0/K$ and a fixed finite map $C_0\to X_{K_0}$ of degree $n$ ($n=8$ or $24$) that is finite étale over $Y_{K_0}$, with $C_0$ smooth proper of genus two. By [F5], the primes of $K_0$ above the finite set $S$ form a finite set. Enlarge this set by the finitely many primes inverted to spread out the cover in [F2], and call the result $S_0$. Base change of any original section along $\mathcal O_{K,S}\to\mathcal O_{K_0,S_0}$ remains a section of the base-changed model. By [F2], the fixed cover extends to a finite étale degree-$n$ cover of that model. [F2, F5, F6, step 1.2, step 1.3, given]

3.1 Apply [L3] to each base-changed section. It lifts to a point of $C_0$ over a field extension $E/K_0$ with $[E:K_0]\le n$, unramified outside $S_0$. By [L4], only finitely many $K_0$-isomorphism classes of such fields occur as the original section varies. [L3, L4, step 2.1, given]

4.1 Choose one representative $E$ of each of the finitely many $K_0$-field classes in step 3.1, embed these finitely many fields into a fixed algebraic closure of $K_0$, and let $L/K_0$ be their finite compositum. A lifted point over any isomorphic field transports to a point over its chosen representative, since the curve and cover are defined over $K_0$; its image is still the base change of the same original section. Base changing those representative points to $L$ therefore puts every original section image in the image of $C_0(L)$ under the fixed cover. Conditional on [L1], the genus-two curve $C_0/L$ has finitely many $L$-points, so that image in $X(L)$ is finite. The injection from [F1], now used with the common extension $L/K$, makes the original section set finite. There is no asserted map from arbitrary $E$-valued points to $X(K_0)$. This handles both low-genus cases; step 1.1 handles $g\ge2$. The full conclusion remains conditional on the actual Mordell–Faltings interface; the bounded-extension interface has separate independent review and root acceptance. [A1, F1, F8, L1, L2, L3, L4, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, given, choose, construct] ∎

## Proof status

Escalated. The complete cover, spreading, lifting, and bounded-field arguments are drafted. The conclusion depends on the actual Batch 133 Mordell–Faltings carrier [L1], whose Shafarevich and Parshin inputs remain unresolved as recorded above. That carrier now records a local good-reduction proof body under AC and DC; this status correction does not complete Mordell–Faltings or Siegel finiteness.
