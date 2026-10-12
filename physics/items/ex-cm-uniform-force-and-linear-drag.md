---
id: ex-cm-uniform-force-and-linear-drag
kind: example
title: "Constant forcing: free fall and the approach to terminal velocity under linear drag"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-forced-oscillator-variation-of-constants, prop-cm-oscillator-degenerate-and-repulsive-cases, def-cm-oscillator-model-and-phase-system, thm-derivative-of-exponential, thm-algebra-of-derivatives]
dependency_roles:
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eq. (5.13) and Chapter 2 Section 2.4 (linear drag and terminal velocity in one-dimensional motion), printed pages 3 and 2-4 of the respective chapters"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1: the damped oscillator equation and its damping parameter, printed pages 146-148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $m>0$, $g\in\mathbb R$ and consider the two constant-forcing models ([[def-cm-oscillator-model-and-phase-system]]).

- (i) Uniform force: $x''=g$ with data $x(0)=x_0$, $x'(0)=v_0$. The unique solution is $x(t)=x_0+v_0t+\tfrac12gt^2$.
- (ii) Linear drag: $m=1$, $c=2$, $g=1$, that is $x''+2x'=1$, with data $(x_0,v_0)=(0,0)$. The unique solution on $[0,\infty)$ is $x(t)=\tfrac12t-\tfrac14(1-e^{-2t})$, and its velocity $x'(t)=\tfrac12(1-e^{-2t})$ increases to the limiting value $\tfrac12$.

## Facts & Assumptions

**Given:** The parameters $m,g$ and the data of the two lines; the forced oscillator theorem applies in both since $k=0\ge0$ and the forcing is constant, hence continuous.

[L1] For $m>0$, $c\ge0$, $k\ge0$ and continuous $f$, the unique solution of $x''+cx'+kx=f$ with data $(x_0,v_0)$ at $t_0=0$ is $x=x_h+\int_0^tg(t-s)f(s)ds$, where $x_h$ is the homogeneous solution with the data and $g$ is the homogeneous kernel with $g(0)=0$, $g'(0)=1/m$; for $k=c=0$ one has $g(u)=u/m$, and for $k=0$, $c>0$ one has $g(u)=(1-e^{-cu/m})/c$ ([[thm-cm-forced-oscillator-variation-of-constants]], [[prop-cm-oscillator-degenerate-and-repulsive-cases]]). [given]
 
[L2] For $k=0$ the homogeneous solutions are $x_h(t)=A+Be^{-ct/m}$ when $c>0$ and $x_h(t)=A+Bt$ when $c=0$, with $A=x_0+v_0m/c$, $B=-v_0m/c$ respectively $A=x_0$, $B=v_0$ ([[prop-cm-oscillator-degenerate-and-repulsive-cases]]). [given]

[L3] $(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$, and sums and scalar multiples are differentiated termwise. [thm-derivative-of-exponential, thm-algebra-of-derivatives]

## Verification

**Proof technique:** direct; read the solutions off the convolution formula in the two degenerate cases and differentiate.

1.1 Line (i): here $c=k=0$, so [L1] gives $g(u)=u/m$ and $x_h(t)=x_0+v_0t$ by [L2]; hence $$x(t)=x_0+v_0t+\int_0^t\frac{t-s}{m}\,mg\,ds=x_0+v_0t+g\int_0^t(t-s)\,ds=x_0+v_0t+\tfrac12gt^2,$$ because $\int_0^t(t-s)ds=t^2/2$. [given, L1, L2, algebra]

1.2 Line (ii): here $m=1$, $c=2$, $k=0$ and $f\equiv1$; by [L1], $g(u)=(1-e^{-2u})/2$, and the datum $(0,0)$ gives $x_h=0$ by [L2]. Hence $$x(t)=\int_0^t\frac{1-e^{-2(t-s)}}2\,ds=\frac t2-\frac14\bigl(1-e^{-2t}\bigr).$$ [given, L1, L2, algebra]

2.1 Velocity: by [L3], $x'(t)=\tfrac12-\tfrac14\cdot 2e^{-2t}=\tfrac12(1-e^{-2t})$, so $x'(0)=0$ and $x'(t)\to\tfrac12$ as $t\to+\infty$ because $e^{-2t}\to0$; moreover $x''(t)=e^{-2t}$, so $x''+2x'=e^{-2t}+1-e^{-2t}=1$, confirming both lines satisfy their equations with the prescribed data. [step 1.1, step 1.2, L3, algebra] ∎
