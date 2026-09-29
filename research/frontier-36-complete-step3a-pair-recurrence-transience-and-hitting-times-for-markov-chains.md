# Step 3a scope review — pair `recurrence-transience-and-hitting-times-for-markov-chains`

- Run: `frontier-36-complete` (stage `3a-scope`), dispatch label
  `step3a-pair-recurrence-transience-and-hitting-times-for-markov-chains-08534c4c240514b4`
- Role: alpha (scope reviewer; not owner, not item author)
- A page: `recurrence-transience-and-hitting-times-for-markov-chains` (batch 3,
  order 288.127, category `probability`, 27 items: 9 definitions, 5 lemmas,
  8 theorems, 5 corollaries)
- B page: `recurrence-transience-and-hitting-times-for-markov-chains-examples`
  (batch 3, order 288.128, companion `requires` only the A page, 10 items:
  7 examples, 3 counterexamples)
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-36-complete
  --page recurrence-transience-and-hitting-times-for-markov-chains
  --decision sufficient`.
- Date: 2026-09-28.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, item, design, plan or
engine artifact was edited; the only write is the scope receipt produced by the
command above.

## 1. Intended subject and role in the library

The controlling prose design is PT-16 of `research/plan-probability-track.md`
(A page heading lines 1750–1752, `Requires` lines 1754–1755, source backing
lines 1757–1760, 24 designed A items lines 1763–1787, hard-proof plan lines
1789–1802, B page lines 1804–1815). `research/plan-spec.json` agrees on page
ids, orders 288.127/288.128, category, companion pairing and the four declared
prerequisites; both plan rows carry empty item arrays (unspliced), so the batch
manifest `research/frontier-36-complete-batch-3.pages.json` is the inventory of
record, exactly as Step 1 recorded.

Intended subject (design line 514 summary: "communicating classes, Green
functions, recurrence, hitting probabilities"; title adds hitting times):
classification of countable-state, discrete-time Markov chains — transition
matrices and $n$-step probabilities; accessibility/communication classes;
hitting, return and visit times; renewal at successive returns; recurrence /
transience definitions and the equivalent visit-count and Green-series
criteria; the Green kernel and its resolvent identity; class invariance of the
classification and the irreducible dichotomy; hitting probability as the
minimal nonnegative harmonic extension, and finite-state Dirichlet uniqueness
under a.s. boundary hitting; period and aperiodicity; Pólya's classification of
simple symmetric walks on $\mathbb Z^d$; first-step equations for nonnegative
exit costs, superharmonic majorants, the Poisson equation for expected exit
time, and the Lyapunov drift bound for hitting times. The B page witnesses
these with finite-chain classes, gambler's ruin, birth–death scale products, a
biased-walk Green kernel, periodicity examples and the boundary
counterexamples.

Role and consumers. The four declared prerequisite pages are published and
earlier in the plan: `probability-spaces-random-variables-and-expectation`
(288.097), `independence-borel-cantelli-and-zero-one-laws` (288.099),
`stopping-times-and-optional-stopping` (288.123) and
`markov-kernels-and-markov-chains` (288.125). A scan of all 30 batch manifests
of this run finds exactly one in-run consumer of the A page: its own B page;
`research/frontier-36-complete-batch-3.cross-batch-dependencies.json` is `[]`.
The design's only later consumer is PT-17
`stationary-markov-chains-and-ergodic-limits` (design line 1821 and plan row
line 268), which is not part of this run; the A page supplies it with the
recurrence/transience vocabulary, return times, period and Green kernel, and
PT-17 owns positive/null recurrence, Kac's formula and convergence. The pair is
a supplier, not a consumer.

No published item or page uses any of the 37 new item IDs (recursive grep of
`items/` and `library/`: 0 hits), and no published item pairs "Markov chain /
transition matrix" with recurrence/transience language, so the subject is not
already in the library. The only published overlaps are method contrasts noted
in §5 and are intended by the design.

## 2. Design-to-manifest mapping

I extracted the 24 designed A item IDs and the 10 designed B item IDs from the
design and diffed them against the manifest: the A manifest is exactly the 24
designed IDs plus three local prerequisites, and the B manifest is exactly the
10 designed IDs, with no renamings and no losses. Kinds and order of the
designed items are preserved; dependency levels are 0–6 on A and 2–5 on B.

The three A additions, each a prerequisite of designed claims rather than new
subject matter (batch notes `…-batch-3.notes.md`, "Scope and design
reconciliation"):

| added item | role | why the published library cannot supply it |
| --- | --- | --- |
| `lem-finite-irreducible-chain-hitting-time-geometric-tail` | a.s. hitting and finite expectation feeding the finite Dirichlet theorem and the Poisson corollary (design items 14, 23) | no published finite-chain hitting-tail lemma; proved locally by a uniform block-path probability |
| `def-simple-symmetric-walk-on-zd` | one A-page lattice-walk kernel for design items 18–20 | the simple-walk kernel exists only as a B *example* on the published `markov-kernels-and-markov-chains-examples` page, and examples cannot be proof dependencies |
| `def-nonnegative-discrete-drift-for-countable-chains` | $P\psi$ for nonnegative possibly unbounded $\psi$ and $L\psi=P\psi-\psi$ when both are finite, for design items 22–24 | the published `def-discrete-generator-of-a-countable-state-transition-matrix` is stated for bounded functions only |

Design-to-statement qualifications recorded by Step 1 and verified as
consistent with the design text (not scope reductions): the renewal theorem
asserts iid excursions only in the recurrent case and conditions later
excursions on a finite previous return (design item 7 says "under $P_x$");
Dirichlet uniqueness is restricted to bounded solutions with the a.s.-hitting
hypothesis stated explicitly (design item 14 asks for exactly that
restriction); the exit-cost boundary payoff is assigned piecewise before any
random-time evaluation (design item 21 asks for exactly that); the period
definition adopts $d(x)=0$ when the positive return set is empty (design item
15 asks for a convention). These are mathematical qualifications, not dropped
results.

Subject-coverage map (A manifest): communicating classes — items 3, 4, 11, 12;
recurrence/transience — 6, 7, 8, 11, 12, 18–20; Green functions — 9, 10;
hitting/return times and hitting probabilities — 5, 13, 14, and the
drift/Poisson group 23–27 (Lyapunov 27; first-step 25; majorant 26); period and
aperiodicity — 16, 17, 18; finite-state tools — 14, 15; drift/Lyapunov — 24,
25, 26, 27. Everything the design names is covered, and nothing beyond the
three local prerequisites is added.

## 3. Source coverage

`research/frontier-36-complete-batch-3.coverage.json` records 78 rows: 58
`included`, 10 `inline`, 8 `out-of-scope`, 2 `already-published` (Roch Note 24
§1 and Theorem 24.2, already published on PT-15). Three sources are
fetch-verified with full-PDF receipts:

- Durrett, *Probability: Theory and Examples*, 5th ed. — §5.3 printed
  pp. 281–286 and §5.4 opening through Theorem 5.4.4, printed pp. 287–290
  (490-page PDF, sha256-16 `aeac36cbf5e44c53`).
- Levin–Peres–Wilmer, *Markov Chains and Mixing Times*, 2nd ed. — §1.3,
  §1.7 through Lemma 1.25, §10.1, §21.1 (461-page PDF, `9ef39f9467d9647f`).
- Roch, *Lecture Notes on Measure-Theoretic Probability Theory*, Note 24,
  §§1–3 (8-page PDF, `f9e38563f3748f4d`).

I checked the section anchors against the publisher-hosted tables of contents
(Durrett 5th-ed. contents: 5.3 at printed p. 281, 5.4 at p. 287, 5.5 at
p. 299; LPW 2nd-ed. contents: 1.3 p. 8, 1.7 p. 16, 10.1 p. 127, 21.1 p. 275,
21.3 p. 279). This confirms the batch note that the design's locator
"Durrett §§5.3–5.4, pp. 285–311" is stale pagination for this PDF and that the
harvested ranges are the correct ones; §5.5 onwards is PT-17 by design.

The eight `out-of-scope` rows are: Durrett Ex. 5.3.6 (branching process),
Ex. 5.3.7 (M/G/1 queue), Thm. 5.3.8 (coercive supermartingale recurrence
criterion), Thm. 5.4.1 (recurrent values of general $\mathbb R^d$ walks);
LPW Prop. 1.7 (eventual positivity), Rem. 1.24 and Lem. 1.25 (essentiality
distinct from probabilistic recurrence), Prop. 21.3 off-diagonal divergence.
None removes a designed item: the branching/queue rows are model families the
track excludes elsewhere, eventual positivity and essentiality belong to
convergence and graph classification, and the general-$\mathbb R^d$ row leaves
the countable-state convention. I judge the exclusions defensible; the one I
flag to the owner is Durrett Thm. 5.3.8 in §5.

Honest uncertainty. I did not re-fetch or re-read the three PDFs in this
review; I verified the fetch receipts and section anchors and the
manifest/coverage/design consistency, and the mathematical content is the
standard countable-chain classification theory with which I am familiar. Every
one of the 37 items cites at least one of the three fetched sources (checked
item by item); the design also names Varadhan §4.6 and Le Gall §§13.4–13.7 as
backing read, but those two treatments were not harvested and no item cites
them, so no item is unsupported while that corroboration remains unverified
in-run.

## 4. Dependency and interface checks

- Four declared `requires` pages published and earlier (orders above); a
  page-level closure over `plan-spec.json` from this A page has 188 pages.
- All 22 external (published) supplier items of the pair have home pages inside
  that closure; no `not-proved-here`/Recorded page is in the closure, so the
  Foundations bootstrapping boundary is not touched.
- All 37 items carry current Step-1 `ready` receipts
  (`research/frontier-36-complete-step1-<id>.json`; 0 missing, 0 escalated).
  The run-level Step-1 blocker names unit `16`, a different batch than 3.
- Step-1 drift entry for this page
  (`research/frontier-36-complete-drift-evidence.json[20]`) records no
  drift conflict beyond the stale locator; no owner deferral or direction
  entry mentions this pair (`…-owner-authoring-direction.md` has no
  probability-specific instruction; `…-scope-ledger.json` lists both pages in
  batch 3).
- AC is declared on the 20 contracts that consume conditional
  Markov/strong-Markov expectations, with the matrix/CK/kernel-algebra and
  finite-state witnesses kept choice-free; declared, not inferred, per the
  owner's AC rule.

## 5. Observations for the owner (no decision change)

1. Durrett Theorem 5.3.8 (coercive supermartingale recurrence criterion) is
   the one excluded row a reader might expect, since the page proves the
   Lyapunov *hitting-time* bound. The design's 24-item list omits it, no
   planned consumer needs it, and the page does carry a recurrence criterion
   (visit counts / Green series). If the owner wants the Lyapunov recurrence
   direction later, it would be an enrichment, not a defect in the planned
   set.
2. Intended overlaps: `ex-gamblers-ruin-hitting-probabilities-from-harmonicity`
   (B) parallels the published
   `cor-gamblers-ruin-hitting-probability-from-optional-stopping` by a
   different method (design §11 LPW 2.1 row: "gambler's ruin included
   PT-14/PT-16"); `lem-matrix-chapman-kolmogorov-equations` is a countable
   matrix specialization of the published `thm-chapman-kolmogorov-equations`
   and declares it as a dependency. Both are intended; no merger needed.
3. The coverage notes record that Roch's Theorem 24.7 proof contains a
   nonexit-path equality that need not hold, and that the scaffold uses only
   the valid Fatou inequality from that result. This is recorded evidence for
   Step 3b/5, not a scope matter.
4. B-page period examples (`ex-period-two-of-simple-random-walk-on-a-bipartite-graph`,
   `ex-lazy-chain-is-aperiodic`) depend on A period items 16–18, and the
   period vocabulary itself is required by PT-17's convergence theorem; its
   home on this page is correct.

## 6. Scope judgement

`sufficient`. The planned inventory is exactly the design's inventory plus
three local prerequisites that designed proofs need and the published library
cannot supply; the definitions, results and examples together cover
communicating classes, Green functions, recurrence/transience criteria,
hitting probabilities/times, periodicity and the classical lattice-walk
classification; every item is backed by at least one fetch-verified source;
all published suppliers exist and lie inside the declared prerequisite
closure; the pair's role and consumers match the plan; and no enrichment or
merger is required for the intended subject. The observations in §5 need no
action for this decision, and the §3 uncertainty is recorded rather than
presumed resolved.

## 7. Evidence index

- Design: `research/plan-probability-track.md` PT-16 lines 1750–1815 (A page
  1750–1802, B page 1804–1815); summary row line 514; requires rows lines 267
  and 268; harvest rows lines 2508, 2541, 2615–2617, 2619, 2621, 2623–2627.
- Plan: `research/plan-spec.json` orders 288.127/288.128 (items empty;
  unspliced), prerequisite orders 288.097/288.099/288.123/288.125.
- Batch inputs: `research/frontier-36-complete-batch-3.pages.json`,
  `…-batch-3.coverage.json` (78 rows), `…-batch-3.notes.md`,
  `…-batch-3.cross-batch-dependencies.json` (`[]`).
- Step-1 status: 37 `research/frontier-36-complete-step1-<id>.json` receipts
  (all `ready`); `…-step1-blockers.json` (unit 16 only);
  `…-drift-evidence.json[20]`; `…-scope-ledger.json` (both pages, batch 3).
- Owner records: `research/frontier-36-complete-owner-authoring-direction.md`
  (no pair-specific entry); no deferral, no owner decision for this pair.
- Sources: Durrett PTE5 (sha256-16 `aeac36cbf5e44c53`), LPW 2nd ed.
  (`9ef39f9467d9647f`), Roch Note 24 (`f9e38563f3748f4d`); tables of contents
  checked on the publisher-hosted PDFs (`sites.math.duke.edu/~rtd/PTE/`,
  `pages.uoregon.edu/dlevin/MARKOV/`).
- Checks run: design-vs-manifest ID diff (A: 24+3, B: 10 exact); kind and
  dependency-level inspection; page-level requires closure (188 pages) and
  external-supplier home-page membership; `not-proved-here` closure scan;
  recursive ID-collision scan against `items/`; consumer scan over all 30
  batch manifests and `plan-spec.json`; source-row disposition census.
- Not done (out of role): no proof-level verification of the items, no item
  decisions, no owner record, no scaffold/design/plan edits.
