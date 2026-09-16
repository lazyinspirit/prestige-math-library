---
id: def-uniform-on-compacts-metric-on-continuous-path-space
kind: definition
title: "Uniform-on-compacts metric on continuous path space"
status: published
origin: pipeline
deps: [def-topology-of-compact-convergence, def-metric-space, def-continuous-map-top, thm-geometric-series, lem-geometric-sequence-null, thm-extreme-value-metric, thm-heine-borel-rn, thm-of-archimedean]
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

## Definition

Let
$$C=C([0,\infty),\mathbb R)$$
be the set of continuous real-valued paths. For $f,g\in C$ define
$$d_{\mathrm{uoc}}(f,g)=\sum_{n=1}^{\infty}2^{-n}\left(1\wedge\max_{0\le t\le n}|f(t)-g(t)|\right).$$
Then $d_{\mathrm{uoc}}$ is a finite metric on $C$, and its metric topology is
exactly the topology of uniform convergence on compact subsets of
$[0,\infty)$. We call it the **uniform-on-compacts metric**.

## Facts & Assumptions

**Given:** Continuous paths $f,g,h\in C$.

[F1] The compact-convergence topology has basic neighborhoods requiring uniform closeness on one compact set. [[def-topology-of-compact-convergence]]

[F2] A metric is symmetric, separates points, and satisfies the triangle inequality. [[def-metric-space]]

[F3] Closed bounded real intervals are compact, and a continuous real function on a nonempty compact metric space attains a finite maximum. [[thm-heine-borel-rn]] [[thm-extreme-value-metric]]

[F4] The geometric series satisfies $\sum_{n=1}^{\infty}2^{-n}=1$, and its tail $2^{-N}$ tends to zero. [[thm-geometric-series]] [[lem-geometric-sequence-null]]

[F5] Every real bound is exceeded by an integer. [[thm-of-archimedean]]

[F6] The paths under discussion are continuous maps. [[def-continuous-map-top]]

## Verification

**Proof technique:** direct.

1.1 By [F3] and [F6], each maximum in the definition exists and is finite. Every summand lies in $[0,2^{-n}]$, so [F4] proves that the series converges to a finite value in $[0,1]$. [F3, F4, F6]

1.2 Let $K\subseteq[0,\infty)$ be compact and let $\varepsilon>0$. If $K$ is empty, its basic neighborhood from [F1] is all of $C$. Otherwise the identity function attains a finite maximum on $K$ by [F3], and [F5] gives an integer $N\ge1$ with $K\subseteq[0,N]$. Put $a=\min(1/2,\varepsilon)$. If $d_{\mathrm{uoc}}(f,g)<2^{-N}a$, then the $N$th term gives $$1\wedge\max_{t\le N}|f(t)-g(t)|<a,$$ hence $|f-g|<\varepsilon$ throughout $K$. Thus every compact-convergence basic neighborhood contains a $d_{\mathrm{uoc}}$-ball. [F1, F3, F5, algebra]

1.3 Conversely, given a $d_{\mathrm{uoc}}$-ball of radius $\varepsilon>0$, use [F4] to choose $N$ with $2^{-N}<\varepsilon/2$. If $\max_{t\le N}|f(t)-g(t)|<\varepsilon/2$, then the first $N$ terms sum to less than $\varepsilon/2$, while [F4] makes the remaining tail at most $2^{-N}<\varepsilon/2$. Hence $d_{\mathrm{uoc}}(f,g)<\varepsilon$. The neighborhood controlling the compact interval $[0,N]$ therefore lies inside the metric ball. [F1, F3, F4, algebra]

2.1 Symmetry is termwise. If $d_{\mathrm{uoc}}(f,g)=0$, every nonnegative summand is zero; hence $f=g$ on every $[0,n]$, and therefore on their union $[0,\infty)$. Conversely $f=g$ makes every term zero. [step 1.1, F2, algebra]

3.1 For each $n$, the ordinary triangle inequality gives $$\max_{t\le n}|f(t)-h(t)|\le\max_{t\le n}|f(t)-g(t)|+\max_{t\le n}|g(t)-h(t)|.$$ Since $1\wedge(a+b)\le(1\wedge a)+(1\wedge b)$ for $a,b\ge0$, multiplication by $2^{-n}$ and summation give $d_{\mathrm{uoc}}(f,h)\le d_{\mathrm{uoc}}(f,g)+d_{\mathrm{uoc}}(g,h)$. With step 2.1, [F2] proves that $d_{\mathrm{uoc}}$ is a metric. [step 1.1, step 2.1, F2, algebra]

4.1 Steps 1.2 and 1.3 give mutual refinement of the neighborhood bases at every $f$, so the two topologies coincide. Equivalently, $d_{\mathrm{uoc}}(f_j,f)\to0$ exactly when $f_j\to f$ uniformly on every compact subset. No choice is used: maxima and integer bounds exist with unique least choices if a witness is desired, and every sum is over the fixed natural order. [step 1.2, step 1.3, F1] ∎

## Source notes

The bounded weighted-sum metric is the standard metrization of local uniform convergence. The verification records both neighborhood containments, including the empty compact set and the geometric tail.
