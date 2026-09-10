---
id: thm-choice-implies-boolean-prime-ideal-principle
kind: theorem
title: AC implies BPI
status: draft
origin: pipeline
deps: [def-boolean-prime-ideal-principle, lem-generated-boolean-filter-and-ultrafilter-tests, def-axiom-of-choice, thm-zorn]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.2.11, pp. 7–8"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

Assume AC. Every proper Boolean filter has a maximal proper extension. Consequently BPI holds.

## Facts & Assumptions

[F1] [[def-axiom-of-choice]] is assumed.

[F2] [[thm-zorn]] gives a maximal element of a nonempty poset in which every chain has an upper bound, under AC.

[F3] [[lem-generated-boolean-filter-and-ultrafilter-tests]] identifies maximal proper filters with ultrafilters and their complements with prime ideals.

[F4] [[def-boolean-prime-ideal-principle]] defines BPI on nontrivial algebras.

## Proof

**Given:** AC, a Boolean algebra $B$ and a proper filter $F$ in $B$.

1.1 Let $P$ consist of the proper filters $G\supseteq F$, ordered by inclusion. This is a set of subsets of $B$ and inclusion is reflexive, antisymmetric and transitive. It is nonempty because $F\in P$. The empty chain has upper bound $F$. [given, algebra]

2.1 For a nonempty chain $\mathcal C\subseteq P$, put $G=\bigcup\mathcal C$. It contains $F$ and $1$ and excludes $0$. If $a\in G$ and $a\le b$, a member containing $a$ also contains $b$. If $a,b\in G$, two chain members witnessing this are comparable, so one contains both and their meet. Thus $G\in P$ and bounds the chain. [step 1.1, algebra]

3.1 Apply F2, with AC supplied by F1 and its poset hypotheses checked in steps 1.1 and 2.1, to obtain a maximal $U\in P$. Every proper filter extending $U$ also extends $F$ and belongs to $P$, so maximality in $P$ is maximal properness in $B$. This application of Zorn is the use of AC. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For a nontrivial $B$, start with the proper filter $\{1\}$; step 3.1 gives an ultrafilter whose complement is a prime ideal by F3. This is BPI by F4. For the trivial algebra there is no proper initial filter and BPI makes no existence demand. QED. [F3, F4, step 3.1, algebra]
