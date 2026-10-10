---
id: ex-sr-null-covector-frame-data-worked
kind: example
title: 'Worked frame data of a future null wave covector and its boost'
status: draft
origin: pipeline
domain: mathematics
deps: [lem-sr-null-covector-frame-data,
       lem-sr-null-covector-boost-transformation,
       lem-sr-metric-duality-on-lorentz-vector-space,
       def-sr-affine-phase-and-wave-covector,
       def-lorentz-boost,
       lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart]
dependency_roles:
  lem-sr-null-covector-frame-data: mathematical-premise
  lem-sr-null-covector-boost-transformation: mathematical-premise
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
dependency_level: 11
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137 and Section 6.5.1 Doppler shift p. 137; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Example

This worked example computes the frame data of a future null wave covector and its passive boost. In an inertial frame $(o;e_0,e_1,e_2,e_3)$ let $\varpi>0$ and $s=(0,3/5,4/5)$, and let $k$ be the covector with frame components $(k_0,k_1,k_2,k_3)=(-\varpi,0,3\varpi/5,4\varpi/5)$. Then:

**(a)** $|s|=1$ and $k$ is a future null wave covector; its raised vector is $k^\sharp=\varpi\bigl(e_0+(3/5)e_2+(4/5)e_3\bigr)$ and $k(k^\sharp)=0$.

**(b)** Let $x'$ be the inertial chart with $x'=B(\beta)x+b$ and $\beta=(3/5)e_1$. The frame-$x'$ data of the same covector is $(\varpi',s')$ with $\varpi'/\varpi=\gamma(1-\beta\cdot s)=(5/4)(1-0)=5/4$ and $s'=(-3/5,12/25,16/25)$.

**(c)** Applying the transformation with $\beta$ replaced by $-\beta$ to $(\varpi',s')$ returns $(\varpi,s)$: $\varpi''/\varpi'=(5/4)(16/25)=4/5$, so $\varpi''=\varpi$, and $s''=(0,3/5,4/5)$.

The verification is exact rational algebra; no physical interpretation of the data is used, and no choice principle is used.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$, a real $\varpi>0$, $s=(0,3/5,4/5)$, and the covector $k$ with components $(k_0,k_1,k_2,k_3)=(-\varpi,0,3\varpi/5,4\varpi/5)$.

[L1] If a covector has frame components $(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ with $\varpi>0$ and $|s|=1$, then it is a future null wave covector; its raised vector is $k^\sharp=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$ with $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=0$ ([[lem-sr-null-covector-frame-data]], clauses (d) and (e), [[lem-sr-metric-duality-on-lorentz-vector-space]]).

[L2] For inertial charts with $x'=B(\beta)x+b$, $|\beta|<1$, and a future null wave covector with frame-$x$ data $(\varpi,s)$, the frame-$x'$ data satisfies $\varpi'=\gamma(1-\beta\cdot s)\varpi$, $s'_i=\bigl[s_i+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta_i-\gamma\beta_i\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]$ for $\beta\ne0$, and in the axis case $\beta=be_1$: $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$; applying the transformation with $-\beta$ returns the original data ([[lem-sr-null-covector-boost-transformation]], clauses (ii), (iii), (v)).

[L3] $B(\beta)$ is the passive boost of [[def-lorentz-boost]] with $\gamma=(1-|\beta|^2)^{-1/2}$, and $B(\beta)$ is proper orthochronous with $B(-\beta)=B(\beta)^{-1}$ ([[lem-boost-is-proper-orthochronous-with-inverse]]); the frame is an inertial frame with an inertial chart ([[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct.

1.1 Clause (a). Here $\varpi s=(0,3\varpi/5,4\varpi/5)=(k_1,k_2,k_3)$ and $k_0=-\varpi$, so the components of $k$ are exactly $(-\varpi,\varpi s)$ with $\varpi>0$; and $|s|^2=0+(3/5)^2+(4/5)^2=9/25+16/25=1$. By [L1] the covector $k$ is a future null wave covector with $k^\sharp=\varpi\bigl(e_0+(3/5)e_2+(4/5)e_3\bigr)$, and $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=-\varpi^2+\varpi^2(0+9/25+16/25)=0$. [L1, given, algebra]

2.1 Clause (b). With $\beta=(3/5)e_1$ one has $|\beta|=3/5$ and $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$ [L3, algebra], while $\beta\cdot s=(3/5)\cdot 0+0\cdot 3/5+0\cdot 4/5=0$. By [L2] the frame-$x'$ data is $\varpi'=\gamma(1-\beta\cdot s)\varpi=(5/4)(1-0)\varpi=5\varpi/4$, and the axis formulas with $b=3/5$, $s_1=0$, $\gamma=5/4$ give $s'_1=(0-3/5)/(1-0)=-3/5$, $s'_2=(3/5)/((5/4)(1-0))=(3/5)\cdot(4/5)=12/25$ and $s'_3=(4/5)\cdot(4/5)=16/25$. As a check, $|s'|^2=9/25+144/625+256/625=9/25+16/25=1$, in agreement with $|s'|=1$ in [L2]. [step 1.1, L2, L3, algebra]

3.1 Clause (c). Apply [L2] to the chart pair $(x',x)$, whose transition has parameter $-\beta=-(3/5)e_1$, and to the data $(\varpi',s')$ of step 2.1. Since $\beta\cdot s'=(3/5)(-3/5)=-9/25$, the factor is $\gamma\bigl(1-(-\beta)\cdot s'\bigr)=(5/4)(1+\beta\cdot s')=(5/4)(1-9/25)=(5/4)(16/25)=4/5$, so $\varpi''=(4/5)\varpi'=(4/5)(5/4)\varpi=\varpi$. The axis formulas with parameter $b=-3/5$ give $s''_1=\bigl(s'_1-(-3/5)\bigr)/\bigl(1-(-3/5)s'_1\bigr)=(-3/5+3/5)/(1-9/25)=0$, $s''_2=s'_2/\bigl[\gamma\bigl(1-(-3/5)s'_1\bigr)\bigr]=(12/25)/\bigl[(5/4)(1-9/25)\bigr]=(12/25)/\bigl[(5/4)(16/25)\bigr]=(12/25)/(4/5)=3/5$ and $s''_3=(16/25)/(4/5)=4/5$. Hence the round trip returns $\varpi''=\varpi$ and $s''=(0,3/5,4/5)$, in agreement with clause (v) of [L2]. This proves (a), (b) and (c); all steps are exact rational arithmetic, no physical interpretation of the data was used, and no choice principle was used. [step 2.1, L2, L3, algebra] ∎
