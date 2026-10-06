---
id: ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations
kind: example
title: "Fixed-trace and free-trace variations give different boundary equations"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-weak-euler-lagrange-equation-for-integral-functionals, thm-natural-boundary-condition-for-free-boundary-variations, thm-dirichlet-principle-for-poisson-equation, lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed, thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace, lem-boundary-fundamental-lemma-of-the-calculus-of-variations, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-countable-choice, def-axiom-of-choice, cor-first-green-identity-on-a-bounded-c-one-domain, lem-fundamental-lemma-of-the-calculus-of-variations, thm-holder-inequality-for-integrals, thm-fermat-interior-extremum]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Sections 4.1-4.2, Theorems 4.3 and 4.5, printed pp. 47-50"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Sections 2.2-2.4, Dirichlet/Neumann/mixed conditions, printed pp. 7-10"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A, UC Berkeley, 19 March 2024 (complete 179-page author PDF)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Section 1.4, printed pp. 7-8"
verification:
  precheck: pass
---

## Example

**Example.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, let $f\in L^2(\Omega;\mathbb R)$, and put
$$I(u)=\frac12\int_\Omega|Du|^2\,dx-\int_\Omega fu\,dx.$$
(a) **Fixed trace:** a local minimiser in the $H^1$ norm on the nonempty affine class $K_g=\{v\in H^1(\Omega):Tv=g\}$, with $g\in H^{1/2}(\partial\Omega)$, solves the weak Dirichlet problem $-\Delta u=f$, $Tu=g$ ([[thm-dirichlet-principle-for-poisson-equation]], [[lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed]]).
(b) **Free trace:** if $u\in C^2(\overline\Omega)$ is a local minimiser in the $C^2$ norm on $C^2(\overline\Omega)$, then $-\Delta u=f$ almost everywhere in $\Omega$ and $\partial_\nu u=0$ on $\partial\Omega$. Choosing the continuous representative $f=-\Delta u$ makes the interior equation pointwise. This is the boundary condition suggested by [[thm-natural-boundary-condition-for-free-boundary-variations]], proved directly here since a general $L^2$ forcing need not give a $C^2$ integrand.

The constant-shift identity is $I(u+c)=I(u)-c\int_\Omega f$. Thus $I$ is invariant under global constants exactly when $\int_\Omega f=0$, and it is never coercive on all of $H^1(\Omega)$. If $\int_\Omega f\ne0$, no free local minimiser exists. On a connected domain satisfying the extension-domain hypothesis of [[thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace]], zero-mean forcing gives a unique mean-zero weak Neumann solution; nonzero mean cannot be repaired merely by normalising the solution. On a disconnected domain compatibility is required on each component and the additive constants are independent on those components.

## Facts & Assumptions

**Given:** The Axiom of Choice; the real domain and data above; local minimality in $H^1$ on $K_g$ in (a), or in $C^2$ on the whole $C^2$ space in (b).

[F1] The fixed-trace class is a translate of $H^1_0(\Omega)$; its admissible directions are exactly that subspace ([[lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed]]). The weak Euler–Lagrange identity holds for these directions ([[thm-weak-euler-lagrange-equation-for-integral-functionals]]).

[F2] The Dirichlet principle identifies its energy minimiser with the unique weak Poisson solution ([[thm-dirichlet-principle-for-poisson-equation]]).

[F3] First Green identity holds for $u\in C^2(\overline\Omega)$ and smooth tests under Countable Choice, supplied by AC ([[cor-first-green-identity-on-a-bounded-c-one-domain]]). A locally integrable function pairing to zero with all compactly supported tests is zero almost everywhere ([[lem-fundamental-lemma-of-the-calculus-of-variations]]). A continuous boundary flux pairing to zero with all ambient smooth tests vanishes on the boundary ([[lem-boundary-fundamental-lemma-of-the-calculus-of-variations]]).

[F4] The Neumann supplier requires a bounded connected extension domain and a bounded forcing functional $F$ with $F(1)=0$; it gives a unique mean-zero solution and all other solutions differ by constants. It also records the componentwise compatibility needed in the disconnected case ([[thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace]]).

[F5] Holder makes $v\mapsto\int f v$ bounded on $H^1$, and bounds all terms in the quadratic expansion below ([[thm-holder-inequality-for-integrals]]). Fermat's theorem gives a zero derivative at a two-sided interior local minimum ([[thm-fermat-interior-extremum]]).

## Verification

1.1 Fixed trace. For every $\varphi\in H^1_0(\Omega)$, the curve $u+t\varphi$ stays in $K_g$ by [F1]. Its energy is exactly $I(u)+t\int(Du\cdot D\varphi-f\varphi)+\tfrac12t^2\int|D\varphi|^2$. Local minimality and [F5] give $\int Du\cdot D\varphi=\int f\varphi$, the weak Dirichlet equation. Moreover the same expansion at $t=1$ shows $I(u+\varphi)-I(u)=\tfrac12\int|D\varphi|^2\ge0$, so this local minimiser is global and [F2] applies. [F1, F2, F5, given, algebra]

1.2 Free trace. For every $\varphi\in C^\infty(\overline\Omega)$, the curve $u+t\varphi$ is admissible and close to $u$ in the $C^2$ norm as $t\to0$. The same quadratic expansion and [F5] give $\int(Du\cdot D\varphi-f\varphi)=0$. For compactly supported tests, Green identity [F3] then yields $\int(-\Delta u-f)\varphi=0$, so $-\Delta u=f$ almost everywhere by the fundamental lemma. Returning to arbitrary smooth tests gives $\int_{\partial\Omega}(\partial_\nu u)\varphi=0$ by Green identity; the continuous field $Du$ and the boundary fundamental lemma force $\partial_\nu u=0$. [F3, F5, given]

2.1 Constants and compatibility. Direct expansion gives $I(u+c)=I(u)-c\int f$. If $\int f\ne0$, arbitrarily small constant shifts in the appropriate sign lower the energy, and large shifts make it tend to $-\infty$; if $\int f=0$, arbitrarily large shifts leave it fixed. In both cases coercivity on the full space fails. In case (b), testing the first variation with $1$ gives $\int f=0$. At each boundary point the one-sided $C^1$ graph convention gives a smaller connected subgraph neighbourhood meeting only one component; at interior points use a ball in the component. Thus a component indicator extends locally constantly to $\overline\Omega$ and is a $C^2$ admissible direction, giving the componentwise condition. Under the connected extension-domain hypotheses of [F4], the functional $F(v)=\int f v$ is bounded by [F5] and satisfies $F(1)=0$ precisely for zero-mean forcing, so [F4] supplies the normalised weak solution. [F4, F5, step 1.2, algebra] ∎
