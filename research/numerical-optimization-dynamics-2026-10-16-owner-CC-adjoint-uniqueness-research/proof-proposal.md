# Preserve Countable Choice for differential adjoint uniqueness

Research only. No canonical content, consumer disposition, native record, hashes, runtime or gate was changed. Original100 retains repair and every consumer check. The proposal below closes the precise logical gap without weakening the adjoint Statement or adding Dependent Choice. It is a proved argument proposed for the original owner to incorporate and review, not a new acceptance receipt.

## Verified current gap and smallest prerequisite

The current state lemma proves uniqueness for its Volterra integral equation. Under Countable Choice (CC), it differentiates its constructed integral solution almost everywhere. It does **not** prove that an arbitrary absolutely continuous (AC) differential solution satisfies that integral equation. The adjoint lemma's current F1/Proof3.1 uses the latter implication and therefore needs an explicit supplier.

The existing full AC fundamental theorem assumes CC+Dependent Choice (DC), because its zero-a.e.-derivative constancy supplier uses a Vitali covering theorem with DC. That chosen route does not establish a necessity of DC. In particular, absence of a CC-only local proof would say nothing about independence. Here a CC-only proof is available using the published Cousin gauge lemma and CC-only outer regularity.

The smallest useful intermediate is: **under CC, an AC real function on a compact interval whose derivative is zero almost everywhere is constant.** One may prove this locally as a substantial intermediate lemma and then derive the known-integrable-derivative reconstruction needed for ODEs. There is no need to alter the published DC theorem or the state lemma's original Statement. A separate general FTC theorem is unnecessary for this repair.

## Complete finite-gauge proof of the intermediate

Let F:[a,b]→R be AC and F'=0 outside a null subset of (a,b). If a=b there is nothing to prove. Fix a≤s<t≤b and ε>0. Restriction preserves AC. Let E⊆[s,t] consist of the exceptional null set intersected with [s,t], together with s,t. Finite unions and finite sets are null under CC. Every x∈[s,t]∖E is an interior differentiability point and F'(x)=0.

1. By AC choose d>0 such that any finite family of subintervals of [s,t] with disjoint interiors and total length<d has sum of absolute F-increments<ε/2. Put η=ε/(2(t−s+1)). By the actual CC-only outer-regularity theorem choose **one** open U⊇E with λ(U)<d. This is one existential witness for fixed ε, not a dependent sequence of selections.

2. Define a positive gauge γ on [s,t] explicitly. If x∉E, let k(x) be the **least** nonnegative integer k for which
   |F(y)−F(x)|≤η|y−x| for every y∈[s,t] satisfying |y−x|<2^(−k).
   This set of integers is nonempty by F'(x)=0. The y=x case is equality. Set γ(x)=2^(−k(x)). If x∈E, let k(x) be the least nonnegative integer k such that (x−2^(−k),x+2^(−k))⊆U, and again set γ(x)=2^(−k(x)). This set is nonempty because U is open. Least-natural-number definitions give a single uniquely specified gauge by separation/replacement; no choice of one arbitrary radius for each real is being made.

3. Apply the published `thm-cousins-lemma-for-gauges` to obtain one finite γ-fine tagged partition {([x_(i−1),x_i],ξ_i)} of [s,t]. Its proof recursively retains the left half if that half lacks a fine partition, otherwise the right half. This is a uniquely determined recursion on N and does **not** invoke DC. The nested-interval proof and geometric decay give the contradiction. No infinite family of partition tags is selected; one finite partition is obtained.

4. Separate its finitely many cells by whether ξ_i∈E. Every bad-tag cell lies in U. Their interiors are disjoint, so the sum of their lengths equals the measure of their finite union (shared endpoints are a finite null set) and is at most λ(U)<d. The AC estimate therefore bounds the sum of their absolute F-increments by ε/2. If there are no bad-tag cells, that sum is zero and has the same bound.

5. For each good-tag cell, fineness and the gauge definition give
   |F(x_i)−F(x_(i−1))|≤|F(x_i)−F(ξ_i)|+|F(ξ_i)−F(x_(i−1))|≤η(x_i−x_(i−1)),
   since ξ_i lies inside its cell. Summing over good-tag cells gives at most η(t−s)<ε/2. Empty subfamilies are harmless. Telescoping all cells and using the triangle inequality yields |F(t)−F(s)|<ε. Since ε>0 was arbitrary, F(t)=F(s). Arbitrary s,t prove constancy.

This proof uses CC through outer regularity and the elementary null-set/measure rules. It avoids Vitali selection, DC, and simultaneous arbitrary choices of gauge radii. The good/bad classification does not require E to be Borel; U is open and the bad-cell union is a finite measurable union. Strict gauge containment and the strict measure bound are exactly those required by the current definitions.

## Known-integrable-derivative reconstruction

Assume CC, let y:[0,T]→R^n be AC, h∈L1(0,T;R^n), and y'=h almost everywhere. Put I_j(t)=∫_0^t h_j(s)ds. The existing indefinite-integral AC corollary makes each I_j AC; the existing first L1 FTC, whose explicit axiom is CC, gives I_j'=h_j almost everywhere. H_j(t)=y_j(t)−y_j(0)−I_j(t) is AC: for a prescribed ε use the AC moduli of y_j and I_j at ε/2 and take their minimum. Outside the union of their two exceptional null sets H_j'=0. The finite-gauge intermediate makes H_j constant. At0 it is zero. Thus y(t)=y(0)+∫_0^t h(s)ds for every t, componentwise. Only finitely many coordinate exceptional sets and finite operations are involved.

For the forward adjoint equation q'=Cq+g, any AC q is continuous and bounded on [0,T]. Therefore C∈L∞ and g∈L2⊆L1 imply h=Cq+g∈L1. Applying the just-proved reconstruction puts this arbitrary differential solution into the existing Volterra equation. Its initial value agrees with that of the constructed solution, so **the actual integral-equation uniqueness conclusion** of `lem-ctrl1-measurable-linear-ode-state-map` applies. Time reversal then gives the original backward adjoint uniqueness. Existence continues to use the integral construction plus its CC-only derivative conclusion. All admissible controls and the original uniqueness class of arbitrary AC differential adjoints are retained.

## Existing supplier reading and ownership boundary

Read fully: current adjoint definition and existence lemma; current measurable linear state lemma; current full AC FTC; current DC zero-derivative theorem; AC definition; Cousin gauge lemma and gauge definition; nested interval theorem; CC outer regularity and outer measure definition; first L1 FTC; indefinite-integral AC corollary. Current adjoint-identity/gradient premise explicitly already assumes CC+DC for AC integration by parts. The VI theorem also explicitly lists CC+DC. These were axiom/prerequisite observations only, not consumer reviews; no disposition for their proofs or downstream uses is supplied here.

Original100 should own authoring any new intermediate, the surgical replacement of adjoint F1/Proof3.1, and its required direct/indirect consumer work. No narrowing to integral-only adjoints and no additional DC assumption is necessary for this argument. The new lemma's source/claim provenance must accurately distinguish the classical established constancy claim from this explicit gauge proof; no citation alone substitutes for its local proof.
