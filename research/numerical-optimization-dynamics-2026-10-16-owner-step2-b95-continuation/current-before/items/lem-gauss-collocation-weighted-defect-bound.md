---
id: lem-gauss-collocation-weighted-defect-bound
kind: lemma
title: A Gaussian collocation defect has a high-order weighted endpoint bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-collocation-quadrature-tableau
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - lem-unit-interval-lebesgue-gauss-data-valid
  - def-gauss-quadrature-rule
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - lem-collocation-quadrature-matrix-well-defined
  - lem-collocation-polynomial-scaled-derivatives
  - thm-gauss-hermite-mean-value-remainder
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - lem-continuous-riemann-lebesgue-agreement
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-ftc-second-part
  - thm-uniform-limit-continuous-real-functions
  - thm-norm-inequality-for-the-vector-valued-integral
  - def-vector-valued-derivative-and-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-euclidean-space-complete
  - def-higher-derivatives-and-smoothness
  - def-countable-choice
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
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7, Theorem 7.10
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §2.1
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Assume Countable Choice for the Lebesgue interval-measure formula. Fix $M\ge1$, the $M$-node Gauss rule for Lebesgue measure on $[0,1]$, a time $t$, and an exact IVP solution $y$ on an interval containing $[t,t+h_0]$ for some $h_0>0$, with initial state $u=y(t)$. Let $D\subseteq\mathbb R\times\mathbb R^d$ be open, let $f:D\to\mathbb R^d$ be an IVP vector field on a neighborhood of a common compact convex tube, let $u_h$ be its Gauss collocation polynomial for this exact start, and put $g_h(s)=f(t+hs,u_h(s))$. Assume each scalar coordinate of $f$ has continuous partial derivatives through total order $2M+1$, all bounded on the tube; vector smoothness and derivatives below are understood componentwise, with scalar Taylor and quadrature results applied coordinatewise. The tube contains the exact path, $u_h$, and every segment joining them, and the collocation branch and tube are uniform for sufficiently small $h\le h_0$. Use the induced Euclidean operator norm $\|A\|_{op}:=\sup_{\|v\|_2=1}\|Av\|_2$, and assume $\|D_yf\|_{op}\le L$ on the tube. Then its endpoint defect satisfies
$$\|y(t+h)-u_h(1)\|_2\le C h^{2M+1},$$
where $C$ may depend on the fixed nodes and on $M$.

## Facts & Assumptions

**Given:** The IVP and exact path, its $M$-node Gauss collocation polynomial, the common convex tube, and the uniform smoothness hypotheses in the Statement.

[F1] [[def-collocation-quadrature-tableau]]: $u_h(0)=y(t)$, $u_h'(s)=hI_Mg_h(s)$, and $u_h(1)$ is the collocation endpoint.

[F2] [[lem-collocation-polynomial-scaled-derivatives]]: $g_h^{(j)}=O(h^j)$ for $0\le j\le2M$, and the collocation defect $r_h=u_h'-hg_h$ satisfies $r_h=O(h^{M+1})$.

[F3] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]] and [[thm-gauss-hermite-mean-value-remainder]]: the Gauss rule is exact through degree $2M-1$; for each $C^{2M}$ scalar coordinate function $v$ its quadrature error is bounded by $\|v^{(2M)}\|_\infty\int_0^1p_M(s)^2ds/(2M)!$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: the scalar Taylor supplier applies to each coordinate or matrix entry, with remainders bounded by the corresponding uniform derivative bound.

[F5] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: derivatives of finite products and compositions satisfy the chain and Leibniz rules.

[F6] [[thm-ftc-second-part]]: the derivative of an integral with continuous integrand recovers that integrand and endpoint differences are integrals.

[F7] [[thm-uniform-limit-continuous-real-functions]]: a uniform limit of continuous real functions is continuous, entrywise for finite-dimensional matrix functions.

[F8] [[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-derivative-and-integral]], and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: vector integrals are componentwise and obey $\|\int v\|_2\le\int\|v\|_2$, and finite-dimensional norms satisfy the triangle inequality.

[F9] [[thm-euclidean-space-complete]]: every Cauchy sequence in the finite-dimensional matrix space, identified with a Euclidean space of entries, converges there.

[F10] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]]: $I_Mg_h$ is the cardinal polynomial sum of degree at most $M-1$ and matches $g_h$ at every Gauss node.

[F11] [[def-gauss-quadrature-rule]] and [[lem-unit-interval-lebesgue-gauss-data-valid]]: the Gauss weights are $w_j=\int\ell_j\,d\lambda$ for valid order-$2M$ Lebesgue moment data on $[0,1]$; that same measure also meets the lower order-$2M-1$ moment branch because its moments through degree $2M-1$ are finite.

[F12] [[lem-continuous-riemann-lebesgue-agreement]]: continuous node polynomials have equal Riemann and Lebesgue integrals on $[0,1]$.

[F13] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact path satisfies $y'=f(t,y)$.

[F14] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: the monic degree-$M$ orthogonal polynomial is uniquely determined by the same moments in either moment-data branch.

[F15] [[def-higher-derivatives-and-smoothness]]: the one-variable coordinate paths and composites use the scalar $C^k$ convention; the multivariable smoothness of each component of $f$ is the partial-derivative assumption in the Statement.

[A2] Countable Choice, through the Lebesgue interval-measure formula needed to identify the Gauss measure and its moments.

[A1] All partial derivatives of $f$ through order $2M+1$ are bounded on the compact tube. The induced Euclidean operator norm is submultiplicative by its definition.

## Proof

1.1 Let $y_h(s)=y(t+hs)$ and $e(s)=y_h(s)-u_h(s)$. Define the averaged Jacobian $A(s)=\int_0^1D_yf(t+hs,u_h(s)+\theta e(s))\,d\theta$ and $B(s)=hA(s)$. For each unit vector $v\in\mathbb R^d$, the vector integral inequality [F8] gives $\|A(s)v\|_2\le\int_0^1\|D_yf(t+hs,u_h(s)+\theta e(s))v\|_2\,d\theta\le L$. Taking the supremum over unit $v$ proves $\|A(s)\|_{op}\le L$ and hence $\|B(s)\|_{op}\le hL$. Applying the scalar FTC to each coordinate along the segment gives $f(t+hs,y_h(s))-f(t+hs,u_h(s))=A(s)e(s)$. With $r_h=u_h'-hg_h$, [F13] and [F1] give $e'=Be-r_h$, $e(0)=0$. [given, A1, A2, F1, F2, F8, F13, algebra]

2.1 For a continuous matrix function $X$ set $\|X\|_\infty:=\sup_{s\in[0,1]}\|X(s)\|_{op}$. Define $(TX)(s)=\int_s^1X(\tau)B(\tau)\,d\tau$ entrywise. For any unit vector $v$, the vector integral inequality [F8] and submultiplicativity in [A1] give
$$\|(TX-TY)(s)v\|_2\le\int_s^1\|(X-Y)(\tau)B(\tau)v\|_2\,d\tau\le hL\|X-Y\|_\infty.$$
Taking the supremum over unit $v$ and $s$ proves $\|TX-TY\|_\infty\le hL\|X-Y\|_\infty$. For $hL\le1/2$, $T$ is a contraction. Starting with $P_0=I$, set $P_{n+1}=I+TP_n$. Successive differences are bounded by $2^{-n}\|TP_0\|_\infty$, so their entries are uniformly Cauchy; [F9] gives an entrywise limit and the geometric tail bound makes convergence uniform. Each iterate is continuous and [F7] makes the limit $P$ continuous. Passing to the limit in $P_{n+1}=I+TP_n$ gives $P=I+TP$, hence $P'=-PB$ and $P(1)=I$ by applying [F6] to each matrix entry. If $P$ and $\widetilde P$ both solve it, $D=P-\widetilde P=TD$ implies $\|D\|_\infty\le\frac12\|D\|_\infty$, so $D=0$; also $P=I+TP$ gives $\|P\|_\infty\le2$. [A1, F6, F7, F8, F9, step 1.1, induction, construct, algebra]

2.2 The normalized exact path satisfies $y_h'=h f(t+hs,y_h(s))=O(h)$ by [F13] and [A1]. If $y_h^{(r)}=O(h^r)$ for $1\le r\le j$, the chain rule [F5] writes the $j$th derivative of $f(t+hs,y_h(s))$ as a finite sum whose argument-derivative orders total $j$; each term is $O(h^j)$. Differentiating the IVP identity gives $y_h^{(j+1)}=O(h^{j+1})$. Induction proves $y_h^{(j)}=O(h^j)$ through order $2M$. [A1, F5, F13, F15, step 1.1, induction, algebra]

3.1 The path $u_h+\theta(y_h-u_h)$ between the collocation polynomial and exact path has normalized derivatives of order $j\le M-1$ of size $O(h^j)$ by [F2] and step 2.2. Repeated chain and product rules for $D_yf$, then integration over $0\le\theta\le1$ with uniform remainders on the compact tube, give $\|A^{(j)}\|_\infty=O(h^j)$ and $\|B^{(j)}\|_\infty=O(h^{j+1})$ for $0\le j<M$. [A1, F2, F5, F15, step 2.2, algebra]

4.1 Differentiating $P'=-PB$ entrywise gives $P^{(j)}=-\sum_{k=0}^{j-1}\binom{j-1}{k}P^{(k)}B^{(j-1-k)}$ for $1\le j\le M$. Induction from $\|P\|_\infty\le2$ and step 3.1 yields $\|P^{(j)}\|_\infty\le C_jh^j$. Apply the scalar Taylor formula [F4] to every matrix entry to get a matrix polynomial $q$ of degree at most $M-1$ with $\|P-q\|_\infty\le Ch^M$ and $\|q^{(j)}\|_\infty\le C_jh^j$ for $j<M$. Finite dimensionality combines the entrywise bounds in the induced operator norm. [F4, F5, step 2.1, step 3.1, induction, algebra]

5.1 By [F1], $b_j=\int_0^1\ell_j(s)\,ds$; by [F11] the Gauss weights are $w_j=\int\ell_j\,d\lambda$. The continuous-integral agreement [F12] gives $b_j=w_j$. Uniqueness of the monic orthogonal polynomial [F14] makes the order-$2M$ and order-$(2M-1)$ branch nodes identical, so [F3] applies to this tableau. By [F2], $\|g_h-I_Mg_h\|_\infty=O(h^M)$. The cardinal interpolation [F10] gives degree at most $2M-2$ for each coordinate of $qI_Mg_h$, and [F3] therefore gives, coordinatewise, $\int qI_Mg_h=\sum_jb_jq(c_j)g_h(c_j)$. Split the weighted defect integral entrywise as $\int_0^1P(g_h-I_Mg_h)=\int_0^1(P-q)(g_h-I_Mg_h)+\left(\int_0^1qg_h-\int_0^1qI_Mg_h\right)$. [A2, F1, F2, F3, F10, F11, F12, F14, step 4.1, algebra]

6.1 The first integral in step 5.1 is $O(h^{2M})$ by step 4.1 and $\|g_h-I_Mg_h\|_\infty=O(h^M)$. For each scalar coordinate, the parenthesized term is the Gauss quadrature error for that coordinate of $qg_h$. Leibniz' rule [F5] and the bounds $q^{(j)}=O(h^j)$ and $g_h^{(j)}=O(h^j)$ show $(qg_h)^{(2M)}=O(h^{2M})$ coordinatewise, so the scalar remainder [F3] bounds every coordinate error by $O(h^{2M})$. Since there are finitely many coordinates, the vector integral is $O(h^{2M})$ in Euclidean norm. Hence $\int_0^1P(g_h-I_Mg_h)=O(h^{2M})$. [F2, F3, F5, step 4.1, step 5.1, algebra]

7.1 By step 1.1, $e'=Be-r_h$, and step 2.1 gives $P'=-PB$, $P(1)=I$. Apply the product rule entrywise to obtain $(Pe)'=-Pr_h$; the scalar FTC on each coordinate and $e(0)=0$ give $e(1)=-\int_0^1Pr_h=h\int_0^1P(g_h-I_Mg_h)$. Step 6.1 bounds this by $O(h^{2M+1})$, and [F1] identifies $u_h(1)$ as the collocation endpoint. This proves the local defect bound. [F1, F2, F5, F6, step 1.1, step 2.1, step 6.1, algebra] ∎
