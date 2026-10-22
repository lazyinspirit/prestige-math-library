---
id: lem-small-local-energy-transverse-strip-neck-collapse
kind: lemma
title: "Small local energy collapses transverse strip necks to one generator"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, lem-boundary-energy-regularity-for-totally-real-strips, lem-transverse-linear-strip-cauchy-riemann-isomorphism, lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Strip compactness and transverse endpoint analysis"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be compact, with compact totally real boundary submanifolds $L_0,L_1$ having finite transverse intersection $K$. Let $J_t$ be smooth, independent of the longitudinal variable, with fixed boundary structures on $L_0,L_1$. Suppose there are disjoint generator charts about $K$ in which $L_0=\mathbb R^m$, $L_1=\prod_j e^{i\theta_j(x)}\mathbb R$, $0<\theta_j(x)<\pi$, and $J_t=i$ for every $t$. Such actual auxiliary choices exist in the product-torus setting by the generator-neighborhood lemma.

There are constants $\delta_0,c,C>0$ such that the following holds. Let $u$ be a smooth solution on $[a-1,b+1]\times[0,1]$ with these boundary conditions, and suppose every window $[s-1/2,s+1/2]\times[0,1]$, $s\in[a,b]$, has energy at most $\delta\le\delta_0$. Then the image of $[a,b]\times[0,1]$ lies in one of the generator charts. For $1\le R\le(b-a)/2$,
$$E_g(u;[a+R,b-R]\times[0,1])\le C\delta e^{-cR},$$
and its image has diameter at most $C\sqrt\delta e^{-cR/2}$ and lies within that distance of that chart's generator. The constants are independent of neck length. The same bounds hold on a semi-infinite neck, measuring distance from its finite end.

Every actual nonconstant finite-energy strip on $\mathbb R\times[0,1]$ with these fixed data has energy at least $\delta_0$, after possibly decreasing that constant. No regularity, index, or gluing theorem is presupposed.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact fixed data, exact generator charts, actual strip equation, and window-energy hypotheses from the statement.

[F1] The actual target-global epsilon estimates in [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and [[lem-boundary-energy-regularity-for-totally-real-strips]] give uniform gradient estimates on fixed smaller disks and physical-boundary half-disks. The two boundary structures here are independent of the longitudinal variable.

[F2] [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] proves the real twisted Fourier basis with eigenvalues $\lambda_{jn}=\pi n-\theta_j$, the slice Poincare estimate with gap $\gamma=\min_{j,x}\{\theta_j(x),\pi-\theta_j(x)\}>0$, and the unweighted whole-strip inverse of $D_0=\partial_s+i\partial_t$ with these boundary planes.

[F3] [[lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]] proves the required actual local charts and relative tame extension in the product-torus setting. In the present general statement those concrete charts are explicit hypotheses.

## Proof

1.1 Choose a fixed patch radius less than $1/16$ and the uniform scale restrictions in [F1]. Every point with $s\in[a,b]$ is covered by a smaller interior disk or boundary half-radius patch contained in its prescribed energy window. Thus if $\delta_0$ is below the uniform epsilon thresholds, $$\sup_{[a,b]\times[0,1]}|du|_g\le C_0\sqrt\delta.$$ This is a target-global assertion, so containment in a chart has not been assumed. On a negative or upper edge use an orientation-preserving half-plane coordinate as in the actual epsilon proof. The source buffer ensures validity at $a,b$. [F1, given, construct, algebra]

2.1 For sufficiently small $\delta_0$ the entire connected neck image lies in one fixed generator chart. To justify this quantitatively, take smaller disjoint generator neighborhoods compactly inside the given charts. Whenever $x_0\in L_0,x_1\in L_1$ have distance tending to zero, compactness implies every subsequential common limit lies in $K$; consequently both points lie in these smaller neighborhoods once their distance is uniformly small enough. Step 1.1 bounds each angular slice length by $C_0\sqrt\delta$, so its two boundary points are that close and its entire image stays in a slightly larger chart. Choose the smaller neighborhoods with positive margin inside those charts and decrease $\delta_0$ for that margin. Every slice is thus contained in their disjoint union. Connectedness of the whole neck image makes it lie in one chart, about a generator $x$. Write $v=q_x\circ u$ there. Its equation is exactly $D_0v=0$ and its boundaries are the fixed product lines. Coordinate derivatives are bounded by $C\sqrt\delta$. [step 1.1, given, construct, algebra]

3.1 The slice Poincare bound in [F2] implies $\|v(s,\cdot)\|_2\le\gamma^{-1}\|v_t(s,\cdot)\|_2\le C\sqrt\delta$. Also $\sup_t|v(s,t)|\le\|v(s,\cdot)\|_2+\|v_t(s,\cdot)\|_2$: choose a point where the value is at most its $L^2$ norm and integrate the derivative along the interval. Hence $\sup|v|\le C\sqrt\delta$ throughout this neck. Expand in the real twisted basis of [F2]. Its coefficients satisfy $a_{jn}'+\lambda_{jn}a_{jn}=0$, because integration by parts has zero real boundary form. For positive eigenvalues write $$a_{jn}(s)=a_{jn}(a)e^{-\lambda_{jn}(s-a)},$$ and for negative eigenvalues write $$a_{jn}(s)=a_{jn}(b)e^{-|\lambda_{jn}|(b-s)}.$$ Parseval bounds the squared coefficients used at each endpoint by $C\delta$. All absolute eigenvalues are at least $\gamma$. [F2, step 2.1, construct, algebra]

4.1 For $s-a\ge1$ and $b-s\ge1$, Cauchy-Schwarz and the finite union of arithmetic eigenvalue progressions give, at each fixed derivative order $k$, $$\sup_t|D^kv(s,t)|\le C_k\sqrt\delta\bigl(e^{-\gamma(s-a)}+e^{-\gamma(b-s)}\bigr).$$ Indeed a derivative of a term has factor at most $|\lambda|^k$, and $$\sum_{\lambda\ge\gamma}\lambda^{2k}e^{-2\lambda h}\le e^{-2\gamma h}\sum_{\lambda\ge\gamma}\lambda^{2k}e^{-2(\lambda-\gamma)}<\infty\qquad(h\ge1),$$ with the same bound for negative absolute eigenvalues. The series and all differentiated series converge uniformly on smaller interiors of the neck, and completeness and continuity identify them with the actual derivatives, including boundary derivatives. Apply this for $k=0,1$. Integrating the squared first-derivative bound on the central interval gives $E_g\le C\delta e^{-2\gamma R}$, using uniform chart-metric equivalence. The zeroth-order bound gives distance from the generator and image diameter at most $C\sqrt\delta e^{-\gamma R}$. Set $c=2\gamma$ and enlarge $C$ to cover all finitely many charts. [F2, step 3.1, construct, algebra]

5.1 On a semi-infinite neck every finite truncation has the same small-window hypothesis and the same endpoint norm bound from step 3.1. The energy estimate on its central interval, followed by exhaustion of the infinite end, gives the same energy bound with a fixed enlarged constant. For pointwise values and derivatives, first fix a point and let the artificial far endpoint tend to infinity in step 4.1; its exponential term vanishes, giving the one-ended bound. Thus the target distance and diameter conclusions persist. Reflection of the longitudinal coordinate handles the other semi-infinite end, or equivalently one exchanges positive and negative modes. [step 3.1, step 4.1, construct, algebra]

6.1 Finally suppose a whole strip has total energy smaller than $\delta_0$. Every window has that energy bound, so steps 1.1 and 2.1, applied globally, place the entire connected image in one exact generator chart. Its coordinate map $v$ has finite derivative energy and, by the slice Poincare estimate integrated over the whole longitudinal line, lies in $L^2$. Thus $v\in H^1$ with the exact linear boundary values and satisfies $D_0v=0$. Smooth longitudinal cutoffs approximate $v$ in $H^1$ while preserving both boundary planes, so it belongs to the actual completed operator domain in [F2]. The actual inverse in [F2] forces $v=0$, so the strip is constant. Contraposition proves the uniform nonconstant-strip energy quantum. This proves all conclusions for actual maps without a formal compactification assumption. [F2, step 1.1, step 2.1, construct, algebra] ∎
