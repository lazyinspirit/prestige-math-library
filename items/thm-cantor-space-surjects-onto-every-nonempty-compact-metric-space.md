---
id: thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space
kind: theorem
title: "Every nonempty compact metric space is a continuous image of Cantor space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-refining-small-diameter-covers-of-compact-metric-spaces, thm-compact-implies-complete-and-totally-bounded, thm-cantor-intersection-metric, def-product-topology, def-standard-topologies, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

Every nonempty compact metric space is the image of a continuous surjection from Cantor space $\{0,1\}^{\mathbb N}$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] If $K$ is a nonempty compact metric space, there is a finite rooted levelled tree $T=\bigcup_{n\in\mathbb N}T_n$ and nonempty compact sets $(K_s)_{s\in T}$ such that $T_0$ has one root $r$ with $K_r=K$, every node has a finite nonempty set of children whose sets cover its set, every child set is contained in its parent set, and $\operatorname{diam}(K_s)\le2^{-n}$ for $s\in T_n$ after a harmless rescaling of the metric. ([[lem-finite-refining-small-diameter-covers-of-compact-metric-spaces]]).

[F2] Let $(X,d)$ be a compact metric space (def-metric-compactness, def-metric-space). Then $(X,d)$ is totally bounded (def-totally-bounded) and complete (def-complete-metric-space). **Both implications are theorems of ZF.** Completeness is obtained here from the finite intersection characterisation (thm-compact-iff-finite-intersection-property) applied to the closures of the tails of a Cauchy sequence, and not from the extraction of a convergent subsequence, which would route the argument through sequential compactness. What matters for the ledger is that the route taken below selects nothing at all; the first remark below says why the other route was not taken. ([[thm-compact-implies-complete-and-totally-bounded]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space). Call a sequence $(F_k)_{k \in \mathbb{N}}$ of subsets of $X$ a **Cantor chain** if every $F_k$ is nonempty, closed (def-metric-topology) and bounded, $F_{k+1} \subseteq F_k$ for every $k$, and $\operatorname{diam}(F_k) \to 0$ in $\mathbb{R}$ (def-metric-bounded-diameter, def-real-limit). Then: 1. If $(X,d)$ is complete (def-complete-metric-space), every Cantor chain in $X$ has an intersection $\bigcap_{k \in \mathbb{N}} F_k$ with **exactly one** element. 2. Conversely, if every Cantor chain in $X$ has nonempty intersection, then $(X,d)$ is complete. Boundedness of each $F_k$ is part of the definition of a Cantor chain because $\operatorname{diam}$ is defined for nonempty bounded sets only in this library (def-metric-bounded-diameter); it is not an extra hypothesis but the precondition for writing the diameter condition down. ([[thm-cantor-intersection-metric]]).

[F4] **The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$. The **product** is $$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$ and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the product are equal exactly when they agree at every index, functions being equal when they have the same domain and the same values. For $j \in I$ the $j$-th **projection** is $$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$ ([[def-product-topology]]).

[F5] Throughout, a topology is as in def-topological-space, and *finite*, *at most countable* and *uncountable* are as in def-countable, so that "countable" always means "at most countable" and every finite set is countable. Let $X$ be a set. The six families below are topologies on $X$; that each really satisfies (T1), (T2) and (T3) is discharged in full after the list. ([[def-standard-topologies]]).

[F6] Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 Use the finite rooted refining tree and choose a finite block of binary digits at each level that surjects onto every child set of every node at that level. [given, F1, F5, F3, F4, F6]

2.1 Successive blocks select a nested branch, and the complete compact intersection theorem gives its unique point. [step 1.1, F2, F3, F1]

3.1 The resulting map from Cantor space is continuous by the diameter bound and surjective by recursively selecting a child containing a prescribed point. [step 2.1, F3, F2, F1]

4.1 Keep nonemptiness explicit; no map from nonempty Cantor space can surject onto the empty space. [step 3.1, F3, F2, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

