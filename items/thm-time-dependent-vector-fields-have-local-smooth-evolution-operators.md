---
id: thm-time-dependent-vector-fields-have-local-smooth-evolution-operators
kind: theorem
title: "Time-dependent vector fields have local smooth evolution operators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-time-dependent-vector-field-and-evolution-operator, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, thm-fundamental-theorem-for-nonautonomous-smooth-odes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marius Crainic, Rui Loja Fernandes, and Ioan Marcut, Lectures on Poisson Geometry"
      url: "https://webspace.science.uu.nl/~crain101/gsm217.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval, and let $X_t$ be a smooth
time-dependent vector field on $M$ over $I$. For every $(s,p)\in I\times M$
there exist an open interval $J\subseteq I$ containing $s$, open
neighbourhoods $U_r$ of the evolving points, and a smooth map

$$ \Psi:\{(t,s,q): t,s\in J,\ q\in U_s\}\to M $$

such that $t\mapsto \Psi_{t,s}(q)$ is the unique solution of
$\dot\gamma(t)=X_t(\gamma(t))$ with $\Psi_{s,s}(q)=q$.

## Facts & Assumptions

**Given:** An open interval $I\subseteq\mathbb R$, a smooth time-dependent
vector field $X_t$ over $I$, and a base point $(s,p)\in I\times M$.

[L1] Chart maps identify manifold neighbourhoods with Euclidean open sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L2] Smooth nonautonomous ODEs on Euclidean open sets have unique local smooth evolution operators ([[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]).

## Proof

**Proof technique:** direct.

1.1 Choose a chart $(U,x)$ around $p$. By [L1], the chart identifies $U$ with an open subset of $\mathbb R^n$, and the field $X_t$ becomes a smooth time-dependent Euclidean vector field $\widetilde X_t$ there. [L1, given]

2.1 Apply [L2] to $\widetilde X_t$ at $(s,x(p))$. Because $I$ is open, the Euclidean field is defined on the open set $I\times x(U)$. The theorem therefore yields an open interval $J\subseteq I$ containing $s$, an open set $W\subseteq x(U)$ around $x(p)$, and a smooth Euclidean evolution map $\widetilde\Psi_{t,s}(y)$. [L2, step 1.1, choose]

3.1 Transport back by the chart: $$ \Psi_{t,s}(q):=x^{-1}(\widetilde\Psi_{t,s}(x(q))). $$ This map is smooth and its time slices solve the manifold differential equation because the chart intertwines derivatives with the coordinate vector field. [L1, step 2.1, construct]

4.1 Any other local manifold solution would push forward under $x$ to a Euclidean solution of the same nonautonomous ODE with the same initial data, so [L2] gives uniqueness. [L2, step 3.1]

5.1 Therefore smooth time-dependent vector fields have unique local smooth evolution operators. [step 3.1, step 4.1] ∎
