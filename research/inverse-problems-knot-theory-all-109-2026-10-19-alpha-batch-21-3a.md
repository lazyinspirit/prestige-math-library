# Batch 21 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-21`.

Scope and order: the generated task routes only `touched:21:ex-ip-inverse-coordinate-credible-interval-undercoverage`, plus risk reviews for the sparse-gap counterexample, Gaussian example, and open problem in that order. Reader and refuter finding arrays and foreign gate obligations are empty. No page decisions are owed.

## Completed: sparse-gap counterexample

Reviewed `cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth` without mathematical changes. Its coordinate bound and beta>0 imply membership in the hyperrectangle and square-summability; its first gap includes coordinate 1. Recursion isolates the positive coordinate after every long zero block, so every fixed polished-tail inequality fails. The constant-inflation specialization uses K_L=L/sqrt(M), preserves A>beta, p>=0, gamma in (0,1), and 0<M<=(1984 C^8)^(-1), and implies the uniform lower coverage limit cannot reach 1-gamma. The alpha=0 branch is handled in the supplier's bracket-event argument.

Read the complete current published sparse-gap proof and its posterior, bracket, marginal-score, radius/bias/noise and polished-tail coverage suppliers. In particular, the one-sided bracket is valid for arbitrary square-summable truths; its two-sided polished-tail restriction is not silently imported. Checked the primary paper https://arxiv.org/pdf/1310.4489v5, Theorems 3.1 and 3.6 and complete section 9 (printed pp. 31–33 in this PDF); the local proof supplies its own explicit constants and endpoint conventions. Normalized the source metadata's imprecise combined pagination to exact theorem/section/version locators in the item and manifest; this is metadata-only and changes no argument or interface. Complete specific risk review recorded in the batch contract. No published mathematical defect confirmed.

## Completed: touched Gaussian example

Accepted the reader's IVT dependency/F3/step-1.1 repair with repair confidence 1. The explicit finite interval [0,B] meets the current theorem's hypotheses; strict increase gives uniqueness and Phi(0)=1/2 gives positivity. Completing the square, the closed membership graph, exact posterior mass 0.95, and the fixed-truth event 1<=Z<=4r+1 are correct. Strictly positive normal mass below 1 makes coverage less than 1/2, hence less than 0.95. Read all six steps and the current direct suppliers; the normal normalization and IVT arguments are supplied locally. The Example is unchanged, so no statement-consumer repair is triggered. Reconciled the reader's added dependency into batch-21.pages.json, which still lacked it. Completed the example risk review in the contract.

## Completed: open problem

The target is explicitly a question, with nonempty nonzero polished-tail Sobolev classes, p>0, beta_+<A, supplied selector/domain, posterior mass at least 1-gamma on the positive branch, uniform exact calibration, and uniform stochastic no-log diameter. Its zero branch makes no ell2-posterior assertion; the empty diameter convention is explicit. Reviewed the contraction definition and its actual use as terminology, not a coverage theorem. Reviewed current direct suppliers and the SVD coordinate diagram in the sequence-model context: its four objects/arrows are correctly typed and the square commutes; no diagram is needed in the three routed items.

Source-status review is bounded: Ray https://arxiv.org/pdf/1407.3397 section 4.1, equations (4.1)-(4.2), Proposition 4.1 and ensuing remarks concern direct white noise, logarithmic diameter and asymptotic credibility. Knapik et al. https://arxiv.org/pdf/1209.3628 Theorem 2.3 gives global contraction with a slowly varying factor. Rousseau-Szabo https://arxiv.org/pdf/1609.05067 introduction and section 2 Definition 1 use sieve bias and general polished tails. Gine-Nickl https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf Definition 6.4.1 and section 8.3.3 opening discussion supply confidence-set/self-similarity background. These passages do not settle the simultaneous target; I did not read the whole book or conduct an exhaustive literature search. Existing source-fetch receipts are historical evidence, not a source-fetch run by this adjudicator. Complete specific risk review recorded.

## Hash comparison and scope

Before Alpha metadata normalization, all four current raw item SHA256 hashes matched the reader-post snapshot. Only the Gaussian example differs between reader-pre and reader-post: pre 0b0e6bbbe557d6bb017111c22bbe0d77420f17359c9ce59cf7426f5d7c8e98ca, post/current 28b6c4a5bec5eef2a63452bc1228a6a2d70d72102ed22f2984bf8bb54ba63f1e. This accepts the reported dependency repair after independent full current proof review; no historical preimage reconstruction is claimed. The reader-post manifest still lacked the added IVT edge, now synchronized. Alpha changes only source-locator metadata in the counterexample and manifest, risk-review records, and authorized report/decision/ledger artifacts. No Statement/Definition/Example interface changes; no consumer mathematical repair is required. Both assigned pages retain empty bodies and compact-v1; no page decision is owed.

## Published findings and owner handoff

No published mathematical defect was confirmed. Nine published prerequisites have inline hyperlinks in their complete Definition/Statement sections: the hyperrectangle definition, polished-tail definition, sparse-gap counterexample, conservative-coverage theorem, maximizer-bracket lemma, posterior-formula lemma, radius/bias/noise lemma, confidence-set definition, and square-summable-family definition. Exact IDs, loci, supplier links, raw hashes, affected consumer chain and owner reference-relocation strategy are recorded under this batch's marker in `research/published-consumer-supplier-ledger.md`; the deduplicated A-P index was maintained under the prescribed lock. These are outside routed decision obligations, so no extra decisions or closed finding rows were manufactured. Source repairs remain owner editorial work. No published bytes were edited.

The original reader-repaired missing IVT dependency is recorded once as closed nonfatal defect `ipkt109-b21-3a-ivt-dependency`, caught/dispositioned at 3a-adjudicate, linked to the touched decision. The strict contract check initially caught a paraphrase in F3's quote field; replaced it with the exact current theorem excerpt and rechecked successfully. That mechanical contract synchronization created no defect row. The source locator normalization likewise changes metadata only. Dependency-ledger notes preserve stable IDs and all prior withdrawal proposals; none is added or removed.

## Actual focused checks

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-21.proof-contracts.json`: all three items routed (HIGH 7 / CRITICAL 10 / CRITICAL 13), zero errors. All required reviews are now specific, complete and recorded by alpha-batch-21.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-21.proof-contracts.json --strict`: final result 3/3 checked, zero errors/warnings after exact F3 quote synchronization.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md items/cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth.md`: 2 checked, zero failures.
- `node tools/rendercheck.mjs` on those two items, the open problem, and both assigned pages with `--quiet`: five files passed actual YAML/math rendering.
- Final `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-21.proof-contracts.json --require-reviewed`: all three routed, zero errors.
- After final item edits, one batched `node tools/proof-layout.mjs items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md items/cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth.md`: 2 items, 10 steps, zero defects.
- Native defect-ledger append accepted the single closed row and refreshed its generated view. Decisions JSON has exactly the one owed touched obligation; reader, refuter, page and gate decision counts are zero.

No mathematical blocker or unresolved escalation remains in this dispatch. The open question remains open at its explicitly source-limited status. Published editorial alerts await owner maintenance. No judge cycle, stamping, certification, workflow transition or gate battery was initiated; the engine owns those actions.
