# A3 chamber-area escalation: bounded local repair

Run: `frontier-42-coxeter-32`. Subject: `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue`. Owner-delegated scope: preserve the approved area claim within the existing CG-14 example; no new pair, B-home supplier, unproved prerequisite, or implicit Choice assumption. This is an author repair and local mathematical self-review, not an independent audit or an engine acceptance receipt.

## Exact finding and evidence read

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the actual example, the native item review decision, the completed batch-17 dispatch result, the CG-14 design in `research/plan-coxeter-groups-track.md`, the batch-17 manifest and contract, and the native pair report. The native decision escalates precisely the omitted scaffold-promised numbers: area π/6 per chamber and total 4π. The authored example otherwise supplies its combinatorics, angles, congruence, residues and longest element. The suggested alternatives in the native report (new spherical-excess supplier or narrowed claim) are unnecessary: the tiling already gives 24 congruent chambers, so a local sphere-area and finite-additivity argument suffices.

The report and native receipt remain historical evidence; they were not rewritten. No gate, state, control, judgment or decision receipt was created or edited.

## Targeted supplier audit

The surface suppliers actually used are published and A-homed:

- `def-admissible-regular-parametrized-surface-patch`, `def-first-fundamental-form-and-surface-area-density`, `def-surface-area-and-scalar-surface-integral-of-a-patch`: `regular-surfaces-and-surface-integrals`.
- `thm-change-of-variables-for-compact-jordan-sets` and `thm-jordan-fubini-by-sections`: `fubini-and-change-of-variables`.
- `lem-integral-additivity-over-a-content-zero-almost-partition`: `the-divergence-theorem-and-classical-stokes`.
- `thm-jordan-boundary-criterion`: `the-riemann-integral-in-rn-and-jordan-content`.
- The four explicit sine/cosine suppliers: `sine-cosine-and-the-definition-of-pi`.
- `thm-ftc-second-part`: `properties-of-the-integral-and-the-working-ftc`.

Read the actual patch definitions, Gram density definition, reparametrization theorem, compact-Jordan change-of-variables theorem, almost-partition additivity lemma and its proof, content-zero modification lemma, boundary criterion, FTC statement, and the existing sphere computation for route comparison. The B-home sphere example is not consumed: its computation is rebuilt locally from A-home definitions and proved calculus results. No spherical-excess identity or Gauss–Bonnet theorem is used. No external PDF reading is claimed.

A recursive metadata walk of the twelve new direct suppliers found 698 dependency IDs and no B-only supplier. Choice-definition IDs do occur in that graph, but their occurrence does not establish an inherited assumption. The exact paths inspected include `def-metric-continuity` (its epsilon-delta definition is choice-free; its remarks only condition the sequential converse on countable Choice), `thm-sequential-criterion-for-continuity` (the intermediate value supplier explicitly uses only its ZF forward implication), and `lem-finite-choice` (its statement explicitly proves the finite principle in ZF and cites AC only to distinguish it). The new argument uses compact Jordan/Riemann integrals and finite constructions; it does not use the choice-dependent sequential converse or measure-theoretic integration setup. Neither `ex-spherical-geodesic-triangle-area-excess` nor `ex-gauss-bonnet-for-the-round-sphere` nor `ex-sphere-and-hemisphere-surface-integrals` appears in its deps.

## Repair and local adjudication

Restored the approved numerical area to Example clause (iii). Added Facts F8–F9 and three proof paragraphs, now numbered 2.3, 3.2, 4.1 after adopting precheck's canonical ordering.

1. The fundamental triangle has the explicit radial simplex chart ψ=p/||p|| on the compact affine triangle with coefficient-sum one. That plane avoids zero; radial projection has inverse x/L(x), and the derivative is injective because its possible kernel is radial whereas the plane's tangent has L=0. Thus no regularity or multiplicity premise is assumed. Applying each orthogonal ρ(w) preserves both parameter-tangent inner products, hence the Gram density pointwise. All 24 chamber integrals equal a.
2. On the trimmed latitude rectangle Rε, the sphere chart is injective and regular, with density sinφ. Chamber walls and latitude/longitude boundaries have chart preimages contained in finitely covered smooth arcs, hence content zero by the explicit square-cover bound. Compact-Jordan change of variables applies to every chamber overlap (including disconnected or empty Jordan pieces); the transition derivative obeys the explicit Gram transformation. Almost-partition additivity sums the restricted radial patch integrals to the latitude integral.
3. Removing the trim loses only parameters approaching the seam and poles. In radial charts these lie on a line and finitely many points, so have content zero. Compactness puts all sufficiently thin omitted strips in any supplied small finite rectangle cover; bounded Gram density makes their integrals arbitrarily small. This is an explicit finite error estimate, not a hidden surface-measure additivity theorem. The latitude integral tends to 4π; therefore 24a=4π and a=π/6.

The main adjudication concern is exactly the passage from congruence to equal/additive geometric areas. It is addressed by the pointwise Gram identity and the finite chart comparison, including seam/pole limits; citing congruence alone would not close it. The general definition of a finitely patched presentation deliberately does not assert arbitrary presentation independence, and the repair does not rely on such an assertion.

The Example statement changed only by restoring the approved area sentence. An explicit search through all active item `deps` and `justified_by` lists found no consumer of this example, consistent with its B-home leaf role. No downstream item repair is required.

## Files and coordination

Changed only the named example; its object in `research/frontier-42-coxeter-32-batch-17.pages.json`; its object in the batch-17 proof contract; B companion summary; and the B page's `requires` in the authoritative plan and manifest. One existing A-page prerequisite edge, `the-divergence-theorem-and-classical-stokes`, transitively supplies all newly needed surface/calculus pages. Initially adding each direct home produced redundant prerequisite warnings; replaced those additions with this one transitive edge. Existing pages and selected pair counts are unchanged.

Coordinated contract writes with `/root/hh11_word_repairs` and `/root/realforms_order_repair`, preserving their separate current objects. Regeneration created a duplicate F5 quotation because that Fact links the tiling supplier twice; removed the identical duplicate from this object's citation list. Endpoint and non-choice worksheets now cover the new area steps.

## Focused checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue.md`: PASS, 1 checked, 0 failing after canonical reorder.
- `node tools/rendercheck.mjs items/ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue.md library/coxeter-groups/finite-reflection-arrangements-and-spherical-coxeter-complexes-examples.md`: OK, both files and all real KaTeX expressions parse.
- `node tools/proof-layout.mjs items/ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue.md`: 1 item, 11 numbered steps, 0 defects after final item edit.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-17.proof-contracts.json --items ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue --strict`: 1/1 checked, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-17.pages.json`: 6 scoped, 0 errors, 0 warnings. An initial attempted `--help` was interpreted as a filename and failed; reran the actual command above successfully.
- Focused B-page plan check with `/tmp/a3-pages.json`: no new area-related prerequisite finding and no redundant prerequisite warning after transitive reduction; FAIL on three pre-existing native report findings: `hilbert-space-geometry-and-riesz-representation`, `further-trigonometric-identities-and-inverses`, `permutation-statistics-inversions-and-eulerian-numbers`. These remain for the owner’s run-level plan integration. This is not a passing plan gate.

Bounded-pass outcome: the original area-only mathematical gap is locally closed without weakening its claim or expanding pair scope. Await owner review/engine recertification on stable content; existing native escalation receipts are intentionally unchanged.

## Owner-directed prerequisite carrier completion

After the owner read the area proof and confirmed its numerical claim locally closed, the same reviewer received the exact follow-up to repair the three known B-page prerequisites. A fresh before-check reproduced precisely the three `undeclared-prereq` findings above. The three missing home pages have orders 280, 296 and 510, all before CG-14-B (1751), and none reaches another in the current prerequisite closure. Added the three direct edges to the B page's authoritative `requires` and its batch-17 mirror, retaining the earlier single surface/calculus edge. This is the transitive reduction using the required homes themselves; it introduces no new page or item. Updated the companion's first paragraph to name those prerequisite roles, replacing the obsolete assertion that every example supplier was inside only the companion A page's closure.

Files changed by this follow-up: `research/plan-spec.json`, `research/frontier-42-coxeter-32-batch-17.pages.json`, and the B companion prose. No item mathematics, proof contract, native report, state, gate, or receipt changed.

After-checks:

- `node tools/validate-plan.mjs research/plan-spec.json --pages-file /tmp/a3-pages.json`: PASS, no errors or redundant prerequisite warnings. Its canonical plan carrier still has an empty item inventory pending the normal splice.
- To avoid mistaking that carrier's page-only pass for an item dependency check, built a temporary full-plan context with the actual three B-page item objects from the current batch-17 manifest substituted into its B page. `node tools/validate-plan.mjs /tmp/a3-plan-with-b-items.json --pages-file /tmp/a3-pages.json`: PASS, 3/3 authored items, 981 prerequisite items loaded, 226 prerequisite pages, no cycles, forward references, B-page dependencies, unresolved IDs or missing prerequisite homes. The temporary file is verification input only; the authoritative plan's splice inventory was not rewritten.
- `node tools/rendercheck.mjs library/coxeter-groups/finite-reflection-arrangements-and-spherical-coxeter-complexes-examples.md`: OK.

The stable pair-17 `scopeHash(loadStep3(...), 'finite-reflection-arrangements-and-spherical-coxeter-complexes')` is `d80b498d120eacf312a3c20b6799c1f98c43ab7a3da158db998fe30351fe4bc8`. `scopeHash` binds the paired page titles/categories and item claim inventory, and deliberately excludes `requires` and page prose; this follow-up therefore leaves that hash unchanged. No certification against it is claimed.
