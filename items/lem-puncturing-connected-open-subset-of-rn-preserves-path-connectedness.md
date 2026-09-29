---
id: lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
kind: lemma
title: "Puncturing a connected open subset of $\\mathbb{R}^n$ preserves path-connectedness for $n\\ge2$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: constructive
deps:
  - cor-euclidean-spheres-are-path-connected
  - def-euclidean-spheres-and-closed-balls
  - def-path-connected
  - def-polygonal-path-and-polygonal-connectedness
  - lem-continuity-is-local-and-pastes
  - thm-path-connected-implies-connected
  - thm-open-connected-subsets-of-rn-are-polygonally-connected
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Paul Bankston, Metric Topology: A First Course, Proposition 21.3"
      url: https://www.mscsnet.mu.edu/~paul/Paper/4450102text.pdf
      locator: "Lecture 21, Proposition 21.3, proof that connected open subsets of R^n are path-connected"
    - title: "N. P. Strickland, Algebraic Topology notes, Proposition 5.14"
      url: https://strickland1.org/courses/MAS61015/notes_html/S5.html
      locator: "§5, Proposition 5.14, proof that S^n is path-connected for n>0"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be nonempty, open and
connected, and let $y\in\Omega$. Then $\Omega\setminus\{y\}$ is a nonempty,
open, connected, path-connected set.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement, with Euclidean balls
and spheres as in [[def-euclidean-spheres-and-closed-balls]].

[F1] A connected open subset of $\mathbb R^n$ is polygonally connected, and a
polygonal path has finitely many affine pieces ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]], [[def-polygonal-path-and-polygonal-connectedness]]).

[F2] For $n\ge2$, the unit sphere is path-connected ([[cor-euclidean-spheres-are-path-connected]]). Translation and positive scaling take a path on the unit sphere continuously to a path on any sphere $S_2(y,r)$; indeed $|y+r u-y-r v|=r|u-v|$ for $r>0$.

[F3] A path is a continuous map from $[0,1]$, and finitely many continuous pieces that agree at their shared endpoints paste to a continuous path ([[def-path-connected]], [[lem-continuity-is-local-and-pastes]]).

[F4] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x,z\in\Omega\setminus\{y\}$. If $x=z$, the constant path at $x$ lies in the punctured set. Otherwise [F1] gives a polygonal path $\gamma:[0,1]\to\Omega$ from $x$ to $z$. Choose $r>0$ small enough that $\overline B_2(y,r)\subset\Omega$ and $r<\min\{|x-y|,|z-y|\}$. If $\gamma$ avoids $y$, it already gives the required path. [F1, F3, given, cases, choose]

2.1 Suppose $\gamma$ meets $y$. The preimage $A=\gamma^{-1}[\overline B_2(y,r)]$ is a finite union of closed intervals: on each of the finitely many affine pieces in [F1], the preimage of the convex closed ball is a closed interval, possibly empty or a point. Its connected components are therefore finitely many closed intervals $[a_j,b_j]$. Since the endpoints $x,z$ lie outside the closed ball, each component is contained in $(0,1)$, and continuity and maximality give $\gamma(a_j),\gamma(b_j)\in S_2(y,r)$. If $a_j=b_j$, that component is a single sphere point and cannot contain $y$. [F1, given, step 1.1, algebra]

3.1 For each component with $a_j<b_j$, use [F2] to choose a continuous path on $S_2(y,r)$ from $\gamma(a_j)$ to $\gamma(b_j)$, reparameterized on $[a_j,b_j]$. Replace $\gamma$ on those finitely many intervals by these sphere paths and retain it on the intervening closed intervals. The pieces agree at every endpoint, so [F3] gives a continuous path $\widetilde\gamma:[0,1]\to\Omega$. Every replacement lies on a sphere of positive radius and hence misses $y$; the retained portions lie outside the closed ball, apart from singleton components already on the sphere. Some component has positive length because $\gamma$ meets the interior point $y$. Thus $\widetilde\gamma$ avoids $y$ and joins $x$ to $z$. This also covers any zero-length polygonal pieces and tangencies to the sphere. [F1, F2, F3, step 2.1, algebra, construct]

4.1 The construction proves path-connectedness, including equal endpoints by the constant path in step 1.1. The set is open: for each $x\ne y$ in $\Omega$, openness of $\Omega$ gives a ball about $x$ contained in $\Omega$, and shrinking its radius below $|x-y|$ makes it avoid $y$. It is nonempty because a ball about $y$ contains $y+te_1\ne y$ for some sufficiently small $t>0$, where $e_1=(1,0,\ldots,0)$. By [F4] it is connected. The proof covers zero-length polygonal pieces, tangent singleton components and the case $x=z$; no infinite family of detours or iff claim is used. [F3, F4, given, step 1.1, step 3.1, algebra, cases, discharge-construct] \square

## Source notes

This is an elementary local supplier proved from the cited path-connectedness,
polygonal-path and finite-pasting interfaces. The underlying path-connectedness
facts are treated in the cited topology references; the finite detour construction
is given here in full. No external PDE or potential-theory result is used.
