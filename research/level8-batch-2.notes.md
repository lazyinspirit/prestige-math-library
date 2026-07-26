# Beta-8-2 — level 8 batch 2: notes and prose-scaffold amendments

Companion to `research/level8-batch-2.pages.json` (the four page objects in
final form). Pages owned: `equivalent-forms-of-completeness` (+examples),
`series-and-nonnegative-tests` (+examples). Nothing here touches the other two
batches' pages.

## 1. Prose-scaffold amendments (apply to `research/plan-realanalysis-pages.md`)

### 1.1 RA-07 — ℝ(t) is NOT a witness for either completeness false statement

File: `research/plan-realanalysis-pages.md`, section **RA-07 Equivalent Forms
of Completeness**.

OLD text:

```
Plus: a Cauchy-complete but not
complete ordered field; an ordered field in which Q is not dense; a field ordered
in two distinct ways; a non-Archimedean ordered field.
```

NEW text:

```
Plus: a Cauchy-complete but not
complete ordered field; an ordered field in which Q is not dense; a field ordered
in two distinct ways; a non-Archimedean ordered field. WITNESS WARNING (batch-2
audit 2026-07-26): R(t) itself is NEITHER Cauchy complete NOR nested-interval
complete, in either the unrestricted or the shrinking sense — the intervals
[n, t/n] have empty intersection because no rational function has a growth
exponent strictly between 0 and 1, and the partial sums of a non-rational
Laurent series are a Cauchy sequence in R(t) with no limit there. So
cex-ordered-field-not-archimedean cannot close fs-cauchy-complete-implies-lub or
fs-nested-intervals-implies-lub; those two refutations pend the owner decision
recorded in research/level8-batch-2.notes.md §3.
```

### 1.2 RA-07 — authoring notes paragraph (append at end of the RA-07 section,
after the "Citations on this page" paragraph)

NEW text to append:

```
Authoring notes (batch-2 audit 2026-07-26): (i) def-summability-matrix must
carry the finite-row-support condition (only finitely many nonzero entries per
row) in the definition itself, since y_n = sum_k c_{n,k} x_k must be a FINITE
sum — def-series does not exist until RA-08, one page later. (ii) The Cesaro
mean is 0-indexed: sigma_n = (x_0 + ... + x_n)/(n+1) for n in N, so that sigma
is a genuine sequence on N and the Cesaro matrix c_{n,k} = 1/(n+1) for k <= n
is a genuine N-by-N summability matrix in cor-cesaro-matrix-is-regular.
(iii) The abstract ordered-field lemmas may NOT cite the R-stated items
lem-sup-epsilon, lem-sup-unique, lem-cauchy-sequence-bounded,
lem-cauchy-with-convergent-subsequence, lem-limit-preserves-order,
lem-limit-unique (rem-sequence-conventions: transfer is a statement about the
arguments, not a licence to cite); the needed facts are re-derived inline in
the ordered field F, or via the proposed lem-of-sequence-basics if approved.
(iv) In cex-stolz-cesaro-converse-fails the quotient a_k/b_k is formed for
k >= 1 only, since b_0 = 0. (v) In thm-silverman-toeplitz the necessity of the
uniform bound on row absolute sums is a gliding-hump recursion, the fiddliest
proof on the page; it is elementary but needs thm-recursion, not just limits.
```

### 1.3 RA-08 — authoring notes paragraph (append at end of the RA-08 section,
after the "Citations on this page" paragraph)

NEW text to append:

```
Authoring notes (batch-2 audit 2026-07-26): (i) thm-abel-dini starts its sums
at the first index where s_k > 0, since s_0 = 0 under def-series. (ii)
thm-p-series-rational, ex-harmonic-series-diverges and
cex-root-limit-one-decides-nothing run over k >= 1 (1/0^p is undefined); the
root and ratio tests form |a_k|^{1/k} and a_{k+1}/a_k over k >= 1 as well.
(iii) The ratio, Kummer, Raabe and Gauss tests need a_k nonzero — Kummer,
Raabe and Gauss need a_k > 0, now in their titles; the divergence half of
Kummer is FALSE for signed terms (a_k = (-1)^k/k satisfies the zeta_k = 1
divergence hypotheses yet sum a_k converges), so positivity is load-bearing,
not a convenience. (iv) The h = 1 branch of Gauss is proved log-free: r_k is
absolutely summable by comparison with the p-series exponent 1 + eps, so the
products telescoping k*a_k are bounded below via the Weierstrass product
inequality prod(1 - x_j) >= 1 - sum x_j (an induction), giving a_k >= c/k and
divergence by direct comparison; no Bertrand machinery is used. (v) In
thm-stolz-cesaro the step 1/b_n -> 0 cites lem-reciprocal-of-null-diverges on
a tail (lem-limit-of-tail), since b_k is only eventually positive. (vi)
thm-limit-comparison-test phrases L = infinity as divergence to +infinity
(def-divergence-to-infinity), never as an extended limit equation, per
rem-sequence-conventions.
```

## 2. Forward references and same-level cross-page references (complete)

### New item authored at step 8 (2026-07-27)

- **`lem-absolute-convergence-implies-convergence`**, on
  `series-and-nonnegative-tests` (A page), placed after `lem-series-linearity`.
  **The id was COINED here**, because the page that would otherwise own it,
  `absolute-convergence-and-rearrangement` (order 36), has an empty item list in
  `plan-spec.json`, so there was no id to reuse. Ids are immutable on `main`: if
  order 36 is later scaffolded with an id for this result, it must reuse this one
  (or alias it), not mint a second. Deps: `def-series`,
  `thm-series-cauchy-criterion`, `lem-triangle-inequality-finite`,
  `lem-finite-sum-laws`, `def-finite-sum`, `lem-of-abs-value`, `def-real-limit`
  — all earlier on the same page or on published pages.
  It exists because `thm-root-test` and `thm-ratio-test` concluded only that
  `sum |a_k|` converges, explicitly weaker than their standard forms; both were
  strengthened to their standard conclusions on the strength of it. Only that one
  implication is proved here; the converse, rearrangement, the Riemann series
  theorem and products of series stay on order 36.

### A pages

- **None.** Every external dependency of `equivalent-forms-of-completeness`
  resolves to a published item on disk; every external dependency of
  `series-and-nonnegative-tests` resolves to a published item or to
  `limsup-and-subsequential-limits` (level 7, the declared `requires`
  prerequisite, built before level 8). Zero references into
  `completeness-and-uniform-continuity`, `topological-spaces-and-continuity`
  or `limits-of-real-functions`.

### B pages

- `equivalent-forms-of-completeness-examples` and
  `series-and-nonnegative-tests-examples` cite their own A pages and the
  level-7 limsup page (`def-limsup-liminf`, `lem-nth-root-of-n-tends-to-one`,
  `lem-nth-root-of-constant-tends-to-one`) — all earlier in plan order, fine.
- **Two apparent forward commitments — RESOLVED at step 8 (2026-07-27), and the
  resolution is NOT a wiring obligation.** The scaffold recorded these as owing a
  citation to a later page:
  1. `cex-evt-and-ivt-fail-over-a-non-complete-field`, for a definition of
     continuity — supposed home RA-13
     (`continuity-ivt-evt-and-uniform-continuity`, order 44, item list empty).
  2. `cex-rolle-fails-over-a-non-complete-field`, for a definition of the
     derivative — supposed home RA-15 (`the-derivative-and-mean-value-theorems`,
     order 48, item list empty).

  **Both items were authored self-contained, and that is the FINAL form.** The
  scaffold's reading was wrong on a point of substance: each of these items
  refutes a claim about an ARBITRARY ordered field, and refutes it over Q, so a
  definition of continuity or of the derivative written for real functions on
  subsets of R — which is what RA-13 and RA-15 will give, resting on
  `def-function-limit` of `limits-of-real-functions` (order 42, already built) —
  simply does not apply to them and could never be cited by them. The only thing
  that would serve is a definition over a general ordered field, and authoring
  one at order 32 would (a) put on `equivalent-forms-of-completeness` a
  definition that no item on that page, and no item anywhere in the planned
  library, uses, and (b) mint an immutable id competing with RA-13's own
  continuity definition, forcing a design decision for ~8 later pages that
  belongs to the owner of those pages.

  So: **no id is owed, and RA-13/RA-15 must NOT retro-wire these two.** Both are
  B-page (leaf) items that nothing may cite, so the self-contained epsilon-delta
  and difference-quotient statements cost no other item anything. The Remarks of
  both items and the B-page summary were corrected at step 8 — they previously
  advised a future session to replace the restatement by a citation, which would
  have been a wrong citation.

## 3. Open decisions for the owner (analysis in the batch-2 report)

1. **NIP form in `def-completeness-properties`**: recommend defining the nested
   interval property WITH the lengths-to-0 clause. The bisection lemma only
   uses shrinking instances; the unrestricted form would make
   fs-nested-intervals-implies-lub unwitnessable short of a countably
   saturated field (ultrapower machinery).
2. **Witness for `fs-cauchy-complete-implies-lub`, `fs-nested-intervals-implies-lub`,
   `ex-cauchy-complete-not-complete-field`**: the honest witness is the formal
   Laurent series field R((1/t)) (= the Cauchy completion of R(t)). Options A
   (build it, ~7 items), B (one recorded-not-proved rem, ‡ contagion), C
   (drop). See report. No later-level page cites any of these three ids, so
   any option is safe for levels 9+.
3. **`lem-mct-implies-archimedean` (new item proposal)**: monotone convergence
   alone forces the Archimedean property ((n) bounded monotone would converge,
   but its tail converges to both L and L+1). With it,
   thm-completeness-equivalences sharpens to "Archimedean assumed alongside
   nested intervals and Cauchy completeness only", and
   rem-where-the-archimedean-hypothesis-is-needed can answer its own title
   honestly: LUB, MCT and BW each carry Archimedean; NIP and CC do not.
   Without it, the remark as scaffolded would state something false.
4. **`lem-of-sequence-basics` (new item proposal)**: one multi-clause lemma in
   an arbitrary ordered field — limits are unique, limits preserve non-strict
   inequalities, convergent implies Cauchy, Cauchy implies bounded, Cauchy
   with a convergent subsequence converges. Replaces the inline re-derivations
   now planned inside lem-bw-implies-cauchy-complete, lem-mct-implies-lub and
   lem-bw-implies-archimedean (house precedent for multi-clause basics:
   lem-of-abs-value, lem-index-map-grows).
