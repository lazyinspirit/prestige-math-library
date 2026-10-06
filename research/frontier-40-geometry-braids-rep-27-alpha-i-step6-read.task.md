# Step 6 Alpha group reader — read-only digest — group **i**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **24**, **27**: 2 A/B pair(s), 4 page(s), 89 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 24 | `deformation-theory-of-schemes-and-obstruction-spaces` | A | scheme-theory | 909 | `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `sheaf-cohomology-cech-cohomology-and-comparison`, `ext-and-balanced-resolutions`, `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `grothendieck-spectral-sequences-and-computations`, `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `proj-projective-schemes-twisting-sheaves-and-ampleness` |
| 24 | `deformation-theory-of-schemes-and-obstruction-spaces-examples` | B | scheme-theory | 910 | `deformation-theory-of-schemes-and-obstruction-spaces`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `hilbert-functors-and-projective-hilbert-schemes`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` |
| 27 | `abelian-varieties-base-change-and-arithmetic-models` | A | algebraic-geometry | 917 | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `groups-of-multiplicative-type-and-arithmetic-tori`, `coherent-duality-on-projective-cohen-macaulay-schemes`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `hilbert-functors-and-projective-hilbert-schemes`, `etale-covers-and-the-etale-fundamental-group`, `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`, `inverse-systems-profinite-groups-and-completion`, `blowups-exceptional-divisors-and-strict-transforms`, `number-fields-rings-of-integers-and-discriminants` |
| 27 | `abelian-varieties-base-change-and-arithmetic-models-examples` | B | algebraic-geometry | 918 | `abelian-varieties-base-change-and-arithmetic-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `deformation-theory-of-schemes-and-obstruction-spaces` — Deformation Theory of Schemes and Obstruction Spaces (18 item(s))

- `def-square-zero-extension-and-small-extension` · definition — Square-zero extensions, small extensions and first-order thickenings
- `def-infinitesimal-deformation-functor-over-square-zero-extension` · definition — Deformations of schemes and the infinitesimal deformation functor
- `def-cotangent-complex-of-a-scheme-morphism` · definition — The cotangent complex of a morphism of schemes
- `def-ext-groups-of-the-cotangent-complex` · definition — Ext groups of the cotangent complex
- `lem-cotangent-complex-truncation-and-smooth-case` · lemma — Truncation, differentials and the cotangent complex of a smooth morphism
- `lem-ext-of-locally-free-sheaf-via-cohomology` · lemma — Ext of a locally free cotangent sheaf via sheaf cohomology
- `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext` · lemma — The Lichtenbaum-Schlessinger complex computes Ext of the cotangent complex in degrees at most two
- `lem-affine-deformations-obstruction-and-torsor` · lemma — Deformations of algebras: obstruction in degree two and torsor structure in degree one
- `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` · lemma — Flat deformations form a Zariski sheaf of groupoids
- `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex` · lemma — Cech hypercohomology of an affine cover computes Ext of the cotangent complex
- `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex` · theorem — First-order deformations are controlled by Ext^1 of the cotangent complex
- `thm-obstructions-lie-in-ext-two-cotangent-complex` · theorem — Obstructions to deformations lie in Ext^2 of the cotangent complex
- `cor-deformation-cohomology-of-a-smooth-scheme` · corollary — Deformation cohomology of a smooth scheme: tangent, obstruction and automorphism spaces
- `cor-vanishing-ext-one-implies-rigidity-of-deformation-classes` · corollary — Vanishing of the deformation tangent space forces rigidity of deformation classes
- `def-embedded-deformations-of-a-closed-subscheme` · definition — Embedded deformations of a closed subscheme
- `lem-cohomology-of-hypersurface-twists` · lemma — Cohomology of twists on a smooth hypersurface
- `lem-hypersurface-deformations-classified-by-equation-deformations` · lemma — Flat deformations of a smooth hypersurface are deformations of its equation
- `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations` · lemma — Tangent and obstruction spaces for hypersurface deformations

### `deformation-theory-of-schemes-and-obstruction-spaces-examples` — Deformation Theory of Schemes and Obstruction Spaces — Examples (2 item(s))

- `ex-first-order-deformations-of-a-hypersurface` · example — First-order deformations of a plane conic and of a quadric surface
- `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms` · counterexample — Vanishing deformation tangent space does not force rigidity of the deformation groupoid

### `abelian-varieties-base-change-and-arithmetic-models` — Abelian Varieties, Base Change, and Arithmetic Models (67 item(s))

- `def-group-scheme-over-a-scheme` · definition — Group schemes over a base scheme
- `lem-finite-etale-lifting-over-complete-dvr` · lemma — Finite etale schemes over a complete discrete valuation ring with separably closed residue field are split
- `def-s-dense-open-and-s-rational-map` · definition — S-dense open subschemes and S-rational maps
- `lem-normal-noetherian-domain-intersection-of-height-one-localizations` · lemma — A normal Noetherian domain is the intersection of its height-one localizations
- `def-neron-model-and-mapping-property` · definition — Neron models and the Neron mapping property
- `thm-plane-cubic-chord-tangent-group-law` · theorem — The chord-tangent group law on a smooth short Weierstrass cubic
- `lem-arith-affine-commutative-prime-to-characteristic-torsion-bound` · lemma — Affine commutative prime to characteristic torsion bound
- `lem-arith-strict-henselization-and-smooth-sections` · lemma — Strict henselization of a DVR and smooth sections
- `lem-arith-finite-cartier-duality-and-exactness` · lemma — Finite Cartier duality, exactness and exponent
- `def-abelian-scheme` · definition — Abelian schemes over a base
- `lem-s-rational-map-descends-along-faithfully-flat-smooth-maps` · lemma — An S-rational map defined after a faithfully flat smooth base change is defined
- `lem-rational-map-to-affine-target-indeterminacy-pure-codimension-one` · lemma — Indeterminacy of a rational map into an affine scheme is of pure codimension one
- `lem-neron-model-uniqueness-etale-base-change-and-local-nature` · lemma — Uniqueness, weak Neron property, etale base change and local nature of Neron models
- `lem-two-torsion-and-uniqueness-of-plane-cubic-group-law` · lemma — Two-torsion and uniqueness of the group law on a Weierstrass cubic
- `def-arith-tate-module-and-inertia` · definition — Prime-to-residue-characteristic Tate modules and inertia
- `lem-arith-strict-henselian-etale-sections` · lemma — Strict henselian etale sections
- `lem-arith-smooth-group-identity-component-open` · lemma — The identity model of a smooth group with abelian generic fibre
- `lem-arith-dilatations-and-defect-of-smoothness` · lemma — Dilatations and defect computation
- `lem-arith-affine-codimension-one-neighbourhood-and-divisors` · lemma — Affine codimension-one neighbourhoods and divisors
- `lem-abelian-scheme-base-change-and-products` · lemma — Base change and products of abelian schemes
- `thm-weil-extension-rational-map-into-group-scheme` · theorem — Weil's extension theorem for rational maps into smooth separated group schemes
- `def-good-reduction-and-abelian-scheme-model` · definition — Good reduction of an abelian variety over a Dedekind scheme
- `def-rigidified-relative-picard-functor-and-dual-abelian-variety` · definition — The rigidified relative Picard functor and the dual abelian variety
- `lem-abelian-scheme-universal-structure-sheaf-sections` · lemma — Universal structure-sheaf sections of an abelian scheme
- `lem-arith-prime-to-characteristic-multiplication-etale` · lemma — Prime to characteristic multiplication etale
- `lem-arith-finite-permissible-smoothening` · lemma — Defect decrease and finite smoothening
- `cor-extension-of-k-morphisms-into-abelian-schemes` · corollary — K-morphisms from smooth models into abelian schemes extend uniquely
- `lem-theorem-of-the-square-and-mumford-homomorphism` · lemma — The theorem of the square and the Mumford homomorphism into the Picard group
- `lem-abelian-scheme-fibrewise-constant-morphism-rigidity` · lemma — Fibrewise constant morphisms from an abelian scheme factor through the base
- `lem-arith-field-prime-to-characteristic-torsion-and-tate-module` · lemma — Field prime to characteristic torsion and tate module
- `lem-arith-projective-weak-model-and-rational-mapping` · lemma — Projective weak models and rational mapping
- `lem-arith-rigidified-line-bundle-descent` · lemma — Rigidification and effective descent of line bundles
- `lem-abelian-scheme-fibres-commutative-and-pointed-morphisms` · lemma — Fibres of abelian schemes and unit-preserving morphisms
- `def-polarization-of-an-abelian-variety` · definition — Polarizations and the Mumford isogeny attached to an ample line bundle
- `lem-arith-special-fibre-torsion-growth-detects-properness` · lemma — Special fibre torsion growth detects properness
- `lem-arith-invariant-volume-and-finite-minimal-models` · lemma — Invariant volume and finite minimal classes
- `lem-arith-cube-derived-square-over-dvr` · lemma — Cube-derived square over DVR
- `lem-arith-hilbert-divisor-charts-and-picard-diagonal` · lemma — Divisor charts and the separated rigidified Picard diagonal
- `lem-multiplication-by-n-on-abelian-scheme` · lemma — Multiplication by n on an abelian scheme is finite flat, and etale for n invertible
- `thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre` · theorem — An abelian scheme is the Neron model of its generic fibre
- `lem-arith-separated-minimal-model-and-translations` · lemma — Separated minimal union and translations
- `lem-arith-group-model-with-abelian-generic-fibre-quasiprojective` · lemma — Divisor ampleness
- `lem-arith-picard-representation-by-generic-quotient-and-translates` · lemma — Picard representation by generic quotient and translates
- `cor-good-reduction-admits-a-neron-model` · corollary — Good reduction supplies a Neron model
- `lem-good-reduction-stable-under-base-change` · lemma — Good reduction is stable under base change of the base
- `lem-arith-connected-smooth-quasiprojective-model-proper-special-fibre` · lemma — Connected smooth quasiprojective model proper special fibre
- `lem-arith-abelian-scheme-torsion-specialization-unramified` · lemma — Abelian scheme torsion specialization unramified
- `lem-arith-birational-group-law-from-minimal-model` · lemma — Birational group law
- `lem-arith-coherent-kunneth-and-proper-image-dual` · lemma — Coherent Kunneth, the tangent bound and the proper-image dual
- `lem-arith-strictification-of-dvr-birational-group-law` · lemma — Strictification
- `lem-arith-dual-and-poincare-bundle-finite-field-descent` · lemma — Finite-field descent of the dual and the Poincare bundle
- `lem-arith-strict-law-translation-and-graph-calculus` · lemma — Strict law graph calculus
- `lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity` · lemma — Homogeneous bundles and Mumford surjectivity
- `lem-arith-separated-translate-gluing` · lemma — Separated translate gluing
- `lem-arith-dual-isogeny-kernel-and-abelian-biduality` · lemma — Dual isogeny kernels and canonical biduality
- `lem-arith-theta-extension-splitting-and-isotropic-descent` · lemma — Theta extensions, splitting and isotropic descent
- `lem-arith-poincare-cohomology-at-the-identity` · lemma — Poincare cohomology at the identity
- `lem-arith-finite-translate-group-completion` · lemma — Finite translate completion and uniqueness
- `lem-arith-symmetric-homomorphism-is-a-mumford-map` · lemma — Symmetric homomorphisms are Mumford maps
- `lem-arith-mumford-map-degree-is-euler-characteristic-square` · lemma — The square degree of a Mumford map
- `lem-arith-effective-ample-pair-and-group-descent` · lemma — Effective ample pair and group descent
- `lem-arith-polarization-and-picard-twist-ampleness` · lemma — Polarizations and ampleness under Picard twists
- `thm-abelian-variety-dual-and-polarization` · theorem — The dual abelian variety, the Poincare bundle and polarizations
- `lem-arith-full-minimal-model-embedding` · lemma — Full minimal model embedding
- `thm-neron-model-existence-in-stated-class` · theorem — Existence of Neron models for abelian varieties over a discrete valuation ring
- `thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic` · theorem — Neron ogg shafarevich prime to residue characteristic
- `thm-good-reduction-and-smooth-proper-base-change` · theorem — Good reduction and smooth proper base change for abelian schemes

### `abelian-varieties-base-change-and-arithmetic-models-examples` — Abelian Varieties, Base Change, and Arithmetic Models — Examples (2 item(s))

- `ex-elliptic-curve-good-and-bad-reduction` · example — An elliptic curve with good reduction and an elliptic curve with bad reduction
- `cex-abelian-variety-does-not-have-good-model-over-every-base` · counterexample — Not every abelian variety over a Dedekind function field extends to an abelian scheme

## Your seams

Your pages depend on another group's:

- `deformation-theory-of-schemes-and-obstruction-spaces` requires `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations` (group h, batch 23)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-40-geometry-braids-rep-27`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
