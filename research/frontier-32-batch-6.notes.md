# frontier-32 beta batch 6 — Lacunary Fourier Series and Sidon Sets

## Scope and plan agreement

- Task-authorised artifacts: `research/frontier-32-batch-6.pages.json`, this
  note, and `research/frontier-32-batch-6.coverage.json`.
- The generated task and `research/plan-spec.json` agree: A order `288.14014`,
  category `fourier-analysis`, and prerequisite
  `absolute-convergence-and-the-wiener-algebra-examples`; B depends on A.
  The design supplies no conflicting absolute order or prerequisite. The
  run-level Step-0 drift record says FR-4's declared closure contains FR-3,
  Parseval theory, and measure-theory L-p inequalities. No local adjudication
  was made.
- The A page has 9 items and is not split; its B companion has 4 items. This is
  below the 60-item split threshold.

## Fixed conventions and source read

- Work on `\mathbb T=\mathbb R/\mathbb Z` with normalized Haar measure and
  `e_k(x)=e^{2\pi i kx}`, as fixed by the Fourier-analysis design and the
  published `def-period-one-fourier-coefficients-partial-sums-and-convolution`.
- “Hadamard-lacunary” always means positive increasing integers
  `\lambda_{j+1}\ge q\lambda_j` for one fixed `q>1`. Growing additive gaps
  alone are explicitly not substituted.
- Grafakos was read directly at
  `https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf`:
  table of contents PDF p. 13 and §3.6, PDF pp. 242–253 / printed pp. 226–237,
  through Example 3.6.11 and before Exercises. It is the textbook treatment
  with harvestable TOC. Exact result dispositions are in the coverage ledger.
- Patadia was independently read directly at
  `https://www.researchgate.net/publication/268998052_Lacunary_Fourier_series_and_Sidon_sets`,
  PDF text pp. 1–18. Its own headings/results—including all 13 listed Sidon
  characterizations—are individually harvested and disposed in the coverage
  ledger. This treatment's HTML full-text endpoint still awaits the mechanical
  source-fetch stamp.

## Scaffolded dependency-closed claims

1. `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series`
   (`def-period-one-fourier-coefficients-partial-sums-and-convolution`): define
   a q-Hadamard sequence and finite/infinite trigonometric series whose
   frequencies lie in it.
2. `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm`
   (the preceding definition): for a finite sum on distinct lacunary
   frequencies, direct character integration gives
   `\|\sum a_j e_{\lambda_j}\|_2^2=\sum|a_j|^2`. This narrow lemma is added
   because the required Fourier Parseval result is absent from published items;
   it is genuinely used by the norm theorem and Riesz-product pairing.
3. `lem-hadamard-gaps-bound-additive-representations` (definition): for every
   fixed moment order `m`, split indices into `r=r(m,q)` residue classes with
   `q^r>m`. Within a class, equality of two `m`-term frequency sums forces
   equality of their index multisets; this is the exact bounded-multiplicity
   input for even moments. It does not falsely claim a finite count for trivial
   zero signed representations.
4. `thm-lacunary-lp-norm-equivalence` (finite Parseval lemma, additive lemma,
   Hölder): for every `0<p<∞`, finite q-Hadamard sums satisfy
   `c_{p,q}\|(a_j)\|_2\le\|\sum a_je_{\lambda_j}\|_p\le C_{p,q}\|(a_j)\|_2`.
   The constants do not depend on the finite support. Strategy: even moments
   after residue splitting; interpolation and Hölder/duality for `1\le p<2`;
   for `0<p<1`, the fourth-moment estimate plus the elementary
   Paley–Zygmund-style distribution bound supplies the lower estimate, while
   normalized-measure monotonicity supplies the upper estimate. This explicitly
   extends Grafakos's stated `1\le p<∞` theorem to the finite-sum `0<p<1`
   design requirement without treating an L-p quasi-norm as a norm.
5. `cor-lacunary-series-lp-membership-is-coefficient-ell-two` (norm theorem,
   `thm-riesz-fischer-completeness-of-l-p`, and the published `0<p<1` complete
   metric): partial sums of `\sum a_j e_{\lambda_j}` converge iff
   `(a_j)\in\ell^2`, in norm for `p\ge1` and in `d_p` for `0<p<1`.
6. `def-sidon-set-in-the-integer-dual` (published Fourier definition): define
   Sidon by the uniform finite-polynomial `\ell^1`/supremum inequality. The
   continuous formulation is then a corollary rather than an unproved
   equivalence.
7. `lem-riesz-product-for-a-hadamard-lacunary-set` (Hadamard definition and
   additive lemma): after a finite residue-class split to ratio at least 3,
   construct positive mass-one Riesz-product witnesses with prescribed first
   coefficients and no harmful collisions on the corresponding class.
8. `thm-hadamard-lacunary-sets-are-sidon` (Sidon definition, Riesz products,
   Hölder): pair a finite polynomial with those positive witnesses, then sum
   the finitely many residue-class inequalities. No finite-union theorem is
   asserted as a separate unneeded result.
9. `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients`
   (Sidon definition, positive Fejér kernel, Fejér uniform convergence): apply
   the finite Sidon inequality to Fejér polynomials and pass to the monotone
   coefficient sum.

## B-page proof commitments

- `ex-powers-of-two-form-a-hadamard-lacunary-sequence`: ratio exactly 2.
- `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary`: `n_j=j^2`
  has gaps `2j+1→∞` but ratios tending to 1.
- `ex-riesz-product-for-three-powers-of-three`: expand three 3-Hadamard
  factors, record positivity/mass one and the prescribed first coefficients.
- `cex-the-integers-are-not-a-sidon-set`: use the Rudin–Shapiro recursion,
  translated to nonzero integer frequencies if desired, to obtain `\ell^1`
  coefficient mass `2^m` with sup norm at most `2^{(m+1)/2}`. This is a
  self-contained violation of the defining uniform Sidon inequality.

## Validation record and known limits

- PASS — JSON parsing, `manifest-deps` (13 items, every `deps` explicit),
  `coverage-checklist --require-destination` (1 A page, 59 harvested results,
  no errors or warnings), and the batch `content-policy --manifest-only` run.
- PASS — whole-run `content-policy --manifest-only` across all eleven current
  `frontier-32` batch manifests: 419 scoped items, no errors or warnings.
- PASS — a temporary full-plan overlay in `/tmp`, substituting only this batch's
  two pages, passed `validate-plan`: no unresolved IDs, item/page cycles,
  forward references, B-page dependencies, or size violations. Its
  repository-wide redundant-prerequisite warnings are pre-existing and name no
  Batch 6 page or item.
- BLOCKED EXTERNALLY — `source-fetch-check --stamp` could not resolve either
  host (`EAI_AGAIN`), so it wrote no `fetch_verified` stamps. The independent
  `url-sweep --recover --fail-on-dead` also got curl DNS error 6 for both hosts
  and could not query archive recovery. This is a workspace DNS failure, not
  an HTTP failure: both full documents were read directly through the document
  reader during this batch. The original public URLs stay recorded; no
  unverified replacement or synthetic stamp has been made.

- No result about merely additive gaps, general Lambda(p)-sets, Rider/Stechkin
  sets, measure interpolation, maximal ideal spaces, random series, or
  finite unions is silently claimed. Each harvested source result has a
  specific ledger disposition.
- Grafakos's theorem is stated for `1\le p<∞`; the `0<p<1` finite-sum branch
  needs the explicit distribution argument recorded above. The series
  corollary must use the published metric, not norm terminology, below one.
- Open obligation: rerun `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-6.coverage.json --stamp` in an environment with
  external DNS. Only real full-text responses may add the two required stamps.

## Reharvest-1-b6 — 2026-09-06

- This reharvest changes only this batch's coverage ledger and these notes.
  The preceding Patadia/source-fetch paragraphs are the pre-reharvest record
  and are superseded by this section.
- Dead source confirmed:
  `https://www.researchgate.net/publication/268998052_Lacunary_Fourier_series_and_Sidon_sets`
  returned HTTP 403 in `research/frontier-32-url-liveness.json` (run record
  generated 2026-09-06T02:30:53.611Z), with `recovered: null`. A fresh
  `url-sweep --recover` attempted the original and CDX recovery but this
  workspace's shell DNS returned `EAI_AGAIN`; it did not disclose a usable
  same-document URL or complete archive. The document-reader search exposed
  only the same blocked ResearchGate public record, not a separately
  fetchable full document. The dead URL is retained as `original_url` on
  every replacement source strictly as provenance; none is represented as a
  copy of Patadia.
- Replacement full texts were opened and read at their exact ledger locators:
  Gilles Pisier, *Sidon Sets in Uniformly Bounded Orthonormal Systems*,
  `https://www.math.kent.edu/~zvavitch/RAFA2018/info_about_talks_files/Pisier.pdf`,
  PDF p. 7, “More Examples” through “Main Open Problem” (32 PDF pages);
  Daniel Rider, *Gap Series on Groups and Spheres*,
  `https://www.cambridge.org/core/services/aop-cambridge-core/content/view/473201703AAA562B9B115F7E58327869/S0008414X00040372a.pdf/gap-series-on-groups-and-spheres.pdf`,
  PDF pp. 1–2 / printed pp. 390–391, §1.1 through Theorem 1.6 (10 PDF
  pages); and Aihua Fan, Hervé Queffélec, and Martine Queffélec, *The
  Furstenberg Set and Its Random Version*,
  `https://arxiv.org/pdf/2104.08944`, PDF p. 3, pp. 11–14, and pp. 28–30
  / printed pp. 4, 12–15, and 29–31 (54 PDF pages). The pre-existing
  Grafakos §3.6 treatment remains the eligible primary treatment and was
  re-read at its exact recorded pp. 242–253 locator.
- Affected-result dispositions:
  `ex-powers-of-two-form-a-hadamard-lacunary-sequence` is now backed by
  Pisier's explicit n_k = 2^k Hadamard example;
  `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` is backed by
  Fan--Queffélec--Queffélec's Theorems 2.3--2.4, which give a sequence with
  successive gaps tending to infinity and ratios tending to one, as well as
  Grafakos's ratio definition. The planned j^2 witness stays an AI-generated
  one-line calculation (2j+1 tends to infinity and (j+1)^2/j^2 tends to 1);
  no unsupported literature assertion about that exact witness is made. The
  continuous-Sidon ell-one corollary is backed by Rider Theorem 1.1 and
  Fan--Queffélec--Queffélec §3.2. The lacunary L-p/ell-two corollary is
  backed by Grafakos Theorem 3.6.4 and Fan--Queffélec--Queffélec §3.2.
- Claim constraints are unchanged except for their clarified source boundary:
  Grafakos and the replacement literature support the p >= 1 norm theorem /
  L-one-to-L-p direction. The planned 0 < p < 1 metric-convergence branch
  must retain its explicitly stated finite-sum distribution argument and the
  published metric prerequisite; it is not attributed to any replacement
  source.
- All three replacement `fetch_verified` records were stamped from the real
  full-text web-reader responses at 2026-09-06T12:44:41+10:00. The remaining
  source-fetch validator should therefore verify existing stamps without
  inventing a network response. The post-reharvest validator results are
  appended after the runs below.

### Post-reharvest validation

- PASS — JSON parse; `coverage-checklist --require-destination`: 1 page, 37
  harvested results, 0 errors, 0 warnings; `source-backing` against the
  run liveness record: 10 authored results, every one backed; and
  `source-fetch-check`: 4/4 sources fetch-verified.
- PASS — `source-fetch-check --stamp`: 4/4 sources fetch-verified, 0 newly
  stamped. This confirms the real full-text stamps are recognized without
  having the validator manufacture a network response.
- PASS — `manifest-deps research/frontier-32-batch-6.pages.json`: 13 items,
  0 normalized, 0 errors; every planned item continues to carry an explicit
  dependency array.
- EXTERNAL-ENVIRONMENT LIMIT — `url-sweep --recover --fail-on-dead`, writing
  only `/tmp/frontier-32-batch-6-reharvest-liveness.json`, exited 1 because
  shell curl could not resolve any of the four hosts (error 6). It reported
  0/4 live and no archive recovery for the new URLs for that DNS reason, not
  an HTTP response. Each replacement PDF had already been independently
  opened in the web reader and stamped from that full text; the batch source
  and fetch gates therefore pass. A DNS-capable liveness runner should repeat
  this one mechanical sweep before publishing a refreshed run-wide liveness
  record; no workflow-state or run-wide liveness artifact was modified here.

## Step-3 fix pass

- The controlling review is
  `research/frontier-32-alpha-b-step3-scaffold-review.md`, Batch 6, with the
  companion verdict entry for
  `lacunary-fourier-series-and-sidon-sets` in
  `research/frontier-32-alpha-b-step3-verdicts.json`. The reviewer supplies
  no numbered finding for this batch: its exact verdict is `sufficient`.
  **Disposition:** accepted; no manifest or coverage repair is warranted.
  This is not a renamed or newly numbered finding.
- **Evidence checked:** the review confirms the finite Parseval lemma, the
  bounded-moment residue split, the separate $0<p<1$ distribution argument,
  the residue-class Riesz-product proof, and the Fejer passage; it also
  records that all 11 Batch-6 decline rows stand. The design at
  `research/plan-fourier-analysis-track.md:331-356` requires precisely the
  eight named A-route claims and four B leaves. The current manifest retains
  those design IDs plus the necessary local Parseval lemma (13 items total),
  every item has an explicit `deps` array, and no A item depends on B.
- **Source re-read and fetch evidence:** Grafakos, §3.6, PDF pp. 242–253
  (Definition 3.6.1; Theorems 3.6.4 and 3.6.6; Definition 3.6.8 and
  Proposition 3.6.9) at
  `https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf`;
  Pisier, “More Examples,” PDF p. 7 at
  `https://www.math.kent.edu/~zvavitch/RAFA2018/info_about_talks_files/Pisier.pdf`;
  Rider, §1.1 and Theorem 1.1, PDF p. 1 / printed p. 390 at
  `https://www.cambridge.org/core/services/aop-cambridge-core/content/view/473201703AAA562B9B115F7E58327869/S0008414X00040372a.pdf/gap-series-on-groups-and-spheres.pdf`;
  and Fan--Queffélec--Queffélec, rate-of-increase definitions at PDF p. 3
  / printed p. 4, Theorems 2.3--2.4 at PDF pp. 11--14 / printed pp. 12--15,
  and §§3.1--3.2 at PDF pp. 28--30 / printed pp. 29--31, at
  `https://arxiv.org/pdf/2104.08944`.
  The captured source claims agree with the existing per-result dispositions;
  no result was removed or reclassified. `source-fetch-check` confirms all
  four existing full-text receipts.
- **Changed scaffold record:** none. `research/frontier-32-batch-6.pages.json`
  and `research/frontier-32-batch-6.coverage.json` are deliberately retained
  byte-for-byte; this notes entry is the only Step-3-fix artifact change.
- **Validation:** PASS — `coverage-checklist --require-destination` (1 A
  page, 37 harvested results, 0 errors/warnings); `source-fetch-check` (4/4
  fetch-verified); `manifest-deps` (13 items, 0 errors); whole-run
  `content-policy --manifest-only` (671 scoped items, 0 errors/warnings); and
  `validate-plan research/plan-spec.json` (declared order acyclic and
  consistent; no relevant unresolved ids, cycles, forward references, or
  B-page dependencies).

## Step-5 authoring

- **Authored draft items:**
  `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series`,
  `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm`,
  `lem-hadamard-gaps-bound-additive-representations`,
  `thm-lacunary-lp-norm-equivalence`,
  `cor-lacunary-series-lp-membership-is-coefficient-ell-two`,
  `def-sidon-set-in-the-integer-dual`,
  `lem-riesz-product-for-a-hadamard-lacunary-set`,
  `thm-hadamard-lacunary-sets-are-sidon`,
  `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients`,
  `ex-powers-of-two-form-a-hadamard-lacunary-sequence`,
  `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary`,
  `ex-riesz-product-for-three-powers-of-three`, and
  `cex-the-integers-are-not-a-sidon-set`. The two planned pages were written
  at `library/fourier-analysis/lacunary-fourier-series-and-sidon-sets.md` and
  `library/fourier-analysis/lacunary-fourier-series-and-sidon-sets-examples.md`.
  Every new page and item is `draft`.
- **Conventions and proof decisions:** work is on normalized
  $\mathbb T=\mathbb R/\mathbb Z$ with $e_k(x)=e^{2\pi ikx}$; Hadamard means
  one fixed ratio $q>1$. The finite $L^2$ identity is proved by direct
  character integration. Even moments use a residue split with $q^r>m$ and
  equal index multisets. The $0<p<1$ branch is not attributed to Grafakos: it
  uses the fourth-moment distribution estimate for the lower bound and
  $t^p\le1+t^2$ on the normalized circle for the upper bound. Series
  convergence is stated in the published $d_p$ metric below one.
- **Sidon provenance rationale:** Grafakos §3.6 (PDF pp. 242–253) supplies the
  Hadamard, moment, Riesz-product, and finite-Sidon route; Rider Theorem 1.1
  (PDF p. 1 / printed p. 390) backs the continuous-Sidon coefficient
  conclusion; Pisier PDF p. 7 backs the powers-of-two example; and
  Fan--Queffélec--Queffélec PDF pp. 11–14 and 28–30 supports the gap boundary
  and its context. The exact URLs and locators remain in the coverage ledger.
- **Narrowed/dropped claims:** none. In particular, no claim about merely
  growing gaps, general Lambda(p) sets, finite unions of Sidon sets, or a
  norm structure for $0<p<1$ was added.
- **Proof evidence:** `research/frontier-32-batch-6.proof-contracts.json`
  records all 11 proof-bearing items, their actual numbered proof steps, and
  every standard boundary disposition. Definitions are correctly excluded as
  non-proof-bearing.
- **Validation:** PASS — `node tools/tsx-run.mjs tools/precheck.mts` with all
  13 manifest-explicit item paths (11 proof-bearing bodies checked, 0
  failures); `node tools/validate-plan.mjs research/plan-spec.json` (acyclic,
  no item cycles, forward references, B-page dependencies, or unresolved ids);
  `node tools/content-policy.mjs research/frontier-32-batch-6.pages.json`
  (13 scoped items, 0 errors/warnings); and
  `node tools/proof-contract.mjs research/frontier-32-batch-6.proof-contracts.json --strict`
  (11/11 contracts, 0 errors/warnings). `git diff --check` was also clean.
  No blocker is known.
