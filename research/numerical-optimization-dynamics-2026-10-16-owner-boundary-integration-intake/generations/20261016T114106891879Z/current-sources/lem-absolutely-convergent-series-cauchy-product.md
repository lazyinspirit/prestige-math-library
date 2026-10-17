---
id: lem-absolutely-convergent-series-cauchy-product
kind: lemma
title: Cauchy products of absolutely convergent series multiply their sums
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, lem-real-and-complex-modulus-rules]
sources:
  references:
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §2.6.4, Theorem 2.6.5"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

Let $\sum_{n\ge0}a_n=A$ and $\sum_{n\ge0}b_n=B$ be absolutely convergent
real series. Define
$$
c_n=\sum_{j=0}^n a_jb_{n-j}.
$$
Then $\sum_{n\ge0}c_n$ converges absolutely and has sum $AB$. Thus the
product of the two series can be grouped by total degree without changing
its sum.

## Facts & Assumptions

**Given:** A Dedekind-complete ordered field and two absolutely convergent
series.

[F1] [[def-complete-ordered-real-field]]: every nonempty bounded-above set
has a least upper bound.

[L1] [[lem-real-and-complex-modulus-rules]]: $|xy|=|x||y|$ and the triangle
inequality holds.

## Proof

1.1 Put $A_0=\sum_{n\ge0}|a_n|$ and $B_0=\sum_{n\ge0}|b_n|$. For every $N$, the finite triangle inequality and [L1] give $$\sum_{n=0}^N|c_n| \le\sum_{j+\ell\le N}|a_j||b_\ell| \le\left(\sum_{j=0}^N|a_j|\right) \left(\sum_{\ell=0}^N|b_\ell|\right) \le A_0B_0.$$ These partial sums are increasing and bounded, so [F1] gives their supremum $S$. For any $\varepsilon>0$, some partial sum exceeds $S-\varepsilon$, since otherwise $S-\varepsilon$ would be an upper bound; monotonicity then puts every later partial sum between $S-\varepsilon$ and $S$. Hence $\sum c_n$ converges absolutely. [given, F1, L1, algebra]

2.1 Let $A_N=\sum_{j=0}^N a_j$, $B_N=\sum_{\ell=0}^N b_\ell$, and $C_N=\sum_{n=0}^N c_n=\sum_{j+\ell\le N}a_jb_\ell$. The difference $A_NB_N-C_N$ is the sum over pairs $0\le j,\ell\le N$ with $j+\ell>N$. For each such pair, $j>N/2$ or $\ell>N/2$, so by [L1] $$|A_NB_N-C_N| \le B_0\sum_{j>N/2}|a_j|+A_0\sum_{\ell>N/2}|b_\ell|\longrightarrow0.$$ Absolute convergence makes both tails tend to zero. The convergent sequence $A_N$ is bounded: beyond some index $|A_N-A|<1$, and the finitely many earlier values have a finite maximum absolute value. Therefore $$ |A_NB_N-AB|\le |A_N||B_N-B|+|B||A_N-A|\longrightarrow0. $$ Together with $|A_NB_N-C_N|\to0$, this gives $C_N\to AB$. Thus the sum of the Cauchy product is $AB$, proving the claim. [given, L1, step 1.1, algebra] ∎

