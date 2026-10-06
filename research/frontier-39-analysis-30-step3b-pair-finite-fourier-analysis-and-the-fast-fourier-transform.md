# Step 3b authoring — Finite Fourier Analysis and the Fast Fourier Transform

- Run: `frontier-39-analysis-30` (role: alpha-high; batch 28; this pair only)
- A page: `finite-fourier-analysis-and-the-fast-fourier-transform` (order 510.06507, `fourier-analysis`)
- B page: `finite-fourier-analysis-and-the-fast-fourier-transform-examples` (order 510.06508)
- Owned items: 19 (14 A + 5 B), listed below in the dispatch's dependency-level order.
- Scaffold inputs: `research/frontier-39-analysis-30-batch-28.pages.json`,
  `...-batch-28.coverage.json`, `...-batch-28.notes.md`,
  `...-batch-28.cross-batch-dependencies.json`, design FR-18 in
  `research/plan-fourier-analysis-track.md` (L1326–L1366), `research/plan-spec.json`
  pages 510.06507/.06508. No `frontier-39-analysis-30-owner-authoring-direction.md`
  exists.
- Direct in-run prerequisite pairs (page-scope `requires` edges only, no FR-18 item
  consumes them): `bochner-inversion-and-plancherel-on-lca-groups`,
  `pontryagin-duality-for-locally-compact-abelian-groups`.

## Owned IDs (dispatch order)

Level 0: `def-counting-inner-product-on-complex-functions-on-z-mod-n`,
`def-cyclic-convolution-on-z-mod-n`,
`def-unitary-discrete-fourier-transform-on-z-mod-n`,
`lem-orthogonality-of-characters-on-a-finite-cyclic-group`.

Level 1: `lem-dft-squares-to-reflection-and-has-fourth-power-identity`,
`lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`,
`thm-finite-fourier-inversion`, `thm-finite-parseval-and-plancherel`.

Level 2: `def-unnormalised-engineering-dft-and-conversion`,
`cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` (B),
`ex-unitary-dft-for-n-equals-one-and-two` (B).

Level 3: `lem-radix-two-even-odd-dft-factorisation`,
`ex-cyclic-convolution-via-the-dft` (B).

Level 4: `def-recursive-radix-two-fast-fourier-transform`.

Level 5: `thm-radix-two-fft-arithmetic-complexity`,
`thm-radix-two-fft-correctness`,
`cex-radix-two-recursion-does-not-directly-apply-to-odd-length` (B).

Level 6: `rem-cooley-tukey-factorisation-for-composite-lengths`,
`ex-four-point-radix-two-fft` (B).

## Open obligations at entry

1. Author 19 item files and the two `library/fourier-analysis/` pages; write the
   batch proof contracts to `research/frontier-39-analysis-30-batch-28.proof-contracts.json`.
2. Audit every scaffold statement/strategy against its declared suppliers before
   accepting it; repair local gaps in the manifest where the actual proof needs a
   different or additional dependency, preserving sibling rows.
3. Flag any item supplier that is not yet authored: none is expected, since all 34
   published out-of-pair dependency ids exist on disk and the only in-run supplier
   edges are the two page-scope `requires` edges that no FR-18 item consumes.
4. Recheck the batch-28 pre-splice findings against current inputs (the complex-sum
   dependency correction, the Taylor/MITF convention translation, and the
   direction of the radix-two split).
5. Record a Step-3b item decision for each of the 19 items after the checks, or
   escalate with exact evidence.
6. Refresh `research/frontier-39-analysis-30-batch-28.cross-batch-dependencies.json`
   and run the ledger refresh; report plan/prose amendments for Step 4.
7. Run the explicit-path checks before handoff (precheck, rendercheck,
   proof-layout, content-policy, depcheck, item-dependency-levels, validate-plan).

## Checkpoints

(updated after each item; append only)

### Level 0 (2026-10-05)

- `def-counting-inner-product-on-complex-functions-on-z-mod-n` — written. Definition of
  $\langle f,g\rangle=\sum_{x\in\mathbb Z/N}f(x)\overline{g(x)}$ with the two displays
  identified through the standard representatives bijection; linearity, conjugate symmetry
  and definiteness argued from the recursion of finite sums and the field laws. Added the
  published supplier `thm-standard-representatives-modulo-n` to deps (the scaffold omitted
  it although the definitional content needs the enumeration fact). Checks: precheck
  not-applicable (definition, no phase body), rendercheck pass.
- `def-cyclic-convolution-on-z-mod-n` — written. Unnormalised convolution, well-definedness,
  commutativity by the involution $y\mapsto x-y$ and reindexing. Added
  `def-counting-measure` and `ex-counting-measure-as-haar-measure-on-a-discrete-group` to
  deps for the counting-measure reading stated in the scaffold. Checks: rendercheck pass.
- `def-unitary-discrete-fourier-transform-on-z-mod-n` — written. $N^{-1/2}$-normalised
  negative-sign transform, class-valued summands, $N$-periodicity in $k$ from the kernel
  theorem, character form from `ex-pontryagin-dual-of-a-finite-cyclic-group`, linearity
  recorded. Added `thm-standard-representatives-modulo-n` to deps. Checks: rendercheck pass.
- `lem-orthogonality-of-characters-on-a-finite-cyclic-group` — written. Case strategy on
  $k\equiv\ell\pmod N$; geometric identity $(1-\omega)S_n=1-\omega^n$ proved by induction
  from the recursion (the published factorisation lemma is real-valued and not cited);
  coincident case gives $\iota(N)$ via `lem-integer-multiples-agree-with-canonical-natural`.
  Added `def-congruence-modulo-an-integer` and `def-group-power` to deps. Checks: precheck
  pass (cases), proof-layout pass (6 steps over the three proof-bearing items so far).

### Levels 1–2 (2026-10-05)

- `lem-dft-squares-to-reflection-and-has-fourth-power-identity` — written. Expanded double
  sum, orthogonality evaluated at the class $-(x+y)$, singleton collapse, then
  $\mathcal F_N^4=\mathrm{id}$ and $\mathcal F_N^3=\mathcal F_N^{-1}$ via the two-sided
  inverse theorem. Added `def-finite-sum-in-a-commutative-monoid`, `def-function-space`,
  `lem-rational-power-laws`, `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`,
  `thm-standard-representatives-modulo-n` to deps. Checks: precheck pass (direct), rendercheck pass.
- `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` — written.
  Fubini, the substitution $z=x-y$, the factor $N^{-1/2}N^{1/2}N^{1/2}=N^{1/2}$. Dropped
  the scaffold's engineering-normalisation aside (it forward-referenced the level-2
  definition) and kept the promised unitary-form law. Checks: precheck pass, rendercheck pass.
- `thm-finite-fourier-inversion` — written. Substitution, Fubini, orthogonality, the
  coefficient $N^{-1}N=1$; both compositions for bijectivity; periodicity in $x$ recorded.
  Added the bijection theorem, `def-finite-sum-in-a-commutative-monoid`,
  `thm-standard-representatives-modulo-n`. Checks: precheck pass, rendercheck pass.
- `thm-finite-parseval-and-plancherel` — written. Conjugation of the second factor via
  $|\zeta|=1$, Fubini, orthogonality, collapse, norm case. Added
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  `def-finite-sum-in-a-commutative-monoid`, `thm-standard-representatives-modulo-n`.
  Checks: precheck pass, rendercheck pass.
- `def-unnormalised-engineering-dft-and-conversion` — written. $X=\sqrt N\,\mathcal F_N$, both
  conversion identities, the $1/N$ inverse formula from inversion. Checks: precheck
  not-applicable (definition), rendercheck pass.
- `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` (B) — written.
  False claim about unbounded linear values; witness $f=g=(1,1)$ on $\mathbb Z/2$ giving
  $(2,2)$ vs linear $(1,2,1)$, reduction $z^2\mapsto1$, padded length-$4$ check. Checks:
  precheck pass (direct), rendercheck pass.
- `ex-unitary-dft-for-n-equals-one-and-two` (B) — written. $\mathcal F_1=\mathrm{id}$,
  $\mathcal F_2$ matrix $A$ with $A^2=I_2$, fourth-power and Parseval reconciliation.
  Added `def-complex-exponential`, `lem-rational-power-laws`, `thm-finite-parseval-and-plancherel`.
  Checks: precheck pass, rendercheck pass.

### Levels 3–4 (2026-10-05)

- `lem-radix-two-even-odd-dft-factorisation` — written. Well-definedness/injectivity/disjointness
  of $r\mapsto 2r$ and $r\mapsto 2r+1$ (division algorithm, cancellation, $\mathbb Z$ units),
  exhaustion by the count $2M=N$, split of the defining list, first and second identities with
  the twiddle sign flip at $k+M$. Added the division-algorithm, cancellation, units and
  standard-representative suppliers. Checks: precheck pass (direct), rendercheck pass.
- `ex-cyclic-convolution-via-the-dft` (B) — written. $X(f)=(2,1-i,0,1+i)$, product
  $(4,-2i,0,2i)$, inverse transform $(1,2,1,0)$, direct convolution match, wrap-free remark.
  I dropped the scaffold's `def-rational-power` usage claim where not needed but kept it in
  deps for the $\sqrt4=2$ conversion. Checks: precheck pass, rendercheck pass.
- `def-recursive-radix-two-fast-fourier-transform` — written. Recursion on $m$ packaged
  through the state set $\mathbb N\times(\mathcal F\to\mathcal F)$ and `thm-recursion`, the
  well-definedness of the combine by periodicity, base case $m=0$, and the explicit note that
  correctness and complexity are proved separately. Checks: precheck not-applicable
  (definition), rendercheck pass.

### Levels 5–6 (2026-10-05)

- `thm-radix-two-fft-arithmetic-complexity` — written. The counted recurrence
  $T_m\le2T_{m-1}+2\cdot2^m$, the normalised recursion $U_m\le U_{m-1}+2$, the unrolled bound
  $T_m\le2m2^m$, and the explicit constant $C=2$; the logarithmic reading
  $2N\log_2N$ via `def-logarithm-to-a-base`. **Scaffold repair:** the exact bound proves the
  planned $O(N\log_2N)$ result with $C=2$, but the formal asymptotic-comparison definition is on
  a later page. **Owner decision:** keep the current reading order and add a concise local
  eventual-domination definition of $O$ in this theorem's facts; retain both the exact bound and
  the planned asymptotic statement, and remove the non-load-bearing forward reference.
- `thm-radix-two-fft-correctness` — written. Induction on $m$ with the length-one base case
  and the two applications of the induction hypothesis in the radix-two combine; the
  equivalent $2^{m/2}\mathcal F_N$ form by `def-rational-power` / `lem-rational-power-laws`.
  Checks: precheck pass (induction), rendercheck pass.
- `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` (B) — written. The false
  universal partition claim, the witness $N=3$ where doubling is the transposition
  $(0)(1\,2)$, the translate, the non-integer half-length, and the explicit disclaimer that
  odd-length transforms are not claimed hard. Checks: precheck pass, rendercheck pass.
- `rem-cooley-tukey-factorisation-for-composite-lengths` — written. Recorded, not proved:
  `proved_here: false`, the `external_dependency` record (Taylor §12 Exercise 4 quoted),
  no proof section, `verification.precheck: n/a`. The two Remark paragraphs state what is
  recorded and what is not claimed. Checks: precheck not-applicable, rendercheck pass,
  extcheck has no row for it.
- `ex-four-point-radix-two-fft` (B) — written. Both recursion levels, the two length-two
  transforms, the combine with twiddles $1,-i,-1,i$, agreement with direct evaluation, and
  the exact count $T_2=16=2m2^m$ in the stated model. Checks: precheck pass, rendercheck pass.

## Local repairs to the scaffold (all recorded in the batch manifest)

1. **Complex-sum suppliers.** The scaffold already corrected the real-only sum lemmas; the
   authored proofs use `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` throughout, and `lem-finite-sum-laws` only for the
   real-valued definiteness clause of the counting inner product.
2. **Standard representatives.** `thm-standard-representatives-modulo-n` was added to the
   deps of the counting inner product, the unitary transform, the orthogonaliy lemma's
   siblings (inversion, Parseval, the reflection identity, the radix-two lemma) because the
   authored arguments enumerate classes by $[0],\dots,[N-1]$ and use the enumeration as a
   bijection.
3. **Examples-page suppliers removed (b-leaf-content).** `def-counting-inner-product-…` and
   `def-cyclic-convolution-…` no longer consume
   `ex-counting-measure-as-haar-measure-on-a-discrete-group`, and
   `def-unitary-discrete-fourier-transform-…` no longer consumes
   `ex-pontryagin-dual-of-a-finite-cyclic-group`: both live only on B pages and cannot be
   dependencies (SCHEMA; dispatch rule). The counting content is carried by the A-page
   `def-counting-measure`, and the character family $\chi_k([m])=\exp(2\pi ikm/N)$ is now
   defined and verified locally in the transform definition (well-defined on classes,
   multiplicative, unit modulus — all cited to A-page suppliers).
4. **Forward reference for the complexity item.** See the level-5 checkpoint: the
   $O$-notation link moved from `deps` to `forward_refs` and from the Statement to a Remark.
5. **Unused scaffold deps dropped** where the authored proof does not use them
   (`def-monoid-finite-product`, `thm-generalised-associativity` in the orthogonality lemma;
   `lem-finite-sum-laws` in inversion; the complex-power and rational-power items in the
   radix-two lemma; `def-asymptotic-resource-comparison` and `def-canonical-natural` in the
   complexity theorem), and missing ones added where the proof uses them (division algorithm,
   cancellation, units of $\mathbb Z$ and ordered-ring facts for the radix-two index
   analysis; the two-sided-inverse theorem, rational-power laws and function-space
   extensionality for the squaring/inversion results; the Euler-formula corollary and kernel
   theorem for the twiddle values).

## Checks actually run (2026-10-05, final bytes)

- `node tools/tsx-run.mjs tools/precheck.mts <19 item paths>` → 13 checked, 0 failing (six
  definitions/remark with no phase body reported not-applicable).
- `node tools/rendercheck.mjs <19 items + 2 pages>` → 21 files OK (YAML, math spans, links).
- `node tools/proof-layout.mjs <19 item paths>` → 19 items, 65 steps, 0 defects.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-28.pages.json` →
  19 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-28.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 19/19 items checked.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` → 152 rows,
  no template cluster, no contradicted disposition.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → 151 citations, every quote
  found; one heuristic *widening* candidate remains (read and judged a surface-text artefact:
  `[L3] -> def-complex-integer-powers` restates the definition's own power recursion
  $\omega^0=1$, $\omega^{n+1}=\omega^n\omega$, which is exactly what the cited definition
  contains).
- `node tools/finite-smoke.mjs …` → 0 errors, 0 checks (no registered smoke model matches a
  finite-Fourier assertion; the run-level liveness of that gate is provided by sibling
  batches).
- `node tools/risk-report.mjs …` → 0 errors, 19 items routed (informational).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-28.pages.json` →
  19 items, 0 errors; whole-run form 922 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → no row
  mentions batch 28 or either finite-Fourier page; the reported mismatches are all in other
  in-flight batches. A direct recomputation of the 19 levels from the manifest equals the
  recorded `dependency_level` in both the manifest and the item metadata.
- `node tools/depcheck.mjs`, `node tools/fwdcheck.mjs --quiet`, `node tools/extcheck.mjs`,
  `node tools/prosecheck.mjs`, `node tools/depsource.mjs`, `node tools/pathcheck.mjs` →
  zero findings naming any of the 19 items or either page (run-wide findings from other
  in-flight batches remain; the `coverage-low-yield` warning on the A page is the scaffold's
  recorded, individually reasoned decline warning).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-28.coverage.json --require-destination`
  → 2 pages, 46 harvested results, 0 errors, 1 advisory warning (unchanged from the
  scaffold).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0.

## Open obligations, escalations and published concerns

1. **Frontier-ledger refresh: done.** Two earlier attempts failed while parsing sibling
   in-flight items with `Invalid escape sequence \m` (batch 27's
   `lem-compactly-generated-lca-group-…` frontmatter) and `\D` (the analytic-semigroups item
   `thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup`); both were
   concurrent sibling states and the later retry reported
   `frontier-dependency-ledger: refreshed and deduplicated`. The refreshed ledger records
   batch 28 as reviewed with the two `open` page-scope rows below, and also two supplier-side
   page edges for batches 29/30 that name this page (their owners' inputs, to be reconciled
   at Step 8 once those pairs are authored).
2. **Page-scope edges stay open.** The two `requires` edges into
   `bochner-inversion-and-plancherel-on-lca-groups` (batch 26) and
   `pontryagin-duality-for-locally-compact-abelian-groups` (batch 27) remain `open` in
   `research/frontier-39-analysis-30-batch-28.cross-batch-dependencies.json`: they are page
   interfaces, and no FR-18 item consumes any batch-26/27 item. The character-family clause
   that previously read through the FR-15 B-page example is now a local definition.
3. **Resolved owner decision—complexity notation.** Keep the page at its planned reading order:
   its exact bound $T_m\le2N\log_2N$ with $C=2$ preserves and strengthens the design's asymptotic
   claim. The theorem now defines eventual domination locally, derives $T_m=O(N\log_2N)$, and has
   no later-page forward reference. Owner `repaired` item receipt recorded (`20c6c8a2…`); no page
   move or new reusable item is needed.
4. **Published defects.** None established in the suppliers used. The published items
   consulted were read at statement level and, for the load-bearing ones
   (`lem-finite-sum-reindexing-and-fubini`, `thm-kernel-and-fibres-of-complex-exponential`,
   `thm-complex-exponential-addition-and-real-extension`, `def-rational-power` /
   `lem-rational-power-laws`, `thm-standard-representatives-modulo-n`,
   `thm-division-algorithm-in-z`), at argument level; no counterexample or unsupported clause
   was found. Any later finding must go to the canonical ledger.

## 3a findings and their dispositions (all six addressed)

The Step-3a scope review recorded six non-blocking findings (F1–F6) for the author. Disposition
on the final bytes:

- **F1 (logarithm identity for the complexity bound).** Addressed: the theorem now proves the
  explicit bound $T_m\le2m\,2^m$ and converts it to $2N\log_2N$ using `def-real-power`
  ($2^m=\exp(m\log2)$), `def-natural-logarithm`, `thm-natural-logarithm-laws` (including
  injectivity of $\log$ and $\log2\ne0$) and `def-logarithm-to-a-base`; all four are declared
  deps.
- **F2 (rational powers for $2^{m/2}$).** Addressed: `def-rational-power` and
  `lem-rational-power-laws` are declared deps of `thm-radix-two-fft-correctness`, and the
  equivalence $\operatorname{FFT}_m=2^{m/2}\mathcal F_N$ is proved there.
- **F3 (`def-injection-surjection-bijection` for the word "bijective").** Addressed:
  the item now declares `def-injection-surjection-bijection` as well as the two-sided-inverse
  theorem, and the proof uses the theorem's uniqueness clause.
- **F4 ($e^{-\pi i}$ supplier and no matrix-unitarity definition).** Addressed:
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` is a declared dep of
  the $N=1,2$ example, which computes $A^2=I_2$ directly and calls $A$ its own inverse
  instead of invoking an undefined matrix-unitarity predicate.
- **F5 (MITF locators overclaim).** Confirmed against the fetched lecture (25 994 bytes, sha
  `e30b7b67c1cdd48e`, text 12 371 chars): the lecture contains no convolution, no polynomial
  products and no $z^n-1$ reduction. The four MITF locators claiming that content
  (`def-cyclic-convolution-…`, `lem-finite-fourier-transform-converts-…`,
  `cex-linear-and-cyclic-…`, `ex-cyclic-convolution-via-the-dft`) have been **removed**;
  Taylor (11.30)–(11.33) is the source for those claims. Two further locators were
  **corrected**: MITF heading 4 states the coefficient-halves (decimation-in-frequency) form,
  the mirror of the even/odd-coefficient identity proved here, and
  `lem-radix-two-even-odd-dft-factorisation` and `thm-radix-two-fft-correctness` now say so.
- **F6 (encoding of the varying-type recursion).** Addressed: the definition records the
  packaged state set $\mathbb N\times(\mathcal F\to\mathcal F)$, the step function, the
  application of `thm-recursion` and the uniqueness it yields; no further precedent citation
  is needed.

## Decisions recorded

All 19 items carry a current Step-3b decision receipt with `confidence: 1` and the examined
dependency list: 18 `repaired` (the recorded local scaffold repairs above) and one `accept`
(`rem-cooley-tukey-factorisation-for-composite-lengths`, whose statement, deps and provenance
were preserved as scaffolded). The 14 receipts invalidated by the final source-locator and
dependency edits were re-recorded on the frozen bytes; a direct re-check of all 19 through
`tools/step3-decisions.mjs` reports 19 of 19 closed. Scope for the pair is the Step-3a
`sufficient` decision on the sealed scope hash.

**Concurrent-writer note (recorded honestly).** During this dispatch a corpus-wide mechanical
edit by another writer appended a trailing space after the final `∎` and removed the final
newline of roughly fifteen thousand existing item files, including many published suppliers in
this pair's transitive dependency closure. That whitespace change alters supplier bytes, hence
the transitive input hash `tools/step3-decisions.mjs` binds item receipts to, and it
invalidated the receipts recorded earlier in this dispatch. The mathematics is unchanged (the
diff is one trailing character on the last line), and all 19 receipts were re-recorded on the
current bytes; the final re-check reports 19 of 19 closed, and the explicit-path checks above
were re-run on those bytes. If the concurrent edit continues, the engine's Step-3 recertification
pass (rehash and recertify in dependency order before the gate) is the mechanism that binds the
final state; this pair's own item and page bytes were not touched by that edit.

## Independent Step 3b re-audit — 2026-10-05

All 19 B28 items were re-audited in dependency order, with current dependency
arrays and transitive hashes. Batch-26 and batch-27 page prerequisites are now
closed and their B28 cross-batch rows are `verified`; neither is an item-level
proof input. Two ambiguous orthogonality summation facts were clarified by
separating their fixed parameters from the dummy index and using standard
representatives explicitly. The current recursive FFT Definition uses a tagged
state space of level-preserving maps, which makes its transition total; its three
consumer contract quotes were synchronized to that current Definition.

The Cooley–Tukey remark keeps the planned recorded-not-proved status. Its source
record now includes the primary 1965 paper, pp. 297–298, equations (3)–(8),
supporting the general `N=r_1r_2` factorization. The full five-page PDF was fetched
(358,294 bytes; SHA-256
`8fe5d32dcf08c01f9168a71e3fea746308ba465d0b4d0ef95e7f4f2af300e282`) and read.
No Statement or Definition interface changed, and no outside-B28 consumer needs
review. All 19 decisions are current and closed: 13 accepts and 6 repaired
dispositions. Final focused checks: proof-layout 19 items, 65 steps, 0 defects;
strict proof contracts 19/19, 0 errors, 0 warnings. No tests or workflow gates
were run.
