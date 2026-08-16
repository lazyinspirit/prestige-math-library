---
id: lem-finite-refining-small-diameter-covers-of-compact-metric-spaces
kind: lemma
title: "Under Dependent Choice, a compact metric space carries a finitely branching refining tree of covers of arbitrarily small diameter"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-compactness, lem-closed-subset-of-a-compact-space-is-compact, def-metric-bounded-diameter, def-dependent-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume Dependent Choice. If $K$ is a nonempty compact metric space, there is a rooted levelled tree $T=\bigcup_{n\in\mathbb N}T_n$ with **every level $T_n$ finite and nonempty**, and nonempty compact sets $(K_s)_{s\in T}$, such that $T_0$ has one root $r$ with $K_r=K$, every node has a finite nonempty set of children whose sets cover its set, every child set is contained in its parent set, and $\operatorname{diam}(K_s)\le2^{-n}$ for $s\in T_n$ after a harmless rescaling of the metric.

The tree is finitely branching with finite levels; it is not itself a finite set. Since every node has at least one child, induction from the root puts a node at every level, so $T=\bigcup_{n\in\mathbb N}T_n$ is infinite.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space), with open sets as in def-metric-topology and balls as in def-metric-ball. An **open cover** of $(X,d)$ is a family $\mathcal U$ of open subsets of $X$ with $X=\bigcup\mathcal U$; a **subcover** is a subfamily that is itself an open cover; and $(X,d)$ is **compact** when every open cover of it has a finite subcover. ([[def-metric-compactness]]).

[F2] Let $(X,d)$ be a compact metric space (def-metric-compactness, def-metric-space) and let $F \subseteq X$ be closed in $X$ (def-metric-topology). Then $F$ is a compact subset of $X$: the metric subspace $(F, d_F)$ is a compact metric space (def-isometry-and-metric-embedding). No choice principle is used. ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space) and let $A, B \subseteq X$. $A$ is **bounded** if $A=\emptyset$ or there are $x_0\in X$ and a real $r>0$ with $A\subseteq B(x_0,r)$; and for nonempty bounded $A$ the **diameter** $\operatorname{diam}(A)$ is the supremum of $D(A)=\{d(a,b):a,b\in A\}$, diameters being written in this library for nonempty bounded sets only. ([[def-metric-bounded-diameter]]).

[F4] Let $X$ be a set and let $R\subseteq X\times X$ be a relation, called **entire on $X$** when for every $x\in X$ there is $y\in X$ with $x\mathbin{R}y$. The **Axiom of Dependent Choice** is the statement: for every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a sequence $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin{R}x_{n+1}$ for every $n\in\mathbb N$ ([[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 At stage zero take the single root $r$ with $K_r=K$, a nonempty compact set, so $T_0$ is finite and nonempty. [given, F2, F1, F3]

2.1 Let $L$ be a nonempty compact set and $\varepsilon>0$. The open balls $B(x,\varepsilon/3)$ for $x\in L$ form an open cover of $L$, so by the compactness clause of [F1] finitely many of them, say about $x_0,\dots,x_m$, already cover $L$. The sets $L\cap\overline{B(x_i,\varepsilon/3)}$ are then finitely many nonempty-or-discardable subsets of $L$ covering $L$; each is closed in $L$ and hence compact by [F2], and each has diameter at most $2\varepsilon/3<\varepsilon$ by the triangle inequality and the diameter clause of [F3]. Discarding the empty ones leaves a finite nonempty family of nonempty compact subsets of $L$, covering $L$, each of diameter below $\varepsilon$. [step 1.1, F2, F1, F3]

3.1 Apply step 2.1 with $\varepsilon=2^{-(n+1)}$ to every node of level $n$ to obtain that node's children, and let $T_{n+1}$ be the resulting finite set of children. Each level is finite because level $n$ is finite and each of its nodes gets finitely many children, and each level is nonempty because every node has at least one child. The passage from one level to the next makes a selection — step 2.1 supplies at least one admissible finite family per node but names none canonically — and the family available at level $n+1$ is not known until level $n$ is fixed, so the recursion is licensed by Dependent Choice, applied via [F4] to the relation "is an admissible next level for" on finite levelled labellings, taking the root labelling of step 1.1 as the prescribed starting point. This is the Statement's hypothesis and the only place it is used. [step 2.1, F1, F4]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

