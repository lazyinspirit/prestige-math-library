---
id: ex-eikonal-equation-as-a-viscosity-equation
kind: example
title: The eikonal equation as a viscosity equation at a tip
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- lem-viscosity-testing-by-first-order-jets
- prop-classical-solutions-are-viscosity-solutions
- def-jacobian-matrix-and-gradient
- def-euclidean-inner-product
- thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1, Exercise 6 (the positive norm) and Exercise 8 (distance), printed p. 19. The upper/lower contact calculations are supplied here.
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 3, the eikonal example at a ridge, printed pp. 10--12
verification:
  precheck: pass
---

## Example

Let $n\ge1$ and consider the eikonal equation $|Du|=1$ on $\mathbb R^n$, i.e. the first-order equation
$u_t+H(Du)=0$ with $H(p)=|p|-1$ read on functions independent of $t$. The
Euclidean norm $u(x)=|x|$ is a classical solution on
$\mathbb R^n\setminus\{0\}$, and at its tip $a=0$ it exhibits the difference between the
subsolution inequality $|D\phi|\le1$ and the reverse supersolution inequality
$|D\phi|\ge1$. There is no $C^1$ test function $\phi$ with $u-\phi$ having a
local maximum at $0$: such a contact would force $\phi(x)\ge\phi(0)+|x|$ near
$0$, hence $\langle D\phi(0),h\rangle\ge|h|$ for every direction $h$, which is
impossible for a linear functional. Writing $x_0$ for the coordinate indexed by $0<n$, the $C^1$ functions
$\phi(x)=\varepsilon x_0$ with $0<\varepsilon<1$ satisfy $\phi\le|x|$ near $0$
with equality at $0$, so $u-\phi$ has a local minimum at $0$ and the
supersolution test would require $|D\phi(0)|=\varepsilon\ge1$, which fails.
Hence $u$ is a subsolution of $|Du|=1$ but not a supersolution at the tip: it
satisfies the viscosity subsolution inequality $|Du|\le1$ at the tip and is a viscosity solution of
$|Du|=1$ on $\mathbb R^n\setminus\{0\}$.

## Verification

**Given:** The tip $a=0\in\mathbb R^n$, the function $u(x)=|x|$, the test-function definition of viscosity sub- and supersolutions for $u_t+H(Du)=0$ with $H(p)=|p|-1$ ([[def-viscosity-subsolution-and-supersolution]]), and the Euclidean inner product $\langle\cdot,\cdot\rangle$ ([[def-euclidean-inner-product]]) with gradient as in [[def-jacobian-matrix-and-gradient]].

[F1] $u-\phi$ has a local maximum (respectively minimum) at $0$ for $\phi\in C^1$ precisely when $u(x)-\phi(x)\le u(0)-\phi(0)$ (respectively $\ge$) for all $x$ near $0$, and the viscosity inequalities are tested at such contacts ([[def-viscosity-subsolution-and-supersolution]]). For the stationary extension $U(x,t)=u(x)$ on $\mathbb R^n\times(0,1)$, a space--time contact with $\Phi$ has $\Phi_t=0$: restrict to the time line, where the differentiable function $t\mapsto\Phi(x,t)$ has a local extremum. Restricting to the spatial slice therefore gives the inequalities $|D\phi|\le1$ and $|D\phi|\ge1$ used here; conversely, a spatial test extends to a time-independent space--time test. The norm is continuous by [F2], so the required semicontinuity holds.

[F2] The Euclidean norm satisfies $|th|=|t|\,|h|$ for $t\in\mathbb R$, and for $x\ne0$ it is differentiable at $x$ with gradient $x/|x|$, of norm $1$: [[def-euclidean-inner-product]] gives $|x+th|^2=|x|^2+2t\langle x,h\rangle+t^2|h|^2$, the norm axioms and the triangle inequality in clause 2 of [[thm-cauchy-schwarz-and-the-euclidean-norm]] give $|x+th|\ge|x|-|t|\,|h|$ and $\bigl||x+th|-|x|\bigr|\le|t|\,|h|$, Cauchy--Schwarz (clause 1 there) gives $|\langle x,h\rangle|\le|x|\,|h|$, and since $|x+th|+|x|\ge|x|>0$ the identity $|x+th|-|x|=\bigl(2t\langle x,h\rangle+t^2|h|^2\bigr)\big/\bigl(|x+th|+|x|\bigr)$ differs from $t\langle x,h\rangle/|x|$ by at most $2t^2|h|^2/|x|$, so the gradient is $x/|x|$ ([[def-jacobian-matrix-and-gradient]]).

**Proof technique:** direct test-function computation at the tip and the classical-consistency proposition away from it.

1.1 No upper test exists at the tip. Suppose $\phi\in C^1(\mathbb R^n)$ with $u-\phi$ having a local maximum at $0$; by [F1], $|x|-\phi(x)\le-\phi(0)$ near $0$, that is $\phi(x)\ge\phi(0)+|x|$ there. Substituting $x=th$ with $\|h\|=1$ and $t\downarrow0$ and dividing by $t$ gives $\langle D\phi(0),h\rangle\ge1$ for every unit vector $h$; testing $h$ and $-h$ gives both $\langle D\phi(0),h\rangle\ge1$ and $-\langle D\phi(0),h\rangle\ge1$, an impossibility. Hence there is no upper test at the tip and the subsolution inequality holds vacuously there. [F1, F2, algebra]

1.2 A lower test with a failing supersolution inequality. Every lower contact at the tip has slope of norm at most one: if $\phi$ is $C^1$ with $u-\phi$ having a local minimum at $0$, then after translating $\phi$ we have $|x|\ge\langle D\phi(0),x\rangle+o(|x|)$; substituting $x=th$ with $\|h\|=1$ gives $\langle D\phi(0),h\rangle\le1$ for $t>0$ and $\langle D\phi(0),h\rangle\ge-1$ for $t<0$, hence $|D\phi(0)|\le1$. Now take $\phi(x)=\varepsilon x_0$, where $x_0$ is the coordinate indexed by $0<n$, with $0<\varepsilon<1$: then $\phi(x)\le|x|$ near $0$ with equality at $0$, so $u-\phi$ has a local minimum at $0$ by [F1], while the supersolution condition requires $|D\phi(0)|=\varepsilon\ge1$ and fails. This single lower contact shows that $u$ is not a viscosity supersolution of $|Du|=1$ at the tip. [F1, F2, algebra]

1.3 Away from the tip the equation holds classically. On the open set $\mathbb R^n\setminus\{0\}$ the function $u$ is $C^1$ with $|Du|=1$ by [F2]. Its stationary extension on $(\mathbb R^n\setminus\{0\})\times(0,1)$ extends continuously to the closed cylinder with initial datum $|x|$, so [[prop-classical-solutions-are-viscosity-solutions]] applies and it is a viscosity solution of $|Du|=1$ there; in particular it is both a subsolution and a supersolution at every $x\ne0$. [F2, algebra]

2.1 Conclusion. By step 1.1 the subsolution test at the tip is vacuous, by step 1.2 the supersolution test fails there, and by step 1.3 both tests hold away from the tip. Hence $u$ solves the subsolution inequality $|Du|\le1$ everywhere and solves $|Du|=1$ exactly on $\mathbb R^n\setminus\{0\}$, while it is not a viscosity solution of $|Du|=1$ on any neighbourhood of the tip. [step 1.1, step 1.2, step 1.3] ∎
