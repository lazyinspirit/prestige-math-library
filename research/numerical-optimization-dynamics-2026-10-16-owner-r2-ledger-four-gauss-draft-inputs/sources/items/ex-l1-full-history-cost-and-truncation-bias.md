---
id: ex-l1-full-history-cost-and-truncation-bias
kind: example
title: Full-history cost and the bias from truncating memory
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-uniform-and-graded-grid-l1
  - def-caputo-derivative-and-fractional-integral
  - def-absolutely-continuous-function
  - thm-real-gamma-functional-equation
  - lem-fractional-integral-kernel-power-integral
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - def-finite-sum
  - lem-finite-sum-reindexing-and-fubini
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
proof_strategy: direct
---

## Example

On a uniform grid with $N$ steps, direct L1 evaluation uses exactly
$N(N+1)/2$ history-weight terms and stores the $N+1$ nodal values. If only
the most recent $m$ increments are retained, then for $u(t)=t$ and $n>m$
the truncated L1 Caputo value is

$$\widetilde\delta_h^\alpha u^n=\frac{(mh)^{1-\alpha}}{\Gamma(2-\alpha)},$$

whereas the full value is $t_n^{1-\alpha}/\Gamma(2-\alpha)$. The lost
history therefore contributes the exact bias

$$\frac{t_n^{1-\alpha}-(mh)^{1-\alpha}}{\Gamma(2-\alpha)}.$$

The truncated implementation uses $\sum_{n=1}^N\min(n,m)$ terms and at most
$m+1$ recent nodal values. No error guarantee for other trajectories is
claimed.

## Facts & Assumptions

**Given:** $0<\alpha<1$, $T>0$, an integer $N\ge1$, $h=T/N$, and an integer
$1\le m\le N$.

[F1] [[def-absolutely-continuous-function]]: absolute continuity means that
for every $\varepsilon>0$ some $\delta>0$ makes summed endpoint increments
smaller than $\varepsilon$ for any finite disjoint interval family of total
length below $\delta$.

[F2] [[def-caputo-derivative-and-fractional-integral]]:
$D_C^\alpha u=\Gamma(1-\alpha)^{-1}\int_0^t(t-s)^{-\alpha}u'(s)ds$.

[F3] [[alg-uniform-and-graded-grid-l1]]: uniform-grid weights are
$a_j=(j+1)^{1-\alpha}-j^{1-\alpha}$ and each L1 step sums all retained
increments with these weights.

[F4] [[thm-real-gamma-functional-equation]]:
$\Gamma(2-\alpha)=(1-\alpha)\Gamma(1-\alpha)$.

[F5] [[def-real-power]] and
[[thm-real-power-continuity-and-derivatives]]: $(t^1)'=1$ for $t>0$.

[F6] [[lem-fractional-integral-kernel-power-integral]]:
$\int_0^t(t-s)^{-\alpha}ds=t^{1-\alpha}/(1-\alpha)$.

[F7] [[def-finite-sum]]: the displayed finite sums add their indexed terms.

[F8] [[lem-finite-sum-reindexing-and-fubini]]: reindexing a finite sum by
a bijection of its finite index set preserves its value.

## Verification

**Proof technique:** direct.

1.1 Fix any $\varepsilon>0$. For any finite disjoint intervals, the sum of endpoint increments of $u(t)=t$ equals the sum of their lengths. Thus [F1]'s defining condition holds with $\delta=\varepsilon$, and $u$ is absolutely continuous. [given, F1, algebra]

1.2 By [F5], $u'=1$ on $(0,T)$. The Caputo formula [F2] and kernel integral [F6] give $$D_C^\alpha u(t)=\frac1{\Gamma(1-\alpha)}\int_0^t(t-s)^{-\alpha}ds =\frac{t^{1-\alpha}}{(1-\alpha)\Gamma(1-\alpha)} =\frac{t^{1-\alpha}}{\Gamma(2-\alpha)},$$ using [F4]. [given, F2, F4, F5, F6, algebra]

1.3 The direct full-history step $n$ uses one term for each increment $k=1,\ldots,n$. Let $S=\sum_{n=1}^N n$. Reindexing by $n\mapsto N+1-n$ using [F8] also gives $S=\sum_{n=1}^N(N+1-n)$. Adding these equalities termwise gives $2S=\sum_{n=1}^N(N+1)=N(N+1)$ by [F7], so the full-history term count is $N(N+1)/2$. Retaining the sequence requires $N+1$ nodal values. [given, F7, F8, algebra]

2.1 For $n>m$, the truncated version of [F3] retains exactly the $m$ terms with index lag $j=0,\ldots,m-1$. Since $u^k-u^{k-1}=h$, $$\widetilde\delta_h^\alpha u^n =\frac{h^{1-\alpha}}{\Gamma(2-\alpha)}\sum_{j=0}^{m-1}a_j =\frac{h^{1-\alpha}m^{1-\alpha}}{\Gamma(2-\alpha)},$$ where the sum telescopes. The full sum through $j=n-1$ likewise telescopes to $n^{1-\alpha}$ and equals the exact derivative from step 1.2. This gives the bias stated. [step 1.2, F3, algebra]

3.1 At step $n$ the truncated evaluation uses $\min(n,m)$ terms, so [F7] gives its total count as $\sum_{n=1}^N\min(n,m)$. It can retain only the $m$ most recent increments, equivalently $m+1$ adjacent nodal values. For $n\le m$ no term is omitted, and at $m=N$ the bias is zero at every step. [given, step 2.1, F7, algebra] ∎
