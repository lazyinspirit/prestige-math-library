---
id: thm-tgr-tov-regular-center-local-existence
kind: theorem
title: "Regular-center TOV local existence and dependence"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-tgr-spherical-static-state-domain
  - def-countable-choice
  - lem-tgr-spherical-einstein-tov-reduction
  - lem-tgr-even-radial-center-regularity
  - thm-cm-compact-continuation-for-locally-lipschitz-odes
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-ftc-first-part
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-mean-value-inequality-for-total-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-chain-rule-for-total-derivatives
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-monotonicity-of-the-integral
  - thm-linearity-of-the-integral
  - def-oriented-integral
  - thm-heine-cantor-r
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-tgr-spherical-einstein-tov-reduction: mathematical-premise
  lem-tgr-even-radial-center-regularity: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-heine-cantor-r: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: contraction
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (99)–(106)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 7–8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$, where $\mathrm{AC}_\omega$ is exactly [[def-countable-choice]] and is inherited from the smooth Lorentzian/tensor suppliers. Let $\epsilon:I_p\to(0,\infty)$ be $C^\infty$ on an open interval $I_p\subseteq(0,\infty)$, let $P_c\subset I_p$ be a nonempty compact interval, and choose $\delta>0$ such that the closed $\delta$-neighbourhood of $P_c$ lies in $I_p$. Fix $\phi_c\in\mathbb R$ and use the units and signature of [[def-tgr-spherical-static-state-domain]]. Put $K=4\pi G/c^4$, with formal units $\mathrm m\,\mathrm J^{-1}$; $v$ has units $\mathrm m^{-2}$. There is $R_0>0$, common to all $p_c\in P_c$, such that for each $p_c$ there is a unique pair of even continuous functions $p,v$ on $[-R_0,R_0]$ with $|p(r)-p_c|\le\delta$ and satisfying
$$v(r)=K\int_0^1 s^2\epsilon(p(rs))\,ds,\qquad p(r)=p_c-\int_0^r t\frac{(\epsilon(p(t))+p(t))(v(t)+Kp(t))}{1-2t^2v(t)}\,dt.$$
They are $C^\infty$, $p(0)=p_c$, $v(0)=K\epsilon(p_c)/3$, $p'(0)=v'(0)=0$, and $b(r):=1-2r^2v(r)\ge1/2$ on $[0,R_0]$. Define
$$M(r)=\frac{c^2}{G}r^3v(r),\qquad \phi(r)=\phi_c+\int_0^r t\frac{v(t)+Kp(t)}{1-2t^2v(t)}\,dt\quad(|r|\le R_0).$$
Then $(M,p,\phi)$ satisfies the mass, pressure, and lapse equations of [[lem-tgr-spherical-einstein-tov-reduction]] for $0<r\le R_0$. The metric extends across $r=0$ as a $C^2$ Lorentzian metric in Cartesian spatial coordinates, with $b(0)=1$ and lapse $e^{\phi_c}>0$; this is the regular-center conclusion in this item. On the common interval, $p,v,\phi$ depend continuously in the uniform norm on $p_c\in P_c$. For $r>0$, the solution continues past any finite endpoint at which its graph remains in a compact subset of
$$\{(r,p,v):r>0,\ p\in I_p,\ 1-2r^2v>0\}.$$
No assertion is made that every equation of state reaches a zero-pressure surface, avoids a horizon globally, or gives a dynamically stable solution.

## Facts & Assumptions

**Given:** The state domain and SI conventions of [[def-tgr-spherical-static-state-domain]], $\mathrm{AC}_\omega$ of [[def-countable-choice]], the smooth positive function $\epsilon$ on $I_p$, the compact central-pressure interval $P_c$, the margin $\delta$, and $\phi_c$.

[F1] For a smooth isotropic spherical profile, the mass and lapse equations and the pressure equation are exactly those in [[lem-tgr-spherical-einstein-tov-reduction]]. With $GM/c^2=r^3v$ they become $v'=(K\epsilon(p)-3v)/r$, $p'=-r(\epsilon(p)+p)(v+Kp)/(1-2r^2v)$, and $\phi'=r(v+Kp)/(1-2r^2v)$ for $r>0$.

[F2] If even $C^2$ functions $f,h$ are used in $f(|x|)$ and $\delta_{ij}+x_ix_jh(|x|)$, these extend $C^2$ to the Cartesian center; for $b=1-r^2q$ the spatial metric coefficients are $\delta_{ij}+x_ix_jq/b$ ([[lem-tgr-even-radial-center-regularity]]).

[F3] A continuous function on a compact interval is Riemann integrable, and the first fundamental theorem differentiates its variable-endpoint integral at points of continuity ([[thm-continuous-implies-integrable]], [[thm-ftc-first-part]]). A continuous parameter integrand with continuous parameter derivative on a compact rectangle can be differentiated through its Riemann integral ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F4] If a locally Lipschitz ODE solution remains in a compact subset of its open time-state domain near a finite endpoint, it extends beyond that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]] clause 1).

[F5] Finite componentwise sums and products and compositions of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); total derivatives obey the chain rule ([[thm-chain-rule-for-total-derivatives]]), the reciprocal map is smooth on $(0,\infty)$ ([[thm-real-power-continuity-and-derivatives]]), and scalar products and quotients obey the ordinary derivative rules ([[thm-algebra-of-derivatives]]).

[F6] Closed bounded subsets of $\mathbb R^n$ are compact, and every continuous real-valued function on a nonempty compact subset attains finite extrema ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F7] The one-dimensional mean value theorem bounds increments by a derivative bound on each closed interval ([[cor-mean-value-theorem]]).

[F8] The second FTC evaluates an integral of a continuous derivative; in particular $\int_0^1s^2\,ds=1/3$ and $\int_0^r t\,dt=r^2/2$ ([[thm-ftc-second-part]]).

[F9] Integral monotonicity and nonnegativity hold for integrable functions on an ordered compact interval; in particular, if $g\ge0$ and $-g\le f\le g$, then $|\int f|\le\int g$ by comparing with $g$ and $-g$ ([[thm-monotonicity-of-the-integral]]). Linearity permits subtraction and scalar multiplication under the integral ([[thm-linearity-of-the-integral]]). Reversing endpoints changes only the sign, and an equal-endpoint integral is zero ([[def-oriented-integral]]), so absolute estimates use the interval with increasingly ordered endpoints.

[F10] A continuous real function on a compact real interval is uniformly continuous ([[thm-heine-cantor-r]]).

[A1] The countable-choice use is the canonical smooth tangent/tensor-bundle structure inherited through [[def-countable-choice]]; no full Axiom of Choice is used. The integral contraction and its iteration below make no selection from an infinite family.

## Proof

**Proof technique:** Choose one common closed pressure interval and uniform contraction bounds for every $p_c\in P_c$; then bootstrap the fixed point to the stated center regularity.

1.1 Write $P_c=[p_-,p_+]$ and set $P=[p_--\delta,p_++\delta]$; the margin hypothesis puts $P$ in $I_p$, and [F6] makes it compact. Thus $\epsilon_{\max}=\max_P\epsilon$ and $L_\epsilon=\max_P|\epsilon'|$ exist and are finite. Put $V=K\epsilon_{\max}/3$, and first choose $R_1\le1$ with $2R_1^2V\le1/2$. The set $Q=[-R_1,R_1]\times P\times[0,V]$ is closed and bounded in $\mathbb R^3$, hence compact by [F6]. On $Q$, the denominator of $$H(r,x,y)=\frac{(\epsilon(x)+x)(y+Kx)}{1-2r^2y}$$ is at least $1/2$, so $H,H_x,H_y$ are continuous there by [F5]; [F6] supplies finite bounds $C$ for $|H|$, $C_x$ for $|H_x|$, and $C_y$ for $|H_y|$. Set $C_1=C_x+K L_\epsilon C_y/3$. Choose $R_0\le R_1$ so that $CR_0^2/2\le\delta$ and $C_1R_0^2/2\le1/2$. [given, F1, F5, F6, F8, choose, algebra]

2.1 For each $p_c\in P_c$, let $\mathcal B_{p_c}$ be the closed sup-norm ball of radius $\delta$ about the constant function $p_c$ in $C([-R_0,R_0])$. It is complete: a sup-norm Cauchy sequence has pointwise limits in the closed real interval $P$, the convergence is uniform by the Cauchy bound, and its uniform limit is continuous. For $q\in\mathcal B_{p_c}$ define $$v[q](r)=K\int_0^1s^2\epsilon(q(rs))\,ds,\quad (\mathcal T_{p_c}q)(r)=p_c-\int_0^r tH(t,q(t),v[q](t))\,dt.$$ The function $\epsilon\circ q$ is uniformly continuous on $[-R_0,R_0]$ by [F10]. Because $|rs-\widetilde r s|\le|r-\widetilde r|$ for $s\in[0,1]$, [F9] bounds $|v[q](r)-v[q](\widetilde r)|$ by $K/3$ times $\sup_{s\in[0,1]}|\epsilon(q(rs))-\epsilon(q(\widetilde r s))|$, which tends to zero; hence $v[q]$ is continuous. The integrand defining $\mathcal T_{p_c}q$ is then continuous, so [F3] makes that map continuous as well. By [F9] and [F8], $0\le v[q]\le K\epsilon_{\max}/3=V$; hence $1-2r^2v[q]\ge1/2$. The mean value theorem [F7], linearity and [F9] applied to the bounds $|s^2(\epsilon(q(rs))-\epsilon(\widetilde q(rs)))|\le s^2 L_\epsilon\|q-\widetilde q\|_\infty$ give $$\|v[q]-v[\widetilde q]\|_\infty\le K L_\epsilon\|q-\widetilde q\|_\infty/3.$$ Applying [F7] successively in the $x$ and $y$ variables gives $|H(r,x,y)-H(r,\widetilde x,\widetilde y)|\le C_x|x-\widetilde x|+C_y|y-\widetilde y|$ for state pairs in $P\times[0,V]$. For each endpoint $r$, [F9] bounds the absolute integral of $tH$ or of the difference $t(H-\widetilde H)$ by the corresponding constant times the integral of $|t|$ over the interval between $0$ and $r$. This last integral is $r^2/2$ by [F8]; reversing endpoints changes only the integral sign, and the $r=0$ case is zero. Hence the bounds in step 1.1, [F9] and [F8] give $\|\mathcal T_{p_c}q-p_c\|_\infty\le CR_0^2/2\le\delta$ and $\|\mathcal T_{p_c}q-\mathcal T_{p_c}\widetilde q\|_\infty\le (C_1R_0^2/2)\|q-\widetilde q\|_\infty\le\frac12\|q-\widetilde q\|_\infty$. Thus $\mathcal T_{p_c}$ maps the ball to itself and is a contraction. [step 1.1, given, F3, F5, F7, F8, F9, F10, algebra]

3.1 Iterate canonically from $q_0(r)=p_c$, $q_{j+1}=\mathcal T_{p_c}q_j$. The differences satisfy $\|q_{j+1}-q_j\|_\infty\le 2^{-j}\|q_1-q_0\|_\infty$, so the geometric tail estimate makes $(q_j)$ Cauchy in the complete ball. Its uniform limit $p$ is continuous and remains in the ball. The contraction estimate makes $\mathcal T_{p_c}$ continuous, hence $\mathcal T_{p_c}p=p$; any two fixed points have distance at most half their distance and therefore coincide. If $q$ is even, then $v[q]$ is even, $H(r,q(r),v[q](r))$ is even, and its product with $r$ is odd, so $\mathcal T_{p_c}q$ is even. Every iterate and hence $p$ is even; the fixed point equations give the two displayed integral identities. [step 2.1, construct, algebra]

4.1 The first FTC in [F3] makes $p$ continuously differentiable and yields $p'(r)=-rH(r,p(r),v[p](r))$, including $p'(0)=0$. The parameter-integral theorem [F3], together with the $C^k$ composition and algebra rules [F5], applied repeatedly on $[-R_0,R_0]\times[0,1]$, shows that whenever $p\in C^k$, $v[p]$ is $C^k$ because $(r,s)\mapsto s^2\epsilon(p(rs))$ has continuous $r$-derivatives through order $k$. The denominator is bounded below by $1/2$, so $H(r,p(r),v[p](r))$ is $C^k$; the integral equation then gives $p\in C^{k+1}$. Induction proves $p,v$ are smooth and even. Rewriting the $v$ integral as $r^3v(r)=K\int_0^r t^2\epsilon(p(t))\,dt$, then applying the product rule and the first FTC gives $v'=(K\epsilon(p)-3v)/r$ for $r>0$; the pressure equation is the defining derivative of $p$. [step 3.1, F1, F3, F5, algebra]

4.2 The same $R_0$ and contraction factor work for every central value in $P_c$. Subtracting the fixed-point equations for $p_a,p_b$ gives $$\|p_a-p_b\|_\infty\le |a-b|+\tfrac12\|p_a-p_b\|_\infty,$$ hence $\|p_a-p_b\|_\infty\le2|a-b|$. The integral formula for $v$, [F9] and [F8] give $\|v_a-v_b\|_\infty\le K L_\epsilon\|p_a-p_b\|_\infty/3$. The lapse integrand $J(r,x,y)=r(y+Kx)/(1-2r^2y)$ and its $x,y$ derivatives are continuous and bounded on the same compact set $Q$ by [F6]. Applying [F7] successively in $x,y$ bounds its state increment by a constant times $|p_a-p_b|+|v_a-v_b|$; integrating over $0\le r\le R_0$ with [F9] yields $\|\phi_a-\phi_b\|_\infty\le C_JR_0(\|p_a-p_b\|_\infty+\|v_a-v_b\|_\infty)$ for a finite $C_J$. Thus the solution map is continuous in the sup norm. If another regular-center solution stays in the same pressure ball, integrating its mass and pressure equations yields the same two fixed-point equations; uniqueness in step 3.1 proves it is this solution. [A1, step 1.1, step 3.1, F1, F5, F6, F7, F8, F9, algebra]

5.1 Set $b=1-2r^2v$ and define $\phi$ by the displayed integral. Then $b\ge1/2$, $\phi$ is smooth and even, and $\phi'(0)=0$. The product rule and the equation for $v$ give $M'=4\pi r^2\epsilon(p)/c^2$ from $M=c^2r^3v/G$; also $GM/c^2=r^3v$, so $\phi'=r(v+Kp)/b$ is the lapse equation in [F1]. Apply [F2] with $q=2v$ and $h=q/b$ to obtain the $C^2$ Cartesian metric extension. Its center coefficients are $g_{00}(0)=-e^{2\phi_c}$ and $g_{ij}(0)=\delta_{ij}$, so it is Lorentzian at the center. [A1, step 4.1, F1, F2, F5, algebra]

6.1 For $r>0$, let $U=\{(r,p,v):r>0,\ p\in I_p,\ 1-2r^2v>0\}$ and define the vector field $$F(r,p,v)=\left(-r\frac{(\epsilon(p)+p)(v+Kp)}{1-2r^2v},\ \frac{K\epsilon(p)-3v}{r}\right).$$ By [F5], $F$ is $C^1$ on the open set $U$. Around each point of $U$ choose a closed time-state cylinder $[r_-,r_+]\times\overline B((p_*,v_*),\eta)\subset U$. It is a closed bounded subset of $\mathbb R^3$, hence compact by [F6]. The state derivative of $F$ is continuous there, and its operator norm is continuous, so [F6] gives a finite uniform bound $L$. For each fixed $r\in[r_-,r_+]$, the state ball is convex and open; the mean-value inequality [thm-mean-value-inequality-for-total-derivatives] gives $\|F(r,z)-F(r,\widetilde z)\|_2\le L\|z-\widetilde z\|_2$ on it. Thus $F$ is locally Lipschitz in the state variable, locally uniformly in time, as required by [F4]. If the solution graph remains in a compact subset of $U$ near a finite endpoint, [F4] extends $(p,v)$ past that endpoint. The integral defining $\phi$ then also extends. This is only the stated compact-interior continuation criterion; it gives no global surface or stability claim. [A1, step 4.1, F1, F4, F5, F6] ∎

## Remarks

The integral contraction resolves the coordinate singularity at $r=0$ directly. The ordinary ODE continuation theorem is used only on $r>0$, where the vector field is smooth. The proof is conditional mathematics under the stated EOS and $\mathrm{AC}_\omega$ convention; it does not assert that an observed star follows this model.


