# Classification path calculation: focused supplier and consumer repair

Scope: exactly `lem-cg-positive-definite-diagram-exclusions`, `thm-cg-finite-coxeter-classification-including-h-and-dihedral`, `thm-cg-crystallographic-finite-type-and-lattice-stability`, and `cex-cg-i2-five-is-not-crystallographic`, plus those items' batch-13/batch-21 manifest/contract objects and actual affected batch-21 dependency rows. The previous compact-CAT criterion branch and all batch-22 objects were untouched. No receipts, certifications, historical decisions, native history, engine state, controls, gates, or other run files were edited.

## Drain and evidence read

Before editing, read `.autopilot/frontier-42-coxeter-32/state.json`: latest native batch-13 classification dispatch `...56dd71ba982e5c70` ended `2026-10-07T10:32:49.613Z`, `lastExitOk: true`; latest batch-21 crystallographic dispatch `...943e29c0d91293a6` ended `2026-10-07T14:07:18.502Z`, `lastExitOk: true`. Former batch-21 writer PID 69607 was absent in `ps`. Older superseded dispatch rows with null ends were not mistaken for active writers. The run driver remains the transition owner.

Read the crystallographic pair report and the four item review records read-only, together with the current four item files and relevant source definitions. Fetched Michel's complete 15-page `cox.pdf`, read all of the relevant Theorem 5.15 proof on pp.13–15, and visually inspected p.15, including its exact weighted-chain formula (vi) and arm argument (vii). Michel's two-part determinant and exclusion classification argument agrees with the repaired route. No claim of a fresh full-text Davis/Knapp audit is made here.

## Confirmed arithmetic and focused correction

Original exclusion step 1.4 claimed `i^2 - sum_{k=1}^{i-1} k(k+1) = i(i+1)/2`; at i=2 its left side is 2 and its right side 3. Independent expansion from the cosine matrix is:

`B(u,u) = sum_{k=1}^{i} k^2 + 2 sum_{k=1}^{i-1} k(k+1)(-1/2) = sum_{k=1}^{i} k^2 - sum_{k=1}^{i-1} k(k+1) = i^2 - sum_{k=1}^{i-1} k = i(i+1)/2`.

The analogous norm for the other disjoint chain is j(j+1)/2, while the unique mixed edge contributes `B(u,v)=-ij cos(pi/m)`. The weighted vectors are nonzero and linearly independent because they have disjoint basis supports. Strict Cauchy–Schwarz therefore gives `i^2 j^2 cos^2(pi/m) < i(i+1)j(j+1)/4`, and division by positive ij gives the unchanged claimed inequality `(i+1)(j+1)>4ij cos^2(pi/m)`. This is also exactly Michel (vi), read visually.

The source route to its unchanged conclusion (7) needed three small adjacent corrections, all within the same bounded pass: corrected F7's first cosine zero from pi to pi/2 (the linked Definition explicitly sets pi=2gamma); corrected the integer-case subtraction to `3ij-(i+1)(j+1)=2ij-i-j-1`; and replaced the false degree-three inequality `3c_edge^2 <= sum_neighbour c^2` by its actual proof: if any incident label is >=4, its squared cosine is >=1/2 and the other two are each >=1/4, contradicting the strict neighbour sum <1. Clarified that the arm norm calculation assumes all diagram edges labelled 3, and wrote `e_v` consistently in its bilinear pairings.

Adding the actual dependency on the trigonometric calculation to the chain step required the format checker's canonical phase numbering. Applied its numbering to *all* prose and tag references, not only headings: old chain 1.4 is now 2.1; old no-cycle 2.1 is now 2.2; old all-3 path 2.2 is now 2.3; old chain cases 2.3 are now 3.1; old two-large-label 3.1 is now 3.2; old neighbour 3.2 is now 3.3; old arms 3.3 are now 3.4. The remaining labels are unchanged. No argument was dropped by formatting.

## Exact dependency reconciliation

Rechecked the repaired exclusion route: its (5)(i) path determinant recurrence and all-3 formula and its (7) complete list feed classifier F2, at classifier 1.1, 1.3 and 2.1. Made the clause-(7) use explicit in classifier 1.3. Rechecked the independent positive-determinant direction, including H3/H4, the star determinant recurrences, rank <=2, and the proper-principal-subdiagram induction; explicitly enumerated the possible retained large-label subpaths of B, F and H in 3.1 so each proper block is a listed lower-rank diagram. The reducible direct-product route and coincidence clause (4) remain intact.

The lattice theorem F5 now explicitly names classifier (1)–(2), and F6 its (4), at 1.2. Its uses at 2.1, 3.1 and 4.2 preserve the full finite Weyl-type equivalence under its finite-W hypothesis. The direct exclusion uses at 1.7 are no-cycle (2), current proof 2.2, and unique-large-label (4)(ii), current proof 3.2. The complete reduced-realization, Weyl-group, lattice and dual-length claims were retained; no new obligation was found in their actual classification uses.

The counterexample F5 separates the classifier's (1),(4) identification of the diagram and H2 naming at 1.1 from the lattice theorem's (1) noncrystallographic consequence at 3.1,4.1. Its finite-group fact still follows from rank-two positive definiteness; both its interval-(2,3) scaling obstruction and independent reduced-root-system refutation remain unchanged. Rephrased 1.1 to identify the *diagram* I2(5) and its conventional H2 name accurately.

All four Statements are unchanged. Hence there is no further Statement-change propagation obligation, including to active batch-27 consumers. The two formerly open batch-21 classifier rows are now `verified` with these exact local consumed spans and the source repair stated in evidence; the separate direct-exclusion row's canonical step references were refreshed. Unrelated open batch-13 rows were left untouched. Regenerated only these four proof-contract entries from canonical Facts/steps, retaining other entry fields and every sibling entry; synchronized only the four manifest item rows' Statement/strategy objects.

## Local checks and held state

First format pass requested renumbering of the exclusion proof after the new actual step dependency; adopted the canonical numbering while retaining and checking every argument and reference. Final explicit checks after all item edits:

- `node tools/tsx-run.mjs tools/precheck.mts` on exactly the four item paths: 4 proofs checked, 0 failures.
- `node tools/rendercheck.mjs` on exactly the four item paths: 4 checked, 0 errors/warnings.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-13.proof-contracts.json --strict --items lem-cg-positive-definite-diagram-exclusions,thm-cg-finite-coxeter-classification-including-h-and-dihedral --json`: ok true, 0 errors/warnings.
- The analogous strict batch-21 command with the lattice theorem and I2(5) counterexample: ok true, 0 errors/warnings.
- Final `node tools/proof-layout.mjs` on exactly the four item paths: 4 items, 53 steps, 0 defects.

All four assigned branches are locally ready: no smallest missing mathematical result remains in the repaired dependency chain. The original escalation receipts remain historical and unchanged; root owns stable recertification and any later gate. These local checks and this focused supplier/consumer review are not an independent audit or gate acceptance.
