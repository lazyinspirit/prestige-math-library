# `freegroups-1` — step 3 adjudication

Orchestrator decisions on Beta-freegroups-1-1's five recommendations. Per
`LEVELS.md` step 3 and the owner rule of 2026-07-30, these are mine: I verified
every load-bearing claim from disk first, and no stage advanced on the agent's
report alone. Decision priority, in the owner's order: (1) mathematical accuracy
and correct dependency citation, (2) minimize forward references, (3) preserve
mathematical richness.

Scaffold under adjudication: 44 items, of which **37 are new** — A page 6→32,
B page 1→12. Beta ran 63.6 minutes, exit 0.

---

## Verification of the load-bearing claim (the overlap audit)

Everything in the `W(X)/~` spine rests on the Beta's claim about what
`thm-reduced-words-form-the-free-group` already proves. **I read that item in
full from disk and confirm the audit is accurate on every point.**

It proves: existence of `red(w)` by the stack algorithm (1.1); invariance of
`red` under elementary moves, hence `w ~ red(w)` **and "two freely equivalent
reduced words are equal"** (2.1); the reduced-word group laws (3.1, 4.1); and the
universal property for the *reduced-word* model (4.2, 5.1).

It does **not** construct `W(X)/~`, prove that concatenation is a congruence for
free equivalence, prove the quotient group laws, use the van der Waerden
permutation argument, or state any model-comparison result. Confirmed by reading,
not by grep.

**The consequence the Beta did not draw, and which decides recommendation 1:**
the normal-form fact exists in the corpus *only as an internal proof step* of a
published theorem, never as a citable Statement. An item cites items, not proof
steps. So there is no id to reuse, and the reuse-before-minting rule is not
engaged.

---

## Decisions

### 1. Quotient-model normal-form theorem — **APPROVED**

Keep `thm-normal-form-for-the-word-quotient-model` and its supporting
`lem-formal-letters-act-by-permutations-on-reduced-words`.

The published proof reaches the same mathematical fact by a different route
(invariance of `red`), so this is a second proof of a known fact. That is
acceptable here for a reason stronger than the Beta's: **there is no citable id
for the statement**, so the alternative is not reuse but doing without. D6
requires a self-contained `W(X)/~` development whose universal property is
*earned*; rewriting the published item to expose the fact is a structural change
to published content and owner-only.

Splitting van der Waerden into its own lemma is explicitly endorsed — it is the
step where a plausible-but-wrong normal-form proof most often fails, and
isolating it makes it independently refutable. Alpha's brief already flags it.

**Obligation recorded:** the new item must not imply novelty over the published
theorem, and `cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic`
must actually reconcile the two models rather than leave rival definitions
standing.

### 2. Rank defined only for finite rank — **APPROVED, on stronger grounds**

The Beta's rationale (the homomorphism-count argument does not recover arbitrary
cardinalities) is true but understates the case. The decisive fact is
**dependency order**: the machinery that would settle infinite rank —
`cardinal-arithmetic-and-cofinality` — sits at **order 247**, against this page's
**order 60**. Only `countability-and-uncountability` (order 18) is below us, and
it does not give `|W(X)| = |X|` for infinite `X`.

So infinite-rank invariance is not merely underproved here, it is **unreachable**:
citing it would be a forward reference across 187 positions, which the plan-order
hard rule forbids outright. Finite rank is forced, not a shortfall. `def-rank-of-
a-finite-rank-free-group` must say so in its own words, so no reader mistakes the
restriction for the general theorem.

**Dropped-with-note, recoverable:** infinite-rank invariance is deferred, not
deleted. What would license it is a free-groups page ordered after 247, or a
cardinality lemma established below 60.

### 3. Relator/relation reconciliation, not a change to `def-group-presentation` — **APPROVED**

Correct, and for the reason the Beta gives plus one it does not. The published
definition uses "relations" loosely for elements of `R ⊆ F(X)`; Johnson's sharper
relator/relation distinction is more useful. But **changing the terminology of a
published definition is a convention change, which is owner-only and explicitly
outside the obvious-published-dependency-repair delegation** — that delegation
covers unambiguous falsehoods, never a choice between conventions. A new
vocabulary item that reconciles the two is the only route available to a build
agent. It must state the published usage and the sharper one and say they agree
on what `⟨X | R⟩` denotes.

### 4. Three-move reversible Tietze package — **APPROVED CONDITIONALLY**

Approved as a packaging choice, with a mathematical obligation attached, because
this is the one recommendation carrying real truth risk.

Tietze's completeness theorem — any two finite presentations of the same group
are connected by finitely many moves — is **only as true as the move set is
rich**. A package weaker than the classical four moves makes the theorem false,
and the Beta itself names the reverse direction "the most proof-sensitive planned
result". Equivalence of packages is therefore load-bearing, not cosmetic.

**Conditions, both binding at step 5 and checked by Alpha at step 6:**

1. `def-tietze-transformations` must state the move set precisely, including the
   legality condition on each inverse move, and must either prove its equivalence
   to the classical four-move list or cite a reputable source that states that
   equivalence exactly. A bare assertion of equivalence is a fatal defect.
2. `thm-tietze-transformations-connect-finite-presentations` is flagged
   **high-risk** for `risk-report.mjs` and requires an Alpha `risk_review`
   disposition at step 6, plus a dedicated proof-refuter on the reverse
   direction.

### 5. `D_n` = symmetry group of the `n`-gon, order `2n`, `n ≥ 3` — **APPROVED**

Verified against the corpus rather than taken on report. The published
`ex-symmetries-of-a-square` carries the alias **`ex-dihedral-group-of-order-8`**
and cites Wikipedia's *Dihedral group*. A square is a 4-gon, and order 8 = 2·4,
so the corpus already behaves as `D_n` = order `2n`. This also satisfies the
standing convention rule: most widely adopted, Wikipedia as tiebreaker.

Requiring `n ≥ 3` and handling the Klein four-group separately is right — the
`n = 1, 2` cases are degenerate and folding them in silently would make the
statement false.

---

## D7 — Alpha is first dispatched at step 6, not step 4 (orchestrator)

`LEVELS.md` spawns Alpha-n at step 4 to apply `.notes.md` amendments into
**higher-level prose scaffolds**. This run has none: like `zfc`, it began from no
`research/plan-*.md` prose design, and it is a **single batch**, so there are no
cross-batch prose seams to propagate and no second Beta whose notes need merging.
Alpha's step-4 duty is therefore vacuous here.

I do the `plan-spec.json` splice myself at step 4 and first dispatch Alpha at
step 6, where it has real work. This is a recorded deviation, not a skipped
gate: every step-4 obligation that exists in this run is discharged, and Alpha's
step-6 and step-8 duties are untouched. Logged here so the deviation is visible
to the owner at step 10 rather than inferred from a missing dispatch record.

---

## Not adjudicated, because correctly dropped

**All D2 computability material** — no item rests on unbuilt machinery. Held.

**Nielsen–Schreier** — dropped for want of Schreier/Nielsen or covering-space
machinery. I agree; I predicted this at scope time and the Beta reached it
independently. Deferred, not deleted.

---

## Next action

Step 4: splice into `plan-spec.json`, then dispatch the Beta as step-5 author on
the approved scaffold.
