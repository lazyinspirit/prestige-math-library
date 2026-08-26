# frontier-19 · Beta-6 · batch notes — `block-designs-and-finite-projective-planes` and `classical-and-loglog-erdos-hajnal-bounds` (steps 1–2)

Run `frontier-19`, batch `6`, two A/B pairs, category `combinatorics`.
Author: Beta-6 (Codex/GPT-5.4 lane in this session; brief names Claude Opus 5
for the intended Beta role, and I am not silently substituting that role claim
inside the notes).

Artifacts owned by this batch and written here:
`research/frontier-19-batch-6.pages.json`,
`research/frontier-19-batch-6.coverage.json`,
`research/frontier-19-batch-6.proof-contracts.json`, and this file.

Write-scope contradiction in the brief, recorded once so it is not rediscovered:
section 1 says Beta may write exactly three files, but the same brief also makes
`research/frontier-19-batch-6.coverage.json` mandatory and gates the batch on it.
I follow the gated requirement and write all four namespaced artifacts.

## Continuity checkpoint

Current substage: step-2 scaffold frozen; `pages.json` is written; `coverage.json`,
`proof-contracts.json`, and the final check runs are next.

Owned artifact paths:
`research/frontier-19-batch-6.pages.json`,
`research/frontier-19-batch-6.coverage.json`,
`research/frontier-19-batch-6.proof-contracts.json`,
`research/frontier-19-batch-6.notes.md`.

Completed checks and context:
- Read `CLAUDE.md`, `SCHEMA.md`, `README.md`, `QUALITY-CONTROLS.md`,
  `items/lem-cauchy-bounded.md`, the latest completed batch-1 artifacts from
  `frontier-18`, the batch-6 brief, the relevant step-0 drift notes, and the
  current `plan-spec.json` rows.
- Opened from disk every published dependency I intend to use load-bearingly on
  the Erdős–Hajnal page, plus the published Fisher/Eventown/Fano-line items.
- Verified that the current `research/frontier-19-batch-6.pages.json` stub was
  the empty generated scaffold, not authored work.

Open mathematical and dependency constraints:
- `block-designs-and-finite-projective-planes` has a three-way drift: the brief
  points at the old unsplit CB-14 section, step-0 drift adjudicated against
  split CB-14a, and the spec title still promises finite projective planes.
- Bruck–Ryser / Hadamard / difference-set material from the split design cannot
  be carried honestly on the current unsplit page without either a spec split or
  an extra prerequisite page for `thm-lagrange-four-square-theorem`.
- `cor-a-restricted-set-contains-a-large-stable-set-or-clique` is published but
  has `provenance.statement: ai-generated`, so it is forbidden as a load-bearing
  dependency for the Erdős–Hajnal proofs.

Exact next action: finish `coverage.json`, then write the provisional proof
contracts, then run `source-fetch-check`, `coverage-checklist`, and
`prosecheck`.

---

## 1. Per-page item list

### A page `block-designs-and-finite-projective-planes` — order 225 — 24 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-two-design` | definition | A $2$-$(v,k,\lambda)$ design |
| 2 | `def-incidence-matrix-of-a-two-design` | definition | The point-block incidence matrix of a $2$-design |
| 3 | `lem-replication-number-is-constant-in-a-two-design` | lemma | Every point of a $2$-design lies in the same number of blocks |
| 4 | `thm-counting-identities-for-a-two-design` | theorem | A $2$-design satisfies $bk=vr$ and $r(k-1)=\lambda(v-1)$ |
| 5 | `cor-divisibility-conditions-for-a-two-design` | corollary | The standard divisibility conditions for a $2$-design |
| 6 | `thm-incidence-matrix-identity-for-a-two-design` | theorem | For a $2$-design, $NN^{\mathsf T}=(r-\lambda)I+\lambda J$ |
| 7 | `thm-fishers-inequality-for-two-designs` | theorem | Fisher's inequality: every $2$-$(v,k,\lambda)$ design has at least $v$ blocks |
| 8 | `def-symmetric-design` | definition | A symmetric design |
| 9 | `thm-block-intersections-in-a-symmetric-design` | theorem | In a symmetric $2$-design, distinct blocks meet in exactly $\lambda$ points |
| 10 | `def-steiner-systems-and-steiner-triple-systems` | definition | Steiner systems and Steiner triple systems |
| 11 | `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six` | corollary | A Steiner triple system can exist only when $v\equiv1$ or $3\pmod6$ |
| 12 | `thm-bose-construction-produces-a-steiner-triple-system` | theorem | Bose's construction gives a Steiner triple system of order $6m+3$ |
| 13 | `thm-skolem-construction-produces-a-steiner-triple-system` | theorem | Skolem's construction gives a Steiner triple system of order $6m+1$ |
| 14 | `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` | theorem | A Steiner triple system exists exactly when $v\equiv1$ or $3\pmod6$ |
| 15 | `def-finite-projective-plane` | definition | A finite projective plane |
| 16 | `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points` | lemma | Every line in a finite projective plane has the same number of points |
| 17 | `def-order-of-a-finite-projective-plane` | definition | The order of a finite projective plane |
| 18 | `thm-counts-in-a-finite-projective-plane` | theorem | A finite projective plane of order $n$ has $n^2+n+1$ points and the same number of lines |
| 19 | `cor-finite-projective-planes-are-symmetric-two-designs` | corollary | A projective plane of order $n$ is a symmetric $2$-$(n^2+n+1,n+1,1)$ design |
| 20 | `thm-pg-two-q-is-a-finite-projective-plane` | theorem | For every prime power $q$, the space $PG(2,q)$ is a projective plane of order $q$ |
| 21 | `def-latin-square` | definition | A Latin square |
| 22 | `def-orthogonal-latin-squares-and-complete-families` | definition | Orthogonal Latin squares and complete families of them |
| 23 | `thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal` | theorem | The linear Latin squares $L_a(i,j)=ai+j$ over $\mathbb F_q$ are pairwise orthogonal |
| 24 | `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares` | corollary | Every prime power order $q$ admits $q-1$ mutually orthogonal Latin squares |

### B page `block-designs-and-finite-projective-planes-examples` — order 226 — 7 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-skolems-construction-gives-the-fano-plane` | example | Skolem's construction at order $7$ gives the Fano plane |
| 2 | `ex-the-incidence-matrix-of-the-fano-plane` | example | The Fano plane has incidence matrix $N$ with $NN^{\mathsf T}=2I+J$ |
| 3 | `ex-bose-construction-for-the-steiner-triple-system-on-nine-points` | example | Bose's construction at order $9$ gives a Steiner triple system on nine points |
| 4 | `ex-pg-two-three-has-thirteen-points-and-thirteen-lines` | example | $PG(2,3)$ has $13$ points and $13$ lines |
| 5 | `ex-two-orthogonal-latin-squares-of-order-three` | example | The squares $L_1(i,j)=i+j$ and $L_2(i,j)=2i+j$ on $\mathbb F_3$ are orthogonal |
| 6 | `cex-a-symmetric-design-need-not-be-a-projective-plane` | counterexample | The complementary $2$-$(7,4,2)$ design is symmetric but not a projective plane |
| 7 | `cex-two-latin-squares-need-not-be-orthogonal` | counterexample | A Latin square is never orthogonal to an identical copy of itself |

### A page `classical-and-loglog-erdos-hajnal-bounds` — order 403 — 5 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `rem-fox-sudakov-quantitative-density-theorem` | remark | Fox–Sudakov: a quantitative density form of Rödl's theorem |
| 2 | `thm-classical-erdos-hajnal-bound` | theorem | Every $H$-free graph has a homogeneous set of size at least $2^{c\sqrt{\log_2 n}}$ |
| 3 | `rem-loglog-quantitative-density-theorem` | remark | Bucić–Nguyen–Scott–Seymour: a log-log quantitative density theorem |
| 4 | `thm-loglog-erdos-hajnal-bound` | theorem | Every $H$-free graph has a homogeneous set of size at least $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}$ |
| 5 | `cor-the-loglog-bound-eventually-dominates-the-classical-bound` | corollary | For fixed $H$, the log-log scale eventually exceeds every classical scale $2^{c\sqrt{\log_2 n}}$ |

### B page `classical-and-loglog-erdos-hajnal-bounds-examples` — order 404 — 5 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-choosing-x-for-the-classical-erdos-hajnal-bound` | example | The Fox–Sudakov choice of $x$ makes the dense-or-sparse set have order at least $\sqrt n$ |
| 2 | `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` | example | The log-log choice of $x$ still leaves a dense-or-sparse set of order at least $\sqrt n$ |
| 3 | `ex-the-classical-bound-is-subpolynomial` | example | A lower bound of size $2^{c\sqrt{\log_2 n}}$ is still subpolynomial in $n$ |
| 4 | `ex-the-loglog-bound-is-still-subpolynomial` | example | A lower bound of size $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}$ is still subpolynomial in $n$ |
| 5 | `ex-p-three-free-graphs-have-much-larger-homogeneous-sets` | example | The $P_3$-free case is much stronger than the general lower bounds |

All four counts are recountable from the tables above. No page is near the
60-item ceiling, so I propose no split inside batch 6.

Landmarks for step 5:
- `block-designs-and-finite-projective-planes`: items 1, 4, 7, 14, 15, 18, 20.
- `classical-and-loglog-erdos-hajnal-bounds`: items 2 and 4.
- All example-page items are `landmark: false`.

---

## 2. Per-pair richness report

### `block-designs-and-finite-projective-planes`

Both passes were run.

Proof-decomposition pass:
- The design-theory prefix is decomposed into `lem-replication-number-is-constant-in-a-two-design`, `thm-counting-identities-for-a-two-design`, `cor-divisibility-conditions-for-a-two-design`, and `thm-incidence-matrix-identity-for-a-two-design`, instead of one long opening theorem about parameters.
- The Steiner existence theorem is split into a necessary-congruence corollary plus separate Bose and Skolem construction theorems before the iff theorem.
- The projective-plane prefix is split into the constant line-size lemma, the order definition, the count theorem, and only then the design-theoretic corollary.

Corollary pass:
- Added `cor-divisibility-conditions-for-a-two-design`, `cor-finite-projective-planes-are-symmetric-two-designs`, and `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares`.
- Declined Bruck–Ryser / Hadamard / difference-set / resolvable-design continuations, not because they are unimportant, but because the current spec page id is unsplit while step-0 drift adjudicated only the CB-14a half and the current page prerequisites do not name `lagrange-four-square-theorem`. Finding 1 below.

### `classical-and-loglog-erdos-hajnal-bounds`

Both passes were run.

Proof-decomposition pass:
- No extra decomposition lemma was added. Both proof-bearing A-page items are
  already short, and splitting either one would manufacture an AI-generated
  load-bearing lemma for a calculation that is cleaner kept inline.

Corollary pass:
- Added `cor-the-loglog-bound-eventually-dominates-the-classical-bound`.
- Declined a separate “the log-log bound is still subpolynomial” corollary on A:
  that content is kept as a B-page example because it is explanatory, not
  load-bearing.

External-fallback pass:
- Added two source-cited `rem-` items, each with a local consequence proved on
  the page:
  `rem-fox-sudakov-quantitative-density-theorem` and
  `rem-loglog-quantitative-density-theorem`.
- Both satisfy the narrow-last-resort rule. The page proves the two titled
  Erdős–Hajnal bounds locally from those sourced quantitative statements; it
  does not treat the quantitative theorems themselves as locally proved.

---

## 3. Findings for the step-3 Alpha

Each finding is one recommendation, ordered by severity.

### Finding 1 — approve the unsplit/split compromise for `block-designs-and-finite-projective-planes`

What is wrong:
- The brief and `research/frontier-19-step0-notes.md` still point Beta-6 to the
  old unsplit CB-14 line at `plan-combinatorics-and-categories.md` L2322.
- The adjudicated drift record at
  [research/frontier-19-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-alpha-step0-drift.md:13)
  explicitly read **CB-14a (ENRICHED, split)** instead.
- The current spec page id and title still promise “Finite Projective Planes”.

What I propose:
- Approve the scaffold as “CB-14a-rich design theory plus the pre-Bruck–Ryser
  finite-projective-plane bridge”: it carries block designs, Fisher, symmetric
  designs, Steiner triple systems, the order/count theorems for projective
  planes, $PG(2,q)$, and the finite-field MOLS construction.
- Record the omitted split-era CB-14a/14b material (difference sets, Hadamard
  designs, Bruck–Ryser, odd-order BRC, order-10 nonexistence, full
  projective-plane/MOLS equivalence) as deliberate step-2 deferrals in
  `coverage.json`, not as silent omissions.

What breaks if declined:
- Beta would have to choose either the adjudicated drift record or the current
  spec title, and two different batch-6 readers would verify against two
  different intended scopes.

### Finding 2 — defer Bruck–Ryser/Hadamard/split continuations to `owner-decision`

What is wrong:
- The split CB-14a/CB-14b design block carries Bruck–Ryser, Hadamard designs,
  difference sets, and extra projective-plane material.
- The current unsplit page does not declare the number-theory predecessor that
  Bruck–Ryser uses load-bearingly in the split design (`thm-lagrange-four-square-theorem`),
  and there is no split page id in `research/plan-spec.json` to receive the
  deferred half honestly.

What I propose:
- Keep the current page pre-Bruck–Ryser and route those results to
  `owner-decision` in `coverage.json`.
- If Alpha wants that material in frontier-19, it should be by an explicit
  step-3/4 split or a spec prerequisite edit, not by silently inflating this
  unsplit page.

What breaks if declined:
- The page either acquires an undeclared predecessor, duplicates a published
  number-theory theorem locally for convenience, or ships under-harvested
  coverage rows for results that the source treatment actually contains.

### Finding 3 — keep the Erdős–Hajnal proofs off the published ai-generated corollary

What is wrong:
- The published `cor-a-restricted-set-contains-a-large-stable-set-or-clique`
  has `provenance.statement: ai-generated`.
- The brief forbids any load-bearing dependency whose statement provenance is
  `ai-generated`.

What I propose:
- Approve the current route, which does **not** depend on that corollary.
- The classical/log-log proofs instead cite the published
  `lem-a-weakly-sparse-set-has-a-large-sparse-subset`,
  `lem-greedy-colouring-bound`,
  `thm-clique-independence-chromatic-bounds`, and
  `lem-complement-swaps-cliques-and-stable-sets`, and perform the final stable
  set / clique extraction inline.

What breaks if declined:
- The scaffold would violate the future-scope dependency rule mechanically, and
  step 6 would need to rewrite the route anyway.

### Finding 4 — approve the two narrow external `rem-` items on page 403

What is wrong:
- The page title names the classical and log-log general Erdős–Hajnal bounds.
- Their shortest honest proofs in the current reading order use two sourced
  quantitative density theorems (Fox–Sudakov 1.5 and Bucić–Nguyen–Scott–Seymour
  1.8) that the library has not built locally.

What I propose:
- Keep `rem-fox-sudakov-quantitative-density-theorem` and
  `rem-loglog-quantitative-density-theorem` as the only external-fallback items
  on the page.
- Prove `thm-classical-erdos-hajnal-bound` and
  `thm-loglog-erdos-hajnal-bound` locally from them, using only published
  non-generated dependencies.

What breaks if declined:
- The page either loses its titled results or expands into paper-scale
  machinery that is not in the current design block and not closed by the
  present prerequisites.

### Finding 5 — accept that page 403 has no richer design section than the table row

What is wrong:
- Unlike the CB pages, `classical-and-loglog-erdos-hajnal-bounds` has no
  dedicated prose design section beyond the §16.2 table row and the article
  coverage notes in §16.4.

What I propose:
- Approve the source-ledger-driven scaffold as the step-2 artifact of record.
- The notes and coverage file now carry the missing pair-specific reasoning:
  why the page uses density-theorem remarks rather than a pure-pair theorem,
  why no forward reference is needed to page 405, and why the B page is
  asymptotic/numerical rather than graph-figure based.

What breaks if declined:
- There is no more detailed on-disk design section for batch 6 to “fall back” to.

---

## 4. Forward references kept

None.

Both pairs close against earlier items on their own A page or against published
content on earlier pages. The only nonlocal inputs on page 403 are the two
explicit source-cited `rem-` items, which are not forward references.

---

## 5. New ids and the duplicate sweep

Duplicate sweep run from the repo root:

```sh
rg -n "def-two-design|def-incidence-matrix-of-a-two-design|lem-replication-number-is-constant-in-a-two-design|thm-counting-identities-for-a-two-design|cor-divisibility-conditions-for-a-two-design|thm-incidence-matrix-identity-for-a-two-design|thm-fishers-inequality-for-two-designs|def-symmetric-design|thm-block-intersections-in-a-symmetric-design|def-steiner-systems-and-steiner-triple-systems|cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six|thm-bose-construction-produces-a-steiner-triple-system|thm-skolem-construction-produces-a-steiner-triple-system|thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six|def-finite-projective-plane|lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points|def-order-of-a-finite-projective-plane|thm-counts-in-a-finite-projective-plane|cor-finite-projective-planes-are-symmetric-two-designs|thm-pg-two-q-is-a-finite-projective-plane|def-latin-square|def-orthogonal-latin-squares-and-complete-families|thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal|cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares|ex-skolems-construction-gives-the-fano-plane|ex-the-incidence-matrix-of-the-fano-plane|ex-bose-construction-for-the-steiner-triple-system-on-nine-points|ex-pg-two-three-has-thirteen-points-and-thirteen-lines|ex-two-orthogonal-latin-squares-of-order-three|cex-a-symmetric-design-need-not-be-a-projective-plane|cex-two-latin-squares-need-not-be-orthogonal|rem-fox-sudakov-quantitative-density-theorem|thm-classical-erdos-hajnal-bound|rem-loglog-quantitative-density-theorem|thm-loglog-erdos-hajnal-bound|cor-the-loglog-bound-eventually-dominates-the-classical-bound|ex-choosing-x-for-the-classical-erdos-hajnal-bound|ex-choosing-x-for-the-loglog-erdos-hajnal-bound|ex-the-classical-bound-is-subpolynomial|ex-the-loglog-bound-is-still-subpolynomial|ex-p-three-free-graphs-have-much-larger-homogeneous-sets" items research/plan-spec.json
```

Result: no hits for any of the new ids above.

---

## 6. Cross-batch dependencies

None load-bearing.

- Batch 6 does not need any unpublished item from the other `frontier-19`
  combinatorics batch (`polynomial-rodl-and-viral-equivalence`).
- Batch 10 may want a non-load-bearing historical link back to
  `thm-loglog-erdos-hajnal-bound`, but nothing in its declared prerequisite list
  requires a batch-6 item for proof closure.

---

## 7. Expected provenance and generation notes

Format:
- `S/P` means `provenance.statement` / `provenance.proof`.
- `L` = `literature-derived`, `A` = `ai-altered`, `G` = `ai-generated`,
  `NS` = `not-supplied`, `NA` = `not-applicable`.

### `block-designs-and-finite-projective-planes`

- `def-two-design` — `L/NA`: source definition, with the deliberate choice not
  to stipulate `r` or `b`.
- `def-incidence-matrix-of-a-two-design` — `L/NA`: standard sourced definition.
- `lem-replication-number-is-constant-in-a-two-design` — `L/A`: standard result,
  local proof reorganized as a focused well-definedness lemma.
- `thm-counting-identities-for-a-two-design` — `L/A`: sourced statements,
  split double counts.
- `cor-divisibility-conditions-for-a-two-design` — `L/A`: sourced arithmetic
  consequence, stated separately for reuse.
- `thm-incidence-matrix-identity-for-a-two-design` — `L/A`: sourced statement,
  locally written matrix-entry proof.
- `thm-fishers-inequality-for-two-designs` — `L/A`: sourced statement and route,
  local positive-definite/rank write-up.
- `def-symmetric-design` — `L/NA`: sourced definition.
- `thm-block-intersections-in-a-symmetric-design` — `L/A`: sourced statement,
  local square-matrix rewrite through `N^{-1} J N = J`.
- `def-steiner-systems-and-steiner-triple-systems` — `L/NA`: sourced definition.
- `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six` — `L/A`:
  sourced necessity, local modular unpacking.
- `thm-bose-construction-produces-a-steiner-triple-system` — `L/A`: sourced
  construction and proof strategy, locally decomposed.
- `thm-skolem-construction-produces-a-steiner-triple-system` — `L/A`: sourced
  construction; proof will follow the sourced block list exactly.
- `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`
  — `L/A`: sourced iff statement, local combination of the three prior items.
- `def-finite-projective-plane` — `L/NA`: sourced definition.
- `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points`
  — `L/A`: sourced statement, local bijection proof.
- `def-order-of-a-finite-projective-plane` — `L/NA`: sourced definition.
- `thm-counts-in-a-finite-projective-plane` — `L/A`: sourced statement, local
  counting proof.
- `cor-finite-projective-planes-are-symmetric-two-designs` — `L/A`: sourced
  design-theoretic reformulation.
- `thm-pg-two-q-is-a-finite-projective-plane` — `L/A`: sourced statement and
  route, local finite-field counting proof.
- `def-latin-square` — `L/NA`: sourced definition.
- `def-orthogonal-latin-squares-and-complete-families` — `L/NA`: sourced definition.
- `thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal`
  — `L/A`: sourced construction, local 2-by-2 linear-system proof.
- `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares`
  — `L/A`: sourced consequence.

### `block-designs-and-finite-projective-planes-examples`

- `ex-skolems-construction-gives-the-fano-plane` — `L/A`: classical sourced
  witness; local incidence verification.
- `ex-the-incidence-matrix-of-the-fano-plane` — `L/A`: sourced witness;
  local matrix multiplication.
- `ex-bose-construction-for-the-steiner-triple-system-on-nine-points` — `L/A`:
  sourced witness; local incidence verification.
- `ex-pg-two-three-has-thirteen-points-and-thirteen-lines` — `L/A`: sourced
  witness; local counting.
- `ex-two-orthogonal-latin-squares-of-order-three` — `L/A`: standard sourced
  witness; local ordered-pair check.
- `cex-a-symmetric-design-need-not-be-a-projective-plane` — `G/G`, generation
  role `counterexample`: checkable witness from complements of Fano lines.
  Truth-risk obligation: verify at step 5 that the complementary blocks really do
  form a `2`-`(7,4,2)` design and that the projective-plane axiom failure is
  stated as `lambda != 1`, not as a vague “not geometric”.
- `cex-two-latin-squares-need-not-be-orthogonal` — `G/G`, generation role
  `counterexample`: identical Latin squares on order `3` give a concrete,
  directly checkable failure.

### `classical-and-loglog-erdos-hajnal-bounds`

- `rem-fox-sudakov-quantitative-density-theorem` — `A/NS`: H-free
  specialization and notation adaptation of theorem 1.5; no local proof.
- `thm-classical-erdos-hajnal-bound` — `L/A`: sourced bound, local proof from
  the external remark and published sparsity/colouring items.
- `rem-loglog-quantitative-density-theorem` — `A/NS`: H-free specialization and
  notation adaptation of theorem 1.8; no local proof.
- `thm-loglog-erdos-hajnal-bound` — `L/A`: sourced bound, local proof from the
  external remark and published sparsity/colouring items.
- `cor-the-loglog-bound-eventually-dominates-the-classical-bound` — `G/G`,
  generation role `direct-corollary`: non-load-bearing asymptotic consequence.
  Truth-risk obligation: step 5 should keep the conclusion explicitly
  “eventually”, with a threshold, not “for all n”.

### `classical-and-loglog-erdos-hajnal-bounds-examples`

- `ex-choosing-x-for-the-classical-erdos-hajnal-bound` — `G/G`, generation role
  `example`: algebraic parameter check internal to theorem 1.5.
- `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` — `G/G`, generation role
  `example`: algebraic parameter check internal to theorem 1.8.
- `ex-the-classical-bound-is-subpolynomial` — `G/G`, generation role `example`:
  checkable asymptotic comparison.
- `ex-the-loglog-bound-is-still-subpolynomial` — `G/G`, generation role
  `example`: checkable asymptotic comparison.
- `ex-p-three-free-graphs-have-much-larger-homogeneous-sets` — `A/A`: sourced
  from a published earlier theorem, but the comparison prose is local.

No ai-generated statement/construction above is used as a `deps` target.

---

## 8. External-fallback records

### `rem-fox-sudakov-quantitative-density-theorem`

- Exact sourced statement to carry at step 5:
  for every graph `H` there exists `c>0` such that for every
  `x in (0,1/2)` and every `H`-free graph `G`, there is
  `S subseteq V(G)` with
  `|S| >= 2^{-c|H|(\log_2(1/x))^2}|V(G)|`
  such that one of `G[S]` and `\overline G[S]` has at most
  `x * binom(|S|,2)` edges.
- Failed local proof route:
  proving theorem 1.5 itself would require rebuilding the Fox–Sudakov
  quantitative density argument, which is not among the current page's
  declared prerequisites and is materially larger than the page remit.
- Necessity:
  it is the shortest honest source-backed input from which the classical
  bound on this page closes locally in a small number of numbered steps.

### `rem-loglog-quantitative-density-theorem`

- Exact sourced statement to carry at step 5:
  for every graph `H` there exists `c>0` such that for every
  `x in (0,1/2)` and every `H`-free graph `G`, there is
  `S subseteq V(G)` with
  `|S| >= 2^{-c(\log_2(1/x))^2/\log_2\log_2(1/x)}|V(G)|`
  such that one of `G[S]` and `\overline G[S]` has at most
  `x * binom(|S|,2)` edges.
- Failed local proof route:
  theorem 1.8 is the main result of the 2024 paper and sits on blockade
  machinery far beyond the current reading order.
- Necessity:
  it is exactly the sourced quantitative improvement whose local
  consequence is the titled log-log Erdős–Hajnal bound.

---

## 9. Web research ledger and dependency-closure statement

### Design/projective-plane pair

Working URLs opened and used:
- `https://people.math.harvard.edu/~elkies/M155.09/jan29`
  Supports Fisher's inequality, incidence-matrix arguments, symmetric-design
  consequences, and the design-notation convention.
- `https://people.math.harvard.edu/~elkies/M155.09/feb03`
  Supports finite projective planes, the order/count theorem, the Fano-plane
  uniqueness/identification, and the finite-field construction of `PG(2,q)`.
- `https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html`
  Supports Steiner triple systems, the Bose construction, the Skolem
  construction, and concrete `STS(7)` / `STS(9)` witnesses.
- `https://deductivepress.ca/math3860/textbook/sect_latin-squares-mols`
  Supports Latin squares, orthogonality, the `n-1` ceiling, and the finite-field
  linear construction route for mutually orthogonal Latin squares.

Convention disagreements found:
- Design notation: `2`-`(v,k,\lambda)` versus `S_\lambda(2,k,v)` and the
  five-parameter `BIBD(v,b,r,k,\lambda)`. This scaffold uses `2`-`(v,k,\lambda)`
  and treats `r,b` as derived, not stipulated.
- “Order” differs between affine and projective planes. Every planned
  projective-plane theorem states the projective counts explicitly.
- The Latin-square sources vary between indexing by `{0,...,n-1}` and by a
  symbol set. The scaffold keeps the abstract definition and uses finite-field
  examples only in B.

### Erdős–Hajnal pair

Working URLs opened and used:
- `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`
  Supports the classical general Erdős–Hajnal lower bound and the historical
  placement of the conjecture.
- `https://arxiv.org/html/2301.10147`
  Supports the classical bound `1.2`, the log-log bound `1.3`, the quantitative
  density theorem `1.5`, the log-log quantitative density theorem `1.8`, and the
  source convention that all logarithms are base `2`.
- `https://arxiv.org/html/2606.06258v2`
  Supports the interaction with the already-published Rödl / Nikiforov page and
  confirms that “general bounds” belong on page `403`.

Convention disagreements found:
- The sources write `\kappa(G)` for the largest clique-or-stable-set size,
  while the library uses `\operatorname{hom}(G)`. The scaffold preserves the
  statement and changes only the name of the invariant.
- The 2024 paper fixes all logarithms to base `2`; the library has both
  natural-log and change-of-base items. The page keeps base `2` in the two main
  theorem statements to avoid silent constant changes.

Dependency-closure statement:
- Every proposed published dependency was opened from disk before use.
- Every load-bearing dependency is either earlier on the same A page or
  published on a strictly earlier page.
- The only exceptions are the two explicit source-cited `rem-` items on page
  `403`, each recorded above under the narrow external-fallback rule.
- No load-bearing dependency target has `provenance.statement: ai-generated`.

Published items explicitly opened from disk for closure checks:
- `thm-nonuniform-fisher-inequality`
- `cor-uniform-fisher-inequality`
- `thm-eventown`
- `fs-fisher-inequality-holds-over-the-two-element-field`
- `thm-finite-fields-have-prime-power-order`
- `thm-existence-of-finite-fields`
- `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field`
- `def-homogeneous-set-and-homogeneous-number`
- `def-erdos-hajnal-property-and-constant`
- `lem-a-weakly-sparse-set-has-a-large-sparse-subset`
- `lem-sparsity-depends-only-on-the-induced-subgraph`
- `lem-greedy-colouring-bound`
- `thm-clique-independence-chromatic-bounds`
- `lem-complement-swaps-cliques-and-stable-sets`
- `thm-ramsey-logarithmic-homogeneous-set-bound`
- `thm-random-graph-logarithmic-homogeneous-set-upper-bound`
- `thm-p3-free-graphs-have-square-root-homogeneous-sets`

---

## 10. Confidence statement

High confidence on:
- the dependency-eligibility issue on page 403;
- the source-backed external-input route for the classical and log-log bounds;
- the block-design prefix through Fisher and Steiner triple systems;
- the finite-field MOLS construction.

Moderate confidence on:
- the exact best page home for the projective-plane half under the current
  unsplit title/spec drift;
- the step-5 write-up burden for the Skolem construction, which is source-backed
  but still needs careful transcription of the block families;
- the exact simplification constants in the page-403 asymptotic proofs. The
  route closes, but step 5 must still choose one clean numerical threshold and
  carry it consistently.

What I did not verify fully at step 2:
- I did not line-by-line author the finite-field/projective-plane proof text.
  I verified the route, the dependencies, and the source coverage, not the final
  paragraphing.
- I did not run `depsource.mjs` against a spliced spec, because step 4 has not
  spliced these ids into `research/plan-spec.json` yet.

## Re-harvest round

Dead-source worklist state on August 25, 2026:
- `research/frontier-19-reharvest-plan.json` has no `work[]` entry for
  `research/frontier-19-batch-6.coverage.json`.
- `node tools/source-backing.mjs --coverage research/frontier-19-batch-6.coverage.json --liveness research/frontier-19-url-liveness.json`
  reports `21 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/coverage-checklist.mjs research/frontier-19-batch-6.coverage.json --require-destination`
  reports `2 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)`.

Source row whose mathematics is still live but whose mechanical fetch stamp is
missing:
- Page: `block-designs-and-finite-projective-planes`
- URL: `https://people.math.harvard.edu/~elkies/M155.09/jan29`
- Title: `Noam D. Elkies, Math 155 notes: Jan. 29`
- Coverage rows supported there:
  `def-incidence-matrix-of-a-two-design`,
  `thm-fishers-inequality-for-two-designs`,
  `thm-block-intersections-in-a-symmetric-design`

What I tried before any replacement:
- Checked `research/frontier-19-url-liveness.json`: the exact URL still has
  `status: 200`, `ok: true`, and `final_url` equal to itself, so this is not a
  dead-link replacement case.
- Opened the exact URL directly on the web on August 25, 2026. It still carries
  the Jan. 29 notes, including Def. 1.10 on the incidence matrix, Theorem 1.14
  on Fisher's inequality, and Theorem 1.15 on the symmetric-design / constant
  block-intersection equivalence.
- Opened `https://people.math.harvard.edu/~elkies/M155.09/index.html` on the
  web on August 25, 2026. It still advertises the January 29 note under the
  same 2009-2010 course edition, so the source record still points at the
  correct document family.
- Checked the author's later notes page
  `https://people.math.harvard.edu/~elkies/M155.15/notes.html`. It contains the
  same Jan. 29 material, but it is a later edition and therefore a different
  source; I did not switch to it while the original source itself remained live.
- Searched for a same-source alternate live URL or a complete archive copy of
  the 2009-2010 January 29 note. The accessible search results surfaced only
  the original Harvard URL, the course index page above, and later-edition
  notes such as `M155.15/notes.html` and `M165.24/notes.html`; I did not find a
  distinct mirror or archive copy of the same edition that I could verify from
  this session.

Why I did not rewrite `coverage.json`:
- The original source is still live and still carries the harvested
  mathematics, so replacing it with a different document would be false repair.
- The batch has no orphaned mathematical result under
  `tools/source-backing.mjs`; the only failing gate is the missing
  `fetch_verified` stamp on this still-live source row.

Mechanical blocker:
- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-6.coverage.json`
  fails only with
  `ERROR fetch-check-unstamped: block-designs-and-finite-projective-planes: https://people.math.harvard.edu/~elkies/M155.09/jan29`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-6.coverage.json --stamp`
  fails with
  `ERROR fetch-check-dead: block-designs-and-finite-projective-planes: https://people.math.harvard.edu/~elkies/M155.09/jan29 — EAI_AGAIN`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-6.coverage.json --stamp --force`
  fails on all eight source rows in this batch, each with `EAI_AGAIN`
  (`people.math.harvard.edu`, `jjdavidson.github.io`, `deductivepress.ca`,
  `web.math.princeton.edu`, and `arxiv.org`), so the current failure is not
  specific to the Jan. 29 Harvard note.
- Re-run in this source-scouting dispatch on August 25, 2026:
  `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-6.coverage.json --stamp --force`
  again returned the same eight `EAI_AGAIN` rows, confirming that the blocker
  is still environment-level outbound DNS rather than a stale earlier note.
- Independent shell checks run on August 25, 2026 show the same
  environment-level DNS failure: `curl -I -L --max-time 20` fails
  `Could not resolve host` for `people.math.harvard.edu`, `arxiv.org`,
  `web.math.princeton.edu`, `r.jina.ai`, and `webcache.allorigins.win`.
- Because the workspace cannot currently resolve any external host, I cannot
  produce a truthful new `fetch_verified` stamp or a truthful replacement-source
  stamp from this session.

Item movement:
- No item statement changed.
- No source row was deleted.
- No replacement URL was written, because the original source is still the
  correct source.

Exact next action once outbound DNS works again:
- Re-run
  `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-6.coverage.json --stamp`.
- If that succeeds, batch 6 needs no re-harvest at all.
- If the exact URL then truly fails, the first fallback candidate already
  checked is `https://people.math.harvard.edu/~elkies/M155.15/notes.html`,
  which would require a genuine coverage-row rewrite because it is a different
  edition.

## Step-3 fix pass

### B6-1 — already correct

Evidence:
- `research/frontier-19-batch-6.pages.json` already scopes
  `block-designs-and-finite-projective-planes` to the CB-14a half that Alpha
  reviewed: designs, Fisher, symmetric designs, Steiner triple systems, the
  finite-projective-plane counting bridge, `PG(2,q)`, and the finite-field
  MOLS construction.
- `research/frontier-19-batch-6.coverage.json` already records the omitted
  split-era continuation honestly instead of hiding it: Davidson's Latin-square
  note sends the triangle-decomposition equivalence to `owner-decision`, and
  Deductive Press section 16.2 sends the general MOLS upper bound `N(n) <= n-1`
  to `owner-decision`.
- This notes file already states the same scope condition explicitly in
  Finding 1 and Finding 2: the current unsplit page is being treated as the
  drift-adjudicated CB-14a half, while Bruck-Ryser / Hadamard / difference-set
  / full continuation material is deferred because no honest split target or
  added prerequisite page exists on disk yet.

No scaffold change was needed.

### B6-2 — already correct

Evidence:
- `research/frontier-19-batch-6.pages.json` already avoids the published
  `cor-a-restricted-set-contains-a-large-stable-set-or-clique` item and instead
  routes both Erdős–Hajnal proofs through the two explicit external remarks
  `rem-fox-sudakov-quantitative-density-theorem` and
  `rem-loglog-quantitative-density-theorem`, plus published non-generated
  sparse-set, coloring, clique/stable-set, complement, and logarithm items.
- `research/frontier-19-batch-6.coverage.json` already marks Fox-Sudakov 1.5
  and Bucić–Nguyen–Scott–Seymour 1.8 as `included`, while stronger
  quantitative theorems that the page does not need remain explicit `deferred`
  rows with reasons and destinations.
- This notes file already records the same dependency discipline in Finding 3
  and Finding 4: the ai-generated published corollary is not used
  load-bearingly, and the two `proved_here: false` remarks are the narrow
  honest external bridge for the titled page results.

No scaffold change was needed.

### Check reruns

- `node tools/coverage-checklist.mjs research/frontier-19-batch-6.coverage.json`
  returned `coverage-checklist: 2 page(s), 30 harvested result(s), 0 error(s),
  0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json`
  returned `content-policy: 443 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` exited `0` and
  reported the global note that many planned pages still have no item list yet;
  for the pages with item lists on disk it ended with `OK — declared page order
  is acyclic and consistent; no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 376 page(s) with item lists.`

## Continuity checkpoint

Current substage: step-5 authoring complete for batch `6`; notes/report pass in
progress.

Owned artifacts:
- `research/frontier-19-batch-6.pages.json`
- `research/frontier-19-batch-6.coverage.json`
- `research/frontier-19-batch-6.proof-contracts.json`
- `research/frontier-19-batch-6.notes.md`
- `items/*` and `library/combinatorics/*` for pages 225/226 and 403/404

Completed local gates as of Tuesday, August 25, 2026:
- `tools/reflow.mts` run over all authored batch-6 item files.
- `tools/precheck.mts` passes on all 30 proof-bearing authored items.
- `tools/rendercheck.mjs` passes on all 45 authored item/page files.
- `tools/content-policy.mjs research/frontier-19-batch-6.pages.json` passes.
- `tools/coverage-checklist.mjs research/frontier-19-batch-6.coverage.json`
  passes.
- `tools/proof-contract.mjs research/frontier-19-batch-6.proof-contracts.json --strict`
  passes with one nonfatal `shotgun-bracket` warning on
  `thm-loglog-erdos-hajnal-bound`.
- `tools/extcheck.mjs` passes repository-wide, with inherited warnings only.
- `tools/prosecheck.mjs ... --warnings` passes on the authored batch-6 scope.
- `tools/validate-plan.mjs research/plan-spec.json` passes.

Open constraints:
- `tools/depcheck.mjs` still fails repository-wide on unrelated pre-existing
  issues (`def-polynomial-rodl-property-for-a-finite-family` unresolved library
  link; several older page cycles / B-leaf failures outside batch 6). The
  targeted search over its output names no surviving batch-6 defect after the
  A/B page-frontmatter and `def-order-of-a-finite-projective-plane` fixes.
- `tools/fwdcheck.mjs` still fails repository-wide on unrelated pre-existing
  issues; no batch-6 id appears in its filtered output.
- `tools/citecheck.mjs` remains warning-only and reports only unrelated
  repository warnings in this run.

Exact next action: append the step-5 authoring report below and return the same
summary to step 6.

## Step-5 authoring

### Items authored

`block-designs-and-finite-projective-planes`
- `def-two-design` — `n/a`
- `def-incidence-matrix-of-a-two-design` — `n/a`
- `lem-replication-number-is-constant-in-a-two-design` — `pass`
- `thm-counting-identities-for-a-two-design` — `pass`
- `cor-divisibility-conditions-for-a-two-design` — `pass`
- `thm-incidence-matrix-identity-for-a-two-design` — `pass`
- `thm-fishers-inequality-for-two-designs` — `pass`
- `def-symmetric-design` — `n/a`
- `thm-block-intersections-in-a-symmetric-design` — `pass`
- `def-steiner-systems-and-steiner-triple-systems` — `n/a`
- `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six` — `pass`
- `thm-bose-construction-produces-a-steiner-triple-system` — `pass`
- `rem-skolem-construction-produces-a-steiner-triple-system` — `n/a`
- `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` — `pass`
- `def-finite-projective-plane` — `n/a`
- `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points` — `pass`
- `def-order-of-a-finite-projective-plane` — `n/a`
- `thm-counts-in-a-finite-projective-plane` — `pass`
- `cor-finite-projective-planes-are-symmetric-two-designs` — `pass`
- `thm-pg-two-q-is-a-finite-projective-plane` — `pass`
- `def-latin-square` — `n/a`
- `def-orthogonal-latin-squares-and-complete-families` — `n/a`
- `thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal` — `pass`
- `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares` — `pass`

`block-designs-and-finite-projective-planes-examples`
- `ex-skolems-construction-gives-the-fano-plane` — `pass`
- `ex-the-incidence-matrix-of-the-fano-plane` — `pass`
- `ex-bose-construction-for-the-steiner-triple-system-on-nine-points` — `pass`
- `ex-pg-two-three-has-thirteen-points-and-thirteen-lines` — `pass`
- `ex-two-orthogonal-latin-squares-of-order-three` — `pass`
- `cex-a-symmetric-design-need-not-be-a-projective-plane` — `pass`
- `cex-two-latin-squares-need-not-be-orthogonal` — `pass`

`classical-and-loglog-erdos-hajnal-bounds`
- `rem-fox-sudakov-quantitative-density-theorem` — `n/a`
- `thm-classical-erdos-hajnal-bound` — `pass`
- `rem-loglog-quantitative-density-theorem` — `n/a`
- `thm-loglog-erdos-hajnal-bound` — `pass`
- `cor-the-loglog-bound-eventually-dominates-the-classical-bound` — `pass`

`classical-and-loglog-erdos-hajnal-bounds-examples`
- `ex-choosing-x-for-the-classical-erdos-hajnal-bound` — `pass`
- `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` — `pass`
- `ex-the-classical-bound-is-subpolynomial` — `pass`
- `ex-the-loglog-bound-is-still-subpolynomial` — `pass`
- `ex-p-three-free-graphs-have-much-larger-homogeneous-sets` — `pass`

### Ledger

- Replaced scaffold item `thm-skolem-construction-produces-a-steiner-triple-system`
  with `rem-skolem-construction-produces-a-steiner-triple-system`.
  Reason: the harvested batch record and the design both state that the exact
  Skolem block list was not source-verified on disk, and the authoring rule here
  forbids reconstructing it from memory. I therefore kept the `1 mod 6` branch
  only as an explicit source-backed external input and rewired
  `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`
  to depend on that `rem-`.
- Retitled `ex-skolems-construction-gives-the-fano-plane` to
  `The seven translates of {0,1,3} form the Fano plane`.
  Reason: once the local Skolem theorem was honestly removed, the old title
  overstated the source of the witness. The id stays in place; the witness is
  still the Fano plane, now by explicit line data.
- Retitled `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` to
  `For large n, the log-log choice of x still leaves a dense-or-sparse set of
  order at least sqrt n`.
  Reason: the displayed `x`-choice only yields the `sqrt n` lower bound after a
  large-`n` threshold.
- Moved the A-page `examples:` arrays to `[]` on both authored A pages.
  Reason: published house format keeps examples on the companion `-examples`
  pages, and leaving B-page items listed on the A page created a real
  `page-cycle` in `depcheck`.
- Moved `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points`
  from `justified_by` to `deps` on `def-order-of-a-finite-projective-plane`.
  Reason: the lemma does not depend on the order definition, so it is a genuine
  prerequisite and `depcheck` correctly rejected the forward-justification
  encoding.
- Adjusted authored dependency lists away from the scaffold where the proof text
  made that necessary:
  `thm-bose-construction-produces-a-steiner-triple-system` now uses the
  quotient-set and arithmetic items on `\mathbb Z/n` instead of the scaffold's
  unused `thm-z-mod-p-is-a-field`;
  the page-403 asymptotic items dropped the unused
  `thm-natural-logarithm-laws` edge because the written inequalities are carried
  directly in the item proofs.

### Component provenance and rationale

`block-designs-and-finite-projective-planes`, definitions:
- `def-two-design`, `def-incidence-matrix-of-a-two-design`, `def-symmetric-design`,
  `def-steiner-systems-and-steiner-triple-systems`, `def-finite-projective-plane`,
  `def-order-of-a-finite-projective-plane`, `def-latin-square`,
  `def-orthogonal-latin-squares-and-complete-families`
  — `statement: literature-derived`, `proof: not-applicable`.
  Rationale: these are direct house-style definitions drawn from Elkies,
  Davidson, and Deductive Press, with only wording and notation adapted to the
  library.

`block-designs-and-finite-projective-planes`, proof-bearing A-page items:
- `lem-replication-number-is-constant-in-a-two-design`,
  `thm-counting-identities-for-a-two-design`,
  `cor-divisibility-conditions-for-a-two-design`,
  `thm-incidence-matrix-identity-for-a-two-design`,
  `thm-fishers-inequality-for-two-designs`,
  `thm-block-intersections-in-a-symmetric-design`,
  `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six`,
  `thm-bose-construction-produces-a-steiner-triple-system`,
  `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`,
  `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points`,
  `thm-counts-in-a-finite-projective-plane`,
  `cor-finite-projective-planes-are-symmetric-two-designs`,
  `thm-pg-two-q-is-a-finite-projective-plane`,
  `thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal`,
  `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares`
  — `statement: literature-derived`, `proof: ai-altered`.
  Rationale: the statements are the standard sourced results harvested for this
  page; the proofs are local write-ups and reorganisations adapted to the
  library's dependencies, especially the Bose construction, the projective-plane
  counting proof, and the finite-field MOLS argument.

`block-designs-and-finite-projective-planes`, external input:
- `rem-skolem-construction-produces-a-steiner-triple-system`
  — `statement: ai-altered`, `proof: not-supplied`.
  Rationale: the source-backed existence statement is retained, but the exact
  Skolem block list was not source-verified on disk, so the library does not
  claim a local proof here.

`block-designs-and-finite-projective-planes-examples`, sourced examples:
- `ex-skolems-construction-gives-the-fano-plane`,
  `ex-the-incidence-matrix-of-the-fano-plane`,
  `ex-bose-construction-for-the-steiner-triple-system-on-nine-points`,
  `ex-pg-two-three-has-thirteen-points-and-thirteen-lines`,
  `ex-two-orthogonal-latin-squares-of-order-three`
  — `statement: literature-derived` except `ex-skolems-construction-gives-the-fano-plane`
  and `ex-the-incidence-matrix-of-the-fano-plane`, which are `statement: ai-altered`;
  all five have `proof: ai-altered`.
  Rationale: each witness is classical and source-backed, but the library's
  particular formatting, explicit lists, and matrix/table write-ups are local.

`block-designs-and-finite-projective-planes-examples`, generated counterexamples:
- `cex-a-symmetric-design-need-not-be-a-projective-plane`,
  `cex-two-latin-squares-need-not-be-orthogonal`
  — `statement: ai-generated`, `proof: ai-generated`.
  Rationale: both are directly checkable local witnesses. The first uses
  complements of the Fano lines and was checked by explicit pair counting; the
  second uses two identical order-3 squares and the repeated diagonal pair.

`classical-and-loglog-erdos-hajnal-bounds`, external inputs:
- `rem-fox-sudakov-quantitative-density-theorem`,
  `rem-loglog-quantitative-density-theorem`
  — `statement: ai-altered`, `proof: not-supplied`.
  Rationale: each item is the exact H-free specialization of a sourced theorem,
  rewritten only into the library's notation and base-2 log conventions, with no
  claimed local proof.

`classical-and-loglog-erdos-hajnal-bounds`, proof-bearing A-page items:
- `thm-classical-erdos-hajnal-bound`,
  `thm-loglog-erdos-hajnal-bound`
  — `statement: literature-derived`, `proof: ai-altered`.
  Rationale: the lower bounds are the named sourced page results, while the
  proofs are local derivations from the two quantitative-density remarks and the
  published sparse-set / colouring machinery.
- `cor-the-loglog-bound-eventually-dominates-the-classical-bound`
  — `statement: ai-generated`, `proof: ai-generated`, `generation.role:
  direct-corollary`.
  Rationale: this is a non-load-bearing asymptotic comparison derived directly
  from the two page theorems.

`classical-and-loglog-erdos-hajnal-bounds-examples`
- `ex-choosing-x-for-the-classical-erdos-hajnal-bound`,
  `ex-choosing-x-for-the-loglog-erdos-hajnal-bound`,
  `ex-the-classical-bound-is-subpolynomial`,
  `ex-the-loglog-bound-is-still-subpolynomial`
  — `statement: ai-generated`, `proof: ai-generated`, `generation.role:
  example`.
  Rationale: each is a bounded algebraic unpacking of the authored theorem
  proofs.
- `ex-p-three-free-graphs-have-much-larger-homogeneous-sets`
  — `statement: ai-altered`, `proof: ai-altered`.
  Rationale: it is sourced from the published `P_3`-free theorem but the
  comparison with the two new general scales is a local explanatory derivation.

### Narrowed or dropped claims

- Dropped the local theorem
  `thm-skolem-construction-produces-a-steiner-triple-system` and replaced it
  with the explicit external `rem-skolem-construction-produces-a-steiner-triple-system`.
  Reason: the batch harvest, the design notes, and the page strategy all agree
  that the exact Skolem block list must be copied from a verified source and not
  reconstructed from memory, and no such verified source text was on disk in
  this session.
- Narrowed the log-log parameter example title to the honest large-`n` version.
- No theorem statement on page 403 was weakened. No page-225 theorem other than
  the Skolem slot was dropped.

### Gate status

- Local authored-item precheck status: all 30 proof-bearing authored items pass;
  `verification.precheck: pass` has been written into each proof-bearing item,
  and `verification.precheck: n/a` is written on the authored definitions and
  remarks.
- `content-policy`, `coverage-checklist`, `rendercheck`, and
  `proof-contract --strict` are clean on batch 6, with one nonfatal
  `shotgun-bracket` warning on `thm-loglog-erdos-hajnal-bound`.
- `extcheck` is clean repository-wide.
- `validate-plan` is clean repository-wide.
- `prosecheck --warnings` is clean on the authored scope.
- `depcheck`, `fwdcheck`, and `citecheck` still report unrelated pre-existing
  repository failures or warnings outside batch 6; I did not edit those files.
- No judge was run, per the step-5 rule.

### Confidence

High confidence:
- page 403's two EH theorems and the external-density route;
- the 2-design counting spine through Fisher and symmetric block intersections;
- the projective-plane counting bridge and the `PG(2,q)` construction;
- the finite-field MOLS theorem and its prime-power corollary.

Moderate confidence:
- the exact numerical threshold choices in the log-log proof and example; the
  theorem is correct, but the constant-hiding is intentionally coarse;
- the explicit Fano-plane and STS(9) example write-ups, which are correct by
  direct incidence checks but still deserve ordinary step-6 reading attention;
- the source-backed Skolem external seam, not because the statement is doubtful,
  but because the whole point of the seam is that I did not claim a local proof.

What I did not verify:
- No paired judge or step-6 reader has read this text yet.
- The full repository still has unrelated `depcheck` / `fwdcheck` failures, so
  a whole-tree green close-out was not available from batch 6 alone.
