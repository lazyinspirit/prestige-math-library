---
id: lem-digital-shift-marginals-and-net-preservation
kind: lemma
title: "Digital shifts preserve net counts and uniform marginals"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-digital-shift-randomization
  - def-lambda-t-net
  - lem-countable-iid-baseb-digits-from-one-uniform
  - thm-dynkin-pi-lambda
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.6"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5.2"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Statement

Let $a_1,\ldots,a_n$ be a $(\lambda,t,m,d)$-net in base $b$ and apply the
digital shift of [[def-digital-shift-randomization]]. Each shifted point is
uniform on $[0,1)^d$ and, with probability one, the shifted array remains a
$(\lambda,t,m,d)$-net.

## Facts & Assumptions

**Given:** The net and the independent digit shifts in the digital-shift definition.

[F1] [[def-lambda-t-net]]: The net has exactly $\lambda b^t$ points in every base-$b$ elementary interval of total digit depth $m-t$.

[F2] [[def-digital-shift-randomization]]: Every input digit is shifted modulo $b$ by one uniform digit shared across all points in its coordinate and digit position.

[F3] [[lem-countable-iid-baseb-digits-from-one-uniform]]: The shift digits are mutually independent and uniform on $\{0,\ldots,b-1\}$.

[F4] [[thm-dynkin-pi-lambda]]: Agreement on a generating $\pi$-system extends to agreement of the corresponding probability measures on all Borel sets.

[F5] [[lem-geometric-sequence-null]]: Since $0<1/b<1$, $b^{-L}\to0$ as $L\to\infty$.

## Proof

**Proof technique:** direct.

**Given:** $b,d,m,t,\lambda$, the $(\lambda,t,m,d)$-net, and the random shift digits.

1.1 For a fixed point and coordinate, adding an independent uniform digit modulo $b$ makes the output digit uniform; the output digits are independent because the shift digits at distinct positions are independent. Thus every prescribed output prefix of length $K$ has probability $b^{-K}$. For each $m\ge1$, the event that every output digit from position $m$ onward is $b-1$ is contained, for every $L\ge1$, in the event that its first $L$ tail digits are all $b-1$, which has probability $b^{-L}$; [F5] makes that tail event null. Outside the countable union of these null events, each prefix places the numeric output in its corresponding half-open interval, not at its right endpoint. These intervals form a generating $\pi$-system, so [F4] extends the prefix probabilities to the uniform Borel law. The coordinate shift streams are independent, hence the same cylinder calculation for rectangles in $[0,1)^d$ gives each vector the uniform cube law. The half-open modification at output value $1$ changes only a null event. [F2, F3, F4, F5, given]

2.1 For any coordinate and depth $K$, adding a fixed digit word modulo $b$ is a bijection of the finite set of length-$K$ words. The full coordinatewise map is therefore a bijection of the depth-vector digit boxes. It permutes, without splitting, all boxes of total depth $m-t$, preserving their point counts. Outside the null expansion events in step 1.1 these digit boxes are exactly the numeric half-open elementary intervals, so [F1] gives the same count $\lambda b^t$ in each shifted box. [F1, F2, step 1.1]

3.1 Step 1.1 proves each shifted point uniform, and step 2.1 proves preservation of the net counts with probability one. [step 1.1, step 2.1] ∎
