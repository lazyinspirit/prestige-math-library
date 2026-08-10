# This dispatch — Stage 2, step 6: the whole-run audit

All nine independent readers have reported and repaired. **You adjudicate every
one of their findings from disk** — not from their reports. You are the only role
that can confirm, refute, amend or extend a reader's repair, and no author
certifies its own work.

## What the readers found

| batch | fatal families | nonfatal |
|---|---|---|
| 1 symmetric groups, matrices | 0 | 13 |
| 2 finite abelian, free products | 0 | 6 |
| 3 polynomial rings | 0 | 21 |
| 4 bounded variation, improper integrals | **2** | several |
| 5 Fubini, change of variables | **4** | several |
| 6 Ramsey, plane graphs | **2 proposed** | 4+ |
| 7 categories, functors | **7** | 20 |
| 8 group-actions enrichment | 0 | 22 |
| 9 Gaussian elimination, determinants | 0 | 10 |

**15 fatal families.** Their findings files are
`research/frontier-10-reader-<i>.findings.md`.

Ones to weigh hardest:

- **Batch 5 F1** — `lem-finite-jordan-cover-sum-bounds` was a **false Statement**,
  with an explicit counterexample ($E=E_1=[0,1]$, $h=0$, $M_1=0$, $E_2=[2,3]$,
  $M_2=-1$ giving $0\le-1$). Repairing a proof does not establish an altered
  Statement — verify the new one is true, not merely licensed.
- **Batch 5 F2** — Cavalieri invoked before its Jordan-measurability hypothesis,
  i.e. circular. Check the repair is not circular by a longer route.
- **Batch 7** — seven fatal defects at the foundations: an ill-typed
  large-category definition, an over-large functor-category construction, a
  set/class domain mismatch, loop-only results applied to arbitrary endpoint
  paths, and a reversed automorphism multiplication. Size and class hygiene is
  where a category page fails; no gate can see it. The reader states plainly that
  its label describes the pre-repair text and **does not certify the repair**.
- **Batch 6 F1** — a **false title** claiming a "first exact Ramsey number". The
  paired judges read Statements and cannot see a title, so this class is yours
  alone. Check every title in the run against what its proof delivers.
- **Batch 4 F2** — three failures in one item, including a Cauchy **net** treated
  as a Cauchy **sequence**.

## Your other Stage-2 obligations

1. **§6b.0 harvest faithfulness.** Open the sources at their stated locators and
   judge whether each `coverage.json` reflects what the range contains. This is
   the check no script can make, and it is why the artifact exists.
2. **Read-only proof refuters.** Dispatch them on the highest-risk proofs —
   `risk-report.mjs` tiers, plus the 15 repaired fatal items. Every refuter brief
   must carry the no-permission-prompt block.
3. **Contracts and risk.** Reconcile
   `research/frontier-10-proof-contracts.json` (474 items) after the repairs and
   write a `risk_review` for every high/critical item — step 6 is where
   `--require-reviewed` binds.
4. **L1 and L2**, carried from your re-check: batch 4's MIT-syllabus ledger row
   should cite Rudin ch. 6 directly, and batch 8's Theorem 6.9 home should be
   `cosets-and-lagranges-theorem`.
5. **Cross-batch and cross-level citations** from disk, against
   `research/frontier-10-audit-manifest.json`.
6. **Page summaries** — exactly two prose paragraphs under 150 words each on
   every A page; no authored summary body on a B page.
7. **The re-home follow-ups** you flagged: the two moved items' own wikilinks and
   any positional prose. The move is now APPLIED (both `library/` pages and
   `plan-spec.json`), so check them in their new home at order 46.
8. **Audit receipt** `research/frontier-10-audit-coverage.json` and the
   **spine receipt** `research/frontier-10-spine-audit.json`.

## Boundaries

Step 6 is the **last unfrozen moment** — nonfatal polish is allowed here and
forbidden after step 7 under R1. Batch 8 enriches a **published** pair: do not
edit the two group-actions page files, do not flip any status, and leave the
additions staged in `research/frontier-10-published-amendments.md`.

Record blockers rather than prompting. Keep
`research/frontier-10-alpha-report.md` current.
