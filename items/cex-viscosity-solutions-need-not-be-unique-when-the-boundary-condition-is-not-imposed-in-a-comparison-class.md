---
id: cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class
kind: counterexample
title: The eikonal equation on an interval has many solutions when endpoint data are omitted
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- lem-viscosity-testing-by-first-order-jets
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: 'Section 8, Theorem 8.2, printed p. 50: comparison requires ordered initial and lateral boundary data. The three distinct stationary interval profiles are computed here.'
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Sections 3--5, the eikonal equation and its nonuniqueness without boundary data, printed pp. 10--20
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim:** the stationary eikonal equation $|u'|=1$ on $\Omega=(0,1)$ has
a unique viscosity solution when no boundary data are prescribed.

The functions $u_1(x)=x$, $u_2(x)=1-x$ and
$u_3(x)=\tfrac12-|x-\tfrac12|=\min\{x,1-x\}$ are viscosity solutions of
$|u'|=1$ on $(0,1)$
([[def-viscosity-subsolution-and-supersolution]],
[[lem-viscosity-testing-by-first-order-jets]]). They are pairwise distinct, and
their continuous boundary traces are respectively $(0,1)$, $(1,0)$ and
$(0,0)$; in particular the equation without prescribed endpoint data does not
select a unique solution, and the examples are distinguished by their boundary
traces.

## Facts & Assumptions

**Given:** The interval $\Omega=(0,1)$, the equation $|u'|-1=0$ written as $U_t+F(U_x)=0$ on $U=\Omega\times(0,\infty)$ with $F(p)=|p|-1$, the profiles $u_1(x)=x$, $u_2(x)=1-x$, $u_3(x)=\min\{x,1-x\}$, and their time-independent lifts $U_i(x,t)=u_i(x)$.

[F1] A viscosity subsolution is defined by $\phi_t+F(\phi_x)\le0$ at every local maximum of $U-\phi$, and a supersolution by $\phi_t+F(\phi_x)\ge0$ at every local minimum, for $C^1$ test functions $\phi$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] A function $U$ is a viscosity subsolution if and only if every $p=(p_x,p_t)\in D^+U$ satisfies $p_t+F(p_x)\le0$, and a supersolution if and only if every $p\in D^-U$ satisfies $p_t+F(p_x)\ge0$ ([[lem-viscosity-testing-by-first-order-jets]]).

## Counterexample

**Proof technique:** direct test-function verification at the peak and explicit evaluation of the boundary traces.

1.1 Time-independent profiles have zero test time-derivative. Let $U(x,t)=u(x)$ for a continuous $u:(0,1)\to\mathbb R$ and let $\phi\in C^1(U)$ with $U-\phi$ having a local extremum at $(x_0,t_0)$. Then, testing along the time line $x=x_0$ and along the space line $t=t_0$, the jet characterisation [F2] gives $p_t=0$ for every $p\in D^+U(x_0,t_0)$ or $p\in D^-U(x_0,t_0)$: the inequality $u(x_0)-\phi(x_0,t)\le u(x_0)-\phi(x_0,t_0)$ near $t_0$ forces $\partial_t\phi(x_0,t_0)=0$ in the upper case (and dually in the lower case), and the remaining spatial inequality is the one-sided differentiability statement for $u$ at $x_0$. Consequently the viscosity conditions for $U$ reduce to: every upper-test spatial slope $p_x$ satisfies $F(p_x)\le0$, and every lower-test spatial slope $p_x$ satisfies $F(p_x)\ge0$. [F2, algebra]

2.1 The three profiles are solutions. For $x_0\ne\tfrac12$ each $u_i$ is $C^1$ near $x_0$ with $|u_i'|=1$, so at any upper or lower test the spatial slope equals $u_i'(x_0)=\pm1$, and [F1] gives $F(\pm1)=0$ in both directions. At $x_0=\tfrac12$, only $u_3$ is non-differentiable: writing $h=x-\tfrac12$ we have $u_3(\tfrac12+h)=\tfrac12-|h|$. If $\phi$ is an upper test with slope $p=\phi_x(\tfrac12,t_0)$, then $u_3\le\phi$ near the point gives for $h>0$ the inequality $-h+o(h)\le ph+o(h)$, hence $p\ge-1$, and for $h<0$ the inequality $h+o(|h|)\le ph+o(|h|)$, hence $p\le1$; thus every upper-test slope lies in $[-1,1]$ and $F(p)\le0$. If $\phi$ were a lower test, $u_3\ge\phi$ would give for $h>0$ that $p\le-1$ and for $h<0$ that $p\ge1$, which is impossible; hence there is no lower test at the peak and the supersolution condition is vacuous. By step 1.1 the same reduction applies to $u_1$ and $u_2$ at every point. Hence all three profiles are viscosity solutions of $|u'|=1$ on $(0,1)$. [step 1.1, F1, F2, algebra]

3.1 Distinctness and boundary traces. At $x=\tfrac14$ the values are $(u_1,u_2,u_3)=(\tfrac14,\tfrac34,\tfrac14)$ and at $x=\tfrac34$ they are $(\tfrac34,\tfrac14,\tfrac14)$, which distinguishes every pair; also $u_1-u_2=2x-1$ changes sign on $(0,1)$. The continuous extensions to $[0,1]$ have boundary values $u_1(0)=0,\ u_1(1)=1$; $u_2(0)=1,\ u_2(1)=0$; and $u_3(0)=u_3(1)=0$. Thus the equation with no prescribed boundary data admits at least three distinct viscosity solutions, and the displayed candidates carry different endpoint traces. [step 2.1, algebra] ∎

## Remarks

- **What this shows.** Comparison and uniqueness on a bounded domain require the boundary condition to be imposed; without it the solution class is not a singleton even for the simplest non-smooth first-order equation. This is the reason the page states comparison and uniqueness on $\mathbb R^n$ or, on a bounded cylinder, with boundary data on the parabolic boundary.
