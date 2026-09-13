# Complex Lp convention repair — Phase 2 next 21

The published `def-complex-lp-and-euclidean-test-function-conventions`
defined `N_p(f)` for every finite-valued measurable complex function by
raising its nonnegative integral to `1/p`. For a nonintegrable function that
integral is `+∞`, while the library's extended-real convention does not define
that exponentiation. The raw `L^p` membership predicate was therefore partial.

The repaired definition branches on finiteness: it applies the real power to
a finite integral and assigns `+∞` directly when the integral is infinite.
This matches the already-published real `\mathcal L^p` convention and leaves
the finite-norm class, quotient, pairing, and test-function clauses unchanged.
No new supplier or choice principle is used. The target and its real `L^p`
supplier were read; this is an owner/operator defect-focused repair, without
an independent judge or whole-closure certification.

Before SHA-256: `249fe3b5639fae7d43d4dc3528d8939fa74479e9b4739f343ea8b91f1c415cd0`.
After SHA-256: `9cdd2c169208e1687b1c363df7d82b9f3a891fc0f9cbc5868b3d7d6f21372b5e`.
Focused `rendercheck` passed; `precheck` checked zero proof-bearing items and
exited cleanly, as expected for this definition.
