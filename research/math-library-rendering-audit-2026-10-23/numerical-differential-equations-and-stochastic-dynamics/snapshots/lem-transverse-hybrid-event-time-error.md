---
id: lem-transverse-hybrid-event-time-error
kind: lemma
title: "A transverse hybrid event time is stable under dense-output and root error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-hybrid-mode-guard-reset-system
  - def-certified-hybrid-event-enclosure
  - lem-hybrid-guard-derivative-along-mode
  - cor-mean-value-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
---

## Statement

Let $J=[a,b]$ with $a<b$, let $y$ be an exact incoming mode trajectory on $J$, and let $U$ be a dense reconstruction with $\sup_{t\in J}\|y(t)-U(t)\|_2\le\eta$. Let $g(t,x)$ be $L_g$-Lipschitz in $x$ on the certified tube, with declared crossing orientation $\sigma\in\{-1,+1\}$. Suppose $h(t)=g(t,y(t))$ has a root $\tau\in J$ and, throughout $J$, $\sigma h'(t)\ge\nu$ for some $\nu>0$. If a reported time $\widehat\tau\in J$ satisfies $|g(\widehat\tau,U(\widehat\tau))|\le\varepsilon$, then
$$|\widehat\tau-\tau|\le\frac{L_g\eta+\varepsilon}{\nu}\le\frac{C(\eta+\varepsilon)}{\nu},\qquad C:=\max\{L_g,1\}.$$
The same-sign derivative condition makes $\tau$ the unique guard root in $J$. The conclusion concerns a root matched to this transverse bracket; it gives no bound at grazing or across a change of event ordering.

## Facts & Assumptions

**Given:** The incoming mode, a certified dense-output tube on $J$, a guard $g$, a true guard root $\tau$, uniform transversality on $J$, and the residual tolerance at $\widehat\tau$.

[F1] [[def-hybrid-mode-guard-reset-system]]: the incoming trajectory solves a smooth mode ODE, and an event guard has a declared orientation $\sigma$.

[F2] [[def-certified-hybrid-event-enclosure]]: an admissible provider supplies the valid uniform bound $\|y(t)-U(t)\|_2\le\eta$ on the matched bracket and the guard state-Lipschitz constant $L_g$ on a tube containing both curves; these data need not come from a rational residual-tube checker.

[F3] [[lem-hybrid-guard-derivative-along-mode]]: $h'(t)=\partial_tg(t,y(t))+D_yg(t,y(t))f_m(t,y(t))$.

[F4] [[cor-mean-value-theorem]]: a continuous scalar function on a closed interval and differentiable in its interior has an interior point whose derivative is its endpoint difference divided by interval length.

## Proof

1.1 By [F2] and the state-Lipschitz bound, $|h(\widehat\tau)-g(\widehat\tau,U(\widehat\tau))|\le L_g\eta$. The residual hypothesis therefore gives $|h(\widehat\tau)|\le L_g\eta+\varepsilon$, since $h(\tau)=0$. [given, F1, F2, algebra]

2.1 If $\widehat\tau=\tau$ the desired bound is immediate. Otherwise apply [F4] to $h$ on the interval with endpoints $\tau$ and $\widehat\tau$. Since $\sigma h'\ge\nu$ throughout, the derivative has one fixed sign and magnitude at least $\nu$, so $|h(\widehat\tau)-h(\tau)|\ge\nu|\widehat\tau-\tau|$. Using $h(\tau)=0$ and step 1.1 proves $|\widehat\tau-\tau|\le(L_g\eta+\varepsilon)/\nu$. [given, F1, F3, F4, step 1.1, algebra]

3.1 Since $L_g\eta+\varepsilon\le\max\{L_g,1\}(\eta+\varepsilon)$, the second inequality follows with the stated $C$. For any $s<t$ in $J$, [F4] gives $h(t)-h(s)=h'(c)(t-s)$ for some interior $c$; the fixed sign of $h'$ makes this increment nonzero, so $h$ is strictly monotone and its root in $J$ is unique. [given, F4, step 2.1, algebra] ∎
