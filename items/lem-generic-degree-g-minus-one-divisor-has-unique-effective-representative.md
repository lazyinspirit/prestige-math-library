---
id: lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
kind: lemma
title: A Generic Degree-(g−1) Divisor Has a Unique Effective Representative
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-algebraic-curve-over-field
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - thm-effective-divisor-symmetric-power-projective
  - def-canonical-line-bundle-curve
  - def-genus-euler-characteristic-curve
  - thm-full-riemann-roch-divisor
  - cor-upper-semicontinuity-cohomology-dimension
  - thm-h0-structure-sheaf-proper-curve
  - def-axiom-of-choice
  - thm-nonaffine-regular-local-ring-is-ufd
  - def-abelian-variety-over-a-field
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
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§2–3, printed pp. 91–96
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth, proper, geometrically connected curve of genus $g\ge2$ over an algebraically closed field. A general effective divisor $D$ of degree $g-1$ has $h^0(C,\mathcal O_C(D))=1$. The Abel map from $C^{(g-1)}$ to its reduced image $W_{g-1}$ is birational and is an isomorphism over dense open subsets, and $W_{g-1}$ is an effective Cartier divisor in $\operatorname{Pic}^{g-1}_{C/k}$.

## Statement references

[Milne, canonical map and theta divisor, Ch. III §§2–3](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Picard components of curves, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth proper geometrically connected curve $C/\bar k$ of genus $g\ge2$, and its degree components of the Picard sheaf.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] The Axiom of Choice also gives Dependent Choice: for a serial relation on a nonempty set, choose one successor for each element and iterate the resulting function from the prescribed starting point. [A1]

[F1] The canonical sheaf is $\omega_C=\Omega^1_{C/\bar k}$; a nonzero differential has a finite zero divisor. [[def-canonical-line-bundle-curve]]

[F2] Riemann–Roch for $D=0$, together with $H^0(C,\mathcal O_C)=\bar k$, gives $\dim_{\bar k}H^0(C,\omega_C)=g$. For every divisor $D$ of degree $g-1$, $h^0(\mathcal O_C(D))-h^0(\omega_C(-D))=0$. [[thm-full-riemann-roch-divisor]] [[thm-h0-structure-sheaf-proper-curve]]

[F3] In a proper flat family, $h^0$ is upper semicontinuous; effective divisors have $h^0(\mathcal O_C(D))\ge1$. [[cor-upper-semicontinuity-cohomology-dimension]]

[F4] The scheme $C^{(g-1)}$ is projective, geometrically irreducible, and has dimension $g-1$; the degree-$(g-1)$ Picard component is a translate of the Jacobian and has dimension $g$. For a dominant morphism from an irreducible variety, source dimension is image dimension plus generic-fiber dimension. [[thm-effective-divisor-symmetric-power-projective]] [[thm-picard-zero-represented-by-jacobian]] [[def-degree-components-of-relative-picard-sheaf-for-curve]] [[cor-dimension-of-image-plus-generic-fibre]]

[F5] A codimension-one integral subvariety of the smooth Jacobian is Cartier because its local rings are regular factorial rings. [[thm-nonaffine-regular-local-ring-is-ufd]] [[def-abelian-variety-over-a-field]]

[F6] The image of a basic open under a finitely presented affine morphism is constructible; applying this on finite affine covers shows that the image of $V$ under the finite-type divisor-class map is constructible. [[lem-finite-presentation-image-constructible]]

## Proof

**Proof technique:** direct: choose points imposing independent conditions on canonical differentials, apply Riemann–Roch, and read the generic fiber of the divisor-class map as a linear system.

1.1 The curve $C$ has infinitely many $\bar k$-points: on a nonempty affine open $\operatorname{Spec}B$, choose a transcendental $t\in B$; the finitely many generators of the one-dimensional domain $B$ are algebraic over $\bar k(t)$, so after inverting one nonzero $f\in \bar k[t]$ they are integral over $\bar k[t,1/f]$ and the resulting algebra is finite over it. For every $a\in \bar k$ with $f(a)\ne0$, the fiber modulo $t-a$ is nonzero: otherwise $t-a$ is a unit in the integral algebra, and an integral equation for its inverse makes $t-a$ a unit in $\bar k[t,1/f]$, a contradiction. This fiber is a nonzero finite-dimensional $\bar k$-algebra, and a maximal ideal gives a residue field equal to $\bar k$, since $\bar k$ is algebraically closed. There are infinitely many such $a$, as an algebraically closed field is infinite: a root of $1+\prod_{b\in S}(T-b)$ lies outside any finite subset $S$. Start with $W_0=H^0(C,\omega_C)$, of dimension $g$ by [F2]. Suppose distinct points $P_1,\ldots,P_i$ have been chosen so that the subspace $W_i$ of differentials vanishing at all of them has dimension $g-i$, where $i<g-1$. Choose a nonzero $\eta\in W_i$. Its zero divisor is finite by [F1], so there is a point $P_{i+1}$ outside that divisor and the previously chosen points. Evaluation at $P_{i+1}$ is nonzero on $W_i$, and its kernel $W_{i+1}$ therefore has dimension $g-i-1$. After $g-1$ choices, $D=P_1+\cdots+P_{g-1}$ satisfies $h^0(C,\omega_C(-D))=1$. [A1, F1, F2, given, choose]

2.1 By [F2], Riemann–Roch for this degree-$g-1$ divisor gives $h^0(C,\mathcal O_C(D))=h^0(C,\omega_C(-D))=1$. The family of universal effective divisors on $C\times C^{(g-1)}$ is flat and proper; by [F3], the locus where $h^0(\mathcal O_C(D'))\le1$ is open. Every effective $D'$ has a nonzero section, so $h^0\ge1$; the open locus is therefore exactly the locus where $h^0=1$. It is nonempty by step 1.1 and dense because $C^{(g-1)}$ is geometrically integral by [F4]. [A2, F1, F2, F3, F4, step 1.1]

3.1 The morphism $C^{(g-1)}\to\operatorname{Pic}^{g-1}_{C/\bar k}$ sends $D'$ to $[\mathcal O_C(D')]$. Its geometric fiber over a line bundle $L$ is the complete linear system $\mathbb P(H^0(C,L))$, because a nonzero section of $L$ determines its effective zero divisor and scalar multiples determine the same divisor. Let $V$ be the nonempty open from step 2.1. If a class lies in the image of $V$, its full fiber has $h^0=1$, hence is one reduced point. The image of $V$ is constructible by [F6] and dense in the reduced image $W_{g-1}$ because $V$ is dense and the divisor-class map is proper. A dense constructible subset is a finite union of locally closed subsets; one of those subsets is dense in $W_{g-1}$ and contains a dense open of it. Thus the geometric generic fiber is one reduced point. By [F4], the source has dimension $g-1$, the generic fiber has dimension zero, and $W_{g-1}$ has dimension $g-1$, so it is an irreducible divisor in the $g$-dimensional Picard component. The geometric generic fiber being one reduced point makes the induced function-field extension degree one, so the map to its image is birational; a birational morphism restricts to an isomorphism on dense open subsets. Finally [F5] makes the divisor Cartier on the smooth Picard component, and the fiber description proves uniqueness for a general class. [F3, F4, F5, F6, step 2.1, construct, algebra] ∎

## Axiom use

The Axiom of Choice supplies Dependent Choice by [A2] and is used only to select the finite sequence of points in step 1.1 and through the Riemann–Roch and cohomology suppliers [F2]–[F3].
