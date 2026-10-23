---
id: lem-fd-helmholtz-chart
kind: lemma
title: "Local Helmholtz chart and partial-Legendre derivative identities"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 1
proof_strategy: direct
deps:
  - def-fd-simple-fluid-state
  - cor-mean-value-theorem
  - thm-intermediate-value
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-fd-simple-fluid-state: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 5 §5.2, printed pp. 150–151"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $U\subset(0,\infty)\times\mathbb R$ be open and let the state relation $e:U\to\mathbb R$ have continuous total derivatives through order two. Fix $(v_0,s_0)\in U$ with $T_0=e_s(v_0,s_0)>0$ and $e_{ss}(v_0,s_0)>0$. Then there are open intervals $V\subset(0,\infty)$ containing $v_0$ and $J\subset(0,\infty)$ containing $T_0$, and a unique continuously differentiable function $s:V\times J\to\mathbb R$ with values in a fixed neighborhood of $s_0$ such that
$$e_s(v,s(v,T))=T\qquad((v,T)\in V\times J).$$
Define the local Helmholtz function $a(v,T):=e(v,s(v,T))-T\,s(v,T)$. With every derivative of $e$ evaluated at $(v,s(v,T))$, its derivatives satisfy
$$a_T=-s,\qquad a_v=e_v=-p,\qquad s_v=-\frac{e_{sv}}{e_{ss}},\qquad s_T=\frac1{e_{ss}},\qquad a_{TT}=-\frac1{e_{ss}},\qquad a_{vv}=e_{vv}-\frac{e_{vs}e_{sv}}{e_{ss}}.$$
This is a local chart only; no global inversion or state-domain convexity is asserted.

## Statement references

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 5 §5.2, printed pp. 150–151](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The open state domain, $C^2$ state relation, and point $(v_0,s_0)$ with $T_0>0$ and $e_{ss}(v_0,s_0)>0$.

[F1] [[def-fd-simple-fluid-state]]: on an open $U\subset(0,\infty)\times\mathbb R$, $e\in C^2(U)$ and $T=e_s$, $p=-e_v$; each partial derivative holds the other coordinate fixed.

[F2] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable on its interior has an interior point where its derivative equals the interval's difference quotient.

[F3] [[thm-intermediate-value]]: a continuous real function on a closed interval attains every value between its endpoint values. Its canonical bisection proof uses no choice principle.

[F4] [[thm-chain-rule-for-total-derivatives]]: for differentiable maps on open Euclidean domains, the derivative of a composition is the composition of derivatives.

[A1] All neighborhoods and partial derivatives in the proof are taken in the displayed open Euclidean state domain; no global inverse is assumed.

## Proof


1.1 Put $f(v,s)=e_s(v,s)$ and $a_0=e_{ss}(v_0,s_0)>0$. Since $U$ is open and $e_{ss},e_{sv}$ are continuous, choose $\delta,\rho>0$ so the closed rectangle $R=[v_0-\delta,v_0+\delta]\times[s_0-\rho,s_0+\rho]$ is contained in $U$, $f_s=e_{ss}\ge a_0/2=:a>0$ on $R$, and $|f_v|=|e_{sv}|\le B$ on $R$ for some finite $B$. By [F2] on the two vertical segments, $f(v_0,s_0-\rho)\le T_0-a\rho<T_0<T_0+a\rho\le f(v_0,s_0+\rho)$. Continuity of the endpoint values in $v$ therefore gives smaller open intervals $V$ about $v_0$ and $J$ about $T_0$, with $J\subset(0,\infty)$, such that $f(v,s_0-\rho)<T<f(v,s_0+\rho)$ for all $(v,T)\in V\times J$. [A1, F1, F2, construct]

2.1 For fixed $v\in V$, [F2] and $f_s\ge a$ imply that $s\mapsto f(v,s)$ is strictly increasing on $[s_0-\rho,s_0+\rho]$. By [F3], for every $T\in J$ there is $s(v,T)\in(s_0-\rho,s_0+\rho)$ with $f(v,s(v,T))=T$; strict increase gives uniqueness in that interval. [step 1.1, F2, F3, construct]

3.1 Take $(v,T),(v',T')\in V\times J$ and write $s=s(v,T)$, $s'=s(v',T')$. Applying [F2] in the $s$ variable and using $f_s\ge a$ gives $a|s'-s|\le|f(v,s')-f(v,s)|=|f(v,s')-T|$. Since $f(v',s')=T'$, [F2] in the $v$ variable and $|f_v|\le B$ give $|f(v,s')-T|\le B|v-v'|+|T-T'|$. Hence $s(v,T)$ is locally Lipschitz and, in particular, continuous. [step 1.1, step 2.1, F2, algebra]

4.1 At a fixed $(v,T)$, let $h,k$ be increments in $v,T$ and set $\Delta s=s(v+h,T+k)-s(v,T)$. The bound of step 3.1 gives $\Delta s=O(|h|+|k|)$. By the definition of the total derivative of the $C^1$ function $f$ at $(v,s(v,T))$, $k=f_vh+f_s\Delta s+o(|h|+|\Delta s|)$, so $\Delta s=-\frac{f_v}{f_s}h+\frac1{f_s}k+o(|h|+|k|)$. Thus $s_v=-e_{sv}/e_{ss}$ and $s_T=1/e_{ss}$. These derivatives are continuous because $e$ has continuous total derivatives through order two, $s$ is continuous, and $e_{ss}\ge a>0$; therefore the unique local branch is continuously differentiable. [step 1.1, step 3.1, F1, algebra]

5.1 By [F4] and the identity $e_s(v,s(v,T))=T$, differentiation of $a=e(v,s(v,T))-T s(v,T)$ gives $a_v=e_v+(e_s-T)s_v=e_v=-p$ and $a_T=e_s s_T-s-Ts_T=-s$. [F1, step 4.1, F4, algebra]

6.1 Differentiating the first-derivative identities of step 5.1 and using step 4.1 yields $a_{TT}=-s_T=-1/e_{ss}$ and $a_{vv}=\partial_v(e_v(v,s(v,T)))=e_{vv}+e_{vs}s_v=e_{vv}-e_{vs}e_{sv}/e_{ss}$. These derivatives are continuous by the stated regularity, so $a$ is $C^2$. All derivatives are evaluated at the chart point $(v,s(v,T))$. [step 4.1, step 5.1, F1, F4, algebra] ∎
