---
id: thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain
kind: theorem
title: "A compact compact-open family is equicontinuous on a locally compact Hausdorff domain"
status: draft
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

1.2 For each $f\in\mathcal K$, continuity of evaluation at $(f,x)$ gives open neighbourhoods $O_f$ of $f$ and $U_f$ of $x$ such that $d(g(y),f(x))<\varepsilon/3$ whenever $g\in O_f$ and $y\in U_f$. [L1]

2.1 The sets $O_f$ cover $\mathcal K$. By compactness choose $f_1,\ldots,f_m$ whose $O_{f_i}$ cover it, and put $U=U_{f_1}\cap\cdots\cap U_{f_m}$. [L2, step 1.2]

3.1 For $g\in\mathcal K$ choose $i$ with $g\in O_{f_i}$. If $y\in U$, then both $y$ and $x$ lie in $U_{f_i}$, so $d(g(y),g(x))<2\varepsilon/3<\varepsilon$. The neighbourhood $U$ works for all $g$, proving equicontinuity. [L3, step 1.2, step 2.1] ∎
