---
id: pthm-td-concave-stability
kind: physics-theorem
title: Concave entropy, constrained maxima, and local stability
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: C2 single-phase entropy charts and explicitly convex affine slices of permitted exchange coordinates; claims about scaling curvature are conditional on same-constitution homogeneity.
deps:
  - def-td-equilibrium-state-domain
  - def-td-isolated-compound-feasible-set
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - lem-tdmath-constrained-curvature
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  lem-tdmath-constrained-curvature: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.4.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.9.1–2.9.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
    - title: Konstantin K. Likharev, Essential Graduate Physics, SM Statistical Mechanics, §1.2
      url: https://essentialgraduatephysics.org/Files/SM%20merged.pdf
---

## Statement

Let $C$ be an open convex region of dimensionless numerical coordinates for a compound of independent separated systems, and let $S_{\mathrm{tot}}:C\to\mathbb R$ be the adopted $C^2$ concave total entropy on a smooth single-phase chart. Let the feasible set be the affine slice $F=C\cap\{x:Ax=b\}$ for a fixed real linear map $A$ and vector $b$. If $x_*\in F$ is interior relative to this slice and the derivative $DS_{\mathrm{tot}}(x_*)$ vanishes on $\ker A$, then $x_*$ is a global entropy maximum on $F$. If $S_{\mathrm{tot}}$ is strictly concave on $F$, that maximum is unique. The Hessian of a $C^2$ concave entropy is negative semidefinite, so this hypothesis alone does not give strict stability.

There is a further conditional scaling conclusion. If, on one fixed-constitution smooth chart that is an open cone, the same function satisfies $S_c(\lambda x)=\lambda S_c(x)$ for $\lambda$ near $1$, then the Hessian bilinear form has zero radial direction: $D^2S_c(x)[h,x]=0$ for every vector $h$. This extra same-constitution identity is not part of the tagged scaling rule in [[post-td-concave-fundamental-entropy]] and [[post-td-bulk-additivity]], so the null-direction conclusion is not asserted from those postulates alone.

## Facts & Assumptions

**Given:** A declared affine feasible slice $F$ of an open convex chart, a $C^2$ concave entropy sum, and an interior point stationary along every feasible exchange direction. For the final conditional clause only, also assume same-constitution homogeneity on an open cone. This is a conditional model deduction; it makes no empirical claim.

[A1] [[post-td-concave-fundamental-entropy]]: Entropy is finite and concave on each specified convex region, additive for the admitted independent separated systems, and $C^2$ only on designated open single-phase charts. Its tagged bulk clause is $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$.

[F1] [[def-td-isolated-compound-feasible-set]]: The feasible set is the model-declared subset fixed by totals, allowed exchange directions, and retained partitions; it need not be convex or attain a maximum unless further conditions or a postulate provide them.

[F2] [[post-td-bulk-additivity]]: The scaling map sends coordinates of tag $c$ to a possibly distinct tag $c^{(\lambda)}$; the statement expressly does not identify $c^{(\lambda)}$ with $c$.

[A3] Additional hypothesis for the last clause only: on the same fixed-constitution chart, $S_c(\lambda x)=\lambda S_c(x)$ for every $\lambda$ in a neighborhood of $1$ with $\lambda x$ in the chart. Neither [A1] nor [F2] states this same-tag identity.

[L1] [[lem-tdmath-constrained-curvature]] (planned item on batch 4; carrier absent at inspection): M2's planned interface is that for differentiable concave $f$ on an open convex $C$, an interior point of $C\cap\{x:Ax=b\}$ whose derivative vanishes on $\ker A$ is a global feasible maximizer; strict concavity gives at most one maximizer; for $C^2$ concave $f$, the Hessian quadratic form is negative semidefinite. The dossier gives a conditional argument, but this planned item has no current production carrier or proof review.

[L2] [[thm-chain-rule-for-total-derivatives]]: The total derivative of a composition is the composition of total derivatives. This applies to the scaling curve and to differentiation of the Euler identity under [A3].

## Proof

1.1 The physical entropy sum is concave on the chart by [A1] and finite additivity under [F2]. Under the stated convex affine-slice hypotheses, [F1] identifies the feasible set and the planned constrained-curvature result [L1] applies to $f=S_{\mathrm{tot}}$: its derivative vanishes on every feasible tangent direction by the given stationarity hypothesis, so $S_{\mathrm{tot}}(x_*)\ge S_{\mathrm{tot}}(y)$ for every $y\in F$. If $S_{\mathrm{tot}}$ is strictly concave on $F$, two distinct maximizers would have a midpoint in $F$ with strictly larger entropy; hence the maximizer is unique. This conclusion is conditional on the stated convex-slice hypotheses and [L1]. [given, A1, F1, F2, L1]

1.2 On each designated $C^2$ concave chart, the Hessian clause of [L1] gives $D^2S_{\mathrm{tot}}(x)[v,v]\le0$ for every tangent vector $v$. Semidefiniteness does not assert that the quadratic form is strictly negative for every nonzero $v$, and therefore does not assert strict concavity or uniqueness. [A1, L1, given]

2.1 Under the additional hypothesis [A3], define $g(\lambda)=S_c(\lambda x)$ near $\lambda=1$. By [A3], $g(\lambda)=\lambda S_c(x)$, so differentiating at $1$ and applying [L2] yields $DS_c(x)[x]=S_c(x)$. This is an identity for one fixed constitution, not a change of material tag. [A3, L2, given]

2.2 Differentiate the identity in step 2.1 in an arbitrary direction $h$. The product and chain rules give $D^2S_c(x)[h,x]+DS_c(x)[h]=DS_c(x)[h]$, hence $D^2S_c(x)[h,x]=0$ for every $h$. In particular, the radial direction has zero Hessian quadratic form and the Hessian is not negative definite on the full cone. [step 2.1, L2, algebra] ∎

## Remarks

The actual entropy postulate uses the distinct tag $c^{(\lambda)}$ and does not identify it with $c$. Therefore [A3] remains an extra premise: the planned unconditional M4 null-direction claim is escalated for owner resolution. A finite-dimensional countermodel is recorded on the companion page.
