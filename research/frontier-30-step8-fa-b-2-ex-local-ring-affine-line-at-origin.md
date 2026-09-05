# Final-adjudicator evidence: `ex-local-ring-affine-line-at-origin`

## Decision

Disposition: `accepted-after-review`.

I independently reviewed the final item bytes (SHA-256
`8fde9d2b36ed31e8aae803ac1fa0a602e81ac59fcbbaa6a65d30c0e22cc3d140`),
both current dependencies, the companion A/B pages, the batch-12 plan and
coverage records, the proof-contract scope, the Step-6 reader/refuter and
impact records, both judge rejections, both Alpha adjudications, and the Alpha
closure-recovery account. No further item, dependency, page, proof-contract,
or metadata repair is required.

## Mathematical basis

For `R=k[t]` and `p=(t)`, localization at `p` inverts precisely the
polynomials outside `(t)`, which are exactly the polynomials `g` satisfying
`g(0) != 0`. Since `k[t]` is a domain, the localization embeds in `k(t)`, and
therefore
`k[t]_(t)={r in k(t): r=f/g for some f,g in k[t] with g(0)!=0}`.
The current existential wording is essential: a rational function can have
both admissible and inadmissible presentations; for example, `1=1/1=t/t` in
`k(t)`.

The unique maximal ideal of `k[t]_(t)` is `(t)k[t]_(t)`. An element belongs to
it exactly when it admits an admissible presentation `f/g` with `f(0)=0` and
`g(0)!=0`. Quotienting by this ideal evaluates the admissible fraction at zero
and gives `k`. Thus the displayed local ring, its maximal ideal, and its
residue field are all described correctly and in a presentation-safe way.

The first judge rejection was correctly repaired by explicitly taking `k`
algebraically closed and assuming the Axiom of Choice required by the local
localization theorem. In the page's classical affine convention,
`A^1_k` has coordinate ring `k[t]`, a domain, and is the standard classical
affine variety. The second rejection was correctly repaired by replacing the
false phrase "its denominator" with existence of an admissible presentation
and by expressing the maximal ideal with the same existential condition.

This prose example is on the examples companion page to the A page containing
both cited local-ring interfaces. It has no proof-like heading, so it is
correctly absent from the batch-12 proof-contract scope; the dependency
theorem itself remains covered by that strict proof contract. The Step-6
reader called the other current example bodies coherent, the refuter recorded
no finding against this item, and the impact record confirms both current
direct dependency interfaces were rechecked.

## Authoritative source verification

- Michael Artin, *Notes for a Course in Algebraic Geometry*, §5.1.10:
  https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf . It gives the
  exact affine-line example at `t=0` and describes the local ring as fractions
  `f(t)/g(t)` with `g(0) != 0`.
- The Stacks Project, Section 10.9, *Localization*:
  https://stacks.math.columbia.edu/tag/00CM . Definition 10.9.1 constructs a
  localization from equivalence classes of numerator-denominator pairs, and
  Example 10.9.8 identifies localization at a prime with denominators outside
  that prime. This supports the repaired existential presentation wording.
- The Stacks Project, Section 10.18, *Local rings*:
  https://stacks.math.columbia.edu/tag/07BH . It states that `R_p` is local
  with maximal ideal `pR_p` and identifies its residue field with the fraction
  field of `R/p`; for `R=k[t]` and `p=(t)`, this is `k`.

These sources were opened and checked for the stated support; no search
snippet or aggregator was used as mathematical authority.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-local-ring-affine-line-at-origin.md` — exit 0 (`0 checked, 0 failing`, as expected for a prose example).
- `node tools/rendercheck.mjs` on the item and both companion pages — exit 0; all three files render cleanly.
- `node tools/proof-contract.mjs research/frontier-30-batch-12.proof-contracts.json --strict` — exit 0 (`11/11` contracted proof items checked).
- `node tools/content-policy.mjs research/frontier-30-batch-12.pages.json` — exit 0 (`30` scoped items, no errors or warnings).
- The queue-wide dependency check run immediately before item 1 was recorded exited 0; its `433` warnings are standing whole-corpus warnings unrelated to either queued item.

