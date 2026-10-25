---
id: cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly
kind: counterexample
title: Same-sign intersection points cannot be cancelled orientedly
deps:
- def-oriented-intersection-number
- def-local-oriented-intersection-sign
- thm-oriented-intersection-number-is-homotopy-invariant
- def-oriented-smooth-manifold-and-oriented-chart
- thm-intersection-number-under-factor-interchange
- thm-high-dimensional-whitney-trick
- def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorem 7.27(i), printed p. 138 (the hypothesis $I(x)=-I(y)$ and the meaning of opposite signs)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 4 §4.1, printed pp. 81-84 (signs of intersection points and the necessary condition $\lambda([f,w],[f,w])=0$)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

"If two closed connected oriented complementary submanifolds $A,B$ of a closed oriented manifold meet transversely in exactly two points whose mod-two contribution is even, then an isotopy of $A$ can make $A$ disjoint from $B$."

## Facts & Assumptions

[F1] The local sign compares the ordered tangent spaces of the two sheets with the ambient orientation. [[def-local-oriented-intersection-sign]]

[F2] The oriented intersection number. [[def-oriented-intersection-number]]

[F3] The oriented intersection number is homotopy invariant. [[thm-oriented-intersection-number-is-homotopy-invariant]]

## Counterexample


Let $T^2=\mathbb R^2/\mathbb Z^2$, let $A=S^1\times\{0\}$, and let $B$ be the graph of the degree-two covering map $\theta\mapsto2\theta$ of the circle, i.e. $B=\{(\theta,2\theta):\theta\in S^1\}\subset T^2$. Then $B$ is a closed embedded circle, $A\cap B$ consists of exactly two points with local signs $+1,+1$, and $I(A,B)=2\ne0$. Since $I(\cdot,B)$ is invariant under homotopies of the first factor, no homotopy (hence no isotopy) of $A$ can produce a disjoint configuration, and in particular the pair cannot be removed by a Whitney move: the sign condition $\varepsilon(x)=-\varepsilon(y)$ of the Whitney trick fails for the only pair of points. Thus equal signs are an obstruction beyond parity.

**Given:** Countable choice for homotopy invariance, the oriented torus, and its two specified embedded circles.

1.1 The map $\theta\mapsto(\theta,2\theta)$ is an embedding because its first coordinate is the identity of $S^1$. Its image meets $A=\{y=0\}$ only at $\theta=0,1/2$. At both points the ordered tangent vectors are $(1,0)$ and $(1,2)$, whose determinant is $2>0$. Thus the intersections are transverse with local signs $+1,+1$, their mod-two count is zero, and their integer count is two. [given, construct, algebra, F1, F2]

2.1 Homotopy invariance of the oriented intersection number with the fixed $B$ preserves this count under any homotopy of $A$, hence under any isotopy. A disjoint endpoint would have the empty signed sum zero, contradicting the value two. Thus the asserted cancellation fails, beyond the parity condition, and the necessary opposite-sign hypothesis is not satisfied. Countable choice is used exactly through the published homotopy-invariance supplier. [step 1.1, construct, F3] ∎


## Remarks

The square below represents the fundamental domain $[-1/10,9/10]\times[-1/5,4/5]$ of the oriented torus; opposite edges are identified by translations, with $x$ increasing to the right and $y$ upward. The horizontal circle $A$ is blue, and the two visible pieces of $B$ are orange. The marked points are $p=(0,0)$ and $q=(1/2,0)$ in the quotient. The tangent frame shown on the right is the same at both points: $A$ first, then $B$, with determinant $2>0$. Thus both signs are $+1$, although the number of points is even. This illustrates step 1.1; the proof above is independent of the picture.

```tikz
\begin{tikzpicture}[>=stealth, font=\small]
\draw[gray] (0,0)--(4,0)--(4,4)--(0,4)--(0,0);
\draw[gray,->] (1,0)--(1.5,0);
\draw[gray,->] (1,4)--(1.5,4);
\draw[gray,->] (0,2.5)--(0,3);
\draw[gray,->] (4,2.5)--(4,3);
\draw[blue!70!black,very thick] (0,.8)--(4,.8);
\draw[blue!70!black,very thick,->] (3,.8)--(3.5,.8);
\node[blue!70!black,anchor=west] at (4.15,.8) {$A$};
\draw[orange!85!black,very thick] (0,0)--(2,4);
\draw[orange!85!black,very thick,->] (.9,1.8)--(1.2,2.4);
\draw[orange!85!black,very thick] (2,0)--(4,4);
\draw[orange!85!black,very thick,->] (2.9,1.8)--(3.2,2.4);
\node[orange!85!black,anchor=west] at (3.65,3) {$B$};
\fill (.4,.8) circle (2pt);
\fill (2.4,.8) circle (2pt);
\node[below] at (.4,.65) {$p\ (+1)$};
\node[below] at (2.4,.65) {$q\ (+1)$};
\node at (2,-.5) {opposite edges identified};
\draw[blue!70!black,thick,->] (5.3,1.4)--(6.5,1.4);
\draw[orange!85!black,thick,->] (5.3,1.4)--(6.1,3);
\node[below] at (6.3,1.3) {$(1,0)$};
\node[above] at (6.1,3.1) {$(1,2)$};
\node at (5.9,.4) {ordered tangents};
\end{tikzpicture}
```
