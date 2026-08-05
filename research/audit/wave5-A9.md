# Wave 5 — A9 scope-denial re-grep and published-claim decay sweep

Orchestrator decision receipt. `AUDIT-WORKFLOW.md` §A9: re-grep every repaired
file for the prose defect classes, and flag published-claim decay — claims true
when written that a later level falsifies. No pause.

## Gates

```
prosecheck.mjs              OK — no positional claim contradicts the spec
prosecheck.mjs --warnings   OK (informational)
STEP A9 CLEAR
```

Corpus-wide: 2947 files, **0 errors**, 578 warnings (221 `library-scope-denial`,
185 `count-in-prose`, 172 `count-of-this-page`). The warning classes are
heuristic and have legitimate cases; they are the sweep's reading list, not
defects.

## Scope of the re-grep

215 items changed since the wave baseline (`fcc99b5`). Split by comparing the
body below the frontmatter against the baseline blob:

| class | count |
|---|---|
| pure retag — provenance/sources/verification only, body byte-identical | 195 |
| **material — a reader, judge or dependent item can see the change** | **20** |

The 20 material repairs land on **10 pages**, and those 10 pages are the
re-grep surface:

```
foundations/cardinal-arithmetic-and-cofinality
real-analysis/monotone-sequences-and-cauchy-completeness
real-analysis/monotone-sequences-and-cauchy-completeness-examples
topology/compactness
topology/countability-axioms-and-cardinal-functions-examples
topology/function-space-topologies
topology/nets-and-filters
topology/separation-axioms
topology/separation-axioms-examples
topology/the-topology-of-euclidean-space
```

Seven warnings fall on those 10 pages. Every one was adjudicated against disk.

## Findings

### FIXED — 2 published-claim decay defects, both on `topology/function-space-topologies`

Both are the same underlying event: general topological compactness became
available earlier in the reading order, the **items** were repaired to say so
during this wave, and the **page prose** was left asserting the superseded
state. This is the defect class no mechanical gate can see — `citecheck` and
`depcheck` read `deps` and `[[links]]`, never an English claim about what the
library contains.

**D1 — the page denied a definition the library has.** The prose called
`def-locally-compact-metric-space` "the metric special case of a notion this
library does not yet define in general, and carrying a dictionary remark saying
so". Both halves were false:

- `items/def-locally-compact-space.md` is **published**, on
  `library/topology/compactness.md` — page order **255** against this page's
  **283**, so it is *earlier*, not absent.
- That item's own dictionary Remark had already been corrected to read "did not
  yet define in general, **and now does** ... General topological compactness is
  now available at this point in the reading order". The page prose contradicted
  the very remark it was describing.

Repaired to "the metric special case of a notion the library also defines for
arbitrary topological spaces, and carrying a dictionary remark recording that
agreement". No new wikilink introduced.

**D2 — the page gave a false reason for the exponential law's scope.** The prose
said the homeomorphism form needs "compactness for arbitrary topological spaces,
which is not available at this point in the reading order — the planned page
carrying it sits *below* this one and is not yet built, so no later page can
supply it retroactively."

`thm-the-exponential-law`'s own Remark, repaired in this wave, says the
opposite in terms: *"Neither is available here, and **not for want of a notion of
compactness**: compactness for an arbitrary topological space
([[def-compact-space]]) and the tube lemma for a compact factor of an arbitrary
product ... are both **developed earlier in the reading order** ... **What is
missing is the topology itself**: [[def-compact-open-topology]] is stated for a
metric domain."*

The page named the wrong obstruction and asserted a page "not yet built" that is
built and published at order 255. Repaired to match the item's Remark: the
obstruction is the topology, not compactness. `def-compact-open-topology` is
already declared on this page, so no undeclared citation was introduced.

### VERIFIED STILL TRUE — 1 scope denial, no action

`topology/separation-axioms` line 22: a normal $T_1$ space is completely regular,
"which is Urysohn's lemma and is not available at this point in the reading
order." `thm-urysohn-lemma` exists and is published — but on
`library/topology/urysohn-lemma-and-tietze`, page order **267** against this
page's **261**. The lemma genuinely *is* later. The claim is correct forward-
reference discipline, not decay. Checked rather than assumed, because the
surface reading ("the library has Urysohn") points the wrong way.

### VERIFIED ACCURATE — the count claims, no action

| page | claim | actual | verdict |
|---|---|---|---|
| `monotone-sequences-and-cauchy-completeness` | "The three false statements" | `examples:` declares exactly 3 | accurate |
| `function-space-topologies` | "Three false statements are recorded" | 3 `fs-` items | accurate |
| `separation-axioms` | "Four false statements" | 4 `fs-` items | accurate |

`monotone-sequences-and-cauchy-completeness` mentions a fourth `fs-` id
(`fs-bounded-implies-convergent`) in prose, but it is cited, not carried: it is
absent from both `items:` and `examples:`. The count is about the page's own
items and is right.

## Post-sweep verification

```
prosecheck.mjs    OK, 0 errors; library-scope-denial 222 -> 221
rendercheck.mjs   OK on the edited page — KaTeX and frontmatter parse
depcheck.mjs      OK — no cycles, all references resolve, no draft items on published pages
```

## Carried to A10

- The decay class now stands at **nine** measured instances in this wave: the
  seven already recorded at A8 (a page asserting what its own neighbouring items
  falsify), plus D1 and D2 above. Every one of them was found by a human or
  model *reading*, never by a gate. Worth an owner decision on whether a
  page-prose-versus-item-claim check is buildable.
- Both D1 and D2 were introduced by *repairing the item and not the page*. The
  wave's own repairs created them. That is a workflow gap: an item repair that
  changes what the library contains should mark its page prose for re-reading.
- `research/audit/RESUME.md` is still headed **WAVE 4**; wave 5 ran A0–A9
  without it being updated. Alpha flagged this three rounds running and it is
  the orchestrator's file, not Alpha's.
- Alpha's round-2 report recommends a 31-item rejudge of the
  `monotone-sequences-and-cauchy-completeness` pair. **Superseded by `3bbae7f`**
  and not run: coverage is now bound to each item's own `item_sha256`, the A8
  gate is CLEAR at 209/209, and none of the six round-3 adjudications was fatal,
  so nothing was edited and nothing needs rejudging.
- Alpha's report also states `research/audit/wave5-spine-audit.json` "still does
  not exist". It does — 78,054 bytes, written 00:44 at commit `f6bb1af`. The
  claim is stale; `level-coverage` consumed the receipt and passed.
