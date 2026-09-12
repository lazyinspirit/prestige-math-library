---
id: "thm-lefschetz-fixed-point-theorem-for-finite-complexes"
kind: "theorem"
title: "Lefschetz fixed-point theorem for finite complexes"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-lefschetz-number-of-a-finite-cw-self-map","lem-hopf-trace-formula","lem-finite-cw-complexes-are-euclidean-neighborhood-retracts","thm-trace-of-ab-equals-trace-of-ba","def-axiom-of-choice","lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero","lem-the-open-star-criterion-produces-a-simplicial-map","thm-lebesgue-number-lemma","prop-cellular-maps-induce-cellular-chain-maps","thm-relative-homology-of-consecutive-cw-skeleta","thm-heine-borel-rn"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 2C.3, pp.179–181
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X$ be a finite CW complex and $f:X\to X$ continuous. If its rational Lefschetz number $L(f)$ is nonzero, then $f$ has a fixed point. Equivalently, a fixed-point-free self-map has Lefschetz number zero. No converse from $L(f)=0$ to absence of fixed points is asserted. AC enters through the Euclidean neighborhood-retract realization of $X$.

## Facts & Assumptions

[F1] [[def-lefschetz-number-of-a-finite-cw-self-map]] defines the finite alternating rational homology trace sum, proves its well-definedness, and records homotopy invariance.

[F2] [[lem-hopf-trace-formula]] equates alternating chain and homology traces for a bounded finite-dimensional chain complex over a field.

[F3] [[lem-finite-cw-complexes-are-euclidean-neighborhood-retracts]] embeds $X$ as a compact Euclidean subset with a retraction from an open neighborhood, under AC.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]] equates the traces of rectangular products, including zero-dimensional spaces.

[F5] [[def-axiom-of-choice]] is assumed for [F3]'s nearest-point and controlled-cell-extension selections.

[F6] [[lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero]] gives arbitrarily small simplex mesh and bounds each vertex star's diameter by twice the mesh, in the original Euclidean metric.

[F7] [[lem-the-open-star-criterion-produces-a-simplicial-map]] turns a star-compatible vertex assignment into a simplicial map with a straight-line homotopy to the original map, the two images of each point lying in the same target simplex.

[F8] [[thm-lebesgue-number-lemma]] supplies a positive Lebesgue number for an open cover of a compact metric space, without AC.

[F9] [[prop-cellular-maps-induce-cellular-chain-maps]] says that a map preserving skeleta induces the relative skeletal chain map and that its homology map is the singular homology map.

[F10] [[thm-relative-homology-of-consecutive-cw-skeleta]] identifies the relative skeletal group with one coefficient copy per cell, via the characteristic disks and their quotient spheres.

[F11] [[thm-heine-borel-rn]] gives compactness of closed bounded Euclidean sets, without choice.

## Proof

**Given:** $X,f$ as stated. We prove that absence of fixed points implies $L(f)=0$.

1.1 If $X$ is empty, [F1] gives $L(f)=0$. Otherwise apply [F3] and identify $X$ with a compact subset of $\mathbb R^m$, with a retraction $r:O\to X$ from an open $O$. We may increase $m$ to at least one. There is $\eta>0$ such that every point at distance less than $\eta$ from $X$ lies in $O$. To verify this directly, the balls $B(x,a)$ with $x\in X$, $a>0$ and $B(x,3a)\subset O$ cover $X$. Choose finitely many covering balls $B(x_j,a_j)$ and put $\eta=\min_j a_j$. If $y$ has distance less than $\eta$ from $X$, take $z\in X$ with $|y-z|<\eta$ and a covering ball containing $z$. Then $|y-x_j|<\eta+a_j\le2a_j$, so $y\in O$. These are finite choices. [F1, F3, F5, given]

2.1 Choose a positive grid length $h$ with $\sqrt m h<\eta$. Take all closed cubes of the grid $h\mathbb Z^m$ that meet $X$. There are finitely many, since $X$ is bounded; their union contains $X$ and lies in $O$ by step 1.1. Triangulate every such cube compatibly as follows. In coordinates $y_i\in[0,1]$ measured from its lower corner, use the regions $0\le y_{\pi(1)}\le\cdots\le y_{\pi(m)}\le1$, for all permutations $\pi$. Each region is a simplex: consecutive coordinate differences together with $y_{\pi(1)}$ and $1-y_{\pi(m)}$ are nonnegative barycentric coordinates summing to one. The vertices are the successive zero-one vectors obtained by turning on coordinates in reverse order. Equalities give the common faces, these regions cover the cube by ordering its coordinates, and on any grid face the rule reduces to the identical ordering rule in the unfixed coordinates. Thus adjacent cube triangulations agree. Include all faces and call the resulting finite Euclidean simplicial complex $P$. Its realization is compact by [F11], being a finite union of closed bounded simplices. These simplices, with interiors as cells, form a finite CW complex: their boundaries are unions of lower faces and finite closed-set pasting gives the weak topology. Restrict $r$ to $P$ and let $i:X\hookrightarrow P$ be inclusion. Put $F=ifr:P\to P$. A fixed point $y=F(y)$ lies in $X$, where $r(y)=y$, so is exactly a fixed point of $f$; conversely every fixed point of $f$ is fixed by $F$. [F11, step 1.1]

3.1 For each degree, write $A=i_*f_*:H_j(X;\mathbb Q)\to H_j(P;\mathbb Q)$ and $B=r_*:H_j(P;\mathbb Q)\to H_j(X;\mathbb Q)$. The spaces are finite-dimensional by [F1]. Composition on singular chains gives composition on homology, and $r i=\mathrm{id}_X$ gives $AB=F_*$ and $BA=f_*$. Hence [F4] proves $\operatorname{tr}(F_*)=\operatorname{tr}(f_*)$ in each degree. Summing the finitely many nonzero degrees yields $L(F)=L(f)$. No homotopy equivalence between $P$ and $X$ has been assumed. [F1, F4, step 2.1]

3.2 Suppose $f$ has no fixed point. Then $F$ has none by step 2.1. The continuous positive function $d(y)=|F(y)-y|$ has a uniform positive lower bound: the open sets $\{y:d(y)>1/n\}$ for positive integers $n$ cover compact $P$. A finite subcover gives $d(y)>1/N$ for all $y$, where $N$ is the largest of its indices. Put $\epsilon=1/N$. By [F6], subdivide $P$ barycentrically to a finite complex $L$ of mesh less than $\epsilon/3$, using the same Euclidean metric. This also works in dimension zero, where its mesh is zero. [F6, step 2.1]

4.1 The inverse images under $F$ of the open vertex stars of $L$ cover $P$. By [F8] let $\delta>0$ be a Lebesgue number. Subdivide $L$ further to $K$ so that $2m(K)<\delta$, by [F6]. Every nonempty closed vertex star of $K$ has diameter less than $\delta$, so is contained in $F^{-1}(\operatorname{st}_L(w))$ for some vertex $w$. Assign such a $w=g(v)$ to each vertex $v$ of $K$; there are finitely many. The open-star condition of [F7] follows, giving a simplicial $g:K\to L$ and a homotopy $F\simeq |g|$. For every point $y$, $F(y)$ and $g(y)$ lie in a common simplex of $L$, so $|F(y)-g(y)|\le m(L)<\epsilon/3$. If a closed simplex $\sigma$ of $K$ met $g(\sigma)$, there would be $x,y\in\sigma$ with $x=g(y)$. Since $K$ subdivides $L$, $|x-y|\le\operatorname{diam}\sigma\le m(L)<\epsilon/3$. Therefore $|F(y)-y|\le|F(y)-g(y)|+|x-y|<2\epsilon/3$, contradicting step 3.2. Thus $g(\sigma)\cap\sigma=\varnothing$ for every simplex. This quantitative estimate uses the ordinary star construction, not an extra carrier assertion about relative approximation. [F6, F7, F8, step 3.2]

5.1 Regard $|g|$ as a self-map of the common space $|K|=|L|=P$. It preserves the skeleta of $K$: a simplicial map takes $K^n$ into $L^n$, and $L^n\subset K^n$, because subdivision triangulates each face within itself. By [F9] it induces a chain endomorphism $T_n$ on $C_n=H_n(K^n,K^{n-1};\mathbb Q)$, computing $g_*$ on homology. These groups have the finite oriented simplex bases of [F10] and are zero above $\dim P$. For an $n$-simplex $\sigma$, its diagonal coefficient is zero. For $n=0$ this says directly that its vertex is not mapped to itself. For $n\ge1$, collapse every other closed $n$-simplex and the $(n-1)$-skeleton to a point; the resulting continuous coordinate map $q_\sigma:K^n\to\sigma/\partial\sigma$ is continuous by finite closed-simplex pasting. On the relative group, its map is projection to the $\sigma$ coordinate of [F10]: it is the characteristic quotient on $\sigma$ and constant on all other generators. But $q_\sigma g$ is constant on $\sigma$ by step 4.1, so it sends the relative characteristic generator to zero in $H_n(\sigma/\partial\sigma,*;\mathbb Q)$. This proves the claimed zero coefficient, including when $g$ collapses $\sigma$ to a lower-dimensional face. Hence $\operatorname{tr}(T_n)=0$ in every degree. [F9, F10, step 4.1]

6.1 Apply [F2] to this bounded finite-dimensional rational chain complex and its endomorphism. By step 5.1 its alternating chain trace is zero, while [F9] identifies its homology trace with $L(g)$. Thus $L(g)=0$. The homotopy in step 4.1 and [F1] give $L(F)=L(g)$, and step 3.1 gives $L(f)=L(F)=0$. Taking the contrapositive proves the statement. [F1, F2, F9, step 3.1, step 4.1, step 5.1]

7.1 Empty $X$ was handled in step 1.1. For a singleton its only self-map fixes the point and [F1] gives $L=1$. For a finite discrete space the conclusion is also the point-basis fixed-point count in [F1]. Zero homology groups and zero-size matrices cause no exception by [F4], and step 5.1 treats both zero-cells and collapsed simplices. The mesh inequalities are strict, so no endpoint equality is silently substituted; [F7]'s homotopy has precisely endpoints $F$ and $g$. The statement's equivalent formulation is exactly the logical contrapositive proved in step 6.1, not the converse assertion that every map with a fixed point has nonzero Lefschetz number. The only arbitrary selections are [F3]'s use of [F5]; all grid, subdivision, cover and vertex selections here are finite. [F1, F3, F4, F5, F7, step 1.1, step 5.1, step 6.1] ∎
