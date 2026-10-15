# Step 3a adjudication — batch 1

Run: hopf-hecke-unfinished-15-2026-10-15; group: batch-1. Scope group a is unchanged.

Read the generated order, scope, reader report/findings, refuter structured report, immutable pre/post snapshots and current batch manifest/contract. The scope owes exactly refuter:1:1–3; no touched, page or reader decisions. Pre/post item and manifest fingerprints agree; no reader mathematical delta is routed. The three flagged current raw source hashes exactly match their immutable pre/post item hashes before this adjudication; the scope observed hashes bind carrier records, not raw item bytes.

## Dependency-order review

### Level 0: finite spanning list

Reviewed steps 1.1–3.1 against the span, independence, ordered-basis, dimension, field and induction suppliers. The prefix rule preserves span by induction; a last nonzero coefficient contradicts retention, including empty and zero lists. Finite excluded-middle decisions require no AC. Axler §2B, Theorem 2.30, printed pp.40–41, gives the matching finite reduction proof; the local proof works over every field. No mathematical defect found. Dependencies: def-linear-combination-and-span, def-linear-independence, def-linear-basis, def-dimension, def-field, thm-induction-principle. Contract risk review complete before proceeding to level 1. Validation pending final scoped checks.

Next: level-1 group-like definition, counit calculus and comatrix lemma.

### Level 1: group-like and relative-primitive definition

refuter:1:1: confirmed_fatal; hh15-b1-3a-refuter-1. The title omitted the specified group-like element required by the Definition. Chin §2.4, printed pp.5–6, defines (g,h)-skew primitives; the local Definition specializes to (g,g), explicitly excludes an implicit unit, and retains counit-one/zero normalization. Qualified the title only; the Definition, dependencies and consumer interfaces are unchanged. No Statement/Definition change, so no new consumer repair is needed. Confidence 1.

### Level 1: counit uniqueness and finite Sweedler calculus

refuter:1:3: confirmed_fatal; hh15-b1-3a-refuter-3. Confirmed the missing coassociativity qualification in Proof 2.1, not a failure of counit uniqueness. In the refuter algebra, (aa)a=a whereas a(aa)=0; on its finite dual, with a-dual functional f, the two triple coproducts evaluated at (a,a,a) are 1 and 0, while evaluation at the unit is a counit. The repair makes triple equality conditional on coassociativity and keeps uniqueness for arbitrary linear Delta. Reviewed all direct suppliers and Stufler Definition 3.3 / UCSD §1.4. Statement and logical dependencies are unchanged; no consumer premise is narrowed. Given now explicitly says linear, as required by the counit tensor maps. Provenance already records an altered proof, and no judge stamp is present. Risk review complete; confidence 1.

### Level 1: finite comatrix coalgebra

Reviewed steps 1.1–3.1 and all five direct suppliers: free-module universal property defines both linear maps; associator/naturality supplies the common triple target; relabeling the two finite indices proves coassociativity; Kronecker contractions prove both counit laws. For n=1 the basis vector is nonzero, with counit 1 over any field; n=0 is excluded rather than tacitly used. No AC. Stufler Example 3.2(2), printed p.12, supplies the same full basis computation. No defect found. Risk review complete. Next: level-2 quotient/kernel theorem and four examples/counterexample.

### Level 2: thm-hh-coalgebra-quotient-and-kernel-descent

Reviewed steps 1.1–4.1 and all nine dependencies. The quotient formulas kill I by both coideal conditions; coset operations give linearity. Surjectivity descends both axioms and ensures uniqueness/factorization. For kernels, the injective map C/ker(f) to D stays injective on its tensor square under stated AC, allowing the exact kernel formula. For sums, finite representations give coproduct containment and tensor injections reflect the axioms; the empty family gives the zero coalgebra. I=0, I=C when C=0, and the zero map to the zero coalgebra satisfy the stated cases. AC use matches the complement-based published supplier. UCSD Lemma 1.20/Proposition 1.21 pp.15–16 and Stufler Definition 3.19 pp.17–18 agree; the local proof supplies the omitted details. No defect found. Risk review complete.

### Level 2: cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map

Reviewed all three steps and five direct dependencies. The two-vector diagonal formulas satisfy all coalgebra laws. I=ke is nonzero and proper, satisfies the coproduct image condition, but epsilon(I)=k. Every linear target counit takes q(e)=0 to 0, contradicting epsilon(e)=1. This refutes exactly projection-preserving quotient existence, even though the underlying quotient admits another coalgebra structure. Works over every field without AC; 0!=1 is essential. UCSD Definition 1.19/Proposition 1.21 and Stufler Definition 3.19 retain precisely the omitted counit condition. No defect found. Risk review complete.

### Level 2: ex-hh-counital-coideal-quotient-of-comatrix-coalgebra

Reviewed steps 1.1–2.1 and all eight dependencies. Expanded Delta(c11-c22) termwise: the two diagonal cross terms cancel and all four displayed terms have an I factor. Counit vanishes on all three generators. The explicit functional has kernel exactly I in every characteristic, including 2; u=q(c11)=q(c22) is nonzero and spans. The one-dimensional structure satisfies the axioms, and all four source basis vectors satisfy both map equations. No use of the AC-dependent general quotient theorem. UCSD Examples 1.23/1.26 concern lower-triangular coideals, rather than this exact generated example; Stufler Example 3.2(2) supplies its comatrix input. No defect found. Risk review complete.

### Level 2: ex-hh-group-like-elements-in-finite-set-coalgebra

Reviewed steps 1.1–2.1 and all six direct dependencies. Basis extension defines both maps and basis-wise checks give the coalgebra laws. The tensor-basis supplier licenses coefficient comparison: diagonal coefficients are idempotent in a field, distinct products vanish, and the counit sum forces exactly one coefficient 1. Conversely every basis vector qualifies. For the empty set C=0, epsilon(0)=0 excludes group-likes. No AC or characteristic restriction. Stufler Example 3.2(1), p.12, and Chin §2.4 supply the set-coalgebra/group-like conventions; local counit normalization explicitly excludes zero. No defect found. Risk review complete.

### Level 2: two-dimensional relative primitives

refuter:1:2: confirmed_fatal; hh15-b1-3a-refuter-2. The title omitted the g-relative qualification present in the Example. Qualified the title, preserving the Example and proof. Independently checked the three steps: basis-wise coalgebra laws hold; b^2=0 forces b=0 in a field and epsilon forces a=1; relative primitives have a=0, and every bx satisfies both required equations. This includes characteristic 2 and b=0, without an algebra unit or AC. Direct tensor-basis/free-map/field suppliers and Stufler Examples 3.2(1),(4), Chin §2.4 agree with the exact relative condition. Confidence 1. No Statement/Definition changed, no consumer repairs needed. All level-2 routed obligations complete; next: fundamental theorem.

### Level 3: fundamental theorem

Reviewed all eleven steps and all seventeen declared dependencies. A finite right-factor basis gives independent bi; applying the quotient map to coassociativity and then coefficient separation forces Delta(A) into A tensor C. Tensor injections give unique preimages in A tensor C; coordinate functionals are defined only on A. Their contractions prove Delta(csj)=sum_i csi tensor cij and epsilon(cij)=deltaij; the other counit puts A and then c inside the finite coefficient span. The comatrix map preserves both structures, the kernel/quotient theorem and explicit transport make its image a subcoalgebra, and finite sums handle S. C=0, c=0, S empty, finite-dimensional C and all field characteristics are covered. AC is expressly inherited from separation, tensor kernels/injections and quotient/sum results; no ambient basis or ambient extension of coordinate functionals is used. UCSD Theorem 1.28, printed pp.19–20, uses an ambient basis; Chin §2.1, printed pp.3–4, gives the coefficient-space route. Local proof is complete. Corrected only Chin source locator from pp.2–3 to pp.3–4 (the coefficient-space proof concludes on printed p.4); no mathematical interface changed. Additional nonfatal citation-locator defect hh15-b1-3a-source-4 is closed by that correction (confidence 1); it adds no routed decision. Risk review complete.

## Sources independently opened

- [Axler, fourth edition](https://linear.axler.net/LADR4e.pdf), §2B, Theorem 2.30 and full deletion proof, printed pp.40–41 / PDF indices 53–54. Finite basis reduction; no arbitrary choice.
- [Stufler](https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf), Definition 3.1 and Examples 3.2(1),(2),(4), printed pp.12–13 / PDF indices 11–12; Definition 3.3, p.13; Definition 3.14 and Proposition 3.15, p.16; Definition 3.19 and proof/Proposition 3.21, pp.17–18. Coalgebra axioms, induced-map interpretation, and qualified primitive/coideal conditions checked.
- [UCSD](https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf), §1.4, pp.8–9 / PDF indices 10–11; Definition 1.19, Lemma 1.20 and Proposition 1.21, pp.15–16 / PDF indices 17–18; Examples 1.23 and 1.26 for matrix background; Theorem 1.28 and complete proof pp.19–20 / PDF indices 21–22. Coassociativity is explicitly used for the iterated equality. Quotient details are largely left to the reader, hence independently checked locally.
- [Chin](https://condor.depaul.edu/~wchin/crt.pdf), §2.1, Proposition 1 and coefficient argument, printed pp.3–4 / PDF indices 2–3; §2.4, pp.5–6 / PDF indices 4–5, for group-like and skew-primitive terminology. His displayed group-like definition omits nonzero/counit normalization; the owned definition explicitly supplies it. Source typographical slips are not imported as mathematical facts.

## Consumer and scope dispositions

No Statement, Definition, Example or dependency list changed: only two titles, explicit linear typing in Given, a conditional proof clarification, and one source locator. Thus no changed logical supplier interface requires downstream repair. All owned stable IDs and pages remain; no withdrawal. Published dependencies were read as prerequisite context and left read-only; no defective published item was identified. The existing batch-1 cross-batch dependency file is empty and was preserved.

All mathematical reviews are complete. The following final local checks and ledger dispositions supersede the earlier pending-check checkpoints.

Chin §2.4 source locators on the two title-repaired carriers were also corrected from printed pp.4–5 to pp.5–6, which contain both the group-like and skew-primitive definitions. These ancillary locator corrections have their own closed citation rows, listed below; no additional routed obligation is invented.

Source-locator bookkeeping: hh15-b1-3a-source-4 (fundamental theorem), hh15-b1-3a-source-5 (relative-primitive definition), and hh15-b1-3a-source-6 (two-dimensional example) are separate closed nonfatal citation rows. Each original refuter decision references exactly its one title/hypothesis defect row.

## Final local checks and handoff

- Reflow on all four changed item paths: unchanged (exit 0). Later edits touched only source locators; the final renderer check follows all item edits.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on those four paths: 3 proofs passed, 1 definition not applicable, 0 failures (exit 0).
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-1.proof-contracts.json --strict`: 9/9 checked, 0 errors, 0 warnings (exit 0). Updated the conditional derivation/citation uses and the affected template-review item hashes.
- `node tools/rendercheck.mjs` on those four paths: all four pass YAML, links-in-math and real KaTeX checks (exit 0).
- Initial batch `risk-report` without `--require-reviewed`: eight HIGH/CRITICAL items identified. Final run with `--require-reviewed`: 9 items routed, 0 errors (exit 0); all eight required risk reviews are specific and complete.
- `node tools/proof-layout.mjs items/def-hh-group-like-and-primitive-elements.md items/lem-hh-counit-uniqueness-and-finite-sweedler-calculus.md items/ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra.md items/thm-hh-fundamental-theorem-of-coalgebras.md`: 4 items, 16 steps, 0 defects (exit 0), run once after all final item edits.
- Native defect-ledger append validated and appended six closed rows and refreshed the generated view. Each of the three routed decisions references exactly one closed refuter defect; three additional source-locator rows are documented above. All completed repairs have confidence 1.

The manifest mirrors both corrected titles; provenance remains accurate, and none of the four edited items carried a judge record. The frontier dependency ledger records the owned-consumer disposition. There are no unresolved mathematical blockers, outside consumer repairs, published findings or proposed withdrawals. No judge, stamp, self-certification, agent dispatch, engine transition or gate battery was initiated. The engine owns hash stamping and subsequent gates.

Current raw edited carriers (SHA-256, for navigation only; these are not decision stamps):

- `items/def-hh-group-like-and-primitive-elements.md`: `873f86b72e21cc2db2ca6712885a180c1dd4a29dcb589cd1a292b44d5694485b`.
- `items/lem-hh-counit-uniqueness-and-finite-sweedler-calculus.md`: `8dfcc77c97b59600d5b2f8b0ad03b312bc57413a8ab8dbb3518f0a4bab803a56`.
- `items/ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra.md`: `f29bf1e3f1f6f378857de81c8cdeb509af63435a90e76283e93f499b6dc52634`.
- `items/thm-hh-fundamental-theorem-of-coalgebras.md`: `ae81b580eb42dbdae753990e010fe160439f0f581fa22a0891d31ced6123046c`.
