---
id: ex-gr-schwarzschild-static-clock-ratio-explicit
kind: example
title: "Explicit static clock-rate ratios of the Schwarzschild exterior at r = 2s and r = 4s"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-static-congruence-and-clock-rates, def-gr-observer-congruence-and-adapted-charts, def-derivative, thm-algebra-of-derivatives, def-rational-power, thm-real-power-continuity-and-derivatives, def-interval, thm-chain-rule, cor-mean-value-theorem]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: static observers, the redshift relation between clocks at different radii and its weak-field limit, printed pp. 174-176 (PDF pp. 181-183)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.2: the gravitational redshift between static observers, printed pp. 249-251 (PDF pp. 256-258)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius
$s>0$, $f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]) and static
observer congruence $n=f^{-1/2}\partial_0$
([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (a),
[[def-gr-observer-congruence-and-adapted-charts]]). By
[[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (c), a
static observer worldline at radius $r_0\in(s,\infty)$ has proper-time
increment

$$\Delta\tau(r_0)=\sqrt{f(r_0)}\,\Delta t=\sqrt{1-\frac{s}{r_0}}\;\Delta t$$

over a coordinate-time increment $\Delta t=\Delta x^0/c>0$. Then:

1. **Exact values at the two radii.** For $r_1=2s$ and $r_2=4s$ one has
   $f(r_1)=\frac12$, $f(r_2)=\frac34$, so
   $$\Delta\tau(r_1)=\frac{\Delta t}{\sqrt 2},\qquad \Delta\tau(r_2)=\frac{\sqrt 3}{2}\,\Delta t,\qquad \frac{\Delta\tau(r_1)}{\Delta\tau(r_2)}=\sqrt{\frac{2}{3}}=\frac{\sqrt 6}{3}<1 .$$
2. **Monotonicity in the radius.** The function
   $r\mapsto\sqrt{f(r)}=\sqrt{1-s/r}$ is smooth and strictly increasing on
   $(s,\infty)$ with derivative
   $\frac{d}{dr}\sqrt{f(r)}=\frac{s}{2r^{2}\sqrt{f(r)}}>0$; consequently a
   static observer at the larger radius accumulates strictly more proper time
   over the same coordinate interval: $\Delta\tau(r_2)>\Delta\tau(r_1)$ for
   $s<r_1<r_2$, and the ratio of clause 1 is the exact instance at
   $(r_1,r_2)=(2s,4s)$.
3. **Large-radius limit.** $\sqrt{f(r)}\to1$ as $r\to+\infty$; the ratios
   $\Delta\tau(r_1)/\Delta\tau(r_2)$ are invariant under the common scaling of
   $\Delta t$ and tend to $1$ as
   $\min(r_1,r_2)\to+\infty$ with $r_2>r_1$.
4. **The static observers are accelerated.** At $r_1=2s$ the acceleration of
   the congruence is $a=\frac{s}{2r^{2}}\partial_r$
   ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (e)),
   whose coefficient at $r_1=2s$ is
   $\frac{s}{2(2s)^{2}}=\frac{1}{8s}>0$: the observer held at $r_1=2s$ has
   nonzero acceleration pointing in the direction of increasing $r$, so it is
   not freely falling.

## Facts & Assumptions

**Given:** The exterior datum with $s>0$ and $f=1-s/r$, a fixed $\Delta t>0$, the radii $r_1=2s$, $r_2=4s$, and the static observer congruence $n=f^{-1/2}\partial_0$.

[L1] The static congruence $n=f^{-1/2}\partial_0$ is a smooth future-directed unit timelike field, its integral curves are the worldlines at constant $r$, and along each such worldline $\Delta\tau=\sqrt{f(r_0)}\,\Delta t$ with $\Delta t=\Delta x^0/c$; for two radii over the same nonzero coordinate interval, $\Delta\tau_1/\Delta\tau_2=\sqrt{f(r_1)/f(r_2)}$ ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clauses (a)-(d), [[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-schwarzschild-exterior-model]]).

[L2] The acceleration of the congruence is $a=\nabla_nn=\frac{s}{2r^{2}}\partial_r$ ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (e)).

[L3] The function $f(r)=1-s/r$ is smooth and positive on $(s,\infty)$, $f(2s)=1/2$, $f(4s)=3/4$, and $\sqrt{\cdot}$ is smooth with derivative $\frac{1}{2\sqrt{x}}$ on $(0,\infty)$; sums, products and compositions of smooth functions are smooth ([[lem-gr-schwarzschild-metric-properties]], [[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]], [[def-interval]], [[thm-chain-rule]]).

[L4] For $s<r_1<r_2$ one has $0<s/r_2<s/r_1<1$, hence $0<f(r_1)<f(r_2)<1$ by direct subtraction, $f(r_2)-f(r_1)=s(r_2-r_1)/(r_1r_2)>0$ ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-interval]]).

[L5] A function continuous on $[a,b]$ and differentiable on $(a,b)$, for $a<b$, satisfies $h(b)-h(a)=h'(\xi)(b-a)$ for some $\xi\in(a,b)$ ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct; evaluate the clock identity at the two explicit radii, differentiate the square root to get monotonicity, and substitute $r_1=2s$ in the acceleration coefficient.

1.1 (Values at $2s$ and $4s$.) By [L3], $f(2s)=1-\frac{s}{2s}=\frac12$ and $f(4s)=1-\frac{s}{4s}=\frac34$, both positive, so [L1] gives $\Delta\tau(r_1)=\sqrt{1/2}\,\Delta t=\frac{\Delta t}{\sqrt2}$ and $\Delta\tau(r_2)=\sqrt{3/4}\,\Delta t=\frac{\sqrt3}{2}\Delta t$. The ratio is $\sqrt{\frac{1/2}{3/4}}=\sqrt{\frac23}=\frac{\sqrt6}{3}$, and $\sqrt6/3<1$ because $6<9$. This is clause 1. [L1, L3, algebra]

2.1 (Monotonicity.) On $(s,\infty)$ the chain rule gives $\frac{d}{dr}\sqrt{f(r)}=\frac{f'(r)}{2\sqrt{f(r)}}=\frac{s/r^{2}}{2\sqrt{f(r)}}=\frac{s}{2r^{2}\sqrt{f(r)}}$, using $f'(r)=s/r^{2}$ and $\sqrt{f}>0$ by [L3]. The numerator and denominator are positive, so the derivative is positive. On every $[a,b]\subset(s,\infty)$ with $a<b$, $\sqrt f$ is continuous and differentiable by [L3], and [L5] gives $\sqrt{f(b)}-\sqrt{f(a)}=(b-a)s/(2\xi^2\sqrt{f(\xi)})>0$ for some $\xi\in(a,b)$. Thus $\sqrt f$, hence $r\mapsto\Delta\tau(r)$ at fixed $\Delta t>0$, is strictly increasing; with $f(r_1)<f(r_2)$ by [L4], $r_1<r_2$ gives $\Delta\tau(r_1)<\Delta\tau(r_2)$ and the ratio of clause 1 is the instance $r_1=2s$, $r_2=4s$. This is clause 2 and the inequality $\Delta\tau(r_2)>\Delta\tau(r_1)$ of clause 1. [L1, L3, L4, L5, step 1.1, algebra]

2.2 (Large-radius limit.) As $r\to+\infty$, $s/r\to0$, so $f(r)\to1$ and $\sqrt{f(r)}\to1$ by [L3]; hence $\Delta\tau(r)=\sqrt{f(r)}\,\Delta t\to\Delta t$ and the ratio $\Delta\tau(r_1)/\Delta\tau(r_2)=\sqrt{f(r_1)/f(r_2)}\to1$ whenever $\min(r_1,r_2)\to+\infty$ with the radii positive. The ratio does not involve $\Delta t$, since the common factor cancels. This is clause 3. [L1, L3, step 1.1, algebra]

3.1 (Acceleration at $2s$.) By [L2] the acceleration field is $a=\frac{s}{2r^{2}}\partial_r$, whose coefficient function is smooth and positive on $(s,\infty)$; at $r_1=2s$ it is $\frac{s}{2(2s)^{2}}=\frac{1}{8s}>0$. Since the coefficient is nonzero, the worldlines of the congruence do not satisfy the geodesic equation, so the observer held at radius $2s$ is accelerated with the stated outward-coefficient $1/(8s)$ in the coordinate basis $(\partial_0,\partial_r,\partial_\vartheta,\partial_\varphi)$. This is clause 4. [L1, L2, L3, algebra] ∎

## Remarks

- **What the example computes.** All four clauses are exact evaluations of the clock identity and the acceleration formula of the cited lemma at explicit radii; the coordinate-time increment $\Delta t$ is an arbitrary positive coordinate difference, not a measurement, and no value of $c$, $G_N$, $m_*$ or $s$ in any unit system is asserted. In particular clause 1 does not report a clock comparison or a redshift observation; it is the conditional identity of the model evaluated at two radii.
