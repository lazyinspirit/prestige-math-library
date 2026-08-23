# Independent reader 7 — frontier-17 batch 7

Scope: `research/frontier-17-batch-7.pages.json` (pages `applications-of-the-fundamental-group` and `applications-of-the-fundamental-group-examples`). This report is the durable Step-6a record. Findings are stable and are not renumbered.

## Fatal findings

### R7-1 — page summary overstates the punctured-space argument

- Item id: page prose for `applications-of-the-fundamental-group` (A-page summary, paragraph 2).
- Exact defect: “Punctured-space calculations distinguish $\mathbb R^2$ from $\mathbb R^n$ when $n\ne2$” attributes all cases $n\ne2$ to the punctured-space fundamental-group calculation. The proof of `thm-plane-not-homeomorphic-to-other-euclidean-spaces` uses that calculation only for $n\ge3$; step 1.1 uses cardinality for $n=0$, and step 1.2 cites the separate theorem `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` for $n=1$.
- Why: this is a false description of the proof route in unchecked page prose.
- Severity: **fatal**.
- Disposition: fixed. The summary now attributes the punctured-space calculation only to $n\ge3$ and explicitly says that separate arguments handle $n=0,1$.

### R7-2 — the cited fact does not license nontriviality of the named loop

- Item id: `fs-every-compact-path-connected-planar-set-has-a-universal-cover`.
- Exact location: Facts & Assumptions [L2] and Refutation step 2.1.
- Exact defect: [L2] states only that the unit circle has fundamental group isomorphic to $\mathbb Z$. Step 2.1 then concludes that “the standard loop” in $C_n$ has nontrivial image. A group being isomorphic to $\mathbb Z$ does not by itself identify that named loop with a nonzero element.
- Evidence: the cited on-disk Statement of `cor-geometric-unit-circle-has-fundamental-group-z` has the needed additional clause: the loop $t\mapsto(\cos 2\pi mt,\sin 2\pi mt)$ corresponds to $m$ for every $m\in\mathbb Z$; at $m=1$ the once-around loop is nontrivial. That clause is absent from [L2].
- Why: step 2.1 needs a fact not present in its stated inputs; this is an incomplete dependency restatement, the precise fatal class the reader brief requires checking.
- Severity: **fatal**.
- Disposition: fixed. [L2] now states the cited degree-one clause, step 2.1 names its transported loop $\ell_n$ and uses injectivity of the retraction-induced map, and the proof contract carries the exact source quote and revised derivation.

## Nonfatal findings and polish

### R7-3 — basepoint-change isomorphism compresses an unstated path-cancellation argument

- Item id: `prop-fundamental-groups-of-punctured-euclidean-spaces`.
- Exact location: Proof step 2.1.
- Exact defect: step 2.1 asserts that $[\alpha]\mapsto[\overline\gamma_x*\alpha*\gamma_x]$ is a well-defined homomorphism with the displayed inverse and cites [L5], whose source Statement gives only the fundamental-group laws for loops. It does not state cancellation of an arbitrary path with its reversal or that concatenation with fixed paths preserves endpoint homotopy.
- Evidence: the missing argument is the standard explicit backtracking homotopy and the one-line conjugation calculation. A competent reader can close it within 30 seconds, so the brief’s rule makes this nonfatal.
- Severity: **nonfatal**.
- Disposition: fixed. Step 2.1 now gives the piecewise backtracking homotopy, explains well-definedness under endpoint homotopy, performs the homomorphism cancellation, and gives the two-sided inverse; the derivation row is synchronized.

### R7-4 — continuity of the circle retraction skips the final open-preimage assembly

- Item id: `ex-hawaiian-earring-retracts-onto-each-circle`.
- Exact location: Verification steps 2.1–3.1.
- Exact defect: step 2.1 gives local identity/constant descriptions away from $0$, and step 3.1 gives the neighbourhood test at $0$, then invokes the global open-preimage criterion without explicitly assembling these local neighbourhoods into the openness of $r_n^{-1}[V]$ for arbitrary open $V\subseteq C_n$.
- Evidence: for every point of $r_n^{-1}[V]$, step 2.1 supplies a relative neighbourhood contained in the preimage away from $0$ (intersecting with the trace defining $V$ on the selected circle), while step 3.1 supplies one at $0$ when $0\in V$. Their union is the preimage. This is a sub-30-second bridge.
- Severity: **polish**.
- Disposition: fixed. Step 3.1 now treats every point of an arbitrary preimage $r_n^{-1}[V]$, separately at and away from the origin, and concludes openness before invoking [L1]; the derivation row is synchronized.

### R7-5 — boundary worksheet points to the wrong proof steps

- Item ids: `lem-antipodal-circle-map-has-odd-lift-increment`, `prop-hawaiian-earring-is-compact-and-path-connected`, `cex-four-closed-sets-can-cover-s2-without-antipodal-pairs`, and `fs-every-compact-path-connected-planar-set-has-a-universal-cover`.
- Exact location: `research/frontier-17-batch-7.proof-contracts.json`, the `one`/`endpoints`, `nonempty-choice`, `zero`/`degenerate`, and `empty`/`one`/`endpoints`/`nonempty-choice` boundary rows respectively.
- Exact defect: nine checked rows cite the wrong numbered proof step: the lift endpoint is computed in step 3.1 rather than 2.1; the Hawaiian-earring tail threshold is chosen in step 2.2 rather than 3.1; the tetrahedral contradiction and spanning calculation occur in step 2.2 rather than 3.1; and the false-statement rows transpose the neighbourhood selection in step 1.2 and the based-loop argument in step 2.1.
- Why: the mathematical dispositions are correct, but the durable anchors are inaccurate.
- Severity: **nonfatal**.
- Disposition: fixed by correcting all nine anchors. The 74 `not_applicable` rows were separately rechecked and already carry substantive item-specific `reason` fields; an initial diagnostic that inspected only the `evidence` key used by `checked` rows was discarded and is not a finding.

### R7-6 — neighbourhood-to-ball inference is attributed to facts that stop short of the metric basis

- Item id: `fs-every-compact-path-connected-planar-set-has-a-universal-cover`.
- Exact location: Facts & Assumptions after [F4] and Refutation step 1.2.
- Exact defect: [F4] states only that a neighbourhood contains a relative open set and that relative opens are ambient traces. Step 1.2 formerly attributed to [F4] the stronger conclusion that the neighbourhood contains $\mathbb H\cap B(0,\varepsilon)$, without an input saying that the ambient Euclidean open set contains a metric ball at $0$.
- Evidence: the opened published dependency `def-metric-topology` states exactly that every point of a metric-open set has a ball inside the set.
- Why: the missing definition is an immediate sub-30-second bridge, so this is nonfatal under the brief’s rule, but [F4] alone did not license the written inference.
- Severity: **nonfatal**.
- Disposition: fixed by adding `def-metric-topology` to the item’s dependencies, adding the faithful fact [F5], expanding step 1.2, and adding the exact citation and updated step inputs to the batch contract. This dependency change is recorded here for Alpha’s licensed Step-6b manifest/plan update; `research/plan-spec.json` was not touched.

## Changes applied

- Repaired the second summary paragraph of `library/topology/applications-of-the-fundamental-group.md` for R7-1.
- Repaired [L2] and steps 1.2/2.1 of `items/fs-every-compact-path-connected-planar-set-has-a-universal-cover.md` for R7-2 and R7-6. Added the published dependency `def-metric-topology` and the faithful fact [F5]. This is the only dependency-list change made by reader 7.
- Expanded step 2.1 of `items/prop-fundamental-groups-of-punctured-euclidean-spaces.md` for R7-3.
- Expanded step 3.1 of `items/ex-hawaiian-earring-retracts-onto-each-circle.md` for R7-4.
- Updated `research/frontier-17-batch-7.proof-contracts.json` for every changed citation, proof step, input map, and boundary anchor. It now has 22 contracts, 112 citation rows, 80 numbered-step rows, and 176 boundary rows.
- No item, lemma, corollary, example, counterexample, or page was added or deleted. No title or Statement was changed. None of the changed items contained a `verification.judge` block, so there was no stale judge record to delete. No published item, another batch’s file, or `research/plan-spec.json` was edited.

## Final coverage

- Items opened: 23/23 scoped items.
- Cited targets opened: all 62 distinct [F#]/[A#]/[L#] targets after the [F5] repair, including every published dependency used by the facts and all in-batch targets.
- Separate title/Statement/proof pass: complete for 23/23 items.
- Provenance pass: complete for 23/23 items; no `deps` target has `provenance.statement: ai-generated`. The sole AI-generated scoped Statement, `ex-cubic-polynomial-large-circle-loop-has-degree-three`, is not load-bearing and its strict estimate $12<125$ directly verifies the claimed degree-three homotopy.
- Page pass: A summary shape is two paragraphs of 57 and 78 words; B-page body is empty. Finding R7-1 is the only page-prose defect found.
- Every numbered proof step and every dependency citation was read. There are no coverage exceptions and no unresolved reader concerns.

## Gate record on final text

- Required `tools/reflow.mts`: all three changed proof items were unchanged by reflow; the later R7-6 edit was reflowed again and remained unchanged.
- Required item-scoped `tools/precheck.mts`: all three changed proof items pass; the R7-6 final text was checked again and passes.
- `proof-contract --strict`: 22/22 contracts, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: 112 citations; every quote found and no widening candidate.
- `boundary-audit --fail-on-contradicted --fail-on-template`: 176 rows; no contradicted disposition and no template-reuse cluster.
- `finite-smoke`: 0 errors and 0 registered checks; this is recorded as no bounded-model evidence, not as proof.
- `risk-report`: 0 errors; all 22 proof-bearing items routed, with the high/critical dispositions left to Alpha’s required extra read.
- `content-policy`: 23 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 1 A-page checklist, 40 harvested results, 0 errors, 0 warnings.
- `audit-manifest`: 114 relationships over 23 items, 0 defects; the added `def-metric-topology` edge is published/backward and has `literature-derived` Statement provenance.
- Scoped `rendercheck`: 25 files, real YAML and KaTeX parsing clean.
- Scoped `citecheck`: 23 items, clean.
- Scoped `prosecheck --warnings`: 0 errors and two false-positive count warnings on the mathematical phrase “one of them” in the three-set corollary and four-set counterexample. Neither is a count of page contents.
- Final page shape: the A-page summary has exactly two paragraphs of 57 and 78 words; the B-page authored body is empty.

## Per-page verdicts

- `applications-of-the-fundamental-group`: **clean after repair**. Seventeen scoped items opened. R7-1 and R7-3 were fixed; all titles, Statements, proofs, citations, boundaries, provenance tags, and the final summary now agree.
- `applications-of-the-fundamental-group-examples`: **clean after repair**. Six scoped items opened. R7-2, R7-4, and R7-6 were fixed; R7-5 corrected contract anchors affecting items on both pages. The AI-generated cubic example was directly checked and is not load-bearing.

**Total scoped items actually opened: 23. Findings: 2 fatal, 3 nonfatal, 1 polish; all fixed.**
