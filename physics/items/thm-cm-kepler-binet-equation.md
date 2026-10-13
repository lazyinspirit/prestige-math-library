---
id: thm-cm-kepler-binet-equation
kind: theorem
title: "Binet's equation for the attractive inverse-square field: $\\mathrm d^2u/\\mathrm d\\varphi^2+u=\\mu\\kappa/J^2$ for $u=1/\\rho$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-derivative, thm-derivative-of-an-inverse, thm-chain-rule, thm-algebra-of-derivatives, def-continuity-real]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-continuity-real: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 32-33: the inverse-square radial equation and the orbit equation for $r(\\phi)$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.59)-(3.65): the Binet-type equation and the conic solution with eccentricity $e$ for the Coulomb/Kepler potential"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\mu>0$, $\kappa>0$, let $U:(0,\infty)\to\mathbb R$ be $U(\rho):=-\kappa/\rho$
(of class $C^2$), let $I$ be an interval with at least two points, and let
$r:I\to\mathbb R^3$ be a central-force trajectory for $(\mu,U)$ with constant
angular momentum $j=Je_3$, $J>0$. Let $(\rho,\theta)$ be polar data as in
[[thm-cm-central-force-polar-reduction]], let $I^\circ$ be the interior of $I$
(a nonempty interval with at least two points, or empty if $I$ is a singleton,
which is excluded), and put $W:=\theta(I^\circ)$, an interval. Then:

1. $\theta:I^\circ\to W$ is a $C^1$ bijection with inverse
   $\sigma:W\to I^\circ$ of class $C^1$, and the function
   $u:=1/(\rho\circ\sigma):W\to(0,\infty)$ is of class $C^2$;
2. on $W$, $u''+u=\mu\kappa/J^2$ (derivatives with respect to the variable of
   $W$);
3. the auxiliary identity $\rho'=-\dfrac{J}{\mu}\,u'\circ\theta$ holds on
   $I^\circ$;
4. the energy satisfies $E=\dfrac{J^2}{2\mu}\bigl((u')^2+u^2\bigr)-\kappa u$ on
   $W$, where $E$ is the constant energy of the trajectory.

## Facts & Assumptions

**Given:** The inverse-square central-force trajectory with $j=Je_3$, $J>0$, and polar data $(\rho,\theta)$, the interval $W=\theta(I^\circ)$, and the associated functions $\sigma$ and $u$.

[L1] Polar reduction: on all of $I$, $r=\rho\,n(\theta)$, $\rho^2\theta'=J/\mu$ (so $\theta'>0$ and $\theta$ is strictly increasing), $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$ with $U^{\mathrm{eff}}_J(\rho)=-\kappa/\rho+J^2/(2\mu\rho^2)$, and the energy $E$ is constant ([[thm-cm-central-force-polar-reduction]]).

[L2] For a continuous injective strictly monotone function on an interval with nonvanishing derivative, the inverse is differentiable with $\sigma'(\varphi)=1/\theta'(\sigma(\varphi))$ ([[thm-derivative-of-an-inverse]], [[def-continuity-real]], [[def-derivative]], [[def-interval]]); the interior $I^\circ$ of an interval is an interval, and $\theta(I^\circ)=W$ is an interval with nonempty interior.

[L3] The chain rule and the algebra of derivatives compute the derivatives of composites and quotients of $C^k$ functions ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)/\mu$ on $I^\circ$. Since $U^{\mathrm{eff}}_J$ is $C^2$ and $\rho$ is continuous, the right-hand side is continuous, so $\rho$ is $C^2$ there. Thus $\theta'=J/(\mu\rho^2)$ is $C^1$ and positive. By [L2], $\theta:I^\circ\to W$ has a $C^1$ inverse $\sigma$ with $\sigma'=1/(\theta'\circ\sigma)$; the right-hand side is $C^1$ by [L3], so $\sigma$ is $C^2$. Therefore $u:=1/(\rho\circ\sigma)$ is a quotient of $C^2$ functions with nonvanishing denominator and is $C^2$ on $W$. [given, L1, L2, L3, algebra]

2.1 Chain rule along the trajectory: for $t\in I^\circ$, $u(\theta(t))=1/\rho(t)$, so [L3] gives $u'(\theta(t))\,\theta'(t)=-\rho'(t)/\rho(t)^2$; multiplying by $\rho^2$ and using $\rho^2\theta'=J/\mu$ from [L1], $$\rho'(t)=-\rho(t)^2\theta'(t)u'(\theta(t))=-\frac{J}{\mu}\,u'(\theta(t)),$$ which is clause 3. [step 1.1, L1, L3]

3.1 Differentiating clause 3 with [L3] and using $\theta'=J/(\mu\rho^2)$ again gives $$\rho''(t)=-\frac{J}{\mu}u''(\theta(t))\,\theta'(t)=-\frac{J^2}{\mu^2\rho(t)^2}\,u''(\theta(t))\qquad(t\in I^\circ).$$ Since $W=\theta(I^\circ)$, every $\varphi\in W$ equals $\theta(t)$ for some $t\in I^\circ$, so this identity supplies the corresponding value of $u''$ at every point of $W$. [step 1.1, step 2.1, L1, L3, algebra]

4.1 The reduction equation of [L1] for $U(\rho)=-\kappa/\rho$ reads $\mu\rho''=-\kappa/\rho^2+J^2/(\mu\rho^3)$. Substituting steps 2.1 and 3.1, with $\rho=1/u$, gives $$-\frac{J^2}{\mu\rho^2}u''=-\frac{\kappa}{\rho^2}+\frac{J^2}{\mu\rho^3} \;\Longrightarrow\; u''=\frac{\mu\kappa}{J^2}-u,$$ that is, $u''+u=\mu\kappa/J^2$ on $W$, which is clause 2. [step 1.1, step 3.1, L1, algebra]

5.1 Clause 4: the energy identity of [L1] gives $E=\frac12\mu\rho'^2+U^{\mathrm{eff}}_J(\rho)=\frac12\mu\rho'^2-\frac{\kappa}{\rho}+\frac{J^2}{2\mu\rho^2}$. Substituting $\rho=1/u$ and clause 3, $\frac12\mu\rho'^2=\frac{J^2}{2\mu}(u'\circ\theta)^2$ and $\frac{J^2}{2\mu\rho^2}=\frac{J^2}{2\mu}u^2$; hence $E=\frac{J^2}{2\mu}\bigl((u'\circ\theta)^2+u(\theta)^2\bigr)-\kappa\,u(\theta)$ along the trajectory. Since $\theta$ ranges over $W$, the displayed identity between the constant $E$ and the continuous function $\frac{J^2}{2\mu}\bigl((u')^2+u^2\bigr)-\kappa u$ on $W$ holds on $W$. [step 1.1, step 2.1, L1, L3, algebra] ∎
