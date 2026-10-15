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
  - thm-heine-cantor-r
  - thm-heine-borel-r
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Sections 2.4 and 2.6, PDF pp. 5–7"
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

[F2] Finite total variation bounds every partition sum of absolute increments. ([[def-bounded-variation-and-total-variation]])

[F3] Every closed finite interval $[0,T]$ is compact. ([[thm-heine-borel-r]])

[F4] A continuous real function on a compact subset of $\mathbb R$ is uniformly continuous. ([[thm-heine-cantor-r]])

[F5] Finite Cauchy–Schwarz bounds the absolute inner product of two finite real lists by the product of their Euclidean norms. ([[thm-cauchy-schwarz-finite]])

## Proof

1.1 For finitely many distinct jump times $0<s_1<\cdots<s_q\le T$, choose disjoint intervals $(u_i,s_i]$ with $u_i\uparrow s_i$. A partition containing all their endpoints has variation at least $\sum_i|x_{s_i}-x_{u_i}|$, so [F2] and the left limits give $\sum_i|\Delta x_{s_i}|\le\operatorname{Var}_{[0,T]}(x)$. Hence each set of jumps of size at least $1/m$ is finite, in its canonical time order, and the nonzero jumps form a countable set with $\sum_{0<s\le T}|\Delta x_s|\le\operatorname{Var}_{[0,T]}(x)$. Let $J_t=\sum_{0<s\le t}\Delta x_s$. Absolute convergence makes omitted jump tails uniformly small, so finite jump partial sums converge uniformly to a path $J$; right continuity passes by an $\varepsilon/3$ estimate, and their left limits are Cauchy under the uniform tail bound, so completeness of $\mathbb R$ gives left limits for $J$. Absolute convergence gives $\Delta J_s=\Delta x_s$. For any partition, each increment of $J$ is a subseries of its jumps, so $\operatorname{Var}_{[0,T]}(J)\le\sum_{0<s\le T}|\Delta x_s|$; the same argument bounds the variation of any omitted jump tail by its absolute sum. Therefore $x^c:=x-J$ is continuous and of finite variation. Choose a finite retained jump sum $z$ with omitted tail $r:=J-z$ satisfying $\operatorname{Var}_{[0,T]}(r)<\varepsilon$, and set $y=x-r=x^c+z$. By [F3] and [F4], the continuous part has squared-increment sum at most $\omega_{x^c}(\|\pi_n\|)\operatorname{Var}_{[0,T]}(x^c)\to0$, where $\omega_{x^c}(\delta):=\sup_{|u-v|\le\delta}|x^c_u-x^c_v|$; sufficiently fine partitions separate the finitely many retained jump times, so $\sum_j(\Delta_j^n y(t))^2$ tends to the sum of their squared jumps, with cross terms between each retained jump and the continuous increment in its partition cell tending to zero by the same modulus. [F1, F2, F3, F4, given, construct]

2.1 For every partition, expansion of squares and [F5] give $|\sum_j(\Delta_j^n x(t))^2-\sum_j(\Delta_j^n y(t))^2|\le2\operatorname{Var}_{[0,T]}(y)\operatorname{Var}_{[0,T]}(r)+\operatorname{Var}_{[0,T]}(r)^2\le2\operatorname{Var}_{[0,T]}(x)\varepsilon+3\varepsilon^2$, since $\operatorname{Var}_{[0,T]}(y)\le\operatorname{Var}_{[0,T]}(x)+\varepsilon$. Also $x=y+r$ gives $\Delta x_s=\Delta y_s+\Delta r_s$; applying the same finite-list expansion and [F5] to the jump sums, then using their absolute convergence [F1], yields $|[x]_t-[y]_t|\le2\operatorname{Var}_{[0,T]}(y)\operatorname{Var}_{[0,T]}(r)+\operatorname{Var}_{[0,T]}(r)^2\le2\operatorname{Var}_{[0,T]}(x)\varepsilon+3\varepsilon^2$. Since the squared-increment sums for $y$ converge to $[y]_t$ by step 1.1, these two error bounds show that the limsup distance between the squared-increment sums for $x$ and $[x]_t$ is at most $4\operatorname{Var}_{[0,T]}(x)\varepsilon+6\varepsilon^2$. Letting $\varepsilon\to0$ proves $\sum_j(\Delta_j^n x(t))^2\to\sum_{0<s\le t}(\Delta x_s)^2$. [F1, F2, F5, step 1.1, given]

3.1 For every finite partition, telescoping differences of squares gives $x_t^2-x_0^2=2\sum_jx_{t\wedge t_j^n}\Delta_j^n x(t)+\sum_j(\Delta_j^n x(t))^2$. Step 2.1 gives the limit of the second sum, and rearrangement gives the stated limit of the left-endpoint sums. [step 2.1, algebra] ∎

## Source notes

Bass gives the jump-square convention in §2.4 and derives the semimartingale product formula from Itô’s formula in §2.6. The finite-variation partition argument here is supplied locally. Tian states the compensated-counting-process bracket formula while explicitly referring its proof elsewhere. The local argument above supplies the pathwise finite-variation limit used here.



