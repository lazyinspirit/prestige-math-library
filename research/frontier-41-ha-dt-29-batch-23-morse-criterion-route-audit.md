# Independent audit: batch-3 cancellation criterion route

## Verdict

The new candidate is correctly marked `proof: not-supplied`; it is not yet a
usable supplier. The unique-trajectory to attaching/belt intersection
calculation is valid under the stated lobe hypotheses. The remaining work is
the geometric interface to the batch-3 theorem: construct a genuine compact
collared Morse triad with complete level spheres and exactly the two
critical points, then prove the C² smoothing/branch-persistence and fixed-cap
transport interfaces. The candidate identifies these open obligations
honestly.

## Conditional pass: the sphere intersection

For a regular value `v` between the center and saddle values, the stable
sphere of the index-zero point `p` is the full center orbit `C_v≅S¹`: its
interior is the disk lobe, has no other critical point, and negative-gradient
trajectories remain in it and converge to `p`. The unstable sphere of the
index-one saddle `q` is `A_q≅S⁰`, consisting of the two descending half
branches. One lies in the basin of `p` and meets `C_v` once. The other lies
outside that basin, so it contributes no point to `B_p=C_v`. In the
one-dimensional middle level, a point and a regular curve are transverse;
thus `A_q∩B_p` is exactly one transverse point. This uses the full lobe
circle, not a truncated arc. The exit section must be placed below the
chosen `v` on the second branch so that its other `S⁰` point is present in
the middle level.

No global Morse–Smale perturbation is needed once this geometry is
established: the only critical pair in the slab has indices `0,1`, and the
zero-dimensional unstable sphere meets the one-dimensional stable sphere
transversely at its unique point. Countable Choice is explicit in both
batch-3 suppliers and in the candidate.

## Open: the compact triad and face data

A short transverse exit section alone does not make a compact collared
triad. The batch-3 definition requires a compact manifold whose whole
boundary is the disjoint union of the two collared faces. The local lobe
block has side edges, and its exit component at a regular level is initially
an interval. The item must complete that interval by regular product
collars, producing an external level-circle component and two full boundary
faces; it must show that these collars contain no critical points and that
the resulting slab contains only `p,q`.

There is a natural construction to formalize: at an intermediate regular
level, retain the lobe circle and the second unstable point in an exit tube;
close the regular exit interval by a product strip to an external circle.
Continue that external circle as a product cylinder below and above the
critical band. The center disk is born at `p`, and the `q` one-handle joins
it to this external cylinder at the unique attaching/belt intersection.
This gives a compact annular triad with one incoming and one outgoing
circle, and no extra critical points. To use it for the source disk, identify
the actual trajectory neighborhood with this model by the local Morse
charts and regular flow boxes, while matching the original scalar on an
open collar of the support neighborhood. The current strategy does not yet
write this construction or its face-coordinate matching, so this is a
fail for proof closure, not a contradiction in the claimed geometry.

The supported-modification lemma then has the right conclusion: choose its
support neighborhood around the compact connecting orbit and the two
critical points, with closure inside the original parameter block and
disjoint from the outer collar. Since the auxiliary regular extensions lie
outside that support, restriction back to the parameter block leaves the
original scalar unchanged near its boundary. This retains the outer germ
provided the slab construction explicitly arranges that equality on an open
overlap.

## C² and adapted-field interface

The directional collar estimate is valid with an ordinary tubular
coordinate `s` and `X=∇u₀/|∇u₀|²` only as a direction field. On a compact
regular collar, `du₀(X)=1` and `K=sup|dρ(X)|<∞`. If the smooth approximation
satisfies `dū(X)>1/2` and `K‖ū−u₀‖∞<1/4`, then

`d((1−ρ)u₀+ρū)(X) > 1/4`,

so the blend introduces no critical point and is exactly `u₀` on the fixed
outer collar. This corrects the prior gradient-flow-coordinate concern.

For the batch-3 theorem, the entire slab and its face collars still need to
lie in the smooth region; place the C² blend to `u₀` outside that slab.
The candidate also needs the local parameter-stability argument in the
stated geometry: C² closeness gives C¹ closeness of gradient fields; the
hyperbolic unstable branches vary continuously, the selected branch enters
a fixed attracting disk for `p`, and the other branch crosses the fixed
transverse exit section. This preserves exactly one connecting orbit.
Finally choose an adapted descending field equal to the chosen branch field
on the compact trajectory and standard in the two Morse charts. The
criterion's `A_q,B_p` condition is then realized by that field.

## Cap product and scalar range

The disk map need not factor through `P(x,u₀(x))` throughout the Morse slab.
The interior is being replaced by the fixed-cap map. What is required is:

1. a jointly continuous (C² in the stated category) foliated product
   `P:W×I→M` on the entire replacement block, with uniform open interval
   `I=(-ε,ε)` and `P^*\mathcal F=\ker(dt)` (up to a nowhere-zero factor);
2. exact factorization `f(x)=P(x,u₀(x))` on the old outer collar only; and
3. a compact collar-value set `S=u₀(C)` contained in the interior of `I`.

The fixed filling gives a leafwise map on the whole disk block after gluing
it to the plaque-projected collar; its disk domain kills holonomy. Finite
foliation charts over this compact image then give a common transverse
interval. Normalize transport first on the old collar, and choose that
collar close enough to the filled loop that its section range `S` lies
strictly inside the common interval. This proves the required boundary
matching, not an identity between the old map and the cap product on the
interior.

After supported cancellation the new scalar has compact range `K_v` on the
replacement block and equals `u₀` on the old collar. Choose a smooth strictly
increasing `θ:R→I` that is the identity on a neighborhood of `S` and maps
`K_v` into `I`. Such a `θ` exists because `S` is compactly inside `I`;
extend its derivative positively on the two tails with integrals smaller
than the available endpoint margins. Then `d(θ∘v)=θ'(v)dv`, so this
compression creates no characteristic critical points, and the exact old
collar map is retained. The candidate states the compression idea but should
spell out this uniform interval/range matching and the pullback-foliation
property of `P`.

## Dependency audit

The direct logical suppliers are the batch-3 unique-orbit cancellation
criterion, its supported-modification lemma, `def-countable-choice`, and
the foliation chart/plaque definitions used by the cap transport. The
candidate's `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`,
`lem-characteristic-disk-center-saddle-index-count`, and
`lem-finitely-cornered-regular-plane-curve-separates-without-choice` are not
used by this conditional statement as written, since it assumes the
embedded disk lobe, its critical points, and the simple frontier. The
nullhomotopy-persistence supplier is also not visibly used if the fixed cap,
rounded loop, and product collar are hypotheses. Either remove these as
direct dependencies or say exactly which premise they derive.

Conversely, the final proof needs explicit local suppliers or proof steps
for: the compact triad/regular-face completion; the adapted field preserving
the one connection; the C² approximation and branch stability; and the
fixed-disk transverse transport over a uniform interval. These should appear
in the dependency list or be proved in the lemma itself. No canonical item,
manifest, receipt, or controller state was edited.
