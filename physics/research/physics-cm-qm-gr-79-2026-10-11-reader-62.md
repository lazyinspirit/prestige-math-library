# Step 3a reader report — batch 62

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: `qm-many-body-and-equilibrium-models` and its examples companion.

## Opened inventory

Pages:

- `library/non-relativistic-quantum-mechanics/qm-many-body-and-equilibrium-models.md` — A page.
- `library/non-relativistic-quantum-mechanics/qm-many-body-and-equilibrium-models-examples.md` — examples companion (B page).

All 22 items in the batch manifest were opened:

- A page: `lem-nrqm-many-body-one-body-reduction-trace-law`, `lem-nrqm-many-body-two-level-thermal-formulas`, `lem-nrqm-many-body-cc-bounded-spatial-realization`, `lem-nrqm-many-body-finite-spin-product-identification`, `lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion`, `lem-nrqm-many-body-spectral-mean-and-defined-trace-product`, `def-nrqm-many-body-framework-declared-fixed-n-model`, `def-nrqm-many-body-framework-one-body-reduced-operator`, `def-nrqm-many-body-framework-entropy-and-free-energy`, `post-nrqm-many-body-canonical-equilibrium-ensemble`, `pthm-nrqm-many-body-noninteracting-sector-diagonalization`, `pthm-nrqm-many-body-one-body-readout-law`, `pthm-nrqm-many-body-exchange-energy-splitting`, `pthm-nrqm-many-body-thermal-equilibrium-characterization`, `pthm-nrqm-many-body-thermal-occupation-predictions`, `pthm-nrqm-many-body-unitary-evolution-preserves-entropy`, `rem-nrqm-many-body-scope-and-empirical-status`.
- Examples companion: `ex-nrqm-many-body-two-site-bond-thermal-ensemble`, `ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble`, `ex-nrqm-many-body-gas-statistics-dilute-limits`, `texp-nrqm-many-body-two-site-no-thermalization`, `rem-nrqm-many-body-examples-scope-limits`.

I inspected the exact statements and the proof passages used by all 93 distinct direct item dependencies (56 published mathematical suppliers and 37 in-run draft suppliers), including the batch 35 composite-space and trace suppliers, batch 41 Fock/equilibrium suppliers, batches 43–48 framework/observable/dynamics/kinematics suppliers, and batch 57 occupation suppliers. I also opened the bounded fixed-$N$ kinetic theorem and three-dimensional Hardy lemma used through the Coulomb supplier. The relevant sources were read against the current item text; author notes and proof contracts were navigation evidence only.

## Repairs

1. In `ex-nrqm-many-body-gas-statistics-dilute-limits`, the grand-canonical introduction named $q=e^{-\beta(\varepsilon-\mu)}$ without restricting the Bose formula to $q<1$. I now state that the Bose formulas apply only for $\mu<\varepsilon$, while the Fermi formulas apply for every real $\mu$. Proof step 1.1 gives the separate domains and records the signed Fermi correction as negative, with its absolute value bounded by the displayed remainder. This follows directly from the current supplier statements in `thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas` clauses (b)–(c). The contract's step 1.1 derivation and zero/one/endpoint boundary evidence were updated in `research/physics-cm-qm-gr-79-2026-10-11-batch-62.proof-contracts.json`. The item had no `verification.judge` record.

2. In `rem-nrqm-many-body-examples-scope-limits`, I replaced “finite-dimensional idealizations” with “finite-mode or countable-mode idealizations.” Its gas-statistics example includes countably infinite energy lists in clause (c), so the previous characterization was too narrow.

Validation after the final item edits: `reflow.mts` reported both items unchanged; `precheck.mts` passed the gas example and reported zero proof-bearing checks for the proof-free remark; one batched `proof-layout.mjs` invocation covered both changed paths and reported 2 items, 4 steps, 0 defects.

## Defects not repaired

- Page `qm-many-body-and-equilibrium-models-examples`, body lines 42–43, says every number is an exact model value in a finite-dimensional idealization. The assigned gas-statistics example clause (c) considers countably infinitely many modes and their product partition sums. This B-page prose is outside reader edit scope. The exact finding is in the findings JSON.
- In-run supplier `thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas`, proof step 1.2 (current raw SHA-256 `0f6fd79f112c4c80ada8dc0353a5c92a914f57e3b7b2558733565d9c68898c49`), states that both error terms are positive immediately after giving the Fermi identity $q/(1+q)-q=-q^2/(1+q)$. The fermionic signed correction is negative for every $q>0$. The assigned consumer `ex-nrqm-many-body-gas-statistics-dilute-limits` uses the identity; its repaired step now states the sign correctly. The supplier belongs to batch 41 and was not edited.

## Page verdicts and blocker

- `qm-many-body-and-equilibrium-models`: no page-level defect found. Its summary matches the conditional mathematical results and declared Coulomb/model scope of the assigned A-page items.
- `qm-many-body-and-equilibrium-models-examples`: defect remains in the page summary at lines 42–43, as described above. The assigned scope remark item was repaired; page prose was not.
- Blocker: none.

## Coverage note

The assigned pages and all assigned items were opened. Some assigned consumers were initially opened before a later-in-run occupation supplier; after opening that supplier, I checked the dependent formulas against its current statement. I therefore do not claim strict topological first-read order. I inspected the direct dependency statements and relevant proof passages, but did not independently audit every proof in their full transitive dependency closure or re-fetch the cited external textbook PDFs. No experimental measurement or empirical premise is used by this batch.
