# frontier-10, batch 8 — second repair round (R2)

You are **Beta-frontier-10-8**. Alpha's re-check found your pair **still
insufficient**. Your F1 redirect, Conrad 6.8 and 6.4, and all four boundary
witnesses were accepted — the B page going 12 → 16 is right, and Conrad §6 is
now completely disposed. One finding remains.

## R2 — two declines name a home that does not exist

Two of your fifteen declines defer a result to a page that is not in
`plan-spec.json` at all. A decline pointing at a nonexistent home is not a
disposition; it is a silent drop wearing one, which is the failure this whole
stage exists to catch.

- **Conrad Theorem 6.6, Jordan's derangement theorem** — every nontrivial
  transitive action of a finite group on a set with more than one element has an
  element with no fixed point.
- **Conrad Theorem 6.10** — the conjugates of a proper subgroup do not cover a
  finite group.

Read Alpha's R2 section for its exact reasoning. Both are immediate consequences
of material you already scaffold — orbit–stabiliser, the orbit count and the
class equation — so under the owner's build-the-machinery rule they are **built,
not deferred**. Add both as A items and rewrite the third decline's reason that
Alpha flags.

Two A items takes your page from 29 to 31 new items, 35 to 37 enriched. Nowhere
near the 60 ceiling, and **no split**.

## Read this first

`research/frontier-10-alpha-step3-scaffold-review.md` — Alpha's **re-check**
sections, not just the original review. Seven pairs came back `resolved`; yours
did not.

## What you may change

Only your own four `research/frontier-10-batch-8.*` artifacts. Nothing in
`items/`, `library/`, `plan-spec.json`, or another batch. Authoring is step 5 —
this round changes the **scaffold and the harvest** only.

Every item you add must also appear in `coverage.json` with a real disposition
and its source. An item in `pages.json` but not the harvest is the exact drift
step 6 catches.

## Gates before you report

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-8.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-8.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox.

## Report

Per finding: what you added, where it sits in the harvest, and its source. Alpha
re-checks again before step 4 splices, so a silent skip costs another full round.
