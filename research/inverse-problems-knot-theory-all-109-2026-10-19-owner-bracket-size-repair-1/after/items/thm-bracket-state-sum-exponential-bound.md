---
id: thm-bracket-state-sum-exponential-bound
kind: theorem
title: "Bracket state-sum exponential bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-encoded-diagram-size-and-exact-output
  - alg-kauffman-bracket-state-sum
  - thm-kauffman-bracket-state-sum-procedure-properties
  - thm-exact-bracket-output-bit-growth-bound
  - thm-normalized-bracket-is-an-oriented-link-invariant
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The state enumeration, writhe scan, degree shift, and coefficient bound are choice-free. ACω is used only for the normalized-bracket ambient-link-invariance clause through thm-normalized-bracket-is-an-oriented-link-invariant."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
      locator: "§2, normalized bracket and state summation, PDF pp. 6–9."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §4.3, pp. 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§4.3, state set, state-sum formula, and the 2^c state count."
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §5.1, pp. 38–41"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§5.1, bracket skein formula, writhe correction, and Reidemeister invariance."
verification:
  precheck: pass
---

## Statement

Let $D$ be a nonempty oriented link diagram with $c$ crossings and $m\ge1$ components. The state-sum portion of the normalized bracket computation visits exactly $2^c$ smoothing states; computing the writhe correction requires one pass over the $c$ crossing signs. Its exact normalized output $f_D(A)=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$ has absolute Laurent degree at most $6c+2m-2$ and signed coefficient-bit size at most $m+2c+1$. For a knot diagram, these output bounds are linear in $c+1$.

Using the indexed endpoint-pairing input and dense signed binary-array
implementation of the exact bracket bit-growth theorem, together with the
$c$ crossing signs supplied as bits, the normalized bracket can be computed in
$O(2^c(c+m+1)^4)$ elementary bit steps. This is
$O(2^c(c+1)^4)$ for knots. Input records are assumed to describe the given
typed diagram; arbitrary literal-code reading and parsing, extra padding or
labels, and geometric-coordinate processing are outside this implementation
bound. The finite computations are choice-free. Under the Axiom of Countable
Choice, $f_D$ is an invariant of the ambient-isotopy class of the oriented
link. No polynomial-time Jones evaluation is asserted.

## Statement references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[[thm-exact-bracket-output-bit-growth-bound]]

[[thm-normalized-bracket-is-an-oriented-link-invariant]]

[[def-countable-choice]]

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Calegari, *Introduction to Knot Theory* (2025), §5.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Facts & Assumptions

**Given:** A nonempty regular oriented link diagram $D$ with $c$ crossings, $m\ge1$ components, and $A$ an indeterminate.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom of countable choice.

[F1] [[def-encoded-diagram-size-and-exact-output]]: the crossing count is $c$, the component count is $m$, and Laurent coefficient-bit size uses the signed-magnitude convention.

[F2] [[alg-kauffman-bracket-state-sum]]: every state contributes $A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1}$ to the exact Laurent polynomial.

[F3] [[thm-kauffman-bracket-state-sum-procedure-properties]]: the state-sum procedure visits exactly the $2^c$ smoothing assignments and returns the displayed bracket.

[F4] [[thm-exact-bracket-output-bit-growth-bound]]: the raw bracket has absolute Laurent degree at most $3c+2m-2$ and signed coefficient-bit size at most $m+2c+1$. Its specified indexed endpoint-pairing and dense binary-array implementation takes $O(2^c(c+m+1)^4)$ elementary bit steps, excluding arbitrary literal-code parsing.

[F5] [[thm-normalized-bracket-is-an-oriented-link-invariant]]: with crossing signs $\operatorname{sgn}(c)\in\{+1,-1\}$ and $\operatorname{wr}(D)=\sum_c\operatorname{sgn}(c)$, the normalization $(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$ is unchanged under oriented Reidemeister moves and is an ambient-link invariant under $\mathrm{AC}_\omega$.

## Proof

1.1 By [F3], the state-sum procedure visits every map from the $c$-element crossing set to $\{A,B\}$ exactly once, so it makes exactly $2^c$ state visits. The writhe is the sum of one sign from each of the $c$ crossings by [F5], so a direct scan computes it in one pass. These finite operations use no choice principle. [F2, F3, F5, given, construct]

1.2 Each crossing sign is $+1$ or $-1$, so $|\operatorname{wr}(D)|\le c$. Multiplication by $(-A^3)^{-\operatorname{wr}(D)}$ shifts every Laurent exponent of the raw bracket by $-3\operatorname{wr}(D)$ and multiplies coefficients only by a sign. Thus the absolute degree increases by at most $3c$, giving $6c+2m-2$ by [F4], while coefficient-bit size is unchanged and remains at most $m+2c+1$. For $m=1$ both bounds are linear in $c+1$. [F1, F4, F5, algebra]

2.1 Put $q=c+m+1$. By [F4], compute the raw bracket in $O(2^cq^4)$ bit steps in the specified representation. Summing the supplied sign bits uses an $O(\log(q+1))$-bit signed counter and $O(c\log(q+1))$ bit steps, rather than unit-cost unbounded arithmetic. The factor $(-A^3)^{-\operatorname{wr}(D)}$ has sign $(-1)^{\operatorname{wr}(D)}$ and exponent $-3\operatorname{wr}(D)$. Allocate a dense output array with exponents from $-6q$ to $6q$ and the same $O(q)$-bit signed coefficient slots as in [F4]. For each raw slot, copy its value to the position shifted by $-3\operatorname{wr}(D)$ and toggle the sign when necessary. There are $O(q)$ slots. Linear lookup or writing scans at most $O(q^2)$ tape cells per slot, including binary index counters, so even this naive normalization costs $O(q^3)$ bit steps. Step 1.2 ensures every shifted exponent and coefficient fits the array. This cost is absorbed in $O(2^cq^4)$, and for $m=1$ it is $O(2^c(c+1)^4)$. No arbitrary code parser or black-box arithmetic operation is assigned a false constant bit cost. [F1, F4, F5, step 1.2, construct, algebra]

3.1 Under [A1], [F5] identifies the normalized output with an invariant of the ambient-isotopy class of the oriented link. The state count, writhe pass, degree shift, coefficient estimate, and specified bit implementation in steps 1.1, 1.2, and 2.1 remain choice-free. The running-time estimate is exponential in the crossing count, and makes no polynomial-time Jones evaluation claim. [A1, F5, step 1.1, step 1.2, step 2.1] ∎

## Proof references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[[thm-exact-bracket-output-bit-growth-bound]]

[[thm-normalized-bracket-is-an-oriented-link-invariant]]

[[def-countable-choice]]
