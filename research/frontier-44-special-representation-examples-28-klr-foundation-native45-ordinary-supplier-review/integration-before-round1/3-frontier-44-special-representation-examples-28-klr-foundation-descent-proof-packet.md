# Proper Čech and hypercover descent proof packet

Exact three draft supplier bodies, in dependency order:

1. `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`.
2. `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`.
3. `thm-proper-hypercovers-compute-constructible-derived-cohomology`.

They are in this namespace's `-drafts/items/` directory. The new A/B inventory and exact frontmatter dependencies are bound in `-inventory-proofcontracts.json`; 3A+2B is the minimum local pair, because the published Alexander–Whitney theorem only covers singular-chain products and does not prove the arbitrary bicosimplicial derived-total comparison needed here. The new comparison is proved with specified contractions of representable simplex-product models; no unproved generic Eilenberg–Zilber theorem is imported.

## Proof contract

For proper-surjective f:Y→X and F bounded constructible over a field, proper base change at x identifies the augmented internal-cohomology row with

```
Hq(Fx) -> Hq(Yx,Fx) -> Hq(Yx²,Fx) -> ... .
```

The fiber Yx is nonempty. Choose just one point y to demonstrate stalk exactness. Inserting y as first coordinate induces h on cohomology; deleting coordinates induces alternating δ. The identities d0j=id and dij=jd(i−1) for i>0 prove hδ+δh=id including the augmentation. This is an actual row contraction; positive cohomology of Yx is retained. No local section, connectedness, smoothness, singular-cochain comparison, or acyclicity of individual fibers is assumed.

With internal lower bound a and simplicial p≥0, each total diagonal p+q=m is finite. The augmented-cone spectral sequence therefore has zero horizontal homology at every stalk and converges to zero. No infinite product/stalk interchange or finite-dimensional-cohomology assertion is used.

For bounded hypercover U of height n+1, let V=cosk_nU. The complete DHI PropositionA.4/LemmaA.5 argument is reconstructed directly on chain totals: Uj→Vj is a finite pullback/product of the proper-surjective (n+1)-matching map. The bisimplicial row W(r,j)=Uj^(r+1) over Vj is its actual Čech nerve, so each row computes Vj. The proved general total/diagonal lemma identifies the double total with the total on D(j)=W(j,j). U is a retract of D over X: repeat all factors for U→D, and project the first factor in degree n+1 for D→U; lower degrees agree since Uj=Vj there, and coskeleton extends the map. Consequently the augmented U total is a retract of the augmented D total, giving the bounded-height induction.

For an arbitrary hypercover, cosk_N sk_N U is bounded and agrees with U through N. Total cohomology in degree m uses chain degrees m−1,m,m+1, hence only simplicial levels p≤m−a+1. Taking N at least that large proves descent in degree m; doing so for every m proves the full augmentation. This is why constant-sheaf degree n needs matching levels through n+1.

Levelwise product of two proper hypercovers is a proper common refinement because finite matching limits commute with products. Its maps induce canonical comparisons through X. Further smooth-projective refinement uses the independently supplied resolution construction, since a product of smooth maps over singular X need not itself be smooth.

## Authoritative evidence actually read

The complete full DHI PDF was retrieved, and the full written proofs of A.4/A.5 and A.7–A.9 were actually read. The bounded-hypercover argument used locally is precisely its finite matching, bisimplicial Čech and retract construction; the model-category localization existence used elsewhere in DHI is not an imported dependency here. Full Stacks Hypercoverings was retrieved; complete written proofs at tags01G9,01GC–01GF and01GV–01GY were actually read. These provide additional general-site acyclicity/injective and total spectral evidence, rather than a falsely asserted analytic-proper-site equivalence. Full Stacks Simplicial Methods was retrieved; written normalization/simplex and prism proofs in Sections23 and27.1 were actually read. Exact SHA hashes, body paths, reading limits and the failed SGA4 retrieval are in `-source-readings.json`.

## Upstream construction boundary

These local descent proofs use the actual targets:

- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`: analytic proper base change, exact inverse image, coherent functoriality for all simplicial operators, and derived right-adjoint composition.
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality`: restriction to constructible complexes; each pulled coefficient remains bounded below.
- `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`: the general coherent simplicial-derived total model constructed with coinduced injective resolution, with a uniform internal lower bound and finite-degree truncations. Its local-section conclusion is not used as a substitute proper-descent theorem.

These targets are being constructed in their separate authorized lanes. Nothing here certifies those unfinished inputs as available. The present descent argument introduces no finite-dimensional cohomology requirement and no new arbitrary choice beyond inherited resolution construction; all inherited AC is explicit in the two geometric descent statements and dependencies. The general bicosimplicial algebra lemma is choice-free.

## Consumers and verification

The author read and checked the actual proper-weight, hyperresolution and nodal example bodies. A real missing bridge was found in the nodal example's abstract two-term square inference; a direct normalization-Čech E2 calculation was supplied and applied by the monodromy owner, then the corrected body was reread. `-consumer-checks.md` records the concrete calculation and alignment. `-checks.json` binds current hashes and actual scoped format results. These are local checks and do not constitute independent mathematical audit, a readiness gate or canonical integration.
