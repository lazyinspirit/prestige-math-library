---
id: thm-cm-kepler-conic-and-eccentricity
kind: theorem
title: "The Kepler orbit equation is a conic: $u=c(1+e\\cos(\\varphi-\\theta_0))$ with $E=(\\mu\\kappa^2/2J^2)(e^2-1)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [thm-cm-kepler-binet-equation, lem-cm-second-order-oscillator-form, thm-sine-and-cosine-subtraction-formulas, thm-sine-and-cosine-parametrize-the-unit-circle, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule, thm-algebra-of-derivatives, def-interval, def-cm-central-force-trajectory]
dependency_roles:
  thm-cm-kepler-binet-equation: mathematical-premise
  lem-cm-second-order-oscillator-form: mathematical-premise
  thm-sine-and-cosine-subtraction-formulas: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-cm-central-force-trajectory: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.59)-(3.65): the conic $r=p/(1+e\\cos\\varphi)$ and the eccentricity-energy relation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 32-33: elliptic and hyperbolic orbit classes in terms of the sign of the energy for the inverse-square potential"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement

Let $\mu>0$, $\kappa>0$, $U(\rho)=-\kappa/\rho$ on $(0,\infty)$, let
$r:I\to\mathbb R^3$ be a central-force trajectory for $(\mu,U)$ with constant
angular momentum $j=Je_3$, $J>0$ and constant energy $E$
([[def-cm-central-force-trajectory]]), and let
$u:W\to(0,\infty)$, $\theta$ and $\sigma$ be as in
[[thm-cm-kepler-binet-equation]], with $W=\theta(I^\circ)$. Write
$c:=\mu\kappa/J^2>0$ and $p:=1/c=J^2/(\mu\kappa)$. Then:

1. there are $e\ge0$ and $\theta_0\in\mathbb R$ with
   $$u(\varphi)=c\bigl(1+e\cos(\varphi-\theta_0)\bigr)\qquad(\varphi\in W),$$
   and for $t\in I^\circ$ accordingly
   $\rho(t)=p/\bigl(1+e\cos(\theta(t)-\theta_0)\bigr)$;
2. the energy and the eccentricity are related by
   $$E=\frac{\mu\kappa^2}{2J^2}\bigl(e^2-1\bigr);$$ consequently
   $E<0\iff e<1$, $E=0\iff e=1$ and $E>0\iff e>1$.

## Facts & Assumptions

**Given:** The inverse-square central-force trajectory with constant angular momentum $j=Je_3$, $J>0$, constant energy $E$, the solution $u$ of Binet's equation on the interval $W$, and the constants $c=\mu\kappa/J^2$, $p=1/c$.

[L1] Binet's equation and the auxiliary identities: $u''+u=\mu\kappa/J^2=c$ on $W$, $W$ is an interval, and $E=\frac{J^2}{2\mu}\bigl((u')^2+u^2\bigr)-\kappa u$ on $W$ ([[thm-cm-kepler-binet-equation]]).

[L2] Solutions of $v''+v=0$ on an interval with at least two points are $A\cos(\varphi-\varphi_0)+B\sin(\varphi-\varphi_0)$ for fixed $\varphi_0$ in that interval ([[lem-cm-second-order-oscillator-form]], [[def-interval]]).

[L3] Subtraction formula: $\cos(\alpha-\psi)=\cos\alpha\cos\psi+\sin\alpha\sin\psi$; $(t\mapsto(\cos t,\sin t))$ is a bijection $[0,2\pi)\to S^1$; $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-subtraction-formulas]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Chain rule and algebra of derivatives for the differentiated expressions below ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Note $u''+u=c$ is equivalent to $(u-c)''+(u-c)=0$ on $W$ by linearity of the second derivative. Since $W$ is an interval and Binet's equation holds on it (it contains at least two points because $I^\circ$ has at least two points), [L2] gives reals $A,B$ with $$u(\varphi)-c=A\cos(\varphi-\varphi_0)+B\sin(\varphi-\varphi_0)\qquad(\varphi\in W)$$ for a fixed $\varphi_0\in W$. [L1, L2, algebra]

2.1 Put $R:=\sqrt{A^2+B^2}\ge0$. If $R>0$, then $(A/R,B/R)$ is a unit vector, so by [L3] there is $\psi\in[0,2\pi)$ with $\cos\psi=A/R$, $\sin\psi=B/R$; if $R=0$ take $\psi:=0$. Then for every $\varphi$, [L3] gives $$A\cos(\varphi-\varphi_0)+B\sin(\varphi-\varphi_0)=R\cos(\varphi-\varphi_0-\psi).$$ Setting $\theta_0:=\varphi_0+\psi$ and $e:=R/c=R\,J^2/(\mu\kappa)\ge0$, step 1.1 becomes $u(\varphi)=c+e\,c\cos(\varphi-\theta_0)=c(1+e\cos(\varphi-\theta_0))$ on $W$, which is the first assertion; the polar form $\rho=p/(1+e\cos(\theta-\theta_0))$ follows by inverting $u=1/\rho$ on $I^\circ$. [step 1.1, L3, algebra]

3.1 Energy: by [L1] and step 2.1, with $\psi(\varphi):=\varphi-\theta_0$, $u=c(1+e\cos\psi)$ and $u'=-ce\sin\psi$ (differentiate with [L4]); hence $$(u')^2+u^2=c^2\bigl(e^2\sin^2\psi+1+2e\cos\psi+e^2\cos^2\psi\bigr)=c^2\bigl(1+2e\cos\psi+e^2\bigr),$$ and $\kappa u=\kappa c(1+e\cos\psi)$. Substituting into [L1]: $$E=\frac{J^2c^2}{2\mu}\bigl(1+2e\cos\psi+e^2\bigr)-\kappa c\,(1+e\cos\psi).$$ With $c=\mu\kappa/J^2$ one has $\frac{J^2c^2}{2\mu}=\frac{\mu\kappa^2}{2J^2}$ and $\kappa c=\frac{\mu\kappa^2}{J^2}$, so $$E=\frac{\mu\kappa^2}{2J^2}\Bigl[\bigl(1+2e\cos\psi+e^2\bigr)-2\bigl(1+e\cos\psi\bigr)\Bigr]=\frac{\mu\kappa^2}{2J^2}\bigl(e^2-1\bigr).$$ [step 2.1, L1, L4, algebra]

4.1 Classification: since $\mu\kappa^2/(2J^2)>0$, the sign of $E$ equals the sign of $e^2-1$; with $e\ge0$ this is negative exactly for $e<1$, zero exactly for $e=1$ and positive exactly for $e>1$. [step 3.1, algebra] ∎
