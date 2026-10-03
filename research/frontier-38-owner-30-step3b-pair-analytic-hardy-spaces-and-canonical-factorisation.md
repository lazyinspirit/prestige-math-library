# Step 3b authoring record — `analytic-hardy-spaces-and-canonical-factorisation`

- Run: `frontier-38-owner-30`, batch 20, role alpha-high (Step 3b pair auditor and author).
- A page: `analytic-hardy-spaces-and-canonical-factorisation` (order 837, complex-analysis).
- B page: `analytic-hardy-spaces-and-canonical-factorisation-examples` (order 838).
- Dispatch: `research/frontier-38-owner-30-step3b-pair-analytic-hardy-spaces-and-canonical-factorisation-b5e1e857cf26fc0c.task.md`.
- Scope receipt (Step 3a): `research/frontier-38-owner-30-step3a-review-analytic-hardy-spaces-and-canonical-factorisation.json` — `sufficient`.
- **Status: complete.** All 32 assigned items are authored and page-registered; both
  library pages are written; the proof-contract file is written; all Step-3 gates
  for this pair are green; the 32 item decisions are recorded (`accept`/`repaired`,
  confidence 1, examined dependency IDs listed); no decision is escalated and no
  obligation is left open for this pair.
- Ownership: only this A/B pair was edited. Shared files (`research/plan-spec.json`,
  sibling batch manifests, published items/pages) were not modified, except the
  run-scoped files named below. No `--owner` decision and no judge/audit stamp
  was used; all item receipts are ordinary reviewer receipts
  (`research/frontier-38-owner-30-step3b-review-<id>.json`).

## Owned IDs (32) — authoring order, computed levels, decisions

Authoring order was the dispatch's dependency-level order (level, page, ID);
levels below are the **recomputed** levels also recorded in the batch-20
manifest rows. Every ID is an original scaffold ID (none is an engine-added
addition), so each required an ordinary current item decision.

| # | level | id | page | decision |
|---|-------|----|------|----------|
| 1 | 0 | `def-analytic-hardy-space-disc` | A | repaired |
| 2 | 1 | `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` | A | repaired |
| 3 | 0 | `lem-nevanlinna-sup-mean-criterion` | A | accept |
| 4 | 1 | `def-nevanlinna-class-on-the-disc` | A | repaired |
| 5 | 1 | `lem-hardy-radial-means-are-monotone` | A | repaired |
| 6 | 2 | `thm-hardy-zero-set-blaschke-condition` | A | accept |
| 7 | 2 | `thm-nevanlinna-class-is-bounded-quotient-class` | A | repaired |
| 8 | 3 | `def-blaschke-product` | A | accept |
| 9 | 4 | `thm-blaschke-product-boundary-values-and-zeros` | A | repaired |
| 10 | 5 | `def-inner-singular-inner-and-outer-functions` | A | repaired |
| 11 | 5 | `lem-nevanlinna-blaschke-factorization` | A | accept |
| 12 | 5 | `thm-riesz-factorization-hardy-space` | A | accept |
| 13 | 5 | `cex-divergent-blaschke-sum` | B | repaired |
| 14 | 5 | `ex-blaschke-product-with-zeros-accumulating-at-one` | B | repaired |
| 15 | 5 | `ex-finite-blaschke-products` | B | accept |
| 16 | 6 | `thm-fatou-boundary-theorem-analytic-hardy-spaces` | A | accept |
| 17 | 6 | `thm-nevanlinna-boundary-values-and-log-integrability` | A | accept |
| 18 | 6 | `thm-singular-inner-function-properties` | A | accept |
| 19 | 7 | `lem-hardy-log-integrability-of-boundary-values` | A | accept |
| 20 | 7 | `lem-outer-function-properties` | A | accept |
| 21 | 7 | `thm-f-and-m-riesz-theorem` | A | accept |
| 22 | 7 | `thm-zero-free-inner-functions-are-singular-inner` | A | accept |
| 23 | 7 | `ex-singular-inner-function-from-a-point-mass` | B | accept |
| 24 | 8 | `cor-hardy-one-cauchy-representation` | A | accept |
| 25 | 8 | `lem-poisson-jensen-inequality-hardy-functions` | A | accept |
| 26 | 9 | `ex-boundary-vanishing-and-uniqueness` | B | repaired |
| 27 | 8 | `ex-outer-function-with-prescribed-boundary-modulus` | B | accept |
| 28 | 9 | `def-smirnov-class-on-the-disc` | A | accept |
| 29 | 9 | `thm-inner-outer-factorisation-hardy-space` | A | accept |
| 30 | 10 | `lem-smirnov-class-quotient-characterisation` | A | repaired |
| 31 | 10 | `thm-smirnov-maximum-principle` | A | accept |
| 32 | 10 | `ex-factorization-of-a-rational-function` | B | repaired |

Totals: 20 `accept`, 12 `repaired`, 0 `escalate`.

## Inputs read and entry obligations → resolution

Read before/while authoring: `CLAUDE.md`, `SCHEMA.md`, the CA-HP-2 design row in
`research/plan-complex-analysis-track.md`, `research/plan-spec.json`, the
batch-20 manifests (`pages.json`, `coverage.json`, `cross-batch-dependencies.json`),
the Step-3a review receipt and Step-3a pair report, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, batch-20 Step-1
notes (`research/frontier-38-owner-30-batch-20.notes.md`), and the published
supplier items actually cited by each proof (58 direct suppliers).

1. *Author all 32 items and both pages.* Done: 32 item files under `items/`,
   `library/complex-analysis/analytic-hardy-spaces-and-canonical-factorisation.md`
   (25 items) and the `-examples` companion (7 items).
2. *Reconcile declared dependencies with actual use; repair local scaffold gaps.*
   Done per item below; the manifest rows, item frontmatter and proof contracts
   were kept mutually consistent (`manifest-deps` 0 errors; `proof-contract
   --strict` 0 errors; `depcheck` no finding for any owned ID).
3. *Direct in-run prerequisite pairs to inspect: none.* Confirmed: every
   dependency of every owned item is either another owned item or a published
   library item. The Step-3a transitive closure (32 own + 1603 published, 0
   unresolved) still holds; `cross-batch-dependencies.json` for batch 20 is `[]`.
   **No supplier was unfinished at authoring time, so no consumer decision had
   to be left escalated and no unresolved-supplier flag is outstanding.**
4. *Run the Step-3 checks.* Done; actual outputs in the checks table below.
5. *Record item decisions.* Done via `tools/step3-decisions.mjs record-item
   --run frontier-38-owner-30 --item <id> --decision accept|repaired
   --confidence 1 --dependencies <examined IDs> --reason <evidence>` (reviewer
   role, `owner:false`). `check --phase final` reports this pair's A-page scope
   closed and all 32 owned items closed (the whole-run exit code is still 1 only
   because other pairs remain unfinished; none of the listed open work is ours).

## Source and supplier reconciliation

- Four complete treatments were used, matching the Step-1 source plan: Garnett,
  *Bounded Analytic Functions*, Ch. II (OCR text mirror, `dokumen.pub`); R. K.
  Srivastava, *Lecture Notes on Hardy Spaces* (MA650, IIT Guwahati); L. Ryzhik,
  Stanford Math 215 notes ch. 5 §5.4; and, in place of Schlag (whose
  Hilbert-transform route the design deliberately avoids), Axler–Bourdon–Ramey,
  *Harmonic Function Theory* Ch. 6 for the harmonic-Hardy/Herglotz side.
- Exact locators are carried item-by-item in each item's `sources.references`
  (printed page ranges plus lemma/theorem numbers); the repair-relevant ones are
  repeated in the per-item checkpoints below.
- Step-3a note repaired: `def-analytic-hardy-space-disc` uses the ambient
  notation $\mathbb D$; the author now declares and cites the published
  `def-unit-disc-upper-half-plane-and-blaschke-factor` (see checkpoint 1).
- Two published suppliers outside the page `requires` closure
  (`thm-jensen-inequality-for-expectation`,
  `thm-zero-divisor-theorem-on-plane-domains`) are ordinary published items and
  are cited accurately; no action needed beyond this record.
- Two scaffold dependencies pointing at B-page-only examples were re-homed to
  the published `thm-p-series-rational` (`cex-divergent-blaschke-sum`,
  `ex-blaschke-product-with-zeros-accumulating-at-one`), keeping the same
  convergence content and satisfying `b-leaf-content`.

## Dependency levels

Levels were computed from actual dependencies and recorded in the batch-20
manifest rows; `tools/item-dependency-levels.mjs check --run
frontier-38-owner-30` exits 0 (816 items across 60 pages, all labels equal to
the computed values). Two owned labels differ from the dispatch's pre-authoring
scaffold order, both because the scaffold's dependency list had been wrong:

- `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients`:
  scaffold level 0 → **1** (it genuinely uses `def-analytic-hardy-space-disc` in
  the $H^1$ clause).
- `ex-boundary-vanishing-and-uniqueness`: scaffold level 8 → **9** (it uses
  `ex-outer-function-with-prescribed-boundary-modulus`, which sits at level 8).

No item is justified by a later item: every in-run dependency is proved at a
strictly lower level.

## Choice accounting (exact, per item)

- Items whose statements/proofs use the **Axiom of Choice** (declared in `deps`):
  `thm-fatou-boundary-theorem-analytic-hardy-spaces`,
  `thm-zero-free-inner-functions-are-singular-inner`,
  `thm-inner-outer-factorisation-hardy-space`,
  `thm-nevanlinna-boundary-values-and-log-integrability`,
  `thm-f-and-m-riesz-theorem`,
  `lem-smirnov-class-quotient-characterisation`.
- Items declaring **countable choice** in `deps`:
  `def-analytic-hardy-space-disc`,
  `def-inner-singular-inner-and-outer-functions`,
  `def-nevanlinna-class-on-the-disc`,
  `def-smirnov-class-on-the-disc`,
  `thm-singular-inner-function-properties`,
  `thm-smirnov-maximum-principle`,
  `cor-hardy-one-cauchy-representation`, plus the AC items above.
- All remaining items are **choice-free** as declared and used; in particular
  `thm-nevanlinna-class-is-bounded-quotient-class` is choice-free (see the
  deviation note below), and the Blaschke/Riesz/outer/singular machinery uses at
  most the principles listed above.

## Per-item checkpoints

Per item, during authoring: `tools/precheck.mts` (explicit path; skipped for the
five `definition` items, which carry no numbered proof), `tools/proof-layout.mjs`
and `tools/rendercheck.mjs`; after the last edit the batch-level gates in the
table below were re-run on the frozen tree. Every item below ended with **no
open gap**; the B-page examples prove their own claims (no load-bearing
examples-page dependency).

### Checkpoint 1 (items 1–7)

1. `def-analytic-hardy-space-disc` — authored; `## Definition` with the
   (quasi-)norm verification; deps include
   `def-unit-disc-upper-half-plane-and-blaschke-factor` (Step-3a notation repair)
   and `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` (definiteness).
   Sources: Srivastava pp. 26–28; Garnett pp. 49–51. Decision: repaired.
2. `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` —
   authored (canonical precheck numbering adopted, 8 steps); deps reconciled to
   the suppliers actually used (orthonormality, Tonelli, Taylor expansion,
   analyticity of power-series sums, total-variation bound, regularity); sources
   Ryzhik §5.4 (proof of Thm 5.13) and Garnett p. 59. Level repaired 0 → 1.
   Decision: repaired.
3. `lem-nevanlinna-sup-mean-criterion` — authored (7 steps):
   $\log^+|F|$ has a harmonic majorant iff the radial means are bounded; the
   nontrivial direction is by Poisson modifications on expanding discs plus the
   increasing Harnack convergence principle; choice-free. Sources Garnett
   pp. 66–67, Srivastava pp. 67–69. Decision: accept.
4. `def-nevanlinna-class-on-the-disc` — authored. Scaffold repairs: the $p=\infty$
   clause `log^+|f| ≤ log||f||_∞` (false when `||f||_∞<1`) replaced by
   `log^+|f| ≤ log^+||f||_∞`; scaffold `justified_by:
   [lem-nevanlinna-sup-mean-criterion]` (violating depcheck's
   `justification-backward` rule) replaced by a `deps` entry on the same lemma.
   Sources Garnett pp. 65–66, Srivastava pp. 64–69. Decision: repaired.
5. `lem-hardy-radial-means-are-monotone` — authored (7 steps) via
   Poisson-modification majorization; unused scaffold entries (Fubini, Hölder)
   removed and the Poisson-extension, mean-value, smoothness and Jensen/Lyapunov
   suppliers actually used added. Sources Srivastava pp. 26–28 and 32–34,
   Garnett pp. 35–37 and 49. Decision: repaired.
6. `thm-hardy-zero-set-blaschke-condition` — authored (7 steps); the
   log-Jensen inequality is derived inside the proof from the convex Jensen
   items; $H^p$ clause verified. Sources Srivastava pp. 32–35, Garnett
   pp. 51–52. Decision: accept.
7. `thm-nevanlinna-class-is-bounded-quotient-class` — authored (4 steps).
   **Deviation from the scaffold route (recorded for Step 4/5):** the scaffold
   routed (i)⇒(ii) through Herglotz/Harnack and the Axiom of Choice; the
   completed proof uses the harmonic conjugate on the disc
   (`prop-star-shaped-plane-domains-are-homologically-simply-connected`,
   `thm-harmonic-conjugate-on-homologically-simply-connected-domains`) and is
   choice-free. Hence `def-axiom-of-choice`/`def-countable-choice` are **not**
   in this item's deps and the statement records the choice-free status.
   Sources Garnett pp. 66–68 (Thm 5.1), Srivastava pp. 64–69. Decision: repaired.

### Checkpoint 2 (items 8–16)

8. `def-blaschke-product` (level 3, A) — normalized factors
   $b_a=\frac{\overline a}{|a|}\varphi_a$, $b_0=z$; Blaschke sequences
   $\sum(1-|a_n|)<\infty$; the product converges normally with $|B|\le1$, exact
   zero multiset and $B=1$ for the empty sequence. Sources Garnett pp. 51–53,
   Srivastava pp. 35–37. Deps 7 (published Blaschke factor, automorphism,
   normal convergence + in-run zero-set theorem); `justified_by` the next item.
   Decision: accept; no open gap.
9. `thm-blaschke-product-boundary-values-and-zeros` (level 4, A) — zeros of
   $B$; tail behaviour $B/B_N$; $|B|=1$ a.e. and $B_r\to B$ radially a.e.
   **Repair:** scaffold clause (ii) claimed the tail quotient is zero-free; it
   need not be, and the corrected clause states holomorphy of $B/B_N$,
   $|B/B_N|\le1$ and $(B/B_N)(0)=\prod_{n>N}|a_n|\to1$ eventually positive. The
   a.e. unimodularity is proved with the exceptional-radius Fatou argument.
   Sources Garnett pp. 52–53, Srivastava pp. 36–37 (Lem 5.19). Decision: repaired.
10. `def-inner-singular-inner-and-outer-functions` (level 5, A) — inner, singular
    inner $S_\mu$, and outer $[h]$ functions with
    $[h]=\exp\int K\log h$. **Repair:** the bound $|\theta|\le1$ for inner
    $\theta$ is attributed to the later Fatou boundary-norm identity instead of
    being asserted at definition level, preserving the promised content.
    Sources Garnett pp. 69–71, Srivastava pp. 43–47. Decision: repaired.
11. `lem-nevanlinna-blaschke-factorization` (level 5, A) — for
    $f\in N\setminus\{0\}$ the zero sequence is Blaschke and $g=f/B$ is
    zero-free in $N$ with $\log|g|$ the least harmonic majorant of $\log|f|$
    (proved with the exceptional-radius Fatou argument for $A(r)$). Sources
    Garnett p. 66, Srivastava pp. 64–69. Decision: accept.
12. `thm-riesz-factorization-hardy-space` (level 5, A) — $f=Bg$ with $g$ zero-free
    in $H^p$ and $\|g\|_{H^p}=\|f\|_{H^p}$ (equal norms, not only equivalence),
    via partial products and the maximum principle. Sources Garnett pp. 53–54
    (Thm 2.3), Srivastava p. 37 (Cor 5.20). Decision: accept.
13. `cex-divergent-blaschke-sum` (level 5, B) — refutes "every zero sequence of
    a disc function yields a convergent Blaschke product / an $H^p$ function"
    with an explicit divergent $\sum(1-|a_n|)$; uniform divergence + locally
    uniform convergence of the partial products to $0$ (no Dini input needed).
    **Repair:** scaffold dependency re-homed to `thm-p-series-rational`.
    Sources Srivastava pp. 35–37, Garnett pp. 51–52. Decision: repaired.
14. `ex-blaschke-product-with-zeros-accumulating-at-one` (level 5, B) —
    $a_n=1-n^{-2}$; $\sum(1-|a_n|)=\sum n^{-2}<\infty$; $B$ is an infinite
    Blaschke product with the telescoping value
    $B(0)=\prod_{n\ge2}(1-n^{-2})=1/2$ and zeros accumulating at $1$.
    **Repair:** dependency re-homed to `thm-p-series-rational`. Sources
    Srivastava pp. 36–37, Garnett pp. 51–54. Decision: repaired.
15. `ex-finite-blaschke-products` (level 5, B) — a finite product is rational,
    holomorphic on a neighbourhood of the closed disc, $|B|\le1$, $|B|=1$ on
    $\mathbb T$, strictly $|B|<1$ inside for $N\ge1$, with the explicit
    $a=\pm1/2$ computation. Sources Srivastava pp. 35–37, Garnett pp. 51–53.
    Decision: accept.
16. `thm-fatou-boundary-theorem-analytic-hardy-spaces` (level 6, A) — for
    $0<p\le\infty$: nontangential limits a.e., $\|f_r-f^*\|_p\to0$, $f=P[f^*]$,
    boundary norm equals the $H^p$ norm; full case analysis ($1<p<\infty$,
    $p=\infty$, $0<p\le1$ by the root trick, $p=1$ via the analytic measure
    representation) with AC declared and spent explicitly. Sources Srivastava
    pp. 29–42, Garnett pp. 59–62. Decision: accept.

### Checkpoint 3 (items 17–24)

17. `thm-nevanlinna-boundary-values-and-log-integrability` (level 6, A) — every
    $f\in N\setminus\{0\}$ has finite nontangential boundary values a.e. and
    $\log|f^*|\in L^1$, so $f^*\ne0$ a.e.; the nonnegative-harmonic Fatou fact
    is stated explicitly with its suppliers. Sources Garnett pp. 67–69,
    Srivastava pp. 64–69. AC + countable choice declared. Decision: accept.
18. `thm-singular-inner-function-properties` (level 6, A) — $S_\mu$ holomorphic
    and zero-free, $\log|S_\mu|=-P[\mu]$, $|S_\mu|\le1$,
    $S_\mu(0)=e^{-\mu(\mathbb T)}$, and the equivalence (i)⇔(iii) with the
    Lebesgue decomposition, including the maximal bound. Sources Garnett
    pp. 72–75, Srivastava pp. 45–46. Decision: accept.
19. `lem-hardy-log-integrability-of-boundary-values` (level 7, A) —
    $\log|f^*|\in L^1$ for $0<p\le\infty$, via the zero-free factor and its
    $m$-th root with constant log-means; the positive-measure vanishing
    criterion is included. Sources Srivastava pp. 34–35 (Cor 5.14), Garnett
    pp. 62–66. Decision: accept.
20. `lem-outer-function-properties` (level 7, A) — the four clauses: the bound,
    the boundary modulus $|[h]^*|=h$ a.e., dependence of $[h]$ only on the a.e.
    class of $h$, and uniqueness up to a unimodular constant. Sources Garnett
    pp. 63–65, Srivastava pp. 43–47 and 60–64. Decision: accept.
21. `thm-f-and-m-riesz-theorem` (level 7, A) — a finite complex measure on
    $\mathbb T$ with vanishing negative Fourier coefficients is absolutely
    continuous; $f=P[\mu]\in H^1$, $\mu=f^*m$ and
    $|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$. Sources Ryzhik §5.4 Thm 5.13,
    Garnett p. 59. AC declared. Decision: accept.
22. `thm-zero-free-inner-functions-are-singular-inner` (level 7, A) — a zero-free
    inner function is $\lambda S_\mu$, hence the general inner factorisation;
    proved via the harmonic conjugate (choice is declared, not hidden). Sources
    Garnett pp. 74–76, Srivastava pp. 46–47. Decision: accept.
23. `ex-singular-inner-function-from-a-point-mass` (level 7, B) —
    $\mu=\delta_1$ gives $S(z)=\exp(-(1+z)/(1-z))$; the cone computation shows
    $|S(z)|\to0$ as $z\to1$ nontangentially, $|S^*|=1$ a.e. with the null
    exceptional set, and $\log|S(0)|=-1$. Sources Garnett pp. 72–73,
    Srivastava pp. 45–46. Decision: accept.
24. `cor-hardy-one-cauchy-representation` (level 8, A) — for $f\in H^1$ the
    representing measure is $\mu=f^*m$ and
    $f(z)=\frac1{2\pi i}\oint\frac{f^*(\zeta)}{\zeta-z}\,d\zeta$ for
    $z\in\mathbb D$. Sources Srivastava pp. 41–42 (Cor 5.26), Ryzhik §5.4.
    Decision: accept.

### Checkpoint 4 (items 25–32)

25. `lem-poisson-jensen-inequality-hardy-functions` (level 8, A) —
    $\log|f(z)|\le\int P(z,\zeta)\log|f^*(\zeta)|\,dm$ for
    $f\in H^p\setminus\{0\}$, with equality iff $f$ is outer; proved by the
    Blaschke change of variables and the outer equality clause. Sources Garnett
    p. 72, Srivastava pp. 32–34. Decision: accept.
26. `ex-boundary-vanishing-and-uniqueness` (level 9, B) — (a) $f=1-z$ is a
    nonvanishing $H^\infty$ function whose boundary function vanishes at the
    single point $1$ (measure zero); (b) vanishing of $f^*$ on a set of positive
    measure forces $f\equiv0$. **Repair:** declares
    `ex-outer-function-with-prescribed-boundary-modulus` as a dependency (the
    scaffold cited it as a preceding example) and the level was recomputed
    8 → 9 in the manifest. Sources Srivastava pp. 34–35, Garnett pp. 63–64, 71.
    Decision: repaired.
27. `ex-outer-function-with-prescribed-boundary-modulus` (level 8, B) — for
    $h(\zeta)=|1-\zeta|^\alpha$ ($\alpha>0$) one computes
    $[h](z)=(1-z)^\alpha$ (with its branch), the Fourier coefficients of the
    boundary modulus, and non-rationality for non-integer $\alpha$. Sources
    Srivastava pp. 43–47 and 60–64, Garnett pp. 63–65. Decision: accept.
28. `def-smirnov-class-on-the-disc` (level 9, A) — the Smirnov class $N^+$ by
    boundary log-integrability plus the quotient characterisation, with the
    containment $H^p\subseteq N^+$; countable choice declared. Sources Garnett
    pp. 68–69, Srivastava pp. 64–69. Decision: accept.
29. `thm-inner-outer-factorisation-hardy-space` (level 9, A) — the normalized
    factorisation $f=\lambda BS_\mu F$ for $f\in H^p\setminus\{0\}$ with
    uniqueness, $|F^*|=|f^*|$ a.e. and the norm of $F$; AC declared. Sources
    Garnett pp. 70–71, Srivastava pp. 42–47. Decision: accept.
30. `lem-smirnov-class-quotient-characterisation` (level 10, A) — $f\in N^+$ iff
    $f=g/h$ with $g,h\in H^\infty$, $h$ outer; uniqueness normalization stated.
    **Repair:** an unused Jensen dependency was removed to keep the contract
    exact. Sources Garnett pp. 68–70, Srivastava pp. 64–69. Decision: repaired.
31. `thm-smirnov-maximum-principle` (level 10, A) — if $f\in N^+$ has
    $f^*\in L^p$ then $f\in H^p$ with equality of norms, with the sharpness
    remark that the analogue fails for $N$ (the example $1/S_\mu$). Sources
    Garnett pp. 69–70, Srivastava pp. 64–69. Decision: accept.
32. `ex-factorization-of-a-rational-function` (level 10, B) —
    $f(z)=\frac{z-a}{1-\overline a z}\cdot\frac{1+z}{2}$: a Blaschke factor
    times a nonconstant outer factor, exhibiting both canonical factors of a
    rational function that is not inner (the inner rational case is
    `ex-finite-blaschke-products`). **Repair:** the scaffold's claimed
    $\|f\|_{H^\infty}=3/2$ was corrected to $1$ (the modulus is bounded by $1$
    with boundary approach at $z\to-1$). Sources Garnett p. 71, Srivastava
    pp. 42–47. Decision: repaired.

## Scaffold repairs and deviations (briefing for Step 4/5 and plan prose)

Repaired scaffold defects (statements or dependency metadata that were wrong);
each is recorded in the item receipt with the exact before/after:

1. `def-nevanlinna-class-on-the-disc` — $p=\infty$ clause corrected to
   `log^+|f| ≤ log^+||f||_∞`; `justified_by` → `deps` on
   `lem-nevanlinna-sup-mean-criterion`.
2. `thm-blaschke-product-boundary-values-and-zeros` — clause (ii) restated for
   the tail quotient $B/B_N$ (not zero-free; holomorphic, $|B/B_N|\le1$,
   $(B/B_N)(0)\to1$).
3. `ex-factorization-of-a-rational-function` — norm claim $3/2$ corrected to $1$.
4. `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` and
   `ex-boundary-vanishing-and-uniqueness` — dependency levels recomputed 0 → 1
   and 8 → 9 (see above).
5. `cex-divergent-blaschke-sum`,
   `ex-blaschke-product-with-zeros-accumulating-at-one` — B-leaf re-homes to
   `thm-p-series-rational`.
6. `def-inner-singular-inner-and-outer-functions` — definition-level assertion
   of $|\theta|\le1$ replaced by attribution to the later Fatou identity.
7. Unused-dependency removals:
   `lem-hardy-radial-means-are-monotone` (Fubini, Hölder),
   `lem-smirnov-class-quotient-characterisation` (Jensen fact), plus the
   additions listed per item.

**Choice-route deviation for Step 4/5:** the scaffold strategy for
`thm-nevanlinna-class-is-bounded-quotient-class` used the Herglotz/Harnack
representation and the Axiom of Choice. The completed item is **choice-free**
via the harmonic conjugate; its statement, deps and this report record that.
Any shared plan prose that describes an AC route for that item should be
amended in Step 4. No other scaffold statement was weakened or strengthened.

## Checks actually run (final tree, after the last edit)

| check | command | actual result |
|-------|---------|---------------|
| proof-layout (explicit, all changed paths in one command) | `PRESTIGE_APP_DIR=/tmp/fakeapp node tools/proof-layout.mjs items/<all 32 ids>.md` | `proof-layout: 32 items, 143 steps, 0 defects` |
| precheck (explicit item paths, via author-check) | `node tools/tsx-run.mjs tools/precheck.mts` on the 32 paths | `27 checked, 0 failing — all clean` (5 `definition` items carry no numbered proof) |
| rendercheck | `node tools/tsx-run.mjs tools/rendercheck.mjs` on 32 items + 2 pages | `OK — 34 file(s)`: no wikilink-in-math, no unbalanced/multiline math, all KaTeX spans and YAML blocks parse |
| content policy | `node tools/tsx-run.mjs tools/content-policy.mjs research/frontier-38-owner-30-batch-20.pages.json` | `32 scoped item(s), 0 error(s), 0 warning(s)` |
| proof contracts (strict) | `node tools/tsx-run.mjs tools/proof-contract.mjs research/frontier-38-owner-30-batch-20.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 32/32 item(s) checked` |
| author-check batch 20 | `node tools/tsx-run.mjs tools/author-check.mts frontier-38-owner-30 20` | `ok: true`; receipt `research/frontier-38-owner-30-author-check-20.json` (fingerprint `5aaa0231…3cbc`) |
| depcheck (scoped to the 32 owned IDs) | `node tools/tsx-run.mjs tools/depcheck.mjs --items-file scratchpad/f38b20/scope.json` | no error/warning mentions any owned item or either owned page; the global page/cycle section reports only other pairs' in-flight defects (e.g. a `page-cycle` among schemes pages, `b-leaf-content` elsewhere) |
| manifest-deps | `node tools/tsx-run.mjs tools/manifest-deps.mjs research/frontier-38-owner-30-batch-20.pages.json` | `32 item(s), 0 normalized, 0 error(s)` |
| coverage-checklist | `node tools/tsx-run.mjs tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-20.coverage.json` | `2 page(s), 81 harvested result(s), 0 error(s), 0 warning(s)` |
| dependency levels | `node tools/tsx-run.mjs tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0; `816 item(s) checked across 60 page(s)`; all owned manifest labels equal the computed levels |
| validate-plan | `node tools/tsx-run.mjs tools/validate-plan.mjs research/plan-spec.json` | exit 0; page order acyclic and consistent, no owned forward/B-page/unresolved issues; pre-existing advisories and item-less planned pages belong to other pairs |
| Step-3 decisions check (final phase) | `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | owned A-page scope closed (`sufficient`); all 32 owned items closed (20 accept / 12 repaired); whole-run exit 1 only because other pairs remain unfinished — none of the listed open work is ours |

The manifest, coverage and proof-contract files were regenerated from the
completed items before these runs, so the recorded dependency lists are the
actual proof uses.

## Published concerns

No confirmed defect in any published item was found by this pair's authoring or
audit; no published item or page was edited. Recorded, non-blocking observations:

1. **Out-of-closure published suppliers (non-blocking).**
   `thm-jensen-inequality-for-expectation` and
   `thm-zero-divisor-theorem-on-plane-domains` are cited by owned proofs but do
   not lie in the page `requires` closure; both are published and their use is
   verified. For Step 4: consider whether the page `requires` list or the plan
   prose should mention them (no correctness impact).
2. **Garnett source mirror (non-blocking, provenance note).** The design-named
   Garnett scans are image-only and one TLS endpoint is rejected; all readings
   used the complete OCR text mirror recorded as the source URL, whose licensing
   uncertainty remains recorded in the batch-20 Step-1 notes/coverage file.
   Locators are printed page numbers verified on the OCR text.
3. **Suspicion vs. confirmed:** nothing in the owned proofs exposed a suspected
   published error; the only defects found were in the *scaffold* statements and
   dependency metadata listed above, and all were repaired locally.

## Handoff

- Completed IDs: all 32 (25 A + 7 B) listed in the table above; both pages
  written and registered; proof contracts written; coverage untouched and green;
  the Step-1 source ledger preserved.
- Added suppliers: **none** — no new item ID was created; the only dependency
  re-homes were to the already published `thm-p-series-rational`.
- Unreconciled suppliers / open obligations: **none**; no consumer was authored
  against an unfinished supplier, so no decision remains escalated.
- Files owned/updated: the 32 `items/<id>.md`, the two
  `library/complex-analysis/analytic-hardy-spaces-and-canonical-factorisation*`
  pages, `research/frontier-38-owner-30-batch-20.pages.json` (deps/levels
  synced), `research/frontier-38-owner-30-batch-20.proof-contracts.json`,
  `research/frontier-38-owner-30-author-check-20.json`, the 32
  `research/frontier-38-owner-30-step3b-review-<id>.json` decision receipts,
  and this report.
- Next action for this pair: proceed to Step 4 with the choice-route deviation
  and the two dependency-level corrections noted above; thorough independent
  mathematical audit follows in Steps 5–8.
