---
id: lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family
kind: lemma
title: "The compact-open and pointwise topologies agree on an equicontinuous family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-open-topology-for-topological-domains, def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, def-topology-of-pointwise-convergence, lem-compactness-of-a-subspace-is-ambient]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Lemma 47.2"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be a metric space, and let $\mathcal E\subseteq C(X,Y)$ be equicontinuous. The compact-open and pointwise subspace topologies on $\mathcal E$ are equal.

## Facts & Assumptions

**Given:** A topological space $X$, a metric space $Y$, and an equicontinuous family $\mathcal E\subseteq C(X,Y)$.

[L1] Compact-open subbasic sets are $S(K,V)=\{g:g[K]\subseteq V\}$ for compact $K$ and open $V$ ([[def-compact-open-topology-for-topological-domains]]).

[L2] Equicontinuity at a point gives one neighbourhood on which all members of the family have a prescribed variation ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L3] Pointwise basic neighbourhoods prescribe values at finitely many points ([[def-topology-of-pointwise-convergence]]).

[L4] A subset is compact intrinsically exactly when it is compact as a subspace of an ambient topological space ([[lem-compactness-of-a-subspace-is-ambient]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in X$ and open $V\subseteq Y$, the pointwise subbasic set $\{g:g(x)\in V\}$ is $S(\{x\},V)$; the singleton is compact. Thus the compact-open topology on $\mathcal E$ is finer than the pointwise topology. [L1, L3, L4]

1.2 Fix $f\in\mathcal E\cap S(K,V)$. If $K=\varnothing$ or $V=Y$, the whole family is a pointwise neighbourhood contained in $S(K,V)$. Otherwise, let $I$ be the set of triples $(x,r,U)$ with $x\in K$, $r>0$, $U$ an open neighbourhood of $x$, $B(f(x),3r)\subseteq V$, $d(f(y),f(x))<r$ on $U$, and $d(g(y),g(x))<r$ on $U$ for all $g\in\mathcal E$. [L1, L2]

1.3 Openness of $V$, continuity of $f$, and [L2] show that every $x\in K$ occurs in some triple of $I$. Hence the open sets $U$ from all triples in $I$ cover $K$, without choosing one triple for every point. [L2]

2.1 Compactness of $K$ supplies finitely many triples $(x_i,r_i,U_i)$ from $I$ with $K\subseteq U_1\cup\cdots\cup U_m$. Let $N$ be the pointwise neighbourhood of $f$ in $\mathcal E$ defined by $d(g(x_i),f(x_i))<r_i$ for every $i$. [L3, L4, step 1.3]

3.1 If $g\in N$ and $y\in K$, choose $i$ with $y\in U_i$. The three inequalities attached to $(x_i,r_i,U_i)$ and the definition of $N$ give $d(g(y),f(x_i))<3r_i$, so $g(y)\in V$. Hence $N\subseteq S(K,V)$. [step 1.2, step 2.1]

4.1 Every compact-open subbasic neighbourhood has a pointwise neighbourhood inside it, so the pointwise topology on $\mathcal E$ is finer. Step 1.1 proves equality. [step 1.1, step 3.1] ∎
