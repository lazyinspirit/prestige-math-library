---
dependency_level: 4
id: lem-constant-high-genus-curve-has-finitely-many-nonhorizontal-points
kind: lemma
title: A constant high-genus curve has finitely many nonhorizontal function-field points
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-smooth-pointed-function-field-curve-spreads-to-good-model
  - lem-infinite-curve-points-give-horizontal-jet-splitting
  - lem-negative-tangent-sums-have-no-complete-curves-off-zero
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - cor-canonical-degree-two-g-minus-two
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-existence-of-algebraic-closures
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §§2–4, printed pp. 137–146; constant-family specialization"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §§2–3, printed pp. 63–78"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $E/k$ be a finitely
generated field extension of positive transcendence degree, and let
$D/k$ be a smooth proper geometrically integral curve of genus at least two. Put
$$k_0=\begin{cases}k,&\operatorname{char}k=0,\\E^p,&\operatorname{char}k=p>0.\end{cases}$$
Then $D(E)\setminus D(k_0)$ is finite, where points over subfields are
identified by scalar extension. In particular $D(E)\setminus D(k)$ is
finite in characteristic zero. In positive characteristic no finiteness
of the full set $D(E)$ or of $D(E^p)$ is asserted.

## Facts & Assumptions

**Given:** AC, the fields and the constant smooth proper curve of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A pointed smooth proper curve over a finitely generated extension
of perfect constants has a good model over a smooth affine integral base
with that function field. On a smooth projective genus-at-least-two family
with infinitely many generic points, there is a regular generic splitting
section containing all but finitely many actual derivative jets.
[[lem-smooth-pointed-function-field-curve-spreads-to-good-model]]
[[lem-infinite-curve-points-give-horizontal-jet-splitting]]

[F2] Over an algebraically closed field, a proper integral curve mapping
to $T_D^{\oplus n}$ with nonconstant projection to $D$ has image in its
zero section.
[[lem-negative-tangent-sums-have-no-complete-curves-off-zero]]

[F3] For coordinate derivations of a finitely generated field over
algebraically closed constants, the common kernel is the constant field in
characteristic zero and the $p$th-power field in characteristic $p$.
[[lem-function-field-coordinate-derivations-and-constant-kernel]]

[F4] The canonical degree is $2g-2$, and a line bundle of degree at
least $2g+1$ embeds the curve; thus a genus-at-least-two proper smooth
curve is projective. Under AC every field has an algebraic closure.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[thm-existence-of-algebraic-closures]]

## Axiom use

AC is inherited from the family and negative-tangent suppliers and
supplies an algebraic closure of $E$. No infinite point set is assumed
finite merely because its coordinate vector spaces have finite dimension.

## Proof

**Proof technique:** direct; the only possible proper splitting section
of the constant tangent-vector torsor is the zero section.

1.1 If $D(E)$ is finite, its stated subset is finite. Otherwise choose an $E$-point and apply the good-model construction in [F1] to obtain a smooth affine integral $k$-base $R$ with function field $E$. Replace it by a nonempty affine open on which its tangent bundle is free of rank $n=\operatorname{trdeg}_kE$. Use the constant family $X=D\times_k R$, projective by [F4]. Its tangent sequence has its canonical product splitting, and its splitting torsor is $R\times T_D^{\oplus n}$ with that splitting as zero section. The horizontal-section theorem in [F1] supplies a regular section $\sigma:D_E\to(T_D^{\oplus n})_E$ agreeing with all but finitely many derivative jets in $D(E)$. [F1, F4, given, construct]

2.1 Extend to an algebraic closure $\Omega/E$ from [F4]. The section $\sigma_\Omega$ is a map from the proper smooth curve $D_\Omega$ to $T_{D_\Omega}^{\oplus n}$ whose projection to $D_\Omega$ is the identity, hence nonconstant. By [F2] its image lies in the zero section. Thus $\sigma$ itself is zero: in any affine bundle chart, its coordinate functions become zero after field extension, so were zero already. Consequently all but finitely many $E$-points of $D$ have zero derivative jet. [F2, F4, algebra, step 1.1]

3.1 A point has zero derivative jet exactly when its affine coordinate values are killed by every base coordinate derivation. For a fixed projective embedding of $D$ over $k$, choose a nonzero homogeneous coordinate of the point and use its coordinate ratios on that chart. The derivative jet is zero precisely when the derivatives of these ratios vanish: they are generators of the chart algebra and the product rule then kills every coordinate function along the point. By [F3] their values lie in $k_0$. They satisfy the equations of $D$ over $k\subseteq k_0$, so the point belongs to $D(k_0)$. Conversely such a point's coordinate ratios are killed by every derivation, so its jet is zero. Combining this equivalence with step 2.1 proves the claimed finite difference. [F3, F4, given, algebra, step 1.1, step 2.1] ∎
