# Phase 2 next 21 — Step 1 owner reconciliation

After the twelve scaffold dispatches closed, the owner-held Step 1 readiness
gate identified two missing backward page edges. These were not found by the
initial drift reviewer, so this record does not attribute them to that review.

- `riemann-curvature-and-riemannian-submanifolds` uses
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` to define real
  principal curvatures of the self-adjoint shape operator. Its published home
  `the-spectral-theorem-and-singular-value-decomposition` (order 141) is now
  declared as a page prerequisite of order 483.
- `lie-groups-invariant-fields-and-the-exponential-map` uses published
  `def-holomorphic-map-and-complex-jacobian` and
  `thm-chain-rule-for-holomorphic-maps-in-several-variables` to define the
  complex Lie-group branch. Their published home
  `holomorphic-functions-of-several-variables` (order 349) is now declared as
  a page prerequisite of order 491.

Both changes preserve the 21 selected pairs and add no unpublished or
Foundations catalogue dependency. The canonical plan and differential-geometry
prose were updated together. The engine-owned manifest sync and validation
results are recorded in the run state; affected Step 1 item records require
owner recertification after the sync.
