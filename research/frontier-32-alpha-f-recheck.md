# frontier-32 — Alpha group `f` — Step 3 scaffold recheck

Rechecked the current manifests, coverage records, live plan entries, group
assignment, and Step-3 fix-pass notes for batches 9, 11, and 12. Group `f`
owns exactly those batches.

## Finding disposition

| finding | disposition | current evidence |
|---|---|---|
| F12-1 — the classical/scheme comparison lacked a typed classical source category and a mapped exact comparison source. | **closed — repair sufficient** | Batch 12 now contains `def-classical-algebraic-prevariety-regular-maps-and-varieties`; its dependencies supply the algebraically closed field, affine algebraic-set, ringed-space, regular-map, and nonempty-irreducibility interfaces. `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` depends on it and is now titled **Irreducible classical varieties and integral separated finite-type schemes**. Its strategy explicitly restricts the classical side to irreducible varieties, so it matches the integral scheme side rather than claiming the false general-variety/integral-scheme equivalence. Milne AG Definition 5.2, the regular-map passage, and Definition 5.7 supply the classical category; AG10 10.158(a),(c) supplies the closed-point reconstruction and the algebraic-scheme/ultrascheme equivalence. The irreducible/integral restriction is correctly stated as a narrowing of that broader equivalence. |

## Verification of the remaining fix-pass records

- Batch 9: accepted. The manifest retains the associated-prime/power-quotient,
  associated-prime dimension-bound, and localization-inequality route. The
  recorded Stacks result states `depth(M_p) + dim(R/p) >= depth(M)`. The
  flat-local records retain exactly the flat-local Noetherian and closed-fibre
  hypotheses; Stacks Lemmas 10.163.2--10.163.3 state depth additivity and the
  Cohen--Macaulay iff without a finite-type hypothesis.
- Batch 11: accepted. `thm-affine-variety-product-coordinate-ring` uses the
  classical affine duality, tensor coproduct, and prime-coordinate-ring route,
  with no scheme or `Spec` dependency. `ex-grassmannian-boundary-r-zero-n`
  records `Gr(r,V)=emptyset` for `r<0` or `r>dim V`, alongside the endpoint
  point cases.
- Batch 12 AV-9: accepted. Its intentionally empty manifest inventory leaves
  the canonical existing 29-A/9-B inventory intact. The one low-yield coverage
  warning is therefore the reviewed existing-content collision, not a missing
  scaffold claim.
- Batch 12 AV-12: accepted. The scheme-theoretic-image definition is expressly
  conditional on existence, its theorem restricts the kernel construction to a
  quasi-compact morphism without adding quasi-separatedness, and the
  dense-open example uses the direct affine-domain argument rather than an
  unwarranted quasi-compactness assumption.

## Scope decisions

Ran `scope-decisions refresh --run frontier-32 --group f` and then `check`.
The current register has 42 decline rows (19 in Batch 9, 5 in Batch 11, and
18 in Batch 12), all resolved with nonempty evidence and no pending row. The
four Milne-related declines introduced by the F12-1 repair remain correctly
`stands`: AG Remark 5.5 and 5.10 are unused here, and AG10 10.158(b),(d) are
property-detection statements not used by the reconstruction/equivalence
route.

## Current verdicts and focused checks

| A page | batch | verdict |
|---|---:|---|
| `depth-and-cohen-macaulay-modules` | 9 | sufficient |
| `products-segre-and-veronese-embeddings-and-grassmannians` | 11 | sufficient |
| `presheaves-sheaves-stalks-and-sheafification` | 12 | sufficient |
| `schemes-subschemes-and-morphisms-locally-of-finite-type` | 12 | sufficient |

Focused current-byte checks passed: `manifest-deps` (145 items, 0 errors),
`content-policy --manifest-only` (145 scoped items, 0 errors or warnings),
the three `coverage-checklist --require-destination` checks (259 harvested
results, 0 errors; only the reviewed AV-9 low-yield advisory), three
`source-fetch-check` checks (6/6, 2/2, and 7/7), `scope-decisions check` (42
current declines, 0 errors), and `validate-plan.mjs research/plan-spec.json
--repo . --max-items 60` (OK: no cycles, forward references, B-page
dependencies, or unresolved ids among pages with item lists).

No Batch content was changed by this recheck.
