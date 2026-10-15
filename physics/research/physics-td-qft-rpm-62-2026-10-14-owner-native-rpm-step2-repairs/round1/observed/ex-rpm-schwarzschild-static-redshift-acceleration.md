---
id: ex-rpm-schwarzschild-static-redshift-acceleration
kind: example
title: "Static Schwarzschild clocks at 2s and 4s, and the near-horizon acceleration limit"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-rpm-static-clock-redshift
  - lem-gr-schwarzschild-static-congruence-and-clock-rates
  - lem-gr-schwarzschild-curvature-and-kretschmann-scalar
  - lem-gr-schwarzschild-extension-chart
dependency_roles:
  pthm-rpm-static-clock-redshift: physical-result
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  lem-gr-schwarzschild-curvature-and-kretschmann-scalar: mathematical-premise
  lem-gr-schwarzschild-extension-chart: mathematical-premise
physical_scope: "Worked model calculation for ideal static observers and an ideal light ray. The near-horizon acceleration is a model requirement for static motion, not an observation; curvature and extension statements are geometric properties of the specified Schwarzschild model."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 180–181"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification: {}
---

## Example

Let $(M,g,N)$ be the adopted Schwarzschild exterior datum with $s>0$ and $f(r)=1-s/r$. Compare ideal static clocks at radii $r_E=2s$ and $r_R=4s$ over a common Schwarzschild coordinate-time interval of duration $\Delta t>0$. For the frequency ratio, choose a specified smooth, affinely parametrized future-directed null geodesic $\eta:J\to M$ in the exterior with endpoint parameters $\lambda_E<\lambda_R$ on those static worldlines, and use the ideal geometric-optics frequencies assigned by the endpoint static observers. Here $f(2s)=1/2$ and $f(4s)=3/4$.

1. The exact model ratios are

   $$\frac{\omega_R}{\omega_E}=\sqrt{\frac{f(2s)}{f(4s)}}=\sqrt{\frac23},\qquad \frac{\Delta\tau_R}{\Delta\tau_E}=\sqrt{\frac{f(4s)}{f(2s)}}=\sqrt{\frac32}.$$

   The static proper acceleration at $2s$ is $a(2s)=c^2/(4\sqrt2s)$.
2. Write $r=s(1+\epsilon)$ for $\epsilon>0$. The exact static proper acceleration is

   $$a(r)=\frac{c^2}{2s\sqrt\epsilon(1+\epsilon)^{3/2}},$$

   which tends to $+\infty$ as $\epsilon\downarrow0$. In contrast, the curvature scalar has limit $K\to12/s^4$ by [[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]], and the advanced extension chart is smooth through $r=s$ by [[lem-gr-schwarzschild-extension-chart]]. The acceleration divergence is therefore a property of maintaining a static worldline near the boundary, not evidence of a curvature blow-up there.

## Facts & Assumptions

**Given:** The Schwarzschild exterior with $s>0$, static observers at $2s$ and $4s$, and an ideal ray in the geometric-optics reading.

[F1] The proper-time increments of two static clocks over a common Schwarzschild coordinate-time interval satisfy $\Delta\tau_R/\Delta\tau_E=\sqrt{f_R/f_E}$; for ideal geometric-optics frequencies measured at the endpoint events of a specified future-directed null geodesic between those static observers, $\omega_R/\omega_E=\sqrt{f_E/f_R}$; and the proper acceleration is $c^2s/(2r^2\sqrt f)$ ([[pthm-rpm-static-clock-redshift]]).

[F2] The curvature scalar is $K=12s^2/r^6$ in the Schwarzschild exterior and has boundary limit $12/s^4$ as $r\downarrow s$ ([[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]]).

[F3] The advanced extension chart is a smooth Lorentzian extension through $r=s$, isometric to the exterior on $r>s$ ([[lem-gr-schwarzschild-extension-chart]]).

## Verification

**Proof technique:** substitute the two radii into the exact static formulas, then evaluate the proper-acceleration and curvature limits separately.


1.1 Substitution gives $f_E=1/2$ and $f_R=3/4$. Applying [F1] yields the frequency and clock ratios. The acceleration at $2s$ is $c^2s/[2(2s)^2\sqrt{1/2}]=c^2/(4\sqrt2s)$. [given, F1, algebra]

1.2 At $r=s(1+\epsilon)$, $f=\epsilon/(1+\epsilon)$, so [F1] gives $a=c^2/[2s\sqrt\epsilon(1+\epsilon)^{3/2}]$, which diverges as $\epsilon\downarrow0$. By [F2], $K=12s^2/[s^6(1+\epsilon)^6]$ tends to $12/s^4$, a finite value. [F1, F2, algebra, algebra]

2.1 [F3] supplies a smooth extension through the same $r=s$ boundary. Hence the divergence in 1.2 is the static-observer acceleration requirement in the exterior chart, while this curvature scalar remains finite and the metric has the stated smooth extension. No measured clock ratio or acceleration is asserted. [step 1.1, step 1.2, F2, F3, given] ∎
