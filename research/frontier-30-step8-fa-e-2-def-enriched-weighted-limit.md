# Final-adjudicator evidence: `def-enriched-weighted-limit`

Disposition: `accepted-after-review`

Source status: `familiar`. No external verification was needed. The variance and representing-object definitions of enriched weighted limits and colimits, and the use of a symmetry to form enriched opposites over the same base, are standard enriched-category theory familiar to the final adjudicator.

## Independent review

I inspected the current item and all three direct dependencies; its position on the A page `enriched-categories` and the B companion; the batch-9 page manifest, coverage entries, and notes; the absence of an item-level proof contract (appropriate for a definition); the Step-6/Step-7 context and size convention; both frozen judge rejections; both exact Alpha adjudications; and the two Alpha repairs.

The first frozen rejection correctly identified that the original right-closed hypothesis did not by itself define the enriched opposite `A^op` over the same monoidal category: reversing enriched composition requires reversing tensor factors. Alpha's first repair added symmetry, which supplies that interchange and makes both `W:A^op -> V` and `B(T-,B)` well typed.

The second frozen rejection correctly applied this page's explicit set-object convention. The cited self-enrichment theorem only constructs `V` as a `V`-category here when the collection of objects of `V` is a set. Alpha's second repair adds exactly that hypothesis before either weight is declared, so `W:A -> V` and the functor-category notation are now admissible in the library's foundations.

The variance is correct. For limits, `W:A -> V` has the same variance as `B(B,T-)`, and `{W,T}` represents the enriched hom-object from `W` to that covariant functor. For colimits, `W:A^op -> V` has the same variance as `B(T-,B)`, and `W star T` represents the displayed covariant hom-object in `B`. The isomorphisms have the expected enriched hom-object types, and the clause “whenever the enriched functor category and the displayed hom-object are formed” does not overclaim the relevant ends. The smallness and symmetry assumptions agree with the page's size and opposite conventions, while the comparison with the cited Set-weighted definition preserves the library's variance convention.

No statement, dependency, contract, or metadata repair is required.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/def-enriched-weighted-limit.md` passed.
- `node tools/rendercheck.mjs items/def-enriched-weighted-limit.md` passed.
- `node tools/depcheck.mjs --quiet` passed, with only repository-wide warnings unrelated to this item.

