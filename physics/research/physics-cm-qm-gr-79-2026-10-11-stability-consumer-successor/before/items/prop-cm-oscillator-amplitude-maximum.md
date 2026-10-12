---
id: prop-cm-oscillator-amplitude-maximum
kind: proposition
title: "The amplitude of the sinusoidally forced damped oscillator: location and value of its maximum"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [thm-cm-forced-oscillator-sinusoidal-response, cor-mean-value-theorem, thm-chain-rule, thm-algebra-of-derivatives, lem-derivative-of-a-power, lem-of-square-monotone, lem-of-inverse-positive, def-interval]
dependency_roles:
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.18)-(5.22) and Fig. 5.1: the forced amplitude and the resonance peak, printed pages 4-5 of Chapter 5 (PDF pages 90-91)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3: 'the steady state forced motion (whose amplitude exhibits resonant behavior at omega_D = 1)', printed page 148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$, $k>0$, $c>0$ and $f_0\ne0$. For $\Omega\ge0$ let

$$A(\Omega):=\frac{|f_0|}{\sqrt{(k-m\Omega^2)^2+c^2\Omega^2}}$$

be the amplitude about zero of the steady response of [[thm-cm-forced-oscillator-sinusoidal-response]] clause 1, and put

$$u_*:=\frac{k}{m}-\frac{c^2}{2m^2},\qquad \Omega_*:=\sqrt{u_*}\ \ \text{when }u_*>0 .$$

Then:

1. If $u_*>0$ (equivalently $c^2<2mk$), $A$ is strictly increasing on $[0,\Omega_*]$, strictly decreasing on $[\Omega_*,\infty)$, and its maximum on $[0,\infty)$ is attained at $\Omega_*$ and at no other point, with
$$A(\Omega_*)=\frac{2m|f_0|}{c\sqrt{4mk-c^2}} .$$
2. If $u_*\le0$ then $A$ is strictly decreasing on $[0,\infty)$ and its maximum on $[0,\infty)$ is attained at $\Omega=0$ and at no other point.

## Facts & Assumptions

**Given:** The parameters $m>0$, $k>0$, $c>0$, $f_0\ne0$, the amplitude function $A$ of the statement and the number $u_*$.

[F1] For every $\Omega\ge0$ the denominator $(k-m\Omega^2)^2+c^2\Omega^2$ is strictly positive, and $A(\Omega)=|f_0|/\sqrt{q(\Omega^2)}$ with $q(u):=(k-mu)^2+c^2u$; this is the amplitude computed in [[thm-cm-forced-oscillator-sinusoidal-response]] clause 1. [given]

[F2] Derivatives: for a differentiable $F$ with $F'>0$ on an interval, $F$ is strictly increasing there, and with $F'<0$ strictly decreasing, by the mean value theorem ([[cor-mean-value-theorem]]); polynomials are differentiated by the algebra of derivatives and the power rule, and composites by the chain rule. [thm-algebra-of-derivatives, lem-derivative-of-a-power, thm-chain-rule, def-interval]

[F3] For $0<a<b$ one has $0<b^{-1}<a^{-1}$ and $0<\sqrt a<\sqrt b$, and $x\mapsto\sqrt x$ is strictly increasing on $[0,\infty)$ ([[lem-of-inverse-positive]], [[lem-of-square-monotone]]). [def-interval]

## Proof

**Proof technique:** cases on the sign of the minimiser; compute the quadratic exactly, locate its vertex, and convert the monotonicity through the strictly decreasing maps $x\mapsto1/x$ and $x\mapsto\sqrt x$.

1.1 Write $q(u)=(k-mu)^2+c^2u=m^2u^2+(c^2-2mk)u+k^2$ and $u_*=\frac{k}{m}-\frac{c^2}{2m^2}$. [assume-case 1, assume-case 2] Expanding $m^2(u-u_*)^2$ and using $-2m^2u_*=c^2-2mk$ gives $$q(u)=m^2(u-u_*)^2+\bigl(k^2-m^2u_*^2\bigr),\qquad q'(u)=2m^2(u-u_*),$$ and the constant is $\bigl(k^2-m^2u_*^2\bigr)=(k-mu_*)(k+mu_*)=\frac{c^2}{2m}\cdot\frac{4mk-c^2}{2m}=\frac{c^2(4mk-c^2)}{4m^2}$, because $k-mu_*=\frac{c^2}{2m}$ and $k+mu_*=\frac{4mk-c^2}{2m}$; in particular $q$ is strictly convex with unique global minimiser $u_*$ and $q(u_*)=\frac{c^2(4mk-c^2)}{4m^2}>0$. Also $u_*>0$ if and only if $c^2<2mk$. [given, algebra]

2.1 Monotonicity of $\Omega\mapsto q(\Omega^2)$: by [F2], its derivative is $2\Omega\,q'(\Omega^2)=4m^2\Omega(\Omega^2-u_*)$. Hence if $u_*>0$ this derivative is negative on $(0,\Omega_*)$ and positive on $(\Omega_*,\infty)$, so $q(\Omega^2)$ is strictly decreasing on $[0,\Omega_*]$ and strictly increasing on $[\Omega_*,\infty)$ (strictness on the closed intervals follows from [F2] on every subinterval and continuity); if $u_*\le0$ the derivative is positive on $(0,\infty)$, so $q(\Omega^2)$ is strictly increasing on $[0,\infty)$. [step 1.1, F2]

3.1 Conclusion. [cases-exhaustive: $u_*>0$; $u_*\le0$] If $u_*>0$, then on $[0,\Omega_*]$ the value $q(\Omega^2)$ strictly decreases to $q(\Omega_*^2)=q(u_*)$ and on $[\Omega_*,\infty)$ it strictly increases from $q(u_*)$; since $x\mapsto1/x$ is strictly decreasing on $(0,\infty)$ and $x\mapsto\sqrt x$ strictly increasing on $[0,\infty)$ by [F3], $A=|f_0|/\sqrt{q(\Omega^2)}$ is strictly increasing on $[0,\Omega_*]$ and strictly decreasing on $[\Omega_*,\infty)$, so its maximum is attained exactly at $\Omega_*$, with $A(\Omega_*)=|f_0|/\sqrt{q(u_*)}=\frac{2m|f_0|}{c\sqrt{4mk-c^2}}$. If $u_*\le0$, then $q(\Omega^2)$ is strictly increasing on $[0,\infty)$, so $A$ is strictly decreasing there and its maximum is attained exactly at $\Omega=0$. [step 2.1, F1, F3, algebra] ∎

## Remarks

- **The undamped case.** For $c=0$ the same computation gives $q(u)=(k-mu)^2$, whose zero is $u=k/m$, i.e. $\Omega=\omega_0=\sqrt{k/m}$; there the denominator of the steady-response formula vanishes and $A$ (the modulus of the response function) is unbounded above in every neighbourhood of $\omega_0$ meeting $[0,\infty)\setminus\{\omega_0\}$. Hence for $c=0$ the amplitude has no maximum on $[0,\infty)$; it is strictly increasing on $[0,\omega_0)$, which is the increasing branch that persists in the $c>0$ case above. This matches the resonant case of [[thm-cm-forced-oscillator-sinusoidal-response]] clause 2, where the response itself grows linearly in $t$.
