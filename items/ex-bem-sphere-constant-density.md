---
id: ex-bem-sphere-constant-density
kind: example
title: A constant density on the sphere gives a constant trace
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-bem-newtonian-kernel-in-three-dimensions, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-sine-and-cosine-derivatives, thm-ftc-second-part]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.2, PDF pp. 3–7: the Laplace single-layer kernel and sphere normalization examples."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed p. 615: the normalized three-dimensional single-layer kernel."
---

## Example

For $R>0$, let $S_R=\{y\in\mathbb R^3:|y|=R\}$ and take density $\lambda=1$. The classical Newton single-layer potential is
$$S1(x)=\int_{S_R}\frac{1}{4\pi|x-y|}\,dS_y=\begin{cases}R,&|x|\le R,\\ R^2/|x|,&|x|\ge R.\end{cases}$$
It is continuous on $S_R$ with trace $R$. With outward radial normal, the interior and exterior normal derivatives at the sphere are $0$ and $-1$, respectively, so their difference is $1$, the density.

## Facts & Assumptions

**Given:** The Newton kernel $G_3(x,y)=(4\pi|x-y|)^{-1}$ of [[def-bem-newtonian-kernel-in-three-dimensions]], a radius $R>0$, and the sphere $S_R$.

[F1] The three-dimensional layer kernel is normalized as $G_3=(4\pi|x-y|)^{-1}$ ([[def-bem-newtonian-kernel-in-three-dimensions]]).

[F2] The usual radius-$R$ sphere parametrization has area density $R^2\sin\theta$ on $0<\theta<\pi$, $0<\varphi<2\pi$; its omitted poles and meridian have zero parameter contribution. Taking $t=\cos\theta$ gives $dS=R^2\,d\varphi\,(-dt)$ in the axisymmetric integral. ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]])

## Proof

1.1 For $r=|x|>0$, spherical coordinates centered on the axis through $x$ give $S1(x)=\frac{R^2}{2}\int_{-1}^1(r^2+R^2-2rRt)^{-1/2}dt=\frac{R}{2r}(r+R-|r-R|).$ If $r<R$ this equals $R$, and if $r>R$ it equals $R^2/r$; at $r=R$ the same convergent improper integral gives $R$, and at $r=0$ the constant kernel $1/(4\pi R)$ times the parametrized area $4\pi R^2$ gives $R$. [F1, F2, given, algebra]

2.1 Differentiating the two radial formulas gives $\partial_rS1=0$ for $r<R$ and $\partial_rS1=-R^2/r^2$ for $r>R$. Their boundary limits are $0$ and $-1$, so $\partial_n^-S1-\partial_n^+S1=1=\lambda$. This direct smooth-sphere calculation checks the kernel normalization and jump orientation independently of the polyhedral theorem. [step 1.1, given, algebra] ∎

