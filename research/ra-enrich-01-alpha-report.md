# `ra-enrich-01` — Alpha adjudication and repair report

Date: 2026-08-14
Role: Alpha (sole adjudicator of the paired-judge rejections; did not author these
items)
Scope: the seven commissioned drafts, the seven rejection rows in
`research/ra-enrich-01-judge.jsonl`, and the four findings in
`research/ra-enrich-01-audit-findings.md`.

## Outcome in one paragraph

Seven rejection rows, five distinct items. **Every rejection is real** — I confirmed
each against the item text and against the exact published statement of the cited
dependency, opening every candidate before citing it. **None is fatal.** Every one is
a citation-licensing gap that a competent reader closes well inside thirty seconds,
and in every case the result the step needed is already published in this library, so
nothing had to be invented, weakened, or deferred. All seven are **repaired**, not
merely recorded: this is the step-6 equivalent, the drafts are unfrozen and
unpublished, and shipping a known citation gap would have been the worse outcome. No
approved statement changed, and no false positives were found.

The four independent-audit findings land on the same steps as the judge rejections
and are closed by the same five edits; Finding 2 (continuity of $\gamma$ and
$\gamma'$ never discharged) was found only by the auditor and is closed as well.

Five items were edited. `def-taylor-and-maclaurin-series` and
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios` were **not touched** —
both passed both lanes with no finding against them, and I verified their
judge-normalized hashes are still byte-identical to the text both judges read.

## Per-rejection adjudication

### 1–2. `thm-taylor-series-representation-by-remainder` — both lanes, step 1.3

**Both lanes are right, independently.** Step 1.3 read "the function
$|f^{(n+1)}|$ is continuous on the nonempty compact interval $[a-r,a+r]$", cited
`[A1, L2]`, and neither `[A1]` nor `[L2]` (the extreme value theorem) says a closed
bounded interval is compact. The declared dependency set contained nothing that did.
The auditor's Finding 1 is the second half of the same gap: nothing licensed
continuity of the absolute-value composite either.

**Nonfatal.** The maximum genuinely exists and the rest of the proof is untouched by
this; both missing premises are one published citation each.

**Repaired.** Added three deps and three facts:

- `thm-heine-borel-r` — "Let $a,b\in\mathbb R$ with $a\le b$. Then the closed
  bounded interval $[a,b]$ is compact." That is the missing premise verbatim.
- `thm-algebra-of-continuous-functions`, clause 2 — "$|f|$, the function
  $x\mapsto|f(x)|$, is continuous at $c$."
- `def-higher-derivatives-and-smoothness` — I checked what $C^\infty$ means *in this
  library* before relying on it: $C^k$ requires the derivatives to exist **and** each
  $f^{(j)}$ to be continuous, and smooth means $C^k$ for every $k$. So smoothness of
  $f$ supplies continuity of $f^{(n+1)}$ directly; `cor-differentiable-implies-continuous`
  is not needed here and was not added.

Step 1.3 now derives continuity of $f^{(n+1)}$ from $C^\infty$, continuity of
$|f^{(n+1)}|$ from the absolute-value clause, and compactness from Heine–Borel, and
notes nonemptiness ($r>0$, and $a$ lies in the interval) before applying `[L2]`.

### 3. `thm-standard-maclaurin-expansions` — Terra, step 1.4

**Confirmed.** Step 1.4 asserted $c_n=\binom mn$ for $0\le n\le m$ from the
recurrence $c_0=1$, $c_{n+1}=c_n(\alpha-n)/(n+1)$, citing `[L7]` — which carries only
$(n+1)!=(n+1)n!$ and the finite binomial theorem. I opened
`def-binomial-coefficient`: in this library $\binom nk$ is **defined as a count**,
$\lvert[n]^k\rvert$, explicitly *not* as $n!/(k!\,(n-k)!)$, and the page says in as
many words that the quotient formula "is a theorem". So Terra is exactly right that
`[L7]` supplies no defining formula or recurrence, and the identification had no
route.

**Nonfatal.** `thm-binomial-closed-formula` is published and supplies the bridge.

**Repaired.** Added `thm-binomial-closed-formula` as `[L12]` — "for naturals
$k\le n$, $\binom nk\,k!\,(n-k)!=n!$; consequently, as a real number,
$\binom nk=n!/(k!\,(n-k)!)$" — and wrote the induction out: base
$c_0=1=\binom m0$; step, for $n<m$, uses $(n+1)!=(n+1)n!$ and
$(m-n)!=(m-n)(m-n-1)!$ (legitimate because $m-n\ge1$) to land on $\binom m{n+1}$;
$c_{m+1}=c_m(m-m)/(m+1)=0$ and the recurrence keeps the tail at zero. The closing
identity now names its instance: $a=1$, $b=x$ in the finite binomial theorem.

### 4. `thm-standard-maclaurin-expansions` — DeepSeek, step 1.6

**Confirmed**, and the auditor's Finding 4 is the same defect. I read the exact
published statement of `thm-real-power-continuity-and-derivatives`: it gives
$(x^\alpha)'=\alpha x^{\alpha-1}$ on $(0,\infty)$ and nothing about an affine
argument. `[L10]` is the sum and product rules. `thm-chain-rule` was absent from the
dependency list. DeepSeek's reading is precise.

**Nonfatal.** The asserted derivative is correct; the chain rule and the power rule
are both published.

**Repaired.** Added `thm-chain-rule` as `[L13]` and `lem-derivative-of-a-power` as
`[L14]`. I checked the chain rule's hypotheses rather than assuming them — it
requires $c$ to be a limit point of the inner domain and $g(c)$ to be a limit point of
the outer domain, and the published statement flags that the second is *not*
automatic. Step 1.6 now discharges both: each point of $(-1,1)$ is a limit point of
it, and $1+x$ lies in $(0,\infty)$ and is a limit point of it, which is also where
`[L6]` is valid.

### 5. `thm-euler-mascheroni-constant-and-harmonic-asymptotic` — Terra, step 2.3

**Confirmed.** Step 2.3 concluded $\log n\ge\log(2^m)$ from `[L2, step 1.5]`, and
`[L2]` (`thm-monotonicity-of-the-integral`) compares two integrands over one fixed
interval — it cannot compare integrals with different upper limits. Terra also names
the correct repair route: the logarithm's integral identity plus additivity plus
positivity. That route needs `[L1]` and `[L3]`, neither cited at that step.

**Nonfatal.** All three facts are already declared dependencies of the item; only the
step's reasoning and citation line were thin.

**Repaired.** Restated `[L2]` with the nonnegativity and two-sided-bound clauses it
actually carries, and `[L3]` with its integrability clause, then rewrote step 2.3 as
a case split: at $n=2^m$ the two logarithms are equal, and for $n>2^m$ we have
$1<2^m<n$, so `[L1]` and `[L3]` give
$\log n=\log(2^m)+\int_{2^m}^n dt/t$ with the last integral nonnegative by `[L2]`.
Splitting the case this way keeps the argument inside the non-oriented additivity
clause, so no `def-oriented-integral` convention had to be added.

DeepSeek passed this item. On this step Terra is right; DeepSeek's pass was not wrong
about the mathematics, only silent about the licensing.

### 6. `def-radian-angle-by-unit-circle-arc-length` — DeepSeek, the case $t=0$

**Confirmed, and this is the one finding that is not merely a missing citation.** I
opened `def-circular-arcs-circumference-and-diameter`: a circular arc is a
restriction $\gamma_{c,r}|_{[\alpha,\beta]}$ with **$\alpha<\beta$**. The draft called
$\gamma\!\upharpoonright_{[0,0]}$ "that unit-circle arc" and wrote "this includes
$t=0$, when the arc is a singleton" — asserting of the cited definition something it
does not say.

**Nonfatal, not fatal.** The value assigned is correct and independently supported
twice over: `def-path-polygonal-length-and-rectifiability-in-rn` defines
$L_{[a,a]}(\gamma):=0$ outright, noting that the convention avoids a partition
because the published partition definition assumes distinct endpoints; and
`thm-c1-paths-have-length-equal-to-the-integral-of-speed` separately states that the
formula "also holds on a singleton interval, with both sides defined as zero". So the
mathematics was right and only the terminology overreached.

**Repaired honestly rather than papered over**, taking the first of the two options
the dispatch offers. The arc language is now stated for $0<t\le2\pi$, where the
restriction really is a circular arc of the unit circle; $t=0$ is handled explicitly
as the degenerate one-point path at $(1,0)$, said in as many words **not** to be a
circular arc under that definition, with length $0$ from the singleton convention and
radian measure $0$ by definition. The approved statement is unchanged: the parameter
range is still $0\le t\le2\pi$, the radian measure is still
$L(\gamma\!\upharpoonright_{[0,t]})$, it is still $t$, and a full turn is still
$2\pi$.

Terra passed this item; DeepSeek's cross-family read caught a real boundary defect
Terra missed. That is the screen doing its job.

**The auditor's Finding 2 is closed in the same edit.** The speed-integral theorem
requires $\gamma$ continuous on the closed interval, differentiable on the open one,
and its derivative continuously extended; the draft established the derivative
formula and unit speed but discharged none of the continuity premises. The definition
now derives continuity of sine and cosine from `thm-sine-and-cosine-derivatives` via
`cor-differentiable-implies-continuous`, takes the derivative componentwise by
`def-vector-valued-derivative-and-integral`, and licenses $\int_0^t 1\,du=t$ by
`lem-integral-elementary-bounds`. Those are exactly the interfaces the published
sibling `thm-circle-circumference-diameter-ratio-is-pi` uses for the same
computation, so the repair matches house practice rather than inventing a route.

### 7. `cex-smooth-function-not-equal-to-its-maclaurin-series` — DeepSeek, steps 1.1–1.2

**Confirmed.** Step 1.1 asserted $q'(x)=2x$ and step 1.2 differentiated polynomial
multiples, citing `[L1, L3]` — and `[L3]` (`thm-algebra-of-derivatives`) combines
functions already known to be differentiable but never says the identity or a power
is one. The smoothness induction therefore had no base. DeepSeek's phrasing is exact.

**Nonfatal.** `lem-derivative-of-a-power` is published and gives both the power rule
and termwise differentiation of a polynomial.

**Repaired.** Added it as `[L5]`, and rewrote step 1.2 to display the computation
that keeps the $p(x)\phi^{(j)}(q(x))$ form closed under differentiation, so the
induction's inductive step is visible rather than asserted. I also replaced the
hand-rolled continuity argument in step 3.1 — which reached for a difference-quotient
bound with no cited home — with `cor-differentiable-implies-continuous` and
`def-higher-derivatives-and-smoothness`, since the latter is what makes "every
derivative exists and is continuous" *be* $C^\infty(\mathbb R)$ in this library.

Terra passed this item; DeepSeek is right.

## False positives

**None.** Every one of the seven rejections named a real gap, and in each case I
verified the complaint by opening the cited dependency rather than by reasoning about
what it probably said. Two of the complaints (Terra on step 1.4 of the Maclaurin
expansions, DeepSeek on the $t=0$ arc) turned on the *exact* published wording —
$\binom nk$ being defined as a count rather than a quotient, and a circular arc
requiring $\alpha<\beta$ — and would have looked like pedantry to a reader working
from the usual textbook conventions instead of from disk.

## What I did not change

- **No statement changed.** All five approved controls hold as before: provenance
  labels are untouched, the generalized binomial family still claims only $|x|<1$,
  the Taylor criterion still carries the explicit compact interval and the $M_{n+1}$
  index, the right-triangle bridge is still acute-angle only, and the flat
  counterexample is still a B-page leaf with empty `justified_by`.
- **No `verification.judge` or `verification.audited` written.** `precheck: pass`
  is retained and re-earned (below).
- **No mathematics beyond the licensing.** Every repair adds a citation, a fact
  restatement faithful to the published wording, or the derivation the step was
  already relying on. The only edits that are not licensing are the display reflows
  noted under rendercheck, which change no characters inside the mathematics.
- **Nothing published**, no `library/`, `research/plan-spec.json`, or published item
  edited. Every dependency I added is an existing published item; none was created,
  renamed, or modified.
- **Two items left untouched:** `def-taylor-and-maclaurin-series` and
  `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`. The latter's `[F9]`
  restates the radian definition I repaired, so I re-checked it for fidelity: it says
  the swept angle has radian measure $L(\gamma\!\upharpoonright_{[0,t]})=t$ for
  $0\le t\le2\pi$, which the repaired definition still asserts in every case, and the
  theorem uses it only at $\theta\in(0,\pi/2)$, squarely inside the arc case. No edit
  needed, and no rejudge.

## Gates re-run after the repairs

- `node tools/tsx-run.mjs tools/precheck.mts` on all five repaired files —
  **4 checked, 0 failing, all clean** (the radian item is a definition and has no
  proof body to stratify). No stratification repair was required; the new facts sit
  in the Facts block and no step's phase moved.
- `tools/citecheck.mjs` on the five — "every recognised elementary move cites a home
  that states it."
- `tools/depcheck.mjs` — "no cycles, all references resolve, no draft items on
  published pages." None of the seven items appears in its `cited-not-in-deps`
  warnings; every wikilink I added is declared in `deps`.
- `tools/fwdcheck.mjs` — clean; **no forward reference was introduced.** I checked
  this rather than assuming it: every new dependency's page order in
  `research/plan-spec.json` is strictly below its consumer's target page from
  `research/ra-enrich-01-placement.json` — Heine–Borel 131, algebra of continuous
  functions 137, derivative page 153, smoothness 155, Riemann integral 159,
  $\mathbb R^n$ 167, logarithm/powers 177, arc length 181, binomial coefficients 20,
  against targets 173, 176, 183 and 187.
- `tools/extcheck.mjs` — clean; nothing added rests on unproved material.
- `tools/prosecheck.mjs` — clean; no positional claim contradicts the spec.
- `tools/rendercheck.mjs` — **this one was failing before I arrived, and I fixed
  it.** The batch as authored carried **9 `multiline-display` errors**: a display
  written across several source lines between `$$` delimiters is a hard line break
  that mis-renders on the live page. All nine sat in four of the five items I was
  already repairing — the Maclaurin statement (5), the flat counterexample's two
  `cases` blocks, the Euler–Mascheroni statement, and the radian arc-length display —
  and my mathematical edits introduced none of them. Because those four rejudge
  anyway, joining each display onto one source line costs no extra rejudge and
  touches no untouched sibling, so I did it; it changes no character of mathematics.
  Both items I left untouched were already clean on this axis. Rendercheck now reports
  **OK across all seven**. Flagging it because it is not something the judges look at:
  had the batch gone to publish on the judge verdicts alone, four of the seven new
  pages would have rendered wrong.

## Hash receipts

Judge-normalized hashes (`judge.mts`'s normalization: whole file with only the
`judge:` block removed), current disk against the ledger the judges read:

| id | status |
|---|---|
| `thm-taylor-series-representation-by-remainder` | changed → `050c0c2c39c96732…` (was `1cab9a6c9ab96da3…`) |
| `thm-standard-maclaurin-expansions` | changed → `862dbbc4c3c57117…` (was `f477c0a3ef09a4d2…`) |
| `thm-euler-mascheroni-constant-and-harmonic-asymptotic` | changed → `6b7916c339a1d167…` (was `35efe7c567a13efd…`) |
| `def-radian-angle-by-unit-circle-arc-length` | changed → `9b68a41030e301a8…` (was `8d3c3b00ad167c2a…`) |
| `cex-smooth-function-not-equal-to-its-maclaurin-series` | changed → `87486ea9042efb21…` (was `76e2bd995e785784…`) |
| `def-taylor-and-maclaurin-series` | **unchanged**, `c78a83e424505596…` |
| `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` | **unchanged**, `2666fb7d9e30753f…` |

`research/ra-enrich-01-rejudge-targets.json` lists exactly the five changed ids. The
two unchanged items are byte-identical to the text both lanes passed and must not be
rejudged.

## For the orchestrator

Repairing an item moves its whole pair's frozen context hash, so the five rejudged
items will come back with fresh `context_sha256` values; the two untouched siblings
are spared under the owner's 2026-08-06 reading, and their existing passes stand
against byte-identical text. Nothing here is a fatal defect, so there is no
twice-touched escalation to raise and no fatal-error entry beyond what this report
records.
