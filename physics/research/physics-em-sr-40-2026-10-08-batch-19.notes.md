# Batch 19 notes — `em-causal-response-and-radiation-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09. Scope: exactly one A/B pair, A page order **315**, B page order **316**, category `classical-electromagnetism-mathematics`, library `mathematics`. Final inventory: **2 A items + 1 B item**, all recorded `ready` with current dependency hashes. No item file, page, plan, published item, engine state or verdict was edited. Files written: the batch manifest, coverage (with five stamped full-text sources), the cross-batch dependency input, the three `step1-*` readiness records, the tool-refreshed unified ledger, this note, and the shared gate selector files rewritten by the frontier-gate wrapper.

The binding owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first, together with the Step-1 drift context for this page.

## Design vs plan, exact source inventory, and conflicts recorded

Design section `research/plan-classical-electromagnetism-track.md` L695–L803 ("Em Causal Response And Radiation Prerequisites"), quoting `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json` (`mathematical_pages[4]`), plus the completed arguments `completed-expansion-arguments.md#D1-D2` and `#A1-A2` and `mathematical-example-verifications.md#ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries`. Compared with `research/plan-spec.json` entries 315/316: page ids, kind, orders (315/316), category, library `mathematics`, titles, companion links and the declared `requires` (`em-wave-equation-prerequisites`) agree exactly. **No plan conflict** on page metadata. The design's A=2/B=1 inventory is preserved; the design's labels 1/3/4 become 2/3/4 under the label rule (conflict 2 below).

**Conflicts between the historical design text and the current scaffold (recorded, not silent).**

1. **`def-schwartz-space-and-its-seminorms` is not consumed and was dropped.** The historical M14 reservation listed it as a candidate tool for a "Fourier existence" branch. The completed D1–D2 argument replaced that branch by the phasor/Laplace route: the transfer function is defined directly by $\chi(z)=\int_0^\infty K(s)e^{izs}ds$, and no claim of the pair refers to Schwartz-class histories or to a Fourier transform of a history. Keeping the edge would be a declared dependency with no use; dropping it weakens no promised claim. The design's `def-complex-domain` edge is replaced by the exact holomorphy definition item `def-complex-differentiability-holomorphic-and-entire` (the page-310 lemma itself carries `def-complex-domain`).

2. **`thm-em-causal-dispersive-response` gains the in-run dependency `lem-em-period-average`** (batch 13, level 1). The completed D1 argument includes the monochromatic period-averaged work formula and the passivity equivalence, and that lemma is the library's exact supplier of the period average of a product of real parts of complex exponentials. The theorem's computed level is therefore **2**, not the design's 1 (the design's array already forced level 3 for the radiation theorem; the label rule is "one plus the maximum in-run dependency level").

3. **`thm-em-radiation-asymptotic-flux`: the design's `lem-em-coulomb-dipole-remainder` and `lem-em-period-average` edges are dropped** and replaced by the tools the completed A1 argument actually uses. The A1 proof contains no Coulomb-dipole expansion; its only expansion is the exact estimate of the kernel $1/|x-y|$ and the continuity identity $\int\rho_t=(n/c)\cdot V$. The period average belongs to the physics dipole item A2, which the current design homes on `em-retarded-fields-and-radiation`; it is not used by the mathematical far-zone statement. The radiation theorem keeps and uses `thm-em-wave-cauchy-kirchhoff` as the design requires (the retarded potentials are identified with the zero-data wave Cauchy solution), and the design's phrase "their W5 retarded fields" is replaced by explicit retarded-integral definitions because a mathematical item may not depend on the physics item `pthm-em-retarded-potentials`; the bridge between the two is provided in the physics layer by W3/W5 and is not needed here. The design's divergence tool is replaced by the exact published form `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` (ball domain), whose AC_ω assumption is declared and carried.

4. **The example gains a second clause.** The design listed both theorems as the example's dependencies, but the recorded example content (`mathematical-example-verifications.md`) exercises only the causal-response item. Clause (ii) was added by this scaffolder to exercise the second declared dependency and to make the design's own recorded caveat ("a limit at fixed retarded time $u$, not at fixed observation time $t$") checkable: it shows the fixed-observation-time flux integral vanishes identically beyond the light cone of the compact spacetime support. The recorded clause (i) is preserved in content.

## Inventory decisions (recorded)

1. **A item `thm-em-causal-dispersive-response`** (theorem, mathematics; level 2; 20 deps). Clauses: (a) causal convolution and its bound/continuity; (b) the compact branch with the entire transfer function, the reality identity, the explicit $|z|^{-2}$ bound and the principal-value dispersion relations; (c) the integrable branch exactly as supplied by `lem-em-integrable-causal-dispersion` (page 310) including the instantaneous subtraction; (d) the monochromatic period-averaged work and its equivalence to nonnegativity of $(\chi-\chi^{*})/(2i)$. The research claims of D1 and D2 are preserved; no claim is weakened, and the "no sign of dissipation follows from causality" statement is proved on the companion example page by a witness rather than asserted without proof in the theorem.

2. **A item `thm-em-radiation-asymptotic-flux`** (theorem, mathematics; level 3; 16 deps). Clauses: (a) retarded potentials and the exact field integrals with the identification with the zero-data wave Cauchy solution; (b) the uniform far-zone expansion with explicit error constants and the continuity identity; (c) the outward-flux limit at fixed retarded time. The design's A1 statement, hypotheses and limit are preserved exactly, including its two caveats (uniform errors controlled by finitely many source suprema; a limit at fixed retarded time).

3. **B item `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries`** (example, mathematics; level 4; 26 deps). Clause (i): the design's kernel $K(s)=-e^{-s}$, its class membership, $\chi(\omega)=-1/(1-i\omega)$, $\operatorname{Im}\chi(\omega)=-\omega/(1+\omega^2)<0$, so passivity is an additional restriction; clause (ii): the fixed-observation-time flux vanishes for $r>a+c(t-t_0)$.

4. **Labels.** `item-dependency-levels check --run` computes level 2 for the first theorem, 3 for the second and 4 for the example, matching the manifest; no cycle and no label mismatch (the whole-run check reports only the empty inventories of batches still in flight).

5. Hard cap: 2 items on the A page, 1 on the B page; no split needed.

## Dependency verification (actual uses, not declared edges)

All 50 distinct dep targets of the three items resolve: 43 published imported items on disk and 7 in-run items (`lem-em-integrable-causal-dispersion`, `lem-em-period-average`, `lem-em-parameter-integrals`, `thm-em-wave-cauchy-kirchhoff`, and the three items of this batch). Every published supplier was located on its home page and checked to lie inside the transitive `requires` closure of page 315 (script check over `plan-spec.json` and the published placements): 0 undeclared homes. Points checked in particular:

- `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic` needs the four real partials on a neighbourhood, continuous at the point, satisfying the Cauchy–Riemann equations; the scaffold's route proves exactly this for each entry of the transfer function by differentiating under the integral in the two real parameters, with $\partial_y\chi=i\,\partial_x\chi$.

- `cor-cauchy-theorem-for-null-homotopic-loops` supplies the contour argument in the compact branch; `thm-differentiation-under-the-integral-sign` supplies the real-parameter differentiation; both are used with their stated hypotheses (measurable/continuous integrands, integrable majorants on compact parameter sets, a closed rectifiable contour).

- `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` assumes AC_ω and a bounded $C^1$ domain; the consumer applies it on a ball of radius $R>a$ containing the spatial support, whose boundary flux vanishes, so $\int\operatorname{div}_y\mathbf J=0$; the AC_ω assumption is declared and carried.

- `cor-c-one-change-of-variables-for-l-one-functions` is applied with the $C^1$ diffeomorphism $v\mapsto c(t-v)$ on a compact interval; its own AC_ω assumption is already declared by the item.

- `lem-em-parameter-integrals` is used over the compact $B_a$ in the parameter directions $x_j$, $t$, $u$ and $n_j$; as recorded in batch 17 for the same supplier, its proof is uniform in the chosen parameter, and the item's own caveat ("nothing is asserted for moving parameter sets") is respected because the integration domain is fixed.

- No missing, circular, forward or inadequate dependency was found; no choice principle beyond the declared $\mathrm{AC}_\omega$ (through the surface integral, polar-coordinates and change-of-variables conventions) is used by these three items, and the causal-response item is choice-free.

## Cross-batch edges

Recorded with review rows in `research/physics-em-sr-40-2026-10-08-batch-19.cross-batch-dependencies.json` (7 rows: 1 page edge and 6 item edges, two of them same-batch):

- page `em-causal-response-and-radiation-prerequisites` -> page `em-wave-equation-prerequisites` (batch 17);

- `thm-em-causal-dispersive-response` -> `lem-em-integrable-causal-dispersion` (batch 16, level 0) and -> `lem-em-period-average` (batch 13, level 1);

- `thm-em-radiation-asymptotic-flux` -> `thm-em-wave-cauchy-kirchhoff` (batch 17, level 2) and -> `lem-em-parameter-integrals` (batch 13, level 0);

- `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries` -> the two theorems of this batch (levels 2 and 3).

## Sources (five treatments, all full-text stamped)

1. D. Tong, *Kinetic Theory* (Cambridge Part III), Chapter 4 "Linear Response", `https://davidtong.org/pdfs/teaching/kinetic-theory/kinetic4.pdf` — read §4.1.1–§4.1.3 (printed pp. 79–86): the response function and its Fourier convention, the anti-Hermitian dissipative part, causality implies analyticity in the upper half-plane, and the indented-contour Kramers–Kronig derivation with its stated decay assumption and the reconstruction formula. Stamped 2026-10-09.

2. D. Tong, *Electromagnetism* (Cambridge), `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf` — read §6.1 (retarded potentials, pp. 134–142), §6.2 (dipole radiation, power radiated, pp. 143–149) and §7.5.4 (causality and the Kramers–Kronig relation for the polarisability, pp. 200–203). Stamped 2026-10-09.

3. R. Fitzpatrick, *Classical Electromagnetism* (UT Austin), "Retarded potentials" (node 50), `https://farside.ph.utexas.edu/teaching/em/lectures/node50.html` — the retarded-potential solutions (508)–(510) from the time-dependent Green's function. Stamped 2026-10-09.

4. R. Fitzpatrick, *Classical Electromagnetism*, "Retarded fields" (node 52), `https://farside.ph.utexas.edu/teaching/em/lectures/node52.html` — the exact field formulas (541)–(542) obtained by differentiating the retarded potentials, i.e. the field-integral representation of clause (a). Stamped 2026-10-09.

5. P. Hadley, *Advanced Solid State Physics* (TU Graz), "Causality and the Kramers–Kronig relations", `http://lampz.tugraz.at/~hadley/ss2/linearresponse/causality.php` — impulse response and causality, the generalized susceptibility, the even/odd time-domain route to K–K, the frequency-domain principal-value pair, and the explicit warning that the sign of the imaginary part depends on the phasor convention. Stamped 2026-10-09.

Every heading of the read ranges has a disposition in the coverage file (`included` against the three items, `deferred` to `em-retarded-fields-and-radiation` / `em-retarded-point-prerequisites`, or `out-of-scope` with a specific reason). The pair's own three results are recorded as `canonical` rows. Source independence is limited for the Kramers–Kronig half: Tong's two courses are by the same author, and the third K–K treatment (Hadley, a different author) is the independent one; the radiation half has two independent authors (Tong and Fitzpatrick). This limitation is recorded, not hidden.

## Checks run (actual results)

- `item-dependency-levels check --run` — no error other than 46 `empty scaffold inventory` rows for pages of batches still in flight; no cycle, no label mismatch, this batch's items compute 2 / 3 / 4.

- `manifest-deps` (batch-19 manifest) — 3 items, 0 errors; all manifests — 234 items, 0 errors.

- `content-policy --manifest-only` (all manifests) — 234 scoped items, 0 errors, 0 warnings.

- `source-fetch-check --coverage … --stamp` — 5/5 fetch-verified (newly stamped), 5/5 resolved; check mode — 5/5 fetch-verified.

- `coverage-checklist … --require-destination` — 1 page, 17 harvested results, 0 errors, 0 warnings.

- `url-sweep --coverage … --recover --fail-on-dead` (output to `/tmp/batch19-url-liveness.json`) — 5/5 live, 0 failed, 5 citation decisions.

- `source-backing --coverage … --liveness …` — 0 errors; every authored result still backed by an openable source or documented alternative argument.

- `step1-decisions check --run` — all three batch-19 items closed/`ready`; the remaining work rows are the empty pages of in-flight batches.

- `frontier-dependency-ledger refresh --run` — refreshed; all batch-19 rows carry review rows. `--require-reviewed` still fails only because other batches' inputs are not yet written (run-level state, not a batch-19 defect).

## Findings for owner reconciliation (none blocking this pair)

- **Future consumer need (angular moments).** The physics dipole item `pthm-em-dipole-radiation` (page `em-retarded-fields-and-radiation`, batch 36) needs the sphere second-moment identity $\int_{S^2}n_in_j\,d\Omega=(4\pi/3)\delta_{ij}$ to convert the flux limit of clause (c) into the $8\pi/3$ angular integral. No item in this pair or in the current plan's closure of page 315 supplies it (a proof would need the sphere total mass $4\pi$, whose natural suppliers — the ball-volume and Gaussian-moment items — are homed outside this page's declared `requires` closure). The batch-36 scaffolder should either prove it inline with math suppliers or request a local mathematical supplier item and the corresponding `requires` declaration through the ordinary escalation path. This pair deliberately does not claim it.

- **Pre-existing run-level findings (not this batch).** `frontier-item-gate --tool validate-plan` FAILs with 6 `undeclared-prereq` errors on other batches' pages: `sr-proper-time-comparisons` (1: `construction-of-the-natural-numbers`), `sr-energy-momentum` (2: `rings-subrings-and-integral-domains`, `construction-of-the-natural-numbers`) and `em-causal-wave-kernel-prerequisites` (3: `fubini-and-change-of-variables`, `the-topology-of-euclidean-space`, `density-separability-and-convolution-in-lp`), plus 13 pre-existing `redundant-prereq` warnings on other pages. No finding names either batch-19 page or item. The item selectors (`depcheck`, `fwdcheck`, `extcheck --manifest-only`) cannot run at all yet: `readRunManifestPages` aborts on `physics-em-sr-40-2026-10-08-batch-10.pages.json` (empty inventory of a batch still in flight), a run-level state.

- **Published defects: none found** in the 43 published suppliers cited. Each was checked for statement, hypotheses, direction and conventions against the use recorded here; no repair is proposed.

## Honest uncertainty

- **Absolute continuity.** The integrable branch uses the phrase "locally absolutely continuous", following the page-310 lemma. The library's sharp-fundamental-theorem/absolute-continuity page lies outside this page's declared `requires` closure, so the scaffold verifies the hypothesis in the example through its exact content for a $C^1$ function (the integral representation $K(b)-K(a)=\int_a^bK'$ on compact intervals, Newton–Leibniz) rather than citing a standalone definition item. Step 3 authoring and Step 5 review should confirm this convention, or request the definition item and its page declaration, before the integrable branch is accepted.

- **Parameter-direction use of `lem-em-parameter-integrals`.** As recorded in batch 17, that lemma is stated for one real parameter but its proof is uniform in the parameter; this scaffold uses it in the directions $x_j,t,u,n_j$. If the Step-5 reviewers require a literal one-parameter reading, the author should re-apply the lemma with the parameter renamed, which is a syntactic change only.

- **Proof route choices beyond the recorded arguments.** The completed D1–D2/A1 arguments are research records; the scaffold fixes the exact statements, hypotheses and supplier uses as above (holomorphy via Cauchy–Riemann from the real-parameter differentiation theorem; the reality identity via the conjugation isometry of the exponential series; the wave-Cauchy identification via the polar-coordinates formula and the one-dimensional change of variables; the complex exponential evaluated through the complex primitive and the complex fundamental theorem). These are mathematical choices made by this scaffolder to make the recorded arguments checkable with available suppliers; they preserve every promised claim. Step-3 authoring and Steps 5–8 review must check the written proofs against them.

- Neither the source reading above nor this scaffold is an independent mathematical review; Step 3 provides that review.
