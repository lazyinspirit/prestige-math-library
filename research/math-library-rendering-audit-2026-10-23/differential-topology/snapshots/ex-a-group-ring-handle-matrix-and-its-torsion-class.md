---
id: ex-a-group-ring-handle-matrix-and-its-torsion-class
kind: example
title: "A group-ring handle matrix and its torsion class"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 12
deps: ["def-whitehead-torsion-of-an-h-cobordism", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-finite-based-free-chain-complex-and-its-contraction-torsion", "lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group", "prop-realization-of-whitehead-torsion-by-h-cobordisms", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "def-axiom-of-choice", "thm-higher-dimensional-spheres-are-simply-connected", "thm-deck-group-of-a-universal-cover-is-the-fundamental-group"]
provenance:
  statement: literature-derived
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.4, Lemma 1.27(2), printed pp. 19–20; Chapter 2 §2.1, printed pp. 24–26"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Example 8.8(iii) and Proposition 8.22, printed pp. 173 and 179; PDF pages 181, 187"
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\pi=C_5=\langle t\mid t^5=1\rangle$, $R=\mathbb Z[\pi]$, and
$u=1-t^2-t^3\in R$. The element $u$ is a unit of $R$ whose class $[u]$ is a
nonzero element of $\operatorname{Wh}(C_5)$. For this chosen presentation the
based two-term complex $0\to R\xrightarrow{u}R\to0$ is contractible with
contraction torsion $\pm[u]\ne0$, and by the realization proposition it is the
intersection matrix of a finite handle presentation $H$ of an h-cobordism over
a closed oriented $n$-manifold with fundamental group $C_5$, $n\ge5$, with
presentation-indexed torsion $\tau_H=\pm[u]\ne0$. The example computes the
class of this presentation; it makes no claim that the h-cobordism has the same
class for every handle presentation.

## Facts & Assumptions

**Given:** The Axiom of Choice and the cyclic group $\pi=C_5$, the ring $R=\mathbb Z[\pi]$, and $u=1-t^2-t^3\in R$.

[F1] $u$ is a unit of $R$ and $[u]\ne0$ in $\operatorname{Wh}(C_5)$ ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F2] For a unit $u$ the two-term complex $0\to R\xrightarrow{u}R\to0$ is contractible with contraction torsion $(-1)^{q+1}[u]$ in its degree convention, so in degree one the class is $[u]$ ([[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F3] The realization proposition produces, for every $u\in\operatorname{Wh}(\pi)$ and every closed connected oriented smooth $n$-manifold $M$ with $n\ge5$ and $\pi_1(M)=\pi$, an h-cobordism over $M$ with a two-index presentation in degrees $2,3$ whose intersection matrix $A$ is invertible with class $u$ and whose presentation-indexed torsion is $(-1)^2[A]=[A]$ ([[prop-realization-of-whitehead-torsion-by-h-cobordisms]], [[def-whitehead-torsion-of-an-h-cobordism]], [[def-based-handle-chain-complex-over-the-fundamental-group-ring]]).

## Verification

1.1 By [F1] $u=1-t^2-t^3$ is a unit of $R=\mathbb Z[C_5]$ and its class $[u]$ is nonzero in $\operatorname{Wh}(C_5)$; by [F2] the based two-term complex $0\to R\xrightarrow{u}R\to0$ with one basis vector in each of degrees $1$ and $0$ is contractible with contraction $s_0=u^{-1}$, and its contraction torsion is $(-1)^{1+1}[u]=[u]\ne0$. [F1, F2, given]

1.2 Take $S^5\subset\mathbb C^3$ and let a generator of $C_5$ multiply every coordinate by $\zeta=e^{2\pi i/5}$. This action is free: $\zeta^kz=z$ for $z\ne0$ implies $\zeta^k=1$. Each point has a small ball in $S^5$ disjoint from its other four translates; these balls give covering charts for $S^5\to M=S^5/C_5$, and the quotient charts have smooth transition maps given by restrictions of the linear action. Distinct finite orbits have disjoint invariant neighborhoods, so the quotient is Hausdorff; images of a countable sphere basis give a countable quotient basis. Thus $M$ is a compact connected smooth boundaryless $5$-manifold. The sphere is simply connected by [[thm-higher-dimensional-spheres-are-simply-connected]]. Any deck map agrees at one point with one of the five action maps, hence agrees everywhere by uniqueness on a connected cover. Therefore [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] gives $\pi_1(M)=C_5$. [given, construct]

2.1 Orient $S^5$ by the boundary orientation induced from the standard orientation of $\mathbb C^3$ and orient $M$ by pushing this orientation forward along the local diffeomorphism $S^5\to M$; this is well defined because scalar multiplication by a unit complex number is complex linear and hence orientation-preserving, so the deck translations preserve the chosen orientation of $S^5$. Thus $M$ is a closed connected oriented $n$-manifold with $n=5$ and $\pi_1(M)=C_5$, and the oriented hypothesis of [F3] is met. [F1, F3, step 1.2]

3.1 Apply [F3] with the matrix $A=(u)$ of size one: there is an h-cobordism $(W;M,M')$ of dimension $n+1\ge6$ and a handle presentation $H$ relative to $M$ with one $2$-handle and one $3$-handle whose intersection matrix is $A=(u)$, invertible with class $[A]=[u]$, and whose presentation-indexed torsion is $\tau_H(W,M)=(-1)^2[u]=[u]\ne0$. [F2, F3, step 1.1, step 1.2, step 2.1]

4.1 The exhibited presentation therefore has $\tau_H=u$-class nonzero in $\operatorname{Wh}(C_5)$, while the same $u$ appears as the contraction torsion of the abstract two-term complex of step 1.1; this is the announced class computation, and it makes no claim about presentations of the same h-cobordism other than $H$, consistent with the presentation-relative scope of the criterion. [F3, step 3.1] ∎
