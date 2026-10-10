---
id: ex-sr-proper-time-reparametrization
kind: example
title: "Worked example: invariance of elapsed proper time under a cubic reparametrization"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 10
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - lem-sr-proper-time-reparametrization-invariance
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-sr-proper-time-reparametrization-invariance: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked computation. In an inertial chart with $\eta_0 =
\operatorname{diag}(-1,1,1,1)$ let $d := (5,3,0,0)$, a future timelike
displacement with $-\eta(d,d) = 25-9 = 16$ and $\sqrt{-\eta(d,d)} = 4$.

**(a)** The worldline $x(s) := s\,d$ on the parameter interval $[1,8]$ has
$x'(s) = d$, integrand $\sqrt{-\eta(d,d)} = 4$, and elapsed proper time
$\tau(8)-\tau(1) = c^{-1}\int_1^8 4\,ds = 28/c$.

**(b)** The reparametrization $\varphi(u) := u^{3}$ is a strictly increasing
$C^{1}$ surjection of $[1,2]$ onto $[1,8]$ whose derivative $3u^{2}$ is
strictly positive throughout $[1,2]$; the reparametrized curve
$y(u) := x(u^{3}) = u^{3}d$ has $y'(u) = 3u^{2}d$, hence
$\sqrt{-\eta(y',y')} = 3u^{2}\sqrt{-\eta(d,d)} = 12u^{2}$, and elapsed proper
time $c^{-1}\int_1^2 12u^{2}\,du = (4/c)(8-1) = 28/c$. The two elapsed times
agree, as
[[lem-sr-proper-time-reparametrization-invariance]] requires, and the
proper-time function of $x$ is $\tau(s) = (4/c)(s-s_0)$ for the chosen base
point $s_0 \in [1,8]$, whose inverse is
$\rho(\tau) = s_0 + c\,\tau/4$ on the corresponding proper-time interval.

**(c)** Boundary check: instead take the same straight curve $x(s) = s\,d$ on
$[-1,1]$ and $\varphi(u) = u^{3}$ on $[-1,1]$. This is a strictly increasing
$C^{1}$ surjection, but $y'(0) = 0$, so $y$ is not a worldline of
[[def-sr-regular-causal-curve-and-worldline]]. The broad length-integral
identity nevertheless holds: $\int_{-1}^{1} 12u^{2}\,du = 8 =
\int_{-1}^{1} 4\,ds$. No proper-time function of $y$ is invoked outside its
defining worldline domain.

## Facts & Assumptions

**Given:** An inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$; the displacement $d = (5,3,0,0)$; the straight worldline $x(s) = s\,d$ on $[1,8]$ and on $[-1,1]$; the map $\varphi(u) = u^{3}$ on $[1,2]$ and on $[-1,1]$; and $c > 0$.

[L1] Inertial charts ([[def-inertial-frame-and-inertial-chart]]): in an inertial chart the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$, so $\eta(v,v) = -(v^{0})^{2}+(v^{1})^{2}+(v^{2})^{2}+(v^{3})^{2}$ for $v = (v^{0},v^{1},v^{2},v^{3})$.

[L2] Curves ([[def-sr-regular-causal-curve-and-worldline]]): the curve $x(s) = s\,d$ has difference quotients $d$ identically, hence tangent $x'(s) = d$; it is a $C^{1}$ future timelike worldline exactly when $d$ is future timelike; a curve with a zero tangent at some point is not a worldline, the zero vector having no causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L3] Proper time ([[def-sr-proper-time]]): $\tau(s)-\tau(s_0) = c^{-1}\int_{s_0}^{s}\sqrt{-\eta(x'(u),x'(u))}\,du$ for a $C^{1}$ future timelike worldline; a constant integrand $A$ gives the increment $c^{-1}A(s-s_0)$.

[L4] Reparametrization ([[lem-sr-proper-time-reparametrization-invariance]]): for a strictly increasing $C^{1}$ surjection with positive derivative, the reparametrized curve is a worldline with the same elapsed proper time; the broad length-integral identity holds even where the derivative vanishes.

[L5] Bilinearity ([[def-lorentz-form-and-inertia]]): $\eta(\lambda v,\lambda w) = \lambda^{2}\eta(v,w)$.

## Verification

**Proof technique:** direct.

1.1 By [L1], $\eta(d,d) = -25+9 = -16$, so $d$ is timelike by [L2]'s classification and $-\eta(d,d) = 16$ with $\sqrt{-\eta(d,d)} = 4$. [given, L1, L2]

1.2 The map $\varphi(u) = u^{3}$ is strictly increasing on $[1,2]$ with derivative $3u^{2} \ge 3 > 0$ there, and it maps $[1,2]$ onto $[1,8]$; the difference quotients of $y(u) = u^{3}d$ are $\bigl((u+h)^{3}-u^{3}\bigr)/h \cdot d = (3u^{2}+3uh+h^{2})\,d$, which tend to $3u^{2}d$, so $y'(u) = 3u^{2}d$. [given, L2]

2.1 On $[1,8]$ the difference quotients of $x$ are identically $d$, so $x'(s) = d$ and $x$ is a $C^{1}$ future timelike worldline by [L2]; by [L3] its elapsed proper time over $[1,8]$ is $c^{-1}\int_1^8 4\,ds = 28/c$. [step 1.1, L2, L3]

2.2 On $[-1,1]\setminus\{0\}$ the difference quotients of $y(u) = u^{3}d$ are again $(3u^{2}+3uh+h^{2})d$, with limit $3u^{2}d$, and at $u = 0$ the quotient is $h^{2}d \to 0$; hence $y'(0) = 0$ and $y$ is not a worldline, since a worldline tangent must be future timelike and the zero vector has no causal character. [step 1.2, L2]

3.1 By bilinearity [L5], $\eta(y'(u),y'(u)) = (3u^{2})^{2}\eta(d,d)$, so $\sqrt{-\eta(y',y')} = 3u^{2}\sqrt{-\eta(d,d)} = 12u^{2}$ by step 1.1; hence the elapsed proper time of $y$ over $[1,2]$ is $c^{-1}\int_1^2 12u^{2}\,du = (4/c)(2^{3}-1^{3}) = 28/c$, which agrees with step 2.1 as [L4] requires. [step 1.1, step 2.1, step 1.2, L4, L5]

3.2 With base point $s_0 \in [1,8]$ the proper-time function of $x$ is $\tau(s) = c^{-1}\cdot 4\cdot(s-s_0) = (4/c)(s-s_0)$ for $s \in [1,8]$, a strictly increasing affine function with $\tau(s_0) = 0$; solving $\tau = (4/c)(s-s_0)$ for $s$ gives its inverse $\rho(\tau) = s_0 + c\,\tau/4$ on the image interval. [step 2.1, L3]

4.1 The broad length-integral identity still holds on $[-1,1]$: $\sqrt{-\eta(y',y')} = 3u^{2}\sqrt{-\eta(d,d)} = 12u^{2}$ for $u \ne 0$ and both sides vanish at $u = 0$, so $\int_{-1}^{1}\sqrt{-\eta(y',y')}\,du = \int_{-1}^{1} 12u^{2}\,du = 4 - (-4) = 8$, while $\int_{-1}^{1}\sqrt{-\eta(d,d)}\,ds = 4\cdot 2 = 8$; equality holds without any worldline structure for $y$. [step 1.1, step 3.1, step 2.2, L4] ∎

## Remarks

- **Two independent computations of the same number.** The integrals $c^{-1}\int_1^8 4\,ds$ and $c^{-1}\int_1^2 12u^{2}\,du$ are computed separately, and their agreement is the concrete instance of [[lem-sr-proper-time-reparametrization-invariance]]; the cubic's derivative, rather than an inverse function, produces the second computation.

- **The boundary case is deliberate.** On $[-1,1]$ the derivative $3u^{2}$ vanishes at $u = 0$, so the reparametrized curve has a zero tangent there and is not a worldline; the broad integral identity survives, and no proper-time function of $y$ is claimed.
