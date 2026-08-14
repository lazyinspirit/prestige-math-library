# subjects-01 — apply the reconciliation amendments to the scaffolds

**You are an expert mathematician applying an adjudicated set of cross-track
amendments to thirteen prose scaffolds.**

The owner authorised the full set on 2026-08-14 ("do all of them"). The
orchestrator has already ruled on every seam. **Your job is application, not
adjudication** — where a ruling exists, apply it; where none exists, record the
question rather than inventing an answer.

## No permission prompts, ever

Owner standing rule (2026-07-30, broadened 2026-08-11). No segment of an `&&`
chain may prompt. Record a blocker; never ask.

## Read first

1. `research/subjects-01-SEAMS.md` — **§7 holds the binding rulings R-1…R-9.**
   §4 is the ownership table they amend.
2. `research/subjects-01-RECONCILIATION.md` — the routing table. Section 1 lists
   152 amendments classified `apply` / `conflicts` / `stale` / `owner`.

## What to apply

### 1. Every route classified `apply` (48 of them)

Mechanical and already assessed as correct. Apply each to the **receiving**
track's file.

### 2. The 5 routes classified `conflicts` — all five are settled by §7

Do not re-adjudicate. Apply the ruling:

- **Finite-abelian-group characters** → **R-3**: `abstract-algebra` RT mints;
  `combinatorics` CB-27/31/14c cite and do **not** mint
  `def-character-of-a-finite-abelian-group`.
- **Flatness** (the commutative-algebra and homological-algebra routes) →
  **R-1**: `abstract-algebra` MOD-3 mints `def-flat-module` and basic module
  flatness; `commutative-algebra` owns faithful flatness, the local criterion and
  flat descent and cites MOD-3. Apply the noetherian/artinian/integrality parts
  as written — those already matched §4.
- **Harmonic plane vs $\mathbb{R}^n$** (both the PDE→CA and CA→PDE routes) →
  **R-2**: PDE may state dimension-uniform theorems including $n=2$; it may not
  give a plane-specific argument or restate what CA proves more sharply by
  holomorphic methods. Add the cross-links both tracks ask for; change no theorem
  statement.

### 3. The owner-authorised `owner` routes — SCAFFOLD-LEVEL ONLY

Apply these:

- **Galois gets four A/B pairs**, using fractional placements for the extra two
  (`abstract-algebra` §II.13.3). Orders 98–101 hold two integer pairs; the extra
  two take fractional slots in the same band.
- **Retire the two empty omnibus page ids** and renumber HA-1…HA-17 in the new
  order (`homological-algebra` §27.2). These are unauthored planned ids with
  empty item lists — retiring them costs nothing and no published id moves.
- **Repoint `differential-geometry`'s anchor** to HA-17's final companion
  (§27.5, §9.2.1) — both tracks ask for the same change, so it is consistent.
- **Place CA-15 after topology and compactness** (`commutative-algebra` §7.3.3).
- **Replace DG-30's duplicate Jordan–Chevalley fallback with a citation** to
  abstract algebra's X-2 (**R-5**).
- **Include Kronecker–Weber** in the Galois/NT scope, and **GA-1 retains
  algebraic closure** — the reconciliation notes deleting it would force ambient
  normal-extension hypotheses recorded in algebra §II.13.15. Keeping it is the
  cheaper and more honest option.
- **Reconcile SCHEMA's 100-item text with the enforced 60-item ceiling** by
  recording the discrepancy in the scaffold; do **not** edit `SCHEMA.md`.

### 4. The four silent-seam rulings R-6…R-9

- **R-6 Riesz–Thorin** → `measure-theory` mints it; `complex-analysis` and
  `functional-analysis` cite. Add the item to MT's scaffold and the citations to
  the other two.
- **R-7 floor and ceiling** → real analysis owns `def-floor-and-ceiling`. Record
  it as a scaffold entry in `research/plan-realanalysis-pages.md`, and point the
  requesting tracks at it.
- **R-8 $\mathbb{C}\cong\mathbb{R}^2$ dictionary** → `complex-analysis` CA-1
  owns it; real analysis cites.
- **R-9 general $C^1$ change of variables** → `measure-theory` owns it; **make
  the MT items unconditional** — they are currently written conditionally against
  a supplier that is now settled.

## What you must NOT touch

- **Anything under `items/` or `library/`.** Two amendments concern published
  content — rehoming five published graph items, and deleting discharged rows
  from `DEFERRED.md`. **Both are excluded from your scope** and the orchestrator
  handles them separately. Do not touch `DEFERRED.md`.
- **`research/plan-spec.json`.** The splice is one global operation and it is the
  orchestrator's.
- **`SCHEMA.md`, `CLAUDE.md`** or any other normative doc.
- Any route classified `stale` (85 of them) — by definition already true.
- The deferred-sequel offers with no current consumer: the Grothendieck-category
  block, the quadratic-order track, Skorokhod $D[0,1]$. Leave them as recorded
  offers.

## How to work

Amend the **receiving** track's file so the amendment is discharged where it is
consumed, and mark the originating entry as applied so a later reader can see it
landed. Preserve each file's existing structure and voice — these are large
documents and you are editing, not rewriting.

Keep proposed ids stable wherever possible. Where R-1/R-3/R-5 move ownership, the
id itself does not change — only which track mints it and which cites it.

## Report

Write `research/subjects-01-APPLY-REPORT.md`: every route with applied /
skipped / blocked and one line of what changed; every id whose owner moved; any
route you could not apply and exactly why. A route you silently drop is worse
than one you report as blocked.
