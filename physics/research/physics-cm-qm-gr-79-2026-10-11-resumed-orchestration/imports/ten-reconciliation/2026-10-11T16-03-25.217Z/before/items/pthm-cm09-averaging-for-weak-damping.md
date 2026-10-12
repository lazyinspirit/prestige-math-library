---
id: pthm-cm09-averaging-for-weak-damping
kind: physics-theorem
title: "Averaging for a weakly damped oscillator: the rotating-frame amplitude, the averaged exponential energy decay and the order-$\\varepsilon$ bound on the $O(1/\\varepsilon)$ time scale"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm04-linear-damping-model, def-cm-oscillator-model-and-phase-system, thm-cm-averaging-for-fast-periodic-oscillations, def-cm-averaging-data-and-averaged-field, cor-cm-variation-of-constants-for-linear-systems, cor-primitives-of-a-continuous-function, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-conjugate-real-imaginary-part-and-modulus, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-operator-norm, def-euclidean-inner-product, def-metric-ball, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-ck-euclidean-maps-and-diffeomorphisms, def-maximal-ode-solution, def-interval]
dependency_roles:
  post-cm04-linear-damping-model: physical-assumption
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-averaging-for-fast-periodic-oscillations: mathematical-premise
  def-cm-averaging-data-and-averaged-field: mathematical-premise
  cor-cm-variation-of-constants-for-linear-systems: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-operator-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The strictly damped one-dimensional oscillator model m x'' + epsilon gamma x' + k x = 0 with m>0, k>0, small parameter epsilon>0 and fixed gamma>0: the exact rotating-frame amplitude zeta(t) = (omega_0 x + i x') exp(i omega_0 t)/sqrt(2 omega_0) and its slow equation zeta' = epsilon F(t,zeta) with F smooth and periodic in time, the averaged equation zeta' = -(epsilon gamma/(2m)) zeta with the exponential averaged solution, the order-epsilon averaging estimate on the O(1/epsilon) time scale under the stated smallness, trapping and constant hypotheses, and the resulting exponential energy-decay estimate |E(t) - E_0 exp(-epsilon gamma t/m)| <= m omega_0 epsilon K (2|zeta_0|+epsilon K). The result is a conditional finite-time statement about the declared damped model; the averaged system is a different model compared with the exact one, no exact energy decay law is asserted, no measured decay rate or quality factor is reported and no empirical claim is made."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 5, Section 5.3, Eqs. (5.47)-(5.57), chapter pages 8-14 (PDF pages 95-101): weakly nonlinear perturbation, secular terms and the reduced (averaged) equations obtained by time averaging over one period"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 5, Sections 5.2-5.3, Eqs. (5.22)-(5.28), printed pages 95-98 (PDF pages 98-101): splitting a first-order perturbation into periodic and secular parts and averaging over one period"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.6, Eqs. (4.148)-(4.158), printed pages 113-115 (PDF pages 119-121): the averaged statement for a slowly varying oscillator and the author's note that a rigorous proof is deferred"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the strictly damped oscillator model of
[[post-cm04-linear-damping-model]] with fixed data $m>0$, $k>0$ and drag
coefficient $c=\varepsilon\gamma$, where $\varepsilon>0$ and $\gamma>0$ are
given; its equation is

$$m\,x''(t)+\varepsilon\gamma\,x'(t)+k\,x(t)=0 .$$

Put $\omega_{0}:=\sqrt{k/m}$ and identify $\mathbb C$ with $\mathbb R^{2}$.
For a motion $x$ define the **rotating-frame amplitude**

$$\zeta(t):=\frac{1}{\sqrt{2\omega_{0}}}\bigl(\omega_{0}x(t)+i\,x'(t)\bigr)e^{i\omega_{0}t}\in\mathbb C,$$

and define $F:\mathbb R\times\mathbb C\to\mathbb C$ by

$$F(t,\zeta):=-\frac{i\gamma}{m}\,e^{i\omega_{0}t}\bigl(\cos(\omega_{0}t)\operatorname{Im}\zeta-\sin(\omega_{0}t)\operatorname{Re}\zeta\bigr).$$

Then:

1. **Global motions and the slow system.** Every datum
$(t_{0},x_{0},v_{0})\in\mathbb R^{3}$ has exactly one maximal motion, and it
is defined on all of $\mathbb R$. The map $x\mapsto\zeta$ is a bijection
from the motions $x:\mathbb R\to\mathbb R$ of the model onto the solutions
$\zeta:\mathbb R\to\mathbb C$ of the first-order system
$\zeta'=\varepsilon F(t,\zeta)$, with inverse
$\zeta\mapsto x(t)=\sqrt{2/\omega_{0}}\operatorname{Re}\bigl(e^{-i\omega_{0}t}\zeta(t)\bigr)$.
2. **Averaging data.** $F$ is of class $C^{\infty}$ on
$\mathbb R\times\mathbb C$, is $P$-periodic in $t$ with $P:=2\pi/\omega_{0}$,
and its average in the sense of
[[def-cm-averaging-data-and-averaged-field]] is
$\bar F(\zeta)=-\gamma\zeta/(2m)$; the averaged system is
$\zeta'=-\varepsilon\gamma\zeta/(2m)$, with the global solution
$\bar\zeta(t)=\zeta_{0}e^{-\varepsilon\gamma t/(2m)}$ for the datum
$\zeta_{0}=\zeta(0)$.
3. **Order-$\varepsilon$ estimate on the $O(1/\varepsilon)$ time scale.**
Let $\zeta_{0}\in\mathbb C$ with $\lvert\zeta_{0}\rvert>0$, let
$0<\rho<R$ be real numbers and put
$$M:=\frac{\gamma}{m}\sqrt2\,\bigl(\lvert\zeta_{0}\rvert+R\bigr),\qquad L:=\frac{\gamma}{m}\sqrt2,\qquad B:=2MP,\qquad B_{1}:=2LP,$$
$$K:=e^{LA}\bigl[B+(LB+B_{1}M)A\bigr]$$
for a parameter $A>0$. Suppose $\varepsilon K<\rho$ and suppose the averaged
solution satisfies $\lVert\bar\zeta(t)-\zeta_{0}\rVert_{2}\le R-\rho$ for
every $t\in[0,A/\varepsilon]$; this holds whenever
$\lvert\zeta_{0}\rvert>R-\rho$ and
$\gamma A/(2m)\le\ln\bigl(\lvert\zeta_{0}\rvert/(\lvert\zeta_{0}\rvert-(R-\rho))\bigr)$.
Then the solution $\zeta$ of $\zeta'=\varepsilon F(t,\zeta)$ with
$\zeta(0)=\zeta_{0}$ exists on $[0,A/\varepsilon]$ and satisfies
$$\lVert\zeta(t)-\bar\zeta(t)\rVert_{2}\le\varepsilon K\qquad(0\le t\le A/\varepsilon).$$
4. **Energy reading.** For every motion the mechanical energy satisfies
$$E(t):=\tfrac12m\,x'(t)^{2}+\tfrac12k\,x(t)^{2}=m\omega_{0}\lvert\zeta(t)\rvert^{2},$$
so with $E_{0}:=E(0)=m\omega_{0}\lvert\zeta_{0}\rvert^{2}$ the estimate of
clause 3 gives
$$\bigl\lvert E(t)-E_{0}e^{-\varepsilon\gamma t/m}\bigr\rvert\le m\omega_{0}\,\varepsilon K\bigl(2\lvert\zeta_{0}\rvert+\varepsilon K\bigr)\qquad(0\le t\le A/\varepsilon).$$

The averaged system is a different model from the exact one, and the
statements are conditional on the displayed smallness and trapping
hypotheses; no exact decay law, no measured decay rate, and no empirical
claim is asserted.

## Facts & Assumptions

**Given:** The model data $(m,\varepsilon\gamma,k)$, the frequency
$\omega_{0}=\sqrt{k/m}$, the amplitude map $\zeta$, the field $F$, the
constants $\zeta_{0},\rho,R,M,L,B,B_{1},A,K$, and a motion $x$ of the model.

[F1] Model and global linear theory ([[post-cm04-linear-damping-model]],
[[def-cm-oscillator-model-and-phase-system]],
[[cor-cm-variation-of-constants-for-linear-systems]]): the phase system of
the model is $(x,v)'=A_{0}(x,v)$ with
$A_{0}=\begin{pmatrix}0&1\\-k/m&-\varepsilon\gamma/m\end{pmatrix}$, a
constant real matrix; for every datum $(t_{0},x_{0},v_{0})$ the curve
$(x,v)(t)=e^{(t-t_{0})A_{0}}(x_{0},v_{0})$ solves it on all of $\mathbb R$,
any differentiable solution with that datum agrees with it on its interval,
and a curve is a motion if and only if its phase curve solves the system
([[def-maximal-ode-solution]]).

[F2] Complex exponential and trigonometric calculus
([[thm-complex-exponential-is-entire-with-derivative-itself]],
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]],
[[thm-chain-rule-for-total-derivatives]],
[[def-vector-valued-derivative-and-integral]]): for real $\theta$,
$e^{i\theta}=\cos\theta+i\sin\theta$ and
$\frac{d}{d\theta}e^{i\theta}=ie^{i\theta}$; sine and cosine are
differentiated by $(\sin)'=\cos$, $(\cos)'=-\sin$; sums, products and
composites of differentiable curves are differentiated by the algebra and
chain rules; $\operatorname{Re}$ and $\operatorname{Im}$ are linear and
commute with differentiation, and
$\lvert\zeta\rvert^{2}=(\operatorname{Re}\zeta)^{2}+(\operatorname{Im}\zeta)^{2}$.

[F3] Primitives and one-period averages
([[cor-primitives-of-a-continuous-function]],
[[thm-sine-and-cosine-derivatives]],
[[def-vector-valued-derivative-and-integral]]): on $\mathbb R$ the functions
$u\mapsto u/2+\sin(2u)/4$, $u\mapsto u/2-\sin(2u)/4$ and
$u\mapsto-\cos(2u)/4$ are primitives of $u\mapsto\cos^{2}u$,
$u\mapsto\sin^{2}u$ and $u\mapsto\sin u\cos u$; hence with
$\omega_{0}P=2\pi$ the one-period averages of $\cos^{2}(\omega_{0}t)$ and
$\sin^{2}(\omega_{0}t)$ are $1/2$ and that of
$\sin(\omega_{0}t)\cos(\omega_{0}t)$ is $0$.

[F4] Averaging theorem ([[thm-cm-averaging-for-fast-periodic-oscillations]]
and [[def-cm-averaging-data-and-averaged-field]]) with state space
$O=\mathbb C\cong\mathbb R^{2}$: for a continuous field
$f:\mathbb R\times O\to O$ with continuous partial derivatives in the state,
$P$-periodic in $t$, satisfying
$\lVert f(t,\zeta)\rVert_{2}\le M$ and
$\lVert D_{\zeta}f(t,\zeta)\rVert\le L$ for
$\lVert\zeta-\zeta_{0}\rVert_{2}\le R$ ([[def-metric-ball]],
[[def-operator-norm]]), and for a solution $\bar\zeta$ of
$\bar\zeta'=\varepsilon\bar f(\bar\zeta)$ with
$\bar\zeta(0)=\zeta_{0}$ that lies in
$\overline B(\zeta_{0},R-\rho)$ on $[0,A/\varepsilon]$, the hypothesis
$\varepsilon K<\rho$ with $K=e^{LA}\bigl[B+(LB+B_{1}M)A\bigr]$,
$B=2MP$, $B_{1}=2LP$, implies that the solution of
$\zeta'=\varepsilon f(t,\zeta)$, $\zeta(0)=\zeta_{0}$ exists on
$[0,A/\varepsilon]$ and satisfies
$\lVert\zeta(t)-\bar\zeta(t)\rVert_{2}\le\varepsilon K$ there.

[F5] Elementary analysis ([[def-euclidean-inner-product]],
[[def-vector-valued-functions-limits-and-continuity]],
[[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]]): the
Euclidean norm on $\mathbb C\cong\mathbb R^{2}$ satisfies
$\lvert\operatorname{Re}w\rvert+\lvert\operatorname{Im}w\rvert\le\sqrt2\,\lvert w\rvert$
and the reverse triangle inequality; the map $F$ of the statement is smooth
because it is real-linear in $\zeta$ with smooth coefficients; and a
real-linear map of the form
$h\mapsto-(i\gamma/m)e^{i\omega_{0}t}(\cos(\omega_{0}t)\operatorname{Im}h-\sin(\omega_{0}t)\operatorname{Re}h)$
has operator norm at most $(\gamma/m)\sqrt2$.

## Proof

**Proof technique:** direct; conjugate the equation by the rotating frame,
identify the resulting slow system and its average, bound the data on the
stated ball, apply the averaging theorem, and convert the amplitude estimate
to the energy estimate.

1.1 Identification of the slow system. Let $x$ be a motion and put $u(t):=\omega_{0}x(t)+ix'(t)$, so that $\zeta=e^{i\omega_{0}t}u/\sqrt{2\omega_{0}}$ and $\operatorname{Im}u=\sqrt{2\omega_{0}}\bigl(\cos(\omega_{0}t)\operatorname{Im}\zeta-\sin(\omega_{0}t)\operatorname{Re}\zeta\bigr)$ by [F2]. From $x''=-\omega_{0}^{2}x-(\varepsilon\gamma/m)x'$ of the model, $$u'=\omega_{0}x'+ix''=\omega_{0}x'-i\omega_{0}^{2}x-i\frac{\varepsilon\gamma}{m}x'=-i\omega_{0}u-i\frac{\varepsilon\gamma}{m}\operatorname{Im}u,$$ so differentiating $\zeta$ with the product and chain rules of [F2] gives $\zeta'=-\frac{i\varepsilon\gamma}{m}\frac{e^{i\omega_{0}t}}{\sqrt{2\omega_{0}}}\operatorname{Im}u=\varepsilon F(t,\zeta)$. Conversely, if $\zeta$ solves $\zeta'=\varepsilon F(t,\zeta)$ and $u:=\sqrt{2\omega_{0}}e^{-i\omega_{0}t}\zeta$, then $u'=-i\omega_{0}u-i(\varepsilon\gamma/m)\operatorname{Im}u$, so $x:=\operatorname{Re}(u)/\omega_{0}$ satisfies $x'=\operatorname{Re}(u')/\omega_{0}=\operatorname{Im}u$ and $x''=\operatorname{Im}(u')=-\omega_{0}\operatorname{Re}u-(\varepsilon\gamma/m)\operatorname{Im}u=-\omega_{0}^{2}x-(\varepsilon\gamma/m)x'$, that is, $x$ is a motion with the stated inverse formula. The two constructions are inverse to each other because $x$ and $x'$ are recovered from $\zeta$ and $\zeta$ is recovered from $x,x'$. [F1, F2, given, algebra]

1.2 Smoothness, periodicity and average. $F$ is smooth on $\mathbb R\times\mathbb C$ because $\zeta\mapsto F(t,\zeta)$ is real-linear and the coefficients $t\mapsto e^{i\omega_{0}t}\cos(\omega_{0}t)$ and $t\mapsto e^{i\omega_{0}t}\sin(\omega_{0}t)$ are smooth; it is $P$-periodic with $P=2\pi/\omega_{0}$ because $e^{i\omega_{0}(t+P)}=e^{i\omega_{0}t}$ and $\cos(\omega_{0}(t+P))=\cos(\omega_{0}t)$, $\sin(\omega_{0}(t+P))=\sin(\omega_{0}t)$. Expanding the product, $$F(t,\zeta)=\frac{\gamma}{m}\Bigl(\sin(\omega_{0}t)\cos(\omega_{0}t)\operatorname{Im}\zeta-\sin^{2}(\omega_{0}t)\operatorname{Re}\zeta\Bigr)-\frac{i\gamma}{m}\Bigl(\cos^{2}(\omega_{0}t)\operatorname{Im}\zeta-\sin(\omega_{0}t)\cos(\omega_{0}t)\operatorname{Re}\zeta\Bigr),$$ so by [F3] the one-period average of the first bracket is $-\gamma\operatorname{Re}\zeta/(2m)$ and that of the second is $-\gamma\operatorname{Im}\zeta/(2m)$, giving $\bar F(\zeta)=-\frac{\gamma}{2m}(\operatorname{Re}\zeta+i\operatorname{Im}\zeta)=-\frac{\gamma}{2m}\zeta$. The averaged system is linear with constant coefficient and has the displayed global exponential solution. This is clause 2. [F3, F4, F5, algebra]

1.3 Bounds on the ball. For $\lvert\zeta-\zeta_{0}\rvert\le R$ one has $\lvert\zeta\rvert\le\lvert\zeta_{0}\rvert+R$, so $$\lVert F(t,\zeta)\rVert_{2}=\frac{\gamma}{m}\bigl\lvert\cos(\omega_{0}t)\operatorname{Im}\zeta-\sin(\omega_{0}t)\operatorname{Re}\zeta\bigr\rvert\le\frac{\gamma}{m}\bigl(\lvert\operatorname{Im}\zeta\rvert+\lvert\operatorname{Re}\zeta\rvert\bigr)\le\frac{\gamma}{m}\sqrt2\,\bigl(\lvert\zeta_{0}\rvert+R\bigr)=M .$$ The state derivative is $D_{\zeta}F(t,\zeta)h=-(i\gamma/m)e^{i\omega_{0}t}\bigl(\cos(\omega_{0}t)\operatorname{Im}h-\sin(\omega_{0}t)\operatorname{Re}h\bigr)$, whose modulus is at most $(\gamma/m)\sqrt2\,\lvert h\rvert$ by the same inequality, so $\lVert D_{\zeta}F(t,\zeta)\rVert\le L=(\gamma/m)\sqrt2$ by [F5]. [F5, given, algebra]

2.1 Existence and uniqueness. By [F1] every datum has exactly one maximal motion and it is defined on all of $\mathbb R$; by step 1.1 its amplitude solves the slow system on $\mathbb R$ with the datum $\zeta(0)$, and distinct motions have distinct amplitudes. Conversely a solution of the slow system on $\mathbb R$ produces a motion by step 1.1; this proves the bijection of clause 1. [F1, step 1.1, given]

2.2 Averaged trajectory and the estimate. The averaged solution $\bar\zeta(t)=\zeta_{0}e^{-\varepsilon\gamma t/(2m)}$ satisfies $\lvert\bar\zeta(t)-\zeta_{0}\rvert=\lvert\zeta_{0}\rvert\bigl(1-e^{-\varepsilon\gamma t/(2m)}\bigr)\le R-\rho$ on $[0,A/\varepsilon]$ under the stated trapping hypothesis; if $\lvert\zeta_{0}\rvert>R-\rho$ and $\gamma A/(2m)\le\ln\bigl(\lvert\zeta_{0}\rvert/(\lvert\zeta_{0}\rvert-(R-\rho))\bigr)$, then $e^{-\gamma A/(2m)}\ge\bigl(\lvert\zeta_{0}\rvert-(R-\rho)\bigr)/\lvert\zeta_{0}\rvert$, which is the same inequality, so the trapping hypothesis holds in that case. Applying [F4] with $f=F$, the constants $M,L$ of step 1.3, the radius $R$, the parameter $\rho$, the horizon parameter $A$ and the smallness hypothesis $\varepsilon K<\rho$ gives that the solution $\zeta$ of the slow system with $\zeta(0)=\zeta_{0}$ exists on $[0,A/\varepsilon]$ and satisfies $\lVert\zeta(t)-\bar\zeta(t)\rVert_{2}\le\varepsilon K$ there; this is clause 3. [F4, step 1.2, step 1.3, given, algebra]

3.1 Energy identity and estimate. With $\zeta=(1/\sqrt{2\omega_{0}})(\omega_{0}x+ix')e^{i\omega_{0}t}$ one has $2\omega_{0}\lvert\zeta\rvert^{2}=\omega_{0}^{2}x^{2}+x'^{2}$ by [F2], hence $$m\omega_{0}\lvert\zeta\rvert^{2}=\tfrac12 m x'^{2}+\tfrac12 m\omega_{0}^{2}x^{2}=\tfrac12mx'^{2}+\tfrac12kx^{2}=E .$$ For $0\le t\le A/\varepsilon$, $\bigl\lvert\,\lvert\zeta(t)\rvert^{2}-\lvert\bar\zeta(t)\rvert^{2}\bigr\rvert=\bigl\lvert\lvert\zeta(t)\rvert-\lvert\bar\zeta(t)\rvert\bigr\rvert\bigl(\lvert\zeta(t)\rvert+\lvert\bar\zeta(t)\rvert\bigr)\le\varepsilon K\bigl(2\lvert\zeta_{0}\rvert+\varepsilon K\bigr)$, because $\lvert\zeta(t)\rvert\le\lvert\bar\zeta(t)\rvert+\varepsilon K\le\lvert\zeta_{0}\rvert+\varepsilon K$; multiplying by $m\omega_{0}$ and using $m\omega_{0}\lvert\bar\zeta(t)\rvert^{2}=E_{0}e^{-\varepsilon\gamma t/m}$ gives the displayed energy estimate; this is clause 4. [F2, step 2.2, algebra]

4.1 Clauses 1-4 are proved. The averaged equation defines a different model from the exact one; the estimate is finite-time, of order $\varepsilon$ in the amplitude, and holds only on the stated horizon under the smallness and trapping hypotheses; no exact decay law and no empirical qualification is asserted. [step 2.1, step 1.2, step 2.2, step 3.1] ∎

## Remarks

- **Why the time scale is $O(1/\varepsilon)$.** The averaged amplitude decays
at the rate $\varepsilon\gamma/(2m)$, so on the horizon $t\le A/\varepsilon$
the averaged energy falls by the definite factor $e^{-\gamma A/m}$ of order
one: genuinely long times compared with the oscillation period
$2\pi/\omega_{0}$, which is where weak damping acts. The estimate does not
continue to hold for $t\gg A/\varepsilon$ without new hypotheses.

- **The averaged system is not the exact system.** The theorem compares two
explicitly specified initial value problems and bounds their difference by
$\varepsilon K$; it does not identify them. The exact model is linear with a
known closed-form solution whose action decreases monotonically with an
oscillatory component, whereas the averaged action decreases exactly
exponentially; the comparison is a controlled approximation, not an exact
conservation law.
