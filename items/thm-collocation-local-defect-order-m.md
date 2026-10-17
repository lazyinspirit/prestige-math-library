---
id: thm-collocation-local-defect-order-m
kind: theorem
title: M-node collocation has local defect order M
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
  - def-vector-valued-derivative-and-integral
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

Let $M\ge1$, let $0\le c_1<\cdots<c_M\le1$ be fixed distinct nodes, and fix an exact IVP solution $y$ on an interval containing $[t,t+h_0]$ for some $h_0>0$, with initial state $u=y(t)$. Let $D\subseteq\mathbb R\times\mathbb R^d$ be open with $f:D\to\mathbb R^d$ an IVP vector field on a neighborhood of a fixed compact convex tube. Assume each scalar coordinate of $f$ has continuous partial derivatives through total order $M$, bounded on the tube, and is $L$-Lipschitz in state there. Smoothness and derivative statements for vector-valued functions are componentwise; scalar Taylor is applied to each coordinate. Assume the exact path, stages, collocation polynomial, and comparison segments stay in the tube. In particular, the composite $g_h(s)=f(t+hs,y(t+hs))$ satisfies $\|g_h^{(M)}\|_\infty\le C_Fh^M$ uniformly; the stated componentwise smoothness and bounded exact-path derivatives imply this bound. Assume directly that for every sufficiently small $h>0$ the collocation stage equation has a unique solution in the tube. Then its endpoint map has uniform exact-start local defect $O(h^{M+1})$ as $h\downarrow0$. The constant depends on the fixed nodes, including their Lebesgue constant $\Lambda_M$; no uniform-in-$M$ estimate is asserted.

## Facts & Assumptions

**Given:** An exact IVP solution on $[t,t+h]$, its collocation nodes, the stated smoothness and tube assumptions, and the small-step collocation branch.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact path satisfies $y'(s)=f(s,y(s))$.

[F2] [[def-collocation-quadrature-tableau]]: $Q_{ij}=\int_0^{c_i}\ell_j(s)\,ds$, $b_j=\int_0^1\ell_j(s)\,ds$, and the endpoint is $u+h\sum_jb_jF_j(U)$.

[F3] [[lem-collocation-quadrature-matrix-well-defined]]: the node integrals, $Q$, $b$, and $\Lambda_M$ are finite.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: scalar Taylor's formula on the compact convex tube gives a uniform remainder for each coordinate, controlled by the next bounded derivative.

[F5] [[def-vector-valued-derivative-and-integral]], [[thm-ftc-second-part]], and [[thm-continuous-implies-integrable]]: vector derivatives and integrals are componentwise; applying the scalar FTC to each coordinate gives exact path increments, and continuous coordinate derivatives are Riemann integrable.

[F6] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[def-higher-derivatives-and-smoothness]]: the one-variable coordinate paths use the $C^M$ convention of the scalar smoothness definition, and repeated chain and product rules apply componentwise to $g_h$; smoothness of $f$ is the partial-derivative assumption in the Statement.

[F7] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]] give the cardinal sum $I_M$, its degree bound $M-1$, and the nodal values $I_Mg_h(c_j)=g_h(c_j)$; [[thm-cardinal-polynomial-interpolant-exists-uniquely]], with $n=M-1$, supplies uniqueness for these $M$ nodal data.

[A1] The exact trajectory, exact stage values, collocation stages and the segments used in the Lipschitz estimates lie in the common tube; the constants are uniform as $h\downarrow0$.

[A2] The composite $g_h$ has the uniform derivative bound in the Statement. This follows by repeated chain and product rules: every normalized-time derivative contributes a factor $h$, while derivatives of $f$ and the exact path are bounded on the fixed tube.

## Proof

1.1 Put $g_h(s)=f(t+hs,y(t+hs))$. The exact path derivatives used here are bounded on the compact tube: $y'=f(t,y)$ is bounded there, and differentiating this identity successively expresses each higher derivative of each scalar coordinate of $y$ as a finite sum of products of bounded partial derivatives of $f$ and already bounded lower derivatives of $y$. This induction gives bounded derivatives through order $M$ under the stated componentwise $C^M$ hypothesis. Repeated chain rules [F6] then show coordinatewise $\|g_h^{(M)}\|_\infty\le C h^M$: every differentiation in normalized time contributes one factor $h$. Let $p_{M-1}$ be the degree-$(M-1)$ Taylor polynomial of each coordinate of $g_h$ at $0$. By [A2] and scalar Taylor's remainder [F4], $\|g_h-p_{M-1}\|_\infty\le C h^M$. For each real component polynomial $p$ of degree at most $M-1$, $p$ and $I_Mp$ have that degree bound and the same $M$ nodal data, so uniqueness in [F7] gives $I_Mp=p$. Thus interpolation reproduces $p_{M-1}$ componentwise by [F7]. The cardinal formula and [F3] give $\|I_Mv\|_\infty\le\Lambda_M\|v\|_\infty$ coordinatewise, hence $\|g_h-I_Mg_h\|_\infty\le(1+\Lambda_M)C h^M.$ [A2, F2, F3, F4, F6, F7, algebra]

2.1 Let $Y_i=y(t+c_i h)$ be the exact stage values and $u=y(t)$. Coordinatewise FTC and the interpolation values in [F7] give their collocation residual $$r_i=Y_i-u-h\sum_jQ_{ij}f(t+c_jh,Y_j)=h\int_0^{c_i}(g_h(s)-I_Mg_h(s))\,ds.$$ Step 1.1 yields $\|r\|_{\infty,2}\le C_Mh^{M+1}$, where $C_M$ includes $1+\Lambda_M$. [F1, F2, F5, F7, step 1.1, algebra]

3.1 The fixed matrix $Q$ is finite by [F3], so for fixed $L$ and sufficiently small $h$, $hL\|Q\|_\infty\le1/2$. Subtract the exact-stage residual equation from the collocation equation for the unique branch $U^*$ assumed in the Statement; the row-sum norm and state Lipschitz bound give $\|Y-U^*\|_{\infty,2}\le\|r\|_{\infty,2}+hL\|Q\|_\infty\|Y-U^*\|_{\infty,2}.$ Thus $\|Y-U^*\|_{\infty,2}\le C_M h^{M+1}/(1-hL\|Q\|_\infty)$. [A1, F2, F3, step 2.1, algebra]

4.1 Applying the scalar FTC to each coordinate gives $y(t+h)=u+h\int_0^1g_h(s)\,ds$ by [F5]. Also $\int_0^1I_Mg_h(s)\,ds=\sum_jb_jg_h(c_j)$ by [F2] and [F7]. Add and subtract this interpolant integral and the endpoint evaluated at exact stages to obtain $y(t+h)-\Psi_h(u)=h\int_0^1(g_h-I_Mg_h)(s)\,ds+h\sum_jb_j\bigl(f(t+c_jh,Y_j)-f(t+c_jh,U_j^*)\bigr).$ The first term is $O(h^{M+1})$ by step 1.1. The second is bounded by $hL\left(\sum_j|b_j|\right)\|Y-U^*\|_{\infty,2}=O(h^{M+2})$ by step 3.1, so the local defect is $O(h^{M+1})$. [A1, A2, F2, F5, F7, step 1.1, step 3.1, algebra] ∎

