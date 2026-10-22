---
id: lem-ip-lm-step-existence-and-residual-forcing
kind: lemma
title: The regularized LM step and residual-forcing parameter exist
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-regularized-levenberg-marquardt
  - lem-ip-lm-product-condition-implies-range-approximation
  - def-countable-choice
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - cor-inner-product-induces-a-norm
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-intermediate-value
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 11.8 and its proof"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Inverse Problems – Applications and Solution Strategies, PDF p. 63"
      url: "https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice. Let $X,Y$ be real Hilbert spaces, let $T:X\to Y$ be
a bounded linear operator, let $r\in Y$ be nonzero, and let
$\sigma\in(0,1)$ and $\gamma>1$. Suppose that a fixed $v\in X$ satisfies
$$\|Tv-r\|_Y\le\frac{\sigma}{\gamma}\|r\|_Y.$$
For each $\alpha>0$, the functional
$$\Phi_\alpha(h):=\frac12\|Th-r\|_Y^2+\frac\alpha2\|h\|_X^2\qquad(h\in X)$$
has the unique global minimizer
$$h_\alpha=(T^*T+\alpha I_X)^{-1}T^*r,$$
where $T^*$ is the Hilbert adjoint and $I_X$ is the identity on $X$. Moreover,
there exists at least one $\alpha>0$ for which
$$\|Th_\alpha-r\|_Y=\sigma\|r\|_Y.$$

## Statement references

[[alg-ip-regularized-levenberg-marquardt|The regularized linearized LM subproblem and forcing rule]]

[[lem-ip-lm-product-condition-implies-range-approximation|Local range-approximation bound]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-bounded-linear-operator|Bounded linear operators]]

[[def-operator-norm|Operator norm]]

[[def-real-and-complex-inner-product-space|Real inner-product identities]]

[[cor-inner-product-induces-a-norm|Triangle inequality for the Hilbert norm]]

[[def-hilbert-space-adjoint|Hilbert adjoint under Countable Choice]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-countable-choice|Axiom of Countable Choice]]

[[lem-hilbert-tikhonov-normal-operator-invertible|Shifted normal operator is invertible]]

[[thm-intermediate-value|Intermediate value theorem]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 11.8 and its proof](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, *Inverse Problems – Applications and Solution Strategies*, PDF p. 63](https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf)

## Facts & Assumptions

**Given:** Countable Choice; real Hilbert spaces $X,Y$; a bounded linear map $T:X\to Y$ with Hilbert adjoint $T^*$; $r\ne0$; $0<\sigma<1$; $\gamma>1$; and $v\in X$ with $\|Tv-r\|\le(\sigma/\gamma)\|r\|$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, permits a choice from each countable family of nonempty sets ([[def-countable-choice]]). It is the only choice axiom assumed here.

[F1] The Hilbert adjoint satisfies $\langle Tx,z\rangle_Y=\langle x,T^*z\rangle_X$ for every $x\in X,z\in Y$ ([[def-hilbert-space-adjoint]]).

[F2] For every $\alpha>0$, $T^*T+\alpha I_X$ is bijective with inverse norm at most $1/\alpha$ ([[lem-hilbert-tikhonov-normal-operator-invertible]]).

[F3] Since $T$ is bounded linear, there is an operator norm with $\|Tw\|_Y\le\|T\|\,\|w\|_X$ for every $w\in X$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F4] In a real Hilbert space, $\|w\|^2=\langle w,w\rangle$ and the inner product is symmetric and bilinear ([[def-real-and-complex-inner-product-space]]).

[F5] A continuous real function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F6] The norm satisfies the triangle inequality, hence $|\|u\|-\|v\||\le\|u-v\|$ ([[cor-inner-product-induces-a-norm]]).

## Proof

1.1 Fix $\alpha>0$ and write $B_\alpha:=T^*T+\alpha I_X$. By [F2], $B_\alpha$ is bijective, so $h_\alpha:=B_\alpha^{-1}T^*r$ is defined and satisfies $T^*(Th_\alpha-r)+\alpha h_\alpha=0$. [A1, F1, F2, given, construct]

2.1 For any $h\in X$, set $d:=h-h_\alpha$. Expanding with [F4] gives $\Phi_\alpha(h)-\Phi_\alpha(h_\alpha)=\langle Th_\alpha-r,Td\rangle_Y+\alpha\langle h_\alpha,d\rangle_X+\frac12\|Td\|_Y^2+\frac\alpha2\|d\|_X^2.$ The first two terms sum to $\langle T^*(Th_\alpha-r)+\alpha h_\alpha,d\rangle_X=0$ by [F1] and step 1.1. The remaining terms are nonnegative, and because $\alpha>0$ their sum vanishes only when $d=0$. Thus $h_\alpha$ is the unique global minimizer and $\Phi_\alpha(h_\alpha)\le\Phi_\alpha(0)$, so $\|h_\alpha\|_X\le\|r\|_Y/\sqrt\alpha$. [F1, F2, F4, step 1.1, algebra]

3.1 Define $f(\alpha):=\|Th_\alpha-r\|_Y$. For $\alpha,\beta>0$, the inverse identity $B_\alpha^{-1}-B_\beta^{-1}=(\beta-\alpha)B_\alpha^{-1}B_\beta^{-1}$ and [F2] give $h_\alpha-h_\beta=(\beta-\alpha)B_\alpha^{-1}h_\beta$. Therefore, when $\alpha,\beta$ lie near a fixed $\alpha_0>0$, $\|h_\alpha-h_\beta\|_X\le|\beta-\alpha|\frac{\|r\|_Y}{\alpha\sqrt\beta},$ which tends to zero with $|\beta-\alpha|$. Thus $h_\alpha$ and $f(\alpha)$ are continuous on $(0,\infty)$, using [F6] for continuity of the norm. [F2, F3, F6, step 1.1, step 2.1, algebra]

3.2 By step 2.1 and [F3], $\|Th_\alpha\|_Y\le\|T\|\|r\|_Y/\sqrt\alpha\to0$ as $\alpha\to\infty$. The reverse triangle inequality from [F6] gives $|f(\alpha)-\|r\|_Y|\le\|Th_\alpha\|_Y$, so $f(\alpha)\to\|r\|_Y>\sigma\|r\|_Y$. [F3, F6, step 2.1, given, algebra]

3.3 Comparing the minimizer with the fixed vector $v$ gives $f(\alpha)^2+\alpha\|h_\alpha\|_X^2\le\|Tv-r\|_Y^2+\alpha\|v\|_X^2.$ Because $\|Tv-r\|_Y\le(\sigma/\gamma)\|r\|_Y<\sigma\|r\|_Y$, there is a strict squared-norm gap below $\sigma^2\|r\|_Y^2$. Also $v\ne0$, since $v=0$ would contradict the range bound and $r\ne0$. Choose $a>0$ small enough that $\|Tv-r\|_Y^2+a\|v\|_X^2<\sigma^2\|r\|_Y^2$. The minimizer comparison in this step gives $f(a)^2\le\|Tv-r\|_Y^2+a\|v\|_X^2<\sigma^2\|r\|_Y^2$, so $f(a)<\sigma\|r\|_Y$. [given, step 2.1, construct, choose, algebra]

4.1 By step 3.2, choose $b>a$ with $f(b)>\sigma\|r\|_Y$. Continuity from step 3.1 and [F5] give $\alpha\in[a,b]$ such that $f(\alpha)=\sigma\|r\|_Y$. Since $a>0$, this is an admissible positive parameter and proves the forcing claim. [F5, step 3.1, step 3.2, step 3.3, construct] ∎
## Remarks

The proof uses Countable Choice through the stated Hilbert-adjoint and normal-operator interfaces; it does not use full AC, DC, or HB. The scalar bisection or root-finding cost of a numerical parameter selector is not covered by this existence lemma.
