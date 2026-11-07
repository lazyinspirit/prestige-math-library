---
id: rem-hecke-l-nonvanishing-uses-ray-class-existence
kind: remark
title: "The class-field proof of Hecke L nonvanishing uses ray-class existence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one
  - thm-global-class-field-existence-number-field
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-abelian-artin-l-factorization-into-hecke-l-functions
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - lem-imprimitive-ray-class-hecke-finite-euler-correction
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are used by the global class-field existence and
  reciprocity interfaces cited in the remark.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §13, Lemma 13.3"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.543–544, where the nonvanishing proof explicitly passes through the ray class field and Artin factorization."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §4, class-field nonvanishing and its use in the density theorem."

---

## Remark

The class-field proof of nonvanishing at $s=1$ for a nontrivial ray-class Hecke character first uses existence of the corresponding ray-class field and the Artin reciprocity isomorphism to interpret the character as a one-dimensional Galois character. It then uses abelian Artin factorization of the extension's Dedekind zeta function, equality of the Artin and Hecke L-functions away from finitely many ramified Euler factors, and the simple poles of the two Dedekind zeta functions. This records the dependencies of that proof route; it does not assert that the current class-field suppliers have completed proofs.

## Remark references

[[thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one]]

[[thm-global-class-field-existence-number-field]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-abelian-artin-l-factorization-into-hecke-l-functions]]

[[thm-abelian-artin-l-series-equals-hecke-l-series]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

## Facts & Assumptions

**Given:** The nonvanishing proof route for a nontrivial ray-class character and its number field and modulus.

[A1] The required input is global class-field existence together with Artin reciprocity identifying the Galois group of the ray-class field with the ray class group. The actual suppliers remain unproved at the missing global norm-subgroup, reciprocity, localization, and local cyclic-algebra interfaces. [[thm-global-class-field-existence-number-field]] [[thm-number-field-ray-class-field-artin-isomorphism]]

[F2] In a finite abelian extension, the product of the nontrivial Artin L-functions is determined by the ratio $\zeta_L/\zeta_K$, because the trivial inertia-invariant Artin character contributes exactly $\zeta_K$, including at ramified primes. [[thm-abelian-artin-l-factorization-into-hecke-l-functions]]

[F3] The Artin and Hecke L-functions agree away from finitely many Euler factors, and those local factors are nonzero at $s=1$. [[thm-abelian-artin-l-series-equals-hecke-l-series]]

[F4] The two Dedekind zeta functions have simple poles at $1$ with positive residues. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F5] Nontrivial Hecke L-functions are holomorphic at $1$ by the primitive functional equation and finite Euler correction. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

## Proof

**Given:** The class-field proof route in the Statement.

1.1 The Artin L-functions in [F2] are indexed by characters of a Galois group. [A1] is the step that supplies that group and identifies its characters with the ray-class characters in question; without those two inputs, this proof route has no Artin L-functions to factor. [A1, F2, given]

2.1 Once that identification is available, [F2] expresses the product over nontrivial characters as the quotient $\zeta_L(s)/\zeta_K(s)$, with no ramified Euler deletion from the trivial Artin character. By [F4], this quotient has a finite nonzero limit at $1$. [F2, F4, step 1.1]

3.1 By [F3], replacing each Artin L-function by its Hecke L-function multiplies it by only finitely many factors nonzero at $1$. By [F5], the nontrivial Hecke factors are holomorphic there. Hence the nonzero product in step 2.1 is also the product of the nontrivial Hecke L-values, and none can vanish. This proves the stated dependency route, conditional on [A1]. [A1, F3, F5, step 2.1] ∎

## Analytic route

The current nonvanishing theorem has a separate local proof using a nonnegative ray-character Euler product and an explicit Taylor/Tonelli argument. That proof does not use the held CFT inputs of this remark. The original class-field route described above retains its own existence and reciprocity obligations.
