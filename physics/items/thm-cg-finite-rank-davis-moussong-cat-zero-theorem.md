---
id: "thm-cg-finite-rank-davis-moussong-cat-zero-theorem"
kind: "theorem"
title: "The Davis complex of a finite-rank Coxeter system is CAT(0) (Moussong's theorem)"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 21
deps: ["def-hh-coxeter-matrix-word-group-and-length", "def-cg-spherical-nerve-coset-poset-and-davis-realization", "thm-cg-davis-complex-cell-incidence-and-stabilizers", "lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics", "thm-cg-davis-complex-is-simply-connected", "lem-cg-davis-angular-vertex-link-is-metric-flag-nerve", "def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric", "thm-cg-polyhedral-chain-metric-topology-and-properness", "thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics", "thm-cg-large-metric-flag-complexes-are-cat-one", "def-cg-cat-zero-cat-one-and-local-geodesic", "thm-cg-cone-join-metric-and-local-product-chart", "thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion", "thm-cg-complete-simply-connected-local-cat-zero-globalization", "def-geodesic-and-geodesic-metric-space", "def-complete-metric-space", "def-metric-compactness", "def-metric-continuity", "def-metric-space", "def-simply-connected", "def-axiom-of-choice"]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, first-edition author manuscript, 2007-2008"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 12, printed pp. 231-236: §12.1 gives the piecewise Euclidean Coxeter cells and vertex links; §12.3 Lemma 12.3.1 proves the nerve is large metric flag, Corollary 12.3.2 invokes Moussong's CAT(1) lemma, and Theorem 12.3.3 states the CAT(0) conclusion. The book says the general Moussong CAT(1) proof is only sketched in Appendix I.7, printed pp. 521-522. Appendix I.2, printed pp. 499-507, includes Theorems I.2.5-I.2.7; I.2.7 states Gromov's Cartan-Hadamard theorem. Appendix I.3, printed pp. 507-511, includes Proposition I.3.4 and Theorem I.3.5, whose link-condition proof is also a sketch with details referred to Bridson-Haefliger, pp. 206-207. These passages establish the source route and its proof limits; the current item still uses the local library suppliers."
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra, Turan Workshop notes (1998/1999)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "§6.6, printed pp. 39-40, describes the piecewise Euclidean structure and reduces CAT(0) to CAT(1) vertex links via Theorems 1.5.2 and 2.2.3. §6.7, printed pp. 40-41, states Moussong's metric-flag CAT(1) lemma and its CAT(0) corollary; the proof of Lemma 6.7.4 is explicitly only a sketch, not a complete argument. §1.5, printed pp. 10-13, contains Theorem 1.5.2, the Cartan-Hadamard theorem. These notes support the route; the item applies the proved local CAT(1) and globalization suppliers."
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University, 1988), J. McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 3, §§11-14, transcription pp. 28-31: the Coxeter preliminaries, block construction, face-link formula (5), and the proof of Theorem 14.1, which assembles the E-complex link condition using Corollaries 5.6 and 10.2. The theorem states a contractible E-complex of curvature ≤0 with an effective proper cocompact W-action. The full relevant construction and argument were read; it is source evidence, not a replacement for the in-run item proofs."
    - title: "P. Moller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791v2 (2023)"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "§2 and §3 through Proposition 3.4, PDF pp. 3-7: the nerve/Moussong metric, Proposition 2.4 on the Davis complex, Theorem 3.1 (Cartan-Hadamard, citing Bridson-Haefliger II.4.1), Theorem 3.2 (the polyhedral link criterion), and Proposition 3.4 (Coxeter nerve girth). Møller states that the CAT(0) case is problem-free, but explicitly omits the arguments for Proposition 3.4; the paper does not supply a complete proof of the CAT(1) link theorem. Its counterexamples concern the separate hyperbolicity argument. Section 4 not read."
    - title: "M. W. Davis, The geometry and topology of Coxeter groups, MSC lecture slides (Tsinghua University, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "PDF pp. 12-15, Theorem 2.19(vii),(viii),(x),(xi): the induced piecewise Euclidean metric on Sigma is CAT(0) by Gromov and Moussong, Sigma is contractible, and the action has compact quotient. Entire 19-page document opened."
    - title: "M. R. Bridson and A. Haefliger, Metric Spaces of Non-Positive Curvature, Grundlehren der mathematischen Wissenschaften 319, Springer 1999"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "Section II.4, PDF pp. 193-202, including Theorem 4.1 and its local-geodesic continuation, covering and Alexandrov-patchwork proof; Section II.5.21, PDF p. 234, states Moussong's Lemma. The complete relevant II.4 argument was read. The current theorem still depends on the in-run globalization and CAT(1) suppliers, with proofs supplied by the local library items."
  scraped: []
---
## Statement

Let $(S,m)$ be a Coxeter matrix with $S$ finite, $W$ the presented group ([[def-hh-coxeter-matrix-word-group-and-length]]), and let $\mathbb S$, $\Sigma$ and its cellulation by the cells $wW_T$ be as in [[def-cg-spherical-nerve-coset-poset-and-davis-realization]] and [[thm-cg-davis-complex-cell-incidence-and-stabilizers]], with the chain metric $d$ of that cellulation for a fixed tuple $(d_s)_{s\in S}$ of positive real numbers ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]]). **Assume the Axiom of Choice** ([[def-axiom-of-choice]]); it is used in (1) through the A-page link lemma, including its finite spherical-link construction and CAT(1) theorem, and in (3) through [[thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]]. Then:

**(1) Every link of $\Sigma$ is CAT(1).** By [[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (5),(6), for every spherical $U$ the angular link $\operatorname{Lk}_\Sigma(wW_U)$ -- in particular every vertex link, for $U=\emptyset$ -- is a finite large metric flag complex and is CAT(1) for its truncated angular metric.

**(2) $\Sigma$ is locally CAT(0).** For every point $x$ in the relative interior of a cell $wW_T$ there is $\varepsilon>0$ such that the metric ball $B(x,\varepsilon)$ is isometric, preserving intrinsic lengths, to the ball of radius $\varepsilon$ about $(0,o)$ in $\mathbb R^{|T|}\times C(\operatorname{Lk}_\Sigma(wW_T))$ ([[thm-cg-cone-join-metric-and-local-product-chart]], [[thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion]] (ii)); since $\operatorname{Lk}_\Sigma(wW_T)$ is CAT(1) by (1), the polyhedral link criterion makes $\Sigma$ locally CAT(0) at $x$, hence locally CAT(0) everywhere ([[def-cg-cat-zero-cat-one-and-local-geodesic]] (3)).

**(3) Complete geodesic metric and length space.** $\Sigma$ is a connected isometric polyhedral gluing of the shape of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1) with finitely many shapes and local finiteness; its chain metric $d$ ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]) is a proper and complete metric inducing the weak topology ([[thm-cg-polyhedral-chain-metric-topology-and-properness]] (1)-(3), [[def-complete-metric-space]], [[def-metric-compactness]]). Since the cells are convex Euclidean cells, every chain from $x$ to $y$ is realized by a piecewise Euclidean path whose length is at most the length of that chain, while every path has length at least $d(x,y)$ by the triangle inequality; hence $d$ is the intrinsic path metric and $(\Sigma,d)$ is a length space. With the Axiom of Choice, every two points of $\Sigma$ are joined by a minimizing geodesic ([[thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]]), so $(\Sigma,d)$ is even a geodesic space ([[def-geodesic-and-geodesic-metric-space]]).

**(4) Global CAT(0).** $\Sigma$ is simply connected ([[thm-cg-davis-complex-is-simply-connected]], [[def-simply-connected]]). Being connected, complete, a length space and locally CAT(0), it satisfies the CAT(0) inequality for every geodesic triangle; every two points are joined by exactly one geodesic, which is minimizing; and for every base point $x_0$ the geodesic contraction $H\colon\Sigma\times[0,1]\to\Sigma$, $H_t(x)$ the point at distance $t\,d(x_0,x)$ from $x_0$ on the unique geodesic from $x_0$ to $x$, is continuous and satisfies $d(H_t(x),H_t(y))\le t\,d(x,y)$ for all $x,y$ and $t\in[0,1]$ ([[thm-cg-complete-simply-connected-local-cat-zero-globalization]] (i)-(iii), [[def-metric-continuity]]). In particular $\Sigma$ is contractible.

**(5) Scope.** The conclusions hold for every finite-rank Coxeter system, in particular for infinite, noncrystallographic and non-right-angled systems, and for every choice of the positive numbers $d_s$; the metric does depend on that choice while the CAT(0) property does not. No word hyperbolicity, automaticity, flat-subspace or finite-subgroup statement is asserted here.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite Coxeter matrix $(S,m)$, its presented group $W$, the cellular Davis realization $\Sigma$ with its chain metric $d$ for a fixed tuple $(d_s)_{s\in S}$ of positive real numbers.

[F1] For every spherical $U$ and every $w\in W$, the angular link of the cell $wW_U$ is canonically isometric to the face link $\operatorname{Lk}_X(U)$, and every such higher link is a finite large metric flag complex ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (3)-(5)).

[F2] Product chart: for an isometric polyhedral gluing satisfying local finiteness and finitely many shapes, and a point $p$ in the relative interior of a $k$-dimensional cell $F$, the connected component $X_p$ of $p$ carries its chain metric, and there is $\varepsilon>0$ such that $B_{X_p}(p,\varepsilon)$ is isometric, preserving intrinsic lengths, to the ball of radius $\varepsilon$ about $(0,o)$ in $\mathbb R^k\times C(\operatorname{Lk}_X(F))$ ([[thm-cg-cone-join-metric-and-local-product-chart]] (4)).

[F3] Berestovskii and the polyhedral link criterion: the cone $C(L)$ is CAT(0) if and only if the link $(L,d_\pi)$ is CAT(1); and a connected isometric polyhedral gluing with its chain metric is locally CAT(0) at a point $p$ in the relative interior of a face $F$ if and only if $\operatorname{Lk}_X(F)$, with its truncated metric, is CAT(1) ([[thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion]] (i),(ii), [[def-cg-cat-zero-cat-one-and-local-geodesic]] (3),(4)).

[F4] The cellulation: the cells $C_{wW_T}=C_T$ of [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] with the face isometries form an isometric polyhedral gluing of shape $P$ satisfying (H1) connectedness, (H2) local finiteness and (H3) finitely many shapes; the cells are compact convex polyhedral cells of dimension $|T|$; every point of $\Sigma$ lies in the relative interior of exactly one cell; and the chain metric $d$ is a metric on $\Sigma$ with the weak topology for which $\Sigma$ is complete and proper ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1),(2)).

[F5] For an isometric polyhedral gluing satisfying (H1)-(H3) the chain metric is a metric inducing the weak topology, every closed bounded subset is compact and the space is complete ([[thm-cg-polyhedral-chain-metric-topology-and-properness]] (1)-(3)).

[F6] The chain metric is $d(x,y)=\inf\{\ell(x_0,\dots,x_m)\}$, the infimum of the lengths of chains, where a chain is a finite sequence of points with consecutive points in a common cell and $\ell$ is the sum of the cell distances; if $x,y$ lie in a common cell then the one-step chain gives $d(x,y)\le d_p(x,y)$, but equality can fail because a chain may leave the cell and return with smaller total length ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

[F7] **Assume the Axiom of Choice** ([[def-axiom-of-choice]]): for an isometric polyhedral gluing satisfying (H1)-(H3), every pair $x,y$ is joined by a minimizing geodesic $\gamma\colon[0,d(x,y)]\to X$ with $d(\gamma(s),\gamma(t))=|s-t|$ ([[thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]]).

[F8] The Davis complex $\Sigma$ is simply connected ([[thm-cg-davis-complex-is-simply-connected]]).

[F9] Globalization: if a metric space $X$ is connected, complete, locally CAT(0), a length space and simply connected, then every two points of $X$ are joined by exactly one local geodesic, which is minimizing; every geodesic triangle of $X$ satisfies the CAT(0) inequality; and for every base point the geodesic contraction $H$ is continuous with $d(H_t(x),H_t(y))\le t\,d(x,y)$ for all $x,y$ and $t\in[0,1]$, so that $X$ is CAT(0) and contractible ([[thm-cg-complete-simply-connected-local-cat-zero-globalization]] (i)-(iii), [[def-metric-continuity]]).

[F10] Conventions: a metric space is CAT(0) if it is geodesic and every geodesic triangle satisfies the Euclidean comparison inequality, and locally CAT(0) if every point has a closed ball that is CAT(0); it is a length space if for all $x,y$ and every $\varepsilon>0$ there is a path from $x$ to $y$ of length $<d(x,y)+\varepsilon$; a local geodesic is a map that is distance-preserving in a neighbourhood of each parameter, and a geodesic segment is a map $\gamma$ with $d(\gamma(s),\gamma(t))=|s-t|$, so that every geodesic segment is a minimizing local geodesic ([[def-cg-cat-zero-cat-one-and-local-geodesic]] (3),(5),(6), [[def-geodesic-and-geodesic-metric-space]]).

[F11] The triangle inequality $d(x,z)\le d(x,y)+d(y,z)$ holds in a metric space ([[def-metric-space]]).

[F12] The Coxeter system $(W,S)$ is the group presented by the involution relations $s^2=1$ and the finite-label relations $(st)^{m(s,t)}=1$, with $S$ finite ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F13] A subset $T\subseteq S$ is spherical exactly when $W_T$ is finite, and the nerve $L$ has the nonempty spherical subsets as simplices together with the empty simplex ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1)).

[F14] The Davis realization $\Sigma=|WS|$ is the order complex of the poset of spherical cosets; if $S=\emptyset$, this poset has the sole element $W_\emptyset=\{1\}$, so $\Sigma$ is a point ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (2),(3)).

[F15] Under AC, the A-page link lemma clause (6) asserts that all vertex and cell links are CAT(1); this clause depends on the general CAT(1) theorem for finite large metric flag complexes, whose AC-qualified proof uses untruncated intrinsic component metrics and transfers the short tests to the angular truncation ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (6), [[thm-cg-large-metric-flag-complexes-are-cat-one]]).

[F16] The angular link computation is independent of the positive tuple $(d_s)$, although the Euclidean cell metrics may depend on it ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (7)).

## Proof

**Given:** The Axiom of Choice, a finite Coxeter matrix $(S,m)$, its presented group $W$, the Davis realization $\Sigma$ with its chain metric $d$ for a fixed tuple $(d_s)_{s\in S}$ of positive real numbers.

**Proof technique:** direct.

1.1 Clause (1). Under the finite presentation and nerve conventions [F12,F13], if $S=\emptyset$ then $W=\{1\}$, $\mathbb S=\{\emptyset\}$ and the Davis realization is a point [F14]; its link is empty and is CAT(1) by [F10]. If $|S|=1$, the vertex links are singletons and the link of the open one-cell is empty, so these links are CAT(1) by [F10]. For general finite $S$, let $U$ be spherical and $w\in W$. Under the stated AC assumption, the A-page link computation [F1] identifies $\operatorname{Lk}_\Sigma(wW_U)$ with $\operatorname{Lk}_X(U)$ and gives finite large metric flag links; the CAT(1) assertion is [F15]. [F1, F10, F12, F13, F14, F15]

1.2 Clause (2), the chart. Let $x\in\Sigma$. By [F4] the point $x$ lies in the relative interior of exactly one cell $wW_T$, of dimension $|T|$, and the cellulation is an isometric polyhedral gluing satisfying (H2) and (H3); hence [F2] applied to $F=wW_T$ and $k=|T|$ gives $\varepsilon>0$ and an isometry, preserving intrinsic lengths, from $B(x,\varepsilon)$ onto the ball of radius $\varepsilon$ about $(0,o)$ in $\mathbb R^{|T|}\times C(\operatorname{Lk}_\Sigma(wW_T))$. [F2, F4]

1.3 Clause (3), the metric. By [F4] the cellulation is connected, locally finite and has finitely many shapes, and its chain metric $d$ is a metric inducing the weak topology for which $\Sigma$ is complete and proper; the same three assertions for an isometric polyhedral gluing with (H1)-(H3) are clause (1)-(3) of [F5]. [F4, F5]

1.4 Clause (3), the intrinsic metric. Let $x,y\in\Sigma$ and let $x=x_0,x_1,\dots,x_m=y$ be a chain, with cells $p_i$ containing both $x_{i-1}$ and $x_i$ and length $\ell(x_0,\dots,x_m)=\sum_{i=1}^m d_{p_i}(x_{i-1},x_i)$ [F6]. Each $C_{p_i}$ is a convex polyhedral cell of its Euclidean affine space [F4], so the straight segment from $x_{i-1}$ to $x_i$ lies in $C_{p_i}$. Parametrize each segment linearly on its allotted subinterval. For two parameter values on one segment, the one-step bound $d(u,v)\le d_{p_i}(u,v)$ [F6] shows that this segment map is Lipschitz in $d$; the finite concatenation is therefore a continuous path $\gamma$ from $x$ to $y$. Refine any partition by the segment breakpoints; refinement cannot decrease the polygonal sum, and each refined summand lies in one common cell, so its $d$-distance is at most the Euclidean distance there [F6]. The sum on each straight piece is at most its Euclidean length, giving $L_d(\gamma)\le\ell(x_0,\dots,x_m)$ for path length $L_d(\gamma)=\sup\sum_jd(\gamma(t_{j-1}),\gamma(t_j))$ [F10]. Conversely, for every path $\delta$ and every partition, the triangle inequality [F11] gives $\sum_jd(\delta(t_{j-1}),\delta(t_j))\ge d(x,y)$, hence $L_d(\delta)\ge d(x,y)$. Taking infima over chains and paths and using $d(x,y)=\inf_{\text{chains}}\ell$ [F6], the path-length infimum equals $d(x,y)$; thus $d$ is the intrinsic path metric and $(\Sigma,d)$ is a length space [F10]. [F4, F6, F10, F11]

1.5 Clause (3), geodesics. Assume the Axiom of Choice, as recorded in [F7]. Since the cellulation satisfies (H1)-(H3) [F4], every two points $x,y\in\Sigma$ are joined by a minimizing geodesic $\gamma\colon[0,d(x,y)]\to\Sigma$ with $d(\gamma(s),\gamma(t))=|s-t|$ [F7], so $(\Sigma,d)$ is a geodesic metric space [F10]. The case $x=y$ is the degenerate geodesic on $[0,0]$ included in [F7]. [F4, F7, F10]

2.1 Clause (2), local CAT(0). By step 1.2 the point $x$ lies in the relative interior of the cell $wW_T$, and by step 1.1 the link $\operatorname{Lk}_\Sigma(wW_T)$ is CAT(1) for its truncated angular metric, so the polyhedral link criterion [F3] shows that $\Sigma$ is locally CAT(0) at $x$; since $x\in\Sigma$ was arbitrary and local CAT(0) means that every point has a CAT(0) ball [F10], the space $\Sigma$ is locally CAT(0). [F3, F10, step 1.1]

3.1 Clause (4). The space $\Sigma$ is simply connected [F8]; it is connected and complete by step 1.3, locally CAT(0) by step 2.1, and a length space by step 1.4, so the globalization theorem [F9] applies. It gives that every two points of $\Sigma$ are joined by exactly one local geodesic, which is minimizing, that every geodesic triangle satisfies the CAT(0) inequality, so that $\Sigma$ is CAT(0) [F10], and that for every base point $x_0$ the geodesic contraction $H\colon\Sigma\times[0,1]\to\Sigma$ is continuous with $d(H_t(x),H_t(y))\le t\,d(x,y)$; in particular $\Sigma$ is contractible. Since a geodesic segment is a local geodesic by [F10], every geodesic segment joining two points of $\Sigma$ is the unique local geodesic provided by [F9], so every two points are joined by exactly one geodesic, which is minimizing. [F8, F9, F10, step 2.1, step 1.3, step 1.4]

4.1 Clause (5) and the Choice bookkeeping. The conclusions hold for every finite-rank Coxeter system and every tuple $(d_s)$ of positive numbers: the link computations of step 1.1 are independent of the tuple by [F16] while the chain metric $d$ depends on it, and no word hyperbolicity, automaticity, flat-subspace or finite-subgroup statement is asserted. The Axiom of Choice is used exactly in step 1.5 through [F7] for minimizing geodesics, and in step 1.1 through the A-page link lemma [F1,F15], whose construction of spherical links and general CAT(1) conclusion both use Choice. The chart step 1.2, the local CAT(0) step 2.1, the metric and intrinsic-metric steps 1.3-1.4, the globalization step 3.1 and the uniqueness statements used there are choice-free consequences of the cited items. [F1, F7, F15, F16, step 1.1, step 1.5] ∎

## Remarks

**Supplier uses reconciled.** The AC-qualified angular-link lemma supplies CAT(1) in step 1.1; its finite large metric flag theorem works on untruncated intrinsic geodesic components before transferring the short tests. The product-ball chart is used in step 1.2, and the completed Berestovskii/polyhedral-link criterion gives local CAT(0) in step 2.1. The corrected Davis cellulation supplies the finite-shape, local-finiteness and metric hypotheses, and the simply-connectedness theorem supplies step 3.1. That step uses the completed local-to-global theorem with all of its connectedness, completeness, length-space and local CAT(0) hypotheses verified above. These mathematical reconciliations do not record or refresh engine decisions.
