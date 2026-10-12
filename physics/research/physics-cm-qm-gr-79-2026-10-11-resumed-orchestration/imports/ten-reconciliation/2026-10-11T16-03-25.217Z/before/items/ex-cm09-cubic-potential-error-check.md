---
id: ex-cm09-cubic-potential-error-check
kind: example
title: "A cubic-potential chart system: the exact quadratic remainder, the explicit error constants and a checked finite-time bound"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm09-linearization-error-bound, def-cm09-coupled-quadratic-model, def-cm-mechanical-vector-field-and-energy-in-a-chart, prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium, def-euclidean-inner-product, def-operator-norm, def-cm01-units, thm-mean-value-inequality]
dependency_roles:
  pthm-cm09-linearization-error-bound: physical-result
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-operator-norm: mathematical-premise
  def-cm01-units: formulation-prerequisite
  thm-mean-value-inequality: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the finite-time linearization error bound: the one-dimensional chart system with constant mass m, potential U(q) = k q^2/2 + lambda q^3/6 and field G(q,v) = (v,-(kq+lambda q^2/2)/m), whose translated field has the exact quadratic remainder -(lambda/(2m)) delta q^2, giving the exact constants C = |lambda|/(2m) and L = max(1,(k+|lambda|r/2)/m) on the ball of radius r; a numerical instance with m=k=lambda=1, r=1, delta=10^-2 and T=1 checks the smallness condition delta exp(LT) = 0.04482 < 1 and the bound 2.73 x 10^-3, and the case lambda=0 reduces the field to its linearization with C=0. All quantities are exact-arithmetic evaluations of model formulas; no measurement or empirical claim is present."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, printed pages 147-148 (PDF pages 150-151): the linearised oscillator, the first-order correction and the limits of linear reasoning"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 5, Section 5.2, Eqs. (5.35)-(5.49), chapter pages 6-10 (PDF pages 93-97): the weakly anharmonic oscillator, the cubic and quartic perturbations and the secular behaviour of the first correction"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Let $m>0$, $k>0$ and $\lambda\ne0$ be constants, read with the dimensions
$\mu$, $\mu\tau^{-2}$ and $\mu\ell^{-1}\tau^{-2}$ ([[def-cm01-units]]), and
consider the one-dimensional mechanical chart system of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] with constant
metric field $M(q)=m$ and potential

$$U(q)=\tfrac12kq^{2}+\tfrac{\lambda}{6}q^{3},$$

so that the mechanical field is
$G(q,v)=\bigl(v,-(kq+\tfrac{\lambda}{2}q^{2})/m\bigr)$. Then:

1. $q_{0}=0$ is a mechanical equilibrium with $K:=D^{2}U(0)=k>0$; the
small-oscillation model of clause (d) of [[def-cm09-coupled-quadratic-model]]
is the one-dimensional quadratic model $m\xi''+k\xi=0$ with frequency
$\omega=\sqrt{k/m}$;
2. for the translated field
$F(\delta q,\delta v)=\bigl(\delta v,-(k\,\delta q+\tfrac{\lambda}{2}\delta q^{2})/m\bigr)$
one has the **exact** remainder identity
$$F(\zeta)-A\zeta=\Bigl(0,-\frac{\lambda}{2m}\delta q^{2}\Bigr),\qquad A=\begin{pmatrix}0&1\\-k/m&0\end{pmatrix},\qquad \zeta=(\delta q,\delta v),$$
so the constants of [[pthm-cm09-linearization-error-bound]] can be taken as
$$C=\frac{\lvert\lambda\rvert}{2m},\qquad L=\max\Bigl(1,\ \frac{k+\lvert\lambda\rvert r/2}{m}\Bigr)$$
on every ball $\lVert\zeta\rVert_{2}\le r$, and $\lVert A\rVert=\max(1,k/m)$;
3. the numerical instance $m=1$ kg, $k=1$ kg/s$^{2}$, $\lambda=1$ kg/(m$\cdot$s$^{2}$),
$r=1$, $\delta=10^{-2}$, $T=1$ satisfies
$\delta e^{LT}=10^{-2}e^{3/2}\approx0.04482<1$ and the resulting bound is
$$C\delta^{2}Te^{(\lVert A\rVert+2L)T}\approx2.73\times10^{-3};$$
4. for $\lambda=0$ the potential is exactly quadratic, $C=0$, and the
nonlinear model coincides with its linearization: the bound of the theorem
degenerates to the identity $z=y$.

## Facts & Assumptions

**Given:** The parameters $m,k>0$, $\lambda$, the field $G$ and translated
field $F$, the matrix $A$, and in clause 3 the numerical values
$m=k=\lambda=r=1$, $\delta=10^{-2}$, $T=1$.

[F1] Chart model and linearization
([[def-cm-mechanical-vector-field-and-energy-in-a-chart]],
[[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]):
$\nabla U(0)=0$ and
$DG(0,0)(\delta q,\delta v)=(\delta v,-\frac{k}{m}\delta q)$; the
second-order Taylor data at the equilibrium are $M=m$, $K=k$, so the
small-oscillation model is $m\xi''+k\xi=0$ with
$\omega=\sqrt{k/m}$ ([[def-cm09-coupled-quadratic-model]] clause (d)).

[F2] Finite-time error bound ([[pthm-cm09-linearization-error-bound]]): for
a $C^{3}$ metric field and potential with vanishing gradient at $q_{0}$ and
constants $C,L,r_{0}$ with
$\lVert F(\zeta)-A\zeta\rVert_{2}\le C\lVert\zeta\rVert_{2}^{2}$ and
$\lVert F(\zeta)\rVert_{2}\le L\lVert\zeta\rVert_{2}$ on
$\lVert\zeta\rVert_{2}\le r_{0}$, every datum with
$\delta=\lVert\zeta_{0}\rVert_{2}>0$ and $\delta e^{LT}<r_{0}$ has its
motion defined on $[0,T]$ with
$\lVert z(t)-y(t)\rVert_{2}\le C\delta^{2}te^{(\lVert A\rVert+2L)t}$ there.

[F3] Direct computation ([[def-euclidean-inner-product]],
[[def-operator-norm]], [[thm-mean-value-inequality]]): differentiating
$U$ gives $U'(q)=kq+\frac{\lambda}{2}q^{2}$ and $U''(q)=k+\lambda q$; the
remainder identity of clause 2 is read off the components of $F$; the norm
of $\lVert F(\zeta)\rVert_{2}$ on the ball is bounded by
$\max(1,(k+\lvert\lambda\rvert r/2)/m)\lVert\zeta\rVert_{2}$ because
$\lvert k\delta q+\frac{\lambda}{2}\delta q^{2}\rvert\le(k+\lvert\lambda\rvert r/2)\lvert\delta q\rvert$;
and $\lVert A\rVert=\max(1,k/m)$ from $A^{\mathsf T}A=\operatorname{diag}((k/m)^{2},1)$.

## Verification

**Proof technique:** direct; compute the exact remainder of the cubic
potential, bound the field on a ball, and evaluate the theorem's hypotheses
and conclusion on explicit numbers.

1.1 Equilibrium and linearization: $U'(0)=0$ gives the equilibrium; $U''(0)=k$; by [F1] the small-oscillation model is $m\xi''+k\xi=0$ with frequency $\sqrt{k/m}$, and the derivative of $G$ at the origin is the displayed $A$. This is clause 1. [F1, algebra]

1.2 Exact remainder: the translated field is $F(\zeta)=(\delta v,-(k\delta q+\frac{\lambda}{2}\delta q^{2})/m)$ and $A\zeta=(\delta v,-\frac{k}{m}\delta q)$, so subtracting gives $F(\zeta)-A\zeta=(0,-\frac{\lambda}{2m}\delta q^{2})$; its norm is $\frac{\lvert\lambda\rvert}{2m}\lvert\delta q\rvert^{2}\le\frac{\lvert\lambda\rvert}{2m}\lVert\zeta\rVert_{2}^{2}$, so $C=\lvert\lambda\rvert/(2m)$ is exact on every ball; the growth bound with $L$ and the norm of $A$ are [F3]. This is clause 2. [F1, F3, algebra]

2.1 Numerical instance: with $m=k=\lambda=r=1$ one has $C=1/2$, $L=\max(1,3/2)=3/2$ and $\lVert A\rVert=1$; for $\delta=10^{-2}$ and $T=1$ the smallness condition $\delta e^{LT}=e^{3/2}/100<1=r$ holds because $e^{3/2}<e^{2}<8$, so the bound applies and gives $C\delta^{2}Te^{(\lVert A\rVert+2L)T}=e^{4}/20000$; this is clause 3. [F2, step 1.2, algebra]

2.2 Linear case: for $\lambda=0$ the potential is exactly quadratic and $F(\zeta)=A\zeta$ for all $\zeta$; hence $C=0$, the theorem's bound reads $\lVert z(t)-y(t)\rVert_{2}\le0$, and the nonlinear motion and its linearization coincide on the whole line. This is clause 4. [F2, step 1.2, algebra]

3.1 Clauses 1-4 are verified by exact computation from the model formulas; the numbers in clause 3 are arithmetic evaluations of the displayed expressions and are not measured quantities. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **The cubic term is the first genuinely nonlinear term.** Its remainder
is exactly quadratic in the displacement, which is why the error-bound
theorem's hypothesis holds globally here with the exact constant
$C=\lvert\lambda\rvert/(2m)$; for a general $U$ the constant comes from
compactness and is not explicit, as in
[[pthm-cm09-linearization-error-bound]].

- **Decimal values of the instance.** On the instance of clause 3 the
smallness quantity is approximately $0.04482$ and the bound is approximately
$2.73\times10^{-3}$; these decimals are evaluations of the exact expressions
$e^{3/2}/100$ and $e^{4}/20000$ and play no role in the verification.

- **What the bound does not say.** The estimate compares the nonlinear
motion with the harmonic one only on the stated finite horizon and for the
stated small datum; the cubic potential itself produces secular and
amplitude-dependent effects beyond that horizon, which are not described by
this example and are outside the small-oscillation model.
