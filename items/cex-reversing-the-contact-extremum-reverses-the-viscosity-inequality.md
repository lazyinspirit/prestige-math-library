---
id: cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality
kind: counterexample
title: A strict subsolution can fail the supersolution lower-test condition
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- thm-fermat-for-euclidean-local-extrema
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Exercise 7, printed p. 19
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 3, elementary sign checks, printed pp. 10--12
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim:** for a first-order equation $u_t+H(x,t,Du)=0$, passing the
subsolution test at every upper contact forces the supersolution test at every
lower contact, so that a viscosity subsolution which is differentiable is
automatically a viscosity solution.

The claim fails for the equation $u_t+H(u_x)=0$ on
$U=\mathbb R\times(0,\infty)$ with $H(p)=p$
([[def-viscosity-subsolution-and-supersolution]]): the function
$u(x,t)=-t$ is a viscosity subsolution but not a viscosity supersolution. The
numerical residual $u_t+H(u_x)=-1$ is the same at upper and lower contacts;
what differs is the direction of the inequality that the definition requires.

## Facts & Assumptions

**Given:** The open set $U=\mathbb R\times(0,\infty)$, the Hamiltonian $H(p)=p$, the equation $u_t+H(u_x)=0$, and $u(x,t)=-t$ on $U$.

[F1] A viscosity subsolution is tested at local maxima of $u-\phi$ and must satisfy $\phi_t+H(z_0,D\phi)\le0$ there; a viscosity supersolution is tested at local minima of $v-\phi$ and must satisfy $\phi_t+H(z_0,D\phi)\ge0$ there; the test function $\phi$ is required to be $C^1$, whereas $u$ and $v$ need only have their respective semicontinuity ([[def-viscosity-subsolution-and-supersolution]]).

[F2] At a point where a differentiable function of several variables has a local maximum or a local minimum, its total derivative vanishes ([[thm-fermat-for-euclidean-local-extrema]]).

## Counterexample

**Proof technique:** direct evaluation of the two contact inequalities.

1.1 $u$ is a viscosity subsolution. Let $\phi\in C^1(U)$ and let $u-\phi$ have a local maximum at $z_0=(x_0,t_0)\in U$. The function $u-\phi$ is differentiable with total derivative $Du-D\phi$, so [F2] gives $D\phi(z_0)=Du(z_0)=(0,-1)$, that is $\phi_x(z_0)=0$ and $\phi_t(z_0)=-1$. Hence $\phi_t(z_0)+H(\phi_x(z_0))=-1+0=-1\le0$, which is the subsolution inequality of [F1] at the upper contact. [F1, F2, algebra]

1.2 $u$ is not a viscosity supersolution. Take the test function $\phi:=u$, which belongs to $C^1(U)$. Then $u-\phi\equiv0$ has a local minimum at every point of $U$, so the supersolution test of [F1] applies at, say, $z_0=(0,1)$; but $\phi_t(z_0)+H(\phi_x(z_0))=-1+0=-1<0$, and the required inequality is $\ge0$. Hence the supersolution condition fails, and $u$ is not a viscosity solution of the equation on $U$. [F1, algebra]

2.1 Conclusion. Step 1.1 verifies every upper contact of $u$ and step 1.2 exhibits a lower contact at which the opposite inequality fails, so the subsolution property does not imply the supersolution property; the residual is $-1$ in both computations, and only the required direction of the inequality changes between them. [step 1.1, step 1.2] ∎

## Remarks

- **What the example isolates.** The sign asymmetry of the test-function definition is not a matter of the value of the residual but of the direction of the inequality at the two kinds of contact. This is the reason the page defines the two one-sided notions separately and why the reverse implication is false for a monotone-in-time function.
