---
id: lem-collocation-polynomial-scaled-derivatives
kind: lemma
title: Collocation polynomial derivatives scale with the step size
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-collocation-quadrature-tableau
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-higher-derivatives-and-smoothness
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
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7, Theorem 7.10
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §2.1
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Fix $M$ distinct nodes in $[0,1]$, a time $t$, and an exact IVP solution $y$ on an interval $[t,t+h_0]$ for some $h_0>0$, with initial state $u=y(t)$. Let $D\subseteq\mathbb R\times\mathbb R^d$ be open and let $f:D\to\mathbb R^d$ be defined on a neighborhood of a compact tube containing this exact trajectory and the collocation stages. Assume each scalar coordinate of $f$ has continuous partial derivatives through total order $2M+1$, all bounded on the tube. Smoothness of vector-valued functions and their derivative bounds here and below are componentwise; the scalar Taylor supplier is applied to each coordinate, and finite-dimensional coordinate bounds give the stated Euclidean norm bounds. Assume the collocation stage branch exists and is locally unique in this tube for all sufficiently small $h\le h_0$. Let $u_h$ be the collocation polynomial from [[def-collocation-quadrature-tableau]], and set
$$g_h(\tau)=f(t+h\tau,u_h(\tau)),\qquad r_h(\tau)=u_h'(\tau)-h g_h(\tau).$$
For $1\le j\le M$, $\|u_h^{(j)}\|_\infty\le C_jh^j$; for $j>M$, $u_h^{(j)}=0$. For $0\le j\le2M$, $\|g_h^{(j)}\|_\infty\le C_jh^j$ (with $h^0=1$), and
$$\|r_h^{(j)}\|_\infty\le C_j h^{j+1}.$$
The constants depend on the fixed node set and its cardinal-basis derivative bounds; no uniformity in $M$ is asserted.

## Facts & Assumptions

**Given:** The collocation tableau and polynomial, a small-step branch in the stated compact tube, and a vector field with the stated bounded smoothness.

[F1] [[def-collocation-quadrature-tableau]]: $u_h(0)=u$, $u_h'(\tau)=h I_M g_h(\tau)$, and $u_h(c_i)=U_i$, where $I_M$ is interpolation at the $M$ fixed nodes.

[F2] [[lem-cardinal-basis-degree-and-values]] supplies the finite cardinal sum $I_Mv=\sum_jv(c_j)\ell_j$, its degree bound $M-1$, and the nodal values; [[thm-cardinal-polynomial-interpolant-exists-uniquely]], with $n=M-1$, makes it the unique polynomial of degree at most $M-1$ with those data.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: scalar Taylor expansion with bounded remainder applies to each coordinate, and repeated differentiation of finite compositions obeys the chain and product rules on the common tube.

[F4] [[def-higher-derivatives-and-smoothness]]: for scalar functions on time and normalized-time intervals, $C^k$ means derivatives through order $k$ exist and are continuous; this applies to coordinates of the paths and composites used below. Smoothness of $f$ itself is the componentwise partial-derivative assumption in the Statement.

[F5] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact path satisfies $y'=f(t,y)$ on its interval.

[A1] The nodes and tube are fixed as $h\downarrow0$; the exact path, all stages, and the collocation polynomial stay in the tube, and the small-step branch of [F2] is used.

## Proof

1.1 For each real component polynomial $p$ of degree at most $M-1$, $p$ and $I_Mp$ have the same $M$ nodal data and degree bound, so uniqueness in [F2] gives $I_Mp=p$; all reproduction uses below are componentwise. The stage equations in [F1] and boundedness of $f$ on the tube first give $U_i-u=O(h)$. The exact path satisfies $y'=f(t,y)$ by [F5]. We prove by induction on $s=1,\ldots,M$ that there are vector polynomials $P_s$ of degree at most $s$ such that $U_i=u+\sum_{r=1}^s h^rP_r(c_i)+O(h^{s+1})$ uniformly over the finite node set. For the induction step, substitute the expansion through order $s$ into each scalar coordinate of $f(t+hc_j,U_j)$ and apply the scalar Taylor supplier [F3] at $(t,u)$. Each coefficient of $h^m$ is a polynomial in $c_j$ of degree at most $m$, because every time increment contributes one factor $c_jh$ and each state coefficient at order $r$ has degree at most $r$. For $m\le M-1$, [F2] makes interpolation exact on that coefficient; the row identity $Q_{ij}=\int_0^{c_i}\ell_j$ then integrates it to a polynomial in $c_i$ of degree at most $m+1$. Multiplication by the outer $h$ gives the next $P_{m+1}$. Taylor remainders are uniform on the fixed compact tube, and the stated local branch supplies the stage solution. [A1, F1, F2, F3, F4, F5, induction, algebra]

2.1 The coefficient construction in step 1.1 and its Taylor expansion give vector polynomials $R_m$ of degree at most $m$ with $f(t+hc_j,U_j)=\sum_{m=0}^{M-1}h^mR_m(c_j)+\delta_j(h)$, where $\max_j\|\delta_j(h)\|=O(h^M)$. Apply componentwise reproduction from [F2] and define $e_h(\tau)=\sum_j\ell_j(\tau)\delta_j(h)$. Then $I_Mg_h(\tau)=\sum_{m=0}^{M-1}h^mR_m(\tau)+e_h(\tau)$ and every derivative of $e_h$ through order $M-1$ is $O(h^M)$, because its basis is fixed. Substituting into the defining integral in [F1], rather than identifying a degree-$M$ polynomial from only its $M$ stage values, gives $u_h(\tau)=u+\sum_{s=1}^M h^sP_s(\tau)+R_h(\tau)$ with $P_s(\tau)=\int_0^\tau R_{s-1}(a)\,da$ and $R_h(\tau)=h\int_0^\tau e_h(a)\,da$. These are the same integrated coefficients used in step 1.1 through the row integrals $Q_{ij}$. Thus $\deg P_s\le s$, $P_s(0)=0$, $\|R_h\|_\infty=O(h^{M+1})$, and for $1\le j\le M$, $R_h^{(j)}=h e_h^{(j-1)}=O(h^{M+1})$. Differentiating the expansion annihilates every term with $s<j$ and bounds the remaining terms by $O(h^j)$. Hence $\|u_h^{(j)}\|_\infty=O(h^j)$ for $1\le j\le M$; derivatives above $M$ vanish by the defining integrated cardinal sum. This argument also covers $M=1$ and a node at zero. [step 1.1, F1, F2, F3, F4, algebra]

3.1 Repeated chain and product rules from [F3] express each coordinate of $g_h^{(j)}$ as a finite sum of derivatives of that coordinate of $f$ applied to derivatives of $(t+h\tau,u_h(\tau))$ whose orders add to $j$. Each argument derivative of order $s\le M$ is $O(h^s)$ by step 2.1; higher derivatives vanish for the polynomial state and affine time coordinate. The bounded derivatives in [F4] therefore give $\|g_h^{(j)}\|_\infty\le C_jh^j$ through $j=2M$. [A1, F3, F4, step 2.1, algebra]

4.1 For $j<M$, subtract from each coordinate of $g_h$ its Taylor polynomial of degree $M-1$ at $0$. Its remainder and its first $j$ derivatives are $O(h^M)$ by step 3.1 and the one-variable Taylor remainder in [F3]. Interpolation reproduces that Taylor polynomial by [F2]; derivatives of the interpolated remainder are bounded by the fixed constants $\max_{\tau}\sum_i|\ell_i^{(j)}(\tau)|$, so $(I_Mg_h-g_h)^{(j)}=O(h^M)$ coordinatewise. Multiplying by $h$ gives $r_h^{(j)}=O(h^{M+1})\le O(h^{j+1})$ for $j<M$ and $h\le1$. For $M\le j\le2M$, $I_Mg_h$ has degree at most $M-1$, so its $j$th derivative vanishes and $r_h^{(j)}=-h g_h^{(j)}=O(h^{j+1})$ by step 3.1. [F2, F3, step 3.1, algebra] ∎
