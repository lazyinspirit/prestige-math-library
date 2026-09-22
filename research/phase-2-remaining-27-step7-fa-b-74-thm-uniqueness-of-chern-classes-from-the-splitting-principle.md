# FA terminal resolution — position 74

Item: `thm-uniqueness-of-chern-classes-from-the-splitting-principle`; group b; batch 9; disposition **repaired**; source status **verified**.

Rejected item SHA256: `c2a6cd84cf424956f8c8816933b90d5db95fe5848735c9b159e9293751ffa94c`. I independently read the full current statement and proof, its cited dependencies, the owning A/B pages, manifest and coverage entries, proof contract and risk record, the original Terra rejection (judge row 492), Alpha's adjudication (row 146 of its report), and final Terra rejection (judge row 1676). Alpha correctly restricted the assignment domain after the initial rejection, but the rejudge correctly observed that the proof still evaluated d on the flag total without proving that total a CW complex.

## Mathematical basis

The repair keeps the assignment on nonempty path-connected CW bases. Bundle isomorphism invariance and the pullback-map domain are now explicit, matching the library convention for characteristic classes. It does not assume that a flag total is itself CW or extend the assignment to all CW-type spaces.

Each projective fiber is nonempty path-connected: independent vectors representing distinct lines interpolate without passing through zero. Numerable-fibration path lifting, followed by a path in the terminal fiber, proves each projective stage has path-connected total. The finite flag tower is therefore path-connected and, by the existing flag/CW-type suppliers, has a CW model h:C -> Fl(E). A homotopy inverse and its homotopy show C is nonempty path-connected. Homotopy invariance makes h* an integral cohomology isomorphism.

Set p=q h. Pull back the actual splitting to C. The pulled-back tautological lines are numerable, since their chart numerations pull back. Evaluate d and c only on this CW base: line normalization and Whitney multiplication make both totals the same finite product. Naturality along p, whose endpoints are both allowed CW bases, and injectivity of p*=h* q* then give d(E)=c(E). Rank zero is settled first; rank one is normalization; all above-rank terms vanish. The line Euler sign is unchanged. The existing Chern supplier supplies existence as well as the properties used for the comparison.

The declared additional dependencies are exactly the existing flag/CW-type, numerable-fibration, fibration-definition and singular-cohomology homotopy-invariance items. Their complete relevant statements were checked, and the three original mathematical dependencies were read in full. No supplier was changed and no new lemma was required.

## Sources checked

- https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — Chapter 23 section 2, printed pp.189–190, gives the convention of natural characteristic assignments on equivalence classes of bundles. Chapter 23 section 7, printed pp.197–200, including the complete uniqueness theorem and discussion on pp.198–199, was read from the complete cached PDF; the official URL was reopened. It supports the Chern uniqueness characterization and detection by symmetric line classes. Its discussion of projective generator signs is not substituted for this page's explicit normalization c_1(L)=e(L_R).
- https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf — Proposition 1.20, printed pp.36–37, complete proof read: every CW complex is paracompact. This supplies the paracompactness hypothesis of the repaired splitting supplier without restricting the intended CW domain. The CW-model comparison and the path-connectedness argument are fully written locally; neither is claimed to be a quoted proof from May.

## Metadata and validation

Updated this item's content, owning manifest entry, batch and aggregate proof contracts, and owning consumer dependency records. Refreshed `briefs/tasks/frontier-dependency-ledger.md` using its tool. Focused precheck: **1 checked, 0 failing**. Strict owning proof-contract check: **0 errors, 0 warnings, 1/1 item checked**.

Queue-status before recording showed all positions 1–73 current and no stale predecessor. This evidence records a terminal resolution, not a judge verdict or pass stamp. No additional judge or review wave was launched.

Outstanding mathematics for this item: none. Next action: record position 74, then verify all 74 receipts are current. The separately recorded owner decisions at positions 32, 41 and 44 remain unresolved mathematical escalations; completion of this queue does not settle those decisions.
