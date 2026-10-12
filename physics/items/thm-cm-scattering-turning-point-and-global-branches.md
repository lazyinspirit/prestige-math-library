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

[L4] Behaviour of the quadrature: $s\mapsto E-V(s)$ is continuous and strictly positive on $(r_*,\infty)$, comparable to $s-r_*$ near $r_*$ (so $1/\sqrt{E-V(s)}$ is integrable at $r_*$), and tends to $E>0$ as $s\to\infty$ (so $\tau(r)\to\infty$, and the free speed $\sqrt{2E/\mu}$ bounds $\rho'$); continuous functions on intervals have primitives and the integral is additive over adjacent intervals ([[cor-primitives-of-a-continuous-function]], [[def-continuity-real]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Square the energy identity of [L1]: $\frac12\mu(\rho')^2=E-V(\rho)$, which is clause 1's first display. At a time with $\rho=r_*$ the right side is $E-V(r_*)=0$, so $\rho'=0$; then $\mu\rho''(t_*)=-V'(r_*)>0$, so $t_*$ is a strict local minimum of $\rho$, and in particular $\rho(t)>\rho(t_*)$ for $t$ near but different from $t_*$. [given, L1, algebra]

2.1 On the open set where $\rho>r_*$, the right side of the energy identity is strictly positive, so $\rho'\ne0$; hence the sign of $\rho'$ is constant on every connected component of $\{t:\rho(t)>r_*\}$ (a union of open intervals on which the continuous nonvanishing function $\rho'$ has a sign). [step 1.1, L1, algebra]

2.2 Global extension: take the state $z:=(\rho,\rho',\theta)$ in $(0,\infty)\times\mathbb R\times\mathbb R$ with right-hand side $\bigl(x_2,-\mu^{-1}V'(x_1),J/(\mu x_1^2)\bigr)$, which is continuous and locally Lipschitz since $V'$ is $C^1$ on $(0,\infty)$. By step 1.1 and [L4], $\rho\in[r_*,\infty)$ and $(\rho')^2=(2/\mu)(E-V(\rho))$; since $E-V(\rho)>0$ for $\rho>r_*$ and $V$ is bounded below on $[r_*,\infty)$ (it is $U+J^2/(2\mu s^2)$ with $U$ continuous and vanishing beyond $R$), $\rho'$ is bounded by some $M<\infty$. Near a finite endpoint of the domain the graph then lies in the compact set $[r_*,\rho_{\rm loc}]\times[-M,M]\times[\text{bounded }\theta\text{-range}]$, so [L2] extends the solution past every finite endpoint; uniqueness [L2] makes the extension unique. Hence the maximal extension has domain $\mathbb R$. [step 1.1, L2, L4, algebra]

3.1 Shape of the set $\{\rho>r_*\}$. This set is open in $\mathbb R$, and on each of its connected components $\rho'$ has a constant sign (step 2.1). Every bounded component $(t_0,t_1)$ satisfies $\rho(t_0)=\rho(t_1)=r_*$ (endpoints of a component of the open set $\{\rho>r_*\}$ lie in its complement, where $\rho\le r_*$, i.e. $\rho=r_*$); at both endpoints $\rho''=-V'(r_*)/\mu>0$ by step 1.1, so $\rho'$ changes sign from negative to positive at each of them, whence just inside the component the sign is positive near $t_0$ and negative near $t_1$, contradicting constancy of the sign. Hence $\{\rho>r_*\}$ has no bounded component. Since $t_*$ is an isolated zero of $\rho-r_*$ (a strict local minimum by step 1.1) and points just left and just right of $t_*$ belong to $\{\rho>r_*\}$, the two components adjacent to $t_*$ are $(-\infty,t_*)$ and $(t_*,+\infty)$: an open subset of $\mathbb R$ has at most two unbounded components, and each of these two is unbounded on its outer side (a bounded component is impossible, and it cannot end on the inner side at a point other than $t_*$, since its inner endpoint would be an endpoint of a component at which $r_*$ is attained, producing a second strict minimum and the same sign contradiction as above). Therefore $\rho>r_*$ exactly for $t\ne t_*$, $\rho'<0$ on $(-\infty,t_*)$ and $\rho'>0$ on $(t_*,\infty)$. [step 1.1, step 2.1, algebra]

4.1 The quadrature: on each of the two components, $\rho$ is strictly monotone with $\rho'\ne0$, so by [L3] substitution converts time into level: for $t\ge t_*$ with $\rho(t)=r>r_*$, $t-t_*=\int_{r_*}^{r}\mathrm ds/\rho'(s)=\tau(r)$; for $t\le t_*$ with $\rho(t)=r$, $t_*-t=-\int_{r_*}^{r}\mathrm ds/\rho'(s)=\tau(r)$, and $\tau$ is given by the energy identity $|\rho'|=\sqrt{(2/\mu)(E-V)}$. Since $\tau$ is continuous, strictly increasing on $[r_*,\infty)$ and $\tau(r)\to\infty$ as $r\to\infty$ by [L4], the map $r\mapsto\tau(r)$ is a bijection $[r_*,\infty)\to[0,\infty)$, and inverting it gives $\rho(t_*+\tau(r))=r$ and $\rho(t_*-\tau(r))=r$ for every $r\ge r_*$; in particular $\rho(t)>\rho(t_*)=r_*$ for $t\ne t_*$ and the apsis is unique, because any time with $\rho=r_*$ must have $|t-t_*|=\tau(r_*)=0$. These are clauses 2 and 3. [step 2.2, step 3.1, L3, L4]

5.1 Free tails: suppose $t_1\ge t_*$ with $\rho(t_1)>R$. By step 3.1, $\rho$ is strictly increasing on $[t_*,\infty)$, so $\rho(t)\ge\rho(t_1)>R$ for all $t\ge t_1$. On that regime the potential is identically zero and the Cartesian central-force equation reduces to $\mu r''=-\bigl(U'(\rho)/\rho\bigr)r=0$, since $U'(\rho)=0$ for $\rho>R$; hence $r$ is affine on $[t_1,\infty)$ and $r(t)=r(t_1)+(t-t_1)r'(t_1)$ there. The incoming statement is the same argument on $(-\infty,t_2]$. This is clause 4. [step 2.2, step 3.1, L1, algebra] ∎
