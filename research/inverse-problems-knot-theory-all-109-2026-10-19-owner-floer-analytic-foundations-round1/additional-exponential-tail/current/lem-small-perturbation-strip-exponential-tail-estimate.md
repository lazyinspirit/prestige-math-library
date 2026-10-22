---
id: lem-small-perturbation-strip-exponential-tail-estimate
kind: lemma
title: "A small perturbation of a transverse strip equation has exponential tails"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-transverse-linear-strip-cauchy-riemann-isomorphism]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §3 and Appendix A"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. Let $v:[0,\infty)\times[0,1]\to\mathbb C^m$ be smooth, with $v(s,0)\in\mathbb R^m$, $v(s,1)\in\prod_j e^{i\theta_j}\mathbb R$, where $0<\theta_j<\pi$. Suppose its Dirichlet energy $\int(|v_s|^2+|v_t|^2)$ is finite and it satisfies almost everywhere
$$v_s+iv_t=A(s,t)v_s+C(s,t)v_t+E(s,t)v,$$
where $A,C,E$ are bounded measurable real linear endomorphisms. Put $\gamma=\min_j\{\theta_j,\pi-\theta_j\}$, fix $0<\delta<\gamma$, and set
$$M_\delta=\frac{\sqrt{\gamma^{-2}+5}}{1-\delta/\gamma}.$$
If $\|A\|_\infty+\|C\|_\infty+\|E\|_\infty\le\varepsilon$ and $M_\delta(1+\delta)\varepsilon\le1/2$, then for every smooth scalar cutoff $\chi$ equal to zero near $s=0$ and to one for $s\ge1$, with $0\le\chi\le1$, the zero extension to the full strip of $e^{\delta s}\chi v$ belongs to $H^1_\theta$ and
$$\|e^{\delta s}\chi v\|_{H^1}\le2M_\delta e^\delta(1+\varepsilon)\|\chi'v\|_2.$$
In particular $v$ and its first derivatives are exponentially square-integrable on $s\ge1$, and $\|v(s,\cdot)\|_{L^2([0,1])}=O(e^{-\delta s})$ there. The assertion also applies when the coefficients depend on $v$ and its derivatives, provided the displayed measurable-coefficient bound holds along the given solution. It is an analytic estimate with exact linear boundary conditions; no geometric flattening or higher-derivative regularity assertion is included.

## Statement references

[[def-countable-choice]]

[[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]

## Facts & Assumptions

**Given:** Countable Choice, $v$, the boundary lines, equation, finite energy, coefficients, constants, and cutoff in the statement.

[F1] The constant operator $D=\partial_s+i\partial_t:H^1_\theta\to L^2$ has inverse $Q$ with $\|Q\|_{L^2\to L^2}\le\gamma^{-1}$ and $\|Q\|_{L^2\to H^1}\le\sqrt{\gamma^{-2}+5}$, by [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]. Its proof gives the real modes with eigenvalues $\pi n-\theta_j$ and the $H^1$ boundary-completion characterization.



## Proof

1.1 At each fixed $s$, expand $v(s,\cdot)$ in the modes from [F1]. The integration-by-parts and Parseval calculation there gives $\|v(s,\cdot)\|_2\le\gamma^{-1}\|v_t(s,\cdot)\|_2$, because every eigenvalue has absolute value at least $\gamma$. Integrating in $s$ shows $v\in L^2$ on the half-strip. Together with finite Dirichlet energy this makes $u=\chi v$, extended by zero before $s=0$, an element of $H^1_\theta$: it vanishes near the joining edge, and cutoffs tending to one in the $s$ direction approximate it in $H^1$ by the defining smooth boundary-compatible maps. Extend $A,C,E$ by zero to $s<0$. The product rule gives $$Du=Au_s+Cu_t+Eu+f,\qquad f=(I-A)\chi'v.$$ The forcing is supported in $0\le s\le1$ and $\|f\|_2\le(1+\varepsilon)\|\chi'v\|_2$. [F1, given, construct, algebra]

1.2 For any bounded measurable scalar $q(s)$ with $\|q\|_\infty\le\delta$, the operator $D-q$ has inverse $Q(I-qQ)^{-1}:L^2\to H^1_\theta$ of norm at most $M_\delta$. Indeed $\|qQ\|_{L^2\to L^2}\le\delta/\gamma<1$, so its geometric series converges and $(D-q)Q=I-qQ$. Conversely $h\in\ker(D-q)$ satisfies $h=Qqh$, and the same strict $L^2$ contraction forces $h=0$. Thus this is a two-sided inverse. This argument permits discontinuous $q$ and does not differentiate it. [F1, algebra]

2.1 For each positive integer $N$ set $w_N(s)=\exp(\delta\min\{\max\{s,0\},N\})$ and $q_N=w_N'/w_N$, defined almost everywhere. Then $w_N$ is bounded and locally Lipschitz with $0\le q_N\le\delta$, and $z_N=w_Nu\in H^1_\theta$. The product rule, justified on each interval and across the continuous joins as in [F1], turns step 1.1 into $$(D-q_N)z_N=A(z_N)_s+C(z_N)_t+(E-Aq_N)z_N+w_Nf.$$ The norm of the first three terms on the right is at most $(1+\delta)\varepsilon\|z_N\|_{H^1}$. Apply step 1.2 and the assumed smallness to absorb that term, giving $$\|z_N\|_{H^1}\le2M_\delta\|w_Nf\|_2\le2M_\delta e^\delta\|f\|_2.$$ This bound is uniform in $N$; the capped weights make each application legitimate before any exponential integrability is known. [F1, step 1.1, step 1.2, given, construct, algebra]

3.1 On every fixed bounded interval of positive $s$, for all sufficiently large $N$ one has $z_N=e^{\delta s}u$ and the same equality for its weak first derivatives. The uniform bound in step 2.1 therefore bounds the integrals of the squared function and derivatives on every bounded rectangle by its squared right-hand side. Exhausting the strip by these rectangles proves $z=e^{\delta s}u\in H^1$ with that bound. Its boundary conditions persist, and $s$ cutoffs approximate it in the defining $H^1_\theta$ norm; local smoothness of $u$ and the mode characterization in [F1] give membership in that completion. Step 1.1 now proves the displayed estimate. On $s\ge1$ we have $z=e^{\delta s}v$, $e^{\delta s}v_t=z_t$, and $e^{\delta s}v_s=z_s-\delta z$, proving exponential square-integrability of all three quantities. [F1, step 1.1, step 2.1, algebra]

4.1 Finally regard $z(s,\cdot)$ for $s\ge1$ as a curve with values in $L^2([0,1];\mathbb C^m)$. Its squared norm has derivative $2\operatorname{Re}\langle z_s,z\rangle$, first for finite modal sums and then by their $H^1$ convergence from [F1]. There is a sequence $s_n\to\infty$ with $\|z(s_n,\cdot)\|_2\to0$, since $z$ is square-integrable in $s$. Integrating the derivative from $s$ to $s_n$, then using Cauchy–Schwarz and passing to infinity gives $$\|z(s,\cdot)\|_2^2\le2\int_s^\infty\|z_s(r,\cdot)\|_2\|z(r,\cdot)\|_2dr\le\|z\|_{H^1([1,\infty)\times[0,1])}^2.$$ This holds for the continuous $L^2$ representative, which agrees with the given smooth $v$. Multiplying by $e^{-2\delta s}$ proves the claimed exponential $L^2$ slice bound. Dependence of the coefficients on the solution changes none of the preceding estimates, which use only their values and stated bounds along that solution. [F1, step 3.1, algebra] ∎
