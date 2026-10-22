---
id: thm-csm-frontier-curie-weiss-bifurcation
kind: theorem
title: Curie–Weiss magnetization bifurcation at the mean-field critical point
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-mean-field-ensemble
  - thm-csm-frontier-mean-field-supporting-lines
  - lem-it-finite-relative-entropy-continuity-on-simplex
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - cor-mean-value-theorem
  - thm-intermediate-value
dependency_roles:
  def-csm-frontier-mean-field-ensemble: mathematical-premise
  thm-csm-frontier-mean-field-supporting-lines: mathematical-premise
  lem-it-finite-relative-entropy-continuity-on-simplex: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; existence of the positive root follows from the intermediate value theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: "Sections V.D–V.E, printed pp. 48–54: canonical variational equilibria and phase-transition context."
    - title: Julien Poisat, Introduction to Large Deviations, complete author-hosted lecture notes
      url: https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf
      locator: "Exercise 19 and Solution 19, printed pp. 10–11 and 20: Curie–Weiss energy, variational formula and derivative prompts."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

This is a dimensionless mathematical model: $J$, $\beta$, $h$, and $\Phi_\beta$ are dimensionless, so $\beta J$ is dimensionless. The labels “coupling” and “inverse-temperature parameter” are conventional names here and do not assign physical units.

Let $\mathcal A=\{-1,+1\}$ with uniform reference law $p(\pm1)=1/2$. For $q\in\Delta(\mathcal A)$ define its magnetization $m(q):=q(+1)-q(-1)\in[-1,1]$ and the mean-field energy density $h(q):=-Jm(q)^2/2$, where $J>0$. For inverse-temperature parameter $\beta\geq0$, the canonical macrostate variational objective from the finite-alphabet model is
$$\Phi_\beta(m):=\frac{1+m}{2}\ln(1+m)+\frac{1-m}{2}\ln(1-m)-\frac{\beta Jm^2}{2},\qquad -1\leq m\leq1,$$
where $0\ln0:=0$. This objective has the unique global minimizer $m=0$ when $\beta J\leq1$. When $\beta J>1$, its global minimizers are exactly $m=\pm m_\beta$, where $m_\beta\in(0,1)$ is the unique positive solution of
$$m=\tanh(\beta Jm),\qquad \tanh x:=\frac{\exp(2x)-1}{\exp(2x)+1}.$$

## Statement references

[[def-csm-frontier-mean-field-ensemble]]

[[thm-csm-frontier-mean-field-supporting-lines]]

[[lem-it-finite-relative-entropy-continuity-on-simplex]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[thm-logarithm-derivative-and-integral]]

[[thm-chain-rule]]

[[cor-mean-value-theorem]]

[[thm-intermediate-value]]

## Facts & Assumptions

**Given:** The spin alphabet, uniform reference law, coupling $J>0$, and parameter $\beta\geq0$ in the Statement.

[F1] [[def-csm-frontier-mean-field-ensemble]]: for a full-support finite reference law, a continuous $h$, and $\beta$, the canonical variational objective at $q$ is $D(q\|p)+\beta h(q)$; $D(q\|p)$ is the finite relative-entropy sum with zero-mass terms omitted.

[F2] [[thm-csm-frontier-mean-field-supporting-lines]]: canonical equilibrium macrostates are exactly the global minimizers of $D(q\|p)+\beta h(q)$.

[F3] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\ln$ is the inverse of $\exp$ on positive reals, is continuous and strictly increasing, is onto $\mathbb R$, and satisfies $\ln1=0$.

[F4] [[thm-logarithm-derivative-and-integral]]: $(\ln x)'=1/x$ for $x>0$.

[F5] [[thm-chain-rule]]: differentiable real functions compose with derivative $(f\circ g)'(c)=f'(g(c))g'(c)$ under the stated domain and limit-point hypotheses.

[F6] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable on its interior has an interior derivative equal to its endpoint secant slope.

[F7] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F8] [[lem-it-finite-relative-entropy-continuity-on-simplex]]: for a finite alphabet and full-support reference law, $q\mapsto D(q\|p)$ is finite and continuous on the entire simplex, including its boundary; its proof establishes $\lim_{t\downarrow0}t\ln t=0$.

## Proof
1.1 Write $q(+1)=(1+m)/2$ and $q(-1)=(1-m)/2$. Substituting into [F1] with $p(+1)=p(-1)=1/2$ gives
$$D(q\|p)=\frac{1+m}{2}\ln(1+m)+\frac{1-m}{2}\ln(1-m),$$
with the zero-mass endpoint term omitted. Since $q$ depends continuously on $m\in[-1,1]$ and [F8] makes $D(q\|p)$ continuous on the whole simplex, adding $\beta h(q)=-\beta Jm^2/2$ shows that $\Phi_\beta$ is continuous on $[-1,1]$; [F8] supplies the boundary limit $t\ln t\to0$ behind the convention $0\ln0=0$. The formula is even in $m$. [F1, F8, given, algebra]

1.2 For $|m|<1$ define $a(m):=\operatorname{atanh}(m):=\tfrac12\ln\frac{1+m}{1-m}$. By [F3]–[F5] and direct differentiation, $$a'(m)=\frac1{1-m^2},\qquad \Phi_\beta'(m)=a(m)-\beta Jm.$$ For $0<m<1$ put $g(m):=a(m)/m$ and define $r:[0,1)\to\mathbb R$ by $r(m):=m/(1-m^2)-a(m)$. Then $g'(m)=r(m)/m^2$, $r(0)=0$, and $r'(m)=2m^2/(1-m^2)^2>0$ for $0<m<1$. The mean value theorem [F6] applies to $r$ on $[0,m]$ because $r$ is continuous there and differentiable on $(0,m)$; it gives $r(m)>0$, hence $g'(m)>0$. [F3, F4, F5, F6, algebra]

2.1 The same theorem [F6] applied to $a$ on $[0,m]$ gives $g(m)=a'(c_m)$ for some $c_m\in(0,m)$; as $m\downarrow0$, $c_m\downarrow0$ and $a'(c_m)\to1$, so $\lim_{m\downarrow0}g(m)=1$. As $m\uparrow1$, $(1+m)/(1-m)\to+\infty$, and the increasing onto logarithm [F3] gives $a(m)\to+\infty$, hence $g(m)\to+\infty$. Thus $g$ is continuous, strictly increasing from limiting value $1$ to $+\infty$ on $(0,1)$. [F3, F6, step 1.2, algebra]

3.1 If $\beta J\leq1$, then for $0<m<1$, $\Phi_\beta'(m)=m(g(m)-\beta J)>0$ by step 2.1. The mean value theorem [F6] on each subinterval of $[0,1]$ makes $\Phi_\beta$ strictly increasing there; continuity includes the endpoint $m=1$. Evenness then shows $\Phi_\beta(m)>\Phi_\beta(0)$ for every $m\neq0$, so $0$ is the unique global minimizer. [F6, step 2.1, algebra, cases]

3.2 If $\beta J>1$, the limits in step 2.1 give $a,b$ with $0<a<b<1$, $g(a)<\beta J<g(b)$. Continuity of $g$ on $[a,b]$ and the intermediate value theorem [F7] give an $m_\beta\in(a,b)$ with $g(m_\beta)=\beta J$; strict increase of $g$ makes it unique on $(0,1)$. The derivative formula in step 1.2 is negative for $0<m<m_\beta$ and positive for $m_\beta<m<1$. By [F6], $\Phi_\beta$ strictly decreases on $[0,m_\beta]$ and strictly increases on $[m_\beta,1]$, including the endpoint by continuity. Evenness proves that the only global minimizers on $[-1,1]$ are $\pm m_\beta$; in particular the stationary point $m=0$ is not a minimizer. [F6, F7, step 1.2, step 2.1, algebra]

4.1 The equation $g(m_\beta)=\beta J$ is $\operatorname{atanh}(m_\beta)=\beta Jm_\beta$. If $r=(1+m_\beta)/(1-m_\beta)$, then $\exp(2\operatorname{atanh}(m_\beta))=\exp(\ln r)=r$ by [F3], so the stated formula for $\tanh$ gives $\tanh(\operatorname{atanh}(m_\beta))=(r-1)/(r+1)=m_\beta$. Hence $m_\beta=\tanh(\beta Jm_\beta)$. Conversely, any $m\in(0,1)$ solving this fixed-point equation yields $\exp(2\beta Jm)=(1+m)/(1-m)$ by rearrangement of the stated $\tanh$ formula; applying $\ln$ and [F3] gives $g(m)=\beta J$. Strict increase of $g$ therefore proves uniqueness of the positive fixed point. By [F2], the global minimizers just classified are exactly the canonical equilibrium magnetizations. [F2, F3, step 2.1, step 3.1, step 3.2, algebra] ∎

