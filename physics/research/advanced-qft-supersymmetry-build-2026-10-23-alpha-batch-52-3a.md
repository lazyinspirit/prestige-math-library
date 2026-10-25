# Batch 52 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-52.

## Definition checkpoint

Reviewed `def-qftx-adjoint-higgs-monopole-sector` first (level 2), including all seven direct suppliers. Reader/refuter findings 1 and 2 are confirmed fatal ill-formed public conditions. Repair defines smooth time-independent spacetime extensions and zero temporal component, then specifies angular connections, their convergence, the tangential derivative and the scaled radial magnetic limit. The fixed SU(2), anti-Hermitian basis, right-action convention, natural units, energy and flux normalizations are preserved. No existence assertion or empirical conclusion is added.

Exact supplier interfaces: `def-countable-choice` (AC_omega), `def-qftx-nonabelian-gauge-data` (smooth right bundle and representation), `def-qftx-principal-connection-form` (principal form), `def-qftx-lie-algebra-valued-form-bracket` (one-half bracket convention), `def-qftx-associated-covariant-derivative` (local derivative and transition proof 2.1–3.1), `prop-adjoint-is-a-smooth-lie-group-representation` (smooth Ad), and `lem-qftx-su2-compact-nonabelian-invariant-form` (Pauli basis and -2Tr positivity/invariance, proof 1.3–2.1). No supplier was edited. The adopted boundary hypotheses are explicit assumptions, not inferred from finite energy.

Source passages opened: [Tong](https://arxiv.org/pdf/hep-th/0509216), §§2.1.1–2.1.3; [Harvey](https://arxiv.org/pdf/hep-th/9603086), §2.1 equations (2.1)–(2.6) and §2.2 equations (2.7)–(2.9). Reading is passage-specific, not cover-to-cover. The initial risk report routed all four items as CRITICAL; the definition now has a specific complete risk review.

Consumer search over items found only the two assigned theorems and assigned example. Next: finish their exact boundary uses and source normalization review in the generated order, then local checks and the final decisions/ledger.

## Energy-bound checkpoint

Completed level-3 `pthm-qftx-bogomolny-monopole-energy-bound`. Findings reader/refuter 4 and 6 are confirmed: the boundary condition was undefined, and the numerical source conversion was false. The Statement retains the reduction while spelling out its scaled radial limit and local tangential condition. The proof remains unchanged: Bianchi and Ad-invariance give div J, the divergence theorem applies to every smooth ball, finite energy controls the cross term, and positivity proves both directions in all three charge-sign cases. The risk review is complete.

Direct source check: Tong §1.1 normalization footnote, printed p. 6, and §2.1.2 equation (2.16), printed p. 43, give a matrix trace coefficient; converting kappa=-2Tr to Hermitian variables yields twice that trace, hence g²=e². Replaced the false g²=e²/2 conversion in locator and Remarks, with the calculation. Harvey equations (2.3)–(2.6) are on printed p. 19. Source page locators were corrected at the same time. The local proof and energy claim are unaffected by this citation correction. Next: complete the flux theorem before the example.

## Flux checkpoint

Completed level-3 `pthm-qftx-su2-monopole-flux-quantization`, confirming reader/refuter 3. Its Statement now defines B_infinity as the global coefficient of the adapted curvature, equivalently the uniformly convergent R²-scaled radial field, and gives the local tangential derivative explicitly. The claim, right-action transition, global SU(2) period, fundamental probes and charge sign are preserved. The proof has been checked step by step: uniform convergence controls the hemisphere integrals; Stokes and the opposite boundary orientations give minus the transition increment; closed SU(2) endpoints force multiples of 4pi. Zero and negative transition integers are included. The smooth hemispheres and C1 forms meet the exact published Stokes interface. Risk review complete.

The sole TikZcd square has domain U_N intersection U_S, two correctly directed lifts, and the projection p(u)=Ad_u T3; stabilizer invariance makes it commute. No diagram correction or addition is needed. Next: give and verify explicit lifts for the assigned unit-charge profile.

## Example checkpoint

Completed level-4 `ex-qftx-su2-bps-monopole`. Reader/refuter 5 is confirmed nonfatal: the claimed lifts exist by elementary explicit matrix formulas, now supplied and verified in 4.2. The formulas are smooth on neighborhoods of the closed hemispheres and give the transition theta=-2phi-2pi. The old 4.2 becomes 4.3 and additionally verifies D_tan=0, B_infinity=n_infinity, and smooth Higgs convergence for the clarified supplier. The Example claim is unchanged. Origin regularity follows from analytic parity; the radial differentiation and curvature contraction agree with B=+epsilon F/2; the r^-2 tail is square-integrable and the flux is 4pi v. The two theorem applications give nu=1 and E=4pi v/g². Risk review complete. No new prerequisite, page, or empirical premise is needed. Next: synchronize contracts/manifests and write the twelve routed decisions, then run local checks.

## Final dispositions and consumer review

All twelve owed obligations have decisions: reader/refuter 1, 2, 3 and 4 are confirmed fatal public-interface defects; finding 5 is confirmed nonfatal, a directly closable lift-construction gap; finding 6 is confirmed fatal because the cited numerical conversion is false, although the independently valid local proof is unaffected. Original reader/refuter severities differ on findings 5 and 6; neither source report is rewritten. Each pair binds the same observed carrier fingerprint and maps to one closed defect row with explicit same-defect evidence. Every completed repair has repair_confidence 1. No touched/page decision is invented: the frozen scope lists no such obligations, and all pre/post item, contract and page hashes are identical between those two snapshots, consistent with the read-only reader report.

Final example numbering follows the normative precheck: explicit lifts are 5.1, boundary verification is 6.1, and the final energy/charge application is 7.1. Earlier checkpoint numbering above describes the edit before canonical phase normalization. All current contract derivations, citation uses, quoted supplier claims, boundary notes and manifest Statements/source metadata now use the final carriers.

The sector Definition changes require exactly the two owned theorems and owned example; all actual uses were checked. The theorem Statements retain the original physical restrictions with defined objects. Each theorem's only item consumer is the same owned example. Its unchanged public Example and explicit boundary verification finish propagation; no outside repair or additional hop is required. No new dependency, item, page or published status was introduced. The frontier dependency ledger and owning cross-batch interface evidence are updated. Published/imported suppliers were read-only, with no detected published defect or ledger entry required. Both A/B page bodies remain untouched; no summaries were added.

## Focused checks and handoff

The initial risk-report command without --require-reviewed routed all four items CRITICAL (scores 9, 10, 10, 9). Each has a specific complete risk_review after its actual proof/definition and supplier review. The final identical command with --require-reviewed reports zero errors and four routed items.

Reflow on the four explicit changed item paths reported all unchanged. Precheck on those paths finally reports three proof-bearing items clean, zero failing; the definition has no proof and is not counted. An intermediate canonical-phase repair request was resolved by assigning the constructive lift, limiting-boundary verification and conclusion to phases 5, 6 and 7; it is not a scientific defect. An initial local metadata-sync script split a YAML string at a signature containing three hyphens; using anchored frontmatter delimiters fixed the script, and no malformed YAML was written. These mechanical attempts create no defect rows.

Final rendercheck passes all four explicit item paths with the real YAML and KaTeX parsers. After the final item edit and formatter, the required single batched proof-layout invocation passes: four items, sixteen steps, zero defects. The three proof arguments remain independent of the single reviewed diagram. There is no empirical or statistical inference in this batch. No judge, acceptance stamp, engine gate battery or transition was run. Engine decision hashes and acceptance checks remain the engine's responsibility. No scientific blocker remains.

The native defect-ledger append succeeded for all six rows and refreshed its generated view. Final local artifact consistency also passed: exactly 12/12 owed decisions, each pointing to one closed defect; six shared defects; four synchronized manifest claims and complete risk reviews; no hyperlinks in complete claim sections; final example step inventory matches its contract; frozen reader pre/post entries agree. This was a focused local consistency check, not the engine gate battery.
