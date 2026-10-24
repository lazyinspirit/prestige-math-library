---
id: lem-fixed-vertical-height-relative-morse-handle-normalization
kind: lemma
title: "Relative Morse handle normalization with the full vertical height fixed"
status: published
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-axiom-of-choice", "thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms", "thm-parametric-transversality", "thm-every-smooth-manifold-admits-a-riemannian-metric", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval", "thm-fundamental-theorem-on-flows", "lem-handles-of-equal-index-can-be-attached-on-one-level", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism", "lem-gradient-like-perturbation-separates-adjacent-critical-levels", "lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged", "prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles", "lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type"]
justified_by: []
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: https://arxiv.org/pdf/math/9812086
      locator: "Stage 1 and relative handle setup; the full local constructions are supplied in this proof, rather than assuming surgery or Kirby completeness."
---

## Statement

Assume AC. Let $d\ge4$, and let $V$ be a compact smooth $d$-dimensional bordism with corners, horizontal faces $A_0,A_1$, and vertical face $B\times[0,1]$, with compatible product collar charts fixed. Here $\partial A_i=B\times\{i\}$. There are excellent Morse data with all critical points interior, equal to the specified height $t$ on a fixed smaller vertical product collar, zero and one on the horizontal faces with their prescribed inward collar models. They give a finite handle decomposition whose attaching thickenings lie in the interiors of horizontal levels, away from the fixed vertical collar, retaining the actual outgoing identification. Critical values may be ordered by index while this entire boundary height is fixed. If $V,A_0,A_1$ are connected and $A_0,A_1$ are nonempty, there is such a relative presentation with no handles of index zero or $d$. No fundamental-group assumption or h-cobordism hypothesis is imposed.

## Facts & Assumptions

**Given:** The manifolds, collars, framed embeddings and boundary identifications in the Statement; AC ([[def-axiom-of-choice]]).

[F1] [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] gives the actual bump-supported finite differential-perturbation and local metric construction for compact ordinary triads. [[thm-parametric-transversality]] gives the finite-dimensional perturbation theorem. The vertical-face adaptation is constructed below, not presumed from the ordinary-triad statement.

[F2] [[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]], and [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supply metrics and supported patching. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] and [[thm-fundamental-theorem-on-flows]] give complete supported flows and uniqueness.

[F3] [[lem-handles-of-equal-index-can-be-attached-on-one-level]] supplies the local framed handle-band construction and isotopy invariance. [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]] supplies relative seam rounding.

[F4] [[lem-gradient-like-perturbation-separates-adjacent-critical-levels]] supplies the interior crossing-sphere moving-off construction. [[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]] supplies its actual orbit-constant separating function and value-change formula. Their fixed-vertical-height extension is supplied below.

[F5] [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]] proves zero-handle removal by a rooted spanning tree and transport of later attaching maps. [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]] supplies its collar-supported disk absorption. Below this construction is carried out away from the vertical collar.

## Proof

**Proof technique:** Direct constructions in product collars, retaining the actual boundary maps.

1.1 In the fixed corner and face charts extend the boundary height by the inward horizontal collar coordinate near $A_0$, one minus that coordinate near $A_1$, and $t$ on the vertical collar. These agree in the specified product corner charts: the horizontal inward coordinate there is exactly $t$ or $1-t$. Patch only beyond smaller common collars using [F2], blending with $1/2$ in the compact interior. At a corner use restrictions of ordinary Euclidean bumps to its product quadrant; a finite cover and division by their positive sum give the required partition there. Thus the same finite patching proof applies directly to these corner charts, rather than presuming that a boundary-only partition statement already covers corners. The resulting smooth $h:V\to[0,1]$ has exactly the endpoint fibers $A_0,A_1$, is strictly between zero and one elsewhere, and has nonzero differential near every boundary face and corner. Thus the possible critical set lies in a compact subset of the ordinary interior. [given, F2, construct]

2.1 On that compact set choose finitely many nested interior coordinate charts and bump-supported linear coordinate functions, as in the actual proof of [F1]. Their differential evaluations span the cotangent fiber wherever a critical point is possible. The finite-dimensional evaluation is therefore transverse to the zero section. By [F1] choose an arbitrarily small parameter whose differential is transverse to zero. Compactness and nondegeneracy give finitely many critical points. Independent constant bumps separate their values without changing their Hessians, and the positive value margin on the perturbation support retains the range and endpoint fibers. The result is an excellent Morse function equal to the original height on all protected collars. [F1, F2, step 1.1, construct]

3.1 Choose the metric $dt^2+dr^2+g_B$ on the vertical collar, where $r$ is its inward normal coordinate, and Euclidean metrics on smaller disjoint critical charts; patch elsewhere by [F2]. The negative gradient is tangent to the vertical face and equals $-\partial_t$ there. It has the standard linear Morse model at each critical point and the required horizontal entry and exit signs. Extend it over signed face collars in the product models and cut it off on an ambient carrier. Its spatial modifications have compact support, so [F2] gives complete evolution. An interior trajectory cannot first hit the vertical face in finite time: the unique solution through a hypothetical first-hit point would lie in that boundary face backwards as well, contradicting its interior starting point. [F2, step 2.1, construct]

4.1 Transport framed local unstable disks across the regular bands by this boundary-tangent field. Their compact sphere sections lie away from the vertical collar. Outside small Morse blocks strict descent has a uniform positive lower bound on each compact band. In the blocks the exact exponential Morse flow accounts for infinite-time limits, which can occur only at critical points, never at the noncritical vertical model. Consequently every finite regular transport of a compact attaching thickening stays in a compact subset of the interior of a horizontal level. The local construction in [F3], with its product complement transported by the regular flow, therefore gives the finite relative handle decomposition. All handles attach away from the vertical collar, and the composed outgoing identification is retained. This proves the cornered interface directly; the ordinary closed-face theorem is not invoked outside its hypotheses. [F2, F3, step 3.1, construct]

5.1 For an inverted adjacent critical pair, the compact unstable and stable sphere sections in a regular $(d-1)$-level have dimensions summing to at most $d-2$. The moving-off construction in [F4] uses product tubes and arbitrarily small translations of these compact sections, avoiding the finite projected lower-dimensional sets simultaneously. Choose these tubes inside that level's interior. Its regular-band field shear thus separates the sections with support disjoint from the vertical collar. The resulting no-connection condition gives compact disjoint critical-trajectory closures, by the exact Morse-block argument of [F4]: any noncompact limiting travel would break at a critical point, which would give an excluded connecting trajectory. The interior field change extends by zero on the protected collar. [F2, F4, step 4.1, construct]

6.1 The value-change step needs an additional orbit cutoff because the vertical height is not constant. In addition to the orbit-constant separating function $\beta$ of [F4], choose an orbit-constant $\alpha$ equal to one near both compact critical-trajectory sets and zero near the vertical product trajectories. Construct it on the lower exit level by a bump one near the compact critical exits and zero near its boundary, and extend it along regular trajectories. Near each critical-trajectory set extend it constantly as one. This is smooth by the same exit-continuity argument in the full proof of [F4]: close regular trajectories have exits near the compact critical exits, so the bump is already constant in a neighborhood. A local minimum has an attracting neighborhood with no lower through-exit, where the constant-one extension applies; reverse the argument for a maximum. Thus $d\alpha(X)=d\beta(X)=0$, with $\alpha=0$ on a neighborhood of the fixed vertical collar. [F2, F4, step 5.1, construct]

7.1 If the ordinary interchange formula in [F4] is $G(f,\beta)$, use $g=(1-\alpha)f+\alpha G(f,\beta)$ instead. Away from critical points, $dg(X)=(1-\alpha+\alpha\partial_1G(f,\beta))df(X)<0$. Near the critical sets $\alpha=1$, so this is precisely the desired value interchange and a constant change in each critical chart. Near the vertical face $\alpha=0$, so it is exactly $f$. Band-end identities make it smooth when extended by the old function. Finite adjacent exchanges sort the critical values by index; their inversion number strictly decreases. The boundary height, the field's product model and all endpoint maps are retained throughout. [F4, step 6.1, algebra, construct]

8.1 Assume now that the total bordism and both nonempty horizontal ends are connected. In index order the initial zero/one-handle graph has vertices the incoming component and new balls, and edges the one-handles. It is connected because handles of index at least two have connected attaching regions and cannot connect components. Root a spanning tree at the incoming vertex. Process its edges outward, absorbing each new ball with its incident one-handle by the local disk comparison of [F5]; carry every other attaching map through the resulting stage diffeomorphism. All attaching disks, arcs and comparison collars are compact in horizontal interiors, so the vertical collar is fixed. This removes all zero-handles. [F5, step 4.1, step 7.1, construct]

9.1 Reverse the presentation relative to the connected nonempty outgoing end and perform the same rooted-tree procedure. It deletes only index $d$ and paired index $d-1$ handles in the original direction and transports the rest, so it does not reintroduce removed zero-handles. The face charts and height reverse by $t\mapsto1-t$ during the construction and return to the prescribed ones afterward. This gives the claimed presentation without zero or top handles, retaining the full horizontal and vertical parametrizations. step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1 already establish the existence and rearrangement assertions without the connectivity assumptions used only for this deletion phase. [F5, step 8.1, construct] ∎

## Scope and source attribution

This retains the complete accepted fixed-height construction in `five-dimensional-common-middle-trace-construction.md`, Section 5, including the extra orbit-constant cutoff in the value interchange. All actual ordinary-triad existence, local handle-band, separation, interchange and rooted-tree supplier bodies were read; none is treated as already covering a nonconstant vertical boundary height. This is finite handle normalization, not a generic movie classification.
