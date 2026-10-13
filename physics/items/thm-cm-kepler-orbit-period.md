---
id: thm-cm-kepler-orbit-period
kind: theorem
title: "Completeness and periodicity of the negative-energy Kepler orbit, with $T=2\\pi\\mu ab/J$ and $T^2=4\\pi^2\\mu a^3/\\kappa$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, thm-cm-kepler-conic-and-eccentricity, thm-cm-kepler-ellipse-geometry, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-picard-lindelof-local-existence-and-uniqueness, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-countable-choice, thm-derivative-of-an-inverse, thm-chain-rule, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, cor-primitives-of-a-continuous-function, thm-additivity-over-subintervals, def-interval, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  thm-cm-kepler-ellipse-geometry: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 32-33, Eqs. (2.86)-(2.90): the $E<0$ elliptic branch of the inverse-square problem"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.59)-(3.65): the elliptic branch and the relation between period, semimajor axis and potential strength"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $\mu>0$,
$\kappa>0$, $U(\rho)=-\kappa/\rho$ on $(0,\infty)$, and let $r:I\to\mathbb R^3$
be a central-force trajectory for $(\mu,U)$ with constant angular momentum
$j=Je_3$, $J>0$, and constant energy $E<0$. Let $e\in[0,1)$,
$\theta_0\in\mathbb R$, $p=J^2/(\mu\kappa)$, $a=p/(1-e^2)$,
$b=a\sqrt{1-e^2}$, and $\varrho(\varphi):=p/(1+e\cos(\varphi-\theta_0))$
be the conic data of [[thm-cm-kepler-conic-and-eccentricity]], and let
$(\rho,\theta)$ be polar data as in
[[thm-cm-central-force-polar-reduction]]. Then:

1. **(Completeness.)** $r$ extends uniquely to a central-force trajectory for
   $(\mu,U)$ defined on all of $\mathbb R$; along it
   $\rho(t)\in[p/(1+e),\,p/(1-e)]$ for every $t$, and $\rho$ and $\rho'$ are
   bounded. Consequently every maximal central-force trajectory with these
   data has domain $\mathbb R$.
2. **(Periodicity.)** $\theta:\mathbb R\to\mathbb R$ is a strictly increasing
   $C^1$ bijection with
   $\dfrac{J}{\mu}\Bigl(\dfrac{1-e}{p}\Bigr)^2\le\theta'\le\dfrac{J}{\mu}\Bigl(\dfrac{1+e}{p}\Bigr)^2$;
   if $t_0\in\mathbb R$ and $T>0$ is determined by
   $\theta(t_0+T)=\theta(t_0)+2\pi$, then $r(t+T)=r(t)$ and
   $r'(t+T)=r'(t)$ for all $t\in\mathbb R$.
3. **(Period value.)** With $r_{\max}:=p/(1-e)$ and $r_{\min}:=p/(1+e)$,
   $$T=\frac{2\pi\mu ab}{J}=2\pi\sqrt{\frac{\mu}{\kappa}}\,a^{3/2}, \qquad T^2=\frac{4\pi^2\mu a^3}{\kappa}.$$

## Facts & Assumptions

**Given:** The inverse-square central-force trajectory with constant nonzero angular momentum and negative energy, its conic data from [[thm-cm-kepler-conic-and-eccentricity]], and its polar data.

[L1] Polar reduction: $r=\rho\,n(\theta)$ with $\rho=|r|$, $\rho^2\theta'=J/\mu$, $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$ with $U^{\mathrm{eff}}_J(\rho)=-\kappa/\rho+J^2/(2\mu\rho^2)$, so $(U^{\mathrm{eff}}_J)'(\rho)=\kappa/\rho^2-J^2/(\mu\rho^3)$ is $C^1$ on $(0,\infty)$; the energy is constant ([[thm-cm-central-force-polar-reduction]]).

[L2] Conic data: for $t$ in the interior of $I$, $\rho(t)=\varrho(\theta(t))$ with $\varrho$ $C^1$ and $2\pi$-periodic, $\varrho\in[r_{\min},r_{\max}]$, and $E<0\iff e<1$ ([[thm-cm-kepler-conic-and-eccentricity]], [[thm-cm-kepler-ellipse-geometry]]).

[L3] Compact continuation: for $z'=F(z)$ with $F$ continuous and locally Lipschitz on an open $U\subseteq\mathbb R^n$, a solution whose values near a finite endpoint lie in a compact subset of $U$ extends past that endpoint; solutions agreeing at one time agree on every common interval containing it ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]], [[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]]).

[L4] Chain rule and derivative algebra: $\rho=\varrho\circ\theta$ gives $\rho'=\varrho'(\theta)\,\theta'$ on the interior of $I$, and $\varrho'$ is $2\pi$-periodic; sums, products, quotients and compositions of $C^1$ functions are $C^1$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-algebra-of-continuous-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L5] The inverse of a continuous injective function with nonvanishing derivative on an interval is differentiable with $\tau'=1/(\theta'\circ\tau)$ ([[thm-derivative-of-an-inverse]]); continuous functions on intervals have primitives and integrals are additive over adjacent subintervals ([[cor-primitives-of-a-continuous-function]], [[thm-additivity-over-subintervals]]).

[L6] $\cos$ and $\sin$ have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], for $t$ in the interior of $I$ the function $\varphi(t):=\theta(t)$ satisfies $\rho(t)=\varrho(\varphi(t))\in[r_{\min},r_{\max}]$ and, by [L4], $\rho'(t)=\varrho'(\varphi(t))\theta'(t)$ with $|\theta'|=J/(\mu\rho^2)\le J/(\mu r_{\min}^2)$; since $\varrho'$ is continuous and $2\pi$-periodic, it is bounded on $\mathbb R$ by $M_1:=\max|\varrho'|$, so $|\rho'|\le M:=M_1J/(\mu r_{\min}^2)$ on the interior of $I$; by continuity the bounds for $\rho$ and $\rho'$ hold on all of $I$. [given, L1, L2, L4, algebra]

1.2 Consider the state $z:=(\rho,\rho',\theta)$ in the open set $U_0:=(0,\infty)\times\mathbb R\times\mathbb R$ with right-hand side $F(x):=\bigl(x_2,\,-\mu^{-1}\bigl(U^{\mathrm{eff}}_J\bigr)'(x_1),\,J/(\mu x_1^2)\bigr)$; the radial equation of [L1] and $\theta'=J/(\mu\rho^2)$ give $z'=F(z)$. Here $\bigl(U^{\mathrm{eff}}_J\bigr)'(s)=\kappa/s^2-J^2/(\mu s^3)$, so $F$ is locally Lipschitz: on a state box with $x_1\ge\delta>0$, each $x_1^{-k}$ for $k=2,3$ satisfies $|x_1^{-k}-y_1^{-k}|\le k\delta^{-k-1}|x_1-y_1|$ by factoring the difference of reciprocal powers, while the first component is linear. Along every solution of this system, $H(\rho,\rho'):=\frac12\mu\rho'^2+U^{\mathrm{eff}}_J(\rho)$ is constant, since $H'=\rho'\bigl(\mu\rho''+(U^{\mathrm{eff}}_J)'(\rho)\bigr)=0$; its value is the given $E<0$. With $p=J^2/(\mu\kappa)$, direct algebra gives $$E-U^{\mathrm{eff}}_J(s)=\frac{\kappa(1-e^2)}{2p s^2}\left(s-\frac{p}{1+e}\right)\left(\frac{p}{1-e}-s\right).$$ Thus every such solution has $r_{\min}=p/(1+e)\le\rho\le r_{\max}=p/(1-e)$; its energy identity bounds $\rho'$, and $\theta'=J/(\mu\rho^2)$ is bounded as well. On a bounded time interval, $\theta$ is consequently bounded, so near every finite endpoint $z$ lies in a compact subset of $U_0$. Compact continuation [L3] extends it past every finite right endpoint. For a finite left endpoint apply [L3] to $\widehat z(s):=z(-s)$, which solves the time-reversed locally Lipschitz system $\widehat z'=-F(\widehat z)$. Hence the maximal extension of $z$ is defined on all of $\mathbb R$. For $n(\theta):=\cos\theta\,e_1+\sin\theta\,e_2$ and $n_\perp(\theta):=-\sin\theta\,e_1+\cos\theta\,e_2$, differentiating $r=\rho n(\theta)$ gives $$r''=(\rho''-\rho\theta'^2)n(\theta)+(2\rho'\theta'+\rho\theta'')n_\perp(\theta).$$ Since $\theta'=J/(\mu\rho^2)$, $\theta''=-2\rho'\theta'/\rho$ and the second coefficient vanishes; the radial equation then gives $\mu(\rho''-\rho\theta'^2)=-U'(\rho)$. Thus the reconstructed $r$ satisfies the central-force equation. For any other continuation, the product rule and the central-force equation give $j'=\mu(r'\times r'+r\times r'')=0$, so its angular momentum vector agrees with the one on the overlap; cross-product orthogonality places it in the same plane. By [L1] it has polar data there, and shifting its angle lift by an integer multiple of $2\pi$ makes the angle agree at a common time. The resulting state solves the same locally Lipschitz system with the same initial state, so uniqueness [L3] gives the same $\rho,\theta$ and hence the same trajectory. This is clause 1. [given, L1, L3, algebra]

2.1 On $\mathbb R$, $\rho\in[r_{\min},r_{\max}]$ and $\theta'=J/(\mu\rho^2)\in[J(1-e)^2/(\mu p^2),J(1+e)^2/(\mu p^2)]$, since $r_{\min}=p/(1+e)$ and $r_{\max}=p/(1-e)$. Applying the conic supplier [L2] to the global extension gives the same profile $\varrho$: its sine and cosine coefficients agree with the original ones on the nonempty open angle interval $\theta(I^\circ)$, so their differences vanish identically (evaluate the difference and its derivative at one point). Thus $\rho=\varrho\circ\theta$ on $\mathbb R$. Hence $\theta$ is strictly increasing with $\theta'(t)\ge c_1>0$, so $\theta(t)\to\pm\infty$ as $t\to\pm\infty$ and $\theta(\mathbb R)=\mathbb R$. [step 1.1, step 1.2, L1, L2, algebra]

3.1 Let $t_0\in\mathbb R$ and let $T>0$ satisfy $\varphi(t_0+T)=\varphi(t_0)+2\pi$, i.e. $\theta(t_0+T)=\theta(t_0)+2\pi$ (existence and uniqueness of $T$ come from step 2.1). Then $\rho(t_0+T)=\varrho(\varphi(t_0)+2\pi)=\varrho(\varphi(t_0))=\rho(t_0)$ by the $2\pi$-periodicity of $\varrho$, and $$\rho'(t_0+T)=\varrho'\bigl(\varphi(t_0)+2\pi\bigr)\theta'(t_0+T)=\varrho'(\varphi(t_0))\,\frac{J}{\mu\rho(t_0+T)^2}=\varrho'(\varphi(t_0))\,\frac{J}{\mu\rho(t_0)^2}=\rho'(t_0),$$ using [L4], the $2\pi$-periodicity of $\varrho'$, and step 2.1. Also $n(\theta(t_0+T))=n(\theta(t_0))$ by the periodicity of sine and cosine [L6], so $r(t_0+T)=r(t_0)$ and $r'(t_0+T)=r'(t_0)$ (differentiate $r=\rho\,n(\theta)$ and use the equalities just proved). [step 2.1, L4, L6, algebra]

4.1 Change of variables in the defining relation of $T$: $\theta:[t_0,t_0+T]\to[\theta(t_0),\theta(t_0)+2\pi]$ is a continuous bijection with $\theta'>0$, so its inverse $\theta^{-1}$ is differentiable with $(\theta^{-1})'=1/\theta'$ composed with $\theta^{-1}$ [L5]. Hence, using $\theta'=J/(\mu\rho^2)$ and $\rho=\varrho(\theta)$ on the interval, $$T=\int_{t_0}^{t_0+T}\mathrm dt=\int_{\theta(t_0)}^{\theta(t_0)+2\pi}\frac{1}{\theta'}\,\mathrm d\theta =\frac{\mu}{J}\int_{\theta(t_0)}^{\theta(t_0)+2\pi}\varrho(\theta)^2\,\mathrm d\theta=\frac{\mu}{J}\int_0^{2\pi}\varrho(\psi)^2\,\mathrm d\psi,$$ the last equality by the $2\pi$-periodicity of $\varrho$. [step 2.1, step 3.1, L2, L4, L5, algebra]

4.2 Define $z_T(t):=(\rho(t+T),\rho'(t+T),\theta(t+T)-2\pi)$. Since the state field in step 1.2 is independent of $\theta$, $z_T$ solves the same equation as $z(t):=(\rho(t),\rho'(t),\theta(t))$. By step 3.1 and the definition of $T$, $z_T(t_0)=z(t_0)$; uniqueness [L3] gives $z_T=z$ on $\mathbb R$. Periodicity of sine and cosine then yields $r(t+T)=r(t)$, and differentiation yields $r'(t+T)=r'(t)$. This is clause 2. [step 1.2, step 3.1, L3, L6, algebra]

5.1 By clause 3 of [[thm-cm-kepler-ellipse-geometry]], applied to the unshifted profile $\widetilde\varrho(\psi):=p/(1+e\cos\psi)$, with a translation of the integration variable by $\theta_0$ and invariance of a full-period integral under translation, $\frac12\int_0^{2\pi}\varrho(\psi)^2\,\mathrm d\psi=\lambda_2(E_{\rm ell})=\pi ab$, so step 4.1 gives $T=\frac{2\pi\mu ab}{J}$. [step 4.1, L2, algebra]

6.1 Algebra: $p=J^2/(\mu\kappa)$ and $p=a(1-e^2)$ by the definitions, so $J^2=\mu\kappa a(1-e^2)$ and $J=\sqrt{\mu\kappa a(1-e^2)}$; with $b=a\sqrt{1-e^2}$, $$\frac{2\pi\mu ab}{J}=\frac{2\pi\mu a^2\sqrt{1-e^2}}{\sqrt{\mu\kappa a(1-e^2)}}=2\pi\sqrt{\frac{\mu}{\kappa}}\,a^{3/2},$$ and squaring gives $T^2=4\pi^2\mu a^3/\kappa$. This is clause 3. [step 5.1, algebra] ∎
