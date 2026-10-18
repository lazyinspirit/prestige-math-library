---
id: ex-hp-analytic-p-refinement-on-a-fixed-box
kind: example
title: An analytic box solution has exponential Galerkin p convergence
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - thm-hp-analytic-p-convergence-on-fixed-tensor-mesh
  - thm-hp-galerkin-energy-error-on-fixed-mesh
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
axiom_use: "Countable Choice is carried through the analytic projector and Céa estimates; no arbitrary-index choice is used."
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§§30.1–30.4: Legendre projection and exponential p-approximation context; the example uses the local explicit estimate."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: p-refinement spaces and hierarchical polynomial degrees."
---

## Example

Assume Countable Choice.

On the single reference square $\Omega=(-1,1)^2$ let $u(x,y)=1/(4-x)$ and use $a(v,w)=\int_\Omega(\nabla v\cdot\nabla w+vw)$ on $H^1(\Omega)$ with exact load $F(w)=a(u,w)$. For every $p\ge1$, the tensor-degree-$p$ conforming Galerkin solution $u_p$ satisfies
$$
\|u-u_p\|_{H^1(\Omega)}\le C\,\frac13\left(\frac34\right)^p
$$
for a fixed constant $C$.

## Facts & Assumptions

**Given:** Countable Choice, $p\ge1$, $u(x,y)=(4-x)^{-1}$ on $[-1,1]^2$, and $H^1$ with norm $\|v\|_{H^1}^2=\|v\|_2^2+\|\nabla v\|_2^2$.

[F1] [[thm-hp-analytic-p-convergence-on-fixed-tensor-mesh]]: on the fixed box, reference derivative bounds $M|\nu|!R^{-|\nu|}$ with $R^{-1}<q<1$ yield a trace-matching polynomial with $H^1$ error at most $C_{R,q}Mq^p$.

[F2] [[thm-hp-galerkin-energy-error-on-fixed-mesh]]: the exact coercive problem transfers this best approximation rate to its conforming Galerkin solution.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product Cauchy–Schwarz inequality bounds $|a(v,w)|$ by $\|v\|_{H^1}\|w\|_{H^1}$.

## Verification

1.1 For a multi-index $\nu=(n,j)$, $D^\nu u=0$ when $j>0$, while $\partial_x^n u(x,y)=n!(4-x)^{-n-1}$. Since $4-x\ge3$ on the square, $|D^\nu u|\le\frac13|\nu|!2^{-|\nu|}$ in every case. Thus the hypothesis of [F1] holds with $M=1/3$, $R=2$, and $q=3/4$. [F1, given, algebra]

2.1 The form $a$ is the $H^1$ inner product. By [F3], $F(w)=a(u,w)$ is bounded, and $u$ is the exact variational solution by its definition. Applying [F2] with the constants established in step 1.1 gives $\|u-u_p\|_{H^1}\le C(1/3)(3/4)^p$. [F2, F3, step 1.1, given] ∎
