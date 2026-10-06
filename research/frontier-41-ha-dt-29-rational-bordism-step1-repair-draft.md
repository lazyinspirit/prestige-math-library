# Rational bordism Step-1 repair draft

Run: `frontier-41-ha-dt-29`. This is an isolated repair proposal for the two
owner-held DT-19 items named below. It does not edit `batch-11.pages.json`,
readiness records, plans, or controller state. It assumes the staged AT item
`thm-rational-hurewicz-for-highly-connected-cw-complexes` and the moved shared
definition `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`
are incorporated and proved as drafted.

## Finding

The missing stable rational dimension bound can be proved from the new finite-
range rational Hurewicz theorem and the already published Thom-cohomology,
field-duality, and rational BSO-cohomology interfaces. The proof must include
the Thom-space CW/connectivity argument, the compatible stabilization square,
and rationalization of the stable homotopy colimit. Those steps are supplied
below. No Serre finiteness theorem, finite generation of homotopy groups,
Milnor--Stasheff Theorem 18.3, or unproved comparison modulo torsion is needed.

One useful tightening is to avoid citing a general homology Thom isomorphism:
the existing local-coefficient theorem is a cohomological Thom isomorphism.
Over `Q`, its finite-dimensional degree pieces and natural field-duality give
the required homology dimensions and show the stable homology transition maps
are isomorphisms. This also verifies the transition maps, rather than just
comparing dimensions at unrelated finite ranks.

## Exact local calculation for the spanning proposition

Write `T_r = Th(γ_r^+)` for the rank-`r` level of the shared oriented Thom
prespectrum and `B_r = BSO(r)`. Its coordinate-first structure map is
`α_r : S¹ ∧ T_r → T_{r+1}`. All coefficients below are `Q` unless specified.

Fix `n ≥ 0`. Choose any `r ≥ n+2`; in particular `r ≥ 2` and `n+r ≥ 2`.

1. **The finite-rank Thom spaces are in the rational Hurewicz range.** The
   published lifted-Schubert supplier gives `B_r` its CW weak topology; each
   lifted characteristic disk is a Schubert disk with an orthonormal frame
   for the pulled-back oriented tautological bundle, by the published
   Schubert-frame construction. Over a `d`-cell, the Thom disk/sphere pair is
   therefore the product pair `(D^d×D^r,D^d×S^{r−1})`. In the Thom quotient
   its relative cell is
   `(D^d×D^r)/((∂D^d×D^r)∪(D^d×S^{r−1}))≅S^{d+r}`. Its attaching boundary
   lies over the lower base skeleton or in the collapsed sphere subbundle.
   The lifted Schubert cells have finite boundary support. Over each finite
   base subcomplex the disk bundle is assembled from these finitely many
   product disk pairs by their attaching maps. A compact test into the full
   disk bundle projects to a compact subset of `B_r`, hence lies over a finite
   subcomplex by the published compact-image lemma. Thus these finite
   attachments give the weak topology on the disk bundle; the quotient map
   collapsing the sphere subbundle gives the same weak attachment topology
   on `T_r`. The published finite-boundary attachment lemma then gives the
   based CW structure on `T_r`, with one
   basepoint and cells only in dimensions `r+d`. Thus every non-basepoint
   cell relative to the basepoint has dimension at least `r`.
   Apply `lem-high-relative-cells-do-not-change-lower-homotopy` to
   `(T_r,*)` (the inclusion of the basepoint into `T_r`) to get
   that `T_r` is `(r−1)`-connected. The basepoint is a CW vertex. The staged
   theorem `thm-rational-hurewicz-for-highly-connected-cw-complexes`, with
   `c=r` and `i=n+r`, applies exactly because
   `r ≤ n+r ≤ 2r−2`; the last inequality is equivalent to `r ≥ n+2`.
   Therefore the actual Hurewicz map is an isomorphism
   `π_{n+r}(T_r) ⊗ Q → H_{n+r}(T_r;Q)`. Since `n+r>0`, reduced and ordinary
   homology agree here. No Hurewicz injectivity at the upper endpoint
   `2r−1` is used.

2. **The rational homotopy groups commute with the stable colimit.** By the
   definition of the stable homotopy group of this sequential prespectrum
   and the universal Pontryagin--Thom theorem,
   `Ω_n^SO ≅ colim_r π_{n+r}(T_r)` as abelian groups. Tensoring with `Q`
   commutes with this sequential colimit: present the colimit as the cokernel
   of `1−shift` on `⊕_r π_{n+r}(T_r)`, use that `−⊗Q` is exact, and use its
   direct-sum comparison. The tail `r≥n+2` is cofinal, so

       Ω_n^SO ⊗ Q  ≅  colim_{r≥n+2}(π_{n+r}(T_r)⊗Q).

   Hurewicz is natural for the suspension followed by `α_r`. Hence the
   isomorphisms in step 1 form a map of sequential systems, and

       Ω_n^SO ⊗ Q  ≅  colim_{r≥n+2} H_{n+r}(T_r;Q).                 (1)

   This is a colimit argument, not an inference from equal unstable ranks.

3. **Thom cohomology identifies the transition map.** Let
   `i_r : B_r → B_{r+1}` classify `γ_r^+ ⊕ ε¹`; this is the base map used in
   the fixed-coordinate structure map. The normalized Thom classes and the
   ordered suspension normalization in the shared definition give the
   commuting Thom square

       H^n(B_{r+1};Q) --i_r^*--> H^n(B_r;Q)
                | Thom                 | Thom
                v                      v
       H̃^{n+r+1}(T_{r+1};Q) --σ⁻¹ α_r^*--> H̃^{n+r}(T_r;Q).

   Here `α_r^*` first lands in `H̃^{n+r+1}(S¹∧T_r;Q)` and `σ⁻¹` is the
   inverse of the reduced-cohomology suspension isomorphism. The quotient
   comparison between the Thom disk/sphere pair and reduced Thom
   cohomology is the published
   `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`.
   The oriented Thom isomorphism applies to `γ_r^+` over the CW base `B_r`
   with coefficient ring `Q`; the normalization of `α_r` fixes the suspension
   sign. Thus the bottom map has exactly the variance displayed and is
   identified with `i_r^*`.

4. **The BSO groups and their maps are stable in degree `n`.** By the
   published rank-by-rank presentation
   `thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes`,
   for rank `s>n` the degree-`n` piece has no Euler generator (whose degree is
   `s`) and no Pontryagin generator of degree above `n`. The available
   generators `p_j`, `4j≤n`, occur in every such rank: the formulas are
   `Q[p_1,…,p_m]` for `s=2m+1` and `Q[p_1,…,p_{m-1},e]` for `s=2m`;
   when `s>n`, the degree-`n` monomials use only the common `p_j` with
   `4j≤n`. Naturality and stability of the Pontryagin classes identify
   `i_r^*p_j=p_j`. Consequently `i_r^*:H^n(B_{r+1};Q)→H^n(B_r;Q)` is an
   isomorphism for every `r≥n+1`, in particular throughout the tail used in
   (1). This checks both parity changes in rank and excludes the Euler class
   by the explicit strict inequality `r>n`.

5. **Duality gives stable homology and its rank.** The published field-duality
   corollary gives natural evaluation isomorphisms
   `H^q(Y;Q)≅Hom_Q(H_q(Y;Q),Q)` for every space, with no finite-type
   hypothesis. Thom cohomology and the polynomial presentation show that
   `H̃^{n+r}(T_r;Q)` is finite-dimensional. Therefore `H_{n+r}(T_r;Q)` is
   finite-dimensional of the same dimension: if a vector space had an
   infinite basis, AC and its coordinate functionals would give an
   infinite-dimensional dual. Naturality of evaluation identifies the dual
   of the homology transition in (1) with the cohomology transition in step
   3, after the suspension isomorphism. Since the latter is an isomorphism,
   every homology transition in (1) is an isomorphism. The colimit in (1) is
   thus any one of its tail groups, and

       dim_Q(Ω_n^SO ⊗ Q) = dim_Q H^n(B_r;Q),   r≥n+2.

   If `n=4k`, the degree-`4k` monomials in `p_1,p_2,…` are exactly
   `p_1^{a_1}p_2^{a_2}…` with `Σ j a_j=k`; these are indexed by partitions of
   `k`, so the dimension is `p(k)`. For `4∤n`, no monomial has degree `n`, so
   the dimension is zero. At `k=0`, there is one degree-zero monomial and
   the published `prop-zero-dimensional-bordism-groups` identifies the
   positively oriented point with the generator of `Ω_0^SO≅Z`.

6. **Conclude the unchanged proposition.** For `k≥1`, the existing
   `lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism`
   supplies `p(k)` independent classes in degree `4k`. Step 5 gives dimension
   exactly `p(k)`, so those classes form a basis. For `k=0`, step 5 and the
   zero-dimensional computation give the empty product, the positively
   oriented point, as the basis. The product theorem for bordism makes the
   assignment of polynomial generators `x_j↦[CP^{2j}]` a graded ring map;
   the monomials in degree `4k` are the partition-indexed basis just proved,
   and both source and target vanish in other positive degrees. This proves
   the original full polynomial-algebra statement without weakening it.

## Consumer theorem: Pontryagin-number detection

Keep the current statement of
`thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`.
For `n=4k`, write a rational bordism class uniquely in the basis from the
repaired proposition. The matrix of its Pontryagin numbers on that basis is
the square invertible matrix proved in
`lem-projective-space-products-have-triangular-characteristic-number-matrix`
(the lemma's Newton change-of-basis argument includes its diagonal factors).
Characteristic-number bordism invariance makes every row a well-defined
linear functional on `Ω_{4k}^SO⊗Q`; tensor balancing extends the integral
evaluation by `q·p_I[M]`. Thus the vector of all Pontryagin numbers is an
isomorphism to the finite product indexed by partitions of `k`. Applying it
to `[M]-[N]` proves equality of rational bordism classes exactly when all
numbers agree.

If `4∤n`, the repaired proposition gives `Ω_n^SO⊗Q=0`; there is no degree-`n`
Pontryagin monomial, and the corresponding empty product is the zero vector
space. In degree zero the empty monomial evaluates to the signed point count,
with value `1` on the positively oriented point; this is the direct `1×1`
identity case. Finally, if all Pontryagin numbers of `M` vanish, the
theorem gives `[M]⊗1=0`. The local rationalization lemma's fraction
criterion says exactly that an element `z` of an abelian group satisfies
`z⊗1=0` iff some positive integer `s` kills `z` in the group. Therefore
`s[M]=0`; the bordism-group definition identifies this with the assertion
that the disjoint union of `s` copies of `M` is an oriented boundary. This
retains the original rational-only claim and proves its multiple-boundary
consequence.

## Proposed metadata and dependency edits

These are proposed direct `deps` additions; retain all current dependencies,
statements, sources, and page claims.

For `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
add:

- `thm-rational-hurewicz-for-highly-connected-cw-complexes` (new AT A-page
  supplier; application with `c=r`, `i=n+r`, `r≥n+2`);
- `lem-rationalization-is-exact-and-commutes-with-singular-homology` (new AT
  A-page supplier; tensor/colimit step and coefficient identification);
- `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` (the
  moved shared AT definition; finite levels and fixed structure maps);
- `lem-high-relative-cells-do-not-change-lower-homotopy` (Thom connectivity);
- `lem-oriented-grassmannian-has-two-lifted-schubert-cells` (the oriented
  base CW structure);
- `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` (the
  characteristic disks and their frame trivializations);
- `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`;
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`;
- `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`;
- `thm-thom-isomorphism-for-oriented-vector-bundles`;
- `thm-naturality-and-uniqueness-of-thom-classes`;
- `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`;
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`;
- `prop-zero-dimensional-bordism-groups` (the `k=0` generator).

Keep its existing direct dependencies on the universal Pontryagin--Thom
correspondence, rational BSO presentation, Pontryagin stability, the
projective-product matrix/independence suppliers, and the bordism product
theorem. The new support A page must be a page prerequisite of DT-19, ordered
before it; these item edges do not create a new dependency on DT-20 and do not
alter the DT-9/DT-19 boundary.

For `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`, retain
all existing dependencies and add the same local
`lem-rationalization-is-exact-and-commutes-with-singular-homology` directly,
because its positive-multiple conclusion uses that lemma's exact fraction
criterion. Also add `prop-zero-dimensional-bordism-groups`, which identifies
the degree-zero class used to evaluate the empty Pontryagin monomial. Its
existing dependency on the repaired spanning proposition supplies the
dimension and vanishing results; no new external theorem is needed.

## Suggested replacement strategy fields

For `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`:

> The projective-space products are already independent, giving the lower
> bound. For the upper bound in degree `n`, use the shared oriented Thom
> prespectrum `T_r=Th(γ_r^+)`. Its locally constructed Thom CW structure has
> no cells below degree `r`, so the high-relative-cells lemma makes it
> `(r−1)`-connected. For every `r≥n+2`, the local rational Hurewicz theorem
> applies at `i=n+r` and gives `π_{n+r}(T_r)⊗Q≅H_{n+r}(T_r;Q)`. Rationalization
> is exact and commutes with the sequential stable colimit, and Hurewicz
> naturality makes these isomorphisms compatible with the structure maps.
> The cohomological Thom isomorphism identifies the pullback under the
> coordinate-first structure map with restriction
> `H^n(BSO(r+1);Q)→H^n(BSO(r);Q)`. By the published finite-rank rational BSO
> presentation and stable naturality of the Pontryagin classes, this is an
> isomorphism for `r≥n+1`: all degree-`n` classes are polynomials in the
> common `p_i` with `4i≤n`, while the Euler class has degree `r>n`. The
> degree-`n` Thom cohomology is finite-dimensional; natural field duality
> therefore makes each tail homology transition an isomorphism and identifies
> the stable dimension with that finite-rank cohomology dimension. It is
> `p(k)` for `n=4k` and zero otherwise. The `p(k)` independent projective
> products therefore form a basis for `k≥1`; the published zero-dimensional
> bordism computation supplies the positively oriented point for `k=0`.
> Bordism product compatibility then gives the stated graded polynomial-ring
> isomorphism. All ranges, stabilization maps and coefficient changes are
> checked above; no homology Thom theorem, finite-generation claim, or
> comparison modulo torsion is imported.

For `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`:

> In degree `4k`, use the repaired projective-space basis and the invertible
> Pontryagin-number matrix of its product classes. Bordism invariance and
> tensor balancing make each Pontryagin number a linear functional on
> `Ω_{4k}^SO⊗Q`; the resulting square matrix is invertible, so the number map
> is an isomorphism and detects equality. If `4` does not divide `n`, the
> spanning proposition gives `Ω_n^SO⊗Q=0` and there are no degree-`n`
> Pontryagin monomials. In degree zero the empty monomial evaluates to `1` on
> the positively oriented point. If all numbers of `M` vanish, injectivity
> gives `[M]⊗1=0`; the local rationalization criterion supplies a positive
> integer `s` with `s[M]=0`, so the disjoint union of `s` copies of `M` is an
> oriented boundary. This proves exactly the rational statement and makes no
> integral detection claim.

The source locators appropriate to the records are: Hatcher,
*Vector Bundles & K-Theory*, Theorem 3.16, printed pp.94–96, for the finite-rank
rational BSO presentation (already the source of its published local item);
May, *A Concise Course in Algebraic Topology*, Ch.23 §5, printed pp.194–196,
for Thom classes/isomorphism and stabilization (the local proof uses the
published Thom interfaces); Hatcher, *Algebraic Topology*, §4.2 Theorem 4.32,
printed pp.366–369, only for the integral first Hurewicz supplier (the finite
rational range is proved in the new local AT item); and Milnor–Stasheff,
*Characteristic Classes*, Theorem 18.6 and Lemma 18.7, printed pp.211–216,
or Freed, *Bordism: Old and New*, Lecture 10, printed pp.88–91, for the
Pontryagin–Thom correspondence (locally proved by its batch item). Freed
Theorem 12.9/(12.13), printed pp.103–105, is a comparison locator only, not
an imported proof. Milnor–Stasheff Theorem 18.3, printed pp.207–208, is not
used: its finite-complex epsilon comparison and cited Serre finiteness proof
are unnecessary here.

## Remaining gap and integration condition

There is no remaining mathematical supplier gap in the upper bound once the
staged rational Hurewicz item and the moved shared prespectrum definition are
proved and registered with the stated direct dependencies. The proof does
not use a homology Thom theorem as a black box, nor an unproved stable
comparison. The current Step-1 records must remain open until the local
argument is incorporated into the proposition and its dependent consumer,
the new AT A-page prerequisites are registered, and the corresponding item
readiness records are recomputed against those exact dependencies. This draft
is not itself a readiness certification or independent review.
