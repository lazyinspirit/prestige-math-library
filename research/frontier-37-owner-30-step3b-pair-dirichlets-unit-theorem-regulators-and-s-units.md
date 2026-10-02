# Step 3b authoring — Dirichlet's unit theorem, regulators and S-units

- Run: `frontier-37-owner-30` (role: alpha-high, batch 3)
- A page: `dirichlets-unit-theorem-regulators-and-s-units` (18 items)
- B page: `dirichlets-unit-theorem-regulators-and-s-units-examples` (7 items)
- Dispatch task: `research/frontier-37-owner-30-step3b-pair-dirichlets-unit-theorem-regulators-and-s-units-c9878a4f2a5665fc.task.md`
- Scope review: `research/frontier-37-owner-30-step3a-pair-dirichlets-unit-theorem-regulators-and-s-units.md`
  (decision `sufficient`, receipt `...-step3a-review-dirichlets-unit-theorem-regulators-and-s-units.json`).
  `research/frontier-37-owner-30-pre-splice-plan-findings.json` has no finding for this pair;
  `research/frontier-37-owner-30-owner-authoring-direction.md` does not exist.

This file is the dispatch report and the running checkpoint. Item states are
updated after each authored item; the final sections are refreshed at handoff.

## Checkpoint — authored items

All items carry `status: draft`, `origin: pipeline`, `pipeline_run: frontier-37-owner-30`,
`verification.precheck: pass`, and the manifest statement verbatim. Items 1–6 were
written by the previous authoring pass of this dispatch; this pass restored four
`[[...]]` links that a mechanical sweep had degraded to `([])` in
`def-logarithmic-unit-embedding`, `def-s-integers-and-s-units-of-a-number-field`,
`lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`,
`lem-deleted-row-minors-of-a-matrix-with-zero-column-sums`,
`lem-discrete-subgroups-of-real-vector-spaces-are-lattices` and
`thm-product-formula-for-number-fields`, and adopted the checker's canonical
phase numbering of `lem-discrete-subgroups-of-real-vector-spaces-are-lattices`.
Two dependency repairs were made: `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums`
now depends on the published `def-row-space-column-space-nullspace-and-matrix-ranks`
(linked in its Statement; added in the item file and in the batch manifest), and the
lattice lemma already carried its metric-topology dependencies.

| # | level | item | state |
|---|---|---|---|
| 1 | 0 | `def-logarithmic-unit-embedding` | authored, precheck pass |
| 2 | 0 | `def-s-integers-and-s-units-of-a-number-field` | authored, precheck pass |
| 3 | 0 | `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` | authored, precheck pass |
| 4 | 0 | `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` | authored, precheck pass (dep repair) |
| 5 | 0 | `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` | authored, canonical numbering adopted, precheck pass |
| 6 | 0 | `thm-product-formula-for-number-fields` | authored, precheck pass (AC stated) |
| 7 | 1 | `lem-roots-of-unity-in-a-number-field-are-finite` | authored, precheck pass |
| 8 | 1 | `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | authored, canonical numbering adopted, precheck pass |
| 9 | 1 | `thm-kronecker-root-of-unity-criterion` | authored, precheck pass |
| 10 | 2 | `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` | authored, precheck pass |
| 11 | 3 | `lem-logarithmic-unit-image-is-discrete` | authored, precheck pass |
| 12 | 5 | `thm-logarithmic-unit-image-is-a-full-lattice` | authored, canonical numbering adopted, precheck pass |
| 13 | 6 | `thm-dirichlet-unit-theorem` | authored, canonical numbering adopted, precheck pass |
| 14 | 7 | `cor-unit-ranks-by-number-field-signature` | authored, canonical numbering adopted, precheck pass |
| 15 | 7 | `def-fundamental-units` | authored, definition, precheck n/a (definitions skipped) |
| 16 | 8 | `def-number-field-regulator` | authored, definition, precheck n/a (definitions skipped) |
| 17 | 8 | `thm-s-unit-theorem` | authored, canonical numbering adopted, precheck pass |
| 18 | 8 | `ex-real-quadratic-units-and-pell` | authored, precheck pass |
| 19 | 8 | `ex-units-of-q-and-imaginary-quadratic-fields` | authored, precheck pass (deps extended: ex-ring-of-integers-of-q, ex-norm-and-trace-in-a-quadratic-extension, def-roots-of-unity-in-a-field, def-integral-element-and-algebraic-integer, def-ring-of-integers-of-a-number-field, def-number-field) |
| 20 | 8 | `ex-units-in-a-real-cubic-field` | authored, precheck pass (deps extended: trigonometric identification of 2cos(2pi/9) and the finite-index argument; in-run additions thm-dirichlet-unit-theorem, def-fundamental-units, lem-unit-logarithms-lie-in-the-product-formula-hyperplane keep level 8) |
| 21 | 9 | `thm-number-field-regulator-is-well-defined` | authored, precheck pass (13 deps; manifest synced) |
| 22 | 9 | `cex-z-sqrt-d-units-need-not-equal-ok-units` | authored, canonical numbering adopted, precheck pass |
| 23 | 9 | `ex-s-units-of-q` | authored, canonical numbering adopted, precheck pass (deps extended from 7 to 15: localisation-to-Q embedding and exponent dictionary via `lem-int-cancellation`, `ex-spectrum-integers-generic-and-closed-points`, `ex-fractional-ideal-in-the-integers`, `def-number-field`, `def-roots-of-unity-in-a-field`, `def-archimedean-embeddings-and-number-field-signature`) |
| 24 | 10 | `ex-change-of-fundamental-units-preserves-regulator` | authored, canonical numbering adopted, precheck pass (deps extended from 7 to 12: `thm-natural-logarithm-laws`, `lem-unit-logarithms-lie-in-the-product-formula-hyperplane`, `thm-determinant-multiplicative`, `def-determinant-of-a-square-matrix`, `lem-units-of-z`) |
| 25 | 10 | `ex-regulator-of-a-real-quadratic-field` | authored, canonical numbering adopted, precheck pass (deps extended from 7 to 9: `cor-unit-ranks-by-number-field-signature`, `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`) |

### Open obligations carried forward

1. **Batch-2 suppliers are now authored and reconciled (supersedes the earlier
   checkpoint).** All six suppliers
   (`lem-bounded-conjugates-give-finitely-many-integral-polynomials`,
   `lem-finitely-many-number-field-ideals-of-bounded-norm`,
   `thm-ring-of-integers-and-ideals-are-full-lattices`,
   `thm-covolume-of-an-ideal-lattice`,
   `cor-minkowski-convex-body-theorem-at-equality`,
   `thm-finiteness-of-the-number-field-class-group`) exist in `items/` with
   complete statements and proofs. Each consumer use was re-read against the
   authored text at Step 3b; the exact supplier → consumer → step ledger is in the
   final report section, and the batch dependency input now records all nine edges
   as `verified`. The suppliers are still sibling drafts (`status: draft`), so the
   Step-5 audit and the Step-8 serial reconciliation should re-confirm them if
   their content changes; no consumer decision rests on an unauthored claim.
2. The 3a review notes on the Milne p.94 index-ratio coverage row and the
   Conrad–Landesman Example 29.2 wording are bookkeeping observations; the authored
   items keep the promised claims (fundamental-system invariance for the regulator,
   and the cubic instance for the change-of-fundamental-units example).
3. Published defects to report to the owner (not edited here):
   `cor-ring-of-integers-is-a-dedekind-domain` Proof 1.1 citation gap;
   `thm-number-field-integral-ideal-factorisation-in-zf` DC/AC chain in a ZF-labelled item;
   `thm-ramified-primes-and-the-number-field-discriminant` compressed Proof 1.1.
   Detailed evidence in the final section.

## Item notes

### `lem-roots-of-unity-in-a-number-field-are-finite` (level 1)

- Claim: for a number field $K$, the group $\mu(K)$ of roots of unity in $K$ is finite.
- Route: every root of unity is an algebraic integer whose minimal polynomial has
  degree dividing $n=[K:\mathbb Q]$ and all of whose complex roots are roots of
  $X^N-1$, hence of modulus $1$; the batch-2 bounded-conjugates supplier leaves
  finitely many candidate polynomials, each with at most $n$ roots.
- Dependencies added in the item file (all published): `def-number-field`,
  `def-ring-of-integers-of-a-number-field`, `thm-evaluation-kernel-and-minimal-polynomial`,
  `cor-element-algebraic-iff-simple-extension-finite`, `cor-intermediate-field-degrees-divide`.
- Supplier use: `lem-bounded-conjugates-give-finitely-many-integral-polynomials` in step 3.1
  (fact [F8]); supplier now authored and rechecked at Step 3b — decision
  `accept`.

### `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` (level 1)

- Claim (AC): $\lambda(\mathcal O_K^\times)\subseteq H$, the coordinate sum being
  $\log|N_{K/\mathbb Q}(u)|=0$ for units.
- Route: a unit has valuation $0$ at every finite prime, so the AC-qualified product
  formula collapses to the archimedean product; taking logarithms gives the coordinate sum.
- Dependencies added in the item file (all published): `def-fractional-ideal`,
  `def-prime-ideal-valuations-on-fractional-ideals`, `def-natural-logarithm`,
  `thm-field-norm-and-trace-by-embeddings`, `lem-complex-conjugation-and-modulus-laws`.
- AC use: inherited from `thm-product-formula-for-number-fields` only.

### `thm-kronecker-root-of-unity-criterion` (level 1)

- Claim: a nonzero algebraic integer in $K$ all of whose conjugates have modulus
  at most $1$ is a root of unity.
- Route: $1\le|N_{K/\mathbb Q}(\alpha)|\le1$ forces every conjugate to have modulus
  exactly $1$; for each $m$, $m_{\alpha^m}\mid m_\alpha(X^m)$ has degree dividing
  $n$ and all roots of modulus $1$; the bounded-conjugates supplier then makes
  $\{\alpha^m\}$ finite, and two equal powers give $\alpha^{N}=1$.
- Dependencies added in the item file (all published):
  `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots`,
  `lem-restriction-fibres-for-embeddings-in-a-finite-tower`,
  `def-conjugate-elements-over-a-field`, `cor-integral-elements-form-a-subring`,
  `thm-evaluation-kernel-and-minimal-polynomial`,
  `cor-element-algebraic-iff-simple-extension-finite`,
  `cor-intermediate-field-degrees-divide`, `lem-complex-conjugation-and-modulus-laws`,
  `def-field-norm-and-trace`,
  `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
  `cor-algebraic-extensions-of-perfect-fields-are-separable`, `def-number-field`,
  `def-ring-of-integers-of-a-number-field`.
- Supplier use: `lem-bounded-conjugates-give-finitely-many-integral-polynomials` in step 5.1
  (fact [F8]); supplier now authored and rechecked at Step 3b — decision
  `accept`.

### `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` (level 2)

- Claim: $\ker(\lambda|_{\mathcal O_K^\times})=\mu(K)$, the kernel is finite, and it
  is the torsion subgroup of $\mathcal O_K^\times$.
- Route: roots of unity have all conjugates of modulus $1$, so lie in the kernel;
  conversely $\lambda(u)=0$ makes all conjugates of the unit $u$ have modulus $1$,
  and Kronecker's criterion makes $u$ a root of unity; finiteness and torsion are
  then read off from the target items.
- All dependencies published; precheck pass. No unfinished supplier.

### `lem-logarithmic-unit-image-is-discrete` (level 3)

- Claim (AC): the subgroup $\lambda(\mathcal O_K^\times)\subset H$ is discrete,
  equivalently every bounded subset of $H$ meets it in finitely many points.
- Route: a bounded log image bounds $|\sigma_i u|\le e^M$ and
  $|\tau_j u|\le e^{M/2}$ for all conjugates; each unit then is a root of a monic
  integer polynomial of degree $\le n$ with all roots of modulus at most $e^M$, of
  which there are finitely many; the root bound gives finitely many units.
- Supplier use: `lem-bounded-conjugates-give-finitely-many-integral-polynomials` in
  step 4.1 (fact [F5]); that supplier is now **authored** in `items/`, so the use
  needs a reconciliation check at handoff but the item is not blocked; the
  reconciliation was performed in the final section (all six uses verified).

### `thm-logarithmic-unit-image-is-a-full-lattice` (level 5)

- Claim (AC): $\lambda(\mathcal O_K^\times)\subset H$ is discrete and spans $H$;
  hence it is a full lattice in $H$ of rank $r_1+r_2-1$.
- Route: Stein's proof of Theorem 8.1.2. If $r_1+r_2=1$ then $H=\{0\}$. Otherwise,
  for arbitrary $z\notin H^\perp$ (so the coordinates of $z$ are not all equal) put
  $f(x)=\langle z,\lambda(x)\rangle$ and $A=\sqrt{|d_K|}(2/\pi)^{r_2}$; for a tuple
  $c$ with $\prod_{\text{real}}c_i\prod_{\text{complex}}c_j^2=A$, the product
  $S_c$ of intervals $|x_i|\le c_i$ and discs $u^2+v^2\le c_j^2$ has volume
  $2^n\operatorname{covol}(\sigma(\mathcal O_K))$; the equality case of the lattice
  point principle gives $0\ne a\in\mathcal O_K$ with $\sigma(a)\in S_c$, so
  $|N(a)|\le A$, $|\sigma_i(a)|\ge c_i/A$ and $|\tau_j(a)|^2\ge c_j^2/A$. The
  finite list $(b_1),\dots,(b_m)$ of principal ideals of norm at most $A$ gives
  $(a)=(b_j)$, $a=ub_j$ with $u\in\mathcal O_K^\times$, and the expansion of
  $f(u)-t_c$ bounds $|f(u)-t_c|\le B$ with $B$ independent of $c$; since the
  weights $z_i$ are not all equal, the elementary rescaling lemma
  (two unequal coordinates, $d_1d_2=A$) chooses $c$ with $|t_c|>B$, whence
  $|f(u)|>0$, $z\notin W^\perp$, $W^\perp\subseteq H^\perp$, $H\subseteq W$, so
  $W=H$. The lattice criterion lemma then gives the full lattice of rank
  $\dim H=r_1+r_2-1$. Canonical phase numbering adopted (21 steps); precheck pass.
- Supplier uses (all batch-2; **all six rechecked as authored and complete at
  Step 3b**):
  `thm-ring-of-integers-and-ideals-are-full-lattices` clause 1 and
  `thm-covolume-of-an-ideal-lattice` (instantiated at the unit ideal) in step 2.2;
  `cor-minkowski-convex-body-theorem-at-equality` (AC-qualified) in step 2.2;
  `lem-finitely-many-number-field-ideals-of-bounded-norm` in step 5.2.
- AC use: only through the equality-case lattice point principle and the
  discreteness input; all selections in the proof are from finite sets (stated in
  step 14.1).

## Final state of the pair (handoff)

All 25 assigned items are authored in full, in dependency-level order, and carry
`status: draft`, `origin: pipeline`, `pipeline_run: frontier-37-owner-30` and the
manifest statement verbatim. The A page carries 18 items and the B page 7, both
with page prose, in the manifest order; both page files and the shared batch
manifest `research/frontier-37-owner-30-batch-3.pages.json` are in sync.

**Completed item IDs.** A page: `def-logarithmic-unit-embedding`,
`def-s-integers-and-s-units-of-a-number-field`,
`lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`,
`lem-deleted-row-minors-of-a-matrix-with-zero-column-sums`,
`lem-discrete-subgroups-of-real-vector-spaces-are-lattices`,
`thm-product-formula-for-number-fields`,
`lem-roots-of-unity-in-a-number-field-are-finite`,
`lem-unit-logarithms-lie-in-the-product-formula-hyperplane`,
`thm-kronecker-root-of-unity-criterion`,
`lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity`,
`lem-logarithmic-unit-image-is-discrete`,
`thm-logarithmic-unit-image-is-a-full-lattice`, `thm-dirichlet-unit-theorem`,
`cor-unit-ranks-by-number-field-signature`, `def-fundamental-units`,
`def-number-field-regulator`, `thm-number-field-regulator-is-well-defined`,
`thm-s-unit-theorem`. B page:
`ex-units-of-q-and-imaginary-quadratic-fields`, `ex-real-quadratic-units-and-pell`,
`ex-units-in-a-real-cubic-field`, `ex-regulator-of-a-real-quadratic-field`,
`ex-change-of-fundamental-units-preserves-regulator`, `ex-s-units-of-q`,
`cex-z-sqrt-d-units-need-not-equal-ok-units`.

**Local suppliers added in this dispatch** (both fully authored on the A page,
registered in the manifest, coverage and the proof contract):

- `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` (Milne Lemma 4.14 /
  Prop. 4.15, Sutherland §15.2): the discreteness ⇒ lattice criterion consumed by
  `lem-logarithmic-unit-image-is-discrete` and
  `thm-logarithmic-unit-image-is-a-full-lattice`.
- `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums`: the deleted-row sign
  and nonvanishing statement consumed by `def-number-field-regulator` and
  `thm-number-field-regulator-is-well-defined`.

**Local repairs made in this pass** (all four repaired items recorded with
decision `repaired`; the promised claims are unchanged):

- `cor-unit-ranks-by-number-field-signature`: replaced the B-page-only supplier
  `ex-ring-of-integers-of-q` by a complete local `O_Q=Z` argument in [F3].
- `ex-units-of-q-and-imaginary-quadratic-fields`: dropped
  `ex-ring-of-integers-of-q` and `ex-norm-and-trace-in-a-quadratic-extension`;
  [F1] proves `O_Q=Z` locally and [F4] derives the norm formula from published
  items.
- `ex-real-quadratic-units-and-pell`: dropped
  `ex-negative-pell-equation-for-five`; [F7] now computes
  `sqrt5=[2;overline4]`, period 1 and `p0/q0=2/1`, `p1/q1=9/4` locally, and
  step 7.2 uses the published negative-Pell parity criterion.
- `ex-s-units-of-q`: dropped `ex-fractional-ideal-in-the-integers`,
  `ex-ring-of-integers-of-q` and `ex-spectrum-integers-generic-and-closed-points`;
  [F5] was rebuilt from the published prime-ideal / localisation-DVR interface,
  steps 1.3–1.4 and 2.3 were added, and [A1] extended over
  `cor-ring-of-integers-is-a-dedekind-domain`.
- `thm-kronecker-root-of-unity-criterion`: removed a stale sentence that
  described the now-authored bounded-conjugate supplier as not yet authored.
- `ex-change-of-fundamental-units-preserves-regulator`: step 6.2 rewritten so the
  numerical approximations are magnitudes attached to symbols
  (`|z|≈1.879…`, `|b|≈1.058…`, and the displayed `Q≈0.849…`), eliminating bare
  decimal tokens that the proof-contract tokenizer reads as step references; the
  mathematics and values are unchanged.

## Supplier → consumer → consuming step ledger (all `verified`)

| Supplier (batch 2, sibling) | Consumer | Consuming step / fact | Exact obligation rechecked |
| --- | --- | --- | --- |
| `lem-bounded-conjugates-give-finitely-many-integral-polynomials` | `lem-roots-of-unity-in-a-number-field-are-finite` | step 3.1 [F8] | finite list of monic integer polynomials of degree ≤ n with roots of modulus ≤ 1 |
| same | `thm-kronecker-root-of-unity-criterion` | step 5.1 [F8] | same instance with R=1 and degree ≤ [K:Q] |
| same | `lem-logarithmic-unit-image-is-discrete` | step 4.1 [F5] | same with R=e^M ≥ 1 for the bounded log-image |
| `thm-ring-of-integers-and-ideals-are-full-lattices` | `thm-logarithmic-unit-image-is-a-full-lattice` | step 2.2 | clause 1: σ(O_K) is a full lattice in R^n |
| `thm-covolume-of-an-ideal-lattice` | same | step 2.2 | covol(σ(𝔞))=2^{−r₂}√|d_K| N𝔞 at 𝔞=O_K, N=1 |
| `cor-minkowski-convex-body-theorem-at-equality` (AC) | same | step 2.2 | λ_n(C)≥2^n covol(Λ) with C compact convex centrally symmetric ⇒ nonzero lattice point |
| `lem-finitely-many-number-field-ideals-of-bounded-norm` | same | step 5.2 | finitely many nonzero integral ideals with N ≤ B₀=max{1,A} |
| `thm-finiteness-of-the-number-field-class-group` (AC) | `thm-s-unit-theorem` | steps 1.3, 2.1/3.1 [F3] | h=|Cl(O_K)| finite, [𝔭]^h=1, hZ^S contained in the valuation image |

The four consumers state the exact hypothesis they use (each fact names the
obligation), the supplier statements and proofs cited above were read in full at
Step 3b, and the batch input
`research/frontier-37-owner-30-batch-3.cross-batch-dependencies.json` records all
nine edges (page + eight item edges) as `verified` with these locators. The
suppliers are sibling drafts; if their content changes, Step 8's serial lead
should re-open the affected rows.

## Checks actually run (exact results, this pass)

| Check | Result |
| --- | --- |
| `precheck.mts` on the 25 explicit item paths | 21 checked, 0 failing (4 definitions skipped by design) |
| `rendercheck.mjs` on the 25 items and on both page files | OK — no wikilink in math, balanced delimiters, KaTeX/YAML parse |
| `content-policy.mjs research/frontier-37-owner-30-batch-3.pages.json` | 25 scoped items, 0 errors, 0 warnings |
| `proof-contract.mjs research/frontier-37-owner-30-batch-3.proof-contracts.json --strict` | 0 errors, 0 warnings, 25/25 items checked |
| `coverage-checklist.mjs …batch-3.coverage.json` (also `--require-destination`) | 2 pages, 98 harvested results (97 source rows + the canonical deleted-row lemma row), 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage …batch-3.coverage.json` | 10/10 fetch-verified, 10/10 resolved, 0 drops |
| `validate-plan.mjs research/plan-spec.json` | OK — acyclic order, no item cycles/forward refs/B-page deps among the 1300 pages with item lists |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0 — 812 items / 60 pages, maximum level 29, 0 label errors |
| `depcheck.mjs --json` | repo-wide 191 errors from other unfinished batches; 0 errors, 0 warnings for any of the 25 item ids or the two page ids |
| `manifest-deps.mjs` on the batch-3 manifest | 25 items, 0 normalized, 0 errors |
| cross-page closure scan (page prerequisites, quote-stripped) | both pages: no missing page prerequisite |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | none of the 25 items remains in the work list |
| `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | **blocked** by a sibling pair's malformed YAML (see open obligations) |

## Item decisions recorded

All 25 items were recorded with `tools/step3-decisions.mjs record-item`,
`confidence: 1`, the item's exact examined dependency list, and an evidence
reason: **6 `repaired`** (`cor-unit-ranks-by-number-field-signature`,
`ex-units-of-q-and-imaginary-quadratic-fields`,
`ex-real-quadratic-units-and-pell`, `ex-s-units-of-q`,
`thm-kronecker-root-of-unity-criterion`,
`ex-change-of-fundamental-units-preserves-regulator`) and **19 `accept`**. No item
is escalated: every supplier is authored and its use was rechecked. Receipts are
`research/frontier-37-owner-30-step3b-review-<id>.json`.

## Published concerns reported to the owner (not edited here)

1. `cor-ring-of-integers-is-a-dedekind-domain` — **published**; Proof 1.1 applies
   `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` to
   `Z ⊂ K` without citing that `Z` is Dedekind and `K/Q` finite separable (both
   true and published). Direct prerequisite of
   `thm-product-formula-for-number-fields`. Repair: add the two suppliers and
   spell out the instantiation. Confidence: high (suspected omission, no false
   claim).
2. `thm-number-field-integral-ideal-factorisation-in-zf` — **published**;
   DC/AC-dependent chain inside a ZF-labelled item (via
   `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`). Transitive
   in this batch's closure through `thm-ideal-norm-is-multiplicative`, but the
   batch consumes only the proved CA-9 route and makes no ZF claim. Repair: audit
   the choice-free DVR clauses or restate as DC/AC-qualified.
3. `thm-ramified-primes-and-the-number-field-discriminant` — **published**, not a
   batch-3 prerequisite; Proof 1.1 compresses the trace-pairing equivalence.
   Repair: expand it or add the proposed local supplier. Retained for ledger
   continuity with batch 2.
4. Bookkeeping (Step-3a notes, not defects): the Milne p.94 index-ratio coverage
   row and the Conrad–Landesman Example 29.2 wording. The authored items keep the
   promised claims; no scope change is requested.

## Open obligations at handoff

1. **Cross-group blocker.** `frontier-dependency-ledger.mjs refresh --run
   frontier-37-owner-30` fails while parsing the frontmatter of
   `items/def-modular-specht-form-and-radical-quotient.md` (a sibling pair's
   item): `sources.references[1].title` on line 26 contains the unescaped LaTeX
   `S^\lambda/(S^\lambda\cap(S^\lambda)^\perp)` and the YAML parser raises
   `Invalid escape sequence \c`. Proposed remedy for that pair's owner: quote the
   title or escape the backslashes; then re-run the refresh. Our batch input is
   already written (9 `verified` rows) and the unified ledger should be refreshed
   once the sibling file parses.
2. **Sibling page still in flight.**
   `minkowski-theory-and-number-field-class-groups` is a draft being completed by
   its own group. The six consumed items were read as authored text and verified;
   if the sibling edits them, re-open the corresponding rows.
3. **Provisional suppliers.** The six batch-2 suppliers carry `status: draft`;
   Step 5's independent audit and Step 8's serial reconciliation should
   re-confirm them (and this report's ledger) against their final content.
4. No unresolved source, content, dependency, rendering or proof-contract gate
   remains inside this pair; the proof contract was regenerated after the final
   item edits and passes `--strict`.

## Post-author independent consumer audit (2026-09-30)

The preceding record is the historical author pass. After the six batch-2
suppliers acquired actual authored proofs, all 14 current consumer
proofs/definitions were independently re-read. The original ordinary
`confidence: 1` receipts are stale relative to that supplier-content change;
they are not treated as current mathematical acceptance. No receipt or
cross-batch ledger input was refreshed. The full evidence and exact uses are in
`research/frontier-37-owner-30-dirichlet-consumer-audit.md`.

Root authorized two proof-only repairs, both with the original Statements
preserved. In `thm-number-field-regulator-is-well-defined`, the change of basis
is now stated in column coordinates: `B` has the coordinates of each new
logarithm as a column, `A'=AB`, and the reverse integral basis change proves
`B∈GL_r(Z)`. In `ex-real-quadratic-units-and-pell`, step 4.1 now constructs
`w=u_d ε_d^{-m}` as a unit of the Pell order itself and derives `N_d(w)=-1`
from multiplicativity; its positive coordinates give a smaller positive
negative-Pell solution. The two item texts, batch-3 manifest strategies and
matching proof-contract derivations/citations were synchronized. No fresh
ordinary receipts were issued.

Supplier limitations remain open. The initial audit of the authored batch-2
`thm-ring-of-integers-and-ideals-are-full-lattices`, step 1.2 writes
`a/b=Σ(m_i/b)α_i` and calls it a Q-span although `m_i/b∈K`; the step establishes
only a K-span. The later Q-independence and cardinality can finish the intended
basis claim, but do not make that written equality a Q-span proof. The active
batch-2 helper has replaced this step in the live draft with a `Z`-basis of
`O_K`, denominator clearing, and the cardinality argument; the batch-2
derivation contract reflects that fix. Treat it as in flight until the helper
drains. The initial audit also found two genuine defects in the batch-2 **draft**
`def-minkowski-embedding-of-a-number-field`: its Definition gave the complex
block norm as `Σ_j |τ_j(x)|`, and its real-basis assertion lacked a valid
justification from injectivity and Q-basis data. The active batch-2 helper is
repairing that draft and its contract. In the current live item, the Definition
uses the correct `sqrt(Σ_j |τ_j(x)|²)` formula; the remark states that
injectivity alone is insufficient, and the determinant calculation supplies
the real-basis proof. The batch-2 quote and the corresponding batch-3 full-lattice quote still have
stale norm text. Neither supplier nor supplier contract was edited in this
pass. Root's choice-free rank-degree repair has now been integrated as a stable
published input; fresh ordinary decisions remain held until the batch-2 helper
drains and the lattice supplier content and quoted contract evidence have been
rechecked.

Audit status: the mathematical findings are from proof reading. The selected
mechanical checks were then rerun on the two repairs: `precheck.mts` reports
2 checked / 0 failing, strict selected proof-contract validation reports 0
errors / 0 warnings, and `rendercheck.mjs` passes on both files. No test suite
or decision-receipt command was run. These checks are not mathematical
acceptance. The historical whole-batch checks and decisions above remain
historical evidence only. Root
normalized `justified_by: null` to `justified_by: []` on
`lem-roots-of-unity-in-a-number-field-are-finite`; the two repaired items also
received this metadata-only normalization. It does not alter a proof or
refresh a receipt.

The initial supplier findings above refer to actual draft text reviewed at the
start of this audit. The active batch-2 helper has since repaired the
full-lattice Q-span argument, corrected the Minkowski norm in the Definition,
and clarified that determinant calculation—not injectivity alone—proves the
real-basis claim. The items remain drafts and supplier quote contracts are not
yet stable. This dated status correction preserves the original defect record;
it is not acceptance of the in-progress supplier revision.
