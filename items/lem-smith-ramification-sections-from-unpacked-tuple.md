---
id: lem-smith-ramification-sections-from-unpacked-tuple
kind: lemma
title: "Compatible ramification sections for an unpacked starting tuple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-relative-ideal-norm-in-number-field-extension, lem-relative-ideal-norm-of-principal-ideal, thm-decomposition-and-inertia-fixed-fields, thm-decomposition-and-inertia-in-towers, thm-decomposition-inertia-exact-sequence, lem-smith-fixed-set-compatible-approximate-generators, lem-smith-kummer-section-from-approximate-generator]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC supplies the simultaneous choices of generators; Countable Choice and DC
  are inherited from the number-field class-field and section interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Notations 3.5 and 3.8 and Proposition 3.9"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be finite Galois, let $e\ge2$ with $\mu_e\subseteq K$, and let $V$ contain all archimedean places, all primes dividing $e$, and all primes ramified in $K/F$. Suppose that for every intermediate field $J$ with $K/J$ cyclic, and every prime $\mathfrak j$ outside $V$ inert in $K/J$, there exists $\gamma\in J^\times$ whose valuation at $\mathfrak j$ is $1$ modulo $e$ and whose valuations at all other primes outside $V$ are $0$ modulo $e$.

For every intermediate $E$, all primes of $E$ outside $V$ admit simultaneous such approximate generators $\alpha_{\mathfrak p}$ compatible in all completions above $V$ whenever their Frobenius elements agree in every exponent-$e$ abelian extension of $E$ unramified outside $V$. Thus, for each prime $\mathfrak P$ of $K$ outside $V$, with $D=D(\mathfrak P/F)$ and $E=K^D$, the generator at $\mathfrak P\cap E$ defines a natural global ramification section for every finite $\operatorname{Gal}(K/F)$-module killed by $e$. Two selected primes with the same $D$ and the displayed Frobenius agreement give section values with equal restrictions at every place in $V$. In particular this applies when their chosen Frobenius elements have the same restriction to the maximal exponent-$e$ abelian extension of $E$ unramified outside $V$. The set $V$ is unchanged. No assertion about grid-symbol invariance or analytic distribution is made.

## Statement references

[[lem-smith-fixed-set-compatible-approximate-generators]]

[[lem-smith-kummer-section-from-approximate-generator]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Notations 3.5 and 3.8 and Proposition 3.9](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the starting data and approximate-generator hypothesis in the Statement.

[F1] In a finite Galois tower, decomposition and inertia groups over an intermediate field are intersections; for an unramified prime, the decomposition group is cyclic and acts as the residue-field Galois group. [[thm-decomposition-and-inertia-in-towers]] [[thm-decomposition-inertia-exact-sequence]]

[F2] The decomposition-fixed field has residue degree one at the distinguished prime and the prime above it is unique. [[thm-decomposition-and-inertia-fixed-fields]]

[F3] The relative ideal norm sends a prime to the prime below raised to its residue degree and sends a principal fractional ideal to the principal ideal of the field norm. [[def-relative-ideal-norm-in-number-field-extension]] [[lem-relative-ideal-norm-of-principal-ideal]]

[F4] When all outside primes have approximate generators modulo $e$, they can be chosen compatibly on equality of all exponent-$e$ unramified-outside-$V$ Frobenius data, with the same auxiliary set. [[lem-smith-fixed-set-compatible-approximate-generators]]

[F5] An approximate generator in the decomposition-fixed field gives a natural global ramification section, and equality of its local $e$th-power labels at the auxiliary places gives equality of the section restrictions there. [[lem-smith-kummer-section-from-approximate-generator]]

## Proof

1.1 Fix an intermediate field $E$ and a prime $\mathfrak p$ of $E$ outside $V$. Choose a prime $\mathfrak P$ of $K$ above it and put $D=D(\mathfrak P/E)$ and $J=K^D$. Since $\mathfrak P$ is unramified over $F$, [F1] makes $D$ cyclic. By [F2], $\mathfrak j=\mathfrak P\cap J$ is the unique prime of $K$ above it and has residue degree one over $\mathfrak p$. The extension $K/J$ has group $D$, and its unique prime above $\mathfrak j$ is unramified with residue degree $|D|$; hence $\mathfrak j$ is inert in $K/J$. [F1, F2, given, choose, algebra]

2.1 Choose the generator $\gamma\in J^\times$ supplied by the hypothesis at $\mathfrak j$, and put $\alpha=N_{J/E}(\gamma)$. By [F3] and step 1.1, $v_{\mathfrak p}(\alpha)\equiv1\pmod e$. At every other prime of $E$ outside $V$, all contributing valuations of $\gamma$ are multiples of $e$, so the corresponding valuation of $\alpha$ is also a multiple of $e$. Thus the hypothesis of [F4] holds for every $E$. [F3, step 1.1, given, construct, algebra]

3.1 Apply [F4] in each intermediate field to select the generators with compatible local classes on equality of the stated Frobenius data. There are finitely many intermediate fields, and AC makes the simultaneous choices. Apply [F5] to the decomposition-fixed field of each selected $\mathfrak P$; the valuations and local-label agreement give its section and compatibility conclusions. Since the distinguished prime of $E$ has residue degree one over its prime of $F$ by [F2], the chosen Frobenius at $F$ restricts to the Frobenius at that prime of $E$ in each extension in question. Thus equality on their maximal compositum implies the stated Frobenius agreement. No enlargement of $V$ is involved. [F2, F4, F5, step 2.1, given, choose, algebra] ∎
