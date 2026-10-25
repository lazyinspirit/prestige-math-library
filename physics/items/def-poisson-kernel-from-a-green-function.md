---
id: def-poisson-kernel-from-a-green-function
kind: definition
title: Poisson kernel from a Dirichlet Green function
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 equation (5.35), printed p.125"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.8 Green-function symmetry and representation, printed pp.45–46"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - cor-regular-level-set-local-graph-theorem
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-regular-critical-points-values-and-level-sets
  - lem-derivative-of-a-power
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - thm-algebra-of-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-green-function-symmetry
---

## Definition

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$, and let $n\ge2$. Let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain carrying a Dirichlet Green function $G_\Omega$ for $-\Delta$. For every pole $p\in\Omega$, assume its designated corrector satisfies $H_p\in C^2(\overline\Omega)$, as required by the Green-symmetry hypothesis.

For $x\in\Omega$ and $y\in\partial\Omega$, define the boundary-slot normal derivative by
$$\partial_{\nu_y}G_\Omega(x,y):=D_z\bigl(\Phi(z-x)-H_x(z)\bigr)\big|_{z=y}\cdot\nu_\Omega(y),$$
and define the Poisson kernel by
$$P_\Omega(x,y):=-\partial_{\nu_y}G_\Omega(x,y).$$
Here $\Phi$ is the positive-minus-Laplacian fundamental solution fixed in [[def-dirichlet-green-function-for-minus-laplacian]], and $\nu_\Omega$ is the published outward unit normal. The derivative in the boundary variable is the trace from interior points, not a derivative of a function initially defined on $\partial\Omega$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, the bounded $C^1$ domain $\Omega$, its Dirichlet Green function, and the correctors $H_p\in C^2(\overline\Omega)$ for every $p\in\Omega$.

[A1] The Axiom of Countable Choice is written $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The Green definition, bounded-$C^1$/surface convention, and Green-symmetry theorem carry this same assumption ([[def-dirichlet-green-function-for-minus-laplacian]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[thm-green-function-symmetry]]). Here its substantive role is exactly the symmetry step 3.1, which identifies the slots; the collar geometry and normal-trace calculation require no further choice.

[F1] For each pole $x$, $G_\Omega(z,x)=\Phi(z-x)-H_x(z)$ for interior $z\ne x$ ([[def-dirichlet-green-function-for-minus-laplacian]]).

[F2] The Green-symmetry hypothesis requires $H_x\in C^2(\overline\Omega)$ for every pole $x$ ([[thm-green-function-symmetry]]).

[F3] The normalized kernel $\Phi$ is smooth away from its pole ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F4] Under the stated hypotheses, $G_\Omega(x,z)=G_\Omega(z,x)$ for all distinct interior points ([[thm-green-function-symmetry]]).

[F5] A bounded $C^1$ domain is a bounded open set with locally $C^1$ graph boundary and its published outward unit normal ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F6] A positive-radius Euclidean sphere is the level set $F^{-1}(r^2)$ of $F(z)=\langle z-x,z-x\rangle$: the coordinate partials $\partial_iF(z)=2(z_i-x_i)$ are continuous, so the total derivative is $DF(z)h=2\langle z-x,h\rangle$, and $DF(z)(z-x)=2r^2\ne0$ at every $z\in S_2(x,r)$; hence $r^2$ is a regular value of $F$. ([[def-euclidean-spheres-and-closed-balls]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]]).

[F7] Regular level sets are locally $C^1$ graphs ([[cor-regular-level-set-local-graph-theorem]]).

[F8] For a $C^1$ function up to a bounded $C^1$ boundary, the classical normal derivative is its boundary gradient dotted with the outward unit normal ([[def-classical-normal-derivative]]).

## Verification

1.1 Fix $x\in\Omega$. Openness gives $r>0$ with $\overline B_2(x,2r)\subset\Omega$. Set $D_r=\Omega\setminus\overline B_2(x,r)$. It is bounded and open, its boundary is the disjoint union of $\partial\Omega$ and $S_2(x,r)$, and the latter is a regular level set, hence locally a $C^1$ graph by [F6]–[F7]. The outer boundary retains the $C^1$ charts from [F5]. The point $x+\tfrac32re_1$ belongs to $D_r$, so $D_r$ is nonempty; connectedness is not required in the bounded $C^1$ convention. Therefore $D_r$ is a bounded $C^1$ domain. [given, F5, F6, F7, choose, algebra]

2.1 On $\overline D_r$, the formula [F1] expresses $G_\Omega(z,x)$ as $\Phi(z-x)-H_x(z)$. The closure of $D_r$ stays away from $x$; [F2] and the off-pole smoothness in [F3] therefore give a $C^2$ extension of this function to $\overline D_r$. In particular, its first derivative has a continuous boundary trace on the outer component $\partial\Omega$. [F1, F2, F3, step 1.1, algebra]

3.1 For every interior $z\in D_r$, [F4] identifies $G_\Omega(x,z)$ with $G_\Omega(z,x)$. Thus the first-variable derivative of the right-hand expression in [F1] gives the unique continuous trace of the derivative in the second variable of $G_\Omega(x,z)$ as $z$ approaches $y\in\partial\Omega$. The assumption [A1] is inherited from the Green definition and the bounded-$C^1$/surface convention; its only substantive use here is [F4], through the Green-symmetry theorem, to identify the slots. The collar regularity is pointwise and choice-free. No full Axiom of Choice is used. [A1, F1, F2, F3, F4, step 2.1, algebra]

4.1 Restricting $G_\Omega(\cdot,x)$ to $D_r$ meets the hypotheses of the published classical normal derivative in [F8]. On the outer boundary its outward normal is $\nu_\Omega$, since the excised sphere lies strictly inside $\Omega$. The formula in the Definition is therefore exactly the classical outward normal derivative trace, and it is independent of the chosen sufficiently small $r$. The minus sign fixes the positive-kernel convention. No Sobolev trace or conormal derivative is asserted. [F5, F8, step 1.1, step 2.1, step 3.1, algebra] $\square$

## Source notes

Teschl §5.4, equation (5.35), printed p. 125, defines the Poisson kernel as the negative outward normal derivative of the Green function in its second variable. Equation (5.34) expresses that Green function as the fundamental solution minus a harmonic corrector; the stated $C^2(\overline\Omega)$ regularity makes the boundary trace used here classical. Schmidt §2.8, printed pp. 45–46, gives the Green-symmetry hypothesis and representation formula. Schmidt uses the opposite Laplacian/Green sign convention; translating to $-\Delta$ and the positive Green function yields the same negative-outward-derivative convention. These citations support the definition; the interior-slot trace is identified from the explicitly stated local symmetry hypothesis.
