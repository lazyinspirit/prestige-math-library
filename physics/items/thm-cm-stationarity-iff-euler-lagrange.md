---
id: thm-cm-stationarity-iff-euler-lagrange
kind: theorem
title: "Stationarity of the time-dependent action is equivalent to the vanishing of the Euler-Lagrange expression"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula, lem-cm-c2-bump-functions, thm-integration-by-parts, thm-linearity-of-the-integral, thm-continuous-implies-integrable, def-darboux-integral, def-continuity-real, def-abs-value, def-ck-euclidean-maps-and-diffeomorphisms, def-derivative]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
  lem-cm-c2-bump-functions: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2 (Euler's Differential Equation) and Section 5.9 (Lagrange multipliers for Holonomic Constraints)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 (Lagrange's equations from stationary action), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]] and let $q:[a,b]\to U$ be a $C^2$ admissible curve.
Then $q$ is stationary for the action $S$ if and only if

$$E_{\mathcal L}(q)(t)=0\qquad\text{for every }t\in[a,b].$$

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$, a $C^2$ curve $q:[a,b]\to U$, and the notation of [[def-cm-time-dependent-lagrangian-and-action]]: the action $S$, the first variation $\delta S(q)[\eta]$ over variations $\eta$, the gradients $\mathcal L_q,\mathcal L_v$ and the Euler–Lagrange expression $E_{\mathcal L}(q)$.

[F1] First variation formula and continuity
([[lem-cm-first-variation-formula]]): for every variation $\eta$ the value $\delta S(q)[\eta]$
exists and equals
$$\int_a^b\Bigl[\mathcal L_q(t,q,q')\cdot\eta+\mathcal L_v(t,q,q')\cdot\eta'\Bigr]dt,$$
and $E_{\mathcal L}(q)$ is continuous on $[a,b]$.

[F2] The bumps of [[lem-cm-c2-bump-functions]]: for every open interval $J$, continuous $E:J\to\mathbb R$ and $t_1\in J$ with $E(t_1)\ne0$ there are $\rho>0$ with $[t_1-\rho,t_1+\rho]\subseteq J$ and a $C^2$ function $\beta:\mathbb R\to\mathbb R$ vanishing outside $[t_1-\rho,t_1+\rho]$, $0\le\beta\le1$ and $\int_{t_1-\rho}^{t_1+\rho}E\beta\ne0$.

[F3] Integration by parts ([[thm-integration-by-parts]]): if $u,v:[a,b]\to\mathbb R$ are differentiable at every point with integrable derivatives, then $\int_a^bu v'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$. Here $u:=\bigl(\mathcal L_v(t,q(t),q'(t))\bigr)_i$ is $C^1$ and $v:=\eta_i$ is $C^2$ for a variation $\eta$, so both derivatives are continuous, hence integrable ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[F4] Linearity of the integral ([[thm-linearity-of-the-integral]]) permits finite sums and fixed real coefficients to pass through the integral. A map on an open interval is $C^2$ precisely when its scalar components are $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). In step 1.3 each component of the extended variation is either the given $C^2$ bump or the zero function, whose derivatives are zero by [[def-derivative]]; hence that variation has a $C^2$ extension as required by [[def-cm-time-dependent-lagrangian-and-action]].

[F5] Continuity of $E_{\mathcal L}(q)$ at a point; if $E_{\mathcal L}(q)(t_0)\ne0$ then for small $\delta>0$ the expression is nonzero throughout $(t_0-\delta,t_0+\delta)\cap[a,b]$ ([[def-continuity-real]], [[def-abs-value]]).

## Proof

**Proof technique:** direct; one direction is integration by parts, the other localises a nonzero component of the coefficient with a bump and produces a nonzero first variation.

1.1 Assume $E_{\mathcal L}(q)=0$ on $[a,b]$ and let $\eta$ be any variation. By [F1], $$\delta S(q)[\eta]=\sum_{i=0}^{n-1}\int_a^b\Bigl[\bigl(\mathcal L_q\bigr)_i\eta_i+\bigl(\mathcal L_v\bigr)_i\eta_i'\Bigr]dt .$$ For each $i$, [F3] applied to $u=(\mathcal L_v)_i$ and $v=\eta_i$ gives $\int_a^b(\mathcal L_v)_i\eta_i'=-\int_a^b\frac{d}{dt}(\mathcal L_v)_i\,\eta_i$, because $\eta_i(a)=\eta_i(b)=0$. Hence each summand equals $\int_a^b\bigl((\mathcal L_q)_i-\frac{d}{dt}(\mathcal L_v)_i\bigr)\eta_i\,dt$, and by [F4] and the hypothesis all summands vanish. Thus $\delta S(q)[\eta]=0$; as $\eta$ was arbitrary, $q$ is stationary. [F1, F3, F4, given]

1.2 Conversely, suppose $E_{\mathcal L}(q)(t_0)\ne0$ for some $t_0\in[a,b]$. By [F5] the continuous expression $E_{\mathcal L}(q)$ is nonzero at a point $t_1$ interior to $[a,b]$: if $t_0\in(a,b)$ take $t_1:=t_0$; if $t_0=a$, choose $t_1\in(a,\min(a+\delta,b))$ provided by [F5] applied at $a$ (the interval is nonempty because $a<b$), and symmetrically for $t_0=b$. Choose a component $i$ with $\bigl(E_{\mathcal L}(q)(t_1)\bigr)_i\ne0$. [F5, given]

1.3 Apply [F2] to the open interval $J:=(a,b)$, the continuous function $E:=\bigl(E_{\mathcal L}(q)\bigr)_i$ and the point $t_1$: this gives $\rho>0$ with $[t_1-\rho,t_1+\rho]\subseteq(a,b)$ and a $C^2$ bump $\beta$ vanishing outside $[t_1-\rho,t_1+\rho]$ with $\int E\beta\ne0$. Define $\eta:[a,b]\to\mathbb R^n$ by $\eta_i:=\beta$ and $\eta_j:=0$ for $j\ne i$ on $[a,b]$, extended to an open interval around $[a,b]$ by the same formula. Then $\eta$ is a variation and, because the support of $\beta$ lies inside $(a,b)$, it vanishes near both endpoints. [F2, F4]

2.1 Evaluate the first variation of $\eta$: by [F1] and the reduction of step 1.1 applied to this single component, $$\delta S(q)[\eta]=\int_a^b\Bigl[\bigl(\mathcal L_q\bigr)_i\beta+\bigl(\mathcal L_v\bigr)_i\beta'\Bigr]dt =\int_a^b E(t)\beta(t)\,dt\ne0 .$$ Hence $q$ is not stationary. Contraposition gives: if $q$ is stationary, then $E_{\mathcal L}(q)(t_0)=0$ for every $t_0\in[a,b]$. [F1, F2, step 1.1, step 1.3, algebra]

3.1 Steps 1.1 and 2.1 prove the two implications of the statement. [step 1.1, step 2.1] ∎

## Remarks

- Stationarity is an integral condition; the theorem identifies it with the pointwise vanishing of a continuous coefficient. It does not say that a stationary curve minimises the action, and [[rem-cm-scope-of-stationarity]] records the distinction with a counterexample on the companion page.

- The proof uses $C^2$ variations because the bump of [[lem-cm-c2-bump-functions]] is of class $C^2$; the same argument with a smooth bump would give the $C^\infty$ version, but smoothness is not needed by the consuming items of this page.
