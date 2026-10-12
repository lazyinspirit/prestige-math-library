---
id: ex-cm-stroboscopic-map-of-the-plane-oscillator
kind: example
title: "The stroboscopic map of the plane oscillator"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-stroboscopic-map, lem-cm-stroboscopic-iterate-identity, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, def-vector-valued-derivative-and-integral, def-total-derivative-in-euclidean-space]
dependency_roles:
  def-cm-stroboscopic-map: mathematical-premise
  lem-cm-stroboscopic-iterate-identity: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Section 3.2 (linear systems) and Section 6.4 (the Poincare map), printed pages 61-67 and 198"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.2 and Section 4.1 (linear oscillators and Hamilton's equations)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Let $\omega>0$ and let $F:\mathbb R\times\mathbb R^2\to\mathbb R^2$, $F(t,z_1,z_2):=(z_2,-\omega^2z_1)$, the vector field of the undamped plane oscillator. Since $F$ does not depend on $t$, it is $P$-periodic for every $P>0$; it is continuous and locally Lipschitz in the state variable, so [[def-cm-stroboscopic-map]] applies for every $P>0$.

For $z=(z_1,z_2)\in\mathbb R^2$ the curve

$$x_z(t)=\Bigl(z_1\cos\omega t+\frac{z_2}{\omega}\sin\omega t,\ -\omega z_1\sin\omega t+z_2\cos\omega t\Bigr)$$

is defined on all of $\mathbb R$ and solves $x'=F(t,x)$ with $x(0)=z$. Hence $D_P=\mathbb R^2$ for every $P>0$, and the stroboscopic map is

$$\theta_P(z)=\Bigl(z_1\cos\omega P+\frac{z_2}{\omega}\sin\omega P,\ -\omega z_1\sin\omega P+z_2\cos\omega P\Bigr).$$

In particular, for $P=2\pi/\omega$ the map $\theta_P$ is the identity of $\mathbb R^2$, so every initial state is a fixed point; for $P=\pi/\omega$ it is $\theta_P(z)=-z$, whose only fixed point is $0$.

## Facts & Assumptions

**Given:** A number $\omega>0$ and the field $F(t,z_1,z_2)=(z_2,-\omega^2z_1)$.

[L1] The stroboscopic map of a continuous $P$-periodic field, locally Lipschitz in the state variable, is defined on $D_P=\{z:[0,P]\subseteq J_z\}$ by $\theta_P(z)=x_z(P)$, where $x_z$ is the unique maximal solution through $(0,z)$; every solution through $(0,z)$ is a restriction of $x_z$ ([[def-cm-stroboscopic-map]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L2] The derivatives of sine and cosine are $(\sin)'=\cos$, $(\cos)'=-\sin$, with $\sin0=0$, $\cos0=1$, and vector-valued curves are differentiated componentwise ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[L3] The system is autonomous, so $F(t,z)=F(0,z)$ for all $t$, and it satisfies the Picard-Lindelof hypotheses: its components are polynomials, hence continuous and locally Lipschitz on $\mathbb R^2$ ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-total-derivative-in-euclidean-space]]).

## Verification

**Proof technique:** direct; verify the explicit solution and evaluate the time-$P$ map.

1.1 Differentiating the two components of the displayed $x_z$ with respect to $t$ using [L2] gives $x_z'(t)=(-\omega z_1\sin\omega t+z_2\cos\omega t,\ -\omega^2z_1\cos\omega t-\omega z_2\sin\omega t)$, whose first component is the second component of $x_z$ and whose second component is $-\omega^2$ times the first component of $x_z$; hence $x_z'=F(t,x_z)$ on all of $\mathbb R$, and $x_z(0)=(z_1,z_2)=z$ because $\sin0=0$ and $\cos0=1$. [given, L2, algebra]

2.1 The curve of step 1.1 is a solution on all of $\mathbb R$; by [L1] and [L3], every solution of the initial value problem with data $(0,z)$ is a restriction of the unique maximal solution $x_z$, whose domain is an open interval. Since a solution with domain $\mathbb R$ exists, that maximal domain is all of $\mathbb R$; hence $[0,P]\subseteq J_z$ for every $P$ and $D_P=\mathbb R^2$. Substituting $t=P$ in step 1.1 gives the displayed formula for $\theta_P(z)$ for every $P>0$. [step 1.1, L1, L3]

3.1 If $P=2\pi/\omega$ then $\cos\omega P=1$ and $\sin\omega P=0$, so $\theta_P(z)=(z_1,z_2)=z$ for every $z$; if $P=\pi/\omega$ then $\cos\omega P=-1$ and $\sin\omega P=0$, so $\theta_P(z)=(-z_1,-z_2)=-z$, which equals $z$ only for $z=0$. This proves the two special cases. [step 2.1, L2, algebra] ∎

## Remarks

- The example verifies the iterate identity of [[lem-cm-stroboscopic-iterate-identity]] implicitly: since $D_P=\mathbb R^2$ here, every iterate is defined and $\theta_P^k(z)=x_z(kP)$; for $P=2\pi/\omega$ this makes every iterate the identity.

- The map $\theta_P$ is a linear map of $\mathbb R^2$ and preserves the area element; no symplectic or stability conclusion is drawn here, since those notions belong to the symplectic items and to the stability definitions of this collection.
