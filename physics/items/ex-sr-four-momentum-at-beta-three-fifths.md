---
id: ex-sr-four-momentum-at-beta-three-fifths
kind: example
title: "Four-momentum and kinetic energy at speed three-fifths c"
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-four-momentum-in-inertial-frame
  - thm-sr-proper-time-and-observer-decomposition
  - def-inertial-frame-and-inertial-chart
  - def-sr-four-velocity-and-four-acceleration
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-rational-power
  - lem-rational-power-laws
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 15
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.4 p. 96 (p = m gamma v and its numerical checks)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equation (1.101) (p^mu = (gamma m, v gamma m, 0, 0))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, $m>0$, and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame
([[def-inertial-frame-and-inertial-chart]]) in which a massive particle has
four-velocity $U=\gamma_w(c,w)$
([[def-sr-four-velocity-and-four-acceleration]],
[[thm-sr-proper-time-and-observer-decomposition]]\,(e)) with
$w=(3c/5,0,0)$, so that $\gamma_w=5/4$. Then its four-momentum is $P=mU$ with
components $(5mc/4,\,3mc/4,\,0,\,0)$. Relative to the stationary observer
$n=e_0$: $E_n(P)=5mc^2/4$, $q_n(P)$ has coordinates $(3mc/4,0,0)$, the
kinetic energy is $T_n(P)=mc^2/4$, and the mass shell
$E_n(P)^2-c^2|q_n(P)|^2=m^2c^4$ reads
$25m^2c^4/16-9m^2c^4/16=m^2c^4$. The exact kinetic energy
$mc^2/4=0.25\,mc^2$ exceeds the Newtonian expression
$\tfrac12m|w|^2=9mc^2/50=0.18\,mc^2$; the comparison is a numerical
specialisation, not a limiting claim and not a measurement.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$; an inertial frame in which $w=(3c/5,0,0)$ and $\gamma_w=(1-|w|^2/c^2)^{-1/2}$.

[F1] ([[thm-sr-proper-time-and-observer-decomposition]], clause (e)): in the chart the four-velocity is $U=\gamma_w(c,w)$ with $\gamma_w=(1-|w|^2/c^2)^{-1/2}$, and the frame components are read in $(e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]).

[F2] ([[def-spatial-euclidean-structure-of-an-inertial-frame]], Definition): the spatial part of a frame vector lies in $S=e_0^\perp$ with $|w|^2=\sum_i(w^i)^2$ for $w=\sum_iw^ie_i$, and $w=(3c/5,0,0)$ means $w^1=3c/5$, $w^2=w^3=0$.

[F3] ([[lem-rational-power-laws]] and [[def-rational-power]]): for positive reals the rational-power laws hold, so $(1-r)^{-1/2}$ for $0\le r<1$ is the positive number whose square is $(1-r)^{-1}$; in particular $(16/25)^{-1/2}=5/4$ since $(4/5)^2=16/25$ and $(4/5)^{-1}=5/4$.

[F4] ([[lem-sr-four-momentum-in-inertial-frame]], clause (b)): $E_n(P)=m\gamma_wc^2$ and $q_n(P)=\sum_im\gamma_ww^ie_i$ for $P=mU$.

[F5] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): $T_n(P)=E_n(P)-mc^2$ for $P=mU$ with $m>0$ and $\eta(U,U)=-c^2$.

[F6] ([[lem-sr-energy-momentum-observer-identities]], Statement (a)(ii)): for future timelike $P$ the mass-shell identity $E_n(P)^2=m(P)^2c^4+c^2|q_n(P)|^2$ holds, and $m(P)=m$ for $P=mU$.

## Verification

1.1 The Lorentz factor: by [F2], $|w|^2=(3c/5)^2=9c^2/25$, so $|w|^2/c^2=9/25$ and $1-|w|^2/c^2=16/25$; hence $\gamma_w=(16/25)^{-1/2}=5/4$ by [F1] and [F3]. [F1, F2, F3]

1.2 The four-momentum: [F1] gives $U=\gamma_w(c,w)=(5c/4,\,3c/4,\,0,\,0)$ in the frame components, so $P=mU$ has components $(5mc/4,\,3mc/4,\,0,\,0)$. [F1, F2]

2.1 The observer quantities: by [F4], $E_n(P)=m\gamma_wc^2=5mc^2/4$ and $q_n(P)=(3mc/4)e_1$, with spatial coordinates $(3mc/4,0,0)$; by [F5], $T_n(P)=E_n(P)-mc^2=5mc^2/4-mc^2=mc^2/4$. [F4, F5, step 1.1]

3.1 The mass shell: by [step 2.1], $E_n(P)^2-c^2|q_n(P)|^2=25m^2c^4/16-c^2(9m^2c^2/16)=25m^2c^4/16-9m^2c^4/16=16m^2c^4/16=m^2c^4$, in agreement with [F6] and $m(P)=m$. [F6, step 1.2, step 2.1]

3.2 The Newtonian comparison: $\tfrac12m|w|^2=\tfrac12m(9c^2/25)=9mc^2/50$, while [step 2.1] gives $T_n(P)=mc^2/4$; since $1/4=25/100$ exceeds $9/50=18/100$, the exact kinetic energy exceeds the Newtonian expression at this speed, the comparison being a numerical specialisation of the two formulas and not a limit claim. [F2, F3, step 1.1, step 2.1]

4.1 The components of $P$ are $(5mc/4,3mc/4,0,0)$, $E_n(P)=5mc^2/4$, $q_n(P)=(3mc/4)e_1$, and $T_n(P)=mc^2/4$. The mass shell is $E_n(P)^2-c^2|q_n(P)|^2=m^2c^4$, and $T_n(P)>9mc^2/50$; no measurement or limiting statement is asserted. [step 1.2, step 2.1, step 3.1, step 3.2] ∎
