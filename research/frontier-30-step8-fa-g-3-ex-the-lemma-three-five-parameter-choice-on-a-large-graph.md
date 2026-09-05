# Final-adjudicator evidence: `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`

## Disposition

`accepted-after-review`

## Independent review

I inspected the current example and its direct theorem dependency; the
`from-generalized-niceness-to-erdos-hajnal` A page and B companion; the
batch-14 manifest, coverage notes, source route, and proof contract; the
Step-6 scope and risk routing; both frozen judge rejections; both exact Alpha
adjudications and defect records; and both Alpha repair accounts.

The first frozen rejection was correct that the source only supplies some
constant `c_1 >= 1`; it does not license choosing `c_1 = 1`.  The current
example is expressly conditional on that supplied constant happening to equal
one, and both the Example and A1 deny any freely selectable source constant.
That makes the item a valid conditional numerical illustration without
asserting existence of a family for which the equality case occurs.

The second frozen rejection was also correct: `2^42 + 1`, not `2^43`, is the
first integer graph order above `2^42`.  The current title, A1, and conclusion
instead make the precise true claim that `2^43` is the first *power of two*
strictly above `2^42`.

All arithmetic is correct.  Under `c_1 = 1`, the source definitions give
`q = 42`, `m = 2^42`, `x = 2^(-43/3)`, and
`epsilon = x^(1/7) = 2^(-43/21)`.  Since `43/21 > 2`, one has
`x < epsilon < 1/4`.  Moreover,
`epsilon^2 |G| = 2^(817/21)` and
`epsilon^3 |G| = 2^(774/21)`, both strictly larger than
`epsilon^(-1) = 2^(43/21)`.  These are exactly the threshold comparisons the
A-page proof isolates.  The item was not classified high/critical risk; its
contract appropriately records the endpoint check and the four arithmetic
derivations without inventing a citation from its assumption-only fact.

Authoritative source verification:

- https://arxiv.org/html/2606.06258v2 — Huang, Ju, and Zhou's original paper,
  Lemma 3.5, takes existential constants `c_1 >= 1` and `c_2 > 0` from Lemma
  3.4, defines `q = 42 c_1^2`, `m = 2^q`,
  `x = |G|^(-1/(3c_1))`, and `epsilon = x^(1/(7c_1))`, proves
  `x < epsilon <= 1/4`, and later uses the
  `epsilon^(2c_1)|G|` and `epsilon^(3c_1)|G|` thresholds.  This supports the
  repaired conditional framing and every numerical formula checked here.

No item, dependency, page, metadata, or contract edit was required.  Focused
item precheck and four-file rendering passed.  The strict batch-14 contract
check passed all 17 proof-bearing items; citation fidelity found every quote
current; boundary audit found no contradicted disposition; and batch-14
content policy passed without errors or warnings.
