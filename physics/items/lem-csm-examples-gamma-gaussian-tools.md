---
id: lem-csm-examples-gamma-gaussian-tools
kind: lemma
title: "Gaussian, gamma and beta product integrals"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - lem-gaussian-integral-is-finite-and-positive
  - lem-gaussian-square-is-the-plane-gaussian-integral
  - lem-plane-gaussian-integral-in-polar-coordinates
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  thm-measure-uniqueness-on-a-sigma-finite-pi-system: mathematical-premise
  lem-gaussian-integral-is-finite-and-positive: mathematical-premise
  lem-gaussian-square-is-the-plane-gaussian-integral: mathematical-premise
  lem-plane-gaussian-integral-in-polar-coordinates: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1, equations (3.1.72)–(3.1.75)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §5.2(i), Euler's integral"
      url: "https://dlmf.nist.gov/5.2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For $a>0$ and an integer $r\ge0$, define $I_r(a):=\int_{\mathbb R}x^{2r}e^{-ax^2}\,dx$ as the two-sided improper Riemann integral. Then

$$I_r(a)=\frac{\Gamma(r+\tfrac12)}{a^{r+1/2}},\qquad \int_{\mathbb R}x^{2r+1}e^{-ax^2}\,dx=0,$$

where $\Gamma(s):=\int_0^\infty t^{s-1}e^{-t}\,dt$ for $s>0$. In particular, $I_0(a)=\sqrt{\pi/a}$ and $I_1(a)=\sqrt\pi/(2a^{3/2})$. For every compact interval $K=[a_0,a_1]\subset(0,\infty)$, $I_r$ is continuously differentiable on $K$ and

$$I_r'(a)=-I_{r+1}(a).$$

For $s,t>0$, put $B(s,t):=\int_0^1u^{s-1}(1-u)^{t-1}\,du$. Then $B(s,t)$ is finite and

$$\Gamma(s)\Gamma(t)=\Gamma(s+t)B(s,t),\qquad \Gamma(s+1)=s\Gamma(s),\qquad \Gamma(\tfrac12)=\sqrt\pi.$$

Consequently, if independent positive random variables have densities $x^{s-1}e^{-x}/\Gamma(s)$ and $x^{t-1}e^{-x}/\Gamma(t)$, their sum has density $x^{s+t-1}e^{-x}/\Gamma(s+t)$.

## Facts & Assumptions

**Given:** $a>0$, an integer $r\ge0$, and positive real parameters $s,t$.

[F1] [[lem-gaussian-integral-is-finite-and-positive]]: the improper Gaussian integral is finite and positive.

[F2] [[lem-gaussian-square-is-the-plane-gaussian-integral]]: the square of the one-dimensional Gaussian integral equals the nonnegative plane Gaussian integral.

[F3] [[lem-plane-gaussian-integral-in-polar-coordinates]]: the nonnegative plane Gaussian integral equals $\pi$, with the polar substitutions justified on compact half-annuli away from the origin.

[F4] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative on an open neighborhood of a compact Jordan set transforms a bounded integrable function by the absolute Jacobian determinant.

[F5] [[thm-real-power-continuity-and-derivatives]]: for any fixed real exponent $\gamma$, the positive-base power $a^\gamma$ is differentiable on $(0,\infty)$, with derivative $\gamma a^{\gamma-1}$; these positive-base powers are continuous.

[F6] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: two measures agreeing on a generating pi-system are equal if that system contains an increasing common finite-measure exhaustion of the whole space.

## Proof

1.1 For $s>0$, the gamma integrand on $(0,1)$ is bounded by $t^{s-1}$, whose integral is $1/s$. For $t\ge1$, $t^{s-1}e^{-t/2}$ is bounded, so $t^{s-1}e^{-t}\le C_se^{-t/2}$ and the tail converges. On a compact positive $s$-interval, the lower endpoint bounds the near-zero power and the upper endpoint bounds the exponential tail uniformly. Hence $\Gamma(s)$ is finite and has controlled endpoint tails. [given, algebra]

1.2 Let $I=\int_{\mathbb R}e^{-x^2}dx$. By [F2], $I^2$ equals the nonnegative plane Gaussian integral, and [F3] evaluates that integral as $\pi$. Hence $I^2=\pi$. [F2, F3, algebra]

2.1 By [F1], $I$ is finite and positive. The positive square root in step 1.2 is therefore $I=\sqrt\pi$. [F1, step 1.2, algebra]

2.2 Integration by parts on $[\varepsilon,R]$ gives $\int_\varepsilon^R t^se^{-t}\,dt=[-t^se^{-t}]_\varepsilon^R+s\int_\varepsilon^R t^{s-1}e^{-t}\,dt$. The boundary terms vanish by step 1.1, so $\Gamma(s+1)=s\Gamma(s)$; direct integration gives $\Gamma(1)=1$. [step 1.1, algebra]

2.3 For $s,t>0$, the beta integrand is integrable near $0$ by comparison with $u^{s-1}$ and near $1$ by comparison with $(1-u)^{t-1}$. On each compact rectangle $[1/j,j]^2$ the continuous product integrand $x^{s-1}y^{t-1}e^{-(x+y)}$ has integral equal to the product of its one-dimensional integrals, as follows by factoring the finite rectangular Riemann sums. These nested rectangles exhaust the positive quadrant and their integrals tend to $\Gamma(s)\Gamma(t)$ by step 1.1. [step 1.1, algebra]

3.1 Substitution $t=x^2$ on compact half-intervals and passage to the convergent improper limits gives $\Gamma(\tfrac12)=2\int_0^\infty e^{-x^2}\,dx=I=\sqrt\pi$ by steps 1.2 and 2.1. [step 1.2, step 2.1, algebra]

3.2 On $A_j=[1/j,j]\times[1/j,1-1/j]$ in coordinates $(r,u)$, the map $\Phi(r,u)=(ru,r(1-u))$ is injective, has determinant $-r\ne0$, and is a $C^1$ diffeomorphism on an open neighborhood. Its image is a compact Jordan set. The images exhaust the positive quadrant cofinally with the rectangles in step 2.3: each compact rectangle stays a positive distance from both axes and has bounded $x+y$, while each image is compact and stays away from the axes. Applying [F4] on $A_j$ and taking the increasing limits gives $\Gamma(s)\Gamma(t)=\int_0^\infty r^{s+t-1}e^{-r}\,dr\,B(s,t)=\Gamma(s+t)B(s,t)$. The limits are finite by step 1.1 and the endpoint bounds in step 2.3. [step 1.1, step 2.3, F4, algebra]

4.1 For integer $r\ge0$, $x^{2r}e^{-ax^2/2}$ is bounded on $\mathbb R$, so $x^{2r}e^{-ax^2}\le C e^{-ax^2/2}$ and [F1] gives absolute convergence; odd moments converge absolutely and vanish by reflection. On compact intervals the substitution $y=\sqrt a\,x$ is covered by [F4], and its improper limit gives $I_0(a)=a^{-1/2}I_0(1)=\sqrt{\pi/a}$ by steps 1.2 and 2.1. The substitution $t=ax^2$ on both half-lines gives $I_r(a)=a^{-r-1/2}\Gamma(r+\tfrac12)$; finiteness follows from step 1.1, the half-integer starting value from step 3.1, and recurrence from step 2.2. [given, F1, F4, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, algebra]

4.2 Let $C=[c,d]\subset(0,\infty)$ and set $Q_j=[1/j,j]^2$. The event $A_j=Q_j\cap\{(x,y):x+y\in C\}$ is Jordan measurable. On each grid rectangle $I\times J\subset Q_j$, independence gives probability $P(X\in I)P(Y\in J)=(\int_I f_s)(\int_J f_t)$; because the marginal densities are continuous on $Q_j$, the finite rectangular Riemann sums factor and converge to the integral of $f_s(x)f_t(y)$ on that rectangle. The inner and outer grid unions for $A_j$ differ only in cells meeting its finitely many line-segment boundary pieces; their total area tends to zero, and $f_sf_t$ is bounded on $Q_j$. Thus $P((X,Y)\in A_j)=\int_{A_j}f_sf_t\,dx\,dy$. As $Q_j$ increases to the positive quadrant, countable additivity gives probabilities increasing to $P(X+Y\in C)$, and the nonnegative improper integrals increase to the integral over $x,y>0$. The images of $C\times[1/j,1-1/j]$ under $(r,u)\mapsto(ru,r(1-u))$ increase to $A_C=\{x,y>0:x+y\in C\}$. On each such compact set the map is injective with absolute Jacobian $r$, so [F4] transforms the integral to $r^{s+t-1}e^{-r}u^{s-1}(1-u)^{t-1}/(\Gamma(s)\Gamma(t))$. Its rectangular Riemann sums factor; as $j\to\infty$ the $u$-integral tends to $B(s,t)$. By step 3.2, $P(X+Y\in C)=\int_C r^{s+t-1}e^{-r}/\Gamma(s+t)\,dr$. A singleton C has probability zero by the same zero-area grid-boundary argument. The density integrates to one by step 1.1. [given, step 1.1, step 3.2, F4, algebra]

5.1 Fix the integer $r\ge0$. Step 4.1 evaluated $I_r(a)=\Gamma(r+\tfrac12)a^{-r-1/2}$ for every $a>0$ using only convergent improper substitutions, and step 2.2 proved the Gamma recurrence by integration by parts; neither argument used parameter differentiation. By [F5], differentiation of this established explicit function gives $$I_r'(a)=-(r+\tfrac12)\Gamma(r+\tfrac12)a^{-r-3/2}=-\Gamma(r+\tfrac32)a^{-r-3/2}=-I_{r+1}(a).$$ The same positive-base power formula makes this derivative continuous on $(0,\infty)$, hence on a neighborhood of every compact $K\subset(0,\infty)$. This proves the full parameter clause without interchanging a derivative and an improper integral. [F5, step 2.2, step 4.1, algebra]

6.1 Let $\mu$ be the law of $X+Y$ on $(0,\infty)$ and let $\nu$ be the probability measure with the density in step 4.2. The collection $\mathcal P=\{\varnothing\}\cup\{[a,b]:0<a\le b<\infty\}$ is closed under intersections, allowing a singleton or the empty set. It generates the Borel sigma-algebra of the positive half-line: its members are closed there, and every relatively open interval is a countable union of closed subintervals with positive endpoints; unbounded intervals are obtained by an additional increasing union. Step 4.2 gives equality of $\mu$ and $\nu$ on every member of $\mathcal P$, including the singleton case. The sets $P_j=[1/j,j]$ for integers $j\ge1$ increase to $(0,\infty)$, lie in $\mathcal P$, and have common measure at most $1$. Thus [F6] proves $\mu=\nu$ on all Borel sets, which establishes the claimed gamma convolution law. [F6, step 4.2, construct] ∎

## Remarks

The parameter-derivative clause follows from the independently evaluated moments and Gamma recurrence. No research-module token is used as a logical supplier, and these integral identities make no empirical claim. No claim is made for $a\le0$, $s\le0$ or $t\le0$.
