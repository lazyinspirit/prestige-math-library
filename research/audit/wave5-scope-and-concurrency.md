# Wave 5 — computed scope, and whether waves 4 and 5 can run simultaneously

Computed 2026-08-04 at baseline commit `40f2aac`, alongside `wave4-A0.md`.

**These wave-5 manifests are a PROJECTION, not an A0 of record.** Each item entry
records its `deps` as they stand today; wave 4 will repair some of the items
wave 5 cites. Regenerate with `rounds.mjs --audit-batches --wave 5` at wave 5's
own A0 and re-read this document's coupling numbers then.

## Wave 5 scope

**12 pages · 6 A/B pairs · 209 items · 140 proof-bearing (P/V/R) · 155 in
contract scope.** 24 already-tagged items excluded at generation.

| batch | pages | items | P/V/R | contract |
|---|---|---:|---:|---:|
| `wave5-real-analysis` | `monotone-sequences-and-cauchy-completeness` (20) + `-examples` (11) | 31 | 20 | 26 |
| `wave5-topology` | five pairs, below | 178 | 120 | 129 |
| **total** | **12** | **209** | 140 | **155** |

The five topology pairs, with pair sizes (A + B):

| pair | items |
|---|---:|
| `countability-axioms-and-cardinal-functions` | 44 |
| `nets-and-filters` | 36 |
| `separation-axioms` | 36 |
| `function-space-topologies` | 33 |
| `the-topology-of-euclidean-space` | 29 |

Kinds across the wave: 45 theorem, 38 definition, 38 lemma, 35 example, 19
false-statement, 15 counterexample, 9 corollary, 6 remark, 4 proposition. Only
wave 1 has carried `proposition` items before (4 of them).

The 24 exclusions reconcile exactly to two whole `abstract-algebra` pairs that
are fully tagged: `euclidean-domains-pids-and-unique-factorisation` (8) and
`modules-and-module-homomorphisms` (16). Every wave-5 in-scope page is **100%
untagged**.

### The topology batch must be split

Five A/B pairs against the two-pair Beta capacity cap, so `wave5-topology` needs
at least three batches. **The split is essentially free:** the whole 178-item
manifest contains only **2 cross-pair dependency edges**
(`the-topology-of-euclidean-space` → `countability-axioms-and-cardinal-functions`,
`separation-axioms` → `countability-axioms-and-cardinal-functions`).

Recommended split — balanced, and it severs one of the two edges:

| batch | pairs | items |
|---|---|---:|
| `wave5-topology-countability` | `countability-axioms-and-cardinal-functions`, `the-topology-of-euclidean-space` | 73 |
| `wave5-topology-separation` | `separation-axioms`, `nets-and-filters` | 72 |
| `wave5-topology-function-spaces` | `function-space-topologies` | 33 |

Wave 5 therefore runs as **four Audit-Betas**. Confirm the cross-pair count is
unchanged before and after the split, as wave 3 did.

### Seams

`audit-manifest.mjs` over the two projected manifests:

| relationship | count |
|---|---:|
| published-backward | 1378 |
| same-batch | 501 |
| cross-batch | 28 |
| forward | 20 |

**25 of the 28 cross-batch edges point at one item**, `def-interval` on
`monotone-sequences-and-cauchy-completeness`, from all five topology pairs. The
other three are `thm-monotone-convergence` (2) and `def-monotone-sequence` (2)
— on the same page.

Of the 20 forward edges, 18 run from `monotone-sequences-and-cauchy-completeness`
into its own `-examples` companion (in-pair, and the pair is the judge's context
unit, so they are benign). The other two leave the wave:
`separation-axioms` → `countability-axioms-and-cardinal-functions` and
`separation-axioms-examples` → `hereditary-and-productive-separation`.

---

## Should waves 4 and 5 run simultaneously?

**No.** The two waves are coupled in both directions, and every mechanism that
makes concurrency safe *within* a wave assumes the coupling does not cross a
wave boundary.

### Measured coupling

**109 dependency edges run wave 5 → wave 4**, from **56 of 209 wave-5 items
(27%)**, onto **30 distinct wave-4 targets**:

| wave-4 target | in-edges from wave 5 | page |
|---|---:|---|
| `def-sequence` | 28 | `sequences-and-limits` |
| `def-compactness-variants` | 10 | `compactness` |
| `thm-algebra-of-limits` | 7 | `sequences-and-limits` |
| `lem-limit-unique` | 7 | `sequences-and-limits` |
| `lem-index-map-grows` | 5 | `sequences-and-limits` |
| `def-compact-space` | 5 | `compactness` |
| …24 more | 47 | |

By wave-5 page: `monotone-sequences-and-cauchy-completeness` 17 + 11 on its
companion, `countability-axioms-and-cardinal-functions` 11 + 5, then 3 or fewer
each on `function-space-topologies`, `nets-and-filters`, `separation-axioms`,
`the-topology-of-euclidean-space`.

**And 8 edges run backwards, wave 4 → wave 5** — all onto the single item
`def-interval`, which lives on the wave-5 page
`monotone-sequences-and-cauchy-completeness`. The citers are
`thm-compactness-under-continuous-maps`, `fs-local-compactness-is-hereditary`,
and five `compactness-examples` items plus one counterexample.

That back-edge is not a bug. `AUDIT-WORKFLOW.md` §173 says the bottom-up
guarantee is **category-local**; `compactness` is topology and
`monotone-sequences-and-cauchy-completeness` is real-analysis, so nothing
promised these two would be ordered. But it does mean wave 4 is not, in fact,
strictly below wave 5 in the cross-category graph — and `def-interval` is
simultaneously the target of 8 wave-4 edges and 25 of wave 5's 28 cross-batch
edges. It is the most load-bearing item in either wave, and it sits on the
*later* one.

### Why the coupling breaks concurrency

**1. Frozen judge contexts embed the other wave's text, and are hash-bound.**
`judge.mts` supplies each item's cited items' Statement and Remarks inside the
prompt (context block 2) and records `context_sha256` with every verdict. So the
frozen contexts of those 56 wave-5 items contain wave-4 text, and the frozen
contexts of those 8 wave-4 items contain wave-5 `def-interval`. A repair on
either side after the other's A7 freeze invalidates the hash, and
`level-coverage --verify-current-context` turns it into a hard stop demanding a
rejudge. That gate is *already* on the A10 owner queue for being structurally
hard to satisfy after a single A8 repair; two coupled concurrent waves multiply
the problem rather than amortise it.

**2. Write sets stop being disjoint.** A4 fans out to one Beta per batch, and
`AUDIT-WORKFLOW.md` is explicit that this is safe *because* "each Beta writes
only the `items/` files and the A-page summary of its own batch — no two batches
share a target file". Across two waves that no longer holds: `impact-audit`
closure after a wave-4 public-interface repair requires an evidence-based
disposition, and often a repair, for **every** downstream consumer — which for
`def-sequence` means wave-5 files a wave-5 Beta is editing at that moment.
Nothing locks them; `touchlog` snapshots are per-wave, so each wave's
`impact-audit --from` baseline would also be polluted by the other wave's edits
and could no longer attribute a change to the wave that made it. That
attribution is the exact lesson wave 2 recorded.

**3. The expensive stage gets no faster.** `judge-sweep.mjs` uses *cross-process*
file-backed pools precisely so "two resumed sweeps [cannot] exceed a model
lane's cap" — 24 DeepSeek and 16 Terra, globally. Two concurrent A7 sweeps
interleave inside the same 40 slots; they do not double throughput. The one
stage where concurrency would genuinely help is A6, the long pole, since each
wave has its own Alpha — and A6 is exactly where the cross-wave impact
dispositions in point 2 collide.

**4. The base rate says it fires.** Confirmed-fatal adjudications by wave: wave 1
4 items, wave 2 25 items, wave 3 3 items from the judges plus 11 more found by
A6 refuters. High-fan-out definitions are what those repairs land on, and this
boundary has three of them — `def-sequence` (37 in-edges counting wave-4's own
cross-batch), `def-interval` (33), `def-compactness-variants` (10+).

### What to do instead

Run them **sequentially**, wave 4 then wave 5, and handle the back-edge
explicitly:

- At wave 4's **A6**, name the 8 `def-interval` citations as a cross-level edge
  Alpha must audit against the current published text of
  `monotone-sequences-and-cauchy-completeness`, and **defer any repair of
  `def-interval` itself to wave 5**, where it is in scope and its own proof is
  being read. Auditing a citation against a target you are not authorised to
  repair is the normal cross-level case; the manifest already makes the edge
  visible.
- At wave 5's **A0**, regenerate the manifests. If wave 4 repaired `def-sequence`,
  `def-compactness-variants` or any of the other 28 targets, wave 5's Betas read
  the corrected text and the 109 edges are audited once, against final text,
  instead of twice against text in motion.

If schedule pressure genuinely forces overlap, the least-coupled unit is the
proposed `wave5-topology-separation` batch (`separation-axioms` +
`nets-and-filters`): only **5 of its 72 items** cite wave-4 scope. Even then it
shares the judge pool with wave 4's sweep, so the gain is A2/A4/A6 reading time
only, and its 5 coupled items still need their verdicts re-checked after wave 4
closes. I would not take that trade.

### The alternative worth considering

If the owner wants the real-analysis chain audited as one unit, the clean move is
not concurrency but **rescoping**: pull the wave-5 real-analysis pair
(`monotone-sequences-and-cauchy-completeness`, 31 items) into wave 4. That turns
all 8 back-edges and 28 of the 109 forward edges into same-wave edges, and audits
`sequences-and-limits` → `monotone-sequences-and-cauchy-completeness` together.
Wave 4 becomes 122 items across 4 batches; wave 5 becomes topology-only, 178
items across 3 batches — the split it needs anyway.

The cost is that a wave would no longer be exactly the site's dependency level,
which is an owner decision (2026-08-02: "the audit order must agree with the live
site"). It is the owner's call, not the orchestrator's.
