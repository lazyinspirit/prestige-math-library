# Step 3b — scaffold audit and authoring: Fourier multipliers and Sobolev characterisations

- Run: `frontier-36-complete` (role: alpha-high)
- A page: `fourier-multipliers-and-sobolev-characterisations` (batch 13, order 458.02601)
- B page: `fourier-multipliers-and-sobolev-characterisations-examples` (batch 13, order 458.02602)
- Dispatch order (dependency level, then page order, then item ID):
  0. `def-translation-invariant-fourier-multiplier-on-schwartz-space`, `lem-weak-derivatives-are-polynomial-fourier-multipliers`,
     `thm-hausdorff-young-for-periodic-fourier-coefficients`, `thm-hausdorff-young-for-the-euclidean-fourier-transform`
  1. `def-japanese-bracket-bessel-potential-operator`, `def-lp-fourier-multiplier-and-multiplier-norm`, `lem-ltwo-fourier-multiplier-bound`
  2. `def-mihlin-symbol-with-more-than-half-dimension-derivatives`, `ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
     `ex-translation-and-differentiation-multiplier-symbols`, `rem-fefferman-ball-multiplier-obstruction`
  3. `rem-jump-multipliers-can-be-bounded-outside-mihlin`
  6. `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`, `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`
  7. `cor-sobolev-duality-from-the-fourier-pairing`, `lem-bessel-potentials-shift-sobolev-order-isometrically`,
     `ex-negative-sobolev-order-containing-a-dirac-mass`

## Checkpoint log

(author appends one block per item below; the blocks record ID, exact claim, deps, sources, decisions, checks, open gaps)

### Checkpoint 1 — level 0 (items 1–4), authored

- `def-translation-invariant-fourier-multiplier-on-schwartz-space` (definition, `proof: not-applicable`): domain-qualified
  symbol $m$, $D_m$, $T_mf=\mathcal F^{-1}(u_{m\widehat f})$; translation action on $\mathcal S'$ defined by transposition;
  domain invariance and commutation justified in the Definition section. Deps extended (manifest) with
  `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`, `def-tempered-distribution`,
  `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`,
  `thm-fourier-translation-modulation-dilation-and-reflection-laws`,
  `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `lem-schwartz-functions-and-all-derivatives-are-integrable`,
  `def-schwartz-space-and-its-seminorms` (all published; level unchanged at 0).
- `lem-weak-derivatives-are-polynomial-fourier-multipliers` (lemma): distributional identity + a.e. Plancherel form; precheck PASS.
- `thm-hausdorff-young-for-periodic-fourier-coefficients` (theorem): endpoint bounds on the finite-simple core, published
  interpolation corollary, identification with the coefficient map via the intersection-agreement corollary; precheck PASS
  after adopting the canonical stratification.
- `thm-hausdorff-young-for-the-euclidean-fourier-transform` (theorem): same route on $\mathbb R^n$; precheck PASS.
- Open: none so far. Checks still to run at batch level: manifest dependency reconciliation, contracts, coverage, decisions.

### Checkpoint 2 — level 2 B examples and Fefferman leaf, authored

- `ex-heat-and-poisson-semigroups-as-fourier-multipliers` (example, B): symbols
  $m_t=e^{-4\pi^2t|\xi|^2}$, $p_t=e^{-2\pi t|\xi|}$; unique bounded $L^2$ extensions via the
  exact-multiplier lemma; contraction/norm-one, identity at $t=0$, semigroup law; strong
  $L^2$ time derivatives on $(0,\infty)$ by mean-value difference quotients plus dominated
  convergence ($|\xi|^2e^{-4\pi^2t|\xi|^2}\le\frac1{et}$, etc.), identified with the
  distributional Laplacian through the derivative and regular-distribution identities;
  heat equation $\partial_tu=\Delta u$ and upper-half-space equation
  $w''+\Delta_xw=0$ distributionally for $t>0$. precheck PASS.
- `ex-translation-and-differentiation-multiplier-symbols` (example, B, statement and proof
  `ai-generated`, `generation.role: example`): symbol $m(\xi)=e^{-2\pi ia\cdot\xi}$ of
  $\tau_a$ on the Schwartz core via the $L^1$ translation law and $\mathcal F^{-1}\mathcal F$,
  extension is an $L^2$ isometry since $|m|=1$; distributional $\partial_j$ symbol
  $\sigma=2\pi i\xi_j$; explicit frequency bumps $\psi_N$ (compact-set bump lemma) with
  $\operatorname{supp}\psi_N\subseteq\{\xi_j>N\}$ give
  $\|\partial_jf_N\|_2\ge2\pi N\|f_N\|_2$, excluding any bounded $L^2$ extension. precheck
  PASS after adopting the canonical stratification.
- `rem-fefferman-ball-multiplier-obstruction` (remark, B, `proved_here:false`,
  `verification.precheck:n/a`, external dependency): ball indicator is an $L^2$ multiplier of
  norm one by the exact multiplier lemma, and is **recorded** to be an $L^p$ multiplier only
  at $p=2$ for $n\ge2$ (Fefferman Theorem 1, printed p. 330; Williams Remark 3.12, printed
  p. 12, re-read first-hand from the fetched PDF, sha256_16 `05c37240004db213`). No proof
  reproduced; no $L^p$ claim used elsewhere.

### Checkpoint 3 — level 3 jump remark, authored

- `rem-jump-multipliers-can-be-bounded-outside-mihlin` (remark, B, `proved_here:false`,
  `verification.precheck:n/a`, external dependency): punctured-domain Mihlin convention has
  $q=1$ in one dimension; unshifted $\operatorname{sgn}$ is locally constant on
  $\mathbb R\setminus\{0\}$ and satisfies the condition (correcting the stale FR-6 design
  claim), while $\operatorname{sgn}(\xi-1)$ is discontinuous at the nonzero frequency $1$
  and fails it; the $L^p(\mathbb R)$ bound for $1<p<\infty$ is recorded as the
  Hilbert-transform $L^p$ theorem conjugated by frequency translation (Grafakos Proposition
  2.5.14, printed pp. 156-157, re-read first-hand from the fetched PDF) and is not proved or
  used here; no wikilink is made to the unbuilt later page.

### Checkpoint 4 — level 6 fractional characterisation, authored

- `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` (theorem): the statement set
  $\mathcal W_s=\{u\in\mathcal S':\langle\xi\rangle^s\mathcal Fu=u_g,\ g\in L^2\}$ is proved identical to
  batch-12's $M_s$; $E_s:H^s\to\mathcal W_s$ is a bijection, $g$ unique, and
  $\|U\|_{H^s}=\|g\|_2=\|\langle\xi\rangle^s\mathcal F(E_sU)\|_2$ (density norm); the distributional-product
  and non-function conventions are retained, with the $s=0$ instance checked. Deps extended with
  `thm-bessel-potential-completions-embed-in-tempered-distributions`,
  `lem-japanese-bracket-powers-preserve-schwartz-space`,
  `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space` (all batch-12/published in-run or
  published; recomputed level stays 6). Sources: Dyatlov §12.1.2 Def. 12.3 eqs. (12.4)-(12.5) p. 140;
  Williams §6.2 Def. 6.5 p. 25 (p=2 specialization). precheck PASS after canonical stratification
  (1.1-5.1; one prose range hand-fixed to "steps 1.1 and 2.1"). Open: none.

### Checkpoint 5 — level 7 items (duality, shift lemma, Dirac example), authored

- `cor-sobolev-duality-from-the-fourier-pairing` (corollary): $A_v(u)=\int\bar g h$ with
  $g=\langle\xi\rangle^s\mathcal F(E_su)$, $h=\langle\xi\rangle^{-s}\mathcal F(E_sv)$; shown conjugate-linear
  in $u$, complex-linear in $v$, $\|A_v\|=\|v\|_{H^{-s}}$ by Cauchy–Schwarz plus the surjective $J_s$
  attaining vector $g=h/\|h\|_2$; injective by the isometry, onto via conjugating Riesz (unique $w$,
  $v=J_{-s}^{-1}J_sw$), and the ordinary dual via $C_v=\overline{A_v(\cdot)}=(u,v)_{H^s}$ conjugate-linear.
  deps extended with `lem-complex-lp-completeness-density-and-inner-product`. precheck PASS (canonical
  layering 1.1, 1.2, 2.1, 3.1, 4.1, 4.2, 5.1, 6.1 as written).
- `lem-bessel-potentials-shift-sobolev-order-isometrically` (lemma): $\Phi_t=E_{s-t}^{-1}\langle D\rangle^tE_s$
  surjective isometry with class $g$ and inverse $\Phi_{-t}$; $\Psi_t$ (Laplacian symbol) bounded bijection
  with class $r_tg$ and constants $c_t=\min(1,(2\pi)^t)$, $C_t=\max(1,(2\pi)^t)$; explicit
  frequency-localized Schwartz witness ($\chi=1-$bump on $B(R)$, $\varphi=\mathcal F^{-1}\chi$) with
  $r_t^2>1$ resp. $<1$ on the support shows non-isometry for every $t\ne0$; contractive inclusion for
  $s\ge r$; $\|\partial_jU\|_{H^s}\le2\pi\|U\|_{H^{s+1}}$ with class $2\pi i\xi_j\langle\xi\rangle^{-1}g$.
  deps extended with the smooth-multiplier lemma, L²-local-integrability pair, bump/inclusion/automorphism
  trio and real-power monotonicity pair. precheck PASS after canonical stratification (1.1-1.4, 2.1-2.2,
  3.1, 4.1); prose references re-read after renumbering.
- `ex-negative-sobolev-order-containing-a-dirac-mass` (example): $\mathcal F\delta_0=u_1$, so
  $\delta_0\in H^s$ iff $\langle\xi\rangle^s\in L^2$ iff $\int_{\mathbb R^n}\langle\xi\rangle^{2s}<\infty$;
  polar coordinates give $\sigma(S^{n-1})\int_0^\infty\varphi$, $\varphi(r)=(1+r^2)^sr^{n-1}=r^q(1+r^{-2})^s$,
  $q=2s+n-1$; block bounds $c_3k^q\le\varphi\le c_4k^q$ on $[k,k+1]$ bracket the tail against
  $\sum k^q$, which converges iff $q<-1$ iff $s<-n/2$; at $s=-n/2$ the bound $\varphi\ge c_1/r$ and
  $\int_1^Rdr/r=\log R$ give the logarithmic divergence. deps extended with the L¹_loc injectivity,
  polar/series/p-series, integral additivity/monotonicity, endpoint log and real-power items. precheck
  PASS after canonical stratification (1.1-1.3, 2.1-2.2, 3.1-3.2, 4.1).
- Whole-pair precheck: 17/17 item files present; the 11 proof-bearing items PASS, the 6 definitions/remarks
  are skipped by the checker as pure-definition bodies (the two `proved_here:false` remarks carry
  `verification: precheck: n/a`). Open: manifest dependency sync, page files, contracts, decisions, batch gates.

### Checkpoint 6 — contracts, gates, decisions (final)

- **Proof contract** `research/frontier-36-complete-batch-13.proof-contracts.json`: 17 scoped items, 149
  citations over 11 proof-bearing items, 89 numbered steps, 136 boundary rows (8 standard cases per item,
  including the six definition/remark worksheets). Built from the item files at their final revision; every
  citation carries the exact whitespace-normalised source excerpt verified against the named section of the
  cited item.
- **Repairs made this checkpoint** (all item files re-checked after the edit):
  1. `lem-weak-derivatives-are-polynomial-fourier-multipliers` F7 (Plancherel) was linked but uncited; it is
     now used at step 3.1 to place $\mathcal F_2f$ in $L^2$.
  2. `ex-heat-and-poisson-semigroups` F1 (Schwartz multiplier domain) was linked but uncited; it is now used
     at step 2.1. Its F9 duplicate `def-real-exponential-function-and-e` link was removed.
  3. Six items attributed $a\,u_h=u_{ah}$ to the multiplier lemma alone although that lemma states only the
     transposed product rule. The fact lines now derive the instance from the transposed product rule plus the
     regular-distribution definition, and `def-regular-distribution-from-a-locally-integrable-function` was
     added to the deps of integer, fractional, shift, Dirac, translation and heat items.
  4. `thm-hausdorff-young-for-periodic-fourier-coefficients` F2 claimed a "linear bijection onto $\ell^2$"
     absent from `thm-parseval-identity-for-fourier-series`, and F8 claimed the counting-measure $\ell^q$
     identification absent from `def-complex-lp-...`; both facts were rewritten to what the sources state,
     with the counting-measure notation recorded as a local naming convention.
  5. Shift F8 and Dirac F11 now cite `thm-logarithm-derivative-and-integral` for the strict monotonicity of
     $\log$ used to deduce monotonicity of $b\mapsto b^u$ (previously attributed to $\exp$ alone).
  6. `lem-bessel-potentials-shift-sobolev-order-isometrically`: `content-policy` rejected the applied
     `\iota` notation for the inclusion map; renamed to `\kappa` (statement and step 1.3), re-rendered.
  7. Four identical `iff-reverse` "No converse is asserted." boundary reasons were made item-specific after
     `boundary-audit` reported a template cluster; no cluster remains at threshold 3.
  8. The externally audited revision of `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`
     (F11/F12 and dep `thm-exponential-beats-every-polynomial`) is reflected in the contract; the missing
     frontmatter delimiter repair is recorded below.
- **Cross-batch input** `research/frontier-36-complete-batch-13.cross-batch-dependencies.json`: 18 rows, all
  now `verified` — the 13 original rows plus the 5 declared consumer edges (fractional→
  `lem-japanese-bracket-powers-preserve-schwartz-space`, fractional→
  `thm-bessel-potential-completions-embed-in-tempered-distributions`, integer→
  `def-real-order-bessel-potential-sobolev-space`, integer→`def-weak-derivative-of-a-locally-integrable-function`,
  integer→`thm-bessel-potential-completions-embed-in-tempered-distributions`) that had no review row. Each
  evidence string names the quoted supplier sentence and records that the supplier is authored on disk but
  still a draft (its Step-5 certification is not claimed here). `frontier-dependency-ledger.mjs refresh
  --run frontier-36-complete` run; the derived ledger shows 18 batch-13 consumer edges, 0 without reviews.
- **Step-3 item decisions** recorded for all 17 items (`research/frontier-36-complete-step3b-review-<id>.json`):
  **6 `accept`** — `def-translation-invariant-fourier-multiplier-on-schwartz-space`,
  `thm-hausdorff-young-for-the-euclidean-fourier-transform`,
  `def-japanese-bracket-bessel-potential-operator`, `def-lp-fourier-multiplier-and-multiplier-norm`,
  `lem-ltwo-fourier-multiplier-bound`, `rem-fefferman-ball-multiplier-obstruction` — and **11 `repaired`** —
  `lem-weak-derivatives-are-polynomial-fourier-multipliers`,
  `thm-hausdorff-young-for-periodic-fourier-coefficients`,
  `def-mihlin-symbol-with-more-than-half-dimension-derivatives`,
  `ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
  `ex-translation-and-differentiation-multiplier-symbols`,
  `rem-jump-multipliers-can-be-bounded-outside-mihlin`,
  `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`,
  `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`,
  `cor-sobolev-duality-from-the-fourier-pairing`,
  `lem-bessel-potentials-shift-sobolev-order-isometrically`,
  `ex-negative-sobolev-order-containing-a-dirac-mass`. Every decision carries confidence 1, the item's
  examined dependency list, and an item-specific evidence reason. `step3-decisions check --phase final`
  reports no work row for any of the 17 items or for the pair's pages.
- **Checks actually run** (all on the final files):
  - explicit-path `precheck`: 11/11 proof-bearing items PASS, 0 failing (definitions/remarks skipped).
  - `rendercheck`: OK over 22 666 files (no wiki-link inside math, no unbalanced/multiline display blocks,
    all math spans parse under KaTeX, all frontmatter parses); run after the last item edit.
  - `content-policy` on `research/frontier-36-complete-batch-13.pages.json`: 17 scoped items, 0 errors,
    0 warnings (after the `\iota` fix).
  - `proof-contract --strict`: 0 errors, 0 warnings, 17/17 checked.
  - `citation-fidelity --fail-on-missing-quote`: 149 citations over 17 authored items, no missing quote, no
    widening candidate.
  - `finite-smoke`: 0 errors (0/17 items carry finite-smoke obligations).
  - `boundary-audit --min-cluster 3 --fail-on-contradicted`: no contradicted disposition, no template
    cluster at threshold 3.
  - `item-dependency-levels check --run frontier-36-complete`: 935 items over 60 pages consistent; maximum
    level 18; manifest `deps` re-synced for the five items whose dependency lists changed.
  - `coverage-checklist` on the batch-13 coverage file: 1 page, 33 harvested results, 0 errors, 0 warnings.
  - `validate-plan research/plan-spec.json --repo .`: acyclic and consistent, no item-level cycles,
    forward references, B-page dependencies or unresolved ids among pages with item lists (the reported
    `redundant-prereq` notes concern other pages).
  - `frontier-dependency-ledger.mjs refresh --run frontier-36-complete`: refreshed; batch-13 reviews
    complete.

## Handoff

**Completed IDs (17/17):** `def-translation-invariant-fourier-multiplier-on-schwartz-space`,
`lem-weak-derivatives-are-polynomial-fourier-multipliers`,
`thm-hausdorff-young-for-periodic-fourier-coefficients`,
`thm-hausdorff-young-for-the-euclidean-fourier-transform`,
`def-japanese-bracket-bessel-potential-operator`, `def-lp-fourier-multiplier-and-multiplier-norm`,
`lem-ltwo-fourier-multiplier-bound`, `def-mihlin-symbol-with-more-than-half-dimension-derivatives`,
`ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
`ex-translation-and-differentiation-multiplier-symbols`, `rem-fefferman-ball-multiplier-obstruction`,
`rem-jump-multipliers-can-be-bounded-outside-mihlin`,
`thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`,
`thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`,
`cor-sobolev-duality-from-the-fourier-pairing`,
`lem-bessel-potentials-shift-sobolev-order-isometrically`,
`ex-negative-sobolev-order-containing-a-dirac-mass`.

**Local suppliers added:** none (no new items, definitions or lemmas were added by this dispatch; only
dependency declarations and fact-level attribution repairs inside the 17 owned items).

**Published concerns:** none confirmed. Two draft-side over-attributions were found and repaired (HY-periodic
F2/F8; the $a\,u_h=u_{ah}$ family in six items). The published items cited by this pair were re-read and no
defective published item was identified; `lem-weak-derivatives-are-polynomial-fourier-multipliers` (draft) was
repaired within the batch rather than reported outward.

**Open obligations handed to Step 4:**
1. Plan-prose vs `research/plan-spec.json` mismatch (Step 3a Observation 4): the plan table row lists more
   `requires` edges than the manifest's four; the dropped pages are published and MT-17 is unused. Needs
   serial reconciliation, not a local edit.
2. Supplier drafts: all five PDE-14F/PDE-11 suppliers consumed at levels 6–7 are authored on disk but still
   `status: draft`; their Step-5 review remains a dependency of this pair's certification, and any later edit
   to them invalidates the recorded item decisions (which hash the dependency closure).
3. The recorded Fefferman and jump leaves are `proved_here:false` remarks with external dependencies; if the
   serial reconciler renames or republishes the Fefferman/Hilbert-transform sources, the `external_dependency`
   URLs must be re-checked.

### Final verification re-run (at handoff, 2026-09-28 22:07–22:09)

Re-ran the batch-13 gates on the frozen files (no batch-13 item or manifest edit after the recorded decisions
at 22:03:43–22:03:55; last batch-13 item edit 22:01:46):

- `precheck` (explicit 17 paths): 11 checked, 0 failing (6 definitions/remarks skipped).
- `proof-contract --strict`: 0 errors, 0 warnings, 17/17.
- `content-policy` on the batch-13 manifest: 17 scoped items, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: no missing quote, no widening candidate.
- `boundary-audit --min-cluster 3 --fail-on-contradicted`: no contradicted disposition, no cluster ≥3.
- `item-dependency-levels check --run frontier-36-complete`: 935 items over 60 pages, maximum level 18.
- `coverage-checklist` on `research/frontier-36-complete-batch-13.coverage.json`: 1 page, 33 harvested
  results, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: acyclic and consistent (only unrelated `redundant-prereq` notes).
- `step3-decisions check --run frontier-36-complete --phase final`: no work row for any of the 17 items or
  either page of this pair.
- `rendercheck` full run: 4 `multiline-display` errors across 22 668 files, **all four in one sibling draft
  file** `items/def-h-one-riemannian-curves-and-half-energy.md` (`status: draft`, modified 22:07:25 by a
  concurrent writer; in no current-frontier batch manifest). Zero rendercheck errors in any batch-13 item or
  page file. This is a sibling observation, not a batch-13 defect, and no batch-13 file was edited for it.
