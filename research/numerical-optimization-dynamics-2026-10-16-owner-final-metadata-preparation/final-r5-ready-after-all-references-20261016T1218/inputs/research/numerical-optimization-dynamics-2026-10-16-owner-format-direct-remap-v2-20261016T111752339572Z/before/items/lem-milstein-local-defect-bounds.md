---
id: lem-milstein-local-defect-bounds
kind: lemma
title: "Conditional local defect bounds for the Milstein Taylor increment"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-milstein-scheme-and-iterated-integrals
  - lem-event-weighted-ito-isometry
  - lem-bounded-sde-increment-moments
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-conditional-expectation-exists-by-radon-nikodym
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Sections 5.5, 5.7, 10.3, and 10.6, printed pp. 180-190, 345-351, and 356-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Section 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 6.4"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Let $X$ solve the finite-dimensional autonomous SDE in [[def-milstein-scheme-and-iterated-integrals]] with $b,\sigma_1,\ldots,\sigma_m\in C_b^3(\mathbb R^d)$, using the $C_b^3$ convention in that Definition. Let $0<h\le1$ and let $[t,t+h]$ be a deterministic interval. Define $L_0f:=Df\,b+\frac12\sum_{k=1}^mD^2f[\sigma_k,\sigma_k]$ and $L_if:=Df\,\sigma_i$ for $i\ge1$. Then there is a remainder $R_{t,h}\in L^2(\mathbb R^d)$ such that
$$X_{t+h}=X_t+b(X_t)h+\sum_{j=1}^m\sigma_j(X_t)\Delta W^j+\sum_{i,j=1}^mL_i\sigma_j(X_t)I_{ij}+R_{t,h},$$
where $\Delta W^j=W^j_{t+h}-W^j_t$ and $I_{ij}=\int_t^{t+h}(W_s^i-W_t^i)dW_s^j$. Moreover, for the conditioning sigma algebra $\mathcal F_t$ there is a conditional-expectation version $r_{t,h}=\mathbb E[R_{t,h}\mid\mathcal F_t]$ with
$$|r_{t,h}|\le Ch^2,\qquad \mathbb E[|R_{t,h}|^2\mid\mathcal F_t]\le Ch^3\quad\text{almost surely},$$
where $C$ depends only on $d,m$ and the coefficient bounds, not on $t,h$ or $X_t$.

## Facts & Assumptions

**Given:** AC, a Brownian It\^o solution on a usual filtered probability space, the coefficient bounds in the Statement, and $0<h\le1$.

[L1] [[def-milstein-scheme-and-iterated-integrals]]: $I_{ij}=\int_t^{t+h}(W_s^i-W_t^i)dW_s^j$, $L_if=Df\,\sigma_i$, and $C_b^3$ means all derivatives through order three, including the function itself, are bounded and continuous.

[L2] [[lem-bounded-sde-increment-moments]]: for $s\in[t,t+h]$ and every $A\in\mathcal F_t$, $\mathbb E[\mathbf1_A|X_s-X_t|^2]\le C(s-t)P(A)$.

[F1] [[def-continuous-brownian-ito-process]]: $X$ has the drift-plus-It\^o-integral decomposition, Brownian increments after $t$ are independent of $\mathcal F_t$, and finite-energy It\^o integrals are martingales.

[F2] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: for $f\in C^{1,2}$, $df(X)=L_0f(X)dt+\sum_iL_if(X)dW^i$.

[F3] [[lem-event-weighted-ito-isometry]]: for $A\in\mathcal F_t$, each scalar It\^o integral over $(t,t+h]$ satisfies $\mathbb E[\mathbf1_A|\int H,dW^j|^2]=\mathbb E[\mathbf1_A\int|H|^2ds]$.

[F4] [[thm-ito-integral-process-has-a-continuous-martingale-version]]: a finite-energy It\^o integral increment has conditional mean zero at its start time.

[F5] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional expectation version has the same integrals as the original variable on every event in the conditioning sigma algebra.

[F6] [[thm-conditional-expectation-exists-by-radon-nikodym]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: under AC the conditional expectation versions used below exist, are linear, and preserve expectation and order.

[A1] [[def-axiom-of-choice]]: AC is used only through the declared Brownian, It\^o, and conditional-expectation interfaces [F1]--[F6].

## Proof

**Given:** The assumptions above.

1.1 Apply [F2] to $f=\sigma_j$ on $[t,s]$. With the operators in [L1],
$$\sigma_j(X_s)=\sigma_j(X_t)+\int_t^s(L_0\sigma_j)(X_r)dr+\sum_i\int_t^s(L_i\sigma_j)(X_r)dW_r^i.$$
Integrating this identity against $dW_s^j$, summing over $j$, and substituting the SDE decomposition of $X_{t+h}-X_t$ isolates the constant coefficient terms. Thus the remainder is exactly
$$R_{t,h}=R_b+R_0+R_1,$$
where $R_b=\int_t^{t+h}(b(X_s)-b(X_t))ds$, $R_0=\sum_j\int_t^{t+h}(\int_t^s(L_0\sigma_j)(X_r)dr)dW_s^j$, and $R_1=\sum_{i,j}\int_t^{t+h}(\int_t^s((L_i\sigma_j)(X_r)-(L_i\sigma_j)(X_t))dW_r^i)dW_s^j$. The subtraction in $R_1$ leaves precisely $\sum_{i,j}(L_i\sigma_j)(X_t)I_{ij}$. [L1, F1, F2, A1]

2.1 Since $L_0b$ is bounded, apply [F2] to $b(X_s)$ and take event integrals over $A\in\mathcal F_t$. The stochastic increments have zero event integral by [F4]; componentwise this gives $|\mathbb E[\mathbf1_A R_b]|\le\|L_0b\|_\infty h^2P(A)/2$. By [F5]--[F6], the vector conditional expectation $r_b=\mathbb E[R_b\mid\mathcal F_t]$, formed coordinatewise, exists. If any coordinate exceeded its bound on an $\mathcal F_t$ event, the defining event-integral identity [F5] would contradict the bound just proved, so $|r_b|\le Ch^2$ after increasing $C$ by a dimension factor. Also, the pathwise inequality $|\int_t^{t+h}g(s)ds|^2\le h\int_t^{t+h}|g(s)|^2ds$ follows by applying $0\le\int_t^{t+h}(|g|-a)^2ds$ with $a=h^{-1}\int_t^{t+h}|g|ds$; [L2] therefore gives $\mathbb E[\mathbf1_A|R_b|^2]\le h\|Db\|_\infty^2\int_t^{t+h}C(s-t)P(A)ds\le Ch^3P(A)$. [L2, F2, F4, F5, F6, A1]

2.2 Each $L_0\sigma_j$ is bounded. Therefore the inner integral in $R_0$ has magnitude at most $C(s-t)$. Its outer It\^o integrals have zero conditional mean by [F4]. Apply the scalar event-weighted identity [F3] to each component of each outer vector integral and use $|\sum_jv_j|^2\le m\sum_j|v_j|^2$; this gives $\mathbb E[\mathbf1_A|R_0|^2]\le C\int_t^{t+h}(s-t)^2ds\,P(A)\le Ch^3P(A)$. [F3, F4, A1]

3.1 Each $L_i\sigma_j$ is globally Lipschitz: its derivative is a sum of products of first and second derivatives of the $\sigma_k$, bounded by [L1]. The inner integral $J_{ij}(s)=\int_t^s((L_i\sigma_j)(X_r)-(L_i\sigma_j)(X_t))dW_r^i$ has zero conditional mean and, by [F3] coordinatewise and [L2], satisfies $\mathbb E[\mathbf1_A|J_{ij}(s)|^2]\le C\int_t^s\mathbb E[\mathbf1_A|X_r-X_t|^2]dr\le C(s-t)^2P(A)$. Each outer integral has zero conditional mean by [F4]; applying the scalar identity [F3] componentwise and $|\sum_{ij}v_{ij}|^2\le m^2\sum_{ij}|v_{ij}|^2$ gives $\mathbb E[\mathbf1_A|R_1|^2]\le Ch^3P(A)$. [L1, L2, F3, F4, A1]

3.2 The sum $R_0+R_1$ has conditional mean zero, while $R_b$ has conditional mean $r_b$ from step 2.1; set $r_{t,h}=r_b$. The inequality $|x+y+z|^2\le3(|x|^2+|y|^2+|z|^2)$ and steps 2.1--3.1 show $\mathbb E[\mathbf1_A|R_{t,h}|^2]\le Ch^3P(A)$ for every $A\in\mathcal F_t$. By the defining event-integral property [F5] and order property [F6], this is exactly $\mathbb E[|R_{t,h}|^2\mid\mathcal F_t]\le Ch^3$ almost surely. [F5, F6, step 2.1, step 2.2, step 3.1]

4.1 Steps 2.1 and 3.2 give the conditional mean and second-moment bounds in the Statement, and step 1.1 gives the exact Taylor expansion. Every constant is uniform in the starting state because the coefficients and derivatives are bounded. AC enters only through [A1]. [A1, step 1.1, step 2.1, step 3.2] ∎
