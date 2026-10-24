---
id: rem-proof-cost-of-the-carleson-hunt-theorem
kind: remark
title: What the Carleson–Hunt proof requires
deps: [thm-carleson-hunt-maximal-inequality-on-the-torus, lem-carleson-density-selection, lem-carleson-size-selection, lem-carleson-single-tree-estimate, lem-hunt-exceptional-set-and-distribution-estimates, lem-carleson-restricted-weak-interpolation, lem-wave-packet-model-dominates-the-linearised-carleson-operator, lem-carleson-real-line-to-torus-transfer, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references: [{title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations', url: 'https://arxiv.org/pdf/math/0307008', locator: '§3 before §3.1, pp. 11–14; §7 opening and §7.2 opening through (7.9), pp. 24–26'}]
status: published
origin: pipeline
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-proof-cost-of-the-carleson-hunt-theorem.json
---

## One local proof route

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the Fourier and measure interfaces of the following proved suppliers. The local conclusion is [[thm-carleson-hunt-maximal-inequality-on-the-torus]], a strong maximal estimate for symmetric partial sums on the normalized period-one torus, at each $1<p<\infty$.

The real-line tile argument uses [[lem-carleson-density-selection]] and [[lem-carleson-size-selection]] to select forests and [[lem-carleson-single-tree-estimate]] to bound a tree contribution. The exceptional-set argument and distribution bootstrap of [[lem-hunt-exceptional-set-and-distribution-estimates]] give finite tile models uniform restricted weak type at every exponent strictly between one and infinity. Then [[lem-carleson-restricted-weak-interpolation]] gives uniform strong bounds at the desired exponent.

The packet averaging and reconstruction argument in [[lem-wave-packet-model-dominates-the-linearised-carleson-operator]] passes those model bounds to the real-line Carleson maximal operator on Schwartz inputs. Finally [[lem-carleson-real-line-to-torus-transfer]] uses a slowly varying Schwartz window on trigonometric polynomials, periodic averaging, Fejer approximation and monotone convergence to obtain the torus estimate. This supplies the transference argument as well as the time-frequency model estimates. The local theorem assembles these interfaces; the assumption AC is inherited from them.
