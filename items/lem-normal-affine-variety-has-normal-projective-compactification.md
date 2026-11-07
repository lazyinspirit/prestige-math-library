---
dependency_level: 0
id: lem-normal-affine-variety-has-normal-projective-compactification
kind: lemma
title: A normal affine variety has a normal projective compactification
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-integral-closure-finite-finite-type-domain-over-field
  - lem-finite-normalization-compatible-with-principal-opens
  - thm-integral-closure-is-integrally-closed
  - thm-normality-is-local-for-domains
  - thm-gluing-affine-schemes
  - lem-finite-morphism-affine
  - thm-finite-morphism-integral-closed
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - thm-affine-scheme-ring-anti-equivalence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms, Section 29.54 (Normalization); explicit normal projective compactification specialization"
      url: https://stacks.math.columbia.edu/tag/035E
    - title: "J. S. Milne, Algebraic Geometry, Chapter 8 §b, normalization by affine integral closures"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any field and let $R$ be a normal affine integral
scheme of finite type over $k$. There is a normal integral projective
$k$-scheme $\overline R$ containing $R$ as a dense open subscheme and
having function field $k(R)$. No smoothness of $\overline R$ is asserted;
the dimension and characteristic are unrestricted.

## Facts & Assumptions

**Given:** AC and a normal affine finite-type integral $k$-scheme $R$.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A closed subscheme of projective space is specified by its
homogeneous ideal, compatibly with dehomogenization on the standard affine
charts. [[thm-closed-subschemes-projective-space-homogeneous-ideals]]

[F2] The integral closure $B$ of a finite-type domain $A$ over a field
in its fraction field is finite over $A$ and is an integrally closed
domain. For $0\ne f\in A$, the integral closure of $A_f$ is $B_f$.
Integral closedness of a domain is equivalent to integral closedness of
all its localizations.
[[thm-integral-closure-finite-finite-type-domain-over-field]]
[[lem-finite-normalization-compatible-with-principal-opens]]
[[thm-integral-closure-is-integrally-closed]]
[[thm-normality-is-local-for-domains]]

[F3] Affine schemes are contravariantly equivalent to rings. Affine
schemes with compatible open overlap isomorphisms glue to a scheme.
Finiteness can be checked on an affine open cover of the target; finite
morphisms are closed.
[[thm-affine-scheme-ring-anti-equivalence]]
[[thm-gluing-affine-schemes]] [[lem-finite-morphism-affine]]
[[thm-finite-morphism-integral-closed]]

[F4] A finite scheme over a projective scheme over a Noetherian affine
base is projective over that base.
[[lem-finite-over-projective-noetherian-affine-base-is-projective]]

## Axiom use

AC is inherited through the normality, finite-morphism and projectivity
suppliers. No perfectness or algebraic closure of $k$ is used.

## Proof

**Proof technique:** direct; take a projective closure, normalize its
affine charts, and keep the normal original open unchanged.

1.1 Write $R=\operatorname{Spec}A$ and choose algebra generators to embed it as a closed subscheme of $\mathbf A^n_k$. Form its reduced closure $Z$ in $\mathbf P^n_k$. Concretely its homogeneous ideal consists of the homogeneous forms whose dehomogenizations vanish in $A$ on the standard chart $x_0\ne0$; equivalently it is the kernel of the graded map $k[x_0,\ldots,x_n]\to A[t]$ sending $x_0\mapsto t$ and $x_i\mapsto a_it$. Its quotient is a domain, so [F1] gives an integral projective scheme $Z$. Its $x_0$ chart is exactly $R$, by dehomogenization, and this open is dense. Thus $Z$ and all its nonempty affine opens have the common function field $K=\operatorname{Frac}A$. [F1, given, algebra, construct]

2.1 Cover $Z$ by finitely many nonempty affine opens $U_i=\operatorname{Spec}A_i$. Form their integral closures $B_i\subseteq K$. They are finite over $A_i$, integrally closed, and have fraction field $K$ by [F2]; hence their spectra are normal and integral. Their identifications over overlaps are canonical. Explicitly, around a point of $U_i\cap U_j$ choose principal opens $D(f)\subseteq U_i$ and $D(g)\subseteq U_j$ contained in the overlap. On $D(f)$ write the regular function $g=c/f^a$, and on $D(g)$ write $f=d/g^b$. Their intersection is simultaneously $D(fc)$ in $U_i$ and $D(gd)$ in $U_j$. Both coordinate rings are the same subring of $K$, namely the regular functions on this common open. By [F2] their integral closures are the same subring of $K$, so $(B_i)_{fc}=(B_j)_{gd}$ under that identification. These common principal opens cover the overlap. Their identity maps agree on refinements and satisfy the cocycle condition, since all are identities inside $K$. [F2, F3, given, algebra, step 1.1]

3.1 By [F3] glue $\operatorname{Spec}B_i$ along those overlaps to a scheme $\overline R$, and glue the inclusions $A_i\hookrightarrow B_i$ to $\nu:\overline R\to Z$. The inverse image of $U_i$ is precisely $\operatorname{Spec}B_i$ by construction, so $\nu$ is finite by [F3]. The affine charts are normal, and their generic points are identified through the common field $K$, giving one point dense in every chart. Thus $\overline R$ is integral and normal and has function field $K$. The map is dominant since the inclusion of each $A_i$ in $K$ sends the generic point to the generic point. It is also surjective, since its closed image by [F3] contains that generic point. Finally [F4] makes $\overline R$ projective over $k$. [F2, F3, F4, algebra, step 1.1, step 2.1]

4.1 The restriction of $\nu$ over $R$ is an isomorphism. This follows on every affine open of $R$ by the same localization construction of step 2.1: its coordinate domain is normal, hence already equals its integral closure in $K$ by [F2]. The corresponding affine map is the identity, and these identities glue. Identify this inverse image with $R$. It is open and contains the generic point of the integral scheme $\overline R$, so it is dense. This proves the stated compactification, including when $\dim R=0$ (then $R=\operatorname{Spec}K$ for a finite extension $K/k$ and the construction is already projective). At no step is a separability or resolution assertion required. [F2, F3, algebra, step 2.1, step 3.1] ∎
