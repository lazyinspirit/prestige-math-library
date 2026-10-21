# Step 3a reader report — batch 106

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `106` · role: reader

## Opened inventory

Pages:

- `library/knot-theory/open-questions-in-knot-polynomials-and-surgery.md`
- `library/knot-theory/open-questions-in-knot-polynomials-and-surgery-examples.md`

Assigned items, read with suppliers before consumers:

- `lem-jones-vassiliev-basis-decomposition` (level 0)
- `def-jones-vassiliev-coefficient-vectors` (level 5)
- `cex-knot-kt-51-boundary-case` (level 6)
- `rem-jones-polynomial-unknot-detection-status` (level 10)
- `ex-knot-kt-51-worked-cases` (level 6; after its listed suppliers)

Direct supplier items opened for the assigned claims:

- Algebra: `def-polynomial-ring-over-a-commutative-ring`, `thm-polynomial-ring-is-a-commutative-ring`, `def-generated-and-principal-ideals`, `def-quotient-ring`, and `thm-monic-polynomial-division`.
- Jones and knot interfaces: `def-axiom-of-choice`, `def-countable-choice`, `def-singular-knot-and-vassiliev-derivative`, `def-crossing-number-of-link`, `def-enhanced-a-polynomial`, `def-framed-chord-diagram-and-four-term-relations`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-knot-a-polynomial`, `def-temperley-lieb-quotient-and-jones-specialization`, and `thm-bracket-state-sum-matches-library-jones-specialization`.
- Braid and finite calculation: `def-closure-of-a-geometric-braid`, `def-elementary-geometric-half-twist`, `def-temperley-lieb-closure-trace-and-partial-trace`, `def-temperley-lieb-diagram-category`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `lem-kauffman-smoothing-operators-for-braid-crossings`, and `lem-temperley-lieb-generators-satisfy-local-relations`.

Batch evidence opened: the batch-106 proof contracts and authoring notes. The source-coverage command output was truncated, so unread portions of that registry were not used as evidence. The active run status was recomputed from `.autopilot/`; the authoring note's older stage description was not used.

External sources checked:

- Carmi and Cohen, [*On trivial Jones–Vassiliev polynomials*, arXiv:2606.22410v1](https://arxiv.org/pdf/2606.22410v1): Appendix B.1 / Proposition B.1, PDF pp. 56–57 (unique Laurent decomposition); §1.2 and Theorems 6.8–6.9, PDF pp. 2–3 and 52–53 (reported coefficient bound and unknot-detection claims); Proposition 5.12, especially the arithmetic at PDF p. 43, lines 2050–57.
- Roberts, [*Knots Knotes*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf), §4.4.8, PDF p. 27: the unknot-detection implication is described as a conjecture.
- Kauffman, [*Combinatorial Knot Theory and the Jones Polynomial*](https://arxiv.org/pdf/2204.12104v2), §2: bracket/Jones conventions and state-sum context.
- Bar-Natan and Stoimenow, [*The Fundamental Theorem of Vassiliev Invariants*](https://arxiv.org/pdf/q-alg/9702009v1), §1.1, PDF pp. 3–5: singular-knot finite differences and finite-type terminology.
- Donaldson's cited [Math 120B notes](https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf), §22, returned HTTP 502 in the browser. Carmi–Cohen Appendix B.1 directly supports the decomposition claim.

## Item review and edits

- `lem-jones-vassiliev-basis-decomposition`: Proof 2.1 named maps from the quotient and Laurent polynomial ring without constructing them or citing a universal-property supplier. I repaired the proof by defining both maps on finite sums, showing the first kills the generator of the quotient ideal, using `X(X-p)=1` for negative Laurent powers, and checking the composites on generators. The affected step-2.1 derivation and proof-status evidence were updated in `batch-106.proof-contracts.json`. No `verification.judge` record was present to remove. Reflow reported unchanged; precheck passed (1 checked, 0 failing); proof-layout passed (1 item, 2 steps, 0 defects).
- `def-jones-vassiliev-coefficient-vectors`: The complete definition has no finite-type claim; its integer coefficient and finite-support formulation follows from the unique Laurent decomposition. References are in the following references section. No defect found.
- `cex-knot-kt-51-boundary-case`: The unknot has the stated normalized constant polynomial, zero crossing number, zero positive-order vectors, and an empty range `2 ≤ q ≤ 3c(U)`. The crossing-free circle is a correct witness diagram. No defect found.
- `rem-jones-polynomial-unknot-detection-status`: Roberts's historical conjecture and the claims attributed to Carmi–Cohen match the cited sources. The remark preserves the distinction between a source claim and an independently validated theorem. Its complete sections are uninterrupted by links. No mathematical or citation defect found.
- `ex-knot-kt-51-worked-cases`: The diagram is the closure of three positive two-strand half twists under the library determinant convention. The local chart transport in the smoothing supplier makes the displayed through-pairing operator consistent with that convention. The eight state counts, bracket polynomial, writhe normalization, `x^2=px+1` recurrence, and `f_2(T)=(-3,0)^T` were checked directly. The claims about the general theorem remain explicitly source-reported. No defect found.

No other assigned item or page was edited. No proposed withdrawal was identified.

## Page verdicts

- `open-questions-in-knot-polynomials-and-surgery`: **No defect found.** Draft A-page metadata matches its inventory; the Markdown body is empty and `page_layout: compact-v1` is present.
- `open-questions-in-knot-polynomials-and-surgery-examples`: **No defect found.** Draft B-page metadata matches its example inventory; the Markdown body is empty and `page_layout: compact-v1` is present.

## Uneditable evidence and coverage limits

No uneditable mathematical defect was confirmed, so the findings array is empty. One workflow-evidence discrepancy remains: the remark's contract still records A-polynomial suppliers as unresolved because of backward `justified_by` edges, while the current definition files opened here have `justified_by: []`. I did not change that non-lemma contract. The Laurent-basis contract also retains historical exact-hash review rows bound to its stored `item_sha256` `7dcb42a17f702243a7da88f4166d2a72330c1455d023ddd3b8c608b8a1a6dfe9`; the repaired current item hashes to `9c68c7fc0de05a73af3aba7b7c26bff3d87f11f40e7554fb71ff1f38be41657e`. Those historical rows were preserved and are not a review stamp for the repaired bytes.

I checked the source theorem statements and the stated arithmetic bound, but did not independently validate the full diagrammatic proof in Carmi–Cohen Proposition 5.12, including its exceptional-state reductions, smoothing proxy, and two-machine locality. The assigned remark accurately retains this non-acceptance boundary. I also treated published supplier interfaces as inputs and did not recursively audit their entire foundational dependency chains. Neither limitation changes the local findings above. The latest status recomputation before handoff (2026-10-21 10:13:53 UTC) still reports `3a-read 100/109` with batch 106 missing and no worker in flight, although the task-named report and findings files are present. I did not mutate `.autopilot`; workflow registration and the noted contract/hash evidence need reconciliation before they are used as current gate evidence.
