---
dependency_level: 4
id: lem-function-field-geometric-divisor-picard-cohomology
kind: lemma
title: Geometric divisor and Picard cohomology over a finite field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- thm-absolute-galois-group-of-finite-field-is-procyclic
- lem-procyclic-permutation-cohomology-and-degree-augmentation
- thm-cartier-weil-divisors-curves-agree
- cor-degree-descends-picard-curve
- thm-global-functions-proper-integral-variety
- thm-picard-zero-represented-by-jacobian
- def-picard-fppf-sheaf-of-smooth-proper-curve
- def-degree-components-of-relative-picard-sheaf-for-curve
- lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
- thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes
- thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
- def-principal-weil-divisor-and-class-group
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- def-degree-divisor-proper-curve
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed throughout; it covers the finite-dimensional and compactness
  choices. DC and supplied resolutions are used only where cohomology is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition, Appendix A.7;
      locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Printed pp.131–132, full actual A.7 proof read. Finite-field Jacobian,
      augmentation and local comparison details are proved in the local bodies, not
      imported from its omitted end-zero or identification sentence.
verification: {}
---

## Statement

Assume AC and DC. Let $k=\mathbb F_q$, let $C/k$ be smooth proper geometrically integral, put $\bar C=C_{\bar k}$, $\bar K=\bar k(\bar C)$, and $\Gamma=G_k$ with arithmetic Frobenius $\phi$. Write $\operatorname{Prin}=\operatorname{im}(\operatorname{div}:\bar K^\times\to\operatorname{Div}(\bar C))$ and $\operatorname{Pic}=\operatorname{Pic}(\bar C)$. All modules have their discrete natural $\Gamma$-actions. Then
$$H^1(\Gamma,\operatorname{Pic})=0,\qquad
H^2(\Gamma,\operatorname{Pic})\xrightarrow[\deg]{\sim}H^2(\Gamma,\mathbb Z)
 \xrightarrow{\sim}\mathbb Q/\mathbb Z,\qquad
H^3(\Gamma,\operatorname{Prin})=0.$$
The divisor map gives an isomorphism $H^2(\Gamma,\bar K^\times)\cong H^2(\Gamma,\operatorname{Prin})$, and there is an exact sequence
$$0\longrightarrow H^2(\Gamma,\operatorname{Prin})\longrightarrow
 \bigoplus_{v\in C^{(1)}}\mathbb Q/\mathbb Z
 \xrightarrow{\ \sum_v\ }\mathbb Q/\mathbb Z\longrightarrow0.$$
The $v$ coordinate is the cyclic permutation coordinate of the geometric points above $v$ in the preceding lemma. No $k$-rational point is assumed.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[[lem-procyclic-permutation-cohomology-and-degree-augmentation]]

[[thm-cartier-weil-divisors-curves-agree]]

[[cor-degree-descends-picard-curve]]

[[thm-global-functions-proper-integral-variety]]

[[thm-picard-zero-represented-by-jacobian]]

[[def-picard-fppf-sheaf-of-smooth-proper-curve]]

[[def-degree-components-of-relative-picard-sheaf-for-curve]]

[[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]]

[[thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes]]

[[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[[def-principal-weil-divisor-and-class-group]]

## Facts & Assumptions

**Given:** AC, DC, and the objects and cohomology conventions in the Statement.

[F1] Under AC, $G_k=\widehat{\mathbb Z}$ with arithmetic Frobenius generator. [[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[F2] Algebraic Cartier/Weil divisors and line-bundle Picard classes agree on a smooth proper geometrically integral curve, and degree descends to its Picard group. [[thm-cartier-weil-divisors-curves-agree]] [[cor-degree-descends-picard-curve]] [[def-degree-divisor-proper-curve]]

[F3] Global functions on a proper geometrically integral curve are the base field. [[thm-global-functions-proper-integral-variety]]

[F4] The degree-zero relative Picard fppf sheaf is represented by the smooth proper geometrically connected Jacobian; degree components use the geometric line-bundle degree. [[thm-picard-zero-represented-by-jacobian]] [[def-picard-fppf-sheaf-of-smooth-proper-curve]] [[def-degree-components-of-relative-picard-sheaf-for-curve]]

[F5] A nonempty finite-type scheme over an algebraically closed field has a rational point. [[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]]

[F6] Lang's actual Galois-cohomology theorem gives $H^1(G_k,J(\bar k))=0$ for the smooth connected finite-type Jacobian. [[thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes]]

[F7] Discrete torsion modules over $G_k$ have zero cohomology in every degree at least two. [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[F8] A finite Frobenius orbit of size $d$ contributes the permutation module $P_d$, with $H^1=H^3=0$, $H^2=\mathbb Q/\mathbb Z$, and its degree augmentation induces the identity. Direct sums have the direct-sum coordinates. [[lem-procyclic-permutation-cohomology-and-degree-augmentation]]

[F9] Principal divisors have finite support and form the image of the rational-function divisor homomorphism. [[def-principal-weil-divisor-and-class-group]]

[F10] A residue extension of finite fields of degree $d$ is Galois with cyclic arithmetic-Frobenius group of order $d$. [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[A1] AC and DC are assumed, covering all geometric and cohomological interfaces above. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 By [F2], the algebraic divisor/line-bundle correspondence gives the exact sequence
$$0\to\operatorname{Prin}\to\operatorname{Div}(\bar C)\to\operatorname{Pic}\to0.$$
The kernel of $\bar K^\times\to\operatorname{Prin}$ is $\bar k^\times$: a function with zero divisor is a unit in every closed-point DVR, hence regular with regular inverse on $\bar C$, and [F3] makes it a nonzero constant. Thus $1\to\bar k^\times\to\bar K^\times\to\operatorname{Prin}\to0$ is exact. These maps commute with Frobenius by their local-equation definitions. Every geometric point and every rational function is defined over some finite constant extension, so the divisor and function modules, their image and quotient, are discrete continuous modules. [A1, F2, F3, F9, given, algebra]

1.2 We identify the degree-zero kernel with $J(\bar k)$, rather than confuse a divisor-class definition with an analytic Picard group. The Picard group of the field $\bar k$ is zero, since every one-dimensional vector space is free; thus a base-pullback line bundle becomes trivial on $\operatorname{Spec}\bar k$. At this algebraically closed field, fppf sheafification does not add new line-bundle classes or identify unequal ones: a local representative, or a local equality, can be pulled back along a $\bar k$-point of a nonempty finite-presentation affine open of its fppf cover, which exists by [F5]. Therefore [F4]'s degree-zero sheaf points are precisely the degree-zero line-bundle classes on $\bar C$. This identification is natural under automorphisms of $\bar k$, hence $\Gamma$-equivariant. A geometric point of $\bar C$ exists by [F5], and its divisor has degree one. Consequently
$$0\to J(\bar k)\to\operatorname{Pic}\xrightarrow{\deg}\mathbb Z\to0$$
is exact as discrete $\Gamma$-modules; no equivariant splitting or rational point over $k$ is claimed. [F2, F4, F5, step 1.1, algebra]

2.1 The group $J(\bar k)$ is torsion. A point is defined over some finite extension $k'/k$ because a finite-type affine chart and its coordinates use only finitely many elements of $\bar k$. The group $J(k')$ is finite: a finite affine cover of the finite-type scheme has finitely many $k'$-points on each chart. Thus each point has finite order. Its higher cohomology vanishes by [F7], and its $H^1$ vanishes by [F6]. Also $\bar k^\times$ is torsion, being the union of finite multiplicative groups, so [F7] kills its $H^2,H^3$. [A1, F4, F6, F7, step 1.2, algebra]

2.2 Short exact sequences of these modules give actual long exact continuous-cohomology sequences. Indeed a continuous cochain on a compact power of $\Gamma$ has finite image, whose values can be lifted to a common coefficient module, keeping zero at normalized tuples. The clopen fibres make the lift continuous. Thus the cochain sequences are termwise exact and the usual cocycle-lift boundaries give the long exact sequences. Applying this to step 1.2, using step 2.1 and $H^1(\Gamma,\mathbb Z)=0$, gives $H^1(\Gamma,\operatorname{Pic})=0$ and the degree isomorphism on $H^2$. The trivial-module instance of [F8] identifies its target with $\mathbb Q/\mathbb Z$. Applying the same argument to the constants sequence in step 1.1 gives $H^2(\Gamma,\bar K^\times)\cong H^2(\Gamma,\operatorname{Prin})$. [F1, F7, F8, step 1.1, step 1.2, step 2.1, construct, algebra]

3.1 The geometric points above a closed point $v$ form a single Frobenius orbit of size $d_v=[k(v):k]$: $k(v)$ is a finite field and its $d_v$ embeddings into $\bar k$ are cyclically permuted by arithmetic Frobenius. Hence
$$\operatorname{Div}(\bar C)=\bigoplus_{v\in C^{(1)}}P_{d_v}.$$
By [F8], its $H^1,H^3$ vanish and its $H^2$ is the indicated direct sum of $\mathbb Q/\mathbb Z$ coordinates. The divisor degree map over $\bar k$ sends every geometric point to one, so by [F8] its degree-two map is the sum with no additional factors. Under step 2.2's degree isomorphism for Pic, this is precisely the map $H^2(\operatorname{Div})\to H^2(\operatorname{Pic})$. [F1, F8, F10, step 1.1, step 2.2, algebra]

3.2 At least one such orbit exists: a geometric point from [F5] is defined over a finite extension of $k$ and has a closed-point image on $C$. On any one orbit the augmentation map on $H^2$ is already onto by [F8]. Thus $H^2(\operatorname{Div})\to H^2(\operatorname{Pic})$ is onto, regardless of its orbit degree. In the long exact sequence of step 1.1, $H^1(\operatorname{Pic})=0$ makes $H^2(\operatorname{Prin})\to H^2(\operatorname{Div})$ injective. Its image is the kernel of the degree-two map, and surjectivity followed by $H^3(\operatorname{Div})=0$ also forces $H^3(\operatorname{Prin})=0$. This proves the exact sequence and all assertions without a rational-place or gcd assumption. [F5, F8, step 2.2, step 3.1, algebra] ∎
