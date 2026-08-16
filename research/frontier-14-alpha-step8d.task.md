## Step 8d — the sixteen open judge rejections on batch 4

You are the **lead Alpha** for run `frontier-14`. The level is complete through
step 10 and the owner is deciding on publication. It cannot publish yet:
`level-coverage.mjs --verify-current-context` fails with 103 errors, and item 3
of the step-10 report's own publish checklist is yours —

> 3. Adjudicate the open judge rejections on batch 4.

Every one of these is a **current** rejection: the verdict was cast against the
item's frozen context as it stands on disk, and no exact-hash Alpha outcome
exists for it. All sixteen are on batch 4,
`triangularisation-and-jordan-canonical-form`, checked against the manifest
rather than assumed.

### The rules that bind you

- **Fatal-only (R1, owner 2026-08-03).** Only `confirmed_fatal` licenses an edit.
  `confirmed_nonfatal` and `false_positive` close the row and change **nothing** —
  no content, page, frontmatter, contract, impact or judge mutation.
- **The 30-second rule.** A gap between proof steps a competent reader closes in
  30 seconds is nonfatal. It governs gaps *between steps*; **a defect in the
  Statement itself is never 30-second.** At least two of these allege exactly
  that (a missing finite-dimensionality hypothesis in a Statement's Given, and an
  undefined term in a Definition) — weigh those differently from the rest.
- **Every one of these sixteen is a citation complaint**, which is this run's
  dominant fatal class and also the easiest thing to wave through. The house rule
  is explicit: an `[F#]`/`[L#]` restatement is an exact quote or the smallest
  faithful shortening, with **no changed domain, quantifier, hypothesis,
  direction or conclusion**, and a clause's opening words are not a citation.
  Several of these allege the *converse* of the cited lemma is being used, or
  that a fact is used outside its stated hypotheses. Decide each on whether the
  cited item's own Statement actually says what the fact claims.
- **Open the cited dependency from disk before agreeing or disagreeing.** Do not
  reason about what it probably says. `node tools/consumers.mjs <id>` gives you
  the consumers to check before any edit.
- **Baseline `pre-step8d` is recorded.** After any repair,
  `node tools/step8-guard.mjs --touches research/frontier-14-touches.json
  --baseline pre-step8d --adjudications research/frontier-14-judge-adjudications.jsonl`
  must pass. Every item you change must be licensed by a `confirmed_fatal` row
  carrying `item_sha256` of the **pre-repair** text
  (`node tools/item-hash.mjs <id>`).

### The sixteen, with each judge's verdict verbatim

### `cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable` — gpt-5.6-terra, context `be37aac957cd`
> Step 2.1 applies the induction result, which covers monic polynomials, to the characteristic polynomial without establishing or citing that the characteristic polynomial is monic. None of L1-L3 supplies this.

### `cor-nilpotent-similarity-classified-by-power-ranks` — deepseek-v4-pro, context `f32eb06ac65e`
> Step 1.2 chooses Jordan-string bases for N and M but cites only L1, which determines block multiplicities from power ranks and does not assert existence of such bases. Existence is thm-nilpotent-jordan-string-basis and is not cited.

### `def-triangularisable-endomorphism` — deepseek-v4-pro, context `448ce4e3316e`
> The definition uses 'upper triangular' without defining it or citing any item that does; the only cited dependency defines coordinate matrices, so the property is undefined.

### `ex-quotient-of-f-three-by-a-line-and-canonical-projection` — deepseek-v4-pro, context `72225c75ea39`
> Step 1.2 cites L2 to infer the two cosets form a quotient basis from the standard basis of F^3. The cited lemma only lifts a quotient basis to a basis of V, not the converse, so the move is unlicensed.

### `ex-quotient-of-f-three-by-a-line-and-canonical-projection` — gpt-5.6-terra, context `72225c75ea39`
> Step 1.2 uses L2 backwards: L2 says a quotient basis lifts to a basis of the original space, not that a basis beginning with a basis of W makes the remaining cosets a quotient basis. No cited fact licenses this inference.

### `lem-kernel-and-rank-sequences-of-powers` — deepseek-v4-pro, context `e7c0b98a6c19`
> Step 1.1 tags L1,L2 for converting subspace inclusions into dimension inequalities; L2 only defines rank and nullity and does not state monotonicity of dimension. The same omitted dimension-subspace fact is needed in steps 2.1 and 3.1 to equate inclusions with equal dimensions.

### `lem-kernel-and-rank-sequences-of-powers` — gpt-5.6-terra, context `e7c0b98a6c19`
> Step 1.1 says L2 turns subspace inclusions into dimension inequalities, but L2 only defines rank and nullity; no cited fact establishes that inclusion of finite-dimensional subspaces implies dimension inequality.

### `prop-generalised-eigenspaces-and-algebraic-multiplicity` — deepseek-v4-pro, context `e625ab1c92ea`
> Step 1.1 asserts from L1 alone that the linear factors x-lambda of mu are exactly the eigenvalues; L1 only gives the same irreducible factors, and the root-eigenvalue equivalence is thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, uncited.

### `prop-polynomial-calculus-on-restrictions-and-quotients` — gpt-5.6-terra, context `86c1e1ea564e`
> Step 2.1 applies L3 to the restriction on W and the quotient operator on V/W, but no cited fact establishes that W and V/W are finite-dimensional. L3 is conditional on finite-dimensional domains, so its use there is not licensed.

### `thm-cyclic-subspace-power-basis-and-companion-matrix` — deepseek-v4-pro, context `f57de0da8f94`
> The statement omits the finite-dimensional hypothesis on V, but steps 1.1-1.3 rely on L1, whose cited fact is stated only for finite-dimensional endomorphisms; the proof does not establish the claim as written.

### `thm-cyclic-subspace-power-basis-and-companion-matrix` — gpt-5.6-terra, context `f57de0da8f94`
> The Given clause never assumes the ambient vector space is finite-dimensional, but L1 applies only to finite-dimensional endomorphisms. Thus steps 1.1 through 2.1 invoke L1 outside its hypotheses; add finite-dimensionality or cite the generator property directly.

### `thm-first-isomorphism-theorem-for-vector-spaces` — deepseek-v4-pro, context `69b97ad0fa77`
> Fact [L2] omits the cited theorem's conclusion that ker T is a linear subspace, so step 1.1 applies the quotient universal property to W = ker T without a cited fact establishing W ≤ V; the step is therefore not licensed by its tags.

### `thm-jordan-form-exists-iff-the-characteristic-polynomial-splits` — deepseek-v4-pro, context `da99fd921ac3`
> Fact L3 overstates the cited block-triangular lemma: the source only covers a two-block triangular matrix, not an arbitrary finite block diagonal matrix. Step 1.2 uses this stronger claim to multiply all Jordan block polynomials.

### `thm-nilpotent-endomorphism-characterisations` — gpt-5.6-terra, context `1b154e6e101e`
> Step 2.1 cites step 1.2 to infer nilpotence makes the characteristic polynomial split, but step 1.2 only relates mu=x^r and chi=x^n. It needs step 1.1 to pass from nilpotence to mu=x^r.

### `thm-nilpotent-jordan-string-basis` — gpt-5.6-terra, context `98a7660b4cf4`
> Step 1.2 uses the same-dimension subspace conclusion to infer that N restricted to W is surjective, but cites only the induction hypothesis and algebra. This inference requires L3, which is not cited there.

### `thm-simultaneous-triangularisation-of-commuting-operators` — gpt-5.6-terra, context `919dac892b2b`
> Step 2.1 invokes induction on V/W without establishing that this quotient has smaller dimension than V. That requires the quotient-dimension conclusion of L5, but L5 is not cited or used in that step.

### What you write

1. **`research/frontier-14-judge-adjudications.jsonl`** — append one row per
   rejection, shape
   `{id, model, context_sha256, item_sha256, outcome, defect_type?, stage: "step8d", note}`.
   Use the full 64-hex `context_sha256` from the ledger, never null and never
   truncated. `defect_type` (`logic`, `dependency_citation`, `other`) is required
   on `confirmed_fatal`.
2. **`research/frontier-14-alpha-step8d.md`** — your report. Per rejection: what
   was alleged, what the cited dependency actually says on disk, your outcome and
   why, and for a repair, what changed and which consumers you checked.

**Name every item you repaired in a single explicit list at the end of the
report.** That list is the rejudge set and nothing else will be rejudged — the
owner's standing rule is `--items` with an explicit list, never `--pages`.

Note that a repair here also invalidates that item's proof-contract entry. Say so
in your report for each repaired item; the orchestrator will regenerate the
affected batch entries and re-merge.

**No permission prompts of any kind**, from you or any subagent you dispatch
(owner, 2026-07-30, broadened 2026-08-11). Choose non-escalated command forms and
stay inside the workspace. If you genuinely cannot proceed without new authority,
record a blocker in your report rather than asking.

Your read-only proof-refuter subagents are available and are the right tool for
the two Statement-level allegations. They return evidence and never edit; you
alone adjudicate.
