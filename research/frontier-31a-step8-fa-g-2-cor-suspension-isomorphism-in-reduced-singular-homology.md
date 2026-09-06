# FA terminal evidence — queue g/2

Item: cor-suspension-isomorphism-in-reduced-singular-homology. Decision: repaired.

Read the current item, its three direct dependencies, batch-12 A/B pages, manifest and coverage (May §14.3 and Hatcher's suspension material), both proof-contract entries, reader/refute-12, group-g conventions, Alpha's Step-8 adjudication and undefined-hypothesis warning repair, and Terra's initial and final rejections (2026-09-05T18:50:31.951Z and 2026-09-05T21:36:49.059Z). The coefficient objection in the rejudge is not fatal: the A-page explicitly fixes an abelian G. Alpha's definition of well-pointed as basepoint cofibration is correct. However, the actual proof still does not display the low-degree inference from ordinary Mayer–Vietoris or the all-integer endpoint and naturality arguments. I independently repaired those omissions.

The suspension notation is fixed by the surrounding published def-adjunction-cone-suspension: two distinct apices. I read that definition completely and made this convention explicit, retaining the based/well-pointed scope. The open neighborhoods use heights below 2/3 and above 1/3; their overlap is X times an interval, with natural projection to X. Contractible terms vanish in positive degrees. At n=0 ordinary exactness gives the kernel of (epsilon,-epsilon), exactly reduced H_0. For n=-1 the suspension is path connected using the supplied basepoint; at smaller n both sides vanish under the library's truncated reduced-complex convention. The point singular complex and G=0 are treated directly. The chain formula delta[u+v]=[boundary u] commutes with induced maps, establishing naturality without appealing to an undeclared reduced-MV theorem.

Opened authoritative full text:
https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
Printed p.109, §14.3 (PDF p.116), verifies the cofibration meaning of nondegenerate basepoint and the natural reduced suspension shift; it explicitly distinguishes reduced suspension from the unreduced two-apex suspension and explains their comparison under that hypothesis. Our proof uses the existing library's two-apex convention and derives the shift directly, avoiding an implicit change of suspension convention.

Read and added the existing published dependency thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology for the overlap projection, plus def-adjunction-cone-suspension for notation. Other dependency IDs are thm-mayer-vietoris-sequence-in-singular-homology, def-zero-simplex-augmentation-and-reduced-singular-homology, cor-contractible-nonempty-spaces-have-the-homology-of-a-point. Synchronized only this manifest entry and its batch/merged contracts. No dependency file was edited and no prerequisite-repair licence is needed.

Focused precheck passes 1/1. Initial contract check exposed omitted step-reference metadata; after correcting those references, strict batch and merged checks each pass 1/1 with zero errors/warnings. No pass stamp or judge call. No unresolved obligation for this item. Next action after recording: queue position 3.

Position 3 context refresh: the corrected affine cone interface separates the ordinary degree-zero augmentation term. It preserves this completed item's assumptions and result; item bytes and proof remain unchanged. Reseal for the shared A/B context gate.

Position 4 context refresh: the Mayer–Vietoris connecting definition now explicitly discharges its choice-independence obligation and retains the positive U-boundary sign. This preserves the completed mathematics here; reseal the unchanged item for shared A/B currency.

Position 5 context refresh: the circle example now tensors its integral oriented paths with a supplied g in G and gives connector (-g,g). This clarifies coefficients without changing any completed conclusion here; reseal the unchanged item for shared A/B currency.
