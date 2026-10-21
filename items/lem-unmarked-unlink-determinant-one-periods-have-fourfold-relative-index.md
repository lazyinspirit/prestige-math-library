---
id: lem-unmarked-unlink-determinant-one-periods-have-fourfold-relative-index
kind: lemma
title: Unmarked unlink determinant-one periods have fourfold relative index
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four
  - thm-asd-deformation-complex-index-formula
  - thm-charge-one-self-dual-su-two-connections-on-the-round-four-sphere-are-bpst
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-poincare-lefschetz-duality
  - thm-general-stokes-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector, sections 2.5 and 3.2
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
---

## Statement

Assume full AC. On the standard one- or two-component unlink in the oriented three-sphere use trivial sheet data, trace-zero meridians and the determinant-one gauge group preserving the singular reduction. Normalize topological energy by the fundamental trace, so an ordinary charge-one insertion has energy $8\pi^2$. Every relative gauge period has energy and relative deformation index
$$ (\mathcal E,I)=(4\pi^2 d,4d),\qquad d\in\mathbb Z. $$
Here the critical deformation and stabilizer spaces at a reducible limit are retained as finite-dimensional augmentations on both sides of the comparison. The assertion is a relative index statement, not the Fredholm index of an unaugmented operator at a degenerate end. Every nonconstant unperturbed finite-energy cylinder between flat critical points in the connected unlink critical interval has positive period and therefore relative index at least four. There is no finiteness assertion about classes of a fixed index.

## Facts & Assumptions

[F1] The invariant operator and finite-rank augmentations are constructed in [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]]. Compact cut-and-paste identifies relative indices with comparison sphere indices, including the flat reference stabilizer, by [[lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four]]. Its lower bound alone is not an exact singular-generator calculation.

[F2] The ordinary charge-one unbased index is five, and the ordinary flat sphere index is minus three, by [[thm-asd-deformation-complex-index-formula]] after orientation reversal. The explicit smooth charge-one family and its curvature density are supplied by [[thm-charge-one-self-dual-su-two-connections-on-the-round-four-sphere-are-bpst]].

[F3] Sphere degree classifies maps to the quaternionic unit sphere. Integral duality identifies the relative third cohomology of a connected oriented link exterior with the integers. Transgression is Stokes. [[thm-based-sphere-maps-are-classified-by-geometric-degree]] [[thm-poincare-lefschetz-duality]] [[thm-general-stokes-theorem]] Full AC is inherited through these analytic suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The specified standard unlink background. An ordinary generator is oriented to increase charge. Use the same orientation for the singular generator below.

1.1 **Which gauges are allowed.** In a normal chart the two sheet trivializations are related by conjugation by the meridional rotation. A determinant-one gauge extends on both sheets exactly when its value on the singular core commutes with this rotation. Its value is therefore in the axis circle in $SU(2)$, not the other component of its normalizer. For the present trivial sheet cover this circle has no longitudinal twist. A gauge restricted to the $j$th component has an integer winding $m_j$. Constant end framings and constant axis rotations have zero winding; they do not supply half of a winding. This uses the actual determinant-one group and does not import the twisted earring component group. [F1, given, construct]

2.1 **A genuine local winding-one generator.** In a small ball meeting the singular circle in one straight arc, pass to the double cover with involution a half turn about that arc. Collapse its boundary equivariantly to obtain $S^3$ with fixed $S^1$. Identify this sphere with unit quaternions, so the involution is $q\mapsto iqi^{-1}$. The map $g(q)=q$ is equivariant, has degree one, and on the fixed circle has winding one. Use a stereographic chart centered at a fixed point and a radial compression constant near the collapsed boundary to make it a smooth map supported in the original ball. It descends to an allowed singular gauge and is the identity outside that ball. Call it $h_j$. Its orientation reverse realizes winding minus one. On the double cover this is the charge-one quaternion clutch; its orbifold curvature integral is half the ordinary integral, because integration on the complement of the measure-zero fixed surface is integration over a two-sheeted cover. Hence $\mathcal E(h_j)=4\pi^2$. In an ordinary ball the usual degree-one gauge $g_0$ has $\mathcal E(g_0)=8\pi^2$. These follow also from $\int_{S^3}\operatorname{tr}(g^{-1}dg)^3=-24\pi^2$ and the cubic transgression; the same factor of one half is taken on the singular quotient, not on an arbitrary gauge map in the exterior. [F2, F3, step 1.1, construct, algebra]

3.1 **The exact singular index, with its reference mode.** Use the charge-one model centered on the fixed plane. The half turn lifts by the adjoint action of $i$; its quaternionic formula in [F2] is equivariant. Its ordinary obstruction is zero by the round-sphere square identity $2d_A^+d_A^{+*}=\nabla_A^*\nabla_A+4$ on self-dual two-forms. Its ordinary stabilizer is zero, since a parallel axis would make its curvature abelian and harmonic on the sphere. Thus its ordinary tangent space has dimension five by [F2]. The four translations and dilation give five independent classes: the density $48\lambda^4/(\lambda^2+|y-z|^2)^4$ has independent derivatives in those five parameters, while a gauge variation leaves the density unchanged. They therefore span the tangent space. The half turn fixes exactly the two translations tangent to its fixed plane and dilation. Its invariant unbased index is consequently three; averaging preserves the zero obstruction. The flat equivariant reference has no first or second cohomology and has exactly one constant invariant adjoint vector, the axis. Its index is minus one. Relative index excision in [F1] now gives $I(h_j)=3-(-1)=4$, exactly. Similarly $I(g_0)=5-(-3)=8$. This calculation applies to the comparison clutch without requiring an ASD representative in the original cylinder class. [F1, F2, step 2.1, construct, algebra]

4.1 **These generators exhaust the periods.** For any allowed gauge $g$, multiply by the inverses of the local $h_j^{m_j}$. The new restriction has winding zero on each core, and its angle lifts contract to the constant section. Extend this contraction to a smaller normal tube using invariant radial cutoffs and finitely many small logarithmic changes. The resulting gauge equals one near every core. The remaining exterior is a connected compact oriented three-manifold with its standard finite unlink handle model. Its gauge fiber is $SU(2)$ with inner-conjugation transitions. These transitions act trivially on $\pi_3(SU(2))$. Since $\pi_1(SU(2))=\pi_2(SU(2))=0$, trivialize a section relative to the boundary on its two-skeleton. The remaining three-cell degrees form a relative third cochain; changes of the two-skeleton homotopy add a coboundary. Thus its component is represented by an integer in $H^3(X,\partial X;\mathbb Z)=\mathbb Z$, realized by $g_0^k$ in an exterior ball. Only generation is needed here: a possible relation introduced by a loop of restriction sections cannot create a new period. Both energy transgression and relative index are additive under concatenation; for index this is precisely the block-rotation gluing comparison in [F1], with the same finite end augmentations on the two sides. Therefore $\mathcal E(g)=8\pi^2k+4\pi^2\sum_jm_j$ and $I(g)=8k+4\sum_jm_j$. Every period has the asserted form. No assertion that $k$ and the $m_j$ uniquely classify components is used. [F1, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **Reference paths and the reducible walls.** For two components the flat critical quotient is represented by meridians $i$ and $\cos\theta\,i+\sin\theta\,j$, $0\le\theta\le\pi$. This is a smooth family of actual flat bundles on the interval. Parallel transport in the parameter direction identifies them. On the resulting reference cylinder curvature has only a temporal component, so its Chern--Weil square and energy period are zero. For one component the reference is constant. Near either two-component wall use the framed disk $q\mapsto \cos|q|\,i+(\sin|q|/|q|)(q_1j+q_2k)$ before quotienting its axis circle. Retain its two critical modes and its one stabilizer mode. In the interior retain its one critical mode and no infinitesimal stabilizer. Thus the virtual critical dimension is one in both descriptions; finite augmentation, rather than inversion of an eigenvalue tending to zero, compares these charts. Index differences for another relative class have the same finite endpoint spaces, which cancel by excision. They are exactly step 4.1's periods. For an unperturbed ASD cylinder the flow identity is $\mathcal E=2\int\|\partial_tB\|_2^2$. Since the critical Chern--Simons value is constant along the interval, a nonconstant cylinder has strictly positive period. Step 4.1 makes its relative index at least four. Constant axis rotations, central signs, and the retained stabilizer modes have zero energy and do not alter this relative index statement. [F1, F3, step 4.1, construct, algebra] ∎

## Source notes

This argument supplies the unmarked internal-cut convention needed in the cyclic skein cap. It retains integer core winding and calibrates its generator explicitly. It uses the accepted ordinary and singular analytic suppliers at their stated extents; it makes no claim of new acceptance of those suppliers or of the cap, exact triangle, or original spectral sequence.
