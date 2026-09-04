# Final-adjudicator evidence: `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`

Disposition: `accepted-after-review`.

I independently checked the current item against the `derived-functors` / `derived-functors-examples` pair, the batch-11 manifest and proof contract, the page's supplied-resolution-data convention, every cited dependency, both exact judge rejections, and both Alpha adjudications and repairs.

The first fatal defect was real: the old wording of [L3] converted the cited theorem's sufficient right-exactness hypothesis into a necessity claim.  The current [L3] now says only that right exactness is sufficient, and step 2.1 draws only the warranted conclusion that the hypothesis cannot be omitted from the general recovery theorem.  It does not claim that every non-right-exact functor must fail degree-zero recovery.

The second fatal defect was also real: the earlier text used the relative construction without naming a supplied projective resolution datum and wrote an untyped `L_0F`.  The current Given block fixes a datum `P` on a class containing `Z/2Z` and requires `P` to assign the displayed standard projective resolution.  Both proof steps consistently use `L_0^P F`, so the computation is now typed under the library's binding data-supplied convention.

The mathematical calculation is correct.  With `P_1=P_0=Z` and differential multiplication by 2, applying the additive covariant functor `F=Hom_Z(Z/2Z,-)` gives zero in degrees 1 and 0 because every homomorphism from `Z/2Z` to the torsion-free group `Z` is zero.  Hence `H_0(F(P(A)_del))=0`.  In contrast, `F(Z/2Z)=End_Z(Z/2Z)` contains the identity and is nonzero (indeed it is isomorphic to `Z/2Z`).  Thus this supplied datum gives `L_0^P F(Z/2Z) != F(Z/2Z)`, which refutes the universal additive-functor claim and exhibits why right exactness cannot be dropped from the general theorem.  The cited left-exactness theorem, degree-zero recovery theorem, and relative left-derived-object definition are used within their stated interfaces.  The synchronized proof-contract derivations, quotations, and risk note match the final item text.

No external verification was needed: this is a familiar elementary computation with homomorphisms of abelian groups and zeroth homology, and all convention-sensitive claims were checked directly against the repository's local definitions and the controlling page design.  No item, dependency, or metadata repair is required.
