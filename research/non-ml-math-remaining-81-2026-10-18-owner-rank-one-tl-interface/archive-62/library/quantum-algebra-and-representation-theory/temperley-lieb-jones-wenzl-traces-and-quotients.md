---
page: temperley-lieb-jones-wenzl-traces-and-quotients
title: "Temperley–Lieb Jones–Wenzl Projectors, Traces, and Quotients"
status: draft
requires:
  - temperley-lieb-semisimplicity-and-generic-structure
items:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - def-negligible-morphism-in-a-pivotal-category
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-closure-trace-component-identities
  - lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization
  - lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings
  - thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-rank-one-pivotal-ribbon-conversion
examples: []
---

This page fixes the diagram convention of [[def-temperley-lieb-diagram-category]]: a closed circle contributes the loop parameter $\delta$, multiplication stacks the left factor above the right, and no diagram is divided by $\delta$ unless an explicit unit hypothesis is stated. The local Jones–Wenzl recursion, trace-component identities, Hecke quotient isomorphism, and Markov-trace descent are proved in the denominator-unit/specialization ranges stated by their carriers. Failure of a denominator condition is not a nonexistence proof.

At $q=e^{\pi i/\ell}$ with $\ell\ge3$, the page retains the full negligible-quotient and rank-one Lusztig divided-power tilting claims. The local rank-one linkage/tilting proof, root-path recoupling proof, quotient matrix-block proof, and pivotal/Frobenius–Schur comparison remain escalated; source statements are not treated as completed arguments. The trace radical is distinct from the Jacobson radical: the claimed first boundary is rank $\ell-1$, where the unreduced algebra is semisimple by [[thm-temperley-lieb-complex-semisimplicity-classification]] while the closure trace is degenerate.

## Results

- [[def-temperley-lieb-closure-trace-and-partial-trace]] and [[lem-temperley-lieb-closure-trace-component-identities]] define unnormalized closure/partial traces and prove cyclicity and the tower/component-counting rules.
- [[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]] and [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]] state the exact unit range and prove identity coefficient, cup/cap annihilation, idempotence, uniqueness, partial trace, and closure value.
- [[thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization]] proves descent through the full two-sided Hecke ideal at the exact Jones specialization by uniqueness of the tower Markov trace.
- [[def-negligible-morphism-in-a-pivotal-category]] and [[lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace]] give the trace-radical quotient interface and its partial-trace proof.
- [[lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]] and [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]] state the normalized path matrix-unit construction, negligible ideal, truncated fusion rule, and trace-degeneracy boundary; their local recoupling and block-spanning proofs are escalated.
- [[def-temperley-lieb-rank-one-lusztig-tilting-category]], [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]], [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]], and [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]] specify the divided-power type-1 category and retain the full tilting quotient claims; the missing filtration/linkage arguments are recorded explicitly.
- [[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]] retains the rankwise centralizer, pivotal trace, twist and braiding comparison. The fundamental cup/cap zig-zag, twist eigenvalues, Frobenius–Schur sign, and all-rank kernel/image proof remain unresolved.

Companion: [[temperley-lieb-jones-wenzl-traces-and-quotients-examples]].
