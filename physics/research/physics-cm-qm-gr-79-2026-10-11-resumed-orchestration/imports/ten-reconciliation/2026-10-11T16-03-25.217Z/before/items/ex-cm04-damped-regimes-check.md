---
id: ex-cm04-damped-regimes-check
kind: example
title: "The three damping regimes on explicit data: underdamped, critical and overdamped motions at $m=k=1$ and $c=1,2,5$, with their decay bounds"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [post-cm04-linear-damping-model, def-cm04-one-dimensional-models-and-equilibria, pthm-cm04-damped-motion, pthm-cm04-damped-decay-and-stability, thm-cm-homogeneous-oscillator-solution-classification, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-of-square-roots, thm-exponential-is-strictly-increasing, def-real-exponential-function-and-e, def-cm01-units, def-limits-at-infinity, def-interval]
dependency_roles:
  post-cm04-linear-damping-model: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  pthm-cm04-damped-motion: physical-result
  pthm-cm04-damped-decay-and-stability: physical-result
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
physical_scope: "A worked check of the damped oscillator at the declared data m=1 kg, k=1 N/m, datum (0, 1 m, 0 m/s) and the three drag coefficients c=1, 2, 5 kg/s: the three explicit motions of the classification, their initial data, the common initial energy 1/2 J, the strict energy dissipation identity E'=-c x-dot^2, the explicit decay bounds and the convergence to rest. The item asserts no measured value and no claim that a real damper realizes the model."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.6)-(5.10), chapter pages 2-3 (PDF pages 88-89): the damped equation, its three cases and the decaying free solution"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.16), printed page 148 (PDF page 151): the underdamped, critically damped and overdamped solution cases"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 2, printed page 5 (PDF page 11): the damped oscillator loses energy until it comes to rest"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Declare the damped oscillator model of [[post-cm04-linear-damping-model]] with
$$m=1\ \mathrm{kg},\qquad k=1\ \mathrm{N/m},$$
and the common datum at $t_{0}=0$
$$x_{0}=1\ \mathrm{m},\qquad v_{0}=0\ \mathrm{m/s},$$
for each of the three drag coefficients
$$c=1,\quad c=2,\quad c=5\qquad(\mathrm{kg/s}).$$
The claims checked below are that the three displayed curves are the unique
maximal motions with this datum in the three cases, that all three have
initial energy $\tfrac12$ J and satisfy $E'(t)=-c\,x'(t)^{2}$, and that the
decay bounds of [[pthm-cm04-damped-decay-and-stability]] hold with the
displayed constants:

$$\begin{aligned} c=1:\quad & x(t)=e^{-t/2}\Bigl(\cos\frac{\sqrt3\,t}{2}+\frac{1}{\sqrt3}\sin\frac{\sqrt3\,t}{2}\Bigr),\\ c=2:\quad & x(t)=(1+t)e^{-t},\\ c=5:\quad & x(t)=\frac{5+\sqrt{21}}{2\sqrt{21}}\,e^{\frac{-5+\sqrt{21}}{2}t} +\frac{\sqrt{21}-5}{2\sqrt{21}}\,e^{\frac{-5-\sqrt{21}}{2}t}. \end{aligned}$$

## Verification

**Proof technique:** cases; verify the initial data and the equations by
direct computation from the classification theorem, and evaluate the energy
identity and the decay bounds on the explicit data.

**Given:** The damped model with $m=k=1$, datum $(0,1,0)$, the three values
of $c$, and the three displayed curves.

[L1] General theory ([[pthm-cm04-damped-motion]] clause 1,
[[thm-cm-homogeneous-oscillator-solution-classification]],
[[pthm-cm04-damped-decay-and-stability]]): with $m>0,k>0,c\ge0$ the motions
are the three families according to the sign of $\Delta=c^{2}-4mk$, with
coefficients $A=(v_{0}-\lambda_{-}x_{0})/(\lambda_{+}-\lambda_{-})$,
$B=(\lambda_{+}x_{0}-v_{0})/(\lambda_{+}-\lambda_{-})$ for $\Delta>0$,
$A=x_{0}$, $B=v_{0}-\lambda x_{0}$ for $\Delta=0$, and $A=x_{0}$,
$B=(v_{0}+\gamma x_{0})/\omega$ for $\Delta<0$; the motions extend to
$\mathbb R$; the energy satisfies $E'=-c\,x'^{2}$; and for $c>0$ the
decay bounds of the three cases hold with $r_{0}=\sqrt{x_{0}^{2}+v_{0}^{2}}$.

[L2] Derivatives and values: $(e^{\mu t})'=\mu e^{\mu t}$
([[thm-derivative-of-exponential]]), $(\sin)'=\cos$, $(\cos)'=-\sin$
([[thm-sine-and-cosine-derivatives]]), sums and products are differentiated
by the algebra of derivatives ([[thm-algebra-of-derivatives]]) and
composites by the chain rule ([[thm-chain-rule]]);
$\sin^{2}+\cos^{2}=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]);
$\sqrt3>0$, $\sqrt{21}>5/2>0$ ([[thm-of-square-roots]]);
$e^{s}\le1$ for $s\le0$ ([[thm-exponential-is-strictly-increasing]],
[[def-real-exponential-function-and-e]]); and
$e^{s}\to0$ as $s\to-\infty$ ([[def-limits-at-infinity]] combined with the
exponential limits).

[L3] Dimensions ([[def-cm01-units]]): $[m]=\mu$, $[k]=\mu\tau^{-2}$,
$[c]=\mu\tau^{-1}$, so $c^{2}$ and $4mk$ both have dimension
$\mu^{2}\tau^{-2}$ and the discriminant is dimensionally consistent; the
roots $\lambda_{\pm}$ have dimension $\tau^{-1}$, so the exponents are
dimensionless and the coefficients $A,B$ carry length.

1.1 Discriminants and coefficients. With $m=k=1$ and $x_{0}=1$, $v_{0}=0$ the three discriminants are $\Delta=1-4=-3$, $\Delta=4-4=0$ and $\Delta=25-4=21$. In the first case $\gamma=\tfrac12$, $\omega=\sqrt{4-1}/2=\sqrt3/2$, $A=1$ and $B=(0+\tfrac12)/(\sqrt3/2)=1/\sqrt3$. In the second $\lambda=-2/(2\cdot1)=-1$, $A=1$, $B=0-(-1)\cdot1=1$. In the third $\lambda_{\pm}=(-5\pm\sqrt{21})/2$, $\lambda_{+}-\lambda_{-}=\sqrt{21}$, $A=(0-\lambda_{-})/\sqrt{21}=(5+\sqrt{21})/(2\sqrt{21})$ and $B=(\lambda_{+}-0)/\sqrt{21}=(\sqrt{21}-5)/(2\sqrt{21})$. By [L1] the three displayed curves are the unique maximal motions with the datum in the three cases, and all are defined on $\mathbb R$. [assume-case 1, assume-case 2, assume-case 3, given, L1, L3, algebra]

2.1 Initial data. In the first case $x(0)=\cos0+(1/\sqrt3)\sin0=1$ and, by [L2], $$x'(t)=e^{-t/2}\Bigl[-\tfrac12\Bigl(\cos\tfrac{\sqrt3t}{2}+\tfrac1{\sqrt3}\sin\tfrac{\sqrt3t}{2}\Bigr) -\tfrac{\sqrt3}{2}\sin\tfrac{\sqrt3t}{2}+\tfrac12\cos\tfrac{\sqrt3t}{2}\Bigr] =-\tfrac{2}{\sqrt3}\,e^{-t/2}\sin\tfrac{\sqrt3\,t}{2},$$ so $x'(0)=0$. In the second case $x(0)=1$ and $x'(t)=e^{-t}-(1+t)e^{-t}=-t\,e^{-t}$ by [L2], so $x'(0)=0$. In the third case $x(0)=A+B=\bigl(5+\sqrt{21}+\sqrt{21}-5\bigr)/(2\sqrt{21})=1$ and $x'(0)=\lambda_{+}A+\lambda_{-}B=\bigl[-(5-\sqrt{21})(5+\sqrt{21})-(5+\sqrt{21})(\sqrt{21}-5)\bigr]/(4\sqrt{21})=0$ because $(5-\sqrt{21})(5+\sqrt{21})=25-21=4$ and the negative of $(\sqrt{21})^{2}-25=21-25=-4$ is $4$, adding to $0$. [step 1.1, L1, L2, algebra]

3.1 Energy. With $m=k=1$ the energy is $E=\tfrac12v^{2}+\tfrac12x^{2}$, and $E(0)=\tfrac12\cdot0+\tfrac12\cdot1=\tfrac12$ J in all three cases. By [L1] the identity $E'(t)=-c\,x'(t)^{2}$ holds along each motion, so the energy strictly decreases in every case at every time with $x'(t)\neq0$: in the first case at every time except $t=2\pi n/\sqrt3$, $n\ge0$ (where $\sin(\sqrt3t/2)=0$), in the second at every $t>0$, and in the third at every $t>0$; at $t=0$ all three have $x'(0)=0$. In particular no motion here is a constant-energy motion other than the rest motion, consistent with clause 2 of [[pthm-cm04-damped-motion]]. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Decay bounds and limits. Here $r_{0}=1$. By clause 1 of [[pthm-cm04-damped-decay-and-stability]] the following bounds hold for $t\ge0$: in the first case $\lvert x(t)\rvert\le(1+1/\sqrt3)e^{-t/2}$, in the second $\lvert x(t)\rvert\le(1+t)e^{-t}$ and in the third $\lvert x(t)\rvert\le\frac{5}{\sqrt{21}}e^{(-5+\sqrt{21})t/2}$, because $\lvert A\rvert+\lvert B\rvert=(5+\sqrt{21}+5-\sqrt{21})/(2\sqrt{21})=5/\sqrt{21}$ as $\sqrt{21}<5$. Evaluated at $t=4$: the bounds are $(1+1/\sqrt3)e^{-2}\approx0.2135$, $5e^{-4}\approx0.0916$ and $\frac{5}{\sqrt{21}}e^{-10+2\sqrt{21}} \approx1.0911\cdot0.4339\approx0.4735$, while the explicit curves give $\lvert x(4)\rvert\approx0.1531$, $\lvert x(4)\rvert=5e^{-4}\approx0.0916$ and $\lvert x(4)\rvert\approx0.4537$. By clause 2 of [[pthm-cm04-damped-decay-and-stability]], $x(t)\to0$ and $x'(t)\to0$ in all three cases; by clause 3 the rest point $(0,0)$ is asymptotically stable. [cases-exhaustive, step 1.1, step 2.1, L1, L2, algebra] ∎

## Remarks

- **The three regimes.** The discriminant test $\Delta<0$, $\Delta=0$,
  $\Delta>0$ separates the decaying oscillation
  ($\omega=\sqrt3/2$, quasi-period $4\pi/\sqrt3$ s), the critical case
  ($x=(1+t)e^{-t}$, no oscillation) and the overdamped case (two decaying
  exponentials with rates $(-5\pm\sqrt{21})/2$). The numerical evaluations
  above are decimal approximations of the explicit expressions, quoted to
  display the order of magnitude; the exact inequalities are the displayed
  bounds.

- **Scope.** The data $m=k=1$, $c=1,2,5$ are declared model data of this
  check; no measured value is asserted and no real damper is claimed to obey
  the linear drag law in any regime.

