---
dependency_level: 1
id: lem-infinite-points-force-a-rational-purely-inseparable-cover-to-be-smooth
kind: lemma
title: Infinite points force a rational purely inseparable cover to be smooth
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-normalized-polynomial-pth-values-have-bounded-function-parameters
  - lem-canonical-bounded-function-parameters-give-a-constant-curve-dominator
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - lem-smooth-proper-dominator-forces-regular-curve-smooth
  - lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
  - lem-smooth-pointed-function-field-curve-spreads-to-good-model
  - lem-normal-affine-variety-has-normal-projective-compactification
  - lem-projective-line-curve-and-divisor-basics
  - thm-genus-zero-point-implies-projective-line
  - cor-birational-smooth-proper-curves-isomorphic
  - lem-integral-finite-type-scheme-function-field
  - thm-existence-of-algebraic-closures
  - thm-algebraic-elements-form-a-subfield
  - thm-transitivity-of-algebraicity
  - cor-transcendence-degree-tower-additivity
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-tower-law-for-finite-field-extensions
  - thm-evaluation-kernel-and-minimal-polynomial
  - def-derivation-algebra
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - thm-extension-generated-by-separable-elements-is-separable
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - lem-polynomial-factorisation-into-irreducibles
  - thm-polynomial-quotient-is-a-field-iff-irreducible
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - lem-ag-flat-local-regularity-ascent-descent
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - lem-curve-closed-subsets-finite
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-proper-cohomology-field-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorem 1 and Remark 1, printed pp. 122–123; perfect-constant bounded-parameter reconstruction"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "Hans Grauert, Mordells Vermutung, §3(2–4), printed pp. 141–142; parameter-curve domination"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any perfect field of characteristic $p>0$, let
$K/k$ be finitely generated of positive transcendence degree, and let
$C/K$ be a regular projective geometrically integral curve. Suppose
$$K(C)=K(x,y),\qquad y^p=r(x)\in K(x),\qquad [K(C):K(x)]=p,$$
where $x$ is transcendental over $K$. If $C(K)$ is infinite, then $C$ is
smooth of arithmetic genus zero and $C\cong\mathbf P^1_K$. The constants
need not be finite or algebraically closed, and no restriction is placed
on the positive transcendence degree of $K/k$.

## Facts & Assumptions

**Given:** AC and the fields, regular projective curve, function-field
presentation and infinite point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A geometrically integral curve's function field remains a domain
after tensoring with an algebraic closure. Coordinate derivations over
perfect constants have common kernel the $p$th-power field. Minimal
polynomials generate evaluation kernels and finite field degrees satisfy
the tower formula. Derivations obey the chain rule.
[[lem-integral-finite-type-scheme-function-field]]
[[lem-function-field-coordinate-derivations-and-constant-kernel]]
[[thm-evaluation-kernel-and-minimal-polynomial]]
[[thm-tower-law-for-finite-field-extensions]] [[def-derivation-algebra]]

[F2] For a normalized monic polynomial of degree prime to $p$, with
vanishing next coefficient and a nonzero coefficient derivative,
$p$th-power values have the fixed function-space bounds of
[[lem-normalized-polynomial-pth-values-have-bounded-function-parameters]].
Over algebraically closed constants, infinitely many curve points with
these canonical scaled-coordinate bounds give a smooth projective
geometrically integral constant-curve dominator.
[[lem-canonical-bounded-function-parameters-give-a-constant-curve-dominator]]

[F3] A pointed smooth proper curve gives a smooth affine base with its
prescribed function field over perfect constants. Such a base is normal,
since smooth schemes are regular and regular local rings normal. A normal
affine variety has a normal projective compactification.
[[lem-smooth-pointed-function-field-curve-spreads-to-good-model]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]]
[[lem-normal-affine-variety-has-normal-projective-compactification]]

[F4] Fields have algebraic closures under AC, algebraic elements form
a field, and algebraicity is transitive. Transcendence degrees add in
towers; finitely many algebraic elements generate a finite extension.
Algebraic extensions of perfect constants are separable, and algebraic
extensions generated by separable elements are separable.
[[thm-existence-of-algebraic-closures]]
[[thm-algebraic-elements-form-a-subfield]] [[thm-transitivity-of-algebraicity]]
[[cor-transcendence-degree-tower-additivity]]
[[thm-finitely-generated-algebraic-extensions-are-finite]]
[[cor-algebraic-extensions-of-perfect-fields-are-separable]]
[[thm-extension-generated-by-separable-elements-is-separable]]

[F5] A rational map from a smooth curve to a proper scheme extends
uniquely. A nonconstant smooth proper dominator forces a regular proper
geometrically integral target curve smooth. A finite-type algebra's
smoothness descends under field extension. Homogeneous equations describe
projective schemes, and proper cohomology commutes with field extension.
[[lem-rational-map-smooth-curve-to-proper-scheme-extends]]
[[lem-smooth-proper-dominator-forces-regular-curve-smooth]]
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[lem-proper-cohomology-field-extension]]
Noether normalization and integral dimension preservation show that
finite-type domain dimensions are unchanged by field extension.
[[cor-noether-normalisation-module-finiteness]]
[[cor-dimension-preserved-by-integral-extensions]]

[F6] Finite separable extensions are simple, with minimal polynomial
coprime to its derivative. Flat local regularity ascends from regular
base and closed fibre.
[[thm-primitive-element-theorem-for-finite-separable-extensions]]
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]
[[lem-ag-flat-local-regularity-ascent-descent]]
Polynomial factorization and the irreducible-polynomial field quotient
criterion identify the localized separable-polynomial fibres as fields.
[[lem-polynomial-factorisation-into-irreducibles]]
[[thm-polynomial-quotient-is-a-field-iff-irreducible]]

[F7] Proper closed subsets of integral curves are finite. Projective
line is a smooth proper geometrically integral genus-zero curve.
Birational smooth proper curves are isomorphic, and a smooth proper
geometrically integral genus-zero curve with a rational point is projective
line. Geometric normalization has the same genus as the original curve
exactly when that curve is smooth.
[[lem-curve-closed-subsets-finite]]
[[lem-projective-line-curve-and-divisor-basics]]
[[cor-birational-smooth-proper-curves-isomorphic]]
[[thm-genus-zero-point-implies-projective-line]]
[[lem-geometric-normalization-descends-to-finite-purely-inseparable-extension]]

## Axiom use

AC is inherited from the normalization, parameterization and field
suppliers. All polynomial transformations and descents use finite lists
of coefficients. Infinite constant extensions are used only to construct
a dominator; target regularity is used after descent to a finite separable
extension.

## Proof

**Proof technique:** direct; normalize the polynomial, replace the
finite-constant counting step by actual bounded parameters, and descend
a smooth dominator to a separable extension.

1.1 Choose an algebraic closure $\Omega/K$, let $\overline k$ be its subfield algebraic over $k$, and put $E=K\overline k$. By [F4], $\overline k$ is an algebraic closure of $k$, and $E/\overline k$ is finitely generated of the same positive transcendence degree. We do not assume $C_E$ regular. Its function field is still a degree-$p$ extension of $E(x)$ with the displayed equation. Indeed [F1] makes the scalar-extended function algebra a domain, and localizing it gives $E(x)[y]/(y^p-r(x))$ with its unchanged power basis. Also $r'(x)\ne0$: otherwise after extension to perfect $\Omega$ the derivation-kernel assertion [F1] would give $r(x)\in\Omega(x)^p$, making this quotient nonreduced, contrary to its being a domain. All but finitely many original points give distinct $x$-values with $r(x)$ a $p$th power in $E$. Poles are finite by [F7], and each prescribed $x$-value gives only one $y$-value in a field; equality of the function field with $E(x,y)$ identifies a nonempty curve open with an open of this affine equation by clearing finitely many inverse coordinate fractions. [F1, F4, F7, given, construct, algebra]

2.1 Multiply $r$ by the $p$th power of its denominator and rescale $y$ accordingly to make it a polynomial; this preserves its function field and infinitely many point values outside finitely many exceptions. If its degree $n$ is divisible by $p$, choose one value $a_0\in E$ with $r(a_0)=b_0^p$. Replace $x$ by $a_0+T^{-1}$ and $y$ by $T^{n/p}(y-b_0)$. The new polynomial is $T^n(r(a_0+T^{-1})-r(a_0))$, of degree less than $n$. Its derivative is $-T^{n-2}r'(a_0+T^{-1})\ne0$, so its degree is still positive. This finite decrease reaches a degree $n$ prime to $p$. If the leading coefficient is $c\ne0$, choose an integer $m\ge0$ with $mn+1\equiv0\pmod p$ and substitute $x=c^mT$. The leading coefficient becomes $c^{mn+1}$, a $p$th power; divide by it and rescale $y$ to make the polynomial monic. Finally translate $T$ by minus its next coefficient divided by $n$ to kill that coefficient. Each change preserves infinitely many rational point values and the same curve function field. Henceforth write this normalized polynomial as $r(T)=T^n+r_2T^{n-2}+\cdots+r_n$. [F1, F7, given, construct, algebra, step 1.1]

3.1 If every coefficient of $r$ belongs to $E^p$, write $r(T)=\sum_i d_i^pT^i$ with $d_i\in E$. Put $T=s^p$ and $y=\sum_i d_is^i$. The second function is not in $E(s^p)$, since its derivative is nonzero by $r'\ne0$. The extension $E(s)/E(s^p)$ has degree $p$: its restricted powers $1,s,\ldots,s^{p-1}$ span by grouping exponents and clearing denominators and are independent by distinct exponent classes. Thus the tower formula [F1] gives $E(s^p,y)=E(s)$. The minimal-polynomial assertion of [F1] identifies $E(C)$ with this rational field. Expressing affine coordinates of $C_E$ as fractions in $s$ gives a nonconstant rational map $\mathbf P^1_E\dashrightarrow C_E$, which extends by [F5]. This is a constant smooth projective dominator over $\overline k$. Otherwise [F1] supplies a $\overline k$-coordinate derivation $\delta$ of $E$ with $r^\delta\ne0$. [F1, F5, F7, construct, algebra, step 2.1]

4.1 In the latter case construct a normal projective $\overline k$-model $B$ of $E$: use projective line and its rational point in [F7] with the base construction of [F3], then take its normal projective compactification. Apply the bounded-polynomial assertion of [F2] to $r,\delta,B$, obtaining spaces $U,V$. Discard the finitely many values with $r'(a)=0$. Choose a nonempty affine-plane open $T$ with coordinates $(a,y)$ isomorphic to an open of $C_E$, as in step 1.1; its complement discards only finitely many curve points. Each of our infinitely many remaining points has $a=u/c$ with $u,c\in U$, and for every such representation $c^n y\in V$. In particular its canonical representation satisfies the hypothesis of the parameter assertion of [F2]. This produces a smooth projective geometrically integral curve $Q_0/\overline k$ and a nonconstant $E$-map $(Q_0)_E\to C_E$. Together with step 3.1, such a constant smooth dominator exists in both cases. [F2, F3, F5, F7, given, construct, step 1.1, step 2.1, step 3.1]

5.1 Descend this dominator to finite constant coefficients. Its projective source has finitely many homogeneous equations over $\overline k$. On an affine source chart the rational map to the given projective $C$ is specified by finitely many fractions in those source coordinates, with coefficients in $E=K\overline k$. Gather the finitely many constant coefficients in these equations and fractions into a finite extension $k'/k$ inside $\overline k$, using [F4]. They define a projective curve $Q'/k'$ with $(Q')_{\overline k}=Q_0$ and a nonconstant rational map $Q'_{E'}\dashrightarrow C_{E'}$, where $E'=Kk'$. The source is smooth and geometrically integral by [F5] and its algebraic-closure fibre; the rational map's identities hold already over $E'$ because they hold after field extension to $E$. Its nonconstancy is detected by that extension. The map therefore extends by [F5] to a nonconstant morphism of proper curves over $E'$. [F4, F5, construct, algebra, step 4.1]

6.1 The extension $E'/K$ is finite separable by [F4], since $k$ is perfect. The curve $C_{E'}$ is regular. Explicitly write $E'=K(\alpha)$ with separable minimal polynomial $P$ by [F6]. On a regular affine chart $A$ of $C$, $A\otimes_KE'$ is finite free over $A$. Its local closed fibres are localizations of $\kappa(\mathfrak p)[T]/(P)$; the Bezout identity for $P,P'$ persists, so each such localization is a field. The flat local criterion [F6] ascends regularity at every point. Apply the smooth-dominator assertion of [F5] to the morphism of step 5.1: it makes $C_{E'}$ smooth. Field descent in [F5] then makes $C$ smooth over $K$. This argument has used regularity only over a finite separable extension. [F4, F5, F6, given, algebra, step 5.1]

7.1 The geometric normalization has genus zero. Over $\Omega$ the normalized polynomial of step 2.1 has all its coefficients $p$th powers, and the field calculation in step 3.1 gives $\Omega(C)\cong\Omega(s)$. Its smooth proper normalization is therefore projective line by the birational-curve assertion of [F7]. Since $C$ is smooth by step 6.1, its arithmetic genus equals that geometric genus by [F7], so is zero. The nonempty set $C(K)$ supplies a rational point, and the genus-zero assertion of [F7] gives $C\cong\mathbf P^1_K$. [F1, F7, given, step 2.1, step 3.1, step 6.1] ∎

## Source qualification

Voloch's Theorem 1 is stated for one variable over finite constants. Its
polynomial transformations are reconstructed here, while its finite
cardinality step is replaced by the separate proved pole-bound and
canonical-parameter lemmas. Neither its broader conclusion nor any
Mordell–Weil theorem is imported.
