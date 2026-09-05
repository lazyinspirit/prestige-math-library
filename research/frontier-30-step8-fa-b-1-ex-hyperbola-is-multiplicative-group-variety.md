# Final-adjudicator evidence: `ex-hyperbola-is-multiplicative-group-variety`

## Decision

Disposition: `accepted-after-review`.

I independently reviewed the final item bytes (SHA-256
`ec7373682dbe7fb419f695e788a3c1881ddb91a0675b34d2a10d42272ac11020`),
all three current dependencies, the companion A/B pages, the batch-12 plan and
coverage records, the Step-6 reader/refuter records, both judge rejections,
both Alpha adjudications, and the Alpha closure-recovery account. No further
item, dependency, page, proof-contract, or metadata repair is required.

## Mathematical basis

The coordinate-ring computation is correct: the mutually inverse
substitutions give
`k[x,y]/(xy-1) \cong k[t,t^{-1}]`. The hyperbola is nonempty (it contains
`(1,1)`), and the Laurent polynomial ring is a domain, so the cited
domain/irreducibility criterion applies and makes `H` a classical affine
variety under this library's convention.

On the principal open `D_{A^1}(t)`, the cited principal-open theorem makes
`t^{-1}` regular. Hence `q(u)=(u,u^{-1})` has regular coordinates and satisfies
the target equation. Projection `p(x,y)=x` is regular and lands in the
principal open because `xy=1` forces `x` to be nonzero. The displayed
computations give `p q = id` and `q p = id`, with `x^{-1}=y` on `H`. This
direct regular-map proof does not use the affine-morphism anti-equivalence and
therefore does not require an independently supplied object-level
identification of the principal open before proving the isomorphism.

The first judge rejection was correctly repaired by adding an algebraically
closed base field and the Axiom of Choice required by the local
principal-open theorem. The second judge rejection was correctly repaired by
removing the unlicensed affine anti-equivalence inference, adding
`thm-affine-variety-prime-coordinate-ring`, checking that `q` lands in `H`,
and computing both composites explicitly.

The B page is the examples companion to the A page that fixes regular
functions, morphisms, and principal affine opens in the classical register.
The item is prose under `## Example`, with no proof-like section, so it is
correctly outside the batch-12 proof-contract scope. The Step-6 reader found
the example coherent, and the batch refuter recorded no finding against it.
The impact and audit-manifest entries concerning the former affine
anti-equivalence edge are frozen historical risk records; that edge is no
longer present in the final item.

## Authoritative source verification

- J. S. Milne, *Algebraic Geometry*, Proposition 3.32:
  https://www.jmilne.org/math/CourseNotes/AG.pdf . It states that a nonzero
  principal open with its restricted regular-function sheaf is an affine
  variety with localized coordinate ring, and then gives the exact example
  `a \mapsto (a,1/a)` as an isomorphism from the punctured affine line onto
  `XY=1`.
- The Stacks Project, Section 26.5, *Affine schemes*:
  https://stacks.math.columbia.edu/tag/01HR . It records that standard opens
  `D(f)` are affine and are represented by the localization `R_f`, confirming
  the localization/regular-function mechanism used by the local dependency.

These sources were opened and checked for the stated support; no search
snippet or aggregator was used as mathematical authority.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-hyperbola-is-multiplicative-group-variety.md` — exit 0 (`0 checked, 0 failing`, as expected for a prose example).
- `node tools/rendercheck.mjs` on the item and both companion pages — exit 0; all three files render cleanly.
- `node tools/content-policy.mjs research/frontier-30-batch-12.pages.json` — exit 0 (`30` scoped items, no errors or warnings).
- `node tools/depcheck.mjs --quiet` — exit 0; all references resolve and the `433` reported warnings are standing whole-corpus warnings unrelated to this item.

