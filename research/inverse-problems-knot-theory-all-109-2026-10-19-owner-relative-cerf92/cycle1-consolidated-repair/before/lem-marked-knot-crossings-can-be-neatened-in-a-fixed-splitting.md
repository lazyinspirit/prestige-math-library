---
id: lem-marked-knot-crossings-can-be-neatened-in-a-fixed-splitting
kind: lemma
title: "Marked knot crossings can be neatened in a fixed splitting"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let a compact closed smooth three-manifold be split along a fixed smooth two-sided surface $\Sigma$ into two compact pieces. Let a smooth oriented embedded circle $K$ meet $\Sigma$ in exactly a finite marked set $P$. Suppose near each mark the two adjacent open knot arcs lie in opposite pieces; tangency to $\Sigma$ at the mark is permitted. Supply finitely many pairwise disjoint smooth parametrized bridge half-disks on each side, with bottom edges in $\Sigma$, semicircular edges the specified knot arcs, and all other points in the corresponding interior; smoothness in corner charts is assumed, but transversality along the bottom edge is not. Suppose their boundaries and the knot avoid a specified finite compression-disk system.

There is an arbitrarily small smooth isotopy of oriented knots $K_s$, $0\le s\le1$, fixing every mark and supported in arbitrarily small disjoint marked coordinate neighborhoods avoiding the compression disks. With $\Sigma$ held fixed, its intersection set remains exactly $P$, and every open arc stays in its original piece. For every $s>0$ all crossings are transverse to $\Sigma$. The bridge half-disks can be changed smoothly with $s$, remaining embedded and pairwise disjoint on each side, keeping their bottom boundary arcs fixed and having their semicircular boundary arcs equal to the SAME $K_s$ arc system. They are unchanged near the compression disks, so any initial disjointness from that system is retained. They may be left unchanged away from arbitrarily small endpoint neighborhoods. In particular the resulting arcs are neat proper arcs and still have the specified simultaneous bridge witnesses.

This knot isotopy also has an ambient extension fixing all marks, with support in the chosen marked neighborhoods, so it preserves the represented oriented knot type. The ambient extension is NOT asserted to preserve $\Sigma$; the normalization compares knots inside the fixed splitting, rather than asserting a diffeomorphism of a tangential and transverse surface-knot pair. Its use in a diagram equivalence requires that explicit arc-normalization convention.

## Facts & Assumptions

**Given:** The fixed splitting, marked smooth knot, parametrized bridge witnesses and disjoint compression data in the Statement.

[F1] Smooth compact-set cutoffs exist. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[F2] Smooth local inverse coordinate maps exist, including with parameters after adjoining the parameter coordinate. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F3] Smooth compactly supported time-dependent fields have global smooth evolution on a compact time interval, with unique trajectories. ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[A1] Countable Choice is assumed; the remaining selections and bounds are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Choose disjoint marked charts, avoiding the compact compression disks and all other knot portions, with $\Sigma=\{r=0\}$ and the pieces given by the signs of $r$. A source coordinate $u$ on the smooth knot gives $k(u)=(x(u),r(u))$, $k(0)$ the mark. By the assumed side membership there is $\sigma\in\{1,-1\}$ with $\sigma r(u)$ having the sign of $u$ for small nonzero $u$. Smoothness implies $\sigma r'(0)\ge0$. Choose a nonnegative bump $\chi(u)$ equal to one near zero and supported inside that small interval, and define $$k_s(u)=\bigl(x(u),r(u)+\epsilon s\sigma u\chi(u)\bigr).$$ It agrees with the original parametrization near the interval ends, fixes $u=0$, and has the SAME strict sign of $r$ on either side of zero. Its normal derivative at zero is $r'(0)+\epsilon s\sigma$, nonzero with sign $\sigma$ for every $s>0$. Doing this in the finitely many marked charts gives one globally smooth parametrized knot isotopy candidate, not two independently rounded one-sided arcs. [A1, F1, given, construct, algebra]

2.1 For sufficiently small $\epsilon$ every $k_s$ is a smooth embedding, uniformly for $s\in[0,1]$. Here is the finite stability argument also used for the disks below. On a compact embedded source choose finitely many smaller coordinate neighborhoods where a fixed left inverse of the original derivative gives a uniform lower Lipschitz bound for sufficiently close source points, by integrating the derivative on convex coordinate segments. In a small $C^1$ perturbation the same bound remains positive. Source pairs outside those neighborhoods have a fixed positive separation in the original image: restrict to pairs whose source distance is at least a Lebesgue number of the smaller finite cover and use compactness and injectivity. Uniform $C^0$ closeness smaller than half that separation preserves their distinctness. The derivative remains injective by the same finite lower bounds. Thus compactness gives an embedding for all sufficiently small perturbations. All changes in step1.1 are uniformly $C^1$ small as $\epsilon\to0$. Their chart supports are disjoint and avoid every other knot portion and compression disk, so this proves the candidate is an actual knot isotopy with exactly the stated fixed intersection and side behavior. [step 1.1, choose, algebra]

2.2 Extend this same displacement to every incident bridge corner. Use its parametrization $\gamma:H\to U$ with $H=\{(a,v):a^2+v^2\le1,v\ge0\}$, bottom edge $v=0$, and the ambient marked chart on the appropriate side. Give that side its inward normal coordinate $\rho=\pm r$. On the semicircular edge near its endpoint, the original knot coordinate has absolute value $|u|=v b(v)$ with smooth $b>0$: the edge parameter $v$ and the knot parameter are both regular coordinates at that endpoint, and the quotient is smooth by $|u(v)|/v=\int_0^1 (|u|)'(tv)\,dt$. Its prescribed inward normal displacement from step1.1 is therefore $\epsilon s v b(v)\chi(u(v))$. The factor $b(v)\chi(u(v))$ is smooth and nonnegative up to the corner. Extend it nonnegatively from the semicircular edge to a small half-disk corner neighborhood and cut it off away from that neighborhood. To construct the extension, use corner coordinates with the semicircle one coordinate face and the bottom edge the other; projection to the semicircle and multiplication by a nonnegative cutoff give a smooth extension $h(a,v)$. Such corner coordinates follow from [F2], since the bottom line and the semicircle meet transversely in the SOURCE half-disk, irrespective of tangency in the target. Where the desired edge displacement is zero choose the cutoff transition inside that zero region. [F1, F2, step 1.1, construct, algebra]

3.1 Write the bridge map in the ambient marked chart as $(p(a,v),\rho(a,v))$ and replace it near the corner by $$\gamma_s(a,v)=\bigl(p(a,v),\rho(a,v)+\epsilon s v h(a,v)\bigr),$$ leaving it unchanged elsewhere. On the semicircle this is EXACTLY the prescribed global knot displacement of step1.1, by the preceding quotient construction. On the bottom edge it is zero, so the boundary arc on $\Sigma$ stays fixed. All other source points stay in the same side because their old inward coordinate was positive and the added term is nonnegative. The change is smooth in source corner charts and $s$, with support inside the chosen marked neighborhoods. The finite $C^1$ stability argument in step2.1, applied in convex boundary and corner charts, proves each disk remains embedded for sufficiently small $\epsilon$. Initially disjoint compact disks on either side have positive mutual distance; choose $\epsilon$ also below these finitely many distance margins. Their deformations then remain disjoint. The marked chart supports avoid the compression disks, so all bridge maps are unchanged near that system and retain any initial disjointness from it. At a mark the two one-sided disk-edge maps are the restrictions of the ONE smooth knot parametrization $k_s$, so their union is smooth across the fixed surface, including all jets. Thus these are simultaneous bridge witnesses for the normalized arcs, not merely unrelated one-sided replacements. [step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 Finally extend the knot isotopy to an ambient one without asserting surface preservation. Its velocity is zero outside the marked chart supports and at every fixed mark. Near the compact moving arc track, complete the derivative of $k_s$ to an ambient coordinate frame; [F2] applied to the resulting parameter-dependent coordinate map gives smooth graph charts for the track. Extend the prescribed velocity independently of the two transverse coordinates, multiply by spatial cutoffs, and patch finitely many such extensions with weights summing to one near the track. Choose the support entirely within the marked neighborhoods. The isotopy is stationary near their outer boundaries, so the zero field on all remaining knot neighborhoods patches smoothly and agrees with the prescribed zero velocity there. At every mark the extended field has its prescribed value zero. This is a compactly supported smooth time-dependent ambient field. By [F3] its flow fixes the marks and the chart complement, and uniqueness gives $H_s(k_0(u))=k_s(u)$ on the whole knot. It preserves knot orientation because its parameter is unchanged and the flow starts at the identity. A field realizing this normal displacement need not be tangent to $\Sigma$, and none is claimed. Throughout the construction the surface and disk systems used to read the diagrams have been kept fixed as background data. This proves all clauses. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct] ∎
