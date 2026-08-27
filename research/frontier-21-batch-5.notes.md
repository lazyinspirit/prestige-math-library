# frontier-21 · Beta · batch notes — `the-group-algebra-and-representations` (step 1 scaffold)

Run `frontier-21`, batch `5`, one A/B pair, category `abstract-algebra`.
Author: Beta. Session date: Thursday, August 27, 2026.
Design sections read:
[research/plan-algebra-track-expansion.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion.md:1388)
and the RT reconciliation at
[research/plan-algebra-track-expansion.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion.md:2651).

Artifacts owned by this batch:
`research/frontier-21-batch-5.pages.json`,
`research/frontier-21-batch-5.coverage.json`,
and this file.

---

## 1. Shape and split check

- `the-group-algebra-and-representations` (A): **24 items**.
- `the-group-algebra-and-representations-examples` (B): **11 items**.

The A page is well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The scaffold follows the design's two-stage route rather than drifting into RT-2. It starts with the arbitrary-commutative-ring interface `def-group-ring`, `def-g-module-over-a-commutative-ring`, `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, and `thm-group-actions-and-group-ring-modules-correspond`, because those exact seams are reserved downstream for group theory and HA-12.
- The page introduces general `R`-linear `G`-modules first, then the finite-dimensional field-valued homomorphism definition `rho:G -> GL(V)`, and then proves the group-ring dictionary. This keeps the arbitrary-ring interface available without losing the representation language the design wanted on RT-1 itself.
- Schur is split into the ordinary representation-language form and the scalar-endomorphism form over a splitting field. The algebraically closed case is retained only as a corollary, not as the page's standing hypothesis.
- The finite-abelian branch is built from the split Schur conclusion and ends with the degree-one representation group. The page stops before Maschke, characters, orthogonality, and Wedderburn.
- The B page carries the design's named small examples and the four intended false statements, with the nonsplitting-field Schur witness made explicit via the real irreducible of `C_3`.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch requires recording drift and then following `research/plan-spec.json`.

### Finding 1 — the order differs

The RT-1 design block still says:

- A page order `139`
- B page order `140`

The live run spec and the batch manifest on disk say:

- A page order `143`
- B page order `144`

I kept the spec orders `143/144` exactly as instructed. I did **not** rewrite the plan or the design text inside this batch.

### Finding 2 — prerequisites agree

The design's `requires` list for RT-1 matches the live spec exactly:

- `chain-conditions-and-semisimple-modules`
- `the-fundamental-theorem-of-algebra`
- `sylow-theorems-and-nilpotent-groups`
- `matrices-and-the-matrix-of-a-linear-map`

So the only drift I found for this page is the stale order.

---

## 3. Source stack and support

Only the A page needs the harvest ledger; the B page is a leaf companion.

### Source list

- Peter Webb, *A Course in Finite Group Representation Theory*:
  `https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf`
- Pavel Etingof et al., *Introduction to Representation Theory*:
  `https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf`

Both URLs were opened through the web reader on Thursday, August 27, 2026.

### What these support in the scaffold

- Webb is the controlling source. It carries the arbitrary-ring `G`-module / group-ring dictionary, the regular and permutation constructions, the augmentation-ideal interface, the split-field convention `End_{kG}(S)=k`, the Brauer warning, the degree-one representation theorem, and the nonsplitting-field counterexamples the design explicitly wanted checked.
- Etingof is the independent textbook cross-check for the homomorphism definition of representation, the algebraically closed Schur corollary, the commutative-algebra one-dimensionality engine, and the small worked examples on finite abelian groups, `S_3`, and `Q_8`.

### Important conventions fixed from the sources

- **General module action first, then the field-valued homomorphism form.** RT-1 first records `R`-linear `G`-modules, then defines finite-dimensional representations as `rho:G -> GL(V)` over a field, and then proves the `R[G]`-module dictionary. This preserves the design's arbitrary-ring seam without hiding the homomorphism viewpoint.
- **Left modules only.** The dictionary item uses left `k[G]`-modules. No right-module convention is smuggled in on this page.
- **Use `k[G]`, not `kG`, in item titles.** The notes record Webb's notation, but the scaffold follows the library's bracketed group-algebra style.
- **Splitting field, not algebraically closed, is the page's real hypothesis.** The source-backed definition is the Webb criterion: every irreducible has scalar endomorphism ring.
- **Brauer's cyclotomic criterion is recorded only as a remark.** The scaffold does not pretend that "`mu_e subseteq k` implies splitting field" is proved locally; the notes make that non-proof explicit.
- **Maschke's counterexample stays off RT-1.** The design explicitly reserves the invariant-complement failure for RT-2, so the harvest defers it there instead of duplicating it now.

---

## 4. Local scaffold choices that matter later

- I kept the stable ids `def-group-ring`, `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, and `thm-group-actions-and-group-ring-modules-correspond` exactly as the RT reconciliation demands. Later pages should cite these ids rather than minting parallel group-ring or augmentation interfaces.
- `cor-schurs-lemma-for-irreducible-representations` is a representation-language specialization of the published module result `thm-schurs-lemma-for-modules`; I did not duplicate the module theorem itself.
- The split-field scalar-endomorphism statement is kept separate from the algebraically closed corollary. This preserves the design's warning that the two statements have different visible hypotheses, even when their proofs are short.
- The finite-abelian theorem is stated over a **splitting field** and not over an algebraically closed field. The algebraically closed case is available by the preceding corollary, but is not the scaffold's main contract.
- The cyclic-group example uses the algebraic roots-of-unity route through `x^n-1`, splitting, and separability. I did **not** route it through the later trigonometric `e^{2\\pi i/n}` page, because the design explicitly forbids spending that dependency here.
- The real `C_3` example is explicit, not merely cited in prose. That closes the design's check that the false statement "Schur's lemma (b) holds over any field" really has an affordable witness below RT-1.
- No load-bearing forward references were added. RT-1 only defines `Res^G_H`; induction, Frobenius reciprocity, and Mackey remain on RT-4.

---

## 5. Known limits and downstream caution

- This page does **not** prove Maschke's theorem, complete reducibility, isotypic decomposition, Wedderburn decomposition of `k[G]`, the sum-of-squares formula, class-sum descriptions of the center, or any character-theoretic result. All of that stays on RT-2 or RT-3.
- The page defines splitting fields for finite groups but does **not** prove that every finite group admits one over a chosen base field, and it does **not** prove Brauer's roots-of-unity criterion.
- The page-level `requires` still include `the-fundamental-theorem-of-algebra` because the B page genuinely uses `\mathbb C`-based root-of-unity examples. The A-page theory itself is no longer logically pinned above FTA after the RT reconciliation, and the notes keep that distinction visible.
- The augmentation-ideal item is intentionally shallow here: only the augmentation map and its kernel are defined. The `I_G/I_G^2` and quotient-kernel material was harvested but left out of scope because it belongs to later homological or modular pages.

---

## 6. Validator results

Commands run on Thursday, August 27, 2026:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs research/frontier-21-batch-*.pages.json --manifest-only`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-5.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-5.coverage.json --out /tmp/frontier-21-batch-5-url-liveness.json --recover --fail-on-dead`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`
- `content-policy --manifest-only`:
  `content-policy: 365 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan`:
  pass, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`

Source-networking results:

- `source-fetch-check --stamp` failed on both hosts:

  ```text
  ERROR fetch-check-dead: the-group-algebra-and-representations: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf — EAI_AGAIN
  ERROR fetch-check-dead: the-group-algebra-and-representations: https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf — EAI_AGAIN
  source-fetch-check: 0/2 source(s) fetch-verified (0 newly stamped), 2 FAILED
  ```

- `url-sweep` failed for the same runner-local DNS reason:

  ```text
  url-sweep: 0/2 live; 2 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-21-batch-5-url-liveness.json
  FAIL 0 https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf — curl: (6) Could not resolve host: ocw.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

Current blocker:

- The scaffold and harvest are structurally clean.
- The coverage, manifest, and plan-shape gates are clean.
- Both recorded URLs were nevertheless opened successfully through the web reader on Thursday, August 27, 2026, so the present failure is runner-local DNS rather than evidence that either source is mathematically unread or dead.
- I therefore left the live source records intact and recorded the transport failure honestly instead of fabricating `fetch_verified` stamps or swapping in different treatments without need.

## Step-3 fix pass

- `Finding id`: none for batch `5`.
- `Disposition`: no scaffold repair was applied to `research/frontier-21-batch-5.pages.json` or `research/frontier-21-batch-5.coverage.json`; Alpha group `a` marks `the-group-algebra-and-representations` sufficient and lists no batch-5 finding row in `research/frontier-21-alpha-a-step3-scaffold-review.md`.
- `Evidence`: on Thursday, August 27, 2026, `node tools/coverage-checklist.mjs research/frontier-21-batch-5.coverage.json --require-destination` reported `1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`; `node tools/content-policy.mjs research/frontier-21-batch-*.pages.json --manifest-only` reported `432 scoped item(s), 0 error(s), 0 warning(s)`; `node tools/validate-plan.mjs research/plan-spec.json` ended `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.` I also re-opened the recorded Webb and Etingof PDF URLs through the web reader on Thursday, August 27, 2026, confirming that both source records remain live despite the runner-local DNS failure noted above.
- `Changed scaffold record`: `research/frontier-21-batch-5.notes.md` appended this Step-3 fix-pass record; manifest and coverage unchanged.

## Step-5 authoring

- `Date`: Thursday, August 27, 2026.
- `Authored artifacts`:
  `items/`: `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`, `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, `cor-dimension-of-a-finite-group-algebra`, `thm-group-ring-is-commutative-iff-the-group-is-abelian`, `def-g-module-over-a-commutative-ring`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-subrepresentation-and-irreducible-representation`, `def-intertwiner-equivalent-and-faithful-representations`, `thm-group-actions-and-group-ring-modules-correspond`, `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity`, `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra`, `def-trivial-regular-and-permutation-representations`, `def-sign-representation-and-restriction-of-a-representation`, `thm-regular-representation-is-faithful`, `thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation`, `cor-irreducible-representations-have-degree-at-most-the-group-order`, `def-splitting-field-for-a-finite-group`, `rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here`, `cor-schurs-lemma-for-irreducible-representations`, `cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`, `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`, `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group`, `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters`, `ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign`, `ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible`, `ex-the-permutation-representation-on-left-cosets-g-mod-h`, `ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group`, `ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication`, `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c`, `fs-every-representation-is-faithful`, `fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field`, `fs-every-degree-one-representation-is-trivial`, `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars`.
  `library/abstract-algebra/`: `the-group-algebra-and-representations.md`, `the-group-algebra-and-representations-examples.md`.
  `research/`: created `frontier-21-batch-5.proof-contracts.json`.
- `Provenance rationale`: the source-backed definitions and textbook-named statements were tagged `literature-derived` or `ai-altered` according to how closely the local wording follows Webb/Etingof; all newly written local proofs and verifications are tagged `ai-generated`; `rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here` is the batch's one recorded-not-proved remark and therefore carries `proved_here: false`, `provenance.proof: not-supplied`, and the required `external_dependency` record. I did not mark any statement `ai-generated`, because several RT-1 items are intended downstream dependency targets.
- `Mathematical scope kept`: no planned item was dropped or split, but three statement-level claims were narrowed during authoring after the independent audit exposed overstatements. `thm-group-actions-and-group-ring-modules-correspond` now states the correct compatibility condition with the given `R`-module structure; `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group` now classifies **equivalence classes** of degree-one representations rather than literal one-dimensional realizations on arbitrary lines; and `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` now records the resulting classification **up to equivalence**. The arbitrary-commutative-ring dictionary, the split-field/algebraically-closed Schur separation, the algebraic root-of-unity route for cyclic complex characters, and the explicit real `C_3` nonsplitting-field witness all remain in scope.
- `Authoring-side dependency and statement repairs`: the final proof text needed more than the initial scaffold summary recorded, and the independent `gpt-5.6-sol` read caught the places where the first pass had overstated or underdeclared. The repaired item frontmatter and prose now: add the compatibility theorem and central-scalar seam to the group-action/module dictionary; cite `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity` in the representation-language Schur corollary; classify degree-one representations and cyclic complex irreducibles only up to equivalence; add the ring-homomorphism / kernel-is-an-ideal support to the augmentation definition; add the group-ring structure dependency to the regular representation definition; make the zero intertwiner explicit in `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra`; quantify the coefficient field in the coset permutation example; and fix the splitting-field remark that had reversed the logical strength relation with Brauer's criterion.
- `Canonical precheck repairs applied`: four A-page proofs and two B-page proofs initially passed only after the checker's phase-order auto-repair. I adopted the canonical numbering and reran precheck until the stored text itself passed. No claim was altered in those repairs; only proof-step stratification changed.
- `Proof-contract status`: `research/frontier-21-batch-5.proof-contracts.json` now scopes all 25 proof-bearing ids. `node tools/regen-contract-entries.mjs research/frontier-21-batch-5.proof-contracts.json ...25 ids...` regenerated citations and derivations from the on-disk items. `node tools/proof-contract.mjs research/frontier-21-batch-5.proof-contracts.json --strict` reported `0 error(s), 0 warning(s), 25/25 item(s) checked`. `node tools/boundary-audit.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-contradicted --fail-on-template` found no template clusters and no contradicted dispositions after the final audit-driven boundary repairs. `node tools/citation-fidelity.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-missing-quote` reported `80 citation(s) over 25 authored item(s)` with no missing quotes and no widening candidates.
- `Independent audit`: the repository-required `gpt-5.6-sol` audit at `xhigh` reasoning did not come back clean on the first authored state. It reported ten concrete defects across statement strength, compatibility hypotheses, missing dependencies, and boundary dispositions. I repaired all ten on disk, reran the scoped gates, and then asked the same audit thread to recheck only its earlier findings against the current bytes. Its follow-up result was: `No previously reported findings remain live. All ten were repaired on disk, including the dependency, hypothesis, equivalence-class, citation, field-quantifier, proof, and boundary-contract issues.`
- `Required validators run`:
  `node tools/tsx-run.mjs tools/precheck.mts` on all 35 batch item files after a scoped `reflow.mts` pass: `25 checked, 0 failing — all clean`.
  `node tools/validate-plan.mjs research/plan-spec.json`: pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.` The usual repository-wide `redundant-prereq` advisories remained non-fatal and are not batch-5-specific.
  `node tools/content-policy.mjs research/frontier-21-batch-5.pages.json`: `content-policy: 35 scoped item(s), 0 error(s), 0 warning(s)`.
- `Extra local checks`: `git diff --check` was clean on the authored files. A whole-repo `node tools/depcheck.mjs --quiet` run was also attempted on Thursday, August 27, 2026; it failed for pre-existing out-of-scope repository issues, including missing spectral-theorem items on unrelated linear-algebra pages and long-standing non-batch warnings, so I do not treat that failure as a batch-5 blocker or a batch-5 pass receipt.
- `Narrowed/dropped claims`: narrowed, none dropped. The narrowed claims are exactly the three listed in `Mathematical scope kept`: the group-ring dictionary now requires compatibility with the given `R`-module structure, the degree-one classification is by equivalence classes, and the cyclic-group classification is up to equivalence.
- `Blockers`: no batch-local blocker remains in the authored content, page files, or proof-contract artifact. The only still-open issue in these notes is the earlier runner-local DNS failure for `source-fetch-check` / `url-sweep`, which affected the scaffold-source transport check rather than the mathematical authoring.
