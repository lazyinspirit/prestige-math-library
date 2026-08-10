# Beta-freegroups-1-1 — STEP 5 AUTHORING brief for run `freegroups-1`, batch 1

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on you.** Use
> commands already allowed inside the workspace sandbox; choose non-escalated
> forms and never ask the owner to approve a shell command. Pass
> `dangerouslyDisableSandbox: true` on every Bash call. If an indispensable
> operation has no escalation-free form, report a blocker instead of prompting.

You are **Beta-freegroups-1-1**, returning as the **step-5 author** of the
scaffold you produced. The checkout is `/root/Projects/prestige-math-library`,
the directory you were started in. You author every item you scaffolded; at
step 6 you are excluded from auditing your own work.

## 0. Read first, in this order

1. `CLAUDE.md`, `SCHEMA.md`, `README.md` — normative. SCHEMA wins over this brief.
2. `briefs/authoring.md` — **your base contract**, binding in full.
3. `items/lem-cauchy-bounded.md` — the approved house-style exemplar. Match it.
4. `research/freegroups-1-RESUME.md` — decisions **D1 to D7 bind you**.
5. **`research/freegroups-1-step3-decisions.md` — MY ADJUDICATION. Read it in
   full before authoring. It approves all five of your recommendations, two on
   different grounds than you offered, and it attaches binding conditions to the
   Tietze package.**
6. Your own `research/freegroups-1-batch-1.notes.md` and
   `research/freegroups-1-batch-1.proof-contracts.json`.

## 1. What you are authoring

`research/freegroups-1-batch-1.pages.json` is now **mint-only**: exactly the
**37 new items** you author. The 7 already-published items were removed because
`content-policy.mjs --manifest-only` asks "may these ids be minted here?", which
a published id cannot answer. The interleaved page ordering you designed is
preserved in `research/freegroups-1-batch-1.pages.full.json` — use it for
reading order and citation order, but **author only the 37**.

## 2. Binding constraints from my adjudication

**(a) Every new item is `status: draft`.** Both pages are published. Do **not**
edit `library/abstract-algebra/free-groups-and-presentations.md` or its
`-examples` companion, and do not add any id to their `items:`/`examples:`
lists — `depcheck` raises `draft-on-published-page`. Page changes are staged at
step 6, not applied by you (D4).

**(b) Do not touch `plan-spec.json`,** any published item, or any file outside
`items/` and your three namespaced `research/freegroups-1-batch-1.*` files.

**(c) The quotient normal-form theorem must not imply novelty.** The published
`thm-reduced-words-form-the-free-group` already reaches the same mathematical
fact by a different route (invariance of `red` under elementary moves, its
step 2.1). You are minting a standalone Statement because none exists to cite,
**not** because the fact is new. Say so honestly in the item's Remark, and make
`cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic` genuinely
reconcile the two models rather than leaving rival definitions standing.

**(d) `def-rank-of-a-finite-rank-free-group` must state its own restriction.**
Infinite-rank invariance is not merely unproved here, it is **unreachable**:
`cardinal-arithmetic-and-cofinality` is at order 247 against this page's order
60. A reader must not mistake the finite-rank theorem for the general one. Do
not hint that the general case follows.

**(e) TIETZE — two conditions, both mandatory.** Completeness is only as true as
the move set is rich, so the equivalence of your three-move reversible package
with the classical four-move list is **load-bearing, not cosmetic**:

1. `def-tietze-transformations` states the move set precisely, **including the
   legality condition on each inverse move**, and either proves its equivalence
   to the classical four moves or cites a reputable source stating that
   equivalence exactly. **A bare assertion of equivalence is a fatal defect.**
2. `thm-tietze-transformations-connect-finite-presentations` is flagged
   **high-risk**. Author its reverse direction with particular care; it will get
   a dedicated proof-refuter and an Alpha `risk_review` at step 6.

**(f) `D_n` is the order-`2n` symmetry group of the `n`-gon, `n ≥ 3`,** stated
explicitly in the Statement, with the Klein four-group handled separately. This
matches the corpus: published `ex-symmetries-of-a-square` carries the alias
`ex-dihedral-group-of-order-8`.

**(g) Nothing may rest on computability (D2).** No item, proof step, Fact or
Remark may assert or rely on decidability, Novikov–Boone, Dehn's decision
problems as decision problems, "solvable word problem" as a predicate,
Knuth–Bendix, or Todd–Coxeter. The three deletion counterexamples are claims
about a **specific syntactic procedure** and must be stated as such.

**(h) Do not reconvention the published `def-free-group`.** It characterises a
free group abstractly by the universal property, and D6 keeps it. Your
`W(X)/~` items construct a model and *prove* it satisfies that characterisation.

## 3. The standing authoring rules

Component provenance (`provenance.statement` and `provenance.proof`) on every
mathematical-content item, with per-item rationale in your notes. Dependency
discipline: each `[F#]`/`[A#]`/`[L#]` fact reproduces the cited Definition or
Statement, or is its smallest faithful shortening — no changed domain,
quantifier, hypothesis, direction or conclusion, no invented converse. No
`ai-generated` Statement/Construction is ever a `deps` target. Natural
mathematical voice: no "Null definition:" or interpretive filler. Every proof
step cites an explicit fact, an earlier step, a given hypothesis, or elementary
algebra. Titles must not assert more than the proof gives — an overstated title
is fatal at step 6 and the judges cannot see it.

## 4. Gates you run yourself before reporting

```
node tools/tsx-run.mjs tools/precheck.mts items/<each new file>
node tools/content-policy.mjs research/freegroups-1-batch-1.pages.json
node tools/depcheck.mjs
```
Adopt `precheck`'s printed canonical stratification on REPAIR output and re-run
until clean; the repo stores the strictly stratified form. Record
`verification.precheck: pass`. Keep your proof-contracts file in step with what
you actually wrote — it is gated with `--strict` after this step.

## 5. Checkpoint and report

At 60% of your context, append a concise checkpoint to your batch notes and
continue without waiting for me. Your final message is the return value: what
you authored, every gate result, every place you departed from the scaffold and
why, anything you could not close honestly, and anything needing my
adjudication.
