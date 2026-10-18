# Batch 57 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`. Group: `batch-57`.

## Scope and dispositions

Read the exact scope/order task, reader report/findings, refuter report, pre/post snapshots, current batch carriers, manifest, contract and dependency input. The pre/post snapshots agree for all eleven items, contracts and both pages; the reader made no scoped repair. Exactly three decisions are owed and supplied in the companion decisions JSON. No touched/page decision was added for an untouched carrier or an adjudicator's own repair.

| Obligation | Verdict | Defect row |
|---|---|---|
| reader:57:1, `thm-determinant-multiplicative` title | confirmed_nonfatal | nm81-b57-det-multiplicative-title |
| reader:57:2, `cor-invertible-matrix-has-unit-determinant` title | confirmed_nonfatal | nm81-b57-invertible-det-title |
| refuter:57:1, `thm-temperley-lieb-presentation-isomorphism` F7 | confirmed_fatal; repaired | nm81-b57-isomorphism-det-domain |

Both published titles omit positive size although their Statements assume n>=1. `def-matrices-over-a-commutative-ring` includes zero-sized matrices, including the empty invertible square matrix; `def-determinant-of-a-square-matrix` only defines determinant at positive size. Independently reviewed both complete proofs: column-multilinear rigidity proves multiplicativity, and applying it to the two matrix-inverse equations proves the unit claim. Their positive-size mathematics is sound. These are bounded nonfatal title-domain findings, recorded as closed `nonfatal-recorded` dispositions; published editorial maintenance remains pending owner action. Both published files remain unchanged. The serialized published ledger entry identifies exact supplier/consumer paths, raw hashes, repair strategy and two unique A-P classification rows.

F7 in the owned isomorphism theorem asserted multiplicativity for all same-sized square matrices. This is broader than its exact supplier and includes an undefined determinant expression. Confirmed the routed citation defect as written, while distinguishing it from the actual application: Proof 3.1 already proves C_n>=1 before Proof 5.1 takes determinants. Qualified F7 to positive-sized square matrices of the same size. This completely repairs the fact without changing the theorem Statement, dependencies or content contract. Repair confidence: 1.

## Independent proof and risk review

Completed the required reviews in the supplied dependency-level order; all nine HIGH/CRITICAL contract entries now contain specific independent `risk_review` records. Each proof was checked against its actual suppliers rather than the prior worksheet.

- Category laws: glued graph paths/cycles give closure and additive loop counts; removed cycles cannot reconnect at another interface. Identities, tensor interchange, literal label offsets, identity coherence constraints, endpoint tagging and central scalar action give the category and algebra laws. Empty objects, odd hom spaces, zero ring and zero loop value cause no exception.
- Catalan cardinality: earlier/later pair endpoints yield the prefix inequality. Last-unmatched-opening pairing is inverse because skipping an opening would force interlacing. Step words give Dyck paths, including the empty word at n=0. The free-module claim concerns an indexed family, also over the zero ring.
- Generator normal form: shortening strictly decreases length; subwords of commutation-reduced words remain reduced. Induction makes their maxima unique. Terminal block extraction and the reducible-triple obstruction enforce increasing block endpoints. Strict ascents recover formal block boundaries; the corner encoding and its inverse count exactly the Dyck paths. Only spanning is claimed at this stage. n=0,1 and accumulated zero scalars are covered.
- Local relations: explicitly traced the square cycle, the triple's through path through all six interface points, reflection and distant disjoint intervals. The presented-algebra universal property supplies the homomorphism even for empty generator sets. Two inaccurate connectivity descriptions were corrected, as detailed below.
- Diagram generation: through endpoints are order preserving and cap-only intervals have even size. Finite CT-to-TC exchanges reach every flat pattern. Right-to-left island factors merge distinct paths to construct the outer cap and interior simple caps without loops; recursion on smaller nested intervals terminates. Reflected bottom operations preserve the top. Cases p=0 and t=0 both work.
- Presentation isomorphism: the two explicit encodings give equal finite indexed ranks; the identity diagram makes that size positive. Finitely many preimages extend linearly to B with AB=I. Multiplicativity gives a unit determinant; the positive-size adjugate criterion makes A invertible. Injectivity then passes to q and pi. Checked all sixteen direct suppliers, the two published finding carriers and their relevant determinant/unit/adjugate interfaces. No field, nonzero parameter or arbitrary-choice assumption is needed, including n=0,1 and the zero ring.
- Zero-loop counterexample: the four cyclic endpoints have three pairings, exactly two noncrossing. Over Z the cap-cup standard vector is nonzero and has square zero; the isomorphism transfers both claims to u1.
- Ranks zero through three: enumerated normal forms to obtain 1,1,2,5 and recomputed every table entry from a²=delta a, b²=delta b, aba=a, bab=b. In particular abba=delta a, baab=delta b, (ab)²=ab and (ba)²=ba.
- Three-strand forms: the empty list, three one-block lists and unique two-block list exhaust the five forms; both alternating length-four reductions are correct. Independence comes from the proved isomorphism.

## Additional owned risk-review repairs

In `lem-temperley-lieb-generators-satisfy-local-relations`, Proof 1.1 named the upper cap and lower cup as the glued cycle. With the fixed left-above-right convention it is the upper cup and lower cap; corrected those words. Proof 1.2 said three remaining exterior endpoints after removing the exterior cap/cup, but there are two; corrected that count. The equations, explicit through-path tracing and lemma Statement remain sound and unchanged. These two nonfatal textual errors are recorded in closed rows `nm81-b57-square-loop-description` and `nm81-b57-triple-endpoint-count`, with repair confidence 1. They are referenced in the routed decision's evidence and documented here without inventing another owed obligation.

Updated the affected derivation strings and all required risk reviews in the owning contract. Existing provenance already says `proof: ai-altered`; no provenance or manifest interface change is needed. Neither edited item had a judge record to invalidate. No Statement or Definition changed, so no supplier-interface consumer repair was triggered. Both pages retain their sound summaries and existing item order. No withdrawal is proposed.

The batch dependency input has one existing verified contextual page-reading row and no in-run item supplier edge. The two proof-description fixes and F7 qualification change no dependency or page interface; that input and `briefs/tasks/frontier-dependency-ledger.md` remain intact. No unified ledger regeneration was needed.

## Sources and limits

Independently opened [Ridout–Saint-Aubin, arXiv:1204.4505](https://arxiv.org/pdf/1204.4505), §2: equations (2.2)–(2.4), Lemma 2.2 and Proposition 2.3 (pp.4–7), the corner bijection (p.8), and equations (2.12)–(2.14) with the complete Lemma 2.1 generation proof (pp.9–10). Its algebra is over C at positive rank; the local graph and determinant arguments were independently checked for the stated arbitrary-ring and n=0 extensions. The source's dimension argument was not substituted for the local independence proof. Other bibliography entries were not claimed as newly read; the local exact suppliers and this source suffice for the reviewed steps.

Opened the direct free-algebra, free-module, category/functor/coherence, natural-addition, bracket-word/Dyck/Catalan, matrix, determinant and unit suppliers. Also checked the positive-size uniqueness, rigidity, normalization, invertible-matrix, ring-unit and adjugate statements used by the published matrix proofs. This is a bounded batch and supplier-interface review, not a recursive audit of every foundational proof. No historical source repair or missing-byte resolution is inferred from the routed observations; exact observation/pre hashes remain in the decisions.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-57.proof-contracts.json`: 0 errors, nine HIGH/CRITICAL items identified. Repeated with `--require-reviewed`: 0 errors after all reviews.
- `node tools/tsx-run.mjs tools/reflow.mts` on both edited items: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on both edited items: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` on both edited items: 2 files, no errors; real KaTeX and renderer YAML parsed.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-57.proof-contracts.json --items lem-temperley-lieb-generators-satisfy-local-relations,thm-temperley-lieb-presentation-isomorphism --strict`: 0 errors, 0 warnings, 2/2 checked.
- Final, batched `node tools/proof-layout.mjs items/lem-temperley-lieb-generators-satisfy-local-relations.md items/thm-temperley-lieb-presentation-isomorphism.md`: 2 items, 10 steps, 0 defects. No item edit followed it.
- Defect-ledger append: five closed rows appended through the serialized tool; generated view refreshed successfully. Published-ledger edits acquired `research/.published-consumer-ledger.lock`, reread/merged current contents and released only that lock.

An initial attempt to request precheck usage with `--help` failed because that wrapper interprets it as a filename; the actual explicit-file precheck above passed. PDF text extraction was unavailable locally, so source sections were read through the browser instead. Neither operational issue was recorded as a mathematical defect.

No substantial prerequisite blocker or unresolved mathematical uncertainty remains. Two nonfatal published title-maintenance requests remain with the owner. No judging, stamping, dispatch, engine transition, gate battery, publication, push or commit was performed. The engine owns decision hashes and final gates.
