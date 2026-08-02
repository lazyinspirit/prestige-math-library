# Wave 0, number-theory batch — Audit-Beta findings (A1/A2)

Audit-Beta (Opus 5, high effort). Pairs owned: `divisibility-gcd-and-bezout`
(A, 26 items) and `divisibility-gcd-and-bezout-examples` (B, 9 items). Scope is
the 35 items of `research/audit/wave0-number-theory.pages.json`; nothing outside
those three namespaced files was written.

Date: 2026-08-02.

## 1. Coverage

- **Every item read from disk in full**: 35/35 (frontmatter, Statement or
  Definition, Facts & Assumptions, Proof/Verification/Refutation/Counterexample,
  Remarks), plus both page composition files.
- **Every proof step read**: 246 numbered steps across the 29 proof-bearing
  items, each checked against the facts and earlier steps it cites.
- **Every dependency citation read semantically**: 353 fact→target citations
  were checked against the target item's own text on disk. The 56 distinct
  targets include 30 outside the batch (foundations `def-natural-numbers`,
  `thm-recursion`, `thm-induction-principle`, `thm-well-ordering-principle`,
  `lem-nat-*`, the ℤ construction `def-integers`/`def-int-operations`/
  `def-int-order`/`thm-int-comm-ring`/`thm-int-ordered-ring`/
  `thm-division-algorithm-in-z`/`lem-int-cancellation`, and the abstract-algebra
  targets `def-group`, `def-subgroup`, `lem-subgroup-criterion`,
  `def-generated-subgroup`, `lem-cyclic-subgroup-is-the-set-of-powers`,
  `def-group-power`, `lem-intersection-of-subgroups`,
  `lem-monoid-units-form-a-group`, `def-invertible-element`,
  `def-semigroup-and-monoid`, `def-binary-operation`, `def-identity-element`,
  `def-equivalence-relation`, `lem-equivalence-classes-partition`). Every one of
  them was opened and its Statement/Definition compared with the restatement in
  the citing fact.
- **No exceptions.** Nothing in either pair was skipped.

**Result: no fatal defect was found.** No false statement, no unlicensed
inference, no missing hypothesis, no invalid witness, and no citation that takes
more than, or other than, its target gives. The four findings below are
nonfatal; one of them nevertheless blocks a mechanical gate and needs a
one-token decision at A3.

## 2. Citation-precision audit

Mechanical check across all 35 items: **every wikilink appearing in a `[L#]`
fact is declared in that item's `deps`** — zero undeclared dependencies.

Every fact restatement was compared clause by clause with its target. All 353
were faithful in domain, quantifiers, hypotheses, direction and conclusion. The
weakenings that occur are all genuine weakenings (the cited item gives at least
what the fact claims), never inflations:

- `lem-gcd-basic-values` [L4] and `thm-bezout-identity` [L8] quote
  `lem-divisor-bound` as "$d \le |a|$" where the target proves the stronger
  "$|d| \le |a|$" and states "$d \le |a|$" explicitly as its consequence clause.
  Correct.
- `lem-subgroups-of-z-are-cyclic` [L5] and `thm-gcd-generates-the-subgroup` [L3]
  restate `def-subgroup` and `lem-subgroup-criterion`; both restatements are
  covered by the targets, including the one-step test $gh^{-1} \in H$.
- `cor-extended-euclidean-bezout-coefficients` [L5] reproduces the descent of
  `thm-euclidean-algorithm` including its stalled branch; the target's $\Phi$ has
  the second clause at $v \le 0$ and the fact narrows it to $b_k = 0$, which is
  legitimate because the target's claim 1 gives $b_k \ge 0$.
- Both "why this is proved here and not cited" Remarks were checked against
  their targets and are accurate: `ex-subgroups-of-the-integers` really does say
  only "$n\mathbb{Z}$ for **some** $n \ge 0$" (the spine lemma's stronger
  uniqueness claim is genuinely extra), and `ex-integers-under-addition` really
  does record $\mathbb{Z}^{\times} = \{1,-1\}$.

### Finding C1 (nonfatal, but it blocks `proof-contract --strict`) — four facts are declared and never cited

| item | fact | targets |
|---|---|---|
| `cor-common-divisor-divides-gcd` | `[L7]` order is total, antisymmetric, transitive | `thm-int-ordered-ring`, `def-int-order` |
| `ex-bezout-coefficients-not-unique` | `[L2]` Bézout existence + extended descent | `thm-bezout-identity`, `cor-extended-euclidean-bezout-coefficients` |
| `ex-gcd-with-zero` | `[L2]` order is total, antisymmetric, transitive | `thm-int-ordered-ring`, `def-int-order` |
| `fs-gcd-times-lcm-equals-the-product` | `[L7]` cancellation | `lem-int-cancellation` |

No numbered step tags any of these four labels. Each is mathematically true and
correctly stated; the defect is purely that the fact is inert. On its own this
is a "minor citational quirk" under the triage rule and would be recorded and
left alone — **except** that `tools/proof-contract.mjs` requires every
fact→target pair to carry a contract entry (`citation-fact-uncontracted`) *and*
requires that entry's `uses` list to be non-empty (`citation-uses`). An inert
fact can therefore not be contracted at all, so the wave's D1 contract gate
cannot pass while the text is unchanged. The contract file I wrote records these
seven citations with `uses: []`, which is exactly the 7 errors the self-check
reports (§4).

**Proposed repair (class: citation-precision), smallest form, one line each:**

- `cor-common-divisor-divides-gcd` — delete `[L7]`. Nothing uses order axioms;
  step 3.2 concludes $d = |d| = |g| = g$ from `[L5]` and `[L6]` alone.
- `ex-gcd-with-zero` — delete `[L2]`. Same situation.
- `fs-gcd-times-lcm-equals-the-product` — **cite** `[L7]` in step 2.1 rather than
  delete it: that step passes from $1 \cdot \operatorname{lcm}(-2,3) = 6$ to
  $\operatorname{lcm}(-2,3) = 6$, which is cancellation of the nonzero factor
  $1$ (equally $x \cdot 1 = x$, already `[L1]`). Adding `L7` to the step tag is a
  one-token change and no claim moves.
- `ex-bezout-coefficients-not-unique` — **cite** `[L2]` in step 1.1 rather than
  delete it. The Given supplies a solution $(x_0,y_0)$, so the verification does
  not formally need existence; but the Example's own opening sentence rests on
  `thm-bezout-identity`, and the honest fix is to note in step 1.1 that such a
  pair exists by `[L2]`. If A3 prefers no prose change at all, deleting `[L2]`
  is equally correct, because the two targets stay linked from the Example body.

Both routes are within the delegated citation-precision class. Deleting a fact
label never renumbers anything here (both are the last labels in their blocks).
I have applied nothing.

### Finding C2 (nonfatal, no repair proposed) — one undeclared bridge fact

`thm-gcd-generates-the-subgroup` step 5.1 argues "$d \ge 0$ and $\ell \ge 0$, so
each is $\iota(n)$ for a natural $n$". That bridge is the image characterisation
of $\iota$ (`lem-nat-embeds-int`), which is neither a declared `[L#]` fact nor in
this item's `deps`; `[L2]` supplies only the classification of subgroups, whose
own statement mentions $\iota$. A competent reader closes it in well under 30
seconds, so it is nonfatal by the standing rule. Recording only; adding
`lem-nat-embeds-int` to `deps` and to `[L2]` would be tidier but is optional.

### Finding C3 (nonfatal, no repair proposed) — three redundant co-citations

`cor-gcd-quotients-coprime` [L5], `fs-gcd-times-lcm-equals-the-product` [L6] and
`ex-gcd-and-lcm-as-subgroups-of-z` [L5] each cite `lem-int-abs-properties`
alongside `def-int-abs` for the clause "$|x| = x$ when $x \ge 0$", which is the
first clause of the *definition*, not of the lemma. The lemma is a true and
declared dependency in each case, so nothing is over-claimed; it is simply not
the source of that clause. Minor citational quirk, left alone.

### Finding C4 (nonfatal, recorded) — page prose carries counts

Both page files state counts: the A page says "Twenty-six items make up this
page: six definitions, twelve lemmas, four theorems and four corollaries, ten of
them marked as landmarks", and the B page says "Six examples, two
counterexamples and one false statement". `prosecheck` reports these as
`count-in-prose` / `count-of-this-page` warnings, and SCHEMA §6 bans counts in a
summary. **I verified every count and all are accurate** (6 definitions, 12
lemmas, 4 theorems, 4 corollaries, 26 items, exactly 10 with
`landmark: true`; 6 + 2 + 1 = 9 on the B page). These are legacy pages that
predate the two-paragraph page-summary contract, and the A page's summary is
also much longer than that contract allows. Per triage this is recorded, not
chased; it is a reading-surface question for the owner queue, not a
mathematical defect.

## 3. Provenance determination (A1)

`research/audit/wave0-number-theory.provenance.jsonl` — 35 rows, one per scoped
item, verified to cover the manifest exactly.

| `provenance.statement` | evidence | count |
|---|---|---|
| `literature-derived` | `exact-source` | 1 |
| `ai-altered` | `semantic-source` | 33 |
| `ai-altered` | `established-knowledge` | 1 |

| `provenance.proof` | count |
|---|---|
| `ai-altered` | 14 |
| `ai-generated` | 15 |
| `not-applicable` | 6 (the definitions) |

**No item is `ai-generated` in its statement**, and that is an evidence-based
conclusion rather than a default: this page is elementary integer arithmetic and
every statement on it is a located or plainly recoverable form of an established
result. Applied under the owner's 2026-08-02 rule (tag `ai-generated` only when
certain a claim is genuinely AI-invented). Nothing here is a bespoke bridge
claim, and the only locally chosen objects are small numerical witnesses for
sourced general statements (recorded item by item in the rationales).

Every URL in the ledger was fetched and returned HTTP 200 during this audit.
Sources used: Wikipedia (Absolute value, Divisor, Euclidean division,
Divisibility (ring theory), Unit (ring theory), Greatest common divisor, Least
common multiple, Bézout's identity, Euclidean algorithm, Extended Euclidean
algorithm, Coprime integers, Euclid's lemma, Cyclic group, Diophantine equation,
Fibonacci sequence), Wolfram MathWorld (Euclidean algorithm), and Millersville
University number-theory lecture notes (greatest-integer function). ProofWiki
was found by search for two statements but returns HTTP 403 to the fetcher, so
no ProofWiki URL was recorded.

Convention deltas worth Alpha's eye, all recorded in the rationales:

- **gcd sign and gcd(0,0).** The library's `gcd` is defined on all integer pairs,
  is nonnegative by construction, and fixes $\gcd(0,0) = 0$. Wikipedia agrees
  ("gcd(0, 0) is commonly defined as 0. This preserves the usual identities");
  the library goes further and argues the value is *forced* by the scaling
  identity, which is honest — see the escalation note E2 below.
- **Scaling.** Wikipedia states the distributive property only for a positive
  multiplier ($\gcd(ma,mb) = m\gcd(a,b)$). `lem-gcd-scaling` extends it to every
  integer with $|c|$, including $c = 0$; that extension is the delta.
- **`lcm` at a zero argument.** Wikipedia records $\operatorname{lcm}(a,0)=0$ as
  "some authors"; the library adopts it and, correctly, calls it forced rather
  than conventional, since $0$ is the only common multiple there.
- **$0 \mid 0$.** Wikipedia records two conventions for $m \mid 0$; the library
  takes the more widely adopted one under which $0 \mid 0$ holds.
- **Subgroups of $\mathbb{Z}$.** Wikipedia's Cyclic group article says "All
  subgroups of Z are of the form ⟨m⟩ = mZ, with m a positive integer", which
  omits the trivial subgroup. `lem-subgroups-of-z-are-cyclic` states the correct
  and stronger form (generator a natural number, unique), and its Remarks already
  spell out the delta from the weaker published example.
- **Domain.** Every absolute-value clause is sourced for $\mathbb{R}$ and is used
  here over $\mathbb{Z}$, an ordered ring rather than an ordered field; the item
  itself says so and proves the clauses from the ring order.

### Escalations to Alpha

- **E1 — one `established-knowledge` row needs Alpha's independent concurrence**
  (without it the row falls back and the item must be re-decided):
  `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers`. Two established
  results, neither located verbatim behind an HTTP-200 URL: consecutive
  Fibonacci numbers are coprime (a special case of
  $\gcd(F_m,F_n) = F_{\gcd(m,n)}$; the clean statements I found are on ProofWiki,
  which 403s), and the exact division count. Wikipedia and MathWorld both record
  that consecutive Fibonacci pairs are the worst case for the Euclidean
  algorithm (Lamé, 1844), and the standard content of that analysis is precisely
  "$(F_{n+2},F_{n+1})$ takes exactly $n$ divisions", which is the item's claim at
  $n = m+1$; the quotient pattern (a run of 1s, final quotient 2) is the routine
  detail of the same argument, and the item proves all of it by induction and
  explicitly disclaims Lamé's worst-case theorem. I judge it recoverable, not
  invented — hence `ai-altered` — but the tag is Alpha's to confirm.
- **E2 — proof-component label for two definitions carrying real arguments.**
  `def-common-divisor-and-gcd` and `def-lcm` (and to a lesser degree
  `def-int-abs`) contain substantive inline well-definedness/existence arguments
  inside the Definition section, but have no `## Proof` section and carry
  `verification.precheck: n/a`. I labelled `provenance.proof: not-applicable`,
  reading SCHEMA's proof component as "the local Proof, or Verification/
  Refutation". If Alpha reads those inline arguments as a proof component, the
  right label for the two of them is `ai-generated`. Flagging rather than
  deciding.
- **E3 — one bundled clause without a located source.**
  `lem-coprime-divides-product` clause 1 is the sourced generalisation of
  Euclid's lemma, verbatim. Clause 2 ($a \mid c$, $b \mid c$, $\gcd(a,b)=1
  \Rightarrow ab \mid c$) is textbook-standard but did not surface verbatim on
  either the Euclid's lemma or the Coprime integers page; it is proved here from
  clause 1 in two steps. I kept the row at `semantic-source` on the strength of
  clause 1 and recorded the gap in the rationale; Alpha may prefer
  `established-knowledge`.

## 4. Proof contracts (A2.3)

`research/audit/wave0-number-theory.proof-contracts.json`, version 1, level
`audit-wave0-number-theory`. Scope: the 29 proof-bearing items (all 35 minus the
6 definitions). Contents: **353 citations** (each with the exact clause quoted
from the target's `Statement`/`Definition`/`Example`, machine-verified to occur
there, plus the complete list of steps citing that fact), **246 step entries**
covering every numbered step exactly once with its stated inputs, and **232
boundary-worksheet entries** — all eight standard cases disposed of for each of
the 29 items, `checked` with an anchored step or statement reference, or
`not_applicable` with a specific reason.

Self-check:

```
node tools/proof-contract.mjs research/audit/wave0-number-theory.proof-contracts.json --strict
→ 7 error(s), 0 warning(s), 29/29 item(s) checked
```

**All seven errors are Finding C1** and nothing else — the four inert facts,
counted per target link. Every other citation, quote, step mapping and boundary
entry validates. The file will be clean the moment C1's one-line repairs are
approved and applied at A4.

`risk-report` on this contract puts **28 of the 29 items at high or critical**
risk (22 critical, 6 high; the scorer weights dependency count and step count
heavily, and these proofs cite 5–11 facts each). Every one of them therefore
needs an Alpha `risk_review` before the wave can close. I left `risk_review`
unset throughout: it is Alpha's disposition to record, and I must not
self-certify. Highest scores: `thm-euclidean-algorithm` (18),
`ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` (15),
`cor-extended-euclidean-bezout-coefficients` (14),
`lem-subgroups-of-z-are-cyclic` (14).

## 5. Things I checked that turned out to be fine

Recorded so the wave's later stages need not redo them.

- **The two induction/recursion-heavy proofs.** `thm-euclidean-algorithm` builds
  the descent through `thm-recursion` on $\mathbb{Z} \times \mathbb{Z}$, proves
  $\Phi$ total and single-valued first (step 1.1), carries $b_k \ge 0$ and
  $\gcd(a_k,b_k) = \gcd(a,b)$ as a joint invariant, and gets termination by
  pulling the second coordinates back along $\iota$ into $\mathbb{N}$ and
  well-ordering *there* — not by an illegitimate appeal to well-ordering in
  $\mathbb{Z}$. The stalled branch $b_k = 0$ is handled, $N \ne 0$ is proved from
  $b_0 = b > 0$, and $N = \sigma(M)$ is legitimate.
  `cor-extended-euclidean-bezout-coefficients` runs the same descent on
  $\mathbb{Z}^6$ and its step 5.1 uses the *uniqueness* half of the recursion
  theorem correctly.
- **The Fibonacci count.** The shift argument in step 5.1 is valid: the sequence
  $k \mapsto R'(k+1)$ satisfies the same recursion with the same start, so
  recursion-uniqueness identifies it with the descent from
  $(F_{m+3},F_{m+2})$, giving $N' = (m+1)+1$ and quotients $1$ repeated $m+1$
  times then $2$. The base case $m = 0$ at $(F_3,F_2) = (2,1)$ gives the single
  division $2 = 2 \cdot 1 + 0$, and the item is explicit that "quotient 1 at
  every step" would be false and that the indexing $F_0 = 0$ is load-bearing.
- **Every numeral.** $2 \cdot 462 + 147 = 1071$; $3 \cdot 147 + 21 = 462$;
  $7 \cdot 21 = 147$; $7 \cdot 462 - 3 \cdot 1071 = 3234 - 3213 = 21$;
  $21 \cdot 51 = 1071$ and $21 \cdot 22 = 462$; $1071 \cdot 19 - 462 \cdot 44 =
  20349 - 20328 = 21$; $6 \cdot 36 = 216 = |12 \cdot 18|$;
  $12 \cdot (-1) + 18 = 6$; $6 \cdot (-2) + 15 = 3$; $4 \cdot 9 = 36 = 6 \cdot 6$
  with $4 = 0 \cdot 6 + 4$ and $9 = 1 \cdot 6 + 3$; $\gcd(6,4) = 2$,
  $\gcd(6,9) = 3$; $(-2) \cdot 3 = -6$ with $|-6| = 6$. All correct.
- **`ex-gcd-with-zero` is not circular.** Its step 1.2 derives $\gcd(0,0) = 0$ by
  instantiating `lem-gcd-scaling`, and that lemma's own proof uses the
  convention. The item is careful about this: the derivation is a valid
  deduction from a proved theorem, and what it establishes is that *no other
  value is compatible with the identity* — which is what both the item and
  `def-common-divisor-and-gcd` claim, and no more.
  `def-common-divisor-and-gcd` separately and correctly labels the product
  formula a check rather than a second forcing argument.
- **Hypotheses that could have been quietly dropped, and were not.**
  $a \ne 0$ in `lem-divisor-bound`; "not both zero" in `thm-bezout-identity`
  (with $I = \{0\}$ at the excluded pair, stated); $b > 0$ in
  `thm-euclidean-algorithm` (with the $b < 0$ reduction recorded in the Remarks
  rather than smuggled into the statement); $d \ne 0$ in
  `cor-gcd-quotients-coprime`; both arguments nonzero in
  `ex-bezout-coefficients-not-unique` (with the collapsed $b = 0$ family
  described in its Remarks).
- **`lem-gcd-euclidean-step` really does avoid an inequality on $r$**, which is
  what lets the Fibonacci example apply it at $q = 1$; and its step 1.3 checks
  that the two pairs enter the $(0,0)$ convention branch together, which is the
  detail an unwary proof would miss.
- **No published-claim decay observed.** The forward-looking claims on these two
  pages ("primes, Euclid's lemma and unique factorisation are not proved here",
  "no worst-case bound is proved anywhere here", "Lamé's theorem is not
  available at this point in the reading order") were checked against the
  batch's own content and remain true of it. Whether a later level has since
  built the primes page is outside this batch's scope and is left to the wave's
  cross-level sweep.

## 6. Repairs proposed (nothing applied)

| # | class | item(s) | change |
|---|---|---|---|
| R1 | citation-precision | `cor-common-divisor-divides-gcd` | delete the inert fact `[L7]` |
| R2 | citation-precision | `ex-gcd-with-zero` | delete the inert fact `[L2]` |
| R3 | citation-precision | `fs-gcd-times-lcm-equals-the-product` | add `L7` to step 2.1's citation tag (cancellation of the nonzero factor $1$) |
| R4 | citation-precision | `ex-bezout-coefficients-not-unique` | cite `[L2]` in step 1.1 for the existence of the Bézout pair, or delete `[L2]` |
| R5 | provenance retag | all 35 | write the `provenance` block from the ledger; add the ledger URL to `sources.references` where it is not already present; no legacy `authorship` line exists on any of these 35 items, so decision D5 is a no-op here |

No unambiguous falsehood was found, so no class-(a) repair is proposed. No
debatable restatement is proposed. Nothing in the owner-only classes (deletion,
id change, reading-order change) arises from the mathematics; the only candidate
for the A10 owner queue is Finding C4, and only if the owner wants legacy page
summaries brought under the current two-paragraph contract.

## 7. A4 — repairs applied (2026-08-02, after A3 approval)

Authorised by `research/audit/wave0-number-theory.A3.md`. The orchestrator took
the pre-A4 touch snapshot; I did not run `touchlog`. Five items changed in their
text, thirty-four retagged. Nothing was renamed or removed by id.

### 7.1 Text repairs

**A4-1 (R1, citation-precision) — `cor-common-divisor-divides-gcd`**
Old (Facts & Assumptions):
`[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).`
New: the fact is deleted. `L7` was the last label, so nothing renumbers. `deps`
loses `def-int-order` and `thm-int-ordered-ring`, which after the deletion appear
nowhere else in the item.

**A4-2 (R2, citation-precision) — `ex-bezout-coefficients-not-unique`**
Old:
`[L2] For $(a,b) \ne (0,0)$ there are integers $x, y$ with $ax + by = \gcd(a,b)$ ([[thm-bezout-identity]]), and the extended Euclidean descent computes such a pair ([[cor-extended-euclidean-bezout-coefficients]]).`
New: the fact is deleted; the labels now run L1, L3, …, L8 with L2 absent, which
`precheck` accepts (no step cited L2, so no step tag changes). `deps` loses
`cor-extended-euclidean-bezout-coefficients`, which no longer appears anywhere in
the item; `thm-bezout-identity` **stays** in `deps` because the Example's opening
sentence still links it.

**A4-3 (R4, citation-precision, delegated call) — `ex-gcd-with-zero`**
Old:
`[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).`
New: deleted. **My call under the A3 delegation, and the reasoning:** no step uses
totality, antisymmetry or transitivity. Step 1.1 is `[L3, L4, L6]`; 1.2 is ring
arithmetic and the absolute value; 1.3 instantiates the scaling identity; 2.1 adds
$-g$ to both sides of an *equation*, not an inequality; 3.1 combines earlier
steps; 4.1 needs "$0 \ge 0$", which `[L4]` already gives via
$\gcd(0,0) = 0$ together with $\gcd(u,v) \ge 0$ — and which `[L2]` could not have
supplied anyway, since reflexivity is not among the three properties it lists.
Tagging it at step 1.1 would therefore have asserted a use that does not occur.
`deps` loses `def-int-order` and `thm-int-ordered-ring`.

**A4-4 (R3, citation-precision) — `fs-gcd-times-lcm-equals-the-product`**
Old step 2.1 (tail):
`… this reads $1 \cdot \operatorname{lcm}(-2,3) = 6$, so $\operatorname{lcm}(-2,3) = 6$. [step 1.1, step 1.2, L1, L3]`
New:
`… this reads $1 \cdot \operatorname{lcm}(-2,3) = 6$, so $\operatorname{lcm}(-2,3) = 6$ by cancellation of the nonzero factor $1$. [step 1.1, step 1.2, L1, L3, L7]`
Six added words name the move the added citation licenses; no claim moves.

**A4-5 (C2, citation-precision) — `thm-gcd-generates-the-subgroup`**
New fact appended after `[L10]`:
`[L11] The image of $\iota : \mathbb{N} \to \mathbb{Z}$ is exactly the set of nonnegative integers, so every $x \ge 0$ is $\iota(n)$ for a unique $n \in \mathbb{N}$ ([[lem-nat-embeds-int]]).`
Step 5.1 now reads "… so each is $\iota(n)$ for a natural $n$ **by [L11]**, and by
[L2] …" with tag `[step 4.1, L2, L7, L9, L11]`. `deps` gains
`lem-nat-embeds-int`. Elementary derivation is not needed: the fact is the
verbatim image clause of `lem-nat-embeds-int`'s Statement, quoted in the contract.

### 7.2 Dependency-metadata changes (for `impact-audit`)

Three items lost a `deps` entry and one gained one. **In every case the item's
transitive dependency closure is unchanged**, so no page-level Prerequisites list
and no downstream cone moves:

| item | removed | still reachable via |
|---|---|---|
| `cor-common-divisor-divides-gcd` | `def-int-order`, `thm-int-ordered-ring` | `def-int-abs` (which lists both) |
| `ex-gcd-with-zero` | `def-int-order`, `thm-int-ordered-ring` | `def-int-abs` |
| `ex-bezout-coefficients-not-unique` | `cor-extended-euclidean-bezout-coefficients` | `ex-euclidean-algorithm-worked` (which lists it) |
| `thm-gcd-generates-the-subgroup` | *(added)* `lem-nat-embeds-int` | — new direct edge; already reachable transitively |

No Statement, Definition, title or Remark changed anywhere, so nothing an item
*provides* has moved.

### 7.3 Verification stamps

Per the A3 protocol, the five text-changed items had `verification.judge`
(all `z-ai/glm-5.2`, 2026-07-28) and `verification.audited` (2026-07-28) deleted;
each now carries `verification: precheck: pass` alone and waits for the A6
independent reading to write `verification.verified` with
`scope: published-audit`. The retag-only items keep their stamps untouched, as
the protocol requires.

**One judgment call for Alpha to confirm or reverse.**
`fs-gcd-times-lcm-equals-the-product` had no `audited` line; its publication gate
was an older delegated block —
`verified: {model: claude-sonnet-5, verdict: certify, date: 2026-07-29, scope: page, delegated_by: owner}`.
A3 named only `judge` and `audited`, but that block certifies text I have now
changed, and leaving a stale certification in place is the exact failure §9
exists to prevent, so I removed it as well. Removal is the conservative
direction (it claims less, not more), and the block is one `git show` away if
Alpha decides the tag-plus-six-words edit did not invalidate it.

No item carried a legacy one-axis `authorship` line, so decision D5 is a
confirmed no-op for this batch.

### 7.4 Provenance retags

34 of 35 applied from the ledger, as a `provenance:` block placed directly after
`origin:`, matching the house format. `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers`
is **not** tagged, per A3's hold pending Alpha's E1 concurrence. Twelve items
gained a `sources.references` entry they did not already carry (the
Millersville notes for `lem-int-bounded-above-has-greatest`; Wikipedia Divisor
and Unit for `lem-associates-characterisation`; the GCD page for
`thm-bezout-identity` and `thm-gcd-lcm-product`; Coprime integers for
`lem-coprime-divides-product`; Diophantine equation for
`ex-bezout-coefficients-not-unique`; Least common multiple for
`thm-gcd-generates-the-subgroup`; Bézout's identity and Least common multiple
for `ex-gcd-and-lcm-as-subgroups-of-z`; Coprime integers for
`cex-divides-a-product-without-dividing-a-factor`; Divisor for
`cex-common-divisors-of-zero-have-no-greatest-element`; Greatest common divisor
for `fs-gcd-times-lcm-equals-the-product`). Every added URL is one this audit
fetched at HTTP 200.

### 7.5 Gate results after A4

| gate | result |
|---|---|
| `reflow.mts` (5 changed items) | reflowed, canonical form adopted |
| `precheck.mts` (5 changed items) | **5 checked, 0 failing — all clean** |
| `proof-contract.mjs --strict` | **0 errors, 0 warnings, 29/29 checked** (was 7 errors) |
| `content-policy.mjs --audit --ledger` | 35 scoped, 5 errors, 0 warnings — **all five on the held Fibonacci item** (2 provenance-missing, 2 ledger-mismatch, 1 `audit-ledger-alpha-concurrence`), which is the designed state of an E1 hold |
| `citecheck.mjs` (5 changed items) | exit 0, 1 heuristic warning — triaged below |
| `rendercheck.mjs` (5 changed items) | OK, all math parses under real KaTeX |
| `extcheck.mjs`, `fwdcheck.mjs` (5 changed items) | OK; no finding touches this batch |
| `depcheck.mjs` (corpus) | 24 `published-unaudited`, **5 of them mine** (the five stamp deletions above); no other error class anywhere in the corpus. Transient by design until A6 |

The rebuilt contract is 348 citations (was 353: six inert links removed, one new
`L11 → lem-nat-embeds-int` added), 246 step entries and 232 boundary entries over
the same 29 items; every quote was re-verified against the final on-disk text.

**citecheck triage.** Deleting `[L2]` from `ex-gcd-with-zero` surfaced one
`add-order` warning at step 2.1 ("adding $-g$ to both sides"). This is
citecheck's own case (c), *the phrase used but the move not made*: step 2.1 adds
$-g$ to both sides of the **equation** $g = g + g$, which is the additive-inverse
and identity axioms of `[L1]`, not translation invariance of the order. Left
alone, per the tool's standing instruction never to silence a warning by adding a
dependency the proof does not use.

### 7.6 Still open after A4

- **E1** — the Fibonacci item's `established-knowledge` tag and its whole
  provenance block, held for Alpha at A6.
- **E2, E3** — untouched, as instructed.
- **C3** — declined at A3; the three redundant co-citations stand.
- **C4** — in the A10 owner queue.
- Five items need `verification.verified` from the A6 independent reading, and
  28 of 29 proof-bearing items still need an Alpha `risk_review`.

## 8. Checkpoint

Context well under the 60% threshold at completion; no compaction occurred.
Substage: **A1, A2 and A4 complete.** All three namespaced files are current
(`.provenance.jsonl`, `.proof-contracts.json`, `.findings.md`), and the A4 edits
are applied to 5 item texts plus 34 provenance retags under `items/`. Nothing
under `library/` was touched, and no item outside this batch's manifest was
edited. Next action belongs to A6: certify the five repairs through an
independent reader (no author certifies its own), write
`verification.verified` with `scope: published-audit` and
`delegated_by: owner` on those five, decide E1/E2/E3, record the `risk_review`
dispositions, and run `impact-audit` over the four dependency-metadata changes
in §7.2 (each expected to be a no-op disposition, since no transitive closure
moved).
