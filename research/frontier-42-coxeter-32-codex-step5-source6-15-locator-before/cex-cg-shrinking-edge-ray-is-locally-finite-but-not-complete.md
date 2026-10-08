---
id: cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete
kind: counterexample
title: "A locally finite shrinking-edge ray is not complete"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, thm-cg-polyhedral-chain-metric-topology-and-properness, def-metric-space, def-complete-metric-space, def-cauchy-in-metric, def-metric-convergence, def-metric-ball, def-metric-compactness, def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space, lem-geometric-sequence-null, thm-compact-implies-complete-and-totally-bounded, def-natural-numbers, def-connected-space, cor-connected-subsets-of-the-line, thm-continuous-image-of-a-connected-space, thm-unions-of-connected-sets, def-interval]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.7.11, printed p. 101 (intervals of shrinking length glued end to end, isometric to a half-open interval); I.7.13 and I.7.19, printed pp. 101 and 105-111 (finitely many shapes, not local finiteness, is the completeness hypothesis)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix A.1, printed p. 419 (local finiteness: each cell is a face of only finitely many cells); Appendix I.3, printed pp. 507-508 (the printed completeness claim whose clause local finiteness is refuted here)"
verification:
  precheck: pending
---

## Statement refuted

> "Every connected locally finite isometric polyhedral gluing whose cells are compact and convex, with no hypothesis on the number of isometry classes of cells, is complete for its chain metric."

The claim is false: the shrinking-edge ray constructed below has compact convex $1$-cells, is connected and locally finite, yet its chain metric makes it isometric to the half-open interval $[0,2)$ with the Euclidean metric, which is not complete. The dropped hypothesis is exactly the finite-shapes condition (H3) of [[thm-cg-polyhedral-chain-metric-topology-and-properness]].

## Facts & Assumptions

**Given:** The real line with its usual metric $d_{\mathbb R}(x,y)=|x-y|$; for each $n\in\mathbb N$ (with $\mathbb N$ containing $0$, [[def-natural-numbers]]) a copy $C_{e_n}$ of a closed interval of length $2^{-n}$ and a one-point cell $C_{v_n}$; the gluing data, weak topology and chain metric candidate $d$ of [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]].

[F1] An isometric polyhedral gluing of shape $P$ consists of nonempty compact convex polyhedral cells $C_p$ ($p\in P\setminus\{\varnothing\}$), affine face isometries satisfying the cocycle and intersection conditions, the quotient $X$ of the disjoint union of the cells, the weak topology, and the chain metric candidate: a chain is a finite sequence $x=x_0,\dots,x_m=y$ with each consecutive pair in a common cell, its length is the sum of the Euclidean distances of its steps computed in any common cells, and $d$ is the infimum of the chain lengths; the standing hypotheses are (H1) connectedness, (H2) local finiteness and (H3) finitely many isometry classes of cells. ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]])

[F2] Under (H1)-(H3) the chain metric candidate is a metric inducing the weak topology, and every closed bounded subset of $X$ is compact; in particular $(X,d)$ is complete ([[def-metric-compactness]], [[def-complete-metric-space]]). ([[thm-cg-polyhedral-chain-metric-topology-and-properness]])

[F3] A metric on a set satisfies $d(x,y)=0$ if and only if $x=y$, symmetry and the triangle inequality ([[def-metric-space]]); $d_{\mathbb R}(x,y)=|x-y|$ is a metric on $\mathbb R$ ([[lem-real-line-is-a-metric-space]]); the closed ball about $x$ of radius $r$ is the set of $y$ with $d(x,y)\le r$ ([[def-metric-ball]]).

[F4] A sequence $(y_k)$ in a metric space is Cauchy when for every real $\varepsilon>0$ there is $N$ with $d(y_m,y_k)<\varepsilon$ for all $m,k\ge N$; it converges to $y$ when for every real $\varepsilon>0$ there is $N$ with $d(y_k,y)<\varepsilon$ for all $k\ge N$; the space is complete when every Cauchy sequence converges. ([[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-complete-metric-space]])

[F5] A function $f\colon X\to Y$ between metric spaces is an isometry when it is bijective and $d_Y(f(x),f(x'))=d_X(x,x')$ for all $x,x'$; two metric spaces are isometric when such an $f$ exists ([[def-isometry-and-metric-embedding]]).

[F6] $2^{-k}\to0$: for every real $\varepsilon>0$ there is $N$ with $2^{-k}<\varepsilon$ for all $k\ge N$ ([[lem-geometric-sequence-null]]).

[F7] A compact metric space is complete ([[thm-compact-implies-complete-and-totally-bounded]]).

[F8] The closed interval $[a,b]\subset\mathbb R$ is an order-convex subset of $\mathbb R$, hence connected ([[cor-connected-subsets-of-the-line]], [[def-interval]], [[def-connected-space]]); a continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]); and if $A$ is connected and $A\cap A_i\ne\varnothing$ for every $i$ in a family of connected subsets, then $A\cup\bigcup_iA_i$ is connected ([[thm-unions-of-connected-sets]]).

## Counterexample

Put $a_0:=0$ and $a_{n+1}:=a_n+2^{-n}$ for $n\in\mathbb N$, so that $C_{e_n}:=[a_n,a_{n+1}]$ is a closed interval of length $2^{-n}$ and $a_k=2-2^{1-k}$ for $k\ge1$; also put $C_{v_n}:=\{a_n\}$. Let $P$ be the poset with elements $\varnothing$, the $v_n$ and the $e_n$ and relations $v_n<e_n$, $v_{n+1}<e_n$; let all face isometries be the identity inclusions between these subsets of $\mathbb R$; let $X$ be the quotient of $\bigsqcup_{p\ne\varnothing}C_p$ by the equivalence relation generated by them, with the weak topology; and let $d$ be the chain metric candidate. This is the **shrinking-edge ray**.

1.1 The gluing axioms hold. Every principal down-set is finite, $P_{\le v_n}=\{\varnothing,v_n\}$ being the face poset of a point and $P_{\le e_n}=\{\varnothing,v_n,v_{n+1},e_n\}$ that of the interval $[a_n,a_{n+1}]$; every two elements of $P$ have a meet, namely $v_n\wedge v_m=\varnothing$ for $n\ne m$, $v_n\wedge e_m=v_n$ when $n\in\{m,m+1\}$ and $\varnothing$ otherwise, and $e_n\wedge e_m=v_{n+1}$ when $m=n+1$, $v_n$ when $m=n-1$, and $\varnothing$ when $|n-m|\ge2$; also $p\wedge p=p$ and $p\wedge\varnothing=\varnothing$. The face isometries are the identity inclusions, the cocycle condition is vacuous (among nonempty elements there are no strictly increasing chains of three, since every element strictly above a vertex is an edge and every edge is maximal), and $p\mapsto F_{p,q}$ is a poset isomorphism onto the nonempty faces of $C_q$ for $q=v_n,e_n$. Since $a_k=2-2^{1-k}$ for $k\ge1$ by induction, the $a_k$ increase to $2$ [F6], so $\bigcup_nC_{e_n}=[0,2)$; the map $t\mapsto[t]$ from $[0,2)$ to $X$ is therefore a bijection onto $X$, injective because the only identifications are the identifications of the vertex copy of $a_k$ with its incident edge endpoints (two edge copies for $k\ge1$, one for $k=0$) and surjective because every point of a cell is such a real number $t$. Denote by $\varphi\colon X\to[0,2)$ the inverse and note $\varphi(\iota_{e_n}(t))=t$ for $t\in C_{e_n}$ and $\varphi(\iota_{v_n}(a_n))=a_n$, where $\iota_p$ is the quotient map. Each $\iota_p$ is injective, and the images of $C_p$ and $C_q$ in $X$ meet exactly in the image of $C_{p\wedge q}$: distinct cells of the family have disjoint interiors, and correspond under $\varphi$ to intervals that meet only in the shared endpoints $a_k$, which are the images of the cells $C_{v_k}$, while for $|n-m|\ge2$ the images are disjoint and $e_n\wedge e_m=\varnothing$. Hence $X$ is an isometric polyhedral gluing of shape $P$, with $1$-dimensional cells $C_{e_n}$ and $0$-dimensional cells $C_{v_n}$. [F1, F6]

2.1 (H1) $X$ is connected. For every $p$ the map $\iota_p$ is continuous, since the preimage of a weakly open $U\subseteq X$ is $U\cap\iota_p(C_p)$, relatively open in $\iota_p(C_p)$ by definition of the weak topology; so $\iota_{e_n}(C_{e_n})$ is connected, being a continuous image of the interval $C_{e_n}$ [F8]. Consecutive images meet: $\iota_{e_n}(C_{e_n})\cap\iota_{e_{n+1}}(C_{e_{n+1}})=\{\iota_{v_{n+1}}(a_{n+1})\}\ne\varnothing$. By induction each $Y_N:=\bigcup_{n\le N}\iota_{e_n}(C_{e_n})$ is connected, using [F8] with $A=Y_{N-1}$ and $A_N=\iota_{e_N}(C_{e_N})$; and $X=Y_0\cup\bigcup_{N\ge1}Y_N$ is connected by [F8] with $A=Y_0$, since $Y_0\cap Y_N=Y_0\ne\varnothing$ for every $N$ and $X=\bigcup_n\iota_{e_n}(C_{e_n})$. [F8, step 1.1]

2.2 (H2) $X$ is locally finite, and (H3) fails. By step 1.1, if $\varphi(x)\notin\{a_0,a_1,a_2,\dots\}$ then $x$ lies in exactly one cell image, namely the interior of the cell whose interval contains $\varphi(x)$; if $\varphi(x)=a_0$ then $x$ lies in $\iota_{v_0}(C_{v_0})$ and $\iota_{e_0}(C_{e_0})$; and if $\varphi(x)=a_k$ with $k\ge1$ then $x$ lies exactly in $\iota_{v_k}(C_{v_k})$, $\iota_{e_{k-1}}(C_{e_{k-1}})$ and $\iota_{e_k}(C_{e_k})$. So every point lies in at most three cells. For the number of shapes, let $f\colon C_{e_n}\to C_{e_m}$ be an isometry; then $2^{-n}=|a_{n+1}-a_n|=|f(a_{n+1})-f(a_n)|\le2^{-m}$, and symmetrically $2^{-m}\le2^{-n}$, so $n=m$ [F5]; the cells $C_{e_n}$ therefore have pairwise distinct isometry classes and there are infinitely many of them, while the vertex cells are all isometric to each other. Hence the gluing satisfies (H1) and (H2) but not (H3), and its cells are compact convex polyhedral cells. [F1, F5, step 1.1]

2.3 The chain metric is the coordinate difference: $d(x,y)=|\varphi(x)-\varphi(y)|$ for all $x,y\in X$, and $\varphi$ is an isometry of $(X,d)$ onto the metric subspace $[0,2)$ of $\mathbb R$. Every chain step lies in a common cell $C_p$, and on $C_{e_n}$ and on $C_{v_n}$ the Euclidean metric is the restriction of $|x-y|$, so the length of a chain $x_0,\dots,x_m$ is $\sum_i|\varphi(x_{i-1})-\varphi(x_i)|\ge|\varphi(x)-\varphi(y)|$ by the triangle inequality for the metric $|\cdot|$ [F3]. For the reverse inequality assume $\varphi(x)<\varphi(y)$ and list $x=x_0,x_1,\dots,x_m=y$ by inserting, between $x$ and $y$, all the points $\varphi^{-1}(a_k)$ with $\varphi(x)<a_k<\varphi(y)$ in increasing coordinate order; there are finitely many because $a_k\to2>\varphi(y)$, and consecutive terms of this sequence lie in a common cell (a point of $C_{e_n}$ with the next vertex, consecutive vertices $a_k,a_{k+1}$ in $C_{e_k}$, the last vertex before $y$ with $y$), and its length telescopes to $\varphi(y)-\varphi(x)$. Interchanging $x$ and $y$ handles the opposite order, and the case $x=y$ is the one-term chain. Taking the infimum gives $d(x,y)=|\varphi(x)-\varphi(y)|$, so $d$ is real-valued, symmetric, vanishes only for $x=y$ and satisfies the triangle inequality; hence $d$ is a metric on $X$ and $\varphi$ is an isometry onto $[0,2)$ [F3, F5, step 1.1]. [F1, F3, F5, step 1.1]

3.1 $(X,d)$ is not complete. Let $p_k:=\iota_{e_k}(a_{k+1})$ be the far endpoint of $C_{e_k}$, with $\varphi(p_k)=a_{k+1}=2-2^{-k}$. For $m>k$ one has $d(p_k,p_m)=|2^{-k}-2^{-m}|=2^{-k}-2^{-m}<2^{-k}$ by step 2.3, so $(p_k)$ is Cauchy: given a real $\varepsilon>0$, choose $N$ with $2^{-k}<\varepsilon$ for all $k\ge N$ [F6]; then $d(p_k,p_m)<2^{-k}<\varepsilon$ for all $m>k\ge N$ [F4]. Suppose $p_k\to p$ for some $p\in X$. The point $p$ lies in some cell $C_{e_N}$ and $\varphi(p)\le a_{N+1}=2-2^{-N}$; for every $k>N$ we get $d(p,p_k)=\varphi(p_k)-\varphi(p)\ge(2-2^{-k})-(2-2^{-N})=2^{-N}-2^{-k}\ge2^{-(N+1)}>0$ by step 2.3, so the sequence does not converge to $p$ [F4]. As $p$ was arbitrary, the Cauchy sequence $(p_k)$ has no limit and $(X,d)$ is not complete [F4]. In particular, the closed ball $\bar B(p_0,2)$ of radius $2$ about $p_0$ is all of $X$, because $d(p_0,x)=|1-\varphi(x)|\le1<2$ for every $x\in X$; and $X$ is not compact, since a compact metric space is complete [F7] whereas $X$ is not. [F3, F4, F6, F7, step 2.3]

4.1 Conclusion. The gluing satisfies (H1) by step 2.1 and (H2) by step 2.2, so by [F2] completeness would follow from (H3); step 2.2 shows that (H3) fails, namely that the cells fall into infinitely many isometry classes, and step 3.1 shows that the space is nevertheless incomplete. Hence the refuted statement is false, and the exact dropped hypothesis is finiteness of the number of isometry classes of the cells; the counterexample is also not proper, since for a proper space the closed bounded subset $\bar B(p_0,2)=X$ would be compact [F2] while $X$ is not compact. This is the shrinking-interval phenomenon of the Bridson-Haefliger chapter on metric cell complexes, and it explains why [[thm-cg-polyhedral-chain-metric-topology-and-properness]] assumes (H3) rather than local finiteness alone. [F2, step 2.2, step 3.1] ∎
