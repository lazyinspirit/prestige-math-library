# Step 3a reader report — batch 5

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Result: assigned claims verified; one citation annotation repaired; no remaining in-scope defect or blocker.

## Opened inventory

Assigned pages, read in full:

- `library/machine-learning/rademacher-complexity-and-generalization.md` (A)
- `library/machine-learning/rademacher-complexity-and-generalization-examples.md` (B)

Assigned items, reviewed in dependency order:

1. `def-rademacher-complexity`
2. `thm-rademacher-contraction-inequality`
3. `thm-rademacher-symmetrization-bound`
4. `thm-rademacher-uniform-generalization`
5. `cor-erm-excess-risk-from-uniform-deviation`
6. `ex-finite-class-rademacher-complexity`
7. `ex-bounded-linear-predictor-rademacher-bound`
8. `ex-clipped-linear-class-shows-loose-radius-bound`

The direct item suppliers opened for the proof checks were `def-probability-measure`, `def-empirical-process-and-rademacher-process`, `def-identically-distributed-and-iid-random-variables`, `def-one-sided-empirical-rademacher-complexity`, `thm-one-sided-coordinate-rademacher-contraction`, `thm-independent-random-elements-have-product-joint-law`, `thm-change-of-variables-for-expectation`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-axiom-of-choice`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-probability-measure-basic-identities`, `thm-mcdiarmid-bounded-differences`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `def-empirical-risk-minimizer`, `lem-population-and-empirical-risk-are-measurable`, `lem-cauchy-schwarz-for-finite-random-variables`, and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`.

The three A-page prerequisite pages were opened for their page identity and context: `concentration-inequalities-and-tail-bounds`, `finite-class-pac-learning-and-erm`, and `symmetrization-rademacher-complexity-and-covering-entropy`. The B page's A companion is the assigned A page above.

## Mathematical review

- The definition uses the one-sided, nonabsolute `1/m` sign average. Nonemptiness gives nonnegativity by averaging any fixed class member; bounded `[0,1]` values give the stated upper bound. The measurable-supremum qualification covers uncountable classes.
- The contraction statement preserves the common Lipschitz constant and does not impose a zero-at-zero hypothesis. The published finite/countable supplier proves the finite-sign inequality; the assigned proof transfers it to the stated countable determining subclass using the signwise equality hypothesis.
- The symmetrization proof's ghost-sample expectation, pair-swaps under the product law, and subadditivity yield the claimed factor `2` in the stated one-sided convention. The measurability and boundedness hypotheses support the iterated integrals and supremum expectations.
- The four uniform guarantees have the stated separate-event interpretation. Coordinate oscillations are `1/m`; McDiarmid therefore gives the displayed square-root terms. Complementing the `[0,1]`-valued class preserves the one-sided complexity and supplies the reverse deviation. The empirical-complexity bounds use the lower-tail McDiarmid inequality with the same constants.
- The ERM corollary assumes an existing measurable approximate rule and measurable selected population risk; it does not claim a selector exists. Applying each two-sided uniform event to the selected predictor and taking infima gives the two displayed `2d + eta` bounds.
- All three examples' sign suprema, endpoint cases, radius constraints, clipping Lipschitz estimate, and Cauchy–Schwarz calculations check out, including `p=0,1`, `B=0`, `R=0`, and `m=1`.
- Titles and statements preserve the relevant domains, hypotheses, quantifiers, constants, and one-way conclusions. References follow complete statements in the corresponding `Definition references`, `Statement references`, or `Example references` sections. No TikZ/tikzcd or other diagram occurs in the assigned items.

## Edit and evidence

Edited `items/thm-rademacher-contraction-inequality.md`, `Statement references`: changed the Mohri Lemma 5.7 annotation from claiming that it supplies a “complete sign-by-sign proof” to saying that it states the coordinatewise one-sided factor-`L` inequality under the same normalization. The official author-linked second-edition PDF states that inequality on printed p. 93. On printed p. 94, its approximate-maximizer line uses `(1-epsilon) sup`; this need not approximate a negative intermediate supremum from below. The local published supplier `thm-one-sided-coordinate-rademacher-contraction` has a valid finite/countable proof, and the assigned item independently proves its countable-subclass extension, so the mathematical claim remains established without that source proof. The source link and theorem citation were preserved.

I independently opened the [official author page](https://cs.nyu.edu/~mohri/mlbook/) and retrieved its linked [complete 505-page book PDF](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1). Relevant locations: Mohri–Rostamizadeh–Talwalkar, *Foundations of Machine Learning*, 2nd ed., Definitions 3.1–3.2, printed pp. 30–31; Theorem 3.3 and proof, pp. 31–33; Lemma 5.7 and proof, pp. 93–94. The [official JMLR PDF](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf) was also opened: Bartlett–Mendelson, “Rademacher and Gaussian Complexities: Risk Bounds and Structural Results,” JMLR 3 (2002), Definition 2, p. 464; Theorems 5 and 8, pp. 465–467; Theorem 12(4), p. 469. Those passages confirm the distinct absolute-value / `2/m` convention described in the assigned references.

No proof step or fact changed, so the existing proof-contract rows (F1/F2 and derivations 1.1/2.1) remain accurate and required no alteration. The item had no `verification.judge` record to remove. Required item checks after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-rademacher-contraction-inequality.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rademacher-contraction-inequality.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-rademacher-contraction-inequality.md` — 1 item, 2 steps, 0 defects.

## Page verdicts

- `rademacher-complexity-and-generalization` (A): pass. Frontmatter-only, empty body, correct title/status/inventory/requirements, and `page_layout: compact-v1` preserved.
- `rademacher-complexity-and-generalization-examples` (B): pass. Frontmatter-only, empty body, correct title/status/examples/companion requirement, and `page_layout: compact-v1` preserved.

## Unedited defects and blockers

No confirmed defect remains in an assigned carrier or in an item dependency needed for these claims. The gap noted above is in the external source's proof text, not in its theorem statement or in the in-library proof used here; the repository reference annotation now describes only what that source establishes. No blocker remains for batch 5. The active run was still in stage `3a-read` when checked; this report does not claim run-wide completion.
