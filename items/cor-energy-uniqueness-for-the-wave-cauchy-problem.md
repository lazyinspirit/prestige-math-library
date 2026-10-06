---
id: cor-energy-uniqueness-for-the-wave-cauchy-problem
kind: corollary
title: "Energy uniqueness for the wave Cauchy problem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-countable-choice, thm-conservation-of-total-wave-energy, lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets, def-wave-equation-cauchy-data-and-wave-speed, def-wave-energy-and-energy-flux, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-algebra-of-derivatives, def-convex-subset-of-euclidean-space, lem-sphere-and-ball-measures-scale]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed p. 178, Corollary 7.13: uniqueness on $\\mathbb R^n$ from the conserved energy"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-292, Theorems 9.2.2-9.2.3: energy uniqueness on $\\mathbb R^n$"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed p. 212: the $L^2$-energy estimate used for uniqueness"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$,
$T>0$ and let $u$ be a classical solution of $\Box_cu=0$ on
$\mathbb R^n\times(0,T)$ with Cauchy data $(u_0,u_1)$ and differentiable displacement $u_0$, so $Du_0$ in the initial-energy hypothesis is defined, and assume the total
energy has a finite initial value and is conserved in the sharp form
$E_{\mathbb R^n}(t)=E_{\mathbb R^n}(0)$ for every $t\in(0,T)$, where
$E_{\mathbb R^n}(0)=\tfrac12\int_{\mathbb R^n}(u_1^2+c^2|Du_0|^2)\,dx$. This
holds, for instance, when the solution has fixed compact spatial support (by
[[thm-conservation-of-total-wave-energy]](a) together with continuity of $e$ up
to $t=0$ on the fixed support with its value given by the data density), or when the integrability hypotheses of that
theorem's case (b) hold and $E_{\mathbb R^n}$ has a continuous extension to
$0$ with value equal to the displayed data energy.

(i) If the Cauchy data vanish, $u_0=u_1=0$, then $E_{\mathbb R^n}(0)=0$,
hence $E_{\mathbb R^n}(t)=0$ for all $t$, hence $u_t(\cdot,t)=Du(\cdot,t)=0$
and $u(\cdot,t)$ is constant on $\mathbb R^n$ for every $t\in(0,T)$; the
constant is the common limit of $u(\cdot,t)$ as $t\downarrow0$, namely $u_0=0$,
so $u\equiv0$.

(ii) More generally, if $u_1=0$ and $Du_0=0$ (equivalently
$E_{\mathbb R^n}(0)=0$ under the conserved-solution hypotheses), then $u(\cdot,t)\equiv u_0$ for every $t$, where the
displacement datum $u_0$ is then constant: the energy sees only $(u_t,Du)$, and
the displacement datum fixes the residual spatial constant.
Consequently, two classical solutions with equal Cauchy data in a class closed under differences, in which each difference has the stated sharp energy conservation, agree.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a classical solution $u$ of $\Box_cu=0$ on $\mathbb R^n\times(0,T)$ with Cauchy data $(u_0,u_1)$ and differentiable displacement $u_0$, so $Du_0$ in the initial-energy hypothesis is defined, whose total energy $E_{\mathbb R^n}(t)=\int_{\mathbb R^n}e(x,t)\,dx$ has the finite initial value $E_{\mathbb R^n}(0)=\tfrac12\int(u_1^2+c^2|Du_0|^2)$ and is conserved in the sharp form $E_{\mathbb R^n}(t)=E_{\mathbb R^n}(0)$ for $t\in(0,T)$; the density $e=\tfrac12(u_t^2+c^2|Du|^2)\ge0$ of [[def-wave-energy-and-energy-flux]].

[F1] In the whole-space settings (a) and (b), $E_{\mathbb R^n}$ is constant on $(0,T)$; the hypothesis of this corollary records the sharp form in which that constant is the initial value, $E_{\mathbb R^n}(t)=E_{\mathbb R^n}(0)$ for all $t\in(0,T)$; $E_{\mathbb R^n}(0)$ is the displayed data energy, not an assertion about endpoint derivatives. ([[thm-conservation-of-total-wave-energy]])

[F2] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F3] On an open convex set, a $C^1$ function with vanishing gradient is constant. ([[lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets]])

[F4] $\mathbb R^n$ is convex as a subset of itself. ([[def-convex-subset-of-euclidean-space]])

[F5] The wave operator is linear in its argument, so a difference of two solutions of $\Box_cu=0$ is again a solution. ([[thm-algebra-of-derivatives]], [[def-wave-equation-cauchy-data-and-wave-speed]])

## Proof

1.1 Vanishing of the density: if $E_{\mathbb R^n}(0)=0$ (in particular if $u_0=u_1=0$), then [F1] gives $E_{\mathbb R^n}(t)=0$ for every $t\in(0,T)$. Since $e(\cdot,t)\ge0$ is continuous, [F2] makes it zero almost everywhere, hence everywhere: a positive value would persist on a ball of positive measure. The sum of squares $2e=u_t^2+c^2|Du|^2$ then gives $u_t=Du=0$ pointwise at every positive time. [given, F1, F2, algebra]

2.1 Constancy: the space-time set $\mathbb R^n\times(0,T)$ is open and convex by [F4], so [F3] and step 1.1 make $u$ a single constant there. The displacement limit identifies this constant with $u_0(x)$ for every $x$. When $u_0=u_1=0$, this proves clause (i). [given, step 1.1, F3, F4]

3.1 General zero-energy data: if $u_1=0$ and $Du_0=0$, the displayed data energy is zero, so steps 1.1 and 2.1 show that $u$ equals the constant datum $u_0$ at every positive time. Conversely, if $E_{\mathbb R^n}(0)=0$, those steps make $u$ a single constant with $u_t=0$; its Cauchy limits give $u_0$ constant and $u_1=0$, hence $Du_0=0$. This proves clause (ii) and its equivalence without assuming continuity of $Du_0$ or $u_1$. [given, step 1.1, step 2.1, algebra]

4.1 Uniqueness: for two solutions $u,v$ in the stated class with equal Cauchy data, $w:=u-v$ is homogeneous by [F5] and has zero Cauchy limits. The class hypothesis supplies sharp conservation for $w$, so clause (i) gives $u=v$ on $\mathbb R^n\times(0,T)$. Their Cauchy extensions, defined at $t=0$ by the common displacement datum, also agree there; independently assigned endpoint values are not constrained by the Cauchy limits. [given, step 2.1, F5] ∎
