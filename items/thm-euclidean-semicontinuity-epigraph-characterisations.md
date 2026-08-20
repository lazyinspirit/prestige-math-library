---
id: thm-euclidean-semicontinuity-epigraph-characterisations
kind: theorem
title: "Lower semicontinuity is equivalent to a closed epigraph and upper semicontinuity to a closed hypograph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semicontinuity-on-euclidean-subsets, def-epigraph-and-hypograph, thm-euclidean-semicontinuity-level-set-characterisations, lem-product-topology-on-rn, thm-metric-sequential-closure, def-subspace-topology-top, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.7"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$, let $A\subseteq\mathbb R^n$, and let $f:A\to\mathbb R$. The function $f$ is lower semicontinuous on $A$ if and only if $\operatorname{epi}f$ is closed in $A\times\mathbb R$. It is upper semicontinuous if and only if $\operatorname{hypo}f$ is closed there. The product and relative topologies are those of [[lem-product-topology-on-rn]], [[def-subspace-topology-top]].

## Facts & Assumptions

**Given:** The function, domain, and countable choice in the Statement, with sequential closure in Euclidean metric spaces as in [[thm-metric-sequential-closure]] and semicontinuity as in [[def-semicontinuity-on-euclidean-subsets]].

[A1] The Axiom of Countable Choice supplies a choice function for every family of nonempty sets indexed by $\mathbb N$ ([[def-countable-choice]]).

[L1] Lower semicontinuity is equivalent to relative openness of every strict superlevel set and to relative closedness of every weak sublevel set ([[thm-euclidean-semicontinuity-level-set-characterisations]]).

[F1] The epigraph of $f:A\to\mathbb R$ is $\operatorname{epi}f=\{(x,s)\in A\times\mathbb R:f(x)\le s\}$ ([[def-epigraph-and-hypograph]]).

[L2] Under $\mathrm{AC}_\omega$, a point belongs to the closure of a metric subspace exactly when a sequence from that subspace converges to it ([[thm-metric-sequential-closure]]).

## Proof

**Proof technique:** direct.

1.1 For the forward epigraph implication, assume $f$ lower semicontinuous and take $(x,t)$ outside [F1], so $t<f(x)$. Choose $t<\alpha<f(x)$. By [L1], a relative neighbourhood of $x$ lies in $\{f>\alpha\}$; its product with a short vertical interval below $\alpha$ is an open neighbourhood of $(x,t)$ disjoint from the epigraph. Thus the epigraph complement is open. [L1, F1, algebra]

1.2 For the reverse epigraph implication, suppose lower semicontinuity fails at $x$. Then for some $\varepsilon>0$ every relative ball about $x$ meets $S=\{y\in A:f(y)\le f(x)-\varepsilon\}$, so $x\in\overline S$. By [A1] and [L2], choose $x_j\in S$ with $x_j\to x$. The horizontal points $(x_j,f(x)-\varepsilon)$ lie in [F1] and converge to $(x,f(x)-\varepsilon)$ outside it, contrary to closedness. Hence the lower condition [L1] holds. [A1, L1, L2, F1, given, choose]

2.1 The reflection $(x,t)\mapsto(x,-t)$ sends the hypograph of $f$ to the epigraph of $-f$. Applying steps 1.1 and 1.2 to $-f$ and using the exchange between upper semicontinuity of $f$ and lower semicontinuity of $-f$ proves the hypograph equivalence. [step 1.1, step 1.2, F1, algebra] ∎
