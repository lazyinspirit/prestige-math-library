---
dependency_level: 9
id: lem-imprimitive-ray-class-hecke-finite-euler-correction
kind: lemma
title: Primitive inducing ray characters and finite Euler corrections
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-order-ray-class-hecke-character-and-l-function
- def-ray-class-group
- def-global-field-modulus
- thm-weak-approximation-for-global-fields
- thm-ray-class-exact-sequence
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-finite-order-hecke-l-euler-product
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §8 after Proposition8.4, printed502; finite Euler comparison proved locally; full local finite-order
      specialization below.
---

## Statement

Assume AC and Countable Choice. Every finite-order ray-class character $\chi$ modulo $\mathfrak m$ is induced by a primitive ray-class character $\chi^*$ modulo some divisor $\mathfrak f\mid\mathfrak m$. For every such primitive inducing choice,
$$L(s,\chi)=L(s,\chi^*)\prod_{\substack{\mathfrak p\mid\mathfrak m_0\\\mathfrak p\nmid\mathfrak f_0}}\left(1-\chi^*(\mathfrak p)(N\mathfrak p)^{-s}\right)\quad(\operatorname{Re}s>1).$$
The finite product is entire and nonzero in a neighborhood of $s=1$. The inducing character is nontrivial if and only if $\chi$ is nontrivial. This asserts existence of a primitive inducing divisor, without requiring a uniqueness theorem for a conductor.

## Facts & Assumptions

**Given:** The character and choice branch in the Statement.

[F1] Ray classes are ideals prime to the finite modulus modulo the prescribed principal congruences and real signs. Divisibility of moduli weakens those congruences; a finite modulus has finitely many prime factors and exponents. [[def-finite-order-ray-class-hecke-character-and-l-function]] [[def-ray-class-group]] [[def-global-field-modulus]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F2] Weak approximation supplies simultaneous finite-prime open conditions and selected real signs; it supplies ordinary ideal-class representatives prime to any finite modulus. [[thm-weak-approximation-for-global-fields]] [[thm-ray-class-exact-sequence]]

[F3] Hecke Euler products converge absolutely in $\operatorname{Re}s>1$. [[thm-finite-order-hecke-l-euler-product]]

[A1] AC and CC are inherited from [F1]–[F3]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 For $\mathfrak f\mid\mathfrak m$, inclusion of ideals prime to $\mathfrak m_0$ into those prime to $\mathfrak f_0$ descends to the ray class groups by [F1]. It is surjective. Indeed, for a fractional ideal $\mathfrak b$ prime to $\mathfrak f_0$, use [F2] to choose $\alpha\in K^\times$ with valuation $-v_{\mathfrak p}(\mathfrak b)$ at the finitely many additional primes of $\mathfrak m_0$, congruent to $1$ to every prime-power precision of $\mathfrak f_0$, and positive at the real places of $\mathfrak f$. The valuation conditions are open neighborhoods of nonzero elements of the desired valuations, as in the ray-sequence proof. Then $(\alpha)\mathfrak b$ is prime to $\mathfrak m_0$ and represents the original class modulo $\mathfrak f$. Thus a pulled-back character is trivial exactly when its inducing character is. [F1, F2, algebra, choose]

2.1 There are finitely many divisor moduli: choose an exponent at each of finitely many finite primes and a subset of finitely many selected real places. The set of divisors through which $\chi$ factors is nonempty, containing $\mathfrak m$. A minimal divisor in this finite partial order gives $\chi^*$. By step 1.1 its character is defined on the whole smaller ray group, and a factorization through a further proper divisor would contradict minimality. It is therefore primitive. [F1, step 1.1, algebra, choose]

3.1 The Euler factors in [F3] agree away from $\mathfrak m_0$. At primes dividing $\mathfrak f_0$ both products omit the factor; at a prime dividing $\mathfrak m_0$ but not $\mathfrak f_0$, the larger-modulus function omits exactly the factor retained by $L(s,\chi^*)$. Cancelling in the absolutely convergent products proves the displayed formula. Each deletion is entire since $q^{-s}=e^{-s\log q}$. At $s=1$ its nonconstant term has absolute value $q^{-1}<1$ because $q=N\mathfrak p\ge2$, so it is nonzero there; continuity and finiteness give a common nonvanishing neighborhood. [F1, F3, step 2.1, algebra] ∎ 