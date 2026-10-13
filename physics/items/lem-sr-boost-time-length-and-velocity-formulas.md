---
id: lem-sr-boost-time-length-and-velocity-formulas
kind: lemma
domain: mathematics
title: "Coordinate formulas of a boost: clock rates, rod lengths, simultaneity and velocity transformation"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse, def-lorentz-map-and-lorentz-group, def-inertial-frame-and-inertial-chart, lem-inertial-chart-transitions-are-affine-lorentz, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, thm-sr-proper-time-and-observer-decomposition, def-spatial-euclidean-structure-of-an-inertial-frame, thm-algebra-of-derivatives, def-derivative, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-time-orientation-and-future-causal-sets, cor-mean-value-theorem]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(o;e_0,e_1,e_2,e_3)$ and $(o';e'_0,e'_1,e'_2,e'_3)$ be inertial frames whose bases are related by a boost along the common first spatial direction with parameter $v$, $|v|<c$:

$$e'_0=\gamma\Bigl(e_0+\frac{v}{c}e_1\Bigr),\qquad e'_1=\gamma\Bigl(e_1+\frac{v}{c}e_0\Bigr),\qquad e'_2=e_2,\qquad e'_3=e_3,$$

where $\gamma=(1-v^2/c^2)^{-1/2}$, with charts $x$, $x'$ ([[def-lorentz-boost]], [[lem-inertial-chart-transitions-are-affine-lorentz]]). For arbitrary origins put $b:=-B(v/c)x(o')$, the constant translation vector, and write the affine transition as

$$x'^0=\gamma\Bigl(x^0-\frac{v}{c}x^1\Bigr)+b^0,\qquad x'^1=\gamma\Bigl(x^1-\frac{v}{c}x^0\Bigr)+b^1,\qquad x'^2=x^2+b^2,\qquad x'^3=x^3+b^3.$$

Then:

**(i) Clock rate.** The straight worldline $y(\lambda):=x^{-1}\bigl(\lambda,\tfrac{v}{c}\lambda+a_1,a_2,a_3\bigr)$ (coordinate velocity $(v,0,0)$, the worldline of a clock at rest in the frame $x'$) is future timelike, and the elapsed proper time between $\lambda_0<\lambda_1$ is $(\lambda_1-\lambda_0)/(c\gamma)$; equivalently $d\tau/dt=1/\gamma$ along $y$, where $t$ is the coordinate time of $x$.

**(ii) Length comparison.** For $L_0>0$ let $y_a,y_b$ be the two straight worldlines at rest in the frame $x'$ through the events with $x'$-coordinates $(\lambda,0,0,0)$ and $(\lambda,L_0,0,0)$. Then (a) at equal $x'$-times their $x'$-coordinate separation is $L_0$, while (b) at equal $x$-times their $x$-coordinate separation is $L_0/\gamma$, so the measuring frame $x$ assigns the length $L_0/\gamma$ to a rod of rest length $L_0$ at rest in $x'$; (c) symmetrically, for two worldlines at rest in $x$ with constant $x$-spatial separation $(L_0,0,0)$ along the boost direction, the separation at equal $x'$-times is $L_0/\gamma$. In each case the comparison uses events at equal time in the measuring frame; comparing equal times of the other frame is a different pair of events.

**(iii) Simultaneity.** If $x^0(q)-x^0(p)=0$ and $x^1(q)-x^1(p)=L$, then $x'^0(q)-x'^0(p)=-\gamma\frac{v}{c}L$; in particular simultaneity in the chart $x$ is not simultaneity in the chart $x'$ whenever $vL\ne0$.

**(iv) Velocity transformation.** Let $y:J\to A$ be a $C^1$ future causal curve which in the chart $x$ is $t\mapsto(ct,r(t))$ with coordinate velocity $w(t):=r'(t)\in\mathbb R^3$, $|w(t)|\le c$ (the strict inequality is the timelike branch). Then the coordinate velocity $w'$ of $y$ in the chart $x'$ is given by $w'_1=(w_1-v)/(1-vw_1/c^2)$ and $w'_\perp=w_\perp/\bigl(\gamma(1-vw_1/c^2)\bigr)$, the denominators being positive; moreover $|w'|<c$ when $|w|<c$, and $|w'|=c$ exactly when $|w|=c$.

## Facts & Assumptions

**Given:** Two inertial frames of the affine Minkowski model with bases related by the boost above with parameter $v$, $|v|<c$, $c>0$, $\gamma=(1-v^2/c^2)^{-1/2}$, and their charts $x$, $x'$ ([[def-lorentz-boost]], [[def-inertial-frame-and-inertial-chart]]); the transition formulas displayed in the Statement ([[lem-inertial-chart-transitions-are-affine-lorentz]]).

[F1] The chart transition is $x'=B(\beta)x+b$ with constant $b$ ([[lem-inertial-chart-transitions-are-affine-lorentz]]). In the ordered basis $(e_0,e_1,e_2,e_3)$ the passive boost with parameter $\beta$ acts on coordinates by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$, $x'^2=x^2$, $x'^3=x^3$; it is a proper orthochronous Lorentz map with inverse the boost with parameter $-\beta$, and $\gamma\ge1$ with equality exactly for $\beta=0$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-map-and-lorentz-group]]).

[F2] A vector $u=u^0e_0+u^1e_1+u^2e_2+u^3e_3$ has $\eta(u,u)=-(u^0)^2+(u^1)^2+(u^2)^2+(u^3)^2$, and since the frame's first vector $e_0$ is future the component criterion holds: $u$ is future timelike if and only if $u^0>\sqrt{(u^1)^2+(u^2)^2+(u^3)^2}$ ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[F3] For $w=w^1e_1+w^2e_2+w^3e_3$, $|w|:=\sqrt{(w^1)^2+(w^2)^2+(w^3)^2}$ is the Euclidean norm of the spatial part of $w$ in the frame ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[F4] If $y$ is a $C^1$ future timelike worldline with proper-time function $\tau$, then for parameter values $a<b$ one has $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(y',y')}\,ds$ ([[def-sr-proper-time]], [[def-sr-regular-causal-curve-and-worldline]]).

[F6] Algebra of derivatives of real functions of a real parameter: finite sums and constant multiples are differentiable with derivatives given by the same sums and multiples; products and quotients obey the product and quotient rules wherever the denominator is nonzero. For $C^1$ inputs these formulas have continuous derivatives ([[thm-algebra-of-derivatives]], [[def-derivative]]). The mean value theorem applies to each compact parameter segment of the $C^1$ time function ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Set $\beta:=v/c$, so $|\beta|<1$. The inertial-chart transition is $x'=B(\beta)x+b$, and its inverse is $x=B(-\beta)(x'-b)$. Thus $x^0=\gamma(x'^0-b^0+\beta(x'^1-b^1))$, $x^1=\gamma(x'^1-b^1+\beta(x'^0-b^0))$, and $x^j=x'^j-b^j$ for $j=2,3$. Translations disappear from coordinate differences and derivatives. A curve has tangent with its coordinate-derivative components, and [F2] gives the future timelike criterion. [F1, F2, F3]

2.1 Clock rate (i): the curve $y(\lambda)=x^{-1}(\lambda,\beta\lambda+a_1,a_2,a_3)$ is $C^1$ with coordinate derivative $(1,\beta,0,0)$, so its tangent at every $\lambda$ is $e_0+\beta e_1$, whose components $(1,\beta,0,0)$ satisfy $1>|\beta|$; by step 1.1 the tangent is future timelike at every parameter value, so $y$ is a future timelike worldline. Its integrand is constant, $-\eta(y',y')=1-\beta^2=1/\gamma^2$, so $\sqrt{-\eta(y',y')}=1/\gamma$ and [F4] gives $\tau(\lambda_1)-\tau(\lambda_0)=c^{-1}\int_{\lambda_0}^{\lambda_1}(1/\gamma)\,d\lambda=(\lambda_1-\lambda_0)/(c\gamma)$. Along $y$ the coordinate time of $x$ is $t=x^0/c=\lambda/c$, so $d\tau/dt=c\,d\tau/d\lambda=c/(c\gamma)=1/\gamma$, and the coordinate velocity of $y$ is $dr/dt=(dx^1/dt,dx^2/dt,dx^3/dt)=(v,0,0)$ because $dx^1/d\lambda=\beta$ and $\lambda=ct$. [F1, F4, step 1.1]

2.2 For $s=0,L_0$, put $y_s(\lambda):=(x')^{-1}(\lambda,s,0,0)$. At equal $x'$-time their separation is $(L_0,0,0)$. Inverting the affine transition of step 1.1 shows that the event on $y_s$ at $x^0=T$ has $\lambda=T/\gamma+b^0-\beta(s-b^1)$, so both worldlines intersect each $x$-time slice exactly once. For these two events $\Delta x^0=0$, $\Delta x'^1=L_0$ and $\Delta x'^2=\Delta x'^3=0$; the transition therefore gives $L_0=\gamma\Delta x^1$ and $\Delta x^2=\Delta x^3=0$, proving rest distance $L_0/\gamma$ by [F3]. For clause (c), take $x$-rest worldlines with spatial separation $(L_0,0,0)$. The time difference between their selected events is fixed by $0=\Delta x'^0=\gamma(\Delta x^0-\beta L_0)$, hence $\Delta x^0=\beta L_0$ and $\Delta x'^1=\gamma(L_0-\beta^2L_0)=L_0/\gamma$, with $\Delta x'^2=\Delta x'^3=0$. Equal times of the two frames select different pairs unless $\beta L_0=0$. [F3, step 1.1]

2.3 Simultaneity (iii): if $x^0(q)-x^0(p)=0$ and $x^1(q)-x^1(p)=L$, then applying the transition of step 1.1 componentwise gives $x'^0(q)-x'^0(p)=\gamma\bigl(0-\beta L\bigr)=-\gamma\frac{v}{c}L$, since $x'$ is affine in $x$ with the displayed linear part; this is nonzero exactly when $vL\ne0$ because $\gamma>0$. [step 1.1]

2.4 Let $y(t)$ have coordinates $(ct,r(t))$ with $w=r'$ and $|w|\le c$. The affine transition gives $x'^0(t)=\gamma(ct-\beta r_1(t))+b^0$, $x'^1(t)=\gamma(r_1(t)-\beta ct)+b^1$ and $x'^j(t)=r_j(t)+b^j$ for $j=2,3$. Thus $t':=x'^0/c$ has derivative $dt'/dt=\gamma(c-\beta w_1)/c=\gamma(1-vw_1/c^2)>0$, because $|v w_1|/c^2\le |v|/c<1$. The mean value theorem makes $t'$ strictly increasing. Locally its positive continuous derivative is bounded below, so the same theorem gives a continuous inverse; dividing difference quotients by $(t'(t+h)-t'(t))/h$ proves $dr'/dt'=(dr'/dt)/(dt'/dt)$, including one-sided endpoints. Now $dx'^1/dt=\gamma(w_1-v)$ and $dx'^j/dt=w_j$ for $j=2,3$. Division gives exactly the displayed velocity formulas, with positive denominators. [F1, F6, step 1.1]

3.1 Subluminality of the transformed velocity: squaring the formulas of step 2.4 and multiplying by the positive factor $\bigl(1-\frac{vw_1}{c^2}\bigr)^2$ gives $\bigl(1-\frac{vw_1}{c^2}\bigr)^2\bigl(c^2-|w'|^2\bigr)=c^2\bigl(1-\frac{vw_1}{c^2}\bigr)^2-(w_1-v)^2-|w_\perp|^2\bigl(1-\frac{v^2}{c^2}\bigr)$, where $|w_\perp|^2=w_2^2+w_3^2$ and $1/\gamma^2=1-v^2/c^2$; expanding and using $|w|^2=w_1^2+|w_\perp|^2$ this equals $\bigl(c^2-|w|^2\bigr)\bigl(1-\frac{v^2}{c^2}\bigr)$. Hence $c^2-|w'|^2=\bigl(c^2-|w|^2\bigr)\bigl(1-\frac{v^2}{c^2}\bigr)\big/\bigl(1-\frac{vw_1}{c^2}\bigr)^2$, so with $|w|<c$ and $|v|<c$ both numerator factors are positive, $|w'|^2<c^2$ and therefore $|w'|<c$; conversely if $|w|=c$ the right-hand side vanishes and then $|w'|=c$, which is the asserted equality case. [step 2.4]

4.1 Conclusion: step 2.1 establishes (i) together with the equivalent rate $d\tau/dt=1/\gamma$; step 2.2 establishes (ii)(a), (ii)(b) and (ii)(c) with the indicated pairs of events; step 2.3 establishes (iii); steps 2.4 and 3.1 establish (iv), including the positivity of the denominators, $|w'|<c$ and the equality case $|w'|=c\Leftrightarrow|w|=c$. This proves all four clauses of the Statement. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The two computations use different hypotheses.** Clause (i) is the proper-time computation along a straight worldline with coordinate velocity $(v,0,0)$; clause (iv) is the chain-rule computation along an arbitrary $C^1$ worldline with subluminal coordinate velocity. Clause (iv) does not assume that $y$ is straight, and clause (ii) makes no assertion about $y$.

- **The subluminality identity.** The identity proved in step 3.1, $c^2-|w'|^2=(c^2-|w|^2)(1-v^2/c^2)/(1-vw_1/c^2)^2$, is the coordinate form of the Lorentz invariance of the causal classification: the one-parameter factor in the numerator is linear in $(1-v^2/c^2)$, not quadratic, as one checks at $w=0$, where $|w'|=|v|$ and both sides must equal $c^2-v^2$.

- **Alignment matters.** The factor $1/\gamma$ in (ii) applies to separation along the first spatial direction of the boost. More generally, $x$-rest worldlines with fixed spatial displacement $(\ell_1,\ell_2,\ell_3)$ have displacement $(\ell_1/\gamma,\ell_2,\ell_3)$ at equal $x'$-times: $\Delta x'^0=0$ forces $\Delta x^0=\beta\ell_1$, and substitution in the affine transition gives the formula. In particular, a purely transverse separation retains its length.
