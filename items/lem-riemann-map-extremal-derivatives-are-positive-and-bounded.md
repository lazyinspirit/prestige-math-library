---
id: lem-riemann-map-extremal-derivatives-are-positive-and-bounded
kind: lemma
title: "The extremal derivatives are positive and have a finite supremum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-map-extremal-family, lem-riemann-map-extremal-family-is-nonempty, lem-cauchy-estimates-on-concentric-subdiscs]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let $\Omega\subsetneq\mathbb C$ be homologically simply connected and let
$z_0\in\Omega$. Then the set

$$E:=\{\,f'(z_0):f\in\mathcal F(\Omega,z_0)\,\}$$

is a nonempty subset of $(0,\infty)$ with finite supremum.

## Facts & Assumptions

**Given:** A proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$ and $z_0\in\Omega$.

[L1] The extremal family $\mathcal F(\Omega,z_0)$ is nonempty ([[lem-riemann-map-extremal-family-is-nonempty]]).

[L2] Every $f\in\mathcal F(\Omega,z_0)$ satisfies $f(z_0)=0$ and $f'(z_0)>0$ ([[def-riemann-map-extremal-family]]).

[L3] Cauchy estimates bound derivatives from a modulus bound on a larger concentric circle ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] gives at least one map in $\mathcal F(\Omega,z_0)$, so the derivative set $E$ is nonempty. Fact [L2] makes every element of $E$ strictly positive. [L1, L2, given]

1.2 Choose $\rho>0$ with $\overline{D(z_0,\rho)}\subset\Omega$. If $f\in\mathcal F(\Omega,z_0)$, then $|f|\le1$ on $D(z_0,\rho)$ because $f(\Omega)\subset\mathbb D$, so [L3] gives $|f'(z_0)|\le1/\rho$. Since [L2] makes $f'(z_0)$ positive real, this is the same as $f'(z_0)\le1/\rho$. [L2, L3, given, choose]

2.1 Therefore $E\subset(0,1/\rho]$, so $E$ has a finite supremum. [step 1.1, step 1.2] ∎
