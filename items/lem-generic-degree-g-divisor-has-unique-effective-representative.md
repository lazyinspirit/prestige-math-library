---
id: lem-generic-degree-g-divisor-has-unique-effective-representative
kind: lemma
title: A Generic Degree-g Divisor Class Has a Unique Effective Representative
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-pointed-abel-jacobi-map-of-curve
  - def-degree-divisor-proper-curve
  - thm-full-riemann-roch-divisor
  - def-riemann-roch-space-of-divisor
  - def-algebraic-curve-over-field
  - def-canonical-line-bundle-curve
  - def-genus-euler-characteristic-curve
  - thm-effective-divisor-symmetric-power-projective
  - thm-picard-zero-represented-by-jacobian
  - thm-h0-structure-sheaf-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - cor-upper-semicontinuity-cohomology-dimension
  - def-axiom-of-choice
  - cor-dimension-of-image-plus-generic-fibre
  - lem-finite-presentation-image-constructible
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §5, printed pp. 100–104
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth, proper, geometrically connected curve of genus $g\ge1$ over an algebraically closed field. For a general effective divisor $D$ of degree $g$, one has $h^0(C,\mathcal O_C(D))=1$. Consequently the Abel map $C^{(g)}\to\operatorname{Pic}^g_{C/k}$ is generically one-to-one and birational onto its target; every class in the resulting dense open subset has exactly one effective representative.

## Statement references

[Milne, generic degree-g divisor classes, Ch. III §5](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, degree components of the Picard scheme, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth proper geometrically connected curve $C/\bar k$ of genus $g\ge1$, and its Picard sheaf.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] The Axiom of Choice also gives Dependent Choice: for a serial relation on a nonempty set, choose one successor for each element and iterate the resulting function from the prescribed starting point. [A1]

[F1] The canonical sheaf is $\omega_C=\Omega^1_{C/\bar k}$. Riemann–Roch at $D=0$ and $H^0(C,\mathcal O_C)=\bar k$ give $\dim_{\bar k}H^0(C,\omega_C)=g$. [[def-canonical-line-bundle-curve]] [[thm-full-riemann-roch-divisor]] [[thm-h0-structure-sheaf-proper-curve]]

[F2] A nonzero differential has a finite zero divisor, and the Riemann–Roch formula for any divisor $D$ is $h^0(\mathcal O_C(D))-h^0(\omega_C(-D))=\deg D+1-g$. [[def-canonical-line-bundle-curve]] [[thm-full-riemann-roch-divisor]]

[F3] In the family of effective divisors of degree $g$, $h^0$ is upper semicontinuous, and each effective divisor has $h^0\ge1$. [[cor-upper-semicontinuity-cohomology-dimension]]

[F4] The scheme $C^{(g)}$ is projective of dimension $g$, and $\operatorname{Pic}^g_{C/k}$ is a proper torsor under the dimension-$g$ Jacobian after a geometric basepoint is chosen. [[thm-effective-divisor-symmetric-power-projective]] [[thm-picard-zero-represented-by-jacobian]] [[def-degree-components-of-relative-picard-sheaf-for-curve]]

[F6] For a dominant morphism from an irreducible variety, source dimension is image dimension plus generic-fiber dimension. If the geometric generic fiber is one reduced point, the extension of function fields has degree one. [[cor-dimension-of-image-plus-generic-fibre]]

[F7] The image of a basic open under a finitely presented affine morphism is constructible; applying this on finite affine covers shows that the image of the locus $h^0=1$ under the Abel map is constructible. [[lem-finite-presentation-image-constructible]]

[F5] The fiber of $C^{(g)}\to\operatorname{Pic}^g_{C/k}$ over a line bundle $L$ is the projective space $\mathbb P(H^0(C,L))$: effective divisors with line bundle $L$ are exactly zero divisors of nonzero sections modulo scalar. [[thm-effective-divisor-symmetric-power-projective]] [[def-riemann-roch-space-of-divisor]]

## Proof

**Proof technique:** direct: successively choose points imposing independent conditions on canonical differentials, then use Riemann–Roch and the linear-system fibers.

1.1 The curve $C$ has infinitely many $\bar k$-points: on a nonempty affine open $\operatorname{Spec}B$, choose a transcendental $t\in B$; the finitely many generators of the one-dimensional domain $B$ are algebraic over $\bar k(t)$, so after inverting one nonzero $f\in \bar k[t]$ they are integral over $\bar k[t,1/f]$ and the resulting algebra is finite over it. For every $a\in \bar k$ with $f(a)\ne0$, the fiber modulo $t-a$ is nonzero: otherwise $t-a$ is a unit in the integral algebra, and an integral equation for its inverse makes $t-a$ a unit in $\bar k[t,1/f]$, a contradiction. This fiber is a nonzero finite-dimensional $\bar k$-algebra, and a maximal ideal gives a residue field equal to $\bar k$, since $\bar k$ is algebraically closed. There are infinitely many such $a$, as an algebraically closed field is infinite: a root of $1+\prod_{b\in S}(T-b)$ lies outside any finite subset $S$. Start with $W_0=H^0(C,\omega_C)$, of dimension $g$ by [F1]. Suppose distinct points $P_1,\ldots,P_i$ have been chosen so the subspace $W_i$ of differentials vanishing at all of them has dimension $g-i$, where $i<g$. Choose a nonzero $\eta\in W_i$. Its zero divisor is finite by [F2], so there is a point $P_{i+1}$ outside that divisor and the previously chosen points. Evaluation at $P_{i+1}$ is nonzero on $W_i$, and its kernel $W_{i+1}$ therefore has dimension $g-i-1$. After $g$ choices, $D=P_1+\cdots+P_g$ satisfies $h^0(C,\omega_C(-D))=0$. [A1, F1, F2, given, choose]

2.1 By [F2], Riemann–Roch for this degree-$g$ divisor gives $h^0(C,\mathcal O_C(D))=1$. The universal effective-divisor family on $C\times C^{(g)}$ is flat and proper; upper semicontinuity [F3] makes the locus where $h^0(\mathcal O_C(D'))\le1$ open. Every effective $D'$ has $h^0\ge1$, so this is exactly the locus where $h^0=1$. It is nonempty by step 1.1 and dense because $C^{(g)}$ is geometrically integral. [A2, F1, F2, F3, F4, step 1.1]

3.1 The Abel map $\alpha_g:C^{(g)}\to\operatorname{Pic}^g_{C/k}$ sends $D'$ to $[\mathcal O_C(D')]$. Every degree-$g$ class has an effective representative by Riemann–Roch, since $h^0(L)-h^0(\omega_C\otimes L^{-1})=1$; hence $\alpha_g$ is surjective. Its geometric fiber over $L$ is $\mathbb P(H^0(C,L))$ by [F5]. The image of the dense open from step 2.1 is constructible by [F7] and dense, so it contains a dense open subset of the target: a dense constructible set in an irreducible noetherian space is a finite union of locally closed sets, one of which is dense and contains an open subset. Over every geometric point in that image the fiber is one reduced point. The source and target are irreducible of dimension $g$ by [F4], and $\alpha_g$ is proper because its source is projective and its target separated. By [F6] the geometric generic fiber has dimension zero and degree one, so $\alpha_g$ induces an isomorphism of function fields and is birational. Thus every class in a dense open subset has exactly one effective representative. [F2, F4, F5, F6, F7, step 2.1, construct] ∎

## Axiom use

The Axiom of Choice supplies Dependent Choice by [A2] and is used to select the finite sequence of points in step 1.1 and through the Riemann–Roch and cohomology suppliers [F1]–[F3].
