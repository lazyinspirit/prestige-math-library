---
id: thm-collocation-local-defect-order-m
kind: theorem
title: M-node collocation has local defect order M
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-higher-derivatives-and-smoothness
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §2.1, Lemma 2.1
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7, Theorem 7.10
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Let $M\ge1$, let $0\le c_1<\cdots<c_M\le1$ be fixed distinct nodes, and consider $y'=f(t,y)$ on a fixed compact convex tube. Assume $f$ is $C^M$ with bounded derivatives there, is $L$-Lipschitz in state, and the exact path, stages, collocation polynomial, and comparison segments stay in the tube. In particular, the interpolation hypothesis is that the composite $g_h(s)=f(t+hs,y(t+hs))$ satisfies $\|g_h^{(M)}\|_\infty\le C_Fh^M$ uniformly; the stated smoothness and bounded exact-path derivatives imply this bound. If the collocation stage branch is the unique branch supplied by [[thm-sdc-sweep-contraction-and-error-bound]], then its endpoint map has uniform exact-start local defect $O(h^{M+1})$ as $h\downarrow0$. The constant depends on the fixed nodes, including their Lebesgue constant $\Lambda_M$; no uniform-in-$M$ estimate is asserted.

## Facts & Assumptions

**Given:** An exact IVP solution on $[t,t+h]$, its collocation nodes, the stated smoothness and tube assumptions, and the small-step collocation branch.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact path satisfies $y'(s)=f(s,y(s))$.

[F2] [[def-collocation-quadrature-tableau]]: $Q_{ij}=\int_0^{c_i}\ell_j(s)\,ds$, $b_j=\int_0^1\ell_j(s)\,ds$, and the endpoint is $u+h\sum_jb_jF_j(U)$.

[F3] [[lem-collocation-quadrature-matrix-well-defined]]: the node integrals, $Q$, $b$, and $\Lambda_M$ are finite.

[F4] [[thm-sdc-sweep-contraction-and-error-bound]]: the small-step SDC contraction has a unique fixed point that solves the collocation equations; its hypotheses include an invariant stage set and $a=hL\|Q_\Delta\|_\infty<1$, $q=hL\|Q-Q_\Delta\|_\infty/(1-a)<1$.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: Taylor's formula on the compact convex tube gives a uniform remainder controlled by the next bounded derivative.

[F6] [[thm-ftc-second-part]] and [[thm-continuous-implies-integrable]]: continuous derivatives are Riemann integrable and the exact path increment is the integral of its derivative.

[F7] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[def-higher-derivatives-and-smoothness]]: the stated $C^M$ regularity has the usual derivative convention, and repeated chain and product rules apply to $g_h$.

[F8] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]] give the cardinal sum $I_M$, its degree bound $M-1$, and the nodal values $I_Mg_h(c_j)=g_h(c_j)$; [[thm-cardinal-polynomial-interpolant-exists-uniquely]], with $n=M-1$, supplies uniqueness for these $M$ nodal data.

[A1] The exact trajectory, exact stage values, collocation stages and the segments used in the Lipschitz estimates lie in the common tube; the constants are uniform as $h\downarrow0$.

[A2] The composite $g_h$ has the uniform derivative bound in the Statement. This follows by repeated chain and product rules: every normalized-time derivative contributes a factor $h$, while derivatives of $f$ and the exact path are bounded on the fixed tube.

## Proof

1.1 Put $g_h(s)=f(t+hs,y(t+hs))$. The exact path derivatives used here are bounded on the compact tube: $y'=f(t,y)$ is bounded there, and differentiating this identity successively expresses each higher derivative of $y$ as a finite sum of products of bounded partial derivatives of $f$ and already bounded lower derivatives of $y$. This induction gives bounded derivatives through order $M$ under the stated $C^M$ hypothesis. Repeated chain rules [F7] then show $\|g_h^{(M)}\|_\infty\le C h^M$: every differentiation in normalized time contributes one factor $h$. Let $p_{M-1}$ be the degree-$(M-1)$ Taylor polynomial of $g_h$ at $0$. By [A2] and Taylor's remainder [F5], $\|g_h-p_{M-1}\|_\infty\le C h^M$. For each real component polynomial $p$ of degree at most $M-1$, $p$ and $I_Mp$ have that degree bound and the same $M$ nodal data, so uniqueness in [F8] gives $I_Mp=p$. Thus interpolation reproduces $p_{M-1}$ componentwise by [F8], and $|I_Mv(s)|=|\sum_jv(c_j)\ell_j(s)|\le\sum_j|\ell_j(s)|\|v\|_\infty$ gives $\|I_Mv\|_\infty\le\Lambda_M\|v\|_\infty$ by [F3], we obtain $\|g_h-I_Mg_h\|_\infty=\|(g_h-p_{M-1})-I_M(g_h-p_{M-1})\|_\infty\le(1+\Lambda_M)C h^M.$ [A2, F2, F3, F5, F7, F8, algebra]

2.1 Let $Y_i=y(t+c_i h)$ be the exact stage values and $u=y(t)$. Their collocation residual is $r_i=Y_i-u-h\sum_jQ_{ij}f(t+c_jh,Y_j)=h\int_0^{c_i}(g_h(s)-I_Mg_h(s))\,ds,$ using [F2] and the interpolation values in [F8]. Step 1.1 yields $\|r\|_{\infty,2}\le C_Mh^{M+1}$, where $C_M$ includes $1+\Lambda_M$. [F1, F2, F8, step 1.1, algebra]

3.1 The contraction hypotheses [F4] imply $hL\|Q\|_\infty<1$: the triangle inequality for the row-sum norm defined in [F2] gives $hL\|Q\|_\infty\le a+hL\|Q-Q_\Delta\|_\infty<a+(1-a)=1$. Since $Q,Q_\Delta$ are fixed finite matrices and $h\downarrow0$, in fact $hL\|Q\|_\infty\le1/2$ for all sufficiently small $h$. Subtract the exact-stage residual equation from the collocation equation for $U^*$; the row-sum norm and state Lipschitz bound give $\|Y-U^*\|_{\infty,2}\le\|r\|_{\infty,2}+hL\|Q\|_\infty\|Y-U^*\|_{\infty,2}.$ Thus $\|Y-U^*\|_{\infty,2}\le C_M h^{M+1}/(1-hL\|Q\|_\infty)$. [A1, F2, F3, F4, step 2.1, algebra]

4.1 By [F6], $y(t+h)=u+h\int_0^1g_h(s)\,ds$. Also $\int_0^1I_Mg_h(s)\,ds=\sum_jb_jg_h(c_j)$ by [F2] and [F8]. Add and subtract this interpolant integral and the endpoint evaluated at exact stages to obtain $y(t+h)-\Psi_h(u)=h\int_0^1(g_h-I_Mg_h)(s)\,ds+h\sum_jb_j\bigl(f(t+c_jh,Y_j)-f(t+c_jh,U_j^*)\bigr).$ The first term is $O(h^{M+1})$ by step 1.1. The second is bounded by $hL\left(\sum_j|b_j|\right)\|Y-U^*\|_{\infty,2}=O(h^{M+2})$ by step 3.1, so the local defect is $O(h^{M+1})$. [A1, A2, F2, F6, F8, step 1.1, step 3.1, algebra] ∎