# frontier-15 — group Alpha `b`, step 6b adjudication

Run: `frontier-15` · role: alpha · label: `6b-b` · covers batches **4, 5, 6**
(`sigma-algebras-and-borel-sets` + examples, `the-fundamental-group-of-the-circle`
+ examples, `goursat-and-cauchys-theorem-in-a-convex-domain` + examples).
Scope: 113 mathematical-content items (60 + 28 + 25).

**Status: COMPLETE.** 30 reader findings adjudicated, 2 further defects found and
repaired by Alpha, 52 `risk_review` dispositions written, 41 defect-ledger rows
appended. One blocker stands, in §0: the independent refuter lane never ran.

## 0. Blocker — the refuter lane is unavailable (Codex quota exhausted)

The brief requires read-only proof-refuter subagents (GPT 5.6 Sol) before my own
adjudication. I wrote eight namespaced task files
(`research/frontier-15-refuters-b/task-1.md` … `task-8.md`) partitioning all 113
items, and dispatched four of them. Every dispatch failed identically:

```
dispatch refuter/b-refuter-1: FAILED in 5s exit 1
ERROR: You've hit your usage limit. Visit https://chatgpt.com/codex/settings/usage
       to purchase more credits or try again at Aug 20th, 2026 1:32 PM.
```

Evidence: `research/frontier-15-dispatch/refuter-b-refuter-{1,2,3,4}.result.json`
and `.log`; `research/frontier-15-refuters-b/launch-{1,2,3,4}.out`.

Group `c`'s eight refuters (labels `c-refuter-1…8`, batch 7) ran to completion
just before mine and consumed the remaining quota; six had already returned
`ok:true` when I dispatched, two were still live. The reset time is **three days
away (2026-08-20 13:32)**, so this is not a wait-and-retry.

The model lineup is binding and I may not silently substitute another model for
the refuter role, so **I did not re-route the refuters to a different family.**
Instead I performed the adversarial reading myself, from disk, using the eight
task files above as my own checklists — Alpha is the sole adjudicator in any
case, and a refuter supplies evidence, not verdicts. What is lost is the
*independence* of that evidence, not the reading. **This is recorded as a
blocker for the lead Alpha and the owner**: if independent refutation of
batches 4–6 is required before publish, it must be re-run after 2026-08-20.

## 1. Reader reports received

| batch | report | scoped items | reader's findings | coverage claim |
|---|---|---|---|---|
| 4 | `research/frontier-15-reader-4.md` | 60/60 | 5 fatal, 8 polish | 94 item files opened |
| 5 | `research/frontier-15-reader-5.md` | 28/28 | 4 fatal, 6 nonfatal, 4 polish | 68 item files opened |
| 6 | `research/frontier-15-reader-6.md` | 25/25 | 5 fatal, 5 nonfatal, 1 polish | 70 item files opened |

All three reports are complete against their batch manifests: every id in
`research/frontier-15-batch-{4,5,6}.pages.json` is accounted for. All three
readers applied repairs themselves, so my job on their fatals is to re-derive the
defect and audit the repair from current disk text, not to take the repair on
trust.

## 2. Adjudication of reader findings

### Batch 4 — reader 4

**R4-1 — `thm-transfinite-description-of-generated-sigma-algebras`, empty
generator. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
The defect was real: with the original seed `\mathcal E_0:=\mathcal E`, an empty
generator gives `\mathcal E_\alpha=\varnothing` at every stage, while
`\sigma_X(\varnothing)=\{\varnothing,X\}`. The repaired seed on disk is
`\mathcal E_0:=\mathcal E\cup\{\varnothing\}`. I re-instantiated both boundary
cases against the current text: with `\mathcal E=\varnothing`,
`\mathcal E_0=\{\varnothing\}`, `\mathcal E_1=\{X\setminus\varnothing\}\cup
\{\varnothing\}=\{\varnothing,X\}`, and the family is then constant — the union is
`\{\varnothing,X\}=\sigma_X(\varnothing)`. With `X=\varnothing` the union is
`\{\varnothing\}`, again correct. Monotonicity (step 1.1, via the constant
sequence) and the `\omega_1`-regularity argument in step 2.2 both survive the new
seed. Repair accepted unchanged.

**R4-2 — same item, `[L4]` cited a definition for existence and minimality.
CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
`def-generated-sigma-algebra` fixes notation and defers existence to
`thm-generated-sigma-algebra-exists-and-is-minimal`. Current disk `[L4]` cites
that theorem, and `deps` carries it. Steps 2.1 and 3.1 are now licensed.

**R4-3 — `thm-cardinality-bound-for-generated-sigma-algebras`, `[L2]` dropped the
nonzero-base hypothesis. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
`lem-cardinal-arithmetic-basic-laws` clause (e) reads
"`\mu^{\kappa} \le \mu^{\lambda}` **provided** `\mu \ne 0`". Current `[L2]` reads
"monotone in the base, monotone in the exponent **for nonzero base**", which is
the exact clause. I additionally checked the whole cardinal-arithmetic chain of
this proof against its sources: `[L2]`'s `(\kappa^\lambda)^\mu=\kappa^{\lambda
\otimes\mu}` is clause (f); `[L3]` is `thm-hessenberg` (`\nu\otimes\nu=\nu` for
infinite `\nu`) plus `cor-cardinal-absorption`, restated *narrower* than the
source (harmless); `[L6]` is clauses (c)+(d) of
`thm-omega-one-is-the-least-uncountable-ordinal`. Step 1.2's successor count
`\mu^{\aleph_0}=(\kappa^{\aleph_0})^{\aleph_0}=\kappa^{\aleph_0\otimes\aleph_0}
=\mu` and step 2.1's `\omega_1\otimes\mu=\mu` both check out.

**R4-4 — `thm-cardinality-of-the-borel-sigma-algebra-on-rn`, `[L7]` cited
`def-axiom-of-choice` for cardinal availability. CONFIRMED FATAL; repair AUDITED
AND ACCEPTED.**
Current `[L7]` cites `thm-well-ordering-theorem` and `def-cardinal-arithmetic`,
which is what step 1.2 actually needs. I re-derived the whole proof: step 1.1's
countability of the rational-box family and its explicit infinitude witness
`q\mapsto(q,q+1)^n`; step 1.2's `\aleph_0^{\aleph_0}=\mathfrak c` via
`\mathcal P(\mathbb N)\hookrightarrow\mathbb N^{\mathbb N}\hookrightarrow
\mathcal P(\mathbb N\times\mathbb N)\approx\mathcal P(\mathbb N)` and
Schröder–Bernstein; step 1.3's reverse injection `\Psi(S)=\{(k,0,\dots,0):k\in S\}`
(each singleton closed hence Borel, `n\ge1` used). Both inequalities are present,
which is the failure mode this class of proof usually has.

**R4-6 — `rem-the-borel-hierarchy-never-stabilizes`, ordinal domain included an
undefined level. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
Both the Statement and `external_dependency.exact_statement` now read
`1\le\alpha<\omega_1`, and the consumer
`fs-the-borel-hierarchy-closes-after-two-steps` carries the same range in `[L1]`.
The `\Sigma^0_\alpha\subsetneq\Delta^0_{\alpha+1}` clause follows from
`\Sigma^0_\alpha\ne\Pi^0_\alpha` by complementation, so it is not an independent
claim. Source-locator verification is recorded in §5 below.

**R4-5, R4-7 – R4-13 — eight polish findings. CONFIRMED NONFATAL; repairs
accepted.** Each is a missing routine input (subset-of-countable, countability of
`\mathbb Q`, countable unions, stagewise choice tags) or malformed contract TeX.
None changes a Statement. I verified the repaired items still gate clean
(§6).

### Batch 5 — reader 5

**R5-1 — `rem-circle-quotient-model-agrees-with-published-examples`, false
symbol claim. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
I opened both published items. `ex-circle-as-r-mod-z` names the projection
`\mathbb R\to\mathbb R/\mathbb Z` as `q` and separately uses `p` for
`[0,1]\to[0,1]/\{0,1\}`; `ex-real-line-mod-integer-translations-is-a-covering`
also uses `q`. The original symbol-level agreement claim was therefore false of
both. The repaired Remark asserts only the symbol-independent facts — same
identification `x-y\in\mathbb Z`, canonical projection `x\mapsto[x]`, quotient
topology — each of which I confirmed against both published items. I also
confirmed the two **page** names the Remark cites are correct
(`subspaces-products-and-quotients-examples`, `covering-spaces-and-lifting-examples`).

**R5-2 — `lem-circle-loops-of-equal-degree-are-path-homotopic`, `[L2]` omitted
`n\ge1`. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
`lem-straight-line-homotopies-are-continuous` opens "Let `n\ge1`". Current `[L2]`
carries it, with the convexity and codomain hypotheses.

**R5-3 — `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`, `[L4]`
dropped the componentwise-continuity hypotheses. CONFIRMED FATAL; repair AUDITED
AND ACCEPTED.** `thm-componentwise-limits-and-continuity` clause 1 carries
`m\ge1`, metric domain `(X,d_X)`, `A\subseteq X`, codomain `\mathbb R^m`; the
current `[L4]` reproduces them.

**R5-4 — `cor-geometric-unit-circle-has-fundamental-group-z`, `[L3]` omitted the
homomorphism clause used in step 1.1. CONFIRMED FATAL; repair AUDITED AND
ACCEPTED.** `thm-induced-fundamental-group-map-functoriality` states
"`f_*([\alpha])=[f\circ\alpha]` is a well-defined group homomorphism" *and* the
two functorial equations; step 1.1 uses both, and the current `[L3]` states both.

**R5-5 – R5-10 — six nonfatal contract-evidence findings. CONFIRMED NONFATAL;
repairs accepted.** All six are boundary-row anchors pointing at the wrong proof
step or conflating the four interval conventions at `a=b`. I spot-checked each
anchor against the numbered steps on disk. R5-5 in particular is right that at
`a=b` the closed interval is a singleton and the other three are empty — and
`lem-open-quotient-arcs`'s step 1.2 does handle both.

**R5-11 – R5-14 — four polish findings.** R5-11 (`eta` → `\eta`) is applied and
correct. R5-12 – R5-14 are recorded-only continuity bridges; I agree they are
inside the 30-second rule (composition of a lift with an affine
reparametrisation, and postcomposition with the continuous projection).

### Batch 6 — reader 6

**R6-1 — `ex-goursat-triangle-integral-of-z-squared`, false title. CONFIRMED
FATAL; repair AUDITED AND ACCEPTED.** The old title claimed the integral
"vanishes edge by edge"; the three edge integrals are `1/3`, `(-i-1)/3`, `i/3`,
none zero. I recomputed all three from `F(z)=z^3/3`: `F(1)-F(0)=1/3`,
`F(i)-F(1)=(-i-1)/3`, `F(0)-F(i)=i/3`, sum `0`. The new title states the sum
claim, and the manifest row carries the same title.

**R6-2 — `ex-goursat-four-triangle-boundary-cancellation`, `[L1]` described the
lemma's proof rather than its Statement. CONFIRMED FATAL; repair AUDITED AND
ACCEPTED.** Current `[L1]` is the lemma's exact four-integral equality. I
independently verified the underlying lemma by expanding all twelve directed
edges: the three interior pairs `p\to r/r\to p`, `q\to p/p\to q`,
`r\to q/q\to r` cancel and the survivors concatenate to `a\to b\to c\to a`.

**R6-3, R6-4 — `ex-cauchy-integral-formula-exponential-over-z-minus-one` and
`ex-cauchy-integral-formula-cosine-third-order-pole`, inflated `[L1]`/`[L2]`.
CONFIRMED FATAL; repairs AUDITED AND ACCEPTED.** Both facts now carry the disc,
radius, interior-point, contour and index hypotheses of their sources. I
recomputed both values: `\int_{|z|=2}e^z/(z-1)\,dz=2\pi i e` and
`\int_{|z|=2}\cos z/(z-1)^3\,dz=(2\pi i/2!)\cdot(-\cos 1)=-\pi i\cos 1`.

**R6-5 — `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`,
uncited Euler identity. CONFIRMED FATAL; repair AUDITED AND ACCEPTED.**
`thm-polar-form-with-unique-principal-argument` gives `r(\cos\theta+i\sin\theta)`;
the exponential form needs `\exp(i\theta)=\cos\theta+i\sin\theta`. The added
dependency `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`
is in `deps` and in `[L3]`, and the manifest row was updated.

**R6-6 — 23 Beta-prefilled `risk_review` blocks removed. CONFIRMED NONFATAL;
removal ACCEPTED and CORRECT.** `risk_review` is Alpha's disposition at step 6
(`QUALITY-CONTROLS.md`); a step-5 author cannot pre-attest it. The removed blocks
carried `status: "completed"`, which is not even the value `risk-report.mjs
--require-reviewed` accepts (`"complete"`), so they would have failed the gate as
well as being unauthorised. I write the genuine dispositions in §4.

**R6-7 – R6-10 — four nonfatal boundary-anchor findings, R6-11 grouped polish.
CONFIRMED NONFATAL; repairs accepted.** R6-8 is the substantive one: the
`empty` row for `lem-differentiating-cauchy-integrals` had marked the case
inapplicable on the ground that `z_0\in V` is given, but the Statement permits
`V=\varnothing`, where the conclusion is vacuous. The repaired row records the
split. This is the `not_applicable`-hides-a-case pattern and the reader was right
to open it.

## 3. My own adversarial read (refuter-standard, performed by Alpha)

Recorded per batch in §3.1–§3.3 below as the read proceeds.

### 3.1 What I read, and how

With the refuter lane blocked I read the items myself against the eight
assignment files in `research/frontier-15-refuters-b/`. **All 52 high/critical
items** that `risk-report.mjs` routes across batches 4–6 were read in full,
step by step, with every direct `[F#]`/`[A#]`/`[L#]` opened on disk; so were
the definitional spine of each page and every item a reader had touched.
Arithmetic in every example was recomputed by hand rather than read.

Findings below are mine, not the readers'.

**B-1 — `thm-dynkin-pi-lambda`, `[L1]` and `[L2]`: "finite" where both sources
say "binary". CONFIRMED NONFATAL; REPAIRED.**
`lem-generated-lambda-system-closed-under-intersections` concludes *binary*
intersection closure and `lem-lambda-system-with-finite-intersections-is-sigma`
*assumes* it. `[L1]` therefore inflated its source and `[L2]` narrowed its own,
and the two deviations cancelled, so the proof was sound. Nonfatal under the
30-second rule — binary to finite is a one-line induction — but repaired now,
because this is precisely what the step-7 judges read and at step 6 it costs an
edit rather than a frozen-verdict adjudication. **The stored contract quotes
were already the exact source text**, which is why `citation-fidelity` stayed
green: it compares the *quote* to the *source*, and never the item's `[L#]`
prose to the quote. That same gap is behind R4-3, R5-2, R5-3, R6-3 and R6-4 —
five of the run's confirmed fatals in my batches are one missing detector.

**B-2 — `fs-every-subset-of-r-is-borel`, step 1.2: the continuum identity had
no cited home. CONFIRMED NONFATAL; REPAIRED (proof rewritten).**
`[L1]` defines `\mathfrak c:=|\mathcal P(\mathbb N)|`, so the step's
"`\mathfrak c=|\mathbb R|`" is load-bearing: without `|\mathcal P(\mathbb N)|
\le|\mathbb R|` the hypothesis `\mathcal P(\mathbb R)=\mathcal B(\mathbb R)`
yields no collision with Cantor at all. My first repair cited
`ex-the-cardinality-of-the-continuum` and **`depcheck` rejected it**
(`b-leaf-content`): the only item stating the identity outright lives on a
B/examples page and may not be a load-bearing target. That is the gate doing its
job, and it forced the honest route rather than the convenient one. I re-routed
through the Cantor set, both of whose inputs are A-page results:

- `|C|=|\{0,1\}^{\mathbb N}|=2^{\aleph_0}=|\mathcal P(\mathbb N)|=\mathfrak c`
  from `thm-cantor-set-ternary-description` clause 3 and
  `thm-cardinal-power-set-and-cantor` clause (a);
- `\mathcal P(C)\subseteq\mathcal P(\mathbb R)=\mathcal B(\mathbb R)` gives
  `|\mathcal P(C)|\le\mathfrak c=|C|`, contradicting Cantor.

Item, manifest `deps`, contract citations (seven rows now, one per cited item),
derivations and boundary anchors were updated in one act; `precheck` restratified
the proof (old 1.3 → 2.1, old 2.1 → 3.1) and I adopted its canonical form.

### 3.2 The load-bearing chains I traced end to end, and found sound

These are the places a defect would have been worst, and where I looked hardest:

- **Goursat → primitive → Cauchy → integral formula → higher derivatives →
  inequalities** (batch 6, 17 items). The chain holds. Specifically:
  `4^n\cdot 4^{-n}` cancels exactly in `thm-goursat-triangle-theorem`, so the
  estimate is not vacuous; the affine part is killed by a *cited* primitive
  result, not assumed; `thm-goursat-theorem-one-exceptional-point` uses only
  **continuity** at the exceptional point, so it is not circular; and — the one I
  most expected to fail — `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain`
  really does only need star-shapedness, because `\Delta[a,z,z+h]` is the union
  of the segments from `a` to points of `[z,z+h]`. `thm-cauchy-integral-formula-circle`
  handles `z\ne a` by the finite geometric identity with an explicit remainder
  bound, rather than asserting the centre computation at a general interior
  point. `cor-cauchy-inequalities` has `r^n`, not `r^{n+1}`.
- **Path lifting → degree → `\pi_1(S^1)\cong\mathbb Z`** (batch 5). The two
  facts that are easy to assert and hard to prove — path lifting and homotopy
  lifting — are **imported from published items**
  (`thm-path-lifting-for-covering-maps`,
  `cor-lifted-path-endpoints-depend-only-on-path-homotopy`,
  `thm-homotopy-lifting-for-covering-maps`), each of which I opened; none is
  restated more widely than it is proved, and the homotopy-lifting theorem is
  genuinely stated for an arbitrary parameter space, which
  `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` relies on. Degree
  is well defined because uniqueness of the lift is cited, not assumed.
  `thm-fundamental-group-of-the-circle` proves injectivity *and* surjectivity and
  claims an isomorphism, not a bijection.
- **The two good-sets bootstraps** (batch 4, Dynkin π–λ and monotone class).
  Both run stage 1 and stage 2, and in both the symmetry step that licenses stage
  2 is written out rather than being a silent reuse of stage 1 — the classic
  failure of this method. Minimality is applied in each case to a structure that
  is genuinely shown to be one and genuinely shown to contain the generators.
- **`lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence`.** The atom
  argument is correct and, notably, **choice-free**: every selection is by least
  code. I checked the point that carries it — `R_{n+1}\subseteq R_0` is again
  atomless, so the recursion continues — and that the `D_n` are nonempty, which
  is what makes `\Phi` injective downstream.

### 3.3 Boundary instantiation

For every high/critical item I instantiated the empty set/family, `n=0`, `n=1`,
degenerate parameters and both directions of each iff. The cases that were live
rather than vacuous, and that check out: the empty generator and `X=\varnothing`
in the transfinite recursion (repaired, R4-1); `|I|=0` with `X=\varnothing` in
`thm-sigma-algebra-generated-by-a-countable-partition` (`2^0=1`, algebra
`\{\varnothing\}`); `a=b` in all four interval conventions in
`lem-open-quotient-arcs`; degenerate and collinear triangles throughout batch 6,
which `def-oriented-complex-triangle-and-boundary` explicitly admits and every
Goursat item explicitly covers; `V=\varnothing` in
`lem-differentiating-cauchy-integrals` (reader 6's R6-8, correctly opened).

## 4. Risk reviews

**52 `risk_review` dispositions written** — every high/critical item
`risk-report.mjs` routes in batches 4, 5 and 6 (14 + 19 + 19).
`risk-report.mjs --require-reviewed` now returns **0 errors on all three
batches**. Each note records what was actually checked and carries an explicit
sentence that independent refuter evidence was unavailable, so the limitation
travels with the record rather than living only in this report.

Batch 5's contracts had 24 Beta-authored `risk_review` blocks with
`status: "pending"`; those are replaced. Batch 6's 23 Beta-authored blocks were
removed by reader 6 before I arrived (R6-6) and are **not** restored — they were
`status: "completed"`, which is not even the value the gate accepts.

## 5. Harvest faithfulness

- **Structural:** `coverage-checklist.mjs` is clean on all three batches (65,
  57 and 92 harvested results, 0 errors).
- **Liveness:** `url-sweep --recover --fail-on-dead` over all three coverage
  files: **16/17 live, 1 failed** →
  `research/frontier-15-alpha-b-url-sweep.json`. The failure is the archived
  Lebl `ca.pdf` snapshot cited by `rem-plane-star-shaped-and-convex-dictionary`.
  I re-tested by hand rather than trusting the sweep's verdict: archive.org's
  root answers 200 while that snapshot still answers 503, and the *original*
  host times out with no HTTP status at all. That is a host outage plus an
  archive-side 503, not a 404 against a healthy index, so under **RECOVER BEFORE
  REPLACE** the evidence does not justify re-sourcing. Left **open**
  (`frontier-15-B41`) for a pre-publish re-sweep. The Remark's other source
  (Tang-Kai Lee) is live and backs the same content, so no item loses backing.
- **Faithfulness, by text extraction not HTTP status:** I fetched Marker's
  `dst.pdf` and extracted its text with `pypdf`. Corollary 2.38 reads, verbatim
  modulo the PDF's ligature encoding: *"i) Σ⁰_α(C) ≠ Π⁰_α(C) for any α < ω₁.
  ii) If X is an uncountable Polish space, then Σ⁰_α(X) ≠ Π⁰_α(X) for any
  α < ω₁. In particular, Σ⁰_α(X) is a proper subset of Δ⁰_{α+1}(X)."* The
  repaired `external_dependency.exact_statement` in
  `rem-the-borel-hierarchy-never-stabilizes` matches clause (ii) and **narrows**
  it to `1\le\alpha<\omega_1`, which is the correct reading given Marker's
  Definition 2.4. R4-6's repair is confirmed against the source text itself.
- **Not checked:** I did not re-extract the remaining source PDFs (Tao, Fremlin,
  Hatcher, May, Wise, Stein–Shakarchi, Lee, Howell–Mathews) at their stated
  locators. The three readers each report having read them, and every item's
  mathematics I verified independently of its source, but *harvest faithfulness
  in the §6b.0 sense — does `contents` reflect the stated range — remains
  spot-checked rather than exhaustive for those eight sources.* Stated as a gap,
  not claimed as done.

## 6. Gate results after my repairs

| gate | batch 4 | batch 5 | batch 6 |
|---|---|---|---|
| `proof-contract --strict` | 47/47, 0 err | 24/24, 0 err | 23/23, 0 err |
| `citation-fidelity --fail-on-missing-quote` | clean | clean | clean |
| `boundary-audit --fail-on-contradicted` | 376 rows, clean | 192 rows, clean | 184 rows, clean |
| `risk-report --require-reviewed` | 0 err, 47 routed | 0 err, 24 routed | 0 err, 23 routed |
| `content-policy` | 60 items, 0 err | 28 items, 0 err | 25 items, 0 err |
| `coverage-checklist` | 65 results, 0 err | 57 results, 0 err | 92 results, 0 err |
| `audit-manifest` | 152 rels, 0 defects | 131 rels, 0 defects | 125 rels, 0 defects |

Repo-wide: `precheck` 4264 checked / 0 failing; `depcheck` OK (no cycles, all
references resolve, no draft on a published page); `fwdcheck` OK.

**`finite-smoke` passes vacuously on all three batches** — `0 error(s), 0
check(s) over 0/N item(s) carrying obligations`. That is a recorded non-run, not
mathematical evidence, and I am flagging it rather than listing it as a green
gate: no item in batches 4–6 registers a finite obligation, so the detector had
nothing to falsify.

## 7. Defect-ledger rows

**41 rows appended** in the same act as the dispositions
(`frontier-15-B1` … `frontier-15-B41`), via
`node tools/defect-ledger.mjs append --file …`. `validate --run frontier-15`
reports **60 rows, 0 errors** (19 from group `c`, 41 mine). The view
`research/DEFECT-LEDGER.md` was re-rendered by `append` in the same invocation.

One row per defect: 13 for reader 4's findings, 14 for reader 5's, 11 for
reader 6's (R6-11 kept as the single grouped row the reader recorded), 2 for my
own, 1 for the open URL. Severity split across my batches: **14 fatal, 13
nonfatal, 14 polish**. Every fatal is `disposition: fixed`; the single `open`
row is B41, the URL sweep.

## 8. Items changed by me

| item | change | gates re-run |
|---|---|---|
| `items/thm-dynkin-pi-lambda.md` | `[L1]`, `[L2]` prose → the sources' "binary intersections" | precheck, contract, fidelity, citecheck, rendercheck |
| `items/fs-every-subset-of-r-is-borel.md` | refutation re-routed through the Cantor set; `deps` +4; `[L4]`, `[L5]` added; steps restratified | precheck, contract, fidelity, boundary, depcheck, content-policy, rendercheck |
| `research/frontier-15-batch-4.pages.json` | `fs-every-subset-of-r-is-borel` deps row | content-policy, audit-manifest |
| `research/frontier-15-batch-{4,5,6}.proof-contracts.json` | 52 `risk_review` dispositions; batch-4 citation/derivation/boundary updates for the two repairs | contract --strict, risk-report --require-reviewed, boundary-audit |

No item was added or deleted, so no `splice-plan --update` was required. No
published item was edited, so no published-dependency repair record was opened.
No `verification.judge` block existed on any scoped item, so none was deleted.

## 9. Honest remaining gaps

1. **The refuter lane never ran (§0).** This is the material gap. Batches 4–6
   have had one independent reader each plus my own adversarial pass; they have
   had **no independent refuter**. Batch 7 (group `c`) had eight. If the level is
   to go to step 7 with the same evidentiary standard across all batches, my
   eight task files are written and ready to dispatch after 2026-08-20.
2. **Harvest faithfulness is spot-checked, not exhaustive** for eight of the
   nine sources (§5).
3. **`finite-smoke` is a vacuous pass** on all three batches (§6).
4. **One open URL** (`frontier-15-B41`), needing a pre-publish re-sweep.
5. **Duplication worth a 6c look, not a defect:** `thm-real-line-covers-real-line-mod-integers`
   re-proves, for the page's own `p`, that `\mathbb R\to\mathbb R/\mathbb Z` is a
   covering map — a fact the published `ex-real-line-mod-integer-translations-is-a-covering`
   already states. The re-proof is justified (the explicit sheet structure
   `J_x+n` is what the lifting arguments consume, and the published item is on a
   B page and so cannot be a load-bearing target anyway), but the lead Alpha owns
   the cross-level edges and should see it.
6. **An id-slug mismatch, not a defect:**
   `thm-infinite-sigma-algebra-has-continuum-many-members` proves an injection
   `\mathcal P(\mathbb N)\to\mathcal A` and uncountability, not equality with the
   continuum. The **title** says exactly that and is correct; only the id slug is
   looser. Ids are immutable and the title is what renders, so I changed nothing.

## 10. Consolidated fatal-error ledger for my batches

Fourteen publish-blocking defects, all **fixed and re-gated**. Grouped by defect
type; every one was found by an independent reader and confirmed by me from disk.

**False or overstrong statement / title (3)**
- `thm-transfinite-description-of-generated-sigma-algebras` — Statement false at
  the empty generator (R4-1) — seed repaired.
- `rem-circle-quotient-model-agrees-with-published-examples` — Remark prose
  false about both published items it named (R5-1) — restated
  symbol-independently.
- `ex-goursat-triangle-integral-of-z-squared` — title contradicted by its own
  computation (R6-1) — retitled, item and manifest.

**Missing hypothesis / choice scope (3)**
- `thm-cardinality-bound-for-generated-sigma-algebras` `[L2]` — nonzero-base
  proviso dropped (R4-3).
- `rem-the-borel-hierarchy-never-stabilizes` + `fs-the-borel-hierarchy-closes-after-two-steps` —
  ordinal range included an undefined level (R4-6); confirmed against Marker's
  own text.
- `lem-circle-loops-of-equal-degree-are-path-homotopic` `[L2]` — `n\ge1` dropped
  (R5-2).

**Incorrect dependency citation (6)**
- `thm-transfinite-description-of-generated-sigma-algebras` `[L4]` — a definition
  cited for existence and minimality (R4-2).
- `thm-cardinality-of-the-borel-sigma-algebra-on-rn` `[L7]` — `def-axiom-of-choice`
  cited for cardinal availability (R4-4).
- `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` `[L4]` —
  componentwise continuity restated without its hypotheses (R5-3).
- `ex-goursat-four-triangle-boundary-cancellation` `[L1]` — the lemma's *proof*
  cited as its Statement (R6-2).
- `ex-cauchy-integral-formula-exponential-over-z-minus-one` `[L2]` and
  `ex-cauchy-integral-formula-cosine-third-order-pole` `[L1]` — disc, radius,
  interior-point and index hypotheses erased (R6-3, R6-4).

**Invalid inference (1)**
- `cor-geometric-unit-circle-has-fundamental-group-z` step 1.1 — inferred that
  `h_*` is a homomorphism from a `[L3]` that stated only the functorial
  equations (R5-4).

**Missing citation on a load-bearing step (1)**
- `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
  `[L3]` — Euler's identity used to pass from polar to exponential form, cited
  nowhere (R6-5).

**Nothing in my batches is left open on mathematical grounds.** The open items
are procedural: the un-run refuter lane, the un-extracted source locators, the
vacuous finite-smoke, and one URL.
