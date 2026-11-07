---
dependency_level: 2
id: lem-relative-Frobenius-curve-models-stabilize-at-geometric-genus
kind: lemma
title: Relative Frobenius curve models stabilize at the geometric genus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-relative-Frobenius-subfields-of-a-geometric-curve-have-degree-p
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - lem-integral-finite-type-scheme-function-field
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-normalization-glues-integral-finite-type-curves
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-regular-local-rings-are-normal
  - thm-normality-is-local-for-domains
  - cor-finite-morphism-proper
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - lem-normalization-defect-euler-and-lengths
  - def-arithmetic-genus-proper-curve
  - lem-proper-cohomology-field-extension
  - lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
  - thm-purely-inseparable-extension-characterizations
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - lem-curve-closed-subsets-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §3, printed pp. 71–78; explicit normalization construction"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, §4, printed p. 125; genus-sequence interface locally reconstructed"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 2.5.1 proof sketch, printed pp. 47–48"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be perfect of characteristic $p>0$, let $K/k$ be
finitely generated, and let $C/K$ be a regular projective geometrically
integral curve. Write $L=K(C)$ and $L_e=K L^{p^e}$ for $e\ge0$.
There are regular projective geometrically integral curves $C_e/K$ with
$C_0=C$, $K(C_e)=L_e$, and finite surjective purely inseparable maps
$$C_e\longrightarrow C_{e+1}$$
of degree $p$. Their arithmetic genera $g_e$ are nonincreasing and,
for all sufficiently large $e$, $C_e$ is smooth and $g_e=h$, where $h$
is the geometric normalization genus of $C$. If $C(K)$ is infinite, then
every $C_e(K)$ is infinite. No restriction to one transcendence variable
over the perfect constants is imposed.

## Facts & Assumptions

**Given:** AC and the perfect constants, finitely generated field and
regular projective geometrically integral curve of the Statement.

[A1] AC supplies DC for the successive model construction.
[[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The function field of a geometrically integral curve has a domain
as its tensor algebra with an algebraic closure. For the relative
Frobenius fields, $[L_e:L_{e+1}]=p$ and the same tensor-domain property
holds. A finitely generated field of transcendence degree $n$ over perfect
constants has $p$th-power degree $p^n$. Field scalar extension is flat.
[[lem-integral-finite-type-scheme-function-field]]
[[lem-relative-Frobenius-subfields-of-a-geometric-curve-have-degree-p]]
[[lem-function-field-coordinate-derivations-and-constant-kernel]]
[[prop-modules-over-a-field-are-projective-flat-and-injective]]

[F2] Curve normalization glues finite affine integral closures in the
function field and is finite and birational. Its local rings are normal;
height-one normal Noetherian local rings are DVRs, hence normal curves
are regular. Regular local rings are normal, and normality of a domain
is local.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-local-rings-are-normal]]
[[thm-normality-is-local-for-domains]]

[F3] Finite morphisms are proper, and a finite scheme over a projective
scheme over a field is projective.
[[cor-finite-morphism-proper]]
[[lem-finite-over-projective-noetherian-affine-base-is-projective]]

[F4] Normalization defect is nonnegative and equals the difference of
Euler characteristics of the normalization and the original proper curve.
Arithmetic genus is $1-\chi(\mathcal O)$. Proper coherent cohomology
commutes with field extension.
[[lem-normalization-defect-euler-and-lengths]]
[[def-arithmetic-genus-proper-curve]]
[[lem-proper-cohomology-field-extension]]

[F5] After a finite purely inseparable $K'/K$, the geometric
normalization is a smooth projective geometrically integral curve $Y/K'$
of genus $h$, with function field $K'L$. A finite purely inseparable
extension has a common $p$-power exponent sending all its elements into
the base field.
[[lem-geometric-normalization-descends-to-finite-purely-inseparable-extension]]
[[thm-purely-inseparable-extension-characterizations]]

[F6] A rational map from a smooth curve to a proper scheme extends
uniquely. A nonconstant map of proper integral curves is finite and
surjective. Proper closed subsets of integral curves are finite.
[[lem-rational-map-smooth-curve-to-proper-scheme-extends]]
[[thm-nonconstant-morphism-proper-curves-finite-surjective]]
[[lem-curve-closed-subsets-finite]]

## Axiom use

AC is inherited from the normalization, cohomology and field-flatness
suppliers; DC from [A1] permits successive choices of the countable model
sequence. No external stabilization theorem is used.

## Proof

**Proof technique:** direct; normalize successive Frobenius transports
and compare them with Frobenius transports of one smooth geometric
normalization.

1.1 The fields $L_e$ have the geometric tensor-domain property and successive degree $p$ by [F1]. Start with $C_0=C$. For a regular projective model $C_e$ of $L_e$, transport all affine charts and gluing maps through the field isomorphism $K\to K^p$, $a\mapsto a^p$, obtaining $C_e^{[p]}/K^p$. Its function field is $L_e^p$, and it is regular, projective and geometrically integral, since transport by a field isomorphism preserves these properties. Let $X_e=(C_e^{[p]})_K$ through the inclusion $K^p\subseteq K$. It is projective and geometrically integral. Its function field is $K L_e^p=L_{e+1}$. On a chart this follows from the multiplication map $K\otimes_{K^p}L_e^p\to L_e$: the source is a finite-dimensional domain over $L_e^p$, by geometric integrality and the finite $p$-degree of $K$ in [F1], hence a field; its nonzero multiplication homomorphism is injective with image $K L_e^p$. [A1, F1, given, construct, algebra]

1.2 Choose $K'/K$ and its smooth normalization $Y$ from [F5], and choose $e_0$ such that $(K')^{p^{e_0}}\subseteq K$. For $e\ge e_0$, transport $Y$ through the field isomorphism $K'\to(K')^{p^e}$ and then extend its coefficients to $K$. This gives a smooth projective geometrically integral curve $Z_e/K$ of genus $h$, by [F4]. Its function field is $K(K'L)^{p^e}=K(K')^{p^e}L^{p^e}=K L^{p^e}=L_e$. For clarity, the scalar-extended function-field algebra is a field: $K/(K')^{p^e}$ is finite, since $K'$, finitely generated over perfect $k$, has finite $p^e$-degree by [F1]. Its tensor with $(K'L)^{p^e}$ is a domain by geometric integrality of the transported $Y$, hence a finite-dimensional field, and multiplication identifies it with the displayed compositum. The choice of $e_0$ works for every larger $e$ as well. [F1, F4, F5, construct, algebra]

2.1 Normalize $X_e$ by [F2], calling the result $C_{e+1}$. It is regular, projective by [F3], and has function field $L_{e+1}$. It is geometrically integral: each normalized affine coordinate domain embeds into $L_{e+1}$, and its tensor with an algebraic closure injects into the domain $L_{e+1}\otimes_K\overline K$ by [F1]; these integral affine charts share their generic point on nonempty overlaps. The relative Frobenius map $C_e\to X_e$ is finite. On an affine chart $A$ of $C_e$ it is the inclusion $B=K A^p\subseteq A$, identifying the coordinate algebra of the corresponding chart of $X_e$ by the generic calculation in step 1.1. If $A$ has finite algebra generators, their monomials of exponents less than $p$ span $A$ over $B$. These maps glue by $p$th powering the transition functions; the inverse image of a transported affine chart is its original chart, so this proves finiteness. The map factors through the normalization: its integral-closure ring $B^{\rm nu}\subseteq L_{e+1}\subseteq L_e$ lies in normal $A$, because its elements satisfy monic equations over $B\subseteq A$. The same finite $B$-module generators of $A$ generate it over $B^{\rm nu}$. Thus the lifted map $C_e\to C_{e+1}$ is finite, dominant and hence surjective; its function-field degree is $p$ by [F1]. In these charts every $a\in A$ has $a^p\in L_{e+1}$ integral over normal $B^{\rm nu}$, so $a^p\in B^{\rm nu}$. Thus its fibres have one point and purely inseparable residue extensions, as well as the purely inseparable function-field extension. This constructs the sequence recursively. [F1, F2, F3, construct, algebra, step 1.1]

3.1 Transport through a field isomorphism preserves the dimensions of coherent cohomology: it transports the coefficients in its cochain descriptions and their linear maps. Field extension preserves them by [F4]. Hence $p_a(X_e)=p_a(C_e)=g_e$. Apply [F4] to the finite normalization $C_{e+1}\to X_e$. It gives $g_e-g_{e+1}=\delta_K(X_e)\ge0$. This proves the asserted monotonicity using ordinary arithmetic genera, without assuming any of these curves smooth. [F4, algebra, step 1.1, step 2.1]

3.2 The common function field gives a birational rational map $Z_e\dashrightarrow C_e$, by expressing finite affine target generators as fractions in that field. Since $Z_e$ is smooth and $C_e$ proper, [F6] extends it to a nonconstant morphism, finite and surjective by [F6]. It is an isomorphism because $C_e$ is normal: on an affine target chart its finite inverse-image algebra lies in the same fraction field and is integral over the integrally closed target algebra, so the two algebras coincide. These identities glue. Consequently $C_e\cong Z_e$ is smooth with $g_e=h$ for every $e\ge e_0$, proving eventual stabilization at the geometric genus. [F2, F4, F6, algebra, step 2.1, step 1.2]

4.1 Each map $C_e\to C_{e+1}$ sends $K$-points to $K$-points. Its fibre over any rational point is a proper closed subset of the nonconstant source curve, hence finite by [F6]. An infinite point set therefore has infinite image. Starting with $C_0(K)=C(K)$ and composing the finitely many maps to any chosen index proves that every $C_e(K)$ is infinite when $C(K)$ is. This completes all assertions. [F6, given, step 2.1, step 3.2] ∎

## Source qualification

Voloch invokes an external genus-stabilization result in §4. Here both
monotonicity and eventual smoothness are proved from the separate local
finite-pure-inseparable normalization construction and elementary
Frobenius transport. No Artin or Stichtenoth theorem is imported.
