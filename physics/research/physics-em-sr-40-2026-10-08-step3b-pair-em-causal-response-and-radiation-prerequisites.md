# Step 3b authoring report — pair `em-causal-response-and-radiation-prerequisites` / `-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 19; 2026-10-09.
- A page: `em-causal-response-and-radiation-prerequisites` (order 315, category `classical-electromagnetism-mathematics`, library `mathematics`).
- B page: `em-causal-response-and-radiation-prerequisites-examples` (order 316).
- Owned items (dispatch order, ascending dependency level):
  1. `thm-em-causal-dispersive-response` (A, level 2) — authored; all checks pass; item decision recorded `escalate` (see "Escalation" below) and now evidence-complete for owner resolution.
  2. `thm-em-radiation-asymptotic-flux` (A, level 3) — authored; decision `repaired`, confidence 1, closed on current hashes.
  3. `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries` (B, level 4) — authored; decision `repaired`, confidence 1, closed on current hashes.

## Final state of the carriers

- Item carriers: `items/thm-em-causal-dispersive-response.md` (34 deps), `items/thm-em-radiation-asymptotic-flux.md` (25 deps), `items/ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.md` (34 deps).
- Page carriers: `library/classical-electromagnetism-mathematics/em-causal-response-and-radiation-prerequisites.md` (items list: the two theorems) and `...-examples.md` (examples list: the example). Both are draft, carry page summaries, and list every owned item exactly once.
- Batch records: `research/physics-em-sr-40-2026-10-08-batch-19.pages.json` (inventories and dependency metadata kept in step with the carriers; item 2 deps 23 -> 25 by the local repairs below), `.proof-contracts.json` (fresh quotes for every cited supplier; F15 quote regenerated from the authored `lem-em-period-average` Statement; new F9/F14 rows for the added suppliers), `.coverage.json` (unchanged Step-1 source record), `.cross-batch-dependencies.json` (all five rows `verified`; see below), `.notes.md` (unchanged Step-1 record).
- Review receipts: `research/physics-em-sr-40-2026-10-08-step3b-review-thm-em-radiation-asymptotic-flux.json` and `...-review-ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.json` (`repaired`, confidence 1, current hash); `...-review-thm-em-causal-dispersive-response.json` (`escalate`, hash now stale because the supplier landed afterwards; owner-held).

## Exact claims, conventions and suppliers (audited, then written)

1. `thm-em-causal-dispersive-response`. Real $d\times d$ matrix kernels, $\mathbb R^d$ histories, all matrix/vector integrals entrywise (componentwise) as scalar Lebesgue integrals, $L^1(0,\infty;\mathbb R^{d\times d})$ entrywise; Countable Choice declared, Dependent Choice in clause (c). The Statement now defines the principal value $\operatorname{PV}\int_{\mathbb R}F(\xi)/(\xi-\omega)d\xi=\lim_{R\to\infty}\lim_{\eta\downarrow0}(\int_{\omega-R}^{\omega-\eta}+\int_{\omega+\eta}^{\omega+R})F(\xi)/(\xi-\omega)d\xi$ (same convention as the batch-16 supplier) and the conjugate transpose $(\chi^*)_{jk}=\overline{\chi_{kj}}$. Clauses: (a) causal convolution $P(t)=\int_0^\infty K(s)E(t-s)ds$ for $K\in L^1$, $E$ bounded continuous: absolute convergence, entrywise sup bound, linearity, continuity, causality; (b) compact branch $K\in C_c^\infty((0,\infty))$: entire $\chi$, reality identity, $|z|^{-2}$ upper-half-plane bound, whole-plane bound with support factor $e^{b\max(0,-\operatorname{Im}z)}$, principal-value pair by the indented contour; (c) integrable branch supplied by the authored batch-16 lemma `lem-em-integrable-causal-dispersion` (local absolute continuity entrywise, $K,K',sK\in L^1$, holomorphy, closed-half-plane bounds, PV pair, instantaneous subtraction) — hypotheses matched sentence by sentence; (d) monochromatic period-averaged work $(\varepsilon_0\omega/2)\operatorname{Im}(e^*\chi(\omega)e)$ equal to the quadratic form of $M(\omega)=(\chi-\chi^*)/(2i)$, whose positivity is equivalent to nonnegative work and is *not* implied by causality.
2. `thm-em-radiation-asymptotic-flux`. Constants $c>0$, $\mu_0>0$, $a>0$, $t_0<T$; $\rho,\mathbf J$ smooth with (H1) compact spacetime support in $\overline B_a\times[t_0,T]$ and (H2) $\partial_v\rho+\operatorname{div}_y\mathbf J=0$; the Statement now defines $B_a,\overline B_a,S^2$ and uses the single surface symbol $d\Omega$. (a) $C^\infty$ retarded potentials and exact field integrals on $\{|x|>2a\}$, identified with the zero-data wave Cauchy solution of the authored supplier `thm-em-wave-cauchy-kirchhoff` for $h=\mu_0c^2\rho$, $h=\mu_0J_k$; (b) uniform far-zone errors $\Gamma_E/r^2,\Gamma_B/r^2$ with constants controlled by finitely many source suprema, plus the continuity identity $\int_{B_a}\rho_t=(1/c)n\cdot\mathbf V$; (c) outward-flux limit at fixed retarded time with its explicit caveat.
3. `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries`. (i) $K(s)=-e^{-s}$: $C^1$, $K,K',sK\in L^1$ with integrals 1; the integrable branch applies; $\chi(z)=-1/(1-iz)$ on $\operatorname{Im}z\ge0$ computed with the complex primitive; $\operatorname{Im}\chi(\omega)=-\omega/(1+\omega^2)<0$ for $\omega>0$, so the dissipative part is strictly negative and the period-averaged work is strictly negative while causality and the dispersion relations hold — passivity is an additional model condition. (ii) For $r>\max\{2a,a+c(t-t_0)\}$ every source argument lies before $t_0$, so the fixed-observation-time far-zone flux integral is identically zero while the theorem limit is at fixed retarded time — the retarded-time formulation cannot be replaced by a fixed-observation-time one.

## Escalation status (exact IDs)

- Flagged pair at entry: supplier `lem-em-period-average` (batch 13, home `em-elementary-mathematical-prerequisites`), consumer `thm-em-causal-dispersive-response`, consuming proof step: clause (d), step 3.3, with amplitude vectors $a=e$ and $d=(-i\omega)\varepsilon_0\chi(\omega)e$.
- At recording time (2026-10-09T07:32:39Z) no carrier existed, so `step3-decisions.mjs record-item` was invoked with `--decision escalate` after complete authoring and checks of the consumer; the receipt records the escalation.
- The supplier was authored at 18:34 local (carrier `items/lem-em-period-average.md`); its Statement (scalar form for $a,d\in\mathbb C$ plus the $\mathbb C^3$ vector forms) was read and reconciled: step 3.3 uses exactly the scalar form summed over the coordinate pairs, the F15 contract quote was regenerated from the authored Statement, and on current inputs strict proof contracts report 0 errors and depcheck reports no unresolved dependency or link.
- The escalation is therefore evidence-complete. Only the owner may resolve it (the engine blocks further worker recording over an escalation); owner resolution is the one remaining Step-3 action for this pair, after which item 1 needs no further content work.

## Dependency changes made while authoring (all published imported suppliers, all inside the declared page closure)

- `thm-em-causal-dispersive-response`: added `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-continuity-under-the-integral-sign`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-and-cosine-derivatives`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `cor-continuous-functions-are-borel-measurable`, `thm-complex-exponential-is-entire-with-derivative-itself`, `cor-complex-differentiability-implies-continuity`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality` (24 -> 34 deps; `dependency_roles` all `mathematical-premise`).
- `thm-em-radiation-asymptotic-flux`: added `cor-mean-value-theorem`, `def-integrable-real-and-complex-functions-and-their-integrals`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `cor-continuous-functions-are-borel-measurable`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality` (16 -> 23 at authoring), and then `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` (new fact F14: the translation $z\mapsto x+z$ as a $C^1$ diffeomorphism of Jacobian 1, replacing a tacit substitution in step 2.2) and `lem-euclidean-chart-measure-agrees-with-polar-surface-measure` (agreement of the polar measure $\sigma$ with the chart surface measure $d\Omega$; new F9 citation row) (23 -> 25 deps).
- `ex-...-hypothesis-boundaries`: added `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-linearity-of-the-lebesgue-integral-on-l-one` (30 -> 34 deps).
- Items 1 and 2 were also repaired by defining the principal value, the conjugate transpose and the ball/sphere notation in their Statements; no promised claim was weakened or removed.

## Cross-batch dependency inputs

`research/physics-em-sr-40-2026-10-08-batch-19.cross-batch-dependencies.json`, all five rows now `verified` with carrier-level evidence:

- page `em-causal-response-and-radiation-prerequisites` -> page `em-wave-equation-prerequisites` (batch 17; both page carriers authored; the item-level use in clause (a) rechecked);
- `thm-em-causal-dispersive-response` -> `lem-em-integrable-causal-dispersion` (batch 16; statement matched to clause (c));
- `thm-em-causal-dispersive-response` -> `lem-em-period-average` (batch 13; statement matched to step 3.3; escalation above);
- `thm-em-radiation-asymptotic-flux` -> `thm-em-wave-cauchy-kirchhoff` (batch 17; zero-data case matched to clause (a));
- `thm-em-radiation-asymptotic-flux` -> `lem-em-parameter-integrals` (batch 13; one-parameter lemma re-instantiated per parameter direction over the fixed compact set $\overline B_a$).

## Checks actually run (final pass on current inputs)

- `precheck.mts` on the three item paths — PASS (strategy `direct`).
- `proof-layout.mjs` on the three item paths (single batched command after the final edits) — 3 items, 32 steps, 0 defects.
- `rendercheck.mjs` on the three items and two pages — OK (5 files; YAML, KaTeX, delimiters).
- `prosecheck.mjs` on the same five files — 0 errors, 0 warnings.
- `content-policy.mjs research/...-batch-19.pages.json` (item mode) — 3 scoped items, 0 errors, 0 warnings.
- `proof-contract.mjs research/...-batch-19.proof-contracts.json --strict` — 0 errors, 0 warnings, 3/3 items (after the F15 quote regeneration; every citation quote was verified against the current supplier Statement sections).
- `depcheck.mjs --items-file` (three items) — OK; no unresolved dependency, no unresolved link, no cycle.
- `item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` — exit 0; 473 items, 80 pages; levels 2 / 3 / 4 consistent with item frontmatter and manifest.
- `manifest-deps.mjs` on the batch-19 manifest — 3 items, 0 errors.
- `pathcheck.mjs --pages-file` — 0 pathway files for this category, 0 errors, 0 warnings.
- `coverage-checklist.mjs research/...-batch-19.coverage.json --require-destination` — 1 page, 17 harvested results, 0 errors, 0 warnings.
- `frontier-dependency-ledger.mjs refresh --run ...` — refreshed and deduplicated (the earlier malformed sibling carrier that blocked the refresh has been repaired by its owner).
- `frontier-item-gate.mjs --run ... --tool validate-plan` — run-wide FAIL, **no finding names either page of this pair** (see open obligations); the pair's pages appear with their declared prerequisites `the-lebesgue-and-riemann-integrals-compared`, `em-wave-equation-prerequisites` (315) and `em-causal-response-and-radiation-prerequisites` (316).
- `step3-decisions.mjs check --run ... --phase final` — items 2 and 3 not in the work list (decisions closed on current hashes); item 1 listed as requiring the owner's resolution of the recorded escalation.

## Open obligations

1. **Owner resolution of item 1's recorded escalation** (exact IDs in the escalation section above). Evidence for the owner: authored supplier carrier, reconciled statement, regenerated F15 contract quote, and the clean strict-contract/depcheck results of the final pass.
2. **Run-level pre-splice plan mismatches (not this pair).** `validate-plan` fails with 33 `undeclared-prereq` errors on sibling pages (largest: `em-elementary-mathematical-prerequisites` 12, `em-primitives-and-postulates` 9, `em-potentials-and-gauge` 8, `em-expanded-analysis-prerequisites` 7); none names pages 315/316 or any item of this pair. These are Step-4 splice/reconciliation findings for the owner and the affected pair owners.
3. **Concurrency note.** Review hashes cover the transitive closure, which includes sibling batch manifests (13/16/17) that their owners are still rewriting; if those inputs change again before the Step-3 join, items 2 and 3 will require a hash-current re-audit by the ordinary gate repair path. The content itself was audited against the carriers current at the time of this report.

## Published concerns

- No published imported item used by this pair was found defective; all published suppliers were read at their Statement/Definition and matched to their uses.
- Two exact-instantiation cautions, recorded in the facts: `lem-em-parameter-integrals` is a pointwise one-parameter statement (used by renaming the parameter per direction over a fixed compact set, never differentiating the integrated variables), and `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic` requires the four partials continuous at the point (supplied by dominated convergence in step 2.4 of item 1).
- No sibling or published file was edited; all changes are confined to this pair's items, pages, batch-19 records, and this report. No owner records, judge stamps or audit stamps were written.
