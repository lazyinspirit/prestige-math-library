---
id: lem-qa-30-membership-height-geometry
kind: lemma
title: "Height geometry and weak-membership binary search"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-30-quantum-membership-separation-model
  - def-subgradient-and-subdifferential
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - cor-bolzano-weierstrass-in-rn
  - thm-heine-borel-rn
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
axiom_use: "None; finite-dimensional geometry and finite oracle circuits suffice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "van Apeldoorn, Gilyen, Gribling, de Wolf, Convex optimization using quantum oracles, Lemmas 14–21 and Theorem 23"
      url: "https://arxiv.org/pdf/1809.00643"
---

## Statement

Let $B(0,r)\subseteq K\subseteq B(0,R)$ be a closed convex body in $\mathbb R^n$, $n\ge2$. In any rotated coordinates set $C=\{y:\exists t,(y,t)\in K\}$ and $h(y)=\min\{t:(y,t)\in K\}$. Then $h$ is convex, finite on $B(0,r)$, and $L=2R/r$-Lipschitz on $B(0,r/2)$. Every interior point of $C$ has a subgradient, and every such subgradient at a point in the interior of this ball has norm at most $L$.

For $\|y\|\le r/2$, a $\mathrm{MEM}_{\varepsilon,0}$ query at $(y,t)$, $t\le-r/2$, has these implications: an IN answer implies $t\ge h(y)-3R\varepsilon/r$; an OUT answer implies $t\le h(y)+2R\varepsilon/r$. Hence binary search on $[-R,-r/2]$, returning its final upper endpoint when its width is at most $\delta/3$, approximates $h(y)$ within $\delta$ if $\varepsilon\le r\delta/(3R)$. It uses $O(1+\log(R/\delta))$ membership queries and has a clean coherent implementation using the same order of queries and inverse queries.

Finally, let $a\ge0$. If $x=-\|x\|e_n$ receives OUT and $h(y)\ge h(0)+\langle v,y\rangle-a\|y\|-b$ on $C$, then $s=(-v,1)/\|(-v,1)\|$ satisfies $\langle s,z\rangle\ge\langle s,x\rangle-aR-b-2R\varepsilon/r$ for every $z\in K$.

## Facts & Assumptions

**Given:** The body, radii, height, deterministic weak-membership completion, and positive precision parameters in the Statement.

[F1] [[def-qa-30-quantum-membership-separation-model]] specifies the two valid weak-membership assertions and the radius sandwich.

[F2] A nonempty closed Euclidean convex set has a unique nearest point to each point. ([[thm-nearest-point-in-a-nonempty-closed-convex-set]])

[F3] A bounded Euclidean sequence has a convergent subsequence. ([[cor-bolzano-weierstrass-in-rn]])

[F4] A subgradient $p$ at $y$ means $h(z)\ge h(y)+\langle p,z-y\rangle$ throughout the domain. ([[def-subgradient-and-subdifferential]])

[F5] Closed bounded Euclidean sets are compact, and the Euclidean norm satisfies Cauchy–Schwarz. ([[thm-heine-borel-rn]], [[thm-cauchy-schwarz-and-the-euclidean-norm]])

## Proof


1.1 Compactness of $K$ makes each nonempty vertical section compact, so its minimum exists; projection makes $C$ compact and convex. Convex combinations of two minimizing boundary points show convexity of $h$. For $\|y\|\le r$, the inner ball supplies a point at height zero, while the outer ball bounds all heights below by $-R$. Thus $-R\le h(y)\le0$ on that ball. [given, F1, F5, algebra]

2.1 More generally on $B(0,d)$, $0<d<r$, let $y,y'$ be distinct and extend the directed line from $y$ through $y'$ by $r-d$ to $p=y'+(r-d)(y'-y)/\|y'-y\|$. Then $p\in B(0,r)$ and convexity on the segment $[y,p]$ gives $h(y')-h(y)\le R\|y'-y\|/(r-d)$. Exchange $y,y'$ and put $d=r/2$ to obtain the Lipschitz claim. [step 1.1, algebra]

2.2 The ball $B((y,0),r/2)$ lies in $K$. Its convex hull with $(y,h(y))$ contains a ball of radius $\theta r/2$ about $(y,(1-\theta)h(y))$ for every $0\le\theta\le1$: combine the vertex with every point of that ball. Consequently all heights between $h(y)(1-2\varepsilon/r)$ and $-r/2$ lie in the inward $\varepsilon$-erosion, whenever this interval is nonempty. If $\varepsilon\ge r/2$ the claimed OUT bound is automatic from $h(y)\ge-R$ and $t\le-r/2$. For $0<\varepsilon<r/2$, write $H=-h(y)\le R$. If the interval is empty, then $H(1-2\varepsilon/r)<r/2$, so $H-r/2<2H\varepsilon/r\le2R\varepsilon/r$; every $t\le-r/2$ therefore satisfies $t<h(y)+2R\varepsilon/r$. If the interval is nonempty, OUT excludes its heights, so $t\le h(y)(1-2\varepsilon/r)\le h(y)+2R\varepsilon/r$. This uses an inclusion of balls, not an incorrect identity for the erosion of a cone. [F1, step 1.1, algebra]

3.1 For completeness, subgradients here need no arbitrary selection. The truncated epigraph $E=\{(y,t):y\in C,\ h(y)\le t\le R+1\}$ is compact and convex: it is the image of the compact set of pairs consisting of a point of $K$ and a permitted upward vertical displacement. Fix interior $y$ and $p=(y,h(y))$. Let $p_j=p-e_n/j$, and let $q_j$ be its unique nearest point in $E$ by [F2]. Minimality along a segment gives $\langle q_j-p_j,w-q_j\rangle\ge0$ for all $w\in E$, by expanding squared distance and taking the right derivative at zero. Moreover $\|q_j-p\|\le2/j$. A subsequence of the unit normals $(q_j-p_j)/\|q_j-p_j\|$ converges by [F3] to a unit normal $(u,t)$ with $\langle(u,t),w-p\rangle\ge0$ on $E$. Upward vertical segments imply $t\ge0$; if $t=0$, interior displacements of $y$ in both horizontal directions force $u=0$, a contradiction. Thus $t>0$ and $-u/t$ is a subgradient of $h$ on $C$. At a point where the Lipschitz bound holds on a neighborhood, applying the subgradient inequality in the directions $\pm p/\|p\|$ gives $\|p\|\le L$. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 Fix $\|y\|\le r/2$. A subgradient $p$ of norm at most $2R/r$ gives the supporting inequality $\langle(-p,1),(z,t')-(y,h(y))\rangle\ge0$ on $K$. If $(y,t)$ is within $\varepsilon$ of $K$, Cauchy–Schwarz gives $t\ge h(y)-\varepsilon\|(-p,1)\|\ge h(y)-3R\varepsilon/r$. This proves the IN implication, also at the transverse-ball boundary by the bound from step 2.1 on slightly larger balls and passage to its limit. [F1, F5, step 2.1, step 3.1, algebra]

5.1 Maintain endpoints $\ell,u$. Initially $\ell=-R\le h(y)+2\delta/3$ and $u=-r/2\ge h(y)-\delta$. An IN answer replaces $u$ by the midpoint and preserves its lower bound by step 4.1; OUT replaces $\ell$ and preserves its upper bound by step 2.2. When $u-\ell\le\delta/3$, these invariants give $h(y)-\delta\le u\le h(y)+\delta$. Each iteration halves the bracket, proving the logarithmic query count. Fixed finite arithmetic and the deterministic oracle completion make the whole binary-search transcript a function of the input label. Store its transcript, copy its output, and reverse its computation and oracle calls; this implements that value oracle with clean work and only a constant factor more queries. [F1, step 4.1, step 2.2, construct, algebra]

6.1 Write $z=(y,t)\in K$. Evaluating the approximate-subgradient premise at $y=0$ gives $b\ge0$. Since $a\ge0$ and $\|y\|\le R$, that inequality gives $\langle(-v,1),z\rangle=t-\langle v,y\rangle\ge h(0)-aR-b$. At $x=(0,-\|x\|)$ the OUT implication gives $h(0)\ge-\|x\|-2R\varepsilon/r$; if its height is below $-R$, this inequality follows directly from $h(0)\ge-R$. If $\|x\|<r/2$, an OUT answer requires $\varepsilon\ge r/2$ by the inner ball, and the same inequality again follows from $h(0)\ge-R$. Divide by $\|(-v,1)\|\ge1$ to obtain the stated separation inequality. [step 2.2, given, algebra] ∎

## Remarks

The schematic planar section below illustrates the radius sandwich and a vertical query at a fixed $\|y\|\le r/2$. The lower marked point is $(y,t)$; the boundary point above it is $(y,h(y))$. The projection of $K$ onto the horizontal axis is $C$. The drawing is illustrative, not to scale; the proof does not depend on it.

```tikz
\begin{tikzpicture}[scale=0.95]
\draw[dashed] (0,0) circle (2.5);
\draw[thick] (0,0) ellipse (2.25 and 1.7);
\draw[dotted] (0,0) circle (1);
\draw[->] (-2.7,0) -- (2.9,0) node[right] {$y$};
\draw[->] (0,-2.65) -- (0,2.8) node[above] {$t$};
\draw[->] (0,0) -- (-0.8,0.6) node[left] {$r$};
\draw[->] (0,0) -- (1.5,2) node[right] {$R$};
\node at (-1.5,1.15) {$K$};
\draw[dashed] (0.45,-2.4) -- (0.45,0.3);
\fill (0.45,-1.6657) circle (1.5pt);
\draw (0.45,-1.6657) -- (1.25,-1.85) node[right] {$(y,h(y))$};
\fill (0.45,-2.15) circle (1.5pt);
\draw (0.45,-2.15) -- (1.25,-2.45) node[right] {$(y,t)$};
\draw[|-|] (-2.25,-3.05) -- (2.25,-3.05) node[midway,below] {$C$};
\node[anchor=west] at (3.6,1.7) {$\|y\|\le r/2,\quad t\le-r/2$};
\node[anchor=west] at (3.6,0.7) {$\mathrm{IN}:\quad t\ge h(y)-3R\varepsilon/r$};
\node[anchor=west] at (3.6,-0.3) {$\mathrm{OUT}:\quad t\le h(y)+2R\varepsilon/r$};
\node[anchor=west] at (3.6,-1.5) {$m=(\ell+u)/2$};
\node[anchor=west] at (3.6,-2.3) {$\mathrm{IN}:\ u\leftarrow m,\quad\mathrm{OUT}:\ \ell\leftarrow m$};
\end{tikzpicture}
```

For binary search, the maintained bounds are $\ell\le h(y)+2\delta/3$ and $u\ge h(y)-\delta$, as in step 5.1; $h(y)$ need not lie in $[\ell,u]$. The IN and OUT implications in the figure are one-way bounds and do not prescribe a unique answer in the weak-membership overlap. The clean coherent implementation in step 5.1 stores the deterministic transcript, copies the output, and reverses the computation and oracle calls.

