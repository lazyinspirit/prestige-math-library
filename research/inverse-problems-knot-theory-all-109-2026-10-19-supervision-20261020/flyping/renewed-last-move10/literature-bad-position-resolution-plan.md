# Literature review and plan: corrected v3 bad position

Status: literature-only planning report, 2026-10-21. New detail authoring is paused at root's direction. This report neither accepts a new proof nor revises any accepted interface. It preserves the held mixed/new-cell classification and all previous review history.

## Sources actually read for this review

Kindred, *A geometric proof of the flyping theorem*, arXiv:2008.06490v3, repository PDF `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-flyping-round1/sources/kindred-flyping-v3.pdf`. PDF page numbers equal the printed page numbers. I read the actual statements and proofs on pp. 31–33 (4.8–4.10 and 5.1–5.4), pp. 44–46 (7.5–7.7 and the proofs of 3.20–3.26), and pp. 49–50 (8.5, 4.3, 8.6, 4.9). The operation definitions and literal hypotheses on pp. 25–27 were also read. These readings identify what the primary text says; they do not constitute a new review of repository suppliers.

I also read the relevant actual TeX from the arXiv v3 source archive, fetched from `https://arxiv.org/src/2008.06490v3`, extracted locally as `/tmp/kindred-v3.tex`. Crucially, the alternative normalization paragraph discussed below is COMMENTED OUT in that source. It is not part of the printed proof and must not be cited as an established theorem.

## What the printed proof does

On p. 32, Lemma 5.3 chooses a parent circle gamma1 enclosing the innermost child collection gamma0. It first proves gamma1 disjoint from the crossing balls by an old white push-through contradiction. It then says that a child crossing forces gamma1 to traverse that crossing's overpass, that the crossing contains exactly one saddle, and that this contradicts Lemma 3.22. There is no cap followed by cleanup in the printed proof of 5.3. In particular, the printed proof has no claim that a parent circle survives Moves 3–9.

The literal Lemma 3.22 on p. 25 assumes that gamma is a **flyping circle**, as well as 5-good position and traversal of the specified overpass. The preceding argument in printed 5.3 establishes that the parent is crossing-ball-free; it does not explicitly establish the flyping-circle condition. The proof of 3.22 on p. 45 uses that stronger hypothesis explicitly: “because gamma1 is a flyping circle” it bounds the number of lower circles meeting both complementary disks by two, and then forces a lower white push-through near the single saddle. Thus the full proof does not supply a stated or proved version for an arbitrary crossing-ball-free parent traversing an overpass. The occurrence of gamma0 in its projection formula while its prose names gamma1 is a notation mismatch, not a substitute for the missing hypothesis.

This is a precise unresolved application in the present source reading, not a claim that the flyping theorem is false. We have not proved that every parent satisfying the additional bad-position configuration fails the lower-circle bound; nor have we proved that it satisfies it. A source-supported replacement must establish the necessary additional geometry, rather than erase the flyping hypothesis.

There is also a separate literal sign typo in the proof of Sublemma 5.2(C), p. 32: the proof's “if gamma0 intersects the crossing spheres” must read “if gamma0 does not intersect the crossing spheres” to match the claimed absence of Type I prisms and the conclusion of (C). This correction alone does not address the 3.22 application.

## The commented alternative and the exact strength of persistence

Immediately before printed 5.3's final paragraph, the TeX contains a commented alternative. It proposes:

1. Perform the cap along gamma0, producing F1, and normalize F1 to 9-good F2.
2. Assert that this entire sequence fixes gamma1, because gamma1 misses the crossing balls, has none of the forbidden 3.23 arc forms, and becomes innermost after the cap.
3. For Moves 7–9 cite a standard outermost-arc transfer to an old forbidden move; describe the other moves as easy to check.
4. Use bad position and 3.20 to make F2 saddle-free, then 4.10 to make its surviving gamma1 a flyping circle.

That text explains the provenance of our parent-preservation route, but does not furnish its missing early-move analysis. In particular, literal Move 5 (p. 25) can use a lower black-parallel return whose designated upper interval meets a newly changed white arc, while its other upper interval lies on the old parent. Preserving the parent's white arcs therefore does not by itself show that the parent's upper connections are preserved.

Strict pointwise persistence of the entire parent and every collar germ is **stronger than the logical consumer needs**. To apply 3.22 back to old F, it suffices to prove that the original geometric parent is itself a flyping circle for the fixed reference diagram, with its specified overpass. A normalization that keeps its projection configuration fixed, or proves it changes only through isotopies preserving that flyping-circle configuration and the specified traversal, would suffice. The printed proof does not demand persistence at all; the commented route asserts the stronger “fixes gamma1.” Neither provides a general theorem allowing arbitrary parent changes. Merely retaining the same abstract component label, or an ambient isotopy of a post-cap surface, is insufficient to transfer a projected flyping-circle condition to the old circle.

## Noncircular plan and decision points

The currently sound logical separation is:

1. **Saddle-free theorem D:** at 9-good input with no saddles, only Type II/III caps are needed. Preserve any chosen upper circle until last. Prove the actual terminal lower-return incidence, then use the accepted lower-disk distinctness and prime two-point-circle argument to obtain the literal flype. This must be proved directly, without generic 4.9(A) or 5.4. Bridge owns this node; its terminal same-old-lower-disk incidence remains an explicit obligation.
2. **Bad-position output:** use the actual cap white map and bad-position definition, followed by the already accepted proper-W-isotopy normalizer and core obstruction, to obtain a saddle-free 9-good F2. This does not need generic new-cell classification or source 2.26. It does require the actual Type I cap map/body at its original marked scope.
3. **Close the printed 5.3 application by ONE sufficient route:** either prove directly that the old crossing-ball-free bad-position parent has the exact global lower-incidence property used in the p. 45 proof; or prove enough relative normalization to identify its old projected flyping configuration with the one obtained from D. These are alternatives, not assumptions to be combined without proof. The source supports no completed choice between them.
4. Once that choice is proved, old 3.22 gives the contradiction. Then the obstruction-preserving cap selection and finite complexity descent in printed 5.4 apply. This order avoids using 5.4 to establish D or the parent hypothesis needed to prove 5.3.

The existing accepted rank-one no-saddles branch remains available and does not need any Type I parent argument. The accepted one-white-interval prime exclusion supplies distinct **physical** W0 and W1 occurrences in the remaining Type I branch; it does not supply an old path between their lower disks.

For the relative-normalization choice, the exact current gap is still the lower-return Move 5 first touch, including any preceding propagation of the changed tail. The proposed lower-disk contradiction requires an actual OLD path from the opposite black tail rB to the parent's first old endpoint b0. A path using the new cap is not such a certificate, because the cap can join distinct old lower disks. The main owner has explicitly withdrawn an automatic old Move 8 alternative: the old parent is not innermost, so the innermost II/III word cannot exclude its possible overpass–black–overpass arc.

Accordingly, the next coordinated decision is to compare the complete source/local geometric data for the direct old lower-incidence route against the weaker projection-preserving normalization route, and select the smaller verifiable obligation. No new lineage lemma should be authored until that choice and its exact inputs are agreed by the lead. Menasco–Thistlethwaite has not been read for this report and is not invoked as a supplier or as a claimed resolution.

## Outcome

The published bad-position argument does not settle parent moves by a relative cleanup theorem. The printed route contains an unbound flyping-circle hypothesis at its application of 3.22; the source's commented alternative exposes, rather than resolves, the relative-cleanup duty. The direct saddle-free strategy remains noncircular at the explicit outstanding inputs above. No original-facing closure follows yet.
