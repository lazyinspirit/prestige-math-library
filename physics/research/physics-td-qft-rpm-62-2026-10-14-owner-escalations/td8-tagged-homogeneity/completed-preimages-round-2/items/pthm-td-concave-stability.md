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
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.9.1–2.9.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Statement

Let $C$ be an open convex region of dimensionless numerical coordinates for a compound of independent separated systems, and let $S_{\mathrm{tot}}:C\to\mathbb R$ be the adopted $C^2$ concave total entropy on a smooth single-phase chart. Let the feasible set be the affine slice $F=C\cap\{x:Ax=b\}$ for a fixed real linear map $A$ and vector $b$. For the following conclusions, assume the mathematical input that for differentiable concave $f$ on an open convex $C$, an interior point of $C\cap\{x:Ax=b\}$ whose derivative vanishes on $\ker A$ is a global feasible maximizer; strict concavity gives at most one maximizer; for $C^2$ concave $f$, the Hessian quadratic form is negative semidefinite. Under this input, if $x_*\in F$ is interior relative to this slice and $DS_{\mathrm{tot}}(x_*)$ vanishes on $\ker A$, then $x_*$ is a global entropy maximum on $F$. If $S_{\mathrm{tot}}$ is strictly concave on $F$, that maximum is unique. The Hessian conclusion does not by itself give strict stability.

The current batch-4 item [[lem-tdmath-constrained-curvature]] does not state this input; the unresolved interface is recorded in the facts and author notes.

There is a further conditional scaling conclusion. If, on one fixed-constitution smooth chart that is an open cone, the same function satisfies $S_c(\lambda x)=\lambda S_c(x)$ for $\lambda$ near $1$, then the Hessian bilinear form has zero radial direction: $D^2S_c(x)[h,x]=0$ for every vector $h$. This extra same-constitution identity is not part of the tagged scaling rule in [[post-td-concave-fundamental-entropy]] and [[post-td-bulk-additivity]], so the null-direction conclusion is not asserted from those postulates alone.

## Facts & Assumptions

**Given:** A declared affine feasible slice $F$ of an open convex chart, a $C^2$ concave entropy sum, and an interior point stationary along every feasible exchange direction. For the final conditional clause only, also assume same-constitution homogeneity on an open cone. This is a conditional model deduction; it makes no empirical claim.

[A1] [[post-td-concave-fundamental-entropy]]: Entropy is finite and concave on each specified convex region, additive for the admitted independent separated systems, and $C^2$ only on designated open single-phase charts. Its tagged bulk clause is $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$.

[F1] [[def-td-isolated-compound-feasible-set]]: The feasible set is the model-declared subset fixed by totals, allowed exchange directions, and retained partitions; it need not be convex or attain a maximum unless further conditions or a postulate provide them.

[F2] [[post-td-bulk-additivity]]: The scaling map sends coordinates of tag $c$ to a possibly distinct tag $c^{(\lambda)}$; the statement expressly does not identify $c^{(\lambda)}$ with $c$.

[A3] Additional hypothesis for the last clause only: on the same fixed-constitution chart, $S_c(\lambda x)=\lambda S_c(x)$ for every $\lambda$ in a neighborhood of $1$ with $\lambda x$ in the chart. Neither [A1] nor [F2] states this same-tag identity.

[F3] [[lem-tdmath-constrained-curvature]]: The current carrier's Statement gives second-order tests for local minima on an affine slice from the sign of a continuous Hessian quadratic form; it does not state the planned first-order global-maximum result for concave functions or the Hessian-semidefiniteness conclusion.

[A2] Conditional mathematical input required by the TD4 design's M2 route: for differentiable concave $f$ on an open convex $C$, an interior point of $C\cap\{x:Ax=b\}$ whose derivative vanishes on $\ker A$ is a global feasible maximizer; strict concavity gives at most one maximizer; for $C^2$ concave $f$, the Hessian quadratic form is negative semidefinite. The current [[lem-tdmath-constrained-curvature]] carrier does not state this interface, as recorded in [F3], so the result below remains conditional and escalated.

[L2] [[thm-chain-rule-for-total-derivatives]]: The total derivative of a composition is the composition of total derivatives. This applies to the scaling curve and to differentiation of the Euler identity under [A3].

## Proof

1.1 The physical entropy sum is concave on the chart and additive for the admitted separated systems by [A1]. Under the stated convex affine-slice hypotheses, [F1] identifies $F$ and the stationarity assumption says $DS_{\mathrm{tot}}(x_*)$ vanishes on $\ker A$. Conditional on the exact planned interface [A2], its concavity clause therefore gives $S_{\mathrm{tot}}(x_*)\ge S_{\mathrm{tot}}(y)$ for every $y\in F$. The present M2 carrier [F3] supplies a different, second-order local-minimum statement, so this global-maximum conclusion is not established by that carrier. [given, A1, A2, F1, F3]

1.2 Conditional on [A2], the $C^2$ concavity clause gives $D^2S_{\mathrm{tot}}(x)[v,v]\le0$ for every vector $v$. Semidefiniteness does not assert that the quadratic form is strictly negative for every nonzero $v$, and therefore does not assert strict concavity or uniqueness. [A1, A2, given]

1.3 Under the additional hypothesis [A3], define $g(\lambda)=S_c(\lambda x)$ near $\lambda=1$. By [A3], $g(\lambda)=\lambda S_c(x)$, so differentiating at $1$ and applying [L2] yields $DS_c(x)[x]=S_c(x)$. By [F2], this fixed-tag identity is additional to the adopted scaling, which may change the material tag. [A3, F2, L2, given]

2.1 Differentiate the identity in step 1.3 in an arbitrary direction $h$. The product and chain rules give $D^2S_c(x)[h,x]+DS_c(x)[h]=DS_c(x)[h]$, hence $D^2S_c(x)[h,x]=0$ for every $h$. In particular, the radial direction has zero Hessian quadratic form and the Hessian is not negative definite on the full cone. [step 1.3, L2, algebra] ∎

## Remarks

The actual entropy postulate uses the distinct tag $c^{(\lambda)}$ and does not identify it with $c$. Therefore [A3] remains an extra premise: the planned unconditional M4 null-direction claim is escalated for owner resolution. The current M2 carrier also mismatches the planned concavity interface in [A2]; that independent mismatch is escalated. A finite-dimensional countermodel is recorded on the companion page.
