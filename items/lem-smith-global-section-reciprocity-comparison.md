---
id: lem-smith-global-section-reciprocity-comparison
kind: lemma
title: "Global reciprocity comparison for ramification sections"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-poitou-tate-exact-sequence-for-finite-modules, lem-unramified-local-tate-annihilators-prime-to-residue-characteristic, lem-smith-local-unramified-inertia-pairing, lem-smith-kummer-section-from-approximate-generator]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are the explicit hypotheses of the finite-module
  Poitou–Tate and ramification-section interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Proposition 3.23"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be finite Galois with group $G$, let $e\ge2$ with $\mu_e\subseteq K$, and let $V$ contain the archimedean places, those dividing $e$, and all primes ramified in $K/F$. Let $P,P',Q$ be primes of $K$ outside $V$ lying over three distinct primes of $F$, and assume that $P,P'$ have the same decomposition subgroup and arithmetic Frobenius element in $G$. Give each prime an approximate generator for its decomposition field as in [[lem-smith-kummer-section-from-approximate-generator]], and suppose the generators for $P,P'$ have the same local $e$th-power class at every place above $V$.

Let $B_{P,M},B_{P',M},B_{Q,M}$ be the resulting natural ramification sections, and let $M^D=\operatorname{Hom}(M,\mu_e)$. The following conditions are equivalent:

1. For every finite $G$-module $M$ killed by $e$ and every $m\in\operatorname{Hom}(\mu_e,M)^{D_P}$, the difference $B_{P,M}(m)-B_{P',M}(m)$ has zero restriction to the decomposition group at $Q$.
2. For every finite $G$-module $N$ killed by $e$ and every $n\in\operatorname{Hom}(\mu_e,N)^{D_Q}$, the unramified values $B_{Q,N}(n)(\operatorname{Frob}_P)$ and $B_{Q,N}(n)(\operatorname{Frob}_{P'})$ agree in the common Frobenius coinvariant group.

The condition is a reciprocity comparison under the explicit local-compatibility hypothesis; it does not assert the global symbol-realization or favored-twist distribution theorem.

## Statement references

[[thm-poitou-tate-exact-sequence-for-finite-modules]]

[[lem-smith-local-unramified-inertia-pairing]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.23](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the extension, auxiliary set, primes, generators, and local compatibility in the Statement.

[F1] The natural Kummer sections are unramified away from $V$ and their selected prime, have the stated inertia restriction there, and matching local $e$th-power classes make the two $P$-sections agree at $V$. [[lem-smith-kummer-section-from-approximate-generator]]

[F2] Poitou–Tate exactness makes the sum of local Tate pairings of two global finite-module classes vanish. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[F3] At an outside prime, unramified local classes on dual modules annihilate each other; the tame-inertia quotient pairs perfectly with the unramified dual subgroup by Frobenius evaluation, with the same convention at places whose actions agree. [[lem-unramified-local-tate-annihilators-prime-to-residue-characteristic]] [[lem-smith-local-unramified-inertia-pairing]]

## Proof

1.1 Fix $M$, put $N=M^D$, choose $m\in\operatorname{Hom}(\mu_e,M)^{D_P}$ and $n\in\operatorname{Hom}(\mu_e,N)^{D_Q}$, and set $$a=B_{P,M}(m)-B_{P',M}(m),\qquad b=B_{Q,N}(n).$$ By [F1], $a$ vanishes locally at $V$, is unramified outside $V\cup\{P,P'\}$, and has inertia restrictions $m$ and $-m$ at $P,P'$. The class $b$ is unramified outside $V\cup\{Q\}$ and has inertia restriction $n$ at $Q$. [F1, given, construct, algebra]

2.1 By [F2], the sum of local pairings of $a,b$ is zero. At $V$ each summand is zero because $a$ is locally zero, and outside $V\cup\{P,P',Q\}$ it is zero by the unramified annihilator statement in [F3]. The remaining three summands have one unramified argument. Using [F3] at all three places, and graded commutativity to interchange the order at $Q$, gives the identity $$\langle n,a(\operatorname{Frob}_Q)\rangle=\langle m,b(\operatorname{Frob}_P)-b(\operatorname{Frob}_{P'})\rangle.$$ The same Frobenius action and tame-root identification at $P,P'$ make the right-hand subtraction canonical. The pairings in the display are the perfect finite evaluation pairings of [F3]; the common local cup convention cancels from the equality. [F2, F3, step 1.1, given, algebra]

3.1 If condition 1 holds, the left side of step 2.1 is zero for every $M,m$ and $n$. For any $N,n$, choose $M=N^D$; the natural finite double-dual identification and perfectness in [F3] force the difference on the right to be zero, proving condition 2. Conversely, condition 2 makes the right side zero for every dual $N,n$, so perfectness at $Q$ forces the unramified local class of $a$ to be zero. This is condition 1. [F3, step 2.1, given, algebra] ∎
