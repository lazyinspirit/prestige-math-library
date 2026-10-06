---
id: lem-boundary-fundamental-lemma-of-the-calculus-of-variations
kind: lemma
title: "The boundary fundamental lemma of the calculus of variations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-fundamental-lemma-of-the-calculus-of-variations, def-surface-integral-on-a-compact-c-one-hypersurface, def-bounded-c-one-domain-boundary-charts-and-outward-normal, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.2, Lemma 4.4 and its proof, printed pp. 49-50"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Section 2.3, Neumann boundary conditions, printed pp. 8-9"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain with surface measure $\sigma$ on $\partial\Omega$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]). If $g\in C(\overline\Omega)$ satisfies
$$\int_{\partial\Omega}g\,\varphi\,d\sigma=0\qquad\text{for every }\varphi\in C^\infty(\overline\Omega),$$
then $g=0$ on $\partial\Omega$. Equivalently, if $h\in C(\overline\Omega;\mathbb R^n)$ satisfies $\int_{\partial\Omega}(h\cdot\nu)\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$, then $h\cdot\nu=0$ on $\partial\Omega$, where $\nu$ is the outward unit normal.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$ with surface measure $\sigma$ on $\partial\Omega$; a function $g\in C(\overline\Omega)$ with $\int_{\partial\Omega}g\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$. For the equivalent formulation, $h\in C(\overline\Omega;\mathbb R^n)$ with $\int_{\partial\Omega}(h\cdot\nu)\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$.

[F0] Under the Axiom of Choice, the Axiom of Countable Choice holds ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), which is the measure convention under which the boundary charts, the ambient partitions and the surface integral are set up.

[F1] A bounded $C^1$ domain is locally a graph: near each boundary point, after a rigid change of coordinates, $\partial\Omega$ is $\{z=(y,t):t=h(y)\}$ for a $C^1$ function $h$ on a ball, $\Omega$ is locally the subgraph, and the outward normal is $\nu=(-Dh,1)/\sqrt{1+|Dh|^2}$; the surface integral over a compact face contained in a regular patch is computed by the chart $X(y)=(y,h(y))$ with Gram factor $J(y)=\sqrt{1+|Dh(y)|^2}\ge1$ ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]), the definition being assembled from finitely many charts with an ambient smooth partition of unity ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

[F2] For every $0<r<R$ and every centre $a$ there is a smooth bump equal to one on $\overline B_r(a)$ and supported strictly inside $B_R(a)$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F3] If $G\in L^1_{\mathrm{loc}}(U)$ on an open set $U\subseteq\mathbb R^m$ satisfies $\int_UG\psi=0$ for every $\psi\in C_c^\infty(U)$, then $G=0$ almost everywhere on $U$ ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

## Proof

**Proof technique:** direct, by flattening the boundary at an arbitrary boundary point and applying the fundamental lemma to the charted integrand.

1.1 Local chart at a boundary point. Fix $x_0\in\partial\Omega$. By [F1] we may, after translating and applying a rigid motion, assume $x_0=0$ and find $\rho>0$, $h\in C^1(B(0,\rho))$ and a neighbourhood $U\ni0$ with the boundary in $U$ is the graph of $h$ and the domain in $U$ is its subgraph, with both sets intersected with $U$; write $X(y):=(y,h(y))$ and $J:=\sqrt{1+|Dh|^2}\ge1$. Any function on $\partial\Omega$ whose support lies in this patch has surface integral equal to the chart integral against $J$, by [F1]. [F0, F1, given]

2.1 A cutoff and suitable test functions. Choose $0<r<R$ with $B(0,R)\subseteq U$ and let $\eta$ be the smooth bump of [F2] with $\eta=1$ on $\overline B_r(0)$ and $\operatorname{supp}\eta\subseteq B_R(0)$. Choose $\delta>0$ with $\delta<\rho$ and $|(y,h(y))|<r$ for $|y|<\delta$. For every $\psi\in C_c^\infty(\{|y|<\delta\})$ define $\varphi(z):=\psi(z')\eta(z)$, where $z'=(z_1,\dots,z_{n-1})$; then $\varphi\in C_c^\infty(\mathbb R^n)$, hence $\varphi\in C^\infty(\overline\Omega)$, and for $|y|<\delta$ one has $\varphi(X(y))=\psi(y)\eta(X(y))=\psi(y)$ because $X(y)\in\overline B_r(0)$ there. [F2, step 1.1]

3.1 The local integral identity. The hypothesis gives $\int_{\partial\Omega}g\varphi\,d\sigma=0$ for the test function $\varphi$ of step 2.1, whose boundary support lies in the patch of step 1.1; the chart formula therefore yields $0=\int_{B(0,\rho)}g(X(y))\varphi(X(y))J(y)\,dy=\int_{B(0,\rho)}G(y)\psi(y)\,dy$, where $G:=g\circ X\cdot J$ is continuous because $g$ is continuous on $\overline\Omega$ and $h$ is $C^1$. As $\psi\in C_c^\infty(\{|y|<\delta\})$ was arbitrary, $G\in L^1_{\mathrm{loc}}$ satisfies $\int G\psi=0$ for every test function supported in that ball. [F1, step 1.1, step 2.1]

4.1 The fundamental lemma at $x_0$. Applying [F3] to $G$ on the ball $\{|y|<\delta\}$ gives $G=0$ almost everywhere; since $J\ge1$, this implies $g\circ X=0$ almost everywhere, and since $y\mapsto g(X(y))$ is continuous, $g(X(y))=0$ for every $|y|<\delta$. In particular $g(x_0)=g(X(0))=0$. [F3, step 3.1]

5.1 Conclusion on the boundary. The point $x_0\in\partial\Omega$ was arbitrary, so $g=0$ on $\partial\Omega$. [step 4.1]

6.1 The vector-valued formulation. Let $h\in C(\overline\Omega;\mathbb R^n)$ satisfy $\int_{\partial\Omega}(h\cdot\nu)\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$. The boundary function $\gamma:=(h\cdot\nu)|_{\partial\Omega}$ is continuous, because $h$ is continuous on $\overline\Omega$ and the normal field $\nu$ is continuous on the $C^1$ boundary [F1]; the argument of steps 1.1–5.1 uses only the boundary values of the continuous integrand and the linearity of the integral in it, so it applies with $g$ replaced by $\gamma$ and gives $\gamma=0$ on $\partial\Omega$, that is $h\cdot\nu=0$ on $\partial\Omega$. [F1, step 5.1] ∎ 