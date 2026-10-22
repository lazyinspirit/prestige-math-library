# New local union construction: explicit half-disk collapse

This research draft supplies the last local step of the two-flat-half-disk union proof under its exact angular tangency hypothesis. It is not yet an isolated-point or annular theorem. The preceding angular normalization is a separate new obligation below; neither it nor the locally-flat arc conversion is silently accepted.

## Source extent and useful correction

A. V. Chernavsky, *Theorem on the union of two topologically flat cells of codimension 1 in Rⁿ*, Abstract and Applied Analysis 2006, Article 82602, DOI https://doi.org/10.1155/AAA/2006/82602 , has been acquired as the complete public archived publisher PDF `annular-primary/chernavsky2006.pdf`, ten physical PDF pages: nine mathematical printed pages 1–9 followed by a publisher advertisement. All nine mathematical pages have been visually read, with printed page 7 enlarged to inspect the four-sheeted-cover formulas. This is an open-access CC BY primary article. It contains explicit fence, ramified-cover, and conjugated-collapse constructions in place of Kirby's earlier unprovided joint Cantrell–Lacher operations. Its isolated-point corollary still imports boundary-point flattening; reading it does not itself fill that import.

The following collapse is reconstructed directly in Cartesian coordinates. In particular no global extension exercise at the boundary of the equatorial disk is needed: the desired application uses only a neighborhood of an interior equatorial point. Some printed subscripts/signs in the source are inconsistent; the formulas below specify their own domains and are the mathematical claims of this draft.

## 1. Exact local input

Write R⁵=R³_x×R²_(s,t), let E=R³×{(0,0)}, and use oriented polar angle θ in each (s,t)-plane, with θ=0 the positive s-axis. Let D± be the two halves s≷0 of the unit 4-disk t=0. A point of the negative half-disk has coordinates y=(x,s,0), −a(x)≤s≤0, where a(x)=sqrt(1−|x|²).

Suppose p is an open embedding defined near E after deleting D−\E, fixes E, carries the positive half-disk into the positive half-space, and preserves angular approaches: for every compact equatorial subdisk E₀⊂int(E∩D±) and every θ in [π/2,3π/4] or its negative, a sequence z_j→(x,0,0), x∈E₀, whose angles tend to θ has p(z_j)→(x,0,0) with angles tending to θ. Require the same property for the inverse on its image. Uniformity over x∈E₀ follows from this sequential formulation and compactness; it is part of this input, not inferred from pointwise tangency of a single ray.

Then D−∪p(D+) is locally flat near every point of int(E∩D±). The output includes an actual ambient pair chart fixing D− pointwise there.

## 2. A displayed quotient map

Set κ=π/4 and α(s)=π/2−κs. For |x|<1 define w(x,s,t)=(x,W_x(s,t)) by the following formulas, where τ=|t| and σ=sign(t):

* If s≥0, W_x(s,t)=(s,t).
* If −a(x)≤s≤0, W_x(s,t)=(τ cos α(s), σ τ sin α(s)).
* If s≤−a(x), W_x(s,t)=(s+a(x)+τ cos α(−a(x)), σ τ sin α(−a(x))).

For |x|≥1 use w=id. At t=0 use σ τ=0. These formulas agree at s=0 and s=−a(x). As a(x)→0 they tend uniformly on compact sets to the identity, so w is continuous also at |x|=1.

For fixed x with a(x)>0, w collapses exactly the interval [−a(x),0]×{0} to the origin. It is one-to-one elsewhere. Indeed the right half-plane is fixed; the upper interior strip maps bijectively onto the sector π/2<θ<π/2+κa(x); and the upper exterior strip maps bijectively onto the remaining upper-left region bounded by the extreme ray and the negative s-axis. The lower half-plane is symmetric. On the interior sector the inverse is explicit:

    s=(π/2−θ)/κ,   t=±r.

On the exterior sector the inverse is obtained first from t'=σ τ sin α(−a(x)), then from s'=s+a(x)+τ cos α(−a(x)). Thus w is an actual homeomorphism off D− onto R⁵\E. The only nontrivial point inverses are the displayed compact intervals; their quotient topology is also checked by these formulas, rather than supplied by an unproved cell-collapse assertion.

## 3. Conjugation and extension

Off D− define H=w⁻¹ p w wherever this composition is defined. On D− define H=id. After restricting to a small neighborhood of an interior point y=(x,s,0) of D−, this is an actual map, because w carries that neighborhood into the given domain of p near (x,0,0).

For −a(x)<s<0, a sequence z_j off D− tends to y exactly when its x-coordinate tends to x, the radius of w(z_j) tends to zero, and its angle tends to α(s) or −α(s), according to the sign of t_j. The explicit inverse formula in section 2 proves both implications. Angular approach preservation for p therefore implies H(z_j)→y. At s=0 use one-sided squeezing between α(−ε) and the fixed positive half-plane; at s=−a(x) use squeezing between the extreme interior ray and the exterior-strip inverse formula. These are the same finite inequalities as in section 2. Hence H is continuous on D−. Applying the identical argument to p⁻¹ shows its inverse is continuous there. Thus H is an actual ambient homeomorphism on a neighborhood of the chosen negative half-disk point.

The map w fixes the positive half-space, and p(D+) lies in that half-space, so H|D+=p|D+. Also H|D−=id by definition. Consequently H sends the standard locally flat disk D−∪D+ to D−∪p(D+) and supplies the required pair chart. At an equatorial point x with s=t=0, the preceding one-sided squeeze gives the same conclusion on a full neighborhood, since all nearby negative-disk points have s close to zero. This is the local union conclusion promised in section 1.

## 4. Exact preceding angular-normalization work still owed

To turn section 3 into the full union theorem one must construct the following actual p from two supplied flat-half-disk charts, preserving the relevant smaller equatorial neighborhood.

1. Straighten the negative half-disk with its supplied chart. Use continuous fences, chosen by positive distance from the other half-disk off E, to place the positive half-disk inside a narrow positive angular wedge. Extend its own flat chart to an ambient embedding h on a sufficiently narrowed positive wedge. The input charts, rather than a guessed extension over E, must supply this step.
2. Replace h, without changing its positive-half-disk image, by an embedding respecting four separated angular sectors. The source's construction uses ν(x,r,θ)=(x,r,4θ). Its lift is an actual homeomorphism off E because h fixes E and its local meridian has degree +1 (reverse orientation first if needed). Choose the lift preserving the central sector. In each of the four sectors let β compress the central angle by four and interpolate monotonically between its boundary angles. Then β⁻¹ h̃ β agrees with h on the central sector and respects its four translates. Agreement with h on an unrelated negative input half-disk is not automatic and is not asserted here.
3. Use angular piecewise-linear homeomorphisms and their conjugates to make the images of four separator half-planes approach the corresponding half-planes. Iterate inside the components between already controlled separators for a countable dense angle set. Both ambient displacements and inverse displacements must be chosen summably small using the actual current homeomorphism's modulus of continuity. Order/separation between adjacent controlled half-planes then gives the sequential angular condition of section 1 for every angle and for the inverse. Merely saying “the dense set suffices” is not this proof.
4. Apply section 3 with a fixed negative separator half-disk outside the positive wedge. A final circlewise monotone angular map moves that separator to the standard negative half-disk while fixing the positive wedge. This avoids any unsupported claim that the branched-cover modification fixes the original negative input half-disk throughout.

Chernavsky's printed pages 5–8 give candidate finite conjugation/fence moves for these steps. Their full relative support and dense-angle limit reconstruction is still owed in this draft. In particular this file does not yet claim a completed replacement of Kirby's missing angular-straightening input, and it does not use a named union theorem as a supplier.

## 5. New eight-sector initialization

This section develops a candidate normalization which avoids the problematic negative-input agreement in the original four-sheeted presentation. All constructions are germs over a compact smaller equatorial 3-disk E₀, with a larger equatorial buffer available. A continuous positive radius function on that larger disk supplies the working normal circles; making it smaller never changes the two half-disk germs to be standardized.

First normalize the given flat negative half-disk to D− by its actual supplied ambient chart. The positive half-disk meets it only in E. For every sufficiently small normal circle, the closed positive half-disk image therefore misses its negative-axis point. Choose a positive continuous angular clearance smaller than its distance from that point. Existence follows by locally finite rational-ball refinement of the open complement and a continuous partition of unity; the clearance may tend to zero arbitrarily quickly toward E. Circlewise monotone maps fixing the negative axis move the two clearance fences to angles ±π/32, placing the whole positive half-disk in that narrow sector. The maps fix (x,r), so they and their inverses extend continuously by identity on E even if the angular slopes are unbounded.

The supplied positive-half-disk chart extends over an actual open neighborhood of that compact half-disk. Thus it supplies an open ambient embedding h fixing E, taking D+ to its current image. Narrow its domain about the positive half-plane with a continuous angular width whose image is inside the narrow output wedge. A circlewise homeomorphism of the source, fixing the positive half-plane, stretches the central source wedge Q[−π/16,π/16] onto that narrower domain. After this precomposition, h takes the central wedge into itself. The output half-disk has not changed. Each assertion is only near E₀; larger source/target buffers ensure the operations are defined there.

Off E take the explicit cyclic cover ν(x,r,θ)=(x,r,8θ), with angles understood modulo 2π. Since h fixes E and carries the local oriented meridian to itself, its induced homomorphism on the local punctured normal product's π₁=Z is +1. Reverse an initial normal orientation if needed. The covering lift h̃ therefore exists; choose the sheet whose central wedge maps to the central wedge. This claim can also be checked without a lifting theorem: choose a continuous real argument along paths from the positive ray, and note that traversing one input meridian adds exactly 2π to h's argument. Dividing that argument by eight gives the lift. The inverse construction lifts h⁻¹, proving that the lift is an open embedding. It extends by identity on E because its radius tends to zero exactly when the original radius does, uniformly on the compact equatorial buffer.

Let β be a circlewise orientation-preserving homeomorphism commuting with θ↦θ+π/4, equal to θ↦θ/8 on [−π/16,π/16], and interpolated linearly to its translates between those intervals. Put k=β⁻¹ h̃ β, identifying the cover and base ambient products. On the central wedge νβ=id, so k=h there. The eight sectors centered at jπ/4 with half-width π/16 are each preserved by k. In particular k(D+)=h(D+).

Apply a further circlewise output homeomorphism ρ as follows. For a continuous δ(x,r)>0 tending uniformly to zero as r→0, compress each of these eight sectors into a δ-neighborhood of its central angle, and interpolate monotonically in the intervening gaps. At ±π/2 put the compressed sector strictly on the right side, inside (−π/2,π/2), while still tending to ±π/2. At 3π/4 keep that central angle fixed pointwise. This gives p=ρk whose eight separator images approach the corresponding standard half-planes. The entire image of the right half-space is in the right half-space: the two image boundary half-planes lie there; the connected left half-space misses them and contains the image of the negative center ray, so it belongs to the negative component. The image of the positive component cannot enter it. This is a local separation assertion in the smaller buffered product; no global half-space unknotting is invoked.

The auxiliary standard half-disk at angle 3π/4 has remained fixed under the OUTPUT changes. The lift itself need not fix that input disk; this does not matter, since the disk to be united with p(D+) is the fixed standard auxiliary disk, not k(D−). An angular map fixing the central wedge identifies the original D− with this auxiliary disk before the lift replacement. Thus the tracked union germ has been changed only by displayed ambient homeomorphisms and by replacement of an extension which agrees on D+.

## 6. One new separator: the finite conjugation formula

Here is the finite operation used in the limit. Suppose c<a<b are already controlled separator angles, and d∈(a,b) is to be controlled next. If a is the leftmost available separator use the reflected construction with an auxiliary angle on the right. Rescale the angle interval so that c=−π/4, a=0, d=π/4 and b=π/2. Other separator angles lie outside this interval. All supports are confined to a sufficiently small normal-radius neighborhood where their images miss the output angular sector (0,π/4).

By a preliminary circlewise output map, supported in vanishing angular neighborhoods of the finitely many controlled separator images, place pΠ₀ just on the positive side of Π₀ and pΠ_(−π/4) just on the negative side. Their tangency is retained. All other separator images are kept disjoint from the subsequent output sector; the fixed auxiliary negative half-disk is untouched. Continuous fences achieve these one-sided placements because the existing separator images are disjoint off E and approach their corresponding distinct angles.

Choose a fence S₁ on the positive side of Π₀ so close that p(S₁) lies in (0,π/4) and approaches Π₀. Let τ₁ be a circlewise homeomorphism supported in Q(0,π/2), taking Π_(π/4) to S₁, and put t₁=pτ₁p⁻¹ and p₁=t₁p=pτ₁. Thus p₁Π_(π/4) lies just above Π₀, while p₁Π₀=pΠ₀.

Choose a fence S₂ just above Π_(−π/4) so close that p₁(S₂) lies in (−π/4,0). Let τ₂ be supported in Q(−π/4,π/4), take Π₀ to S₂, and set t₂=p₁τ₂p₁⁻¹, p₂=t₂p₁. The image p₂Π₀ is now negative, while p₂Π_(π/4)=p₁Π_(π/4) remains positive.

Choose an output fence F above Π₀ but below p₂Π_(π/4), and another fence G below and approaching Π_(π/4). A circlewise τ₃ supported in Q(0,π/4) takes F to G, so τ₃p₂Π_(π/4) lies between G and Π_(π/4). Define the actual ambient change

    φ=t₂⁻¹ τ₃ t₂ t₁,       p_new=φp.

The support of t₂ has positive boundary p₁Π_(π/4), which approaches Π₀. Hence, after another radius shrinking, it misses G and a neighborhood of Π_(π/4). Consequently t₂⁻¹ fixes the new separator there, and p_newΠ_(π/4) approaches Π_(π/4). On Π₀ the τ₃ factor is the identity after the t₂ move, so t₂⁻¹ cancels t₂ and p_newΠ₀=pΠ₀. The same direct cancellation holds on Π_(−π/4) and on Π_(π/2). Every other previously controlled image is fixed by the conjugated factors, and was arranged to miss τ₃'s output support. Only the preliminary one-sided placements may change their actual images; these placements keep their tangency.

Every factor has an explicit isotopy: interpolate its increasing circle map linearly with the identity and conjugate that isotopy by the displayed current embedding. Supports are inside the actual image of the indicated sectors or the indicated output sector. All maps extend by identity over E and the fixed negative auxiliary disk. No ambient extension over a missing disk is asserted.

## 7. Dense angles and inverse control

The limiting construction requires more than pointwise density. Refine a dyadic subdivision of [−π/2,π/2], inserting all its new midpoints at level ℓ. For each insertion choose an adjacent old separator as the auxiliary c. Its working interval has at most three consecutive intervals of the old subdivision. Divide the insertions into finitely many classes, for example their interval indices modulo eight, so the corresponding enlarged working intervals in one class are disjoint. Perform one class simultaneously, and the finitely many classes successively.

At every finite level, the finitely many old separator images approach their named angles uniformly over E₀. Shrink the normal radius for this level so that each conjugated support pQ(c,b) is contained in the output angular interval enlarged by less than 2^−ℓ. To justify this containment, the two boundary images are within that error of their named half-planes; separation labels the intervening component by its already controlled interior separator. The inverse image labeling is identical. The preliminary one-sided placements use the same enlarged intervals. Therefore each class changes the OUTPUT angle by at most C2^−ℓ, where C is independent of ℓ. Since there are a fixed finite number of classes per level, the total angular displacement of the level and of its inverse is bounded by C'2^−ℓ.

Independently choose the working radial neighborhoods small enough that both the ambient displacement at level ℓ and the displacement pulled back by the current inverse are below 2^−ℓ times the prescribed spatial control function. The control function vanishes on the boundary of the larger equatorial buffer and on E. This is possible by uniform continuity of the finitely many current maps and their inverses on a compact smaller buffer. The exact inverse modulus, rather than a forward ε-bound alone, is used at every choice. The products and inverse products consequently converge uniformly on compacta to inverse homeomorphisms. They fix E and the auxiliary disk, and are identity outside the larger working buffer.

Fix an angle inserted by level m. Every finite later level preserves its tangency. Given ε>0 choose ℓ≫m so the total remaining angular displacement is below ε/3. The finite composition through level ℓ has the required angular error below ε/3 sufficiently close to E₀. Thus its limiting separator has error below ε. This proves tangency for the limit at every dyadic angle. For an arbitrary angle, enclose it between two dyadic angles with gap below ε. Their images separate the actual image sector; the same local component labeling gives an angular error at most that gap plus the two endpoint errors. This proves the full sequential angular condition in section 1. Applying the same argument to the inverse gives its asserted inverse condition as well.

## 8. Candidate local union conclusion and exact limits

Sections 5–7, followed by the explicit conjugated collapse of sections 2–3, give a candidate complete LOCAL union proof for two actual flat 4-half-disk germs in a five-manifold meeting along their common parametrized 3-disk. The smaller equatorial neighborhood and a fixed auxiliary half-disk are retained. The proof never assumes that an arbitrary locally flat arc is already ambient polyhedral. It also does not use a global annulus or a TOP4 Whitney operation.

This is NEW unreviewed mathematics. In particular its finite fence placements, local separation and the simultaneous control of the dense-angle limit must receive the first independent mathematical review before this conclusion is used as a supplier. The arc/boundary-point flattening import remains separate. The meridional cap and full annular E1 are therefore still held, even if this local union operation is subsequently accepted.
