---
id: cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum
kind: counterexample
title: "The punctured disc has an irregular boundary point and a continuous boundary datum with no harmonic solution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions, cor-uniqueness-for-the-bounded-plane-dirichlet-problem, thm-perron-solves-dirichlet-on-regular-plane-domains]
proof_strategy: direct
verification:
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

[L3] If every boundary point of a bounded domain were regular, Perron's method would solve every continuous Dirichlet problem there ([[thm-perron-solves-dirichlet-on-regular-plane-domains]]).

## Counterexample

**Proof technique:** direct.

1.1 Suppose $u$ were a continuous harmonic solution of this boundary-value problem on $\Omega$. Then $u$ is bounded on every punctured neighbourhood of $0$ because it extends continuously to the puncture with value $1$. By [L1], $u$ extends to a harmonic function $U$ on the full unit disc. [assume-contra, L1]

2.1 The extension $U$ still has boundary value $0$ on the unit circle, so [L2] forces $U\equiv0$ on the closed unit disc. But then $U(0)=0$, contradicting the prescribed puncture value $1$. Therefore no such harmonic solution exists. [L2, step 1.1, discharge-contradiction]

3.1 Since one continuous boundary datum is not solvable on $\Omega$, [L3] shows that $\Omega$ cannot have all boundary points regular. In particular, the puncture is an irregular boundary point. [L3, step 2.1] ∎
