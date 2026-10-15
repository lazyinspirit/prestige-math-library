---
page: full-factorial-contrasts-and-interactions
title: "Full factorials"
status: draft
items:
  - def-two-level-full-factorial-design
  - thm-full-two-level-factorial-contrast-orthogonality
  - thm-full-factorial-estimator-and-effect-variances
examples: []
---

For $k$ two-level factors, a full factorial contains every one of the $2^k$ coded runs. Its subset-indexed sign columns give the exact identity $2^{-k}X^{\mathsf T}X=I$, proved by pairing runs whose signs differ on a coordinate in a symmetric difference. Under an explicitly stated independent, common-variance response-error model, the same contrasts estimate the model coefficients and the nonempty factorial effects, with variances adjusted by the equal replication count.

The assignment page [[randomized-treatment-assignment-and-sharp-null-tests]] concerns the probability law for treatment allocation and sharp-null inference. The sign-matrix identity here is deterministic, and the response-error model used for the variance formula is a separate assumption; neither result turns random assignment into a Gaussian response law. The inner-product and probability pages supply the exact conventions for column orthogonality, random variables, and variance.

Orthogonality is a property of this balanced design matrix. It does not assert additivity, zero interactions, or a physical mechanism. Unequal replication changes the design weights and can remove the orthogonality used by the variance formula.
