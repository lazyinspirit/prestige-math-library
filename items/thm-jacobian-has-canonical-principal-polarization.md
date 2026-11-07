---
id: thm-jacobian-has-canonical-principal-polarization
kind: theorem
title: The Jacobian Has a Canonical Principal Polarization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-pointed-abel-jacobi-map-of-curve
  - lem-generic-degree-g-divisor-has-unique-effective-representative
  - lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
  - lem-generic-theta-translate-pullback-is-degree-g-divisor
  - lem-effective-reduced-divisor-finite-stabilizer-implies-ample
  - lem-jacobian-descends-without-rational-basepoint
  - lem-abel-jacobi-poincare-bundle-is-theta-correspondence
  - lem-abel-jacobi-dual-is-inverse-to-theta-polarization
  - thm-abelian-variety-dual-and-polarization
  - def-polarization-of-an-abelian-variety
  - thm-local-ring-smooth-curve-dvr
  - def-effective-cartier-divisor
  - thm-full-riemann-roch-divisor
  - thm-effective-divisor-symmetric-power-projective
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §6, Theorem 6.6 and Lemmas 6.7–6.9, printed pp. 103–108
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Brian Conrad, Abelian Varieties, Stanford Math 249C course notes, §3.4, Proposition 3.4.8 and proof, printed pp. 32–35
      url: https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $C/k$ be a smooth, proper, geometrically connected curve of genus $g$, let $J_C=\operatorname{Pic}^0_{C/k}$, and let $\widehat J_C$ be its dual abelian variety. If $g=0$, then $J_C=\operatorname{Spec}k$ and its unique homomorphism to its dual is the principal polarization. If $g\ge1$, choose $P\in C(\bar k)$ and let $\Theta_P$ be the reduced image of $C_{\bar k}^{(g-1)}$ under $D\mapsto[\mathcal O_C(D-(g-1)P)]$, with $\Theta_P=\{0\}$ when $g=1$. Then $\mathcal O_{J_{C,\bar k}}([-1]^*\Theta_P)$ is ample, and its Mumford homomorphism is the base change of a unique principal polarization $\lambda_C:J_C\to\widehat J_C$ over $k$. The homomorphism $\lambda_C$ is independent of the chosen geometric point $P$.

## Statement references

[Milne, canonical principal polarization of the Jacobian, Ch. III §6, Theorem 6.6 and Lemmas 6.7–6.9](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Conrad, ampleness from a finite translation stabilizer, §3.4, Proposition 3.4.8](https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf)

## Facts & Assumptions

**Given:** AC and DC, the curve $C/k$, its Jacobian $J_C$, and its dual $\widehat J_C$.

[A1] AC and DC are the choice principles required by the Jacobian, dual-abelian-variety and ampleness constructions. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The Jacobian and its dual are smooth proper geometrically connected group schemes of dimension $g$; if $g=0$, their identities are rational points and both are the trivial group scheme. [[thm-picard-zero-represented-by-jacobian]] [[thm-abelian-variety-dual-and-polarization]]

[F2] For $g\ge2$, $\Theta_P$ is an irreducible effective Cartier divisor of dimension $g-1$; for $g=1$, $\Theta_P=\{0\}$ is an irreducible effective Cartier divisor because the local ring of the smooth curve $J_C$ at $0$ is a discrete valuation ring. [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]] [[thm-effective-divisor-symmetric-power-projective]] [[def-pointed-abel-jacobi-map-of-curve]] [[thm-local-ring-smooth-curve-dvr]] [[def-effective-cartier-divisor]]

[F3] The reflected theta line bundle has an isomorphism as its Mumford map. If a translation preserves its divisor, its translating point lies in the kernel of that homomorphism. [[lem-abel-jacobi-dual-is-inverse-to-theta-polarization]] [[def-polarization-of-an-abelian-variety]]

[F4] A nonempty irreducible effective Cartier divisor on an abelian variety with finite translation stabilizer is ample. [[lem-effective-reduced-divisor-finite-stabilizer-implies-ample]]

[F5] The theta Mumford homomorphism is independent of the point over a finite Galois extension and descends uniquely to $k$. A homomorphism induced over $\bar k$ by an ample invertible sheaf is a polarization; an isomorphism has degree one. [[lem-jacobian-descends-without-rational-basepoint]] [[def-polarization-of-an-abelian-variety]]

[F6] A principal polarization is a polarization of degree one, and the Mumford homomorphism of the trivial line bundle on $\operatorname{Spec}k$ is the identity. [[def-polarization-of-an-abelian-variety]]

## Proof

**Proof technique:** prove the theta Mumford map is an isomorphism, use its kernel to show the theta divisor has finite stabilizer, apply the finite-stabilizer ampleness criterion, and descend the point-independent homomorphism.

1.1 If $g=0$, [F1] gives smooth proper geometrically connected zero-dimensional group schemes $J_C$ and $\widehat J_C$. Their identities are $k$-rational, so both are $\operatorname{Spec}k$. The unique homomorphism is induced by the trivial line bundle $\mathcal O_{\operatorname{Spec}k}$; [F6] makes it the principal polarization. Assume henceforth $g\ge1$. [F1, F6, given, algebra]

2.1 Choose $P\in C(\bar k)$. By [F2], $\Theta'_P=[-1]^*\Theta_P$ is a nonempty irreducible effective Cartier divisor; write $L'=\mathcal O_{J_{C,\bar k}}(\Theta'_P)$. By [F3], its Mumford homomorphism $\varphi_{L'}$ is an isomorphism. If $a\in J_C(\bar k)$ satisfies $t_a(\Theta'_P)=\Theta'_P$, then $t_a^*L'\cong L'$, so $\varphi_{L'}(a)=0$. The isomorphism in [F3] forces $a=0$, and therefore the translation stabilizer of $\Theta'_P$ is the singleton identity. [A1, F2, F3, given, step 1.1, construct]

3.1 The divisor $\Theta'_P$ satisfies the hypotheses of [F4], since its translation stabilizer is finite by step 2.1. Thus $L'$ is ample. Its Mumford homomorphism is already an isomorphism by [F3], so it is a principal polarization over $\bar k$ by the definition in [F5]. [A1, F3, F4, F5, step 2.1]

4.1 By [F5], the point-independent homomorphism $\lambda_C:J_C\to\widehat J_C$ descends over $k$ and its base change is $\varphi_{L'}$. Step 3.1 gives an ample line bundle inducing that base change, so $\lambda_C$ is a polarization over $k$. The same step makes it an isomorphism; hence its degree is one and it is a principal polarization. Independence of $P$ is part of the descent comparison in [F5]. [F5, step 3.1] ∎

## Axiom use

AC and DC enter through the Picard and dual-abelian-variety constructions [F1], the Mumford homomorphism and theta correspondence [F3], and the finite-stabilizer ampleness criterion [F4]. The finite Galois descent in [F5] uses AC to obtain a separable point; the divisor and stabilizer calculations add no further choice.
