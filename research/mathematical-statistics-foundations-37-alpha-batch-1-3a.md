# Step 3a adjudication — batch 1

Run: `mathematical-statistics-foundations-37`. Group: `batch-1`. Scope: batch 1 only, in the generated dependency order. The scope owes one touched obligation and no page, reader or refuter decisions. Reader findings and refuter flags are empty; their reports were treated as evidence and the current mathematics was independently reviewed.

## Level 1 — kernel definition

`touched:1:def-parameter-measurable-statistical-model-as-markov-kernel`: **reviewed_no_defect**, `change_kind: audit_enrichment`, `defect_ids: []`. Retain the reader's reference replacement. The current raw source hash is `adbda890513784b8a09d98bd762401ea8434740f7531687da0823e3a7861553a`, exactly the frozen reader-post hash. The pre/post contract and manifest hashes agree. The only reader change replaces the Geyer reference with a direct kernel reference; no Definition, hypothesis or dependency changed.

The Definition supplies a function on `Theta × A` with probability-measure sections and measurable fixed-event maps into the relative Borel space `[0,1]`. Its representation condition is pointwise equality with the supplied experiment laws, in both directions. Empty parameter spaces make the clauses vacuous; probability sections include values 0 and 1, allow equal laws at distinct parameters, and entail no representative selection. If the sample space is empty and parameters exist, no probability section exists, consistently with the experiment prerequisite. An arbitrary experiment imposes no kernel measurability.

Opened actual prerequisites: `def-statistical-experiment`, `def-measurable-space`, `def-probability-measure`, together with the measurable-space/measure definitions and the experiment's law definition and proved pushforward lemma. The lemma uses measurable preimages, preservation of disjoint unions and normalization, and is valid at the experiment's actual use.

Source checked: [Szabó and van der Vaart, Bayesian Statistics](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics), §1.1, printed p. 5 (PDF page 11), Definition 1.1 and following statistical-model conditions, rendered lines 243–264. Both conditions match the current carrier. [Martin](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf), §5.1, printed p. 100, lines 5350–5353, supports the optional measurable parameter-space context. [Geyer](https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf), §6, printed p. 6, lines 230–233, concerns injectivity of a parameterization. This is source-audit enrichment of a sound definition, not a mathematical repair or closure of a finding.

No content edit or consumer repair is necessary. Next: level-4 factorization theorem and its risk review, followed by the two level-5 witnesses.

## Level 4 — factorization theorem

`thm-identifiability-iff-constant-on-equivalence-classes`: complete CRITICAL risk review recorded in its owning contract; no decision is owed for this untouched, unflagged item. Steps 1.1–3.1 prove the equivalence relation, factorization implication, graph construction, both directions of class constancy and uniqueness on the image. The graph is a subset of `M × T0` with exactly one target value for each law; no AC or measurable factor is needed. For empty `Theta`, `M` and the graph are empty and the empty factor is unique, including empty `T0`. For nonempty `Theta`, the supplied estimand precludes empty `T0`. Constant and singleton models also satisfy the characterization. Every F1–F4 use matches its current Definition supplier and the contract quotations/derivations.

Sources checked: Martin §§1.3.5–1.3.6, printed p. 20, lines 1017–1040, discusses law functionals, injective parameterization and indexed families; Geyer §6, printed p. 6, lines 230–233, gives the injectivity definition. Neither is claimed to supply the graph proof; it is fully local. Reader/refuter evidence contains no finding, and independent review found none. No theorem or supplier was edited. Next: level-5 redundant Bernoulli witness, then identifiable Bernoulli example.

Historical kernel delta check: replacing only the new reference title/URL by the reader-reported old Geyer reference reconstructs SHA-256 `0b1b7f459fcb91dfbcff7cdf8a85f366e24f77022e8ebcb2e321eea4487ee24e`, exactly the frozen pre-reader raw hash. Thus the source-only delta is established by bytes, not inferred merely from differing hashes.

## Level 5 — redundant Bernoulli counterexample

`cex-nonidentifiable-redundant-bernoulli-parameterization`: complete CRITICAL risk review recorded; no decision owed. Both proof steps and all eight actual supplier interfaces were reviewed. The probability masses are nonnegative on the triangle `u+v≤1` and sum to one; disjoint-event additivity follows because each of two atoms belongs to at most one event. The two rational witnesses `(1/5,1/2)` and `(3/10,2/5)` both have sum `7/10`. Their four event probabilities are exactly `0,3/10,7/10,1`, but target values differ. This refutes the written universal claim and precludes any law factor. The triangle includes `(0,0)`, `(1,0)` and `(0,1)` and both point-mass boundaries; no AC or parameter measurability is assumed. All eight contract citation excerpts match the current source sections. No external source is claimed for this generated witness; its argument is complete locally. No defect, edit or escalation. Next: identifiable Bernoulli example.

## Level 5 — identifiable Bernoulli example

`ex-identifiable-bernoulli-model-and-estimand`: complete CRITICAL risk review recorded; no decision owed. The full power set is a sigma-algebra and the formula defines a probability law, including countable additivity by the two-atom argument in step 1.1. Step 2.1 evaluates equal measures on `{1}` to recover `p=p′`; this proves model injectivity and identity-target identifiability. The unique factor is explicitly `Q ↦ Q({1})`. Values `p=0,1` give distinct point masses and satisfy all formulas. All eight contract citation excerpts match their current supplier sections; the already reviewed factorization theorem supplies exactly the conclusion used. No AC, common realization or measurable factor is claimed. This generated example has a complete local argument. No defect, edit or escalation. All ordered mathematical reviews are complete; next: final focused mechanical checks and handoff.

## Final changes, checks and handoff

Changed only the task-named report and decisions file, the owning batch contract (three specific complete risk reviews), the batch manifest (kernel reference mirror), and an appended owned-consumer note in `briefs/tasks/frontier-dependency-ledger.md`. Item and page content remained unchanged by Alpha. No material proof rewrite, judge-record invalidation, confirmed mathematical defect, defect-ledger row, published defect, proposed withdrawal or outside-consumer repair was needed. Published content remains read-only; no published-ledger edit was warranted. The cross-batch input remains the actual empty edge set.

Local checks completed successfully:

- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-1.proof-contracts.json`: 0 errors, 9 items routed; exactly three CRITICAL items, reviewed in generated order.
- The same command with `--require-reviewed`: 0 errors, all three reviews complete.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-1.proof-contracts.json --strict`: 0 errors, 0 warnings, 9/9 items checked.
- `node tools/tsx-run.mjs tools/precheck.mts` on the kernel definition, factorization theorem and both Bernoulli items: 3 checked proofs, 0 failing; the definition has no proof phase.
- `node tools/proof-layout.mjs` on those same four explicit item paths: 4 items, 9 steps, 0 defects. This read-only check was run after the final metadata edits; Alpha changed no item paths requiring formatting.
- Exact byte checks: the routed reader hash binds `reader-findings-1.json` (not the prose reader report); its hash and the refuter JSON hash match the scope. All four reviewed item raw hashes match the frozen reader-post snapshot. The decisions JSON has exactly the sole owed touched obligation, with no hashes stamped by Alpha.

The kernel manifest's source metadata now matches the retained reader-post carrier, so its manifest hash changes by this explicit reconciliation. Contract hashes change only by the three added risk reviews. The engine owns current decision hashing, its gate battery and transitions. These local mechanical passes are not judge results or self-certification. No unresolved uncertainty or blocker remains within this dispatch.
