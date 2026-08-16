---
id: lem-pointwise-closure-preserves-equicontinuity
kind: lemma
title: "The pointwise closure of an equicontinuous family is equicontinuous and consists of continuous maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, def-topology-of-pointwise-convergence, def-product-topology]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Lemma 47.3"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$ be equicontinuous. The closure $H$ of $\mathcal F$ in $Y^X$ with the topology of pointwise convergence is equicontinuous, and every $h\in H$ is continuous.

## Facts & Assumptions

**Given:** A topological space $X$, a metric space $Y$, and an equicontinuous family $\mathcal F\subseteq C(X,Y)$ with pointwise closure $H$.

[L1] Equicontinuity supplies, for fixed $x$ and tolerance, one neighbourhood of $x$ that works for every member of the family ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L2] A basic pointwise neighbourhood controls finitely many coordinate values ([[def-topology-of-pointwise-convergence]]).

[L3] Coordinate inverse images of open sets are subbasic open in a product topology ([[def-product-topology]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and $\varepsilon>0$. By [L1], choose a neighbourhood $U$ of $x$ such that $d(f(y),f(x))<\varepsilon/3$ for every $f\in\mathcal F$ and $y\in U$. [L1]

1.2 Fix $h\in H$ and $y\in U$. The pointwise neighbourhood of $h$ requiring both $d(g(x),h(x))<\varepsilon/3$ and $d(g(y),h(y))<\varepsilon/3$ meets $\mathcal F$; choose $f$ in the intersection. [L2, L3]

2.1 The triangle inequality and steps 1.1--1.2 give $d(h(y),h(x))<\varepsilon$. The neighbourhood $U$ did not depend on $h$, so it proves equicontinuity of all of $H$. [step 1.1, step 1.2]

3.1 For each fixed $h\in H$, the estimate in step 2.1 is the neighbourhood criterion for continuity at every $x$. Hence every member of $H$ is continuous. [step 2.1] ∎
