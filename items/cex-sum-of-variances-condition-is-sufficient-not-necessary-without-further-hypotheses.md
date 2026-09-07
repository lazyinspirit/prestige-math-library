---
id: cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses
title: "Summable untruncated variances are not necessary"
kind: counterexample
status: published
origin: pipeline
deps: ["cor-first-borel-cantelli-lemma-for-events", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "thm-countable-product-of-probability-spaces", "thm-p-series-real-exponents", "def-almost-sure-convergence-of-a-random-series"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Borel\u2013Cantelli Lemma 3.4, pp. 58\u201359; Theorem 3.12 fixed-truncation conditions, pp. 66\u201368, direct counterexample"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Sum P(X_n!=0)=sum n^-2<infinity gives only finitely many nonzero terms a.s.; nevertheless the variance sum diverges. This repairs the design deterministic witness, which has zero variances and cannot prove the claim."
---

## Statement refuted

It is false that almost-sure convergence of a series of independent centered square-integrable variables forces summability of their untruncated variances. Assume countable choice and dependent choice. Let $X_1=0$ and for $n\ge2$ take independent $X_n$ with
$$\mathbb P(X_n=n)=\mathbb P(X_n=-n)=\frac1{2n^2},\qquad \mathbb P(X_n=0)=1-\frac1{n^2}.$$
Then $\sum_nX_n$ converges absolutely almost surely, although $\mathbb EX_n=0$ and $\operatorname{Var}(X_n)=1$ for every $n\ge2$.

## Facts & Assumptions

[F1] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If $\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$ then $\mathbb P(A_n\ \mathrm{i.o.})=0.$ No independence hypothesis is needed.

[F2] [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]: Under the measure of thm-countable-product-of-probability-spaces, the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

[F3] [[thm-countable-product-of-probability-spaces]]: Assume countable choice and dependent choice. For probability spaces $(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure $\mu$ on $\mathcal C_{\mathbb N}$ such that, for every finite $F$, its $F$-coordinate marginal is $\bigotimes_{n\in F}\mu_n$.

[F4] [[thm-p-series-real-exponents]]: For every real $p$, $\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$

[F5] [[def-almost-sure-convergence-of-a-random-series]]: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in def-almost-sure-convergence-of-random-variables. With $S_0=0$ from def-partial-sums-and-sample-means, its convergence event is $C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$ This is exactly the real Cauchy condition, with the indexing of thm-series-cauchy-criterion shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event gives $\mathbb P(C)\in\{0,1\}$. Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable and thm-arithmetic-and-lattice-operations-preserve-measurability make $S$ measurable. For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

## Counterexample

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice take the countable product of these finite probability spaces. The specified masses are nonnegative and sum to one; its independent coordinates have the desired laws. For $n\ge2$, direct finite expectation gives $\mathbb EX_n=0$ and $\mathbb EX_n^2=n^2(1/n^2)=1$, hence variance $1$. The first coordinate is zero. [F3, F2, given, algebra]

2.1 The sum $\sum_{n\ge2}\mathbb P(X_n\ne0)=\sum_{n\ge2}n^{-2}$ is finite. The first Borel–Cantelli lemma gives only finitely many nonzero terms almost surely. On that event the absolute sum is a finite sum of finite numbers, hence finite, and the original partial sums converge. But their untruncated variance sum is $\sum_{n\ge2}1=\infty$. The example has no uniform bound on all summands. [F4, F1, F5, step 1.1, algebra] ∎
