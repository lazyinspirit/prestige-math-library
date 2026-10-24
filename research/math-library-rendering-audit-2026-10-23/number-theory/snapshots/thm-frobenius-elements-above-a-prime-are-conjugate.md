---
id: thm-frobenius-elements-above-a-prime-are-conjugate
title: "Frobenius elements above a prime are conjugate"
kind: theorem
status: published
origin: pipeline
deps: [thm-unramified-frobenius-element-exists-uniquely, thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Proposition 8.14; Stein Proposition 9.4.1"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

In a finite Galois extension L/K let the nonzero prime p be unramified. If $\sigma P=P'$ above p, then
$$\operatorname{Frob}_{P'}=\sigma\operatorname{Frob}_{P}\sigma^{-1}.$$
Thus p determines one conjugacy class. If the Galois group is abelian, the element is independent of P.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-unramified-frobenius-element-exists-uniquely]]: For finite Galois L/K and a nonzero prime $P\mid p$ with $e(P/p)=1$, there is a unique $\operatorname{Frob}_P\in D(P/p)$ satisfying $\operatorname{Frob}_P(a)\equiv a^{Np}\pmod P\qquad(a\in\mathcal O_L).$ It is the arithmetic Frobenius element, the unique lift of the arithmetic Frobenius coset.

[F2] [[thm-conjugacy-of-decomposition-and-inertia-groups]]: In finite Galois L/K, if $\sigma P=P'$ above a nonzero p, then $D(P'/p)=\sigma D(P/p)\sigma^{-1},\qquad I(P'/p)=\sigma I(P/p)\sigma^{-1}.$ The residue actions correspond under $\kappa(P)\to\kappa(P')$, $\bar a\mapsto\overline{\sigma a}$.

[F3] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

## Proof

1.1 Conjugation by sigma transports D(P/p) to D(P'/p) and its residue action through the isomorphism induced by sigma. A field isomorphism commutes with taking the q-th power, where $q=Np$. Hence the conjugate of $\operatorname{Frob}_P$ acts as that power map at P'. [F2]

2.1 Unramified Frobenius is uniquely characterized by this action, proving the formula. Transitivity says every prime P' above p is obtained in this way; conversely every sigma gives such a prime. The set of elements is therefore exactly a conjugacy class. In an abelian group conjugation fixes each element. [F1, F3, step 1.1] ∎
