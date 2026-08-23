# Frontier 17 — Alpha group C step-6b adjudication

**Dispatch:** `6b-c` (re-dispatch; the 2026-08-21 run of this lane timed out at 4 h)
**Owned batches:** 1, 6 and 8 — four A/B pairs, 140 scoped items
**Frozen text:** no; this is the step-6 repair window
**Alpha:** Claude Opus 5, `xhigh`, 1M context

## What this round inherited and what it added

The prior `6b-c` dispatch ran on the retired `gpt-5.6-sol` lane and **timed out**
(`exit_code: null`, `timed_out: true`, 14 400 s). It had completed the reader
adjudication — 53 findings, 39 fatal — written
`research/frontier-17-alpha-c-6b-findings.json`, and appended 62 rows to
`research/defect-ledger.jsonl`. It had dispatched three refuters and was killed
before any of them returned. Its own checkpoint named the exact remainder:
refuter adjudication, risk reviews, gate re-run, and a complete report.

Per the repair-round rule I verified that work rather than re-deriving it, then
did the remainder. Verified on disk this round: all 53 reader findings are
closed on the current text, the 62 ledger rows validate, and the machine
findings file matches the ledger's fatal count. This round adds **21 new
adjudicated findings (7 fatal, 14 nonfatal)**, all repaired, **87 risk reviews**,
and the gate receipts below.

## Model lineup for this group, stated because it changes how to weigh agreement

My brief warns that Alpha, the Betas it audits and the refuters it dispatches are
all Claude Opus 5, so agreement is same-model rather than corroboration. **For
these three batches that warning does not apply.** Batches 1, 6 and 8 were
scaffolded, authored and independently read before the 2026-08-23 lineup move,
all on `gpt-5.6-sol`; my four refuters and this adjudication are `claude-opus-5[1m]`.
The refuter round was therefore a genuine cross-family read of GPT-authored,
GPT-read text — which is the most plausible reason it found seven fatal defects
on text that had already cleared a full reader pass.

## Reader findings — inherited, verified, unchanged

53 findings (`R1-1` … `R1-27`, `R6-1` … `R6-7`, `R8-1` … `R8-19`): 39
`confirmed_fatal`, 14 `confirmed_nonfatal`, 0 false positives. The per-finding
table is preserved in `research/frontier-17-alpha-c-6b-findings.json` and in the
62 inherited ledger rows (`f17-c-r1-*`, `f17-c-r6-*`, `f17-c-r8-*`,
`f17-c-alpha-precheck-01` … `-09`). This round re-read the repaired text of every
item those findings touched and found no unclosed one. Two of the prior round's
source-checked claims were re-verified against the source itself this round; see
"Harvest faithfulness" below.

## Refuter dispatch

Four read-only refuters, one per A/B pair — the judge's context unit — all
`claude-opus-5[1m]`, `--sandbox read-only` enforced by the tool allow list, each
given every item in its pair as mandatory coverage with the high/critical items
named, and each told to rank a real falsehood above a wording defect:

| label | pair | items | wall |
|---|---|---|---|
| `alpha-c-ref-twosq` | `sums-of-two-squares` (+ examples) | 26 | 10 m |
| `alpha-c-ref-frattini` | `frattini-subgroups-and-the-burnside-basis-theorem` (+ examples) | 36 | 16 m |
| `alpha-c-ref-caratheodory` | `outer-measure-and-the-caratheodory-extension-theorem` (+ examples) | 43 | 12 m |
| `alpha-c-ref-identity` | `the-identity-theorem-and-the-open-mapping-theorem` (+ examples) | 35 | 13 m |

All four returned complete reports with explicit coverage statements. No refuter
wrote content; every finding below was verified by Alpha from disk before
adjudication, and every repair is Alpha's.

## Refuter findings, adjudicated

### Fatal

**C-FR-1 · `ex-generator-rank-of-upper-unitriangular-groups`, title · confirmed_fatal.**
The title read *"The $3\times3$ upper-unitriangular groups have generator rank
two"*. That names the family $U_3(\mathbb F_q)$ over an arbitrary prime power,
and on that family the claim is **false**: for $q=p^e$ the same computation the
item performs gives $\Phi=Z$ and Frattini quotient $\mathbb F_q\oplus\mathbb F_q$,
an $\mathbb F_p$-space of dimension $2e$, so $d(U_3(\mathbb F_4))=4$, not $2$. I
verified the counterexample independently. Compounding it, the body never
connected its coordinate group to a matrix at all, so the title named an object
the item did not introduce. **Repair (my authority 3):** title narrowed to *"over
a prime field"*; the Example now defines $H_p$ as the $3\times3$ upper-unitriangular
matrices over $\mathbb Z/p$ with the explicit parametrisation, and step 1.1
verifies entrywise that matrix multiplication is the coordinate operation; a
Remark records the $\mathbb F_q$ boundary and why the prime-field hypothesis is
needed. Everything else in the item was checked line by line and is correct.

**C-TS-1 · `thm-primitive-sum-of-two-squares-characterisation`, `[L5]` · confirmed_fatal.**
`[L5]` restated `lem-p-adic-valuation-basic` as its clause 4 only ($v_p(n)\ge1$
iff $p\mid n$), while step 1.2 used the strictly different clause 2 ($p^k\mid n$
iff $k\le v_p(n)$) at $p=2$, $k=2$ to turn "$4\nmid n$" into "$v_2(n)\le1$". The
fact as written does not license the step. The needed clause is on disk and two
sibling items in the same batch cite it correctly, so this is a restatement
defect in one Facts block, not a gap in the mathematics. **Repair:** `[L5]` now
carries both clauses, step 1.2 names the clause and the instance, contract quote
refreshed.

**C-CA-1(a,b,c) · three items, missing choice scope · confirmed_fatal each.**
Seven items on the Carathéodory page declare *"Assume the Axiom of Countable
Choice"* in title, Statement, Given and `deps`. Three items in the same chain
consume it and declared nothing:

- `lem-source-algebra-is-caratheodory-measurable` — step 2.1 applies
  `lem-caratheodory-subadditive-inequality-is-automatic`, whose Statement
  quantifies over an **outer measure**, to the induced set function, which is an
  outer measure only under $\mathrm{AC}_\omega$. It listed
  `cor-premeasure-induced-set-function-is-an-outer-measure` in `deps` and restated
  it in no Fact, which is why nothing flagged it.
- `thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation` —
  same use at steps 2.1 and 3.1, with neither that corollary nor
  `def-countable-choice` in `deps`.
- `prop-caratheodory-extension-compares-with-other-extensions` — the sharpest.
  Its Given opens *"Let $\mu=\mu^*|_{\sigma(\mathcal A_0)}$ be the Carathéodory
  extension"* and steps 2.1/3.1 apply continuity from below and finite
  subtraction **to $\mu$ as a measure**. That $\mu$ is a measure is
  `thm-caratheodory-extension-theorem`, whose Statement begins with the choice
  hypothesis; it was in `deps` and restated in no Fact at all.

The refuter called the class nonfatal because the Statements are not false in ZF.
I do not agree, and the reason is the page's own convention: `def-countable-choice`
says its role here is *bookkeeping — the item assumes it and flags the exact step
that spends it*, and seven siblings do exactly that. An item that spends
$\mathrm{AC}_\omega$ while declaring nothing asserts a ZF theorem it has not
proved. That is a missing choice scope in a Statement, which my repair authority
names explicitly and which the 30-second rule does not reach. **Repair:** the
hypothesis added to title, Statement and Given of each; the restating Fact added
and cited at the step that spends it; `deps` extended; and the consumers'
restatements in `thm-caratheodory-extension-theorem` and
`thm-finite-caratheodory-…` updated so they carry the hypothesis the cited items
now state.

**C-ID-1 · `thm-hadamard-three-lines`, Statement · confirmed_fatal.**
The Statement asserted *"At $x=0$ and $x=1$ the endpoint inequalities are
equalities."* At $\theta=0$ that reads $M(0)\le M(0)^1M(1)^0$ and at $\theta=1$
it reads $M(1)\le M(0)^0M(1)^1$. If the opposite boundary supremum is zero the
right-hand side contains $0^0$, which the very definition the next sentence cites
(`def-real-power`) leaves **undefined** — so the clause is not a well-formed
proposition in exactly the degenerate case the surrounding text was written to
cover, and step 3.1 discharged it with "by definition", which is not an argument.
The degenerate case is reachable. **Repair:** the clause is replaced by an
explicit statement that both inequalities are asserted only for strictly interior
parameters, with the reason; step 3.1 rewritten; the contract's `one` boundary row
rewritten from "reduces to equality and is checked in step 3.1" to the
determination. The theorem's substantive content is untouched and was verified
independently, including that the $\delta$-shift keeps both logarithm bases
strictly positive so the degeneracy never reaches a logarithm.

**C-ID-2(a) · `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`, Given · confirmed_fatal.**
The Given asserted *"Discs are star-shaped ([[rem-plane-star-shaped-and-convex-dictionary]])"*.
I opened that remark: it defines star-shaped and convex and proves *convex ⇒
star-shaped*, and it nowhere states that a disc is convex. Star-shapedness is the
hypothesis of `thm-holomorphic-primitive-on-star-shaped-domain`, the engine of this
lemma and hence of the roots corollary, the local normal form, the open mapping
theorem and the whole maximum-modulus family. The same Given also invokes
`thm-zero-complex-derivative-on-a-domain-implies-constant`, which needs the disc to
be **connected**, and cited nothing for that either. This is the class the reader
round adjudicated fatal at R8-5, R8-6 and R8-18, on a load-bearing hypothesis
rather than a restatement, so it is adjudicated the same way. **Repair:** the
Given now derives both properties from the triangle inequality in one line, and a
new `[L4]` cites `lem-euclidean-polygonal-paths-are-continuous` with
`thm-path-connected-implies-connected` claim 2 for connectedness.

### Nonfatal, all repaired in this window

| finding | item | adjudication and repair |
|---|---|---|
| C-TS-2 | `sums-of-two-squares` (page summary) | Confirmed: ¶1 named *quadratic reciprocity*, which is not in the page's dependency closure and is used by nothing on the page — the first supplement alone determines when $-1$ is a square. Conjunct removed. |
| C-TS-3 | `def-sum-of-two-squares-representation` | Confirmed: "essentially different" is load-bearing-adjacent in two titles and two Statements and the definition named only its opposite. The definition now names the term. |
| C-FR-2 | `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` | Confirmed: the Statement carried no hypothesis at all, with "$P$ is a finite $p$-group" only in the Given, unlike every sibling on the page. A judge reads the Statement. Hypothesis added to the Statement. |
| C-FR-3 | `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` | Confirmed: step 2.1 credited the correspondence theorem with the third isomorphism theorem, which is in the library and in neither `deps` nor the Facts. Step rewritten to reach the conclusion directly from step 1.1; the now-stale `L3` use at 2.1 removed from the contract. |
| C-FR-4 | `thm-frattini-subgroup-formula-for-a-finite-p-group` | Confirmed: step 1.1 credited `lem-commutator-subgroup-is-normal` with the normality of $P^p$, and credited `lem-product-with-normal-subgroup` with normality of the product when that lemma gives only *subgroup*. Both one-line inferences written out. |
| C-FR-5 | `thm-burnside-basis-theorem` | Confirmed: `[L2]` added a clause — "a minimal spanning subset is a basis" — that the cited lemma does not state, and step 1.1 leaned on exactly that clause. `[L2]` restated verbatim; the clause derived in one line in the step. |
| C-FR-6 | `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` | Confirmed: the forward direction argues the codimension count from maximality; the converse simply asserted "a basis extendable by one vector", with no argument and no rank–nullity result in the library. The splitting argument and the maximality check are now written out. |
| C-FR-7 | `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` | Confirmed: "the same calculations" produced the derived subgroups when the preceding sentences computed *squares* and no commutator was exhibited. Both commutators now computed. |
| C-CA-1(d) | `lem-induced-outer-measure-agrees-with-premeasure` | Confirmed nonfatal, not fatal: its proof is genuinely choice-free (infimum, disjointification, premeasure additivity — no per-index selection), so adding $\mathrm{AC}_\omega$ would weaken a ZF theorem. Only the *name* is early. A Remark now records that the identity holds for the induced set function in ZF and points at the corollary that earns the name; the Statement keeps its ZF strength. |
| C-ID-2(b) | `lem-bounded-strip-maximum-principle` | Confirmed: step 3.1 applied `thm-boundary-maximum-modulus-principle`, whose hypothesis is a bounded complex **domain**, to a rectangle never shown connected. Nonfatal rather than fatal because nothing is misattributed — the hypothesis is simply omitted, and it closes in seconds. Coordinatewise segment argument and citation added. |
| C-ID-2(c) | `lem-nonzero-derivative-gives-local-biholomorphism` | Confirmed, same class: step 4.1 said "the connected disc $V$" with the connectedness half uncited. Segment argument and citation added. |
| C-ID-3 | `cor-constant-boundary-modulus-forces-zero-or-constancy` | Confirmed: step 1.2 asserted that $1/f$ is continuous on $\overline\Omega$, where $f$ is only continuous, offering only a reciprocal law that covers interior complex differentiability. The elementary estimate is now written into the step. I deliberately did **not** invent a dependency for it: no published item states continuity of a complex quotient, and the honest closure is three lines of algebra. |

### Alpha's own findings this round

| finding | item | adjudication and repair |
|---|---|---|
| A-C-S1 | `frattini-subgroups-and-the-burnside-basis-theorem` (page summary) | ¶1 said *"the published Frattini subgroup"* and *"the published Fitting theory"* — library-status meta-commentary standing in for mathematics, which the natural-voice rule forbids. Rewritten to name the results. |
| A-C-S2 | `outer-measure-and-the-caratheodory-extension-theorem` (page summary) | ¶1 named two other pages by title and said what each *"supplies"*. SCHEMA §6 forbids a summary from claiming what other pages contain, and this is not mathematics. Rewritten to name the results themselves. |

## Risk reviews — 87 written, all of them mine

`risk-report` routed 42 items in batch 1, 25 in batch 6 and 20 in batch 8; a
further item (`lem-nonzero-derivative-gives-local-biholomorphism`) crossed into
high tier because of my own repair, so 88 dispositions were written in total.
Every `risk_review` names what was actually traced on that item — which
hypothesis, which boundary, which subtraction, which direction of which iff — and
where a repair was made it names the finding and the repair. None is templated.
`risk-report --require-reviewed` on the merged contract is now **green for the
whole run**: all 87 pre-existing errors were mine, and groups a and b had none.

## Harvest faithfulness (6b.0)

The prior round recorded a full 11/11 pass over the source text at the stated
locators. Rather than re-derive it I re-verified two sources independently this
round, by downloading the PDFs and extracting their text — not by reading an HTTP
status:

- **Tropp, *Matrix Analysis*, Lecture 7.** The locator names §7.2.2 Proposition
  7.10 through the maximum-modulus Aside after Theorem 7.12, and §7.3 Theorem
  7.13 and Claim 7.14, stopping before Exercise 7.15. The extracted text carries
  exactly that: §7.2.2 "Mean value formula and maximum modulus principle";
  Theorem 7.12 on bounded domains; the "Aside: Maximum modulus principle" whose
  content is that an interior maximum forces constancy; §7.3 "Interpolation: The
  three-lines theorem"; Theorem 7.13 "Hadamard three-lines"; Claim 7.14
  "Auxiliary function is bounded"; and Exercise 7.15, which the harvest correctly
  excludes. Tropp's own proof takes $M(0),M(1)>0$ by a WLOG; ours instead shifts
  by $\delta$ inside the logarithm, which is strictly more careful.
- **Hackman, *Elementary Number Theory*, Chapter E.** The table of contents gives
  E.I "Primes as Sums of Squares" p. 143, E.II "Composite Numbers" p. 150, E.III
  p. 156, so the locator's "E.I and E.II in full, pp. 143–155" is exact. The
  extracted body contains precisely the numbered results E.I.1–E.I.5 and
  E.II.1–E.II.8 that the harvest enumerates, with none missing. Three statements
  matter for this group and each matches its item verbatim in substance: **E.II.2**
  ("representable iff primes $p\equiv3$ enter with even multiplicity"),
  **E.II.4 Proper Representation** ("the prime factor 2 enters at most once, and
  primes $p\equiv3\pmod4$ not at all"), and **E.II.8** — (a) the not-both-even
  product clause, which confirms the refuter's reading that
  `cor-primitive-sums-of-two-squares-closed-under-products`'s "unless both factors
  are even" is the proved condition rather than a hedge, and (b) *"every integer
  $P>1$ dividing $N$"*, which confirms the prior round's R1-3 repair narrowing that
  corollary's title to divisors greater than one.

Every decline in the three batches was re-read. Each names a genuine later topic
or a separate subject: continued-fraction and Diophantine-approximation routes,
general binary quadratic forms, the $r_2$ divisor-sum count, inner measure and
saturation, the concrete Lebesgue and Hausdorff constructions, residues and the
argument principle, Schwarz reflection. None is a "requires machinery we do not
have" that could have been built here. Each pair's primary backing is a textbook
or a full lecture-note set: Hackman and Stein; Craven and van Beek; Folland and
Tao; Lebl, Shabat and Tropp. `url-sweep --recover --fail-on-dead` is 11/11 live
and `source-fetch-check` is 11/11 fetch-verified.

One scope observation, deliberately **not** filed as a finding: Schwarz's lemma
is not in the library and is not in batch 8's harvest. It is a natural neighbour
of the maximum principle and of the Blaschke-factor counterexample on the B page,
but it belongs with the disc-automorphism development, which is another page's
topic. Recording it for the lead Alpha's step-9 scope-denial sweep, not claiming
it as thinness here.

## Provenance and generated claims

140 scoped items, all `status: draft`. Statement provenance: 100
`literature-derived`, 34 `ai-altered`, 6 `ai-generated`. **No `ai-generated`
Statement or Construction is a dependency target of anything**, verified by
scanning every `deps` list in scope; each of the six occurs only in its own file.
Every `literature-derived` and `ai-altered` item carries a reader-visible
`sources.references` URL. No item carries `proved_here: false`, so no
`external_dependency` record is in scope.

The six generated constructions were tested as Statements, not as proofs, by me
and independently by the owning refuter:

- `ex-squarefree-sums-of-two-squares` — I enumerated the squarefree integers up
  to 30 (the eleven excluded values are exactly the non-squarefree ones), removed
  those with an odd prime factor in $\{3,7,11,19,23\}$, and got $1,2,5,10,13,17,26,29$,
  matching the item; all eight witnesses recomputed, all coordinate gcds 1.
- `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` — $\Phi(C_3)=1$,
  inversion is the unit class $[-1]_3$, order 2, coprime to 3, acting nontrivially
  on the quotient. Consistent with Hall–Burnside rather than contradicting it.
- `ex-zero-one-outer-measure-on-a-two-point-set`,
  `cex-three-point-outer-measure-has-only-trivial-caratheodory-sets`,
  `cex-two-point-outer-measure-need-not-be-regular` — all three verified by
  exhausting the finite power set: the outer-measure axioms, the Carathéodory
  family, and in the third case the absence of any measurable hull for a singleton
  ($3/2\ne1$).
- `ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc` — $|p(z)|\le5$ on
  $|z|\le1$ by the triangle inequality and $p(-1)=5$, so the maximum is exactly 5.

No item was materially altered in a way that changes its provenance class: every
repair this round corrected a citation, a hypothesis, a title's scope or a
summary, and none introduced a new mathematical claim. The one Remark I added
(`lem-induced-outer-measure-agrees-with-premeasure`) states a fact about the
proof's own choice-freeness, not a new theorem. No retag was warranted.

## Summaries, B pages, reader exclusion

All four A-page summaries are exactly two nonempty prose paragraphs, each under
150 words: 58/69, 62/62, 67/70, 58/73 after my two rewrites. All four B pages have
no authored body. `prosecheck` is green.

**6a exclusion check:** `reader-1`, `reader-6` and `reader-8` are fresh
`reader`-role dispatches, distinct from `beta-author-batch-{1,6,8}`. No reader
audited a batch it authored.

## Items changed this round

Batch 1 — `ex-generator-rank-of-upper-unitriangular-groups` (title, Example, step
1.1, new Remark), `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group`
(Statement), `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`
(step 2.1), `thm-frattini-subgroup-formula-for-a-finite-p-group` (step 1.1),
`thm-burnside-basis-theorem` (`[L2]`, step 1.1),
`cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` (step 2.1),
`ex-frattini-subgroups-of-dihedral-and-quaternion-groups` (step 1.1),
`thm-primitive-sum-of-two-squares-characterisation` (`[L5]`, step 1.2),
`def-sum-of-two-squares-representation` (Definition).

Batch 6 — `lem-source-algebra-is-caratheodory-measurable`,
`thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation`,
`prop-caratheodory-extension-compares-with-other-extensions` (title, Statement,
Given, Facts, steps, `deps` in each), `thm-caratheodory-extension-theorem`
(`[L4]` restatement), `lem-induced-outer-measure-agrees-with-premeasure` (new
Remark).

Batch 8 — `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` (Given,
Facts, steps 1.1 and 2.1, `deps`), `lem-nonzero-derivative-gives-local-biholomorphism`
(Facts, step 4.1, `deps`), `lem-bounded-strip-maximum-principle` (Facts, step 3.1,
`deps`), `thm-hadamard-three-lines` (Statement, step 3.1),
`cor-constant-boundary-modulus-forces-zero-or-constancy` (step 1.2).

Pages — `library/number-theory/sums-of-two-squares.md`,
`library/abstract-algebra/frattini-subgroups-and-the-burnside-basis-theorem.md`,
`library/measure-theory/outer-measure-and-the-caratheodory-extension-theorem.md`
(¶1 in each).

Contracts — batches 1, 6 and 8: citation entries added or corrected for every new
or changed Fact, step inputs updated, six stale `def-sum-of-two-squares-representation`
quotes refreshed after the Definition edit, the Hadamard `one` boundary row and the
logarithm lemma's `iff-reverse` boundary row rewritten as determinations, and 88
`risk_review` blocks written.

**No item was added, deleted, renamed, moved, judged or published, and nothing
outside batches 1, 6 and 8 was edited.** No item in scope carried a
`verification.judge` block, so none was voided. **Twice-touched items: none** —
no item repaired by a reader was also repaired by me on the same defect; the
overlaps are disjoint.

## Plan and manifest reconciliation

No item was added to or removed from any manifest this round, so no
`splice-plan --update` was needed; `splice-plan --verify` reports 26 pages across
9 manifests in agreement.

## Gate receipts

Run from the repo root after every repair.

| gate | result |
|---|---|
| `precheck` (whole repo) | 4921 checked, 0 failing |
| `depcheck` | **1 error, not mine** — see blockers |
| `fwdcheck` · `extcheck` · `rendercheck` · `prosecheck` · `depsource` · `pathcheck` | green |
| `splice-plan --verify` | 26 pages / 9 manifests agree |
| `merge-proof-contracts` | 381 items from 9 batch contracts |
| `proof-contract --strict` (merged) | 0 errors, 1 warning (a shotgun bracket in batch 9, not mine) |
| `risk-report --require-reviewed` (merged) | **0 errors, 381 routed** — was 87 errors, all mine |
| `boundary-audit --fail-on-contradicted --fail-on-template` (merged) | **green**, with the caveat below |
| `citation-fidelity --fail-on-missing-quote` (merged) | green |
| `finite-smoke` (merged) | 0 checks over 0/381 items — **vacuous, see blockers** |
| `gate-liveness --min-checks 1` | **red**, on the line above |
| `url-sweep --recover --fail-on-dead` (my 3 batches) | 11/11 live |
| `source-fetch-check` (my 3 batches) | 11/11 fetch-verified |
| `coverage-checklist` (my 3 batches) | 198 harvested results, 0 errors |
| `defect-ledger validate --run frontier-17` | 173 rows, 0 errors |

## Open, and not mine to close

**1. `gate-liveness` is red because `finite-smoke` is vacuous run-wide.**
`frontier-17` declares **zero** `finite_smoke` obligations across all nine
batches — batch 1: 0 of 56, batch 6: 0 of 36, batch 8: 0 of 30, and the same in
the six batches I do not own. `frontier-16` declared one. I did **not** attach a
token check to turn the gate green. I read the registry's ten checks against my
three batches and none of them tests a headline assertion of any item there: the
graph checks, the Vieta and linear-recurrence checks, the poset checks and the
binomial-congruence check are about other subject matter, and the closest
candidate — `matrix-ring-laws-mod-n` at size 3, against the associativity clause
in `ex-generator-rank-of-upper-unitriangular-groups` — would test a subsidiary
assertion of one item and make a run-wide vacuity look discharged. That is
precisely the "green tick over an empty scope" this gate exists to catch. The
registry's algebraic checks plausibly *do* fit batch 3 (Galois and PID canonical
forms) and batch 9 (monadic algebras); routing this is a lead-Alpha or
contract-audit-round decision, not mine.

**2. `depcheck` is red on a published `frontier-16` item.**
`items/rem-sine-period-arc-length-integrand-is-nonelementary.md` is `status:
published` with `proved_here: false` and no `verification.sources_checked`, which
`depcheck` requires. It is not a dependency of this level, nothing in
`frontier-17` cites it, and its defect is a missing verification record rather
than a falsehood — so it is outside both my batch scope and the
obvious-published-dependency-repair delegation. Groups a and b reported the same
and also left it. Evidence for whoever owns it: the source URL
(`https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf`) returns HTTP 200 as a
PDF, so the record can be written on a real read of Hall §3.1.

**3. A shared boundary rationale I could only half-fix.**
The merged `boundary-audit` was red on a three-member template cluster —
`"No reverse implication is asserted."` on the `iff-reverse` axis, shared by
`thm-no-retraction-of-the-closed-disk-onto-the-circle` and
`cor-no-continuous-injection-from-s2-to-r2` (batch 7, group b) and
`lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` (mine). It
predates my edits; the per-batch runs never saw it because it only reaches three
members when the batches are merged. I rewrote **my** row into a determination
about that item. The gate is now green **only because the cluster dropped below
the three-member threshold** — the two batch-7 rows still carry the identical
shared sentence and I did not examine them. Whoever owns batch 7 should.

**4. Statements I repaired are unjudged, by construction.**
Every item changed above will need a step-7 verdict on its new text. That is the
normal consequence of repairing at step 6 and is the cheap end of the trade; I
name it only so the count is not a surprise: **19 mathematical-content items**
changed (9 in batch 1, 5 in batch 6, 5 in batch 8), plus three page summaries,
which the judges do not read. The run's content is still untracked in git — the
engine's close-out stage commits it — so this list, not a diff, is the record.

## Artifacts

- `research/frontier-17-alpha-c-6b.md` (this file)
- `research/frontier-17-alpha-c-6b-findings.json` — 74 rows, 46 `confirmed_fatal`,
  28 `confirmed_nonfatal`
- `research/frontier-17-alpha-c-6b-refuter-ledger-rows.json` — this round's 21 rows,
  appended
- `research/defect-ledger.jsonl` — 83 group-c rows, 46 fatal at 6a/6b, matching the
  findings file exactly
- Refuter task files and dispatch logs under `research/frontier-17-dispatch/`
