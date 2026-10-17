# Batch 29 authoring notes

Run: physics-remaining-80-2026-10-17  
Role: beta  
Pages: csm-full-phase-local-equivalence (A, order 493) and csm-full-phase-local-equivalence-examples (B, order 494)

## Plan and design reconciliation

The complete assigned design section in research/plan-classical-statistical-mechanics-track.md reserves the original 11 A items and 2 B items. Its page-level prerequisites list csm-gibbs-lattice and csm-phase-ensembles. Current research/plan-spec.json controls the direct page requirements and lists csm-gibbs-lattice, td-math-interacting-ensemble-geometry, minimax-lower-bounds-and-information-theoretic-methods, and stationary-markov-chains-and-ergodic-limits. The page manifest retains that exact list. The old extra csm-phase-ensembles page is present as a transitive requirement through csm-gibbs-lattice; it is not added as an extra direct edge.

The current library has csm-gibbs-lattice as a draft page and td-math-interacting-ensemble-geometry as published. Current page carriers for minimax-lower-bounds-and-information-theoretic-methods and stationary-markov-chains-and-ergodic-limits were not found. This is recorded as a page-level blocker; the consuming proofs were completed from the exact current math item suppliers and do not claim to use missing page proofs. Item-level Step 1 readiness must not be read as A-page readiness.

The older research inventory used aliases such as supplier-thermo-L21, supplier-thermo-M27, supplier-thermo-L23, and supplier-thermo-M17. They are not treated as production carriers. The actual current sources are named directly in item deps, Facts & Assumptions and proof contracts. In particular, the locally proved conditional chain/disjoint-block result uses the current published TD entropy chain-rule item; the exact current imported Pinsker theorem is used for the event-supremum convention. The full marked model uses the current batch 26 state definition and batch 27 interaction definition, and the consuming text records their actual draft status.

## Batch 26 and 27 interfaces

The current batch 26 carriers def-csm-phase-space-reference, def-csm-statistical-state-observable, post-csm-counting-and-physical-observables, post-csm-canonical-preparation, and post-csm-grand-preparation were inspected in full at their current statements. Their Step 1 records are ready and unchanged. The statistical-state definition is a draft definition with no proof obligation; its exact interface supplies measurable probabilities, densities and observables. Its transitive phase-space reference is separately recorded. The three preparation/counting carriers are draft adopted postulates, not derived claims. The physical postulate in this batch retains those as explicit assumptions.

The current batch 27 item def-csm-stable-superstable-continuum-interaction was inspected in full. It is a draft mathematical definition with no proof obligation and no Step 1 record yet. It states the even Borel pair potential, stability, cell superstability, lower regularity, explicit decreasing integrable tail and exact periodic/free conventions as separate hypotheses. These exact hypotheses are carried into the model and theorem; no stronger interaction property is inferred from the definition label.

The prior source inventory named a research-only supplier-nrcm-E7 dependency for the positional reference. The current phase-space carrier has no such dependency; it lists actual mathematical suppliers and its local state-definition consumer reads that current interface. The old alias is not included in the new dependency graph.

## Item levels and construction

The batch dependency manifest says batch 29 is level 2 and requires batch 27. Item levels were recomputed from current run edges: level 0 has no in-run suppliers; levels then increase by one over the maximum in-run supplier. Three necessary local A-page items extend the reserved inventory: `lem-csm-gaussian-mark-moments`, `def-csm-marked-periodic-continuation`, and `lem-csm-gaussian-marked-lift-existence`. The definition specifies the marked configuration space, one momentum mark per spatial point, marked-count sigma-algebra, local restriction, and finite periodic continuation; the lift lemma uses it and is therefore level 4. All 16 batch-29 item levels match the full current run graph and are recorded in batch-29.pages.json.

The two examples are deterministic finite Bernoulli countermodels. They are mathematical examples, not experimental observations. The second example retains its dependency on the conditional KL chain and explicitly computes its one-coordinate divergence.

## Source record

The complete relevant texts of Georgii (1994), Georgii–Zessin (1993), Ruelle (1970), Tong's lecture chapter, and Arovas's course text were inspected. The full Rigollet–Hütter 168-page lecture-note PDF was retrieved, and Chapter 4 §4.2, Lemma 4.8 and its proof were inspected for an independent Pinsker treatment. Its weaker coefficient is context only; the current imported thm-pinsker supplies the exact coefficient and event-supremum convention used in this batch.

A prior retrieval of the Duchi Statistics 311 lecture-note URL returned HTTP 403. A targeted search found the full Rigollet–Hütter alternative, it was inspected, and recovery stopped after success. The failed URL is not cited as an item source. No source was dropped, and no source-resolution alternative proof waiver is claimed. Coverage preserves this history; fetch stamps and the check result are recorded after the scoped source-fetch gate.

## Current authoring status

All 16 item carriers across the A/B pair are present as draft, with 14 A items and 2 B examples. The conditional proofs, local definitions, contracts, coverage, cross-batch inputs, and item-level readiness records are complete. All 16 Step 1 records are current and marked ready; these records do not establish page readiness or independent proof acceptance.

Final scoped checks passed: precheck (14 applicable items, 0 failures); proof layout (18 assigned item/page files, 35 steps, 0 defects); strict proof contracts (14/14 entries, 0 errors or warnings); rendercheck (18 files, no math or frontmatter defects); content policy (16 items, 0 errors or warnings); focused dependency and cycle checks (16 selected items; prerequisite context of 1,448 items and 393 pages, pass); coverage checklist (2 pages, 49 harvested records, 0 errors or warnings); and source-fetch check (10/10 cited sources verified, 0 newly stamped because prior verified stamps were reused). All 16 item-level Step 1 records are current.

The full-run item dependency check remains blocked by other active batches: the final check reports 84 errors overall (54 empty inventories and 30 dependency-level mismatches), with no batch-29 item errors. The separate batch-dependency-level check reports the shared scheduling record as stale after manifest changes. That owner-managed record is outside the assigned scope and was left unchanged.

Page-level readiness remains blocked by missing carriers for the two direct requirements `minimax-lower-bounds-and-information-theoretic-methods` and `stationary-markov-chains-and-ergodic-limits`. The exact missing page requirements and their effect are recorded in coverage and cross-batch dependency evidence. The item proofs were completed conditionally using inspected current supplier interfaces; no missing page proof, experimental result, equilibration, or publication approval is claimed. A successful authoring record is not independent mathematical review or publication approval.

## Recheck during batch-29 completion

The current Arovas PDF was retrieved and its page labels inspected. In the 635-page file, printed p.192 is PDF viewer page 220; printed pp.192–198 map to viewer pp.220–226, and printed pp.205–215 map to viewer pp.233–243. Arovas locators in the batch-29 items and coverage now use those one-based viewer pages. The GZ marked-point paper was also re-extracted: its printed p.184 is viewer page 8, and §2.2's marked periodic field is on viewer page 7. The Ruelle source's printed p.131 is viewer page 5. The assigned item and coverage locators were made explicit using these viewer pages. These edits correct source locators only; the cited content and mathematical claims were unchanged.

The geometric gap lemma supplies real widths. In the positional minimizer proof, the chosen widths are now explicitly $g_n=\lceil\widetilde g(L_n)\rceil$, preserving $g_n\to\infty$ and $g_n/L_n\to0$ while making the tile spacing an integer, as needed for unit-cell indexing. The interaction comparison uses the resulting vanishing summable cell-tail and boundary-strip bounds; it does not use a rounded version of the lemma's separate $\eta$ estimate.

The bad-phase estimate also now proves the exact torus mean-count identity used for arbitrary Borel pieces: averaging a fixed exact-$N_n$ configuration over all torus translations gives $N_n|E|/V_n$ for each piece $E$. This justifies the count control on occupied tile pieces intersecting the local support.

The A-page definition `def-csm-marked-periodic-continuation` now supplies the shared infinite marked configuration and finite periodic-local restriction interfaces; the marked-lift lemma depends on this definition and proves existence and uniqueness of independent marking. Periodic continuation copies each point's momentum mark unchanged, and every bounded restriction is finite by local finiteness of the spatial projection.

In the final local-equivalence proof, integrating a bounded marked-local observable over the finite Gaussian mark product gives a bounded positional local test. `def-tdmath-local-tame-topology` supplies its local-tame status, and the continuum variational pressure theorem supplies stationarity of $P_*$. The marked-lift lemma proves that independent homogeneous marking preserves stationarity, which justifies translating an arbitrary bounded region into the finite torus representative.

The final render audit found and fixed a missing closing math delimiter in Fact [F1] of `thm-csm-total-canonical-window` (`$b'>0` is now `$b'>0$`). The full assigned render check then passed. Proof contracts were regenerated against the final supplier statements, including the updated marked-configuration definition and Gaussian moment statement; strict validation passes.
