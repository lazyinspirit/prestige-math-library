---
id: fs-van-kampen-with-disconnected-intersection
kind: false-statement
title: "FALSE: the two-set van Kampen conclusion needs no path-connectedness hypothesis on the overlap"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-of-the-circle,
       def-pushout-of-group-homomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, discussion preceding Theorem 1.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $X=U\cup V$ with $U,V$ open and path-connected, and let $x_0\in U\cap V$. Even when $U\cap V$ is not path-connected, if $C$ is its path component containing $x_0$, then $\pi_1(X,x_0)$ is the pushout of

$$\pi_1(U,x_0)\longleftarrow\pi_1(C,x_0)\longrightarrow\pi_1(V,x_0).$$

## Facts & Assumptions

**Given:** The quotient circle $Q=\mathbb R/\mathbb Z$, its quotient map $p$, the open arcs $U=p((-1/8,5/8))$ and $V=p((3/8,9/8))$, and the basepoint $[0]$.

[F1] The quotient map is open, and every interval shorter than one maps homeomorphically to its image in $Q$ ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[F2] Every nonempty convex subset of a Euclidean space is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F3] The degree map is an isomorphism $\pi_1(Q,[0])\cong(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

[F4] A pointed homeomorphism induces a fundamental-group isomorphism ([[thm-induced-fundamental-group-map-functoriality]]).

## Refutation

**Proof technique:** direct.

1.1 Both defining intervals have length $3/4<1$, so [F1] makes $U$ and $V$ open arcs. Their displayed lifts show $U\cup V=Q$, while $$U\cap V=p((-1/8,1/8))\,\sqcup\,p((3/8,5/8)),$$ a disjoint union of two nonempty open arcs. The basepoint lies in the first component $C=p((-1/8,1/8))$. [F1, algebra]

2.1 The three arcs $U,V,C$ are homeomorphic to open intervals, which are nonempty and convex. Hence [F2] and [F4] make all three fundamental groups trivial. [step 1.1, F2, F4]

3.1 The pushout of the two homomorphisms from the trivial group to the two trivial factor groups is itself the trivial group: for every target group there is exactly one compatible pair of homomorphisms and exactly one homomorphism from the trivial group. [step 2.1]

4.1 The actual group $\pi_1(Q,[0])$ is isomorphic to $\mathbb Z$ by [F3], so it is nontrivial and cannot be the pushout computed in step 3.1. Thus the false claim fails for this cover, and path-connectedness of the full overlap cannot be omitted from the two-set theorem. [step 3.1, F3] ∎


## Remarks

In the illustration, $[t]$ is placed at angle $2\pi t$, increasing counterclockwise from the rightmost point $[0]$. Thick arcs show the indicated open sets; hollow endpoint rings are excluded. The two thick arcs in the last panel are precisely the two components of $U\cap V$ in step 1.1: $C=p((-1/8,1/8))$ on the right and $p((3/8,5/8))$ on the left. The dashed circles provide the ambient $Q$ only. The refutation above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=1.15]
\begin{scope}
\draw[gray,dashed] (0,0) circle (1);
\draw[cyan,very thick] (-45:1) arc (-45:225:1);
\draw[cyan,fill=black,thick] (-45:1) circle (0.045);
\draw[cyan,fill=black,thick] (225:1) circle (0.045);
\fill (1,0) circle (0.035);
\node[right] at (1.08,0) {$[0]$};
\node at (0,1.4) {$U$};
\end{scope}
\begin{scope}[xshift=3.5cm]
\draw[gray,dashed] (0,0) circle (1);
\draw[orange,very thick] (135:1) arc (135:405:1);
\draw[orange,fill=black,thick] (135:1) circle (0.045);
\draw[orange,fill=black,thick] (405:1) circle (0.045);
\fill (1,0) circle (0.035);
\node[right] at (1.08,0) {$[0]$};
\node at (0,1.4) {$V$};
\end{scope}
\begin{scope}[xshift=7cm]
\draw[gray,dashed] (0,0) circle (1);
\draw[cyan,very thick] (-45:1) arc (-45:45:1);
\draw[orange,very thick] (135:1) arc (135:225:1);
\draw[cyan,fill=black,thick] (-45:1) circle (0.045);
\draw[cyan,fill=black,thick] (45:1) circle (0.045);
\draw[orange,fill=black,thick] (135:1) circle (0.045);
\draw[orange,fill=black,thick] (225:1) circle (0.045);
\fill (1,0) circle (0.035);
\node[right] at (1.08,0) {$[0]$};
\node at (0.55,0) {$C$};
\node at (0,1.4) {$U\cap V$};
\end{scope}
\end{tikzpicture}
```
