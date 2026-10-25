---
id: ex-qftx-covariantly-constant-stabilizer
kind: example
title: Central stabilizer and based stabilizer comparison
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 5
axiom_base: "ZF plus the full Axiom of Choice inherited through the configuration and gauge-stabilizer results."
deps:
  - def-axiom-of-choice
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-gauge-stabilizer-and-properness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-gauge-stabilizer-and-properness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.2, PDF pp. 113–114: gauge stabilizers as holonomy centralizers and the irreducibility convention."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.4, PDF pp. 31–36: stabilizer and irreducible-quotient comparison in the abelian Seiberg–Witten setting; the SU(N) centralizer follows from the separate local Schur argument."
verification:
  precheck: pending
---

## Example

Let $M$ be compact and connected, let $P\to M$ be a smooth right principal $SU(N)$-bundle with a fixed basepoint lift $p_m$, and let $A$ be a smooth connection with integer regularity index $k>d/2+1$. The evaluation map $u\mapsto u(p_m)$ identifies the stabilizer $\{u\in\mathcal G_{k+1}:A^u=A\}$ with the centralizer $C_{SU(N)}(\operatorname{Hol}_{p_m}(A))$. Consequently the based stabilizer inside $\mathcal G_{k+1,m}:=\{u:u(p_m)=e\}$ is trivial for every $A$. If $A$ is irreducible on $\mathbb C^N$, its full stabilizer is $Z_N=\{zI_N:z^N=1\}$, so its stabilizer under the reduced group $\bar{\mathcal G}_{k+1}=\mathcal G_{k+1}/Z_N$ is trivial as well.

## Example references

[Walpuski, holonomy centralizers and gauge stabilizers](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, based and unbased gauge stabilizers in the abelian case](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the configuration conventions above; and a smooth connection $A$ on the fixed connected base.

[A1] Full AC is inherited through the configuration and gauge-stabilizer suppliers. [[def-axiom-of-choice]]

[F1] [[def-qftx-smooth-sobolev-gauge-configuration]] fixes $p_m$, $\mathcal G_{k+1,m}$, $Z_N$, $\bar{\mathcal G}_{k+1}$, and the right-action convention $A^u=u^{-1}Au+u^{-1}du$.

[F2] [[lem-qftx-gauge-stabilizer-and-properness]] identifies the stabilizer by evaluation with the holonomy centralizer and gives centralizer $Z_N$ for irreducible $SU(N)$ holonomy.

## Proof

**Given:** The hypotheses of the Example.

1.1 If $u$ is in the stabilizer, its value $u(p_m)$ is in the holonomy centralizer by [F2]. Conversely, [F2] says each centralizing value extends uniquely by parallel transport to a stabilizing gauge section. Thus evaluation is a bijection between the stabilizer and the centralizer. In particular, when $u(p_m)=e$, parallel transport gives $u=e$ everywhere, proving the based stabilizer is trivial without irreducibility. [A1, F1, F2, algebra]

2.1 If $A$ is irreducible, [F2] identifies the full stabilizer with $Z_N$. Every element of this center is divided out in $\bar{\mathcal G}_{k+1}$, so the reduced stabilizer consists only of the identity coset. [F1, F2, step 1.1, algebra] ∎
