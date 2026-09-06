# FA evidence — queue b/4

Decision: accepted-after-review. Source status: familiar.
Item: `def-evaluation-map-from-cohomology-to-hom-of-homology`.

The final rejection claims the library indexes chain complexes by natural numbers. This is contradicted by the exact published dependency `items/def-chain-complex-in-an-abelian-category.md`, Definition: the family is (C_n) indexed by Z. Likewise `def-cochain-complex-in-an-abelian-category` is explicitly Z-indexed. I read both in full, as well as the direct dependencies `def-cochain-complex-hom-from-a-chain-complex` and `def-homology-object-of-a-chain-complex`, and the intervening cycle/boundary definition. The Hom differential is delta^n(f)=f d_(n+1), so negative degrees are fully defined.

Independent mathematical check: a cocycle satisfies f d_(n+1)=0 and therefore kills boundaries. If z changes by d_(n+1)y then its value changes by zero. A coboundary is g d_n and evaluates to zero on z in ker d_n. Thus restriction to cycles descends through both quotients and gives a homomorphism into Hom_R(H_nC,G), including degree zero, negative degrees, zero complexes, and zero coefficients. No freeness, PID, boundedness, choice or resolution hypothesis is needed for this definition. This elementary quotient calculation is familiar enough not to require external verification.

I reviewed the original judge rejection (missing construction), Sol's adjudication and repair, and the reader-warning disposition recorded in `research/frontier-31a-alpha-step8-b.md`. Sol supplies exactly the formerly missing source, target, formula and independence argument. Batch-9 notes and manifest, and both UCT/Kunneth A/B page carriers, preserve its placement before cohomological UCT. There is no proof-contract entry for this definition in either the batch or merged contracts and no separate item risk_review in the manifest. Its n/a precheck/proof provenance is consistent with the definition format.

Validation: focused precheck exited 0, correctly reporting 0 proof-bearing items checked. Direct inspection verifies the formula and its declared dependency closure. Current item and metadata bytes remain unchanged. No pass stamp or judge verdict created.

Next action: record acceptance of current bytes; begin position 5 only after recorder acceptance.

Context refresh at position 11: the independently repaired Kunneth Tor-map peer now states its integer degree explicitly. Its construction and the added freeness citation preserve the same natural surjection interface. I checked that this peer change leaves this earlier item and its direct dependencies unchanged and does not affect its proof; reseal the same decision for the updated A/B context.

Context refresh after position 24: The cohomological UCT splitting now explicitly quantifies R,C,G,n and displays the same exact sequence; its section is [f q pi] for a chosen cycle projection. This does not alter the earlier evaluation formula, cross-product, Tor projection, or the shear obstruction to a natural splitting. Those proofs remain independent of any such choice. Own item bytes are unchanged. Reseal the same decision.
