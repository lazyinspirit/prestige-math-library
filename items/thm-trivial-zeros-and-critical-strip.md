---
id: thm-trivial-zeros-and-critical-strip
kind: theorem
title: "The only zeros of zeta on the nonpositive real axis are the negative even integers, and every other zero lies in the open critical strip"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-zeta-functional-equation, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane, thm-gamma-meromorphic-continuation, cor-gamma-function-has-no-zeros, def-riemann-zeta-function]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For each integer $m\ge1$,

$$\zeta(-2m)=0.$$

These are the only zeros of $\zeta$ on the nonpositive real axis. Every other
zero $\rho$ of $\zeta$ satisfies $0<\operatorname{Re}\rho<1$. Moreover, if
$\rho$ is a nontrivial zero, then so are $1-\rho$ and $\overline{\rho}$.

## Facts & Assumptions

**Given:** The classical functional equation.

[L1] Zeta satisfies
$$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$$
([[thm-riemann-zeta-functional-equation]]).

[L2] Zeta has no zeros on $\operatorname{Re}s\ge1$
([[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]]).

[L3] Gamma extends meromorphically to $\mathbb C$ with poles only at the
nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

[L4] Gamma has no zeros ([[cor-gamma-function-has-no-zeros]]).

[L5] On $\operatorname{Re}s>1$, zeta is given by the Dirichlet series
$\sum_{n\ge1}n^{-s}$ ([[def-riemann-zeta-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $m\ge1$. Substituting $s=-2m$ into [L1], the sine factor vanishes, $\Gamma(1+2m)$ is finite by [L3], and $\zeta(1+2m)\ne0$ by [L2]. Hence $\zeta(-2m)=0$. [L1, L2, L3, given, algebra]

2.1 For $x<0$ real and not a negative even integer, the sine factor in [L1] is nonzero. Also $1-x>1$, so [L2] gives $\zeta(1-x)\ne0$, and [L3] with [L4] gives $\Gamma(1-x)\ne0$. Therefore [L1] forces $\zeta(x)\ne0$. To handle $x=0$, let $s\to0$ in [L1]: one has $\sin(\pi s/2)\sim \pi s/2$, $\Gamma(1-s)\to1$, and zeta has a simple residue-one pole at $1$, so $\zeta(1-s)\sim -1/s$. Thus $\zeta(0)=-1/2\ne0$. Hence the only nonpositive real zeros are the numbers $-2,-4,\dots$. [step 1.1, L1, L2, L3, L4, algebra]

3.1 Now let $\rho$ be any zero of zeta that is not one of the negative even integers. If $\operatorname{Re}\rho\le0$, then [L2] gives $\zeta(1-\rho)\ne0$ because $\operatorname{Re}(1-\rho)\ge1$, and [L4] gives $\Gamma(1-\rho)\ne0$ unless $1-\rho$ is a nonpositive integer, which cannot happen when $\operatorname{Re}\rho\le0$. Since the sine factor in [L1] vanishes only at even integers, step 2.1 rules out that possibility. Therefore [L1] cannot vanish at $\rho$, a contradiction. So every zero not listed in step 1.1 satisfies $\operatorname{Re}\rho>0$. Applying [L2] again excludes $\operatorname{Re}\rho\ge1$, so every remaining zero lies in $0<\operatorname{Re}\rho<1$. [step 1.1, step 2.1, L1, L2, L4, algebra]

4.1 If $\rho$ is a nontrivial zero, then step 3.1 places it in the open critical strip. The sine and Gamma factors in [L1] are therefore finite and nonzero, so the functional equation gives $\zeta(1-\rho)=0$. On $\operatorname{Re}s>1$, the Dirichlet series in [L5] satisfies $\overline{\zeta(s)}=\zeta(\overline s)$ term by term. Meromorphic continuation therefore extends this identity to all $s\ne1$, so $\zeta(\rho)=0$ implies $\zeta(\overline\rho)=0$. [step 3.1, L1, L3, L4, L5, algebra] ∎
