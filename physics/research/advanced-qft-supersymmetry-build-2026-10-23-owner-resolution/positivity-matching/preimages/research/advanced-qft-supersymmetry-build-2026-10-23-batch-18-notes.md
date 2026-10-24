# Batch 18 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `18` · dependency level `2` · assigned pair: `qftx-eft-dispersion-and-bootstrap`

## Scope and plan comparison

The assigned design is the complete section “Gapped-Scalar Dispersion Positivity and Finite Bootstrap” in `research/plan-advanced-qft-and-supersymmetry-track.md` (L247 onward). Its scope is the forward, massive identical-scalar amplitude and finite truncated constraints. The canonical `research/plan-spec.json` and the dispatched `batch-18.pages.json` agree on page IDs, title, A/B companion, category, library, order `974`, and both required pages. The noncanonical `scaffold/plan-fragment.json` uses order `18`; it is a relative scaffold order, while the canonical plan and native manifest control the authored absolute order `974`. The empty item arrays in planning manifests are placeholders; the six assigned contracts are in the dated proposed inventory.

The current full dependency-level record places batch 18 at level 2, after batch 16 at level 1. Batch 16 is `qftx-eft-operator-quotients`. At the initial scope review its manifest had no item carriers; the current-state recheck below supersedes that observation. The current manifest now lists seven carriers: `def-aqft-local-operator-and-dimension`, `lem-aqft-invariant-quotient-exactness`, `lem-aqft-finite-order-local-operator-space-finite-dimensional`, `def-aqft-lsz-amplitude-data`, `def-aqft-operator-basis-quotient`, `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`, and `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`. The assigned A page retains the required logical page edge. The authored amplitude theorem and finite constraints remain at the on-shell coefficient interface; they do not infer an off-shell Wilson-operator map.

The other required page, `qftx-on-shell-amplitudes`, is a current published mathematics page with four listed items. I inspected the definition of complex null momenta/helicity weights, the null-factorization lemma, the rational BCFW-residue theorem, and the polarization Ward proposition, including their full local proofs. Their actual scope is spinor-helicity and conditional rational tree recursion; the BCFW theorem assumes rationality, simple channel poles, factorization residues, and vanishing at infinity. This pair does not use those claims as proof inputs. The plan marks this page edge as contextual/nonlogical. Its current identity and stated scope were verified for that limited page-context check; its existence does not construct a general gapped scalar S-matrix.

## Item inventory, dependencies, and levels

Levels below count only in-run item suppliers, as required by Step 1. External pinned mathematics is prerequisite context and does not change the numeric level.

| Item | Direct item dependencies | Level |
|---|---|---:|
| `def-aqft-scattering-amplitude-input` | none | 0 |
| `lem-aqft-crossing-even-forward-amplitude` | `def-aqft-scattering-amplitude-input` | 1 |
| `def-aqft-truncated-amplitude-bootstrap-problem` | `def-aqft-scattering-amplitude-input` | 1 |
| `thm-aqft-gapped-scalar-forward-positivity` | `def-aqft-scattering-amplitude-input`, `lem-aqft-crossing-even-forward-amplitude`, pinned complex-analysis and improper-integral results | 2 |
| `prop-aqft-finite-truncated-bootstrap-constraints` | `def-aqft-truncated-amplitude-bootstrap-problem`, `thm-aqft-gapped-scalar-forward-positivity`, pinned improper-integral results | 3 |
| `ex-aqft-scalar-positivity-bound` | `def-aqft-truncated-amplitude-bootstrap-problem`, `prop-aqft-finite-truncated-bootstrap-constraints` | 4 |

The proposition depends on the positivity theorem because its moment identities are the theorem's actual output; the example depends on the finite-constraint definition and proposition because it checks the resulting finite coefficient region. The definition of the finite problem depends on the local amplitude-input definition so the coefficient and gap normalizations are exact. No external BCFW result is needed for this calculation.

## Source reading and retrieval history

The complete relevant A5 specialist-note passage in `research/advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md` (A5) was read, together with the full dated prose scaffold. It requires a massive gapped scalar, crossing, analyticity, a finite forward limit, an explicit polynomial-growth premise, stable-pole subtraction, the optical-theorem sign, and an explicit warning against universal Wilson-coefficient signs or massless/gravitational extensions.

Three independent full-text treatments were inspected:

| Source | Read locator and supported scope | Limits |
|---|---|---|
| Adams, Arkani-Hamed, Dubovsky, Nicolis, and Rattazzi, [“Causality, Analyticity and an IR Obstruction to UV Completion”](https://arxiv.org/pdf/hep-th/0602178) | §4, PDF pp. 14–19: crossing-even forward amplitude, cut locations, mass-gap/IR-regulator role, contour at infinity, pole contributions, optical-theorem sign, and the scalar EFT coefficient interpretation. | Their massless Goldstone example uses an IR regulator and, away from the strict gapped setup, controlled power-suppressed corrections; their gravity discussion excludes the ordinary forward argument. No universal operator sign is imported. |
| de Rham, Melville, Tolley, and Zhou, [“Positivity Bounds for Scalar Theories”](https://arxiv.org/pdf/1702.06134) | Full five-page paper inspected, especially §§2.1–2.2 and equations (1)–(15), PDF pp. 1–3: partial-wave convention, optical theorem, two subtractions, pole subtraction, crossing variable, and positive forward derivatives. | The paper's wider nonforward and UV-completion conclusions are outside this pair. The local proof reproduces only the stated forward scalar moment formula under explicit data hypotheses. |
| Basile, Buoninfante, Di Filippo, Knorr, Platania, and Tokareva, [*Lectures in Quantum Gravity*](https://arxiv.org/pdf/2412.08690.pdf) | Full 303-page lecture-notes PDF retrieved; §3.2.1–§3.2.3 and §3.3.1, printed pp. 90–98 (PDF pp. 94–97): analyticity, polynomial boundedness, cut deformation, twice-subtracted forward integral, optical theorem, and the second-derivative bound. | This is a SciPost Physics Lecture Notes submission, not a final published book. Its gravitational positivity section warns that the massless graviton forward pole needs additional Regge/IR hypotheses. |

An initial UZH PHY578 lecture-note PDF link returned HTTP 401 in the browser. A search located the complete 303-page lecture-notes alternative above, whose relevant derivation was successfully read. The selected Adams and de Rham PDFs and the lecture-notes PDF are queued for the required local `source-fetch-check --stamp`; no fetch stamp is claimed until that command succeeds.

## Mathematical conventions and proof boundary

Use natural units `c = hbar = 1`, metric `diag(-,+,+,+)`, and (s=-(p_1+p_2)^2), (t=-(p_1-p_3)^2), (u=-(p_1-p_4)^2), so (s+t+u=4m^2). At forward scattering (t=0), put (v=s-2m^2) and ν₀=`2m^2`; the cuts are (v\le-\nu_0) and (v\ge\nu_0). Stable real (s/u) poles are subtracted in crossing-paired form. Real analyticity and (s\leftrightarrow u) crossing are explicit data hypotheses. The high-energy condition is the uniform outer-arc limit (B(v)/v^2\to0), which makes the twice-subtracted outer contribution vanish. The forward spectral sign ρ(ν)≥0 is the specified optical-theorem unitarity input, not a proof that arbitrary amplitude data come from a physical QFT. All weighted spectral integrals are specified as convergent improper Riemann integrals; no arbitrary choice principle is used.

The local contour proof derives the two-subtraction representation, including both cuts, pole removal, crossing, and the optical-theorem sign. It asserts only nonnegativity; equality is permitted when the absorptive part vanishes. The finite constraints are necessary constraints on normalized on-shell amplitude Wilson coordinates. They do not prove that every finite-test-allowed vector extends to a full analytic unitary amplitude or to an EFT. The separate planned operator-quotient page is needed for any general translation to off-shell Lagrangian coefficients.

## Authoring log

### 1. `def-aqft-scattering-amplitude-input`

Defined an abstract forward-amplitude data package with signature `(-+++)`, `s+t+u=4m^2`, crossing action `s\leftrightarrow4m^2-s`, paired real stable-pole subtraction, gap `\nu_0=2m^2`, real analyticity, the two-cut domain, uniform `o(v^2)` outer growth, vanishing threshold caps, and a nonnegative, locally Riemann-integrable optical-theorem density with finite `\int\rho/\nu^3`. The partial-wave convention is stated conditionally; the proof package uses only the forward sign and does not claim an LSZ or full S-matrix construction. No off-shell Wilson-operator sign is asserted.

- Dependencies: none; `dependency_level: 0`.
- Sources and locators: Adams et al., [arXiv full PDF](https://arxiv.org/pdf/hep-th/0602178), §4, PDF pp. 14–19; de Rham et al., [arXiv full PDF](https://arxiv.org/pdf/1702.06134), §§2.1–2.2, equations (1)–(15), PDF pp. 1–3; Basile et al., [full lecture-notes PDF](https://arxiv.org/pdf/2412.08690.pdf), §§3.2.1–3.3.1, printed pp. 90–98.
- Decision: preserve the mathematical theorem as conditional data; do not infer that these axioms are realized by an actual QFT.
- Validation: final item-mode, render, proof-layout, and source-fetch checks remain pending.
- Unresolved obligation: the required page edge to the absent `qftx-eft-operator-quotients` carrier remains open; this definition introduces only the amplitude-level input.
- Next: author `lem-aqft-crossing-even-forward-amplitude` and `def-aqft-truncated-amplitude-bootstrap-problem` before their consumers.

### 2. `lem-aqft-crossing-even-forward-amplitude`

Proved (B(v)=B(-v)) from the explicit forward crossing action (s\leftrightarrow u=4m^2-s) and the paired, crossing-symmetric real pole sum; differentiability at the subtraction point then gives (B'(0)=0). This proves the symmetry used to combine the two cuts and removes the first subtraction coefficient without assuming a model-specific scattering construction.

- Dependency: `def-aqft-scattering-amplitude-input` (mathematical premise); level 1.
- Sources and locators: Adams et al., §4, PDF pp. 14–19; de Rham et al., §§2.1–2.2, equations (7)–(11), PDF pp. 2–3; Basile et al., §3.3.1, printed pp. 96–98. Source-status and reading-limit details are in the source table above.
- Decision: direct substitution proves the crossing-even interface; no external page theorem is used as an item premise.
- Validation: final precheck, rendering, proof-layout, and contract checks remain pending.
- Unresolved obligation: the A-page dependency on the absent operator-quotient page remains open; the lemma itself has only the current local definition as a logical supplier.
- Next: author `def-aqft-truncated-amplitude-bootstrap-problem` before the finite-constraints proposition.

### 3. `def-aqft-truncated-amplitude-bootstrap-problem`

Defined the dimensionless coordinates b_k = nu0^(2k+2) B^(2k+2)(0)/(2k+2)! for a finite truncation 0 <= k <= N, and the three finite families of quadratic constraints on b. The coordinates are explicitly on-shell forward-amplitude Wilson coordinates; the definition does not identify them with an arbitrary off-shell operator coefficient. The feasible set is a necessary finite test, not a sufficient extension criterion.

- Dependency: `def-aqft-scattering-amplitude-input` (mathematical premise); level 1.
- Sources and locators: Adams et al., §4, PDF pp. 14–19; de Rham et al., §2.2, equations (11)–(15), PDF pp. 2–3; Basile et al., §3.3.1, printed pp. 96–98. The moment-matrix form is a local definition proved in the next proposition, not copied as a source theorem.
- Decision: retain exact amplitude normalization and dimensional factors; finite constraints will be shown necessary only.
- Validation: final precheck, rendering, proof-layout, and contract checks remain pending.
- Unresolved obligation: any translation from these on-shell coordinates to a general local operator basis depends on the still-absent `qftx-eft-operator-quotients` page; no such map is claimed here.
- Next: author `thm-aqft-gapped-scalar-forward-positivity`, then the finite-constraints proposition.

## Source-search update and fetch verification

The current-session full-text reinspection covered Adams et al., §4, PDF pp. 14–19, including the forward contour/pole/optical-theorem discussion at equations (19)–(24) and the IR-regulated massless-scalar caveat at equations (30)–(31); de Rham et al., the complete five-page paper, §§2.1–2.2 and equations (1)–(15); and the complete 303-page Basile et al. lecture-notes PDF, §§3.2.1–3.2.3 and 3.3.1, printed pp. 90–98. The selected source PDFs were independently fetched by `source-fetch-check --stamp`; all three received full-text PDF stamps. See the coverage record for exact bytes, hashes, page counts, locators, and per-result dispositions.

Searches performed in this session:

- Query: `site:arxiv.org/pdf/2412.08690 positivity bounds scalar amplitude simplest positivity bound lecture notes`. Result: identified the full Basile et al. lecture-notes PDF at arXiv:2412.08690; its complete document and assigned sections were inspected.
- Query: `site:arxiv.org "Positivity Bounds for Scalar Theories" de Rham Melville Tolley Zhou`. Result: identified arXiv:1702.06134 and its complete five-page PDF; assigned sections and equations were inspected.
- Historical candidate: the UZH PHY578 PDF URL attempted earlier in this same session returned HTTP 401. An alternative complete full-text lecture-notes treatment was located and selected. No claims in this batch rely on the inaccessible PDF; no retrieval success is claimed for that URL.

## Authoring log updates

### 4. `thm-aqft-gapped-scalar-forward-positivity`

Proved the two-cut forward moment formula for every integer `n >= 1` under the exact abstract amplitude data: a positive gap `nu0=2m^2`, paired subthreshold simple-pole subtraction, evenness, real analyticity, nonnegative locally Riemann-integrable right-cut density, finite `integral rho/nu^3`, vanishing threshold caps, convergent cut-bank limits, and uniform upper-half-plane `B(w)=o(|w|^2)`. The proof constructs the shifted upper-half-plane contour, derives its principal-value identity with the pinned Cauchy tools, combines left and right cuts using crossing and real analyticity, expands the convergent kernel, and proves each moment nonnegative. Equality is permitted. A TikZ contour schematic is included and explicitly declared nonessential to the proof.

- Dependencies: local amplitude-data definition, crossing-even lemma, and the exact pinned Cauchy and improper-Riemann items listed in the theorem frontmatter; level 2.
- Sources and locators: Adams et al., §4, PDF pp. 14–19, especially (19)–(24) and the IR qualification (30)–(31); de Rham et al., complete paper §§2.1–2.2, (1)–(15), PDF pp. 1–3; Basile et al., complete lecture notes §§3.2.1–3.2.3 and 3.3.1, printed pp. 90–98.
- Decision: strengthen the high-energy input to uniform `o(|w|^2)` throughout the closed upper half-plane so the proof's translated semicircles are covered. No arbitrary full-QFT, massless, gravitational, or off-shell-coefficient claim is made.
- Validation: source fetch stamped all selected PDFs; final proof-layout, proof contract, precheck, render, and scoped dependency checks remain pending.
- Unresolved obligation: A-page prerequisite `qftx-eft-operator-quotients` remains absent; the theorem is kept strictly at the on-shell amplitude interface.
- Next: derive the finite necessary quadratic constraints from the positive moment representation.

### 5. `prop-aqft-finite-truncated-bootstrap-constraints`

For `x=nu0^2/nu^2 in (0,1]` and `w=(2 nu0^2/pi) rho/nu^3 >= 0`, derived `b_k=integral w x^k` for each `0 <= k <= N`. Finite linear combinations identify each Hankel quadratic form with `integral w p(x)^2`, each `x`-weighted form with `integral w x p(x)^2`, and each `(1-x)`-weighted form with `integral w(1-x)p(x)^2`. Boundedness of each finite polynomial on `[0,1]`, comparison against the integrable weight, and nonnegative finite truncations justify convergence and signs. The exact index limits are retained; for `N=1` all families are the `r=0` constraints. No completeness or sufficiency of this finite system is asserted.

- Dependencies: the finite-data definition, forward-positivity theorem, amplitude-data definition, and pinned improper-integral definition/linearity/monotonicity/comparison items; level 3.
- Sources and locators: the three selected full-text treatments above support the positive forward-moment premise; the finite moment-matrix and localizer inequalities are derived here, not attributed as source theorems.
- Decision: constraints apply only to normalized on-shell forward-amplitude coefficients; no operator-quotient map is inferred.
- Validation: source fetch is complete; final proof-layout, proof contract, precheck, rendering, and dependency checks remain pending.
- Unresolved obligation: the page-level operator-quotient prerequisite remains absent; no local proposition requires an off-shell coefficient input.
- Next: verify explicit passing and failing order-two vectors on the B page.

### 6. `ex-aqft-scalar-positivity-bound`

At `N=2`, proved that the strict region `b0>0`, `b1>0`, `b0-b1>0`, `b0*b2-b1^2>0` lies inside `K2` by completing the square in its order-one Hankel form, and that the region with the same three strict scalar inequalities but `b0*b2-b1^2<0` is disjoint from `K2` using `a=(-b1/b0,1)`. The passing vector `(1,1/2,1/3)` has determinant `1/12` and localizers `1/2`; the failing vector `(1,1/2,1/8)` has a negative witness `-1/8`. The example calls these on-shell finite-test regions only; it claims no full-amplitude or QFT realization and no translation to an off-shell operator coefficient.

- Dependencies: the finite-bootstrap definition, positivity theorem, and finite-constraints proposition; level 4. The amplitude-input definition is reached transitively through the finite-bootstrap definition.
- Sources and locators: de Rham et al., §2.2, PDF pp. 2–3; Basile et al., §3.3.1, printed pp. 96–98. The order-two arithmetic is checked locally.
- Decision: one allowed-by-the-test and one excluded candidate are presented under the same defined coefficient convention.
- Validation: final proof-layout, proof contract, example rendering, and scoped dependency checks remain pending.
- Unresolved obligation: A-page page-level operator-quotient prerequisite remains absent; the example retains an on-shell-only scope.
- Next: finalize page frontmatter, manifests, proof contracts, coverage, cross-batch dependencies, and readiness records; then run the required scoped checks.

## Current-state operator-page recheck

Before final readiness decisions I reloaded the current frontier with `loadStep1Record` and checked each supplier item through `step1Decision`. The current `qftx-eft-operator-quotients` manifest has seven items, all with current item carriers. `step1Decision` returns `closed: false, reason: "Readiness record missing"` for each of these seven IDs: `def-aqft-local-operator-and-dimension`, `lem-aqft-invariant-quotient-exactness`, `lem-aqft-finite-order-local-operator-space-finite-dimensional`, `def-aqft-lsz-amplitude-data`, `def-aqft-operator-basis-quotient`, `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`, and `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`. The unresolved record condition is the fresh missing readiness evidence; the draft status and pending prechecks are not treated as defects by themselves.

I read the current `def-aqft-operator-basis-quotient` definition and the complete proofs of `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy` and `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`. The definition sets `Q_D=V_D/R_D` for a specified finite-dimensional invariant operator space and declared relation span; it explicitly does not assert that all relations relevant to an arbitrary EFT or observable have been included. The proposition proves an action-level, finite-order leading-equation/IBP relation using the stated variational and compact-support boundary conventions, constructs an invertible local formal field redefinition, and retains all induced terms; it expressly gives no off-shell Green-function or quantum-measure conclusion. The theorem's amplitude conclusion additionally assumes an exact regulator-wise change-of-variables identity with the full Jacobian and transformed source, a unit zero-source partition value, and a common regulator limit with stable one-particle simple poles and the displayed connected-function factorization. Under those assumptions its complete proof equates normalized generating functionals and joint-pole LSZ residues.

None of those current statements supplies a map from a class of the generic quotient `Q_D` to the normalized forward Taylor coordinates `b_k` of a specified scalar channel. This batch uses `b_k` only as normalized on-shell amplitude coordinates and makes no generic operator-coefficient claim. The canonical A-page edge is nevertheless marked logical and the supplier page's seven fresh readiness records are absent, so the cross-batch row stays `open` and all affected batch-18 item readiness decisions are escalated with this exact prerequisite evidence.

Owner escalation: either (a) add/identify on the appropriate EFT-amplitude page a model-specific matching result from the finite operator quotient to the chosen scalar forward amplitude coefficients, stating the channel, matching, regulator, field-redefinition, and stable-LSZ assumptions and proving invariance under the declared relations; or (b) if the pair is intended to remain solely at the abstract on-shell amplitude-coordinate level, revise the page-edge classification through the owner workflow. Proposed placement for option (a) is an `aqft-eft-amplitudes` matching item consuming the quotient and the forward-positivity theorem, not an edit to this batch's claim or to another pair's supplier.

## Final scoped checks and remaining owner-controlled gates

Current authored-item prechecks record `n/a` for both definitions and `pass` for the lemma, theorem, proposition, and example. Final scoped checks returned: proof-layout `6 items, 16 steps, 0 defects`; normative precheck `4 proof-bearing items, 0 failed`; rendercheck `8 files, 0 errors, 0 warnings`; strict proof-contract validation `6/6 items, 0 errors, 0 warnings`; boundary-audit `48 rows, no contradicted dispositions`; manifest dependency check `6 items, 0 missing deps`; source coverage `1 A page, 13 harvested results, 0 errors/warnings`; source-fetch check `3/3 full-text sources verified`; focused depcheck `6 items, 0 errors/warnings`; content-policy `6 items, 0 errors/warnings`; focused extcheck `0 unproved dependencies and 0 errors`. Scoped item-level recomputation gives levels 0, 1, 2, 1, 3, and 4 for the six items in inventory order, with no errors.

Focused fwdcheck reports one exact plan conflict: `qftx-eft-dispersion-and-bootstrap-examples (#974) requires qftx-eft-dispersion-and-bootstrap (#974)`. Both canonical plan rows have order 974, while the B companion requires A. The authored page files preserve the canonical `requires` metadata and the shared plan is untouched. The owner must decide the page-order convention or assign a later B order before this edge can pass the topological gate.

The full batch dependency-level check reports the shared record stale. Read-only recomputation confirms batch 18 remains level 2 and still requires batch 16. The unrelated changed rows are: batch 9 recorded requires `[8]`, current `[7,8]`; batch 20 recorded `[3,4,19]`, current `[2,3,4,19]`; batch 21 recorded `[5,19]`, current `[2,5,19]`; batch 24 recorded `[19]`, current `[2,19]`. The shared scheduling file is owner-managed and was not rewritten.

The run-wide page-layout check stopped at `aqft-eft-operators` because its run manifest still has an empty inventory. No page-layout preparation was run or emulated here, since the engine would write every page in this multi-batch run. Both assigned page bodies remain empty; the owner engine must set and preserve `page_layout: compact-v1` when the full run is ready.

## Final Step 1 decisions

Before recording, `step1Decision` returned `Readiness record missing` for each of the six batch-18 items; no existing escalation was overwritten. Current records now mark all six `escalated`. The A-page items cite the required logical `qftx-eft-operator-quotients` edge, the seven current supplier carriers' missing Step 1 records, and the lack of a generic matching map from `Q_D` to `b_k`. The B example also cites the same-order A/B plan-order defect. Each record lists the item's direct mathematical dependencies; the page-level prerequisites and their evidence are recorded here and in the cross-batch dependency array. These are authoring-readiness dispositions, not independent proof approval.
