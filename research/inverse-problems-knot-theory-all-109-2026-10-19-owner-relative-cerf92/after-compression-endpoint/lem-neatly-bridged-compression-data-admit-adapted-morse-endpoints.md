---
id: lem-neatly-bridged-compression-data-admit-adapted-morse-endpoints
kind: lemma
title: "Neatly bridged compression data admit adapted Morse endpoints"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-neatly-bridged-arcs-in-a-parametrized-ball-are-standard
  - lem-gluing-handle-morse-models-along-collars
  - lem-local-morse-sublevel-pair-is-a-handle-pair
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-downward-gradient-like-vector-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $U$ be a compact connected oriented smooth three-manifold with boundary and let $D_1,\ldots,D_m$ be disjoint neat proper compression disks. Suppose cutting along them gives exactly $k\ge1$ three-balls, with compatible smooth corner roundings and ball parametrizations supplied. Each cut ball contains exactly one neat proper arc, disjoint from all disk-face collars, together with a supplied neat bridge half-disk as in the ball-arc straightening lemma. The arcs and bridge disks avoid the rounding regions. Reattaching the disk neighborhoods gives $U$ and its specified arc system $\mathcal A$.

Then there are a smooth Morse function $f:U\to[0,1/2]$ and an adapted downward gradient-like field $X$ such that $f^{-1}(1/2)=\partial U$, $f=1/2-t$ and $X=-\partial_f$ in a smaller inward boundary collar, exactly $k$ critical points are minima of value zero, and the remaining critical points are exactly $m$ points of index one with values in $(0,1/2)$. The field is tangent to every arc, each arc contains exactly one minimum, and its two halves are trajectories descending from its endpoints to that minimum. For each index-one point its stable manifold truncated by the upper boundary is a smooth properly embedded disk. These $m$ disks are disjoint, and a diffeomorphism compatible with the actual boundary and arc transport in the construction identifies them with the originally specified compression disks. In particular their boundary curves realize the prescribed attaching system up to explicit ambient transport.

Replacing $f$ by $1-f$ and $X$ by $-X$ gives the upper-handlebody version on $[1/2,1]$, with $k$ maxima and $m$ points of index two. The hypotheses include actual smooth cut-ball and neat bridge data. No global family, index rearrangement or move-generation theorem is asserted.

## Statement references

[[lem-neatly-bridged-arcs-in-a-parametrized-ball-are-standard|The neat bridge parametrization and actual ball-arc straightening.]]

[[def-downward-gradient-like-vector-field|The exact adapted field condition.]]

## Facts & Assumptions

**Given:** The compression disks, actual cut balls, parametrizations, collars, arcs, bridge half-disks and reconstruction of $U$ in the Statement.

[F1] A parametrized ball with a supplied neat bridge half-disk is diffeomorphic, orientation-preservingly, to a standard ball with its diameter, transporting any other disk faces. ([[lem-neatly-bridged-arcs-in-a-parametrized-ball-are-standard]])

[F2] Under Countable Choice a prescribed framed handle may be inserted into an outgoing Morse collar, retaining all old critical points and adding just its index. The complete local band uses $Q=-|u|^2+|v|^2$, $-1\le Q\le1$, $|u|^2|v|^2\le2$, with product side collars; its relative comparison retains the attaching map. ([[lem-gluing-handle-morse-models-along-collars]])

[F3] The actual local product-handle map has the form $(U,V)\mapsto(\sqrt{\eta+d|V|^2}\,U,\sqrt d\,V)$, and its subsequent comparison changes only radial $v$ coordinates while leaving $u$ fixed. Thus the subset $u=0$ is retained as the cocore disk, with its regular complementary collar. ([[lem-local-morse-sublevel-pair-is-a-handle-pair]])

[F4] Smooth compact-set bumps exist; finite positive interpolation of descending speeds preserves strict descent. The exact adapted field has components $(2u,-2v)$ in signed-square coordinates. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[def-downward-gradient-like-vector-field]])

[A1] Countable Choice is used at the actual ball-arc and finite handle-gluing suppliers. The additional choices and inductions are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 The disjoint disk neighborhoods are products $[-1,1]\times D^2$, with each original $D_j$ its central $\{0\}\times D^2$. Cutting removes their open interiors; its two faces become disjoint attaching disks on the cut balls. Reconstruction attaches these $m$ one-handles to the $k$ balls, with the furnished parametrizations and framings. All their attaching disks lie away from the arcs and bridge disks by hypothesis. Apply [F1] independently to the finitely many balls. It puts every arc on a diameter and carries every labelled disk face and its collar along by the same diffeomorphism; no face is dropped or falsely fixed. We work in this explicitly transported finite handle presentation and return to the original one at the end. [A1, F1, given, construct]

2.1 On each resulting standard ball choose $f_0(x)=|x|^2$ and initially $X_0=-2\sum x_i\partial_{x_i}$. The origin is its only critical point and is a minimum of value zero. Its diameter is the union of two radial trajectories and their common minimum. Near the boundary set $t=1-|x|^2$, so $f_0=1-t$. Multiply $X_0$ by a positive smooth radial factor equal to one near the origin and equal to $1/(4|x|^2)$ near the boundary. Then $df_0(X_0)=-1$ there, so $X_0=-\partial_{f_0}$ in its flow collar. This factor is smooth because its nonconstant prescription is away from the origin; [F4] supplies a positive interpolation. Near the minimum it remains the exact negative Euclidean gradient, and everywhere else it strictly decreases $f_0$. All arc trajectories and their endpoint collars remain radial. [F4, step 1.1, construct, algebra]

3.1 Attach the labelled one-handles one at a time by [F2]. At each stage the still unused attaching disks are retained, as labelled subsets of the product part of the outgoing boundary. Choose all handle-thickening and rounding neighborhoods disjoint from the compact arc tracks and from these finitely many other attaching disks. The required lowering of the ENTIRE old outgoing face is made by a smooth increasing height reparametrization, as in the actual proof of [F2]; this preserves its old trajectories and all old critical models. On the handle band use the descending field $(2u,-2v)$ near the quadratic origin, normalized to derivative $-1$ in height near the regular incoming, outgoing and side collars. This normalization uses a positive scalar away from the critical point, so retains its exact adapted model and stable/unstable sets. The normalized field matches the old product field in the signed height seam coordinate. On the product complement it is just the vertical descending field. Consequently each attachment adds exactly one index-one point, leaves all old points and arcs unchanged as trajectories, and retains a product outgoing collar. Small disjoint critical neighborhoods ensure the normalization is one near every old or new critical point. This constructs the fields as well as the functions, rather than reading a field extension into the Statement of [F2]. [F2, F4, step 2.1, construct]

4.1 Track the compression disks in this construction. For a new one-handle the coordinate $u$ is one-dimensional and $v$ is two-dimensional. The stable set of its critical point in the quadratic band is precisely $u=0$: under $(2u,-2v)$ a nonzero $u$ cannot converge to zero forward in time, whereas $u=0$ has $v$ contracting to zero. Its portion up to the outgoing face is the disk $u=0$, $|v|\le1$, with boundary its belt circle. The positive speed normalizations of step3.1 do not change this set. The handle comparison in [F2] preserves the angular directions and adjusts disk radii; [F3]'s explicit product parametrization has $u=0$ exactly when $U=0$, and its radial $v$ comparison also preserves that subset. Its regular outer collar is absorbed by a height reparametrization. Thus this entire stable disk, including its boundary collar, is identified with the cocore of the prescribed product one-handle. It is not inferred merely from an abstract diffeomorphism type of a handle. [F2, F3, step 3.1, algebra]

5.1 At a later attachment its disks lie in the original-ball part of the labelled outgoing boundary, while all earlier belt circles lie in their respective added-handle parts. They are disjoint. The product flow carries each earlier belt circle vertically through the new regular complement, away from the new attaching disks; joining this annular trace to its old stable disk gives exactly the continued stable disk at the new outgoing boundary. It cannot acquire another branch: the product flow is a diffeomorphism on that complement, and a trajectory entering the stable disk is uniquely determined backwards until its first boundary crossing. All new attaching disks remain in the labelled original-ball part, so the same argument inducts through every handle. The disks are pairwise disjoint at each stage. The local relative comparisons in step4.1 and the product collars give a composed diffeomorphism from the original finite presentation carrying the original cocores to these disks. Along an arc its collar comparison changes only height and its ball comparison is the one of step1.1; hence it carries the actual arc system and its endpoints as specified. This proves the claimed compression-disk and arc compatibility. [step 1.1, step 3.1, step 4.1, construct]

6.1 After the finite induction the function has range $[0,1]$, upper boundary exactly at one, the $k$ old minima at zero, and $m$ index-one values strictly between zero and one. Its field is adapted, is vertical in the outgoing collar, and retains each arc as two trajectories into its unique minimum. Multiply the function by $1/2$ to obtain the required range. Near a critical point the same field remains adapted: multiplying a signed quadratic function by $1/2$ is absorbed by multiplying its Morse coordinates by $1/\sqrt2$, and the linear components $(2u,-2v)$ retain the same expression in those coordinates. Normalize the field positively near the outgoing collar so $df(X)=-1$ there, leaving it unchanged in all critical neighborhoods. Pull this function and field back through the explicit presentation diffeomorphism from step5.1; in a collar put $t=1/2-f$, which gives the stated height and field. Finally $1-f$ and $-X$ exchange minima with maxima and index one with index two, while retaining the same arcs and compression disks. This establishes every clause within the supplied endpoint data. [F4, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra] ∎
