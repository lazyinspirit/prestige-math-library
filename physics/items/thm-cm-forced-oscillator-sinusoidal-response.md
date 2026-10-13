---
id: thm-cm-forced-oscillator-sinusoidal-response
kind: theorem
title: "Sinusoidal forcing: the steady response, its amplitude and phase, and resonance at $\\Omega=\\sqrt{k/m}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, cor-cm-homogeneous-oscillator-decay, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-conjugate-real-imaginary-part-and-modulus, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-algebra-of-derivatives, thm-chain-rule, def-limits-at-infinity, def-interval, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-addition-formulas]
dependency_roles:
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  cor-cm-homogeneous-oscillator-decay: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.14)-(5.22): the response function, the forced amplitude (5.18), the resonance value (5.19) and the resonance discussion, printed pages 3-5 of Chapter 5 (PDF pages 89-91)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eqs. (7.15)-(7.16): transient plus steady state forced motion with resonant behaviour at drive frequency equal to the natural frequency, printed pages 147-148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Conventions

For a bounded real-valued curve $u:\mathbb R\to\mathbb R$, its **amplitude about zero** means $\sup_{t\in\mathbb R}|u(t)|$.

## Statement

Let $m>0$, $k>0$, $c\ge0$, let $f_0\in\mathbb R$ and $\Omega\ge0$, and consider the forced model $m\,x''+c\,x'+k\,x=f$ with time domain $I=\mathbb R$ and forcing $f:\mathbb R\to\mathbb R$, $f(t)=f_0\cos(\Omega t)$ ([[def-cm-oscillator-model-and-phase-system]]). Put

$$D:=k-m\Omega^2+i\,c\,\Omega\in\mathbb C,\qquad \omega_0:=\sqrt{k/m}.$$

1. **Non-resonant response.** If $D\ne0$, then the function
$$x_p(t):=\operatorname{Re}\!\left(\frac{f_0e^{i\Omega t}}{D}\right)=f_0\,\frac{(k-m\Omega^2)\cos(\Omega t)+c\,\Omega\sin(\Omega t)}{(k-m\Omega^2)^2+c^2\Omega^2}$$
is a solution of the forced model on all of $\mathbb R$. Its amplitude about zero is $|f_0|/\sqrt{(k-m\Omega^2)^2+c^2\Omega^2}$. For $\Omega>0$ and $f_0\ne0$, a **phase-lag angle relative to the drive** means a real $\phi$ such that $x_p(t)=(f_0/|D|)\cos(\Omega t-\phi)$ for every $t$, with the signed factor $f_0$ retained in both drive and response. Such an angle exists: any $\phi\in\mathbb R$ satisfying
$$\cos\phi=\frac{k-m\Omega^2}{|D|},\qquad\sin\phi=\frac{c\Omega}{|D|}$$
has this property. No temporal phase is assigned when $\Omega=0$ or $f_0=0$.

2. **Resonance.** If $c=0$ and $\Omega=\omega_0$, then $D=0$ and
$$x_p(t):=\frac{f_0\,t\sin(\omega_0t)}{2m\omega_0}$$
is a solution of the forced model on all of $\mathbb R$; if $f_0\ne0$ then $x_p$ is unbounded on $[0,\infty)$.

3. **Transient decay.** If $c>0$, then $D\ne0$ for every $\Omega\ge0$, and every solution $x:[0,\infty)\to\mathbb R$ of the forced model satisfies
$$x(t)=x_p(t)+x_h(t)$$
where $x_h$ is a homogeneous solution; consequently $x(t)-x_p(t)\to0$ as $t\to+\infty$ ([[def-limits-at-infinity]]) and $x$ is bounded on $[0,\infty)$.

## Facts & Assumptions

**Given:** The parameters $m>0$, $k>0$, $c\ge0$, the number $f_0\in\mathbb R$ and frequency $\Omega\ge0$, the all-$\mathbb R$ forcing $f(t)=f_0\cos(\Omega t)$ and $D=k-m\Omega^2+ic\Omega$, and $\omega_0=\sqrt{k/m}$.

[F1] The model and its phase system are those of [[def-cm-oscillator-model-and-phase-system]]; the differential expression $x\mapsto m x''+cx'+kx$ is linear over $\mathbb R$, so sums of solutions of the forced and homogeneous equations are solutions of the corresponding forced equation. [given]

[F2] Complex exponential: $\frac{d}{dt}\exp(\mu t)=\mu\exp(\mu t)$ for complex $\mu$ and real $t$, and $\exp(-\gamma t+i\Omega t)=e^{-\gamma t}(\cos(\Omega t)+i\sin(\Omega t))$, so $\operatorname{Re}\exp(i\Omega t)=\cos(\Omega t)$; complex conjugation and modulus are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]], with $w\overline w=|w|^2$ and $1/w=\overline w/|w|^2$ for $w\ne0$. [thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-conjugate-real-imaginary-part-and-modulus]

[F3] Real derivatives: $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$; sums and products are differentiated by the algebra of derivatives and the chain rule; $\sin(\pi/2)=1$ and sine has period $2\pi$. [thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period]

[F4] For $k>0$, every homogeneous solution is one of the three families of [[thm-cm-homogeneous-oscillator-solution-classification]], and if $c>0$ every homogeneous solution satisfies $x_h(t)\to0$ and is bounded on $[0,\infty)$ by [[cor-cm-homogeneous-oscillator-decay]]. [given]

[F5] Sine and cosine have range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]); $\cos(-u)=\cos u$, $\sin(-u)=-\sin u$ and $\cos^2u+\sin^2u=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]). The addition formulas ([[thm-sine-and-cosine-addition-formulas]]) and parity give $\cos(u-v)=\cos u\cos v+\sin u\sin v$ for all real $u,v$.

## Proof

**Proof technique:** cases; verify the complex steady-state solution and its real part, verify the resonant solution directly, and obtain the transient statement from the homogeneous decay.

1.1 Non-resonant case. [assume-case 1] Suppose $D\ne0$ and put $z(t):=f_0\exp(i\Omega t)/D$. By [F2], $z'=i\Omega z$ and $z''=-\Omega^2z$, hence $$mz''+cz'+kz=(-m\Omega^2+ic\Omega+k)z=Dz=f_0\exp(i\Omega t).$$ The differential expression has real coefficients and the real and imaginary parts of a complex-valued $C^2$ function may be differentiated separately, so $x_p=\operatorname{Re}z$ satisfies $m\,x_p''+c\,x_p'+k\,x_p=\operatorname{Re}(f_0\exp(i\Omega t))=f_0\cos(\Omega t)$ on $\mathbb R$. The displayed real form follows from [F2] and $1/D=\overline D/|D|^2$, $\overline D=k-m\Omega^2-ic\Omega$, $|D|^2=(k-m\Omega^2)^2+c^2\Omega^2$. For the amplitude, put $a=k-m\Omega^2$, $b=c\Omega$ and $r=|D|=\sqrt{a^2+b^2}>0$. By [F5], $(a\cos u+b\sin u)^2+(a\sin u-b\cos u)^2=r^2$, so $|x_p(t)|\le|f_0|/r$. If $\Omega=0$, then $D=k$ and $x_p\equiv f_0/k$, attaining that bound. If $\Omega>0$, the cosine range in [F5] supplies a real $u$ with $\cos u=a/r$; the Pythagorean identity gives $|\sin u|=b/r$ since $b\ge0$, and replacing $u$ by $-u$ if necessary makes $\sin u=b/r$ while preserving its cosine. At $t=u/\Omega$ the numerator $a\cos u+b\sin u$ equals $r$, attaining $|x_p(t)|=|f_0|/r$. This also covers $f_0=0$, proving the stated amplitude. When $\Omega>0$ and $f_0\ne0$, take $\phi=u$ from that construction. For this angle, and for any other angle with the stated sine and cosine, the difference formula in [F5] gives $\cos(\Omega t-\phi)=(a\cos(\Omega t)+b\sin(\Omega t))/r$; therefore $x_p(t)=(f_0/r)\cos(\Omega t-\phi)$ for every $t$, proving the phase relation with the declared signed convention. [F2, F5, given, algebra]

1.2 Resonance. [assume-case 2] Suppose $c=0$ and $\Omega=\omega_0$, and put $x_p(t)=f_0t\sin(\omega_0t)/(2m\omega_0)$, so that $f(t)=f_0\cos(\omega_0t)$ and $k=m\omega_0^2$. By [F3], $$x_p'(t)=\frac{f_0\bigl(\sin(\omega_0t)+\omega_0t\cos(\omega_0t)\bigr)}{2m\omega_0},\qquad x_p''(t)=\frac{f_0\bigl(2\omega_0\cos(\omega_0t)-\omega_0^2t\sin(\omega_0t)\bigr)}{2m\omega_0},$$ so $m\,x_p''+k\,x_p=f_0\cos(\omega_0t)-\tfrac12f_0\omega_0t\sin(\omega_0t)+\tfrac12f_0\omega_0t\sin(\omega_0t)=f_0\cos(\omega_0t)$: it is a solution on $\mathbb R$. For each $j\in\mathbb N$, put $t_j=(\pi/2+2\pi j)/\omega_0$. These times are nonnegative and tend to $+\infty$ because $\omega_0>0$ and $\pi>0$. Integer periodicity and the quarter-turn value in [F3] give $\sin(\omega_0t_j)=1$, so $|x_p(t_j)|=|f_0|t_j/(2m\omega_0)\to+\infty$ whenever $f_0\ne0$; hence $x_p$ is unbounded on $[0,\infty)$. [F3, given, algebra]

2.1 Transient decay. [assume-case 3, cases-exhaustive: $D\ne0$; $c=0$, $\Omega=\omega_0$; $c>0$] Suppose $c>0$; then $D=0$ would force $c\Omega=0$, hence $\Omega=0$ and $D=k\ne0$, a contradiction, so $D\ne0$ for every $\Omega$ and step 1.1 supplies the solution $x_p$. Let $x:[0,\infty)\to\mathbb R$ be any solution of the forced model. Then $x_h:=x-x_p$ satisfies the homogeneous model by linearity [F1]; by [F4] it is one of the three families of the classification theorem, and since $c>0$, [[cor-cm-homogeneous-oscillator-decay]] gives $x_h(t)\to0$ as $t\to+\infty$ and boundedness of $x_h$ on $[0,\infty)$; $x_p$ is bounded by [F5] because $|\cos|\le1$, $|\sin|\le1$ and $D\ne0$ in the real form of step 1.1. Hence $x(t)-x_p(t)=x_h(t)\to0$ and $x=x_p+x_h$ is bounded. [step 1.1, step 1.2, F1, F4, F5] ∎
