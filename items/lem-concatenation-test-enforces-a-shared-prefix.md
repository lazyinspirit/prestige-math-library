---
id: lem-concatenation-test-enforces-a-shared-prefix
kind: lemma
title: "Concatenation testing enforces the same decoded prefix"
status: draft
origin: pipeline
deps:
  - def-pcp-of-proximity-and-concatenation-test
  - def-walsh-hadamard-encoding-and-relative-distance
  - lem-random-subsum-detects-a-nonzero-binary-vector
  - def-self-correction-of-a-noisy-linear-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3, concatenation test and Corollary 18.26, printed pp. 368–369"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
---

## Statement

Let $0\le n\le N$, let $j:[n]\hookrightarrow[N]$ be a fixed injection, and
let $J_j:\mathbb F_2^n\to\mathbb F_2^N$ insert a vector's $k$th coordinate
at position $j(k)$ and put zero in every other coordinate. Write
$w|_j=(w_{j(1)},\ldots,w_{j(n)})$.

For the exact tables $\operatorname{WH}_n(a)$ and
$\operatorname{WH}_N(w)$, the two-query slice check on a uniform
$r\in\mathbb F_2^n$ compares their entries at $r$ and $J_j(r)$. It accepts
every mask if and only if $a=w|_j$; if $a\ne w|_j$, it rejects on exactly
half of the masks.

More generally, let fixed tables $\pi:\mathbb F_2^n\to\mathbb F_2$ and
$F:\mathbb F_2^N\to\mathbb F_2$ have relative distances
$\delta_1,\delta_2\in[0,1]$ from $\operatorname{WH}_n(a)$ and
$\operatorname{WH}_N(w)$. The four-query self-corrected slice check rejects
with probability at least
$$\frac12-2\delta_1-2\delta_2$$
whenever $a\ne w|_j$. The proof tables are fixed before the independent
uniform choices of masks and correction offsets. Both checks are nonadaptive;
the raw check uses two bit queries and the corrected check uses four,
counting repeated locations.

## Facts & Assumptions

**Given:** the fixed injection $j$, vectors $a,w$, and (for the robust bound) fixed tables $\pi,F$ at the stated distances.

[F1] The raw slice check compares the short table at $r$ with the longer table at its embedded coordinate. Its corrected form compares $\operatorname{Corr}_{\pi}(r;y)$ and $\operatorname{Corr}_{F}(J_j(r);Y)$ using independent uniform correction offsets. ([[def-pcp-of-proximity-and-concatenation-test]])

[F2] $\operatorname{WH}_k(v)$ is the truth table $x\mapsto v\cdot x$ on $\mathbb F_2^k$, and relative distance is normalized disagreement on that cube. ([[def-walsh-hadamard-encoding-and-relative-distance]])

[F3] For every nonzero $d$ and a uniform binary mask $r$ of the same dimension, $\Pr[r\cdot d=1]=1/2$. ([[lem-random-subsum-detects-a-nonzero-binary-vector]])

[F4] For a fixed table $h$, the corrector at $x$ chooses uniform $y$ and returns $h(y)+h(x+y)$. ([[def-self-correction-of-a-noisy-linear-function]])

## Proof

**Given:** fix $j,a,w$ and, where applicable, $\pi,F$ independently of all test randomness.

1.1 Define $J_j(r)$ by the stated coordinate insertion. Then $w\cdot J_j(r)=\sum_{k=1}^n w_{j(k)}r_k=(w|_j)\cdot r$ for every $r\in\mathbb F_2^n$. All query locations below are determined by $j$ and the sampled masks and offsets before any table answer is read. [F1, given, construct, algebra]

1.2 Fix any mask $r$. In the short-table correction, each of $y$ and $y+r$ is uniform on $\mathbb F_2^n$. Each queried value therefore differs from its corresponding codeword value with probability exactly $\delta_1$. A union bound shows that the corrected short value differs from $a\cdot r$ with probability at most $2\delta_1$. Likewise $Y$ and $Y+J_j(r)$ are each uniform on $\mathbb F_2^N$, so the corrected long value differs from $w\cdot J_j(r)$ with probability at most $2\delta_2$. These bounds hold conditional on every fixed $r$ and require no independence between the two errors within either correction. [F2, F4, given, algebra]

2.1 On the exact tables, the two queried bits are $a\cdot r$ and $(w|_j)\cdot r$ by [F2] and step 1.1. Their sum is $(a+w|_j)\cdot r$. If $a=w|_j$, this is zero for every mask, so every raw check accepts. If $a\ne w|_j$, their sum vector is nonzero and [F3] gives probability exactly $1/2$ that the two bits differ; hence exactly half the masks reject. This proves both directions of the asserted “accepts every mask iff” statement. [F2, F3, step 1.1, algebra]

2.2 Suppose $a\ne w|_j$. By [F3] and step 1.1, the ideal corrected values $a\cdot r$ and $w\cdot J_j(r)$ differ with probability exactly $1/2$. Conditional on each $r$, the probability that at least one corrected value is wrong is at most $2\delta_1+2\delta_2$ by step 1.2. Whenever the ideal values differ and neither correction errs, the actual test rejects. Subtracting the possible error event from the ideal disagreement event gives $$\Pr[\text{reject}]\ge\frac12-2\delta_1-2\delta_2.$$ This remains a valid lower bound if its right side is negative. [F3, step 1.1, step 1.2, algebra]

2.3 The raw test samples $n$ mask bits. The corrected test samples $r,y$ using $2n$ bits and $Y$ using $N$ bits, then makes the four queries listed in [F1]. Repeated query locations still count as calls, so the bounds hold for $n=0$ and for any coordinate coincidences. Since every query location is fixed before answers are obtained, both procedures are nonadaptive. [F1, step 1.1, given, algebra]

3.1 If $n=0$, both messages are the unique empty vector, $J_j(0)=0$, and $a=w|_j$ necessarily; the differing-slice case cannot occur. The raw exact tables both have value $0$ at their zero mask. The self-corrected short value is $\pi(0)+\pi(0)=0$, so the definition still makes sense with the singleton mask and table. If also $N=0$, the long correction is likewise a repeated query at the singleton coordinate. No positive-dimension assumption is needed. [F1, F2, F4, step 2.3, algebra]

4.1 Steps 2.1 and 2.2 prove the exact and noisy rejection claims; step 2.3 proves the query, randomness, and nonadaptivity bounds, including repeated locations; step 3.1 handles the zero-dimensional slice. Therefore the raw check accepts every mask exactly when the decoded slices agree and otherwise rejects on half the masks, while the corrected check has the stated rejection lower bound whenever they differ. [step 2.1, step 2.2, step 2.3, step 3.1, algebra] ∎

## Remarks

The injection may be the initial named block or the offset second block in [[def-pcp-of-proximity-and-concatenation-test]]. The same calculation applies to any fixed coordinate injection. No axiom of choice is used: the injection is given, and the nonzero-mask conclusion is the finite random-subsum lemma.
