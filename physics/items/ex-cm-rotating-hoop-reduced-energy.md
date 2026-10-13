---
id: ex-cm-rotating-hoop-reduced-energy
kind: example
title: "The rotating hoop: reduced Lagrangian, the equation $\\theta''=\\Omega^2\\sin\\theta\\cos\\theta-(g/a)\\sin\\theta$, and the reduced energy versus the inertial mechanical energy"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-sine-and-cosine-addition-formulas, lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets, thm-picard-lindelof-local-existence-and-uniqueness, thm-sine-cosine-zero-sets-and-fundamental-period, def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, def-cm-holonomic-constraint-and-ideal-reactions, thm-cm-energy-stability-of-a-strict-minimum, def-cm-mechanical-vector-field-and-energy-in-a-chart, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.5.1 'Bead on a Rotating Hoop': position (2.61), kinetic energy (2.62), potential (2.63), Lagrangian (2.64), effective potential (2.65) and the equation of motion (2.66) with stationary condition (2.67), printed pages 26-27"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 7.7-7.9 (Generalized Energy and the Hamiltonian Function; Generalized energy theorem; Generalized energy and total energy)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Let $a,m,g>0$ and $\Omega\in\mathbb R$, and let

$$X:\mathbb R\times\mathbb R\to\mathbb R^3,\qquad X(\theta,t):=\bigl(a\sin\theta\cos(\Omega t),\,a\sin\theta\sin(\Omega t),\,a(1-\cos\theta)\bigr),$$

the position of a point of a circle of radius $a$ rotating about the vertical axis with constant
angular speed $\Omega$. For an open interval $I$ and a $C^2$ curve
$\theta:I\to\mathbb R$ put $x(t):=X(\theta(t),t)$. Stationarity on $I$ means stationarity of the restricted curve on every $[t_1,t_2]\subseteq I$ with $t_1<t_2$, using fixed-endpoint variations. Then:

1. $\dot x=X_\theta\theta'+X_t$ and $\frac12m|\dot x|^2=\frac12ma^2\bigl(\theta'^2+\Omega^2\sin^2\theta\bigr)$,
   while $\ddot x\cdot X_\theta=a^2\theta''-a^2\Omega^2\sin\theta\cos\theta$;
2. the curves $\theta$ that are stationary for the action of the time-dependent Lagrangian chart
   $L(\theta,v):=\frac12ma^2\bigl(v^2+\Omega^2\sin^2\theta\bigr)-mga(1-\cos\theta)$ on
   $O:=\mathbb R\times\mathbb R\times\mathbb R$ are exactly the $C^2$ solutions of

$$\theta''=\Omega^2\sin\theta\cos\theta-\frac{g}{a}\sin\theta ;$$

3. the **reduced energy** $E(\theta,v):=\frac12ma^2v^2-\frac12ma^2\Omega^2\sin^2\theta-mga\cos\theta$
   is constant along every $C^2$ solution, whereas the inertial kinetic-plus-potential energy
   $K+U_g=\frac12m|\dot x|^2+mga(1-\cos\theta)$ satisfies

$$\frac{d}{dt}\bigl(K+U_g\bigr)=2ma^2\Omega^2\sin\theta\cos\theta\,\theta'=ma^2\Omega^2\frac{d}{dt}\sin^2\theta$$

   along every solution, and equals $E+ma^2\Omega^2\sin^2\theta+mga$; it is therefore in general
   not conserved, and it differs from $E$ by $ma^2\Omega^2\sin^2\theta+mga$;
4. if the ambient motion is additionally modelled by $m\ddot x=(0,0,-mg)+R$ with an ideal
   reaction satisfying $R(t)\cdot X_\theta(\theta(t),t)=0$, then the same equation of part 2 holds,
   and the reaction power is

$$R\cdot\dot x=\frac{d}{dt}\bigl(K+U_g\bigr)=2ma^2\Omega^2\sin\theta\cos\theta\,\theta' ,$$

   generally nonzero: the prescribed rotation can do work on the point;
5. if $a\Omega^2\le g$, then $0$ is a strict local minimum of
   $U_{\mathrm{eff}}(\theta):=-\frac12ma^2\Omega^2\sin^2\theta-mga\cos\theta$ with
   $U_{\mathrm{eff}}'(0)=0$, and the equilibrium $(0,0)$ of
   $\theta'=v,\ v'=\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta$ is Lyapunov stable; if
   $a\Omega^2>g$, then $0$ is not a local minimum of $U_{\mathrm{eff}}$ and the stability
   criterion does not apply.

## Facts & Assumptions

**Given:** The constants $a,m,g>0$ and $\Omega\in\mathbb R$, the map $X$ displayed in the Example, an open interval $I$ ([[def-interval]]) and a $C^2$ curve $\theta:I\to\mathbb R$ with $x:=X(\theta(\cdot),\cdot)$; the Lagrangian $L$ and the reduced potential $U_{\mathrm{eff}}$ of the Example.

[F1] Derivatives and inner products of the carrier
([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]],
[[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]],
[[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]],
[[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]]):
$X$ is $C^\infty$, and with $c:=\cos(\Omega t)$, $s:=\sin(\Omega t)$,
$$X_\theta=(a\cos\theta\,c,\ a\cos\theta\,s,\ a\sin\theta),\qquad X_t=(-a\Omega\sin\theta\,s,\ a\Omega\sin\theta\,c,\ 0),$$
$$X_{\theta\theta}=(-a\sin\theta\,c,\ -a\sin\theta\,s,\ a\cos\theta),\qquad X_{\theta t}=(-a\Omega\cos\theta\,s,\ a\Omega\cos\theta\,c,\ 0),\qquad X_{tt}=(-a\Omega^2\sin\theta\,c,\ -a\Omega^2\sin\theta\,s,\ 0),$$
and the six identities
$$|X_\theta|^2=a^2,\quad |X_t|^2=a^2\Omega^2\sin^2\theta,\quad X_\theta\cdot X_t=0,$$
$$X_\theta\cdot X_{\theta\theta}=0,\quad X_\theta\cdot X_{\theta t}=0,\quad X_\theta\cdot X_{tt}=-a^2\Omega^2\sin\theta\cos\theta$$
hold; each is expansion of the displayed components together with $\cos^2+\sin^2=1$.

[F2] Chain rule along the curve ([[thm-chain-rule-for-total-derivatives]]): if $x(t)=X(\theta(t),t)$ with $\theta$ of class $C^2$, then $\dot x=X_\theta\theta'+X_t$ and $\ddot x=X_{\theta\theta}\theta'^2+2X_{\theta t}\theta'+X_{tt}+X_\theta\theta''$, all derivatives being evaluated at $(\theta(t),t)$.

[F3] The chart and its Euler–Lagrange expression ([[def-cm-time-dependent-lagrangian-and-action]]): $L$ is $C^\infty$ on $O=\mathbb R\times\mathbb R\times\mathbb R$, so $(O,L)$ is a time-dependent Lagrangian chart over every $[t_1,t_2]\times\mathbb R$; its gradients are $L_\theta=ma^2\Omega^2\sin\theta\cos\theta-mga\sin\theta$, $L_v=ma^2v$, and its Euler–Lagrange expression along a $C^2$ curve is $E_L(\theta)=ma^2\Omega^2\sin\theta\cos\theta-mga\sin\theta-ma^2\theta''$. By [[thm-cm-stationarity-iff-euler-lagrange]] a $C^2$ curve is stationary for the action if and only if $E_L(\theta)=0$.

[F4] Calculus rules for the energy: sums and products of differentiable functions are differentiable ([[thm-algebra-of-derivatives]]), and a differentiable function on an interval whose derivative vanishes identically is constant ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[F5] Ideal reactions ([[def-cm-holonomic-constraint-and-ideal-reactions]]): a reaction that performs no virtual work on the moving constraint satisfies $R(t)\cdot\delta x=0$ for every fixed-time virtual displacement; for the circle at time $t$ the virtual displacements are the multiples of $X_\theta(\theta(t),t)$, so the hypothesis used below is $R\cdot X_\theta=0$.

[F6] The batch-3 energy-stability theorem ([[thm-cm-energy-stability-of-a-strict-minimum]], [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]): for a $C^2$ potential $U:\mathbb R\to\mathbb R$ and $q_0$ with $U'(q_0)=0$ a strict local minimum of $U$, the equilibrium $(q_0,0)$ of $q'=v$, $v'=-U'(q)/M_0$ with the constant $M_0=m a^2>0$ is Lyapunov stable.

## Verification

**Proof technique:** direct; compute the kinematics of the carrier, identify the reduced Lagrangian and its Euler–Lagrange equation, differentiate the two energies along solutions, and contract the ambient equation with the tangent vector for the reaction power.

1.1 By [F2] and [F1], $\dot x=X_\theta\theta'+X_t$ and $$|\dot x|^2=|X_\theta|^2\theta'^2+2\theta'\,X_\theta\cdot X_t+|X_t|^2=a^2\theta'^2+a^2\Omega^2\sin^2\theta,$$ which gives the velocity formula of part 1. [F1, F2, algebra]

1.2 By [F2] and [F1], $$\ddot x\cdot X_\theta=\theta''|X_\theta|^2+2\theta'\,X_{\theta t}\cdot X_\theta+\theta'^2\,X_{\theta\theta}\cdot X_\theta+X_{tt}\cdot X_\theta=a^2\theta''-a^2\Omega^2\sin\theta\cos\theta,$$ which is the acceleration formula of part 1. [F1, F2, algebra]

1.3 By [F3], $E_L(\theta)=ma^2\Omega^2\sin\theta\cos\theta-mga\sin\theta-ma^2\theta''$, so $E_L(\theta)=0$ if and only if $ma^2\theta''=ma^2\Omega^2\sin\theta\cos\theta-mga\sin\theta$, that is, if and only if $\theta''=\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta$; by the equivalence of [F3] the stationary curves are exactly the $C^2$ solutions, which is part 2. [F3, algebra]

2.1 Let $\theta$ be a $C^2$ solution. By [F4] the function $t\mapsto E(\theta(t),\theta'(t))$ is differentiable on $I$ with $$\frac{d}{dt}E(\theta,\theta')=ma^2\theta'\theta''-ma^2\Omega^2\sin\theta\cos\theta\,\theta'+mga\sin\theta\,\theta'=\theta'\bigl(ma^2\theta''-ma^2\Omega^2\sin\theta\cos\theta+mga\sin\theta\bigr)=0$$ by step 1.3; hence $E(\theta,\theta')$ is constant on $I$ by [F4]. This is the first assertion of part 3. [F4, step 1.3, algebra]

2.2 Assume now the ambient model $m\ddot x=(0,0,-mg)+R$ with $R\cdot X_\theta=0$ as in [F5]. Contracting with $X_\theta$ kills $R$, and $(0,0,-mg)\cdot X_\theta=-mga\sin\theta$ by [F1]; by step 1.2, $$m\bigl(a^2\theta''-a^2\Omega^2\sin\theta\cos\theta\bigr)=-mga\sin\theta,$$ i.e. $\theta''=\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta$ after division by $ma^2>0$. This is the first assertion of part 4. [F1, F5, step 1.2, algebra]

2.3 Part 5: $U_{\mathrm{eff}}'(\theta)=-ma^2\Omega^2\sin\theta\cos\theta+mga\sin\theta$, so $U_{\mathrm{eff}}'(0)=0$, and the mechanical system of [F6] with $M_0=ma^2$ and this potential is exactly $\theta'=v$, $v'=\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta$; moreover the exact factorization $$U_{\mathrm{eff}}(\theta)-U_{\mathrm{eff}}(0)=mga(1-\cos\theta)-\tfrac12ma^2\Omega^2\sin^2\theta=ma(1-\cos\theta)\Bigl[g-\tfrac12a\Omega^2(1+\cos\theta)\Bigr]$$ together with $\cos\theta\le1$ and $1-\cos\theta=2\sin^2(\theta/2)$ ([[thm-sine-and-cosine-addition-formulas]]), which with [[thm-sine-cosine-zero-sets-and-fundamental-period]] gives $\cos\theta=1\iff\theta\in2\pi\mathbb Z$ shows that for $a\Omega^2\le g$ one has $U_{\mathrm{eff}}(\theta)>U_{\mathrm{eff}}(0)$ for $0<|\theta|<2\pi$: the product is nonnegative and the bracket is at least $g-a\Omega^2\ge0$, vanishing only if $g=a\Omega^2$ and $\cos\theta=1$. Hence $0$ is a strict local minimum of $U_{\mathrm{eff}}$, and [F6] makes $(0,0)$ Lyapunov stable. If $a\Omega^2>g$, the bracket is negative for $|\theta|$ small (continuity at $\theta=0$, where it equals $g-a\Omega^2$), while $1-\cos\theta>0$ for small nonzero $\theta$, so $U_{\mathrm{eff}}(\theta)<U_{\mathrm{eff}}(0)$ there and $0$ is not a local minimum; [F6] gives no conclusion in that case. [F1, F6, step 1.3, algebra]

3.1 By steps 1.1 and 2.1, $K+U_g=\frac12ma^2(\theta'^2+\Omega^2\sin^2\theta)+mga(1-\cos\theta)=E(\theta,\theta')+ma^2\Omega^2\sin^2\theta+mga$; along a solution, by [F4] and step 1.3, $$\frac{d}{dt}(K+U_g)=\frac{d}{dt}\bigl(ma^2\Omega^2\sin^2\theta\bigr)=2ma^2\Omega^2\sin\theta\cos\theta\,\theta' .$$ The phase field $(\theta,v)\mapsto(v,\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta)$ is $C^1$ on $\mathbb R^2$, hence locally Lipschitz ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]]); [[thm-picard-lindelof-local-existence-and-uniqueness]] supplies a solution through $(\pi/4,1)$. If $\Omega\ne0$ the displayed derivative is nonzero at the initial time of this solution, where it equals $ma^2\Omega^2$, so $K+U_g$ is not conserved along all solutions; as functions on the full phase space, $K+U_g$ agrees with $E$ up to the constant $mga$ precisely when the term $ma^2\Omega^2\sin^2\theta$ is absent, i.e. when $\Omega=0$. This is the second assertion of part 3. [F1, F4, step 1.1, step 2.1, algebra]

4.1 Under the hypotheses of step 2.2, $K+U_g$ has derivative $m\ddot x\cdot\dot x+mga\sin\theta\,\theta'$ by [F4], and $\dot z=a\sin\theta\,\theta'$ for the third coordinate $z=a(1-\cos\theta)$ of $x$; substituting $m\ddot x=(0,0,-mg)+R$ gives $m\ddot x\cdot\dot x=-mg\dot z+R\cdot\dot x$, so $$\frac{d}{dt}(K+U_g)=R\cdot\dot x-mg\dot z+mga\sin\theta\,\theta'=R\cdot\dot x .$$ Since $\dot x=X_\theta\theta'+X_t$ and $R\cdot X_\theta=0$, also $R\cdot\dot x=R\cdot X_t$; by step 3.1 the common value is $2ma^2\Omega^2\sin\theta\cos\theta\,\theta'$, generally nonzero. This is the second assertion of part 4. [F1, F2, F4, F5, step 3.1, step 2.2, algebra]

5.1 Parts 1-5 are proved. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 2.2, step 4.1, step 2.3] ∎

## Remarks

- The reduced energy is Jacobi's generalized energy of the chart: $E=vL_v-L$ with the additive constant $mga$ dropped. Since $L$ does not depend on $t$, $E$ is conserved; the inertial energy $K+U_g$ instead contains the term $ma^2\Omega^2\sin^2\theta$ of the prescribed rotation and is not conserved. This is the mechanism of the rheonomic constraint of [[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]], whose reaction power $R\cdot q'=-\Lambda\cdot G_t$ need not vanish; part 4 computes that power directly for this carrier.

- The model is the ideal frictionless threading of a point on a circle rotating with prescribed constant angular speed; the reaction $R$ and the power identity are properties of that ideal model. Statements about a real hoop (friction, forcing torque, deformations, measured frequencies) require apparatus and empirical assumptions that are not part of this item.

- The stability clause is Lyapunov stability of the equilibrium of the exact reduced equation on the chart $\mathbb R$; no asymptotic stability, and no analysis of the supercritical equilibria $\cos\theta=g/(a\Omega^2)$ or of the inverted point, is asserted.
