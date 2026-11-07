---
dependency_level: 2
id: lem-voronoi-divisor-oscillatory-series-convergence
kind: lemma
title: "Bounded convergence of the divisor square-root oscillatory series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [lem-voronoi-damped-sine-cosine-kernel-asymptotic, lem-voronoi-damped-divisor-kernel-inversion, thm-divisor-counting-summatory-estimate, thm-divisor-function-subpolynomial-bound, thm-integration-by-parts, thm-substitution-for-improper-integrals, lem-abel-summation-for-complex-series]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A simple proof of Voronoi's identity, Astérisque 209 (1992), 265–274"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "Section 8, bounded and uniform convergence proof"
---

## Statement

Let $d(n)$ be the number of positive divisors of $n$. For every $x>0$ the series
$$\sum_{n=1}^\infty d(n)x^{1/4}n^{-3/4}\cos(4\pi\sqrt{nx}-\pi/4)$$
converges. Its partial sums are uniformly bounded for $x$ in any fixed compact interval in $(0,\infty)$, and the convergence is uniform on every such interval containing no integer.

## Statement references

[Meurman, Section 8](https://numdam.org/item/AST_1992__209__265_0.pdf)

## Facts & Assumptions

**Given:** The positive-divisor function and real $x>0$. Integrals below are Riemann integrals, with improper endpoints taken separately.

[F1] [[lem-voronoi-damped-sine-cosine-kernel-asymptotic]] gives $F(t,v)=t^{1/4}e^{-2v\sqrt t}\cos(4\pi\sqrt t-\pi/4)/(2\sqrt2)+O(t^{-1/4})$, uniformly $t\ge1$, $0\le v\le1/2$.

[F2] [[lem-voronoi-damped-divisor-kernel-inversion]] defines $A(t)=\sum_{n<t}d(n)+d(t)/2-t(\log t+2\gamma-1)-1/4$ and $A_v(t)=(2/\pi)\sum_nd(n)F(nt,v)/n$, and proves $\int_a^b|A_v-A|\to0$ on every fixed positive compact interval. Its damped series converges absolutely.

[F3] [[thm-divisor-counting-summatory-estimate]] gives $D(t)=t(\log t+2\gamma-1)+O(\sqrt t)$ for $t\ge1$; [[thm-divisor-function-subpolynomial-bound]] gives $d(n)\ll_\varepsilon n^\varepsilon$, hence $A(t)=O(\sqrt t)$ and $\sum_nd(n)n^{-5/4}<\infty$.

[F4] [[thm-integration-by-parts]], applied componentwise, and [[thm-substitution-for-improper-integrals]] give the compact calculus identities and changes of variable used below. [[lem-abel-summation-for-complex-series]] gives finite summation by parts; its integral form here also follows directly by summing integrals over the finitely many unit intervals.

## Proof

1.1 Fix $J=[A,B]\subset(0,\infty)$ and $2<a<b$, initially with noninteger endpoints. Set $f(t,x)=x^{1/4}t^{-3/4}\cos(4\pi\sqrt{tx}-\pi/4)$ and $S=\sum_{a<n\le b}d(n)f(n,x)$. Integration on each unit interval gives $S=f(b,x)D(b)-f(a,x)D(a)-\int_a^bD(t)\partial_tf(t,x)dt$. In the integral, $D(t)=t(\log t+2\gamma-1)+A(t)+1/4$ except at finitely many integer points, which do not change a Riemann integral. The derivative is $\partial_tf=-(3/4)x^{1/4}t^{-7/4}\cos(\theta_x)-2\pi x^{3/4}t^{-5/4}\sin(\theta_x)$, where $\theta_x=4\pi\sqrt{tx}-\pi/4$. The $A$ boundary terms and the first derivative term against $A=O(\sqrt t)$ are $O_J(a^{-1/4})$. [F2, F3, F4, algebra]

1.2 For the sine term one also has $|\int_L^Ue^{-\kappa y}\sin(\eta y)dy/y|\le C$ uniformly $0<L<U$, $\kappa\ge0$ and real $\eta$. It is zero for $\eta=0$. Otherwise split at $1/|\eta|$: before that point $|\sin(\eta y)|\le|\eta|y$ gives a bound at most one; after that point integrate the sine against the decreasing amplitude to obtain a bound $C/(|\eta|\max(L,1/|\eta|))\le C$. [F4, algebra]

2.1 The smooth main term in step 1.1 is $\int_a^bf(t,x)(\log t+2\gamma)dt$. Integrating against the phase derivative $2\pi\sqrt{x/t}$ bounds it by $C_Ja^{-1/4}\log(2a)$: the boundary amplitude is $O_J(t^{-1/4}\log(2t))$ and its derivative is $O_J(t^{-5/4}\log(2t))$. The constant $1/4$ part also contributes only $O_J(a^{-3/4})$. Consequently, up to $O_J(a^{-1/4}\log(2a))$, $S$ equals $2\pi x^{3/4}\int_a^bt^{-5/4}\sin(\theta_x)A(t)dt$. These estimates are uniform in $b>a$ and $x\in J$. Integer endpoints can be handled by limits from adjacent noninteger endpoints and the extra individual terms $O_J(a^{-3/4+\varepsilon})$. [F3, F4, step 1.1]

3.1 In the last integral replace $A$ by $A_v$. For each fixed $a,b$, the difference tends uniformly to zero for $x\in J$, by the bound $C_Ja^{-5/4}\int_a^b|A_v-A|$ and [F2]. By [F1], $A_v(t)=A_v^*(t)+O(t^{-1/4})$, where $A_v^*(t)=(\pi\sqrt2)^{-1}t^{1/4}\sum_{n\ge1}d(n)n^{-3/4}\cos(\theta_n)e^{-2v\sqrt{nt}}$. The error follows by summing $d(n)n^{-5/4}$ and is uniform $t\ge a$ and $v>0$; its integral contribution is $O_J(a^{-1/2})$. For fixed $v>0$ the series for $A_v^*$ converges absolutely and uniformly on $[a,b]$ by its exponential factor, so termwise proper integration is legitimate. [F1, F2, F3, step 2.1]

4.1 The identity $\sin(\theta_x)\cos(\theta_n)=\tfrac12\sin(4\pi(\sqrt x-\sqrt n)\sqrt t)-\tfrac12\cos(4\pi(\sqrt x+\sqrt n)\sqrt t)$ reduces the resulting term integrals, after $y=\sqrt t$, to sine or cosine integrals with decreasing amplitude $2y^{-1}e^{-2v\sqrt n y}$ on $[\sqrt a,\sqrt b]$. If their frequency $\eta\ne0$, integration by parts bounds their modulus by $C/(\sqrt a|\eta|)$, uniformly $v>0$ and $b>a$: the sum of the boundary amplitudes and the integral of the absolute derivative is at most a constant times the initial amplitude. [F4, step 3.1, algebra]

5.1 For $n>2B+2$, $|\sqrt n\pm\sqrt x|\ge c_J\sqrt n$. Thus step 4.1, multiplied by $d(n)n^{-3/4}$ and summed, contributes $O_J(a^{-1/2})$, since $\sum_nd(n)n^{-5/4}<\infty$. For the finitely many smaller $n$, all plus frequencies are bounded below, while step 1.2 bounds every minus-frequency term by a constant. This proves $|S|\le C_J$, independently of $a,b,x\in J$, after taking $v\downarrow0$ in step 3.1. Adding the finitely many terms $n\le3$ proves the required uniform boundedness of all partial sums. [F3, step 2.1, step 3.1, step 4.1, step 1.2]

6.1 For a fixed $x$, any zero minus frequency is identically absent because its sine is zero; the remaining finitely many small-$n$ frequencies have positive absolute value. Therefore step 4.1 bounds their contribution by $C_xa^{-1/2}$. Together with the large-$n$ estimate and step 2.1 this shows $S\to0$ as $a\to\infty$, uniformly $b>a$. This is the Cauchy criterion for convergence at $x$. If $x$ varies in a compact interval without integers, the finitely many small-$n$ minus frequencies have a common positive lower bound; thus the same tail estimate is uniform there. This proves both convergence assertions. [step 2.1, step 3.1, step 4.1, step 5.1] ∎
