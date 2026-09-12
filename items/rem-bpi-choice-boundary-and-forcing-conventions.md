---
id: rem-bpi-choice-boundary-and-forcing-conventions
kind: remark
title: Choice and forcing boundary
status: published
origin: pipeline
deps: [def-boolean-prime-ideal-principle, thm-choice-implies-boolean-prime-ideal-principle, thm-bpi-equivalent-to-arbitrary-language-compactness, thm-bpi-equivalent-to-compact-hausdorff-tychonoff, thm-forcing-preorders-have-regular-open-completions]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Caicedo, Equivalents of the axiom of choice, Remark 3, p. 5 (orientation); the claims used here have local proofs"
      url: https://andrescaicedo.wordpress.com/wp-content/uploads/2009/11/502-equivalents.pdf
---

The [[def-boolean-prime-ideal-principle|Boolean prime ideal principle]] is an assumption when invoked. The equivalences with [[thm-bpi-equivalent-to-arbitrary-language-compactness|arbitrary-language first-order compactness]] and [[thm-bpi-equivalent-to-compact-hausdorff-tychonoff|compact Hausdorff product compactness]] are proved over ZF: each implication uses the principle on its own antecedent side. Those equivalences do not constitute a proof of BPI from ZF. [[thm-choice-implies-boolean-prime-ideal-principle]] proves the separate implication from AC to BPI by extending proper filters with Zorn's lemma.

[[thm-forcing-preorders-have-regular-open-completions]] constructs the regular-open completion of a set forcing preorder's separative quotient in ZF. It uses the downward-open topology on conditions, rather than an existence assertion for ultrafilters. Smaller conditions are stronger; compatibility requires a common stronger condition. A forcing filter is nonempty, upward closed and internally downward directed. The zero of the completion is omitted from its forcing order. These conventions do not identify an arbitrary preorder with a Boolean algebra or presuppose binary meets in the original preorder.

The relative nonimplication from BPI to AC is assigned to the later SET-21 development. No such nonimplication is proved or assumed here, and no result from the recorded catalogue supplies any of the arguments on this page. The empty Stone space and trivial Boolean algebra are allowed in the Boolean statements; the forcing statements explicitly concern nonempty preorders. The compact Hausdorff product theorem proves nonemptiness for nonempty factors under its BPI assumption, rather than presuming an arbitrary choice function.
