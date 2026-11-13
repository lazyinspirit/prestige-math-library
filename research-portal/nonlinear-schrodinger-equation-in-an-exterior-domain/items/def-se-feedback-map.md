---
id: def-se-feedback-map
kind: definition
domain: mathematics
title: Endpoint-correcting nonlinear feedback map
status: published
deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-perturbation-hypotheses
  - thm-se-3-6
  - prop-se-cutoff-multipliers
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:lem-average-convergence-of-a-continuous-banach-valued-function
  - math:lem-linearity-of-the-bochner-integral
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-perturbation-hypotheses: mathematical-premise
  thm-se-3-6: mathematical-premise
  prop-se-cutoff-multipliers: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-average-convergence-of-a-continuous-banach-valued-function: mathematical-premise
  math:lem-linearity-of-the-bochner-integral: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-perturbation-hypotheses
  - thm-se-3-6
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:lem-linearity-of-the-bochner-integral
argument_deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-perturbation-hypotheses
  - thm-se-3-6
  - prop-se-cutoff-multipliers
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:lem-average-convergence-of-a-continuous-banach-valued-function
  - math:lem-linearity-of-the-bochner-integral
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 19
---

## Definition

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, $\Theta\subset\mathbb R^n$ is nonempty and compact with smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and its generalized reflected rays leave every compact set in finite time. Let $T>0$, $s\in[1,2]$, $m\in\{3,5\}$, and let $\varphi$ be the real control cutoff associated with this exterior. Put $H=H_D^s(\Omega)$, $W(t)=e^{it\Delta_D}$, and $g(z)=\lambda|z|^{m-1}z$ for real nonzero $\lambda$. Let $X_T$ satisfy the abstract perturbation hypotheses: it is a real or complex Banach space continuously included in $C([0,T];H)$ with inclusion norm at most one, and its homogeneous evolution, retarded forcing operator and nonlinearity satisfy conditions (i)–(iii) of that definition with a constant $C_0\ge1$.

Let $G:H\times H\to C([0,T];H)$ be the bounded linear endpoint-to-control operator: for each pair $(a,b)$, the mild solution of the linear controlled equation with initial state $a$ and control $G(a,b)$ has terminal state $b$. For prescribed $v_0,v_T\in H$ and $v\in X_T$, define

$$N(v)(t)=\int_0^t W(t-r)\bigl(i g(v)(r)\bigr)\,dr,\qquad h_v=G\bigl(v_0,v_T-N(v)(T)\bigr),$$

and define the feedback map $\mathcal T:X_T\to X_T$ by

$$\mathcal T(v)(t)=W(t)v_0+N(v)(t)+\int_0^t W(t-r)\bigl(-i\varphi h_v(r)\bigr)\,dr.$$

All integrals are Bochner integrals in $H$. Equivalently, the constant factors $i$ and $-i$ may be written outside the respective integrals as $H$-valued equalities. The definition itself asserts neither a fixed point nor uniqueness of a controlled nonlinear solution.

## Definition references

[[def-se-geometry]]

[[def-se-control-cutoffs]]

[[def-se-dirichlet-scale]]

[[def-se-perturbation-hypotheses]]

[[thm-se-3-6]]

[[prop-se-cutoff-multipliers]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

[[math:lem-average-convergence-of-a-continuous-banach-valued-function]]

[[math:lem-linearity-of-the-bochner-integral]]

## Justification

The geometry and non-trapping convention are those of [[def-se-geometry]], and the cutoff is that of [[def-se-control-cutoffs]]. The Dirichlet realization, spectral Hilbert space $H=H_D^s(\Omega)$ and unitary group $W(t)=e^{it\Delta_D}$ are those of [[def-se-dirichlet-scale]]. The Banach path space, retarded operator and nonlinear estimates are specified by [[def-se-perturbation-hypotheses]]; its continuous inclusion makes evaluation at $T$ a bounded map from $X_T$ to $H$. The time-space and Bochner-integral conventions are those of [[def-se-foundation-time-function-spaces]]. Choice is retained as required by the stated hypotheses and the selector theorem [[math:def-axiom-of-choice]]. In particular, the assumed Axiom of Choice supplies a choice function for every countable family of nonempty sets, as required by the continuous-path integrability lemma used below.

By the nonlinear hypothesis, $g(v)\in L^1(0,T;H)$. Multiplication by $i$ is a bounded scalar operation on the complex Hilbert space $H$, so $ig(v)$ belongs to the same $L^1$ space. The integrability of this scalar multiple and homogeneity of the integral follow from [[math:lem-linearity-of-the-bochner-integral]] in the complex Banach space $H$; complex linearity of $W(t-r)$ then justifies the equivalent placement of scalar factors in the Definition. The retarded forcing hypothesis therefore gives $N(v)\in X_T$ and $N(v)(0)=0$; the latter follows because the Bochner integral over the zero-length interval is zero. Evaluation at $T$ makes the second argument of $G$ an element of $H$. Under the stated geometry, time, scale and Choice assumptions, [[thm-se-3-6]] supplies the bounded selector $G$ and its continuous $H$-valued control $h_v$.

The cutoff multiplication operator is bounded on $H$ by [[prop-se-cutoff-multipliers]]. Thus $r\mapsto-i\varphi h_v(r)$ is continuous as an $H$-valued path and belongs to $L^1(0,T;H)$ on the finite interval. Here continuous-path Bochner integrability is supplied by [[math:lem-average-convergence-of-a-continuous-banach-valued-function]], applied with $X=H$, $a=0$ and $b=T$. The retarded forcing hypothesis places its integral in $X_T$, and the homogeneous hypothesis places $W(\cdot)v_0$ in $X_T$. Their sum with $N(v)$ is consequently an element of $X_T$. This construction does not require multiplication by $i$ to preserve $X_T$ when $X_T$ is regarded only as a real space.

## Source notes

The frozen article, PDF page 14, is cited for attribution of the definitions of $N$, $h_v$ and $\mathcal T$. Their well-definedness above uses the stated mathematical suppliers.
