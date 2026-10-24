---
id: thm-normal-form-for-the-word-quotient-model
kind: theorem
title: 'Every class in $W(X)/{\sim}$ contains exactly one reduced word'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-quotient-model-of-the-free-group, def-alphabet-words-and-reduction, prop-free-equivalence-is-an-equivalence-and-a-congruence, lem-formal-letters-act-by-permutations-on-reduced-words, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.2"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/reductions.html"
    - title: "Richard Elman, Lectures on Abstract Algebra, §18"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---

## Statement

Every class in $W(X)/{\sim}$ contains exactly one reduced word.

## Facts & Assumptions

**Given:** A set $X$, a word $w$ on $X\sqcup X^{-1}$, and its class $[w]\in W(X)/{\sim}$.

[F1] An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or $x^{-1}x$; a word is **reduced** if no elementary cancellation applies; and words are **freely equivalent** if one can be transformed into the other by finitely many elementary cancellations and their reverse insertions ([[def-alphabet-words-and-reduction]]).

[L1] For every reduced word $r$, one has $\Lambda_r(\varepsilon)=r$, and freely equivalent words induce the same permutation of the set of reduced words ([[lem-formal-letters-act-by-permutations-on-reduced-words]]).

[L2] If a property $P$ satisfies $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every natural number $n$, then $P(n)$ holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

[L3] Free equivalence is an equivalence relation, and if $w\sim w'$ and $v\sim v'$ then $wv\sim w'v'$ ([[prop-free-equivalence-is-an-equivalence-and-a-congruence]]).

## Proof

**Proof technique:** induction.

1.1 The empty word is reduced and freely equivalent to itself, establishing the existence claim for words of length zero. [base, F1]

1.2 Assume every word of length $n$ is freely equivalent to a reduced word, and write a word of length $n+1$ as $ua$ with $|u|=n$; by the induction hypothesis, $u\sim r$ for some reduced $r$, so the congruence property of [L3], applied with the one-letter word $a$ on the right, gives $ua\sim ra$. [ih, L3]

1.3 If reduced words $r$ and $s$ lie in the same class, then $r\sim s$, so [L1] gives $\Lambda_r=\Lambda_s$. [L1, given]

2.1 If $r$ is empty or its last letter is not $a^{-1}$, then $ra$ is reduced; otherwise $r=r'a^{-1}$ and one elementary cancellation carries $ra=r'a^{-1}a$ to the reduced word $r'$. Thus every word is freely equivalent to a reduced word. [step 1.2, F1, L2]

2.2 Applying the equal permutations of step 1.3 to the empty word gives $r=\Lambda_r(\varepsilon)=\Lambda_s(\varepsilon)=s$, because the construction in [L1] recovers every reduced word from $\varepsilon$. [step 1.3, L1]

3.1 Consequently every class $[w]$ contains at least one reduced representative. [step 2.1, given]

4.1 Step 3.1 gives existence and step 2.2 gives uniqueness, so each class contains exactly one reduced word. [step 3.1, step 2.2, discharge-induction] ∎

## Remarks

The same normal-form fact already occurs inside the proof of [[thm-reduced-words-form-the-free-group]], where invariance of a stack-reduction map proves it by a different route. The present Statement gives that fact a citable, model-specific form for $W(X)/{\sim}$; it is not a claim of mathematical novelty.
