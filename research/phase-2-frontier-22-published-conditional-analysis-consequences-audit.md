# Frontier-22 published conditional-analysis consequences audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads five published consequences nearest the active
conditional-expectation path: conditional Fatou/DCT, uniform integrability of
conditional means of one variable, conditional `L^p` contraction, the `L^2`
projection theorem and conditional Cauchy--Schwarz. It also reads their
load-bearing absolute-continuity, uniform-integrability, finite-measure
embedding, Holder/equality and `L^2` Cauchy--Schwarz suppliers. It does not audit
every downstream conditional-expectation result.

Before classification, the whole canonical ledger and bounded index were
searched by every exact ID, title, aliases, the conditional-Fatou/DCT/UI/Holder
mechanisms, and the integral/conditional-expectation supplier IDs. Holder had
exactly one bounded-clear row and the finite-measure embedding exactly one U-P
row; those rows move rather than duplicate and preserve their prior evidence.
The other nine affected items were unclassified. No published item or workflow
state was edited.

## Pending repair and exact propagation

The visible mathematical arguments below are sound after the existing finite
zero-complement repair to the arbitrary simple/nonnegative integral and its
`L1`, `L^p`, DCT and conditional-expectation consequences. No new theorem pair
is required.

| Item | SHA-256 | Exact affected clause and repair |
|---|---|---|
| `thm-conditional-fatou-and-dominated-convergence` | `caec75e9b10c23e7c97ce6cb75a0e76fbd66ebe7b487a76673d8ca52280848e3` | Conditional Fatou uses the A-P conditional MCT/order chain; the two-sided dominated argument and final `L1` limit use affected conditional algebra and DCT. The common finite conditional dominator justifies the almost-sure conclusion. New A-P. |
| `thm-uniform-integrability-of-conditional-expectations-of-one-variable` | `66312109be3020df83272d546803b24a9652b778158a8b6cea230c6abafb11c6` | The tail-event estimate directly uses the affected conditional class/modulus/event integral, and its small-set bound uses affected absolute continuity below. It does not select versions over all sigma-algebras simultaneously. New A-P. |
| `cor-conditional-lp-contraction` | `8a0474c0af8b15e04eb7c72b469383e9a92e24bfe84c6007e073e77350bfcffe` | Finite `p` uses affected conditional Jensen, finite-measure embedding and `L^p` carrier/quotient; the infinity endpoint uses affected conditional order/class well-definedness. Its norm inequalities are correct after repair. New A-P. |
| `thm-conditional-expectation-is-the-l2-orthogonal-projection` | `2747750bad1f538b2b09d9dbe090bfc160721938a740f4366601a1a68e382ec2` | Closedness uses the already A-P Riesz--Fischer interface. Orthogonality and minimization use affected conditional contraction, taking-out, known-variable, conditional algebra and `L^2` product integrability. The restricted/ambient null-class comparison is correct. New A-P. |
| `cor-conditional-cauchy-schwarz-inequality` | `2adadf177aedc7ad4081cd32e218d8892871921ea6189d076b4a5c5452592c9a` | The rational-parameter quadratic argument is complete, but its conditional class, positivity/linearity and `L^2` product integrability are affected. New A-P. |
| `thm-absolute-continuity-of-the-integral` | `57bb3655fb81a5fb0e503a9ebd8be7f57699ef595a53c91e20a99fed2e640df9` | Proofs 1.1--2.1 use A-P MCT, integrability, restricted integral and nonnegative order. The tail truncation proof is sound after repair, but proof 2.1 places its citation and terminator before the displayed estimate. Move them to the step end. New A-P. |
| `def-uniformly-integrable-family` | `1bdff66012021dacddd69bfe6614f97e572a84c66fa85924910f56216d11fba6` | The standard tail definition is coherent, but its `L1` carrier and tail integrals directly use the affected integral/restriction definitions. Repair upstream. New A-P. |
| `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` | `97e4814252238514484f9d6dd75df18c8d24e1d857b207dac384f1d233b7d147` | The strict finite-exponent clause uses affected Holder and `mathcal L^p`; the infinity clause integrates an essential bound into the same affected carrier. The algebra and exponents are correct. U-P to A-P. |
| `thm-holder-inequality-for-integrals` | `810a5feb0c4d749cbf0e9d3d819033e6ad02641d8461f35aa9236d884bc5779d` | Strict exponents use affected `mathcal L^p`, zero criterion, nonnegative order/additivity and MCT-backed integral structure; endpoints use the affected `L1` integral. Normalization and endpoint cases are otherwise sound. Bounded clear to A-P. |
| `thm-equality-case-in-holder-inequality` | `bc9bee19e0cabe163de77e2bd18e45019293a5e4b493df306cd7b49bf0945644` | Its normalized Young equality argument uses affected Holder, zero criterion and `mathcal L^p` membership. The proportionality constant calculation is correct after repair. New A-P. |
| `cor-cauchy-schwarz-inequality-for-l-two` | `5174cb1208b68795acc7638465b2f3f073c1e79ee5440873c20bf52ea9f33e16` | Both inequality and equality clauses specialize the two affected Holder interfaces. New A-P. |

## Deferred exact supplier

`lem-absolute-real-powers-are-convex` was read and its visible convexity proof
appears sound, but several calculus suppliers remain outside the bounded audit.
It is left unclassified rather than declared clear from an incomplete supplier
audit. This does not add another blocker to conditional contraction, which is
already A-P through the integral and conditional-expectation paths above.

## Frontier impact and limits

These findings add no distinct active-frontier blocker beyond the common
integral/RN repair already reported. Conditional contraction and projection are
standard consequences after that repair. No external source retrieval was
needed because every finding here is an exact local dependency/proof path. The
audit does not claim to cover all Holder, DCT, uniform-integrability or
conditional-expectation consumers.
