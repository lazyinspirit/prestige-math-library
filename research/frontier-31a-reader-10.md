# Frontier-31a Step-6a reader report — batch 10

## Opened scope

- Manifest: `research/frontier-31a-batch-10.pages.json` — A page
  `group-cohomology-as-a-derived-functor` (42 items) and B page
  `group-cohomology-as-a-derived-functor-examples` (9 items).
- Pages: both current library pages named by the manifest.
- Direct prerequisites: the 29 item IDs named in the manifest's local `deps`,
  including the derived-functor, Hom-totalisation, scalar-change, and
  projective-dimension prerequisites. The Weibel and Löh primary source PDFs
  were opened at §§6.1, 6.3, 6.7 and §§1.7.2–1.7.3 respectively.

The opened A-item inventory was:
`def-integral-group-ring-module-and-trivial-module-convention`,
`def-invariants-functor-of-a-group-module`,
`thm-invariants-are-hom-from-the-trivial-group-ring-module`,
`prop-the-invariants-functor-is-left-exact`,
`def-group-cohomology-as-a-derived-functor`,
`def-coinvariants-functor-of-a-group-module`,
`prop-the-coinvariants-functor-is-right-exact`,
`def-group-homology-as-a-derived-functor`,
`prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants`,
`thm-long-exact-sequence-in-group-cohomology`,
`thm-long-exact-sequence-in-group-homology`,
`def-unnormalized-homogeneous-bar-resolution`,
`lem-the-bar-differential-is-group-equivariant-and-squares-to-zero`,
`def-bar-augmentation`, `lem-the-augmented-bar-complex-is-exact`,
`thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module`,
`def-inhomogeneous-group-cochains`,
`lem-the-inhomogeneous-group-cochain-differential-squares-to-zero`,
`thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes`,
`thm-the-bar-cochain-complex-computes-derived-group-cohomology`,
`def-normalized-bar-resolution`,
`lem-degenerate-bar-chains-form-a-contractible-subcomplex`,
`thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent`,
`cor-normalized-cochains-compute-group-cohomology`,
`def-restriction-induction-and-coinduction-for-group-modules`,
`thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction`,
`lem-the-group-ring-is-free-over-a-subgroup-ring`,
`thm-shapiro-lemma-for-group-cohomology`,
`thm-shapiro-lemma-for-group-homology`,
`def-cohomological-dimension-of-a-group`,
`thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing`,
`def-restriction-and-corestriction-on-group-cohomology`,
`lem-corestriction-is-independent-of-the-coset-representatives`,
`thm-restriction-corestriction-composite-is-multiplication-by-the-index`,
`lem-positive-group-cohomology-of-the-trivial-group-vanishes`,
`prop-finite-groups-have-torsion-annihilation-in-positive-cohomology`,
`thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free`,
`fs-group-cohomology-is-the-derived-functor-of-coinvariants`,
`fs-the-bar-contracting-homotopy-is-group-equivariant`,
`fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones`,
`fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions`, and
`fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction`.

The opened B-item inventory was:
`ex-group-cohomology-of-the-trivial-group`,
`ex-degree-zero-invariants-and-coinvariants`,
`ex-the-first-three-bar-differentials`,
`ex-normalizing-an-inhomogeneous-cochain`,
`ex-a-periodic-resolution-for-a-finite-cyclic-group`,
`ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution`,
`ex-shapiro-lemma-for-the-trivial-subgroup`,
`cex-the-underlying-bar-contraction-is-not-equivariant`, and
`ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group`.

## Repairs completed

1. `def-integral-group-ring-module-and-trivial-module-convention`: restored
   the missing LaTeX command backslashes in the integral group-ring and
   augmentation convention. This was a KaTeX parse error.
2. `def-normalized-bar-resolution` and
   `lem-degenerate-bar-chains-form-a-contractible-subcomplex`: replaced the
   non-equivariant homogeneous phrase “identity entry” with the correct
   equal-consecutive-vertices degeneracy convention. The repaired lemma now
   states the corresponding exceptional-face cancellation.
3. `thm-shapiro-lemma-for-group-homology`: made the resolution a *right*
   group-ring resolution and replaced an ill-typed tensor display with
   \(P\otimes_{\mathbb Z[G]}(\mathbb Z[G]\otimes_{\mathbb Z[H]}M)
   \cong(\operatorname{Res}P)\otimes_{\mathbb Z[H]}M\). This agrees with
   Weibel §6.3.2.
4. `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group`:
   changed the YAML title quoting so its `\mathbb Z` no longer makes the
   frontmatter unparsable.
5. Updated the affected step descriptions in
   `research/frontier-31a-batch-10.proof-contracts.json`. None of the repaired
   items had a `verification.judge` record.

## Confirmed uneditable defects

The independent dependency review found uneditable fatal defects in the
batch-8 Hom-double-complex scaffold and the Ext/projective-dimension
criterion. They are recorded in the paired structured findings artifact; the
bar-computation and cohomological-dimension claims cannot be accepted while
those prerequisites remain only template prose.

The affected prerequisite items are
`lem-the-two-hom-double-complex-differentials-commute-before-signing`,
`lem-acyclic-assembly-by-exact-columns`,
`lem-acyclic-assembly-by-exact-rows`,
`lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact`,
`lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact`,
and `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`. Each has an
imperative prose “Statement” with no quantified hypothesis/conclusion and the
same placeholder two-step proof. The first five are load-bearing for the bar
comparison; the last is load-bearing for the cohomological-dimension theorem.

## Validation

- Reflow ran on all five repaired items without further edits.
- Focused and complete batch `precheck`: 39 proof-bearing items passed.
- Complete batch `rendercheck`: all 51 items passed (including YAML and KaTeX).
- Strict batch proof-contract check: 39/39, no errors or warnings.
- `manifest-deps` for batches 8 and 10: 145 items, no errors.
- Batch content-policy check: 51 scoped items, no errors or warnings.

## Page verdicts

- A page: blocked. Its bar-computation theorem depends on the five defective
  Hom-double-complex scaffold items; its cohomological-dimension theorem
  depends on the defective Ext/projective-dimension criterion.
- B page: blocked through `cor-normalized-cochains-compute-group-cohomology`
  and the A-page bar-computation theorem.

## Blocker

No further repair is licensed: all remaining defects belong to another batch.

## Owner resolution of the cross-batch findings

The six prerequisite findings above were valid, but the mechanical splitter
correctly rejected them because they belong to same-run batch 8 rather than to
batch 10's assigned published-dependency scope. The owner repaired all six at
their owning item files: each now has a quantified mathematical statement and
a non-template proof. The projective-dimension theorem also declares the
projective-object characterization it uses. Focused precheck, rendercheck, and
strict proof-contract checks all pass, so the structured batch-10 findings are
now empty and this reader unit is no longer blocked.
