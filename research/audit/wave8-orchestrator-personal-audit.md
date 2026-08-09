# Wave 8 twice-touched personal audit

Stage: A6. Reviewer: audit orchestrator, GPT 5.6 Sol at `xhigh`,
owner-delegated. Date: 2026-08-09.

## Escalated item

`rem-sums-proved-to-exist-but-not-evaluated` was materially repaired at A4 and
again at A6, so the combined touch history requires a personal audit under
`AUDIT-WORKFLOW.md` section 9. I reread the complete current item, every claim
in its Remark, its six declared dependencies, and its containing A page.

Disposition: **sound; no further edit**. The A4 repair correctly changes the
unsupported universal assertion that every proof of the signed infinite-product
criterion uses logarithms to the narrower statement that a standard proof does.
The A6 repair correctly makes the inventory selected and non-exhaustive and
expressly accounts for the Dirichlet, alternating-series, and Abel tests and
their applications. The remaining statements accurately distinguish existence,
comparison, and numerical evaluation, and the dependency directions still
license their uses. The final normalized item hash is
`ea6ceb8ab5d4d3e68d5b18c98359f890986f8266e69e9b6c539e9ae9c1bfaa76`.

Fault and ramification of dropping the repair: reverting the A4 narrowing would
restore an unsupported claim about all possible proofs of the product criterion.
Reverting the A6 narrowing would restore a false exhaustive inventory that omits
the convergence tests and their worked applications. Either regression would
make published Remark prose mathematically inaccurate; no item deletion or
dependency removal is warranted.

## Repeatedly edited containing page

The formal twice-touched rule applies to items, but I also reread the complete
current `library/real-analysis/absolute-convergence-and-rearrangement.md` because
its summary was corrected at A4 and again at A6. Disposition: **sound; no
further edit**. The final summary now separates the rearrangement/product results
organised by the absolute-versus-conditional dichotomy from the summation-by-parts
tests and the independently hypothesised grouping, infinite-product, and decimal
results. It also says only that the deferred refinement is usually proved with
logarithms. The final full-file hash is
`b9147fe75f23321dfcc5f854dc4f245fd58ebc3de095124081ccb4d07e41e78d`.

Fault and ramification of dropping the repair: reverting the A6 page sentence
would again claim that every later theorem follows from one dichotomy, which is
false for the convergence tests and independently hypothesised sections. Reverting
the A4 page sentence would again overstate the necessity of logarithms. The final
page needs no additional mutation.

## A8 judge-escalated items

Stage: A8. I reread each of the eight complete current items that had already
been materially repaired at A4/A6 and then received an A7 rejection. I checked
the rejected clause against the cited source text and recomputed each item's
current direct-consumer surface. The dispositions below are personal audits,
not substitute Alpha adjudications; the exact-hash Alpha decisions remain in
`wave8-judge-adjudications.jsonl`.

- `cex-cauchy-product-of-convergent-series-diverges` — **sound; no A8 edit**.
  Terra correctly noticed that explanatory step 2.2 omits the Archimedean
  reciprocal bridge needed to say the displayed lower bound eventually exceeds
  every real below 2. `cor-archimedean-reciprocal` supplies that bridge in one
  standard line, so Alpha's nonfatal classification is correct and the
  divergence proof itself does not depend on the asymptotic sentence. Dropping
  the item would remove the page's canonical divergent Cauchy-product witness
  and two comparison links. Current normalized hash:
  `11d563ad2d6ea1161518a184cd7f4d7c0441fe5c8a04e1db5b429ce9bd6bc9ad`.

- `cor-q-is-meager-and-not-g-delta` — **the only fatal A7 item; repaired and
  exact-final certified**. The original L1 assertion that every at-most-countable
  family has an `N`-indexed presentation was false for the empty family and was
  unused; deleting that clause and its unused `def-countable` dependency leaves
  step 1.2 licensed directly by `Q approximately N`. The first repair still left
  a false Remark generalising claim 1 to every countable space; a nonempty
  countable discrete space refutes that sentence. The second minimal repair now
  says only that `Q_R` is listed and real singletons are nowhere dense. I reread
  all three claims, all six proof phases, and all Remarks; the final item is
  sound. Reverting either repair restores a false public Fact or Remark.
  Dropping the item would orphan three logical dependants and seven additional
  item citations, including the continuity-set and Baire-category developments.
  Current normalized hash:
  `8ccbe550554ceb11584e492815c66fea1521c2d5b8a3383e4b16f4421a6769ba`.

- `fs-evt-holds-on-every-bounded-domain` — **sound; Terra rejection is a false
  positive**. Totality of the ordered-field order makes the maximum of the two
  displayed reals one of them, and L4 supplies its interval inequalities. No
  separate finite-maximum theorem is load-bearing. Dropping the item would
  remove the false claim's direct refutation and the dependency used by the
  companion EVT-failure example. Current normalized hash:
  `1829393d8ce64fc2bf811c7477473ce2dc37e06020162bed23b74e24dc673ff7`.

- `lem-nondegenerate-interval-is-not-null` — **sound; no A8 edit**. L6's source
  list does not itself spell out positivity of every positive-base natural
  power, but the recurrence in L6 plus the positive-product rule in L9 proves
  it by a one-line induction. The compactness reduction and length estimate are
  intact. Dropping the lemma would break six direct proof dependencies and ten
  further explanatory citations across measure-zero, Cantor-set, and Riemann-
  integrability material. Current normalized hash:
  `fef19072a284dcbfd3288a8282a7c5043c22a376c20d26dbdb88a098e65d2aaa`.

- `lem-paracompact-hausdorff-cover-shrinking` — **sound; no A8 edit**. F1 is
  locally compressed, but `def-paracompact-space` explicitly states that the
  locally finite open refinement also covers the space. The two shrinking
  passes and locally finite closure step are licensed. Dropping the lemma would
  break the construction of subordinate partitions of unity. Current
  normalized hash:
  `51ecae7021ef8d83ac64c6fbdb32a145a4124a6b7642e31de5c76a01d07bf0a8`.

- `thm-continuous-image-of-a-compact-set-r` — **mathematically sound; no A8
  edit**. Terra found an editorial tension between this item's signpost and the
  dictionary lemma's phrase “single place,” not a defect in the theorem or its
  choice-free cover proof. Alpha's nonfatal classification is correct. Dropping
  the theorem would break four direct proof dependencies, including boundedness
  and the real extreme-value theorem. Current normalized hash:
  `a5d7a5f1807ae9e80a7ae3a80a1e03a7dec29925403525323af0e1addf3c9177`.

- `thm-infinite-product-criterion` — **sound with a nonfatal citation
  compression; no A8 edit**. L7 cites the absolute-value lemma for several
  clauses it does state but also bundles the triangle inequality, which is
  stated by `lem-of-triangle-inequality`; substituting that exact one-line fact
  closes steps 1.4 and 4.3 without changing an inference. Dropping the theorem
  would break four direct consumers covering both positive and signed infinite
  products. Current normalized hash:
  `f06362e6e85a0cdd12ea0ddd951f8eba54914d0c9f43dac3e96d0a669a34f27e`.

- `thm-mertens` — **sound with a nonfatal Fact-heading compression; no A8
  edit**. L9 says only “Algebra of limits,” but the cited theorem explicitly
  states the sum, scalar, product, and quotient rules used in steps 1.3 and 6.1.
  The finite identity and epsilon proof remain correct. Dropping Mertens would
  break four direct Cauchy-product consumers and erase the page's positive
  theorem separating absolute from merely conditional convergence. Current
  normalized hash:
  `b9da637df013128b71efb96916b9f99c0fb2cdbeb06cce03c9847161fbe7e5bb`.

Conclusion: the personal-audit surface contains one repaired fatal item, six
confirmed nonfatal citation/editorial compressions, and one false positive.
No additional A8 mathematical mutation is licensed or needed.
