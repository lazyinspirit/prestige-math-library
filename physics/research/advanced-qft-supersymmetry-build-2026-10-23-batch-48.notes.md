# Batch 48 — Step 1 authoring evidence

Run: advanced-qft-supersymmetry-build-2026-10-23

Batch: 48 (beta, advanced-qft-and-supersymmetry)

## Plan, inventory, and prerequisites

The complete plan section at research/plan-advanced-qft-and-supersymmetry-track.md, “Field-Theory Q-Exact Localization Derivation” (lines 667–677), matches the current research/plan-spec.json row and batch-48 manifest for A/B IDs, title, order 1004, category, physics library, and both required pages. No design/plan conflict was found. The design scope remains a conditional Ward identity with measure, contour, anomaly, zero-mode, and continuum-limit qualifications.

The current dependency-level file places batch 48 at level 6 with in-run page prerequisites batches 11 and 47. The exact page suppliers are qftx-finite-q-exact-localization (batch 11) and qftx-susy-backgrounds (batch 47). Their current item carriers were inspected directly. thm-finite-dimensional-q-exact-deformation-invariance has a complete finite-dimensional proof and a current ready Step 1 record; its statement requires Q-closed action/observable, the Q-squared condition, vanishing Q-boundary integral, and a compact-parameter L1 majorant, and expressly makes no continuum or large-parameter claim. def-qftx-susy-background-data and post-qftx-rigid-supersymmetric-background have current ready Step 1 records. The latter is a draft physical postulate with a pending precheck; those labels do not make a prerequisite gap. Its exact adopted S4 model, total gauge-fixed Q=s+delta, square Q^2=delta_gauge(a_0)+delta_U(1)(omega), SU(2) and normalization conventions, formal measure, noncommutative regulator qualification, and unresolved continuum status were inspected. It is consumed as a physical assumption, never as a proof of a continuum integral.

The proposed inventory supplies two A-page contracts and no B-page item contracts. The binding owner direction requires substantive B-page examples despite empty scaffold placeholders. This batch therefore adds a proved finite-dimensional regulator illustration and a boundary-term failure example; neither is represented as an actual S4 regulator or continuum result.

## Item checkpoint — def-qftx-supersymmetry-fluctuation-complex

The new A-page definition specifies graded boson/fermion/ghost bundles, smooth and Sobolev domains, the total Q-square, the Q-fixed fluctuation linearization, its principal symbol and ellipticity obligations, Faddeev–Popov/stabilizer zero modes, determinant conventions, and the additional data required for a finite-dimensional regulator. Its exact dependencies are def-qftx-susy-background-data (formulation prerequisite, batch 47) and def-finite-dimensional-q-exact-localization-data (formulation prerequisite, batch 11); the recomputed item level is 2. The definition explicitly does not infer ellipticity, a determinant, a finite regulator, or a continuum measure. No proof is claimed for a definition. Its current source references are Schwarz–Zaboronsky, Sections 2–3; Pestun–Zabzine, Section 1; Pestun, Sections 2–4; and Peelaers, Sections 1.1–1.2. Batch-11/47 contain prior full-text retrieval stamps for these URLs; the batch-48 per-item source mapping and final source-fetch-check --stamp remain to be completed.

This checkpoint records authoring only; scoped validation and Step 1 readiness have not yet been run for the new item. Next: author the conditional finite-regulator Ward theorem and its proof contract, then both B examples and evidence.

## Item checkpoint — pthm-qftx-qexact-localization-ward-identity

The A-page physics theorem proves only finite-parameter deformation independence for one fixed bundle sector and one separately supplied finite-dimensional Q-preserving regulator. Its exact dependencies are def-qftx-susy-background-data (formulation prerequisite, level 1), def-qftx-supersymmetry-fluctuation-complex (formulation prerequisite, level 2), post-qftx-rigid-supersymmetric-background (physical assumption, level 8), and thm-finite-dimensional-q-exact-deformation-invariance (mathematical premise, level 1); the recomputed item level is 9. The proof maps each finite-regulator hypothesis to the actual mathematical supplier and applies its complete constancy conclusion. The statement explicitly retains the formal S4 measure/regulator limitation, Q-square symmetry, no-anomaly/no-boundary condition, L1 majorants, fixed-sector restriction, and absence of a continuum or large-t limit claim.

The local proof source is the inspected and current finite-dimensional theorem from batch 11. The physical source context is Pestun, Section 3 (Q-square-invariant V and boundary condition) and Section 1 (the S4 noncommutative extension is assumed, not constructed); Pestun–Zabzine, Section 1 (finite-dimensional proof separated from the infinite-dimensional determinant problem); Folland, Theorem 2.27(b) (majorant for differentiation under the integral); Schwarz–Zaboronsky, Section 3 (their distinct compact finite-dimensional fixed-locus theorem and hypotheses); and Peelaers, Sections 1.1–1.2 (4D background and measure assumptions). Existing batch-11/47 full-text retrieval history is reused; per-item coverage dispositions and current fetch stamps are recorded in the batch coverage file.

No scoped checks or Step 1 record have yet been written for this theorem. The conditional finite-regulator hypotheses are explicit assumptions; they are not recorded as an absent supplier. Next: author both required B examples, then contracts, manifests, page metadata, coverage and cross-batch edges before running scoped checks.

## Item checkpoint — ex-qftx-finite-regulator-torus-ward-identity

The first B-page example fixes a dimensionless two-torus, Q=d, a Q-closed even insertion, an odd deformation, and computes the varying top-degree density and constant integral $4\pi^2\lambda$. It directly verifies periodic cancellation of every exact two-form, Q-closure, Q-squared, and the compact-parameter majorant before applying thm-finite-dimensional-q-exact-deformation-invariance. Its only item dependency is that batch-11 mathematical theorem with role mathematical-premise; item level 2. The example explicitly does not identify this toy integration manifold with the S4 field configuration space and makes no empirical or continuum claim. It has no external source dependency; it is an AI-generated example with a direct verification. No scoped checks or readiness record have yet been run. Next: author the boundary-term example.

## Item checkpoint — ex-qftx-qexact-boundary-term

The second B-page example uses the compact cylinder $[0,1]\times S^1$ with Q=d and computes $Z(t)=-2\pi t$. It verifies $Q^2V=0$ and Q-closure but calculates the nonzero integral of the exact boundary term directly, so the example identifies precisely why it does not satisfy the no-boundary Q-invariance hypothesis. It has no logical item dependencies, dependency level 0, and makes no S4 or continuum claim. It is an AI-generated example with a direct calculation and has no external source dependency.

All four assigned carriers are now drafted in supplier order. Remaining work: finish proof contracts, update the batch manifest and frontmatter-only A/B pages, write source coverage and cross-batch rows, run the scoped validation battery, inspect final dependency levels and proof layout, then write final Step 1 readiness dispositions and results.

## Source coverage and cross-batch interfaces

Batch-48 coverage maps five inspected full-text treatments to the A-page items and preserves the actual prior successful retrieval attempts from batches 11 and 47. The current source-fetch-check --stamp command reports 5/5 fetch-verified and 5/5 resolved, with 0 newly stamped records because all five exact URLs already had successful current-run stamps:

- Schwarz–Zaboronsky, https://arxiv.org/pdf/hep-th/9511112, Section 2, PDF pp. 2–3, supports the finite-dimensional odd tangent/form setup for the definition; Section 3, PDF pp. 4–7, is recorded as a finite-dimensional scope comparison with its own compactness and divergence-free hypotheses, not as the Ward proof.
- Pestun–Zabzine, https://arxiv.org/pdf/1608.02953, Section 1, PDF pp. 1–3, supports finite-dimensional Q-exact deformation and distinguishes the extra saddle limit and formal infinite-dimensional extension.
- Folland, https://djvu.online/file/NPF4BEtSuqdFA, Theorem 2.27(b), printed pp. 55–56, supports differentiation under an integral with a uniform L1 derivative majorant.
- Pestun, https://arxiv.org/pdf/0712.2824, Section 2 equations (2.5)–(2.14) and (2.26)–(2.30), Section 3 equations (3.1)–(3.3), and Section 1 around (1.5)–(1.6), supports source conventions and explicitly preserves the assumed/unconstructed S4 regulator extension and boundary caveat.
- Peelaers, https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf, Sections 1.1–1.2 equations (19)–(26), PDF pp. 3–4, supplies an independent lecture-note treatment of the 4D background and its measure/off-shell assumptions; it does not prove a continuum Ward identity.

The coverage dispositions are in the JSON file: the local mathematical proof is supported by the exact batch-11 theorem, the source materials support finite-dimensional conventions and limits, and the two B examples are constructed and verified locally. No retrieval failed, no source was dropped, and no source-resolution escalation is applicable.

The cross-batch dependency file has one row per each of eight current edges: two page prerequisites, two definition inputs, three theorem inputs, and the torus example's mathematical theorem. Each is marked verified only for the inspected scoped interface and current Step 1 readiness; none asserts independent proof acceptance. The B-to-A page edge and theorem-to-fluctuation-definition item edge are internal and therefore are not cross-batch rows.

## Transitive mathematical context and axiom strength

Read the relevant entries from research/math-imports.json; the root source is the read-only mathematical repository. The finite-dimensional supplier theorem's exact local proof and its three direct imported interfaces were read: thm-differentiation-under-the-integral-sign requires a complex-valued family, measurable almost-everywhere parameter derivative, and a single L1 derivative majorant on an open interval; its proof uses dominated convergence, the mean value theorem, L1 linearity, and density of the rationals. def-derivative defines the real difference-quotient limit at a limit point. cor-zero-derivative-implies-constant requires a real-valued continuous function on an order-convex interval and zero derivative at every interior point; its proof applies the mean value theorem on each segment. The exact imported target files are pinned in math-imports.json, and batch 11's current readiness record confirms the supplier bytes and full 326-item mathematical closure; that closure contains no Axiom-of-Choice item.

The finite theorem's own proof was checked for the exact mapping used here: it applies differentiation under the integral on compact neighborhoods inside the open parameter interval, uses $(Q^2V)E_t=0$ and the graded Leibniz sign, invokes the zero-boundary integral identity, and handles a complex integral by applying the real zero-derivative corollary separately to its real and imaginary parts.

The physical prerequisite chain is also explicit. def-qftx-susy-background-data carries ZF + AC_omega through the supplied tangent-frame geometry. post-qftx-rigid-supersymmetric-background depends on the current def-torus-equivariant-cohomology-cartan-model (its declared axiom strength is ZF + AC) and on the current N=4 physical postulate (whose declared base is ZF + AC_omega). Their current Step 1 records are hash-current and ready. The new physical theorem uses those items only through the adopted, exact Q-square and field-background data; its finite integral proof fixes one sector and regulator, makes no choice from a family, and adds no choice axiom or stronger mathematical claim. These inherited supplier assumptions remain in its transitive dependency closure.

Next: run the scoped content, dependency, render, precheck, strict proof-contract, coverage, dependency-level, and final proof-layout checks; repair any defects within this assigned batch; then record current readiness per item.

## Final validation and Step 1 readiness — 2026-10-23

All four item carriers are on their assigned pages and all proof contracts and batch evidence match the final current statements. The A page contains the fluctuation-data definition followed by the conditional Ward theorem; the B page contains both verified finite-dimensional examples. Both page bodies are empty and all four complete Definition/Statement/Example sections contain no hyperlinks.

Final scoped checks:

- content-policy on the batch-48 manifest: 4 items, 0 errors, 0 warnings.
- depcheck on the explicit four-item selection: pass; dependency and cycle context covers 2,130 items and 346 pages, with no warning or error.
- rendercheck on the four items and both pages: 6 carriers, no YAML, math, link-in-math, or display-block defects.
- normative precheck: 4 files, 3 proof-bearing files checked, 0 failures; the definition is not applicable.
- strict proof-contract check: all 4 items, 0 errors and 0 warnings.
- coverage-checklist: 1 A-page coverage record, 10 harvested results, 0 errors and 0 warnings.
- source-fetch-check --stamp: 5/5 source URLs fetch-verified, 5/5 resolved, 0 newly stamped records, and 0 drops.
- proof-layout on the 4 explicitly changed items: 4 items, 9 steps, 0 defects.
- scoped statement-first/page check: all 4 complete item sections are link-free and both A/B Markdown bodies are empty.
- cross-batch dependency structure: the 8 rows match exactly the current cross-batch page/item edges; every row has an owned consumer, exact supplier ID, allowed status, and nonempty evidence.
- scoped item dependency-level recomputation over the 32-item in-run closure: no missing in-run item edge, cycle, or level mismatch. The four assigned levels are definition 2, theorem 9, torus example 2, and boundary example 0.

The existing full-run batch-level snapshot records batch 48 at level 6 with prerequisites 11 and 47. An earlier check observed its input hash stale after this manifest edit. The latest full-run recomputation stops before comparing that hash because the active batch-59 A manifest contains six bare-string item placeholders, causing the strict loader to report “Duplicate item undefined.” This is outside batch 48 authoring; no shared run-level scheduling file was edited. The native drained join must refresh that shared batch-level snapshot against the complete current manifests. The recomputed scoped batch-48 graph remains level 6 with prerequisites 11 and 47.

Step 1 records were written with the ordinary record command, without owner override:

- def-qftx-supersymmetry-fluctuation-complex: ready, owner=false, dependencies def-qftx-susy-background-data and def-finite-dimensional-q-exact-localization-data; hash e2fa930a6ea6ad4b04c040325c552790af1c44280b3f1da0dbeeb606de6c1587.
- pthm-qftx-qexact-localization-ward-identity: ready, owner=false, dependencies def-qftx-susy-background-data, def-qftx-supersymmetry-fluctuation-complex, post-qftx-rigid-supersymmetric-background, and thm-finite-dimensional-q-exact-deformation-invariance; hash c2a78d372191f9b825ffc4afd200c5c0c17527fa29fac55aba9f1c7cab4bc523.
- ex-qftx-finite-regulator-torus-ward-identity: ready, owner=false, dependency thm-finite-dimensional-q-exact-deformation-invariance; hash 9d9dffaf5a341bb485f269e405ec170e3a7c15f83d04a4ce0bab14d6268a94c1.
- ex-qftx-qexact-boundary-term: ready, owner=false, no item dependencies; hash 0cafe64b85ac4417751db5b139cca8a776b889e45cb69c174e190459e0fd42cc.

The current loadStep1Record/step1Decision check returned closed=true for all four records and all recorded hashes match. The direct input carriers and their in-run transitive suppliers were also current and ready. The S4 postulate and mathematical Q-exact theorem remain draft suppliers with their actual inspected assumptions and proof states; readiness records describe current Step 1 authorship and do not claim independent proof acceptance or publication. The finite-regulator premises remain explicit hypotheses, not an assertion that Pestun's formal S4 regulator is finite-dimensional or constructed.

## Owner canonical-normalization follow-up — 2026-10-24

The current source/interface and exact consumer disposition are in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/canonical-normalization-repair.md` and its evidence JSON. This dated addendum supersedes earlier live-readiness observations and the earlier raw/physical measure identification, without deleting that history. Current physical brackets are D=-I_D/4, F=I_F/2 with psi_raw=sqrt2psi and F_raw=2F; scalar fields, physical couplings and potentials are preserved.50/51 use the independent stable-ADHM core and genuine localized BM tangent-twist insertion, with source continuation m=i m_E and the unconstructed S4-regulator caveat retained.79 selected source items and26 actual pages passed focused preparation checks; this is not native acceptance. Root retains native holds until independent source/dependency binding and recertification.
