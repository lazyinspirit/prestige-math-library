---
id: thm-johnston-nickel-abelian-eimc-with-uniqueness
kind: theorem
title: Johnston–Nickel Equivariant Main Conjecture for Abelian One-Dimensional Extensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-iwasawa-algebra-of-profinite-group
  - def-iwasawa-module-characteristic-ideal-and-fitting-ideal
  - def-algebraic-k0-and-k1-of-a-ring
  - def-noncommutative-maximal-fitting-invariant
  - def-p-adic-artin-l-element-for-admissible-extension
  - def-smoothed-stickelberger-element-at-nonpositive-integer
  - thm-johnston-nickel-canonical-complex-is-perfect
  - thm-deligne-ribet-p-adic-measure-interpolation
  - thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form
  - thm-dasgupta-kakde-strong-brumer-stark-fitting-containment
  - thm-johnston-nickel-inverse-limit-stickelberger-identity
  - def-relative-algebraic-k0-group
  - thm-relative-k-theory-localization-sequence
  - def-perfect-torsion-complex-relative-euler-class
  - lem-commutative-iwasawa-order-relative-k0-is-detected-at-height-one
  - thm-ray-class-exact-sequence
  - thm-kummer-pairing-is-perfect
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: The local proof route carries AC, Countable Choice, and Dependent Choice through the current Deligne–Ribet and Strong Brumer–Stark supplier interfaces; no weaker branch is asserted.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 9.5, printed pp. 24–25; complete proof §§5–9.
    - title: Coates and Sujatha, The Main Conjecture
      url: https://www.repository.cam.ac.uk/items/f88cb5c6-29f3-451e-ba69-82caabb06ced/full
      locator: Theorems 3.4–3.5; independent formulation of Wiles's classical main conjecture.
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be an odd prime, let $K$ be a totally real number field, and let $L/K$ be an abelian admissible one-dimensional $p$-adic Lie extension. Put $G=\operatorname{Gal}(L/K)$, let $S$ be any finite set of places containing the places ramified in $L/K$ and all infinite places, and let $C_S^\bullet(L/K)$ be the canonical complex. Write $\Lambda(G)=\mathbb Z_p[[G]]$, let $Q(G)$ be its total quotient algebra, obtained by inverting the central regular elements, let $\partial:K_1(Q(G))\to K_0(\Lambda(G),Q(G))$ be the relative boundary, and let $\Phi_S(L/K)$ be the $p$-adic Artin $L$-element. Then there is a unique $\zeta_S\in K_1(Q(G))$ such that
$$\partial(\zeta_S)=-[C_S^\bullet(L/K)]\qquad\text{and}\qquad \operatorname{nr}(\zeta_S)=\Phi_S(L/K).$$
No $\mu=0$ hypothesis is imposed.

## Statement references

[Johnston and Nickel, Theorem 9.5](https://arxiv.org/pdf/2010.03186)

[[def-admissible-one-dimensional-p-adic-lie-extension]]

[[def-p-adic-artin-l-element-for-admissible-extension]]

[[def-johnston-nickel-canonical-eimc-complex]]

## Proof status

The argument below is a conditional local reconstruction, not an unconditional proof. The Wiles carrier is present but its proof is not supplied; the current Deligne–Ribet and Strong Brumer–Stark carriers also explicitly leave proof obligations open.

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $p,K,L,S$, and the conventions in the Statement.

[F1] For abelian $G$, the reduced norm is the determinant and identifies $K_1(Q(G))$ with $Q(G)^\times$. [[def-iwasawa-algebra-of-profinite-group]] [[def-algebraic-k0-and-k1-of-a-ring]] [[def-noncommutative-maximal-fitting-invariant]]

[F2] The relative localization sequence defines the boundary and the class of a perfect torsion complex. [[def-relative-algebraic-k0-group]] [[thm-relative-k-theory-localization-sequence]] [[thm-johnston-nickel-canonical-complex-is-perfect]]

[F3] The commutative relative $K_0$ class over the one-variable formal power-series ring $\mathbb Z_p\llbracket T\rrbracket$ is detected at height-one primes, under AC; here $T$ is a formal variable. [[lem-commutative-iwasawa-order-relative-k0-is-detected-at-height-one]]

[F4] The ray-class exact sequence and perfect Kummer pairing give the finite-layer class-group and Pontryagin-dual identifications used in the reduction. [[thm-ray-class-exact-sequence]] [[thm-kummer-pairing-is-perfect]]

[A1] The current Wiles carrier states the pseudomeasure/characteristic-ideal identity for the p-ramified module over the real cyclotomic tower, with AC, Countable Choice and Dependent Choice carried through its construction interfaces. Its full proof is not supplied, so the source statement remains an unresolved conditional input. [[thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form]]

[A2] The current Deligne–Ribet measure carrier states the interpolation interface, but its proof leaves the finite-level parity and weight-one arguments and the compatible-congruence-to-measure passage unresolved. [[thm-deligne-ribet-p-adic-measure-interpolation]]

[A3] The current Strong Brumer–Stark carrier's proof is conditional on the incomplete Deligne–Ribet integrality and Kurihara-equality carriers; it is not used here as an established premise. [[thm-dasgupta-kakde-strong-brumer-stark-fitting-containment]]

[A4] The canonical-complex perfection carrier remains conditional on an unproved continuous compact-support comparison and determinant-fiber supplier. [[thm-johnston-nickel-canonical-complex-is-perfect]]

[A5] The inverse-limit Stickelberger identity has a local theorem carrier, but the specialization identity in Johnston–Nickel 2019, Lemma 6.1, and the associated character calculation remain unproved locally. [[thm-johnston-nickel-inverse-limit-stickelberger-identity]]

## Proof

**Given:** The Statement hypotheses and the conditional supplier inputs [A1]–[A5].

1.1 Put $\omega_S=\partial(\operatorname{nr}^{-1}(\Phi_S))+[C_S^\bullet]$. By [F1] and the EIMC definition, the claimed equality is equivalent to $\omega_S=0$; uniqueness follows once the reduced-norm condition is satisfied. [F1, F2, given, algebra]

1.2 The source's Wiles comparison makes $\omega_S$ vanish after extension to the maximal order. Assuming [A1], height-one detection [F3] then reduces $\omega_S=0$ to its localization at the prime $(p)$ of $\mathbb Z_p[[\Gamma]]$. [A1, F3, step 1.1]

2.1 Localizing the canonical complex at $(p)$ kills its degree-zero $\mathbb Z_p$ cohomology and leaves $X_{S,(p)}$ in degree $-1$. The relative determinant/Fitting comparison therefore reduces the remaining equality to $\Phi_S\in\operatorname{Fitt}_{\Lambda_{(p)}(G)}(X_{S,(p)})$. This comparison is conditional on [A4]. [A4, F2, step 1.2]

2.2 Choose the finite CM extension and smoothing set used in §§8–9 of the source. At each finite cyclotomic layer the Strong Brumer–Stark containment gives the finite-level Fitting inclusion; [F4] supplies the ray-class and Kummer identifications for the inverse-limit module. [A2, A3, F4, given]

3.1 The inverse-limit identity [A5] identifies the finite-layer special values with the $p$-adic Artin element multiplied by the finite Euler factors. After localizing at $(p)$ those smoothing factors are units, so the finite-level inclusions imply the required localized Fitting containment, conditional on [A2], [A3], and [A5]. [A2, A3, A5, step 2.2]

3.2 The localized criterion from step 2.1 now gives $\omega_S=0$, and [F1] gives uniqueness for abelian $G$. Thus the source route proves the Statement conditional on [A1]–[A5]; those local supplier obligations remain open in this batch. [A1, A2, A3, A4, A5, F1, F3, step 2.1, step 3.1] ∎

## Proof references

[Johnston and Nickel, §§5–9](https://arxiv.org/pdf/2010.03186)
