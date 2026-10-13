---
id: cex-gr-flat-cylinder-has-a-closed-timelike-curve
kind: counterexample
title: "A flat time-oriented Lorentzian four-manifold with a closed timelike curve"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-flat-minkowski-model-and-inertial-charts, def-time-orientation-and-future-causal-sets, def-smooth-manifold]
dependency_roles:
  thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-smooth-manifold: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: closed timelike curves, vicious and totally vicious spacetimes, Proposition 4.18 and Definition 4.19 printed p. 113; sections 4.2 printed pp. 111-118"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Misner space and closed timelike curves produced by identification, printed pp. 126-127 (PDF pp. 133-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every smooth time-oriented flat Lorentzian four-manifold is
chronological, that is, contains no closed future timelike curve"
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (a),
[[def-gr-causal-curves-and-reachability]] clause (c)).

## Facts & Assumptions

**Given:** The flat cylinder model $(M,g,N)=A/\Lambda$ of [[thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set]], built from the flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]] with $\Lambda=\{nLe_0:n\in\mathbb Z\}$, $L>0$, orbit map $q$, a fixed point $o\in A$, and the curve $\gamma:\mathbb R\to M$, $\gamma(s)=q(o+se_0)$.

[L1] $M$ is a smooth four-manifold, $g$ is a smooth Lorentzian metric obtained by descent so that $g_{q(p)}(dq_pV,dq_pW)=\eta_p(V,W)$, $N=dq(\partial_0)$ is a time orientation, the model is flat, and the curve $\gamma$ is a nonconstant smooth future timelike curve with $\gamma(s+L)=\gamma(s)$ for all $s$, hence a closed future timelike curve ([[thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set]] clauses (a), (b), [[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (b), (c)).

[L2] A model is chronological when no future timelike curve $\gamma:[a,b]\to M$ with $a<b$ and $\gamma(a)=\gamma(b)$ exists, and nonconstant on $[a,b]$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (a), [[def-gr-causal-curves-and-reachability]] clauses (b), (c)).

## Counterexample

1.1 (The witness is a future timelike curve.) By [L1] $\gamma$ is a smooth mapping into $M$ with velocity $\gamma'(s)=dq_{o+se_0}(\partial_0)$; the local isometry identity gives $g(\gamma',\gamma')=\eta(\partial_0,\partial_0)=-1<0$ and $g(\gamma',N)=\eta(\partial_0,\partial_0)=-1<0$, so every tangent is future unit timelike and $\gamma$ is a future timelike curve in the class of [[def-gr-causal-curves-and-reachability]]. [given, L1]

1.2 (The witness is closed and nonconstant on one period.) By [L1]
$\gamma(s+L)=q(o+se_0+Le_0)=q(o+se_0)=\gamma(s)$ because $Le_0\in\Lambda$. It is nonconstant on $[0,L]$: if $\gamma(s)=\gamma(0)$ for some $0<s<L$, then $se_0\in\Lambda$, so $s=nL$ for some nonzero integer $n$, which is impossible for $0<s<L$. Hence $\gamma|_{[0,L]}$ is a nonconstant future timelike curve with equal endpoints. [step 1.1, given, L1]

2.1 (Conclusion.) By step 1.2 and [L2] the model $(M,g,N)$ is not chronological: it contains a closed future timelike curve. Since $M$ is flat and time-oriented by [L1], this refutes the displayed statement. It also shows that a model with a closed timelike curve is not causal, and by [[thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set]] clause (d) it admits no Cauchy set at all. [step 1.2, given, L1, L2] ∎

## Remarks

- **Where flatness survives.** The identification acts by isometries and the quotient is locally isometric to the flat model; the pathology is global and invisible to curvature. This is the flat analogue of the Misner-space warning recorded by Carroll.
- **Scope.** The model is a mathematical quotient of the flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]]; the counterexample says nothing about the physical realizability of such an identification.
