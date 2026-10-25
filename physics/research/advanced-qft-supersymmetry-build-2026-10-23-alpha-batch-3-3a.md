# Batch 3 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-3. Scope assignment group m remains unchanged.

Read the generated order and scope, reader report/findings and refute-3.json. Exactly four touched obligations; no page, reader or refuter finding obligations. Review proceeds in generated dependency order. All six current raw item hashes match the post-reader snapshot. Every HEAD:physics/items/<id>.md raw hash matches its pre-reader snapshot, so actual historical deltas are available; no unknown-history disposition is used. Neither reader nor refuter coverage is treated as proof acceptance.

## Level 1 — lem-qftx-smooth-principal-connection-exists

Verdict: reviewed_no_defect; change_kind: audit_enrichment; defect_ids: []. Reader made the already supplied exponential convention explicit. The original computation gX and the amended explanation both follow from the one-parameter-subgroup definition and initial tangent in def-qftx-principal-connection-form. This is clarification, not a new missing-prerequisite claim.

Checked the full current proof and all six direct suppliers. For each finite equivariant chart, omega_i(v,W)=g^{-1}W is smooth, reproduces X and is right Ad-equivariant. The finite subordinate partition has closed support inside its chart domain, which justifies smooth zero extension. Its pullback coefficients are right-invariant and sum to one, yielding a principal connection in every bundle sector. Full AC supplies the exact AC_omega used by the partition theorem; no arbitrary additional choices occur. Nonempty zero-dimensional bases, N=2 and nontrivial bundles are covered. Statement and dependency interface are unchanged, so no consumer propagation is triggered. Complete risk_review recorded before advancing.

Source checked: [Neeb, Differential Topology of Fiber Bundles](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf), Remark 5.4.5(a) and Proposition 5.4.6 with proof, printed pp. 93–94, PDF indices 96–97. The local partition argument is complete; this is not an external unproved import.

Next: level-2 regulated slice definition and its exact suppliers.

## Level 2 — def-qftx-gauge-slice-and-faddeev-popov-operator

Risk review complete; no routed decision on this untouched carrier. Read the complete Definition and all seven direct suppliers. The principal-connection section-change law matches lem-qftx-principal-curvature-cartan-bianchi step 1.3, including the inverse adjoint and left Maurer–Cartan convention. K is independent regulator data; neither its compactness nor an identification with the full gauge group is assumed. The density-ratio equation defines Delta uniquely, including zero at singular M. The determinant shorthand is read in bases normalized for the two supplied densities; in a general group chart the consuming theorem explicitly divides by rho_K(xi(e)). The zero-dimensional slice k=n is permitted. The supplier curvature square commutes by the explicit affine section-change law and its curvature transformation. No continuum determinant or physical inference is obtained.

Source checks: [Skinner Chapter 8](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf), section 8.1, printed pp. 154–156, and [Mitter–Viallet](https://scispace.com/pdf/on-the-bundle-of-connections-and-the-gauge-orbit-manifold-in-1nks9qpdkj.pdf), sections III.C–IV, printed pp. 466–467. The latter is Sobolev/free-action context, not a substitute for the finite-dimensional proof. The source metadata phrase “PDF pp. 154–161” refers to printed pagination; the actual Skinner PDF has 31 pages.

Next: level-3 local Jacobian theorem.

## Level 3 — thm-qftx-local-faddeev-popov-slice-jacobian

Verdict: amended_repair, confidence 1. The actual pre-reader proof used rho_K(0) in an arbitrary group chart. The reader correctly evaluates it at xi(e) in steps 3.1 and 4.1. Its step-4.1 contract derivation still contained rho_K(0); corrected that mirror. No item text or public statement was changed during adjudication. Closed defect: batch-3-density-coordinate (full ID in decisions).

Checked every step and the exact inverse-function and compact-support Riemann change-of-variables suppliers. The defining submersion yields adapted (chi,z) coordinates. The derivative block is invertible in dimension n, also when k=n and the slice coordinate block is empty. A product restriction gives a diffeomorphism onto an open image. The uniqueness clause concerns the representative of each point using V; it does not assert global uniqueness on an orbit. The positive density coefficient divides the coordinate determinant. Left translation carries the identity tangent frame to g and preserves its density; the right-action law gives DF_x(dL_g Z)=M_(x.g)Z. Thus the weighted density becomes Lebesgue density on each inverse branch. The compact remainder avoids all zeros and vanishes for small epsilon; if it is empty its integral is already zero. Each branch tends to phi(g_i) by continuity and unit mollifier mass. This covers r=0, roots on the support boundary, n=k and arbitrary noncentered coordinates; singular roots remain excluded. The tangent square commutes because dchi vanishes on TS. Complete risk_review recorded.

Next: the two level-4 examples, in generated order.

## Level 4 — ex-qftx-so2-gauge-slice-multiplicity

Verdict: amended_repair, confidence 1. Accept the explicit matrix definition of SU(2), its sphere parametrization and noncommuting witnesses, the product connection verification, U=X and s0=(1,0), and the precise inverse-arc argument. Reconciled the Example statement mirror in the owning manifest, which still had the original prose. Closed defect: batch-3-so2-explicit-data (full ID in decisions).

The matrix witnesses anticommute. The connection q^{-1}V reproduces Z on qZ, has zero kernel and transforms by h^{-1}(-)h. Inverse rotations compose as the stated right action. The orbit derivative is (y,-x), giving M_(r,0)=-r. For r>0, the two roots 0 and pi have derivatives -r and r and distinct slice points. The circle is compact, so Gamma=K and phi=1 are admissible; each inverse branch contributes exactly one for C epsilon<r. At r=0 the whole circle stabilizes the origin, so the transverse finite-zero assumptions fail. Complete risk_review recorded before advancing.

Consumer search over items/ and library/ found only the two example carriers themselves and their owning B-page. Neither example references the other; the page is frontmatter-only and merely places their IDs. There is no direct logical/reference consumer needing repair and no next-hop interface event. No examples were removed or weakened.

Source limitation: Skinner printed p.157 attributes the factor two to a purported two-element center of SO(2). SO(2) is abelian, hence its center is the whole circle. The authored example correctly counts distinct slice intersections directly and does not adopt that source error. This is an external-text error, not a defective published library supplier.

Next: translation example.

## Level 4 — ex-qftx-translation-gauge-slice-jacobian

Verdict: amended_repair, confidence 1. Accept the explicit SU(2) background, reproduction/equivariance verification, U=X and s0=(0,0), and zero extension in the mollifier argument. Reconciled the Example statement mirror in the owning manifest. Closed defect: batch-3-translation-explicit-data (full ID in decisions).

Checked all four steps against the already reviewed definition and theorem. Translation is a right action; dchi projects onto the first coordinate, M=identity, and all three coordinate densities have unit coefficients. The orbit-to-slice map is (t,v)->(t,v). The sole root is -a and gives (0,b). Compact support inside Gamma permits smooth zero extension, while -a being interior makes the translated mollifier support admissible for small epsilon. The continuity estimate proves the limit, including a root where phi has value zero. The regulator R need not be compact. Consumer dispositions are the same exact-ID search result reported above; no consumer repair or outside escalation is needed. Complete risk_review recorded.

Next: level-7 Singer obstruction, with current direct supplier proofs and their exact topology/hypothesis interfaces.

## Level 7 — thm-qftx-singer-global-gauge-section-obstruction

Risk review complete; this untouched item owes no separate decision. Read its whole current carrier and all seven direct prerequisite carriers, including the full proofs of the smooth principal-bundle theorem, weak-contractibility theorem, reduced-gauge-group nontriviality theorem and section-retract lemma. Their exact hypotheses agree: full AC, N>=2, every smooth right SU(N) bundle on S3/S4, the same central subgroup and finite-atlas smooth section topology. The reference-connection lemma applies without trivializing P.

The smooth principal-bundle supplier proves its actual smooth-topology clause by regularity and convergence bootstrap of the Banach gauge representative; it does not infer it merely from an inverse limit. The weak-contractibility supplier fills continuous sphere maps in the affine space and applies its relative avoidance supplier with fixed boundary. The reduced-group supplier uses the evaluation fibration and finite covering: in dimension 3, pi3(SU(N))=Z supplies infinitely many components that remain infinite under a finite deck quotient; in dimension 4, nonzero pi5 injects through the evaluation sequence and then the covering into the reduced group's pi1. These are exact supplier uses, not a fresh audit of every transitive published proof.

A section trivializes a principal bundle and retracts its structure group from its total space. Nonempty weak contractibility of that total space therefore contradicts the supplied nontrivial components or pi1. For the full quotient, gauge invariance and openness of the irreducible locus, continuity of the smooth-to-Hk inclusion, and openness of the quotient identify the irreducible quotient with an open subspace. A full section restricts to the forbidden irreducible section. The inclusion square has correct arrows and commutes; the section-retract supplier's triangular diagram also records r i=id correctly. No diagram is a proof premise. No irreducible/full-holonomy conflation or empirical conclusion occurs.

Singer's DOI remains historical attribution only. I do not claim primary full-text reading of Singer or independent proof audit of the full transitive published mathematical closure. The direct current proofs and exact supplier statements are sufficient for this scoped review. No current scientific blocker or published library defect was identified.

## Decisions, maintenance and limits

Exactly four decisions are written in the named decisions JSON: one reviewed_no_defect/audit_enrichment for the connection lemma and three amended_repair decisions for the Jacobian theorem and examples. Each completed repair has confidence 1 and one closed nonfatal ledger row at 3a-adjudicate. The ledger rows identify the genuine historical item omissions, not the mechanical act of reconciling metadata. No reader/refuter findings were invented. The six complete risk reviews are stored in the owning contract.

Adjudication changed only the owning contract (six risk reviews and the stale coordinate derivation), the two Example statement mirrors in the batch manifest, the per-batch dependency-use evidence, and the required report, decisions and defect ledger. The item bodies retain the reviewed reader-result bytes. Their provenance remains accurate and no judge stamp existed or was created. The example interface enrichments have no affected item consumers; no consumer outside this batch needs repair. The frontier dependency records retain their exact edges and suppliers; owned per-batch use evidence points to this review. The unified frontier ledger is engine-maintained as specified by briefs/tasks/frontier-dependency-ledger.md. No published item or import was edited, and no published library defect required a ledger entry. No new pair/page, summary, acceptance stamp or scheduling action was introduced.

All six carriers are mathematics-domain items with only mathematical premises. Their finite regulator claims and conditional topological conclusions make no empirical observation, statistical inference or assertion of physical truth. There are no open scientific escalations or proposed withdrawals in this dispatch.

## Focused checks

All commands below ran from the physics workspace and exited 0:

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-3.proof-contracts.json` — six routed HIGH/CRITICAL items; initial routing read before review.
- The same risk-report command with `--require-reviewed` — six complete reviews, zero errors.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-3.proof-contracts.json --strict` — 6/6 items, zero errors and warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the four touched item paths — four checked, zero failing; no proposed auto-repair.
- `node tools/physics-support/rendercheck.mjs` with all six item paths and both page paths — eight files parse successfully under renderer YAML and KaTeX checks. This is not a production TikZ compilation claim.
- Final single `node tools/physics-support/proof-layout.mjs` invocation batching the four touched item paths — four items, 17 steps, zero defects.
- Focused exact-byte/JSON inspection — all six item hashes still match the frozen post-reader item hashes; all six manifest primary sections match current carriers and contain no hyperlinks; exactly four owed obligations appear once; each of the three repair decisions references its unique fixed 3a-adjudicate ledger row. All contract citation excerpts were also checked as exact substrings of the current source sections.

Engine handoff: report and decisions complete. No judge, stamping, collection, scheduling, stage transition or gate battery was invoked. The engine owns current decision hashes and its ordinary battery. No blocker remains in the dispatched review.
