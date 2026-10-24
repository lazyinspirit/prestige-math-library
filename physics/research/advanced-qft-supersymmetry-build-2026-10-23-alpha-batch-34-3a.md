# Batch 34 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-34.

## Completed level 0: ATLAS

`refuter:34:1`: confirmed_fatal, repair_confidence 1. This is a source-fidelity defect, not a refutation of the experimental result. ATLAS v2 §9 restricts Gaussian constraints to systematic sources; §8 distinguishes finite-MC and CR statistical contributions without giving all of them that distribution. Corrected empirical_result.uncertainty, Procedure and Uncertainty consistently; preserved observations and model conditions. Manifest uncertainty and contract reviews synchronized. Entire item and four mathematical statistical vocabulary suppliers read. Consumer search in items/library finds only its placement page and itself, hence no downstream scientific use to repair. HIGH risk review complete before advancing.

Source: https://arxiv.org/html/2511.20042v2, §§4, 7.2, 8, 9 (especially first paragraph, Table 13, §9.4). Checked luminosity, calibration/transfer procedure, statistical/systematic split, pulls and mass reaches; no independent detector or likelihood reanalysis.

Next: CMS risk review, then the routed definition and two theorems in order.

## Completed level 0: CMS

HIGH risk review complete; no routed decision is owed. Entire item and statistical suppliers read. Actual 31-page PAS downloaded from its stated INSPIRE URL and extracted with PyMuPDF; CERN CDS browser retrieval returned a bot challenge, so no CDS full-text reading is claimed. Checked §§2–8 procedure/calibration/background transfers, §8 uncertainty inputs, and §§9–11 (printed pp.21–23) for SR-only template likelihood, asymptotic CLs, expected bands and the eight model-specific observed reaches. Official CMS result page corroborates the reported finding. No defect found; no independent reconstruction, coverage proof or likelihood reproduction. No diagrams.

Sources: https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa and https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html.

Next: level-2 vacuum definition, then level-3 norm identity.

## Completed level 2: vacuum definition

`touched:34:def-qftx-global-susy-vacuum-state`: accepted_repair, confidence 1. HEAD source bytes hash exactly to the frozen pre-reader item hash; current bytes hash exactly to post-reader. The complete diff changes only Martin's erroneous §6.1 locator to §7.1, printed p.72, (7.1.1)–(7.1.2). Actual downloaded v7 PDF p.72 confirms the norm identity. Bilal printed pp.35–36 supplies the independent vacuum/invariance discussion. Reviewed the entire definition and each direct supplier: the positive representation gives actual charge adjoints, product domain and nonnegative Hamiltonian; Countable Choice is carried, not newly spent. Normalization excludes the zero vector; ground-state existence is explicitly not claimed. Boundary neutrality remains distinct from invariance. Definition text is unchanged, hence no interface propagation.

## Completed level 3: vacuum energy

`touched:34:pthm-qftx-global-susy-vacuum-energy`: accepted_repair, confidence 1. Exact pre/post binding and citation-only diff as above. Read all three proof steps: tracing the mixed bracket gives -2N·2P_0=4NP^0; the actual adjoints on the common invariant product domain give both norm squares; a finite nonnegative sum vanishes iff all 2N pairs vanish. N≥1, unit norm, zero energy, positive energy and both iff directions checked. Neither the rest nor ground-state condition is needed for the algebraic identity, but both legitimately specify its intended state. No central-charge neutrality is used. ACω is inherited by representation construction, with no extra proof choice. CRITICAL risk review completed.

Sources: Martin v7 printed p.72, §7.1, (7.1.1)–(7.1.2), https://arxiv.org/pdf/hep-ph/9709356v7; Bilal printed pp.35–36, §6.1, https://arxiv.org/pdf/hep-th/0101055. Bilal (6.7) has a trailing =0 in its displayed general-state identity; local proof independently establishes the nonnegative norm identity and does not import that typographical assertion.

Outside-scope continuity alert retained: refuter reports batch-1 abstract-T/represented-P bridge ambiguity. Current algebra supplier still writes T=σP without an explicit representation map, whereas the current representation supplier separately requires exactly the needed operator anticommutator on D. The owned theorem is a conditional deduction from that explicit operator relation and does not certify the abstract bridge. This report does not close the producer owner's existing handoff or edit its carrier.

Next: level-6 O’Raifeartaigh full proof, dimensions and consumers.

## Completed level 6: O’Raifeartaigh

`touched:34:pthm-qftx-oraifeartaigh-f-term-breaking`: accepted_repair, confidence 1. Exact HEAD/pre and current/post hash matches authenticate the sole reader insertion: V:C³→R is a potential-energy density, [V]=M⁴, [W]=M³, [F]=M². This is correct from [k]=M², [m]=[φ]=M and dimensionless y. Updated the stale manifest Statement to include the insertion. No item consumer exists; the A page merely places it.

Independently checked all eight proof steps and direct supplier proofs: complex field/no-zero-divisors; conjugation and multiplicative definite modulus; explicit complex square roots; ordered real field; local real-part bound including both equality directions; current Wess–Zumino postulate and complete ordered component conversion; canonical auxiliary elimination. Expansion yields q(t)=a²+(b-ac)t+c²t²/4. With c=0, b>0 forces t=0; with b=ac,c>0 only t=0 minimizes. For b<ac, t*=2(ac-b)/c², the exact square completion is positive, below a² and attained by both roots of ρ=(2k/y)(1-b/ac); phase alignment and third-square vanishing are necessary and sufficient. Characteristic zero distinguishes ±u. F¹ remains nonzero in both branches. The arbitrary φ₁ direction is pointwise, and compact support precludes claiming a nonzero constant vacuum. No choice is spent selecting a single square-root witness. CRITICAL risk review complete.

Martin v7 §7.3 printed pp.75–76, (7.3.1)–(7.3.3) uses positive parameters and m²>yk; the second regime and complex phases are established by the local proof, not attributed to Martin. Bilal §6.3.1 printed p.38 gives incompatible auxiliary equations. No quantum/radiative conclusion or empirical input is introduced.

Current owned supplier-use records now distinguish the historical normalization hold from the repaired present source. The current conversion gives -4F bar(F) times D bracket -1/4 and 2FW_i times F bracket 1/2; this verifies the canonical auxiliary interface needed here. No source acceptance or historical readiness stamp is claimed. Refreshed stale owned proof-contract source quotations to exact current passages.

Next: append closed defect rows and four decisions; run scoped local checks and final batched layout check.

## Decisions and durable evidence

Four owed obligations, four decisions; no reader or page obligations. The O’Raifeartaigh disposition is `amended_repair` because Alpha additionally synchronized its stale manifest Statement and source evidence; its reader-edited item bytes remain unchanged. Other touched decisions are `accepted_repair`; ATLAS is `confirmed_fatal` and fixed. Four unique closed `fixed` ledger rows use `caught_at_stage: 3a-adjudicate`, each linked to its exact obligation; all completed repairs have confidence 1.

Preimages for the three reader-edited carriers are recoverable at commit `64f205fee0b3f2e70afacfbf34b7c2e04eb67a10`, `physics/items/<id>.md`; their raw SHA256 hashes equal the frozen pre-reader snapshot. Current item hashes equal the frozen post snapshot. Thus no missing historical-byte disposition is required. ATLAS original committed carrier likewise remains recoverable; original refuter and scope artifacts were not edited.

No published defect or imported-source edit arose, so no published ledger mutation was required. No diagrams occur in any assigned carrier, and no missing diagram is needed for these explicit arguments. Both compact A/B pages remain frontmatter-only with unchanged inventories.

## Local checks and handoff

- Risk report run first without `--require-reviewed`: two HIGH experiments and two CRITICAL theorems routed. Completed all four specific reviews in item order; rerun with `--require-reviewed` passes, six scoped items, zero errors.
- Strict proof-contract check: six of six items, zero errors and warnings.
- Reflow on the four changed carriers: all unchanged. Normative precheck: three checked, zero failures (definition has no proof; experiment passes nonproof structure).
- Explicit rendercheck: four changed items plus both placement pages, six files, no YAML/math/render defects.
- Final single batched proof-layout command on all four changed items: eleven numbered steps, zero defects.
- JSON/obligation/ledger check: exact four owed decisions, one unique fixed row each; three reader-edited item hashes still equal frozen post-reader bytes. Manifest inventory unchanged.

A statement-first helper `--help` probe was rejected because it requires `--run RUN --domain physics`; no whole-run check was attempted. The uninterrupted sections and immediate reference sections were inspected directly; no links interrupt their complete statements. This mechanical usage failure is not a content defect and generated no ledger row.

No local repair blocker remains. The existing outside batch-1 bridge alert is retained for its owner and is not represented as resolved. No judge, acceptance stamp, dispatch, full gate battery, publication, commit or push was initiated. The engine owns current decision hashing and gates.
