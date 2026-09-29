---
id: thm-path-lifting-for-covering-maps
kind: theorem
title: "Existence and uniqueness of path lifts through a covering map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lift-of-a-map-path-and-homotopy, def-covering-map-and-evenly-covered-neighbourhoods, thm-lebesgue-number-lemma, thm-heine-borel-rn, thm-of-archimedean, thm-connected-subsets-of-r-are-intervals, lem-continuity-is-local-and-pastes, def-compact-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-29
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

[F5] Every point of $B$ has an evenly covered open neighbourhood $U$: $p^{-1}(U)$ is a disjoint union of open sheets $V$, and $p|_V:V\to U$ is a homeomorphism. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F6] The closed interval $I=[0,1]$ is compact in the usual metric, and every closed subinterval of $I$ is connected. ([[thm-heine-borel-rn]], [[thm-connected-subsets-of-r-are-intervals]]).

[F7] For every real $x$ there is an integer $m\ge1$ with $x<m$. ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 For every evenly covered open $U\subseteq B$, the inverse image $\alpha^{-1}(U)$ is open in $I$. These inverse images cover $I$ by [F5]. Since $I$ is compact by [F6], [F2] gives a Lebesgue number $\delta>0$ for this cover. Apply [F7] to $1/\delta$ and choose an integer $m\ge1$ with $m>1/\delta$, hence $1/m<\delta$; put $t_j=j/m$ for $0\le j\le m$. Each $J_j=[t_j,t_{j+1}]$ has diameter $1/m<\delta$; thus its image under $\alpha$ lies in some evenly covered open $U_j$. For each selected $U_j$, also fix one of its disjoint-sheet decompositions supplied by [F5]. There are only finitely many $J_j$, so all these selections are finite successive choices and need no axiom of choice. [given, F2, F4, F5, F6, F7]

2.1 Set $e_0$ as in the Statement. Suppose $e_j\in E$ has already been defined with $p(e_j)=\alpha(t_j)$. Because $\alpha(t_j)\in U_j$, exactly one sheet $V_j$ over $U_j$ contains $e_j$. Define $\beta_j=(p|_{V_j})^{-1}\circ\alpha|_{J_j}$ and $e_{j+1}=\beta_j(t_{j+1})$. The inverse sheet map and $\alpha|_{J_j}$ are continuous, so $\beta_j$ is continuous; moreover $\beta_j(t_j)=e_j$ and $p\circ\beta_j=\alpha|_{J_j}$. Finite induction constructs all $m$ pieces. Consecutive pieces agree at their common endpoint, so they define a function $\widetilde\alpha:I\to E$. The $J_j$ form a finite closed cover; [F3] makes this function continuous. It starts at $e_0$ and satisfies $p\circ\widetilde\alpha=\alpha$, hence is a lift. [step 1.1, F1, F3, F5]

3.1 Let $\gamma:I\to E$ be another lift starting at $e_0$. Inductively assume $\gamma(t_j)=e_j$. On connected $J_j$ from [F6], the image of $\gamma$ lies in $p^{-1}(U_j)$, the disjoint union of its open sheets. The inverse image under $\gamma|_{J_j}$ of any one sheet is open in $J_j$, and its complement is the union of the inverse images of all the other sheets, also open. Thus each sheet inverse image is both open and closed in connected $J_j$. Since $\gamma(t_j)=e_j\in V_j$, the entire $\gamma(J_j)$ lies in $V_j$. On that sheet $p|_{V_j}$ is one-to-one, so $\gamma|_{J_j}=(p|_{V_j})^{-1}\circ\alpha|_{J_j}=\beta_j$. This also gives $\gamma(t_{j+1})=e_{j+1}$ and completes the induction. Hence $\gamma=\widetilde\alpha$ on $I$. The argument also applies when $\alpha$ is constant. [step 2.1, F1, F5, F6] ∎
