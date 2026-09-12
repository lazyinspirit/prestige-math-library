# phase-2-next-15 batch 9 — Step 1 scaffold notes

## Scope and construction order

Owned scope is exactly the two assigned A/B pairs. The manifest was constructed once in this prerequisite order:

1. Boolean syntax and bounded tableaux; tableau correctness and size; Cook–Levin and 3SAT; polynomial-space syntax, configuration counting, and TQBF; then the three examples.
2. Shortest nondeterministic acceptance and exact clocks; two-tape simulation; prefix universality; controlled self-reference; clock/cutoff closure; unary diagonal bound; recursive-padding separation; then the two examples.

No published content, shared plan, engine state, or verdict was edited. The consumer-batch dependency input is `[]`: the owned proofs require no unpublished item from another batch in this run. The new items are intended suppliers to existing published consumers, not consumers of other current batches.

No item in either pair uses the Axiom of Choice. All arguments are finite syntactic, finite-machine, or natural-number recursions in the library's ordinary foundations. Neither page reaches `deferred-set-theory-beyond-choice`, directly or transitively.

## Plan/design comparison

The complete design blocks at `research/plan-computability-theory-track.md` lines 3235–3334 were compared with the four current `research/plan-spec.json` page records.

- Orders, page IDs, categories, companions, and `requires` arrays agree.
- The design writes both companion titles with an em dash before “Examples”; the current plan uses a colon. The current plan controls, so both B titles retain the colon.
- The design inventories 9 A plus 3 B items for the SAT/TQBF pair and 7 A plus 2 B items for the nondeterministic-padding pair, while the current plan records empty `items` arrays. This is recorded as a generated-plan/design shape conflict. The dispatch explicitly assigns Step-1 construction and says the generated task contains no mathematical review, so the manifest supplies exactly the designed inventories rather than treating an empty placeholder as a reviewed decision to publish empty pages.
- No designed item was weakened, removed, or moved. No additional item was needed: QBF syntax is introduced explicitly in `thm-tqbf-pspace-completeness-interface`, as the design assigns QBF definition to items 7–9.

## Dependency and convention audit

The proofs and statements, rather than page membership, were inspected for each used prerequisite.

- `def-polynomial-time-verifier-and-reduction-interface` supplies the binary-language, verifier, polynomial reduction, malformed-input, and asymptotic conventions used by Cook–Levin and TQBF.
- That verifier interface is multitape. The fixed-window Cook–Levin tableau therefore explicitly consumes published `thm-multitape-machines-have-one-tape-simulations` and `lem-multitape-simulation-has-quadratic-time-overhead`; their proofs preserve behavior and give an `O((n+t+1)^2)` bound. The draft wrapper `thm-multitape-to-single-tape-time-simulation` is not used.
- `def-turing-machine-configuration`, `def-turing-machine-initial-and-halting-configuration-interface`, and `def-one-step-configuration-relation` are published and fix the semi-infinite tape, head-at-zero start, clamped left boundary, and no outgoing halting transition. Tableau and TQBF strategies encode these conventions explicitly.
- The tempting `prop-valid-computation-histories-are-decidable`, `def-configuration-graph`, and `lem-acceptance-is-configuration-reachability` are draft. They are not dependencies. Tableau soundness, one-step predicates, reachability, and configuration counting are proved locally from the raw published interfaces.
- `def-dtime-ntime-dspace-and-nspace` and `def-worst-case-time-and-space-complexity` are published and fix all-tape visited-cell space and all-branch-halting resource classes. The new acceptance-time definition keeps the source's shortest accepting branch convention separate and gives an explicit exact-clock conversion.
- `def-machine-time-and-space-constructibility` is published, but the older `lem-clocked-machine-construction` is draft and is not used. Exact clocks are data in the separation theorem; clock products and the polynomial example are constructed locally.
- `def-effective-encoding-of-turing-machines` and `lem-machine-encoding-is-injective-and-decodable` are published but encode deterministic one-tape machines. The new prefix-universality lemma depends on them only for the self-delimiting finite-table pattern and explicitly extends the syntax to finitely branching nondeterministic two-tape machines.
- `thm-smn-for-the-fixed-acceptable-numbering` and `thm-kleene-fixed-point-theorem-for-program-indices` are published. The fixed-point theorem is extensional only. `lem-time-controlled-self-reference-for-nondeterministic-machines` therefore obtains language equality from it but derives every time constant separately from the concrete compiler and prefix interpreter.
- The TQBF proof uses deterministic polynomial-space deciders only; it neither assumes PSPACE=NPSPACE nor consumes Savitch. The one-copy quantified reachability recursion has separate semantic, output-size, and construction-workspace inductions.
- The nondeterministic theorem preserves the source warning that shortest acceptance is not maximum branch time, includes input copying and the semi-infinite-tape adaptation, quantifies machine-dependent constants before the padding recursions, retains the shifted condition `a(n+1)=o(T(n))`, and adds the final all-branch clock translation.

All 21 manifest IDs were checked as unused against current items and manifests by `manifest-deps`; all dependency arrays point backward locally or to published items on disk.

## Source evidence and disposition

The SAT/TQBF page uses two independent treatments: the complete relevant arguments in Arora–Barak §§2.3 and 4.3, and Kabanets's complete Lectures 7, 8, 12, and 13. All five URLs received genuine `source-fetch-check --stamp` receipts. Complete hash-bound reading receipts are present for the two-page Lectures 7 and 13; the four- and five-page notes do not trigger the short-document rule.

The nondeterministic-padding page uses the design-mandated Seiferas–Fischer–Meyer article and independent complete lecture-note treatments by Kabanets and Vadhan. Both lecture-note URLs received genuine stamps and complete three-page reading receipts. The article's complete relevant text, pp. 147–155, was read through the browser rendering, including Lemmas 1–6 and both inductions of Theorem 4. The exact ResearchGate URL nevertheless returned HTTP 403 to `source-fetch-check` on the initial attempt and all five permitted retries. Searches of exact-title/DOI, ACM, CiteSeer, author, and alternate ResearchGate routes found no separately fetchable full text; OpenAlex pointed only to the ACM bronze PDF, which also returned 403. This is an access/stamping failure, not a claim of permanent unavailability.

The independent notes confirm the hierarchy statement and lazy-diagonalization/padding idea but do not reproduce the full quantitative two-tape, prefix-universal, time-controlled self-reference, and two-padding proof. Consequently the source has `source_resolution.status: owner-escalation`, not a fabricated drop, and every paper-backed item in the nondeterministic A/B pair is escalated. The exact attempts, searches, uncertainty, locators, reading evidence, and all 49 harvested-result dispositions are retained in the coverage file.

## Published defects and planned supplier migrations

These are existing published-consumer defects, recorded for canonical-ledger reconciliation. They do not block the new SAT/TQBF supplier because none is its prerequisite.

- `cor-clique-is-np-complete` and `cor-hamiltonian-path-and-cycle-are-np-complete` are published but actually depend on draft `thm-three-sat-is-np-complete`. Evidence is their frontmatter dependency arrays and their proofs' `[L2]`/`[L3]` uses. Planned supplier: ready `thm-three-sat-completeness-interface` on this batch's A page. Repair: migrate the dependency and reconcile the fixed “clauses of size at most three” convention before republishing the consumers.
- `thm-circuit-sat-is-np-complete` is published but actually depends on draft `thm-cook-levin-sat-is-np-complete` and uses it for NP-hardness in `[L2]`. Planned supplier: ready `thm-cook-levin-sat-completeness-interface`. Repair: migrate the dependency after interface reconciliation.
- `cor-l-is-properly-contained-in-pspace` is published but actually depends on draft `def-pspace-and-npspace`, used in proof step 2.1. Planned supplier: ready `def-polynomial-space-and-nondeterministic-polynomial-space`. Repair: migrate the class-definition dependency and verify the all-tape convention remains unchanged.
- `cor-ph-complete-language-forces-collapse` is published but actually depends on draft `thm-tqbf-is-pspace-complete`, used as `[F3]` and in step 2.1. Planned supplier: ready `thm-tqbf-pspace-completeness-interface`. Repair: migrate after matching the TQBF parser and reduction convention.
- `thm-nondeterministic-time-hierarchy` is published but actually depends on draft `def-time-and-space-constructible-function`. Its proof step 2.1 also invokes the Seiferas–Fischer–Meyer theorem externally rather than exposing the quantitative prerequisites locally. Planned suppliers are the escalated `def-nondeterministic-acceptance-time-and-exact-clock` through `thm-nondeterministic-recursive-padding-separation`. Repair: owner resolves the source stamp, Step 3 audits the internal proof chain, then the existing theorem is migrated to the new theorem plus the published current constructibility/asymptotic interfaces.

The existing canonical consumer-supplier ledger already identifies these migrations in broader form. This batch did not edit that shared ledger.

## Verification snapshot

Final checks were run from the repository root after all owned edits and readiness records:

- JSON parsing: pass for manifest, coverage, notes-adjacent dependency input; page inventory counts are A9/B3 and A7/B2, 21 total.
- `node tools/manifest-deps.mjs research/phase-2-next-15-batch-9.pages.json`: pass, 21 items, zero normalization and zero errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-next-15-batch-9.pages.json`: pass, 21 scoped items, zero errors or warnings.
- Whole-run `node tools/manifest-deps.mjs research/phase-2-next-15-batch-*.pages.json`: final rerun passed at the concurrent snapshot, 454 items, zero normalization and zero errors (another batch changed the run-wide count during this dispatch).
- Whole-run `node tools/content-policy.mjs --manifest-only research/phase-2-next-15-batch-*.pages.json`: fail on 11 missing dependencies belonging to other batches (`def-hurewicz-homomorphism`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `def-weak-homotopy-equivalence`, `thm-regular-value-formula-for-degree`, `prop-degree-is-multiplicative-under-composition`, `prop-affine-denominator-separates-real-and-imaginary-root-factors`, and `ex-first-weight-layers-of-the-basic-affine-sl2-character`). The batch-local policy pass confirms none is owned by batch 9; no foreign manifest was edited.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: pass. It reports acyclic consistent declared page order, no cycles, forward item edges, B suppliers, or unresolved IDs among 1,022 itemized pages, with 597 plan pages still unitemized and existing redundant-prerequisite notices. Because this batch may not edit the shared plan, this canonical check does not splice or independently validate the new item bodies.
- `node tools/extcheck.mjs --quiet`: pass with 55 existing published/unproved warnings. None names an owned item; this is a repository external-reference policy check, not mathematical approval of the scaffold.
- Before recording the exhausted source escalation, `coverage-checklist --require-destination` passed structurally with 2 A pages, 49 harvested rows, zero errors and warnings. In the required final state it reports 13 errors, all consequences of the active `source_resolution.status: owner-escalation`: the checker only treats a certain completed drop as resolved and asks for alternative-proof rows that this scaffolder has deliberately not claimed. There are no disposition, destination, source-count, locator, or unknown-item errors.
- `source-fetch-check --stamp --timeout-sec 20` fetched and stamped 7 of 8 sources, then recorded six HTTP 403 attempts for the ResearchGate article. Final check mode reports 7/8 fetch-verified and the same unresolved owner escalation. It did not retry after exhaustion.
- All 21 readiness files exist and their dependency arrays match the manifest: 12 SAT/TQBF items are `ready`; all 9 nondeterministic-padding items are `escalated`. No escalation was overwritten and no `--owner` flag was used.

Worker readiness is construction evidence only. The active source escalation, owner/operator reconciliation, and Step 3 mathematical review remain open; neither the passing structural checks nor this worker exit is independent approval.

## Owner source resolution

The owner/operator retained the exhausted six-attempt history and confirmed that ACM, ResearchGate, CiteSeerX, Semantic Scholar, OpenAlex, CORE, author, and archive routes do not provide a currently fetchable complete copy. The source is therefore dropped only as fetch backing. All nine affected claims remain in scope and now have complete local alternative-construction records, with the two fetch-stamped lecture treatments retained as independent corroboration of the hierarchy shape. Step 3 must still author and independently judge the full quantitative chain.
