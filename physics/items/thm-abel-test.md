---
id: thm-abel-test
kind: theorem
title: "Abel's test: if $\\sum a_k$ converges and $(b_k)$ is monotone and bounded then $\\sum a_k b_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, def-monotone-sequence, cor-monotone-converges-iff-bounded, lem-convergent-implies-bounded, lem-series-linearity, thm-algebra-of-limits, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Abel's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%27s_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals. If $\sum a_k$ converges
([[def-series]]) and $(b_k)$ is monotone ([[def-monotone-sequence]]) and bounded,
then $\sum a_k b_k$ converges, and its sum is

$$\sum_{k=0}^{\infty} a_k b_k \;=\; \Bigl(\sum_{k=0}^{\infty} a_k (b_k - b)\Bigr) + b \sum_{k=0}^{\infty} a_k, \qquad b := \lim_k b_k ,$$

the limit $b$ existing because a monotone bounded sequence converges
([[cor-monotone-converges-iff-bounded]]).

Compared with [[thm-dirichlet-test]] the hypotheses trade places: there $\sum a_k$
need only have bounded partial sums while $(b_k)$ must tend to $0$; here
$\sum a_k$ must converge while $(b_k)$ need only be monotone with *some* limit.
Neither test implies the other.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals with $\sum a_k$ convergent and $(b_k)$ monotone and bounded, and the partial sums $A_n = \sum_{k<n} a_k$ ([[def-series]]).

[L1] A monotone sequence of reals converges if and only if it is bounded ([[cor-monotone-converges-iff-bounded]]).

[L2] Monotone means nondecreasing or nonincreasing, and these are the only two possibilities ([[def-monotone-sequence]]).

[L3] A convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then $\sum(x_k + y_k)$ converges to the sum of the sums, and $\sum c\,x_k$ converges to $c$ times the sum ([[lem-series-linearity]]).

[L6] Algebra of limits: a convergent sequence minus a constant converges to the limit minus that constant, and multiplying a convergent sequence by $-1$ negates the limit ([[thm-algebra-of-limits]], [[def-real-limit]]).

## Proof

**Proof technique:** cases.

1.1 Assume $(b_k)$ is nonincreasing. [assume-case noninc]

1.2 Assume instead $(b_k)$ is nondecreasing. [assume-case nondec]

1.3 In either case $(b_k)$ is monotone and bounded, so it converges; write $b$ for its limit and put $c_k := b_k - b$, a sequence converging to $0$. [given, L1, L6]

1.4 The series $\sum a_k$ converges, so its partial sums $A_n$ form a convergent sequence and are therefore bounded. [given, L3]

2.1 In the case where $(b_k)$ is nonincreasing, $(c_k)$ is nonincreasing as well, since it differs from $(b_k)$ by the constant $b$. [step 1.1, step 1.3, L2]

2.2 In the case where $(b_k)$ is nondecreasing, $(-c_k)$ is nonincreasing and converges to $0$. [step 1.2, step 1.3, L2, L6]

3.1 In the nonincreasing case, $(A_n)$ is bounded and $(c_k)$ is nonincreasing with limit $0$, so $\sum a_k c_k$ converges by Dirichlet's test. [step 1.4, step 2.1, L4]

3.2 In the nondecreasing case, $(A_n)$ is bounded and $(-c_k)$ is nonincreasing with limit $0$, so $\sum a_k(-c_k)$ converges by Dirichlet's test; multiplying by the constant $-1$, $\sum a_k c_k$ converges. [step 1.4, step 2.2, L4, L5]

4.1 So in both cases $\sum a_k c_k$ converges; and $\sum b\,a_k$ converges, being a constant multiple of the convergent $\sum a_k$. [step 3.1, step 3.2, L5]

5.1 Since $a_k b_k = a_k c_k + b\,a_k$ for every $k$, the series $\sum a_k b_k$ converges, with sum $\sum_{k=0}^{\infty} a_k c_k + b \sum_{k=0}^{\infty} a_k$, which is the displayed formula. [step 1.3, step 4.1, L5]

6.1 A monotone sequence is nonincreasing or nondecreasing and there is no third possibility, so the two cases cover every hypothesis of the theorem. [step 5.1, L2, cases-exhaustive] ∎

## Remarks

- **Both monotonicity directions have to be handled, and only one of them is Dirichlet's hypothesis.** [[thm-dirichlet-test]] requires a *nonincreasing* factor tending to $0$. For a nondecreasing bounded $(b_k)$ the shifted sequence $b_k - b$ is nondecreasing and nonpositive, so it is $b - b_k$ that Dirichlet's test accepts, and the sign is absorbed afterwards by linearity. Dirichlet's test could equally have been stated with "monotone" in place of "nonincreasing", since the two forms are equivalent for a factor tending to $0$ ([[thm-dirichlet-test]], remarks); the proof below takes the nonincreasing form as given and does the sign bookkeeping explicitly, which is why both directions appear.

- **Boundedness of $(b_k)$ is used twice.** Once through [[cor-monotone-converges-iff-bounded]] to produce the limit $b$, and then implicitly in the decomposition $b_k = (b_k - b) + b$, which would name nothing if the limit did not exist. Monotone and *unbounded* is one of the two cases the theorem excludes; the other is bounded and *not* monotone, and it is that one the companion counterexample to Abel's test on the examples page settles, by showing that dropping monotonicity alone already destroys the conclusion.

- **The hypothesis on $\sum a_k$ cannot be weakened to bounded partial sums.** With $a_k = (-1)^k$ and $b_k = 1$ the partial sums of $\sum a_k$ are bounded and $(b_k)$ is monotone and bounded, yet $\sum a_k b_k = \sum (-1)^k$ diverges. What Dirichlet's test adds in that situation is the hypothesis $b_k \to 0$, which fails here.
