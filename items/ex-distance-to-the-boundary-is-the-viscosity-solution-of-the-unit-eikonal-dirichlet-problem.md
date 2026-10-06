---
id: ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem
kind: example
title: Distance to the boundary solves the unit eikonal Dirichlet problem on the ball
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- lem-viscosity-testing-by-first-order-jets
- def-euclidean-spheres-and-closed-balls
- def-norm-and-normed-space
- def-euclidean-inner-product
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
    locator: Chapter 1, Exercise 8, printed p. 19 (distance solves the eikonal Dirichlet problem); the ball verification is supplied here.
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: 'Section 3, Example 3.1, equations (3.7)--(3.8), printed pp. 11--12: the one-dimensional peak 1-|x| is a viscosity solution. The multidimensional ball and boundary-distance calculation are verified here.'
verification:
  precheck: pass
---

## Example

Let $n\ge1$ and let $\Omega=B(0,1)\subseteq\mathbb R^n$ be the open unit ball and let
$d(x):=1-|x|=\operatorname{dist}(x,\partial\Omega)$. Then $d$ is Lipschitz with
$|Dd|=1$ at every $x\ne0$, continuous on $\overline\Omega$ with $d=0$ on
$\partial\Omega$, and $d$ is a viscosity solution of the stationary eikonal
equation with zero boundary data:
$$|Du|=1\ \text{in }\Omega,\qquad u=0\ \text{on }\partial\Omega .$$
At $x\ne0$ the equation holds classically; at the centre the function has a
peak, every $C^1$ test function $\phi$ with $d-\phi$ having a local maximum at
$0$ satisfies $|D\phi(0)|\le1$ (the subsolution inequality), and no $C^1$
test function has $d-\phi$ locally minimal at $0$: a lower contact would require
$\langle D\phi(0),h\rangle\le-|h|$ for all $h$, which is impossible, so no such
contact exists and the supersolution test is vacuous at the centre. Hence $d$
is a viscosity solution. The example is the canonical nonsmooth
boundary-value solution of the eikonal equation, obtained by cone comparisons
at the centre rather than by an abstract existence theorem.

## Verification

**Given:** $n\ge1$, the open unit ball $\Omega=B(0,1)$, its boundary the unit sphere ([[def-euclidean-spheres-and-closed-balls]]), the distance function $d(x)=1-|x|$, the norm $|\cdot|$ ([[def-norm-and-normed-space]]) and the inner product ([[def-euclidean-inner-product]]).

[F1] The test-function definition of viscosity sub- and supersolutions of $|Du|-1=0$, and its equivalent jet formulation ([[def-viscosity-subsolution-and-supersolution]], [[lem-viscosity-testing-by-first-order-jets]]).

[F2] For $x\ne0$ the map $x\mapsto|x|$ is $C^1$ with gradient $x/|x|$ of norm $1$, as computed in [[ex-eikonal-equation-as-a-viscosity-equation]]; hence $d$ is $C^1$ on $\Omega\setminus\{0\}$ with $Dd(x)=-x/|x|$ and $|Dd(x)|=1$; also $d$ is Lipschitz with constant $1$ by the triangle inequality ([[def-norm-and-normed-space]], [[def-euclidean-inner-product]]).

**Proof technique:** classical verification away from the centre and cone comparisons at the centre.

1.1 Classical region. For $x\ne0$ the function $d$ is $C^1$ near $x$ with $|Dd|=1$ by [F2], so it is a viscosity solution of $|Du|=1$ on the punctured ball by the classical-consistency argument of [[ex-eikonal-equation-as-a-viscosity-equation]]. [F2]

1.2 Upper contacts at the centre. Let $\phi\in C^1$ with $d-\phi$ having a local maximum at $0$; normalize $\phi(0)=d(0)=1$. Then $1-|x|\le\phi(x)=1+\langle D\phi(0),x\rangle+o(|x|)$ near $0$, that is $\langle D\phi(0),x\rangle\ge-|x|+o(|x|)$; substitute $x=ae$ and $x=-ae$ for a unit vector $e$, divide by $a>0$, and let $a\downarrow0$ to obtain $|\langle D\phi(0),e\rangle|\le1$. Taking $e$ in the direction of $D\phi(0)$, when this gradient is nonzero, gives $|D\phi(0)|\le1$. Hence every upper test satisfies the subsolution inequality $|D\phi(0)|-1\le0$ at the centre. [F1, F2, algebra]

1.3 No lower contact at the centre. If $d-\phi$ had a local minimum at $0$, the reversed inequality would give $\langle D\phi(0),x\rangle\le-|x|+o(|x|)$ for all $x$ near $0$; substituting $x=ae$ and $x=-ae$, dividing by $a>0$ and taking $a\downarrow0$ gives $\langle D\phi(0),e\rangle\le-1$ and $\langle D\phi(0),e\rangle\ge1$, an impossibility. Hence no lower $C^1$ test exists at the centre and the supersolution inequality holds vacuously. [F1, F2, algebra]

2.1 Boundary values and conclusion. For $x\in\Omega$ and $y\in\partial\Omega$, the reverse triangle inequality gives $|x-y|\ge1-|x|$. Equality is achieved at $y=x/|x|$ when $x\ne0$, and at any unit vector when $x=0$, so $d(x)=\operatorname{dist}(x,\partial\Omega)$. Since $|x|\to1$ along sequences approaching the unit sphere, the continuous extension of $d$ to $\overline\Omega$ vanishes exactly on $\partial\Omega$. Steps 1.2 and 1.3 give the subsolution inequality everywhere and the supersolution inequality everywhere (vacuously at the centre, classically elsewhere by step 1.1), so $d$ is a viscosity solution of the unit eikonal equation with zero boundary data on the ball. [step 1.1, step 1.2, step 1.3, F2] ∎
