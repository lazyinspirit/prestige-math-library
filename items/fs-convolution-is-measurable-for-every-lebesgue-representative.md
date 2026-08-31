---
id: fs-convolution-is-measurable-for-every-lebesgue-representative
kind: false-statement
title: "FALSE: the Borel-representative discipline in convolution is unnecessary because continuous precomposition always preserves Lebesgue measurability"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-borel-representatives-make-the-convolution-integrand-borel-measurable, lem-convolution-is-independent-of-the-chosen-borel-representatives, fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability]
landmark: false
proof_strategy: "Refute by combining the A-page Borel-representative seam with the published false statement that precomposition with a continuous map can destroy Lebesgue measurability. The point is not that convolution fails, but that arbitrary representatives are the wrong definition."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---
## Statement

**False claim.** The Borel-representative discipline in the convolution
construction is unnecessary because Lebesgue measurability is preserved under
every continuous precomposition.

## Facts & Assumptions

**Given:** The convolution measurability seam and the published continuous- precomposition counterexample.

[L1] The convolution page deliberately fixes Borel representatives before forming the product-space integrand ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]], [[lem-convolution-is-independent-of-the-chosen-borel-representatives]]).

[L2] Continuous precomposition need not preserve Lebesgue measurability ([[fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L2] gives a continuous map $T$ and a Lebesgue measurable function [L2] $u$ such that $u \circ T$ is not Lebesgue measurable. So the slogan "Lebesgue measurability survives every continuous change of variables" is false. [L2]

2.1 The displayed claim relies on exactly that false slogan. Even if some [L1, step 1.1] particular maps used in convolution behave better, the blanket justification for dropping the Borel-representative discipline recorded in [L1] fails. [L1, step 1.1]

3.1 Therefore the displayed claim is false. [step 2.1] ∎
