# Step 3a reader report — batch 33

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-33`)

## Opened inventory

Pages:

- `library/inverse-problems/sparse-recovery-and-nullspace-certificates.md`
- `library/inverse-problems/sparse-recovery-and-nullspace-certificates-examples.md`

Assigned items, reviewed in dependency order:

- `def-ip-nullspace-property`
- `thm-ip-basis-pursuit-exact-recovery-under-nsp`
- `lem-ip-nullspace-property-stability-cone`
- `ex-ip-failed-nsp-two-column-nonunique-basis-pursuit`
- `ex-ip-nontrivial-order-one-nsp-matrix`
- `ex-ip-gaussian-identity-design-minimax-lower-bound`

I also reviewed the batch manifest and the proof-contract map in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-33.proof-contracts.json`.
The assigned items' citations and derivation steps match their current proofs.

Proof-relevant dependencies opened: `def-matrix-space`,
`def-matrix-product-and-identity-matrix`, `def-norm-and-normed-space`,
`def-euclidean-inner-product`, `def-p-norms-on-rn`,
`lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-finite-sum-laws`,
`lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`,
`lem-finite-set-has-max`, `lem-of-square-monotone`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`,
`lem-of-triangle-inequality`, `def-axiom-of-choice`,
`thm-gaussian-sparse-sequence-minimax-lower-bound`,
`lem-sparse-hamming-packing`, `thm-fano-packing`,
`lem-gaussian-location-kl-formula`, `thm-product-kl-additivity`, `thm-pinsker`,
`thm-two-point-le-cam-risk-bound`, `def-loss-function-and-risk`,
`def-randomized-procedure-as-a-markov-kernel`,
`lem-statistic-induces-deterministic-procedure`, `def-natural-logarithm`,
`thm-natural-logarithm-laws`, `def-integral-logarithm`,
`cor-integral-logarithm-agrees-with-natural-logarithm`,
`thm-monotonicity-of-the-integral`, `thm-of-square-roots`,
`def-real-exponential-function-and-e`, `thm-exponential-is-strictly-increasing`,
`fs-nonnegative-integrable-with-zero-integral-vanishes`, and
`thm-nonnegative-continuous-with-zero-integral-vanishes`.

I checked the linked Rigollet–Hütter PDF at
[arXiv:2310.19244v1](https://arxiv.org/pdf/2310.19244v1), including its chapter 4
contents and the sparse-estimation discussion in §4.5, pp. 105–108.

## Review and edits

- The nullspace-property definition preserves the one-based/library zero-based
  relabeling, has the correct strict inequality and quantifiers, and restricts
  the claim to exact kernel vectors.
- The basis-pursuit theorem proves uniqueness for every exact feasible vector by
  applying the NSP to the feasible difference and using the norm triangle
  inequality. Its statement correctly excludes noisy recovery.
- The stability-margin lemma handles the zero-kernel case, uses compactness of
  the normalized kernel sphere for the nonzero case, and takes a maximum over
  the finite family of supports. The resulting constant is positive and less
  than one.
- The two-column example has the stated kernel witness and two distinct
  minimizers. The three-column example has the stated kernel line, satisfies
  order-one NSP, and applies the exact-recovery theorem correctly.
- The identity-design example has zero kernel and therefore strict NSP
  vacuously. Its noiseless conclusion and noisy Gaussian model match their
  respective theorem hypotheses, including the AC assumption, dimension,
  sparsity, variance, estimator class, and squared-error loss.
- The assigned pages contain frontmatter only and retain `page_layout:
  compact-v1`. Every assigned statement/definition/example is uninterrupted by
  links; its references follow in the matching references section. No diagrams
  occur or are needed by these arguments.
- No assigned item or page prose was edited. Consequently no reflow, precheck,
  or proof-layout command was run; there are no changed item paths to validate.

## Uneditable findings

1. Published dependency `thm-gaussian-sparse-sequence-minimax-lower-bound`,
   frontmatter `sources.references[0].title` (item line 37), gives the locator
   `Chapter 4, §§18–19.2` for the linked PDF. That PDF's contents enumerate
   chapter 4 as §§4.1–4.8; the relevant sparse-sequence discussion is §4.5,
   including Lemma 4.14 and Corollary 4.15 on pp. 105–108. The local theorem
   proof derives its numerical constant, so the wrong locator does not remove
   the proof of the bound. The source citation should use the linked PDF's actual
   section and page locator. The assigned consumer is
   `ex-ip-gaussian-identity-design-minimax-lower-bound`.

2. Published dependency `thm-monotonicity-of-the-integral`, Statement lines
   52–57, has an ambiguous truth-value transition: it says a zero-integral
   nonnegative integrable function may be positive at infinitely many points,
   then attaches “that is FALSE” before restating the different claim that such
   a function must vanish identically. The cited
   `fs-nonnegative-integrable-with-zero-integral-vanishes` gives Thomae's
   function as a counterexample and confirms the first assertion is true; the
   false claim is the stronger vanishing implication. The sentence should name
   that false implication explicitly. The monotonicity result used by the
   assigned example is unaffected. The assigned consumer is
   `ex-ip-gaussian-identity-design-minimax-lower-bound`.

## Page verdicts

- `sparse-recovery-and-nullspace-certificates` (A page): no defect found in its
  assigned items or page frontmatter.
- `sparse-recovery-and-nullspace-certificates-examples` (B page): no defect
  found in its assigned examples or page frontmatter; the two inherited
  published-dependency findings above remain for the Gaussian example's owner.

## Blocker and coverage limit

No blocker. I checked the published minimax theorem's current proof and the
statement or proof-relevant passages for its named statistical inputs, including
the sparse packing and Fano arguments. I did not recursively re-prove every
background measure-theoretic and analysis result beneath those published inputs.
