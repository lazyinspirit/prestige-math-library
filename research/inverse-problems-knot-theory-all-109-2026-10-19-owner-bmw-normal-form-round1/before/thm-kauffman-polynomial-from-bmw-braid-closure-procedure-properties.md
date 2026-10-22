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

For every admissible input consisting of an integer $n\ge1$ and a finite signed Artin braid word with indices $1\le i<n$, the BMW braid-closure algorithm terminates after finitely many algebra and skein reductions and returns exactly
$$-(-1)^c a^{-w}d^{n-1}\tau_n(\beta).$$
Here $w$ is the determinant writhe of the oriented closure, $c$ its component count, and $\tau_n$ is the normalized scalar closure trace. This theorem asserts no parser behavior for invalid inputs and no asymptotic complexity bound.

## Statement references

[[alg-kauffman-polynomial-from-bmw-braid-closure|BMW braid-closure algorithm]]

[[lem-bmw-markov-trace-stabilization|Normalized closure trace]]

[[lem-framed-kauffman-link-evaluation|Scalar Dubrovnik recursion and terminal values]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** An admissible finite signed braid word and the deterministic closure-evaluation recursion in the algorithm.

[F1] The input word has finitely many letters, and multiplying its corresponding BMW generators is a finite operation ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F2] The scalar closure trace is defined by $d^{-n}P$, and $P$ has the skein, curl, and free-circle rules ([[lem-bmw-markov-trace-stabilization]], [[lem-framed-kauffman-link-evaluation]]).

[F3] A crossing switch is expressed by one skein term and two smoothings, each smoothing deleting the chosen crossing; the chosen switch decreases the finite count of non-descending crossings, and descending closures reduce to curls and free circles ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F4] For each fixed $n$, the matching tangles form a finite basis of the tangle skein algebra ([[lem-bmw-descending-tangle-spanning]], [[lem-bmw-closure-pairing-independence]]).

[F5] The BMW generators map multiplicatively to the crossing and cup-cap tangle generators ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]], [[def-dubrovnik-tangle-skein-algebra]]).

## Proof

1.1 The generator product in [F1] has one factor for each input letter, so construction of $b_\beta$ terminates after the finite word length many multiplications. For fixed $n$, [F4] gives a finite basis of $N=(2n-1)!!$ matching tangles, and the number of generator matrices and trace entries is finite. [F1, F4, algebra]

1.2 For one reduction input $D$, order the pair $(r(D),b(D))$ lexicographically, where $r$ is its crossing count and $b$ its number of bad crossings. If $r=0$ or $b=0$, no further skein recursion is needed: the diagram is crossingless or descending and reduces by [F2] to a matching tangle, with a finite curl/circle evaluation for a closure. This is the base case. [F2, F3, F4, base]

1.3 Assume by strong induction that every reducer input with smaller pair terminates. At a chosen bad crossing, the switch branch preserves $r$ and lowers $b$ by one, while each of the two smoothing branches lowers $r$ by one; hence every child has smaller pair. Each node has at most three children, so well-founded induction gives a finite reduction tree for every column and every closed trace entry. [F2, F3, ih, induction]

2.1 The finite matrix products therefore give the coordinates of $\Phi_n(b_\beta)$, and pairing with the trace row yields $d^{-n}P(\widehat{\Phi_n(b_\beta)})=\tau_n(b_\beta)$. Since the closure is nonempty, $D=P/d=d^{n-1}\tau_n(b_\beta)$; applying the conversion [F2] gives exactly $-(-1)^c a^{-w}d^{n-1}\tau_n(b_\beta)$. Only powers of the units $a,d$ are inverted, so no division by $z$ occurs. [F2, F5, step 1.1, step 1.2, step 1.3, discharge-induction: step 1.3] ∎
