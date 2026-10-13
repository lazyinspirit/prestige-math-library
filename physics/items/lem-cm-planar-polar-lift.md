---
id: lem-cm-planar-polar-lift
kind: lemma
title: "Local polar coordinates for a curve with nonvanishing position in the plane: a differentiable angle function with prescribed derivative"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-interval, def-derivative, def-continuity-real, thm-derivative-of-an-inverse, thm-chain-rule, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-parametrize-the-unit-circle, cor-trigonometric-parity-and-pythagorean-identity, cor-primitives-of-a-continuous-function, cor-zero-derivative-implies-constant]
dependency_roles:
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed p. 31, Eqs. (2.83)-(2.84): polar coordinates in the orbital plane and the conserved $J=\\mu r^2\\dot\\phi$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.3 Motion in a General Central Force-Field: use of polar coordinates $(r,\\theta)$ in the orbital plane with the angular first integral"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node44.html"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with at least two points
([[def-interval]]), let $t_0\in I$, and let $\rho,\sigma:I\to\mathbb R$ be twice
differentiable with
$(\rho(t),\sigma(t))\ne(0,0)$ for every $t\in I$. Here twice differentiable
means that $f$ and its derivative $f\prime:I\to\mathbb R$ are differentiable
at every point of $I$ in the domain-relative sense of [[def-derivative]];
$f\prime\prime=(f\prime)\prime$, including one-sided limits at included endpoints. Put

$$r(t):=\sqrt{\rho(t)^2+\sigma(t)^2}>0\qquad(t\in I).$$

Then there is a twice differentiable $\theta:I\to\mathbb R$ with

$$\rho=r\cos\theta,\qquad\sigma=r\sin\theta\qquad\text{on }I,$$

and every twice differentiable $\vartheta:I\to\mathbb R$ with
$\rho=r\cos\vartheta$ and $\sigma=r\sin\vartheta$ on $I$ satisfies

$$\vartheta'(t)=\frac{\rho(t)\sigma'(t)-\sigma(t)\rho'(t)}{r(t)^2}\qquad(t\in I).$$

## Facts & Assumptions

**Given:** An interval $I\subseteq\mathbb R$ with at least two points, a point $t_0\in I$, and twice differentiable functions $\rho,\sigma:I\to\mathbb R$ with $(\rho,\sigma)\ne(0,0)$ on $I$.

[L1] The function $r=\sqrt{\rho^2+\sigma^2}$ is twice differentiable with $r'=(\rho\rho'+\sigma\sigma')/r$: the square root is the inverse of the square on $(0,\infty)$, whose derivative $2y$ does not vanish there, the inverse-function rule gives $(\sqrt{\ })'(x)=1/(2\sqrt x)$ for $x>0$, and the chain rule gives $r'=(\rho^2+\sigma^2)'/(2r)=(\rho\rho'+\sigma\sigma')/r$ ([[thm-derivative-of-an-inverse]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L2] Sine and cosine are differentiable with $(\sin u)'=\cos u$ and $(\cos u)'=-\sin u$, so with the chain and product rules the functions $t\mapsto\rho(t)\cos\theta(t)$, $t\mapsto\sigma(t)\sin\theta(t)$ and their difference are differentiated by the ordinary product rule ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L3] $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto the unit circle $S^1=\{(x,y):x^2+y^2=1\}$, and $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] A continuous function $f$ on the interval $I$ has a primitive: for fixed $c_0\in I$ the function $F(x)=\int_{c_0}^x f$ is differentiable on $I$ with $F'=f$ ([[cor-primitives-of-a-continuous-function]]); sums, products and quotients with nonvanishing denominator of continuous functions are continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L5] A function continuous on $I$ with vanishing derivative at every interior point of $I$ is constant on $I$ ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $r$ is differentiable with $r'=(\rho\rho'+\sigma\sigma')/r$. Since $\rho,\sigma$ are twice differentiable and $r>0$, this quotient is differentiable by the product and quotient rules; hence $r$ is twice differentiable. [given, L1, algebra]

1.2 The vector $(\rho(t_0)/r(t_0),\sigma(t_0)/r(t_0))$ satisfies $(\rho/r)^2+(\sigma/r)^2=1$ by the definition of $r$, so by [L3] there is a real $\theta_0$ with $\cos\theta_0=\rho(t_0)/r(t_0)$ and $\sin\theta_0=\sigma(t_0)/r(t_0)$. [given, L3, choose]

2.1 Define $g:I\to\mathbb R$ by $g:=(\rho\sigma'-\sigma\rho')/r^2$. The numerator is continuous and $r^2>0$ is continuous, so $g$ is continuous on $I$ by [L4]; hence by [L4] the function $$\theta(t):=\theta_0+\int_{t_0}^t g(s)\,ds$$ is differentiable on $I$ with $\theta'=g$. Moreover $g$ is differentiable by the product and quotient rules, since $\rho,\sigma$ are twice differentiable and $r^2>0$; therefore $\theta$ is twice differentiable with $\theta'=g$. [given, step 1.1, step 1.2, L2, L4, construct]

2.2 Define $A:=\rho\cos\theta+\sigma\sin\theta$ and $B:=\sigma\cos\theta-\rho\sin\theta$ on $I$. Evaluating at $t_0$ with the choice of $\theta_0$ and [L3] gives $A(t_0)=\rho(t_0)^2/r(t_0)+\sigma(t_0)^2/r(t_0)=r(t_0)$ and $B(t_0)=\sigma(t_0)\rho(t_0)/r(t_0)-\rho(t_0)\sigma(t_0)/r(t_0)=0$. [given, step 1.2, L3, algebra]

3.1 Put $c:=r'/r$ on $I$. Differentiating with [L2] and substituting $\theta'=g$ gives the two identities $\rho'+\sigma\theta'=c\rho$ and $\sigma'-\rho\theta'=c\sigma$: indeed $\rho'+\sigma\theta'=\rho'+\sigma(\rho\sigma'-\sigma\rho')/r^2=(\rho'\rho^2+\rho\sigma\sigma')/r^2=\rho(\rho\rho'+\sigma\sigma')/r^2=c\rho$, and $\sigma'-\rho\theta'=\sigma'-\rho(\rho\sigma'-\sigma\rho')/r^2=(\sigma'\sigma^2+\rho\sigma\rho')/r^2=\sigma(\rho\rho'+\sigma\sigma')/r^2=c\sigma$, using [L1]. Hence $$A'=(\rho'+\sigma\theta')\cos\theta+(\sigma'-\rho\theta')\sin\theta=cA,$$ $$B'=(\sigma'-\rho\theta')\cos\theta-(\rho'+\sigma\theta')\sin\theta=cB.$$ [step 1.1, step 2.1, L1, L2, algebra]

4.1 By the quotient rule of [L2] and $r'=cr$ from [L1], $$(A/r)'=\frac{A'r-Ar'}{r^2}=\frac{cAr-Acr}{r^2}=0,\qquad (B/r)'=\frac{cBr-Bcr}{r^2}=0\qquad\text{on }I.$$ The functions $A/r$ and $B/r$ are continuous on $I$; by [L5] and step 2.2 they are the constants $1$ and $0$: $A=r$ and $B=0$ on $I$. [step 2.2, step 3.1, L1, L2, L5, algebra]

5.1 Solving the two equations $A=\rho\cos\theta+\sigma\sin\theta=r$ and $B=\sigma\cos\theta-\rho\sin\theta=0$ for $(\rho,\sigma)$ gives $\rho=A\cos\theta-B\sin\theta=r\cos\theta$ and $\sigma=A\sin\theta+B\cos\theta=r\sin\theta$ on $I$: the displayed linear system has the invertible coefficient matrix $\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}$ of determinant $\cos^2\theta+\sin^2\theta=1$. [step 4.1, L3, algebra]

6.1 Let $\vartheta:I\to\mathbb R$ be twice differentiable with $\rho=r\cos\vartheta$, $\sigma=r\sin\vartheta$. Differentiating the two identities and eliminating $r'$ gives $$\rho\sigma'-\sigma\rho'=r\cos\vartheta\,(r'\sin\vartheta+r\vartheta'\cos\vartheta)-r\sin\vartheta\,(r'\cos\vartheta-r\vartheta'\sin\vartheta)=r^2\vartheta',$$ so $\vartheta'=(\rho\sigma'-\sigma\rho')/r^2$ on $I$. [given, L1, L2, algebra] ∎
