---
id: lem-tgr-isometry-natural-tensor-invariance
kind: lemma
title: Natural tensors under Killing isometries
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-gr-smooth-lorentzian-objects, def-gr-killing-field, thm-flow-box-theorem, def-lie-derivative-of-a-tensor-field, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, cor-mean-value-theorem]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-flow-box-theorem: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.2.3, 2.3.3 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
---

## Statement

Let $(M,g,N_0)$ be a smooth time-oriented Lorentzian four-manifold
[[def-gr-smooth-lorentzian-objects]], let $O\subseteq M$ be open, and let
$\xi$ be a smooth nowhere-zero vector field on $O$ satisfying
$\nabla_{(a}\xi_{b)}=0$ for the unique metric-selected connection $\nabla$
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Its local flow
$\Phi_s$ exists on the open flow
domains supplied by [[thm-flow-box-theorem]]. On every common flow domain,
$\Phi_s$ is a local isometry and preserves $\nabla$ and $\xi$. Consequently
it preserves the curvature tensor $R$ of
[[def-gr-curvature-tensor-and-derived-tensors]], all finite covariant
derivatives of $R$ and $\xi$, and every tensor or scalar obtained from these
fields by finitely many tensor products, contractions, and smooth scalar
operations. The assertion is local; it assumes no complete flow or global
isometry group. It makes no claim about arbitrary quantum observables or their
analytic representation by local curvature data.

## Facts & Assumptions

**Given:** A smooth Lorentzian metric, its metric-selected connection, and a
smooth nowhere-zero Killing vector field $\xi$ on an open set.

[F1] A nowhere-zero smooth vector field has a local flow and flow-box
coordinates ([[thm-flow-box-theorem]]); $\xi$ is nowhere zero by hypothesis.
The Killing condition means $\mathcal L_\xi g=0$
([[def-gr-killing-field]]).

[F2] The Lie derivative of a tensor is the derivative of its pullback by the
local flow ([[def-lie-derivative-of-a-tensor-field]]).

[F3] The metric-selected connection is the unique torsion-free metric-
compatible connection ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F4] Curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$;
it is tensorial, and its lowered/Ricci/scalar tensors are defined by the
metric contractions in [[def-gr-curvature-tensor-and-derived-tensors]] and
[[thm-gr-curvature-tensoriality-and-coordinate-formula]].

[F5] A differentiable real function with zero derivative on an interval is
constant ([[cor-mean-value-theorem]]).

## Proof

1.1 By the equivalent covariant characterization of a Killing field in
[[def-gr-killing-field]], and metric compatibility and torsion-freeness,
$(\mathcal L_\xi g)(X,Y)=g(\nabla_X\xi,Y)+g(X,\nabla_Y\xi)$: expand the Lie
derivative from its flow definition, use
$[\xi,X]=\nabla_\xi X-\nabla_X\xi$, and cancel the two $\nabla_\xi$
terms with metric compatibility. Thus $\nabla_{(a}\xi_{b)}=0$ implies
$\mathcal L_\xi g=0$. The local flow identity
$\Phi_{s+h}=\Phi_h\circ\Phi_s$ and the pullback order give
$$\frac{d}{ds}\Phi_s^*g=\Phi_s^*(\mathcal L_\xi g)=0.$$
In local tensor components [F5] makes each component constant in $s$;
since $\Phi_0$ is the identity, $\Phi_s^*g=g$. Hence $\Phi_s$ is a local
isometry. [given, F1, F2, F3, F5, algebra]

2.1 Define the pulled-back connection by
$(\Phi_s^*\nabla)_XY:=\Phi_{s*}^{-1}(\nabla_{\Phi_{s*}X}\Phi_{s*}Y)$.
A diffeomorphism preserves Lie brackets, so its pullback connection has zero
torsion whenever $\nabla$ does. Since $\Phi_s^*g=g$, metric compatibility of
$\nabla$ also makes $\Phi_s^*\nabla$ compatible with $g$. The uniqueness in
[F3] gives $\Phi_s^*\nabla=\nabla$. The flow composition law also gives
$\Phi_{s*}\xi=\xi$. [step 1.1, F1, F3, algebra]

3.1 Substituting $\Phi_s^*\nabla=\nabla$ and $\Phi_{s*}\xi=\xi$ into the
curvature definition [F4] gives $\Phi_s^*R=R$. Pullback commutes with tensor
products and contractions by their slot definitions, and the preserved
connection makes it commute with each covariant derivative. Repeating these
identities proves preservation of every finite covariant derivative and
contraction stated above; composing preserved scalar components with a smooth
function preserves the resulting scalar invariant. [step 2.1, F4, algebra] ∎
