---
id: lem-nrqm-potentials-one-dimensional-flux-identity
aliases: [nrqm-potentials-one-dimensional-flux-identity]
kind: lemma
domain: mathematics
title: "The one-dimensional continuity identity and the constant flux of stationary solutions"
status: published
origin: session
dependency_level: 0
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, thm-complex-numbers-are-the-real-coordinate-plane, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, cor-zero-derivative-implies-constant, def-derivative, def-continuity-real, def-interval, def-countable-choice]
dependency_roles:
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-numbers-are-the-real-coordinate-plane: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2.2, printed pages 11-13 (PDF pages 14-16): conservation of probability and the probability current for the one-dimensional Schroedinger equation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3, printed pages 32-33 (PDF pages 40-41): the probability current and the continuity equation in the position representation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $m,\hbar>0$, let
$\Omega\subseteq\mathbb R$ and $I\subseteq\mathbb R$ be nonempty open intervals
([[def-interval]]), and let $V:\Omega\to\mathbb R$ be a function. Let
$u,v:\Omega\times I\to\mathbb R$ be functions whose partial derivatives
$\partial_tu,\partial_tv,\partial_xu,\partial_xv,\partial_x^2u,\partial_x^2v$
exist and are continuous on $\Omega\times I$
([[def-continuity-real]], [[def-derivative]]) and satisfy the pair of
equations
$$\hbar\,\partial_tu=-\frac{\hbar^2}{2m}\partial_x^2v+Vv,\qquad -\hbar\,\partial_tv=-\frac{\hbar^2}{2m}\partial_x^2u+Vu$$
pointwise on $\Omega\times I$. Write $\psi:=u+iv$ for the corresponding
$\mathbb C$-valued function with component functions $u$ and $v$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]), so that the two
displayed equations are the componentwise reading of
$i\hbar\,\partial_t\psi=-\frac{\hbar^2}{2m}\partial_x^2\psi+V\psi$. Put
$$n(x,t):=|\psi(x,t)|^2=u(x,t)^2+v(x,t)^2,\qquad j(x,t):=\frac{\hbar}{m}\operatorname{Im}\!\bigl(\overline{\psi(x,t)}\,\partial_x\psi(x,t)\bigr) =\frac{\hbar}{m}\bigl(u\,\partial_xv-(\partial_xu)\,v\bigr)(x,t).$$
Then:

(a) *Continuity identity.* $\partial_tn(x,t)+\partial_xj(x,t)=0$ for every
$(x,t)\in\Omega\times I$.

(b) *Constant flux of stationary solutions.* Separately, let
$u_{\mathrm s},v_{\mathrm s}:\Omega\to\mathbb R$ have continuous second
derivatives, and let $E\in\mathbb R$ and $V:\Omega\to\mathbb R$ satisfy
$-\frac{\hbar^2}{2m}u_{\mathrm s}''+Vu_{\mathrm s}=Eu_{\mathrm s}$ and
$-\frac{\hbar^2}{2m}v_{\mathrm s}''+Vv_{\mathrm s}=Ev_{\mathrm s}$ pointwise
on $\Omega$. Then
$j_{\mathrm s}(x):=\frac{\hbar}{m}(u_{\mathrm s}v_{\mathrm s}'-u_{\mathrm s}'v_{\mathrm s})(x)$
is constant on $\Omega$.

The assertion is an identity for the declared differentiable functions and
the declared real pair $V$; it constructs no probability law, no state and no
physical interpretation.

## Facts & Assumptions

**Given:** $m,\hbar>0$; nonempty open intervals $\Omega,I\subseteq\mathbb R$; a function $V:\Omega\to\mathbb R$; real functions $u,v:\Omega\times I\to\mathbb R$ with the stated continuous partial derivatives; and, separately for (b), real functions $u_{\mathrm s},v_{\mathrm s}:\Omega\to\mathbb R$ with continuous second derivatives and $E\in\mathbb R$.

[F1] **Complex coordinates.** Every complex number has a unique form $c+di$ with $c,d\in\mathbb R$, and the map $\Phi(c+di)=(c,d)$ is a bijection onto $\mathbb R^2$ carrying addition and multiplication to $(c,d)+(e,f)=(c+e,d+f)$ and $(c,d)(e,f)=(ce-df,cf+de)$; moreover $\overline{c+di}=c-di$, $|c+di|^2=c^2+d^2$ and $\operatorname{Im}(c+di)=d$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-complex-numbers-are-the-real-coordinate-plane]]). For real functions $u,v,f,g$ this gives $\operatorname{Im}\bigl((u-iv)(f+ig)\bigr)=ug-vf$ pointwise.

[F2] **Product rule and algebra of derivatives.** For real functions on a set $A\subseteq\mathbb R$ differentiable at a limit point $c$ of $A$, $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$ and $(f+g)'(c)=f'(c)+g'(c)$, and $(\alpha f)'(c)=\alpha f'(c)$ for real $\alpha$ ([[thm-algebra-of-derivatives]], [[def-derivative]]). The same identities hold for the partial derivatives $\partial_x,\partial_t$ of $u,v$, applied pointwise at each point of the open set $\Omega\times I$, and for the derivatives of the separate functions $u_{\mathrm s},v_{\mathrm s}$ at each point of $\Omega$, because the one-variable differentiation rules apply to the coordinate functions.

[F3] **Continuity of sums and products.** Sums, differences and products of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[F4] **Zero derivative implies constancy.** If $I\subseteq\mathbb R$ is order-convex and $f:I\to\mathbb R$ is continuous on $I$ and differentiable at every interior point of $I$ with $f'(x)=0$ there, then $f$ is constant on $I$ ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

## Proof

**Proof technique:** direct; read the pair of real equations as the componentwise complex equation, differentiate the density and the flux with the product rule, and cancel the potential terms; then specialize to the stationary equations and integrate the resulting zero derivative.

**Given:** The data and hypotheses of the statement and [F1]-[F4].

1.1 [Coordinate expressions] Fix $(x,t)\in\Omega\times I$ and write $\psi=\psi(x,t)$. Since $\overline{\psi}=u-iv$ and $\partial_x\psi=\partial_xu+i\,\partial_xv$, [F1] gives $\overline{\psi}\,\partial_x\psi=(u\,\partial_xu+v\,\partial_xv)+i\,(u\,\partial_xv-(\partial_xu)\,v)$, hence $\operatorname{Im}(\overline{\psi}\,\partial_x\psi)=u\,\partial_xv-(\partial_xu)\,v$ and $|\psi|^2=u^2+v^2$; the two displays of the statement for $n$ and $j$ therefore agree at every point. [given, F1, algebra]

1.2 [Differentiating the density] By [F2] applied pointwise, $\partial_tn=2u\,\partial_tu+2v\,\partial_tv$. Substituting the two given equations, written as $\partial_tu=\hbar^{-1}\bigl(Vv-\tfrac{\hbar^2}{2m}\partial_x^2v\bigr)$ and $\partial_tv=\hbar^{-1}\bigl(\tfrac{\hbar^2}{2m}\partial_x^2u-Vu\bigr)$, gives $\partial_tn=\frac{2}{\hbar}\bigl(uVv-\tfrac{\hbar^2}{2m}u\,\partial_x^2v+\tfrac{\hbar^2}{2m}v\,\partial_x^2u-vVu\bigr)=\frac{\hbar}{m}\bigl(v\,\partial_x^2u-u\,\partial_x^2v\bigr)$, because $2\hbar^{-1}\cdot\tfrac{\hbar^2}{2m}=\tfrac{\hbar}{m}$ and the two terms containing $Vuv$ cancel. [given, F2, algebra]

1.3 [Stationary flux has zero derivative] In the situation of (b), [F2] gives $j_{\mathrm s}'(x)=\frac{\hbar}{m}\bigl(u_{\mathrm s}'(x)v_{\mathrm s}'(x)+u_{\mathrm s}(x)v_{\mathrm s}''(x)-u_{\mathrm s}''(x)v_{\mathrm s}(x)-u_{\mathrm s}'(x)v_{\mathrm s}'(x)\bigr)=\frac{\hbar}{m}\bigl(u_{\mathrm s}(x)v_{\mathrm s}''(x)-u_{\mathrm s}''(x)v_{\mathrm s}(x)\bigr)$ at every $x\in\Omega$. The two stationary equations give $u_{\mathrm s}''=\frac{2m}{\hbar^2}(V-E)u_{\mathrm s}$ and $v_{\mathrm s}''=\frac{2m}{\hbar^2}(V-E)v_{\mathrm s}$ pointwise, so $j_{\mathrm s}'=\frac{\hbar}{m}\cdot\frac{2m}{\hbar^2}(V-E)(u_{\mathrm s}v_{\mathrm s}-u_{\mathrm s}v_{\mathrm s})=0$ on $\Omega$. [given, F2, algebra]

2.1 [Differentiating the flux] By [F2] applied pointwise, $\partial_xj=\frac{\hbar}{m}\bigl(\partial_xu\,\partial_xv+u\,\partial_x^2v-\partial_x^2u\,v-\partial_xu\,\partial_xv\bigr)=\frac{\hbar}{m}\bigl(u\,\partial_x^2v-(\partial_x^2u)\,v\bigr)$. Adding the result of step 1.2 gives $\partial_tn+\partial_xj=\frac{\hbar}{m}\bigl(v\,\partial_x^2u-u\,\partial_x^2v+u\,\partial_x^2v-v\,\partial_x^2u\bigr)=0$ pointwise on $\Omega\times I$, which is (a). [step 1.2, F2, algebra]

3.1 [Constancy] The functions $u_{\mathrm s},v_{\mathrm s},u_{\mathrm s}',v_{\mathrm s}'$ are continuous on the open interval $\Omega$ by hypothesis, so $j_{\mathrm s}=\frac{\hbar}{m}(u_{\mathrm s}v_{\mathrm s}'-u_{\mathrm s}'v_{\mathrm s})$ is continuous on $\Omega$ by [F3], and $\Omega$ is order-convex; with $j_{\mathrm s}'=0$ at every point of $\Omega$ by step 1.3, [F4] makes $j_{\mathrm s}$ constant on $\Omega$. This proves (b), and step 2.1 proved (a). [step 1.3, F3, F4] ∎

## Remarks

- **Meaning of the hypotheses.** The two real equations are exactly the real and imaginary parts of the complex equation displayed in the statement, and no differentiability of a $\mathbb C$-valued function beyond the stated continuous partial derivatives of $u$ and $v$ is used. The function $V$ need not be continuous for the identity (a); it is used only through the given pointwise equations, and in (b) only through the two stationary equations.
- **What is not asserted.** The lemma produces no normalized state, no probability, no boundary condition and no scattering or transmission coefficient. In particular the constancy in (b) is a statement about a differentiable size on the open interval $\Omega$ and assumes nothing about the behaviour of $j$ at the endpoints of $\Omega$ or at infinity.
