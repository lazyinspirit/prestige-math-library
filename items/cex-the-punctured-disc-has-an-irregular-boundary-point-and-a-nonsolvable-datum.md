---
id: cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum
kind: counterexample
title: "The punctured disc has an irregular boundary point and a continuous boundary datum with no harmonic solution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions, cor-uniqueness-for-the-bounded-plane-dirichlet-problem, def-perron-family-for-the-plane-dirichlet-problem, def-perron-envelope-for-the-plane-dirichlet-problem, def-barrier-and-regular-boundary-point, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement refuted

A bounded plane domain need not solve the Dirichlet problem for every continuous
boundary datum. The punctured disc
$$\Omega=\{z:0<|z|<1\}$$
with boundary values $0$ on $|z|=1$ and $1$ at the puncture is a witness.

## Facts & Assumptions

**Given:** The punctured disc $\Omega=\{0<|z|<1\}$, the boundary datum $\varphi$ equal to $0$ on $|z|=1$ and $1$ at $0$.

[L1] A bounded harmonic function on a punctured disc extends harmonically across the puncture ([[thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]]).

[L2] On the unit disc, the only continuous harmonic function with zero boundary values is the zero function ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

[L3] Perron lower functions satisfy a boundary limsup inequality, and $H_\varphi$ is the upper-semicontinuous regularization of their pointwise supremum ([[def-perron-family-for-the-plane-dirichlet-problem]], [[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[L4] A point is regular when every continuous datum has the correct Perron-envelope limit there ([[def-barrier-and-regular-boundary-point]]).

[L5] A positive sum of subharmonic functions is subharmonic, and a subharmonic function with boundary limsup at most $0$ on a bounded domain is at most $0$ ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 Suppose $u$ were a continuous harmonic solution of this boundary-value problem on $\Omega$. Then $u$ is bounded on every punctured neighbourhood of $0$ because it extends continuously to the puncture with value $1$. By [L1], $u$ extends to a harmonic function $U$ on the full unit disc. [assume-contra, L1]

1.2 We determine the Perron envelope directly. The constant $0$ is a Perron lower function for $\varphi$, so $U_\varphi\ge0$. Let $v$ be any other lower function and fix $\varepsilon>0$. Its boundary limsup at the puncture gives $v\le1+\varepsilon$ on all sufficiently small circles about $0$. The boundary limsup at each point of the compact unit circle gives, by a finite subcover, some $R<1$ such that $v\le\varepsilon$ whenever $R\le|z|<1$. For any $0<\delta<R$ sufficiently small, compare $v$ on $\delta<|z|<R$ with the harmonic function [L3, L5, given]
$h_{\delta,R}(z)=\varepsilon+\log(R/|z|)/\log(R/\delta)$.
The inner and outer boundary bounds give $v-h_{\delta,R}\le0$ on both circles; [L5] and the maximum principle therefore give $v\le h_{\delta,R}$ throughout the annulus. For a fixed $z$ with $|z|<R$, letting $\delta\downarrow0$ yields $v(z)\le\varepsilon$. For any fixed $z\in\Omega$, take $R$ above $|z|$ and sufficiently close to $1$, then let $\varepsilon\downarrow0$. Thus every lower function is at most $0$, so $U_\varphi=H_\varphi=0$. [L3, L5, given]

2.1 The extension $U$ still has boundary value $0$ on the unit circle, so [L2] forces $U\equiv0$ on the closed unit disc. But then $U(0)=0$, contradicting the prescribed puncture value $1$. Therefore no such harmonic solution exists. [L2, step 1.1, discharge-contradiction]

3.1 In particular, $H_\varphi(z)\to0$ as $z\to0$ inside $\Omega$, whereas $\varphi(0)=1$. By [L4] the puncture is irregular. Together with step 2.1, this proves both asserted failures for the given domain and datum. [L4, step 2.1, step 1.2] ∎
