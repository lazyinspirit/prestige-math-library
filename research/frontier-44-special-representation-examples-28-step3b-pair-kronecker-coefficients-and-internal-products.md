# Step 3b report — pair `kronecker-coefficients-and-internal-products` / `kronecker-coefficients-and-internal-products-examples`

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-kronecker-coefficients-and-internal-products-f358a453a13d8df5`.
Owned A page: `kronecker-coefficients-and-internal-products` (order 1582,
special-topics-in-representation-theory, 12 items). Owned B page:
`kronecker-coefficients-and-internal-products-examples` (order 1583, 3 items).
Batch 26 contains only this pair, so the shared batch files have no sibling
rows to preserve.

## Owned IDs and open obligations (entry checkpoint)

Order of work (ascending `dependency_level`, ties by page order and item ID as
in the dispatch):

| Level | ID | Page | State at entry |
|---:|---|---|---|
| 0 | `def-first-row-padding-of-a-partition` | A | scaffold only; file, page, contract owed |
| 0 | `def-kronecker-coefficient-and-internal-tensor-product` | A | scaffold only |
| 0 | `lem-complex-specht-modules-are-self-dual` | A | scaffold only |
| 1 | `def-internal-product-on-symmetric-functions` | A | scaffold only |
| 1 | `def-padded-kronecker-coefficient-sequence` | A | scaffold only |
| 1 | `prop-kronecker-coefficient-is-a-three-character-inner-product` | A | scaffold only |
| 1 | `cex-first-row-padding-before-the-partition-threshold-is-undefined` | B | scaffold only |
| 2 | `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` | A | scaffold only |
| 2 | `lem-littlewood-internal-product-outer-compatibility` | A | scaffold only |
| 2 | `prop-power-sums-diagonalize-the-internal-product` | A | scaffold only |
| 3 | `lem-kronecker-reduction-lemma` | A | scaffold only; hardest route, see below |
| 3 | `ex-kronecker-products-for-s3` | B | scaffold only |
| 4 | `thm-row-gap-reduction-and-conditional-k-stability` | A | scaffold only |
| 5 | `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known` | A | scaffold only |
| 5 | `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` | B | scaffold only |

Open obligations at entry:

1. Author all 15 item files, the A page
   `library/special-topics-in-representation-theory/kronecker-coefficients-and-internal-products.md`
   and the B page
   `library/special-topics-in-representation-theory/kronecker-coefficients-and-internal-products-examples.md`.
2. Write `research/frontier-44-special-representation-examples-28-batch-26.proof-contracts.json`
   with per-step claims/inputs and boundary dispositions; register the items in
   the batch manifest deps, coverage destinations, contracts and pages.
3. Run the dispatch battery (proof-layout, precheck, rendercheck,
   content-policy, depcheck/depsource/manifest-deps, dependency levels,
   validate-plan, coverage-checklist, source-fetch-check, strict proof
   contract, boundary audit, citation fidelity, prose/path checks) and record
   `step3-decisions.mjs record-item` decisions for all 15 IDs.
4. Recheck the named Step-3a findings (padding `(t^k)`/`(tk)` convention, the
   PP3 sentinel/`ind_I` correction, the dropped unused deps) against current
   inputs.

Direct in-run prerequisite pairs to inspect: none. All consumers of these
items are in sibling batches 27/28 (their own writer's bookkeeping).

## Working notes

- Sources fetched fresh into `/tmp/kron-src`: Pak–Panova *Bounds* (SHA-256
  `4bec1c86…`) and Pak–Panova *On the complexity of computing Kronecker
  coefficients* (PP3, SHA-256 `6357e338…`); text extraction read page by page
  for §2.3, §4.1–4.2 (Bounds) and §5.1 (PP3).
- The reduction lemma is authored against the PP3 §5.1 form of the reduction
  map (sentinel `l+1` and `ind_I`); the older Bounds display is read only as
  the proof of Theorem 4.1. A computational cross-check of both candidate
  maps on small partitions is run before authoring the lemma.

## Checkpoint log

Items are listed in the dispatch's dependency order. "Levels" are the in-run
`dependency_level`s recomputed from the authored `deps` and recorded unchanged
in the batch manifest (`item-dependency-levels check` has zero batch-26
findings). Every item was reflowed, prechecked and renderchecked; the
proof-bearing items all pass strict proof contracts (see the checks section).

### 1. `def-first-row-padding-of-a-partition` (A, L0) — accept

- Claim/conventions: `alpha[n] = (n-|alpha|, alpha_1, ..., alpha_k)` defined
  exactly for `n >= |alpha| + alpha_1`, with `varnothing[0] := varnothing`;
  the threshold paragraph covers both directions. Sources: CEF §3.2,
  Definition 3.2.1 and Proposition 3.4.1, printed pp. 17–19; BOR introduction
  and Lemma 3.1, printed pp. 1–3 and 8–9. Deps: `def-partition-...`.
  Decision `accept`, defects `[]`; no open gap.

### 2. `def-kronecker-coefficient-and-internal-tensor-product` (A, L0) — accept

- Claim/conventions: `g(lambda,mu,nu)` is the multiplicity of `S^nu` in
  `S^lambda ⊗ S^mu`, well defined through Maschke plus the Specht
  classification and isotypic decomposition; explicit contrast with the outer
  product (contrast only, not a dependency). Sources: Macdonald I §7;
  Bounds §1 display (1.1) and §2.3. Deps: 8 published suppliers
  (tensor product, Maschke, complete reducibility, Specht irreducibility and
  classification, inequivalence, isotypic component). Decision `accept`.

### 3. `lem-complex-specht-modules-are-self-dual` (A, L0) — repaired

- Claim/conventions: the coefficientwise tabloid form `b(x,y)=sum x_T y_T` is
  symmetric, `S_n`-invariant and nondegenerate on `S^lambda`; `S^lambda ≅
  (S^lambda)^*`; all Specht characters are real-valued. Proof steps 1.1–4.1.
  Sources: Chan Chapter 9 (Definition 9.1, Remark 9.2, Lemma 9.3); Webb
  §3.1–3.2. Repair: dependency list corrected to the actual uses — added
  `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` (used in
  step 4.1), dropped the manifest's unused
  `thm-complex-representations-are-determined-by-their-characters`. Decision
  `repaired`, defects `["dependency"]`.

### 4. `def-internal-product-on-symmetric-functions` (A, L1) — accept

- Claim/conventions: `f*g := ch(ch^{-1}(f)·ch^{-1}(g))` for equal degrees and
  `0` otherwise; degreewise unit `h_n`, no global unit on `Lambda`; Schur
  expansion `s_lambda*s_mu = sum g s_nu`. Sources: Macdonald I §7 (7.10)
  and the unit discussion; PP3 §2.3 display (1). Deps: 6 published suppliers.
  Decision `accept`.

### 5. `def-padded-kronecker-coefficient-sequence` (A, L1) — accept

- Claim/conventions: domain `n >= n_0 = max{|alpha|+alpha_1, |beta|+beta_1,
  |gamma|+gamma_1}`; `g_n(alpha,beta,gamma) := g(alpha[n],beta[n],gamma[n])`;
  no constancy asserted. Sources: BOR introduction and §3; CEF §3.2.
  Deps: first-row padding, Kronecker coefficient. Decision `accept`.

### 6. `prop-kronecker-coefficient-is-a-three-character-inner-product` (A, L1) — accept

- Claim: `g(lambda,mu,nu) = <chi^lambda chi^mu, chi^nu> = (1/n!) sum_sigma
  chi^lambda chi^mu chi^nu`, the last factor unconjugated because Specht
  characters are real. Steps 1.1–3.1. Sources: Bounds §2.3 around (2.3);
  Macdonald Example I.7.20. Decision `accept`.

### 7. `cex-first-row-padding-before-the-partition-threshold-is-undefined` (B, L1) — accept

- Witness `alpha=(2,1)`: `alpha[3]=(0,2,1)` and `alpha[4]=(1,2,1)` are not
  partitions; the family begins at `n=5` with `alpha[5]=(2,2,1)`. Steps
  1.1–3.1. Sources: CEF §3.2; BOR introduction. Deps: first-row padding,
  partition definition. Decision `accept`.

### 8. `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` (A, L2) — accept

- Claims (a) nonnegative integrality; (b) full `S_3` symmetry; (c)
  conjugation of exactly two arguments. Steps 1.1, 1.2, 2.1. Sources:
  Bounds §2.3 display (2.3); Macdonald p. 116. Decision `accept`.

### 9. `lem-littlewood-internal-product-outer-compatibility` (A, L2) — repaired

- Claim: `s_lambda*(s_tau s_theta) = sum c^lambda_{alpha beta}
  (s_alpha*s_tau)(s_beta*s_theta)`. Proof steps 1.1–4.1 through Frobenius
  reciprocity, the projection formula and injectivity of `ch`. Sources: PP3
  §2.3 display (1); Macdonald I §7. Repair: added the used supplier
  `def-littlewood-richardson-tableau-and-coefficient` (cited in [F1] and
  step 1.1). Decision `repaired`, defects `["dependency"]`.

### 10. `prop-power-sums-diagonalize-the-internal-product` (A, L2) — repaired

- Claim: `p_rho*p_sigma = delta_{rho,sigma} z_rho p_rho`, hence the Schur
  structure constants are the `g(lambda,mu,nu)`. Steps 1.1–4.1. Sources:
  Macdonald I (7.12) and Example I.7.20; PP3 §2.3. Repair: the two-line
  display of the diagonal identity was joined to a single source line so the
  renderer parses it (content unchanged); no dependency change. Decision
  `repaired`, defects `["formatting"]`.

### 11. `lem-kronecker-reduction-lemma` (A, L3) — escalate (open proof obligation)

- Claim/conventions: the reduction map `phi` with PP3's sentinel `ell+1` and
  block rank `ind_I`; part (i) `|lambda_i-mu_i| > s` forces
  `g(lambda,mu,nu)=0`; part (ii), under `|lambda_i-mu_i| <= s` **and the
  weak-decrease hypothesis on `phi(lambda), phi(mu)`**, gives
  `g(lambda,mu,nu) = g(phi(lambda),phi(mu),phi(nu))` with `r <= 2 s ell^2`.
  Steps 1.1–6.1; step 3.2 is granted.
- **Published defect (confirmed).** PP3 Lemma 5.1(ii) (and Bounds Lemma 4.3)
  asserts the map always produces partitions; the counterexample
  `lambda=(13,10,2)`, `mu=(13,7,5)`, `nu=(22,3)` gives `phi(lambda)=(9,10,2)`.
  The item states the corrected hypothesis and records the exact remaining
  obligation: boundary separation at the last block, reducing to
  `lambda_{k+1} <= s(ell-k) + g_0` with `g_0 = n - |rho|`. Verified
  computationally (exhaustive `n <= 8`; millions of random admissible pairs
  up to `n = 60`; no failure), and re-run in this pass with
  `/tmp/kron-check/boundary_recheck.py`: exhaustive for all triples with
  `n <= 8` and 2,000,000 random admissible triples with `r <= s` up to
  `n = 60` and `ell <= 8`, zero failures in both the `b = ell+1` sufficient
  condition and the exact worst-case `b <= ell` inequality. A complete
  written proof is not recorded.
- Sources: PP3 §5.1 complete printed proof (read on disk); Bounds §4.2.
  Deps: 10, including the two local suppliers. Decision `escalate`, defects
  `["proof"]`; owner action required to close step 3.2.

### 12. `ex-kronecker-products-for-s3` (B, L3) — repaired

- Claim: complete internal product table in degree 3, characters recomputed
  from the Frobenius dictionary (`h_3`, `h_2h_1 - h_3`, `e_3`), all entries
  0 or 1. Steps 1.1–1.3, 2.1, 3.1. Sources: Bounds §2.3; Macdonald I §7.
  Repair: restored the file's newline structure (an earlier edit had replaced
  every newline in the [F4]–[F8] block by `" +"`) and joined the two-line
  display of the tensor-square decomposition to one line; mathematics
  unchanged. Decision `repaired`, defects `["formatting"]`.

### 13. `thm-row-gap-reduction-and-conditional-k-stability` (A, L4) — escalate (inherited obligation)

- Claim: part (i) the exact shift identity under the separation hypothesis
  `min{lambda_k,mu_k} >= max{lambda_{k+1},mu_{k+1}} + (n - nu_1)` for every
  `t >= 0`; part (ii) eventual constancy of `G_k`, with no monotonicity
  claimed. Steps 1.1–5.1 for part (i) plus the part-(ii) paragraph. The
  canonical precheck repair was adopted (renumbering). Sources: Bounds §4.1
  Theorem 4.1, Corollary 4.2 and the printed proof of Theorem 1.1; PP3 §8.9.
- **Flagged supplier use.** Steps 1.1–1.2 and 5.1 consume
  `lem-kronecker-reduction-lemma` [F2] through its reduction case, i.e. part
  (ii); the consumers are valid only after the supplier's step 3.2 obligation
  is closed. Decision `escalate`, defects `["dependency"]`; the item's
  Remarks state the inherited obligation.

### 14. `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known` (A, L5) — accept

- Claim boundary: the character formula, reduction lemma and `k`-stability do
  not give a general positive combinatorial rule; obtaining a combinatorial
  interpretation / positive formula is recorded as open; no polynomial-time
  algorithm, no general positivity criterion, and no nonexistence theorem is
  claimed. No proof section (`provenance.statement: literature-derived`,
  `proof: not-applicable`). Sources: Bounds §1 (printed p. 1) and §7.1, §7.3
  (printed p. 15); PP3 §1 (printed p. 1) and §8.3, §8.5 (printed pp. 17–18).
  Deps: the page's five A items used in the statement. Independently checked
  against later literature (Ikenmeyer–Panova, Forum of Mathematics Pi 12
  (2024) e22, §1: the combinatorial-interpretation problem is "wide open");
  that check is recorded here, not cited in the item, so batch-26 source
  coverage is unchanged. Decision `accept`.

### 15. `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` (B, L5) — escalate (inherited obligation)

- Claim: `g((2,2),(2,2),(3,1)) = 0` while `g((2+t,2),(2+t,2),(3+t,1)) = 1` for
  every `t >= 1`; the separation hypothesis fails at `t = 0`. Steps 1.1–4.1
  (independent `S_4`/`S_5` character computations, then the row-gap theorem
  from `t=1`). The canonical precheck repair was adopted. Sources: Bounds
  Example 4.4 and §4.1; Chan Chapters 3–4 for the tabloid/character inputs.
- **Flagged supplier use.** Step 3.1 applies
  `thm-row-gap-reduction-and-conditional-k-stability` [F4] at the separated
  triple `((3,2),(3,2),(4,1))` and inherits the
  `lem-kronecker-reduction-lemma` part (ii) obligation; the item's added
  Remark states this. Decision `escalate`, defects `["dependency"]`.

## Consumer / supplier flags (exact)

| supplier | consumer | consuming step | obligation |
|---|---|---|---|
| `lem-kronecker-reduction-lemma` (step 3.2) | `thm-row-gap-reduction-and-conditional-k-stability` | steps 1.1–1.2, 5.1 (via [F2]) | boundary separation `lambda_{k+1} <= s(ell-k)+g_0` not yet written out |
| `lem-kronecker-reduction-lemma` (step 3.2) | `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` | step 3.1 (via [F4]) | same obligation, inherited through the row-gap theorem |

No sibling-pair or cross-batch supplier is unfinished for this pair; all other
deps resolve to published items.

## Step 3a findings rechecked against current inputs

1. **Padding convention `(t^k)` vs `(tk)`** — the authored items state the
   source's exact operation ((t^k) to lambda and mu, (tk) to the first part of
   nu); for k=1 this is the design's reading. Confirmed present in
   `thm-row-gap-reduction-and-conditional-k-stability` and
   `def-first-row-padding-of-a-partition`.
2. **PP3 sentinel and `ind_I`** — the reduction lemma uses `ell+1` and
   `ind_I` exactly as PP3 §5.1; recorded.
3. **Dropped unused deps** — confirmed: the dropped
   `cor-power-sums-are-orthogonal-for-the-hall-inner-product` and
   `thm-complex-specht-modules-are-irreducible` are indeed unused by the
   retained routes (depcheck clean for this batch after the two additions
   recorded above).
4. **James citation mismatch** — resolved by authoring: none of the 15
   authored items cites the James string or the Webb-hosted URL; the
   form/self-duality items cite Chan and Webb directly, as the coverage
   records.
5. **Monotonicity clause of Bounds Theorem 1.1** — not carried; the item
   proves eventual constancy via Theorem 4.1 and explicitly disclaims
   monotonicity and boundedness for all t. Consistent with the design.

## Published concerns

- **PP3 Lemma 5.1(ii) / Bounds Lemma 4.3 as printed is not correct as
  stated.** Confidence: confirmed (explicit counterexample above; the printed
  proof also invokes "define the partition phi(theta)", which the counterexample
  violates). Required repair by the owner: either adopt the weak-decrease
  hypothesis now recorded in the item, or supply the missing boundary argument.
  Evidence and computation log: item Remarks of
  `lem-kronecker-reduction-lemma`; checks under `/tmp/kron-check` during this
  pass. Sibling batches 27/28 quote the same lemma through the row-gap theorem;
  their writers should be pointed at this item's corrected form.
- **Advisory (Step 4, inherited from plan-spec).** `validate-plan` reports the
  A page's three `requires` as mutually redundant (the Frobenius and Specht
  pages are reached through the outer-products page). Plan, task and plan-spec
  agree on the triple; preserved unchanged and reported, not edited.

## Checks actually run (batch 26)

| check | result |
|---|---|
| `reflow` (all 15 items) | idempotent; no pending reflow |
| `precheck` (all 15 explicit paths) | 10 proof items PASS; 5 def/rem items not-applicable; 0 failing |
| `proof-layout` (all 15, one batched run) | 0 defects (see final run below) |
| `rendercheck` (15 items + 2 pages) | OK, 0 errors |
| `content-policy` (batch pages.json) | 15 items, 0 errors, 0 warnings |
| `coverage-checklist --require-destination` | 2 pages, 60 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --coverage` | 12/12 fetch-verified; 12/12 resolved |
| `manifest-deps` | 15 items, 0 errors (deps synced to actual uses) |
| `item-dependency-levels check --run` | 0 batch-26 findings; levels unchanged from scaffold (max 5) |
| `validate-plan research/plan-spec.json --run` | no batch-26 errors; 2 pre-existing errors in sibling pages (recorded below) |
| `proof-contract --strict` (batch-26 contracts) | 15/15 items checked, 0 errors, 0 warnings |
| `boundary-audit` (batch-26 contracts) | no template-reuse cluster, no contradicted dispositions |
| `citation-fidelity --fail-on-missing-quote` | no missing quotes; no widening candidates |
| `depcheck` (whole corpus, this batch inspected) | 0 batch-26 findings after repairs |
| `citecheck` (15 items) | OK, every recognised move cites a home that states it |

Out-of-pair findings observed while running the whole-run gates (not this
pair's work, reported for the serial reconciler): `validate-plan` has two
`undeclared-prereq` errors on
`equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
and `ariki-categorification-and-graded-decomposition-numbers`;
`item-dependency-levels check --run` reports level mismatches of size 2 on
eight cyclotomic-KLR and projective-perverse items in sibling batches.

## Final handoff — 2026-10-10

**Completed IDs.** All 15 original scaffold IDs are authored and registered
(and no item was added outside the scaffold inventory):

| item | level | file | decision |
|---|---:|---|---|
| `def-first-row-padding-of-a-partition` | 0 | authored | accept |
| `def-kronecker-coefficient-and-internal-tensor-product` | 0 | authored | accept |
| `lem-complex-specht-modules-are-self-dual` | 0 | authored | repaired `["dependency"]` |
| `def-internal-product-on-symmetric-functions` | 1 | authored | accept |
| `def-padded-kronecker-coefficient-sequence` | 1 | authored | accept |
| `prop-kronecker-coefficient-is-a-three-character-inner-product` | 1 | authored | accept |
| `cex-first-row-padding-before-the-partition-threshold-is-undefined` | 1 | authored | accept |
| `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` | 2 | authored | accept |
| `lem-littlewood-internal-product-outer-compatibility` | 2 | authored | repaired `["dependency"]` |
| `prop-power-sums-diagonalize-the-internal-product` | 2 | authored | repaired `["formatting"]` |
| `lem-kronecker-reduction-lemma` | 3 | authored | escalate `["proof"]` |
| `ex-kronecker-products-for-s3` | 3 | authored | repaired `["formatting"]` |
| `thm-row-gap-reduction-and-conditional-k-stability` | 4 | authored | escalate `["dependency"]` |
| `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known` | 5 | authored | accept |
| `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` | 5 | authored | escalate `["dependency"]` |

**Pages.** `library/special-topics-in-representation-theory/kronecker-coefficients-and-internal-products.md`
(items: the 12 A items above; requires the three plan-spec pages) and
`...-examples.md` (examples: the 3 B items; requires the A page) are written,
draft, and render clean.

**Added suppliers within the pair.** `lem-littlewood-internal-product-outer-compatibility`
and `lem-kronecker-reduction-lemma` were scaffolded by Step 1a and fully
authored here; no additional item beyond the scaffold inventory was created.

**Open obligations.**
1. `lem-kronecker-reduction-lemma` step 3.2 (boundary separation; exact
   inequality recorded above) — owner decision needed (accept the corrected
   hypothesis and close the written proof, or supply the missing argument).
2. The two escalated consumers remain valid modulo that obligation; they must
   be re-reconciled when it closes.

**Published concerns.** The PP3/Bounds reduction lemma statement defect above;
no defect found in the three published pages that supply this pair.

