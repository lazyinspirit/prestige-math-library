---
id: ex-gr-null-legs-corner-push-up
kind: example
title: "Worked null corner: two non-parallel null legs compose to a timelike displacement and push up to strict chronology"
status: draft
origin: session
domain: mathematics
dependency_level: 21
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-gr-causal-curves-and-reachability, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-gr-push-up-rule, lem-gr-causal-curve-calculus, thm-chain-rule-for-total-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3: the push-up rule and the strict timelike conclusion from a null corner, section 1.11 printed pp. 15-16 and section 2.6"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Example

In the flat model $(A,\eta,N)$ with global inertial chart $x=(t,y_1,y_2,y_3)$,
put $p:=x^{-1}(0,0,0,0)$, $q:=x^{-1}(1,1,0,0)$ and $r:=x^{-1}(2,0,0,0)$. The
straight paths $p\to q$ and $q\to r$ are null, so $p\le q\le r$, while the
total displacement $r-p=(2,0,0,0)$ is future timelike. This example verifies
the two conclusions of the push-up rule [[lem-gr-push-up-rule]] in this
explicit configuration: $p\ll r$, with an explicit future timelike curve from
$p$ to $r$; and it contrasts the non-parallel case with the parallel case, in
which the composition of two null legs stays null.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$ and the events $p=x^{-1}(0,0,0,0)$, $q=x^{-1}(1,1,0,0)$, $r=x^{-1}(2,0,0,0)$, $r'=x^{-1}(2,2,0,0)$.

[L1] Inertial cone criterion: a nonzero displacement $v$ is future timelike, future null or future causal exactly when $v^0>|v_{\mathrm{vec}}|$, $v^0=|v_{\mathrm{vec}}|$, or $v^0\ge|v_{\mathrm{vec}}|>0$; the straight path $s\mapsto x^{-1}(a+sv)$ is a geodesic with constant velocity $v$ and hence, when $v$ is future causal, a future causal curve ([[lem-gr-flat-inertial-cone-criterion-and-sums]], [[def-gr-flat-minkowski-model-and-inertial-charts]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[def-gr-causal-curves-and-reachability]]).

[L2] A smooth curve with future timelike velocity everywhere is a future timelike curve; velocities are read in the inertial chart by differentiating the chart representative ([[lem-gr-causal-curve-calculus]] clause (c), [[thm-chain-rule-for-total-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] Push-up: if $u\ll u'$ and $u'\le u''$ then $u\ll u''$; moreover if a future causal curve from $u$ to $u''$ has a timelike piece then $u\ll u''$ ([[lem-gr-push-up-rule]]).

## Proof

**Proof technique:** direct.

1.1 (The two legs are future null.) The displacements are $q-p=(1,1,0,0)$ and $r-q=(1,-1,0,0)$; both satisfy $v^0=|v_{\mathrm{vec}}|=1>0$, hence both are future null by [L1], and the corresponding straight paths are future causal curves. Therefore $p\le q$ and $q\le r$, and consequently $p\le r$. [L1, given]

2.1 (The total displacement is future timelike.) The displacement $r-p=(2,0,0,0)$ satisfies $v^0=2>0=|v_{\mathrm{vec}}|$, hence is future timelike by [L1]. In particular $r\ne p$. [step 1.1, L1]

2.2 (Contrast: the parallel case stays null.) For $r'=x^{-1}(2,2,0,0)$ the second displacement $r'-q=(1,1,0,0)$ is a positive multiple of the first, the broken path is the straight null path from $p$ to $r'$ (the two legs are collinear), and $r'-p=(2,2,0,0)$ satisfies $v^0=|v_{\mathrm{vec}}|=2$, so it is future null: in the parallel case the composition of two null legs remains null, and no strict chronology follows. This shows why the non-parallel corner is exactly what produces the timelike total displacement. [step 1.1, L1, given]

3.1 (Strict chronology by the straight path and by an explicit curve.) The displacement $r-p=(2,0,0,0)$ satisfies $v^0=2>0=|v_{\mathrm{vec}}|$, so it is future timelike by [L1]; hence the straight path $\sigma(s):=x^{-1}(x(p)+s(r-p))$, $s\in[0,1]$, has the constant future timelike velocity $r-p$ and is a smooth future timelike curve from $p$ to $r$, so $p\ll r$ [L1, L2]. As an independent certificate, $\gamma(s):=x^{-1}(s,\tfrac14\sin(\pi s),0,0)$ on $[0,2]$ is smooth with chart velocity $(1,\tfrac\pi4\cos(\pi s),0,0)$ of spatial norm at most $\pi/4<1$, hence future timelike everywhere by [L1]; it runs from $\gamma(0)=p$ to $\gamma(2)=r$. Since $\gamma$ is a future causal curve carrying a timelike piece, clause (c) of the push-up rule [[lem-gr-push-up-rule]] equally yields $p\ll r$, in agreement with the direct computation. [step 2.1, L1, L2, L3]

4.1 (Summary.) For the non-parallel null legs the two legs give $p\le q\le r$ while the total displacement is future timelike, and $p\ll r$ is certified both by the straight path and by the explicit timelike curve $\gamma$; for parallel null legs the total displacement stays null. This exhibits exactly the strict output that the push-up rule records for a causal connection with a timelike piece. [step 3.1, step 2.2, step 2.1] ∎

## Remarks

- **What the example tests.** It exercises the strict output of the push-up rule: causality alone gives $p\le r$, and only the non-collinear corner upgrades the relation to $p\ll r$.
- **No empirical content.** The computation is a mathematical verification in the flat model and reports no observation.
