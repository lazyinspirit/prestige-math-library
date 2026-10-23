---
id: cex-fd-negative-response-acoustics
kind: counterexample
title: "Negative acoustic response yields exponential mode growth"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-acoustic-linearization
dependency_roles:
  pthm-fd-acoustic-linearization: physical-result
justified_by: []
aliases: []
physical_scope: >-
  Exact counterexample for the linearized equations of an explicitly adopted
  smooth barotropic state relation with negative fixed-entropy pressure
  response. It is not a finite-amplitude solution or an empirical claim about
  a realized material.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§4.4.4, printed pp. 150–151"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§6.5.2, printed pp. 243–244"
verification:
  precheck: pending
---

## Statement refuted

Let $\mathcal U\subset(0,\infty)\times\mathbb R$ be open and let $e\in C^2(\mathcal U)$, with $T=e_s$ and $p=-e_v$ (each partial derivative holds the other state coordinate fixed). Fix $(v_b,s_b)\in\mathcal U$ with $T_b=e_s(v_b,s_b)>0$ and $e_{ss}(v_b,s_b)>0$, and put $\rho_b=1/v_b$. Let $P\in C^1((0,\infty))$ agree with $-e_v(1/\rho,s_b)$ on an open interval $J_\rho\subset(0,\infty)$ containing $\rho_b$, with $(1/\rho,s_b)\in\mathcal U$ for every $\rho\in J_\rho$, and suppose $P'(\rho_b)<0$. For any nonempty open time interval $I\subseteq\mathbb R$, let $\delta\rho\in C^2(I\times\mathbb R^3,\mathbb R)$ and $w\in C^2(I\times\mathbb R^3,\mathbb R^3)$ solve the first-variation equations about the uniform rest state $(\rho,u)=(\rho_b,0)$,
$$\partial_t\delta\rho+\rho_b\operatorname{div}w=0,\qquad \rho_b\partial_tw+P'(\rho_b)\nabla\delta\rho=0,$$
where $\operatorname{div}w=\sum_{i=1}^3\partial_{x_i}w_i$ and $\nabla\delta\rho=(\partial_{x_i}\delta\rho)_{i=1}^3$. The false assertion is that for every such state and solution, at each fixed $x\in\mathbb R^3$,
$$\sup_{t\in I}\left(|\delta\rho(t,x)|+\sqrt{\sum_{i=1}^3w_i(t,x)^2}\right)<\infty.$$
In SI units, $t$ is in seconds, $x$ in metres, $v_b$ in $\mathrm{m^3\,kg^{-1}}$, $s_b$ in $\mathrm{J\,kg^{-1}\,K^{-1}}$, $e$ in $\mathrm{J\,kg^{-1}}$, $T_b$ in kelvins, $p$ and $P$ in pascals, $\rho_b$ and $\delta\rho$ in $\mathrm{kg\,m^{-3}}$, and $w$ in $\mathrm{m\,s^{-1}}$.

## Statement references

[David Tong, *Fluid Mechanics*, Part III lecture notes, §4.4.4, printed pp. 150–151](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.2, printed pp. 243–244](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** A smooth local state relation with $T_b>0$, $e_{ss}(v_b,s_b)>0$, a positive reference density, and a first-variation system about rest.

[L1] [[pthm-fd-acoustic-linearization]]: for the stated fixed-entropy barotropic restriction of a $C^2$ local state relation, the first variation is $\partial_t\delta\rho+\rho_b\operatorname{div}w=0$, $\rho_b\partial_tw+c_s^2\nabla\delta\rho=0$, with $c_s^2=P'(\rho_b)=v_b^2e_{vv}(v_b,s_b)$. The current theorem carrier and complete conditional proof were inspected, and its current Step 1 readiness record reports ready; this records authoring readiness, not independent proof approval.

[A1] The local state relation and the negative-response coefficient below are adopted mathematical model data. No assertion is made that a measured material has this response.

## Counterexample

**Given:** Choose $v_b>0$, $T_b>0$, $p_b>0$, $s_b\in\mathbb R$, $e_b\in\mathbb R$, and constants $C>0$, $A>0$ with units chosen so every term below has units $\mathrm{J\,kg^{-1}}$. On a sufficiently small open rectangle about $(v_b,s_b)$ with $v>0$, define
$$ e(v,s)=e_b+T_b(s-s_b)+\frac C2(s-s_b)^2-p_b(v-v_b)-\frac A2(v-v_b)^2. $$
The rectangle can be chosen so that $e_s=T_b+C(s-s_b)>0$. At the reference state, $e_{ss}=C>0$, $e_{vv}=-A<0$, $\rho_b=1/v_b>0$, and $c_s^2=v_b^2e_{vv}=-Av_b^2<0$. Define the global barotropic pressure law $P:(0,\infty)\to\mathbb R$ by $P(\rho)=p_b+A(1/\rho-v_b)$. It is $C^\infty$ on $(0,\infty)$ and agrees with $p(1/\rho,s_b)=-e_v(1/\rho,s_b)$ whenever $(1/\rho,s_b)$ lies in the local rectangle. Thus it supplies the global $C^1$ pressure law required by the adopted model while retaining the chosen local state relation; no global sign condition on $P$ is imposed. Let $I=\mathbb R$, choose $k\in\mathbb R^3\setminus\{0\}$ and amplitude $a_0\ne0$, set $\alpha=\sqrt{-c_s^2}|k|>0$, and define
$$ \delta\rho(t,x)=a_0e^{\alpha t}\cos(k\cdot x),\qquad w(t,x)=-\frac{\alpha a_0}{\rho_b|k|^2}k e^{\alpha t}\sin(k\cdot x). $$

1.1 Differentiation of the chosen state relation gives $T_b>0$, $e_{ss}=C>0$, and $e_{vv}=-A<0$ at $(v_b,s_b)$. The global law has $P\in C^1((0,\infty))$ and $P'(\rho)=-A/\rho^2$; on the local density interval its equality with $p(1/\rho,s_b)$ gives $P'(\rho_b)=v_b^2e_{vv}=-Av_b^2=c_s^2<0$. [A1, L1, given, algebra]

2.1 The derivatives of the stated mode are $\partial_t\delta\rho=\alpha\delta\rho$, $\operatorname{div}w=-\alpha\delta\rho/\rho_b$, $\partial_tw=-\alpha^2a_0k e^{\alpha t}\sin(k\cdot x)/(\rho_b|k|^2)$, and $\nabla\delta\rho=-a_0k e^{\alpha t}\sin(k\cdot x)$. Therefore the continuity equation holds, and the momentum equation holds because $-\alpha^2/|k|^2-c_s^2=0$ by the definition of $\alpha$. [L1, given, step 1.1, algebra]

3.1 Since $\alpha>0$ and $k\cdot x$ cannot have both sine and cosine zero, at every fixed $x$ either $\delta\rho(t,x)$ or $w(t,x)$ has a nonzero coefficient multiplying $e^{\alpha t}$. Thus the pair is unbounded in time on $I=\mathbb R$, refuting the stated assertion. This smooth first-order solution concerns only the linearized mathematical system; it supplies no finite-amplitude solution or empirical material claim. [A1, L1, step 2.1, algebra] ∎
