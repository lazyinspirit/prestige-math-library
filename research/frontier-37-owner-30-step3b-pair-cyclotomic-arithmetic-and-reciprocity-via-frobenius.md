# Step 3b auditor/author report — pair `cyclotomic-arithmetic-and-reciprocity-via-frobenius`

- Run: `frontier-37-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-cyclotomic-arithmetic-and-reciprocity-via-frobenius-e859ff99b53ffa32`
- Role: alpha-high author (not owner; no owner rulings taken; no `--owner` or
  judge/audit stamps written)
- A page: `cyclotomic-arithmetic-and-reciprocity-via-frobenius` (batch 4,
  order 365.921, 21 items)
- B page: `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples`
  (batch 4, order 365.922, 10 items)
- Batch: 4 (`research/frontier-37-owner-30-batch-4.pages.json` contains exactly
  these two pages; there is no sibling pair in the shared batch file, so
  nothing of another owner's runs through these edits)
- Output: `research/frontier-37-owner-30-batch-4.pages.json` (updated in
  place), the 31 item files under `items/`, the two page files under
  `library/number-theory/`, the batch coverage file, and the batch proof
  contracts.

## 1. Inputs read and scope posture

- `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, and the group-author
  brief were read for the authoring session; the durable per-item state is in
  `research/frontier-37-owner-30-batch-4.notes.md`.
- Batch inputs: `…-batch-4.pages.json`, `…-batch-4.coverage.json`,
  `…-batch-4.notes.md`, `…-batch-4.cross-batch-dependencies.json` (`[]`),
  `…-batch-4.proof-contracts.json`.
- Scope decision: `research/frontier-37-owner-30-step3a-pair-cyclotomic-arithmetic-and-reciprocity-via-frobenius.md`
  (decision **sufficient**, receipt
  `research/frontier-37-owner-30-step3a-review-cyclotomic-arithmetic-and-reciprocity-via-frobenius.json`,
  `sha256 2f5a66dcb99d0f4a78fdcb542e9a8ed3d846f95d2739aacb32f41718f4b62d1d`).
  The receipt hash still equals the current pair scope hash recorded in
  `research/frontier-37-owner-30-ready-pair-authoring.json`, and
  `step3-decisions check --phase scope` reports no open work entry for this
  page (the five run-wide open entries are other pages). Authoring repairs
  were proof-level only; no statement, kind, inventory or page-title change
  was made, which is why the scope decision remains current.
- `research/frontier-37-owner-30-pre-splice-plan-findings.json`: **exists**;
  rechecked against current inputs at handoff — **0** findings name this pair,
  its pages, or any of its 31 item ids (string scan of the whole file). There
  is nothing to resolve for this pair and no required shared plan change.
- `research/frontier-37-owner-30-owner-authoring-direction.md`: **does not
  exist** for this run (checked at handoff). No owner direction is pending.
- Direct in-run prerequisite pairs to inspect: none (dispatch). All 88 distinct
  out-of-pair dependencies (197 dep links; the other 73 links are intra-pair)
  resolve to items with `status: published`; none is missing, unpublished or
  recorded-not-proved.
  The one Step-3a
  flagged supplier, `thm-decomposition-and-inertia-in-towers`, is published
  and is now an actual dependency of `thm-conductor-of-a-full-cyclotomic-field`
  (added at authoring and cited where the ramification indices are compared),
  so that flag is resolved.
- Design: `research/plan-number-theory-track.md` §NT-24. Conventions held
  throughout: reduced indices ($n$ odd or $4\mid n$); arithmetic Frobenius as
  the power map $\zeta\mapsto\zeta^{\ell}$; signed field discriminant
  distinguished from a positive ideal/different norm; the Gauss-sum sign kept
  convention-dependent with its B counterexample. The withdrawn abelian
  ramification corollary and the excluded Kronecker–Weber/Chebotarev/
  higher-reciprocity material are absent from the manifest, as designed.

## 2. Author-level scaffold audit and local repairs

Every scaffold was audited item by item for hypotheses, quantifiers, direct
suppliers and proof route before authoring. Four local prerequisites were
added on the assigned A page during scaffolding (registered in the manifest,
coverage, contracts and page file, and authored before their consumers):

| added item (level) | why it is load-bearing | authored consumers |
| --- | --- | --- |
| `lem-prime-power-cyclotomic-integral-structure` (0) | the ring/basis/discriminant/factor results are proved first for $\mathbb Z[\zeta_{p^a}]$; the published interface stops short of the integral-basis and valuation statements this pair needs | `thm-cyclotomic-ring-of-integers`, `thm-discriminant-of-a-cyclotomic-field`, `cor-total-ramification-in-a-prime-power-cyclotomic-field` |
| `lem-coprime-discriminant-compositum-integral-basis` (0) | the compositum induction needs $\mathcal O_{KL}=\mathcal O_K\mathcal O_L$, the product basis and the coprime-discriminant formula as one exact interface | `thm-cyclotomic-ring-of-integers`, `thm-discriminant-of-a-cyclotomic-field` |
| `lem-monogenic-prime-factorisation-by-polynomial-reduction` (0) | converts polynomial multiplicities into exact prime-ideal exponents for a monogenic ring; it is the choice-free replacement for the general ideal-factorisation interface | `thm-prime-factorisation-in-a-cyclotomic-field`, `lem-arithmetic-frobenius-on-a-cyclotomic-field` |
| `lem-arithmetic-frobenius-on-a-cyclotomic-field` (2) | the arithmetic (power-map) Frobenius of an unramified $\ell$ in $\mathbb Q(\zeta_f)$, with residue degree and uniqueness, as one exact interface | `thm-quadratic-frobenius-restriction-identity`, both supplement corollaries, `cor-unramified-prime-decomposition-in-a-cyclotomic-field`, `cor-complete-splitting-in-a-cyclotomic-field`, `ex-second-supplement-from-q-zeta-eight` |

Repairs made while authoring (all claims preserved, all precheck- and
rendercheck-clean afterwards):

1. `thm-quadratic-subfield-of-a-prime-cyclotomic-field`: removed the
   load-bearing published dependency
   `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field`, whose
   `provenance.statement` is `ai-generated` (forbidden as a dependency target
   and a `citation-ai-generated-statement` finding). Uniqueness of the
   degree-two intermediate field is now **proved locally**: the Galois group of
   $\mathbb Q(\zeta_p)$ is cyclic of order $p-1$, so it has exactly one
   subgroup of index two; FTGT and Lagrange identify it with the fixed field of
   the squares. New deps: `cor-the-galois-group-of-a-rational-cyclotomic-field`,
   `cor-unit-group-modulo-prime-is-cyclic`,
   `lem-subgroup-lattice-of-a-finite-cyclic-group`,
   `thm-fundamental-theorem-of-finite-galois-theory`, `thm-lagrange`.
2. `thm-prime-factorisation-in-a-cyclotomic-field`: dropped a
   declared-but-unused fact `[F9]` and its
   `lem-arithmetic-frobenius-on-a-cyclotomic-field` dependency (the strict
   contract requires each declared fact to be used at a step); the Remarks now
   point at `cor-unramified-prime-decomposition-in-a-cyclotomic-field`.
3. `cor-unramified-prime-decomposition-in-a-cyclotomic-field`: added
   `forward_refs: [ex-reduced-conductor-of-q-zeta-six]` for the page pointer
   (clears the `forward-undeclared` finding; the example is a later B-page
   leaf).
4. Render repairs: joined multi-line `$$…$$` displays to one line in six items
   (`def-quadratic-gauss-sum-in-a-cyclotomic-field`,
   `cor-second-supplement-via-cyclotomic-frobenius`,
   `thm-quadratic-frobenius-restriction-identity`,
   `cor-quadratic-reciprocity-via-frobenius`,
   `ex-second-supplement-from-q-zeta-eight`,
   `cor-unramified-prime-decomposition-in-a-cyclotomic-field`) so the
   rendered page and the source agree.
5. Manifest `dependency_level` labels recomputed after the repairs:
   `ex-reduced-conductor-of-q-zeta-six` 5→6 and
   `ex-prime-decomposition-in-q-zeta-twelve` 6→7 (the dispatch list carried
   scaffold-stale labels; the relative authoring order is unchanged).
6. Handoff repair: `ex-frobenius-restriction-for-p-five-q-three` cited
   `def-quadratic-gauss-sum-in-a-cyclotomic-field` in its Given (for the Gauss
   sum $\tau_5$ and $p^{*}$) but did not declare it; depcheck reported
   `cited-not-in-deps`. The definition was added to the item frontmatter and
   the manifest row, and the item decision was re-recorded (accept,
   confidence 1). Its level is unchanged (4), and after the repair no
   depcheck/fwdcheck finding names any batch-4 id.

No promised claim was dropped or weakened, no pair was added, no Recorded
(not-proved) result is consumed, and no published item or page was edited.
The published ZF concern found during the audit is reported in §6, not
repaired here.

## 3. Authoring order actually used

The table is the recomputed order (dependency level, then A before B, then item
id) and is the order in which the items were authored and recorded. All 31
items are in the manifest on the A/B pages in the page order shown.

| level | page | item |
| --- | --- | --- |
| 0 | A | `def-conductor-of-a-cyclotomic-field` |
| 0 | A | `def-quadratic-gauss-sum-in-a-cyclotomic-field` |
| 0 | A | `lem-coprime-discriminant-compositum-integral-basis` |
| 0 | A | `lem-monogenic-prime-factorisation-by-polynomial-reduction` |
| 0 | A | `lem-prime-power-cyclotomic-integral-structure` |
| 1 | A | `lem-galois-action-on-the-quadratic-gauss-sum` |
| 1 | A | `thm-cyclotomic-ring-of-integers` |
| 1 | A | `thm-quadratic-gauss-sum-square` |
| 2 | A | `cor-total-ramification-in-a-prime-power-cyclotomic-field` |
| 2 | A | `lem-arithmetic-frobenius-on-a-cyclotomic-field` |
| 2 | A | `thm-discriminant-of-a-cyclotomic-field` |
| 2 | A | `thm-quadratic-subfield-of-a-prime-cyclotomic-field` |
| 2 | B | `ex-quadratic-gauss-sum-for-five` |
| 2 | B | `ex-quadratic-gauss-sum-for-three` |
| 3 | A | `cor-first-supplement-via-cyclotomic-frobenius` |
| 3 | A | `cor-second-supplement-via-cyclotomic-frobenius` |
| 3 | A | `thm-prime-factorisation-in-a-cyclotomic-field` |
| 3 | A | `thm-quadratic-frobenius-restriction-identity` |
| 3 | B | `cex-gauss-sum-sign-without-a-complex-embedding` |
| 3 | B | `ex-quadratic-subfield-of-q-zeta-seven` |
| 4 | A | `cor-cyclotomic-ramification-criterion` |
| 4 | A | `cor-quadratic-reciprocity-via-frobenius` |
| 4 | A | `thm-conductor-of-a-full-cyclotomic-field` |
| 4 | B | `ex-frobenius-restriction-for-p-five-q-three` |
| 4 | B | `ex-second-supplement-from-q-zeta-eight` |
| 5 | A | `cor-unramified-prime-decomposition-in-a-cyclotomic-field` |
| 6 | B | `ex-reduced-conductor-of-q-zeta-six` |
| 6 | A | `cor-complete-splitting-in-a-cyclotomic-field` |
| 7 | B | `ex-prime-decomposition-in-q-zeta-twelve` |
| 7 | B | `ex-arithmetic-of-q-zeta-five` |
| 7 | B | `ex-prime-decomposition-in-q-zeta-eight` |

No later item was used to justify an earlier one; each item's declared
dependencies are earlier in this order (or published).

## 4. Per-item checkpoints

Condensed here; the full checkpoint record (claim/conventions, source
locators, dependency recheck, precheck result, gaps, next action) is in
`research/frontier-37-owner-30-batch-4.notes.md`, §“Step 3b authoring
checkpoint”. Every item below finished precheck-clean, and all 31 contracts
pass `--strict` with the single documented warning of §5; decisions are
recorded `accept` at confidence 1 with the examined dependency lists.

- **def-conductor-of-a-cyclotomic-field** (L0, definition). Least admissible
  $f$ with $K\hookrightarrow\mathbb Q(\zeta_f)$; well-defined by well-ordering;
  invariant under the splitting-field isomorphism. No proof body.
- **def-quadratic-gauss-sum-in-a-cyclotomic-field** (L0, definition).
  $\tau_p=\sum_a(a/p)\zeta_p^{\,a}$ attached to a chosen primitive root;
  integrality recorded; sign convention carried to the B counterexample. No
  proof body.
- **lem-coprime-discriminant-compositum-integral-basis** (L0, lemma).
  $\mathcal O_{KL}=\mathcal O_K\mathcal O_L$, product integral basis,
  $d_{KL}=d_K^{[L:\mathbb Q]}d_L^{[K:\mathbb Q]}$ under degree multiplication
  and coprime discriminants. Sources: Milne Lemma 6.5/Remark 6.6(c);
  Conrad–Landesman Theorem 11.9.
- **lem-monogenic-prime-factorisation-by-polynomial-reduction** (L0, lemma).
  $p\mathcal O_K=\prod_i(p,g_i(\alpha))^{a_i}$ for monogenic $\mathcal O_K$,
  residue degrees $\deg g_i$; the argument is finite and choice-free (Milne
  Theorem 3.41). The one nonfatal strict-contract warning is here (§5).
- **lem-prime-power-cyclotomic-integral-structure** (L0, lemma).
  $\mathcal O_K=\mathbb Z[\zeta_{p^a}]$, $(p)=(\lambda)^e$, power basis,
  $|\mathrm{disc}|=p^{p^{a-1}(a(p-1)-1)}$ for $\lambda=1-\zeta_{p^a}$; route
  via $\Phi_{p^a}$ ratios, norm of $1-\zeta$, the order–index formula and a
  coefficient-descent induction excluding a residual $p$-index. Sources:
  Milne Prop. 6.2 pp. 96–98; Conrad–Landesman Theorem 10.1 with Lemmas
  10.2–10.6 pp. 54–58.
- **lem-galois-action-on-the-quadratic-gauss-sum** (L1). $\sigma_b(\tau_p)=(b/p)\tau_p$
  by the substitution $c=ab$ and Legendre multiplicativity; no sign analysis.
- **thm-cyclotomic-ring-of-integers** (L1). $\mathcal O_{\mathbb Q(\zeta_n)}=\mathbb Z[\zeta_n]$
  for every $n$, by compositum induction over the prime-power factors.
- **thm-quadratic-gauss-sum-square** (L1). $\tau_p^2=p^{*}$; double-sum
  evaluation, geometric inner sums and the first supplement.
- **cor-total-ramification-in-a-prime-power-cyclotomic-field** (L2).
  $R/\lambda R\cong\mathbb F_p$, so $(\lambda)$ is the unique prime above $p$,
  totally ramified with residue degree one.
- **lem-arithmetic-frobenius-on-a-cyclotomic-field** (L2). Squarefree
  reduction of $\Phi_f$ modulo $\ell$ makes $\ell$ unramified;
  $\sigma_\ell^{-1}\mathrm{Frob}_{\mathfrak P}$ fixes $\zeta$; the power map
  $\zeta\mapsto\zeta^{\ell}$ is the arithmetic Frobenius.
- **thm-discriminant-of-a-cyclotomic-field** (L2). Absolute value from
  prime-power discriminants and the coprime compositum induction; sign
  $(-1)^{\varphi(f)/2}$ from complex-embedding pairs.
- **thm-quadratic-subfield-of-a-prime-cyclotomic-field** (L2). The unique
  degree-two intermediate field is $\mathbb Q(\tau_p)=\mathbb Q(\sqrt{p^{*}})$;
  uniqueness proved locally (repair 1 in §2); $p=3$ degeneracy noted.
- **ex-quadratic-gauss-sum-for-five** (L2, B). $\tau_5=\sqrt5$ for the standard
  root; Galois stabilizer $\{1,4\}$.
- **ex-quadratic-gauss-sum-for-three** (L2, B). $\tau_3=i\sqrt3$ for the
  standard root; the sign flips with the other root.
- **cor-first-supplement-via-cyclotomic-frobenius** (L3). $(-1/q)=(-1)^{(q-1)/2}$
  from the action on $i$ in $\mathbb Q(\zeta_4)$ and Euler's criterion.
- **cor-second-supplement-via-cyclotomic-frobenius** (L3). $(2/q)=(-1)^{(q^2-1)/8}$
  from $\sigma_q(\zeta_8+\zeta_8^{-1})$ and the combinatorial sign.
- **thm-prime-factorisation-in-a-cyclotomic-field** (L3). For reduced
  $f=\ell^a m$ ($\ell\nmid m$): $\ell\mathcal O_K=(P_1\cdots P_g)^e$,
  $e=\varphi(\ell^a)$, residue degrees $\operatorname{ord}_m(\ell)$,
  $g=\varphi(m)/\operatorname{ord}_m(\ell)$; $m=1$ cross-checked against
  total ramification. The proof uses only the choice-free local monogenic
  lemma and the finite-field cyclotomic factorisation interface.
- **thm-quadratic-frobenius-restriction-identity** (L3).
  $\mathrm{Frob}_q|_{\mathbb Q(\sqrt{p^{*}})}$ acts by $(p^{*}/q)$, and
  $(p^{*}/q)=(q/p)$; the two reductions of $\tau_p$ modulo a prime above $q$
  are compared (no root-independent sign claim).
- **cex-gauss-sum-sign-without-a-complex-embedding** (L3, B). For $p=3$ and
  $\zeta'=\zeta^2$, $\tau'=-\tau$ while $\tau^2=(\tau')^2=-3\ne0$: the sign is
  root-dependent, the square and the field are not.
- **ex-quadratic-subfield-of-q-zeta-seven** (L3, B). $p^{*}=-7$,
  $\mathbb Q(\tau_7)=\mathbb Q(\sqrt{-7})$, $\tau_7^2=-7$; generator changes
  sign with the root choice, the field is canonical.
- **cor-cyclotomic-ramification-criterion** (L4). All exponents in
  $\ell\mathcal O_K$ equal $e=\varphi(\ell^a)$, and $e=1$ iff $a=0$ (the
  $(2,1)$ shape is excluded by reducedness), so $\ell$ ramifies iff
  $\ell\mid f$; both directions.
- **cor-quadratic-reciprocity-via-frobenius** (L4).
  $(q/p)=(-1)^{(p-1)(q-1)/4}(p/q)$ by expanding $(p^{*}/q)$ with the first
  supplement.
- **thm-conductor-of-a-full-cyclotomic-field** (L4). The conductor is the
  least reduced index ($f$ or $f/2$ when $f\equiv2\bmod4$); the
  ramification-index comparison uses the published
  `thm-decomposition-and-inertia-in-towers` with
  `cor-orders-of-decomposition-and-inertia-groups` (Step-3a flag resolved).
- **ex-frobenius-restriction-for-p-five-q-three** (L4, B).
  $\mathrm{Frob}_3(\sqrt5)=-\sqrt5$ and $(3/5)=(5/3)=-1$; the missing
  definition dependency was added at handoff (repair 6 in §2).
- **ex-second-supplement-from-q-zeta-eight** (L4, B). Signs
  $+,-,-,+$ for $q\equiv1,3,5,7\pmod 8$ match $(2/q)=(-1)^{(q^2-1)/8}$.
- **cor-unramified-prime-decomposition-in-a-cyclotomic-field** (L5).
  $\ell\nmid f$: $\ell\mathcal O_K=P_1\cdots P_g$ with
  $g=\varphi(f)/\operatorname{ord}_f(\ell)$ and residue degrees
  $\operatorname{ord}_f(\ell)$, matching the Frobenius order.
- **ex-reduced-conductor-of-q-zeta-six** (L6, B). $\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$
  via $-\zeta_3$; conductor $3$; $2$ is unramified with a single degree-two
  prime. (Dispatch label 5 is scaffold-stale; computed level 6.)
- **cor-complete-splitting-in-a-cyclotomic-field** (L6). For conductor $f$,
  $\ell\nmid f$ splits completely iff all residue degrees are $1$ iff
  $\operatorname{ord}_f(\ell)=1$ iff $\ell\equiv1\pmod f$.
- **ex-prime-decomposition-in-q-zeta-twelve** (L7, B). Discriminant $144$;
  $2\mathcal O=P^2$ and $3\mathcal O=P'^2$; $\ell\nmid12$ classes $1$ vs
  $5,7,11$ give four degree-one vs two degree-two primes. (Dispatch label 6 is
  scaffold-stale; computed level 7.)
- **ex-arithmetic-of-q-zeta-five** (L7, B). $\mathcal O_K=\mathbb Z[\zeta_5]$,
  $d_K=125$, $5$ totally ramified, $2$ with $\operatorname{ord}_5(2)=4$,
  $11\equiv1\pmod5$ splits completely.
- **ex-prime-decomposition-in-q-zeta-eight** (L7, B). $d_K=2^8$; for odd
  $\ell$, $\operatorname{ord}_8(\ell)=1$ (complete splitting) for
  $\ell\equiv1$ and $2$ for $\ell\equiv3,5,7\pmod8$ (two degree-two primes).

## 5. Checks actually run

All of the following were re-run on the current tree at handoff; results as
observed.

| check | command | result |
| --- | --- | --- |
| explicit precheck | `node tools/tsx-run.mjs tools/precheck.mts <31 item paths>` | **29 checked, 0 failing** — all clean (the two definitions carry no proof body) |
| rendering | `node tools/rendercheck.mjs <31 item paths> <A page> <B page>` | **OK — 33 files**: no wikilink in math, balanced delimiters, no multiline display, all math parses under KaTeX, frontmatter YAML parses |
| content policy | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-4.pages.json` | **31 scoped items, 0 errors, 0 warnings** |
| coverage | `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-4.coverage.json --require-destination` | **1 page, 36 harvested results, 0 errors, 0 warnings** |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-4.proof-contracts.json --strict` | **0 errors, 1 warning, 31/31 items** — the warning is the nonfatal `shotgun-bracket` on `lem-monogenic-prime-factorisation-by-polynomial-reduction` (step 2.1 genuinely uses five facts; steps 6.1/7.1 are a finite-cardinality comparison and a summary and cite none). Left as a documented warning rather than distorting the contract |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-4.pages.json` | **31 items, 0 normalized, 0 errors**; manifest deps are byte-for-byte the item frontmatter lists (0 mismatches) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | **exit 0 — 812 items across 60 pages, maximum level 29**; every label equals the computed level |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | **OK** — acyclic, no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1300 pages with item lists; 367 planned pages still carry no item list (all other batches) |
| repository deps | `node tools/depcheck.mjs --json` | run-wide **186 errors / 318 warnings**, **0 naming any batch-4 id** (the batch's previous `cited-not-in-deps` warning was cleared by the handoff repair) |
| forward references | `node tools/fwdcheck.mjs --quiet` | exit 1 with 106 `link-unplanned` errors, all in other groups' items; **0 naming any batch-4 id** |
| recorded material | `node tools/extcheck.mjs --quiet` | **exit 0**; the listed published warnings are pre-existing and outside this pair |
| frontier ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | **currently exits 1 on a sibling pair's file**: `items/def-modular-specht-form-and-radical-quotient.md` (batch 23, page `integral-specht-modules-and-modular-simple-modules`) line 27 has an unescaped `\c` in a double-quoted YAML title (`S^\lambda\cap…`). Not ours to edit; see §6. The last good unified ledger (written 18:04 today) has `unreviewed_batches: []` and **0 edges touching batch 4**; the batch input is `[]` |
| item decisions | `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | **0 open work entries among the 31**; the run is not globally closed only because of other batches. All 31 receipts exist as `research/frontier-37-owner-30-step3b-review-<id>.json`, decision `accept`, confidence 1 |
| scope decision | `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | no work entry for this page; receipt hash equals the current scope hash |
| sources | SHA-256 of the three fetched PDFs on disk vs coverage `fetch_verified` | **exact match**: Milne 1,296,815 bytes `24b83c789a89f25a`; Conrad–Landesman 763,973 bytes `231296574f8fd357`; Shurman 299,552 bytes `9bf0a31cfa75084c`; 36 harvested rows, no recovery drops |
| registration | manifest/contracts/page-list scan | A page 21 items and B page 10 examples in manifest order; contracts 31/31; page `requires` set (A → `decomposition-inertia-and-frobenius`, B → A); the four added suppliers are registered in the manifest, coverage (`included` rows) and contracts |

## 6. Flags, escalations and published concerns

- **No open escalation for this pair.** All 31 items are authored with
  complete arguments and recorded `accept` at confidence 1. No supplier item
  is unauthored, so no consumer needed the provisional-citation flag.
- **Confirmed published proof-cost concern —
  `thm-number-field-integral-ideal-factorisation-in-zf`** (published,
  locally reviewed 2026-09-26, states ZF/no Choice). Its declared chain,
  verified edge-by-edge on the current tree, is
  `thm-number-field-integral-ideal-factorisation-in-zf →
  thm-height-one-localisation-of-normal-noetherian-domain-is-dvr →
  thm-equivalent-characterisations-of-a-dvr →
  thm-noetherian-ring-ideal-characterisations → def-axiom-of-choice`.
  Published direct consumers include `thm-dedekind-kummer-prime-factorisation`,
  `def-ramification-index`, `thm-fundamental-identity-for-primes-in-number-fields`,
  `def-different-of-a-number-field`, `thm-ideal-norm-is-multiplicative`,
  `thm-galois-action-on-primes-above-a-prime-is-transitive`. This batch's own
  factorisation proof does **not** use it (the local choice-free monogenic
  lemma replaces it), but 14 of the 31 items transitively reach
  `def-ramification-index` through published interfaces
  (`lem-arithmetic-frobenius-on-a-cyclotomic-field`,
  `cor-first-supplement-via-cyclotomic-frobenius`,
  `cor-second-supplement-via-cyclotomic-frobenius`,
  `thm-quadratic-frobenius-restriction-identity`,
  `cor-quadratic-reciprocity-via-frobenius`,
  `thm-conductor-of-a-full-cyclotomic-field`,
  `cor-unramified-prime-decomposition-in-a-cyclotomic-field`,
  `cor-complete-splitting-in-a-cyclotomic-field`, and the six affected B
  items): a formal proof-cost inheritance for the term “ramification index”,
  not an actual use of the general ideal-factorisation theorem in their
  proofs. The advertised blanket ZF claim is therefore **not certified by the
  current DAG**; the theorem may still be true in ZF by another route — the
  defect is in the recorded justification. Proposed owner/serial-reconciler
  repair: give the DVR equivalence a finite-number-ring local choice-free
  proof (or split out a genuinely choice-free implication) and re-point
  `def-ramification-index` and `thm-dedekind-kummer-prime-factorisation`,
  without dropping any claim. Confidence: high in the closure edges (checked
  on disk); the mathematical truth of the ZF statement was not independently
  settled here.
- **Published provenance concern —
  `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field`** (published)
  carries `provenance.statement: ai-generated` and `provenance.proof:
  ai-generated`, which content policy forbids as a dependency target. This
  batch removed its only in-run use (repair 1 in §2) and it now has zero
  declared consumers. Owner should re-derive/re-scope it; its mathematical
  content was not audited here.
- **Broader Choice bookkeeping.** A deps-only transitive traversal over the
  22,396-item frontmatter graph shows **27 of the 31 items reach
  `def-axiom-of-choice`** through older published proof chains. The four
  without such a path are `def-conductor-of-a-cyclotomic-field`,
  `def-quadratic-gauss-sum-in-a-cyclotomic-field`,
  `lem-monogenic-prime-factorisation-by-polynomial-reduction` and
  `thm-quadratic-gauss-sum-square`. The Choice remarks inside
  `lem-monogenic-prime-factorisation-by-polynomial-reduction`,
  `lem-arithmetic-frobenius-on-a-cyclotomic-field` and
  `thm-prime-factorisation-in-a-cyclotomic-field` are claims about their own
  finite arguments (and are accurate as such); closure-level certification
  still depends on the older published paths. No incompatible-axiom branch or
  `deferred-set-theory-beyond-choice` supplier is used.
- **Run bookkeeping blocker (not this pair).** The ledger refresh currently
  fails on `items/def-modular-specht-form-and-radical-quotient.md` (batch 23,
  page `integral-specht-modules-and-modular-simple-modules`) line 27
  (unescaped `\c` inside a double-quoted YAML title; repair: single-quote the
  scalar or escape the backslash). This will make the `3b-author` stage gate
  (`refresh --require-reviewed`), which the engine runs at stage close, fail
  until that owner fixes it. Route to that group's owner; batch 4's input
  stays `[]`.

## 7. Open obligations carried to Step 4

1. **Plan splice.** `research/plan-spec.json` rows 365.921/365.922 still carry
   `items: []`. Step 4 must splice the manifest inventories (21 A + 10 B), as
   designed; the authoring-side simulation with both lists inserted validated
   cleanly (no item cycle, forward reference, B-page dependency or unresolved
   id).
2. **Ledger refresh retry.** Re-run
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
   once the sibling YAML defect above is fixed; batch-4 input is `[]` and no
   batch-4 edge exists to review.
3. **Nonfatal contract warning.** The `shotgun-bracket` warning on
   `lem-monogenic-prime-factorisation-by-polynomial-reduction` is documented
   above and left as-is; it is not an error under `--strict`.
4. **Owner-held published repairs.** The ZF-theorem chain and the
   `ai-generated` corollary above belong to the owner/serial reconciler
   (`research/published-consumer-supplier-ledger.md` was not touched by this
   dispatch). Any future consumer that needs the advertised choice-freeness of
   the general factorisation theorem should wait for that repair.
5. **New-inventory class.** The four added items are new relative to the
   immutable pre-author baseline; per the dispatch they enter Step 4 with the
   current scope and item certifications after the successful dispatch, with
   no Step-3 review loop. Their content, dependency, source, rendering and
   proof-contract gates all pass in §5.
