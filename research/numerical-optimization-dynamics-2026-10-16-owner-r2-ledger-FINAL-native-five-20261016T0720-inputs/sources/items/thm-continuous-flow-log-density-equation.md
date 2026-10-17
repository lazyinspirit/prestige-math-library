---
id: thm-continuous-flow-log-density-equation
title: "A continuous flow changes log density by minus its divergence"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-first-order-ode-initial-value-problem-and-solution
  - def-measure-with-density
  - def-determinant-of-a-square-matrix
  - def-natural-logarithm
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-c1-dependence-of-solutions-on-initial-data
  - thm-chain-rule-for-total-derivatives
  - thm-intermediate-value
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is assumed only to invoke the library's Lebesgue change-of-variables theorem when identifying the pushforward density; the Jacobian and ODE arguments use no choice."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://jmlr.org/papers/volume22/19-1028/19-1028.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $U_0\subseteq\mathbb R^d$ be open, $T>0$, and let $f$ be jointly $C^1$ on an open time-state domain. Suppose the ODE $x'(t)=f(t,x(t))$ has a common flow
$$\Phi:[0,T]\times U_0\to\mathbb R^d,\qquad x(t)=\Phi_t(x_0),$$
whose time slices $\Phi_t:U_0\to U_t$ are $C^1$ diffeomorphisms onto open sets $U_t$, with $\Phi_0=\operatorname{id}_{U_0}$. Let $p_0:U_0\to(0,\infty)$ be a continuous probability density with respect to Lebesgue measure, let $\mu_t$ be the pushforward of $p_0(x)\,dx$ under $\Phi_t$, and define
$$p_t(y):=\begin{cases}\dfrac{p_0(\Phi_t^{-1}(y))}{|\det D\Phi_t(\Phi_t^{-1}(y))|},&y\in U_t,\\0,&y\notin U_t.\end{cases}$$
Then $p_t$ is a density of $\mu_t$ on $\mathbb R^d$, the flow Jacobian has positive determinant, and
$$p_t(\Phi_t(x_0))=\frac{p_0(x_0)}{\det D\Phi_t(x_0)}>0,$$
and, for $0<t<T$,
$$\frac{d}{dt}\log p_t(x(t))=-\operatorname{div}_x f(t,x(t)),\qquad \operatorname{div}_x f:=\operatorname{tr}D_xf=\sum_{i=1}^d\partial_{x_i}f_i.$$
The derivative at $0$ or $T$ is understood one-sided.

## Facts & Assumptions

**Given:** The Countable Choice axiom, the stated common C¹ flow of diffeomorphisms, and the positive continuous initial probability density.

[A1] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]); it is used only through the change-of-variables supplier [F3].

[F1] A solution of a first-order system satisfies $x(t_0)=x_0$ and $x'(t)=F(t,x(t))$ on its interval ([[def-first-order-ode-initial-value-problem-and-solution]]).

[F2] A measure with density $p_0$ relative to Lebesgue measure is defined by $\mu_0(E)=\int_Ep_0\,d\lambda_d$ ([[def-measure-with-density]]).

[F3] For a C¹ diffeomorphism $S:U\to V$ between open subsets of $\mathbb R^d$, Countable Choice and the nonnegative change-of-variables theorem give $\int_Vg(y)\,d\lambda_d(y)=\int_Ug(S(x))|\det DS(x)|\,d\lambda_d(x)$ for every nonnegative Lebesgue-measurable $g$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F4] For a continuous vector field that is C¹ in the state variable and a common compact interval of solutions through nearby initial states, the solution map is C¹ in the initial state and its derivative solves $J'(t)=D_xf(t,x(t))J(t)$ with $J(0)=I_d$ ([[thm-c1-dependence-of-solutions-on-initial-data]]).

[F5] The derivative of a composite of totally differentiable maps is given by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F6] A continuous real function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F7] For $z>0$, $\log z$ is defined as the inverse of the real exponential and $\log'(z)=1/z$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]).

[F8] The determinant of a square matrix is the finite Leibniz sum over permutations ([[def-determinant-of-a-square-matrix]]).

[F9] A real square matrix is invertible if and only if its determinant is nonzero ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[F10] The determinant is a polynomial in its matrix entries, and polynomial functions are continuous ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]], [[thm-algebra-of-continuous-functions]]).

[F11] The Leibniz determinant is column-multilinear and alternating ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[F12] Sums and products of differentiable real functions obey the binary sum and product rules; repeated application over finitely many factors follows by induction ([[thm-algebra-of-derivatives]]).

## Proof

1.1 For fixed $t$, the inverse-flow chain rule [F5] gives $D\Phi_t^{-1}(\Phi_t(x_0))D\Phi_t(x_0)=I$, so $D\Phi_t(x_0)$ is invertible and [F9] gives $\det D\Phi_t(x_0)\ne0$. Thus the formula for $p_t$ is continuous and positive on $U_t$ and zero outside, hence Borel measurable on $\mathbb R^d$. For any Borel $E\subseteq\mathbb R^d$, apply [F3] to $g=\mathbf 1_{E\cap U_t}p_t|_{U_t}$. Change of variables gives $\int_Ep_t(y)\,dy=\int_{E\cap U_t}p_t(y)\,dy=\int_{\Phi_t^{-1}(E\cap U_t)}p_0(x)\,dx=\mu_0(\Phi_t^{-1}(E))=\mu_t(E)$ because $\Phi_t(U_0)=U_t$. Thus $p_t$ is a density of $\mu_t$ on all of $\mathbb R^d$. [A1, F2, F3, F5, F9, given]

2.1 By [F4], $J_t:=D\Phi_t(x_0)$ solves $J_t'=D_xf(t,\Phi_t(x_0))J_t$ and $J_0=I_d$. The inverse-flow chain rule [F5] and [F9] give $\det J_t\ne0$ for each $t$; [F10] and continuity of $J_t$ give continuity of $t\mapsto\det J_t$. If this determinant were negative at any $t>0$, [F6] on $[0,t]$ with target $0$ would give a zero, contradicting nonsingularity; since $\det J_0=1$ by [F11], it is positive throughout. The density formula in step 1.1 therefore becomes $p_t(\Phi_t(x_0))=p_0(x_0)/\det J_t$. [F1, F4, F5, F6, F9, F10, F11, step 1.1, algebra]

3.1 Fix an interior time, write $A:=D_xf(t,\Phi_t(x_0))$ and $C:=J_t^{-1}J_t'$, and denote the columns of $J_t$ by $v_1,\ldots,v_d$. By the Leibniz formula [F8], differentiating each $d$-factor monomial with repeated binary product rules (induction on the number of factors) and distributing the finite sum gives $(\det J_t)'=\sum_{\sigma\in S_d}\operatorname{sgn}(\sigma)\sum_{j=1}^d(v_j')_{\sigma(j)}\prod_{i\ne j}(v_i)_{\sigma(i)}=\sum_{j=1}^d\det[v_1,\ldots,v_{j-1},v_j',v_{j+1},\ldots,v_d]$. Since $J_t'=J_tC$, if $C_j$ is column $j$ of $C$ then $v_j'=\sum_{k=1}^d C_{kj}v_k$. Multilinearity [F11] expands the $j$th determinant into $\sum_k C_{kj}\det[v_1,\ldots,v_{j-1},v_k,v_{j+1},\ldots,v_d]$; for $k\ne j$ the repeated columns make the determinant zero by alternation [F11], while $k=j$ gives $C_{jj}\det J_t$. Hence $(\det J_t)'=\det J_t\operatorname{tr}(C)$ and [F7] gives $(\log\det J_t)'=\operatorname{tr}(C)$. Since $C=J_t^{-1}AJ_t$, $\operatorname{tr}(C)=\sum_{i,j,k}(J_t^{-1})_{ij}A_{jk}(J_t)_{ki}=\sum_{j,k}A_{jk}(J_tJ_t^{-1})_{kj}=\sum_jA_{jj}=\operatorname{tr}(A)$. The density formula in step 2.1 has constant numerator $p_0(x_0)$, so [F7] and the chain rule [F5] give $(\log p_t(\Phi_t(x_0)))'=-(\det J_t)'/\det J_t=-\operatorname{tr}(D_xf(t,\Phi_t(x_0)))$. This is the claimed identity. [F4, F5, F7, F8, F11, F12, step 2.1, algebra, induction] ∎
