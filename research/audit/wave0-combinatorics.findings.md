# Wave 0, combinatorics batch — Audit-Beta findings (A1, A2, A4)

Scope: the two pairs in `research/audit/wave0-combinatorics.pages.json` —
`finite-counting-and-binomial-coefficients` (A, 26 items) and
`finite-counting-and-binomial-coefficients-examples` (B, 14 items). 40 items,
all read from disk.

Sections 1 to 5 are the A1/A2 record as it stood at A3, with one correction
marked in §2 (the genrisk cone). Every repair proposed there was adjudicated in
`wave0-combinatorics.A3.md`; what was approved and applied is recorded in the
**A4** section at the end of this file.

Artifacts owned by this batch:
- `research/audit/wave0-combinatorics.provenance.jsonl` (40 rows)
- `research/audit/wave0-combinatorics.proof-contracts.json` (31 proof-bearing items)
- this file

## 1. Coverage

- **Every one of the 40 items was read in full from disk**: frontmatter,
  Statement/Definition, Facts & Assumptions, Proof/Verification/Refutation, and
  Remarks.
- **Every numbered proof step was read and checked** — 188 steps across the 31
  proof-bearing items. No exceptions.
- **Every dependency citation was checked semantically against the target on
  disk** — 358 `[F#]`/`[A#]`/`[L#]`-to-wikilink pairs over 60 distinct target
  items. The 45 targets outside the batch were dumped and read
  (Statement / Statement refuted / Definition / Example sections).
- Both page files (`library/combinatorics/finite-counting-and-binomial-coefficients.md`
  and its `-examples` companion) were read with proof-step suspicion.
- Neither page's items carry a `provenance` block or a legacy `authorship`
  line, so the whole batch is legitimately in scope and A4 **adds** provenance
  rather than replacing anything.

## 2. Provenance determination (A1)

40 rows written. Distribution:

| `provenance.statement` | count | | `evidence` | count |
|---|---|---|---|---|
| `ai-altered` | 28 | | `semantic-source` | 28 |
| `literature-derived` | 5 | | `exact-source` | 5 |
| `ai-generated` | 7 | | `trivial` | 7 |

`provenance.proof`: `ai-generated` 32, `ai-altered` 5, `not-applicable` 3.
No row uses evidence `none`; no row proposes `established-knowledge`, so no
Alpha concurrence is needed on that axis.

The five `exact-source` items are `thm-cardinality-of-a-set-of-functions`,
`thm-number-of-injections`, `def-binomial-coefficient`,
`thm-vandermonde-identity`, `def-composition-of-a-natural-number`. Vandermonde
is the cleanest: the source states it for the same variables, the same index
range and the same "any nonnegative integers" hypothesis, with no restriction.

The classification rule applied uniformly: an item whose Statement merges two or
more separately sourced results, or inserts this library's own notation
(the canonical natural `iota`, the N-valued sum, the truncated difference,
division cleared into a product identity), is `ai-altered` with `semantic-source`
rather than `literature-derived`, because the decision table puts
"reformulated, renotated, specialised/merged" under `semantic-source`.

**Owner rule change of 2026-08-02 applied.** The seven `ai-generated` rows are
all bespoke worked instances or bespoke witnesses (a ten-person committee, the
enumeration of `W(4,3)`, all eight functions `3 -> 2`, the Vandermonde check at
two values, the two-element witness pair, the double-counting witness inside
`P({0,1,2,3})`, and the page's own conventions ledger). Each rationale states
positively why the construction is judged invented, not merely unsourced. Four
false statements that under the old default would have been `ai-generated` were
reclassified `ai-altered` with a located source, because each is a sourced
result with its own sourced hypothesis deleted:
`fs-cardinality-of-a-union-adds-without-disjointness`,
`fs-the-product-rule-makes-a-product-larger`,
`fs-the-alternating-row-sum-vanishes-for-every-n`,
`fs-stars-and-bars-holds-for-every-number-of-parts`.

**One borderline recorded for Alpha, not escalated as undecidable.**
`cex-same-cardinality-without-a-canonical-bijection` is tagged `ai-generated`
because the witness pair is bespoke, while the surrounding observation (equal
cardinality does not single out a bijection) is established. If Alpha prefers to
classify by the observation rather than the witness, the row becomes
`ai-altered` / `established-knowledge`. It has no deps consumers either way.

**Blast radius of the `ai-generated` tags: no logical consumers, two wikilink
mentions.** All seven sit on the B page or are the terminal `rem-`, and a
corpus-wide `deps` scan finds **no logical consumer** of any of them, so
`content-policy`'s "generated statements are never deps targets" rule is
satisfied (audit run: 0 errors). `genrisk.mjs`, run after the A4 retags, does
report two load-bearing seeds — both of them this batch's, both `cone_size: 1`,
both `logical_consumers: []` with a single `direct_citation_consumers` entry via
a wikilink:

| seed | citation consumer | what the consumer claims |
|---|---|---|
| `cex-a-count-that-double-counts` | `fs-cardinality-of-a-union-adds-without-disjointness` (Remark) | "twelve subsets are counted as sixteen" |
| `rem-counting-conventions-and-scope` | `rem-sieve-pigeonhole-and-double-counting-conventions` (opening prose) | "It continues [that ledger], the same kind of ledger for [the earlier page]" |

Both are pointer-level mentions, neither rests logically on the seed, and both
remain accurate after the A4 repairs (the D1 edit does not touch the 12-vs-16
numbers). They still need Alpha's `genrisk.json` disposition at A6; the evidence
above is offered for it. This corrects the A2 draft of this file, which said the
cone was empty — true of `deps`, not of citation mentions.

Every URL recorded in the ledger was fetched and returned content (HTTP 200):
Wikipedia articles on Finite set, Cardinality, Countable set, Summation, Empty
product, Recursive definition, Natural number, Permutation, Rule of sum, Rule of
product, Exponentiation, Power set, Twelvefold way, Factorial, Falling and
rising factorials, Binomial coefficient, Combination, Pascal's rule,
Hockey-stick identity, Pascal's triangle, Binomial theorem, Vandermonde's
identity, Multinomial theorem, Multinomial distribution, Composition
(combinatorics), Stars and bars, Poker probability, Anagram, Bijective proof,
Dedekind-infinite set, Inclusion-exclusion principle; plus Tao's Analysis I page
and the Sylvestre LibreTexts section 12.02.

## 3. Defects found (A2)

The mathematics is in good shape. No proof step was found to be unlicensed by
its cited facts, and no dependency citation was found to claim more than its
target states. The arithmetic in all seven worked examples was recomputed and is
correct (including `52.51.50.49.48 = 311875200`, `1152 . 34650 = 39916800`,
`13.12.11.10.9 = 154440`, and every row and alternating row sum of Pascal's
triangle to row 6). What follows is what the audit did turn up.

### D1 — false incidental claim inside a numbered step (class (a), non-load-bearing)

**`items/cex-a-count-that-double-counts.md`, step 3.1.**

> The overcount is exactly $4$, the number of subsets containing both $0$ and
> $1$, and it is the same $4$ as $\lvert C\rvert$ only by coincidence of this
> example.

This is false. With $X$ any finite set containing $0$ and $1$,
$C = \{S \subseteq X : 0 \notin S,\ 1 \notin S\}$ is literally
$\mathcal{P}(X \setminus \{0,1\})$, and
$A_0 \cap A_1 = \{\,S \cup \{0,1\} : S \in C\,\}$; the map
$S \mapsto S \cup \{0,1\}$ is a bijection $C \to A_0 \cap A_1$ with inverse
$T \mapsto T \setminus \{0,1\}$. So $\lvert A_0 \cap A_1\rvert = \lvert C\rvert
= 2^{\lvert X\rvert - 2}$ **always**, and the agreement is structural, not a
coincidence of this witness.

The refutation itself is unaffected — it is complete at "$12 \ne 16$" — so this
is a false assertion in the exposition of a verification step rather than a
broken proof. It is nonetheless a stated mathematical falsehood in a numbered
step, which triage does not excuse.

**Proposed repair (class (a), minimal, elementary derivation supplied above):**

old:
> and it is the same $4$ as $\lvert C\rvert$ only by coincidence of this example.

new:
> and it agrees with $\lvert C\rvert$ because $S \mapsto S \cup \{0,1\}$ is a
> bijection of $C$ onto $A_0 \cap A_1$, with inverse $T \mapsto T\setminus\{0,1\}$.

This is a material change (the judge would see something different), so under §9
it voids `verification.judge` and the `audited` stamp on that item and requires
an independent reading at A6.

### D2 — declared fact never cited by a proof step (class (b))

Both are surfaced by `tools/proof-contract.mjs` as `citation-uses` errors, which
are the only two errors the contract self-check reports.

1. **`items/fs-the-product-rule-makes-a-product-larger.md`, [L6]** —
   "$X \prec \mathcal{P}(X)$ for **every** set $X$ ([[thm-cantor-powerset]])".
   No numbered step (1.1, 1.2, 2.1, 3.1) cites [L6]; its only use is in the
   first Remark. The fact is true and correctly stated; it is simply declared in
   the wrong place.
   *Proposed repair:* either move the content into the Remark prose and drop the
   [L6] declaration, or leave it and record it as an accepted exposition device.
   Low priority; no mathematical consequence.
2. **`items/fs-stars-and-bars-holds-for-every-number-of-parts.md`, [L3]** —
   "The true statement, for $m \ge 1$ ... ([[thm-stars-and-bars]])". Declared and
   never referenced anywhere in the body, not even in a Remark.
   *Proposed repair:* cite it in step 3.1 (which relies on the true statement's
   hypothesis being $m \ge 1$) or drop the declaration. Low priority.

### D3 — fact restatements that under- or over-state their target (class (b), all nonfatal)

1. **`thm-pascals-rule` [L2]** lists `binom(m,0) = 1`, `binom(m,j) = 0` for
   `j > m` and `binom(m,m) = 1`, but step 2.1 also uses `binom(m,1) = m`
   ("at $k = 0$ it reads $\binom{\sigma(n)}{1} = 1 + \binom{n}{1}$, which is
   $\sigma(n) = 1+n$"). That clause **is** in the cited
   `def-binomial-coefficient`; only the Fact's restatement omits it. The step is
   an illustrative aside after clause 1 is already proved in general.
   *Proposed repair:* add "and $\binom{m}{1} = m$" to [L2].
2. **`thm-vandermonde-identity` [L7]** reads "if $i + t = k$ then $t = k-i$;
   $\lvert M\rvert = m$ and $\lvert N\rvert = n$ ([[def-nat-order]],
   [[lem-nat-add-cancellative]], [[lem-nat-order-is-membership]])". The two
   cardinalities do not follow from those three targets; they are established by
   the explicit bijections built in step 1.1, which cites [L2] for exactly that.
   The Fact overstates what its sources give.
   *Proposed repair:* delete the cardinality clause from [L7], leaving the
   arithmetic clause, since step 1.1 already proves and cites it.
3. **`def-nat-power` clause (a)** cites `lem-nat-mult-identity` for
   $0^{\sigma(n)} = 0^{n}\cdot 0 = 0$. The law used is $x \cdot 0 = 0$, which
   that lemma's own Statement calls definitional and refers to
   `def-nat-multiplication` (also in this item's `deps`). Same pointer in clause
   (d) of `def-factorial-and-falling-factorial` for
   $n^{\underline{n}}\cdot 0 = 0$. Both facts are true and in scope.
   *Proposed repair (optional):* point at `def-nat-multiplication` instead.
   Pure hygiene; below the effort bar unless a batch edit is happening anyway.

### D4 — reference-hygiene defects (class (b))

Three `sources.references` entries have a title that does not describe the URL:

| item | title | url |
|---|---|---|
| `thm-product-rule` | "Cartesian product (Wikipedia)" | `.../wiki/Set_(mathematics)` |
| `cor-cardinality-of-the-power-set` | "Cantor's theorem (Wikipedia)" | `.../wiki/Cardinality` |
| `fs-the-product-rule-makes-a-product-larger` | "Cantor's theorem (Wikipedia)" | `.../wiki/Power_set` |

All three URLs resolve, and each does bear on the item, but a reader following
the link does not land on the named article. `.../wiki/Cartesian_product` and
`.../wiki/Cantor%27s_theorem` are the articles the titles name.

Separately, eight items carry "R. Stanley, Enumerative Combinatorics, Vol. 1,
Ch. 1" pointing at `.../wiki/Enumerative_Combinatorics`, and four carry
"P. Halmos, Naive Set Theory, §13" pointing at
`.../wiki/Naive_Set_Theory_(book)`. Those URLs are Wikipedia articles *about the
books*, not the cited text, so they do not carry the statement they are attached
to. This is a corpus-wide pattern rather than a defect of this batch, and it is
flagged for the A10 owner queue rather than proposed as a repair here. (The
"T. Tao, Analysis I, 3rd ed., §7.1" entries point at Tao's own book page, which
is the author's distribution page and is a materially better citation.)

### D5 — prose, recorded and not chased (triage: nonfatal)

1. **Page-summary shape.** The A page's summary is eight paragraphs; the current
   page-summary contract is exactly two paragraphs, each under 150 words. The B
   page carries a long authored summary; the contract says a B page has no
   authored summary body at all. Both contracts postdate this page's
   publication, are forward-looking, and no mathematical claim in either summary
   is false. Recorded only.
2. **`ex-anagrams-by-the-multinomial-coefficient`, first Remark** attributes the
   independence of the count from the choice of alphabet identification to "the
   invariance clause of that definition". `def-multinomial-coefficient`'s
   invariance clause is about a bijection of the *domain* $A$, not a relabelling
   of the colour set $m$. The claim is true — a relabelling permutes the tuple
   $k$, and by clause 1 of `thm-multinomial-theorem` the coefficient depends only
   on the multiset of parts — but the pointer is to the wrong clause.
   Non-load-bearing (the item's actual computation fixes one identification).
3. **`lem-finite-sum-permutation-invariance`** names "claim $(A)$" in step 1.2
   before stating it; it is stated in full in step 1.3 and again in step 3.1. A
   competent reader closes this in well under 30 seconds. Expositional only.

### D6 — published-claim decay: none found

Checked deliberately, because the track has moved on since this page was
published. `thm-inclusion-exclusion` and `thm-the-number-of-surjections` are now
published on `inclusion-exclusion-and-the-pigeonhole-principle`, and several
graph-theory pages now exist. Every claim on these two pages that could have
decayed is guarded by reading-order language, and
`rem-counting-conventions-and-scope` opens its deferral section with "These are
statements about the reading order, not about the library as a whole." So:

- "Inclusion and exclusion ... belongs to the next page of this track" — now
  literally fulfilled, still true.
- "The number of surjections ... none is available yet" — true at this point in
  the reading order, and explicitly scoped to it.
- "no graph is defined anywhere in the library at this point" (A-page summary)
  and "no geometric or relational vocabulary ... at this point in the reading
  order" (`thm-two-element-subsets-count`) — both position-relative and still
  true; the graph pages sit later.
- "Every forward pointer above is orientation only: no item on this page depends
  on anything named in this section" — verified against the `deps` of all 26
  A-page items. True.

## 4. Proof contract (A2 item 3)

`research/audit/wave0-combinatorics.proof-contracts.json`, version 1, scope = the
31 proof-bearing items (17 on the A page, all 14 on the B page; the 9
definitions and the remark have no numbered steps and are correctly out of
contract scope).

Captured in full:
- **358 citation entries**, one per `[F#]`/`[A#]`/`[L#]`-to-wikilink pair, each
  with the exact clause of the target's Statement / Statement refuted /
  Definition / Example that the fact actually leans on, and the complete list of
  steps citing that fact. All 358 quotes were verified to occur verbatim in the
  named section by the tool; where a fact leans on a specific clause of a
  multi-clause target, the quote is that clause and not the target's headline
  (for example `cor-cardinality-of-the-power-set` [L4] quotes pigeonhole claim 2,
  not claim 3, and `thm-stars-and-bars` [L6] quotes clause 3 of
  `thm-subset-of-a-finite-set`).
- **188 step-input entries**, covering every numbered step exactly once, each
  naming every fact, earlier step, given, base case, inductive hypothesis,
  assumption, explicit construction or induction discharge the step's own tag
  line declares.
- **31 eight-case boundary worksheets** (248 dispositions), each `checked` with
  an anchored step reference or `not_applicable` with a specific reason. The
  empty / zero / one / degenerate cases are where this page does its real work
  and they are consistently discharged: the pages are unusually disciplined
  about `N` containing `0`.

Self-check:

```
node tools/proof-contract.mjs research/audit/wave0-combinatorics.proof-contracts.json --strict
ERROR citation-uses [fs-the-product-rule-makes-a-product-larger]: L6 -> thm-cantor-powerset needs every proof step that cites L6
ERROR citation-uses [fs-stars-and-bars-holds-for-every-number-of-parts]: L3 -> thm-stars-and-bars needs every proof step that cites L3
proof-contract: 2 error(s), 0 warning(s), 31/31 item(s) checked
```

Both errors are D2 above and are reported rather than papered over: the honest
`uses` list for those two facts is empty, and the tool is correctly refusing it.
Every other check passes.

`risk_review` is `pending` on all 31 entries, for Alpha to dispose of at A6.
`finite_smoke` is empty: none of the four available check types
(`tree-characterisation`, `forest-edge-component-count`,
`induced-complement-commutes`, `cyclic-subgroup-lagrange`) applies to this
material.

## 5. Unresolved concerns for A3 / A6

1. **D1 is the only repair that changes mathematics.** It needs an A3 decision,
   and if approved it voids that item's judge and audited stamps.
2. **The book-citation pattern (D4, second half)** is corpus-wide and outside a
   Beta's delegation to fix here. It belongs in the A10 owner queue.
3. **The `cex-same-cardinality-without-a-canonical-bijection` provenance call**
   (§2) is a genuine judgement call between classifying by the bespoke witness
   and classifying by the established observation. Recorded for Alpha; no
   consequence either way, since the item has no deps consumers.
4. **Nothing in this batch triggers the external-dependency or forward-reference
   machinery.** Three A-page items declare `forward_refs`
   (`def-cardinal`, `def-monoid-finite-product`, `def-ring`,
   `def-symmetric-group`, `def-function-space`, `lem-factorial-beats-geometric`);
   all are orientation pointers and none is load-bearing, which the items say
   explicitly and which the `deps` lists confirm. No item sets
   `proved_here: false`.

---

# A4 — repairs applied (2026-08-02)

Authorized by `research/audit/wave0-combinatorics.A3.md`. The orchestrator had
already taken the pre-A4 touch snapshot; `touchlog` was **not** run by this
agent. No id was renamed or removed. No file outside `items/` and this batch's
three namespaced artifacts was written.

## Stamp policy applied

Eight items received a **material** repair (the judge would see different text)
and had their stale `verification.judge` block and obsolete
`verification.audited` stamp deleted: `cex-a-count-that-double-counts`,
`fs-the-product-rule-makes-a-product-larger`,
`fs-stars-and-bars-holds-for-every-number-of-parts`, `thm-pascals-rule`,
`thm-vandermonde-identity`, `def-nat-power`,
`def-factorial-and-falling-factorial`,
`ex-anagrams-by-the-multinomial-coefficient`. I did **not** write
`verification.verified` on any of them — that is A6's independent reading, and
no author certifies their own repair.

The other 32 items received a pure retag (frontmatter provenance and
`sources.references` only, no mathematical text changed) and keep their existing
`judge` and `audited` stamps, per §6's material-rewrite test.

## Repair record

### R1 — D1, class (a) unambiguous falsehood — `cex-a-count-that-double-counts`, step 3.1

old:
> The claim fails: $12 \ne 16$. The overcount is exactly $4$, the number of
> subsets containing both $0$ and $1$, and it is the same $4$ as $\lvert C\rvert$
> only by coincidence of this example. [step 2.1, step 2.2]

new:
> The claim fails: $12 \ne 16$. The overcount is exactly $4$, the number of
> subsets containing both $0$ and $1$, and it agrees with $\lvert C\rvert$
> because $S \mapsto S \cup \{0,1\}$ is a bijection of $C$ onto $A_0 \cap A_1$,
> with inverse $T \mapsto T \setminus \{0,1\}$. [step 2.1, step 2.2, L4]

Derivation: $C = \mathcal{P}(X \setminus \{0,1\})$ by definition, and for
$S \in C$ the set $S \cup \{0,1\}$ contains both $0$ and $1$, so lies in
$A_0 \cap A_1$; conversely $T \in A_0 \cap A_1$ has
$T \setminus \{0,1\} \in C$ and $(T\setminus\{0,1\})\cup\{0,1\} = T$. The two
maps are mutually inverse, so `[L4]` (a map with a two-sided inverse is a
bijection) licenses the step, and `[L4]` was added to the step's tag line
accordingly. The equality therefore holds for every finite $X$ containing $0$
and $1$, never coincidentally.

### R2 — D2, class (b), deletion of an unused fact — `fs-the-product-rule-makes-a-product-larger`

Deleted the whole fact paragraph:
> [L6] $X \prec \mathcal{P}(X)$ for **every** set $X$ ([[thm-cantor-powerset]]).

and rewrote its single point of use, in the first Remark, from `([L6])` to the
inline wikilink `([[thm-cantor-powerset]])`. The `thm-cantor-powerset` `deps`
entry is kept, per A3. No step was padded to justify the edge. Labels L1–L5
remain contiguous.

### R3 — D2, class (b), deletion of an unused fact — `fs-stars-and-bars-holds-for-every-number-of-parts`

Deleted the whole fact paragraph:
> [L3] The true statement, for $m \ge 1$: $\lvert\mathcal{W}(n,m)\rvert = \binom{n+m-1}{m-1}$ ([[thm-stars-and-bars]]).

Its content was already in the first Remark but without the wikilink, so the
Remark was extended from

> - **The formula is correct for every $m \ge 1$**, and the two edges are worth
>   seeing.

to

> - **The formula is correct for every $m \ge 1$**, which is what
>   [[thm-stars-and-bars]] asserts: $\lvert\mathcal{W}(n,m)\rvert = \binom{n+m-1}{m-1}$
>   under that hypothesis. The two edges are worth seeing.

The `thm-stars-and-bars` `deps` entry is **kept**: the Statement and two Remarks
still reference the theorem, and the refutation is defined by contrast with it.
Fact labels are now L1, L2, L4, L5 — a gap, deliberately left rather than
renumbering four labels and every step tag that names them; `precheck` accepts
it.

### R4 — D3, class (b) — `thm-pascals-rule` [L2]

old ending: `... $\binom{m}{j} = 0$ for $j > m$; $\binom{m}{m} = 1$.`
new ending: `... $\binom{m}{j} = 0$ for $j > m$; $\binom{m}{m} = 1$; $\binom{m}{1} = m$.`

Restores the clause step 2.1 actually uses. `def-binomial-coefficient`, already
the cited target and already in `deps`, states `$\binom{n}{1} = n$` outright.

### R5 — D3, class (b) — `thm-vandermonde-identity` [L7]

old:
> [L7] Arithmetic: if $i + t = k$ then $t = k-i$; $\lvert M\rvert = m$ and
> $\lvert N\rvert = n$ ([[def-nat-order]], [[lem-nat-add-cancellative]],
> [[lem-nat-order-is-membership]]).

new:
> [L7] Arithmetic: if $i + t = k$ then $t = k-i$, since $\le$ is defined
> additively and addition is cancellative; and $k < \sigma(k) \iff k \le k$, so
> $\sigma(k) = \{0,1,\dots,k\}$ ([[def-nat-order]], [[lem-nat-add-cancellative]],
> [[lem-nat-order-is-membership]]). The cardinalities $\lvert M\rvert = m$ and
> $\lvert N\rvert = n$ are not assumed here; they are computed in step 1.1.

The cardinality clause was not a consequence of the three cited targets. It is
now attributed to step 1.1, which proves it from the explicit bijections and
cites [L2] for the transport. The `lem-nat-order-is-membership` citation is
reattached to the clause it does license, clause 3 of that lemma
("$n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$"), which is what the item's
index set $\sigma(k)$ rests on. The contract quote for that pair was updated to
match.

*Noted, not repaired:* step 1.1 still names [L7] in its tag line although, with
the cardinality clause moved out, it now leans on [L2] and [L3] for the work it
does there. A surplus tag is a nonfatal citational quirk and removing it is
outside the approved smallest correction; flagged for Alpha at A6.

### R6 — D3, class (b) — `def-nat-power` clause (a) and `def-factorial-and-falling-factorial` clause (d)

Both cited `lem-nat-mult-identity` for an instance of $x \cdot 0 = 0$, which
that lemma's own Statement calls definitional and refers to
`def-nat-multiplication`.

`def-nat-power` (a), old: `$0^{\sigma(n)} = 0^{n}\cdot 0 = 0$ ([[lem-nat-mult-identity]]), and every $n \ge 1$ is a successor.`
new: `$0^{\sigma(n)} = 0^{n}\cdot 0 = 0$, the clause $x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and every $n \ge 1$ is a successor.`

`def-factorial-and-falling-factorial` (d), old: `$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$ ([[lem-nat-mult-identity]])`
new: `$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause $x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]])`

`def-nat-multiplication` was already in both items' `deps`. Both items retain
their `lem-nat-mult-identity` citation elsewhere (for $0 \cdot n = 0$ and
$n \cdot 1 = n$, which that lemma does state), so no `deps` entry was dropped.

### R7 — D4, class (b), three title/URL mismatches

| item | title kept | old url | new url |
|---|---|---|---|
| `thm-product-rule` | "Cartesian product (Wikipedia)" | `.../wiki/Set_(mathematics)` | `.../wiki/Cartesian_product` |
| `cor-cardinality-of-the-power-set` | "Cantor's theorem (Wikipedia)" | `.../wiki/Cardinality` | `.../wiki/Cantor%27s_theorem` |
| `fs-the-product-rule-makes-a-product-larger` | "Cantor's theorem (Wikipedia)" | `.../wiki/Power_set` | `.../wiki/Cantor%27s_theorem` |

Both replacement URLs were fetched and confirmed to be the named articles
carrying the cited content ("for any set A, the set of all subsets of A ... has
a strictly greater cardinality than A itself"; "|A × B| = |A| · |B|"). Reference
metadata only, no claim changed, so these are not material and the two
retag-only items keep their stamps. The Stanley/Halmos about-the-book URL
pattern was **not** touched, per A3; it stays in the A10 owner queue.

### R8 — D5, class (b) — `ex-anagrams-by-the-multinomial-coefficient`, first Remark

The Remark attributed the independence of the count from the choice of alphabet
identification to "the invariance clause of that definition", which is about a
bijection of the domain $A$, not a relabelling of the colour set. Replaced with
the correct licence and an explicit note of what the invariance clause does say:

> ... any bijection will do, and the count does not depend on which. A different
> identification permutes the tuple $k$, and by clause 1 of
> [[thm-multinomial-theorem]] the coefficient is determined by $n$ together with
> the product $\prod_{i<m} k_i!$, which a permutation of the parts leaves
> unchanged. The invariance clause of [[def-multinomial-coefficient]] is a
> different statement: it says the count depends only on $\lvert A\rvert$, that
> is, only on the domain up to bijection.

`thm-multinomial-theorem` was already in `deps`.

### R9 — provenance retags, all 40 items

Each item received a `provenance` block (both components) immediately after
`origin:`, per SCHEMA §3, taking the values from
`wave0-combinatorics.provenance.jsonl`. The seven `ai-generated` statements also
received `generation.role` where the kind admits one: `example` for the four
`ex-` items, `counterexample` for the two `cex-`. `rem-counting-conventions-and-scope`
is a remark, a kind with no slot in the `GENERATED_ROLE` vocabulary, so no
`generation` block was invented for it; `content-policy --audit` records that as
its one expected warning.

Ledger URLs not already present were appended to `sources.references` on eight
items (`thm-subset-of-a-finite-set`, `thm-cardinality-of-a-set-of-functions`,
`cor-cardinality-of-the-power-set`, `thm-number-of-injections`,
`ex-functions-injections-and-subsets-of-a-small-set`,
`fs-every-injection-of-a-set-into-itself-is-a-bijection`,
`fs-cardinality-of-a-union-adds-without-disjointness`,
`fs-the-product-rule-makes-a-product-larger`). Every one of the 40 items now
carries every URL its ledger row records; verified mechanically.

No item in the batch had a legacy one-axis `authorship` line, so decision D5's
delete-in-the-same-edit rule had nothing to remove.

## Gate results after A4

```
reflow.mts    6 changed proof items reflowed
precheck.mts  6 checked, 0 failing — all clean
proof-contract.mjs --strict  0 error(s), 0 warning(s), 31/31 item(s) checked
content-policy.mjs --audit --ledger ...  40 scoped item(s), 0 error(s), 1 warning(s)
citecheck.mjs   no warning on any of the 40 items
extcheck.mjs / fwdcheck.mjs   no finding on any of the 40 items
depcheck.mjs    8 [published-unaudited] on the 40, and nothing else
```

The proof contract was **rebuilt against the final text**, not patched: the two
deleted facts are gone from it, `cex-a-count-that-double-counts` step 3.1 now
records its new [L4] use, and the reattributed
`thm-vandermonde-identity` [L7] quote points at clause 3 of
`lem-nat-order-is-membership`. It now carries 352 citation entries (down from
358: the two deleted facts accounted for two, and the rest is the recomputed
use map), 188 step-input entries and the same 248 boundary dispositions. The
two `citation-uses` errors reported at A2 are resolved by the R2/R3 deletions,
as A3 intended.

The 8 `depcheck` `published-unaudited` errors are the expected and correct
interim state: §9 requires the material repairs to void the owner-audit stamp,
and `verification.verified` is written by the independent reading at A6, not by
the agent that made the repair. Sibling batches show the same pattern in the
same run.

## Left for A6

1. Independent certification of R1–R8 (no self-certification), then
   `verification.verified` with `scope: published-audit` and
   `delegated_by: owner` on the eight items.
2. Alpha `genrisk.json` disposition for the two load-bearing seeds recorded in
   §2 above; both are wikilink mentions with no logical consumer, and the
   evidence for a `verified-generated` disposition is set out there.
3. Alpha review of the `cex-same-cardinality-without-a-canonical-bijection`
   provenance label (bespoke witness vs. established observation).
4. Alpha `risk_review` disposition on the 31 contract entries, all currently
   `pending`.
5. The surplus [L7] tag on `thm-vandermonde-identity` step 1.1 (R5, noted).
