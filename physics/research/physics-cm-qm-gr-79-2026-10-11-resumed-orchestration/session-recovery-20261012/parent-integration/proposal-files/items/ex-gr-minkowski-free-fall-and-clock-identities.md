---
id: ex-gr-minkowski-free-fall-and-clock-identities
kind: example
title: "Straight timelike geodesics of the flat model: constant coordinate velocity, four-velocity and the clock-reading identity"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-interval, def-rational-power]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  lem-gr-flat-model-connection-curvature-and-geodesics: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: worldlines, proper time and four-velocity (1.97)-(1.99), printed pp. 25-27 (PDF pp. 32-34); Ch. 3: the geodesic equation (3.47) and straight lines as geodesics of flat space, printed pp. 70-71 (PDF pp. 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: the geodesic equation and proper time as an affine parameter in flat spacetime, printed pp. 37-38 (PDF pp. 38-39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be the flat model of
[[def-gr-minkowski-model-and-inertial-chart]] with inertial chart $x$, and
let $c>0$. Take the initial event $p$ with $x(p)=0$ and the tangent vector

$$U_0:=c\,v,\qquad v:=\Bigl(\frac{2}{\sqrt3},\frac{1}{\sqrt3},0,0\Bigr),\qquad \eta(v,v)=-1,\quad v^0>0,$$

so that $g_p(U_0,U_0)=-c^2$ and $U_0$ is future timelike. Then:

1. The maximal geodesic of the metric-selected connection with
   $x(\gamma(0))=0$ and velocity $v$ at $0$ is
   $x(\gamma(s))=s\,v$ on $\mathbb R$; it is a future timelike worldline, and
   $\tau(s)=s/c$ is its proper time up to an additive constant, with
   $d\gamma/d\tau=c\,v=U_0$ and $g(d\gamma/d\tau,d\gamma/d\tau)=-c^2$.
2. Its coordinate velocity in the parametrization $t=x^0/c$ is the constant
   $w=(c/2,0,0)$ and $|w|=c/2<c$.
3. Between coordinate times $t_0<t_1$ the proper time elapsed on the
   worldline is
   $\Delta\tau=\sqrt{1-|w|^2/c^2}\,(t_1-t_0)=\tfrac{\sqrt3}{2}(t_1-t_0)$,
   and this agrees with the direct parametrization $t=v^0\tau$.

## Facts & Assumptions

**Given:** The flat model $(M,g,N)$ with inertial chart $x$, the event $p$ with $x(p)=0$, and the vector $v=\bigl(2/\sqrt3,\,1/\sqrt3,\,0,\,0\bigr)$.

[L1] In the inertial chart, $g_{ab}=\eta_{ab}=\operatorname{diag}(-1,1,1,1)$ and $g_p(c\,\partial_0,c\,\partial_0)=-c^2$; timelike, null and causal classifications are those of $\eta$ ([[def-gr-minkowski-model-and-inertial-chart]]).

[L2] A smooth curve $\gamma:I\to M$ is a geodesic of the metric-selected connection if and only if there are $x_0,v\in\mathbb R^4$ with $x(\gamma(s))=x_0+sv$; the speed $g(\gamma',\gamma')=\eta(v,v)$ is constant; the maximal geodesic with $x(\gamma(0))=x_0$ and velocity $v$ at $0$ has domain $\mathbb R$; if $\eta(v,v)<0$ and $v^0>0$ it is a future timelike worldline and $\tau(s)=\sqrt{-\eta(v,v)}(s-s_0)/c$ is proper time up to an additive constant, with $d\gamma/d\tau$ the physical four-velocity $U$ and $g(U,U)=-c^2$. Its coordinate velocity in the parametrization $x(\gamma(t))=(ct,\mathbf q(t))$ is $\mathbf w=(c/v^0)(v^1,v^2,v^3)$ and $|\mathbf w|<c$ ([[lem-gr-flat-model-connection-curvature-and-geodesics]] clauses (d)-(e), [[def-gr-timelike-worldline-and-proper-time]]).

[L3] For a $C^1$ future timelike worldline $\gamma$ on an interval with nonempty interior with proper-time function $\tau$, one has $\tau'(t)=\tfrac1c\sqrt{-g_{\gamma(t)}(\gamma'(t),\gamma'(t))}>0$, and $\tau$ is strictly increasing; reparametrizing by $\tau$ gives tangent $U$ with $g(U,U)=-c^2$ ([[lem-gr-proper-time-reparametrization-and-four-velocity]] clauses 1 and 3, [[def-interval]]).

[L4] For $v=\bigl(2/\sqrt3,1/\sqrt3,0,0\bigr)$: $\eta(v,v)=-(4/3)+(1/3)=-1$, $v^0=2/\sqrt3>0$, $1/v^0=\sqrt3/2$, and $1-1/(v^0)^2=1-3/4=1/4$; also $c^2\eta(v,v)=-c^2$, and $\sqrt{3/4}=\sqrt3/2$ ([[def-rational-power]]).

## Verification

**Proof technique:** direct; evaluate the flat-model geodesic, velocity and proper-time statements of [L2] and [L3] on the explicit vector $v$, and compare the clock reading with the direct affine parametrization.

1.1 (The worldline.) By [L4], $\eta(v,v)=-1$ and $v^0>0$, so $U_0=c\,v$ satisfies $g_p(U_0,U_0)=c^2\eta(v,v)=-c^2$ by [L1] and is future timelike. By [L2] the maximal geodesic with $x(\gamma(0))=0$ and velocity $v$ has $x(\gamma(s))=s\,v$ on $\mathbb R$ and is a future timelike worldline; its speed is the constant $\eta(v,v)=-1$; and $\tau(s)=\sqrt{-\eta(v,v)}\,(s-0)/c=s/c$ is proper time up to an additive constant, with $d\gamma/d\tau=c\,v=U_0$ and $g(d\gamma/d\tau,d\gamma/d\tau)=c^2\eta(v,v)=-c^2$. [L1, L2, L4, algebra]

1.2 (Coordinate velocity.) In the parametrization $x(\gamma(t))=(ct,\mathbf q(t))$ of [L2] clause (e), the coordinate velocity is $\mathbf w=(c/v^0)(v^1,v^2,v^3)=(\sqrt3/2)\,c\,(1/\sqrt3,0,0)=(c/2,0,0)$ using [L4]; hence $|\mathbf w|=c/2<c$ and $1-|\mathbf w|^2/c^2=1-1/4=3/4$, so $\sqrt{1-|\mathbf w|^2/c^2}=\sqrt3/2$. [L2, L4, algebra]

2.1 (Clock reading via the proper-time density.) Parametrize the worldline by $t=x^0/c$; its tangent is $\gamma'_t=(c,\mathbf w)$ with components $(c,c/2,0,0)$, so by [L1] $g(\gamma'_t,\gamma'_t)=c^2(-1+1/4)=-3c^2/4$ and [L3] gives $\tau'(t)=\tfrac1c\sqrt{3c^2/4}=\sqrt3/2>0$. Integrating over $[t_0,t_1]$ gives $\Delta\tau=(t_1-t_0)\sqrt3/2=\sqrt{1-|\mathbf w|^2/c^2}\,(t_1-t_0)$ by step 1.2. [step 1.2, L1, L3, algebra]

3.1 (Cross-check with the affine parametrization.) On the parametrization $\gamma(s)=sv$ one has $x^0(\gamma(s))=sv^0$, that is $t=v^0s$, and step 1.1 identifies $\tau=s/c$, so $\tau=t/v^0=(\sqrt3/2)\,t$ by [L4]; hence between $t_0$ and $t_1$ the elapsed proper time is $(t_1-t_0)/v^0=(t_1-t_0)\sqrt3/2$, in agreement with step 2.1. The identity $1/v^0=\sqrt{1-|\mathbf w|^2/c^2}$ is exactly $\eta(v,v)=-1$: $1-|\mathbf w|^2/c^2=1-|v^1|^2/(v^0)^2=(1+|v^1|^2-|v^1|^2)/(v^0)^2=1/(v^0)^2$. [step 1.1, step 1.2, step 2.1, L4, algebra] ∎

## Remarks

- **Reading.** The worldline, velocity and clock identities verified here are the mathematical content of the free-fall and clock clauses of [[pthm-gr-minkowski-vacuum-model]]; that item additionally adopts the postulates that assign a freely falling test body and an ideal clock to this worldline. No dynamics, no matter model and no measurement occur in this example. [scope]
