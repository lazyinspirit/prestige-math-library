---
id: cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity
kind: counterexample
title: "A noncompact continuation datum can lose its trajectories at infinity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control, def-regular-continuation-datum-between-morse-smale-pairs, def-morse-smale-pair, def-downward-gradient-like-vector-field, def-morse-trajectory-from-p-to-q, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
dependency_level: 15
proof_strategy: direct
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4: compactness of tunnelings uses compactness of the ambient manifold; without it flow lines escape, read at PDF pp. 193-194"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.5 and Ch. 4 Sec. 4.1: the constructions assume closed or compactly supported data, printed pp. 78-80 and 83-85, PDF pp. 88-90 and 93-95"
verification:
  precheck: pass
---

## Statement refuted

On an arbitrary smooth manifold, smooth continuation data with complete
Morse--Smale ends and finite index-matched continuation counts always induce
isomorphisms on the trajectory-count homology of their ends.

## Facts & Assumptions

**Given:** $M=\mathbb R$ with the standard metric, and a continuation datum whose two ends are complete Morse--Smale pairs but whose interpolating field drives the connecting trajectory to infinity in finite time.

[F1] The function $f^-=-\tfrac12x^2$ is Morse with the single critical point $p=0$, of index $1$, and its negative gradient field $\dot x=x$ is complete; the pair $(f^-,dx^2)$ is Morse--Smale, with $W^u(0)=\mathbb R$ and $W^s(0)=\{0\}$ meeting transversally ([[def-morse-smale-pair]], [[def-downward-gradient-like-vector-field]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F2] The function $f^+=\arctan x-\tfrac12x^2$ is Morse with the single critical point $q=x_0$, the unique real root of $x^3+x-1=0$ (so $q\in(0,1)$), of index $1$: its negative-gradient field is $F(x)=x-\frac1{1+x^2}=\frac{x^3+x-1}{1+x^2}$. The numerator is strictly increasing, has one zero $x_0$, and satisfies $x_0>\tfrac12$ because its value at $\tfrac12$ is negative. At that zero, $(f^+)^{\prime\prime}(x_0)=-F^{\prime}(x_0)=-1-2x_0/(1+x_0^2)^2<0$. Since $|F(x)|\le|x|+1$, the field is complete, so $(f^+,dx^2)$ is Morse--Smale; and $F>0$ on $(x_0,\infty)$ while $F<0$ on $[0,x_0)$, so $x_0$ is a repelling rest point for the forward flow ([[def-morse-smale-pair]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-morse-trajectory-from-p-to-q]]).

[F3] The datum is a smooth family $(f_s)_{s\in\mathbb R}$ with $f_s=f^-$ for $s\le -L$, $f_s=\tfrac13x^3$ on the plateau $-1\le s\le 1$ (so that the continuation equation there reads $\dot x=-x^2$), $f_s=f^+$ for $s\ge1+\delta$, and a smooth interpolation on $[1,1+\delta]$ which can be taken as short as desired; the metric is the standard one throughout. It satisfies the two-end condition of a continuation datum ([[def-regular-continuation-datum-between-morse-smale-pairs]]). The parameters $L$ and $\delta$ are free; in the computation below we use $\delta$ small and the fixed plateau $[-1,1]$.

## Counterexample

1.1 The two ends are valid: by [F1] and [F2] both pairs are complete Morse--Smale pairs with exactly one nondegenerate critical point of index $1$, so both Morse chain complexes are $\Lambda$ concentrated in degree $1$ with zero differential. [F1, F2, given]

2.1 Rigidity of the upper end. Let $x$ solve the continuation equation with $\lim_{s\to+\infty}x(s)=x_0$. On $s\ge1+\delta$ the equation is $\dot x=F(x)$, and every solution with $x(1+\delta)>x_0$ increases and converges to $+\infty$, while every solution with $x(1+\delta)<x_0$ decreases, crosses $0$ (where $F(0)=-1$) and converges to $-\infty$; hence necessarily $x(1+\delta)=x_0$, and then $x(s)=x_0$ for all $s\ge1+\delta$. [F2, step 1.1]

3.1 Backward blow-up. Extend the solution of step 2.1 backward from $x(1+\delta)=x_0$. On the interpolation region the field is $G_s(x)=-\frac{d}{dx}\bigl((1-\theta(s))\tfrac13x^3+\theta(s)f^+(x)\bigr) =(1-\theta(s))(-x^2)+\theta(s)F(x)$ with $0\le\theta\le1$, and at $x=x_0$ this equals $-(1-\theta(s))x_0^2<0$ whenever $\theta(s)<1$, In backward time the vector field at $x_0$ is nonnegative, so uniqueness (or the scalar differential inequality for the negative part of $x-x_0$) makes $x_0$ a lower barrier. On $[x_0,2x_0]$ all fields $G_s$ are bounded in absolute value by a common $C>0$. Choosing $\delta<x_0/C$, the integral bound $|x(s)-x_0|\le C\delta$ precludes a first exit through $2x_0$; the lower barrier precludes a first exit below $x_0$. Thus the backward trajectory exists throughout this short interpolation and stays in $[x_0,2x_0]$. Entering the plateau at $s=1$ with $x(1)\in[x_0,2x_0]$, its backward evolution there obeys $\frac{dx}{d\tau}=x^2$ in the backward time $\tau=1-s$, with solution $x(\tau)=x(1)/(1-x(1)\tau)$, which blows up at $\tau=1/x(1)$; since $x(1)\ge x_0>\tfrac12$ we have $1/x(1)<2$, so the blow-up occurs strictly inside the plateau $[-1,1]$ and the backward trajectory is not defined beyond it. [F3, step 2.1, algebra]

4.1 Consequently no solution of the continuation equation has both the lower limit $p=0$ and the upper limit $q=x_0$: a solution with upper limit $x_0$ must satisfy $x(1+\delta)=x_0$ by step 2.1, and its backward continuation blows up in finite time by step 3.1, so it has no lower limit at all. Hence $\mathcal C(p,q)=\varnothing$ although $\operatorname{ind}(p) =\operatorname{ind}(q)=1$, and the continuation count is the zero map $\Lambda\to\Lambda$, which is not an isomorphism. [step 2.1, step 3.1, algebra]

5.1 The claim is therefore false, and the failure is exactly the mechanism recorded in [[rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control]]: the end pairs have a single critical point each, but the interpolating field $\dot x=-x^2$ on the plateau is not complete, so the connecting trajectory escapes to spatial infinity in finite time, the energy identity has no finite-energy solution to apply to, and no compactness-up-to-breaking statement is available. [step 4.1, given] ∎
