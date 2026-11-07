---
id: lem-negative-tangent-sums-have-no-complete-curves-off-zero
kind: lemma
title: Negative tangent-bundle sums have no complete curves off the zero section
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-canonical-degree-two-g-minus-two
  - lem-degree-pullback-divisor-finite-morphism-curves
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-normalization-glues-integral-finite-type-curves
  - thm-regular-equals-smooth-over-perfect-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-global-functions-proper-integral-variety
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - lem-composite-finite-proper-morphism-proper
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §2(1–2), printed pp. 137–138; curve-degree reconstruction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(B), printed pp. 66–67"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $C/k$ be a smooth proper
integral curve of genus $g\ge2$, and put $T_C=(\Omega^1_{C/k})^\vee$.
For $n\ge1$ write $E=T_C^{\oplus n}$ and let its total space consist of
the vectors in its fibres. If an integral proper $k$-curve $Z$ admits a
morphism $u:Z\to E$, then either its composite $q:Z\to C$ is constant
and $u$ has one-point image, or $u(Z)$ is contained in the zero section.
Consequently every integral proper closed curve in $E$ is the zero section
as a reduced closed subset.

## Facts & Assumptions

**Given:** AC, the field, curve, vector bundle, proper integral curve and
morphism of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The canonical line bundle $\Omega^1_{C/k}$ has degree $2g-2$; its
dual has degree $2-2g$. Pullback of a line bundle along a nonconstant map of
smooth proper curves multiplies degree by the positive degree of that map.
[[cor-canonical-degree-two-g-minus-two]]
[[lem-degree-pullback-divisor-finite-morphism-curves]]
A nonzero regular section of a line bundle has an effective divisor of zeros
representing that bundle.
[[thm-line-bundle-rational-section-cartier-divisor]]

[F2] Normalization of an integral finite-type curve is finite and
birational. Its local rings at closed points are normal one-dimensional
Noetherian local domains, hence DVRs, so its normalization is regular; over
the perfect field $k$ it is smooth. If the original curve is proper, its
finite normalization is proper.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[lem-composite-finite-proper-morphism-proper]]

[F3] All global functions on an integral proper scheme over the
algebraically closed field $k$ are constant.
[[thm-global-functions-proper-integral-variety]]

[F4] A nonconstant morphism of proper integral curves is finite and
surjective. [[thm-nonconstant-morphism-proper-curves-finite-surjective]]

## Axiom use

AC is inherited through [F1]–[F4], including normalization, properness and
curve-degree suppliers.

## Proof

**Proof technique:** direct; a nonzero coordinate of the vector-valued
section would be a section of a negative-degree line bundle.

1.1 If $q$ is constant, its image is a closed $k$-point of $C$, and $u$ maps into the fibre $\mathbb A^n_k$ there. Its coordinate functions are global functions on $Z$, all constant by [F3]. Hence $u$ has one-point image. [A1, F3, given]

1.2 Otherwise normalize $Z$ to $\widetilde Z$ using [F2]. The resulting curve is smooth and proper. The induced nonconstant map $\widetilde q:\widetilde Z\to C$ is finite surjective by [F4], of some degree $d\ge1$. The composite $\widetilde Z\to E$ is a section of $\widetilde q^*E$, so its $n$ coordinates are global sections of the line bundle $\widetilde q^*T_C$. By [F1] its degree is $d(2-2g)<0$. A nonzero section of a line bundle on a smooth proper curve has an effective divisor of zeros representing the line bundle; its degree is therefore nonnegative. Thus each of the $n$ sections is zero. The image in $E$ is contained in the zero section. Since the normalization is surjective, the same is true of $u(Z)$. [F1, F2, F4, given, algebra]

2.1 Apply the two cases to a positive-dimensional integral proper closed curve in $E$. Its inclusion cannot have one-point image, so it lies in the zero section; a closed integral subset of this integral curve with positive dimension is the whole underlying curve. This establishes the final assertion as a reduced closed-set assertion, without making a claim about nilpotent thickenings. [F3, given, step 1.1, step 1.2] ∎
