---
id: ex-tgrmath-bulk-speed-parameters
kind: example
title: Positive relaxation parameters can give superluminal characteristic speed
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-countable-choice
  - lem-tgr-bulk-relaxation-entropy
  - lem-tgr-bulk-linear-causality
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-bulk-relaxation-entropy: mathematical-premise
  lem-tgr-bulk-linear-causality: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Guillaume Bal, Waves in Random Media: Lecture Notes (May 2017)"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf"
      locator: "Full 102-page notes; §1.3.1, PDF pp. 7–8, and §1.3.4, PDF pp. 11–12: Fourier and cone-energy analyses for symmetric systems."
    - title: "Eitan Tadmor, Spectral Methods for Hyperbolic Problems (1998 lecture notes)"
      url: "https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html"
      locator: "Initial Value Problems of Hyperbolic Type, 'Hyperbolic systems with constant coefficients': weighted Fourier-mode energy estimates."
---

## Example

Choose $n_0,T_0,h_0,\tau,c>0$ and $\sigma_{p0}\in\mathbb R$, put $v_0=1/n_0$, and on an open neighborhood $X\subset(0,\infty)\times\mathbb R$ of $(v_0,\sigma_{p0})$ define the $C^2$ local energy per marker

$$e(v,\sigma_p)=\frac{h_0}{n_0}+T_0(\sigma_p-\sigma_{p0})+\frac{n_0h_0}{6}(v-v_0)^2.$$

Choose $X$ small enough that $v>0$ and the local enthalpy density $h:=\epsilon+p$, with $n=1/v$, $\epsilon=ne$, and $p=-e_v$, remains positive. At the reference state, $T=e_{\sigma_p}=T_0>0$, $p_0=-e_v(v_0,\sigma_{p0})=0$, $\epsilon_0=n_0e(v_0,\sigma_{p0})=h_0$, and $e_{vv}(v_0,\sigma_{p0})=n_0h_0/3$. The local Gibbs response in [[lem-tgr-bulk-linear-causality]] therefore realizes $a_s=e_{vv}/(n_0h_0)=1/3$. Now set $\zeta=\tau h_0$. All positivity hypotheses of that bulk linear branch hold, but its exact normal characteristic speed is $v_{\rm bulk}=c\sqrt{1/3+1}=2c/\sqrt3>c$. With SI units, $h_0$ is in Pa and $\tau$ in s, so $\zeta$ is in Pa s. This is a parameterized mathematical model example, not a measurement or an estimate for a material.

## Facts & Assumptions

**Given:** The constructed local state and positive parameters in the Example, with $h_0$ in Pa, $\tau$ in s, $\zeta=\tau h_0$ in $\mathrm{Pa\,s}$, and $c>0$ the reference speed parameter.

[A1] The only choice premise in the supplier chain is countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[A2] At $(v_0,\sigma_{p0})$, $p_0=0$, $\epsilon_0=h_0$, $T_0>0$, and $e_{vv}=n_0h_0/3>0$; by continuity, $X$ can be chosen open with $v>0$ and $h>0$ throughout.

[F1] [[lem-tgr-bulk-linear-causality]]: under $a_s,h_0,\zeta,\tau>0$ and the exact local Gibbs response, the branch speed is $v_{\rm bulk}=c\sqrt{a_s+\zeta/(\tau h_0)}$.

[F2] [[lem-tgr-bulk-relaxation-entropy]]: every actual smooth solution of the corrected law and balances with $\zeta,c,T>0$ satisfies $\nabla_aS^a=\Pi^2/(\zeta cT)\ge0$. This conditional entropy identity supplies no algebraic bound on the linear characteristic speed.

## Verification

1.1 Direct differentiation of $e$ gives $e_v(v_0,\sigma_{p0})=0$ and $e_{vv}(v_0,\sigma_{p0})=n_0h_0/3$. Thus [A2] verifies the local state's positive $n_0,T_0,h_0,e_{vv}$ hypotheses, and [F1] supplies $a_s=e_{vv}/(n_0h_0)=1/3$. The choice $\zeta=\tau h_0$ gives $\zeta/(\tau h_0)=1$, so all remaining strict positivity hypotheses of [F1] hold. [A1, A2, F1, given, algebra]

2.1 Substitution gives $v_{\rm bulk}=c\sqrt{1/3+1}=2c/\sqrt3$. Since $4/3>1$ and $c>0$, $2c/\sqrt3>c$. The separate entropy identity in [F2] is nonnegative whenever its actual-solution hypotheses hold, including $T>0$; that conditional sign statement supplies no bound on this characteristic speed. [F1, F2, step 1.1, given, algebra] ∎
