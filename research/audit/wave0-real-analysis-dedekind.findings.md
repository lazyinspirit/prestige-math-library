# Wave 0 · real-analysis · dedekind sub-batch — Audit-Beta findings (A1/A2)

Owner: Audit-Beta (Opus 5, high effort). Date: 2026-08-02.
Scope: the 17 items of `construction-of-r-via-dedekind-cuts` that are **not** part
of the shared Z/Q prelude. The 22 prelude items are the sibling (cauchy) Beta's;
they were read here only as citation targets.

Namespaced artifacts written by this Beta, and nothing else:

- `research/audit/wave0-real-analysis-dedekind.provenance.jsonl` (17 rows)
- `research/audit/wave0-real-analysis-dedekind.proof-contracts.json` (12 contracts)
- this file

No file under `items/` or `library/` was touched. Every repair below is a
**proposal** for A3 adjudication.

## Coverage statement

Every one of the 17 items was opened from disk and read in full: Statement or
Definition, every `[F#]`/`[A#]`/`[L#]` fact, every numbered proof step, every
Remark, and the A-page prose in
`library/real-analysis/construction-of-r-via-dedekind-cuts.md`.

- **Every numbered proof step in all 12 proof-bearing items was read and checked
  against the facts it cites** — 104 steps in total. No exceptions.
- **Every dependency citation was checked semantically against the target item's
  on-disk text** — every `[F#]`/`[A#]`/`[L#]` wikilink (50 fact→target edges,
  captured one by one in the proof-contract `citations` blocks), plus the
  `deps`/`justified_by` lists of all 17 items. No exceptions.
- Cross-page targets read on disk: `thm-rat-ordered-field`, `thm-rat-field`,
  `lem-rat-archimedean`, `def-rationals`, `fs-sqrt2-rational` (prelude, sibling's
  ledger) and `thm-well-ordering-principle` (foundations, cross-category). Their
  missing provenance tags are not counted as defects of my items.
- `node tools/proof-contract.mjs research/audit/wave0-real-analysis-dedekind.proof-contracts.json --strict`
  → **0 errors, 0 warnings, 12/12 checked**.
- `node tools/content-policy.mjs --audit --ledger …` reports, for my 17 items,
  only `provenance-statement-missing` / `provenance-proof-missing` /
  `audit-ledger-mismatch` / `audit-ledger-evidence-mismatch` — i.e. exactly the
  "the item does not yet carry the block A4 will write" condition. No ledger-row
  shape, evidence-class, or rationale error.

## A1 — provenance census (17 items)

| | count |
|---|---|
| `statement: literature-derived` | 9 |
| `statement: ai-altered` | 8 |
| `statement: ai-generated` | **0** |
| `proof: ai-altered` | 7 |
| `proof: ai-generated` | 5 |
| `proof: not-applicable` (definitions) | 5 |
| evidence `exact-source` | 9 |
| evidence `semantic-source` | 8 |
| evidence `established-knowledge` / `trivial` / `none` | 0 |

Every row carries at least one HTTP-200-verified URL; no `established-knowledge`
waiver is requested, so **no Alpha concurrence is needed for any provenance row**
in this sub-batch. Consequence for `genrisk`: this sub-batch contributes **zero
new ai-generated statement seeds**.

Sources located and verified (all HTTP 200, checked 2026-08-02 with `curl -L`):

| key | URL | what it supplied |
|---|---|---|
| HWS | `https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf` | Def 1.2.1 (the three cut conditions verbatim), Def 1.2.2 (R = all cuts), Thm 1.2.5 (each `r^` is a cut), Fact 1.1 (totality, with the item's proof), Def 1.2.9/1.2.12 (order, positive/negative), Cor 1.2.17 (sumset), Ex 1.2.18 + Thm 1.2.19 (comm/assoc/identity), Thm 1.2.24 (additive inverse), Ex 1.2.7.3 (the sqrt(2) cut), Ex 1.2.13.1 (positive iff 0 in the cut) |
| GIR | `https://mathemanu.github.io/ConstructionofR.pdf` | `-alpha := {q : exists r>0, -q-r in U_alpha}` (the item's exact inverse), positive-case product, `1 := {q<1}`, reciprocal, the sign table, "(R,+,.;<) is an ordered field", Step 4 lub-as-union proof, Example 6 (sqrt(2) cut, named "a posteriori") |
| W_CR | `https://en.wikipedia.org/wiki/Construction_of_the_real_numbers` | order by inclusion, `A+B`, `-B`, `A x B`, division, rational embedding, "least upper bound … equal to union S" |
| W_DC | `https://en.wikipedia.org/wiki/Dedekind_cut` | the four conditions, "nonempty proper lower subset of Q with no maximal element", the sqrt(2) cut, least-upper-bound property |
| W_OF | `https://en.wikipedia.org/wiki/Ordered_field` | "if a <= b then a + c <= b + c", "if 0 <= a and 0 <= b then 0 <= a . b" |
| W_AP | `https://en.wikipedia.org/wiki/Archimedean_property` | "Let x be any element of K. Then there exists a natural number n such that n > x" |

Convention check (the standing risk on this page): the library fixes the
**lower-set** convention (a cut is the lower set, with no maximum) and says so
explicitly in `def-dedekind-cut`'s Remarks. HWS and Wikipedia's `Dedekind_cut`
use the same convention; Girotti uses the two-sided pair `(L,U)`, so every
Girotti quote was translated by `U_alpha = Q \ L_alpha` before comparison. No
convention error was found anywhere in the 17 items.

Legacy `authorship:` (owner decision D5): **none of the 17 items carries one**, so
the D5 deletion is a no-op for this sub-batch.

## A2 — defects found

Nothing in this sub-batch is a **false claim**. Every proof closes. The defects
are citation-precision (the historically dominant class) plus one debatable
restatement and one reading-order item.

### D1 — `thm-reals-dedekind-field` [L6] mis-attributes positivity to `lem-cut-order-total`

*Class (b) citation-precision. Location: Facts/dependencies. Severity: the most
substantive finding here.*

Current text:

> [L6] Inclusion totally orders $\mathbb{R}$, so exactly one of $A > 0^{*}$, $A = 0^{*}$, $A < 0^{*}$ holds; and $A > 0^{*}$ means $A$ contains a positive rational ([[lem-cut-order-total]]).

`lem-cut-order-total` states only that inclusion is reflexive, antisymmetric,
transitive and total. It never mentions `$0^{*}$`, positivity, or "contains a
positive rational". Those belong to `def-cut-order` (Definition: "A cut $A$ is
called **positive** iff $0^{*} < A$"; Remarks: "a cut is positive exactly when it
contains $0$"), and `def-cut-order` **is absent from this item's `deps`**. [L6] is
load-bearing at steps 1.1, 1.6, 2.3, 4.1, 8.1 and 10.1 — it is what drives the
whole sign case analysis for distributivity.

The content is true (trichotomy follows from totality; "contains a positive
rational" follows from `$0^{*} \subsetneq A$` with (C2) and (C3)); this is a
mis-attributed citation, not a false statement.

Proposed repair: split the fact and correct `deps`.

```
[L6] Inclusion totally orders $\mathbb{R}$, so exactly one of $A > 0^{*}$,
$A = 0^{*}$, $A < 0^{*}$ holds ([[lem-cut-order-total]]).

[L11] A cut $A$ is positive iff $0^{*} < A$; equivalently $0 \in A$, and then
(C3) supplies a rational $a \in A$ with $a > 0$ ([[def-cut-order]],
[[def-dedekind-cut]]).
```

with `def-cut-order` and `def-dedekind-cut` added to `deps` and the [L6]/[L11]
tags redistributed across the six citing steps. A `deps` change is a
public-interface change, so `impact-audit` closure is required.

### D2 — `lem-rat-cut-embeds` [L1] cites `def-real-dedekind` for `def-dedekind-cut` content

*Class (b). Location: Facts/dependencies.*

> [L1] Cut structure: downward closure ($p \in A$, $q < p \Rightarrow q \in A$), the separation property ($a \in A$, $b \notin A \Rightarrow a < b$), and the absence of a greatest element ([[def-real-dedekind]]).

`def-real-dedekind`'s Definition only says elements of `$\mathbb{R}$` are
"a subset of $\mathbb{Q}$ satisfying (C1)–(C3)". (C2), (C3) and the separation
restatement are stated in `def-dedekind-cut` (the last in its Remarks), and
`def-dedekind-cut` is **not** in this item's `deps`. [L1] is used at steps 1.8,
2.5, 2.6 (the density argument).

Proposed repair: add `[[def-dedekind-cut]]` to [L1] and to `deps`; keep
`def-real-dedekind` for the membership convention. Impact-audit closure required
(`deps` change).

### D3 — `lem-cut-archimedean` [L1]: the same mis-attribution

*Class (b). Location: Facts/dependencies.*

> [L1] A cut is a proper subset of $\mathbb{Q}$ ($A \ne \mathbb{Q}$), and $a \in A$, $b \notin A \Rightarrow a < b$ ([[def-real-dedekind]]).

(C1) and the separation property are `def-dedekind-cut`'s, which is absent from
`deps`. Used at steps 1.1 and 2.1. Same repair as D2.

### D4 — `lem-cut-additive-inverse` [A2]: well-ordering asserted without the available library citation

*Class (b), low priority. Location: Facts/dependencies. Nonfatal under the
30-second rule.*

> [A2] Well-ordering of $\mathbb{Z}$: every nonempty set of integers that is bounded above has a greatest element.

No wikilink, and this is load-bearing at step 3.1 (the greatest `n` with
`$nw \in A$`). The library proves `thm-well-ordering-principle` ("Every nonempty
subset $S \subseteq \mathbb{N}$ has a least element"), already a cross-category
dependency of this page's N prelude. The reduction is one line and can go in the
fact itself: `$K$` is bounded above by `$M$`, so `$\{M-k : k \in K\}$` is a
nonempty set of positive naturals; its least element `$M-n$` gives the greatest
`$n \in K$`. Proposed repair: restate [A2] citing
`[[thm-well-ordering-principle]]` with that reduction, and add it to `deps`.

### D5 — `lem-cut-reciprocal` [L6]: the same, for well-ordering of N

*Class (b), low priority.*

> [L6] Well-ordering of $\mathbb{N}$: every nonempty set of natural numbers has a least element (a foundational property of $\mathbb{N}$, the assumed base of the construction).

This is verbatim `thm-well-ordering-principle`, which the library proves and this
fact does not cite. Used at step 2.1. Proposed repair: link it and add it to
`deps`. (Cosmetic aside: the fact labels in this item run L1, L2, L3, L4, L6, L5 —
[L6] is written before [L5]. Ordering only; `precheck` passes.)

### D6 — `lem-cut-reciprocal` [L5] bundles an unproved Bernoulli inequality

*Class (b)/(d), low priority. Nonfatal.*

> [L5] Rational power growth: for a rational $y > 1$ one has $y^{n} \ge 1 + n(y-1)$ for every natural $n \ge 1$ (Bernoulli, by induction from $\mathbb{Q}$ arithmetic), and by the Archimedean property every rational is exceeded by some such power; …

Bernoulli's inequality is not established anywhere in the library and is folded
into a fact whose wikilinks are `lem-rat-archimedean` and `def-dedekind-cut`.
It is load-bearing at step 1.3 (existence of `$n$` with `$a_{0}y^{n} \notin A$`).
The claim is true and the induction is elementary; nothing here is false.
Options for Alpha: leave with this note, or restate [L5] so the induction is an
explicit inline derivation rather than an imported named inequality.

### D7 — `lem-cut-order-total` [A2]: rational trichotomy asserted without citation

*Class (b), lowest priority. Nonfatal.*

[A2] states trichotomy of the rational order with no wikilink;
`thm-rat-ordered-field` states "the order is total" and is not in this item's
`deps`. Used at step 3.1. Optional repair only.

### D8 — `ex-sqrt2-cut`: the title and prose say "is $\sqrt 2$"; the verification does not prove that

*Class (d) debatable restatement. Location: title, Example prose, step 4.1.
My judgement: **nonfatal**, but it is exactly the "title asserting more than the
proof gives" pattern, so it is Alpha's call.*

Title: "The cut $S = \{q : q<0 \text{ or } q^2<2\}$ is $\sqrt{2}$". The Example
says "it is the real number $\sqrt{2}$ that $\mathbb{Q}$ lacks"; step 4.1 ends
"it is the real number $\sqrt{2}$ absent from $\mathbb{Q}$."

What the Verification actually establishes: `$S$` satisfies (C1)–(C3), hence is a
real number (step 3.1), and `$S \ne p^{*}$` for every rational `$p$` (step 4.1).
It never shows `$S \cdot S = 2^{*}$`, and the library nowhere defines a square
root of a real number, so "is $\sqrt2$" is a name rather than a proved identity.

Mitigating evidence: the sources do the same. Girotti Example 6 writes "A
posteriori (once we'll be done with the construction of R), we can say that
$\alpha$ is actually the number $\sqrt2$"; HWS Exercise 1.2.7.3 and Wikipedia
both present this exact set as *the* cut representing `$\sqrt2$`. The naming is
standard practice, and the item's own text is honest that the point is the
absence of a rational boundary.

If Alpha wants the title to claim only what is proved, the minimal change is:
retitle to "The cut $S = \{q : q<0 \text{ or } q^2<2\}$ is an irrational real
number" and change the two prose clauses to "the cut that names $\sqrt2$". No id
change, no reading-order change, so it is inside the R1 delegation. I do not
recommend adding a `$S \cdot S = 2^{*}$` lemma: that is new mathematics, out of
audit scope.

### D9 — page reading order puts `thm-reals-dedekind-field` before the lemma it cites

*OWNER QUEUE (reading-order change; not delegated).*

`library/real-analysis/construction-of-r-via-dedekind-cuts.md` lists
`… def-cut-multiplication, lem-cut-reciprocal, thm-reals-dedekind-field,
lem-rat-cut-embeds, thm-reals-dedekind-ordered-field …`, but
`thm-reals-dedekind-field` has `lem-rat-cut-embeds` in its `deps` and cites it as
[L8] at step 1.4 (`$1^{*} \ne 0^{*}$`). The reader meets the citation before the
cited lemma.

Not a cycle and not a `depcheck` failure: `lem-rat-cut-embeds` does not depend on
`thm-reals-dedekind-field`, and all five of its own `deps`
(`def-real-dedekind`, `def-cut-order`, `def-cut-addition`,
`def-cut-multiplication`, `thm-rat-ordered-field`) already precede
`thm-reals-dedekind-field` on the page. Proposed route: swap the two entries in
the page's `items:` list so `lem-rat-cut-embeds` comes first. Evidence that the
swap is safe is above; the decision is the owner's.

### D10 — sources hygiene

*Class (c), no mathematical content. Recorded, low priority.*

- Eight of the 17 items (`def-real-dedekind`, `lem-rational-cut-is-cut`,
  `lem-cut-order-total`, `lem-cut-reciprocal`, `thm-reals-dedekind-field`,
  `thm-reals-dedekind-ordered-field`, `lem-cut-archimedean`,
  `thm-dedekind-complete`) reference "T. Tao, *Analysis I*". Tao constructs
  `$\mathbb{R}$` from **Cauchy sequences of rationals**, not from Dedekind cuts,
  so the reference is not apposite for cut-specific material. Suggest, at A4,
  adding the cut-specific URLs from my ledger; whether to drop the Tao entry is
  Alpha's call.
- The Rudin reference URL on every item is
  `https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis`, the
  Wikipedia article *about the book* rather than the mathematics. It returns 200
  and is not wrong, but it carries no verifiable statement.
- `https://bookstore.ams.org/chel-79` (Landau) returns **403 to a bare fetch and
  200 to a normal client**; it is live, not dead. I did not put it in my ledger,
  since I could not read content from it.

## Checks that passed (recorded, so the absence of a finding is not silence)

- **Multiplication of cuts, the classic risk area.** `def-cut-multiplication`
  restricts the positive-case formula to strictly positive `$A, B$` and supplies
  zero products by the sign rule, with a Remark explaining why: at `$A = 0^{*}$`
  the set `$\{q \le 0\}$` has greatest element `$0$` and is not a cut. That is
  correct and is *better* than Wikipedia's `$a \ge 0, b \ge 0$` phrasing. The
  sign extension via `$|A|$` matches Girotti's three-row table.
- **The additive inverse, the second classic risk area.**
  `lem-cut-additive-inverse` steps 2.2–4.1 were checked arithmetically:
  `$K = \{k \in \mathbb{Z} : kw \in A\}$` is bounded above by the Archimedean
  `$M$` and contains `$-N$`; with `$n = \max K$`, `$p = -(n+2)w$` has witness
  `$w$` because `$-p-w = (n+1)w \notin A$`, and `$nw + p = -2w = v$`. The
  identity `$A + (-A) = 0^{*}$` is exact, not merely an inclusion, exactly as
  `def-cut-addition`'s Remark promises.
- **The least-upper-bound proof.** `thm-dedekind-complete` step 1.1 uses the
  upper bound `$B$` precisely where properness of `$C$` needs it, and the
  nonemptiness of `$S$` precisely where nonemptiness of `$C$` needs it. Both
  hypotheses are load-bearing and both are present. Steps 1.4/1.5 give the two
  halves of "least upper bound" without gaps.
- **`lem-cut-reciprocal`.** Step 3.1 checks out: `$x < t = 1/y$` gives
  `$1/x > y$`, hence `$1/p = a/x > ay = s$`, so `$p < 1/s$` with `$s \notin A$`;
  and `$x = ap$` with both factors positive. Step 1.1's properness argument
  (`$p < 1/s < 1/a_{0}$`) is correct because every `$s \notin A$` exceeds every
  element of `$A$`.
- **`thm-reals-dedekind-field` distributivity.** The reverse inclusion (steps
  3.1, 4.1, 5.1) closes: the normalisation at 3.1 legitimately assumes
  `$s, t > 0$` (both cannot be `$\le 0$` when `$u > 0$`), and the rescaling
  `$b = s/a \le b_{1}$`, `$c = t/a \le c_{1}$` with `$a = \max(a_{1},a_{2})$`
  puts `$b \in B$`, `$c \in C$` by downward closure. Steps 7.1–10.1 exhaust the
  sign cases. Steps 2.1 and 3.2 argue general-sign associativity/commutativity by
  matching magnitude and sign rather than elementwise; the missing lines
  (`$-(-X) = X$`, `$|-X| = |X|$`) are 30-second gaps and are recorded, not
  chased.
- **`ex-sqrt2-cut` algebra.** `$r-q = (2-q^{2})/(q+2)$` and
  `$r^{2}-2 = 2(q^{2}-2)/(q+2)^{2}$` verified directly; likewise `$s < p$` and
  `$s^{2} > 2$` when `$p^{2} > 2$` at step 4.1.
- **Remarks read with proof-step suspicion.** No mathematical falsehood found in
  any Remark. `def-cut-order`'s Remark ("a cut is positive exactly when it
  contains 0") is correct and matches HWS Exercise 1.2.13.1.
  `def-cut-addition`'s Remark on why the `$r > 0$` slack is essential is correct.
  `def-dedekind-cut`'s Remark deriving the separation property is correct.
- **A-page prose.** No mathematical falsehood, no counts, no self-ranking, no
  reading-position claim, no survey claim about other pages. The summary does
  **not** conform to the two-paragraph page-summary contract (owner, 2026-07-30),
  but the page was published 2026-07-25 and that contract is forward-looking:
  recorded, not chased, and not a repair proposal.
- **Published-claim decay:** none noticed in this sub-batch.

## Escalations to Alpha

1. **D8** — whether "is $\sqrt2$" in a title over a verification that only proves
   irrationality of the cut is an overstatement. I judge it nonfatal (the sources
   name it the same way, explicitly a posteriori) but I am not the adjudicator of
   a title claim.
2. **D1/D2/D3** each require a `deps` addition, hence `impact-audit` closure from
   a dedicated touch baseline. If Alpha prefers to avoid three interface changes
   in a wave-0 batch, the alternative is to restate the offending facts so they
   claim only what the already-declared target states — for D1 that would mean
   deleting the "contains a positive rational" clause from [L6] and deriving it
   inline at steps 1.1 and 2.3 instead. Both routes are correct; I recommend the
   `deps` addition, since the positivity notion genuinely is `def-cut-order`'s.
3. No provenance row needs Alpha concurrence (no `established-knowledge`
   evidence class was used).

---

# A4 — applied repairs (2026-08-02)

Authorised by the A3 record (`research/audit/wave0-real-analysis-dedekind.A3.md`):
all 17 retags, plus D1, D2, D3, D4, D5, D7. **D6, D8 and the Tao/Rudin reference
curation were not touched** (deferred to Alpha at A6); **D9 was not touched**
(owner queue). Nothing outside my 17 items was edited — verified with
`git status` plus a grep confirming the two new source URLs appear on no other
item. The other modified files in the working tree belong to the sibling wave-0
Betas.

Touch snapshot taken **before the first edit**:
`node tools/touchlog.mjs snap research/audit/wave0-touches.json pre-A4-dedekind`
→ "snapshot "pre-A4-dedekind" recorded — 2684 items, 2 snapshot(s) in ledger".

## Retags (all 17, class (c))

Each item gained, immediately after `origin: session`:

```yaml
provenance:
  statement: <ledger value>
  proof: <ledger value>
```

and the ledger's cut-specific URLs appended to `sources.references`
(HWS handout, Girotti addendum, Wikipedia Dedekind cut / Construction of the real
numbers / Ordered field / Archimedean property, per row). Pre-existing references
were left in place. No `authorship:` line existed to delete (D5 of the workflow is
a no-op here). On the 11 pure-retag items `verification.judge` and
`verification.audited` were preserved, per §9.

One defect of my own, found and fixed inside this stage: the first pass wrote two
reference titles containing unescaped inner double quotes
(`- title: "Math 331 course handout, "Dedekind Cuts and …""`), which is invalid
YAML. Corrected in place to colon-separated titles on all 21 affected reference
lines (11 HWS, 10 Girotti) and re-verified by parsing the frontmatter of all 17
items with a YAML parser.

## Material repairs

All six delete the stale `verification.judge` block (where one existed:
`lem-cut-order-total`, `lem-cut-additive-inverse`, `lem-cut-reciprocal`,
`lem-cut-archimedean`; `thm-reals-dedekind-field` and `lem-rat-cut-embeds` had
none) and the obsolete `verification.audited: 2026-07-25` stamp. A6 writes
`verification.verified` with `scope: published-audit`.

### D1 — `thm-reals-dedekind-field` (class b, citation-precision)

`deps` old → new: `def-dedekind-cut` and `def-cut-order` inserted after
`def-real-dedekind`; nothing removed.

[L6] old:

> [L6] Inclusion totally orders $\mathbb{R}$, so exactly one of $A > 0^{*}$, $A = 0^{*}$, $A < 0^{*}$ holds; and $A > 0^{*}$ means $A$ contains a positive rational ([[lem-cut-order-total]]).

[L6] new:

> [L6] Inclusion totally orders $\mathbb{R}$, so exactly one of $A > 0^{*}$, $A = 0^{*}$, $A < 0^{*}$ holds ([[lem-cut-order-total]]).

[L11] added after [L10]:

> [L11] A cut $A$ is positive iff $0^{*} < A$, and $0^{*} < A$ holds exactly when $0 \in A$; in that case (C3) supplies $a \in A$ with $a > 0$ ([[def-cut-order]], [[def-dedekind-cut]]).

Both clauses of [L11] are quoted from the cited items: `def-cut-order`'s
Definition ("A cut $A$ is called **positive** iff $0^{*} < A$") and its Remark
("a cut is positive exactly when it contains $0$"), and `def-dedekind-cut`'s (C3).

Tag redistribution over the six citing steps, by what each step actually uses:

| step | old tags | new tags | why |
|---|---|---|---|
| 1.1 | `[L1, L2, L6, L7]` | `[L1, L2, L6, L7, L11]` | uses the nonnegative/positive split (L6) *and* positivity, for nonemptiness of the product (L11) |
| 1.6 | `[L2, L3, L6]` | unchanged | sign-class toggling: trichotomy only |
| 2.3 | `[L1, L6, step 1.1, step 1.5]` | `[L1, L11, step 1.1, step 1.5]` | "each contain a positive rational" is positivity, not trichotomy |
| 4.1 | `[L6, step 1.1, step 3.1]` | `[L11, step 1.1, step 3.1]` | `$a = \max(a_1,a_2) \in A$, $a > 0$` rests on positivity of the representatives |
| 8.1 | `[L5, L6, …]` | unchanged | "by the sign trichotomy these cases are exhaustive" |
| 10.1 | `[L6, step 8.1, step 9.1]` | unchanged | "By the sign trichotomy every cut $A$ is either …" |

### D2 — `lem-rat-cut-embeds` (class b)

`deps`: `def-dedekind-cut` added after `def-real-dedekind`.

[L1] old ending: `… and the absence of a greatest element ([[def-real-dedekind]]).`
[L1] new ending: `… and the absence of a greatest element ([[def-dedekind-cut]]), holding of every element of $\mathbb{R}$ ([[def-real-dedekind]]).`

### D3 — `lem-cut-archimedean` (class b)

`deps`: `def-dedekind-cut` added after `def-real-dedekind`.

[L1] old:

> [L1] A cut is a proper subset of $\mathbb{Q}$ ($A \ne \mathbb{Q}$), and $a \in A$, $b \notin A \Rightarrow a < b$ ([[def-real-dedekind]]).

[L1] new:

> [L1] A cut is a proper subset of $\mathbb{Q}$ ($A \ne \mathbb{Q}$), and $a \in A$, $b \notin A \Rightarrow a < b$ ([[def-dedekind-cut]]); the elements of $\mathbb{R}$ are exactly these cuts ([[def-real-dedekind]]).

### D4 — `lem-cut-additive-inverse` (class b)

`deps`: `thm-well-ordering-principle` appended.

[A2] old:

> [A2] Well-ordering of $\mathbb{Z}$: every nonempty set of integers that is bounded above has a greatest element.

[A2] new:

> [A2] A nonempty set $K \subseteq \mathbb{Z}$ with $k < M$ for every $k \in K$ has a greatest element: $\{\, M - k : k \in K \,\}$ is then a nonempty set of positive integers, so it has a least element $M - n$ by "every nonempty subset $S \subseteq \mathbb{N}$ has a least element" ([[thm-well-ordering-principle]]), and that $n$ is the greatest element of $K$.

The strict bound `$k < M$` is exactly what step 2.2 delivers ("any $k \in
\mathbb{Z}$ with $kw \in A$ satisfies $k < M$"), so `$M-k$` is a *positive*
integer and the appeal to the library's `$\mathbb{N}$` least-element theorem does
not depend on whether `$0 \in \mathbb{N}$`. Step 3.1 is unchanged: "bounded
above" still describes `$K$` correctly.

### D5 — `lem-cut-reciprocal` (class b)

`deps`: `thm-well-ordering-principle` appended.

[L6] old:

> [L6] Well-ordering of $\mathbb{N}$: every nonempty set of natural numbers has a least element (a foundational property of $\mathbb{N}$, the assumed base of the construction).

[L6] new:

> [L6] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$ ([[thm-well-ordering-principle]]).

The new text is the cited theorem's Statement verbatim.

### D7 — `lem-cut-order-total` (class b)

`deps`: `thm-rat-ordered-field` appended.

[A2] old:

> [A2] The order on $\mathbb{Q}$ is total (trichotomy): for rationals $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds.

[A2] new:

> [A2] The order on $\mathbb{Q}$ is total ([[thm-rat-ordered-field]]): for rationals $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds.

## Gate results after A4

| gate | result |
|---|---|
| `tools/reflow.mts` on the 6 changed proof items | `unchanged` ×6 (no soft-wrapped step introduced) |
| `tools/precheck.mts` on all 12 proof-bearing items | **12 checked, 0 failing — all clean** |
| `tools/proof-contract.mjs … --strict` | **0 errors, 0 warnings, 12/12 checked** against the repaired text |
| `tools/content-policy.mjs --audit --ledger …` | **0 diagnostics on any of my 17 items** (was 51 before A4) |
| `tools/citecheck.mjs` | no diagnostic on any of my 17 |
| `tools/rendercheck.mjs` | no diagnostic on any of my 17 |
| `tools/extcheck.mjs`, `tools/fwdcheck.mjs` | OK; the only flagged items are pre-existing and unrelated |
| `tools/depcheck.mjs` | **FAIL, expected and transient**: `published-unaudited` on exactly the 6 material repairs, because §9 requires deleting `audited` before A6 writes `verification.verified`. Confirmed against `depcheck.mjs:281`, which accepts `audited` or `verified`. A6 closes it. (The same error currently appears for three sibling-owned items, likewise mid-A4.) |

The proof contracts were regenerated so they describe the **final** text: [L6]
`uses` narrowed to steps 1.1/1.6/8.1/10.1, new [L11] citation entries against
`def-cut-order` and `def-dedekind-cut` with `uses` 1.1/2.3/4.1, second citation
entries for the split [L1] facts of `lem-rat-cut-embeds` and
`lem-cut-archimedean`, and new citation entries for
`thm-well-ordering-principle` ([A2] of `lem-cut-additive-inverse`, [L6] of
`lem-cut-reciprocal`) and `thm-rat-ordered-field` ([A2] of
`lem-cut-order-total`). Each affected `risk_review.notes` now records the applied
repair instead of the proposal.

## Not done at A4, by instruction

- **D6** (Bernoulli inequality folded into `lem-cut-reciprocal` [L5]) — deferred
  to Alpha at A6. The fact text is untouched.
- **D8** (`ex-sqrt2-cut` title "is $\sqrt2$") — deferred to Alpha at A6 with the
  A3 recommendation to retitle. Title, Example prose and step 4.1 untouched.
- **D10 curation** (dropping the inapposite Tao reference and the
  about-the-book Rudin URL) — deferred to Alpha. The additive half was applied.
- **D9** (page reading order) — owner queue at A10. The page file is untouched.
- **Post-stage touch snapshot** — deliberately **not** taken by me. Sibling
  wave-0 Betas were editing concurrently, so a snapshot taken now would attribute
  their changes to my stage and corrupt the `impact-audit` baseline. The
  orchestrator should snap once wave-wide after every A4 batch reports.
- **`impact-audit`** for the five `deps` additions (`def-dedekind-cut` ×3,
  `def-cut-order` ×1, `thm-well-ordering-principle` ×2, `thm-rat-ordered-field`
  ×1) runs at wave level from the wave-0 baseline, per the A3 record. Note that
  all of these are *additions* of already-transitively-present prerequisites: no
  Statement, Definition, title or conclusion changed anywhere, so no downstream
  consumer's licence is weakened.

## Checkpoint

Substage: A1, A2 and A4 **complete** for all 17 owned items. Artifacts on disk:
the three namespaced files listed at the top, plus the 17 edited item files.
Gates: `precheck` 12/12 clean, `proof-contract --strict` 12/12 clean,
`content-policy --audit` clean on all 17; `depcheck` fails only with the expected
transient `published-unaudited` on the 6 material repairs. Open constraint: the
lower-set cut convention must be preserved by any further repair. Exact next
action: A6 — Alpha certifies these six repairs through an independent reader
(I must not certify my own), writes `verification.verified` with
`scope: published-audit` and `delegated_by: owner` on them, adjudicates the
deferred D6/D8/D10-curation, and runs the wave-level `impact-audit` for the five
`deps` additions. D9 goes to the A10 owner queue.
