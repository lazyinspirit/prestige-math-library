# Braid groups and symmetric-group representations: planning commission

Owner request, 2026-09-07: rename the displayed Representation theory category
to **Representation theory of groups**, commission separate prose scaffolds
for **Braid groups** and **Representation theory of symmetric groups**, and
integrate both into future-frontier planning after they are finished.

## Deliverables and delegation

Each scaffold has one GPT-5.6 Sol lead at high reasoning effort. Each lead must
launch seven distinct GPT-5.6 Terra research agents at high effort: three for
authoritative full textbooks and four for relevant arXiv articles and lecture
notes. The four-agent concurrency limit requires waves.
Both leads can audit and draft concurrently. While both are active, one Terra
slot is available: braid researchers have priority, then symmetric-group
researchers. A finished lead frees a second research slot. Reports must
distinguish full-text retrieval from the sections actually read.
Source evidence includes bibliographic identity, authoritative URL, local cache
path, SHA-256, page count or full-body validation, exact locators, and a harvest
of statements and proof routes. Abstracts and previews do not count as full text.

The braid lead owns `plan-braid-groups-track.md` and `braid-groups-planning/`.
The symmetric-group lead owns `plan-symmetric-group-representations-track.md`
and `symmetric-group-planning/`. Downloaded source texts stay in an ignored or
external cache. Research reports, concise source manifests, proposed inventory,
and planning metadata are retained as evidence.

## Scope and ownership

The braid scaffold must establish the equivalence of Artin presentations,
geometric braids, punctured-disk mapping classes, and fundamental groups of
configuration spaces. It must distinguish pure braids, ordered configurations,
boundary conditions, and isotopy conventions. It then develops representations
and substantial connections with braided monoidal categories and categorification.

Both leads inspect actual library status and existing plan/scaffold inventories.
Published prerequisites are inherited; draft and unbuilt suppliers are explicitly
identified. Existing category theory owns the monoidal, strictification, braiding,
rigidity, and tensor-category foundations. Existing representation-theory RG-8
through RG-11 own Young diagrams/permutation modules, Specht modules, branching,
and hook-length/RSK foundations. The symmetric-group scaffold builds on those
planned pages; any proposed ownership move needs explicit reconciliation before
integration. Existing pages and item identities are preserved during this work.

Cross-track Hecke and categorification interfaces require a single owner and an
acyclic dependency direction. Prerequisites must reflect mathematical use rather
than an artificial sequential chain. Missing infrastructure is scaffolded or
reported explicitly, not replaced with an unsupported theorem citation.

## Integration contract

Each lead supplies `pages.json` in its planning directory, with exact page IDs,
titles, category, A/B kind, companion, and page-level prerequisites. Provisional
item inventories remain in design evidence; future unbuilt plan rows have empty
`items` arrays until the normal build scaffolds them. A pages contain fewer than
60 proposed items and B companions are dependency leaves.

After both leads finish, the supervising agent reconciles overlaps, checks
source evidence and proof coverage, and registers future rows in
`research/plan-spec.json`. Existing rows, orders, active-run manifests, and runtime
state are preserved. Validation must check unique identities, resolved and
backward prerequisites, acyclic dependencies, companions, and frontier discovery.
This commission does not author or publish library mathematics or restart a run.

## Verified implementation status

The app's shared `categoryTitle` override now returns the requested display name
for the existing `representation-theory` slug. A direct execution verified the
returned title. No URL or existing page identity changed. The implementation is
in the sibling app checkout, `web/lib/library-categories.ts`; deployment is not
part of this commission.

Both Sol leads have been launched as `braid_scaffold` and `symmetric_scaffold`.
Research and scaffold completion and final integration remain pending. The
display-title change is committed in the app checkout as `ac3339f`.

## Active continuation

The owner resumed this commission in the main conversation on 2026-09-07.
The previous side conversation could not launch its research team; its source
manifest and initial audit are preparatory evidence only. The main conversation
verified that no earlier lead was active, then launched `/root/braid_scaffold`
and `/root/symmetric_scaffold`, both on GPT-5.6 Sol at high effort. The single
available researcher slot goes to the braid lead first, then to the
symmetric-group lead. All fourteen Terra assignments remain required.

At continuation, the provisional supplements contain 28 braid pages and 30
symmetric-group pages. Their page IDs do not collide with the 1,360 existing
plan rows, their prerequisites resolve in the combined graph, and none depends
on a B page. These checks establish structural consistency only; mathematical
ownership, source coverage, and final dependency review remain pending.
Existing plan orders end at 716. Preserve all existing rows, including the
active build's uncommitted changes, when appending reviewed future rows.

The owner additionally requires **no significant mathematical gaps or inadequate
dependencies** in either scaffold. This is a completion gate, not an aspirational
audit: central results cannot be removed, weakened, or relegated to remarks to
avoid supplying their proof infrastructure.

On 2026-09-07 the owner also authorised enriching the existing Homological
Algebra prose scaffold. The supervising agent owns edits to
`plan-homological-algebra-track.md`: shared graded-bimodule, Grothendieck-group,
bounded tensor, and Hochschild foundations belong there; braid-specific link
invariance and symmetric-group-specific categorification remain with their
respective tracks. Existing authored items are inherited, not re-minted.

Concurrent writes from outside this collaboration tree appeared in the canonical
`symmetric-group-planning/` directory. Their agent identities have not been
verified here. The local symmetric lead initially paused overlapping writes and
produced independent review in `symmetric-group-planning-main-review/`.
By approximately 06:00 UTC the canonical files had been stable since 05:38 and
the external roster reported all seven researchers complete. The local lead may
now reconcile targeted corrections using a fresh content/mtime check before
each patch; any intervening change triggers another overlap review. Preserve
the external contributions and roster, and never attribute those researchers
to this collaboration tree. Actual remaining local research assignments should
close the identified gaps using existing source caches, not repeat downloads.

The separate `frontier-33` controller is active in
`.autopilot/frontier-33`; the 06:18 UTC check found `6c-cross` source repairs.
The audit-metadata pre-certification-window repair and source jobs for batches
13/14 completed. The next URL sweep found further transient failures and the
engine dispatched `reharvest-3-b20` at 06:12. No root runtime mutation was needed.
Continue ten-minute supervision; inspect any exhausted or non-closing recovery.

HA-18–HA-23 and their twelve page records are reviewed in the canonical HA
scaffold and `homological-algebra-enrichment/pages.json`. The 59 proposed A
items pass exact-ID, page-cycle, companion, supplier reachability and new B-leaf
checks. Both leads independently reviewed the shared interfaces. Root expanded
graded Fitting/Krull–Schmidt/cover proofs and corrected the right-enveloping bar
model and cyclicity sidedness. The HA enrichment is ready for the final combined
splice; braid/symmetric proof obligations remain separate and unresolved.
All seven actual braid researchers have completed. The symmetric lead's first
new Terra launch returned `agent thread limit reached` despite the final braid
researcher reporting completed; resolve available capacity without attributing
the external roster to this tree. Root also added the missing Schensted
longest-subsequence theorem with its four local supporting items to RG-11, its
existing owner, using the complete original article (source receipt in that
scaffold). No live-plan registration was changed.
Next actions: finish braid lead closure (including Soergel Hom-formula suppliers),
reconcile both inventories with HA,
close the symmetric proof/dependency ledger (including Ariki's missing supplier
chain and the misidentified third textbook), validate evidence and proposed
inventories, then integrate future pages. No scaffold is certified gap-free yet.

The owner resolved the advanced-scope decision on 2026-09-07 by directing the
quantum-group and Kazhdan--Lusztig supplier scaffolds to be expanded first. Root
now owns `plan-quantum-groups-track.md`, `quantum-groups-planning/`,
`plan-kazhdan-lusztig-track.md`, and `kazhdan-lusztig-planning/`. Each supplier
track contains eight A/B pairs with empty future-page item arrays, a reviewed
proposed A/B inventory (127 quantum-group and 126 Kazhdan--Lusztig identities),
a source manifest, and an explicit future-frontier splice contract.

The nondegenerate chain is fixed as cyclotomic KLR highest-weight/global-basis
categorification, then the symmetric track's type-A cyclotomic Hecke--KLR
isomorphism, then Ariki decomposition numbers. The category-O chain remains a
separate degenerate theorem. The source audit closed the q-wedge/partition seam
using KMPY plus Leclerc--Thibon, the `e=2` KLR basis seam using Rouquier's
arbitrary-`Q_ij` realization, and the higher-level Schur--Weyl seam using the
complete Brundan--Kleshchev proof. Ringel duality, finite-W PBW/Skryabin,
Whittaker full faithfulness, and stable-range/idempotent-corner statements are
now explicit proposed items rather than hidden imports.

At that checkpoint, the supplier page and item IDs were frozen for
symmetric-lead reconciliation, and combined registration waited for the local
symmetric lead's seven actual review assignments and hard gap/dependency audit.
The completed outcome is recorded below.

## Final integration, 2026-09-07

The supplier-first expansion and both consumer scaffolds are complete. The
canonical future plan now contains 114 new empty-item rows at orders 717--830:
12 HA enrichment pages, 38 braid pages, 16 quantum-group pages, 16
Kazhdan--Lusztig pages, and 32 symmetric-group-representation pages. Their five
machine inventories contain 933 proposed items. The symmetric block uses the
existing `representation-theory` category slug.

The supervising audit is recorded in
`research/prose-scaffolds-future-frontier-audit.md`. It validates exact IDs,
mutual companions, the 60-item A-page ceiling, B-leaf status, resolved and
backward page prerequisites, proposed item ordering and declared page reach,
acyclicity, source receipts, plan/manifests agreement, canonical plan
validation, and actual frontier discovery. Full discovery has no blocked pair;
the next-frontier selector's publication-threshold check also passes.

The hard no-gap gate for braid and symmetric-group representations is closed.
This certification follows the repaired cross-level audit, not the earlier
provisional page-only checks: QG-6 consumer edges are explicit, stale SYMR B
requirements no longer deadlock atomic pairs, and the LKB compact-replacement
lemma precedes its consumer. Future extensions named in the track documents
remain optional frontiers rather than hidden prerequisites.
