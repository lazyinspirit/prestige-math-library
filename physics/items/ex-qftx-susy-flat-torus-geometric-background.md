---
id: ex-qftx-susy-flat-torus-geometric-background
kind: example
title: A flat four-torus supplies a geometric Killing-spinor input
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds-examples
deps:
  - def-qftx-susy-background-data
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
physical_scope: "A local Euclidean geometric spin/R background example only; no
  multiplet, gauge-fixed field theory, functional measure, or localization
  prediction is asserted."
verification:
  precheck: pending
---

## Example

Let $\ell_1,\ldots,\ell_4>0$ be lengths and let $T^4_\ell=\mathbb R^4/(\ell_1\mathbb Z\oplus\cdots\oplus\ell_4\mathbb Z)$ have its quotient flat metric and standard orientation. Use $F_g^+=T^4_\ell\times SO(4)$ and $\widetilde F=T^4_\ell\times\operatorname{Spin}(4)$ with covering map $(x,s)\mapsto(x,\rho(s))$, where $\operatorname{Spin}(4)=SU(2)_+\times SU(2)_-$ and $\rho(u_+,u_-)q=u_+qu_-^{-1}$ on $\mathbb H\cong\mathbb R^4$. Equip this trivial spin lift with its periodic spin structure and zero spin connection. Use the trivial $SU(2)_R$ bundle with zero connection and zero supergravity auxiliary fields. For the geometric Killing-spinor equation $\nabla^S_\mu\epsilon=0$, every constant nonzero section of $S_+$ is a solution. These data supply only the geometric spin/R and Killing-spinor input; they do not specify an off-shell multiplet or $Q$, gauge fixing, an integration contour, a measure, or a regulator, and therefore are not a complete localization package.

## Example references

[Festuccia and Seiberg, §2, general rigid-background procedure](https://arxiv.org/pdf/1105.0689)

## Facts & Assumptions

**Given:** The quotient flat metric, the trivial spin and R bundles, the zero connections, zero auxiliary backgrounds, and the equation $\nabla^S_\mu\epsilon=0$ specified in the example.

[F1] [[def-qftx-susy-background-data]]: a full localization package additionally specifies an off-shell multiplet and square, gauge fixing and ghosts, contour, measure or regulator, and boundary conditions; a geometric spinor solution alone does not provide them.

## Proof

1.1 The quotient coordinates give the global coframe $dx^1,\ldots,dx^4$ with constant Euclidean metric coefficients. The selected trivial spin lift and zero spin connection identify $S_+$ with $T^4_\ell\times\mathbb C^2$ and make $\nabla^S$ the ordinary derivative. Hence for any fixed $\epsilon_0\in\mathbb C^2\setminus\{0\}$, the section $\epsilon(x)=\epsilon_0$ is smooth, nonzero, and satisfies $\nabla^S_\mu\epsilon=0$ for every $\mu$. [given, construct, algebra]

2.1 The specified data contain no field bundles for a matter/gauge multiplet, no off-shell transformation $Q$, no gauge-fixing or ghost data, and no contour, measure, or regulator. By [F1] they therefore realize only the geometric spin/R and Killing-spinor input and imply no localization statement. [F1, given, step 1.1] ∎
