---
id: def-equivalent-norms
kind: definition
title: "Equivalent norms, and the dictionary with equivalent metrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-metrics, thm-metric-equivalence-hierarchy, def-metric-topology, def-metric-convergence, def-cauchy-in-metric, def-metric-uniform-continuity, lem-bounded-remetrisation, def-vector-space, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $\mathbb{R}$ ([[def-vector-space]]) and let $M$
and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are
**equivalent** when there are reals $c > 0$ and $C > 0$ with

$$c\,M(v) \;\le\; N(v) \;\le\; C\,M(v) \qquad \text{for every } v \in V .$$

The constants are not part of the data and are not unique: any smaller $c$ and
any larger $C$ serve as well.

### This is an equivalence relation on the norms on $V$

- **Reflexive:** take $c = C = 1$.
- **Symmetric:** from $cM \le N \le CM$ and $c, C > 0$ one gets
  $C^{-1}N \le M \le c^{-1}N$, dividing by the positive constants
  ([[lem-of-inverse-positive]]).
- **Transitive:** if $cM \le N \le CM$ and $c'N \le P \le C'N$ then
  $c'c\,M \le P \le C'C\,M$, and $c'c > 0$, $C'C > 0$, a product of positives
  being positive.

### The dictionary with equivalent metrics

Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics
([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed
condition gives

$$c\,d_M(u,w) \;\le\; d_N(u,w) \;\le\; C\,d_M(u,w) \qquad \text{for all } u, w \in V ,$$

which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense
of [[def-equivalent-metrics]], with $\alpha = c$ and $\beta = C$. That is the
**strongest** of the three tiers that item distinguishes: by
[[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform
equivalence, which implies topological equivalence. So equivalent norms give

- the same open sets, hence the same closed sets, closures and interiors
  ([[def-metric-topology]]);
- the same uniformly continuous maps into and out of $V$
  ([[def-metric-uniform-continuity]]);
- the same convergent sequences with the same limits, and the same Cauchy
  sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]).

The last line deserves its two-line verification, since it is used constantly
below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If
$d_M(v_k, v) \to 0$ then $0 \le d_N(v_k,v) \le C\,d_M(v_k,v)$, so given a
rational $\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \varepsilon/C$
serves for $d_N$; the converse uses $d_M \le c^{-1}d_N$ in the same way. The
Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular
$(V, d_M)$ is complete if and only if $(V,d_N)$ is.

**Naming.** Many texts say *strongly equivalent* for what
[[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent*
for what it calls topologically equivalent. As there, this library always writes
the qualifier for metrics. For **norms** there is no fork to guard against: the
condition displayed above is the only one anyone calls equivalence of norms, and
it is always the Lipschitz-strength one.

## Remarks

- **The converse of the dictionary fails.** A metric on $V$ that is equivalent to
  a norm metric need not itself come from a norm: [[lem-bounded-remetrisation]]
  turns any metric $d$ into $d' = \min\{d,1\}$, uniformly equivalent to $d$ and
  bounded, and a bounded metric on a nonzero vector space is not induced by any
  norm, since absolute homogeneity would make $d'(\lambda v, 0)$ unbounded in
  $\lambda$ ([[def-norm-and-normed-space]]). So "equivalent to a norm metric" is
  strictly weaker than "induced by an equivalent norm".

- **Equivalence is a statement about a fixed vector space.** Two norms on
  different spaces are never compared. On $\mathbb{R}^{n}$ with $n \ge 1$ the
  norms $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
  $\lVert\cdot\rVert_\infty$ of [[def-p-norms-on-rn]] are equivalent, with
  explicit constants proved in
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]; that every
  pair of norms on $\mathbb{R}^{n}$ is equivalent is
  [[thm-all-norms-on-rn-are-equivalent]]. Neither statement survives to spaces
  that are not finite-dimensional, and the companion page carries the witness.

- **Equivalence says nothing about the geometry.** Equivalent norms have the same
  convergent sequences and the same open sets; they may still have quite
  different unit balls, and one of them may come from an inner product while the
  other does not. [[lem-p-norms-are-norms-and-induce-the-published-metrics]]
  records the metric identifications and nothing more.
