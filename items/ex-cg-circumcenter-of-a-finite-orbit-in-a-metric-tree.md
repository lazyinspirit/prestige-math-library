---
id: "ex-cg-circumcenter-of-a-finite-orbit-in-a-metric-tree"
kind: "example"
title: "Circumcenters of finite sets in the infinite dihedral Davis line"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: [def-cg-spherical-nerve-coset-poset-and-davis-realization, thm-cg-davis-complex-cell-incidence-and-stabilizers, lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta, def-cg-real-coxeter-form-and-reflection, def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, def-cayley-graph, lem-finite-set-has-max, def-free-product-of-a-family-of-groups, thm-normal-form-for-free-products, def-hh-coxeter-matrix-word-group-and-length, def-cg-cat-zero-cat-one-and-local-geodesic, thm-reals-cauchy-complete, def-isometry-and-metric-embedding, def-axiom-of-choice, lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, first-edition author manuscript, 2007-2008"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Example 7.4.1, printed p. 132 (universal Coxeter groups have interval cells and a regular k-valent tree; k=2 gives the line); Example 7.4.5, printed p. 133 (for L=S^0, W=D_infinity and Sigma is the real line cellulated by equal intervals); section 12.1, printed p. 231 (an edge labelled s has length 2d_s). These passages were checked against the manuscript; the local proof below supplies the line identification and metric calculation."
    - title: "M. R. Bridson and A. Haefliger, Metric Spaces of Non-Positive Curvature, Grundlehren der mathematischen Wissenschaften 319, Springer 1999"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "Chapter II.2, Proposition 2.7, PDF pp. 200-201 (printed pp. 178-179), gives the general complete-CAT(kappa) center result; cited only for comparison with the direct line calculation, not used as its proof."
---

## Example

Let $(W,S)$ be the universal Coxeter system with $S=\{s,t\}$ and $m(s,t)=\infty$, so $W=\langle s,t\mid s^2=t^2=1\rangle\cong C_2*C_2=D_\infty$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[thm-normal-form-for-free-products]]). Let $\Sigma$ be its Davis complex with the cellulation and chain metric of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]], with $d_s=d_t=1/2$; each Coxeter $1$-cell then has length $1$ ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (4), [[def-cg-real-coxeter-form-and-reflection]] (2)).

**(i) The metric line.** The spherical subsets are $\emptyset,\{s\},\{t\}$, so $\Sigma$ has only vertices and the edges $\{w,ws\}$ and $\{w,wt\}$. Its metric realization is isometric to $\mathbb R$ with the usual metric.

**(ii) Circumcenters of finite sets.** If $Y\subseteq\Sigma$ is nonempty and finite, its radius function $r_Y(x)=\max_{y\in Y}d(x,y)$ has minimum $D/2$, where $D=\max_{a,b\in Y}d(a,b)$, and its unique minimizer is the midpoint of any diameter segment $[a,b]$.

**(iii) Finite orbits.** Every finite subgroup $H\le W$ is trivial or has order two. For each $x_0\in\Sigma$, the circumcenter of $Hx_0$ is fixed by $H$: it is $x_0$ when $H$ is trivial or fixes $x_0$, and otherwise it is the midpoint of $[x_0,rx_0]$ for the nonidentity reflection $r\in H$. This explicit orbit-to-center map agrees, under the Axiom of Choice, with the center map in the companion result [[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] (2),(4); the local computation and fixed-point conclusion above do not use Choice.

## Facts & Assumptions

**Given:** The universal Coxeter system $(W,S)$ with $S=\{s,t\}$ and $m(s,t)=\infty$, its Davis complex $\Sigma$ with the stated cellulation and chain metric, and $d_s=d_t=1/2$. The Axiom of Choice is assumed only for the comparison with the companion center theorem in step 4.1.

[F1] The Coxeter system is the group presented by its Coxeter matrix; a label $m(s,t)=\infty$ imposes no relator on $s,t$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] The presentation of $W$ with only the relations $s^2=t^2=1$ has the universal property of the free product of two cyclic groups of order two: the free-product property gives a map $C_2*C_2\to W$ and the Coxeter-presentation property gives a map $W\to C_2*C_2$, and uniqueness makes their composites identities ([[def-free-product-of-a-family-of-groups]], [[def-hh-coxeter-matrix-word-group-and-length]]). Hence $W\cong C_2*C_2$; by [F3], every alternating word $(st)^n$ with $n\ge1$ is nonempty reduced, so $st$ has infinite order ([[thm-normal-form-for-free-products]]).

[F3] Every element of a free product has a unique reduced syllable expression; the identity is the empty word and no nonempty reduced word is the identity ([[thm-normal-form-for-free-products]]).

[F4] A subset $T$ is spherical when $W_T$ is finite; spherical cosets index the Davis cells ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1),(2)).

[F5] Under the cellulation identification, the cell indexed by $wW_T$ has dimension $|T|$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)).

[F6] The $1$-skeleton is the undirected, $S$-labelled Cayley graph ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (3)).

[F7] The Cayley graph has vertex set $W$ and edges $\{w,ws\}$ for generators $s$ ([[def-cayley-graph]]).

[F8] For $|T|=1$, the Coxeter cell is the interval from $-d_se_s$ to $d_se_s$ ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (4)).

[F9] The Coxeter form satisfies $B(e_s,e_s)=1$ for every generator ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F10] The chain metric candidate is the infimum of lengths of finite chains, each consecutive pair of which lies in a common cell ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

[F11] Every nonempty finite subset of the real line has a minimum and maximum ([[lem-finite-set-has-max]]).

[F12] Every Cauchy sequence of real numbers converges in $\mathbb R$ ([[thm-reals-cauchy-complete]]).

[F13] CAT(0) means geodesicity together with Euclidean triangle comparison ([[def-cg-cat-zero-cat-one-and-local-geodesic]] (2),(3)); the real line satisfies the comparison because its geodesic triangles are collinear.

[F14] An isometry is a bijective map preserving all distances ([[def-isometry-and-metric-embedding]]).

[F15] The Axiom of Choice is assumed only for step 4.1 ([[def-axiom-of-choice]]).

[F16] Under AC, the companion theorem gives the unique center of a nonempty bounded set in a complete CAT(0) space, and isometries preserving that set fix its center ([[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] (1),(2),(4)).

## Verification

**Given:** The universal system and Davis complex above; all claims through step 3.1 are proved without Choice, while step 4.1 assumes AC solely to compare with the general center theorem.

**Proof technique:** direct.

1.1 By [F2,F3], $st$ has infinite order, so $W_{\{s,t\}}=W$ is infinite, whereas $W_\emptyset$, $W_{\{s\}}$ and $W_{\{t\}}$ are finite. Thus the spherical subsets are exactly $\emptyset,\{s\},\{t\}$, and the Davis cells are vertices and edges only. By [F6,F7] the $1$-skeleton is $G=\operatorname{Cay}(W,\{s,t\})$. [F1, F2, F3, F4, F5, F6, F7]

1.2 Put $p:=st$ and, for $n\in\mathbb Z$, set $v_{2n}:=p^n$ and $v_{2n+1}:=p^ns$. The reduced-word normal form shows these are all distinct and exhaust $W$: the empty word and the even-length reduced words are $p^n$ for unique $n\in\mathbb Z$, while every odd-length reduced word is $p^ns$ for a unique $n\in\mathbb Z$. Consecutive vertices $v_{2n},v_{2n+1}$ and $v_{2n+1},v_{2n+2}$ differ by right multiplication by $s$ and $t$, respectively. Since $s$ and $t$ are distinct reduced one-syllable words, each vertex has exactly these two distinct neighbors, and this enumeration identifies $G$ with the bi-infinite line. [F3, F6, F7, algebra]

1.3 Each edge has length $2d_s=2d_t=1$ by [F8, F9]. Send $v_k$ to $k$ and extend linearly over each edge. Every cell is a point or one of these intervals by [F5], so this map is isometric on each cell. For any chain from $x$ to $y$, the sum of its cellwise lengths is at least the absolute difference of the endpoint coordinates; conversely, the finite line segment between them is a chain with exactly that length. Thus by [F10] the chain metric candidate is the usual real-line metric under this map, so it is a metric and gives an isometry $\Sigma\to\mathbb R$. It follows from [F12, F13] that $\Sigma$ is complete and CAT(0). Left multiplication by any $g\in W$ sends each vertex $w$ to $gw$ and each edge $\{w,ws\}$ or $\{w,wt\}$ to the corresponding edge at $gw$; its length-preserving extension is a bijective isometry for this metric by [F14]. [F5, F6, F7, F8, F9, F10, F12, F13, F14, construct, algebra]

1.4 Let $Y\subseteq\Sigma\cong\mathbb R$ be nonempty and finite. By [F11], the set of line coordinates of $Y$ has a minimum $a$ and maximum $b$. Put $D:=b-a$; since all coordinates lie between $a$ and $b$ and both endpoints belong to $Y$, this is the diameter of $Y$. Let $m$ be the point with coordinate $(a+b)/2$. Every $y\in Y$ has coordinate between $a$ and $b$, so $d(y,m)\le D/2$; the endpoints $a,b$ each lie at distance $D/2$, hence $r_Y(m)=D/2$. [F11, given, algebra]

2.1 For any $x\in\Sigma\cong\mathbb R$, $r_Y(x)\ge\max\{|x-a|,|x-b|\}$, so the inequalities $|x-a|\le r_Y(x)$ and $|x-b|\le r_Y(x)$ imply $2r_Y(x)\ge |x-a|+|x-b|\ge b-a=D$. If $r_Y(x)=D/2$, then both $|x-a|$ and $|x-b|$ are at most $D/2$, whose two closed intervals intersect only at $m=(a+b)/2$ (also when $D=0$). Hence $m$ is the unique minimizer and the unique center of $Y$. [F11, step 1.4, algebra]

3.1 Write $H\le W$ for a finite subgroup. The normal-form indexing in step 1.2 says every element is either $p^n$ or $p^ns$. If $n\ne0$, $p^n$ has infinite order; each $p^ns$ is an involution because $s p^n s=p^{-n}$. Two distinct involutions $p^ms$ and $p^ns$ have product $p^{m-n}$ with $m\ne n$, which has infinite order. Consequently a finite subgroup is either $\{1\}$ or $\{1,r\}$ for one reflection $r=p^ns$. If $H=\{1\}$, the orbit $Hx_0=\{x_0\}$ has center $x_0$. If $H=\{1,r\}$ and $rx_0=x_0$, its orbit again has center $x_0$; otherwise the orbit is $\{x_0,rx_0\}$ and step 2.1 gives its unique center as their midpoint. Since $r$ is an isometry interchanging these endpoints, it fixes that midpoint. Let $f$ be an isometry of $\mathbb R$, put $c=f(0)$ and write $f(1)=c+\epsilon$ with $\epsilon\in\{1,-1\}$. For $y=f(x)-c$, the two distance equalities give $|y|=|x|$ and $|y-\epsilon|=|x-1|$; subtracting their squares gives $y=x$ if $\epsilon=1$ and $y=-x$ if $\epsilon=-1$. Thus every isometry is a translation $x\mapsto x+c$ or a reflection $x\mapsto -x+c$. An involutive translation is the identity, while a reflection has the unique fixed point $c/2$; the left action is faithful on vertices, so nonidentity $r$ is not the identity isometry and hence has a unique fixed point. Thus in every case the orbit center is fixed by $H$. [F3, step 1.2, step 1.3, step 2.1, algebra]

4.1 Under AC [F15], [F16] applies to $X=\Sigma$ and $Y=Hx_0$: step 1.3 gives completeness, CAT(0), and an isometric action; the orbit is nonempty and finite, hence bounded. The general theorem's center is the unique minimizer of the same radius function used in steps 1.4 and 2.1, so it equals the explicitly computed orbit center. This is precisely the companion A-page center map restricted to this line. The local orbit classification and fixed-point calculation in step 3.1 do not use AC; AC enters here only through the general theorem's minimizing-sequence argument. [F12, F13, F14, F15, F16, step 1.3, step 1.4, step 2.1, step 3.1] ∎

## Remarks

- Davis's examples independently identify the universal Coxeter Davis complex as a regular tree and, in rank two, the real line. The proof above establishes the line metric and the finite-set center formula directly.
- The normalization $d_s=d_t=1/2$ makes all edges unit length. Other positive choices give alternating edge lengths $2d_s$ and $2d_t$. Using their cumulative lengths as vertex coordinates in step 1.3 still identifies the metric realization with the real line; the center is still the metric midpoint of a diameter segment, though its position in the original cell coordinates can change.

## Current supplier receipt status

These direct in-run supplier decisions remain open. The final report distinguishes current escalations from missing or stale receipts.

- `def-cg-spherical-nerve-coset-poset-and-davis-realization`: its current in-run supplier decision is not closed; this item consumes it in Facts F4 and proof steps 1.1.
- `thm-cg-davis-complex-cell-incidence-and-stabilizers`: its current in-run supplier decision is not closed; this item consumes it in Facts F5 and proof steps 1.1, 1.3.
- `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta`: its current in-run supplier decision is not closed; this item consumes it in Facts F6, F8 and proof steps 1.1, 1.2, 1.3.
- `def-cg-real-coxeter-form-and-reflection`: its current in-run supplier decision is not closed; this item consumes it in Facts F9 and proof steps 1.3.
- `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`: its current in-run supplier decision is not closed; this item consumes it in Facts F10 and proof steps 1.3.
- `def-hh-coxeter-matrix-word-group-and-length`: its current in-run supplier decision is not closed; this item consumes it in Facts F1, F2 and proof steps 1.1.
- `def-cg-cat-zero-cat-one-and-local-geodesic`: its current in-run supplier decision is not closed; this item consumes it in Facts F13 and proof steps 1.3, 4.1.
- `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets`: its current in-run supplier decision is not closed; this item consumes it in Facts F16 and proof steps 4.1.
