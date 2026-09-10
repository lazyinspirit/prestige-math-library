# Phase 2 catch-up 24 — Step 3a scope review, group f

Run: `phase-2-catchup-24`  
Batches: 12, 13  
Role: scope only; no item-proof approvals or owner decisions

I reviewed the current A/B manifests and coverage, both batch notes, the
binding prose designs, `research/plan-spec.json`, the scope ledger, both
per-batch dependency records, the unified frontier ledger, the relevant
published-consumer records, and the prior scaffold decisions. No current
Step-3a owner receipt exists for either pair. Both per-batch frontier files are
`[]`, consistently with the proofs' use of earlier published prerequisites.

For the unfamiliar Boone construction I independently read the complete
relevant argument in Rotman, Chapter 12: printed pp. 418–433 through the
sufficiency proof and pp. 438–447 through Lemma 12.15. The source has the
machine-to-semigroup reduction, Boone presentation, pushing direction, HNN
tower, Britton extraction, and reconstruction direction that the prose design
requires. The coverage also records a complete independent endpoint check in
Simpson and full-text receipts. For batch 12, the active Checkoway and Savage
coverage spans the stay-put model and simulation construction; the unavailable
UNSW source is a documented drop with complete local alternatives and no lost
selected result.

## `one-tape-simulation-normal-forms` / examples — sufficient

The binding prose commissions the stay-put normal form for the deterministic
right-infinite one-tape model, not a survey of every Turing-machine normal
form. The current 3+2 inventory adequately realizes that subject:

- an explicit stay-put machine/run interface fixes the extended direction,
  finite-support, halting, and divergence conventions;
- the tagged right-then-left macro isolates the local simulation mechanism;
- the theorem states the global boundary-time simulation and preservation of
  accepting, rejecting, divergent, head, tape, language, and output behavior;
- the worked boundary/empty-input example and the deletion/replacement
  counterexample exercise the construction and its main misuse.

This pair therefore supplies a self-contained replacement for the old draft
stay-put theorem at the intended robustness seam. Two-sided-tape folding is
properly excluded: it changes a different machine feature, and the prose does
not commission it here. The broader published robustness page already houses
other model-equivalence topics. No enrichment or merger is needed.

## `boone-machine-simulation-and-fixed-presentation-undecidability` / examples — sufficient

The current 13+3 inventory exactly matches the binding group-theory design and
covers the full direct Boone route:

1. normalize one fixed recognizer to a one-stop finite tape machine;
2. define its finite positive semigroup and prove that terminal equality
   detects halting in both directions;
3. define the Boone group and special word;
4. supply the base-group, associated-subgroup, HNN-tower, pushing, extraction,
   no-pinch, and positive-reconstruction interfaces;
5. obtain the special-word equivalence and undecidability for one fixed finite
   presentation.

The examples cover the nonstandard sharp operation, the empty-right-tape
cleanup convention, and the fixed-versus-uniform quantifier distinction. This
is adequate for the pair's library role: it replaces the recorded
Novikov–Boone boundary theorem with a proved supplier and supports the three
listed Phase-3 consumer repairs. Higman embedding, Adian–Rabin, the alternate
modular-machine construction, prescribed r.e. degree, and elementary positive
word-problem exercises are distinct or stronger subjects expressly outside
this pair; omitting them does not leave the commissioned fixed-presentation
endpoint incomplete. The inherited use of AC is visible in the group-stage
scope. No enrichment or merger is needed.

## Decisions

| A page | Decision | Scope basis |
|---|---|---|
| `one-tape-simulation-normal-forms` | `sufficient` | Complete stay-put interface, macro, global preservation theorem, and two targeted examples for the exact prose role. |
| `boone-machine-simulation-and-fixed-presentation-undecidability` | `sufficient` | Complete 13-item direct machine/semigroup/HNN chain plus all three commissioned examples and consumer-facing fixed-presentation endpoint. |

