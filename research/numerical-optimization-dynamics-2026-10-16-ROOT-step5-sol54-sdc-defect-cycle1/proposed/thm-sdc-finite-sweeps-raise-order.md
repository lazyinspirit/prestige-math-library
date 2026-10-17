---
id: thm-sdc-finite-sweeps-raise-order
kind: theorem
title: Each SDC sweep raises the order up to the collocation order
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - alg-explicit-left-euler-sdc-sweep
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-local-defect-order-m
  - lem-discrete-one-step-error-recurrence-bound
  - cor-taylor-lagrange-and-cauchy-remainders
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - lem-collocation-quadrature-matrix-well-defined
  - def-vector-valued-derivative-and-integral
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-continuous-implies-integrable
  - thm-norm-inequality-for-the-vector-valued-integral
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3, Theorem 3.1
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Fix $M\ge1$ collocation nodes and a nonnegative integer $k$ independent of $h$. Use the explicit-left-Euler SDC sweep in [[alg-explicit-left-euler-sdc-sweep]] with constant predictor $U^0=\mathbf1u$ and form the candidate endpoint from $U^k$, after $k$ completed sweeps. Assume each coordinate of $f$ has continuous partial derivatives through total order $M$ on an open neighborhood of a common compact tube $\mathcal T$; assume $f$ is state-Lipschitz with constant $L$ and bounded by $B$ on $\mathcal T$, which contains the exact path, all iterates, and the comparison segments. Also assume the exact-path integrand has the derivative bound required by [[thm-collocation-local-defect-order-m]]. At each mesh time $t_n$, let $\mathcal U_n\subseteq\mathcal T_{t_n}:=\{u:(t_n,u)\in\mathcal T\}$ be a set of starting states containing the exact and numerical grid states used in the global-error comparison. For every $u\in\mathcal U_n$, assume the constant predictor $U^0=\mathbf1u$ belongs to a nonempty closed product ball $\mathcal C_{n,u}$ used in [[thm-sdc-sweep-contraction-and-error-bound]], and each inner stage map and sweep preserves $\mathcal C_{n,u}$. Assume the contraction theorem holds uniformly with $a=hL\|Q_\Delta\|_\infty\le1/2$ and $q\le C_qh<1$. For the global-order assertion, initialize the numerical grid solution exactly, $y_0=y(0)$. For fixed $k$, the $U^k$ endpoint map has exact-start defect $O(h^{p+1})$ and global order $p=\min(M,k+1)$ on any fixed interval, provided all grid states stay in $\mathcal T$. The claim is local-step and fixed-$k$; it asserts no uniform constants as $M$ or $k$ grows.

## Facts & Assumptions

**Given:** A fixed uniform mesh, an IVP, its collocation stages and endpoint, the constant SDC predictor, and the uniform tube and contraction hypotheses.

[F1] [[def-collocation-quadrature-tableau]]: $U^*=\mathbf1u+hQF(U^*)$ and the collocation endpoint is $u+h\sum_jb_jF_j(U^*)$.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: each iterate satisfies $U^{j+1}=\mathbf1u+hQ_\Delta F(U^{j+1})+h(Q-Q_\Delta)F(U^j)$, and its candidate endpoint is $u+h\sum_jb_jF_j(U^k)$.

[F3] [[thm-sdc-sweep-contraction-and-error-bound]]: when $U^0\in\mathcal C$, $\|U^k-U^*\|_{\infty,2}\le q^k\|U^0-U^*\|_{\infty,2}$.

[F4] The exact-path derivative bound assumed in the Statement, with the notation of [[thm-collocation-local-defect-order-m]], is $\|g_h^{(M)}\|_\infty\le C_Fh^M$ for $g_h(s)=f(t+hs,y(t+hs))$, uniformly on the mesh. Only that assumed bound is used below, not that theorem's conclusion under its stronger tube hypotheses.

[F5] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0=0$ and $e_{n+1}\le(1+C_sh)e_n+Ch^{p+1}$ uniformly, then the maximum grid error is $O(h^p)$ on a fixed interval.

[F6] [[cor-taylor-lagrange-and-cauchy-remainders]] gives a degree-$(M-1)$ Taylor approximation to each scalar coordinate of $g_h$ on $[0,1]$ with remainder bounded by its $M$th derivative divided by $M!$.

[F7] [[def-cardinal-polynomial-interpolation]], [[lem-cardinal-basis-degree-and-values]], and [[thm-cardinal-polynomial-interpolant-exists-uniquely]], with $M$ nodes and degree $M-1$, give $I_Mv=\sum_j\ell_jv(c_j)$ and reproduction of polynomials of degree at most $M-1$, componentwise. [[lem-collocation-quadrature-matrix-well-defined]] makes the node constant $\Lambda_M$ finite, and the cardinal sum gives $\|I_Mv\|_\infty\le\Lambda_M\|v\|_\infty$ in the supremum Euclidean norm.

[F8] [[def-first-order-ode-initial-value-problem-and-solution]] and [[cor-vector-valued-ftc-and-lipschitz-bound]] give the exact path increments by integrating its derivative. [[thm-continuous-implies-integrable]] applies to the continuous scalar coordinates; [[def-vector-valued-derivative-and-integral]] supplies componentwise integration and linearity, and [[thm-norm-inequality-for-the-vector-valued-integral]] bounds each integral by the integral of its Euclidean norm.

[A1] The numerical grid solution starts at $y_0=y(0)$. The field satisfies $\|F(U)\|_{\infty,2}\le B$ and $\|F(U)-F(V)\|_{\infty,2}\le L\|U-V\|_{\infty,2}$ on the common invariant tube. The fixed nodes make $Q,Q_\Delta,b$ finite and independent of $h$.

## Proof

1.1 By [F3], the stages of the iterates converge to the collocation stages $U^*$; since the common tube is compact, hence closed, their limit stages also lie in it. The constant predictor gives $\|U^0-U^*\|_{\infty,2}=\|hQF(U^*)\|_{\infty,2}\le h\|Q\|_\infty B$ by [F1] and the row-sum norm. Since $q\le C_qh$, [F3] gives $\|U^k-U^*\|_{\infty,2}\le C_q^k\|Q\|_\infty B h^{k+1}$ for fixed $k$ (with the same $O(h)$ bound when $k=0$). [A1, F1, F3, algebra]

1.2 To bound dependence on the input, let $D_j=\|U^j(u)-U^j(v)\|_{\infty,2}$ for two starts $u,v\in\mathcal U_n$, and put $\delta=hL\|Q-Q_\Delta\|_\infty$. Subtracting the stage equations [F2] and using the row-sum norm gives $(1-a)D_{j+1}\le\|u-v\|_2+\delta D_j$. Since $a\le1/2$ and $\delta=O(h)$, $D_0=\|u-v\|_2$ and induction for the fixed number $k$ gives $D_k\le C_k\|u-v\|_2$ with $C_k$ independent of $h$. [A1, F2, algebra, induction]

1.3 For an exact start $u=y(t)$, let $P_{M-1}$ be the componentwise degree-$(M-1)$ Taylor polynomial of $g_h$ at $0$. Applying [F6] to each coordinate on $[0,s]$, with the value at $s=0$ immediate, and using [F4], gives $\|g_h-P_{M-1}\|_\infty\le C_T h^M$, where $C_T$ may include the fixed factor $\sqrt d/M!$. This includes $M=1$, for which the polynomial is constant. Polynomial reproduction and the interpolation bound in [F7] now give $\|g_h-I_Mg_h\|_\infty\le(1+\Lambda_M)C_T h^M$. This Taylor argument is one-dimensional in normalized time, so it uses no convexity assumption on the state tube. [F4, F6, F7, algebra]

1.4 Put $Y_i=y(t+c_i h)$ and $R_i=Y_i-u-h\sum_jQ_{ij}f(t+c_jh,Y_j)$. By [F1], [F7], [F8], and the defining integrals of $Q$, $R_i=h\int_0^{c_i}(g_h-I_Mg_h)(s)\,ds$. Therefore $\|R\|_{\infty,2}\le C_Rh^{M+1}$ by step 1.3. Subtracting the collocation equation from this exact-stage residual equation and using the already assumed state Lipschitz bound on the compared stages gives $\|Y-U^*\|_{\infty,2}\le\|R\|_{\infty,2}+hL\|Q\|_\infty\|Y-U^*\|_{\infty,2}$. For sufficiently small $h$, $hL\|Q\|_\infty\le1/2$, so $\|Y-U^*\|_{\infty,2}\le2C_Rh^{M+1}$. This compares only stage values in the stated tube. [A1, F1, F7, F8, step 1.1, step 1.3, algebra]

1.5 Write $\Psi_h^*(u)=u+h\sum_jb_jF_j(U^*)$. The exact path increment and the defining integrals of $b$ give $y(t+h)-\Psi_h^*(u)=h\int_0^1(g_h-I_Mg_h)(s)\,ds+h\sum_jb_j\bigl(f(t+c_jh,Y_j)-F_j(U^*)\bigr)$. By steps 1.3 and 1.4, its norm is at most $C_Rh^{M+1}+hL\|b\|_1(2C_Rh^{M+1})=O(h^{M+1})$, after enlarging the uniform constant if needed. No value of $f$ on the interior of the collocation polynomial is evaluated in this derivation. [A1, F1, F7, F8, step 1.3, step 1.4, algebra]

2.1 The endpoint formula in [F2], the state Lipschitz bound, and step 1.1 give a difference from the exact collocation endpoint of at most $hL\|b\|_1\|U^k-U^*\|_{\infty,2}=O(h^{k+2})$. Adding the exact collocation defect proved in step 1.5 gives an exact-start defect $O(h^{M+1})+O(h^{k+2})=O(h^{p+1})$, since $p+1=\min(M+1,k+2)$ and $h\le1$. [A1, F2, step 1.1, step 1.5, algebra]

2.2 Applying the endpoint formula [F2] to the two stage vectors gives $\|\Psi_h^{(k)}(u)-\Psi_h^{(k)}(v)\|_2\le\|u-v\|_2+hL\|b\|_1D_k\le(1+C_sh)\|u-v\|_2$ for $u,v\in\mathcal U_n$. [A1, F2, step 1.2, algebra]

3.1 Let $e_n=\|y_n-y(t_n)\|_2$. Both starts lie in $\mathcal U_n$ by the Statement. Insert and subtract the exact-start one-step output to obtain, using step 2.2 and step 2.1, $e_{n+1}\le(1+C_sh)e_n+Ch^{p+1}$ with $p=\min(M,k+1)$ and a uniform $C$. The initial error is $e_0=0$, so [F5] gives global order $p$. [A1, F4, F5, step 2.1, step 2.2, algebra] ∎

