# Batch 30 authoring notes — Banach range invariance and EIT rates

## Scope, plan, and current run evidence

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the Step 1 sections of `WORKFLOW.md`, the batch task, beta batch brief, owner authoring direction, IP-30 design section, `research/plan-spec.json`, and the current batch evidence before constructing items.
- The IP-30 design and `plan-spec.json` agree on the page IDs, title, category, order 3056/3057, companion, and three page prerequisites. The plan-spec target entry has `items: []`; the complete design names `def-ip-differential-range-invariance`, `thm-ip-joint-regularization-rate-under-range-invariance`, and `thm-ip-frozen-newton-rate-under-range-invariance`. I treated the empty `items` list as an unfilled scaffold, not a contrary claim. The two local proof lemmas below are intermediate results required by the proof routes; the EIT source-reconciliation remark preserves a material source discrepancy for owner review.
- The dispatch says batch 30 is dependency level 5 with prerequisites 25 and 27 and scheduling input `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`. The on-disk `batch-dependency-levels.json` currently has the same batch-30 level and prerequisite row, but its top-level `input_sha256` is `1ed1a175c7399c73862d00093b6cb77d38db19fe866bfff7b4b4bddae12d7728`. I am preserving both observations and escalating this hash mismatch for owner reconciliation; the shared scheduling artifact is not being edited.
- The recomputed autopilot status at `2026-10-19T03:59:06.433Z` reports Step 1 scaffold at 76/109, with batch 30 among the missing coverage, and a run-wide owner repair/recertification blocker. The blocker file contains no mention of this pair. Current HEAD at inspection was `50139bdcb6` (`Defer compact construction artifact scans until author drain`). No run state, shared plan, verdict, or other pair is being changed.

## Scaffold inventory and item dependency levels

The page-pair inventory, direct item dependencies, and item levels are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-30.pages.json` before item carriers were written. In-run levels use actual batch-25 and batch-27 item labels; external published definitions do not raise a level.

| Authoring order | Item | Page | Level | In-run direct suppliers |
|---|---|---|---:|---|
| 1 | `def-ip-differential-range-invariance` | A | 3 | `def-ip-tangential-cone-condition` (2) |
| 2 | `ex-ip-relaxed-variable-requires-penalty` | B | 4 | `def-ip-differential-range-invariance` (3) |
| 3 | `ex-ip-partial-observation-range-invariance-without-tcc` | B | 4 | `def-ip-differential-range-invariance` (3), `def-ip-tangential-cone-condition` (2) |
| 4 | `def-ip-relaxed-range-invariance-objective` | A | 4 | range-invariance definition (3), Banach subgradient definition (0) |
| 5 | `lem-ip-joint-range-invariance-vsc-estimate` | A | 5 | objective definition (4), range-invariance definition (3), `def-ip-variational-source-condition` (3), `def-ip-bregman-distance` (2), Banach subgradient definition (0) |
| 6 | `lem-ip-frozen-newton-one-step-error-recursion` | A | 5 | objective definition (4), range-invariance definition (3), VSC (3), Bregman definition (2), Banach subgradient definition (0), `lem-ip-index-function-young-conjugate-bound` (0) |
| 7 | `thm-ip-joint-regularization-rate-under-range-invariance` | A | 6 | joint estimate lemma (5), objective definition (4), range-invariance definition (3), VSC (3), Bregman definition (2), index lemma (0), Banach subgradient definition (0) |
| 8 | `thm-ip-frozen-newton-rate-under-range-invariance` | A | 6 | frozen-step recursion lemma (5), objective definition (4), range-invariance definition (3), VSC (3), Bregman definition (2), index lemma (0), Banach subgradient definition (0) |
| 9 | `rem-ip-eit-conductivity-rate-source-reconciliation` | A | 7 | joint theorem (6), frozen-Newton theorem (6) |

The graph is acyclic. During construction I added `def-ip-relaxed-range-invariance-objective` before the two lemmas because their joint and frozen objectives are shared technical terms; the scaffold levels were recomputed before those carriers were written. The local lemmas separate the objective comparison/VSC inequality and the frozen-step recursion from their rate-discharge theorems. The B examples use the range-invariance definition and do not consume the EIT application claims.

## Supplier and convention checks

- Read the actual batch-25 `def-ip-tangential-cone-condition` and `def-ip-nonlinear-forward-map` carriers. The former is a one-basepoint Hilbert-space residual condition with `0 ≤ η < 1`; the latter's interface is specifically real Hilbert spaces. IP-30's abstract result is Banach-space valued. The new range-invariance definition states its Banach spaces directly and records the Hilbert TCC only as a separate comparison; it does not infer range invariance from TCC or TCC from differentiability.
- Read the actual batch-27 `def-ip-banach-convex-subgradient-and-dual-pairing`, `lem-ip-banach-fenchel-duality-for-regularization`, `lem-ip-index-function-young-conjugate-bound`, `def-ip-bregman-distance`, `def-ip-variational-source-condition`, and `thm-ip-vsc-nonlinear-regularization-rate` carriers. The local proofs use the VSC on its stated regularizer sublevel, the orientation `D_R^ξ(x,x†)=R(x)-R(x†)-⟨ξ,x-x†⟩`, and the exact conjugate-bound lemma. No minimizer-existence theorem is imported: joint and frozen reconstructions are explicitly assumed to be approximate minimizers.
- The source's range condition is `F(x)-F(x₀)=Kr(x)` with bounded linear `K` into the named data Banach space. The derivative equation `F'(x)=Kr'(x)` is used only when the maps are differentiable and follows by differentiating the factorization. This range condition is not the tangential cone inequality.
- The joint result retains both relaxation controls: the `β Q(r(x), r̂)^p` coupling and the `||P x||^p` penalty. Its regularizer is `R̂(r̂)=Ř((I-P)r⁻¹(r̂))`; the `P`/`Q` compatibility assumption is explicit. The frozen-Newton claim adds the paper's `Ř + R_P` regularizer, `β_n=c_{βα}α_n`, decreasing schedule, approximate-minimizer tolerance, conjugate-growth bound, stopping rule, and small Taylor-remainder condition on `r`.
- The declared PDE page `fredholm-elliptic-problems-and-the-elliptic-spectrum` exists and is published. The current EIT carriers `def-ip-conductivity-dirichlet-to-neumann-map` and `lem-ip-conductivity-map-wellposedness` concern a Dirichlet-to-Neumann map and Dirichlet states. They do not define or prove the design's Neumann-to-Dirichlet sequence map with zero-boundary-mean normalization. The published `lem-elliptic-state-map-c1-under-uniform-coercivity` and `thm-elliptic-adjoint-reduced-gradient` are finite-dimensional parameter results (`Θ⊂R^m`), so they do not directly prove differentiability of the infinite-dimensional conductivity-to-data map. The missing local N-to-D state/range-invariance and Taylor-remainder arguments are recorded as open authoring obligations; no Dirichlet result is silently substituted.

## Full-text sources inspected

- Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, arXiv:2403.18704, complete 27-page PDF: §1 equation (1.6) and the augmented-variable/penalty equations (1.7)–(1.11); §2 Theorem 3 and its proof, including (2.1), (2.4)–(2.16); §2.3 Theorem 7 and its proof, including (2.31)–(2.41); §3 Theorems 8/10 and Corollaries 9/11. Retrieved via the arXiv PDF endpoint and inspected as complete browser text and local PDF text.
- Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs* (2019), complete 222-page publisher PDF: Theorem 2.20 and proof; Chapter 6 Theorems 6.10, 6.11, 6.12, and 6.15 with the full source-to-VSC proof route, printed pp. 177–185. The publisher PDF endpoint did not load through the browser cache; I searched the publisher record and retrieved the same publisher-hosted full PDF with `curl`, converted it with `mutool`, and inspected the complete relevant text and Theorem 6.15 page image. Retrieval succeeded; no source was dropped.
- Christian Clason, *Regularization of Inverse Problems*, complete lecture notes, arXiv:2001.00617v2 (137 pages): Chapter 10, equation (10.17), Theorem 10.7 and its complete proof through (10.20), printed p. 100. This independently supports the ordinary Hilbert VSC/Tikhonov rate route; it does not supply the Banach range-invariance or frozen-Newton theorem.
- Full-text retrieval and `source-fetch-check --stamp` succeeded for all three PDFs after the structured coverage carrier was authored; the durable stamps, byte counts, page counts, and SHA prefixes are recorded in the final closeout section.

## EIT rate discrepancy and owner escalation

The paper's conductivity specialization is not being treated as verified from citation alone. Exact source comparison shows two unresolved quantitative inconsistencies:

1. Kaltenbacher 2024, Theorem 10 (printed p. 24) states the VSC logarithmic exponent `(s₂-s₁)(2s₁-3)/(s₁-1)` and cites Weidling 2019, Theorem 6.15 with `p=2`. Weidling's full Theorem 6.15 proof (printed p. 185) sets `s₁=3/p+1+τ`, `s₂=s`, and `μ=2(s₂-s₁)/(s₂-1)`. With `p=2`, the resulting log exponent is `(s₂-s₁)(2s₁-3)/(s₂-1)`, not the denominator `s₁-1` printed in Kaltenbacher's theorem. The paper's Theorem 10 assertion needs an independent derivation or owner correction.
2. The paper's Corollary 11 reports an H^{s1} conductivity norm rate with exponent nu_tilde/p_tilde. But for Ř(sigma)=1/2||sigma||²_{H^{s1}}, the Bregman distance is 1/2||sigma-sigma†||²; applying the abstract Bregman rate to an index psi(t)≈(-log t)^(-nu) yields a norm exponent nu/2, not every exponent reported in the corollary. Also the pure-power parameter rule alpha≈delta^{p_tilde}, p_tilde in (0,2], does not satisfy the sufficient two-sided Theorem 3 coupling tau delta² <= alpha H(1/(2C alpha)) <= tau_bar delta² for this logarithmic index: H(q)≈(log q)^(-nu), so alpha H(1/(2C alpha))≈alpha(log(1/alpha))^(-nu). Kaltenbacher's Remark 1 separately asserts that pure powers still give the same log rate; that distinct assertion requires an independent derivation and is not disproved solely by failure of Theorem 3's sufficient coupling.

Affected planned claim: the explicit 3D conductivity/EIT application of both `thm-ip-joint-regularization-rate-under-range-invariance` and `thm-ip-frozen-newton-rate-under-range-invariance`. Proposed local suppliers if the owner confirms the intended claim: a Neumann-to-Dirichlet sequence-map definition and well-posedness lemma on the unit ball; a full range-invariance/local-inverse and frozen Taylor-remainder lemma for the augmented `(σ,z)` map; and a locally proved Besov stability-to-VSC lemma with the correct exponent and parameter coupling. The source conflict and these precise prerequisites remain escalation evidence, not an acceptance or a repair of any published or shared item.

## Item checkpoints

## Item checkpoint — `def-ip-differential-range-invariance`

- **Claim/convention:** For real Banach spaces $X,Y,Z$, a fixed $x_0\in U\subseteq X$, and $F:U\to Y$, range invariance is the factorization $F(x)-F(x_0)=Kr(x)$ with a fixed bounded linear $K:Z\to Y$. No injectivity of $K$, uniqueness of $r$, or $r(x_0)=0$ is assumed. The derivative identity follows only under the separately stated open-domain Fréchet differentiability hypotheses.
- **Dependencies/placement:** `def-banach-space` and `def-ip-tangential-cone-condition`; manifest level 3 because the latter actual batch-25 item is level 2. A page placement is recorded in the batch manifest; page carrier is pending.
- **Sources:** Kaltenbacher, arXiv:2403.18704, §1, equation (1.6); full PDF inspected. The statement distinguishes the range factorization from the TCC's local residual-relative first-order remainder.
- **Decision/validation:** Draft carrier created. Definition precheck is `n/a`; final statement/page checks and Step-1 decision remain pending. The actual batch-25 TCC statement was inspected; no claim of independent approval is made.
- **Next:** Write the two level-4 B examples and the level-4 objective definition, then the level-5 estimate lemmas and level-6 rate theorems.

## Item checkpoint — `ex-ip-partial-observation-range-invariance-without-tcc`

- **Claim/convention:** On $U=(-6,6)^2$, the partial observation $F(s,t)=s+9\int_0^s e^{-u^2}du$ factors as $F(x)-F(0)=Kr(x)$ with $K(a,b)=10a$ and $r(s,t)=(F(s,t)/10,t)$. The factorization and its inverse are Lipschitz on the image. The TCC fails specifically on the declared radius-5 ball: at $h=(5,0)$ the Taylor remainder exceeds the data residual, so no allowed $\eta<1$ works there. The example does not claim TCC fails on every smaller neighborhood. The unobserved $t$ coordinate also shows that range invariance does not imply identifiability.
- **Dependencies/placement:** `def-ip-differential-range-invariance` (level 3) and the actual batch-25 TCC definition (level 2); B page, item level 4.
- **Source:** Constructed directly; the two definitions are cited as interface facts. No literature theorem is used to infer the counterexample.
- **Decision/validation:** Draft proof is complete on inspection; scoped precheck/proof-layout and final Step-1 decision remain pending.
- **Next:** Author the relaxed-variable penalty example, then the shared objective definition and the level-5 joint estimate and frozen recursion lemmas.

## Item checkpoint — `ex-ip-relaxed-variable-requires-penalty`

- **Claim/convention:** The relaxed scalar map $\widetilde F(c,z)=c+z$ has exact-fit pairs $(c,y-c)$ without a penalty. Adding $\lambda|P(c,z)|^2=\lambda z^2$ for any fixed $\lambda>0$ selects the unique exact-fit representative $(y,0)$.
- **Dependencies/placement:** `def-ip-differential-range-invariance` (level 3); B examples page, item level 4.
- **Source:** Finite-dimensional construction proved directly; no external theorem is used.
- **Decision/validation:** Draft proof is complete on inspection; scoped precheck/proof-layout and final Step-1 decision remain pending.
- **Next:** Author the level-4 shared objective definition, then `lem-ip-joint-range-invariance-vsc-estimate` and `lem-ip-frozen-newton-one-step-error-recursion` at level 5.

## Inventory update — shared objective definition

Before using the relaxation objective in either rate proof, I added `def-ip-relaxed-range-invariance-objective` at level 4 to define the joint and affine-frozen objectives, their `Ř + R_P` regularizer, the `βQ^p` coupling, and the `||Px||^p` penalty. Its only in-run supplier is the range-invariance definition at level 3; it also cites the batch-27 proper-convex-subgradient interface. The two intermediate lemmas are consequently level 5 and both theorems level 6; the EIT reconciliation remark is level 7. The manifest was updated before writing the new definition carrier. No cycle was introduced.

## Item checkpoint — `def-ip-relaxed-range-invariance-objective`

- **Claim/convention:** The definition specifies the joint data term, transformed regularizer, `βQ^p` coupling, and projection penalty `||Px||^p`. It also defines the frozen-Newton objective by replacing `r(x)` in the coupling term with `r(x_n)+r'(x_n)(x-x_n)`. The joint theorem sets `R_P=0`; the frozen theorem retains the separate penalty functional `R_P`.
- **Dependencies/placement:** `def-ip-differential-range-invariance` (level 3) and `def-ip-banach-convex-subgradient-and-dual-pairing` (batch 27, level 0); A page, item level 4.
- **Source:** Kaltenbacher 2024, equations (1.8), (1.11), (2.7), (2.20), and (2.35), all inspected in the full PDF. No existence or uniqueness of minimizers is included.
- **Decision/validation:** Draft definition created with `verification.precheck: n/a`; final scoped statement checks and Step-1 decision are pending.
- **Next:** Prove the level-5 joint comparison/VSC estimate and frozen-Newton one-step recursion.

## Item checkpoint — `lem-ip-joint-range-invariance-vsc-estimate`

- **Claim/convention:** Under the joint approximate-minimum inequality, exact-data competitor, range factorization, `R̂(r̂)=Ř((I-P)r⁻¹(r̂))`, the stated VSC on the projected candidate, and the projection/coupling compatibility, the scalar error inequality is `sδ+(1-b)αeδ ≤ (2+Cη)δ^p+αψ(C_*sδ)`. The constant $C_*$ includes the factor $2^{2p-2}$ and the ratio $C_Q^p/\beta$. Symmetry of $Q$ is explicit because the objective and projection compatibility use opposite argument order.
- **Dependencies/placement:** range-invariance definition (3), relaxed-objective definition (4), batch-27 convex-subgradient definition (0), Bregman definition (2), and VSC definition (3); A page, item level 5.
- **Source:** Kaltenbacher 2024, §2, equations (2.10)–(2.14), complete proof inspected. The proof locally derives the comparator estimate, Bregman/VSC bound, and the $C_*$ residual comparison; it does not assume a minimizer exists.
- **Decision/validation:** Draft proof now has four explicit steps with labelled supplier facts. Scoped precheck/proof-layout and final Step-1 decision remain pending. No EIT conclusion is used in this lemma.
- **Next:** Prove the frozen-Newton one-step estimate and recursive error bound, including the exact $c_{tcr}$ smallness threshold and schedule assumptions.

The EIT source-reconciliation remark and both rate theorem items remain blocked from `ready` until the cited exponent, parameter coupling, and EIT map prerequisites are locally established.


## Item checkpoint — lem-ip-frozen-newton-one-step-error-recursion

- **Claim/convention:** The one-step lemma starts from the actual frozen objective in Kaltenbacher equation (1.11), whose coupling is the norm distance of the affine proxy ell_n(x)=r(x_n)+r'(x_n)(x-x_n) from rhat. It proves an inequality for S_{n+1} + alpha_n E_{n+1} with corrected constants lambda=2^(1-p), t=2^(2-2p)-2^(p-1)c_tcr^p, and v=(1+2^(p-1))c_tcr^p.
- **Dependencies/placement:** The range factorization, joint/frozen objective, Banach subgradient, Bregman distance, VSC, and index-function conjugate lemma are exact suppliers. Local dependency level 5; A page.
- **Full-source check and disposition:** Kaltenbacher 2024, §2.3, equations (2.31)–(2.41), PDF pp. 15–17; Weidling 2019, Theorem 2.20, printed pp. 60–62. The full arguments were inspected. The paper's printed comparison (2.39) uses coefficient 2^(1-p)-2^(p-1)c_tcr; however, with the stated frozen objective (1.11), Q(a,b)=||a-b||, and general p, the direct triangle-power argument yields an additional 2^(1-p) loss before Taylor error. The paper's intermediate replacement would require A^p <= B^p+(A-B)_+^p, which fails at p=2, A=3, B=2. This item does not rely on that step: it proves the conservative bound from A<=B+D and ||r(x_{n+1})-r†||<=A+||rhat-r†||. Owner should reconcile source equation (2.39) before accepting the paper's weaker smallness threshold.
- **Argument/dependencies:** The proof compares against (r(x†),x†), uses the noise triangle estimate, controls affine-proxy error with the two explicit power inequalities, applies the VSC and penalty lower bound, absorbs the compatibility term, and applies the actual batch-27 conjugate lemma. No minimizer-existence claim is made; only an approximate step is assumed.
- **Validation:** Carrier written; statement/proof-layout, proof contract, source-fetch stamp, dependency-level check, and readiness record remain pending.

## Item checkpoint — thm-ip-joint-regularization-rate-under-range-invariance

- **Claim/convention:** For fixed positive coupling parameter beta, source-index bounds at 1/(C_* alpha) and 1/(2 C_* alpha), and alpha H(1/(C_* alpha)) comparable to delta^p, the joint comparison lemma yields Bregman error O(H(1/(C_* alpha))), all scalar errors O(delta^p), and the data residual and projection/range residuals O(delta).
- **Dependencies/placement:** The exact range-invariance and relaxed-objective definitions, the actual batch-27 Banach subgradient/Bregman/VSC/index suppliers, and the local joint-error lemma; level 6; A page.
- **Source/locators:** Kaltenbacher 2024, Theorem 3 and equations (2.10)–(2.16), full PDF proof inspected; Weidling 2019, Theorem 2.20 and proof; Clason, Regularization of Inverse Problems, Theorem 10.7 and proof. The local proof discharges the conjugate bounds from the inspected batch-27 lemma rather than citing a rate alone.
- **Validation:** Carrier written; final layout/contracts/scoped checks and readiness record pending.

## Item checkpoint — thm-ip-frozen-newton-rate-under-range-invariance

- **Claim/convention:** The recurrence is summed under q C_H<1, where q=v/t uses the corrected one-step constants. The rate theorem requires a bounded crossing of rho_n=alpha_n H(1/(2 Cbar alpha_n)) around tau delta^p; this controls both the accumulated error and the residual of the selected iterate.
- **Dependencies/placement:** Frozen one-step lemma plus the exact objective, range, Banach subgradient/Bregman/VSC and conjugate-index suppliers; level 6; A page.
- **Schedule difference:** The source's first-crossing rule alpha_n <= phi(tau delta^p) alone does not bound rho_n above at the last iterate when the schedule can jump arbitrarily. The item adds the explicit bounded-crossing assumption. This is a proved strengthening of the schedule, not silently attributed to the paper.
- **Source disposition:** The paper's §2.3 equations (2.39)–(2.41) and Weidling/Clason generic VSC rates were inspected. This theorem proves the frozen rate from the corrected local recurrence and does not use the source's unsupported power comparison.
- **Validation:** Carrier written; final layout/contracts/scoped checks and readiness record pending.

## Item checkpoint — rem-ip-eit-conductivity-rate-source-reconciliation

- **Claim/convention:** The remark records, without asserting as verified library theorems, the paper's 3D unit-ball EIT regime sigma_bg=1, s1 in (5/2,7/2), s2 in (s1,2s1-1), sigma† in B^{s2}_{2,infinity}, and its reported log index/rates. Its verification computes the conflicting log exponents and the quadratic-Bregman square-root loss.
- **Dependencies/placement:** Joint and frozen generic rate theorems; level 7; A page.
- **Full-text source evidence:** Kaltenbacher 2024, Example 2 equations (1.18)–(1.24), Theorem 10 and Corollary 11, full PDF pp. 5 and 24–25; Weidling 2019, Chapter 6 Theorem 6.15 complete proof, printed pp. 184–185; Clason Theorem 10.7 and proof. The source texts were inspected, not inferred from abstracts.
- **Exact unresolved EIT prerequisites:** Add proposed A-page items def-ip-neumann-to-dirichlet-sequence-map, lem-ip-neumann-state-wellposedness-and-normalization, lem-ip-eit-augmented-range-invariance-and-frozen-remainder, and lem-ip-eit-besov-vsc-and-index-correct-rate. They must specify -div(sigma grad u)=0 or the source's equivalent Schrödinger model on the unit ball, Neumann current basis, zero boundary-mean normalization, the conductivity/Besov regularity and admissibility class, local inverse/Lipschitz and Taylor hypotheses, and a complete stability-to-VSC exponent derivation. Affected claims: the explicit EIT specialization of both generic rate theorems. These are significant local prerequisites, so the explicit application is escalated instead of filled with a citation.
- **Quantitative source conflicts:** (i) Kaltenbacher Theorem 10 (printed p. 24) states denominator s1-1, while Weidling Theorem 6.15 at p=2 yields denominator s2-1; (ii) Corollary 11 reports norm exponent nu/p_tilde, but its quadratic regularizer has Bregman distance 1/2 ||sigma-sigma†||^2, so the abstract Bregman log exponent nu alone gives norm exponent nu/2; (iii) for log H(q) comparable to (log q)^(-nu), no alpha comparable to delta^p_tilde, 0<p_tilde<=2, satisfies the two-sided sufficient parameter coupling in Kaltenbacher Theorem 3. The source's Remark 1 separately asserts that the same log rate can be obtained with a pure power, which remains an additional result to derive or reconcile. Complete asymptotic calculations are in the remark verification steps.
- **Validation/readiness:** Carrier written. Record escalated until the owner resolves the source discrepancies and the required EIT suppliers are authored and inspected.


## Final scoped closeout — 2026-10-19 04:53 UTC

### Authored carriers and decisions

- Batch-30 inventory and levels are fixed at 9 items: A page has 7; B page has 2 examples. The A/B library pages contain YAML frontmatter only, with empty Markdown bodies and no authored page summaries. The workflow engine has not yet applied page_layout: compact-v1; the owner/engine is responsible for that native post-authoring step.
- Step-1 records were written with node tools/step1-decisions.mjs record for all 9 items. Six are ready: def-ip-differential-range-invariance, def-ip-relaxed-range-invariance-objective, ex-ip-partial-observation-range-invariance-without-tcc, ex-ip-relaxed-variable-requires-penalty, lem-ip-joint-range-invariance-vsc-estimate, and lem-ip-frozen-newton-one-step-error-recursion. Three are escalated: thm-ip-joint-regularization-rate-under-range-invariance, thm-ip-frozen-newton-rate-under-range-invariance, and rem-ip-eit-conductivity-rate-source-reconciliation. The two generic rate proofs are locally complete; their readiness is escalated because IP-30's design also requires the disputed explicit EIT claims.
- The active Step-1 readiness recomputation reports the six ready hashes current and only the three intentional batch-30 escalations open. The run as a whole is not closed.

### Scoped validation

- proof-layout: 9 changed items, 27 numbered steps, 0 defects.
- normative precheck: 7 proof-bearing items checked, 0 failing; definitions have no proof-phase body.
- proof-contract: strict, 9/9 items, 0 errors, 0 warnings.
- citation-fidelity: 9 items, 20 exact supplier quotes checked, 0 missing quotes, 0 widening candidates.
- content-policy: batch-30 manifest, 9 items, 0 errors, 0 warnings.
- focused depcheck: 9 items, 0 errors, 0 warnings; 351-item and 257-page prerequisite closures checked.
- source-fetch-check: 3/3 full-text sources stamped, 0 drops.
- Direct graph recomputation for every batch-30 item matched its declared dependency_level exactly: levels 3, 4, 5, 6, and 7; no batch-30 cycle or label mismatch. The run-wide item-dependency command also reports unfinished inventories and unrelated level mismatches outside this batch; no batch-30 item appeared in those failures.

### Full-text fetch stamps

- Kaltenbacher 2024 PDF: retrieved 2026-10-19T04:41:05.533Z; 322159 bytes; SHA-256 prefix d9796ef6f95294c1; 27 pages.
- Weidling 2019 publisher thesis PDF: retrieved 2026-10-19T04:41:09.495Z; 3460746 bytes; SHA-256 prefix fdb575cd2800a35c; 225 PDF pages. The earlier browser-cache failure and successful curl recovery are retained in coverage/search evidence.
- Clason arXiv:2001.00617v2: retrieved 2026-10-19T04:43:21.308Z; 1145516 bytes; SHA-256 prefix 696b4f580464ec0e; 137 pages. The 119-page IMSC mirror was fetch-checked but is not the version used for the inspected theorem proof.

### Current run and scheduling evidence

The recomputed autopilot status at 2026-10-19T04:52:56.360Z still says the run is running, Step-1 scaffold is 80/109 with batch 30 missing from native coverage, nothing is in flight, and the run-wide owner repair/recertification blocker remains. The status blocker points to research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. This beta did not edit .autopilot state or owner verdicts. HEAD remains 50139bdcb6 (Defer compact construction artifact scans until author drain).

Batch 30 still declares dependency_level 5 with prerequisites 25 and 27. The on-disk batch dependency table's current input hash is 9284b36bc6e0fd19751819c3c112413699fe438266d6273ed9d6155366f197c1, while this dispatch carries 41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62. The earlier inspection observed 1ed1a175c7399c73862d00093b6cb77d38db19fe866bfff7b4b4bddae12d7728 before that shared file changed. The current batch-30 row itself remains correct. This input-hash drift is escalated for owner reconciliation; the shared dependency artifact was left untouched.


### Post-escalation source clarification

After the EIT item was marked escalated, I clarified its wording to distinguish failure of Theorem 3's sufficient two-sided parameter bracket from Kaltenbacher Remark 1's separate assertion that pure powers still achieve the logarithmic rate. The proof contract now cites the local joint theorem for that sufficient bracket, and coverage records Remark 1 (printed p. 11) as a separate harvested assertion. The existing EIT escalation record was not overwritten; the owner should confirm its evidence when resolving that item.

### Final rerun after source clarification

Proof-layout again reports 9 items, 27 steps, 0 defects. Precheck reports 7 proof-bearing items checked and 0 failing. Strict proof-contract reports 9/9 checked with no errors or warnings. Citation-fidelity checks 20 exact quotes with no missing quote or widening. Focused content-policy reports 9 scoped items with 0 errors/warnings; focused depcheck reports 0 errors/warnings and validates both page closures; source-fetch-check confirms 3/3 stamps.


### Final autopilot status refresh

The recomputed run status at 2026-10-19T04:57:57.428Z is still running; Step-1 scaffold is now 85/109, with batch 30 still listed as missing from native coverage, nothing in flight, and the same run-wide owner repair/recertification blocker. The latest Step-1 readiness scan shows 517 ready of 1070 current item rows; the only batch-30 open rows are the three escalations recorded above.
