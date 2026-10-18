---
id: lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base
kind: lemma
title: "Framed circles in a four-dimensional two-handle trace move to its fixed base"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-axiom-of-choice", "thm-relative-whitney-approximation-for-manifold-valued-maps", "thm-whitney-approximation-for-manifold-valued-maps", "thm-parametric-transversality", "lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy", "lem-isotopy-extension-for-a-compact-source-with-boundary", "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval", "thm-seifert-van-kampen", "lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction", "thm-collar-neighborhood-theorem"]
justified_by: []
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: https://arxiv.org/pdf/math/9812086
      locator: "Stage 1 and relative handle setup; the full local constructions are supplied in this proof, rather than assuming surgery or Kirby completeness."
---

## Statement

Assume AC. Let $N$ be a connected nonempty compact smooth oriented three-manifold, and let $W$ be a finite four-dimensional two-handle trace from $N$, with its full external boundary collar fixed. Every smooth framed circle in $\operatorname{int}W$ avoiding that protected collar is ambiently isotopic, with compact support outside it, to a circle in a pushed-in copy of $N$. The target circle may avoid the old finite attaching link. Its prescribed oriented rank-three normal framing is represented, up to homotopy and isotopy of its small tubular attaching embedding, by an integral rank-two framing in $N$ plus the level-normal line. No condition on $\pi_1(N)$ or on the circle's class is imposed. More generally, freely homotopic embedded circles in a smooth manifold of dimension $d\ge4$ are isotopic whenever their homotopy lies in a prescribed relatively compact open set; the isotopy may be supported in that set. Every loop class in a three-manifold has an embedded representative avoiding a prescribed finite link.

## Facts & Assumptions

**Given:** The manifolds, collars, framed embeddings and boundary identifications in the Statement; AC ([[def-axiom-of-choice]]).

[F1] [[thm-relative-whitney-approximation-for-manifold-valued-maps]] smooths a homotopy relative to a neighborhood of its stationary endpoints. The actual proof of [[thm-whitney-approximation-for-manifold-valued-maps]] supplies a finite-dimensional Euclidean embedding of the target and a smooth neighborhood retraction; those constructed data are used below.

[F2] [[thm-parametric-transversality]] gives a null set of bad parameters when the full finite-dimensional evaluation is transverse. The polynomial interpolation used to make that evaluation submersive is proved below.

[F3] [[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]] extends compact circle isotopies with prescribed neighborhood support. [[lem-isotopy-extension-for-a-compact-source-with-boundary]] applies to compact full-dimensional tubular product embeddings with boundary in the boundaryless interior. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] gives their supported smooth ambient flows.

[F4] [[thm-seifert-van-kampen]] identifies the group of a handle attachment as the pushout of the old stage and a contractible handle over the connected attaching region.

[F5] [[lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction]] states that $SO(2)	o SO(3)$ surjects on fundamental groups and proves it by a Stiefel disk filling and complement-frame transport. [[thm-collar-neighborhood-theorem]] supplies the collars used to push auxiliary homotopies into the interior.

## Proof

**Proof technique:** Direct constructions in product collars, retaining the actual boundary maps.

1.1 First take embedded endpoint circles in a $d$-manifold, $d\ge4$, and a continuous free homotopy with compact image in a prescribed relatively compact open set $O$. Reparametrize it to be constant near both endpoints, extend constantly to an open parameter interval, and apply [F1] there relative to closed endpoint neighborhoods. Restriction gives a smooth homotopy $H:[0,1]\times S^1\to O$ with the specified stationary ends. Write $j:O\to\mathbb R^a$ and $R:U\to j(O)$ for the embedding and retraction constructed in [F1]. Along the compact image, $dR$ has rank $d$ because $R$ fixes $j(O)$; retain a uniform neighborhood with that rank. [given, F1, construct]

1.2 Let $e:S^1\to\mathbb R^2$ be the round embedding. Polynomials of degree at most three in its two coordinates prescribe values and first derivatives independently at any two distinct points. Indeed choose affine $\lambda$ zero at the second point and nonzero at the first; multiply a suitable affine Taylor polynomial by $\lambda^2$ to prescribe the first jet at the first while killing it at the second. Interchanging the points and adding gives arbitrary first jets at both. Along a single circle point its tangent derivative can therefore also be prescribed. For a polynomial basis $P_\nu$, ambient coordinate vectors $e_\alpha$, and a smooth $\beta(s)$ zero near the ends and positive elsewhere, define $H_z(s,t)=j^{-1}R(jH(s,t)+\beta(s)\sum_{\nu,\alpha}z_{\nu\alpha}P_\nu(e(t))e_\alpha)$. Small parameters keep the compact image in $O$. This is submersive on the needed value/first-jet evaluations at one or two distinct points: first prescribe ambient value variations, then derivative variations to cancel the extra derivative-of-$dR$ terms, and apply the surjective $d(j^{-1}R)$. [F1, step 1.1, construct, algebra]

1.3 The zero-velocity stratum of the curve one-jet bundle has codimension $d$ on the two-dimensional source $(s,t)$. The diagonal of $O\times O$ has codimension $d$ on the three-dimensional same-parameter source $(s,t,t')$, $t\ne t'$. By [F2] one small parameter avoids both strata: their transverse inverse images have negative dimension, since $d\ge4$. The noncompact off-diagonal source is permitted by [F2]; it need not be replaced by a compact configuration space. Endpoint neighborhoods are stationary. Compact-circle embedding is open in the $C^1$ topology: finitely many coordinate intervals give a positive local derivative bound and injectivity on shorter intervals, and pairs outside those intervals have positive image separation. Smallness retains the endpoint embedding condition in transition collars. Every slice is thus injective and immersive; compactness makes it an embedding. Its compact track lies in $O$, so [F3] gives an ambient isotopy supported in a compact subset of $O$. [F2, F3, step 1.2, construct]

1.4 Without the homotopy parameter the same family proves the three-dimensional assertion. Smooth the continuous loop by [F1]. The nonimmersion source now has dimension one and the double-point source dimension two, both below the respective codimension three. To avoid a finite old link add the evaluation transversality condition to each component: its codimension is two and the loop source has dimension one. The value-submersive family in step 1.2 handles all finitely many conditions simultaneously. One small parameter therefore gives an embedded representative of the original free class disjoint from that link. [F1, F2, step 1.2, construct]

2.1 For a single two-handle use open thickenings of the old stage and the handle. Their overlap retracts onto $S^1\times D^2$ and is connected, whereas the handle thickening is contractible. By [F4] the new fundamental group is the old group modulo the normal closure of the attaching-circle class. Finite induction gives a surjection $\pi_1(N)\to\pi_1(W)$. Hence the given interior circle is freely homotopic to a loop in a pushed-in base copy. Step 1.4 gives an embedded representative there avoiding the old attaching link. This uses the arbitrary group class, not nullhomotopy. [F4, step 1.4, construct]

2.2 The auxiliary homotopy may be pushed off the protected external collar while keeping its endpoints. If that strip has inward coordinate $r\le a$, choose $\delta>0$ so both endpoint loops avoid $r\le a+2\delta$. On $[0,a+2\delta]$ use an increasing smooth map into $[a+\delta,a+2\delta]$ agreeing with identity near its upper end, and extend by identity beyond. Its composition with the homotopy changes only that auxiliary map, not $W$ or its prescribed collars. The image is compact and misses the protected strip. Choose a relatively compact open neighborhood of this image outside the strip and apply step 1.3. This gives the required supported ambient isotopy. Without the stated endpoint-avoidance hypothesis it only guarantees avoidance of a sufficiently small boundary strip, so that hypothesis is retained in the Statement. [F5, step 1.3, step 2.1, construct]

3.1 Transport the prescribed rank-three normal frame by the ambient isotopy. At the base circle its normal bundle splits into the oriented rank-two normal bundle in $N$ and the level-normal line. An oriented bundle on a circle is trivial: transport a frame around a cut interval and correct endpoint holonomy by a path in the orientation-preserving linear group, using orthonormalization and plane rotations. Choose an initial level frame. Its rank-three extension differs from the prescribed frame by a loop in $GL^+(3,\mathbb R)$, which polar orthonormalization retracts to $SO(3)$. By [F5] its class comes from $SO(2)$. Modify the level frame by that loop; this is an integral twist, and its rank-three extension is now homotopic to the prescribed frame. This retains both possible rank-three framing classes rather than equating them. [F5, step 2.2, construct, algebra]

3.2 A smooth homotopy of the frames gives an isotopy of sufficiently small tubular product embeddings. In a fixed normal chart apply the invertible frame maps to the disk coordinates; compactness of the parameter-circle product gives one radius on which all are embedded. The full-dimensional compact-source version of [F3], applied in the boundaryless interior after stationary endpoint reparametrization, extends this isotopy while fixing the external collar. Thus the conclusion retains the whole framed attaching embedding and not merely its unframed core. Together with steps 1.1–2.2 this proves every clause. [F3, step 1.3, step 1.4, step 2.2, step 3.1, construct] ∎

## Scope and source attribution

The full accepted construction in `circles-in-four-dimensional-traces.md`, Sections 1–3, is retained here, with its finite polynomial family and framing parity. Section 4 of that proposal is a consumer of the separate disk-factor bridge and is not used as a premise here. The actual full authored Whitney, van Kampen, framing-loop, transversality and compact isotopy-extension suppliers were read. Roberts supplies context, not a replacement for this proof or a Kirby-completeness premise.
