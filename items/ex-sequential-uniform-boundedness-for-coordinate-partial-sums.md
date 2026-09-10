---
id: ex-sequential-uniform-boundedness-for-coordinate-partial-sums
kind: example
title: "Coordinate partial sums on c_0"
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
deps: [thm-sequential-uniform-boundedness-under-countable-choice, def-c-zero-and-ell-infinity, cor-cauchy-reals-lub-complete, def-banach-space, def-bounded-linear-operator, def-operator-norm, def-linear-combination-and-span, rem-real-and-complex-normed-space-convention, lem-complex-conjugation-and-modulus-laws, def-axiom-schema-of-replacement]
justified_by: []
forward_refs: []
external_refs: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lin and Rodriguez, MIT 18.102 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Let $\mathbb K=\mathbb R$ or $\mathbb C$ and $X=c_0(\mathbb K)$ with the supremum norm and coordinates indexed by $\mathbb N=\{0,1,\ldots\}$. Define $(e_j)_i=1$ if $i=j$ and $0$ otherwise. For $N\ge0$ put
$$P_Nx=\sum_{j=0}^N x_je_j.$$
Then $X$ is Banach, each $P_N:X\to X$ is bounded linear, $P_Nx\to x$ for each $x\in X$, and $\|P_N\|=1$ for every $N\ge0$. These assertions are choice-free. Under $\mathrm{AC}_\omega$, the sequential uniform boundedness theorem also supplies a qualitative uniform bound.

## Facts & Assumptions

**Given:** The specified field, space, coordinate vectors, and finite truncations.

[F1] $c_0$ consists of bounded null sequences, with coordinatewise operations and the supremum norm ([[def-c-zero-and-ell-infinity]]).

[F2] Every nonempty bounded-above set of reals has a supremum ([[cor-cauchy-reals-lub-complete]]); applying this to negatives also supplies infima of nonempty bounded-below sets.

[F3] Complex norms use the modulus; norm-metric completeness has the same meaning over either scalar field ([[rem-real-and-complex-normed-space-convention]]). Modulus is definite, multiplicative, and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F4] Replacement forms the image of a set under a uniquely specified assignment ([[def-axiom-schema-of-replacement]]).

[F5] A normed space is Banach if every norm-Cauchy sequence converges in it ([[def-banach-space]]).

[F6] Finite vector sums start at the zero vector and append one summand at each successor ([[def-linear-combination-and-span]]).

[F7] A linear map with a bound $\|Tx\|\le C\|x\|$ is bounded ([[def-bounded-linear-operator]]).

[F8] The norm of a bounded operator is its unit-ball supremum ([[def-operator-norm]]).

[F9] Under $\mathrm{AC}_\omega$, a pointwise bounded sequence from a Banach space to a normed space has uniformly bounded operator norms ([[thm-sequential-uniform-boundedness-under-countable-choice]]).

## Verification

1.1 We first prove scalar completeness from the real supremum property. A real Cauchy sequence $(a_m)$ is bounded: take $M$ with $|a_m-a_M|<1$ for $m\ge M$ and successively take the larger of $|a_M|+1$ and each of $|a_0|,\ldots,|a_{M-1}|$. This finite process produces a bound $B$. Each tail has a unique infimum $b_N=\inf\{a_m:m\ge N\}$ in $[-B,B]$, and $L=\sup\{b_N:N\in\mathbb N\}$ exists. Given $\eta>0$, take $M$ with $|a_l-a_m|<\eta$ for $l,m\ge M$. For fixed $m\ge M$ and every $N\ge M$, all terms in the $N$-tail are in $[a_m-\eta,a_m+\eta]$, so its nonempty tail has infimum in that same interval. For $N<M$, $b_N\le b_M\le a_m+\eta$. Thus $a_m-\eta\le b_M\le L\le a_m+\eta$. Using $\eta=\varepsilon/2$ proves $a_m\to L$. If two scalar limits differed by $d>0$, sufficiently late terms within $d/3$ of both would give $d<2d/3$ by triangle inequality. Hence the limit is unique. [F2, algebra]

1.2 Each $e_j$ is a null sequence of norm one. Computing each coordinate in the finite sum gives $(P_Nx)_i=x_i$ for $i\le N$ and $(P_Nx)_i=0$ for $i>N$: when $i\le N$ the sole nonzero contribution is $x_i(e_i)_i=x_i$, and otherwise every contribution is zero. This calculation follows directly from appending the summands in the recursive finite sum. Thus $P_Nx$ is eventually zero and lies in $c_0$. At each coordinate, $P_N(ax+by)_i=a(P_Nx)_i+b(P_Ny)_i$, so $P_N$ is linear. Also $|(P_Nx)_i|\le\|x\|_\infty$ for all $i$, hence $\|P_Nx\|_\infty\le\|x\|_\infty$ and $P_N$ is bounded. [F1, F6, F7, given, algebra]

2.1 For $z=a+ib$, the modulus formula yields $|a|,|b|\le|z|\le|a|+|b|$: the first inequalities follow from $a^2,b^2\le a^2+b^2$, and the last from $(|a|+|b|)^2=a^2+b^2+2|a||b|\ge a^2+b^2$, comparing nonnegative squares. Therefore the real and imaginary parts of a complex Cauchy sequence are real Cauchy sequences. Their unique limits $a,b$ from step 1.1 give complex limit $a+ib$, since the modulus of the difference is bounded by the sum of the two coordinate errors. The scalar triangle inequality again proves uniqueness. [F3, step 1.1, algebra]

2.2 The estimate in step 1.2 bounds the unit-ball image by $1$. Since $P_Ne_0=e_0$ and $\|e_0\|_\infty=1$, this image contains $1$ as a norm value. Its supremum is therefore exactly $\|P_N\|=1$ for every $N\ge0$, including the one-coordinate projection $P_0$. Also $P_N0=0$. [F8, step 1.2, algebra]

2.3 The coordinate formula gives $\|P_Nx-x\|_\infty=\sup_{j>N}|x_j|$. Given $\varepsilon>0$, take $J$ with $|x_j|<\varepsilon/2$ for $j\ge J$. For $N\ge J$ the tail supremum is at most $\varepsilon/2<\varepsilon$, proving $P_Nx\to x$. If $x$ already vanishes beyond $J$, the error is exactly zero for $N\ge J$. [F1, step 1.2, algebra]

3.1 Let $(x^{(m)})$ be any norm-Cauchy sequence in $c_0$. For each fixed $j$, $|x^{(m)}_j-x^{(l)}_j|\le\|x^{(m)}-x^{(l)}\|_\infty$, so the coordinate sequence is scalar Cauchy and has a unique limit $x_j$. Replacement applied on $\mathbb N$ to the unique pair $(j,x_j)$ produces a set of these pairs, the graph of a function $x:\mathbb N\to\mathbb K$. This uses unique existence, not a choice of witnesses from non-singleton sets. [F1, F4, step 1.1, step 2.1]

4.1 If $\|x^{(m)}-x^{(l)}\|_\infty<\eta$ for $m,l\ge M$, then for fixed $m\ge M$ and $j$, the scalar triangle inequality gives $|x^{(m)}_j-x_j|\le\eta+|x^{(l)}_j-x_j|$. Since the last term tends to zero, $|x^{(m)}_j-x_j|\le\eta$; a positive excess would be contradicted by making that term smaller than half the excess. Taking $\eta=1$ and one such $m$ gives $|x_j|\le\|x^{(m)}\|_\infty+1$ for every $j$, so $x$ is bounded. All subsequent suprema are legitimate by the real supremum property. Thus for general $\eta$ the uniform coordinate bound implies $\|x^{(m)}-x\|_\infty\le\eta$ for $m\ge M$. Taking $\eta=\varepsilon/2$ proves norm convergence in the bounded-sequence space. [F1, F2, F3, step 3.1, algebra]

5.1 Given $\varepsilon>0$, take one $m$ with $\|x-x^{(m)}\|_\infty<\varepsilon/2$, and then $J$ with $|x^{(m)}_j|<\varepsilon/2$ for $j\ge J$, since $x^{(m)}\in c_0$. For such $j$, $|x_j|\le|x_j-x^{(m)}_j|+|x^{(m)}_j|<\varepsilon$. Hence $x\in c_0$, and the arbitrary Cauchy sequence converges in $c_0$. This proves $c_0$ is Banach over both fields. The choices here concern a single given $\varepsilon$; no simultaneous selection is used. [F1, F3, F5, step 4.1, algebra]

6.1 Under $\mathrm{AC}_\omega$, apply the sequential theorem with domain and codomain $c_0$: step 5.1 proves the domain Banach, step 1.2 supplies bounded linear maps and the pointwise bound $M_x=\|x\|_\infty$. Its conclusion is a finite common bound for the $\|P_N\|$. Step 2.2 has already computed that bound as $1$ without any choice principle, and step 2.3 proves the promised convergence. [F9, step 5.1, step 1.2, step 2.2, step 2.3] ∎

## Remarks

This concrete example is library-generated. The local completeness proof develops the coordinate-limit method in [MIT 18.102 notes, Theorem 16 and following $c_0$ exercise, printed pp.5–6](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf); those notes leave the $c_0$ case as an exercise. Neither a general basis theorem nor another examples page supplies a premise here.
