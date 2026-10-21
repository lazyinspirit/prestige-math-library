---
id: lem-a-local-cancelling-one-two-pair-is-a-knot-disjoint-genus-stabilization
kind: lemma
title: "A local cancelling one-two pair is a knot-disjoint genus stabilization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - thm-collar-neighborhood-theorem
  - thm-isotopy-extension
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves
  - lem-tangential-local-bridge-arcs-admit-smooth-rounded-tunnel-regions
  - lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2 and its discussion, printed6–7, introduction of an index-one/index-two pair; explicit marked tunnel model supplied here"
---

## Statement

Assume Countable Choice. Let a balanced knot diagram in $S^3$ have splitting $U_\alpha\cup_\Sigma U_\beta$, actual compression disks and simultaneous trivial-arc data. Choose a surface disk $D$ disjoint from all attaching curves and marks, and a sufficiently small product neighborhood disjoint from the actual knot arcs. In the $U_\beta$ half of that neighborhood choose a boundary-parallel arc $\tau$ with two endpoints in $\operatorname{Int}D$, together with its specified small bridge disk $\Delta$ whose other boundary interval lies in $D$.

Transfer a thin regular neighborhood of $\tau$ from $U_\beta$ to $U_\alpha$. The new splitting has genus $h+1$, the same $k$ pairs, and $m+1=(h+1)+k-1$ curves in each system. The new curves can be chosen as a meridian of the transferred tube and the boundary of the truncated bridge disk $\Delta$; they meet transversely once and miss every old curve and mark. Each new disk system cuts its handlebody into $k$ balls with the same actual trivial arcs and simultaneous disjoint bridge disks. The modification is exactly connected sum with the standard genus-one splitting of $S^3$, supported in the chosen knot-disjoint ball. Equivalently the standard local geometrically cancelling one-handle/two-handle pair across this disk induces the allowed genus stabilization, and its removal induces destabilization.

The arc and bridge disk in this statement are supplied local data. This does not assert that an arbitrary nonlocal handle presentation has already been arranged in this local form.

## Facts & Assumptions

**Given:** The balanced splitting, disk $D$, product neighborhood, and specified boundary-parallel arc $\tau$ and bridge disk $\Delta$.

[F1] [[def-admissible-pointed-heegaard-floer-data]] gives the compression and simultaneous bridge-disk conditions and the relation $m=h+k-1$.

[F2] Smooth collars and supported isotopy extension are available under Countable Choice ([[thm-collar-neighborhood-theorem]], [[thm-isotopy-extension]]).

[F3] The planar disk and prescribed collar identifications can be made smoothly ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]]).

[F5] Neat proper disk isotopies, with interior in the manifold interior and boundary in its boundary, extend to boundary-preserving ambient isotopies with prescribed support ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]]). Before applying the smooth-boundary extension theorem to a cut manifold, round its finitely many disk-face corners in small product collars, away from marks and actual arcs, transporting the band and face coordinates through this rounding. The local rounding is a monotone smoothing of the quadrant corner in its two normal coordinates and is the identity outside those collars. All proper compression-disk isotopies below are chosen product-neat in the resulting boundary collars. For a bridge-boundary path change, first extend its isotopy on the boundary surface and then through a thin product collar; it is stationary near its marked endpoints, so that collar support can miss the actual knot arcs.

[F6] Broad compression witnesses can be prepared only in an auxiliary neat comparison, with all original retained disks restored exactly; simultaneous bridge witnesses are first cleaned of all disk-face intersections. A supplied broad local arc and smooth bridge disk admit an actual smooth rounded tunnel with end caps and an auxiliary neat product core, even if the supplied arc is tangent at an endpoint. The complementary truncated bridge disk has ball cutting topology and can be neatened with its boundary fixed. ([[lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves]], [[lem-tangential-local-bridge-arcs-admit-smooth-rounded-tunnel-regions]], [[lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system]])

## Proof

1.1 First clean the old simultaneous bridge witnesses of the entire compression family by [F6], then prepare the latter only as auxiliary neat disks. Because the compact disk $D$ and its model neighborhood miss every old rim, this auxiliary preparation can be supported away from that entire local model; it fixes the supplied actual tunnel data there. All old retained compression disks will be restored exactly by [F6], and no product collar is attributed to their original tangent germs. The disk $D$ lies in one complementary component of each attaching system, hence its collar lies in one cut ball of each system. Arrange the old bridge disks to miss a smaller product neighborhood containing $\tau\cup\Delta$. In either cut ball there is one bridge disk. Its boundary path has endpoints outside $D$. After making it transverse to $\partial D$, push its finitely many subarcs in $D$ to disjoint parallel arcs in the exterior boundary collar of $D$, processing innermost subarcs first; each push crosses a disk containing no endpoint. Extend the boundary isotopy to the bridge disk by [F2]. The disk is now disjoint from a thin collar of the chosen smaller disk. If necessary first choose a smaller disk in $D$ containing its two feet and bottom interval, then use its empty collar to carry the local model into the cleared region; the local bridge witness is auxiliary and all actual knot data are outside the support. Use [F6]'s endpoint-cap tunnel construction for the supplied $\tau,\Delta$. That construction is valid for ordinary smooth or cornered bridge boundary and tangential endpoint contacts. It supplies a rounded smooth REGION and a neat auxiliary core, without a boundary-preserving smooth map making the original $\tau$ transverse. This establishes a model neighborhood disjoint from all old compression and bridge disks and all actual knot arcs. [F6, F5, F1, F2, F3, given, construct]

2.1 Use [F6]'s smooth rounded tunnel region with product coordinates $[-1,1]\times D^2$ and end disks on $D$, and attach it to $U_\alpha$. These are coordinates of the REGION with its auxiliary neat core, not an assertion that the original possibly tangent $\tau$ is their axis. Its cocore $\{0\}\times D^2$ is the new $\alpha$ compression disk. Cutting along it restores the old $\alpha$ cut ball together with two boundary collar caps, which flatten by a normal collar displacement. All other cut balls are unchanged. Thus the new $\alpha$ disks still cut into $k$ balls with their original arcs and bridge disks. The tube joins two feet on the same boundary component, so its surface effect is to remove two disks and join their boundary circles by an annulus, increasing the genus by one and preserving connectedness. [F6, F1, F2, step 1.1, construct]

3.1 On the $\beta$ side remove this tube neighborhood. The old cut ball containing it becomes a ball with one boundary-parallel tunnel drilled out. Truncate the supplied bridge disk $\Delta$ along that tube. Its remaining part is a broad proper disk in the drilled ball, with a single longitudinal boundary segment. By [F6]'s explicit endpoint-sector and open-groove construction its cutting topology is a ball. Replace this auxiliary cutting witness by a neat one with the SAME boundary if needed; [F6] supplies standard smooth rounded cut-ball parameters. Cutting along it opens the tunnel and restores a ball: in the product neighborhood of $\Delta$, the tunnel is a semicircular groove, and cutting along the rectangle between the groove and its boundary interval opens that groove to the exterior collar; flattening this open collar gives the original half-ball. This product calculation takes place in the prepared auxiliary witness model, after its cutting topology has been checked for the actual broad supplied data; it leaves the complement fixed. The full old compression family is restored exactly using [F6], whose support missed this entire local model. The new cocore and cutting witness lie in that model, so are genuine smooth disks and miss every old retained disk. Add this truncated disk to the old $\beta$ disks. They cut the new handlebody into the same $k$ balls, and all old actual knot arcs and bridge disks are outside the changed neighborhood by step1.1. Thus simultaneous boundary-parallelism and the endpoint pairing are retained. [F6, F1, F2, step 1.1, step 2.1, construct]

4.1 On the new boundary annulus of the tube, write coordinates $(s,\theta)\in[-1,1]\times S^1$. The new $\alpha$ circle is $s=0$. The boundary of the truncated bridge disk consists of one longitudinal segment $\theta=\theta_0$ through this annulus, together with an arc in $D$ joining its ends. Hence its only intersection with the meridian is $(0,\theta_0)$, and it is transverse. All old attaching circles lie outside the model disk and tube, so the new curves miss them. The auxiliary bridge-disk and endpoint-cap coordinates of [F6] specify the untwisted tube and longitudinal segment, with the actual truncated boundary retained. Closing the model disk by a second disk therefore gives the torus splitting with a meridian and longitude meeting once, namely the standard genus-one splitting of $S^3$; deleting that second disk identifies our modification with its connected sum in $D$. The local one-handle is the transferred tube and the local two-handle is the truncated bridge disk, whose attaching curve crosses its belt meridian once. They are the standard complementary pair, with no additional framing or knot change. [F6, F1, F2, F3, step 2.1, step 3.1, construct]

5.1 The actual oriented knot and every mark were outside the model support throughout, so they are unchanged. Pull the prepared old bridge witnesses back with [F6]'s smooth comparison on their compact images off the old rim curves; they stay outside the local model. Restore every retained original compression disk exactly. The new local witnesses are fixed by that comparison, because its support was disjoint from the full local model. The number of pairs remains $k$, and the number of curves on each side increases from $m$ to $m+1=(h+1)+k-1$. Step2.1 and step3.1 verify the full balanced disk and trivial-arc conditions, and step4.1 verifies the exact allowed genus stabilization. Reversing the product and cap constructions is the asserted destabilization. Countable Choice enters only through the collar and isotopy suppliers; all model choices are finite. [F6, F5, F1, F2, F3, step 2.1, step 3.1, step 4.1, construct] ∎
