---
id: ex-bochner-integral-of-a-countably-valued-function
kind: example
title: "Bochner integral of a countably valued function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-banach-valued-simple-function-and-integral, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-monotone-convergence-for-the-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-fa/fa.pdf"
      locator: "Section 11.6, formulas (11.40)--(11.44) and Lemma 11.28, printed pp. 332--333"
pipeline_run: phase-2-next-18
---

## Example

Let $(S,\mathcal A,\mu)$ be a measure space, let $X$ be a real or complex
Banach space, let $(A_n)_{n\geq1}$ be pairwise disjoint measurable sets, and
let $(x_n)_{n\geq1}$ be a sequence in $X$ such that

$$\sum_{n=1}^{\infty}\mu(A_n)\lVert x_n\rVert<\infty.$$

With the convention that the value is zero off $\bigcup_nA_n$, the pointwise
sum

$$f=\sum_{n=1}^{\infty}x_n\mathbf1_{A_n}$$

is Bochner integrable. Its integral, and more generally every restricted
integral, is the absolutely convergent vector series

$$\int_E f\,d\mu=\sum_{n=1}^{\infty}\mu(E\cap A_n)x_n\qquad(E\in\mathcal A).$$

As in the simple-integral definition, a term with $x_n=0$ is zero even when
$\mu(A_n)=\infty$.

## Facts & Assumptions

[L1] Integrable Banach-valued simple functions have the stated finite-sum
integral, and their integrals satisfy the norm inequality
([[def-banach-valued-simple-function-and-integral]],
[[lem-bochner-integral-norm-inequality]]).

[L2] A strongly measurable function with integrable norm is Bochner
integrable, and its integral is the limit obtained from any defining
$L^1$-simple approximation ([[thm-bochner-integrability-criterion]],
[[def-bochner-integrable-function]]).

[L3] Monotone convergence calculates integrals of increasing nonnegative
partial sums ([[thm-monotone-convergence-for-the-integral]]).

## Verification

**Proof technique:** direct.

**Given:** the measure space, Banach space, disjoint sets, vectors, and finite
weighted norm series in the Statement.

1.1 Form the finite simple approximants. [given, L1]
For $N\geq1$, put $s_N=\sum_{n=1}^Nx_n\mathbf1_{A_n}$. If $x_n\ne0$, the
finiteness of the displayed series forces $\mu(A_n)<\infty$; zero levels need
no finite-measure hypothesis. Thus every $s_N$ is an integrable simple
function in the precise sense of [L1]. Pairwise disjointness gives
$s_N(t)\to f(t)$ for every $t$: at most one summand is nonzero at any point.

2.1 Calculate the scalar approximation error. [given, L3, step 1.1]
Pointwise disjointness gives
$\lVert f-s_N\rVert=\sum_{n>N}\lVert x_n\rVert\mathbf1_{A_n}$.
Applying monotone convergence in [L3] to its finite partial sums yields

$$\int_S\lVert f-s_N\rVert\,d\mu=\sum_{n>N}\mu(A_n)\lVert x_n\rVert\longrightarrow0.$$

The same calculation with $N=0$ shows
$\int_S\lVert f\rVert=\sum_n\mu(A_n)\lVert x_n\rVert<\infty$.

3.1 Establish Bochner integrability and identify the unrestricted integral. [L1, L2, step 1.1, step 2.1]
The everywhere simple convergence in step 1.1 proves strong measurability, and
step 2.1 gives integrability of the norm. Hence [L2] makes $f$ Bochner
integrable. Moreover, $(s_N)$ is a defining $L^1$-simple approximation, so

$$\int_Sf\,d\mu=\lim_{N\to\infty}\int_Ss_N\,d\mu=\lim_{N\to\infty}\sum_{n=1}^N\mu(A_n)x_n.$$

This vector limit exists absolutely because the sum of the norms of its terms
is the assumed finite scalar series; completeness of $X$ is used here.

4.1 Calculate every restricted integral and audit the boundary cases. [L1, L2, step 2.1, step 3.1]
For measurable $E$, the functions $\mathbf1_Es_N$ approximate
$\mathbf1_Ef$ in $L^1$, since their error integral is at most the tail in
step 2.1. The simple calculation from [L1] therefore gives
$\int_Ef=\sum_n\mu(E\cap A_n)x_n$. If $E=\varnothing$, if every $A_n$ is
empty, or if every $x_n=0$, both sides are zero. A single nonzero level reduces
to the defining simple-function formula. Infinite-measure zero levels cause
no undefined product, while a nonzero level automatically has finite measure.
[given, L1, L2, step 1.1, step 2.1, step 3.1] ∎
