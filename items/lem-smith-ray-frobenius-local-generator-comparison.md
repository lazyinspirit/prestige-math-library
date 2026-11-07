---
id: lem-smith-ray-frobenius-local-generator-comparison
kind: lemma
title: "Ray Frobenius agreement forces local generator agreement"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-kummer-cohomology-of-roots-of-unity, lem-smith-fixed-set-compatible-approximate-generators, lem-smith-unpacked-local-kernel-from-duality, lem-smith-unramified-kummer-frobenius-residue-symbol, thm-global-artin-reciprocity-and-norm-index, thm-local-artin-unramified-frobenius-normalization, lem-unramified-local-unit-norms-and-cohomology, thm-local-artin-reciprocity-and-norm-index]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the class-field compatibility
  and Poitou–Tate local-global kernel interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Proposition 3.23, ray Frobenius implication"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $E$ be a number field, $e\ge2$, and $S$ a finite set of places containing all archimedean places and places dividing $e$. Suppose that every finite prime outside $S$ has an approximate generator with valuation $1$ there and $0$ elsewhere outside $S$, both modulo $e$. Suppose also that for every finite $v\notin S$, every invariant tame inertia character for the constant module $\mathbb Z/e\mathbb Z$ extends to a global class unramified outside $S\cup\{v\}$.

Let $T$ be a finite set of finite places outside $S$, and let distinct primes $\mathfrak p,\mathfrak p'$ lie outside $S\cup T$. Let $\alpha,\alpha'\in E^\times$ be approximate generators at $\mathfrak p,\mathfrak p'$ in the above sense, and suppose $\alpha/\alpha'$ is an $e$th power in every completion at a place in $S$. Then $\mathfrak p,\mathfrak p'$ have equal Frobenius in every finite abelian exponent-$e$ extension of $E$ unramified outside $S\cup T$ if and only if $\alpha/\alpha'$ is an $e$th power in $E_v^\times$ for every $v\in T$.

## Statement references

[[lem-smith-fixed-set-compatible-approximate-generators]]

[[lem-smith-unpacked-local-kernel-from-duality]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.23](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the number field, integer, place sets, section hypothesis, generators and Frobenius condition in the Statement.

[F1] Approximate generators modulo $e$ can be chosen with matching local $e$th-power classes at a fixed auxiliary set when all exponent-$e$ Frobenius data outside that set agree. [[lem-smith-fixed-set-compatible-approximate-generators]]

[F2] If the constant dual module has the stated global ramification classes, an $H^1(E,\mu_e)$ class unramified outside $S$ and locally zero at $S$ is locally zero everywhere. [[lem-smith-unpacked-local-kernel-from-duality]]

[F3] Kummer theory identifies $H^1(E,\mu_e)$ with $E^\times/(E^\times)^e$ and identifies local vanishing with being a local $e$th power. At places of residue characteristic prime to $e$, the Kummer class of a unit is unramified. [[lem-kummer-cohomology-of-roots-of-unity]] [[lem-smith-unramified-kummer-frobenius-residue-symbol]]

[F4] Global Artin reciprocity is trivial on principal idèles and is the product of the compatible local Artin maps; at an unramified finite place, a uniformizer maps to arithmetic Frobenius and all units are local norms. [[thm-global-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]] [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

1.1 The approximate-generator hypothesis outside $S$ also holds outside $S\cup T$. Apply [F1] with this larger fixed set and the given Frobenius agreement to choose approximate generators $\beta,\beta'$ at $\mathfrak p,\mathfrak p'$ such that $\beta/\beta'$ is an $e$th power at every place of $S\cup T$. Put $$\delta=(\alpha/\alpha')/(\beta/\beta')\in E^\times.$$ [F1, given, choose, construct, algebra]

2.1 At each finite place outside $S\cup T$, the valuations of $\alpha/\alpha'$ and $\beta/\beta'$ agree modulo $e$, so $v(\delta)$ is divisible by $e$. At a place of $T$, the ratio $\beta/\beta'$ is a local $e$th power, while both original generators have valuation $0$ modulo $e$; again $v(\delta)$ is divisible by $e$. Removing a local $e$th power leaves a unit, so [F3] makes the Kummer class of $\delta$ unramified at every finite place outside $S$. At each place of $S$, both ratios are local $e$th powers, so the class vanishes locally there. [F3, step 1.1, given, algebra]

3.1 The Cartier dual of $\mu_e$ is the constant module $\mathbb Z/e\mathbb Z$. The global ramification-class hypothesis therefore lets [F2] apply to the Kummer class of $\delta$, and the class is locally zero at every place. In particular $\delta$ is an $e$th power at each $v\in T$ by [F3]; since $\beta/\beta'$ is also an $e$th power there, the same holds for $\alpha/\alpha'$. [F2, F3, step 1.1, step 2.1, given, algebra]

4.1 Conversely, suppose the original ratio $\alpha/\alpha'$ is an $e$th power locally at every place of $T$, as well as at every place of $S$. Let $L/E$ be a finite abelian exponent-$e$ extension unramified outside $S\cup T$. By [F4], the product of local Artin images of this principal element is the identity. Its factors at $S\cup T$ are trivial because $e$th powers map trivially. Away from $S\cup T$, local units map trivially in an unramified extension, and the valuations are divisible by $e$ except at $\mathfrak p,\mathfrak p'$, where they are respectively $1$ and $-1$ modulo $e$. The product is therefore $\operatorname{Frob}_{\mathfrak p}\operatorname{Frob}_{\mathfrak p'}^{-1}$, which must be one. This holds for every $L$. [F4, given, algebra] ∎
