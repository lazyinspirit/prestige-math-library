---
id: lem-simpson-panel-peano-kernel
kind: lemma
title: Peano kernel identity for one Simpson panel
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-composite-simpson-rule
  - def-higher-derivatives-and-smoothness
  - thm-integration-by-parts
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-ftc-second-part
  - thm-algebra-of-continuous-functions
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-additivity-over-subintervals
justified_by: []
proof_strategy: direct
axiom_use: None. The proof uses integration by parts on two closed subintervals and no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; complete chapter read
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; §5.6.2 and Exercise 5.6.4
---

## Statement

Let $a<b$, put $L=b-a$ and $m=(a+b)/2$, and let $f\in C^4([a,b])$. Define
the one-block Simpson value and its kernel by

$$S(f;a,b):=\frac{L}{6}\bigl(f(a)+4f(m)+f(b)\bigr),\qquad K_{a,b}(x):=\begin{cases}\frac{(x-a)^3(3(x-a)-2L)}{72},&a\le x\le m,\\\frac{(b-x)^3(3(b-x)-2L)}{72},&m\le x\le b.\end{cases}$$

Then

$$\int_a^b f(x)\,dx-S(f;a,b)=\int_a^bK_{a,b}(x)f^{(4)}(x)\,dx,$$

and $K_{a,b}\le0$ with
$\int_a^b|K_{a,b}(x)|\,dx=L^5/2880$. The value $S(f;a,b)$ is the one-block
specialization of [[alg-composite-simpson-rule]].

## Facts & Assumptions

**Given:** Reals $a<b$, $L=b-a$, $m=(a+b)/2$, and $f\in C^4([a,b])$.

[F1] [[alg-composite-simpson-rule]]: on two subintervals of equal width $L/2$, the Simpson output is $\frac L6(f(a)+4f(m)+f(b))$.

[F2] [[def-higher-derivatives-and-smoothness]]: $C^4([a,b])$ means all derivatives through order four exist and are continuous, with endpoint derivatives taken from within the interval.

[F3] [[thm-integration-by-parts]]: for differentiable $u,v$ with integrable derivatives, $\int u v'=[uv]-\int u'v$ on a closed interval.

[F4] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: every continuous function on a closed nondegenerate interval is Riemann integrable.

[F5] [[thm-ftc-second-part]]: an integrable derivative has integral equal to the endpoint increment of its antiderivative.

[F6] [[thm-algebra-of-continuous-functions]]: constants and the identity are continuous; sums, scalar multiples and products preserve continuity, so the polynomial pieces of $K_{a,b}$ and their products with $f^{(4)}$ are continuous on each half-panel.

[F7] [[lem-derivative-of-a-power]]: $(x^k)'=kx^{k-1}$ for every integer $k\ge1$.

[F8] [[thm-algebra-of-derivatives]]: derivatives of sums and scalar multiples are the corresponding sums and scalar multiples of their derivatives.

[F9] [[thm-chain-rule]]: the derivative of a differentiable composition is the outer derivative at the image multiplied by the inner derivative.

[F10] [[thm-additivity-over-subintervals]]: the integral over two adjacent closed subintervals is the sum of their integrals.

## Proof

1.1 On the left half, $K_{a,b}(x)=(3y^4-2Ly^3)/72$ with $y=x-a$; hence $K^{(4)}=1$, $K(a)=K'(a)=K''(a)=0$, and at $m$ its value and first two derivatives are $-L^4/1152$, $0$, and $L^2/24$, while $K'''(m-)=L/3$. The right-half formula gives $K^{(4)}=1$, $K(b)=K'(b)=K''(b)=0$, and $K'''(m+)=-L/3$. Thus $K,K',K''$ match at $m$. Each polynomial formula for $K$ and its product with the continuous $f^{(4)}$ is continuous on its closed half by [F2] and [F6]. Both formulas agree at $m$, so $K$ and $Kf^{(4)}$ are continuous on $[a,b]$; also $f$ is continuous by [F2]. These functions and their restrictions are integrable by [F4]. [given, F2, F4, F6, algebra]

2.1 On each closed half, every derivative $K^{(r)}$ for $0\le r\le4$ is polynomial and continuous by [F6], and every $f^{(s)}$ for $0\le s\le4$ is continuous by [F2]. They are all integrable by [F4], so the four applications of integration by parts [F3] satisfy their derivative-integrability hypotheses. They give $\int K_{a,b}f^{(4)}=[B]+\int f$, where $B=Kf'''-K'f''+K''f'-K'''f$ and the bracket is the endpoint difference for that half. Summing the brackets, the terms at $m$ involving $K,K',K''$ cancel, while the jump in $K'''$ contributes $-2L f(m)/3$; the outer endpoints contribute $-L(f(a)+f(b))/6$. Additivity [F10] combines both half-integrals of $Kf^{(4)}$ and of $f$; the remaining integral is $\int_a^b f$ because $K^{(4)}=1$. By [F1], this is precisely $\int_a^b f-S(f;a,b)$, proving the identity. [F1, F2, F3, F4, F6, F10, step 1.1, algebra]

3.1 Since $0\le x-a\le L/2$ on the left half, $3(x-a)-2L<0$, so $K_{a,b}\le0$ there; the right formula gives the same sign. Define $H(x)=\frac{3}{5}(x-a)^5-\frac{L}{2}(x-a)^4$ on $[a,m]$. The power rule [F7], chain rule [F9], and sum/scalar rules [F8] give $H'(x)=3(x-a)^4-2L(x-a)^3$. By the FTC [F5], additivity [F10], and symmetry of the two kernel pieces, and $H(m)-H(a)=-L^5/80$, $\int_a^b|K_{a,b}|=-2(H(m)-H(a))/72=L^5/2880$. [F5, F7, F8, F9, F10, step 1.1, algebra] ∎
