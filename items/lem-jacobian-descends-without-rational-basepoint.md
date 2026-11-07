---
id: lem-jacobian-descends-without-rational-basepoint
kind: lemma
title: The Jacobian and Its Theta Homomorphism Descend without a Rational Basepoint
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-pointed-abel-jacobi-map-of-curve
  - thm-effective-divisor-symmetric-power-projective
  - lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
  - lem-nonempty-smooth-scheme-finite-separable-point
  - thm-galois-closures-exist-and-are-minimal
  - lem-nonaffine-finite-galois-descent-of-morphisms
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-abelian-variety-dual-and-polarization
  - def-polarization-of-an-abelian-variety
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
  - thm-local-ring-smooth-curve-dvr
  - def-effective-cartier-divisor
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
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1 and §6, printed pp. 85–90 and 104–108
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $C/k$ be a smooth, proper, geometrically connected curve of genus $g\ge1$, and let $J_C=\operatorname{Pic}^0_{C/k}$ be its Jacobian. After a finite Galois extension $K/k$ and a point $P\in C(K)$ are chosen, define $\Theta_P$ as the reduced image of $C_K^{(g-1)}$ under $D\mapsto[\mathcal O_C(D-(g-1)P)]$, taking $\Theta_P=\{0\}$ when $g=1$. Put $L'_P=\mathcal O_{J_{C,K}}([-1]^*\Theta_P)$ and let $\lambda_P=\varphi_{L'_P}:J_{C,K}\to\widehat J_{C,K}$ be its Mumford homomorphism. The morphism $\lambda_P$ is independent of $P$ and is invariant under the Galois action; consequently it descends uniquely to a homomorphism $J_C\to\widehat J_C$ over $k$.

## Statement references

[Milne, Jacobian descent and basepoint change, Ch. III §§1 and 6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Picard scheme and Jacobian over the ground field, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** AC and DC, the curve $C/k$, its degree-zero Picard scheme $J_C$, and its dual $\widehat J_C$.

[A1] AC means every family of nonempty sets has a choice function, and DC permits dependent recursive choices. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A nonempty smooth finite-type curve has a closed point with finite separable residue field; a finite separable extension is contained in a finite Galois extension. [[lem-nonempty-smooth-scheme-finite-separable-point]] [[thm-galois-closures-exist-and-are-minimal]]

[F2] For $g\ge2$, the degree-$(g-1)$ Abel image is an irreducible effective Cartier divisor. For $g=1$, $C^{(0)}=\operatorname{Spec}K$ maps to the effective Cartier divisor $\{0\}$ on the smooth curve $J_C$. [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]] [[thm-effective-divisor-symmetric-power-projective]] [[thm-local-ring-smooth-curve-dvr]] [[def-effective-cartier-divisor]]

[F3] If $P,Q\in C(K)$ then $\Theta_Q=t_{(g-1)[P-Q]}(\Theta_P)$; translation of a divisor translates its associated line bundle. For any invertible sheaf $L$ on an abelian variety, $\varphi_L$ is a homomorphism, and every class in $\operatorname{Pic}^0$ is fixed by translation. [[def-pointed-abel-jacobi-map-of-curve]] [[lem-theorem-of-the-square-and-mumford-homomorphism]] [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]

[F4] A finite Galois-equivariant morphism between schemes after scalar extension descends uniquely to the base field. [[lem-nonaffine-finite-galois-descent-of-morphisms]] [[thm-fundamental-theorem-of-finite-galois-theory]]

## Proof

**Proof technique:** choose a finite Galois field over which the curve has a point, compare the theta divisors for different points, and descend the common Mumford homomorphism.

1.1 By [F1], choose a closed point of $C$ with finite separable residue field $L/k$ and then a finite Galois closure $K/k$. The closed point gives a $K$-point $P$ of $C_K$. This supplies the field and basepoint required in the Statement. [A1, F1, given, choose]

2.1 For $g\ge2$, [F2] makes $\Theta_P$ an effective Cartier divisor, and for $g=1$ it is the Cartier point $\{0\}$. If $Q\in C(K)$, then for every effective divisor $D$ of degree $g-1$ the degree-zero classes satisfy $[\mathcal O_C(D-(g-1)Q)]=[\mathcal O_C(D-(g-1)P)]+(g-1)[P-Q].$ Thus $\Theta_Q=t_{(g-1)[P-Q]}(\Theta_P)$; for $g=1$ both are $\{0\}$. Hence the line bundles $L'_Q$ and $L'_P$ differ by translation on $J_C$. [F2, F3, given, step 1.1, algebra]

3.1 For any $x\in J_C(K)$, the Mumford homomorphism of $t_b^*L'_P$ at $x$ is the translate by $b$ of the class $\varphi_{L'_P}(x)$. By [F3] that class lies in $\operatorname{Pic}^0(J_C)$, on which every translation acts trivially. Therefore $\varphi_{L'_Q}=\varphi_{L'_P}$ for every $Q\in C(K)$; in particular changing the chosen point does not change the homomorphism. [F3, step 2.1]

4.1 Each $\sigma\in\operatorname{Gal}(K/k)$ sends $\lambda_P$ to $\lambda_{\sigma(P)}$, because the Abel image, divisor, and Mumford construction commute with field automorphisms. Step 3.1 gives $\lambda_{\sigma(P)}=\lambda_P$, so $\lambda_P$ is Galois-equivariant. The descent statement [F4] gives a unique $k$-homomorphism $J_C\to\widehat J_C$ whose base change is $\lambda_P$. The construction is independent of the initial finite Galois extension, since any two such extensions embed into a common finite Galois extension and the same point-change calculation applies there. [F1, F4, step 3.1, algebra] ∎

## Axiom use

AC is used to obtain the finite separable point through [F1]; DC is inherited from the Picard and Mumford-homomorphism constructions in [F2]–[F3]. The divisor-class comparison uses a single finite extension and no further choice.
