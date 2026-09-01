# frontier-28 reader-3 report

Date: 2026-09-01.
Run: `frontier-28`
Batch: `3`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `README.md`, `CLAUDE.md`, `research/frontier-28-reader.task.md`, `research/frontier-28-beta-3.task.md`, `research/frontier-28-batch-3.pages.json`, `research/frontier-28-batch-3.coverage.json`, `research/frontier-28-batch-3.proof-contracts.json`, `research/frontier-28-batch-3.notes.md`, `research/frontier-28-step6-hash-3-pre.json`, `research/plan-commutative-algebra-track.md` (CA-13), `research/plan-spec.json`, and `.autopilot/frontier-28/status.md`.
- Assigned pages: `library/commutative-algebra/inverse-limits-and-noetherian-completion.md` and `library/commutative-algebra/inverse-limits-and-noetherian-completion-examples.md`.
- Assigned A-page items: `def-filtration-and-adic-filtration`, `def-adic-topology-on-a-module`, `def-inverse-system-and-inverse-limit-of-modules`, `thm-universal-property-of-an-inverse-limit-of-modules`, `thm-inverse-limits-are-left-exact`, `def-mittag-leffler-inverse-system`, `thm-exactness-of-inverse-limits-under-mittag-leffler`, `def-separated-and-complete-filtered-module`, `def-adic-completion-of-a-module`, `thm-kernel-and-universal-property-of-adic-completion`, `prop-units-in-an-adically-complete-ring`, `thm-completion-is-exact-on-finite-modules`, `thm-completion-as-extension-of-scalars`, `cor-completion-commutes-with-finite-quotients-and-submodules`, `thm-flatness-of-noetherian-completion`, `thm-faithful-flatness-of-jacobson-adic-completion`, `thm-noetherianity-of-adic-completion`, `thm-completion-of-a-noetherian-local-ring`, `thm-finite-modules-over-complete-noetherian-rings-are-complete`, `thm-complete-nakayama-lemma`, and `thm-completion-preserves-dimension-and-hilbert-samuel-data`.
- Assigned B-page items: `ex-p-adic-integers-as-an-inverse-limit`, `ex-adic-completion-of-the-integers`, `ex-equivalent-adic-filtrations`, `ex-completion-not-exact-without-finiteness`, `ex-completion-of-a-domain-not-a-domain`, `ex-iterated-adic-completions`, and `ex-semilocal-adic-completion`.
- Dependency items opened for verification: `def-product-of-an-ideal-and-a-module`, `def-module-homomorphism-kernel-image-and-cokernel`, `def-noetherian-ring`, `thm-artin-rees-lemma`, `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`, `thm-jacobson-radical-unit-characterisation`, `thm-universal-property-of-module-tensor-products`, `thm-right-exactness-of-tensor-products`, `thm-unit-isomorphisms-for-module-tensor-products`, `thm-flatness-criteria-by-injections-and-ideals`, `def-flat-and-faithfully-flat-modules-and-ring-maps`, `thm-faithfully-flat-ring-map-characterisations`, `thm-noetherian-ring-quotients-and-localisations`, `thm-noetherian-ring-ideal-characterisations`, `cor-finite-variable-polynomial-ring-noetherian`, `def-local-ring`, `thm-krull-intersection-theorem`, `thm-support-and-annihilator-of-a-finite-module`, `def-system-of-parameters-and-parameter-ideal`, `def-hilbert-samuel-multiplicity`, `thm-hilbert-samuel-dimension-theorem`, and `thm-existence-of-hilbert-samuel-polynomial`.
- Primary-source passage re-opened to resolve the iterated-completion claim: Stacks tag `00M9`, especially Definition 10.96.2 and Lemma 10.96.3 on when a completion is itself complete.

## Design/spec check

- The live spec and the batch manifest agree on the owned pair, companion page, and order `111.025`.
- The CA-13 design block still names a wider prerequisite set than the live spec's page-level `requires` field. I kept the live spec unchanged and relied on the explicit item-level dependencies already recorded in the batch manifest and notes.

## Confirmed defects and edits

1. Repaired `items/thm-completion-is-exact-on-finite-modules.md`.
   Step 2.1 justified the Mittag-Leffler condition by an incorrect image computation. The actual transition maps on `M'/(M' \cap I^nM)` are already surjective, so I replaced the broken Artin-Rees image argument with the direct surjectivity argument and left Artin-Rees only where the proof really uses it, namely the identification of the induced filtration with the intrinsic `I`-adic one.
2. Repaired `items/thm-completion-as-extension-of-scalars.md`.
   Step 3.1 was circular: it used the theorem for the kernel module `K` while still proving the theorem for arbitrary finite modules. I rewrote the proof via a finite free presentation `F_1 -> F_0 -> M -> 0`, used right exactness and completion exactness on those rows, and concluded from the cokernels of isomorphic maps.
3. Repaired `items/cor-completion-commutes-with-finite-quotients-and-submodules.md`.
   Step 2.1 called the `I`-adic filtration on `M/I^nM` "discrete", which is false unless `IM=0`. I replaced that with the correct reason: the filtration terminates at `0` after stage `n`, so the completion is canonically the module itself.
4. Repaired `items/thm-completion-of-a-noetherian-local-ring.md`.
   The proof cited `prop-units-in-an-adically-complete-ring` without declaring it as a dependency, and it used completeness of `\widehat R` without showing it. I added the missing dependency, inserted the quotient-limit argument showing `\widehat R` is complete for the `\mathfrak m \widehat R`-adic topology, and renumbered the proof into the precheck-clean canonical shape.
5. Repaired `items/thm-completion-preserves-dimension-and-hilbert-samuel-data.md`.
   Parts 2 and 3 silently included the zero module even though the opened Hilbert-Samuel degree theorem only applies to nonzero finite modules and the current multiplicity definition does not assign a degree to the zero polynomial. I restricted the statement to `M \neq 0` and made the multiplicity and dimension dependencies explicit in the facts.
6. Repaired `items/ex-iterated-adic-completions.md`.
   The old item claimed an actual iterated-completion collapse from cofinality alone. After reopening Stacks 10.96.2-10.96.3, that claim was not supportable in the page's present scope: completion need not already be complete for arbitrary ideals. I narrowed the example to the provable one-step comparison `\widehat M^I \cong \widehat M^{I^r} \cong \widehat M^{I+I^r}` and updated the title and dependency accordingly.
7. Updated `research/frontier-28-batch-3.proof-contracts.json`.
   I regenerated the six changed contract entries: `thm-completion-is-exact-on-finite-modules`, `thm-completion-as-extension-of-scalars`, `cor-completion-commutes-with-finite-quotients-and-submodules`, `thm-completion-of-a-noetherian-local-ring`, `thm-completion-preserves-dimension-and-hilbert-samuel-data`, and `ex-iterated-adic-completions`.

## Per-page verdicts

- `inverse-limits-and-noetherian-completion`: pass after the repairs above. The current A-page prose, theorem statements, proofs, and contract entries match the opened dependencies.
- `inverse-limits-and-noetherian-completion-examples`: non-pass. The repaired example scope is now correct, but the B-page body still overstates it by claiming an iterated-completion collapse from cofinality alone.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-completion-is-exact-on-finite-modules.md items/thm-completion-as-extension-of-scalars.md items/cor-completion-commutes-with-finite-quotients-and-submodules.md items/thm-completion-of-a-noetherian-local-ring.md items/thm-completion-preserves-dimension-and-hilbert-samuel-data.md items/ex-iterated-adic-completions.md`
  Result: all six touched items reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-completion-is-exact-on-finite-modules.md items/thm-completion-as-extension-of-scalars.md items/cor-completion-commutes-with-finite-quotients-and-submodules.md items/thm-completion-of-a-noetherian-local-ring.md items/thm-completion-preserves-dimension-and-hilbert-samuel-data.md items/ex-iterated-adic-completions.md`
  Result: one initial canonical-numbering repair suggestion on `thm-completion-of-a-noetherian-local-ring`; after adopting it, all six items passed.
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-3.proof-contracts.json thm-completion-is-exact-on-finite-modules thm-completion-as-extension-of-scalars cor-completion-commutes-with-finite-quotients-and-submodules thm-completion-of-a-noetherian-local-ring thm-completion-preserves-dimension-and-hilbert-samuel-data ex-iterated-adic-completions`
  Result: `regenerated 6, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts` over all 22 proof-bearing batch-3 items
  Result: `22 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-28-batch-3.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: three empty-axis candidates on `thm-universal-property-of-an-inverse-limit-of-modules`, `thm-exactness-of-inverse-limits-under-mittag-leffler`, and `thm-kernel-and-universal-property-of-adic-completion`; after manual reread, these are detector false positives triggered by indexed families rather than genuine empty-family defects.
- `node tools/content-policy.mjs research/frontier-28-batch-3.pages.json`
  Result: `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-completion-is-exact-on-finite-modules.md items/thm-completion-as-extension-of-scalars.md items/cor-completion-commutes-with-finite-quotients-and-submodules.md items/thm-completion-of-a-noetherian-local-ring.md items/thm-completion-preserves-dimension-and-hilbert-samuel-data.md items/ex-iterated-adic-completions.md research/frontier-28-batch-3.proof-contracts.json`
  Result: clean.

## Uneditable defects

- `library/commutative-algebra/inverse-limits-and-noetherian-completion-examples.md:22-25` still says that an iterated completion collapses merely because the two adic filtrations are cofinal. After reopening Stacks 10.96.2-10.96.3 and repairing `ex-iterated-adic-completions`, that summary is too strong: cofinality gives the one-step comparison between `I`, `I^r`, and `I+I^r`, but it does not by itself justify an actual second completion collapse.

## Blockers

- None.
