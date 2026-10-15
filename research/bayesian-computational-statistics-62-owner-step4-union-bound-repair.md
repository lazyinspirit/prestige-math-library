# Step-4 published union-bound alert: focused cycle 1

Confirmed defect: `thm-finite-union-bound` has a correct unrestricted Statement, but its old Given required a finite probability space, and its old L1/L2 cited `lem-finite-probability-basic-laws` and `thm-finite-additivity-of-probability`. Both actual suppliers require a finite probability space. The old proof therefore did not locally establish the full stated domain, including the continuous observation model used in batch 12.

The Statement is preserved byte for byte, including its n=0 assertion. Only the supplier's Facts & Assumptions and Proof were edited. The corrected Given permits an arbitrary probability space. Its facts now use the probability-measure definition, general measure monotonicity, countable additivity and zero empty-set mass, and sigma-algebra finite closure. The proof retains the finite disjointification B_i=A_i minus earlier events, explicitly checks measurability and equal unions, pads the finite disjoint family with empty sets, and applies general countable additivity. Monotonicity bounds each disjoint piece by its original event. Empty and singleton families are stated explicitly. No finiteness assumption on the sample space and no choice axiom is used.

Exact source before-image: `research/bayesian-computational-statistics-62-owner-step4-union-bound-before/thm-finite-union-bound.md`. The frontmatter was left untouched for root's metadata/repair-receipt preparation. Required dependency replacement is recorded in `bayesian-computational-statistics-62-owner-step4-union-bound-metadata-proposal.json`; the two finite-space suppliers should be replaced by the four actual general suppliers cited in the corrected Facts. Root owns all proof-contract/manifest/citation mirrors, ledger entries, hashes, published-repair receipt and alert route.

Local source bodies actually read: `def-probability-measure`, `def-measure`, `prop-measure-monotonicity`, `def-sigma-algebra` and its `def-algebra-of-subsets` supplier, both old finite-space suppliers, and `thm-finite-and-countable-subadditivity-of-measures` as context. The final proof uses the four cited general suppliers directly and does not import the broader subadditivity theorem. No external full text was fetched or read for this repair; the existing bibliography remains unchanged, and no external-source inspection is claimed.

## Actual consumer closure

`cex-weak-tilted-tests-do-not-imply-almost-sure-consistency`, Facts F6 and Counterexample step 2.1, uses the bound on the n events `{Y_i>b_n}` for continuous IID observations with density f on [e,infinity). Each event is measurable in the finite product sampling sigma-algebra. Its probability is at most c/[b_n(log b_n)^2], and the corrected general finite union bound gives at most n times that quantity. With b_n=n/(log n)^(3/2) this is O((log n)^(-1/2)), tending to zero, exactly as the consumer claims. Independence is unnecessary for this union-bound inference; the consumer uses it separately in the subsequent variance estimate. Thus the existing consumer is valid with the repaired supplier and needs no edit.

No Statement/Definition changed, so no altered interface propagates to direct, indirect, alias or context consumers. The existing unrestricted result remains available with its original identity and claim.

After the final supplier source edit, the mandatory explicit formatting check was run:

`node tools/proof-layout.mjs items/thm-finite-union-bound.md`

Actual output: `proof-layout: 1 items, 3 steps, 0 defects`.

No tests, gates, metadata, canonical hash records, decisions, ledgers or run state were changed. Root must finish metadata and published-repair evidence before the native full battery.
