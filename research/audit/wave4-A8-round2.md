# Wave 4 — A8 round 2 (Alpha, `claude-opus-5`, 2026-08-05)

Closes the two things wave 4 left open at its A10 pause: the 10 unadjudicated
judge rejections, and the 5 published items left carrying no verification stamp.

**Both are closed.** `depcheck` exits 0 — `published-unaudited` is empty, so the
hard error blocking wave 5's A0 is gone. Zero rejections remain unadjudicated:
12 current rejections, 24 adjudication rows, 0 open.

**One new `confirmed_fatal` was found and repaired** (`thm-compact-iff-fip`), so
this round is not purely bookkeeping. Six independent read-only certifier lanes
returned **6 CERTIFY / 0 REFUSE**; four cross-family DeepSeek refuter lanes
returned **0 fatal**.

Baseline for the round: `touchlog` snapshot **`pre-a8-round2-alpha`**, taken
before the first edit. Closing snapshot `post-a8-round2`.

---

## 1. Correction to the inherited record, established from disk

`research/audit/RESUME.md` says wave 4 is uncommitted. **It is committed**, at
`b039b3f` "feat(audit): wave 4 A0-A10 — unattended run, awaiting owner audit".
At the start of this round `git status` showed a clean tree under `items/` and
`library/`; at the end it shows exactly the **six** files this round touched.
Every hash below was computed against that verified state, not against the
RESUME narrative.

---

## 2. Job 1 — the 10 outstanding adjudications

| model | id | outcome | type |
|---|---|---|---|
| claude-sonnet-5 | `thm-compact-iff-fip` | **confirmed_fatal** | other |
| claude-sonnet-5 | `cor-cardinal-absorption` | false_positive | — |
| claude-sonnet-5 | `thm-konig` | false_positive | — |
| claude-sonnet-5 | `thm-cardinal-arithmetic-agrees-with-finite-counting` | false_positive | — |
| claude-sonnet-5 | `def-cardinal-arithmetic` | confirmed_nonfatal | — |
| claude-sonnet-5 | `thm-cardinal-power-set-and-cantor` | confirmed_nonfatal | — |
| claude-sonnet-5 | `def-infinite-cardinal-sum-and-product` | confirmed_nonfatal | — |
| claude-sonnet-5 | `def-locally-compact-space` | confirmed_nonfatal | — |
| deepseek-v4-pro | `fs-local-compactness-is-hereditary` | confirmed_nonfatal | — |
| deepseek-v4-pro | `ex-compactness-in-the-standard-topologies` | confirmed_nonfatal | — |

Rows appended to `research/audit/wave4-judge-adjudications.jsonl`, each carrying
`item_sha256` for the text **as it stood before any edit**. For
`thm-compact-iff-fip` that pre-edit hash was reconstructed and then confirmed
byte-exact against the independent `pre-a8-round2-alpha` snapshot
(`af68c82d7c5c12ed`), so the licence is bound to text that actually existed
rather than to a hash computed after the repair.

The dispatch flagged that six of the ten allege a dependency-citation defect. I
opened the cited target in every case. **Not one of the six survived as fatal**,
and the reason is the same each time: the proposition the step needs is stated
by a dependency the item has already **declared and cited**, and what is wrong is
only the wording of the `[L#]` restatement or the citation list on the step.

### 2.1 The one fatal — `thm-compact-iff-fip` (Sonnet)

**The allegation, and why it is right.** The first Remark said "a nested family
of nonempty closed sets has the finite intersection property for free, and the
theorem then produces a point lying in all of them at once. **That is how it is
used below in `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space`.**"

From disk: that sibling cites this theorem only in its `[L8]`, and `grep` finds
exactly one use, step 4.1 — which runs the **contrapositive**: "By [L8] the
family $\mathcal{F}$ therefore fails the finite intersection property, so some
finite list in it has empty intersection". It never produces a point from a
nested family. The pattern the Remark describes is
`thm-baire-category-locally-compact-hausdorff` step 7.1: "the intersection of a
nonempty finite list is $\overline{V_N}$ … So [L5] gives a point
$x \in \bigcap_{n} \overline{V_n}$."

So the Remark asserts a false fact about how the library uses this theorem.
**Same class as this wave's other confirmed fatals** — A8-3's "Claim 4 is what
the one-point compactification uses" and A8-4's "Every theorem on the companion
page …". Third instance of a false cross-item Remark attribution in wave 4.

**Repair (Remark prose only; smallest correction).**

*Before:* "That is how it is used below in
`[[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]]`."

*After:* "That is how it is used below in
`[[thm-baire-category-locally-compact-hausdorff]]`, whose step 7.1 turns a
decreasing sequence of nonempty closed sets into a point common to all of them.
`[[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]]` uses the
theorem in the opposite direction: from a family of closed sets whose
intersection is empty it extracts a finite subfamily whose intersection is
already empty."

No Statement, title, `deps`, Fact, or numbered step changed. Both named items are
later-page items exactly as the sentence they replace was, so the forward-mention
shape is unchanged and `fwdcheck` stays green. Stale
`verification.judge` (`z-ai/glm-5.2`) and the obsolete
`verification.verified` (`claude-fable-5`, `scope: page`) were deleted.

### 2.2 The three false positives

- **`cor-cardinal-absorption`.** Sonnet alleged step 1.2 "never establishes
  $\xi \in \kappa$ for the $\lambda$-tagged elements". **There are none:** step
  1.2 is about the injection $\kappa \sqcup \kappa \to \kappa \times \kappa$, not
  $\kappa \sqcup \lambda$. The DeepSeek refuter reached the identical conclusion
  independently: "The judge's concern about 'λ-tagged elements' appears to be a
  misreading — the step involves only κ ⊔ κ, not κ ⊔ λ."
- **`thm-konig`.** The verdict's own reason text ends "**no defect found**",
  after raising and dismissing each of its three concerns ("this is a minor
  gap", "but fine"). Its substantive claim — that step 6.1 applies `[L5]` without
  establishing $\lambda_i \setminus B_i \ne \varnothing$ — is contradicted by
  step 5.1, which ends "and therefore $B_i \ne \lambda_i$ and
  $\lambda_i \setminus B_i \ne \varnothing$", and which step 6.1 cites. This is
  the **documented Sonnet failure mode** recorded in `CLAUDE.md`: `reject`
  recorded while the reason concludes *keep* — verdict extraction, not
  reasoning. DeepSeek: 0 fatal.
- **`thm-cardinal-arithmetic-agrees-with-finite-counting`.** Sonnet alleged step
  1.3's bijection $\kappa \to \beta$ is neither shown disjoint nor surjective.
  The item states the disjointness verbatim ("its three pieces having the
  pairwise disjoint images $\{0\}$, $\omega \setminus \{0\}$ and
  $\{\xi \in \beta : \omega \subseteq \xi\}$"), and those three sets union to
  $\beta$ because every element of $\beta$ is $0$, a nonzero natural, or an
  ordinal containing $\omega$ (trichotomy). Sonnet failed to combine the pieces.
  The DeepSeek refuter independently reproduced exactly this: "well-defined on
  all of κ (the case split is exhaustive by ordinal trichotomy), injective (the
  three image sets are pairwise disjoint …), and surjective onto β".

### 2.3 The six confirmed-nonfatal, each with the target that actually carries the fact

Every one is a real imprecision — none is a false positive — and every one is
closed by a dependency the item already declares, so all six fall under the
30-second rule. **A8 is fatal-only, so none was edited.**

| id | what the step needs | where it actually lives |
|---|---|---|
| `def-cardinal-arithmetic` | "$0$ and $1$ are cardinals", cited to `def-ordinal` | `def-ordinal` contains **no occurrence of the word "cardinal"** — Sonnet is factually right. The support is `def-cardinal` ("no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$"), already in `deps`. |
| `thm-cardinal-power-set-and-cantor` | $\kappa = \lvert\kappa\rvert$ at step 2.2 | `lem-cardinality-of-a-well-orderable-set` clause **(e)**: "$\lvert\alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal". Cited in `[L3]`, whose restatement omits that clause. |
| `def-infinite-cardinal-sum-and-product` | $\prod_{i\in2}\kappa_i = \kappa_0 \otimes \kappa_1$ | clause **(d)** of the same lemma gives equinumerous ⟹ same cardinality; $\otimes := \lvert\kappa_0\times\kappa_1\rvert$ is `def-cardinal-arithmetic`, cited two lines above. |
| `def-locally-compact-space` | "$B(x,r)$ is open" | `def-metric-ball`, cited in that very paragraph, states it: "That $B(x,r)$ is an open set … is proved in `[[thm-metric-open-set-algebra]]`". |
| `fs-local-compactness-is-hereditary` | topological ⟹ metric compactness at step 3.1 | `thm-compactness-agrees-with-metric-compactness` claim 2 is an **iff**, and this item already cites it in `[L2]` — in the other direction. |
| `ex-compactness-in-the-standard-topologies` | the definition of *countably compact* at step 3.1 | `def-compactness-variants` ("every open cover of $X$ that is at most countable has a finite subcover") — in `deps`, cited in claim 5 of the Example itself, absent from the Facts block. |

Two of these are DeepSeek's, and I overrode both to nonfatal. I did not do that
lightly: in each case I opened the target, confirmed DeepSeek's factual
observation is **correct**, and classified it nonfatal only because the missing
proposition is a definition-unfolding available from a declared, already-cited
dependency. Round 1 set the precedent on the identical shape
(`def-locally-compact-space`/DeepSeek → `confirmed_nonfatal`).

---

## 3. Job 2 — the five unstamped items, plus the sixth from §2.1

Each of the five had exactly one round-1 `confirmed_fatal`. I confirmed each
repair complete and correct from disk before dispatching a certifier; none
needed finishing.

| id | repair verified from disk | certifier | stamp |
|---|---|---|---|
| `def-cofinality` | `def-cardinal-arithmetic` supplies "infinite cardinal" ($\omega \subseteq \kappa$); in `deps`; page item 3 vs this item 20, so backward | CERTIFY ×2 | ✔ |
| `lem-successor-cardinal-exists` | `def-ordinal` writes $\alpha^{+} := \alpha \cup \{\alpha\}$; `def-aleph-and-beth-hierarchies` writes $\kappa^{+} := \aleph(\kappa)$ under a cardinal-letter-only notation rule, at page item 11 vs this item 9 — hence "later on this page", and no wikilink | CERTIFY | ✔ |
| `thm-locally-compact-hausdorff-basics` | `thm-one-point-compactification-properties` `[L7]` cites **claim 1**, and step 1.4 separates $x$ from $\infty$ with it | CERTIFY | ✔ |
| `ex-compactness-in-the-standard-topologies` | narrowed claim true of `library/topology/compactness.md`; the three named covering conclusions carry no separation hypothesis | CERTIFY | ✔ |
| `ex-the-alexander-subbase-lemma-...-interval` | `def-real-order` defers trichotomy to `thm-reals-ordered-field`, which the new `[L4]` cites and `deps` now declares | CERTIFY | ✔ |
| `thm-compact-iff-fip` (§2.1, this round) | see above | CERTIFY | ✔ |

**Certifier lanes: 6 dispatched, 6 CERTIFY, 0 REFUSE**, all `claude-sonnet-5`
read-only (`--allowed-tools Read Glob Grep WebSearch WebFetch`, default-deny),
72–211 s each, every verdict carrying verbatim quotations from the targets it
opened. Records: `research/audit/wave4-dispatch/certifier-a8r2-*`.

`def-cofinality` additionally retains its round-1 GPT 5.6 Sol certification of
the **same** text (`certifier-a8-def-cofinality`, 2026-08-04, item unmodified
since). Two independent readings, different families, both CERTIFY.

**No author certified its own repair.** All six repairs are Alpha's; all six
readings are Sonnet's.

Stamps written: `verification.verified`, `model: claude-sonnet-5`,
`scope: published-audit`, `delegated_by: owner`, on all six.
`verification.audited` was not written anywhere.

---

## 4. Cross-family refuter evidence (DeepSeek V4 Pro, tool-less, read-only)

Four lanes on Alpha-assembled context (item text plus the Statement/Definition of
every declared dependency, 40–75 KB each), 5–10 minutes apiece. Dispatched
because Beta, Alpha and the certifier are now all Claude, so my own agreement
with the corpus is weak evidence.

| lane | verdict |
|---|---|
| `cor-cardinal-absorption` | 0 fatal, 1 nonfatal |
| `thm-konig` | 0 fatal, 1 nonfatal |
| `thm-cardinal-arithmetic-agrees-with-finite-counting` | 0 fatal, 0 nonfatal |
| `thm-cardinal-power-set-and-cantor` | 0 fatal, 0 nonfatal |

**Total: 0 fatal.** Two lanes independently reconstructed my reasoning for two of
the three false-positive calls, which is the corroboration those calls needed.

Their two nonfatal findings are **new**, not part of any judge allegation:

1. **`cor-cardinal-absorption` `[L3]`** says $\oplus, \otimes$ are "monotone in
   each argument", but clause (e) of `lem-cardinal-arithmetic-basic-laws` states
   monotonicity in the **first** argument only. The fact is true (commutativity,
   clause (b), gives the second), and steps 1.3/1.4 stay valid; the citation
   wording overstates the clause. Fact-fidelity class — see §7.
2. **`thm-konig` Remark** — see §6, where I checked it myself.

---

## 5. Ready for targeted paired rejudge

All six carry `verification.verified` and **no** `verification.judge`. I did not
write judge stamps — the orchestrator runs the rejudge and `apply-judge-stamps`.

| item | frozen context (A/B pair) |
|---|---|
| `def-cofinality` | `foundations/cardinal-arithmetic-and-cofinality` + `-examples` |
| `lem-successor-cardinal-exists` | same |
| `thm-locally-compact-hausdorff-basics` | `topology/compactness` + `compactness-examples` |
| `thm-compact-iff-fip` | same |
| `ex-compactness-in-the-standard-topologies` | same pair (item lives on `compactness-examples`) |
| `ex-the-alexander-subbase-lemma-...-interval` | same pair |

Two pair contexts, six targets:

```sh
JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs \
  --ledger research/audit/wave4-judge.jsonl \
  --cost research/audit/wave4-judge-cost.jsonl \
  --items def-cofinality,lem-successor-cardinal-exists,thm-locally-compact-hausdorff-basics,thm-compact-iff-fip,ex-compactness-in-the-standard-topologies,ex-the-alexander-subbase-lemma-applied-to-a-closed-interval
```

Then record each in `wave4-targeted-judge-receipt.json` and stamp only through
`apply-judge-stamps.mjs --audit-targeted-rejudges`. **The five round-1 items have
been text-stable since 2026-08-05 02:36**; `thm-compact-iff-fip` is stable as of
`post-a8-round2`. Re-verify hashes immediately before the sweep.

---

## 6. For the owner queue — a probable falsehood I did NOT repair

**`thm-konig`, final Remark:** "that consequence is
`[[cor-cofinality-of-a-cardinal-power]]`, and it is **the only ZFC constraint on
$2^{\aleph_0}$ established here**."

The DeepSeek refuter flagged it as an unverifiable cross-item claim. Checking it
from disk: `thm-cardinal-power-set-and-cantor` is **item 6 on the same page**
(`foundations/cardinal-arithmetic-and-cofinality`) and establishes
$\kappa < 2^{\kappa}$, hence $\aleph_0 < 2^{\aleph_0}$ — a ZFC constraint on
$2^{\aleph_0}$ established on that very page. So "the only" is false unless
"constraint" is silently read as "constraint beyond Cantor's".

**Why it is not repaired here.** It is not what the judge alleged, and
`thm-konig`'s only rejection is adjudicated `false_positive`. Under R1 no
adjudication licenses an edit to it, and `step8-guard` would report
`nonfatal-edit`. It is the same class as the three fatals this wave already
confirmed, so it should get its own cycle rather than be lost.

**Recommended route:** narrow to "the only constraint beyond Cantor's theorem
established here", or drop "only". No deletion, id change, or reading-order
change is involved.

Nothing else this round needs a deletion, id change, or reading-order change.

---

## 7. Carry to A10, with wave 4's existing list

1. **Fact-fidelity, fourth wave running.** Five of this round's six nonfatal
   adjudications, plus DeepSeek's `[L3]` finding, are one shape: an `[L#]` fact
   restating its target slightly wider than the target states, or a step citing
   the right item and omitting the clause it uses. All are step-6-class polish,
   and **A8 forbids the edit** — which is correct, but it means the class
   accumulates rather than being fixed. Worth an owner decision on whether a
   post-A8 tidy pass is licensed.
2. **The Sonnet judge lane's verdict-extraction failure recurred.**
   `thm-konig`'s reason text literally concludes "no defect found" while the
   verdict is `reject`. `CLAUDE.md` predicted exactly this and asked for
   Sonnet's precision to be re-measured at the next A10. This round's sample:
   **8 Sonnet rejections → 1 fatal, 4 nonfatal, 3 false positive (12.5%
   precision-to-fatal, 62.5% real-finding rate)**; DeepSeek **2 → 0 fatal, 2
   nonfatal (100% real-finding rate, 0 fatal)**. A second Sonnet reason field
   (`thm-cardinal-power-set-and-cantor`) contained only "reported via
   ReportFindings" — harness vocabulary, not a finding.
3. **False cross-item Remark attributions: now four in wave 4** — A8-3, A8-4,
   this round's `thm-compact-iff-fip`, and the `thm-konig` Remark in §6. Every
   one asserts how some *other* item uses this one, and every one was wrong. No
   mechanical gate reads these. This is the wave's dominant fatal class and
   deserves naming as such in the A10 rundown.
4. **A correction to `wave4-published-repairs.md` §A8-3.** That record states
   "Measured across the whole corpus, **claim 4 is cited by no item at all**".
   That is false: `cex-a-continuous-image-of-a-locally-compact-space` line 88
   reads "claim 4 of `[[thm-locally-compact-hausdorff-basics]]` gives an open
   $V \supseteq E$ with $\overline{V}$ compact". The certifier found it. **The
   repaired text is unaffected** — it never asserts claim 4 is unused, only that
   the one-point compactification's point-versus-$\infty$ separation uses claim
   1 — so no re-repair is needed. The *record's* measurement is what is wrong.
5. **`RESUME.md`'s wave-4 section is stale** on the commit state (§1).

---

## 8. Escalation — twice-touched

`thm-compact-iff-fip` is the only item whose content hash moved twice in the
wave's touch ledger: at `post-A4-topology` and at `post-a8-round2`.

**It is not a twice-repaired proof.** `git diff 6c54914 HEAD` for that file shows
A4's touch was a **pure retag**: a `provenance` block, one `sources.references`
URL, and a trailing newline. No mathematical content. So the escalation
arithmetic fires but the underlying condition — a proof repaired more than once —
does not hold. Recorded here as the brief requires, with the evidence; no owner
action proposed.

The ledger's "52 item(s) now repaired more than once" remains the known artefact
of the three Betas' 22 per-item `pre-A4-<id>` snapshots (51 before this round,
52 after, the increment being the line above). Not a real count.

---

## 9. Gates — all green

| gate | result |
|---|---|
| `step8-guard --baseline pre-a8-round2-alpha` | **1 changed, 0 created, 0 deleted, 1/1 licensed**, exit 0 |
| `depcheck` | **exit 0 — `published-unaudited` EMPTY** (was 5) |
| `precheck` (6 touched items) | 5 proof-bearing checked, 0 failing (one is a definition) |
| `proof-contract --strict` | 0 errors, 0 warnings, 77/77 |
| `finite-smoke` | 0 errors |
| `impact-audit --from pre-a8-round2-alpha --to post-a8-round2 --receipt` | exit 0 — 1 changed interface, **24 dispositions, all `still-licensed`** (`wave4-a8-round2-impact-audit.json`) |
| `genrisk --receipt` | exit 0 (3 standing `verified-generated` warnings, unchanged) |
| `fwdcheck` `extcheck` `citecheck` `rendercheck` `prosecheck` `depsource` | all exit 0 |
| open judge rejections | **0** (12 current rejections, 24 adjudication rows) |

Adjudication tally across wave 4: **6 `confirmed_fatal`, 12
`confirmed_nonfatal`, 6 `false_positive`.**

Not run, and still outstanding from the owner's A9 deferral: the
`wave4-spine-audit.json` coverage receipt, which
`level-coverage --verify-current-context` requires and no driver step produces.
Unchanged by this round.

---

## 10. Files this round changed

Six under `items/`, nothing else:

- `thm-compact-iff-fip.md` — Remark repair, stale judge + obsolete verified
  removed, new verified stamp
- `def-cofinality.md`, `lem-successor-cardinal-exists.md`,
  `thm-locally-compact-hausdorff-basics.md`,
  `ex-compactness-in-the-standard-topologies.md`,
  `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval.md` — verified
  stamp only

Artifacts written: `wave4-judge-adjudications.jsonl` (+10 rows, 14 → 24),
`wave4-a8-round2-impact-audit.json`, `wave4-touches.json` (+2 snapshots),
`wave4-alpha.md` (recovery receipt), this file, and the dispatch records under
`wave4-dispatch/`.
