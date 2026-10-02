# Frontier 37 owner 30, batch 2: independent Minkowski audit

Audit date: 2026-10-01. This report records an independent audit of all 31
selected item bodies and their actual dependency routes. No previous review
receipt was used as evidence. The selected manifest has 31 item entries. A
read-only `audit-manifest` pass reports 286 current relationships with no
missing sources or unresolved targets. The referenced supplier files were
present and marked published when checked; the live writer caveat below applies
to one supplier.
The initial pass was report-only. The root later authorized six batch-2 proof
repairs and matching selected metadata; those repairs are recorded below. No
ordinary review receipt or shared gate was run.

## Authorized correction

In `items/def-full-euclidean-lattice-and-covolume.md`, the basis-independence
argument substitutes `C=BA` into `B=CA'` to obtain `B=BAA'`, then cancels
the invertible `B` to get `AA'=I_n`. Substituting `B=CA'` into `C=BA` gives
`C=CA'A`, so cancellation gives `A'A=I_n`. The report's earlier displayed
product `C=CAA'A` was a transcription error; the item itself has the correct
order. Its selected manifest strategy already records that the two integer
change matrices are inverses; no contract or manifest entry was affected.

The accompanying discrete-spanning assertion is supported by Milne, *Algebraic
Number Theory*, Ch. 4: Lemma 4.14 (pp. 73–74) gives the equivalence between
discreteness and finite intersection with bounded sets; Proposition 4.15
(pp. 74–75) proves that a subgroup of a finite-dimensional real vector space
is a lattice exactly when it is discrete. For a subgroup spanning
`R^n`, that lattice has rank `n`, so it is full; the converse follows from a
real basis. The item's locator covers pp. 73–75; the exact route is Lemma 4.14
and Proposition 4.15. Milne's Remark 4.16(a), p. 75, supplies fundamental
parallelotope volume and basis independence.

Changed item SHA-256:

```text
593c9c826427ff96d1921be161dbd4a086a9538e0d1f063c5d0a4b1892ea95f0  items/def-full-euclidean-lattice-and-covolume.md
```

## Body and dependency audit

The Choice column records the statement's actual assumption and direct
`def-axiom-of-choice` edge, not a claim that every cited supplier itself needs
Choice. The 24 Choice-dependent entries explicitly assume Choice and declare
the direct dependency. The seven entries without that assumption have no
Choice edge; their reviewed proofs do not make a simultaneous selection from
an arbitrary family. In particular, the ring/ideal lattice theorem states
no-Choice explicitly and uses one finite induction with a single lift at each
stage.

| Selected item | Choice | Actual proof route checked | Audit result |
| --- | --- | --- | --- |
| `def-minkowski-embedding-of-a-number-field` | No | Signature and number-field definitions; the full embedding determinant theorem supplies a nonzero determinant for a rational basis. | Prior repair remains unchanged; no new defect found. |
| `def-full-euclidean-lattice-and-covolume` | No | Matrix determinant definition; integer basis changes in both directions give inverse integer matrices; Milne 4.14–4.16 supports the discrete and volume remarks. | Matrix order corrected above. |
| `lem-full-lattice-fundamental-domain-and-bounded-points` | Yes | Inverse basis coordinates, integer/fractional splitting, half-open box volume, linear change of variables, and bounded inverse-coordinate ranges. | Route is complete under its stated Choice/Countable Choice hypothesis. |
| `lem-blichfeldt-lattice-point-principle` | Yes | Fundamental-domain tiling, countability of integer coordinates, translated measurable pieces, and countable additivity in one bounded tile. | Route is complete under its stated hypotheses. |
| `thm-minkowski-convex-body-theorem` | Yes | Half-scale the measurable symmetric convex body, apply Blichfeldt, then take the midpoint of a point and the negative of the other. | Route is complete. |
| `cor-minkowski-convex-body-theorem-at-equality` | Yes | Apply the strict theorem to dilates; bounded lattice intersection supplies a repeated nonzero point, and closedness gives its limit in the body. | Route is complete; the countable selections are covered by Choice. |
| `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice` | No | Bounded inverse basis coordinates give both finite bounded lattice intersections and the positive lower bound for nonzero lattice vectors; the body contains a ball and has a spanning dilate. | Repaired: local finite-coordinate argument is choice-free; inverse-map supplier is a direct dependency. |
| `lem-successive-minima-attainment-and-adapted-flag` | Yes | Approximate each infimum, pass to one recurring subset of the finite lattice set in `(t₀+1)C`, then construct an adapted basis by least indices. | Repaired: sequence bound, fixed finite set, interior shrink, and `p=0` case are explicit. |
| `lem-triangular-borel-maps-scale-euclidean-volume` | Yes | Factor into tail-dependent shears and coordinate dilations; section integrals and Tonelli give the volume factor. | Route is complete. |
| `lem-minkowski-successive-minima-volume-deformation` | Yes | Relative centroids define an odd triangular map; the flag excludes collisions modulo `2Λ`; triangular volume scaling gives the product formula. | Repaired: affine-hull centroid, signed Tonelli moments, fibre Jacobian, paired-slice symmetry, and positive-dilation exhaustion are explicit. |
| `thm-minkowski-second-theorem-on-successive-minima` | Yes | The deformation and Blichfeldt give the upper bound; an adapted-vector cross-polytope and integer index give the lower bound. | Route is complete once the deformation lemma's gaps are repaired. |
| `thm-ring-of-integers-and-ideals-are-full-lattices` | No | The embedding determinant gives real bases; the finite induction for subgroups of `Z^n` gives ideal bases without Choice; real block multiplication handles principal and fractional ideals. | Prior repair remains unchanged; route is sound. |
| `thm-covolume-of-an-ideal-lattice` | No | The integral ideal basis change has index equal to the absolute integer determinant; the discriminant change-of-basis formula and embedding determinant give the covolume. | Route is complete; integral-ideal scope is explicit. |
| `lem-archimedean-norm-bound` | Yes | Sign splitting, polar coordinates in each complex coordinate, and a weighted simplex integral give volume; AM–GM gives the norm bound. | Route is complete. |
| `thm-small-element-in-a-number-field-ideal` | Yes | Choose the body parameter so the archimedean region has volume `2^n` times the ideal covolume; the equality theorem and embedding norm formula give the bound. | Route is complete. |
| `thm-minkowski-bound-for-ideal-classes` | Yes | Clear a denominator in the inverse fractional ideal, choose a small integral element, and form `(β)b^{-1}` in the original class; ideal norm multiplicativity gives the bound. | Route is complete; class direction is correct. |
| `lem-finitely-many-number-field-ideals-of-bounded-norm` | No | Lagrange gives `m O_K ⊆ a`; ideals of each norm inject into the finite ideal set of `O_K/mO_K`. | Route is complete. |
| `thm-finiteness-of-the-number-field-class-group` | Yes | The Minkowski bound makes the class map from a finite set of bounded-norm ideals surjective. | Route is complete. |
| `cor-class-group-generated-by-small-primes` | Yes | Factor each bounded integral representative in the Dedekind domain; norm multiplicativity bounds each prime factor. | Route is complete subject to the published factorisation supplier's final writer check. |
| `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one` | Yes | Bound the Minkowski numerical constant below one by the two-sided pi estimate and a decreasing auxiliary sequence. | Route is complete. |
| `cor-no-nontrivial-number-field-is-unramified-over-q` | Yes | Reduce the trace form modulo a prime; CRT decomposes the residue algebra; nilpotents and finite separable fields characterize degeneracy. | The batch body supplies the route; the published criterion supplier is under-specified as noted below. |
| `lem-bounded-conjugates-give-finitely-many-integral-polynomials` | No | Elementary symmetric coefficient bounds put each integer coefficient in a finite interval. | Route is complete. |
| `lem-hermite-minkowski-bounded-primitive-integral-element` | Yes | Construct a large-coordinate convex window, apply strict Minkowski, use the field norm and embedding restriction fibres to prove primitivity. | Repaired: `π>2` has a finite-remainder proof, and the totally complex quadratic case uses rational-integrality and the degree-two tower. |
| `thm-hermite-minkowski-finiteness` | Yes | The primitive-element lemma reduces fields to a finite set of bounded-root monic integer minimal polynomials. | Route is complete after the primitive-element case is repaired. |
| `ex-minkowski-bound-for-gaussian-integers` | Yes | The class bound is below two, so every representative has norm one; Dedekind plus trivial class group gives PID. | Route is complete. |
| `ex-class-group-of-q-sqrt-minus-five` | Yes | Explicit quotient identifies the norm-two ideal; ideal products, norm, and the Minkowski bound leave two classes. | Route is complete. |
| `ex-class-group-of-q-sqrt-ten` | Yes | Explicit quotients identify the norm-two and norm-three ideals; principal products relate their classes; the bound leaves those representatives. | Route is complete. |
| `ex-class-group-from-small-prime-ideals` | Yes | Mod-three irreducibility, a resultant discriminant, squarefree power-basis criterion, and norm exclusions prove the class group trivial. | Repaired: the critical values are `f(−c)=4c/5−1<0` and `f(c)=−4c/5−1<0`; the signature route is explicit. |
| `ex-discriminant-lower-bound` | Yes | The same constant estimate independently shows the principal ideal norm forces discriminant magnitude greater than one. | Route is complete. |
| `ex-no-everywhere-unramified-extension-of-q` | Yes | The discriminant criterion and integer prime divisor argument rule out absolute discriminant one. | Route is complete; the batch corollary spells out the criterion route. |
| `cex-minkowski-constants-change-under-scaled-embedding` | Yes | Compare the unscaled and scaled Gaussian lattices and a radius-`6/5` disc against their covolumes. | Repaired: finite Gregory–Leibniz remainders prove `3<π<4`, giving both area comparisons. |

## Exact batch-item findings and repair routes

1. **Successive-minima definition — repaired.** In
   `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice.md`,
   positivity now follows from the inverse basis map rather than the false
   unit-coordinate shell bound. If `B` is a lattice basis matrix and
   `|B⁻¹x|≤K|x|` with `K≥1`, then each nonzero `m∈Zⁿ` has `|m|≥1`, so
   `|Bm|≥1/K`. With `R=max_{x∈C}|x|>0`, `Bm∈tC` implies
   `t≥1/(KR)>0`. The remark's separate finite-intersection claim is proved
   locally: a bounded set has bounded inverse coordinates, and only finitely
   many integer coordinate vectors lie in those coordinate ranges. This keeps
   that definition's use choice-free while citing its existing bounded-linear
   map dependency.
2. **Attainment and adapted flag — repaired.** In
   `lem-successive-minima-attainment-and-adapted-flag.md`, choose
   `t_m∈E_i` with `λ_i≤t_m<λ_i+1/m`; since `λ_i≤t_0`, every `t_m<t_0+1`.
   The common finite set is therefore `(t_0+1)C∩Λ`, not the possibly smaller
   `t_0C∩Λ`. A recurring subset gives attainment after closedness. The interior
   shrink uses continuity with `0<ε<ε₀<λ_i`; for `p=0` it does not form an
   empty minimum, while for `p>0` it also takes ε below the finite positive
   gaps to smaller minima. This yields the stated dimension contradiction.
3. **Successive-minima deformation — repaired.** The centroid fact in
   `lem-minkowski-successive-minima-volume-deformation.md` is now proved in an
   affine hull by transporting to `K₀⊂R^m` with an affine isometry and applying
   strict separation there. In the Borel-coordinate proof, the fibre Jacobian
   is `sqrt(det(AᵀA))>0`, constant in the tail coordinates, and cancels in the
   centroid ratio. Signed moments are split before Tonelli. Oddness follows
   from the paired identity `F_j(−x)=−F_j(x)` and reflection of relative
   measure; no individual slice is claimed symmetric. The interior exhaustion
   uses only the positive scales `1−1/k` for `k≥2`. Its collision proof uses
   the nonzero `a_k`-coordinate to exclude both the earlier span and the
   smaller-minimum span.
4. **Primitive Hermite–Minkowski element — repaired.** In
   `lem-hermite-minkowski-bounded-primitive-integral-element.md`, the
   `N=1` Gregory–Leibniz partial sum is `2/3`; its remainder
   `∫₀¹x⁴/(1+x²)dx` is at least `1/64` by restricting to `[1/2,1]`, so
   `π/4>2/3` and `π>8/3>2`. The norm argument is split by signature: for
   `r₂≥2`, at least one later complex factor makes the product strictly less
   than one; for `r₂=1`, the nonzero window point cannot be a rational integer
   because `|Re τ₁(α)|<1`, and the degree-two tower gives `K=Q(α)`. The
   separate bound `|τ₁(α)|²<D+2≤B+2` applies in that case, including its
   conjugate. The proof handles empty products explicitly.
5. **Quintic class-group example — repaired.** For `f=X⁵−X−1` and
   `c=5^{-1/4}`, the critical values are `f(−c)=4c/5−1<0` and
   `f(c)=−4c/5−1<0`. Together with the derivative signs and end behavior,
   these prove exactly one real root and signature `(1,2)`.
6. **Scaled-embedding counterexample — repaired.** The counterexample now
   cites the finite-remainder Gregory–Leibniz theorem. The `N=7` partial sum
   `33976/45045>3/4` and positive remainder give `π>3>25/9`; the `N=2`
   partial sum `13/15` and negative remainder give `π<4`. Hence
   `36π/25>4` and `36π/25<144/25<8`, establishing both area thresholds.

## Actual supplier routes and supplier findings

The 31-entry `batch-2.pages.json` manifest records the planned item-to-direct-
supplier mapping. A separate read-only comparison found six manifest-only
dependencies; after that comparison, root authorized their carrier-only
removal, with no item-body edits. Their IDs and reasons are recorded below.
The independently followed load-bearing supplier chains
were:

* **Real embedding and determinant:** the signature and field definitions feed
  `thm-discriminant-as-an-embedding-determinant`; its nonzero full embedding
  determinant yields real independence only after the complex-pair
  realification factor is included. This is the route used by the repaired
  embedding and ring/ideal lattice items.
* **Lattice geometry:** the determinant definition, bounded inverse linear
  maps, integer-part lemma, half-open-box measure, linear change of variables,
  product/Tonelli measure, and Countable Choice interface feed the fundamental
  domain and Blichfeldt items; Blichfeldt and dilation/convexity feed the strict
  and equality Minkowski theorems; the successive-minima flag and centroid
  deformation feed the second theorem.
* **Integral and fractional ideal lattices:** the free-rank theorem for
  `O_K`, the actual embedding determinant, cyclic subgroups of `Z`, and the
  local block matrices for complex multiplication give explicit bases in
  `thm-ring-of-integers-and-ideals-are-full-lattices.md`. The ideal covolume
  theorem then uses the integral-basis discriminant, finite ideal quotient,
  determinant/index theorem, and discriminant change-of-basis formula.
* **Class-group bounds:** the archimedean region's polar-coordinate volume and
  AM–GM norm bound feed the small-element theorem; ideal covolume and field norm
  give its exact constant; invertibility, fractional-ideal operations, class
  group multiplication, and integral ideal norm formulas give the class
  representative route. Bounded ideals and Lagrange then give class-group
  finiteness. The small-prime generation item additionally uses the published
  Dedekind unique-factorisation theorem.
* **Discriminant and ramification:** the trace/norm definitions, integral
  basis, prime-power ideal factorisation, CRT, trace-pairing criterion, and
  separability of finite residue fields are the route for the ramification
  corollary. Its batch body supplies these algebra steps locally rather than
  relying on the published criterion's compressed proof.
* **Hermite finiteness:** the bounded primitive-element lemma uses the
  embedding/covolume route, norm integrality, and restriction fibres of
  embeddings in a finite tower; characteristic zero gives separability. The
  bounded-coefficient polynomial lemma then yields the finite set of fields.

Three supplier proof/dependency issues were confirmed by reading the supplier
bodies themselves:

1. **`cor-ring-of-integers-is-a-dedekind-domain.md`**, proof step 1.1, originally
   applied the integral-closure theorem to `Z⊂K` without establishing the
   premises. The currently visible repair gives a direct A-page route, with no
   B-example prerequisites: `lem-subgroups-of-z-are-cyclic` shows every ideal
   of `Z` is generated by one integer, which supplies Noetherianity; the
   quotient-by-prime and maximality arguments establish dimension one; and
   `def-dedekind-domain` supplies the normal Noetherian dimension-one
   characterization; the rational-integrality result establishes that `Z` is
   integrally closed. The number-field definition and finite-extension degree
   give finite degree, while
   `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` and
   `cor-algebraic-extensions-of-perfect-fields-are-separable` give
   separability. Its proof then applies the integral-closure theorem to the
   now-established Dedekind base. The published writer owns this supplier;
   root will verify the stable file after that writer drains. The batch
   class-bound item consumes this corollary under Choice.
2. **`thm-ramified-primes-and-the-number-field-discriminant.md`**, proof step
   1.1, asserts that trace-pairing degeneracy is equivalent to the residue
   algebra failing to be a product of separable fields, hence to a ramification
   index exceeding one, without giving the algebra route. The batch
   `cor-no-nontrivial-number-field-is-unramified-over-q.md` independently
   spells it out: factor `pO_K`, use CRT, show each local factor is a field
   exactly for exponent one (otherwise use invertibility to produce a nonzero
   nilpotent), and compare the trace form. A nilpotent has zero trace after
   multiplication by every element; a product of finite separable residue
   fields has nondegenerate trace pairing. This completes the batch consumer's
   route, while the published supplier still merits its own proof expansion.
3. **`thm-number-field-integral-ideal-factorisation-in-zf.md`** is a direct
   supplier to the batch ramification corollary. A defect observed in an
   earlier live read of its Step 6.1 (selecting a maximal ideal from a
   collection that included the whole quotient ring) is corrected: it selects
   from proper ideals containing the proper annihilator and uses least finite
   codes. Root integration reports the completed stable item hash
   `626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`.
   No edit was made to it by this batch worker.

## Disposition of 17 deferred or out-of-scope source rows

I checked the 17 `out-of-scope` rows in the existing batch-2 coverage harvest
against its recorded full-text inspection, the selected destination items, and
their actual proof routes. This is a disposition audit only; it does not reopen
source fetches or change coverage decisions.

| Source result | Disposition and exact destination or route | Claim boundary |
| --- | --- | --- |
| Milne, Prop. 4.1, relative ideal norm (Ch. 4 p. 69) | Excluded: the assigned route uses the published absolute norm interface, `def-absolute-norm-of-an-ideal`, `thm-ideal-norm-is-multiplicative`, and `thm-principal-ideal-norm-is-absolute-field-norm`. | No arbitrary relative ideal-norm claim is made. |
| Milne, Prop. 4.2(a), absolute norm multiplicativity (Ch. 4 pp. 69–70) | Reuse the published `thm-ideal-norm-is-multiplicative` as a supplier to the class-bound and explicit ideal-product arguments; no duplicate proof is assigned. | No unsupported norm formula is imported. |
| Milne, Example 4.7, small-discriminant cubic fields (Ch. 4 p. 71) | No destination: the B page selects Gaussian, `Q(√−5)`, `Q(√10)`, and the quintic `ex-class-group-from-small-prime-ideals` instead. | No cubic class-group computation is asserted. |
| Milne, Cor. 4.10, polynomial-order discriminant `±1` (Ch. 4 p. 72) | The field-level result goes to `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one`; `ex-discriminant-lower-bound` supplies the B illustration. | The stronger monic-polynomial/order reformulation is not claimed. |
| Milne, Remarks 4.11–4.12, Hilbert class fields and class towers (Ch. 4 pp. 72–73) | No destination; the selected class-group finiteness route does not use class field theory. | No existence or Galois-description claim about Hilbert class fields is made. |
| Milne, Remark 4.20, four-square application (Ch. 4 pp. 76–77) | No destination; the source's additive arithmetic application is outside the selected number-field class-group inventory. | No four-square claim is made. |
| Milne, Lem. 4.25, finite AM–GM (Ch. 4 p. 79) | Reuse published `thm-am-gm`, cited by `lem-archimedean-norm-bound`, which feeds the small-element and class-bound results. | The batch does not reprove or strengthen AM–GM. |
| Milne, Thm. 8.42, extensions unramified outside finite `S` (Ch. 8 p. 151) | No destination; the A-page Hermite route is fixed-degree: `lem-hermite-minkowski-bounded-primitive-integral-element` followed by `lem-bounded-conjugates-give-finitely-many-integral-polynomials`. | No relative-field or bounded-ramification finiteness theorem is claimed. |
| Stein, Prop. 6.3.4, norm multiplicativity (§6.3 p. 75) | Same published destination, `thm-ideal-norm-is-multiplicative`, used by the class-bound and ideal examples. | No second norm-multiplicativity proof is asserted. |
| Stein, Def. 7.1.1, class group (§7.1 p. 77) | Reuse published `def-ideal-class-group-of-a-domain`, a direct dependency of the class-bound, finiteness, and class-group examples. | The definition is not re-proved or broadened. |
| Stein, Examples 7.3.2–7.3.4, Gaussian, `Q(√5)`, `Q(√−6)` (§7.3 pp. 84–85) | The Gaussian computation maps to `ex-minkowski-bound-for-gaussian-integers`; the selected `Q(√−5)`, `Q(√10)`, and quintic examples use the method. The `Q(√5)` and `Q(√−6)` calculations have no destination. | No class-group result for either extra quadratic field is asserted. |
| Conrad–Landesman, Examples 25.4–25.8, quadratic class groups (§25 pp. 129–134) | The relation-finding method informs `ex-class-group-of-q-sqrt-ten`; the extra quadratic fields are not in the seven-example B inventory. | No result for those additional fields is imported. |
| Conrad–Landesman, Example 26.1, `Q(√82)` (§26 pp. 134–136) | No destination; it needs a separate unit-group and norm-obstruction argument, whereas the selected real quadratic example is `Q(√10)`. | No `Q(√82)` class-group claim is made. |
| Conrad–Landesman, Thm. 28.5, bounded ramification over a fixed base (§28 p. 147) | No destination; it is a relative extension theorem and is not used by the fixed-degree Hermite proof route above. | No bounded-ramification extension claim is made. |
| Green, Cor. 3.2, Bohr sets contain proper progressions (§3.7 pp. 28–29) | Reserved for the future sumset/Freiman seam. This batch supplies only the reusable `thm-minkowski-second-theorem-on-successive-minima` input. | No Bohr-set or progression conclusion is asserted here. |
| Henk, Conj. 1.4, lattice-point enumerator product bound (§1 p. 2) | No destination. It is marked as a conjecture by the source and is not a premise or conclusion in this batch. | No conjectural bound is promoted to a theorem. |
| Henk, Thm. 1.5 and Lem. 2.1, lattice-point enumerator estimate (§§1–2 pp. 3–5) | No destination; the selected second theorem proves a continuous volume product bound, not this stronger discrete point count. | No stronger lattice-point-count estimate is asserted. |

## Out-of-scope manifest-only dependencies

The six repaired item entries match their live `deps` arrays. A read-only
comparison against current item frontmatter found the following six extra
manifest dependencies on other entries. Root then authorized removing only
these six manifest edges; their item bodies and contracts were not changed.

| Item | Manifest-only dependency | Why the current body does not use it directly |
| --- | --- | --- |
| `lem-blichfeldt-lattice-point-principle` | `thm-countable-additivity-and-set-function-continuity` | Fact [F4] uses countable additivity as a defining property of `def-measure`; it does not cite the separate generic theorem. Removed from manifest. |
| `thm-small-element-in-a-number-field-ideal` | `thm-choice-implies-dependent-implies-countable-choice` | The proof uses the AC-assumed equality-form Minkowski theorem and makes no countable selection. Removed from manifest. |
| `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one` | `thm-number-field-discriminant-is-well-defined-and-nonzero` | The proof derives `1≤c√|d_K|` with `c>0` and `c<1`, which itself forces the needed positivity and strict bound. Removed from manifest. |
| `thm-hermite-minkowski-finiteness` | `thm-choice-implies-dependent-implies-countable-choice` | The proof uses AC for the primitive-element lemma, then a finite polynomial set; it has no countable-choice step. Removed from manifest. |
| `ex-class-group-of-q-sqrt-minus-five` | `thm-unique-factorisation-of-ideals-in-dedekind-domains` | The proof uses explicit quotient ideals, products, norms, and the Minkowski bound; it does not factor arbitrary ideals. Removed from manifest. |
| `ex-class-group-of-q-sqrt-ten` | `thm-unique-factorisation-of-ideals-in-dedekind-domains` | The proof identifies explicit norm-2 and norm-3 quotient ideals and their products; it does not factor arbitrary ideals. Removed from manifest. |

## Selected dependency changes and final item hashes

The six repaired manifest entries now match the live direct dependencies.
Dependency changes within the authorized repair set were:

| Item | Direct dependency change | Supplier home |
| --- | --- | --- |
| `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice` | Added `lem-euclidean-linear-maps-have-matrices-and-are-bounded` for the inverse-basis-map bound used in both finiteness and positivity remarks. | `the-total-derivative` |
| `lem-successive-minima-attainment-and-adapted-flag` | No dependency change. | Its existing finite-bounded-lattice supplier is `lem-full-lattice-fundamental-domain-and-bounded-points` on the Minkowski A page. |
| `lem-minkowski-successive-minima-volume-deformation` | Removed stale `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`; the relative centroid proof directly cites `thm-strict-separation-of-a-point-from-a-closed-convex-set`. | Removed supplier: `convex-and-semicontinuous-functions-on-rn`; retained separation supplier: same page. |
| `lem-hermite-minkowski-bounded-primitive-integral-element` | Added `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder`, `cor-rational-algebraic-integers-are-integers`, and `thm-tower-law-for-finite-field-extensions`. | Respectively `pi-the-equivalent-characterizations`, `chain-conditions-and-semisimple-modules`, and `algebraic-extensions-degree-and-finite-fields`. |
| `ex-class-group-from-small-prime-ideals` | No dependency change. | Its existing direct suppliers remain those listed in its selected manifest entry. |
| `cex-minkowski-constants-change-under-scaled-embedding` | Added `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder` for both strict bounds on `π`. | `pi-the-equivalent-characterizations` |

Final SHA-256 hashes of the six item bodies:

```text
b1038b5da3f42fec9cb8d3b873bc5d46356f581ad45755d40c70c051ff1e3025  items/def-successive-minima-of-a-convex-body-with-respect-to-a-lattice.md
f8c7986afc3b504740dae8c645352315aaef6acf3a5ad98270387fc6d7d8e2ed  items/lem-successive-minima-attainment-and-adapted-flag.md
6def8a58a4eb653051c4e14302969b68baa5992e766cc46bcf8009e410219396  items/lem-minkowski-successive-minima-volume-deformation.md
cd506cbce38aa083d2d6d5922ae92e5f1188a166a27dabb9eb4a0b085636446b  items/lem-hermite-minkowski-bounded-primitive-integral-element.md
12317288ac236e2e18512a855641bb4e70ad7bfcf9dd4b289954c56cd3aadc84  items/ex-class-group-from-small-prime-ideals.md
97ed354bfeae73e1edb5f342557e4d574935ba5c9d17e33c2bff63ceb3d66046  items/cex-minkowski-constants-change-under-scaled-embedding.md
```

## Scoped validation

| Check | Result |
| --- | --- |
| Canonical precheck on six selected items | Pass: five proof-bearing items checked; the definition has no proof section. |
| Rendercheck on six selected items | Pass: all six frontmatter blocks and math spans render. |
| Strict proof contracts on six selected entries | Pass: 6/6 checked, 0 errors, 0 warnings. |
| `manifest-deps` on batch 2 | Pass: 31 items, 0 missing arrays, 0 errors. |
| Selected manifest/frontmatter comparison | Pass: the six repaired entries and six carrier-only entries match current `deps`. |
| `audit-manifest` on batch 2 | Pass: 286 relationships, 0 missing-source or unresolved defects. |

No ordinary review receipt or shared gate was run.

## Scope and status

The six authorized batch-2 items and only their selected contract entries were
repaired or synchronized; a subsequent root authorization also removed the six
listed manifest-only edges. No coverage source mapping or contract quote needed
modification for those removals. The batch-2 notes and this report record the
changes. The earlier repaired items
(`def-minkowski-embedding-of-a-number-field` and
`thm-ring-of-integers-and-ideals-are-full-lattices`) remain unchanged. No
published supplier or shared plan/ledger/state was edited. No ordinary review
receipt or shared gate was run; prior receipts were not used as evidence.

## Root stable-proof read

Root fully read all six final repaired item bodies. Clarified the interior
point variable in attainment step 1.2 as a universally quantified local
assertion used in steps 7.2–7.3. This does not change any Statement, Definition,
dependency, or contract quotation. Current attainment item SHA-256:
`a2ce50924843da4c924f86e6388fbb6d6378bab64fc5dad636656cbbc4c5faae`. Earlier scoped checks on this item predate this wording edit; the
new target-only precheck below verifies its canonical proof structure. Other
five final items retain the reported hashes and scoped checks.

Root target-only canonical precheck after that clarification: PASS, 1 checked,
0 failing. No gate or other-item recertification was run.
