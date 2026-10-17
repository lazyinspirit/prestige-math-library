---
page: global-optimization-and-certified-branch-and-bound
title: "Global optimization and certified branch and bound"
status: draft
requires:
  - matrix-norms-condition-numbers-and-numerical-stability
  - nonlinear-equations-and-newton-methods
  - inequality-kkt-duality-and-optimality-certificates
  - outward-rounded-interval-and-ball-arithmetic
  - barrier-and-primal-dual-interior-point-methods
  - gaussian-process-priors-and-posterior-laws
items:
  - def-mccormick-bilinear-box-envelope
  - def-spatial-global-optimization-problem
  - lem-positive-noise-regularizes-observed-covariance
  - alg-finite-candidate-gp-acquisition-search
  - def-spatial-box-bound-certificate
  - lem-mccormick-envelope-equals-graph-convex-hull
  - alg-certified-spatial-branch-and-bound
  - thm-adaptive-finite-candidate-gp-search-posterior-correct
  - thm-finite-candidate-gp-search-terminates
  - thm-finite-budget-spatial-bnb-terminates
  - thm-spatial-bnb-eventual-epsilon-termination
  - thm-spatial-bnb-gap-certificate-sound
  - alg-interval-dag-box-enclosure-and-bound
  - def-factorable-box-convex-relaxation-interface
  - alg-factorable-mccormick-box-relaxation
  - alg-lipschitz-midpoint-box-lower-bound
  - thm-factorable-dual-certificate-is-valid-box-lower-bound
  - thm-interval-lipschitz-bound-sound-consistent
  - alg-certified-constraint-emptiness-search
  - alg-bounded-mixed-integer-branch-and-bound
  - thm-uniform-constraint-margin-enables-empty-box-detection
  - thm-bounded-mixed-integer-finite-budget-terminates
  - thm-bounded-mixed-integer-gap-certificate-sound
examples: []
---

This page develops certified global search on compact boxes. Its spatial branch-and-bound procedure records valid lower bounds, verified feasible upper bounds, empty-box proofs, and explicit unavailable or budget-exhausted statuses. A gap certificate proves global epsilon-optimality. With exact midpoint upper bounds and lower bounds consistent on shrinking branches, the unlimited unconstrained procedure eventually reaches every positive epsilon; singleton boxes require an exact report.

Outward-rounded interval evaluation and validated Lipschitz midpoint bounds supply rigorous box enclosures. The bilinear McCormick envelope is proved to be the convex hull of the product graph, and a factorable relaxation interface admits nonlinear graph enclosures only when their domain hypotheses and coefficients are certified. A dual-feasible pair with a verified lower bound for its dual value yields a lower bound for the original problem. Bounded integer variables use deterministic median splits with finite enumeration as a fallback, and no polynomial running-time claim is made.

Constraint pruning requires a sound infeasibility bound. For finitely many continuous constraints on a nonempty compact box, a positive uniform separation margin and finite-time sound bounds consistent on shrinking boxes permit finite certified emptiness detection. The Gaussian-process section consumes the published finite posterior theorem, handles positive noise and every observed-covariance-positive-definite case, and retains acquisition maximization error. It proves only a sequential posterior update and finite-search termination, not generic regret or global optimality. The page supplies no duplicate Newton or validated root-solving algorithm.
