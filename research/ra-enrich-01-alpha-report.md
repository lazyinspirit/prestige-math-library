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

---

# Round 2 — the two post-repair Terra objections

Date: 2026-08-14
Scope: exactly `thm-standard-maclaurin-expansions` and
`def-radian-angle-by-unit-circle-arc-length`, the two items Terra rejected on the
rejudge. Nothing else was opened for editing.

## Outcome in one paragraph

**Both objections are correct, both are nonfatal, neither is a false positive.**
Each names a step that is true and whose supporting result is already published,
and in each case the step failed to cite it. That is the round-1 pattern one layer
down: repairing the loud gap in step 1.4 and in the arc paragraph put the next
unlicensed move on the surface. Both are repaired. No approved statement moved —
the acute-angle-only, $|x|<1$ binomial and explicit-$M_{n+1}$ controls are untouched,
and the $t=0$ clause written in round 1 stands verbatim.

Because these items have now been touched twice, I did not patch only the step Terra
named. In each item I read the proof end to end, identified the *class* of move the
objection belongs to, and licensed every instance of that class. That found two more
instances in each item, described below. A third round on these two should surface
nothing of this kind, because the class is closed rather than the instance.

## 1. `thm-standard-maclaurin-expansions` — Terra, step 4.1

**Terra:** step 4.1 simplifies the product-rule derivative to zero, which needs
$(1+x)^{-\alpha}=(1+x)^{-\alpha-1}(1+x)$; it cites only [L10] and prior steps, not
[L16], and for arbitrary real exponents this is not ordinary algebra.

**Confirmed.** [L16] did already carry the law — `thm-real-power-laws`,
$a^{r+s}=a^ra^s$ for $a>0$ and real $r,s$ — so this is the missing-citation half of
Terra's disjunction, not the missing-law half. Terra is right that the move is not
cancellation: $-\alpha-1$ is an arbitrary real, and $(1+x)^{-\alpha-1}(1+x)$ collapses
only through the addition law.

Repairing it exposed a second, smaller hole in [L16] itself. The law gives
$(1+x)^{-\alpha-1}(1+x)^1=(1+x)^{-\alpha}$, but getting from $(1+x)^1$ to $1+x$ needs
$\exp(\log w)=w$, and [L16] stated only the other direction, $\log(\exp y)=y$. The
published `def-natural-logarithm` states **both** in one sentence — "$\log(\exp y)=y$
for every $y\in\mathbb R$ and $\exp(\log x)=x$ for every $x>0$" — so [L16] was
extended to quote the whole of it. No new dependency: `def-natural-logarithm` was
already declared.

**Step 4.1 as repaired** displays the product-rule derivative
$G'(x)=-\alpha(1+x)^{-\alpha-1}B(x)+(1+x)^{-\alpha}B'(x)$, notes both factors are
differentiable by steps 1.6 and 3.1, derives $(1+x)^1=1+x$ and
$(1+x)^{-\alpha-1}(1+x)=(1+x)^{-\alpha}$ from [L16], multiplies through by $1+x$,
substitutes $(1+x)B'(x)=\alpha B(x)$ from step 3.1 to get $(1+x)G'(x)=0$, and divides
by the nonzero $1+x$. Citations now `[L10, L16, step 1.6, step 3.1, algebra]`.

**Class sweep — real-exponent power algebra written as ordinary algebra.** Two more
instances, both now licensed:

- **Step 1.4.** The finite binomial theorem produced "$(1+x)^m$", and
  `thm-binomial-theorem` says in as many words that its powers are the **integer**
  powers of `def-integer-power`, while the Statement asserts the **real** power
  $\exp(m\log(1+x))$. No cited fact identified the two. Rather than delete the
  sentence — the general argument in steps 3.1–6.1 does cover $\alpha=m$, so the
  identity was decorative and could have gone — I closed it, because leaving the
  question visible and unanswered is what invites the next round. [L7] now also
  records the natural-power recursion $a^0=1$, $a^{n+1}=a^n\cdot a$ and its
  uniqueness, and step 1.4 verifies that the real powers $(1+x)^n$ satisfy that same
  recursion: $(1+x)^0=\exp(0)=1$ and $(1+x)^{n+1}=(1+x)^n(1+x)^1=(1+x)^n(1+x)$.
  Added dep: `def-integer-power`, plan order 16 against this item's page at 187.
- **Step 6.1.** $B(0)=c_0$ rests on $0^0=1$ and $0^n=0$ for $n\ge1$ — the same
  convention, from the same recursion. The step now says so and cites [L7].

Steps 1.6 and the rest of 6.1 use real powers too, but each was already licensed —
1.6 by [L6] (`thm-real-power-continuity-and-derivatives`, real exponent, on
$(0,\infty)$) plus the chain rule added in round 1, and 6.1's
$(1+x)^\alpha(1+x)^{-\alpha}=(1+x)^0=1$ and $1^{-\alpha}=1$ by [L16]. Those I left
alone.

## 2. `def-radian-angle-by-unit-circle-arc-length` — Terra, continuity of $\gamma$

**Terra:** the claim that the restriction is a continuous path is unsupported;
scalar continuity of sine and cosine does not, from any cited fact, give continuity
of the vector-valued $\gamma$, and the cited vector-valued item licenses
componentwise *differentiation*, not componentwise *continuity*.

**Confirmed, and the reading of the cited item is exactly right.**
`def-vector-valued-derivative-and-integral` states the componentwise criterion for
the derivative and nothing about continuity. The fact Terra asks for exists:
**`thm-componentwise-limits-and-continuity`, clause 1** — "Let $(X,d_X)$ be a metric
space, $A\subseteq X$, $f:A\to\mathbb R^m$ and $a\in A$. Then $f$ is continuous at
$a$ if and only if every component $f_i:A\to\mathbb R$ is continuous at $a$." That is
the statement, opened and read, not a remembered one.

Two links sit between "sine and cosine are differentiable on $\mathbb R$" and that
clause, and I wrote both out rather than leaning on them:

- the components in play are **restrictions** to $[0,t]$, and continuity passes to a
  subset of the domain, the condition on the restriction quantifying over fewer
  points (`def-continuity-real`);
- clause 1's components are continuous as maps of metric spaces, while
  `cor-differentiable-implies-continuous` delivers the $\mathbb R$-native notion.
  `lem-real-and-metric-notions-agree` clause 1 is the published statement that these
  are the same notion for a real function on a subset of $\mathbb R$ — the library
  wrote that lemma precisely so later pages could move between the two vocabularies,
  and this is such a page.

$-\sin$ is continuous as a scalar multiple of a continuous function
(`thm-algebra-of-continuous-functions` clause 1). With those, clause 1 gives
continuity of $\gamma\!\upharpoonright_{[0,t]}$ on $[0,t]$ and of
$v(u):=(-\sin u,\cos u)$, which the paragraph now names explicitly so the $C^1$
hypothesis has something to point at.

**Class sweep — vector-valued notions asserted from their scalar counterparts.** Two
more instances in the same paragraph, both now licensed:

- **Differentiability on $(0,t)$** had the identical defect from the other side. It
  also runs through a restriction, so it needs `def-derivative`'s restriction clause
  (a point of a nondegenerate interval is a limit point of it, and restriction to a
  subset still having it as a limit point preserves the derivative) *before*
  componentwise differentiation applies. Written out in that order, so the
  componentwise criterion is not read as being applied to the vector-valued map
  directly.
- **$\lVert v(u)\rVert_2=1$** was read straight off the Pythagorean identity with no
  fact defining the norm. It now unfolds through `def-p-norms-on-rn`,
  $\lVert w\rVert_2=(|w_0|^2+|w_1|^2)^{1/2}$, before
  `cor-trigonometric-parity-and-pythagorean-identity` is applied.

The three hypotheses of `thm-c1-paths-have-length-equal-to-the-integral-of-speed` —
continuous on $[a,b]$, differentiable on $(a,b)$, derivative extending to a
continuous $v$ on $[a,b]$ — are now discharged one by one and in its own words.

Seven deps added: `thm-algebra-of-continuous-functions`, `def-continuity-real`,
`lem-real-and-metric-notions-agree`, `thm-componentwise-limits-and-continuity`,
`def-vector-valued-functions-limits-and-continuity`, `def-derivative`,
`def-p-norms-on-rn`. All published; their pages are at plan order 137, 153 and 167
against this item's page at 183, so none is a forward reference, and `fwdcheck`
confirms it.

## False positives

None. Both objections identify a step whose cited facts do not license it. Neither is
ordinary algebra: real-exponent power collapse is the addition law, and vector-valued
continuity from scalar components is a theorem this library states as a theorem.

## Gates

`precheck` clean on `thm-standard-maclaurin-expansions` (the radian item is a
definition with no numbered proof, so precheck does not score it, as in round 1);
`rendercheck` **OK across all 4431 files** — no repeat of the nine multiline-display
errors round 1 found, and these edits introduced none; `depcheck` OK, no cycles, all
references resolve, and neither item appears in its `cited-not-in-deps` list;
`fwdcheck` OK; `citecheck` reports nothing against either item; `prosecheck` 0
errors, 0 warnings; `extcheck` OK.

## Hash receipts

Judge-normalized hashes, current disk against the round-2 ledger rows adjudicated:

| id | status |
|---|---|
| `thm-standard-maclaurin-expansions` | changed → `2481ae24782f9fa4…` (judged at `862dbbc4c3c57117…`) |
| `def-radian-angle-by-unit-circle-arc-length` | changed → `1bab3f5b6fe5934c…` (judged at `9b68a41030e301a8…`) |

`research/ra-enrich-01-rejudge-targets.json` has been overwritten with exactly these
two ids. The other five items are untouched since the round-1 rejudge and hold the
paired passes recorded against their current text; they must not be rejudged.

## For the orchestrator

Both repairs move their pair's frozen context hash, so the two rejudged items return
fresh `context_sha256` values while their five untouched siblings keep theirs under
the owner's 2026-08-06 reading. Still no fatal defect anywhere in this batch: nine
adjudication rows, nine `confirmed_nonfatal`, zero `confirmed_fatal`, zero
`false_positive`. The twice-touched escalation is advisory and I am not raising it —
what it asks for is a check that the repair closed the class rather than the
instance, and that check is the two class sweeps above.

---

# Round 3 — `thm-standard-maclaurin-expansions`, the third Terra objection and an exhaustive notation audit

Scope: this one item. The other six pass both lanes on their current text and were
not opened.

## Outcome in one paragraph

Terra's third objection is correct, and reading it together with the first two
shows they are not three nitpicks but one systematic defect: the item's Statement
uses symbols — $e^x$, $(1+x)^\alpha$, $\binom{\alpha}{n}$ — that this library
defines separately and carefully, and the proof kept identifying each with a
near-neighbour the library treats as a different object. I did not patch step 1.1.
I enumerated every symbol and operation in the Statement and in every numbered
step, traced each to its defining item, and closed every use the item was not
licensing. That found the $e^x$ bridge Terra names **and six more**, plus a
structural instance of the same defect that no gate can see: four steps were using
the sequence constructed in step 1.3 without citing it, because they sat in the
same phase and so could not. The proof is now strictly stratified, nine phases, and
every reuse is an explicit step citation. No approved statement changed; the five
plan controls are intact. `precheck`, `rendercheck`, `depcheck`, `fwdcheck` and
`extcheck` are clean.

## 1. The rejection, and the bridge verified against the published text

> **Terra:** L3 says e to the x is defined by the series, but its cited definition
> defines exp(x), only defining e as exp(1). The item never proves or cites e to
> the x equals exp(x), so step 1.1 does not establish the displayed exponential
> identity.

**Confirmed nonfatal, `dependency_citation`.** The old `[L3]` read "the
exponential, sine, and cosine functions are defined by the three displayed power
series in the statement". The statement displays $e^x$.
`def-real-exponential-function-and-e` displays

$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad e:=\exp(1),$$

and names no function $x\mapsto e^x$ at all. Under `def-real-power`, $e^x$ is a
different construction — $\exp(x\log e)$ — and the item asserted the series
expansion of the symbol it never connected to the definition. That is exactly the
class of defect this run keeps producing, so Terra is right for the third time.

I verified the bridge the dispatch described against the exact published
statements before using it, and it closes:

| link | published item | exact clause used |
|---|---|---|
| $e=\exp(1)>0$ | `cor-exponential-is-a-bijection-onto-positive-reals` | "$\exp:\mathbb R\to(0,\infty)$ is a bijection" — so every value of $\exp$ is positive, and $a>0$ is what `def-real-power` requires |
| $e^x=\exp(x\log e)$ | `def-real-power` | "For $a>0$ and $x\in\mathbb R$, define $a^x:=\exp(x\log a)$" |
| $\log e=1$ | `def-natural-logarithm` | "$\log(\exp y)=y$ for every $y\in\mathbb R$", at $y=1$ |
| $e^x=\exp(x)$ | — | $\exp(x\cdot1)=\exp(x)$ |

Two published steps, as described. **Nonfatal**, not fatal: the identity is true,
every link is published, and a competent reader closes it in well under thirty
seconds. But "nonfatal" here means repair it, not ignore it — these are unfrozen
drafts on the way to publication, and publishing a proof that expands a symbol it
never defined is the worse outcome.

The repair is the whole of step 1.1, which now states the mismatch, discharges
$e>0$ from `[L17]`, derives $\log e=1$, and displays $e^x=\exp(x)$ before the six
identities are claimed.

## 2. The notation audit

Every symbol and operation in the Statement and in the nine phases of the proof.
"Licensed by" names the fact label carrying the citation after the repair;
**bold** rows are the ones where the item was using a symbol in a sense it had not
cited, and all of them are now closed.

### Statement

| symbol | what the library means by it | defining item | licensed by | verdict |
|---|---|---|---|---|
| $\sum_{n=0}^{\infty}$ | series convergence | `def-series` | [L18] | ok |
| $x^n$, $x^{2n}$, $x^{2n+1}$, $(-1)^n$ | integer power, $a^0=1$, $a^{n+1}=a^n a$ | `def-integer-power` | [L7], [L18] | ok |
| $\dfrac1{1-x}$ | field quotient; $1-x\ne0$ from $\lvert x\rvert<1$ | — | [L2] quotes it verbatim | ok |
| $n!$, $(2n)!$, $(2n+1)!$ | factorial, a natural read in $\mathbb R$; $n!\ne0$ | `def-factorial-and-falling-factorial` | [L7] | ok |
| **$e^x$** | **real power $\exp(x\log e)$, not the defining series** | **`def-real-power`, `def-real-exponential-function-and-e`** | **[L3], [L16], [L17], step 1.1** | **was unlicensed — the round-3 objection** |
| $\sin x$, $\cos x$ | the two power series, verbatim | `def-sine-and-cosine-by-power-series` | [L3] | ok |
| $\log(1+x)$ | inverse of $\exp$ on $(0,\infty)$; $1+x>0$ from $x>-1$ | `def-natural-logarithm` | [L4], [L16] | ok |
| $\arctan x$ | principal branch, inverse of $\tan$ on $(-\pi/2,\pi/2)$ | `def-principal-inverse-tangent` | [L5] | ok |
| $\pi$ | first positive cosine zero, doubled | `def-pi-via-first-positive-cosine-zero` | [L5], which quotes `thm-principal-inverse-tangent-calculus`'s own $\pi/4$ clause | ok — $\pi$ occurs only inside a quoted published conclusion |
| $(1+x)^\alpha$, $(1+x)^{-\alpha}$ | real power, base $1+x>0$ on $(-1,1)$ | `def-real-power` | [L16] | ok |
| **$\binom{\alpha}{n}$, real $\alpha$** | **defined by the recurrence in the Statement; the library's $\binom nk$ is a count** | **`def-binomial-coefficient`** | **[L20], step 2.1, Remarks** | **notation extended without saying so — now proved compatible and said** |
| $\dfrac{\alpha-n}{n+1}$ | real arithmetic, $n$ read in $\mathbb R$ | — | algebra | ok |

### Proof

| symbol | what the library means by it | defining item | licensed by | verdict |
|---|---|---|---|---|
| Maclaurin series | Taylor series at $a=0$, requires $f\in C^\infty(I)$, $I$ open | `def-taylor-and-maclaurin-series` | [L1] | ok |
| **$f^{(k)}$, $C^\infty$** | **$f^{(0)}=f$, $f^{(j+1)}=(f^{(j)})'$; smooth = all exist and are continuous** | **`def-higher-derivatives-and-smoothness`** | **[L19]** | **was uncited, and step 1.2 invoked [L1] without ever establishing smoothness** |
| **radius of convergence; "value at the centre"** | **$R=\sup\{r\ge0:\text{abs. conv. on }\lvert x-c\rvert<r\}$; series at $c$ sums to $a_0$** | **`def-real-power-series-and-radius-of-convergence`** | **[L18]** | **was uncited; steps 3.1, 7.1 both leaned on it** |
| **finite binomial theorem** | **published as $\sum_k\binom nk x^k y^{\,n-k}$** | **`thm-binomial-theorem`** | **[L7]** | **[L7] restated it as $\sum_n\binom mn a^{m-n}b^n$ — the coefficient index moved to the other variable. Now quoted in the published form** |
| **$\binom m0=1$, $\binom mn=0$ for $n>m$** | **boundary values of the count** | **`def-binomial-coefficient`** | **[L20]** | **step 2.1's base case read $\binom m0=1$ off nothing** |
| $\binom mn=m!/(n!(m-n)!)$ in $\mathbb R$ | integrality clause | `thm-binomial-closed-formula` | [L12] | ok (round-1 repair) |
| $1^{\,m-k}=1$ | integer power of $1$ | `def-integer-power` | [L7], written out in step 2.1 | now explicit |
| $0^0=1$ vs $0^0$ undefined | integer power fixes $0^0=1$; **real power leaves it undefined** | `def-integer-power`, `def-real-power` | [L18], Remarks | ok — the two conventions are used in disjoint places, and that is now said |
| $\limsup$ | limit superior in $\overline{\mathbb R}$ | `def-limsup-liminf` | [L8], [L22] | ok |
| **"$\to\lvert x\rvert<1$" where [L8] asks for $\limsup$** | **a limit is the limit superior when it exists** | **`thm-convergence-iff-limsup-equals-liminf`** | **[L22], [L23]** | **step 1.5 wrote a limit and the ratio test wants a limit superior** |
| **termwise splitting of a convergent series** | **$\sum(a_k+b_k)=\sum a_k+\sum b_k$, $\sum ca_k=c\sum a_k$** | **`lem-series-linearity`** | **[L21]** | **step 3.1 did this as "algebra"; it is a series theorem** |
| termwise differentiation, same radius | as published | `thm-termwise-differentiation-of-a-real-power-series` | [L9] | ok |
| $\exp$, $\log$ | as published | `def-real-exponential-function-and-e`, `def-natural-logarithm` | [L3], [L16] | ok |
| $a^{r+s}=a^ra^s$ for real $r,s$ | real-power addition law | `thm-real-power-laws` | [L16], named at steps 2.1, 5.1, 7.1 | ok (round-2 repair, plus step 7.1 now names it too) |
| $(x^\alpha)'=\alpha x^{\alpha-1}$ on $(0,\infty)$ | real-power derivative | `thm-real-power-continuity-and-derivatives` | [L6] | ok |
| chain rule, both limit-point hypotheses | as published | `thm-chain-rule` | [L13] | ok (round-1 repair) |
| polynomial derivative | as published | `lem-derivative-of-a-power` | [L14] | ok (round-1 repair) |
| product rule; differentiable ⟹ continuous; zero derivative ⟹ constant; order-convex | as published | `thm-algebra-of-derivatives`, `cor-differentiable-implies-continuous`, `cor-zero-derivative-implies-constant`, `def-interval` | [L10], [L15], [L11] | ok |
| $1/(n+1)\to0$ | Archimedean reciprocal form | `cor-archimedean-reciprocal` | [L23] | now cited |
| $\iota$ applied to a natural | **banned in new content** | — | — | not written anywhere in this item; [L7] and [L12] carry the coefficients in reader-facing form. `content-policy`'s `notation-iota-applied` has nothing to flag |

## 3. What changed in the file

Nine facts added, `[L17]`–`[L23]` plus rewrites of `[L3]` and `[L7]`; nine deps
added, all published and all earlier in plan order (9, 20, 122, 127, 112, 155,
173, 175) than this item's page (187):
`cor-exponential-is-a-bijection-onto-positive-reals`,
`def-real-power-series-and-radius-of-convergence`, `def-series`,
`def-higher-derivatives-and-smoothness`, `def-binomial-coefficient`,
`lem-series-linearity`, `thm-convergence-iff-limsup-equals-liminf`,
`thm-algebra-of-limits`, `cor-archimedean-reciprocal`.

- **[L3]** now states what the definitions actually say — $\exp(x)=\sum x^n/n!$
  and $e:=\exp(1)$ — and says in as many words that it does not name $e^x$.
- **[L7]** now quotes `thm-binomial-theorem` in its published shape,
  $(u+v)^m=\sum_{k=0}^m\binom mk u^k v^{\,m-k}$, with the coefficients said to be
  naturals read in $\mathbb R$ through the canonical embedding.
- **Step 1.1** proves $e^x=\exp(x)$ before claiming the exponential expansion.
- **Step 1.2** was one sentence asserting $f^{(k)}(0)=k!a_k$ "by repeated
  termwise differentiation". It now carries the induction
  $f^{(k)}(x)=\sum_n\frac{(n+k)!}{n!}a_{n+k}x^n$, reads $f^{(k)}(0)=k!a_k$ off
  [L18], and establishes smoothness through [L15] and [L19] — which [L1]
  requires and which nothing previously supplied.
- **Step 2.1** (was 1.4) cites [L20] for $\binom m0=1$, takes $u=x,v=1$ in the
  published binomial theorem, discharges $1^j=1$ from the integer-power
  recursion, and gets $\exp0=1$ from [L18] rather than from a bare $0^0$ claim.
- **Step 2.2** (was 1.5) computes $q_n=\lvert x\rvert(1-\frac{\alpha+1}{n+1})$
  for $n>\lvert\alpha\rvert$, takes the limit through [L23], and converts it to
  the limit superior [L8] actually asks for through [L22].
- **Step 4.1** (was 3.1) splits $\sum(\alpha-n)c_nx^n$ through [L21] after
  noting both halves converge, instead of tagging it "algebra".
- **Step 7.1** (was 6.1) names the real-power addition law it uses and takes
  $B(0)=c_0$ and $\exp0=1$ from [L18].
- **Step 8.1** (was 7.1) records that $\binom{\alpha}{n}$ extends the library's
  count rather than colliding with it, pointing at step 2.1.
- **A Remarks section** states which symbol is which, so the next reader does not
  have to re-derive the audit.

**Structural class sweep.** Steps 1.4, 1.5, 1.6 and 2.2 of the old numbering all
used the sequence $(c_n)$ constructed in step 1.3 without citing it — they could
not, being in the same phase. That is the same defect as the other seven, in the
step graph rather than the fact list, and `precheck` cannot see it because it only
reads explicit `[step k.j]` tags. The proof is now strictly stratified into nine
phases (chain-rule step to 1.4; integer case, ratio test and collation to
2.1–2.3; everything after shifted by one), so every use of the construction is an
explicit citation. `precheck` confirms the numbering is the canonical one — it
neither fails nor demands a repair.

## 4. What I did not change

- **No approved statement.** The six collated families, their exact domains and
  endpoint assertions, the $\lvert x\rvert<1$ binomial restriction, the recurrence
  defining $\binom{\alpha}{n}$, and the absence of any claim at $x=\pm1$ all stand
  as authored. All five plan controls hold.
- **No `verification.judge`, no `verification.audited`**, no `library/`, no
  `research/plan-spec.json`, no other item.
- **Step 2.2's tail argument** is licensed to the limit and no further. I
  considered writing an $\varepsilon$-$N$ proof that finitely many initial terms
  cannot move a limit and declined: `def-real-limit`'s quantifier is already an
  eventual one, that is a textbook 30-second closure, and the stopping rule in
  this dispatch exists to stop exactly this kind of chase.
- **`def-derivative` and `def-limit-point-r`** are not added as deps. Every
  limit-point hypothesis the proof needs is stated inside the published facts
  [L13], [L14] and [L15] that carry it, and step 1.4 discharges both explicitly.

## 5. Finding for the owner: the split, which I do not recommend

The dispatch asks whether the honest fix is to split this item into the six
collated families and the generalized binomial. My judgement, plainly: **a split is
defensible but it is not the fix, and I am not recommending it.**

The reason is that none of the three objections would have been prevented by one.
Round 1 (binomial coefficients) and round 2 (real-power law) live in the binomial
half; round 3 ($e^x$ vs $\exp$) lives in the collation half. Each defect would have
travelled with its own half into whichever item it landed in. What actually
produced all three was a single habit — matching a symbol to its near-neighbour
instead of to its definition — and the audit above is what addresses that, not a
seam.

Recording the size facts anyway, since the owner may weigh them differently:

- The item now carries 23 facts and 14 steps. The binomial half owns [L6]–[L23]
  bar [L15], and every step from 2.1 onward except 2.3.
- If the owner does want a smaller judge context unit, the seam is clean: steps
  1.1, 1.2 and 2.3 with [L1]–[L5], [L18], [L19] are the collation; everything else
  is the binomial theorem. `def-taylor-and-maclaurin-series` would serve both.
- A split mints a new id and shifts plan order, so it is a plan change and the
  owner's call. `research/ra-enrich-01-placement.json` and the Table-A row in the
  PLAN would both need reissuing.

## 6. The stopping rule

Recorded and accepted. A **fourth distinct** objection on this item closes as
`confirmed_nonfatal` on the adjudication ledger with its evidence, and I do not
repair it again. Three rounds of real findings earned this item a genuine audit and
it has now had one; a fourth round of resample-and-patch is the loop R1 exists to
prevent.

## 7. Gates

| gate | result |
|---|---|
| `precheck` on the item | PASS (direct), canonical stratification, no repair proposed |
| `rendercheck` on the item | OK — every math span parses under real KaTeX |
| `depcheck` (repo-wide) | OK — no cycles, all references resolve, no draft items on published pages; the item raises no `cited-not-in-deps` |
| `fwdcheck` (repo-wide) | OK |
| `extcheck` (repo-wide) | OK — the item declares no `proved_here: false` dependency |
| `content-policy` `notation-iota-applied` | nothing to flag; the item writes no applied $\iota$ |

## 8. Hash receipts

Judge-normalized hash (whole file, `judge:` block removed — `judge.mts`'s
`itemSha256`):

| id | judged at (round 3) | now |
|---|---|---|
| `thm-standard-maclaurin-expansions` | `2481ae24782f9fa4…` | `b6b4da28be354a97…` |

`research/ra-enrich-01-rejudge-targets.json` has been overwritten with exactly this
one id. The other six items are untouched and hold paired passes against their
current text; they must not be rejudged.

The round-3 adjudication row records `item_sha256` as the text Terra actually read,
`2481ae24…`, matching the convention of the round-1 and round-2 rows in the same
ledger and what `level-coverage.mjs` matches against; the post-repair hash is
carried alongside it as `repaired_item_sha256`. `context_sha256` is included, which
the earlier rows omit and `level-coverage.mjs` requires.

## 9. For the orchestrator

Ten adjudication rows now, ten `confirmed_nonfatal`, zero `confirmed_fatal`, zero
`false_positive`. No fatal mathematical defect has been found anywhere in this
batch across three rounds. Rejudge `thm-standard-maclaurin-expansions` only.

---

# Round 4 — the regression I introduced, and the one objection that could have been fatal

Scope: two items. `thm-standard-maclaurin-expansions`, where both lanes flagged a
defect my round-3 repair created; and
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, pulled back into the
sweep because repairing `def-radian-angle-by-unit-circle-arc-length` moved its
pair context hash, and rejected by Terra on rejudge.

## Outcome in one paragraph

Both objections are correct and both are nonfatal. The Maclaurin item's is
bookkeeping I broke myself — the nine-phase restratification moved the integer
case from step 1.4 to step 2.1 and the Remarks kept pointing at 1.4 — plus a real
licensing hole DeepSeek found at step 1.2, where the step applied the termwise
differentiation theorem without ever establishing that the radius reaches $R$.
The sine-cosine item is the more serious question and it resolves in the item's
favour on the fatal test but against it on the proof text: **the Statement does
not overstate**, it matches the approved plan row exactly and claims only the
ratio identity and the arc measure, but **step 8.1 did** assert that the
triangle's interior angle at the origin is the swept unit-circle angle, and the
library defines no interior angle of a triangle and no scaling invariance for
angles. I scoped that sentence back rather than inventing the theorem that would
rescue it. No approved statement changed; the five plan controls are intact.
`precheck`, `rendercheck`, `depcheck`, `fwdcheck` and `extcheck` are clean.

## 1. `thm-standard-maclaurin-expansions` — the Remarks regression

> **Terra:** The Remarks twice miscite step 1.4: it only proves a derivative
> formula for a negative real power. Agreement with natural powers and
> identification with the counting binomial coefficient are proved in step 2.1.

**Confirmed nonfatal, `other` (stale cross-reference).** Both lanes found it
independently, and they are right. Round 3 restratified the proof into nine
phases; the old step 1.4 became step 2.1, and the new step 1.4 is the chain-rule
derivative of $(1+x)^{-\alpha}$ on $(-1,1)$. The Remarks were written against the
old numbering and were not carried across, so two sentences credited step 1.4
with results it does not prove.

This is why the stopping rule did not fire on its own: it is not a fourth
independent nitpick in unchanged text, it is a mistake in my newest edit. The
dispatch is right to override for it.

**The bulk audit.** A renumber breaks references in bulk, so I checked them in
bulk rather than patching the two the lanes named — 43 step references across the
nine phases, all 24 fact labels, and the three Remarks references:

| class | count | stale |
|---|---|---|
| in-proof `step k.j` citations, prose and bracket tags | 40 | 0 |
| Remarks step references | 3 | **2** |
| `[L#]` labels defined | 24 | 0 undefined-but-cited, 0 defined-but-uncited |
| `[L#]` citations resolving to a defined fact | all | 0 |

Every in-proof citation survived the renumber correctly, including the one that
looks most suspicious: step 5.1 cites step 1.4 for the derivative of
$(1+x)^{-\alpha}$, and that is exactly what the new step 1.4 proves. The two
Remarks sentences were the whole of the damage. Both now read step 2.1.

## 2. `thm-standard-maclaurin-expansions` — the radius at step 1.2

> **DeepSeek:** Step 1.2 applies L9 to a series known only to converge on
> $|x|<R$, but L9 needs its radius; no cited fact gives radius at least $R$.

**Confirmed nonfatal, `dependency_citation`.** Correct, and a genuine gap rather
than a restatement quibble. The two published texts do not meet:

| where | exact clause |
|---|---|
| `[L9]` = `thm-termwise-differentiation-of-a-real-power-series` | "Let $f(x)=\sum a_n(x-c)^n$ have radius $R$. For every $x$ with $\lvert x-c\rvert<R$, the function $f$ is differentiable at $x$" |
| `[L18]` = `def-real-power-series-and-radius-of-convergence` | the radius is the supremum of the $r\ge0$ such that the series converges **absolutely** at every $x$ with $\lvert x-c\rvert<r$ |

Step 1.2's hypothesis was plain convergence with sum $f(x)$ on $|x|<R$. Absolute
convergence is what [L18] measures, so the hypothesis did not by itself put
$(-R,R)$ inside the radius, and nothing in the item bridged the two.

Nonfatal under the 30-second rule, and the bridge is one published sentence:

| link | published item | exact clause used |
|---|---|---|
| convergence at $x$ forces $\lvert x\rvert\le\rho$ | `cor-power-series-convergence-dichotomy` | "It converges absolutely at every $x$ with $\lvert x-c\rvert<R$ and **diverges at every $x$ with $\lvert x-c\rvert>R$**" |

Contrapositive of the second clause: a point of convergence is not beyond the
radius. So $\rho\ge|x|$ for every $|x|<R$, hence $\rho\ge R$.

**Repaired.** `cor-power-series-convergence-dichotomy` added as a dep and as
`[L24]`; it sits on `power-series-and-real-analytic-functions` at plan order 173
against this item's page at 187, the same page `[L9]` already comes from, so it is
a backward dependency and `fwdcheck` stays clean. Step 1.2 now derives $\rho\ge R$
before invoking [L9] and carries $\rho$ through the induction instead of $R$.

**The hypothesis is unchanged, so both applications still hold.** I checked both:
step 2.3 applies step 1.2 to the six series of step 1.1, each convergent on its
stated open interval by [L2]–[L5]; step 8.1 applies it to $B$, which step 3.1
shows converges absolutely on $|x|<1$. I deliberately did not strengthen step
1.2's hypothesis to absolute convergence, which would have forced an absolute-
convergence argument for each of the six collated families and turned a citation
fix into a new sweep the dispatch forbids.

Nothing else in this item was touched.

## 3. `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` — does it overstate?

> **Terra:** Step 8.1 is unsupported: $P=H(\cos\theta,\sin\theta)$ gives
> collinearity, but no cited fact or definition relates the triangle's interior
> angle at the origin to the unit-circle swept angle, or establishes invariance of
> that angle under positive scaling.

**Confirmed nonfatal, `other`.** Not a false positive, and not fatal either. The
two questions the dispatch poses come apart, and the answer is different for each.

**Does the Statement overstate? No.** The Statement asserts three things, and the
approved PLAN Table-A row asserts the same three in the same words:

| Statement | PLAN Table A | proved at |
|---|---|---|
| unique $\theta\in(0,\pi/2)$ with $(A/H,O/H)=(\cos\theta,\sin\theta)$ | same | steps 4.2, 5.1, 6.1 |
| the counterclockwise unit-circle arc from $(1,0)$ to $(A/H,O/H)$ has radian measure $\theta$ | same | step 7.1, from `def-radian-angle-by-unit-circle-arc-length` |
| the coordinate right triangle therefore satisfies $\cos\theta=A/H$, $\sin\theta=O/H$ | same | steps 2.3, 4.2, 6.1 |

No interior-angle equality appears in the title or the Statement. The fatal class
— "a title or Statement asserting more than the proof gives" — is not met.

**Did the proof assert it? Yes, in one clause.** Step 8.1 ended: "so its acute
angle at the origin is the angle of step 7.1". That identifies the triangle's
interior angle at the origin with the swept unit-circle angle, and Terra is right
that nothing licenses it. I looked for anything that could, before accepting the
objection:

- `def-radian-angle-by-unit-circle-arc-length` assigns radian measure only to
  $\gamma\!\upharpoonright_{[0,t]}$, the counterclockwise unit-circle arc starting
  at $(1,0)$. It is a statement about one specific family of arcs, not a general
  angle notion.
- There is **no** definition anywhere in `items/` of the angle between two rays,
  of a triangle's interior angle, or of an angle at a vertex — I searched the
  whole corpus for such a definition and for any `\angle` notation, and found
  none.
- There is consequently no invariance-under-positive-scaling result to cite.

What the proof does deliver is that $P=H\gamma(\theta)$ with $H>0$, i.e. $P$ is a
positive multiple of the unit-circle point where the measured arc ends. That is
the honest geometric content, and it is exactly what the ratio identity rests on.

**Repaired by scoping back, not by inventing the missing theorem.** The dispatch
was explicit about that and I agree: an angle-invariance theorem written to rescue
one sentence would be a generated load-bearing claim in a bridge item, which is
the last place it belongs.

- **Step 8.1** now concludes that $P$ is the positive multiple $H$ of the
  unit-circle point $\gamma(\theta)=(A/H,O/H)$ at which step 7.1's arc ends, and
  that the triangle's leg-to-hypotenuse ratios are precisely that point's two
  coordinates. Its step citations are unchanged, so the stratification is
  unchanged.
- **Step 9.1** now states the Statement's three assertions and nothing more; it
  previously opened "the unique acute angle $\theta$", which read as though
  $\theta$ were a geometric angle of the triangle.
- **The Remarks** gain a short paragraph, "What is measured, and what is not",
  saying in as many words that the library measures angles only along the unit
  circle, that no interior angle of the triangle is measured here, and that none
  is claimed. The existing paragraph's "the angle acute" became "place $\theta$ in
  the acute range $(0,\pi/2)$" for the same reason.

The plan control "the right-triangle theorem is acute-angle only" is untouched:
$\theta\in(0,\pi/2)$ throughout, and the axis/quadrantal disclaimer stands.

DeepSeek passed this text and its reading is not contradicted — the mathematics is
unchanged and no step's conclusion was weakened. But the item's own hash moved, so
it rejudges.

## 4. What I did not change

- **No approved statement, in either item.** Both Statements are byte-identical to
  what the lanes read. All five plan controls hold: acute-angle-only, the
  $|x|<1$ binomial restriction, the explicit $M_{n+1}$ index, literature-derived
  statements, and the B-page leaf.
- **The Maclaurin item got nothing beyond the two fixes.** One dep, one fact, one
  step edited, two Remarks references corrected. No new sweep.
- **No `verification.judge`, no `verification.audited`**, no `library/`, no
  `research/plan-spec.json`, no other item. The other five items are untouched and
  hold current paired passes against their exact on-disk text.

## 5. Gates

| gate | result |
|---|---|
| `precheck` on both items | PASS (direct) — 2 checked, 0 failing, canonical stratification, no repair proposed |
| `rendercheck` on both items | OK — every math span parses under real KaTeX, frontmatter parses under the renderer's YAML parser |
| `depcheck` (repo-wide) | OK — no cycles, all references resolve, no draft items on published pages; neither item raises `cited-not-in-deps` |
| `fwdcheck` (repo-wide) | OK — the new `[L24]` dep is at plan order 173 against this item's page at 187 |
| `extcheck` (repo-wide) | OK |
| `content-policy` `notation-iota-applied` | nothing to flag; neither item writes any $\iota$ |

## 6. Hash receipts

Judge-normalized hash (whole file, `judge:` block removed — `judge.mts`'s
`itemSha256`). The "judged at" column is the text both lanes actually read in
round 4, and it matched disk before I began.

| id | judged at (round 4) | now |
|---|---|---|
| `thm-standard-maclaurin-expansions` | `b6b4da28be354a97…` | `e602af2b66e5297a…` |
| `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` | `2666fb7d9e30753f…` | `1a66daa2a10970fa…` |

`research/ra-enrich-01-rejudge-targets.json` has been overwritten with exactly
these two ids. The other five items are untouched and must not be rejudged.

## 7. For the orchestrator

Thirteen adjudication rows now, thirteen `confirmed_nonfatal`, zero
`confirmed_fatal`, zero `false_positive`. **No fatal mathematical defect has been
found anywhere in this batch across four rounds.**

Rejudge `thm-standard-maclaurin-expansions` and
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, both lanes, and
nothing else. Per the stopping rule, whatever either lane returns next on the
Maclaurin item closes on the ledger as `confirmed_nonfatal` without a further
repair; the sine-cosine item has now had the scope question the owner cares about
answered directly, and its Statement is the plan's.

---

# Round 5 — closing adjudication. Nothing repaired, nothing blocked.

Scope: one rejection. `thm-standard-maclaurin-expansions`, DeepSeek **PASS**,
Terra **REJECT** on step 2.2's ratio-test limit. This is the fifth distinct Terra
objection on this item and the stopping rule accepted in round 3 fires. I
assessed it on the merits anyway, because a stopping rule that closes a *fatal*
finding would be worthless.

## Outcome in one paragraph

**`confirmed_nonfatal`. Publication is not blocked.** Terra reads the letter of
`[L23]` correctly — neither of its two clauses literally states $1/(n+1)\to0$ —
but the claim is true, the gap is one ordered-field inequality, and the cited
page writes that inequality out itself in a Remark whose whole purpose is to
leave it to the caller. Not a false positive, because the fact restatement really
is an existential and really does not say "eventually"; not fatal, because
nothing rests on an unproved or false claim and the binomial radius is properly
established. No item file was touched, so
`research/ra-enrich-01-rejudge-targets.json` gains nothing and DeepSeek's pass at
the same `item_sha256` stands.

## 1. Terra's objection, checked against the published dependency

> **Terra:** Step 2.2 claims 1/(n+1) tends to 0 by L23, but L23 only supplies a
> single n for each positive epsilon. It gives neither an eventual bound nor
> convergence of the reciprocal sequence, so the ratio-test limit is not
> licensed.

Three questions, in the order that decides the outcome.

**Is the reading of `[L23]` accurate?** Yes, and I checked the source rather than
the restatement. `[L23]` bundles two dependencies. Its first clause restates
`thm-algebra-of-limits`, which covers $x_k+y_k$, $cx_k$, $x_k-y_k$ and $x_ky_k$ —
sums, scalar multiples, differences, products, and *not* reciprocals. Its second
restates `cor-archimedean-reciprocal`, whose published Statement is

> Let $F$ be a complete ordered field and let $\varepsilon\in F$ with
> $\varepsilon>0$. Then there is a natural number $n\ge1$ such that
> $1/(n\cdot 1_F)<\varepsilon$.

which is exactly the single witness Terra describes. So neither clause, read
literally, delivers the convergence statement step 2.2 attributes to `[L23]`.
Terra is not resampling a phantom.

**Is the claim true, and how far is the closure?** True, and one line. Given
$\varepsilon>0$, take $N\ge1$ with $1/N<\varepsilon$; for every $n\ge N-1$ we
have $n+1\ge N>0$ and therefore $0<1/(n+1)\le1/N<\varepsilon$. The only move
beyond the cited existential is monotonicity of reciprocals on the positive
elements of an ordered field — elementary algebra, of precisely the kind step
2.2's `algebra` tag names, and inside the 30-second rule by a wide margin.

**Does a neighbouring fact already supply it?** Effectively yes, and this is what
settles the severity. `cor-archimedean-reciprocal` — the page a reader reaches by
following the citation — carries a Remark headed **"Monotonicity gives the
eventual form for free"**, which derives $1/m\le1/n<\varepsilon$ for every
$m\ge n$ from `lem-of-inverse-positive` and `lem-of-naturals-positive`, and then
says in as many words that *"that one extra line is what a convergence proof
needs, and it is left to the caller rather than folded into the statement,
because the caller usually has a threshold of its own to combine it with."* The
library anticipated exactly this call site and deliberately declined to fold the
step into the Statement. A judge that checks local licensing only cannot see
that Remark; an adjudicator reading from disk can.

**And the rest of the step follows.** Granting $1/(n+1)\to0$, step 2.2 is fully
licensed: for $n>|\alpha|$ it has
$q_n=|x|\bigl(1-(\alpha+1)/(n+1)\bigr)$, so the scalar-multiple and difference
clauses of `[L23]` give $q_n\to|x|$ (the restriction to $n>|\alpha|$ is handled
by the step's own observation that convergence is a tail condition), `[L22]`
turns that into $\limsup_n q_n=|x|<1$, and `[L8]`, the ratio test, gives absolute
convergence of $\sum c_nx^n$ on $|x|<1$. **The binomial radius is proved.** Terra
is right that a reader is asked to supply one inequality; it is wrong that the
limit is unlicensed in any sense that should stop a draft from publishing.

## 2. One premise of the dispatch corrected

The dispatch describes this as "a step unchanged since it was authored." It is
not. Through commit `9739dcc8` the ratio-test step read

> $|c_{n+1}x^{n+1}/(c_nx^n)|=|x||\alpha-n|/(n+1)\to|x|<1$; hence
> $\sum_{n\ge0}c_nx^n$ converges absolutely. `[L8, algebra]`

with no reciprocal-limit citation at all. The explicit `[L22]`/`[L23]` wording
Terra quotes entered with my round-3 restratification at `dbd17a19`.

This is **not** a regression of the round-4 kind, and does not reopen that
override: the earlier text asserted the same limit with strictly *less* support,
so the expansion strictly improved the licensing. But it does mean Terra is
objecting to an elision I made *visible*, not to one that hid for four rounds.
The honest reading is that the audit worked and the last increment of pedantry is
not worth a sixth round.

## 3. Final per-item judge state

Last verdict per item per lane, at the current disk text:

| item | DeepSeek | Terra | verdicts spent |
|---|---|---|---|
| `def-taylor-and-maclaurin-series` | PASS | PASS | 2 |
| `thm-taylor-series-representation-by-remainder` | PASS | PASS | 4 |
| `cex-smooth-function-not-equal-to-its-maclaurin-series` | PASS | PASS | 4 |
| `thm-euler-mascheroni-constant-and-harmonic-asymptotic` | PASS | PASS | 4 |
| `def-radian-angle-by-unit-circle-arc-length` | PASS | PASS | 6 |
| `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` | PASS | PASS | 6 |
| `thm-standard-maclaurin-expansions` | **PASS** | **REJECT** (adjudicated `confirmed_nonfatal`) | 10 |

Six of seven pass both lanes outright. The seventh passes DeepSeek and carries an
adjudicated nonfatal Terra rejection at the same `item_sha256` the pass was cast
against, `e602af2b…`, which I recomputed from disk and confirmed matches the
ledger row byte for byte.

Fourteen adjudication rows, **fourteen `confirmed_nonfatal`, zero
`confirmed_fatal`, zero `false_positive`, across five rounds.** No fatal
mathematical defect was found anywhere in this batch.

## 4. My view for the owner on splitting this item

**Do not split it now; the case for a later split is real but it is a cost
argument, not a correctness one, and it should be triggered by the next
substantive extension of the binomial material rather than by this run.** In
round 3 I argued against a split on defect distribution and that argument still
holds for *prevention* — each of the five Terra objections would have travelled
with its own half into whichever item it landed in, and the shared step 1.2 that
DeepSeek caught in round 4 would have had to be duplicated into both halves or
promoted to a third item. But the reviewability evidence the dispatch assembles
is a different and better argument than the one I answered, and I will not
pretend it is weak: four of the five objections land in the binomial half, which
is a nine-step ODE argument (recurrence → radius → $(1+x)B'=\alpha B$ → zero
derivative → identification) sharing a page with what is otherwise a collation of
six already-published series identities, and a nine-phase restratification was
needed before the binomial half could even cite itself in order. Twice exhausting
a 40,000-token reasoning budget is a real signal, though a softer one than it
looks — both were rescued by retry, and the budget is a property of the judge
harness's per-call ceiling, not a measure of whether the mathematics is
followable. What tips me against acting now is that the audit cost has already
been paid: this item is at the most-reviewed state it will ever be in, a split is
a full rewrite of both halves plus new ids, new summaries, a new B companion and
a plan-order change, and that rewrite would discard the six clean verdicts this
text has earned and start the judge cycle over on two fresh items. The asymmetry
worth flagging is that splitting gets *more* expensive after publication, not
less — ids are immutable on `main`, so a post-publication split means new pages
plus `aliases` plus re-pointing every consumer. So my recommendation is: publish
whole, and if the owner ever plans to extend the binomial half — endpoint
behaviour at $x=\pm1$, Abel's theorem, the binomial series for complex exponents
— split it as a deliberate plan change *before* authoring that extension, when
the seam I named in round 3 (steps 1.1, 1.2, 2.3 with `[L1]`–`[L5]`, `[L18]`,
`[L19]` as the collation; everything else as the binomial theorem) is still
clean.

## 5. For the orchestrator

Nothing to rejudge. No item file was edited in this round, so every
`item_sha256` on disk is unchanged and
`research/ra-enrich-01-rejudge-targets.json` is empty of new targets. The Terra
rejection is closed on the ledger as `confirmed_nonfatal` against
`e602af2b66e5297a2d8cc13609f25a111f9e348ee18780f38ce348b44af4e677`. **No
`confirmed_fatal` exists in this batch. Nothing here should stop the publish.**
