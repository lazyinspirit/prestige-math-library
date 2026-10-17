---
id: thm-sdc-residual-tolerance-preserves-order
kind: theorem
title: A stage residual tolerance preserves collocation order
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-one-step-stability
  - thm-collocation-local-defect-order-m
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: https://www.unige.ch/~hairer/poly/poly.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Fix $M$ nodes and an integer $1\le p\le M$. On a fixed interval use exact collocation stages $U_n^*$ and the collocation endpoint map $\Psi_{h,n}$ of [[def-collocation-quadrature-tableau]]. Assume the hypotheses of [[thm-sdc-sweep-contraction-and-error-bound]] hold uniformly, with contraction constants $q_n\le q_0<1$, the common field Lipschitz constant is $L$, and all exact and approximate stages and grid states stay in one compact tube. Assume also that the hypotheses of [[thm-collocation-local-defect-order-m]] and [[thm-collocation-one-step-stability]] hold uniformly at all mesh times for the exact and numerical starting states, including the bounded componentwise smoothness, exact-path derivative bound, and common branch and tube requirements. Let $U_n^*$ be the collocation stage vector for the numerical start $y_n$, and suppose the SDC stage vector $V_n$ belongs to its invariant product ball $\mathcal C_n$ and satisfies
$$\|S_n(V_n)-V_n\|_{\infty,2}\le(1-q_n)C_\tau h^{p+1}.$$
Starting from the exact initial value and setting $y_{n+1}=y_n+h\sum_jb_jf(t_n+c_jh,(V_n)_j)$, the inexact method has global error $O(h^p)$. Thus a fixed residual constant and a stage target $O(h^{p+1})$ preserve any collocation order $p\le M$; the bound is conditional on the stated local contraction and tube assumptions.

## Facts & Assumptions

**Given:** A uniform mesh $h=T/N$, the exact IVP solution, the collocation tableau and branch, and the uniform local-defect and stability hypotheses, and the inexact stage vectors satisfying the Statement.

[F1] [[thm-sdc-sweep-contraction-and-error-bound]]: for every stage vector $V$ in the invariant product ball $\mathcal C_n$, $\|V-U_n^*\|_{\infty,2}\le\|S_n(V)-V\|_{\infty,2}/(1-q_n)$; this estimate does not require $V$ to be an iterate.

[F2] [[def-collocation-quadrature-tableau]]: the exact collocation endpoint is $\Psi_{h,n}(u)=u+h\sum_jb_jf(t_n+c_jh,U_j^*(u))$.

[F3] [[thm-collocation-one-step-stability]]: exact collocation endpoints from two inputs in the tube differ by at most $(1+L_s h)$ times the input difference, for a uniform $L_s$.

[F4] [[thm-collocation-local-defect-order-m]]: the exact-start collocation defect is bounded by $C_0h^{M+1}$ uniformly. For $h\le1$ and $p\le M$, this is also at most $C_0h^{p+1}$.

[L1] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_{n+1}\le(1+L_sh)e_n+Ch^{p+1}$ and $e_0=0$, then $\max_ne_n\le C' h^p$ on the fixed interval.

[A1] For every $n$, $V_n$ and $U_n^*$ lie in the corresponding invariant product ball $\mathcal C_n$; the segments joining corresponding stages lie in the tube, so the state Lipschitz estimate applies componentwise.

## Proof

1.1 Applying [F1] to the residual inequality in the Statement gives $\|V_n-U_n^*\|_{\infty,2}\le C_\tau h^{p+1}$. By [F2], the same-input endpoint difference is $\|y_n+h\sum_jb_jf(t_n+c_jh,(V_n)_j)-\Psi_{h,n}(y_n)\|_2\le hL\sum_j|b_j|\|V_n-U_n^*\|_{\infty,2}\le LC_\tau\|b\|_1h^{p+2},$ where $\|b\|_1=\sum_j|b_j|$ is finite because the tableau has finitely many finite entries. [A1, F1, F2, algebra]

2.1 Let $e_n=\|y_n-y(t_n)\|_2$. Insert and subtract the exact collocation output from $y_n$ and the exact-start collocation output. By the triangle inequality, [F3] and [F4], $e_{n+1}\le(1+L_sh)e_n+C_0h^{p+1}+LC_\tau\|b\|_1h^{p+2}\le(1+L_sh)e_n+C_1h^{p+1},$ for $h\le1$, where $C_1=C_0+LC_\tau\|b\|_1$ is independent of $n,h$. [A1, F3, F4, step 1.1, algebra]

3.1 The initial error is zero. Apply [L1] to the recurrence in step 2.1 to obtain $\max_{0\le n\le N}e_n\le C'h^p$. This proves the claimed order and makes no claim for a residual threshold that fails the stated $O(h^{p+1})$ stage target. [F1, L1, step 2.1] ∎
