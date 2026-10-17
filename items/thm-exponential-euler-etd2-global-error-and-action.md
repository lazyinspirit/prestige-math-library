---
id: thm-exponential-euler-etd2-global-error-and-action
kind: theorem
title: Fixed-matrix global orders and certified-action error propagation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-exponential-euler-and-etd2-step-maps
  - lem-exponential-euler-local-defect
  - lem-etd2-local-defect
  - lem-exponential-integrator-interaction-picture-stability
  - lem-certified-exponential-step-action-error
  - thm-global-error-from-one-step-defect-and-stability
  - def-first-order-ode-initial-value-problem-and-solution
  - def-bounded-linear-operator
  - def-operator-norm
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - thm-algebra-of-derivatives
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-relative-compact-closed-sets-have-a-positive-distance-gap
  - thm-metric-continuity-characterisations
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-dedekind-complete
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§2.2, Theorem 2.14 and complete exponential-Euler error recursion, PDF pp. 14–16, printed pp. 223–225; §2.3, Example 2.18 and order conditions, PDF pp. 17–18, printed pp. 226–227."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, Theorem 14.11 and its proof, PDF pp. 166–168, printed pp. 171–173; its convergence theorem is for linear inhomogeneity only."
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, $t_n=nh$, $A\in M_d(\mathbb C)$, and let $D\subseteq\mathbb R\times\mathbb C^d$ be open after realification, with $g:D\to\mathbb C^d$. Let $y:[0,T]\to\mathbb C^d$ solve
$$y'(t)=Ay(t)+g(t,y(t))$$
Suppose the exact path, every numerical state, and every ETD2 predictor lie in a common compact time-state tube $\mathcal T\subset D$ with positive margin. Also assume the hypotheses of [[lem-exponential-integrator-interaction-picture-stability]] hold on this tube: compared inputs in each time fiber and both associated ETD2 predictor states are admissible, and $g$ is $L_g$-Lipschitz between the states and stages used there. Finally, let $q(t):=g(t,y(t))$ be $C^2$ with $\|q'\|_2\le Q_1$ and $\|q''\|_2\le Q_2$. Assume
$$\|e^{sA}\|_2\le M e^{\omega s}\quad(0\le s\le T),\qquad M\ge1,\quad \omega\in\mathbb R,$$
and put
$$K_+:=\sup_{0\le s\le T}\|e^{sA}\|_2,\quad K_-:=\sup_{0\le s\le T}\|e^{-sA}\|_2,\quad \kappa:=L_gK_+K_-.$$
These finite-matrix suprema are finite; in particular $K_+\le M e^{\max(\omega,0)T}$. Define
$$C_E:=\frac{K_+Q_1}{2},\quad C_2:=K_+\left(Q_2+\frac{L_gC_E}{2}\right),\quad L_E:=\kappa,\quad L_2:=\kappa+\frac{T\kappa^2}{2}.$$
For an exact-action exponential-Euler run use $p=1,C_p=C_E,L_p=L_E$; for exact-action ETD2 use $p=2,C_p=C_2,L_p=L_2$. If $\Gamma(L,T):=(e^{LT}-1)/L$ for $L>0$ and $\Gamma(0,T):=T$, then exact initial data give
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le K_+K_-C_p\Gamma(L_p,T)h^p.$$

Now let a certified-action implementation return candidates $\widetilde y_{n+1}$ and certified one-step action-error bounds $\delta_n$ as in [[lem-certified-exponential-step-action-error]]. Starting from $\widetilde y_0=y(0)$, its error obeys
$$\max_{0\le n\le N}\|\widetilde y_n-y(t_n)\|_2\le K_+K_-e^{L_pT}\left(C_pT h^p+\sum_{j=0}^{N-1}\delta_j\right).$$
Thus local orders one and two imply fixed-$A$, finite-dimensional global orders one and two when exact actions are used or when $\sum_j\delta_j=O(h^p)$. The constants may depend on $A$, $T$, the tube, and the derivative bounds. The bounds are not asserted uniformly over varying matrices or growing dimensions; no unbounded-operator/PDE convergence theorem follows without the additional domain and commutator hypotheses such a theorem requires.

## Facts & Assumptions

**Given:** The matrix, grid, solution, tube, regularity, Lipschitz and semigroup bounds, and numerical action certificates in the Statement.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact solution is differentiable and satisfies $y'(t)=Ay(t)+g(t,y(t))$.

[F2] [[lem-exponential-euler-local-defect]]: the exact-start exponential-Euler defect is at most $C_Eh^2$.

[F3] [[lem-etd2-local-defect]]: the exact-start ETD2 defect is at most $C_2h^3$.

[F4] [[lem-exponential-integrator-interaction-picture-stability]]: after the change $z(t)=e^{-tA}y(t)$, the exponential-Euler and ETD2 one-step maps have stability constants $L_E$ and $L_2$ in the form $1+L_ph$.

[F5] [[lem-certified-exponential-step-action-error]]: when the action algorithm is certified, $\|\widetilde\Psi_{h,n}(v)-\Psi_{h,n}(v)\|_2\le\delta_n$.

[F6] [[def-bounded-linear-operator]], [[def-operator-norm]], [[cor-finite-dimensional-normed-spaces-are-banach]], [[lem-exponential-series-of-a-bounded-operator]], and [[thm-algebra-of-derivatives]]: on $\mathbb C^d$ the matrix exponential is continuous and differentiable, with $(e^{tA})'=Ae^{tA}=e^{tA}A$ and the semigroup law, and finite-dimensional products obey the product rule.

[F7] [[def-real-exponential-function-and-e]] and [[lem-exponential-dominates-one-plus-x]]: for $x\ge0$, $1+x\le e^x$.

[F8] [[thm-exponential-addition-formula]] and [[thm-exponential-is-strictly-increasing]]: $e^{x+y}=e^xe^y$ and $e^x\le e^y$ whenever $x\le y$.

[F9] [[def-inner-product-norm]], [[prop-standard-coordinate-inner-products]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: the vector norm is Euclidean, the matrix norm is induced, and $\|Bv\|_2\le\|B\|_2\|v\|_2$.

[F10] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the realified time-state space $\mathbb R^{1+2d}$ with its standard Euclidean norm is a normed space.

[F11] [[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]: a compact subset of an open subset of a finite-dimensional normed space has positive distance from its closed complement when that complement is nonempty; if it is empty, every positive radius is a margin.

[F12] [[thm-metric-continuity-characterisations]]: a continuous map between metric spaces has open preimages of open sets.

[F13] [[thm-complex-numbers-are-the-real-coordinate-plane]], [[prop-standard-coordinate-inner-products]], and [[def-inner-product-norm]]: for $v=(v_0,\ldots,v_{d-1})$, the componentwise map $\Phi_d(v):=(\operatorname{Re}v_0,\operatorname{Im}v_0,\ldots,\operatorname{Re}v_{d-1},\operatorname{Im}v_{d-1})$ is real-linear, with $\|\Phi_d(v)\|_{\mathbb R^{2d}}^2=\sum_{j<d}|v_j|^2=\|v\|_2^2$. It preserves real-time difference quotients and their limits, so the real one-step theorem applies to the realified system and its transformed state without changing the error norm.

[F14] [[lem-exponential-series-of-a-bounded-operator]] gives $\|e^{-sA}\|_2\le e^{s\|A\|_2}$ for $0\le s\le T$. Since $s\|A\|_2\le T\|A\|_2$, scalar monotonicity ([[thm-exponential-is-strictly-increasing]]) gives $e^{s\|A\|_2}\le e^{T\|A\|_2}$. Thus the set defining $K_-$ contains $\|I_d\|_2$ at $s=0$ and has that finite upper bound; [[thm-dedekind-complete]] supplies its finite supremum. Likewise $\omega s\le\max(\omega,0)T$, so the assumed semigroup bound and the same scalar monotonicity give $K_+\le M e^{\max(\omega,0)T}$ and a finite supremum for its nonempty defining set.

[L1] [[thm-global-error-from-one-step-defect-and-stability]]: on a common compact tube, exact-start local defect $Ch^{p+1}$, one-step stability $1+Lh$, and exact initial values imply the fixed-time global bound $C\Gamma(L,T)h^p$.

[A1] The transformed open domain and compact tube satisfy the hypotheses stated above; the realified norm and coordinate calculus are as in [F13].


## Proof

1.1 By [F13], the complex state equation and the transformed equation are real finite-dimensional systems with the same Euclidean error norm. Set $z(t):=e^{-tA}y(t)$. The product rule and [F1], [F6] give $z'(t)=e^{-tA}g(t,y(t))=e^{-tA}g(t,e^{tA}z(t))$. Conjugating the exact numerical map and exact endpoint by $e^{-(t+h)A}$ cancels their common $e^{hA}$ linear term and multiplies their difference by $e^{-(t+h)A}$. Hence [F2], [F3], and [F9] give transformed exact-start defects at most $K_-C_Eh^2$ and $K_-C_2h^3$. [given, F1, F2, F3, F6, F9, F13, A1, algebra]

2.1 By [F14], both amplification suprema used here are finite. Set $D_z:=\{(t,z):(t,e^{tA}z)\in D\}$, open as the preimage of $D$ under the continuous map $(t,z)\mapsto(t,e^{tA}z)$ by [F6], [F9], [F10], and [F12]. The map $(t,u)\mapsto(t,e^{-tA}u)$ continuously sends $\mathcal T$ to a compact tube in $D_z$ containing the transformed exact path, states, and stages; [F10]–[F11] give positive margin. Its stability is $1+L_ph$ by [F4], and its local constant is $K_-C_p$ by step 1.1. Thus [L1] applies with exact initial data. [given, F4, F6, F9, F10, F11, F12, F14, L1, step 1.1, algebra]

2.2 For certified actions, put $\widetilde z_n:=e^{-t_nA}\widetilde y_n$ and $r_n:=\|\widetilde z_n-z(t_n)\|_2$. Stability [F4], local defect [F2] or [F3] transformed by [F6] and step 1.1, and perturbation bound [F5] transformed using [F9] by $e^{-(t_{n+1})A}$ give by the triangle inequality $r_{n+1}\le(1+L_ph)r_n+K_-C_ph^{p+1}+K_-\delta_n$, with $r_0=0$. [given, F2, F3, F4, F5, F6, F9, step 1.1, algebra]

3.1 Applying [L1] as in step 2.1 yields $\max_n\|z_n-z(t_n)\|_2\le K_-C_p\Gamma(L_p,T)h^p$. Since $y(t_n)=e^{t_nA}z(t_n)$ and [F9] with the definition of $K_+$ bounds multiplication by $e^{t_nA}$, this gives the first displayed bound. [given, F4, F9, L1, step 2.1, algebra]

3.2 Induction in step 2.2 gives $r_n\le K_-\sum_{j=0}^{n-1}(1+L_ph)^{n-1-j}(C_ph^{p+1}+\delta_j)$: the base case is the empty sum, and multiplying the bound for $r_n$ by $1+L_ph$ and adding the $j=n$ defect and action terms gives the formula for $r_{n+1}$. [step 2.2, induction, algebra]

4.1 Since $1+L_ph\le e^{L_ph}$ by [F7], each power in step 3.2 is at most $e^{L_pT}$ by [F8] and $nh\le T$. Also $Nh=T$, so $NC_ph^{p+1}=C_pT h^p$. Thus $r_n\le K_-e^{L_pT}(C_pT h^p+\sum_{j=0}^{N-1}\delta_j)$. Multiplication by $e^{t_nA}$ and [F9] with the bound $K_+$ give the certified-action estimate for every $n$, hence for their maximum. [given, F7, F8, F9, step 3.2, algebra] ∎

