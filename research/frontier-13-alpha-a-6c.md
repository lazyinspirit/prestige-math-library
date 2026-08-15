# frontier-13 — Lead Alpha, step 6c: cross-batch and cross-level citation audit

**Alpha:** Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 1,000,000-token window.
**Scope:** the whole run — 463 items, 22 pages, 7 batches. Steps 4, 6c and 8 are
the lead Alpha's alone; groups B and C did not participate.
**Date:** 2026-08-15. No blockers. No permission prompt raised by me or by any
subagent I dispatched.

**22 findings adjudicated: 6 `confirmed_fatal`, 16 `confirmed_nonfatal`, 0
`false_positive`. 24 items repaired** — 22 carrying a finding, plus one consumer
alignment and one contract-driven consumer fix. Both remaining owed items are closed. The
74 `risk_review` dispositions group B left open are written. All repo-wide gates
pass.

---

## 1. What I actually opened

The report must not claim a verdict over citations nobody read, so the coverage is
stated separately from the conclusions.

I built the run's citation surface mechanically first
(`research/frontier-13-alpha-a-6c-surface.mjs`): for all 463 items, parse the
`Facts & Assumptions` section into `[F#]/[A#]/[L#]` facts, resolve each fact's
wikilinks, classify each cited id as in-run or published, and record which
numbered steps cite the fact. A fact cited by at least one numbered step is
**load-bearing**.

| | count |
|---|---:|
| fact→citation edges | 1,376 |
| cited item is **published** | 675 — **649 load-bearing** |
| cited item is in-run | 698 |
| cited id not on disk | **0** |
| distinct published targets | **302** |

**649 load-bearing published citations across 302 distinct published targets.**
That is the cross-level surface, and it was covered twice:

- **My own read: 38 targets / 241 edges.** I read these grouped by cited target —
  the published Statement once as ground truth, then every restatement of it —
  which is the right shape for this audit and is why the fan-in ordering matters
  (`lem-order-characterisation` alone carries 18 restatements).
- **Eight read-only refuter clusters: 302 targets / 649 edges, none duplicated.**
  Partitioned by cited target and verified to cover the surface exactly
  (`research/frontier-13-alpha-a-6c-clusters.mjs`; manifest at
  `research/frontier-13-refuters/_clusters-6c.json`). GPT 5.6 Sol,
  `--sandbox read-only`, `xhigh`, explicit 1,000,000-token window, per the model
  table. Every cluster reported opening every assigned target's full Statement
  and checking all 81-82 of its edges.

Beyond that I opened, in full and on both sides, every item named in a finding
below — the citing item and the cited item — before recording any verdict.

**A note on the mechanical screen, because it would have misled.** I also wrote a
hypothesis-drop detector over the same surface. It flagged **321 of 649 edges**.
Reading them showed the signal was prose matching — `distinct`, `free`,
`positive`, `normal`, `exact` occurring in ordinary sentences — not dropped
hypotheses. I report it as a screen that produced candidates, never as a count of
defects, and every finding below comes from reading rather than from the detector.

---

## 2. Cross-batch citations — the zero-seam property survived

The run was batched for zero cross-pair seams. I re-ran the **standing check** —
resolve every dependency to its home page in `library/**` and require that page to
lie in the pair's declared `requires` closure, which is what `undeclared-prereq`
means, not the weaker "is this dep published":

```
463 items, 1534 declared deps
out_of_closure 0    cross_pair 0    b_leaf 0    unresolved 0
```

The property survived authoring and two rounds of repair, including the
dependencies added during 6b repairs and the six I added at 6c. Each of those six
(`thm-gcd-lcm-product`, `thm-order-of-element-in-direct-product`,
`lem-span-is-the-set-of-linear-combinations` ×2,
`def-characteristic-polynomial-of-an-operator`) was closure-verified against its
page **before** I wrote it in.

*Method note, since my first attempt got this wrong:* resolving home pages from
`plan-spec.json` leaves 35 items unresolved, because the spec's `items` arrays are
not the home map. The home map is `library/**/*.md` (`items:` and `examples:`),
4,641 published items. My first run reported 35 false "unresolved" from that
mistake; the number above is from the corrected map.

---

## 3. The six confirmed fatal findings

### F1 · `prop-carmichael-function-as-maximal-order` `[L4]` → `def-lcm`
### F2 · `thm-carmichael-function-formula` `[L4]` → `def-lcm`

**Enlarged domain, load-bearing, and in F2 the Statement itself.** `def-lcm`
defines only the binary `lcm(a,b)`, and its Remark says so in as many words:
"**Two arguments only.** As with `gcd`, no least common multiple of a longer list
is defined on this page." Both items apply an lcm to an arbitrary finite list of
cyclic-factor orders — F1 at steps 1.2 and 2.1, F2 at steps 1.2 and 2.1 — and F2's
**Statement** writes `\operatorname{lcm}_{i<r}\lambda(q_i^{e_i})`, a notation the
library nowhere defines. I confirmed no other library item supplies an $n$-ary
lcm, and that `thm-order-of-element-in-direct-product` is binary too.

**Repaired.** F2's Statement now *defines* the iterated lcm from the binary
operation by recursion (`lcm_{i<0}:=1`, `lcm_{i<s+1}a_i:=lcm(lcm_{i<s}a_i,a_s)`),
so the notation is well-defined on the page and the empty value at $n=1$ is a case
of the recursion rather than a convention. In both items `[L4]` now states the
binary definition faithfully, a new `[L5]` cites `thm-gcd-lcm-product` clause 1
for the divisibility form the proof actually needs, and the step carries the
induction on $s$ explicitly. F1 additionally gained `[L6]`
(`thm-order-of-element-in-direct-product`) so step 2.1 gets the tuple's order by
iterating the binary theorem instead of asserting the list form.

### F3 · `thm-weighted-walks-are-entries-of-transfer-matrix-powers` `[L3]` → `thm-ring-matrix-arithmetic-laws`

**An invented clause.** `[L3]` read "Matrix multiplication is associative and
$A^0=I$." The cited theorem states associativity, the identity laws,
distributivity and the transpose laws — and **no** $A^0$ clause. Step 1.1's base
case rested entirely on the invented half. I checked further: **no library item
defines matrix powers at all**, so `$A^n$` was undefined notation throughout.

**Repaired.** The Statement now fixes the recursion `$A^0:=I_p$`,
`$A^{n+1}:=A^nA$` and says plainly that the cited laws supply the product and the
identity but no power notation. `[L3]` is restated faithfully; step 1.1 gets the
base case from the recursion and `[L2]`; step 1.2 uses the recursion and the
product formula. My first pass left `[L3]` unused — a defect of its own — so step
2.1 now cites it where its distributive laws are genuinely used.

### F4 · `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial` — Statement

**A missing hypothesis in a Statement.** It read "Let $T:V\to V$ be an
endomorphism over an arbitrary field $F$", with no finite-dimensionality, while
`[L2]` and step 1.1 apply `thm-primary-decomposition-for-an-endomorphism`, whose
Statement opens "of a **finite-dimensional** vector space". I confirmed from disk
that `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism` scopes
$\mu_T$ itself to finite-dimensional spaces — so the Statement was silently
presupposing exactly the hypothesis it omitted.

**Repaired.** Finite-dimensionality restored in the Statement, with the reason
stated; `[L2]` now carries its source's hypothesis.

### F5 · `cor-idempotent-endomorphisms-are-diagonalisable-projections` — title and Statement

Same defect, one level up: the title and Statement asserted that *every*
idempotent endomorphism is diagonalisable, while `[L1]`, `[L2]` and
`def-diagonalisable-endomorphism` are all finite-dimensional. **Repaired** in the
Statement and both facts — and its single consumer,
`ex-computing-a-minimal-polynomial-from-annihilating-polynomials`, had its `[L2]`
aligned in the same pass, so my repair did not push the defect downstream.

### F6 · `ex-nilpotent-shift-and-its-single-primary-component` — **false title**

The title said the shift "has minimal polynomial $x^n$ and one primary component",
unqualified. The Example itself states that **at $n=0$ the primary decomposition
is empty** — zero components, not one. The title was false on a boundary case the
item explicitly admits, and this is precisely the class the brief warns reaches
step 7 intact: *the judges read Statements and cannot see a false title.*

**Repaired:** title narrowed to "…and, for $n>0$, a single primary component". The
id is untouched; titles are not identifiers.

---

## 4. The sixteen confirmed nonfatal findings, all closed here

Step 8 is fatal-only, so anything left now can never be fixed. Grouped by the
pattern they share.

**A consequence of the cited item presented as the cited item** — the most common
shape at 6c, six instances:

| item | fact | what the cited item actually says |
|---|---|---|
| `thm-gram-schmidt-orthonormalisation` | `[L2]` | `def-linear-independence` defines independence by vanishing combinations; "no member in the span of its predecessors" is a consequence. Step 2.1 leaned on it → derivation written inline. |
| `thm-finite-dimensional-orthogonal-decomposition` | `[L4]` | `def-internal-direct-sum` gives (D1)+(D2); *uniqueness of decomposition* is `lem-direct-sum-criterion`, which the Definition explicitly defers to. Step 4.1 leaned on it → one-line uniqueness proof written in. |
| `thm-diagonalisability-eigenspace-direct-sum-criterion` | `[L3]` | same; both steps now argue from (D1) and (D2) directly. |
| `thm-simultaneous-diagonalisation-…` | `[L4]` | span-as-finite-combinations is `lem-span-is-the-set-of-linear-combinations`, not the Definition → retargeted, dep added. |
| `thm-bessel-inequality-and-finite-parseval-identity` | `[L3]` | same → retargeted. |
| `cor-generators-of-a-finite-cyclic-group` | `[L2]` | claimed a "generates iff order = group order" characterisation `lem-order-characterisation` does not state, **and** omitted the distinctness clause step 1.2 needs. Both fixed. |

**A dropped hypothesis where no step depends on the drop:**

- `cor-number-of-solutions-of-a-binomial-congruence` `[L3]` dropped `$n\ge1$` and
  is thereby **false as written** — at $f=0,u=2,v=0$ the congruence has one
  solution class while $\gcd(2,0)=2$. No step depends on it ($f=\varphi(n)\ge1$),
  so nonfatal; hypothesis restored and step 3.1 now says why it applies.
- `cor-intermediate-field-degrees-divide` `[L2]`,
  `prop-degree-bound-for-composita` `[L3]`,
  `thm-finite-fields-have-prime-power-order` `[L4]` each restated
  `cor-every-spanning-set-contains-a-basis` as "Every spanning set contains a
  basis", dropping the **"Assume the Axiom of Choice"** that the published
  Statement carries in bold. The library adopts AC, so the sentence is not false
  in its ambient theory — but the flag was dropped in all three. **Restored in
  all three.** Worth recording: all three uses are on *finite* spanning sets,
  where no choice is needed, so these three items could be made choice-free by a
  different argument. I did not attempt that rewrite at 6c; it is an improvement,
  not a repair.

**Domain and notation:**

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` `[L3]`
  attributed an *endomorphism* claim to the matrix-only
  `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`, with the
  bridge `def-characteristic-polynomial-of-an-operator` neither declared nor
  cited. Fact restated, bridge added to `deps`, step 1.2 now passes through a
  chosen basis.
- `lem-derivative-of-det-i-minus-xa` and `cor-closed-walk-trace-generating-functions`
  applied `\operatorname{tr}_R` to matrices whose entries lie in $R[x]$ and
  $R\llbracket x\rrbracket$, while the trace is declared on $M_p(R)$. Not a false
  claim — those are commutative rings and the formula is the same — but the
  subscript named the wrong ring. Every occurrence now names the ring its
  argument's entries lie in.
- `thm-prime-subfield-classification` `[L5]` presented injectivity as part of
  `def-field-homomorphism`; it is a derived Remark there. Now stated with its
  one-clause kernel reason.
- `thm-unit-group-chinese-remainder-decomposition` `[L2]` enlarged the definition
  from $\mathbb Z/n$ to arbitrary quotient rings; narrowed to what is cited.

**`thm-graph-removal-lemma` `[L1]` — found in the item group C explicitly
cleared.** Group C checked this item under §1.6 and recorded it as "checked and
clear" because it "already applies `[L1]` with sufficiently large minimum part
count $m_0$". That reads the *step*, not the *fact*: `[L1]` said only "boundedly
many parts" and never mentions $m_0$, while steps 1.1 and 3.1 both lean on it.
The cited Szemerédi Statement does supply $m_0$, so the honest restatement
licenses the step. `[L1]` restated faithfully, and step 3.1 now derives the
within-part bound the way its repaired sibling
`thm-induced-graph-removal-lemma` does ($\sum_i|V_i|^2\le n(n/k+1)$) instead of
asserting $n^2/m_0$ and dropping the $+n$.

---

## 5. Consumers of Statements that moved

**6b's changes.** I traced every consumer of the Statements 6a/6b altered and
checked each restatement against the new text. `thm-szemeredi-regularity-lemma-with-tower-bound`'s
recurrence change (`⌈ε⁻⁵m_r2^{m_r+2}⌉` → `m_r⌈ε⁻⁵2^{m_r+5}⌉`) is the one the
brief flagged: its four consumers are
`rem-tower-and-wowzer-bounds-in-regularity`, `thm-graph-removal-lemma`,
`thm-large-self-regular-subset` and `thm-strong-regularity-lemma-by-energy-stabilisation`.
**No consumer quotes the old constant** — the remark speaks of "an exponential
part-count recurrence", which remains true, and the three `[L#]` facts state the
existential form. The prescribed-part-count changes in
`thm-strong-regularity-lemma-…` and `thm-self-regular-representative-subsets`,
the nonempty narrowing of `thm-large-self-regular-subset`, the `1≠0` hypothesis
on `lem-leading-multidegrees-…` and the second-variable clause on
`thm-tensor-products-commute-with-arbitrary-direct-sums` are all correctly
reflected in every consumer. Nothing downstream cites something that no longer
exists.

**My own changes.** I moved three Statements at 6c (F2, F3, F5) and one title
(F6). That staled eight downstream contract quotes and one downstream
restatement. All were regenerated, and — the substantive half — I read each
consumer's `[L#]` against the new Statement: the Carmichael and transfer-matrix
consumers quote only the parts I did not change, and
`ex-computing-a-minimal-polynomial-from-annihilating-polynomials` needed and got
the finite-dimensional hypothesis.

---

## 6. `risk_review` — 74 dispositions were missing, not written

`risk-report --require-reviewed` over the merged contract reported **74 errors,
all in batches 3 and 7** — group B's. Groups A and C had written theirs (109 and
42). Group B's own report says its §5 "is completed below once the read-only
proof-refuters return" and records dispatching **11 clusters covering exactly the
74 routed items**. The partition was correct; the dispatch was not. **Ten of the
eleven clusters produced no result** — prompt files on disk, no log, no
`result.json` — almost certainly because they were not detached and died with
their parent Alpha process. Only `projection-gram-qr` (5 items) landed.

I re-dispatched all ten (labels `rr-*`), read every report, and adjudicated each
finding from disk. Outcomes: `minpoly` 1 fatal, `primary-decomposition` 2 fatal,
`diagonalisation` 1 fatal + 4 nonfatal, `companion-transfer` 2 nonfatal, and the
remaining six clusters clean. **All six of those fatal-graded findings are F3–F6
and two nonfatals above, all confirmed and repaired.** `recurrence-rational`
additionally machine-tested the reciprocity formulas over 13,608 recurrences;
`words-and-tilings` recomputed the Fibonacci, Lucas and NEW-walk counts.

**All 74 dispositions are now written** (`research/frontier-13-alpha-a-6c-risk-reviews.mjs`),
per-item, each naming the cluster that read the item, that cluster's outcome, the
specific repair where there was one, and — explicitly — the limit of the
disposition: it rests on the refuter's full read and my adjudication, **not** on a
line-by-line re-derivation by me. `risk-report --require-reviewed` now reports
**0 errors over all 390 routed items**.

---

## 7. The two items owed from earlier steps

### 7.1 Batch 2's Q₈ nonsplitting witness — the false reason corrected, the items not authored

The decline read: "…while quaternion multiplication and its subgroup lattice are
homed on a different algebra page." **The implication is false, and I verified
both halves.** `def-quaternions` is published on
`rings-subrings-and-integral-domains`; that page **is** inside order 68's
`requires` closure (32 pages), and page 68 already cites from it
(`lem-field-is-a-commutative-ring`).

But the brief's premise needs one correction of its own: `def-quaternions`
defines the **real quaternion algebra ℍ**, not the eight-element group. Q₈ is not
published in any form. A witness would first have to construct
$\{\pm1,\pm i,\pm j,\pm k\}$ inside ℍ^× from the explicit four-coordinate
multiplication formula and then prove enough of its subgroup lattice to see that
every order-four subgroup contains $-1$.

**I corrected the reason and did not author the items.** The disposition moved
`out-of-scope` → **`deferred`** (recoverable from the row, which is the point of
the row), and the reason now records: nothing on the pair rests on this witness —
`cex-cyclic-prime-square-extension-does-not-split` already refutes nonsplitting,
and `fs-kernel-and-quotient-determine-a-group-extension` already separates equal
kernel/quotient data with $C_{2p}$ against $D_p$, which I read to confirm — the
closure claim was false and is now stated correctly, and what is genuinely absent
is Q₈ as a group, whose construction is finite-group-example material belonging
to a group-examples page.

The brief left the addition optional ("if they earn their place"). My judgment:
the mathematics is doubly witnessed already, and authoring two computation-heavy
new items at 6c would put content into the level with **no independent reader
pass** — the one stage this run's accuracy actually rests on. Page 68 has the room
(23 of 60); the reason it is empty is not room.

### 7.2 The Chernikov/Zhao section titles — verified against the PDFs, then fixed

Group C raised these at round 1 and they were never routed. I verified every one
against the printed sources rather than accepting the report, using the `pypdf`
venv (`WebFetch` cannot read PDFs) and sanity-checking that terms certain to be
present were present:

| record | was | printed source says | verified from |
|---|---|---|---|
| Chernikov §3.1 | "Graphs with no order" | **"Erdős-Hajnal conjecture"** | ToC p.1 *and* the body heading on p.18 |
| Zhao §2.6 (×2 rows) | "Graph Counting Lemma" / "Graph Removal Lemma" | **"Graph Counting and Removal Lemmas"** | ToC + running heads |
| Zhao §2.8 | "Strong Regularity Lemma" | **"Induced Graph Removal and Strong Regularity"** | ToC + running heads |

The recorded Chernikov title was not *obviously* wrong — §3.1 does contain the
order property and Theorem 3.4 on stable graphs, so "Graphs with no order" reads
plausibly. The PDF settles it: the chapter is "3. Erdős-Hajnal conjecture for
stable hypergraphs" and the section is "3.1. Erdős-Hajnal conjecture."

The two §2.6 rows describe one section, so renaming both identically would have
collided; each now carries the printed section title plus its distinguishing half
("— counting half", "— removal half"), preserving the per-row disposition mapping.

**One further imprecision I found while verifying**, not in group C's list: the
source's recorded title was "MATH 223M: Topics in Model Theory". The document's
own title page reads **"Pseudofinite Model Theory (MATH 223M, UCLA, Fall 2019)"**.
Corrected.

---

## 8. Reported, not repaired

- **`cor-every-spanning-set-contains-a-basis` — its title drops the Axiom of
  Choice.** The title reads "Every spanning subset of a vector space contains a
  basis"; the Statement opens "**Assume the Axiom of Choice**" in bold and the
  Remark says "The proof spends the Axiom of Choice." **This item is PUBLISHED and
  outside this run's scope.** The obvious-published-dependency delegation covers
  an unambiguous falsehood in a Definition, Statement, Fact or citation; a
  short-form title over a Statement that carries the hypothesis in bold is not
  clearly within it, and the fix is a judgment call about title conventions across
  the published corpus. **This is an owner decision, and I flag it rather than
  taking it.** The three in-run consumers are repaired regardless (§4).
- **A nonfatal class left documented, five instances:** `thm-of-square-roots` is
  stated for a *complete ordered field*, and five items specialise it to ℝ without
  citing that ℝ is one (`cor-cauchy-reals-lub-complete` supplies this). Every use
  already has the root in its Given, so no step is endangered. The remedy is one
  fact line per item; I record the class and its remedy rather than making five
  scattered edits at the last moment before the text freezes.

---

## 9. Gates after every repair

Repo-wide, from the repo root, after all 24 item edits and the contract regeneration.

| gate | result |
|---|---|
| `precheck.mts` (all items) | `3646 checked, 0 failing — all clean` |
| `proof-contract --strict` (merged) | `0 error(s), 0 warning(s), 390/390 item(s) checked` |
| `proof-contract --strict --require-reviewed` (b3, b7) | `76/76` and `38/38`, 0 errors |
| `risk-report --require-reviewed` | `0 error(s), 390 item(s) routed` |
| `depcheck` | `OK — no cycles, all references resolve, no draft items on published pages` |
| `fwdcheck` | `OK — every forward reference is declared, points strictly forward…` |
| `extcheck` | `OK — every recorded-not-proved statement is a cited remark…` |
| `rendercheck` | `OK — 4916 file(s)` |
| `prosecheck` | `OK — no positional claim contradicts the spec` |
| `depsource` | `OK — 0 unresolved` |
| `citecheck` | `4642 item(s) scanned`, no warning against an edited item |
| `content-policy` ×7 | 463 scoped items, 0 errors, 0 warnings |
| `coverage-checklist` ×7 | 11 pages, 988 harvested results, 0 errors, 0 warnings |
| `finite-smoke` ×7 | 0 errors, 16 checks |
| `url-sweep --recover --fail-on-dead` | `36/36 live; 0 failed; 0 recoverable` |
| standing closure check | 463 items, 1534 deps, **0** out-of-closure / cross-pair / b-leaf / unresolved |

**A gate that passed vacuously, worth carrying forward.** After I repaired
`thm-graph-removal-lemma`, `proof-contract --strict` reported `0 errors` on batch
4 — while the contract's recorded step `claim` still held the *pre-edit* text.
The gate checks that a citation's quote occurs in the cited Statement and that the
step cites the fact; it never compares the contract's recorded claim against the
step text on disk. Group B found the mirror image of this (`[L#]` prose is never
checked against the quote it shortens). Between them, the contract can be fully
green while both its prose sides have drifted — which is exactly the surface this
run's dominant defect lives on. I regenerated all 21 affected entries with
`regen-contract-entries.mjs`.

**A defect I introduced and a gate did catch.** Writing $R[[x]]$ for the formal
power series ring produced `[[x]]`, which the renderer resolves as a wikilink
before KaTeX runs — killing the formula and breaking `rendercheck`, `depcheck` and
`fwdcheck` at once. The library's convention is `R\llbracket x\rrbracket`.
Fixed; all three gates green.

---

## 10. Per-page verdict

All 22 pages **PASS**. The 24 items repaired at 6c fall in five batches: batch 1
(4), batch 2 (6), batch 3 (10), batch 4 (1), batch 7 (3). Batches 5 and 6
produced no 6c finding, on either my read or the refuters'.

| batch | pages | 6c findings | verdict |
|---|---|---:|---|
| 1 | `symmetric-polynomials`, `algebraic-extensions-…` (+B) | 4 nonfatal (4 items) | PASS after repair |
| 2 | `primitive-roots-…`, `semidirect-products-…` (+B) | 2 fatal, 4 nonfatal (6 items) | PASS after repair |
| 3 | `diagonalisation-…`, `inner-product-…` (+B) | 3 fatal, 6 nonfatal (10 items, incl. 1 consumer alignment) | PASS after repair |
| 4 | `erdos-hajnal-…`, `regular-pairs-…` (+B) | 1 nonfatal (1 item) | PASS after repair |
| 5 | `tensor-products-of-modules` (+B) | none | PASS |
| 6 | `adjunctions-units-and-counits` (+B) | none | PASS |
| 7 | `linear-recurrences-…` (+B) | 1 fatal, 2 nonfatal (3 items) | PASS after repair |

**The level is ready for step 7 as far as 6c is concerned.** Every item touched at
6c is a fresh judge target; the four whose **Statement or title** changed —
`thm-carmichael-function-formula`,
`thm-weighted-walks-are-entries-of-transfer-matrix-powers`,
`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`,
`cor-idempotent-endomorphisms-are-diagonalisable-projections` — plus the retitled
`ex-nilpotent-shift-and-its-single-primary-component` are the ones a judge should
read first.

## 11. For the orchestrator

1. **`cor-every-spanning-set-contains-a-basis`'s title is an owner decision** (§8).
2. **Group B's refuter dispatch failed silently and its report did not say so.** Ten
   of eleven clusters returned nothing, yet the report tabled all eleven as
   dispatched. A dispatch is not evidence until its `result.json` exists — worth a
   mechanical check before an Alpha's report is accepted.
3. **`proof-contract --strict` does not compare a contract's recorded step claim
   with the step on disk** (§9). Both prose sides of the contract are unchecked.
   If a gate is wanted, that is the cheapest real one available.
4. **`research/frontier-13-RESUME.md` is badly stale and is a hazard.** It still
   reads "Steps 1-3 COMPLETE. Step 3 Alpha scaffold review in flight" and carries
   the pre-splice item counts (450, not 463). Steps 4, 5, 6a, 6b and now 6c have
   all landed since. A future session recovering from it would replay step 3.
5. Two new artifacts are checked in and are generally useful:
   `research/frontier-13-alpha-a-6c-surface.mjs` (the citation surface) and
   `research/frontier-13-alpha-a-6c-clusters.mjs` (target-partitioned refuter
   clusters). If they are kept, `ARCHITECTURE.md` §3 needs an entry each, in the
   same commit, per the keep-the-docs-current rule.
