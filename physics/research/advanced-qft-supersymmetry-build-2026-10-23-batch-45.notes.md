# Batch 45 authoring notes — Supersymmetric EFT Operators and Thresholds

## Owner focused consumer follow-up — 2026-10-23

Both native45/53 completion receipts were observed successful before these
source writes, and exact sources/contracts/native rows were archived in
`owner-resolution/susy-eft-indices-before/`. No native row, plan or publication
stamp was changed. Earlier readiness observations below are historical; root
must rebind current source-dependent inputs.

The EFT definition inherits batch32's formal holomorphic action convention; it
does not identify tau_h/g_h with physical component gauge parameters. Its
nonrenormalization theorem explicitly inherits the local spurion extension and
full formal regulator hypotheses. The threshold proof now uses the literal
ordered barred coefficient projector rather than importing -barD²/4 from a
different measure convention. Its degree-zero formula and public Statement
are unchanged. A separately confirmed raw-measure/component-action mismatch
in earlier30/31 suppliers is recorded for root coordination; it is not hidden
by this valid formal degree-zero calculation.

## Historical native authoring notes

Run: advanced-qft-supersymmetry-build-2026-10-23  
Pair: aqft-susy-effective-theories / aqft-susy-effective-theories-examples

## Plan and inventory reconciliation

The complete design at research/plan-advanced-qft-and-supersymmetry-track.md, § “Supersymmetric EFT Operators and Thresholds” (lines 625–635), and the current research/plan-spec.json rows agree on the A/B IDs, title, category, library, order 1001, and three A-page prerequisites. The plan and batch manifest have empty items arrays as authoring placeholders; they do not cancel the four contracts in research/advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json.

The candidate-contract text uses historical research IDs thm-aqft-wilsonian-superpotential-nonrenormalization and prop-aqft-supersymmetric-threshold-matching, while the exact inventory carrier IDs are respectively pthm-aqft-wilsonian-superpotential-nonrenormalization and pthm-aqft-supersymmetric-threshold-matching. The design also names the pthm- carrier IDs. The pthm- IDs and physical-theorem kinds are retained; the research-candidate aliases remain evidence metadata only. The owner direction places the Wilsonian theorem on this A page immediately after its action definition; the earlier pthm-qftx-n1-wilsonian-f-term-nonrenormalization remains a separate general N=1 supplier.

The A7 design's finite operator-basis reduction carries the A2 fixed-order on-shell-equivalence obligation. The current, Step-1-ready supplier is thm-aqft-field-redefinition-observable-equivalence-at-fixed-order on qftx-eft-operator-quotients. Its exact interface assumes full AC, an invariant finite-order action, an identity-leading local parity-preserving map with inverse, exact regulated Jacobian and transformed source, and a common stable-pole LSZ limit. The A-page definition records those as conditions for amplitude equivalence; it makes no arbitrary off-shell or regulator-existence claim. The consumer-to-supplier edge is recorded in the batch cross-dependency file.

The assigned item dependency levels, after adding the actual inspected suppliers, are:

- def-aqft-susy-wilsonian-action: 6 (batch-32 action data at level 5 is the highest in-run supplier).
- pthm-aqft-wilsonian-superpotential-nonrenormalization: 7 (definition at 6 and the separate batch-32 N=1 theorem at 6).
- pthm-aqft-supersymmetric-threshold-matching: 7 (the action definition at 6 is the highest supplier; this is a tree-level theorem and does not depend on the sibling loop theorem).
- ex-aqft-soft-breaking-effective-operator: 8 (the threshold theorem and sibling nonrenormalization theorem are both at 7).

The full batch dependency graph assigns batch 45 level 6 with batch requirements 26, 31, and 32. These batch levels set dispatch priority. The declared page requirements remain exactly those three earlier pages.

## Current supplier inspection

- def-qftx-wilsonian-n1-action-data and pthm-qftx-n1-wilsonian-f-term-nonrenormalization (batch 32): complete current carriers and current Step-1 records inspected. The action datum fixes a formal rigid N=1 Wilsonian action at 0 < lambda < Lambda_0, canonical matter D-term, gauge-invariant real G, derivative-free holomorphic F(Phi,W), local derivative expansion, topologically trivial sector, and explicit spurion/Ward-identity hypotheses. The theorem's proof has the same hypotheses, bounds corrections to the one-loop gauge coupling, and does not claim an arbitrary 1PI, nonperturbative, or continuum result. Both current Step-1 records are ready; the theorem's verification.precheck: pending is not a prerequisite gap.
- def-aqft-threshold-matching-map (batch 26): current definition and ready Step-1 record inspected. It keeps mu_W, renormalization mu, threshold M, external-energy bound, regulator cutoff, and operator-suppression scale separate; its matching data use selected renormalized amplitudes with a common IR regulator and explicit finite truncations. This batch uses its map as formulation data and claims no generic amplitude match.
- def-aqft-operator-basis-physical-data (batch 25): actual finite field/jet, symmetry, relation, power-counting, and Wilson-coefficient interface inspected. Its fixed quotient and declared relation space do not by themselves prove physical completeness or amplitude equivalence.
- thm-aqft-field-redefinition-observable-equivalence-at-fixed-order (batch 16): complete actual conditional proof and ready Step-1 record inspected. Its full-AC, exact-Jacobian/source, inverse-map, and stable LSZ conditions are carried into the A-page definition; no claim is made that these data exist for every EFT.
- The pinned root-mathematics snapshots def-axiom-of-choice and def-reductive-and-linearly-reductive-over-c match research/math-imports.json byte hashes. They remain read-only. Full AC is carried only because the selected amplitude-equivalence supplier explicitly assumes it.
- The required qftx-susy-extended-actions page is retained as planned context. This batch's assigned theorem and example make N=1 claims only; they do not infer N=2 or N=4 threshold results.

No required supplier carrier or proof is missing. The current external/item inputs are inspected at their actual statements and proof status; no item is treated as proved merely because it is labelled draft or ready.

## Source reading and dispositions

- Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories, https://arxiv.org/pdf/hep-th/9803099v1, full 13-page PDF retrieved and inspected. Read the action/Wilsonian form and the complete spurion, R-charge, theta-shift, and graph-counting proof (equations (1)–(12), printed pp. 2–7). Supports the action definition and perturbative Wilsonian F-term theorem only. The prose case enumeration following equation (12) appears to print C_2=2; the displayed count equation allows one C_2 vertex. The current general supplier derives that case directly from equation (12); this batch relies on its corrected local proof and records the source discrepancy, not the inconsistent count.
- Stephen P. Martin, A Supersymmetry Primer, version 7, https://arxiv.org/pdf/hep-ph/9709356v7, full 160-page lecture notes retrieved and inspected. Read §4.7 (printed p. 41), §4.10 (printed pp. 49–50), §5.1 (printed pp. 52–53), §6.5 (printed pp. 66–67), and §7.6 (printed pp. 82–83). Supports chiral/D/F action data, Wilsonian versus real Kähler data, soft trilinear terminology, and chiral-spurion coefficient extraction. It is pedagogical and establishes no interacting continuum theory.
- Aneesh V. Manohar, Introduction to Effective Field Theories, https://arxiv.org/pdf/1804.05863, full 94-page lecture notes retrieved and inspected. Read Chapter 5, §§5.5–5.7 (printed pp. 38–41), and Chapter 7, §§7.1–7.2 (printed pp. 58–61). Supports finite-order matching, the low-energy expansion, and threshold corrections. Its examples are ordinary QFT and do not prove the supersymmetric superpotential formula authored here.
- C. P. Burgess, Introduction to Effective Field Theory, https://arxiv.org/pdf/hep-th/0701053, full 55-page review retrieved and inspected. Read §§2.2.1–2.2.2 (printed pp. 21–22) and §4.1.4 (printed pp. 44–47). Supports the Wilson-action mode split and QED threshold interpretation only; the SUSY calculation is local.
- Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders, https://arxiv.org/pdf/1811.09413: supports the exact field-redefinition/LSZ supplier. Its current supplier statement and proof were inspected; its full-text fetch and reading receipt are being reused from current run evidence after matching the pinned URL/hash. It supports only the supplier's explicit conditional scope.

The actual URLs, locators, source searches, per-item dispositions, and fetch stamps are recorded in advanced-qft-supersymmetry-build-2026-10-23-batch-45.coverage.json. No retrieval failure occurred; therefore no failed-source source_resolution object or drop disposition is applicable.

## Item checkpoint — def-aqft-susy-wilsonian-action

Claim/interface: defines finite local rigid N=1 Wilsonian EFT action data, the F/D split, fixed finite operator quotient, all distinct Wilsonian/matching/regulator scales, and one high/low threshold record. It explicitly limits on-shell basis equivalence to the full-AC, exact-regulator/Jacobian/source and stable-LSZ supplier hypotheses.

Direct dependencies: def-qftx-wilsonian-n1-action-data, def-aqft-threshold-matching-map, def-aqft-operator-basis-physical-data, thm-aqft-field-redefinition-observable-equivalence-at-fixed-order, def-axiom-of-choice. Current supplier closures are inspected; dependency_level: 6.

Source support: Weinberg equations (1)–(3), pp. 2–3; Martin §§4.7 and 4.10; Manohar Ch. 5 §§5.5–5.7 and Ch. 7 §§7.1–7.2; Burgess §§2.2.1–2.2.2 and 4.1.4; Criado–Pérez-Victoria §2 and Appendix B.

Validation: item and manifest carriers agree; content-policy, scoped dependency/forward-reference checks, and renderer checks pass. The inspected in-run dependency closure computes level 6. Step-1 readiness is recorded `ready` with the current dependency hash. No unresolved prerequisite.

## Item checkpoint — pthm-aqft-wilsonian-superpotential-nonrenormalization

Claim: in the exact formal perturbative, nonzero-cutoff N=1 Wilsonian setting of the batch-32 supplier, restrict its full holomorphic integrand to the fixed light-field superpotential and apply the fixed finite-basis coordinate map. Each retained coefficient is unchanged in the same unrescaled fields. One-loop holomorphic gauge-coupling renormalization, changing D/Kähler data, 1PI differences, nonperturbative sectors, and continuum existence remain outside the conclusion.

Conventions and assumptions: natural units; the QFT item's mostly-plus metric; fixed derivative-free F-term basis and relation quotient; formal cutoff 0 < lambda < Lambda_0; local spurion extension, one-particle-irreducible perturbative vertices, coefficientwise rigid N=1/BRST Ward identities, and no local gauge anomaly. Full AC is carried through the optional physical quotient equivalence input; it is not used in the coefficient projection.

Direct dependencies: def-aqft-susy-wilsonian-action (formulation), pthm-qftx-n1-wilsonian-f-term-nonrenormalization (physical result), and def-axiom-of-choice (mathematical premise). Highest in-run supplier level is 6, so dependency_level is 7. The exact general theorem's complete proof and current ready Step-1 record were inspected; it remains a draft supplier without independent acceptance.

Sources and locators: Weinberg, https://arxiv.org/pdf/hep-th/9803099v1, equations (1)–(12), pp. 2–7; Martin, https://arxiv.org/pdf/hep-ph/9709356v7, §§4.7, 4.10, and 6.5. The Weinberg post-equation-(12) C_2 enumeration discrepancy is corrected from the equation in the general local supplier; this item relies on that inspected proof, not the conflicting prose count.

Validation: proof precheck passes; the strict proof contract and proof-layout pass; content-policy, scoped dependency/forward-reference checks, and renderer checks pass. Step-1 readiness is recorded `ready` at dependency level 7. No missing proof or current prerequisite is identified.

## Item checkpoint — pthm-aqft-supersymmetric-threshold-matching

Claim: for one massive gauge-singlet chiral multiplet with $W_+=W_L+\tfrac12MX^2+XJ(\Phi)$, derive only the tree-level, zero-supercovariant-derivative Wilsonian F-term coefficient $W_L-J^2/(2M)$. The derivative grading and the chosen $\Pi_0$ threshold prescription are explicit assumptions. The proof derives the canonical chiral Euler equation by ordered Berezin integration by parts, projects its supercovariant-derivative term away at the declared order, solves the scalar linear equation, and substitutes. It does not claim the selected full amplitude map, loop matching, numerical remainder, or continuum result.

Direct dependencies: def-aqft-susy-wilsonian-action, def-aqft-threshold-matching-map, def-qftx-n1-chiral-superfield, def-qftx-superspace-grassmann-algebra, and def-axiom-of-choice. Highest in-run supplier level is 6, so dependency_level is 7. The Axiom of Choice is inherited only through the finite operator-equivalence interface; the threshold algebra is choice-free.

Conventions/source locators: natural units and mostly-plus Minkowski metric; [X]=1, [M]=1, [J]=2; E_ext << M; the Wilsonian, renormalization, regulator, and operator-suppression scales remain distinct. Martin, §4.7, equations (4.7.5)–(4.7.9), pp. 41–42, supplies the superspace action/equation-of-motion convention; Manohar, Ch. 5 §§5.5–5.7 and Ch. 7 §7.2, supports only the finite-order low-energy threshold context; Burgess §4.1.4 supports only ordinary EFT threshold matching.

Validation: proof precheck passes; the strict proof contract and proof-layout pass; content-policy, scoped dependency/forward-reference checks, and renderer checks pass. Step-1 readiness is recorded `ready` at dependency level 7. No missing prerequisite is identified.

## Item checkpoint — ex-aqft-soft-breaking-effective-operator

Claim: a one-heavy-singlet threshold gives the stated tree-level quartic superpotential coefficient, then a separate dimension-five chiral-spurion insertion produces a scalar soft trilinear with coefficient $A_{\mathrm{soft}}=\kappa F_{\mathcal X}/\Lambda_{\mathrm{op}}$. The ordered Berezin integral extracts the $\theta^1\theta^2$ coefficient exactly. The fixed F-background breaks rigid SUSY, so no protection claim follows from the supersymmetric theorem; no smallness or phenomenological limit is asserted.

Direct dependencies: def-aqft-susy-wilsonian-action, pthm-aqft-supersymmetric-threshold-matching, pthm-aqft-wilsonian-superpotential-nonrenormalization, def-qftx-n1-chiral-superfield, def-qftx-superspace-grassmann-algebra, and def-axiom-of-choice. Highest in-run supplier level is 7, so dependency_level is 8. The example is on the B page and uses the A-page threshold and nonrenormalization results.

Sources and locators: Martin, https://arxiv.org/pdf/hep-ph/9709356v7, §5.1 (printed pp. 52–53) for positive-mass-dimension soft scalar cubics and §7.6 (printed pp. 82–83) for spurion extraction; Manohar, https://arxiv.org/pdf/1804.05863, Ch. 5 §§5.5–5.7 for the local EFT threshold context. The local coefficient extraction and dimensions are verified in the item.

Validation: proof precheck passes; the strict proof contract and proof-layout pass; content-policy, scoped dependency/forward-reference checks, and renderer checks pass. Step-1 readiness is recorded `ready` at dependency level 8. No missing prerequisite is identified.

## Final batch checks and readiness

- The A/B pages are frontmatter-only. The four manifest item rows match their carriers; the B-page example depends on both A-page theorems. Cross-batch dependency evidence is a JSON array with one row per external page/item edge and records the inspected interfaces as `verified`.
- The proof carriers have current `verification.precheck: pass`; the definition has no proof obligation. `proof-contract --strict` reports 0 errors, 0 warnings, and 4/4 items checked. `proof-layout` reports 4 items, 10 numbered steps, and 0 defects.
- Authored and manifest content-policy checks both report 4 scoped items with 0 errors and 0 warnings. `rendercheck` passes all 6 item/page files. Scoped `depcheck` and `fwdcheck` pass for the four owned items and their selected dependency graphs. `source-fetch-check --stamp` and follow-up check verify and resolve 5/5 sources; no retrieval failure or source drop occurred.
- Recomputed the full in-run item-dependency closure of the four items: 32 items, 0 errors; the assigned levels are 6, 7, 7, and 8 in the order listed above. The ordinary whole-run item-level check remains blocked by unrelated incomplete/empty manifests and stale labels in other batches.
- The full batch-level check still fails with `Duplicate item undefined`, traced to six unfinished string-only items in batch 59. The prior valid scheduling levels for batches 16, 25, 26, 30, 31, 32, and 45 are 1, 3, 4, 3, 4, 5, and 6. The shared scheduling file was left unchanged; this run-global bookkeeping issue is not a missing prerequisite for batch 45.
- An accidental unscoped `fwdcheck --help` invocation performed a whole-corpus scan. Its unrelated findings were excluded; only the explicit scoped `fwdcheck --items-file /tmp/aqft-b45-item-scope.json` result above is used as batch evidence.

No assigned item, page, source, contract, or readiness record remains unfinished. The only outstanding issue is the external batch 59 scheduling-manifest defect described above.

## Owner canonical-normalization follow-up — 2026-10-24

The current source/interface and exact consumer disposition are in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/canonical-normalization-repair.md` and its evidence JSON. This dated addendum supersedes earlier live-readiness observations and the earlier raw/physical measure identification, without deleting that history. Current physical brackets are D=-I_D/4, F=I_F/2 with psi_raw=sqrt2psi and F_raw=2F; scalar fields, physical couplings and potentials are preserved.50/51 use the independent stable-ADHM core and genuine localized BM tangent-twist insertion, with source continuation m=i m_E and the unconstructed S4-regulator caveat retained.79 selected source items and26 actual pages passed focused preparation checks; this is not native acceptance. Root retains native holds until independent source/dependency binding and recertification.
