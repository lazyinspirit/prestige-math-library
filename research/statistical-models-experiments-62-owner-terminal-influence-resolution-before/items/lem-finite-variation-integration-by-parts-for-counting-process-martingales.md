---
id: lem-finite-variation-integration-by-parts-for-counting-process-martingales
kind: lemma
title: "Finite-variation integration by parts for counting-process martingales"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-optional-and-predictable-brackets-for-counting-processes
  - def-bounded-variation-and-total-variation
  - thm-cauchy-schwarz-finite
  - thm-heine-cantor-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.4, PDF pp. 4–6"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
    - title: "Lu Tian, STAT331 Unit 9: Some Key Results for Counting Process Martingales, PDF p. 12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf"

---

## Statement

Let $x:[0,T]\to\mathbb R$ be càdlàg (right-continuous with left limits) and of finite total variation. For any
deterministic partitions $\pi_n$ of $[0,T]$ with mesh tending to zero, and
each fixed $t\le T$, put $\Delta_j^n x(t)=x_{t\wedge t_{j+1}^n}-x_{t\wedge t_j^n}$.
Then
$$\sum_j(\Delta_j^n x(t))^2\longrightarrow [x]_t:=\sum_{0<s\le t}(\Delta x_s)^2,$$
and the left-endpoint sums satisfy
$$\sum_jx_{t\wedge t_j^n}\,\Delta_j^n x(t)\longrightarrow\frac{x_t^2-x_0^2-[x]_t}{2}.$$

## Facts & Assumptions

**Given:** A càdlàg real path of finite variation on $[0,T]$, the jump-sum convention for $[x]$, and deterministic partitions whose mesh tends to zero.

[F1] For finite-variation càdlàg paths, $[x]_t$ is the absolutely convergent jump-square sum. ([[def-optional-and-predictable-brackets-for-counting-processes]])

[F2] Finite total variation bounds every finite sum of absolute increments and the absolute jump sum. ([[def-bounded-variation-and-total-variation]])

[F3] A continuous real function on the compact interval $[0,T]$ is uniformly continuous. ([[thm-heine-cantor-metric]])

[F4] Finite Cauchy–Schwarz bounds the absolute inner product of two finite real lists by the product of their Euclidean norms. ([[thm-cauchy-schwarz-finite]])

## Proof

1.1 Let $J_t=\sum_{0<s\le t}\Delta x_s$; [F2] makes this an absolutely convergent jump sum, and each omitted tail is uniformly bounded by its total absolute sum, so finite jump partial sums converge uniformly to a path $J$; right continuity passes by an $\varepsilon/3$ estimate, and their left limits are Cauchy under the uniform tail bound, so completeness of $\mathbb R$ gives left limits for $J$. Absolute convergence gives $\Delta J_s=\Delta x_s$. Therefore $x^c:=x-J$ is continuous and of finite variation. For every $m$, only finitely many jumps have size at least $1/m$ because their absolute sum is bounded by [F2], so the nonzero jumps are countable and their absolute series has a finite tail. Choose a finite retained jump sum $z$ with omitted jump tail $r:=J-z$ satisfying $\operatorname{Var}(r)_T<\varepsilon$, and set $y=x-r=x^c+z$. By [F3], the continuous part has squared-increment sum at most $\omega_{x^c}(\|\pi_n\|)\operatorname{Var}(x^c)_T\to0$, where $\omega_{x^c}(\delta):=\sup_{|u-v|\le\delta}|x^c_u-x^c_v|$; sufficiently fine partitions separate the finitely many retained jump times, so $\sum_j(\Delta_j^n y(t))^2$ tends to the sum of their squared jumps, with cross terms between each retained jump and the continuous increment in its partition cell tending to zero by the same modulus. [F1, F2, F3, given, construct]

2.1 For every partition, expansion of squares and [F4] give $|\sum_j(\Delta_j^n x(t))^2-\sum_j(\Delta_j^n y(t))^2|\le2\operatorname{Var}(y)_T\operatorname{Var}(r)_T+\operatorname{Var}(r)_T^2\le2\operatorname{Var}(x)_T\varepsilon+3\varepsilon^2$, since $\operatorname{Var}(y)_T\le\operatorname{Var}(x)_T+\varepsilon$. Letting $\varepsilon\to0$ and using absolute convergence of the jump-square sum from [F1] proves $\sum_j(\Delta_j^n x(t))^2\to\sum_{s\le t}(\Delta x_s)^2$. [F1, F2, F4, step 1.1, given]

3.1 For every finite partition, telescoping differences of squares gives $x_t^2-x_0^2=2\sum_jx_{t\wedge t_j^n}\Delta_j^n x(t)+\sum_j(\Delta_j^n x(t))^2$. Step 2.1 gives the limit of the second sum, and rearrangement gives the stated limit of the left-endpoint sums. [step 2.1, algebra] ∎

## Source notes

Bass states the product formula for semimartingales with jumps and gives its
finite-variation partition route. Tian states the compensated-counting-process
bracket formula while explicitly referring its proof elsewhere. The local
argument above supplies the pathwise finite-variation limit used here.



