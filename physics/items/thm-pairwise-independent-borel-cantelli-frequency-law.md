---
id: thm-pairwise-independent-borel-cantelli-frequency-law
kind: theorem
title: "Pairwise-independent Borel-Cantelli frequency law"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pairwise-independence, prop-indicator-function-is-measurable-iff-its-set-is-measurable, cor-expectation-of-an-indicator-is-probability, thm-arithmetic-and-lattice-operations-preserve-measurability, cor-expectation-linearity-monotonicity-and-modulus-bound, lem-variance-and-covariance-identities-for-random-variables, cor-chebyshev-inequality-for-random-variables, cor-first-borel-cantelli-lemma-for-events]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.3.9"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(A_n)_{n\ge1}$ be pairwise independent events with
$$\sum_{n=1}^\infty \mathbb P(A_n)=+\infty.$$
For $n\ge1$, put
$$S_n:=\sum_{k=1}^n \mathbf 1_{A_k},\qquad a_n:=\sum_{k=1}^n \mathbb P(A_k).$$
Then $a_n>0$ for all sufficiently large $n$, and
for those $n$
Then
$$\frac{S_n}{a_n}\longrightarrow 1\qquad\text{almost surely.}$$

## Facts & Assumptions

**Given:** Pairwise independent events $(A_n)_{n\ge1}$ with $\sum_{n=1}^\infty \mathbb P(A_n)=+\infty$, and the sums $S_n,a_n$ of the Statement.

[L1] Pairwise independence means $$\mathbb P(A_i\cap A_j)=\mathbb P(A_i)\mathbb P(A_j)\qquad(i\ne j).$$ ([[def-pairwise-independence]])

[L2] An indicator of a measurable event is a real random variable, and its expectation is the probability of the event. ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]], [[cor-expectation-of-an-indicator-is-probability]])

[L3] Finite sums, products, and absolute values of measurable real-valued functions are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L4] Expectation is linear on integrable random variables, and $$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$$ for square-integrable real random variables. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[lem-variance-and-covariance-identities-for-random-variables]])

[L5] Chebyshev's inequality bounds the probability of a centered deviation by variance divided by the square threshold. ([[cor-chebyshev-inequality-for-random-variables]])

[L6] If a sum of event probabilities is finite, then the corresponding limsup event has probability zero. ([[cor-first-borel-cantelli-lemma-for-events]])

## Proof

**Proof technique:** direct.

1.1 For each $k$, the indicator $\mathbf 1_{A_k}$ is a real random variable by [L2]. Repeated use of [L4] and [L2] gives $$\mathbb E[S_n]=\sum_{k=1}^n\mathbb E[\mathbf 1_{A_k}]=\sum_{k=1}^n\mathbb P(A_k)=a_n.$$ The divergence hypothesis makes $a_n\to+\infty$. In particular, there is $N \ge 1$ with $a_n>0$ for every $n \ge N$. [given, L2, L4]

2.1 For $i\ne j$, step 1.1 and [L1] give $$\mathbb E[\mathbf 1_{A_i}\mathbf 1_{A_j}]=\mathbb E[\mathbf 1_{A_i\cap A_j}]=\mathbb P(A_i\cap A_j)=\mathbb P(A_i)\mathbb P(A_j)=\mathbb E[\mathbf 1_{A_i}]\,\mathbb E[\mathbf 1_{A_j}].$$ Also $\mathbf 1_{A_k}^2=\mathbf 1_{A_k}$ for every $k$. [step 1.1, L1, L2, algebra]

3.1 By [L3], the partial sum $S_n$ and its square $S_n^2$ are measurable. Expanding $S_n^2$ and using step 2.1 together with linearity from [L4] yields $$\mathbb E[S_n^2]=\sum_{k=1}^n\mathbb P(A_k)+2\sum_{1\le i<j\le n}\mathbb P(A_i)\mathbb P(A_j)=a_n^2+\sum_{k=1}^n\bigl(\mathbb P(A_k)-\mathbb P(A_k)^2\bigr)\le a_n^2+a_n.$$ So $S_n$ is square-integrable, and [L4] gives $$\operatorname{Var}(S_n)=\mathbb E[S_n^2]-\mathbb E[S_n]^2\le a_n.$$ [step 1.1, step 2.1, L3, L4, algebra]

4.1 Fix $\varepsilon>0$ and $n \ge N$. Applying [L5] to $S_n$ gives $$\mathbb P\left(\left|\frac{S_n}{a_n}-1\right|\ge\varepsilon\right)=\mathbb P\left(|S_n-a_n|\ge\varepsilon a_n\right)\le\frac{\operatorname{Var}(S_n)}{\varepsilon^2a_n^2}\le\frac{1}{\varepsilon^2a_n}.$$ Hence $S_n/a_n\to1$ in probability along the defined tail $n \ge N$. [step 1.1, step 3.1, L5, algebra]

5.1 For each integer $m\ge1$, let $n_m$ be the least index with $a_{n_m}\ge a_1+m^2$; it exists by step 1.1. Since $a_{n_m-1}<a_1+m^2 \le a_{n_m}$ and $a_{n_m}-a_{n_m-1}=\mathbb P(A_{n_m})\le1$, one has $$a_1+m^2 \le a_{n_m} < a_1+m^2+1.$$ Therefore step 4.1 yields $$\mathbb P\left(\left|\frac{S_{n_m}}{a_{n_m}}-1\right|\ge\varepsilon\right)\le\frac{1}{\varepsilon^2(a_1+m^2)},$$ and the sum over $m$ is finite. [step 1.1, step 4.1, algebra]

6.1 For each integer $r\ge1$, step 5.1 with $\varepsilon=1/r$ gives $$\sum_{m=1}^\infty \mathbb P\left(\left|\frac{S_{n_m}}{a_{n_m}}-1\right|\ge\frac1r\right)<+\infty.$$ Applying [L6] to these deviation events shows that, for each $r$, only finitely many of them occur almost surely. [step 5.1, L6]

7.1 Intersect the full-probability events from step 6.1 over all $r\in\mathbb N_{>0}$. On that still full-probability event, for every $r$ there is $M_r(\omega)$ such that $$\left|\frac{S_{n_m}(\omega)}{a_{n_m}}-1\right|<\frac1r\qquad(m\ge M_r(\omega)).$$ Hence $S_{n_m}/a_{n_m}\to1$ almost surely. [step 6.1, algebra]

8.1 Fix $\omega$ in the full-probability event from step 7.1. If $n_m\le n<n_{m+1}$, then $S_{n_m}(\omega)\le S_n(\omega)\le S_{n_{m+1}}(\omega)$ and $a_{n_m}\le a_n<a_{n_{m+1}}$, so $$\frac{S_{n_m}(\omega)}{a_{n_{m+1}}}\le\frac{S_n(\omega)}{a_n}\le\frac{S_{n_{m+1}}(\omega)}{a_{n_m}}.$$ Since $a_{n_m}/a_{n_{m+1}} \to 1$ and $a_{n_{m+1}}/a_{n_m}\to1$ by the bounds in step 5.1, step 7.1 squeezes $S_n(\omega)/a_n$ to $1$. Therefore $S_n/a_n\to1$ almost surely for all sufficiently large $n$, equivalently for all $n$ with $a_n>0$. [step 5.1, step 7.1, algebra]

9.1 Step 8.1 is exactly the asserted frequency law. [step 8.1] ∎
