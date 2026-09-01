# Final-adjudicator evidence — `def-tubular-neighbourhood-of-an-embedded-submanifold`

Disposition: `accepted-after-review`.

## Material reviewed

I independently read the current definition; its normal-bundle,
smooth-vector-bundle, and smooth-embedding dependencies; the directly dependent
tubular-neighbourhood theorem and germ proposition; the full Whitney A/B page
context; the batch-10 manifest, coverage notes, and contracts; the page's
closed-submanifold and variable-radius conventions; the Step-6 reader and
refuter records; both frozen judge rejections and exact Alpha adjudications;
the defect-ledger rows; and Alpha's two repairs.

The item is a definition with `provenance.proof: not-applicable`, so it has no
item-local proof contract, finite smoke test, or proof risk tier. Two downstream
proof contracts quote its Definition section; both current quotes match the
item exactly and neither consumer requires a high-risk review.

## Mathematical basis

Alpha's final repair correctly separates data from existence. The underlying
normal-bundle set $\nu(S)=\coprod_{p\in S}T_pM/T_pS$ is defined independently
of a global smooth-vector-bundle structure. The current item then explicitly
assumes that this set has been equipped with its standard smooth-vector-bundle
structure. Relative to that supplied structure, “open” in $\nu(S)$ and “smooth
embedding $\Phi$” are well-defined. The cited proposition is used only for the
accurately scoped statement that $\mathrm{AC}_\omega$ supplies the existence of
that structure; the definition no longer spends the proposition without its
hypothesis.

The remaining clauses are the standard tubular-neighbourhood data. An open
neighbourhood $\Omega$ of the zero section has the same dimension as $M$, and a
smooth embedding $\Phi:\Omega\to M$ whose image is open and whose zero-section
restriction is $i$ identifies $\Omega$ diffeomorphically with an ambient open
neighbourhood of $i(S)$. Conversely, such a diffeomorphism plainly satisfies
the two listed conditions. This justifies the final equivalence and is
consistent with the page's later convention that existence theorems use closed
embedded submanifolds while the definition itself may be stated for any
embedded submanifold for which such data exist.

No further item or metadata edit was required.

## Source verification

Source status: `familiar`. No external verification was needed. The definition
of a tubular neighbourhood and the distinction between an underlying normal-
bundle set, a chosen smooth-vector-bundle structure, and an existence theorem
are standard differential-geometric facts. The foundational point at issue was
checked directly against the library's opened normal-bundle proposition and its
explicit $\mathrm{AC}_\omega$ hypothesis.

## Focused checks

- `precheck` on the definition: no proof-bearing item was applicable and no
  failure was reported.
- Strict batch-10 proof contract on both direct consumers: 2/2 checked, 0
  errors or warnings.
- Strict merged proof contract on the same consumers: 2/2 checked, 0 errors or
  warnings.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- Renderer check on the item: clean YAML, wikilinks, delimiters, and KaTeX.
- `git diff --check` on the item: clean.
