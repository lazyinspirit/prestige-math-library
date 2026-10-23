---
id: def-fd-smooth-motion
kind: definition
title: "Smooth material configurations and Eulerian fields"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  thm-euclidean-inverse-function-theorem: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Chapter 3 §§3.1–3.3 and 3.8"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "James F. Price, Lagrangian and Eulerian Representations of Fluid Flow, Part 1: Kinematics and the Equations of Motion (MIT OpenCourseWare, Fall 2024; essay revised August 2023), §§1.2.1–1.2.2"
      url: "https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/mitres_12_001_f24_essay1_pt1.pdf"
  scraped: []
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
physical_scope: null
empirical_premises: []
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open interval containing $0$. For an integer $r\ge1$, $C^r$ means that all coordinate partial derivatives through total order $r$ exist and are continuous. Let $B\subseteq\mathbb R^3$ be a nonempty bounded open reference region whose boundary is, near each boundary point and in coordinates $y=Qx+c$ for some $Q\in\mathbb R^{3\times3}$ and $c\in\mathbb R^3$ with $Q^{\mathsf T}Q=I_3$, the graph of a $C^1$ function; let $U\subseteq\mathbb R^3$ be open with $\overline B\subset U$. A smooth motion is a map $\chi:I\times U\to\mathbb R^3$ of class $C^2$ such that, for every $t\in I$, the map $\chi_t(a):=\chi(t,a)$ is a bijection from $U$ onto an open set $\chi_t(U)$ with a $C^2$ inverse and with $\det D_a\chi(t,a)>0$ for all $a\in U$. The coordinate $a$ labels a reference point and $x=\chi(t,a)$ is its current position; $\Omega:=\{(t,x):t\in I,\ x\in\chi_t(U)\}$ is the swept open set and $\Omega_t:=\chi_t(B)$ is the current image of $B$.

For $(t,x)\in\Omega$, define the inverse label $A(t,x)$ by $\chi(t,A(t,x))=x$, and put $F(t,a):=D_a\chi(t,a)$ and $J(t,a):=\det F(t,a)$. The joint map $H(t,a):=(t,\chi(t,a))$ is injective and has block-triangular derivative with determinant $J(t,a)>0$. The Euclidean inverse function theorem therefore gives local $C^1$ inverses; they agree on overlaps because the label is unique, so $A$ is globally $C^1$ on $\Omega$. Define the Eulerian velocity field $u(t,x):=\partial_t\chi(t,A(t,x))$; an Eulerian field is a function of time and current position. Thus $u$ is $C^1$.

For any $C^1$ scalar or vector field $f$ on $\Omega$, its material derivative is $D_tf:=\partial_tf+(D_xf)u$, componentwise; it is the derivative along the curves $t\mapsto\chi(t,a)$. Here $D_xf$ and $D_a\chi$ are the matrices of coordinate partial derivatives. Define the spatial velocity gradient $L:=D_xu$, its symmetric and skew-symmetric parts $D:=(L+L^{\mathsf T})/2$ and $W:=(L-L^{\mathsf T})/2$, the scalar $\theta:=\operatorname{tr}L=\sum_{i=1}^3\partial_{x_i}u_i$, and the trace-free part $D_0:=D-\theta I_3/3$. The trace is the sum of diagonal entries, and $I_3$ is the $3\times3$ identity matrix.

For any interval $K\subseteq\mathbb R$ containing at least two points, a map from $K$ is $C^1$ if it is continuous on $K$, is continuously differentiable on its interior, and has at every included finite endpoint the corresponding one-sided derivative, with the derivative continuous there. A pathline is a $C^1$ map $x:\mathcal J\to\mathbb R^3$, where $\mathcal J\subseteq I$ is an interval containing at least two points, such that $(t,x(t))\in\Omega$ and $x'(t)=u(t,x(t))$ for every $t\in\mathcal J$; derivatives at included finite endpoints are one-sided. Each curve $t\mapsto\chi(t,a)$ on $I$ is a pathline. For a fixed $t_0\in I$, a streamline at frozen time $t_0$ is a $C^1$ map $X:\mathcal S\to\chi_{t_0}(U)$, where $\mathcal S\subseteq\mathbb R$ is an interval containing at least two points, satisfying $X'(s)=u(t_0,X(s))$ for every $s\in\mathcal S$; derivatives at included finite endpoints are one-sided. No equality between pathlines and frozen-time streamlines is part of this definition. These are mathematical kinematic definitions; no units or physical balance postulates are imposed.

## Definition references

[[thm-euclidean-inverse-function-theorem|Euclidean inverse function theorem; local inverse supplier]]

[R. Abeyaratne, *Continuum Mechanics*, Volume II, Chapter 3 §§3.1–3.3 and 3.8 (printed pp. 64–68, 89–91)](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

[James F. Price, *Lagrangian and Eulerian Representations of Fluid Flow*, Part 1, §§1.2.1–1.2.2 (MIT OpenCourseWare, Fall 2024)](https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/mitres_12_001_f24_essay1_pt1.pdf)
