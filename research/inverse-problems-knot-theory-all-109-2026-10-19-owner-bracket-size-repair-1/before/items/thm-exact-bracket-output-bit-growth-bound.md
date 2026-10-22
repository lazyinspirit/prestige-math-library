---
id: thm-exact-bracket-output-bit-growth-bound
kind: theorem
title: "Exact bracket output bit-growth bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-encoded-diagram-size-and-exact-output
  - alg-kauffman-bracket-state-sum
  - thm-kauffman-bracket-state-sum-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the state set is finite, each loop-factor expansion is a finite binomial sum, and all coefficient bounds use finite addition."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
      locator: "§2, bracket state definition and state summation, PDF pp. 6–9."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §4.3, pp. 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§4.3, Proposition 4.3.4 and proof by resolving crossings in order."
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §5.1, pp. 38–40"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§5.1, bracket skein definition and unlink values."
verification:
  precheck: pass
---

## Statement

Let $D$ be a nonempty unoriented regular link diagram with $c$ crossings and $m\ge1$ components, and let $\langle D\rangle=\sum_j z_jA^j$ be its exact Kauffman bracket. Its Laurent exponents satisfy $|j|\le 3c+2m-2$, and its signed-magnitude coefficient-bit size, as defined in the encoded diagram size definition, is at most $m+2c+1$. Consequently, a knot diagram ($m=1$) has Laurent degree and coefficient-bit size bounded linearly in $c+1$. These are exact-output size bounds; they do not assert a running-time bound for arbitrary-precision polynomial arithmetic.

## Statement references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Calegari, *Introduction to Knot Theory* (2025), §5.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Facts & Assumptions

**Given:** A nonempty unoriented regular link diagram $D$ with $c$ crossings and $m\ge1$ components.

[F1] [[def-encoded-diagram-size-and-exact-output]]: $c$ is the crossing count, $m$ is the component count, and a Laurent coefficient $z$ has signed-magnitude bit length $1+\lceil\log_2(|z|+1)\rceil$ when $z\ne0$.

[F2] [[alg-kauffman-bracket-state-sum]]: the bracket term of a state $S$ is $A^{a(S)-b(S)}\delta^{|S|-1}$ with $\delta=-A^2-A^{-2}$; $a(S)+b(S)=c$, and $|S|$ is the number of circles after smoothing.

[F3] [[thm-kauffman-bracket-state-sum-procedure-properties]]: the state-sum procedure visits exactly the $2^c$ maps from the crossing set to $\{A,B\}$ and returns the displayed sum.

## Proof

1.1 The state set has exactly $2^c$ elements by [F3]. A complete smoothing starts with $m$ circles. At each crossing the four local endpoints lie on one or two current circles, and either smoothing reconnects them into one or two circles. Thus the circle count increases by at most one at each of the $c$ smoothings. Every state has $1\le |S|\le m+c$. [F2, F3, construct]

2.1 For a fixed state, put $r=|S|-1$, so $0\le r\le m+c-1$. The binomial theorem gives $\delta^r=(-1)^r\sum_{k=0}^r\binom{r}{k}A^{2r-4k}$. These exponents are distinct, so its coefficient l1 norm is $\sum_{k=0}^r\binom{r}{k}=2^r$; multiplication by the monomial $A^{a(S)-b(S)}$ only shifts the exponents. [F2, step 1.1, algebra]

2.2 Since $a(S)+b(S)=c$, one has $|a(S)-b(S)|\le c$. The exponents in $\delta^r$ lie between $-2r$ and $2r$. Using $r\le m+c-1$, every exponent in every state term, and thus in the sum, has absolute value at most $c+2(m+c-1)=3c+2m-2$. [F2, step 1.1, algebra]

3.1 Summing over all $2^c$ states, the l1 norm of the final coefficient sequence is at most the sum of the state-term l1 norms, hence at most $2^c2^{m+c-1}=2^{m+2c-1}$. Every individual coefficient therefore has absolute value at most $2^{m+2c-1}$. [F3, step 2.1, algebra]

4.1 Let $M=m+2c\ge1$. By step 3.1, a nonzero coefficient $z_j$ satisfies $|z_j|\le2^{M-1}$, so $|z_j|+1\le2^M$ and $\ell_{\mathbb Z}(z_j)=1+\lceil\log_2(|z_j|+1)\rceil\le M+1=m+2c+1$. The support lies in at most $6c+4m-3$ integer exponents by step 2.2, so storing the exact polynomial as a dense coefficient array takes $O((c+m)^2)$ bits. For a knot, $m=1$, giving degree at most $3c$ and coefficient-bit size at most $2c+2$, both linear in $c+1$. The finite argument uses no choice principle. [F1, step 3.1, step 2.2, algebra] ∎

## Proof references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]
