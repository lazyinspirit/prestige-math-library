---
id: thm-path-lifting-for-covering-maps
kind: theorem
title: "Existence and uniqueness of path lifts through a covering map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lift-of-a-map-path-and-homotopy, thm-lebesgue-number-lemma, lem-continuity-is-local-and-pastes, def-compact-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

Let $p:E\to B$ be a covering, let $\alpha:I\to B$ be a path, and let $e_0\in E$ satisfy $p(e_0)=\alpha(0)$. There is a unique path $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $p:E\to B$ be a covering and $f:Y\to B$ continuous. A **lift** of $f$ through $p$ is a continuous map $\widetilde f:Y\to E$ with $p\circ\widetilde f=f$. This includes lifts of paths $I\to B$ and of homotopies $Y\times I\to B$; an initial lift prescribes the restriction at time $0$ (def-homotopy-relative-and-path-homotopy, def-path-connected). ([[def-lift-of-a-map-path-and-homotopy]]).

[F2] Let $(X,d)$ be a compact metric space (def-metric-compactness, def-metric-space) and let $\mathcal{U}$ be an open cover of $X$. Then there is a real $\delta > 0$, a **Lebesgue number** for $\mathcal{U}$, such that every nonempty $A \subseteq X$ with $\operatorname{diam}(A) < \delta$ (def-metric-bounded-diameter) satisfies $A \subseteq U$ for some $U \in \mathcal{U}$. Diameters of nonempty subsets of $X$ are defined because a compact space is bounded (thm-compact-subset-is-closed-and-bounded) and a subset of a bounded set is bounded. No choice principle is used. ([[thm-lebesgue-number-lemma]]).

[F3] Let $X$, $Y$ and $Z$ be topological spaces, with subspaces carrying the subspace topology (def-subspace-topology-top). Then: 1. **Composites.** If $f : X \to Y$ and $g : Y \to Z$ are continuous (def-continuous-map-top) then $g \circ f : X \to Z$ is continuous. 2. **Open cover.** Let $f : X \to Y$ be a function and let $\{\, U_i : i \in I \,\}$ be a family of open subsets of $X$ with $\bigcup_{i \in I} U_i = X$. If $f|_{U_i} : U_i \to Y$ is continuous for every $i \in I$, then $f$ is continuous. 3. **Finite closed cover.** Let $f : X \to Y$ be a function, let $n \ge 1$ and let $F_1, \dots, F_n$ be closed subsets of $X$ with $F_1 \cup \dots \cup F_n = X$. If $f|_{F_k} : F_k \to Y$ is continuous for every $k$, then $f$ is continuous. The converses of claims 2 and 3 hold with no hypothesis on the cover at all: every restriction of a continuous map to a subspace is continuous (def-subspace-topology-top). The finiteness in claim 3 is not removable; see the remarks. ([[lem-continuity-is-local-and-pastes]]).

[F4] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). An **open cover** of $(X,\mathcal T)$ is a family $\mathcal U\subseteq\mathcal T$ of open sets with $X=\bigcup\mathcal U$; a **subcover** of $\mathcal U$ is a subfamily that is itself an open cover; and $(X,\mathcal T)$ is **compact** when every open cover of it has a finite subcover. ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Pull back evenly covered neighbourhoods along the path to obtain an open cover of the compact interval, choose a Lebesgue subdivision, and lift successively sheet by sheet from the prescribed initial point. [given, F1, F2, F3, F4]

2.1 Agreement at subdivision endpoints gives a continuous pasted path; sheet uniqueness proves uniqueness, including constant paths. [step 1.1, F3, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
