# Step 5a reader report — batch 30

Run: `frontier-37-owner-30`
Role: `reader-30`

## Opened inventory

I opened both assigned pages:

- A page: `library/complex-analysis/analytic-hypersurfaces-and-local-parametrisation.md`
- B page: `library/complex-analysis/analytic-hypersurfaces-and-local-parametrisation-examples.md`

I opened all 21 A-page items:

`def-reduced-holomorphic-germ-for-hypersurface`,
`lem-square-free-reduction-of-holomorphic-germ`,
`lem-reduced-prepared-polynomial-has-nonzero-discriminant`,
`thm-weierstrass-finite-projection-hypersurface-germ`,
`def-discriminant-and-branch-locus-weierstrass-hypersurface`,
`lem-reduced-prepared-hypersurface-remains-reduced-near-germ`,
`lem-vanishing-ideal-of-a-reduced-hypersurface-germ`,
`def-complex-analytic-hypersurface-germ-and-reduced-equation`,
`def-irreducible-hypersurface-germ`,
`def-regular-singular-point-analytic-hypersurface`,
`lem-irreducible-holomorphic-germ-is-prime`,
`thm-local-irreducible-decomposition-hypersurface-germ`,
`lem-dimension-of-holomorphic-germ-ring`,
`def-local-dimension-hypersurface-germ`,
`thm-hypersurface-germs-have-pure-codimension-one`,
`thm-singular-locus-reduced-hypersurface`,
`lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve`,
`thm-puiseux-parametrisation-plane-curve-germ`,
`def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ`,
`lem-total-fractions-split-over-hypersurface-branches`, and
`cor-normalisation-plane-curve-germ`.

I opened all 8 B-page items:

`ex-regular-hyperplane-hypersurface-germ`,
`ex-ordinary-node-plane-curve-germ`,
`ex-cusp-puiseux-y-two-equals-x-three`,
`ex-crossing-coordinate-axes-hypersurface`,
`ex-nonreduced-equation-same-hypersurface-germ`,
`cex-projection-branch-locus-is-not-singular-locus`,
`ex-cusp-puiseux-y-two-equals-x-five`, and
`rem-general-analytic-sets-need-more-than-hypersurface-arguments`.

I checked the current statement/definition sections for all 77 unique direct
dependencies outside the assigned batch; all are marked published. I also
opened the relevant argument in Lebl, *Tasty Bits of Several Complex Variables*,
Chapter 6: Example 6.6.4 (printed p. 190) distinguishes the discriminant
preimage from the singular locus, and Theorem 6.7.6 with Exercise 6.7.5
(printed pp. 195–196) gives the slit-disc continuation argument and the
injective branch parametrisation. Source: <https://www.jirka.org/scv/scv.pdf>.
The no-isolated-zeros claim in the closing remark is supported by the opened
published dependency `thm-zero-set-has-no-isolated-points-in-several-complex-variables`.

## Edits and evidence

1. In the A-page overview, I replaced the comparison of the base branch set
   with the source singular locus by the precise statement that a branch value
   can lie under a regular point and that the branch set may strictly contain
   the image of the singular locus. This follows from
   `thm-singular-locus-reduced-hypersurface` (singular points lie over the
   branch set) and is exhibited by the $y^2=x$ example. Lebl, Example 6.6.4,
   printed p. 190, gives the same distinction.

2. In `cex-projection-branch-locus-is-not-singular-locus`, I changed the
   refuted equality to $B_\pi=\pi(\operatorname{Sing}(X_W))$ and stated the
   actual calculation: $B_\pi=\{0\}$, while the fibre point $(0,0)$ is
   regular and $\pi(\operatorname{Sing}(X_W))=\varnothing$. The discriminant
   is $4x$; the curve is the graph $x=y^2$. I updated this item's proof
   contract. There was no `verification.judge` record to remove. Reflow reported
   unchanged; precheck passed (1 checked, 0 failing).

3. In `rem-general-analytic-sets-need-more-than-hypersurface-arguments`, I
   removed the false implication that the nonprincipal ideal of $\{0\}$ indicates singularity and the overclaims about resolution,
   parametrisation, normalisation, and coherence. The revised prose says only
   that the example is outside the one-equation setup and explicitly records
   that $\{0\}$ is a smooth zero-dimensional submanifold. I updated its proof
   contract. There was no `verification.judge` record to remove. Reflow reported
   unchanged; precheck reported 0 checked, 0 failing.

## Uneditable finding

- `library/complex-analysis/analytic-hypersurfaces-and-local-parametrisation-examples.md:40–42`
  (the branch-locus sentence under “Two items bound the scope”) compares
  $B_\pi\subseteq V$ directly with $\operatorname{Sing}(X)\subseteq X$.
  Those are subsets of different spaces; the defined comparison is between
  $B_\pi$ and $\pi(\operatorname{Sing}(X))$. The assigned counterexample now
  records that $B_\pi=\{0\}$ and $\pi(\operatorname{Sing}(X))=\varnothing$.
  Lebl, Example 6.6.4 (printed p. 190), likewise states that the preimage of
  the discriminant can contain regular points. This is a nonfatal
  ill-formed page-summary claim. B-page prose is outside my edit authority.

## Page verdicts

- **A page:** Pass after the overview wording repair; the page summary matches
  the prepared-projection, discriminant, reducedness, dimension, singular-locus,
  and Puiseux results read in the assigned items.
- **B page:** One nonfatal ill-formed summary claim remains at lines 40–42, as
  recorded above. Its examples and computations otherwise agree with the
  assigned items.

## Blocker and coverage note

No workflow blocker. I read every assigned page and item and the statement or
definition sections of every unique direct external dependency. I did not
re-audit the transitive proofs of all 77 published dependencies; I followed
their current statements and checked the full cited Puiseux source argument
where the construction warranted it.
