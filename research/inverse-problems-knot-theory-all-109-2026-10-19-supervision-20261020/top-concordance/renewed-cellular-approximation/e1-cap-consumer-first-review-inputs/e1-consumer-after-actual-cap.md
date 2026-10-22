# E1 consumer after an actual meridional cap

New source-first E1 consumer, with the geometric inputs stated literally. It does not claim that the held exceptional-endpoint draft has supplied them. The chosen source route remains Cantrell/Cantrell–Edwards/Lacher, not a parallel CSI proof.

## Exact inputs

Let N be a connected metrizable TOP5 manifold without boundary, with ordinary homotopy type S⁴×R, exactly two ends, and 1-LC at each end. Supply an ACTUAL proper line L joining the two ends and an ACTUAL product tube around it. Supply an actual homeomorphism N\L≈R⁵. Finally supply the actual cap operation of `actual-local-chart-meridional-cap.md`: a compact parametrized locally flat S⁴=S=A∪D_B in N, meeting L just once, with its original transverse meridian product germ. No proper homotopy-equivalence hypothesis is added.

The finite compact-boundary collar patching operation is proved separately in `compact-boundary-finite-collar-patching.md` from Connelly1971. It has not been inferred from the narrower existing compact-M collar Statement. The final marked half-product operation is consumed only at root's adopted contract: an actual collared boundary S⁴→E⁵ which is a homotopy equivalence, with E one-ended and1-LC at infinity, gives an actual S⁴×[0,∞) parameter agreeing with a smaller supplied boundary collar.

## 1. Construct an actual bicollar without assuming separation

The germs of the two local flanks of S form a two-sheeted covering of S. In a local flat chart these are exactly the positive and negative normal half-products; on overlaps their labels either agree or interchange, locally constantly along S. Because S≈S⁴ is simply connected, this covering is trivial. Fix the labels once.

Cut N along S: as a set take N\S together with two copies S₊,S₋. Give a boundary point the half-chart neighborhoods supplied by its labeled local flank. Distinct boundary points with different images in S are separated by ambient neighborhoods, and the two points over the same point are separated by the two local half-charts. An interior point is separated in an ordinary ambient chart. Thus the resulting cut space M is Hausdorff and second countable, with actual TOP5 boundary S₊⊔S₋; it need not be connected or compact. The quotient projection identifies corresponding boundary points and is injective off that boundary.

Apply the finite compact-B collar theorem to B=S₊⊔S₋ in M. Its embedding is on the DISJOINT union of the two boundaries, so its two collar interiors are disjoint. Projecting them back and pasting along their common boundary parameter gives an ACTUAL embedding

    c:S×[−1,1]→N,       c(x,0)=x,

whose open part is a neighborhood of S. The inverse charts come from the cut half-charts. This constructs the bicollar before any claim that N\S has two components.

## 2. Exactly two components, and one original end on each side

Excision in this bicollar identifies H₁(N,N\S;Z) with H₁(S×(−1,1),S×((−1,0)∪(0,1));Z)=Z, and H₀(N,N\S;Z)=0. Since H₁N=0, the long exact sequence gives

    0→Z→H₀(N\S;Z)→Z→0.

The group H₀(N\S) is free on its components, so there are exactly TWO components. Write their closures E₊,E₋. They are TOP5 manifolds with the same actual boundary S, carrying the two restrictions of c.

The supplied line crosses S exactly once in its actual transverse meridian germ. Its two remaining tails consequently lie in the two different complementary components. Each tail reaches its originally designated end of N. Removing the compact S creates no additional infinity; outside a compact neighborhood of S the two sides inherit exactly the two original end neighborhoods. Thus each E± has one end, with the original1-LC property at that end.

## 3. The sphere has degree one in H₄N, by the actual line complement

No extra Poincaré-duality theorem is needed for this step. Excision around the ACTUAL product tube identifies

    H₄(N,N\L;Z)=H₄(R×D⁴,R×(D⁴\{0});Z)=Z.

Because N\L≈R⁵, both its H₄ and H₃ vanish. The long exact sequence therefore makes H₄N→H₄(N,N\L) an isomorphism. The fundamental class of S maps to the displayed relative generator: in a small neighborhood of its sole crossing point the pair map is the standard transverse meridian D⁴→R×D⁴, with sign fixed by the chosen product germ. Excision on S and H₄(S,S\{0}) gives the same local generator. Consequently

    i_*:H₄S→H₄N

is an isomorphism, with the supplied meridian orientation determining its sign. This argument uses the actual complement R⁵, not just an algebraic intersection number asserted without a pairing.

## 4. Both half-inclusions are homotopy equivalences

Thicken E₊ and E₋ slightly across the actual bicollar to an open cover of N. Each thickening deformation retracts to its closed side by the explicit normal-coordinate map t↦max(t,0) or t↦min(t,0); their intersection retracts to S. VanKampen gives

    π₁N=π₁E₊ * π₁E₋,

because π₁S=0. Since π₁N=0, each free factor is zero.

For positive k≠4, Mayer–Vietoris and the homology of N≈S⁴ imply H_kE₊⊕H_kE₋=0. In degree4 the exact sequence is

    0→H₄S→H₄E₊⊕H₄E₋→H₄N→0.

Let i±:H₄S→H₄E± and j±:H₄E±→H₄N be induced by inclusion. Section3 says j±i±=i_* is an isomorphism. Identify both outer groups with Z using i_*, so each middle group splits as i±Z⊕K±, with K±=kerj±. The Mayer–Vietoris boundary image is the diagonal (i₊a,−i₋a). Its cokernel is Z⊕K₊⊕K₋, while exactness identifies that cokernel with H₄N=Z via j₊+j₋, which kills both K±. Hence K₊=K₋=0 and both i± are isomorphisms. This handles torsion and non-finite generation without a rank shortcut.

Both S and E± have manifold CW type. The inclusions are therefore homotopy equivalences: their mapping cones are simply connected and acyclic, so the least nonzero homotopy group would contradict Hurewicz; Whitehead then gives contractibility of the cones. No PL structure on E±, four-dimensional Whitney theorem or arbitrary annulus theorem enters this step.

## 5. Apply the actual marked half-products and paste

Each E± now has exactly the inputs required by the adopted marked S⁴ half-product: one end,1-LC there, the actual S boundary collar and the proved boundary inclusion homotopy equivalence. Use the SAME parameter of S on both sides. Choose the smaller collar output permitted by that contract on a common subinterval of c, and identify the negative product coordinate by reflection.

The resulting maps E₊→S⁴×[0,∞) and E₋→S⁴×(−∞,0] agree on their actual boundary and on the selected common collar after reflection. Since E± are closed in N and cover N, the pasted map and its pasted inverse are continuous. This is an actual homeomorphism N≈S⁴×R with the displayed smaller sphere-product germ.

## Status and remaining input

This proves the E1 consumer at the exact actual-cap/complement inputs, using the separate finite collar patching lemma. The raw R5 recognition and marked half-product are used by Statement only; no accepted proof was inspected. The proper line/tube has been adopted only for actual DIFF5 sources in the current run, so general TOP line-neighborhood existence has not silently acquired coverage here.

To close the source route in the actual application, the remaining work is precisely to obtain the exceptional-point pair chart from Lacher's boundary Corollary2.4 via the selected Cantrell/CE chain and the adopted local union. The new endpoint draft's existing FIRST findings and one focused repair/final budget remain intact. No original annular closure or canonical publication is claimed by the conditional-input formulation of this consumer.
