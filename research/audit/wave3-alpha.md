# Wave 3 — Audit-Alpha report (step A6)

Alpha: `claude-opus-5`, dispatched as an Anthropic subagent of the orchestrator
(owner rule 2026-08-03). Independent readers and proof-refuters are **GPT 5.6
Sol** at `xhigh` with a 1,000,000-token context window — deliberately a different
family from Alpha, so no repair Alpha authors is certified by Alpha's own model.

---

## 1. Recovery receipt (owner rule 2026-08-02)

Completed 2026-08-04 before any audit action was taken.

### Read in full, from disk

| file | what it bound |
|---|---|
| `briefs/audit-alpha.md` | my brief; triage rule; the 30-second threshold; A6 duties 1–7; the A8 fatal-only rule and `step8-guard` invocation |
| `AUDIT-WORKFLOW.md` | normative workflow; §6 provenance determination and the positive-determination standard; §8 gates and tool changes; §9 repair protocol; §11 decisions D1–D5, R1–R3 |
| `CLAUDE.md` | repo hard rules, incl. no-shell-permission-prompts, the published-audit delegation, and the frozen presentation |
| `SCHEMA.md` | §2 immutable ids; §3 the provenance/verification contract; §6 page contract; §7 acyclicity; §8 mechanical publish checklist |
| `QUALITY-CONTROLS.md` | proof-contract shape, boundary worksheet, finite smoke, high-risk routing, impact closure |
| `research/audit/RESUME.md` | the durable prior-session record (967 lines), waves 0 → 3 |
| `research/audit/wave3-A0.md` | scope of record, baseline, seams, the 33 later-wave topology edges |
| `research/audit/wave3-A3.md` | **the adjudication of record** — what was approved and what was declined |
| `research/audit/wave3-combinatorics-graphs.findings.md` | Beta batch notes + A4 applied record |
| `research/audit/wave3-combinatorics-incidence.findings.md` | same |
| `research/audit/wave3-foundations.findings.md` | same |
| `research/audit/wave3-real-analysis.findings.md` | same |
| `research/audit/wave3-topology.findings.md` | same |
| the five `wave3-*.provenance.jsonl` | 224 ledger rows, 63 distinct URLs |
| the five `wave3-*.proof-contracts.json` + merged `wave3-proof-contracts.json` | 174 contracts |
| `research/audit/wave3-touches.json`, `wave3-audit-manifest.json`, `wave3-impact-template.json`, `genrisk.json` | receipts and templates |

### Verified from disk, not from any agent report

```
HEAD                     136fb35  (baseline, matches wave3-A0.md)
git status               228 modified + 26 untracked; 0 files outside audit scope
  modified items/        224   (exactly the manifest scope)
  modified library/      1     (library/foundations/ordinal-arithmetic.md)
  modified other         3     (briefs/judge-conventions.txt, research/audit/RESUME.md,
                                research/audit/genrisk.json)
touchlog snapshots       baseline (2026-08-03T17:59Z), pre-A4, post-A4 — 2,767 item
                         hashes each, 3 snapshots, NO per-item snapshots (the wave-2
                         defect is not repeated)
depcheck                 exit 1, 17 errors, all `published-unaudited`, all in scope
risk-report              0 errors, 174 routed, 99 CRITICAL + 34 HIGH
genrisk                  56 seeds, 10 load-bearing (largest cone 9), 2 new pending
```

**Independent classification of the 224 changed items, computed by me from the
git diff rather than taken from a Beta report** (script: frontmatter split, then
per-top-level-key comparison; a change is *pure* only if the body is
byte-identical AND every changed key is `provenance`/`sources`/`authorship`/
`generation`):

- **205 pure retag** (204 items + 0 pages),
- **20 material** — 19 items + `library/foundations/ordinal-arithmetic.md`.

### Inherited open action, corrected at the receipt

The orchestrator's handoff named **17** items awaiting certification, taken from
`depcheck`'s `published-unaudited` class. My own diff classification finds
**19 materially changed items**. The two extra are

- `fs-countable-union-theorem-of-zf`
- `fs-infinite-has-countable-subset-in-zf`

Both had a Fact deleted from `## Facts & Assumptions` and their Remarks rewritten
at A4, and both **retained a `verification.verified` block dated 2026-07-26**
(`model: claude-opus-5`, `scope: page`) that certified the pre-repair text. They
therefore never entered `depcheck`'s `published-unaudited` class and were invisible
to the handoff. Under SCHEMA §3 the test is "would the judge have seen something
different", and it plainly would have: a labelled Fact is gone and two Remark
paragraphs are rewritten. A stale `verified` is the same dishonesty as a stale
`judge`. **Certification scope for A6 is therefore 19 items + 1 page, not 17.**
Recorded as finding **A6-F1** in §3.

### Exact next action taken

Dispatched ten read-only GPT 5.6 Sol processes — four repair-certification
readers (foundations, topology, combinatorics, real-analysis) and six
proof-refuters (foundations, topology, combinatorics-graphs,
combinatorics-incidence incl. both new `ai-generated` seeds, real-analysis
countability, real-analysis inequalities) — then began the URL liveness sweep,
the cross-edge audit, the genrisk dispositions and the impact classification
myself.

---

## 2. URL verification (A3's first routed item)

Every URL was fetched by **me**, from the orchestrator-side network, with a
30-second cap, a browser user-agent and redirect following. The Betas could not
do this — their sandboxes have no outbound DNS — so this is the first independent
liveness check of wave 3's reader-visible sources.

I checked **two** populations, not one. A3 routed "the 63 URLs the A4 retag will
write"; I also checked the **52 legacy URLs A4 preserved but never verified**,
because a dead reference on a published item breaks SCHEMA §8 whoever wrote it.

### (a) The 63 ledger URLs written by A4 — 57 live, 6 problems

| URL | result | items | disposition |
|---|---|---|---|
| `https://www.jirka.org/ra/realanal-may07-18.pdf` | **404** | 13 (real-analysis) | **replaced** by `https://www.jirka.org/ra/realanal.pdf` — 200, `application/pdf`, 1.9 MB, the same work (Lebl, *Basic Analysis I*) at its current path |
| `https://maths.qmul.ac.uk/~pjc/notes/nt.pdf` | connection reset, then **200** on retry | 3 (incidence) | **kept.** The failure was transient; the URL resolves 200 via redirect to `https://webspace.maths.qmul.ac.uk/p.j.cameron/notes/nt.pdf`. Recorded so a future sweep does not re-open it |
| `https://people.cas.uab.edu/~jcmayer/TopNotes.pdf` | **404** (and `~jcmayer/` itself 404s) | 3 (topology) | **removed** |
| `https://people.cas.uab.edu/~jcmayer/Components.pdf` | **404** | 1 (topology) | **removed** — and see the finding below |
| `https://math.wvu.edu/~jwojciec/.../node-11.html` | **connect timeout**, https and http, twice | 3 (topology) | **removed** — see the finding below |
| `https://math.dartmouth.edu/~rmaguire/.../lecture_20.pdf` | **404** (and its directory 404s) | 1 (topology) | **removed** |

The other 57 returned 200, including every one of the high-fan-out sources:
Diestel Ch.1 (31 items), Wikipedia *Ordinal arithmetic* (29), the White Rose
thesis (26), Hunter (21), Stanley `ec1.pdf` (18), Wikipedia *Connected space*
(14), Moosa (13), ISI §4.1 (12), Lebl `sec_basicset` (12), Open Logic Project (10).

**`node-9`/`node-11` resolved, per A3's explicit instruction.** `node-9.html`
was already gone from the ledger — the topology Beta had replaced it at A4 with
Mayer's `Components.pdf`. I could reach **neither** WVU page from here, over
https or http, on two attempts with a 12–15 s connect timeout, while every other
host in the sweep answered. I do **not** record the host as dead: the wave-2
lesson is not to overclaim from a network failure, and the Beta's model-side
route reported 200. What I record is that **I could not open it**, and the brief's
rule is that a URL I cannot open is replaced or removed with a note. Removed.

**A6-F2 — the A4 replacement for `node-9` was itself dead.** The topology Beta
replaced the unreachable `node-9.html` with `https://people.cas.uab.edu/~jcmayer/Components.pdf`,
citing its Proposition 3.9. That URL is **HTTP 404**, and so is the whole
`~jcmayer/` directory, which also kills `TopNotes.pdf` on three further items.
The Beta did nothing wrong — it had no DNS and said so — but this is the exact
failure mode the standing owner-queue item "link liveness as a gate" exists for,
now in its **fifth** consecutive wave, and it is the first time a *repair* has
introduced a dead link rather than merely preserving one.

**Every affected item keeps a live, on-topic source.** I verified the survivors
by fetching the Wikipedia source text and grepping for the exact cited content,
not merely for a 200:

- *Locally connected space* contains verbatim "A space is locally connected if
  and only if for every open set U, the connected components of U (in the
  subspace topology) are open" — precisely what the three `node-11` items cite.
- *Connected space* contains the quasi-component result "Γ_x ⊂ Γ'_x where the
  equality holds if X is compact Hausdorff or locally connected", precisely what
  `thm-quasicomponents-contain-components` needs after `Components.pdf` went.
- *Box topology* contains "The box topology is neither compact nor connected"
  plus its failure-of-connectedness example, for the Dartmouth removal.
- *Linear continuum* and *Order topology* cover the three `TopNotes.pdf` items.
- Bankston's notes (200) remain on all three local-connectedness items.

### (b) The 52 legacy URLs A4 preserved — 51 live, 1 dead on 19 items

**A6-F3 — `https://en.wikipedia.org/wiki/Topology_(Munkres_book)` is a 404 carried
by 19 published in-scope topology items.** I confirmed against the MediaWiki API
that the article does not exist (`"title": "Topology (Munkres book)", "missing": ""`);
"Topology (book)" is also missing. It is simultaneously dead **and** an instance
of the "about-the-book URL" pattern already on the owner queue since wave 0 — a
link to a page *about* a book rather than to the cited content.

Disposition: **entry removed from all 19.** A reference-entry removal is not an
owner-only deletion (those are item deletions, id renames and reading-order
changes, `AUDIT-WORKFLOW.md` §2 R1); it is class (c) metadata, the same class as
A3's approved dead-URL replacements. I verified mechanically that **no item is
left with zero references**, so the `source-backed-provenance-uncited` rule still
holds for every `ai-altered`/`literature-derived` label. The 19 are:
`def-order-topology-on-a-linearly-ordered-set`, `def-connected-space`,
`thm-connectedness-characterisations`, `cor-connected-subsets-of-the-line`,
`thm-continuous-image-of-a-connected-space`, `cor-intermediate-value-theorem-topological`,
`thm-unions-of-connected-sets`, `thm-closure-of-a-connected-set`,
`thm-product-of-connected-spaces`, `def-connected-component-and-quasicomponent`,
`thm-components-partition-and-are-closed`, `def-path-connected`,
`def-locally-connected`, `thm-locally-connected-iff-components-of-open-sets-are-open`,
`thm-path-connected-implies-connected`,
`thm-connected-and-locally-path-connected-implies-path-connected`,
`thm-a-linear-continuum-is-connected`, `def-the-long-line`,
`fs-an-intersection-of-connected-sets-is-connected`.

The matching `urls` arrays in `wave3-real-analysis.provenance.jsonl` and
`wave3-topology.provenance.jsonl` were updated in the same pass, so ledger and
item agree. `grep` confirms **0** residual occurrences of any of the six dead
URLs in `items/` and **0** in any of the five ledgers.

**Total reference-metadata repair: 34 items touched** (21 by a removal, 13 by the
`jirka.org` replacement). All are pure `sources`-only edits with the Definition,
Statement, Facts, proof and Remarks byte-identical; they are classified `pure` in
§7 and, per SCHEMA §3 ("adding a citation that changes no claim does not count"),
they do not void any surviving `judge` or `audited` stamp.

---

## 3. Repair certification and refuter adjudication

### 3.1 What I dispatched

Thirteen read-only **GPT 5.6 Sol** processes at `xhigh` with a 1,000,000-token
context window, `--ask-for-approval never --sandbox workspace-write`, each
carrying the no-shell-permission-prompts rule verbatim and forbidden every
git state-changing command (they share one working tree). Each was told its
sandbox has no DNS and that a network failure is never evidence about a source.

| lane | job | items |
|---|---|---|
| `cert-foundations` | certify 5 foundations repairs + the page + decide A3's question (b) | 6 + 1 question |
| `cert-topology` | certify 7 topology repairs | 7 |
| `cert-comb` | certify 4 combinatorics repairs | 4 |
| `cert-ra` | certify 3 real-analysis repairs + the stale-stamp question | 3 |
| `found` `topo` `comb` `incid` `ra-count` `ra-ineq` | proof refutation, priority tiers (b)(c) then CRITICAL | 82 |
| `unc1` `unc2` `unc3` | proof refutation, the remaining routed items | 45 |
| `cert-alpha` | certify the six repairs **Alpha itself authored**, plus the reference sweep | 6 + sweep |
| `edges1` `edges2` `edges3` | audit every cross-batch / cross-level edge (§6) | 1,057 rows |

No author certified its own repair. Alpha's own repairs went to a Sol lane, which
is a different family from Alpha — the reason the brief keeps readers on Sol.

### 3.2 Certification of the Beta repairs — 19 items + 1 page

**All 19 Beta repairs and the page repair are CERTIFIED**, each on the current
on-disk text, by an independent Sol reader that opened every dependency and
quoted it verbatim. Two of the twenty readings additionally surfaced a defect
that A4 did not introduce but did leave standing; both are adjudicated below.

| item | certifier verdict | what the reader actually checked |
|---|---|---|
| `def-cofinal-subset-of-an-ordinal` | clean | reproduced the α=1, C={0} refutation of the deleted equivalence; confirmed the retained strict form is exactly the negation of the cofinality clause under trichotomy; **checked all 14 direct consumers and both page citations** — none relied on the deleted clause. `lem-cofinality-is-well-defined` quotes the corrected form verbatim; `thm-countable-subsets-of-omega-one-are-bounded` and `ex-the-long-line-in-the-connectedness-hierarchy` each supply their own strict bound |
| `fs-ordinal-addition-is-commutative` | clean | ω+ω=ω+ω and 0 commuting with everything refute the old "exactly the finite one"; new wording licensed by `thm-ordinal-arithmetic-agrees-on-omega` ("m+n = m+_ℕ n") plus `lem-nat-add-commutative`; `[L5]` had no numbered use |
| `fs-ordinal-multiplication-is-commutative` | clean | `[L5]` had no numbered use; the relinked `lem-ordinal-product-as-an-order-type` states "α·β is β copies of α", matching the successor clause of `def-ordinal-multiplication` |
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | clean | `[L5]` was wholly unused at HEAD; the Counterexample closes through `[L3]` ("No at most countable subset of ω₁ is cofinal in ω₁"); the corrected cofinality definition still licenses `[L1]` and step 1.1; ACω is explicit in title, Statement, Given and the cited theorem |
| `thm-cantor-normal-form` | clean | old claim false — step 2.1's absorption law and step 3.1's closure both break at base 2 (1+2=3≠2, and 1,1<2 with 1+1≮2); new claim true, general base-γ expansions existing by division-with-remainder and carrying, which is not literal substitution |
| `library/foundations/ordinal-arithmetic.md` | clean | the exponent-law attribution now matches clause (e) of `thm-ordinal-exponent-laws` verbatim; the bounded companion sentence checked against **all five** companion false statements individually |
| `ex-convex-subsets-of-rn-are-path-connected` | clean | `def-p-norms-on-rn` verbatim disclaims normhood ("proved there and is not assumed here"); the added lemma supplies normhood for ‖·‖_p and ‖·‖_∞ **and** the d₁/d₂/d_∞ dictionary, covering every clause of [A5] for the three norms the item actually uses |
| `lem-the-oscillating-zigzag-curve` | clean | step 3.1 really establishes only continuity of g; the repaired chain A3 (projections continuous) → A2 (restriction) → A4 (real image connected, order-convex) is exact; the reader also re-read claims 4–7 in full |
| `fs-a-connected-space-is-path-connected` | clean | deleted `[L3]` had no numbered use; surviving labels not renumbered; replacement target states "If X is path-connected then X is connected. The same holds for a subset" |
| `fs-the-closure-of-a-path-connected-set-is-path-connected` | clean | same shape; `thm-closure-of-a-connected-set` states exactly what the new Remark attributes to it |
| `fs-a-connected-space-is-locally-connected` | clean | same shape; `thm-locally-connected-iff-components-of-open-sets-are-open` states both the open-components clause and the clopen consequence |
| `fs-an-intersection-of-connected-sets-is-connected` | clean | deleted `[A6]` unused; both replacement targets remain in `deps`; steps 1.4, 2.1, 2.2 re-verified |
| `ex-the-oscillating-zigzag-curve-computed` | **FATAL → repaired** | see A6-F4 |
| `lem-edge-addition-to-a-tree` | clean | uniqueness of the created cycle really is derived from connectedness, acyclicity and unique paths; every cycle in T+uv must use uv, and deleting it returns the unique u–v path |
| `lem-fundamental-cut-of-a-spanning-tree` | clean | `[F1]` unused; every tree-ness conclusion licensed by `lem-edge-deletion-in-a-tree` ("T−e has exactly two connected components, each a tree") and `def-spanning-tree`; a cycle through the single crossing edge f would need a second crossing edge |
| `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree` | clean | **the load-bearing one.** The symmetric-difference argument proves uniqueness with no cut property: `lem-fundamental-cycle-of-a-spanning-tree` supplies the cycle, `lem-spanning-tree-exchange` the exchange, `lem-finite-set-has-max` the extremal choice; **no step tacitly needs the deleted `[L1]`** |
| `cex-a-non-locally-finite-poset` | clean | `lem-pigeonhole` claim 4 verbatim "ℕ ≉ n for every n ∈ ℕ" and `def-countable` "A is finite if A ≈ n for some n" together license [F1] exactly; the two definitions alone would not; step 1.2 is the sole use |
| `fs-countable-union-theorem-of-zf` | clean, **stamp stale** | `[L2]` unused; refutation closes on [A1]+[L1]; `thm-countable-union-of-countable` verbatim assumes ACω and proves exactly this U; conditional-on-Con(ZF) framing intact |
| `fs-infinite-has-countable-subset-in-zf` | clean, **stamp stale** | `[A2]` unused; the not-proved-here qualification survived verbatim; the Dedekind-infinite Remark licensed by claim 5 of `lem-pigeonhole` quoted in full |
| `rem-real-exponents-deferred` | **FATAL → repaired** | see A6-F5 |

**A6-F1 (from §1) is closed.** The two `fs-` items' retained 2026-07-26
`verification.verified` blocks were adjudicated *stale* by the independent
reader on the SCHEMA §3 test, in its own words: "The old page-scope reader saw a
formal Fact `[L2]`; the current reader sees that Fact removed and its assertion
relocated into the Remark. That changes the phase-stratified fact/source
contract, not merely typography." I deleted both blocks. Certification scope
became 23 items once my own repairs are counted, and `depcheck` now reports
exactly those 23 as `published-unaudited` pending my stamps.

### 3.3 Fatal findings and my adjudications

Seven concrete defects survived A4 and were confirmed by me from disk. Six are
in wave-3 scope and are repaired; one is outside scope and goes to the owner
queue. Every one was found by a Sol lane, not by Alpha — which is the point of
keeping the refuters cross-family.

**A6-F4 — `ex-the-oscillating-zigzag-curve-computed`, inaccurate citation in a
Remark. CONFIRMED FATAL (dependency_citation). Repaired.**
The Remark says "every neighbourhood of a point of Σ meets G by
`thm-closure-of-a-connected-set` and claim 2 of `lem-the-oscillating-zigzag-curve`".
That theorem states only "Let A ⊆ X be connected and A ⊆ B ⊆ Ā. Then B is a
connected subset of X" — it concludes connectedness and says nothing about
neighbourhoods. The claim is true and the right target was already in `deps`:
`thm-closure-characterisation-top` claim 1 gives "x ∈ Ā" iff "N ∩ A ≠ ∅ for
every neighbourhood N of x". **The defect pre-dates A4** — at HEAD the sentence
read "by [A6] and claim 2", and `[A6]` was the same wrong theorem; A4's approved
inlining of the Fact as a wikilink only made it visible. Repair: cite
`thm-closure-characterisation-top`, claim 1. No `deps` change, no claim change.

**A6-F5 — `rem-real-exponents-deferred` repeats a false published theorem.
CONFIRMED FATAL. Repaired here; the root cause is owner-queued.**
A4's approved decay repair added "…and `thm-rational-supremum-power-agrees-with-exp`
identifies the rational-supremum construction with the exponential construction."
The citation is faithful — that *is* the theorem's Statement — but **the theorem
is false for bases 0 < a < 1**, and I verified this myself from disk:
`def-real-power-by-rational-supremum` sets, for 0 < a < 1,
`a^{[x]} := 1/(a^{-1})^{[-x]}`. Since (a⁻¹) > 1, the inner value is
(a⁻¹)^{−x} = a^{x}, so the definition yields **a^{−x}**, not a^{x}. Numerically,
a = ½, x = 1 gives 1/(2^{[−1]}) = 1/(½) = **2**, while a^x = ½. The theorem's own
step 3.1 ("apply step 2.1 to a⁻¹ > 1 and −x, then use the reciprocal definitions")
produces exactly that wrong value. The intended definition is
`a^{[x]} := 1/((a^{-1})^{[x]})` — one reciprocal, not two.
Repair **in scope**: the sentence now names only `def-real-power` and
`thm-real-power-laws`, both of which the reader verified verbatim, and
`thm-rational-supremum-power-agrees-with-exp` was removed from `forward_refs`.
Repair **out of scope**: `def-real-power-by-rational-supremum` and
`thm-rational-supremum-power-agrees-with-exp` live on
`library/real-analysis/the-logarithm-and-general-powers.md`, a page at a later
wave that this audit has not read. `CLAUDE.md` is explicit that a correction
whose consumers sit in an unresolved impact queue "is not obvious: do not make a
partial public repair; report it for the owner." **Owner queue item 1.**

**A6-F6 — `lem-divisibility-poset-is-lower-finite-and-factorises`, Fact `[L1]`
is false as written. CONFIRMED FATAL (false/overstrong statement in Facts).
Repaired.**
`[L1]` read "A positive divisor d of a nonzero integer n satisfies 1 ≤ d ≤ n",
citing `lem-divisor-bound`, whose Statement is "Let a, d ∈ ℤ with d ∣ a and
a ≠ 0. Then d ≠ 0 and |d| ≤ |a|". The Fact silently widens *positive n* to
*nonzero n*: for n = −6 and d = 2 it asserts 1 ≤ 2 ≤ −6. The item's sole use,
step 1.1, restricts to a positive integer, so the **lemma's conclusion is
unaffected** — but a published Fact that is false as stated is not a 30-second
gap, it is a falsehood in reader-visible text. Repair: `[L1]` now states the
source's actual bound and then the elementary specialisation it uses
("A divisor d of a nonzero integer n satisfies d ≠ 0 and |d| ≤ |n|, so a positive
divisor d of a positive integer n satisfies 1 ≤ d ≤ n"). The contract quote was
already the full source Statement and needed no change. **Pre-dates A4.**

**A6-F7 — `def-ordinal-exponentiation` misattributes the exponent law.
CONFIRMED FATAL (dependency_citation). Repaired. This is A3's routed
question (b), and the answer is CONFIRM — but not at the line A3 inspected.**
See §4.

**A6-F8 — `thm-product-of-connected-spaces`, the TITLE contradicts the item's
own Statement. CONFIRMED FATAL (false/overstrong statement in the title).
Repaired.**
Old title: "…; for an infinite index set **the choice of a base point uses the
Axiom of Choice**". The Statement says the opposite, in terms: "If P ≠ ∅ a point
a ∈ P is fixed. **Selecting one element of one nonempty set is not a choice
principle.** So the theorem as displayed is a theorem of ZF." What costs AC is
the *companion* assertion that P is nonempty when every X_i is. The page summary
also has it right ("The argument is carried out in ZF, and the Statement
separates connectedness from the assertion that the product is nonempty"). So
the title alone is false, and it is the defect class `LEVELS.md` §Step 6 names
explicitly — "a title or Statement asserting more than the proof gives — the
judge reads Statements and cannot see a false title." Repaired to
"…and that argument is a theorem of ZF; for an infinite index set it is the
assertion that the product of nonempty spaces is nonempty that uses the Axiom of
Choice." Consumer check: `cex-the-box-topology-disconnects-a-product-of-connected-spaces`
[A5] restates only the true clause, and `library/topology/connectedness.md` is
already correct — no consumer text repeated the false clause. **Pre-dates A4.**

**A6-F9 — `ex-connectedness-of-the-standard-topologies`, four defects.
CONFIRMED FATAL on three counts, nonfatal-and-polished on one. Repaired.**

1. *(fatal, dependency_citation)* `[A4]` attributed "a map is continuous exactly
   when preimages of open sets are open" to `thm-connectedness-characterisations`,
   which states no such thing; and neither `thm-continuity-characterisations-top`
   (whose claim (b) is exactly that) nor `def-continuous-map-top` was in `deps`.
   Steps 1.3 and 2.2 both depend on it. Repair: `[A4]` now cites
   `thm-continuity-characterisations-top` (a) iff (b) and `def-continuous-map-top`,
   both added to `deps`.
2. *(fatal, missing dependency)* Step 1.1's "X is not path-connected, a path
   being in particular a connected image" had no declared licence;
   `thm-path-connected-implies-connected` was absent from `deps`. Repair:
   `[A1]` now carries that theorem's claim 2 verbatim and it is in `deps`.
3. *(fatal, false claim in prose)* The Example said whether the cofinite topology
   on an infinite X **or the cocountable topology on an uncountable X** is
   path-connected "depends on the cardinality of X", and the closing Remark
   repeated it. For the **cocountable** case that is false: for continuous
   f : [0,1] → X, the image of ℚ∩[0,1] is at most countable hence closed, its
   preimage is closed and contains a dense set so is all of [0,1], so f[[0,1]] is
   at most countable; every at-most-countable subspace of an uncountable
   cocountable space is discrete, and a connected discrete space is a point — so
   **every path is constant, at every cardinality**. I re-derived this
   independently before accepting it. The claim happens to be true for the
   cofinite case, which makes the sentence half-right and therefore worse.
   Repair: the assertion is deleted and both places now make only the scope
   denial ("no item among this page's declared prerequisites settles it"), which
   is true. **I deliberately did NOT add the cocountable result as a new
   theorem** — adding new mathematics is out of scope at A6; it goes to the owner
   queue as an optional future addition.
4. *(nonfatal, polished)* The table's component column and steps 1.2 and 4.1 said
   the indiscrete space's only component is X, which fails at X = ∅: the empty
   space is connected here but has **no** components, as
   `thm-components-partition-and-are-closed` itself records. Under the
   30-second rule this is letter-level, and A6 — not A8 — is where polish
   belongs, so I qualified it to nonempty X in all three places rather than
   escalating it.

### 3.4 Nonfatal findings recorded, not chased

- **The recursion-lemma totality quibble, three items.** In
  `cor-ordinal-exponentiation-well-defined`, `cor-ordinal-multiplication-well-defined`
  and `ex-powers-of-omega-and-epsilon-zero`, the successor branch of the
  recursion rule G(h) is written as `h(δ)·α` / `h(δ)+α` / `ω^{h(δ)}`, while
  `lem-recursion-on-the-ordinals` demands G(h) for *every* ordinal-domain history
  h, including one whose last value is not an ordinal. The Sol refuter flagged
  all three. **Nonfatal under my 30-second threshold**: a default branch outside
  ordinal-valued histories totalises G in one clause and is provably never
  reached along the recursion. Three items, one pattern, no claim affected — I
  record it and do not open a repair cycle. It is a good candidate for a single
  editorial pass at some future level.
- **12 declared-but-uncited `deps` edges** in Alpha scope (§6). Nine pre-date this
  wave; three (`def-ordinal`, `lem-ordinal-basics`, `lem-ordinal-trichotomy` on
  `cex-omega-one-has-no-at-most-countable-cofinal-subset`) were orphaned by A4's
  approved `[L5]` deletion. `deps` is the *logical-dependence* graph, not the
  citation graph, and all three remain genuine background for an item whose whole
  content is ordinals and their ordering, so removing them would be a larger
  edit than leaving them. Left as they are; recorded because the
  `combinatorics-graphs` Beta *did* drop its matching edges, so the two batches
  are inconsistent and a future wave should pick one convention.
- The `citecheck` heuristic warnings and `depcheck`'s 153 warnings
  (114 `cited-not-in-deps`, 38 `multi-home`, 1 `b-leaf-legacy`) are unchanged
  pre-existing noise; the orchestrator confirmed byte-identical output from a
  worktree at `136fb35`.

---

## 4. The three items A3 routed to me

### (a) URL verification — §2. Six of the 63 ledger URLs failed, plus one dead legacy URL on 19 items.

### (b) The second `def-ordinal-exponentiation` location — **CONFIRMED**, and A3's own reading was also right

A3 approved the page fix and withheld the item fix, on the ground that the item's
line-40 sentence reads accurate. **A3's reading of that sentence is correct.**
Line 40 says

> "That exactly one operation satisfies these three clauses, and that all its
> values are ordinals, is `cor-ordinal-exponentiation-well-defined`, proved
> immediately above."

and the corollary's Statement says exactly that: "There is **exactly one** class
function β ↦ e_α(β) … satisfying the three clauses … and every value e_α(β) is an
ordinal." Nothing wrong there.

The defect is a **different sentence**, in the first Remark, which neither A3 nor
the Beta's write-up pinned down:

> "…and no case split on α is needed. `cor-ordinal-exponentiation-well-defined`
> carries the details, **including the exponent law that the unrestricted clause
> falsifies**."

The corollary states existence, uniqueness and ordinal-valuedness, and then
discusses the restricted limit clause. It states **no exponent law**. The law
α^{β+γ} = α^β·α^γ is clause (e) of `thm-ordinal-exponent-laws` — and the
observation itself is true (with the unrestricted clause 0^ω would be 1, so
0^{1+ω} = 1 while 0¹·0^ω = 0), it is simply attributed to the wrong item. This is
the same defect A3 approved fixing on the page, in the same words, one file over.

**Decision: CONFIRM and repair**, identically to the approved page repair:

> "`cor-ordinal-exponentiation-well-defined` carries the details of that
> restriction; `thm-ordinal-exponent-laws` proves the exponent law that the
> unrestricted clause would falsify."

`thm-ordinal-exponent-laws` is deliberately **not** added to `deps`: it depends on
this definition, so the edge would be a cycle, and it sits on the same page
(`library/foundations/ordinal-arithmetic.md`), where SCHEMA §3 makes a link an
ordinary link rather than a forward reference. `fwdcheck` and `depcheck` both
confirm. The item is now a material repair and carries no stamp pending
certification.

### (c) The `combinatorics-graphs` provenance re-determination — **it happened, and the labels hold**

Verified from the ledger on disk, not from the Beta's report. A3's complaint was
that stripping quoted item text from the 74 rationales left **six** skeletons, and
that on counterexample/false-statement rows the template asserted a source
"supplies the established mathematical content represented by" *the false claim
the item refutes*.

Measured now, with the same normalisation A3 used (quotes, backticked ids, math
spans and long tokens collapsed):

| measure | at A3 | now |
|---|---|---|
| distinct rationale skeletons | **6** for 74 rows | **74** for 74 rows |
| distinct raw rationales | — | **74** |
| `literature-derived` / `exact-source` | **0** | **6** |
| `ai-altered` / `semantic-source` | 74 | 68 |
| rows asserting a source supplies a false claim | 10 | **0** |

All ten counterexample/false-statement rows now name the **true** clause and the
omitted hypothesis, and each says in terms that the local witness is generated,
not sourced. Examples, verbatim from the ledger: the MST-nonuniqueness row cites
"ISI Proposition 4.18 gives uniqueness only when the edge-weight function is
injective … the source supplies the omitted-condition clause; the witness and its
numbered verification are locally generated"; the Cayley row cites "ISI Theorem
4.5 explicitly counts **labelled** trees on a fixed n-vertex label set via Prüfer
words … thereby refuting the word unlabelled rather than treating it as sourced
content".

**I checked the six new `exact-source` calls against the sources themselves**, by
fetching and reading the PDFs:

- `def-tree-forest-and-leaf` — Diestel Ch.1 verbatim: "An acyclic graph, one not
  containing any cycles, is called a forest. A connected forest is called a tree
  … The vertices of degree 1 in a tree are its leaves". **Exact.**
- `def-hereditary-graph-class` — Boncompagni §2.1 verbatim: "A class of graphs is
  hereditary if, for every graph G in the class, all (isomorphic copies of)
  induced subgraphs of G belong to the class." **Exact.**
- `def-h-free-and-family-free-graph` — same page, verbatim: "G is F-free if G does
  not contain F. For a family of graphs F, we say that G is F-free if G is F-free
  for every F ∈ F." **Exact.**
- `def-minimal-forbidden-induced-subgraph` — the content is verbatim in
  Boncompagni ("the collection of all graphs that do not belong to G, but all of
  whose proper induced subgraphs do belong to G") but appears inside a
  parenthetical proof note rather than as a labelled definition. **Exact in
  content, generous in form.**
- `def-spanning-tree` — Diestel defines "spanning subgraph" verbatim and "tree"
  verbatim, in the same chapter; the composite is a two-clause composition rather
  than one verbatim definition. **Generous but defensible**, and the rationale
  discloses the delta.
- `def-number-of-spanning-trees` — rests on ISI §4.1 introducing the count and its
  notation; the item's own content is the cardinality. **Weakest of the six**, and
  again the rationale discloses it.

**Decision: the re-determination is genuine and the labels stand.** The two
generous calls both move toward a *sourced* label, which the rule permits only
against a located, verified source — and in both cases I located and read it.
Neither is a fabricated source and neither hides an unsourced claim. I record
them here so the A10 census is honest about where the exact/semantic boundary
was drawn.

---

## 5. `genrisk` — generated-statement blast radius

Regenerated after A4 and again after my A6 repairs. **56 seeds, 10
load-bearing, largest cone 9.** `node tools/genrisk.mjs --receipt research/audit/genrisk.json`
exits **0**.

**The ten load-bearing seeds' cones are not stale.** All ten carry a wave-1 /
1b / 2 Alpha disposition preserved by seed id, and `--receipt` recomputes each
cone fingerprint from disk and fails on any drift; it reports none. Two remain
`unfold` (`rem-compactness-choice-ledger-metric` cone 9,
`rem-constructions-this-page-stops-short-of` cone 6) and eight
`verified-generated`; the eight `verified-generated-seed` warnings are the
tool's standing reminder that no future batch may cite them, not a regression.

**The two new wave-3 seeds are disposed.** Both come from the
`combinatorics-incidence` A4 retag and both have **cone 0** — no logical
consumer and no direct-citation consumer — so `--receipt` does not require a
disposition. I recorded one anyway, because the brief asks for it and because a
zero-cone seed is exactly the case where a silent gap later reads as an
oversight:

| seed | cone | disposition | evidence |
|---|---|---|---|
| `cex-an-incidence-function-with-nonunit-diagonal` | 0 | `verified-generated` | Counterexample-searched and **independently recomputed** by a Sol refuter: on the two-element chain (f*g)(0,0) = f(0,0)g(0,0) = 0_R for every candidate g, while the convolution identity needs δ(0,0) = 1_R. The zero ring — where 0_R = 1_R and the witness would fail — was tested explicitly and is correctly excluded by the Given's "nonzero commutative ring". Composite and positive-characteristic rings do not collapse the diagonal equation |
| `cex-equal-size-intervals-with-different-mobius-values` | 0 | `verified-generated` | Independently recomputed from the recurrence: chain μ(c₀,c₀)=1, μ(c₀,c₁)=−1, μ(c₀,c₂)=0, μ(c₀,c₃)=0; diamond μ(⊥,a)=μ(⊥,b)=−1, μ(⊥,⊤)=1. Both closed endpoint intervals have exactly four elements and both relations are genuine posets. No coefficient-ring collapse: `def-poset-mobius-function` fixes coefficients in ℤ |

Both labels are **positive determinations** about the particular locally chosen
witness, not fallbacks from a failed source search: I checked the ledger
rationales and each names the exact local calculation. The governing
incidence-algebra and Möbius theorems keep their `ai-altered/semantic-source`
labels, which is the right split — the theorems are sourced, the witnesses are
bespoke.

**One mechanism note.** `content-policy --audit` warned
`generated-role` on both: SCHEMA §3 requires a `generation.role` whenever
`provenance.statement` is `ai-generated`, and the role vocabulary contains
`counterexample`, which is exactly what these two are. I added
`generation: role: counterexample` to both. This is **not** the wave-2 case,
where Alpha correctly declined to invent a role for two generated *remarks* that
no vocabulary value fits; here the value fits exactly and withholding it would
have left a real schema gap. `content-policy --audit --ledger` now reports
**224 scoped, 0 errors, 0 warnings**, down from 2 warnings.

---

## 6. Cross-batch and cross-level edge audit

`research/audit/wave3-audit-manifest.json` records **1,687 edges: 956
published-backward, 669 same-batch, 58 cross-batch, 4 forward.** The 669
same-batch edges were the Betas' at A1/A2. **Mine are the 1,018 that leave a
batch** — 956 backward, 58 cross-batch, 4 forward — reaching **202 distinct
targets** over 1,018 distinct source→target pairs.

I expanded those 1,018 edges into **1,057 audit rows** (a `deps` edge whose
target is cited by more than one labelled Fact yields one row per Fact) and
reconciled the whole set mechanically before dispatching, so omission is
visible rather than silent:

- **786 rows** are a labelled `[F#]/[A#]/[L#]` Fact citing the target. Every one
  of the 786 has a matching proof-contract citation carrying an **exact quote
  verified by `proof-contract --strict` to occur in the target's own
  Statement / Statement refuted / Definition / Example** — 0 fact rows without a
  contract entry, 0 contract entries with an empty `uses` list.
- **271 rows** are a declared `deps` edge whose target is used through prose, a
  `**Given:**` clause, a Statement or a Remark rather than a labelled Fact.

Split into three balanced worklists grouped **by target**, so a reader opens each
target once and checks every Fact citing it against the same reading. Three Sol
lanes returned:

| lane | targets | rows checked | reported |
|---|---|---|---|
| `edges1` | 68 | **353 / 353** | 1 fatal, 1 nonfatal |
| `edges2` | 67 | **352 / 352** | 1 fatal, 4 nonfatal |
| `edges3` | 67 | **352 / 352** | 3 nonfatal |
| **total** | **202** | **1,057 / 1,057** | **2 fatal, 8 nonfatal** |

Each lane's per-target tally accounts for every target in its chunk exactly once
and its own total equals the worklist count. **Coverage is 1,057/1,057 with no
exception, and 0 blockers.**

### The two fatal cross-edge findings, both repaired

**A6-F10 — `thm-holder-finite` `[L5]` misdescribes `lem-of-q-embeds`.
CONFIRMED FATAL (dependency_citation).** `[L5]` said "Rational **exponents** are
read in ℝ through the order-preserving embedding of ℚ". The target states "There
is a unique field homomorphism ι : ℚ → F … ι is injective and order-preserving,
so it is an embedding of ℚ as an ordered subfield of F" — it embeds rationals as
*field elements*; it does not turn a rational exponent into a real exponent, and
rational exponents stay in ℚ under `def-rational-power`. The embedding is what
the proof actually uses for the **coefficients** 1/p and 1/q in steps 4.1, 5.1
and 6.1. Repaired to say exactly that, naming `def-rational-power` (already in
`deps`) for the exponents. Contract entry `L5 → def-rational-power` added with
its quote and uses.

**A6-F11 — `lem-the-oscillating-zigzag-curve` step 5.3 has an unlicensed
closed-preimage move. CONFIRMED FATAL (missing dependency citation).** Step 5.3
concludes "J := {u ∈ [0,1] : k(u) = 0} is closed in [0,1], being the preimage of
the closed set {0}", tagged `[step 4.2, A2, A3, A5]` — but none of A2, A3, A5
stated the closed-preimage characterisation. `thm-continuity-characterisations-top`
does, as clause (c), and was **already a declared but uncited dependency** of the
item. Repaired by extending `[A2]` — which step 5.3 already cites — with
"a map is continuous at every point exactly when f⁻¹[F] is closed for every
closed F in the codomain (`thm-continuity-characterisations-top`, clauses (a) and
(c))". No `deps` change, no step-tag change, no claim change. Contract entry
added with A2's existing `uses`.

This is the second defect found in the same landmark item this wave (A4 already
repaired its step 6.3 attribution), so it enters the twice-touched list in §8.

### The eight nonfatal cross-edge findings

All eight are the same class: a declared `deps` edge the body never cites and the
proof never silently needs. `deps` is the *logical-dependence* graph, not the
citation graph, and `depcheck` does not treat an uncited declared edge as an
error; removing one changes the page-level prerequisite closure and the
flowchart for no mathematical gain. I record them and leave them.

| citing item | unused target | lane |
|---|---|---|
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | `def-ordinal` | edges1 |
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | `lem-ordinal-basics` | edges3 |
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | `lem-ordinal-trichotomy` | edges3 |
| `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree` | `def-finite-cardinality` | edges2 |
| `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree` | `thm-well-ordering-principle` | edges2 |
| `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree` | `cor-cardinality-of-the-power-set` | edges3 |
| `lem-edge-addition-to-a-tree` | `def-subgraph-induced-subgraph-and-spanning-subgraph` | edges2 |
| `def-order-topology-on-a-linearly-ordered-set` | `def-infimum` | edges2 |
| `fs-rational-power-of-negative-base` | `def-rat-order` (Fact `[A1]` expressly disclaims using it) | edges2 |

The three `cex-omega-one-…` edges were orphaned by A4's approved `[L5]` deletion;
the rest pre-date the wave. The `combinatorics-graphs` Beta *did* drop its
matching edges when it deleted a Fact and the `foundations` Beta did not, so the
two batches now differ in convention — recorded for the A10 queue.

### The named A0 obligation: 33 edges into later, unaudited waves — discharged

A0 flagged that 33 topology edges point at pages whose own wave has not run:
`monotone-sequences-and-cauchy-completeness` ×18 (wave 5), `topology-of-r` ×12
(wave 6), `rn-as-a-normed-space` ×2 (wave 12), `sequences-and-limits` ×1
(wave 4). All 33 are inside the 1,057 rows above and were audited against the
**target's current on-disk text**, which is exactly what this check can deliver:
whether the target *states* what the citing step claims. **All 33 are exact.**
What the audit does not give — and I do not claim — is any assurance the targets
themselves are correct; that arrives with their own waves. Recorded so waves 4,
5, 6 and 12 re-check rather than rediscover them. A missing provenance tag on a
later-wave target was correctly not charged as a defect of the citing item.

### Manifest regeneration after the repairs

`audit-manifest.mjs` was re-run on the final text, as `AUDIT-WORKFLOW.md` §8
prescribes, so the checklist matches what will be judged:
**1,691 edges — 959 published-backward, 667 same-batch, 59 cross-batch, 6
forward**, against A0's 1,687 / 956 / 669 / 58 / 4.

The alpha-scope row count went **1,057 → 1,063**. All six new rows are citations
**I authored at A6 and an independent Sol reader certified verbatim against the
target**: `[A1] → thm-path-connected-implies-connected` and
`[A4] → thm-continuity-characterisations-top`, `def-continuous-map-top` in
`ex-connectedness-of-the-standard-topologies`; `[A2] → thm-continuity-characterisations-top`
in `lem-the-oscillating-zigzag-curve` (which converts a declared-but-uncited
edge into a cited one, so the uncited list drops 12 → 11);
`[L5] → def-rational-power` in `thm-holder-finite`; and the retargeted Remark
citation in `ex-the-oscillating-zigzag-curve-computed`. **Coverage of the final
text is therefore 1,063/1,063:** 1,057 audited by the three cross-edge lanes and
6 authored under certification. Every one of the 791 fact-carrying rows still has
a contract citation whose quote `proof-contract --strict` verifies against the
target's own section, and none has an empty `uses` list.

---

## 7. Impact closure

`impact-audit.mjs --from baseline --to post-A6`: **224 changed interfaces,
2,107 affected items.** Receipt at `research/audit/wave3-impact-audit.json`,
`--receipt` exits **0**.

### Classification (`research/audit/wave3-impact-audit.json`, `summary` + `pure_class_disposition`)

I classified the roots mechanically from the git diff rather than from any
agent's description of its own edit — the wave-0 measurement is that touchlog's
interface hash flips on any frontmatter change, so the tool cannot tell a retag
from a rewrite and Alpha must. The classifier splits the frontmatter into
top-level keys and compares the body byte-for-byte; a root is *pure* only if the
body is identical **and** every changed key is `provenance`, `sources`,
`authorship` or `generation`.

| | count |
|---|---|
| changed interfaces | **224** |
| pure (frontmatter retag / source metadata only) | **198** |
| material (body, `deps`, `title` or `forward_refs` changed) | **26** items + 1 page |
| affected items requiring a disposition | **2,107** |
| — descending only from pure roots | **1,644** — disposed wholesale |
| — descending from at least one material root | **463** — disposed with a root-specific note |

**Every one of the 2,107 is `still-licensed`, and none is `repaired` or
`not-load-bearing`.** That is not a shortcut, it is what the repairs were: with
one exception every material change is a Remark or prose correction, a deletion
of a Fact that no numbered step cited, a citation made exact, a title corrected
to agree with its own Statement, or a dependency *added* to license a step
already taken. None of those can un-license a consumer. The one exception is
`def-cofinal-subset-of-an-ordinal`, whose Definition lost a false "equivalently"
clause — and there the certifying reader checked **all 14 direct consumers and
both page citations individually** and found none that relied on it.

The 463 material-descended dispositions each name their root(s) and carry that
root's specific change and why it cannot un-license the consumer. The largest
cones are `thm-holder-finite` (290), `rem-real-exponents-deferred` (204),
`def-ordinal-exponentiation` (77), `fs-infinite-has-countable-subset-in-zf` (68)
and `def-cofinal-subset-of-an-ordinal` (36). `rem-real-exponents-deferred`'s 204
deserve a word: it is a `rem-` item that proves nothing and is a `deps` target
for orientation only, so no consumer draws a mathematical inference from it, and
the three later ids it points at are in `forward_refs` and never in `deps`, so
no logical dependence on later material exists.

---

## 8. Twice-touched escalation

Measured from the touch ledger, not from any report. Five stage snapshots:
`baseline`, `pre-A4`, `post-A4`, `pre-A6-math-repairs`, `post-A6`. **No per-item
snapshots were taken** — the wave-2 defect that produced a 95 MB ledger and a
phantom "51 twice-touched" is not repeated; the ledger is 1.7 MB.

`touchlog` reports **42 items changed in more than one window**. That raw number
is again mostly an artifact, and here is the decomposition:

- **31** are pure-metadata second touches: their only prior change was the A4
  retag, and their second is my dead-URL/reference sweep. Not repairs at all.
- **7** more are material items whose second window is that same reference
  sweep, or whose two windows are one A4 retag plus one A6 repair — one
  mathematical repair each: `def-ordinal-exponentiation`,
  `ex-connectedness-of-the-standard-topologies`,
  `fs-an-intersection-of-connected-sets-is-connected`,
  `lem-divisibility-poset-is-lower-finite-and-factorises`, `thm-holder-finite`,
  `thm-closure-of-a-connected-set`, `thm-unions-of-connected-sets`,
  `thm-product-of-connected-spaces`.

**The genuine twice-repaired list is three items**, each carrying two distinct
mathematical repairs at two different stages. Per `AUDIT-WORKFLOW.md` §9 these
escalate to the orchestrator's personal audit; the necessary fixes are made and
each is certified.

| item | repair 1 (A4, Beta) | repair 2 (A6, Alpha) |
|---|---|---|
| `lem-the-oscillating-zigzag-curve` | step 6.3's justification corrected from "[A4] and step 3.1" to "[A2, A3, A4]" | `[A2]` gained the closed-preimage clause step 5.3 already needed (A6-F11) |
| `ex-the-oscillating-zigzag-curve-computed` | the Remark-only Fact `[A6]` deleted and relinked | that same Remark's citation retargeted from `thm-closure-of-a-connected-set` to `thm-closure-characterisation-top` claim 1 (A6-F4) |
| `rem-real-exponents-deferred` | the stale "the page does not exist yet" claim replaced | the clause naming a **false** published theorem removed (A6-F5) |

The two zigzag items are the same construction and the same proof, and both
defects were citation-precision faults in a long argument — which is a signal
about that argument's density rather than about its correctness: every claim it
makes was independently confirmed by two separate Sol lanes. `ex-connectedness-of-the-standard-topologies`
is not on this list because its four defects were all found and repaired in one
stage, but it is the item that needed the most repair this wave and the
orchestrator should look at it too.

---

## 9. Owner queue

Only deletions, id renames/removals and structural reading-order changes are
owner-only, and **no repair this wave needed any of them.** Everything below is
either genuinely outside my delegation or a recommendation.

**1. `def-real-power-by-rational-supremum` has a sign error, and
`thm-rational-supremum-power-agrees-with-exp` is FALSE as stated.**
*(Out of scope: page `library/real-analysis/the-logarithm-and-general-powers.md`,
a later wave. This is the wave's most consequential finding.)*
The definition sets, for $0 < a < 1$,
$$a^{[x]} := 1/(a^{-1})^{[-x]}.$$
Since $a^{-1} > 1$, the inner value is $(a^{-1})^{-x} = a^{x}$, so the definition
delivers $a^{-x}$. Numerically $a = 1/2$, $x = 1$ gives $1/(2^{[-1]}) = 1/(1/2) = 2$,
while $a^{x} = 1/2$. The agreement theorem's own step 3.1 — "apply step 2.1 to
$a^{-1} > 1$ and $-x$, then use the reciprocal definitions" — produces exactly
that wrong value, so its universal Statement ("For every $a>0$ and $x\in\mathbb R$
… $a^{[x]}$ equals … $a^{x}$") is false for every subunit base.
The intended clause is $a^{[x]} := 1/((a^{-1})^{[x]})$ — one reciprocal, not two.
**Why I did not repair it:** `CLAUDE.md` is explicit that a correction whose
consumers sit in an unresolved impact queue "is not obvious: do not make a
partial public repair; report it for the owner." Fixing the definition also
requires re-reading the agreement theorem's step 3.1 and every consumer on a
page this audit has not read. I removed the wave-3 item's reference to it
(A6-F5) so nothing in scope repeats the false claim.
*Proposed route:* fold it into wave 4/5's scope for that page, or take it now as
a one-item obvious-published-dependency repair with its own impact closure.

**2. The three declined A-page summary rewrites** (`ordinal-arithmetic`
10 paragraphs / 1,023 words; `countability-and-uncountability` 8 / 843;
`roots-and-rational-powers` 5 / 707, against the two-paragraph / 150-word
contract). A3 declined them under the "recorded, not chased" rule and preserved
the drafts in the Beta findings files. Re-raised unchanged. The mathematics in
all three is accurate; only the contract is violated.

**3. Link liveness as a gate — fifth consecutive wave, and this time a repair
introduced a dead link.** Wave 3 found **7 dead reference URLs**: six in the A4
ledger (§2a) and one legacy URL on 19 published items (§2b). One of the six,
`people.cas.uab.edu/~jcmayer/Components.pdf`, was **written at A4 as the
replacement** for an unreachable URL, by a Beta that had no DNS and correctly
said so. No gate reads a URL: `level-coverage.mjs` checks a URL is *present*.
Until the Beta sandboxes get DNS or a `linkcheck` gate exists, every wave will
keep shipping dead links and Alpha will keep finding them by hand.

**4. Beta/certifier sandboxes still have no outbound DNS.** Root cause of item 3,
and of wave 2's `established-knowledge` waivers. Fourth wave running.

**5. The `about-the-book` URL pattern is now measurably dead, not just weak.**
`https://en.wikipedia.org/wiki/Topology_(Munkres_book)` is a 404 — the article
does not exist — and it sat on 19 published items. The same pattern
(Stanley/Halmos/Rudin/Tao "about the book" Wikipedia pages) has been on the queue
since wave 0. A corpus-wide sweep for `en.wikipedia.org/wiki/<Book_title>` URLs
is cheap and would settle it.

**6. Two optional mathematical additions this audit deliberately did not make**,
because adding new mathematics is out of scope at A6:
   - *The cocountable topology on an uncountable $X$ is never path-connected.*
     Proof (verified twice, independently): for continuous $f : [0,1] \to X$,
     $f[\mathbb{Q} \cap [0,1]]$ is at most countable hence closed, its preimage is
     closed and contains a dense set so is all of $[0,1]$, so $f[[0,1]]$ is at
     most countable, hence discrete as a subspace, hence — being a connected
     continuous image — a single point. This would close one of the two cells
     `ex-connectedness-of-the-standard-topologies` leaves open. The cofinite cell
     genuinely does depend on $|X|$ versus $\mathfrak{c}$ and should stay open.
   - *A totality clause for the recursion rule* in
     `cor-ordinal-exponentiation-well-defined`,
     `cor-ordinal-multiplication-well-defined` and
     `ex-powers-of-omega-and-epsilon-zero` — one shared editorial pass, nonfatal
     (§3.4).

**7. `lem-power-laws` states its hypothesis over an arbitrary field while its
cited `def-integer-power` defines $a^{n}$ only in the ambient ordered field.**
Confirmed nonfatal and deliberately **not** repaired: `[L1]` writes the recursion
out self-containedly, the identities hold in any field, every one of its ~55
consumers instantiates over $\mathbb{R}$ where the definition applies verbatim,
and editing the Statement of a 55-consumer published lemma for a
domain-of-citation quibble is disproportionate under the triage rule. Recorded so
a future editorial pass can take it deliberately.

**8. Two batches now differ on unused `deps` edges.** The `combinatorics-graphs`
Beta removed the matching dependency whenever it deleted an unused Fact; the
`foundations` Beta did not, leaving three orphaned edges on
`cex-omega-one-has-no-at-most-countable-cofinal-subset`. Neither is wrong —
`deps` is the logical-dependence graph, not the citation graph — but the library
should pick one convention. 11 such edges exist in alpha scope (§6).

---

## 10. Gate results on the final text

Run by me from the repo root after every repair and every stamp.

| gate | result |
|---|---|
| `merge-proof-contracts --level audit-wave3` | 174 scoped items from 5 batch contracts |
| `proof-contract --strict` | **0 errors, 0 warnings, 174/174** |
| `risk-report --require-reviewed` | **0 errors, 174 routed** (99 CRITICAL + 34 HIGH) |
| `finite-smoke` | **0 errors, 3 checks** |
| `content-policy --audit --ledger` (5 ledgers) | **224 scoped, 0 errors, 0 warnings** (was 2 warnings) |
| `genrisk --receipt` | **exit 0** — 56 seeds, 10 load-bearing, 2 new disposed |
| `impact-audit --receipt` | **exit 0** — 224 interfaces, 2,107 dispositions |
| `audit-manifest` regenerated | 1,691 edges on final text |
| `precheck` (every changed item) | **0 failing** |
| `depcheck` | **exit 0 — `published-unaudited` is EMPTY** (26 → 0) |
| `citecheck` | clean, no new warning |
| `fwdcheck` | exit 0 |
| `extcheck` | exit 0 (83 standing `unproved-on-published` warnings, pre-existing) |
| `rendercheck` | exit 0, 2,947 files, real KaTeX |
| `prosecheck` | exit 0 |
| `depsource` | exit 0, 0 unresolved |

`depcheck`'s 153 warnings (114 `cited-not-in-deps`, 38 `multi-home`, 1
`b-leaf-legacy`) are byte-identical to the same gate at `136fb35` — pre-existing
noise, not caused by this wave. The orchestrator verified that independently from
a worktree.

### Risk review coverage — what I actually covered, and what I did not

`risk-report` routed **133 items (99 critical, 34 high)** — more than the brief
expected any single Alpha to refute at depth. I did not thin the coverage; I
widened the fan-out. **All 133 routed items received a dedicated read** by an
independent GPT 5.6 Sol lane at the judges' adversarial standard, across nine
refuter lanes and five certification lanes, and **142 of the 174 contract items**
were read that way in total. The remaining 32 are **not risk-routed**; their
`risk_review` note says so explicitly and records exactly what they did get —
a strict three-part proof contract, the Beta's A2 reading, and an independent
cross-edge audit of every dependency edge leaving their batch — rather than
claiming a refuter reading they did not have.

Priority order actually followed: (a) the 19 materially repaired items and the
page, (b) the 2 new `ai-generated` seeds, both counterexample-searched and
recomputed from scratch, (c) the largest-cone consumers —
`thm-weighted-am-gm-rational` (292), `thm-young-inequality` (291),
`thm-r-uncountable` (148), `thm-schroder-bernstein` (143),
`thm-product-of-countable` (117), `thm-rationals-countable` (110), all clean —
then (d) the rest of CRITICAL and HIGH.

### Stamps

**26 items** received `verification.verified` with `model: gpt-5.6-sol-codex-subscription`,
`verdict: certify`, `date: 2026-08-04`, `scope: published-audit`,
`delegated_by: owner`, each transcribing a real independent current-text reading
recorded in §3.2, §3.3 and §6. **`verification.audited` was never written.**
Every stale `judge` and every stale `verified` on a materially repaired item was
deleted first — including the two the handoff had not seen (§1, A6-F1) —
so no stamp on disk claims a reading of text that no longer exists.

---

## 11. Summary of A6

- **11 confirmed fatal defects repaired** (A6-F4 … A6-F11 plus the three inside
  A6-F9), across 12 items and 1 page. Grouped by defect type:
  **inaccurate/missing dependency citation** — `ex-the-oscillating-zigzag-curve-computed`,
  `def-ordinal-exponentiation`, `ex-connectedness-of-the-standard-topologies` ×2,
  `thm-holder-finite`, `lem-the-oscillating-zigzag-curve`;
  **false or overstrong statement** — `lem-divisibility-poset-is-lower-finite-and-factorises`
  (a Fact false as written), `thm-product-of-connected-spaces` (a title
  contradicting its own Statement), `ex-connectedness-of-the-standard-topologies`
  (a false cardinality claim), `thm-closure-of-a-connected-set` (a Remark false in
  non-T₁ spaces), `rem-real-exponents-deferred` (repeating a false published
  theorem).
- **Every one was found by a Sol lane, not by Alpha.** That is the argument for
  keeping the refuters cross-family from the adjudicator, and the wave-2 note
  that Alpha "is not an independent family screen on Claude-authored legacy
  content" is borne out: nine of eleven sit in text that reads perfectly well.
- **7 dead reference URLs** removed or replaced across 34 items, all verified by
  me over the network the Betas do not have.
- **1,063/1,063 cross-batch and cross-level edges** audited, including all 33
  into later unaudited waves.
- **0 owner-only actions needed** — no deletion, id change or reading-order
  change was required or proposed.
- **All gates green; `depcheck` reaches an empty `published-unaudited` class.**

The wave is ready for A7.

---

## 12. Response to the orchestrator's A6 precompute (`wave3-A6-precompute.md`)

The precompute arrived after A6 was substantially complete. Three of its four
points are settled below from disk; one is a real correction I have adopted.

### 12.1 The URL sweep was already finished — do not re-run it

I completed it before the instruction arrived, and it produced findings the
precompute's scope would have missed. §2 records the whole thing. Headline:
**63 ledger URLs checked, 6 dead or unreachable**; and — outside the routed
scope — **52 legacy URLs A4 preserved but never verified, 1 of them dead on 19
published items**. One of the six dead ledger URLs,
`people.cas.uab.edu/~jcmayer/Components.pdf`, was *written at A4 as a
replacement* for an unreachable URL. All seven are dispositioned and every
affected item retains a live, content-verified source, checked by fetching the
source text and grepping for the cited claim, not merely for a 200.

### 12.2 The 199/25 split misses frontmatter-resident interface changes — use 198/26

**The precompute's method has a blind spot, and it hid one of this wave's fatal
defects.** Its test is "a change is material if any hunk reaches past the closing
`---` of the frontmatter". `thm-product-of-connected-spaces` changed **only its
title**, which lives *inside* the frontmatter block, so no hunk crosses the
delimiter and the method files it as frontmatter-only. Its old title asserted
that fixing a base point of an infinite product uses the Axiom of Choice — which
the item's own Statement explicitly denies ("Selecting one element of one
nonempty set is not a choice principle"). That is **A6-F8**, a confirmed fatal
defect of exactly the class `LEVELS.md` §Step 6 singles out, because the judge
reads Statements and cannot see a false title. The same blind spot would hide any
`deps`, `forward_refs`, `justified_by` or `landmark` change.

My classifier splits the frontmatter into top-level keys and compares the body
byte-for-byte; a root is pure only if the body is identical **and** every changed
key is `provenance` / `sources` / `authorship` / `generation`. That gives
**198 pure / 26 material items + 1 page**, and the difference from the
precompute is exactly `thm-product-of-connected-spaces`. Everything in the
precompute's 25 is in my 26. The impact receipt (§7) uses mine.

### 12.3 On confining the refuters to the changed set — the measurement says no

The precompute directs the refuters at "those 25, not the 133". I had already run
wider, and the outcome is the argument against narrowing:

**Six of the eleven confirmed fatal defects this wave were in items A4 left
byte-identical in the body — items sitting in the pure class that a
changed-set-only certification surface would never have opened.**

| item | it was PURE after A4 | defect found at A6 |
|---|---|---|
| `def-ordinal-exponentiation` | yes | A6-F7 exponent law misattributed |
| `lem-divisibility-poset-is-lower-finite-and-factorises` | yes | A6-F6 Fact `[L1]` false as written |
| `ex-connectedness-of-the-standard-topologies` | yes | A6-F9, three fatal defects |
| `thm-product-of-connected-spaces` | yes | A6-F8 title contradicts its Statement |
| `thm-closure-of-a-connected-set` | yes | Remark false in a non-T₁ space |
| `thm-holder-finite` | yes | A6-F10 `[L5]` misdescribes `lem-of-q-embeds` |
| `thm-unions-of-connected-sets` | yes | nonfatal, polished |

These are legacy defects, not A4 regressions — which is the point. A retro-audit
whose reading surface is "what the retro-audit changed" can only find defects the
retro-audit introduced. The changed set is the right surface for *certification*
(no author certifies its own repair) but not for *refutation*.

It also is not true that A7 makes this redundant. The judges read every item, but
the wave-2 measurement is that they are a screen with a real miss rate, and
wave 0 recorded a statement-versus-proof overclaim (`lem-rat-embeds-dense`) that
**no** reading tier caught and only a corpus grep surfaced. A6's refuters are the
tier that reads the whole item against its dependencies on disk.

What I actually covered, and what I did not, is in §10: all **133** routed items
received a dedicated Sol reading across 14 lanes; 142 of the 174 contract items
did; the remaining 32 are not risk-routed and their `risk_review` note says so
explicitly rather than claiming a reading they did not get. Nothing was sampled
and reported as if it were read.

### 12.4 The "27 self-certifications" are not a breach — 26 of them are mine, written at A6

Settled from disk, and the arithmetic closes exactly:

| measurement | value |
|---|---|
| in-scope items carrying `verified` / `scope: published-audit` **now** | **27** |
| of those, carrying it **at `HEAD`** (pre-existing, before this wave) | **1** — `rem-connectedness-conventions`, dated **2026-08-03**, i.e. wave 2's Alpha stamp |
| added during this wave | **26** |
| date on every one of the 26 | **2026-08-04** |
| written by Alpha at A6, after an independent Sol certification | **26** |
| written by any Audit-Beta at A4 | **0** |

The census in the precompute was taken at 13:15, **after** my 26 A6 stamps
landed. Independent corroboration that no Beta wrote a stamp: my stamping script
asserted no `verified:` block existed on each target before writing, and it
stamped exactly the set `depcheck` reported as `published-unaudited` — items
which by definition carry neither `audited` nor `verified`. Each of the five Beta
findings files states it wrote no certification, and the orchestrator's own A4
verification recorded "0 `verification.verified` and 0 `verification.audited`
written by any Beta". `rem-connectedness-conventions` is in wave-3 scope because
it lacks the two provenance tags — a wave-2 *repair* stamp does not tag
provenance — not because anything about it was self-certified.

**The precompute's underlying instinct was right, and there WAS an understated
surface — a different one.** `depcheck`'s 17 understated the work because two
materially repaired items, `fs-countable-union-theorem-of-zf` and
`fs-infinite-has-countable-subset-in-zf`, **retained a `verified` block with
`scope: page` dated 2026-07-26** that certified pre-repair text, so they never
entered the `published-unaudited` class at all. That is A6-F1 in §1, found at my
recovery receipt, adjudicated stale by an independent reader on the SCHEMA §3
test, and remediated. The certification surface went **17 → 19** there, and
**19 → 26** as my refuters turned seven pure items material.

### 12.5 `def-ordinal-exponentiation` — the correction is accepted, with one factual amendment

The orchestrator is right, and §4(b) reached the same conclusion independently
before the message arrived: the misattribution is real, the `foundations` Beta
was right to allege it, and A3's withholding rested on reading the wrong
sentence — line 40's attribution of existence/uniqueness/ordinal-valuedness to
`cor-ordinal-exponentiation-well-defined` is accurate, while the first **Remark**
said the corollary "carries the details, **including the exponent law** that the
unrestricted clause falsifies", which it does not state. That is on the record
here, as asked.

**One amendment: the Beta did not apply the fix.** Its findings file records the
edit as declined and "remains unapplied", and `git diff HEAD` confirms the only
body change in that file is mine. The defect was found at A6 by the
`cert-foundations` Sol reader, repaired by me (A6-F7), and certified by the
independent `cert-alpha` Sol reader, which also confirmed that
`thm-ordinal-exponent-laws` is correctly **not** added to `deps` — it depends on
this definition, so the edge would be a cycle, and a same-page link is an
ordinary link under SCHEMA §3. The Beta deserves the credit for the finding; the
repair and its certification are A6's.

---

# Wave 3 — Audit-Alpha report (step A8)

## A8.0 Setup and method

**Baseline.** `pre-a8` in `research/audit/wave3-touches.json`, taken by the
orchestrator immediately before this stage. I took no snapshot of my own, as
instructed. Before adjudicating anything I recomputed the normalized content
hash of all 96 rejected items and confirmed **all 96 matched `pre-a8` exactly**,
so every `item_sha256` I recorded is the pre-edit state `step8-guard` compares
against.

**Scope.** 118 rejection rows over 96 distinct items, plus one rejection carried
in from outside the wave (`def-real-power-by-rational-supremum`). Every row is
adjudicated; the ledger is `research/audit/wave3-judge-adjudications.jsonl`,
**121 rows** (118 + 1 out-of-wave + 2 from the round-2 targeted rejudge).

**The standard I applied, stated once so it can be checked.** A8 is fatal-only,
so the only question each row poses is whether the finding licenses a mutation.

- **Fatal** if reader-visible text — title, Statement, Definition, a Fact, a
  Remark, page prose — asserts something **false**, or if a proof step rests on a
  claim that no declared dependency licenses and that is not an immediate
  unfolding of one.
- **Nonfatal** if the claim is true, the licence exists in a declared dependency
  or is a one-line unfolding of a cited definition, and a competent reader closes
  the gap in thirty seconds. This covers the wave's dominant pattern by a wide
  margin: a Fact block that shortens its source and drops the very clause the
  step needs, while the source states it verbatim.
- **False positive** if the cited item does state what the judge says it does
  not, or the judge's own mathematics is wrong.

One boundary rule decided a dozen close calls and is worth naming: **a claim
false only at a degenerate case that the same item legislates elsewhere is
nonfatal; a claim that contradicts its own cited source over a substantive part
of its domain is fatal.** That is the line between `ex-p-four-is-connected-and-anticonnected`
([F1] "a path is connected", false only at the null graph $P_0$, used only for
$P_4$) and A6-F6 (`lem-divisibility-poset`'s [L1], false for every negative $n$
and stating a different inequality from its source).

---

## A8.1 Result

| lane | rows | confirmed_fatal | confirmed_nonfatal | false_positive |
|---|---:|---:|---:|---:|
| `gpt-5.6-terra` | 93 | 4 | 86 | 3 |
| `deepseek-v4-pro` | 28 | 0 | 25 | 3 |
| **total** | **121** | **4** | **111** | **6** |

Terra's precision on this wave, counting a confirmed defect of either severity as
a true positive, is **96.8%** (90 of 93); DeepSeek's is **89.3%** (25 of 28).
Both are within a point or two of the wave-2 measurements the orchestrator
supplied, so the lanes behaved as expected and the low fatal count is not a lane
artefact.

**Why only four fatals, against wave 2's thirty.** Two reasons, and neither is
leniency. First, wave 2's A8 ran before R1, when `confirmed_nonfatal` also
licensed a repair, so the label carried no cost and the boundary between the two
was not load-bearing; under R1 `confirmed_fatal` is specifically the licence to
mutate published text and to spend a rejudge, and I applied it that way. Second,
this wave's A6 found and repaired **eleven** confirmed fatals *before* the judges
ever saw the text, including three in a single item. A thorough A6 is exactly what
ought to produce a thin A8.

---

## A8.2 The four confirmed fatal defects

Grouped by defect type, then by location.

### False or overstrong statement — in a Remark (3)

**A8-F1 — `def-rational-power`, third bullet of `## Remarks`. Published-claim
decay, and the item cites the page that falsifies it.**
The bullet asserted "**There is no $a^{x}$ for irrational $x$ in this library**",
and pointed, in the next sentence, at `rem-real-exponents-deferred` — which I
repaired at A6 (A6-F5) and which now ends: "That later development is now
published: `def-real-power` defines $a^{x} := \exp(x \log a)$ for $a > 0$ and
real $x$, and `thm-real-power-laws` proves the power laws for those exponents."
Both targets exist and are published. This is the published-claim-decay class:
true when written, falsified by a later level, invisible to every mechanical gate.
**Repair:** the false sentence is deleted; the bullet now makes the page-local
claim ("Nothing **on this page** is a limit, a series or a continuous function")
and sends the reader to `rem-real-exponents-deferred` both for the deferral and
for where the library later defines $a^{x}$ for real $x$. The `## Definition` is
untouched.

**A8-F2 — `rem-connectedness-conventions`, numbered section 3. A named
literature notion misdescribed, and the description is vacuous.**
Section 3 read: "Dropping the word *open* from $V$ gives a weaker condition at a
point, called *connectedness im kleinen* in the literature." A connected $V$ with
$x \in V \subseteq U$ is satisfied by $V = \{x\}$ for every $x$ and every open
$U \ni x$, since `def-connected-space` declares every one-point space connected —
so the stripped condition holds in **every** space and is not a condition at all.
Connectedness im kleinen at $x$ asks for a connected **neighbourhood** $V$ of $x$
inside $U$. Nothing elsewhere in the item rescues the sentence.
**Repair:** section 3 now states the neighbourhood form as the weaker condition
and says in the same breath that dropping *open* outright asks nothing, since
$\{x\}$ always qualifies. The item's own inherited convention ("A neighbourhood
need not be open") is what makes that wording expressible.

**A8-F3 — `rem-connectedness-conventions`, numbered section 2. Found by the
targeted rejudge of A8-F2's repair, upheld, repaired.**
Section 2 read: "disjoint open sets in a subspace need not be separated in the
ambient space." **They always are.** If $U, V \subseteq S$ are disjoint and both
open in $S$, write $V = W \cap S$ with $W$ open in $X$; then
$W \cap U \subseteq W \cap S = V$ and $U \cap V = \varnothing$ force
$W \cap U = \varnothing$, so $V$ misses $\overline{U}$ in $X$, and symmetrically.
The item's own cited `lem-connected-subsets-and-separated-sets` runs precisely
that argument at its step 3.1, so the sentence is refuted by the theorem it
introduces. The true distinction, which `def-connected-space` states, is about the
**ambient witnesses**: "it asks $U$ and $V$ to be disjoint **on $A$**, not in $X$.
Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand and is
a different notion."
**Repair:** section 2 now makes that claim instead, quoting `def-connected-space`.

### Inaccurate dependency citation — in a Fact (1)

**A8-F4 — `lem-rational-power-laws`, Fact `[L6]`. Contradicts its own cited
definition.**
`[L6]` read "$0^{t} = 0$ for every rational $t > 0$, and $0^{t}$ is left
undefined for $t \le 0$." Its cited `def-rational-power` says the opposite at
$t = 0$: "For $r < 0$ the expression $0^{r}$ is left undefined", and, in terms,
"The convention $0^0 = 1$ of `def-integer-power` is untouched: $r = 0$ is not
covered by the supplementary clause... So $0^0 = 1$ while $0^{r} = 0$ for every
rational $r > 0$." This is the A6-F6 pattern: a Fact contradicting its source on a
case the source takes trouble to legislate.
**Repair:** `[L6]` now states the source's actual content, including the
$0^0 = 1$ convention. Not load-bearing — the only two steps citing `[L6]`, 3.4 and
4.1, use $t > 0$ throughout — so the correction is confined to the Fact.

**No fatal defect this wave sat in a title, a Statement, a Definition, a proof
step, a dependency list or page prose.** All four are Fact/Remark text.

---

## A8.3 The out-of-wave rejection

`def-real-power-by-rational-supremum`, DeepSeek: citing `def-complete-ordered-field`
supplies the definition of completeness but no theorem establishing that
$\mathbb{R}$ is complete. **My adjudication: `false_positive`**, on my own reading
of disk rather than on the certifier's evidence.

1. `def-complete-ordered-field` states the invoked property verbatim: "$F$ is a
   **complete ordered field**... if every nonempty $S \subseteq F$ that is bounded
   above has a least upper bound in $F$." The citation names exactly the axiom the
   step uses; it is not a vaguer stand-in for a missing theorem.
2. That $\mathbb{R}$ has the property is **established, not assumed**.
   `library/real-analysis/foundations-of-the-real-numbers.md` adopts the
   complete-ordered-field abstraction only after both constructions are shown to
   satisfy the axioms — "Because both constructions are already known to satisfy
   the axioms", "The Cauchy model is complete in the [least-upper-bound] sense"
   (via `cor-cauchy-reals-lub-complete`), "the Dedekind model is a complete ordered
   field by construction".
3. Every published item in this development cites `def-complete-ordered-field` for
   this move in the same way: `thm-nth-roots-exist`'s Given, `def-finite-sum`'s
   opening sentence, `rem-real-exponents-deferred`.

Recorded with the current pair-context hash computed from disk
(`3a7c70ac...`), the item being unchanged since `post-realpower-repair`. An
earlier independent Alpha reached the same disposition on the pre-repair text
(`research/frontier-7-judge-adjudications.jsonl`).

---

## A8.4 Six false positives, with the refutation each got

| item | lane | why it is a false positive |
|---|---|---|
| `lem-complement-swaps-cliques-and-stable-sets` | terra | `def-clique-stable-set-and-numbers` **does** define the maximisations: "$\omega(G):=\max\{\|X\|:X$ is a clique in $G\}$, $\alpha(G):=\max\{\|X\|:X$ is a stable set in $G\}$", and proves both maxima exist. |
| `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis` | terra | `def-minimal-forbidden-induced-subgraph` **does** define a forbidden basis: "a family $\mathcal F$ is a **forbidden induced-subgraph basis** for $\mathcal C$ when $G \in \mathcal C$ exactly when $G$ is $\mathcal F$-free", and `[F2]` cites it. |
| `rem-ordinal-versus-cardinal-exponentiation` | terra | The remark does not attribute cardinal exponentiation to `def-cardinal`; the citation attaches to "defined on cardinals", and the next sentence says the operation "is not defined at this point in the reading order". |
| `lem-subset-of-countable` | deepseek | `[L6]` states "$m \le n$ iff $m \subseteq n$" and the Given fixes $0 = \varnothing$, so $0 \le e(0)$ is licensed by a cited fact. |
| `thm-nth-roots-exist` | deepseek | `lem-of-naturals-positive` **is** cited, in the item's own Given, and is declared in `deps`. |
| `def-real-power-by-rational-supremum` | deepseek | §A8.3. |

---

## A8.5 What the 111 nonfatal findings actually were

Four patterns account for nearly all of them. Each is recorded here, not chased,
because A6 — not A8 — is where polish belongs, and every one of them is a
thirty-second closure.

1. **The shortened Fact (the wave's dominant class, roughly two thirds of all
   rows).** A `[F#]`/`[L#]` block compresses its source and drops the clause the
   step needs, while the source states it verbatim. Cleanest examples:
   `[L6]` of `fs-the-ordinal-two-to-the-omega-is-uncountable` keeps
   "$\mu \cdot 1 = \mu$" from a claim that reads "$\beta \cdot 0 = 0 \cdot \beta = 0$,
   and $\beta \cdot 1 = 1 \cdot \beta = \beta$"; `[L3]` of `thm-cantor-normal-form`
   and `[L2]` of `ex-cantor-normal-form-computed` each drop half of claim (c) of
   `thm-ordinal-arithmetic-monotonicity`; `[L1]`/`[L2]` of
   `ex-kruskal-and-prim-on-a-weighted-graph` keep the algorithms' selection rules
   and drop their correctness conclusions.
2. **The incomplete step tag.** The licence is a Fact or an earlier step **in the
   same item**, and only the bracketed tag omits it: `lem-divisibility-poset-is-lower-finite-and-factorises`
   step 1.3 (needs `[L5]`, which the item carries and step 2.1 cites);
   `lem-power-monotone` step 6.1 (needs step 5.2, the item's own proof of
   $1^n = 1$); `thm-am-gm` step 2.1 (needs step 1.5); `thm-holder-finite` step 1.1
   and `thm-minkowski-finite` step 1.1 (both need `[L5]`, which derives exactly the
   positivity they use).
3. **The undeclared but universally standard term or fact.** A general "cut" in
   `thm-cut-and-cycle-properties-for-minimum-spanning-trees` (the library defines
   only the fundamental cut, though `lem-fundamental-cut-of-a-spanning-tree`
   exhibits the exact $\delta(S)$ form); "prime" in
   `def-number-theoretic-mobius-function`; "commutative ring" in
   `def-delta-and-zeta-incidence-functions`; `thm-reals-ordered-field` in
   `def-order-topology-on-a-linearly-ordered-set`; the convolution definition,
   which `thm-incidence-functions-form-a-ring` and two siblings never declare
   although the theorem is about it.
4. **The degenerate boundary.** Connectedness restated without its nonemptiness
   clause (`ex-p-four-is-connected-and-anticonnected`, `lem-edge-deletion-in-a-tree`,
   `thm-connected-iff-has-spanning-tree`); the empty space
   (`def-connected-space`'s totally-disconnected paragraph, the title of
   `thm-components-partition-and-are-closed`, the empty index in
   `thm-countable-union-of-countable`); base $0$
   (`def-ordinal-exponentiation`'s continuity remark, the title of
   `thm-ordinal-arithmetic-monotonicity`); the empty initial segment
   (`def-the-long-line`).

Three further nonfatal findings deserve to be named individually because both
lanes or a careful reader will meet them again:

- **The recursion-lemma totality gap, three items** (`cor-ordinal-multiplication-well-defined`,
  `cor-ordinal-exponentiation-well-defined`, `ex-powers-of-omega-and-epsilon-zero`).
  `lem-recursion-on-the-ordinals` wants $G$ total on every ordinal-domain
  function; the successor clause $h(\delta) + \alpha$ is defined only when
  $h(\delta)$ is an ordinal. **Both** lanes found it independently, and so did the
  A6 Sol refuter (§3.4). One default clause totalises $G$ and the branch is
  provably never taken. It remains one editorial pass across three items.
- **`lem-power-laws` is stated for an arbitrary field while `def-integer-power`
  opens "Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered
  field."** A real definition-scope inconsistency, found by DeepSeek. Nothing is
  false — the recursion is verbatim available in any field, and
  `def-integer-power`'s own justification paragraph already argues at field level.
- **`thm-unions-of-connected-sets` binds $p$ twice.** Step 1.1 makes $p$ a common
  point of every $A_i$ for claim 1; step 1.3 rebinds it to a point of $A$ for
  claim 2; steps 2.1 and 3.1 then use the first $p$ and step 5.1 the second. Both
  arguments are correct with their own $p$; the phase stratification interleaves
  their openings.

---

## A8.6 Twice-touched escalation

Measured from the judge ledger and the touch ledger, not from any report.

| item | touch 1 | touch 2 | status |
|---|---|---|---|
| `rem-connectedness-conventions` | A8-F2, section 3 | A8-F3, section 2 | **two fatal repairs in one stage.** Both were false claims in prose; the second was surfaced by the targeted rejudge of the first. Both lanes now pass the final text. |

**`ex-connectedness-of-the-standard-topologies` — reported separately, as
instructed, and NOT repaired.** The orchestrator flagged Terra's rejection over
the first Remark's counting claim as a possible fourth defect in an item that
already took three confirmed fatal repairs at A6. **Terra is right about the
count.** The Remark says "Four of the six topologies are connected for the same
structural reason: no two nonempty open sets are disjoint", and Sierpinski space
shares that reason, so five of the six rows do — only the discrete row does not.
**I adjudicated it `confirmed_nonfatal` and made no edit**, on this evidence: the
Example itself, fifteen lines above the Remark, says "**Sierpinski space is the
particular-point topology on a two-point set**, so its row is an instance of the
row above it and is not verified separately." A reader cannot conclude from this
item that Sierpinski is connected for some other reason, every named instance in
the Remark is correct, and R1 does not license an edit on a nonfatal row. The
one-word correction "Four" → "Five" is recommended for whoever next opens the
item at a stage where polish is legal.

The other A6 twice-touched items (`lem-the-oscillating-zigzag-curve`,
`ex-the-oscillating-zigzag-curve-computed`, `rem-real-exponents-deferred`) each
drew one further rejection this wave; all three were adjudicated nonfatal and none
was touched again.

---

## A8.7 What I rejudged, and what the lanes returned

Only what changed. No whole-wave sweep.

| round | target | DeepSeek V4 Pro | GPT 5.6 Terra |
|---|---|---|---|
| 1 | `def-rational-power` | **pass** | **pass** |
| 1 | `lem-rational-power-laws` | **pass** | reject — step 1.2 multiplies two positive roots with no cited closure fact |
| 1 | `rem-connectedness-conventions` | **pass** | reject — section 2's disjoint-open-sets claim (A8-F3) |
| 2 | `rem-connectedness-conventions` | **pass** | **pass** |

Both round-1 rejections were adjudicated on the repaired text and recorded with
their own exact-hash rows:

- `lem-rational-power-laws` / Terra → **`confirmed_nonfatal`**, no edit. Closure of
  the positives under multiplication is an ordered-field axiom; the item declares
  `thm-rat-ordered-field` and uses `lem-of-inverse-positive` from the same
  vocabulary, and `lem-power-monotone`'s `[L3]`, carried in this item, already
  rests on "a product of positives is positive". This is exactly the resampled
  nitpick R1 exists to stop, and R1 stopped it.
- `rem-connectedness-conventions` / Terra → **`confirmed_fatal`** (A8-F3), repaired
  and rejudged once more, now passing both lanes.

**`lem-rational-power-laws` therefore has no two-lane pass on its final text and
must not receive a `verification.judge` stamp.** That is the honesty rule working
as designed, not a gap: `apply-judge-stamps` skips it as `lane-rejected`, and the
adjudication row carries the reason.

---

## A8.8 Impact closure

All three repaired items are public-interface changes by `touchlog`'s own
definition, which counts Facts and Remarks as interface. I recomputed the
`publicSurface` hashes directly against the `pre-a8` snapshot rather than taking
a snapshot of my own, as instructed:

| item | `pre-a8` surface | now | changed |
|---|---|---|---|
| `lem-rational-power-laws` | `b2adb8a99968b2ae` | `49414a3164966768` | yes |
| `def-rational-power` | `cc19733b3d73db10` | `7c67fbb318169d3f` | yes |
| `rem-connectedness-conventions` | `0cafce2cb0e757fa` | `1e4a2c2462921efa` | yes |

**3 changed interfaces, 91 consumers, every one `still-licensed`**, recorded with
its evidence in `research/audit/wave3-A8-impact-audit.json`. The argument is the
same in each case and is checkable: the change is confined to apparatus no
external item can cite.

- `lem-rational-power-laws` (31 consumers): the edit is inside the item's own
  Facts block. A consumer cites this lemma's **Statement**, never another item's
  `[F#]`/`[L#]` apparatus, and the Statement is untouched — the edit was an
  exact-string replacement of the `[L6]` line and would have failed against any
  other text. The correction only *widens* what is defined ($0^0 = 1$ rather than
  undefined), so nothing previously licensed becomes unlicensed.
- `def-rational-power` (59 consumers): the `## Definition` section, which is what
  consumers cite, is untouched; the deleted sentence was **false**, so nothing
  true rested on it.
- `rem-connectedness-conventions` (1 consumer): `def-connected-space`, which links
  it only as the record of a convention fork — section 1, untouched.

A repository grep confirms **no item anywhere restates any of the three deleted
claims**, so the blast radius is closed by inspection as well as by argument.

**One thing the orchestrator must finish.** `impact-audit.mjs` compares two
touchlog snapshots and I was instructed to take none, so the receipt above is
mine, from disk, not the tool's. After snapping `post-a8` the mechanical receipt
is one command:

```
node tools/impact-audit.mjs --touches research/audit/wave3-touches.json \
  --from "pre-a8" --to "post-a8" --template research/audit/wave3-A8-impact-audit.json
```

---

## A8.9 Gates

| gate | result |
|---|---|
| `precheck` (3 repaired items) | **PASS** — 1 proof-bearing item checked, 0 failing |
| `rendercheck` · `citecheck` · `fwdcheck` · `extcheck` · `prosecheck` · `depsource` | all exit 0 |
| `step8-guard --baseline pre-a8` | **OK — 3 changed, 3/3 licensed by a confirmed_fatal adjudication**, 0 created, 0 deleted |
| `depcheck` | **OK — no cycles, all references resolve, no draft items on published pages.** It failed in between, with the three repaired items as the only `published-unaudited` errors, which is the honest intermediate state: their stale stamps were deleted with the text they attested to, and the class emptied again once the independent certifier had read the final text (§A8.10) |

**`level-coverage.mjs --audit --verify-current-context`, run after the
adjudications:**

- **`judge-adjudication-missing`: 118 → 0.** That was the assignment and it is
  discharged.
- 84 `judge-verdict-adjudicated-nonfatal` **warnings** — each a rejection cleared
  by a `confirmed_nonfatal` or `false_positive` row, which is the mechanism working
  as designed.
- `judge-coverage-missing` **errors**, and they are entirely explained. Before the
  stamps: **55**, every one a page-sibling of a repaired item — 27 on
  `connectedness`, 8 on `connectedness-examples`, 20 on
  `roots-and-rational-powers`, the two pages I touched and nowhere else. A repair
  moves the frozen A/B-pair context of every item on its page, so a whole-wave
  `--verify-current-context` run demands a fresh pair for 55 items that nobody
  edited. After the stamps: **58** — the extra three are the repaired items
  themselves, whose context moved once more when their own `judge`/`verified`
  blocks were written. The targeted receipt is immune to that by design (its item
  hash excludes only `verification.judge`, "so the stamp itself ... cannot stale
  it"), and `apply-judge-stamps` validated all three against it; the whole-wave
  check is not. `AUDIT-WORKFLOW.md` §7 A8 says exactly
  that must not happen: the targeted repair "does not trigger a whole-wave Step-8
  sweep or a full-current-context coverage run", which is why the targeted receipt
  exists and binds each target to *its own* rejudge context. **This is a real
  gap between the doc and the tool, not a coverage failure:** `level-coverage` has
  no `--targeted-receipt` mode, so after any A8 repair its whole-wave current-context
  check cannot pass. Flagged for the orchestrator; it belongs with the
  `spine-receipt-invalid` path bug already found at A7.
- `spine-receipt-missing` and `audit-receipt-read` are pre-existing and are the
  orchestrator's, as noted in the handoff.

---

## A8.10 Independent certification and stamps

**No author certifies its own repair.** I authored all four repairs, so a fresh
**GPT 5.6 Sol** reader — a different family from me, dispatched read-only through
`tools/dispatch.mjs --role refuter` at `xhigh` with a 1,000,000-token window —
read the **final** text of all three items from disk and returned
`VERDICT: certify` on every one.

A first certifier had to be discarded: it finished at 15:21:13 while the A8-F3
repair landed at 15:20:21, so its reading of `rem-connectedness-conventions` was
of text that no longer existed. Certifying vanished text is worse than not
certifying, so it was re-dispatched on the final text and only the second run is
recorded. (Its readings of the two rational-power items, untouched since 15:11,
independently agree with the second run.)

What the certifier verified for itself rather than deferring to me:

- `[L6]`'s two source clauses, quoted from `def-rational-power` and
  `def-integer-power`, and that steps 3.4 and 4.1 — the only users of `[L6]` —
  remain licensed because both run at positive exponents.
- That `def-real-power` and `thm-real-power-laws` exist, are `published`, and
  define $a^x$ for real $x$ — so the deleted sentence really had decayed.
- **Independently reconstructed both topology arguments**: that $V = \{x\}$ makes
  the old section-3 condition vacuous, citing `def-connected-space`'s one-point
  clause; and that disjoint relatively open sets are always separated in the
  ambient space, matching the mechanism at step 3.1 of
  `lem-connected-subsets-and-separated-sets`. It also produced its own witness for
  the repaired section 2 — $X = \mathbb{R}$, $S = \{-1, 1\}$, ambient opens
  $(-2, \tfrac12)$ and $(-\tfrac12, 2)$, overlapping in $X$ with disjoint traces
  on $S$ — and located a published reference for the connectedness-im-kleinen
  definition.
- That reversing each stated repair reproduces the recorded `pre-a8` normalized
  hash exactly, so there was no other undeclared A8 change; that no `id`, `deps`,
  alias or structural field moved; and that the page files have empty diffs, so
  reading order is unchanged.

### Stamps written

| item | `verification.verified` | `verification.judge` |
|---|---|---|
| `def-rational-power` | Sol certifier, `scope: published-audit`, `delegated_by: owner` | **`deepseek-v4-pro + gpt-5.6-terra` pass**, `scope: published-audit-targeted`, bound to context `22067f19…` and item `4f75fe6e…` |
| `rem-connectedness-conventions` | same | **pass**, bound to context `92add9e9…` and item `3b7b3575…` |
| `lem-rational-power-laws` | same | **none — correctly withheld** |

`apply-judge-stamps --audit-targeted-rejudges` reports
`scope 3 | stamped 2 | skipped 1 {"lane-rejected":1}`. The skip is the mechanism
working: a stamp records a two-lane pass, `lem-rational-power-laws` does not have
one, and its rejection is closed on an exact-hash `confirmed_nonfatal` row
instead. `verification.audited` was never written on any item — that field is the
owner's alone — and every stale `judge`/`verified` block was deleted before the
new text was certified, so no stamp on disk claims a reading of text that no
longer exists.

The receipt is `research/audit/wave3-targeted-judge-receipt.json`; it lists all
three targets, including the unstamped one, with its lane outcomes, so the record
is complete rather than convenient.

---

## A8.11 Summary of A8

- **121 adjudications written**, covering all 118 in-wave rejection rows, the one
  out-of-wave rejection the orchestrator routed to me, and the 2 rows raised by the
  targeted rejudge. `judge-adjudication-missing` went **118 → 0**.
- **4 confirmed fatal defects, in 3 items, all repaired**: one Fact contradicting
  its own cited definition (`lem-rational-power-laws`), one decayed published claim
  (`def-rational-power`), and two false prose claims in one conventions remark
  (`rem-connectedness-conventions`, sections 2 and 3). None was in a title, a
  Statement, a Definition, a proof step or a dependency list.
- **111 nonfatal findings and 6 false positives**, each closed on its own
  exact-hash row with no content, page, frontmatter, contract, impact or judge
  mutation. Terra's precision measured **96.8%**, DeepSeek's **89.3%**.
- **R1 demonstrably earned its keep.** The targeted rejudge of the repaired
  `lem-rational-power-laws` produced a *fresh* Terra nitpick on text that had just
  been repaired for an unrelated reason — the exact resampling loop R1 was written
  to stop. It stopped: adjudicated nonfatal, closed on its row, no edit, no third
  judge call. The same rejudge also surfaced a *real* fatal defect in a different
  item, which was repaired without a cap and cleared both lanes on the next pass.
  Both halves of the rule did their job in the same round.
- **`step8-guard`: OK — 3 changed, 3/3 licensed by a confirmed fatal
  adjudication**, 0 created, 0 deleted.
- **All gates green**, `depcheck` back to "no cycles, all references resolve, no
  draft items on published pages" with an empty `published-unaudited` class.
- **Two things left for the orchestrator**, both named with their exact commands:
  the `post-a8` touchlog snapshot and the mechanical `impact-audit` receipt
  (§A8.8), and the `level-coverage` whole-wave current-context check, which no
  post-A8 state can pass because the tool has no targeted-receipt mode (§A8.9).
- **Escalated separately, as instructed:** `ex-connectedness-of-the-standard-topologies`
  drew a fourth finding, Terra is right about the count, and I adjudicated it
  nonfatal and made no edit (§A8.6).
