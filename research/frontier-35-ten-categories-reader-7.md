# Step 5a reader report — batch 7

Run: `frontier-35-ten-categories`  
Role: reader  
Verdict: repaired assigned drafts; no uneditable findings remain.

## Opened inventory

### Assigned pages

- `library/scheme-theory/sheaf-cohomology-cech-cohomology-and-comparison.md` (A page)
- `library/scheme-theory/sheaf-cohomology-cech-cohomology-and-comparison-examples.md` (B page)

### Assigned A-page items

```text
def-global-sections-functor-sheaves
lem-abelian-sheaves-form-a-grothendieck-category
thm-abelian-sheaves-have-enough-injectives
def-sheaf-cohomology-derived-global-sections
thm-zero-sheaf-cohomology-global-sections
thm-long-exact-sequence-sheaf-cohomology
lem-comparison-map-from-an-exact-complex-into-an-injective-resolution
lem-cohomology-functoriality-sheaf-and-space
def-acyclic-sheaf-global-sections
def-flasque-sheaf
lem-injective-sheaves-flasque
lem-flasque-kernel-lifts-quotient-sections
thm-flasque-sheaves-acyclic
def-godement-resolution
thm-godement-resolution-flasque
def-cech-cochain-complex-open-cover
lem-cech-differential-squares-zero
def-cech-cohomology-open-cover
lem-cech-h0-global-sections
lem-increasing-cech-complex-extends-to-alternating-tuples
def-refinement-open-cover
thm-refinement-map-independent-on-cohomology
def-global-cech-cohomology-directed-limit
def-acyclic-cover-for-sheaf
lem-acyclic-rows-and-columns-of-cech-double-complex
thm-cech-to-sheaf-cohomology-comparison
thm-leray-acyclic-cover-theorem
lem-two-open-cover-cech-complex
thm-mayer-vietoris-sheaf-cohomology
thm-cohomology-disjoint-union
thm-cohomology-one-point-space
def-cohomological-dimension-space
lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity
lem-noetherian-subspaces-and-compact-opens
lem-sections-on-compact-opens-commute-with-filtered-colimits
lem-filtered-colimits-of-abelian-groups-are-exact
lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces
lem-subsheaf-generated-by-sections
lem-locally-constant-functions-form-a-sheaf
lem-finite-filtration-of-generated-subsheaves-of-the-constant-integer-sheaf
lem-extension-by-zero-vanishing-reduces-to-all-sheaves
lem-closed-immersion-preserves-sheaf-cohomology
lem-irreducibility-criteria-and-open-subspaces
lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions
lem-constant-sheaf-on-irreducible-space-is-flasque
def-irreducible-component-of-a-topological-space
lem-irreducible-components-of-a-topological-space
lem-noetherian-space-has-finitely-many-irreducible-components
lem-extension-by-zero-short-exact-sequence
lem-sheaf-supported-on-a-closed-subset-is-a-pushforward
thm-noetherian-topological-space-dimension-vanishing
def-tensor-product-of-abelian-sheaves
lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product
def-flat-abelian-sheaf
lem-flatness-criteria-and-flat-covers-for-abelian-sheaves
def-k-flat-complex-of-abelian-sheaves
lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms
lem-abelian-sheaves-admit-bounded-above-flat-resolutions
lem-derived-tensor-product-of-abelian-sheaves
lem-morphisms-from-the-constant-sheaf-are-global-sections
lem-sheaf-cohomology-classes-as-derived-morphisms
lem-koszul-structure-of-the-abelian-sheaf-tensor-product
lem-koszul-coherence-for-derived-sheaf-tensor
def-cup-product-sheaf-cohomology
thm-cup-product-graded-associative-natural
rem-cech-cohomology-cover-dependent-without-acyclicity
rem-spectral-sequence-belongs-homological-algebra
lem-locally-constant-functions-form-a-sheaf
```

### Assigned B-page items

```text
cex-global-sections-epimorphism-fails-lift
ex-cech-cohomology-two-arc-cover-circle
cex-bad-cover-circle-cech-misses-h1
ex-skyscraper-sheaf-acyclic
ex-flasque-sheaf-all-functions
cex-constant-sheaf-not-flasque
def-projective-line-two-affine-cover-and-twisting-sheaf
ex-mayer-vietoris-projective-line-cover-preview
ex-cech-sign-degree-two-three-opens
ex-empty-cover-empty-space-cohomology
cex-cech-refinement-map-not-canonical-on-cochains
```

The A inventory contains `lem-locally-constant-functions-form-a-sheaf` once; it appeared twice in the manifest's ordering view but is one item.

### Dependency targets opened for material checks

These included `def-godement-resolution`, `thm-godement-resolution-flasque`, `thm-flasque-sheaves-acyclic`, `thm-acyclic-resolution-theorem-for-right-derived-functors`, `def-acyclic-cover-for-sheaf`, `thm-zero-sheaf-cohomology-global-sections`, `def-global-sections-functor-sheaves`, `def-derived-category-of-an-abelian-category`, `def-mapping-cone-of-a-chain-map`, `def-quasi-isomorphism`, `thm-the-derived-category-inherits-a-triangulated-structure`, `thm-existence-of-the-bounded-below-right-total-derived-functor`, `prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles`, `thm-injective-comparison-map-exists`, `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy`, `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic`, `thm-horseshoe-lemma-for-injective-resolutions`, `def-refinement-open-cover`, `def-compact-space`, `thm-sheafification-universal-property`, and the tensor/K-flat and constant-sheaf dependencies cited by the cup-product items.

## Repairs and evidence

1. **`lem-acyclic-rows-and-columns-of-cech-double-complex`** — Replaced the false formula `G^q(V)=∏_{x∈V}(G^q)_x`. The opened Godement definition gives `G^0(V)=∏_{x∈V} F_x` and recursively `G^q(V)=∏_{x∈V}(Q^{q-1}(F))_x` for `q≥1`; stalks do not in general commute with infinite products. The Čech rows now use the coefficient groups `A_x^0=F_x` and `A_x^q=(Q^{q-1}(F))_x`. The columns are handled as products indexed by cover tuples, with each component computed by the acyclic-resolution theorem. I also repaired the filtration argument: to conclude `H^n(F^M T)=0`, the cutoff `M` is chosen to kill terms in degrees `n−1`, `n`, and `n+1`, not only degree `n`. The supporting local definitions and Godement resolution theorem were opened before the repair.

2. **`thm-long-exact-sequence-sheaf-cohomology`** — Removed the invalid construction that patched a single value `I(F_2):=J` and then treated the patch as a supplied functorial resolution datum. The theorem comparing two supplied resolution data does not apply to that one-object patch. Replaced it with the cone triangle of the short exact sequence, followed by the exact bounded-below right derived functor `RΓ` and its long exact cohomology sequence. Naturality follows from functoriality of the cone triangle and `RΓ`; the resolution-independence paragraph now uses the comparison of supplied derived-functor models. Added the standing derived-category size convention to this item. The proof contract was rewritten to match.

3. **`def-cohomological-dimension-space`** — Corrected clause 2. Nonzero `H^0` rules out negative bounds but does not ensure that any finite uniform bound exists. The infimum is attained only when the value is finite; if there is no finite uniform bound, it is `+∞` and is not attained. The boundary record in the proof contract now covers this endpoint.

4. **`def-tensor-product-of-abelian-sheaves`** — Changed “contravariantly natural” to “covariantly natural” and made the induced direction `F⊗G → F'⊗G'` explicit. Added the sheafification-adjunction dependency and recorded the variance derivation in the proof contract.

5. **`lem-sections-on-compact-opens-commute-with-filtered-colimits`** — Fixed the malformed notation `a=\#` in the sheafification sentence to `a`.

No assigned A-page prose or B-page item/page prose needed edits. No changed draft contained a `verification.judge` record. The batch proof-contract file was updated for the material repairs.

### Authoritative source checks

- The [Stacks Project, Section 20.31, Lemma 20.31.1 (tag 0FP2)](https://stacks.math.columbia.edu/tag/0FP2) states that the cup product represented by maps `\tilde\xi, \tilde\eta` is represented by `\tilde\xi⊗\tilde\eta`; its footnote 1 says the hidden shift sign is `+1` under that convention. This resolves the cup-product convention used by the assigned definition and theorem.
- The [Stacks Project, Lemma 20.26.5 (tag 079R)](https://stacks.math.columbia.edu/tag/079R) states that the total tensor of K-flat complexes is K-flat, supporting the derived-tensor associativity argument.
- The [Stacks Project, Lemma 20.11.5 (tag 01ES)](https://stacks.math.columbia.edu/tag/01ES) gives the Čech-to-cohomology spectral sequence with `E_2^{p,q}=\check H^p(U,\underline H^q(F))`; [Lemma 20.11.6 (tag 01ET)](https://stacks.math.columbia.edu/tag/01ET) states the acyclic-intersection comparison. These passages support the scope recorded in the assigned spectral-sequence remark.

## Page verdicts

- **A page — acceptable after the item repairs.** The page summary matches the current mathematical scope. No A-page prose defect remained.
- **B page — acceptable.** The two-arc Čech computation, one-member-cover counterexample, sheaf examples, projective-line Mayer–Vietoris computation, sign calculation, empty-space calculation, and refinement-map counterexample were consistent with their stated hypotheses. No B-page prose defect remained.

## Uneditable defects

None. There are no findings for batch 7.

## Validation and blockers

For each changed item I ran reflow and precheck. Reflow reported `unchanged` for all five. Precheck passed the three proof-bearing items (`thm-long-exact-sequence-sheaf-cohomology`, `lem-acyclic-rows-and-columns-of-cech-double-complex`, and `lem-sections-on-compact-opens-commute-with-filtered-colimits`); the two definition items had zero proof checks and zero failures. The long-exact-sequence and Godement items were reflowed and prechecked again after their final edits. No blocker remains.

## Coverage note

I read every assigned page and item and opened the dependencies needed for the arguments and repairs above. Dependency review was targeted to this batch and these mathematical claims; I did not audit unrelated repository content or independently re-verify every bibliography entry attached to the batch. External verification was limited to the listed Stacks Project passages.
