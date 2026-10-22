# Batch 61 Step 3a adjudication

Run: physics-non-fluid-129-2026-10-21-r2; group: batch-61; role: alpha.

One obligation: touched:61:ex-qftx-nested-two-loop-subtraction. No reader, refuter or page obligations. Initial risk-report: MODERATE 4 projection lemma, HIGH 7 antipode, CRITICAL 10 factorization, HIGH 5 example; zero errors.

Completed level 1: thm-qftx-cut-hopf-antipode and its actual definition reviewed in full. All six proof steps are sound: finite-cut multiplicities, monotone three-label correspondence, absent layers, direct 3-to-1 jumps, counit, connected grading, locally finite convolution inverse, uniqueness and multiplicativity. Unit and one-vertex cases checked; no AC. Complete risk review recorded; no item change or decision owed.

Completed level 2: thm-qftx-subtraction-character-factorization and all four suppliers reviewed in full. The top-degree pair subtraction gives the stated preparation identity; applying the negative projection identity proves multiplicativity. Finite recursion, scalar/unit cases, positive range and both inverse identities hold for arbitrary commutative unital Q-algebra K. No AC or physical assumptions. Complete risk review recorded; no item edit or decision owed.

Sources read: local batch-61 source text for Manchon II.3 pp.31-32, II.5 pp.35-38 and II.9.3 pp.43-44; Connes-Kreimer equations (65)-(82), pp.30-33. Full PDFs also opened at https://arxiv.org/pdf/math/0408405 and https://arxiv.org/pdf/hep-th/9808042. The local preparation identity was checked directly; no reliance on the apparent sign inconsistency in Manchon's extracted X,Y line.



Completed level 3: all three example steps and sole TikZ diagram reviewed. Calculation gives the displayed counterterm; a=0 is a zero correction and a=1,b=0 is the nonzero witness. Polynomial generator assignments define a character; no AC. Root/child positions, arrow and selected dashed edge agree with the definition. HIGH risk review complete.

Decision: reviewed_no_defect, change_kind metadata, defect_ids empty. Every current item raw hash matches the post-reader snapshot. Reinserting exactly the redundant lemma deps line and matching dependency_roles line reproduces the example pre-reader hash, proving this is exclusively metadata normalization. The owned manifest deps/roles are synchronized. No item/interface/proof/provenance change, consumer repair, confirmed defect or defect-ledger row.

## Scope, sources and limits

The scope, generated order, reader report/findings, refuter report and pre/post snapshots were read. Both findings arrays are empty. Both assigned page carriers are frontmatter-only and have unchanged inventories. No page decision is owed. The complete local proof closure consists of the six batch-61 items; no imported or published item is a logical supplier. Definitions explicitly fix the objects and Laurent splitting; the projection lemma proves the exact identity used. No empirical premises, physical parameters, statistical assertions or choice axiom occur. The formal example does not claim a calculation of an actual Feynman integral.

Additional source passages actually read for the example: local batch-61 Connes–Kreimer text, Toy Model pp.10–13 and cut/antipode discussion pp.18–19, equations (51)–(55). These distinguish nested subtraction from naive overall subtraction. Manchon II.5 supplies the abstract character framework. Source locators are the full [Manchon lecture notes](https://arxiv.org/pdf/math/0408405) and [Connes–Kreimer paper](https://arxiv.org/pdf/hep-th/9808042). Only the passages stated here were independently reviewed; prior source-reading attestations were not adopted as fresh review. The finite local proofs, rather than any external theorem import, establish the local claims.

No defective published supplier was found in the actual proof closure; no published ledger edit is needed. No item source was edited during this adjudication, so provenance and any verification records remain unchanged. No repair_confidence is asserted for metadata normalization because no mathematical repair was performed. The report and decisions are the exact task-named files; the decision array contains exactly one entry.

## Checks

All commands below ran from the physics workspace and exited zero.

- Initial risk-report without --require-reviewed identified HIGH antipode, CRITICAL factorization and HIGH example, plus MODERATE projection lemma.
- node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-61.proof-contracts.json --require-reviewed: zero errors, all required reviews present.
- node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-61.proof-contracts.json --strict: zero errors/warnings, 4/4 checked.
- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-qftx-nested-two-loop-subtraction.md: one checked, zero failing.
- node tools/physics-support/proof-layout.mjs items/ex-qftx-nested-two-loop-subtraction.md: one item, three steps, zero defects. This is the final layout check on the reader-touched path; there were no subsequent item edits.
- node tools/physics-support/rendercheck.mjs items/ex-qftx-nested-two-loop-subtraction.md: one file passed renderer YAML, math, delimiters and wikilink checks; this does not claim a compiled TikZ visual inspection. The diagram was adjudicated from its complete source.
- Python SHA256 comparison: all six current raw item hashes match the immutable post-reader snapshot; exact reinsertion of the two removed example metadata lines reproduces its pre-reader hash.

These are local checks, not engine gates, proof stamps or publication acceptance. The engine owns current decision hashing and the gate battery.

## Owner follow-up and handoff

No routed mathematical blocker or escalation remains. The existing batch-61 cross-batch record still marks qftx-renormalization-hopf requires qftx-causal-renormalization open. Its evidence reports batch-60 Step-1 readiness concerns; the reader suggests that evidence may be stale. This adjudication has not authenticated current batch-60 readiness or reviewed that outside page's full closure. The owner must re-evaluate that exact native page-readiness record before treating it as closed. It is not an item-level premise of the abstract Hopf proofs and does not alter the sole metadata decision.

Preserved original scope, reader/refuter artifacts and pre/post snapshots. Updated only the owning contract risk reviews, the example's manifest deps/roles mirror, the owned frontier-dependency-ledger note, and the two requested output files. No agents, judges, stamps, dispatches, commits or gate cycles were initiated.
