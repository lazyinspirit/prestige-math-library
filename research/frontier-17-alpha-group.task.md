> **Generic group task.** Your batches are named in the "This dispatch"
> section appended below — work from that, and write your reports to the
> `research/frontier-17-alpha-<your-group>-…` paths for your own group label.

# Group Alpha — step-3 scaffold review, the batches named in your dispatch

Read every pair's `.pages.json`, `.notes.md` and `.coverage.json` together,
against its design section, and return a `sufficient`/`insufficient` verdict
per pair, naming for each `insufficient` the exact results to add and the
source carrying them.

You may repair the scaffold yourself where that is cheaper than routing
(owner, 2026-08-16). At this step no proof exists, so your repair licence is
the last two forms only — correct a false Statement or title, or add
intermediate lemmas — inferring the route from `title`, `strategy` and `deps`.
Step 3 is the last point where thinness costs a scaffold edit rather than a
rewrite.

**Write:** `research/frontier-17-alpha-<your-group>-step3-scaffold-review.md`,
findings numbered `B<batch>-1, B<batch>-2, …`, stable ids, a severity table,
and per-pair verdicts. **And** the machine half:
`research/frontier-17-alpha-<your-group>-step3-verdicts.json`, which is the only
artifact the closure gate reads.

## The run at a glance

| batch | category | pairs | Beta task |
|---|---|---|---|
| 1 | number-theory, group-theory | `sums-of-two-squares`<br>`frattini-subgroups-and-the-burnside-basis-theorem` | `research/frontier-17-beta-1.task.md` |
| 2 | real-analysis | `trigonometric-and-oscillatory-examples-in-several-variables` | `research/frontier-17-beta-2.task.md` |
| 3 | abstract-algebra | `the-galois-correspondence`<br>`modules-over-a-pid-and-canonical-forms` | `research/frontier-17-beta-3.task.md` |
| 4 | real-analysis | `constant-rank-submersions-and-regular-level-sets`<br>`regular-surfaces-and-surface-integrals` | `research/frontier-17-beta-4.task.md` |
| 5 | real-analysis | `volumes-of-elementary-solids-and-solids-of-revolution`<br>`the-real-gamma-and-beta-functions` | `research/frontier-17-beta-5.task.md` |
| 6 | measure-theory | `outer-measure-and-the-caratheodory-extension-theorem` | `research/frontier-17-beta-6.task.md` |
| 7 | topology | `applications-of-the-fundamental-group` | `research/frontier-17-beta-7.task.md` |
| 8 | complex-analysis | `the-identity-theorem-and-the-open-mapping-theorem` | `research/frontier-17-beta-8.task.md` |
| 9 | category-theory | `monadicity-and-becks-theorem` | `research/frontier-17-beta-9.task.md` |

Each Beta task file names the pages, their orders and the design section that
governs the pair. **The design section is where that pair's traps are stated**
— open it, and check the scaffold against them explicitly. They are the known
defect classes for those specific pages, and a scaffold that trips one is
`insufficient` however rich it looks.

## What to check, every batch

- **Against the design**: a route the design decided and the scaffold
  contradicts; a result the design lists and the scaffold drops; a
  prerequisite the design names that is outside the page's `requires` closure.
- **Against `plan-spec.json`**: `order` and `requires` disagreements between
  the design document and the spec. A backward re-pin you verify from disk may
  be applied to `plan-spec.json` directly — run
  `node tools/validate-plan.mjs research/plan-spec.json` after, and record it.
  A forward edge is a reading-order change and is owner-only: record it as
  blocked.
- **A second proof of a published theorem is welcome** (owner, 2026-08-20), and
  a scaffold that reduced one to a bare pointer is thinner than it needed to be.
  Where a page's development genuinely reaches a result the library already
  proves by another route, the fuller form — a theorem with its own proof, a
  distinct id naming the route, and a cross-reference each way — is the
  preferred one. Adding it is inside your step-3 licence. The same proof written
  twice is not, and neither is an invented claim.
- **Size**: an A page whose scaffold exceeds 60 items is a SPLIT, decided now.
- **Provenance order**: no `ai-generated` statement or construction may be a
  load-bearing scaffold dependency. `literature-derived` and `ai-altered` may
  be; a published item with no component provenance is `legacy-unclassified`
  and must be opened and either confirmed or sourced before it is relied on.
- **The harvest, for faithfulness.** `coverage-checklist.mjs` checks it is
  structurally complete and true of disk. You check the enumerated headings
  are really that source's own headings over the range the Beta says it read,
  and that every disposition is about that specific result.
- **Two independent treatments per pair**, at least one a textbook, monograph
  or full lecture-note set with a harvestable table of contents. Wikipedia and
  encyclopedia entries are convention tiebreakers, never a pair's backing.

## Also standing (from `briefs/alpha.md`)

Component-provenance labels checked per item; every published item the
scaffold cites opened on disk; declines named by page id, never by prose.

**No permission prompts of any kind**, including inside an `&&` chain.
