---
id: thm-na-peano-kernel-remainder-and-bound
kind: theorem
title: "Peano representation and L1 error bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 1
deps: [def-na-peano-kernel, def-factorial-and-falling-factorial, def-higher-derivatives-and-smoothness, lem-derivative-of-a-power, thm-chain-rule, thm-algebra-of-derivatives, thm-induction-principle, cor-repeated-riemann-integrals-on-rectangles, thm-ftc-second-part, thm-linearity-of-the-integral, thm-additivity-over-subintervals, thm-continuous-implies-integrable, thm-heine-cantor-metric, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, lem-changing-a-function-at-finitely-many-points, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-monotonicity-of-the-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. Taylor's formula and the finite quadrature argument use no choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.2"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 223–227, Taylor integral remainder, Peano kernel, and the L1 error estimate."
---

## Statement

Let $a<b$, let $x_1,\ldots,x_s\in[a,b]$ and $w_1,\ldots,w_s\in\mathbb R$ define the finite quadrature $Q$ and residual $L$ of [[def-na-peano-kernel]], and let $r\in\mathbb N$ with $r\ge1$. Assume $L$ vanishes on the evaluation functions of the zero polynomial and every nonzero formal polynomial of degree at most $r-1$, and let $f\in C^r([a,b])$. For the kernel $K_r(t)=L(g_{r,t})$ of [[def-na-peano-kernel]],
$$L(f)=\int_a^b K_r(t)f^{(r)}(t)\,dt,\qquad |L(f)|\le \left(\int_a^b|K_r(t)|\,dt\right)\|f^{(r)}\|_\infty.$$

## Facts & Assumptions

**Given:** A nondegenerate interval $[a,b]$, a finite real weighted quadrature exact on $\mathcal P_{r-1}$, an integer $r\ge1$, and $f\in C^r([a,b])$.

[A1] $a<b$, $r\in\mathbb N$ with $r\ge1$, $L$ vanishes on the evaluation functions of the zero polynomial and every nonzero formal polynomial of degree at most $r-1$, and $f$ has continuous derivatives through order $r$.

[F1] [[def-na-peano-kernel]]: $L(f)=\int_a^bf-\sum_iw_if(x_i)$ and $K_r(t)=L(g_{r,t})$, where $g_{r,t}(x)=(x-t)_+^{r-1}/(r-1)!$ for $r\ge2$ and $g_{1,t}(x)=\mathbf1_{\{x>t\}}$; the factorial image is positive and invertible.

[F2] [[def-higher-derivatives-and-smoothness]]: $f\in C^r([a,b])$ has continuous derivatives through order $r$, including one-sided endpoint derivatives.

[F3] [[thm-ftc-second-part]]: for a continuous derivative, integration over $[a,x]$ equals the endpoint increment of a primitive.

[F4] [[lem-derivative-of-a-power]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]]: polynomial powers and their products with derivatives obey the usual differentiation rules on each interval; together with FTC these give the integration-by-parts identity used below.

[F5] [[cor-repeated-riemann-integrals-on-rectangles]]: a continuous function on a closed rectangle has equal repeated Riemann integrals in either coordinate order.

[F6] [[thm-linearity-of-the-integral]] and [[thm-additivity-over-subintervals]]: integrals are linear and additive over adjacent intervals. [[def-factorial-and-falling-factorial]] supplies the natural factorials; their canonical real images in real denominators are the convention fixed by [F1].

[F7] [[thm-continuous-implies-integrable]]: continuous functions on closed intervals are Riemann-integrable.

[F8] [[thm-heine-cantor-metric]]: a continuous function on a compact metric rectangle is uniformly continuous.

[F9] [[lem-changing-a-function-at-finitely-many-points]]: changing finitely many values preserves Riemann integrability and leaves the integral unchanged.

[F10] [[cor-integrability-of-absolute-values-products-and-lattice-operations]] and [[thm-monotonicity-of-the-integral]]: products and absolute values of integrable functions are integrable, and pointwise order passes to their integrals.

[F11] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: every continuous real function on the compact interval $[a,b]$ is bounded and attains its extrema.

## Proof

1.1 We first establish Taylor's integral remainder by induction on the natural order $q$ ([[thm-induction-principle]]). For $r=1$, [F3] gives $f(x)=f(a)+\int_a^xf'(t)\,dt$. If the remainder formula holds at order $q\ge1$, put $u(t):=(x-t)^q/q!$. The product rule and FTC give $\int_a^xu'(t)f^{(q)}(t)\,dt=[u(t)f^{(q)}(t)]_a^x-\int_a^xu(t)f^{(q+1)}(t)\,dt$, and $u'(t)=-(x-t)^{q-1}/(q-1)!$. Rearranging yields $\int_a^x\frac{(x-t)^{q-1}}{(q-1)!}f^{(q)}(t)\,dt=\frac{(x-a)^q}{q!}f^{(q)}(a)+\int_a^x\frac{(x-t)^q}{q!}f^{(q+1)}(t)\,dt.$ Thus induction yields $f(x)=\sum_{j=0}^{r-1}f^{(j)}(a)(x-a)^j/j!+\int_a^x(x-t)^{r-1}f^{(r)}(t)/(r-1)!\,dt$. [given, F2, F3, F4, induction, algebra]

2.1 Extend the last integral to $[a,b]$ by setting its kernel to zero when $t\ge x$. With $P_{r-1}(x):=\sum_{j=0}^{r-1}f^{(j)}(a)(x-a)^j/j!$, the result is $f(x)=P_{r-1}(x)+\int_a^bg_{r,t}(x)f^{(r)}(t)\,dt$. Since $P_{r-1}$ is zero or has degree at most $r-1$, [A1] gives $L(P_{r-1})=0$. [given, A1, F1, F6, step 1.1]

3.1 Suppose first that $r\ge2$. The function $(x,t)\mapsto g_{r,t}(x)f^{(r)}(t)$ is continuous on $[a,b]^2$ because $r-1\ge1$ and $f^{(r)}$ is continuous. By [F5]–[F7], applying the integral part of $L$ to step 2.1 and interchanging the two rectangle integrals gives $\int_a^b(\int_a^bg_{r,t}(x)\,dx)f^{(r)}(t)\,dt$. Each finite evaluation term of $Q$ commutes with the $t$-integral by [F6]. Therefore $L(f)=\int_a^bL(g_{r,t})f^{(r)}(t)\,dt=\int_a^bK_r(t)f^{(r)}(t)\,dt$. The function $(x,t)\mapsto g_{r,t}(x)$ is uniformly continuous on the compact square by [F8], so its $x$-integral and its finite weighted evaluations vary continuously with $t$; hence $K_r$ is continuous and integrable. [given, F1, F2, F5, F6, F7, F8, step 2.1]

3.2 If $r=1$, exactness on constants gives $\sum_iw_i=b-a$. For $t$ outside the finite node set, [F1] gives $K_1(t)=(b-t)-\sum_{x_i>t}w_i$. It is bounded and affine between consecutive nodes. Extend each affine piece continuously to its closed subinterval; the resulting pieces are integrable by [F7] and add to an integrable piecewise function by [F6]. The kernel differs from that function at only finitely many nodes, so it is integrable and has the same integral by [F9]. Since $f'$ is continuous, [F10] makes $K_1f'$ integrable; changing the kernel values at the finite node set does not change that product integral by [F9]. By [F3]–[F4] and integration by parts, $\int_a^b(b-t)f'(t)\,dt=\int_a^bf(t)\,dt-(b-a)f(a)$, while $\sum_iw_i\int_a^{x_i}f'(t)\,dt=Q(f)-(b-a)f(a)$. Subtracting gives $\int_a^bK_1(t)f'(t)\,dt=L(f)$. [given, F1, F3, F4, F6, F7, F9, F10, step 2.1, algebra]

4.1 By [F2] and [F11], $f^{(r)}$ is bounded on $[a,b]$, so $\|f^{(r)}\|_\infty<\infty$. In either case, the kernel is integrable and $|K_r|$ is integrable by [F10]. Apply monotonicity in [F10] to $-|K_r|\|f^{(r)}\|_\infty\le K_r f^{(r)}\le |K_r|\|f^{(r)}\|_\infty$, and use the representation in step 3.1 or 3.2. This gives the asserted bound. [given, F2, F10, F11, step 3.1, step 3.2, algebra] ∎
