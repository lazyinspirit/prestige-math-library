---
id: lem-fd-bingham-monotone-graph
kind: lemma
title: "Bingham yield graph and convex monotonicity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-fd-nonnewtonian-laws
dependency_roles:
  def-fd-nonnewtonian-laws: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.6.2.3"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
    - title: "MIT OpenCourseWare, Lecture Notes on Fluid Dynamics (1.63J/2.21J), §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
verification:
  precheck: pending
---

## Statement

Let $M_3(\mathbb R)$ be the real $3\times3$ matrices and $I_3$ the identity matrix, and let $\mathcal S_0=\{D\in M_3(\mathbb R):D^{\mathsf T}=D,\operatorname{tr}D=0\}$, with Frobenius product $D:E=\operatorname{tr}(D^{\mathsf T}E)$ and norm $|D|=(D:D)^{1/2}$. Define
$$\mathrm{SO}(3):=\{Q\in M_3(\mathbb R):Q^{\mathsf T}Q=I_3,\det Q=1\}.$$
For $D$ measured in $\mathrm{s}^{-1}$, let $\mu_p\ge0$ be in $\mathrm{Pa\,s}$ and $\tau_y\ge0$ be in $\mathrm{Pa}$; define $\Phi(D)=\mu_p|D|^2+\tau_y|D|$, in $\mathrm{Pa\,s^{-1}}$, and

$$
\partial\Phi(D):=\{\tau\in\mathcal S_0:\Phi(E)\ge\Phi(D)+\tau:(E-D)\text{ for every }E\in\mathcal S_0\}.
$$

Define the Bingham graph by $\mathcal B(D)=\{2\mu_pD+\tau_yD/|D|\}$ when $D\ne0$, and by $\mathcal B(0)=\{\tau\in\mathcal S_0:|\tau|\le\tau_y\}$ when $D=0$; its graph stresses are in $\mathrm{Pa}$. Then $\Phi$ is finite, nonnegative, and convex; $\mathcal B(D)=\partial\Phi(D)$ for every $D$; the graph is monotone in the sense that $(\tau_1-\tau_2):(D_1-D_2)\ge0$ whenever $\tau_i\in\mathcal B(D_i)$; every graph value satisfies $\tau:D\ge0$; and, for $Q\in SO(3)$, $\mathcal B(QDQ^{\mathsf T})=Q\mathcal B(D)Q^{\mathsf T}$.

## Statement references

[[def-fd-nonnewtonian-laws|Bingham graph, norm convention, and parameters]].

[Reddy, An Introduction to Continuum Mechanics, Chapter 6, §6.6.2.3](https://courses.washington.edu/mengr503/Chapter_6.pdf).

[MIT OpenCourseWare, Lecture Notes on Fluid Dynamics, §1.6.2](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf).

## Facts & Assumptions

**Given:** The finite-dimensional real inner-product space $\mathcal S_0$, the parameters $\mu_p,\tau_y\ge0$, the potential $\Phi$, and the graph $\mathcal B$ in the Statement.

[A1] [[def-fd-nonnewtonian-laws]]: the Bingham convention is $\tau=2\mu_pD+\tau_yD/|D|$ for $D\ne0$, and the zero-rate value is the full trace-free Frobenius ball of radius $\tau_y$.

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 The norm is convex by the triangle inequality and positive homogeneity. For $0\le s\le1$, $|sD+(1-s)E|^2\le(s|D|+(1-s)|E|)^2\le s|D|^2+(1-s)|E|^2$, the second inequality following from $s(1-s)(|D|-|E|)^2\ge0$. Thus $\Phi$ is convex; it is finite everywhere and $\Phi\ge0$, so the supporting-inequality set defined in the Statement is well-defined. [given, algebra]

1.2 Let $D\ne0$. For every $E\in\mathcal S_0$, expansion of $|E-D|^2\ge0$ gives $|E|^2\ge|D|^2+2D:(E-D)$, while Cauchy–Schwarz gives $|E|\ge|D|+(D/|D|):(E-D)$. Multiplying by $\mu_p$ and $\tau_y$ and adding shows $\Phi(E)\ge\Phi(D)+(2\mu_pD+\tau_yD/|D|):(E-D)$, so the stated nonzero graph value belongs to the set defined in the Statement. [given, algebra]

1.3 At $D=0$, the supporting inequality is $\mu_p|E|^2+\tau_y|E|\ge\xi:E$ for every $E$. If $|\xi|\le\tau_y$, Cauchy–Schwarz proves it. Conversely, if $|\xi|>\tau_y$, choose $E=t\xi/|\xi|$; the inequality would imply $|\xi|\le\mu_pt+\tau_y$ for every $t>0$, which fails for sufficiently small $t$ when $\mu_p>0$, and fails for every $t>0$ when $\mu_p=0$. Hence $\partial\Phi(0)$ is exactly the stated stress ball, proving $\mathcal B=\partial\Phi$ also at zero. [given, algebra]

2.1 If $\xi$ belongs to the set defined as $\partial\Phi(D)$ with $D\ne0$, apply its supporting inequality to $E=D+hH$. For $h>0$ division by $h$ gives $\xi:H\le(\Phi(D+hH)-\Phi(D))/h$; for $h<0$ the reversed inequality gives $\xi:H\ge(\Phi(D+hH)-\Phi(D))/h$. The identity $(|D+hH|-|D|)/h=(2D:H+h|H|^2)/(|D+hH|+|D|)\to(D:H)/|D|$ and the quadratic expansion in step 1.2 show that both limits equal $(2\mu_pD+\tau_yD/|D|):H$. Since this holds for every $H\in\mathcal S_0$, nondegeneracy of the Frobenius product gives $\xi=2\mu_pD+\tau_yD/|D|$. [given, step 1.2, algebra]

2.2 If $D\ne0$, then $\tau:D=2\mu_p|D|^2+\tau_y|D|\ge0$; if $D=0$, then $\tau:D=0$ for every point of the stress ball. [given, A1, step 1.3, algebra]

3.1 For $\tau_i\in\partial\Phi(D_i)$, the defining inequality gives $\Phi(D_2)\ge\Phi(D_1)+\tau_1:(D_2-D_1)$ and $\Phi(D_1)\ge\Phi(D_2)+\tau_2:(D_1-D_2)$. Adding and cancelling the potential values yields $(\tau_1-\tau_2):(D_1-D_2)\ge0$. [given, step 1.2, step 2.1, step 1.3]

4.1 Conjugation by $Q\in SO(3)$ preserves symmetry, trace, Frobenius norm, and the Frobenius product. Substituting $QDQ^{\mathsf T}$ into each nonzero formula therefore gives $Q\tau Q^{\mathsf T}$; at $D=0$, the full ball maps onto itself because $|Q\tau Q^{\mathsf T}|=|\tau|$. This proves the stated rotation-equivariance. [given, A1, algebra] ∎

