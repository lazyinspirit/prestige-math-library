---
id: cex-boundedness-does-not-replace-pointwise-relative-compactness
kind: counterexample
title: "Boundedness does not replace pointwise relative compactness for an arbitrary metric target"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-ascoli-arzela-general, def-standard-topologies, def-metric-space, def-compact-open-topology-for-topological-domains]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The pointwise-relative-compactness hypothesis in Ascoli–Arzelà cannot be weakened to pointwise boundedness for an arbitrary metric target.

## Facts & Assumptions

**Given:** The one-point discrete space $X=\{*\}$ and the infinite set $Y=\mathbb N$ with $d(m,n)=0$ for $m=n$ and $d(m,n)=1$ otherwise.

[L1] The general Ascoli theorem requires pointwise relative compactness, not merely pointwise boundedness ([[thm-ascoli-arzela-general]]).

[L2] In a discrete topology every singleton is open ([[def-standard-topologies]]).

[L3] The discrete distance is a metric ([[def-metric-space]]).

[L4] Compact-open subbasic sets are $S(K,V)=\{f:f[K]\subseteq V\}$ ([[def-compact-open-topology-for-topological-domains]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $d$ satisfies the metric axioms: symmetry and separation are immediate, and the only nonzero distance is $1$, so the triangle inequality holds. Its metric topology is discrete because $B(n,1)=\{n\}$. [L2, L3]

1.2 Every map $X\to Y$ is constant. The whole family $\mathcal F=C(X,Y)$ is equicontinuous, and $\mathcal F(*)=Y$ is bounded because it lies in the radius-$2$ ball about $0$. [given]

1.3 Evaluation at $*$ is a bijection $\mathcal F\to Y$. By [L4], the inverse image of each open $V\subseteq Y$ is $S(\{*\},V)$, so evaluation is a homeomorphism for the compact-open topology. [L4]

2.1 The open cover $\{\{n\}:n\in\mathbb N\}$ of the infinite discrete space $Y$ has no finite subcover. Thus $Y$ and hence $\mathcal F$ are not compact, while the family is equicontinuous and pointwise bounded. Moreover $\overline{\mathcal F(*)}=Y$ is not compact, displaying exactly the missing hypothesis in [L1]. [L1, L2, step 1.2, step 1.3] ∎
