---
id: prop-double-annihilator-recovers-a-finite-rank-distribution
kind: proposition
title: "The double annihilator recovers a finite-rank distribution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-annihilator-bundle-of-a-distribution,
       prop-local-frame-characterization-of-a-smooth-distribution,
       thm-double-annihilator-and-annihilator-dimension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

Let $\mathcal D$ be a smooth distribution on $M$. Then the fibrewise double
annihilator satisfies

$$ (\mathcal D^\circ)^\circ = \mathcal D. $$

## Facts & Assumptions

**Given:** A smooth distribution $\mathcal D$ on $M$.

[A1] Work on a neighborhood where $\mathcal D$ has a local frame
$X_1,\dots,X_k$ extended to a frame $X_1,\dots,X_n$ of $TM$.

## Proof

**Proof technique:** direct.

1.1 Relative to the dual coframe $\omega^1,\dots,\omega^n$, the annihilator [given]
bundle is locally spanned by $\omega^{k+1},\dots,\omega^n$, because those and
only those covectors vanish on the span of $X_1,\dots,X_k$. [given]

1.2 A tangent vector $v = \sum_i a_i X_i$ is annihilated by every section of [given]
$\mathcal D^\circ$ exactly when $a_{k+1} = \cdots = a_n = 0$. Thus the double
annihilator fibre is the span of $X_1,\dots,X_k$, which is precisely
$\mathcal D$. [given, algebra]

1.3 Since the argument is pointwise and valid in every such neighborhood, [given]
$(\mathcal D^\circ)^\circ = \mathcal D$ as a subbundle of $TM$. [given] ∎
