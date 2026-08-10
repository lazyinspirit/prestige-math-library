# frontier-10 independent Step-6 reader — batch 5

**Role:** independent reader, not an author or judge  
**Pages:** `fubini-and-change-of-variables` (25 items) and
`fubini-and-change-of-variables-examples` (13 items)  
**Scope read:** all 38 items, every Facts/Assumptions block, every numbered proof
or verification step, every declared dependency's actual Definition or
Statement, both page files, and the three batch artifacts  
**Reader disposition:** four fatal finding families and the nonfatal findings
below were repaired on disk. These are proposed repairs only; Alpha must
confirm, refute, or extend them.

## Fatal findings and repairs

### F1 — false finite-cover upper bound

**Item:** `lem-finite-jordan-cover-sum-bounds`  
**Severity:** fatal

The original upper-bound clause constrained $M_i$ only when $E\cap E_i$ was
nonempty, but allowed a negative coefficient on a cover member disjoint from
$E$. For example, take $E=E_1=[0,1]$, $h=0$, $M_1=0$,
$E_2=[2,3]$, and $M_2=-1$. The asserted inequality becomes $0\le-1$.

The Statement now requires every $M_i\ge0$. The proof now extends $h$ and the
indicators to a common rectangle, so the pointwise majorant is valid both on
and off $E$. The lower-bound and signed-restriction arguments now explicitly
use boundary-cell control, indicator integrability, and linearity. Statement
and proof provenance were changed to `ai-altered`.

### F2 — Cavalieri was used before its measurability hypothesis

**Item:** `thm-linear-images-scale-jordan-content-by-absolute-determinant`  
**Severity:** fatal

The original elementary-shear step invoked Cavalieri to prove content
preservation before proving that the shear image was Jordan measurable.
`cor-cavalieri-principle-for-jordan-content` assumes the target set is already
bounded Jordan, so that invocation was circular. The subsequent rectangular-
figure squeeze did not license the earlier use.

The repaired proof first treats every elementary matrix and its inverse as
Lipschitz homeomorphisms, proves
$\partial(E_0F)=E_0(\partial F)$, and uses null-boundary preservation to obtain
Jordan measurability. Coordinate permutations and scalings are then handled by
inner/outer rectangular figures, while Cavalieri is used for a shear only after
its image is known Jordan. Proof provenance is now `ai-altered`.

### F3 — local distortion took content of images not shown Jordan

**Item:** `lem-local-c-one-volume-distortion`  
**Severity:** fatal

The original proof passed from the near-identity cube sandwich to content
bounds for $H(C)$ and then to every Jordan $E\subseteq Q$ without licensing
Jordan measurability of those images. The cited near-identity lemma gives
containments and injectivity, not that missing conclusion. Leibman Lemma 5.5.6
proves the cube case using boundary-null control; it does not by itself state
the stronger every-Jordan-subset clause used here.

The repaired proof derives a local bi-Lipschitz homeomorphism, extends the local
Lipschitz restriction by coordinatewise clamping, maps the null boundary of
each Jordan subset to a null boundary, and only then takes content. Inner and
outer cube figures, injectivity, finite additivity, and linear scaling now give
the two distortion bounds. Statement and proof provenance are now
`ai-altered`.

### F4 — determinant/Euclidean statements omitted the positive dimension domain

**Items:** `def-jacobian-determinant-of-a-c-one-map`,
`lem-finite-jordan-cover-sum-bounds`,
`thm-linear-images-scale-jordan-content-by-absolute-determinant`,
`cor-parallelepiped-content-is-the-absolute-determinant`,
`lem-near-identity-c-one-maps-sandwich-cubes`,
`lem-local-c-one-volume-distortion`,
`thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`,
`lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set`,
`lem-bounded-open-jordan-sets-have-compact-grid-exhaustions`,
`thm-change-of-variables-for-compact-jordan-sets`,
`def-support-and-compactly-supported-riemann-integral-in-rn`,
`lem-compactly-supported-riemann-integral-is-well-defined`,
`cor-change-of-variables-for-compactly-supported-functions`, and
`cor-change-of-variables-on-bounded-open-jordan-sets`  
**Severity:** fatal as a systematic domain defect

The cited determinant interfaces are stated only for finite size $n\ge1$, and
the near-identity estimate contains $q/\sqrt n$, which is undefined at $n=0$.
The affected Statements or Definitions did not exclude that boundary. Each now
states $n\ge1$ explicitly. No claim about zero-dimensional determinant or
Jordan content was added.

## Nonfatal findings and repairs

1. `lem-product-grid-bounds-for-section-integrals` attributed product-cell
   regrouping and Darboux-sum formulas only to the section definition. Exact
   grid, Darboux-sum, and finite-sum facts and step tags were added.
2. `thm-riemann-fubini-on-product-rectangles` used content-zero covers and
   linearity in the exceptional-section step without citing either. Both facts
   and their exact uses were added.
3. `thm-jordan-fubini-by-sections` claimed bounding-rectangle independence
   while citing a definition whose text deferred that result to the theorem
   itself. The proof now cites the actual published well-definedness lemma.
4. `thm-fubini-over-a-region-between-continuous-graphs` used closed-and-bounded
   compactness without a fact licensing Heine--Borel. The exact dependency and
   fact were added.
5. `thm-change-of-variables-for-compact-jordan-sets` used continuous-on-compact
   integrability and the finite cover bounds only through compressed prose.
   Both exact facts were added. Its source title was corrected to Lebl Theorem
   10.7.2, and statement provenance was changed to `ai-altered` because the
   library's bounded-integrand equivalence is an adaptation rather than the
   literal source formulation.
6. `cor-change-of-variables-for-compactly-supported-functions` asserted
   continuity of the inverse without citing the inverse function theorem. The
   dependency, fact, and local-to-global patching sentence were added.
7. `cor-change-of-variables-on-bounded-open-jordan-sets` did not separate the
   empty set before invoking a nonempty compact extreme-value result, and it
   asserted boundedness of $|\det Dg|$ on $\overline U$ without licensing the
   continuity chain. The empty case and the $C^1$-entries/polynomial-
   determinant/finite-algebra/extreme-value chain were added.
8. `cor-one-dimensional-change-of-variables-with-absolute-derivative` asserted
   the derivative sign from monotonicity too quickly and initially used only
   forward quotients, which do not control the right endpoint from the stated
   interval monotonicity. The proof now uses inward difference quotients at
   both endpoints and the ordinary interior limit.
9. `ex-riemann-integrable-function-with-dense-nonintegrable-sections` called the
   rational exceptional heights dense but did not prove they were not content
   zero. The verification now observes that every finite closed-interval cover
   of the rationals covers their closure $[0,1]$ and has total length at least
   one.
10. `ex-hyperspherical-coordinate-jacobian` compressed a block-determinant
    induction into an appeal to multiplicativity that did not license the block
    formula. The determinant definition and an explicit two-map factorization,
    block computation, and induction step were added; the seam-free box is now
    stated with the exact angular interval used in the recovery argument.
11. Twenty-one item source titles used stale Leibman §6.1 numbering even though
    the current cited PDF and the batch harvest place the material in §5.5.
    Those titles were corrected item by item: Lemma 5.5.1 for the finite-cover
    bound, Lemmas 5.5.2--5.5.4 for linear scaling, Lemma 5.5.4 for
    parallelepipeds, Lemma 5.5.5 for the near-identity cube lemma, Lemma 5.5.6
    for local distortion, Theorem 5.5.7 for compact change of variables, and
    §5.5 for the surrounding definitions, corollaries, and coordinate examples.
    The remaining stale Lebl 10.6.6 title in the one-dimensional corollary was
    also corrected to 10.7.2.
12. The page manifest had eleven dependency lists that no longer matched the
    authored frontmatter: repeated integration, graph regions, finite-cover
    bounds, linear scaling, local distortion, compact support, bounded-open
    change of variables, and the four polar/cylindrical/spherical/
    hyperspherical examples. The manifest was synchronized. The proof contract
    was rebuilt from the current Facts and numbered proof steps, including all
    changed source quotations and uses; the strict contract now checks all
    35 proof-bearing items with no error or warning.

These are nonfatal under the 30-second rule individually, except where they
form part of the fatal proof repairs above.

## Batch-9 determinant seam

I opened the current authored Definition or Statement for every batch-9 edge;
there are 15 dependency occurrences in batch 5. The repeated occurrences are
the determinant definition, determinant multiplicativity, and determinant-
polynomial corollary.

- `def-determinant-of-a-square-matrix` is a commutative-ring definition for
  $n\ge1$ using the finite Leibniz sum. Its three batch-5 uses preserve that
  domain.
- `thm-determinant-under-elementary-row-operations` gives the three exact
  ring-level effects, without assuming invertibility. The linear-scaling proof
  uses only those effects.
- `thm-determinant-multiplicative` is ring-level and same-size. Its uses in the
  inverse Jacobian and hyperspherical factorization specialize to real
  matrices.
- `thm-invertible-matrices-factor-into-elementary-matrices` is the real
  invertible-matrix factorization used only in the invertible branch.
- `thm-real-square-matrix-invertible-iff-determinant-nonzero` is the exact real
  equivalence needed in the singular branch, including the required direction
  from noninvertibility to zero determinant.
- `thm-gaussian-elimination-produces-row-echelon-form`,
  `thm-invertible-matrix-theorem`,
  `cor-a-row-reduction-is-a-product-of-elementary-matrices`, and
  `cor-elementary-matrices-are-invertible` license the zero-row reduction and
  the invertible codomain change with their stated field hypotheses.
- `cor-determinant-is-a-polynomial-in-the-matrix-entries` is for fixed
  $n\ge1$ over the reals and licenses only the continuity-by-polynomial uses in
  the compact and bounded-open proofs.
- I also opened `cor-invertible-matrix-has-unit-determinant`. It states only
  that an invertible matrix over a commutative ring has unit determinant. Batch
  5 does not cite it and does not substitute it for the real nonzero-determinant
  equivalence.

No remaining ring-versus-field inflation or wrong implication direction was
found after the repairs.

## Per-item read record

### A page — `fubini-and-change-of-variables`

1. `def-sections-and-iterated-riemann-integrals` — read the full Definition and
   its three dependencies; empty sections, exceptional completions, and both
   coordinate directions are explicit. No concrete defect found.
2. `lem-product-grid-bounds-for-section-integrals` — read the Statement, all
   three proof steps, and four dependencies. Nonfatal licensing repair 1 was
   applied.
3. `thm-riemann-fubini-on-product-rectangles` — read all clauses and proof
   steps, including the exceptional-section modification. Nonfatal repair 2
   was applied; both coordinate-block directions remain proved.
4. `cor-repeated-riemann-integrals-on-rectangles` — read the induction through
   coordinate orders and the continuity/integrability dependencies. No
   mathematical defect found; its already-authored Heine--Cantor dependency
   was restored to the manifest.
5. `cor-riemann-integral-of-a-product-function` — checked section constants,
   zero values, and integral linearity. No concrete defect found.
6. `cor-finite-section-support-forces-zero-integral` — checked finite-set
   content zero for every section and both section directions. No concrete
   defect found.
7. `thm-jordan-fubini-by-sections` — checked zero extension, empty sections,
   exceptional values, and both bounding rectangles. Nonfatal repair 3 was
   applied.
8. `cor-cavalieri-principle-for-jordan-content` — checked the constant-one
   specialization and comparison outside the exceptional set. No concrete
   defect found.
9. `thm-fubini-over-a-region-between-continuous-graphs` — checked coincident
   graphs, endpoint segments, compactness, boundary nullity, and vertical
   sections. Nonfatal repair 4 was applied.
10. `def-jacobian-determinant-of-a-c-one-map` — checked the determinant and
    total-derivative interfaces. Fatal domain repair F4 and the Leibman source-
    number repair were applied.
11. `lem-finite-jordan-cover-sum-bounds` — counterexampled the original upper
    clause and checked restriction integrability and signed bounds. Fatal
    repairs F1 and F4 and the source-number repair were applied.
12. `thm-linear-images-scale-jordan-content-by-absolute-determinant` — checked
    every elementary-map and singular-matrix dependency, including the batch-9
    seam. Fatal repairs F2 and F4 and the source-number repair were applied.
13. `cor-parallelepiped-content-is-the-absolute-determinant` — checked the unit
    cube image in singular and invertible cases. Fatal domain repair F4 and the
    source-number repair were applied.
14. `lem-near-identity-c-one-maps-sandwich-cubes` — checked norm conversion,
    nonempty completeness, $r>0$, $q<1$, both containments, and injectivity.
    Fatal domain repair F4 and the Lemma 5.5.5 citation repair were applied.
15. `lem-local-c-one-volume-distortion` — checked normalization, boundary
    images, arbitrary Jordan subsets, finite additivity, and both distortion
    inequalities. Fatal repairs F3 and F4 and the source-number repair were
    applied.
16. `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan` — checked
    compactness, the image-boundary inclusion, finite local Lipschitz cover,
    clamped extensions, and null preservation. Fatal domain repair F4 and the
    source-number repair were applied.
17. `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set` — checked the
    empty compact set, intrinsic compactness, finite subcover, and null
    rectangular faces. Fatal domain repair F4 and the source-number repair were
    applied.
18. `lem-bounded-open-jordan-sets-have-compact-grid-exhaustions` — checked the
    empty set, increasing common refinement, compact capture, and boundary-
    layer remainder. Fatal domain repair F4 and the source-number repair were
    applied.
19. `thm-change-of-variables-for-compact-jordan-sets` — checked both directions
    of integrability, signed functions, the inverse derivative identity,
    compact/Jordan images, and all local-to-global bounds. Fatal domain repair
    F4 and nonfatal repair 5 were applied; both external theorem numbers were
    corrected.
20. `cor-jordan-content-under-a-c-one-diffeomorphism` — checked the constant-
    one specialization, including empty $K$. No mathematical defect found; the
    source-number title was corrected and its contract quote followed the
    repaired main Statement.
21. `def-support-and-compactly-supported-riemann-integral-in-rn` — checked
    empty support, existence of a nondegenerate bounding rectangle, and the
    bounded rather than improper convention. Fatal domain repair F4 and the
    source-number repair were applied.
22. `lem-compactly-supported-riemann-integral-is-well-defined` — checked the
    common-rectangle extension, coordinate cuts, and empty support. Fatal
    domain repair F4 and the source-number repair were applied.
23. `cor-change-of-variables-for-compactly-supported-functions` — checked
    compactness of the inverse support, support of the transformed function,
    and global integral notation. Fatal domain repair F4, nonfatal repair 6,
    and the source-number repair were applied.
24. `cor-change-of-variables-on-bounded-open-jordan-sets` — checked empty
    domains and both exhaustion remainders. Fatal domain repair F4, nonfatal
    repair 7, and the source-number repair were applied.
25. `cor-one-dimensional-change-of-variables-with-absolute-derivative` —
    checked increasing and decreasing cases, endpoints, orientation, and the
    absolute factor. Nonfatal repair 8 and the Lebl theorem-number repair were
    applied.

### B page — `fubini-and-change-of-variables-examples`

1. `ex-riemann-integrable-function-with-a-nonintegrable-section` — recomputed
   all lower and upper section integrals and the two-dimensional Darboux gap.
   No concrete defect found.
2. `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` —
   recomputed the existing iteration and the nonintegrable sections; the
   claimed implication is genuinely refuted. No concrete defect found.
3. `ex-riemann-integrable-function-with-dense-nonintegrable-sections` — checked
   the Thomae tail estimate, both coordinate directions, and the dense rational
   exceptional family. Nonfatal repair 9 was applied.
4. `ex-fubini-computes-the-integral-of-x-exp-xy` — differentiated the proposed
   antiderivatives, checked the $x=0$ endpoint by continuity, and recomputed the
   repeated integral. No concrete defect found.
5. `ex-cavalieri-shear-preserves-jordan-content` — checked every translated
   section and the linear determinant cross-check. No mathematical defect
   found; the source title was corrected to Leibman Lemma 5.5.2.
6. `ex-parallelepiped-content-from-a-matrix` — recomputed the determinant and
   the geometric base-times-height value. No mathematical defect found; the
   source title was corrected to Leibman Lemma 5.5.4.
7. `ex-polar-change-of-variables-on-an-annular-sector` — recomputed the
   Jacobian, injectivity on the closed seam-free sector, and the displayed
   integral. No mathematical defect found; the source title and manifest
   dependency list were synchronized.
8. `ex-cylindrical-coordinate-jacobian` — recomputed the block determinant and
   recovered all three parameters on the stated box. No mathematical defect
   found; the source title and manifest dependency list were synchronized.
9. `ex-spherical-coordinate-jacobian` — recomputed $r^2\sin\phi$, verified
   positivity away from the poles, and recovered the angles without a seam.
   No mathematical defect found; the source title and manifest dependency list
   were synchronized.
10. `ex-hyperspherical-coordinate-jacobian` — checked the base case, powers of
    every sine factor, nonvanishing, and recursive parameter recovery.
    Nonfatal repair 10, the source-number repair, and manifest synchronization
    were applied.
11. `cex-polar-coordinates-are-not-globally-injective` — checked the seam pair,
    the zero-radius edge, and the determinant. The counterexample is concrete;
    no defect found.
12. `cex-omitting-the-absolute-jacobian-reverses-sign` — recomputed the image,
    oriented integral, and absolute-factor integral for the reflection. The
    counterexample is concrete; no defect found.
13. `cex-noninjective-change-of-variables-double-counts` — checked that
    $x\mapsto x^2$ has nonzero derivative on both components, has the same
    image twice, and gives source integral $6$ versus image integral $3$. The
    counterexample is concrete; no defect found.

## Source and artifact checks

- Lebl's current HTML/PDF was checked at the iterated-integral, Jordan-set, and
  change-of-variables sections. The operative change-of-variables theorem is
  10.7.2.
- Leibman's cited PDF was checked at §5.5. The finite-cover, linear, near-
  identity, local-distortion, and compact change-of-variables results are
  numbered 5.5.1 through 5.5.7 as recorded above.
- The A-page summary has exactly two accurate prose paragraphs; the B page has
  no authored summary body. No title asserts more than its repaired Statement
  and proof.
- Nothing in the assigned batch or its dependency closure was unavailable for
  inspection. No factual check was left incomplete.

## Validation record

To be filled from the final post-repair gate run. Alpha must independently
adjudicate the mathematics even if every mechanical gate is green.
