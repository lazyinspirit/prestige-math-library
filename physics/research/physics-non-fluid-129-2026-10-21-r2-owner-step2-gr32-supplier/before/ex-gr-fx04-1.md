---
id: ex-gr-fx04-1
kind: example
title: "The isotropic Schwarzschild end has energy Mc squared"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "A fixed-chart calculation on the standard isotropic Schwarzschild slice data; no positive-mass theorem or empirical statement is asserted."
deps:
  - def-gr-fx-adm-end
  - prop-gr-fx-conformal-adm-value
dependency_roles:
  def-gr-fx-adm-end: mathematical-premise
  prop-gr-fx-conformal-adm-value: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §8.2.5, equations (8.63)–(8.64), and §7.3.2, equations (7.45)–(7.48), PDF pp. 109 and 133–134."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §7.2, Example 7.2.2, equations (7.9)–(7.10), PDF pp. 33–34."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §2.1, equation (2), PDF pp. 7–8."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pass
---

## Example

Let $M>0$ be a mass in kilograms and put $m=G_NM/c^2$, a length. On the end $E=\{x\in\mathbb R^3:r=|x|>m/2\}$, take the standard isotropic Schwarzschild slice data
$$u=1+\frac{m}{2r},\qquad h=u^4\delta,\qquad K=0.$$
Here “time-symmetric” means precisely $K=0$. With the fixed Cartesian end chart and unit asymptotic time normalization $x^0=ct$, the ADM energy is $Mc^2$ joules.

## Example references

[[def-gr-fx-adm-end]]

[[prop-gr-fx-conformal-adm-value]]

## Facts & Assumptions

**Given:** The stated isotropic Schwarzschild initial data with $M>0$, $m=G_NM/c^2$, and the fixed-chart ADM convention.

[F1] A fixed-chart asymptotically Euclidean end has $h_{ij}=\delta_{ij}+a_{ij}/r+O_2(r^{-1-\epsilon})$, $K_{ij}=O_1(r^{-2})$, and the ADM energy is the limit of the specified surface integral multiplied by $c^4/(16\pi G_N)$ ([[def-gr-fx-adm-end]]).

[F2] If $h=u^4\delta$ and $u=1+m/(2r)+O_2(r^{-2})$ with $u>0$, then the fixed-chart ADM limit exists and equals $c^4m/G_N$ ([[prop-gr-fx-conformal-adm-value]]).

[A1] $M>0$, $m=G_NM/c^2>0$, $u>0$ on $E$, and the supplied initial data have $K=0$; the metric form is the standard isotropic Schwarzschild slice representation recorded in the cited full texts.

## Verification

**Given:** [F1], [F2], [A1], and the data in the Example.

1.1 The remainder in $u=1+m/(2r)+\rho$ is $\rho=0$, so $\rho=O_2(r^{-2})$. Also $u>1$ on $E$ and $K=0$ satisfies $K=O_1(r^{-2})$. Hence the end meets the hypotheses of [F1] and [F2]. [F1, F2, A1, algebra]

2.1 By [F2], $E_{\mathrm{ADM}}=c^4m/G_N$. Substituting $m=G_NM/c^2$ gives $E_{\mathrm{ADM}}=c^4(G_NM/c^2)/G_N=Mc^2$. The result is the exact model calculation for this fixed end and time normalization. [F2, step 1.1, algebra] ∎

## Remarks

The source texts use geometric units in the surface formula; the factor $c^4/G_N$ restores SI energy units. This calculation does not prove a positivity theorem.
