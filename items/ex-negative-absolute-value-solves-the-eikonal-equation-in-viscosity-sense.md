---
id: ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense
kind: example
title: The negative absolute value solves the eikonal equation in the viscosity sense
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- thm-fermat-for-euclidean-local-extrema
- prop-classical-solutions-are-viscosity-solutions
- ex-eikonal-equation-as-a-viscosity-equation
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: 'Chapter 1, Exercises 6--8, printed p. 19: norm, reflection convention and distance solutions; the evolutionary lift is computed here.'
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 3, examples of viscosity solutions at cusps, printed pp. 10--12
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $u(x)=-|x|$ on $\mathbb R$. Then $|u'|=1$ for $x\ne0$, and $u$ is a
viscosity solution of the stationary eikonal equation $|u'|-1=0$.
Equivalently, for any $T>0$ its evolutionary extension
$U(x,t):=-|x|-t$ is a viscosity solution of $U_t+|U_x|=0$ on
$\mathbb R\times(0,T)$ ([[def-viscosity-subsolution-and-supersolution]]). At
every point $x\ne0$ the equation holds classically. At the cusp
$(0,t_0)$, every $C^1$ upper test has $\phi_t(0,t_0)=-1$ and satisfies
$|\phi_x(0,t_0)|\le1$, so the subsolution inequality holds, and there is no
$C^1$ test function for which $U-\phi$ has a local minimum at $(0,t_0)$; hence
the supersolution test is vacuous. This is the complementary cusp to
[[ex-eikonal-equation-as-a-viscosity-equation]], where the positive absolute
value fails the supersolution test because it has lower tests with slopes of
modulus less than one.

## Verification

**Given:** The function $U(x,t)=-|x|-t$ on $U=\mathbb R\times(0,T)$, the equation $U_t+|U_x|=0$, and the test-function definition of viscosity sub- and supersolutions.

[F1] The subsolution inequality is tested at local maxima of $U-\phi$ and the supersolution inequality at local minima, for $C^1$ test functions $\phi$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] At a local extremum of a differentiable function of two variables both partial derivatives vanish ([[thm-fermat-for-euclidean-local-extrema]]); away from $x=0$ the function $U$ is $C^1$ with $U_t=-1$ and $U_x=\mp1$, so it solves the equation classically there and is a viscosity solution on the open set $\mathbb R\setminus\{0\}\times(0,T)$ by [[prop-classical-solutions-are-viscosity-solutions]].

**Proof technique:** direct contact computation at the cusp.

1.1 Away from the cusp. On the open set $\{x\ne0\}$ the function $U$ is $C^1$ with $U_t=-1$ and $|U_x|=1$, so it is a viscosity solution of the equation there by [F2]. [F2]

1.2 Upper contacts at the cusp. Fix $t_0$ and let $\phi\in C^1$ with $U-\phi$ having a local maximum at $(0,t_0)$; normalize $\phi(0,t_0)=U(0,t_0)=-t_0$. Restricting to the line $x=0$ and using [F2] gives $\phi_t(0,t_0)=-1$. Writing $p:=\phi_x(0,t_0)$ and testing $x=h$, $x=-h$ with $h\downarrow0$ in the inequality $-|x|\le\phi(x,t_0)-\phi(0,t_0)=px+o(|x|)$ gives $p\ge-1$ and $p\le1$, that is $|p|\le1$. Hence $\phi_t+| \phi_x|=-1+|p|\le0$, which is the subsolution inequality. [F1, F2, algebra]

1.3 No lower contact at the cusp. If $U-\phi$ had a local minimum at $(0,t_0)$, the same computation with the inequality reversed would give $\phi_t(0,t_0)=-1$ and $p\le-1$ (from $h>0$) together with $p\ge1$ (from $h<0$), an impossibility; hence the set of lower contacts at the cusp is empty and the supersolution inequality holds vacuously. [F1, F2, algebra]

2.1 Conclusion. Steps 1.2 and 1.3 show that $U$ is a subsolution everywhere on $\mathbb R\times(0,T)$ and a supersolution everywhere, hence a viscosity solution; step 1.1 identifies the classical region. The cusp supports the subsolution inequality but admits no lower test, which is the complementary behaviour to the positive absolute value at its ridge point. [step 1.1, step 1.2, step 1.3] ∎
