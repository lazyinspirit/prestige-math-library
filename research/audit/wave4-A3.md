# Wave 4 — A3 orchestrator decision receipt

Date: 2026-08-04
Role: orchestrator (not Alpha, not a Beta). Brief: `briefs/audit-orchestrator.md`, step A3.
Scope: 3 batches — foundations (34 items), real-analysis (18), topology (39). 91 items total.

## 0. Dispatch state — clean, and why the record looks otherwise

`wave4-run-state.json` journals A3 `complete` at 11:15:40 and A4 running to a
`gate-failed` halt at 11:25:20. **Neither happened as a matter of content.**

- The 11:12 A3 dispatch was handed `briefs/audit-alpha.md` (the A6/A8 role) by
  `run-wave.mjs:380`. It correctly refused, recorded the refusal in
  `research/audit/wave4-alpha.md`, and **exited 0** — which the driver read as a
  successful judgment and fell through to A4.
- All three A4 Betas then independently refused to apply, each citing the absent
  A3 approval, and each recorded the blocker in its own findings file.

Verified from disk, not from their reports: `git status --porcelain -- items/ library/`
returns **zero** changed files. `cex-a-continuous-image-of-a-locally-compact-space`
still carries `statement=undefined`, which is what the A4 `content-policy` halt
reported. Nothing was applied. The A1/A2 artifacts (3 findings registers, 3
provenance ledgers, 3 proof-contract files, 3 manifests) are all present.

**Conclusion: the prerequisites for A3 are on disk and no proposal has been
applied. This dispatch is correct and I am adjudicating it in full.** The prior
`A3: complete` journal entry is false and A4's `pre-A4` snapshot does not license
any edit.

## 1. What I read from disk

Normative: `CLAUDE.md`, `AUDIT-WORKFLOW.md`.
Registers and ledgers: all three `wave4-*.findings.md`, all 91 rows of the three
`wave4-*.provenance.jsonl`, the three `wave4-*.pages.json` manifests.

Item files opened and read at the cited lines (not the Beta's paraphrase):
`fs-cardinal-exponentiation-is-strictly-monotone-in-the-base`,
`thm-cardinal-power-set-and-cantor`, `thm-cardinal-arithmetic-agrees-with-finite-counting`,
`def-cardinal`, `lem-omega-least-limit-ordinal`, `ex-the-cofinality-of-aleph-omega`,
`ex-counting-functions-and-subsets-of-the-continuum`, `def-compact-space`,
`lem-compactness-of-a-subspace-is-ambient`, `rem-compactness-conventions-and-choice-ledger`,
`fs-a-compact-subset-is-closed-in-every-space`, `library/topology/compactness.md`,
`thm-alexander-subbase-lemma`, `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`,
`def-sequence`, `def-sequence-convergence-top`, `lem-nat-discrete`,
`fs-bounded-implies-convergent`, `fs-subsequence-convergence-implies-convergence`.

**Stated limit on this receipt.** I verified every class-(a) and class-(b)
proposal at its cited line, and I verified the class-(c) determinations
mechanically (vocabulary, ledger/manifest reconciliation, URL liveness,
dependency-target eligibility) plus the four `ai-generated` statement rows
individually. I did **not** re-read all 91 items' mathematics; that is A6's
surface and the brief does not narrow it.

## 2. URL liveness sweep — run here, because nothing else in this driver runs it

53 distinct URLs across the three ledgers, `curl -sSL --max-time 25`, non-200s
re-checked with a browser UA and again through the independent model-side web
route.

| status | count | disposition |
|---|---|---|
| 200 | 44 | accepted |
| **404 dead** | **2** | **blocking — must be removed before A4 writes it** |
| 403 both routes | 3 hosts | unverified — not accepted as evidence, not condemned |
| 000 conn-fail | 2 | unverified |

**Dead (404 on curl *and* on the model-side route):**

- `https://math.ucla.edu/~marks/notes/set_theory_notes.pdf` — carried by **12
  foundations rows**, including `thm-konig` (`exact-source`).
- `https://www.ms.uky.edu/~lee/ma502/notes7/node3.html` — carried by
  `lem-null-times-bounded` (`exact-source`).

**Unverified (403/000; the Beta reported 200 through its own route, and wave 2
established that a shell failure here is often an artefact — so I neither accept
nor condemn these):**

- `math.colorado.edu/~kearnes/.../cardinals_arithmetic.pdf` — 11 foundations rows.
- `pages.jh.edu/.../Hrbacek+Jech1999...pdf` — 7 foundations rows.
- `www.nku.edu/~longa/.../highlights2.1.pdf` — 6 real-analysis rows. **This one
  302-redirects to `websites.nku.edu/...`; the recorded URL is stale regardless
  of whether the content is reachable.**
- `www.math.cuhk.edu.hk/.../MATH 2050 L10 ....pdf` — 3 real-analysis rows.
- `citeseerx.ist.psu.edu/document?doi=b49ec80d...` — 1 topology row.

**Eleven foundations rows currently have no URL that resolved for me at all**
(`def-cardinal-arithmetic`, `lem-cardinal-arithmetic-basic-laws`,
`thm-cardinal-arithmetic-agrees-with-finite-counting`, `cor-cardinal-absorption`,
`def-infinite-cardinal-sum-and-product`, `thm-konig`, `cor-cofinality-of-a-cardinal-power`,
`fs-cardinal-addition-is-cancellative`, `ex-the-cardinality-of-the-continuum`,
`ex-the-cofinality-of-aleph-omega`, `ex-a-singular-cardinal-of-uncountable-cofinality`).
See §5 for what A4 must do about each class.

---

## 3. Class (a) — unambiguous falsehood

### F-A1 — `fs-cardinal-exponentiation-is-strictly-monotone-in-the-base`: APPROVED as proposed

**Verified from disk.** Statement explanation (line ~47): "strictness does hold in
the other slot, where $\kappa < 2^{\kappa}$ at every cardinal". Remark: "so does
strictness in the exponent slot in the one case proved on this page, $\kappa < 2^{\kappa}$."
Both present verbatim.

**The defect is real.** Strict monotonicity in the exponent slot is
$\mu<\nu \Rightarrow a^{\mu} < a^{\nu}$ for fixed base $a$. Cantor's inequality
compares $\kappa$ with $2^{\kappa}$ and is not an instance of it. Independently,
exponent-slot strictness is *false*: $1^{\mu} = 1 = 1^{\nu}$ for all $\mu<\nu$,
and $2^{\aleph_0} = 2^{\aleph_1}$ is consistent with ZFC — so the page asserts as
established a claim that is refutable and independent. `thm-cardinal-power-set-and-cantor`
clause (b) on disk reads exactly "$\kappa < 2^{\kappa}$" and claims nothing about
monotonicity, so the citation is also imprecise.

**Approved text: both replacements exactly as the Beta proposed.** They are
minimal, true, and the Refutation is untouched.

### T-A1..A5 — topology ambient-invariance: APPROVED, three sites as proposed, two AMENDED

**Verified from disk.** All five sentences present verbatim at the cited lines.

**The defect is real.** "A set compact in one ambient space is compact in every
other one in which it sits as a subspace" is false under its natural reading:
$[0,1]$ is compact in $\mathbb{R}$ and not compact in $\mathbb{R}$ with the
discrete topology, and both are ambients in which it sits as a subspace. The
Beta's own witness (infinite $A$, indiscrete vs discrete) is equally good. What is
intrinsic is compactness of the *space* $(A,\mathcal{T}_A)$, hence invariance
under homeomorphism — not compactness of a bare set under every induced topology.
`lem-compactness-of-a-subspace-is-ambient`'s Statement and proof are correct for
one fixed ambient; only the extrapolations are defective.

**Approved as proposed:** `def-compact-space:63`, `rem-compactness-conventions-and-choice-ledger:58`,
`fs-a-compact-subset-is-closed-in-every-space:77`.

**AMENDED — two proposals introduce a new falsehood and must not be applied as
written.** Both say a different ambient gives the same answer **"only when"** it
induces the same topology. That is a necessity claim and it is false: on an
infinite set the indiscrete and cofinite topologies are different and both
compact. The intended content is sufficiency. Apply these instead:

- `items/lem-compactness-of-a-subspace-is-ambient.md:94` — replace
  "it is the reason compactness of `A` does not depend on which space `A` is regarded as sitting inside"
  with: "it shows that compactness can be checked using ambient open sets for this
  fixed induced topology. Another ambient is guaranteed to give the same answer
  when it induces the same topology on $A$; if the induced topology changes, the
  answer may change."
- `library/topology/compactness.md:36` — replace
  "That is a statement about the subspace alone, so the notion does not depend on which larger space the subset is regarded as sitting in"
  with: "That is a statement about the topological subspace, so it is invariant
  under homeomorphism. For the same underlying set in another ambient, the answer
  is guaranteed to agree when the induced topology agrees."

**Additional constraint on `fs-a-compact-subset-is-closed-in-every-space:77`:** the
replacement is a clause inside a longer sentence that continues ", that being the
content of the intrinsic definition ([[def-compact-space]]), and a closed subset…".
Apply it so the sentence stays grammatical and **retains the `[[def-compact-space]]`
citation**, e.g.: "A compact subset remains compact in any other ambient inducing
the same topology on it — in particular, compactness is invariant under
homeomorphism — that being the content of the intrinsic definition
([[def-compact-space]]), and a closed subset of a compact space is still compact
([[thm-closed-subspace-of-a-compact-space-is-compact]])."

All five sites are judge-visible material changes: stale `verification.judge` and
obsolete `audited` stamps come off, and Beta writes no replacement certification.

---

## 4. Class (b) — citation precision

### Foundations

**F-B1 — `thm-cardinal-arithmetic-agrees-with-finite-counting` [L3]: DECLINED as proposed; a corrected repair is APPROVED in its place.**

The Beta proposed deleting [L3] and dropping `lem-omega-least-limit-ordinal` and
`def-ordinal` from `deps`. **[L3] is uncited but it is not unused, and deleting it
would create the exact defect this audit exists to remove.**

Evidence, read from disk:

- `def-cardinal`: "An ordinal $\kappa$ ([[def-ordinal]]) is a **cardinal** …". Being
  an ordinal is part of the definition.
- Step 1.1 concludes "so $n$ is a cardinal" and step 1.2 concludes "so $\omega$ is
  a cardinal". Their tag lists are [L1, L2, L4] and [L1, L4]; none of those states
  that $n$ or $\omega$ is an ordinal. Both steps establish only the
  no-smaller-equinumerous-ordinal half.
- `lem-omega-least-limit-ordinal` clause **(ii)** states exactly the missing
  premise: "every natural number is an ordinal ([[def-ordinal]]), and $\omega$ is
  an ordinal". That is [L3]'s first two clauses.

So [L3] supplies a genuine premise of steps 1.1 and 1.2 and is merely missing from
their citation tags. Deleting it removes the premise and leaves two steps resting
on an unstated proposition.

**Approved instead:** keep [L3]; add `[L3]` to the tag lists of steps 1.1 and 1.2;
and trim [L3]'s genuinely unused third clause, giving

> [L3] Every natural number is an ordinal, and $\omega$ is an ordinal ([[lem-omega-least-limit-ordinal]] claim (ii), [[def-ordinal]]).

`def-limit-ordinal` stays in `deps` (cited in the Statement, line 45);
`lem-omega-least-limit-ordinal` and `def-ordinal` stay in `deps` because they
remain cited here. **No `deps` entry is removed.** This closes all three strict
`citation-uses` failures without deleting a load-bearing fact. Material (step tag
lists change).

**F-B2, F-B3, F-B5, F-B6, F-B7 — APPROVED as proposed.** Each adds to a Fact the
elementary proposition the proof actually takes from `def-injection-surjection-bijection`
(strictly increasing ordinal maps are injective; the injectivity criterion; an
injection onto its range is a bijection to it) where the Fact previously linked
the definition and stated nothing about injections. This is the dominant defect
class and the cheapest correct repair in the workflow. No `deps` change; no
theorem's conclusion changes. F-B3's phrasing — stating the definition itself —
is the better pattern under the owner's `[F#]` fidelity rule; the others state a
one-line consequence of trichotomy plus that definition, which is acceptable and
strictly more honest than the status quo.

**F-B4, F-B8 — APPROVED as proposed.** Verified: in
`ex-the-cofinality-of-aleph-omega` and `ex-counting-functions-and-subsets-of-the-continuum`,
`def-injection-surjection-bijection` occurs **only** on the `deps` line and inside
the one Fact ([L6] / [L7]), and those Facts state ordinal trichotomy and
antisymmetry only — no injection proposition. Removing the link and the `deps`
entry is safe and correct. Material (`deps` changes) → each needs `impact-audit`
closure at A6.

### Real-analysis

**RA-B1 — `fs-bounded-implies-convergent` source interface: APPROVED as proposed.**
Verified: the Statement on disk ends "…refuted below by the alternating sequence
whose terms are $1$ and $-1$" and defines $(s_k)$ by recursion in the following
paragraph; it never defines the index map $n$ nor states the three propositions
that `fs-subsequence-convergence-implies-convergence` [L1] (line 50) imports as
"Established in [[fs-bounded-implies-convergent]]". A Fact may cite a target's
Statement/Definition/Example/Statement-refuted interface, not its internal proof
steps, so the downstream citation is currently unsupported at the interface. The
proposed sentence adds exactly the missing stable clause and changes no theorem,
witness, proof step, id, or reading order.

**RA-B2 — `fs-limit-preserves-strict-inequality` [L6]: APPROVED as proposed.**
Verified: `lem-nat-discrete`'s Statement on disk reads "For all $m,n \in \mathbb{N}$:
$m<n \iff \sigma(m) \le n$. Consequently there is no $k$ with $n<k<\sigma(n)$: the
successor $\sigma(n)$ is the immediate successor of $n$." That is precisely the
premise Refutation step 2.1 needs and that neither `def-nat-order` nor
`thm-nat-linear-order` supplies. Add `lem-nat-discrete` to `deps`; remove the
now-unused `def-nat-order`. Material → `impact-audit` closure at A6.

### Topology

**T-B1..B3 — `def-sequence` → `def-sequence-convergence-top`: APPROVED as proposed.**
Verified from disk: `def-sequence` reads "A **sequence of reals** is a function
$x : \mathbb{N} \to \mathbb{R}$" — reals only. `def-sequence-convergence-top` reads
"A **sequence in $X$** is a function $x : \mathbb{N} \to X$" — the general clause.
Citing `def-sequence` for a sequence of relations, a sequence of subsets of a
space, or a sequence in an arbitrary set is citing a definition for more than it
states. Applies to `lem-dependent-choice-along-a-sequence-of-relations`,
`def-baire-space`, and `thm-baire-category-locally-compact-hausdorff`. Material
(`deps` + reader-visible links) → `impact-audit` closure at A6, and A4 must re-run
`audit-manifest`/`depcheck` to confirm the new edge stays `published-backward` and
introduces no forward reference.

**T-B4..B6 (the six unused Facts) — RECLASSIFIED out of the owner queue and APPROVED as delegated class-(b) repairs.**

The topology Beta routed these to the A10 owner queue on the ground that they
"delete or move published prose". **I decline that classification.** R1 and
`AUDIT-WORKFLOW.md` §2 reserve for the owner "deletions, id renames/removals, and
structural reading-order changes", and the surrounding text fixes the meaning:
"Deleting or replacing a published **id** is never delegated (ids are immutable;
removals are owner-only)". None of these touches an id or a page's reading order.
A Facts block asserting a dependency no step uses is a citation-precision defect,
which R1 delegates. Nothing here is queued for the owner.

- `thm-alexander-subbase-lemma` [L8] — **remove.** Verified: `def-topological-space`
  is independently cited in the Statement (line 42), so the `deps` entry stays
  valid.
- `fs-a-compact-subset-is-closed-in-every-space` [L3] — **remove.** Verified:
  `def-hausdorff-space` is independently cited in the Remark (line 75), so the
  `deps` entry stays valid.
- `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval` [L5] — **move to
  Remarks verbatim, do not delete.** It is a scope-denial sentence ("compared
  nowhere below"), not a fact any step consumes; it belongs in Remarks and its
  four citations remain live there, so no `deps` entry changes. Deleting it would
  lose genuinely useful reader information about which topology is meant.

This closes the six strict `proof-contract` failures that currently keep the
topology contract red. Do **not** manufacture `uses` entries.

---

## 5. Class (c) — 91 provenance retro-tags

**Vocabulary and reconciliation, checked mechanically:** 91 rows / 91 manifest
ids, no omission, no extra, no duplicate. Statement census 80 `ai-altered` /
7 `literature-derived` / 4 `ai-generated`. Proof census 43 `ai-altered` /
31 `ai-generated` / 14 `not-applicable` / 3 `literature-derived`. Evidence 80
`semantic-source` / 7 `exact-source` / 4 `trivial`. **Zero `established-knowledge`
rows wave-wide**, so no D2 waiver and no Alpha concurrence is pending; every
`alpha_concurred` is `false`, consistent with that.

**The four `ai-generated` statements — APPROVED.** `ex-cardinal-absorption-computed`,
`ex-aleph-one-is-at-most-the-continuum`, `ex-the-beth-hierarchy-computed`,
`ex-counting-functions-and-subsets-of-the-continuum`, all evidence `trivial`. Each
is a positive determination (bespoke computed bundle directly verifiable from
named dependencies), not a failure to find a source, as the owner's 2026-08-02
standard requires. **Checked mechanically: each is cited in the `deps` of exactly
0 items**, so no `ai-generated` statement is a load-bearing dependency target
anywhere in the corpus and priority 2 is satisfied with nothing to minimise.

**The topology batch's uniform `ai-altered`/`semantic-source` for all 39
statements — APPROVED.** Uniformity is the correct outcome here, not a smell:
these are standard general-topology results, and the owner's rule is explicit that
uncertainty falls to `ai-altered`, never to `ai-generated` and never to a sourced
label. The 15 `ai-generated` **proofs** are the expected local-composition default
and carry no dependency consequence.

**APPROVED: all 91 determinations**, subject to the URL conditions below, which
are binding on A4 and are the only part of class (c) I am withholding.

### Binding URL conditions on A4

1. **`https://math.ucla.edu/~marks/notes/set_theory_notes.pdf` (404, both routes)
   must not be written into `sources.references` on any of its 12 rows.** Replace
   it with a source that resolves, and record the observed status in the ledger row.
2. **`thm-konig` may not keep `literature-derived`/`exact-source` on its present
   evidence** — one URL is dead and the other unverifiable. König's theorem is
   trivially sourceable; locate a resolving reputable source that states
   $\sum \kappa_i < \prod \lambda_i$ for $\kappa_i < \lambda_i$, verify it, and
   record it. If no such URL can be verified, the row is not `exact-source` and
   must be re-determined; it may **not** silently fall to `established-knowledge`,
   which requires Alpha concurrence that has not been sought.
3. **`lem-null-times-bounded` keeps `exact-source`** on the live
   `people.reed.edu/~mayer/...` URL; **drop the dead `ms.uky.edu` URL.**
4. **The `www.nku.edu/~longa/...` URL (6 rows) 302-redirects to
   `websites.nku.edu/...` — rewrite every occurrence to the canonical target**
   regardless of the 403.
5. **Every URL I could not verify** (`math.colorado.edu` ×11, `pages.jh.edu` ×7,
   `websites.nku.edu` ×6, `math.cuhk.edu.hk` ×3, `citeseerx` ×1): re-verify through
   the model-side web route at A4 and **record the observed HTTP status in the
   ledger row**. Any that does not resolve is replaced. Alpha owns the residual
   disposition at A6; my shell's 403 is not by itself a finding against the source.
6. Pure retags preserve `verification.judge`/`audited`. The items carrying a
   material repair in §3–§4 follow the §9 stamp-honesty rule instead.

---

## 6. Owner queue

**Empty for wave 4.** No deletion of a published id, no id rename or removal, and
no reading-order change is proposed anywhere in the three registers, and the only
items a Beta routed to the queue (topology's six unused Facts) are reclassified in
§4 as delegated citation-precision repairs.

Recorded, not chased, per the standing triage rule (they go in the A10 rundown as
observations, not repairs): the `compactness` A-page introduction is 1,264 words in
10 paragraphs and the `cardinal-arithmetic-and-cofinality` and
`sequences-and-limits` A-pages are legacy multi-section bodies with counts and
reading-position claims, all against the current two-paragraph summary contract.
Real-analysis also recorded genuine **published-claim decay** — six Remarks in
`lem-convergent-implies-bounded`, `lem-subsequence-inherits-limit`,
`fs-bounded-implies-convergent`, `rem-sequence-conventions`,
`lem-convergent-implies-cauchy` and `fs-subsequence-convergence-implies-convergence`
still say Bolzano–Weierstrass and monotone convergence are proved nowhere and their
page is planned, but `thm-bolzano-weierstrass` is now published. **A9 must pick
these up**; they are exactly the class no other gate sees.

## 7. Decision summary

| class | proposals | approved as proposed | approved amended | declined |
|---|---|---|---|---|
| (a) falsehood | 6 sites (2 items + 4 topology sites + 1 page) | 4 | 2 | 0 |
| (b) citation precision | 16 | 15 | 1 (F-B1, replaced with a corrected repair) | 0 |
| (c) provenance retag | 91 | 91, conditional on §5 | — | 0 |
| (d) debatable restatement | 0 | — | — | — |
| owner-queue | 3 proposed by topology | reclassified as delegated (b) | — | — |

**A4 is authorised** for every approval above, in the exact text recorded here
where I amended it. A4 must not apply the two "only when" sentences or the F-B1
deletion as the registers state them.

## 8. Note for the A10 report — a driver defect, not a content defect

Two mechanisms failed open in this wave and both should be fixed in the same
commit as the wave's repairs:

1. `run-wave.mjs:380` dispatches both judgment steps (A3 and A9) with
   `briefs/audit-alpha.md`. The A3 instructions live in `PLAN.A3.note`, read only
   on the `judgment: halt` path, so an autonomous wave never sees them.
   `dispatch.mjs` already has the `--task <file>` channel this needs.
2. A refusing agent exits 0 and is journalled as a successful judgment. Only the
   Betas' own discipline stopped 91 unadjudicated determinations and ~19 repairs
   from being applied here. The `judgment-empty` receipt check now exists; this
   wave is the evidence that it is load-bearing.

Neither is a mathematical finding and neither is repaired by this receipt.
