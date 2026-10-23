---
id: thm-fd-x02
kind: theorem
title: "Acoustic and inertial finite-mode solutions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-fd-x00
  - def-fd-real-trigonometric-functions
  - lem-fd-real-trigonometric-derivatives
  - thm-complex-trigonometric-hyperbolic-dictionary
  - lem-fd-x02-vector-triple-product
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-of-square-roots
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-cross-product-in-r3
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - thm-cross-product-norm-is-the-two-vector-gram-determinant
  - lem-standard-basis-of-f-n
dependency_roles:
  def-fd-x00: mathematical-premise
  def-fd-real-trigonometric-functions: mathematical-premise
  lem-fd-real-trigonometric-derivatives: mathematical-premise
  thm-complex-trigonometric-hyperbolic-dictionary: mathematical-premise
  lem-fd-x02-vector-triple-product: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Iain Stewart, MIT 8.09, Chapter 6: Fluid Mechanics, §6.5 Sound Waves"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf"
    - title: "Markus Zahn, MIT 6.013, Lecture 22: Acoustic Waves"
      url: "https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/57c7ed2d14f3555c88bd45d13a4cb287_lec22.pdf"
    - title: "Jorge Lindley, Warwick MA3D1, Fluid Dynamics Support Class 6, §1 Inertial Waves in a Rotating Fluid"
      url: "https://warwick.ac.uk/fac/sci/masdoc/people/studentpages/students2012/lindley/fluid_dynamics/fluidssupport6_2015.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Chapter 1, §§2.2–2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open time interval, let $\rho_0>0$, let $P:(0,\infty)\to\mathbb R$ have two continuous derivatives, and put $\chi=P'(\rho_0)$. Use standard right-handed Cartesian coordinates $x=(x_1,x_2,x_3)\in\mathbb R^3$ and their usual gradient and divergence. For real $t$, use the real functions $S(t)=\operatorname{Re}((e^{it}-e^{-it})/(2i))$ and $C(t)=\operatorname{Re}((e^{it}+e^{-it})/2)$, with $e^z=\sum_{n=0}^\infty z^n/n!$ and $\operatorname{Re}(x+iy)=x$. Define the linear acoustic system on $I\times\mathbb R^3$ at the constant rest state by taking the coefficient of $\epsilon$ in the barotropic mass and momentum equations with constant potential, $\rho=\rho_0+\epsilon r$ and $u=\epsilon v$; the resulting equations are $\partial_t r+\rho_0\operatorname{div}v=0$ and $\partial_t v=-(\chi/\rho_0)\nabla r$. The displayed modes have continuous first time and first and second spatial partial derivatives on this domain. This is a first-variation system; no nonlinear approximation error is asserted.

If $\chi>0$, let $c=\sqrt{\chi}>0$. For a nonzero spatial wave vector $k\in\mathbb R^3$, a real density amplitude $A$ with $|A|<\rho_0$, and a real temporal frequency $\omega$, set $\theta=k\cdot x-\omega t$ and

$$r(t,x)=A C(\theta),\qquad v(t,x)=\frac{A\omega}{\rho_0|k|^2}kC(\theta).$$

For $A\ne0$ this mode solves the linear acoustic system exactly if and only if $\omega^2=\chi|k|^2$; when $A=0$ it is the zero solution for every $\omega$. In the optional SI interpretation, $[\rho_0]=[A]=[r]=\mathrm{kg\,m^{-3}}$, $[v]=\mathrm{m\,s^{-1}}$, $[\chi]=\mathrm{m^2\,s^{-2}}$, $[c]=\mathrm{m\,s^{-1}}$, $[k]=\mathrm{m^{-1}}$, and $[\omega]=\mathrm{s^{-1}}$. If the mode is read as the density field $\rho_0+r$, the stated bound on $A$ ensures it stays positive.

If $\chi<0$, then for every $k\ne0$ and real $A$, $\lambda=|k|\sqrt{-\chi}>0$ and

$$r(t,x)=Ae^{\lambda t}C(k\cdot x),\qquad v(t,x)=-\frac{\lambda A}{\rho_0|k|^2}k e^{\lambda t}S(k\cdot x)$$

solve the same linear system and give an exponentially growing Fourier mode when $A\ne0$. This is a statement about the linear system, not a claim that a positive full density exists for all times.

For the rotating linear system on $\mathbb R\times\mathbb R^3$, let $\Omega\in\mathbb R^3$ be constant and $k\in\mathbb R^3\setminus\{0\}$. Set $e=k/|k|$, choose a unit vector $a\perp e$, and put $b=e\times a$, $\alpha=2\Omega\cdot e$, $z(t)=aC(\alpha t)-bS(\alpha t)$, and $\beta(t)=e\cdot(2\Omega\times z(t))$. The proof constructs such a choice of $a$ for every unit $e$. For any real $W$, the fields

$$w(t,x)=Wz(t)C(k\cdot x),\qquad q(t,x)=-\frac{W\beta(t)}{|k|}S(k\cdot x)$$

solve $\partial_tw+2\Omega\times w=-\nabla q$ and $\operatorname{div}w=0$. These rotating fields have continuous first time and first and second spatial partial derivatives. The signed frequency is $\alpha$, so $|\alpha|\le2|\Omega|$; when $\alpha=0$, $z$ is stationary and no division by $\alpha$ is used. In SI units, $[k]=\mathrm{m^{-1}}$, $[\Omega]=[\alpha]=[\beta]=\mathrm{s^{-1}}$, $[W]=\mathrm{m\,s^{-1}}$, and $[q]=\mathrm{m^2\,s^{-2}}$. These are exact finite-mode solutions of the specified linear systems, not nonlinear fluid solutions or turbulence results.

## Statement references

Linearized acoustic equations and the sound-speed coefficient: [Stewart, MIT 8.09, Chapter 6, §6.5, printed pp. 124–126](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf).

Independent acoustic derivation: [Zahn, MIT 6.013 Lecture 22, §§VI–VIII, PDF pp. 3–4](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/57c7ed2d14f3555c88bd45d13a4cb287_lec22.pdf).

Rotating linear equations and inertial-wave dispersion: [Lindley, Warwick MA3D1 Support Class 6, §1, PDF pp. 1–2](https://warwick.ac.uk/fac/sci/masdoc/people/studentpages/students2012/lindley/fluid_dynamics/fluidssupport6_2015.pdf).

Complex trigonometric definitions and real restrictions: [Stein and Shakarchi, *Complex Analysis*, Chapter 1, §§2.2–2.3](https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf).

Formal system definitions and Cartesian operators: [[def-fd-x00]].

[[def-fd-real-trigonometric-functions]]

[[lem-fd-real-trigonometric-derivatives]]

[[def-cross-product-in-r3]]

[[lem-cross-product-is-bilinear-alternating-and-orthogonal]]

[[thm-cross-product-norm-is-the-two-vector-gram-determinant]]

[[lem-fd-x02-vector-triple-product]]

## Facts & Assumptions

**Given:** The domains, regularity, constants, modes, and parameter cases in the Statement. All systems are mathematical equations; the optional SI assignments do not assert a physical model.

[A1] Barotropic equations: $\partial_t\rho+\operatorname{div}(\rho u)=0$ and $\partial_tu+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V$ ([[def-fd-x00]]).

[A2] Rotating linear equations: $\partial_t w+2\Omega\times w=-\nabla q$ and $\operatorname{div}w=0$ ([[def-fd-x00]]).

[F1] The functions $S,C$ are the real restrictions defined in [[def-fd-real-trigonometric-functions]] and satisfy $S'=C$, $C'=-S$ ([[lem-fd-real-trigonometric-derivatives]]).

[F2] For real $t$, $S(t)^2+C(t)^2=1$, hence $|C(t)|\le1$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]] and [[thm-complex-trigonometric-hyperbolic-dictionary]]).

[F3] The ordinary real chain rule applies to differentiable scalar functions and their compositions ([[thm-chain-rule]]).

[F4] The real exponential satisfies $(e^t)'=e^t$ ([[thm-derivative-of-exponential]]).

[F5] Every positive real has a unique positive square root ([[thm-of-square-roots]]).

[F6] In $\mathbb R^3$, the cross product has its coordinate formula, is bilinear and alternating, is orthogonal to each factor, and $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

[F7] The Euclidean inner product is the coordinate dot product and satisfies $|\langle x,y\rangle|\le|x|\,|y|$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F8] The standard coordinate vectors form a basis of $\mathbb R^3$ ([[lem-standard-basis-of-f-n]]).

[F9] For $a,b,c\in\mathbb R^3$, $a\times(b\times c)=b\langle a,c\rangle-c\langle a,b\rangle$ ([[lem-fd-x02-vector-triple-product]]).

## Proof

1.1 Let $\rho_\epsilon=\rho_0+\epsilon r$ and $u_\epsilon=\epsilon v$ with constant $V$. The mass residual expands as $\partial_t\rho_\epsilon+\operatorname{div}(\rho_\epsilon u_\epsilon)=\epsilon(r_t+\rho_0\operatorname{div}v)+\epsilon^2\operatorname{div}(rv)$. The momentum residual has $\partial_tu_\epsilon+(u_\epsilon\cdot\nabla)u_\epsilon=\epsilon v_t+\epsilon^2(v\cdot\nabla)v$, while the chain rule gives $\nabla P(\rho_\epsilon)=\epsilon P'(\rho_0+\epsilon r)\nabla r$. At each point $\rho_\epsilon>0$ for sufficiently small $|\epsilon|$, and $P'(\rho_0+\epsilon r)/\rho_\epsilon\to\chi/\rho_0$. Thus the coefficients of $\epsilon$ in the two residuals are exactly the stated linear acoustic equations; this first-variation calculation supplies no error estimate for nonzero $\epsilon$. [given, A1, F3, algebra]

1.2 Put $\theta=k\cdot x-\omega t$. By [F1] and [F3], $r_t=A\omega S(\theta)$, $\nabla r=-AkS(\theta)$, and $\operatorname{div}v=-A\omega S(\theta)/\rho_0$, so $r_t+\rho_0\operatorname{div}v=0$. [given, F1, F3]

1.3 Let $e=k/|k|$. At least one standard coordinate unit vector $d$ is not parallel to $e$, since the three coordinate vectors are linearly independent by [F8]. Put $y=d-\langle d,e\rangle e$; then $y\ne0$ and $\langle y,e\rangle=0$. Set $a=y/|y|$ and $b=e\times a$. By [F6], $b$ is orthogonal to $e$ and $a$, and $|b|^2=|e|^2|a|^2-\langle e,a\rangle^2=1$. The three orthonormal vectors are linearly independent; since $\mathbb R^3$ has dimension three by [F8], they form a basis. [given, F6, F7, F8, algebra]

2.1 Also $v_t=A\omega^2 kS(\theta)/(\rho_0|k|^2)$, while $-(\chi/\rho_0)\nabla r=\chi A kS(\theta)/\rho_0$. Since $k\ne0$, varying $x$ makes $\theta$ range over $\mathbb R$; since $C(0)=1$ and $S'(0)=1$ by [F1], $S$ is not identically zero. Thus for $A\ne0$ these expressions agree for all $x,t$ exactly when $\omega^2=\chi|k|^2$; if $A=0$ both fields vanish. Finally [F2] gives $\rho_0+r\ge\rho_0-|A|>0$ under the stated amplitude bound. [given, F1, F2, step 1.1, step 1.2, algebra]

2.2 Suppose $\chi<0$, let $\lambda=|k|\sqrt{-\chi}$, and use the stated growing fields. With $\vartheta=k\cdot x$, [F1], [F3], and [F4] give $r_t=\lambda A e^{\lambda t}C(\vartheta)$ and $\operatorname{div}v=-\lambda A e^{\lambda t}C(\vartheta)/\rho_0$, so the mass equation holds. They also give $v_t=-\lambda^2A e^{\lambda t}kS(\vartheta)/(\rho_0|k|^2)$ and $-(\chi/\rho_0)\nabla r=\chi A e^{\lambda t}kS(\vartheta)/\rho_0$; these agree because $\lambda^2=-\chi|k|^2$. Thus the Fourier mode grows as $e^{\lambda t}$ in the linear system. [given, A1, F1, F3, F4, F5, step 1.1, algebra]

2.3 By [F9], $e\times b=e\times(e\times a)=-a$ and $a\times b=a\times(e\times a)=e$. Write $\Omega_\perp=\Omega-\langle\Omega,e\rangle e=\Omega_a a+\Omega_b b$ and $z=z_a a+z_b b$. Bilinearity and alternation from [F6] give $\Omega_\perp\times z=(\Omega_a z_b-\Omega_b z_a)e$. Since $\Omega=\langle\Omega,e\rangle e+\Omega_\perp$, it follows that $\Omega\times z=\langle\Omega,e\rangle(e\times z)+(\Omega_a z_b-\Omega_b z_a)e$. The map $\Pi y=y-\langle y,e\rangle e$ fixes $e\times z$ and annihilates the last term, so $\Pi(\Omega\times z)=\langle\Omega,e\rangle e\times z$. [given, F6, F7, F9, step 1.3, algebra]

3.1 Differentiating $z(t)=aC(\alpha t)-bS(\alpha t)$ with [F1] gives $z'=-\alpha aS(\alpha t)-\alpha bC(\alpha t)$. The identities $e\times a=b$ and $e\times b=-a$ from steps 1.3 and 2.3 give $e\times z=bC(\alpha t)+aS(\alpha t)$. Hence $z'=-\alpha e\times z=-2\Pi(\Omega\times z)$. [given, F1, step 1.3, step 2.3, algebra]

4.1 By the definition of $\beta$ and step 2.3, $2\Omega\times z=\alpha e\times z+\beta e$, so step 3.1 gives $z'+2\Omega\times z=\beta e$. Consequently $\partial_t w+2\Omega\times w=W\beta eC(k\cdot x)$; also $\operatorname{div}w=W C'(k\cdot x)z\cdot k=0$, and $-\nabla q=W\beta eC(k\cdot x)$ by [F1]. Thus the rotating equations hold. Finally $|\alpha|=2|\langle\Omega,e\rangle|\le2|\Omega|$ by [F7] and $|e|=1$; when $\alpha=0$ no division by $\alpha$ occurs. [given, A2, F1, F7, step 2.3, step 3.1] ∎
## Source notes


Real trigonometric functions and derivatives: [[def-fd-real-trigonometric-functions]] and [[lem-fd-real-trigonometric-derivatives]].

Cross-product algebra and norm: [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], and [[lem-fd-x02-vector-triple-product]].

