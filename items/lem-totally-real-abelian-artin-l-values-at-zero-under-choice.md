---
id: lem-totally-real-abelian-artin-l-values-at-zero-under-choice
kind: lemma
title: "Abelian Artin L-values at zero over totally real fields under Choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-artin-l-series-for-a-linear-character
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-global-artin-reciprocity-and-norm-index
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-weak-approximation-for-global-fields
  - lem-number-field-extension-ramified-at-finitely-many-places
  - lem-imprimitive-ray-class-hecke-finite-euler-correction
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - lem-character-orthogonality-for-finite-abelian-groups
  - thm-group-ring-is-a-unital-algebra-with-basis-g
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapters VI and VIII"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Ray characters, reciprocity and Hecke continuation; the conductor cancellation below is locally proved."
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $H/F$ be a finite abelian extension of number fields with $F$ totally real, let $G=\operatorname{Gal}(H/F)$, and let $\chi:G\to\mathbb C^\times$ be a character. The complete Artin $L$-function $L_{H/F}(s,\chi)$ extends to an entire function when $\chi$ is nontrivial; for trivial $\chi$ it has meromorphic continuation with only a simple pole at $s=1$. In either case it is holomorphic near $s=0$. For finite sets $S,T$ of places, with $T$ nonarchimedean, put $\chi(\operatorname{Frob}_v)=0$ when $\chi$ is nontrivial on inertia at $v$, and otherwise use the arithmetic Frobenius value. Define
$$L_{S,T}(\chi,s)=L_{H/F}(s,\chi)\prod_{v\in S\setminus S_\infty}(1-\chi(\operatorname{Frob}_v)(Nv)^{-s})\prod_{v\in T}(1-\chi(\operatorname{Frob}_v)(Nv)^{1-s}).$$
It has a finite value at $s=0$. The values for all $\chi$ determine a unique element of $\mathbb C[G]$ by finite Fourier inversion.

## Facts & Assumptions

**Given:** AC, Countable Choice and DC, the extension, character and finite place sets.

[F1] Global Artin reciprocity is surjective, kills principal idèles and is the product of local maps. A finite extension has finitely many ramified places, and weak approximation prescribes finitely many local open conditions and real signs. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[lem-number-field-extension-ramified-at-finitely-many-places]] [[thm-weak-approximation-for-global-fields]]

[F2] For a finite abelian local quotient, the local reciprocity image of the unit group is the inertia subgroup. [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[F3] The ray class group is the idèle class quotient by the specified unit-congruence and real-sign subgroup. Every finite-order ray character is induced by a primitive character of a divisor modulus, and the imprimitive Hecke function differs by the stated finite Euler deletion. [[thm-number-field-ray-class-field-artin-isomorphism]] [[def-finite-order-ray-class-hecke-character-and-l-function]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F4] The completed primitive nontrivial Hecke $L$-function is entire; the gamma functions have no zeros and at zero each real gamma factor is either holomorphic nonzero or has a simple pole. The trivial Artin function is $\zeta_F$, which is finite at zero. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F5] For a finite abelian group, its characters form a complete orthogonal family, so character evaluation is an isomorphism from $\mathbb C[G]$ to the space of complex-valued functions on the character group. [[lem-character-orthogonality-for-finite-abelian-groups]] [[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[A1] AC, Countable Choice and DC are the actual public hypotheses of the reciprocity, approximation and Hecke suppliers used here. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 By [F1], at every finite place ramified in $H/F$ choose an exponent whose principal-unit subgroup is killed by the continuous local Artin character, and include all real places in the infinite part of a modulus $\mathfrak m$. At all other finite places the local unit image is trivial because the extension is unramified. The product of Frobenius values on ideals prime to $\mathfrak m$ is trivial on principal ideals generated by elements congruent to one modulo $\mathfrak m$ and positive at its real places: principal reciprocity and the local conditions prove this. Thus it defines a ray character $\psi$. By weak approximation, every idèle class can be represented with its components at $\mathfrak m$ in the prescribed congruence subgroups and its real components positive; the remaining local units have trivial Artin image. Consequently $\psi$ is trivial exactly when $\chi$ is trivial. [A1, F1, F2, F3, given, construct]

2.1 Choose a primitive character $\psi^*$ inducing $\psi$, with divisor modulus $\mathfrak f\mid\mathfrak m$, as in [F3]. Its idèlic character is the original Artin character: on idèles associated to ideals prime to $\mathfrak m$ they agree by construction, and the approximation argument of step 1.1 represents every idèle class by such a product together with elements in the ray subgroup. At a finite $v\mid\mathfrak f$, if $\chi$ were trivial on inertia, [F2] would make the idèlic character trivial on $\mathcal O_v^\times$. Enlarging the $v$-component of the ray subgroup to all units would then make $\psi^*$ factor through the proper divisor modulus obtained by deleting the $v$-power, contradicting primitivity. Conversely, if $v\nmid\mathfrak f$, the ray subgroup already contains all local units, so $\chi$ is trivial on inertia. Thus among primes dividing $\mathfrak m$, the inertia-trivial primes are exactly those not dividing $\mathfrak f$. [A1, F2, F3, step 1.1, algebra]

3.1 Outside $\mathfrak m$, Artin and Hecke Euler factors agree by construction. At $v\mid\mathfrak m$, the complete Artin factor is one if $\chi$ is nontrivial on inertia, and is $(1-\chi(\operatorname{Frob}_v)(Nv)^{-s})^{-1}$ otherwise. By step 2.1 the latter primes are exactly $v\mid\mathfrak m$ with $v\nmid\mathfrak f$; local-global reciprocity identifies their Frobenius value with $\psi^*(v)$. The imprimitive deletion in [F3] cancels every such inverse factor, proving $L_{H/F}(s,\chi)=L(s,\psi^*)$ on $\operatorname{Re}s>1$. No inverse Euler factor is evaluated at zero. [F1, F3, step 1.1, step 2.1, algebra]

4.1 If $\chi$ is nontrivial, so is $\psi^*$ by step 1.1 and [F3]. Its completed $L$-function is entire by [F4]. Since $F$ is totally real, its archimedean factors are $\Gamma_{\mathbb R}(s+\epsilon_v)$ with $\epsilon_v\in\{0,1\}$; their reciprocals are holomorphic at zero. The reciprocals of all shifted real gamma factors are entire by [F4], and the conductor-discriminant factor is everywhere nonzero. Thus dividing the completed function by them gives an entire uncompleted primitive function. If $\chi$ is trivial, its Artin function is $\zeta_F$, which has only a simple pole at $s=1$ and is finite at zero by [F4]. Step 3.1 identifies these functions with the original Artin Euler product on its convergence half-plane, proving the global continuations and their holomorphy near zero. [A1, F4, step 1.1, step 3.1, algebra]

5.1 Each finite $S$-depletion or $T$-smoothing factor is entire in $s$, so multiplication preserves holomorphy at zero. Finally [F5] gives a unique group-ring element with any prescribed finite family of character values, in particular the smoothed values at zero. [F5, step 4.1, algebra] ∎
