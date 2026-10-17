---
id: ex-emg-flat-zero-field-data
kind: example
title: Flat zero-field data and Minkowski development
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, def-emg-constrained-electrovacuum-data]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Take $M=\mathbb R^{1,3}$ with coordinates $(x^0,x^1,x^2,x^3)$, Minkowski metric $g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$, the standard orientation and future direction, and the hypersurface $\Sigma=\{x^0=0\}$. Set $F=0$ and $\Lambda=0$, with the fixed positive parameters $\kappa,\mu_0$ of [[def-emg-electrovacuum-cauchy-system]]. The induced data are $h=\delta$, $K=0$, and $e=b=0$. This is a smooth exact solution and its data satisfy all four electrovacuum constraints.

## Facts & Assumptions

**Given:** The source-free tensor system and initial-data conventions of [[def-emg-electrovacuum-cauchy-system]] and [[def-emg-constrained-electrovacuum-data]].

[F1] [[def-emg-electrovacuum-cauchy-system]]: the equations are $G+\Lambda g=\kappa\mu_0^{-1}Q(g,F)$, $dF=0$, and $d(\star_gF)=0$.

[F2] [[def-emg-constrained-electrovacuum-data]]: the induced data are tested by the two Maxwell divergences, the Hamiltonian constraint, and the momentum constraint with $K=+\tfrac12\mathcal L_nh$.

## Verification

**Given:** $g=\eta$, $F=0$, $\Lambda=0$, and $\kappa,\mu_0>0$.

1.1 In the displayed global coordinates the metric coefficients are constant, so every Christoffel symbol and every curvature component is zero; hence $G_{ab}=0$. [F1, algebra]

2.1 Since $F=0$, one has $dF=0$, $d(\star_gF)=0$, and $Q_{ab}=T^{\rm EM}_{ab}=0$. Thus $G+\Lambda g=\kappa T^{\rm EM}$ holds identically, proving that $(g,F)$ is an exact electrovacuum solution. [F1, step 1.1, algebra]

3.1 The slice has future unit normal $n=\partial_0$, induced metric $h=\delta$, second fundamental form $K=0$, and observer fields $e=b=0$. Its scalar curvature and all four constraint expressions vanish, so the induced data satisfy [[def-emg-constrained-electrovacuum-data]]. [F2, step 1.1, algebra] ∎