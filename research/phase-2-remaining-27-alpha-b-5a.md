# Step 5a adjudication — group b, run `phase-2-remaining-27`

Scope: batches **9, 10, 4** (the `covers:` of dispatch `5a-b`). 45 routed
obligations were decided: 28 `touched`, 1 `page`, 1 `reader`, 15 `flagged`.
The engine owns scheduling, stamping and the gate battery; nothing here is a
judge verdict or a certification.

## 1. Method and evidence base

For every routed obligation I re-read the current carrier (item or page) on
disk, its reader and refuter evidence, and every cited dependency needed to
test the claim, and I compared the current carrier with the `step5-hash-*-pre`
and `step5-hash-*-post` snapshots before deciding. The reader reports
(`-reader-9`, `-reader-10`, `-reader-4`), the refuter reports (`-refute-9`,
`-refute-10`, `-refute-4`) and the scope files were treated as evidence, not
as verdicts; every defect accepted or rejected below was re-derived or
re-read in the current text.

Primary evidence used:

- `research/phase-2-remaining-27-step5-scope-{9,10,4}.json` — routed
  obligations, touched/untouched split, refuter findings;
- `research/phase-2-remaining-27-{reader,refute}-{9,10,4}.{md,json}` — the two
  independent full passes over every carrier;
- the current `items/*.md` and `library/algebraic-topology/*.md` carriers and
  their cited library items (`def-exact-couple`,
  `thm-cohomological-atiyah-hirzebruch-spectral-sequence`,
  `prop-relative-cw-inclusions-are-cofibrations`,
  `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient`,
  `prop-compact-spaces-are-paracompact`,
  `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`,
  `thm-choice-implies-dependent-implies-countable-choice`,
  `lem-limsup-monotone-comparison`, and the batch-internal suppliers named in
  each decision);
- the proof contracts `research/phase-2-remaining-27-batch-{9,10,4}.proof-contracts.json`.

Source reading: the readers and refuters record the external locators they
checked (Loizides pp. 3–8; Davis–Kirk pp. 242–246; Hatcher *VBKT* pp. 77–99;
Adams pp. 391–393; Atiyah pp. 151 and Chapter II §2.7; Bühler–Salamon
pp. 209–228; Shirbisheh pp. 11–50; Miller pp. 100–138; Schoń pp. 165–166). I
did not re-fetch those PDFs in this pass; where a repair depended on a
classical statement I re-derived it directly (K-theory of surfaces and of
`RP^r`, the `E_2`-support case analysis, the shift and disc-algebra
counterexamples, the unitization expansion, the Whitney expansion of
`π^*γ_n`, the `l^2` approximate eigenvectors) and for the one classical
statement newly written into an item (every element of the boundary of the
invertible group is a topological zero divisor, used in the repaired
`thm-gelfand-mazur` remark) I checked the literature ("A note on topological
divisors of zero and division algebras"; arXiv:2402.06303) and the direct
construction `b_n = a_n^{-1}/‖a_n^{-1}‖`.

## 2. Verdicts

All 45 verdicts are in
`research/phase-2-remaining-27-alpha-b-5a-decisions.json`; each carries its
evidence. Summary:

| route | count | verdicts |
| --- | --- | --- |
| `touched` (batch 9) | 9 | 7 `amended_repair`, 2 `amended_repair` (contract-only, recorded via closed nonfatal contract rows) |
| `page` (batch 9) | 1 | `accepted_repair` |
| `reader` (batch 9) | 1 | `confirmed_nonfatal` (repaired) |
| `flagged` (batch 9) | 5 | `confirmed_nonfatal` (all repaired) |
| `touched` (batch 10) | 6 | 6 `amended_repair` |
| `flagged` (batch 10) | 1 | `confirmed_nonfatal` (repaired) |
| `touched` (batch 4) | 13 | 11 `amended_repair`, 2 `accepted_repair` |
| `flagged` (batch 4) | 9 | 4 `confirmed_fatal`, 5 `confirmed_nonfatal` (all repaired) |

`amended_repair` vs `accepted_repair`: every touched item except
`def-invertible-element-and-general-linear-group-of-a-banach-algebra` and
`lem-resolvent-identity` carries a contract change after the post-reader
snapshot — the Alpha `risk_review` required for every HIGH/CRITICAL item,
plus, for the batch-4 items listed in §3.3, the adjudicator's own repair. The
accepted items and the touched page are byte-identical to their post-reader
carriers.

## 3. Repairs

### 3.1 Reader finding and refuter findings (batch 9)

- `reader:9:1` / `refuter:9:4` — page summary of
  `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`:
  `u = c_1(E_1)` was called "the Hopf-normalized generator" while the same
  page makes `c_1(γ*)` the pair's normalized generator; on `S^2 = CP^1` the
  clutching normalization `⟨u,[S^2]⟩ = +1` is the negative of the pair's
  normalization, `u = c_1(γ) = -c_1(γ*)`. The page summary now records both
  conventions. The two decisions reference two closed rows (…-010, …-011)
  because the routed locations differ; they record the same page defect as
  the routing splits it.
- `refuter:9:1` (`ex-complex-k-ahss-for-spheres`, 2.1): parity cases were
  exchanged. Step 2.1 now: `r` even ⇒ odd target row; `r` odd ⇒ odd target
  column outside the support `{0,n}`. Conclusion unchanged.
- `refuter:9:2` (`ex-chern-class-of-tautological-…`, [F5]): the item's
  `x = c_1(γ*)` was identified with `e(γ_R) = c_1(γ) = -x`. [F5] now uses
  `t = e(γ_R) = -x` for the published generator and records `t ↦ t`.
- `refuter:9:3` (`lem-complex-tautological-euler-class-…`, source notes):
  the final sentence claimed the published `u` is `c_1(γ*)`; the published
  normalization is `u = e(γ_R) = c_1(γ) = -c_1(γ*)`, and the proof's global
  sign is `+u`. Rewritten; no proof step changed.
- `refuter:9:5` (`lem-the-ahss-first-differential-…`, [F2]/1.1): the typed
  composite is `j∘k = jk` (`j` the connecting map `D→E`, `k` the pair map
  `E→D`), not the written `k∘j`; repaired in both places and in the contract.

### 3.2 Refuter finding (batch 10)

- `refuter:10:1` (`thm-mod-two-cohomology-of-bo-n`, 2.1): the displayed
  `w_j(L)w_j(p^*γ_{n-1})` is not the Whitney expansion. The refuter's
  counterexample is unavailable because the vertical line `L` is trivialized
  by the unit section `(W,v) ↦ v`; the correct repair is the total-class
  identity `w(π^*γ_n) = w(L)w(p^*γ_{n-1}) = w(p^*γ_{n-1})`, whose components
  give `w_j(π^*γ_n) = p^*w_j(γ_{n-1})` and hence
  `η(w_j(γ_n)) = w_j(γ_{n-1})` for every `j`, including `j = n`. Step 2.1
  rewritten; the item is also a `touched` carrier (reader's step 5.1 fix).

### 3.3 Adjudicator repairs in batch 4 (`flagged` findings)

- `refuter:4:1` `thm-gelfand-mazur` (remark, fatal): the disc algebra has no
  zero divisors but is not a division algebra, and `1-z` is a topological but
  not algebraic zero divisor. The remark now states the counterexample and
  the correct topological-zero-divisor statement; the two cross-page items
  are declared in `forward_refs` (fwdcheck passes).
- `refuter:4:2` `thm-spectral-radius-formula` (6.1, fatal): [L5] was applied
  on the boundary circle of the holomorphy disc. Step 6.1 now fixes `R′`
  with `r(a) < R′ < R`, reruns steps 2.2–4.1 for `R′`, and applies [L5] with
  `ρ = 1/R` inside `D_{R′}`.
- `refuter:4:3` `ex-spectrum-of-the-unilateral-shift` (2.2, fatal): the
  displayed identity omitted the boundary term at `e_0`; now
  `(S-λ)v_N = N^{-1/2}(λ^{-(N-1)}e_N - λ e_0)`, norm `√2 N^{-1/2}`.
- `refuter:4:4` `ex-unitization-of-a-nonunital-banach-algebra` (1.1, fatal):
  both associators are re-expanded to the common seven-term value.
- `refuter:4:5` `def-riesz-spectral-projection` (definition, nonfatal): the
  illustrative cycle violated its own index condition; replaced by
  `c_all - c_E` with the index computation displayed. Two downstream contract
  quotes were trimmed to the unchanged sentence.
- `refuter:4:6` `ex-c-zero-of-a-locally-compact-space` (1.3, nonfatal): the
  `a ∈ l^1` justification is false; the series has at most one nonzero term
  by step 1.2.
- `refuter:4:7` `lem-maximal-ideals-of-c-x-…` (1.3, nonfatal): properness of
  the z-filter is empty-set avoidance; the rewritten step proves it from the
  standing hypothesis.
- `refuter:4:8` `thm-minimal-c-star-unitization` (2.1, nonfatal): the false
  middle equality is replaced by the correct adjoint computation, yielding
  `e = e*` as a two-sided identity.
- `refuter:4:9` `lem-submultiplicative-root-limit` ([L4]/2.3, nonfatal): the
  liminf clause of the cited comparison is restored and step 2.3 uses it.

### 3.4 Reader repairs accepted (touched carriers)

Batch 9: `ex-chern-classes-of-a-sum-of-universal-complex-lines` ([F3]
classification citation); `ex-complex-k-ahss-for-a-closed-oriented-surface`
(2.1–4.1 values: `gr K^0 = Z^2`, `K^0 = Z^2 = Z ⊕ Z̃`); 
`ex-complex-k-ahss-for-real-projective-space` ([A1] table and collapse
argument); `lem-complexified-tautological-line-…` ([A3] table, 1.2 case
analysis); `lem-edge-maps-of-a-bounded-skeletal-ahss` (`F_0 h_n = im(h_n(X^0)
→ h_n(X))`); `lem-homological-ahss-exact-couple-…` (1.1 exactness, [F2] pair
groups via cofibration/cofiber); `lem-pairings-of-skeletal-exact-couples-…`
(`k` multiplicative, `j` Leibniz); the page
`generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`
("finite dimension bounds the skeletal index"); and the two contract-only
quote refreshes for `ex-realification-…` and `thm-mod-two-reduction-…`
(closed nonfatal contract rows …-004 and …-046).

Batch 10: `cex-odd-rank-euler-class-…` (2.2 monomial count); 
`def-characteristic-class-as-a-universal-natural-bundle-class` (scope of the
definition + `BG` is CW); `ex-euler-class-of-the-universal-oriented-two-plane`
(Gysin display); `lem-tautological-degree-one-class-…` ([F8] compact ⇒
paracompact); `prop-first-stiefel-whitney-class-classifies-orientability`
(statement narrowed to CW complexes/admissible bases, transport proof, tensor
identity via `RP^∞×RP^∞`); `thm-mod-two-cohomology-of-bo-n` ([F8] for step
5.1). I read the rewritten statement and proof of `prop-first-…` and rebuilt
its contract entry (claims, inputs, uses, boundaries).

Batch 4: `def-invertible-element-…` (shift counterexample); 
`ex-bounded-operators-form-a-noncommutative-banach-algebra` (AC declared,
transport along a bounded projection; I also updated the stale
`axiom_audit` clause in the batch manifest); `ex-c-zero-…` (witness
`δ_n`); `ex-gelfand-transform-of-ell-one-of-z` (1.5 continuity); 
`ex-spectrum-of-the-unilateral-shift` (3.1 density only on the unit circle);
`ex-stone-duality-for-a-power-set-algebra` (stale references); 
`lem-resolvent-identity` (1.1 inverse relations); 
`lem-submultiplicative-root-limit` (2.2/3.1 `B_k`); 
`lem-zero-set-ultrafilters-and-stone-cech-points` ([L4] reference);
`thm-boundary-of-spectrum-…` (1.2 sign); 
`thm-every-commutative-c-star-algebra-…` (remark reference);
`thm-maximal-ideals-and-characters-…` (choice-ledger remark);
`thm-spectral-radius-formula` (3.1 missing factor `a`).

### 3.5 Other reconciliation

- `cor-atkinson-in-calkin-algebra-language`: the open same-frontier row for
  `cor-atkinson-… → def-compact-linear-operator` recorded a misdirected [L3]
  citation (the definition says nothing about choice). I replaced the link by
  the published `thm-choice-implies-dependent-implies-countable-choice`
  (`AC ⇒ DC ⇒ AC_ω`), added the dependency, and linked
  `def-compact-linear-operator` where compactness is actually used; the row
  is now `verified` and the frontend ledger was refreshed.
- Frontier inputs: the two batch-9 rows about the rewritten supplier
  `prop-first-…` and the page row for the `stiefel-whitney…` page were
  re-verified at the current state (evidence updated in
  `research/phase-2-remaining-27-batch-9.cross-batch-dependencies.json`);
  `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  ran clean.
- Batch contracts: rebuilt or refreshed where the readers' repairs had left
  them out of sync — the full entry for
  `prop-first-stiefel-whitney-class-classifies-orientability`, citations for
  the new facts `[F8]` in `thm-mod-two-cohomology-of-bo-n` and
  `lem-tautological-degree-one-class-…`, refreshed quotes in
  `cex-odd-rank-euler-class-…` and `cor-atkinson-…`, and the changed step
  claims in every item I repaired. `proof-contract.mjs` reports 0 errors on
  all three batch contracts.

## 4. Risk review

`node tools/risk-report.mjs` on the three batch contracts routes 158
HIGH/CRITICAL items (batch 9: 60; batch 10: 27; batch 4: 71). Every one
carries a `risk_review` in its contract entry with `status: "complete"`, the
reviewer, and a note naming its risk signals and the evidence basis:
the independent reader and refuter full reads, the contract's exact citation
quotes and boundary worksheet, and — for the 45 carriers this adjudication
touched — my own re-derivation described in §3. For the remaining items the
note states honestly that I did not re-derive their numbered steps in this
pass; their residual risk is the mechanical signal weight, not an identified
defect. `risk-report.mjs --require-reviewed` reports 0 errors on all three
batch contracts.

## 5. Published findings

No published item was found defective in this dispatch, so
`research/published-consumer-supplier-ledger.md` needs no new entry from
group b. The published items actually used by the repaired mathematics were
checked at the statement level and are sound as used:
`thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`
(scope: paracompact Hausdorff CGWH), `prop-compact-spaces-are-paracompact`,
`lem-limsup-monotone-comparison`, `thm-choice-implies-dependent-implies-countable-choice`,
`prop-relative-cw-inclusions-are-cofibrations`,
`lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient`, and the
Gysin/Thom/Euler suppliers of batch 10. Published content was not edited.

## 6. Checks run

- `node tools/tsx-run.mjs tools/precheck.mts` (repo-wide): 16024 checked,
  0 failing.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-{9,10,4}.proof-contracts.json`:
  0 errors each (batch 9 keeps its single pre-existing `shotgun-bracket`
  warning on `lem-homological-ahss-…`, which the reader also recorded).
- `node tools/risk-report.mjs … --require-reviewed`: 0 errors per batch.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`:
  0 contradicted, 0 template rows per batch.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote`: no missing
  quotes, no widening candidates per batch.
- `node tools/finite-smoke.mjs …`: 0 errors per batch.
- `node tools/depcheck.mjs` and `node tools/fwdcheck.mjs --quiet`: pass.
- `node tools/defect-ledger.mjs validate --run phase-2-remaining-27`: 213 rows
  checked, 0 errors; the 46 rows owned by this dispatch are
  `phase-2-remaining-27-5a-b-001` … `-046`.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`:
  refreshed and deduplicated.
- `node tools/step5-scope.mjs check --run phase-2-remaining-27 --phase adjudicate`
  was run as a local read-only rehearsal: beyond the expected
  `decision-stale` notices (the engine stamps `subject_sha256` after this
  dispatch) and other groups' pending `decisions-missing` rows, it reports no
  group-b routing, ledger or hash problem. A separate simulation of the same
  conditions over all 45 decisions reports them consistent.

## 7. Blockers, escalations, withdrawals

- No escalation: no routed obligation lacked a prerequisite that blocked a
  sound local repair, and no mathematics was left unresolved.
- No withdrawal is proposed; all items, pages and claims remain present.
- Handoff notes for the 5b lead:
  1. `prop-first-stiefel-whitney-class-classifies-orientability` was rewritten
     in-window and two batch-9 contracts quote it; if it moves again, refresh
     those quotes (its statement is now stable at the admissible-base scope).
  2. Residual standard point recorded in the risk review of that item: the
     flag bundle of a numerable bundle over a CW-homotopy-type base is used as
     an admissible base; the splitting chain needs that closure.
  3. Two closed rows (…-010, …-011) record one page-summary defect found by
     both the reader and the refuter, kept separate because the engine's
     shared-finding rule requires identical recorded locations.
  4. The 158 risk reviews name their own residual-risk weight; none records an
     identified unresolved defect.
  5. `node tools/audit-manifest.mjs` over all 15 batches reports 16 unresolved
     rows; three are in batch 4 and are the `external_refs` of the three
     orientation remarks `rem-nagata-cp-theorem-remains-topological`,
     `rem-gerlits-nagy-remains-selection-principle-theory` and
     `rem-linear-dugundji-extension-remains-topological` (they name ids on the
     deliberately unpublished "recorded, not proved" catalogue). Those
     references are the sanctioned non-load-bearing orientation vehicle and
     never enter a proof or prerequisite closure, so I did not rewrite them;
     the remaining 13 rows are other batches' root-system items. The 5b lead
     must disposition this gate before closure.
