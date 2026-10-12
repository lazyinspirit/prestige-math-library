---
id: ex-cm-resonant-forcing-and-amplitude-peak
kind: example
title: "Resonant forcing at $\\Omega=\\omega_0$ and the two regimes of the amplitude maximum"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-forced-oscillator-sinusoidal-response, prop-cm-oscillator-amplitude-maximum, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-cm-oscillator-model-and-phase-system]
dependency_roles:
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  prop-cm-oscillator-amplitude-maximum: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.18)-(5.22): the resonance peak, the value (5.19) at $\\omega=\\omega_0$ and the FWHM (5.20), printed pages 4-5 of Chapter 5 (PDF pages 90-91)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.16): steady state forced motion with resonant behaviour at the drive frequency, printed page 148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Consider the forced model $m\,x''+c\,x'+k\,x=f_0\cos(\Omega t)$ with the values and conclusions below ([[def-cm-oscillator-model-and-phase-system]], [[thm-cm-forced-oscillator-sinusoidal-response]], [[prop-cm-oscillator-amplitude-maximum]]).

- (i) Resonance: $m=k=f_0=1$, $c=0$, $\Omega=\omega_0=1$. Then $x_p(t)=\tfrac12t\sin t$ is a solution of $x''+x=\cos t$, it satisfies $x_p(0)=0$, $x_p'(0)=0$, and $|x_p|$ is unbounded on $[0,\infty)$.
- (ii) Amplitude peak above zero frequency: $m=k=f_0=1$, $c=1$. Then $u_*=1-\tfrac12=\tfrac12>0$, the maximum of $A(\Omega)=1/\sqrt{(1-\Omega^2)^2+\Omega^2}$ is attained at $\Omega_*=1/\sqrt2$, and $A(\Omega_*)=2/\sqrt3$, while $A(0)=A(1)=1$.
- (iii) Amplitude peak at zero frequency: $m=k=f_0=1$, $c=2$. Then $u_*=1-2=-1\le0$, and the maximum of $A(\Omega)=1/\sqrt{(1-\Omega^2)^2+4\Omega^2}$ on $[0,\infty)$ is attained at $\Omega=0$ with value $1$, while $A(1)=1/2$.

## Facts & Assumptions

**Given:** The five parameters in each line and the steady-response formulae of [[thm-cm-forced-oscillator-sinusoidal-response]] clause 1 and [[prop-cm-oscillator-amplitude-maximum]].

[L1] In the resonant case $c=0$, $\Omega=\omega_0=\sqrt{k/m}$ the function $x_p(t)=f_0t\sin(\omega_0t)/(2m\omega_0)$ is a solution of the forced model on $\mathbb R$ and is unbounded on $[0,\infty)$ when $f_0\ne0$ ([[thm-cm-forced-oscillator-sinusoidal-response]] clause 2). [given]

[L2] If $c>0$ the amplitude of the steady response is $A(\Omega)=|f_0|/\sqrt{(k-m\Omega^2)^2+c^2\Omega^2}$; its maximum is attained at $\Omega_*=\sqrt{u_*}$ when $u_*=k/m-c^2/(2m^2)>0$, with value $2m|f_0|/(c\sqrt{4mk-c^2})$, and at $\Omega=0$ when $u_*\le0$ ([[prop-cm-oscillator-amplitude-maximum]]; the connection to the steady response is clause 1 of [[thm-cm-forced-oscillator-sinusoidal-response]]). [given]

[L3] $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$; sums and products are differentiated by the algebra of derivatives and the chain rule. [thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule]

## Verification

**Proof technique:** direct; substitute the resonant candidate, and evaluate the amplitude formula in the two regimes of the preceding proposition.

1.1 Line (i): with $m=\omega_0=f_0=1$ the candidate is $x_p(t)=\tfrac12t\sin t$; by [L3], $x_p'(t)=\tfrac12(\sin t+t\cos t)$ and $x_p''(t)=\tfrac12(2\cos t-t\sin t)=\cos t-\tfrac12t\sin t$, so $x_p''+x_p=\cos t$, as required, and $x_p(0)=0=x_p'(0)$. At $t_k=\pi/2+2\pi k$ one has $\sin t_k=1$ and $|x_p(t_k)|=t_k/2\to\infty$, so $x_p$ is unbounded on $[0,\infty)$, in agreement with [L1]. [given, L1, L3, algebra]

1.2 Line (ii): here $u_*=1-1/2=1/2>0$ and $4mk-c^2=3$, so [L2] locates the maximum at $\Omega_*=1/\sqrt2$ with value $2/\sqrt3$; directly, $(1-\Omega_*^2)^2+\Omega_*^2=(1/2)^2+1/2=3/4$, so $A(\Omega_*)=2/\sqrt3$, while $A(0)=1$ and $A(1)=1/\sqrt{0+1}=1$, both below $2/\sqrt3$. [given, L2, algebra]

2.1 Line (iii): here $u_*=1-2=-1\le0$, so [L2] locates the maximum at $0$ with value $A(0)=1/\sqrt{1}=1$; directly, $A(1)=1/\sqrt{(0)^2+4}=1/2<1$, and the same formula gives $A(\Omega)\le1$ for all $\Omega\ge0$ because $(1-\Omega^2)^2+4\Omega^2=1+2\Omega^2+\Omega^4\ge1$. [given, L2, algebra] ∎
