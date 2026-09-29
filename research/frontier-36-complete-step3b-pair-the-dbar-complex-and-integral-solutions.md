# Step 3b Audit and Authoring — The Dolbeault Complex and Integral Solutions

- Run: `frontier-36-complete`
- Pair: `the-dbar-complex-and-integral-solutions` (A) and `the-dbar-complex-and-integral-solutions-examples` (B)
- Batch: 29
- Dispatch: `alpha-high`, label `step3b-pair-the-dbar-complex-and-integral-solutions-90441f6d1a01aa4c`
- Status: complete. The current dispatch re-audited all 18 same-run authored
  items in the generated exact dependency order, made two local proof-text
  repairs, refreshed the four receipts that `itemDecision` reported stale
  against current inputs (the recorded input changes in that window are the
  `def-bigraded-complex-differential-forms` notation fix and the later Batch 29
  manifest rewrite) plus the two repaired receipts, and re-ran every batch
  check. The pair scope receipt is current
  (`sufficient`); the two open obligations (published Hartogs gap, pre-splice
  prerequisite mismatch) are carried forward below.

## Prior same-run dispatch record

The earlier label `17607a6d3d7196f4` authored this pair and left the content and
contracts below. Its report is retained as a mathematical navigation aid, not
as proof that the current audit is complete. The current dispatch began with
those files already present and verifies their claims, dependencies, citations,
contracts, and decisions again. In particular, the previous “no item/page file
existed” statement describes that earlier dispatch only.

### Prior dispatch starting state (historical)

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the SC-5 design, the current plan, Batch 29 manifest and coverage, the complete Step 3a report and receipt, owner direction, Batch 29 Step 1 notes, dependency input, and generated Step 3b task.
- The Step 3a receipt is current for the existing A/B inventory and says `sufficient` (hash `16b5dd8a…c9b`). The pair has 18 scaffolded items; no owned item file or A/B page existed before this dispatch.
- The assigned order is preserved verbatim in the task. Batch 29 contains this pair alone. Its cross-batch dependency input is `[]`; the item inputs outside this pair are published, and the proof audit so far has found no missing in-run supplier.
- SC-5 in `research/plan-complex-analysis-track.md` at §SC-5 (lines 4152–4195) promises ten A results and six B calculations/counterexamples. Batch 29 adds the two needed local A suppliers: bounded-C¹ complex Stokes and the parameterized one-variable Cauchy transform. No new item or page is currently required.
- **Step 4 plan mismatch to reconcile:** the generated Beta task `research/frontier-36-complete-beta-29.task.md` lists eight page prerequisites. The current `research/plan-spec.json` and Batch 29 manifest both list five: `holomorphic-inverse-and-weierstrass-preparation`, `domains-of-holomorphy-and-pseudoconvexity`, `integration-of-forms-and-the-general-stokes-theorem`, `distributions-test-functions-and-differentiation`, and `euclidean-surface-measure-divergence-and-green-identities`. Step 3a also records that the Beta list is stale/expanded. This is reported for serial Step 4 reconciliation; no shared plan was edited.
- The old source coverage names Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §§4.1–4.4 and Ch. 5 §5.1, plus Jabbari §§3.2.1–3.2.5 and MIT 18.117 Lectures 1–4. I independently read Lebl's complete relevant arguments in the PDF: Cauchy–Pompeiu (Theorem 4.1.1, printed pp. 130–131), compact support (Theorem 4.2.1, pp. 132–134), Hartogs (Theorem 4.3.1, pp. 135–136), the one-variable transform and Dolbeault–Grothendieck lemma (Lemma 4.4.6 and Lemma 4.4.7, pp. 140–143), global polydisc solvability (Theorem 4.4.5, pp. 138–144), the type decomposition (Definition 4.4.1, p. 137), and the Bochner–Martinelli kernel/formula (Theorem 5.1.1, pp. 157–159). Exact URLs and arguments are recorded item by item below.
- The Stokes supplier is explicit about full AC in its statement because its published divergence input assumes `AC_ω`; full AC supplies that weaker premise. Every dependent result will retain `Assume AC` and `def-axiom-of-choice`. The bigraded identities, quotient definition, and explicit algebraic examples remain choice-free.

## Published concern to the owner

`thm-hartogs-extension-across-compact-holes` on `the-hartogs-phenomena` has a confirmed proof gap, already detailed in Batch 29 Step 1 notes and the Step 3a report: Proof step 1.1 invokes one shell extension as if it agreed on every component of `P_j ∩ (Ω \\ K)`, while its published supplier `lem-propagation-and-gluing-of-hartogs-extensions` requires agreement on all of `U_j ∩ G`. Its published supplier `lem-local-hartogs-extension-across-polydisc-shells` provides only the one-shell extension. Confidence: 1 (the required all-component agreement is absent from the cited argument). Recommended repair: after the new `cor-hartogs-extension-dbar-proof` is fully authored and audited, replace the published proof by a dependency on that corollary, or add a separately proved all-component agreement lemma with adequate hypotheses. This pair does not depend on the defective published result. The canonical published-consumer ledger remains untouched for its serial reconciler.

## Item checkpoints

### Current dispatch re-audit checkpoints — `90441f6d1a01aa4c`

1. **`def-bigraded-complex-differential-forms` — complete, receipt retained.**
   Re-read the item and all six declared suppliers. The invertible real-to-complex
   cotangent-basis change gives unique type components; the Wirtinger formulas
   are the two projections of the coordinate formula for `d`; holomorphic
   pullback preserves type and naturality of `d` identifies the separate
   projections. Lebl v4.4, Ch. 4 §4.4, Definition 4.4.1, PDF lines 11136–11160,
   gives the construction, not the coordinate-independence proof. The completed
   local proof and eight case dispositions remain current; the existing
   `repaired`, confidence-1 receipt is hash-current. No AC and no unresolved
   gap. **Next:** `lem-c-one-stokes-for-complex-euclidean-domains`.

2. **`lem-c-one-stokes-for-complex-euclidean-domains` — complete, receipt
   retained.** Re-read the C1 statement/proof and its four declared suppliers.
   Under full AC, the published divergence theorem’s `AC_ω` premise is supplied;
   its hypotheses match the bounded C1 domain and real/imaginary parts of the
   coefficient field. The coefficient expression gives `dα=(div A)dV`, and
   outward-normal-first evaluation gives `(A·ν)dS`. The cited coordinate formula
   is stated for smooth forms; this proof uses the same first-derivative
   coefficient computation directly for the stated C1 coefficients. AC is the
   only choice assumption/use. The existing `accept`, confidence-1 receipt and
   exact contract are current; no statement/dependency repair is needed. No
   unresolved gap. **Next:** `def-bochner-martinelli-kernel`.

3. **`def-bochner-martinelli-kernel` — complete, current receipt recorded.**
   Compared the interleaved wedge formula and normalization with Lebl v4.4,
   Ch. 5 §5.1, PDF lines 12121–12139. The formula has bidegree `(n,n−1)`;
   off-diagonal coefficients are smooth; near the diagonal their size is at
   most `r^(1−2n)`, so the polar radial integral is `∫₀^ε 1 dr=ε`; for `n=1`
   it is exactly `dζ/(2πi(ζ−z))`. The only dependency,
   `def-bigraded-complex-differential-forms`, supports the bidegree use. AC is
   absent. Explicit-path precheck, renderer, and strict item contract passed;
   recorded `accept`, confidence 1. No unresolved gap. **Next:**
   `thm-cauchy-pompeiu-formula`.

4. **`thm-cauchy-pompeiu-formula` — complete, current receipt recorded.**
   Read Lebl v4.4, Ch. 4 §4.1, Theorem 4.1.1 and its full proof, printed
   pp. 130–131, PDF lines 10628–10751. The local argument checks the
   derivative wedge sign, the negatively oriented inner circle, the
   `O(r⁻¹)` area singularity and its `2πi f(z)` limit, then gives both area
   conventions with the correct minus sign relative to `dA`. Its four current
   dependencies are the form/type convention, local complex Stokes, full AC,
   and the Wirtinger derivative. AC is used only for Stokes. Explicit-path
   precheck, renderer and strict contract passed; recorded `accept`, confidence
   1. No unresolved gap. **Next:**
   `thm-d-dbar-decomposition-and-identities`.

5. **`thm-d-dbar-decomposition-and-identities` — complete, current receipt
   recorded.** Checked the decomposition and identities from the three direct
   dependencies: type projections from the definition, `d²=0`, and the real
   graded-derivation law. Real/imaginary decomposition extends the latter two
   to complex coefficients. The three terms of `d²η` occupy distinct
   bidegrees; projecting the product rule yields the two signed rules. Endpoint
   terms vanish by the stated out-of-range convention. Lebl v4.4, Ch. 4 §4.4,
   Definition 4.4.1 and Exercises 4.4.1–4.4.2, printed p. 137, states these as
   exercises; it is not used as proof. Choice-free. Explicit-path precheck,
   renderer and strict contract passed; recorded `accept`, confidence 1. No
   unresolved gap. **Next:** `ex-polynomial-dbar-solution`.

6. **`ex-polynomial-dbar-solution` — complete, receipt retained.** Re-derived
   the two displayed identities directly: `\bar\partial u=2\bar z_1d\bar z_1+z_1d\bar z_2=g`
   from the two nonzero Wirtinger derivatives, and
   `\bar\partial g=2\,d\bar z_1\wedge d\bar z_1=0` by alternation. Both
   declared dependencies (the type definition and the Wirtinger operators)
   carry the exact steps cited. The example is a permitted `ai-altered` leaf;
   no AC. **Next:** `def-dolbeault-cohomology-domain`.

7. **`def-dolbeault-cohomology-domain` — stale receipt refreshed (`accept`).**
   The four-step proof checks out: `B\subseteq Z` from `\bar\partial^2=0` with
   the stated `q=0`/`q=n` endpoint conventions, restriction commuting with
   `\bar\partial` termwise, representative independence, and functoriality of
   the induced maps. The receipt had been invalidated only by the
   `def-bigraded-complex-differential-forms` notation fix (04:50 vs 05:38);
   the item text is unchanged. Choice-free. Current receipt: `accept`,
   confidence 1, both dependency IDs. **Next:**
   `lem-cauchy-transform-with-smooth-parameters`.

8. **`lem-cauchy-transform-with-smooth-parameters` — stale receipt refreshed
   (`accept`).** Re-verified: step 1.1 applies the compact-set bump on
   `K=D_k'\Subset W=D_k`; step 1.2 translates `\eta=\zeta-z_k`, fixes the
   singularity at `\eta=0`, and justifies every real parameter derivative by
   the uniform compact-support modulus with `\int_{|\eta|\le R}|\eta|^{-1}dA=2\pi R<∞`;
   step 2.1 obtains `\partial_{\bar z_k}T_kg` by that differentiation theorem
   and evaluates the resulting integral by Cauchy–Pompeiu on a disc `E` with
   zero boundary term (the slice is supported inside `E`); steps 2.2/2.3/3.1
   give the selected transverse equations and the compactly supported global
   case. Full AC is used only to invoke Cauchy–Pompeiu. Current receipt:
   `accept`, confidence 1, all four dependency IDs. **Next:**
   `thm-bochner-martinelli-integral-formula`.

9. **`thm-bochner-martinelli-integral-formula` — stale receipt refreshed
   (`accept`).** Re-computed the load-bearing identities: `\sum_j\partial c_j/\partial\bar\zeta_j=nr^{-2n}-nr^2r^{-2n-2}=0`
   gives `\bar\partial_\zeta\Omega_n=0`, while `\partial_\zeta(f\Omega_n)=0`
   by bidegree, hence `d(f\Omega_n)=\bar\partial f\wedge\Omega_n` off the
   diagonal; `d\Psi_n=n\Theta` with `\Theta=(2i)^ndV` and
   `\operatorname{vol}(B_\epsilon)=\pi^n\epsilon^{2n}/n!` yields
   `\int_{\partial B_\epsilon}\Omega_n=1`; the `O(r^{1-2n})` bound and the
   punctured Stokes/limit argument (steps 1.2, 2.1–3.1) give the formula. The
   receipt had been invalidated by the `def-bigraded` notation fix recorded
   one minute earlier; item text unchanged. AC is used only for Stokes and the
   countable-choice premises of the measure suppliers (14 dependency IDs).
   **Next:** `cex-nonclosed-dbar-form-has-no-potential`.

10. **`cex-nonclosed-dbar-form-has-no-potential` — repaired, receipt renewed.**
    Repaired the section headings to the SCHEMA counterexample convention
    (`Statement` → `Statement refuted`, `Proof` → `Counterexample`); the
    mathematics is unchanged and re-verified: `\bar\partial g=d\bar z_1\wedge d\bar z_2`
    is a nonzero basis form at every point, and `\bar\partial^2=0` rules out a
    smooth potential on every nonempty open `U`. Precheck, rendering and the
    strict batch contract pass after the repair; choice-free; decision
    `repaired`, confidence 1, both dependency IDs. **Next:**
    `ex-cauchy-pompeiu-compact-support`.

11. **`ex-cauchy-pompeiu-compact-support` — complete, receipt retained.**
    Re-checked the calculation: `f=h(1-|z|^2)` with `h(t)=(\max\{t,0\})^2` is
    `C_c^1`; `\partial_{\bar\zeta}f=-2\zeta(1-|\zeta|^2)` on `D`; the sphere
    mass `\sigma(S^1)=2\pi` follows from `\operatorname{cont}(\overline D)=\pi`,
    the Jordan/Lebesgue transfer and nullity of `\{0\}`; polar integration gives
    `\int_D(1-|\zeta|^2)dA=\pi/2`, so the area term is `1=f(0)`. Full AC is
    declared and used for Cauchy–Pompeiu and the countable-choice measure
    premises. Decision retained: `repaired`, confidence 1, ten dependency IDs.
    **Next:** `ex-dbar-on-elementary-functions-and-forms`.

12. **`ex-dbar-on-elementary-functions-and-forms` — complete, receipt
    retained.** All four displayed derivatives verified coefficientwise
    (`\partial f=2z_1\bar z_2dz_1`, `\bar\partial f=2\bar z_1d\bar z_1+z_1^2d\bar z_2`,
    and their wedges with `dz_2`), including the retained sign
    `d\bar z_2\wedge dz_2=-dz_2\wedge d\bar z_2`. Choice-free; `ai-altered`
    leaf. Decision retained: `repaired`, confidence 1, three dependency IDs.
    **Next:** `thm-compact-support-dbar-solution-cn`.

13. **`thm-compact-support-dbar-solution-cn` — complete, receipt retained.**
    Re-verified the Lebl 4.2.1 route: the closedness identities
    `\partial_{\bar z_a}g_b=\partial_{\bar z_b}g_a`; `u=T_1g_1` smooth with
    `\partial_{\bar z_1}u=g_1`; `\partial_{\bar z_j}u=T_1(\partial_{\bar z_j}g_1)=T_1(\partial_{\bar z_1}g_j)=g_j`
    by Cauchy–Pompeiu on a large disc with zero boundary term; holomorphy of
    `u` on `\Omega`, vanishing on the half-space `\{\operatorname{Re}z_2>R\}`,
    hence on the unique unbounded component `C_\infty`; compact support and
    uniqueness by the identity theorem. AC is declared and used only for the
    transform/Cauchy–Pompeiu suppliers. Decision retained: `repaired`,
    confidence 1, 19 dependency IDs. **Next:** `thm-dolbeault-lemma-polydisc`.

14. **`thm-dolbeault-lemma-polydisc` — complete, receipt retained.** Checked
    the descending-index induction: the decomposition `\eta=d\bar z_k\wedge\tau+\theta`
    with `k` the largest barred index; `0=-d\bar z_k\wedge\bar\partial\tau+\bar\partial\theta`
    forces `\partial_{\bar z_\ell}\tau=0` for `\ell>k`; `T_k\tau` is defined on
    a polydisc still containing `P'` (only the current coordinate shrinks);
    `\eta_{k-1}=\theta-\delta_k` is closed with strictly smaller largest barred
    index; after at most `n` transforms the residual has type `(p,q>0)` with no
    barred basis factor and vanishes. AC is the transform premise. Decision
    retained: `repaired`, confidence 1, four dependency IDs. **Next:**
    `ex-bochner-martinelli-on-a-ball`.

15. **`ex-bochner-martinelli-on-a-ball` — complete, receipt retained.** The
    constant moment is the holomorphic case of the formula applied to `f=1`
    at `z=0`; the coordinate moments follow from `R_t^*\Omega_n=\Omega_n`,
    `R_t^*(\zeta_j\Omega_n)=e^{it}\zeta_j\Omega_n` (coefficient `e^{-it}`,
    wedge part `e^{it}`) and the orientation-preserving change of variables on
    the compact sphere, taking `t=\pi`. The `n=1` case is explicitly covered.
    AC is declared; decision retained: `repaired`, confidence 1, four
    dependency IDs. **Next:** `cor-hartogs-extension-dbar-proof`.

16. **`cor-hartogs-extension-dbar-proof` — repaired, receipt renewed.**
    Fixed the step 3.1 justification: a point outside `\Omega` has a
    neighborhood disjoint from `\operatorname{supp}\chi` because
    `\operatorname{supp}\chi` is a closed subset of the open set `\Omega` (the
    text had misattributed this to `K\subseteq\operatorname{supp}\chi`). The
    rest was re-verified end to end: the maximum radius `r` and the explicit
    outer point `w`; the bump cutoff; compact support and closedness of
    `g=\bar\partial f_0`; `u=0` on `E_R=\{\|z\|>R\}` (the unique unbounded
    component); `h=u+\chi f` holomorphic on connected `G` and vanishing on
    `\Omega\cap E_R`, hence `h\equiv0`; `F=f_0-u` holomorphic on `\Omega` with
    `F=f` on `G`; uniqueness by the identity theorem. Full AC is declared and
    used only for the compact-support theorem. Decision `repaired`, confidence
    1, 19 dependency IDs. **Next:**
    `thm-dolbeault-cohomology-polydisc-vanishes-positive-q`.

17. **`thm-dolbeault-cohomology-polydisc-vanishes-positive-q` — complete,
    receipt retained.** Re-verified both branches of the exhaustion argument.
    For `q>1`: primitives `\omega_k` on `P_{k+2}`, comparison with `\sigma` on
    `P_{k+3}`, the correction `v` on `P_{k+1}`, the cutoff `\chi` equal to one
    near `\overline{P_k}` with support in `P_{k+1}`, and
    `\omega_{k+1}=\sigma+\bar\partial(\chi v)` agreeing with `\omega_k` on
    `P_k`. For `q=1`: the closed `(p,0)` differences are holomorphic, and
    Taylor approximation with coefficient error `<2^{-k}` on `\overline{P_k}`
    makes the sequence converge locally uniformly to a smooth solution
    (`F11`–`F12`, `\bar\partial` of the holomorphic correction zero). Full AC
    is declared and used for the recursive choices and the local lemma.
    Decision retained: `repaired`, confidence 1, 15 dependency IDs. **Next:**
    `ex-dbar-cutoff-extension-at-a-puncture`.

18. **`ex-dbar-cutoff-extension-at-a-puncture` — complete, receipt retained.**
    Re-verified: the cutoff makes `f_0` smooth across the puncture and
    `\operatorname{supp}g\subseteq K_\chi\subset B(0,1)` with `g=\bar\partial f_0`
    closed; `G` is open and path-connected through the unit sphere; `E=\{\|z\|>1\}`
    is the unique unbounded component so `u=0` there; `h=u+\chi f` is
    holomorphic on `G` and vanishes on the nonempty open annulus
    `A=\{1<\|z\|<2\}`, hence `h\equiv0` and `F=f_0-u=f` on `G`; `F` is
    holomorphic on `B(0,2)`. The constant case gives `u=-\chi` and `F\equiv1`,
    and `f\equiv0` gives `F\equiv0`. Full AC is declared and used only for the
    compact-support solution theorem. Decision retained: `repaired`,
    confidence 1, 19 dependency IDs.

### Current dispatch repairs and checks

- Repairs made in this dispatch (both minimal, statement and dependency
  inventory unchanged, so no dependency levels, page scope hash, manifest
  statements or consumer hashes move):
  1. `cex-nonclosed-dbar-form-has-no-potential`: headings aligned to the SCHEMA
     counterexample convention (`Statement refuted` / `Counterexample`).
  2. `cor-hartogs-extension-dbar-proof`: step 3.1's stated reason corrected to
     `\operatorname{supp}\chi` being a closed subset of the open set `\Omega`.
- Receipts refreshed: the four that `itemDecision` reported stale against
  current inputs before re-audit (`def-dolbeault-cohomology-domain`,
  `lem-cauchy-transform-with-smooth-parameters`,
  `thm-bochner-martinelli-integral-formula`,
  `cex-nonclosed-dbar-form-has-no-potential` — the last as `repaired` for the
  heading change), plus `cor-hartogs-extension-dbar-proof` as `repaired`. The
  recorded input changes in the window are the def-bigraded notation fix
  (19:38 UTC, immediately after three of the four receipts) and the Batch 29
  manifest rewrite at 22:34 UTC. All
  other receipts are hash-current and were retained; `itemDecision` reports
  all 18 items closed at confidence 1, and the pair scope decision is current
  (`sufficient`, hash `4f45ad26…`).
- Checks run in this dispatch (all pass):
  - `tools/precheck.mts` on all 18 explicit item paths: 18 checked, 0 failing.
  - `tools/rendercheck.mjs` on the 18 items and both pages: 20 files, YAML and
    KaTeX clean.
  - `tools/content-policy.mjs research/frontier-36-complete-batch-29.pages.json`:
    18 scoped items, 0 errors, 0 warnings.
  - `tools/proof-contract.mjs research/frontier-36-complete-batch-29.proof-contracts.json --strict`:
    0 errors, 0 warnings, 18/18 items.
  - `tools/item-dependency-levels.mjs check --run frontier-36-complete`:
    926 items across 60 pages, maximum level 18.
  - `tools/validate-plan.mjs research/plan-spec.json`: exit 0; page order
    acyclic and consistent; no item-level cycles, forward references, B-page
    dependencies or unresolved ids among pages carrying item lists.
  - `tools/author-check.mts frontier-36-complete 29`: all four gates green
    (receipt `research/frontier-36-complete-author-check-29.json`,
    fingerprint `7cfc4425…`).

### Open obligations carried to handoff

- **Published defect (owner-held):** `thm-hartogs-extension-across-compact-holes`
  on `the-hartogs-phenomena`, proof step 1.1 — the finite shell cover does not
  ensure that every component of `P_j\cap G` meets the cited shell; the
  published propagation/gluing lemma requires agreement on all of `U_j\cap G`
  while the shell-extension lemma gives only one-shell agreement. Confidence 1.
  Route to that item's owner. A repair may use
  `cor-hartogs-extension-dbar-proof` only with its explicit full-AC premise
  propagated, or must strengthen the shell hypothesis and prove agreement
  componentwise. `research/published-consumer-supplier-ledger.md` was not
  edited here; its serial reconciler owns the entry.
- **Step 4 pre-splice mismatch:** the generated Beta task
  `research/frontier-36-complete-beta-29.task.md` lists eight page
  prerequisites; `research/plan-spec.json` and the current Batch 29 manifest
  list five (`holomorphic-inverse-and-weierstrass-preparation`,
  `domains-of-holomorphy-and-pseudoconvexity`,
  `integration-of-forms-and-the-general-stokes-theorem`,
  `distributions-test-functions-and-differentiation`,
  `euclidean-surface-measure-divergence-and-green-identities`). The task also
  omits the last and adds four pages already reached transitively. No shared
  plan or prose was changed.

### Before item 1 — `def-bigraded-complex-differential-forms`

- **Claim and conventions:** On open `U ⊂ ℂⁿ`, complex-valued smooth forms decompose uniquely by the basis `dzᴵ ∧ dbar zᴶ`; `∂` and `dbar` are the type projections of `d`, equivalently the Wirtinger coefficient formulas. Holomorphic coordinate changes preserve the types and operators.
- **Scaffold audit:** Claim is sound. The coordinate change `dx_j,dy_j ↔ dz_j,dbar z_j` is invertible over `ℂ`; holomorphic pullbacks send `dz` to `dz`-linear combinations and `dbar z` to `dbar z`-linear combinations. Naturality of `d` then makes both projections independent of the chosen holomorphic chart. I will make the coefficient formulas and the `0 ≤ p,q ≤ n` convention explicit in the item.
- **Dependencies examined:** `def-smooth-differential-k-form`, `prop-local-coordinate-expression-for-a-differential-form`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `def-wirtinger-operators-in-several-complex-variables`, `thm-chain-rule-for-holomorphic-maps-in-several-variables`, `thm-the-exterior-derivative-commutes-with-pullback`. Read their definitions/statements and full local proofs; each applies to the stated smooth Euclidean/holomorphic-map setting.
- **Source locator:** Lebl v4.4, Ch. 4 §4.4, Definition 4.4.1, printed p. 137 (PDF locator opened at lines 11133–11170); Jabbari §3.2.1. The cited exercise statements are not treated as proofs; the item proves the identities locally from the published exterior-derivative facts.
- **AC / decisions / checks:** Choice-free; no AC dependency. No local supplier addition is needed. At this checkpoint the item was being authored and had no Step 3 item decision; see the completion record immediately below.

**Completion checkpoint:** Authored `items/def-bigraded-complex-differential-forms.md` with the complex cotangent-basis decomposition, coefficient formulas, and coordinate-change argument. Updated the manifest's proof provenance to `ai-altered`: the scaffold's `not-applicable` value did not cover its explicit coordinate-independence claim. The item proof remains choice-free. Lebl v4.4, Ch. 4 §4.4, Definition 4.4.1, p. 137 supports the construction; the proof itself derives the identities from earlier library inputs. Explicit-path precheck passed; strict proof-contract check for this ID passed with six exact dependency excerpts and all eight boundary dispositions. Step 3 decision: `repaired`, confidence 1, for the provenance correction and completed proof. No mathematical gap remains.

**Dependency recheck during item 9:** I caught a notation defect in the completed change-of-basis line: it had `i,dy_j` in place of `i\,dy_j` (and similarly for the conjugate differential). Corrected it to `dz_j=dx_j+i\,dy_j` and `d\bar z_j=dx_j-i\,dy_j`. Also converted its two multiline displays to single-line displays after explicit rendering exposed them. Explicit precheck, rendering, and strict contract now pass; refreshed the item decision as `repaired`, confidence 1, with the same six dependencies.

### Item 2 — `lem-c-one-stokes-for-complex-euclidean-domains`

- **Claim and conventions:** Under full AC, for a bounded C¹ domain in real dimension `m≥2` and a complex C¹ `(m−1)`-form up to the closure, outward-normal-first trace gives `∫∂D α=∫D dα`. `AC` is stated because the published divergence and surface-integration inputs require `ACω`.
- **Scaffold audit:** The direct strategy is sound. Wrote the form uniquely as contraction of the oriented volume form with a complex coefficient field, computed the divergence coefficient identity and boundary normal trace, and applied the divergence theorem separately to real and imaginary parts. Full AC directly supplies the countable-choice premise required by the published integration convention. The boundary is compact because it is closed and bounded.
- **Dependencies and exact uses:** `def-axiom-of-choice` (Definition, “Every family of nonempty sets has a choice function”; step 2.1 discharges `ACω`); `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` (Statement: `ACω`, bounded C¹ domain, real C¹ field, flux identity and finiteness; step 2.1); `def-surface-integral-on-a-compact-c-one-hypersurface` (Definition: `ACω` convention and signed integral; steps 1.2 and 2.1); `thm-local-coordinate-formula-for-the-exterior-derivative` (Statement coordinate formula; step 1.1). Direct source excerpts and their exact step uses are in the item contract.
- **External source:** Lebl v4.4, Ch. 4 §4.1, Theorem 4.1.1, printed pp. 130–131, supplies the one-variable Cauchy–Pompeiu context. This local Stokes proof derives the needed complex-form identity from the published library divergence theorem and surface convention.
- **Decision and checks:** The mathematical scaffold is sound. Explicit-path precheck passed; strict proof-contract passed with all eight boundary dispositions. Choice is used exactly as stated; no other selections occur. Step 3 decision: `accept`, confidence 1, all four examined dependency IDs. No unresolved gap.
- **Next:** audit and author `def-bochner-martinelli-kernel`.

### Item 3 — `def-bochner-martinelli-kernel`

- **Claim and conventions:** The displayed normalized kernel is an `(n,n−1)` form in `ζ`, smooth away from `ζ=z`, and its pairings with smooth complementary `(0,1)` forms are locally absolutely integrable at the diagonal. For `n=1`, it is `dζ/(2πi(ζ−z))`. The real orientation is `dx₁∧dy₁∧⋯∧dxₙ∧dyₙ`.
- **Scaffold audit:** Formula and bidegree are consistent with Lebl's convention. With `w=ζ−z`, each coefficient is bounded by `|w|^{1−2n}`; multiplying by polar volume `r^{2n−1}dr` gives a bounded radial density near zero. In dimension one the sole term omits `d\bar ζ`, leaving `dζ`, with `\bar w/|w|²=1/w`. The title's “normalized” constant is verified by the following Bochner–Martinelli formula item, which computes the sphere integral; it is not treated as an unproved normalization here.
- **Dependency and use:** `def-bigraded-complex-differential-forms`, Definition, exact excerpt “the direct sum decomposition,” supplies the separated holomorphic/antiholomorphic cotangent degrees used in step 1.1. No AC is assumed or used.
- **Source locator:** Lebl v4.4, Ch. 5 §5.1, kernel definition, printed p. 157 (PDF p. 156), PDF lines 12121–12139 at https://www.jirka.org/scv/scv.pdf. The proof's independent sphere-normalization calculation is at printed pp. 158–159, PDF lines 12265–12349.
- **Decision and checks:** Corrected manifest proof provenance from `not-applicable` to `ai-altered`, since bidegree, smoothness, integrability, and the one-variable formula are derived claims. Authored and checked those claims. Explicit-path precheck, explicit-path rendering, and strict item-specific proof-contract passed; contract covers all eight boundary cases. Step 3 decision: `repaired`, confidence 1, dependency `def-bigraded-complex-differential-forms`. No gap remains.
- **Next:** audit and author `thm-cauchy-pompeiu-formula`.

### Item 4 — `thm-cauchy-pompeiu-formula`

- **Claim and conventions:** Under AC, for bounded `D⊂C` with C¹ boundary, `f∈C¹(\bar D)`, and `z∈D`, the formula is `f(z)=(2πi)⁻¹∮∂D f(ζ)/(ζ−z)dζ +(2πi)⁻¹∫D f_{\bar ζ}/(ζ−z)dζ∧d\bar ζ`. Since `dζ∧d\bar ζ=−2i dA`, the area form has coefficient `−1/π`. Boundary orientation is outward-normal-first.
- **Scaffold audit:** The statement and four dependencies are sound. Independently differentiated `f(ζ)/(ζ−z)dζ` away from its pole, kept the inner circle's negative orientation in Stokes, proved absolute integrability from `|f_{\bar ζ}|/|ζ−z|≤C/r`, and computed the inner-circle limit `2πi f(z)`. If puncturing disconnects `D`, its finitely many C¹ components are handled by the Stokes lemma and finite additivity; finiteness follows from a finite graph-chart cover of the compact C¹ boundary, each chart meeting only one local interior component.
- **Dependencies and exact uses:** `def-axiom-of-choice` (Definition, family/choice-function sentence; its AC premise is explicitly invoked at step 2.2); `lem-c-one-stokes-for-complex-euclidean-domains` (Statement: AC hypothesis and Stokes equality, step 2.2); `def-wirtinger-derivatives` (Definition, `∂_{\bar z}` formula, steps 1.1 and 2.1); `def-bigraded-complex-differential-forms` (Definition, the `∂` and `\bar∂` components of `d`, step 1.1). Exact excerpts are in the contract.
- **Source locator:** Lebl v4.4, Ch. 4 §4.1, Theorem 4.1.1 and its complete proof, printed pp. 130–131, PDF lines 10628–10751, https://www.jirka.org/scv/scv.pdf. Its assumptions are weaker than ours, but the proof's puncture orientation, wedge sign, local integrability, and circle limit match the independently checked derivation. The library Stokes lemma supplies the declared AC premise.
- **Decision and checks:** No scaffold repair was needed. Explicit-path precheck and rendering passed; strict proof-contract passed with exact citations and all eight boundary dispositions. AC is used only for complex Stokes. Step 3 decision: `accept`, confidence 1, all four dependency IDs. No unresolved gap.
- **Next:** audit and author `thm-d-dbar-decomposition-and-identities`.

### Item 5 — `thm-d-dbar-decomposition-and-identities`

- **Claim and conventions:** For smooth complex forms, `d=∂+\bar∂`, both square operators vanish, the mixed anticommutator vanishes, and both operators satisfy the graded Leibniz rule with sign `(-1)^{p+q}` on a `(p,q)` form.
- **Scaffold audit:** Claim is sound. The published `d²=0` result is stated for differential forms and the published graded-derivation result is for real forms; the proof explicitly extends both to complex coefficients using real/imaginary parts, coordinate complex linearity, and complex bilinearity. For a pure `(p,q)` form, the three terms in `d²` lie in distinct bidegrees, so unique decomposition gives the square and anticommutator identities. Projecting the graded product rule onto the two output bidegrees gives the separate `∂` and `\bar∂` rules. Terms beyond the bidegree range vanish by the stated convention.
- **Dependencies and exact uses:** `def-bigraded-complex-differential-forms` (Definition, “These operators are the components of $d$”; steps 1.1–1.2, 2.1–2.2, and 3.1); `thm-the-exterior-derivative-squares-to-zero` (Statement, exact `d(dω)=0`; step 1.1); `thm-the-exterior-derivative-is-a-graded-derivation` (Statement, signed product rule; step 1.2). The strict contract records exact excerpts and step uses.
+- **Source locator:** Lebl v4.4, Ch. 4 §4.4, Definition 4.4.1 and Exercises 4.4.1–4.4.2, printed p. 137, https://www.jirka.org/scv/scv.pdf. Lebl gives the decomposition and states the identities as exercises, not proofs; the authored proof instead derives them from the three published library dependencies. Those dependency statements and full proofs were checked.
+- **Decision and checks:** No scaffold repair was needed. Explicit-path precheck, explicit-path rendering, and strict proof-contract passed; all eight boundary cases are dispositioned. Choice-free. Step 3 decision: `accept`, confidence 1, all three dependency IDs. No unresolved gap.
+- **Next:** audit and author `def-dolbeault-cohomology-domain`.

### Item 6 — `def-dolbeault-cohomology-domain`

- **Claim and conventions:** For `0≤p,q≤n`, `H^{p,q}_{\bar∂}(U)` is closed smooth `(p,q)` forms modulo exact ones, with the zero source at `q=0` and zero target at `q=n`. Open inclusions induce contravariant restriction maps on classes; this defines only the form-level Dolbeault quotient, not sheaf cohomology.
- **Scaffold audit:** The intended quotient is sound because `\bar∂²=0` gives image contained in kernel. The scaffold left `p,q` ranges implicit; I made them explicit and recorded both endpoints. Restriction commutes termwise with the coefficient formula, so it preserves closed and exact forms; the quotient map is independent of representatives and restrictions satisfy identity/composition.
- **Dependencies and exact uses:** `def-bigraded-complex-differential-forms` (Definition, bidegree ranges and `\bar∂` bidegree; steps 1.1, 1.2, 2.1); `thm-d-dbar-decomposition-and-identities` (Statement, `\bar∂²=0`; step 1.1). Exact excerpt and use mapping are in the item contract.
- **Source locator:** Lebl v4.4, Ch. 4 §4.4, the cohomology quotient definition immediately after Definition 4.4.1, printed pp. 137–138, PDF lines 11183–11196 at https://www.jirka.org/scv/scv.pdf. The book supplies the quotient convention; the restrictions and their functoriality are proved from local coordinates here.
- **Decision and checks:** Corrected manifest proof provenance from `not-applicable` to `ai-altered`, because quotient well-definedness and restriction-map properties are derived. Explicit-path precheck, explicit-path rendering, and strict proof-contract passed; all eight boundary dispositions are recorded. Choice-free. Step 3 decision: `repaired`, confidence 1, both dependency IDs. No unresolved gap.
- **Next:** audit and author `lem-cauchy-transform-with-smooth-parameters`.

### Item 7 — `lem-cauchy-transform-with-smooth-parameters`

- **Claim and conventions:** Under full AC, the cutoff Cauchy transform solves the (k)-th ∂bar equation on a neighborhood of a compact target disc and preserves selected transverse holomorphicity equations; on compactly supported smooth data on ℂⁿ, the no-cutoff transform is globally smooth, solves the (k)-th equation, and commutes with all transverse ∂bar derivatives.
- **Scaffold audit and repair:** The strategy is sound but its claim and proof use several-variable ∂bar notation without directly declaring its supplier. Added `def-bigraded-complex-differential-forms` as an explicit dependency in the Batch 29 manifest; the computed dependency level remains 2. The scaffold's “dominated differentiation” is not accepted as proof: the authored step 1.2 translates ζ by (z_k), fixes the singularity at η=0, bounds all derivative supports uniformly on compact parameter sets, and proves convergence of each difference quotient using the uniform-continuity modulus and ∫|η|⁻¹dA<∞.
- **Dependencies and exact uses:** `def-bigraded-complex-differential-forms` supplies the coefficient formula using ∂bar derivatives (steps 2.1, 2.2, 3.1); `thm-cauchy-pompeiu-formula` supplies both its explicit `Assume AC` premise and integral identity (steps 2.1, 3.1); `def-axiom-of-choice` makes the declared full-AC use explicit (steps 2.1, 3.1); `lem-manifold-bump-for-a-compact-set-inside-an-open-set` supplies the local cutoff equal to one near the target (step 1.1). The proof contract stores the exact excerpts and uses. AC is used only to invoke Cauchy–Pompeiu; no other choice is made.
- **Source locator:** Lebl v4.4, Ch. 4 §4.4, Lemma 4.4.6 and full proof, printed pp. 140–142, PDF lines 11327–11542, https://www.jirka.org/scv/scv.pdf. The lemma states parameter smoothness and proves the one-variable equation/smoothness; its parameter sentence is brief. The all-parameter derivative estimate and the several-variable cutoff/global variants are derived explicitly here, not attributed to that sentence.
- **Decision and checks:** The mathematical strategy is accepted with the direct notation dependency repair. Explicit-path precheck passed; explicit-path rendering passed; strict item proof-contract passed with exact fact excerpts and all eight boundary dispositions. Step 3 decision: `repaired`, confidence 1, after examining all four declared dependencies. No unresolved gap.
- **Next:** audit and author `thm-bochner-martinelli-integral-formula`.

### Item 8 — `thm-bochner-martinelli-integral-formula`

- **Claim and conventions:** Under full AC, for bounded `D ⊂ ℂⁿ` with C¹ boundary, `f ∈ C¹(\bar D)`, and `z ∈ D`, the normalized Bochner–Martinelli kernel gives `f(z)=∫∂D fΩₙ−∫D dbar f∧Ωₙ`. The interior density is absolutely integrable at `z`; holomorphic `f` makes it vanish; for `n>1`, a kernel coefficient need not be holomorphic in its parameter. The orientation is the interleaved complex coordinate orientation fixed by the kernel definition.
- **Scaffold audit and repairs:** The punctured-domain Stokes strategy is correct, but its normalization shortcut omitted prerequisites for converting the real ball content to the Lebesgue integral used in Stokes, and the proof used complex type notation without a direct dependency. Added direct dependencies `def-bigraded-complex-differential-forms`, `cor-volume-of-a-radius-r-n-ball`, `thm-volume-recursion-for-closed-euclidean-balls`, `thm-jordan-boundary-criterion`, `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content`, `thm-real-gamma-functional-equation`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, and `thm-integrals-are-invariant-under-measure-preserving-maps`. They are published suppliers; the dependency level remains 2. Reordered the completed proof into precheck’s dependency-stratified labels: the off-diagonal differential, singular-integrability bound, sphere normalization, holomorphic specialization and parameter derivative precede punctured Stokes, the inner-sphere limit, and the final limit identity.
- **Dependencies and exact uses:** `def-bochner-martinelli-kernel` supplies the normalized form and coefficients (steps 1.1, 1.2, 1.5, 2.2); `def-bigraded-complex-differential-forms` and `thm-d-dbar-decomposition-and-identities` supply type projections and graded product rule (1.1); `lem-c-one-stokes-for-complex-euclidean-domains` and `def-axiom-of-choice` supply complex Stokes and its explicit AC premise (1.3, 2.1); `thm-cauchy-riemann-characterization-in-several-complex-variables` supplies the full holomorphic specialization (1.4); real ball content, Jordan boundary/content transfer, and Gamma recurrence suppliers give the exact sphere normalization (1.3); translation invariance, measure-preserving integral invariance, and polar coordinates prove local absolute integrability (1.2). The proof contract stores each exact excerpt and step use.
- **AC and source:** Full AC is stated in the theorem and used only to discharge the Stokes and countable-choice premises of the measure comparison and polar-coordinate suppliers. Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Theorem 5.1.1 and its complete proof, printed pp. 157–159 (PDF pp. 156–158), PDF lines 12140–12476, https://www.jirka.org/scv/scv.pdf. I read the complete proof. Lebl assumes smooth boundary and smooth `f`; our C¹ conclusion follows from the local C¹ Stokes supplier and the same puncture argument, which is written out here. The coordinate convention in the cited Cauchy–Riemann result is zero-based in this library; step 1.4 reindexes explicitly.
- **Decision and checks:** The scaffold strategy is sound after adding direct normalization and notation inputs; the argument explicitly cancels the barred kernel derivatives, computes `dΨₙ=nΘ`, translates the real `2n`-ball volume into the Lebesgue volume used by Stokes, obtains sphere integral 1, and bounds both limiting errors. Explicit-path precheck passed; explicit-path rendering passed; the strict item contract passed (1/1, 0 errors, 0 warnings), including all eight boundary cases. The batch `content-policy` check was run but currently reports only ten `scope-item-missing` errors for assigned later items not yet authored; rerun it once the batch is complete. Step 3 decision: `repaired`, confidence 1, all fourteen examined dependencies. No unresolved mathematical gap in this item.
- **Next:** audit and author `cex-nonclosed-dbar-form-has-no-potential`.

### Item 9 — `cex-nonclosed-dbar-form-has-no-potential`

- **Claim and conventions:** The smooth `(0,1)`-form `g=\bar z₁ dbar z₂` on `ℂ²` has `dbar g=dbar z₁∧dbar z₂`, a nowhere-zero `(0,2)`-form. Its restriction to every nonempty open `U⊂ℂ²` therefore has no smooth potential `u` with `dbar u=g`.
- **Scaffold audit:** The owner-repaired strategy is sound. The coefficient derivative is exactly 1 in the `\bar z₁` direction, and the distinct coordinate covectors are independent. If a potential existed on any such `U`, applying `dbar` would give `0=dbar²u=dbar g`, contradicting that nonzero local basis form at each point. The stronger local-open-set quantifier is justified pointwise; no connectedness of `U` is needed.
- **Dependencies and exact uses:** `def-bigraded-complex-differential-forms` supplies the coefficient formula and wedge-basis independence (step 1.1); `thm-d-dbar-decomposition-and-identities` supplies `dbar²=0` (step 2.1). Both full current item statements and proofs were rechecked, including the local type formula. This process also found and repaired the item 1 notation typo recorded above.
- **Source locator:** Lebl v4.4, Ch. 4 §4.2, Exercise 4.2.1, printed p. 132 (PDF p. 131), lines 10832–10837, https://www.jirka.org/scv/scv.pdf. The exercise asks for an explicit non-solvable `(0,1)`-form in `ℂ²` but gives neither a witness nor a proof. The item records that limit and supplies its own explicit witness and complete obstruction calculation; the citation is not treated as proof.
- **Authoring and checks:** Added `items/cex-nonclosed-dbar-form-has-no-potential.md`, its exact source locator to the Batch 29 manifest, and the item-specific proof contract with both citations and all eight boundary dispositions. Explicit-path precheck passed; explicit-path rendering passed; strict item proof-contract passed (1/1, zero errors/warnings). No AC is needed; no choice is used.
- **Decision and handoff:** Decision recording briefly encountered invalid JSON in another in-flight Batch 10 manifest and coverage file; I left those sibling files untouched. Both parsed successfully on retry and the receipt was recorded: `accept`, confidence 1, with both examined dependencies. No blocking condition remains.
- **Next:** audit and author `ex-cauchy-pompeiu-compact-support`.

### Item 10 — `ex-cauchy-pompeiu-compact-support`

- **Claim and conventions:** Under full AC, `f(z)=(1−|z|²)²` on the unit disc and zero outside is `C¹_c(ℂ)`. Its Cauchy boundary term on the unit disc vanishes, and at zero its Cauchy–Pompeiu area term equals `f(0)=1`.
- **Scaffold audit and repairs:** The calculation is correct, but the direct dependency list omitted the Wirtinger definition used to compute `dbar f` and the exact polar/measure suppliers needed for the numerical area integral. Added direct dependencies `def-wirtinger-derivatives`, `cor-volume-of-a-radius-r-n-ball`, `thm-volume-recursion-for-closed-euclidean-balls`, `thm-real-gamma-functional-equation`, `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `def-polar-surface-measure-on-the-unit-sphere`, and `thm-polar-coordinates-formula-for-lebesgue-measure`. Reclassified the constructed example statement as `ai-altered`; Lebl supplies the theorem being specialized, while this specific bump and calculation are authored here.
- **Proof calculation:** Wrote `f(z)=h(1−|z|²)` with `h(t)=(max(t,0))²` to prove the zero extension is C¹, and computed `dbar f=−2ζ(1−|ζ|²)` inside. For the exact polar evaluation, established `σ(S¹)=2π` from the published definition `σ(E)=2λ₂({rω:ω∈E, 0<r≤1})`, the Jordan content `π` of the closed unit disc, its Lebesgue-content equality under countable choice, and nullity of the origin. Polar integration then gives `∫D(1−|ζ|²)dA=2π∫₀¹(1−r²)rdr=π/2`; substitution in Cauchy–Pompeiu yields `1=f(0)`. The apparent quotient at zero extends continuously.
- **Dependencies and AC:** `def-wirtinger-derivatives` supplies the coefficient derivative (step 1.1); `thm-cauchy-pompeiu-formula` and `def-axiom-of-choice` supply the formula and full-AC premise (step 2.1); the ball-content, Gamma, Jordan/Lebesgue, null-origin, polar-measure definition and polar-integration suppliers support the area calculation (steps 1.2 and 2.1). The proof contract records each exact source excerpt. AC is stated and used for Cauchy–Pompeiu plus the countable-choice assumptions of the measure suppliers.
- **Source locator:** Lebl v4.4, Ch. 4 §4.1, Theorem 4.1.1 and complete proof, printed pp. 130–131, PDF lines 10628–10751, https://www.jirka.org/scv/scv.pdf. I read the full argument. It supplies the Cauchy–Pompeiu formula and its signs; it does not supply this chosen bump function or its integral calculation.
- **Decision and checks:** Authored `items/ex-cauchy-pompeiu-compact-support.md`, the exact Lebl locator in the manifest, and the item-specific proof contract with all eight boundary dispositions. Explicit-path precheck passed; explicit-path rendering passed; strict item contract passed (1/1, zero errors/warnings). `item-dependency-levels check --run frontier-36-complete` passed across all 924 items and 60 pages, confirming manifest levels after the local dependency repair. Step 3 decision: `repaired`, confidence 1, ten examined direct dependencies. No mathematical gap remains.
- **Next:** audit and author `ex-dbar-on-elementary-functions-and-forms`.

### Item 11 — `ex-dbar-on-elementary-functions-and-forms`

- **Claim and conventions:** On `ℂ²`, for `f=z₁²\bar z₂+\bar z₁²` and `η=f dz₂`, compute `∂f`, `dbar f`, `∂η`, and `dbar η`, retaining the sign in `dbar z₂∧dz₂`. All formulas are pointwise on all of `ℂ²`.
- **Scaffold audit and provenance repair:** The explicit scalar Wirtinger and wedge calculations are correct. The scaffold cited Lebl’s general `(p,q)`-form definition, but that passage does not give this chosen polynomial example; the exercises in the same section are prompts, not proofs. Reclassified the statement as `ai-altered`, with the exact locator and limitation retained in the item and manifest.
- **Dependencies and exact uses:** `def-wirtinger-operators-in-several-complex-variables` gives the coordinate operators (step 1.1); `thm-d-dbar-decomposition-and-identities` supplies the scalar product rule and `d=∂+dbar` (steps 1.1 and 3.1); `def-bigraded-complex-differential-forms` gives the type coefficient formulas (step 2.1). I rechecked all three local supplier statements and the full relevant definitions. These dependencies remain at the scaffold’s level 2; no supplier was added.
- **Source locator:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.4, Definition 4.4.1, printed p. 137, PDF lines 11136–11164, https://www.jirka.org/scv/scv.pdf. It defines the type operators used here. The particular polynomial and its derivative calculation are derived in the item, not attributed to the source. No AC or choice is used.
- **Authoring and checks:** Authored the four derivative formulas, the coefficient differentiations, wedge order/sign calculation, and the `d=∂+dbar` identity. Registered the corrected provenance/source in the Batch 29 manifest and wrote the exact-excerpt proof contract with all eight boundary cases. Explicit-path precheck passed; explicit-path rendering passed; strict item contract passed (1/1, zero errors/warnings). Step 3 decision: `repaired`, confidence 1, with all three examined dependencies. No unresolved gap.
- **Next:** audit and author `ex-polynomial-dbar-solution`.

### Item 12 — `ex-polynomial-dbar-solution`

- **Claim and conventions:** On `ℂ²`, `g=2\bar z₁ dbar z₁+z₁ dbar z₂` is dbar-closed, and `u=\bar z₁²+z₁\bar z₂` satisfies `dbar u=g`. These are global polynomial identities.
- **Scaffold audit and repairs:** The coefficient calculations are correct. The scaffold declared `thm-d-dbar-decomposition-and-identities`, but neither direct calculation uses that theorem: the scalar and `(0,1)` coefficient formulas follow from the two definitions. Removed this unnecessary dependency. The item’s current level therefore changes from 2 to 1. I recomputed the full run’s dependency levels and exact order; the 924-item/60-page check passes, and the updated owned order places this item at level 1 after the completed level-1 A items and before all still-incomplete level-3+ items. The previously completed level-2 examples were not used to justify this item, and this item is not a supplier for them.
- **Dependencies and exact uses:** `def-wirtinger-operators-in-several-complex-variables` supplies the coordinate derivatives used in steps 1.1 and 2.1; `def-bigraded-complex-differential-forms` supplies the scalar and `(0,1)` coefficient rules in those same steps. I inspected the removed theorem as part of deciding that it was not needed. No AC or choice is used.
- **Source locator and provenance:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.4, Definition 4.4.1, printed p. 137, PDF lines 11136–11164, https://www.jirka.org/scv/scv.pdf, defines the coefficient operators. The specific polynomial form and potential are constructed here, so the statement is `ai-altered`. The nearby Exercises 4.4.1–4.4.2 (lines 11165–11176) are prompts, not proofs of this example.
- **Authoring and checks:** Authored the two coefficient derivative tables, the explicit potential identity, and the vanishing wedge calculation for closedness. Registered the item with the two actual dependencies, corrected provenance/source, and level 1 in the manifest; coverage already includes it on both A and B inventories. Added the exact-excerpt proof contract and all eight boundary dispositions. Explicit-path precheck passed after keeping each input-tagged step on one numbered line; rendering passed; strict item contract passed (1/1, zero errors/warnings). Full-run dependency-level check passed. Scope check found this pair’s prior `sufficient` receipt still current; only three other pairs require scope review. Step 3 decision: `repaired`, confidence 1, recording both current dependencies and the removed dependency examined during the repair. No unresolved gap.
- **Next:** audit and author `thm-compact-support-dbar-solution-cn`.

### Item 13 — `thm-compact-support-dbar-solution-cn`

- **Claim and conventions:** Assume full AC and $n\ge2$. For a smooth compactly supported $\bar\partial$-closed $(0,1)$-form $g=\sum_{j=1}^n g_j\,d\bar z_j$ on $\mathbb C^n$, there is a unique smooth compactly supported $u$ with $\bar\partial u=g$. The complement of $K=\operatorname{supp}g$ has a unique unbounded connected component, and $u$ vanishes on it. Coordinates in this item are one-based; when invoking the library Cauchy–Riemann statement, $j$ corresponds to its zero-based $k=j-1$.
- **Scaffold audit and repairs:** The Cauchy-transform strategy is valid, but parameter-derivative commutation alone does not prove the remaining equations: the transform supplier does not state $T_1(\partial_{\bar z_1}g_j)=g_j$. Added direct dependency `thm-cauchy-pompeiu-formula`; on each compactly supported coordinate slice, choose a disc larger than both the slice support and $|z_1|$, where the boundary term vanishes. The area integrand vanishes outside that disc, so Cauchy–Pompeiu gives the needed whole-plane identity. Removed the unnecessary `thm-d-dbar-decomposition-and-identities` dependency: the coefficient formula from `def-bigraded-complex-differential-forms` directly gives the compatibility equations. The proof's support/transform construction was stratified into step 1.3 before the remaining coordinate equations in step 2.1. The statement was clarified in the manifest to say “unique unbounded connected component,” preserving the promised claim. The pair's non-owner scope receipt was refreshed because this wording change altered its scope hash; the refreshed evidence confirms no scope expansion and the same SC-5 targets.
- **Dependency audit and exact uses:** Current direct dependencies: `def-bigraded-complex-differential-forms` (coefficient compatibility and coefficient support, steps 1.1, 1.3, 2.1); `thm-cauchy-pompeiu-formula` (zero-boundary compact-slice identity, step 2.1); `lem-cauchy-transform-with-smooth-parameters` (global smoothness, first equation and parameter commutation, steps 1.3 and 2.1); `def-axiom-of-choice` (the explicitly stated full-AC premise, steps 1.3 and 2.1); `thm-cauchy-riemann-characterization-in-several-complex-variables` and `def-holomorphic-function-in-several-complex-variables` (holomorphy from the vanishing $\bar\partial$ system, steps 3.1 and 5.1); `thm-identity-theorem-in-several-complex-variables` (vanishing propagation, steps 3.1 and 5.1); `def-compactly-supported-differential-form`, `def-interior-closure-boundary-top`, and `thm-closed-subspace-of-a-compact-space-is-compact` (support closure and compactness, steps 1.3, 3.1, 4.1); `rem-complex-euclidean-space-dictionary`, `def-metric-bounded-diameter`, `def-metric-ball`, and `def-norm-and-normed-space` (centered bounding ball and norm/metric transfer, steps 1.2, 4.1, 5.1); `def-euclidean-spheres-and-closed-balls`, `cor-euclidean-spheres-are-path-connected`, `thm-path-connected-implies-connected`, and `def-connected-component-and-quasicomponent` (connected exterior and unique unbounded component, step 1.2); `cor-components-of-open-subsets-of-rn-are-polygonally-connected` (the complement component is open for the identity theorem, step 3.1). The complete input list and exact cited excerpts are recorded in the item contract.
- **Proof audit:** The $\bar\partial$-closed coefficient of $d\bar z_a\wedge d\bar z_b$ yields $\partial_{\bar z_a}g_b=\partial_{\bar z_b}g_a$. Compact support of each scalar coefficient follows by taking its closed nonzero locus inside $K$. The transform $u=T_1g_1$ is smooth and solves the first equation; compatibility, parameter commutation, and compact-slice Cauchy–Pompeiu solve each $j>1$ equation. A compact set $K$ fits in a centered closed ball of radius $R$; the exterior $E=\{\|z\|>R\}$ is path-connected because radial segments join points to a common sphere and $S^{2n-1}$ is path-connected for $2n\ge2$. It meets every unbounded component of $\mathbb C^n\setminus K$, proving uniqueness of that component. The open half-space $\operatorname{Re}z_2>R$ lies in it and the transform integral is zero there. The Cauchy–Riemann criterion and identity theorem give vanishing on the whole component; this proves compact support. For uniqueness, the difference is entire holomorphic and zero on an exterior open set. The empty datum is included ($R=1$ and $T_1 0=0$). Dimension one is explicitly excluded and no compact-support conclusion is claimed there.
- **Source locators and scope:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.2, Theorem 4.2.1 and complete proof, printed pp. 132–134, PDF lines 10838–10967, https://www.jirka.org/scv/scv.pdf. I reread the full passage: it states the same $n\ge2$ compact-support theorem and derives compatibility, the Cauchy transform, remaining equations, compact support, and uniqueness. Exercise 4.2.2 at lines 10946–10947 is only a prompt about differentiating under the integral; this proof relies on the earlier fully proved local transform supplier for smoothness and parameter differentiation. I also reread Cauchy–Pompeiu, Theorem 4.1.1, printed pp. 130–131, PDF lines 10628–10751; its plus-sign wedge formula is exactly the formula used in step 2.1. Full AC is declared directly and used for both local suppliers that require it. No further assumption is hidden.
- **Decision and checks:** Refreshed the pair scope receipt as non-owner `sufficient` with evidence that the wording only clarifies the existing target; no owner ruling was invented. Step 3 item decision: `repaired`, confidence 1, after full authoring, recording all 19 current dependencies and the removed `thm-d-dbar-decomposition-and-identities` as examined. Explicit-path precheck passed (1 checked, 0 failing); explicit-path rendering passed; strict proof-contract passed (1/1, 0 errors, 0 warnings); `item-dependency-levels check --run frontier-36-complete` passed for 924 items across 60 pages. Recomputed order still places this item at level 3, after the level-2 items and before `thm-dolbeault-lemma-polydisc`; the full owned ordering is recorded by the dependency-level tool and matches the dispatch order after item 12's level-1 repair.
- **Open obligations and next:** The published Hartogs concern and the Beta-task versus plan-spec prerequisite mismatch remain for the owner/Step 4 reconciler as described above. No item-13 proof gap remains. Next audit and author `thm-dolbeault-lemma-polydisc`.

### Item 14 — `thm-dolbeault-lemma-polydisc`

- **Claim and conventions:** Assume full AC. For finite open coordinate polydiscs (P'=prod D'_j) and (P=prod D_j), with each closed target disc (overline{D'_j}Subset D_j), every smooth (ar\partial)-closed ((p,q))-form on (P), (0\le p\le n), (1\le q\le n), has a smooth ((p,q-1))-primitive on (P'). The coordinatewise compact-containment hypothesis is stated explicitly; all forms use the increasing (dz^I\wedge d\bar z^J) basis and the library's coefficient convention.
- **Scaffold audit and repairs:** The descending-largest-barred-index strategy is valid. I checked that the coefficient of (d\bar z_k\wedge d\bar z_\ell) in closedness gives the later-coordinate derivative equation, that the transform preserves those equations, and that the residual remains closed after subtraction. Removed the scaffold's unused direct dependency on `thm-cauchy-riemann-characterization-in-several-complex-variables`: the proof only needs the zero derivative equations, which are derived directly from unique wedge coefficients and carried by the transform. The six authored steps make the coordinate shrinkage, finite termination, and telescoping sum explicit. The claim is coordinatewise more general than the source's concentric-polydisc statement, and that extension is proved here; provenance is `ai-altered` for both statement and proof. The manifest locator was corrected to the source's printed p. 143 (PDF page index 142).
- **Dependencies and exact uses:** `def-bigraded-complex-differential-forms` supplies unique wedge coefficients and the coefficient formula (steps 1.1, 2.1, 3.1, 4.1, 5.1); `thm-d-dbar-decomposition-and-identities` supplies the graded product rule (step 2.1) and \(\bar\partial^2=0\) (step 4.1); `lem-cauchy-transform-with-smooth-parameters` supplies smoothness, the coordinate equation, preservation of selected later-coordinate zero derivatives, and a target domain still containing (P') (steps 3.1, 5.1); `def-axiom-of-choice` records the full-AC hypothesis required by that transform (steps 3.1, 5.1). The removed CR characterization was examined and is not used. Exact excerpts and step maps are recorded in the strict proof contract.
- **Source and limitations:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.4, Lemma 4.4.7 and complete proof, printed p. 143, PDF page index 142, lines 11547–11620, https://www.jirka.org/scv/scv.pdf. The source assumes concentric polydiscs. It derives compatibility in later coordinates, applies the one-variable transform, and inducts on the largest barred index. Exercise 4.4.14 at lines 11561–11562 is only a prompt for the coefficient assertion; this item proves that assertion directly. I reread the full supporting Lemma 4.4.6 argument, lines 11327–11542; the local library transform lemma is the actual supplier used for smooth parameter dependence.
- **AC and decisions:** Full AC is explicit and used to invoke the local transform supplier. The finite coordinate recursion introduces no further choice. Step 3 decision: `repaired`, confidence 1, recording the four current dependencies and the removed CR characterization as examined. The pair's current non-owner scope receipt remains valid because the manifest statement and item inventory did not change.
- **Checks and open gaps:** After correcting the manifest locator, explicit-path precheck passed (1 checked, 0 failing); rendering passed with real KaTeX and YAML parsing; strict item proof contract passed (1/1, 0 errors, 0 warnings); full-run `item-dependency-levels` passed (924 items across 60 pages). No proof gap remains. The report's previously recorded published Hartogs concern and Beta prerequisite mismatch remain open for their owner/reconciler; no other pair was edited.
- **Next:** audit and author `ex-bochner-martinelli-on-a-ball`.

### Item 15 — `ex-bochner-martinelli-on-a-ball`

- **Claim and conventions:** Assume full AC and (n\ge1). On the outward-oriented unit sphere in (mathbb C^n), (int_{\partial B}\Omega_n(\zeta,0)=1) and (int_{\partial B}\zeta_j\Omega_n(\zeta,0)=0) for each (1\le j\le n). The ambient complex orientation is (dx_1\wedge dy_1\wedge\cdots\wedge dx_n\wedge dy_n).
- **Scaffold audit and repair:** The constant moment follows by applying the already proved Bochner–Martinelli formula to (f=1). The coordinate-moment rotation strategy is sound, but its invariance-of-integral step needed an explicit supplier. Added direct dependency `thm-change-of-variables-for-oriented-manifold-diffeomorphisms` and recomputed the owned ordering: the item remains level 3, after the level-3 A items, so no prior completed item needs reordering. The source's general formula predicts the same moments; the coordinate identities are independently computed by pullback under simultaneous scalar rotations.
- **Dependencies and exact uses:** `def-bochner-martinelli-kernel` supplies the coefficient and wedge formula used to compute (R_t^*\Omega_n=\Omega_n) and (R_t^*(\zeta_j\Omega_n)=e^{it}\zeta_j\Omega_n) (step 1.2); `thm-bochner-martinelli-integral-formula` supplies its full-AC premise and the constant-function normalization (step 1.1), with its holomorphic case interpreting the reproduction values (step 3.1); `def-axiom-of-choice` states the full-AC assumption used to invoke that formula (step 1.1); `thm-change-of-variables-for-oriented-manifold-diffeomorphisms` transports the top-form integral under the orientation-preserving sphere rotation (step 2.1). Exact source excerpts and derivation contracts are recorded in the Batch 29 contract file.
- **Source and limitations:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 5 §5.1, Theorem 5.1.1 and complete proof, printed pp. 157–159, PDF lines 12140–12476, https://www.jirka.org/scv/scv.pdf. I read the full theorem and proof: its holomorphic case gives the boundary reproduction identity and its proof computes the normalization from Stokes and the ball volume. This example applies the library's AC-explicit theorem to the constant and independently derives the linear moments by rotational pullback; the cited passage does not perform that coordinate-moment calculation.
- **Decision and checks:** Step 3 decision: `repaired`, confidence 1, recording the four direct dependencies. Full AC is explicit; the chosen angle (t=\pi) is deterministic. Explicit-path precheck passed; rendering passed with real KaTeX and YAML parsing; strict item proof contract passed (1/1, 0 errors, 0 warnings); full-run `item-dependency-levels` passed (924 items across 60 pages). No mathematical gap remains.
- **Open obligations and next:** The previously reported published Hartogs gap and stale Beta prerequisite list remain open for the owner/Step 4 reconciler. Next audit and author `cor-hartogs-extension-dbar-proof`.

### Item 16 — `cor-hartogs-extension-dbar-proof`

- **Claim and conventions:** Under full AC, if $n\ge2$, $\Omega\subseteq\mathbb C^n$ is a domain, $K\subseteq\Omega$ is compact, and $G=\Omega\setminus K$ is connected, then every $f\in\mathcal O(G)$ has a unique holomorphic extension to $\Omega$. The claim has no finite-shell-cover hypothesis. Coordinates in the proof follow the theorem item's one-based indexing; when using the CR criterion, library coordinate $k=j-1$.
- **Scaffold audit and repairs:** The cutoff strategy is sound after making its radius and support argument explicit. For nonempty $K$, continuity of the norm and the extreme-value theorem give a maximum $r$ at $z_0$. From an open ball around $z_0$, the explicit outward point has norm greater than $R=r+\varepsilon/4$, including the $r=0$ case. A bump supported in $\Omega\cap\{\|z\|<R\}$ makes $f_0=(1-\chi)f$ off $K$ and $0$ on $K$ smooth on $\Omega$. Define $g=\bar\partial f_0$ on $\Omega$ and zero-extend only $g$. Its global support is closed, lies inside $\operatorname{supp}\chi\subset\Omega\cap\{\|z\|<R\}$, and is compact by the complex Euclidean closed-and-bounded theorem; this also makes the zero extension smooth across the complement of $\Omega$. The form is $\bar\partial$-closed by $\bar\partial^2=0$. The exterior $E_R=\{\|z\|>R\}$ is path-connected and unbounded; the path-connectedness-to-connectedness and component-definition inputs show it lies in the unique unbounded component of $\mathbb C^n\setminus\operatorname{supp}g$, where the earlier compact-support theorem makes $u=0$. On the nonempty open set $\Omega\cap E_R$, $u+\chi f=0$; the identity theorem on connected $G$ gives equality throughout and yields the extension. The empty-hole case is handled separately. Added direct dependencies `thm-path-connected-implies-connected` and `def-connected-component-and-quasicomponent`, which the strategy had used without declaring; removed the unused `def-interior-closure-boundary-top` dependency. No new item supplier was required.
- **Dependencies and exact uses:** Current direct dependencies are `thm-compact-support-dbar-solution-cn` and `def-axiom-of-choice` (the only full-AC use, steps 4.1–4.2); `lem-manifold-bump-for-a-compact-set-inside-an-open-set` (cutoff, steps 2.1 and 4.2); `def-bigraded-complex-differential-forms`, `thm-d-dbar-decomposition-and-identities`, and `def-compactly-supported-differential-form` (datum definition, product rule, closedness and support, step 3.1); `thm-cauchy-riemann-characterization-in-several-complex-variables`, `def-holomorphic-function-in-several-complex-variables`, and `cor-holomorphic-functions-in-several-variables-are-smooth` (smoothness and holomorphy, steps 2.1, 3.1, 5.1, 6.1); `thm-identity-theorem-in-several-complex-variables` and `def-holomorphic-extension-and-domain-of-holomorphy` (steps 1.1, 5.1–7.1); `thm-extreme-value-metric`, `def-norm-and-normed-space`, `thm-compact-subset-is-closed-and-bounded`, and `rem-complex-euclidean-space-dictionary` (radius, topology, compact support, steps 1.2–3.1); `def-euclidean-spheres-and-closed-balls`, `cor-euclidean-spheres-are-path-connected`, `thm-path-connected-implies-connected`, and `def-connected-component-and-quasicomponent` (exterior component, step 4.2). The removed closure-notation dependency was examined and is not used. Exact excerpts, step uses, derivations, and all eight boundary cases are recorded in the Batch 29 contract.
- **Source and limits:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.3, Theorem 4.3.1 and complete proof, printed pp. 135–136, PDF text lines 10987–11044, https://www.jirka.org/scv/scv.pdf. I reread the whole passage. Exercises 4.3.1 (lines 11047–11048) and 4.2.3 (lines 10968–10971) are prompts, not proofs; the local bump and compact-support suppliers give those arguments. The local proof additionally exhibits a nonempty outer zero set explicitly. Full AC is declared and used only to invoke the compact-support solution theorem; the cutoff, maximum, and exterior-connectivity arguments use no choice principle.
- **Published-item concern:** Rechecked published `thm-hartogs-extension-across-compact-holes`, proof step 1.1. Its finite-shell-cover assumptions provide an extension from one coordinate shell in $P_j\cap G$ to $P_j$, but do not ensure that every component of $P_j\cap G$ meets that shell. The cited published `lem-propagation-and-gluing-of-hartogs-extensions` requires the local extension to agree on all of $U_j\cap G$; published `lem-local-hartogs-extension-across-polydisc-shells` supplies only the shell extension. This is a confirmed gap in the published proof (high confidence); no other pair was edited. The new corollary is a possible repair supplier under its explicit full-AC assumption. Any replacement must propagate that AC premise into the published consumer, or the owner can instead strengthen the finite-shell-cover hypothesis to provide shell overlap in every relevant component and prove agreement componentwise before invoking the gluing lemma. Route this published change to its owner.
- **Decision and checks:** Step 3 item decision `repaired`, confidence 1, records the 19 current direct dependencies and the removed closure-notation dependency as examined. The sufficient non-owner scope receipt was refreshed: the ten A targets, six B items, five A-page prerequisites, and empty Batch 29 cross-batch input are unchanged. Coverage already includes this item. Explicit-path precheck passed (1 checked, 0 failing); explicit-path rendering passed with YAML and KaTeX; strict item proof-contract passed (1/1, 0 errors, 0 warnings); full-run `item-dependency-levels check` passed (925 items across 60 pages, maximum level 18). Recomputed owned order keeps the next items at level 4: `thm-dolbeault-cohomology-polydisc-vanishes-positive-q` (A), then `ex-dbar-cutoff-extension-at-a-puncture` (B). No local proof gap remains.
- **Open obligations and next:** The published Hartogs repair remains owner-held. The Beta task's eight prerequisites still differ from the five prerequisites in the plan-spec and Batch 29 manifest; retain that pre-splice mismatch for Step 4 reconciliation. Next audit and author `thm-dolbeault-cohomology-polydisc-vanishes-positive-q`.

### Item 17 — `thm-dolbeault-cohomology-polydisc-vanishes-positive-q`

- **Claim and conventions:** Assume full AC. For $n\ge1$, a product $P=\prod_{j=1}^nD_j$ with each factor a nonempty finite-radius open disc or $\mathbb C$, and $0\le p\le n$, $1\le q\le n$, every smooth $\bar\partial$-closed $(p,q)$ form is $\bar\partial$ of a smooth $(p,q-1)$ form. The form-level quotient definition then gives $H_{\bar\partial}^{p,q}(P)=0$. The whole-plane factors use finite expanding radii; arbitrary disc centers are retained.
- **Scaffold audit and repairs:** The exhaustion/gluing strategy is viable for $q>1$, but its original statement omitted $n,p,q$ ranges and its $q=1$ outline leaned on the source's Exercise 4.4.6 reduction to $p=0$, which is a prompt rather than a proof. Clarified the statement and authored the $q=1$ construction directly for every $p$ by applying the power-series theorem to each of the finitely many holomorphic form coefficients. Specified the exhaustion radii, exact local domains, compact containment, cutoff zero extension, summable coefficient errors and smoothness of the limit. Added the direct CR, holomorphicity, polydisc, continuity/separate-holomorphy, power-series, locally-uniform-limit, smoothness, support and compactness dependencies. No new supplier item was required; the existing local Dolbeault lemma is the level-3 in-run supplier.
- **Dependencies and exact uses:** Current direct dependencies are `def-bigraded-complex-differential-forms`, `def-dolbeault-cohomology-domain`, `thm-dolbeault-lemma-polydisc`, `thm-d-dbar-decomposition-and-identities`, `def-axiom-of-choice`, `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, `thm-cauchy-riemann-characterization-in-several-complex-variables`, `def-holomorphic-function-in-several-complex-variables`, `def-balls-and-polydiscs-in-complex-euclidean-space`, `prop-holomorphic-functions-are-continuous-and-separately-holomorphic`, `thm-power-series-expansion-in-several-complex-variables`, `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`, `cor-holomorphic-functions-in-several-variables-are-smooth`, `def-compactly-supported-differential-form`, and `rem-complex-euclidean-space-dictionary`. The coefficient formula identifies closed $(p,0)$ differences with coefficientwise Cauchy–Riemann systems; the local lemma supplies the successive primitives under the explicit AC hypothesis; the bump and support definition justify smooth zero extension in the $q>1$ branch; and the power-series/limit/smoothness inputs justify the full $q=1$ limit. Exact excerpts and per-step uses are in the strict contract.
- **Source and limits:** Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Chapter 4 §4.4, Theorem 4.4.5 statement, printed pp. 141–142, PDF text lines 11318–11324, and its complete proof, printed pp. 143–145, lines 11626–11680, https://www.jirka.org/scv/scv.pdf. I reread the full argument. The source proves the $q>1$ gluing case and the $q=1,p=0$ construction, but reduces to $p=0$ by citing Exercise 4.4.6, which is only a prompt; this item does not rely on that reduction and proves all $p$ coefficientwise. The local input is Lebl Lemma 4.4.7 and its complete proof, printed p. 143, lines 11547–11620. The power-series theorem's uniform convergence on smaller centered polydiscs gives the finite coefficient approximations; the local uniform limit theorem and holomorphic smoothness supplier prove the smooth primitive. No unresolved source qualification remains.
- **AC and decision:** Full AC is declared in the statement and used to invoke the local Dolbeault lemma and choose the countable recursive primitive/correction sequence in both cases; no use is inferred from finite choice or DC. Choice is not claimed for the finite coefficientwise approximation itself. Refreshed the non-owner `sufficient` scope receipt at hash `bea1ce7e…8e41b`: all ten A targets, two local A suppliers, six B items, five page prerequisites and empty cross-batch input are preserved. Step 3 item decision: `repaired`, confidence 1, recording all 15 current dependencies.
- **Checks and order:** Explicit-path precheck passed; explicit-path rendering passed with YAML and KaTeX; strict item proof-contract passed with 0 errors and 0 warnings; `item-dependency-levels check --run frontier-36-complete` passed for 925 items across 60 pages (maximum level 18). Recomputed dependency level remains 4 because the highest in-run supplier is the level-3 local Dolbeault lemma. The next assigned level-4 item remains the companion-page example `ex-dbar-cutoff-extension-at-a-puncture`.
- **Open obligations and next:** No gap remains in item 17. Carry forward the confirmed published Hartogs proof gap and the pre-splice Beta-task versus plan-spec prerequisite mismatch documented above. Next audit and author `ex-dbar-cutoff-extension-at-a-puncture`.

### Item 18 — `ex-dbar-cutoff-extension-at-a-puncture`

- **Claim and conventions:** Assume full AC. For $G=B(0,2)\setminus\{0\}\subset\mathbb C^2$ and $f\in\mathcal O(G)$, choose a smooth cutoff $\chi=1$ near $0$ with $\operatorname{supp}\chi\subset B(0,1)$; extend $f_0=(1-\chi)f$ over $0$ by zero, zero-extend $g=\bar\partial f_0$ from $B(0,2)$, and solve $\bar\partial u=g$ compactly on $\mathbb C^2$. Then $F=f_0-u$ is holomorphic on $B(0,2)$ and equals $f$ on $G$. The example also computes $f\equiv1$ to $F\equiv1$ and checks $f\equiv0$ to $F\equiv0$.
- **Scaffold audit and repairs:** The cutoff-correction route is valid with its prerequisites proved explicitly. The authored proof establishes compactness of the cutoff support, smoothness at the puncture, compact support and $\bar\partial$-closedness of $g$, openness and path-connectedness of $G$, and path-connectedness/unboundedness of the exterior $E=\{\|z\|>1\}$ in the complement of $\operatorname{supp}g$. Thus $E$ lies in the unique unbounded component where the compact-support theorem sets $u=0$. I made the nonempty zero annulus $A=\{1<\|z\|<2\}$ open by giving an explicit ball radius at every point, and mapped the library's zero-based coordinate convention to the item's $z_1,z_2$ notation before applying the Cauchy–Riemann criterion. The item directly proves the example calculation; it does not cite the theorem as a substitute proof.
- **Dependencies examined:** `thm-compact-support-dbar-solution-cn`; `def-bigraded-complex-differential-forms`; `thm-d-dbar-decomposition-and-identities`; `def-axiom-of-choice`; `lem-manifold-bump-for-a-compact-set-inside-an-open-set`; `def-compactly-supported-differential-form`; `rem-complex-euclidean-space-dictionary`; `def-balls-and-polydiscs-in-complex-euclidean-space`; `def-euclidean-spheres-and-closed-balls`; `cor-euclidean-spheres-are-path-connected`; `thm-path-connected-implies-connected`; `def-connected-component-and-quasicomponent`; `lem-reverse-triangle-inequality-in-a-normed-space`; `thm-metric-open-set-algebra`; `lem-vector-operations-are-continuous-in-a-normed-space`; `cor-holomorphic-functions-in-several-variables-are-smooth`; `def-holomorphic-function-in-several-complex-variables`; `thm-cauchy-riemann-characterization-in-several-complex-variables`; `thm-identity-theorem-in-several-complex-variables`. Each current direct dependency has an exact excerpt and every numbered-step use in the strict contract. The highest in-run supplier is the level-3 compact-support solution theorem; the item remains at dependency level 4 and does not use the other level-4 item completed immediately before it.
- **Source locator and qualification:** Jiří Lebl, *Tasty Bits of Several Complex Variables*, v4.4, Ch. 4 §4.3, Theorem 4.3.1 and complete proof, printed pp. 135–136, PDF text lines 10987–11043, https://www.jirka.org/scv/scv.pdf. I read the complete argument. Lebl's Exercises 4.3.1 and 4.2.3 are prompts for the cutoff and support details, not proof text; the local bump supplier and compact-support theorem, together with the explicit exterior-component argument here, supply those steps.
- **AC and decision:** Full AC is explicit and is used exactly to invoke `thm-compact-support-dbar-solution-cn`; the cutoff, radial paths, and sphere paths require no additional choice. Step 3 decision: `repaired`, confidence 1, recording all 19 direct dependency IDs. Refreshed the non-owner pair scope decision to `sufficient` after checking the unchanged ten A targets, two local A suppliers, six B items, five current plan prerequisites, and empty cross-batch input.
- **Checks:** Item-specific explicit-path precheck, renderer, and strict proof-contract passed. Full Batch 29 explicit-path precheck passed (18/18); explicit-path rendering passed (18 items plus both pages, 20/20); content-policy passed (18 scoped items, no errors or warnings); strict proof-contract passed (18/18, no errors or warnings); full-run dependency levels passed (925 items, 60 pages, maximum level 18); `validate-plan research/plan-spec.json` exited 0 and reported the plan order acyclic and consistent. The pre-splice task discrepancy remains for Step 4: Beta task lists eight prerequisites—`holomorphic-functions-of-several-variables`, `the-hartogs-phenomena`, `holomorphic-inverse-and-weierstrass-preparation`, `domains-of-holomorphy-and-pseudoconvexity`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `integration-of-forms-and-the-general-stokes-theorem`, and `distributions-test-functions-and-differentiation`; `plan-spec.json` and the current manifest list five—`holomorphic-inverse-and-weierstrass-preparation`, `domains-of-holomorphy-and-pseudoconvexity`, `integration-of-forms-and-the-general-stokes-theorem`, `distributions-test-functions-and-differentiation`, and `euclidean-surface-measure-divergence-and-green-identities`. No shared plan change was made.
- **Open obligations and handoff:** No local gap remains in this item. Carry forward the confirmed published proof gap in `thm-hartogs-extension-across-compact-holes` on `the-hartogs-phenomena` (proof step 1.1: the finite shell cover does not ensure that every component of $P_j\cap G$ meets the cited shell; the propagation/gluing lemma requires agreement on all of $U_j\cap G$, while the shell-extension lemma provides only one-shell agreement). Confidence 1; route to that item's owner. The new Hartogs corollary is a possible repair only with its explicit full-AC premise propagated, or the shell hypothesis must be strengthened and agreement proved componentwise. The serial reconciler owns `published-consumer-supplier-ledger.md`; it remains untouched. Next action: hand off this completed A/B pair for serial Step 4 reconciliation, retaining both owner/Step 4 obligations above.
