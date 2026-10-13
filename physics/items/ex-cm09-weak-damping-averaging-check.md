---
id: ex-cm09-weak-damping-averaging-check
kind: example
title: "An explicit weakly damped oscillator: the averaging constants and the energy-decay bound over five thousand seconds (about 796 undamped periods)"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm09-averaging-for-weak-damping, def-cm-averaging-data-and-averaged-field, post-cm04-linear-damping-model, def-cm01-units, def-euclidean-inner-product, def-complex-conjugate-real-imaginary-part-and-modulus, thm-sine-and-cosine-derivatives, cor-two-less-than-e-less-than-three, def-principal-inverse-tangent, def-tangent-cotangent-secant-cosecant, thm-cofunction-supplementary-and-reflection-identities, thm-principal-inverse-tangent-calculus, lem-derivative-of-a-power, cor-primitives-of-a-continuous-function, thm-monotonicity-of-the-integral, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity]
dependency_roles:
  pthm-cm09-averaging-for-weak-damping: physical-result
  def-cm-averaging-data-and-averaged-field: mathematical-premise
  post-cm04-linear-damping-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-cofunction-supplementary-and-reflection-identities: mathematical-premise
  thm-principal-inverse-tangent-calculus: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked numerical instance of the weak-damping averaging estimate: the model m x'' + epsilon gamma x' + k x = 0 with m = 1 kg, k = 1 kg/s^2, epsilon = 10^-4 and gamma = 1 kg/s, initial rotating-frame amplitude zeta_0 = 1, ball radii R = 1/2 and rho = 1/4 and horizon parameter A = 1/2, verifying the smallness and trapping hypotheses with the exact constants M = 3 sqrt2/2, L = sqrt2, K = 2 pi (3 sqrt2 + 6) exp(sqrt2/2) and concluding that the mechanical energy tracks the averaged exponential exp(-t/10^4) within 2.63 x 10^-2 on the interval [0,5000]. The numbers are exact-arithmetic evaluations of the model formulas, not measurements; no apparatus, no observed decay and no empirical statement is present."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 5, Section 5.1, Eqs. (5.14)-(5.22), chapter pages 3-5 (PDF pages 89-91): the damped oscillator, its decay rate and quality-factor bookkeeping in the small-damping regime"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.15), printed pages 147-148 (PDF pages 150-151): the damped linear oscillator and its solutions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Adopt the damped oscillator model of [[post-cm04-linear-damping-model]] with
data

$$m=1\ \text{kg},\qquad k=1\ \text{kg/s}^{2},\qquad \varepsilon=10^{-4},\qquad \gamma=1\ \text{kg/s},$$

so that $c=\varepsilon\gamma=10^{-4}$ kg/s and $\omega_{0}=\sqrt{k/m}=1$
rad/s; the angles and frequencies are read under the convention of
[[def-cm01-units]]. Fix amplitude unit $a_*=1\,\mathrm m\,\mathrm s^{-1/2}$ and time unit $1\,\mathrm s$. Take $\zeta_0=a_*$, $R=a_*/2$, $\rho=a_*/4$ and $A=(1\,\mathrm s)/2$. Below these symbols, $t$ and the constants in coefficient calculations mean their numerical values in these fixed units. In particular $M$ is in $a_*/\mathrm s$, $L$ in $\mathrm s^{-1}$, $B,K$ in $a_*$ and $B_1$ is dimensionless. Every energy exponential below is multiplied by $E_0=1\,\mathrm J$ when read as a physical quantity, and the horizon $[0,5000]$ means $[0,5000\,\mathrm s]$. For $x>0$, write $\ln x:=\log x$, where $\log:(0,\infty)\to\mathbb R$ is the inverse of the real exponential ([[def-natural-logarithm]]). Then:

1. the averaging data of [[pthm-cm09-averaging-for-weak-damping]] specialize
to $P=2\pi$, $F(t,\zeta)=-ie^{it}(\cos t\operatorname{Im}\zeta-\sin t\operatorname{Re}\zeta)$
and $\bar F(\zeta)=-\zeta/2$, with averaged solution
$\bar\zeta(t)=e^{-\varepsilon t/2}=e^{-t/(2\cdot10^{4})}$;
2. the constants of the averaging estimate are
$$M=\frac{3\sqrt2}{2},\qquad L=\sqrt2,\qquad B=6\sqrt2\,\pi,\qquad B_{1}=4\sqrt2\,\pi,\qquad K=2\pi\bigl(3\sqrt2+6\bigr)e^{\sqrt2/2},$$
so that
$$K\approx1.30522\times10^{2},\qquad \varepsilon K\approx1.30522\times10^{-2}<0.25=\rho;$$
3. the trapping hypothesis holds:
$\lvert\zeta_{0}\rvert(1-e^{-\gamma A/(2m)})=1-e^{-1/4}\approx0.22120< R-\rho=0.25$,
and also $1/4=\gamma A/(2m)\le\ln(4/3)\approx0.28768$;
4. consequently the motion with datum $x(0)=\sqrt2$ m, $x'(0)=0$ — which
has $\zeta(0)=1$ and mechanical energy $E_{0}=m\omega_{0}\lvert\zeta_{0}\rvert^{2}=1$ J —
satisfies
$$\bigl\lvert E(t)-e^{-t/10^{4}}\bigr\rvert\le m\omega_{0}\varepsilon K\bigl(2\lvert\zeta_{0}\rvert+\varepsilon K\bigr)\approx2.62748\times10^{-2}\ \text{J}\qquad(0\le t\le5000),$$
the interval $[0,5000]$ being $[0,A/\varepsilon]$ and containing
$5000/(2\pi)\approx795.8$ oscillation periods of the undamped frequency;
5. at the end of the horizon the averaged energy is
$e^{-1/2}\approx0.60653$ J, so the estimate bounds the deviation of the
exact energy from the averaged exponential decay by about $4.3\%$ of its
value there.

## Facts & Assumptions

**Given:** The model data $m=1$, $k=1$, $\varepsilon=10^{-4}$, $\gamma=1$; the numbers $\zeta_{0}=1$, $R=1/2$, $\rho=1/4$, $A=1/2$; the constants $M,L,B,B_{1},K$ of the Example.

[F1] Averaging theorem ([[pthm-cm09-averaging-for-weak-damping]] clauses 1-4): for the model with data $(m,\varepsilon\gamma,k)$ the rotating-frame amplitude maps motions bijectively onto solutions of $\zeta'=\varepsilon F(t,\zeta)$; $F$ is $P=2\pi/\omega_{0}$-periodic with average $\bar F(\zeta)=-\gamma\zeta/(2m)$; under the hypotheses $\varepsilon K<\rho$ and the trapping condition, the estimate $\lVert\zeta(t)-\bar\zeta(t)\rVert_{2}\le\varepsilon K$ and the energy estimate $\lvert E(t)-E_{0}e^{-\varepsilon\gamma t/m}\rvert\le m\omega_{0}\varepsilon K(2\lvert\zeta_{0}\rvert+\varepsilon K)$ hold on $[0,A/\varepsilon]$, with $M=(\gamma/m)\sqrt2(\lvert\zeta_{0}\rvert+R)$, $L=(\gamma/m)\sqrt2$, $B=2MP$, $B_{1}=2LP$ and $K=e^{LA}[B+(LB+B_{1}M)A]$.

[F2] Data specialization ([[def-cm-averaging-data-and-averaged-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]): with $\omega_{0}=1$ and $\gamma/m=1$ the field of the theorem reads $F(t,\zeta)=-ie^{it}(\cos t\operatorname{Im}\zeta-\sin t\operatorname{Re}\zeta)$ and $P=2\pi$; $\lvert\zeta_{0}\rvert=1$.

[F3] Elementary arithmetic ([[def-euclidean-inner-product]], [[thm-sine-and-cosine-derivatives]]): the displayed decimal values are evaluations of the exact expressions, obtained by direct arithmetic from $\sqrt2\approx1.41421356$, $\pi\approx3.14159265$ and $e^{\sqrt2/2}\approx2.02811498$; in particular the datum with $\zeta_{0}=1$ corresponds to $x(0)=\sqrt2$ m, $x'(0)=0$ and $E_{0}=m\omega_{0}\lvert\zeta_{0}\rvert^{2}=1$ J.

[F4] Exact numerical inequalities: $\sqrt2<3/2$ by squaring and $2<e<3$
by [[cor-two-less-than-e-less-than-three]]. For $x\in[1/4,3/4]$,
$x(1-x)\ge3/16$ and $1+x^{2}\le25/16$, so
$$\frac{x^{4}(1-x)^{4}}{1+x^{2}}\ge\frac{16}{25}\Bigl(\frac{3}{16}\Bigr)^{4}>0.$$
Polynomial division gives
$$\frac{x^{4}(1-x)^{4}}{1+x^{2}}=x^{6}-4x^{5}+5x^{4}-4x^{2}+4-\frac4{1+x^{2}}.$$
By [[thm-principal-inverse-tangent-calculus]],
$\int_0^1dt/(1+t^2)=\arctan1$. Also $\arctan1=\pi/4$: the
principal inverse tangent of [[def-principal-inverse-tangent]] inverts
$\tan$ on $(-\pi/2,\pi/2)$; the cofunction identity of
[[thm-cofunction-supplementary-and-reflection-identities]] at $x=\pi/4$
gives $\sin(\pi/4)=\cos(\pi/4)$, hence $\tan(\pi/4)=1$ by
[[def-tangent-cotangent-secant-cosecant]]. Termwise integration of the
polynomial using [[lem-derivative-of-a-power]] and
[[cor-primitives-of-a-continuous-function]] now gives
$$\int_0^1\frac{x^{4}(1-x)^{4}}{1+x^{2}}\,dx=\frac{22}{7}-4\arctan1=\frac{22}{7}-\pi.$$
The integrand is nonnegative on $[0,1]$, and its integral on
$[1/4,3/4]$ is at least
$\frac12\cdot\frac{16}{25}(\frac3{16})^4>0$ by
[[thm-monotonicity-of-the-integral]], so the full integral is positive and
$\pi<22/7$. Also, for $x>0$, write $\ln x:=\log x$ as in [[def-natural-logarithm]]. Then
$\ln(4/3)=\int_1^{4/3}dt/t\ge\frac34\cdot\frac13=\frac14$ by
[[thm-logarithm-derivative-and-integral]] and integral monotonicity. For
$u>0$, the fundamental theorem and exponential derivative give
$1-e^{-u}=\int_0^u e^{-s}\,ds<u$: on $[0,u/2]$ the integrand is at most
$1$, and on $[u/2,u]$ it is at most $e^{-u/2}<1$ by strict increase of the
exponential ([[cor-primitives-of-a-continuous-function]],
[[thm-derivative-of-exponential]],
[[thm-exponential-is-strictly-increasing]],
[[thm-monotonicity-of-the-integral]]). Finally, $e^{-1/2}>1/3$ follows
from $e^{1/2}<e<3$ and $e^{-x}=1/e^x$
([[cor-two-less-than-e-less-than-three]],
[[thm-exponential-is-strictly-increasing]],
[[cor-exponential-reciprocal-and-positivity]]).

## Verification

**Proof technique:** direct; specialize the theorem's data, evaluate the constants, check the two explicit hypotheses, and state the conclusion.

1.1 Specialization: with $m=k=\gamma=1$ and $\varepsilon=10^{-4}$ the quantities of [F1] become $\omega_{0}=1$, $P=2\pi$, $\bar F(\zeta)=-\zeta/2$ and $\bar\zeta(t)=e^{-\varepsilon t/2}=e^{-t/(2\cdot10^{4})}$; the field is the one displayed in clause 1. [F1, F2, algebra]

1.2 Constants: substituting $\lvert\zeta_{0}\rvert=1$, $R=1/2$, $\gamma/m=1$ gives $M=\sqrt2\cdot\frac32=\frac{3\sqrt2}{2}$ and $L=\sqrt2$, hence $B=2MP=6\sqrt2\,\pi$ and $B_{1}=2LP=4\sqrt2\,\pi$. Then $LB=\sqrt2\cdot6\sqrt2\,\pi=12\pi$ and $B_{1}M=4\sqrt2\,\pi\cdot\frac{3\sqrt2}{2}=12\pi$, so $$K=e^{\sqrt2/2}\Bigl[6\sqrt2\,\pi+\tfrac12\bigl(12\pi+12\pi\bigr)\Bigr] =2\pi\bigl(3\sqrt2+6\bigr)e^{\sqrt2/2},$$ and by [F4] $K<198<200$: $\sqrt2<3/2$ and $e^{\sqrt2/2}<e<3$ give $K<2\pi\cdot(3\cdot\frac32+6)\cdot3=63\pi<63\cdot22/7=198$. This is clause 2. [F1, F4, given, algebra]

2.1 Hypotheses: $\varepsilon K<198/10^{4}<1/50<1/4=\rho$ by step 1.2, so the smallness condition holds; at the full horizon $A/\varepsilon=5000$ the trapping quantity is $\lvert\zeta_{0}\rvert(1-e^{-\gamma A/(2m)})=1-e^{-1/4}<1/4=R-\rho$ by [F4]. The sufficient logarithmic condition also holds, since $\gamma A/(2m)=1/4\le\ln(4/3)$ by [F4]. Hence the averaged solution stays in the required ball. This is clause 3. [F1, F4, step 1.2, given, algebra]

3.1 Conclusion: applying [F1] with the verified hypotheses and the horizon $A/\varepsilon=5000$ gives $\lVert\zeta(t)-\bar\zeta(t)\rVert_{2}\le\varepsilon K<1/50$ for $0\le t\le5000$, hence the energy bound $\lvert E(t)-e^{-t/10^{4}}\rvert\le\varepsilon K(2+\varepsilon K)<\frac{101}{2500}<\frac1{24}$ J; the datum corresponds to $x(0)=\sqrt2$ m, $x'(0)=0$, $E_{0}=1$ J, and the horizon contains more than $795$ periods of the undamped frequency, because $5000>1590\pi$ and [F4] gives $1590\pi<1590\cdot\frac{22}{7}=\frac{34980}{7}<5000$; at $t=5000$ the averaged energy is $e^{-1/2}>1/3$ by [F4], so the bound is below one eighth of it. This is clauses 4 and 5. [F1, F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 Clauses 1-5 are verified by exact computation from the formulas of the averaging theorem, with the rational and elementary estimates above in place of decimal arithmetic; no measured quantity, apparatus or empirical claim is present. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Decimal orientation values.** On the stated instance, $K\approx1.30522\times10^{2}$, $\varepsilon K\approx1.30522\times10^{-2}$ and the energy bound is approximately $2.63\times10^{-2}$ J; the averaged energy at $t=5000$ is approximately $0.60653$ J. These decimals are evaluations of the exact expressions of the proof and play no role in it.

- **Reading the constant.** The dominating factor in $K$ is $e^{LA}=e^{\sqrt2/2}$, below $3$, because the horizon parameter $A=1/2$ is small: the estimate is useful for horizons of order one in the slow time $A$, and $K$ grows like $Ae^{LA}$ with $A$. Taking $A$ larger lengthens the interval $[0,A/\varepsilon]$ but increases both $K$ and the required smallness margin.

- **The finite check is arithmetic, not empirical.** Every number above is computed from the model formulas; nothing in the example depends on an experiment, and the estimate is a conditional bound for the declared model.
