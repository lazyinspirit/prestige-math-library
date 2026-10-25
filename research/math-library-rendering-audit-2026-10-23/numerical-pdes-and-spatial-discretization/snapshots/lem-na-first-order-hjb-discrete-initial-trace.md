---
id: lem-na-first-order-hjb-discrete-initial-trace
kind: lemma
title: Initial trace for the positive-interpolation and upwind HJB schemes
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-positive-interpolation-semilagrangian-hjb-step, alg-na-upwind-hjb-grid-step, lem-na-multilinear-interpolation-positive-and-second-order-accurate, def-na-first-order-hjb-cauchy-problem, def-na-periodic-grid-and-tensor-multilinear-interpolation, thm-heine-cantor-metric, thm-heine-borel-rn]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; every transition tree and time horizon is finite and all bounds are uniform over its branches.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§2–4, positive interpolation transitions and semi-Lagrangian scheme, printed pp. 2–5."
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 1 §§4–6, stability, initial data, and comparison for the Cauchy problem, printed pp. 21–29."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $u_0$ be continuous and periodic, and let $B$ and $L$ bound the drift and
running cost in [[def-na-first-order-hjb-cauchy-problem]]. For the semi-Lagrangian
scheme, if $t_n=n\tau\to0$, $h_{\max}\to0$, and
$h_{\max}^2/\tau\to0$, then
$$\sup_i|U_i^n-u_0(x_i)|\longrightarrow0.$$
For the upwind scheme, the same conclusion holds when $t_n\to0$,
$h_{\max}\to0$, and its CFL condition holds. Both statements are uniform over
all finite control policies and remain true for a finite control discretization.

## Facts & Assumptions

**Given:** The two finite update rules, bounded coefficients, continuous
periodic $u_0$, and a time step satisfying the corresponding mesh condition.
For each finite transition tree, $\mathbb E$ denotes the finite sum of path
values weighted by the products of their row weights.

[F1] The semi-Lagrangian transition weights are the nonnegative tensor
weights of [[def-na-periodic-grid-and-tensor-multilinear-interpolation]]; they
sum to one and each coordinate node lies within $h_j$ of the footpoint
([[lem-na-multilinear-interpolation-positive-and-second-order-accurate]]).

[F2] The upwind row weights under the CFL condition are its center weight
$1-\tau\sum_j|b_j|/h_j$ and neighbor weights
$\tau b_j^+/h_j$, $\tau b_j^-/h_j$
([[alg-na-upwind-hjb-grid-step]]).

[F3] The coefficient and reward bounds are $|b_a|\le B$ and
$|\ell_a|\le L$, and $u_0$ is continuous and periodic
([[def-na-first-order-hjb-cauchy-problem]]).

[F4] The restriction of a continuous periodic lift of $u_0$ to the compact
cube $[-1,2]^d$ is uniformly continuous; translating nearby torus lifts into
this cube gives a common modulus $\omega_0(\delta)\to0$
([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]],
[[def-na-periodic-grid-and-tensor-multilinear-interpolation]]).

## Proof

1.1 For a semi-Lagrangian row at a node $x_i$ and action $a$, view its interpolation weights as a finite probability vector on the cell nodes around $y=x_i+\tau b_a(x_i,t)$. In a periodic lift, the weighted mean of each coordinate is $(1-\theta_j)x_{i_j}+\theta_j(x_{i_j}+h_j)=y_j$, by the product formula in [F1]. The centered interpolation error $\xi$ therefore has weighted mean zero and satisfies $|\xi|^2\le\sum_jh_j^2$. [F1, given, algebra]

1.2 For an upwind row, the weights in [F2] are nonnegative and sum to one by CFL. The weighted mean displacement to the previous-time node is $\tau b_a$: in coordinate $j$ it is $\tau(b_j^+/h_j)h_j-\tau(b_j^-/h_j)h_j=\tau b_j$. Its centered error $\xi$ has mean zero and second moment at most $\tau\sum_j|b_j|h_j\le\tau B\sum_jh_j$, since subtracting the squared mean cannot increase the second moment. [F2, given, algebra]

1.3 Unroll either update for the finite number $n$ of steps. At each stage the minimum chooses one of finitely many control rows, and each row is a finite weighted average; induction therefore represents the value as the minimum of finite weighted path costs $u_0(X_n)+\sum_{r<n}\tau\ell_r$. Along any such controlled path the sum of the drift increments has norm at most $Bt$. The centered increments have conditional mean zero. For $r<s$, summing the increment $\xi_s$ over all next-branch weights from each fixed path prefix through time $s-1$ gives zero; hence the finite weighted cross term $\mathbb E(\xi_r\cdot\xi_s)$ is zero. Expanding the square therefore shows that their total second moment is at most $n\sum_jh_j^2$ for the semi-Lagrangian rows and $tB\sum_jh_j$ for the upwind rows. Thus the endpoint displacement obeys $$\mathbb E|X_n-x_i|^2\le2B^2t^2+2n\sum_jh_j^2$$ for the semi-Lagrangian case and $$\mathbb E|X_n-x_i|^2\le2B^2t^2+2tB\sum_jh_j$$ for the upwind case. Every path's accumulated reward has magnitude at most $Lt$. [F1, F2, F3, algebra]

2.1 Let $M_0=\|u_0\|_\infty$ and let $\omega_0(\delta)\to0$ be the uniform modulus from [F4]. For any $0<\delta<1$, split the finite weighted endpoint average into paths with $|X_n-x_i|\le\delta$ and its complement. On the first set, $|u_0(X_n)-u_0(x_i)|\le\omega_0(\delta)$; on the complement, it is at most $2M_0$. The complement weight is at most $\mathbb E|X_n-x_i|^2/\delta^2$. By step 1.3 this tends to zero as $t_n\to0$ under $h_{\max}^2/\tau\to0$ for the semi-Lagrangian scheme, and under $h_{\max}\to0$ for the upwind scheme. The reward contributes at most $Lt_n$; the same two-sided bound holds after taking a minimum over policies. First let the mesh and $t_n$ tend to zero, then let $\delta\downarrow0$. This proves the asserted uniform initial trace. [F3, F4, step 1.3, algebra] ∎
