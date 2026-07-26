---
id: thm-kummer-test
kind: theorem
title: "Kummer: for positive terms $a_k$ and weights $\\zeta_k > 0$, $\\liminf(\\zeta_k a_k/a_{k+1} - \\zeta_{k+1}) > 0$ gives convergence, and if $\\sum 1/\\zeta_k$ diverges while that expression is eventually $\\le 0$ the series diverges"
status: draft
origin: session
deps: [def-series, thm-direct-comparison-test, def-limsup-liminf, lem-limsup-exists, lem-telescoping-series, def-monotone-sequence, thm-monotone-convergence, def-extended-reals, lem-extended-reals-complete, lem-series-tail-invariance, lem-series-linearity, thm-induction-principle, lem-of-inverse-positive, def-bounded-set, thm-geometric-series, lem-power-laws, def-integer-power, lem-nth-term-test]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(\zeta_k)$ be sequences of reals with

$$a_k > 0 \quad \text{and} \quad \zeta_k > 0 \qquad \text{for every } k \in \mathbb{N},$$

and define **Kummer's expression**

$$K_k \;:=\; \zeta_k \frac{a_k}{a_{k+1}} \;-\; \zeta_{k+1} \qquad (k \in \mathbb{N}),$$

a sequence of reals whose limit inferior exists in $\overline{\mathbb{R}}$
([[lem-limsup-exists]]). Then:

1. if $\liminf_{k} K_k > 0$ then $\sum a_k$ converges;
2. if $\sum 1/\zeta_k$ diverges and $K_k \le 0$ for all $k$ from some index on,
   then $\sum a_k$ diverges.

**Positivity of $(a_k)$ is load bearing and is not a normalisation.** Claim 2 is
FALSE for terms of mixed sign, and the failure is not delicate: see the first
remark below, where a convergent geometric series with negative ratio satisfies
every hypothesis of claim 2 with the weights $\zeta_k = 1$.

The two claims specialise to the ratio test at $\zeta_k = 1$ and to Raabe's test
at $\zeta_k = k+1$; those two corollaries follow immediately below, and they are
the only ways this theorem is used on this page.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(\zeta_k)$ of reals with $a_k > 0$ and $\zeta_k > 0$ for every $k$; Kummer's expression $K_k = \zeta_k a_k/a_{k+1} - \zeta_{k+1}$; the auxiliary sequence $b_k := \zeta_k a_k$, which is positive; and the tail infima $i_n = \inf\{K_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, so that $\liminf_k K_k = \sup\{i_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there ([[lem-extended-reals-complete]]). In particular a real $u$ below $\sup\{i_n\}$ is not an upper bound of $\{i_n\}$; $i_n$ is a lower bound of $\{K_k : k \ge n\}$; and $i_n \le K_n$, so $i_n$ is not $+\infty$.

[L2] Both limit quantities exist for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] A nonincreasing sequence bounded below converges ([[thm-monotone-convergence]], [[def-monotone-sequence]], [[def-bounded-set]]); consecutive comparisons suffice to establish monotonicity ([[def-monotone-sequence]]).

[L4] $\sum (x_k - x_{k+1})$ converges whenever $(x_k)$ converges ([[lem-telescoping-series]]).

[L5] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L6] For $c \ne 0$, $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]); and a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

[L7] The principle of induction ([[thm-induction-principle]]); and $1/x > 0$ for $x > 0$, with $x \le y$ implying $1/y \le 1/x$ for positive $x, y$ ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\liminf_k K_k > 0$. The real $0$ is then not an upper bound of $\{i_n\}$, so there is $N \in \mathbb{N}$ with $i_N > 0$. [given, L1, L2, choose]

1.2 Suppose now that $\sum 1/\zeta_k$ diverges and that there is $N$ with $K_k \le 0$ for every $k \ge N$. [given]

2.1 Since $i_N \le K_N$ and $i_N > 0$, the value $i_N$ is a real number; put $c := i_N > 0$, so that $K_k \ge c$ for every $k \ge N$. [step 1.1, L1]

2.2 Multiplying $K_k \le 0$ by $a_{k+1} > 0$ gives $\zeta_k a_k \le \zeta_{k+1} a_{k+1}$, that is $b_k \le b_{k+1}$, for every $k \ge N$. [step 1.2, given, algebra]

3.1 Multiplying $K_k \ge c$ by $a_{k+1} > 0$ gives $\zeta_k a_k - \zeta_{k+1} a_{k+1} \ge c\,a_{k+1}$, that is $b_k - b_{k+1} \ge c\,a_{k+1} > 0$, for every $k \ge N$. [step 2.1, given, algebra]

3.2 An induction on $j$ gives $b_{N+j} \ge b_N$ for every $j \in \mathbb{N}$: at $j = 0$ it is an equality, and if it holds at $j$ then $b_{N+j+1} \ge b_{N+j} \ge b_N$. [step 2.2, L7]

4.1 Hence $b_{N+j} \ge b_{N+j+1}$ for every $j \in \mathbb{N}$, so the tail sequence $(b_{N+j})_{j}$ is nonincreasing; and it is bounded below by $0$, every $b_k$ being positive. [step 3.1, given, L3]

4.2 So $\zeta_m a_m \ge b_N > 0$ for every $m \ge N$, and dividing by $\zeta_m > 0$ gives $a_m \ge b_N \cdot (1/\zeta_m) > 0$. [step 3.2, given, L7]

5.1 Therefore $(b_{N+j})_{j}$ converges, and by the telescoping lemma $\sum_{j} \big(b_{N+j} - b_{N+j+1}\big)$ converges. [step 4.1, L3, L4]

5.2 Since $\sum 1/\zeta_k$ diverges and $b_N \ne 0$, the series $\sum b_N (1/\zeta_k)$ diverges. [step 1.2, step 4.2, L6]

6.1 By step 3.1 we have $0 \le c\,a_{N+j+1} \le b_{N+j} - b_{N+j+1}$ for every $j$, so $\sum_{j} c\,a_{N+j+1}$ converges by comparison, and since $c \ne 0$ so does $\sum_{j} a_{N+j+1}$. [step 3.1, step 5.1, L5, L6]

7.1 That last series is the $(N+1)$-th tail series of $\sum a_k$, so $\sum a_k$ converges, which is claim 1. [step 6.1, L6]

8.1 If $\sum a_k$ converged then, since $0 \le b_N(1/\zeta_m) \le a_m$ for $m \ge N$, comparison would make $\sum b_N(1/\zeta_k)$ converge, contradicting step 5.2; so $\sum a_k$ diverges, which is claim 2. [step 4.2, step 5.2, L5] ∎

## Remarks

- **Claim 2 fails for terms of mixed sign, and here is the witness.** Take $\zeta_k = 1$ for every $k$ and $a_k = (-1/2)^{k}$. Then $a_k / a_{k+1} = 1/(-1/2) = -2$ ([[lem-power-laws]], [[def-integer-power]]), so $K_k = -2 - 1 = -3 \le 0$ at every index; and $\sum 1/\zeta_k = \sum 1$ diverges, its terms not tending to $0$ ([[lem-nth-term-test]]). Both hypotheses of claim 2 hold. Yet $\sum (-1/2)^{k}$ converges, with sum $2/3$, since $|-1/2| < 1$ ([[thm-geometric-series]]). The conclusion therefore fails, and what fails with it is exactly step 2.2, which multiplied an inequality by $a_{k+1}$ and needed that factor to be positive. The classical signed witness at $\zeta_k = 1$ is $a_k = (-1)^{k}/k$, whose hypotheses check the same way; its convergence is the alternating series test, which this page does not prove, and that is why the geometric witness is the one used here.

- **The weights are a free parameter, and that is the point of the theorem.** Kummer's test is not a single criterion but a family of them, one for each positive sequence $(\zeta_k)$, and the strength of the resulting test is exactly the strength of the divergent comparison series $\sum 1/\zeta_k$ it carries. Constant weights give the ratio test, weights $k+1$ give Raabe's test, and the pattern continues past what this page can state, since the next natural choice needs the logarithm.

- **Claim 1 does not need $\sum 1/\zeta_k$ to diverge.** The convergence half uses only positivity of the weights, through the telescoping bound in step 5.1. The divergence half is where the weights have to be tied to a known divergent series, and that asymmetry is why the two halves are not mirror images.
