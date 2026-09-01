# frontier-28 · Alpha · Step 4 splice-refusal adjudication

Date: 2026-09-01

## Inputs

- `research/frontier-28-splice-refusals.json:1-4` contains `"refusals": []`.
- Live Step 4 work therefore came from `node tools/validate-plan.mjs research/plan-spec.json`, which reported one `undeclared-prereq` before repair:
  `page chebyshev-bounds-and-mertens-theorems has an item depending on the-gamma-function, which is NOT in the closure of its declared requires`.

## Edge 1

- Edge: `chebyshev-bounds-and-mertens-theorems -> the-gamma-function`
- Evidence:
  - `research/frontier-28-batch-6.pages.json:190-199` shows `thm-third-mertens-theorem-for-primes` depends on `thm-gamma-weierstrass-product`.
  - `research/plan-number-theory-track.md:1110-1130` requires the exact third Mertens constant to be identified through a stated zeta/Gamma limit, not from Shoup's weaker product bound.
  - `research/plan-spec.json:110761-110767` shows `the-gamma-function` is an existing A page at order `343`.
  - `research/plan-spec.json:111896-111903` now shows `chebyshev-bounds-and-mertens-theorems` at order `348.005`; before repair its `requires` closure omitted `the-gamma-function`.
- Disposition: genuine backward prerequisite.
  The cited dependency is load-bearing, the target is an earlier A page rather than an `-examples` page, and adding the edge does not require a new page or reading-order change.
- Edit:
  - Added `"the-gamma-function"` to the `requires` array of `chebyshev-bounds-and-mertens-theorems` in `research/plan-spec.json:111901-111903`.
  - No scaffold dependency was removed.
- Validation result:
  - Ran `node tools/validate-plan.mjs research/plan-spec.json` after the edit.
  - Result: `FAIL` with exit code `1`, but the `undeclared-prereq` on `chebyshev-bounds-and-mertens-theorems` no longer appears.
  - Remaining errors are unrelated standing issues outside this edge:
    - 2 `intra-order` errors on `bounded-linear-operators-and-quotient-spaces`
    - 4 `b-leaf` errors on `the-duality-of-lp-and-lq` / `the-duality-of-lp-and-lq-examples`
- Blocker:
  - None for this edge.
  - Overall `validate-plan` still fails because of the unrelated six errors above, so Step 4 does not produce a clean repository-wide validation result on current bytes.
