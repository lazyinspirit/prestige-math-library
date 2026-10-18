# Focused tangle proof reconstruction

Run: non-ml-math-remaining-81-2026-10-18. Agent: /root/math81_tangle_topology. Date: 2026-10-18.

This is an actual local author repair and self-check, not independent mathematical acceptance, a native result, or a publication receipt. Existing historical verification fields remain unchanged. Root owns acceptance and any required current publication-repair metadata, hashes and recertification.

## Original defect and source reading

The presentation's original step3.1 used Turaev Lemma3.3 as its completeness proof; the evaluator's step2.1 imported Turaev's whole relation verification. The two original Statements are retained byte-for-byte. The complete original carriers already archived by trace-tl were compared byte-for-byte with current originals before my first edit; both matched. Exact raw hashes appear in repair.json.

The complete Turaev PDF was retrieved by math81_trace_suppliers, not by this agent; I reused its actual PDF/text at trace-tl/sources/turaev.pdf and turaev.txt. I examined the complete relevant arguments: I §§2.1–2.3 (framing/band model and generators), theorem2.5 and formulas2.5.a–e, §§3.1–3.2 (full reduced presentation), §3.5 (complete coupon-free relation verification and orientation formulas), §§4.1–4.8 (word normal form, all R2 cases, compatible R3 reduction, planar height moves, opposite cups/snakes and paired curls). I also read §4.9's coupon argument in the extracted source; it is not needed here. Source's own §4.8 invokes a framed Reidemeister theorem and does not supply a general-position proof. The local collar-relative jet argument is therefore reconstructed explicitly instead of importing §4.8's assertion.

I rendered printed pages37,38,39,40,49,50,51,53,54,55,56,61,62,63,64,65,66,67,68 with PyMuPDF. Actual visual inspection covered pages37,38,40,51,61,62,63,64,65,66,67,68 (Figures2.5–2.6, source orientation formulas, R2 cases, R3 symmetry/bending and the delicate height/curl figures4.7–4.15). Rendering alone is not claimed as reading the other images. A magnified examination of p40 confirmed that the reversed cap uses Z-minus, whereas the reversed cup uses Z-plus. The copied source text's control characters conceal such superscripts, so this mattered to the reconstruction.

I reused the actual EGNO PDF/text retrieved by trace-tl. Read complete Lemma8.9.1 and its proof, pp214, and Definition8.10.1/Remark8.10.3 and the surrounding framing discussion, pp216–217. EGNO's freeness remark is context, not a proof supplier. Read the actual repaired local Drinfeld proof (bent crossing, braided dual comparison, explicit inverse and tensor defect) and the exact local dual/braiding/ribbon definitions used by the evaluator. No reading of unrelated source chapters is claimed.

## Local replacement and checks

Presentation: explicitly states all eight reduced relation families and all redundant formulas; supplies framing-to-band correspondence and finite twist encoding; constructs generic families by independent finite jets with collars fixed; lists/classifies projection and height events and proves finiteness including deleted diagonals; checks eight R2 cases; reduces the eight orientations and six compatible height orders of R3 by explicit cancellation involutions and at most two bends; displays four parameterized cup-passage identities, proves opposite snakes through braided-dual cancellation and p/q cancellation, and checks opposite-cup/cap and paired-curl moves. Compensating twists at R1 events carry the actual framing through the movie. This is a local reconstruction rather than invoking the source completeness lemma.

Evaluator: gives direct Yang–Baxter, snake, inverse and slide checks; proves both-sided bent inverse identities for both braidings; derives the exact twist-square relation by balancing, dual compatibility, evaluation naturality and a snake; derives the right cups/caps by dual comparison and j=u theta; checks all mixed and negative crossings and negative twists. No relation is discharged by the cited evaluator theorem.

For the original two issues, two internal review/repair passes only: initial reconstruction, then explicit cup-bending/opposite-snake formulas and sign correction checked against the rendered source. Final actual command (after final source edit):

`node tools/proof-layout.mjs items/lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation.md items/thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor.md`

At that point Exit0: `proof-layout: 2 items, 17 steps, 0 defects`. The added closure issue and final three-file check are recorded below. An exploratory precheck `--help` invocation failed because this wrapper treats it as a filename; no precheck pass is claimed. No production gate, recertification, state change or commit was attempted. Formatting checks do not establish mathematical validity.

## Consumers and limits

The actual source deps/justified_by closure has eight existing item consumers, individually listed in repair.json. I read their tangle/evaluator uses (including complete closed-braid Definition, closure lemma, stabilization lemma, framed invariance, unframed normalized invariance and worked sign-model computations). All retain exactly the original evaluator interface, AC-omega cost, j=u theta and positive-curl convention. No original Statement/Definition changed, and no consumer source was edited.

Root subsequently confirmed the source-only closure-comparison defect and explicitly extended this lane to repair `lem-ribbon-trace-equals-the-framed-closure-evaluation`. Its complete original was archived before editing, and its Statement remains byte-for-byte unchanged. I read the complete source Corollaries2.7.1–2.7.2 proofs, printed pp42–44, and rendered and visually examined those three pages, including Figures2.9–2.11. The replacement does not invoke those corollaries: it gives the actual nested cup/cap word, proves the right pairing recursion using the Drinfeld tensor defect and balancing, accounts for arbitrary chosen-dual comparisons, and derives the trace formula by direct substitution. Its local stabilization argument keeps the added crossing as the actual signed blackboard curl. The direct consumers and contextual uses (the closed-braid Definition through its closure discussion, framed invariance, scalar stabilization and their transitive examples/invariants) retain the same interface; their uses were already examined and no source correction is needed because no Statement or convention changed. This confirmed new subissue received one local repair/self-check round. No unresolved source-only closure import remains in these three assigned files.

Final actual check after the last item edit:

`node tools/proof-layout.mjs items/lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation.md items/thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor.md items/lem-ribbon-trace-equals-the-framed-closure-evaluation.md`

Exit0: `proof-layout: 3 items, 22 steps, 0 defects`.

No new TL quotient, fusion, modularity, Verlinde, TQFT or higher-category theorem is proved here. The planning pages preserve those separate obligations and capacity placement under trace-tl's construction lane. Physics sources were not edited. This is focused repair evidence for these three files, not a claim of independent whole-corpus proof acceptance.

Root requested reconciliation with trace-supplier cycle2’s centrality clarification. I reread the full current closure file before integration; it contained the rich nested-word proof and no surviving multiplicativity/cyclicity citation. The full integrated preimage was archived separately as `archive/lem-ribbon-trace-equals-the-framed-closure-evaluation-before-centrality-integration.md`. The final conclusion now explicitly proves scalar centrality from naturality of the unit braiding, justifying the conditional basic-trace tensor property in the ribbon setting. This is a focused supplier-interface integration, not a claim that the closure identity needs an imported trace product theorem. Final explicit-three-file proof-layout rerun again returned 3items22steps0defects, exit0.
