# Batch 12 construction handoff — phase-2-next-21

Status: **ready for owner/operator reconciliation and Step 3 review**. The two assigned pairs contain 27 A items and 8 B items. Every item was constructed in prerequisite order and received a `ready` record before construction advanced. No owner override was used. This status is scaffold readiness, not independent mathematical approval or publication.

## Scope, plan, and conflicts

Read `README.md`, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the frontier dependency instructions, the generated task, the planning notes, drift report, scope ledger, current manifests, and the complete SET-18/SET-19 design sections in `research/plan-set-theory-completion-track.md`.

Compared the design with the current `research/plan-spec.json`. Orders 689–692, IDs, categories, companions, titles and declared page prerequisites agree. The plan's empty item arrays are generated placeholders, not a direction to omit the design inventory. **No design/plan conflict was found.** No selected pair, plan file, published content, engine state, verdict, or shared ledger was edited.

Two necessary local formalization lemmas were inserted before their consistency consumers:

- `lem-jech-sochor-socks-transfer-is-uniformly-formalizable`, before `cor-zf-countable-family-of-pairs-without-choice`;
- `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable`, before `thm-formal-consistency-of-zf-with-failure-of-choice`.

They expose the verified proof-constructor obligation required by the published formal-consistency interface; a semantic model argument alone is not used as a syntactic Con implication. No page split or new prerequisite pair is required.

## Source evidence and dispositions

Complete relevant arguments were read from Jech's *The Axiom of Choice* (Chapters 4–6), Halbeisen's *Combinatorial Set Theory* (§7.1 and §17.1), and Karagila's *Forcing & Symmetric Extensions* (Chapter 10). Kleppmann's full §2.4 supplies an independent readable statement of the transfer interface and explicit nontransferability warnings. The coverage file records exact printed/PDF locators, reading ranges, every harvested named result, and dispositions.

`source-fetch-check --stamp` resolved all 5 coverage source occurrences. Existing genuine Jech and Karagila byte stamps were reused; Halbeisen and Kleppmann were newly fetched and stamped. No source failed, so no recovery/drop record or retry escalation was needed. The Cambridge Core Pincus article landing page appears only as item-level primary bibliographic provenance; the mathematical interface used by the scaffold was read in full in the accessible Kleppmann and Halbeisen treatments. The strengthened Pincus theorem is recorded as an interface/boundary remark and is not consumed by either consistency proof.

## Proof dependency and axiom audit

The manifest declares every dependency explicitly. The construction follows this order:

1. ZFA/kernel, recursive permutation action, normal filters, and hereditary symmetry;
2. the Fraenkel–Mostowski model theorem, then the basic, second Fraenkel, and ordered Mostowski models;
3. boundability, the Jech–Sochor embedding, bounded transfer, its Pincus boundary, formalization, and the socks consistency corollary;
4. forcing-name actions, symmetric systems, the symmetry lemma, canonical check names, and the full ZF inner-model theorem;
5. the basic Cohen system, orbit-set facts, support-swap theorem, Dedekind-finiteness and AC failure, then its formal consistency transfer;
6. the atom-free socks system and direct pure-ZF choice-failure theorem; B examples follow only their A suppliers.

The central hidden obligations are made explicit. The Jech–Sochor theorem depends on `thm-forcing-theorem`; it is not inferred from permutation syntax. The symmetric-model theorem proves transitivity, almost universality, and Delta-zero Separation, then derives every ZF axiom, including internal Power Set and Replacement. The basic Cohen proof distinguishes the existence of the orbit set from the nonexistence of every enumeration. The Dedekind-finiteness equivalences use the published choice-free theorem in the required directions. Each socks proof checks well-defined names, support freshness, condition compatibility, and the direction of the forced equalities.

AC bookkeeping is branch-specific:

- The pure kernel and the general Fraenkel–Mostowski and symmetric-extension ZF theorems are choice-free.
- Ambient ZFA+AC in `thm-jech-sochor-first-embedding` well-orders the atom-containing power iterate, chooses a sufficiently large regular cardinal, and supplies a pure atom-coordinate copy and bijection. The pure kernel inherits AC for the forcing recursion; the target symmetric model is not asserted to satisfy AC.
- In the basic/ordered model conclusions, `def-axiom-of-choice` is used only reductively through well-orderability.
- The two formal consistency chains use the published L interpretation to obtain a consistent ZFC (indeed ZFC+GCH) ground theory and the existing countable-transitive finite-fragment construction. No transitive model of full ZF is inferred from `Con(ZF)`.
- All support-swap arguments, the general ZF symmetric-model theorem, the Dedekind-finiteness equivalences, and both direct choice-failure branches remain choice-free.

No manifest item depends on `deferred-set-theory-beyond-choice`, any `proved_here: false` Recorded result, a forward item, or an undeclared planned supplier. The cross-batch consumer input is empty: SET-19 consumes SET-18 items within this same batch, and every other supplier is already published. The prescribed derived frontier-ledger refresh was run; the shared ledger itself was not hand-edited.

## Published Recorded debts for canonical reconciliation

These are published retirement targets, not prerequisites and not suppliers:

- `rem-fraenkel-socks-model`: published, `proved_here: false`, on `deferred-set-theory-beyond-choice`. Evidence: its statement asserts the second-Fraenkel/Jech–Sochor and direct symmetric socks conclusions without a local proof. Planned repairs are `cor-zf-countable-family-of-pairs-without-choice` for the atom-to-ZF route and `thm-atom-free-socks-model-has-countable-pairs-without-choice` for the direct pure-ZF route, with the dependency chains declared in this manifest.
- `rem-cohen-forcing-ac-independent`: published, `proved_here: false`, on `deferred-set-theory-beyond-choice`. Evidence: it records `Con(ZF) -> Con(ZF+not AC)` without the formal proof-constructor chain. Planned repair is `thm-formal-consistency-of-zf-with-failure-of-choice`, through `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` and the published formal transfer/L-interpretation suppliers.
- `rem-cohen-first-model`: published, `proved_here: false`, on `deferred-set-theory-beyond-choice`. Evidence: it records an infinite Dedekind-finite set of reals without a local symmetric-model proof. Planned repair is `thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals`, supplied by the basic Cohen orbit and support-swap items.

These debts do not block the new suppliers because none is an actual prerequisite. They must be reconciled by the owner in the canonical Recorded-retirement ledger after the new suppliers are independently reviewed and published.

## Checks actually run

Final check results are recorded below after construction. Whole-run checks are snapshots during concurrent batch work; findings owned by other batches are not repaired here.

| Check | Exit | Result |
|---|---:|---|
| Batch manifest JSON parse | 0 | Valid JSON. |
| `manifest-deps`, batch 12 | 0 | 35 items, explicit dependency arrays, 0 errors. |
| `content-policy --manifest-only`, batch 12 | 0 | 35 scoped items, 0 errors, 0 warnings. |
| `coverage-checklist`, batch 12 | 0 | 2 A pages, 43 harvested results, 0 errors, 0 warnings. |
| `source-fetch-check --stamp`, batch 12 | 0 | 5/5 source occurrences fetch-verified; 2 newly stamped. |
| `manifest-deps`, whole run | 0 | 696 items, 0 normalized, 0 errors. |
| `content-policy --manifest-only`, whole run | 1 | Two missing-dependency errors, both outside batch 12: `prop-regular-common-level-sets-are-lagrangian-submanifolds` names missing `thm-regular-level-set-theorem`, and `thm-eilenberg-maclane-spaces-represent-singular-cohomology` names missing `thm-cellular-cochains-compute-cohomology-with-local-coefficients`. Batch 12 has 0 errors and does not own either repair. |
| `validate-plan`, whole run | 0 | Declared page order is acyclic and consistent; no item cycles, forward references, B-page dependencies, or unresolved IDs among the 1,056 pages with item lists. |
| External-reference check, whole run | 0 | No hard errors; 55 pre-existing `unproved-on-published` warnings. The three relevant Recorded debts are itemized above and are not consumed by batch 12. |
| Step-1 readiness check, batch 12 | 0 | 35 current records, 0 unresolved records; all were written with the required command and no owner override. |
| Frontier dependency ledger refresh | 0 | Derived ledger refreshed and deduplicated; the batch contribution remains the empty array because there is no cross-batch edge. |
| Trailing-whitespace scan, owned handoff files | 0 | No whitespace errors. |
