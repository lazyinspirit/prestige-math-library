---
id: def-bounded-c-k-domain-and-boundary-charts
kind: definition
title: Bounded C^k domains and boundary charts
status: draft
origin: pipeline
deps: [def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-ck-and-multi-index-notation-in-several-variables]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Definition 3.10
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 "Boundary traces" §3.5, Definition 3.10, printed pp. 58–59
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), Remark 11.14
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13 and Remark 11.14, printed pp. 157–159
---

## Definition

Assume Countable Choice for the Sobolev interfaces used by consumers of this
definition. Let $k\ge1$ and $n\ge2$. A **bounded $C^k$ domain** in
$\mathbb R^n$ is a nonempty bounded open set $\Omega\subset\mathbb R^n$ with
the following local graph property. For every boundary point
$x\in\partial\Omega$ there are an open neighbourhood
$W\subseteq\mathbb R^n$ of $x$, a rigid motion $R(p)=Qp+b$ with orthogonal
$Q$ and $b\in\mathbb R^n$, an open ball $B\subseteq\mathbb R^{n-1}$, and a
function $h\in C^k(B;\mathbb R)$ such that, after shrinking $W$ so that
$R(W)\subseteq B\times\mathbb R$,
$$R(\Omega\cap W)=R(W)\cap\{(y,s)\in B\times\mathbb R:s<h(y)\}.$$
In the coordinates $z=R(p)$ the domain therefore lies locally strictly below
the graph $s=h(y)$, and the boundary is that graph. The graph convention,
including the requirement that the domain occupy exactly the one-sided
subgraph, is the one of
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]; the
regularity $h\in C^k$ is the only strengthening here, and connectedness is not
required.

Write $R(p)=(y,s)$. The **flattening chart** is
$$\Phi:W\longrightarrow\Phi(W)\subseteq B\times\mathbb R,\qquad \Phi(p)=(y,s-h(y)),$$
with inverse $\Phi^{-1}(y,t)=R^{-1}(y,t+h(y))$ on $\Phi(W)$. Thus
$\Phi(\Omega\cap W)=\Phi(W)\cap\{t<0\}$. Both maps are of class $C^k$; the
coordinate shear $(y,s)\mapsto(y,s-h(y))$ has Jacobian determinant one. If
$B'\subset\overline{B'}\subset B$ is a compactly contained concentric ball,
then every derivative $D^\beta h$ with $|\beta|\le k$ is continuous on
$\overline{B'}$, hence bounded there, and consequently the derivatives
through order $k$ of $\Phi$ and of $\Phi^{-1}$ are bounded on the corresponding
compact patch. This is the precise sense in which a boundary chart is said to
have bounded derivatives through order $k$ on the compact patches used; it
does not assert any bound uniform in the chart, the point, or a boundary
atlas.

In dimension $n=1$, the bounded sets satisfying this local one-sided condition
are finite disjoint unions of bounded open intervals. Each endpoint has an
interval neighbourhood on which the domain occupies one side; the coordinate
is the identity or its reflection, and the graph function and derivative
bounds are vacuous. General bounded open subsets of $\mathbb R$ need not have
this property. A bounded $C^1$ domain in the
sense of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]] is a
bounded $C^1$ domain in this sense when $n\ge2$.

This definition asserts no extension theorem, no trace operator, and no
uniformity of chart constants: it fixes only the regularity of the boundary
and the exact one-sided graph convention that later local statements use.

## Source notes

Laugesen, Definition 3.10, printed pp. 58–59, fixes the $C^m$ boundary-graph
convention and the local one-sided subgraph placement. Oh, Proposition 11.13
and Remark 11.14, printed pp. 157–159, use $C^k$ boundary charts and record
that the extension construction depends on the order $k$ through the chart
regularity. The shear determinant and the compact derivative bounds recorded
here are immediate from the definition of $C^k$ and are used by
[[lem-c-k-boundary-flattening-preserves-wkp-locally]].
