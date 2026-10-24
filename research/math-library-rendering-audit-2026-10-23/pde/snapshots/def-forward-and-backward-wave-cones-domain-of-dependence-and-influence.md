---
id: def-forward-and-backward-wave-cones-domain-of-dependence-and-influence
kind: definition
title: "Forward and backward wave cones, domain of dependence and influence"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-euclidean-inner-product, def-interval]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed p. 177, (7.29): $K(t_0,x_0)=\\{(t,x):0\\le t\\le t_0,\\ |x-x_0|\\le t_0-t\\}$"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed p. 292, Theorem 9.2.3: the backward light cone $K^-(y,\\tau)$"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #13-14: Geometric Energy Estimates (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ad3a71c522df2396b6248cf9b35aedea_MIT18_152F11_lec_13_14.pdf"
      locator: "§3, printed/PDF pp. 5-6, Definitions 3.0.3-3.0.6 and Examples 3.0.5-3.0.7: development and range of influence"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $c>0$ and let $x_0\in\mathbb R^n$, $t_0\ge0$. Write
$|z|:=\lVert z\rVert_2$ for the Euclidean norm and
$B_r(x_0)=\{x\in\mathbb R^n:|x-x_0|<r\}$,
$\overline B_r(x_0)=\{x\in\mathbb R^n:|x-x_0|\le r\}$ for the open and closed
balls, $r\ge0$ ([[def-euclidean-inner-product]]). Space-time points are written
$(x,t)\in\mathbb R^n\times\mathbb R$, with $t$ the time coordinate.

The **(closed) backward cone** with vertex $(x_0,t_0)$ and speed $c$ is

$$K^-(x_0,t_0):=\{(x,t):0\le t\le t_0,\ |x-x_0|\le c(t_0-t)\}.$$

Its **base ball** is $B_{ct_0}(x_0)\times\{0\}$, and its **lateral boundary**, including the base rim and excluding the vertex, is
$\{(x,t):0\le t<t_0,\ |x-x_0|=c(t_0-t)\}$. The
**(closed) forward cone** with vertex $(x_0,t_0)$ is

$$K^+(x_0,t_0):=\{(x,t):t\ge t_0,\ |x-x_0|\le c(t-t_0)\}.$$

For data given on a set $S\subseteq\mathbb R^n$ at time $0$, the **domain of
influence of $S$ at time $t\ge0$** is

$$S+\overline B_{ct}(0)=\{x+y:x\in S,\ |y|\le ct\},$$

the set of points that data on $S$ can reach by time $t$ at speed at most $c$.

The **domain of dependence of $(x_0,t_0)$** is not left as an undefined
physical phrase: the causal content of the name is formalised by the local
uniqueness theorem [[thm-domain-of-dependence-and-local-uniqueness]], which
says, under Countable Choice and for $t_0>0$, that two $C^2$ solutions on a neighbourhood of the closed cone with the same Cauchy
data on $B_{ct_0}(x_0)$ and the same source on the cone $K^-(x_0,t_0)$ agree at
every point of $K^-(x_0,t_0)$ (in particular at the vertex). Truncated cones
$K(t_1,t_2)=\{(x,t):t_1<t<t_2,\ |x-x_0|<c(t_0-t)\}$ with $0<t_1<t_2<t_0$, their
piecewise $C^1$ presentation and their outward normals are those of
[[lem-truncated-wave-cone-geometry-and-frustum-presentation]].

The slope $c$ is part of the definition and not decoration: at $n=1$ the
backward cone is the characteristic triangle with the two characteristic lines
$x=x_0\pm c(t_0-t)$, and the open base ball is the interval $(x_0-ct_0,x_0+ct_0)$
([[def-interval]]). No propagation, uniqueness or support claim is asserted by
this item; those are [[thm-finite-propagation-speed-for-the-wave-equation]],
[[thm-domain-of-dependence-and-local-uniqueness]] and
[[cor-compact-support-expands-at-speed-at-most-c]].
