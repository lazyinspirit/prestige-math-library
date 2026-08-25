# frontier-18 · Beta-1 · batch notes — `lagrange-four-square-theorem` (steps 1–2)

Run `frontier-18`, batch `1`, one A/B pair, category `number-theory`.
Author: Beta-1 (Claude Opus 5, claude CLI, `xhigh`, 1M context).
Design section: `research/plan-number-theory-track.md` §"NT-5. Lagrange's four-square
theorem", lines 578–656.

Artifacts owned by this batch and written here:
`research/frontier-18-batch-1.pages.json`,
`research/frontier-18-batch-1.coverage.json`,
`research/frontier-18-batch-1.proof-contracts.json`, and this file.
Nothing else in the repository was written.

---

## 1. Per-page item list

### A page `lagrange-four-square-theorem` — order 57.009 — 16 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-sum-of-four-squares-representation` | definition | Representations as sums of four squares |
| 2 | `lem-euler-four-square-product-identity` | lemma | Euler's four-square product identity |
| 3 | `cor-four-squares-closed-under-products` | corollary | Sums of four squares are closed under products |
| 4 | `lem-four-square-congruence-for-primes` | lemma | For every prime $p$ the congruence $x^2+y^2+1\equiv 0\pmod p$ is solvable |
| 5 | `lem-least-absolute-remainder` | lemma | The least absolute remainder modulo a positive integer |
| 6 | `lem-small-four-square-multiple-of-a-prime` | lemma | Some multiple $pm$ with $1\le m<p$ is a sum of four squares |
| 7 | `lem-least-absolute-residue-quadruple-of-a-multiple` | lemma | The centred residue quadruple of $pm=a^2+b^2+c^2+d^2$ has norm $mn$ with $1\le n<m$ |
| 8 | `lem-four-square-descent` | lemma | Descent step: a smaller multiple of $p$ is a sum of four squares |
| 9 | `thm-every-prime-is-a-sum-of-four-squares` | theorem | Every prime is a sum of four integer squares |
| 10 | `thm-lagrange-four-square-theorem` | theorem | Lagrange's four-square theorem: every nonnegative integer is a sum of four integer squares |
| 11 | `rem-sign-patterns-in-the-four-square-identity` | remark | Why the descent fixes one sign pattern in the four-square identity |
| 12 | `lem-squares-modulo-eight` | lemma | A square is congruent to $0$, $1$ or $4$ modulo $8$ |
| 13 | `lem-sum-of-three-squares-is-never-seven-modulo-eight` | lemma | No sum of three integer squares is congruent to $7$ modulo $8$ |
| 14 | `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | lemma | If $4$ divides $x^2+y^2+z^2$ then $x$, $y$ and $z$ are all even |
| 15 | `prop-three-square-congruence-obstruction` | proposition | $4^a m$ with $m\equiv 7\pmod 8$ is not a sum of three integer squares |
| 16 | `cor-integers-requiring-four-squares` | corollary | Integers $4^a m$ with $m\equiv 7\pmod 8$ need four nonzero squares |

### B page `lagrange-four-square-theorem-examples` — order 57.010 — 10 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-four-square-product-identity-by-expansion` | example | $7\cdot 15=105$ through all four bilinear coordinates |
| 2 | `ex-four-square-congruence-for-an-odd-prime` | example | The two intersecting square sets modulo $11$ give $1^2+3^2+1=11$ |
| 3 | `ex-least-absolute-remainders-and-the-even-modulus-tie` | example | Least absolute remainders modulo $7$ and modulo $8$ |
| 4 | `ex-four-square-descent-for-thirteen` | example | Descending from $13\cdot 11$ to $13$ in two steps |
| 5 | `ex-four-square-representations-of-sixty-five` | example | Four essentially different four-square representations of $65$ |
| 6 | `fs-four-square-representations-of-a-prime-are-essentially-unique` | false-statement | FALSE: a prime has one four-square representation up to order and signs |
| 7 | `ex-four-square-representation-from-prime-factorisation` | example | Building a representation of $105$ from its prime factors |
| 8 | `cex-three-squares-fail-for-seven-modulo-eight` | counterexample | $7$ and $28$ are not sums of three integer squares |
| 9 | `cex-sums-of-three-squares-are-not-closed-under-products` | counterexample | $3$ and $5$ are sums of three squares and $15$ is not |
| 10 | `ex-an-integer-that-genuinely-needs-four-squares` | example | $7$ and $28$ have four-square representations with no zero coordinate |

Both counts are recountable from the tables above. The A page is 44 items below the
60-item `validate-plan` ceiling, so no split is proposed.

Landmarks for step 5 (`landmark: true`): items 1, 2, 4, 8, 9, 10 and 15 of the A page.
Everything else on both pages is `landmark: false`.

---

## 2. Per-pair richness report

Both passes were run on the single A/B pair in this batch, and both found work.

**Proof-decomposition pass.** Two proofs in the design were monoliths and were split.

* `lem-four-square-descent` (design's Theorem 6.6 Step 2) carried four distinct
  conceptual moves in one proof: centring the coordinates, showing the centred
  quadruple does not vanish, excluding the equality case $n=m$, and the
  identity-plus-divisibility computation. The first three are now
  `lem-least-absolute-remainder` (a reusable statement about $\mathbb{Z}$ that the
  library did not have) and `lem-least-absolute-residue-quadruple-of-a-multiple`
  (the boundary work, which is the subtlest point on the page and now has its own
  Statement to verify). The descent lemma keeps the identity computation.
* `prop-three-square-congruence-obstruction` carried the modulo-8 residue argument,
  the parity descent and the induction in one proof. The first two are now
  `lem-squares-modulo-eight`, `lem-sum-of-three-squares-is-never-seven-modulo-eight`
  and `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates`; the
  proposition is the induction that combines them. `lem-squares-modulo-eight` is a
  genuinely reusable arithmetic fact and is the seam into
  `quadratic-reciprocity-and-the-jacobi-symbol`, whose published
  `thm-unit-square-criterion-modulo-two-powers` supplies its odd case.

No microlemma was manufactured for routine algebra: the expansion in
`lem-euler-four-square-product-identity` and the arithmetic in
`lem-small-four-square-multiple-of-a-prime` stay inline.

**Corollary pass.** Run, and it added one item and declined three.

* Added `rem-sign-patterns-in-the-four-square-identity`. Conrad Remark 6.7 records
  that the descent's divisibility step survives Euler's second sign pattern but not
  Hamilton's quaternion pattern, and Dummit's Lemma 1 in fact displays Euler's
  second pattern rather than Conrad's. Without this remark the page fixes one of
  three published patterns with no reason given, and a reader comparing sources
  meets a bare disagreement.
* Declined Conrad Theorem C.1 (every positive integer is a sum of four *rational*
  squares): strictly weaker than `thm-lagrange-four-square-theorem`, proved on the
  same page. Finding 8 below.
* Declined Conrad Theorem C.2 ($ax^2+by^2\equiv c \pmod p$ solvable): a real
  generalisation of item 4, but nothing on the page consumes more than
  $a=b=1$, $c=-1$. Finding 8 below.
* Declined a "four is best possible" corollary: `cor-integers-requiring-four-squares`
  already carries that content in a stronger form, so a separate item would be a
  restatement.

**B-page pass.** Three items were added beyond the design's seven:
`ex-least-absolute-remainders-and-the-even-modulus-tie` (the even-modulus tie is the
one boundary the descent must exclude by hand, and no other item exhibits it),
`fs-four-square-representations-of-a-prime-are-essentially-unique` (the analogy a
reader will draw from the two-square uniqueness theorem for primes, and it is false),
and `cex-sums-of-three-squares-are-not-closed-under-products` (Dummit's own witness;
it is why the four-square proof may reduce to primes and a three-square treatment
may not).

---

## 3. Findings for the step-3 Alpha

Each is one recommendation, most severe first. None is bundled.

### Finding 1 — the design contradicts itself about Dummit (approve the amendment)

**What is wrong.** The NT-5 "Primary backing" paragraph says Evan Dummit's *Number
Theory, Part 9* "independently checks the statements by a later Minkowski proof but
is not load-bearing here", while the same section's item table sources
`prop-three-square-congruence-obstruction` to "Dummit §9.1.3, pp. 5–6". Dummit is the
only harvested source that states the three-square obstruction at all (Crisman states
it too, but the design does not cite Crisman for NT-5). It is load-bearing.

**Proposed amendment**, in `research/plan-number-theory-track.md`, §NT-5, "Primary
backing" bullet.

Exact old text:

> Evan
>   Dummit, *Number Theory, Part 9: The Geometry of Numbers*, §9.1.2, pp. 4--5,
>   Lemmas 1--2 and “Lagrange's Four-Square Theorem”, independently checks the
>   statements by a later Minkowski proof but is not load-bearing here.

Exact new text:

> Evan
>   Dummit, *Number Theory, Part 9: The Geometry of Numbers*, §9.1.2, pp. 4--6,
>   Lemmas 1--2 and “Lagrange's Four-Square Theorem”, independently checks the
>   four-square statements by a later Minkowski proof, which is not used here; its
>   §9.1.3, pp. 6--8, is load-bearing for `prop-three-square-congruence-obstruction`,
>   whose statement no other selected source supplies.

**If declined.** The item's `sources.references` will carry a source the design calls
non-load-bearing, and Alpha's step-6 provenance check has contradictory guidance about
whether the obstruction's statement is sourced.

### Finding 2 — three provenance cells in the design are wrong (approve the corrections)

**What is wrong.** The design's item table records
`lem-euler-four-square-product-identity` as `L/L`,
`prop-three-square-congruence-obstruction` as `L/L`, and
`cor-integers-requiring-four-squares` as `L/A`. Read against the sources:

* Conrad's Lemma 6.2 supplies the identity and its exact signs, but its proof is one
  sentence — "It is left to the reader to expand both sides to check they are equal."
  There is no source proof text, so the local expansion is `ai-generated`, not
  `literature-derived`.
* Dummit gives the obstruction's statement and a two-sentence route — "For $a=0$ this
  follows immediately by considering $n$ modulo 8, and then one may induct on $a$" —
  not a proof. Crisman states it as a Fact and writes "We will skip the proof". So the
  proof is `ai-altered`, not `literature-derived`.
* `cor-integers-requiring-four-squares`'s sentence — every four-square representation
  of $4^am$ has all four coordinates nonzero — appears in no harvested source; it is
  assembled here from the obstruction and Lagrange's theorem. Its statement is
  `ai-altered`, not `literature-derived`.

**Proposed amendment**: in the NT-5 item table, change the provenance codes to `L/A*`
(read: literature statement, AI-generated proof) for `lem-euler-four-square-product-identity`,
`L/A` for `prop-three-square-congruence-obstruction`, and `A/A` for
`cor-integers-requiring-four-squares`. The authored frontmatter this batch will write
is listed in §5 below and is what actually binds.

**If declined.** Three items ship with a provenance label the sources do not support,
which is the class of defect the component-provenance rule exists to prevent.

### Finding 3 — the design's ten A-page items omit five lemmas its own proofs consume (approve the additions)

**What is wrong.** The design's "Complete descent proof, well-definedness, and
boundary" paragraph uses least absolute residues, the non-vanishing of the centred
quadruple, the exclusion of $n=m$, the residues of a square modulo 8, and the parity
descent — five statements that the item table does not scaffold. Left unscaffolded
they become unnamed steps inside two long proofs, and the least absolute remainder in
particular would be re-derived inline in two different items.

**Proposed amendment.** Add five rows to the NT-5 A-page table, between
`lem-four-square-congruence-for-primes` and `lem-small-four-square-multiple-of-a-prime`:

| `lem-least-absolute-remainder` | `lem` | For $m\ge1$ and $a\in\mathbb Z$ there is exactly one $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$; it satisfies $4r^2\le m^2$. | A/A; Conrad §6 Step 2 uses it unnamed; MIT Lemma 81 likewise. |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | `lem` | If $p$ is prime, $1<m<p$ and $pm=a^2+b^2+c^2+d^2$, the centred residue quadruple has norm $mn$ with $1\le n<m$. | A/A; Conrad Theorem 6.6 Step 2, the non-vanishing and equality arguments. |

and three rows before `prop-three-square-congruence-obstruction`:

| `lem-squares-modulo-eight` | `lem` | Every integer square is congruent to $0$, $1$ or $4$ modulo $8$; to $1$ modulo $4$ when odd and to $0$ modulo $4$ when even. | A/A; the odd case is the published `thm-unit-square-criterion-modulo-two-powers` at $k=3$. |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | `lem` | No sum of three integer squares is congruent to $7$ modulo $8$. | A/A; Dummit §9.1.3, the $a=0$ case. |
| `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | `lem` | If $4\mid x^2+y^2+z^2$ then $x,y,z$ are all even. | A/A; Dummit §9.1.3, the induction step. |

plus `rem-sign-patterns-in-the-four-square-identity` after `thm-lagrange-four-square-theorem`,
and the three B-page rows named in §2.

**If declined.** `lem-four-square-descent` and `prop-three-square-congruence-obstruction`
become monolithic, their boundary steps stop being separately verifiable, and the
even-modulus tie — the single subtlest point on the page — has no Statement of its own
for a judge to check.

### Finding 4 — restate the obstruction as $4^a m$ with $m\equiv 7\pmod 8$ (approve)

**What is wrong.** The design writes the obstructed integers as $4^a(8b+7)$ with
$a,b\ge0$. Here $a$ is a natural number used as an exponent, which is fine, but $b$ is
a natural number used as a coefficient inside $\mathbb Z$; writing $8b+7$ then either
needs the applied canonical embedding, which the owner's standing rule bans and
`content-policy` fails as `notation-iota-applied`, or a separate clause placing $b$ in
$\mathbb Z$ with $b\ge0$.

**Proposal.** State both items as: let $a\in\mathbb N$ and let $m$ be a positive
integer with $m\equiv 7\pmod 8$; then $4^a m$ is not a sum of three integer squares
(and, in the corollary, needs four nonzero squares). The item records in its Remarks
that this is the same set of integers as $4^a(8b+7)$ with $b$ a nonnegative integer,
and that Crisman's "an even power of two times an odd number congruent to seven modulo
eight" is a third description of it. The power $4^a$ is the natural power in the
commutative monoid $(\mathbb Z,\cdot,1)$ of `lem-units-of-z`, per `def-group-power`, so
no natural number is written inside an applied embedding anywhere.

**If declined.** Either the batch fails `content-policy`'s `notation-iota-applied`, or
the statement carries an extra positivity clause that the induction then has to carry
through every step.

### Finding 5 — the A page has zero dependency edges to `sums-of-two-squares` (decide)

**What is wrong, and what I did.** `research/plan-spec.json` declares this page's
prerequisite to be `sums-of-two-squares-examples` (order 57.008), and
`sums-of-two-squares` at 57.007 contains
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares`, whose statement — for
an odd prime $p$ and $p\nmid a$ there are $x,y$ with $x^2+y^2\equiv a\pmod p$ — gives
`lem-four-square-congruence-for-primes` at $a=-1$ in one step. **I did not cite it.**
That item and its whole page are `status: draft`: they were authored in run
`frontier-17` and have not been published. My brief permits a load-bearing dependency
to be an item earlier in this pair, a published item on a strictly earlier page, or an
item inside run `frontier-18`, and a frontier-17 draft is none of the three. So
`lem-four-square-congruence-for-primes` runs the counting argument itself, from the
published `thm-count-of-quadratic-residues-modulo-prime`, `thm-sum-rule`,
`thm-subset-of-a-finite-set`, `thm-standard-representatives-modulo-n` and
`thm-integers-modulo-n-basic-algebra` — which is also exactly what the design
prescribes, and what all three harvested sources do.

The consequence is the condition the brief names as a finding rather than a clean bill:
**no `deps` edge runs from this page to `sums-of-two-squares` in either direction.**
`depsource` confirms it: all 51 external A-page dependencies resolve to published
pages, none to a draft page.

What is scaffolded as mitigation: `def-sum-of-four-squares-representation` records the
convention agreement with `[[def-sum-of-two-squares-representation]]` in its Remarks —
same ordered-tuple convention, order and sign counted, four coordinates instead of two
— as a wikilink, not a dependency, since the definition does not rest on it. The shared
counting machinery is visible through the common citation of
`thm-count-of-quadratic-residues-modulo-prime` on `quadratic-residues-and-the-legendre-symbol`.

**Alpha's decision.** Either (a) approve as scaffolded, accepting the wikilink-only seam
— my recommendation, because every load-bearing dependency then resolves to published
text and the page can publish whatever happens to frontier-17; or (b) if frontier-17's
pair is published before step 5, switch `lem-four-square-congruence-for-primes` to cite
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` for the odd case, which
shortens its proof to three steps and creates a real dependency edge. The contract entry
for that item would then lose facts L1–L5 and gain one.

**If declined and (b) is chosen while frontier-17 is still draft**, a published page
would prove a step by citing an item the public cannot open.

**Related, and needing a decision even under (a):** the Remarks wikilink in
`def-sum-of-four-squares-representation` points at a draft item. If frontier-17 has not
published when this level does, that link resolves for the owner and 404s for the
public. It is one orientation link in a Remark, not a proof step. I recommend keeping it
and recording the ordering constraint; Alpha may instead drop the sentence, at the cost
of the only textual seam between the two sums-of-squares pages.

**Resolved at step 3 as B1-1, option (b).** Both `sums-of-two-squares` and
`sums-of-two-squares-examples` read `status: published` on disk, which is the condition
this finding pre-authorised, so `lem-four-square-congruence-for-primes` now cites
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` at $a=-1$ and the counting
argument is gone from this page. The paragraphs above are the finding as submitted and are
left as written; what changed is recorded in §"Step-3 fix pass". The Remark wikilink stays,
and it no longer points at a draft.

### Finding 6 — three source locators in the design are off (approve the corrections)

**What is wrong.** Checked against the fetched documents:

* MIT 18.781 Lecture 22 is cited as "PDF pp. 2--5, Theorem 80 and Lemma 81". The
  four-square material begins on PDF p. 3; pp. 1–2 are the continuation of the
  Pell–Brahmagupta lecture (Theorem 78, Proposition 79). Correct range: pp. 3–5.
* Dummit §9.1.2 is cited as "pp. 4--5"; it runs pp. 4–6, with Lagrange's theorem and
  its proof on p. 6.
* Dummit §9.1.3 is cited as "pp. 5--6"; it runs pp. 6–8.

**Proposal.** Replace the three ranges in the NT-5 "Primary backing" bullet as above.
`research/frontier-18-batch-1.coverage.json` already records the corrected ranges.

**If declined.** Alpha's step-6 faithfulness check reads a range that does not contain
the results it is checking.

### Finding 7 — a wording slip in the design's descent paragraph (approve)

**What is wrong.** The "Complete descent proof" paragraph reads "Their squared sum is
$mn$ with $1\le n\le m$. It cannot be zero because otherwise $m^2\mid pm$" — it asserts
$n\ge1$ and then argues that $n\ne0$. The argument is right and the order is wrong.

**Proposal.** Exact old text:

> Their squared sum is \(mn\) with \(1\le n\le m\).  It cannot
> be zero because otherwise \(m^2\mid pm\), contrary to \(1<m<p\).

Exact new text:

> Their squared sum is \(mn\) with \(0\le n\le m\).  It cannot
> be zero because otherwise \(m^2\mid pm\), contrary to \(1<m<p\), so \(n\ge1\).

**If declined.** Nothing breaks mathematically; the scaffold keeps a sentence that reads
as though the non-vanishing argument were unnecessary.

### Finding 8 — three declined enrichments, offered for reversal (recommend: decline all three)

Each is a real result inside the range I harvested. I recommend declining all three and
record them here so the decision is Alpha's, not mine by omission.

1. **Conrad Theorem 5.1**, the descent proof that a prime with $-1$ a square modulo it
   is a sum of two squares. This is a genuinely different route to the library's
   `thm-fermat-two-square-theorem-for-primes`, which is proved by Thue's lemma, and the
   owner welcomes a second proof by a different method. I decline it because that item
   is `status: draft` on another run's page, so the owner's requirement that **each
   version name the other** cannot be met from this batch's write boundary: I can name
   theirs, they cannot name mine. It becomes available if the owner publishes
   frontier-17 and authorises the reciprocal edit.
2. **Conrad Theorem C.1**, every positive integer is a sum of four rational squares.
   Strictly weaker than `thm-lagrange-four-square-theorem`, which this page proves over
   $\mathbb Z$; the second-proof licence covers a different route to the same statement,
   not a weaker consequence.
3. **Conrad Theorem C.2**, $ax^2+by^2\equiv c\pmod p$ is solvable for every $c$ when
   $p\nmid ab$ and $p$ is an odd prime. A genuine generalisation of item 4 in two
   directions at once, but nothing here consumes more than $a=b=1$, $c=-1$, and which
   integers a binary quadratic form represents is the subject of
   `positive-definite-binary-quadratic-forms-and-reduction` at order 57.011. Deferred
   there in the coverage file.

### Finding 9 — no finite-smoke check in the registry applies to this page (approve, or route the tool change)

**What is wrong.** `node tools/finite-smoke.mjs --self-test` lists ten checks:
`tree-characterisation`, `forest-edge-component-count`, `induced-complement-commutes`,
`cyclic-subgroup-lagrange`, `monotone-map-need-not-preserve-meets`,
`full-subposet-meet-differs-from-ambient`, `binomial-congruence-solution-count`,
`vieta-elementary-symmetric`, `linear-recurrence-matches-rational-series`,
`matrix-ring-laws-mod-n`. I read the list rather than defaulting past it. None is a
bounded countermodel search for any claim on this page: the nearest,
`binomial-congruence-solution-count`, counts solutions of a one-variable congruence
$x^m\equiv a$, while every claim here is about two-, three- or four-variable sums of
squares. So every contract carries `finite_smoke: []`, and `finite-smoke` reports
`0 error(s), 0 check(s) over 0/24 item(s)` — green having executed nothing, which is
exactly the state `QUALITY-CONTROLS.md` warns about. It is recorded rather than hidden.

**I ran the equivalent bounded searches myself while scaffolding**, and every one came
back clean:

* squares modulo 8 over $|x|\le200$: values exactly $\{0,1,4\}$;
* sums of three squares modulo 8 over $|x|,|y|,|z|\le60$: residues attained exactly
  $\{0,1,2,3,4,5,6\}$, never $7$;
* $4\mid x^2+y^2+z^2\Rightarrow$ all even, over $|x|,|y|,|z|\le40$: no counterexample;
* the three sign patterns (Conrad, Euler's second, Hamilton) as four-square identities:
  no counterexample in 20000 random integer quadruples each, and Conrad's exhaustively
  over a $5^4$ box against four fixed quadruples;
* the full three-square characterisation $n$ is a sum of three squares iff $n\ne 4^am$
  with $m\equiv7\pmod 8$: no mismatch for $n<2500$ — this checks that
  `prop-three-square-congruence-obstruction` is not accidentally too strong;
* every numeric claim scaffolded on the B page, listed in §7 below.

**Proposal.** Three registry checks would make this page's claims mechanically
smoke-testable and are worth having for the whole sums-of-squares block:
`sum-of-k-squares-residues-mod-n` (attained residues of a sum of $k$ squares modulo
$n$, bounded), `four-square-identity-sign-pattern` (a named sign pattern is or is not a
product identity, over a bounded box), and `three-square-obstruction` (the
characterisation over $n<N$). Writing them is a tool change and outside a Beta's write
boundary at steps 1–2; routing it is Alpha's or the owner's call.

**If declined.** Nothing breaks; the page ships with an honestly empty
`finite_smoke` and the bounded searches recorded here rather than in the registry.

---

## 4. Forward references

**None.** No item on either page declares a `forward_refs` entry, and
`node tools/depsource.mjs` on the locally spliced spec reports `planned-later 0` for
both pages. The A page's 49 external dependencies are all `published`; the B page's 30
are 7 `published` and 23 `planned-earlier` (its own A page). Both counts moved at step 3:
B1-1 took six dependencies off the A page and put one back, and gave the B page one more.

---

## 5. New ids proposed, and the provenance each will carry

All 26 ids are new. The check run was, for each id,
`[ -f "items/$id.md" ] && echo DISK || echo -` together with
`grep -c "\"$id\"" research/plan-spec.json`; every id returned `-` and `0`. No existing
item states any of these propositions under another name: the closest published
statements are `lem-brahmagupta-fibonacci-two-square-identity` (two coordinates, not
four), `def-sum-of-two-squares-representation` (two coordinates), and
`lem-gauss-half-system-permutation` (a signed half-system for an odd prime modulus
only, which cannot serve as a least absolute remainder for an even modulus).

`provenance.statement / provenance.proof`, with the reason for each. "L" is
`literature-derived`, "A" is `ai-altered`, "G" is `ai-generated`, "NA" is
`not-applicable`.

### A page

| id | statement | proof | reason |
|---|---|---|---|
| `def-sum-of-four-squares-representation` | L | NA | Conrad §6 and Example 6.1, MIT Theorem 80 and Crisman Fact 14.2.2 all use ordered integer quadruples; a definition has no proof component. |
| `lem-euler-four-square-product-identity` | L | G | Conrad Lemma 6.2 supplies the identity and the exact signs; the source supplies no proof ("left to the reader to expand both sides"), so the written expansion is formulated here. |
| `cor-four-squares-closed-under-products` | L | A | The closure sentence is Conrad Lemma 6.2's headline and Dummit Lemma 1; the sources deduce it in one line and the zero case is written out here. |
| `lem-four-square-congruence-for-primes` | L | A | Conrad Lemma 6.4 and Dummit Lemma 2 state it for every prime. After Alpha finding B1-1 the local proof is no longer the sources' counting argument: for odd $p$ it specialises the published `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` at $a=-1$ and adds $1$, with $p=2$ checked directly. That is a material reformulation of the literature route rather than a faithful transcription of it, so the proof label stays `ai-altered`; the Statement is unchanged and stays `literature-derived`. |
| `lem-least-absolute-remainder` | A | A | Conrad §6 Step 2 states the fact in prose ("remainders under division by $m$ that are smallest in absolute value"); the uniqueness clause, the half-open normalisation and the integer-form bound $4r^2\le m^2$ are added here. |
| `lem-small-four-square-multiple-of-a-prime` | L | A | Conrad Theorem 6.6 Step 1 and MIT Lemma 81 state it; the strict bound is rewritten in integers to avoid $p/2$. |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | A | A | Conrad Theorem 6.6 Step 2 contains exactly this claim inside a longer argument; extracting and naming it is the adaptation. |
| `lem-four-square-descent` | L | A | Conrad states Step 2 as a standalone claim; the proof follows his route with the divisibility computation written out per coordinate. |
| `thm-every-prime-is-a-sum-of-four-squares` | L | A | Conrad Theorem 6.6 Step 3 and MIT Theorem 80's reduction; termination is written with the library's least-element lemma rather than "repeat until". |
| `thm-lagrange-four-square-theorem` | L | A | MIT Theorem 80 and Crisman Fact 14.2.2 both give the nonnegative form; the proof replaces the sources' factorisation appeal with a least-counterexample argument that treats $0$ and $1$ explicitly. |
| `rem-sign-patterns-in-the-four-square-identity` | A | NA | Conrad Remarks 6.3 and 6.7 plus Dummit Lemma 1's differing pattern; the explicit reduction modulo $m$ of each pattern is written here. A remark has no proof component. |
| `lem-squares-modulo-eight` | A | A | The odd case is the published `thm-unit-square-criterion-modulo-two-powers` at $k=3$; the even case and the modulo-4 consequence are assembled here. |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | A | A | Dummit §9.1.3 asserts the $a=0$ case of the obstruction, which is this statement once unwound; the four-case argument is written here. |
| `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | A | A | Dummit's "one may induct on $a$" presupposes exactly this step; the statement and proof are written here. |
| `prop-three-square-congruence-obstruction` | L | A | Dummit §9.1.3 and Crisman Fact 14.2.1 both state it; both decline to prove it, so the induction is written here. |
| `cor-integers-requiring-four-squares` | A | A | The sentence appears in no harvested source; it is assembled from the obstruction and Lagrange's theorem, and the proof is written here. |

### B page

| id | statement/construction | proof/verification | `generation.role` | reason |
|---|---|---|---|---|
| `ex-four-square-product-identity-by-expansion` | G | G | `example` | The pair $7\times15$ and its quadruples are chosen here. |
| `ex-four-square-congruence-for-an-odd-prime` | G | G | `example` | The modulus $11$ and the displayed sets are chosen here. |
| `ex-least-absolute-remainders-and-the-even-modulus-tie` | G | G | `example` | The two tables are computed here. |
| `ex-four-square-descent-for-thirteen` | G | G | `example` | The design names $13$; the starting representation $143=11^2+3^2+3^2+2^2$ and the two-step route are chosen here. |
| `ex-four-square-representations-of-sixty-five` | L | G | — | Conrad Example 6.1 displays exactly these four representations; the verification is written here. Not an `ai-generated` statement, so no `generation` block. |
| `fs-four-square-representations-of-a-prime-are-essentially-unique` | A | G | — | The false claim is the four-square analogue of the classical two-square uniqueness theorem for primes $\equiv1\pmod4$, adapted here; the refuting witness $31$ is found here. An `ai-generated` false statement is prohibited, and this one is an adaptation of a literature statement, not a fresh invention. |
| `ex-four-square-representation-from-prime-factorisation` | G | G | `example` | The integer $105$ and the order of multiplication are chosen here. |
| `cex-three-squares-fail-for-seven-modulo-eight` | G | G | `counterexample` | The witnesses $7$ and $28$ are chosen here. |
| `cex-sums-of-three-squares-are-not-closed-under-products` | L | A | — | Dummit gives exactly the witness $3$, $5$, $15$; the verification is written here. |
| `ex-an-integer-that-genuinely-needs-four-squares` | G | G | `example` | The witnesses $7$ and $28$ and their representations are chosen here. |

No item on either page carries `proved_here: false`; **this batch plans no external
fallback**, so there is no `external_dependency` record to write. Nothing is deferred
for want of a definition or lemma that could have been written: the two prerequisites
the library lacked — the least absolute remainder and the residues of a square modulo
8 — are built here as items 5 and 12.

### Truth-risk obligations for AI-generated statements and constructions

Every `ai-generated` statement above is a construction in an example or counterexample,
so the counterexample search is a direct check of the displayed numbers. All of them
were computed and checked during scaffolding; the results are in §7. Two carry a real
risk of being wrong rather than merely unverified, and both were checked hardest:

* `fs-four-square-representations-of-a-prime-are-essentially-unique` — the claim is
  asserted to be **false**, so the obligation is to have a genuine witness.
  $31=5^2+2^2+1^2+1^2=3^2+3^2+3^2+2^2$; both sums were evaluated, $31$ was checked
  prime by trial division through $5$, and the multisets $\{5,2,1,1\}$ and $\{3,3,3,2\}$
  are different, so no reordering or sign change relates them.
* `cex-three-squares-fail-for-seven-modulo-eight` — the claim is a non-existence, which
  a single computation cannot establish; step 1.1 of its contract therefore carries an
  exhaustive finite search over the squares at most $7$ **as well as** the congruence
  argument, so the counterexample does not rest on the obstruction alone.

### Source URLs each item's `sources.references` will carry at step 5

| item(s) | URLs |
|---|---|
| items 1, 2, 3, 9, 10 (A) and B items 1, 4, 5, 7 | `https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf` and `https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf` |
| items 4, 6, 7, 8 (A) and B items 2, 3 | `https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf`; item 4 additionally `https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf` |
| item 11 (A) | Conrad (Remarks 6.3, 6.7) and Dummit (Lemma 1) |
| items 12–16 (A) and B items 8, 9, 10 | `https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf` and `https://math.gordon.edu/ntic/nticoneside.pdf` |
| B item 6 | Conrad (Example 6.1), for the contrast it draws about uniqueness |

All four URLs were fetched in this dispatch and are stamped `fetch_verified` in
`research/frontier-18-batch-1.coverage.json` by
`node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-1.coverage.json --stamp`,
which reported `4/4 source(s) fetch-verified (4 newly stamped)`.

---

## 6. Cross-batch dependencies

**None in either direction.** No item here depends on anything scaffolded by another
`frontier-18` batch. The other nine batches own pages at orders 71.003, 101.2, 111.001,
197, 223, 288.00017, 288.007, 302.001, 315, 349, 365.009, 397 and 401 — every one
strictly later in plan order than this pair's 57.009 and 57.010, and none in number
theory. So nothing here can depend on them, and nothing there can depend on this pair
without a forward reference, which none of them has declared to these ids.

There is one **cross-run ordering constraint**, which is not a dependency: this page's
`requires` anchor `sums-of-two-squares-examples` is a `frontier-17` page still at
`status: draft`. Page-level prerequisites are a reading-order claim rather than a
`deps` edge, and no item here cites an item on that page, so nothing blocks authoring
or judging. Publication order is Finding 5.

---

## 7. Authoring notes for the step-5 author (me)

### Numbers already verified — do not recompute, do transcribe exactly

Every number below was computed and checked during scaffolding.

* **Euler identity, Conrad's signs.** $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$,
  $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$,
  $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$.
* **Euler's second pattern** (Conrad Remark 6.3, and the one Dummit displays): same
  $z_1$, then $z_2=x_1y_2-x_2y_1+x_3y_4-x_4y_3$, $z_3=x_1y_3-x_2y_4-x_3y_1+x_4y_2$,
  $z_4=x_1y_4+x_2y_3-x_3y_2-x_4y_1$.
* **Hamilton's pattern**: $z_1=x_1y_1-x_2y_2-x_3y_3-x_4y_4$,
  $z_2=x_1y_2+x_2y_1+x_3y_4-x_4y_3$, $z_3=x_1y_3-x_2y_4+x_3y_1+x_4y_2$,
  $z_4=x_1y_4+x_2y_3-x_3y_2+x_4y_1$. All three are identities; only the first two send
  every coordinate to $0$ modulo $m$ under $y\equiv x$, and Hamilton's sends $z_1$ to
  $a^2-b^2-c^2-d^2$.
* **B item 1.** $7=2^2+1^2+1^2+1^2$, $15=3^2+2^2+1^2+1^2$, $z=(10,1,-2,0)$,
  $100+1+4+0=105$.
* **B item 2.** Square classes modulo $11$ including zero: $0,1,3,4,5,9$ (six).
  Classes of $-1-y^2$: $10,9,6,1,5,7$ (six). Intersection $\{1,5,9\}$. Witness
  $1=1^2$, $1\equiv-1-3^2$, giving $1^2+3^2+1=11$.
* **B item 3.** Least absolute remainders of $0,\dots,7$: modulo $7$,
  $0,1,2,3,-3,-2,-1,0$; modulo $8$, $0,1,2,3,4,-3,-2,-1$.
* **B item 4.** $143=13\cdot11=11^2+3^2+3^2+2^2$. Centred modulo $11$: $(0,3,3,2)$,
  norm $22=11\cdot2$. Identity: $(A,B,C,D)=(22,33,33,22)$, norm $3146=13\cdot121\cdot2$.
  Divide by $11$: $(2,3,3,2)$, norm $26=13\cdot2$. Centred modulo $2$: $(0,1,1,0)$,
  norm $2=2\cdot1$. Identity: $(6,4,0,0)$, norm $52=13\cdot4$. Divide by $2$:
  $(3,2,0,0)$, norm $13$.
* **B item 5.** $65=1^2+8^2+0^2+0^2=4^2+7^2+0^2+0^2=2^2+5^2+6^2+0^2=2^2+3^2+4^2+6^2$.
* **B item 6.** $31=5^2+2^2+1^2+1^2=3^2+3^2+3^2+2^2$, and $31$ is prime.
* **B item 7.** $105=3\cdot5\cdot7$ with $3=1^2+1^2+1^2+0^2$, $5=2^2+1^2+0^2+0^2$,
  $7=2^2+1^2+1^2+1^2$. First product: $(1,1,1,0)\cdot(2,1,0,0)\mapsto(3,-1,-2,1)$,
  norm $15$. Second: $(3,-1,-2,1)\cdot(2,1,1,1)\mapsto(4,8,5,0)$, norm $105$.
* **B items 8 and 10.** $7=2^2+1^2+1^2+1^2$ and $28=5^2+1^2+1^2+1^2$; the squares at
  most $7$ are $0,1,4$ and no three of them sum to $7$.
* **B item 9.** $3=1^2+1^2+1^2$, $5=2^2+1^2+0^2$, $15\equiv7\pmod8$; and
  $3\cdot3=9=3^2+0^2+0^2$ is a product of three-square integers that *is* one, which
  the item states so the claim is not read as "never".
* **Small-multiple witnesses** for $p=2,3,5,7,11,13,23$: $(x,y,m)=(-1,0,1)$,
  $(-1,-1,1)$, $(-2,0,1)$, $(-3,-2,2)$, $(-4,-4,3)$, $(-5,0,2)$, $(-11,-4,6)$; every
  $m$ satisfies $1\le m<p$.

### Exact strings the proof contract requires each Statement to contain

`proof-contract.mjs` checks that each `quote` occurs in the cited item's Statement or
Definition. These are the strings the contract already records against this batch's own
items; author the Statements so that each occurs verbatim, or update the contract in
the same edit (Step 5 owns keeping it current).

| item | string that must occur |
|---|---|
| `def-sum-of-four-squares-representation` | `an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$` |
| `lem-euler-four-square-product-identity` | `(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2` |
| `cor-four-squares-closed-under-products` | `then $mn$ is a sum of four integer squares` |
| `lem-four-square-congruence-for-primes` | `there are integers $x,y$ with $x^2+y^2+1\equiv 0\pmod p$` |
| `lem-least-absolute-remainder` | `$-m<2r\le m$, and consequently $4r^2\le m^2$` |
| `lem-small-four-square-multiple-of-a-prime` | `$1\le m<p$` |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | `$1\le n<m$` |
| `lem-four-square-descent` | `$1\le n<m$` |
| `thm-every-prime-is-a-sum-of-four-squares` | `Every prime is a sum of four integer squares.` |
| `thm-lagrange-four-square-theorem` | `Every nonnegative integer is a sum of four integer squares.` |
| `lem-squares-modulo-eight` | `if $x$ is odd then $x^2\equiv 1\pmod 8$` |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | `no integers $x,y,z$ with $x^2+y^2+z^2\equiv 7\pmod 8$` |
| `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | `then $x$, $y$ and $z$ are all even` |
| `prop-three-square-congruence-obstruction` | `there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$` |
| `cor-integers-requiring-four-squares` | `all four coordinates are nonzero` |

### Prose rules that bite on this page specifically

* **No count in prose.** The page summary must not say how many items, lemmas or
  representations anything has. Inside an item, a count of *mathematical objects* is
  mathematics and is fine: "$Q$ has $(p+1)/2$ elements" and "the multisets $\{5,2,1,1\}$
  and $\{3,3,3,2\}$" are statements about $\mathbb Z/p$ and about integers, not about
  the library.
* **No positional claim.** Do not write "a later page" or "earlier"; name the page id.
  The only page ids that may be named are ones actually in `plan-spec.json`.
* **Scope denials are scoped to this page's declared prerequisites.** The converse of
  `prop-three-square-congruence-obstruction` is Legendre's three-square theorem, which
  the library does not prove. Write that it is not available from this page's declared
  prerequisites — never that "this library does not develop it".
* **No applied $\iota$.** Write $4^a$, $8b+7$, $m/2$ as ordinary integer expressions;
  never $\iota(a)$, $\iota(4)$ or $\iota(m)$. Finding 4 restates the obstruction to
  keep this clean.
* **No wikilink inside `$…$`.** Several items name their dependencies in Facts; keep
  every `[[id]]` outside math delimiters.
* **`lim` notation** does not arise on this page.

### Boundary reminders the sources get wrong or leave implicit

* Conrad states Theorem 6.6 for $n\in\mathbb Z^+$; MIT Theorem 80 and Crisman Fact
  14.2.2 state it for nonnegative $n$. This page takes the nonnegative form, so $0$
  must be treated explicitly — it is not a product of primes and $1$ is the empty
  product.
* $\mathbb N$ contains $0$, so the exponent $a=0$ in `prop-three-square-congruence-obstruction`
  is a genuine base case and $4^0=1$ by `def-group-power`.
* MIT's Lemma 81 writes $|x|,|y|<p/2$ and then bounds $x^2+y^2+1$ by $p^2/2+1$; the
  non-strict $2|x|\le p$ is what the least-absolute-remainder lemma gives, and the
  bound still closes because $2p^2+4<4p^2$ for every prime. Do not copy the strict form.
* MIT removes the even-$m$ case by halving all four coordinates before descending, so
  it can use a strict bound for an odd modulus; Conrad keeps $|a'|\le m/2$ for every
  $m$ and excludes the equality case by hand. **This page follows Conrad**, which is why
  `lem-least-absolute-residue-quadruple-of-a-multiple` exists. Do not mix the two routes.
* In the equality case $n=m$, the normalisation $-m<2r\le m$ already forces each centred
  coordinate to be $+m/2$ rather than $\pm m/2$, so the "either sign of $m/2$" caveat in
  the design's well-definedness paragraph does not arise; keep the argument robust to it
  anyway, since it costs one clause.

### Confidence route for each `ai-altered` published dependency

Every published item cited below was opened on disk and its Statement read in full. All
carry component `provenance`, so none is legacy-unclassified, and none has an
`ai-generated` statement. For the `ai-altered` ones the confidence route was
`established-from-knowledge` — each is a standard fact of elementary number theory or
of the construction of $\mathbb Z$ and $\mathbb N$, and I confirmed the exact statement
against my own knowledge rather than re-sourcing it:
`lem-int-cancellation`, `def-group-power`, `cor-division-algorithm-nonzero-divisor`,
`def-divides-in-z`, `lem-divisibility-basic`, `lem-divisor-bound`,
`lem-int-bounded-above-has-greatest`, `lem-units-of-z`, `def-prime`,
`lem-every-integer-above-one-has-a-prime-divisor`, `thm-prime-factorisation-exists`,
`lem-congruence-respects-integer-arithmetic`.
The `literature-derived` ones — `thm-induction-principle`,
`def-congruence-modulo-an-integer`, `thm-unit-square-criterion-modulo-two-powers` and
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` — were read the same way.

**Both lists were recomputed from disk in the step-3 fix pass**, against the dependency
set B1-1 left behind, and they now name exactly the sixteen external dependencies this
batch cites. Three corrections came out of that recomputation, none of them a change of
mathematics: `thm-induction-principle` carries `provenance.statement: literature-derived`
on disk and had been listed under `ai-altered`; `thm-strong-induction` and
`thm-well-ordering-principle` were listed but are cited by no item in this batch, the
two minimality arguments going through `lem-int-bounded-above-has-greatest` and
`thm-induction-principle`; and the six ids B1-1 removed
(`thm-count-of-quadratic-residues-modulo-prime`, `thm-standard-representatives-modulo-n`,
`thm-sum-rule`, `thm-subset-of-a-finite-set`, `thm-integers-modulo-n-basic-algebra`,
`def-integers-modulo-n`) are cited by nothing here any more.

`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` is the one dependency
added at step 3, and it was opened on disk: `status: published`,
`provenance.statement: literature-derived`, `provenance.proof: ai-altered`, a paired
`deepseek-v4-pro + claude-opus-5[1m]` pass dated 2026-08-23 and `audited: 2026-08-24`,
with `https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf` (Hackman, *Elementary
Number Theory*, Chapter E §E.II Exercise 4) in its own `sources.references`. Confidence
route `established-from-knowledge`: for an odd prime $p$ and $p\nmid a$ the sets of
square classes and of $a$ minus square classes each have $(p+1)/2$ elements inside a
$p$-element set, so they meet, and that is the standard proof of exactly this statement.
It is `literature-derived`, so the extra care an `ai-altered` target would need does not
arise, and it is an eligible `deps` target.

One dependency was checked harder because the page leans on a single clause of it:
`thm-unit-square-criterion-modulo-two-powers`, third bullet, "For $k\ge3$, the
congruence $x^2\equiv a\pmod{2^k}$ is soluble if and only if $a\equiv1\pmod8$". At
$k=3$ the modulus is $8$; with $a=x^2$ for odd $x$ the congruence has the solution $x$,
so $x^2\equiv1\pmod 8$. That is the whole odd case of `lem-squares-modulo-eight`. The
elementary alternative — $x=2k+1$ gives $x^2=4k(k+1)+1$ with $k(k+1)$ even — is
recorded here in case Alpha prefers the self-contained route; the citation was chosen
for reuse and because it is the page's only edge into the reciprocity block.

### No obvious published-dependency falsehood was found

Every published item this batch intends to cite was opened and read. None carries a
load-bearing claim, citation or definition that is unambiguously false, so no repair
under the owner-delegated published-dependency-repair protocol is proposed, and there is
nothing for step 5 to snapshot or certify.

---

## 8. Web research ledger and dependency-closure statement

### Sources, what each supports, and what it disagrees about

All four were fetched in full in this dispatch and are stamped in
`research/frontier-18-batch-1.coverage.json`; the harvest with a disposition for every
heading is in that file (61 harvested results, 27 `included`).

| source | kind | what it backs here |
|---|---|---|
| Keith Conrad, *Proofs by Descent*, §§5–6 and Appendix C — `https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf` | lecture-notes | The whole four-square development: the identity and its signs (Lemma 6.2, Remark 6.3), the congruence lemma (Lemma 6.4), the small multiple and the descent (Theorem 6.6 Steps 1–3), the sign-pattern remark (Remark 6.7), and Example 6.1's representations of $65$. This is the proof route the design selects. |
| MIT 18.781 Lecture 22, *Four Squares Theorem*, pp. 1–5 — `https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf` | course-notes | An independent treatment: Theorem 80 in the nonnegative form this page adopts, Lemma 81, and a different route past the even-modulus boundary. Its identity comes from the quaternion norm. |
| Evan Dummit, *Number Theory (part 9): The Geometry of Numbers*, §§9.1.1–9.1.3, pp. 2–8 — `https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf` | course-notes | The three-square obstruction's statement and route, the closure counterexample $3,5,15$, a second independent statement of the identity (Lemma 1) and of the congruence lemma (Lemma 2), and a Minkowski proof of Lagrange's theorem that this page does not use. |
| Karl-Dieter Crisman, *Number Theory: In Context and Interactive*, §14.2, pp. 241–243 — `https://math.gordon.edu/ntic/nticoneside.pdf` | textbook | Independent corroboration of the nonnegative phrasing of Lagrange's theorem (Fact 14.2.2) and of the three-square characterisation (Fact 14.2.1), in a third description of the obstructed set. |

Hackman's *Elementary Number Theory*, which backs the neighbouring
`sums-of-two-squares` page, was searched and **does not treat the four-square
theorem**; every occurrence of "Lagrange" in it is Lagrange's theorem on congruences
modulo $p$ or the Pell material. It is not claimed as a source here.

### Convention disagreements found

1. **The sign pattern in the four-square identity.** Conrad Lemma 6.2 uses
   $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$ and its partners; Dummit Lemma 1 uses Euler's
   second pattern, $z_2=x_1y_2-x_2y_1+x_3y_4-x_4y_3$; MIT derives Hamilton's pattern
   from the quaternion norm. All three are identities. Only the first two make the
   descent's divisibility step work. This page fixes Conrad's, and
   `rem-sign-patterns-in-the-four-square-identity` records the disagreement rather than
   leaving a reader to think the choice is cosmetic.
2. **Positive versus nonnegative.** Conrad Theorem 6.6 is stated for $n\in\mathbb Z^+$;
   MIT Theorem 80 and Crisman Fact 14.2.2 for nonnegative $n$. The design chooses the
   nonnegative form and this page follows it, treating $0$ explicitly.
3. **Where the even modulus is handled.** Conrad allows $|a'|\le m/2$ for every $m$ and
   excludes $n=m$ by a separate argument; MIT halves the four coordinates first so that
   the modulus it descends by is an odd prime. This page follows Conrad; the difference
   is recorded in the coverage file against MIT's descent row.
4. **How the obstructed set is written.** Dummit writes $4^a(8b+7)$; Crisman writes "an
   even power of two times an odd number congruent to seven modulo eight"; this page
   writes $4^am$ with $m>0$ and $m\equiv7\pmod8$. The three describe the same set, and
   the item says so.

No source was copied. No source was invented: every URL above was downloaded and its
text read in this dispatch, and the four `fetch_verified` stamps record the byte counts
and hashes.

### Dependency-closure statement

**Every published item this batch proposes as a dependency was opened from disk and its
Statement or Definition read in full.** They are:
`def-prime`, `def-divides-in-z`, `lem-divisibility-basic`, `lem-divisor-bound`,
`cor-division-algorithm-nonzero-divisor`, `lem-int-bounded-above-has-greatest`,
`lem-int-cancellation`, `lem-units-of-z`, `def-group-power`,
`def-congruence-modulo-an-integer`, `lem-congruence-respects-integer-arithmetic`,
`thm-prime-factorisation-exists`, `lem-every-integer-above-one-has-a-prime-divisor`,
`thm-induction-principle`, `thm-unit-square-criterion-modulo-two-powers`,
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares`.

Every one is `status: published`, sits on a page at an order strictly below 57.009
(orders 6, 8, 24, 26, 28, 30, 57.005 and 57.007), and has a `provenance.statement`
of `literature-derived` or `ai-altered` — **none is `ai-generated`**, so none is an
illegal dependency target. The list is the post-B1-1 one: the six ids that backed the
counting proof came out with it, and the last entry came in with it.

**Every load-bearing dependency of every item in this batch is either an earlier item
inside the same A/B pair or a published item on a strictly earlier page. There is no
exception**, and in particular no item rests on a draft item, on a forward reference,
or on an external result the library does not prove.

The design's stated choice-strength claim holds: **NT-5 is ZF.** The only selections
made are single choices from sets already proved nonempty — one solution of a
congruence, one prime divisor, one pair of integers supplied by the cited two-square
proposition — and the two
minimality arguments use `lem-int-bounded-above-has-greatest` and
`thm-induction-principle`, neither of which uses choice.

---

## 9. Design-versus-spec drift (recorded, not settled here)

The design's NT-5 "Requires" bullet reads "NT-2 and the published prime-factorisation,
congruence, and finite-counting pages", i.e. `quadratic-residues-and-the-legendre-symbol`
at order 57.003. `research/plan-spec.json` declares
`requires: ["sums-of-two-squares-examples"]`, i.e. NT-4's B page at order 57.008.

These are not contradictory — the spec's anchor is strictly later and transitively
includes the design's — but they are different, and settling it inside one batch is how
two batches end up built against two plans. **I followed the spec** and left the design
text alone. Stage 1's `drift` unit adjudicates. The choice has no mathematical
consequence for this batch: no item cites anything on NT-3 or NT-4 (Finding 5), so the
page's actual item-level closure sits at NT-2 and below either way.

The design's declared order 57.009 and companion `lagrange-four-square-theorem-examples`
match `plan-spec.json` exactly; only the `requires` line differs.

**One observation about the working tree, for Alpha rather than for me to act on.**
While this batch was running, `research/plan-spec.json` acquired uncommitted changes I
did not make: `finite-fields-and-cyclotomic-extensions` gained
`triangularisation-and-jordan-canonical-form` in its `requires`, and
`lebesgue-measure-on-euclidean-space` gained
`the-riemann-integral-in-rn-and-jordan-content` and
`determinants-of-matrices-over-a-commutative-ring`. Those are batch 3's and batch 7's
pages. **This pair's two spec entries are untouched** — order 57.009 and 57.010,
`requires` unchanged — and I re-took the scratch splice from the current file and re-ran
`validate-plan` (exit 0) and `depsource` (51 published, 0 unresolved on the A page) after
noticing, so every number in §10 is against the spec as it stands now. I record this only
because the gate results in §10 are baseline-sensitive and the baseline moved under them.

---

## 10. Gates run, and what I expect from the ones I could not run

Run here, from the repo root, with the result quoted:

```
node tools/content-policy.mjs research/frontier-18-batch-1.pages.json --manifest-only
    -> content-policy: 26 scoped item(s), 0 error(s), 0 warning(s)

node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-1.coverage.json --stamp
    -> source-fetch-check: 4/4 source(s) fetch-verified (4 newly stamped)

node tools/coverage-checklist.mjs research/frontier-18-batch-1.coverage.json
    -> coverage-checklist: 1 page(s), 61 harvested result(s), 0 error(s), 0 warning(s)
       (identical with --require-destination)

node tools/validate-plan.mjs <spliced spec>          -> exit 0, no error on either page
node tools/depsource.mjs <spliced spec>              -> exit 0, 0 unresolved
node tools/depsource.mjs <spliced spec> --page lagrange-four-square-theorem
    -> 49 external deps: published 49, planned-earlier 0, draft-page 0,
       homeless 0, planned-later 0, unresolved 0
node tools/depsource.mjs <spliced spec> --page lagrange-four-square-theorem-examples
    -> 30 external deps: published 7, planned-earlier 23, the rest 0
```

**How the spliced spec was produced, and why the result is not the authoritative one.**
`plan-spec.json` is not mine to write and step 4 is where `splice-plan.mjs` transcribes
these ids into it. To get a real reading rather than a guess I copied `plan-spec.json`
to a scratch file outside the repository, replaced the `items` array of the two pages
this batch owns with the arrays from `research/frontier-18-batch-1.pages.json`, and ran
the two gates against that copy. Nothing in the repository was modified. **The engine's
post-splice run is the authoritative one**; I expect it to reproduce the numbers above
exactly, because the splice is a mechanical transcription of the same ids.

Run and reported here as failing for one reason only:

```
node tools/proof-contract.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 24 error(s), all `item-missing`, 0/24 item(s) checked
node tools/risk-report.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 24 error(s), all `item-missing`, 0 item(s) routed
node tools/finite-smoke.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 0 error(s), 0 check(s) over 0/24 item(s) carrying obligations
```

Every error is `item-missing`: no item is authored yet, which is the correct state at
step 2. The contract's `quote` fields were nevertheless validated now against the
**published** items on disk. The contract carries 102 fact citations; 56 of them cite a
published item, and all 56 quotes match their cited section exactly, checked by substring
against that item's `## Statement` or `## Definition`. The remaining 46 cite items this
batch will author — so the only quotes that can still move are the ones citing this
batch's own future items, which §7 lists so the authored Statements can be written to
contain them. The `finite_smoke` count of zero is deliberate and is Finding 9, not an
oversight.

```
node tools/prosecheck.mjs research/frontier-18-batch-1.notes.md --warnings
    -> 1 file(s) checked. 0 error(s), 23 warning(s)
       (count-in-prose 17, count-of-this-page 5, library-scope-denial 1)
       "OK - no positional claim contradicts the spec."
```

Re-run after the step-3 fix pass appended its section, same command:

```
    -> 1 file(s) checked. 0 error(s), 29 warning(s)
       (count-in-prose 21, count-of-this-page 7, library-scope-denial 1)
       "OK - no positional claim contradicts the spec."
```

The gate passes and the warnings stand deliberately. `prosecheck`'s count rules exist for
page summaries, pathway briefs and item prose, where a count is an unverifiable claim
about a file the writer is not looking at. This file is a report to the step-3 Alpha, and
its counts are the report: item counts that can be recounted from the tables in §1, gate
result counts quoted verbatim from the tools, and citation counts computed from the
contract. Both `library-scope-denial` hits are on sentences that *quote* the banned
phrase in order to forbid it — the rule in §7 and this paragraph itself — so the checker
is seeing the quotation, not a claim. None of
these is a claim about a page's contents, and rewording them to satisfy a checker aimed
at a different class of file would make the report less checkable, not more. **The prose
rules bind the item text and the page summary this batch authors at step 5**, where no
count and no positional claim will appear; §7 records them for that pass.

Not run, and not claimed: `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `citecheck`,
`rendercheck`, `prosecheck`, `audit-manifest`, `impact-audit`, `level-coverage`. All of
them read authored item text, which does not exist yet. `prosecheck` was not run because
this batch wrote no page prose and no item bodies; the only prose it produced is this
file, which no gate reads.

---

## 11. Honest confidence statement

**High confidence.** The mathematics of the A page. I read Conrad §§5–6 and Appendix C,
MIT Lecture 22 and Dummit §§9.1.1–9.1.3 line by line rather than by heading, and every
proof obligation on the A page maps to a named published dependency or an inline
derivation recorded in `research/frontier-18-batch-1.proof-contracts.json`. The descent's
two boundary cases — the centred quadruple vanishing, and $n=m$ — are the parts most
likely to be got wrong, and both now have their own Statement rather than a clause inside
a longer proof. Every numeric claim on the B page was computed, and the bounded searches
in §3 Finding 9 all came back clean, including the check that the three-square obstruction
is not accidentally too strong.

**High confidence.** The dependency closure. Every proposed dependency was opened on
disk, `depsource` on the locally spliced spec reports all 49 external A-page dependencies
resolving to published pages and nothing unresolved, and no dependency has an
`ai-generated` statement.

**Medium confidence.** The provenance labels in §5. The five items whose statements I
marked `ai-altered` rather than `literature-derived` — `lem-least-absolute-remainder`,
`lem-least-absolute-residue-quadruple-of-a-multiple`, `lem-squares-modulo-eight`,
`lem-sum-of-three-squares-is-never-seven-modulo-eight`,
`lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` — are each stated in
a source in prose or presupposed by a source's sketch, not as a numbered result. I chose
the conservative label in every case. A reader who thinks "standard fact stated in prose
by the source" is `literature-derived` would relabel some of them; Alpha should decide
rather than inherit my call.

**Medium confidence.** The step numbering in the proof contracts. It is a plan for text
that does not exist. `precheck` will impose the canonical stratification at step 5 and
some steps will move; the contract is mine to keep current then, and §7 records what must
not move.

**What I did NOT verify.**

* I did not run `precheck`, `depcheck`, `rendercheck` or any gate that reads item text,
  because no item text exists. In particular I have not verified that any planned proof
  actually stratifies, only that each step's inputs precede it.
* I did not verify the exact page numbers of Conrad's printed edition beyond the PDF
  page numbering; the locators in the coverage file are PDF pages, which is what a reader
  following the URL sees.
* I did not read Conrad §§2–4, §7 or Appendices A–B closely — only closely enough to see
  that they treat irrationality, Fermat's Last Theorem for exponent 4, rational-function
  equations, Markov's equation and areas of right triangles, none of which is this page's
  subject. They are outside the range I declared in the coverage file, so I have made no
  disposition claim about their contents.
* I did not read Dummit §§9.2–9.3 or Crisman §14.1 and Ch. 25, and I claim nothing about
  them.
* I did not confirm that any judge or reader will accept
  `fs-four-square-representations-of-a-prime-are-essentially-unique` as `ai-altered`
  rather than `ai-generated`. The reasoning is in §5; it is the one provenance call on
  the B page that a careful reader could reasonably reverse, and an `ai-generated` false
  statement is prohibited, so if Alpha reverses it the item must be withdrawn rather than
  relabelled.
* I did not attempt to establish Legendre's three-square theorem, and nothing on the page
  assumes it. The coverage file defers it to `owner-decision` because no page in
  `plan-spec.json` builds it.
* I did not check whether the other nine `frontier-18` batches mint any of these 26 ids.
  Each batch writes its own manifest and `content-policy` catches a repeated id across
  the batch manifests at the whole-level run; at the time I ran it, only this batch's
  manifest had items.

---

## Step-3 fix pass

Findings taken from `research/frontier-18-alpha-c-step3-scaffold-review.md` (group **c**
covers batches 1, 3 and 4; the id prefix for this batch is `B1-`). Three findings carry
that prefix. Ids are Alpha's and are not renumbered.

### B1-1 — cite `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` · **applied**

**Severity:** blocking (`blocks sufficient`). **Alpha's route:** option (b) of my Finding
5 — `lem-four-square-congruence-for-primes` cites the published proposition at $a=-1$ for
the odd case, keeps $p=2$ as the direct check, and drops the five counting dependencies
from its `deps` and from its contract facts.

**Verified on disk before applying.** `items/prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares.md`
reads `status: published`, `provenance.statement: literature-derived`,
`provenance.proof: ai-altered`, judge verdict `pass` dated 2026-08-23 under
`deepseek-v4-pro + claude-opus-5[1m]`, `audited: 2026-08-24`. Its Statement is *"Let $p$
be an odd prime and let $a\in\mathbb Z$ with $p\nmid a$. Then there are integers $x,y$
such that $x^2+y^2\equiv a\pmod p$."* It is homed on `sums-of-two-squares` — the A page,
not the `-examples` page, so the B-page leaf rule is not touched — at order 57.007, and
`library/number-theory/sums-of-two-squares.md` and its companion both read
`status: published`. Publication state was read from the `status:` line, not from the git
log.

**What changed, file by file.**

*`research/frontier-18-batch-1.pages.json`* — `lem-four-square-congruence-for-primes`:

- `deps` was `[def-prime, def-congruence-modulo-an-integer, def-integers-modulo-n,
  thm-standard-representatives-modulo-n, thm-count-of-quadratic-residues-modulo-prime,
  thm-sum-rule, thm-subset-of-a-finite-set, thm-integers-modulo-n-basic-algebra]` and is
  now `[def-prime, def-congruence-modulo-an-integer, def-divides-in-z, lem-units-of-z,
  prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares,
  lem-congruence-respects-integer-arithmetic]`.
- `strategy` rewritten: $p=2$ by the direct check $1^2+0^2+1=2$; odd $p$ by the cited
  proposition at $a=-1$, whose hypothesis $p\nmid-1$ is discharged from `def-divides-in-z`
  and `lem-units-of-z` against $p>1$; then $x^2+y^2\equiv-1$ and $1\equiv1$ add to
  $x^2+y^2+1\equiv0$. The strategy now tells the step-5 author in terms not to re-run the
  square-class counting argument.

**`def-integers-modulo-n` came out too, and Alpha named only the five.** The new proof
never forms a residue class: the cited proposition is stated as a congruence between
integers, so the $\mathbb Z/p$ vocabulary has no remaining use, and keeping the edge would
leave a dependency no step consumes. This is the one place where I went past the letter of
B1-1, and it is a removal, not an addition. If Alpha wants the edge kept it is a one-line
revert. Grepped after the change: none of the six ids appears anywhere in this batch's
four artifacts.

*`research/frontier-18-batch-1.proof-contracts.json`* — the same item's entry rewritten:
facts F1 `def-prime`, F2 `def-congruence-modulo-an-integer`, F3 `def-divides-in-z`, L1 the
published proposition, L2 `lem-units-of-z`, L3 `lem-congruence-respects-integer-arithmetic`;
six derivations over steps 1.1, 2.1, 3.1, 3.2, 3.3, 4.1 (case split, $p=2$, $p\nmid-1$,
instantiate at $a=-1$, add $1$, combine); all eight boundary cases redispositioned against
the new proof rather than carried over. `empty` moved from `checked` to `not_applicable`
with a reason specific to this proof — no set or index range is constructed any more,
because the counting that made the case live now sits inside the cited proposition. The
`finite_smoke` list stays empty (B1-3).

*Both files, consequential B-page edit.* `ex-four-square-congruence-for-an-odd-prime`
displays the two square sets modulo $11$ and their intersection. That display is now the
*proposition's* argument at $a=-1$, not the A-page lemma's, so leaving it unattributed
would send a reader to the A page looking for an argument no longer there. Added
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` to its `deps`, a sentence
to its strategy saying the display instantiates that proposition at $p=11$ and that the
lemma cites it rather than re-running it, and a contract fact L2 with a step 4.1 that uses
it. The example's arithmetic is untouched — Alpha recomputed those sets and they are
right.

*Notes §"Exact strings the proof contract requires each Statement to contain"* — checked
against the verdict's instruction to update the matching contract strings, and **no change
was needed**: the row for `lem-four-square-congruence-for-primes` records
`there are integers $x,y$ with $x^2+y^2+1\equiv 0\pmod p$`, which is the item's Statement,
and B1-1 changed the proof route, not the Statement. Every other row in that table belongs
to an item B1-1 did not touch. The strings that *did* move are the `quote` fields inside
the contract, and they are listed above; all six of the rewritten entry's quotes are exact
substrings of the cited published item's `## Statement` or `## Definition` on disk.

*`research/frontier-18-batch-1.coverage.json`* — unchanged, and it should be: the harvest
rows that back this lemma are Conrad Lemma 6.4 and Dummit Lemma 2 for the *statement*,
both still `included` against this same item id. No source heading changes disposition
because a proof route changed.

**Checks re-run after the change** (repo root; the spliced-spec runs used a scratch copy
of `plan-spec.json` outside the repository, exactly as §10 describes, because step 4 owns
the real splice):

```
node tools/coverage-checklist.mjs research/frontier-18-batch-1.coverage.json
    -> 1 page(s), 61 harvested result(s), 0 error(s), 0 warning(s)
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
    -> 0 error(s), 0 warning(s)   (scoped-item total moved 784 -> 785 -> 786 across
       three runs minutes apart: the other batches are writing their own manifests
       right now, so the whole-run total is not a stable number to quote. The
       error and warning counts are what this invocation attests.)
node tools/content-policy.mjs research/frontier-18-batch-1.pages.json --manifest-only
    -> 26 scoped item(s), 0 error(s), 0 warning(s)   (this batch alone, unchanged
       by the fix pass: B1-1 moved dependency edges, not items)
node tools/validate-plan.mjs research/plan-spec.json
    -> OK, acyclic and consistent (unspliced spec; this batch's items are not in it yet)
node tools/validate-plan.mjs <scratch spliced spec>      -> OK, 0 errors
node tools/depsource.mjs <scratch spliced spec> --page lagrange-four-square-theorem
    -> 49 external deps: published 49, planned-earlier 0, draft-page 0, homeless 0,
       planned-later 0, unresolved 0
node tools/depsource.mjs <scratch spliced spec> --page lagrange-four-square-theorem-examples
    -> 30 external deps: published 7, planned-earlier 23, the rest 0
node tools/proof-contract.mjs  -> 24 error(s), all `item-missing`  (unauthored: correct at step 3)
node tools/risk-report.mjs     -> 24 error(s), all `item-missing`, 0 item(s) routed
node tools/finite-smoke.mjs    -> 0 error(s), 0 check(s) over 0/24 item(s)
```

Contract quotes were re-verified by substring against the cited `## Statement` /
`## Definition` on disk: 102 fact citations, 56 citing a published item, **56/56 exact**,
46 citing items this batch will author. The A page's external dependency count moved
$51 \to 49$ and the B page's $29 \to 30$.

**The seam B1-1 named is closed.** Counting dependency edges by the home page of each
external dep, the A page now has one edge into `sums-of-two-squares` and the B page one,
where both had zero. Every external dependency of both pages still resolves inside the
declared `requires` closure, and every one is on a page of strictly smaller order.

### B1-2 — Conrad Theorem 5.1, a second route to the two-square theorem · **no action, correctly not mine**

**Severity:** major, disposition **owner decision**. Alpha did not reverse the decline and
replaced my reason: the blocker is not that the target is a draft (it is published now)
but that the second-proof rule requires each version to name the other, and the reciprocal
cross-reference is an edit to a published item on a page outside this level — outside
every write boundary at step 3, and not an obvious-published-dependency repair because
nothing on `sums-of-two-squares` is false.

Nothing to apply: no artifact of mine asserts the superseded reason, and
`thm-fermat-two-square-theorem-by-descent` was never scaffolded. Recorded here so the
step-5 author does not re-open it: **if the owner authorises the reciprocal sentence on
`thm-fermat-two-square-theorem-for-primes`, this page can carry the descent proof at
almost no cost, because `lem-least-absolute-remainder` is already on it.** Until then it
stays unbuilt.

### B1-3 — `finite_smoke` empty for every item on the page · **no action, routed to the owner and the engine**

**Severity:** minor. Alpha approved the honest empty list, reproduced the load-bearing
bounded search itself (the sign patterns, over 200,000 random integer quadruple pairs, 0
failures) and got my answer, and routed the three proposed registry checks
(`sum-of-k-squares-residues-mod-n`, `four-square-identity-sign-pattern`,
`three-square-obstruction`) to the owner and the engine as a tool change, explicitly not
to me: it will not change `finite-smoke.mjs`'s registry mid-run.

`finite_smoke` therefore stays `[]` on all 24 contract entries, including the rewritten
one, and `finite-smoke.mjs` still reports `0 error(s), 0 check(s) over 0/24 item(s)`. That
is the gate reporting green over zero checks, which is exactly what Alpha recorded; it is
not a pass I am claiming.

### My own nine findings — where their adjudications land

Alpha adjudicated all nine. Eight are amendments to the **design prose scaffold**
(`research/plan-number-theory-track.md` §NT-5), which the lead Alpha applies at step 4;
they are not mine to write and I have not written them. Each was already reflected in
these artifacts when I scaffolded, so none needs an artifact edit now: Dummit load-bearing
(1, approve), the three provenance cells `L/G`, `L/A`, `A/A` (2, approve — §5 already
carries them), the five added lemmas (3, approve — all five are in `.pages.json`), the
$4^a m$ restatement (4, approve — `prop-three-square-congruence-obstruction` is already
stated that way), the three corrected source locators (6, approve — `.coverage.json`
already records the corrected ranges), the descent wording (7, approve), and the two
declines Alpha upheld, Conrad Thm C.1 as strictly weaker and Conrad Thm C.2 as unconsumed
(8.2, 8.3). Finding 5 is B1-1 and is applied above; 8.1 is B1-2 and 9 is B1-3.

### T-1 — not this batch's

Alpha's tooling finding, that `validate-plan.mjs` performs no reading-order check on a dep
that already exists in `items/`, is recorded for the owner and the engine and spans all
three batches in the group. Nothing here to apply. It is worth the step-5 author knowing
that the reading order of this pair's dependencies was checked by hand and by the closure
computation above, not by that gate.

---

## Step-5 authoring

All 26 items of the pair are authored, plus both page files. Everything is
`status: draft`, `origin: session`; no `verification.audited`, `verification.verified`
or `verification.judge` block was written anywhere.

### 1. Per-item list, with precheck result

`node tools/tsx-run.mjs tools/reflow.mts <all 26>` reported nothing to reflow;
`node tools/tsx-run.mjs tools/precheck.mts <all 26>` reported
`24 checked, 0 failing — all clean`. The two items not counted are the definition
and the remark, which have no phase-stratified body and carry
`verification.precheck: n/a`, as SCHEMA §3 requires.

#### A page `lagrange-four-square-theorem` (`library/number-theory/lagrange-four-square-theorem.md`)

| id | kind | strategy | precheck | landmark |
|---|---|---|---|---|
| `def-sum-of-four-squares-representation` | definition | — | `n/a` | true |
| `lem-euler-four-square-product-identity` | lemma | direct | PASS | true |
| `cor-four-squares-closed-under-products` | corollary | direct | PASS | false |
| `lem-four-square-congruence-for-primes` | lemma | cases | PASS | true |
| `lem-least-absolute-remainder` | lemma | direct | PASS | false |
| `lem-small-four-square-multiple-of-a-prime` | lemma | direct | PASS | false |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | lemma | direct | PASS | false |
| `lem-four-square-descent` | lemma | direct | PASS | true |
| `thm-every-prime-is-a-sum-of-four-squares` | theorem | contradiction | PASS | true |
| `thm-lagrange-four-square-theorem` | theorem | contradiction | PASS | true |
| `rem-sign-patterns-in-the-four-square-identity` | remark | — | `n/a` | false |
| `lem-squares-modulo-eight` | lemma | cases | PASS | false |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | lemma | cases | PASS | false |
| `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | lemma | direct | PASS | false |
| `prop-three-square-congruence-obstruction` | proposition | induction | PASS | true |
| `cor-integers-requiring-four-squares` | corollary | contradiction | PASS | false |

#### B page `lagrange-four-square-theorem-examples` (`library/number-theory/lagrange-four-square-theorem-examples.md`)

| id | kind | strategy | precheck |
|---|---|---|---|
| `ex-four-square-product-identity-by-expansion` | example | direct | PASS |
| `ex-four-square-congruence-for-an-odd-prime` | example | direct | PASS |
| `ex-least-absolute-remainders-and-the-even-modulus-tie` | example | direct | PASS |
| `ex-four-square-descent-for-thirteen` | example | direct | PASS |
| `ex-four-square-representations-of-sixty-five` | example | direct | PASS |
| `fs-four-square-representations-of-a-prime-are-essentially-unique` | false-statement | direct | PASS |
| `ex-four-square-representation-from-prime-factorisation` | example | direct | PASS |
| `cex-three-squares-fail-for-seven-modulo-eight` | counterexample | direct | PASS |
| `cex-sums-of-three-squares-are-not-closed-under-products` | counterexample | direct | PASS |
| `ex-an-integer-that-genuinely-needs-four-squares` | example | direct | PASS |

No item was dropped, renamed or merged, so `research/frontier-18-batch-1.coverage.json`
is unchanged and every `included` row still names an item that exists on disk. That
was checked mechanically, id by id, against this batch's manifest, not assumed.

### 2. Ledger — what moved from the scaffold, and why

Titles: **none changed.** Ids: **none changed.** Reading order: **unchanged.**

**Dependency-list changes, four items.**

* `lem-least-absolute-residue-quadruple-of-a-multiple` — **added `lem-int-cancellation`.**
  Both exclusions end by cancelling a factor of $m$: at step 4.1 the relation
  $pm=m^2(\alpha^2+\beta^2+\gamma^2+\delta^2)$ becomes $p=m(\dots)$ at step 5.1, and at
  step 7.1 $pm=m^2k$ becomes $p=mk$ at step 8.1. The scaffold's `lem-divisibility-basic`
  gives linearity, which is used at step 7.1 to sum the four congruences, but not
  cancellation. This is a genuinely used edge, not a checker-silencing one.
* `cor-integers-requiring-four-squares` — **added `thm-induction-principle` and
  `def-congruence-modulo-an-integer`.** The corollary needs $4^am$ to be a nonnegative
  integer before Lagrange's theorem applies to it, and $4^a\ge 1$ is a one-line
  induction on the exponent (step 1.1) using `def-group-power` in the monoid of
  `lem-units-of-z`; nothing published states positivity of a power of a non-prime
  base. `def-congruence-modulo-an-integer` is used by the Statement's own hypothesis
  $m\equiv 7\pmod 8$.
* `ex-an-integer-that-genuinely-needs-four-squares` — **added
  `def-congruence-modulo-an-integer`**, used at step 1.2 to check the hypothesis
  $7\equiv 7\pmod 8$ of the two cited results.
* `ex-four-square-representation-from-prime-factorisation` — **dropped
  `thm-prime-factorisation-exists`.** The example displays $105=3\cdot5\cdot7$ and
  step 1.1 verifies it by multiplication; the existence theorem is not used by any
  step, so keeping the edge would be an unused dependency. The theorem is named in
  the Example prose as the route the Lagrange proof takes, and
  `cor-four-squares-closed-under-products` remains a real edge, cited at step 4.1.

**Statement content added beyond the scaffold, three items.**

* `def-sum-of-four-squares-representation` — the Definition also fixes
  **equivalence up to signs and order** and **essentially different**, with the
  criterion that two representations are equivalent exactly when their multisets of
  absolute values coincide. `ex-four-square-representations-of-sixty-five` and
  `fs-four-square-representations-of-a-prime-are-essentially-unique` both turn on
  that notion and the scaffold left it undefined; the convention is the one
  `def-sum-of-two-squares-representation` uses for pairs.
* `lem-sum-of-three-squares-is-never-seven-modulo-eight` — the Statement adds a
  second sentence, that the residues modulo $8$ attained by sums of three integer
  squares are **exactly** $0,1,2,3,4,5,6$. The four cases give the inclusion, and
  the Remarks name a witness for each of the seven residues, so the equality is
  established and not asserted.
* `lem-squares-modulo-eight` — the Statement defines even and odd in terms of
  `def-divides-in-z`, since the library has no parity definition item, and carries
  the modulo-$4$ consequence the two consumers need. Both were prescribed by the
  scaffold strategy.

**Proof-shape changes, two items.**

* `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` — authored
  `direct` rather than `cases`. The count $t$ of odd coordinates is pinned to a
  single residue modulo $4$ at step 2.1 and then forced to $0$ at step 4.1 by the
  division algorithm's uniqueness clause, so no case split is needed and the
  scaffold's four-way analysis would have been three vacuous branches.
* `lem-least-absolute-residue-quadruple-of-a-multiple` — the two exclusion
  arguments were each split across two steps (4.1/5.1 and 7.1/8.1) after
  `proof-contract` raised `shotgun-bracket` on a step citing four of the seven
  declared facts. The mathematics is unchanged; each fact is now cited at the step
  that uses it. Because precheck's canonical stratification interleaves the two
  exclusions — steps 4.1 and 5.1 handle $n=0$, steps 4.2 to 8.1 handle $n=m$ — each
  step names its own case inside the step ("In the case $n=0$", "Still in the case
  $n=m$") rather than relying on a heading or an opening word, so no step appears to
  scope what is printed after it.

**One presentation change made for a gate.**
`fs-four-square-representations-of-a-prime-are-essentially-unique` originally named
`thm-uniqueness-of-two-square-representation-of-a-prime` in its `## Statement`, which
`depcheck` flagged as `cited-not-in-deps`. The refutation does not use that theorem —
the false claim is formed by analogy with it — so the paragraph moved to `## Remarks`
rather than the edge being added to `deps`. `depcheck` is now clean on this batch.

**Component provenance, with the rationale for each.** Values are as recorded in §5
above and were re-checked against the authored text; none moved.

| id | statement | proof | why |
|---|---|---|---|
| `def-sum-of-four-squares-representation` | literature-derived | not-applicable | Conrad §6, MIT Theorem 80 and Crisman Fact 14.2.2 all use ordered integer quadruples; the equivalence-up-to-signs clause follows the published two-square convention rather than inventing one. A definition has no proof component. |
| `lem-euler-four-square-product-identity` | literature-derived | ai-generated | Conrad Lemma 6.2 gives the identity and the exact signs; its proof is "left to the reader to expand both sides", so the eight-step expansion here is formulated locally. |
| `cor-four-squares-closed-under-products` | literature-derived | ai-altered | The closure sentence is Conrad Lemma 6.2's headline and Dummit Lemma 1; the sources deduce it in one line and the zero and unit cases are written out here. |
| `lem-four-square-congruence-for-primes` | literature-derived | ai-altered | Statement is Conrad Lemma 6.4 and Dummit Lemma 2 verbatim in content. The proof is not the sources' counting argument: after Alpha finding B1-1 the odd case specialises the published `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` at $a=-1$, which is a material reformulation. |
| `lem-least-absolute-remainder` | ai-altered | ai-altered | Conrad §6 Step 2 states the fact in prose; the uniqueness clause, the half-open normalisation and the integer-form bound $4r^2\le m^2$ are added here. |
| `lem-small-four-square-multiple-of-a-prime` | literature-derived | ai-altered | Conrad Theorem 6.6 Step 1 and MIT Lemma 81 state it; the strict bound is rewritten in integers to avoid $p/2$. |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | ai-altered | ai-altered | Conrad Theorem 6.6 Step 2 contains exactly this claim inside a longer argument; extracting and naming it, and the split into the two exclusions, is the adaptation. |
| `lem-four-square-descent` | literature-derived | ai-altered | Conrad states Step 2 as a standalone claim; the per-coordinate divisibility computation is written out here. |
| `thm-every-prime-is-a-sum-of-four-squares` | literature-derived | ai-altered | Conrad Theorem 6.6 Step 3 and MIT Theorem 80's reduction; termination is written with `lem-int-bounded-above-has-greatest` instead of "repeat until". |
| `thm-lagrange-four-square-theorem` | literature-derived | ai-altered | MIT Theorem 80 and Crisman Fact 14.2.2 give the nonnegative form; the proof replaces the sources' factorisation appeal with a least-counterexample argument treating $0$ and $1$ explicitly. |
| `rem-sign-patterns-in-the-four-square-identity` | ai-altered | not-applicable | Conrad Remarks 6.3 and 6.7 plus Dummit Lemma 1's differing pattern; the explicit reduction modulo $m$ of each of the three patterns is computed here. A remark has no proof component. |
| `lem-squares-modulo-eight` | ai-altered | ai-altered | The odd case is the published `thm-unit-square-criterion-modulo-two-powers` at $k=3$; the even case and the modulo-$4$ consequence are assembled here. |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | ai-altered | ai-altered | Dummit §9.1.3 asserts the $a=0$ case of the obstruction, which is this statement once unwound; the parity-count argument and the attainment clause are written here. |
| `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` | ai-altered | ai-altered | Dummit's "one may induct on $a$" presupposes exactly this step; statement and proof are written here. |
| `prop-three-square-congruence-obstruction` | literature-derived | ai-altered | Dummit §9.1.3 and Crisman Fact 14.2.1 both state it; both decline to prove it, so the induction is written here. |
| `cor-integers-requiring-four-squares` | ai-altered | ai-altered | The sentence appears in no harvested source; it is assembled from the obstruction and Lagrange's theorem. |
| `ex-four-square-product-identity-by-expansion` | ai-generated | ai-generated | `generation.role: example`. The pair $7\times15$ and its quadruples are chosen here. |
| `ex-four-square-congruence-for-an-odd-prime` | ai-generated | ai-generated | `generation.role: example`. The modulus $11$ and the two displayed residue sets are chosen and computed here. |
| `ex-least-absolute-remainders-and-the-even-modulus-tie` | ai-generated | ai-generated | `generation.role: example`. Both tables are computed here. |
| `ex-four-square-descent-for-thirteen` | ai-generated | ai-generated | `generation.role: example`. The design names $13$; the starting representation and the two-step route are chosen here. |
| `ex-four-square-representations-of-sixty-five` | literature-derived | ai-generated | Conrad Example 6.1 displays exactly these four representations; the verification and the multiset comparison are written here, so no `generation` block. |
| `fs-four-square-representations-of-a-prime-are-essentially-unique` | ai-altered | ai-generated | The false claim is the published two-square uniqueness theorem with four coordinates in place of two, an adaptation of a literature statement rather than a fresh invention; an `ai-generated` false statement is prohibited and this is not one. The refuting witness $31$ is found here. |
| `ex-four-square-representation-from-prime-factorisation` | ai-generated | ai-generated | `generation.role: example`. The integer $105$ and the order of multiplication are chosen here. |
| `cex-three-squares-fail-for-seven-modulo-eight` | ai-generated | ai-generated | `generation.role: counterexample`. The witnesses $7$ and $28$ are chosen here. |
| `cex-sums-of-three-squares-are-not-closed-under-products` | literature-derived | ai-altered | Dummit gives exactly the witness $3$, $5$, $15$; the verification and the "not universal" clause are written here, so no `generation` block. |
| `ex-an-integer-that-genuinely-needs-four-squares` | ai-generated | ai-generated | `generation.role: example`. The witnesses and their representations are chosen here. |

`content-policy.mjs research/frontier-18-batch-1.pages.json` reports
`26 scoped item(s), 0 error(s), 0 warning(s)`, so every `ai-generated` statement
carries its `generation.role` and none is a `deps` target. No item carries
`proved_here: false`; **this batch uses no external fallback** and writes no
`external_dependency` record. All four source URLs in item frontmatter are the four
harvested ones, and `url-sweep --recover --fail-on-dead` reports `4/4 live`.

**Counterexample searches for every `ai-generated` statement or construction, and for
the two clauses that could be too strong.** Each was run in this dispatch, not
carried over from scaffolding.

* Every displayed number on the B page was recomputed: the four bilinear coordinates
  at $7\cdot15$ giving $(10,1,-2,0)$ with norm $105$; the residue sets modulo $11$,
  $Q=\{0,1,3,4,5,9\}$ and $\{1,5,6,7,9,10\}$, their intersection $\{1,5,9\}$, and
  that $10\notin Q$ so $-1$ is not a square modulo $11$; both least-absolute-remainder
  tables; the full two-step descent for $13$, including $(22,33,33,22)$ of norm $3146$
  and $(6,4,0,0)$ of norm $52$; the four representations of $65$; the primality of
  $31$ and its two representations; the $105$ construction giving $(3,-1,-2,1)$ and
  $(4,8,5,0)$; $7=2^2+1^2+1^2+1^2$, $28=5^2+1^2+1^2+1^2$, $3=1^2+1^2+1^2$,
  $5=2^2+1^2+0^2$, $15\equiv 7\pmod 8$, and $9=3^2+0^2+0^2$. All 38 checks passed.
* Squares modulo $8$ over $|x|\le 500$: values exactly $\{0,1,4\}$, no counterexample.
* Sums of three squares modulo $8$ over $|x|,|y|,|z|\le 25$: residues attained
  exactly $\{0,1,2,3,4,5,6\}$, never $7$ — this is the search that could have refuted
  the added "exactly" clause of `lem-sum-of-three-squares-is-never-seven-modulo-eight`.
* $4\mid x^2+y^2+z^2 \Rightarrow$ all even, over $|x|,|y|,|z|\le 20$: zero
  counterexamples.
* **The obstruction is not accidentally too strong.** The full three-square
  characterisation — $n$ is a sum of three squares if and only if $n$ is not
  $4^am$ with $m\equiv 7\pmod 8$ — was checked for every $n<2000$: no mismatch. So
  `prop-three-square-congruence-obstruction` excludes no integer it should not.
* Lagrange's theorem was checked exhaustively for every $n<1500$: every one is a sum
  of four integer squares.
* `cor-integers-requiring-four-squares`: for every $n=4^am<2500$ with $m\equiv 7\pmod 8$
  and $a\le 3$, no three-square representation exists, so no such $n$ has a
  four-square representation with a vanishing coordinate.
* `lem-small-four-square-multiple-of-a-prime`: for every prime $p<200$ a centred pair
  with $1\le m<p$ was found, so the lemma's conclusion is realised and not vacuous.
* **The three sign patterns.** Conrad's, Euler's second and the quaternion pattern
  were each checked as four-square identities over 50000 random integer quadruple
  pairs each: all three hold. Under the substitution $y\equiv x$, Conrad's and
  Euler's second send all four coordinates to $0$; the quaternion pattern sends them
  to $a^2-b^2-c^2-d^2$, $2ab$, $2ac$, $2ad$. That is exactly what
  `rem-sign-patterns-in-the-four-square-identity` asserts, and it is asserted about
  the reduction only, never that no proof can use the quaternion pattern.

### 3. Proof contract

`research/frontier-18-batch-1.proof-contracts.json` was **regenerated from the
authored text**, not patched: the citation `uses` lists and every step's `inputs`
are computed from the items on disk, and the boundary rows were written against the
final step numbering. It now reports

```
node tools/proof-contract.mjs research/frontier-18-batch-1.proof-contracts.json --strict
    -> 0 error(s), 0 warning(s), 24/24 item(s) checked
node tools/citation-fidelity.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 104 citation(s) over 24 authored item(s); QUOTE NOT FOUND none;
       WIDENING CANDIDATES none
node tools/risk-report.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 0 error(s), 24 item(s) routed
node tools/boundary-audit.mjs research/frontier-18-batch-1.proof-contracts.json
    -> 192 rows, 87 not_applicable; TEMPLATE REUSE none at or above 3 members;
       CONTRADICTED DISPOSITIONS 2 candidates (both read, see §4)
node tools/merge-proof-contracts.mjs --level frontier-18 <out> <this batch>
    -> 24 scoped item(s) from 1 batch contract
```

Every `quote` is an exact whitespace-normalised substring of the cited item's
`## Statement` or `## Definition` on disk; the 104 citations include the ones citing
this batch's own items, and the Statements were written to contain the strings §7
above recorded. Nine items were re-cited against changed step numbers.

**Risk routing.** `risk-report` classifies four items CRITICAL —
`cor-integers-requiring-four-squares`, `ex-four-square-descent-for-thirteen`,
`ex-an-integer-that-genuinely-needs-four-squares`, and (on the A page)
the descent chain — and several HIGH. Those need an Alpha `risk_review` and an extra
proof-refuter at step 6; `--require-reviewed` is not run here because only Alpha
writes a `risk_review`.

### 4. Escalations and things a reader should look at first

1. **`finite_smoke` is empty on all 24 contract entries, and `gate-liveness` says so.**
   `node tools/gate-liveness.mjs --run frontier-18 --contracts <merged> --checklists
   <coverage>` reports `VACUOUS finite-smoke 0 checks (exit 0)` beside three live
   gates. This is finding **B1-3**, which Alpha adjudicated at step 3: the honest
   empty list was approved and the three proposed registry checks
   (`sum-of-k-squares-residues-mod-n`, `four-square-identity-sign-pattern`,
   `three-square-obstruction`) were routed to the owner and the engine as a tool
   change, explicitly not to a Beta. Nothing changed at step 5; the bounded searches
   that those checks would run are recorded in §2 above instead, and I am not
   claiming `finite-smoke` as a pass.
2. **`boundary-audit` flags two rows on
   `fs-four-square-representations-of-a-prime-are-essentially-unique` as
   `CONTRADICTED DISPOSITIONS`.** I read the item rather than reworded the rows. The
   detector matches `\bare equivalent\b` and fires on the phrase "are equivalent up
   to signs and order", which names an **equivalence relation between quadruples**,
   defined by the multiset criterion in [F1]; the claim itself is a universal
   statement over primes and contains no biconditional. Both rows now say that in
   those terms. If Alpha disagrees, the honest alternative is to mark both axes
   `checked` against step 2.1, not to change the mathematics.
3. **`risk-report` routes four CRITICAL items**, listed above. The two I would send a
   refuter at first are `lem-least-absolute-residue-quadruple-of-a-multiple`, whose
   $n=m$ exclusion is the subtlest argument on the page, and
   `cor-integers-requiring-four-squares`, whose positivity step 1.1 is an induction
   embedded in a contradiction proof.
4. **No boundary in §2 of the brief was crossed.** No item outside this batch's id set
   was edited; no published item was repaired, because none carries a claim,
   definition or citation I found to be unambiguously false; no needed item is
   missing; no scaffold item turned out to be false or unauthorable as stated. Nothing
   was deferred for want of a lemma that could have been written.
5. **B1-2 stays unbuilt, as recorded at step 3.** Conrad Theorem 5.1, the descent
   route to the two-square theorem for primes, remains available at low cost because
   `lem-least-absolute-remainder` is now on this page, but the second-proof rule needs
   a reciprocal sentence on the published `thm-fermat-two-square-theorem-for-primes`,
   which is outside this batch's write boundary. I did not reopen it.

### 5. Gates run at step 5, with the result quoted

From the repo root. Where the repository-wide gates report failures, every failure
was checked against this batch's 26 ids and none belongs to it; the other frontier-18
batches are authoring concurrently and their in-progress items account for all of
them.

```
node tools/tsx-run.mjs tools/reflow.mts <26 items>      -> nothing to reflow
node tools/tsx-run.mjs tools/precheck.mts <26 items>    -> 24 checked, 0 failing
node tools/validate-plan.mjs research/plan-spec.json    -> exit 0
node tools/content-policy.mjs research/frontier-18-batch-1.pages.json
    -> 26 scoped item(s), 0 error(s), 0 warning(s)
node tools/proof-contract.mjs <batch contract> --strict  -> 0 error(s), 0 warning(s), 24/24
node tools/citation-fidelity.mjs <batch contract>        -> 0 quote mismatches, 0 widening candidates
node tools/risk-report.mjs <batch contract>              -> 0 error(s), 24 routed
node tools/boundary-audit.mjs <batch contract>           -> 0 template clusters, 2 read candidates
node tools/finite-smoke.mjs <batch contract>             -> 0 error(s), 0 check(s) over 0/24  (B1-3)
node tools/coverage-checklist.mjs <batch coverage>       -> 61 harvested, 0 error(s), 0 warning(s)
   (identical with --require-destination)
node tools/url-sweep.mjs --coverage <batch coverage> --manifests <batch manifest>
    --out research/.b1-url-sweep.tmp.json --recover --fail-on-dead
    -> 4/4 live; 0 failed; 0 recoverable; 0 suspect
node tools/prosecheck.mjs <26 items> <both page files> --warnings
    -> 28 file(s) checked. 0 error(s), 0 warning(s).
       "OK - no positional claim contradicts the spec."
node tools/depcheck.mjs    -> repo FAIL; 0 errors and 0 warnings on this batch's ids
node tools/fwdcheck.mjs    -> repo FAIL; 0 findings on this batch's ids; no item here
                              declares forward_refs
node tools/extcheck.mjs    -> OK
node tools/citecheck.mjs   -> 33 warnings repo-wide, 0 on this batch's ids
node tools/rendercheck.mjs -> repo FAIL; 0 findings on this batch's ids (two
                              `multiline-display` errors of mine were fixed by putting
                              each `$$...$$` on one source line; the `\\[4pt]` TeX break
                              inside the aligned block is untouched and valid)
node tools/gate-liveness.mjs --run frontier-18 --contracts <merged> --checklists <coverage>
    -> live: proof-contract 24 items, coverage-checklist 61 results, precheck 5160 items;
       VACUOUS: finite-smoke 0 checks
```

Two prosecheck warnings were cleared by rewording, not by suppression: "a sum of four
of them" in `thm-lagrange-four-square-theorem` and "none of these four" in
`rem-sign-patterns-in-the-four-square-identity` both tripped `count-of-this-page`
although each was a count of mathematical objects; both sentences now say the same
thing without a bare numeral phrase.

**I did not run a judge.** No `verification.judge` block exists on any item here.
Step 7 is where the paired DeepSeek V4 Pro / Claude Opus 5 judge runs, after the
step-6 audit, and running one now would be exactly the waste the brief measures.

### 6. Page files

`library/number-theory/lagrange-four-square-theorem.md` lists the sixteen A-page
items in scaffold order and `examples: []`; the companion lists the ten B-page items
under `examples:` with `items: []`. Both are `status: draft`, so no published page
lists a draft item.

The A-page summary is exactly two prose paragraphs, 130 and 132 words, written last
from the items as they stand. Paragraph 1 names the declared dependencies the
development actually uses — division with remainder, divisibility and its linearity
and transitivity, congruence and its compatibility with arithmetic, the two-square
residue proposition at $a=-1$, the unit-square criterion at modulus $8$, integer
cancellation, the least-element principle, the existence of a prime divisor, and
induction. Paragraph 2 names the definitions and theorems developed here and their
progression. It counts nothing, ranks nothing, claims nothing about another page's
contents, and states no reading position. The B page has no authored body.

### 7. Honest confidence statement

**High confidence — the mathematics of the A page.** Every proof obligation maps to a
named dependency or an inline derivation recorded in the contract, and every
dependency's Statement was opened and quoted rather than recalled. The two arguments
most likely to be wrong are the two exclusions in
`lem-least-absolute-residue-quadruple-of-a-multiple`, and both are now separate
Statements with their own steps: $n=0$ closes through $m\mid p$ at steps 4.1 and 5.1,
$n=m$ through $a^2\equiv s^2\pmod{m^2}$ at steps 4.2 to 8.1. The even-modulus tie
that Conrad's route leaves open is handled there rather than assumed away, and
`ex-four-square-descent-for-thirteen` exercises it at $m=2$.

**High confidence — the arithmetic of the B page.** Every displayed number was
recomputed in this dispatch, including the intermediate quadruples and their norms;
38 explicit checks, no failures.

**High confidence — the citations.** 104 fact citations, each quote an exact
substring of the cited section, `citation-fidelity` reporting no widening candidate.
Where a dependency looked insufficient I added inline steps rather than widening a
restatement: `lem-int-cancellation` was added to one item's `deps` for exactly that
reason, and one unused edge was removed.

**Medium confidence — the provenance labels.** The five statements marked
`ai-altered` rather than `literature-derived` are each stated in a source in prose or
presupposed by a source's sketch, not as a numbered result; I chose the conservative
label in every case and Alpha should decide rather than inherit it. The one call a
careful reader could reasonably reverse is
`fs-four-square-representations-of-a-prime-are-essentially-unique`, marked
`ai-altered` because the false claim is the published two-square uniqueness theorem
with four coordinates. If Alpha reads it as `ai-generated` the item must be withdrawn,
not relabelled, since an `ai-generated` false statement is prohibited.

**Medium confidence — the boundary rows.** They are written against the final text
and no two share a rationale, but a `not_applicable` is a judgement about what the
statement contains, and eight of them turn on there being no set, family or index
range in the item. A reader who counts the induction set of
`prop-three-square-congruence-obstruction` as such a family would move that item's
`empty` row; I marked it `checked` for that reason.

**What I did NOT verify.**

* I ran no judge and claim no judge verdict, on any item.
* I did not run the level-wide gates — `audit-manifest`, `impact-audit`,
  `level-coverage --verify-current-context`, `pathcheck`, `spine-audit`. They read the
  whole level or a baseline diff and belong to steps 6 and 8–10. `merge-proof-contracts`
  was run over this batch's contract alone, to check it merges, not as the level merge.
* I did not verify that the three registry `finite-smoke` checks B1-3 proposes would
  pass, because they do not exist; the bounded searches in §2 are mine, run here, and
  are not a substitute for a gate.
* The bounded searches are bounded. The three-square characterisation was checked for
  $n<2000$ and Lagrange's theorem for $n<1500$; neither is a proof, and neither is
  cited as one anywhere in the items.
* I did not re-read Conrad §§2–4 and §7, Dummit §§9.2–9.3, or Crisman §14.1, and I
  claim nothing about them; they are outside the range declared in the coverage file.
* I did not check whether another frontier-18 batch minted any of these 26 ids.
  `content-policy` catches a repeated id across batch manifests at the whole-level run,
  and the other batches were still writing while this one authored.
* `library/number-theory/_pathway.md` needs this A page placed in a part before the
  page can publish. That is `pathway-sync.mjs` at step 10 and I did not touch it.
