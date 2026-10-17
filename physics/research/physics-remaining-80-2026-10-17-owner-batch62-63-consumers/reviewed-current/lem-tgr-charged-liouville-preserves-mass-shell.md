---
id: lem-tgr-charged-liouville-preserves-mass-shell
kind: lemma
title: Charged Liouville transport preserves the future massive shell
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgr-charged-liouville-data
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - def-countable-choice
dependency_roles:
  def-tgr-charged-liouville-data: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Igor Bogush, Kirill Kobialko and Dmitri Gal’tsov, Constructing massive particles surfaces in static spacetimes, arXiv:2402.03266v1, §II"
      url: https://arxiv.org/html/2402.03266
---

## Statement

For the smooth Lorentzian data, $m>0$, $q\in\mathbb R$, $F=dA$, and charged
transport vector field defined in [[def-tgr-charged-liouville-data]], the set
$\mathcal P_M^+(O)$ is a smooth hypersurface of $TO$, and $\mathcal L_{F,q}$
is tangent to it. Hence its restriction to the future massive shell is a
well-defined smooth vector field. No mass-shell measure or particle
normalization is asserted.

## Facts & Assumptions

**Given:** The Lorentzian manifold, Levi–Civita connection, future orientation,
positive rest energy $M=mc^2$, antisymmetric field $F=dA$, and charged
transport field of the Definition.

[F1] [[def-tgr-charged-liouville-data]]: $\mathcal P_M^+(O)$ is the future part
of the level set $C(x,P):=g_x(P,P)+M^2=0$, and the transport field has
horizontal velocity $P$ and covariant vertical acceleration
$cqF^a{}_bP^b$.

[F2] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]:
in ZF, a smooth map between open subsets of equal-dimensional Euclidean spaces
with invertible derivative at a point is a diffeomorphism between suitable
open neighborhoods of that point and its image.

[A1] $g$ is smooth and nondegenerate with signature $(-,+,+,+)$,
$\nabla g=0$, $M>0$, and $F_{ab}=-F_{ba}$.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. This is the inherited foundational assumption recorded by the actual
draft stationary thermal geometry carrier; the calculation below uses no
stronger choice principle.

## Proof



1.1 Fix $(x_0,P_0)$ with $C(x_0,P_0)=0$. Since $M>0$, $P_0\ne0$; by
nondegeneracy of $g_{x_0}$ there is a tangent vector $V$ with
$g_{x_0}(P_0,V)\ne0$. In any bundle chart around $(x_0,P_0)$, choose a fiber
coordinate direction $P^j$ on which this nonzero covector has a nonzero
component. The map from the eight chart coordinates to the four base
coordinates, $C$, and the other three fiber coordinates has Jacobian
determinant equal, up to sign, to $\partial C/\partial P^j=2g_{jb}P^b\ne0$.
By [F2] it is a local diffeomorphism, so $C=0$ is locally a smooth
codimension-one coordinate slice. The future timelike sheet is an open
component of this level set. The supplied tangent-bundle structure carries
[A2]. [given, F1, F2, A1, A2, algebra]

2.1 The differential of $C$ along $\mathcal L_{F,q}$ is computed using the
covariant horizontal derivative and $\nabla g=0$:
$$dC(\mathcal L_{F,q})=2g(P,cqF^\sharp(P))=2cqP^aF_{ab}P^b=0.$$
The last contraction vanishes because $P^aP^b$ is symmetric in $a,b$ while
$F_{ab}$ is antisymmetric. Thus $\mathcal L_{F,q}$ lies in the kernel of
$dC$, which is the tangent space to the regular level set from step 1.1; the
future sheet is open in that set, so the vector field is tangent there as
well. Its restriction is therefore well defined. [given, F1, A1, A2, step 1.1, algebra] ∎
