# Wave 5 — Audit-Beta findings, `topology-function-spaces` batch (A1/A2)

Scope of record: `research/audit/wave5-topology-function-spaces.pages.json` —
1 A/B pair, **33 items**.

| page | kind | items |
|---|---|---|
| `function-space-topologies` | A | 24 |
| `function-space-topologies-examples` | B | 9 |

**Coverage statement.** Every one of the 33 items was read from disk in full.
Every numbered proof step in the 25 proof-bearing items was verified against its
declared `[A#]`/`[L#]` facts, and every dependency citation was verified against
the cited target's own on-disk `Statement`/`Definition`/`Example` section. No
exception; nothing was sampled. 103 distinct citation targets were opened.

**Headline: one finding I am escalating as possibly fatal (F1), nine nonfatal.**
No false mathematical claim, no invalid inference, and no mis-citation that
changes a hypothesis, quantifier, direction or conclusion was found in any
Statement, proof step or Verification. F1 is a **false claim about the library's
own contents**, made twice in reader-facing prose, and contradicted by two other
items on the same page; I do not classify its fatality myself.

---

## Checkpoint (substage / next action)

- **Substage:** A1 + A2 complete. Awaiting A3 adjudication before any A4 edit.
- **Artifacts owned:** `wave5-topology-function-spaces.{provenance.jsonl,findings.md,proof-contracts.json}`
  plus the generator `research/audit/gen-wave5-fs-contracts.mjs` that emits the third.
- **Next action:** A3 — Alpha adjudicates F1 and N1–N9. Nothing here is a bulk
  pure retag: F1's repair, if approved, is a **material** repair to two items and
  takes its own dedicated per-item `touchlog` snapshot; the other 31 items are a
  pure-retag pass under **one** stage snapshot.
- **Working-tree baseline:** commit `4fec483`; I have modified no item file.

---

## F1 — Published-claim decay: two items deny the library has machinery it now has

**Class (d), debatable restatement / published-claim decay. Escalated to Alpha
for the fatality call.**

Two items assert, in reader-facing prose, that this library defines compactness
only for metric spaces and has no tube lemma for a compact factor of an
arbitrary product. Both assertions are false against the current corpus, and the
page contradicts itself about it.

**The disk facts.**

- `library/topology/compactness.md` is `status: published` and hosts
  `def-compact-space`, which defines compactness for an **arbitrary topological
  space**: "$(X,\mathcal{T})$ is **compact** when every open cover of it has a
  finite subcover".
- The same page hosts `lem-tube-lemma-for-a-compact-factor`, which is exactly
  the general tube lemma: "Let $(X, \mathcal{T}_X)$ and $(Z, \mathcal{T}_Z)$ be
  topological spaces … Let $K \subseteq X$ be a compact subset
  ([[def-compact-space]]) … Then there is an open $W \subseteq Z$ with
  $z_0 \in W$ and $K \times W \subseteq N$."
- `compactness` is **earlier** in the reading order than this page, not later:
  two of my own items declare dependencies into it —
  `def-locally-compact-metric-space` → `thm-compactness-agrees-with-metric-compactness`,
  and `lem-tube-lemma-for-a-compact-metric-factor` → `lem-tube-lemma-for-a-compact-factor`.

**The two false clauses.**

1. `rem-function-space-conventions`, section 1:
   > "the only one available at this point in the reading order is
   > [[def-metric-compactness]], which is defined for metric spaces. Compactness
   > for an arbitrary topological space is developed **only later in the reading
   > order, so it is unavailable on this page and nothing here anticipates it**."

   Both sentences are false. It is developed earlier, it is available, and two
   items on this very page cite it.

2. `thm-the-exponential-law`, Remark 2:
   > "**this library defines compactness only for metric spaces**
   > ([[def-metric-compactness]]), so 'compact subset of $Z$' and 'compact
   > subset of $X \times Z$' have no meaning at this point in the reading order.
   > Supplying them needs the page that defines compactness for arbitrary
   > topological spaces; on top of that, the standard proof of the homeomorphism
   > form needs **a tube lemma for a compact factor of an arbitrary product**."

   The first clause is false; the page it says is needed already exists and is
   earlier; and the tube lemma it says is missing is `lem-tube-lemma-for-a-compact-factor`,
   also already present and earlier. Only the third requirement it lists (that a
   compact subset of $X \times Z$ be covered by finitely many products of
   compacta) remains unlocated by me, and I did not search for it.

**Two items on the same page already say the opposite**, which is how I found
this. `def-locally-compact-metric-space`, Remark 1: "General topological
compactness **is now available at this point in the reading order**, alongside
the metric notion". `lem-tube-lemma-for-a-compact-metric-factor`, Remark 4: "The
general tube lemma, for a compact factor in an arbitrary topological product, **is
now available in this library, on an earlier page**". Both carry
`verification.verified` dated 2026-07-29; the two stale items did not get the
same update. `rem-function-space-conventions` carries a *later*
`verification.verified` (`scope: published-audit`, 2026-08-03) that did not catch
this.

**Why I am not calling fatality myself.** No mathematics is wrong: the theorem
`thm-the-exponential-law` proves is correct, its refusal to claim a homeomorphism
is correct, and its final sentence "None of that is proved here" is still true of
this page. What is false is a claim about the library's contents, stated as the
*reason* for the scope limit, and it tells the reader the library lacks material
it has. The standing rule says a mathematical falsehood in a Remark is fatal;
whether a false claim about library state in a Remark is fatal is Alpha's call.

**Proposed repair if approved (smallest correction, no id or statement touched).**
Replace the two false clauses with the accurate ones already used by the two
current items on the same page, i.e. state that general topological compactness
and the general tube lemma *are* available earlier, and that this page
nevertheless works with `def-metric-compactness` because its items are stated for
metric domains — keeping the true conclusion ("none of that is proved here") and
the true residual gap (the finite-products-of-compacta covering fact). This is a
**material** repair to reader-facing prose: it deletes the stale
`verification.judge`/`verified` stamps on both items, takes a dedicated per-item
`touchlog` snapshot, needs `impact-audit` closure, and needs a targeted rejudge.
Blast radius is small: **no item anywhere in the corpus depends on either of
these two** (`rem-function-space-conventions` has zero reverse-deps;
`thm-the-exponential-law`'s only consumers are on this page's own B side).

---

## Nonfatal findings (recorded, not chased, per the standing triage rule)

**N1 — Two declared facts are never cited by any step.** `proof-contract --strict`
confirms both, and they are the only residual gate errors in the batch:
`lem-uniform-metric-on-a-function-space` `[L4]` and
`fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` `[L8]`,
each the same "the minimum of a two-element set of reals exists" fact, each
citing `lem-finite-set-has-max` and `def-max-min`. Harmless dead weight; they are
also the sole reason those two items list those two deps. A class-(b) repair
would delete the two fact lines (and, for `[L4]`, the two now-unused deps). I
propose leaving them: deleting a fact is a material edit that voids two judge
stamps to remove something that misleads nobody.

**N2 — `lem-compact-closed-balls-in-a-locally-compact-metric-space` binds `r`
twice.** Step 1.2 introduces an arbitrary `r` with `0 < r < r_0` for claim 1;
step 2.3 re-binds `r := min{s,r_0}/2` for claim 2. Steps 2.1/2.2/3.1/4.1/5.1 read
against the first, step 6.1 against the second. The mathematics is right — claim
1 holds for every such `r`, and 2.3's `r` is one of them — and a reader closes it
in seconds by reading 6.1 as "apply claim 1 to this `r`". A one-letter rename in
2.3 and 6.1 would fix it, at the cost of a material edit.

**N3 — `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous`
step 2.1 writes a strict bound that should be weak.** "writing $u := 1 - t$ with
$0 < u < a_{k+1}$" excludes $t = 1$, where $u = 0$. The same computation covers
$u = 0$ (it gives $r_k(1) = r_{k+1}(1) = 1$), so pointwise monotonicity holds at
$t = 1$ too and nothing downstream changes.

**N4 — Same item, Statement: "equivalently" joins two claims that are not
equivalent.** "$C(X,Y)$ is closed in $Y^{X}$ for the topology of pointwise
convergence; equivalently, a pointwise limit of continuous functions is
continuous." With sequences only the first implies the second (the pointwise
topology on $Y^X$ is not first countable in general — this page's own
`fs-the-compact-open-topology-is-always-metrizable` proves it). Both are false and
the refutation uses the sound direction: step 2.2 refutes the sequential form and
step 3.1 correctly derives non-closedness from it, since a limit of a sequence in
a set lies in that set's closure. So the word overclaims but licenses nothing.

**N5 — `def-equicontinuity`: `∀a` is overloaded in the quantifier display.** In
the four-condition display `∀ε ∀f ∀a ∃δ, ∀ε ∀a ∃δ ∀f, ∀ε ∀f ∃δ ∀a, ∀ε ∃δ ∀f ∀a`,
`a` is the single base point in entries 1–2 and stands for the *pair* of points
in entries 3–4 (uniform continuity and uniform equicontinuity quantify over
$x, x'$). The prose immediately above and below states all four conditions
correctly and unambiguously.

**N6 — Eight steps name an earlier step in their prose that their bracket tag
omits.** In `thm-compact-open-equals-compact-convergence` (8.1, 9.1×2),
`thm-comparison-of-the-three-function-space-topologies` (3.1, 3.2, 4.1, 4.2) and
`fs-the-evaluation-map-is-always-continuous` (10.1), a step opens "Under step
2.2:" or "Under step 1.1:" while the bracket cites only a later step that itself
rests on it. The omitted step is transitively present in every case, so no
inference is unlicensed; `precheck` passes all 25. The proof contract records the
true input map (bracket ∪ prose-named steps) rather than the bracket alone, and
notes the divergence there.

**N7 — Two items cite page-mates in their body that are not in `deps`.**
`def-topology-of-pointwise-convergence` links `thm-product-universal-property` and
`def-function-space` in its Remarks; `rem-function-space-conventions` links nine
page items (`lem-compact-closed-balls-…`, `lem-tube-lemma-…`,
`thm-comparison-…`, `thm-evaluation-…`, `thm-exponential-correspondence-…`,
`thm-dini`, `lem-convergence-in-the-pointwise-topology`,
`lem-uniform-convergence-in-the-uniform-metric`,
`thm-function-space-is-complete-…`). All are Remark-level orienting mentions, not
load-bearing citations, which is why `depcheck` — which scans Statement/Facts —
reports nothing. `rem-function-space-conventions` is a remark with no Statement
section at all, so `depcheck` sees none of its links.

**N8 — Systematic: the Munkres and Rudin references carry a URL that is not a
source for the statement.** 22 of my items give `title: "J. Munkres, Topology,
2nd ed., §NN"` with `url: https://en.wikipedia.org/wiki/James_Munkres` — the
author's biography — and 7 give `"W. Rudin, Principles of Mathematical Analysis,
3rd ed., Ch. 7"` with the URL of the *book's* Wikipedia article. Both return 200
and neither is dishonest (the title names a real, checkable section), but a
reader clicking through gets no statement. This is corpus-wide rather than
batch-local, so I am recording it rather than proposing a batch repair. My
provenance ledger therefore cites the per-section ETSU notes
(`faculty.etsu.edu/gardnerr/5357/notes/Munkres-NN.pdf`, all HTTP 200) where a
Munkres clause is the evidence, so every `literature-derived`/`ai-altered` row is
backed by a URL that actually contains the quoted statement.

**N9 — `thm-compact-open-equals-compact-convergence` step 8.1 cites `L9` for the
triangle inequality.** `L9` is about minima of two-element sets and about balls;
(M3) is an axiom of the Given metric space. A one-tag quirk.

---

## Mechanical gate results (all run on current disk, my 33 items)

| gate | result |
|---|---|
| `precheck.mts` | 25 proof-bearing checked, **0 failing** |
| `depcheck.mjs` | corpus OK; **0** lines touch my items |
| `citecheck.mjs` | **0** warning blocks for my items |
| `extcheck.mjs` | OK; no item of mine rests on unproved material |
| `fwdcheck.mjs` | OK; no forward reference in my scope |
| `prosecheck.mjs` | 0 errors |
| `rendercheck.mjs` | OK |
| `proof-contract.mjs --strict` | **4 errors, all N1** (the two dead facts); 25/25 items checked |
| body wikilinks vs `deps` | 2 items, 11 undeclared Remark-level links — N7 |
| source URLs | 20 in-item + 7 added by me, **all HTTP 200** |
| external consumers of my 33 | **none** — every reverse-dep is inside this A/B pair |

## A1 — provenance summary

33 rows in `wave5-topology-function-spaces.provenance.jsonl`, all with
`alpha_concurred: false` pending A3.

| `provenance.statement` | count | evidence |
|---|---|---|
| `literature-derived` | 11 | `exact-source` (all with a working URL containing the quoted clause) |
| `ai-altered` | 21 | `semantic-source` (all with a working URL; convention deltas recorded per row) |
| `ai-generated` | 1 | `none` — `rem-function-space-conventions` only |

`provenance.proof`: 8 `not-applicable` (definitions and the remark), 25
`ai-generated`. I tagged **no** proof `literature-derived` or `ai-altered`: I
verified *statements* against sources, not proofs, and will not claim a source
for an argument I did not read.

**The one `ai-generated` statement is a positive determination, not a failure to
find a source.** `rem-function-space-conventions` is a page-conventions remark
about this library's own hypotheses and reading order; it can have no literature
counterpart. It has zero reverse-deps corpus-wide, so the
never-a-deps-target rule bites nothing. It follows the established retro-tag
precedent for conventions remarks (`rem-topology-conventions`,
`rem-counting-conventions-and-scope`, `rem-compactness-choice-ledger-metric`,
`rem-constructions-this-page-stops-short-of`,
`rem-sieve-pigeonhole-and-double-counting-conventions`,
`rem-complete-metrizability-is-the-topological-shadow`), all six of which carry
`provenance.statement: ai-generated` with **no** `generation` block — which is
what SCHEMA's three-value `generation.role` vocabulary
(`direct-corollary | example | counterexample`) forces, none of the three being
able to describe a conventions remark. **Flagged for Alpha** as a schema gap, not
resolved by me.

**One determination worth Alpha's eye.** `lem-uniform-metric-on-a-function-space`
is tagged `literature-derived`/`exact-source`, and its own Remark and the A-page
summary call it "a genuinely new object". Those are consistent — "new" there means
new *relative to this library's* `lem-sup-metric-is-a-metric` — but the phrasing
invites an auditor to tag it `ai-generated`. It is not: it is verbatim Munkres's
uniform metric, §20 for $\mathbb{R}^J$ ("Metric $\bar\rho$ is the uniform metric
on $\mathbb{R}^J$ and the metric topology it induces is the uniform topology") and
§43 for a metric target ("$\bar\rho$ is the uniform metric on $Y^J$ corresponding
to $d$"), same truncation at 1, same formula. Likewise
`thm-function-space-is-complete-for-a-complete-target` is Munkres 43.5 + 43.6 and
`thm-uniform-limit-theorem` claim 2 is Munkres 21.6, all verbatim.

## A2 — proof contracts

`wave5-topology-function-spaces.proof-contracts.json`, regenerable by
`node research/audit/gen-wave5-fs-contracts.mjs`: **25 items, 493 citation
entries, 225 derivation entries, 200 boundary dispositions.**

- `citations`: one entry per distinct wikilink in each `[A#]`/`[L#]` fact, with
  `uses` computed from the step tags. Every `quote` is verified at generation
  time to be an exact substring of the cited item's own
  Statement/Definition/Example section; 488 come from a hand-authored canonical
  clause per target and 5 from a per-fact override where a target is cited for
  two different clauses (`lem-compactness-is-intrinsic` claim 1 vs claim 3 vs its
  indexed form). **Honest limitation:** 318 of the 493 quotes are short
  definitional anchors (`"compact"`, `"ball"`, `"neighbourhood"`) because the
  cited target is a definition invoked for the notion it defines; 175 are full
  clauses. The short ones are exact and correct but carry little discriminating
  power, and I am naming that rather than implying 493 individually-argued
  quotations.
- `derivations`: every numbered step exactly once, `inputs` = the step's bracket
  tags ∪ any earlier step its own prose names (see N6).
- `boundaries`: all eight cases for all 25 items, each `checked` with a step or
  Statement anchor or `not_applicable` with a specific reason.
- `risk_review`: `pending` on every item — Alpha's to fill at A5/A6.

`finite_smoke` is empty throughout: nothing in this batch is a finite or
combinatorial claim, so none of the four available checks applies.
