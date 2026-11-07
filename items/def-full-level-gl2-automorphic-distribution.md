---
id: def-full-level-gl2-automorphic-distribution
kind: definition
title: "Full-Level GL2 Automorphic Distribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-distribution
  - def-test-function-topology
  - def-test-function-space-d-of-an-open-set
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§3, equations (3.7)–(3.12), printed pp. 11–12; §2, equations (2.15)–(2.20), printed pp. 6–7."
forward_refs: []
---

## Definition

Let $G=GL_2(\mathbb R)/\mathbb R^\times=PGL_2(\mathbb R)$, let $\Gamma$ be
the image of $GL_2(\mathbb Z)$ in $G$, and let $B\subset G$ be the subgroup
represented by lower triangular real matrices. Here a distribution on the
manifold $G$ is a continuous complex-linear functional on $C_c^\infty(G)$,
the space of smooth compactly supported functions with its test-function
topology. For
$\lambda\in\mathbb C$, $\delta\in\{0,1\}$, and
$b=\begin{pmatrix}a&0\\c&d\end{pmatrix}\in B$, define
$$\chi_{\lambda,\delta}(b):=(\operatorname{sgn}(a/d))^\delta
|a/d|^{\lambda/2}.$$
The ratio $a/d$ is unchanged by multiplying the matrix by a nonzero scalar,
so this character is well defined on $B$. The **principal-series distribution
space** $V^{-\infty}_{\lambda,\delta}$ consists of distributions on the
manifold $G$ that transform on the right by the character
$\chi_{\lambda-1,\delta}$: in distributional notation,
$$\tau(gb)=\chi_{\lambda-1,\delta}(b^{-1})\tau(g)
\qquad(g\in G,\ b\in B).$$
The left action is $(\pi_{\lambda,\delta}(g_0)\tau)(g)=\tau(g_0^{-1}g)$.
A **full-level GL2 automorphic distribution** with parameters
$(\lambda,\delta)$ is a vector
$$\tau\in(V^{-\infty}_{\lambda,\delta})^\Gamma,
\qquad \pi_{\lambda,\delta}(\gamma)\tau=\tau\quad(\gamma\in\Gamma).$$

In the unbounded realization, such a vector is a $1$-periodic distribution on
$\mathbb R$; its quotient distribution $T$ on the circle
$\mathbb T:=\mathbb R/\mathbb Z$ has a Fourier expansion in the distribution sense
$$\tau(x)=\sum_{n\in\mathbb Z}a_n e^{2\pi inx}.$$
It is **cuspidal** if $a_0=0$ and it vanishes to infinite order at $x=0$;
the latter means that for every integer $m\ge0$, on some neighbourhood of
$0$ it can be written as
$$x^mP_m\!\left(x\frac{d}{dx}\right)\psi_m(x),$$
where $P_m$ is a polynomial and $\psi_m$ is continuous.

## Definition references

[[def-distribution|distributions as continuous linear functionals on test functions]]

[[def-test-function-topology|the locally convex test-function topology]]

[[def-test-function-space-d-of-an-open-set|the test-function space]]

