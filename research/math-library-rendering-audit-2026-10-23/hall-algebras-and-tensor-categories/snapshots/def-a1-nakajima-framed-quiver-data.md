---
id: def-a1-nakajima-framed-quiver-data
kind: definition
title: "A one-vertex framed quiver variety and its Hecke correspondence"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-affine-scheme-spectrum
  - def-singular-chain-complex-and-singular-homology
  - thm-singular-homology-satisfies-dimension-and-arbitrary-additivity
  - def-vector-space
  - def-vector-space-of-linear-maps
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists, §§2.2, 3.2, 4.4"
      url: "https://arxiv.org/pdf/1611.10000"
---

## Definition

Let $Q$ be the quiver with one vertex and no arrows. Its diagram is

```tikz
\begin{tikzpicture}
  \node[circle,draw,inner sep=2.5pt] at (0,0) {$\bullet$};
\end{tikzpicture}
```

For framing space $W=\mathbb C$ and dimension $v\in\{0,1\}$, put
$V_v=\mathbb C^v$. A **framed datum** is a pair of complex-linear maps
$I:W\to V_v$ and $J:V_v\to W$, subject to the moment equation
$I\circ J=0\in\operatorname{End}_{\mathbb C}(V_v)$. The two framing maps are
drawn separately from the arrows of $Q$:

```tikz
\begin{tikzpicture}[>=stealth]
  \node (w) at (0,0) {$W=\mathbb C$};
  \node (v) at (3,0) {$V_v$};
  \draw[->] (w) to[bend left=22] node[above] {$I$} (v);
  \draw[->] (v) to[bend left=22] node[below] {$J$} (w);
\end{tikzpicture}
```

The group $G_v=\operatorname{GL}(V_v)$ of invertible complex-linear maps acts
by $g\cdot(I,J)=(gI,Jg^{-1})$. Fix the positive real stability parameter
$\zeta_R>0$ and, for this one-vertex quiver, call a solution **stable** when
$J$ is injective. Give the stable solution set its usual complex topology and
define $\mathfrak M(v,1)$ to be its quotient topological space by $G_v$.

For $v=0$ the solution set is a point, with coordinate algebra
$A_0=\mathbb C$; for $v=1$, writing $I(w)=iw$ and $J(z)=jz$, it is the
affine algebraic set $ij=0$ with coordinate algebra
$A_1=\mathbb C[i,j]/(ij)$. These are $\mathbb C$-algebras in the sense of
[[def-algebra-over-a-commutative-ring]]. The action on data induces an action
on each $A_v$; write $A_v^{G_v}$ for its invariant subring of fixed elements.
Define $\mathfrak M_0(v,1)=\operatorname{Spec}(A_v^{G_v})$ using
[[def-affine-scheme-spectrum]]. An orbit of stable data maps to the point
whose prime ideal consists of invariant functions vanishing on that orbit;
this is the quotient map $\pi_v:\mathfrak M(v,1)\to\mathfrak M_0(v,1)$.
Let $0$ denote the point induced by the zero datum and put
$\mathcal L(v,1)=\pi_v^{-1}(0)$.

Let $S$ be the unframed simple datum with one-dimensional vertex space and
zero framing maps. A framed subdatum with vertex space $V'=0$ uses the same
framing space $W$ and zero maps $I':W\to0$ and $J':0\to W$. Its inclusion
uses the identity on $W$ and the unique map $\xi:0\to V_1$, compatible with
the data by $I=\xi I'$ and $J'=J\xi$; hence it forces $I=0$, while the
restriction of $J$ to $0$ is automatically zero. The quotient has framing
space $0$ and vertex space $V_1$, so its induced framing maps vanish and it is
$S$. The **Hecke correspondence** $P_{0,1}$ is the locus of pairs in
$\mathfrak M(0,1)\times\mathfrak M(1,1)$ obtained this way. Its two projection
maps are the source and target maps of the correspondence.

The degree-zero homology of a point is $\mathbb C$ with its point class,
using [[def-singular-chain-complex-and-singular-homology]] and
[[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]]. When
$P_{0,1}$ and both spaces are points and the projections are identities,
define its fundamental-class correspondence map to send the source point
class to the target point class; the reverse map uses the same rule. This is
the point push-pull convention used here.

## Remarks

This definition fixes the no-loop $A_1$ case and Nakajima's convention
$\mu=IJ$, with positive stability meaning $J$ is injective. It makes no claim
about the stability or properness of correspondences for other quivers.
