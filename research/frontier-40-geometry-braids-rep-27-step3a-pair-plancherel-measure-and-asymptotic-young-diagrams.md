# Step 3a dispatch report — `plancherel-measure-and-asymptotic-young-diagrams`

- Run: `frontier-40-geometry-braids-rep-27` (batch 12, orders 829/830, `representation-theory`).
- Pair: A `plancherel-measure-and-asymptotic-young-diagrams` / B
  `plancherel-measure-and-asymptotic-young-diagrams-examples` (A: 24 items; B: 3 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the promised scope (all design claims present, source coverage
  adequate, no unmet prerequisite found). One boundary/uncertainty is recorded in §5 for the owner.

## 1. Inputs read

- Manifests: `research/frontier-40-geometry-braids-rep-27-batch-12.pages.json` (full text of both
  pages, all 27 items, statements and strategies) and `...-batch-12.coverage.json`;
  `research/plan-spec.json` rows for orders 829/830 (ids, orders, titles, companions, `requires`).
- Design/prose: `research/plan-symmetric-group-representations-track.md` (SYMR-16 row L47, §§3,
  7, 9) and the controlling item inventory `research/symmetric-group-planning/proposed-inventory.md`
  §SYMR-16 (19 A rows + 3 B rows); backing research report
  `research/symmetric-group-planning/agent-7-articles-products-asymptotic.md` §D;
  `research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md` L58
  ("Kerov's finite-dimensional CLT").
- Owner/run records: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`,
  `...-scope-ledger.json` (54 owed pages incl. both pages of batch 12), `...-batch-12.notes.md`,
  the 27 `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` readiness records
  (27/27 `ready`, 0 escalations), and `...-batch-12.cross-batch-dependencies.json` (`[]`).
- Sources: cached full text `scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/
  ivanov-olshanski-kerov-clt-2003.{pdf,txt}` and the published items named as suppliers below.

## 2. Design ∶ scaffold comparison (scope only)

Every promised item of the design inventory is present with the same id, kind and claim. Script
diff over the SYMR-16 inventory against batch 12: **22/22 design ids present, 0 missing**; the
19 A rows and 3 B rows map one-to-one onto the manifest.

| design promise (proposed-inventory rows) | batch-12 item(s) |
|---|---|
| measure `P_n=(f^λ)^2/n!`, normalization, RSK law | `def-plancherel-measure-on-partitions`, `prop-plancherel-weights-sum-to-one`, `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law` |
| Russian profile/scaling, `Ω`, profile moments | `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram`, `def-logan-shepp-vershik-kerov-limit-profile`, `def-shifted-character-observables-and-profile-moments` |
| `p_ρ^#` basis/filtration, Plancherel expectations, limit moments | `thm-shifted-character-basis-and-weight-filtration`, `prop-plancherel-expectations-of-shifted-character-observables`, `prop-limit-profile-moments-are-central-binomial-coefficients` |
| moment LLN, RSK tightness, topology lemma, sup LLN | `prop-scaled-plancherel-profile-moments-converge-in-probability`, `lem-rsk-union-bound-localizes-plancherel-profiles`, `lem-bounded-lipschitz-profile-moments-control-uniform-distance`, `thm-plancherel-young-diagrams-converge-to-the-limit-shape` |
| joint convergence, Hermite normalization, moment method, character CLT | `def-joint-convergence-and-normalized-cycle-character-observables`, `def-normalized-shifted-character-basis-elements`, `lem-hermite-leading-terms-for-normalized-shifted-characters`, `thm-multivariate-method-of-moments-for-a-determinate-limit`, `thm-kerov-central-limit-theorem-for-normalized-cycle-characters` |
| ownership boundary | `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned` |
| B: S_3 weights, six RSK shapes, non-uniformity | `ex-plancherel-measure-on-partitions-of-three`, `ex-rsk-shapes-of-all-six-permutations-in-s3`, `cex-plancherel-measure-is-not-uniform-on-partitions` |

Five local helper items not spelled out as separate rows in the inventory are added:
`lem-shifted-character-multiplication-by-p-k` (IvOl Props 4.11–4.12),
`lem-profile-moment-generators-and-shifted-character-basis` (IvOl Props 3.5–3.7 / Cor. 2.8),
`def-monic-probabilists-hermite-polynomials`, `lem-hermite-orthogonality-and-monomial-expansion`,
`lem-standard-gaussian-is-determined-by-its-moments`. These carry joints the design already names
("Hermite leading terms", "moment method", the basis change) and the canonical addition recorded in
the coverage file; they add no subject matter beyond the design and no promised claim is dropped.

Recorded reformulations (batch notes §"Recorded reformulations"), each scope-preserving on
inspection: the profile moment is the total integral form
`p̃_k=k(k−1)∫x^{k−2}σ` with the a.e.-derivative form recovered for piecewise-linear profiles; the
`p_1^#`-localization of `η_ρ` is realized by its concrete evaluation on each `Y_n` (equal because
`p_1^#(λ)=n`); Gaussian determinacy is proved by a local Stein-identity lemma instead of an
analyticity-only appeal; the Hermite leading-term lemma is stated in the equivalent finite
`O(n^{-1/2})`-remainder form. AC is declared exactly on the four CLT-side items named in the notes.

Page-level checks: both rows match `plan-spec.json` on order, title, kind, category, companion and
`requires`; A has 24 items (cap 60), B has 3 items and is a dependency leaf (no item outside the
pair depends on batch 12; `cross-batch-dependencies.json` is `[]` and no other batch file mentions
the pair). `coverage-checklist` → `2 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`;
`manifest-deps` → `27 item(s), 0 error(s)`.

## 3. Source coverage

The primary source stamp was re-verified against the local cached full text:
`ivanov-olshanski-kerov-clt-2003.pdf` = 432 088 bytes, sha256 prefix `fc2296c027b3feb0` — exactly
the coverage stamp (49 pp). Reading the cached full text, the promised statements match the source:
Thm 5.4 (moment LLN, convergence in probability), Thm 5.5 (sup-norm LLN), Lemmas 5.6–5.7
(support localization via Hammersley; weak = uniform topology on the Lipschitz class), Thm 6.1
(character CLT, `p_k^#/n^{k/2} → √k·ξ_k`). The scaffold transcribes Thm 6.1 as joint convergence of
`η_k` to `N(0,I)` and 5.4/5.5 as stated. Coverage dispositions agree with the design: §§2–6
included (§§2 machinery, §3 inversion, §4 basis/filtration, §5 limit shape, §6 character CLT);
Romik §§1.6–1.9 included and §§1.11–1.17/1.20 recorded as the independent variational treatment of
the same limit shape; Ivanov–Kerov §§6 and 9 carry the support-union multiplication and the algebra
isomorphism; Śniady Thm 3.1/Cor. 3.3 is the independent CLT corroboration. Out-of-scope items carry
reasons (hook walk; Romik Ch. 2–5 / Tracy–Widom and edge statistics; IvOl §§8–9 spectral-measure
applications), all beyond the promised claims.

## 4. Prerequisite audit (unmet-prerequisite duty)

Mechanical resolution of the pair's declared graph: 79 distinct item deps = 57 published + 22
in-run (all 22 inside this pair). Every published dep has frontmatter `status: published`; every
`[[…]]` wikilink in the 27 statements/strategies resolves to a published item or to a current-run
scaffold item (script check: 0 unresolved). The transitive `requires` closure of the A page's eight
page-level prerequisites (220 pages) contains the home page of every out-of-pair dependency, so no
item reaches outside its declared page closure; the four symmetric-group supplier pages and four
probability supplier pages are all `published`.

Spot checks of the load-bearing published suppliers, statement against use (no defect claimed, no
proof re-audit): `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients`
(exactly `χ^λ(ρ)=⟨s_λ,p_ρ⟩`, the definition interface of `p_ρ^#`);
`thm-character-of-the-regular-representation` and
`thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree`
(the expectation computation and the two countings of `n!`);
`thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` (λ₁ = LIS, λ′₁ = LDS, the
localization input); `cor-paths-in-the-young-graph-index-standard-tableaux` (f^λ = path count for
the RSK law); `def-convergence-in-distribution-of-random-elements` (metric-space random elements,
the CLT's mode of convergence); `def-multivariate-normal-law` (target law);
`def-partition-young-diagram-and-conjugate-partition` (English diagrams, λ′ used by the rotation
and support conventions); `def-principal-inverse-sine-and-cosine` (principal arcsine for `Ω`).

**Finding: no unmet prerequisite.** No consuming item of this pair needs a claim absent from both
the published library and the current scaffold. Uncertainty (honest statement): this is an
interface/scope audit of the cited suppliers' statements and homes, not a re-verification of their
published proofs; the batch's own step-1 records and the 27/27 `ready` decisions are cited, not
independently re-proved here.

## 5. Recorded boundary / uncertainty for the owner (not a blocker)

The primary source's eponymous result — Ivanov–Olshanski "Kerov's central limit theorem for the
Plancherel measure on Young diagrams" — is the diagram-fluctuation theorem in §7, Thm 7.1
("Central limit theorem for Young diagrams": the Chebyshev-coordinate fluctuations
`u_k^{(n)} ⇒ ξ_{k+1}/√(k+1)`). That theorem is not in the promised inventory; the design's stated
endpoint is the *character* CLT (plan §3: "The Plancherel limit shape and Kerov character CLT
remain central"; gap ledger: "Kerov's finite-dimensional CLT"), and the coverage file records §7
out-of-scope with the reason that it needs the additional moment-map inversion (Props. 7.3–7.4).
The scaffolded scope therefore matches the design, and this review does not treat §7 as a dropped
promise. If the owner intends the headline diagram CLT, it is a successor enrichment (or a new
pair) requiring the §7 inversion machinery; that decision is the owner's, and I flag it here rather
than recording the pair insufficient.

## 6. B-page assessment

`plancherel-measure-and-asymptotic-young-diagrams-examples` carries exactly the three design rows:
the S₃ weights (1/6, 4/6, 1/6) with explicit standard-tableau counts, the six RSK shapes of S₃ by
explicit row insertion, and the counterexample that the Plancherel measure is not uniform
(with the `f^{(n)}=1`, `f^{(2,1^{n−2})}=n−1` comparison for all n ≥ 3). Each strategy exposes the
arithmetic/insertion steps; the page is a dependency leaf (no external consumers) and its deps are
the A-page items and published suppliers already in the A-page closure. Adequate for the B role.

## 7. Decision and recording

- A page `plancherel-measure-and-asymptotic-young-diagrams`: **`sufficient`** — the planned
  definitions, results and examples cover the design's promised subject (Plancherel measure,
  normalization, RSK law, limit shape and the finite-dimensional Kerov character CLT) with adequate
  source coverage and no unmet prerequisite; §7 boundary flagged in §5.
- Recorded with `node tools/step3-decisions.mjs record-scope --run
  frontier-40-geometry-braids-rep-27 --page plancherel-measure-and-asymptotic-young-diagrams
  --decision sufficient --reason "<scope evidence; report path>"` → receipt
  `research/frontier-40-geometry-braids-rep-27-step3a-review-plancherel-measure-and-asymptotic-young-diagrams.json`.
- Stopped at the pair boundary: no scaffold edit, no item approval, no owner record.
