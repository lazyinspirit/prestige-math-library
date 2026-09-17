# Step 1 notes — `phase-2-remaining-27`, Batch 3

## Scope and outcome

Role `beta` owns exactly the two dispatched A/B pairs. The completed scaffold contains 52 items in prerequisite order:

- `banach-space-differential-calculus-and-banach-manifolds`: 18 A items; its examples page: 5 B items.
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`: 21 A items; its examples page: 8 B items.

All 52 owned items have current `ready` decisions. No owned item is escalated. Eight unchanged current receipts were preserved; 44 stale receipts were re-recorded after dependency or strategy changes, in manifest order, using `tools/step1-decisions.mjs record` and the exact current dependency arrays. This is Step 1 readiness only; owner/operator reconciliation and Step 3 mathematical review remain independent gates.

After the independent trace-definition audit, the canonical trace theorem and its eight transitive consumers were recertified again in dependency order. The refreshed IDs are `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-cyclicity-of-the-trace`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, `ex-diagonal-schatten-class-criteria-on-ell-two`, `ex-rank-one-operator-adjoint-norm-and-trace`, `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`, `cex-compact-does-not-imply-hilbert-schmidt`, `cex-hilbert-schmidt-does-not-imply-trace-class`, and `cex-trace-of-products-is-not-cyclic-without-summability`. Their current receipts now explicitly certify the representation-independent trace route; no escalation was overwritten.

## Controlling design and plan conflicts

The run-specific owner direction was read first and is binding. For the Banach-calculus pair, `research/plan-differential-topology-track.md` §12.2 (the `FA-15a addition` beginning at line 2056) controls the detailed inventory, conventions, warnings, and proof route. `research/plan-functional-analysis-track.md` §14.5A (the order/requirement row at lines 2955–2956 and its later ownership note) controls placement and confirms functional-analysis ownership. These texts are complementary rather than competing: the differential-topology plan supplies the full mathematical contract, while the functional-analysis amendment supplies the current placement and page prerequisites.

For the compact self-adjoint/trace-class pair, the binding owner direction makes `research/plan-functional-analysis-track.md` §§14.4–14.5 controlling. The complete FA-16 section beginning at line 1231 was also read as dispatched, but its stale conflicts were resolved in favor of the current `research/plan-spec.json` and the later binding amendment:

- The older FA-16 text gives a broad shorthand requirement on FA-13–FA-15, MT-11, MT-14, and the square-kernel pair. The current plan gives exactly `compact-operators-and-riesz-schauder-theory` and `square-integrable-kernels-and-hilbert-schmidt-compactness`; the manifest uses exactly those two page requirements. Lower-level dependencies on earlier Hilbert, integration, and choice results are explicit item dependencies rather than extra page requirements.
- The older display title uses “Compact self-adjoint, Hilbert–Schmidt, and trace-class operators.” The current plan controls the exact title “Compact Self Adjoint Hilbert Schmidt and Trace Class Operators,” including the companion title and orders 288.077/288.078.
- Both current plan entries have empty `items` arrays. That is an unauthored-plan state, not permission to thin the design; the binding exact 21-item A and 8-item B inventories were retained.

The Banach pair has no plan/design conflict: its IDs, titles, orders 288.0761/288.0762, exact four A-page requirements, companion-only B requirement, and 18/5 inventories agree.

## Proof and dependency audit

Every declared dependency was checked against its current statement and available proof, or against its current in-run supplier scaffold when not yet published. Publication/page membership was not treated as proof evidence. Whole-run dependency analysis reports no missing IDs, forward item references, or cycles.

Material repairs made during the audit include:

- The Banach mean-value estimate now uses the exact dual-norming theorem and scalar mean-value theorem, not mere dual separation or a weaker inequality. The inverse theorem strategy includes normalization, the contraction argument, differentiability of the inverse, and higher regularity from local operator inversion.
- The manifold definition explicitly imports topology, Hausdorffness, second countability, and homeomorphisms. The vector-bundle section defines the vertical derivative and proves trivialization independence before transversality consumes it. The `c_0` counterexample identifies the tangent space by curves/difference quotients before applying the uncomplemented-subspace obstruction.
- The self-adjoint norm lemma has an exact polarization/rescaling proof. The compact spectral theorem distinguishes the real and complex spectrum statements, identifies the support and kernel, imports unconditional Fourier expansion, and constructs the resolvent directly off zero and the eigenvalue set; this avoids an undeclared closed-range or spectral result.
- Owner recertification made every inherited choice assumption visible in the affected statement and dependency list. It also repaired the finite-rank SVD edge case: zero padding applies only to the numerical singular-value sequence, while the orthonormal systems are indexed exactly by the positive singular values. The nuclear-series contract now states operator-norm convergence of the operator series unambiguously.
- The trace theorem now constructs the trace before comparing ambient bases. For two arbitrary nuclear representations it takes the closed span of the union of their countable input and output supports, explicitly supplies that subspace with a dense sequence of finite rational-complex combinations (including the zero/finite padding cases), and applies the earlier separable-Hilbert basis theorem there. Parseval and an absolutely convergent double sum identify both nuclear scalar sums with the diagonal sum on this countable-support subspace. Their common value defines `tr(T)` even when the ambient nonseparable Hilbert space has no supplied Hilbert basis; a second Parseval calculation proves agreement with every ambient basis that is supplied. The nuclear infimum and concatenation of two supplied representations give the norm bound and linearity without a global choice of representations.
- The Volterra example proves the factorial bound on iterates, excludes all nonzero eigenvalues, and then uses the declared Riesz–Schauder spectrum theorem to conclude quasinilpotence.
- The Mercer example constructs a separable reproducing-kernel Hilbert space from finite metric nets, imports the countable-orthonormal-basis theorem, and only then applies countable Tonelli. It no longer applies Tonelli to an arbitrary uncountable basis.

The newly exposed cross-batch item edges are recorded in `research/phase-2-remaining-27-batch-3.cross-batch-dependencies.json`: the compact spectral theorem consumes `def-spectrum-and-resolvent-of-a-bounded-operator` and `thm-hilbert-space-fourier-expansion`; both the Mercer example and the repaired trace theorem consume `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`. The file has 58 verified page/item rows. `briefs/tasks/frontier-dependency-ledger.md` was refreshed and deduplicated from all run inputs before this local repair; the per-batch input now records the added trace edge for the next canonical refresh.

No defective published item is an actual prerequisite of these owned proofs, and no owned published defect was found. The global external-reference audit still reports 55 previously known published warnings outside this batch; they are unrelated consumer debt and do not block these new suppliers.

## Choice audit

Choice use is stated where it occurs and is dependency-visible. In particular, the Banach inverse/implicit and Fredholm arguments use the declared library choice interface needed by their completeness/splitting suppliers; the nonzero compact spectral decomposition uses countable choice, while adding a basis of a possibly nonseparable kernel is isolated in the eigenbasis corollary and uses full AC through Zorn. The Hilbert–Schmidt and trace results inherit their explicitly declared choice costs. The Mercer example states full AC for the imported sigma-finite kernel theorem and the local countable net choices. Choice-free statements remain separate. No owned proof depends on Recorded material as a replacement proof, and the whole-run checks found no prohibited Foundations path to `deferred-set-theory-beyond-choice`.

## Source evidence

Two independent complete treatments were inspected for each A page:

- Banach calculus/manifolds: Zuoqin Wang, *Lecture 6: Differential Calculus* (§§2.1–3.3), and Abbondandolo–Majer, *Lectures on the Morse Complex* (§2, especially PDF pp. 13–18 and 40–43, including the definitions preceding Proposition 2.17 and Theorem 2.19). Both full PDFs were fetched and inspected.
- Compact spectral/trace theory: Gerald Teschl, *Topics in Real and Functional Analysis* (§1.3 Problems 1.19–1.20; Theorems 3.5–3.7; Corollaries 3.8–3.9; Theorem 3.17; Lemma 3.19; Lemmas 3.23–3.29; Theorem 10.27), and Anthony W. Knapp, *Advanced Real Analysis* (Chapter II §§2–5, especially Proposition 2.2 and Theorem 2.3). Both complete texts were inspected.

The original Knapp clickable URL is retained as source history with `source_resolution.status: dropped`. It returned HTTP 404 on the initial attempt and five retries. The author's current complete inside-edition PDF was found, fetched, independently harvested, and recorded as the authoritative replacement. Every result formerly assigned to the failed endpoint has an explicit alternative argument and dependency list. The coverage file assigns every harvested result an included/inline, deferred-with-destination, or specific out-of-scope disposition.

## Checks run

- Batch manifest dependency normalization: 52 items, 0 errors.
- Whole-run manifest dependencies: 578 items, 0 errors.
- Whole-run manifest content policy: 578 items, 0 errors and 0 warnings.
- Coverage checklist: 2 A pages, 54 harvested results, 0 errors and 0 warnings.
- Source fetch verification: 4/5 URLs fetch-stamped; 5/5 source decisions resolved, including one documented drop.
- URL sweep: 4/4 live current URLs, 0 failures; one documented historical drop.
- Source backing: 31 authored proof-bearing results, all backed by an openable source or documented alternative.
- Full-run splice dry-run: batch 3 would splice 4 pages and 52 new items; no files were spliced.
- Plan validation: exit 0. It notes 481 unrelated planned pages still have empty item lists.
- Forward-reference check: exit 0; all forward references are declared, strictly forward, closed, and acyclic.
- External-reference check: exit 0; its 55 warnings are pre-existing published Recorded dependencies outside this owned batch.
- Readiness check: 52/52 owned items current, 0 owned work rows. The whole-run command exits nonzero because 18 other run pages still have empty scaffold inventories.
- Frontier dependency ledger: refreshed and deduplicated. This tool version exposes `refresh` only; it has no separate `check --strict` subcommand.

The run-local `state.json` and stored status were inspected read-only after durable adoption: the run is paused at `1-scaffold`, 10/15 scaffold batches are covered, batches 4, 5, 6, 12, and 13 remain, and nothing is in flight. A direct `node` invocation of the `.mts` entrypoint is invalid; the repository's `tools/tsx-run.mjs` wrapper is required. No engine state was edited.
