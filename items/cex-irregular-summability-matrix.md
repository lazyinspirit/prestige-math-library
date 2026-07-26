---
id: cex-irregular-summability-matrix
kind: counterexample
title: "A summability matrix failing exactly one Silverman-Toeplitz condition and transforming a convergent sequence to a divergent one"
status: draft
origin: session
deps: [thm-silverman-toeplitz, def-summability-matrix, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, lem-alternating-sequence, fs-bounded-implies-convergent, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, def-bounded-set, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a summability matrix whose columns tend to $0$ and whose row
sums tend to $1$ is regular; equivalently, the uniform bound on the row absolute
sums in [[thm-silverman-toeplitz]] is redundant.

The witness is the matrix with exactly two nonzero entries in each row,

$$c_{n,n} := -(n+1), \qquad c_{n,n+1} := n+2, \qquad c_{n,k} := 0 \text{ for } k \notin \{n, n+1\},$$

together with the null sequence $x_k := s_k/(k+1)$, where $(s_k)$ is the
alternating sequence of [[lem-alternating-sequence]]. Every column of $c$ is
eventually $0$; every row sum is exactly $1$; the row absolute sums are
$2n+3$ and are unbounded. The transform of $(x_k)$ is

$$y_n \;=\; -(n+1)\frac{s_n}{n+1} \;+\; (n+2)\frac{s_{n+1}}{n+2} \;=\; -s_n + s_{n+1} \;=\; -2 s_n,$$

which does not converge although $x_k \to 0$. So $c$ is not regular, and the
third condition of [[thm-silverman-toeplitz]] is not redundant.

## Facts & Assumptions

**Given:** The matrix $c$ above, the alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, and the sequence $x_k := s_k\,((k+1)\cdot 1_{\mathbb{R}})^{-1}$.

[L1] Summability matrices, the transform, row sums, row absolute sums and regularity ([[def-summability-matrix]], [[def-sequence]]); finite sums and their laws ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The Silverman-Toeplitz conditions and the theorem that they characterise regularity ([[thm-silverman-toeplitz]]).

[L3] The alternating sequence: $|s_k| = 1$, $s_{k+1} = -s_k$ ([[lem-alternating-sequence]]); it does not converge ([[fs-bounded-implies-convergent]]).

[L4] Convergence of real sequences ([[def-real-limit]]); a sequence that is eventually $0$ converges to $0$; the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]); no real bounds every canonical natural ([[thm-of-archimedean]], [[def-bounded-set]]).

[L5] Algebra of limits, in particular the scalar-multiple rule ([[thm-algebra-of-limits]]).

[L6] Order arithmetic: $(k+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| \ge 0$ and $|uv| = |u||v|$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $c$ is a summability matrix: row $n$ vanishes at every $k > n+1$, so $n+1$ is an admissible bound for row $n$. [L1]

1.2 Every column of $c$ converges to $0$: for fixed $k$, the entry $c_{n,k}$ is nonzero only when $n = k$ or $n + 1 = k$, so $c_{n,k} = 0$ for every $n \ge k+1$ and the column is eventually $0$. [L1, L4]

1.3 Every row sum is $1$: $\sum_k c_{n,k} = -(n+1) + (n+2) = 1$, so the row sums form the constant sequence $1$ and converge to $1$. [L1]

1.4 The row absolute sums are not bounded above: $\sum_k |c_{n,k}| = (n+1) + (n+2) = 2n+3$, and no real exceeds every canonical natural. [L1, L4, L6]

1.5 $(x_k)$ converges to $0$: $|x_k| = ((k+1)\cdot 1_{\mathbb{R}})^{-1}$, and given a real $\varepsilon > 0$ and a natural $m \ge 1$ with $1/m < \varepsilon$, every $k \ge m$ has $|x_k - 0| < \varepsilon$. [L3, L4, L6]

2.1 The transform of $(x_k)$ by $c$ is $y_n = c_{n,n}x_n + c_{n,n+1}x_{n+1} = -(n+1)\,s_n\,((n+1)\cdot 1)^{-1} + (n+2)\,s_{n+1}\,((n+2)\cdot 1)^{-1} = -s_n + s_{n+1} = -2s_n$. [step 1.1, step 1.5, L1, L3, L6]

3.1 $(y_n)$ does not converge: were $y_n \to M$, then $s_n = (-1/2)\,y_n$ would converge to $-M/2$ by the scalar-multiple rule, contradicting [L3]. [step 2.1, L3, L5]

4.1 So $c$ has null columns and row sums tending to $1$, yet transforms the convergent sequence $(x_k)$ into a divergent one and is therefore not regular; the claim is false, and by [[thm-silverman-toeplitz]] what fails is exactly the uniform bound on the row absolute sums, as step 1.4 confirms. [step 1.2, step 1.3, step 1.4, step 1.5, step 3.1, L1, L2] ∎

## Remarks

- **Exactly one condition fails**, and the counterexample is arranged so. The
  columns are eventually $0$ and the row sums are constantly $1$, so conditions
  1 and 2 of [[thm-silverman-toeplitz]] hold outright; only the uniform bound
  fails, and the failure is visible in a single line, $2n+3$ being unbounded.

- **How the failure is exploited.** The two entries of row $n$ are large and of
  opposite sign, so they nearly cancel on a slowly varying input and do not
  cancel at all on an alternating one. The input $x_k = s_k/(k+1)$ is chosen so
  that the large factors $n+1$ and $n+2$ exactly cancel the small factors
  $1/(n+1)$ and $1/(n+2)$, leaving the undamped oscillation $-2s_n$. That is the
  gliding hump of the necessity proof in
  [[thm-silverman-toeplitz]], in its simplest possible instance.

- **The failure is the stronger of the two possible ones.** A matrix can be
  irregular by changing a limit, for instance $c_{n,n} = 2$ and all other
  entries $0$, whose row sums tend to $2$ rather than $1$ and which sends
  $(x_k)$ to $(2x_k)$. The matrix above destroys convergence altogether.

- **Contrast with the Cesaro matrix**, whose rows are nonnegative and sum to $1$,
  so its row absolute sums are constantly $1$ and it is regular
  ([[cor-cesaro-matrix-is-regular]]). Uniform boundedness of the row absolute
  sums is what stops a weighting from amplifying, and it is the only one of the
  three conditions that is not tested by a single fixed input.
