---
id: ex-rpm-clock-reunion
kind: example
title: "Ideal-clock readings for a flat reunion path"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
deps: [post-rpm-test-clock-and-background, thm-rpm-proper-time-parametrization, def-gr-timelike-worldline-and-proper-time]
dependency_roles:
  post-rpm-test-clock-and-background: physical-assumption
  thm-rpm-proper-time-parametrization: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
physical_scope: "Conditional ideal-clock calculation for two specified piecewise-inertial flat worldlines that reunite; it is a model prediction, not an experimental report."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 proper time"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.2 proper time"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
---

## Example

In Minkowski coordinates $x^0=ct$, let $T>0$ and $0<v<c$. A lab clock follows $x_L(t)=(ct,0)$ for $0\le t\le2T$. A traveler follows $x_R(t)=(ct,vt)$ on $[0,T]$ and $x_R(t)=(ct,v(2T-t))$ on $[T,2T]$. The traveler reverses direction at $t=T$ and reunites with the lab at $t=2T$.

## Facts & Assumptions

**Given:** The paths above, $T>0$, $0<v<c$, and the ideal-clock adoption of [[post-rpm-test-clock-and-background]].

[F1] On a future timelike path, the adopted ideal-clock reading is $d\tau=c^{-1}\sqrt{-g(T,T)}\,ds$ ([[post-rpm-test-clock-and-background]]).

[F2] For a piecewise-$C^1$ future timelike worldline, proper-time increments are defined as the sum of the integrals over its pieces ([[def-gr-timelike-worldline-and-proper-time]]).

## Verification

1.1 For the lab, $dx^0/dt=c$ and $d\mathbf x/dt=0$, so $-g(dx/dt,dx/dt)=c^2$ and the clock density is $1$. Its elapsed reading is therefore $\Delta\tau_L=2T$. [given, F1, algebra]

2.1 On either traveler leg, $dx^0/dt=c$ and $|d\mathbf x/dt|=v$, so $-g(dx/dt,dx/dt)=c^2-v^2>0$. The density is the constant $\sqrt{1-v^2/c^2}$ on both legs. Additivity across the single corner follows from the piecewise definition [F2], giving $\Delta\tau_R=2T\sqrt{1-v^2/c^2}<2T=\Delta\tau_L$. This is a deduction from the ideal-clock model and specified paths, not a measured result. [given, F1, F2, algebra] ∎