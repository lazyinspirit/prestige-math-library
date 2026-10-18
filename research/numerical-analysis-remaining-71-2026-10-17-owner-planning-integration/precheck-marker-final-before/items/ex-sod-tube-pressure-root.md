---
id: ex-sod-tube-pressure-root
kind: example
title: "Sod tube: a unique star-pressure root between the initial pressures"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-euler-star-pressure-response
  - thm-euler-star-pressure-root-and-vacuum-criterion
  - alg-safeguarded-euler-star-pressure-solver
  - lem-euler-pressure-solver-bracket-and-termination
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–93: ideal-gas Riemann data and pressure equation"
---

## Example

For $\gamma=7/5$, take left primitive data $(\rho_L,u_L,p_L)=(1,0,1)$ and
right data $(\rho_R,u_R,p_R)=(1/8,0,1/10)$. Set
$E_K=p_K/(\gamma-1)+\rho_Ku_K^2/2$ and
$U_K=(\rho_K,\rho_Ku_K,E_K)$ for $K=L,R$; both conserved states lie in
$\mathcal G_\gamma$.

## Facts & Assumptions

**Given:** The Sod initial states, the ideal-gas pressure response, its root/vacuum criterion, and the finite-budget bracket solver.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $\rho>0,p>0$ is equivalent to the declared admissible-state inequalities for the ideal-gas model.

[F2] [[def-euler-star-pressure-response]]: $\Phi(p)=f_L(p)+f_R(p)+u_R-u_L$ with rarefaction response below $p_K$ and shock response above it.

[F3] [[thm-euler-star-pressure-root-and-vacuum-criterion]]: $\Phi(0+)<0$ gives a unique positive root; $\Phi$ is strictly increasing.

[F4] [[lem-euler-pressure-solver-bracket-and-termination]]: for a budget $N$ with $(3/4)^N P\le\tau$, the safeguarded procedure returns a bracket of width at most $\tau$ containing that root.

## Verification

1.1 The densities and pressures are positive, so [F1] gives admissible states. The sound speeds are $c_L=\sqrt{7/5}$ and $c_R=\sqrt{28/25}$. Since both velocities are zero, $\Phi(0+)=-2(c_L+c_R)/(\gamma-1)<0$. By [F3] there is one positive star pressure $p_*$. [given, F1, F2, F3, algebra]

2.1 At $p=1/10=p_R$, $f_R(p)=0$ while $p<p_L$ makes the left rarefaction response strictly negative; hence $\Phi(1/10)<0$. At $p=1=p_L$, $f_L(p)=0$ while $p>p_R$ makes the right shock response strictly positive; hence $\Phi(1)>0$. Strict increase gives $1/10<p_*<1$, so the left wave is a rarefaction and the right wave is a shock. [step 1.1, F2, F3, algebra]

3.1 The contact between the two acoustic waves has pressure $p_*$ and common velocity $u_*=u_L-f_L(p_*)=u_R+f_R(p_*)$. Equality follows by rearranging $\Phi(p_*)=0$. The explicit theorem bracket $[0,P]$ and [F4] give a finite-budget enclosure of any prescribed positive width when the budget meets its bound; insufficient budgets return `budget-exhausted` with the root still bracketed. [step 2.1, F2, F3, F4, algebra] ∎
