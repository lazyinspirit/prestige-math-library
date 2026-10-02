# Batch 29 Step-1 notes — Hörmander estimates and the Levi problem

## Scope and instruction reconciliation

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch-29 task, SC-6 of `research/plan-complex-analysis-track.md`, `research/plan-spec.json`, the current batch-29 artifacts, and `briefs/tasks/frontier-dependency-ledger.md`. The owner-authoring direction file was absent. The task and SC-6 agree on the pair and mathematical scope. The task/current plan give order 865/866 and the nine page prerequisites; SC-6 describes the same prerequisite concepts at a broader level. The current plan remains authoritative; its batch-29 item arrays were empty, so this scaffold fills them without changing the shared plan.

The recorded DeepSeek attempt 2 exited 0 at 03:34 UTC but produced no artifact; both page inventories were empty. This repair writes only batch-29 manifests, source coverage, the batch-29 dependency input, notes, and readiness records. No engine state, published items, shared plan, or other batch was edited.

## Inventory and proof dependencies

The A page has 18 items. The nine SC-6 claims are retained: weighted \(L^2\) spaces and maximal \(\bar\partial\), the interior Bochner–Kodaira–Morrey estimate, Hörmander existence, smooth strictly psh exhaustion, Dolbeault vanishing, the Levi problem, Behnke–Stein, pseudoconvex-domain Oka–Weil, and the first Cousin problem. Nine supporting results make the proof route explicit: psh exhaustion regularization, closedness of maximal \(\bar\partial\), the coercive Hilbert-complex solver, the smooth-boundary weighted Morrey estimate, the smooth-domain solver, the local boundary separator, the boundary peak function, Oka–Weil on an already holomorphy domain, and a locally finite smooth partition of unity.

The B page has the six planned examples: Gaussian Hörmander equality; the unit-ball Levi form; an explicit weighted \(\bar\partial\) solution; a strict psh exhaustion of a convex ball; a Hartogs-domain pseudoconvexity check; and a Cousin-I gluing example. No SC-6 claim or B example was dropped.

Dependency levels are computed over all same-run item edges, including the batch-10 mollifier supplier. Published axioms and published mathematical items do not raise levels. Batch-29 levels range from 0 through 7; the Levi theorem is level 6 and the final pseudoconvex-domain Oka–Weil theorem is level 7.

The weighted Morrey proof keeps the smooth boundary condition explicit. First integrate by parts on smooth forms satisfying \(\sum_j u_{jJ}\rho_{z_j}=0\); pseudoconvexity makes the boundary Levi term nonnegative, and the weight Hessian controls the sum of the \(q\) smallest eigenvalues. Extend from this core with finite-chart Friedrichs graph density: flatten the boundary, localize and reflect in finitely many charts, mollify coefficients, correct the normal component to preserve the adjoint boundary condition, and control both operator graphs by the first-order commutator estimate. The actual cross-batch interface is batch 10's `lem-mollification-commutes-with-weak-derivatives-in-the-interior`. The full-AC smooth-up-to-the-boundary extension theorem is not imported.

For the nonsmooth-domain Hörmander theorem, solve on regular strongly pseudoconvex exhaustion domains, extend solutions by zero only as weighted \(L^2\) vectors, take a weakly convergent subsequence, use lower semicontinuity for the estimate, and pass the equation against compactly supported tests. Smoothness is an interior regularity conclusion; no global \(\bar\partial\)-Neumann boundary regularity is claimed.

The Levi proof is ordered to avoid circularity. Its forward domain-of-holomorphy-to-pseudoconvex direction is the published SC-4 result. The host-domain Oka–Weil lemma assumes from the start that its host is a domain of holomorphy, that the compact set is \(\mathcal O(D)\)-convex, and that the function is holomorphic near it. Its proof uses a graph lift, cutoff, local \(\bar\partial\) correction, finite-polyhedron induction, and telescoping. It uses only the forward SC-4 direction and the earlier Hörmander theorem; it is not the final theorem for arbitrary pseudoconvex domains. The final Oka–Weil theorem is downstream of Levi.

For Behnke–Stein, \(\Omega=\mathbb C^n\) is handled directly. Otherwise \(F=\mathbb C^n\setminus\Omega\) is nonempty. The distances \(\delta_j(z)=\operatorname{dist}_\infty(z,\mathbb C^n\setminus\Omega_j)\) increase and are bounded by \(\delta_\Omega(z)\). Nearest points in the nested closed complements have bounded distance, hence a convergent subsequence in a compact Euclidean ball; its limit lies in every complement and therefore in \(F\), proving \(\delta_j(z)\uparrow\delta_\Omega(z)\). On each compact subset choose a fixed \(\Omega_J\) containing it and apply the decreasing-psh-limit result to \(-\log\delta_j\) on \(\Omega_J\). The empty-complement case is never inserted into a distance formula.

The first Cousin proof uses a locally finite partition \(\chi_i\), writes \(g=\sum_i\chi_i m_i\), and on each \(U_j\) rewrites \(\bar\partial g=\sum_i(\bar\partial\chi_i)(m_i-m_j)\), which is smooth across the poles. A sufficiently fast convex growth of a smooth psh exhaustion makes the weighted energy finite; the Hörmander correction yields a global meromorphic function with the requested principal parts.

## Choice assumptions and actual suppliers

A transitive dependency audit found that **all 24** batch-29 items reach `def-axiom-of-choice` through their actual supplier graph. To keep statements and metadata consistent, every item explicitly assumes AC and directly lists `def-axiom-of-choice`. This is a conservative choice level, not a claim that AC is mathematically sharp; the scaffold makes no weaker-choice or choice-free claim. Direct additional choice interfaces and the inherited Hörmander route are listed per item:

| Item | Additional direct choice supplier(s) | Inherited route |
|---|---|---|
| `lem-smooth-regularization-of-psh-exhaustion` | `def-countable-choice` | — |
| `def-weighted-l2-spaces-dbar-forms` | `def-countable-choice` | — |
| `lem-maximal-distributional-dbar-operator-is-closed` | `def-countable-choice` | — |
| `thm-basic-bochner-kodaira-morrey-estimate-cn` | `def-countable-choice` | — |
| `lem-hilbert-complex-solver-from-coercive-estimate` | `def-countable-choice` | — |
| `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` | `def-countable-choice` | — |
| `lem-hormander-solver-on-smooth-pseudoconvex-domain` | `def-countable-choice` | — |
| `thm-pseudoconvex-domain-smooth-psh-exhaustion` | `def-countable-choice` | — |
| `thm-hormander-l2-dbar-existence` | `def-countable-choice`, `def-dependent-choice`, `def-hahn-banach-extension-principle-relative`, `thm-eberlein-smulian` | `thm-eberlein-smulian` reaches `thm-ultrafilter-lemma`; the relative-HB suppliers are also in its closure |
| `cor-dolbeault-vanishing-pseudoconvex-domain` | `def-countable-choice` | Hörmander theorem (Eberlein–Šmulian / ultrafilter lemma and relative HB) |
| `lem-local-boundary-separator-for-strongly-pseudoconvex-domain` | — | — |
| `lem-boundary-peak-function-by-dbar-correction` | — | Hörmander theorem |
| `lem-oka-weil-on-domain-of-holomorphy` | — | Hörmander theorem |
| `thm-levi-problem` | — | Hörmander theorem |
| `thm-behnke-stein-increasing-union` | — | — |
| `thm-oka-weil-approximation-pseudoconvex-domain` | — | Levi theorem and host-domain Oka–Weil lemma |
| `lem-locally-finite-smooth-partition-of-unity-on-domain` | `def-countable-choice` | — |
| `cor-first-cousin-problem-pseudoconvex-domain` | `def-countable-choice` | Hörmander theorem |
| `ex-hormander-estimate-with-gaussian-weight` | — | Hörmander theorem |
| `ex-levi-form-of-the-unit-ball` | — | — |
| `ex-explicit-dbar-solution-with-l2-estimate` | — | Hörmander theorem |
| `ex-strictly-psh-exhaustion-of-a-convex-domain` | — | — |
| `ex-pseudoconvexity-of-a-hartogs-domain` | — | — |
| `ex-first-cousin-gluing-on-a-pseudoconvex-domain` | — | First Cousin corollary |

The main theorem explicitly assumes AC to cover the full supplier closure, including the Eberlein–Šmulian/ultrafilter and relative-Hahn–Banach routes; weaker separate assumptions are not presented as sufficient for this recorded dependency graph.

## Cross-batch input

`research/frontier-37-owner-30-batch-29.cross-batch-dependencies.json` has two verified rows:

- Page prerequisite: batch 29 A depends on batch 10 page `smooth-approximation-and-sobolev-extension`, matching its declared `requires` edge.
- Item supplier: `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` uses batch 10's `lem-mollification-commutes-with-weak-derivatives-in-the-interior` for the local first-order commutator in finite-chart graph-density. It does not depend on batch 10's full-AC boundary-density theorem.

## Sources and coverage

All four sources were downloaded in full, their relevant theorem statements and arguments were read, and stamps were verified. No large PDF text dump was placed in logs.

| Source | Kind; locator | Verified file |
|---|---|---|
| Demailly, *Complex Analytic and Differential Geometry* | monograph; Ch. VIII §§1–6, printed pp. 363–379 | 3,557,990 bytes; 455 pp.; SHA-256 prefix `d7c7654a7417e832`; [author PDF](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf) |
| Boas, *Lecture Notes on Several Complex Variables* | lecture notes; §§3.2.4–3.3.3, pp. 70–85 | 1,726,335 bytes; 97 pp.; SHA-256 prefix `2d8f5e24943f67e3`; [author PDF](https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf) |
| Jabbari, *Several Complex Variables course notes* | lecture notes; §§4.1–4.3, PDF pp. 67–83 | 1,399,384 bytes; 118 pp.; SHA-256 prefix `e8bf824bef56853d`; [author PDF](https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf) |
| Lebl, *Tasty Bits of Several Complex Variables* | textbook; Ch. 2 §§2.3–2.6 and Ch. 4 §4.6 | 1,652,309 bytes; 248 pp.; SHA-256 prefix `729cdb8a00685da5`; [author PDF](https://www.jirka.org/scv/scv.pdf) |

The coverage file records 25 harvested results. Demailly's complete-Kähler metric and complete-manifold graph-core route is marked out of scope because this scaffold instead uses bounded smooth exhaustion domains and the separate finite-chart boundary argument. Boas supplies the full host-domain approximation, cutoff correction, smooth-boundary estimate, and Levi proof passages. CIMAT's Behnke–Stein citation is marked inline/supporting rather than proof authority; the scaffold supplies the boundary-distance proof. Lebl's Levi theorem is a scope cross-check only because that text omits the reverse-direction proof; Boas supplies it.

## Validation results and unresolved work

Checks run after the manifest stabilized:

- `coverage-checklist ... --require-destination`: 1 page, 25 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --coverage ...`: 4/4 sources fetch-verified and 4/4 resolved; 0 drops.
- `manifest-deps` on batch 29: 24 items, 0 normalized, 0 errors.
- `content-policy` over the run's batch manifests: 719 scoped items, 0 errors, 0 warnings.
- Plan validation on a temporary overlay of the current plan with the batch-29 inventories and batch-10 mollifier supplier: exit 0; no item cycles, forward references, B-page dependencies, or unresolved IDs among pages with item lists. The plan reports 4,159 redundant-prerequisite warnings and 316 pages still validated at page level only. The shared `plan-spec.json` was not changed.
- `item-dependency-levels check --run frontier-37-owner-30`: no batch-29 level mismatch; the only errors are the two still-empty pages `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` and its examples page, both outside this assignment.
- `step1-decisions check --run frontier-37-owner-30`: 719/719 scaffold items ready, including all 24 batch-29 items; the only remaining work is those same two empty pages.
- Repository-wide `depcheck`: exit 0, 278 warnings, no hard errors. `extcheck`: exit 0, 40 warnings, no hard errors. `fwdcheck`: exit 0.

No batch-29 source, dependency, proof-strategy, or readiness issue remains unresolved under the explicit AC scope. The two run-wide empty-page findings are outside batch 29 and were left untouched. The per-batch cross-batch input is ready for the serial ledger reconciliation; the unified ledger and shared plans were not edited here.

## Step 3b authoring checkpoint (run frontier-37-owner-30, pair hormander-estimates-and-the-levi-problem)

Order (level, page order, item id) fixed by the dispatch. Status per item:

| # | item | level | status |
|---|---|---|---|
| 1 | def-weighted-l2-spaces-dbar-forms | 0 | authored |
| 2 | lem-hilbert-complex-solver-from-coercive-estimate | 0 | authored |
| 3 | lem-local-boundary-separator-for-strongly-pseudoconvex-domain | 0 | authored |
| 4 | lem-locally-finite-smooth-partition-of-unity-on-domain | 0 | authored |
| 5 | lem-smooth-regularization-of-psh-exhaustion | 0 | authored |
| 6 | thm-behnke-stein-increasing-union | 0 | authored |
| 7 | ex-levi-form-of-the-unit-ball | 0 | authored |
| 8 | ex-pseudoconvexity-of-a-hartogs-domain | 0 | authored |
| 9 | ex-strictly-psh-exhaustion-of-a-convex-domain | 0 | authored |
| 10 | lem-maximal-distributional-dbar-operator-is-closed | 1 | authored |
| 11 | thm-basic-bochner-kodaira-morrey-estimate-cn | 1 | pending |
| 12 | thm-pseudoconvex-domain-smooth-psh-exhaustion | 1 | pending |
| 13 | lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains | 2 | pending |
| 14 | lem-hormander-solver-on-smooth-pseudoconvex-domain | 3 | pending |
| 15 | thm-hormander-l2-dbar-existence | 4 | pending |
| 16 | cor-dolbeault-vanishing-pseudoconvex-domain | 5 | pending |
| 17 | cor-first-cousin-problem-pseudoconvex-domain | 5 | pending |
| 18 | lem-boundary-peak-function-by-dbar-correction | 5 | pending |
| 19 | lem-oka-weil-on-domain-of-holomorphy | 5 | pending |
| 20 | ex-explicit-dbar-solution-with-l2-estimate | 5 | pending |
| 21 | ex-hormander-estimate-with-gaussian-weight | 5 | pending |
| 22 | thm-levi-problem | 6 | pending |
| 23 | ex-first-cousin-gluing-on-a-pseudoconvex-domain | 6 | pending |
| 24 | thm-oka-weil-approximation-pseudoconvex-domain | 7 | pending |

Scaffold repairs queued from the scope review and pre-splice findings:
- pre-splice `prefix` finding: `thm-oka-weil-approximation-pseudoconvex-domain` had kind `corollary` against the plan's `thm`; manifest kind repaired to `theorem` (ID preserved).
- scope residual 1: narrow the coverage claim for Demailly (6.9) when coverage is refreshed.
- scope residual 2: the `(0,q)` generality is authored from Demailly §4/§6 + Jabbari Lemma 85, not Boas.
- scope residual 3: per-item `axiom_use` recorded in the manifest.
- scope residual 4: `ex-levi-form-of-the-unit-ball` keeps the explicit $L\rho(\xi)=|\xi|^2$ computation.
- scope residual 5: the partition-of-unity lemma cites the published partition/σ-compact machinery.
- cross-batch supplier `lem-mollification-commutes-with-weak-derivatives-in-the-interior` (batch 10) is on disk (authored 2026-09-30) and is cited in the weighted Morrey lemma; its statement and actual use are verified at that item.

Item checkpoints are appended item by item below.

### Item 1 — def-weighted-l2-spaces-dbar-forms (level 0) — AUTHORED

- File `items/def-weighted-l2-spaces-dbar-forms.md`; precheck PASS (direct); rendercheck OK; proof-contract --strict clean; boundary-audit clean (0 not_applicable).
- Content: (a) coefficientwise weighted Hilbert space via the tuple pairing plus weighted L2 completeness; (b) maximal distributional dbar with representing-class uniqueness; (c) Hilbert adjoint and its distributional formal expression $(\bar\partial^*_\varphi v)_K=-e^{\varphi}\sum_j\partial_j(e^{-\varphi}v_{jK})$ on the adjoint domain, antisymmetric coefficient convention, no boundary condition assumed; local density of test forms (step 1.3) built from an explicit compact exhaustion and the published $C_c^\infty$ density theorem.
- Choice: AC used only through the countable instance consumed by the completeness ([F2]) and density ([F6]) suppliers; recorded in step 1.1 and in the manifest `axiom_use`.
- New deps beyond the scaffold: `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, `def-hilbert-space`, `def-weak-derivative-of-a-locally-integrable-function` (all published, needed for density and distributional derivatives).
- Note for later items: step-numbering must be exactly layer-based (a step numbered L.k may cite only steps of layers < L; the terminal step sits one layer above the rest) or precheck reports REPAIR.

### Item 2 — lem-hilbert-complex-solver-from-coercive-estimate (level 0) — AUTHORED

- File `items/lem-hilbert-complex-solver-from-coercive-estimate.md`; precheck PASS; rendercheck OK; strict contract clean; boundary-audit clean.
- Content follows Demailly Ch. VIII Thm 1.2 / CIMAT Thm 72: kernels closed; decompose $x=x'+x''$ along $\ker S$ with $x''\in(\operatorname{ran}T)^\perp=\ker T^*$; coercivity gives $|\langle x,f\rangle|\le C^{-1/2}\|f\|\|T^*x\|$; the prescription $\ell(T^*x)=\langle x,f\rangle$ extends by continuity to $V=\overline{T^*(D(T^*))}$, composes with the orthogonal projection, and Riesz produces $u$ with $Tu=f$ and $\|u\|\le C^{-1/2}\|f\|$; the least-norm solution is the $(\ker T)^\perp$ component of $u$.
- Deps actually used: `lem-unbounded-adjoint-is-well-defined-and-closed`, `thm-closable-iff-adjoint-domain-is-dense` (for $T^{**}=T$), `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-riesz-representation-for-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-densely-defined-closed-and-closable-operator`, `def-hilbert-space`, choice items. Dropped from the scaffold deps as unused: `thm-hilbert-projection-variational-characterization`, `thm-hilbert-adjoint-properties`, `lem-kernel-range-orthogonality-for-hilbert-adjoints` (the last is a bounded-operator item).
- AC use: only the countable instance consumed by [F1],[F3],[F4],[F8]; recorded in step 4.1 and the manifest `axiom_use`.

### Item 3 — lem-local-boundary-separator-for-strongly-pseudoconvex-domain (level 0) — AUTHORED

- File `items/lem-local-boundary-separator-for-strongly-pseudoconvex-domain.md`; precheck PASS (direct), rendercheck OK, strict contract clean, boundary-audit clean (0 contradicted, 0 template reuse).
- Content: strong psc at p ⇒ local holomorphic separator. Proof route: complex-coordinate second-order Taylor expansion of the defining function (real Taylor item + Wirtinger identity); explicit affine normalization with ℓ(Φ(ζ)−p)=ζ_n/2; multiplication by g_t=1+t Re ζ_n producing Hermitian part H_t=Q_1+(t/2)|v_n|² positive definite for large t (positive definiteness on the complex-tangent hyperplane plus large rank-one term); polynomial biholomorphism Φ_2(w)=w+q(w)e_n with q=−A_1−(t/2)ζ_n² killing the (2,0)-part; conclusion Re w_n ≤ −(c/2)|w|² on the D-side, h=w_n pulled back.
- New deps beyond scaffold: `def-levi-pseudoconvex-domain`, `lem-levi-pseudoconvexity-is-independent-of-defining-function`, `cor-second-order-taylor-expansion-with-the-hessian`, `def-wirtinger-operators-in-several-complex-variables`. (scaffold dep `thm-d-dbar-decomposition-and-identities` not used, dropped; `thm-c-two-levi-criterion-for-plurisubharmonicity` not used, dropped.)
- Notes: step numbering is layer-canonical (1.1,2.1,...,7.1 single chain); steps must each be a single source line with the tag at the end of that line (precheck rule).
- Next: item 4, `lem-locally-finite-smooth-partition-of-unity-on-domain`.

### Item 4 — lem-locally-finite-smooth-partition-of-unity-on-domain (level 0) — AUTHORED

- File `items/lem-locally-finite-smooth-partition-of-unity-on-domain.md`; precheck PASS, rendercheck OK, strict contract clean, boundary-audit clean.
- Content: compact exhaustion K_j={|z|≤j, δ(z)≥1/j}; shells S_j=K_{j+1}∖int K_{j−1} inside W_j=int K_{j+2}∖K_{j−2}; each point in at most three W_j; finite ball lists per shell selected by CC; bumps χ_k=b((|x−z_k|²−r_k²)/((3r_k/2)²−r_k²)), χ_k≥e^{−1} on B(z_k,r_k), supp ⊆ B̄(z_k,3r_k/2) ⊂ B(z_k,2r_k); σ=Σχ_k>0 smooth; V_k=B(z_k,2r_k)∩Ω locally finite refinement; χ̃_k=χ_k/σ partition subordinate to (V_k).
- New deps beyond scaffold (residual 5 resolved): `def-smooth-partition-of-unity-subordinate-to-an-open-cover`, `ex-smooth-compactly-supported-bump`, `thm-heine-borel-rn`, `rem-complex-euclidean-space-dictionary`; choice deps `def-countable-choice`, `def-axiom-of-choice` used and cited (AC in step 3.1, CC in steps 3.1 and 4.1).
- Note: `ex-a-radial-bump-on-euclidean-space` has provenance.statement = ai-generated and is therefore NOT citable under the strict contract; replaced by the literature-derived `ex-smooth-compactly-supported-bump`.
- Next: item 5, `lem-smooth-regularization-of-psh-exhaustion`.

### Item 5 — lem-smooth-regularization-of-psh-exhaustion (level 0) — AUTHORED

- File `items/lem-smooth-regularization-of-psh-exhaustion.md`; precheck PASS (direct), rendercheck OK (after joining two multi-line displays into single lines), strict contract clean (5/5 items), boundary-audit clean.
- Content follows Boas §3.2.4 Thm 19 (printed pp. 69-70), with the source's gaps written out: (a) an inline proof that the mollification $u_\varepsilon$ of a *continuous* psh function is psh on $\Omega_\varepsilon$, by Fubini against the circle mean value inequality of the subharmonic slices (steps 1.2, 2.1, 3.1); (b) an explicit two-sided error budget $|u_j-u|<1/4$ with shifted levels $\lambda_j=j-1/2$ and term $\chi(u_j-j+2)$, which removes the need for the majorization $u_j\ge u$ that the source glosses over; (c) an explicit domination argument on the compact annuli $A_j$ choosing $c_j$ from bounds $M,\mu_j,N,\nu_j$ (steps 6.1, 7.1).
- The flat function $\chi(t)=e^t\exp(-1/t)$ ($t>0$), $0$ ($t\le0$) is verified $C^\infty$ by [F12], with $\chi'>0$, $\chi''>0$ on $(0,\infty)$, noting $t^4+2t^2-2t+1=t^4+2(t-1/2)^2+1/2>0$.
- New deps beyond scaffold (all published): def-plane-subharmonic-function, def-radial-mollifier-family-in-rn, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, rem-complex-euclidean-space-dictionary, def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity, ex-flat-exponential-function, thm-chain-rule-for-total-derivatives, def-wirtinger-operators-in-several-complex-variables, cor-regular-values-have-null-complement-and-are-dense, def-regular-and-critical-points-and-values, cor-regular-level-set-local-graph-theorem. Dropped from scaffold deps as unused: thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity (the exhaustion u is an assumption here; it is consumed by item 12).
- Choice: countable selections $\varepsilon_j,\delta_j$ (step 4.1), $c_j$ (step 7.1), regular values $c_k$ (step 9.1) under [F18]; AC ambient.
- Manifest batch-29 deps synced to the item-file deps for items 1-5 (/tmp/sync-manifest.py); `item-dependency-levels check --run frontier-37-owner-30` reports only two unrelated number-theory errors outside batch 29.
- Next: item 6, `thm-behnke-stein-increasing-union`.

### Item 6 — thm-behnke-stein-increasing-union (level 0) — AUTHORED

- File `items/thm-behnke-stein-increasing-union.md`; precheck PASS via canonical renumbering (1.1,2.1,3.1,4.1; the old labels 1.1/1.2/2.1/3.1 are now 1.1/2.1/3.1/4.1 with inline references updated); rendercheck OK; strict contract clean (6/6 batch items); boundary-audit clean; manifest synced (item 6 deps level 0).
- Content: Ω=C^n direct; else F:=C^n∖Ω≠∅, δ_j:=δ_{Ω_j} finite and positive on Ω_j, monotone increasing to γ=sup_j δ_j; γ=δ by finite subcover of the compact closed polydisc \overlineΔ_r(a) (r<δ(a)) by the increasing cover (Ω_j); on K⊆Ω_J the decreasing sequence −log δ_j (j≥J) converges to the real-valued −log δ on Ω_J, so [F7] gives psh there; localness globalizes.
- Choice: none used in the proof; AC recorded ambient in the Statement; no family of nonempty sets is selected from. Manifest axiom_use records AC as ambient.
- Next: item 7, `ex-levi-form-of-the-unit-ball` (must keep the explicit Lρ(ξ)=|ξ|^2 computation, scope residual 4).

### Item 7 — ex-levi-form-of-the-unit-ball (level 0) — AUTHORED

- File `items/ex-levi-form-of-the-unit-ball.md`; precheck PASS (labels 1.1,1.2,2.1,2.2,3.1,4.1; the earlier REPAIR was a wrapping artifact — a line beginning with the bare token "5.1" in the Choice-use paragraph was parsed as a step; reworded to avoid it); rendercheck OK; strict contract clean (7/7 items); boundary-audit clean; manifest deps synced (10 deps, level 0).
- Content: ρ(z)=|z|²−1 is C^∞; ∂_{z_j}ρ=\bar z_j, ∂_{\bar z_j}ρ=z_j; ∂²ρ/∂z_j∂\bar z_k=δ_{jk} so Lρ(a;ξ)=|ξ|² for all a,ξ; complex tangents at |p|=1 satisfy Σ\bar p_jξ_j=0 and Lρ(p;ξ)=|ξ|²>0 for ξ≠0; dρ(p)≠0; B is the open unit ball, hence a nonempty connected open set (a domain) via metric-ball openness + convexity of Euclidean balls + dictionary; ∂B={∥z∥=1} by an explicit three-case argument (interior points, exterior radius r=(∥p∥−1)/2 via triangle inequality, radial points (1−t)p); conclusion: strong pseudoconvexity (strict form of the def-levi-pseudoconvex-domain condition), Levi pseudoconvexity, ρ strictly psh.
- New deps beyond scaffold: def-wirtinger-operators..., lem-metric-ball-neighbourhood-base, def-balls-and-polydiscs..., rem-complex-euclidean-space-dictionary, def-norm-and-normed-space, ex-convex-subsets-of-rn-are-path-connected, def-metric-interior-closure-boundary. Dropped from scaffold deps as unused: thm-c-two-levi-criterion-for-plurisubharmonicity, thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains (the computation is direct; the converse theorem is not needed). Explicit Lρ(ξ)=|ξ|² kept (scope residual 4).
- Choice: AC ambient ([F10] cited in step 1.1); no selection.
- Next: item 8, `ex-pseudoconvexity-of-a-hartogs-domain`.

### Item 8 — ex-pseudoconvexity-of-a-hartogs-domain (level 0) — AUTHORED

- File `items/ex-pseudoconvexity-of-a-hartogs-domain.md`; precheck PASS after adopting the canonical stratification by hand (adopt-repair.mjs could not run: it shells out through `npx`, whose npm cache is read-only in this sandbox; the canonical block was extracted from precheck output and applied with an exact line permutation); rendercheck OK (the matrix display originally used `[[...]]`, which rendercheck reads as a wikilink inside math — rewritten as `\begin{pmatrix}...\end{pmatrix}` on one source line); strict contract clean (8/8 items); boundary-audit clean; manifest deps synced (item 8 deps now include `thm-c-two-levi-criterion-for-plurisubharmonicity` etc.; level 0 unchanged).
- Canonical labels: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 3.1, 3.2, 4.1 (old chain 1.1..1.9 reordered by layer; the old 1.6 became 3.1 and the old 1.8 became 3.2).
- Content: E=e^{2|z|^2}, s=|w|^2E; Wirtinger partials and the Hermitian matrix M=((2s(1+2|z|^2),2 zbar w E),(2 z wbar E,E)) with det = 2|w|^2E^2 >= 0 (positive definite iff w != 0); Omega={s<1} star-shaped hence a domain; h=(1-t)^{-1} strictly increasing convex; chain rule L_{h o s} = h' L_s + h''|d s|^2; psi=|z|^2+|w|^2+h(s) strictly psh with L_psi >= |xi|^2; boundary = {s=1} via d s != 0; rho = s-1 gives the strict Levi condition; sublevels compact via Heine-Borel through the C^2/R^4 dictionary.
- Choice: AC ambient only (cited in step 1.1 as [F9]); the proof selects nothing.
- SCOPE NOTE for the dispatch report: the scaffold claimed "Omega is pseudoconvex"; the library defines Hartogs pseudoconvexity as psh of -log delta, and the published theorem gives only (Hartogs => exhaustion), so the authored item proves the exhaustion + strict Levi boundary condition and records the converse identification as an obligation in the Remarks rather than assuming it. The promised claim is preserved in the exhaustion form; flagged for the owner.
- Next: item 9, ex-strictly-psh-exhaustion-of-a-convex-domain.

### Item 9 — ex-strictly-psh-exhaustion-of-a-convex-domain (level 0) — AUTHORED

- File `items/ex-strictly-psh-exhaustion-of-a-convex-domain.md`; precheck PASS after adopting the canonical stratification (labels 1.1, 2.1, 3.1, 3.2, 4.1, 5.1; the first draft's 1.1/1.2/2.1/2.2/3.1/4.1 was relabelled because the smoothness step cites the domain step); rendercheck OK; strict contract clean (9/9 items); boundary-audit clean; manifest synced.
- Content: B = unit ball in C^m is the open ball B(0,1), open (thm-metric-open-set-algebra) and nonempty; convex by N2/N3 (||(1-t)z+tw|| <= (1-t)||z||+t||w|| < 1); path-connected via straight segments, hence a domain. u = 1-||z||^2 is C^infinity; log is C^infinity on (0,infinity) via log'=1/t plus the induction on (t^alpha)' from thm-real-power-continuity-and-derivatives; psi = -log u is C^infinity with d_{z_j}psi = conj(z_j)/u, d_{bar z_j}psi = z_j/u and d^2 psi/dz_j dbar z_k = delta_jk/u + conj(z_j) z_k/u^2. Levi form = ||xi||^2/u(a) + |sum conj(a_j)xi_j|^2/u(a)^2 > 0 for xi != 0, so psi is strictly psh and psh. Sublevels: {psi<=c} = {||z||^2 <= 1-exp(-c)} via exp strictly increasing and inverse of log, so empty for c<0 and otherwise a closed ball of radius r = (1-exp(-c))^{1/2} < 1, closed (thm-metric-open-set-algebra clause 4), bounded, compact in C^m (dictionary) and compact in B (intrinsic compactness of a subset). Conclusion: continuous strictly psh exhaustion of the convex unit ball.
- New deps beyond scaffold: thm-metric-open-set-algebra, rem-complex-euclidean-space-dictionary, def-metric-bounded-diameter, def-norm-and-normed-space, def-convex-subset-of-euclidean-space, def-compact-space, def-wirtinger-operators..., thm-logarithm-derivative-and-integral, thm-real-power-continuity-and-derivatives, thm-exponential-is-strictly-increasing, def-natural-logarithm, def-path-connected, thm-path-connected-implies-connected, def-balls-and-polydiscs-in-complex-euclidean-space. Dropped from the scaffold deps as superseded: `thm-c-two-levi-criterion-for-plurisubharmonicity` is kept (psh direction), AC kept ambient.
- Choice: AC ambient only, cited in step 1.1 as [F17]; no selection.
- Next: item 10, lem-maximal-distributional-dbar-operator-is-closed (level 1).

### Item 10 — lem-maximal-distributional-dbar-operator-is-closed (level 1) — AUTHORED

- File `items/lem-maximal-distributional-dbar-operator-is-closed.md`; precheck PASS (direct); rendercheck OK; strict contract clean (10/10 batch items after repair); boundary-audit clean.
- Content: (1) Dom dbar_q dense via test forms [F4]/[F6]; (2) dbar_q closed by testing the limit against compactly supported forms and using the local weak-derivative identity; (3) compactly supported smooth forms lie in the adjoint domain with the formal weighted expression; (4) the adjoint is closed. Route: distributional pairing identity, weak-derivative characterization [F7] and uniqueness a.e. [F8], boundedness via Cauchy-Schwarz [F12], adjoint characterization [F10], closedness of adjoints [F11], sequential closure of metric closed sets [F13].
- Contract repair this session (5 errors cleared): F4/F5/F6 cited `source_section: "Proof"` of the definition item, which the strict gate rejects (legal sections: Statement/Statement refuted/Definition/Example/Remark). Resolution: added clause (d) "Density of test forms" to the Definition section of `def-weighted-l2-spaces-dbar-forms` (pointer to its step 1.3) so the density assertion is stated in a citable section, and re-quoted F4/F5/F6 from that Definition section. Added the missing citation for the second link of F14 (`def-countable-choice`) and anchored the nonempty-choice boundary evidence to steps 1.1/2.1/2.2/2.3.
- Manifest deps synced to the file deps (12 deps; drops the manifest-only `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, which is consumed in the definition item, not here).
- Choice: AC ambient, AC_ω consumed by [F4] (step 1.1), [F10] (2.1), [F11] (2.3), [F13] (2.2) through [F14]; no selection.
- Next: item 11, thm-basic-bochner-kodaira-morrey-estimate-cn (level 1).

### Item 11 — thm-basic-bochner-kodaira-morrey-estimate-cn (level 2 after the local supplier edge) — AUTHORED

- File `items/thm-basic-bochner-kodaira-morrey-estimate-cn.md`; precheck PASS (direct, canonical layers 1.1-5.1); rendercheck OK; strict proof-contract clean (1/1 selected, 0 warnings); boundary-audit clean (1 not_applicable: iff-reverse, one-way implication).
- Statement: (1) exact identity $\|\bar\partial u\|^2_\varphi+\|\bar\partial^*_\varphi u\|^2_\varphi=\sum_{|J|=q}\sum_k\int|D_ku_J|^2e^{-\varphi}+\int\sum_{|J|=q-1}\sum_{j,k}\varphi_{j\bar k}u_{jJ}\overline{u_{kJ}}e^{-\varphi}$ for every $u\in C_c^\infty$ $(0,q)$-form and $\varphi\in C^2$; (2) the promised Levi inequality when $\varphi$ is psh. The promised claim is preserved as claim 2.
- Route actually written: $\bar\partial=\sum\varepsilon_kD_k$, $\bar\partial^*=\sum\iota_j\delta_j$ with $\delta_j=\varphi_j-D_j$; Clifford relation $\iota_j\varepsilon_k+\varepsilon_k\iota_j=\delta_{jk}$ by the sign case check on basis monomials ([F4] antisymmetric coefficients + [F7] Koszul sign rule); adjointness $\langle\varepsilon_jf,w\rangle=\langle f,\iota_jw\rangle$; weighted $D_j$-$\delta_j$ adjoint identity derived from the *defining* adjoint relation [F3] applied to the (0,0)-form $f$ and the (0,1)-form $ge_j$ (no raw integration by parts is cited); $\Box=\bar\partial^*\bar\partial+\bar\partial\bar\partial^*=\sum_j\delta_jD_j+\sum_{j,k}\varphi_{j\bar k}\varepsilon_k\iota_j$ using $[D_k,\delta_j]=D_k\varphi_j=\varphi_{j\bar k}$ ([F10] Clairaut for $C^2$).
- Independent verification: the exact identity (including the $\varepsilon$-signed Levi term) was checked symbolically with exact rational arithmetic on random Hermitian positive-definite polynomial weights and random polynomial $(0,q)$-forms; residual identically $0$ for $(N,q)=(1,1),(2,1),(2,2),(3,2),(3,3),(2,1),(4,2)$ (script `/tmp/bkm15.py`). Two false variants were excluded numerically: $\partial$ instead of $\bar\partial$ in the first sum, and unsigned coefficients in the Levi term.
- Deps synced to the file (12 deps): drops the scaffold-only `def-bigraded-complex-differential-forms` and `thm-d-dbar-decomposition-and-identities` (unused), adds the in-run supplier `lem-maximal-distributional-dbar-operator-is-closed` and the published `lem-exterior-multiplication-koszul-sign-rule`, `def-wirtinger-operators-in-several-complex-variables`, `lem-clairaut-for-c2-potentials-by-rectangular-differences`. The new edge raises this item to level 2 and its consumer `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` to level 3; order preserved.
- Choice: AC ambient ([F14]); AC_ω consumed only through the supplier interfaces [F1] (weighted-space completeness/density) and [F6] (maximal operator/adjoint), supplied by [F12]; no selection in the proof.
- Sources set: Demailly VII §1 (1.2) + VIII §4 (4.1)-(4.2); Boas §3.3.3 pp. 81-85 (basic estimate, Exercise 38); Jabbari §4.3 Thm 84/Lemma 85. Boas proves the $(0,1)$-form case in detail; the $(0,q)$ form written here rests on Demailly/Jabbari (scope residual 2 kept explicit).
- Next: item 12, thm-pseudoconvex-domain-smooth-psh-exhaustion (level 1).

### Item 12 — thm-pseudoconvex-domain-smooth-psh-exhaustion (level 1) — AUTHORED

- File `items/thm-pseudoconvex-domain-smooth-psh-exhaustion.md`; precheck PASS (direct); rendercheck OK; strict proof-contract clean; boundary-audit clean; manifest synced (7 deps, level 1); item decision accepted (confidence 1) at 2026-09-30T13:28Z.
- Content: step 1.1 Hartogs pseudoconvexity -> continuous psh exhaustion u via the equivalence theorem; step 2.1 the in-run supplier lem-smooth-regularization-of-psh-exhaustion (item 5, authored/accepted this dispatch) applied to u, with the countable instance of AC obtained from ambient AC by the cited implication; step 3.1 packages claims 1-2. No scaffold-consumer gap: the supplier is inside this pair and is already authored.
- Choice: AC ambient ([F7]); AC_omega consumed through supplier interface [F4] in step 2.1 via [F5],[F6]; no selection in the proof.
- Next: item 13, lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains (recomputed level 3).

### REPAIR during item-13 audit — thm-basic-bochner-kodaira-morrey-estimate-cn (item 11)

- Defect found while reconciling the conventions needed by item 13 (weighted Morrey): the item-11 Given block defined $\delta_j:=\varphi_j-D_j$ with $D_j:=\partial_{\bar z_j}$, but [F6] (weighted-adjoint coefficient formula) and steps 1.3/1.4/2.1/3.1 use $\delta_j=\varphi_j-\partial_{z_j}$ (holomorphic derivative), and the exact-arithmetic verifier `/tmp/bkm15.py` also used `pdz` = $\varphi_{z}$ with `dz` = $\partial_z$ in `ds`. Repair: Given block reworded to $\delta_j:=\varphi_j-\partial_{z_j}$ with an explicit note that $D_j=\partial_{\bar z_j}$ is the derivative in the first sum of claim 1. No statement, step, citation or dependency changed.
- Re-checked: precheck PASS (direct), rendercheck OK, strict proof-contract clean (1/1). Item 11 decision re-recorded as `repaired`, confidence 1.

### Item 13 — lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains (level 2 after sync) — AUTHORED (repaired)

- File `items/lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains.md`; precheck PASS (direct); rendercheck OK; strict proof-contract clean (13 citations, 0 errors/0 warnings); boundary-audit clean.
- Statement now says explicitly that claims 2-4 assume *$D$ is Levi pseudoconvex* (the missing hypothesis found while auditing); claim 3 keeps the exact smallest-eigenvalue bound $\int(\lambda_1+\cdots+\lambda_q)|u|^2e^{-\varphi}\le\|\bar\partial u\|_\varphi^2+\|\bar\partial^*_\varphi u\|_\varphi^2$; claim 4 extends to $u\in\operatorname{Dom}\bar\partial_q\cap\operatorname{Dom}\bar\partial_\varphi^*$.
- Proof route (canonical layers 1.1-10.1): 1.1 eigenvalue bound $|w|\le qnM$, $w=\lambda_1+\cdots+\lambda_q$; 1.2 **transport identity** $z\in\operatorname{Dom}\bar\partial_\varphi^*\Leftrightarrow e^{\varphi}z\in\operatorname{Dom}\bar\partial_0^*$ with $\bar\partial_\varphi^*(e^{-\varphi}v)=e^{-\varphi}\bar\partial_0^*v$; 2.1 $u\in\operatorname{Dom}\bar\partial_\varphi^*$ via (BC) + [F12](a) + transport; 3.1 operator identities (Clifford, $\iota_j\bar\partial=D_j-\bar\partial\iota_j$, $[D_k,\delta_j]=\varphi_{j\bar k}$, box identity); 4.1 eigenvalue dominance (exchange argument, Parseval); 4.2-4.4 exact identity pieces with boundary terms; 5.1 boundary identity using tangency of the operator $T_K$ and (BC); 6.1 claim 1; 7.1 claim 2 (Levi hypothesis); 8.1 claim 3; 9.1 claim 4 by the unweighted Haslinger density and conjugation $u_\ell=e^{-\varphi}v_\ell$; 10.1 wrap-up.
- NUMERIC CHECK: exact-rational verifier `/tmp/work13/star13.py` passes for $(n,q)=(2,1),(3,2),(3,1)$ at valid boundary points (checks the boundary identity and the coefficient identity, both real and complex data).
- Source honesty: [F11] is the Boas weighted integration by parts (§3.3.3 pp. 81-84, (3.3)-(3.4), Exercise 38); [F12] is *Haslinger's unweighted* Prop 4.53/(4.27), Prop 5.14/(5.20), Lemmas 5.16-5.18 (printed pp. 89-124); the weighted reduction is done locally in steps 1.2/2.1/9.1 and is *not* attributed to Haslinger.
- Deps changed: dropped the unused scaffold dep `thm-basic-bochner-kodaira-morrey-estimate-cn`; added the operator-identity deps actually used (`lem-exterior-multiplication-koszul-sign-rule`, `lem-clairaut-for-c2-potentials-by-rectangular-differences`, `def-wirtinger-operators-in-several-complex-variables`, spectral-theorem deps, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`). Manifest synced; level now 2; downstream items shift down one level (solver 3, Hörmander 4, corollaries 5, Levi 6, Oka-Weil 7).
- Cross-batch input: row 2 marked `removed` (the batch-10 `lem-mollification-commutes-with-weak-derivatives-in-the-interior` is no longer cited; the graph-norm density is now derived from Haslinger + the transport identity). Page edge A -> batch-10 page stays `verified`.
- Choice: AC ambient ([F10]); $\mathrm{AC}_\omega$ consumed through [F1] (weighted completeness/density), [F2] and [F12](b); no selection in the proof.
- Decision: `repaired`, confidence 1, deps = file deps (13). Next: item 14 `lem-hormander-solver-on-smooth-pseudoconvex-domain` (level 3) — requires the weighted $A$-domination form of the abstract solver; plan to extend item 2 `lem-hilbert-complex-solver-from-coercive-estimate` with the range-form claim before authoring item 14.

### REPAIR during item-14 audit — lem-hilbert-complex-solver-from-coercive-estimate (item 2, level 0)

- Two concrete defects fixed while preparing the consumer: (1) the coercivity display read $\|x\|^2\le C(\|T^*x\|^2+\|Sx\|^2)$ while every step of the existing proof (step 3.1 and the $C^{-1/2}$ bounds of steps 4.1, 5.1, 7.1) used the reciprocal; replaced by the source's exact form $\|T^*x\|^2+\|Sx\|^2\ge C\|x\|^2$ (Demailly Ch. VIII (1.3), printed p. 364), with step 3.1 now reading $\|x'\|^2\le C^{-1}(\ldots)$. (2) Added claim (iv), the $A$-weighted Cauchy-Schwarz solvability statement of Demailly Thm 4.5 (printed pp. 370-372): for bounded self-adjoint $A\ge0$ with $\langle Ax,x\rangle\le\|T^*x\|^2+\|Sx\|^2$ on $D(T^*)\cap D(S)$ and $f=Ag$, there is $u\in D(T)$, $Tu=f$, with least-norm $\|u_0\|^2\le\langle f,g\rangle$. New steps (canonical labels) 1.2, 4.2, 6.2, 7.2, 8.1: semidefinite Cauchy-Schwarz by the discriminant argument, the estimate $|\langle x,f\rangle|\le\|T^*x\|\langle f,g\rangle^{1/2}$, the extension/Riesz stage with $\beta=\langle f,g\rangle^{1/2}$, the adjointness/closedness step, and the least-norm projection; the specialisation $A=C\,\mathrm{id}$, $g=f/C$ recovers (iii).
- Checks: precheck PASS (direct, canonical stratification 1.1-8.1 adopted); rendercheck OK; strict proof-contract clean (13 citations including F10, 11 derivations, 0 errors/0 warnings); boundary-audit clean. Statement changed, so the pair scope review was refreshed by the local-repair rule (18 A + 6 B inventory unchanged; old receipt preserved at /tmp/step3a-review-hormander-BEFORE-refresh.json); decision re-recorded as `repaired`, confidence 1.
- EXACT CHECK of claim (iv): `/tmp/work14/check_iv.py` (pure-Python exact rational arithmetic, real Hilbert-space instances) tested 178 admissible models ($A\le TT^*+S^*S$ verified by Sylvester's criterion; $f=Ag\in\ker S$; least-norm solution via orthogonal projection of a particular solution onto $(\ker T)^\perp$) with 0 violations of $\|u_0\|^2\le\langle f,g\rangle$. The checker exists because numpy/sympy are unavailable in this sandbox.

### Item 14 — lem-hormander-solver-on-smooth-pseudoconvex-domain (level 3) — AUTHORED

- File `items/lem-hormander-solver-on-smooth-pseudoconvex-domain.md`; precheck PASS (direct); rendercheck OK; strict proof-contract clean (16 citations, 8 derivations/1 routine step, 0 errors/0 warnings); boundary-audit clean.
- Statement: bounded $C^\infty$ Levi pseudoconvex $D$, weight $\varphi\in C^2(\overline D)$ strictly psh on $\overline D$, $1\le q\le n$, $\lambda_1+\cdots+\lambda_q=:w>0$; every $\bar\partial_q$-closed $f\in L^2_{0,q}(D,e^{-\varphi})$ has $u\in\operatorname{Dom}\bar\partial_{q-1}$ with $\bar\partial u=f$, and the least-norm $u_0\in(\ker\bar\partial_{q-1})^\perp$ satisfies $\|u_0\|_\varphi^2\le\int_D|f|^2w^{-1}e^{-\varphi}dV$. This preserves the scaffold promise exactly and adds the least-norm clause.
- Route (canonical 1.1-5.1): 1.1 spaces $H_0,H_1,H_2$ and maximal operators $T=\bar\partial_{q-1}$, $S=\bar\partial_q$ closed/densely defined (item 10 claim 1); 1.2 $S\circ T=0$ by the shuffle-sign cancellation of second *distributional* derivatives (uses thm-distributional-differentiation-is-continuous-and-commutes) — this is the new content not present in the scaffold; 1.3 Hermitian Hessian matrices (Clairaut + real weight), Rayleigh minimum $\lambda_1$, strict psh $\Rightarrow\lambda_1>0$ pointwise, continuity on the compact $\overline D$ gives uniform $0<q\delta\le w\le qnM$; 2.1 the multiplier $A$ is bounded self-adjoint nonnegative; 3.1 domination $\langle Ax,x\rangle\le\|T^*x\|^2+\|Sx\|^2$ on $D(T^*)\cap D(S)$ is item 13 claim 4 with $T^*=\bar\partial_\varphi^*$; 3.2 $g=f/w\in H_1$ with $Ag=f$ and $\langle f,g\rangle=\int|f|^2w^{-1}e^{-\varphi}$; 4.1 item 2 claim (iv); 5.1 unwinding.
- Source honesty: the estimate form is Demailly's Thm 4.5/Thm 6.5 with (6.4), printed pp. 370-372 and 377-378; Boas §3.3.3 is the $(0,1)$-form basic estimate; Jabbari (4.4)/Thm 72 is the closed-range energy route. The item uses the *abstract* item-2 form rather than a direct quote of a weighted-boundary theorem.
- Choice: AC ambient; $\mathrm{AC}_\omega$ consumed through [F2] (density/closedness) and claim (iv) of item 2; no selection in the proof.
- Manifest synced (13 deps, level 3). Decision: `accept`, confidence 1. Next: item 15 `thm-hormander-l2-dbar-existence` (level 4).

### Item 15 — thm-hormander-l2-dbar-existence (level 4) — AUTHORED

- File `items/thm-hormander-l2-dbar-existence.md`; precheck PASS (direct, canonical layers 1.1-1.4, 2.1-2.2, 3.1-3.2, 4.1, 5.1-5.2, 6.1); rendercheck OK; strict proof-contract clean (27 citations, 11 derivations, 1 routine step, 0 errors/0 warnings); boundary-audit clean (8 rows: 6 checked, 2 not_applicable iff).
- Statement: (1) on Hartogs pseudoconvex Ω, strictly psh weight φ∈C², q≥1, every closed f∈Dom ∂̄_q with finite E(f)=∫|f|²w^{-1}e^{-φ} (w=λ₁+...+λ_q) has u∈Dom ∂̄_{q-1} with ∂̄u=f and ‖u‖²_φ≤E(f); (2) C^∞ branch: φ∈C^∞, f smooth ∂̄-closed with finite energy ⇒ smooth solution with the same bound, quoted from Demailly (6.5) "resp. C^∞".
- Route: item 12 exhaustion (regular strictly psc levels) → 1.2/1.3 Hermitian matrices, w>0 pointwise, frame-minimum ⇒ w upper semicontinuous (Bessel/Parseval [F15]) → 1.3 restriction f_k closed on Ω_k by locality of distributional differentiation → 2.2 weighted solver item 14 on each Ω_k → 3.1 zero extension, uniform bound → 4.1 Hilbert reflexivity [F16] (AC_ω from AC via [F22]) + reflexivity criterion [F17] (ultrafilter lemma [F20], DC [F22], HB [F21]) → 5.1 norm lsc [F18] → 1.4 distributional pairing identity ⟨∂̄ũ,η⟩=⟨ũ,e^φ∂₀*η⟩_φ (unweighted formal adjoint; test identity + shuffle signs) → 3.2 eventual equation on supp η → 5.2 limit u ∈ Dom ∂̄_{q-1}, ∂̄u=f → 6.1 claims (claim 2 by Demailly C^∞ [F24]).
- Fact restructuring for the contract schema: one citation per (fact, source); F1/F2/F3 are three separate facts from def-weighted-l2 (pairing; ∂̄+maximal domain; antisymmetry), F11-F16 split the Wirtinger/Clairaut/spectral/Bessel suppliers; F23 bundles the four choice-principle definitions (AC, DC, AC_ω, HB) with four citations. All quotes verified as exact normalized substrings of the cited sections.
- Numeric/consistency: no numeric verifier needed beyond the exact algebraic identity of step 1.4 and the frame-min exchange inequality in 2.1 (both exact rational computations written out); precheck's restratification moved the pairing identity to layer 1 and the w-measurability step to layer 2 (no within-layer citations).
- Scope residual 1 addressed at authoring: the item's statement uses the strictly psh (6.5) form; the Demailly (6.9) usc-loss statement is NOT cited. Coverage wording still to be narrowed at the coverage refresh.
- Deps synced (25 deps, level 4); decision `accept`, confidence 1. Next: item 16 `cor-dolbeault-vanishing-pseudoconvex-domain` (level 5).

### Item 16 — cor-dolbeault-vanishing-pseudoconvex-domain (level 5) — AUTHORED

- File `items/cor-dolbeault-vanishing-pseudoconvex-domain.md`; precheck PASS (direct); rendercheck OK; strict proof-contract clean (36 citations, 18 derivations, 0 errors/0 warnings); boundary-audit clean (8 rows: 6 checked, 2 not_applicable iff).
- Statement: (1) on a Hartogs pseudoconvex domain every smooth dbar-closed (0,q)-form, 1<=q<=n, is exact and H^{0,q}=0; (2) the finite-energy weighted L2 exactness, i.e. item 15 claim 1 restated verbatim.
- Route: item-12 smooth strictly psh exhaustion S; shift S_1 = S + (1-mu) >= 1; H = complex Hessian, g = det H/(tr H)^{n-1} continuous positive with lambda_1 >= g; standard step chi, kappa, beta; shells A_j = {j-1 <= S_1 < j}; per-shell energy budgets theta_j; d_i = i + log(1+theta_{i+1}), C_0 = max(1,d_1,d_2), a_i = max(0,4(d_{i+2}-C_0(i+2))), F = C_0 t + sum a_i beta(t-i) with F' >= 1, F'' >= 0, F(j) >= d_j; psi = (F-id) o S_1 psh; Phi = F o S_1 smooth strictly psh with w_Phi >= g; Beppo Levi + ratio test give E_Phi(eta) < infinity; item 15 claim 2 (smooth branch) yields the primitive.
- Repairs made during this audit: (a) removed the unused [F9] (def-bigraded) from the Facts block — uncited facts make the strict contract impassable; (b) step 7.1 no longer claims "strictly psh is psh" from the definition item [F3] (whose Definition section does not state it); it now cites the C^2 Levi criterion [F4] for S_1 in C^2 with L >= 0; (c) F24 rewritten so the real-eigenvalue clause is derived in-line from self-adjointness rather than asserted as part of the quoted spectral-theorem statement.
- Choice: AC ambient ([F32]); AC_omega consumed only through [F17] (Lebesgue finiteness, steps 4.1 and 12.1) and [F18] (Borel measurability, steps 3.1 and 10.1); [F7] is applied under its own AC hypothesis; no family of nonempty sets is selected (step 12.1).
- Manifest synced (37 deps, level 5). Decision: accept, confidence 1.
- Next: item 17, cor-first-cousin-problem-pseudoconvex-domain (level 5, page-A order).

### Session 11 — plan repairs, new definition, item 17

#### Plan repairs (b-leaf / undeclared-prereq), all re-checked and re-recorded as `repaired`
- Item 4 `lem-locally-finite-smooth-partition-of-unity-on-domain`: [F2] now cites in-closure `lem-smooth-bump-between-concentric-euclidean-balls` (r=r_k, R=3r_k/2); step 4.1 rewritten (chi_k=1 on B(z_k,r_k)); contract updated (F2 source+quote, 4.1 inputs include F4, F4 uses 1.1+4.1).
- Item 5 `lem-smooth-regularization-of-psh-exhaustion`: dropped `def-radial-mollifier-family-in-rn` and `ex-flat-exponential-function`; [F4] is now the concentric-ball bump, [F20] the in-closure mollifier family (def-mollifier-family-generated-by-a-unit-mass-smooth-bump + thm-lebesgue-measure-under-dilations-and-reflections), [F21] the measure toolkit (box measure, monotonicity, continuous=>Borel), [F12] the standard flat function pair (def + thm). Step 1.2 now normalises rho_0/int rho_0 so rho_eps is nonnegative, unit mass, supp in B_eps(0); steps 2.1/4.1 cite F20.
- Item 11 `thm-basic-bochner-kodaira-morrey-estimate-cn` and item 13 `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`: replaced out-of-closure `lem-exterior-multiplication-koszul-sign-rule` by in-closure `prop-basic-wedge-is-multilinear-and-alternating` + `thm-exterior-algebra-laws` + `lem-wedge-monomials-in-a-dual-basis-form-a-basis`; the Koszul rule is stated as their consequence; contracts carry 3 citations each with unchanged uses.
- Item 16 `cor-dolbeault-vanishing-pseudoconvex-domain`: [F11] now cites the standard flat function pair; contract updated.
- Manifest kind of `thm-oka-weil-approximation-pseudoconvex-domain` fixed corollary -> theorem (prefix finding).
- Overlay re-run (`/tmp/build-overlay.mjs` + `tools/validate-plan.mjs /tmp/overlay-b29-new3.json`): zero b-leaf / undeclared-prereq / prefix findings for page `hormander-estimates-and-the-levi-problem`. Remaining 39 errors are other pages' pre-splice mismatches (Step 4).
- Step-3a scope decision refreshed (sufficient) AFTER the new definition was registered; see `research/frontier-37-owner-30-step3a-review-hormander-estimates-and-the-levi-problem.json` (sha 297bd95f...).

#### New item (genuinely new ID, skips the Step-3 self-review loop per dispatch)
- `def-meromorphic-function-in-several-complex-variables` (definition, A page): local-quotient definition, restriction, holomorphy on subsets, sums with holomorphic functions, poles closed with empty interior, local nature, no choice. Heading is `## Remark` because the strict contract only accepts `Remark` (not `Remarks`). Registered in manifest (position 1 of A page items), coverage (Lebl Ch. 1 §1.2 row + new `demailly-cadg-ch-i` source for §6.2, plus the 6.5/6.9 narrowing), and contracts (empty citations/derivations, 8 boundaries). precheck n/a, rendercheck OK, strict contract clean.

#### Item 17 `cor-first-cousin-problem-pseudoconvex-domain` (level 6 after the supplier change) — AUTHORED
- Statement: AC; Omega Hartogs pseudoconvex in C^n; locally finite cover (U_i) with meromorphic m_i whose differences m_i - m_j are holomorphic on overlaps; conclusion: global meromorphic G with G - m_i holomorphic on each U_i.
- Route (Lebl Ch. 4 §4.6, Lemma 4.6.4 + Thm 4.6.5, pp. 153-154 read in full): 1.1 partition of unity; 1.2 f_j = sum_k chi_k (m_j - m_{i(k)}) smooth; 2.1 f_j - f_l = m_j - m_l; 3.1 eta = dbar f_j glues (CR system kills dbar of the holomorphic differences); 4.1 dbar eta = dbar^2 f_j = 0; 5.1 in-pair smooth vanishing corollary (q=1) gives smooth psi with dbar psi = eta; 6.1 F_j = f_j - psi holomorphic by CR 3=>1; 7.1 G = m_j - F_j glues and is meromorphic (clause (d) + local nature); 8.1 G - m_j = -F_j holomorphic.
- New dep `cor-dolbeault-vanishing-pseudoconvex-domain` (in-pair, L5) replaces the scaffold's direct `thm-hormander-l2-dbar-existence`; level 5 -> 6; ex-first-cousin-gluing moves to L7. Remaining authoring order recomputed: 18 lem-boundary-peak-function-by-dbar-correction (L5), 19 lem-oka-weil-on-domain-of-holomorphy (L5), 20 ex-explicit-dbar-solution-with-l2-estimate (L5, B), 21 ex-hormander-estimate-with-gaussian-weight (L5, B), 22 thm-levi-problem (L6), 23 thm-oka-weil-approximation-pseudoconvex-domain (L7), 24 ex-first-cousin-gluing-on-a-pseudoconvex-domain (L7).
- Checks: precheck PASS (direct), rendercheck OK, strict proof-contract clean (12 citations, 9 derivations, 0 errors/0 warnings), boundary-audit clean. Decision `accept`, confidence 1.

## Step-3b checkpoint — session 12 (dispatch e4110e1d..., resumed)

- Entry state: 17 items authored + decided (see decisions list), 7 items unwritten:
  lem-boundary-peak-function-by-dbar-correction, lem-oka-weil-on-domain-of-holomorphy,
  ex-explicit-dbar-solution-with-l2-estimate, ex-hormander-estimate-with-gaussian-weight,
  thm-levi-problem, thm-oka-weil-approximation-pseudoconvex-domain,
  ex-first-cousin-gluing-on-a-pseudoconvex-domain. Pages not yet written.
- Item 18 `lem-boundary-peak-function-by-dbar-correction` AUTHORED (2026-10-01).
  Statement: claim 1 for bounded D with a C^\infty defining function \rho on a
  neighbourhood of D-bar, \rho strictly psh near \partial D (covers D={S<s} for
  strictly psh S); claim 2 for bounded D with C^\infty strongly psc boundary
  (Jabbari Thm 64(1) supplies the hypothesis). Proof route: local separator
  (item 3, case d\rho(p)\ne0; quadratic-part polynomial A(z-p) in the case
  d\rho(p)=0, both with the quantitative bound Re h_0\le-c|z-p|^2 on
  D-bar n B(p,\delta)); auxiliary domain D''={rho<eps} with continuous psh
  exhaustion F=max(-log(eps-rho),M+1); in-pair item 5 + Demailly (6.13)(a)
  => D'' weakly pseudoconvex; tube cutoff \chi=\beta\theta(|h_0|) with
  supp(\partial-bar\chi) inside {h_0\ne0}, \alpha=\partial-bar\chi/h_0;
  Demailly (6.5) with q=1, trivial bundle, weight |z|^2 => v in C^\infty(D'')
  with \partial-bar v=\alpha; g=h_0/((c+v)h_0-\chi) and h=e^{-g}.
  Deps note: the scaffold's thm-hormander-l2-dbar-existence dependency is NOT
  used (item 15 requires Hartogs pseudoconvexity of the ambient domain, which is
  not available for the strictly larger D'' without the Levi theorem); the
  stored source fact is Demailly (6.5) directly. precheck PASS, rendercheck OK.
- Next: item 19 lem-oka-weil-on-domain-of-holomorphy (level 5, A page).

## Step-3b checkpoint — session 13 (dispatch e4110e1d..., resumed 2026-10-01)

Entry state re-verified on disk: 17 items decided; item 18 authored but undecided; items 19-24 unwritten.
Canonical numbering adopted by rebuilding each file from precheck's REPAIR block where required.

- Item 18 `lem-boundary-peak-function-by-dbar-correction` REPAIRED: claim 1 now covers
  bounded OPEN sets (was: bounded domains). Reason: the Levi item needs a peak function
  at the maximum point of the exhaustion on a hull, i.e. at a possibly non-regular level
  s; the only defining function available there is S-s, which defines the whole (possibly
  disconnected) sublevel, and [F3] must therefore apply to bounded open sets. Proof
  changes: step 2.1 D'' = union of the components of D_eps meeting D (with a proof of
  closure(D) subset D'' and boundary(D'') subset {rho=eps}); step 3.2 compactness of
  sublevels justified via the closure computation; steps 4.2/5.1 apply the regularization
  lemma and Demailly (6.5) on the component D_p'' containing p (supp(alpha) subset B(p,delta) subset D_p'') and extend v by 0 on the other components. precheck PASS, rendercheck OK, contract clean. Decision: repaired, confidence 1.
- Item 19 `lem-oka-weil-on-domain-of-holomorphy` AUTHORED + REPAIRED during authoring:
  (a) graph-lift step rewritten: a general cutoff chi in C_c^inf(W) (W = dom(g) cap D) with
  chi = 1 near L_1, a margin argument (S subset {|g_1| > m} with m > 1) and r in (1,m), so
  beta = g dbar-chi/(g_1 - w) is C-infinity and compactly supported in X_{N,r} = Omega_N x D_r;
  (b) step 1.2 now records the (0,1)-form to (n+1,1)-form identification with the holomorphic
  volume form, matching Demailly Thm 6.5's (n,q) statement (same device as item 18 step 5.1);
  (c) step 6.1 adds the hull idempotence needed to apply the polyhedron construction.
  Canonical layers 1.1,1.2,1.3,2.1,3.1,4.1,5.1,6.1,7.1. precheck PASS, rendercheck OK.
- Item 20 `ex-explicit-dbar-solution-with-l2-estimate` AUTHORED: on C with phi=2|z|^2,
  f = zbar dzbar, u = (1/2) zbar^2; dbar u = f (Wirtinger chain rule); radial moment formula
  int_C |z|^{2k} e^{-a|z|^2} dA = pi k!/a^{k+1} via the polar-coordinates theorem
  (sigma(S^1) = 2 pi from the disc area) and the one-variable change of variables with
  Gamma(k+1) = k!; E(f) = pi/8, ||u||^2 = pi/16. precheck PASS, rendercheck OK.
- Item 21 `ex-hormander-estimate-with-gaussian-weight` AUTHORED: on C^n, phi = |z|^2,
  f = dzbar_1, u = zbar_1; both weighted squared norms equal pi^n via Tonelli on the
  product and the plane integrals of step 2.1 (pi and pi respectively); equality in the
  q=1 estimate. precheck PASS, rendercheck OK.
- Item 22 `thm-levi-problem` AUTHORED. Structure: reduction (Cartan-Thullen + published
  forward direction); exhaustion; peaks on components of sublevels via [F3] applied to the
  bounded open sublevel Omega_k; lemma "peaks at every boundary point imply a domain of
  holomorphy" (path in U_2, first exit t_1, component C, identity theorem on C and on a ball
  around p', contradiction (1-h)(p') = 0); every component of a regular sublevel is a domain
  of holomorphy; hull decomposition over components in a union of domains of holomorphy;
  closure(Omega_r) is O(Omega_t)-convex for r < t with t regular (peak at the maximum of S on
  the hull, Oka-Weil on the components of Omega_t); approximation on closure(Omega_r) by
  O(Omega_t), then by O(Omega) by telescoping; final case analysis for p outside the hull
  inside Omega_{t_1} (density), outside Omega_{t_1} but outside the hull in Omega_{t_3}
  (separation), and inside that hull (Urysohn function 1-chi holomorphic on a neighbourhood of
  the hull, Oka-Weil approximation, separation); conclusion by Cartan-Thullen. Canonical
  layers 1.1-12.1. precheck PASS, rendercheck OK.
- Item 23 `thm-oka-weil-approximation-pseudoconvex-domain` AUTHORED: Levi theorem turns
  pseudoconvexity into a domain of holomorphy, then the host-domain Oka-Weil lemma applies.
  precheck PASS, rendercheck OK.
- Item 24 `ex-first-cousin-gluing-on-a-pseudoconvex-domain` AUTHORED: two-chart Cousin data
  on C verified (cover, meromorphic data, compatibility on the annulus) and the explicit
  witness G = 1/z checked against the Cousin theorem; C is Hartogs pseudoconvex by the
  whole-space convention. precheck PASS, rendercheck OK.

Bookkeeping: manifest deps synced to file deps for all 25 items; dependency levels updated
to the computed values (items 18,19,22,23 changed to 1,2,3,4); contracts extended to 25/25
items with strict gate clean; all 11 items needing a current item decision recorded.
Library pages A and B written. Remaining: report and final handoff checks.

Final bookkeeping (session 13 end): depcheck found one unused dependency pointer
(`def-weight-function-and-weighted-l2-inner-product` on item 20); removed from the
item and the manifest, item 20's decision re-recorded with the refreshed dependency
list. Final suite: precheck 24 checked / 0 failing; rendercheck OK on all 25 items
and both pages; content-policy 25 items / 0 errors; proof-contract --strict 25/25
clean; item-dependency-levels clean; depcheck/fwdcheck clean for this pair;
step3 decisions final: no owned item open. Report completed.


## Owner peak prerequisite repair after Alpha e

The peak lemma now uses three explicitly proved local prerequisites on the existing A page: positive smooth collars, global smooth strict defining functions, and smooth-exhaustion-to-Hartogs pseudoconvexity with the polydisc norm. Both peak Statement branches are unchanged. The actual smooth-data Hormander supplier puts the peak at dependency level 5; the new prerequisites are level 0. The synchronized manifest and contracts contain 28 items. Local targeted checks and the full batch risk review pass. Exact argument and native escalation closure: `research/frontier-37-owner-30-boundary-peak-owner-repair.md`. Shared plan and unified ledger reconciliation remain serial owner integration.
