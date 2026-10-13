---
id: thm-cm-scattering-turning-point-and-global-branches
kind: theorem
title: "Finite-range scattering: the simple outer turning point, the two global branches and the free tails"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-picard-lindelof-local-existence-and-uniqueness, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, thm-substitution, thm-derivative-of-an-inverse, thm-chain-rule, thm-algebra-of-derivatives, cor-primitives-of-a-continuous-function, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-continuity-real]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-substitution: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (340)-(346): the energy equation, the turning point and the two asymptotic branches of a scattering orbit"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.5, Eqs. (3.66)-(3.68): the nearest-approach point, the equality of the two branch angle changes and the scattering-angle quadrature"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\mu>0$, let $U:(0,\infty)\to\mathbb R$ be of class $C^2$, let $R>0$ satisfy
$U(r)=0$ for every $r\ge R$, let $E>0$ and $J>0$, and put
$V(r):=U(r)+J^2/(2\mu r^2)$ ([[def-cm-central-force-trajectory]]). Suppose $r_*>0$
satisfies

$$V(r_*)=E,\qquad V'(r_*)<0,\qquad V(r)<E\quad(r>r_*).$$

Let $r:I\to\mathbb R^3$ be a central-force trajectory for $(\mu,U)$ with
constant nonzero angular momentum $j=Je_3$, $J>0$, energy $E$, and
$|r(t)|\ge r_*$ for all $t\in I$, whose radial part attains the value $r_*$ at
some $t_*\in I$ ([[thm-cm-central-force-polar-reduction]]). Then:

1. $(\rho')^2=\dfrac{2}{\mu}\bigl(E-V(\rho)\bigr)$ on $I$, where $\rho=|r|$;
   $\rho'(t_*)=0$ and $\rho''(t_*)=-V'(r_*)/\mu>0$, so $t_*$ is a strict
   minimum of $\rho$;
2. $r$ extends uniquely to a central-force trajectory on all of $\mathbb R$;
   along the extension $\rho\ge r_*$, $\rho(t)>\rho(t_*)=r_*$ for $t\ne t_*$,
   and $\rho$ is strictly decreasing on $(-\infty,t_*]$ and strictly
   increasing on $[t_*,\infty)$;
3. the time quadrature
   $$\tau(r):=\int_{r_*}^{r}\frac{\mathrm ds}{\sqrt{(2/\mu)(E-V(s))}} \qquad(r\ge r_*)$$
   is finite for every $r$ and satisfies
   $\rho(t_*+\tau(r))=r$ for all $r\ge r_*$;
4. for every time $t_1\ge t_*$ with $\rho(t_1)>R$ the motion is exactly free
   from $t_1$ on: $r(t)=r(t_1)+(t-t_1)r'(t_1)$ for all $t\ge t_1$, and $\rho$
   is strictly increasing there; symmetrically, for $t_2\le t_*$ with
   $\rho(t_2)>R$, $r(t)=r(t_2)+(t-t_2)r'(t_2)$ for all $t\le t_2$.

## Facts & Assumptions

**Given:** The finite-range central-force data $(\mu,U,R)$, the energy $E>0$, the angular momentum $j=Je_3$ with $J>0$, the simple outer turning point $r_*$ of $V$, and a trajectory with $|r|\ge r_*$ attaining $r_*$ at $t_*$.

[L1] Polar reduction and energy: $r=\rho\,n(\theta)$, $\rho=|r|$, $\rho^2\theta'=J/\mu$, $\mu\rho''=-V'(\rho)$, and the constant energy is $E=\frac12\mu(\rho')^2+V(\rho)$ ([[thm-cm-central-force-polar-reduction]]; here $V=U^{\mathrm{eff}}_J$ by [[def-cm-central-force-trajectory]]).

[L2] Compact continuation and uniqueness for locally Lipschitz autonomous systems: solutions trapped in a compact subset of the open state domain have no finite endpoints, and two solutions with the same state at one time agree on every common interval ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]], [[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]]).

[L3] Substitution and monotone inversion: a $C^1$ strictly monotone function on an interval with nonvanishing derivative has a $C^1$ inverse with reciprocal derivative, and substitution converts $\int \mathrm dt$ into $\int \mathrm d\rho/|\rho'|$ on such a branch ([[thm-derivative-of-an-inverse]], [[thm-substitution]], [[thm-chain-rule]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] Behaviour of the quadrature: $s\mapsto E-V(s)$ is continuous and strictly positive on $(r_*,\infty)$, comparable to $s-r_*$ near $r_*$ (so $1/\sqrt{E-V(s)}$ is integrable at $r_*$), and tends to $E>0$ as $s\to\infty$ (so $\tau(r)\to\infty$, $|\rho'|\le\sqrt{2E/\mu}$ whenever $\rho\ge R$, since there $V(\rho)=J^2/(2\mu\rho^2)\ge0$); continuous functions on intervals have primitives and the integral is additive over adjacent intervals ([[cor-primitives-of-a-continuous-function]], [[def-continuity-real]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Square the energy identity of [L1]: $\frac12\mu(\rho')^2=E-V(\rho)$, which is clause 1's first display. At a time with $\rho=r_*$ the right side is $E-V(r_*)=0$, so $\rho'=0$; then $\mu\rho''(t_*)=-V'(r_*)>0$, so $t_*$ is a strict local minimum of $\rho$, and in particular $\rho(t)>\rho(t_*)$ for $t$ near but different from $t_*$. [given, L1, algebra]

2.1 On the open set where $\rho>r_*$, the right side of the energy identity is strictly positive, so $\rho'\ne0$; hence the sign of $\rho'$ is constant on every connected component of $\{t:\rho(t)>r_*\}$ (a union of open intervals on which the continuous nonvanishing function $\rho'$ has a sign). [step 1.1, L1, algebra]

2.2 Global extension: take the state $z:=(\rho,\rho',\theta)$ in $(0,\infty)\times\mathbb R\times\mathbb R$ with right-hand side $F(x):=\bigl(x_2,-\mu^{-1}V'(x_1),J/(\mu x_1^2)\bigr)$. This field is locally Lipschitz: near any $x_1>0$, continuity of $V''$ bounds it by some $M$ on a small closed interval; the fundamental theorem for continuous $V''$ gives $V'(a)-V'(b)=\int_b^aV''$, and the Darboux definition with $|V''|\le M$ gives $|V'(a)-V'(b)|\le M|a-b|$. Also $x_1^{-2}$ is locally Lipschitz by factoring the difference of reciprocal powers. Along every solution, $H(\rho,\rho'):=\frac12\mu(\rho')^2+V(\rho)$ is constant by the radial equation. Also $\rho\ge r_*$ on every continuation: if it entered $\rho<r_*$, continuity from $t_*$ would give a boundary time with $\rho=r_*$ and values below $r_*$ arbitrarily nearby on one side; there $H=E$ gives $\rho'=0$ and the equation gives $\rho''=-V'(r_*)/\mu>0$, contradicting the strict local-minimum property. Thus $V(\rho)\le E$ and $\rho'^{\,2}=(2/\mu)(E-V(\rho))$. The function $V$ is bounded below on $[r_*,\infty)$ because $U$ is continuous and vanishes beyond $R$, so $\rho'$ is bounded; also $0<\theta'=J/(\mu\rho^2)\le J/(\mu r_*^2)$. On every bounded time interval, $\rho$ and $\theta$ are therefore bounded, so near every finite right endpoint $z$ lies in a compact subset of the state domain and [L2] continues it. For a finite left endpoint apply [L2] to $\widehat z(s):=z(-s)$, which solves $\widehat z'=-F(\widehat z)$. Hence the maximal extension of $z$ is defined on $\mathbb R$. Set $n(\theta):=\cos\theta\,e_1+\sin\theta\,e_2$ and $n_\perp(\theta):=-\sin\theta\,e_1+\cos\theta\,e_2$. The relation $\theta'=J/(\mu\rho^2)$ gives $\theta''=-2\rho'\theta'/\rho$; differentiating gives $$r''=(\rho''-\rho\theta'^2)n(\theta)+(2\rho'\theta'+\rho\theta'')n_\perp(\theta),$$ whose second coefficient vanishes. Using $\mu\rho''=-V'(\rho)$ then yields $\mu(\rho''-\rho\theta'^2)=-U'(\rho)$, so the reconstructed curve satisfies the central-force equation. Any other continuation has the same angular momentum on the overlap: along it $j'=\mu(r'\times r'+r\times r'')=0$ by the central-force equation, so it remains in the same plane. By [L1] it has polar data there; shift its angle lift by an integer multiple of $2\pi$ to match $\theta$ at a common time. The resulting state solves the same locally Lipschitz system with the same initial state, so uniqueness [L2] gives the same $\rho,\theta$ and hence the same trajectory. [step 1.1, L1, L2, L4, algebra]

3.1 Shape of the set $\{\rho>r_*\}$. This set is open in $\mathbb R$, and on each of its connected components $\rho'$ has a constant sign (step 2.1). Every bounded component $(t_0,t_1)$ satisfies $\rho(t_0)=\rho(t_1)=r_*$ (endpoints of a component of the open set $\{\rho>r_*\}$ lie in its complement, where $\rho\le r_*$, i.e. $\rho=r_*$); at both endpoints $\rho''=-V'(r_*)/\mu>0$ by step 1.1, so $\rho'$ changes sign from negative to positive at each of them, whence just inside the component the sign is positive near $t_0$ and negative near $t_1$, contradicting constancy of the sign. Hence $\{\rho>r_*\}$ has no bounded component. Since $t_*$ is an isolated zero of $\rho-r_*$ (a strict local minimum by step 1.1) and points just left and just right of $t_*$ belong to $\{\rho>r_*\}$, the two components adjacent to $t_*$ are $(-\infty,t_*)$ and $(t_*,+\infty)$: an open subset of $\mathbb R$ has at most two unbounded components, and each of these two is unbounded on its outer side (a bounded component is impossible, and it cannot end on the inner side at a point other than $t_*$, since its inner endpoint would be an endpoint of a component at which $r_*$ is attained, producing a second strict minimum and the same sign contradiction as above). Therefore $\rho>r_*$ exactly for $t\ne t_*$, $\rho'<0$ on $(-\infty,t_*)$ and $\rho'>0$ on $(t_*,\infty)$. [step 1.1, step 2.1, algebra]

4.1 The quadrature: set $q(s):=\sqrt{(2/\mu)(E-V(s))}$ for $s>r_*$. The integral defining $\tau$ is finite and continuous at $r_*$ by [L4], and $\tau'(s)=1/q(s)$ for $s>r_*$. On the outgoing branch, the chain rule and $\rho'=q(\rho)$ give $\frac{d}{dt}\tau(\rho(t))=1$ for $t>t_*$; taking the limit as $t\downarrow t_*$ yields $\tau(\rho(t))=t-t_*$. On the incoming branch, $\rho'=-q(\rho)$ gives $\frac{d}{dt}\tau(\rho(t))=-1$, hence $\tau(\rho(t))=t_*-t$. The function $\tau$ is strictly increasing on $[r_*,\infty)$ and tends to $+\infty$ by [L4], so it maps this interval onto $[0,\infty)$. Inverting the outgoing identity gives $\rho(t_*+\tau(r))=r$ for every $r\ge r_*$; the incoming identity gives the corresponding incoming branch. In particular the unique time with $\rho=r_*$ is $t_*$, and $\rho(t)>r_*$ for $t\ne t_*$. These are clauses 2 and 3. [step 2.2, step 3.1, L3, L4, algebra]

5.1 Free tails: suppose $t_1\ge t_*$ with $\rho(t_1)>R$. By step 3.1, $\rho$ is strictly increasing on $[t_*,\infty)$, so $\rho(t)\ge\rho(t_1)>R$ for all $t\ge t_1$. On that regime the potential is identically zero and the Cartesian central-force equation reduces to $\mu r''=-\bigl(U'(\rho)/\rho\bigr)r=0$, since $U'(\rho)=0$ for $\rho>R$; hence $r$ is affine on $[t_1,\infty)$ and $r(t)=r(t_1)+(t-t_1)r'(t_1)$ there. The incoming statement is the same argument on $(-\infty,t_2]$. This is clause 4. [step 2.2, step 3.1, L1, algebra] ∎
