---
id: ex-cm17-riemann-shock-and-rarefaction-check
kind: example
title: "A Riemann shock and a rarefaction of the scalar model: explicit weak
  solutions, entropy coefficients and initial trace"
status: published
origin: session
domain: physics
dependency_level: 9
deps:
  - def-cm-scalar-conservation-law-weak-and-entropy-solution
  - thm-cm-burgers-riemann-shock-and-rarefaction
  - def-integral-over-a-measurable-set
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-cm17-continuum-body-and-units
  - def-cm01-units
  - def-countable-choice
dependency_roles:
  def-cm-scalar-conservation-law-weak-and-entropy-solution: mathematical-premise
  thm-cm-burgers-riemann-shock-and-rarefaction: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked scalar-model example of shock and rarefaction weak
  solutions: the Riemann data 2 and 1 with the entropy coefficients of the shock
  computed on the interval (1,2), and the rarefaction fan of the data 1 and 2
  checked for continuity, the classical equation inside the fan and convergence
  of the initial trace. The scalar conservation law u_t + (u^2/2)_x = 0 is a
  dimensionless idealized one-dimensional model; its scalar variable is not
  identified with a particular physical density or velocity. The example
  asserts no derivation from three-dimensional fluid mechanics and reports no
  measurement."
sources:
  references:
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics
        (lecture notes, TUM, Winter term 2021/22), Chapters 2-5 (weak solutions,
        entropy conditions, Rankine-Hugoniot conditions and the scalar Riemann
        problem)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "L. C. Evans, Entropy and Partial Differential Equations (UC Berkeley
        lecture notes, 2001), Chapter V (conservation laws: weak solutions,
        entropy conditions and the Rankine-Hugoniot condition for scalar laws)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited Lebesgue weak/entropy formulation.

Let $F(u)=\tfrac12u^2$ and use the weak and entropy formulations of
[[def-cm-scalar-conservation-law-weak-and-entropy-solution]], with the scalar
field $u$ read as a dimensionless model variable. The coordinates $t,x$, the
states $u_L,u_R$ and flux $F(u)$ are all dimensionless; no assignment to a
measured density, velocity, length or time is made. Then:

1. **(Shock.)** For the Riemann data $u_L=2$, $u_R=1$ the piecewise constant
   field $u(t,x)=2$ for $x<\tfrac32t$ and $u(t,x)=1$ for $x>\tfrac32t$
   $(t>0)$, taking the right-state value on the shock line, is a weak solution of $u_t+(F(u))_x=0$: its interface residual is
   $-s[u]+[F(u)]=-\tfrac32\cdot(1-2)+\tfrac12(1^2-2^2)=\tfrac32-\tfrac32=0$
   with $s=\tfrac32$, so the weak identity (W) is satisfied for every test
   function by the split integration over the two half-planes.
2. **(Entropy of the shock.)** For every $k\in(1,2)$ the interface
   coefficient of the pair $(\eta_k,q_k)=(\lvert u-k\rvert,
   \operatorname{sign}(u-k)(u^2-k^2)/2)$ is
   $s[\eta_k]-[q_k]=-(k-2)(k-1)=(2-k)(k-1)>0$, so the shock satisfies the
   entropy inequality with strictly positive interface production on this range of $k$; the integrated inequality is strict only for nonnegative tests with $\int_0^\infty\varphi(t,st)dt>0$; for $k\notin[1,2]$ the
   coefficient vanishes and the inequality holds with equality.
3. **(Rarefaction.)** For the Riemann data $u_L=1$, $u_R=2$ the field
   $u(t,x)=1$ for $x\le t$, $u(t,x)=x/t$ for $t<x<2t$ and $u(t,x)=2$ for
   $x\ge2t$ $(t>0)$ is continuous on $(0,\infty)\times\mathbb R$, satisfies
   $u_t+(F(u))_x=0$ classically inside the fan, and has initial trace $f$:
   $\int_{\mathbb R}\lvert u(t,x)-f(x)\rvert\,dx\le\tfrac32t\to0$ as
   $t\downarrow0$.
4. **(Weak kinks are unavoidable here.)** The shock profile is discontinuous
   across $x=\tfrac32t$ and the rarefaction is not differentiable across
   $x=t$ and $x=2t$; the classical derivation of the transport and balance
   identities of the continuum page does not apply at such sets, which is
   exactly why the weak formulation of the model is used. The admissibility
   of the shock and the equality case of the rarefaction are those of
   [[thm-cm-burgers-riemann-shock-and-rarefaction]].

## Facts & Assumptions

**Given:** Countable choice. the flux $F(u)=u^2/2$; the Riemann data $u_L=2,u_R=1$ and $u_L=1,u_R=2$; the two explicit fields.

[F1] Weak and entropy solutions ([[def-cm-scalar-conservation-law-weak-and-entropy-solution]]): the weak identity (W) and the entropy inequality (E) for convex entropy pairs with $q'=u\eta'$, and the family $(\eta_k,q_k)$ with $\eta_k(u)=|u-k|$, $q_k(u)=\operatorname{sign}(u-k)(u^2-k^2)/2$.

[F2] Riemann theorem ([[thm-cm-burgers-riemann-shock-and-rarefaction]]): for $u_L>u_R$ the shock with speed $s=(u_L+u_R)/2$ is a weak solution and satisfies every entropy inequality of the family $(\eta_k,q_k)$ with coefficient $s[\eta_k]-[q_k]=-(k-u_L)(k-u_R)\ge0$ for $u_R\le k\le u_L$, and coefficient $0$ outside that interval; for $u_L<u_R$ the rarefaction fan is continuous, is a weak solution and satisfies the entropy inequalities with equality.

[F3] Integration ([[def-integral-over-a-measurable-set]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]): the integral of a bounded measurable function over a set of finite measure, and additivity over the regions of the piecewise description.

## Verification

**Proof technique:** direct; compute the Rankine-Hugoniot residual and the entropy coefficients for the chosen data, and check the fan solution pointwise and its initial trace by explicit integration.

1.1 Shock residual: with $u_L=2,u_R=1$ the speed is $s=(u_L+u_R)/2=3/2$; $[u]=u_R-u_L=-1$ and $[F(u)]=(u_R^2-u_L^2)/2=(1-4)/2=-3/2$, so $-s[u]+[F(u)]=3/2-3/2=0$; this is the interface coefficient of the weak identity (W) when the field is integrated piecewise, so (W) holds for every test function. [given, F1, F2, algebra]

1.2 Rarefaction equation and continuity: inside the fan $u=x/t$ gives $u_t=-x/t^2$, $u_x=1/t$ and $u\,u_x=x/t^2$, so $u_t+uu_x=0$; at $x=t$ the value is $1=u_L$ and at $x=2t$ it is $2=u_R$, matching the constant pieces, so $u$ is continuous on the open upper half-plane. [given, F1, F2, algebra]

2.1 Shock entropy: by [F2], for $k\in[1,2]$ the coefficient is $s[\eta_k]-[q_k]=-(k-2)(k-1)=(2-k)(k-1)\ge0$, strictly positive for $1<k<2$ because $k-2<0$ and $k-1>0$, and zero at $k=1,2$. For $k<1$ both states exceed $k$, so $[\eta_k]=[u]=-1$ and $[q_k]=[F]=-3/2$, giving $s[\eta_k]-[q_k]=(3/2)(-1)-(-3/2)=0$. For $k>2$ both states are below $k$, so $[\eta_k]=-[u]=1$ and $[q_k]=-[F]=3/2$, again giving zero. Thus (E) holds for every nonnegative test. For $1<k<2$ it is strict exactly when the test has positive integral on the shock line; zero or off-interface tests give equality, and for $k\notin[1,2]$ every test gives equality. [step 1.1, F1, F2, algebra]

2.2 Initial trace: for $0<t$ one has $u(t,x)\ne f(x)$ only on the set where the fan and the constants differ, and $\int|u-f|\le\int_0^t|1-2|\,dx+\int_t^{2t}|x/t-2|\,dx=t+\int_t^{2t}(2-x/t)\,dx=t+t/2=3t/2\to0$ as $t\downarrow0$, by additivity and evaluation of the elementary integrals [F3]; moreover the entropy inequality of the fan holds with equality by [F2]. [step 1.2, F2, F3, algebra]

3.1 Regularity reading: the shock is discontinuous and the fan fails to be differentiable across $x=t$ and $x=2t$; hence the classical smooth-motion hypotheses of the balance and transport items of this page are not met on these sets, and the weak formulation of [F1] is the correct setting for these solutions. This is a statement about the models, not an empirical claim. [step 1.1, step 1.2, F1] ∎

## Remarks

- **Physical reading.** The dimensionless scalar field $u$ is a model variable of an idealized one-dimensional transport problem; it is **not** claimed to be the velocity or density of a three-dimensional compressible fluid, and no derivation of the scalar equation from the momentum and mass balances of this page is asserted. The example shows that a scalar continuum model can have nondifferentiable weak solutions whose admissibility is controlled by entropy inequalities, in contrast with the smooth motions required by the transport and balance theorems of this page.

- **Admissibility is not automatic.** Both the shock and the fan are weak solutions; only the entropy inequalities select the physically admissible one among weak solutions of this model family. The computed coefficients show the shock is admissible for the stated data and the fan is the equality case. No statement is made about entropy solutions for general initial data or for systems of conservation laws.
