---
id: def-r2-conifold-smoothing-and-period-conventions
kind: definition
title: "Local conifold smoothing, vanishing cycle and dual period convention"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-r2-ordinary-double-point-smoothing-model
  - lem-r2-conifold-period-normalization
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-r2-ordinary-double-point-smoothing-model: mathematical-premise
  lem-r2-conifold-period-normalization: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2, §3"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§3, equations (3.3), (3.8)–(3.9), PDF pp. 16–17; the source states but does not prove the local dual-period logarithm."
    - title: "Igor R. Klebanov and Matthew J. Strassler, Supergravity and a Confining Gauge Theory: Duality Cascades and χSB–Resolution of Naked Singularities, hep-th/0007191v4"
      url: "https://arxiv.org/pdf/hep-th/0007191v4"
      locator: "§§7–8, equations (53)–(93), PDF pp. 21–25; noncompact deformed-conifold geometry and tip three-sphere only."
    - title: "Hossein Movasati, A Course in Hodge Theory With Emphasis on Multiple Integrals, §§6.4–6.6"
      url: "https://w3.impa.br/~hossein/myarticles/hodgetheory.pdf"
      locator: "§§6.4–6.6, printed pp. 71–75; vanishing thimbles, counterclockwise meridian, and Picard–Lefschetz formula."
---

## Statement

Let $z$ vary in a punctured disk and let $X_z$ be a compact Calabi–Yau threefold whose local smoothing near one ordinary double point is $w_1^2+w_2^2+w_3^2+w_4^2=z$. Choose the vanishing three-sphere $A_z$ in this local chart and a dual integral three-cycle $B_z$ in a fixed compact gluing with intersection number $A_z\cdot B_z=+1$. Fix a holomorphic three-form $\Omega_z$ by the period coordinate $z=\int_{A_z}\Omega_z$, and fix a branch of $\log z$ on a simply connected sector. These choices define the period convention; reversing the orientation of either cycle or rescaling $\Omega$ changes the corresponding period normalization.

## Facts & Assumptions

**Given:** The one-parameter family, the single central ordinary double point, and the cycles/form of the Statement.

[F1] [[def-gts-compact-calabiyau-manifold-conventions]]: each smooth fiber $X_z$ is a connected compact Kähler complex threefold with holomorphically trivial canonical bundle. The possibly singular central fiber is not called a Calabi–Yau threefold here.

[F2] [[def-gts-polarized-variation-of-hodge-structure-and-period-map]]: a polarized variation consists of a flat integral local system with its Hodge filtration and polarization; its period map records the varying Hodge filtration in the associated fixed reference space.

[F3] [[def-r2-ordinary-double-point-smoothing-model]]: locally $q(w)=\sum_{j=1}^4w_j^2=z$, the vanishing sphere is the real $S^3$, and $\omega_z$ is the Poincare residue satisfying $d(q-z)\wedge\omega_z=dw_1\wedge\cdots\wedge dw_4$.

[F4] [[lem-r2-conifold-period-normalization]]: the local residue can be multiplied by a holomorphic unit so that its integral over $A_z$ is exactly the smoothing coordinate $z$.

[A1] By “fixed compact gluing” we require a smooth proper family on the complement of a Milnor ball that extends over $z=0$, a holomorphic extension of $\Omega$ on that complement, and a locally flat cap for the boundary of the local relative dual chain. This explicit gluing input supplies a closed integral $B_z$ and makes its cap period holomorphic and bounded at $z=0$; it is not asserted to exist for every local ODP.

[A3] On the punctured family, assume the fixed flat polarization, locally constant Hodge numbers, locally free relative de Rham filtration, and base-change hypotheses required by the Gauss–Manin supplier. These conditions concern the smooth family over $z\ne0$ only.

[A2] Use the period-pairing convention $A\cdot B:=-I_{\rm geom}(A,B)$ in middle real dimension three, where $I_{\rm geom}$ is the oriented transverse tangent-frame sign with the frame of $A$ followed by that of $B$ measured against the complex orientation. With the local orientations of [F3], this gives $A_z\cdot B_z=+1$. A counterclockwise meridian is positive.

## Proof

**Given:** A one-node compact gluing satisfying [A1], and the residue and period conventions [F3]–[A2].

1.1 The local vanishing period is $-\pi^2z+O(z^2)$ for the standard residue form, by [[lem-r2-conifold-period-normalization]]. Its leading coefficient is nonzero, so multiplication by the holomorphic unit $z/\int_{A_z}\Omega_z^0$ normalizes any initial local holomorphic volume form $\Omega_z^0$ to have period exactly $z$. This also leaves $q(w)=z$ unchanged. [F3, F4, given, algebra]

1.2 By [A1] and [A3], the family over the punctured disk satisfies the proper-submersion, polarization, Hodge-number, relative-filtration and base-change hypotheses used for the period local system in [F2]. The central singular fiber is excluded from this smooth-family assertion. [F1, F2, A1, A3]

1.3 At $w=(0,0,0,\sqrt z)$, the tangent frames of the real sphere and local relative chain are $(\partial_{x_1},\partial_{x_2},\partial_{x_3})$ and $(\partial_{y_1},\partial_{y_2},\partial_{y_3})$. Reordering this combined frame to the complex orientation $(x_1,y_1,x_2,y_2,x_3,y_3)$ requires three transpositions, so $I_{\rm geom}(A,B)=-1$ and [A2] gives $A\cdot B=+1$. The cap in [A1] is outside the local region and disjoint from $A$, so it leaves this pairing unchanged. Capping the local boundary therefore gives the required closed integral cycle; all global existence and compactness are precisely the input [A1]. [F3, A1, A2, algebra]

2.1 Fixing the local branch of $\log z$ and the cap fixes the period normalization. If either cycle orientation is reversed, its integral changes sign; if $\Omega$ is multiplied by a nonzero constant, both periods scale by that constant. These are changes of convention, not invariant numerical predictions about an unspecified global compactification. [given, A1, algebra] ∎

## Remarks

The local equation and vanishing-period coordinate can coexist because the form, rather than the smoothing parameter, is rescaled by a holomorphic unit. The positive sign of the later logarithmic coefficient is tied to the explicit period-pairing convention [A2]. The common phrase “intersection number” is sign-ambiguous in odd middle dimension unless its order convention is supplied; the plan-spec fixed $A\cdot B=+1$ but did not define it. See the local sign check in [[lem-r2-conifold-dual-cycle-monodromy]].

