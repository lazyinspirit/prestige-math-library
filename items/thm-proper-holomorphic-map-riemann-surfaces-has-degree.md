---
id: thm-proper-holomorphic-map-riemann-surfaces-has-degree
kind: theorem
title: Degree of a proper holomorphic map of Riemann surfaces
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - cor-local-multiplicity-count-holomorphic-map
  - thm-open-mapping-theorem-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-biholomorphic-map
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-connected-space
forward_refs: [cex-exponential-local-biholomorphism-is-not-proper]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §2, Proposition–Definition 4.5 and Corollary 4.6, printed pp. 43–44: a proper nonconstant holomorphic map has a degree d=Σ_{x∈f^{-1}(y)}mult_x(f), independent of y, and is a finite covering off the branch locus."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3, Theorem 3.1 and the discussion of proper branched covers, printed pp. 16–18."
---

## Statement

Let $f:X\to Y$ be a nonconstant holomorphic map between connected Riemann
surfaces ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]) that is
**proper**, i.e. $f^{-1}(K)$ is compact for every compact $K\subseteq Y$. Then:

1. $f$ is onto and every fibre $f^{-1}(y)$ is nonempty and finite;
2. the weighted fibre count
   $$d(y):=\sum_{x\in f^{-1}(y)}e_x(f)$$
   is a positive finite integer, independent of $y$
   ([[def-ramification-index-and-branch-value]]); it is the **degree** of $f$,
   written $d=\deg f$;
3. the branch values of $f$ form a locally finite — and, when $Y$ is compact,
   finite — subset of $Y$;
4. off the branch locus $f$ is a finite-sheeted covering of degree $d$: every
   point $y$ that is not a branch value has an evenly covered open
   neighbourhood $V$ with $f^{-1}(V)$ a disjoint union of $d$ open sets, each
   carried biholomorphically onto $V$ by $f$
   ([[def-covering-map-and-evenly-covered-neighbourhoods]],
   [[def-biholomorphic-map]]).

The proof is choice-free: all selections are made inside finitely many charts
from finite data.

## Facts & Assumptions

**Given:** A proper nonconstant holomorphic map $f:X\to Y$ between connected Riemann surfaces.

[F1] At each $x\in X$ there are centred charts with chart expression $z\mapsto z^{e}$, $e=e_x(f)\ge1$; $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$; the only critical points of $z\mapsto z^{e}$ in a disc around $0$ are $0$ when $e\ge2$ and none when $e=1$ ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]]).

[F2] If $F$ is nonconstant holomorphic on a complex domain, $a$ in the domain and $m=\deg_aF$, then after shrinking there is a neighbourhood $V$ of $a$ and $\rho>0$ such that for every $w$ with $0<|w-F(a)|<\rho^{m}$ the equation $F(z)=w$ has exactly $m$ distinct solutions in $V$ ([[cor-local-multiplicity-count-holomorphic-map]]); in particular every value near $F(a)$ other than $F(a)$ has exactly $m$ preimages in $V$.

[F3] A nonconstant holomorphic function on a complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]); if a holomorphic chart expression of $f$ were constant on a neighbourhood of a point, then, by the identity theorem applied in overlapping charts, $f$ would be constant on the connected surface $X$ ([[thm-identity-theorem-holomorphic-functions]]).

[F4] Riemann surfaces are locally compact Hausdorff spaces ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[def-riemann-surface-and-holomorphic-atlas]]); a compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); the continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]); a closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a compact discrete space is finite.

[F5] A continuous map is a covering map over an open set when the set is evenly covered: its preimage is a disjoint union of open sets each mapped homeomorphically onto it ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F6] A separation of a space is a pair of disjoint nonempty open subsets with union the whole space; since the two pieces are complementary, each is also closed, so a separation is the same thing as a partition into two nonempty clopen pieces, and a connected space is one admitting no separation. Hence the only clopen subsets of a connected space are $\varnothing$ and the space itself ([[def-connected-space]]).


## Proof

**Proof technique:** direct.

1.1 ($f$ is a closed map.) Let $A\subseteq X$ be closed and let $y\notin f(A)$. Choose a compact neighbourhood $K$ of $y$, possible by local compactness [F4], and put $K^\circ$ for its interior. Since $f$ is proper, $f^{-1}(K)$ is compact, so $A\cap f^{-1}(K)$, a closed subset of it, is compact, and its image $f\bigl(A\cap f^{-1}(K)\bigr)$ is compact, hence closed in $Y$, and does not contain $y$. Then $V:=K^\circ\setminus f(A\cap f^{-1}(K))$ is open, contains $y$, and is disjoint from $f(A)$: for $a\in A$ with $f(a)\in V\subseteq K$ one has $a\in f^{-1}(K)$, so $f(a)\in f(A\cap f^{-1}(K))$, which $V$ avoids. Hence $Y\setminus f(A)$ is open and $f(A)$ is closed. [F4, given]

1.2 ($f$ is an open map.) Let $O\subseteq X$ be open and $x\in O$. Choose a chart at $x$ and a chart at $f(x)$, and let $F$ be the chart expression on a connected neighbourhood $W\subseteq O$ of $x$; by [F3] $F$ is not constant, so the planar open mapping theorem [F3] applied to $F$ on $W$ shows that $F(W)$ is open in the target chart plane, that is, it contains a neighbourhood of the image of $x$. Since charts carry neighbourhoods to neighbourhoods, $f(O)$ contains a neighbourhood of $f(x)$; as $x\in O$ was arbitrary, $f(O)$ is open. [F3, F1, given]

2.1 ($f$ is onto.) The image $f(X)$ is nonempty, open by step 1.2, and closed by step 1.1; $Y$ is connected, so its only nonempty clopen subset is $Y$ itself and $f(X)=Y$. [F6, step 1.1, step 1.2, given]

3.1 (Fibres are finite.) Let $y\in Y$. By properness $f^{-1}(y)$ is compact, and it is nonempty by step 2.1. Each $x\in f^{-1}(y)$ is isolated in $f^{-1}(y)$: in the coordinates of [F1] the fibre over $y$ corresponds, near $x$, to the solutions of $z^{e}=0$ in a disc, and $0$ is the only solution. Hence $f^{-1}(y)$ is discrete and compact, hence finite; write $f^{-1}(y)=\{x_1,\dots,x_r\}$ and $e_j:=e_{x_j}(f)$. [F1, F4, step 2.1]

4.1 (Local constancy of the weighted count.) Fix $y$ and use the notation of step 3.1. For each $j$ choose centred charts as in [F1] and apply [F2] to the chart expression $F_j$, which has $F_j(0)=0$ and $\deg_0F_j=e_j$: shrink to open neighbourhoods $U_j$ of $x_j$, pairwise disjoint, and $V_j$ of $y$ with $f(U_j)=V_j$, such that for every $y'\in V_j\setminus\{y\}$ the fibre of $y'$ meets $U_j$ in exactly $e_j$ points, and the fibre of $y$ meets $U_j$ only in $x_j$. The set $X\setminus(U_1\cup\cdots\cup U_r)$ is closed, and its image under the closed map $f$ of step 1.1 is closed and does not contain $y$, so there is an open neighbourhood $V\subseteq V_1\cap\cdots\cap V_r$ of $y$ with $f^{-1}(V)\subseteq U_1\cup\cdots\cup U_r$. For $y'\in V\setminus\{y\}$ the fibre lies in $\bigcup_jU_j$ and meets $U_j$ in exactly $e_j$ points; in the coordinates of [F1] a point $x\in U_j$ with $f(x)=y'\ne y$ satisfies $z\ne0$, where $z$ is the source coordinate, and there the derivative of the expression $z^{e_j}$ is $e_jz^{e_j-1}\ne0$, so $e_x(f)=1$ by [F1]; hence $d(y')=\sum_j e_j=d(y)$. [F1, F2, step 1.1, step 3.1]

5.1 (The degree.) By step 4.1 every point of $Y$ has an open neighbourhood on which $y\mapsto d(y)$ is constant. Fix $y_0\in Y$ and put $D:=\{y\in Y:d(y)=d(y_0)\}$. Then $D$ is nonempty, it is open because step 4.1 gives a neighbourhood of each of its points on which $d$ is constant, and $Y\setminus D$ is open because for $y\notin D$ step 4.1 gives a neighbourhood of $y$ on which $d$ is constant, with value $d(y)\ne d(y_0)$, hence disjoint from $D$. So $D$ is a nonempty clopen subset of the connected surface $Y$, hence $D=Y$ by [F6]; that is, $d$ is constant. Its value $d$ is a positive integer because every fibre is nonempty and the sum over the finite fibre of the positive integers $e_x(f)$ is positive and finite. [F6, step 3.1, step 4.1]

5.2 (Branch values are locally finite.) In the situation of step 4.1, let $x'$ be a critical point of $f$ with $f(x')\in V$. Then $x'\in U_j$ for some $j$, and in the coordinates of [F1] the chart expression is $z\mapsto z^{e_j}$, whose derivative vanishes in a disc around $0$ only at $z=0$ when $e_j\ge2$ and nowhere when $e_j=1$; a point with $z\ne0$ therefore has $e=1$ by [F1]. So the critical points above $V$ are among $x_1,\dots,x_r$, and the branch values in $V$ are among $f(x_1),\dots,f(x_r)$: finitely many. Hence every point of $Y$ has a neighbourhood containing only finitely many branch values. [F1, step 3.1, step 4.1]

6.1 (Covering off the branch locus.) Let $y\in Y$ not be a branch value, so $e_x(f)=1$ for every $x\in f^{-1}(y)$ by definition of the branch locus, and let $V$, $U_j$ be as in step 4.1. For each $j$ the chart expression is $z\mapsto z$ on $U_j$ in the coordinates of [F1], so $f|_{U_j}$ is a biholomorphism onto $V_j$ with the coordinate change as inverse; restricting to $f^{-1}(V)\cap U_j$ shows that $V$ is evenly covered with $d$ sheets $f^{-1}(V)\cap U_j$, one for each of the $d$ points of the fibre (each contributing $e_j=1$). Hence $f$ is a finite-sheeted covering map of degree $d$ over the complement of the branch locus. [F1, F5, step 5.1]

7.1 (Conclusion.) Steps 2.1, 3.1, 5.1, 6.1 and 5.2 establish all four claims; when $Y$ is compact, finitely many relatively compact open sets cover $Y$ and each contains only finitely many branch values, so the branch locus is finite. Every selection above was made from the finite fibre of a fixed point and from finitely many charts, so no choice principle is used. [step 2.1, step 3.1, step 5.1, step 6.1, step 5.2] ∎


## Remarks

Properness makes the weighted count finite and locally constant. Without it, the count need not be finite: every fibre of the exponential map is infinite, as [[cex-exponential-local-biholomorphism-is-not-proper]] shows. The degree is used in [[thm-riemann-hurwitz-formula]], where the *unramified* part of $f$ is a genuine $d$-sheeted covering and the ramified fibres contribute the deficit $\sum(e_x-1)$. The branch locus is not assumed finite in advance: local finiteness follows from the finiteness of fibres and from the local normal form, and finiteness on a compact target is then immediate.
