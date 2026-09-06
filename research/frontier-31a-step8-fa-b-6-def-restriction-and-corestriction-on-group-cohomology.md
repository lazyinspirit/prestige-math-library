# FA evidence — queue b/6

Decision: repaired. Source status: familiar.
Item: `def-restriction-and-corestriction-on-group-cohomology`.

I checked every original direct dependency in full: group-cohomology definition, restriction/induction/coinduction definition, adjunction theorem, group-ring freeness lemma, and derived universality theorem. I also read the exact positive effaceability and effaceable-universality theorem interfaces used in the repair. The batch-10 convention notes and group-cohomology A/B pages require integral left modules and explicit coset handedness. This definition has no proof-contract entry or separate manifest risk_review.

The original Terra defect was an unspecified cochain transfer; Sol legitimately replaced it with a universal-delta-functor construction. The final rejection objects to a missing supplied transversal. Finite index actually supplies one by finite choice; nevertheless Sol's text also calls both delta functors universal before restricting to finite index and leaves the preservation/effacement step compressed. I repaired these scope/interface gaps explicitly.

For arbitrary H≤G, exact restriction gives a target delta functor on G-modules. The positively effaceable source H^*(G;-) is universal, which alone defines restriction from the degree-zero inclusion. No transversal is needed here. For corestriction, only finite index is used. A finite left transversal makes Z[G] free as a right Z[H]-module, exactly the handed interface of the cited lemma. Induction is exact (underlying finite direct sums). By its left adjunction, restriction then preserves injectives: extend the corresponding map across the induced monomorphism into the G-injective. The supplied G-injective embedding effaces H^n(H;Res(-)) for n>0. The explicitly cited effaceable-universality theorem now applies on G-modules. Replacing x by xh fixes xm for H-invariant m, and G permutes left cosets; these establish that the norm is defined and has the right target. Its naturality is termwise linearity. The unique delta extension defines all corestriction degrees.

This argument is familiar homological algebra and finite group-coset algebra; no external verification was needed. In particular, finite choice does not require full AC, while I have not asserted arbitrary-index freeness under DC. Supplied resolutions for both module categories are now explicit. H=G, degree zero, and index one give identity inclusion/norm as expected.

Changed the queued definition and its batch-10 manifest dependency list; no dependency item was changed. There is no separate proof contract for a definition and no prerequisite licence is needed. Focused precheck exited 0 with 0 proof-bearing items checked. The substantive validation is the adjunction extension argument, finite-choice boundary, and norm calculation above. No verdict or pass stamp was created.

Next action: record current bytes; begin position 7 only after recorder acceptance.
