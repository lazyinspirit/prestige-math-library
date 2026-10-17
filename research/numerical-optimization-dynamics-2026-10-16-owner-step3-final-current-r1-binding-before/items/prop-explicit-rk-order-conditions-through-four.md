---
id: prop-explicit-rk-order-conditions-through-four
kind: proposition
title: "Sufficient explicit Runge–Kutta order conditions through order four"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-ck-and-multi-index-notation-in-several-variables
  - def-euclidean-inner-product
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
  - lem-standard-basis-of-f-n
  - thm-algebra-of-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-symmetry-of-higher-mixed-partials
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
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5: Methods for Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Statement

Let $(A,b,c)$ be an $s$-stage explicit tableau in the sense of [[def-explicit-runge-kutta-tableau-and-stage-map]], with $c_i=\sum_{j<i}a_{ij}$. For a vector $v\in\mathbb R^s$, write $v^{[r]}_i=v_i^r$. Define $(Ac)_i=\sum_{j<i}a_{ij}c_j$, $(Ac^{[2]})_i=\sum_{j<i}a_{ij}c_j^2$, and $(A^2c)_i=\sum_{j<i}a_{ij}(Ac)_j$.

Let $f:U\to\mathbb R^d$ be autonomous and of class $C^4$ on an open convex set $U\subseteq\mathbb R^d$. Assume an exact solution $y$ and all stages from exact starting values lie in a common compact convex $K\subset U$, and that the derivatives of $f$ through order four are bounded on $K$. For a component $f_i$, let $J=Df(y)$, $H=D^2f(y)$, and $G=D^3f(y)$ denote its coordinate derivative arrays: $(Jv)_i=\sum_j\partial_jf_i(y)v_j$, $H_i(u,v)=\sum_{j,k}\partial_j\partial_k f_i(y)u_jv_k$, and $G_i(u,v,w)=\sum_{j,k,\ell}\partial_j\partial_k\partial_\ell f_i(y)u_jv_kw_\ell$. These arrays act componentwise on vectors; $J^2v$ and $J^3v$ mean repeated matrix application, and $JH(u,v)$ means $J(H(u,v))$. The following coefficient equations are sufficient for the indicated uniform local orders on $K$:

- order at least one: $\sum_i b_i=1$;
- order at least two: also $\sum_i b_i c_i=1/2$;
- order at least three: also $\sum_i b_i c_i^2=1/3$ and $\sum_i b_i(Ac)_i=1/6$;
- order at least four: also $\sum_i b_i c_i^3=1/4$, $\sum_i b_i(Ac^{[2]})_i=1/12$, $\sum_i b_i c_i(Ac)_i=1/8$, and $\sum_i b_i(A^2c)_i=1/24$.

Here local order $p$ means a uniform exact-start defect of norm $O(h^{p+1})$ as in [[def-one-step-ode-method-local-defect-order-and-stability]]. The conditions are sufficient coefficient matches; this item asserts no necessity claim.

## Facts & Assumptions

**Given:** An explicit tableau, a $C^4$ autonomous vector field, an exact solution and admitted stages in the stated compact convex tube, and the bounded-derivative hypotheses.

[F1] [[def-explicit-runge-kutta-tableau-and-stage-map]]: $Y_i=y+h\sum_{j<i}a_{ij}K_j$, $K_i=f(Y_i)$ in the autonomous case, and $y^+=y+h\sum_i b_iK_i$.

[F2] [[def-one-step-ode-method-local-defect-order-and-stability]]: the local defect is the method output from an exact starting state minus the exact next state; uniform order $p$ is a uniform norm bound $O(h^{p+1})$.

[F3] [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], and [[thm-symmetry-of-higher-mixed-partials]]: continuous ordered coordinate derivatives through order four exist; the first derivative is represented by the Jacobian matrix of coordinate partials; and the second- and third-order coordinate arrays are symmetric.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: on a convex domain, a $C^{k+1}$ scalar function equals its degree-$k$ Taylor polynomial plus a bounded order-$(k+1)$ remainder along each admitted segment. Apply this coordinatewise to $f$ and to $y$.

[F5] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[thm-algebra-of-derivatives]]: composition and products differentiate by the chain and product rules.

[F6] [[def-euclidean-inner-product]]: $\|v\|_2^2=\sum_{k=1}^d v_k^2$; uniform coordinate remainder bounds therefore give a uniform Euclidean-norm remainder bound.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-standard-basis-of-f-n]], and [[cor-finite-dimensional-normed-spaces-are-banach]]: the Euclidean inner product induces a norm, and the standard coordinate lists are finite bases of $\mathbb R$ and $\mathbb R^d$, so these spaces are real Banach spaces. This supplies the Banach-space hypotheses when [F5] is applied to $f$ and the exact solution.

## Proof

1.1 Write $f_0=f(y)$, $J=Df(y)$, $H=D^2f(y)$, and $G=D^3f(y)$ at the exact starting state. The hypothesis $f\in C^4(U)$ is in the coordinate sense of [F3]. To justify the Banach chain rules used below, regard each finite array of order-$r$ coordinate partials as a map into a finite-dimensional coordinate space. For $r=0,1,2,3$, its first coordinate partials exist and are continuous by $f\in C^4(U)$, so the continuous-partials theorem in [F3], applied successively, gives continuous Fréchet derivatives through order four, with entries the corresponding coordinate partials. Thus [F5] applies to $f$ and the exact solution. The exact solution is differentiable, hence continuous from the Fréchet remainder in its derivative definition; since $y'=f\circ y$ and $f$ is continuous, $y'$ is continuous and $y$ is $C^1$. If $y$ is $C^r$ for $1\le r\le4$, the iterated chain and product rules in [F5] and continuity of the derivative arrays show $f\circ y$ is $C^r$, so $y'=f\circ y$ makes $y$ $C^{r+1}$. Thus $y$ is $C^5$ on the admitted interval. A further differentiation expresses $y^{(5)}$ using $f$ and its derivatives through order four, which are bounded on $K$; hence the order-four Taylor remainder of $y$ is uniform. Differentiating gives $y''=Jf_0$, $y'''=H(f_0,f_0)+J^2f_0$, and $y^{(4)}=G(f_0,f_0,f_0)+3H(f_0,Jf_0)+JH(f_0,f_0)+J^3f_0$; the factor $3$ uses the symmetry in [F3]. [given, F3, F5, F7, algebra]

2.1 Prove the stage expansions simultaneously by induction on $i$. The empty first row gives $Y_1=y$ and $K_1=f_0$, the displayed formulas below with their zero row coefficients. Suppose the formulas hold for $j<i$. Substituting them into $Y_i=y+h\sum_{j<i}a_{ij}K_j$ gives $Y_i-y=h c_i f_0+h^2(Ac)_iJf_0+h^3\big((A^2c)_iJ^2f_0+\frac12(Ac^{[2]})_iH(f_0,f_0)\big)+O(h^4)$. Taylor-expand $f(Y_i)$ at $y$ through cubic order by [F4]: $f(y+\delta)=f_0+J\delta+\frac12H(\delta,\delta)+\frac16G(\delta,\delta,\delta)+O(\|\delta\|_2^4).$ Substituting the preceding stage-state expansion and collecting powers of $h$ gives, uniformly in $i$, $K_i=f_0+h c_iJf_0+h^2\big((Ac)_iJ^2f_0+\frac12c_i^2H(f_0,f_0)\big)+h^3\big((A^2c)_iJ^3f_0+\frac12(Ac^{[2]})_iJH(f_0,f_0)+c_i(Ac)_iH(f_0,Jf_0)+\frac16c_i^3G(f_0,f_0,f_0)\big)+O(h^4)$. The cross term uses [F3] to exchange the two arguments of $H$. Compactness, bounded derivatives, and finiteness of $s$ make every remainder uniform. [given, F1, F3, F4, step 1.1, induction, algebra]

3.1 Substituting step 2.1 into $y^+=y+h\sum_i b_iK_i$ gives coefficients of the four orders: $h f_0$ has coefficient $\sum_i b_i$; $h^2Jf_0$ has coefficient $\sum_i b_ic_i$; $h^3J^2f_0$ and $h^3H(f_0,f_0)$ have coefficients $\sum_i b_i(Ac)_i$ and $\frac12\sum_i b_ic_i^2$; and the four $h^4$ terms $J^3f_0$, $JH(f_0,f_0)$, $H(f_0,Jf_0)$, and $G(f_0,f_0,f_0)$ have coefficients $\sum_i b_i(A^2c)_i$, $\frac12\sum_i b_i(Ac^{[2]})_i$, $\sum_i b_ic_i(Ac)_i$, and $\frac16\sum_i b_ic_i^3$. [F1, step 2.1, algebra]

4.1 Taylor's formula [F4] and the derivatives in step 1.1 give the exact solution coefficients $1$, $1/2$, $1/6$ for each order-three term, and $1/24$, $1/24$, $3/24$, $1/24$ for the four order-four terms in the same order as step 3.1. [given, F4, step 1.1, step 3.1, algebra]

5.1 The displayed coefficient equations make the method and exact expansions agree through $h^p$ for each requested $p\le4$. The stage remainder in step 2.1 is $O(h^4)$ and is multiplied by $h$, while the exact Taylor remainder is uniform on the compact tube, so matching through $h^p$ leaves a uniform defect $O(h^{p+1})$. By [F2] this is uniform local order at least $p$. [given, F2, F4, F6, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

For a nonautonomous field $f(t,y)$, adjoin the time equation $t'=1$ and apply the same autonomous argument to $(t,y)'=(1,f(t,y))$. Since $c_i=\sum_{j<i}a_{ij}$, the time component of stage $i$ is exactly $t+c_ih$; thus this extension uses the actual tableau abscissae.
