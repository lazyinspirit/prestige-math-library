# frontier-13 — Alpha group A, re-check round 2 (final gate before step 4)

**Group A (LEAD): batches 1, 2, 5 — five A/B pairs, ten pages.**
Alpha: Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window.

Narrow pass, as briefed. My round-1 report stands unamended. I verified the
corrective work from disk and, where the question was faithfulness to a source, from
the source PDF itself rather than from a coverage row's own wording. I authored
nothing, edited no batch file, no `plan-spec.json` entry and no published item.

---

## 0. Verdicts

| batch | pair | order | verdict |
|---|---|---|---|
| 1 | `symmetric-polynomials` | 58 | **ready-for-splice** |
| 1 | `algebraic-extensions-degree-and-finite-fields` | 96 | **ready-for-splice** |
| 2 | `primitive-roots-and-unit-groups-modulo-n` | 57.001 | **not-ready** |
| 2 | `semidirect-products-and-automorphism-groups` | 68 | **ready-for-splice** |
| 5 | `tensor-products-of-modules` | 106 | **ready-for-splice** |

**Order 58 clears.** F1.2 and F1.3 are fixed, and the two items that carried
`literature-derived` provenance from an excluded range now have rows that are
faithful to Grinberg — I checked the source text, not the row text.

**Order 57.001 does not clear**, for the single reason the dispatch anticipated:
`cor-number-of-solutions-of-a-binomial-congruence` is still absent. §3 gives the
exact dispatch content so this round cannot drop it again.

---

## 1. Batch 1 · `symmetric-polynomials` (58) — **READY-FOR-SPLICE**

### 1.1 The locator contradiction is gone

Both places now agree, which is what round 1 found broken:

| artifact | reads |
|---|---|
| `coverage.json` Grinberg `locator` | "Chapter 7, Sections 7.1-7.2 through the proof of Theorem 7.2.7, including Example 7.2.8 and Proposition 7.2.9; stopping before Section 7.3" |
| `notes.md` line 152, source ledger DG-7 | "Ch. 7 §§7.1–7.2 through the proof of Theorem 7.2.7, including Example 7.2.8 and Proposition 7.2.9, stopping before §7.3" |

The notes' source ledger moved with the coverage file. That is the failure shape this
run keeps producing — a repair reaching one artifact and not its twin — and it did
not happen here.

**Checked against the PDF**, not against the claim: Grinberg's own headings are
`7.1. Definitions and examples of symmetric polynomials` (printed p. 434),
`7.2. N-partitions and monomial symmetric polynomials` (printed p. 449) and
`7.3. Schur polynomials` (printed p. 453). The declared range ends with Proposition
7.2.9 on printed p. 452 and stops before Schur polynomials. Consistent. The old
range — "printed pp. 434-449 … stopping before Section 7.2" — was self-contradictory
precisely because §7.2 opens on p. 449; the table of contents on PDF p. 4 confirms
both page numbers.

### 1.2 The harvest: 9 → 29 rows, and the count is exactly right

20 rows added, all Grinberg, nothing else in the file touched. §7.1 now has 20 rows
(the section heading, the 17 numbered headings 7.1.1–7.1.17, with Theorem 7.1.15
split into three rows for parts (a)/(b)/(c)); §7.2 has 9 rows for 7.2.1–7.2.9.
All 11 headings I enumerated in round 1 as undisposed — Convention 7.1.1,
Definitions 7.1.2/7.1.7/7.1.8/7.1.9, Examples 7.1.3/7.1.10, Propositions
7.1.4/7.1.5, Theorem 7.1.6, Lemma 7.1.17 — are present and disposed.

### 1.3 Faithfulness — the two provenance-bearing rows, read out of the source

This was the dispatch's named question. Both rows are faithful.

**Definition 7.2.4 → `included` → `def-monomial-symmetric-polynomials`.** Grinberg,
printed p. 450: *"Let λ be any N-partition. Then, we define a symmetric polynomial
$m_\lambda\in\mathcal S$ by $m_\lambda:=\sum_{a\in\mathbb N^N;\ \mathrm{sort}\,a=\lambda}x^a$.
This is called the monomial symmetric polynomial corresponding to λ."* The item's
title is "Monomial symmetric polynomials indexed by partitions" and the notes'
provenance rationale reads "DG-7's orbit sums indexed by partitions, **with duplicate
monomials counted once**". That qualifier is the substance of the definition: the sum
runs over exponent vectors, not over $\sigma\in S_N$, so each monomial appears once
and no division by an orbit stabiliser is needed. The rationale is precise about the
one thing that could have been wrong. `literature-derived` is correct.

**Theorem 7.2.7 → `included` → `thm-monomial-symmetric-polynomials-form-a-basis`.**
Grinberg 7.2.7(a), printed p. 451: *"The family $(m_\lambda)_{\lambda\text{ is an
}N\text{-partition}}$ is a basis of the $K$-module $\mathcal S$."* The item's title is
"Monomial symmetric polynomials form an $R$-basis of the symmetric-polynomial ring" —
same claim, $R$ for $K$, with "$R$-basis of the ring" meaning a basis of its
underlying module, not a claim about ring generators. Its strategy (orbit
decomposition, disjoint supports, no division by orbit sizes) is Grinberg's own
sketched argument. `literature-derived` statement / `ai-altered` proof is correct.

The scaffolding around both is disposed coherently: 7.2.1 (N-partitions), 7.2.2 (the
zero-padding bijection with partitions of length ≤ N) and 7.2.3 ($x^a$ and $\mathrm{sort}$)
are all `inline` into `def-monomial-symmetric-polynomials`, and 7.2.8 / 7.2.9 are
`inline` into the basis theorem — 7.2.9 is in fact the lemma Grinberg's proof of
7.2.7 relies on, so absorbing it there is the right call, not a convenience.

### 1.4 The two §7.1 rows the dispatch named — both correct

**Theorem 7.1.6 → `prop-symmetric-polynomials-form-a-subring`.** Grinberg, printed
p. 438: *"The subset $\mathcal S$ is a $K$-subalgebra of $\mathcal P$."* The item
claims a **subring**, i.e. strictly less than the source gives. No overclaim. (The
$K$-scaling clause the item drops is recoverable in one line from the subring
property plus symmetry of constants; it is a 30-second step, and I am not calling it
a defect. It matters only because `thm-monomial-symmetric-polynomials-form-a-basis`
speaks of an $R$-basis — see §5.)

**Definition 7.1.9 → `def-elementary-symmetric-polynomials`.** Grinberg, printed
p. 439, defines $e_n$, $h_n$ and $p_n$ in one numbered definition. The row names the
elementary item; the $h$ and $p$ halves are carried by
`def-power-sum-and-complete-homogeneous-symmetric-polynomials`, which rows 7.1.8,
7.1.10, 7.1.11 and 7.2.6 name. Nothing from 7.1.9 is unhomed.

I spot-read every other new row against the PDF. All are faithful, including the two
whose wording could have been guessed rather than read: Example 7.1.3 really does
contain the squared Vandermonde product $((x-y)(y-z)(z-x))^2$ as item (d), and Lemma
7.1.17 really is *"if $s_k\cdot f=f$ for each $k\in[N-1]$, then $f$ is symmetric"*.
Its `deferred` reason names that specific result and is true of the scaffold.

### 1.5 F1.1 — the three resultant items still follow from Milne's product definition

Confirmed from Milne's PDF, and the answer is stronger than "no determinant is used":
**the word "Sylvester" does not occur anywhere in Milne's 144 pages.** His appendix
opens by *defining* the resultant as a product, printed p. 58:

> $\operatorname{Res}(f,g)=a^mb^n\prod_{i,j}(\alpha_i-\beta_j)$, for
> $f=a\prod_1^n(X-\alpha_i)$, $g=b\prod_1^m(X-\beta_j)$ in a splitting field of $fg$.

Every one of the three items is the monic ($a=b=1$) specialisation of a numbered part:

| item | Milne | monic reduction |
|---|---|---|
| `thm-monic-resultant-as-a-double-root-product` | the defining display | $a^mb^n=1$ |
| `cor-monic-resultant-symmetry` | 4.35(a) $\operatorname{Res}(f,g)=(-1)^{mn}\operatorname{Res}(g,f)$ | exact, no factor |
| `cor-monic-resultant-is-unchanged-modulo-f` | 4.35(c) $\operatorname{Res}(f,g)=a^{m-m_1}\operatorname{Res}(f,g_1)$ | $a=1$ kills the factor |

and `cor-discriminant-as-a-resultant-with-the-derivative` is Milne 4.36 verbatim,
$D(f)=(-1)^{n(n-1)/2}\operatorname{Res}(f,f')$, proved there from 4.35(b). Each
routes through `thm-monic-resultant-root-product-and-common-root-criterion`, i.e.
through $\prod_i g(\alpha_i)$ = Milne 4.35(b). **"determinant" and "Sylvester" occur
zero times in `pages.json` and zero times in `proof-contracts.json`.** The items are
byte-unchanged from round 1; this pass did not touch them.

### 1.6 Order 96 is unchanged

Conrad *Finite Fields* still 25 rows (12 `included`, 12 `inline`, 1
`already-published`, zero declines); Knapp 21; Milne 11. 35 A items, 14 B items.
Nothing in the second pass reached this pair. Stays **ready-for-splice**.

---

## 2. Batch 5 · `tensor-products-of-modules` (106) — **READY-FOR-SPLICE**

The step-5 obligation is still open, and I want to be exact about *where* it is
recorded, because that is the distinction this run keeps getting wrong.

`thm-universal-property-of-module-tensor-products` is byte-identical to round 1.
Its strategy still reads "regard its underlying additive group explicitly as the free
abelian group on that set … View the target abelian group as a $\mathbb Z$-module,
extend a balanced map uniquely to a $\mathbb Z$-linear map from $F$". Its contract
still carries [L4] `thm-universal-property-of-free-modules`, quoted exactly:

> "Every set map $u:X\to M$ extends uniquely to an **$R$-module homomorphism**
> $\bar u:R^{(X)}\to M$ …"

The theorem concludes a unique **group** homomorphism out of $M\otimes_RN$. At
$R=\mathbb Z$ the two coincide because additivity forces $\mathbb Z$-linearity, and
that equivalence still appears nowhere in the item, the strategy or the contract. It
is a 30-second step, nonfatal, correctly not blocking — but it is the hinge of the
whole F5.1 substitution and at step 8 it would be unfixable.

**It is recorded in my round-1 report §2.2 and here. It is recorded in no batch-5
artifact.** I grepped: the notes' "Proof-obligation pass" (§190) lists the six
highest-risk step-5 obligations and this is not among them — it could not be, since
the Beta's repair record predates my finding. Alpha may not edit a batch file, so
routing it into the step-5 author's task is the orchestrator's action. Given that
this run has now lost two findings between a report and a brief, I am flagging the
routing explicitly rather than trusting the report to be read.

Everything else on the pair is unchanged and re-verified: 38 A / 11 B items, 41
contracts with 0 empty citation arrays and 147 citations, all **51** published-target
quotes matching the item file on disk, both deferral rows still naming
`subobject-lattices-generators-and-the-grothendieck-axioms` (365.017) and
`tor-flatness-and-global-dimension` (365.055), and zero out-of-closure edges.

---

## 3. Batch 2 · `primitive-roots-and-unit-groups-modulo-n` (57.001) — **NOT-READY**

The second item of F2.1 is **`cor-number-of-solutions-of-a-binomial-congruence`**,
named at `research/frontier-13-alpha-a-step3-scaffold-review.md:325`. It is **still
absent**: zero occurrences in `frontier-13-batch-2.pages.json`, `.notes.md`,
`.coverage.json` and `.proof-contracts.json`. The A page is still at **27** items,
not 28. No second-pass repair record exists in the batch-2 notes — the batch was not
re-dispatched, so this is unattempted, not failed.

The remaining work, complete, so the next brief cannot lose an obligation:

- **Add** `cor-number-of-solutions-of-a-binomial-congruence`, immediately after
  `thm-eulers-criterion-for-binomial-congruences` (position 12). Statement: when
  $x^m\equiv a\pmod n$ is solvable under the hypotheses of the preceding theorem —
  $n$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$ — the number of solutions
  modulo $n$ is exactly $\gcd(\varphi(n),m)$.
- **Deps**, all already on the page or already cited by the theorem it follows:
  `thm-eulers-criterion-for-binomial-congruences`,
  `prop-index-calculus-modulo-n`,
  `def-index-of-a-unit-relative-to-a-primitive-root`, and the published
  `thm-linear-congruence-solvability-and-solution-count` — which is **already a
  declared dependency of the theorem above it** and supplies the count as well as the
  solvability. No new `requires` edge, no new published dependency.
- **Obligations that must move with it**, the shape this run keeps dropping:
  a proof-contract entry with an input map covering its numbered steps and citations
  quoting the *proposition* of each cited item, not a clause's opening words;
  component provenance on **both** axes with a rationale in the notes
  (`literature-derived` statement from Hackman C.III.1's count, `ai-altered` proof if
  the route is reorganised around the local index calculus); and the Hackman C.III.1
  coverage row updated so it names both items, since one row currently disposes a
  heading that yields two results.
- **Why now.** The page already carries
  `cor-power-congruence-solution-count-modulo-a-prime`, the $a=1$, prime-$n$ **count**.
  Without this corollary the page states a general **solvability** criterion and a
  narrower **count**, so the special case says more than the general one. One
  corollary at scaffold cost; after step 4 it is a rewrite.

Order 68 is untouched by all of this and stays **ready-for-splice**: 23 A / 15 B
items, R2.1 still fixed, `polynomial-rings-and-roots` (52) present in the `requires`
of both `plan-spec.json` and the batch file, with the spec entry carrying the note
"frontier-13 R2.1 (2026-08-15, group A recommendation)".

---

## 4. Nothing else regressed

Every figure below was recomputed from disk in this session.

| | batch 1 | batch 2 | batch 5 |
|---|---|---|---|
| A/B item counts | 29 / 9, 35 / 14 | 27 / 11, 23 / 15 | 38 / 11 |
| coverage rows (source + canonical) | 121 + 9 = **130** | 100 + 0 = **100** | 110 + 11 = **121** |
| contracts / empty / citations | 73 / **0** / 218 | 66 / **0** / 229 | 41 / **0** / 147 |
| published-target quotes matching disk | 98 / 98 | 136 / 136 | 51 / 51 |
| `coverage-checklist.mjs` | 0 err, 0 warn | 0 err, 0 warn | 0 err, 0 warn |
| `content-policy.mjs --manifest-only` | 87 items, 0/0 | 76 items, 0/0 | 49 items, 0/0 |

Batch 1's contract figures are identical to round 1's, which is the check that the
second pass really was artifact-only: had it touched an item, the input maps or the
quote set would have moved.

**Coverage rows resolve.** Every `included` / `inline` row in all three batches names
an id present in that batch's scaffold; every `already-published` row names an item
that exists on disk; every `deferred` / `out-of-scope` row carries a reason. **0
problems across 331 rows.**

**Disk-home closure sweep, re-run over all ten pages** (homing taken from the
`library/**` page files, not from the spec's stale item lists): **212 items, 667
dependency edges, 0 unresolved ids, 0 out-of-closure published deps, 0
same-page-not-earlier deps, 0 cross-pair edges, 0 deps on a draft page.** The gate
that missed F5.1 still has the blind spot I documented at step 3; this sweep is what
covers it, and it is clean.

**Batch files versus `plan-spec.json`:** `requires`, `order`, `kind`, `category` and
A-page titles agree on all ten pages. Two deliberate differences for the splice to
carry, neither a conflict: the B-page titles in the batch files are the amended ones
(e.g. "… — Examples and Counterexamples" against the spec's "… : Examples and
Counterexamples"), and the spec entries for `symmetric-polynomials-examples` and
`algebraic-extensions-degree-and-finite-fields-examples` carry no `companion` field
while the batch files do. The missing `companion` is **pre-existing** — 86 of 583 B
pages lack it in the committed spec, unchanged by this run — so it is a field to
write, not a disagreement to resolve.

---

## 5. Carry-forward — nothing here blocks step 4

**Before step 6 (harvest faithfulness, Alpha's own gate).** Four small
faithfulness gaps in batch 1's Grinberg and Milne rows. All are row-*name* accuracy,
never an item defect, and all cost one line each:

1. **The §7.2 section heading has no row.** §7.1's does (row 1). Grinberg's heading is
   "7.2. N-partitions and monomial symmetric polynomials". Every numbered result under
   it is disposed, so nothing is hidden — but the harvest rule enumerates section
   headings, and this one is missing. Materially unlike F1.3, which hid eleven
   numbered results including two that items were credited to.
2. **Proposition 7.1.11's row name overstates the source.** Grinberg states only "for
   each integer $n>N$, we have $e_n=0$"; the row adds "while complete homogeneous
   functions and power sums continue". True, but not what 7.1.11 says. Pre-existing
   row, not from this pass.
3. **Proposition 7.1.14's row name overstates the source.** Its parts (a)/(b)/(c)
   give the elementary and complete generating functions; there is no power-sum
   generating function in 7.1.14. The row says "elementary, complete, and power-sum".
   The item it names, `prop-elementary-and-complete-generating-series-identity`, is
   correctly titled. Pre-existing row.
4. **The Milne row from round 1 §5.4 stands**, now confirmed against the source: the
   "Definition preceding Proposition 4.35" is the general $a^mb^n\prod(\alpha_i-\beta_j)$,
   and the item it is `included` against is the monic case. Every item says "monic" in
   its own title, so nothing overclaims; the row reads fuller than the page delivers.

**Ids versus content — this was the last free moment, and they are honest.** The one
worth recording is `cor-power-sums-generate-when-factorial-is-invertible`. Grinberg
7.1.15(c) assumes $K$ is a commutative $\mathbb Q$-algebra; the item's id claims the
sharper hypothesis $n!\in R^\times$. That is a strengthening beyond the source, and
the notes handle it correctly — provenance is **`ai-altered` on the statement axis**
with the rationale "Sharpens the sources' rational-coefficient assumption to the
exact unit condition $n!\in R^\times$", not `literature-derived`. `ai-altered` may be
load-bearing, so nothing is owed. Grinberg's own remark on printed p. 448 ("in
general, we cannot express $e_n$ in terms of $p_1,\dots,p_n$ if the integer $n$ is not
invertible in $K$") supports the sharpening, and Newton's identities are on the page
at position 18 to prove it. Correct as it stands — I record it so no later reader
mistakes the id for an unsourced claim.

**Step-5 obligations, batch 1.** "Partition" on this page means Grinberg's
$N$-partition: a weakly **decreasing** $N$-tuple of **nonnegative** integers. The
published `def-partition-of-a-positive-integer` (homed on
`the-structure-of-finite-abelian-groups`, order 40, inside closure) is a
**nondecreasing** list of **positive** integers. Different on both counts. The
scaffold is right not to cite it — coverage rows 7.2.1–7.2.3 dispose the notion
`inline` into `def-monomial-symmetric-polynomials` — and the step-5 author must define
it locally. Reaching for the published item because the name matches would be a
citation-fidelity error in two places at once, and
`lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition` is exposed to the
same slip. Relatedly, `thm-monomial-symmetric-polynomials-form-a-basis` asserts an
$R$-**basis** while its declared route gives $\mathcal S$ only as a subring; the
$R$-module structure is one line from symmetry of constants, and should be that line
rather than an assumption.

**Step-5 obligation, batch 5.** §2 above: the $\mathbb Z$-module-hom / group-hom
identification, which must reach the author's task because it exists in no batch-5
file.

**Both round-1 items for the orchestrator still stand**: the batch-1 correction to
the step-3 decisions record (it asserts determinants are in order 58's closure; the
closure tops out at `splitting-fields` at 56, and I have now confirmed Milne needs no
determinant at all, so the Sylvester decline is structurally forced and correctly
reasoned), and the observation that roughly half of this run's contract citations
quote a *planned* item's title because there is no text yet — step 5 must re-quote
every in-pair citation against the text it authors, and `proof-contract.mjs --strict`
will not notice if it does not.

---

## 6. Summary

Four of five pairs are **ready-for-splice**. Order 58 clears: the locator is
consistent in both artifacts, the harvest is complete at 29 rows, and the two items
that claimed source backing from an excluded range are backed by rows I verified
against Grinberg's actual Definition 7.2.4 and Theorem 7.2.7(a). The three resultant
items follow from Milne's product definition, which is the only definition Milne
gives — his notes contain no Sylvester matrix anywhere.

Order 57.001 is **not-ready** for exactly one missing corollary,
`cor-number-of-solutions-of-a-binomial-congruence`, specified in full at §3.

No regression anywhere: item counts, coverage totals, contract citation counts,
published-quote matches, both gates and a full disk-home closure sweep over 212 items
and 667 edges all check out. The remaining work in group A is one corollary and four
coverage-row lines — no item rewrite, no dependency change, no proof change.
