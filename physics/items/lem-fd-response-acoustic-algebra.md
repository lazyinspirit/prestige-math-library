---
id: lem-fd-response-acoustic-algebra
kind: lemma
title: "Response derivatives and linear acoustic sign"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 2
proof_strategy: direct
deps:
  - def-fd-simple-fluid-state
  - lem-fd-helmholtz-chart
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-fd-simple-fluid-state: mathematical-premise
  lem-fd-helmholtz-chart: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.1 and Problem 12.4, printed pp. 348–350"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $U\subset(0,\infty)\times\mathbb R$ be open and let $e:U\to\mathbb R$ have continuous total derivatives through order two. Fix $(v_b,s_b)\in U$ with $T_b=e_s(v_b,s_b)>0$ and $e_{ss}(v_b,s_b)>0$, set $\rho_b=1/v_b$ and $p=-e_v$, and use the local chart $s=s(v,T)$ from the unique branch satisfying $e_s(v,s(v,T))=T$. Define
$$c_v:=\left.\frac{\partial}{\partial T}e(v,s(v,T))\right|_{v=v_b,T=T_b}, \qquad c_s^2:=v_b^2 e_{vv}(v_b,s_b).$$
Because $U$ is open, choose an open interval $J_\rho\subset(0,\infty)$ containing $\rho_b$ such that $(1/\rho,s_b)\in U$ for every $\rho\in J_\rho$, and define $P:J_\rho\to\mathbb R$ by $P(\rho):=p(1/\rho,s_b)=-e_v(1/\rho,s_b)$. Then $P\in C^1(J_\rho)$ and the chain rule gives $P'(\rho_b)=v_b^2e_{vv}(v_b,s_b)=c_s^2$. This is the local isentropic pressure-response coefficient; its sign is not assumed.

Let $I\subset\mathbb R$ be a nonempty open time interval. On $I\times\mathbb R^3$, let $\rho:I\times\mathbb R^3\to J_\rho$ and $u:I\times\mathbb R^3\to\mathbb R^3$ have continuous partial derivatives through order two. Use the Euclidean dot product $x\cdot y:=\sum_{i=1}^3x_i y_i$ and norm $|x|:=\sqrt{x\cdot x}$ on $\mathbb R^3$. Use $\nabla h=(\partial_{x_i}h)_{i=1}^3$, $\operatorname{div}u=\sum_{i=1}^3\partial_{x_i}u_i$, and $(u\cdot\nabla)u_i=\sum_{j=1}^3u_j\partial_{x_j}u_i$. Consider the mathematical barotropic system
$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)+\nabla P(\rho)=0.$$
Here $\Delta r:=\sum_{i=1}^3\partial_{x_i x_i}r$. For $r:I\times\mathbb R^3\to\mathbb R$ and $w:I\times\mathbb R^3\to\mathbb R^3$ with continuous partial derivatives through order two, the pointwise first variation about $(\rho_b,0)$ is defined by differentiating at $\varepsilon=0$ after substituting $\rho=\rho_b+\varepsilon r$ and $u=\varepsilon w$, with $\varepsilon$ sufficiently close to zero locally at each point so the perturbed density lies in $J_\rho$. It is
$$r_t+\rho_b\operatorname{div}w=0,\qquad \rho_b w_t+c_s^2\nabla r=0, \qquad r_{tt}=c_s^2\Delta r.$$
If $c_s^2>0$, then with $c_s=\sqrt{c_s^2}$, for every nonzero $k\in\mathbb R^3$ and every $A\in\mathbb R$ the following are plane-wave solutions:
$$r=A\cos(k\cdot x-\omega t),\qquad w=\frac{\omega A}{\rho_b|k|^2}k\cos(k\cdot x-\omega t),\qquad \omega=c_s|k|.$$
If $c_s^2<0$, then for every nonzero $k\in\mathbb R^3$ and every $A\in\mathbb R$, set $a=\sqrt{-c_s^2}|k|>0$. The fields
$$r=Ae^{at}\cos(k\cdot x),\qquad w=-\frac{aA}{\rho_b|k|^2}k e^{at}\sin(k\cdot x)$$
solve the same linearized system and have exponential time factor $e^{at}$; for $A\ne0$, their amplitudes grow exponentially. These are exact statements about the linearized mathematical system; they provide no finite-amplitude error or lifespan estimate and make no empirical claim about a material.

## Statement references

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.1, Problem 12.4, printed pp. 348–350](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The state relation and local chart in the Statement, the definitions $\rho_b=1/v_b$ and $P(\rho)=p(1/\rho,s_b)$, and the displayed barotropic system.

[F1] [[def-fd-simple-fluid-state]]: $e$ is defined on an open $(v,s)$ domain, $T=e_s$, $p=-e_v$, and $\rho=1/v$; signs of $e_{ss}$ and $e_{vv}$ are separate hypotheses.

[F2] [[lem-fd-helmholtz-chart]]: at a state $(v_b,s_b)$ with $T_b=e_s(v_b,s_b)>0$ and $e_{ss}(v_b,s_b)>0$, the supplier provides a unique local $C^1$ chart $s(v,T)$ satisfying $e_s(v,s(v,T))=T$ and $s_T=1/e_{ss}$ at the chart point.

[F3] [[thm-chain-rule-for-total-derivatives]]: a differentiable composition has derivative given by the composition of the derivatives.

[A1] The fields $\rho,u,r,w$ have the domains and componentwise regularity stated in the Statement. The function $P:J_\rho\to\mathbb R$, $P(\rho)=p(1/\rho,s_b)$, is $C^1$ because $e\in C^2(U)$ and $\rho\mapsto1/\rho$ is smooth on $J_\rho$.

[A2] In the physical SI interpretation, $\rho$ has units $\mathrm{kg\,m^{-3}}$, $u$ has units $\mathrm{m\,s^{-1}}$, $P$ has units $\mathrm{Pa}$, $k$ has units $\mathrm{m^{-1}}$, $\omega$ has units $\mathrm{s^{-1}}$, $A$ has units $\mathrm{kg\,m^{-3}}$, $c_v$ has units $\mathrm{J\,kg^{-1}\,K^{-1}}$, and $c_s^2$ has units $\mathrm{m^2\,s^{-2}}$. These units do not assert empirical validity.

## Proof


1.1 By [F2], at fixed $v=v_b$ the chain rule gives $c_v=e_s(v_b,s_b)s_T(v_b,T_b)=T_b/e_{ss}(v_b,s_b)$. For fixed $s=s_b$, the chain rule and $v=1/\rho$ give $P'(\rho_b)=p_v(v_b,s_b)(-1/\rho_b^2)=(-e_{vv})(-v_b^2)=v_b^2e_{vv}=c_s^2$. [F1, F2, F3, given, algebra]

2.1 Put $\rho_\varepsilon=\rho_b+\varepsilon r$ and $u_\varepsilon=\varepsilon w$. Substitution into the continuity equation gives $\varepsilon(r_t+\rho_b\operatorname{div}w)+O(\varepsilon^2)=0$. In the momentum equation, $(u_\varepsilon\cdot\nabla)u_\varepsilon$ is order $\varepsilon^2$, while $\nabla P(\rho_\varepsilon)=\varepsilon P'(\rho_b)\nabla r+o(\varepsilon)$; its first-order term is therefore $\varepsilon(\rho_b w_t+c_s^2\nabla r)$. Equating first-order coefficients gives the displayed linearized system. [A1, step 1.1, given, algebra]

3.1 Differentiate $r_t+\rho_b\operatorname{div}w=0$ in time and take the divergence of $\rho_b w_t+c_s^2\nabla r=0$. Since $\rho_b$ and $c_s^2$ are constants, subtraction yields $r_{tt}=c_s^2\Delta r$. [step 2.1, algebra]

4.1 Suppose $c_s^2>0$, take $k\ne0$, and put $\omega=c_s|k|$. For $r=A\cos(k\cdot x-\omega t)$, $r_t=\omega A\sin(k\cdot x-\omega t)$ and $\nabla r=-Ak\sin(k\cdot x-\omega t)$. The stated $w$ gives $\operatorname{div}w=-\omega A\sin(k\cdot x-\omega t)/\rho_b$ and $w_t=\omega^2Ak\sin(k\cdot x-\omega t)/(\rho_b|k|^2)$; hence both linearized equations hold because $\omega^2=c_s^2|k|^2$. [step 2.1, step 3.1, algebra]

5.1 Suppose $c_s^2<0$, put $a=\sqrt{-c_s^2}|k|$, and use the stated exponential mode. Then $r_t=ar$, $\operatorname{div}w=-ar/\rho_b$, $w_t=-\frac{a^2A}{\rho_b|k|^2}k e^{at}\sin(k\cdot x)$, and $\nabla r=-Ak e^{at}\sin(k\cdot x)$. The continuity equation follows from the first two identities, and the momentum equation follows from $-a^2/|k|^2-c_s^2=0$, which holds by the definition of $a$. Since $a>0$ for $k\ne0$, the time factor is exponentially increasing; when $A\ne0$ the density-mode amplitude is $|A|e^{at}$, and when $A=0$ the mode is zero. [step 2.1, algebra] ∎
