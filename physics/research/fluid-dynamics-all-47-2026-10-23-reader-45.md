# Reader report — fluid-dynamics-all-47-2026-10-23, batch 45

## Scope and inventory

Reviewed batch 45 independently. The assigned manifest lists two pages and three items; all three items declare no `deps`, `justified_by`, or `forward_refs`, and the cross-batch dependency file is empty.

- `fd-fr01` — draft physics A-page, `page_layout: compact-v1`, no prerequisites; contains `rem-fd-frontier-status-separation` and `rem-fd-learned-fluid-evidence-scope`. Its body is empty.
- `fd-fr01-examples` — draft physics B-page, `page_layout: compact-v1`, companion requiring `fd-fr01`; contains `ex-fd-benchmark-space-time-dimension` as its example. Its body is empty.
- `rem-fd-frontier-status-separation` — dated research-status remark; no item dependencies.
- `rem-fd-learned-fluid-evidence-scope` — methodological remark on computational and learned model evidence; no item dependencies.
- `ex-fd-benchmark-space-time-dimension` — constructed four-input-axis example with a two-step verification; no item dependencies.
- Read `research/fluid-dynamics-all-47-2026-10-23-batch-45.proof-contracts.json` and `research/fluid-dynamics-all-47-2026-10-23-batch-45.cross-batch-dependencies.json` as navigation and contract evidence, not as verdicts. No TikZ or tikzcd diagrams occur in the assigned items.

## Independent review and source evidence

- Compared the whole-space and periodic alternatives with Fefferman, “Existence and Smoothness of the Navier–Stokes Equation,” printed pp. 57–59, equations (1)–(11), alternatives (A)–(D): [Clay Mathematics Institute PDF](https://www.claymath.org/library/monographs/MPPc.pdf). Alternatives B and D require periodic velocity and smooth pressure; they do not require pressure periodicity. The energy bound is included in A/C, not B/D.
- Checked the current Clay problem page’s **Active** label and the dated announcement. The announcement says the problem has “apparently” been settled and that prize evaluation is deliberately unhurried: [current page](https://www.claymath.org/millennium/Navier-Stokes-Equation/), [11 September 2026 announcement](https://www.claymath.org/news/navier-stokes-announcement/).
- Checked OpenAI’s 8 September announcement and the preprint’s Theorem 1.1 and Corollary 10.6. These sources report the authors’ C/D claims, including compactly supported forcing, zero initial velocity, finite-energy blow-up for the whole-space construction, and periodic velocity blow-up for the torus construction: [announcement](https://openai.com/index/navier-stokes-solution/), [preprint](https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf). I did not audit the complete 166-page proof; the remark correctly treats it as a reported claim rather than an accepted supplier.
- Checked arXiv v1 §§3.1, 3.2, 3.2.1 and its disclaimer. It reports an $m+4$ versus $m+5$ derivative mismatch and a different pressure-flux estimate, while expressly disclaiming a verdict on correctness of the natural-language proof: [arXiv v1](https://arxiv.org/pdf/2610.08144v1). The arXiv record gives the authors as Alexander Bastounis, Fabian Circelli, and Anders C. Hansen.
- Checked Duraisamy, Iaccarino, and Xiao, §§3.1–3.4, 5.1–5.2, and 6, for calibration, inference, data-driven discrepancies, generalization, uncertainty propagation, intended use, and data–model consistency: [review preprint](https://arxiv.org/pdf/1804.00183v3).
- Checked Yeo, NIST IR 8298, §3 (printed pp. 5–10), §4.3 (printed pp. 19–21), and §§5–6 (printed pp. 22–23), for verification/validation, experimental uncertainty, and validation levels: [NIST report](https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8298.pdf).
- Checked Selin’s MIT OCW Lecture 3 slides 10, 15–22, and 26–29 for purpose-specific model validity, verification versus validation, uncertainty, and the limit of benchmark verification as evidence of physical realism: [lecture PDF](https://ocw.mit.edu/courses/ids-410j-modeling-and-assessment-for-policy-spring-2013/b4357c3b59c2746301cd5478386f4ac3_MITESD_864S13_lecture3.pdf).

## Item dispositions

- `rem-fd-frontier-status-separation` — **repaired**. The physical and mathematical formulation, units, decay conditions, and A–D distinctions otherwise match Fefferman’s statement. The periodic cases had overstated the pressure condition. I changed them to require smooth pressure while imposing period one only on velocity, including the concluding definition. I also corrected the cited arXiv authors’ first names to match the versioned paper. No item consumer depends on this remark; a current `items/` and `library/` search found only its assigned page placement. Its proof-contract boundary evidence and all eight repeated source excerpts were updated to reflect the corrected B/D periodicity condition.
- `rem-fd-learned-fluid-evidence-scope` — **repaired**. Its definitions and evidence-scope distinctions are appropriately bounded and do not report a performance result or empirical measurement. The Duraisamy locator cited nonexistent §§8.2–10; it now points to the actual relevant §§3.1–3.4, 5.1–5.2, and 6. The NIST locator now uses the report’s printed page numbers and exact sections.
- `ex-fd-benchmark-space-time-dimension` — **passes**. The domain is the product $\Omega\times I\times\Theta$, so varying its four factors gives four input axes. Fixing $\theta$ leaves two spatial coordinates and one time coordinate; the two codomain components are outputs, not input axes. The two verification steps establish the stated coordinate count from the supplied domain and map. No diagram is needed.

## Page verdicts

- `fd-fr01` — **passes**. Draft A-page inventory matches the manifest, the page body is empty as required, and compact layout metadata is present.
- `fd-fr01-examples` — **passes**. Draft B-page inventory matches the manifest, its A-page prerequisite is correctly represented, the page body is empty, and compact layout metadata is present.

No page prose or page metadata was edited. No unedited defect or workflow blocker remains in the assigned scope.

## Edits and checks

Edited only the two assigned in-flight remark items and the assigned proof contract for `rem-fd-frontier-status-separation`. No stale `verification.judge` record was present on either edited item.

- Reflow: `rem-fd-frontier-status-separation` and `rem-fd-learned-fluid-evidence-scope` both reported unchanged.
- Precheck: both edited remarks reported `0 checked, 0 failing` (they contain no numbered proof steps).
- Final proof-layout: both changed item paths checked together; `2 items, 0 steps, 0 defects`.

## Coverage limitation

The OpenAI preprint was checked at its abstract, Theorem 1.1, Corollary 10.6, and relevant conclusion, not audited as a complete proof. I report its claims only as claims. For the other sources, I checked the cited formulations or sections listed above; I did not independently verify unquoted material outside those locators.
