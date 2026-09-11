# Step 7 adjudication — group f

Run: `phase-2-next-20`  
Batches: 10, 11  
Owned pages: six A/B pages in finite Weyl/Kostant theory, integrable highest-weight Kac–Moody theory, and Green correspondence.

## Rejections

### `cor-green-correspondence-for-modules-of-vertex-exactly-p`

- Outcome: `false_positive`.
- Exact evidence: `lem-green-exceptional-family-containment-and-fusion` states that every member of `X` is proper in `P` and that `P` belongs to `Z`; `def-green-exceptional-intersection-families` defines those members as precisely the intersections used in proof step 1.1. The cited lemma's step 1.2 also supplies the normalizer argument explicitly.
- Pre-edit guard: `3990c2405b1eabe1b613960585c812f5d12033add4a29ffe6136d22523b1d774`.
- Repair/check: no edit licensed or made; current bytes retain that guard.

### `def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action`

- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact evidence: `def-polynomial-ring-over-a-commutative-ring` constructs only the univariate ring `R[x]`; the rejected definition used it as though it directly supplied the multivariate algebra and the concrete construction of the symmetric algebra.
- Repair: retained the dependency and defined `R_0 = C`, `R_j = R_{j-1}[e_j]`, finite exponent-tuple monomials, substitution, the free commutative-algebra property, basis independence, and the zero-dimensional empty iteration. The only stale exact quotation in the batch-10 proof contract was synchronized.
- Guards: pre-edit `389859d9837b46e649e3e7cb78fcfa35adec0e26153244415233d4915b95acd9`; post-edit `1d686aeb6e64d07ae845b968f7cb1513e4472bcee57379c521b9768c9a12b6d7`.
- Checks: targeted rendercheck passed; definition precheck found zero proof-bearing targets and zero failures; strict batch-10 proof-contract check passed 50/50. Defect row: `p2-next20-step7-f-multivariate-symmetric-algebra-interface`.
- Preflight boundary refresh: reread the repaired definition and the unchanged Engel/trace/Killing lemma. The definition still states only definitions and direct identities, while the lemma states two one-way criteria and direct Killing-form conclusions; neither asserts a biconditional. Refreshed only the definition's two `template_review` records to its current post-repair guard. The lemma's existing two reviews already bind its current guard `a88c92f27ccf41384bbaaf0bec668b832af7bcd337c9180129c7416fd566ee60`. Batch-10 and unified boundary audits now report zero unresolved template clusters and zero contradicted candidates.

### `ex-green-restriction-summand-with-the-same-vertex`

- Outcome: `confirmed_nonfatal`.
- Exact evidence: the rejection correctly observes that the exact-`P` corollary does not repeat the full theorem's unique distinguished restriction-summand clause verbatim. The example independently proves that its restriction has exactly one nonzero indecomposable summand and that this summand has vertex `P`; the cited corollary's proof defines its restricted correspondence from the full theorem's distinguished summand. The only issue is a compressed locator in F1, which a reader closes immediately.
- Pre-edit guard: `c4c62762e6c5a4d0e3411b5a2df2b2d73c99300673b5d3ccd9d836505cdaf520`.
- Repair/check: no edit licensed or made; current bytes retain that guard.

### `ex-integrable-highest-weight-modules-for-rank-one-gcm`

- Outcome: `confirmed_nonfatal`.
- Exact evidence: F5 compresses two immediate consequences rather than quoting the supplier statement verbatim. `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules` gives a map with image `U(g)v_0`; simplicity and `v_0 != 0` make that image all of `L_A(m)`, and the same supplied theorem's PBW proof gives negative-monomial spanning. The target then proves that every rank-one negative word is a power of `f`. The claimed basis is therefore proved; only the fact locator is imprecise.
- Pre-edit guard: `a502e6d8b863fe0936c86ce99c18640010151b6a2a35d307ab95f7280b8e801e`.
- Repair/check: no edit licensed or made; current bytes retain that guard.

### `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights`

- Outcome: `confirmed_fatal` (`other`).
- Exact evidence: the former display title asserted generation by dominant maximal support weights. The Statement and proof instead establish generation by primitive vectors arising in relevant subquotients, and they expressly disclaim generation by only globally maximal support spaces.
- Repair: changed the display title to “Maximal and primitive weights in integrable category O modules”, preserving the stable item id and all mathematical content. Synchronized the title mirror in the batch-10 page manifest.
- Guards: pre-edit `737b886a843f2745f113c49af92e424405be5d891020d2f9f1f58f2764722c72`; post-edit `91a5468b2433afb2df66818ac564b76ef929168aeb30b7074723702a710d4bc8`.
- Checks: targeted precheck, rendercheck, and strict proof-contract check passed. Defect row: `p2-next20-step7-f-integrable-o-title`.

### `lem-kac-moody-chamber-boundary-stabilizers`

- Outcome: `false_positive`.
- Exact evidence: `def-kac-moody-integral-and-dominant-integral-weights` defines `P^+` by equality as the integral weights whose every simple-coroot label is nonnegative. Step 1.1 preserves integrality under every reflection. Thus “no simple label is negative” is exactly membership in `P^+`; the rejection incorrectly reads the cited definition as only a one-way implication.
- Pre-edit guard: `0ac616866d5a852efe095a17e3849280c0760ab7f7161dae2b59ed6e2f0b764e`.
- Repair/check: no edit licensed or made; current bytes retain that guard.

## Reader warnings

### `s8a-6d07714e355f8bd14c90cdd8` — page prerequisites

- Outcome: `not_defect`.
- Evidence: all five `requires` ids occur in the authoritative plan; the frontier policy permits unbuilt cross-category prerequisites. The one published prerequisite resolves on disk, every actual dependency of all 26 page items resolves to an item file, and the page locally proves the finite-Weyl and semisimple chains it uses. No proof depends on a missing page.
- Repair: none.

### `s8a-9ecac2abfcd1f8238bc8e2b0` — stale closing prose

- Outcome: `nonfatal`.
- Evidence: “unresolved general results” is stale authoring-state prose because the page now proves the named general results. The sentence changes no mathematical claim, dependency, proof, or contract and is presentation-only under fatal-only Step 7.
- Repair: none licensed or made.

### `s8a-1a41e5c626882aaeb6cb3989` — Green counit-splitting locator

- Outcome: `nonfatal`.
- Evidence: the displayed Statement of `lem-relative-projectivity-mackey-intersections-for-finite-modules` does not enumerate the counit splitting, but its proof step 1.2 explicitly constructs that splitting from Higman's criterion; the target's F1 also records the direct-summand meaning of relative projectivity. Step 3.1 therefore has a compressed proof-step locator that a reader closes immediately, not an invalid inference.
- Repair: none licensed or made. Current guard for the warned item is `1cb014ff2be77f1e8ee128253b722cf26582bdb3ee2af170f8f2aab4e07cd644`.

## Sources consulted

No external source was needed; the exact local definitions, statements, proofs, plan entries, and elementary finite polynomial construction resolve every decision.

## Cross-group alerts

None. Every examined dependency is either published or in group f, consistent with the rendered seam map.

## Rejudge targets

- `def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action`
- `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights`

The engine owns the single repair rejudge cycle; none was initiated here.

## Validation

- Exact group rows: six adjudication tuples, three reader-warning dispositions, and two matching defect-ledger rows are each present exactly once.
- Current guard hashes match the recorded pre-edit guards for all four unchanged items and the recorded post-edit guards for both repaired items.
- Focused precheck and rendercheck passed for both repaired items; batch-10 strict proof-contract validation passed 50/50, and unchanged batch 11 passed 11/11.
- `git diff --check` passed for all touched group and shared-ledger paths.
- The Step-7 guard passed against `pre-step7`: 32 concurrent changed items, all 32 licensed, with zero errors and zero warnings.
- The scope check with pending alerts allowed passed: eight groups, 625 partitioned items, 73 routed rejections, and all three group-f warning dispositions recognized. The required strict scope check was also run and reported only 28 still-pending reader-warning dispositions owned by other groups; no group-f problem was reported.

## Remaining work

Group-f adjudication is complete. Global strict scope closure awaits the other owning groups' 28 warning dispositions, and the engine must rejudge the two repaired items.
