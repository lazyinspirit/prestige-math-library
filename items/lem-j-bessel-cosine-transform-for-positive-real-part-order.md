---
dependency_level: 0
id: lem-j-bessel-cosine-transform-for-positive-real-part-order
kind: lemma
title: "J-Bessel cosine transform for an order with positive real part"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-euler-gamma-function, thm-gamma-functional-equation, cor-gamma-function-has-no-zeros, thm-euler-gamma-function-is-holomorphic, thm-holomorphic-parameter-riemann-integral, thm-weierstrass-convergence-holomorphic-functions, thm-identity-theorem-holomorphic-functions]
justified_by: []
sources:
  references:
    - title: "David Joyner, corrected Kuznetsov-Bruggeman formula, Appendix 2.1 Lemma 2.4; fixed-order local reconstruction"
      url: https://drive.google.com/uc?export=download&id=1l-a5ojcwqWUsuBe6UlNoLgJ-kyNxOI89
---

## Statement

For $\operatorname{Re}\nu>0$ and $x>0$, put

$$J_\nu(x)=\sum_{k=0}^\infty\frac{(-1)^k(x/2)^{2k+\nu}}{k!\,\Gamma(k+\nu+1)},$$

using the real logarithm. For every $a\geq0$ the following integral converges absolutely and equals

$$\int_0^\infty J_\nu(x)\cos(ax/2)\frac{dx}{x}=\begin{cases}\cos(\nu\arcsin(a/2))/\nu,&0\leq a\leq2,\\\displaystyle\frac{\cos(\pi\nu/2)}{\nu\left(a/2+\sqrt{(a/2)^2-1}\right)^\nu},&a\geq2.\end{cases}$$

The two formulas agree at $a=2$. In particular this applies to $\nu=\epsilon+2ir$ for each fixed $r\in\mathbb R$ and $\epsilon>0$. No uniform bound in $r$ or interchange with an additional spectral integral is asserted.

## Statement references

[Joyner, corrected Kuznetsov–Bruggeman paper, Appendix2.1, Lemma2.4](https://drive.google.com/uc?export=download&id=1l-a5ojcwqWUsuBe6UlNoLgJ-kyNxOI89)

[[thm-gamma-functional-equation]]

[[cor-gamma-function-has-no-zeros]]

## Facts & Assumptions

[F1] The Euler Gamma integral on the right half-plane, its recurrence and nonvanishing are proved locally in [[def-euler-gamma-function]], [[thm-gamma-functional-equation]], [[thm-euler-gamma-function-is-holomorphic]] and [[cor-gamma-function-has-no-zeros]].

[F2] Finite parameter integrals are holomorphic and locally uniform limits preserve holomorphy. [[thm-holomorphic-parameter-riemann-integral]] [[thm-weierstrass-convergence-holomorphic-functions]]

[F3] Holomorphic functions agreeing on a real interval inside a connected domain agree throughout the domain. [[thm-identity-theorem-holomorphic-functions]]

## Proof

**Given:** A fixed $\nu$ with positive real part and $a\geq0$.

1.1 The recurrence in F1 bounds the successive-term ratio on every compact positive $x$ interval by $C/((k+1)|k+\nu+1|)$, which tends to zero uniformly. The same is true after one or two derivatives, since only polynomial factors in $k$ are added. Thus the series and those derivatives converge uniformly there. Differentiating gives $x^2J_\nu''+xJ_\nu'+(x^2-\nu^2)J_\nu=0$, and near zero $J_\nu(x)=x^\nu/(2^\nu\Gamma(\nu+1))(1+O_\nu(x^2))$, with the corresponding differentiated expansion. [F1, given, algebra]

2.1 Set $v(x)=\sqrt{x}J_\nu(x)$ for $x\geq1$. The equation becomes $v''+v=-(1/4-\nu^2)v/x^2$. Variation of constants, verified by differentiating its sine-kernel integral and its initial values at one, implies $|v(x)|+|v'(x)|\leq C_\nu+A_\nu\int_1^x(|v(t)|+|v'(t)|)t^{-2}\,dt$. To bound this directly, majorize its right side by $G(x)=C_\nu+A_\nu\int_1^x(|v|+|v'|)t^{-2}dt$, taking $C_\nu\geq1$. Then $G'\leq A_\nu G/x^2$, so $G(x)\leq C_\nu e^{A_\nu}$. Hence $J_\nu(x),J_\nu'(x)=O_\nu(x^{-1/2})$. Together with step 1.1 this proves absolute integrability of $J_\nu(x)/x$ on $(0,\infty)$. These constants are for fixed order only. [step 1.1, construct, algebra]

3.1 For $\operatorname{Re}s>0$, define $F(s)=\int_0^\infty e^{-sx}J_\nu(x)dx/x$. Steps 1.1–2.1 give local uniform domination for this integral and its first two derivatives in $s$: at infinity use $e^{-\delta x}$ times a fixed power of $x$, and at zero use $x^{\operatorname{Re}\nu-1}$. Finite truncations and F2 prove holomorphy. Multiply the Bessel equation by $e^{-sx}/x$ and integrate by parts; all boundary terms vanish by those same bounds. The result is $(s^2+1)F''+sF'-\nu^2F=0$. [F2, step 1.1, step 2.1, algebra]

4.1 For real $s>0$, put $\tau=\operatorname{arsinh}s$. The equation is $d^2F/d\tau^2-\nu^2F=0$, giving $F=Ae^{\nu\tau}+Be^{-\nu\tau}$ by two elementary integrations of the factored first-order operators. The near-zero expansion in step 1.1 and the Euler integral in F1 give $F(s)\sim(2s)^{-\nu}/\nu$ as real $s\to\infty$: integrate the leading term, bound its $O(x^2)$ remainder by $O_\nu(s^{-\operatorname{Re}\nu-2})$, and bound the tail $x\geq1$ exponentially using step 2.1. Since $\operatorname{Re}\nu>0$, this forces $A=0$, $B=1/\nu$. Thus $F(s)=(s+\sqrt{1+s^2})^{-\nu}/\nu$, first for real $s>0$ and then by F3 on the right half-plane, with the branch positive on the positive real axis. [F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $\epsilon>0$ the cosine integral with damping $e^{-\epsilon x}$ is $[F(\epsilon+ia/2)+F(\epsilon-ia/2)]/2$. Absolute integrability from step 2.1 permits $\epsilon\downarrow0$. For $0\leq a<2$, the two logarithms of $s+\sqrt{1+s^2}$ tend to $\pm i\arcsin(a/2)$, yielding the first formula. For $a>2$ they tend to $\log(a/2+\sqrt{(a/2)^2-1})\pm i\pi/2$, yielding the second. Continuity in $a$, again by the same integrable bound, gives their common value at $a=2$. This proves the identity with its precise fixed-order scope. [step 2.1, step 4.1, algebra] ∎

## Source limits

This proves the fixed positive-real-part-order cosine-transform ingredient rather than importing the cited integral table. Passing to imaginary order inside the Kuznetsov spectral integral, uniform domination, and the geometric Zagier–Selberg identity remain separate obligations.
