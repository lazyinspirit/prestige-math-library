# Step 3a reader report — batch 74

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `74`

## Verdicts

- **`qftx-photon-counting` (A page): no unresolved mathematical or scope defect after the repairs below.** Its count law and correlation claims are explicitly idealized model assumptions or conditional deductions; no experimental outcome is claimed.
- **`qftx-photon-counting-examples` (B page): no unresolved defect identified.** Its one-photon example preserves the one-mode, no-background and independent-loss conditions. The page is frontmatter-only under the compact page layout; no missing summary or diagram is required.

No TikZ or tikzcd diagrams occur on either assigned page or in the five assigned items.

## Opened inventory

Assigned pages:

- `library/quantum-field-theory/qftx-photon-counting.md` — A page.
- `library/quantum-field-theory/qftx-photon-counting-examples.md` — B page.

Assigned items, read and checked:

- `lem-qftx-mode-number-pvm`
- `post-qftx-ideal-wavepacket-counting`
- `pthm-qftx-mode-g-two`
- `pthm-qftx-binomial-detector-thinning`
- `ex-qftx-single-photon-antibunching`

The 17 direct item suppliers were opened for the claims used: `def-countable-choice`, `def-projection-valued-measure`, `def-qft-fock-and-test-spaces`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-unbounded-linear-operator-domain-and-graph`, `lem-qft-fock-ccr-car`, `lem-qft-fock-one-mode-splitting`, `def-qft-framework-units`, `def-qft-photon-transverse-space`, `def-qftx-photon-helicity-bundle`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-qftx-photon-invariant-measure-isometry`, `post-qft-free-photon-model`, `def-factorial-and-falling-factorial`, `def-real-exponential-function-and-e`, `thm-geometric-series`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The page prerequisites `qftx-photon-helicity`, `qft-c01`, `qft-mf01`, and `qft-g01` were also opened. The two current-run cross-batch item suppliers, `def-qftx-photon-helicity-bundle` and `lem-qftx-photon-invariant-measure-isometry`, were checked from their current statements and proofs. Their exact spaces, normalization and map $Wf=f/\sqrt{2|\mathbf k|}$ support the selected-mode construction. The density/PVM result is used only through its Countable-Choice clauses for density decompositions and scalar probabilities; the separate full-Choice moment clause is not used. The free-photon postulate is used only for its specified positive transverse Fock model as formulation context; no local-Weyl or field-strength claim is imported.

Source texts opened at the cited passages:

- Roy J. Glauber, [“The Quantum Theory of Optical Coherence”](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529), §II, printed pp. 2530–2532, equations (2.14)–(2.18); §III, pp. 2532–2534, equations (3.1)–(3.7); and §IV, pp. 2534–2536, equations (4.8)–(4.10). These passages support the ideal absorption and normal-ordered coincidence context. They do not establish the local countable mode PVM or its operator domains.
- Daniel A. Steck, [*Quantum and Atom Optics*](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf), current hosted revision **0.16.10**, title page dated 27 June 2026. Chapter 2 §§2.6.1–2.6.2, PDF pp. 74–76; Chapter 16 §§16.1–16.4.2.2, PDF pp. 685–692; and the one-photon and binomial passages in §§16.3–16.4.1, PDF pp. 687–690, were checked. The source identifies its Gaussian-field assumptions for the classical thermal $g^{(2)}(0)=2$ calculation, gives the normal-ordered detection expressions, treats one-photon coincidence suppression, and states the monochromatic/two-mode assumptions for the binomial beam-splitter example. The local items retain stronger or different assumptions explicitly and prove their count-law calculations locally.

## Defects and repairs

1. **`lem-qftx-mode-number-pvm`, `Proof 4.1` as originally written / its use in `post-qftx-ideal-wavepacket-counting`: missing self-adjointness argument.** The original lemma proved the graph-core assertion for the diagonal factorial operator but did not prove that the diagonal operator was closed or self-adjoint. The postulate then called it the self-adjoint closure of the finite-particle operator. A direct blockwise adjoint argument closes this point. I repaired the lemma statement and proof: $M_u=N_u(N_u-I)$ is now explicitly defined on the stated weighted domain; its diagonal multiplier $n(n-1)$, exact composition domain, symmetry and adjoint domain are checked; the proof then shows $\mathcal D_{\rm fin}$ is a graph core and hence the finite-particle restriction has closure $M_u$. This strengthens the supplier interface used by the postulate. I reopened and checked the assigned consumer chain (`post-qftx-ideal-wavepacket-counting`, `pthm-qftx-mode-g-two`, `pthm-qftx-binomial-detector-thinning`, and `ex-qftx-single-photon-antibunching`); their current claims remain valid and required no further edits.

2. **Assigned-item Steck reference version labels.** The five assigned items cited the hosted URL as revision 0.16.7 (13 March 2026). The downloaded PDF at that URL identifies itself on its title page as revision 0.16.10 (27 June 2026). Its SHA-256 is `694893f57d1e700d03c2299f0f5638e6d0ae9c86f2a64c65f5bb1908b079bb25`; its first 16 hex digits match the `fetch_verified.sha256_16` recorded in the batch coverage artifact. I corrected the Steck bibliographic titles in all five assigned item files to the version actually inspected. The cited section locators and mathematical claims remain supported.

The affected proof contract was updated for the new self-adjointness and core derivations, their supplier-use rows, and the postulate’s inspected source-version evidence. No `verification.judge` record was present in the changed items. The batch coverage artifact `research/physics-non-fluid-129-2026-10-21-r2-batch-74.coverage.json` still labels the hash-matched Steck PDF as revision 0.16.7. That research artifact is outside this reader’s item/A-page write scope, so it remains an outstanding source-metadata discrepancy; it did not prevent direct source verification or require an item/page finding.

## Validation and limits

- Reflow and precheck were run for all five changed items. The final precheck results were pass for all five; reflow reported the canonical layout unchanged. The final proof-layout run reported **5 items, 13 steps, 0 defects**.
- The physical claims remain separated correctly: the detector law is an adopted ideal postulate; the coherent, number, geometric and thinning results are conditional model deductions; the example is a model calculation. No empirical observations, measurements, uncertainty estimates or statistical conclusions are presented.
- For navigation, I first opened the assigned item bodies to inventory their declared dependencies, then opened those suppliers and completed the substantive checks. Thus the literal file-opening order was not supplier-first, although the dependency checks preceded the final evaluation of consumer claims. I did not re-audit every published supplier’s own prerequisite closure. No defect in those un-reaudited closures was identified as necessary to the assigned claims.

**Blocker:** none for the assigned content review. The remaining coverage-artifact revision-label discrepancy is recorded above.
