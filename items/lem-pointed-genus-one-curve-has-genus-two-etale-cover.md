---
id: lem-pointed-genus-one-curve-has-genus-two-etale-cover
kind: lemma
title: A punctured genus-one curve has a genus-two finite étale cover
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-number-field
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-pointed-abel-jacobi-map-of-curve
  - lem-pointed-genus-one-curve-is-its-jacobian
  - lem-multiplication-by-n-on-abelian-scheme
  - def-invertible-sheaf
  - def-divisor-smooth-proper-curve
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - lem-section-of-smooth-relative-curve-effective-cartier
  - lem-double-cover-from-square-root-line-bundle-over-number-field
  - lem-filtered-colimit-fp-sheaf-stage
  - def-finite-morphism-schemes
  - thm-proper-ideal-contained-in-maximal-ideal
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
justified_by: []
proof_strategy: direct
axiom_use: "AC implies DC for the Jacobian and multiplication inputs. The field-level double-cover construction is supplied by the local lemma on this A page; the separate Batch 133 result has a one-dimensional Dedekind-base hypothesis and is not applied over Spec L."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorem 5.1 and proof
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Printed pp. 146–149; the genus-one degree-eight cover and its two-point branch construction
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §5
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Printed pp. 198–200; the genus-one finite étale covering reduction
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $C/K$ be a smooth proper geometrically connected curve of genus $1$, and let $\Delta\subset C$ be a nonempty finite reduced closed subscheme. Put $U=C\setminus\Delta$. Then there exist a finite extension $L/K$, a point $P\in\Delta(L)$, a smooth proper geometrically connected curve $\widetilde C/L$ of genus $2$, and a finite morphism $\pi:\widetilde C\to C_L$ of degree $8$ whose branch locus is exactly $\{P\}$. In particular, $\pi^{-1}(U_L)\to U_L$ is finite étale of degree $8$.

## Statement references

[Milne, *Abelian Varieties*, Chapter IV §5, Theorem 5.1 and proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §5](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$; a smooth proper geometrically connected genus-one curve $C/K$; and a nonempty finite reduced closed subscheme $\Delta\subset C$.

[A1] AC implies DC, which is assumed by the Jacobian representability and multiplication suppliers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F8] A number field is a finite extension of $\mathbb Q$. A curve over a field is a separated finite-type geometrically integral scheme of dimension one; smoothness and properness are additional properties. For a smooth proper geometrically integral curve, genus is $\dim_k H^1(C,\mathcal O_C)$. [[def-number-field]] [[def-algebraic-curve-over-field]] [[def-genus-euler-characteristic-curve]]

[F1] [[def-jacobian-of-smooth-proper-curve]] denotes the abelian variety representing the degree-zero relative Picard sheaf by $J_C$ when one exists.

[L1] [[thm-picard-zero-represented-by-jacobian]] proves that $\operatorname{Pic}^0_{C/K}$ is represented by an abelian variety of dimension $1$, the Jacobian, under AC and DC. Its unchanged full field-level AC/DC proof has existing independent owner acceptance; [A1] supplies DC.

[F2] [[def-pointed-abel-jacobi-map-of-curve]] defines the pointed Abel–Jacobi morphism $u_P(Q)=[\mathcal O_C(Q-P)]$. Its unchanged Definition is used with the given representing object and the accepted field Picard provider.

[L2] Over a characteristic-zero field, the pointed Abel–Jacobi morphism identifies a smooth proper pointed genus-one curve with its Jacobian. The Batch 138 helper [[lem-pointed-genus-one-curve-is-its-jacobian]] has a complete field-geometric argument using the independently accepted field Picard supplier [L1] and the unchanged pointed Abel–Jacobi Definition.

[F4] For an abelian scheme of relative dimension $g$, multiplication by an integer $n$ invertible on the base is finite étale of degree $n^{2g}$. In particular, for an elliptic curve, multiplication by $2$ is finite étale of degree $4$. [[lem-multiplication-by-n-on-abelian-scheme]]

[F5] Every finitely presented quasi-coherent sheaf and every morphism between such sheaves over a scheme of finite presentation descends to a finite stage of a directed limit of rings; identities also descend after a later stage. [[lem-filtered-colimit-fp-sheaf-stage]]

[F7] [[lem-double-cover-from-square-root-line-bundle-over-number-field]] states that on a smooth proper geometrically connected curve over a number field, two distinct rational points and a square root of their divisor sheaf define a finite flat degree-two cover, smooth and proper with exactly those non-étale fibres, ramification index two, and genus twice the original genus. Its complete field-level proof is on this A page.

[F6] A finite scheme over a field is affine and has a finite-type coordinate algebra. A nonempty such algebra has a maximal ideal under AC, and its residue field is finite over the base field; hence every closed point is defined over a finite extension. A finite set of geometric points is defined over the compositum of their finitely many residue fields. [[def-finite-morphism-schemes]] [[thm-proper-ideal-contained-in-maximal-ideal]] [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F9] An invertible sheaf is locally free of rank one. A Cartier divisor $D$ has associated invertible sheaf $\mathcal O_X(D)$, with $\mathcal O_X(0)=\mathcal O_X$; on a smooth proper curve, divisors are finite integral combinations of closed points. Thus the degree-zero divisor class $[A+B-2\cdot0]$ and the sheaves $\mathcal O_{J_C}(A+B)$ and $\mathcal O_{J_C}(0)$ have the stated meanings. [[def-invertible-sheaf]] [[def-cartier-divisor]] [[def-divisor-smooth-proper-curve]] [[def-invertible-sheaf-of-cartier-divisor]]

[F10] A section of a smooth separated relative-dimension-one morphism is a closed immersion whose image is an effective Cartier divisor, locally cut out by one nonzerodivisor. Therefore the sections $A$, $B$, and $0$ define Cartier divisors, and $A+B$ is an effective Cartier divisor. [[lem-section-of-smooth-relative-curve-effective-cartier]] [[def-effective-cartier-divisor]]

## Proof

1.1 Choose a geometric point $P\in\Delta(\overline K)$ by [F6], and enlarge $K$ to a finite extension over which $P$ is rational. By [L1], the Abel–Jacobi map [F2] identifies $C$ with its Jacobian by [L2] and sends $P$ to the identity $0$. We use this isomorphism to regard $C$ as $J_C$. [A1, F2, F6, L1, L2, given, choose]

2.1 By [F4], $[2]:J_C\to J_C$ is finite étale of degree $4$. Its fibre above $0$ consists of four distinct geometric points. Enlarge the number field once more so that all four points are rational, and choose two distinct ones, $A$ and $B$. [A1, F4, step 1.1, choose]

3.1 By [F9] and [F10], $[A+B-2\cdot0]$ is a degree-zero divisor class and $\mathcal O_{J_C}(A+B)$, $\mathcal O_{J_C}(0)$ are invertible sheaves. Apply [L1] to the genus-one curve $J_C$ to obtain its Jacobian $J_{J_C}$, and apply [L2] to the pointed curve $(J_C,0)$ to identify $J_C$ with $J_{J_C}$. After algebraic closure, [F4] makes multiplication by $2$ on $J_{J_C}$ surjective on geometric points, so choose a degree-zero line bundle $\mathcal N$ whose square has class $[A+B-2\cdot0]$. Then $\mathcal M=\mathcal N\otimes\mathcal O_{J_C}(0)$ satisfies $\mathcal M^{\otimes2}\cong\mathcal O_{J_C}(A+B)$: the two sides have the same divisor class because $2[\mathcal N]=[A+B-2\cdot0]$. To descend actual invertible data, apply [F5] simultaneously to $\mathcal N$, its inverse $\mathcal N^{-1}$, their evaluation and inverse maps, and the displayed square-root isomorphism and its inverse. Tensor products of finite presentations are finitely presented, so the inverse and triangle identities are finite equalities of maps to which the equality clause of [F5] applies. At one common finite extension these identities hold. The evaluation/co-evaluation identities give a finite dual-basis expression locally, so the descended sheaves are finite projective; their mutually inverse tensor product has rank one, forcing both local ranks to be one. Hence the descended sheaf is invertible, and the square relation is an actual isomorphism. Equivalently the same data consist of finitely many chart transition units, their inverses and cocycles. All their coefficients lie in one finite extension because they lie in the algebraic closure. Thus $\mathcal M$ and its square isomorphism descend to a further finite number field without using relative-DVR Picard representability. [A1, F4, F5, F9, F10, L1, L2, step 2.1, given, choose, construct]

4.1 The field $L$ obtained in steps 1.1–3.1 is finite over $K$ and hence is a number field by [F8]. By [L1] and [L2], $J_C/L$ is a smooth proper geometrically connected curve of dimension one. The rational points $A,B$ are distinct, and [F10] makes them effective Cartier sections; [F9] identifies their divisor sheaf with an invertible sheaf. Apply [F7] to $J_C/L$, $A,B$, and the descended square root $\mathcal M$. It gives a smooth proper geometrically connected double-cover curve $\widetilde C$ of genus $2$, with map $q:\widetilde C\to J_C$ branched exactly at $A,B$. [A1, F7, F8, F9, F10, L1, L2, step 1.1, step 2.1, step 3.1, given]

5.1 Compose $q$ with $[2]$ and the inverse Abel–Jacobi isomorphism $J_C\to C$. The resulting map $\pi:\widetilde C\to C$ has degree $2\cdot4=8$. The map $[2]$ is étale everywhere, and [F7] says $q$ is étale away from $A,B$; both branch points map to $0$, whose inverse image in $C$ is $P$. Thus $\pi$ is branched exactly at $P$. Since $P\in\Delta$, its restriction over $U=C\setminus\Delta$ is finite étale of degree $8$. [F4, F7, L2, step 1.1, step 2.1, step 4.1, given, algebra] ∎

## Proof status

The field-geometric construction is complete under the stated AC hypothesis using the independently accepted field Picard provider [L1], the unchanged pointed Abel–Jacobi Definition [F2], and the complete genus-one/Jacobian argument [L2]. The square-root cover itself is proved locally in [[lem-double-cover-from-square-root-line-bundle-over-number-field]]. The separate Batch 133 result applies to a one-dimensional Dedekind base, whereas $\operatorname{Spec}L$ is zero-dimensional; it is not used to justify this field case.
