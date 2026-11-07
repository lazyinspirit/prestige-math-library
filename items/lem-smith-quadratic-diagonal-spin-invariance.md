---
id: lem-smith-quadratic-diagonal-spin-invariance
kind: lemma
title: "Quadratic diagonal spin is invariant under compatible local generators"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-diagonal-spin-square-local-correction, lem-smith-diagonal-spin-odd-unramified-local-calculation, lem-smith-diagonal-spin-split-local-identity, thm-hilbert-reciprocity-product-formula-for-number-fields, thm-real-hilbert-symbol-formula, lem-tame-local-hilbert-symbol-residue-formula, thm-local-hilbert-symbol-cup-product-norm-criterion, thm-local-artin-reciprocity-and-norm-index]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from global Hilbert reciprocity
  and the stated local-field interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families II, Proposition 5.1"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "§5.1, quadratic involution-spin invariance"
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, involution spin"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K=F(\sqrt\delta)$ be a quadratic extension of number fields with nontrivial automorphism $\kappa$, and let $V$ contain the archimedean places, the places dividing $2$, and the places ramified in $K/F$. Let $\mathfrak P,\mathfrak Q$ be primes of $K$ over distinct finite places of $F$ outside $V$, each splitting in $K/F$. Suppose $\alpha,\beta\in K^\times$ satisfy
$$v_{\mathfrak P}(\alpha)=1,\qquad v_{\mathfrak Q}(\beta)=1,$$
with every other finite valuation of $\alpha$ and respectively $\beta$ outside $V$ equal to zero, and suppose $\alpha/\beta$ is a square in $K_w$ for every $w\mid V$. Then $\alpha$ is a unit at $\kappa\mathfrak P$ and $\beta$ is a unit at $\kappa\mathfrak Q$, and their odd quadratic residue symbols satisfy
$$\left(\frac{\alpha}{\kappa\mathfrak P}\right)=\left(\frac{\beta}{\kappa\mathfrak Q}\right).$$
This is the quadratic diagonal-spin invariance for the displayed normalized generators and distinct split base primes. It does not assert that the original source grid classes provide the generators or the local square compatibility.

## Statement references

[[lem-smith-diagonal-spin-square-local-correction]]

[[lem-smith-diagonal-spin-odd-unramified-local-calculation]]

[[lem-smith-diagonal-spin-split-local-identity]]

[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, Proposition 5.1](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the quadratic extension, auxiliary places, split primes, and compatible generators in the Statement.

[F1] A square input at a nonsplit nonarchimedean place gives the trace-norm Hilbert factor $H_2(2,-\delta)$. [[lem-smith-diagonal-spin-square-local-correction]]

[F2] At odd unramified inert places a unit input gives trace-norm factor $1$, and the tame quadratic Hilbert symbol is symmetric and is trivial on pairs of units. [[lem-smith-diagonal-spin-odd-unramified-local-calculation]] [[lem-tame-local-hilbert-symbol-residue-formula]]

[F3] At a split nonarchimedean place, $H_2(x+y,-xy)=H_2(x,y)$. [[lem-smith-diagonal-spin-split-local-identity]]

[F4] The global Hilbert symbol product is $1$, with the standard archimedean conventions. [[thm-hilbert-reciprocity-product-formula-for-number-fields]] [[thm-real-hilbert-symbol-formula]]

[F5] The quadratic Hilbert symbol is bilinear on square classes and satisfies the local norm criterion. [[thm-local-hilbert-symbol-cup-product-norm-criterion]] [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

1.1 Put $\xi=\alpha/\beta$, $t=\operatorname{Tr}_{K/F}(\xi)$, and $a=N_{K/F}(\xi)$. Outside $V$, the divisor of $\xi$ has coefficients $+1$ at $\mathfrak P$ and $-1$ at $\mathfrak Q$, and that of $\kappa\xi$ has the corresponding coefficients at $\kappa\mathfrak P$ and $\kappa\mathfrak Q$. These four primes are distinct because the two underlying places of $F$ are distinct and split. Thus $t\ne0$: otherwise $\kappa\xi=-\xi$, contradicting the valuation at $\mathfrak P$. At every nonsplit place outside $V$, $\xi$ is a unit; at every place above $V$, it is a square by hypothesis. [given, algebra]

2.1 Divide the two global Hilbert product identities for $(t,-\delta a)$ and $(2,-\delta)$. At nonsplit places above $V$, [F1] gives equality of the two local factors; at real nonsplit places both factors are $1$ by [F4]. At nonsplit places outside $V$, the place is odd and unramified and $\xi$ is a unit by step 1.1, so [F2] makes both factors $1$ after replacing $\delta$ by a square-equivalent unit. At a split place, [F3] identifies the first factor with the Hilbert symbol of the two components of $\xi$, while the second factor is $H_2(2,-1)=1$ by [F5] because $-1=N(1+\sqrt2)$. At split places above $V$ both components are squares; at all other split places outside $V$ they are units except at the two places below $\mathfrak P$ and $\mathfrak Q$. Hence the product of the split Hilbert factors at those two places is $1$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Let $s_{\mathfrak P}=(\alpha/\kappa\mathfrak P)$ and $s_{\mathfrak Q}=(\beta/\kappa\mathfrak Q)$. The tame formula [F2] evaluates the two factors in step 2.1 as $$s_{\mathfrak P}\left(\frac{\beta}{\kappa\mathfrak P}\right),\qquad s_{\mathfrak Q}\left(\frac{\alpha}{\kappa\mathfrak Q}\right),$$ respectively; the valuation $-1$ at $\mathfrak Q$ gives the same sign as $+1$. Thus the product of these four signs is $1$. [F2, step 2.1, algebra]

4.1 Apply global Hilbert reciprocity over $K$ to $(\alpha,\kappa\alpha)$. Outside the places above $V$, only $\mathfrak P$ and $\kappa\mathfrak P$ contribute; the two tame factors are equal to $s_{\mathfrak P}$, so their product is $1$. Therefore the product over $w\mid V$ is $1$. At those places $\kappa\beta/\kappa\alpha$ is a square, because $\kappa$ permutes the places above $V$. Applying global reciprocity to $(\alpha,\kappa\beta)$ leaves the two off-diagonal tame factors $$(\beta/\kappa\mathfrak P)\quad\text{and}\quad(\alpha/\kappa\mathfrak Q),$$ whose product must therefore also be $1$. Combining this with step 3.1 gives $s_{\mathfrak P}s_{\mathfrak Q}=1$, which is the asserted equality of signs. [F2, F4, step 3.1, given, algebra] ∎
