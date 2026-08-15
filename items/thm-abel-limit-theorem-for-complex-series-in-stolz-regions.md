---
id: thm-abel-limit-theorem-for-complex-series-in-stolz-regions
kind: theorem
title: "Abel's limit theorem: a convergent complex series is recovered by its power series along every Stolz approach to 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-stolz-approach-region-at-one, lem-abel-summation-for-complex-series, thm-cauchy-hadamard-for-complex-power-series, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2, Theorem 3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

If the complex series $\sum_{n\ge0}a_n$ converges to $s$, then $F(z)=\sum_{n\ge0}a_nz^n$ converges for $|z|<1$ and
$$F(z)\longrightarrow s\qquad(z\to1)$$
whenever $z$ remains in one fixed Stolz region [[def-stolz-approach-region-at-one]]. In particular the conclusion holds for radial approach $z=r\uparrow1$.

## Facts & Assumptions

**Given:** A convergent complex series $\sum a_n=s$, its partial sums, and a fixed $C\ge1$.

[L1] Abel summation expresses a finite weighted sum in terms of partial sums and successive differences of the weights ([[lem-abel-summation-for-complex-series]]).

[L2] Cauchy–Hadamard gives convergence inside the radius and makes no boundary assertion ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L3] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Replace $a_0$ by $a_0-s$ and write $t_n=\sum_{k=0}^na_k$ for the adjusted partial sums; then $t_n\to0$, and it suffices to prove that the adjusted power series tends to $0$. [given, algebra]

1.2 For $|z|<1$, [L1] followed by passage to the limit gives $\sum_{n\ge0}a_nz^n=(1-z)\sum_{n\ge0}t_nz^n$: the endpoint term $t_Nz^N$ tends to $0$, and convergence follows from boundedness of $(t_n)$ and the geometric majorant, consistently with [L2]. [L1, L2, L3]

2.1 Given $\varepsilon>0$, choose $N$ with $|t_n|<\varepsilon/(2C)$ for $n\ge N$. In step 1.2 split the sum before $N$: the finite head times $1-z$ tends to $0$, while the tail has modulus at most $|1-z|\varepsilon(2C)^{-1}\sum_{n\ge N}|z|^n\le\varepsilon/2$ because $|1-z|/(1-|z|)\le C$ in the Stolz region. [step 1.2, L3, choose]

3.1 Thus the adjusted series tends to $0$, so the original tends to $s$. The point $z=1$ is used only as a limit endpoint, and radial approach is the case $C=1$. [step 1.1, step 2.1] ∎
