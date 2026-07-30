---
id: rem-countability-axiom-implication-and-choice-ledger
kind: remark
title: "Implication, preservation, counterexample, and choice ledger for the countability axioms"
status: published
origin: session
deps: [cor-cardinal-functions-detect-countability-axioms, thm-second-countable-implies-first-countable, thm-second-countable-implies-separable, thm-second-countable-implies-lindelof, thm-metric-countability-equivalences, prop-second-countability-is-hereditary, thm-countable-products-of-second-countable-spaces, prop-separable-spaces-are-ccc, fs-ccc-spaces-are-separable, fs-first-countable-spaces-are-second-countable, fs-separable-spaces-are-second-countable, fs-separability-is-hereditary, fs-lindelofness-is-hereditary, fs-lindelofness-is-productive]
aliases: []
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
The implication chain is second countable $\Rightarrow$ first countable and, with $\mathrm{AC}_\omega$, second countable $\Rightarrow$ separable and Lindelöf. Separable spaces are ccc. The displayed counterexamples show that the reverse implications and the stated hereditary and productive extensions fail.

The cardinal functions use raw finite values, so the metric theorem is
$d=w$, not a blanket equality of all five functions. Countable choice is
stated where it is spent: selecting countably many bases or cover
subfamilies, taking countable unions of countable sets, and deriving the
metric and countable-product equivalences.
