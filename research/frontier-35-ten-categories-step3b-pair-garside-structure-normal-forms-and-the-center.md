# Step 3b — pair `garside-structure-normal-forms-and-the-center` (dispatch report)

- Run: `frontier-35-ten-categories`
- Dispatch label: `step3b-pair-garside-structure-normal-forms-and-the-center-458ee5998e1e549a`
- Role: alpha-high scaffold auditor and item author
- A page: `garside-structure-normal-forms-and-the-center` (order 741, category `braid-groups`, 24 items)
- B page: `garside-structure-normal-forms-and-the-center-examples` (order 742, 4 items)
- Batch: 15; output file `research/frontier-35-ten-categories-batch-15.pages.json`
- Owned pair only. Sibling rows (plan orders 729/730,
  `geometric-braids-and-artin-generators[-examples]`) are preserved untouched:
  their 14 item files, both page files, their manifest rows, their contract
  entries and their coverage rows were not edited; only shared files (batch
  manifest rows 741/742, batch coverage, batch contracts, the dependency-ledger
  input) were written, in this pair's own rows and entries.

All 28 assigned items are authored, registered in the manifest, coverage and
proof contracts, and linked by their two page files. The right-reversing
convention was re-derived from the source and independently machine-checked
this dispatch (see "Machine verification"), and two residual defects of the
live drafts were repaired before the decisions were recorded.

## Read and verified before writing

- `CLAUDE.md`, `SCHEMA.md`, the batch manifest, coverage, proof contracts,
  `research/plan-spec.json`, the design `research/plan-braid-groups-track.md`
  (BG-7, 19 designed A claims + 4 designed B examples) and the Step-3a scope
  review and its receipt.
- `research/frontier-35-ten-categories-owner-authoring-direction.md`: it
  defers batch 8's smooth-projective Serre-duality/flag-variety pair and batch
  13's `thm-pseudointersection-number-equals-tower-number`. Neither touches this
  pair, so this dispatch carries no owner-repair workload from the direction
  file.
- The independent readiness audit
  `research/frontier-35-ten-categories-batch-15-garside-readiness-audit-20260926.md`
  (read in full; its per-item repair map was checked against the finished
  files, and its "post-author repair order" was executed; its Inspection-limits
  caveat — that it did not re-prove the long inductions — is respected here, not
  overridden).
- Source passages read in full at the recorded locators: Dehornoy et al.,
  *Foundations of Garside Theory*, Chapter II Definition 4.21, Lemma 4.6,
  Lemma 4.32, formula (4.7)–(4.10), Example 4.22, Proposition 4.34, Corollaries
  4.45/4.47, Propositions 4.46/4.51 and Appendix Lemma II.4.62, and Chapter IX
  Proposition 1.10/Corollary 1.11(ii)/Lemmas 1.22/1.30–1.31; González-Meneses,
  *Basic results on braid groups*, §4, printed pp. 26–31 (Proposition 4.1,
  Theorem 4.2); Birman–Brendle, *Braids: A Survey* §5.1–5.2.
- All 28 item files, both page files, and the statements of the three published
  outside suppliers actually consumed by the pair
  (`def-braid-group-by-the-artin-presentation`,
  `thm-adjacent-transpositions-generate-the-symmetric-group`,
  `thm-reduced-words-form-the-free-group`). The defective published
  `thm-the-symmetric-group-has-the-coxeter-presentation` is **not** used by any
  item of the pair; items 16 and 17 carry explicit non-use disclaimers, and
  item 16's [F4] imports Dehornoy's Matsumoto statement with its two inputs
  (equality of lengths of reduced words for the same element, and exchange)
  proved locally.

## Scope and receipts

- Scope receipt: review decision `sufficient`, sha256
  `991caec7aa1282b19f7d9f05e2301875cc176b4160cc64983cd095e675cd2cc9`, recorded
  2026-09-24T03:42:58Z; current for rows 741/742 (verified by `record-item`
  accepting the pair and by `check`). The manifest rows carry
  `id/kind/title/strategy/deps` only — no `statement`/`sources`/`provenance` —
  exactly the "design-plus-strategy" basis the owner finding named; enriching
  them would void this hash, so `deps` were synced (outside the hash) and no
  statement field was added.
- `step3-decisions.mjs check --phase scope`: 26 pairs; one open entry,
  `type-a-soergel-bimodules-and-hecke-categorification` (another group's live
  work), **nothing of this pair**.
- All 28 item decisions recorded with confidence 1 and `--dependencies` equal
  to each item's authored frontmatter `deps`: **27 `repaired`, 1 `accept`**
  (`def-positive-braid-monoid`, the only item read as defect-free by the
  readiness audit and never subsequently edited).
  `step3-decisions.mjs check --phase final` reports **0 of the 28 ids open**
  (the run-wide phase is not closed yet because of other groups' pairs).
- No `--owner` flag was used, no judge/audit stamp was written, and no
  escalation is open for this pair.

## Scaffold audit and item-by-item outcome

The pair is a first-pass authoring: the Step-3a state had 28 manifest rows but
zero item files. All 28 were written in this dispatch and then audited against
the readiness map. The substantive repairs were:

- **Right-reversing orientation (items 3 and 5).** The drafts reversed
  $u\,v^{-1}$, which is already terminal under the source's rule. $ \Theta(u,v)$
  is now the **first block** $v'$ of the terminal pair $v'\,(u')^{-1}$ of the
  reversing of the **negative–positive** path $u^{-1}v$ (negatives read in
  reverse order), with $u v'\equiv^{+}v u'$; the definition item records the
  four recursion rules of the source, the well-definedness lemma, and totality
  as a theorem (not part of the definition) supplied by item 12 plus item 5(c).
- **Completeness item 5.** The nested induction of Appendix Lemma II.4.62
  (outer induction on a Noetherianity witness, inner induction on total length,
  third induction on combinatorial distance) is reproduced in steps
  1.6/1.7/2.3/3.1/4.1, with Corollary 4.45 (left-cancellativity) and Corollary
  4.47 (conditional right-lcms). The scaffold's false "block lengths never
  change" phrase and the false total-input-length bound were removed, the
  terminal pair's uniqueness is now cited to [L7](i) (maximal-diagram
  uniqueness, not local determinism), and the remaining `u|v`/`uv^{-1}` forms
  were replaced by $u^{-1}v$.
- **Length counts (item 2).** $|\Sigma_n|^{k}$ replaces $(n-1)^{k}$ (negative at
  $n=0$, where $\Sigma_0=\varnothing$); part (b) separates $n\le1$.
- **False converse removed (item 4).** "Positive words are $\equiv^{+}$-equivalent
  **iff** of equal length" replaced by the forward homogeneous-length
  implication, and the no-adjacency step reference corrected to 2.2.
- **Half twist (item 9).** Balancedness now requires the divisor $s$ itself to
  be a left **and** a right divisor of $\Delta$ ($\Delta=sc=ds$); the literal
  words $\tau(\Delta)$ and the reversed triangular word are kept distinct
  ($n=4$: `323123` vs `123121`) and their equality is proved as classes in item
  10 along with the local induction $C(m):U_{m-1}\Delta_{m-1}=\Delta_m$; item
  10's statement (e) is restricted to $k\le n-2$, where $\sigma_n$ exists.
- **Divisibility and its extension (items 7, 15).** Transitivity uses
  $b=au,\ c=bv\Rightarrow c=a(uv)$; the group-order item prints the positive
  meet-scaling argument (a common left divisor of $ta,tb$ is still divided by
  $d\vee_L t$; cancellation gives $q\preccurlyeq_L a,b$, so $d\preccurlyeq_L t(a\wedge_L b)$)
  before step 3.1 uses it, removing the earlier circularity; the scaling
  identity $D(A\wedge_L B)=(DA)\wedge_L(DB)$ is stated as step 1.3 and is the
  local supplier of item 26 step 2.1.
- **$\Delta$-power and lattice items (12, 13).** The extensions now multiply on
  the correct sides ($\Delta^{m}=ac\Delta^{m-k}$ on the left,
  $\Delta^{m}=\Delta^{m-k'}c'a$ on the right, $m$ above all exponents), and
  step 5.1 no longer claims $\Theta$'s recursion is partial.
- **Normal form, decidability, centre (19, 20, 22, 23).** Item 19's false
  "positive $p=0$ unless $r=0$" specialization is gone (counterexample
  $x=\Delta\sigma_1$ in $B_3$: $p=1$, $r=1$) and step 1.1 moves
  $\Delta^{-1}$ with $w\Delta^{-1}=\Delta^{-1}\tau(w)$; item 20's divisor
  enumeration is stated as a finite **superset** filtered by the effective
  test and the equality test is stated on the signed input $u^{-1}v$; item
  22's parity sliding is restricted to nonnegative powers (positivity gives
  $p\ge0$) with the odd-$p$ twisted identity
  $A\sigma_{n-j}\sigma_{n-i}\equiv\sigma_j\sigma_iA$; item 23's [F4] is
  rewritten without the retired $\iota$ notation, and (this session) the
  Remarks' dangling "(step 1.3)" became "(step 1.2, applied in step 2.1)".
- **Type-A lifts (items 16, 17).** The deletion step computes
  $N(w^{(r)})=N(w)\triangle\{c_r\}$ for the selected right-descent crossing via
  the conjugate $\sigma s_j\sigma^{-1}$; the published Coxeter-presentation
  item is unlinked; the "same computation with $a$ and $c$ interchanged"
  phrase is gone from item 17's 2.2.
- **B items (25–28).** Item 25's two-letter candidate sentence, item 26's
  separate suffix $c'$ / nonpositivity via $p(x)<0$ / substitution wording,
  item 27's "exponent sums 3 and 6 **respectively**", item 28's $n\ge2$
  surjectivity caveat and its explicit $p\ge1\Rightarrow\Delta\preccurlyeq_L\sigma_i$
  argument.
- **Structural sweep.** Missing `## Proof`/`## Verification`/`## Counterexample`
  headings (~18 files), orphan/duplicate step labels, source numbers inside
  numbered steps, four bogus `def-alphabet-words-and-reduction` citations, and
  the stale González-Meneses URL `1010.2848` / `lmnh.cnrs.fr` were fixed.
  A final scan finds **no** prose reference to a nonexistent step in any of the
  28 items.

### Manifest `deps` sync

Eight rows gained the genuinely used suppliers recorded in the items' frontmatter
(`lem-conjugation-by-delta-reverses-artin-generators` += `thm-induction-principle`;
`lem-every-positive-braid-divides-a-power-of-delta-on-both-sides` +=
`lem-artin-positive-word-reversing-is-complete`,
`def-artin-right-complements-and-word-reversing`;
`lem-simple-positive-braids-are-indexed-by-permutations` +=
`def-braid-group-by-the-artin-presentation`;
`thm-left-garside-normal-form-is-unique` += same;
`cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form` += same,
`def-artin-right-complements-and-word-reversing`;
`thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two` += same;
`lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two` += same;
`ex-the-simple-braids-and-divisibility-lattice-for-b-three` +=
`lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors`).
A fresh comparison reports zero mismatches; a re-run of the sync writes
`changed 0`. Sibling rows 729/730 were not touched.

### Proof-contract resync

`research/frontier-35-ten-categories-batch-15.proof-contracts.json`:
14 geometric + 28 Garside entries (42/42). Item 5's entry was regenerated after
the orientation repair (citations and derivations, including the new [L7] use in
step 5.2); the corollary's `F1` quote was refreshed to the current Statement of
item 5 (the stored quote still read $u\,|\,v$ and the strict contract flagged
it); the two edited steps of item 5 and the referenced step of item 23 were
re-recorded. The file round-trips byte-identically at `indent=2`,
`ensure_ascii=False`.

## Conventions fixed by the pair (binding for consumers)

- **Right-reversing.** A signed path is a word of signed letters; the step
  replaces a negative–positive subpath $s|t$ ($s\ne t$) by
  $\theta(s,t)^{+}\,(\theta(t,s)^{-})$ read as a path (positive block in order,
  negative block reversed) and $s|s$ by the empty path; the input comparing
  positive words $u,v$ is $u^{-1}v$, whose terminal form is
  $v'\,(u')^{-1}=\Theta(u,v)\,(\Theta(v,u))^{-1}$, and
  $u\Theta(u,v)\equiv^{+}v\Theta(v,u)$.
- **Complement recursion.** $\Theta(s,\varepsilon)=\varepsilon$,
  $\Theta(\varepsilon,v)=v$, $\Theta(u,\varepsilon)=\varepsilon$,
  $\Theta(s,tv)=\theta(s,t)\Theta(\theta(t,s),v)$,
  $\Theta(su',v)=\Theta(u',\Theta(s,v))$; $\Theta$ is total on positive words
  (item 12 + item 5(c)) and decides positive-word equality
  ($u\equiv^{+}v\iff\Theta(u,v)=\Theta(v,u)=\varepsilon$) and left divisibility
  ($[v]\preccurlyeq_L[u]\iff\Theta(u,v)=\varepsilon$).
- **Half twist.** $T_k=\sigma_k\cdots\sigma_1$, $U_k=\sigma_1\cdots\sigma_k$,
  $\Delta=T_1\cdots T_{n-1}=\sigma_1(\sigma_2\sigma_1)\cdots$, $\ell(\Delta)=n(n-1)/2$,
  both triangular words define $\Delta$ as a class (not as literal words).
- **Orders.** $a\preccurlyeq_L b\iff b=ac$ (prefix), $a\preccurlyeq_R b\iff b=ca$
  (suffix); on the group $x\preccurlyeq_L y\iff x^{-1}y\in B_n^{+}$,
  $x\preccurlyeq_R y\iff yx^{-1}\in B_n^{+}$; unconditional left/right lcms and
  gcds in $B_n^{+}$, $a\vee_L b=[u\Theta(u,v)]$.
- **Normal form.** Unique $x=\Delta^{p(x)}a_1\cdots a_r$ with $p(x)$ maximal,
  $\Delta\not\preccurlyeq_L A(x)$, $a_i$ proper simple and
  $a_i=\Delta\wedge_L(a_i\cdots a_r)$; $p(x)\ge0\iff x\in B_n^{+}$;
  $(a_ia_{i+1})\wedge_L\Delta=a_i$.
- **Centre.** For $n>2$, $Z(B_n)=\langle\Delta^{2}\rangle\cong\mathbb Z$ (full
  twist $\Delta^{2}$); the $n=2$ exception $Z(B_2)=B_2=\langle\sigma_1\rangle$
  is item 24. The exponent sum is a homomorphism but not a complete normal
  form (item 28).

## Axiom policy

No item of this pair assumes or uses the Axiom of Choice or any weaker choice
principle: `def-axiom-of-choice` is in no item's dependency closure, and every
item states explicitly that no choice principle is used. All inductions are
over $\mathbb N$ or over the $\mathbb N$-valued Noetherianity witness
$\lambda^{*}(w)=|w|$; all "selections" are displayed words.

## Machine verification (independent of the written proofs)

Because the pair's complement machinery is easy to get subtly wrong, the
orientation repair was checked with two independent oracles
(`/tmp/gv/`, not part of the repository):

- **Reversing oracle.** An element-faithful implementation of the syntactic
  right-reversing (negatives read in reverse; step
  $(s^{-},t^{+})\mapsto\theta(s,t)^{+}(\theta(t,s)^{-})$) reproduces the
  source's Example 4.11 value $\theta^{*}(\sigma_1\sigma_2,\sigma_3\sigma_2)=\sigma_3\sigma_2\sigma_1$,
  the **five-step** reversing sequence of Example 4.22 with terminal blocks
  $(\sigma_3\sigma_2\sigma_1,\ \sigma_1\sigma_2\sigma_3)$, the definition
  item's worked value $\Theta(\sigma_2\sigma_1,\sigma_3)=\sigma_3\sigma_2\sigma_1$,
  and the companion value $\Theta(\sigma_3,\sigma_2\sigma_1)=\sigma_2\sigma_3\sigma_1\sigma_2$.
- **Faithful braid equality.** Via Artin's action on the free group $F_n$ the
  oracle confirms $u\,\Theta(u,v)=v\,\Theta(v,u)$ for those pairs (e.g.
  $\sigma_1\sigma_2\cdot\sigma_3\sigma_2\sigma_1=\sigma_3\sigma_2\cdot\sigma_1\sigma_2\sigma_3$),
  while correctly rejecting the commutativity nonsense
  $\sigma_1\sigma_2=\sigma_2\sigma_1$.
- **Cube condition.** The six consecutive-triple values of item 4's steps
  2.4–2.6 were recomputed and agree word-for-word
  ($\Theta_3(\sigma_i,\sigma_{i+1},\sigma_{i+2})=\sigma_{i+2}\sigma_{i+1}\sigma_i$ etc.),
  and $\Theta_3(x,y,z)\equiv^{+}\Theta_3(y,x,z)$ holds for **all** letter
  triples of $B_6$ (0 failures), with $\equiv^{+}$-equivalence checked by
  braid equality, including the pair
  $\sigma_{i+1}\sigma_i\sigma_{i+2}\sigma_{i+1}\equiv^{+}\sigma_{i+1}\sigma_{i+2}\sigma_i\sigma_{i+1}$.
- **Examples.** The B-page meet values were re-derived by hand under the page's
  conventions (right divisors are suffixes), and item 26's meet
  $\Delta\wedge_L\sigma_1\sigma_2^{2}=\sigma_1\sigma_2$ follows from the
  machine-checked scaling instance $D(A\wedge_LB)=(DA)\wedge_L(DB)$ with
  $D=\sigma_1\sigma_2$, $A=\sigma_1$, $B=\sigma_2$ and
  $\sigma_1\wedge_L\sigma_2=1$.

## Checks actually run (2026-09-26, explicit paths, repository root)

- `node tools/tsx-run.mjs tools/precheck.mts` on the 28 item paths →
  **24 checked, 0 failing** (4 definitions carry `precheck: n/a`).
- `node tools/rendercheck.mjs` on the 28 items + 2 page files → **OK — 30
  files**: no wikilink inside math, no nested/unbalanced delimiters, no
  multiline display block, all math parses under KaTeX, all frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-15.proof-contracts.json --strict`
  → **0 errors, 2 warnings, 42/42 items**. Both warnings are advisory
  `shotgun-bracket` (item 5 step 2.3 and item 28 step 3.2 cite 4–5 facts while
  two assembly steps cite none); reported rather than silenced.
- `node tools/citation-fidelity.mjs research/frontier-35-ten-categories-batch-15.proof-contracts.json`
  → **329 citations over 42 authored items; no quote-not-found, no widening
  candidates.**
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-15.pages.json`
  → **42 scoped items, 0 errors, 0 warnings.**
- `node tools/content-policy.mjs … --manifest-only` → **42
  `batch-item-already-exists` errors**, i.e. the pre-splice shape of an authored
  batch whose plan rows do not yet list the ids (identical in kind to what the
  closed 729/730 pair yields); recorded as a Step-4 obligation, not hidden.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-15.pages.json`
  → **42 items, 0 normalized, 0 errors.**
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-15.coverage.json --require-destination`
  → **4 pages, 58 harvested results, 0 errors, 1 warning** — the accepted
  `coverage-low-yield` advisory on the B page. The 12 harvested B-page results
  are all `inline` and each names the authored item that absorbs it (3 per B
  item); the design's 4 B examples are exactly the 4 authored B items, so the
  advisory is confirmable as "the remaining results are illustration, not
  missing items".
- `node tools/validate-plan.mjs research/plan-spec.json` → **OK**: the 1188
  pages with item lists are acyclic and free of forward/B-leaf/unresolved
  edges; the NOTE over 431 pages without item lists **includes rows 741/742**
  (same Step-4 splice obligation).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  → refreshed. `research/frontier-35-ten-categories-batch-15.cross-batch-dependencies.json`
  is `[]` and complete: no in-run cross-batch edge touches batch 15, and no
  orphaned reviews remain. `briefs/tasks/frontier-dependency-ledger.md` is the
  process file, unchanged; the unified ledger currently lists no batch-15 row.
- `node tools/depcheck.mjs` → exit 1 on repository-wide findings (**355
  errors, 267 warnings**: 355 `published-unaudited`, 140 `multi-home`, 127
  `cited-not-in-deps`, plus page-depth context). Findings that mention this
  pair's ids are exactly the five deliberate forward remarks
  (`lem-artin-positive-word-reversing-is-complete` →
  `lem-every-positive-braid-divides-a-power-of-delta-on-both-sides`;
  `lem-each-artin-atom-divides-delta-on-both-sides` →
  `thm-positive-braids-have-left-and-right-gcds-and-lcms`;
  `thm-braid-groups-are-torsion-free-by-the-garside-lattice` →
  `thm-left-garside-normal-form-is-unique`, an explicit **non-use**
  disclaimer; `lem-a-central-positive-braid-…` and
  `thm-the-center-of-b-n-…` → `prop-the-center-of-b-two-is-all-of-b-two`),
  plus the `published-unaudited` flag on the published
  `thm-the-two-strand-braid-group-is-infinite-cyclic`. No error of any other
  kind mentions this pair. Reported honestly; **not** a batch-15 pass, and the
  unrelated published debt is left to its owners.

## Local suppliers added

No new item, definition, lemma or pair was added, and no promised claim was
dropped. Every authored id is an assigned row of the pair's manifest (the
Step-3a scope receipt records the 19 designed A claims + 4 designed B examples
plus the 5 source-backed local prerequisites already scaffolded: right
complements/reversing, the ordinary cube condition, reversing completeness,
atom-divides-$\Delta$, and the type-A reduced-word lift). The only
in-item supplier clause added before its consumer is the scaling identity
$D(A\wedge_LB)=(DA)\wedge_L(DB)$ in
`thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group`
step 1.3, stated before its use in item 26 step 2.1.

## Published concerns (reported for the owner and the serial ledger)

The serial reconciler owns `research/published-consumer-supplier-ledger.md`; it
was not touched. Neither published item below is in this pair's transitive
dependency closure (the pair consumes only
`def-braid-group-by-the-artin-presentation`,
`thm-adjacent-transpositions-generate-the-symmetric-group` and
`thm-reduced-words-form-the-free-group`).

1. `thm-the-symmetric-group-has-the-coxeter-presentation` — **confirmed defect
   (the proof is an external citation of the target; confidence high).**
   Step 1.1 is the whole mathematical content and reads "For $n\ge2$, [F1] is
   exactly the displayed presentation …, and [L1] transports those generators
   …", where [F1] is "Muger states in Section 4 that the symmetric groups have
   the presentation …". The declared dependencies
   (`thm-adjacent-transpositions-generate-the-symmetric-group`,
   `thm-von-dyck`) are unused by the proof. Repair strategy (no new foundation
   needed): von Dyck from the adjacent transpositions (with $s_i^{2}=1$, the
   three-term braid relation and far commutation verified directly in $S_n$)
   gives the epimorphism from the presented Coxeter group onto $S_n$, the
   adjacent-generation theorem gives surjectivity, and injectivity needs the
   type-A reduced-word/exchange argument (equality of lengths of two reduced
   words for one element plus exchange), which this library's
   `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`
   now carries locally. Downstream review candidate:
   `thm-the-braid-group-surjects-onto-the-symmetric-group` — **suspicion, not a
   defect of its conclusion**: its [L3] borrows this unproved presentation
   theorem for the single fact "the adjacent transpositions satisfy the
   Coxeter relations", which is a direct finite check in $S_n$; the reconciler
   should have that step re-sourced (or wait for the repaired theorem). Its
   conclusion (surjectivity of $B_n\to S_n$ from the braid relations in $S_n$)
   is otherwise sound.
2. `thm-the-two-strand-braid-group-is-infinite-cyclic` — **the earlier defect
   report is resolved on disk; no action needed.** At 2026-09-26T19:29:42 local
   its owner rewrote it: it now depends on
   `thm-reduced-words-form-the-free-group` and proves $\sigma_1^{m}\neq1$ for
   $m\neq0$ by the reduced-word argument ("each is a nonempty reduced word,
   distinct from the empty identity word by [L2]"), which supplies the missing
   $\sigma_1\ne1$. Only the unrelated `published-unaudited` status flag remains
   (it is published without `verification.audited`).

Unrelated repository-wide `depcheck` debt (the 355 `published-unaudited`
items, `multi-home` pairs, other `cited-not-in-deps` rows, page-depth
context) is left to its owners; unrelated published debt does not block this
sound new supplier.

## Open obligations at handoff

1. **Pre-splice plan mismatch (Step 4).** `research/plan-spec.json` still
   carries empty item inventories for pages 741/742 (the repo-wide NOTE covers
   431 pages). The batch manifest rows are the proposal and must be spliced
   mechanically at Step 4; the 42 `--manifest-only` errors are exactly this
   shape. `validate-plan.mjs` reports it as a NOTE, not an error.
2. **Birman–Brendle §5.3 (dual Garside structure)** still lacks an explicit
   `out-of-scope` coverage row in the batch-15 coverage file, as the Step-3a
   review recorded; dual structures are outside this classical BG-7 pair. The
   serial reconciler owns the row; nothing in this dispatch depends on it.
3. **Published concerns** 1 and 2 above (one confirmed defect with a named
   repair strategy and one downstream review candidate; one resolved on disk).
   The serial reconciler updates `published-consumer-supplier-ledger.md`.
4. **BG-3/BG-6 injectivity seam (Step 4, order 739).** The BG-1 design seam
   assigns injectivity of the Artin map to BG-3 while the plan places
   presentation completeness in
   `artin-presentation-completeness-and-braid-combing` (inventory-neutral).
   This pair proves neither; the wording seam stays for the owner.
5. **Advisories accepted and reported, not hidden:** 5 forward-reference
   `cited-not-in-deps` remarks (each is a Statement/Remark forward mention, not
   a proof use — item 21's is an explicit non-use disclaimer); 2
   `shotgun-bracket` contract warnings (items 5 and 28); 1
   `coverage-low-yield` warning on the B page (justified above: all 4 designed
   B items authored, 12 harvested results absorbed inline with named hosts).
6. **No owner-held escalation, no AC, no dropped claim.** Nothing of this pair
   is escalated or left mathematically open; every item states its choice-free
   character.

## Completed IDs (all decisions recorded, receipts CLOSED)

`def-positive-braid-monoid` (**accept**),
`lem-positive-artin-relations-preserve-homogeneous-length` (repaired),
`def-artin-right-complements-and-word-reversing` (repaired),
`lem-artin-right-complements-satisfy-the-cube-condition` (repaired),
`lem-artin-positive-word-reversing-is-complete` (repaired),
`lem-the-positive-braid-monoid-is-left-and-right-cancellative` (repaired),
`def-left-and-right-divisibility-for-positive-braids` (repaired),
`lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements` (repaired),
`def-garside-half-twist-and-simple-positive-braid` (repaired),
`lem-conjugation-by-delta-reverses-artin-generators` (repaired),
`lem-each-artin-atom-divides-delta-on-both-sides` (repaired),
`lem-every-positive-braid-divides-a-power-of-delta-on-both-sides` (repaired),
`thm-positive-braids-have-left-and-right-gcds-and-lcms` (repaired),
`thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group` (repaired),
`thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group` (repaired),
`lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts` (repaired),
`lem-simple-positive-braids-are-indexed-by-permutations` (repaired),
`lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors` (repaired),
`thm-left-garside-normal-form-is-unique` (repaired),
`cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form` (repaired),
`thm-braid-groups-are-torsion-free-by-the-garside-lattice` (repaired),
`lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two` (repaired),
`thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two` (repaired),
`prop-the-center-of-b-two-is-all-of-b-two` (repaired),
`ex-the-simple-braids-and-divisibility-lattice-for-b-three` (repaired),
`ex-a-left-garside-normal-form-computation-in-b-three` (repaired),
`ex-the-full-twist-in-b-three` (repaired),
`cex-exponent-sum-is-not-a-complete-braid-normal-form` (repaired).

Next action: none for this pair until Step 4 splices rows 741/742 into the plan
and the serial reconciler folds the published concerns and the §5.3 coverage row
in; the 28 receipts are closed against the current bytes.
