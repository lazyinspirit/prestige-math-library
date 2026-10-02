# Batch 6 curve examples: independently checked repair routes

Report-only audit of the current draft items, read from disk on
2026-09-30 17:39 UTC. The audited examples are `ex-nodal-cubic-normalization-genus`,
`ex-cuspidal-cubic-normalization-genus`,
`ex-smooth-conic-is-projective-line-with-point`, and
`ex-basepoint-linear-system`. No item, page, manifest, contract, review, gate,
or shared state file was edited for this report.

## Findings shared by the nodal and cuspidal examples

The exact additional normalization example with the same projective
finite-map gap is **`ex-cuspidal-cubic-normalization-genus`**. The different
example `ex-divisor-cusp-normalization-pullback` is affine: its Step 2.3 already
proves that `k[t]` is finite and integral over `k[t^2,t^3]`, has the same
fraction field, and is the integral closure. It does not use the problematic
claim about a map from a smooth source to a singular projective target.

Both projective cubic proofs need a concrete finiteness argument before they
call the displayed `P^1` map a normalization. The current nodal Step 4.1 and
cuspidal Step 3.1 assert that the maps are finite without establishing it.
`thm-normalization-glues-integral-finite-type-curves` supplies a finite,
birational, initial normalization after the input is already an integral
separated finite-type curve; it does not make an arbitrary parametrization
finite. The clean repair is to verify finiteness of each displayed map on the
two affine target charts below, then use uniqueness/initiality in that theorem.
This avoids relying on an unproved general finiteness assertion for maps into a
singular curve.

First establish that the cubics are curves before invoking the curve,
Jacobian, normalization, delta, or genus suppliers. In each case the
dehomogenized equation is irreducible by the argument below, and the
homogenized equation is not divisible by `Z`; hence the homogeneous cubic is
irreducible. Over the stated algebraically closed field this gives an integral
projective hypersurface. The open charts `D(Z)` and `D(Y)` cover either cubic:
if `Y=Z=0`, the equation forces `X=0`, which is not a projective point. Their
coordinate rings have dimension one: on `D(Z)` the fraction field is `k(t)`;
on `D(Y)` the rings are the displayed polynomial/localization rings below.
Use `thm-affine-domain-dimension-transcendence-degree` on these finite-type
domains and `lem-chain-dimension-open-cover` on the finite chart cover. The
cubics are closed in projective space, hence separated, finite type and proper.
This is a scheme-dimension argument, not the classical-variety
`lem-projective-hypersurface-dimension-drop` interface.

The relevant supplier interfaces were read in full where load-bearing:
`thm-jacobian-criterion-affine-variety` characterizes regularity at closed
points by `rank(J)=n-dim(A_m)`; for these integral curve charts the local
dimension is one, so a one-row gradient is nonzero exactly at regular closed
points. `thm-normalization-glues-integral-finite-type-curves` requires the
curve hypotheses and the Axiom of Choice, and provides the finite birational
initial model. `def-delta-invariant-curve-singularity` identifies delta with
the normalization-stalk quotient; `lem-normalization-lowers-arithmetic-genus-delta`
gives `p_a=g(X^nu)+sum delta`; `cor-plane-curve-geometric-genus-delta-correction`
combines this with the plane arithmetic-genus formula. These three latter
interfaces are drafts in the current library. The current nodal and cuspidal
items invoke the normalization and genus suppliers without declaring the
Axiom of Choice required by their Statements; add the assumption or replace
those uses with arguments that do not depend on the AC-qualified interfaces.

The scheme-dimension route used here has two published inputs:
`thm-affine-domain-dimension-transcendence-degree` applies to the finite-type
domain on each affine chart, and `lem-chain-dimension-open-cover` transfers
the chart dimensions to the curve. `thm-jacobian-criterion-affine-variety`,
`def-smooth-morphism-to-field-classical`, and
`thm-regular-local-rings-are-normal` are also published. By contrast,
`thm-normalization-glues-integral-finite-type-curves`,
`thm-plane-curve-arithmetic-genus`, `def-geometric-genus-singular-curve`,
`cor-birational-smooth-proper-curves-isomorphic`, and the three delta/genus
interfaces above are drafts. The conic's extension route additionally depends
on draft `lem-rational-map-smooth-curve-to-proper-scheme-extends`; its
projective-line divisor calculation uses draft
`lem-projective-line-divisors-classified-by-degree`. These are proposed
item-local repair routes; they do not close the named draft supplier
obligations.

## `ex-nodal-cubic-normalization-genus`

The intended outputs are correct under the stated `char(k) != 2` hypothesis:
`p_a=1`, a unique ordinary node with `delta=1`, and normalization `P^1` of
genus zero. The current proof at Steps 1.1–1.3 and 4.1 has the following
gaps.

1. **Correct the three affine Jacobian calculations (current Step 1.1).** On
   `Z=1`, `f=y^2-x^3-x^2` has partials `-x(3x+2)` and `2y`. With `y=0`,
   the curve equation gives `x=0` or `x=-1`; at `x=-1` the first partial is
   `-1`, in every characteristic. Thus only `o` is singular. This avoids
   dividing by `3`, which the current candidate `x=-2/3` cannot do in
   characteristic three. On `Y=1`, for
   `g=z-x^3-x^2 z`, the partials are `-3x^2-2xz` and `1-x^2` (the current
   pair is wrong); if `1-x^2=0`, then `g=-x^3 != 0`, so no point on the curve
   has both partials zero. On `X=1`, for `h=y^2z-1-z`, the partials are
   `2yz` and `y^2-1`; the curve equation `z(y^2-1)=1` makes the second
   partial nonzero. Finally add the tangent-cone check at `o`:
   `y^2-x^2=(y-x)(y+x)` has two distinct tangent lines when `char(k) != 2`,
   so the multiplicity-two singularity is an ordinary node. The same node
   criterion is recorded as [F14] in `cex-flat-not-smooth-nodal-family.md`.

2. **Replace Step 1.2's irreducibility sentence.** The presence of an odd
   degree term does not by itself exclude arbitrary line-times-conic
   factorization. For `f=y^2-x^2(x+1)`, view the monic quadratic over `k(x)`.
   A quadratic `y^2-a` is reducible over this field only if `a` is a square;
   `x^2(x+1)` has valuation one at `x+1`, so it is not a square. Gauss's
   lemma gives irreducibility in `k[x,y]`. Homogenization is irreducible
   because `Z` does not divide the cubic. The `D(Z)` chart has fraction field
   `k(t)` under `x=t^2-1`, `y=t(t^2-1)`. Put `u=t^2-1`; the `D(Y)` chart ring
   is
   `k[x,z]/((1-x^2)z-x^3) ~= k[x,(1-x^2)^-1]`, also of dimension one.
   These charts establish the scheme curve hypotheses before [F1]–[F4] are
   used.

3. **Finish the projective finiteness proof (current Steps 1.3 and 4.1).**
   The affine `D(Z)` ring inclusion
   `A=k[u,tu] -> k[t]`, `u=t^2-1`, `t^2=u+1`, is finite since
   `k[t]=A+At`; it is birational since `t=y/x` in `Frac(A)`, and `k[t]` is
   normal. The displayed homogeneous map has no common zero and lands in
   `X`. On the target chart `D(Y)`, set `u=S/T`; its inverse image is
   `Spec k[u,(1-u^2)^-1]`. The target chart ring above has `1-x^2` invertible
   because it is coprime to `x^3`; the map `x -> u`,
   `z -> u^3/(1-u^2)` is an isomorphism. Since `D(Z),D(Y)` cover `X`, the
   displayed `P^1 -> X` map is finite; the fraction-field calculation makes
   it birational. It is a normal finite birational model, so the uniqueness
   clause of [F4] identifies it with `X^nu`. This direct uniqueness route
   also avoids the current Step 4.1's unproved assertion that `X^nu` already
   meets every smooth/proper hypothesis of [F6].

4. **Retain and clarify the delta computation (current Step 2.1).** Let
   `u=t^2-1`. The two points over the node are `t=1,-1`; since the
   characteristic is not two, the normalization stalk is the semilocal ring
   `k[u]_(u) + t k[u]_(u)`, while the image of the nodal local ring is
   `k[u]_(u) + tu k[u]_(u)`. The quotient is
   `t k[u]_(u)/tu k[u]_(u) ~= k`, so `delta_o=1`. Writing the chart ring as
   `A=k[u,tu]` rather than `A'=k[x,y]` makes the decomposition and its
   localization unambiguous. With the sole singular point established,
   the plane genus and normalization-delta suppliers yield `g(X^nu)=1-1=0`.

## `ex-cuspidal-cubic-normalization-genus`

The intended outputs are correct under `char(k) != 2,3`. The current chart
Jacobian checks and the affine delta calculation are consistent; the
irreducibility and projective-finiteness steps are not complete.

1. **Replace Step 1.2's line-at-infinity argument.** Knowing that `Z=0`
meets the cubic only at one point does not rule out an arbitrary line factor.
For `f=y^2-x^3`, the valuation of `x^3` at `x=0` is three, so it is not a
square in `k(x)`. The monic quadratic is irreducible over `k(x)` and by
Gauss's lemma in `k[x,y]`; its homogenization is irreducible because `Z`
does not divide it. This gives an integral projective cubic.

2. **Establish dimension and finiteness chartwise.** On `D(Z)`,
   `A=k[t^2,t^3]` embeds into `k[t]`; `t=y/x`, `t^2=x`,
   `k[t]=A+At`, and `k[t]` is integrally closed. Thus the affine map is
   finite birational and its fraction field is `k(t)`. The `D(Y)` chart of
   the cubic is `Spec k[x]` from `z=x^3`; the inverse image in `P^1` is
   `Spec k[s]`, `s=S/T`, and the chart map `x -> s`, `z -> s^3` is an
   isomorphism. `D(Z),D(Y)` cover `X`, so the projective parametrization is
   finite and birational. These two affine chart dimensions are one, by the
   affine-domain dimension theorem; the finite open-cover lemma gives
   `dim(X)=1`. Now [F4] applies, and its uniqueness clause identifies `P^1`
   with the normalization.

3. **Retain the cusp delta calculation (current Step 2.1).** With `u=t^2`,
   the normalization stalk is `k[u]_(u)+t k[u]_(u)` and the image of
   `A_(x,y)` is `k[u]_(u)+tu k[u]_(u)`, since `y=t^3=tu`. The quotient is
   `k`, so `delta_o=1`. The corrected irreducibility and chart check make
   the use of the arithmetic-genus and delta suppliers well-typed. The
   current Steps 3.1/4.1 must cite the newly proved finiteness rather than
   asserting it.

## `ex-smooth-conic-is-projective-line-with-point`

The residual-intersection formula, dense-open inverse calculations, divisor
transport, and `L([P])` conclusion are sound once the conic is proved to be a
curve. Current Step 1.1 is circular: it begins “Since `C` is a curve [F1]”
although the Given data say only smooth conic with a rational point, and [F1]
does not make that conclusion without proving integrality and dimension.

1. **Prove geometric integrality first.** By the actual interface of
   `def-smooth-morphism-to-field-classical`, smoothness persists as
   regularity after every field extension, in particular over `kbar`. A
   reducible quadratic over `kbar` is a product of two lines; if they are
   distinct their intersection is singular, and if repeated the line is
   singular. Both contradict smoothness. Therefore `F_kbar` is irreducible,
   and `C` is geometrically integral. Then choose coordinates over `k`
   sending the supplied rational point to `[0:1:0]` and its tangent line to
   `Z=0`. The coefficient comparison in the current Step 1.1 gives
   `F=aX^2+eXZ+fYZ+cZ^2`, with `f != 0`; since `F` is now known irreducible,
   the factorization for `a=0` proves `a != 0`.

2. **Show scheme chain dimension one from the normal-form affine charts.**
   `D(Z)` and `D(Y)` cover `C`, since the only projective point with
   `Y=Z=0` would be `[1:0:0]`, where `F=a != 0`. On `D(Z)`,
   `a x^2+e x+f y+c=0` is linear in `y` with nonzero coefficient `f`, so
   the chart is `Spec k[x]`. On `D(Y)`, the ring is the domain
   `k[x,z]/(a x^2+e xz+f z+c z^2)`. The displayed polynomial has positive
   degree in `z` (because `f != 0`); the degree-in-`z` product argument
   injects `k[x]` into this quotient, and `z` is algebraic over `k(x)`.
   Thus its fraction field has transcendence degree one and the
   affine-domain dimension theorem gives Krull dimension one. The two
   affine charts are finite type and noetherian; `lem-chain-dimension-open-cover`
   gives scheme chain dimension one. This supplies the missing curve
   hypothesis without a classical-variety dimension shortcut.

3. **Continue with the existing suppliers in valid order.** The closed
   projective conic is separated, finite type and proper. The plane arithmetic
   genus theorem now applies and gives `p_a=0`. Smoothness makes its local
   rings regular; `thm-regular-local-rings-are-normal` makes `C` normal, and
   the identity normal finite birational model plus normalization initiality
   identifies `C` with its normalization. The point projection is a
   rational map from the now-established smooth curve `C` to proper `P^1`;
   `lem-rational-map-smooth-curve-to-proper-scheme-extends` supplies its
   unique extension under the item's explicit Axiom-of-Choice assumption.
   The existing dense-open equalizer supplier proves the two compositions
   are identities. The formula for `dim L([P])=2` uses the actual
   `lem-projective-line-divisors-classified-by-degree` interface
   (`div(g)=[V(g)]-deg(g)[infinity]`); that supplier is still a draft with
   only precheck evidence, as the item's flagged note correctly records.

## `ex-basepoint-linear-system`

The characteristic-free basepoint computations and the map from
`V=span(1,t^2)` are correct. For `W=span(t,t^2)`, the base locus is exactly
`0`, but the statement at current Steps 1.3/3.1 that “W determines no
morphism at all” is false: on the complement the rational map is
`[t:t^2]=[1:t]`, which is the identity and extends to the identity
`P^1 -> P^1`. The dense-open agreement supplier also makes any such extension
unique. The accurate distinction is that `W` does not generate
`O(2[infinity])` at its basepoint, so the base-point-free construction does
not attach a morphism from that generating pair in that line bundle; the
rational map nonetheless extends. Removing the fixed divisor `[0]` gives the
base-point-free moving system in `O(2[infinity]-[0])` and the same identity
map.

There is a separate characteristic-two defect in current [F6] and Step 2.1.
The stated item has no characteristic restriction, but its discriminant
equation `b^2=4ac` is not a smooth rational normal conic in characteristic
two: it becomes the nonreduced double line `b^2=0`. Split the final geometry
by characteristic while retaining the valid basepoint and morphism claims
over every field:

* If `char(k) != 2`, the doubled-divisor parameterization
  `[T:S] -> [T^2:-2TS:S^2]` is the smooth discriminant conic `b^2=4ac`.
  `P(W):a=0` meets it twice at `2[0]` (tangency), and `P(V):b=0` meets it
  at the two distinct points `2[0]`, `2[infinity]` (a secant).
* If `char(k)=2`, the doubled-divisor parameterization is
  `[T:S] -> [T^2:0:S^2]`, the relative Frobenius map to the reduced line
  `b=0`. The discriminant scheme is the nonreduced double line `b^2=0`.
  Thus `P(V)` is the reduced double-divisor locus, not a secant; `P(W)` meets
  its support at `2[0]`, and its intersection with the double discriminant is
  a length-two point. Over an imperfect base field the Frobenius image on
  `k`-points need not be all of that line, so the “square of a linear
  polynomial” clause must distinguish the geometric locus from the
  `k`-rational doubled divisors.

The used definition `def-base-point-linear-system` makes vanishing mean
`ord_x(f)+n_x >= 1`, and its evaluation-map criterion correctly identifies
base-point-freeness. `thm-base-point-free-linear-system-morphism` only
constructs the morphism when that evaluation is surjective; it does not say
that a basepointed subsystem's rational map cannot extend. The item also
calls `def-invertible-sheaf-of-cartier-divisor` and
`thm-line-bundle-rational-section-cartier-divisor` “not yet authored”; both
files now exist on disk but remain draft, so the section dictionary remains
an unverified in-run supplier obligation rather than an absent file.

## Direct consumers and carrier discrepancies

`rg` over the current tree found no other item whose `deps` or mathematical
prose cites any of the four example IDs. The direct content consumers are the
Batch 6 page serialization and the example list
`library/scheme-theory/smooth-proper-curves-divisors-genus-and-ramification-examples.md`.
The library page only lists the examples; it has no separate proof text.

Two serialized statements need correction when the owner releases carrier
edits:

* The `ex-nodal-cubic-normalization-genus` statement in
  `research/frontier-37-owner-30-batch-6.pages.json` omits the item's
  `char(k) != 2` hypothesis. Its proof-contract dependency list otherwise
  tracks the item.
* The `ex-basepoint-linear-system` statement in that same pages manifest is
  the superseded scaffold: it says `span(1,t)` is base-point-free and defines
  the identity, and says `span(t,t^2)` defines a constant map. The current
  item explicitly records why both claims failed, uses
  `V=span(1,t^2)`, and computes the rational map of `W` as the identity.
  The manifest also lacks the characteristic split required for its current
  discriminant-geometry claim.

The conic manifest summary includes `char(k) != 2`; the cuspidal summary
includes `char(k) != 2,3`. Neither has another mathematical item consumer in
the current tree. Root owns all carrier and item edits; this report makes no
claim that the four draft examples or their draft suppliers are closed or
published.

## Final repair record

I repaired only the four released example items. The node and cusp now prove the
normalization map before computing the local delta quotient, then compute the
genus and state the normalization conclusion in dependency order. The delta
steps explicitly identify the displayed map with the normalization before
using its pushforward stalk, and the cusp's subring is localized at its actual
maximal ideal `(t^2,t^3)`. Their proof-step labels follow the dependency
layers, and the cusp's multiline genus step places its citations on the tagged
step line so the repository precheck can verify those dependencies.

The nodal calculation retains the full hypothesis `char(k) != 2`, including
characteristic three. It never divides by three: on `D(Z)` the point `x=-1`
has first partial `-1`; on `D(Y)`, vanishing of the second partial implies
`x^2=1`, where the equation has value `-x^3 != 0`; on `D(X)`, the equation
forces the second partial `y^2-1` to be nonzero whenever the first partial
`2yz` vanishes. At the node the tangent cone factors as `(y-x)(y+x)` with
distinct factors because only characteristic two is excluded. The cusp retains
its stated `char(k) != 2,3` hypothesis and uses the corresponding three chart
gradient checks. Both items explicitly assume the Axiom of Choice in the
Example and Given sections and identify it in the normalization, normality,
delta, and genus supplier interfaces; this records the inherited premise
without enlarging either characteristic hypothesis.

The conic proof first establishes geometric integrality over the algebraic
closure and proves scheme chain dimension one on its `D(Z),D(Y)` affine chart
cover: one chart is `Spec k[x]`, and on the other the positive `z`-degree
equation injects `k[x]` while making `z` algebraic over `k(x)`. The
Noetherian open-cover dimension route then supplies the curve hypothesis.
In the projective-line divisor calculation, an irreducible denominator factor
`g^e` contributes coefficient `-e` at `V(g)`; the degree of the residue
field affects the divisor degree, not this local coefficient. Finite points
are written `[1:c]` with `t=x_1/x_0`, consistently in the calculation and its
later use. The stated Axiom-of-Choice assumption and the flagged draft divisor
supplier obligation remain explicit.

The basepoint example retains its characteristic-free subsystem computations.
For `W=span(t,t^2)`, the base point at zero prevents generation of
`O(2[infinity])`, while the rational map `[t:t^2]=[1:t]` extends uniquely to
the identity. The final pencil geometry is split by characteristic: for
`char(k) != 2` the discriminant is a smooth conic with the tangent/secant
description; for `char(k)=2` its scheme is the double line `b^2=0`, its
reduced support is `b=0`, and the coordinate-square map is finite and
geometrically onto that support, with a possible failure of surjectivity on
`k`-points over an imperfect field. The intersection with the double
discriminant is a length-two point.

Final focused checks, after the final proof and label edits:

* `tools/tsx-run.mjs tools/precheck.mts` on the four repaired item paths:
  PASS, all four direct proofs.
* `tools/rendercheck.mjs` on the same four item paths: PASS; YAML and KaTeX
  parse, with no unbalanced or nested delimiters or multiline display block.
* No carrier, supplier item, shared decision, manifest, receipt, or gate was
  edited or run in this repair.

The four post-repair item SHA-256 values are:

* `ex-nodal-cubic-normalization-genus` —
  `4571653f2f082fd847f8f5a3037fcf9e049bf451029b84ffda78c413e0fd1d92`
* `ex-cuspidal-cubic-normalization-genus` —
  `357655ce0fcbed605ee2f8c688a5113b6c93f12a1e758336aa2c8d952fe3a105`
* `ex-smooth-conic-is-projective-line-with-point` —
  `dc2f980e7913764b831098a24334ab00f1b8b038cd09784b3c5c0a187227221a`
* `ex-basepoint-linear-system` —
  `40f08fa03bbf897cdcdb45048ed374fd7ec2a3a2398140cd2ca878d99e4098f1`

The exact direct content consumer is
`library/scheme-theory/smooth-proper-curves-divisors-genus-and-ramification-examples.md`;
the Batch 6 pages serialization `research/frontier-37-owner-30-batch-6.pages.json`
also contains the four summaries. The carrier mismatches already recorded
above remain for root's integration: the nodal summary omits `char(k) != 2`,
and the basepoint summary still has the obsolete subsystem/map claims and
omits the characteristic split. The cusp and conic summaries state their
existing characteristic restrictions. This repair updates no carrier and
does not assert publication or scope closure.

One additional direct carrier needs synchronization: the Batch 6
`proof-contracts.json` derivation entries are still the pre-repair snapshots.
The nodal entry currently declares steps `1.1, 1.2, 1.3, 2.1, 3.1, 4.1,
5.1`; the repaired item declares `1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1`.
The cusp entry currently declares `1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 4.1`;
the repaired item declares `1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1`. Both
entries need their derivation claims/citations realigned, not just the labels.
The conic entry keeps the same step labels but its serialized Step 1.1 still
assumes “since `C` is a curve” before proving integrality/dimension, and its
Step 1.2 still has the superseded denominator coefficient and `[c:1]`
coordinate. The basepoint contract still has the superseded “defines no
morphism” and characteristic-free tangent/secant claims. These four exact
contract entries and the four page declarations are the consumer interfaces
root should synchronize against the repaired item text. The library example
index only lists the items and needs no mathematical interface change.

## Selected-carrier handoff addendum

After the preceding audit record, root released the four selected Batch 6 page
rows and proof-contract entries for synchronization. The `pages.json` summaries
now match each item's current Statement, dependency list, and in-run status. The
four contract derivation lists and boundary evidence are synchronized to the
current numbered steps. For the nodal and cuspidal examples, the final conclusion
step now cites `[F9]` alongside its existing choice-dependent supplier inputs;
the contract records `def-axiom-of-choice` at step `6.1`. This records the
existing explicit Axiom-of-Choice premise and does not change either proof.

The conic contract's `F7` citation to
`lem-rational-map-smooth-curve-to-proper-scheme-extends` quotes that supplier's
current Statement exactly and records its uses at steps `4.1` and `6.1`. At this
handoff, all serialized supplier-section quotes in the four selected contracts
match the corresponding current source sections. A normalization supplier is
still being edited upstream; root will recheck and synchronize any resulting
Statement quote change, then run the selected strict contract check once on the
stable carriers. No selected strict check is claimed here.

Current item SHA-256 values after the citation-only nodal/cusp tags are:

* `ex-nodal-cubic-normalization-genus` —
  `0b7d1a73a76897efef207af39ca36d975c1eaa9414d692b958ec7f9bc55681f5`
* `ex-cuspidal-cubic-normalization-genus` —
  `5e1100bc705d9e4c595b23c75fd3c6c906c640433a44f3e93c06a6efc2427d84`
* `ex-smooth-conic-is-projective-line-with-point` —
  `dc2f980e7913764b831098a24334ab00f1b8b038cd09784b3c5c0a187227221a`
* `ex-basepoint-linear-system` —
  `40f08fa03bbf897cdcdb45048ed374fd7ec2a3a2398140cd2ca878d99e4098f1`

The synchronized selected carrier hashes at handoff are `pages.json`
`5e55749d1d1e61dcca3c912ca44d4c59b21fe9c32c4aea8e44e1832f48707cc8` and
`proof-contracts.json`
`71333d2480f4c77be13090d7e7f48004cf5fa0b84af263618c4c2d4511c98f58`. Root
owns the final post-drain quote refresh and strict check. Earlier notes above
that describe the four rows as stale are the audit-time observations; this
addendum records their subsequent synchronization.

## Central carrier integration note

Root released the following five Batch 6 rows for carrier-only synchronization:
`def-ramification-index-curve-map`,
`cex-inseparable-map-riemann-hurwitz-naive-fails`,
`ex-divisor-degree-over-nonalgebraically-closed-field`,
`lem-torsion-quotient-invertible-sheaves-effective-divisor`, and
`lem-rational-map-smooth-curve-to-proper-scheme-extends`. Their page summaries,
frontmatter dependency lists and current forward-reference declarations now
match the item files. The definition summary and boundary record preserve the
full criterion that ordinary unramifiedness requires both index one and a
separable residue extension. The Frobenius counterexample summary preserves the
distinction between all geometric closed points after algebraic closure and a
closed point of index one with purely inseparable residue extension over an
imperfect field. The real divisor example retains its single degree-two closed
point and its two degree-one points after base change. The torsion-quotient
summary retains arbitrary base field and the generally noncanonical quotient
isomorphism. The extension lemma includes its thirty declared dependencies and
Choice provenance.

The torsion-quotient proof contract now records all seven Facts and five
numbered steps, including the released citation-only `A1` input at step 1.1.
The other proof-bearing selected contracts record current fact-source quotes,
step claims and all eight boundary dispositions; the definition has its eight
definition-specific boundary dispositions and no proof-step mapping. The
current extension Statement quote was also refreshed, and only that quote was
changed, in the contracts for `thm-curves-function-fields-equivalence`,
`cor-birational-smooth-proper-curves-isomorphic`, and
`cex-rational-map-singular-curve-not-extend-uniquely`. The conic consumer quote
was already current. All four refreshed consumer quotes match the extension
supplier's current Statement, whose item hash is
`0c1970f10b83353c1644b608480d9ef9bb056d9282ca03383814dfc85fbbc0b3`.

A focused carrier consistency comparison found matching current dependencies,
forward references, fact-source coverage, proof-step coverage and source-section
quotes for the selected five, plus exact extension Statement quotes in the
three named consumers. No selected strict contract check or broad gate was run;
root owns the final selected check after the remaining normalization/genus/delta
supplier edits drain.

At this handoff the Batch 6 `pages.json` hash is
`4693f8ee218fbe305cd8a10fe5dfeb481637f3c0cc234aff311f8905140b972d` and the
`proof-contracts.json` hash is
`a222fc7cc9af650b600e9b7874a99aae056fa5a2005c35e16482c8078daa5c88`. The
released torsion-quotient item has hash
`0527427e72563abc968e644458db17d4762761f9493754abc87bc6301965e63a`; its sole
change in this task was the authorized step-1.1 citation tag. The other four
selected item files were not edited in this integration.

## Delta-definition integration note

Root released `def-delta-invariant-curve-singularity` for a narrow interface
addition. Its Definition now states the already-proved consequences from the
following Well-posedness and finiteness section: each local delta is a finite
nonnegative integer and vanishes exactly at regular points; the singular locus
is finite, so the total delta is a finite sum. The proof body and its routes
were not changed, and, as a definition item, it has no Facts or numbered proof
steps. Its Batch 6 page summary and dependency list now match the current
Definition and frontmatter; the proof-contract entry retains empty citations,
derivations and routine steps, with eight boundary dispositions anchored to
the Definition/Well-posedness text rather than invented step numbers.

The exact current Definition-section quote was refreshed in the six direct
Batch 6 consumer contracts:
`lem-normalization-lowers-arithmetic-genus-delta`,
`cor-plane-curve-geometric-genus-delta-correction`,
`ex-hyperelliptic-curve-double-cover`,
`ex-nodal-cubic-normalization-genus`,
`ex-cuspidal-cubic-normalization-genus`, and
`ex-plane-quartic-genus-three-smooth`. Only the citation quote was changed in
each consumer contract. A focused comparison found the delta page dependencies
match its frontmatter and all six consumer quotes match the current Definition
section. No strict contract check or broad gate was run while normalization
sources remain in flight.

Current hashes are: delta item
`df39092149216890ab9b9038b2ff43cc7eb7927c27ae30b98e6b28f9e5447338`, Batch 6
`pages.json` `a59d843e0c65fd7d01baa110bfdfee882291c2a863e78b5405d7933ed2ee8b8e`,
and `proof-contracts.json`
`12f93cd4ceedfafa6f762319fa46ef214f71616c276bbecabf818110dd942ae5`.
