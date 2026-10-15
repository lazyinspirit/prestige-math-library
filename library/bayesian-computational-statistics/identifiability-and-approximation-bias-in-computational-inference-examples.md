---
page: identifiability-and-approximation-bias-in-computational-inference-examples
title: "Identifiability and approximation bias in computational inference — Examples"
status: draft
items: []
examples:
  - cex-local-hessian-does-not-capture-multiple-modes
  - cex-mean-field-variational-posterior-misses-correlation
  - cex-synthetic-likelihood-changes-inferential-target
  - cex-identifiable-nonconstant-summary-loses-parameter
  - cex-positive-abc-tolerance-changes-posterior-target
---

## Examples

The examples use the exact target and metric conventions from the companion A page. They isolate five distinct mechanisms: local curvature overlooks a second posterior mode; optimizing within a mean-field family can lose dependence; matching only Gaussian summary moments can change a synthetic-likelihood posterior; a nonconstant summary can have a parameter-independent law; and positive tolerance changes even an identity-summary target.

All finite probability calculations give explicit sample spaces, probability weights, priors, observed data, acceptance events, and posterior normalizers. ABC rejection output is identified with its tolerance-conditioned target only under the supplier theorem's IID premise and positive-acceptance condition. The Laplace example assumes Countable Choice through its Gaussian and Lebesgue change-of-variables suppliers; its total-variation comparison concerns the full posterior and a single-mode Gaussian on the common real parameter space.


The Gaussian mean-field example uses its supplied reference area measure and its induced length measure; its compact Darboux and Gaussian moment calculations add no choice axiom.
