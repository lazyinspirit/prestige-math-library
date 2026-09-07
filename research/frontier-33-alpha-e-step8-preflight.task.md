# Step 8 adjudication — group **e**, run `frontier-33`

You are the group Alpha for batches **9**, **10**: 2 A/B pair(s), 4 page(s), 109 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `dimension-constructible-images-and-dimensions-of-fibres` | A | algebraic-geometry | 366.057 | `schemes-subschemes-and-morphisms-locally-of-finite-type-examples`, `zariski-topology-on-prime-spectra` |
| 9 | `dimension-constructible-images-and-dimensions-of-fibres-examples` | B | algebraic-geometry | 366.058 | `dimension-constructible-images-and-dimensions-of-fibres` |
| 10 | `fibre-products-base-change-and-scheme-theoretic-fibres` | A | scheme-theory | 366.065 | `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` |
| 10 | `fibre-products-base-change-and-scheme-theoretic-fibres-examples` | B | scheme-theory | 366.066 | `fibre-products-base-change-and-scheme-theoretic-fibres` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dimension-constructible-images-and-dimensions-of-fibres` — Dimension Constructible Images and Dimensions of Fibres (46 item(s))

- `def-dimension-noetherian-topological-space` · definition — Chain dimension and the empty-space convention
- `lem-dimension-finite-union-components` · lemma — Dimension of a finite closed union
- `lem-chain-dimension-open-cover` · lemma — Dimension can be computed on an open cover
- `lem-classical-variety-noetherian-components` · lemma — Classical varieties have finite irreducible decompositions
- `def-dimension-classical-variety` · definition — Global and local dimension of classical varieties
- `thm-affine-variety-dimension-coordinate-ring` · theorem — Affine geometric dimension equals ring dimension
- `lem-general-variety-function-field-charts` · lemma — Function fields and dominant pullbacks on general varieties
- `thm-dimension-equals-transcendence-degree` · theorem — Dimension equals transcendence degree
- `lem-dimension-nonempty-open-subset` · lemma — Nonempty opens preserve irreducible dimension
- `cor-dimension-affine-and-projective-space` · corollary — Affine and projective n-space have dimension n
- `cor-dimension-birational-invariant` · corollary — Dimension is birationally invariant
- `thm-dimension-product-varieties` · theorem — Dimensions add under products
- `def-codimension-irreducible-subvariety` · definition — Codimension of an irreducible closed subvariety
- `thm-principal-subvariety-codimension-one` · theorem — A nontrivial principal section has pure codimension one
- `lem-variety-equations-dimension-bound` · lemma — r equations lower dimension by at most r
- `lem-dimension-local-ring-codimension-closure` · lemma — Closed-point local dimension equals ambient irreducible dimension
- `lem-classical-point-cut-out-by-dimension-many-functions` · lemma — A point is locally cut out by dim X functions
- `lem-zero-dimensional-classical-variety-finite` · lemma — Zero-dimensional varieties are finite sets
- `cor-maximal-chains-irreducible-variety-dimension` · corollary — Maximal chains in an irreducible variety
- `def-constructible-subset-variety` · definition — Locally closed and constructible subsets
- `lem-constructible-boolean-operations` · lemma — Constructible subsets form a Boolean algebra
- `lem-constructible-dense-contains-open` · lemma — Dense constructible subsets contain an open
- `lem-dominant-affine-map-normalization-over-open` · lemma — A dominant affine map factors finitely over relative affine space after shrinking the base
- `lem-dominant-affine-image-contains-principal-open` · lemma — Dominant affine images contain a principal open
- `thm-chevalley-constructible-image-varieties` · theorem — Chevalley: images of constructible sets are constructible
- `cor-dominant-morphism-image-contains-open` · corollary — A dominant image contains a dense open
- `def-fibre-dimension-at-point-classical` · definition — Reduced closed-point fibres and their dimension
- `thm-fibre-dimension-lower-bound` · theorem — Every fibre component has the expected lower bound
- `thm-generic-fibre-dimension` · theorem — Fibres have pure expected dimension over a dense open
- `cor-dimension-of-image-plus-generic-fibre` · corollary — Image dimension and the generic fibre formula
- `def-quasi-finite-morphism-classical` · definition — Quasi-finite classical morphisms
- `thm-dominant-equal-dimension-generically-finite` · theorem — Equal dimension is equivalent to generic quasi-finiteness
- `lem-affine-intersection-dimension-bound` · lemma — Affine intersection bound via the diagonal
- `lem-affine-cone-dimension-projective-variety` · lemma — A nonempty projective cone raises dimension by one
- `lem-projective-hypersurface-dimension-drop` · lemma — Nontrivial projective hypersurface sections
- `cor-projective-equations-dimension-bound` · corollary — Several homogeneous equations in projective space
- `thm-dimension-theorem-intersection-projective` · theorem — Projective intersection dimension and nonemptiness
- `lem-projective-dimension-linear-avoidance` · lemma — Dimension is detected by avoiding linear subspaces
- `lem-relative-projective-homogeneous-equations` · lemma — Projective space over a classical base and homogeneous closed loci
- `thm-classical-projective-projection-closed` · theorem — Projection from projective space over a variety is closed
- `def-projective-morphism-classical` · definition — Projective classical morphisms
- `thm-upper-semicontinuity-fibre-dimension-projective` · theorem — Projective fibre dimension is upper semicontinuous
- `cor-closed-family-irreducible-equal-dimensional-fibres` · corollary — Closed families with irreducible equal-dimensional fibres
- `def-module-finite-affine-classical-map` · definition — Module-finite affine maps for the quasi-finite comparison
- `cor-module-finite-affine-map-quasi-finite` · corollary — Module-finite affine maps have finite fibres
- `rem-equidimensionality-hypotheses` · remark — Hypotheses and conventions in dimension theory

### `dimension-constructible-images-and-dimensions-of-fibres-examples` — Dimension Constructible Images and Dimensions of Fibres — Examples (10 item(s))

- `ex-dimensions-coordinate-cross-components` · example — The coordinate cross has two one-dimensional components
- `ex-fibres-hyperbola-projection` · example — Elementary fibres: empty, points, and affine lines
- `ex-family-hyperbolas-degenerate-fibre` · example — The family xy=t has constant dimension and a reducible special fibre
- `ex-fibre-dimension-jump` · example — The map (x,y) to (x,xy) has a jumping fibre
- `cex-image-morphism-not-closed` · counterexample — A morphism image need not be closed
- `cex-finite-fibres-not-finite-morphism` · counterexample — Finite fibres do not imply a module-finite map
- `ex-intersection-two-projective-curves` · example — Plane curves meet; common components change the dimension
- `cex-dimension-empty-set-minus-infinity-needed` · counterexample — Dimension zero for the empty set loses the empty-fibre distinction
- `cex-affine-intersection-bound-singular-ambient` · counterexample — The ambient affine-space hypothesis matters
- `ex-linear-system-fibre-dimension-rank-loci` · example — Fibre dimensions of a family of homogeneous linear systems

### `fibre-products-base-change-and-scheme-theoretic-fibres` — Fibre Products Base Change and Scheme Theoretic Fibres (42 item(s))

- `def-fibre-product-schemes-universal-property` · definition — The scheme fibre product represents compatible pairs of morphisms from every test scheme T; define its projections and Cartesian square.
- `lem-fibre-product-unique-canonical-isomorphism` · lemma — Two fibre products of the same diagram have a unique projection-compatible isomorphism.
- `thm-affine-fibre-product-tensor-ring` · theorem — Spec B times over Spec A Spec C is canonically Spec(B tensor_A C), as a product in all schemes.
- `lem-affine-fibre-product-projections-stalk-maps` · lemma — At a prime r of B tensor_A C, projections contract r to q in B and q-prime in C; the local maps are B_q to (B tensor_A C)_r and C_q-prime to that stalk and induce compatible residue-field embeddings.
- `lem-fibre-product-open-restriction` · lemma — If P=X times_S Y exists, open V in X and W in Y mapping to an open U in S have product p-inverse(V) intersect q-inverse(W), an open subscheme of P. Also X times_S U=f-inverse(U).
- `lem-fibre-products-glue-over-open-covers` · lemma — If Y is covered by open Y_i and products X times_S Y_i exist, their inverse images over overlaps glue to X times_S Y. The analogous assertion holds for a cover of S.
- `thm-fibre-products-of-schemes-exist` · theorem — Every pair of scheme morphisms X to S and Y to S admits a fibre product, covered by Spec(B tensor_A C) for compatible affine charts.
- `cor-product-schemes-over-base-exists` · corollary — The category of S-schemes has binary products, terminal object S, and empty scheme as initial object; a product with the empty scheme is empty.
- `lem-fibre-product-associativity-and-symmetry` · lemma — There are natural symmetry, associativity and unit isomorphisms for products of S-schemes, compatible with every projection.
- `def-base-change-morphism-schemes` · definition — For S-prime to S, define X_S-prime=X times_S S-prime and f_S-prime on both structure morphisms and morphisms of S-schemes. A property is stable under base change if every such pullback retains it.
- `lem-base-change-composition` · lemma — Iterated base change along S-double-prime to S-prime to S is canonically base change along the composite, functorially in objects and morphisms.
- `lem-tensor-ring-presentations-for-base-change` · lemma — For A-algebra C, base extension of A[t_i]/I is C[t_i]/I C[t_i]; base extension of S-inverse A is image(S)-inverse C, with no flatness assumption.
- `lem-field-valued-points-of-schemes` · lemma — Morphisms Spec K to X are pairs (x, embedding kappa(x) to K); in particular Spec kappa(x) to X is canonical and compatible with scheme morphisms.
- `def-scheme-theoretic-fibre` · definition — For any point s of S define X_s=X times_S Spec kappa(s), as a kappa(s)-scheme; allow nonclosed points, generic fibres and empty fibres.
- `thm-affine-fibre-coordinate-ring` · theorem — For A to B and p in Spec A, the fibre is Spec(B tensor_A kappa(p))=Spec((A minus p)-inverse B / p(A minus p)-inverse B).
- `lem-points-of-fibre-primes-over-point` · lemma — The map X_s to X is a homeomorphism onto f-inverse(s), with kappa(x in X_s)=kappa(x in X); in an affine chart these are exactly primes q of B with q intersect A=p.
- `lem-scheme-fibre-stalk-quotient` · lemma — At x above s, O_(X_s),x is O_X,x / m_s O_X,x, equivalently O_X,x tensor over O_S,s kappa(s).
- `lem-points-of-scheme-fibre-product-residue-tensors` · lemma — Points of X times_S Y correspond to (x,y,s,r) with common image s and r a prime of kappa(x) tensor_kappa(s) kappa(y); the residue field is that of r.
- `lem-fibre-after-base-change` · lemma — If s-prime maps to s, the fibre of X_S-prime over s-prime is canonically X_s times_kappa(s) Spec kappa(s-prime).
- `lem-base-extension-field-coordinate-ring` · lemma — For a k-scheme X and field extension K/k, affine charts of X_K have rings A tensor_k K, compatibly on overlaps.
- `def-geometric-fibre` · definition — For a morphism f:X to S and s in S, choose an algebraic closure Omega of kappa(s) and define the geometric fibre X_bar-s=X_s times_kappa(s) Spec Omega.
- `lem-geometric-fibre-choice-independent` · lemma — Two choices of algebraic closure give isomorphic geometric fibres after transport of scalars by a chosen base-field isomorphism; no canonical choice is asserted.
- `def-geometrically-reduced-integral-connected-fibre` · definition — Call a fibre geometrically reduced, integral, irreducible or connected when its base change to an algebraic closure has that property. Integral and irreducible require nonemptiness; the empty scheme is reduced and connected under the no-separation convention.
- `lem-base-change-open-closed-immersions` · lemma — Open and closed immersions remain so under arbitrary base change; immersions (equivalently, locally closed immersions) do also. The pulled-back closed ideal is the image of the pulled-back ideal in the new structure sheaf.
- `def-scheme-theoretic-inverse-image-subscheme` · definition — Define the scheme-theoretic inverse image of a closed or locally closed subscheme Z of S under X to S as X times_S Z.
- `lem-subscheme-intersection-fibre-product` · lemma — The intersection of finitely many closed subschemes of X is their fibre product over X and is cut out by the sum of their ideals; locally closed intersections follow by restriction.
- `lem-base-change-locally-finite-type-presentation` · lemma — Locally finite type and locally finite presentation morphisms remain so after arbitrary base change.
- `lem-base-change-quasi-compact-morphisms` · lemma — Quasi-compactness is local on an affine cover of the target and is preserved by arbitrary base change.
- `cor-base-change-finite-type-and-products` · corollary — Finite type morphisms remain finite type under base change; products of two locally finite type (respectively finite type) k-schemes have the same finiteness property.
- `def-affine-morphism-schemes` · definition — A scheme morphism is affine if the inverse image of every affine open is affine.
- `lem-affineness-from-unit-generating-global-sections` · lemma — If finitely many global sections f_i generate the unit ideal and all nonvanishing opens X_f_i are affine, then X is affine.
- `lem-affine-morphism-local-on-target` · lemma — A morphism is affine if the target has an affine open cover with affine inverse images.
- `lem-base-change-affine-morphisms` · lemma — Affine morphisms remain affine after arbitrary base change; compositions of affine morphisms and closed immersions are affine.
- `def-diagonal-morphism-scheme` · definition — Define Delta_X/S:X to X times_S X as the unique morphism with both projections identity.
- `lem-diagonal-base-change-identification` · lemma — Under (X_S-prime times_S-prime X_S-prime) isomorphic to (X times_S X)_S-prime, the diagonal is the base change of Delta_X/S.
- `def-graph-morphism-over-base` · definition — For an S-morphism f:X to Y, define Gamma_f=(id_X,f):X to X times_S Y.
- `lem-graph-as-pullback-diagonal` · lemma — The graph square with X to X times_S Y above Y to Y times_S Y is Cartesian, with right arrow (f composed with pr_X,pr_Y) and left arrow f.
- `thm-classical-product-agrees-scheme-product` · theorem — For irreducible classical varieties over an algebraically closed k, the associated scheme of the classical product is the scheme product of the associated schemes; affine chart rings are the unreduced tensor products, which here are domains.
- `lem-base-change-surjective-morphisms` · lemma — Surjective morphisms of schemes remain surjective under arbitrary base change; in particular extension of the ground field does not turn a nonempty scheme into an empty scheme.
- `lem-immersions-and-localizations-monomorphisms` · lemma — Open immersions, closed immersions and Spec(S-inverse A) to Spec A are monomorphisms of schemes; hence so are their composites.
- `rem-properties-can-change-after-field-extension` · remark — Ordinary reducedness, irreducibility, integrality and connectedness need not survive scalar extension: C tensor_R C splits, while F_p(u) tensor_F_p(u^p) F_p(u) contains nilpotents.
- `rem-fibre-is-scheme-not-point-set` · remark — A fibre retains its residue fields and nilpotents even though its underlying topology is the inverse-image topology; the underlying set of a general fibre product need not be a set product.

### `fibre-products-base-change-and-scheme-theoretic-fibres-examples` — Fibre Products Base Change and Scheme Theoretic Fibres — Examples (11 item(s))

- `ex-fibre-family-xy-equals-t` · example — For k[x,y,t]/(xy-t) over k[t], the fibre at a in k is Spec k[x,y]/(xy-a): at zero two reduced axes, at nonzero a a copy of G_m; the generic fibre has ring k(t)[x,x-inverse].
- `ex-nonreduced-fibre-x-squared-equals-t` · example — The family k[x,t]/(x^2-t) has special fibre k[x]/(x^2) in every characteristic. Over Q the fibres at 1, 0, -1 and the generic point are respectively Q times Q, Q[epsilon]/epsilon^2, Q(i), Q(x) over Q(t).
- `ex-base-change-real-conic-to-complex` · example — The real affine conic Spec R[x,y]/(x^2+y^2+1) has no R-valued points, but its complex base change has point (i,0) and ring C[x,y]/(x^2+y^2+1).
- `cex-domain-tensor-algebraic-closure-reducible` · counterexample — An integral R-scheme need not stay irreducible or connected over C: Spec C becomes Spec(C times C), also showing injectivity need not survive base change.
- `ex-product-affine-lines-plane` · example — A^1_k times_k A^1_k is A^2_k functorially; points over the pair of generic points are not unique, for instance primes (0) and (y-x) have the same contractions.
- `ex-fibre-closed-immersion` · example — The fibre of Spec(A/I) to Spec A over p is Spec kappa(p) if I is contained in p, and empty otherwise.
- `ex-graph-polynomial-map-closed-subscheme` · example — For f:A^n_k to A^m_k given by polynomials f_j, its graph has ideal (y_j-f_j(x)) in k[x_1,...,x_n,y_1,...,y_m].
- `cex-set-theoretic-fibre-loses-multiplicity` · counterexample — The zero fibres of x^2=t and x^3=t have the same one-point underlying space and residue field k, but are nonisomorphic schemes, of k-vector-space dimensions 2 and 3.
- `ex-empty-fibre-tensor-zero-ring` · example — The open immersion Spec k[t,t-inverse] to Spec k[t] has empty fibre at t=0 because its fibre tensor ring is zero.
- `cex-purely-inseparable-base-change-nonreduced` · counterexample — For k=F_p(v), L=k[u]/(u^p-v) is a field but L tensor_k L is L[epsilon]/(epsilon^p), so reducedness need not survive even algebraic scalar extension.
- `ex-quadratic-cover-self-fibre-product` · example — For t maps to x^2, the self fibre product of A^1_k over A^1_k is Spec k[x,y]/(x^2-y^2): two distinct line components if char k is not 2, a doubled diagonal if char k=2.

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-33`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
