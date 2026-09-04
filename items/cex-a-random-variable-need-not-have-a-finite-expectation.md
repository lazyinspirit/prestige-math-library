---
id: cex-a-random-variable-need-not-have-a-finite-expectation
kind: counterexample
title: "A random variable need not have a finite expectation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement refuted

Every real random variable has a finite expectation.

## Facts & Assumptions

**Given:** The set $\Omega=\mathbb N_{\ge1}$ with its power-set sigma-algebra,
the weights $p_n=1/(n(n+1))$, and the coordinate map $X(n)=n$.

[L1] Expectation of a nonnegative random variable is allowed to take the value
$+\infty$ ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] The integral of a nonnegative simple function is its weighted level-set
sum, and monotone convergence passes increasing nonnegative limits through the
integral ([[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[thm-monotone-convergence-for-the-integral]]).

## Counterexample

**Proof technique:** direct.

1.1 Define $$\mathbb P(A):=\sum_{n\in A}p_n\qquad(A\subseteq\Omega).$$ The total mass is $$\sum_{n=1}^\infty \frac{1}{n(n+1)}=\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)=1.$$ If $(A_j)_{j\ge0}$ is pairwise disjoint, regrouping the nonnegative series gives $$\mathbb P\!\left(\bigcup_{j\ge0}A_j\right)=\sum_{j\ge0}\sum_{n\in A_j}p_n=\sum_{j\ge0}\mathbb P(A_j).$$ Thus $\mathbb P$ is a probability measure on the power set of $\Omega$, and $X(n)=n$ is a measurable real random variable. [given, construct, algebra]

2.1 Put $X_N:=X\mathbf 1_{\{1,\dots,N\}}$. The functions $X_N$ increase pointwise to $X$. By [L1], [L2], and monotone convergence, $$\mathbb E[X]=\lim_{N\to\infty}\mathbb E[X_N]=\lim_{N\to\infty}\sum_{n=1}^N n\frac{1}{n(n+1)}=\sum_{n=1}^\infty \frac1{n+1}=+\infty.$$ Thus the expectation exists only as an extended value, not as a finite real number, exactly as [L1] allows. [L1, L2, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 refute the claim that every random variable has finite expectation. [step 1.1, step 2.1] ∎
