# Wave 14 Real Analysis — Audit-Beta A1/A2 Findings

## Disposition and exact coverage

This is the proposal-stage record for wave14-real-analysis at A0 baseline 442f831c94882899c1dc5559b36599b0f78a99c8. No item, page, shared artifact, or earlier-wave file was edited. Scope is one A/B pair: 2 pages, 25 items, 23 proof-bearing items, and 165 relationships (106 published-backward, 59 same-batch).

I read all 25 items, the complete 99-word two-paragraph A-page summary, the roadmap Remark, all 71 numbered proof/verification steps, all 55 labeled Facts, all 121 direct Fact/source occurrences, and the on-disk mathematical section of every cited target. The 165 relationships reach 79 unique dependency targets; every target exists and every edge is legal at A0. No proof step or dependency citation was left unread.

The 23 proof contracts map all 121 citations, classify all 71 steps exactly once, and contain all 184 boundary dispositions. Strict proof-contract validation passes 23/23 with zero errors and zero warnings.

## A1 provenance determinations

The ledger contains 25 unique rows:

- 12 literature-derived / exact-source: lem-exponential-series-has-infinite-radius, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals, thm-exponential-ivp-uniqueness, thm-exponential-product-limit, cor-two-less-than-e-less-than-three, thm-e-is-irrational, ex-flat-exponential-function, ex-smooth-compactly-supported-bump, and cex-exponential-not-uniformly-continuous-on-r.
- 10 ai-altered / semantic-source: def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-limits-and-range, thm-exponential-beats-every-polynomial, thm-normalized-exponential-functional-equation, lem-scaled-binomial-coefficients-converge, thm-picard-iterates-for-exponential, thm-exponential-definition-equivalence, lem-exponential-factorial-tail-bound, and cex-discontinuous-multiplicative-cauchy-solution.
- 2 ai-generated / trivial: ex-exponential-product-limit-at-negative-input is direct substitution at $x=-2$ followed by the addition and reciprocal laws; cex-exponential-product-limit-not-uniform-on-r is the explicit moving-point check $x=n$, where the error is $e^n-2^n$.
- 1 ai-generated / none: rem-exponential-roadmap-and-circularity is positively identified as a bespoke account of this repository's dependency order.

There are no established-knowledge rows, unresolved classifications, or requested provisional Alpha concurrences. The rows use 17 distinct working literature URLs.

Proof classification is 2 literature-derived, 15 ai-altered, 6 ai-generated, and 2 not-applicable. Class (c) proposal: after A3 approval, apply all 25 component determinations, add required verified references where absent, and remove any legacy authorship field. This is one bulk pure-retag stage except for items also receiving an approved material repair.

## A2 proposed repairs

### 1. lem-exponential-series-has-infinite-radius — class (b)

Current [L3]:

> $(n+1)!=n!(n+1)$, with nonzero embedded factorials (def-factorial-and-falling-factorial, def-canonical-natural).

The factorial item proves $n!\ne0$ in $\mathbb N$, while def-canonical-natural only defines $\iota$ and leaves its ordered-field injectivity and positivity to lem-of-naturals-positive. The citations do not establish $\iota(n!)\ne0$, needed for the ratio in step 1.1.

Add lem-of-naturals-positive to deps and use:

> [L3] Factorials satisfy $(n+1)!=n!(n+1)$ and are nonzero naturals; every positive natural has a positive, hence nonzero, canonical real image (def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive).

No proof step changes.

### 2. cor-exponential-reciprocal-and-positivity — class (b)

Current [L2] attributes square nonnegativity to lem-of-sign-rules and def-complete-ordered-field, neither of which states that proposition. Step 1.1 already proves $\exp(x/2)\ne0$, and lem-of-square-positive states exactly that every nonzero square is positive.

Replace those two dependencies by lem-of-square-positive and use:

> [L2] Every nonzero square in an ordered field is positive (lem-of-square-positive).

Step 2.1 is then licensed directly.

### 3. thm-normalized-exponential-functional-equation — class (b)

Current [L1] cites the addition formula, continuity/strict increase, and IVP uniqueness. Those Statements license the functional equation, continuity, and the uniqueness inference in step 1.2. They do not establish every assertion used by step 2.1 to claim that $\exp$ satisfies both normalizations: positivity, $\exp(0)=1$, $\exp(1)=e$, and $\exp'=\exp$. IVP uniqueness is one-directional and does not itself supply existence.

Add def-real-exponential-function-and-e and thm-derivative-of-exponential to deps; retain the already declared positivity corollary; and use:

> [L1] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$, is continuous and positive, obeys $\exp(0)=1$, $\exp(1)=e$, and $\exp'=\exp$, and is the unique normalized solution of $y'=y$ (thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-ivp-uniqueness).

The uniqueness arguments remain unchanged; this repairs the existence assertion in step 2.1.

### 4. thm-e-is-irrational — class (b)

Step 1.2 uses $A$ before step 2.1 defines it. It also cites the factorial-tail bound for the different uncited calculation

> $A=\sum_{j\ge1}1/((n+1)\cdots(n+j))<\sum_{j\ge1}(n+1)^{-j}=1/n$.

The conclusion is true, but [L2] does not state that comparison. Its actual bound yields the shorter licensed replacement:

> Put $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives
> $$
> A\le \frac{2\iota(n!)}{\iota((n+1)!)}
>   =\frac2{\iota(n+1)}
>   \le\frac23<1
> $$
> because $n\ge2$. [step 1.1, L1, L2, algebra]

Open step 2.1 with “The number $A$ from step 1.2 is an integer.” The contradiction and literary proof strategy do not change.

### 5. ex-exponential-product-limit-at-negative-input — class (b)

Current [L2] states $e^{-2}=1/e^2>0$ but cites only cor-exponential-reciprocal-and-positivity. That corollary gives $\exp(-2)=1/\exp(2)>0$; it does not identify $\exp(2)$ with $e^2$.

Add def-real-exponential-function-and-e and thm-exponential-addition-formula to deps and use:

> [L2] Since $e=\exp(1)$, the addition and reciprocal formulas give $\exp(-2)=1/\exp(2)=1/(\exp(1)\exp(1))=e^{-2}>0$ (def-real-exponential-function-and-e, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity).

No Verification step changes.

## Nonfatal observations under triage

ex-smooth-compactly-supported-bump uses the standard definition $\operatorname{supp}b=\overline{\{x:b(x)\ne0\}}$ without a local def-support item; its cited closure definition and computed nonzero set make the conclusion immediate. The Hamel-basis example uses the standard unique linear extension from prescribed basis values without spelling out that universal property. The induction $\exp(n)=e^n$ in the moving-point counterexample is equally immediate from the addition law. All are correct and within the binding 30-second tolerance, so none is proposed for repair.

The A-page summary is mathematically accurate, has two paragraphs and 99 words, and contains no stale count or position claim. The B page has no authored summary. The roadmap Remark contains no mathematical falsehood.

No class (a) falsehood, class (d) convention dispute, deletion, id change, reading-order change, or owner/A10 page repair is proposed.

## Mandatory Waves 11–13 final-text reconciliation

Wave 14 was read while Waves 11–13 were in flight. A6 must re-open these 16 edges against final earlier-wave text and refresh affected contract quotes:

Wave 11, 4 edges:

- thm-picard-iterates-for-exponential -> def-oriented-integral
- thm-picard-iterates-for-exponential -> thm-linearity-of-the-integral
- thm-picard-iterates-for-exponential -> thm-ftc-first-part
- thm-picard-iterates-for-exponential -> thm-ftc-second-part

Wave 12, 3 edges:

- thm-picard-iterates-for-exponential -> thm-uniform-limit-interchanges-riemann-integration
- thm-picard-iterates-for-exponential -> thm-uniform-limit-continuous-real-functions
- cex-exponential-product-limit-not-uniform-on-r -> def-pointwise-uniform-and-uniformly-cauchy-convergence

Wave 13, 9 edges:

- def-real-exponential-function-and-e -> def-real-power-series-and-radius-of-convergence
- thm-exponential-addition-formula -> lem-cauchy-product-of-real-power-series
- thm-derivative-of-exponential -> thm-termwise-differentiation-of-a-real-power-series
- thm-derivative-of-exponential -> cor-power-series-sums-are-smooth-with-coefficient-formula
- thm-exponential-is-strictly-increasing -> cor-power-series-sums-are-continuous
- cor-exponential-is-a-bijection-onto-positive-reals -> cor-power-series-sums-are-continuous
- thm-picard-iterates-for-exponential -> thm-power-series-uniform-on-compact-subintervals
- ex-flat-exponential-function -> cor-power-series-sums-are-smooth-with-coefficient-formula
- ex-smooth-compactly-supported-bump -> cor-power-series-sums-are-smooth-with-coefficient-formula

No earlier-wave dependency was edited, and no A0 reading above is assumed to be final A6 text.

## Exact handoff

- A3 approval is requested for 25 class (c) provenance applications and five class (b) repairs.
- Alpha must independently adjudicate every provenance row. No established-knowledge concurrence is requested.
- A6 must reconcile all 16 listed concurrent-wave edges before frozen-text certification.
- There is no shell, edit-authority, URL, or classification blocker.

Exact counts: 2 pages; 25 items; 25 provenance rows; 23 proof contracts; 55 labeled Facts; 121 Fact/source mappings; 71 numbered steps; 184 boundary dispositions; 165 manifest relationships; 5 proposed repairs; 16 final-text reconciliation edges.

Paths written:

- research/audit/wave14-real-analysis.provenance.jsonl
- research/audit/wave14-real-analysis.findings.md
- research/audit/wave14-real-analysis.proof-contracts.json

## A4 applied record — 2026-08-09

A3 approved all 25 provenance applications and five class-(b) citation-precision repairs. A4 applied exactly that scope: 20 pure retags and five material items. Every item retained `origin: session`; no scoped item carried legacy `authorship`. The five material items lost their obsolete `verification.audited` state. None carried a `verification.judge` block at the A4 baseline, so there was no stale judge block to remove. The other 20 items retained their historical verification state byte-for-byte. No page, id, reading order, status, or Wave 11–13 item changed.

The applied provenance census is unchanged from A3: statements are 12 `literature-derived`, 10 `ai-altered`, and three `ai-generated`; proofs are two `literature-derived`, 15 `ai-altered`, six `ai-generated`, and two `not-applicable`; evidence is 12 `exact-source`, 10 `semantic-source`, two `trivial`, and one `none`. All 25 ledger rows are unique and match disk. Every one of the ledger's 18 distinct source URLs is reader-visible on its item and currently resolves. For `lem-scaled-binomial-coefficients-converge`, the visible references and ledger now additionally include `https://aofa.cs.princeton.edu/40asymptotic/`; the rationale records Princeton's fixed-$k$ asymptotic $\binom{N}{k}=N^k/k!(1+O(1/N))$ as the semantic source for the limit, while the displayed product proof and $[0,1/k!]$ bound remain local.

### Applied repair 1 — `lem-exponential-series-has-infinite-radius`

Class: citation precision.

Old dependency list ended with `def-factorial-and-falling-factorial, def-canonical-natural`, and old [L3] read:

> $(n+1)!=n!(n+1)$, with nonzero embedded factorials (`def-factorial-and-falling-factorial`, `def-canonical-natural`).

The dependency list now also contains `lem-of-naturals-positive`, and [L3] reads:

> Factorials satisfy $(n+1)!=n!(n+1)$ and are nonzero naturals; every positive natural has a positive, hence nonzero, canonical real image (`def-factorial-and-falling-factorial`, `def-canonical-natural`, `lem-of-naturals-positive`).

The added source clause states that every positive canonical natural in an ordered field is positive, hence nonzero. This exactly licenses the embedded-factorial division in step 1.1. No numbered step changed.

### Applied repair 2 — `cor-exponential-reciprocal-and-positivity`

Class: citation precision.

Old dependencies were `thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-sign-rules, def-complete-ordered-field`, and old [L2] read:

> Squares are nonnegative, and a nonzero nonnegative real is positive (`lem-of-sign-rules`, `def-complete-ordered-field`).

The dependencies now replace the last two entries by `lem-of-square-positive`, and [L2] reads:

> Every nonzero square in an ordered field is positive (`lem-of-square-positive`).

That lemma's Statement is exactly the proposition used in step 2.1. No numbered step changed.

### Applied repair 3 — `thm-normalized-exponential-functional-equation`

Class: citation precision.

The old dependencies omitted `def-real-exponential-function-and-e` and `thm-derivative-of-exponential`, and old [L1] read:

> The exponential satisfies the functional equation, is continuous, and satisfies the initial-value characterization (`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-exponential-ivp-uniqueness`).

Both dependencies are now present, the positivity corollary is retained, and [L1] reads:

> The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$, is continuous and positive, obeys $\exp(0)=1$, $\exp(1)=e$, and $\exp'=\exp$, and is the unique normalized solution of $y'=y$ (`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-exponential-ivp-uniqueness`).

Those six source clauses supply exactly the existence assertions used in step 2.1 as well as the uniqueness facts already used in steps 1.1 and 1.2. No numbered step changed.

### Applied repair 4 — `thm-e-is-irrational`

Class: citation precision.

Old [L1] cited only the factorial and canonical-natural definitions. It now also cites `lem-of-naturals-positive` and states that every positive natural has a positive, hence nonzero, canonical real image. The same lemma was added to `deps`; this licenses the divisions by embedded positive factorials and the positivity of the real tail terms.

The old proof used $A$ before defining it and substituted a different geometric comparison for [L2]:

> 1.2 Every term in the tail is positive, so $A>0$. Moreover $A=\sum_{j\ge1}1/((n+1)\cdots(n+j))<\sum_{j\ge1}(n+1)^{-j}=1/n\le1/2<1$. [L1, L2, algebra]
>
> 2.1 The number $A:=\iota(n!)(e-\sum_{k=0}^{n}1/\iota(k!))$ is an integer: both $\iota(n!)e=\iota(n!)p/q$ and every $\iota(n!)/\iota(k!)$ are integers because $q\mid n!$ and $k!\mid n!$. [step 1.1, L1, algebra]

The final, canonically stratified proof now reads:

> 2.1 Put $A:=\iota(n!)(e-\sum_{k=0}^{n}1/\iota(k!))$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $A\le 2\iota(n!)/\iota((n+1)!)=2/\iota(n+1)\le2/3<1$ because $n\ge2$. [step 1.1, L1, L2, algebra]
>
> 3.1 The number $A$ from step 2.1 is an integer: both $\iota(n!)e=\iota(n!)p/q$ and every $\iota(n!)/\iota(k!)$ are integers because $q\mid n!$ and $k!\mid n!$. [step 1.1, L1, algebra]
>
> 4.1 No integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\notin\mathbb Q$. [step 3.1, step 2.1, discharge-contradiction]

The displayed estimate is the direct specialization of `lem-exponential-factorial-tail-bound` at $x=1$, $N=n$, followed by the factorial recurrence and positivity of $\iota(n+1)$. Reflow and precheck required the phase labels 2.1, 3.1, and 4.1 shown above; this changes no mathematical content beyond A3's approved repair.

### Applied repair 5 — `ex-exponential-product-limit-at-negative-input`

Class: citation precision.

Old dependencies were only `thm-exponential-product-limit` and `cor-exponential-reciprocal-and-positivity`, and old [L2] read:

> $e^{-2}=1/e^2>0$ (`cor-exponential-reciprocal-and-positivity`).

The dependencies now also contain `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, and the A3-mandated `def-integer-power`. [L2] reads:

> Since $e=\exp(1)$, the addition and reciprocal formulas and the definition of negative integer powers give $\exp(-2)=1/\exp(2)=1/(\exp(1)\exp(1))=1/e^2=e^{-2}>0$ (`def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `cor-exponential-reciprocal-and-positivity`, `def-integer-power`).

The four cited source clauses license each equality and the positivity assertion. No Verification step changed.

### Contracts, snapshots, impact, and gates

The five repaired contract entries were regenerated from exact final text. The batch contract now records 128 direct Fact/source mappings, still classifies all 71 numbered steps exactly once, and retains all 184 boundary dispositions. Exact claim comparison found zero mismatches on the five regenerated entries. `proof-contract --strict` passes 23/23 with zero errors and zero warnings; all 23 proof-bearing items pass precheck. Final reflow reports all five material files unchanged.

`wave14-touches.json` contains `baseline`, `pre-A4`, one dedicated `pre-A4-<id>` baseline for each of the five material items, and `post-A4`. The report records exactly 25 one-time changes and no item changed twice. The A4 impact template contains 25 changed interfaces and 77 affected items for A6 disposition. Direct baseline comparison gives exactly 20 pure provenance/source-only changes and five material changes; every pure item's body and dependency list are byte-identical to baseline. The field-aware `audit-split.mjs` wrapper could not spawn its nested `/bin/sh` in this Codex sandbox (`EPERM`), so the split was verified directly from baseline item bodies, dependency fields, and the complete diff instead; this is not an A4 blocker.

The A4 gate record is:

- source application: 25/25 rows match disk, 18/18 distinct evidence URLs are visible and live, and the Princeton amendment is present in both ledger and item;
- content policy: 25 scoped, zero errors, one expected legacy warning for the positively identified AI-generated roadmap remark;
- precheck: 23 checked, zero failing;
- proof contract: 23/23, zero errors and zero warnings;
- finite smoke: zero errors, zero selected checks;
- risk report: 23 routed, zero errors (eight critical, 13 high, one moderate, one ordinary); A4 correctly does not require Alpha's later `risk_review` records;
- relationship manifest from final disk: 171 edges = 108 published-backward + 63 same-batch, zero unresolved; `fwdcheck`, `extcheck`, `citecheck`, and `depsource` exit zero;
- rendering and prose: `rendercheck` and `prosecheck` exit zero;
- verification honesty: `depcheck` has exactly five `published-unaudited` errors, precisely the five material repairs awaiting A6 independent certification, and no dependency-cycle, ordering, resolution, or draft-page error;
- `git diff --check`: pass.

The A6 concurrency barrier is unchanged at 16/16 exact edges: four into Wave 11, three into Wave 12, and nine into Wave 13. All 16 remain present in the final A4 relationship manifest and must be reopened against final earlier-wave text at A6. No A6 or later action was run.

Final A4 coverage is complete: all 25 scoped items were applied and reconciled, every one of the five approved repair texts and its dependency citations was checked against final disk, all 23 proof contracts and all 71 numbered steps were revalidated, and no scope exception remains.
