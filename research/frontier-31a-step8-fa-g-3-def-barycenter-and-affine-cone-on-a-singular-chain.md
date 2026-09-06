# FA terminal evidence — queue g/3

Item: def-barycenter-and-affine-cone-on-a-singular-chain. Decision: repaired.

Independently read the definition, both cited published dependencies, its batch-12 manifest/coverage and A/B context, group-g sign conventions, reader/refute-12, the current subdivision and prism definitions, Alpha's adjudication and repair, and the two Terra rejections (2026-09-05T18:50:30.854Z and 2026-09-05T21:36:38.471Z). Both batch and merged proof-contract maps have no entry for this definition, as expected. The refuter's original prism input-domain concern reinforces the need to specify affine chains in the whole convex standard simplex.

Alpha correctly made a lifted chain part of the input, avoiding ill-defined coning in an arbitrary X. Terra correctly rejects the remaining degree-zero identity: with G=Z and one lifted vertex w, the boundary is [sigma(w)]-[sigma(b_n)], not [sigma(w)]. I supplied both ordinary-boundary formulas, separating m>=1 from m=0, and explicitly defined epsilon as the sum of coefficients. The apex-first vertex ordering gives the signs by the alternating face formula. The simplified degree-zero identity applies exactly to augmentation-zero chains, including the subdivided boundary of an edge. No change is made to the published ordinary boundary-zero or reduced-chain conventions.

The repaired definition gives the affine simplex [b_n,w_0,...,w_m] explicitly, tensors the integral operation with G, retains repeated-vertex singular simplices, and permits affine lifts throughout Delta^n. The lift remains supplied data, with the canonical boundary lift explained for subdivision. The current prism uses b_n directly on interior affine chains, which this definition admits. No other item is edited.

Source verification: read Hatcher's full authoritative Chapter 2, Proposition 2.21 stages (1)–(2), printed pp.119–122 (especially p.121/PDF p.24):
https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
The source defines affine chains in convex sets, apex-first coning, and explicitly augments degree -1 to obtain its uniform formula. Separating the unaugmented degree-zero case is necessary to translate that source to this library's convention. The displayed local face calculation independently verifies the correction for arbitrary abelian G.

Validation: focused precheck accepts this as a definition (zero proof-format items); batch-12 content-policy checks all 39 IDs with zero errors/warnings. The unchanged dependency IDs are def-singular-simplex-and-singular-chain-group-with-coefficients and def-singular-boundary-operator; neither dependency file changed, so no prerequisite licence. The cone interface clarification requires resealing the already completed positions 1–2 for shared A/B context currency; it does not change their proofs or conclusions. No judge call or pass stamp. No unresolved obligation for this item. Next action after recording: position 4.

Position 4 context refresh: the Mayer–Vietoris connecting definition now explicitly discharges its choice-independence obligation and retains the positive U-boundary sign. This preserves the completed mathematics here; reseal the unchanged item for shared A/B currency.

Position 5 context refresh: the circle example now tensors its integral oriented paths with a supplied g in G and gives connector (-g,g). This clarifies coefficients without changing any completed conclusion here; reseal the unchanged item for shared A/B currency.
