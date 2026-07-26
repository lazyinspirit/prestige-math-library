---
id: def-cauchy-in-metric
kind: definition
title: "Cauchy sequence in a metric space"
status: draft
origin: session
deps: [def-metric-space, def-metric-convergence, def-sequence, def-real-limit,
       lem-rat-embeds-dense, lem-metric-nonnegativity, lem-real-line-is-a-metric-space,
       lem-index-map-grows]
justified_by: []
aliases: []
landmark: true
short: "Cauchy in a metric space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$, that is a function $\mathbb{N} \to X$ written $x_k := x(k)$
([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library
$\mathbb{N}$ contains $0$, so a sequence is indexed from $0$.

$(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational
$\varepsilon > 0$ there is $K \in \mathbb{N}$ such that

$$d(x_m, x_n) < \varepsilon \qquad \text{for all } m, n \ge K .$$

**Rational and real $\varepsilon$ agree here.** The test is written with a
rational $\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]],
and nothing is lost by using a real one: below any real $\eta > 0$ lies a
positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that
rational serves for $\eta$. So a proof may establish Cauchyness by producing an
index for every real $\varepsilon > 0$, and may use a Cauchy hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**The condition is exactly $d(x_m,x_n) \to 0$ as $m$ and $n$ grow
independently.** The distances $d(x_m,x_n)$ are nonnegative reals
([[lem-metric-nonnegativity]]), and the displayed condition asks them to be
uniformly small on a tail of the doubly indexed family. It is not the same as
$d(x_{k+1}, x_k) \to 0$, which is a strictly weaker condition and is a standing
source of error. The partial sums $H_n$ of the harmonic series separate the two:
consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is
unbounded, and an unbounded sequence of reals is not Cauchy
([[lem-metric-cauchy-bounded]]).

**Consistency with the real line.** For $X = \mathbb{R}$ with the usual metric
$d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads
$|x_m - x_n| < \varepsilon$ for $m,n \ge K$, which is verbatim the definition of a
Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here
restricts on $\mathbb{R}$ to the one already in use, and no ambiguity is created.

## Remarks

- **A Cauchy sequence need not converge.** The definition mentions no candidate
  limit, and that is the whole point of it: it is a condition on the sequence
  alone, testable without knowing where the sequence is going. Whether every
  Cauchy sequence converges is a property of the space, namely completeness
  ([[def-complete-metric-space]]), and it genuinely fails in some spaces
  ([[fs-cauchy-implies-convergent-in-every-metric-space]]).
- **Cauchyness is a property of the metric, not of the topology.** Two metrics
  on the same set may have exactly the same open sets and different Cauchy
  sequences ([[fs-equivalent-metrics-share-cauchy-sequences]]). What does
  preserve Cauchy sequences is uniform equivalence
  ([[def-equivalent-metrics]]), and the reason is
  [[thm-uniform-continuity-preserves-cauchy]].
- **Every subsequence of a Cauchy sequence is Cauchy**, since a strictly
  increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]), so the
  same $K$ works for the subsequence. Conversely a Cauchy sequence with one
  convergent subsequence already converges
  ([[lem-metric-cauchy-with-convergent-subsequence]]).
