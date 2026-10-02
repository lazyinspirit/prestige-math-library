# Degree base change and very-ampleness repair route

Run: `frontier-37-owner-30`

Scope: `thm-degree-two-g-line-bundle-basepoint-free`,
`thm-degree-two-g-plus-one-line-bundle-very-ample`, and their degree and
closed-immersion supplier routes. Report only; no item, carrier, receipt, or
gate was changed.

## Source and item check

I read the current statements, facts, proofs, and direct supplier interfaces
for both target theorems, then traced their degree and closed-immersion
dependencies. The recorded full-text Stacks Project harvest in
`frontier-37-owner-30-batch-8.notes.md` includes *Algebraic Curves* (tag 0BRV,
full-text hash prefix `c4e3d4c0fc533a3d`). In the available full text,
Lemma 22.3 (tag 0E3C) states global generation for degree at least `2g`, and
Lemma 22.5 (tag 0H2V) states very ampleness for degree at least `2g+1`. The
proof of Lemma 22.5 reduces to surjectivity on every length-two subscheme and
then invokes the length-two criterion and faithfully flat descent. Below I
spell out the length and local-ring arguments needed by the current item proofs
instead of treating either criterion as an unexplained supplier.

## Degree is preserved under every field extension

Let `C/k` be a smooth proper geometrically integral curve, `K/k` any field
extension, and `g:C_K→C` the projection. No separability, algebraicity, or
finiteness of `K/k` is assumed. For a closed point `x∈C`, the residue field
`E=κ(x)` is finite over `k`, but need not be separable. The base-changed
zero-dimensional scheme is
`x_K=Spec(E⊗_k K)`. Its coordinate ring is a finite Artinian `K`-algebra of
`K`-dimension `[E:k]`, possibly with nilpotents.

Write its Artinian decomposition as `E⊗_kK = ∏_y A_y`, over its finitely
many closed points. Each local Artin ring `A_y` has a composition series whose
simple factors are its residue field `κ(y)`. Therefore
`dim_K(A_y)=length_{A_y}(A_y)[κ(y):K]`, and summing gives
`[E:k]=Σ_y length_{A_y}(A_y)[κ(y):K]`. The morphism `C_K→C` is flat, so the
pullback of the effective Cartier divisor `x` is the effective Cartier
divisor `x_K`. At each `y`, `O_{C_K,y}` is a DVR and the coefficient of this
Cartier divisor is
`ord_y(x_K)=length_{O_{C_K,y}}(O_{x_K,y})=length_{A_y}(A_y)`:
in a DVR, if a local equation is a unit times a uniformizer to power `e`, its
quotient has length `e`. Consequently its weighted divisor degree is
`deg_K(x_K)=Σ_y ord_y(x_K)[κ(y):K]=[E:k]=deg_k(x)`.

Every divisor is a finite integral linear combination of closed points, so
additivity gives `deg_K(g^*D)=deg_k(D)` for every divisor `D`, including
negative coefficients. For an invertible sheaf `L`, choose a nonzero rational
section and its Cartier divisor `D`, so `L≅O_C(D)` by
`thm-line-bundle-rational-section-cartier-divisor`. Flat pullback and
`lem-pullback-cartier-divisor-line-bundle` give
`L_K≅O_{C_K}(g^*D)`. The Cartier-to-Weil identification on smooth curves then
gives
`deg_K(L_K)=deg_K(g^*D)=deg_k(D)=deg_k(L)`.

This explicitly handles inseparable residue extensions. For example, over an
imperfect field of characteristic `p`, if `a` is not a `p`th power, the
closed point on `P^1_k` cut out in its affine chart by `t^p-a` has a purely
inseparable residue field of degree `p`. Over an algebraic closure its divisor
is `p[α]`, one support point with multiplicity `p`, not `p` distinct points.
Its degree remains `p`. The earlier report’s separability assertion has been
corrected accordingly.

### Exact library route and outstanding closure

The route uses these existing interfaces:

- `def-degree-divisor-proper-curve` defines
  `deg_k(D)=Σ_x n_x[κ(x):k]` and supplies finite residue degrees; it does not
  assert separability.
- `def-divisor-smooth-proper-curve` and
  `thm-local-ring-smooth-curve-dvr` give the Cartier point divisor and DVR
  structure. `thm-cartier-weil-divisors-curves-agree` identifies its Weil
  coefficient with the local order.
- `thm-line-bundle-rational-section-cartier-divisor`,
  `def-pullback-cartier-divisor`, and
  `lem-pullback-cartier-divisor-line-bundle` provide the line-bundle,
  flat-pullback, and `O(g^*D)≅g^*O(D)` steps.
- `cor-degree-descends-picard-curve` is needed to make `deg(L)` independent
  of the chosen divisor representative. It appears transitively below the
  high-degree vanishing route through
  `thm-degree-positive-line-bundle-sections-zero-bound`, but the current
  target facts do not state that use alongside their base-change equality.
- `lem-proper-cohomology-field-extension` is published and covers arbitrary
  field extensions, but it preserves cohomology dimensions, not divisor or
  line-bundle degree.

The argument needs two short local proofs to be present in the relevant item
facts or suppliers: (i) a finite Artinian algebra's `K`-dimension is the sum
of its local lengths times residue degrees, by a composition series; and (ii)
the coefficient of an effective Cartier divisor on a smooth curve is the
length of its local quotient, by the DVR/uniformizer calculation above. The
current draft suppliers expose the right structures but do not yet provide a
closed, accepted dependency chain: `thm-line-bundle-rational-section-cartier-divisor`,
`def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle`,
`thm-cartier-weil-divisors-curves-agree`, and
`cor-degree-descends-picard-curve` are drafts; the Cartier/Weil and Picard
items still explicitly flag their supporting dictionary obligations. Thus
the route repairs the mathematical gap but does not certify those draft
suppliers.

## Application to the two thresholds

For both targets, genus is preserved by
`lem-proper-cohomology-field-extension` applied to `O_C`, since
`g=dim_k H^1(C,O_C)`. After base change to `bar k`, each closed point used in
the evaluation argument is rational, so subtracting that point or a
length-two divisor lowers degree by exactly one or two. The preceding length
calculation justifies the required input `deg(L_bar)=deg(L)` even when `k` is
imperfect.

For `thm-degree-two-g-line-bundle-basepoint-free`, if `deg(L)≥2g`, then for
each `p∈C(bar k)`,
`deg(L_bar(-p))=deg(L)-1≥2g-1>2g-2`. The high-degree supplier gives
`H^1(C_bar,L_bar(-p))=0`; the exact sequence
`0→L_bar(-p)→L_bar→L_bar|_p→0` therefore makes evaluation onto the fiber
surjective. This holds at every geometric point, hence `L_bar` is generated.
Faithful-flat descent of the coherent evaluation cokernel gives generation
over `k`. The sharper difference of `h^0` dimensions remains restricted to
algebraically closed `k`, where each point has residue degree one.

For `thm-degree-two-g-plus-one-line-bundle-very-ample`, if `deg(L)≥2g+1`,
then for distinct `p,q∈C(bar k)` and for every `p`, respectively,
`deg(L_bar(-p-q))≥2g-1>2g-2` and
`deg(L_bar(-2p))≥2g-1>2g-2`. The two exact sequences and high-degree
vanishing give surjections
`H^0(L_bar)→H^0(L_bar|_{p+q})` and
`H^0(L_bar)→H^0(L_bar|_{2p})`. The first quotient has dimension two and
separates `p,q`; at a smooth point, the second is
`L_p/m_p^2L_p`, also dimension two, and separates the value and first jet.
Explicitly, choose a section nonzero at `p` by global generation and a
section vanishing to order exactly one there by the `2p` surjection. Their
ratio has a nonzero linear term in a uniformizer, so the tangent map at `p` is
injective. The point-pair surjections separate all geometric points.

The current `lem-add-one-point-exact-sequence-line-bundle` supplies the
one-point sequences and their iteration over effective divisors, but it is
still a draft with flagged Cartier-sheaf uses. The proof should make explicit
that at a geometric smooth point the double-point quotient is
`O_{C_bar,p}/m_p^2` (after trivializing `L`), rather than cite the phrase
“first-order evaluations” without this local calculation.

## Separating geometric points and tangents implies closed immersion

The current [F5] of
`thm-degree-two-g-plus-one-line-bundle-very-ample` states the required
criterion but does not prove it from its listed suppliers. The exact route
below uses the existing proper/quasi-finite and closed-immersion suppliers and
includes the local algebra and descent steps inline. It does not invoke the
unproved phrase “finite, unramified, universally injective implies a closed
immersion.”

Let `f:X→P^r_k` be proper, with `X` a smooth proper geometrically integral
curve. Assume `f` is injective on geometric points and its tangent map is
injective at every geometric point.

1. The geometric point condition makes every geometric fiber have at most one
   point, hence dimension zero; `f` is quasi-finite. The published
   `thm-proper-quasi-finite-is-finite` makes `f` finite.
2. First pass to an algebraic closure `K=bar k`. For an affine chart
   `U=Spec R⊂P^r_K`, finiteness gives `f^{-1}(U)=Spec S` with `S` finite over
   `R`. Let `A` be the image of `R→S`, so `A` is the coordinate ring of the
   scheme-theoretic image on this chart and `A↪S`. At a closed point `y` of
   that image, geometric point separation gives exactly one point `x` above
   it; as `K` is algebraically closed both residue fields are `K`. The
   localized finite algebra `S_y` is therefore local and is
   `O_{X,x}`. Tangent injectivity dualizes to a surjection of cotangent
   spaces; since `O_{P^r,y}→A_y→O_{X,x}` factors that map, it gives
   `m_{A_y}/m_{A_y}^2→m_{X,x}/m_{X,x}^2` surjective. The latter space is
   one-dimensional because `O_{X,x}` is a DVR. Hence some element of
   `m_{A_y}` maps to a uniformizer modulo `m_{X,x}^2`; in a DVR that element
   generates the maximal ideal, so `m_{A_y}O_{X,x}=m_{X,x}`. The residue
   fields agree, so `O_{X,x}=A_y+m_{A_y}O_{X,x}`. The finite module
   `O_{X,x}/A_y` is thus equal to its product by `m_{A_y}`; Nakayama gives
   `O_{X,x}=A_y`. Applying this at every closed point shows the finite
   cokernel of `R→S` vanishes: a nonzero finite module over a finite-type
   `K`-algebra has a maximal ideal in its support, which is a closed point.
   Thus `R→S` is surjective on every affine chart, so `f_K` is a closed
   immersion.
3. Descend to `k`. For every affine chart `Spec R⊂P^r_k`, finiteness gives
   `f^{-1}(Spec R)=Spec S` with `S` finite over `R`. Since `f_K` is a closed
   immersion, `R⊗_kK→S⊗_kK` is surjective. Its cokernel is
   `coker(R→S)⊗_kK`; the field extension `K/k` is faithfully flat, so this
   cokernel vanishes and `R→S` is surjective. The existing affine-quotient
   characterization and locality of closed immersions then show `f` is a
   closed immersion.

For the local Nakayama step, the algebra `A_y` is the image ring so its map
into `O_{X,x}` is injective; finiteness comes from `f`. The one-point fiber
condition is needed to make the localized finite algebra local. Tangent
injectivity alone would not establish point separation or identify this local
algebra.

### Existing supplier map and exact gaps

- `thm-proper-quasi-finite-is-finite` is published and supplies step 1.
- `lem-closed-immersion-local-on-target`,
  `lem-closed-immersion-affine-quotient-and-base-change`, and
  `def-closed-immersion-schemes` are published and supply the local target
  check and affine quotient conclusion in step 3.
- The local finite-algebra, cotangent, uniformizer, and Nakayama calculation
  in step 2 is not an existing exact library interface; inline it in the
  theorem proof or author that lemma before citing it.
- Faithfully flat detection of surjectivity in step 3 is also not supplied by
  `lem-base-change-open-closed-immersions`: that item asserts stability under
  base change, not descent. Inline the cokernel argument above, or add an exact
  faithful-flat descent supplier. The existing published
  `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres` has a different
  statement and does not directly assert this cokernel descent step.

The current theorem already depends on the proper-finite and closed-immersion
items, but its [F5] currently leaps from “finite, injective on points and
tangent spaces” to “closed immersion.” Replace that paragraph/proof use with
the explicit local calculation and descent above; remove
`lem-base-change-open-closed-immersions` as purported descent support. The
degree-base-change proof also needs its rational-section/pullback/Cartier-degree
interfaces made explicit in the threshold item facts and dependencies. In both
threshold items, cite/add the actual uses of
`cor-degree-descends-picard-curve`,
`thm-line-bundle-rational-section-cartier-divisor`,
`def-pullback-cartier-divisor`,
`lem-pullback-cartier-divisor-line-bundle`,
`thm-cartier-weil-divisors-curves-agree`, and
`thm-local-ring-smooth-curve-dvr`; some are only transitive or absent from the
current item dependency lists. Inline the Artinian length and faithful descent
along field extensions for cokernels, since no exact existing item supplies
those steps. These are supplier and proof-contract repairs, not counterexamples
to either degree threshold.

## Validation and disposition

The two threshold claims are correct over arbitrary fields and all
characteristics, with the stated degree hypotheses. The residue extension in
the degree calculation may be inseparable and the geometric divisor may be
nonreduced; its local lengths preserve the weighted degree exactly. The
closed-immersion route is complete once its displayed local proof is included.
Current library dependencies remain drafts with flagged Cartier/Weil/Picard
closure, so those dependencies still require their own repair/acceptance.

Report validation: reviewed both target statements/proofs and the cited
supplier interfaces; checked the recorded Stacks full text at Lemmas 22.3 and
22.5; corrected the earlier batch-8 report's item 8 and item 9 degree route.
No gate or item-level check was run, per the report-only scope.

## Item authoring update (2026-10-01)

This section supersedes the forward-looking repair recommendations above. The
two authorized threshold items now contain the inline routes audited here; the
Statements and their arbitrary-field, all-characteristic, Axiom-of-Choice
scope are unchanged.

### Incorporated proof routes

- `thm-degree-two-g-line-bundle-basepoint-free` now proves degree preservation
  for every field extension. For a closed point with residue field `E`, it
  decomposes the finite Artin algebra `E ⊗_k K` into local factors, computes
  each factor's `K`-dimension from its composition length and residue degree,
  and identifies the local lengths with coefficients of the pulled-back
  Cartier divisor. Additivity then handles every divisor and rational-section
  representation handles every invertible sheaf. The evaluation-cokernel
  descent is justified by tensoring a one-dimensional `k`-subspace along the
  flat field extension.
- `thm-degree-two-g-plus-one-line-bundle-very-ample` now applies the high-degree
  formula over `k` only to `L`. It moves point, pair, and double-point twists
  to the algebraic closure after proving degree preservation, so no vanishing
  is asserted for twists by arbitrary closed `k`-points. The `2p` quotient is
  computed locally as `L_p/t²L_p`; its two classes give value and first-jet
  separation, with the ratio of chosen sections congruent to a uniformizer
  modulo its square.
- The closed-immersion argument is inline. Properness and point separation
  give finiteness. On an affine chart it forms the image ring `A`, uses lying
  over and point separation to get one point above each closed image point,
  then factors the tangent/cotangent map through `A` and the source DVR. A
  lifted uniformizer gives `m_A B=m_B`; equality of residue fields and
  Nakayama give `A_m=B`. Vanishing of the finite affine cokernel proves
  surjectivity of each chart map. Over `k`, the cokernel after scalar extension
  to `K` is the scalar extension of the original cokernel; a nonzero
  `k`-subspace would stay nonzero, proving faithful-flat descent of the
  surjection. The proof does not use stability under base change as a descent
  criterion.

The direct dependency lists now include the degree/rational-section, Cartier
pullback, Cartier/Weil, local-DVR, flatness, and Picard-degree suppliers used
by the inline degree proof. The very-ample item also directly names the proper
base-change, lying-over, Nakayama, maximal-ideal, affine-quotient, and
closed-immersion-locality suppliers. Its unused homogeneous-coordinate,
projective-map-data, and open/closed-base-change-as-descent dependencies were
removed. Direct dependency-file verification found no missing paths: 24 for
the basepoint-free item and 34 for the very-ample item.

### Current direct dependency lists

`thm-degree-two-g-line-bundle-basepoint-free`:

`cor-degree-descends-picard-curve`, `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`, `cor-rr-exact-high-degree-formula`, `def-axiom-of-choice`, `def-base-point-linear-system`, `def-complete-linear-system`, `def-degree-divisor-proper-curve`, `def-divisor-smooth-proper-curve`, `def-flat-and-faithfully-flat-modules-and-ring-maps`, `def-flat-morphism-schemes`, `def-globally-generated-sheaf`, `def-invertible-sheaf-of-cartier-divisor`, `def-pullback-cartier-divisor`, `def-relative-projective-space-standard-charts`, `lem-add-one-point-exact-sequence-line-bundle`, `lem-flat-morphisms-stable-base-change`, `lem-proper-cohomology-field-extension`, `lem-pullback-cartier-divisor-line-bundle`, `prop-modules-over-a-field-are-projective-flat-and-injective`, `thm-base-point-free-linear-system-morphism`, `thm-cartier-weil-divisors-curves-agree`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-local-ring-smooth-curve-dvr`, `thm-right-exactness-of-tensor-products`.

`thm-degree-two-g-plus-one-line-bundle-very-ample`:

`cor-degree-descends-picard-curve`, `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`, `cor-rr-exact-high-degree-formula`, `def-axiom-of-choice`, `def-closed-immersion-schemes`, `def-degree-divisor-proper-curve`, `def-divisor-smooth-proper-curve`, `def-flat-and-faithfully-flat-modules-and-ring-maps`, `def-flat-morphism-schemes`, `def-proper-morphism`, `def-pullback-cartier-divisor`, `def-relative-projective-space-standard-charts`, `def-very-ample-invertible-sheaf-relative`, `def-zariski-tangent-space-point`, `lem-add-one-point-exact-sequence-line-bundle`, `lem-closed-immersion-affine-quotient-and-base-change`, `lem-closed-immersion-local-on-target`, `lem-flat-morphisms-stable-base-change`, `lem-proper-cohomology-field-extension`, `lem-proper-source-to-separated-target-proper`, `lem-proper-stable-base-change`, `lem-pullback-cartier-divisor-line-bundle`, `prop-modules-over-a-field-are-projective-flat-and-injective`, `thm-base-point-free-linear-system-morphism`, `thm-cartier-weil-divisors-curves-agree`, `thm-degree-two-g-line-bundle-basepoint-free`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-local-ring-smooth-curve-dvr`, `thm-lying-over`, `thm-nakayama-lemma`, `thm-proper-ideal-contained-in-maximal-ideal`, `thm-projective-space-proper-over-base`, `thm-proper-quasi-finite-is-finite`, `thm-right-exactness-of-tensor-products`.

### Remaining supplier closure and validation

The threshold items remain `draft`, and their mathematical supplier closure is
not accepted by this authoring update. The direct dependencies still marked
`draft` are `cor-degree-descends-picard-curve`,
`cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
`cor-rr-exact-high-degree-formula`, `def-base-point-linear-system`,
`def-complete-linear-system`, `def-degree-divisor-proper-curve`,
`def-divisor-smooth-proper-curve`, `def-pullback-cartier-divisor`,
`lem-add-one-point-exact-sequence-line-bundle`,
`lem-pullback-cartier-divisor-line-bundle`,
`thm-base-point-free-linear-system-morphism`,
`thm-cartier-weil-divisors-curves-agree`,
`thm-degree-two-g-line-bundle-basepoint-free`,
`thm-line-bundle-rational-section-cartier-divisor`, and
`thm-local-ring-smooth-curve-dvr`. Their own source, proof, and scope
obligations remain with their owners.

Final targeted checks after the proof and dependency edits:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-degree-two-g-line-bundle-basepoint-free.md items/thm-degree-two-g-plus-one-line-bundle-very-ample.md` — exit 0; 2 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-degree-two-g-line-bundle-basepoint-free.md items/thm-degree-two-g-plus-one-line-bundle-very-ample.md` — exit 0; both files passed KaTeX, delimiter, wikilink-in-math, and YAML checks.
- Direct dependency-file check — 24 and 34 dependencies checked, none missing.

SHA-256: `items/thm-degree-two-g-line-bundle-basepoint-free.md` =
`b0f542af87639ab47837ade8aa3f1f6f1e948ac0ed77ba96e37c14e269824c73`;
`items/thm-degree-two-g-plus-one-line-bundle-very-ample.md` =
`17d006c1f49d5366c40a924249a8d8bd42b77023a71a2b99b76b7dd161d712d2`.

No gate, certification, ledger, or receipt was run or written. No unresolved
primary-source question remains for the two inline routes; the outstanding
mathematical obligation is the flagged supplier closure listed above.

## Follow-up: complete arbitrary-field finiteness route and localization (2026-10-01)

The two authorized proof bodies now contain the released repairs. In both
`thm-degree-two-g-line-bundle-basepoint-free` and
`thm-degree-two-g-plus-one-line-bundle-very-ample`, the finite-dimensional
algebra `E ⊗_k K` is shown Artinian by stabilization of descending
finite-dimensional `K`-subspaces. The Artinian structure theorem decomposes it
into its local factors; each factor's regular module has finite composition
length, with simple factors its residue field. Additivity of `K`-dimension
then gives the length-times-residue-degree formula, and
`thm-dvr-ideal-and-module-length` identifies the local length with the
coefficient of the pulled-back Cartier divisor. The three direct supplier
dependencies added to each item are `thm-structure-theorem-for-artinian-rings`,
`thm-artinian-ring-has-finite-length`, and
`thm-dvr-ideal-and-module-length`.

The very-ampleness proof now gives the full finite-type, arbitrary-field curve
map argument in Step 3.3. For a proper map from a smooth integral curve with
positive pulled-back `O(1)` degree, it constructs the scheme-theoretic image,
proves it integral and one-dimensional, embeds its function field into the
source function field, and obtains a finite function-field extension from a
transcendental projective coordinate. It separately checks the generic fibre
and closed fibres, including finite residue extensions, and invokes the
published isolated-fibre-point criterion before proper quasi-finite implies
finite. No separability or rational-residue assumption is used. The same
argument is applied over `k` in Step 5.1 before affine faithfully-flat descent
of the closed immersion. Its exact supplier additions are recorded in [F9]
and the current direct-dependency frontmatter (including the scheme-image,
function-field, curve-closed-subset, residue-extension, fibre-criterion,
dimension, and finite-algebraic-extension suppliers). The route is inline;
these citations identify its inputs rather than substitute for its proof.

Step 4.1 also now justifies the target-stalk finiteness used in Nakayama:
for a closed image point `y`, the finite algebra `S ⊗_A A_{m_y}` is integral
over `A_{m_y}`. Its maximal ideals correspond to source points above `y`;
lying over and geometric-point separation give exactly one. Therefore it is
local and equals its localization `S_n = O_{C_K,x}`. Localization preserves
the finite module, so the source DVR is finite over the target local ring.
The point-generation proof in the basepoint-free item likewise states why a
section with nonzero residue generates the invertible stalk: its local-frame
coefficient is a unit.

The new direct dependency additions to the very-ampleness item are
`def-algebraic-curve-over-field`, `def-finitely-generated-field-extension`,
`def-integral-scheme`, `def-scheme-theoretic-image`,
`lem-curve-closed-subsets-finite`,
`lem-finite-type-jacobson-residue-extension`,
`lem-integral-finite-type-scheme-function-field`,
`lem-quasi-finite-morphism-fibre-characterization`,
`thm-affine-domain-dimension-transcendence-degree`,
`thm-artinian-ring-has-finite-length`, `thm-dvr-ideal-and-module-length`,
`thm-finitely-generated-algebraic-extensions-are-finite`,
`thm-scheme-theoretic-image-quasi-compact-morphism`, and
`thm-structure-theorem-for-artinian-rings`.

The numbered Step 3.3 heading now carries the dependencies and prior-step
citation that make the proof checker stratify this route correctly. Narrow
validation after these edits passed:

- `precheck.mts` on the two items: 2 checked, 0 failing.
- `rendercheck.mjs` on the two items: both passed YAML, delimiter, wikilink,
  and KaTeX checks.
- Direct dependency-file check: 27 dependencies for the basepoint-free item
  and 48 for the very-ampleness item; no missing files.

Final SHA-256: `thm-degree-two-g-line-bundle-basepoint-free`:
`e8ff6e27fe363357e5b3432c37dd00a65c0926ed1561c28880e36a6dcfcb1c0f`;
`thm-degree-two-g-plus-one-line-bundle-very-ample`:
`2c2bdcdc2656f84309c07493d4c3c5ac0de9cef8ca4b88d8866729cfe380366c`.

The items remain drafts. The earlier math-only pass wrote only the two
authorized item bodies and this report. The later selected-carrier writes are
recorded below; no receipts, gates, or published sources were written.
Supplier-closure status and any acceptance decision remain with the item
owners and root integration.

## Follow-up: B8 selected carrier synchronization (2026-10-01)

Synchronized only the selected rows for
`thm-degree-two-g-line-bundle-basepoint-free` and
`thm-degree-two-g-plus-one-line-bundle-very-ample` in
`frontier-37-owner-30-batch-8.pages.json`. Their manifest statements now
reflect the current Statements; dependency arrays exactly match the current
item frontmatter (27 and 48 dependencies); `strategy` summarizes the current
proof route; and `proof_strategy`, status, provenance, and source references
match the items. The existing `dependency_level` values were left unchanged.
The three literature reference entries in each row already matched the item
sources and were preserved.

Regenerated the two selected proof-contract entries from their live Facts and
numbered Proof steps. The basepoint-free entry now has 32 unique Fact/source
citations (F1–F7), eight derivations, no routine steps, and eight substantive
boundary dispositions. The very-ampleness entry now has 52 unique Fact/source
citations (F1–F11), eight derivations, no routine steps, and eight replacement
boundary dispositions. Citation quotations are taken from the exact current
supplier Statement or Definition sections; their `uses` are derived from the
actual step text. The very-ampleness citations and derivations therefore
record the arbitrary-field scheme-image and fibre route in Step 3.3 and the
finite target-stalk localization in Step 4.1, rather than the superseded
closed-point criterion strategy.

The B8 contract file previously omitted the basepoint-free theorem from both
its 50-ID `scope` index and its contract map, even though its manifest row was
present. Added that one ID immediately before the very-ampleness ID and added
its contract entry; all 50 prior memberships remain. This is only the selected
proof-contract membership required by the contract schema, not a Step 3 scope
decision.

The single selected strict contract check passed: 2/2 selected entries checked,
0 errors, 0 warnings. The item bodies did not change during carrier
synchronization, so the already completed narrow item checks remain applicable:
`precheck.mts` passed both threshold items, and `rendercheck.mjs` passed both
for YAML, delimiters, wikilinks, and KaTeX. Direct dependency-file checks had
found no missing item files. No other manifest row, contract entry, scope
membership, item, level, plan, edge, receipt, gate, or baseline was changed.

Carrier readiness is distinct from mathematical supplier closure. Both
threshold items remain drafts, and this synchronization neither promotes them
nor discharges the upstream draft-supplier obligations recorded above. Root
and the supplier owners retain that closure decision.

Final carrier SHA-256: `frontier-37-owner-30-batch-8.pages.json`:
`c8c3fc524e629cdf14473648fb02b28707cee9ccda8b459ded891bc386e229ec`;
`frontier-37-owner-30-batch-8.proof-contracts.json`:
`2498541451d635fb35802ceecd22ad3ddbed03bdea2ecbe6adcbc3060d9d94bb`.
