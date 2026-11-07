---
id: thm-abelian-artin-l-series-equals-hecke-l-series
kind: theorem
title: "Artin L-series equals the Hecke L-series up to ramified Euler factors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-artin-l-series-for-a-linear-character
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-finite-order-hecke-l-euler-product
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-class-field-existence-number-field
  - thm-number-field-ray-class-field-artin-isomorphism
  - def-arithmetic-frobenius-coset
  - cor-frobenius-compatibility-in-finite-towers
  - def-inertia-group-of-a-prime
  - thm-decomposition-inertia-exact-sequence
  - thm-galois-action-on-primes-above-a-prime-is-transitive
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray-class-field and
  Artin-reciprocity suppliers. The local Euler-factor comparison uses no
  additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §10, Theorem 10.6"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.525–526, abelian Artin factors and their finite Hecke Euler corrections."

---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field, let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, let $L/K$ be its ray class field, and let $\chi$ be a character of $G=\operatorname{Gal}(L/K)$ corresponding by Artin reciprocity to the ray-class Hecke character $\chi_H$ modulo $\mathfrak m$. For $\operatorname{Re}(s)>1$,
$$L_{L/K}(s,\chi)=L(s,\chi_H)\prod_{\substack{\mathfrak p\mid\mathfrak m_0\\\chi|_{I(\mathfrak P/\mathfrak p)}=1}}\left(1-\chi(\operatorname{Frob}_{\mathfrak P/\mathfrak p})(N\mathfrak p)^{-s}\right)^{-1},$$
where the condition and Frobenius value are independent of the prime $\mathfrak P\mid\mathfrak p$. The correction is a finite product of factors that are nonzero at $s=1$.

## Statement references

[[def-artin-l-series-for-a-linear-character]]

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[def-arithmetic-frobenius-coset]]

[[cor-frobenius-compatibility-in-finite-towers]]

[[def-inertia-group-of-a-prime]]

[[thm-decomposition-inertia-exact-sequence]]

## Facts & Assumptions

**Given:** AC, Countable Choice, DC; a number field $K$, modulus $\mathfrak m$, its ray class field $L/K$, a character $\chi$ of $G=\operatorname{Gal}(L/K)$, and $s$ with $\sigma=\operatorname{Re}(s)>1$.

[A1] The ray class field Artin map identifies $\operatorname{Cl}_{\mathfrak m}(K)$ with $G$; the current field-existence and reciprocity proofs have unresolved suppliers. [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]]

[F1] For $\mathfrak p\nmid\mathfrak m_0$, the prime is unramified in $L/K$ and Artin reciprocity sends its ray class to arithmetic Frobenius. [[thm-number-field-ray-class-field-artin-isomorphism]] [[def-arithmetic-frobenius-coset]]

[F2] If $\chi$ factors through a smaller modulus, the corresponding Galois character factors through the smaller ray-class field; for unramified primes, Frobenius restricts compatibly in the tower. [[def-finite-order-ray-class-hecke-character-and-l-function]] [[cor-frobenius-compatibility-in-finite-towers]]

[F3] At a prime $\mathfrak p$, the Artin Euler factor is $(1-\chi(\operatorname{Frob}_{\mathfrak P/\mathfrak p})(N\mathfrak p)^{-s})^{-1}$ if $\chi$ is trivial on inertia, and $1$ otherwise. [[def-artin-l-series-for-a-linear-character]] [[def-inertia-group-of-a-prime]] [[thm-decomposition-inertia-exact-sequence]]

[F4] The Hecke L-series has Euler factors only for primes not dividing $\mathfrak m_0$. [[thm-finite-order-hecke-l-euler-product]]

[F5] Any two primes above $\mathfrak p$ are conjugate; their decomposition groups, inertia groups, and Frobenius cosets are conjugate. Since $G$ is abelian, the character condition and Frobenius value are independent of the chosen prime. [[thm-galois-action-on-primes-above-a-prime-is-transitive]] [[def-arithmetic-frobenius-coset]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 If $\mathfrak p\nmid\mathfrak m_0$, [F1] identifies the Artin Frobenius factor with the value of the corresponding ray-class character on $\mathfrak p$. The Artin local factor is therefore exactly the Hecke Euler factor at $\mathfrak p$. If $\chi$ factors through a smaller modulus, [F2] gives the same value by restriction to that ray class field. [A1, F1, F2, F4, given]

2.1 If $\mathfrak p\mid\mathfrak m_0$, [F4] omits its Hecke Euler factor. By [F3], the Artin factor is also $1$ when $\chi$ is nontrivial on inertia; when $\chi$ is trivial on inertia, the missing Hecke factor is supplied exactly by $(1-\chi(\operatorname{Frob}_{\mathfrak P/\mathfrak p})(N\mathfrak p)^{-s})^{-1}$. [F5] ensures this condition and value do not depend on $\mathfrak P$. This produces the finite correction in the Statement. [F3, F4, F5, step 1.1, algebra]

3.1 Each correction factor is nonzero at $s=1$: $|\chi(\operatorname{Frob})|=1$ and $N\mathfrak p\ge2$, so $|\chi(\operatorname{Frob})(N\mathfrak p)^{-1}|<1$. There are only finitely many primes dividing $\mathfrak m_0$, proving the final assertion. [F3, given, algebra] ∎
