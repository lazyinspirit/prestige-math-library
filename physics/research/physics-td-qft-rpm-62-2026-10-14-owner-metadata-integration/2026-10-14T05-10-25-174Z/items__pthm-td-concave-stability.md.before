---
id: pthm-td-concave-stability
kind: physics-theorem
title: Concave entropy, constrained maxima, and local stability
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: C2 single-phase entropy charts and explicitly convex affine slices of permitted exchange coordinates; the radial-curvature conclusion applies only to the separately designated common-constitutive-law bulk cone with its adopted entropy transport and common reference conventions.
deps:
  - def-td-equilibrium-state-domain
  - def-td-isolated-compound-feasible-set
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-common-bulk-constitutive-law
  - lem-tdmath-concave-affine-maximizer-and-hessian
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-common-bulk-constitutive-law: physical-assumption
  lem-tdmath-concave-affine-maximizer-and-hessian: mathematical-premise
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

The mathematical input is supplied by [[lem-tdmath-concave-affine-maximizer-and-hessian]] on the stated region and admissible affine segments.

There is a further conditional scaling conclusion. On a designated open single-phase bulk cone $C_c\subseteq D_c$ with the common constitutive law adopted by [[post-td-common-bulk-constitutive-law]], the $C^2$ entropy Hessian has zero radial direction: $D^2S_c(x)[h,x]=0$ for every $x\in C_c$ and every vector $h$. This branch adopts coordinate-preserving entropy transport between the distinct scaled-system tag and one fixed material-law chart, with common species, units and reference conventions. The null-direction conclusion is not asserted for the general tagged family from [[post-td-concave-fundamental-entropy]] and [[post-td-bulk-additivity]] alone.

## Facts & Assumptions

**Given:** A declared affine feasible slice $F$ of an open convex chart, a $C^2$ concave entropy sum, and an interior point stationary along every feasible exchange direction. For the final conditional clause only, adopt the common-constitutive-law bulk postulate on its designated open single-phase cone $C_c$. This is a conditional model deduction; it makes no empirical claim.

[A1] [[post-td-concave-fundamental-entropy]]: Entropy is finite and concave on each specified convex region, additive for the admitted independent separated systems, and $C^2$ only on designated open single-phase charts. Its tagged bulk clause is $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$.

[F1] [[def-td-isolated-compound-feasible-set]]: The feasible set is the model-declared subset fixed by totals, allowed exchange directions, and retained partitions; it need not be convex or attain a maximum unless further conditions or a postulate provide them.

[F2] [[post-td-bulk-additivity]]: The scaling map sends coordinates of tag $c$ to a possibly distinct tag $c^{(\lambda)}$; the statement expressly does not identify $c^{(\lambda)}$ with $c$.

[A3] [[post-td-common-bulk-constitutive-law]]: For the radial clause only, the designated open single-phase cone $C_c$ admits every positive scaling, and the coordinate-preserving transport $j_{c,\lambda}(y)=y$ from its scaled-system chart preserves entropy: $S_{c^{(\lambda)}}(y)=S_c(j_{c,\lambda}(y))$. This is additional adopted physical constitutive information with common species, units and energy/entropy reference conventions; the distinct system tags are retained.

[L1] [[lem-tdmath-concave-affine-maximizer-and-hessian]]: differentiability and concavity along each admissible segment give $f(y)\le f(x)+Df(x)(y-x)$. On an affine feasible set, stationarity on $\ker A$ gives a global maximum when every segment from the stationary point to a feasible point is admitted and satisfies concavity. Strict concavity on a convex feasible slice gives uniqueness. At a $C^2$ point, local midpoint concavity implies a negative-semidefinite Hessian. The supplier assumes no convexity outside the explicitly used region and no physical attainment postulate.

[L2] [[thm-chain-rule-for-total-derivatives]]: The total derivative of a composition is the composition of total derivatives. This applies to the scaling curve and to differentiation of the Euler identity under [A3].

## Proof

1.1 The physical entropy sum is concave on the specified chart $C$ and additive for the admitted separated systems by [A1]. The given affine-slice hypothesis and [F1] identify $F=C\cap\{x:Ax=b\}$; since $C$ is convex, each segment between feasible points stays in $C$ and in the affine slice. Thus for every $y\in F$, the segment from $x_*$ to $y$ is an admissible entropy segment, and the given stationarity on $\ker A$ meets [L1]. Its supporting bound gives $S_{\mathrm{tot}}(y)\le S_{\mathrm{tot}}(x_*)$, so $x_*$ is a global maximum. If $S_{\mathrm{tot}}|_F$ is strictly concave, [L1] gives uniqueness because $F$ is convex. These are claims on the stated chart and feasible slice, not an assertion that all of $D_c$ is convex. [given, A1, F1, L1, algebra]

1.2 At every $x\in C$ and every vector $v$, openness permits both $x\pm tv\in C$ for sufficiently small $|t|$; concavity gives $S_{\mathrm{tot}}(x+tv)+S_{\mathrm{tot}}(x-tv)\le2S_{\mathrm{tot}}(x)$. The adopted $C^2$ chart hypothesis therefore meets [L1]'s local Hessian clause and gives $D^2S_{\mathrm{tot}}(x)[v,v]\le0$. Semidefiniteness does not assert strict negative curvature in every nonzero direction, strict concavity, or uniqueness without their further hypotheses. [A1, L1, given, algebra]

1.3 For $x\in C_c$ and $\lambda>0$, [A3] gives $S_c(\lambda x)=S_{c^{(\lambda)}}(\delta_\lambda x)$ by coordinate-preserving entropy transport, and [A1] gives $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$. Thus the same function on $C_c$ is degree-one homogeneous even though the physical system tags remain distinct under [F2]. Define $g(\lambda)=S_c(\lambda x)$ near $1$; its derivative exists on this smooth open chart, and differentiating $g(\lambda)=\lambda S_c(x)$ at $1$ using [L2] gives $DS_c(x)[x]=S_c(x)$ for every $x\in C_c$. [given, A1, A3, F2, L2]

2.1 Differentiate the identity in step 1.3 in an arbitrary direction $h$. The product and chain rules give $D^2S_c(x)[h,x]+DS_c(x)[h]=DS_c(x)[h]$, hence $D^2S_c(x)[h,x]=0$ for every $h$. In particular, the radial direction has zero Hessian quadratic form and the Hessian is not negative definite on the full cone. [step 1.3, L2, algebra] ∎

## Remarks

The actual entropy postulate uses the distinct tag $c^{(\lambda)}$ and does not identify it with $c$. The additional common-constitutive-law branch [A3] explicitly supplies the transport needed for the M4 radial conclusion; the general tagged postulates alone do not supply it. The exact concavity prerequisite [L1] supplies the affine-maximum and Hessian-sign clauses on the admitted chart. A finite-dimensional countermodel is recorded on the companion page.
