---
id: thm-bpi-equivalent-to-boolean-filter-extension
kind: theorem
title: BPI is equivalent to extending proper Boolean filters
status: draft
origin: pipeline
deps: [def-boolean-prime-ideal-principle, lem-boolean-quotient-congruence, lem-generated-boolean-filter-and-ultrafilter-tests]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.3.3 (prime-filter duality); local quotient proof of the ZF equivalence"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

Over ZF, BPI is equivalent to each of the following: every proper Boolean ideal is contained in a prime ideal; every proper Boolean filter is contained in an ultrafilter.

## Facts & Assumptions

[F1] [[def-boolean-prime-ideal-principle]] states BPI for nontrivial Boolean algebras.

[F2] [[lem-boolean-quotient-congruence]] gives the quotient homomorphism with kernel the specified ideal.

[F3] [[lem-generated-boolean-filter-and-ultrafilter-tests]] gives the complement correspondence between prime ideals and ultrafilters, and the order-dual correspondence between proper ideals and proper filters.

## Proof

**Given:** ZF, with BPI assumed only in the forward implications.

1.1 Let $I$ be a proper ideal of $B$. By F2 its quotient map $q:B\to B/I$ has kernel $I$, so $q(1)\ne q(0)$ because $1\notin I$. BPI therefore provides a prime ideal $J$ in $B/I$. The inverse image $q^{-1}(J)$ contains $I$, is downward and join closed by monotonicity and join preservation, contains $0$ and excludes $1$. If $a\wedge b$ is in it, then $q(a)\wedge q(b)\in J$, so primality of $J$ gives $a$ or $b$ in the inverse image. This proves prime extension. [F1, F2, algebra]

2.1 For a proper filter $F$, let $I=\{\neg f:f\in F\}$, a proper ideal by F3. Step 1.1 gives a prime ideal $J\supseteq I$. The ultrafilter $U=B\setminus J$ contains $F$: for $f\in F$, $\neg f\in J$ precludes $f\in J$ because $J$ is proper. Thus BPI also gives filter extension. [F3, step 1.1, algebra]

3.1 Conversely, if prime extension holds, apply it to the proper ideal $\{0\}$ of any nontrivial $B$ to get BPI. If filter extension holds instead, apply it to the proper filter $\{1\}$ and use F3 to take the complement of the resulting ultrafilter. Trivial algebras have neither proper ideals nor proper filters and are excluded by F1. No infinite family of choices is made in any implication. QED. [F1, F3, algebra]
