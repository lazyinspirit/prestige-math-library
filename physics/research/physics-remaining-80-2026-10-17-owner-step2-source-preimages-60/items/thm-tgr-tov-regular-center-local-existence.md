---
id: thm-tgr-tov-regular-center-local-existence
kind: theorem
title: "Regular-center TOV local existence and dependence"
status: draft
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
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-tgr-spherical-einstein-tov-reduction: mathematical-premise
  lem-tgr-even-radial-center-regularity: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: contraction
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

[F3] A continuous parameter integrand with continuous parameter derivative on a compact rectangle can be differentiated through its Riemann integral ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]). The fundamental theorem evaluates the integral of a continuous derivative ([[thm-ftc-second-part]]).

[F4] If a locally Lipschitz ODE solution remains in a compact subset of its open time-state domain near a finite endpoint, it extends beyond that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]] clause 1).

[F5] Product, quotient, and chain differentiation in the displayed smooth system use the derivative rules of [[thm-algebra-of-derivatives]].

[A1] The countable-choice use is the canonical smooth tangent/tensor-bundle structure inherited through [[def-countable-choice]]; no full Axiom of Choice is used. The integral contraction and its iteration below make no selection from an infinite family.

## Proof

**Proof technique:** Choose one common closed pressure interval and uniform contraction bounds for every $p_c\in P_c$; then bootstrap the fixed point to the stated center regularity.

1.1 Choose a closed interval $P$ containing the $\delta$-neighbourhood of $P_c$ and contained in $I_p$. Set $\epsilon_{\max}=\max_P\epsilon$, $L_\epsilon=\max_P|\epsilon'|$, and $V=K\epsilon_{\max}/3$. First choose $R_1\le1$ with $2R_1^2V\le1/2$. On the compact set $[-R_1,R_1]\times P\times[0,V]$, the smooth function $$H(r,x,y)=\frac{(\epsilon(x)+x)(y+Kx)}{1-2r^2y}$$ and its $x,y$ derivatives are bounded. Let $C$ bound $|H|$ there, and let $C_1$ bound $|H_x|+K L_\epsilon |H_y|/3$. Choose $R_0\le R_1$ so that $CR_0^2/2\le\delta$ and $C_1R_0^2/2\le1/2$. [given, F1, choose, algebra]

2.1 For each $p_c\in P_c$, let $\mathcal B_{p_c}$ be the closed sup-norm ball of radius $\delta$ about the constant function $p_c$ in $C([-R_0,R_0])$. It is complete: a sup-norm Cauchy sequence has pointwise limits in the closed real interval $P$, the convergence is uniform by the Cauchy bound, and its uniform limit is continuous. For $q\in\mathcal B_{p_c}$ define $$v[q](r)=K\int_0^1s^2\epsilon(q(rs))\,ds,\quad (\mathcal T_{p_c}q)(r)=p_c-\int_0^r tH(t,q(t),v[q](t))\,dt.$$ Then $0\le v[q]\le V$, $1-2r^2v[q]\ge1/2$, and $$\|v[q]-v[\widetilde q]\|_\infty\le K L_\epsilon\|q-\widetilde q\|_\infty/3.$$ The bounds in step 1.1 give $\|\mathcal T_{p_c}q-p_c\|_\infty\le CR_0^2/2\le\delta$ and $\|\mathcal T_{p_c}q-\mathcal T_{p_c}\widetilde q\|_\infty\le (C_1R_0^2/2)\|q-\widetilde q\|_\infty\le\frac12\|q-\widetilde q\|_\infty$. Thus $\mathcal T_{p_c}$ maps the ball to itself and is a contraction. [step 1.1, given, F3, algebra]

3.1 Iterate canonically from $q_0(r)=p_c$, $q_{j+1}=\mathcal T_{p_c}q_j$. The differences satisfy $\|q_{j+1}-q_j\|_\infty\le 2^{-j}\|q_1-q_0\|_\infty$, so the geometric tail estimate makes $(q_j)$ Cauchy in the complete ball. Its uniform limit $p$ is continuous and remains in the ball. The contraction estimate makes $\mathcal T_{p_c}$ continuous, hence $\mathcal T_{p_c}p=p$; any two fixed points have distance at most half their distance and therefore coincide. If $q$ is even, then $v[q]$ is even, $H(r,q(r),v[q](r))$ is even, and its product with $r$ is odd, so $\mathcal T_{p_c}q$ is even. Every iterate and hence $p$ is even; the fixed point equations give the two displayed integral identities. [step 2.1, construct, algebra]

4.1 The FTC makes $p$ continuously differentiable and yields $p'(r)=-rH(r,p(r),v[p](r))$, including $p'(0)=0$. The parameter-integral theorem [F3], applied repeatedly on $[-R_0,R_0]\times[0,1]$, shows that whenever $p\in C^k$, $v[p]$ is $C^k$ because $(r,s)\mapsto s^2\epsilon(p(rs))$ has continuous $r$-derivatives through order $k$. The denominator is bounded below by $1/2$, so $H(r,p(r),v[p](r))$ is $C^k$; the integral equation then gives $p\in C^{k+1}$. Induction proves $p,v$ are smooth and even. Differentiating $r^3v=K\int_0^r t^2\epsilon(p(t))\,dt$ by the product rule and FTC gives $v'=(K\epsilon(p)-3v)/r$ for $r>0$, while the pressure equation is the defining derivative of $p$. [step 3.1, F1, F3, F5, algebra]

4.2 The same $R_0$ and contraction factor work for every central value in $P_c$. Subtracting the fixed-point equations for $p_a,p_b$ gives $$\|p_a-p_b\|_\infty\le |a-b|+\tfrac12\|p_a-p_b\|_\infty,$$ hence $\|p_a-p_b\|_\infty\le2|a-b|$. The integral formula for $v$ gives $\|v_a-v_b\|_\infty\le K L_\epsilon\|p_a-p_b\|_\infty/3$, and the formula for $\phi$ gives a corresponding uniform bound because $b\ge1/2$ and $H$ has bounded derivatives on the compact set. Thus the solution map is continuous in the sup norm. If another regular-center solution stays in the same pressure ball, integrating its mass and pressure equations yields the same two fixed-point equations; uniqueness in step 3.1 proves it is this solution. [A1, step 1.1, step 3.1, F1, algebra]

5.1 Set $b=1-2r^2v$ and define $\phi$ by the displayed integral. Then $b\ge1/2$, $\phi$ is smooth and even, and $\phi'(0)=0$. The product rule and the equation for $v$ give $M'=4\pi r^2\epsilon(p)/c^2$ from $M=c^2r^3v/G$; also $GM/c^2=r^3v$, so $\phi'=r(v+Kp)/b$ is the lapse equation in [F1]. Apply [F2] with $q=2v$ and $h=q/b$ to obtain the $C^2$ Cartesian metric extension. Its center coefficients are $g_{00}(0)=-e^{2\phi_c}$ and $g_{ij}(0)=\delta_{ij}$, so it is Lorentzian at the center. [A1, step 4.1, F1, F2, F5, algebra]

6.1 For $r>0$ the pair $(p,v)$ solves the first-order ODE in [F1] with smooth vector field on the open set where $r>0$, $p\in I_p$, and $1-2r^2v>0$. If its graph remains in a compact subset of that open time-state domain near a finite endpoint, [F4] extends $(p,v)$ past the endpoint. The integral defining $\phi$ then also extends there. This is only the stated compact-interior continuation criterion; it gives no global surface or stability claim. [A1, step 4.1, F1, F4] ∎

## Remarks

The integral contraction resolves the coordinate singularity at $r=0$ directly. The ordinary ODE continuation theorem is used only on $r>0$, where the vector field is smooth. The proof is conditional mathematics under the stated EOS and $\mathrm{AC}_\omega$ convention; it does not assert that an observed star follows this model.


