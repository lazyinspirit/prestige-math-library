# Batch 30 Step-3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-30`; owned batch: 30.

Read the dispatched order, scope, reader report/findings, refuter artifact, pre/post hash inventories, current carriers, and exact prerequisite interfaces. All 14 touched items initially match their post-reader item hashes; eight have identical pre/post item hashes and owe contract-only review. The six item changes are identified by pre/post hashes and the reader report; no historical preimage is invented. This report records current mathematical review and the reader-described deltas, not a reconstruction of unavailable source bytes.

## Ordered review and decisions

- `def-hyperbolic-system-and-characteristic-families` — **accepted_repair**. The reader adds measurability and local integrability of f∘u, necessary because bounded subsets of an open state domain can approach a singular boundary of f. The vector test identity and L1 initial trace are now defined. C3/C2 regularity and simple real ordering agree with the exact published Ck interfaces; Bressan §1.1–1.2 and §3.2 support the conventions. Constructed jump, fan, contact and local-solver profiles have compact admissible state ranges and meet the clarified clause.

- `def-roe-linearization-and-flux` — **accepted_repair**. Diagonal continuity now accompanies A(u,u)=Df(u), real diagonalizability and exact flux-jump matching. LeVeque §14.2 equation (14.19), printed p.149 (PDF p.162), confirms the diagonal limit condition. The spectral absolute value acts as |λ| on each eigenspace, independent of the chosen diagonalization. Both actual consumers (Roe consistency and the Burgers counterexample) satisfy the added condition.

- `def-scalar-convex-entropy-admissibility` — **accepted_repair**. The current entropy pair is defined on the scalar open domain with componentwise convexity and q′=η′f′; η∘u and q∘u are required locally integrable. Integration by parts gives the stated nonnegative-test convention and jump coefficient [q]−s[η]≤0. Burgers η=u²/2,q=u³/3 meets it on R. The reader clarification makes all distributional expressions meaningful.

- `lem-smooth-simple-characteristic-eigenpairs` — **reviewed_no_defect**. Only its proof contract changed between the reader snapshots. The left/right pairing is nonzero for an algebraically simple eigenvalue; the augmented square derivative has zero kernel. The exact C1 IFT derivative formula bootstraps the C2 equation to C2 eigenpairs; finitely many real local branches exhaust the spectrum and retain their gaps. The polynomial isolation argument proves a basis, including m=1. No mathematical edit is needed.

- `lem-local-characteristic-shock-curve` — **reviewed_no_defect**. The reader changed its contract only. The integral divided-RH equation is C1 on a sufficiently small convex state ball. Its augmented derivative is invertible by the simple-eigenvalue pairing; the current C1 IFT supplies normalized v,s. Pairing the differentiated equation yields sσ=d_i/2. On a compact smaller neighborhood, Heine–Cantor makes the two first-order remainders uniform; a positive lower bound on |d_i| gives strict Lax inequalities for σd_i<0, and the other-family inequalities follow from the positive gaps. Zero strength and m=1 cause no missing case.

- `lem-rankine-hugoniot-jump-is-a-weak-solution` — **reviewed_no_defect**. Contract-only reader change; the distributional coefficient [f]−s[u] vanishes exactly under RH, and the explicit |s|t||[u]|| estimate gives the initial trace. Both directions, zero speed and equal states are sound. The added measurable/integrable weak-solution requirements hold for this finite-valued profile.

- `thm-hll-flux-is-consistent-and-conservative` — **confirmed_fatal**. Independently verified the refuter Burgers witness: u_*=1/2, assigned f_*=−1/2, while f(u_*)=1/8. The observed physical RH assertion is false. Repaired title, Statement and step 1.1 to distinguish the assigned model flux and two conservative model balances from physical RH; consistency and periodic conservation remain proved, including zero speed branches and n=1. Clawpack HLL derivation uses total wave conservation, not f_*=f(u_*). The sole outside consumer lem-pe03-hll-half-cell-riemann-averages uses the correct algebra in its proof; its F2 terminology needs an owner clarification (see consumer alert below).

- `thm-one-dimensional-ideal-gas-euler-eigenstructure` — **amended_repair**. The routed reader change was contract-only. Independent review found a false computation in step 2.2: r0 has dρ=1 and dp=du=0, so c²=γp/ρ implies dc=−c/(2ρ), not zero. Corrected that derivative and explicitly retained Dλ0 r0=0. Direct multiplication verifies the displayed Jacobian and all eigenvectors; acoustic derivatives are ±(γ+1)c/(2ρ), nonzero throughout the stated admissible domain. Statement and all consumer interfaces are unchanged.

- `thm-roe-flux-is-consistent-and-conservative` — **reviewed_no_defect**. Contract-only reader change. At equal states the dissipative term multiplies zero. For a periodic array each oriented face flux cancels once with each sign, for every scalar ν and n≥1; the supplied Roe matrices keep every evaluation in its declared domain. No entropy, positivity, CFL or stability conclusion is inferred.

- `lem-euler-acoustic-wave-pressure-response` — **accepted_repair**. The reader replaces the nonexistent step 2.2 reference with steps 1.2 and 2.1, exactly the energy/Hugoniot and mass-flux identities used in 3.1. All rarefaction, shock, Lax and contact calculations were independently checked with γ>1, positive densities/pressures and q>1. Reversibility of the energy reduction verifies the constructed shock, not merely a necessary relation. The corrected Euler contact derivative does not change its supplier fact (fixed u,p along r0).

- `lem-linearly-degenerate-characteristic-contact` — **reviewed_no_defect**. Contract-only change. Constancy of λ_i along the integral curve and the fundamental theorem of calculus prove [f]=λ_i(u0)[u]. The current jump supplier then gives the weak profile with its initial trace; equal i-speeds rule out a strict Lax shock, including zero-strength conventions.

- `lem-local-rarefaction-fan` — **reviewed_no_defect**. Contract-only change. The characteristic-speed derivative has a nonzero constant sign, so σd_i>0 orders the endpoint speeds even for negative σ. Its inverse parameter has nonzero denominator; the interior profile satisfies (Df−ξI)q′=0. Continuous fan edges have no jump measure. A compact state range gives measurability/integrability, and bounded speeds give an O(t) initial-trace estimate. Bressan §3.3 equation (3.16)–(3.17) agrees.

- `cex-roe-jump-property-does-not-imply-entropy-admissibility` — **reviewed_no_defect**. The reader enriches the already sound witness by explicitly checking diagonal continuity and equal-state consistency for the Burgers Roe matrix. This is supplier-condition audit enrichment, not a new defect: the polynomial matrix already has those properties. Stationary RH and initial trace hold, and entropy production is exactly 2/3>0. No counterexample or conclusion is changed.

- `thm-euler-star-pressure-root-and-vacuum-criterion`: risk review complete. Checked branch derivatives at p=pK, strict upper bound P, both signs and equality of Φ(0+), and IVT on a positive closed interval. No item or decision obligation.

- `lem-mixed-wave-curves-are-c1`: risk review complete. Both state and strength derivatives agree at zero; the explicit two-branch remainder argument proves joint C1. No second-order matching is needed.

- `lem-euler-pressure-solver-bracket-and-termination`: risk review complete. Verified the complete nested call/status paths, positive query domain, zero budget, exact-root branch, invariant, width contraction and final tolerance test. “Central quarter” denotes the displayed interval with quarter-width margins; the weaker 3/4 bound used in the proof is valid.

- `thm-local-small-data-riemann-solver` — **accepted_repair**. The reader fixes the IFT range/cube gap in step 2.1 by continuity of the strength map at (ū,ū). The cube is inside Q and data are shrunk until every returned vector is in it; IFT uniqueness then applies throughout that cube. Every subsequent shrinking can shrink the data again, so state and speed restrictions hold simultaneously. Current wave suppliers prove each branch and the pasted weak solution; all-zero strengths handle equal data. Uniqueness remains restricted to the ordered elementary-wave construction.

- `ex-acoustic-system-local-riemann-solution` — **reviewed_no_defect**. Contract-only change. The explicit eigenvectors decompose (−ε,0) into two strengths −ε/2. With those normalizations the chosen ε meets the local radii; UM=(−ε/2,ε/2) and both jumps satisfy RH at −1 and 1. The ordered contact solution is sound.

- `ex-sod-tube-pressure-root`: risk review complete. Positive conserved-state realization, both squared sound speeds, strict residual endpoint signs and budget qualification hold.

- `thm-godunov-flux-is-consistent-and-conservative`: risk review complete. Zero-speed interface ambiguity is resolved by physical RH; constant-data consistency and periodic telescoping hold on the stated local domain, including n=1.

## Consumer impact and owner alert

The complete direct dependency/reference search for the reader-changed definitions found only the reviewed batch-30 consumers plus batch-33 `def-pe03-system-entropy-pair-and-potential` and `def-pe03-first-order-hll-finite-volume-update`. Both outside definitions were read: they use the conservation-system domain and flux conventions, and neither constructs a distributional solution, so the reader integrability correction requires no change there. The Roe theorem and Burgers witness are the only consumers of the added Roe condition; scalar entropy has only the Burgers consumer. All their actual uses remain sound.

**Owner alert — batch 33:** `lem-pe03-hll-half-cell-riemann-averages`, Facts F2, paraphrases the old HLL theorem as satisfying “both wave Rankine–Hugoniot relations.” Its proof steps 1.1–3.1 independently use the correct assigned-model-flux identities and its half-cell average Statement is sound. The supplier is now explicit that these are model balances, not physical RH. Required owner action: have the owning batch clarify F2 to say the intermediate state and assigned HLL model flux satisfy the two conservative model balances; retain the Statement and proof algebra. No outside item or contract was edited. This is an outstanding outside citation-qualification handoff, not an unresolved prerequisite for the repaired batch-30 theorem. Continue another consumer hop only if the owning repair changes that lemma's Statement/Definition.

The Euler repair changes only proof step 2.2, not its Statement or Definition. The acoustic consumer uses the correct fixed-u,p contact fact and needs no change. No stable IDs, page inventories, or proposed withdrawals were removed. No defective published supplier was found in the actual interfaces reviewed; published content remained read-only. The shared frontier dependency ledger records this handoff.

## Sources and limits

- [Bressan tutorial](https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf): §1.1–1.2, §3.2–3.4, equations (3.10)–(3.26); read the complete relevant characteristic/wave/IFT construction. Printed pagination is PDF index +1; e.g. integral curves are printed p.25, contacts p.28, and construction pp.28–29. Several existing broad locator ranges start one page earlier, but contain the cited passages.
- [LeVeque](https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf): §8.1–8.2; §9.1–9.2, printed pp.89–93 (Euler contact and pressure matching); §13.2, (13.7)–(13.10), printed pp.139–140; §14.2, (14.19), printed p.149 (Roe assumptions). These supply context; all detailed pressure-response and bracket inequalities were checked from the local algebra rather than attributed to formulas not displayed in §9.2.
- [Clawpack HLL derivation](https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html), HLL solver / Derivation and implementation, HTML lines 365–374: the intermediate state is fixed by total wave conservation. This supports the model-balance interpretation; no shallow-water positivity theorem is imported.
- [Hairer/Wanner Newton notes](https://www.unige.ch/~hairer/poly/chap6.pdf), §VI.3, printed pp.138–140 / PDF pp.5–7: read rendered pages after the web text extraction garbled formulas and screenshot requests failed. The exact Newton linear solve is on printed p.138 and the local C3/invertible-Jacobian theorem on p.139. Only the iteration context is used; local convergence is not a premise of the finite-budget bracket proof.
- [Driscoll/Braun §4.5.2](https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html), equations (92)–(93) and complete implementation, supports the Newton call and finite iteration context. The current local algorithms, including every status branch, were independently read.

Published Ck, IFT, Heine–Cantor, uniform Picard–Lindelöf, common-tube C2-flow, IVT and both Newton algorithm carriers were opened. Their exact interfaces were checked against the actual applications. This is not a recursive re-audit of the full published dependency closure. The two local changes have no judge record to invalidate. No judge cycle, dispatch, hash stamping, engine transition, publication or commit was performed.

## Validation

All 12 HIGH/CRITICAL risk reviews are complete in the owned contract. Exactly 15 routed decisions are recorded: 14 touched and one flagged refuter obligation; risk-only items add no decisions.

- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-30.proof-contracts.json --strict`: 30/30 items, 0 errors, 0 warnings.
- Required initial risk report and final `--require-reviewed` run: 30 routed items, 0 errors; all 12 required reviews complete.
- Reflow on the two changed items: unchanged. Precheck: 2 proofs passed, 0 failures.
- Rendercheck on exactly those two items: YAML and all math parsed with the actual renderer libraries.
- Final required single batched command: `node tools/proof-layout.mjs items/thm-hll-flux-is-consistent-and-conservative.md items/thm-one-dimensional-ideal-gas-euler-eigenstructure.md` — 2 items, 6 steps, 0 defects. No item edits followed it.
- Independently checked decisions against the scope: exactly 15/15 obligations, no duplicates, and seven subject-matching closed ledger rows at `3a-adjudicate`. Ledger append succeeded and refreshed its generated view. The initial append attempt rejected a string-valued evidence field before writing anything; it was corrected to the required path-bearing array and then appended once.
- A `rendercheck --help` probe started the tool's default scan because the tool has no help switch; it was interrupted without a result. It supplies no verification evidence. The explicit two-file rendercheck above is the completed check.

Only two item files were edited by this adjudicator: the HLL theorem and Euler eigenstructure theorem. The owned contract, HLL manifest title, this report, companion decisions, seven append-only defect rows/generated view and the scoped frontier-ledger handoff were updated. No other owner's item or contract was edited. Owned mathematical review is complete with no local escalation. The batch-33 citation-qualification handoff above remains open for the owner; engine stamping and the gate battery remain the engine's responsibility.
