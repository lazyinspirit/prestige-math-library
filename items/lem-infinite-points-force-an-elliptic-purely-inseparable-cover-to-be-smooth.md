---
dependency_level: 3
id: lem-infinite-points-force-an-elliptic-purely-inseparable-cover-to-be-smooth
kind: lemma
title: "Infinite points force an elliptic purely inseparable cover to be smooth"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-elliptic-derivative-jet-group-has-bounded-affine-coordinates
  - lem-bounded-affine-values-in-a-finite-family-give-a-constant-curve-dominator
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - lem-smooth-proper-dominator-forces-regular-curve-smooth
  - lem-smooth-pointed-function-field-curve-spreads-to-good-model
  - lem-normal-affine-variety-has-normal-projective-compactification
  - thm-normalization-glues-integral-finite-type-curves
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - cor-quasi-finite-locus-open-finite-type-algebra
  - thm-proper-morphism-closed-image
  - thm-proper-quasi-finite-is-finite
  - lem-curve-closed-subsets-finite
  - thm-purely-inseparable-extension-characterizations
  - lem-ag-flat-local-regularity-ascent-descent
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - lem-quasi-finite-morphism-fibre-characterization
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorem 2, genus-one cover context; Mordell–Weil replaced by the explicit local jet-group and finite-family proofs"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III, derivative-jet method; perfect-constant all-dimensional proof supplied locally"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any perfect field of characteristic $p>0$ and let
$K/k$ be finitely generated of positive transcendence degree. Let $C/K$
be a regular projective geometrically integral curve. Suppose there is a
finite purely inseparable morphism $f:C\to E$ of degree $p$ to a smooth
proper geometrically integral genus-one curve with a $K$-point. If $C(K)$
is infinite, then $C$ is smooth over $K$.

Neither the constants nor the transcendence degree are restricted to the
finite-field one-variable case. No finite generation theorem for elliptic
rational points or Frobenius quotient is assumed.

## Facts & Assumptions

**Given:** AC and the fields, curves, degree-$p$ morphism and infinite
point set in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Over algebraically closed characteristic-$p$ constants the
simultaneous derivative jet group $J\to E$ has a proper smooth affine
quotient $\psi:J\to Y$ with geometrically integral curve fibres and
bounded affine coordinate values on derivative jets. Its kernel is covered
finite faithfully flatly by $\theta:E\to\ker\psi$, with
$\pi\theta=[p]_E$ and $j_\Delta([p]Q)=\theta(Q)$ for any extensions of the
base derivations.
[[lem-elliptic-derivative-jet-group-has-bounded-affine-coordinates]]

[F2] Coordinate derivations over perfect constants form a basis of all
constant-linear derivations; their common kernel in any finitely generated
field of characteristic $p$ is its $p$th-power subfield.
[[lem-function-field-coordinate-derivations-and-constant-kernel]]

[F3] A finite family over an open affine parameter scheme, with rational
point parameters in fixed finite-dimensional constant-field spaces and
infinite image in a regular proper geometrically integral curve, supplies
a nonconstant map from a smooth projective constant curve. A normal
projective field model is obtained by spreading the pointed projective
line over a smooth affine base and compactifying that normal affine base.
[[lem-bounded-affine-values-in-a-finite-family-give-a-constant-curve-dominator]]
[[lem-smooth-pointed-function-field-curve-spreads-to-good-model]]
[[lem-normal-affine-variety-has-normal-projective-compactification]]

[F4] A nonconstant map from a smooth proper geometrically integral curve
to a regular proper geometrically integral curve forces the target smooth.
A rational map from a smooth curve to a proper scheme extends. Curve
normalization is finite and glues; normal curve local rings are DVRs,
and a finite scheme over a projective field scheme is projective.
[[lem-smooth-proper-dominator-forces-regular-curve-smooth]]
[[lem-rational-map-smooth-curve-to-proper-scheme-extends]]
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[lem-finite-over-projective-noetherian-affine-base-is-projective]]

[F5] The quasi-finite locus of a finite-type morphism is open; proper maps
have closed image and proper quasi-finite maps are finite. Proper closed
subsets of integral curves are finite. A degree-$p$ purely inseparable
field extension is generated by an element with its $p$th power in the
base field. Finite-type quasi-finiteness is equivalent to isolated fibre
points with finite residue extensions; closed points of finite-type field
schemes have finite residue extensions.
[[cor-quasi-finite-locus-open-finite-type-algebra]]
[[thm-proper-morphism-closed-image]] [[thm-proper-quasi-finite-is-finite]]
[[lem-curve-closed-subsets-finite]]
[[thm-purely-inseparable-extension-characterizations]]
[[lem-quasi-finite-morphism-fibre-characterization]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F6] Regularity ascends through a flat local map with regular closed
fibre, and geometric regularity descends under field extension. Standard
smooth presentations give geometric regularity. A separable polynomial
has a Bezout identity with its derivative, retained after residue-field
extension. Algebraic extensions of perfect constants are separable.
[[lem-ag-flat-local-regularity-ascent-descent]]
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]
[[cor-algebraic-extensions-of-perfect-fields-are-separable]]

## Axiom use

AC is inherited from the jet, finite-family, normalization and regularity
suppliers. All constants descended at the last step form one finite list.
No group of rational points is asserted finitely generated.

## Proof

**Proof technique:** direct; a proper jet fibre either yields an elliptic
dominator or reduces to a finite bounded family, and finite separable
constant descent recovers regularity over the original field.

1.1 First assume $k$ is algebraically closed. Use [F1] and its coordinate derivations $\delta_l$. By [F5] write $K(C)=K(E)(y)$ with $y^p=r\in K(E)$. On a nonempty affine open $U_E\subset E$ where $r$ is regular, $y$ is regular on $f^{-1}(U_E)$ because it is integral over $r$ and normal $C$ has integrally closed local rings. Infinitely many $Q\in C(K)$ remain there; their images $P=f(Q)$ are infinitely many distinct points since $f$ is finite. At each, $\delta_l(r(P))=\delta_l(y(Q)^p)=0$. Let $Z_0\subset J_{U_E}$ be the zero scheme of the regular universal jet derivatives of $r$, and let $Z$ be its reduced closed closure in $J$. Each actual $j(P)$ lies in $Z(K)$, and over $J_{U_E}$ the universal derivatives vanish on $Z$. The map $Z\to Y$ is proper because $\psi$ is proper. [A1, F1, F5, given, construct, algebra]

2.1 If $Z_b$ is positive-dimensional for a candidate value $b=\psi(j(P_0))$, its support is all of the smooth geometrically integral curve $J_b$. The defining ideal restricts to zero on reduced $J_b$, so $J_b$ factors through $Z$. Translation by $j(P_0)$ identifies it with $\ker\psi$. Thus $Q\mapsto\theta(Q)+j(P_0)$ from $E$ has image in $Z$ and projects to $Q\mapsto[p]Q+P_0$. The latter is nonconstant finite by [F1], hence its generic point lies in $U_E$. The universal derivatives of $r$ therefore vanish after this pullback. [F1, F5, construct, algebra, step 1.1]

3.1 Put $M=K(E)$ for this source and $R=r([p]Q+P_0)$. Extend each $\delta_l$ to a $k$-derivation $\Delta_l$ of $M$: choose a separating coordinate $t$ of the smooth curve, set $\Delta_l(t)=0$, and differentiate the separable minimal polynomial in a finite separable presentation over $K(t)$. By [F1], the jet of $[p]Q+P_0$ is $\theta(Q)+j(P_0)$ for these extensions. Step 2.1 gives $\Delta_lR=0$. Every $K$-derivation of $M$ also kills $R$, since the differential of $[p]$ on a commutative group is multiplication by $p$, hence zero. Every $k$-derivation of $M$ is a linear combination of the $\Delta_l$ plus a $K$-derivation: subtract $\sum_l D(t_l)\Delta_l$ for the separating base coordinates $t_l$, whose restriction agrees with $D$ on $K$ by the explicit separable-polynomial extension formula in [F2]. Therefore all $k$-derivations kill $R$, so $R=u^p$ in $M$ by [F2]. Pulling back $K(E)$ by $[p]Q+P_0$ and sending $y$ to $u$ gives a field embedding $K(C)\hookrightarrow M$, because the defining equation of $y$ is irreducible of degree $p$. It induces a nonconstant rational map $E\dashrightarrow C$, extending by [F4]. That smooth dominator makes $C$ smooth by [F4]. [F1, F2, F4, construct, algebra, step 2.1]

4.1 If no candidate has a positive-dimensional $Z$-fibre, let $T\subset Y$ be the image of the non-quasi-finite locus of $Z\to Y$. It is closed by [F5] and properness. No candidate value is in $T$: if its closed fibre subset $Z_b\subset J_b$ were proper, it would have finitely many closed points by [F5], isolated in that fibre and with finite residue extensions by [F5]; the pointwise criterion would make every point quasi-finite. Thus a non-quasi-finite point forces the positive-dimensional whole-fibre case already excluded. On $Y\setminus T$, the map $Z\to Y$ is proper quasi-finite and hence finite by [F5]. The scheme $W=Z\times_E C$ is then finite over this open as well. Each candidate lifts to $(j(f(Q)),Q)\in W(K)$, and these points map infinitely to $C$. Their affine $Y$-coordinates lie in fixed finite-dimensional $k$-spaces by [F1]. Choose a normal projective field model as in [F3], and apply its finite-family result to $W\to Y\setminus T$ and $W\to C$. A smooth proper constant curve dominates $C$, so [F4] makes $C$ smooth. Together with step 3.1 this proves the algebraically closed constant case. [F1, F3, F4, F5, construct, algebra, step 1.1, step 3.1]

5.1 For arbitrary perfect $k$, put $F=K\bar k$ inside an algebraic closure of $K$. The curves $C_F,E_F$ are geometrically integral and the finite cover retains degree $p$: its finite function-field tensor algebra injects into the geometric tensor domain, hence is a field of its original dimension. Normalize $C_F$ to $N/F$ by [F4]. This is finite, regular and projective. It is geometrically integral because its affine rings inject into the unchanged function field and, after any field extension, into its geometric tensor domain. The normalization is an isomorphism off the finite support of its normalization quotient. Infinitely many original rational points thus lift to $N(F)$. The composite $N\to E_F$ is finite purely inseparable of degree $p$, and $E_F$ has its inherited point. Apply the algebraically closed-constant case to $N/F$ over $\bar k$. It proves that $N$ is smooth, giving an actual smooth proper geometrically integral dominator $N\to C_F$. No regularity of $C_F$ was assumed. [F4, F5, construct, algebra, step 4.1]

6.1 Descend a projective embedding of $N$ and the morphism to a finite constant extension $k'/k$ in $\bar k$. This uses finitely many homogeneous equations, affine coordinate expressions and gluing identities; they all occur at one stage of the directed union $F=\bigcup Kk'$. The source $N'/K'=Kk'$ has base change $N$, so it is smooth and geometrically integral by [F6] and faithful field extension, and remains projective. Its map to $C_{K'}$ is nonconstant because it is so after extension. The field extension $K'/K$ is finite separable since $k$ is perfect. Thus $C_{K'}$ is regular: locally scalar extension is finite free with a separable polynomial presentation, and its residue fibre is a localization of a product of fields by the retained derivative Bezout identity; [F6] ascends regularity. Apply [F4] to $N'\to C_{K'}$, making $C_{K'}$ smooth, then descend geometric regularity to $C$ by [F6]. This proves smoothness over the original $K$. [F4, F6, construct, algebra, step 5.1] ∎
