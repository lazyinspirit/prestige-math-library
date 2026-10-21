---
id: thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties
kind: theorem
title: The BMW braid-closure algorithm terminates and returns its stated value
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-kauffman-polynomial-from-bmw-braid-closure
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-closure-of-a-geometric-braid
  - def-exponent-sum-of-a-braid
  - def-markov-conjugation-and-stabilization-moves
  - lem-bmw-markov-trace-stabilization
  - lem-bmw-descending-tangle-spanning
  - lem-bmw-closure-pairing-independence
  - lem-bmw-presentation-tangle-evaluation-is-well-defined
  - def-dubrovnik-tangle-skein-algebra
  - lem-framed-kauffman-link-evaluation
proof_strategy: induction
axiom_use: "Choice-free: the braid word, crossing set, and recursive branch tree are finite and well founded."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3 and 5.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 33–35: finite tangle skein evaluation and descending reductions"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: recursive Dubrovnik evaluation and conversion"
---

## Statement

For every finite ASCII input string, the BMW braid-closure algorithm parses the
form `n;ell;word`, where `n` and `ell` are canonical decimal natural numbers
(`0`, or a nonzero decimal digit followed by zero or more decimal digits), and
`word` is empty if $\ell=0$ or is exactly $\ell$ comma-separated tokens of the
form `i+` or `i-`, with `i` a canonical decimal natural number. There is no
whitespace or trailing character. It returns `REJECT` exactly when the string
fails this syntax, the parsed value of $\ell$ differs from the actual number of
letter tokens, the parsed strand count is $n=0$, or some letter index fails
$1\le i<n$. For every other input, the algorithm terminates after finitely
many basis-code searches, algebra operations, and skein reductions, and returns exactly
$$-(-1)^c a^{-w}d^{n-1}\tau_n(\beta).$$
Here $w$ is the determinant writhe of the oriented closure, $c$ is its
component count, and $\tau_n$ is the normalized scalar closure trace. No
asymptotic complexity bound is asserted.

## Statement references

[[alg-kauffman-polynomial-from-bmw-braid-closure|BMW braid-closure algorithm]]

[[lem-bmw-markov-trace-stabilization|Normalized closure trace]]

[[lem-framed-kauffman-link-evaluation|Scalar Dubrovnik recursion and terminal values]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** A finite ASCII input string and the deterministic closure-evaluation recursion in the algorithm.

[F1] The algorithm parses the exact input grammar, rejects its stated invalid cases, and on an accepted string gives a finite signed braid word ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F2] The scalar closure trace is defined by $d^{-n}P$, and $P$ has the skein, curl, and free-circle rules ([[lem-bmw-markov-trace-stabilization]], [[lem-framed-kauffman-link-evaluation]]).

[F3] A switch at the selected bad crossing preserves the crossing count and lowers the bad-crossing count by one; either smoothing lowers the crossing count by one. Descending tangles reduce to a standard matching, and descending closed diagrams evaluate by curls and free circles ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F4] For each fixed $n$, the matching tangles form a finite basis of the tangle skein algebra ([[lem-bmw-descending-tangle-spanning]], [[lem-bmw-closure-pairing-independence]]).

[F5] The BMW generators map multiplicatively to the crossing and cup-cap tangle generators ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]], [[def-dubrovnik-tangle-skein-algebra]]).

[F6] The Artin word generators are the positive geometric half twists; each contributes $+1$ to determinant writhe, its inverse contributes $-1$, the word exponent sum is their signed sum, and the closure components are the cycles of the strand permutation ([[def-markov-conjugation-and-stabilization-moves]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[def-exponent-sum-of-a-braid]], [[def-closure-of-a-geometric-braid]]).

## Proof

1.1 The first branch tests the exact grammar and then the listed count and index conditions. By [F1], it returns `REJECT` exactly for the stated invalid cases, and an accepted string gives a finite signed braid word. Parsing a finite string terminates. For fixed $n$, there are finitely many matching connectors. By [F4], each connector has a standard descending class. For each matching, draw its finitely many open strands as simple polygonal arcs in $R$ with the fixed rational endpoints. Choose their interior vertices in general position and approximate them sufficiently closely by rational coordinates, preserving the endpoints and avoiding self-crossings, tangencies, and triple points. Assign each crossing so that the earlier strand is over the later one. This gives a rational generic descending code for the connector, so Step 3’s ordered search has a witness and terminates. Step 5 uses the explicit rational closure arcs $C_j$ in the algorithm. For $j<k$, $x_j<x_k$ and $\epsilon_j>\epsilon_k$, so their exterior lanes are nested and disjoint; they meet $R$ only at the prescribed endpoints. Thus each trace entry is a finite closed diagram without a closure-code search. The number of basis tangles and generator matrices is finite. [F1, F4, construct, algebra]

1.2 For each reducer input $D$, the Step 4 traversal is determined by the endpoint labels, retained segment labels, and current crossing or smoothing pairings. Thus the crossing count $r(D)$ and bad-crossing count $b(D)$ are well defined. At a terminal input, the algorithm reduces a crossingless tangle to its matching, simplifies a descending tangle leaf, or evaluates a descending closed diagram by its curls and free circles using [F2]. At a selected bad crossing, [F3] shows that switching keeps $r$ fixed and lowers $b$ by one, while either smoothing lowers $r$ by one. Every recursive child therefore has a smaller lexicographic pair. [F2, F3, F4, base]

1.3 Assume by strong induction that every reducer input with smaller pair terminates. Each recursive node has at most three children, and by [F3] every child has a smaller pair than its parent. Well-founded induction therefore gives a finite reduction tree for every generator-matrix column and every closed trace entry. [F2, F3, ih, induction]

2.1 The recursive reductions apply the defining skein relation, and their terminal matching coordinates are unique by [F4]. Thus the finite matrix products give the coordinates of $\Phi_n(b_\beta)$ by [F5]. Pairing with the computed trace row yields $d^{-n}P(\widehat{\Phi_n(b_\beta)})=\tau_n(b_\beta)$ by [F2]. By [F6], the algorithm's $w,c$ are the determinant writhe and component count of this oriented closure. Its prescribed final multiplication is therefore exactly $-(-1)^c a^{-w}d^{n-1}\tau_n(b_\beta)$. Only powers of the units $a,d$ are inverted, so no division by $z$ occurs. [F2, F4, F5, F6, step 1.1, step 1.2, step 1.3, discharge-induction: step 1.3] ∎
