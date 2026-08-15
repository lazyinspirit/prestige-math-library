# frontier-13 — Alpha **group b**, step 6b adjudication (batches 3 and 7)

**Alpha:** Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 1,000,000-token window.
**Scope:** batches **3** and **7** only. Batches 1, 2, 4, 5, 6 were not opened,
and no file belonging to them was written. `research/plan-spec.json` untouched.
**Date:** 2026-08-15. No blockers; no permission prompt raised by me or by any
subagent I dispatched.

Reader reports adjudicated: `research/frontier-13-reader-3.md` (batch 3) and
`research/frontier-13-reader-7.md` (batch 7) — the two readers whose assignments
are this group's batches. **12 findings adjudicated:** 5 the reader called fatal,
7 the reader called polish.

Every verdict below is against disk. For each finding I opened the flagged item
**and** the item its `[F#]`/`[L#]` fact cites, and compared the restatement with
the cited `Statement` verbatim.

---

## Summary of verdicts

| # | reader | item | reader called it | **my verdict** |
|---|---|---|---|---|
| 1 | 3 | page `diagonalisation-and-the-minimal-polynomial`, summary ¶2 | fatal | **confirmed_fatal** |
| 2 | 3 | `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` [L7] | fatal | **confirmed_fatal** |
| 3 | 3 | same item, step 1.2 | polish | **confirmed_nonfatal**, polished |
| 4 | 3 | `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` [L2] | fatal | **confirmed_fatal** |
| 5 | 3 | `thm-gram-determinant-detects-linear-independence` [L4]/[L7] | fatal | **confirmed_fatal** |
| 6 | 3 | `cor-orthogonal-and-unitary-operators-form-groups-…` [L5] | fatal | **confirmed_fatal** |
| 7 | 3 | `ex-weighted-inner-product-on-finite-coordinate-space` [L3] | polish | **confirmed_nonfatal**, polished |
| 8 | 7 | `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` step 1.2 | polish | **confirmed_nonfatal**, polished |
| 9 | 7 | `thm-words-avoiding-finitely-many-factors-…` step 2.1 | polish | **confirmed_nonfatal**, polished |
| 10 | 7 | `ex-fibonacci-companion-matrix` [L2]/step 1.1 | polish | **confirmed_nonfatal**, polished |
| 11 | 7 | `cex-factorial-generating-series-is-not-rational` step 1.1 | polish | **confirmed_nonfatal**, polished |
| 12 | 7 | `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis` step 3.1 | polish | **confirmed_nonfatal**, polished |

**5 `confirmed_fatal`, 7 `confirmed_nonfatal`, 0 `false_positive`.** Reader 3 and
reader 7 were accurate on all twelve, severity included — reader 7's five
findings were all correctly graded as sub-30-second bridges rather than inflated
to fatal, and that restraint is worth naming given how much of this run's noise
came from confident wrong findings.

I briefly graded finding 3 fatal and corrected it. My reason for the upgrade was
that the missing input carried a whole direction of a biconditional — but the
owner's rule of 2026-07-31 is about whether a *competent reader closes the gap in
30 seconds*, not about how load-bearing the step is, and "the roots of $\chi_T$
are the eigenvalues" is closed instantly by any such reader. The repair is
identical under either label; only the count that reaches the step-10 fatal-error
report changes, and inflating that count is exactly the failure mode to avoid.

**Six defects the readers did not report** are recorded in §3; one is a
rendering bug that would have shipped visible LaTeX source to readers.

---

## 1. The dominant class, confirmed

The brief predicted that ten of the run's nineteen findings would be an
**inflated dependency restatement**. Four of my five fatal findings are exactly
that, and all four have the same shape: the library's determinant
theorems are stated for $n\ge1$, the `[L#]` fact dropped the hypothesis, and a
numbered step then applied the fact at size zero in an item whose Statement
deliberately *includes* the zero-dimensional case.

One structural fact makes this diagnosis certain rather than inferred. **The
proof contracts already quoted the cited Statements correctly, with `$n\ge1$
included.** So the batch's own durable record disagreed with the item text the
reader sees, in exactly the direction the reader reported. The defect was
introduced when the contract quote was paraphrased into an `[L#]` line, and
nothing downstream compared the two. That is a real gap in the machinery, not
just in these four items: `proof-contract --strict` checks that the quote occurs
in the cited Statement and that the step cites the fact, but it never checks the
`[L#]` prose against the quote it is supposed to be a shortening of.

In no case did I repair by inflating the citation further or adding an unused
dep. Three were repaired by restoring the cited hypothesis and restricting the
step, with the already-present boundary step taking the excluded case; one by
retargeting a flatly wrong citation to the item that actually states the fact.

---

## 2. Finding-by-finding

### Finding 1 — page summary asserts a false theorem · `confirmed_fatal`

**Reader 3, finding 1.** Page `diagonalisation-and-the-minimal-polynomial`,
summary ¶2, final clause.

**Evidence.** The summary said the page delivers "simultaneous diagonalisation of
a commuting family". The theorem on the page is
`thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`,
whose Statement opens "Let $\mathcal T$ be a family of **diagonalisable**
endomorphisms". Pairwise commutation alone does not suffice, and **the page's own
companion item says so**: `cex-commuting-endomorphisms-need-not-be-diagonalisable`
refutes the exact proposition the summary asserted, using $\{I_2,J\}$ with
$J=\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$, and its step 2.1 closes with
"The missing hypothesis in [L1] is diagonalisability of every member."

This is not a gap a reader closes in 30 seconds — it is a false statement, in
reader-facing prose, contradicted by an item on the same page pair. Fatal.

**Repair.** The clause now reads "…and the simultaneous diagonalisation of a
pairwise commuting family of diagonalisable endomorphisms." Paragraph 2 goes
from 114 to 118 words, inside the 150-word ceiling; the two-paragraph structure
and every other clause are unchanged.

### Finding 2 — `[L7]` drops $n\ge1$ · `confirmed_fatal`

**Reader 3, finding 2.** `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`.

**Evidence.** `[L7]` read "The determinant of a triangular matrix is the product
of its diagonal entries." The cited `thm-determinant-of-a-triangular-matrix`
states "If $A=(a_{ij})\in M_n(R)$ is upper or lower triangular over a commutative
ring, **with $n\ge1$**". The theorem's own Statement says "The assertion includes
the zero-dimensional case", and step 1.1 was written for every diagonalisable
$T$ — so the step applied `[L7]` at $n=0$, outside the cited domain. The
conclusion is true there and step 3.1 disposed of it, but that does not make the
restatement accurate or the step licensed.

**Repair.** `[L7]` restored to "For $n\ge1$, the determinant of a triangular
matrix in $M_n(R)$ over a commutative ring is the product of its diagonal
entries." Step 1.1 now opens "Suppose $T$ is diagonalisable and $\dim V\ge1$"
and notes that $xI-[T]$ is triangular of positive size. Step 3.1 now proves
$\dim V=0$ outright in both directions — empty eigenbasis, $\chi_T=1$ splitting
as an empty product by [L4], no eigenvalue so the multiplicity condition is
vacuous — instead of gesturing at it.

### Finding 3 — step 1.2 needs "roots are eigenvalues" · `confirmed_nonfatal`, polished

**Reader 3, finding 3**, same item, step 1.2.

**Evidence.** Step 1.2 argued that because $\chi_T$ splits, "the sum of its
algebraic multiplicities is its degree." I opened
`def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`: algebraic
multiplicity is defined **only for $\lambda\in\sigma_F(T)$**. So the sum over
eigenvalues equals the degree only once every root of $\chi_T$ is known to be an
eigenvalue — otherwise a root that is not an eigenvalue would contribute to the
degree while contributing no eigenspace. The gap is real, and it sits under the
whole converse direction.

It is nonetheless **nonfatal**: the missing fact is one a competent reader
supplies immediately, which is the owner's 30-second test. Since I was already
repairing the same item under finding 2, closing it cost one fact line, and step
8 would not have permitted it later.

**Repair.** Added `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`
to `deps` and as `[L8]`, quoting its Statement: "$\sigma_F(T)=\{\lambda\in
F:\chi_T(\lambda)=0\}$." Step 1.2 now derives the multiplicity sum through
[L8]. This is a *used* dep, not padding — the contract records `[L8]` used at 1.2.

### Finding 4 — `[L2]` cites an item that does not state the fact · `confirmed_fatal`

**Reader 3, finding 4.** `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`.

**Evidence.** `[L2]` claimed "In an orthonormal basis, a vector's coordinate at a
basis vector is their inner product in that order", citing
`cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`. I opened
that corollary: its entire Statement is "Every finite-dimensional real or complex
inner product space has an orthonormal basis. In dimension zero, this is the
empty basis." It is an **existence** statement and says nothing whatever about
coordinates. Step 1.1 then used `[L2]` to get $A_{ij}=\langle Te_j,f_i\rangle$.
This is not an enlarged domain — the cited item does not contain the fact at all.

**Repair.** Retargeted to the item that does state it.
`thm-bessel-inequality-and-finite-parseval-identity` (page order 18, ahead of
this theorem at order 31, so no forward reference) states, for an orthonormal
basis, $v=\sum_{i<r}\langle v,e_i\rangle e_i$. `[L2]` now quotes that clause, the
existence corollary is dropped from `deps` (the Statement already *hypothesises*
both bases, so existence was never needed), and step 1.1 writes the expansion out
in each basis and appeals to uniqueness of a coordinate column before invoking
[L3].

### Finding 5 — `[L4]` and `[L7]` drop $n\ge1$ · `confirmed_fatal`

**Reader 3, finding 5.** `thm-gram-determinant-detects-linear-independence`.

**Evidence.** `thm-determinant-multiplicative` states "For $n\ge1$", and
`thm-determinant-of-transpose` "For every $n\ge1$"; `[L4]` asserted both without
qualification, and `[L7]` likewise. Step 1.2 opened "Suppose the list is
independent", which **includes the empty list**, and step 2.1 applied all three
results to the $r\times r$ matrix $R$.

**Repair.** `[L4]` and `[L7]` restored with $n\ge1$. Step 1.2 now reads "Suppose
the list is independent and $r\ge1$"; step 2.1 states "Since $r\ge1$" where it
invokes them; step 3.1 now disposes of $r=0$ completely — the empty list is
independent by [L3], [L1] gives determinant $1$, which is positive, so all three
assertions hold — and then hands $r\ge1$ to steps 1.1 and 2.1.

### Finding 6 — `[L5]` drops $n\ge1$ · `confirmed_fatal`

**Reader 3, finding 6.** `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`.

**Evidence.** `[L5]` said "Transposition preserves determinant" without
qualification; `thm-determinant-of-transpose` says "For every $n\ge1$". The
corollary's Statement explicitly covers dimension zero, and step 1.2 was
unrestricted.

**Repair.** `[L5]` restored with $n\ge1$. Step 1.2 now opens "Suppose $\dim
V=n\ge1$" and step 2.1 gives $V=0$ from [L4]'s dimension-zero clause. Two further
inputs step 1.2 was using silently are now named — see §3.

### Finding 7 — `[L3]` presents a derived formula as the cited Statement · `confirmed_nonfatal`, polished

**Reader 3, finding 7.** `ex-weighted-inner-product-on-finite-coordinate-space`.

**Evidence.** `[L3]` gave the line-projection formula $\langle
v,u\rangle\langle u,u\rangle^{-1}u$ for an arbitrary nonzero $u$;
`prop-orthogonal-projection-formula-and-linearity` states
$P_Wv=\sum_{i<r}\langle v,e_i\rangle e_i$ for an **orthonormal** basis. The
cited proposition does yield the line formula after normalising, so the reader's
*polish* call is right — but the normalisation was hidden inside the citation
restatement, which is the pattern this run keeps producing.

**Repair.** `[L3]` now quotes the orthonormal-basis formula. Step 2.1 does the
normalisation on the page: $e=\lVert u\rVert_a^{-1}u$ is an orthonormal basis of
$\operatorname{span}(u)$, so $P_Wv=\langle v,e\rangle_ae=\langle
v,u\rangle_a\langle u,u\rangle_a^{-1}u$, then the arithmetic $\langle
v,u\rangle_a=1$, $\langle u,u\rangle_a=5$, $P_Wv=(1/5)u$. I re-checked every
displayed number: $\lVert(1,1)\rVert_a^2=1+4=5$, weighted projection $(1/5,1/5)$,
unweighted $(1/2,1/2)$. The Example's claims are all correct; only the derivation
was compressed.

### Finding 8 — a binomial coefficient used as a polynomial · `confirmed_nonfatal`, polished

**Reader 7, finding 1.** `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field`, step 1.2.

**Evidence.** `[L7]` faithfully quotes `thm-binomial-closed-formula`, which is
about **natural-number** binomial coefficients. Step 1.2 nonetheless wrote
$z\mapsto\binom{z+j-1}{j-1}$ as an element of $E[z]$; no library item defines a
binomial coefficient with an indeterminate upstairs. The reader's severity call
is right — the bridge is elementary and the theorem and its converse are
unaffected.

**Repair.** Step 1.2 now defines $q_j(z)=((j-1)!)^{-1}(z+1)\cdots(z+j-1)\in E[z]$
(empty product at $j=1$, so $q_1=1$), records degree $j-1$ and leading
coefficient $((j-1)!)^{-1}\ne0$, and derives $q_j(n)=\binom{n+j-1}{j-1}$ for
natural $n$ from [L7] via $\binom{n+j-1}{j-1}(j-1)!=(n+j-1)^{\underline{j-1}}
=(n+1)\cdots(n+j-1)$. Step 3.1 now names $p_i=\sum_j b_{ij}q_j$ explicitly and
derives uniqueness from [L3] together with the basis property.

### Finding 9 — the rejection argument needs the longest-suffix invariant · `confirmed_nonfatal`, polished

**Reader 7, finding 2.** `thm-words-avoiding-finitely-many-factors-have-rational-generating-functions`, step 2.1.

**Evidence.** "it is therefore also a factor of $sa$" needs step 1.2's invariant:
without knowing $s$ is the *longest* suffix of $w$ in $S_B$, the new forbidden
factor need not fit inside $sa$. I checked the reader's proposed bridge against
`def-finite-words-factor-avoidance-and-prefix-states`, which defines
$S_B=\{u: u \text{ avoids } B \text{ and } u \text{ is a proper prefix of some }
b\in B\}$; the bridge is correct.

**Repair.** Step 2.1 now writes both directions. Forward: $b=b'a$ with $b'$ a
suffix of $w$, $b'$ avoids $B$ and is a proper prefix of $b\in B$, so $b'\in
S_B$; $s$ being longest, $b'$ is a suffix of $s$ and $b$ is a factor of $sa$.
Converse: $s$ is a suffix of $w$, so any factor of $sa$ in $B$ is a factor of
$wa$. That is what "rejects **exactly**" needs.

### Finding 10 — the matrix entries come from a definition not in `deps` · `confirmed_nonfatal`, polished

**Reader 7, finding 3.** `ex-fibonacci-companion-matrix`, step 1.1.

**Evidence.** `[L2]` faithfully states that the companion matrix advances the
state vector; step 1.1 also read the *entries* of $C$ off it. The entries come
from `def-companion-matrix-of-a-linear-recurrence`, which was not in `deps`.

**Repair.** Added that definition to `deps` and as `[L4]`, quoting
$C_{i,i+1}=1$ for $0\le i<d-1$ and $C_{d-1,j}=-c_{d-j}$ for $0\le j<d$. Step 1.1
now unfolds it: $d=2$, $c_1=c_2=-1$, so $C_{0,1}=1$, $C_{1,0}=-c_2=1$,
$C_{1,1}=-c_1=1$, $C_{0,0}=0$ — the displayed matrix. I checked this arithmetic
against the definition independently; the displayed matrix was correct all along.

### Finding 11 — the order-zero branch is not excluded · `confirmed_nonfatal`, polished

**Reader 7, finding 4.** `cex-factorial-generating-series-is-not-rational`, step 1.1.

**Evidence.** `[L1]` cites `thm-linear-recurrence-iff-rational-generating-function`,
whose proof explicitly treats "eventual order zero" as a case (its step 1.2: "An
eventual order-zero recurrence means that $a$ is eventually zero"). Step 1.1 went
straight to $d\ge1$.

**Repair.** Step 1.1 now excludes it in one sentence: an eventual order-zero
recurrence makes the sequence eventually zero, while $n!\ne0$ in $\mathbb Q$ for
every $n$. The rest of the counterexample is unchanged and, I confirm, correct.

### Finding 12 — `[L2]` applied outside the transfer-matrix setting · `confirmed_nonfatal`, polished

**Reader 7, finding 5.** `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis`, step 3.1.

**Evidence.** The Given is "A square matrix $A$ over an arbitrary commutative
ring $R$" — any size, including zero. `thm-transfer-matrix-cofactor-formula`
requires a weighted digraph with $p\ge1$ vertices. Step 3.1 applied it to the
arbitrary $A$. The reader is right that the refutation is already complete at
steps 1.1–2.1, which is why this is polish and not fatal.

**Repair.** I took the reader's second option, restricting rather than
constructing a digraph realisation: `[L2]` now states the cited theorem's actual
domain, and step 3.1 opens "In the transfer-matrix setting itself — a finite
weighted digraph over $R$ with $p\ge1$ vertices and transfer matrix $A$ —". The
false claim being refuted is about the transfer-matrix method, so this is the
honest scope, not a retreat.

---

## 3. Defects I found that the readers did not report

Step 8 will not permit any of these, so they are closed here.

1. **A rendering bug that would have shipped LaTeX source to readers.**
   `thm-bessel-inequality-and-finite-parseval-identity`'s Statement contained
   `e_i,qquad \langle v,w\rangle` — a missing backslash inside a `$$` block, so
   KaTeX would typeset the literal word *qquad* in the middle of Parseval's
   identity on a landmark item. Repaired to `\qquad`. The broken string had been
   copied verbatim into **three** proof-contract quotes
   (`prop-orthogonal-projection-formula-and-linearity`,
   `thm-riesz-representation-in-finite-dimensions`,
   `ex-bessel-is-strict-for-a-proper-orthonormal-set`); all three were refreshed
   from disk. `rendercheck` passes on the whole repo but does not catch this —
   `qquad` is a valid KaTeX text token, so the math parses, it just parses wrong.

2. **`thm-gram-determinant-detects-linear-independence` step 2.1 used
   $\det\overline R=\overline{\det R}$ without an input.** `[L5]` restated
   `lem-complex-conjugation-and-modulus-laws` as only "$z\overline z=|z|^2\ge0$",
   but the cited lemma's first line is "Complex conjugation is a real-field
   automorphism". `[L5]` now carries the automorphism clause — a *faithful*
   extension, taken from the cited Statement, not an inflation — and step 2.1
   states the entrywise-conjugation move.

3. **A notation collision I introduced and then removed.** Making `[L4]`/`[L7]`
   explicit as "$A,B\in M_n(R)$ over a commutative ring" collided with the Gram
   proof's own matrix $R$. Both facts now say "$n\times n$ … over a commutative
   ring" with no ring letter. Worth recording: repairing a citation can create a
   new defect, and I only caught it on a re-read.

4. **`cor-orthogonal-…` step 1.2 chose an orthonormal basis with no existence
   input.** `[L3]` begins "In an orthonormal basis", so the step must produce
   one. Added `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
   as `[L6]` — note this is the same corollary that finding 4 removed from a
   *different* item, where it was cited for something it does not say. Here it is
   cited for exactly what it does say.

5. **`[L4]` in the same item was understated.** It said only "basis-independent
   and multiplicative"; `thm-operator-determinant-is-basis-independent` also
   states "In dimension zero the operator determinant is the separately defined
   value $1$" — which is precisely what step 2.1 needs. `[L4]` now carries that
   clause, so step 2.1 cites it instead of asserting the empty determinant.

6. **A tooling constraint worth writing down.** `proof-contract.mjs` parses a
   numbered step as **one line** (`sectionText(...).split(/\r?\n/)` then
   `/^(\d+\.\d+)\s+(.+)$/`). My first draft of finding 8's repair put a `$$`
   display block inside step 1.2; the step silently truncated at the blank line
   and the gate reported `citation-use-not-supported [L7] … 1.2` — a message that
   points at the citation, not at the real cause. `precheck` passed on the same
   file. Repair: keep the definition inline. **A numbered step may not contain a
   display block.**

---

## 4. Gate results after the repairs

Eleven items and one page were modified, all `status: draft`, all inside batches
3 and 7. No published item was touched, so the obvious-published-dependency
delegation was not used and no `impact-audit` closure is owed by this group.

```
precheck.mts (11 edited items)             11 checked, 0 failing — all clean
precheck.mts (batch 3 + 7 scope, 114)     114 checked, 0 failing — all clean
proof-contract.mjs batch-3 --strict         0 error(s), 0 warning(s), 76/76 checked
proof-contract.mjs batch-7 --strict         0 error(s), 0 warning(s), 38/38 checked
content-policy.mjs batch-3.pages.json      88 scoped item(s), 0 error(s), 0 warning(s)
content-policy.mjs batch-7.pages.json      47 scoped item(s), 0 error(s), 0 warning(s)
finite-smoke.mjs batch-3                    0 error(s), 1 check(s)
finite-smoke.mjs batch-7                    0 error(s), 4 check(s)
depcheck.mjs      OK — no cycles, all references resolve, no draft items on published pages
fwdcheck.mjs      OK — every forward reference is declared and points strictly forward
extcheck.mjs      OK
citecheck.mjs     no warning against any edited item
depsource.mjs     OK — 0 unresolved
prosecheck.mjs    OK — no positional claim contradicts the spec
rendercheck.mjs   OK — every math span parses under the real KaTeX
coverage-checklist.mjs   11 page(s), 988 harvested result(s), 0 error(s), 0 warning(s)
url-sweep.mjs            37/37 live; 0 failed; 0 recoverable from the archive
```

The contract re-sync is scripted, not hand-edited:
`research/frontier-13-alpha-b-6b-sync.mjs` reads claims, step inputs and every
citation's `uses` back off the repaired item text and extracts each new quote
verbatim from the cited item, failing loudly on a missing quote, an unmapped
step or a citation that has become unused;
`research/frontier-13-alpha-b-6b-boundaries.mjs` refreshes the boundary rows
whose evidence quoted a step I changed or named a step that no longer owns the
case.

### One thing the orchestrator owns, not me

`research/frontier-13-proof-contracts.json` (the merged file) is **stale**: it
differs from the batch files for 8 items in batch 3 and 9 in batch 7. The
whole-run `gates.mjs --step 6` table therefore reports
`citation-fact-uncontracted [ex-fibonacci-companion-matrix]` against my batch,
and that error is an artifact of the stale merge, not of the batch contract —
`proof-contract --strict` passes on both batch files. Re-running
`tools/merge-proof-contracts.mjs` clears it. I deliberately did **not** re-merge:
the merge is a union over *all seven* batch files and other groups are still
writing theirs, so merging from here would freeze siblings mid-edit.

The other whole-run gate failures in that table
(`ex-bounded-order-graph-classes-are-erdos-hajnal`, and `impact-audit`'s missing
`research/frontier-13-touches.json`) are outside batches 3 and 7 and are not mine
to fix.

---

## 5. `risk_review` dispositions

*(§5 is completed below once the read-only proof-refuters return; the
dispatch is recorded here so the evidence trail is complete either way.)*

`tools/risk-report.mjs` routes **74** items in this group — 45 in batch 3, 29 in
batch 7 — at high or critical tier, each requiring an Alpha `risk_review` before
step 7. Two of those tiers moved *because of* my repairs: `ex-fibonacci-companion-matrix`
went MODERATE 3 → CRITICAL 8 and `cex-factorial-generating-series-is-not-rational`
HIGH 6 → CRITICAL 8, since the score counts declared dependencies and cited
facts and both items gained one.

Per the owner rule of 2026-07-31, each routed item goes to an additional
read-only Alpha proof-refuter. I dispatched **11 clusters** covering exactly the
74 routed items — verified programmatically: 74 routed, 74 covered, no item
missing and none duplicated — through `tools/dispatch.mjs --role refuter`, which
mechanically applies `--sandbox read-only` (GPT 5.6 Sol, `xhigh`, explicit
1,000,000-token window). The clusters are recorded in
`research/frontier-13-refuters/_clusters.json` with one task file each; the brief
is `research/frontier-13-brief-refuter.md`.

| cluster | batch | items |
|---|---:|---:|
| `minpoly` | 3 | 7 |
| `primary-decomposition` | 3 | 5 |
| `diagonalisation` | 3 | 7 |
| `diagonalisation-witnesses` | 3 | 7 |
| `inner-product-basics` | 3 | 7 |
| `projection-gram-qr` | 3 | 5 |
| `adjoint-isometry` | 3 | 7 |
| `recurrence-rational` | 7 | 7 |
| `closed-form` | 7 | 7 |
| `companion-transfer` | 7 | 8 |
| `words-and-tilings` | 7 | 7 |

Each refuter is told to read the text **as it is on disk now**, because five of
these items were repaired minutes earlier in this same step.
