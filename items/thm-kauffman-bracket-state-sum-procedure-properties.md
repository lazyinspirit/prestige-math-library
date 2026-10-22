---
id: thm-kauffman-bracket-state-sum-procedure-properties
kind: theorem
title: "Kauffman bracket state-sum procedure properties"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - alg-kauffman-bracket-state-sum
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the algorithm traverses a finite set of smoothing assignments."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §III, printed pp. 430–432"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §4.3, printed pp. 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.1"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement

Let $A$ be an indeterminate and let $D$ be a typed nonempty unoriented regular
link diagram with finite crossing set $C(D)$. At each crossing use the chart
with the over-strand southwest-to-northeast: A joins the left endpoints and the
right endpoints with weight $A$, while B joins the top endpoints and bottom
endpoints with weight $A^{-1}$. The Kauffman bracket state-sum algorithm
terminates after exactly $2^{|C(D)|}$ state visits and returns
$$\sum_{S:C(D)\to\{A,B\}}A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1},$$
where $a(S)$ and $b(S)$ count the two smoothing types and $|S|$ counts the
circles in the smoothed diagram. The algorithm takes a mathematical diagram
as input and makes no claim about parsing strings or rejecting malformed
encodings.

## Statement references

[[alg-kauffman-bracket-state-sum|Kauffman bracket state-sum algorithm]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §III](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.1](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** A typed nonempty unoriented regular link diagram $D$ with finite
crossing set $C(D)$.

[F1] The algorithm initializes $p=0$, visits once each function
$S:C(D)\to\{A,B\}$, adds $A^{a(S)-b(S)}\delta^{|S|-1}$, and returns the final
accumulator, with $\delta=-A^2-A^{-2}$
([[alg-kauffman-bracket-state-sum]]).

[F2] The input diagram has at least one closed component, so every complete
smoothing has at least one circle and every term is a Laurent polynomial
([[alg-kauffman-bracket-state-sum]]).

## Proof

1.1 If $c=|C(D)|$, every state is a function from a $c$-element set to a two-element set, so the state set has exactly $2^c$ elements. This is finite, including the case $c=0$, where there is exactly one empty assignment. The algorithm processes every such function once and has no other loop. [F1, construct]

2.1 For each visited state, the prescribed smoothing produces a finite crossingless union of circles. By [F2], $|S|-1$ is a nonnegative integer, so $A^{a(S)-b(S)}\delta^{|S|-1}$ is defined in $\mathbb Z[A^{\pm1}]$. After any initial segment of the visits, the accumulator is the sum of exactly the terms already visited, by induction on the number of updates. After all $2^c$ visits it is the displayed state sum, which is returned. Therefore execution terminates with exactly the asserted output. [F1, F2, step 1.1, induction, algebra] ∎
