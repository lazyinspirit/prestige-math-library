# Step 5a group d

Run `frontier-35-ten-categories`; assigned batches 3, 4, 5. Scope artifacts: `research/frontier-35-ten-categories-step5-scope-{3,4,5}.json`; reader reports and refuter artifacts for those batches were read. Routed obligations: 16 touched items and 9 refuter findings; no reader findings or touched pages.

## Verified local repairs

- Batch 3: the cusp differential module has a two-dimensional fibre at the origin, so the assertion that it is free of rank one was removed. The inseparable-field example title now describes its finite separable case and one inseparable example without quantifying over all inseparable extensions. The inseparable base-change example now identifies `Spec(L⊗_k L)` as the self-base-change, not a fibre over an element α of L. The regular-field counterexample now refutes tensor-product regularity over k, the exact base ring of its nilpotent witness; its sole direct page consumer says only this and needs no edit. The local-presentation lemma's [F11] now requires finite generation for a uniform annihilator; its proof uses the finitely generated ideal J. The field-differentials theorem now uses k-derivations in steps 3.1 and 5.1 and corrects the finite-subset compatibility domain to K(B0). Source: Stacks Differentials §10.131, Definition 10.131.1 and Lemma 10.131.3 (tag 00RM), and Stacks Supports and annihilators Lemma 10.40.5 (tag 00L2).
- Batch 4: the Zariski-main A page now declares the local theorem's AC reliance through the nowhere-quasi-finiteness lemma. The normalization corollary's inverse field map now corresponds to θ:X⇢Y, making both compositions type-correct. The polynomial-integral-closure proof now uses the scalar d_j/a_j justified by a_j g_j=d_j h_j. The strongly-transcendental lemma now enlarges its coefficient ring by the displayed monic equation directly, without invoking transitivity of integrality on an element not shown integral over the intermediate ring. Source: Stacks Zariski Main §10.123 (tag 00PI) for the local proof route; `thm-rational-maps-to-affine-variety-function-field` Statement for contravariance.
- Batch 5: the finite-variable UFD proof's zero-variable branch now says a primitive nonzero constant is a unit, removing the false equality K×∩R=R×. The projective-intersection corollary supplies Noetherianity before its dimension argument. The two resultant examples now handle a zero form and place the root at infinity over the specified algebraic closure. Their chart and zero-dimensionality source boundaries were checked against Stacks tags 01M3 and 06LH.
- Eleven changed items were reflowed and individually prechecked; all passed. The batch-3 and batch-4 proof contracts were synchronized for changed derivation and citation claims. No published carrier was edited or found defective in these routed findings.

## Decisions

### Batch 3

| Obligation | Verdict | Defect row(s) |
| --- | --- | --- |
| `touched:3:lem-ag-finite-field-extension-separable-factorization` | `amended_repair` | `frontier-35-5a-d-t3-1` |
| `touched:3:lem-ag-geometric-regularity-field-tests` | `amended_repair` | `frontier-35-5a-d-t3-2` |
| `touched:3:lem-ag-geometrically-regular-fibres-local-presentation` | `amended_repair` | `frontier-35-5a-d-t3-3` |
| `touched:3:lem-ag-standard-smooth-flatness` | `amended_repair` | `frontier-35-5a-d-t3-4` |
| `touched:3:thm-ag-field-extension-of-schemes` | `amended_repair` | `frontier-35-5a-d-t3-5` |
| `touched:3:thm-ag-standard-smooth-geometric-regularity` | `amended_repair` | `frontier-35-5a-d-t3-6` |
| `refuter:3:1` | `confirmed_fatal` | `frontier-35-5a-d-r3-1` |
| `refuter:3:2` | `confirmed_fatal` | `frontier-35-5a-d-r3-2` |
| `refuter:3:3` | `confirmed_fatal` | `frontier-35-5a-d-r3-3` |
| `refuter:3:4` | `confirmed_fatal` | `frontier-35-5a-d-r3-4` |
| `refuter:3:5` | `confirmed_fatal` | `frontier-35-5a-d-r3-5` |
| `refuter:3:6` | `confirmed_nonfatal` | `frontier-35-5a-d-r3-6` |
| `refuter:3:7` | `confirmed_nonfatal` | `frontier-35-5a-d-r3-7` |

### Batch 4

| Obligation | Verdict | Defect row(s) |
| --- | --- | --- |
| `touched:4:ex-zariski-main-open-immersion-punctured-affine-line` | `amended_repair` | `frontier-35-5a-d-t4-1` |
| `touched:4:lem-polynomial-algebras-over-fields-are-integrally-closed` | `amended_repair` | `frontier-35-5a-d-t4-2` |
| `touched:4:lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite` | `amended_repair` | `frontier-35-5a-d-t4-3`, `frontier-35-5a-d-extra-1` |
| `touched:4:lem-zmt-conductor-radical-coefficients` | `amended_repair` | `frontier-35-5a-d-t4-4` |
| `touched:4:lem-zmt-one-variable-integral-correction` | `amended_repair` | `frontier-35-5a-d-t4-5` |
| `touched:4:lem-zmt-quasi-finite-transfer-through-intermediate-rings` | `amended_repair` | `frontier-35-5a-d-t4-6` |
| `refuter:4:1` | `confirmed_fatal` | `frontier-35-5a-d-r4-1` |
| `refuter:4:2` | `confirmed_nonfatal` | `frontier-35-5a-d-r4-2` |

### Batch 5

| Obligation | Verdict | Defect row(s) |
| --- | --- | --- |
| `touched:5:cor-no-common-component-projective-plane-intersection-is-zero-dimensional` | `amended_repair` | `frontier-35-5a-d-t5-1` |
| `touched:5:ex-binary-resultant-two-linear-forms` | `amended_repair` | `frontier-35-5a-d-t5-2` |
| `touched:5:ex-resultant-detects-root-at-infinity` | `amended_repair` | `frontier-35-5a-d-t5-3` |
| `touched:5:lem-finite-variable-polynomial-rings-over-fields-are-ufds` | `amended_repair` | `frontier-35-5a-d-t5-4`, `frontier-35-5a-d-extra-2` |

## Source and hypothesis checks

- [Stacks Algebra §10.131](https://stacks.math.columbia.edu/tag/00RM), Definition 10.131.1, defines an R-derivation as additive, Leibniz, and zero on R; Lemma 10.131.3 identifies derivations with homomorphisms from Ω. These exact clauses rule out K′- or K-linearity for the nonzero extensions in `thm-ag-field-differentials-separable-rank`. Lemma 10.131.7 gives the transitivity sequence used there.
- [Stacks Algebra Lemma 10.40.5](https://stacks.math.columbia.edu/tag/00L2), statement and proof, requires a **finite** module before passing from vanishing at a prime to one annihilator outside it. The repaired [F11] applies that finite-generator argument to the ideal J of the local-presentation proof.
- [Stacks Algebra §10.123](https://stacks.math.columbia.edu/tag/00PI), Lemmas 10.123.2–3 and 10.123.5–6, supply the monic correction, denominator clearing and coefficient/radical route used by the batch-4 Zariski-main lemmas. Lemma 10.123.9 treats the normal domain first and then the integral closure; Theorem 10.123.12 states the local finite-type/quasi-finite conclusion. The authored local theorem's declared AC scope is recorded in its page summary.
- [Stacks Schemes §27.8](https://stacks.math.columbia.edu/tag/01M3), Lemma 27.8.1 and the Proj construction, identify standard charts as spectra of degree-zero localizations and give the finite standard-open refinement. [Stacks Lemma 33.20.2](https://stacks.math.columbia.edu/tag/06LH) states that a zero-dimensional locally algebraic scheme over a field has finite-dimensional local Artinian components, with finiteness for algebraic schemes. These support the batch-5 chart and length boundary checks.

## Checks and scope effects

- Reader reports and findings, refuter reports, current routed carriers, the cited dependency statements used above, and pre/post reader hashes for batches 3–5 were compared. The 16 touched carriers were amended after reader post state by risk-review entries or local corrections; the nine refuter findings were confirmed and repaired. The decisions file binds each obligation to the current item/contract/manifest or page carrier hash and to closed 5a defect rows.
- Reflow and focused precheck passed for every item changed in this adjudication. Strict proof-contract checks pass for batches 3, 4, 5 (batch 3 and 5 have one nonblocking shotgun-bracket warning each). Risk reports without and then with `--require-reviewed` completed for all three contracts: 29, 29 and 22 items routed respectively, zero errors.
- The sole direct consumer of the changed `cex-ag-regular-factors-product-not-regular` Statement is the batch-3 examples page; its prose says only that the tensor product of regular fields can fail to be regular, so it remains sound. No additional hop is needed. No published item was changed or found defective by these assigned obligations. The owned cross-batch dependency inputs have no edge for the two removed unused published dependencies or this counterexample; no cross-group consumer requires a repair.
- The run-wide Step-5 scope check reports 79 errors in other groups and none on group d's 25 obligations. Group d's local strict contract and risk checks pass. No owner escalation arose from this group's mathematics.
