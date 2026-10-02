---
id: cex-interior-estimates-cannot-use-distance-zero-to-the-boundary
kind: counterexample
title: Boundary-scale derivative blowup despite bounded ball data
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
deps: [def-countable-choice, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, cor-interior-laplacian-gradient-estimate, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus, def-euclidean-inner-product, def-euclidean-spheres-and-closed-balls, lem-of-square-monotone, thm-cauchy-schwarz-and-the-euclidean-norm, lem-power-monotone, thm-real-power-continuity-and-derivatives, thm-real-power-agrees-with-rational-exponent, thm-exponential-product-limit, cor-exponential-reciprocal-and-positivity, def-real-exponential-function-and-e]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–49; Poisson representation and the interior estimates of the Dirichlet problem on a ball"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, derivative estimates on balls compactly contained in the domain"
---

## Statement refuted

Assume Countable Choice and $n\ge3$. Use one-based coordinate and basis labels $x_j:=x_{j-1}^{\mathrm{can}}$, $e_j:=e_{j-1}^{\mathrm{can}}$ for $1\le j\le n$. For each integer $k\ge2$, on the unit ball $B_1(0)\subseteq\mathbb R^n$ put
$$u_k(x)=\operatorname{Re}\bigl((x_1+ix_2)^k\bigr),\qquad g_k:=u_k|_{\partial B_1(0)}.$$
Each $u_k$ is the Poisson extension of the continuous boundary datum $g_k$, with $\lVert g_k\rVert_\infty\le1$. At the interior point $x_k=(1-1/k)e_1$, whose distance to the boundary sphere is $1/k$,
$$\lvert\partial_1u_k(x_k)\rvert=k\Bigl(1-\frac1k\Bigr)^{k-1}\longrightarrow+\infty .$$
Hence no interior gradient bound of the form $\lvert\nabla u(x)\rvert\le C(n)\lVert g\rVert_\infty$, with a constant depending only on the fixed ball and on the boundary supremum norm, can hold uniformly over $B_1(0)$; the available interior estimate must carry the factor $r^{-1}$, the inverse of the distance to the boundary.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, and an integer $k\ge2$.

[F1] Ball Dirichlet theorem: for every real or complex $g\in C(\partial B_R(a))$ the Poisson integral $U_g$ is smooth and harmonic on $B_R(a)$, extends continuously to the closure with trace $g$, and is the unique function in $C^2(B_R(a))\cap C(\overline{B_R(a)})$ that is harmonic on $B_R(a)$ and equals $g$ on $\partial B_R(a)$ ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]]).

[F2] Complex polynomials are entire ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]), and the $C^2$ real and imaginary parts of a holomorphic function on an open subset of $\mathbb C$ satisfy Laplace's equation: $u_{xx}+u_{yy}=0$ ([[thm-c2-holomorphic-components-are-harmonic]]). Consequently, for every integer $k\ge1$ the polynomial $p_k(s,t)=\operatorname{Re}((s+it)^k)$ is harmonic on $\mathbb C\cong\mathbb R^2$, that is $\partial_s^2p_k+\partial_t^2p_k=0$: it is the real part of the entire function $z\mapsto z^k$, and it is a polynomial in $(s,t)$, hence of class $C^\infty$.

[F3] For a $C^2$ function $f$ on an open set the Laplacian is $\Delta f=\sum_i\partial_i\partial_if$, the partial derivative $\partial_i$ is the derivative at $t=0$ of the section $t\mapsto f(x+te_i)$, and a second partial derivative in a coordinate on which $f$ does not depend vanishes identically ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]]).

[F4] Complex modulus and Euclidean norm: $|w|=\sqrt{(\operatorname{Re}w)^2+(\operatorname{Im}w)^2}$, so $(\operatorname{Re}w)^2\le|w|^2$, and $|w_1w_2|=|w_1||w_2|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]); $\lVert x\rVert_2=\sqrt{\sum_ix_i^2}$ and $\partial B_1(0)=\{x:\lVert x\rVert_2=1\}$ ([[def-euclidean-inner-product]], [[def-euclidean-spheres-and-closed-balls]]); $\lVert\cdot\rVert_2$ satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]); and for nonnegative reals $r,s$ one has $r\le s\iff r^2\le s^2$ ([[lem-of-square-monotone]]), while $0\le a\le1$ and $m\ge1$ give $a^m\le1$ ([[lem-power-monotone]]).

[F5] For $t>0$ and real $\alpha$ one has $(t^\alpha)'=\alpha t^{\alpha-1}$ for the real power, and for positive $t$ the real power $t^m$ with integer $m$ agrees with the integer power $t^m$ ([[thm-real-power-continuity-and-derivatives]], [[thm-real-power-agrees-with-rational-exponent]]).

[F6] Interior gradient estimate: if $u\in C^2(B_r(a))\cap L^\infty(B_r(a))$, $0<\alpha<1$, and $f\in C^{0,\alpha}(B_r(a))$ has finite Hölder seminorm with $-\Delta u=f$ pointwise, then $\lVert Du\rVert_{\infty;B_{r/2}(a)}\le C_n\bigl(r^{-1}\lVert u\rVert_{\infty;B_r(a)}+r\lVert f\rVert_{\infty;B_r(a)}\bigr)$, with $C_n$ depending only on $n$ ([[cor-interior-laplacian-gradient-estimate]]).

[F7] For every real $x$, $\lim_{m\to\infty}(1+x/m)^m=\exp x$ ([[thm-exponential-product-limit]]), and $\exp(-x)=1/\exp(x)>0$ for every real $x$, so $\exp(-1)>0$ ([[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]]).

[F8] Countable Choice is the standing hypothesis ([[def-countable-choice]]).

## Counterexample

**Proof technique:** direct.

1.1 Work under [F8], fix $n\ge3$ and $k\ge2$, and define $u_k:\mathbb R^n\to\mathbb R$ by $u_k(x):=\operatorname{Re}((x_1+ix_2)^k)$, so that $u_k(x)=p_k(x_1,x_2)$ for the polynomial $p_k$ of [F2]; in particular $u_k$ is a polynomial, hence of class $C^\infty$ on $\mathbb R^n$. It is harmonic on $\mathbb R^n$: it does not depend on $x_3,\dots,x_n$, so those second partial derivatives vanish by [F3], while $\partial_1^2u_k$ and $\partial_2^2u_k$ are the corresponding partial derivatives of $p_k$ evaluated at $(x_1,x_2)$, so $\Delta u_k=\partial_1^2u_k+\partial_2^2u_k+\sum_{i\ge3}\partial_i^2u_k=\partial_1^2p_k+\partial_2^2p_k=0$ by [F2] and [F3]. [given, F2, F3, F8]

2.1 Bounded continuous trace. The restriction $g_k=u_k|_{\partial B_1(0)}$ of the polynomial $u_k$ is continuous on $\partial B_1(0)$. For $y\in\partial B_1(0)$ put $w:=y_1+iy_2$, so that $g_k(y)=\operatorname{Re}(w^k)$; by [F4] $(\operatorname{Re}w^k)^2\le|w^k|^2=|w|^{2k}=(y_1^2+y_2^2)^k$ and $y_1^2+y_2^2\le\lVert y\rVert_2^2=1$, so $(y_1^2+y_2^2)^k\le1$ by the last two clauses of [F4]; taking nonnegative square roots with [F4] gives $|g_k(y)|\le1$. Hence $\lVert g_k\rVert_\infty\le1$. Moreover the same computation with $\lVert x\rVert_2\le1$ in place of $\lVert y\rVert_2=1$ gives $\sup_{B_1(0)}|u_k|\le1$. [step 1.1, F4]

2.2 The partial derivative at $x_k$. Write $t_0:=1-1/k>0$, so $x_k=t_0e_1$. By [F3] the partial derivative $\partial_1u_k(x_k)$ is the derivative at $t=0$ of the one-variable map $t\mapsto u_k(x_k+te_1)=\operatorname{Re}\bigl(((t_0+t)+i\cdot0)^k\bigr)=(t_0+t)^k$, for $t$ near $0$ (where $t_0+t>0$); by [F5] this derivative equals $k(t_0+t)^{k-1}$ at $t=0$, so $\partial_1u_k(x_k)=k(1-1/k)^{k-1}>0$. [step 1.1, F5]

3.1 Poisson representation. By [F1] with $R=1$, $a=0$ and datum $g_k\in C(\partial B_1(0))$, the Poisson integral $U_{g_k}$ is smooth and harmonic on $B_1(0)$, continuous on $\overline{B_1(0)}$ with trace $g_k$, and is the unique such function. Steps 1.1 and 2.1 show that $u_k\in C^2(B_1(0))\cap C(\overline{B_1(0)})$ is harmonic on $B_1(0)$ with trace $g_k$; hence $u_k=U_{g_k}$: each $u_k$ is exactly the Poisson extension of its boundary datum. [step 1.1, step 2.1, F1]

3.2 Divergence at boundary scale. By [F7] applied to $x=-1$, the sequence $a_k:=(1-1/k)^k=(1+(-1)/k)^k$ converges to $\exp(-1)>0$; choose $K$ with $a_k\ge\exp(-1)/2$ for all $k\ge K$. Since $0<1-1/k\le1$ for $k\ge2$, one has $(1-1/k)^{k-1}=a_k/(1-1/k)\ge a_k\ge\exp(-1)/2$ for all $k\ge K$, and therefore step 2.2 gives $\lvert\partial_1u_k(x_k)\rvert\ge k/(2e)$ for $k\ge K$; given any real $M$, every $k\ge\max\{K,2eM\}$ satisfies $k/(2e)\ge M$, so $\lvert\partial_1u_k(x_k)\rvert\to+\infty$. [step 2.2, F7]

4.1 The correct estimate carries the inverse distance, and no distance-free bound can hold. First, $x_k$ lies in $B_1(0)$ with $\lVert x_k\rVert_2=1-1/k$, and for $y\in\partial B_1(0)$ the triangle inequality of [F4] gives $\lVert x_k-y\rVert_2\ge\lVert y\rVert_2-\lVert x_k\rVert_2=1/k$, with equality for $y=e_1$; so the distance from $x_k$ to the boundary is exactly $1/k$, and the ball $B_{1/k}(x_k)$ is contained in $B_1(0)$ because $\lVert z\rVert_2\le\lVert z-x_k\rVert_2+\lVert x_k\rVert_2<1/k+1-1/k=1$ for $z\in B_{1/k}(x_k)$. Second, $u_k$ and $f:=0$ satisfy the hypotheses of [F6] with centre $x_k$ and radius $r=1/k$, so $\lvert\partial_1u_k(x_k)\rvert\le\lVert Du_k\rVert_{\infty;B_{1/(2k)}(x_k)}\le C_nk\lVert u_k\rVert_{\infty;B_{1/k}(x_k)}\le C_nk$, using $\lVert u_k\rVert_{\infty;B_1(0)}\le1$ from step 2.1: the scale-aware bound grows like $1/r=k$, exactly as the family $u_k$ does, so [F6] is not contradicted. Third, a bound with a constant depending only on $n$ and on the boundary supremum norm would give $\lvert\partial_1u_k(x_k)\rvert\le C(n)$ for every $k\ge2$, since $\lVert g_k\rVert_\infty\le1$ by step 2.1 and $u_k$ is the harmonic extension of $g_k$ by step 3.1; that is impossible because step 3.2 makes the left-hand side tend to $+\infty$. Hence any interior gradient estimate for harmonic functions must degenerate as the distance to the boundary tends to zero. [step 2.1, step 3.1, step 3.2, F4, F6]

5.1 Summary. The harmonic polynomials $u_k(x)=\operatorname{Re}((x_1+ix_2)^k)$ on the unit ball have Poisson boundary data $g_k$ with $\lVert g_k\rVert_\infty\le1$ and satisfy $\lvert\partial_1u_k(x_k)\rvert=k(1-1/k)^{k-1}\to+\infty$ at points $x_k$ of distance $1/k$ from the boundary, so the interior gradient bound cannot be extended to points whose distance to the boundary tends to zero with a constant depending only on the fixed ball and the boundary supremum norm. [step 1.1, step 3.1, step 3.2, step 4.1] ∎
