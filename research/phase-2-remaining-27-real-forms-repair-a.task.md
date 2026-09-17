# Step 3b repair A — Chevalley consumers, `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13. Three escalated items of the pair were
reopened by the owner after the missing inputs were supplied. Repair exactly the
three items below; do not touch any other item, the batch manifest, coverage,
proof contracts, notes or the pair report.

## Items

1. `items/thm-existence-of-a-compact-real-form.md` — the closure of k_0 needs a
   root-vector basis whose structure constants are real with
   N_{αβ} = −N_{−α,−β}. That input is now proved by
   `lem-chevalley-basis-and-real-structure-constants` (Knapp VI Thm 6.6 with
   Lemma 6.4, printed pp. 351–353, and Etingof §39.4). Add it as a dependency,
   rebuild step 2.2's closure argument on it, and keep the locally repaired
   sign/claim corrections already recorded in the item's Remarks.
2. `items/thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form.md`
   — uniqueness compares the two split forms through the Serre presentation and
   needs simple-root generators satisfying the Serre relations over a
   normalized real basis: that is Knapp Thm 6.6 with Lemma 6.4, now available;
   Chapter II Existence Theorems 2.108/2.111 are now inside the declared Knapp
   coverage.
3. `items/thm-classification-of-real-forms-by-vogan-diagrams.md` — surjectivity
   for every abstract Vogan diagram needs a compact real form u_0 with
   θ(u_0) = u_0 for the involution read off the diagram; Knapp Thm 6.88 with the
   normalized root-vector system. Item 1 (compact real form existence) is being
   repaired in parallel and is your declared supplier; add it as a dependency.

## Rules

- Rewrite each item's proof so it is complete at the dispatch standard; keep the
  manifest statement (do not weaken it).
- Update each item's frontmatter `deps` to every load-bearing prerequisite
  (including the new supplier). Do not edit the batch manifest — the
  orchestrator re-syncs it after both repair lanes finish.
- Run `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (adopt the
  canonical form it prints if it reports REPAIR) and `node tools/rendercheck.mjs`
  for each item.
- Record the decision for each item:
  `node tools/step3-decisions.mjs record-item --run phase-2-remaining-27 --item <id>
  --decision repaired --confidence 1 --dependencies '<json>' --reason '<evidence>'`.
- Write your report to `research/phase-2-remaining-27-real-forms-repair-a-report.md`
  with the exact source locators used, what changed, checks run, and any gap.
- Mathematical integrity: full proofs only; if a step cannot be completed,
  record `escalate` for that item with the exact locator and gap.
