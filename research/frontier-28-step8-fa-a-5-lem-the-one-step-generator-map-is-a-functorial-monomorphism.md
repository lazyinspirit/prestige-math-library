# Final-adjudicator evidence: `lem-the-one-step-generator-map-is-a-functorial-monomorphism`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `5a4bb8918b76ae3d749c448c18253c50f9a6ac5bd552cd8655b34673d59055c1`.
Exact terminal item hash: `cb8b39bf5854b338cb5afad49f9a59d68f7c5afa0834a07d440bc22dd990bac5`.
Exact terminal context hash: `634de340114a6e1c76fbb395cdcc05486fcdf279db4f56f4e0025db34b2d0a10`.

Currency note: the item bytes remain unchanged; this context hash was refreshed
after the later transfinite-iteration item on the same A page was independently
repaired.

## Material inspected

I read the current lemma, the one-step pushout definition, the published
pushout-of-a-monomorphism corollary, and the published AB5-implies-AB4 theorem;
the A/B page pair; the owning batch-8 manifest, source coverage, notes, batch
and merged contracts, refuter scope, and risk report; both frozen judge
rejections; both exact Alpha adjudications and defect-ledger rows; and Alpha's
two repair reports.

The first rejection correctly identified the missing preservation of a
possibly infinite coproduct of monomorphisms. Alpha added the AB5-implies-AB4
dependency and cited it. The second rejection correctly required local
smallness so that the subobjects and hom-classes defining the index `S_M` form
a set. Alpha added local smallness to the statement, Given, and fact.

## Authoritative verification

I checked the construction against the Stacks Project,
`https://stacks.math.columbia.edu/tag/05AB`. The proof of Theorem 19.11.7 forms
the same set-indexed pushout over all `N subset U` and all maps `N -> M`, states
that `M |-> bold M(M)` is functorial, and obtains functorial injective maps
`M -> bold M(M)`. The same proof later uses the bottom copy of `U` to extend
each indexed subobject map.

## Mathematical determination

Alpha's second repair is correct. Local smallness and well-poweredness make
`S_M` a set, so the required coproducts exist. Each map `N -> U` in the left
vertical coproduct is monic; AB5 implies AB4, hence their small coproduct is
monic. Its pushout is the canonical map `eta_M`, so `eta_M` is monic. For a
morphism `g:M -> M'`, the induced map of pushouts satisfies
`bold M(g) eta_M = eta_(M') g`, proving naturality. Finally, restricting the
lower pushout map to the copy of `U` indexed by `(N,phi)` gives `h` with
`h i_N = eta_M phi`, which is the required one-step extension.

I independently wrote the naturality and extension equations explicitly,
added the already-used AB5-implies-AB4 theorem to the stale batch manifest,
and synchronized the zero-object, empty-index, zero-category, and no-choice
boundary records in both proof-contract carriers. The risk tool rates the item
`moderate` with score 3, so no Step-6 high/critical Alpha review was required;
the terminal contract now records the complete review. No dependency item was
edited while resolving this queue position.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-8 and merged proof contracts: zero errors and zero warnings for
  the item.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Risk report: moderate, score 3, no required-review error.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-8 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
