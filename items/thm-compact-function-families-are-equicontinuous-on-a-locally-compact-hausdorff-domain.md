---
id: thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain
kind: theorem
title: "A compact compact-open family is equicontinuous on a locally compact Hausdorff domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain, lem-compactness-of-a-subspace-is-ambient, def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Theorem 47.1"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact Hausdorff space, let $Y$ be a metric space, and let $\mathcal K\subseteq C(X,Y)$ be compact in the compact-open topology. Then $\mathcal K$ is equicontinuous.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a metric space $Y$, and a compact compact-open family $\mathcal K$.

[L1] Evaluation $C(X,Y)\times X\to Y$ is continuous for a locally compact Hausdorff domain ([[thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain]]).

[L2] Compactness of a subspace may be used with open covers by ambient open sets ([[lem-compactness-of-a-subspace-is-ambient]]).

[L3] Equicontinuity requires one domain neighbourhood for every member of the family at the chosen point and tolerance ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$ or $\mathcal K=\varnothing$, the conclusion is vacuous. Otherwise fix $x\in X$ and $\varepsilon>0$. [L3]

1.2 Call a pair $(O,U)$ of open sets **admissible at** $f\in\mathcal K$ when $f\in O$, $x\in U$, and $d(g(y),f(x))<\varepsilon/3$ for every $g\in O$ and every $y\in U$. Continuity of evaluation at $(f,x)$, which [L1] supplies, makes at least one pair admissible at each $f\in\mathcal K$. Let $\mathcal A$ be the set of all triples $(f,O,U)$ with $(O,U)$ admissible at $f$. This set is defined outright and no pair is selected, so no choice principle is used. [L1]

2.1 The open sets $O$ occurring in triples of $\mathcal A$ cover $\mathcal K$, because each $f\in\mathcal K$ lies in the $O$ of some admissible triple. Applying [L2] to the cover indexed by $\mathcal A$ yields finitely many triples $(f_1,O_1,U_1),\ldots,(f_m,O_m,U_m)$ of $\mathcal A$ whose $O_i$ already cover $\mathcal K$; only this finite selection is made. Put $U=U_1\cap\cdots\cap U_m$, an open neighbourhood of $x$ as a finite intersection. [L2, step 1.2]

3.1 Let $g\in\mathcal K$ and take $i\le m$ with $g\in O_i$. If $y\in U$ then $y\in U_i$ and $x\in U_i$, so admissibility at $f_i$ gives $d(g(y),f_i(x))<\varepsilon/3$ and $d(g(x),f_i(x))<\varepsilon/3$, whence $d(g(y),g(x))<2\varepsilon/3<\varepsilon$. The one neighbourhood $U$ works for every $g\in\mathcal K$, which is what [L3] requires for equicontinuity at $x$. [L3, step 1.2, step 2.1] ∎
