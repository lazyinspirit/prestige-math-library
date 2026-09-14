---
id: lem-continuous-path-space-is-polish
kind: lemma
title: "Under countable choice, continuous path space is Polish"
status: published
origin: pipeline
deps: [def-uniform-on-compacts-metric-on-continuous-path-space, thm-geometric-series, lem-geometric-sequence-null, thm-function-space-is-complete-for-a-complete-target, thm-uniform-limit-theorem, thm-heine-cantor-metric, thm-euclidean-space-complete, thm-heine-borel-rn, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-countable-union-of-countable, thm-of-archimedean, def-polish-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "van der Vaart and Wellner, Weak Convergence and Empirical Processes, Sections 1.3 and 1.5"
      url: "https://www.stat.washington.edu/people/aa/research/WeakConvergence.pdf"
---

## Statement

Assume the Axiom of Countable Choice. The uniform-on-compacts metric makes
$C([0,\infty),\mathbb R)$ a complete separable metric space. Consequently its
metric topology, equivalently the topology of uniform convergence on compact
sets, is Polish.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the uniform-on-compacts metric
$d_{\mathrm{uoc}}$.

[F1] The metric $d_{\mathrm{uoc}}$ induces compact convergence, with geometric
weights on the interval suprema.
[[def-uniform-on-compacts-metric-on-continuous-path-space]]
[[thm-geometric-series]] [[lem-geometric-sequence-null]]

[F2] For a complete target, the continuous-function space on a nonempty domain
is complete in the bounded uniform metric, and uniform limits are continuous.
[[thm-function-space-is-complete-for-a-complete-target]]
[[thm-uniform-limit-theorem]]

[F3] The real line is complete, and every interval $[0,n]$ is compact.
[[thm-euclidean-space-complete]] [[thm-heine-borel-rn]]

[F4] A continuous map on a compact metric space is uniformly continuous.
[[thm-heine-cantor-metric]]

[F5] The rationals are countable and dense in the real line.
[[thm-rationals-countable]] [[lem-rat-embeds-dense]]

[F6] Finite products of countable sets are countable, and under
$\mathrm{AC}_\omega$ a countable union of countable sets is countable.
[[thm-product-of-countable]] [[thm-countable-union-of-countable]]
[[def-countable-choice]]

[F7] The natural numbers are cofinal in the reals.
[[thm-of-archimedean]]

[F8] A topology is Polish when it is separable and induced by a complete
metric. [[def-polish-space]]

## Proof

**Proof technique:** direct.

1.1 Let $(f_j)$ be $d_{\mathrm{uoc}}$-Cauchy and fix $n\ge1$. For every $0<\varepsilon<1$, eventually $$d_{\mathrm{uoc}}(f_j,f_k)<2^{-n}\varepsilon,$$ so its $n$th summand forces $\max_{t\le n}|f_j(t)-f_k(t)|<\varepsilon$. Thus the restrictions to $[0,n]$ are uniformly Cauchy. By [F2]--[F3] they have a unique continuous uniform limit $g_n$. [given, F1, F2, F3]

1.2 For integers $N,M\ge1$ and a rational tuple $(r_0,\ldots,r_{NM})$, let $p_{N,M,r}$ be linear on every interval $[k/M,(k+1)/M]$ with node value $r_k$, and constant after time $N$. Let $\mathcal P$ be the family of all these paths. For fixed $N,M$, its parameter tuples form a finite power of $\mathbb Q$, countable by repeated applications of [F5]--[F6]. The pairs $(N,M)$ are countable, so [F6], using the assumed $\mathrm{AC}_\omega$ exactly at its countable-union clause, makes $\mathcal P$ countable. [F5, F6]

1.3 Fix $f$ and $\varepsilon>0$. By [F1] and the geometric tail in its definition, choose $N$ with $\sum_{n>N}2^{-n}<\varepsilon/2$. By [F3]--[F4], $f$ is uniformly continuous on $[0,N]$; choose $\delta>0$ so $|s-t|<\delta$ implies $|f(s)-f(t)|<\varepsilon/4$. By [F7], choose $M$ with $1/M<\delta$, and by the density in [F5] choose the finitely many rationals $r_k$ with $|r_k-f(k/M)|<\varepsilon/4$. For the corresponding $p\in\mathcal P$, convex interpolation between adjacent node errors gives $$\max_{t\le N}|p(t)-f(t)|<\varepsilon/2.$$ Hence the first $N$ metric terms sum to less than $\varepsilon/2$ and the tail to less than $\varepsilon/2$, so $d_{\mathrm{uoc}}(p,f)<\varepsilon$. [F1, F3, F4, F5, F7, algebra]

2.1 If $m<n$, uniqueness of uniform limits makes $g_n|_{[0,m]}=g_m$. Hence $f(t)=g_n(t)$ for any integer $n\ge\max(1,t)$ is well defined; equivalently use the least such integer. Its restriction to each $[0,n]$ is $g_n$, so $f$ is continuous and $f_j\to f$ uniformly on every compact interval. By [F1], $d_{\mathrm{uoc}}(f_j,f)\to0$. Therefore the path-space metric is complete. No choice is used here: every $g_n$ is the unique limit. [step 1.1, F1, F2]

3.1 Step 1.3 makes the countable family $\mathcal P$ from step 1.2 dense, so the metric space is separable. Combining this with completeness from step 2.1 and the topology identity from [F1], [F8] proves that the compact-convergence path space is Polish. Countable choice was used only in step 1.2; the finitely many rational approximations in step 1.3 are obtained by finite induction. [step 2.1, step 1.2, step 1.3, F1, F6, F8] ∎

## Source notes

The cited weak-convergence text uses this standard Polish path space. The local
proof exhibits the compatible compact limits and an explicit dense family of
eventually constant rational polygonal paths, so completeness and the exact
choice use are visible.
