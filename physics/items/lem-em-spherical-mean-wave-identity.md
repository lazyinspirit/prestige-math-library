---
id: lem-em-spherical-mean-wave-identity
kind: lemma
domain: mathematics
title: "The spherical mean identity behind the wave equation"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [def-countable-choice, lem-em-parameter-integrals, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, def-surface-integral-on-a-compact-c-one-hypersurface, def-laplacian-of-a-c2-function, thm-ftc-first-part, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure]
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapter 7 (the wave equation) and Chapter 2.1 (mean values)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 7 (wave equation weak solutions and the spherical mean identity) and Chapter 2.1 (mean value property), used as the contextual reference; the parameter-differentiation, divergence-theorem and sign bookkeeping are proved locally through the batch's published suppliers."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]), carried by the cited sphere, parameter, polar and divergence suppliers. Let $c>0$, let $f\in C^\infty(\mathbb R^3)$ (unbounded $f$ is allowed), and define the spherical mean

$$M_rf(x)=\frac1{4\pi}\int_{S^2}f(x+rn)\,d\Omega(n),\qquad r\ge0,$$

with the outward sphere measure of total area $4\pi$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]). Then $r\mapsto M_rf(x)$ is smooth for $r\ge0$ and satisfies the Euler-Poisson-Darboux identity

$$\partial_r^2M_rf(x)+\frac2r\partial_rM_rf(x)=\Delta M_rf(x)\qquad(r>0),$$

and the function $H_f(x,t)=t\,M_{ct}f(x)$, $t\ge0$, satisfies

$$\partial_t^2H_f=c^2\Delta H_f,\qquad H_f(x,0)=0,\qquad\partial_tH_f(x,0)=f(x).$$

All identities are local and need no decay of $f$, since every integration set is compact. This is the pure spherical-mean identity; it makes no claim about finite-domain boundary data or about general rough data.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; a constant $c>0$, a function $f\in C^\infty(\mathbb R^3)$, and the spherical mean $M_rf(x)$ over the unit sphere with chart/polar measure $d\Omega$ of total mass $4\pi$.

[F1] **Parameter integrals over the sphere.** Differentiating a compact surface integral in a parameter is legitimate when the integrand is smooth and all derivatives are continuous on the compact parameter and surface sets; the parameter-integral lemma supplies the surface-measure form and the interchange of the parameter derivative with the integral ([[lem-em-parameter-integrals]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F2] **Divergence theorem and the Laplacian.** On a bounded piecewise $C^1$ domain with outward normal, $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu\,dS$ for $C^1$ fields ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]); the Laplacian is $\Delta f=\sum_i\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]) and $\int_{B_r(x)}\Delta f\,dy=\int_{S_r(x)}\partial_\nu f\,dS$.

[F3] **Radial differentiation and polar coordinates.** The ball integral $J(r)=\int_{B_r(x)}g\,dy$ of a continuous $g$ has derivative $J'(r)=\int_{S_r(x)}g\,dS$, by polar integration and the one-variable fundamental theorem ([[thm-ftc-first-part]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]); on $S_r(x)$ the outward normal is $\nu=(y-x)/r$ and the substitution $y=x+rn$ gives $dS=r^2d\Omega(n)$ with the chart/polar measure ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] **Calculus rules.** The product, chain and algebra rules for smooth functions ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F5] **Choice accounting.** The Axiom of Countable Choice states that every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]). It is assumed for the sphere/parameter conventions in [F1], the divergence theorem in [F2], and the polar/surface measure suppliers in [F3]. The elementary differentiation in [F4] uses no further choice.




## Proof

**Proof technique:** direct.

1.1 For fixed $x$ the function $r\mapsto f(x+rn)$ is smooth on the compact sphere and the sphere measure is finite, so [F1] permits differentiation under the integral sign and gives $\partial_rM_rf(x)=\frac1{4\pi}\int_{S^2}n\cdot\nabla f(x+rn)\,d\Omega(n)$, with all higher $r$-derivatives obtained by iteration. [given, F1, F4, F5, algebra]

2.1 For $r>0$ apply the divergence theorem [F2] on $B_r(x)$ to the $C^1$ field $\nabla f$: $\int_{B_r(x)}\Delta f(y)dy=\int_{S_r(x)}\partial_\nu f\,dS$; substituting $y=x+rn$ with outward normal $n$ and $dS=r^2d\Omega$ by [F3] gives $\int_{B_r(x)}\Delta f=4\pi r^2\partial_rM_rf(x)$. [step 1.1, F2, F3, F5, algebra]

3.1 Differentiate the identity of step 2.1 in $r$: by [F3] the derivative of the left side is $\int_{S_r(x)}\Delta f\,dS=r^2\int_{S^2}\Delta f(x+rn)d\Omega(n)=4\pi r^2M_r(\Delta f)(x)$, while the derivative of the right side is $4\pi(2r\partial_rM_rf+r^2\partial_r^2M_rf)$; moving the Laplacian through the sphere integral by [F1] gives $M_r(\Delta f)=\Delta M_rf$, so dividing by $4\pi r^2$ yields $\partial_r^2M_rf+\frac2r\partial_rM_rf=\Delta M_rf$ for $r>0$. [step 1.1, step 2.1, F1, F2, F3, F4, F5, algebra]

4.1 Set $H_f(x,t)=tM_{ct}f(x)$ for $t>0$; differentiating twice with [F4] and the chain rule gives $\partial_tH_f=M_{ct}f+ct\,\partial_rM_{ct}f$ and $\partial_t^2H_f=2c\partial_rM_{ct}f+c^2t\partial_r^2M_{ct}f$; substituting step 3.1 at $r=ct$ cancels the terms with $\partial_rM_{ct}f$ and leaves $\partial_t^2H_f=c^2t\Delta M_{ct}f=c^2\Delta H_f$. [step 3.1, F4, algebra]

5.1 At $t=0$ one has $M_0f(x)=\frac1{4\pi}\int_{S^2}f(x)d\Omega=f(x)$, and $\partial_rM_0f(x)=\frac1{4\pi}\int_{S^2}n\cdot\nabla f(x)d\Omega=0$ because the chart/polar measure is invariant under $n\mapsto-n$ while $n\mapsto n\cdot\nabla f(x)$ is odd ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]); hence $H_f(x,0)=0$ and $\partial_tH_f(x,0)=f(x)$, while the displayed equation at $t=0$ reduces to $2c\,\partial_rM_0f=0=c^2\cdot0$. [step 4.1, F1, F3, algebra]

6.1 The stated Countable Choice premise is used only through [F1]-[F3] as recorded in [F5]; no choice-free proof is claimed. Every identity was proved on compact parameter and spatial sets with no decay of $f$ used, and the defining integral is smooth in signed $r$ as well, so the equation, the initial value and the initial velocity extend to $t=0$; this proves the stated spherical-mean identity. [step 4.1, step 5.1, F1, F2, F3, F5, algebra] ∎
