---
id: ex-cm-oscillator-cases-computed
kind: example
title: "Five worked initial value problems for the homogeneous oscillator across the discriminant, degenerate and repulsive cases"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, def-cm-oscillator-model-and-phase-system, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives]
dependency_roles:
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.2)-(5.9): the free oscillator solution in the undamped, damped and high-damping cases, printed pages 1-3 of Chapter 5 (PDF pages 87-89)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.16): underdamped, critically damped and overdamped classification of the linearised oscillator, printed page 148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

In each line, $m=1$ and the initial datum $(x_0,v_0)$ is prescribed for the homogeneous model with time domain $I=\mathbb R$ and zero forcing, $x''+cx'+kx=0$ ([[def-cm-oscillator-model-and-phase-system]]). The solution is read off from the classification theorem and the degenerate-case proposition, and its initial values are checked explicitly.

- (i) $k=4$, $c=0$, $(x_0,v_0)=(1,0)$: the solution is $x(t)=\cos(2t)$.
- (ii) $k=1$, $c=2$, $(x_0,v_0)=(1,0)$: the solution is $x(t)=(1+t)e^{-t}$.
- (iii) $k=1$, $c=3$, $(x_0,v_0)=(1,0)$: with $\lambda_\pm=(-3\pm\sqrt5)/2$ the solution is $x(t)=\bigl(-\lambda_-e^{\lambda_+t}+\lambda_+e^{\lambda_-t}\bigr)/\sqrt5$.
- (iv) $k=0$, $c=2$, $(x_0,v_0)=(0,1)$: the solution is $x(t)=\tfrac12(1-e^{-2t})$.
- (v) $k=-1$, $c=0$, $(x_0,v_0)=(1,0)$: the solution is $x(t)=\tfrac12(e^{t}+e^{-t})$, which is unbounded on $[0,\infty)$.

## Facts & Assumptions

**Given:** The homogeneous model of [[def-cm-oscillator-model-and-phase-system]] with $m=1$ and the parameters of the five lines.

[L1] For $k>0$ the solutions are classified by the sign of $\Delta=c^2-4mk$ as in [[thm-cm-homogeneous-oscillator-solution-classification]]: distinct real roots in case 1, a double root $\lambda=-c/(2m)$ in case 2, and the family $e^{-\gamma t}(A\cos\omega t+B\sin\omega t)$ with $\gamma=c/(2m)$, $\omega=\sqrt{k/m-\gamma^2}$ in case 3; clause 4 gives the coefficient formulas $A=(v_0-\lambda_-x_0)/(\lambda_+-\lambda_-)$, $B=(\lambda_+x_0-v_0)/(\lambda_+-\lambda_-)$ in case 1; $A=x_0$, $B=v_0-\lambda x_0$ in case 2; $A=x_0$, $B=(v_0+\gamma x_0)/\omega$ in case 3. [given]

[L2] For $k\le0$ the solutions are those of [[prop-cm-oscillator-degenerate-and-repulsive-cases]]: for $k=0$, $c>0$ they are $A+Be^{-ct/m}$ with $A=x_0+v_0m/c$, $B=-v_0m/c$; for $k<0$ they are $Ae^{\lambda_+t}+Be^{\lambda_-t}$ with $\lambda_\pm=(-c\pm\sqrt{c^2-4mk})/(2m)$, $\lambda_-<0<\lambda_+$, and $e^{\lambda_+t}\to+\infty$. [given]

[L3] $(\cos t)'=-\sin t$, $(\sin t)'=\cos t$, and $(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$. [thm-sine-and-cosine-derivatives, thm-derivative-of-exponential]

## Verification

**Proof technique:** direct; compute the discriminant and coefficients in each line and check the initial data.

1.1 Line (i): $\Delta=0-16<0$ and $\gamma=0$, $\omega=\sqrt{4}=2$, so by [L1] case 3 the solution is $A\cos2t+B\sin2t$ with $A=x_0=1$, $B=(v_0+\gamma x_0)/\omega=0$; by [L3] the candidate $\cos(2t)$ has value $1$ and derivative $-2\sin(2t)$ vanishing at $0$, so it is the solution. [given, L1, L3, algebra]

1.2 Line (ii): $\Delta=4-4=0$, so the double root is $\lambda=-1$ and the family is $(A+Bt)e^{-t}$ with $A=x_0=1$, $B=v_0-\lambda x_0=1$; the candidate $(1+t)e^{-t}$ has the value $1$ and derivative $e^{-t}-(1+t)e^{-t}=-te^{-t}$ equal to $0$ at $t=0$, matching $(x_0,v_0)=(1,0)$. [given, L1, L3, algebra]

1.3 Line (iii): $\Delta=5>0$ and $\lambda_\pm=(-3\pm\sqrt5)/2$ with $\lambda_+-\lambda_-=\sqrt5$ and $\lambda_++\lambda_-=-3$; the coefficients of [L1] case 1 are $A=(v_0-\lambda_-x_0)/\sqrt5=-\lambda_-/\sqrt5$ and $B=(\lambda_+x_0-v_0)/\sqrt5=\lambda_+/\sqrt5$, so the solution is $x(t)=Ae^{\lambda_+t}+Be^{\lambda_-t}=(-\lambda_-e^{\lambda_+t}+\lambda_+e^{\lambda_-t})/\sqrt5$. Then $x(0)=(\lambda_+-\lambda_-)/\sqrt5=1$ and $x'(0)=\lambda_+A+\lambda_-B=(-\lambda_+\lambda_-+\lambda_-\lambda_+)/\sqrt5=0$, matching $(x_0,v_0)=(1,0)$. [given, L1, algebra]

1.4 Line (iv): $k=0$, $c=2>0$, and [L2] gives $x(t)=A+Be^{-2t}$ with $A=0+1/2=1/2$, $B=-1/2$, that is $x(t)=\frac12(1-e^{-2t})$; its derivative is $e^{-2t}$ by [L3], so $x(0)=0$ and $x'(0)=1$. [given, L2, L3, algebra]

2.1 Line (v): $k=-1<0$ and $\lambda_\pm=\pm1$ by [L2]; the solution with data $(1,0)$ is $\frac12e^{t}+\frac12e^{-t}$ (the coefficients $A=B=1/2$ solve $A+B=1$, $A-B=0$), and it is unbounded on $[0,\infty)$ because $e^{t}\to+\infty$, in accordance with [L2]. [given, L2, L3, algebra] ∎
